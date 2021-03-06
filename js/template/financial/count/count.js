define(function(require, exports){
	var menuKey = 'financial_count',
		listHeaderTamplate = require('./view/listHeader'),
		listTableTemplate = require('./view/listTable'),
		updateTemplate = require("./view/update"),
		Reimbursement = require("./view/Reimbursement"),
		qualityTempLate = require("./view/quality"),
		outDetailTempLate = require("./view/outDetail"),
		outTransferDetailTemplate = require('./view/outInnerTransferDetail'),
		tripDetailTempLate = require("./view/tripDetail"),
		viewLogTemplate = require("./view/viewLog"),
		shopArrangeTemplate = require('./view/shopArrange'),
		selfArrangeTemplate = require('./view/selfPayArrange'),
		otherInArrangeTemplate = require('./view/otherIn'),
		insuranceArrangeTemplate = require('./view/insuranceArrange'),
		busArrangeTemplate = require('./view/busArrange'),
		restArrangeTemplate = require('./view/restArrange'),
		hotelArrangeTemplate = require('./view/hotelArrange'),
		scenicArrangeTemplate = require('./view/scenicArrange'),
		ticketArrangeTemplate = require('./view/ticketArrange'),
		otherOutTemplate = require('./view/otherOutArrange'),
		transitTemplate = require('./view/innerTransferArrange'),
		guideTamplate = require('./view/guideAccount'),
		addFeeTemplate = require('./view/addFee'),
		viewCostRemarkTemplate = require('./view/viewCostRemark'),
		formulaTemplate = require('./view/formulaList'),
		tripGroupTemplate = require('./view/tripGroup'),
		updateTabId = menuKey+"-update",
		ReimbursementId = menuKey+"-Reimbursement",
		detailId= menuKey + "-detail",
		outDetailId= menuKey + "-outDetail",
		qualityId = menuKey+"-quality",
		tripDetailId = menuKey+"-tripDetail",
		listTabId = menuKey,
		shopNoneAutoFeilds = ['billRemark', 'shopPolicyName', 'currInCome','guideArrangeId','shopGuideName','shopGuideId','currGuideName','currGuideId','currGuideRemark'],
		otherOUtNoneAutoFeilds = ['addOtherOutName','billRemark','guideName','guideId','guideArrangeId'],
		ticketNoneAutoFields = ['seatLevel','startArea','shift','ticketType','billRemark','startTime','endArea','guideName','guideId','guideArrangeId'],
		scenicNoneAutoFields = ['scenicName','scenicItem','guideName','guideId','billRemark','guideArrangeId'],
		hotelNoneAutoFields = ['hotelName','hotelRoom','billRemark','guideName','guideId','billRemark','guideArrangeId']
		restNoneAutoFields = ['restaurantName','guideName','guideId','billRemark','guideArrangeId'],
		busNoneAutoFields = ['startTime','endTime','companyName','licenseNumber','seatCount','guideName','guideId','billRemark','guideArrangeId'],
		otherInNoneAutoFields = ['title','billRemark'],
		selfNoneAutoFields = ['selfPayName','selfPayItem','guideName','guideArrangeId','billRemark','customerRebateMoney'];
	var Count = {
		$listTab:false,
		$updateTab:false,
		$ReimbursementTab:false,
		$listBodyTab:false,
		$searchArea:false,
		$args:{},
		guide:{}
	};
	//暴露的方法--初始化列表
	Count.initModule = function(){
		var html = listHeaderTamplate();
		Tools.addTab(listTabId,'报账审核',html);
		//获取主体列表数据
		Count.listCountBody(0,{});
    	
    	//搜索区域事件绑定
    	Count.initListHeaderEvents();
	};

	//搜索区域事件
	Count.initListHeaderEvents = function(){
		Count.shopClickCount = 0;
		var $listTabId = $("#tab-"+listTabId+"-content");
		Count.$listTab = $listTabId;
		Count.$searchArea = $listTabId.find('.T-search-area');
		var $searchObj = Count.$searchArea;
			$listObj = Count.$listTab;

		FinancialService.searchChange(Count.$listTab);
		//格式化日期
    	Count.setDatePicker(Count.$searchArea.find('.datepicker'));
    	//获取搜索区域的列表数据
    	var $lineProductObj = Count.$searchArea.find("input[name=chooseLineProductName]");//获取线路
    	Count.getLineproductData($lineProductObj);
    	var $guideObj = Count.$searchArea.find('input[name=chooseGuideRealName]');//获取导游
    	Count.getGuideData($guideObj);
    	Count.getOpList(Count.$searchArea.find('input[name=dutyOPUserName]'));

		//搜索事件 T-high-search
		$searchObj.find(".T-search").on('click',function(event){
			event.preventDefault();
			Count.listCountBody(0);
		});

		//高级搜索事件
		$searchObj.find(".T-high-search").on('click',function(event){
			event.preventDefault();
			var $that = $(this);
			if($that.hasClass('packUp')) {
				 $that.addClass('unfold').removeClass('packUp');
                $searchObj.find('.T-highSearch').addClass('hidden');
			} else {
				$that.addClass('packUp').removeClass('unfold');
				$searchObj.find('.T-highSearch').removeClass('hidden');
			}
			Count.$listTab.data("searchEdit",true);		
		});
		//状态栏事件
		$searchObj.find(".T-sleect-ul").on('click','a',function(){
			$(this).closest('div').find(".T-select-status").attr("data-value",$(this).attr("data-value"));
			$(this).closest('div').find("span").text($(this).text());
			Count.$listTab.data("searchEdit",true);
			Count.listCountBody(0);
		});
        $searchObj.find(".T-time-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            Count.$listTab.data("searchEdit",true);
            Count.listCountBody(0);
        });
	};
	//获取主体列表数据
	Count.listCountBody = function(page,args){
		args = args || {};
		if(Count.$searchArea && arguments.length === 1){
			args = {
				tripNumber : Count.$searchArea.find('input[name=chooseTripNumber]').val(),
				lineProductId : Count.$searchArea.find('input[name=lineProductId]').val(),
				lineProductName : Count.$searchArea.find('input[name=chooseLineProductName]').val(),
				guideId : Count.$searchArea.find('input[name=guideId]').val(),
				guideName : Count.$searchArea.find('input[name=chooseGuideRealName]').val(),
				dutyOPUserId : Count.$searchArea.find('input[name=dutyOPUserId]').val(),
				dutyOPUserName : Count.$searchArea.find('input[name=dutyOPUserName]').val(),
				endTime : Count.$searchArea.find('input[name=endTime]').val(),
				startTime : Count.$searchArea.find('input[name=startTime]').val(),
				billStatus : Count.$searchArea.find(".T-select-status").attr("data-value"),
				timeStatus : Count.$searchArea.find(".T-time-status").find('button').data("value") || 0,
				orderNumber : Count.$searchArea.find('input[name=orderNumber]').val(),
				contactInfo : Count.$searchArea.find('input[name=contactInfo]').val()
			};
			if(Count.$searchArea.find('.T-high-search').hasClass('unfold')) {
				args.contactInfo = '';
				args.lineProductId = '';
				args.lineProductName = '';
				args.guideId = '';
				args.guideName = '';
				args.dutyOPUserId = '';
				args.dutyOPUserName = '';
			}
		}
		args.pageNo = page || 0;

		args = FinancialService.getChangeArgs(args,Count.$listTab)
		$.ajax({
			url:KingServices.build_url("financialTripPlan","listFinancialTripPlan"),
			type:'POST',
			data:args,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var tripPlanList = JSON.parse(data.tripPlanList);
                    data.tripPlanList = tripPlanList;
					var html = listTableTemplate(data);

					html = Count.authFilter(html);
					html = Tools.filterMoney(html);
					html = Tools.filterUnPoint(html);      
					Count.$listTab.find(".T-counterList").html(html); 
					if(!Count.$listTab.data("searchEdit") && Count.$listTab.data("total")){
						Count.loadListSumData(Count.$listTab);
					} else {
						Count.getListSumData(args,Count.$listTab);
					}
					Count.listEvents();
					laypage({
	                    cont: Count.$listTab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
	                    pages: data.totalPage, //总页数
	                    curr: (args.pageNo + 1),
	                    jump: function(obj, first) {
	                        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
	                            Count.listCountBody(obj.curr -1);
	                        }
	                    }
                	});
				}
			}
		});
	};
	//列表事件
	Count.listEvents = function(){
		//列表事件
		$listObj.find('.T-count-list').on('click','.T-action',function(event){
			
			event.preventDefault();
			var $that = $(this),
				id = $that.closest('tr').attr('id'),
				billStatus = $that.closest('tr').attr('billStatus'),
				guideFinancialExamine = $that.closest('tr').attr('guideFinancialExamine'),
				agencyId = $that.closest('tr').data('agencyid');
			if($that.hasClass('T-update')){
				
				//未报账
				if(billStatus == -1){
					showMessageDialog("导游未报账，不能做审核操作");	
				}else if(guideFinancialExamine == 1){
					//导游已报账
					showMessageDialog('该团导游账务已对账，不能修改！');
				}else{
					//审核事件
					Count.agencyid = agencyId;
					Count.updateExamine(id);
				}
			}else if($that.hasClass('T-account')){
				//报账事件
			    var id = $(this).attr('data-entity-id');
            	var billStatus = $(this).attr('data-entity-billStatus');
            	if(billStatus == -1 || billStatus == "-1") {
            		Count.Reimbursement(id);
            	} else {
            		showMessageDialog("本团已报账，不能重复操作！", function(){});
            	}
			}else if($that.hasClass('T-quality')){
				//质量统计事件绑定
				var tripId = $(this).data('id'); 
                Count.getquality(tripId);
			}else if($that.hasClass('T-detail')){
				//单团明细
				var tripId = $(this).attr('data-entity-id');
				Count.agencyid = agencyId;
				Count.viewTripDetail(tripId);
			} else if($that.hasClass('T-showLineInfo')){
				var $tr = $that.closest('tr');
                    $nextTr = $tr.nextAll('tr'),
                    $icon = $that.find('i.fa'),
                    isHide = 1,
                    count = 0;
                if($icon.hasClass('fa-plus')){
                    $icon.removeClass('fa-plus').addClass('fa-minus');
                    isHide = 0;
                }else{
                    $icon.removeClass('fa-minus').addClass('fa-plus');
                    isHide = 1;
                }
                for(var i=0; i<$nextTr.length; i++){
                    if(!!$nextTr.eq(i).attr('id')){
                        break;
                    }else{
                        if(isHide === 1){
                            $nextTr.eq(i).addClass('hidden');
                        }else{
                            $nextTr.eq(i).removeClass('hidden');
                        }
                    }
                    count++;
                }
			}

		});
	};

	Count.getListSumData = function(args,$tab){
		$.ajax({
			url: KingServices.build_url("financialTripPlan","findFinancialListPageCount"),
			type: 'POST',
			data: args,
		})
		.done(function(data) {
			$tab.data("total",data.financialTripPlan);
			Count.loadListSumData($tab);
		});
	}
	Count.loadListSumData = function($tab){
		var total = $tab.data("total");
		$tab.find('.T-income').text(total.getAllMoney);
		$tab.find('.T-cost').text(total.payAllMoney);
		$tab.find('.T-profit').text(total.grossProfitMoney);
		$tab.find('.T-preProfit').text(total.perGrossProfitMoney);
		$tab.find('.T-peopleCount').text(total.adultCount + " 大 " + total.childCount + " 小");
		$tab.find('.T-tripCount').text(total.tripNumber);
	};

	//单团明细
	Count.viewTripDetail = function($id){
		$.ajax({
			url:KingServices.build_url('financialTripPlan','findFinancialTripPlanById'),
			data:{
				id:$id
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					var taskList = data.guideArranges.listMap;
					for(var i = 0 ;i<taskList.length;i++){
						taskList[i].taskJson = JSON.parse(taskList[i].taskJson);
					};
					data.guideArranges.listMap = taskList;
					var tmp = {
						editStatus:2,
						otherArrange:data.otherArrange,
						shopArrange:data.shopArrange,
						ticketArrange:data.ticketArrange,
						insuranceArrange:data.insuranceArrange,
						hotelArrange:data.hotelArrange,
						guideArrange:data.guideArranges,
						guideCount:data.guideArranges.listMap.length,
						otherIncome:data.otherIncome,
						remarkArrangeList:data.remarkArrangeList,
						restaurantArrange:data.restaurantArrange,
						selfpayArrange:data.selfpayArrange,
						scenicArrange:data.scenicArrange,
						busCompanyArranges:data.busCompanyArranges,
						touristGroup:data.touristGroup,
						transfer:data.transfer,
						tripPlan:data.tripPlan,
						WEB_IMG_URL_BIG:data.WEB_IMG_URL_BIG,
						WEB_IMG_URL_SMALL:data.WEB_IMG_URL_SMALL,
	                    id: $id,
	                    agencyId: Count.agencyid,
	                    financialTripPlanId:data.financialTripPlanId
	                };
	                Count.guide = data.guideArranges;
	                tmp.remarkArrangeList = Count.handleRemark(tmp.remarkArrangeList);
	                tmp.shopArrange.listMap = Count.formatShopRate(tmp.shopArrange.listMap);
	                tmp.selfpayArrange.listMap = Count.formatSelfRate(tmp.selfpayArrange.listMap);
	                var html = tripDetailTempLate(tmp);
	                Tools.addTab(tripDetailId,'单团明细',html);
	                var $detailId = $("#tab-"+tripDetailId+"-content");
	                //查看团款明细说明
					$detailId.find('.T-viewCostDetail').on('click',function(){
						Count.viewCostDetail($(this),tmp.touristGroup);
					});
	                //绑定自动计算事件
	                Count.installList($detailId,tmp);
				}
			}
		});
	};
	//单团明细页面事件
	Count.detailEvents = function($obj,data){

		//显示隐藏
		Count.showOrhideList($obj);
		//显示计算公式
		$obj.find('.T-formula').on('click',function(){
			Count.showFormula($obj);
		});
		var $listObj = $obj.find('.T-list');
		//团款
		var $tripCostObj = $listObj.find('.T-tripDetail');
		$tripCostObj.off('click').on('click','.T-viewCostDetail',function(){
			Count.viewCostDetail($(this),data.touristGroup);
		}).on('click','.T-viewTouristGroup',function(){
			var id = $(this).closest('tr').data('pid');
			KingServices.viewTouristGroup(id);
		});
		//按钮事件--单团核算表
		$obj.find('.T-tripAccount').off('click').on('click',function(){
			var id = $obj.find('[name=financialTripPlanId]').val();
			var pluginKey = 'plugin_print';
			Tools.loadPluginScript(pluginKey);
			Count.viewTripAccount(id);
		});
		//按钮事件--单团核算表(包含中转、外转)
		$obj.find('.T-innerTransAccount').off('click').on('click',function(){
			var id = $obj.find('[name=financialTripPlanId]').val();
			var pluginKey = 'plugin_print';
			Tools.loadPluginScript(pluginKey);
			Count.viewTripAccount(id,'transfer');
		});
		//导游报账事件
		var $guideAccount = $obj.find('.T-guideAccount');
		$guideAccount.off('click').on('click',function(){
			var id = $obj.find('.financial-tripPlanId').val();
			var pluginKey = 'plugin_print';
			Tools.loadPluginScript(pluginKey);
			KingServices.viewFeeDetail(id);
		});
		//导游金额计算
		var $guideObj = $listObj.find('.T-count-guide');
		$guideObj.find('input').off('change').on('change',function(){
			var $that = $(this),
				tagName = $that.attr('name');
			if (tagName !='remark') {
				Count.calculateCost($that);
				//计算金额
				Count.autoGuideSum($guideObj,$obj);
			}
		});
		//购物
		var $shopObj = $listObj.find('.T-count-shopping');
		$shopObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.calculateCost($(this));
			//计算金额
			Count.autoShopSumCost($(this),$obj);
			Count.formatDays($(this),$obj);
			Count.totalRebeatMoney($(this),$obj);
		});
		//自费
		var $selfObj = $listObj.find('.T-count-selfPay');
		$selfObj.find('input[type=hidden]').off('change').on('change',function(){
			//校验输入的数据是否合法
			Count.calculateCost($(this));
			//计算自费金额
			Count.autoSelfSum($(this),$obj);
			Count.formatDays($(this),$obj);
		});
		//其他收入--计算、新增
		var $otherIn = $listObj.find('.T-count-otherIn');
		$otherIn.find('input[type=hidden]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "title"){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				Count.autoOtherInSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
		});
		
		
		//车费--计算、新增
		var $busObj = $listObj.find('.T-count-bus');
		$busObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.autoBusSum($(this),$obj);
			Count.formatDays($(this),$obj);
		});
		//餐费处理--计算、新增
		var $restObj = $listObj.find('.T-count-restaurant');
		$restObj.find('input[type="hidden"]').off('change').on('change',function(){
			Count.autoRestaurantSum($(this),$obj);
			Count.formatDays($(this),$obj);
		});
		//房费处理--计算、新增
		var $hotelObj = $listObj.find('.T-count-hotel');
		$hotelObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoHotelSum($(this),$obj);
			Count.formatDays($(this),$obj);
		});
		//景区处理--计算、新增
		var $scenicObj = $listObj.find('.T-count-scenic');
		$scenicObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoScenicSum($(this),$obj);
			Count.formatDays($(this),$obj);
		});
		//票务处理--计算、新增
		var $ticketObj = $listObj.find('.T-count-ticket');
		$ticketObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoTicketSum($(this),$obj);
			Count.formatDays($(this),$obj);
		});
		//其他支出
		var $totherOutObj = $listObj.find('.T-count-otherOut');
		$totherOutObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoOtherOutSum($(this),$obj);
			Count.formatDays($(this),$obj);
		});
		//计算保险费用
		var $insureObj = $listObj.find('.T-count-insurance');
		$insureObj.off('change').on('change','input',function(){
			Count.autoInsureanceSum($(this),$obj);
		});
		//计算团收入
		Count.tripIncome($obj);
		//计算成本
		Count.tripCost($obj);
		//触发页面的change事件
		$obj.find('input[name=sumIpt]').trigger('change');
		//按钮时间--安排预算表
		$obj.find('.T-tripPlanArrange').off('click').on('click',function() {
			var id = $obj.find('.financial-tripPlanId').val();
			
			KingServices.viewTripDetail(id);
		});
		
		//查看图片事件
		$listObj.find('.btn-view').off('click').on('click',function(){
			FinancialService.viewBillImage(this);
		});
		//查看操作记录事件
		$obj.find('.btn-financialLog').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
			id = $obj.find('.financial-tripPlanId').val();
			Count.viewTripLog(id);
		});
	};
	//单团报账
	Count.Reimbursement = function($id){
		$.ajax({
			url:KingServices.build_url('financialTripPlan','findFinancialTripPlanById'),
			data:{
				id:$id
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					var taskList = data.guideArranges.listMap;
					for(var i = 0 ;i<taskList.length;i++){
						taskList[i].taskJson = JSON.parse(taskList[i].taskJson);
					};
					data.guideArranges.listMap = taskList;
					var tmp = {
						editStatus:0,
						otherArrange:data.otherArrange,
						shopArrange:data.shopArrange,
						ticketArrange:data.ticketArrange,
						insuranceArrange:data.insuranceArrange,
						hotelArrange:data.hotelArrange,
						guideArrange:data.guideArranges,
						guideCount:data.guideArranges.listMap.length,
						otherIncome:data.otherIncome,
						remarkArrangeList:data.remarkArrangeList,
						restaurantArrange:data.restaurantArrange,
						selfpayArrange:data.selfpayArrange,
						scenicArrange:data.scenicArrange,
						busCompanyArranges:data.busCompanyArranges,
						touristGroup:data.touristGroup,
						transfer:data.transfer,
						tripPlan:data.tripPlan,
						WEB_IMG_URL_BIG:data.WEB_IMG_URL_BIG,
						WEB_IMG_URL_SMALL:data.WEB_IMG_URL_SMALL,
	                    id: $id,
	                    financialTripPlanId:data.financialTripPlanId
	                };
	                // 按拼音排序
					Tools.sortByPinYin(data.guideArranges.listMap, 'guideName');

	                Count.reimbursementGuide = data.guideArranges;
	                tmp.shopArrange.listMap = Count.formatShopRate(tmp.shopArrange.listMap);
	                tmp.selfpayArrange.listMap = Count.formatSelfRate(tmp.selfpayArrange.listMap);
	                var html = Reimbursement(tmp);
	                
	                Tools.addTab(ReimbursementId,'单团报账',html);
	                var $ReimbursementId = $("#tab-"+ReimbursementId+"-content");
					Count.$ReimbursementTab = $ReimbursementId;
					//查看团款明细说明
					
					//加载列表
					Count.installList($ReimbursementId,tmp);

				}
			}
		});
	};
	//单团报账页面事件
	Count.reimbursementEvents = function($obj,data){
		
		//显示隐藏
		Count.showOrhideList($obj);
		
		//显示计算公式
		$obj.find('.T-formula').on('click',function(){
			Count.showFormula($obj);
		});

		//导游报账事件
		var $guideAccount = $obj.find('.T-guideAccount');
		$guideAccount.off('click').on('click',function(){
			var id = $obj.find('.financial-tripPlanId').val();
			var pluginKey = 'plugin_print';
			Tools.loadPluginScript(pluginKey);
			KingServices.viewFeeDetail(id);
		});
		// 禁用自动计算的判断条件
		Count.loading = true;
		var $listObj = $obj.find('.T-list');

		//团款
		var $tripCostObj = $listObj.find('.T-tripDetail');
		$tripCostObj.off('click').on('click','.T-viewCostDetail',function(){
			Count.viewCostDetail($(this),data.touristGroup);
		}).on('click','.T-viewTouristGroup',function(){
			var id = $(this).closest('tr').data('pid');
			KingServices.viewTouristGroup(id);
		});
		//获取导游
		$tripCostObj.find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//导游金额计算
		var $guideObj = $listObj.find('.T-count-guide');
		$guideObj.find('input').off('change').on('change',function(){
			var $that = $(this),
				tagName = $that.attr('name');
			if (tagName !='remark') {
				Count.calculateCost($that);
				//计算金额
				Count.autoGuideSum($guideObj,$obj);
			}
		});
		//购物处理--计算、新增
		var $shopObj = $listObj.find('.T-count-shopping');
		$shopObj.off('click').on('click','.T-addShop',function(){
			Count.addShop($(this),$obj);
		}).on('click','.T-shopArrDelItem',function(){
			Count.delShop($(this),$obj);
		}).on('blur','input[name=shopGuideMoney]',function(){
			//填写金额带出社佣、导佣 T-del
			var shopPolicyId = $(this).closest('tr').find('input[name=shopPolicyId]').val();
			var consumeMoney = $(this).val();
			var date =$obj.find('.tripPlanStartTime').val();
			Count.getShopRate($(this),shopPolicyId,consumeMoney,date,$obj);
		}).on('click','.T-shopArrDelAll',function(){
			//删除新增的购物安排
			Count.delShopArrange($(this),$obj);
		}).on('change','input',function(){
			var $that = $(this),
				tagName = $that.attr('name');
			if (shopNoneAutoFeilds.indexOf(tagName) < 0) {
				Count.calculateCost($that);
				//计算金额
				if (Count.loading) {
					Count.autoShopSumCost($that,$obj);
				} else {
					Count.autoShopSum($that,$obj);
				}
			}
			Count.formatDays($that,$obj);
		}).on('click','.T-shopArrDelItem',function(){
			Count.delShop($(this),$obj);
		}).on('click','.T-currGuide',function(){
			Count.addShopGuide($(this),$obj);
		}).on('click','.T-shopGuide',function(){
			Count.addShopGuide($(this),$obj);
		}).on('click','.T-delShopGuide',function(){
			Count.delShopGuide($(this),$obj);
		});
		$listObj.find('.T-math-round').off('click').on('click', function(){
			//清除小数点
			Count.delValDecimal($(this),$shopObj,$obj);
		});
		//获取导游
		$shopObj.find('td[name=shopGuideName]').find('input[name=shopGuideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//获取导游
		$shopObj.find('td[name=currGuide]').find('input[name=currGuideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增购物安排
		$listObj.find('.T-shop-add').find('.T-addShopping').on('click',function(){
			Count.addShopping($shopObj,$obj);
		});
		//商品选择
		var $shopPolicyObj = $shopObj.find('input[name=shopPolicyName]');
		if($shopPolicyObj.length>0){
			Count.getShopPolicy($shopPolicyObj.closest('tr'),$obj);
		};
		//自费处理--计算、新增
		var $selfObj = $listObj.find('.T-count-selfPay');
		$selfObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(selfNoneAutoFields.indexOf(nameFlag)<0){
				//校验输入的数据是否合法收入
				Count.calculateCost($(this));
				//计算金额
				if (Count.loading) {
					Count.autoSelfSum($(this),$obj);
				} else {
					Count.sumRateMoney($(this),$obj);
				}
			}
			Count.formatDays($(this),$obj);
		});
		$selfObj.off('click').on('click','.T-addSelfGuide',function(){
			//添加自费导游
			Count.addSelfGuide($(this),$obj);
		}).on('click','.T-delSelfGuide',function(){
			//删除导游
			Count.delSelfGuide($(this),$obj);

		}).on('click','.T-selfArrDel',function(){
			Count.delSelfArrange($(this),$obj);
		});
		if($selfObj.find('input[name=selfPayItem]').length>0){
			var selfPayItemNameObj = $selfObj.find('input[name=selfPayItem]');
			selfPayItemNameObj.each(function(){
				Count.getSelfItemData($(this).closest('tr'),$obj);
			});
		};
		//获取导游
		$selfObj.find('td[name=selfGuideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增自费安排
		$listObj.find('.T-self-add').find('.T-addSelf').off('click').on('click',function(){
			Count.addSelf($selfObj,$obj);
		});
		//其他收入--计算、新增
		var $otherIn = $listObj.find('.T-count-otherIn');
		$otherIn.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(otherInNoneAutoFields.indexOf(nameFlag)<0){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				Count.autoOtherInSum($(this),$obj);
			}
			Count.formatDays($(this),$obj);
		});

		$otherIn.off('click').on('click','.T-otherInArrDel',function(){
			//删除其他收入
			Count.delOtherInArrange($(this),$obj);
		});
		//新增其他收入安排
		$listObj.find('.T-OtherIn-add').off('click').on('click',function(){
			Count.addOtherIn($otherIn,$obj);
		});
		//车费--计算、新增
		//车费--计算、新增
		var $busObj = $listObj.find('.T-count-bus');
		$busObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(busNoneAutoFields.indexOf(nameFlag)<0){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				Count.autoBusSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		$busObj.off('click').on('click','.T-busArrDel',function(){
			Count.sumBusFeeAfDel($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$busObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增车费
		$listObj.find('.T-buspay-add').off('click').on('click',function(){
			Count.addBus($busObj,$obj);
		});
		
		//餐费处理--计算、新增
		var $restObj = $listObj.find('.T-count-restaurant');
		$restObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name'),$that = $(this);
			if(restNoneAutoFields.indexOf(nameFlag)<0){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				/*if(nameFlag == 'guideRealCount') {
					$that.val(Tools.toFixed($(this).val(),1));
				}*/
				//计算金额
				Count.autoRestaurantSum($(this),$obj);
			}

			Count.formatDays($(this),$obj);
		});
		$restObj.off('click').on('click','.T-restArrDel',function(){
			//删除安排
			Count.delRestArrange($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$restObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增餐费安排
		$listObj.find('.T-restaurantpay-add').off('click').on('click',function(){
			Count.addRest($restObj,$obj);
		});
		//房费处理--计算、新增
		var $hotelObj = $listObj.find('.T-count-hotel');
		$hotelObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(hotelNoneAutoFields.indexOf(nameFlag)<0){
				Count.calculateCost($(this));
				Count.autoHotelSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
		});
		//删除房间安排T-hotelArrDel
		$hotelObj.off('click').on('click','.T-hotelArrDel',function(){
			Count.delHotelArrange($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$hotelObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增房费
		$listObj.find('.T-hotel-add').off('click').on('click',function(){
			Count.addHotel($hotelObj,$obj);
		});
		//景区处理--计算、新增
		var $scenicObj = $listObj.find('.T-count-scenic');
		$scenicObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(scenicNoneAutoFields.indexOf(nameFlag)<0){
				Count.calculateCost($(this));
				Count.autoScenicSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		//删除景区安排
		$scenicObj.off('click').on('click','.T-secnicArrDel',function(){
			Count.delSecnicArrange($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$scenicObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增景区
		$listObj.find('.T-scenic-add').off('click').on('click',function(){
			Count.addScenic($scenicObj,$obj);
		});
		//票务处理--计算、新增
		var $ticketObj = $listObj.find('.T-count-ticket');
		$ticketObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(ticketNoneAutoFields.indexOf(nameFlag)<0){
				Count.calculateCost($(this));
				Count.autoTicketSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		//删除票务安排
		$ticketObj.off('click').on('click','.T-ticketArrDel',function(){
			Count.delTicketArrange($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$ticketObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增票务
		$listObj.find('.T-ticket-add').off('click').on('click',function(){
			Count.addTicket($ticketObj,$obj);
		});
		//其他支出
		var $otherOutObj = $listObj.find('.T-count-otherOut');
		$otherOutObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(otherOUtNoneAutoFeilds.indexOf(nameFlag)<0){
				Count.calculateCost($(this));
				Count.autoOtherOutSum($(this),$obj);
				Count.formatDays($(this),$obj);
			};
		});
		//其他支出安排页面点击事件
		$otherOutObj.off('click').on('click','.T-otherOutArrDel',function(){
			Count.delOtherOutArrange($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.autoOtherOutSum($(this),$obj);
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$otherOutObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增其他支出
		$listObj.find('.T-otherOut-add').off('click').on('click',function(){

			Count.addOtherOut($otherOutObj,$obj);
		});
		//计算保险费用
		var $insureObj = $listObj.find('.T-count-insurance');
		$insureObj.off('change').on('change','input',function(){
			Count.autoInsureanceSum($(this),$obj);
		});
		//计算团收入
		Count.tripIncome($obj);
		//触发页面的change事件
		$obj.find('input[name=sumIpt]').trigger('change');
		//按钮事件--保存信息
		$obj.find('.T-saveCount').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
            var financialTripPlanId = $(this).attr('data-entity-financial-id');
			Count.saveTripCount(id,financialTripPlanId,$obj,2);
		});
		//按钮时间--安排预算表
		$obj.find('.T-tripPlanArrange').off('click').on('click',function() {
			var id = $obj.find('.financial-tripPlanId').val();
			KingServices.viewTripDetail(id);
		});
		//报账完成事件
		$obj.find('.T-fanishAccount').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
			var checkTripIsReceived = Count.checkTripIsReceived($obj);
			var financialTripPlanId = $(this).attr('data-entity-financial-id');
			if(checkTripIsReceived){
				showConfirmDialog('提交报账，团款现收将默认为已收到', function() {
					Count.saveTripCount(id,financialTripPlanId,$obj,3);
				});
			}else{
				Count.saveTripCount(id,financialTripPlanId,$obj,3);
			};
            
            
		});
		//查看图片事件
		$listObj.find('.btn-view').off('click').on('click',function(){
			FinancialService.viewBillImage(this);
		});
		//查看操作记录事件
		$obj.find('.btn-financialLog').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
			id = $obj.find('.financial-tripPlanId').val();
			Count.viewTripLog(id);
		});
		Count.loading = false;
	};
	//单团审核
	Count.updateExamine = function($id){
		$.ajax({
			url:KingServices.build_url("financialTripPlan","findFinancialTripPlanById"),
			type:'POST',
			data:{
				id:$id 
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					var taskList = data.guideArranges.listMap;
					for(var i = 0 ;i<taskList.length;i++){
						taskList[i].taskJson = JSON.parse(taskList[i].taskJson);
					};
					data.guideArranges.listMap = taskList;
					var tmp = {
						otherArrange:data.otherArrange,
						shopArrange:data.shopArrange,
						ticketArrange:data.ticketArrange,
						insuranceArrange:data.insuranceArrange,
						hotelArrange:data.hotelArrange,
						guideArrange:data.guideArranges,
						guideCount:data.guideArranges.listMap.length,
						otherIncome:data.otherIncome,
						remarkArrangeList:data.remarkArrangeList,
						restaurantArrange:data.restaurantArrange,
						selfpayArrange:data.selfpayArrange,
						scenicArrange:data.scenicArrange,
						busCompanyArranges:data.busCompanyArranges,
						touristGroup:data.touristGroup,
						transfer:data.transfer,
						tripPlan:data.tripPlan,
						editStatus:1,
						WEB_IMG_URL_BIG:data.WEB_IMG_URL_BIG,
						WEB_IMG_URL_SMALL:data.WEB_IMG_URL_SMALL,
	                    id: $id,
	                    agencyId: Count.agencyid,
	                    financialTripPlanId:data.financialTripPlanId
	                };
	                console.log(tmp);
					if(isAuth("1190002")){
                        tmp.isOp = true;
                    };
                    if(isAuth("1190003")){
                        tmp.isFinance = true;
                    };
                    tmp.remarkArrangeList = Count.handleRemark(tmp.remarkArrangeList);
                    // 按拼音排序
    				Tools.sortByPinYin(data.guideArranges.listMap, 'guideName');
                    Count.updateGuide = data.guideArranges;
                    tmp.shopArrange.listMap = Count.formatShopRate(tmp.shopArrange.listMap);
                    tmp.selfpayArrange.listMap = Count.formatSelfRate(tmp.selfpayArrange.listMap);
					var html = updateTemplate(tmp);
					Tools.addTab(updateTabId,'单团审核',html);
					var $updateTabId = $("#tab-"+updateTabId+"-content");
					Count.$updateTab = $updateTabId;
					
					//加载列表
					Count.installList($updateTabId,tmp);
				}
			}
		});
	};
	//查看团款明细说明 viewCostRemarkTemplate
	Count.viewCostDetail = function($obj,data){
		var $tr = $obj.closest('tr'),id = $tr.attr('id'),touristGroups = data.touristGroups;
		var tmp = {};
		if(touristGroups.length>1){
			for(var i =0;i<touristGroups.length;i++){
				if(id == touristGroups[i].id){
					tmp.touristGroupFeeList = touristGroups[i].feeList;
				}
			}
		}else{
			tmp.touristGroupFeeList = touristGroups[0].feeList;
		}
		var html = viewCostRemarkTemplate(tmp);
		layer.open({
		    type: 1,
		    title:"费用详情",
		    skin: 'layui-layer-rim', //加上边框
		    area: '1000px', //宽高
		    zIndex:1028,
		    content: html
		});
	};
	//单团审核页面事件
	Count.updateEvent = function($obj,data){//页面tabid--$obj
		//显示隐藏
		Count.showOrhideList($obj);
		//显示计算公式
		$obj.find('.T-formula').on('click',function(){
			Count.showFormula($obj);
		});
		// 禁用自动计算的判断条件
		Count.loading = true;
		var $listObj = $obj.find('.T-list');
		//团款
		var $tripCostObj = $listObj.find('.T-tripDetail');
		$tripCostObj.off('click').on('click','.T-viewCostDetail',function(){
			Count.viewCostDetail($(this),data.touristGroup);
		}).on('click','.T-viewTouristGroup',function(){
			var id = $(this).closest('tr').data('pid');
			KingServices.viewTouristGroup(id);
		});
		//获取导游
		$tripCostObj.find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//导游报账事件
		var $guideAccount = $obj.find('.T-guideAccount');
		$guideAccount.off('click').on('click',function(){
			var id = $obj.find('.financial-tripPlanId').val();
			var pluginKey = 'plugin_print';
			Tools.loadPluginScript(pluginKey);
			KingServices.viewFeeDetail(id);
		});
		//导游数据处理
		var $guideObj = $listObj.find('.T-count-guide');
		$guideObj.find('input').off('change').on('change',function(){
			var $that = $(this);
				tagName = $that.attr('name');
			if (tagName !='remark') {
				Count.calculateCost($that);
				//计算金额
				Count.autoGuideSum($guideObj,$obj);
			}
		});
		//购物处理--计算、新增
		var $shopObj = $listObj.find('.T-count-shopping');
		
		$shopObj.on('click','.T-addShop',function(){
			Count.addShop($(this),$obj);
		}).on('click','.T-shopArrDelItem',function(){
			Count.delShop($(this),$obj);
		}).on('blur','input[name=shopGuideMoney]',function(){
			//填写金额带出社佣、导佣 T-del
			var shopPolicyId = $(this).closest('tr').find('input[name=shopPolicyId]').val();
			var consumeMoney = $(this).val();
			var date =$obj.find('.tripPlanStartTime').val();
			Count.getShopRate($(this),shopPolicyId,consumeMoney,date,$obj);
		}).on('click','.T-shopArrDelAll',function(){
			var id = $(this).closest('tr').attr('shopArrangeId');
			//删除新增的购物安排
			Count.delShopArrange($(this),$obj);
		}).on('change','input',function(){
			var $that = $(this),
				tagName = $that.attr('name');
				
			if (shopNoneAutoFeilds.indexOf(tagName) < 0) {
				Count.calculateCost($that);
				//计算金额
				if (Count.loading) {
					Count.autoShopSumCost($that,$obj);
				} else {
					Count.autoShopSum($that,$obj);
				}
				Count.formatDays($that,$obj);
			}
		}).on('click','.T-currGuide',function(){
			Count.addShopGuide($(this),$obj);
		}).on('click','.T-shopGuide',function(){
			Count.addShopGuide($(this),$obj);
		}).on('click','.T-delShopGuide',function(){
			Count.delShopGuide($(this),$obj);
		});
		$listObj.find('.T-math-round').off('click').on('click' ,function(){
			//清除小数点
			Count.delValDecimal($(this),$shopObj,$obj);
		});
		//获取导游
		$shopObj.find('td[name=shopGuideName]').find('input[name=shopGuideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//获取导游
		$shopObj.find('td[name=currGuide]').find('input[name=currGuideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增购物安排sumRateMoney
		$listObj.find('.T-shop-add').find('.T-addShopping').on('click',function(){
			Count.addShopping($shopObj,$obj);
		});
		//商品选择
		var $shopPolicyObj = $shopObj.find('input[name=shopPolicyName]');
		if($shopPolicyObj.length>0){
			Count.getShopPolicy($shopPolicyObj.closest('tr'),$obj);
		};
		//自费处理--计算、新增
		var $selfObj = $listObj.find('.T-count-selfPay');
		$selfObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(selfNoneAutoFields.indexOf(nameFlag)<0){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				if (Count.loading) {
					Count.autoSelfSum($(this),$obj);
				} else {
					Count.sumRateMoney($(this),$obj);
				}
			}
		});
		//删除只安排了自费点没有安排自费项目的数据
		$selfObj.off('click').on('click','.T-addSelfGuide',function(){
			//添加自费导游
			Count.addSelfGuide($(this),$obj);
		}).on('click','.T-delSelfGuide',function(){
			//删除导游
			Count.delSelfGuide($(this),$obj);

		}).on('click','.T-selfArrDel',function(){
			
			Count.delSelfArrange($(this),$obj);
		});
		//新增自费安排
		$listObj.find('.T-self-add').find('.T-addSelf').off('click').on('click',function(){
			Count.addSelf($selfObj,$obj);
		});
		//获取导游
		$selfObj.find('td[name=selfGuideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		if($selfObj.find('input[name=selfPayItem]').length>0){
			var selfPayItemNameObj = $selfObj.find('input[name=selfPayItem]');
			selfPayItemNameObj.each(function(){
				Count.getSelfItemData($(this).closest('tr'),$obj);
			});
		};
		//其他收入--计算、新增
		var $otherIn = $listObj.find('.T-count-otherIn');
		$otherIn.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(otherInNoneAutoFields.indexOf(nameFlag)<0){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				Count.autoOtherInSum($(this),$obj);
			}
			Count.formatDays($(this),$obj);
		});
		$otherIn.off('click').on('click','.T-otherInArrDel',function(){
			//删除其他收入
			Count.delOtherInArrange($(this),$obj);
		});
		//新增其他收入安排
		$listObj.find('.T-OtherIn-add').off('click').on('click',function(){
			Count.addOtherIn($otherIn,$obj);
		});
		//车费--计算、新增
		var $busObj = $listObj.find('.T-count-bus');
		$busObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(busNoneAutoFields.indexOf(nameFlag)<0){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				Count.autoBusSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
		});
		$busObj.off('click').on('click','.T-busArrDel',function(){
			Count.sumBusFeeAfDel($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$busObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增车费
		$listObj.find('.T-buspay-add').off('click').on('click',function(){
			Count.addBus($busObj,$obj);
		});
		//餐费处理--计算、新增
		var $restObj = $listObj.find('.T-count-restaurant');
		$restObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
				if(restNoneAutoFields.indexOf(nameFlag)<0){
					//校验输入的数据是否合法
					Count.calculateCost($(this));
					//计算金额
					Count.autoRestaurantSum($(this),$obj);
				}
			Count.formatDays($(this),$obj);;
		});
		$restObj.off('click').on('click','.T-restArrDel',function(){
			//删除安排
			Count.delRestArrange($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$restObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增餐费安排
		$listObj.find('.T-restaurantpay-add').off('click').on('click',function(){
			Count.addRest($restObj,$obj);
		});
		//房费处理--计算、新增
		var $hotelObj = $listObj.find('.T-count-hotel');
		$hotelObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(scenicNoneAutoFields.indexOf(nameFlag)<0){
				Count.calculateCost($(this));
				Count.autoScenicSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		//删除房间安排T-hotelArrDel
		$hotelObj.off('click').on('click','.T-hotelArrDel',function(){
			Count.delHotelArrange($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$hotelObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增房费
		$listObj.find('.T-hotel-add').off('click').on('click',function(){
			Count.addHotel($hotelObj,$obj);
		});
		//景区处理--计算、新增
		var $scenicObj = $listObj.find('.T-count-scenic');
		$scenicObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(scenicNoneAutoFields.indexOf(nameFlag)<0){
				Count.calculateCost($(this));
				Count.autoScenicSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		//删除景区安排
		$scenicObj.off('click').on('click','.T-secnicArrDel',function(){
			Count.delSecnicArrange($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$scenicObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		
		//新增景区
		$listObj.find('.T-scenic-add').off('click').on('click',function(){
			Count.addScenic($scenicObj,$obj);
		});
		//票务处理--计算、新增
		var $ticketObj = $listObj.find('.T-count-ticket');
		$ticketObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(ticketNoneAutoFields.indexOf(nameFlag)<0){
				Count.calculateCost($(this));
				Count.autoTicketSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		//删除票务安排
		$ticketObj.off('click').on('click','.T-ticketArrDel',function(){
			Count.delTicketArrange($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$ticketObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增票务
		$listObj.find('.T-ticket-add').off('click').on('click',function(){
			Count.addTicket($ticketObj,$obj);
		});
		//其他支出
		var $otherOutObj = $listObj.find('.T-count-otherOut');
		$otherOutObj.off('change').on('change','input',function(){
			var nameFlag = $(this).attr('name');
			if(otherOUtNoneAutoFeilds.indexOf(nameFlag)<0){
				Count.calculateCost($(this));
				Count.autoOtherOutSum($(this),$obj);
				Count.formatDays($(this),$obj);
			};
			
		});
		//其他支出安排页面点击事件
		$otherOutObj.off('click').on('click','.T-otherOutArrDel',function(){
			Count.delOtherOutArrange($(this),$obj);
		}).on('click','.T-addGuide',function(){
			Count.addArrangeGuide($(this),$obj);
		}).on('click','.T-delGuide',function(){
			Count.delArrangeGuide($(this),$obj);
		});
		//获取导游
		$otherOutObj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$obj);
		});
		//新增其他支出
		$listObj.find('.T-otherOut-add').off('click').on('click',function(){
			Count.addOtherOut($otherOutObj,$obj);
		});
		//计算保险费用
		var $insureObj = $listObj.find('.T-count-insurance');
		$insureObj.off('change').on('change','input',function(){
			Count.autoInsureanceSum($(this),$obj);
		});
		//触发页面的change事件
		$obj.find('input[name=sumIpt]').trigger('change');

		//计算团收入
		Count.tripIncome($obj);
		//按钮事件--保存信息
		$obj.find('.btn-saveCount').off('click').on('click',function() {
			var id = $(this).attr('data-entity-id');
			var financialTripPlanId = $(this).attr('data-entity-financial-id');
			Count.saveTripCount(id, financialTripPlanId,$obj,1);
		});
		//按钮事件--审核通过
		$obj.find('.T-accountCheck').off('click').on('click',function() {
			var id = $(this).attr('data-entity-id');
			var billStatus = $(this).attr('data-entity-billStatus');
			var financialTripPlanId = $(this).attr('data-entity-financial-id');
			//showConfirmDialog($( "#confirm-dialog-message" ), "审核与数据无关，您如果修改了数据则需要先点击保存按钮进行数据的保存，否则您本次修改的数据将不会存入后台。审核过后您将不能修改数据，确认要这样操作吗？", function(){
				Count.accountCheck(id, billStatus, financialTripPlanId,$obj);
        	//});
		});
		//按钮事件--退回计调
		$obj.find('.T-rebackOP').off('click').on('click',function() {
			var id = $(this).attr('data-entity-id');
			var billStatus = $(this).attr('data-entity-billStatus');
			var financialTripPlanId = $(this).attr('data-entity-financial-id');
			showConfirmDialog("退回计调后，将需要等计调审核过后您才能再次操作，您确定要这样做吗？", function(){
				Count.reback(id, billStatus, financialTripPlanId);
			});
		});
		//按钮事件--退回导游
		$obj.find('.T-rebackGuide').off('click').on('click',function() {
			var id = $(this).attr('data-entity-id');
			var billStatus = $(this).attr('data-entity-billStatus');
			var financialTripPlanId = $(this).attr('data-entity-financial-id');
			showConfirmDialog("退回导游后，将需要等导游报账过后您才能再次操作，您确定要这样做吗？", function(){
				Count.reback(id, billStatus, financialTripPlanId);
			});
		});
		//按钮时间--安排预算表
		$obj.find('.T-tripPlanArrange').off('click').on('click',function() {
			
			var id = $obj.find('.financial-tripPlanId').val();
			
			KingServices.viewTripDetail(id);
		});
		//按钮事件--单团核算表
		$obj.find('.T-tripAccount').off('click').on('click',function(){
			var id = $obj.find('[name=financialTripPlanId]').val();
			var pluginKey = 'plugin_print';
			Tools.loadPluginScript(pluginKey);
			Count.viewTripAccount(id);
		});
		//按钮事件--单团核算表(包含中转、外转)
		$obj.find('.T-innerTransAccount').off('click').on('click',function(){
			var id = $obj.find('[name=financialTripPlanId]').val();
			var pluginKey = 'plugin_print';
			Tools.loadPluginScript(pluginKey);
			Count.viewTripAccount(id,'transfer');
		});
		//查看图片事件
		$listObj.find('.btn-view').off('click').on('click',function(){
			FinancialService.viewBillImage(this);
		});
		//查看操作记录事件
		$obj.find('.btn-financialLog').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
			id = $obj.find('.financial-tripPlanId').val();
			Count.viewTripLog(id);
		});

		//对账、付款跳转
		$obj.find(".T-toAccount").off().on('click', function(event) {
			event.preventDefault();
			var $this = $(this),
                $tr = $this.closest('tr'),
			    args = {
			    	id: $tr.data("id"),
			    	name: $tr.data("name"),
			    	tripNumber: $obj.find('.T-tripNumber').text(),
			    	// startDate: $tr.data("start"),
			    	// endDate: $tr.data("end"),
			    	type: $tr.data("type")
			    };

			if($this.hasClass('T-check')){
               args.isCheck = true;
			}
			FinancialService.accountList(args);
		});
		Count.loading = false;
	};
	//加载list
	Count.installList = function($obj,data){
		var tripGroupHtml = tripGroupTemplate(data);
		$obj.find('.T-tripCost').html(tripGroupHtml)
		if(data.editStatus !=2){
			//加载购物安排列表
			var shopHtml = Count.filterUnAuth(shopArrangeTemplate(data));
			$obj.find('.T-shop-add').html(shopHtml);

			//加载自费安排列表
			var selfHtml = Count.filterUnAuth(selfArrangeTemplate(data));
			$obj.find('.T-self-add').html(selfHtml);
		};

		//加载其他收入安排列表
		var otherInHtml = otherInArrangeTemplate(data);
		$obj.find('.T-income').html(otherInHtml);
		
		//保险列表
		var insuranceHtml = Count.filterUnAuth(insuranceArrangeTemplate(data));
		$obj.find('.T-insurance').html(insuranceHtml);

		//车费列表 
		var busHtml = Count.filterUnAuth(busArrangeTemplate(data));
		$obj.find('.T-bus').html(busHtml)
		.on('click', '.T-payedDetail', function(event) {
			event.preventDefault();
			FinancialService.viewPayed($(this).closest("tr").attr("busArrangeId"),KingServices.build_url("account/financialBusCompany", "getPayedMoneyDetailOfBus"));
		});;

		//餐费列表 
		var restHtml = Count.filterUnAuth(restArrangeTemplate(data));
		$obj.find('.T-restaurant').html(restHtml);

		//房费列表 
		var hotelHtml = Count.filterUnAuth(hotelArrangeTemplate(data));
		$obj.find('.T-hotel').html(hotelHtml);

		//景区费用列表列表 
		var scenicHtml = Count.filterUnAuth(scenicArrangeTemplate(data));
		$obj.find('.T-scenic').html(scenicHtml);

		//票务费用列表列表 
		var ticketHtml = Count.filterUnAuth(ticketArrangeTemplate(data));
		$obj.find('.T-ticket').html(ticketHtml);

		//其他支出费用列表列表  guideTamplate
		var otherOutHtml = Count.filterUnAuth(otherOutTemplate(data));
		$obj.find('.T-otherOut').html(otherOutHtml);

		//导游列表
		var guideHtml = Count.filterUnAuth(guideTamplate(data));
		$obj.find('.T-guide').html(guideHtml);
		//页面事件 
		if(data.editStatus == 0){
			//页面事件
			Count.reimbursementEvents($obj,data);
		}else if(data.editStatus == 1){
			Count.updateEvent($obj,data);
		}else if(data.editStatus == 2){
			Count.detailEvents($obj,data);
		};
		Count.addFee($obj, data.id);
		//
		$obj.on("change",'input[name="accountFinancialCheckComment"],input[name="accountOPCheckComment"]',function(){
			$(this).data('change', true);
		});
	};
	//查看操作记录事件
	Count.viewTripLog = function(id){
		$.ajax({
			url:KingServices.build_url('financialTripPlan','findFinancialTripPlanLog'),
			data:{
				tripPlanId:id
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
					if(result){
						var tmp = [];
						var financialTripPlanLogList = JSON.parse(data.financialTripPlanLogList);
						for(var i = 0; i < financialTripPlanLogList.length ; i++) {
							var financialTripPlanLog = {
									"operationTime":financialTripPlanLogList[i].operationTime,
									"user":financialTripPlanLogList[i].user,
									"type":financialTripPlanLogList[i].type,
									"operateJson":JSON.parse(financialTripPlanLogList[i].operateJson),
									"json":financialTripPlanLogList[i].operateJson
							}
							tmp.push(financialTripPlanLog);
						}
						data.financialTripPlanLogList = tmp;
						var html = viewLogTemplate(data);
						layer.open({
						    type: 1,
						    title:"操作记录",
						    skin: 'layui-layer-rim', //加上边框
						    area: '1024px', //宽高
						    zIndex:1028,
						    content: html
						});
					}
			}

		});
	};
	//审核通过事件
	Count.accountCheck = function(id, billStatus, financialTripPlanId,$obj){
		Count.shopClickCount = 0;
		var method = billStatus==0?"opVerify":"financialVerify";
		var saveJsonStr = Count.installData(id,$obj);
		//Count.saveTripCount(id,financialTripPlanId,$obj,1);
		saveJson = JSON.stringify(saveJsonStr);
		$.ajax({
        	url:KingServices.build_url('financialTripPlan',method),
        	type:"POST",
        	data:{
        		id:id,
        		saveJson:saveJson
        	},
        	success:function(data){
        		var result = showDialog(data);
        		if(result){
        			showMessageDialog(data.message);
        			Count.updateExamine(financialTripPlanId);
        			Count.listCountBody(0);
        		}
        	}
        });
	};
	//退回计调事件
	Count.reback = function(id, billStatus, financialTripPlanId){
		Count.shopClickCount = 0;
		var method = billStatus==0?"rebackGuide":billStatus==1?"rebackOp":"rebackFinancial";
		var guide = billStatus==0?"guide":"";
		$.ajax({
    		url:KingServices.build_url('financialTripPlan',method),
            type:"POST",
            data:{
            	id:id
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                	showMessageDialog(data.message);
                	if(billStatus == 0) {
                		Tools.closeTab(updateTabId);
                		Count.listCountBody(0);
                	}else{
                		Count.updateExamine(financialTripPlanId);
                	}
                }
            }
    	});
	};
	
	//单团核算表
	Count.viewTripAccount = function(id,type){
		var method = 'getTripPlanAccountingDetail';
		//type为transfer表示查询包含中转外装的单团核算表
		if(!!type && type == 'transfer') {
			method = 'getTripPlanAccounting';
		}
		$.ajax({
			url:KingServices.build_url('financialTripPlan',method),
			data:{
				id:id
			},
			type:'POST',
			showLoading:false,
			success:function(data){
				if(showDialog(data)){
					//校验每个明细tab是否应该显示
					var showJson = Count.isShowTabByData(data,type);
					data.showJson = showJson;
					var guideManageFee = data.tripIncomeMap.guideIncomeMap.guideIncomeMapList;
					for(var i = 0;i<guideManageFee.length;i++){
						guideManageFee[i].taskJson = JSON.parse(guideManageFee[i].taskJson);
					};
					data.tripIncomeMap.guideIncomeMap.guideIncomeMapList = guideManageFee;

					var guidePay = data.tripPayMap.guidePayMap.guidePayMapList;
					for(var i = 0;i<guidePay.length;i++){
						guidePay[i].taskJson = JSON.parse(guidePay[i].taskJson);
					};

					//计算购物的合计
					var ret = Count.sumShopRebtMoney(data.tripIncomeMap.shopIncomeMap.shopIncomeMapList);
					data.tripIncomeMap.shopIncomeMap.shopIncomeMapList = ret.tRateList;
					data.tripIncomeMap.shopIncomeMap.personSum = ret.personSum;
					data.tripIncomeMap.shopIncomeMap.busSum = ret.busSum;
					data.tripIncomeMap.shopIncomeMap.moneySum = ret.moneySum;
					data.tripPayMap.guidePayMap.guidePayMapList = guidePay;
					//合并相同的资源
					data.tripPayMap.hotelPayMap.hotelPayMapList = Count.mergeSourse(data.tripPayMap.hotelPayMap.hotelPayMapList, 'hotelName');
					data.tripPayMap.scenicPayMap.scenicPayMapList = Count.mergeSourse(data.tripPayMap.scenicPayMap.scenicPayMapList, 'scenicName');
					data.tripPayMap.restaurantPayMap.restaurantPayMapList = Count.mergeSourse(data.tripPayMap.restaurantPayMap.restaurantPayMapList, 'restaurantName');
					data.tripPayMap.ticketPayMap.ticketPayMapList = Count.mergeSourse(data.tripPayMap.ticketPayMap.ticketPayMapList, 'ticketName');
					data.tripPayMap.busPayMap.busPayMapList = Count.mergeSourse(data.tripPayMap.busPayMap.busPayMapList, 'busCompanyName');
					data.tripPayMap.selfPayPayMap.selfpPayPayMapList = Count.mergeSourse(data.tripPayMap.selfPayPayMap.selfpPayPayMapList, 'selfPayName');

					var html = outDetailTempLate(data);
					var tabId = '-outDetail',title = '单团核算';
					if(!!type && type == 'transfer') {
						html = outTransferDetailTemplate(data);
						tabId = '-outTransferDetail';
						title = '单团核算(中转/外转)';
					};
					Tools.addTab(menuKey+tabId,title,html);

					//打印单团核算页面
					var $outDetailTab = $("#tab-"+menuKey+tabId+"-content");
					$outDetailTab.off('click').on('click','.T-export',function(){
						Count.exportsOutDetail($outDetailTab);
					});
					//查看图片事件
					$outDetailTab.find('.btn-view').off('click').on('click',function(){
						FinancialService.viewBillImage(this);
					});
				}
				
			}
		});
		
	};
	//合并相同资源的数据
	Count.mergeSourse = function(data, key) {
		// 1. 排序
		data.sort(function(a, b) {
			return a[key] > b[key];
		});
		// 构造新的数据结构
		// 1. 将相同的资源主体放到同一个对象中
		// 2. 计算应付结算合计
		var newDataArr = [], tempArr = [];
		for(var i = 0,len = data.length,newKey; i <len; i++) {
			newKey = data[i][key],sumPay = 0,sumSettle = 0,sumMap = {};
			if(i+1<len && newKey == data[i+1][key]){
				tempArr.push(data[i]);
			} else {
				tempArr.push(data[i]);
				for(var j = 0;j<tempArr.length;j++) {
					var listData = tempArr[j];
					sumPay += listData.needPayAllMoney;
					sumSettle += listData.settlementMoney;
				};
				sumMap.sumPay = sumPay;
				sumMap.sumSettle = sumSettle;
		        newDataArr.push({
		        	listMap: tempArr.slice(0),
		        	sumMap: sumMap
		        });
		        tempArr.length = 0;
			}
		}
		return newDataArr;
	};
	//计算购物合计
	Count.sumShopRebtMoney = function(data) {
		var ret = {
			tRateList: data,
			personSum: {
				gMoney: 0,
				tMoney: 0
			},
			busSum: {
				gMoney: 0,
				tMoney: 0
			},
			moneySum: {
				gMoney: 0,
				tMoney: 0
			}
		};
		for(var i = 0;i<ret.tRateList.length;i++){
			var itemList = ret.tRateList[i].shopArrangeItemList;
			for(var j = 0;j<itemList.length;j++){
				itemList[j].travelAgencyRate = Math.round(itemList[j].travelAgencyRate*100);
				itemList[j].guideRate = Math.round(itemList[j].guideRate*100);
				if(itemList[j].name == '人数返佣'){
					ret.personSum.gMoney += itemList[j].guideRebateMoney;
					ret.personSum.tMoney += itemList[j].travelAgencyRebateMoney;
				}else if(itemList[j].name == "停车返佣") {
					ret.busSum.gMoney += itemList[j].guideRebateMoney;
					ret.busSum.tMoney += itemList[j].travelAgencyRebateMoney;
				}else {
					ret.moneySum.gMoney += itemList[j].guideRebateMoney;
					ret.moneySum.tMoney += itemList[j].travelAgencyRebateMoney;
				} 
			}

		};
		return ret
	};
	//校验每个明细tab是否应该显示
	Count.isShowTabByData = function(data,type){
		var showJson = {};
		showJson.incomeShowFlag = false;
		showJson.costShowFlag = false;
		showJson.innerCostShowFlag = false;
		showJson.tripInMapCount = 0;
		showJson.costMapCount = 0;
		showJson.innerCostCount = 0;
		var tripInMap = data.tripIncomeMap;
		var tripPayMap = data.tripPayMap;
		var tripTransitPayMap = '';
		
		
		//判断发团收入明细
		if(tripInMap.groupIncomeMap.groupIncomeMapList.length == 0){
			showJson.tripInMapCount += 1;
		};
		if(tripInMap.guideIncomeMap.guideIncomeMapList.length == 0){
			showJson.tripInMapCount += 1;
		};
		if(tripInMap.otherIncomeMap.otherIncomeMapList.length == 0){
			showJson.tripInMapCount += 1;
		};
		if(tripInMap.selfPayIncomeMap.selfPayIncomeMapList.length == 0){
			showJson.tripInMapCount += 1;
		};
		if(tripInMap.shopIncomeMap.shopIncomeMapList.length == 0){
			showJson.tripInMapCount += 1;
		};

		//判断发团成本明细
		if(tripPayMap.busPayMap.busPayMapList.length == 0){
			showJson.costMapCount += 1;
		};
		if(tripPayMap.guidePayMap.guidePayMapList.length == 0){
			showJson.costMapCount += 1;
		};
		if(tripPayMap.hotelPayMap.hotelPayMapList.length == 0){
			showJson.costMapCount += 1;
		};
		if(tripPayMap.insurancePayMap.insurancePayMapList.length == 0){
			showJson.costMapCount += 1;
		};
		if(tripPayMap.restaurantPayMap.restaurantPayMapList.length == 0){
			showJson.costMapCount += 1;
		};
		if(tripPayMap.otherPayMap.otherPayMapList.length == 0){
			showJson.costMapCount += 1;
		};
		if(tripPayMap.scenicPayMap.scenicPayMapList.length == 0){
			showJson.costMapCount += 1;
		};
		if(tripPayMap.selfPayPayMap.selfpPayPayMapList.length == 0){
			showJson.costMapCount += 1;
		};
		if(tripPayMap.ticketPayMap.ticketPayMapList.length == 0){
			showJson.costMapCount += 1;
		};

		//判断中转成本明细
		if(!!type && type == 'transfer') {
			tripTransitPayMap = data.outArrangeMap.outReArrange;
			if (!!tripTransitPayMap) {
				if(!!tripTransitPayMap.busList && tripTransitPayMap.busList.length == 0) {
					showJson.innerCostCount += 1;
				}
				if(!!tripTransitPayMap.hotelList && tripTransitPayMap.hotelList.length == 0) {
					showJson.innerCostCount += 1;
				}
				if(!!tripTransitPayMap.otherList && tripTransitPayMap.otherList.length == 0) {
					showJson.innerCostCount += 1;
				}
				if(!!tripTransitPayMap.restaurantList && tripTransitPayMap.restaurantList.length == 0) {
					showJson.innerCostCount += 1;
				}
				if(!!tripTransitPayMap.ticketList && tripTransitPayMap.ticketList.length == 0) {
					showJson.innerCostCount += 1;
				}
			} else {
				showJson.innerCostCount = 5
			}
			
		}
		
		//判断赋值
		if(showJson.tripInMapCount == 5){
			showJson.incomeShowFlag = true;
		};
		if(showJson.costMapCount == 9){
			showJson.costShowFlag = true;
		};
		if(showJson.innerCostCount == 5) {
			showJson.innerCostShowFlag = true;
		}
		
		return showJson;
	};
	//打印页面
	Count.exportsOutDetail = function($obj){

		$obj.print({
			globalStyles:true,
			deferred:Count.setPrintStyle($obj)
		});
		var thLen = parseFloat($obj.find('th[colspan]').attr('colspan')),
			sumTr = $obj.find('.T-sum-td'),
			nweThColspan = thLen + 1;
			sumTr.each(function(){
				var $that = $(this),
					thisColspan = parseFloat($that.attr('colspan')),
					newThisCol = thisColspan + 1
				$that.attr('colspan',newThisCol);
			});
		$obj.find('th[colspan=4]').attr('colspan',nweThColspan);
	};
	//设置打印时的样式T-img-th
	Count.setPrintStyle = function($obj){

		var thLen = $obj.find('th[colspan]').attr('colspan'),
			sumTr = $obj.find('.T-sum-td'),
			nweThColspan = thLen - 1;
			sumTr.each(function(){
				var $that = $(this),
					thisColspan = $that.attr('colspan'),
					newThisCol = thisColspan - 1
				$that.attr('colspan',newThisCol);
			});
			$obj.find('th[colspan=5]').attr('colspan',nweThColspan);
	};
	//质量统计
	Count.getquality = function(id){
		if (!!id) {
            $.ajax({
                url: KingServices.build_url('financialTripPlan', 'qualityTracking'),
                type:"POST",
                data: { tripPlanId: id},
                success:function(data){
                    if(showDialog(data)){
                        data.tripPlan = JSON.parse(data.tripPlan);
                        var html = qualityTempLate(data);
                        Tools.addTab(qualityId,"质量跟踪",html);                    
                    }
                }
            })
        }
	};
	//新增购物安排--报账、审核通用
	Count.addShopping = function($bodyObj,$parentObj){
		var divHtml = Count.returnDivHtml($parentObj);
		var cashTd = '<td rowspan="2" name="currGuide">'+
				'<div class="div-h-30">'+
					'<button class="btn btn-success btn-sm btn-white T-currGuide pull-right">'+
			            '<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>'+
			        '</button>'+
				'</div>'+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<button class="btn btn-danger btn-sm btn-white T-delShopGuide pull-right">'+
			            '<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>'+
			        '</button>'+
					'<input type="text" name="currGuideName" class="w-70" />'+
					'<input type="hidden" name="guideArrangeId"/>'+
				'</div>'+
			'</td>';
		var shopTd = '<td name="shopGuideName">'+
				'<div class="div-h-30">'+
					'<button class="btn btn-success btn-sm btn-white T-shopGuide pull-right">'+
						'<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>'+
					'</button>'+
				'</div>'+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<button class="btn btn-danger btn-sm btn-white T-delShopGuide pull-right">'+
						'<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>'+
					'</button>'+
					'<input name="shopGuideName" type="text" class="w-70"/>'+
					'<input name="guideArrangeId" type="hidden"/>'+
				'</div>'+
			'</td>';
		var	cashGuideHtml = Count.addArrangeGuideHtml(cashTd,"currGuide",$parentObj);
		var	shopGuideHtml = Count.addArrangeGuideHtml(shopTd,'shopGuideName',$parentObj);
		var guideShopMoneyHtml = Count.shopPersonAndBusGuide('',$parentObj);
		var html = '<tr class="oldData noSumRate" arrangeType="shopArrange">'+
			'<td class="countWhichDaysContainer" rowspan="2"></td>'+
			'<td rowspan="2">'+divHtml+'<input type="text" name="shopName" style="width:90px;"/><input type="hidden" name="shopId" /></td>'+
			'<td><span class="shopPolicy">人数返佣</span></td>'+
			'<td>'+
				'<span class="F-float F-money sumConsumeMoney"></span>'+
				'<input name="sumConsumeMoney" type="hidden" />'+
			'</td>'+
			shopGuideHtml+
			guideShopMoneyHtml+
			'<td rowspan="2" name="twoRebate">'+
				'<div class="div-h-30"></div>'+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input type="text" name="twoRebate" class="w-50" />'+
				'</div>'+
			'</td >'+
			'<td rowspan="2" name="twoRebateMoney">'+
				'<div class="div-h-30"></div>'+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input type="text" name="twoRebateMoney" class="w-70 F-float F-money" />'+
				'</div>'+
			'</td>'+
			cashGuideHtml+
			'<td rowspan="2" name="currGuideMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input type="text" name="currGuideMoney" class="w-70 F-float F-money" />'+
				'</div>'+
			'</td >'+
			'<td rowspan="2" name="currGuideRemark">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input type="text" name="currGuideRemark" class="w-100"/>'+
				'</div>'+
			'</td>'+
			'<td rowspan="2">未对账&nbsp;&nbsp;<a href="javascript:void(0)" class="T-shopArrDelAll">删除</a></td>'+
			'</tr>'+
			'<tr arrangeType="shopArrange" class="noSumRate">'+
			'<td><span class="shopPolicy">停车返佣</span>'+
				'<button class="btn btn-success btn-sm btn-white T-addShop pull-right">'+ 
					'<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>'+
				'</button>'+
			'</td>'+
			'<td>'+
				'<span class="F-float F-money sumConsumeMoney"></span>'+
				'<input name="sumConsumeMoney" type="hidden" />'+
			'</td>'+
			shopGuideHtml+
			guideShopMoneyHtml+
			'</tr>'+
			'<tr class="sumMoney">'+
				'<td style="font-weight: bold;text-align:right;" colspan="3">购物小计：</td>'+
				'<td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalMoney">0</span></td>'+
				'<td style="font-weight: bold;text-align:right;" colspan="5">导佣小计：</td>'+
				'<td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalGuideMoney">0</span></td>'+
				'<td style="font-weight: bold;text-align:right;">全陪小计：</td>'+
				'<td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-allTravelMoney">0</span></td>'+
				'<td style="font-weight: bold;text-align:right;">社佣小计：</td>'+
				'<td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-totalTravelMoney">0</span></td>'+
				'<td style="font-weight: bold;text-align:right;">返佣小计：</td>'+
				'<td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-secondaryTravelMoney">0</span></td>'+
				'<td style="font-weight: bold;text-align:right;">现收合计：</td>'+
				'<td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-payingRebeMoney">0</span></td>'+
				'<td style="font-weight: bold;text-align:right;">佣金小计：</td>'+
				'<td style="font-weight: bold;text-align:left;">&nbsp;&nbsp;<span class="F-float F-money T-sumRebeMoney">0</span></td>'
			'</tr>';
		$bodyObj.append(html);
		//新增获取购物店数据
		Count.getShopData($bodyObj,$parentObj);
		//设置下拉框
		Count.setChooseDays($bodyObj,$parentObj,'shop');
		//获取导游 
		var $shopObj = $parentObj.find('.T-count-shopping');
		$shopObj.find('td[name=shopGuideName]').find('input[name=shopGuideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
		$shopObj.find('td[name=currGuide]').find('input[name=currGuideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
	};
	//新增商品
	Count.addShop = function($obj,$parentObj){
		var $that = $obj, $next,
				$tr = $that.closest('tr').prev(), rowSpan = $tr.children('td').eq(0).attr('rowspan') || 1,
				shopId = "",
				whichDay = "",
				shopArrangeId = "",
				td_cnt = $tr.children('td').length;
			if(!!$tr.attr('shopId')){
				shopId = $tr.attr('shopId');
			};
			if(!!$tr.attr('shopArrangeId')){
				shopArrangeId = $tr.attr('shopArrangeId');
			};
			if(!!$tr.attr('whichDay')){
				whichDay = $tr.attr('whichDay');
			}
			$next =  $tr.nextAll();
		var divHtml = Count.returnDivHtml($parentObj);
		var td = '<td name="shopGuideName">'+
				'<div class="div-h-30">'+
					'<button class="btn btn-success btn-sm btn-white T-shopGuide pull-right">'+
						'<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>'+
					'</button>'+
				'</div>'+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<button class="btn btn-danger btn-sm btn-white T-delShopGuide pull-right">'+
						'<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>'+
					'</button>'+
					'<input name="shopGuideName" type="text" class="w-70"/>'+
					'<input name="guideArrangeId" type="hidden"/>'+
				'</div>'+
			'</td>';
		var	guideHtml = Count.addArrangeGuideHtml(td,'shopGuideName',$parentObj);
		var guideShopMoneyHtml = Count.shopPersonAndBusGuide($obj,$parentObj);
		var html = '<tr shopId = '+shopId+' whichDay = '+whichDay+' arrangeType="shopArrange">'+
			'<td>'+divHtml+
				'<input type="text" name="shopPolicy" class="w-70"/>'+
				'<input type="hidden" name="shopPolicyId" />'+
				'<button class="btn btn-danger btn-sm btn-white pull-right T-shopArrDelItem">'+
				'<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>'+
				'</button>'+
			'</td>'+
			'<td>'+
				divHtml+
				'<span class="F-float F-money sumConsumeMoney"></span>'+
				'<input name="sumConsumeMoney" type="hidden" />'+
			'</td>'+
			guideHtml+
			guideShopMoneyHtml+
			'</tr>';
			
		if($next.length>1){
			rowSpan = rowSpan * 1 + 1;
			$tr.children('td[rowspan]').prop('rowspan', rowSpan);
			for(var i = 0;i<$next.length;i++){
				var tdLen = $next.eq(i).children('td').length;
				if( tdLen == td_cnt){
					$next.eq(i).prev().after(html);
					break;
				}else{
					$next.eq(rowSpan-3).after(html);
					break;
				}
			};
		}else{
			rowSpan = rowSpan * 1 + 1;
			$tr.children('td[rowspan]').prop('rowspan', rowSpan);
			$tr.prop('shopId', shopId);
			$that.closest('tr').after(html);
		};
		//商品选择
		var $shopObj = $parentObj.find('.T-count-shopping');
		var $shopPolicyObj = $shopObj.find('input[name=shopPolicy]');
		Count.getShopPolicy($shopPolicyObj,$parentObj,$tr);
		//获取导游 
		$shopObj.find('td[name=shopGuideName]').find('input[name=shopGuideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});			
	};
	//新增导游
	Count.addShopGuide = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),$thisTd = $obj.closest('td'),
			$thisDiv = $obj.closest('div'),
			$nextTd = $tr.find('td[name=shopGuideMoney]'),
			$imgTd = $tr.find('td[name=imgTd]'),
			$guideRateTd = $tr.find('td[name=guideRate]'),
			$guideRateMoneyTd = $tr.find('td[name=guideRateMoney]'),
			$quanpeiRebateTd = $tr.find('td[name=quanpeiRebate]'),
			$quanpeiRebateMoneyTd = $tr.find('td[name=quanpeiRebateMoney]'),
			$billRemarkTd = $tr.find('td[name=billRemark]'),
			$currGuideTd = $tr.find('td[name=currGuide]'),
			$currGuideMoneyTd = $tr.find('td[name=currGuideMoney]'),
			$currGuideRemarkTd = $tr.find('td[name=currGuideRemark]'),
			index = $thisTd.find('div').length,
			tdName = $thisTd.attr('name');
			var marTop = 5;
		var guideHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name = "shopGuideName" class="w-70" type = "text" />'+
			'<input name = "shopGuideId" type = "hidden" />'+
			'<input name="guideArrangeId" type="hidden"/>'+
			/*'<a href="#" class="pull-right T-delShopGuide">删除</a>'+*/
			'<button class="btn btn-danger btn-sm btn-white T-delShopGuide pull-right">'+
	            '<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>'+
	        '</button>'+
			'</div>';

		var moneyHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name = "shopGuideMoney" class="w-70" type = "text" />'+
			'</div>';

		var imgHtml = '<div style="margin-top:10px;" index = '+(index+1)+'>'+
			'<span style="color:#bbb;">查看</span>'+
			'</div>';

		var guideRabeHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name = "guideRate" class="w-50" type = "text" />'+
			'</div>';

		var guideRabeMoneyHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name = "guideRateMoney" class="w-70" type = "text" />'+
			'</div>';

		var quanpeiRebateHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
		'<input name = "quanpeiRebate" class="w-50" type = "text" />'+
		'</div>';

		var quanpeiRebateMoneyHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name = "quanpeiRebateMoney" class="w-70" type = "text" />'+
			'</div>';

		var remarkHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name = "billRemark"  class="w-80" type = "text" />'+
			'</div>';
		var currGuideHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name = "currGuideName" class="w-70" type = "text" />'+
			'<input name = "currGuideId" type = "hidden" />'+
			'<input name= "guideArrangeId" type="hidden"/>'+
			'<button class="btn btn-danger btn-sm btn-white T-delShopGuide pull-right">'+
	            '<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>'+
	        '</button>'+
			/*'<a href="#" class="pull-right T-delShopGuide">删除</a>'+*/
			'</div>';
		var currMoneyHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name = "currGuideMoney" class="w-70" type = "text" />'+
			'</div>';
		var currRemarkHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name = "currGuideRemark" class="w-100" type = "text" />'+
			'</div>';

		if($tr.hasClass('noSumRate')){

			imgHtml = '<div style="margin-top:10px;" index = '+(index+1)+'>'+
			'-'+
			'</div>';

			remarkHtml = '<div style="margin-top:10px;" index = '+(index+1)+'>'+
			'-'+
			'</div>';
		};
		if(tdName == 'shopGuideName'){
			$thisTd.append(guideHtml);
			$nextTd.append(moneyHtml);
			$imgTd.append(imgHtml);
			$guideRateTd.append(guideRabeHtml);
			$guideRateMoneyTd.append(guideRabeMoneyHtml);
			$quanpeiRebateTd.append(quanpeiRebateHtml);
			$quanpeiRebateMoneyTd.append(quanpeiRebateMoneyHtml);
			$billRemarkTd.append(remarkHtml);
		}else if(tdName == 'currGuide'){
			$currGuideTd.append(currGuideHtml);
			$currGuideMoneyTd.append(currMoneyHtml);
			$currGuideRemarkTd.append(currRemarkHtml);
		}
		//获取导游
		var $shopObj = $parentObj.find('.T-count-shopping');
		$tr.find('input[name=shopGuideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
		$tr.find('input[name=currGuideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
	};
	//删除导游
	Count.delShopGuide = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),$thisTd = $obj.closest('td'),
			$nextTd = $tr.find('td[name=shopGuideMoney]'),
			$thisDiv = $obj.closest('div'),
			$imgTd = $tr.find('td[name=imgTd]'),
			$guideRateTd = $tr.find('td[name=guideRate]'),
			$guideRateMoneyTd = $tr.find('td[name=guideRateMoney]'),
			$quanpeiRebateTd = $tr.find('td[name=quanpeiRebate]'),
			$quanpeiRebateMoneyTd = $tr.find('td[name=quanpeiRebateMoney]'),
			$billRemarkTd = $tr.find('td[name=billRemark]'),
			$currGuideTd = $tr.find('td[name=currGuide]'),
			$currGuideMoneyTd = $tr.find('td[name=currGuideMoney]'),
			$currGuideRemarkTd = $tr.find('td[name=currGuideRemark]'),
			guideId = $thisDiv.attr('guideId'),
			tdName = $thisTd.attr('name'),
			index = $thisDiv.attr('index');
		var cateName = '';
		if(tdName == 'shopGuideName'){
			cateName = 'shopGuideDetail'
		}else if(tdName =='currGuide'){
			cateName = 'shopGuideCashDetail'
		};
		if(!!guideId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(guideId,cateName,removeGuide);
			});
		}else{
			removeGuide();
		}
		function removeGuide (){
			if(tdName == 'shopGuideName'){
				Count.delDiv($thisTd,index,$parentObj);
				Count.delDiv($nextTd,index,$parentObj);
				Count.delDiv($imgTd,index,$parentObj);
				Count.delDiv($guideRateTd,index,$parentObj);
				Count.delDiv($guideRateMoneyTd,index,$parentObj);
				Count.delDiv($quanpeiRebateTd,index,$parentObj);
				Count.delDiv($quanpeiRebateMoneyTd,index,$parentObj);
				Count.delDiv($billRemarkTd,index,$parentObj);
			}else if(tdName =='currGuide'){
				Count.delDiv($currGuideTd,index,$parentObj);
				Count.delDiv($currGuideMoneyTd,index,$parentObj);
				Count.delDiv($currGuideRemarkTd,index,$parentObj);
			};
		}
	};
	//删除新增的商品
	Count.delShop = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var $prev = $tr.prevAll(),
			td_cnt = $tr.children('td').length;
		var shopItemArrangeId = $tr.find('input[name=shopPolicyArrId]').val();

		if(!!shopItemArrangeId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(shopItemArrangeId,'shopItem',removeItem);
			});
		}else{
			removeItem();
		};
		
		
		function removeItem (){
			Count.totalRebeatMoney($obj,$parentObj);
			for(var i = 0; i<$prev.length;i++){
				var tdLen = $prev.eq(i).children('td').length;
				if(tdLen>td_cnt){
					var rowSpan = $prev.eq(i).children('td').eq(0).attr('rowspan');
					rowSpan = rowSpan*1 - 1;
					$prev.eq(i).children('td[rowspan]').prop('rowspan', rowSpan);
					$tr.remove();
					Count.autoShopSumCost($obj,$parentObj);
					Count.sumShopTwoMoney($obj,$parentObj);
					break;
				}
			};
		};
	};
	//删除新增的购物安排
	Count.delShopArrange = function($obj,$parentObj){

		var $tr = $obj.closest('tr'),
			$nextTr = $tr.nextAll(),
			td_cnt = $tr.children('td').length,
			shopArrangeId = $tr.attr('shopArrangeId');
		if(!!shopArrangeId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(shopArrangeId,'shop',removeItem);
			});
		}else{
			removeItem();
		}
		function removeItem (){
			
			if($nextTr.length>2){
				$tr.remove();
				for(var i = 0;i<$nextTr.length;i++){
					var tdLen = $nextTr.eq(i).children('td').length;
					if(tdLen == td_cnt){
						break;
					}else{
						if(i+1==$nextTr.length){
							if(!!$nextTr.eq(i).next()){
								$nextTr.eq(i).remove();
							}else{
								$nextTr.eq(i-1).remove();
							}
						}else{
							$nextTr.eq(i).remove();
						}
					}
				};
			}else{
				for(var i = 0;i<$nextTr.length;i++){
					var tdLen = $nextTr.eq(i).children('td').length;
					$nextTr.eq(i).remove();
					$tr.remove();
				};
			};
			Count.autoShopSum($obj,$parentObj);
			Count.sumShopMoney($parentObj);
		};

	};
	//购物金额计算
	Count.autoShopSum = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var shopId = $tr.attr('shopId');
		var editFeildTagName = $obj.attr('name');
		var consumeMoney = $tr.find('input[name=sumConsumeMoney]');
		var $shopGuideMoney = $tr.find('td[name=shopGuideMoney]');
		var $guideRate = $tr.find('td[name=guideRate]');
		var $guideRateMoney = $tr.find('td[name=guideRateMoney]');
		var $quanpeiRebate = $tr.find('td[name=quanpeiRebate]');
		var $quanpeiRebateMoney = $tr.find('td[name=quanpeiRebateMoney]');
		var $travelAgencyRate = $tr.find('input[name=travelAgencyRate]');
		var $travelAgencyRateMoney = $tr.find('input[name=travelAgencyRateMoney]');
		var $twoRebate = $tr.find('input[name=twoRebate]');
		var $twoRebateMoney = $tr.find('input[name=twoRebateMoney]');
		var thisIndex = $obj.closest('div').attr('index');
		var sumGmoney = 0,sumTmoney = 0,sumSmoney = 0,gRate = 0,thisSmoney = 0,
			tRate = $travelAgencyRate.val(),qRate = 0,sumTwoMoney = 0;

		$guideRate.find('div').each(function(){
			var index = $(this).attr('index');
			if(index == thisIndex){
				gRate = Count.changeTwoDecimal($(this).find('input[name=guideRate]').val()/100);
			};
		});

		$quanpeiRebate.find('div').each(function(){
			var index = $(this).attr('index');
			if(index == thisIndex){
				qRate = Count.changeTwoDecimal($(this).find('input[name=quanpeiRebate]').val()/100);
			};
		});
		$tr.find('input[name=shopGuideMoney]').each(function(){
			var sum = Count.changeTwoDecimal($(this).val());
			sumSmoney += sum; 
		});

		$shopGuideMoney.find('div').each(function(){
			var index = $(this).attr('index');
			if(index == thisIndex){
				thisSmoney = Count.changeTwoDecimal($(this).find('input[name=shopGuideMoney]').val());
			};
		});

		if(!!shopId){
			switch(editFeildTagName) {
				case 'travelAgencyRate':
					travelMoney();
					break;
				case 'guideRate':
					guideMoney();
					break;
				case 'quanpeiRebate':
					quanpeiRebateMoney();
				break;
				case 'shopGuideMoney':
					travelMoney();
					guideMoney();
					quanpeiRebateMoney();
					Count.sumShopTwoMoney($obj,$parentObj);
					break;
				case 'twoRebate':
					Count.sumShopTwoMoney($obj,$parentObj);
					break;
				default: break;
			}
		}else{
			if(editFeildTagName != 'travelAgencyRateMoney' && editFeildTagName != 'guideRateMoney' && editFeildTagName != "quanpeiRebateMoney" && editFeildTagName != "twoRebateMoney"){
				travelMoney();
				guideMoney();
				quanpeiRebateMoney();
				Count.sumShopTwoMoney($obj,$parentObj);
			}
		}
		function guideMoney (){
			$guideRateMoney.find('div').each(function(){
				var index = $(this).attr('index');
				if(index == thisIndex){
					var sum = Count.changeTwoDecimal(gRate*thisSmoney);
					$(this).find('input[name=guideRateMoney]').val(sum);
				};
			});
		};//导佣
		function quanpeiRebateMoney (){
			$quanpeiRebateMoney.find('div').each(function(){
				var index = $(this).attr('index');
				if(index == thisIndex){
					var sum = Count.changeTwoDecimal(qRate*thisSmoney);
					$(this).find('input[name=quanpeiRebateMoney]').val(sum);
				};
			});
		};//全陪佣
		
		function travelMoney (){
			var sum = Count.changeTwoDecimal(sumSmoney*(tRate/100));
			$travelAgencyRateMoney.val(sum);
		};//社佣

		//设置总金额
		Count.autoShopSumCost($obj,$parentObj);
	};
	//购物--总金额计算(剔除导佣、社佣的计算)
	Count.autoShopSumCost = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),
			$shopList = $parentObj.find('.T-count-shopping'),
			$sumConsumeMoney = $tr.find('input[name=sumConsumeMoney]'),
			$showConsumeMoney = $tr.find('.sumConsumeMoney'),
			$shopGuideMoney = $tr.find('input[name=shopGuideMoney]'),
			$guideRateMoney = $shopList.find('input[name=guideRateMoney]'),
			$quanpeiRebateMoney = $shopList.find('input[name=quanpeiRebateMoney]'),
			$oldDataTr = $shopList.find('.oldData'),
			sumShopMoney = 0,sumgMoney = 0,sumgQuanpMoney = 0,sumSGmoney = 0;
		$shopGuideMoney.each(function(){
			var sum = Count.changeTwoDecimal($(this).val());
			sumSGmoney += sum;
		});

		$oldDataTr.each(function(){
			var $that = $(this),
				isConfirmAccount = $that.attr('isConfirmAccount'),
				shopMoney = 0;
				
			if(!!isConfirmAccount && isConfirmAccount == 1){
				var m = $that.find('input[name=settlementMoney]').val();
				shopMoney =Count.changeTwoDecimal(m);
			}else{
				var shopMoney = Count.getShopMoney($that);
			};
			sumShopMoney += shopMoney
		});
		$guideRateMoney.each(function(){
			var sum = Count.changeTwoDecimal($(this).val());
			sumgMoney += sum;
		});
		$quanpeiRebateMoney.each(function(){
			var sum = Count.changeTwoDecimal($(this).val());
			sumgQuanpMoney += sum;
		});
		$showConsumeMoney.text(sumSGmoney);
		$sumConsumeMoney.val(sumSGmoney)//金额小计
		
		sumMoney = Count.changeTwoDecimal(sumShopMoney);//购物收入

		//计算社佣
		
	        
    	var $mainTable = $parentObj.find('.T-main-table');
		$mainTable.find('.tripIncome-shopIncomeMoney').text(sumMoney);
		//计算导游购物返佣
		$mainTable.find('.tripCost-guideshopFee').text(sumgMoney);
		//计算全陪购物返佣
		$mainTable.find('.quanpei-shopFee').text(sumgQuanpMoney);
		//计算团收入
		Count.tripIncome($parentObj);
		//计算团成本
		Count.tripCost($parentObj);	
		//计算金额合计
		Count.totalRebeatMoney($obj,$parentObj);
	};
	//获取未对账的购物店的购物金额
	Count.getShopMoney = function($tr){
		var $nextTr = $tr.nextAll(),itemShopMoney = 0,
			twoMoney = 0,gMoney = 0,qMoney = 0,tMoney = 0;
		$tr.find('input[name=twoRebateMoney]').each(function() {
			twoMoney += Count.changeTwoDecimal($(this).val());
		});
		$tr.find('input[name=travelAgencyRateMoney]').each(function() {
			tMoney += Count.changeTwoDecimal($(this).val());
		});
		$tr.find('input[name=guideRateMoney]').each(function() {
			gMoney += Count.changeTwoDecimal($(this).val());
		});
		$tr.find('input[name=quanpeiRebateMoney]').each(function() {
			qMoney += Count.changeTwoDecimal($(this).val());
		});
		for(var i = 0;i<$nextTr.length;i++){
			var $that = $nextTr.eq(i),
				$guideRateMoney = $that.find('input[name=guideRateMoney]'),
				$quanpeiRebateMoney = $that.find('input[name=quanpeiRebateMoney]'),
				$travelMoney = $that.find('input[name=travelAgencyRateMoney]');

			$guideRateMoney.each(function(){
				var sum =Count.changeTwoDecimal($(this).val());
				gMoney += sum;
			});
			$quanpeiRebateMoney.each(function(){
				var sum =Count.changeTwoDecimal($(this).val());
				qMoney += sum;
			});
			$travelMoney.each(function(){
				var sum =Count.changeTwoDecimal($(this).val());	
				tMoney += sum;
			});
			if($that.hasClass('sumMoney')){
				itemShopMoney  += Count.changeTwoDecimal(gMoney+qMoney+tMoney+twoMoney);
				break;
			}
		}
		return itemShopMoney;
	};
	//购物--计算金额合计
	Count.totalRebeatMoney = function($obj,$parentObj){
		var $thisTr = $obj.closest('tr');
		var td_cnt = 0;
		var sumTd_cnt = 0,sumScenondMoney = 0,sumRebeMoney = 0;//二次返佣合计;
		if($thisTr.hasClass('oldData')){
			td_cnt = $thisTr.children('td').length;
		};
		var thisTdLen = $thisTr.children('td').length;

		function totalMoney ($tr){
			var	$moneyObj = $tr.find('input[name=sumConsumeMoney]'),
				$travelObj = $tr.find('input[name=travelAgencyRateMoney]'),
				$guideObj = $tr.find('input[name=guideRateMoney]'),
				$quanpeiObj = $tr.find('input[name=quanpeiRebateMoney]'),
				sum = {
					sumMoney : 0,
					sumTravelMoney : 0,
					sumGuideMoney : 0,
					sumquanpeiMoney : 0
				};
			//计算金额合计
			sum.sumMoney += Count.changeTwoDecimal($moneyObj.val());

			$travelObj.each(function(){
				sum.sumTravelMoney += Count.changeTwoDecimal($(this).val());
			});
			$guideObj.each(function(){
				sum.sumGuideMoney += Count.changeTwoDecimal($(this).val());
			});
			$quanpeiObj.each(function(){
				sum.sumquanpeiMoney += Count.changeTwoDecimal($(this).val());
			});
			return sum;
		};
		if(thisTdLen == td_cnt){
			var $nextTr = $thisTr.nextAll(),
				sumMoney = 0,//总金额
				sumTravelMoney = 0,//社佣合计
				sumquanpeiMoney = 0,//全陪合计
				sumGuideMoney = 0;//导佣合计
			sumScenondMoney += Count.changeTwoDecimal($thisTr.find('input[name=twoRebateMoney]').val());
			$thisTr.find('input[name=currGuideMoney]').each(function(){
				var t = Count.changeTwoDecimal($(this).val());
				sumRebeMoney += t;
			});

			for(var i = 1;i<$nextTr.length;i++){
				var thatTdLen = $nextTr.eq(i).children('td').length,
					$that = $nextTr.eq(i);
				if($that.hasClass('sumMoney')){
					//计算总金额
					$that.find('.T-totalMoney').text(sumMoney);
					$that.find('.T-totalTravelMoney').text(sumTravelMoney);
					$that.find('.T-totalGuideMoney').text(sumGuideMoney);
					$that.find('.T-allTravelMoney').text(sumquanpeiMoney);
					$that.find('.T-secondaryTravelMoney').text(sumScenondMoney); 
					$that.find('.T-payingRebeMoney').text(sumRebeMoney); 
					var totalRateMoney = sumTravelMoney+sumGuideMoney+sumquanpeiMoney+sumScenondMoney;
					$that.find('.T-sumRebeMoney').text(totalRateMoney);
					break;
				}else{
					
					var sum = totalMoney($that);
					sumMoney += sum.sumMoney;
					sumTravelMoney += sum.sumTravelMoney;
					sumGuideMoney += sum.sumGuideMoney;
					sumquanpeiMoney += sum.sumquanpeiMoney;
				};
			}
		}else{
			var	sumMoney = 0,//计算总金额
				sumTravelMoney = 0,//计算社佣合计
				sumquanpeiMoney = 0,
				sumGuideMoney = 0;//计算导佣合计
				$preTr = $thisTr.prevAll(),
				$nextTr = $thisTr.nextAll();
				if($obj.hasClass('T-shopArrDelItem') || $thisTr.hasClass('noSumRate')){
					sumMoney = 0;//计算总金额
					sumTravelMoney = 0;//计算社佣合计
					sumGuideMoney = 0;//计算导佣合计
					sumquanpeiMoney = 0;//计算全陪导佣合计
				}else{
					var sum = totalMoney($thisTr);
					sumMoney += sum.sumMoney;
					sumTravelMoney += sum.sumTravelMoney;
					sumGuideMoney += sum.sumGuideMoney;
					sumquanpeiMoney += sum.sumquanpeiMoney;
				};
				
			for(var i = 0;i<$preTr.length;i++){
				var $that = $preTr.eq(i);
				if($that.hasClass('noSumRate')){
					if($that.hasClass('oldData')){
						sumScenondMoney += Count.changeTwoDecimal($that.find('input[name=twoRebateMoney]').val());
						$that.find('input[name=currGuideMoney]').each(function(){
							var t = Count.changeTwoDecimal($(this).val());
							sumRebeMoney += t;
						});

					}else{
						var $oldDataTr = $that.prev();
						sumScenondMoney += Count.changeTwoDecimal($oldDataTr.find('input[name=twoRebateMoney]').val());
						$oldDataTr.find('input[name=currGuideMoney]').each(function(){
							var t = Count.changeTwoDecimal($(this).val());
							sumRebeMoney += t;
						});

					};
					break;
				}else{
					var sum = totalMoney($that);
					sumMoney += sum.sumMoney;
					sumTravelMoney += sum.sumTravelMoney;
					sumGuideMoney += sum.sumGuideMoney;
					sumquanpeiMoney += sum.sumquanpeiMoney;
				};
			};
			for(var i = 0;i<$nextTr.length;i++){
				var $that = $nextTr.eq(i);
				if($that.hasClass('sumMoney')){
					//计算总金额
					$that.find('.T-totalMoney').text(sumMoney);
					$that.find('.T-totalTravelMoney').text(sumTravelMoney);
					$that.find('.T-totalGuideMoney').text(sumGuideMoney);
					$that.find('.T-allTravelMoney').text(sumquanpeiMoney);
					$that.find('.T-payingRebeMoney').text(sumRebeMoney);
					$that.find('.T-secondaryTravelMoney').text(sumScenondMoney);
					var totalRateMoney = sumTravelMoney+sumGuideMoney+sumquanpeiMoney+sumScenondMoney;
					$that.find('.T-sumRebeMoney').text(totalRateMoney);
					break;
				}else{
					var sum = totalMoney($that);
					sumMoney += sum.sumMoney;
					sumTravelMoney += sum.sumTravelMoney;
					sumGuideMoney += sum.sumGuideMoney;
					sumquanpeiMoney += sum.sumquanpeiMoney;
				}
			};
			
			Count.sumShopMoney($parentObj);
		};
	};
	//计算表头数据合计
	Count.sumShopMoney = function($parentObj){
		var $shopMoneyObj = $parentObj.find('.T-totalMoney');
		var $guideMoneyObj = $parentObj.find('.T-totalGuideMoney');
		var $travelMoneyObj = $parentObj.find('.T-totalTravelMoney');
		var sumShopMoney = 0,
			sumGuideMoney = 0,
			sumTravelMoney = 0;
		$shopMoneyObj.each(function(){
			var t =Count.changeTwoDecimal($(this).text());
			sumShopMoney += t;
		});
		$guideMoneyObj.each(function(){
			var t =Count.changeTwoDecimal($(this).text());
			sumGuideMoney += t;
		});
		$travelMoneyObj.each(function(){
			var t =Count.changeTwoDecimal($(this).text());
			sumTravelMoney += t;
		});
		$parentObj.find('.T-sumShopMoney').text(sumShopMoney);
		$parentObj.find('.T-sumTravelMoney').text(sumTravelMoney);
		$parentObj.find('.T-sumGuideMoney').text(sumGuideMoney);
	};
	//计算二次返佣
	Count.sumShopTwoMoney = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),
			td_cnt = 0,nextTr = $tr.nextAll(),preTr = $tr.prevAll(),sumTwoMoney = 0,shopTwoRate = 0,
			thisShopTwoMoney = 0;
		if($tr.hasClass('oldData')){
			for(var i = 0;i<nextTr.length;i++){
				var $that = nextTr.eq(i);
				if($that.hasClass('sumMoney')){
					var t = sumTwoMoneyFn($tr);
						shopTwoRate = $tr.find('input[name=twoRebate]').val();
					sumTwoMoney += t;
					thisShopTwoMoney = Count.changeTwoDecimal(sumTwoMoney*shopTwoRate/100);
					$tr.find('input[name=twoRebateMoney]').val(thisShopTwoMoney);
					break;
				}else{
					var t = sumTwoMoneyFn($that);
					sumTwoMoney += t;
				}
			};
		}else{
			for(var i = 0;i<nextTr.length;i++){
				var $that = nextTr.eq(i);
				if($that.hasClass('sumMoney')){
					var t = sumTwoMoneyFn($tr);
						sumTwoMoney += t;
					break;
				}else{
					var t = sumTwoMoneyFn($that);
					sumTwoMoney += t;
				}
			};

			for(var i = 0;i<preTr.length;i++){
				var $this = preTr.eq(i);
				if($this.hasClass('oldData')){
					var t = sumTwoMoneyFn($this);
						shopTwoRate = $this.find('input[name=twoRebate]').val();
						sumTwoMoney += t;
					thisShopTwoMoney = Count.changeTwoDecimal(sumTwoMoney*shopTwoRate/100);
					$this.find('input[name=twoRebateMoney]').val(thisShopTwoMoney);
					break;
				}else{
					var t = sumTwoMoneyFn($this);
					sumTwoMoney += t;
				}
			};
		};
		function sumTwoMoneyFn (tr){
			var twoMoney = Count.changeTwoDecimal(tr.find('.sumConsumeMoney').text());
			return twoMoney;
		};
		
		Count.autoShopSumCost($obj,$parentObj);
	};
	//计算整个团收入、毛利、人均毛利
	Count.tripIncome = function($obj){
		var tripIncome = $obj.find('.tripIncome');
		var grossProfitMoney = $obj.find('.grossProfitMoney');
		var perGrossProfitMoney = $obj.find('.perGrossProfitMoney');
		var tripNeedIncome = $obj.find('.tripIncome-getAllMoney').text();
		var selfPayTravelAgencyRebateMoney = $obj.find('.tripIncome-selfIcomeMoney').text();
		var shopTravelAgencyRateMoney = $obj.find('.tripIncome-shopIncomeMoney').text();
		var otherInCome = $obj.find('.tripIncome-otherInCome').text();
		var guideManageMoney = $obj.find('.tripIncome-guideManageMoney').text();
		var allPerson = $obj.find('input[name=totalPersonCount]').val();
		var tripCost = $obj.find('.tripCost').text();
		var tripTransitCost = $obj.find('.tripTransitCost').text();
		//规范数据
		tripNeedIncome = Count.changeTwoDecimal(tripNeedIncome);
		selfPayTravelAgencyRebateMoney = Count.changeTwoDecimal(selfPayTravelAgencyRebateMoney);
		shopTravelAgencyRateMoney = Count.changeTwoDecimal(shopTravelAgencyRateMoney);
		otherInCome = Count.changeTwoDecimal(otherInCome);
		guideManageMoney = Count.changeTwoDecimal(guideManageMoney);
		allPerson = Count.changeTwoDecimal(allPerson);
		tripCost = Count.changeTwoDecimal(tripCost);
		tripTransitCost = Count.changeTwoDecimal(tripTransitCost);
		//计算团收入
		var tripSum = (tripNeedIncome+selfPayTravelAgencyRebateMoney+shopTravelAgencyRateMoney+otherInCome+guideManageMoney);
		tripSum = Count.changeTwoDecimal(tripSum);
		tripSum = Tools.toFixed(tripSum,2);
		tripIncome.text(tripSum);
		//计算毛利
		var grossProfi = tripSum-tripCost-tripTransitCost;
		//grossProfi = Count.changeTwoDecimal(grossProfi);
		grossProfi = Tools.toFixed(grossProfi,2);
		grossProfitMoney.text(grossProfi);
		//计算人均毛利
		var perGrossProfit = (grossProfi/allPerson);
		//perGrossProfit = Count.changeTwoDecimal(perGrossProfit);
		perGrossProfit = Tools.toFixed(perGrossProfit,2);
		perGrossProfitMoney.text(perGrossProfit);
	};
	//计算整个团成本、毛利、人均毛利
	Count.tripCost = function($obj){
		var tripCost = $obj.find('.tripCost');
		var grossProfitMoney = $obj.find('.grossProfitMoney');
		var perGrossProfitMoney = $obj.find('.perGrossProfitMoney');

		var guideArrangePrice = $obj.find('.tripCost-guideArrangePrice').text();
		var insuranceArrangeNeedPayMoney = $obj.find('.tripCost-insuranceArrangeNeedPayMoney').text();
		var busCompanyNeedPayMoney = $obj.find('.tripCost-busCompanyNeedPayMoney').text();
		var guideshopFee = $obj.find('.tripCost-guideshopFee').text();
		var restaurantArrangeNeedPayMoney = $obj.find('.tripCost-restaurantArrangeNeedPayMoney').text();
		var hotelArrangeNeedPayMoney = $obj.find('.tripCost-hotelArrangeNeedPayMoney').text();
		var scenicArrangeNeedPayMoney = $obj.find('.tripCost-scenicArrangeNeedPayMoney').text();
		var guideSelfMoney = $obj.find('.tripCost-guideSelfMoney').text();
		var ticketArrangeNeedPayMoney = $obj.find('.tripCost-ticketArrangeNeedPayMoney').text();
		var otherArrangeNeedPayMoney = $obj.find('.tripCost-otherArrangeNeedPayMoney').text();
		var selfArrangeNeedPayMoney = $obj.find('.tripCost-selfArrangeNeedPayMoney').text();
		var quanpeiShopNeedPayMoney = $obj.find('.quanpei-shopFee').text();
		var quanpeiSelfNeedPayMoney = $obj.find('.tripCostQuanpei-SelfFee').text();
		var guidePunishMoney = $obj.find('.tripCost-guidePunishMoney').text();

		var tripIncome = $obj.find('.tripIncome').text();
		var tripTransitCost = $obj.find('.tripTransitCost').text();
		var allPerson = $obj.find('input[name=totalPersonCount]').val();
		//规范数据
		guideArrangePrice = Count.changeTwoDecimal(guideArrangePrice);
		insuranceArrangeNeedPayMoney = Count.changeTwoDecimal(insuranceArrangeNeedPayMoney);
		busCompanyNeedPayMoney = Count.changeTwoDecimal(busCompanyNeedPayMoney);
		guideshopFee = Count.changeTwoDecimal(guideshopFee);
		restaurantArrangeNeedPayMoney = Count.changeTwoDecimal(restaurantArrangeNeedPayMoney);
		hotelArrangeNeedPayMoney = Count.changeTwoDecimal(hotelArrangeNeedPayMoney);
		scenicArrangeNeedPayMoney = Count.changeTwoDecimal(scenicArrangeNeedPayMoney);
		guideSelfMoney = Count.changeTwoDecimal(guideSelfMoney);
		ticketArrangeNeedPayMoney = Count.changeTwoDecimal(ticketArrangeNeedPayMoney);
		otherArrangeNeedPayMoney = Count.changeTwoDecimal(otherArrangeNeedPayMoney);
		selfArrangeNeedPayMoney = Count.changeTwoDecimal(selfArrangeNeedPayMoney);
		quanpeiShopNeedPayMoney = Count.changeTwoDecimal(quanpeiShopNeedPayMoney);
		quanpeiSelfNeedPayMoney = Count.changeTwoDecimal(quanpeiSelfNeedPayMoney);
		guidePunishMoney = Count.changeTwoDecimal(guidePunishMoney);
		tripIncome = Count.changeTwoDecimal(tripIncome);
		tripTransitCost = Count.changeTwoDecimal(tripTransitCost);
		allPerson = Count.changeTwoDecimal(allPerson);
		//计算团成本
		var tripSum = (guideArrangePrice+insuranceArrangeNeedPayMoney+busCompanyNeedPayMoney+guideshopFee+restaurantArrangeNeedPayMoney);
		var tripCostSum = (hotelArrangeNeedPayMoney+scenicArrangeNeedPayMoney+guideSelfMoney+ticketArrangeNeedPayMoney+otherArrangeNeedPayMoney+selfArrangeNeedPayMoney+quanpeiShopNeedPayMoney+quanpeiSelfNeedPayMoney+guidePunishMoney);
		tripSum = Count.changeTwoDecimal(tripSum);
		tripCostSum = Count.changeTwoDecimal(tripCostSum);
		var allSum = (tripSum+tripCostSum);
		allSum = Tools.toFixed(allSum,2);
		tripCost.text(allSum);
		//计算毛利
		var grossProfi = tripIncome-allSum-tripTransitCost;
		//grossProfi = Count.changeTwoDecimal(grossProfi);
		grossProfi = Tools.toFixed(grossProfi,2);
		grossProfitMoney.text(grossProfi);

		//计算人均毛利
		var perGrossProfit = (grossProfi/allPerson);
		//perGrossProfit = Count.changeTwoDecimal(perGrossProfit);
		perGrossProfit = Tools.toFixed(perGrossProfit,2);
		perGrossProfitMoney.text(perGrossProfit);
	};
	//计算中转成本、毛利、人均毛利
	Count.tripTransferCost = function($obj){
		var tripTransitCost = $obj.find('.tripTransitCost');
		var grossProfitMoney = $obj.find('.grossProfitMoney');
		var perGrossProfitMoney = $obj.find('.perGrossProfitMoney');

		var busCompanyNeedPayMoney = $obj.find('.tripTransitCost-busCompanyNeedPayMoney').text();
		var outRestaurantMoney = $obj.find('.tripTransitCost-outRestaurantMoney').text();
		var hotelArrangeNeedPayMoney = $obj.find('.tripTransitCost-hotelArrangeNeedPayMoney').text();
		var outOtherMoney = $obj.find('.tripTransitCost-outOtherMoney').text();
		var ticketArrangeNeedPayMoney = $obj.find('.tripTransitCost-ticketArrangeNeedPayMoney').text();
		//规范数据
		busCompanyNeedPayMoney = Count.changeTwoDecimal(busCompanyNeedPayMoney);
		outRestaurantMoney = Count.changeTwoDecimal(outRestaurantMoney);
		hotelArrangeNeedPayMoney = Count.changeTwoDecimal(hotelArrangeNeedPayMoney);
		outOtherMoney = Count.changeTwoDecimal(outOtherMoney);
		ticketArrangeNeedPayMoney = Count.changeTwoDecimal(ticketArrangeNeedPayMoney);
	};
	//导游金额计算
	Count.autoGuideSum = function($obj,$parentObj){
		var	$priceObj = $obj.find('input[name=price]'),
			$manageFeeObj = $obj.find('input[name=manageFee]'),
			$guidePushMoneyObj = $obj.find('.guidePunishMoney'),
			sumPrice = 0,sumManageFee = 0,punishMoney = 0;
		$priceObj.each(function(){
			var sum = Count.changeTwoDecimal($(this).val());
			sumPrice += sum;
		});
		
		$manageFeeObj.each(function(){
			var sum = Count.changeTwoDecimal($(this).val());
			sumManageFee += sum;
		});

		$guidePushMoneyObj.each(function(){
			var sum = Count.changeTwoDecimal($(this).text());
			punishMoney += sum;
		});

		$parentObj.find('.tripCost-guidePunishMoney').text(punishMoney);
		$parentObj.find('.tripCost-guideArrangePrice').text(sumPrice);
		$parentObj.find('.tripIncome-guideManageMoney').text(sumManageFee);
		//计算团收入
		Count.tripIncome($parentObj);
		//计算团成本
		Count.tripCost($parentObj);
	};
	//自费--计算导佣社佣
	Count.sumRateMoney = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var thisDiv = $obj.closest('div'),
			thisIndex = thisDiv.attr('index'),
			$incomeCount = $tr.find('td[name=incomeCount]'),
			$cashMoney = $tr.find('td[name=cashMoney]'),
			$travelAgencyRate = $tr.find('td[name=travelAgencyRate]'),
			$travelAgencyRebateMoney = $tr.find('td[name=travelAgencyRebateMoney]'),
			$guideRate = $tr.find('td[name=guideRate]'),
			$guideRebateMoney = $tr.find('td[name=guideRebateMoney]'),
			$quanpeiRebate = $tr.find('td[name=quanpeiRebate]'),
			$quanpeiRebateMoney = $tr.find('td[name=quanpeiRebateMoney]'),
			$twoRebate = $tr.find('td[name=twoRebate]'),
			$twoRebateMoney = $tr.find('td[name=twoRebateMoney]'),
			editFeildTagName = $obj.attr('name');

		var price = $tr.find('input[name=price]').val();//协议价
		if(!!$tr.find('.realPrice').text()){
			price = Count.changeTwoDecimal($tr.find('.realPrice').text());
		};
		var cashMoney = 0,inCount = 0,tRate = 0,gRate = 0,qRate = 0,tMoney = 0,gMoney = 0,sum = 0,qMoney = 0;

		$cashMoney.find('div').each(function(){
			var index = $(this).attr('index');
			if(index == thisIndex){
				cashMoney = Count.changeTwoDecimal($(this).find('input[name=cashMoney]').val());
			};
		});//现收

		$incomeCount.find('div').each(function(){
			var index = $(this).attr('index');
			if(index == thisIndex){
				inCount =Count.changeTwoDecimal($(this).find('input[name=incomeCount]').val());
			};
		});//应收数量

		$travelAgencyRate.find('div').each(function(){
			var index = $(this).attr('index');
			if(index == thisIndex){
				tRate = Count.changeTwoDecimal($(this).find('input[name=travelAgencyRate]').val()/100);
			};
		});//社佣比例

		$guideRate.find('div').each(function(){
			var index = $(this).attr('index');
			if(index == thisIndex){
				gRate =Count.changeTwoDecimal($(this).find('input[name=guideRate]').val()/100);
			};
		});//导游比例

		$quanpeiRebate.find('div').each(function(){
			var index = $(this).attr('index');
			if(index == thisIndex){
				qRate =Count.changeTwoDecimal($(this).find('input[name=quanpeiRebate]').val()/100);
			};
		});//全陪比例

		sum = Count.changeTwoDecimal((cashMoney-(inCount*price)));
			//导游佣金= (现收-应收数量*低价)*导佣比例
			var selfId = $tr.attr('selfPayId');
			if(!!selfId){
				switch(editFeildTagName) {
					case 'travelAgencyRate':
						travelMoney();
						break;
					case 'guideRate':
						guideMoney();
						break;
					case 'quanpeiRebate':
						quanpeiMoney();
					break;
					case 'cashMoney':
						guideMoney();
						travelMoney();
						quanpeiMoney();
						break;
					case 'incomeCount':
						guideMoney();
						travelMoney();
						quanpeiMoney();
						break;
					case 'realCount':
						guideMoney();
						travelMoney();
						quanpeiMoney();
						break;
					case 'price':
						guideMoney();
						travelMoney();
						quanpeiMoney();
						break;
					case 'marketPrice':
						guideMoney();
						travelMoney();
						quanpeiMoney();
						break;
					default: break;
				};
			}else{
				if(editFeildTagName != "travelAgencyRebateMoney" && editFeildTagName != "guideRebateMoney" && editFeildTagName != "quanpeiRebateMoney"){
					guideMoney();
					travelMoney();
					quanpeiMoney();
				}
			};
			function guideMoney (){
				$guideRebateMoney.find('div').each(function(){
					var index = $(this).attr('index');
						
					if(index == thisIndex){
						gMoney = sum*gRate;
						$(this).find('input[name=guideRebateMoney]').val(gMoney);
					};
					if(editFeildTagName == 'marketPrice' || editFeildTagName == 'price'){
						sumChangePrice();
					};
				});//导佣
			};
			function travelMoney (){
				$travelAgencyRebateMoney.find('div').each(function(){
					var index = $(this).attr('index');
						
					if(index == thisIndex){
						tMoney = sum*tRate;
						$(this).find('input[name=travelAgencyRebateMoney]').val(tMoney);
					};
					if(editFeildTagName == 'marketPrice' || editFeildTagName == 'price'){
						sumChangePrice();
					};
				});//社佣
			};
			function quanpeiMoney (){
				$quanpeiRebateMoney.find('div').each(function(){
					var index = $(this).attr('index');
						
					if(index == thisIndex){
						qMoney = sum*qRate;
						$(this).find('input[name=quanpeiRebateMoney]').val(qMoney);
					};
					if(editFeildTagName == 'marketPrice' || editFeildTagName == 'price'){
						sumChangePrice();
					};
				});//全陪佣
			};
			function sumChangePrice (){

				$cashMoney.find('div').each(function(){
					var cashIndex = $(this).attr('index'),
						cashVal = $(this).find('input[name=cashMoney]').val();//现收
					$incomeCount.find('div').each(function(){
						var inCountIndex = $(this).attr('index');
						if(inCountIndex == cashIndex){
							inCount =Count.changeTwoDecimal($(this).find('input[name=incomeCount]').val());
						};
					});//应收数量

					$travelAgencyRate.find('div').each(function(){
						var tRateIndex = $(this).attr('index');
						if(tRateIndex == cashIndex){
							tRate = Count.changeTwoDecimal($(this).find('input[name=travelAgencyRate]').val()/100);
						};
					});//社佣比例

					$guideRate.find('div').each(function(){
						var gRateIndex = $(this).attr('index');
						if(gRateIndex == cashIndex){
							gRate =Count.changeTwoDecimal($(this).find('input[name=guideRate]').val()/100);
						};
					});//导游比例

					$quanpeiRebate.find('div').each(function(){
						var index = $(this).attr('index');
						if(index == thisIndex){
							qRate =Count.changeTwoDecimal($(this).find('input[name=quanpeiRebate]').val()/100);
						};
					});//全陪比例

					var sumPGmoney = Count.changeTwoDecimal((cashVal-(inCount*price))*gRate);
					var sumPTmoney = Count.changeTwoDecimal((cashVal-(inCount*price))*tRate);
					var sumPQmoney = Count.changeTwoDecimal((cashVal-(inCount*price))*qRate);
					$travelAgencyRebateMoney.find('div').each(function(){
						var tMoneyIndex = $(this).attr('index');
							
						if(tMoneyIndex == cashIndex){
							$(this).find('input[name=travelAgencyRebateMoney]').val(sumPTmoney);
						};
					});//社佣

					$guideRebateMoney.find('div').each(function(){
						var gMoneyIndex = $(this).attr('index');
						if(gMoneyIndex == cashIndex){
							$(this).find('input[name=guideRebateMoney]').val(sumPGmoney);
						};
					});//导佣

					$quanpeiRebateMoney.find('div').each(function(){
						var tMoneyIndex = $(this).attr('index');
							
						if(tMoneyIndex == cashIndex){
							$(this).find('input[name=quanpeiRebateMoney]').val(sumPQmoney);
						};
					});//全陪

				});//现收
			};
			Count.autoSelfSum($obj,$parentObj);
	};
	//自费金额计算
	Count.autoSelfSum = function($obj,$parentObj){
			Count.computeSelfCost($obj,$parentObj);
			//计算团收入--自费收入
			var $bodyObj = $parentObj.find('.T-main-table'),
				selfIn = 0,selfCost = 0,selfGCost = 0,
				shopRebateMoney = 0 ,quanpeiSelfRebateMoney = 0,guideRebateMoney = 0,
				$tbodyObj = $parentObj.find('.T-count-selfPay'),
				oldDataTr = $tbodyObj.find('.oldData');
			oldDataTr.each(function(){
				var $that = $(this),
					itemSelfCost = 0,
					rowspan = $that.children('td[rowspan]').eq(0).attr('rowspan');
				if(rowspan == 1){
					var isConfirmAccount = $that.find('input[name=isConfirmAccount]').val();
					if(isConfirmAccount == 1 && !!isConfirmAccount){
						itemSelfCost += Count.changeTwoDecimal($that.find('input[name=settlementMoney]').val());
					}else{
						var $realNeedPayMoney = $that.find('input[name=realNeedPayMoney]')
						$realNeedPayMoney.each(function(){
							itemSelfCost += Count.changeTwoDecimal($(this).val());
						});
					}
				}else{
					itemSelfCost += Count.sumNotAccSelfMoney($that);
				}
				selfCost += itemSelfCost;
			});
			
			$tbodyObj.find('input[name=needIncome]').each(function() {
				var totalSum = Count.changeTwoDecimal(parseFloat($(this).val()));
				shopRebateMoney += totalSum;
			});
			$tbodyObj.find('input[name=guideRebateMoney]').each(function() {
				var t = Count.changeTwoDecimal(parseFloat($(this).val()));
				guideRebateMoney += t;
			});
			$tbodyObj.find('input[name=quanpeiRebateMoney]').each(function() {
				var t = Count.changeTwoDecimal(parseFloat($(this).val()));
				quanpeiSelfRebateMoney += t;
			});
			shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
			$bodyObj.find('.tripIncome-selfIcomeMoney').text(shopRebateMoney);
			//计算团收入
			Count.tripIncome($parentObj);
			//计算团成本
			Count.tripCost($parentObj);
			//计算自费导佣
			$parentObj.find('.tripCost-guideSelfMoney').text(guideRebateMoney);
			//计算全陪自费导佣
			$parentObj.find('.tripCostQuanpei-SelfFee').text(quanpeiSelfRebateMoney);
			//计算自费费用
			$parentObj.find('.tripCost-selfArrangeNeedPayMoney').text(selfCost);
	};
	//计算未对账的自费金额
	Count.sumNotAccSelfMoney = function($trObj){
		var $nextTr = $trObj.nextAll(),selfMoney = 0;
		if($nextTr.length>1){
			for(var i = 0;i<$nextTr.length;i++){
				var $that = $nextTr.eq(i);
				
				if($that.children('td').eq(0).hasClass('breakFlag')){
					selfMoney += sumMoney($that);
					selfMoney += sumMoney($trObj);
					break;
				}else{
					selfMoney += sumMoney($that);
				}
			};
		}else{
			selfMoney += sumMoney($nextTr.eq(0));
			selfMoney += sumMoney($trObj);
		}
		
		function sumMoney ($tr){
			var isConfirmAccount = $tr.find('input[name=isConfirmAccount]').val(),
				sum = 0;
			if(isConfirmAccount == 1 && !!isConfirmAccount){
				sum += Count.changeTwoDecimal($tr.find('input[name=settlementMoney]').val());
			}else{
				var $realNeedPayMoney = $tr.find('input[name=realNeedPayMoney]')
				$realNeedPayMoney.each(function(){
					sum += Count.changeTwoDecimal($(this).val());
				});
			}
			return sum;
		};
		return selfMoney;
	};
	Count.computeSelfCost = function($obj,$parentObj){
		/*
		应付=（应付数量*底价）-应付优惠。
		应收优惠 = （应收数量*单价）-现收。
		导佣\社佣 = （现收-应收数量*底价）*比例
		自费收入=应收列之和
		导游自费返佣=自费导佣之和
		 */
		
		var $tr = $obj.closest('tr');

		var divCount = $tr.find('td[name="selfGuideName"]').find('div'),
			thisIndex = 0,
			$incomeCount = $tr.find('td[name=incomeCount]'),
			$needInReduceMoney = $tr.find('td[name=needInReduceMoney]'),
			$needIncome = $tr.find('td[name=needIncome]'),
			$cashMoney = $tr.find('td[name=cashMoney]'),
			$realCount = $tr.find('td[name=realCount]'),
			$realReduceMoney = $tr.find('td[name=realReduceMoney]'),
			$realNeedPayMoney = $tr.find('td[name=realNeedPayMoney]'),
			$travelAgencyRate = $tr.find('td[name=travelAgencyRate]'),
			$travelAgencyRebateMoney = $tr.find('td[name=travelAgencyRebateMoney]'),
			$twoRebate = $tr.find('td[name=twoRebate]'),
			$twoRebateMoney = $tr.find('td[name=twoRebateMoney]'),
			$guideRate = $tr.find('td[name=guideRate]'),
			$guideRebateMoney = $tr.find('td[name=guideRebateMoney]');
			$quanpeiRebate = $tr.find('td[name=quanpeiRebate]'),
			$quanpeiRebateMoney = $tr.find('td[name=guideRebateMoney]');
		var marketPrice = $tr.find('input[name=marketPrice]').val();	//市场价
		if(!!$tr.find('.realMarketPrice').text()){
			marketPrice = Count.changeTwoDecimal($tr.find('.realMarketPrice').text());
		};

		var price = $tr.find('input[name=price]').val();//协议价
		if(!!$tr.find('.realPrice').text()){
			price = Count.changeTwoDecimal($tr.find('.realPrice').text());
		};
		var badStatus = $tr.find('input[name=badStatus]').val();
		var isConfirmAccount = $tr.find('input[name=isConfirmAccount]').val();
		var cashMoney = 0,inCount = 0,inReduce = 0,
			outReduce = 0,outMoney = 0,outCount = 0;

		divCount.each(function() {
			thisIndex = $(this).attr('index');
			sumMoney(thisIndex);
		});
		
		function sumMoney (divIndex){
			$cashMoney.find('div').each(function(){
			var index = $(this).attr('index');
				if(index == divIndex){
					cashMoney = Count.changeTwoDecimal($(this).find('input[name=cashMoney]').val());
				};
			});//现收

			$needIncome.find('div').each(function(){
				var index = $(this).attr('index');
				if(index == divIndex){
					$(this).find('input[name=needIncome]').val(cashMoney);
					$(this).find('.needIncome').text(cashMoney);
				};
			});//应收

			$incomeCount.find('div').each(function(){
				var index = $(this).attr('index');
				if(index == divIndex){
					inCount =Count.changeTwoDecimal($(this).find('input[name=incomeCount]').val());
				};
			});//应收数量

			$needInReduceMoney.find('div').each(function(){
				var index = $(this).attr('index');
				if(index == divIndex){
					inReduce =Count.changeTwoDecimal(((inCount*marketPrice)-cashMoney));
					$(this).find('input[name=needInReduceMoney]').val(inReduce);
					$(this).find('.needInReduceMoney').text(inReduce);
				};
			});//应收优惠

			$realCount.find('div').each(function(){
				var index = $(this).attr('index');
				if(index == divIndex){
					outCount = $(this).find('input[name=realCount]').val();
				};
			});//应付数量

			$realReduceMoney.find('div').each(function(){
				var index = $(this).attr('index');
				if(index == divIndex){
					outReduce = $(this).find('input[name=realReduceMoney]').val();
				};
			});//应付优惠

			$realNeedPayMoney.find('div').each(function(){
				var index = $(this).attr('index');
				if(index == divIndex){
					outMoney =Count.changeTwoDecimal(((outCount*price)-outReduce));
					$(this).find('input[name=realNeedPayMoney]').val(outMoney);
					$(this).find('.realNeedPayMoney').text(outMoney);
				};
			});//应付
		}
	};
	//新增自费安排
	Count.addSelf = function($obj,$parentObj){
		var divHtml = Count.returnDivHtml($parentObj);
		var td = '<td name="selfGuideName" >'+
				'<div class="div-h-30">'+
					'<button class="btn btn-success  btn-sm btn-white T-addSelfGuide pull-right">'+
	                    '<i class="ace-icon fa fa-plus  bigger-110 icon-only"></i>'+
	                '</button>'+
				'</div>'+
				'<div class="div-h-30 mar-t-5 min-w-100" index="1">'+
					'<input type="text" name="guideName" class="w-70"/>'+
					'<input type="hidden" name="guideArrangeId"/>'+
					'<button class="btn btn-danger btn-sm btn-white T-delSelfGuide pull-right">'+
	                    '<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>'+
	                '</button>'+
				'</div>'+
			'</td>';
		var	guideHtml = Count.addArrangeGuideHtml(td,"selfGuideName",$parentObj);
		var html = '<tr arrangeType="selfArrange" class="oldData">'+
			'<td class="countWhichDaysContainer" rowspan="1">'+divHtml+'</td>'+
			'<td>'+divHtml+'<input type="text" name="selfPayName" class="w-70"><input type="hidden" name="selfPayId"></td>'+
			'<td>'+divHtml+'<input name="selfPayItem" class="w-70" type="text"><input type="hidden" name="selfPayItemId"></td>'+
			'<td>'+divHtml+'<input name="marketPrice" class="w-50" type="text"></td>'+
			guideHtml+
			'<td name="incomeCount">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="incomeCount" class="w-50" type="text">'+
				'</div>'+
			'</td>'+
			'<td name="needInReduceMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<span class="needInReduceMoney">0</span>'+
					'<input name="needInReduceMoney" type="hidden"/>'+
				'</div>'+
			'</td>'+
			'<td name="needIncome">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<span class="needIncome">0</span>'+
					'<input name="needIncome" type="hidden"/>'+
				'</div>'+
			'</td>'+
			'<td name="cashMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="cashMoney" class="w-70 F-float F-money" type="text">'+
				'</div>'+
			'</td>'+
			'<td>'+
				divHtml+
				'<input name="price" class="w-50" type="text">'+
			'</td>'+
			'<td name="realCount">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="realCount" class="w-50" type="text">'+
				'</div>'+
			'</td>'+
			'<td name="realReduceMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="realReduceMoney" class="w-70 F-float F-money" type="text">'+
				'</div>'+
			'</td>'+
			'<td name="realNeedPayMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<span class="realNeedPayMoney">0</span>'+
					'<input name="realNeedPayMoney" type="hidden">'+
				'</div>'+
			'</td>'+
			'<td name="payedMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<span class="payedMoney">0</span>'+
				'</div>'+
			'</td>'+
			'<td name="guidePayedMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<p class="inline-flex">'+
						'<select name="payType">'+
							'<option value="0">现金</option>'+
							'<option value="1">刷卡</option>'+
							'<option value="2">签单</option>'+
						'</select>'+
						'<input name="guidePayedMoney" class="w-70 F-float F-money" type="text">'+
					'</p>'+
				'</div>'+
			'</td>'+
			
			'<td name="billImage">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<span style="color:#bbb;">查看</span>'+
				'</div>'+
			'</td>'+
			'<td name="travelAgencyRate">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="travelAgencyRate" class="w-50" type="text">'+
				'</div>'+
			'</td>'+
			'<td name="travelAgencyRebateMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="travelAgencyRebateMoney" class="w-70 F-float F-money" type="text">'+
				'</div>'+
			'</td>'+
			'<td name="guideRate">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="guideRate" class="w-50" type="text">'+
				'</div>'+
			'</td>'+
			'<td name="guideRebateMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="guideRebateMoney" class="w-70 F-float F-money" type="text">'+
				'</div>'+
			'</td>'+
			'<td name="quanpeiRebate">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="quanpeiRebate" class="w-50" type="text">'+
				'</div>'+
			'</td>'+
			'<td name="quanpeiRebateMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="quanpeiRebateMoney" class="w-70 F-float F-money" type="text">'+
				'</div>'+
			'</td>'+
			'<td name="billRemark">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="billRemark" class="w-70" type="text">'+
				'</div>'+
			'</td>'+
			'<td>'+divHtml+'未对账&nbsp;&nbsp;<a class="T-selfArrDel" href="javascript:void(0)">删除</a></td>'+
			
			'</tr>';
		$obj.append(html);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//获取新增自费的数据
		Count.getSelfData($obj,$parentObj);
		//获取导游
		var $selfObj = $parentObj.find('.T-count-selfPay');
		$selfObj.find('td[name="selfGuideName"]').find('[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
	};
	//新增自费导游
	Count.addSelfGuide = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),thisTd = $obj.closest('td'),
			$thisDiv = $obj.closest('div'),
			incomeCount = $tr.find('td[name=incomeCount]'),
			needInReduceMoney = $tr.find('td[name=needInReduceMoney]'),
			needIncome = $tr.find('td[name=needIncome]'),
			cashMoney = $tr.find('td[name=cashMoney]'),
			realCount = $tr.find('td[name=realCount]'),
			realReduceMoney = $tr.find('td[name=realReduceMoney]'),
			realNeedPayMoney = $tr.find('td[name=realNeedPayMoney]'),
			guidePayedMoney = $tr.find('td[name=guidePayedMoney]'),
			billImage = $tr.find('td[name=billImage]'),
			travelAgencyRate = $tr.find('td[name=travelAgencyRate]'),
			travelAgencyRebateMoney = $tr.find('td[name=travelAgencyRebateMoney]'),
			guideRate = $tr.find('td[name=guideRate]'),
			guideRebateMoney = $tr.find('td[name=guideRebateMoney]'),
			quanpeiRebate = $tr.find('td[name=quanpeiRebate]'),
			quanpeiRebateMoney = $tr.find('td[name=quanpeiRebateMoney]'),
			twoRebate = $tr.find('td[name=twoRebate]'),
			twoRebateMoney = $tr.find('td[name=twoRebateMoney]'),
			billRemark = $tr.find('td[name=billRemark]'),
			index = thisTd.find('div').length,
			selfPayId = $tr.attr('selfPayId'),
			gRate = 0,tRate = 0,CRmoney = 0;
		if(!!selfPayId){
			var id = $tr.find('input[name=selfPayItemId]').val(),whichDay = $tr.attr('whichDay'),
				startTime = $parentObj.find('.tripPlanStartTime').val();
			Count.getRateAfAddGuide($obj,id,whichDay,startTime);
		}else{
			if(!!$tr.attr('guideRate')){
				gRate = $tr.attr('guideRate');
			};
			if(!!$tr.attr('travelAgencyRate')){
				tRate = $tr.attr('travelAgencyRate');
			};
			if(!!$tr.attr('customerRebateMoney')){
				CRmoney = $tr.attr('customerRebateMoney');
			};
		}
		var guideHtml ='<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<input type="text" name="guideName" class="w-70"/>'+
			'<input type="hidden" name="guideArrangeId"/>'+
			'<button class="btn btn-danger btn-sm btn-white T-delSelfGuide pull-right">'+
                '<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>'+
            '</button>'+
			'</div>';
		var inCountHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<input type="text" name="incomeCount" class="w-50">'+
			'</div>';
		var inReduceHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<span class="needInReduceMoney">0</span>'+
			'<input name="needInReduceMoney" type="hidden"/>'+
			'</div>';
		var needIncomeHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<span class="needIncome">0</span>'+
			'<input name="needIncome" type="hidden" />'+
			'</div>';
		var cashMoneyHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<input type="text" name="cashMoney" class="w-70 F-float F-money">'+
			'</div>';
		var realCountHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<input type="text" name="realCount" class="w-50">'+
			'</div>';
		var realReduceHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<input type="text" name="realReduceMoney" class="w-70 F-float F-money">'+
			'</div>';
		var realNeedPayHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<span class="realNeedPayMoney">0</span>'+
			'<input type="hidden" name="realNeedPayMoney">'+
			'</div>';
		var guidePayedHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<p class="inline-flex" style="margin:0px;">'+
			'<select name="payType">'+
				'<option value="0">现金</option>'+
				'<option value="1">刷卡</option>'+
				'<option value="2">签单</option>'+
			'</select>'+
			'<input type="text" name="guidePayedMoney" class="w-70 F-float F-money">'+
			'</p>'+
			'</div>';
		
		var imgHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<span style="color:#bbb;">查看</span>'+
			'</div>';
		var travelAgencyRateHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<input type="text" name="travelAgencyRate" class="w-50" value="'+tRate+'">'+
			'</div>';
		var travelAgencyRebateMoneyHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<input type="text" name="travelAgencyRebateMoney" class="w-70 F-float F-money">'+
			'</div>';
		var guideRateHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<input type="text" name="guideRate" class="w-50" value="'+gRate+'">'+
			'</div>';
		var guideRebateMoneyHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<input type="text" name="guideRebateMoney" class="w-70 F-float F-money">'+
			'</div>';
		var quanpeiRebateHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
		'<input type="text" name="quanpeiRebate" class="w-50">'+
		'</div>';
		var quanpeiRebateMoneyHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<input type="text" name="quanpeiRebateMoney" class="w-70 F-float F-money">'+
			'</div>';
		var billRemarkHtml = '<div class="div-h-30 mar-t-5" index="'+(index+1)+'">'+
			'<input type="text" name="billRemark" class="w-70">'+
			'</div>';

		thisTd.append(guideHtml);
		needInReduceMoney.append(inReduceHtml);
		needIncome.append(needIncomeHtml);
		incomeCount.append(inCountHtml);
		cashMoney.append(cashMoneyHtml);
		realCount.append(realCountHtml);
		realReduceMoney.append(realReduceHtml);
		realNeedPayMoney.append(realNeedPayHtml);
		guidePayedMoney.append(guidePayedHtml);
		billImage.append(imgHtml);
		travelAgencyRate.append(travelAgencyRateHtml);
		travelAgencyRebateMoney.append(travelAgencyRebateMoneyHtml);
		guideRate.append(guideRateHtml);
		guideRebateMoney.append(guideRebateMoneyHtml);
		quanpeiRebate.append(quanpeiRebateHtml);
		quanpeiRebateMoney.append(quanpeiRebateMoneyHtml);
		billRemark.append(billRemarkHtml);
		//获取导游
		var $selfObj = $parentObj.find('.T-count-selfPay');
		$selfObj.find('td[name="selfGuideName"]').find('[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
	};
	//删除导游
	Count.delSelfGuide = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),thisTd = $obj.closest('td'),
			$thisDiv = $obj.closest('div'),
			incomeCount = $tr.find('td[name=incomeCount]'),
			needInReduceMoney = $tr.find('td[name=needInReduceMoney]'),
			needIncome = $tr.find('td[name=needIncome]'),
			cashMoney = $tr.find('td[name=cashMoney]'),
			realCount = $tr.find('td[name=realCount]'),
			realReduceMoney = $tr.find('td[name=realReduceMoney]'),
			realNeedPayMoney = $tr.find('td[name=realNeedPayMoney]'),
			guidePayedMoney = $tr.find('td[name=guidePayedMoney]'),
			billImage = $tr.find('td[name=billImage]'),
			travelAgencyRate = $tr.find('td[name=travelAgencyRate]'),
			travelAgencyRebateMoney = $tr.find('td[name=travelAgencyRebateMoney]'),
			// twoRebate = $tr.find('td[name=twoRebate]'),
			// twoRebateMoney = $tr.find('td[name=twoRebateMoney]'),
			guideRate = $tr.find('td[name=guideRate]'),
			guideRebateMoney = $tr.find('td[name=guideRebateMoney]'),
			quanpeiRebate = $tr.find('td[name=quanpeiRebate]'),
			quanpeiRebateMoney = $tr.find('td[name=quanpeiRebateMoney]'),
			billRemark = $tr.find('td[name=billRemark]'),
			index = $thisDiv.attr('index'),
			guideId = $thisDiv.attr('guideId');
			if(!!guideId){
				showConfirmDialog('你确定要删除该条记录？', function() {
					Count.delArrangeData(guideId,'selfpayGuideDetail',removeGuide);
				});
			}else{
				removeGuide();
			}

		function removeGuide (){
			Count.delDiv(thisTd,index,$parentObj);
			Count.delDiv(incomeCount,index,$parentObj);
			Count.delDiv(needInReduceMoney,index,$parentObj);
			Count.delDiv(needIncome,index,$parentObj);
			Count.delDiv(cashMoney,index,$parentObj);
			Count.delDiv(realCount,index,$parentObj);
			Count.delDiv(realReduceMoney,index,$parentObj);
			Count.delDiv(realNeedPayMoney,index,$parentObj);
			Count.delDiv(guidePayedMoney,index,$parentObj);
			Count.delDiv(billImage,index,$parentObj);
			Count.delDiv(travelAgencyRate,index,$parentObj);
			Count.delDiv(travelAgencyRebateMoney,index,$parentObj);
			Count.delDiv(guideRate,index,$parentObj);
			Count.delDiv(guideRebateMoney,index,$parentObj);
			Count.delDiv(quanpeiRebate,index,$parentObj);
			Count.delDiv(quanpeiRebateMoney,index,$parentObj);
			Count.delDiv(billRemark,index,$parentObj);
		};
	};
	//删除自费安排
	Count.delSelfArrange = function($obj,$parentObj){
		var selfPayArrangeId = $obj.closest('tr').find('input[name=selfPayArrangeId]').val();
		if(!!selfPayArrangeId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(selfPayArrangeId,'selfpay',removeItem);
			});
		}else{
			var $tr = $obj.closest('tr');
			$tr.remove();
		}
		function removeItem() {
			Count.delRowspan($obj);
		};
		Count.autoSumAfterDel($obj,$parentObj);
	};
	//删除自费安排重新计算金额
	Count.autoSumAfterDel = function($obj,$parentObj){

		var $tr = $obj.closest('tr');
		var $inCome = $tr.find('input[name=needIncome]'),
			$needPay = $tr.find('input[name=realNeedPayMoney]'),
			$guideMoney = $tr.find('input[name=guideRebateMoney]'),
			$quanpeiRebateMoney = $tr.find('td[name=quanpeiRebateMoney]');

		var $selfCost = $parentObj.find('.tripCost-selfArrangeNeedPayMoney'),
			$selfIncome = $parentObj.find('.tripIncome-selfIcomeMoney'),
			$selfGuide = $parentObj.find('.tripCost-guideSelfMoney');

		var sumIn = 0,sumOut = 0,sumGmoney = 0,newIn = 0,newOut = 0,newGmoney = 0,
			sumCost = $selfCost.text(),
			sumIncome = $selfIncome.text(),
			sumGuide = $selfGuide.text();
		
		$inCome.each(function(){
			var sum = Count.changeTwoDecimal($(this).val());
			sumIn += sum;
		});

		$needPay.each(function(){
			var sum = Count.changeTwoDecimal($(this).val());
			sumOut += sum;
		});

		$guideMoney.each(function(){
			var sum = Count.changeTwoDecimal($(this).val());
			sumGmoney += sum;
		});

		newIn = Count.changeTwoDecimal(sumIncome - sumIn);
		newOut = Count.changeTwoDecimal(sumCost - sumOut);
		newGmoney = Count.changeTwoDecimal(sumGuide - sumGmoney);

		$selfIncome.text(newIn);//自费收入
		$selfCost.text(newOut);//自费费用
		$selfGuide.text(newGmoney);//自费导佣
		//计算团收入
		Count.tripIncome($parentObj);
		//计算团成本
		Count.tripCost($parentObj);
	};
	//其他收入金额计算
	Count.autoOtherInSum = function($obj,$parentObj){
		var $parent = $obj.closest('tr');
			var price = $parent.find('input[name=price]').val();
			var realCount = $parent.find('input[name=count]').val();
			//规范数据
			price = Count.changeTwoDecimal(price);
			realCount = Count.changeTwoDecimal(realCount);
			var needPayMoney = parseFloat(price)*parseFloat(realCount);
			needPayMoney = Count.changeTwoDecimal(needPayMoney);
			$parent.find('.needPayMoney').text(needPayMoney);
            $parent.find('input[name="realneedPayMoney"]').val(needPayMoney);
            $parent.find('.realneedPayMoney').text(needPayMoney);
            //计算团收入--其他收入
			var $bodyObj = $parentObj.find('.T-main-table');
			var shopRebateMoney = 0;
			var $mainTr = $parentObj.find('.T-count-otherIn');
			$mainTr.find('input[name=realneedPayMoney]').each(function() {
				var totalSum = Count.changeTwoDecimal(parseFloat($(this).val()));
				shopRebateMoney += totalSum;
			});
			shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
			$bodyObj.find('.tripIncome-otherInCome').text(shopRebateMoney);
			//计算团收入
			Count.tripIncome($parentObj);
	};
	//新增其他收入
	Count.addOtherIn = function($obj,$parentObj){
		var divHtml = Count.returnDivHtml($parentObj);
		var td = '<td>'+
				'<div  class="div-h-30 mar-t-5">'+
					'<input name="guideArrangeId" type="hidden" />'+
	            	'<input name="guideName"  type="text" class="w-70"/>'+
	            '</div>'+
			'</td>';
		var	guideHtml = Count.addArrangeGuideHtml(td,'otherIn',$parentObj);
		var html = '<tr class="oldData">'+
			'<td><input checked type="checkbox" name="isGuide" value="1"></td>'+
			'<td class="countWhichDaysContainer"></td>'+
			'<td><input type="text" name="title" class="w-70"/></td>'+
			'<td><input type="text" name="price" class="w-70 F-float F-money"/></td>'+
			'<td><input type="text" name="count" class="w-50 F-float F-count"/></td>'+
			'<td><span class="F-float F-money realneedPayMoney">0</span>'+
			'<input name="realneedPayMoney" type="hidden" /></td>'+
			guideHtml+
			'<td><span style="color:#bbb;">查看</span></td>'+
			'<td><input type="text" name="billRemark"/><a href="javascript:void(0)" class="T-otherInArrDel" style="margin-left:12px;">删除</a></td>'+
			'</tr>';
		$obj.append(html);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj,'otherIn');
		//获取导游
		//获取导游
		$obj.find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
	};
	//删除其他收入安排
	Count.delOtherInArrange = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
			otherInId = $tr.attr('otherInId');
		if(!!otherInId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(otherInId,'otherIncome',removeItem);
			});
		}else{
			removeItem();
		}
		function removeItem () {

			var $sumIncome = $tr.find('.needPayMoney').text();
			var $tripIncome = $parentObj.find('.tripIncome-otherInCome');
			var $newTripIncome = parseFloat(parseFloat($tripIncome.text()-$sumIncome));
		 	$newTripIncome = Count.changeTwoDecimal($newTripIncome);
			$tripIncome.text($newTripIncome);
			//计算团收入
			Count.tripIncome($parentObj);
			$tr.remove();
		}
	}
	//车费金额计算
	Count.autoBusSum = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var $busFee = parseFloat($tr.find('input[name=price]').val());
		var $realReduceMoney = parseFloat($tr.find('input[name=realReduceMoney]').val());
		var $planNeedpay = $tr.find('input[name=needPayMoney]').val();
		var badStatus = $tr.attr('badStatus'),isConfirmAccount = $tr.attr('isConfirmAccount');
		//规范数据
		$busFee = Count.changeTwoDecimal($busFee);
		$realReduceMoney = Count.changeTwoDecimal($realReduceMoney);
		$planNeedpay = Count.changeTwoDecimal($planNeedpay);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($busFee-$realReduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		if((badStatus == 0  || badStatus == undefined) && (isConfirmAccount == 0  || isConfirmAccount == undefined)){
			$tr.find('.BusneedPayMoney').text(needPay);
		}
		//计算团成本--车费
		var $bodyObj = $parentObj.find('.T-main-table');
		var shopRebateMoney = 0;
		var $mainTr = $parentObj.find('.T-count-bus');
		$mainTr.find('.BusneedPayMoney').each(function() {
			var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
			shopRebateMoney += totalSum;
		});
		shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
		$bodyObj.find('.tripCost-busCompanyNeedPayMoney').text(shopRebateMoney);
		//计算整个团成本
		Count.tripCost($parentObj);
	};
	//新增车费--这个版本对于车队没有新增
	Count.addBus = function($obj,$parentObj){
		var divHtml = Count.returnDivHtml($parentObj);
		var td = '<td name="guideName">'+
						'<div class="div-h-30 mar-t-5">'+
						'<button class="btn btn-success btn-sm btn-white T-addGuide pull-right">'+
		                    '<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>'+
		                '</button>'+
			            /*'<a href="#" class="T-addGuide pull-right">增加</a><!-- 增加导游 -->'+*/
			        '</div>'+
			        '<div class="div-h-30 mar-t-5" index="1">'+
			        	'<input type="text" class="w-70" name="guideName"/>'+
						'<input type="hidden" name="guideArrangeId">'+
						'<button class="btn btn-danger btn-sm btn-white T-delGuide pull-right">'+
		                    '<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>'+
		                '</button>'+/*删除导游*/
			        '</div>'+
				'</td>';
		var	guideHtml = Count.addArrangeGuideHtml(td,"guideName",$parentObj);
		
		var html = '<tr arrangeType="busArrange" class="oldData">'+
			'<td>'+divHtml+'<input name="startTime" type="text" class="datepicker"></td>'+
			'<td>'+divHtml+'<input name="endTime" type="text" class="datepicker"></td>'+
			'<td>'+divHtml+
			'<select name="taskType">'+
			'<option value="0">全程</option>'+
			'<option value="1">接机</option>'+
			'<option value="2">送机</option>'+
			'<option value="3">前段</option>'+
			'<option value="4">中段</option>'+
			'<option value="5">后段</option>'+
			'</select>'+
			'</td>'+
			'<td>'+divHtml+'<input type="text" name="companyName" style="width:150px;"/><input type="hidden" name="companyId"></td>'+
			'<td>'+divHtml+'<input type="text" name="licenseNumber" style="width:90px;"/><input type="hidden" name="busId"></td>'+
			'<td>'+divHtml+'<input type="text" name="seatCount" style="width:90px;"/></td>'+
			'<td>'+divHtml+'<input type="text" name="price" class="w-70 F-float F-money"/></td>'+
			'<td>'+divHtml+'<input type="text" name="realReduceMoney" class="w-70 F-float F-money"/></td>'+
			'<td>'+divHtml+'<span class="BusneedPayMoney">0</span></td>'+
			'<td>'+divHtml+'0</td>'+
			guideHtml+
			'<td name="guidePayedMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<p class="inline-flex" style="margin:0px;">' +
					'<select name="payType">'+
						'<option value="0">现金</option>'+
						'<option value="1">刷卡</option>'+
						'<option value="2">签单</option>'+
					'</select>'+
					'<input name="guidePayedMoney" type="text" class="w-50 F-float F-money"/>'+
					'</p>'+
				'</div>'+
			'</td>'+
			'<td name="billImage">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<span style="color:#bbb;">查看</span>'+
				'</div>'+
			'</td>'+
			'<td name="billRemark">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="billRemark" type="text"/>'+
				'</div>'+
			'</td>'+
			'<td>未对账<a href="javascript:void(0)" class="T-busArrDel" style="margin-left:13px;">删除</a></td>'+
			'</tr>';
		$obj.append(html);
		//格式化时间
		Count.formatDate($obj);
		//获取车队数据
		Count.getBusData($obj,$parentObj);
		//获取车牌
		Count.getLicenseNumber($obj,$parentObj);
		//获取座位
		Count.getSeatCount($obj,$parentObj);
		//获取导游
		$obj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
	};
	//删除车费重新计算
	Count.sumBusFeeAfDel = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),
			busArrangeId = $tr.attr('busArrangeId');
		if(!!busArrangeId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(busArrangeId,'busCompany',removeItems);
			});
		}else{
			removeItems();
		}

		function removeItems (){
			var $tripCost = $parentObj.find('.tripCost-busCompanyNeedPayMoney');
			var sumCost = $tr.find('.BusneedPayMoney').text();
			var newTripCost = parseFloat(parseFloat($tripCost.text()-sumCost));
		 	newTripCost = Count.changeTwoDecimal(newTripCost);
			$tripCost.text(newTripCost);
			$tr.remove();
			//计算整个团成本
			Count.tripCost($parentObj);
		};
		
	};
	//餐费金额计算
	Count.autoRestaurantSum = function($obj,$parentObj){
		Count.changeCountAndMoney($obj,$parentObj);
	};
	//新增餐费
	Count.addRest = function($obj,$parentObj){
		var guideTdHtml = Count.addGuideHtml($parentObj);
		var divHtml = Count.returnDivHtml($parentObj);
		var html = '<tr arrangeType="restArrange" class="oldData">'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td>'+divHtml+'</div><input type="text" name="restaurantName" style="width:90px;"/><input type="hidden" name="restaurantId"></td>'+
		'<td>'+divHtml+
		'<select name="type">'+
		'<option value="早餐">早餐</option>'+
		'<option value="午餐">午餐</option>'+
		'<option value="晚餐">晚餐</option>'+
		'</select>'+
		'</td>'+
		'<td>'+divHtml+'<input type="text" name="price" class="w-70 F-float F-money"/><input type="hidden" name="standardId"></td>'+
		'<td>'+divHtml+
		'<span class="F-float F-money realCount">0</span>'+
		'<input type="hidden" name="realCount" /></td>'+
		'<td>'+divHtml+'<input type="text" name="realReduceMoney" class="w-70 F-float F-money"/></td>'+
		'<td>'+divHtml+'<span class="realNeedPayMoney">0</span><input type="hidden" value="0" name="realNeedPayMoney"></td>'+
		'<td>'+divHtml+'0</td>'+
		guideTdHtml+
		'<td>'+divHtml+'未对账<a href="javascript:void(0)" class="T-restArrDel" style="margin-left:12px;">删除</a></td>'+
		'</tr>';
		$obj.append(html);
		//获取餐厅数据
		Count.getRestData($obj,$parentObj);
		//下拉框事件
		$obj.find('select[name=type]').off('change').on('change',function(){
			var $tr = $(this).closest('tr');
			var restaurantId = $tr.find('input[name=restaurantId]').val();
			if(restaurantId != null && restaurantId != ""){
				$tr.find('input[name=price]').val(0);
				Count.autoRestaurantSum($(this),$parentObj);
				Count.getRestPrice($tr,$parentObj);
			};
		});
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//获取导游
		$obj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
	};
	//删除餐厅安排
	Count.delRestArrange = function($obj,$parentObj){

		var $tr = $obj.closest('tr');
		var restArrId = $tr.find('input[name=restaurantArrangeId]').val();
		if(!!restArrId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(restArrId,'restaurant',removeItem);
			});
		}else{
			removeItem();
		};
			
		function removeItem (){

			var $tripCost = $parentObj.find('.tripCost-restaurantArrangeNeedPayMoney');
			var sumIncome = $tr.find('.restneedPayMoney').text();
			var newTripCost = parseFloat(parseFloat($tripCost.text()-sumIncome));
		 	newTripCost = Count.changeTwoDecimal(newTripCost);
			$tripCost.text(newTripCost);
			//计算整个团成本
			Count.tripCost($parentObj);
			if(!!restArrId){
				Count.delRowspan($obj);
			}else{
				$tr.remove();
			};
			
		};
	};
	//房费金额计算
	Count.autoHotelSum = function($obj,$parentObj){
		Count.changeCountAndMoney($obj,$parentObj);
	};
	//新增房费
	Count.addHotel = function($obj,$parentObj){
		var guideTdHtml = Count.addGuideHtml($parentObj);
		var divHtml = Count.returnDivHtml($parentObj);
		var html = '<tr arrangeType="hotelArrange" class="oldData">'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td>'+divHtml+'<input type="text" name="hotelName" style="width:90px;"/><input name="hotelId" type="hidden"></td>'+
		'<td>'+divHtml+'<input type="text" name="hotelRoom" style="width:90px;"/><input name="hotelRoomId" type="hidden"></td>'+
		'<td>'+divHtml+'<input type="text" name="price" class="w-70 F-float F-money"/></td>'+
		'<td>'+divHtml+
		'<span class="F-float F-money realCount">0</span>'+
		'<input type="hidden" name="realCount" /></td>'+
		'<td>'+divHtml+'<input type="text" name="realReduceMoney" class="w-70 F-float F-money"/></td>'+
		'<td>'+divHtml+'<span class="realNeedPayMoney">0</span><input type="hidden" value="0" name="realNeedPayMoney"></td>'+
		'<td>'+divHtml+'0</td>'+
		guideTdHtml+
		'<td>'+divHtml+'未对账<a href="javascript:void(0)" class="T-hotelArrDel" style="margin-left:12px;">删除</a></td>'+
		'</tr>';
		$obj.append(html);
		//获取酒店数据
		Count.getHotelData($obj,$parentObj);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//获取导游
		$obj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
	};
	//删除酒店安排
	Count.delHotelArrange = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var hotelArrangeId = $tr.find('input[name=hotelArrangeId]').val();
		if(!!hotelArrangeId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(hotelArrangeId,'hotel',removeItem);
			});
		}else{
			removeItem();
		};
			
		function removeItem (){
			
			var $tripCost = $parentObj.find('.tripCost-hotelArrangeNeedPayMoney');
			var sumIncome = $tr.find('.hotelneedPayMoney').text();
			var newTripCost = parseFloat(parseFloat($tripCost.text()-sumIncome));
		 	newTripCost = Count.changeTwoDecimal(newTripCost);
			$tripCost.text(newTripCost);
			//计算整个团成本
			Count.tripCost($parentObj);
			if(!!hotelArrangeId){
				Count.delRowspan($obj);
			}else{
				$tr.remove();
			};
			
		};
	};
	//景区金额计算
	Count.autoScenicSum = function($obj,$parentObj){
		Count.changeCountAndMoney($obj,$parentObj);
	};
	//新增景区安排
	Count.addScenic = function($obj,$parentObj){
		var guideTdHtml = Count.addGuideHtml($parentObj);
		var divHtml = Count.returnDivHtml($parentObj);
		var html = '<tr arrangeType="scenicArrange" class="oldData">'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td>'+divHtml+'<input type="text" name="scenicName" style="width:90px;"/><input type="hidden" name="scenicId"></td>'+
		'<td>'+divHtml+'<input type="text" name="scenicItem" style="width:90px;"/><input type="hidden" name="scenicItemId"></td>'+
		'<td>'+divHtml+'<input type="text" name="price" class="w-70 F-float F-money"/></td>'+
		'<td>'+divHtml+
		'<span class="F-float F-count realCount">0</span>'+
		'<input type="hidden" name="realCount" /></td>'+
		'<td>'+divHtml+'<input type="text" name="realReduceMoney" class="w-70 F-float F-money"/></td>'+
		'<td>'+divHtml+'<span class="realNeedPayMoney">0</span><input type="hidden" value="0" name="realNeedPayMoney"></td>'+
		'<td>'+divHtml+'0</td>'+
		guideTdHtml+
		'<td>'+divHtml+'未对账<a href="javascript:void(0)" class="T-secnicArrDel" style="margin-left:12px;">删除</a></td>'+
		'</tr>';
		$obj.append(html);
		//获取景区数据
		Count.getScenicData($obj,$parentObj);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//获取导游
		$obj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
		
	};
	//删除景区安排
	Count.delSecnicArrange = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var scenicArrangeId = $tr.find('input[name=scenicArrangeId]').val();
		if(!!scenicArrangeId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(scenicArrangeId,'scenic',removeItem);
			});
		}else{
			removeItem();
		};
			
		function removeItem (){
			
			var $tripCost = $parentObj.find('.tripCost-scenicArrangeNeedPayMoney');
			var sumIncome = $tr.find('.scenicneedPayMoney').text();
			var newTripCost = parseFloat(parseFloat($tripCost.text()-sumIncome));
		 	newTripCost = Count.changeTwoDecimal(newTripCost);
			$tripCost.text(newTripCost);
			//计算整个团成本
			Count.tripCost($parentObj);
			if(!!scenicArrangeId){
				Count.delRowspan($obj);
			}else{
				$tr.remove();
			};
			
		};
	};
	//票务金额计算
	Count.autoTicketSum = function($obj,$parentObj){
		Count.changeCountAndMoney($obj,$parentObj);
	};
	//新增票务
	Count.addTicket = function($obj,$parentObj){
		var guideTdHtml = Count.addGuideHtml($parentObj);
		var divHtml = Count.returnDivHtml($parentObj);
		var html = '<tr arrangeType="ticketArrange" class="oldData">'+
		'<td>'+divHtml+'<input type="text" name="ticketName"><input type="hidden" name="ticketId"></td>'+
		'<td>'+divHtml+
		'<select name="ticketType">'+
		'<option value="1">机票</option>'+
		'<option value="2">汽车票</option>'+
		'<option value="3">火车票</option>'+
		'<option value="4">轮船票</option>'+
		'</select>'+
		'</td>'+
		'<td>'+divHtml+'<input type="text" name="startTime" class="date-Picker col-xs-12"/></td>'+
		'<td>'+divHtml+'<input type="text" name="startArea" style="width:60px;"/></td>'+
		'<td>'+divHtml+'<input type="text" name="endArea" style="width:60px;"/></td>'+
		'<td>'+divHtml+'<input type="text" name="shift" style="width:60px;"/></td>'+
		'<td>'+divHtml+'<input type="text" name="seatLevel" class="w-70"/></td>'+
		'<td>'+divHtml+'<input type="text" name="price" class="w-70 F-float F-money"/></td>'+
		'<td>'+divHtml+
		'<span class="F-float F-count realCount">0</span>'+
		'<input type="hidden" name="realCount" /></td>'+
		'<td>'+divHtml+'<input type="text" name="realReduceMoney" class="w-70 F-float F-money"/></td>'+
		'<td>'+divHtml+'<span class="realNeedPayMoney">0</span><input type="hidden" value="0" name="realNeedPayMoney"></td>'+
		'<td>'+divHtml+'0</td>'+
		guideTdHtml+
		'<td>'+divHtml+'未对账<a href="javascript:void(0)" class="T-ticketArrDel" style="margin-left:12px;">删除</a></td>'+
		'</tr>';
		$obj.append(html);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//获取票务公司数据
		Count.getTicketData($obj,$parentObj);
		//绑定事件
		//给日期格式化
		$('.date-Picker').datetimepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'L',
			language: 'zh-CN'
		});
		// Tools.setDateHSPicker($('.date-Picker'));
		//获取导游
		$obj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
	};
	//删除票务安排
	Count.delTicketArrange = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var ticketArrangeId = $tr.attr('ticketArrangeId');
		if(!!ticketArrangeId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(ticketArrangeId,'ticket',removeItem);
			});
		}else{
			removeItem();
		};
			
		function removeItem (){
			
			var $tripCost = $parentObj.find('.tripCost-ticketArrangeNeedPayMoney');
			var sumIncome = $tr.find('.ticketneedPayMoney').text();
			var newTripCost = parseFloat(parseFloat($tripCost.text()-sumIncome));
		 	newTripCost = Count.changeTwoDecimal(newTripCost);
			$tripCost.text(newTripCost);
			//计算整个团成本
			Count.tripCost($parentObj);
			if(!!ticketArrangeId){
				Count.delRowspan($obj);
			}else{
				$tr.remove();
			};
			
		};
	};
	//其他支出金额计算
	Count.autoOtherOutSum = function($obj,$parentObj){
		Count.changeCountAndMoney($obj,$parentObj);
	};
	//新增其他支出
	Count.addOtherOut = function($obj,$parentObj){
		var guideTdHtml = Count.addGuideHtml($parentObj);
		var divHtml = Count.returnDivHtml($parentObj);
		var html = '<tr arrangeType="otherArrange" class="oldData">'+
		'<td><input checked type="checkbox" name="isGuide" value="1"></td>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td>'+divHtml+'<input type="text" name="addOtherOutName" class="w-80"/></td>'+
		'<td>'+divHtml+'<input type="text" name="price" class="w-70 F-float F-money"/></td>'+
		'<td>'+divHtml+
		'<span class="F-float F-count realCount">0</span>'+
		'<input type="hidden" name="realCount" /></td>'+
		'<td>'+divHtml+'<input type="text" name="realReduceMoney" class="w-70 F-float F-money"/></td>'+
		'<td>'+divHtml+'<span class="realNeedPayMoney">0</span><input type="hidden" value="0" name="realNeedPayMoney"></td>'+
		'<td>'+divHtml+'0</td>'+
		guideTdHtml+
		'<td>'+divHtml+'</div>未对账<a href="javascript:void(0)" class="T-otherOutArrDel" style="margin-left:12px;">删除</a></td>'+
		'</tr>';
		$obj.append(html);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//获取导游
		$obj.find('td[name=guideName]').find('input[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
	};
	//返回多导顶部的div
	Count.returnDivHtml = function($parentObj){
		if($parentObj.find('.countReimbursement').length){
			guideData = Count.reimbursementGuide.listMap;
		};//报账
		if($parentObj.find('.countUpdate').length){
			guideData = Count.updateGuide.listMap;
		};//审核
		var guideCount = guideData.length;
		var divHtml = '';
		if(guideCount>1){
			divHtml = '<div class="div-h-30"></div>';
		};
		return divHtml;
	};
	//删除其他支出安排
	Count.delOtherOutArrange = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var otherArrangeId = $tr.attr('otherArrangeId');
		if(!!otherArrangeId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(otherArrangeId,'other',removeItem);
			});
		}else{
			removeItem();
		};
			
		function removeItem (){
			
			var $tripCost = $parentObj.find('.tripCost-otherArrangeNeedPayMoney');
			var sumIncome = $tr.find('.realNeedPayMoney').text();
			var newTripCost = parseFloat(parseFloat($tripCost.text()-sumIncome));
		 	newTripCost = Count.changeTwoDecimal(newTripCost);
			$tripCost.text(newTripCost);
			//计算整个团成本
			Count.tripCost($parentObj);
			$tr.remove();
		};
	};
	//计算保险费用
	Count.autoInsureanceSum = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),
			$insureObj = $parentObj.find('.T-count-insurance'),
			$payObj = $insureObj.find('input[name=realNeedPayMoney]'),
			sumInsureCost = 0;
		$payObj.each(function(){
			var sum = Count.changeTwoDecimal($(this).val());
			sumInsureCost += sum;
		});
		
		$parentObj.find('.tripCost-insuranceArrangeNeedPayMoney').text(sumInsureCost);
		//计算整个团成本
		Count.tripCost($parentObj);
	};
	//修改金额数量响应事件
	Count.changeCountAndMoney = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),arrangeType = $tr.attr('arrangeType');
		if(arrangeType != 'selfArrange' && arrangeType != 'shopArrange'){
			var countTd = $tr.find('td[name=guideRealCount]'),
				badStatus = $tr.attr('badStatus'),
				isConfirmAccount = $tr.attr('isConfirmAccount'),
				guideRealCount = countTd.find('input[name=guideRealCount]'),
				price = Count.changeTwoDecimal($tr.find('[name=price]').val()),
				reduceMoney = Count.changeTwoDecimal($tr.find('[name=realReduceMoney]').val()),
				sumCount = 0,
				sumPay = 0,
				realCount = 0;
			if(!!$tr.find('input[name=badStatus]').val()){
					badStatus = $tr.find('input[name=badStatus]').val();
				};
			if(!!$tr.find('input[name=isConfirmAccount]').val()){
				isConfirmAccount = $tr.find('input[name=isConfirmAccount]').val();
			};
			guideRealCount.each(function(){
				var sum = Count.changeTwoDecimal($(this).val());
				sumCount += sum
			});

			// 为0是也记录
			$tr.find('input[name=realCount]').val(sumCount);
			$tr.find('.realCount').text(sumCount);

			realCount = $tr.find('input[name=realCount]').val(); 
			sumPay = parseFloat(realCount*price-reduceMoney);
			if((badStatus == 0  || badStatus == undefined) && (isConfirmAccount == 0 || isConfirmAccount == undefined)){
				$tr.find('.realNeedPayMoney').text(sumPay);
				$tr.find('[name=realNeedPayMoney]').val(sumPay);
			};																
		};
		
		switch(arrangeType){
			case 'otherArrange' :
					var $mainTr = $parentObj.find('.T-count-otherOut');
					var sum = 0;
					$mainTr.find('.realNeedPayMoney').each(function() {
						var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
						sum += totalSum;
					});
					sum = Count.changeTwoDecimal(sum);
					$parentObj.find('.tripCost-otherArrangeNeedPayMoney').text(sum);
					//计算整个团成本
					Count.tripCost($parentObj);
				break;
			case 'ticketArrange' :
					var $mainTr = $parentObj.find('.T-count-ticket');
					var sum = 0;
					$mainTr.find('.realNeedPayMoney').each(function() {
						var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
						sum += totalSum;
					});
					sum = Count.changeTwoDecimal(sum);
					$parentObj.find('.tripCost-ticketArrangeNeedPayMoney').text(sum);
					//计算整个团成本
					Count.tripCost($parentObj);
				break;
			case 'scenicArrange' :
					var $mainTr = $parentObj.find('.T-count-scenic');
					var sum = 0;
					$mainTr.find('.realNeedPayMoney').each(function() {
						var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
						sum += totalSum;
					});
					sum = Count.changeTwoDecimal(sum);
					$parentObj.find('.tripCost-scenicArrangeNeedPayMoney').text(sum);
					//计算整个团成本
					Count.tripCost($parentObj);
				break;
			case 'hotelArrange' :
					var $mainTr = $parentObj.find('.T-count-hotel');
					var sum = 0;
					$mainTr.find('.realNeedPayMoney').each(function() {
						var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
						sum += totalSum;
					});
					sum = Count.changeTwoDecimal(sum);
					$parentObj.find('.tripCost-hotelArrangeNeedPayMoney').text(sum);
					//计算整个团成本
					Count.tripCost($parentObj);
				break;
			case 'restArrange' :
					var $mainTr = $parentObj.find('.T-count-restaurant');
					var sum = 0;
					$mainTr.find('.realNeedPayMoney').each(function() {
						var $tr = $(this).closest('tr'),
							isChoose = $tr.attr('ischoose');
						if(isChoose == 1 && !!isChoose){
							var $guideMoney = $tr.find('input[name=guidePayedMoney]');
								$guideMoney.each(function(){
									var totalSum = Count.changeTwoDecimal(parseFloat($(this).val()));
									sum += totalSum;
								});
						}else{
							var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
							sum += totalSum;
						}
					});
					sum = Count.changeTwoDecimal(sum);
					$parentObj.find('.tripCost-restaurantArrangeNeedPayMoney').text(sum);
					//计算整个团成本
					Count.tripCost($parentObj);
			case 'selfArrange' :
					Count.autoSelfSum($obj,$parentObj);
				break;
			case 'shopArrange' :
					Count.sumShopTwoMoney($obj,$parentObj);
					var $tr = $obj.closest('tr'),$td = $obj.closest('td'),
						shopPolicyId = $tr.find('input[name=shopPolicyId]').val(),
						consumeMoney = $tr.find('input[name=sumConsumeMoney]').val(),
						date = $parentObj.find('.tripPlanStartTime').val();
					if($td.attr('name') == 'shopGuideMoney'){
						Count.getShopRate($obj,shopPolicyId,consumeMoney,date,$parentObj);
					};
				break;
		}
	};
	//获取购物店的数据
	Count.getShopData = function($obj,$parentObj){
		var $shopObj = $obj.find('input[name=shopName]');
		$.ajax({
			url:KingServices.build_url("shop","findAll"),
			type:'POST',
			data:{
				menuKey:menuKey
			},
			showLoading:false,
			success:function(data){
				var result = showDialog(data);

				if(result){
					var scenicList = JSON.parse(data.scenicList);
					$shopObj.autocomplete({
						minLength:0,
						change:function(event,ui){
							if(ui.item == null){
								var $tr = $(this).closest('tr');
								$(this).val('');
								$tr.find('input[name=shopId]').val('');
								$tr.find('input[name=shopPolicy]').val('');
								$tr.find('input[name=shopPolicyId]').val('');
							}
						},
						select:function(event,ui){
							if(ui.item != null){
								var $tr = $(this).closest('tr'),
									adultCount = 0,busNumber = 0,
									sumPerson = 0,sumBus = 0,tMoney = 0,tRate = 0,
									nextTd = $tr.next();
								adultCount = $parentObj.find('.tripPlanAdultCount').val();
								if($parentObj.find('.busNumber').val() != 0 ){
									busNumber = 1;
								};
								sumPerson = Count.changeTwoDecimal(adultCount)*Count.changeTwoDecimal(ui.item.customerRebateMoney);
								sumBus = Count.changeTwoDecimal(busNumber)*Count.changeTwoDecimal(ui.item.parkingRebateMoney);
								if(sumPerson == 0){
									$tr.find('td[name="shopGuideName"]').find('.T-delShopGuide').each(function(){
										$(this).trigger('click');
									});
								}else{
									var len = $tr.find('td[name="shopGuideName"]').find('.T-delShopGuide').length;
									if(!len){
										$tr.find('.T-shopGuide').trigger('click');
									}
									
								}

								if(sumBus == 0){
									$tr.next().find('td[name="shopGuideName"]').find('.T-delShopGuide').each(function(){
										$(this).trigger('click');
									});
								}else{
									var len = $tr.next().find('td[name="shopGuideName"]').find('.T-delShopGuide').length;
									if(!len){
										$tr.next().find('.T-shopGuide').trigger('click');
									}
									
								}
								$tr.find('input[name=shopId]').val(ui.item.id);
								$tr.find('input[name=shopPolicy]').val('');
								$tr.find('.sumConsumeMoney').text(sumPerson);
								$tr.next().find('.sumConsumeMoney').text(sumBus);
								$tr.find('input[name=sumConsumeMoney]').val(sumPerson);
								$tr.next().find('input[name=sumConsumeMoney]').val(sumBus);
								$tr.find('input[name="shopGuideMoney"]').val(sumPerson);
								$tr.next().find('input[name="shopGuideMoney"]').val(sumBus);
								tRate = $tr.next().find('input[name=travelAgencyRate]').val();
								tMoney = sumBus*(Math.round(tRate)/100);
								$tr.next().find('input[name=travelAgencyRateMoney]').val(tMoney);

								Count.getShopPolicy($tr,$parentObj);
								//计算金额
								Count.autoShopSum($(this),$parentObj);
								Count.totalRebeatMoney($(this));
							}
						}
					}).off('click').on('click',function(){
						var obj = this;
						if(scenicList && scenicList.length > 0){
							for(var i=0; i < scenicList.length; i++){
								scenicList[i].value = scenicList[i].name;
							};
							$(obj).autocomplete('option','source', scenicList);
							$(obj).autocomplete('search', '');
						}else{
							layer.tips('没有内容。', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					})
				}
			}
		});
	};
	//获取商品政策的数据
	Count.getShopPolicy = function($obj,$parentObj,$tr){
		
		if(!!$tr){
			var $shopPolicyObj = $obj;
			var shopId = $tr.find('input[name=shopId]').val();
			var trArr = $tr.nextAll();
			Count.getShopPolicyByTr($tr,trArr,shopId,$parentObj);
		}else{
			if($obj.attr('shopArrangeId')){
				var shopId = $obj.attr('shopArrid');
				var $shopPolicyObj = $parentObj.find('input[name=shopPolicyName]');
				
			}else{
				var trArr = $obj.nextAll();
				var shopId = $obj.find('input[name=shopId]').val();
				Count.getShopPolicyByTr($obj,trArr,shopId,$parentObj);
				
			};
		};
		
	};
	Count.getShopPolicyByTr = function(parentTr,trArr,shopId,$parentObj){
		
		for(var i = 0;i<trArr.length;i++){
			var $that = trArr.eq(i);
			var td_cnt = parentTr.children('td').length;
			var td_len = $that.children('td').length;
			if(td_cnt == td_len){
				break;
			}else{
				var $shopPolicyObj = $that.find('input[name=shopPolicy]');
				Count.getDataByAutocomplete($shopPolicyObj,shopId,$parentObj);
				
			}
		}
	};
	Count.getDataByAutocomplete = function($shopPolicyObj,shopId,$parentObj){
		if(!!shopId){
			$shopPolicyObj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).val('').nextAll('input[name=shopPolicyId]').val('');
				}
			},
			select:function(event,ui){
				if(ui.item != null){
					$(this).closest('tr').find('input[name=shopPolicyId]').val(ui.item.id);
					var shopPolicyId = ui.item.id;
					var consumeMoney = $(this).closest('tr').find('input[name=sumConsumeMoney]').val() || 0;
					var date =$parentObj.find('.tripPlanStartTime').val();
					Count.getShopRate($(this),shopPolicyId,consumeMoney,date,$parentObj);
				}
			}
			}).off('click').on('click',function(){
				var obj = $(this);
				var shopPolicyList;
				$.ajax({
					url:KingServices.build_url('shop','findPolicyByShopId'),
					data:{
						id:shopId
					}, 
					type:'POST',
					showLoading:false,
					success:function(data){
						var result = showDialog(data);
						if(result){
							shopPolicyList = JSON.parse(data.shopPolicyList);
							if(shopPolicyList && shopPolicyList.length > 0){
								for(var i=0; i < shopPolicyList.length; i++){
									shopPolicyList[i].value = shopPolicyList[i].name;
								}
							}else{
								layer.tips('没有内容。', shopObj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						};
						obj.autocomplete('option','source', shopPolicyList);
						obj.autocomplete('search', '');
					}
				});
			});
		}
	};
	//获取自费的数据
	Count.getSelfData = function($obj,$parentObj){
		var $selfObj = $obj.find('input[name=selfPayName]');
		$.ajax({
			url:KingServices.build_url('selfpay','findAll'),
			type:'POST',
			data:{
				menuKey:menuKey
			},
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var selfPayList = JSON.parse(data.selfPayList);
					if(selfPayList && selfPayList.length > 0){
						for(var i=0; i < selfPayList.length; i++){
							selfPayList[i].value = selfPayList[i].name;
						}
						$selfObj.autocomplete({
							minLength:0,
							change:function(event,ui){
								if(ui.item == null){
									var $tr = $(this).closest('tr');
									$(this).val('');
									$tr.find('input[name=selfPayId]').val('');
									$tr.find('input[name=selfPayItem]').val('');
									$tr.find('input[name=selfPayItemId]').val('');
									$tr.find('input[name=marketPrice]').val('');
									$tr.find('input[name=price]').val('');
								}
							},
							select:function(event,ui){
								if(ui.item != null){
									var $tr = $(this).closest('tr');
									$tr.find('input[name=selfPayId]').val(ui.item.id);
									$tr.find('input[name=selfPayItem]').val('');
									$tr.find('input[name=selfPayItemId]').val('');
									$tr.find('input[name=marketPrice]').val('');
									$tr.find('input[name=price]').val('');
									//获取对应的自费项目
									Count.getSelfItemData($tr,$parentObj);
								}
							}
						}).off('click').on('click',function(){
							var $obj = $(this);
							$obj.autocomplete('option','source', selfPayList);
							$obj.autocomplete('search', '');
						})
						
					}else{
						layer.tips('没有内容。', obj, {
						    tips: [1, '#3595CC'],
						    time: 2000
						});
					}
				}
			}
		});
	};
	//获取自费项目的数据
	Count.getSelfItemData = function($obj,$parentObj){
		var $selfPayItemObj = false;
		if($obj.attr('selfPayId')){
			$selfPayItemObj = $obj.find('input[name=selfPayItem]');
		}else{
			$selfPayItemObj = $obj.find('input[name=selfPayItem]');
		}
		$selfPayItemObj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $tr = $(this).closest('tr');
					$(this).val('');
					$tr.find('input[name=marketPrice]').val('');
					$tr.find('input[name=price]').val('');
					$tr.find('input[name=selfPayItemId]').val('');
				}
			},
			select:function(event,ui){
				if(ui.item != null){
					var $tr = $(this).closest('tr');
					$tr.find('input[name=selfPayItemId]').val(ui.item.id);
					//获取单价底价
					Count.getSelfPrice($(this),$tr,$parentObj);

				}
			}
		}).off('click').on('click', function() {
			var obj = $(this),
				selfId = $obj.find('input[name=selfPayId]').val() || $obj.attr('selfPayId');
			$.ajax({
				url:KingServices.build_url('selfpay','findSelfPayItemBySelfPayId'),
				data:{
					id:selfId
				},
				showLoading:false,
				type:'POST',
				success:function(data){
					var result = showDialog(data);
					if(result){
						var selfpay = JSON.parse(data.selfPayItemList);
						if(selfpay.length>0){
							for(var i=0; i < selfpay.length; i++){
								selfpay[i].value = selfpay[i].name;
							};
							obj.autocomplete('option','source', selfpay);
							obj.autocomplete('search', '');
						}else{
							layer.tips('无数据', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
						
					};
				}
			});
			
		});
	};
	//获取单价底价
	Count.getSelfPrice = function($td,$obj,$parentObj){
		var startTime = $parentObj.find('.startTime_Choose').text(),
			whichDay = false,
			id = false;
			if($obj.attr('selfPayId')){
				whichDay = $obj.attr('whichDay');
				id = $obj.find('input[name=selfPayItemId]').val();
			}else{
				whichDay = $obj.find('select[name=whichDay]').val();
				id = $obj.find('input[name=selfPayItemId]').val();
			};
		$.ajax({
			url:KingServices.build_url('selfpay','getSelfPayItemPrice'),
			type:'POST',
			showLoading:false,
			data:{
				id:id,
				whichDay:whichDay,
				startTime:startTime
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					var travelAgencyRate = parseFloat(data.travelAgencyRate);
					var guideRate = parseFloat(data.guideRate);
					if(guideRate<=1){
						guideRate = guideRate*100;
					};
					if(travelAgencyRate<=1){
						travelAgencyRate = travelAgencyRate*100;
					};
					if($obj.attr('selfPayId')){
						$obj.find('.realMarketPrice').text(data.marketPrice);
						$obj.find('.price').text(data.price);
						$obj.find('.customerRebateMoney').text(data.customerRebateMoney);
						var $tRateObj = $obj.find('td[name=travelAgencyRate]').find('input[name=travelAgencyRate]'),
							$gRateObj = $obj.find('td[name=guideRate]').find('input[name=guideRate]'),
							$CRmoneyObj = $obj.find('input[name=customerRebateMoney]');
						$obj.find('input[name=marketPrice]').val(data.marketPrice);
						$obj.find('input[name=price]').val(data.price);
						$tRateObj.each(function(){
							var $that = $(this);
							$that.val(travelAgencyRate);
						});

						$gRateObj.each(function(){
							var $that = $(this);
							$that.val(guideRate);
						});
						

						$CRmoneyObj.val(data.customerRebateMoney);
						$obj.attr('guideRate',guideRate);
						$obj.attr('travelAgencyRate',travelAgencyRate);
						Count.autoSelfSum($td,$parentObj);

					}else{
						var $tRateObj = $obj.find('td[name=travelAgencyRate]').find('input[name=travelAgencyRate]'),
							$gRateObj = $obj.find('td[name=guideRate]').find('input[name=guideRate]'),
							$CRmoneyObj = $obj.find('input[name=customerRebateMoney]');
						$obj.find('input[name=marketPrice]').val(data.marketPrice);
						$obj.find('input[name=price]').val(data.price);
						$tRateObj.each(function(){
							var $that = $(this);
							$that.val(travelAgencyRate);
						});

						$gRateObj.each(function(){
							var $that = $(this);
							$that.val(guideRate);
						});
						$CRmoneyObj.val(data.customerRebateMoney);
						$obj.attr('guideRate',guideRate);
						$obj.attr('travelAgencyRate',travelAgencyRate);
						Count.autoSelfSum($td,$parentObj);
					};
				};
			}
		});
	};
	//新增导游获取项目的比例
	Count.getRateAfAddGuide = function($obj,id,whichDay,startTime){
		$.ajax({
			url:KingServices.build_url('selfpay','getSelfPayItemPrice'),
			type:'POST',
			showLoading:false,
			data:{
				id:id,
				whichDay:whichDay,
				startTime:startTime
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					var travelAgencyRate = parseFloat(data.travelAgencyRate);
					var guideRate = parseFloat(data.guideRate);
					if(guideRate<=1){
						guideRate = guideRate*100;
					};
					if(travelAgencyRate<=1){
						travelAgencyRate = travelAgencyRate*100;
					};
					var thisTr = $obj.closest('tr'),thisTd =  $obj.closest('td'),
						thisDiv = $obj.closest('div'),tRateTd = thisTr.find('td[name=travelAgencyRate]'),
						gRateTd = thisTr.find('td[name=guideRate]'),thisIndex = thisTd.find('div').length;

					tRateTd.find('div').each(function(){
						var index = $(this).attr('index'),$that = $(this);
						if(thisIndex == index){
							$that.find('input[name=travelAgencyRate]').val(travelAgencyRate);
						}
					});	

					gRateTd.find('div').each(function(){
						var index = $(this).attr('index'),$that = $(this);
						if(thisIndex == index){
							$that.find('input[name=guideRate]').val(guideRate);
						}
					});
				};
			}
		});
	};
	//获取车队
	Count.getBusData = function($obj,$parentObj){
		var $busObj = $obj.find('input[name=companyName]');
		$busObj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).val('');
				}
			},
			select:function(event,ui){
				$(this).closest('tr').find('input[name=companyId]').val(ui.item.id);
				$(this).closest('tr').find('input[name=licenseNumber]').val('');
				$(this).closest('tr').find('input[name=busId]').val('');
				$(this).closest('tr').find('input[name=seatCount]').val('');
			}
		}).off('click').on('click',function(){
			var obj = this,
			parents = $(obj).closest('tr');
			var searchJson = {
					seatCount:parents.find('input[name=seatCount]').val(),
					brand:"",
					busId: parents.find('input[name="busId"]').val(),
					menuKey:menuKey
				};
			$.ajax({
				url:KingServices.build_url('busCompany','getAllBusCompanyList'),
				showLoading:false,
				data:searchJson,
				success:function(data){
					if(showDialog(data)){
						var busCompanyList = JSON.parse(data.busCompanyList);
						if(busCompanyList && busCompanyList.length > 0){
							for(var i=0; i < busCompanyList.length; i++){
								busCompanyList[i].value = busCompanyList[i].companyName;
							}
							$(obj).autocomplete('option','source', busCompanyList);
							$(obj).autocomplete('search', '');
						}else{
							layer.tips('无数据', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			});
		});
	};
	//获取车牌
	Count.getLicenseNumber = function($obj,$parentObj){
		var licenseNumber = $obj.find('input[name=licenseNumber]');
		licenseNumber.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('tr');
					$this.val("");
					parents.find("input[name=seatCount]").val("");
					parents.find("input[name=companyId]").val("");
					parents.find("input[name=companyName]").val("");
				}
			},
			select:function(event,ui){
				var $this = $(this),parents = $(this).closest('tr');
					$this.val("");
					parents.find('input[name=busId]').val(ui.item.id);
					parents.find("input[name=seatCount]").val("");
			}
		}).off('click').on('click',function(){
			var obj = this,
			parents = $(obj).closest('tr');
			var searchJson = {
					seatCount:parents.find('input[name=seatCount]').val(),
					brand:"",
					busCompanyId:parents.find('input[name=companyId]').val(),
					menuKey:menuKey
				};
			$.ajax({
				url:KingServices.build_url('busCompany','getLicenseNumbers'),
				data:searchJson,
				showLoading:false,
				type:'POST',
				success:function(data){
					if(showDialog(data)){
						var licenseList = JSON.parse(data.busList);
						if(licenseList && licenseList.length > 0){
							for(var i=0; i < licenseList.length; i++){
								licenseList[i].value = licenseList[i].licenseNumber;
							}
							$(obj).autocomplete('option','source', licenseList);
							$(obj).autocomplete('search', '');
						}else{
							layer.tips('无数据', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			});
		});
	};
	//座位数的下拉
	Count.getSeatCount = function($obj,$parentObj){
		var seatCount = $obj.find('input[name=seatCount]');
		seatCount.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $this = $(this),parents = $(this).closest('tr');
					$this.val("");
				};
			},
			select:function(event,ui){
			}
		}).off('click').on('click',function(){
			var obj = this,
			parents = $(obj).closest('tr');

			var searchJson = {
					brand:"",
					busId:parents.find('input[name=busId]').val(),
					busCompanyId:parents.find('input[name=companyId]').val(),
					menuKey:menuKey
				};
			$.ajax({
				url:KingServices.build_url('bookingOrder','getSeatCountList'),
				data:searchJson,
				showLoading:false,
				type:'POST',
				success:function(data){
					if(showDialog(data)){
						var seatCountListJson = [];
						var seatCountList = data.seatCountList;
						if(seatCountList && seatCountList.length > 0){
							for(var i=0; i < seatCountList.length; i++){
								var seatCount = {
									value : seatCountList[i]
								}
								seatCountListJson.push(seatCount);
							}
							$(obj).autocomplete('option','source', seatCountListJson);
							$(obj).autocomplete('search', '');
						}else{
							layer.tips('无数据', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			});
		});
	};
	//获取餐厅
	Count.getRestData = function($obj,$parentObj){
		var $restObj = $obj.find('input[name=restaurantName]');
		$.ajax({
			url:KingServices.build_url('restaurant','findAll'),
			type:'POST',
			data:{
				menuKey:menuKey
			},
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var restaurantList = JSON.parse(data.restaurantList);
					if(restaurantList && restaurantList.length > 0){
						for(var i=0; i < restaurantList.length; i++){
							restaurantList[i].value = restaurantList[i].name;
						}
					}
					var newItem = {
						id:"",
						value:"导游自选"
					};
					restaurantList.unshift(newItem)
					$restObj.autocomplete({
						minLength:0,
						change:function(event,ui){
							if(ui.item == null){
								var $tr = $(this).closest('tr');
								$(this).val('');
								$tr.find('input[name=price]').val('');
								$tr.find('input[name=standardId]').val(ui.item.id);

							}
						},
						select:function(event,ui){
							if(ui.item != null){
								var $tr = $(this).closest('tr');
								$tr.find('input[name=restaurantId]').val(ui.item.id);
								$tr.find('input[name=standardId]').val(ui.item.id);
								if(ui.item.id == ""){
									var optionHtml = '<option value="0">现金</option>'+
										'<option value="1">刷卡</option>';
									$tr.find('select[name=payType]').html(optionHtml)
								}else{
									var optionHtml = '<option value="0">现金</option>'+
										'<option value="1">刷卡</option>'+
										'<option value="2">签单</option>';
									$tr.find('select[name=payType]').html(optionHtml)
								};
								Count.autoRestaurantSum($(this),$parentObj);
								//获取餐标
								Count.getRestPrice($tr,$parentObj);

							}
						}
					}).off('click').on('click',function(){
						var obj = $(this);
						obj.autocomplete('option','source', restaurantList);
						obj.autocomplete('search', '');
					});
				}
			}
		});
	};
	//获取餐标
	Count.getRestPrice = function($obj,$parentObj){
		var id = $obj.find('input[name=restaurantId]').val(),
			standardObj = $obj.find('input[name=price]'),
			type = $obj.find('select[name=type]').val() || $obj.find('input[name=type]').val();
		if(!!$obj.find('select[name=chooseRest]').val()){
			id = $obj.find('select[name=chooseRest]').val();
		};
		if(!!id){
			$.ajax({
				url:KingServices.build_url('restaurant','getRestaurantStandardByType'),
				data:{
					restaurantId:id,
					type:type
				},
				showLoading:false,
				type:'POST',
				success:function(data){
					var result = showDialog(data);
					if(result){
						var restaurantStandardList = data.restaurantStandardList || [];

						for(var i=0; i < restaurantStandardList.length; i++){
							restaurantStandardList[i].value = restaurantStandardList[i].price;
						}
						standardObj.autocomplete({
							minLength:0,
							change:function(event,ui){
								 if(ui.item == null){
								 	var $tr = $(this).closest('tr');
								 	// 允许输入餐标，不清空
								 	// $(this).val('');
								 	$tr.find('input[name=standardId]').val('');
								 }
								 Count.autoRestaurantSum($(this),$parentObj);
							},
							select:function(event,ui){
								if(ui.item !=null){
									var $tr = $(this).closest('tr');
								 	$tr.find('input[name=standardId]').val(ui.item.id);
								}
							}
						}).off('click').on('click',function(){
							var obj = $(this);
							obj.autocomplete('option','source', restaurantStandardList);
							obj.autocomplete('search', '');
						});
						
					}
				}
			});
		}
	};
	//获取酒店数据
	Count.getHotelData = function($obj,$parentObj){
		var hotelObj = $obj.find('input[name=hotelName]');
		hotelObj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $tr = $(this).closest('tr');
					$(this).val('');
					$tr.find('input[name=hotelName]').val();
					$tr.find('input[name=hotelId]').val();
					$tr.find('input[name=price]').val();
				}
			},
			select:function(event,ui){
				var $tr = $(this).closest('tr');
				$tr.find('input[name=hotelName]').val();
				$tr.find('input[name=hotelId]').val();
				$tr.find('input[name=price]').val();
				$tr.find('input[name=hotelId]').val(ui.item.id);
				//获取房间列表
				Count.getHotelRoom($tr,$parentObj);
			}
		}).off('click').on('click',function(){
			var obj = $(this)
			$.ajax({
				url:KingServices.build_url('hotel','findHotelList'),
				type:'POST',
				data:{
					menuKey:menuKey
				},
				showLoading:false,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var hotelList = JSON.parse(data.hotelList);
						if(hotelList && hotelList.length > 0){
							for(var i=0; i < hotelList.length; i++){
								hotelList[i].value = hotelList[i].name;
							}
							$(obj).autocomplete('option','source', hotelList);
							$(obj).autocomplete('search', '');
						}else{
							layer.tips('没有内容。', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			});
		});
	};
	//获取房间列表
	Count.getHotelRoom = function($obj,$parentObj){
		$hotelRoomObj = $obj.find('input[name=hotelRoom]'),
		id = $obj.find('input[name=hotelId]').val();
		$hotelRoomObj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).val("");
					var objParent = $(this).closest('tr');
					objParent.find("input[name=hotelRoomId]").val("");
				}
			},
			select:function(event,ui){
				var parents = $(this).closest('tr'),
					whichDay = parents.find("select[name=whichDay]").val(),
					startTime = $("#tripPlan_addPlan_content").find("[name=startTime_Choose]").text();
					parents.find("input[name=hotelRoomId]").val(ui.item.id).trigger('change');
					//获取房间标价
					Count.getHotelRoomPrice($(this),parents,$parentObj);
					

			}
		}).off('click').on('click',function(){
			var obj = $(this);
			$.ajax({
				url:KingServices.build_url('hotel','findTypeByHotelId'),
				data:{
					id:id
				},
				showLoading:false,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var hotelRommList = JSON.parse(data.hotelRommList);
						if(hotelRommList && hotelRommList.length > 0){
							for(var i=0; i < hotelRommList.length; i++){
								hotelRommList[i].value = hotelRommList[i].type;
							}
							$(obj).autocomplete('option','source', hotelRommList);
							$(obj).autocomplete('search', '');
						}else{
							layer.tips('没有内容。', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			})
		});
	};
	//获取房间价格
	Count.getHotelRoomPrice = function($td,$obj,$parentObj){
		var $priceObj = $obj.find('input[name=price]'),
			id = $obj.find('input[name=hotelRoomId]').val(),
			whichDay = $obj.find('select[name=whichDay]').val(),
		 	startTime = $parentObj.find('.startTime_Choose').text();
		$.ajax({
			url:KingServices.build_url('hotel','getHotelRoomPrice'),
			data:{
				id:id,
				whichDay:whichDay,
				enterTime:startTime
			},
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
					$obj.find('input[name=price]').val(data.price);
					Count.autoHotelSum($td,$parentObj);
				}
			}
		});
	};
	//获取景区数据
	Count.getScenicData = function($obj,$parentObj){
		var scenicObj = $obj.find('input[name=scenicName]');
		$.ajax({
			url:KingServices.build_url('scenic','findAll'),
			type:'POST',
			data:{
				menuKey:menuKey
			},
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var scenicList = JSON.parse(data.scenicList);
					scenicObj.autocomplete({
						minLength:0,
						change:function(event,ui){
							var $tr = $(this).closest('tr');
							if(ui.item == null){
								$(this).val('');
								$tr.find('input[name=scenicId]').val('');
								$tr.find('input[name=scenicItemId]').val('');
								$tr.find('input[name=scenicItemName]').val('');
								$tr.find('input[name=price]').val('');
							}
						},
						select:function(event,ui){
							var $tr = $(this).closest('tr');
							$tr.find('input[name=scenicId]').val(ui.item.id);
							$tr.find('input[name=scenicItemId]').val('');
							$tr.find('input[name=scenicItemName]').val('');
							$tr.find('input[name=price]').val('');
							$tr.find('input[name=scenicItem]').val('');
							//获取景区项目
							Count.getScenicItem($tr,$parentObj);
						}
					}).off('click').on('click',function(){
						for(var i=0; i < scenicList.length; i++){
							scenicList[i].value = scenicList[i].name;
						}
						var obj = $(this);
						obj.autocomplete('option','source', scenicList);
						obj.autocomplete('search', '');
					});
				}
			}
		});
	};
	//获取景区项目
	Count.getScenicItem = function($obj,$parentObj){
		var scenicItemObj = $obj.find('input[name=scenicItem]'),
			id= $obj.find('input[name=scenicId]').val();
		$.ajax({
			url:KingServices.build_url('scenic','findItemByScenicId'),
			data:{
				id:id
			},
			type:'POST',
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var scenicItemList = JSON.parse(data.scenicItemList);
					for(var i=0; i < scenicItemList.length; i++){
						scenicItemList[i].value = scenicItemList[i].name;
					};
					scenicItemObj.autocomplete({
						minLength:0,
						change:function(event,ui){
							var $tr = $(this).closest('tr');
							if(ui.item == null){
								$(this).val('');
								$tr.find('input[name=price]').val('');
								$tr.find('input[name=scenicItemId]').val('');
							}
						},
						select:function(event,ui){
							var $tr = $(this).closest('tr');
							if(ui.item != null){
								$tr.find('input[name=scenicItemId]').val(ui.item.id);
								//获取单价
								Count.getScenicItemPrice($(this),$tr,$parentObj);
							}
						}
					}).off('click').on('click',function(){
						var obj = $(this);
						obj.autocomplete('option','source', scenicItemList);
						obj.autocomplete('search', '');
					});
				}
			}
		});
	};
	//获取单价
	Count.getScenicItemPrice = function($td,$obj,$parentObj){
		var startTime = $parentObj.find('.startTime_Choose').text();
		//var whichDay = $obj.find('select[name=whichDay]').val();
		var	id = $obj.find('input[name=scenicItemId]').val();
		$.ajax({
			url:KingServices.build_url('scenic','getScenicItemPrice'),
			data:{
				id:id,
				whichDay:1,
				startTime:startTime
			},
			showLoading:false,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					$obj.find('input[name=price]').val(data.price);
					Count.autoScenicSum($td,$parentObj);
				}
			}
		});
	};
	//获取票务公司
	Count.getTicketData = function($obj,$parentObj){
		var $ticketObj = $obj.find('input[name=ticketName]');
		$ticketObj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).val("");
					var thisParent = $(this).closest('tr');
					thisParent.find("input[name=ticketId]").val("").trigger('change');
				}
			},
			select:function(event,ui){
				var $tr = $(this).closest('tr');
				$tr.find("input[name=ticketId]").val(ui.item.id);
			}
		}).off('click').on('click',function(){
			var obj = this;
			$.ajax({
				url:KingServices.build_url('ticket','findAll'),
				type:'POST',
				data:{
					menuKey:menuKey
				},
				showLoading:false,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var ticketList = JSON.parse(data.ticketList);
						if(ticketList && ticketList.length > 0){
							for(var i=0; i < ticketList.length; i++){
								ticketList[i].value = ticketList[i].name;
							};

							$(obj).autocomplete('option','source', ticketList);
							$(obj).autocomplete('search', '');
						}else{
							layer.tips('没有内容。', obj, {
							    tips: [1, '#3595CC'],
							    time: 2000
							});
						}
					}
				}
			});
		});
	};
	//权限过滤
	Count.authFilter = function(obj){
            var $obj = $(obj);
            //报账过滤
            $obj.find(".R-right").each(function(){
                var right = $(this).data("right");
                var auth = isAuth(right);
                if(!auth){
                    $(this).remove();
                }   
            });
            //审核过滤
            $obj.find(".T-audit").each(function(i){
                var right,status = $(this).closest('tr').attr('billstatus') * 1;
                if(status == 0){//计调可审
                    right = "1190002"; 
                } else if(status == 1 || status == 2){//财务可审
                    right = "1190003";
                } else{
                    right = "无";
                }
                var auth = isAuth(right);
                if(!auth){
                    $(this).remove();
                }
            });
            return $obj;
	},
	//获取搜索区域数据--线路
	Count.getLineproductData = function($obj){
    	$obj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).closest('div').find('input[name="lineProductId"]').val('');
				}
			},
			select:function(event,ui){
				$(this).blur().trigger('change');
				$(this).closest('div').find('input[name="lineProductId"]').val(ui.item.id);
			}
		}).off("click").on("click", function(){
			var obj = this;
			$.ajax({
				url:KingServices.build_url("lineProduct","findAllLineProductOnlyIdAndName"),
                type: "POST",
                showLoading:false,
                success: function(data) {
					var result = showDialog(data);
					if(result){
						var lineProductList = JSON.parse(data.lineProductList);
						if(lineProductList != null && lineProductList.length > 0){
							for(var i=0;i<lineProductList.length;i++){
								lineProductList[i].value = lineProductList[i].name;
							}
						}
						$(obj).autocomplete('option','source', lineProductList);
						$(obj).autocomplete('search', '');
					}
                }
            });
		});
	};
	//获取搜索区域数据--导游
	Count.getGuideData = function($obj) {
	    $obj.autocomplete({
	        minLength: 0,
	        change: function(event, ui) {
	            if (ui.item == null) {
	                $(this).closest('div').find('input[name="guideId"]').val('');
	            }
	        },
	        select: function(event, ui) {
	            $(this).blur().trigger('change');
	            $(this).closest('div').find('input[name="guideId"]').val(ui.item.id);
	        }
	    }).off("click").on("click", function() {
	        var obj = this;
	        $.ajax({
	            url: KingServices.build_url("guide", "findAll"),
	            type: 'POST',
	            data: {
	                menuKey: "resource_guide"
	            },
	            showLoading: false,
	            success: function(data) {
	                var result = showDialog(data);
	                if (result) {
	                    var guideList = JSON.parse(data.guideList);
	                    if (guideList != null && guideList.length > 0) {
	                        // 按拼音排序
	                        Tools.sortByPinYin(guideList, 'realname');

	                        for (var i = 0; i < guideList.length; i++) {
	                            guideList[i].value = guideList[i].realname;
	                        }
	                    }
	                    $(obj).autocomplete('option', 'source', guideList);
	                    $(obj).autocomplete('search', '');
	                }
	            }
	        });
	    });
	};

	//获取搜索区域数据--责任计调
	Count.getOpList = function($obj) {
	    $obj.autocomplete({
	        minLength: 0,
	        change: function(event, ui) {
	            if (ui.item == null) {
	                $(this).closest('div').find('input[name="dutyOPUserId"]').val('');
	            }
	        },
	        select: function(event, ui) {
	            $(this).blur().trigger('change');
	            $(this).closest('div').find('input[name="dutyOPUserId"]').val(ui.item.id);
	        }
	    }).one("click", function() {
	        var obj = this;
	        $.ajax({
	            url: KingServices.build_url("tripController", "selectDutyOPUser"),
	            type: 'POST',
	            showLoading: false,
	            success: function(data) {
	                var result = showDialog(data);
	                if (result) {
	                    var opList = data.outOPUsers;
	                    if (opList != null && opList.length > 0) {
	                        // 按拼音排序
	                        Tools.sortByPinYin(opList, 'realName');

	                        for (var i = 0; i < opList.length; i++) {
	                            opList[i].value = opList[i].realName;
	                        }
	                    }
	                    $(obj).autocomplete('option', 'source', opList);
	                    $(obj).autocomplete('search', '').data("ajax",true);
	                }
	            }
	        });
	    }).on('click', function(event) {
	    	event.preventDefault();
	    	if($obj.data("ajax")){
	    		$obj.autocomplete('search', '');
	    	}
	    });;
	};

	//格式化日期控件
	Count.formatDate = function($obj){
		$obj.find('.datepicker').datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		});
	};
	//自动校验输入格式
	Count.calculateCost = function($obj){
		var $tbody = $obj.closest('tbody');
		var vl = $($obj).val();
		if(vl.length == 0){
			$($obj).val(0);
		}else{
			$($obj).val(Count.changeTwoDecimal(parseFloat(vl)));
		}
		if($($obj).attr('name') == 'travelAgencyRate' || $($obj).attr('name') == 'guideRate'){
			var vl = $($obj).val();
			var rate = parseFloat(vl);
			if(rate > 100){
				$($obj).val(100);
			}
			if(!$tbody.hasClass('T-count-shopping')){
				var type = $($obj).attr("name") == "travelAgencyRate"?1:2;
				var travelAgencyRate = Count.changeTwoDecimal(parseFloat($($obj).closest('tr').find("input[name=travelAgencyRate]").val()));
				var guideRate = Count.changeTwoDecimal(parseFloat($($obj).closest('tr').find("input[name=guideRate]").val()));
				var sumRate = travelAgencyRate + guideRate;
				if(sumRate > 100) {
					if(type == "1") {
						//社佣
						$($obj).closest('tr').find("input[name=travelAgencyRate]").val(100-guideRate);
					} else if(type == "2") {
						//导佣
						$($obj).closest('tr').find("input[name=guideRate]").val(100-travelAgencyRate);
					}
				}
			}
		}
	};
	//规范输入的数字数据
	Count.changeTwoDecimal = function($val){
		var newVal = parseFloat($val);

		if (isNaN(newVal) || newVal == Number.POSITIVE_INFINITY){
			return 0;
		}
		var newVal = Math.round($val*100)/100;
		return newVal;
	};
	Count.changeForInstall = function($val,$listObj){
		var newVal = parseFloat($val);
		if (isNaN(newVal) || newVal == Number.POSITIVE_INFINITY)
		{
			return 0;
		}
		var newVal = Math.round($val*100)/100;
		
		return newVal;
	};
	Count.changeToString = function($val){
		return Count.changeForInstall($val)+"";
	};
	//设置下拉框的日期
	Count.setChooseDays = function($obj,$parentObj,type){
		var days = $parentObj.find('.T-ProductDays').text();
		var startTime = $parentObj.find('.tripPlanStartTime').val();
		var minDay = parseInt($parentObj.find('[name=minDay]').val());
		var maxDay = parseInt($parentObj.find('[name=maxDay]').val());
		var divHtml = Count.returnDivHtml($parentObj);
		if(!!type && type == "otherIn"){
			divHtml = '';
		};
		
        if(parseInt(days) < 1)return;
        if($obj){
            var tr = $obj.find("tr");
            var selectText = divHtml+'<select class="col-sm-12" name="whichDay">';
            for(var i = minDay; i <= maxDay; i++){
                selectText += '<option value="'+(i)+'">'+Tools.addDay(startTime, i-1)+'</option>';
            }
            selectText += '</select>';
            if(!!type && type == "shop"){
            	tr.eq(tr.length-3).find(".countWhichDaysContainer").html(selectText);
            }else{
            	tr.eq(tr.length-1).find(".countWhichDaysContainer").html(selectText);
            }
            
        }else{
            $("td.whichDaysContainer").each(function(index){
                var val = $(this).attr("value");
                var selectText = '<select class="col-sm-12" name="whichDay">';
                for(var i = minDay; i < maxDay; i++){
                    if(val == (i+1)){
                        selectText += '<option value="'+(i+1)+'" selected="selected">'+Tools.addDay(startTime, i)+'</option>';
                    }else{
                        selectText += '<option value="'+(i+1)+'">'+Tools.addDay(startTime, i)+'</option>';
                    }
                }
                selectText += '</select>';
                $(this).html(selectText);
            });
        }
	};
	//将天数转化为日期
	Count.formatDays = function($obj,$parentObj){
		var days = $obj.closest('tr').attr('whichDay')-1;
		var startTime = $parentObj.find('.tripPlanStartTime').val();
		var date = Tools.addDay(startTime, days);

		$obj.closest('tr').find('.whichDay').text(date)
	};
	//获取社佣比例、导佣比例
	Count.getShopRate = function($obj,shopPolicyId,consumeMoney,date,$bodyObj){
		consumeMoney = consumeMoney || 0;
		if(!!shopPolicyId){
			$.ajax({
				url:KingServices.build_url('shop','findShopCostRebateBy'),
				type:'POST',
				data:{
					policyId:shopPolicyId,
	            	consumeMoney:consumeMoney,
	            	date:date
				},
				showLoading:false,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var shopCostRebate = JSON.parse(data.shopCostRebate);
	                	if(shopCostRebate != null && data.shopCostRebate != 'null') {
	                		var travelAgencyRate = parseFloat(shopCostRebate.travelAgencyRate)*100;
	                		travelAgencyRate = Count.changeTwoDecimal(travelAgencyRate);
	                		var guideRate = parseFloat(shopCostRebate.guideRate)*100;
	                		guideRate = Count.changeTwoDecimal(guideRate);
	                		var $tr = $obj.closest('tr'),travelMoney = 0;
	                		if(travelAgencyRate > 0) {
	                			$tr.find("input[name=travelAgencyRate]").val(travelAgencyRate);
	                			travelMoney = Count.changeTwoDecimal(((travelAgencyRate*consumeMoney)/100));
	                			$tr.find("input[name=travelAgencyRateMoney]").val(travelMoney);
	                			Count.autoShopSum($obj,$bodyObj);
	                			Count.totalRebeatMoney($obj,$bodyObj);
	                			//设置导佣数据
	                			Count.setGuideRate(shopPolicyId,date,$tr,$bodyObj);
	                		}                		
	                	}else{
	                	 	Count.autoShopSum($obj,$bodyObj);
	                	 	Count.totalRebeatMoney($obj,$bodyObj);
	                	};
	                	 
					}
				}
			});
		}
		
	};
	//设置导佣数据
	Count.setGuideRate = function(shopPolicyId,date,$tr,$bodyObj){
		var $sumGuideMoney = $tr.find('td[name=shopGuideMoney]').find('input[name=shopGuideMoney]'),
			$guideRate = $tr.find('td[name=guideRate]').find('input[name=guideRate]'),
			$guideMoney = $tr.find('td[name=guideRateMoney]').find('input[name=guideRateMoney]');
		$sumGuideMoney.each(function(){
			var $that = $(this),
				thisIndex = $that.closest('div').attr('index'),
				consumeMoney = $that.val() || 0;
			$.ajax({
				url:KingServices.build_url('shop','findShopCostRebateBy'),
				type:'POST',
				data:{
					policyId:shopPolicyId,
	            	consumeMoney:consumeMoney,
	            	date:date
				},
				showLoading:false,
				success:function(data){
					if(showDialog(data)){
						var shopCostRebate = JSON.parse(data.shopCostRebate);
	                	if(shopCostRebate != null && data.shopCostRebate != 'null') {
	                		var guideRate = parseFloat(shopCostRebate.guideRate)*100;
	                		guideRate = Count.changeTwoDecimal(guideRate);
	                		var guideMoney = 0;
	                		if(guideRate > 0) {
	                			$guideRate.each(function(){
	                				var $thatObj = $(this),
	                				    index = $thatObj.closest('div').attr('index');
	                				if(thisIndex == index){
	                					$thatObj.closest('div').find("input[name=guideRate]").val(guideRate);
			                			guideMoney = Count.changeTwoDecimal(((guideRate*consumeMoney)/100));
			                			$guideMoney.each(function(){
			                				var $thisObj = $(this),
			                					thatIndex = $thisObj.closest('div').attr('index');
			                				if(thisIndex == thatIndex){
			                					$thatObj.closest('div').find("input[name=guideRateMoney]").val(guideMoney);
			                				};
			                				Count.autoShopSum($thatObj,$bodyObj);
			                				Count.totalRebeatMoney($thatObj,$bodyObj);
			                			});
			                			
	                				}
	                			});
	                		}                		
	                	}else{
	                	 	$obj.closest('tr').find("input[name=travelAgencyRate]").val(0);
	                	 	$obj.closest('tr').find("input[name=guideRate]").val(0);
	                	 	Count.autoShopSum($obj,$bodyObj);
	                	 	Count.totalRebeatMoney($obj,$bodyObj);
	                	};
					}
				}
			})
		});
	};
	//保存数据
	Count.saveTripCount = function(id, financialTripPlanId,$obj,typeFlag){
		var method = typeFlag == 1?'update':'webGuideAccountUpdate';
		Count.shopClickCount = 0;
		//组装数据
		var saveJsonStr = Count.installData(id,$obj);
		// console.log(saveJsonStr);
		//校验同一天不能安排同一家购物店
		var submitStatus =  Count.checkShopArrange(saveJsonStr);
		if(submitStatus.submitStatus){
			showMessageDialog(submitStatus.submitMeaasge);
			return;
		}
		var addSelfList = saveJsonStr.addSelfPayArrangeList;
		for(var i = 0;i<addSelfList.length;i++){
			if(addSelfList[i].selfPayId == "" || addSelfList[i].selfPayItemId == ""){
				var message="";
				if(addSelfList[i].selfPayId == ""){
					message = "请选择自费商家"
				}else{
					if(addSelfList[i].selfPayItemId == ""){
						message="请选择自费项目"
					}
				};
				showMessageDialog(message);
				return;
			}
		}

		var addRestList = saveJsonStr.addRestArrangeList;
		
		///导游自选餐厅
		if(typeFlag == 3){
			var restaurantList= saveJsonStr.addRestArrangeList;
			for(var i = 0;i<restaurantList.length;i++){
				if(restaurantList[i].isChoose == 1 && restaurantList[i].restaurantId==0){
					message = "请选择导游自选餐厅";
					showMessageDialog(message);
					return;
				}
			}
		};
		var addBusList = saveJsonStr.addBusArrangeList;
		for(var i = 0;i<addBusList.length;i++){
			if(addBusList[i].busCompanyId == ""){
				var message="";
				if(addBusList[i].busCompanyId == ""){
					message = "请选择车队"
				}
				showMessageDialog(message);
				return;
			}
		};
		var addHotelList = saveJsonStr.addHotelArrangeList;
		for(var i = 0;i<addHotelList.length;i++){
			if(addHotelList[i].hotelId == "" || addHotelList[i].hotelRoomId == ""){
				var message="";
				if(addHotelList[i].hotelId == ""){
					message = "请选择酒店"
				}else{
					if(addHotelList[i].hotelRoomId == ""){
						message="请选择房型"
					}
				};
				showMessageDialog(message);
				return;
			}
		};

		var addScenicList = saveJsonStr.addScenicArrangeList;
		for(var i = 0;i<addScenicList.length;i++){
			if(addScenicList[i].scenicId == "" || addScenicList[i].scenicItemId == ""){
				var message="";
				if(addScenicList[i].scenicId == ""){
					message = "请选择景区"
				}else{
					if(addScenicList[i].scenicItemId == ""){
						message="请选择景区收费项目"
					}
				};
				showMessageDialog(message);
				return;
			}
		}

		var addTicketList = saveJsonStr.addTicketArrangeList;
		for(var i = 0;i<addTicketList.length;i++){
			if(addTicketList[i].ticketId == "" || addTicketList[i].startTime == ""){
				var message="";
				if(addTicketList[i].ticketId == ""){
					message = "请选择票务商家"
				}else{
					if(addTicketList[i].startTime == ""){
						message="请选择日期"
					}
				};
				showMessageDialog(message);
				return;
			}
		}

		var addoOherInList = saveJsonStr.addOtherIncomeList;
		for(var i = 0;i<addoOherInList.length;i++){
			if(addoOherInList[i].title == "" || addoOherInList[i].price == "" || addoOherInList[i].count == ""){
				var message="";
				if(addoOherInList[i].title == ""){
					message = "请输入其他收入的消费项目"
				}else{
					if(addoOherInList[i].price == ""){
						message="请输入其他收入的消费单价"
					}else{
						if(addoOherInList[i].count == ""){
							message="请输入其他收入的消费数量"
						}
					}
				};
				showMessageDialog(message);
				return;
			}
		}

		var addOherList = saveJsonStr.addOtherArrangeList;
		for(var i = 0;i<addOherList.length;i++){
			if(addOherList[i].otherName == "" || addOherList[i].realPrice == "" || addOherList[i].realCount == ""){
				var message="";
				if(addOherList[i].otherName == ""){
					message = "请输入其他支出的消费项目"
				}else{
					if(addOherList[i].realPrice == ""){
						message="请输入其他支出的消费单价"
					}else{
						if(addOherList[i].realCount == ""){
							message="请输入其他支出的消费数量"
						}
					}
				};
				showMessageDialog(message);
				return;
			}
		}

		var addTicketList = saveJsonStr.addTicketArrangeList;
		for(var i = 0;i<addTicketList.length;i++){
			if(addTicketList[i].ticketId == "" || addTicketList[i].startTime == ""){
				var message="";
				if(addTicketList[i].ticketId == ""){
					message = "请选择票务商家"
				}else{
					if(addTicketList[i].startTime == ""){
						message="请选择日期"
					}
				};
				showMessageDialog(message);
				return;
			}
		}

		saveJsonStr = JSON.stringify(saveJsonStr);

		var url = KingServices.build_url('financialTripPlan',method);
		if(typeFlag == 3){
			url += "&category=category";
		};
		$.ajax({
			url: url,
			data:{
				saveJson:saveJsonStr
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if (result) {
					showMessageDialog(data.message);
					if(data.success == 1){
						if(typeFlag == 1){
							Count.updateExamine(financialTripPlanId);
						}else{
							if(typeFlag == 3){
								Count.webFanishAccount(id);
							}else{
								Count.Reimbursement(financialTripPlanId);
							}
						}
					}
					
				};
			}
		});
	};
	//报账完成处理
	Count.webFanishAccount = function(id){
		$.ajax({
			url:KingServices.build_url('financialTripPlan','webGuideAccount'),
			type:'POST',
			data:{
				id:id
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog(data.message);
        			Count.listCountBody(0);
            		Tools.closeTab(ReimbursementId);
				}
			}
		});
	};
	//组装数据
	Count.installData = function(id,$obj){
		var saveJson = {
			financialTripPlan:{},
			touristGroupList:[],
			shopArrangeList:[],
			addShopArrangeList:[],
			selfPayArrangeList:[],
			addSelfPayArrangeList:[],
			otherInList:[],
			addOtherIncomeList:[],
			busCompanyArrangeList:[],
			addBusArrangeList:[],
			restaurantArrangeList:[],
			addRestArrangeList:[],
			hotelArrangeList:[],
			addHotelArrangeList:[],
			scenicArrangeList:[],
			addScenicArrangeList:[],
			ticketArrangeList:[],
			addTicketArrangeList:[],
			otherArrangeList:[],
			addOtherArrangeList:[],
			guideArrangeList:[],
	        remarkArrangeList:[],
	        log:{
				type:"1",
				info:{
					message:"",
				},
				shopLog:[],
				selfPayLog:[],
				otherInLog:[],
				busLog:[],
				restaurantLog:[],
				hotelLog:[],
				scenicLog:[],
				ticketLog:[],
				otherLog:[]
			}
		};
		//团信息
		var tripPlan = {
				id:Count.changeTwoDecimal($obj.find('.financial-tripPlanId').val()),
				grossProfitMoney:parseFloat($obj.find('.grossProfitMoney').text()),
				perGrossProfitMoney:parseFloat($obj.find('.T-main-table .perGrossProfitMoney').text()),
				getAllMoney:Count.changeTwoDecimal(parseFloat($obj.find('.T-main-table .tripIncome').text())),
				payAllMoney:Count.changeTwoDecimal(parseFloat($obj.find('.T-main-table .tripCost').text())),
				outPayAllMoney:Count.changeTwoDecimal(parseFloat($obj.find('.T-main-table .tripTransitCost').text()))
		};
		var isEdit = 0;
		if($obj.find('.T-edit').is(":checked")){
			isEdit = 1;
		}
		tripPlan.isEdit = isEdit;
		if(typeof tripPlan.opCheckRemark == "undefined") {
            tripPlan.opCheckRemark = "";
        }
        if(typeof tripPlan.financialCheckRemark == "undefined") {
            tripPlan.financialCheckRemark = "";
        }
		saveJson.financialTripPlan = tripPlan;
		//团款现收
		var $tripDetail = $obj.find('.T-tripDetail'),
		$tr = $tripDetail.find('tr');
		$tr.each(function(){
			var $that = $(this),guideArrangeId = $that.find('input[name=guideArrangeId]').val(),
				guideName = $that.find('input[name=guideName]').val();
			if(!!$that.find('.guideName').text()){
				guideName = $that.find('.guideName').text();
			};
			var data = {
				id:$that.attr('id'),
				currentNeedPayMoney:$that.find('input[name=currentNeedPayMoney]').val(),
				isReceived:$that.find('[name=receiveStatus]').val(),
				guideArrangeId:guideArrangeId,
				guideName:guideName
			}
			saveJson.touristGroupList.push(data);
		});
		//购物数据
		var $shopObj = $obj.find('.T-count-shopping'),
		$dataTr = $shopObj.find('.oldData').not('.T-noSubmit');
		
		$dataTr.each(function(i){
			var shopArrange,shopArrangeItemSet = [],$that = $(this),$thatTd_len = $(this).children('td').length;
			var id = "",shopId = '',twoRebate = '',twoRebateMoney = '',whichDay = 1,td_len = $(this).children('td').length;
				if(!!$(this).attr('shopArrangeId')){
					id = $(this).attr('shopArrangeId');
				};
				if(!!$(this).attr('shopId')){
					shopId = $(this).attr('shopId');
				}else{
					shopId = $(this).find('input[name=shopId]').val();
				};
				if(!!$(this).attr('whichDay')){
					whichDay = $(this).attr('whichDay');
				}else{
					whichDay = $(this).find('select[name=whichDay]').val();
				};
				if(!!$(this).attr('twoRebate')){
					twoRebate = $(this).attr('twoRebate');
				}else{
					twoRebate = Count.changeTwoDecimal(parseFloat($(this).find('input[name=twoRebate]').val())/100);
				};
				if(!!$(this).attr('twoRebateMoney')){
					twoRebateMoney = $(this).attr('twoRebateMoney');
				}else{
					twoRebateMoney = $(this).find('input[name=twoRebateMoney]').val();
				};
				var shopArrange = {
					id:id,
					shopId:shopId,
					whichDay:whichDay,
					twoRebate:twoRebate,
					twoRebateMoney:twoRebateMoney
				};
				var addShopArrange = {
					id:id,
					shopId:shopId,
					whichDay:whichDay,
					twoRebate:twoRebate,
					twoRebateMoney:twoRebateMoney
				};
				if(!!$that.attr('shopArrangeId')){
					shopArrange.itemList = [],shopArrange.cashList = [];
					shopArrange.cashList = Count.getShopCashGuideData($that);
					var shopData = installShopData($that);
					shopArrange.itemList.push(shopData);
					var $nextTr = $that.nextAll();
					for(var j = 0;j<$nextTr.length;j++){
						var $thisTr = $nextTr.eq(j);
						if($that.attr('shopId') == $thisTr.attr('shopId') && $that.attr('whichDay') == $thisTr.attr('whichDay') && $that.attr('twoRebate') == $thisTr.attr('twoRebate') && $that.attr('twoRebateMoney') == $thisTr.attr('twoRebateMoney') && !$thisTr.hasClass('sumMoney')){
							var shopData = installShopData($thisTr);
							shopArrange.itemList.push(shopData);
						};
					};
					saveJson.shopArrangeList.push(shopArrange);
				}else{
					var $newTr = $that,
						$nextTr = $that.nextAll(),
						td_cnt = $newTr.children('td').length; 
					var addShopArrange = {
						id:id,
						shopId:shopId,
						whichDay:whichDay,
						twoRebate:twoRebate,
						twoRebateMoney:twoRebateMoney
					};
					addShopArrange.itemList = [],addShopArrange.cashList = [];
					addShopArrange.cashList = Count.getShopCashGuideData($that);//现收导游
					var shopData = installShopData($that);
					addShopArrange.itemList.push(shopData);
					for(var i = 0;i<$nextTr.length;i++){
						var tdLen = $nextTr.eq(i).children('td').length,
							$thisTr = $nextTr.eq(i);
						if(tdLen < td_cnt && !$thisTr.hasClass('sumMoney')){
							var shopData = installShopData($thisTr);
							addShopArrange.itemList.push(shopData);
						}else{
							break;
						};
					}
					saveJson.addShopArrangeList.push(addShopArrange);
				};
				function installShopData ($tr){
					var shopPolicy = '',id='',shopPolicyId = $tr.find('[name=shopPolicyId]').val();
					if(!!$tr.find('input[name=shopPolicy]').val()){
						shopPolicy = $tr.find('[name=shopPolicy]').val();
					}else{
						shopPolicy = $tr.find('.shopPolicy').text();
					};
					if(!!$tr.find('input[name=shopPolicyArrId]').val()){
						id = $tr.find('input[name=shopPolicyArrId]').val();
					}
					var itemList={
						id:id,
						shopPolicyId:shopPolicyId,
						name:shopPolicy,
						consumeMoney:Count.changeTwoDecimal($tr.find('[name=sumConsumeMoney]').val()),
						travelAgencyRate:Count.changeTwoDecimal(parseFloat($tr.find('input[name=travelAgencyRate]').val())/100),
						travelAgencyRebateMoney:$tr.find('[name=travelAgencyRateMoney]').val(),
						guideDetails:Count.getShopGuideData($tr),
					};
					return itemList;
				};
			
		});
		console.log(saveJson.shopArrangeList);
		//自费数据
		var $selfObj = $obj.find('.T-count-selfPay'),
		$tr = $selfObj.find('tr');
		$tr.each(function(){
			var $that = $(this);
			var id = '',selfPayItemId = '',realMarketPrice = Count.changeTwoDecimal($that.find('.realMarketPrice').text()),
				realPrice = Count.changeTwoDecimal($that.find('.price').text());
			if(!!$that.find('input[name=marketPrice]').val()){
				realMarketPrice = $that.find('input[name=marketPrice]').val();
			};
			if(!!$that.find('input[name=price]').val()){
				realPrice = $that.find('input[name=price]').val();
			};
			if(!!$that.find('input[name=selfPayArrangeId]').val()){
				id = $that.find('input[name=selfPayArrangeId]').val();
			};
			if(!!$that.find('input[name=selfPayItemId]').val()){
				selfPayItemId = $that.find('[name=selfPayItemId]').val();
			};
			if(!!id){
				var selfPayArrange = {
					id:id,
					selfPayItemId:selfPayItemId,
					realMarketPrice:realMarketPrice,
					realPrice:realPrice,
					guideDetails:Count.getSelfGuideData($that)
				};
				saveJson.selfPayArrangeList.push(selfPayArrange);
			}else{
				var addArange = {
					id:id,
					whichDay:$that.find('[name=whichDay]').val(),
					selfPayName:$that.find('[name=selfPayName]').val(),
					selfPayId:$that.find('[name=selfPayId]').val(),
					selfPayItem:$that.find('[name=selfPayItem]').val(),
					selfPayItemId:selfPayItemId,
					realMarketPrice:Count.changeTwoDecimal($that.find('[name=marketPrice]').val()),
					realPrice:Count.changeTwoDecimal($that.find('[name=price]').val()),
					customerRebateMoney:0,
					guideDetails:Count.getSelfGuideData($that)
				};
				saveJson.addSelfPayArrangeList.push(addArange)	
			};
		});
		//其他收入数据
		var $otherInObj = $obj.find('.T-count-otherIn'),
		$tr = $otherInObj.find('tr');
		$tr.each(function(){
			var title = $(this).find('input[name="title"]').val(),
				isGuide = 0,
				guideArrangeId = '',
				whichDay = $(this).find('[name="whichDay"]').val();
			if(!!$(this).find('.title').text()){
				title = $(this).find('.title').text();
			};
			if(!!$(this).find('input[name="guideArrangeId"]').val()){
				guideArrangeId = $(this).find('input[name="guideArrangeId"]').val();
			};
			if($(this).find('input[name=isGuide]').is(":checked")){
				isGuide = 1;
			}
			if($(this).attr('otherInId')){
                var otherIn = {
	                id:$(this).attr('otherInId'),
	                title:title,
	                isGuide: isGuide,
	                price:$(this).find('input[name="price"]').val(),
	                guideArrangeId:guideArrangeId,
	                count:$(this).find('input[name="count"]').val(),
	                billRemark:$(this).find('input[name="billRemark"]').val()
                }
            	saveJson.otherInList.push(otherIn);
            }else{
                var otherIn = {
	                id:'',
	                whichDay:whichDay,
	                title:title,
	                isGuide: isGuide,
	                price:$(this).find('input[name="price"]').val(),
	                guideArrangeId:guideArrangeId,
	                count:$(this).find('input[name="count"]').val(),
	                billRemark:$(this).find('input[name="billRemark"]').val()
                }
            	saveJson.addOtherIncomeList.push(otherIn);
            }
		});
		//车费数据
		var $busObj = $obj.find('.T-count-bus'),
		$tr = $busObj.find('tr');
		$tr.each(function(){
			var id = '',busArrangeId = $(this).attr('busArrangeId'),obj = $(this),
				companyName = $(this).find('[name=companyName]').val();
				if(!!$(this).find('.companyName').text()){
					companyName = $(this).find('.companyName').text();
				};
			if(!!busArrangeId) {
				var busCompanyArrange = {
					id:busArrangeId,
					companyName:companyName,
					realPrice:obj.find('input[name=price]').val(),
					realReduceMoney:obj.find('input[name=realReduceMoney]').val(),
					guideDetails:Count.installGuide($(this))

				};
				saveJson.busCompanyArrangeList.push(busCompanyArrange);
			}else{
				var addArange = {
					id:id,
					companyName:companyName,
					companyId:$(this).find('[name=companyId]').val(),
					licenseNumber:$(this).find('[name=licenseNumber]').val(),
					busId:$(this).find('[name=busId]').val(),
					taskType:$(this).find('[name=taskType]').val(),
					seatCount:$(this).find('[name=seatCount]').val(),
					busId:$(this).find('[name=busId]').val(),
					startTime:$(this).find('[name=startTime]').val(),
					endTime:$(this).find('[name=endTime]').val(),
					realPrice:$(this).find('input[name="price"]').val(),
					realReduceMoney:$(this).find('input[name="realReduceMoney"]').val(),
					guideDetails:Count.installGuide($(this))
				};
				saveJson.addBusArrangeList.push(addArange);
			};
		});
		//餐费数据
		var $restObj = $obj.find('.T-count-restaurant'),
		$tr = $restObj.find('tr');
		$tr.each(function(){
			var id = '',restaurantArrangeId = $(this).find('input[name=restaurantArrangeId]').val(),
				restaurantId = '';
				whichDay = $(this).find('[name="whichDay"]').val(),
				restaurantName = $(this).find('[name=restaurantName]').val();
				if(!!$(this).find('.restaurantName').text()){
					restaurantName = $(this).find('.restaurantName').text();
				};
				if(!!$(this).attr('whichDay')){
					whichDay = $(this).attr('whichDay');
				};
				if($(this).attr('isChoose')==1){
					restaurantId = $(this).find('select[name=chooseRest]').val()
				};
			if(!!restaurantArrangeId){
				var restaurantArrange = {
					id:restaurantArrangeId,
					whichDay:whichDay,
					restaurantId:restaurantId,
					realPrice:$(this).find('input[name=price]').val(),
					realCount:$(this).find('.realCount').text(),
					realReduceMoney:$(this).find('input[name=realReduceMoney]').val(),
					guideDetails:Count.installGuide($(this))
				}
				saveJson.restaurantArrangeList.push(restaurantArrange);
			}else{
				var addArange = {
					id:id,
					whichDay:whichDay,
					restaurantName:restaurantName,
					restaurantId:$(this).find('[name=restaurantId]').val(),
					restaurantStandardId:$(this).find('[name=price]').val(),
					type:$(this).find('[name=type]').val(),
					realPrice:$(this).find('input[name="price"]').val(),
					realCount:$(this).find('input[name="realCount"]').val(),
					realReduceMoney:$(this).find('input[name="realReduceMoney"]').val(),
					guideDetails:Count.installGuide($(this))
				};
				saveJson.addRestArrangeList.push(addArange);
			}
		});
		//房费数据
		var $hotelObj = $obj.find('.T-count-hotel'),
		$tr = $hotelObj.find('tr');
		$tr.each(function(){
			var id = '',hotelArrangeId = $(this).find('input[name=hotelArrangeId]').val(),
				whichDay = $(this).find('[name="whichDay"]').val(),
				hotelName = $(this).find('[name=hotelName]').val();
				if(!!$(this).find('.hotelName').text()){
					scenicName = $(this).find('.hotelName').text();
				};
				if(!!$(this).attr('whichDay')){
					whichDay = $(this).attr('whichDay');
				};
			if(!!hotelArrangeId){
				var hotelArrange = {
					id:hotelArrangeId,
					whichDay:whichDay,
					realPrice:$(this).find('input[name=price]').val(),
					realCount:$(this).find('.realCount').text(),
					realReduceMoney:$(this).find('input[name=realReduceMoney]').val(),
					guideDetails:Count.installGuide($(this))
				}
				saveJson.hotelArrangeList.push(hotelArrange);
			}else{
				var addArange = {
					id:id,
					whichDay:whichDay,
					hotelName:hotelName,
					hotelId:$(this).find('[name=hotelId]').val(),
					hotelRoomId:$(this).find('[name=hotelRoomId]').val(),
					realPrice:$(this).find('input[name="price"]').val(),
					realCount:$(this).find('input[name="realCount"]').val(),
					realReduceMoney:$(this).find('input[name="realReduceMoney"]').val(),
					guideDetails:Count.installGuide($(this))
				};
				saveJson.addHotelArrangeList.push(addArange);
			}
		});
		// console.log(saveJson.hotelArrangeList);
		//景区数据
		var $scenicObj = $obj.find('.T-count-scenic'),
		$tr = $scenicObj.find('tr');
		$tr.each(function(){
			var id = '',scenicArrangeId = $(this).find('input[name=scenicArrangeId]').val(),
			whichDay = $(this).find('[name="whichDay"]').val(),
			scenicName = $(this).find('[name=scenicName]').val();
			if(!!$(this).find('.scenicName').text()){
				scenicName = $(this).find('.scenicName').text();
			};
			if(!!$(this).attr('whichDay')){
				whichDay = $(this).attr('whichDay');
			};
			if(!!scenicArrangeId){
				var scenicArrange = {
					id:scenicArrangeId,
					whichDay:whichDay,
					realPrice:$(this).find('input[name=price]').val(),
					realCount:$(this).find('.realCount').text(),
					realReduceMoney:$(this).find('input[name=realReduceMoney]').val(),
					guideDetails:Count.installGuide($(this))
				}
				saveJson.scenicArrangeList.push(scenicArrange);
			}else{
				var addArange = {
					id:id,
					whichDay:whichDay,
					scenicName:scenicName,
					scenicId:$(this).find('[name=scenicId]').val(),
					scenicItemId:$(this).find('[name=scenicItemId]').val(),
					realPrice:$(this).find('input[name="price"]').val(),
					realCount:$(this).find('input[name="realCount"]').val(),
					realReduceMoney:$(this).find('input[name="realReduceMoney"]').val(),
					guideDetails:Count.installGuide($(this))
				};
				saveJson.addScenicArrangeList.push(addArange);
			}
		});
		//票务数据
		var $ticketObj = $obj.find('.T-count-ticket'),
		$tr = $ticketObj.find('tr');
		$tr.each(function(){
			var id = '',
				ticketArrangeId = $(this).attr('ticketArrangeId'),
				whichDay = $(this).find('[name="whichDay"]').val(),
				ticketName = $(this).find('[name=ticketName]').val();
				if(!!$(this).find('.ticketName').text()){
					ticketName = $(this).find('.ticketName').text();
				};
				if(!!$(this).attr('whichDay')){
					whichDay = $(this).attr('whichDay');
				};
				if(!!ticketArrangeId){
					var ticketArrange = {
						id:ticketArrangeId,
						whichDay:whichDay,
						ticketName:ticketName,
						realCount:$(this).find('.realCount').text(),
						realPrice:$(this).find('input[name=price]').val(),
						realReduceMoney:$(this).find('input[name=realReduceMoney]').val(),
						guideDetails:Count.installGuide($(this))
					};
					saveJson.ticketArrangeList.push(ticketArrange);
				}else{
					var addArange = {
						id:id,
						whichDay:whichDay,
						ticketId:$(this).find('[name=ticketId]').val(),
						type:$(this).find('[name=ticketType]').val(),
						startingCity:$(this).find('[name=startArea]').val(),
						startTime:$(this).find('[name=startTime]').val(),
						shift:$(this).find('[name=shift]').val(),
						seatLevel:$(this).find('[name=seatLevel]').val(),
						otherName:ticketName,
						arriveCity:$(this).find('[name=endArea]').val(),
						realPrice:$(this).find('input[name="price"]').val(),
						realCount:$(this).find('input[name="realCount"]').val(),
						realReduceMoney:$(this).find('input[name="realReduceMoney"]').val(),
						guideDetails:Count.installGuide($(this))
					};
					saveJson.addTicketArrangeList.push(addArange);
			};
				
		});
		//其他支出
		var $otherOut = $obj.find('.T-count-otherOut'),
		$tr = $otherOut.find('tr');
		$tr.each(function(){
			var id = '',
				otherArrangeId = $(this).attr('otherArrangeId'),isGuide = 0,
				whichDay = $(this).find('[name="whichDay"]').val(),
				otherOutName = $(this).find('[name=addOtherOutName]').val();
			if(!!$(this).find('.otherName').text()){
				otherOutName = $(this).find('.otherName').text();
			};
			if(!!$(this).attr('whichDay')){
				whichDay = $(this).attr('whichDay');
			}
			if($(this).find('input[name=isGuide]').is(":checked")){
				isGuide = 1;
			}
			if(!!otherArrangeId){
				var otherArrange = {
					id:otherArrangeId,
					whichDay:whichDay,
	                otherName:otherOutName,
	                isGuide: isGuide,
	                realPrice:$(this).find('input[name="price"]').val(),
	                realCount:$(this).find('.realCount').text(),
	                realReduceMoney:Count.changeToString($(this).find('input[name=realReduceMoney]').val()),
	                guideDetails:Count.installGuide($(this))
                }
                saveJson.otherArrangeList.push(otherArrange);
			}else{
				var addArange = {
					whichDay:whichDay,
					otherName:otherOutName,
					isGuide: isGuide,
					realPrice:$(this).find('input[name="price"]').val(),
					realCount:$(this).find('input[name="realCount"]').val(),
					realReduceMoney:$(this).find('input[name="realReduceMoney"]').val(),
					guideDetails:Count.installGuide($(this))
				}
				saveJson.addOtherArrangeList.push(addArange);
			};
            
		});
		//导游
		var $guideObj = $obj.find('.T-count-guide'),
		$tr = $guideObj.find('tr');
		$tr.each(function(){
			var guideJson = {
				id:$(this).attr('arrangeid'),
				price:$(this).find('input[name=price]').val(),
				manageFee:$(this).find('input[name=manageFee]').val(),
				remark:$(this).find('input[name=remark]').val()
			};
			saveJson.guideArrangeList.push(guideJson);
		});
		
		// 批注
        var $tab = $obj,
            $financialRemark = $tab.find('input[name="accountFinancialCheckComment"]'),
            $accountOPCheckComment = $tab.find('input[name="accountOPCheckComment"]'),
            type = 0,
            remarkList = [];
        for (var i = 0, len = $financialRemark.length, opCheckRemark, financeCheckRemark; i < len; i ++)  {
        	if($financialRemark.eq(i).data('change') || $accountOPCheckComment.eq(i).data('change')){
	            opCheckRemark = $financialRemark.eq(i).val();
	            financeCheckRemark = $accountOPCheckComment.eq(i).val();
	            var arrangeType = $financialRemark.eq(i).closest('div').attr('arrangeType');
	            switch(arrangeType){
	            	case 'tripDetail' :
	            		type = 0;
	            	break;
	            	case 'shop' :
	            		type = 1;
	            	break;
	            	case 'self' :
	            		type = 2;
	            	break;
	            	case 'otherIn' :
	            		type = 3;
	            	break;
	            	case 'bus' :
	            		type = 4;
	            	break;
	            	case 'rest' :
	            		type = 5;
	            	break;
	            	case 'hotel' :
	            		type = 6;
	            	break;
	            	case 'scenic' :
	            		type = 7;
	            	break;
	            	case 'ticket' :
	            		type = 8;
	            	break;
	            	case 'otherOut' :
	            		type = 9;
	            	break;
	            	case 'innerTransfer' :
	            		type = 10;
	            	break;
	            	case 'insure' :
	            		type = 11;
	            	break;
	            	case 'guide' :
	            		type = 12;
	            	break;
	            };
                remarkList.push({
                    type:type,               // server要求字符串
                    opCheckRemark: opCheckRemark,
                    financeCheckRemark: financeCheckRemark
                });
	        }
        }
        saveJson.remarkArrangeList = remarkList;
        return saveJson;
	};
	
	//单团审核 和 单团报账 添加明细
	Count.addFee = function($tab, dataId) {
		$tab.find('.T-addFee').on('click', function() {
			var $this = $(this), $parent = $(this).closest('tr'), id = $parent.attr('id'), status = $this.attr('data-status');
			var addFeeLayer = layer.open({
			    type: 1,
			    title:'费用调整',
			    skin: 'layui-layer-rim', //加上边框
			    area: ['1000px', '250px'], //宽高
			    zIndex:1028,
			    content: addFeeTemplate(),
			    success: function() {
			    	var $content = $('.T-count-addFee');

			    	var rule = $content.formValidate([
		                {   //明细数量
		                    $ele: $content.find('input[name=count]'),
		                    rules: [
		                        {
		                            type: 'nonnegative-float',
		                            errMsg: '请输入非负数'
		                        },
                                {
                                    type: 'null',
                                    errMsg: '数量不能为空'
                                }
		                    ]
		                },
		                {	//明细价格
		                	$ele: $content.find('input[name=price]'),
		                	rules: [
		                		{
		                			type: 'float',
		                			errMsg:'请输入数字金额'
		                		},
                                {
                                    type: 'null',
                                    errMsg: '单价不能为空'
                                }
		                	]
		                }
		            ]);
		            function getValue($obj, name) {
		            	return $obj.find('[name='+name+']').val();
		            }

		            $content.find('.T-addCostTbody').on('change', '.T-calc', function() {
		            	var $this = $(this), $parent = $this.closest('tr');
		            	var count = getValue($parent, 'count') || 0,
		            		price = getValue($parent, 'price') || 0;
		            	$parent.find('.T-payMoney').val(count * price);
		            })
		            $content.find('.T-add-Fee-submit').off('click').on('click', function() {
		            	if (!rule.form()) {
			                return;
			            }
			            var json = {
			            	type: getValue($content, 'type'),
			            	count: getValue($content, 'count'),
			            	price: getValue($content, 'price'),
			            	remark: getValue($content, 'remark')
			            }
			            json = JSON.stringify(json);

		            	$.ajax({
		            		url: KingServices.build_url('financialTripPlan','addTouristGroupFee'),
		            		type: 'POST',
		            		data: {
		            			touristGroupId: id, 
		            			touristGroupFeeJson: json
		            		},
		            	})
		            	.done(function(data) {
		            		if (showDialog(data)) {
		            			layer.close(addFeeLayer);
		            			if (status == 0) {
			            			Count.Reimbursement(dataId);
			            		}else if (status == 1) {
		            				Count.updateExamine(dataId);
		            			}
		            		}
		            	});
		            })
			    }
			});
		})
	}
	//报账备注处理
	Count.handleRemark = function(data){
		var remarkList = {
				tripDetailRemark:[],
				shopReamrk:[],
				selfRemark:[],
				otherInRemark:[],
				insuranceRemark:[],
				busRemark:[],
				restRemark:[],
				hotelRemark:[],
				scenicRemark:[],
				ticketRemark:[],
				otherOutRemark:[],
				transferRemark:[],
				guideRemark:[]
			};
		if(data.length>0){
			for(var i = 0;i<data.length;i++){
				var remarkType = data[i].type;
				switch(remarkType){
					case 0 :
						remarkList.tripDetailRemark.push(data[i]);
						break;
					case 1 :
						remarkList.shopReamrk.push(data[i]);
						break;
					case 2 :
						remarkList.selfRemark.push(data[i]);
						break;
					case 3 :
						remarkList.otherInRemark.push(data[i]);
						break;
					case 4 :
						remarkList.busRemark.push(data[i]);
						break;
					case 5 :
						remarkList.restRemark.push(data[i]);
						break;
					case 6 :
						remarkList.hotelRemark.push(data[i]);
						break;
					case 7 :
						remarkList.scenicRemark.push(data[i]);
						break;
					case 8 :
						remarkList.ticketRemark.push(data[i]);
						break;
					case 9 :
						remarkList.otherOutRemark.push(data[i]);
						break;
					case 10 :
						remarkList.transferRemark.push(data[i]);
						break;
					case 11 :
						remarkList.insuranceRemark.push(data[i]);
						break;
					case 12:
						remarkList.guideRemark.push(data[i]);
				};
			};
		}
		return remarkList;
	};
	Count.checkShopArrange = function(dataArr){
		var submitFlag = {},
			shopArange = dataArr.shopArrangeList;
			addShopArrange = dataArr.addShopArrangeList;
		for(var i = 0 ;i<shopArange.length;i++){
			for(var j = 0;j<addShopArrange.length;j++){
				if(shopArange[i].shopId == addShopArrange[j].shopId && shopArange[i].whichDay == addShopArrange[j].whichDay){
					submitFlag.submitStatus = true;
					submitFlag.submitMeaasge = '您在同一天，安排了同一家购物店，请检查';
				}
			}
		}
		for(var i = 0;i<shopArange.length;i++){
			var thisItem = shopArange[i].itemList;
			for(var j = 2;j<thisItem.length;j++){
				if(thisItem[j].shopPolicyId == ''){
					submitFlag.submitStatus = true;
					submitFlag.submitMeaasge = '请选择商品';
				};
				
			}
		};

		for(var i = 0;i<addShopArrange.length;i++){
			var thisItem = addShopArrange[i].itemList;
			if(addShopArrange[i].shopId == ''){
				submitFlag.submitStatus = true;
				submitFlag.submitMeaasge = '请选择购物店';
			}else{
				for(var j = 2;j<thisItem.length;j++){
					if(thisItem[j].shopPolicyId == ''){
						submitFlag.submitStatus = true;
						submitFlag.submitMeaasge = '请选择商品';
					};
				};
			};
		};

		return submitFlag;
	};
	//删除安排
	Count.delArrangeData = function(id,nameFlag,fn){
		$.ajax({
			url: KingServices.build_url("financialTripPlan","deleteArrange"),
            type: "post",
            data:"cateName="+nameFlag+"&cateId="+id,
            success: function(data) {
				if(showDialog(data)){
					showMessageDialog("删除成功!");
					fn();
				}
            }
        });
	};
	//合并行删除第一行
	Count.delRowspan = function($obj){
		var $tr = $obj.closest('tr'),
		    $prev = $tr.prevAll(),
			td_cnt = $tr.children('td').length;
		var rowSpan = $tr.children('td').eq(0).attr('rowspan');
		if(!!rowSpan){
			if(rowSpan == 1){
				$tr.remove();
			}else{
				var whichDay = $tr.find('.whichDay').text(),
					nameType = $tr.find('.nameType').text()
					$nextTr = $tr.next();
				rowSpan = rowSpan*1 - 1;
				var html = 
				'<td class="whichDay" rowspan = '+rowSpan+'>'+'<div class="div-h-30"></div>'+whichDay+'</td>'+
					'<td class="nameType" rowspan = '+rowSpan+'>'+'<div class="div-h-30"></div>'+nameType+'</td>';
				$nextTr.children('td').eq(0).before(html);
				$tr.remove();				
			};
		}else{
			for(var i = 0; i<$prev.length;i++){
				var tdLen = $prev.eq(i).children('td').length;
				if(tdLen>td_cnt){
					var rowSpan = $prev.eq(i).children('td').eq(0).attr('rowspan');
					rowSpan = rowSpan*1 - 1;
					$prev.eq(i).children('td[rowspan]').prop('rowspan', rowSpan);
					$tr.remove();
					break;
				};
			}
		}
	};
	//清除小数点
	Count.delValDecimal = function($obj,$listObj,$parentObj){
		var needSum = false;

		var $target = $listObj.find('[name='+ $obj.data('target')+']').each(function() {
			var $that = $(this), value = $that.val();

			if (!!value) {
				$that.val(Math.round(Count.changeTwoDecimal(value)))
				Count.totalRebeatMoney($that,$parentObj);
				needSum = true;
			}
		});

		if (needSum) {
			Count.autoShopSumCost($target.eq(0), $parentObj);
		}
	};
	//新增导游
	Count.addArrangeGuide = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),$thisTd = $obj.closest('td'),
			$countTd = $tr.find('td[name=guideRealCount]'),
			$guidePayedMoneyTd = $tr.find('td[name=guidePayedMoney]'),
			$billImageTd = $tr.find('td[name=billImage]'),
			$billRemarkTd = $tr.find('td[name=billRemark]'),
			index = $thisTd.find('div').length;
			var marTop = 5;
		var guideHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name = "guideName" class="w-70" type="text" />'+
			'<input name="guideArrangeId" type="hidden"/>'+
			'<button class="btn btn-danger btn-sm btn-white T-delGuide pull-right">'+ 
                '<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>'+
            '</button>'+
			/*'<a href="#" class="T-delGuide pull-right">删除</a>'*/
			'</div>';

		var countHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name="guideRealCount" class="w-50 F-float F-count" type="text">'+
			'</div>';

		

		var moneyHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<p class="inline-flex" style="margin:0px;">'+
				'<select name="payType" >'+
				'<option value="0">现金</option>'+
				'<option value="1">刷卡</option>'+
				'<option value="2">签单</option>'+
				'</select>'+
				'<input name="guidePayedMoney" class="w-70 F-float F-money" type="text">'+
			'</p>'+
			'</div>';

		var billImageHtml = '<div style="margin-top:'+marTop+'px;height:24px;" index = '+(index+1)+'>'+
			'<span style="color:#bbb;">查看</span>'+
			'</div>';

		var billRemarkHtml = '<div style="margin-top:'+marTop+'px;" index = '+(index+1)+'>'+
			'<input name="billRemark" type="text">'+
			'</div>';
		$thisTd.append(guideHtml);
		$countTd.append(countHtml);
		$guidePayedMoneyTd.append(moneyHtml);
		$billImageTd.append(billImageHtml);
		$billRemarkTd.append(billRemarkHtml);
		//获取导游
		$thisTd.find('[name=guideName]').each(function(){
			Count.getAccoutnGuide($(this),$parentObj);
		});
	};
	//删除导游
	Count.delArrangeGuide = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),$thisTd = $obj.closest('td'),
			$thisDiv = $obj.closest('div'),
			$countTd = $tr.find('td[name=guideRealCount]'),
			$guidePayedMoneyTd = $tr.find('td[name=guidePayedMoney]'),
			$billImageTd = $tr.find('td[name=billImage]'),
			$billRemarkTd = $tr.find('td[name=billRemark]');
		var index = $thisDiv.attr('index'),
			guideId = $thisDiv.attr('guideId'),
			arrangeType = $tr.attr('arrangeType'),
			cateName = '';
		switch(arrangeType){
			case 'otherArrange' :
				cateName = 'otherGuideDetail';
			break;
			case 'hotelArrange' :
				cateName = 'hotelGuideDetail';
			break;
			case 'ticketArrange' :
				cateName = 'ticketGuideDetail';
			break;
			case 'scenicArrange' :
				cateName = 'scenicGuideDetail';
			break;
			case 'restArrange' :
				cateName = 'restaurantGuideDetail';
			break;
			case 'busArrange' :
				cateName = 'companyGuideDetail';
			break;
		};
		if(!!guideId){
			showConfirmDialog('你确定要删除该条记录？', function() {
				Count.delArrangeData(guideId,cateName,removeGuide);
			});
		}else{
			removeGuide();
		}
		function removeGuide (){
			Count.delDiv($thisTd,index,$parentObj);
			Count.delDiv($countTd,index,$parentObj);
			Count.delDiv($guidePayedMoneyTd,index,$parentObj);
			Count.delDiv($billImageTd,index,$parentObj);
			Count.delDiv($billRemarkTd,index,$parentObj);
		};

	};
	//循环删除div
	Count.delDiv = function($td,index,$parentObj){
		$td.find('div').each(function(){
			var $that = $(this);
			if(index == $that.attr('index')){
				$that.remove();
			}
		});
		if(!!$parentObj){
			Count.changeCountAndMoney($td,$parentObj);
		};
		
	};
	//获取导游下拉数据
	Count.getAccoutnGuide = function($obj, $parentObj) {
	    var guideList = [],
	        dataList = Count.guide.listMap;

	    if ($parentObj.find('.countReimbursement').length) {
	        dataList = Count.reimbursementGuide.listMap;
	    }; //报账
	    if ($parentObj.find('.countUpdate').length) {
	        dataList = Count.updateGuide.listMap;
	    }; //审核

	    for (var i = 0, len = dataList.length; i < len; i++) {
	        dataList[i].value = dataList[i].guideName;
	    }

	    $obj.autocomplete({
	        minLength: 0,
	        change: function(event, ui) {
	            if (ui.item == null) {
	                var $div = $(this).closest('div');
	                $(this).val('');
	                $div.find('input[name=guideArrangeId]').val('');
	                $div.find('input[name=shopGuideArrangeId]').val('');
	            }
	        },
	        select: function(event, ui) {
	            if (ui.item != null) {
	                var arrangeTime = Count.getArrangeTime($obj);

	                var $parent = $(this).closest('div'),
	                    $tr = $(this).closest('tr'),
	                    receiveStatus = $tr.find('select[name=receiveStatus]'),
	                    chooseStatus = Count.isChooseGuide($obj,ui.item.id);

	                if (!arrangeTime 
	                	|| (!!arrangeTime.startTime && !chooseStatus &&Count.isInArrangeTime(arrangeTime, ui.item.taskJson))) {
	                    $parent.find('input[name=guideArrangeId]').val(ui.item.id);
	                    $parent.find('input[name=shopGuideArrangeId]').val(ui.item.id);
	                    receiveStatus.val(1);
	                } else {
	                    $parent.find('input[name=guideArrangeId]').val('');
	                    $parent.find('input[name=shopGuideArrangeId]').val('');
	                    receiveStatus.val(0);

	                    // 设置提示消息
	                    var msg = '您安排的日期不在导游的带团时间内，请到安排中更改!', $target = $obj;
	                    if (!!arrangeTime && (!arrangeTime.startTime || !arrangeTime.endTime)) {
	                    	msg = '请选择安排日期';
	                    	if (!arrangeTime.startTime) {
	                    		$target = $obj.closest('tr').find('[name="startTime"]');	                    		
	                    	} else {
	                    		$target = $obj.closest('tr').find('[name="endTime"]');
	                    	}
	                    };
	                    if(chooseStatus){
	                    	msg = '您已经选择了该导游';
	                    };
	                    layer.tips(msg , $target, {
	                        tips: [1, '#3595CC'],
	                        time: 2500
	                    });

	                    // 将导游置空
	                    setTimeout(function() {
	                        $obj.val('');
	                    }, 0);
	                }
	            }
	        }
	    }).off('click').on('click', function() {
	        $obj.autocomplete('option', 'source', dataList);
	        $obj.autocomplete('search', '');
	    });
	};
	/**
	 * 判断已选择导游
	 * @param  {object} $obj 焦点元素
	 * @param  {object} guideId 导游id
	 * @return {object} true:已选择，false：未选择  
	 */
	Count.isChooseGuide = function($obj,guideId){
		var $td = $obj.closest('td'),guideArrObj = $td.find('input[name=guideArrangeId]'),
			choose = false;

		for(var i = 0;i<guideArrObj.length;i++){
			var $that = guideArrObj.eq(i);
			if(!$obj.val() && !!$that.val() && guideId == $that.val()){
				choose = true;
				break;
			}
		}
		return choose;
	};
	/**
	 * 判断日期是否在安排时间内
	 * @param  {string}  date     安排日期
	 * @param  {object}  taskJson 导游的任务安排时间数据
	 * @return {Boolean}          true：在安排内，false：不在安排内
	 */
	Count.isInArrangeTime = function(date, taskJson) {
	    var ret = false;

	    if (!!date && !!taskJson && typeof taskJson === 'object') {

	        for (var i = 0, len = taskJson.length, tmp; i < len; i++) {
	            tmp = taskJson[i];

	            if (!(tmp.eTime < date.startTime || tmp.sTime > date.endTime)) {  // 当时间存在交集的时候，通过
	                ret = true;
	                break;
	            }
	        }
	    }

	    return ret;
	};

	
	/**
	 * 获取安排日期
	 * @param  {object} $obj 焦点元素
	 * @return {object}      当arrangeTime===false时，适用于团款这种无安排日期；当startTime/endTime是空字符串时候，用于提示；
	 *         				 有日期的对象，用于判断。返回起始日期，只有开始日期时，结束日期设置为开始日期
	 */
	Count.getArrangeTime = function($obj) {
	    var $tr = $obj.closest('tr'),
	        startTime = '',
	        arrangeTime = false;

        while(!$tr.hasClass('oldData') && $tr.length) {
        	$tr = $tr.prev();
        };

        if ($tr.length && $tr.hasClass('oldData')) {
		    if (!!$tr.find('.whichDay').text()) {
		        startTime = $tr.find('.whichDay').text();
		    } else if (!!$tr.find('select[name=whichDay]').find('option:selected').eq(0).text()) {
		        startTime = $tr.find('select[name=whichDay]').find('option:selected').eq(0).text();
		    } else if (!!$tr.find('input[name=startTime]').length) {
		        startTime = $tr.find('input[name=startTime]').val().substring(0,10);
		    }

		    if ($tr.find('[name=endTime]').length) {
		    	arrangeTime = {
		    		startTime: startTime,
		    		endTime: $tr.find('[name=endTime]').val()
		    	}
		    } else if (startTime !== false) {
		    	arrangeTime = {
		    		startTime: startTime,
		    		endTime: startTime
		    	}
		    }
        }

	    return arrangeTime;
	};

	//获取购物导游数据
	Count.getShopGuideData = function($tr){
		var $guideTd = $tr.find('td[name=shopGuideName]'),
			$moneyTd = $tr.find('td[name=shopGuideMoney]'),
			$billRemarkTd = $tr.find('td[name=billRemark]'),
			$guideRateTd = $tr.find('td[name=guideRate]'),
			$guideRateMoneyTd = $tr.find('td[name=guideRateMoney]'),
			$quanpeiRebateTd = $tr.find('td[name=quanpeiRebate]'),
			$quanpeiRebateMoneyTd = $tr.find('td[name=quanpeiRebateMoney]'),
			guideDetail = [];
		var guideDiv = $guideTd.find('div'),
			moneyDiv = $moneyTd.find('div'),
			billRemarkDiv = $billRemarkTd.find('div'),
			guidePayedMoneyDiv = $guideRateMoneyTd.find('div'),
			guideRateDiv = $guideRateTd.find('div'),
			quanpeiRebateMoneyDiv = $quanpeiRebateMoneyTd.find('div'),
			quanpeiRebateDiv = $quanpeiRebateTd.find('div'),
			divLen = guideDiv.length;
			guideDiv.each(function(i){
				var $that = $(this),
					index = $that.attr('index'),
					id = '',
					guideName = $that.find('[name=shopGuideName]').val();
					if(!!$that.find('.guideName').text()){
						guideName = $that.find('.guideName').text();
					};
					if(!!$that.attr('guideId')){
						id = $that.attr('guideId');
					};
				if(!!index){
					var guide = {
						id:id,//实销导游id
						guideArrangeId:$that.find('[name=guideArrangeId]').val(),
						guideName:guideName,
						consumeMoney:moneyDiv.eq(i).find('[name=shopGuideMoney]').val(),
						billRemark:billRemarkDiv.eq(i).find('[name=billRemark]').val(),
						guideRate:parseFloat(guideRateDiv.eq(i).find('[name=guideRate]').val()/100),
						guideRebateMoney:guidePayedMoneyDiv.eq(i).find('[name=guideRateMoney]').val(),
						quanpeiRebate:parseFloat(quanpeiRebateDiv.eq(i).find('[name=quanpeiRebate]').val()/100),
						quanpeiRebateMoney:quanpeiRebateMoneyDiv.eq(i).find('[name=quanpeiRebateMoney]').val(),
					}
					guideDetail.push(guide);
				};
			});
		return guideDetail;
	};
	//获取导游现收数据
	Count.getShopCashGuideData = function($tr){
		var $guideTd = $tr.find('td[name=currGuide]'),
			$moneyTd = $tr.find('td[name=currGuideMoney]'),
			$billRemarkTd = $tr.find('td[name=currGuideRemark]'),
			guideDetail = [];
		var guideDiv = $guideTd.find('div'),
			moneyDiv = $moneyTd.find('div'),
			billRemarkDiv = $billRemarkTd.find('div'),
			divLen = guideDiv.length;
			guideDiv.each(function(i){
				var $that = $(this),
					index = $that.attr('index'),
					guideName = $that.find('[name=currGuideName]').val(),
					id = '',
					guideArrangeId = $that.find('[name=guideArrangeId]').val();
					if(!!$that.find('.cashGuideName').text()){
						guideName = $that.find('.cashGuideName').text();
					};
					if(!!$that.find('[name=currGuideId]').val()){
						id = $that.find('[name=currGuideId]').val();
					};
				if(!!index){
					var guide = {
						id:id,//实销导游id
						guideArrangeId:guideArrangeId,
						guideName:guideName,
						cashMoney:moneyDiv.eq(i).find('[name=currGuideMoney]').val(),
						billRemark:billRemarkDiv.eq(i).find('[name=currGuideRemark]').val(),
					}
					guideDetail.push(guide);
				};
			});
		return guideDetail;
	};
	//获取自费导游数据
	Count.getSelfGuideData = function($tr){
		var selfGuide = $tr.find('td[name=selfGuideName]'),
			incomeCount = $tr.find('td[name=incomeCount]').find('div'),
			needInReduceMoney = $tr.find('td[name=needInReduceMoney]').find('div'),
			needIncome = $tr.find('td[name=needIncome]').find('div'),
			cashMoney = $tr.find('td[name=cashMoney]').find('div'),
			realCount = $tr.find('td[name=realCount]').find('div'),
			realReduceMoney = $tr.find('td[name=realReduceMoney]').find('div'),
			realNeedPayMoney = $tr.find('td[name=realNeedPayMoney]').find('div'),
			guidePayedMoney = $tr.find('td[name=guidePayedMoney]').find('div'),
			travelAgencyRate = $tr.find('td[name=travelAgencyRate]').find('div'),
			travelAgencyRebateMoney = $tr.find('td[name=travelAgencyRebateMoney]').find('div'),
			twoRebate = $tr.find('td[name=twoRebate]').find('div'),
			twoRebateMoney = $tr.find('td[name=twoRebateMoney]').find('div'),
			guideRate = $tr.find('td[name=guideRate]').find('div'),
			guideRebateMoney = $tr.find('td[name=guideRebateMoney]').find('div'),
			quanpeiRebate = $tr.find('td[name=quanpeiRebate]').find('div'),
			quanpeiRebateMoney = $tr.find('td[name=quanpeiRebateMoney]').find('div'),
			billRemark = $tr.find('td[name=billRemark]').find('div'),
			guideDiv = selfGuide.find('div'),
			guideDetails = [];
			guideDiv.each(function(i){
				var $that = $(this),
				index = $that.attr('index'),
				guiddArrangeId = $that.find('[name=guideArrangeId]').val();
				guideId = '';
				if(!!$that.attr('guideId')){
					guideId = $that.attr('guideId');
				};
				if(!!index){
					var guide = {
						id:guideId,
						guideArrangeId:guiddArrangeId,
						cashMoney:cashMoney.eq(i).find('[name=cashMoney]').val(),
						realCount:realCount.eq(i).find('[name=realCount]').val(),
						incomeCount:incomeCount.eq(i).find('[name=incomeCount]').val(),
						realReduceMoney:realReduceMoney.eq(i).find('[name=realReduceMoney]').val(),
						realNeedPayMoney:realNeedPayMoney.eq(i).find('[name=realNeedPayMoney]').val(),
						realGuidePayMoney:guidePayedMoney.eq(i).find('[name=guidePayedMoney]').val(),
						realPayType:guidePayedMoney.eq(i).find('[name=payType]').val(),
						travelAgencyRate:Count.changeTwoDecimal(travelAgencyRate.eq(i).find('[name=travelAgencyRate]').val()/100),
						travelAgencyRebateMoney:Count.changeTwoDecimal(travelAgencyRebateMoney.eq(i).find('[name=travelAgencyRebateMoney]').val()),
						twoRebate:Count.changeTwoDecimal(twoRebate.eq(i).find('[name=twoRebate]').val()/100),
						twoRebateMoney:Count.changeTwoDecimal(twoRebateMoney.eq(i).find('[name=twoRebateMoney]').val()),
						guideRate:Count.changeTwoDecimal(guideRate.eq(i).find('[name=guideRate]').val()/100),
						guideRebateMoney:Count.changeTwoDecimal(guideRebateMoney.eq(i).find('[name=guideRebateMoney]').val()),
						quanpeiRebate:Count.changeTwoDecimal(quanpeiRebate.eq(i).find('[name=quanpeiRebate]').val()/100),
						quanpeiRebateMoney:Count.changeTwoDecimal(quanpeiRebateMoney.eq(i).find('[name=quanpeiRebateMoney]').val()),
						billRemark:billRemark.eq(i).find('[name=billRemark]').val(),
					}
					guideDetails.push(guide);
				}
				
			});
		return guideDetails;
	};
	//获取导游数据
	Count.installGuide = function($tr){
		var $guideTd = $tr.find('td[name=guideName]'),
			$countTd = $tr.find('td[name=guideRealCount]'),
			$guidePayedMoneyTd = $tr.find('td[name=guidePayedMoney]'),
			$billImageTd = $tr.find('td[name=billImage]'),
			$billRemarkTd = $tr.find('td[name=billRemark]'),
			guideDetail = [];
		var guideDiv = $guideTd.find('div'),
			counteDiv = $countTd.find('div'),
			moneyDiv = $guidePayedMoneyTd.find('div'),
			remarkDiv = $billRemarkTd.find('div'),
			divLen = counteDiv.length;
			guideDiv.each(function(j){
				var $that = $(this),
					index = $that.attr('index'),
					id = $that.attr('guideId'),guideArrangeId = 0;
					guideArrangeId = $that.find('[name=guideArrangeId]').val(),
					guideId = '';
				if(!!$that.attr('guideId')){
					guideId = $that.attr('guideId');
				};
				if(!!index){
					var guide = {
						id:guideId,
						guideArrangeId:guideArrangeId,
						realCount:counteDiv.eq(j).find('[name=guideRealCount]').val(),
						realPayType:moneyDiv.eq(j).find('[name=payType]').val(),
						realGuidePayMoney:moneyDiv.eq(j).find('[name=guidePayedMoney]').val(),
						billRemark:remarkDiv.eq(j).find('[name=billRemark]').val(),
					};
					guideDetail.push(guide);
				};
			});
		return guideDetail;
	};
	//增加导游的html拼接
	Count.addGuideHtml = function($parentObj){
		var guideData = [];
		if($parentObj.find('.countReimbursement').length){
			guideData = Count.reimbursementGuide.listMap;
		};//报账
		if($parentObj.find('.countUpdate').length){
			guideData = Count.updateGuide.listMap;
		};//审核
		var guideCount = guideData.length;
		var guideTd = '';
		var divHtml = Count.returnDivHtml($parentObj);
		if(guideCount>1){
			guideTd = '<td name="guideName">'+
				'<div class="div-h-30">'+
					'<button class="btn btn-success btn-sm btn-white T-addGuide pull-right">'+
	                    '<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>'+
	                '</button>'+
		            /*'<a href="#" class="T-addGuide pull-right">增加</a><!-- 增加导游 -->'+*/
		        '</div>'+
		        '<div class="div-h-30 mar-t-5" index="1">'+
		        	'<input type="text" class="w-70" name="guideName"/>'+
					'<input type="hidden" name="guideArrangeId">'+
					'<button class="btn btn-danger btn-sm btn-white T-delGuide pull-right">'+
	                    '<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>'+
	                '</button>'+/*删除导游*/
		        '</div>'+
			'</td>';
		}else{
			var guideName = guideData[0].guideName,
				guideArrangeId = guideData[0].id;
			guideTd = '<td name="guideName">'+
		        '<div class="div-h-30 mar-t-5" index="1">'+
		        	'<span>'+guideName+'</span>'+
					'<input type="hidden" name="guideArrangeId"value="'+guideArrangeId+'">'+
		        '</div>'+
			'</td>';
		};
		var tdHtml = 
		guideTd+
		'<td name="guideRealCount">'+
			divHtml+
			'<div class="div-h-30 mar-t-5" index="1">'+
				'<input name="guideRealCount" type="text" class="w-50 F-float F-count"/>'+
			'</div>'+
		'</td>'+
		'<td name="guidePayedMoney">'+
			divHtml+
			'<div class="div-h-30 mar-t-5 inline-flex" index="1">'+
				'<select name="payType">'+
					'<option value="0">现金</option>'+
					'<option value="1">刷卡</option>'+
					'<option value="2">签单</option>'+
				'</select>'+
				'<input name="guidePayedMoney" type="text" class="w-70 F-float F-money"/>'+
			'</div>'+
		'</td>'+
		'<td name="billImage">'+
			divHtml+
			'<div class="div-h-30 mar-t-5" index="1">'+
				'<span style="color:#bbb;">查看</span>'+
			'</div>'+
		'</td>'+
		
		'<td name="billRemark">'+
			divHtml+
			'<div class="div-h-30 mar-t-5" index="1">'+
				'<input name="billRemark" type="text"/>'
			'</div>'+
		'</td>';
		return tdHtml;
	};
	//新增安排单导html拼接
	Count.addArrangeGuideHtml = function(td,tdName,$parentObj){
		var guideData = [];
		if($parentObj.find('.countReimbursement').length){
			guideData = Count.reimbursementGuide.listMap;
		};//报账
		if($parentObj.find('.countUpdate').length){
			guideData = Count.updateGuide.listMap;
		};//审核
		var	guideCount = guideData.length,
			guideName = guideData[0].guideName,
			guideArrangeId = guideData[0].id,
			guideHtml = '';
		var divHtml = Count.returnDivHtml($parentObj);
		if(tdName == 'currGuide'){
			guideHtml = '<td rowspan="2" name="'+tdName+'">'+
				divHtml+
				'</div>'+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<span class="guideName">'+guideName+'</span>'+
					'<input name="guideArrangeId" type="hidden" value="'+guideArrangeId+'"/>'+
				'</div>'+
			'</td>';
		}else if (tdName == 'otherIn'){
			guideHtml = '<td name="'+tdName+'">'+
					'<span class="guideName">'+guideName+'</span>'+
					'<input name="guideArrangeId" type="hidden" value="'+guideArrangeId+'"/>'+
			'</td>';
		}else{
			guideHtml = '<td name="'+tdName+'">'+
				divHtml+
				'</div>'+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<span class="guideName">'+guideName+'</span>'+
					'<input name="guideArrangeId" type="hidden" value="'+guideArrangeId+'"/>'+
				'</div>'+
			'</td>';
		};
		if(guideCount>1){
			guideHtml = td;
		};
		return guideHtml;
	};
	//购物人数返佣、停车返佣导游html
	Count.shopPersonAndBusGuide = function($obj,$parentObj){
		var shopGuideMoney = '<input name="shopGuideMoney" class="w-70" type="text">',
				imgTd = '-',
				billRemark = '-';
		if(!!$obj){
			imgTd = '<span style="color:#bbb;">查看</span>';
			billRemark = '<input name="billRemark"  class="w-80" type="text">';
		};
		var divHtml = Count.returnDivHtml($parentObj);
		var html = '<td name="shopGuideMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5"  index="1">'+
					shopGuideMoney+
				'</div>'+
			'</td>'+
			'<td name="imgTd" index="1">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					imgTd+
				'</div>'+
			'</td>'+
			'<td name="billRemark" index="1">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					billRemark+
				'</div>'+
			'</td>'+
			'<td name="guideRate" index="1">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="guideRate" class="w-50" type="text">'+
				'</div>'+
			'</td>'+
			'<td name="guideRateMoney" >'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="guideRateMoney" type="text" class="w-70"/>'+
				'</div>'+
			'</td>'+
			'<td name="quanpeiRebate">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="quanpeiRebate" type="text" class="w-50"/>'+
				'</div>'+
			'</td>'+
			'<td name="quanpeiRebateMoney">'+
				divHtml+
				'<div class="div-h-30 mar-t-5" index="1">'+
					'<input name="quanpeiRebateMoney" type="text" class="w-70"/>'+
				'</div>'+
			'</td>'+
			'<td>'+
				divHtml+
				'<input name="travelAgencyRate" type="text" class="w-50" value="100"/>'+
			'</td>'+
			'<td>'+
				divHtml+
				'<input name="travelAgencyRateMoney" type="text" class="w-70"/>'+
			'</td>';
			return html;
	};
	//主页时间控件绑定
	Count.setDatePicker = function($obj) {
	    options = $.extend({}, {
	        autoclose: true,
	        todayHighlight: true,
	        format: 'yyyy-mm-dd',
	        language: 'zh-CN'
	    });
	    
	    $obj.datepicker(options);
	    var $start = $obj.eq(0),
	    	$end = $obj.eq(1);
	    $start.on("change",function(event){
	     	event.preventDefault();
	        var startDate = $(this).val(),
	           	endDate = $end.val();
	        $end.datepicker('setStartDate', startDate);
	        if(endDate == ""){
	        	$end.val("");
	        } else if($end.val() < startDate){
	        	$end.val(startDate);
	        }
	    });
	    if (!!$start.val()) {
	    	$start.trigger('change');
	    }
	    return $obj;
	};
	//校验团款的接受状态
	Count.checkTripIsReceived = function($obj){
		var $tripDetail = $obj.find('.T-tripDetail');
		var $trArr = $tripDetail.find('tr');
		var isReceived = false;
		$trArr.each(function(i){
			var receiveStatus = $(this).find('[name=receiveStatus]').val();
			if(receiveStatus == 0){
				isReceived = true;
			};
		});
		return isReceived;
	};
	//显示隐藏列表
	Count.showOrhideList = function($obj){
		$obj.find('.T-toggle-List').off('click.toggle').on('click.toggle', function() {
			var $this = $(this), $tbody = $this.closest('h5').next();
			if ($this.hasClass('T-show')) {
				$this.addClass('T-hide');
				$tbody.hide();
				$this.text('展开');
				$this.removeClass('T-show');
			}else if ($this.hasClass('T-hide')) {
				$this.addClass('T-show');
				$tbody.show();
				$this.text('收起');
				$this.removeClass('T-hide');
			}
		});

	};
	Count.showFormula = function($obj){
		var selfFormula = $obj.find('.T-formula-List');
		if(selfFormula.hasClass('hide')){
			selfFormula.removeClass('hide');
			selfFormula.show();
		}else{
			selfFormula.addClass('hide');
		}
	}

	//循环去除导佣、社佣的小数位
	Count.formatShopRate = function(data){
		var newRateArr = data;
		for(var i = 0;i<newRateArr.length;i++){
			var shopItemList = newRateArr[i].itemList;
			for(var j = 0;j<shopItemList.length;j++){
				if(shopItemList[j].guideDetails.length){
					var guideData = shopItemList[j].guideDetails;
					for(var k = 0;k<guideData.length;k++){
						guideData[k].guideRate = ((Math.round(guideData[k].guideRate*100)));
						guideData[k].quanpeiRebate = ((Math.round(guideData[k].quanpeiRebate*100)));
					}
				}else{
					shopItemList[j].guideRate = ((Math.round(shopItemList[j].guideRate*100)));
				}
				shopItemList[j].travelAgencyRate = ((Math.round(shopItemList[j].travelAgencyRate*100)));
			}
			newRateArr[i].twoRebate = ((Math.round(newRateArr[i].twoRebate*100)));
		};
		return newRateArr;
	};
	//循环去除导佣、社佣的小数位
	Count.formatSelfRate = function(data){
		var newRateArr = data;
		for(var i = 0;i<newRateArr.length;i++){
			var selfPayItem = newRateArr[i].selfPayItem;
			for(var j = 0;j<selfPayItem.length;j++){
				if(selfPayItem[j].guideDetails.length){
					var guideData = selfPayItem[j].guideDetails;
					for(var k = 0;k<guideData.length;k++){
						guideData[k].guideRate = ((Math.round(guideData[k].guideRate*100)));
						guideData[k].travelAgencyRate = ((Math.round(guideData[k].travelAgencyRate*100)));
						guideData[k].quanpeiRebate = ((Math.round(guideData[k].quanpeiRebate*100)));
					}
				};
			}
		};
		return newRateArr;
	};

	//权限过滤
	Count.filterUnAuth = function(obj) {
		if(!obj){
			return;
		}
		var $obj = $(obj);
		$obj.find(".R-right").each(function(){
			var auth = Count.authCheck($(this).data("right"));
			if(!auth){
				$(this).removeClass('T-toAccount').addClass('black');
			} else if(auth == "check" && $(this).hasClass('T-clear')){
				//如果同时有取消对账和付款权限，付款权限优先
				$(this).removeClass('T-clear').addClass('T-check');
			}
		});
		return $obj;
	}

	Count.authCheck = function(codes){
		var auth = false;
		if (!IndexData.userInfo || !IndexData.userInfo.listUserFunctionShip){
			return res;
		}
		var functionList = IndexData.userInfo.listUserFunctionShip;
		codes = (codes+'').split('|');	//考虑权限合并的情况

		if(Object.prototype.toString.call(codes) === '[object Array]'){
			codes.forEach(function(code,index) {
				if (functionList.indexOf(code) >= 0) {
					if(index == 0){
						auth = "check";
					} else if(index == 1){
						auth = "clear";
					}
				}
			});
		}
		return auth;
	};

	exports.init = Count.initModule;
	exports.tripDetail = Count.viewTripDetail;
	exports.viewTripAccount = Count.viewTripAccount;
});