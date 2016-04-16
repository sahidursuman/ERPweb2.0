define(function(require, exports){
	var menuKey = 'financial_count',
		listHeaderTamplate = require('./view/listHeader'),
		listTableTemplate = require('./view/listTable'),
		updateTemplate = require("./view/update"),
		Reimbursement = require("./view/Reimbursement"),
		arrangeDetailTempLate = require("./view/arrangeDetail"),
		
		qualityTempLate = require("./view/quality"),
		billImageTempLate = require("./view/billImage"),
		outDetailTempLate = require("./view/outDetail"),
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
		guideTamplate = require('./view/guideAccount'),
		addFeeTemplate = require('./view/addFee'),
		viewCostRemarkTemplate = require('./view/viewCostRemark'),
		updateTabId = menuKey+"-update",
		ReimbursementId = menuKey+"-Reimbursement",
		detailId= menuKey + "-detail",
		outDetailId= menuKey + "-outDetail",
		qualityId = menuKey+"-quality",
		tripDetailId = menuKey+"-tripDetail",
		listTabId = menuKey,

		shopNoneAutoFeilds = ['billRemark', 'shopPolicyName', 'currInCome'];
	var Count = {
		$listTab:false,
		$updateTab:false,
		$ReimbursementTab:false,
		$listBodyTab:false,
		$searchArea:false,
		$args:{},
		shopClickCount:0,
		shopInputCount:0
	};
	//暴露的方法--初始化列表
	Count.initModule = function(){
		Count.listCountHeader(0,'','','','','','','')
	};
	//列表头部
	Count.listCountHeader = function(pageNo,id,tripNumber,lineProductId,lineProductName,guideId,guideName,startTime,endTime,status){

		var timeStatus;
		if(Count.$searchArea && arguments.length === 1){
			console.log(Count.$searchArea.find(".T-time-status").data("value"));
			id:"",
			tripNumber = Count.$searchArea.find('input[name=chooseTripNumber]').val();
			lineProductId = Count.$searchArea.find('input[name=lineProductId]').val();
			lineProductName = Count.$searchArea.find('input[name=chooseLineProductName]').val();
			guideId = Count.$searchArea.find('input[name=guideId]').val();
			guideName = Count.$searchArea.find('input[name=chooseGuideRealName]').val();
			endTime = Count.$searchArea.find('input[name=endTime]').val();
			startTime = Count.$searchArea.find('input[name=startTime]').val();
			status = Count.$searchArea.find(".T-select-status").attr("data-value");
			timeStatus = Count.$searchArea.find(".T-time-status").find('button').data("value")
		} 
		timeStatus = timeStatus || 0
		//修正页码
		pageNo = pageNo || 0;
		$.ajax({
			url:KingServices.build_url("financialTripPlan","findFinancialListPageCount"),
			type:'POST',
			data:{
				id:id,
                tripNumber:tripNumber,
                lineProductId:lineProductId,
                guideId:guideId,
                endTime:endTime,
                startTime:startTime,
                billStatus:status,
                lineProductName:lineProductName,
                guideName:guideName,
                timeStatus : timeStatus
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					var html = listHeaderTamplate(data);
					Tools.addTab(listTabId,'报账审核',html);
					Count.shopClickCount = 0;
					var $listTabId = $("#tab-"+listTabId+"-content");
					Count.$listTab = $listTabId;
					Count.$searchArea = $listTabId.find('.T-search-area');
					//获取主体列表数据
					Count.$args={
						pageNo:pageNo,
						id:id,
		                tripNumber:tripNumber,
		                lineProductId:lineProductId,
		                guideId:guideId,
		                endTime:endTime,
		                startTime:startTime,
		                billStatus:status,
		                lineProductName:lineProductName,
		                guideName:guideName,
		                timeStatus : timeStatus
					};
					//获取主体列表数据
					Count.listCountBody(Count.$args);
                	//格式化日期
                	Count.setDatePicker(Count.$searchArea.find('.datepicker'));
                	//获取搜索区域的列表数据
                	var $lineProductObj = Count.$searchArea.find("input[name=chooseLineProductName]");//获取线路
                	Count.getLineproductData($lineProductObj);
                	var $guideObj = Count.$searchArea.find('input[name=chooseGuideRealName]');//获取导游
                	Count.getGuideData($guideObj);
                	//搜索区域事件绑定
                	Count.initListHeaderEvents();
				}
			}
		});
	};

	//搜索区域事件
	Count.initListHeaderEvents = function(){
		var $searchObj = Count.$searchArea;
			$listObj = Count.$listTab;

		//搜索事件
		$searchObj.find(".T-search").on('click',function(event){
			event.preventDefault();
			Count.listCountHeader(0);
		});
		//状态栏事件
		$searchObj.find(".T-sleect-ul").on('click','a',function(){
			$(this).closest('div').find(".T-select-status").attr("data-value",$(this).attr("data-value"));
			$(this).closest('div').find("span").text($(this).text());
			Count.listCountHeader(0);
		});
        $searchObj.find(".T-time-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            Count.listCountHeader(0);
        });
	};
	//获取主体列表数据
	Count.listCountBody = function($data){
		$.ajax({
			url:KingServices.build_url("financialTripPlan","listFinancialTripPlan"),
			type:'POST',
			data:$data,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var tripPlanList = JSON.parse(data.tripPlanList);
                    data.tripPlanList = tripPlanList;
					var html = listTableTemplate(data);
					html = Count.authFilter(html,data.tripPlanList);
					Count.$listTab.find(".T-counterList").html(html);
					Count.listEvents();
					laypage({
	                    cont: Count.$listTab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
	                    pages: data.totalPage, //总页数
	                    curr: ($data.pageNo + 1),
	                    jump: function(obj, first) {
	                        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
	                            Count.listCountHeader(obj.curr -1);
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
				guideFinancialExamine = $that.closest('tr').attr('guideFinancialExamine');
			if($that.hasClass('T-update')){
				
				//未报账
				if(billStatus == -1){
					showMessageDialog($( "#confirm-dialog-message" ), "导游未报账，不能做审核操作");	
				}else if(guideFinancialExamine == 1){
					//导游已报账
					showMessageDialog($( "#confirm-dialog-message" ), '该团导游账务已对账，不能修改！');
				}else{
					//审核事件
					Count.updateExamine(id);
				}
			}else if($that.hasClass('T-account')){
				//报账事件
			    var id = $(this).attr('data-entity-id');
            	var billStatus = $(this).attr('data-entity-billStatus');
            	if(billStatus == -1 || billStatus == "-1") {
            		Count.Reimbursement(id);
            	} else {
            		showMessageDialog($( "#confirm-dialog-message" ), "本团已报账，不能重复操作！", function(){});
            	}
			}else if($that.hasClass('T-quality')){
				//质量统计事件绑定
				var tripId = $(this).data('id'); 
                Count.getquality(tripId);
			}else if($that.hasClass('T-detail')){
				//单团明细
				var tripId = $(this).attr('data-entity-id');
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
					var tmp = {
	                    "busCompanyArrange":JSON.parse(data.busCompanyArrange),
	                    "tripPlan":JSON.parse(data.tripPlan),
	                    "dayList":JSON.parse(data.dayList),
	                    "guideArrange":data.guideArranges,
                    	"guideArranges":JSON.parse(data.guideArranges.guideArranges),
	                    "insuranceArrangeList":JSON.parse(data.insuranceArrangeList),
	                    "ticketArrangeList":JSON.parse(data.ticketArrangeList),
	                    "WEB_IMG_URL_BIG":data.WEB_IMG_URL_BIG,
	                    "WEB_IMG_URL_SMALL":data.WEB_IMG_URL_SMALL,
	                    "touristGroup":data.touristGroup,
	                    "tripCost":data.touristGroup,
	                    "touristGroups":JSON.parse(data.touristGroup.touristGroups),
	                    "financialTripPlanId":data.financialTripPlanId,
	                    "insurancePrice":data.insurancePrice,
	                    "arrangeIncomePaymentList":JSON.parse(data.arrangeIncomePaymentList),
	                    "remarkArrangeList": JSON.parse(data.remarkArrangeList)
	                };
	                tmp.remarkArrangeList = Count.handleRemark(tmp.remarkArrangeList);
	                var html = tripDetailTempLate(tmp);
	                Tools.addTab(tripDetailId,'单团明细',html);
	                var $detailId = $("#tab-"+tripDetailId+"-content");
	                //查看团款明细说明
					$detailId.find('.T-viewCostDetail').on('click',function(){
						Count.viewCostDetail($(this),tmp.touristGroups);
					});
	                //绑定自动计算事件
	                Count.detailEvents($detailId);
				}
			}
		});
	};
	//单团明细页面事件
	Count.detailEvents = function($obj){
		var $listObj = $obj.find('.T-list');
		
		//中转明细
		var $tripDetailObj = $listObj.find('.T-transit');
		$tripDetailObj.find('.T-viewTripTransit').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
			KingServices.viewTransit(id);
		});
		//按钮事件--单团核算表
		$obj.find('.T-tripAccount').off('click').on('click',function(){
			var id = $obj.find('[name=financialTripPlanId]').val();
			var pluginKey = 'plugin_print';
			Tools.loadPluginScript(pluginKey);
			Count.viewTripAccount(id);
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
		//购物
		var $shopObj = $listObj.find('.T-count-shopping');
		$shopObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.calculateCost($(this));
			//计算金额
			Count.autoShopSum($(this),$obj);
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
		//触发页面的change事件
		$obj.find('input[type=hidden]').trigger('change');
		//计算中转成本
		Count.tripTransferCost($obj);
		//计算团收入
		Count.tripIncome($obj);
		//计算成本
		Count.tripCost($obj);
		//按钮时间--安排预算表
		$obj.find('.T-tripPlanArrange').off('click').on('click',function() {
			var id = $obj.find('.financial-tripPlanId').val();
			
			KingServices.viewTripDetail(id);
		});
		//触发页面的change事件
		$obj.find('input[type=hidden]').trigger('change',function(){
			Count.formatDays($(this),$obj);
		});
		//查看图片事件
		$listObj.find('.btn-view').off('click').on('click',function(){
			var $that = $(this);
			var url = $that.attr("url");
			var bigImg = $obj.find('input[name=WEB_IMG_URL_BIG]').val();
			var smallImg = $obj.find('input[name=WEB_IMG_URL_SMALL]').val();
			Count.viewImages(url,bigImg,smallImg);
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
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var tmp = {
						"editStatus":1,
	                    "busCompanyArrange":JSON.parse(data.busCompanyArrange),
	                    "tripPlan":JSON.parse(data.tripPlan),
	                    "dayList":JSON.parse(data.dayList),
	                    "guideArrange":data.guideArranges,
	                    "guideArranges":JSON.parse(data.guideArranges.guideArranges),
	                    "insuranceArrangeList":JSON.parse(data.insuranceArrangeList),
	                    "ticketArrangeList":JSON.parse(data.ticketArrangeList),
	                    "WEB_IMG_URL_BIG":data.WEB_IMG_URL_BIG,
	                    "WEB_IMG_URL_SMALL":data.WEB_IMG_URL_SMALL,
	                    "touristGroup":data.touristGroup,
	                    "tripCost":data.touristGroup,
	                    "touristGroups":JSON.parse(data.touristGroup.touristGroups),
	                    "financialTripPlanId":data.financialTripPlanId,
	                    "insurancePrice":data.insurancePrice,
	                    "arrangeIncomePaymentList":JSON.parse(data.arrangeIncomePaymentList),
	                    "remarkArrangeList": JSON.parse(data.remarkArrangeList),
	                    "id": $id
	                };
	                var html = Reimbursement(tmp);
	                Tools.addTab(ReimbursementId,'单团报账',html);
	                var $ReimbursementId = $("#tab-"+ReimbursementId+"-content");
					Count.$ReimbursementTab = $ReimbursementId;
					//查看团款明细说明
					$ReimbursementId.find('.T-viewCostDetail').on('click',function(){
						Count.viewCostDetail($(this),tmp.touristGroups);
					});
					//加载列表
					Count.installList($ReimbursementId,tmp);
				}
			}
		});
	};
	//单团报账页面事件
	Count.reimbursementEvents = function($obj){
		// 禁用自动计算的判断条件
		Count.loading = true;
		var $listObj = $obj.find('.T-list');
		
		//中转明细
		var $tripDetailObj = $listObj.find('.T-transit');
		$tripDetailObj.find('.T-viewTripTransit').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
			KingServices.viewTransit(id);
		});
		//导游金额计算
		var $guideObj = $listObj.find('.T-count-guide');
		$guideObj.find('input[type=text]').off('change').on('change',function(){
			var $that = $(this),
				tagName = $that.attr('name');
			if (tagName !='remark') {
				Count.calculateCost($that);
				//计算金额
				Count.autoGuideSum($that,$obj);
			}

		});
		//购物处理--计算、新增
		var $shopObj = $listObj.find('.T-count-shopping');
		$shopObj.off('click').on('click','.T-addShop',function(){
			Count.addShop($(this),$obj);
		}).on('click','.T-shopArrDelItem',function(){
			Count.delShop($(this),$obj);
		}).on('blur','input[name=consumeMoney]',function(){
			//填写金额带出社佣、导佣 T-del
			var shopPolicyId = $(this).attr('policyId') || $(this).closest('tr').find('input[name=shopPolicyId]').val();
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
					Count.totalRebeatMoney($(this),$obj);
				} else {
					Count.autoShopSum($that,$obj);
					Count.totalRebeatMoney($(this),$obj);
				}
			}
			Count.formatDays($that,$obj);
		}).on('click','.T-shopArrDelItem',function(){
			Count.delShop($(this),$obj);
		});
		$listObj.find('.T-math-round').off('click').on('click', function(){
			//清除小数点
			Count.delValDecimal($(this),$shopObj,$obj);
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
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "billRemark" && $nameFlag !="selfPayItemName" && $nameFlag !="selfPayItem"){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算自费金额
				
				//计算金额
				if (Count.loading) {
					Count.autoSelfSum($(this),$obj);
				} else {
					Count.sumRateMoney($(this),$obj);
				}
			}
			Count.formatDays($(this),$obj);
		});
		//删除只安排了自费点没有安排自费项目的数据
		$selfObj.on('click','.T-selfArrDel',function(){
			
			Count.delSelfArrange($(this),$obj);
		});

		if($selfObj.find('input[name=selfPayItemName]').length>0){
			var selfPayItemNameObj = $selfObj.find('input[name=selfPayItemName]');
			selfPayItemNameObj.each(function(){
				Count.getSelfItemData($(this).closest('tr'),$obj);
			});
		};
		//新增自费安排
		$listObj.find('.T-self-add').find('.T-addSelf').off('click').on('click',function(){
			Count.addSelf($selfObj,$obj);
		});
		//其他收入--计算、新增
		var $otherIn = $listObj.find('.T-count-otherIn');
		$otherIn.off('change').on('change','input',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "title" && $nameFlag != "billRemark"){
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
			var $nameFlag = $(this).attr('name');
			if($nameFlag !="startTime" && $nameFlag !="endTime" && $nameFlag != "companyName" && $nameFlag != "licenseNumber" && $nameFlag != "seatCount" && $nameFlag != "billRemark" ){
				Count.autoBusSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		$busObj.off('click').on('click','.T-busArrDel',function(){
			Count.sumBusFeeAfDel($(this),$obj);
		});
		//新增车费
		$listObj.find('.T-buspay-add').off('click').on('click',function(){
			Count.addBus($busObj,$obj);
		});
		
		//餐费处理--计算、新增
		var $restObj = $listObj.find('.T-count-restaurant');
		$restObj.off('change').on('change','input',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "billRemark"){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				Count.autoRestaurantSum($(this),$obj);
			}
			Count.formatDays($(this),$obj);
		});
		$restObj.off('click').on('click','.T-restArrDel',function(){
			//删除安排
			Count.delRestArrange($(this),$obj);
		});
		//新增餐费安排
		$listObj.find('.T-restaurantpay-add').off('click').on('click',function(){
			Count.addRest($restObj,$obj);
		});
		//房费处理--计算、新增
		var $hotelObj = $listObj.find('.T-count-hotel');
		$hotelObj.off('change').on('change','input',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "hotelName"  && $nameFlag !="hotelRoom" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				Count.autoHotelSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
		});
		//删除房间安排T-hotelArrDel
		$hotelObj.off('click').on('click','.T-hotelArrDel',function(){
			Count.delHotelArrange($(this),$obj);
		});
		
		//新增房费
		$listObj.find('.T-hotel-add').off('click').on('click',function(){
			Count.addHotel($hotelObj,$obj);
		});
		//景区处理--计算、新增
		var $scenicObj = $listObj.find('.T-count-scenic');
		$scenicObj.off('change').on('change','input',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "scenicName"  && $nameFlag != "billRemark" && $nameFlag !='scenicItem'){
				Count.calculateCost($(this));
				Count.autoScenicSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		//删除景区安排
		$scenicObj.off('click').on('click','.T-secnicArrDel',function(){
			Count.delSecnicArrange($(this),$obj);
		});
		//新增景区
		$listObj.find('.T-scenic-add').off('click').on('click',function(){
			Count.addScenic($scenicObj,$obj);
		});
		//票务处理--计算、新增
		var $ticketObj = $listObj.find('.T-count-ticket');
		$ticketObj.off('change').on('change','input',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "seatLevel" && $nameFlag != "startArea" && $nameFlag != "shift" && $nameFlag != "ticketType" && $nameFlag != "billRemark" && $nameFlag != "startTime" && $nameFlag != "endArea"){
				Count.calculateCost($(this));
				Count.autoTicketSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		//删除票务安排
		$ticketObj.off('click').on('click','.T-ticketArrDel',function(){
			Count.delTicketArrange($(this),$obj);
		});
		//新增票务
		$listObj.find('.T-ticket-add').off('click').on('click',function(){
			Count.addTicket($ticketObj,$obj);
		});
		//其他支出
		var $otherOutObj = $listObj.find('.T-count-otherOut');
		$otherOutObj.off('change').on('change','input',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "addOtherOutName" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				Count.autoOtherOutSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
		});
		//删除其他安排
		$otherOutObj.off('click').on('click','.T-otherOutArrDel',function(){
			Count.delOtherOutArrange($(this),$obj);
		});
		//新增其他支出
		$listObj.find('.T-otherOut-add').off('click').on('click',function(){
			Count.addOtherOut($otherOutObj,$obj);
		});
		//计算中转成本
		Count.tripTransferCost($obj);
		//计算团收入
		Count.tripIncome($obj);
		//触发页面的change事件
		$obj.find('input').change();
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
				showConfirmDialog($( "#confirm-dialog-message" ), 
					'提交报账，团款现收将默认为已收到', function() {
					Count.saveTripCount(id,financialTripPlanId,$obj,3);
				});
			}else{
				Count.saveTripCount(id,financialTripPlanId,$obj,3);
			};
            
            
		});
		//查看图片事件
		$listObj.find('.btn-view').off('click').on('click',function(){
			var $that = $(this);
			var url = $that.attr("url");
			var bigImg = $obj.find('input[name=WEB_IMG_URL_BIG]').val();
			var smallImg = $obj.find('input[name=WEB_IMG_URL_SMALL]').val();
			Count.viewImages(url,bigImg,smallImg);
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
					
					var tmp = {
							"editStatus":0,
							"busCompanyArrange":JSON.parse(data.busCompanyArrange),
							"tripPlan":JSON.parse(data.tripPlan),
							"dayList":JSON.parse(data.dayList),
							"guideArrange":data.guideArranges,
	                    	"guideArranges":JSON.parse(data.guideArranges.guideArranges),
							"insuranceArrangeList":JSON.parse(data.insuranceArrangeList),
							"ticketArrangeList":JSON.parse(data.ticketArrangeList),
							"WEB_IMG_URL_BIG":data.WEB_IMG_URL_BIG,
							"WEB_IMG_URL_SMALL":data.WEB_IMG_URL_SMALL,
							"touristGroup":data.touristGroup,
							"tripCost":data.touristGroup,
							"touristGroups":JSON.parse(data.touristGroup.touristGroups),
							"financialTripPlanId":data.financialTripPlanId,
							"insurancePrice":data.insurancePrice,
							"arrangeIncomePaymentList":JSON.parse(data.arrangeIncomePaymentList),
							"remarkArrangeList": JSON.parse(data.remarkArrangeList),
							"id": $id
                        };
					if(isAuth("1190002")){
                        tmp.isOp = true;
                    };
                    if(isAuth("1190003")){
                        tmp.isFinance = true;
                    };
                    tmp.remarkArrangeList = Count.handleRemark(tmp.remarkArrangeList);
					var html = updateTemplate(tmp);
					Tools.addTab(updateTabId,'单团审核',html);
					var $updateTabId = $("#tab-"+updateTabId+"-content");
					Count.$updateTab = $updateTabId;
					//查看团款明细说明
					$updateTabId.find('.T-viewCostDetail').on('click',function(){
						Count.viewCostDetail($(this),tmp.touristGroups);
					});
					//加载列表
					Count.installList($updateTabId,tmp);
				}
			}
		});
	};
	//查看团款明细说明 viewCostRemarkTemplate
	Count.viewCostDetail = function($obj,data){
		var tr = $obj.closest('tr'),id = tr.attr('id'),
			subStatus = tr.attr('subStatus'),
        	isInnerTransferConfirm =tr.attr('isInnerTransferConfirm');
		var tmp = {};
		if(data.length>1){
			for(var i = 0;i<data.length;i++){
				if(id == data[i].id){
					if(subStatus== 1){
						tmp.touristGroupFeeList = data[i].touristGroupSubFeeList
					}else{
						tmp.touristGroupFeeList = data[i].touristGroupFeeList
					};
					break;
				}
				
			}
		}else{
			if(subStatus== 1){
				tmp.touristGroupFeeList = data[0].touristGroupSubFeeList
			}else{
				tmp.touristGroupFeeList = data[0].touristGroupFeeList
			};
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
	Count.updateEvent = function($obj){//页面tabid--$obj
		// 禁用自动计算的判断条件
		Count.loading = true;
		var $listObj = $obj.find('.T-list');
		//中转明细
		var $tripDetailObj = $listObj.find('.T-transit');
		$tripDetailObj.find('.T-viewTripTransit').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
			KingServices.viewTransit(id);
		});
		//团款明细的说明
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
		$guideObj.find('input[type=text]').off('change').on('change',function(){
			var $that = $(this);
				tagName = $that.attr('name');
			if (tagName !='remark') {
				Count.calculateCost($that);
				//计算金额
				Count.autoGuideSum($that,$obj);
			}
		});
		//购物处理--计算、新增
		var $shopObj = $listObj.find('.T-count-shopping');
		
		$shopObj.on('click','.T-addShop',function(){
			Count.addShop($(this),$obj);
		}).on('click','.T-shopArrDelItem',function(){
			Count.delShop($(this),$obj);
		}).on('blur','input[name=consumeMoney]',function(){
			//填写金额带出社佣、导佣 T-del
			var shopPolicyId = $(this).attr('policyId') || $(this).closest('tr').find('input[name=shopPolicyId]').val();
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
					Count.totalRebeatMoney($(this),$obj);
				} else {
					Count.autoShopSum($that,$obj);
					Count.totalRebeatMoney($(this),$obj);
				}
				Count.formatDays($that,$obj);
			}
		});
		$listObj.find('.T-math-round').off('click').on('click' ,function(){
			//清除小数点
			Count.delValDecimal($(this),$shopObj,$obj);
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
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "billRemark" && $nameFlag !="selfPayItemName"){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				if (Count.loading) {
					Count.autoSelfSum($(this),$obj);
				} else {
					Count.sumRateMoney($(this),$obj);
				}
				Count.formatDays($(this),$obj);
			}
		});
		//删除只安排了自费点没有安排自费项目的数据
		$selfObj.on('click','.T-selfArrDel',function(){
			
			Count.delSelfArrange($(this),$obj);
		});
		//新增自费安排
		$listObj.find('.T-self-add').find('.T-addSelf').off('click').on('click',function(){
			Count.addSelf($selfObj,$obj);
		});
		if($selfObj.find('input[name=selfPayItemName]').length>0){
			var selfPayItemNameObj = $selfObj.find('input[name=selfPayItemName]');
			selfPayItemNameObj.each(function(){
				Count.getSelfItemData($(this).closest('tr'),$obj);
			});
		};
		//其他收入--计算、新增
		var $otherIn = $listObj.find('.T-count-otherIn');
		$otherIn.off('change').on('change','input',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "title" && $nameFlag != "billRemark"){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				Count.autoOtherInSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
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
			var $nameFlag = $(this).attr('name');
			if($nameFlag !="startTime" && $nameFlag !="endTime" && $nameFlag != "companyName" && $nameFlag != "licenseNumber" && $nameFlag != "seatCount" && $nameFlag != "billRemark" ){
				Count.autoBusSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		$busObj.off('click').on('click','.T-busArrDel',function(){
			Count.sumBusFeeAfDel($(this),$obj);
		});
		//新增车费
		$listObj.find('.T-buspay-add').off('click').on('click',function(){
			Count.addBus($busObj,$obj);
		});
		//餐费处理--计算、新增
		var $restObj = $listObj.find('.T-count-restaurant');
		$restObj.off('change').on('change','input',function(){
			Count.autoRestaurantSum($(this),$obj);
			Count.formatDays($(this),$obj);
		});
		$restObj.off('click').on('click','.T-restArrDel',function(){
			//删除安排
			Count.delRestArrange($(this),$obj);
		});
		//新增餐费安排
		$listObj.find('.T-restaurantpay-add').off('click').on('click',function(){
			Count.addRest($restObj,$obj);
		});
		//房费处理--计算、新增
		var $hotelObj = $listObj.find('.T-count-hotel');
		$hotelObj.off('change').on('change','input',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "hotelName"  && $nameFlag !="hotelRoom" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				Count.autoHotelSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		//删除房间安排
		$hotelObj.off('click').on('click','.T-hotelArrDel',function(){
			Count.delHotelArrange($(this),$obj);
		});
		//新增房费
		$listObj.find('.T-hotel-add').off('click').on('click',function(){
			Count.addHotel($hotelObj,$obj);
		});
		//景区处理--计算、新增
		var $scenicObj = $listObj.find('.T-count-scenic');
		$scenicObj.off('change').on('change','input',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "scenicName"  && $nameFlag != "billRemark" && $nameFlag !='scenicItem'){
				Count.calculateCost($(this));
				Count.autoScenicSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		//删除景区安排
		$scenicObj.off('click').on('click','.T-secnicArrDel',function(){
			Count.delSecnicArrange($(this),$obj);
		});
		
		//新增景区
		$listObj.find('.T-scenic-add').off('click').on('click',function(){
			Count.addScenic($scenicObj,$obj);
		});
		//票务处理--计算、新增
		var $ticketObj = $listObj.find('.T-count-ticket');
		$ticketObj.off('change').on('change','input',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "seatLevel" && $nameFlag != "startArea" && $nameFlag != "shift" && $nameFlag != "ticketType" && $nameFlag != "billRemark" && $nameFlag != "startTime" && $nameFlag != "endArea"){
				Count.calculateCost($(this));
				Count.autoTicketSum($(this),$obj);
				Count.formatDays($(this),$obj);
			}
			
		});
		//删除票务安排
		$ticketObj.off('click').on('click','.T-ticketArrDel',function(){
			Count.delTicketArrange($(this),$obj);
		});
		//新增票务
		$listObj.find('.T-ticket-add').off('click').on('click',function(){
			Count.addTicket($ticketObj,$obj);
		});
		//其他支出
		var $otherOutObj = $listObj.find('.T-count-otherOut');
		$otherOutObj.off('change').on('change','input',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "addOtherOutName" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				Count.autoOtherOutSum($(this),$obj);
				Count.formatDays($(this),$obj);
			};
			
		});
		//删除其他安排
		$otherOutObj.off('click').on('click','.T-otherOutArrDel',function(){
			Count.delOtherOutArrange($(this),$obj);
		});
		//新增其他支出
		$listObj.find('.T-otherOut-add').off('click').on('click',function(){
			Count.addOtherOut($otherOutObj,$obj);
		});
		//触发页面的change事件
		$obj.find('input').trigger('change');
		//计算中转成本
		Count.tripTransferCost($obj);
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
			showConfirmDialog($( "#confirm-dialog-message" ), "退回计调后，将需要等计调审核过后您才能再次操作，您确定要这样做吗？", function(){
				Count.reback(id, billStatus, financialTripPlanId);
			});
		});
		//按钮事件--退回导游
		$obj.find('.T-rebackGuide').off('click').on('click',function() {
			var id = $(this).attr('data-entity-id');
			var billStatus = $(this).attr('data-entity-billStatus');
			var financialTripPlanId = $(this).attr('data-entity-financial-id');
			showConfirmDialog($( "#confirm-dialog-message" ), "退回导游后，将需要等导游报账过后您才能再次操作，您确定要这样做吗？", function(){
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
		//查看图片事件
		$listObj.find('.btn-view').off('click').on('click',function(){
			var $that = $(this);
			var url = $that.attr("url");
			var bigImg = $obj.find('input[name=WEB_IMG_URL_BIG]').val();
			var smallImg = $obj.find('input[name=WEB_IMG_URL_SMALL]').val();
			Count.viewImages(url,bigImg,smallImg);
		});
		//查看操作记录事件
		$obj.find('.btn-financialLog').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
			id = $obj.find('.financial-tripPlanId').val();
			Count.viewTripLog(id);
		});

		Count.loading = false;
	};
	//加载list
	Count.installList = function($obj,data){
		//加载购物安排列表
		var shopHtml = shopArrangeTemplate(data);
		$obj.find('.T-shop-add').html(shopHtml);

		//加载自费安排列表
		var selfHtml = selfArrangeTemplate(data);
		$obj.find('.T-self-add').html(selfHtml);

		//加载其他收入安排列表
		var otherInHtml = otherInArrangeTemplate(data);
		$obj.find('.T-income').html(otherInHtml);
		
		//保险列表
		var insuranceHtml = insuranceArrangeTemplate(data);
		$obj.find('.T-insurance').html(insuranceHtml);

		//车费列表 
		var busHtml = busArrangeTemplate(data);
		$obj.find('.T-bus').html(busHtml);

		//餐费列表 
		var restHtml = restArrangeTemplate(data);
		$obj.find('.T-restaurant').html(restHtml);

		//房费列表 
		var hotelHtml = hotelArrangeTemplate(data);
		$obj.find('.T-hotel').html(hotelHtml);

		//景区费用列表列表 
		var scenicHtml = scenicArrangeTemplate(data);
		$obj.find('.T-scenic').html(scenicHtml);

		//票务费用列表列表 
		var ticketHtml = ticketArrangeTemplate(data);
		$obj.find('.T-ticket').html(ticketHtml);

		//其他支出费用列表列表  guideTamplate
		var otherOutHtml = otherOutTemplate(data);
		$obj.find('.T-otherOut').html(otherOutHtml);

		//导游列表
		var guideHtml = guideTamplate(data);
		$obj.find('.T-guide').html(guideHtml);
		//页面事件 
		if(data.editStatus == 1){
			//页面事件
			Count.reimbursementEvents($obj);
		}else {
			Count.updateEvent($obj);
		};
		Count.addFee($obj, data.id)
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
						    area: ['1000px', '500px'], //宽高
						    zIndex:1028,
						    content: html
						});
					}
			}

		});
	};
	//查看单据事件
	Count.viewImages = function(url,bigImg,smallImg){

			var data = {
    			"images":[]
	    	};
	    	var strs = url.split(",");
	        for(var i = 0; i < strs.length; i ++) {
	            var s = strs[i];
	            if(s != null && s != "" && s.length > 0) {
	                var image = {
	                    "WEB_IMG_URL_BIG":imgUrl+s,
	                    "WEB_IMG_URL_SMALL":imgUrl+s+"?imageView2/2/w/150",
	                }
	                data.images.push(image);
	            }
	        }
	    	if(data.images.length == 0) {
	    		showMessageDialog($( "#confirm-dialog-message" ), "没有回传单据", function(){});
	    		return;
	    	}
	    	var html = billImageTempLate(data); 
	    	layer.open({
				type : 1,
				title : "单据图片",
				skin : 'layui-layer-rim', // 加上边框
				area : '500px', // 宽高
				zIndex : 1028,
				content : html,
                scrollbar: false, // 推荐禁用浏览器外部滚动条
				success : function() {
		    		$('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(Tools.colorbox_params);
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
        			showMessageDialog($( "#confirm-dialog-message" ),data.message);
        			Count.updateExamine(financialTripPlanId);
        			Count.listCountHeader(0);
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
                	showMessageDialog($( "#confirm-dialog-message" ),data.message);
                	if(billStatus == 0) {
                		Tools.closeTab(updateTabId);
                		Count.listCountHeader(0);
                	}else{
                		Count.updateExamine(financialTripPlanId);
                	}
                }
            }
    	});
	};
	//安排预算--明细
	Count.arrangeDetail = function(id){
		$.ajax({
			url:KingServices.build_url('tripPlan','findTripArrangeById'),
			type:"POST",
			data:{
				tripPlanId:id,
				operation:"self"
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					var tripPlanInfo = JSON.parse(data.tripPlan),
					 insuranceList = JSON.parse(data.insuranceList),
					 hotelList = JSON.parse(data.hotelList),
					 busCompanyList = JSON.parse(data.busCompanyList),
					 guideList = JSON.parse(data.guideList),
					 otherList = JSON.parse(data.otherList),
					 restaurantList = JSON.parse(data.restaurantList),
					 scenicList = JSON.parse(data.scenicList),
					 selfPayList = JSON.parse(data.selfPayList),
					 shopList = JSON.parse(data.shopList),
					 ticketList = JSON.parse(data.ticketList);
					
					data = {
						tripPlan : tripPlanInfo,
						insuranceList : insuranceList,
						hotelList : hotelList,
						busCompanyList : busCompanyList,
						guideList : guideList,
						otherList : otherList,
						restaurantList : restaurantList,
						scenicList : scenicList,
						selfPayList : selfPayList,
						shopList : shopList,
						ticketList : ticketList,
						calculation : data.calculation
					};
	    			var html = arrangeDetailTempLate(data);
	    			var financialArrangeDetail = Tools.addTab(detailId,"安排预算", html);
                    var tabid = $("#tab-"+detailId+"-content");
                    var tripCost = tabid.find('.tripCost');
                    var guideArrangePrice = tabid.find('.tripCost-guideArrangePrice').text()==""?0:parseFloat(tabid.find('.tripCost-guideArrangePrice').text());
                    var insuranceArrangeNeedPayMoney = tabid.find('.tripCost-insuranceArrangeNeedPayMoney').text()==""?0:parseFloat(tabid.find('.tripCost-insuranceArrangeNeedPayMoney').text());
                    var busCompanyNeedPayMoney = tabid.find('.tripCost-busCompanyNeedPayMoney').text()==""?0:parseFloat(tabid.find('.tripCost-busCompanyNeedPayMoney').text());
                    var restaurantArrangeNeedPayMoney = tabid.find('.tripCost-restaurantArrangeNeedPayMoney').text()==""?0:parseFloat(tabid.find('.tripCost-restaurantArrangeNeedPayMoney').text());
                    var hotelArrangeNeedPayMoney = tabid.find('.tripCost-hotelArrangeNeedPayMoney').text()==""?0:parseFloat(tabid.find('.tripCost-hotelArrangeNeedPayMoney').text());
                    var scenicArrangeNeedPayMoney = tabid.find('.tripCost-scenicArrangeNeedPayMoney').text()==""?0:parseFloat(tabid.find('.tripCost-scenicArrangeNeedPayMoney').text());
                    var ticketArrangeNeedPayMoney = tabid.find('.tripCost-ticketArrangeNeedPayMoney').text()==""?0:parseFloat(tabid.find('.tripCost-ticketArrangeNeedPayMoney').text());
                    var otherArrangeNeedPayMoney = tabid.find('.tripCost-otherArrangeNeedPayMoney').text()==""?0:parseFloat(tabid.find('.tripCost-otherArrangeNeedPayMoney').text());
                    var sum = guideArrangePrice+insuranceArrangeNeedPayMoney+busCompanyNeedPayMoney+restaurantArrangeNeedPayMoney+hotelArrangeNeedPayMoney+scenicArrangeNeedPayMoney+ticketArrangeNeedPayMoney+otherArrangeNeedPayMoney
                    tripCost.text(sum);
                    //其他
                    var other = tabid.find(".tripOther");
                    var guideArrangeManageFee = tabid.find(".tripOther-guideArrangeManageFee")==""?0:parseFloat(tabid.find(".tripOther-guideArrangeManageFee").text());
                    var guideAllPreMoney = tabid.find(".tripOther-guideAllPreMoney")==""?0:parseFloat(tabid.find(".tripOther-guideAllPreMoney").text());
                    var otherSum = guideArrangeManageFee+guideAllPreMoney;
                    other.text(otherSum);
				}   
			}
    	});
	};
	//单团核算表
	Count.viewTripAccount = function(id){
		$.ajax({
			url:KingServices.build_url('financialTripPlan','getTripPlanAccountingDetail'),
			data:{
				id:id
			},
			type:'POST',
			showLoading:false,
			success:function(data){
				if(showDialog(data)){
					//校验每个明细tab是否应该显示
					var showJson = Count.isShowTabByData(data);
					data.showJson = showJson;
					var html = outDetailTempLate(data);
					Tools.addTab(menuKey+'-outDetail','单团核算',html);

					//打印单团核算页面
					var $outDetailTab = $("#tab-"+menuKey+'-outDetail'+"-content");
					$outDetailTab.off('click').on('click','.T-export',function(){
						Count.exportsOutDetail($outDetailTab);
					});
					//查看图片事件
					$outDetailTab.find('.btn-view').off('click').on('click',function(){
						var $that = $(this);
						var url = $that.attr("url");
						var bigImg = $outDetailTab.find('input[name=WEB_IMG_URL_BIG]').val();
						var smallImg = $outDetailTab.find('input[name=WEB_IMG_URL_SMALL]').val();
						Count.viewImages(url,bigImg,smallImg);
					});
				}
				
			}
		});
		
	};
	//校验每个明细tab是否应该显示
	Count.isShowTabByData = function(data){
		var showJson = {};
		showJson.incomeShowFlag = false;
		showJson.costShowFlag = false;
		showJson.transitShowFlag = false;
		showJson.tripInMapCount = 0;
		showJson.costMapCount = 0;
		showJson.transitMapCount = 0
		var tripInMap = data.tripIncomeMap;
		var tripPayMap = data.tripPayMap;
		var tripTransitPayMap = data.tripTransitPayMap;
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
		if(tripTransitPayMap.busTransitPayMap.busTransitPayMapList.length == 0){
			showJson.transitMapCount += 1;
		};
		if(tripTransitPayMap.hotelTransitPayMap.hotelTransitPayMapList.length == 0){
			showJson.transitMapCount += 1;
		};
		if(tripTransitPayMap.otherTransitPayMap.otherTransitPayMapList.length == 0){
			showJson.transitMapCount += 1;
		};
		if(tripTransitPayMap.restaurantTransitPayMap.restaurantTransitPayMapList.length == 0){
			showJson.transitMapCount += 1;
		};
		if(tripTransitPayMap.ticketTransitPayMap.ticketTransitPayMapList.length == 0){
			showJson.transitMapCount += 1;
		};
		//判断赋值
		if(showJson.tripInMapCount == 5){
			showJson.incomeShowFlag = true;
		};
		if(showJson.costMapCount == 9){
			showJson.costShowFlag = true;
		};
		if(showJson.transitMapCount == 5){
			showJson.transitShowFlag = true;
		};
		return showJson;
	};
	//打印页面
	Count.exportsOutDetail = function($obj){
		$obj.print({
			globalStyles:true
		});
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
		var html = '<tr class="oldData noSumRate">'+
		'<td class="countWhichDaysContainer" rowspan="2"></td>'+
		'<td rowspan="2"><input type="text" name="shopName" style="width:90px;"/><input type="hidden" name="shopId" /></td>'+
		'<td>人数返佣<input type="hidden" value="人数返佣" name="shopPolicy"></td>'+
		'<td><input type="text" name="consumeMoney" class="w-80"/></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input type="text" name="travelAgencyRate" class="w-50" value="100"/></td>'+
		'<td><input type="text" name="travelAgencyRateMoney" class="w-80"/></td>'+
		'<td><input type="text" name="guideRate" class="w-50" value="0"/></td>'+
		'<td><input type="text" name="guideRateMoney" class="w-80"/></td>'+
		'<td rowspan="2" class="hidden"><input type="text" name="currInCome" class="w-80"/></td>'+
		'<td><input type="text" name="billRemark"/></td>'+
		'<td rowspan="2"><a href="javascript:void(0)" class="T-shopArrDelAll">删除</a></td>'+
		'<td rowspan="2">未对账</td>'+
		'</tr>'+
		'<tr class="noSumRate">'+
		'<td>停车返佣&nbsp;&nbsp;<input type="hidden" value="停车返佣" name="shopPolicy"><button class="btn btn-success btn-sm btn-white T-addShop"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button></td>'+
		'<td><input type="text" name="consumeMoney" class="w-80"/></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input type="text" name="travelAgencyRate" class="w-50" value="100"/></td>'+
		'<td><input type="text" name="travelAgencyRateMoney" class="w-80"/></td>'+
		'<td><input type="text" name="guideRate" class="w-50" value="0"/></td>'+
		'<td><input type="text" name="guideRateMoney" class="w-80"/></td>'+
		'<td><input type="text" name="billRemark"/></td>'+
		'</tr>'+
		'<tr class="sumMoney">'+
			'<td style="font-weight: bold;text-align:right;" colspan="3">购物小计：</td>'+
			'<td style="font-weight: bold;text-align:left;"><span class="F-float F-money T-totalMoney"></span></td>'+
			'<td style="font-weight: bold;text-align:right;" colspan="2">社佣小计：</td>'+
			'<td style="font-weight: bold;text-align:left;"><span class="F-float F-money T-totalTravelMoney"></span></td>'+
			'<td style="font-weight: bold;text-align:right;">导佣小计：</td>'+
			'<td style="font-weight: bold;text-align:left;"><span class="F-float F-money T-totalGuideMoney"></span></td>'+
			'<td style="font-weight: bold;text-align:right;">佣金小计：</td>'+
			'<td style="font-weight: bold;text-align:left;" colspan="2"><span class="F-float F-money T-sumRebeMoney"></span></td>'+
		'</tr>';
		
		$bodyObj.append(html);
		//新增获取购物店数据
		Count.getShopData($bodyObj,$parentObj);
		//设置下拉框
		Count.setChooseDays($bodyObj,$parentObj,'shop');
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

		var html = '<tr shopId = '+shopId+' whichDay = '+whichDay+'>'+
			'<td><input type="text" name="shopPolicy" style="width:90px;"/><input type="hidden" name="shopPolicyId" />&nbsp;&nbsp;<button class="btn btn-danger btn-sm btn-white T-shopArrDelItem"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i></button></td>'+
			'<td><input type="text" name="consumeMoney" class="w-80"></td>'+
			'<td><span style="color:#bbb;">查看</span></td>'+
			'<td><input type="text" name="travelAgencyRate" class="w-50""></td>'+
			'<td><input type="text" name="travelAgencyRateMoney" class="w-80"/></td>'+
			'<td><input type="text" name="guideRate" class="w-50"></td>'+
			'<td><input type="text" name="guideRateMoney" class="w-80"/></td>'+
			'<td><input type="text" name="billRemark"/></td>'+
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
	};
	//删除新增的商品
	Count.delShop = function($obj,$parentObj){

		
		var $tr = $obj.closest('tr');
		var $prev = $tr.prevAll(),
			td_cnt = $tr.children('td').length;
		var shopArrangeId = $tr.attr('itemsId');

		if(!!shopArrangeId){
			showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
				Count.delArrangeData(shopArrangeId,'shopItem',removeItem);
			});
		}else{
			removeItem();
		}
		
		Count.autoShopSum($obj,$parentObj);
		function removeItem (){
			Count.totalRebeatMoney($obj,$parentObj);
			for(var i = 0; i<$prev.length;i++){
				var tdLen = $prev.eq(i).children('td').length;
				if(tdLen>td_cnt){
					var rowSpan = $prev.eq(i).children('td').eq(0).attr('rowspan');
					rowSpan = rowSpan*1 - 1;
					$prev.eq(i).children('td[rowspan]').prop('rowspan', rowSpan);
					$tr.remove();
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
			showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
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
		var $parent = $obj.closest('tr');
		var shopId = $parent.attr('shopId') || '';
		var editFeildTagName = $obj.attr('name');
		var consumeMoney = $parent.find('input[name=consumeMoney]').val();
		var travelAgencyRate = $parent.find('input[name=travelAgencyRate]').val();
		var travelAgencyRateMoney = $parent.find('input[name=travelAgencyRateMoney]').val();
		var guideRate = $parent.find('input[name=guideRate]').val();
		var guideRateMoney = $parent.find('input[name=guideRateMoney]').val();
		
		consumeMoney = parseFloat(consumeMoney);
		travelAgencyRate = parseFloat(travelAgencyRate);
		travelAgencyRateMoney = parseFloat(travelAgencyRateMoney);
		guideRate = parseFloat(guideRate);
		guideRateMoney = parseFloat(guideRateMoney);

		travelAgencyRateMoney = consumeMoney*travelAgencyRate/100;
		travelAgencyRateMoney = Count.changeTwoDecimal(travelAgencyRateMoney);
		guideRateMoney = consumeMoney*guideRate/100;
		guideRateMoney = Count.changeTwoDecimal(guideRateMoney);
		if(!!shopId){
			switch(editFeildTagName) {
				case 'travelAgencyRate':
					$parent.find('input[name=travelAgencyRateMoney]').val(travelAgencyRateMoney);
					break;
				case 'guideRate':
					$parent.find('input[name=guideRateMoney]').val(guideRateMoney);
					break;
				case 'consumeMoney':
					$parent.find('input[name=guideRateMoney]').val(guideRateMoney);
					$parent.find('input[name=travelAgencyRateMoney]').val(travelAgencyRateMoney);
					break;
				default: break;
			}
		}else{
			if(editFeildTagName != 'travelAgencyRateMoney' && editFeildTagName != 'guideRateMoney'){
				$parent.find('input[name=travelAgencyRateMoney]').val(travelAgencyRateMoney);
				$parent.find('input[name=guideRateMoney]').val(guideRateMoney);
			}
		}
			
			
		//设置总金额
		Count.autoShopSumCost($obj,$parentObj);
	};
	//购物--总金额计算
	Count.autoShopSumCost = function($obj,$tableObj){
		var $listObj = $tableObj.find('.T-count-shopping'),
		    travelSum = 0,
		    guideSum = 0,
		    sumMoney = 0;
	        if($obj.closest('tr').attr("shopId")){
	        	var sumMoney = 0,$tr = $obj.closest('tr'),sum=0;
	        	//金额
	        	$listObj.find('input[name=consumeMoney]').each(function(){
	        		var sum = Count.changeTwoDecimal($(this).val());
	        		sumMoney += parseFloat(sum);
	        	});
	        	//导佣
	        	$listObj.find('[name=guideRateMoney]').each(function(){
	        		var sum = Count.changeTwoDecimal($(this).val());
	        		guideSum += parseFloat(sum);
	        	});
	        	//社佣
	        	$listObj.find('[name=travelAgencyRateMoney]').each(function(){
	        		var sum = Count.changeTwoDecimal($(this).val());
	        		travelSum += parseFloat(sum);
	        	});
	        	//计算明细
	        	//导佣
	        	$listObj.find('.guideRateMoney ').each(function(){
	        		var sum = Count.changeTwoDecimal($(this).text());
	        		guideSum += parseFloat(sum);
	        	});
	        	//社佣
	        	$listObj.find('.travelAgencyRateMoney').each(function(){
	        		var sum = Count.changeTwoDecimal($(this).text());
	        		travelSum += parseFloat(sum);
	        	});

	        }else{
	        	//金额
	        	$listObj.find('input[name=consumeMoney]').each(function(){
	        		var sum = Count.changeTwoDecimal($(this).val());
	        		sumMoney += parseFloat(sum);
	        	});
	        	//导佣
	        	$listObj.find('[name=guideRateMoney]').each(function(){
	        		var sum = Count.changeTwoDecimal($(this).val());
	        		guideSum += parseFloat(sum);
	        	});
	        	//社佣
	        	$listObj.find('[name=travelAgencyRateMoney]').each(function(){
	        		var sum = Count.changeTwoDecimal($(this).val());
	        		travelSum += parseFloat(sum);
	        	});
				//设置人数返佣，停车返佣
			}
			var shopCost = Count.changeTwoDecimal(travelSum+guideSum),
			    $mainTable = $tableObj.find('.T-main-table');
			$mainTable.find('.tripIncome-shopTravelAgencyRateMoney').text(shopCost);
			//计算导游购物返佣
			$mainTable.find('.tripCost-guideshopFee').text(guideSum);
			//计算团收入
			Count.tripIncome($tableObj);
			//计算团成本
			Count.tripCost($tableObj);	
	};
	//购物--计算金额合计
	Count.totalRebeatMoney = function($obj,$parentObj){
		var $thisTr = $obj.closest('tr');
		var td_cnt = 0;
		var sumTd_cnt = 0;
		if($thisTr.hasClass('oldData')){
			td_cnt = $thisTr.children('td').length;
		};
		var thisTdLen = $thisTr.children('td').length;
		if(thisTdLen == td_cnt){
			var $nextTr = $thisTr.nextAll(),
				sumMoney = 0,//总金额
				sumTravelMoney = 0,//社佣合计
				sumGuideMoney = 0;//导佣合计
						
			for(var i = 1;i<$nextTr.length;i++){
				var thatTdLen = $nextTr.eq(i).children('td').length,
					$that = $nextTr.eq(i);
				if($that.hasClass('sumMoney')){
					//计算总金额
					$that.find('.T-totalMoney').text(sumMoney);
					$that.find('.T-totalTravelMoney').text(sumTravelMoney);
					$that.find('.T-totalGuideMoney').text(sumGuideMoney);
					break;
				}else{
				var	$moneyObj = $that.find('[name=consumeMoney]'),
					$travelObj = $that.find('[name=travelAgencyRateMoney]'),
					$guideObj = $that.find('[name=guideRateMoney]');
					//计算金额合计
					sumMoney += Count.changeTwoDecimal($moneyObj.val());
					if(!!$travelObj.val()){
						//计算社佣合计
						sumTravelMoney += Count.changeTwoDecimal($travelObj.val());
					}else{
						sumTravelMoney += Count.changeTwoDecimal($that.find('.travelAgencyRateMoney').text());
					};
					if(!!$guideObj.val()){
						//计算导佣合计
						sumGuideMoney += Count.changeTwoDecimal($guideObj.val());
					}else{
						sumGuideMoney += Count.changeTwoDecimal($that.find('.guideRateMoney').text());
					};
					
					
					
				};
			}
		}else{
			var	sumMoney = 0,//计算总金额
				sumTravelMoney = 0,//计算社佣合计
				sumGuideMoney = 0;//计算导佣合计
				$preTr = $thisTr.prevAll(),
				$nextTr = $thisTr.nextAll();
				if($obj.hasClass('T-shopArrDelItem') || $thisTr.hasClass('noSumRate')){
					sumMoney = 0;//计算总金额
					sumTravelMoney = 0;//计算社佣合计
					sumGuideMoney = 0;//计算导佣合计
				}else{
					sumMoney += Count.changeTwoDecimal($thisTr.find('[name=consumeMoney]').val());
					if(!!$thisTr.find('[name=travelAgencyRateMoney]').val()){
						sumTravelMoney += Count.changeTwoDecimal($thisTr.find('[name=travelAgencyRateMoney]').val());
					}else{
						sumTravelMoney += Count.changeTwoDecimal($thisTr.find('.travelAgencyRateMoney').text());
					};
					if(!!$thisTr.find('[name=guideRateMoney]').val()){
						sumGuideMoney += Count.changeTwoDecimal($thisTr.find('[name=guideRateMoney]').val());
					}else{
						sumGuideMoney += Count.changeTwoDecimal($thisTr.find('.guideRateMoney').text());
					};
				};
				
			for(var i = 0;i<$preTr.length;i++){
				var $that = $preTr.eq(i);
				if($that.hasClass('noSumRate')){
					break;
				}else{
					var	$moneyObj = $that.find('[name=consumeMoney]'),
					$travelObj = $that.find('[name=travelAgencyRateMoney]'),
					$guideObj = $that.find('[name=guideRateMoney]');
					//计算金额合计
					sumMoney += Count.changeTwoDecimal($moneyObj.val());
					if(!!$travelObj.val()){
						//计算社佣合计
						sumTravelMoney += Count.changeTwoDecimal($travelObj.val());
					}else{
						sumTravelMoney += Count.changeTwoDecimal($that.find('.travelAgencyRateMoney').text());
					};
					if(!!$guideObj.val()){
						//计算导佣合计
						sumGuideMoney += Count.changeTwoDecimal($guideObj.val());
					}else{
						sumGuideMoney += Count.changeTwoDecimal($that.find('.guideRateMoney').text());
					};
				};
			};
			for(var i = 0;i<$nextTr.length;i++){
				var $that = $nextTr.eq(i);
				if($that.hasClass('sumMoney')){
					//计算总金额
					$that.find('.T-totalMoney').text(sumMoney);
					$that.find('.T-totalTravelMoney').text(sumTravelMoney);
					$that.find('.T-totalGuideMoney').text(sumGuideMoney);
					var totalRateMoney = sumTravelMoney+sumGuideMoney;
					$that.find('.T-sumRebeMoney').text(totalRateMoney);
					break;
				}else{
					var	$moneyObj = $that.find('[name=consumeMoney]'),
					$travelObj = $that.find('[name=travelAgencyRateMoney]'),
					$guideObj = $that.find('[name=guideRateMoney]');
					//计算金额合计
					sumMoney += Count.changeTwoDecimal($moneyObj.val());
					if(!!$travelObj.val()){
						//计算社佣合计
						sumTravelMoney += Count.changeTwoDecimal($travelObj.val());
					}else{
						sumTravelMoney += Count.changeTwoDecimal($that.find('.travelAgencyRateMoney').text());
					};
					if(!!$guideObj.val()){
						//计算导佣合计
						sumGuideMoney += Count.changeTwoDecimal($guideObj.val());
					}else{
						sumGuideMoney += Count.changeTwoDecimal($that.find('.guideRateMoney').text());
					};
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
	//计算整个团收入、毛利、人均毛利
	Count.tripIncome = function($obj){
		var tripIncome = $obj.find('.tripIncome');
		var grossProfitMoney = $obj.find('.grossProfitMoney');
		var perGrossProfitMoney = $obj.find('.perGrossProfitMoney');
		var tripNeedIncome = $obj.find('.tripIncome-getAllMoney').text();
		var selfPayTravelAgencyRebateMoney = $obj.find('.tripIncome-selfPayTravelAgencyRebateMoney').text();
		var shopTravelAgencyRateMoney = $obj.find('.tripIncome-shopTravelAgencyRateMoney').text();
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
		tripIncome = Count.changeTwoDecimal(tripIncome);
		tripTransitCost = Count.changeTwoDecimal(tripTransitCost);
		allPerson = Count.changeTwoDecimal(allPerson);
		//计算团成本
		var tripSum = (guideArrangePrice+insuranceArrangeNeedPayMoney+busCompanyNeedPayMoney+guideshopFee+restaurantArrangeNeedPayMoney);
		var tripCostSum = (hotelArrangeNeedPayMoney+scenicArrangeNeedPayMoney+guideSelfMoney+ticketArrangeNeedPayMoney+otherArrangeNeedPayMoney+selfArrangeNeedPayMoney)
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
		//计算中转成本
		var transfetCost = (busCompanyNeedPayMoney+outRestaurantMoney+hotelArrangeNeedPayMoney+outOtherMoney+ticketArrangeNeedPayMoney);
		transfetCost =Count.changeTwoDecimal(transfetCost);
		transfetCost = Tools.toFixed(transfetCost,2);
		tripTransitCost.text(transfetCost);
	};
	//导游金额计算
	Count.autoGuideSum = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var price = $tr.find('input[name=price]').val();
		var manageFee = $tr.find('input[name=manageFee]').val();
		//规范数据
		price = Count.changeTwoDecimal(price);
		manageFee = Count.changeTwoDecimal(manageFee);
		if($tr.find('input[name=price]').length){
			$parentObj.find('.tripCost-guideArrangePrice').text(price);
			$parentObj.find('.tripIncome-guideManageMoney').text(manageFee);
		}
		
		//计算团收入
		Count.tripIncome($parentObj);
		//计算团成本
		Count.tripCost($parentObj);
	};
	//自费--计算导佣社佣
	Count.sumRateMoney = function($obj,$parentObj){
		//导游佣金= (现收-应收数量*低价)*导佣比例
		var $tr = $obj.closest('tr'),
			needInCount = $tr.find('[name=needCount]').val(),
			realGetMoney = $tr.find('[name=realGetMoney]').val(),
			guideRate = $tr.find('[name=guideRate]').val(),
			travelAgencyRate = $tr.find('[name=travelAgencyRate]').val(),
			price = $tr.find('[name=price]').val();
		var publiSum = realGetMoney-(needInCount*price);
			var guideRebateMoney = 0,
				travelAgencyRebateMoney = 0;

			if(publiSum>0){
				guideRebateMoney = publiSum * parseFloat(guideRate)/100;
				travelAgencyRebateMoney = publiSum * parseFloat(travelAgencyRate)/100;
			};
			guideRebateMoney = Count.changeTwoDecimal(guideRebateMoney);
			travelAgencyRebateMoney = Count.changeTwoDecimal(travelAgencyRebateMoney);
			var selfId = $tr.attr('selfPayId'),
				editFeildTagName = $obj.attr('name');
			if(!!selfId){
				switch(editFeildTagName) {
					case 'travelAgencyRate':
						$tr.find('input[name=travelAgencyRebateMoney]').val(travelAgencyRebateMoney);
						break;
					case 'guideRate':
						$tr.find('input[name=guideRebateMoney]').val(guideRebateMoney);
						break;
					case 'realGetMoney':
						$tr.find('input[name=travelAgencyRebateMoney]').val(travelAgencyRebateMoney);
						$tr.find('input[name=guideRebateMoney]').val(guideRebateMoney);
						break;
					case 'price':
						$tr.find('input[name=travelAgencyRebateMoney]').val(travelAgencyRebateMoney);
						$tr.find('input[name=guideRebateMoney]').val(guideRebateMoney);
						break;
					case 'needCount':
						$tr.find('input[name=travelAgencyRebateMoney]').val(travelAgencyRebateMoney);
						$tr.find('input[name=guideRebateMoney]').val(guideRebateMoney);
						break;
					default: break;
				};
			}else{
				if(editFeildTagName != "travelAgencyRebateMoney" && editFeildTagName != "guideRebateMoney"){
					$tr.find('input[name=travelAgencyRebateMoney]').val(travelAgencyRebateMoney);
					$tr.find('input[name=guideRebateMoney]').val(guideRebateMoney);
				}
			};
			
			Count.autoSelfSum($obj,$parentObj);
	};
	//自费金额计算
	Count.autoSelfSum = function($obj,$parentObj){
			
			var $parent = $obj.closest('tr');
			
			var realCount = $parent.find('input[name=realCount]').val();
			var memberCount = $parent.find('input[name=memberCount]').val();
			var marketPrice = $parent.find('input[name=marketPrice]').val();	//市场价
			var price = $parent.find('input[name=price]').val();//协议价
            
			var travelAgencyRate = $parent.find('input[name=travelAgencyRate]').val();
			var guideRate = $parent.find('input[name=guideRate]').val();
			var badStatus = $parent.attr('badStatus');
			var isConfirmAccount = $parent.attr('isConfirmAccount');
			var incomeCount = $parent.find('input[name=needCount]').val();
			var realGetMoney = $parent.find('input[name=realGetMoney]').val();
            //计算应付
            var needPayMoney = $parent.find(".needPayMoney");
            var realReduceMoney = $parent.find('input[name="realReduceMoney"]').val();
            //规范数据
            realCount = Count.changeTwoDecimal(realCount);
            memberCount = Count.changeTwoDecimal(memberCount);
            marketPrice = Count.changeTwoDecimal(marketPrice);
            price = Count.changeTwoDecimal(price);
            travelAgencyRate = Count.changeTwoDecimal(travelAgencyRate);
            guideRate = Count.changeTwoDecimal(guideRate);
            realCount = Count.changeTwoDecimal(realCount);
            realReduceMoney = Count.changeTwoDecimal(realReduceMoney);
            realGetMoney = Count.changeTwoDecimal(realGetMoney);
            incomeCount = Count.changeTwoDecimal(incomeCount);
            
            //报账/审核--应收优惠、应收
            var needReduceMoney = 0,
            	needReduceObj = $parent.find('.needInReduceMoney')
            	needInObj = $parent.find('.needIncome');
            needReduceMoney = (incomeCount*marketPrice)-realGetMoney;
            needReduceMoney = Count.changeTwoDecimal(needReduceMoney);
            needReduceObj.text(needReduceMoney);
            needInObj.text(realGetMoney);
            //明细--应收优惠
            var needCount = $parent.find('.needIncomeCount');
            if(needCount.length>0){
            	var detailNeedReaduce = $parent.find('.needInReduceMoney');
            	var getMoney = $parent.find('.realGetMoney').text(),
            		needInObj = $parent.find('.needIncome');
            		incomeCount = needCount.text();
            	realGetMoney = Count.changeTwoDecimal(getMoney);
            	incomeCount = Count.changeTwoDecimal(incomeCount);
	        	var income = (incomeCount*marketPrice)-getMoney;
	        	income = Count.changeTwoDecimal(income);
	        	income = parseFloat(income);
				detailNeedReaduce.text(income);
				needInObj.text(getMoney);
            };
			//计算应付                      
			var needReduce = $parent.find('[name=realReduceMoney]').val();
			var selfRealCount = $parent.find('[name=realCount]').val();
			//规范数据
			needReduce = Count.changeTwoDecimal(needReduce);
			selfRealCount = Count.changeTwoDecimal(selfRealCount);
			var needSum = parseFloat(selfRealCount) * parseFloat(price)-parseFloat(needReduce);
            if((badStatus == 0  || badStatus == undefined) && (isConfirmAccount == 0 || badStatus == undefined))
            	{needPayMoney.text(needSum);}
            //计算自费费用
            $parent.find('.selfMoney').val(needSum);
			
			
			//计算团收入--自费收入
			var $bodyObj = $parentObj.find('.T-main-table');
			var shopRebateMoney = 0;
			var selfMoney = 0;
			var guideRebateMoney = 0;
			var $mainTr = $parentObj.find('.T-count-selfPay');
			$mainTr.find('.needPayMoney').each(function() {
				var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
				selfMoney += totalSum;
			});
			$mainTr.find('.needIncome').each(function() {
				var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
				shopRebateMoney += totalSum;
			});
			$mainTr.find('[name=guideRebateMoney]').each(function() {
				var t = Count.changeTwoDecimal(parseFloat($(this).val()));
				guideRebateMoney += t;
			});
			shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
			$bodyObj.find('.tripIncome-selfPayTravelAgencyRebateMoney').text(shopRebateMoney);
			//计算团收入
			Count.tripIncome($parentObj);
			//计算团成本
			Count.tripCost($parentObj);
			//计算自费导佣
			$parentObj.find('.tripCost-guideSelfMoney').text(guideRebateMoney);
			//计算自费费用
			$parentObj.find('.tripCost-selfArrangeNeedPayMoney').text(selfMoney);
	};
	//新增自费安排
	Count.addSelf = function($obj,$parentObj){
		
		var html = '<tr>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td><input type="text" name="selfPayName" class="w-80"><input type="hidden" name="selfPayId"></td>'+
		'<td><input name="selfPayItem" class="w-80" type="text"><input type="hidden" name="selfPayItemId"></td>'+
		'<td><input name="marketPrice" class="w-50" type="text"></td>'+
		'<td><input name="needCount" class="w-50" type="text"></td>'+
		'<td><span class="needInReduceMoney">0</span></td>'+
		'<td><span class="needIncome">0</span></td>'+
		'<td><input name="realGetMoney" class="w-80" type="text"></td>'+
		'<td><input name="price" class="w-50" type="text"></td>'+
		'<td><input name="realCount" class="w-50" type="text"><input name="memberCount" value="0" style="width:60px;" type="hidden"></td>'+
		'<td><input name="realReduceMoney" class="w-80" type="text"><input name="selfMoney" class="selfMoney" style="width:60px;" type="hidden"></td>'+
		'<td><span class="needPayMoney">0</span></td>'+
		'<td>0</td>'+
		'<td>'+
		'<div class="inline-flex">'+
		'<select name="payType">'+
		'<option value="0">现金</option>'+
		'<option value="1">刷卡</option>'+
		'<option value="2">签单</option>'+
		'</select>&nbsp;'+
		'<input type="text" name="guidePayMoney" class="w-80"/></div></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input name="allPersonMoney" class="w-50" type="text"></td>'+
		'<td><input name="travelAgencyRate" class="w-50" type="text"></td>'+
		'<td><input name="travelAgencyRebateMoney" type="text" class="w-80"/></td>'+
		'<td><input name="guideRate" class="w-50" type="text"></td>'+
		'<td><input name="guideRebateMoney" type="text" class="w-80"/></td>'+
		'<td><input name="billRemark" type="text"></td>'+
		'<td>未对账<a class="T-del" href="javascript:void(0)" style="margin-left:14px;">删除</a></td>'+
		'</tr>';
		$obj.append(html);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//获取新增自费的数据
		Count.getSelfData($obj,$parentObj);
		$obj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "selfPayName" &&  $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				//计算金额
				Count.autoSelfSum($(this),$parentObj);
			}
			
		});
		//删除新增的自费安排
		$obj.find('.T-del').off('click').on('click',function(){
			
		 	Count.autoSumAfterDel($(this),$parentObj);
		 	var $tr = $(this).closest('tr');
		 	$tr.fadeOut(function(){
              	$(this).remove();
            });
		});
	};
	//删除自费安排
	Count.delSelfArrange = function($obj,$parentObj){
		var selfArrangeId = $obj.closest('tr').attr('selfPayArrangeId');
		
		
		if(!!selfArrangeId){
			showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
				Count.delArrangeData(selfArrangeId,'selfpay',removeItem);
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
			var sumIncome = $tr.find('.needIncome').text();
			var $selfCost = $parentObj.find('.tripCost-selfArrangeNeedPayMoney'),
				sCostVal = $selfCost.text(),
				delScostVal = $tr.find('.selfMoney').val();
			var $tripIncome = $parentObj.find('.tripIncome-selfPayTravelAgencyRebateMoney');
			var newTripIncome = parseFloat(parseFloat($tripIncome.text()-sumIncome));
		 	$newTripIncome = Count.changeTwoDecimal(newTripIncome);
			$tripIncome.text($newTripIncome);
			//计算团成本--自费费用、导游自费返佣 tripCost-guideSelfMoney
			var $guideSelfMoney = $parentObj.find('.tripCost-guideSelfMoney');
			var guideRebateMoney = $tr.find('.guideRebateMoney').text();
			var newTripTost = parseFloat(parseFloat($guideSelfMoney.text()-guideRebateMoney));
		 	$newTripTost = Count.changeTwoDecimal(newTripTost);
			$guideSelfMoney.text(newTripTost);
			//自费费用
			var newselfArrangeNeedPayMoney = parseFloat(parseFloat(sCostVal-delScostVal));
		 	newselfArrangeNeedPayMoney = Count.changeTwoDecimal(newselfArrangeNeedPayMoney);
			$selfCost.text(newselfArrangeNeedPayMoney);
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
            //计算团收入--其他收入
			var $bodyObj = $parentObj.find('.T-main-table');
			var shopRebateMoney = 0;
			var $mainTr = $parentObj.find('.T-count-otherIn');
			$mainTr.find('.needPayMoney').each(function() {
				var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
				shopRebateMoney += totalSum;
			});
			shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
			$bodyObj.find('.tripIncome-otherInCome').text(shopRebateMoney);
			//计算团收入
			Count.tripIncome($parentObj);
	};
	//新增其他收入
	Count.addOtherIn = function($obj,$parentObj){
		var billStatus = $parentObj.find('input[name=billStatus]').val(), 
			td = '';
		if(billStatus == 2){
			td = '<td></td>'
		};
		var html = '<tr>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td><input type="text" name="title" class="w-80"/></td>'+
		'<td><input type="text" name="price" class="w-80"/></td>'+
		'<td><input type="text" name="count" class="w-50"/></td>'+
		'<td><span class="needPayMoney">0</span></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input type="text" name="billRemark" style="width:230px;"/><a href="javascript:void(0)" class="T-otherInArrDel" style="margin-left:12px;">删除</a></td>'+
		td+
		'</tr>';
		$obj.append(html);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//绑定事件
		$obj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "title" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				//计算金额
				Count.autoOtherInSum($(this),$parentObj);
			}
		});
	};
	//删除其他收入安排
	Count.delOtherInArrange = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
			otherInId = $tr.attr('otherInId');
		if(!!otherInId){
			showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
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
		if((badStatus == 0  || badStatus == undefined) && (isConfirmAccount == 0 || badStatus == undefined)){$tr.find('.BusneedPayMoney').text(needPay);}
		//计算差额
		
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
		
		var html = '<tr>'+
		'<td><input name="startTime" type="text" class="datepicker"></td>'+
		'<td><input name="endTime" type="text" class="datepicker"></td>'+
		'<td>'+
		'<select name="taskType">'+
		'<option value="0">全程</option>'+
		'<option value="1">接机</option>'+
		'<option value="2">送机</option>'+
		'<option value="3">前段</option>'+
		'<option value="4">中段</option>'+
		'<option value="5">后段</option>'+
		'</select>'+
		'</td>'+
		'<td><input type="text" name="companyName" style="width:150px;"/><input type="hidden" name="companyId"></td>'+
		'<td><input type="text" name="licenseNumber" style="width:90px;"/><input type="hidden" name="busId"></td>'+
		'<td><input type="text" name="seatCount" style="width:90px;"/></td>'+
		'<td><input type="text" name="price" class="w-80"/></td>'+
		'<td><input type="text" name="realReduceMoney" class="w-80"/></td>'+
		'<td><span class="BusneedPayMoney">0</span></td>'+
		'<td>0</td>'+
		'<td>'+
		'<div class="inline-flex">'+
		'<select name="payType">'+
		'<option value="0">现金</option>'+
		'<option value="1">刷卡</option>'+
		'<option value="2">签单</option>'+
		'</select>&nbsp;'+
		'<input type="text" name="guidePayMoney" style="margin:0px;padding:0px;" class="w-80"/>'+
		'</div>'+
		'</td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input type="text" name="billRemark"/></td>'+
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
		
	};
	//删除车费重新计算
	Count.sumBusFeeAfDel = function($obj,$parentObj){
		var $tr = $obj.closest('tr'),
			busCompanyArrangeId = $tr.attr('busCompanyArrangeId');
		if(!!busCompanyArrangeId){
			showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
				Count.delArrangeData(busCompanyArrangeId,'busCompany',removeItems);
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
		var $tr = $obj.closest('tr');
		var $price = parseFloat($tr.find('input[name=price]').val()|| 0);
		var $realCount = parseFloat($tr.find('input[name=realCount]').val() || 0);
		var $realReduceMoney = parseFloat($tr.find('input[name=realReduceMoney]').val() || 0);
		var $needPayMoney = parseFloat($tr.find('input[name=needPayMoney]').val() || 0);
		var badStatus = $tr.attr('badStatus'),isConfirmAccount = $tr.attr('isConfirmAccount');
		//规范数据
		$price = Count.changeTwoDecimal($price);
		$realCount = Count.changeTwoDecimal($realCount);
		$realReduceMoney = Count.changeTwoDecimal($realReduceMoney);
		$needPayMoney = Count.changeTwoDecimal($needPayMoney);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($price*$realCount-$realReduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		if((badStatus == 0  || badStatus == undefined) && (isConfirmAccount == 0 || badStatus == undefined)){	
			$tr.find('.restneedPayMoney').text(needPay);
		};
		
		//计算团成本
		var $bodyObj = $parentObj.find('.T-main-table');
		var shopRebateMoney = 0;
		var $mainTr = $parentObj.find('.T-count-restaurant');
		$mainTr.find('.restneedPayMoney').each(function() {
			var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
			shopRebateMoney += totalSum;
		});
		shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
		$bodyObj.find('.tripCost-restaurantArrangeNeedPayMoney').text(shopRebateMoney);
		//计算整个团成本
		Count.tripCost($parentObj);
	};
	//新增餐费
	Count.addRest = function($obj,$parentObj){
		
		var html = '<tr>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td><input type="text" name="restaurantName" style="width:90px;"/><input type="hidden" name="restaurantId"></td>'+
		'<td>'+
		'<select name="type">'+
		'<option value="早餐">早餐</option>'+
		'<option value="午餐">午餐</option>'+
		'<option value="晚餐">晚餐</option>'+
		'</select>'+
		'</td>'+
		'<td><input type="text" name="price" class="w-80"/><input type="hidden" name="standardId"></td>'+
		'<td><input type="text" name="realCount" class="w-50"/></td>'+
		'<td><input type="text" name="realReduceMoney" class="w-80"/></td>'+
		'<td><span class="restneedPayMoney">0</span><input type="hidden" value="0" name="needPayMoney"></td>'+
		'<td>0</td>'+
		'<td>'+
		'<div class="inline-flex">'+
		'<select name="payType">'+
		'<option value="0">现金</option>'+
		'<option value="1">刷卡</option>'+
		'<option value="2">签单</option>'+
		'</select>&nbsp;'+
		'<input type="text" name="guidePayMoney" class="w-80"/></div></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td style="text-align:left"><input type="text" name="billRemark" class="w-150"/></td>'+
		'<td>未对账<a href="javascript:void(0)" class="T-restArrDel" style="margin-left:12px;">删除</a></td>'+
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
	};
	//删除餐厅安排
	Count.delRestArrange = function($obj,$parentObj){

		var $tr = $obj.closest('tr');
		var restArrId = $tr.attr('restaurantArrangeId');
		if(!!restArrId){
			showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
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
		var $tr = $obj.closest('tr');
		var $price = parseFloat($tr.find('input[name=price]').val());
		var $realCount = parseFloat($tr.find('input[name=realCount]').val());
		var $realReduceMoney = parseFloat($tr.find('input[name=realReduceMoney]').val());
		var $needPayMoney = parseFloat($tr.find('input[name=needPayMoney]').val());
		var badStatus = $tr.attr('badStatus'),isConfirmAccount = $tr.attr('isConfirmAccount');
		//规范数据
		$price = Count.changeTwoDecimal($price);
		$realCount = Count.changeTwoDecimal($realCount);
		$realReduceMoney = Count.changeTwoDecimal($realReduceMoney);
		$needPayMoney = Count.changeTwoDecimal($needPayMoney);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($price*$realCount-$realReduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		if((badStatus == 0  || badStatus == undefined) && (isConfirmAccount == 0 || badStatus == undefined)){
			$tr.find('.hotelneedPayMoney').text(needPay);
		}
		//计算团成本
		var $bodyObj = $parentObj.find('.T-main-table');
		var shopRebateMoney = 0;
		var $mainTr = $parentObj.find('.T-count-hotel');
		$mainTr.find('.hotelneedPayMoney').each(function() {
			var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
			shopRebateMoney += totalSum;
		});
		shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
		$bodyObj.find('.tripCost-hotelArrangeNeedPayMoney').text(shopRebateMoney);
		//计算整个团成本
		Count.tripCost($parentObj);
	};
	//新增房费
	Count.addHotel = function($obj,$parentObj){
		
		var html = '<tr>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td><input type="text" name="hotelName" style="width:90px;"/><input name="hotelId" type="hidden"></td>'+
		'<td><input type="text" name="hotelRoom" style="width:90px;"/><input name="hotelRoomId" type="hidden"></td>'+
		'<td><input type="text" name="price" class="w-80"/></td>'+
		'<td><input type="text" name="realCount" class="w-50"/></td>'+
		'<td><input type="text" name="realReduceMoney" class="w-80"/></td>'+
		'<td><span class="hotelneedPayMoney">0</span><input type="hidden" value="0" name="needPayMoney"></td>'+
		'<td>0</td>'+
		'<td>'+
		'<div class="inline-flex">'+
		'<select name="payType">'+
		'<option value="0">现金</option>'+
		'<option value="1">刷卡</option>'+
		'<option value="2">签单</option>'+
		'</select>&nbsp;'+
		'<input type="text" name="guidePayMoney" class="w-80"/></div></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input type="text" name="billRemark" style="width:230px;"/></td>'+
		'<td>未对账<a href="javascript:void(0)" class="T-hotelArrDel" style="margin-left:12px;">删除</a></td>'+
		'</tr>';
		$obj.append(html);
		//获取酒店数据
		Count.getHotelData($obj,$parentObj);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
	};
	//删除酒店安排
	Count.delHotelArrange = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var hotelArrangeId = $tr.attr('hotelArrangeId');
		if(!!hotelArrangeId){
			showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
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
		var $tr = $obj.closest('tr');
		var $price = parseFloat($tr.find('input[name=price]').val());
		var $realCount = parseFloat($tr.find('input[name=realCount]').val());
		var $realReduceMoney = parseFloat($tr.find('input[name=realReduceMoney]').val());
		var $needPayMoney = parseFloat($tr.find('input[name=needPayMoney]').val());
		var badStatus = $tr.attr('badStatus'),isConfirmAccount = $tr.attr('isConfirmAccount');
		//规范数据
		$price = Count.changeTwoDecimal($price);
		$realCount = Count.changeTwoDecimal($realCount);
		$realReduceMoney = Count.changeTwoDecimal($realReduceMoney);
		$needPayMoney = Count.changeTwoDecimal($needPayMoney);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($price*$realCount-$realReduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		if((badStatus == 0  || badStatus == undefined) && (isConfirmAccount == 0 || badStatus == undefined)){
			$tr.find('.scenicneedPayMoney').text(needPay);
		}
		//计算团成本
		var $bodyObj = $parentObj.find('.T-main-table');
		var shopRebateMoney = 0;
		var $mainTr = $parentObj.find('.T-count-scenic');
		$mainTr.find('.scenicneedPayMoney').each(function() {
			var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
			shopRebateMoney += totalSum;
		});
		shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
		$bodyObj.find('.tripCost-scenicArrangeNeedPayMoney').text(shopRebateMoney);
		//计算整个团成本
		Count.tripCost($parentObj);
	};
	//新增景区安排
	Count.addScenic = function($obj,$parentObj){
		
		var html = '<tr>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td><input type="text" name="scenicName" style="width:90px;"/><input type="hidden" name="scenicId"></td>'+
		'<td><input type="text" name="scenicItem" style="width:90px;"/><input type="hidden" name="scenicItemId"></td>'+
		'<td><input type="text" name="price" class="w-80"/></td>'+
		'<td><input type="text" name="realCount" class="w-50"/></td>'+
		'<td><input type="text" name="realReduceMoney" class="w-80"/></td>'+
		'<td><span class="scenicneedPayMoney">0</span><input type="hidden" value="0" name="needPayMoney"></td>'+
		'<td>0</td>'+
		'<td>'+
		'<div class="inline-flex">'+
		'<select name="payType">'+
		'<option value="0">现金</option>'+
		'<option value="1">刷卡</option>'+
		'<option value="2">签单</option>'+
		'</select>&nbsp;'+
		'<input type="text" name="guidePayMoney" class="w-80"/></div></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input type="text" name="billRemark"/></td>'+
		'<td>未对账<a href="javascript:void(0)" class="T-secnicArrDel" style="margin-left:12px;">删除</a></td>'+
		'</tr>';
		$obj.append(html);
		//获取景区数据
		Count.getScenicData($obj,$parentObj);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		
	};
	//删除景区安排
	Count.delSecnicArrange = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var scenicArrangeId = $tr.attr('scenicArrangeId');
		if(!!scenicArrangeId){
			showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
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
		var $tr = $obj.closest('tr');
		var $price = parseFloat($tr.find('input[name=price]').val());
		var $realCount = parseFloat($tr.find('input[name=realCount]').val());
		var $realReduceMoney = parseFloat($tr.find('input[name=realReduceMoney]').val());
		var $needPayMoney = parseFloat($tr.find('input[name=needPayMoney]').val());
		var badStatus = $tr.attr('badStatus'),isConfirmAccount = $tr.attr('isConfirmAccount');
		//规范数据
		$price = Count.changeTwoDecimal($price);
		$realCount = Count.changeTwoDecimal($realCount);
		$realReduceMoney = Count.changeTwoDecimal($realReduceMoney);
		$needPayMoney = Count.changeTwoDecimal($needPayMoney);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($price*$realCount-$realReduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		if((badStatus == 0  || badStatus == undefined) && (isConfirmAccount == 0 || badStatus == undefined)){
				$tr.find('.ticketneedPayMoney').text(needPay);
		}
		
		//计算团成本
		var $bodyObj = $parentObj.find('.T-main-table');
		var shopRebateMoney = 0;
		var $mainTr = $parentObj.find('.T-count-ticket');
		$mainTr.find('.ticketneedPayMoney').each(function() {
			var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
			shopRebateMoney += totalSum;
		});
		shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
		$bodyObj.find('.tripCost-ticketArrangeNeedPayMoney').text(shopRebateMoney);
		//计算整个团成本
		Count.tripCost($parentObj);
	};
	//新增票务
	Count.addTicket = function($obj,$parentObj){
		
		var html = '<tr>'+
		'<td><input type="text" name="ticketName"><input type="hidden" name="ticketId"></td>'+
		'<td>'+
		'<select name="ticketType">'+
		'<option value="1">机票</option>'+
		'<option value="2">汽车票</option>'+
		'<option value="3">火车票</option>'+
		'<option value="4">轮船票</option>'+
		'</select>'+
		'</td>'+
		'<td><input type="text" name="startTime" class="date-Picker col-xs-12"/></td>'+
		'<td><input type="text" name="startArea" style="width:60px;"/></td>'+
		'<td><input type="text" name="endArea" style="width:60px;"/></td>'+
		'<td><input type="text" name="shift" style="width:60px;"/></td>'+
		'<td><input type="text" name="seatLevel" class="w-80"/></td>'+
		'<td><input type="text" name="price" class="w-80"/></td>'+
		'<td><input type="text" name="realCount" class="w-50"/></td>'+
		'<td><input type="text" name="realReduceMoney" class="w-80"/></td>'+
		'<td><span class="ticketneedPayMoney">0</span><input type="hidden" value="0" name="needPayMoney"></td>'+
		'<td>0</td>'+
		'<td>'+
		'<div class="inline-flex">'+
		'<select name="payType">'+
		'<option value="0">现金</option>'+
		'<option value="1">刷卡</option>'+
		'<option value="2">签单</option>'+
		'</select>&nbsp;'+
		'<input type="text" name="guidePayMoney" class="w-80"/></div></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input type="text" name="billRemark"/></td>'+
		'<td>未对账<a href="javascript:void(0)" class="T-ticketArrDel" style="margin-left:12px;">删除</a></td>'+
		'</tr>';
		$obj.append(html);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//获取票务公司数据
		Count.getTicketData($obj,$parentObj);
		//绑定事件
		$obj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "seatLevel" && $nameFlag != "startArea" && $nameFlag != "shift" && $nameFlag != "ticketType" && $nameFlag != "billRemark" && $nameFlag != "startTime" && $nameFlag != "endArea"){
				Count.calculateCost($(this));
				//计算金额
				Count.autoTicketSum($(this),$parentObj);
			}
		});
		//给日期格式化
		$('.date-Picker').datetimepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'L',
			language: 'zh-CN'
		});
		//删除事件
		$obj.find('.T-del').off('click').on('click',function(){
		 	
		});
	};
	//删除票务安排
	Count.delTicketArrange = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var ticketArrangeId = $tr.attr('ticketArrangeId');
		if(!!ticketArrangeId){
			showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
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
		var $tr = $obj.closest('tr');
		var $price = parseFloat($tr.find('input[name=price]').val());
		var $realCount = parseFloat($tr.find('input[name=realCount]').val());
		var $realReduceMoney = parseFloat($tr.find('input[name=realReduceMoney]').val());
		var $needPayMoney = parseFloat($tr.find('input[name=needPayMoney]').val());
		var badStatus = $tr.attr('badStatus'),isConfirmAccount = $tr.attr('isConfirmAccount');
		//规范数据
		$price = Count.changeTwoDecimal($price);
		$realCount = Count.changeTwoDecimal($realCount);
		$realReduceMoney = Count.changeTwoDecimal($realReduceMoney);
		$needPayMoney = Count.changeTwoDecimal($needPayMoney);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($price*$realCount-$realReduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		if((badStatus == 0  || badStatus == undefined) && (isConfirmAccount == 0 || isConfirmAccount == undefined)){
			$tr.find('.otherOutNeedPayMoney').text(needPay);
		}
		
		//计算团成本
		var $bodyObj = $parentObj.find('.T-main-table');
		var shopRebateMoney = 0;
		var $mainTr = $parentObj.find('.T-count-otherOut');
		$mainTr.find('.otherOutNeedPayMoney').each(function() {
			var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
			shopRebateMoney += totalSum;
		});
		shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
		$bodyObj.find('.tripCost-otherArrangeNeedPayMoney').text(shopRebateMoney);
		//计算整个团成本
		Count.tripCost($parentObj);
	};
	//新增其他支出
	Count.addOtherOut = function($obj,$parentObj){
		
		var html = '<tr>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td><input type="text" name="addOtherOutName" style="width:90px;"/></td>'+
		'<td><input type="text" name="price" class="w-80"/></td>'+
		'<td><input type="text" name="realCount" class="w-50"/></td>'+
		'<td><input type="text" name="realReduceMoney" class="w-80"/></td>'+
		'<td><span class="otherOutNeedPayMoney">0</span><input type="hidden" value="0" name="needPayMoney"></td>'+
		'<td>0</td>'+
		'<td>'+
		'<div class="inline-flex">'+
		'<select name="payType">'+
		'<option value="0">现金</option>'+
		'<option value="1">刷卡</option>'+
		'<option value="2">签单</option>'+
		'</select>&nbsp;'+
		'<input type="text" name="guidePayMoney" class="w-80"/></div></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input type="text" name="billRemark" style="width:230px;"/></td>'+
		'<td>未对账<a href="javascript:void(0)" class="T-otherOutArrDel" style="margin-left:12px;">删除</a></td>'+
		'</tr>';
		$obj.append(html);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
	};
	//删除其他支出安排
	Count.delOtherOutArrange = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var otherArrangeId = $tr.attr('otherArrangeId');
		if(!!otherArrangeId){
			showConfirmDialog($( "#confirm-dialog-message" ), '你确定要删除该条记录？', function() {
				Count.delArrangeData(otherArrangeId,'other',removeItem);
			});
		}else{
			removeItem();
		};
			
		function removeItem (){
			
			var $tripCost = $parentObj.find('.tripCost-otherArrangeNeedPayMoney');
			var sumIncome = $tr.find('.otherOutNeedPayMoney').text();
			var newTripCost = parseFloat(parseFloat($tripCost.text()-sumIncome));
		 	newTripCost = Count.changeTwoDecimal(newTripCost);
			$tripCost.text(newTripCost);
			//计算整个团成本
			Count.tripCost($parentObj);
			$tr.remove();
		};
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
									sumPerson = 0,sumBus = 0,
									nextTd = $tr.next();
								adultCount = $parentObj.find('.tripPlanAdultCount').val();
								if($parentObj.find('.busNumber').val() != 0 ){
									busNumber = 1;
								};
								sumPerson = Count.changeTwoDecimal(adultCount)*Count.changeTwoDecimal(ui.item.customerRebateMoney);
								sumBus = Count.changeTwoDecimal(busNumber)*Count.changeTwoDecimal(ui.item.parkingRebateMoney);
								$tr.find('input[name=shopId]').val(ui.item.id);
								$tr.find('input[name=shopPolicy]').val('');
								$tr.find('input[name=consumeMoney]').val(sumPerson);
								$tr.next().find('input[name=consumeMoney]').val(sumBus);
								$tr.find().val();
								Count.getShopPolicy($tr,$parentObj);
								Count.calculateCost($(this));
								//计算金额
								Count.autoShopSum($(this),$parentObj);
								Count.autoShopSum(nextTd.find('input[name=consumeMoney]'),$parentObj);
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
		if(!!shopId && !!shopId){
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
					var consumeMoney = $(this).closest('tr').find('input[name=consumeMoney]').val() || 0;
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
		if($obj.attr('selfpayarrangeid')){
			$selfPayItemObj = $obj.find('input[name=selfPayItemName]');
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
			if($obj.attr('selfpayarrangeid')){
				whichDay = $obj.attr('whichDay');
				id = $obj.find('input[name=selfPayItemId]').val();
			}else{
				whichDay = $obj.find('select[name=whichDay]').val();
				id = $obj.find('input[name=selfPayItemId]').val();
			}
			
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
					if($obj.attr('selfpayarrangeid')){
						$obj.find('.marketPrice').text(data.marketPrice);
						$obj.find('.price').text(data.price);
						$obj.find('.customerRebateMoney').text(data.customerRebateMoney);
						$obj.find('input[name=marketPrice]').val(data.marketPrice);
						$obj.find('input[name=price]').val(data.price);
						$obj.find('input[name=allPersonMoney]').val(data.customerRebateMoney);
						$obj.find('input[name=travelAgencyRate]').val(travelAgencyRate);
						$obj.find('input[name=guideRate]').val(guideRate);
						Count.autoSelfSum($td,$parentObj);

					}else{
						$obj.find('input[name=marketPrice]').val(data.marketPrice);
						$obj.find('input[name=price]').val(data.price);
						$obj.find('input[name=realCount]').val(0);
						$obj.find('input[name=allPersonMoney]').val(data.customerRebateMoney);
						$obj.find('input[name=travelAgencyRate]').val(travelAgencyRate);
						$obj.find('input[name=guideRate]').val(guideRate);
						Count.autoSelfSum($td,$parentObj);
					};
				}
				
				
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
						id:-1,
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
		var id = $obj.find('input[name=restaurantId]').val() || $obj.find('select[name=chooseRest]').val(),
			standardObj = $obj.find('input[name=price]'),
			type = $obj.find('select[name=type]').val() || $obj.find('input[name=type]').val();
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
		var startTime = $parentObj.find('.startTime_Choose').text(),
			whichDay = $obj.find('select[name=whichDay]').val(),
			id = $obj.find('input[name=scenicItemId]').val();
		$.ajax({
			url:KingServices.build_url('scenic','getScenicItemPrice'),
			data:{
				id:id,
				whichDay:whichDay,
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
	Count.authFilter = function(obj,tripPlanList){
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
                var right,status = tripPlanList[i].tripPlan.billStatus;
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
				$(this).blur();
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
	Count.getGuideData = function($obj){
        	$obj.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).closest('div').find('input[name="guideId"]').val('');
					}
				},
				select:function(event,ui){
					$(this).blur();
					$(this).closest('div').find('input[name="guideId"]').val(ui.item.id);
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:KingServices.build_url("guide","findAll"),
					type:'POST',
					data:{
						menuKey:"resource_guide"
					},
                    showLoading:false,
                    success: function(data) {
						var result = showDialog(data);
						if(result){
							var guideList = JSON.parse(data.guideList);
							if(guideList != null && guideList.length > 0){
								for(var i=0;i<guideList.length;i++){
									guideList[i].value = guideList[i].realname;
								}
							}
							$(obj).autocomplete('option','source', guideList);
							$(obj).autocomplete('search', '');
						}
                    }
                });
			});
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
        if(parseInt(days) < 1)return;
        if($obj){
            var tr = $obj.find("tr");
            var selectText = '<select class="col-sm-12" name="whichDay">';
            for(var i = minDay; i <= maxDay; i++){
                selectText += '<option value="'+(i)+'">'+Tools.addDay(startTime, i-1)+'</option>';
            }
            selectText += '</select>';
            if(!!type){
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
	                		var $tr = $obj.closest('tr');
	                		
	                		if(travelAgencyRate > 0) {
	                			$tr.find("input[name=travelAgencyRate]").val(travelAgencyRate);
	                			Count.autoShopSum($obj,$bodyObj);
	                			Count.totalRebeatMoney($obj,$bodyObj);
	                		}
	                		if(guideRate > 0) {
	                			$tr.find("input[name=guideRate]").val(guideRate);
	                			Count.autoShopSum($obj,$bodyObj);
	                			Count.totalRebeatMoney($obj,$bodyObj);
	                		}	                		
	                	}else{
	                	 	$obj.closest('tr').find("input[name=travelAgencyRate]").val(0);
	                	 	$obj.closest('tr').find("input[name=guideRate]").val(0);
	                	 	Count.autoShopSum($obj,$bodyObj);
	                	 	Count.totalRebeatMoney($obj,$bodyObj);
	                	};
	                	 
					}
				}
			});
		}
		
	};
	//保存数据
	Count.saveTripCount = function(id, financialTripPlanId,$obj,typeFlag){
		var method = typeFlag == 1?'update':'webGuideAccountUpdate';
		Count.shopClickCount = 0;
		//组装数据
		var saveJsonStr = Count.installData(id,$obj);
		var shopList = saveJsonStr.shopArrangeList;
		for(var i = 0;i<shopList.length;i++){
			if(shopList[i].shopId == "" || shopList[i].shopPolicyId == ""){
				var message="";
				if(shopList[i].shopId == ""){
					message = "请选择购物店"
				}else{
					if(shopList[i].shopPolicyId == ""){
						message="请选择商品"
					}
				};
				showMessageDialog($("#confirm-dialog-message"),message);
				return;
			}
		}
		//校验同一天不能安排同一家购物店
		var submitStatus =  Count.checkShopArrange(saveJsonStr.shopArrangeList);
		if(submitStatus){
			showMessageDialog($( "#confirm-dialog-message" ),"您在同一天，安排了同一家购物店，请检查");
			return;
		};
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
				showMessageDialog($("#confirm-dialog-message"),message);
				return;
			}
		}

		var addRestList = saveJsonStr.addRestArrangeList;
		for(var i = 0;i<addRestList.length;i++){
			// 不校验餐标
			if(addRestList[i].restaurantId == ""){
				var message="";
				if(addRestList[i].restaurantId == ""){
					message = "请选择餐厅"
				};
				showMessageDialog($("#confirm-dialog-message"),message);
				return;
			}
		}
		/*//导游自选餐厅
		if(typeFlag == 3){
			var restaurantList= saveJsonStr.restaurantArrangeList;
			for(var i = 0;i<restaurantList.length;i++){
				if(restaurantList[i].isChoose == 1 && restaurantList[i].restaurantId==0){
					message = "请选择导游自选餐厅";
					showMessageDialog($("#confirm-dialog-message"),message);
					return;
				}
			}
		};*/
		var addBusList = saveJsonStr.addBusArrangeList;
		for(var i = 0;i<addBusList.length;i++){
			if(addBusList[i].busCompanyId == ""){
				var message="";
				if(addBusList[i].busCompanyId == ""){
					message = "请选择车队"
				}
				showMessageDialog($("#confirm-dialog-message"),message);
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
				showMessageDialog($("#confirm-dialog-message"),message);
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
				showMessageDialog($("#confirm-dialog-message"),message);
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
				showMessageDialog($("#confirm-dialog-message"),message);
				return;
			}
		}

		var addoOherInList = saveJsonStr.otherInList;
		for(var i = 0;i<addoOherInList.length;i++){
			if(addoOherInList[i].title == "" || addoOherInList[i].price == "" || addoOherInList[i].count == ""){
				var message="";
				if(addoOherInList[i].title == ""){
					message = "请输入项目"
				}else{
					if(addoOherInList[i].price == ""){
						message="请输入单价"
					}else{
						if(addoOherInList[i].count == ""){
							message="请输入数量"
						}
					}
				};
				showMessageDialog($("#confirm-dialog-message"),message);
				return;
			}
		}

		var addoOherList = saveJsonStr.otherArrangeList;
		for(var i = 0;i<addoOherList.length;i++){
			if(addoOherList[i].title == "" || addoOherList[i].price == "" || addoOherList[i].realCount == ""){
				var message="";
				if(addoOherList[i].title == ""){
					message = "请输入项目"
				}else{
					if(addoOherList[i].price == ""){
						message="请输入单价"
					}else{
						if(addoOherList[i].realCount == ""){
							message="请输入数量"
						}
					}
				};
				showMessageDialog($("#confirm-dialog-message"),message);
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
				showMessageDialog($("#confirm-dialog-message"),message);
				return;
			}
		}

		saveJsonStr = JSON.stringify(saveJsonStr);

		var url = KingServices.build_url('financialTripPlan',method);
		if(typeFlag == 3){
			url += "&category=category";
		}
		$.ajax({
			url: url,
			data:{
				saveJson:saveJsonStr
			},
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if (result) {
					showMessageDialog($( "#confirm-dialog-message" ),data.message);
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
					showMessageDialog($( "#confirm-dialog-message" ),data.message);
        			Count.listCountHeader(0);
            		Tools.closeTab(ReimbursementId);
				}
			}
		});
	};
	//组装数据
	Count.installData = function(id,$obj){
		var saveJson = {
			"financialTripPlan":{},
			"touristGroupList":[],
			"shopArrangeList":[],
			"addShopArrangeList":[],
			"selfPayArrangeList":[],
			"addSelfPayArrangeList":[],
			"otherInList":[],
			"busCompanyArrangeList":[],
			"addBusArrangeList":[],
			"restaurantArrangeList":[],
			"addRestArrangeList":[],
			"hotelArrangeList":[],
			"addHotelArrangeList":[],
			"scenicArrangeList":[],
			"addScenicArrangeList":[],
			"ticketArrangeList":[],
			"addTicketArrangeList":[],
			"otherArrangeList":[],
			"guideArrangeList":[],
	        "remarkArrangeList":[],
	        "log":{
				"type":"1",
				"info":{
					"message":"",
				},
				"shopLog":[],
				"selfPayLog":[],
				"otherInLog":[],
				"busLog":[],
				"restaurantLog":[],
				"hotelLog":[],
				"scenicLog":[],
				"ticketLog":[],
				"otherLog":[]
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
			var data = {
				id:$(this).attr('id'),
				currentNeedPayMoney:$(this).find('input[name=currentNeedPayMoney]').val(),
				isReceived:$(this).find('[name=receiveStatus]').val()
			}
			saveJson.touristGroupList.push(data);
		});
		//购物数据
		var $shopObj = $obj.find('.T-count-shopping'),
		$tr = $shopObj.find('tr').not('.T-noSubmit'),
		$dataTr = $shopObj.find('.oldData').not('.T-noSubmit');
		$dataTr.each(function(i){
			var shopArrange,shopArrangeItemSet = [],$that = $(this),$thatTd_len = $(this).children('td').length;
			var id = "",shopId = '',whichDay = 1,td_len = $(this).children('td').length;
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
				if(!!$that.attr('shopId')){
					for(var j = 0;j<$tr.length;j++){
						var $thisTr = $tr.eq(j),turnFlag = false;
						if(!!$that.attr('shopId')){
							if($that.attr('shopId') == $thisTr.attr('shopId') && $that.attr('whichDay') == $thisTr.attr('whichDay')){
								shopArrange = {
									id:id,
									shopId:shopId,
									whichDay:whichDay,
									rebateCurrentIncomeMoney:Count.changeTwoDecimal(parseFloat($that.find('input[name=currInCome]').val())),
								};
								itemSet={
									id:$thisTr.find('input[name=shopPolicyArrId]').val() || '',
									shopPolicyId:$thisTr.find('input[name=shopPolicyId]').val() || '',
									name:$thisTr.find('input[name=shopPolicy]').val(),
									consumeMoney:$thisTr.find('input[name=consumeMoney]').val(),
									billRemark:$thisTr.find('input[name=billRemark]').val(),
									guideRate:parseFloat($thisTr.find('input[name=guideRate]').val())/100,
									guideRebateMoney:$thisTr.find('input[name=guideRateMoney]').val(),
									travelAgencyRate:parseFloat($thisTr.find('input[name=travelAgencyRate]').val())/100,
									travelAgencyRebateMoney:$thisTr.find('input[name=travelAgencyRateMoney]').val()
								};
								shopArrangeItemSet.push(itemSet);
								shopArrange.shopArrangeItemSet = shopArrangeItemSet;
							};
						};
					}
				}else{
					var $newTr = $that,
						$nextTr = $newTr.nextAll(),
						td_cnt = $newTr.children('td').length;
						for(var i = 0;i<$nextTr.length;i++){
							var tdLen = $nextTr.eq(i).children('td').length,
								$thisTr = $nextTr.eq(i);
							if(tdLen < td_cnt){
								if(i==0){
									shopArrange = {
										id:id,
										shopId:shopId,
										whichDay:whichDay,
										rebateCurrentIncomeMoney:Count.changeTwoDecimal(parseFloat($newTr.find('input[name=currInCome]').val()))
									};
									itemSet={
										id:$newTr.find('input[name=shopPolicyArrId]').val() || '',
										shopPolicyId:$newTr.find('input[name=shopPolicyId]').val() || '',
										name:"人数返佣",
										consumeMoney:$newTr.find('input[name=consumeMoney]').val(),
										billRemark:$newTr.find('input[name=billRemark]').val(),
										guideRate:parseFloat($newTr.find('input[name=guideRate]').val())/100,
										guideRebateMoney:$newTr.find('input[name=guideRateMoney]').val(),
										travelAgencyRate:parseFloat($newTr.find('input[name=travelAgencyRate]').val())/100,
										travelAgencyRebateMoney:$newTr.find('input[name=travelAgencyRateMoney]').val()
									};
									shopArrangeItemSet.push(itemSet);
									shopArrange.shopArrangeItemSet = shopArrangeItemSet;

									shopArrange = {
										id:id,
										shopId:shopId,
										whichDay:whichDay,
										rebateCurrentIncomeMoney:Count.changeTwoDecimal(parseFloat($newTr.find('input[name=currInCome]').val()))
									};
									itemSet={
										id:$thisTr.find('input[name=shopPolicyArrId]').val() || '',
										shopPolicyId:$thisTr.find('input[name=shopPolicyId]').val() || '',
										name:$thisTr.find('input[name=shopPolicy]').val(),
										consumeMoney:$thisTr.find('input[name=consumeMoney]').val(),
										billRemark:$thisTr.find('input[name=billRemark]').val(),
										guideRate:parseFloat($thisTr.find('input[name=guideRate]').val())/100,
										guideRebateMoney:$thisTr.find('input[name=guideRateMoney]').val(),
										travelAgencyRate:parseFloat($thisTr.find('input[name=travelAgencyRate]').val())/100,
										travelAgencyRebateMoney:$thisTr.find('input[name=travelAgencyRateMoney]').val()
									};
									shopArrangeItemSet.push(itemSet);
									shopArrange.shopArrangeItemSet = shopArrangeItemSet;

								}else{
									shopArrange = {
										id:id,
										shopId:shopId,
										whichDay:whichDay,

									};
									itemSet={
										id:$thisTr.find('input[name=shopPolicyArrId]').val() || '',
										shopPolicyId:$thisTr.find('input[name=shopPolicyId]').val() || '',
										name:$thisTr.find('input[name=shopPolicy]').val(),
										consumeMoney:$thisTr.find('input[name=consumeMoney]').val(),
										billRemark:$thisTr.find('input[name=billRemark]').val(),
										guideRate:Count.changeToString(parseFloat($thisTr.find('input[name=guideRate]').val())/100),
										guideRebateMoney:$thisTr.find('input[name=guideRateMoney]').val(),
										travelAgencyRate:Count.changeToString(parseFloat($thisTr.find('input[name=travelAgencyRate]').val())/100),
										travelAgencyRebateMoney:$thisTr.find('input[name=travelAgencyRateMoney]').val()
									};
									shopArrangeItemSet.push(itemSet);
									shopArrange.shopArrangeItemSet = shopArrangeItemSet;
								};	
							}else{
								break;
							};
						}
				};
				saveJson.shopArrangeList.push(shopArrange);
		});
		//自费数据
		var $selfObj = $obj.find('.T-count-selfPay'),
		$tr = $selfObj.find('tr');
		$tr.each(function(){
			if($(this).attr('selfPayArrangeId')){
				var shopId = $(this).attr('shopid');
				var selfPayArrange = {
						"id":Count.changeToString($(this).attr('selfPayArrangeId')),
						"selfPayItemId":$(this).find('input[name=selfPayItemId]').val() || '',
						"realPrice":$(this).find('input[name=price]').val(),
						"realMarketPrice":$(this).find('input[name=marketPrice]').val(),
						"realCount":Count.changeToString($(this).find('input[name=realCount]').val()),
						"realReduceMoney":Count.changeToString($(this).find('input[name=realReduceMoney]').val()),
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val()),
						"realGetMoney":Count.changeToString($(this).find('input[name=realGetMoney]').val()),
						"travelAgencyRate":Count.changeToString(parseFloat($(this).find('input[name=travelAgencyRate]').val())/100),
						"travelAgencyRebateMoney":Count.changeToString($(this).find('input[name=travelAgencyRebateMoney]').val()),
						"guideRate":Count.changeToString(parseFloat($(this).find('input[name=guideRate]').val())/100),
						"billRemark":$(this).find('input[name=billRemark]').val(),
						"needIncomeCount":$(this).find('input[name=needCount]').val(),
						"realPayType":$(this).find('[name=payType]').val(),
						"guideRebateMoney":Count.changeToString($(this).find('input[name=guideRebateMoney]').val())
				}
				saveJson.selfPayArrangeList.push(selfPayArrange);
			}else{
				var addSelfArrange = {
					id:'',
					whichDay:$(this).find('select[name=whichDay]').val(),
					selfPayId:$(this).find('input[name=selfPayId]').val(),
					selfPayItemId:$(this).find('input[name=selfPayItemId]').val(),
					realMarketPrice:$(this).find('input[name=marketPrice]').val(),
					realPrice:$(this).find('input[name=price]').val(),
					allPersonMoney:$(this).find('input[name=allPersonMoney]').val(),
					realCount:$(this).find('input[name=realCount]').val(),
					realReduceMoney:$(this).find('input[name=realReduceMoney]').val(),
					needPayMoney:$(this).find('.needPayMoney').text(),
					payedMoney:$(this).find('input[name=hasPayedMoney]').val(),
					realGuidePayMoney:$(this).find('input[name=guidePayMoney]').val(),
					travelAgencyRate:Count.changeTwoDecimal(parseFloat($(this).find('input[name=travelAgencyRate]').val())/100),
					travelAgencyRebateMoney:$(this).find('[name=travelAgencyRebateMoney]').val(),
					guideRate:Count.changeTwoDecimal(parseFloat($(this).find('input[name=guideRate]').val())/100),
					realGetMoney:$(this).find('input[name=realGetMoney]').val(),
					guideRebateMoney:$(this).find('[name=guideRebateMoney]').val(),
					billRemark:$(this).find('input[name=billRemark]').val(),
					realPayType:$(this).find('[name=payType]').val(),
					needIncomeCount:$(this).find('input[name=needCount]').val()
				}
				saveJson.addSelfPayArrangeList.push(addSelfArrange)	
			};
		});
		//其他收入数据
		var $otherInObj = $obj.find('.T-count-otherIn'),
		$tr = $otherInObj.find('tr');
		$tr.each(function(){
			if($(this).attr('otherInId')){
                var otherIn = {
	                "id":$(this).attr('otherInId'),
	                "title":$(this).find('input[name="title"]').val(),
	                "price":$(this).find('input[name="price"]').val(),
	                "count":$(this).find('input[name="count"]').val(),
	                "billRemark":$(this).find('input[name="billRemark"]').val()
                }
            saveJson.otherInList.push(otherIn);
            }else{
                var otherIn = {
                "tripPlanId":id,
                "whichDay":$(this).find('select[name="whichDay"]').val(),
                "title":$(this).find('input[name="title"]').val(),
                "price":$(this).find('input[name="price"]').val(),
                "count":$(this).find('input[name="count"]').val(),
                "billRemark":$(this).find('input[name="billRemark"]').val(),
                }
            saveJson.otherInList.push(otherIn);
            }
		});
		//车费数据
		var $busObj = $obj.find('.T-count-bus'),
		$tr = $busObj.find('tr');
		$tr.each(function(){
			if($(this).attr('busCompanyArrangeId')) {
				var busCompanyArrange = {
						"id":Count.changeToString($(this).attr('busCompanyArrangeId')),
						"realPrice":Count.changeToString($(this).find('input[name=price]').val()),
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"realReduceMoney":Count.changeToString($(this).find('input[name=realReduceMoney]').val()),
						"billRemark":$(this).find('input[name=billRemark]').val(),
						"realPayType":$(this).find('[name=payType]').val(),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val())
				}
				saveJson.busCompanyArrangeList.push(busCompanyArrange);
			}else{
				var obj = $(this);
				var busArrange = {
					startTime:obj.find('input[name=startTime]').val(),
					endTime:obj.find('input[name=endTime]').val(),
					busCompanyId:obj.find('input[name=companyId]').val(),
					taskType:obj.find('select[name=taskType]').val(),
					licenseNumber:obj.find('input[name=licenseNumber]').val(),
					brand:'',
					busId:obj.find('input[name=busId]').val(),
					needSeatCount:obj.find('input[name=seatCount]').val(),
					payedMoney:obj.find('input[name=payedMoney]').val(),
					realPrice:obj.find('input[name=price]').val(),
					realGuidePayMoney:obj.find('input[name=guidePayMoney]').val(),
					realReduceMoney:obj.find('input[name=realReduceMoney]').val(),
					realPayType:$(this).find('[name=payType]').val(),
					billRemark:obj.find('input[name=billRemark]').val()
				};
				saveJson.addBusArrangeList.push(busArrange);
			}
		});
		//餐费数据
		var $restObj = $obj.find('.T-count-restaurant'),
		$tr = $restObj.find('tr');
		$tr.each(function(){
			if($(this).attr('restaurantArrangeId')){
				var restaurantArrange = {
						"id":Count.changeToString($(this).attr('restaurantArrangeId')),
						"isChoose":Count.changeToString($(this).attr('isChoose')),
						"realCount":Count.changeToString($(this).find('input[name=realCount]').val()),
						"restaurantId":Count.changeToString($(this).find('select[name=chooseRest]').val()) || "",
						"restaurantStandardId":$(this).find('input[name=standardId]').val() || "",
						"realPrice":$(this).find('input[name=price]').val(),
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"realReduceMoney":Count.changeToString($(this).find('input[name=realReduceMoney]').val()),
						"billRemark":$(this).find('input[name=billRemark]').val(),
						"realPayType":$(this).find('[name=payType]').val(),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val())
				}
				saveJson.restaurantArrangeList.push(restaurantArrange);
			}else{
				var addRestArrange = {
					id:'',
					whichDay:$(this).find('select[name=whichDay]').val(),
					restaurantId:$(this).find('input[name=restaurantId]').val(),
					type:$(this).find('select[name=type]').val(),
					restaurantStandardId:$(this).find('input[name=standardId]').val(),
					realPrice:$(this).find('input[name=price]').val(),
					realCount:$(this).find('input[name=realCount]').val(),
					realReduceMoney:$(this).find('input[name=realReduceMoney]').val(),
					payedMoney:$(this).find('input[name=payedMoney]').val(),
					realGuidePayMoney:$(this).find('input[name=guidePayMoney]').val(),
					billRemark:$(this).find('input[name=billRemark]').val(),
					realPayType:$(this).find('[name=payType]').val()
				}
				saveJson.addRestArrangeList.push(addRestArrange);
			}
		});
		//房费数据
		var $hotelObj = $obj.find('.T-count-hotel'),
		$tr = $hotelObj.find('tr');
		$tr.each(function(){
			if($(this).attr('hotelArrangeId')) {
				var hotelArrange = {
						"id":Count.changeToString($(this).attr('hotelArrangeId')),
						"realCount":Count.changeToString($(this).find('input[name=realCount]').val()),
						"realPrice":$(this).find('input[name=price]').val(),
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"realReduceMoney":Count.changeToString($(this).find('input[name=realReduceMoney]').val()),
						"billRemark":$(this).find('input[name=billRemark]').val(),
						"realPayType":$(this).find('[name=payType]').val(),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val())
				}
				saveJson.hotelArrangeList.push(hotelArrange);
			}else{
				var addHotelArrange = {
					id:'',
					whichDay:$(this).find('select[name=whichDay]').val(),
					hotelId:$(this).find('input[name=hotelId]').val(),
					hotelRoomId:$(this).find('input[name=hotelRoomId]').val(),
					realPrice:$(this).find('input[name=price]').val(),
					realCount:$(this).find('input[name=realCount]').val(),
					realReduceMoney:$(this).find('input[name=realReduceMoney]').val(),
					payedMoney:$(this).find('input[name=payedMoney]').val(),
					realGuidePayMoney:$(this).find('input[name=guidePayMoney]').val(),
					realPayType:$(this).find('[name=payType]').val(),
					billRemark:$(this).find('input[name=billRemark]').val()
				}
				saveJson.addHotelArrangeList.push(addHotelArrange);
			}
		});
		//景区数据
		var $scenicObj = $obj.find('.T-count-scenic'),
		$tr = $scenicObj.find('tr');
		$tr.each(function(){
			if($(this).attr('scenicArrangeId')) {
				var scenicArrange = {
						"id":Count.changeToString($(this).attr('scenicArrangeId')),
						"realCount":Count.changeToString($(this).find('input[name=realCount]').val()),
						"realPrice":$(this).find('input[name=price]').val(),
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"realReduceMoney":Count.changeToString($(this).find('input[name=realReduceMoney]').val()),
						"billRemark":$(this).find('input[name=billRemark]').val(),
						"realPayType":$(this).find('[name=payType]').val(),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val())
				}
				saveJson.scenicArrangeList.push(scenicArrange);
			}else{
				var addScenic = {
					id:'',
					whichDay:$(this).find('select[name=whichDay]').val(),
					scenicId:$(this).find('input[name=scenicId]').val(),
					scenicItemId:$(this).find('input[name=scenicItemId]').val(),
					realPrice:$(this).find('input[name=price]').val(),
					realCount:$(this).find('input[name=realCount]').val(),
					realReduceMoney:$(this).find('input[name=realReduceMoney]').val(),
					payedMoney:$(this).find('input[name=payedMoney]').val(),
					realGuidePayMoney:$(this).find('input[name=guidePayMoney]').val(),
					realPayType:$(this).find('[name=payType]').val(),
					billRemark:$(this).find('input[name=billRemark]').val()
				}
				saveJson.addScenicArrangeList.push(addScenic);
			}
		});
		//票务数据
		var $ticketObj = $obj.find('.T-count-ticket'),
		$tr = $ticketObj.find('tr');
		$tr.each(function(){
			if($(this).attr('ticketArrangeId')) {
				var ticketArrange = {
						"id":Count.changeToString($(this).attr('ticketArrangeId')),
						"realCount":Count.changeToString($(this).find('input[name=realCount]').val()),
						"realPrice":$(this).find('input[name=price]').val(),
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"realReduceMoney":Count.changeToString($(this).find('input[name=realReduceMoney]').val()),
						"billRemark":$(this).find('input[name=billRemark]').val(),
						"realPayType":$(this).find('[name=payType]').val(),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val())
				}
				saveJson.ticketArrangeList.push(ticketArrange);
			}else{
				var addTicket = {
					id:'',
					ticketId:$(this).find('input[name=ticketId]').val(),
					type:$(this).find('select[name=ticketType]').val(),
					startTime:$(this).find('input[name=startTime]').val(),
					startingCity:$(this).find('input[name=startArea]').val(),
					arriveCity:$(this).find('input[name=endArea]').val(),
					seatLevel:$(this).find('input[name=seatLevel]').val(),
					realPrice:$(this).find('input[name=price]').val(),
					shift:$(this).find('input[name=shift]').val(),
					realCount:$(this).find('input[name=realCount]').val(),
					realReduceMoney:$(this).find('input[name=realReduceMoney]').val(),
					payedMoney:$(this).find('input[name=payedMoney]').val(),
					realGuidePayMoney:$(this).find('input[name=guidePayMoney]').val(),
					billRemark:$(this).find('input[name=billRemark]').val(),
					realPayType:$(this).find('[name=payType]').val()
				};
				saveJson.addTicketArrangeList.push(addTicket);
			}
		});
		//其他支出
		var $otherOut = $obj.find('.T-count-otherOut'),
		$tr = $otherOut.find('tr');
		$tr.each(function(){
			if($(this).attr('otherArrangeId')){
                var otherArrange = {
                    "id":$(this).attr('otherArrangeId'),
                    "realPrice":$(this).find('input[name="price"]').val(),
                    "count":$(this).find('input[name="realCount"]').val(),
                    "realReduceMoney":Count.changeToString($(this).find('input[name=realReduceMoney]').val()),
                    "realGuidePayMoney":$(this).find('input[name="realGuidePayMoney"]').val(),
                    "realPayType":$(this).find('[name=payType]').val(),
                    "billRemark":$(this).find('input[name="billRemark"]').val()
                }
                saveJson.otherArrangeList.push(otherArrange);
            }else{var otherArrange = {
            		id:'',
                    "whichDay":$(this).find('select[name="whichDay"]').val(),
                    "title":$(this).find('input[name="addOtherOutName"]').val(),
                    "realPrice":$(this).find('input[name="price"]').val(),
                    "realCount":$(this).find('input[name="realCount"]').val(),
                    "realReduceMoney":$(this).find('input[name="realReduceMoney"]').val(),
                    "payedMoney":$(this).find('input[name="payedMoney"]').val(),
                    "realGuidePayMoney":$(this).find('input[name="guidePayMoney"]').val(),
                    "realPayType":$(this).find('[name=payType]').val(),
                    "billRemark":$(this).find('input[name="billRemark"]').val()
                }
                saveJson.otherArrangeList.push(otherArrange);
            }
		});
		//导游
		var $guideObj = $obj.find('.T-count-guide'),
		$tr = $guideObj.find('tr');
		$tr.each(function(){
			if($(this).attr('isAccountGuide') == 1){
				var guideJson = {
					id:$(this).attr('arrangeid'),
					price:$(this).find('input[name=price]').val(),
					manageFee:$(this).find('input[name=manageFee]').val(),
					remark:$(this).find('input[name=remark]').val()
				};
				saveJson.guideArrangeList.push(guideJson);
			}
		});
		
		// 批注
        var $tab = $obj,
            $financialRemark = $tab.find('input[name="accountFinancialCheckComment"]'),
            $accountOPCheckComment = $tab.find('input[name="accountOPCheckComment"]'),
            remarkList = [];
        for (var i = 0, len = $financialRemark.length, opCheckRemark, financeCheckRemark; i < len; i ++)  {
            opCheckRemark = $financialRemark.eq(i).val();
            financeCheckRemark = $accountOPCheckComment.eq(i).val();
            if (opCheckRemark || financeCheckRemark)  {
                remarkList.push({
                    type: (i+''),               // server要求字符串
                    opCheckRemark: opCheckRemark,
                    financeCheckRemark: financeCheckRemark
                })
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
		var submitStatus = false;
		for(var i = 0 ;i<dataArr.length;i++){
			for(var j = i+1;j<dataArr.length;j++){
				if(dataArr[i].shopId == dataArr[j].shopId && dataArr[i].whichDay == dataArr[j].whichDay){
					submitStatus = true
				}
			}
		}
		return submitStatus;
	};
	//删除安排
	Count.delArrangeData = function(id,nameFlag,fn){
		$.ajax({
			url: KingServices.build_url("financialTripPlan","deleteArrange"),
            type: "post",
            data:"cateName="+nameFlag+"&cateId="+id,
            success: function(data) {
				if(showDialog(data)){
					showMessageDialog($( "#confirm-dialog-message" ),"删除成功!");
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
				var html = '<td class="whichDay" rowspan = '+rowSpan+'>'+whichDay+'</td>'+
					'<td class="nameType" rowspan = '+rowSpan+'>'+nameType+'</td>';
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
	}
	exports.init = Count.initModule;
	exports.tripDetail = Count.viewTripDetail;
	exports.viewTripAccount = Count.viewTripAccount;
});