define(function(require, exports){
	var menuKey = 'financial_count',
		listHeaderTamplate = require('./view/listHeader'),
		listTableTemplate = require('./view/listTable'),
		updateTemplate = require("./view/update"),
		Reimbursement = require("./view/Reimbursement"),
		arrangeDetailTempLate = require("./view/arrangeDetail"),
		groupDetailTemplate = require("./view/groupDetail"),
		qualityTempLate = require("./view/quality"),
		billImageTempLate = require("./view/billImage"),
		viewLogTemplate = require("./view/viewLog"),
		outDetailTempLate = require("./view/outDetail"),
		tripDetailTempLate = require("./view/tripDetail"),
		billImageTempLate = require("./view/billImage"),
		viewLogTemplate = require("./view/viewLog"),
		updateTabId = menuKey+"-update",
		ReimbursementId = menuKey+"-Reimbursement",
		detailId= menuKey + "-detail",
		outDetailId= menuKey + "-outDetail",
		qualityId = menuKey+"-quality",
		tripDetailId = menuKey+"-tripDetail",
		listTabId = menuKey;
	var Count = {
		$listTab:false,
		$updateTab:false,
		$ReimbursementTab:false,
		$listBodyTab:false,
		$searchArea:false,
		$args:{}
	};
	//暴露的方法--初始化列表
	Count.initModule = function(){
		Count.listCountHeader(0,'','','','','','','')
	};
	//列表头部
	Count.listCountHeader = function(pageNo,id,tripNumber,lineProductId,lineProductName,guideId,guideName,startTime,endTime,status){
		if(Count.$searchArea && arguments.length === 1){
			id:"",
			tripNumber = Count.$searchArea.find('input[name=chooseTripNumber]').val();
			lineProductId = Count.$searchArea.find('input[name=lineProductId]').val();
			lineProductName = Count.$searchArea.find('input[name=chooseLineProductName]').val();
			guideId = Count.$searchArea.find('input[name=guideId]').val();
			guideName = Count.$searchArea.find('input[name=chooseGuideRealName]').val();
			endTime = Count.$searchArea.find('input[name=endTime]').val();
			startTime = Count.$searchArea.find('input[name=startTime]').val();
			status = Count.$searchArea.find(".T-select-status").attr("data-value");
		};
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
                guideName:guideName
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					var html = listHeaderTamplate(data);
					Tools.addTab(listTabId,'报账审核',html);
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
		                guideName:guideName
					};
					//获取主体列表数据
					Count.listCountBody(Count.$args);
                	//格式化日期
                	Count.formatDate(Count.$searchArea);
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
					console.log(data.insurancePrice);
					var tmp = {
	                    "busCompanyArrange":JSON.parse(data.busCompanyArrange),
	                    "tripPlan":JSON.parse(data.tripPlan),
	                    "dayList":JSON.parse(data.dayList),
	                    "guideArrange":JSON.parse(data.guideArrange),
	                    "insuranceArrangeList":JSON.parse(data.insuranceArrangeList),
	                    "ticketArrangeList":JSON.parse(data.ticketArrangeList),
	                    "WEB_IMG_URL_BIG":data.WEB_IMG_URL_BIG,
	                    "WEB_IMG_URL_SMALL":data.WEB_IMG_URL_SMALL,
	                    "touristGroup":data.touristGroup,
	                    "financialTripPlanId":data.financialTripPlanId,
	                    "insurancePrice":data.insurancePrice,
	                    "arrangeIncomePaymentList":JSON.parse(data.arrangeIncomePaymentList),
	                    "remarkArrangeList": JSON.parse(data.remarkArrangeList)
	                };
	                console.log(tmp);
	                var html = tripDetailTempLate(tmp);
	                Tools.addTab(tripDetailId,'单团明细',html);
	                var $detailId = $("#tab-"+tripDetailId+"-content");
	                //绑定自动计算事件
	                Count.detailEvents($detailId);
				}
			}
		});
	};
	//单团明细页面事件
	Count.detailEvents = function($obj){
		var $listObj = $obj.find('.T-list');
		//团款明细
		var $tripDetailObj = $listObj.find('.T-tripDetail');
		$tripDetailObj.find('.T-viewGroupDetail').off('click').on('click',function(){
			var $tripId = $obj.find('.financial-tripPlanId').val();
			Count.viewGroupDetail($tripId);
		});
		//中转明细
		var $tripDetailObj = $listObj.find('.T-transit');
		$tripDetailObj.find('.T-viewTripTransit').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
			Count.ViewOutDetail(id);
		});
		//购物
		var $shopObj = $listObj.find('.T-count-shopping');
		$shopObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.calculateCost($(this));
			//计算金额
			Count.autoShopSum($(this),$obj);
		});
		//自费
		var $selfObj = $listObj.find('.T-count-selfPay');
		$selfObj.find('input[type=hidden]').off('change').on('change',function(){
			//校验输入的数据是否合法
			Count.calculateCost($(this));
			//计算自费金额
			Count.autoSelfSum($(this),$obj);
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
			}
		});
		
		
		//车费--计算、新增
		var $busObj = $listObj.find('.T-count-bus');
		$busObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.autoBusSum($(this),$obj);
		});
		//餐费处理--计算、新增
		var $restObj = $listObj.find('.T-count-restaurant');
		$restObj.find('input[type="hidden"]').off('change').on('change',function(){
			Count.autoRestaurantSum($(this),$obj);
		});
		//房费处理--计算、新增
		var $hotelObj = $listObj.find('.T-count-hotel');
		$hotelObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoHotelSum($(this),$obj);
		});
		//景区处理--计算、新增
		var $scenicObj = $listObj.find('.T-count-scenic');
		$scenicObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoScenicSum($(this),$obj);
		});
		//票务处理--计算、新增
		var $ticketObj = $listObj.find('.T-count-ticket');
		$ticketObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoTicketSum($(this),$obj);
		});
		//其他支出
		var $totherOutObj = $listObj.find('.T-count-otherOut');
		$totherOutObj.find('input[type=hidden]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoOtherOutSum($(this),$obj);
		});
		//触发页面的change事件
		$obj.find('input[type=hidden]').trigger('change');
		//计算中转成本
		Count.tripTransferCost($obj);
		//计算团收入
		Count.tripIncome($obj);
		//按钮时间--安排预算表
		$obj.find('.T-tripPlanArrange').off('click').on('click',function() {
			var id = $(this).attr('data-entity-id');
			id = $obj.find('.financial-tripPlanId').val();
			Count.arrangeDetail(id);
		});
		//触发页面的change事件
		$obj.find('input[type=hidden]').trigger('change');
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
	                    "busCompanyArrange":JSON.parse(data.busCompanyArrange),
	                    "tripPlan":JSON.parse(data.tripPlan),
	                    "dayList":JSON.parse(data.dayList),
	                    "guideArrange":JSON.parse(data.guideArrange),
	                    "insuranceArrangeList":JSON.parse(data.insuranceArrangeList),
	                    "ticketArrangeList":JSON.parse(data.ticketArrangeList),
	                    "WEB_IMG_URL_BIG":data.WEB_IMG_URL_BIG,
	                    "WEB_IMG_URL_SMALL":data.WEB_IMG_URL_SMALL,
	                    "touristGroup":data.touristGroup,
	                    "financialTripPlanId":data.financialTripPlanId,
	                    "insurancePrice":data.insurancePrice,
	                    "arrangeIncomePaymentList":JSON.parse(data.arrangeIncomePaymentList),
	                    "remarkArrangeList": JSON.parse(data.remarkArrangeList)
	                };
	                var html = Reimbursement(tmp);
	                console.log(tmp);
	                Tools.addTab(ReimbursementId,'单团报账',html);
	                var $ReimbursementId = $("#tab-"+ReimbursementId+"-content");
					Count.$ReimbursementTab = $ReimbursementId;
					//页面事件
					Count.reimbursementEvents($ReimbursementId);
				}
			}
		});
	};
	//单团报账页面事件
	Count.reimbursementEvents = function($obj){
		var $listObj = $obj.find('.T-list');
		//团款明细
		var $tripDetailObj = $listObj.find('.T-tripDetail');
		$tripDetailObj.find('.T-viewGroupDetail').off('click').on('click',function(){
			var $tripId = $obj.find('.financial-tripPlanId').val();
			Count.viewGroupDetail($tripId);
		});
		//中转明细
		var $tripDetailObj = $listObj.find('.T-transit');
		$tripDetailObj.find('.T-viewTripTransit').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
			Count.ViewOutDetail(id);
		});
		//购物处理--计算、新增
		var $shopObj = $listObj.find('.T-count-shopping');

		$shopObj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "billRemark" && $nameFlag != "consumeMoney"){
				Count.calculateCost($(this));
				//计算金额
				Count.autoShopSum($(this),$obj);
			}
			
		});
		//填写金额带出社佣、导佣
		$shopObj.find('input[name=consumeMoney]').off('blur').on('blur',function() {
			Count.getShopRate($(this),$obj);
		});
		//新增购物安排
		$listObj.find('.T-shop-add').find('.T-addShopping').on('click',function(){
			Count.addShopping($shopObj,$obj);
		});
		//自费处理--计算、新增
		var $selfObj = $listObj.find('.T-count-selfPay');
		$selfObj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "billRemark"){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算自费金额
				Count.autoSelfSum($(this),$obj);
			}
		});
		//新增自费安排
		$listObj.find('.T-self-add').find('.T-addSelf').off('click').on('click',function(){
			Count.addSelf($selfObj,$obj);
		});
		//其他收入--计算、新增
		var $otherIn = $listObj.find('.T-count-otherIn');
		$otherIn.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "title" && $nameFlag != "billRemark"){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				Count.autoOtherInSum($(this),$obj);
			}
		});
		//新增其他收入安排
		$listObj.find('.T-OtherIn-add').off('click').on('click',function(){
			Count.addOtherIn($otherIn,$obj);
		});
		//车费--计算、新增
		var $busObj = $listObj.find('.T-count-bus');
		$busObj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "billRemark"){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				Count.autoBusSum($(this),$obj);
			}
			
		});/*
		//新增车费
		$listObj.find('.T-buspay-add').off('click').on('click',function(){
			Count.addBus($busObj,$obj);
		});*/
		//餐费处理--计算、新增
		var $restObj = $listObj.find('.T-count-restaurant');
		$restObj.find('input[type="text"]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "billRemark"){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				Count.autoRestaurantSum($(this),$obj);
			}
			
		});
		//新增餐费安排
		$listObj.find('.T-restaurantpay-add').off('click').on('click',function(){
			Count.addRest($restObj,$obj);
		});
		//房费处理--计算、新增
		var $hotelObj = $listObj.find('.T-count-hotel');
		$hotelObj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "billRemark"){
				Count.calculateCost($(this));
				Count.autoHotelSum($(this),$obj);
			}
			
		});
		//新增房费
		$listObj.find('.T-hotel-add').off('click').on('click',function(){
			Count.addHotel($hotelObj,$obj);
		});
		//景区处理--计算、新增
		var $scenicObj = $listObj.find('.T-count-scenic');
		$scenicObj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "billRemark"){
				Count.calculateCost($(this));
				Count.autoScenicSum($(this),$obj);
			}
			
		});
		//新增景区
		$listObj.find('.T-scenic-add').off('click').on('click',function(){
			Count.addScenic($scenicObj,$obj);
		});
		//票务处理--计算、新增
		var $ticketObj = $listObj.find('.T-count-ticket');
		$ticketObj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "billRemark" && $nameFlag != "shift"){
				Count.calculateCost($(this));
				Count.autoTicketSum($(this),$obj);
			}
			
		});
		//新增票务
		$listObj.find('.T-ticket-add').off('click').on('click',function(){
			Count.addTicket($ticketObj,$obj);
		});
		//其他支出
		var $totherOutObj = $listObj.find('.T-count-otherOut');
		$totherOutObj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "billRemark"){
				Count.calculateCost($(this));
				Count.autoOtherOutSum($(this),$obj);
			}
		});
		//新增其他支出
		$listObj.find('.T-otherOut-add').off('click').on('click',function(){
			Count.addOtherOut($totherOutObj,$obj);
		});
		//计算中转成本
		Count.tripTransferCost($obj);
		//计算团收入
		Count.tripIncome($obj);
		//触发页面的change事件
		$obj.find('input[type=text]').change();
		//按钮事件--保存信息
		$obj.find('.T-saveCount').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
            var financialTripPlanId = $(this).attr('data-entity-financial-id');
			Count.saveTripCount(id,financialTripPlanId,$obj,2);
		});
		//按钮时间--安排预算表
		$obj.find('.T-tripPlanArrange').off('click').on('click',function() {
			var id = $(this).attr('data-entity-id');
			id = $obj.find('.financial-tripPlanId').val();
			Count.arrangeDetail(id);
		});
		//报账完成事件
		$obj.find('.T-fanishAccount').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
            var financialTripPlanId = $(this).attr('data-entity-financial-id');
            Count.saveTripCount(id,financialTripPlanId,$obj,3);
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
							"busCompanyArrange":JSON.parse(data.busCompanyArrange),
							"tripPlan":JSON.parse(data.tripPlan),
							"dayList":JSON.parse(data.dayList),
							"guideArrange":JSON.parse(data.guideArrange),
							"insuranceArrangeList":JSON.parse(data.insuranceArrangeList),
							"ticketArrangeList":JSON.parse(data.ticketArrangeList),
							"WEB_IMG_URL_BIG":data.WEB_IMG_URL_BIG,
							"WEB_IMG_URL_SMALL":data.WEB_IMG_URL_SMALL,
							"touristGroup":data.touristGroup,
							"financialTripPlanId":data.financialTripPlanId,
							"insurancePrice":data.insurancePrice,
							"arrangeIncomePaymentList":JSON.parse(data.arrangeIncomePaymentList),
							"remarkArrangeList": JSON.parse(data.remarkArrangeList)
                        };
					if(isAuth("1190002")){
                        tmp.isOp = true;
                    };
                    if(isAuth("1190003")){
                        tmp.isFinance = true;
                    };
					var html = updateTemplate(tmp);
					Tools.addTab(updateTabId,'单团审核',html);
					var $updateTabId = $("#tab-"+updateTabId+"-content");
					Count.$updateTab = $updateTabId;
					//页面事件
					Count.updateEvent($updateTabId);
				}
			}
		});
	};
	//单团审核页面事件
	Count.updateEvent = function($obj){//页面tabid--$obj
		var $listObj = $obj.find('.T-list');
		//团款明细
		var $tripDetailObj = $listObj.find('.T-tripDetail');
		$tripDetailObj.find('.T-viewGroupDetail').off('click').on('click',function(){
			var $tripId = $obj.find('.financial-tripPlanId').val();
			Count.viewGroupDetail($tripId);
		});
		//中转明细
		var $tripDetailObj = $listObj.find('.T-transit');
		$tripDetailObj.find('.T-viewTripTransit').off('click').on('click',function(){
			var id = $(this).attr('data-entity-id');
			Count.ViewOutDetail(id);
		});
		//导游报账事件
		var $guideAccount = $obj.find('.T-guideAccount');
		$guideAccount.off('click').on('click',function(){
			var id = $obj.find('.tripPlanId').val();
			KingServices.viewFeeDetail(id);
		});
		//购物处理--计算、新增
		var $shopObj = $listObj.find('.T-count-shopping');
		$shopObj.find('input[type=text]').off('change').on('change',function(){
			//if(){}
			Count.calculateCost($(this));
			//计算金额
			Count.autoShopSum($(this),$obj);
			
		});
		//填写金额带出社佣、导佣
		$shopObj.find('input[name=consumeMoney]').off('blur').on('blur',function() {
			Count.getShopRate($(this),$obj);
		});
		//新增购物安排
		$listObj.find('.T-shop-add').find('.T-addShopping').on('click',function(){
			Count.addShopping($shopObj,$obj);
		});
		//自费处理--计算、新增
		var $selfObj = $listObj.find('.T-count-selfPay');
		$selfObj.find('input[type=text]').off('change').on('change',function(){
			//校验输入的数据是否合法
			Count.calculateCost($(this));
			//计算自费金额
			Count.autoSelfSum($(this),$obj);
		});
		//新增自费安排
		$listObj.find('.T-self-add').find('.T-addSelf').off('click').on('click',function(){
			Count.addSelf($selfObj,$obj);
		});
		//其他收入--计算、新增
		var $otherIn = $listObj.find('.T-count-otherIn');
		$otherIn.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "title"){
				//校验输入的数据是否合法
				Count.calculateCost($(this));
				//计算金额
				Count.autoOtherInSum($(this),$obj);
			}
		});
		//新增其他收入安排
		$listObj.find('.T-OtherIn-add').off('click').on('click',function(){
			Count.addOtherIn($otherIn,$obj);
		});
		//车费--计算、新增
		var $busObj = $listObj.find('.T-count-bus');
		$busObj.find('input[type=text]').off('change').on('change',function(){
			Count.autoBusSum($(this),$obj);
		});/*
		//新增车费
		$listObj.find('.T-buspay-add').off('click').on('click',function(){
			Count.addBus($busObj,$obj);
		});*/
		//餐费处理--计算、新增
		var $restObj = $listObj.find('.T-count-restaurant');
		$restObj.find('input[type="text"]').off('change').on('change',function(){
			Count.autoRestaurantSum($(this),$obj);
		});
		//新增餐费安排
		$listObj.find('.T-restaurantpay-add').off('click').on('click',function(){
			Count.addRest($restObj,$obj);
		});
		//房费处理--计算、新增
		var $hotelObj = $listObj.find('.T-count-hotel');
		$hotelObj.find('input[type=text]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoHotelSum($(this),$obj);
		});
		//新增房费
		$listObj.find('.T-hotel-add').off('click').on('click',function(){
			Count.addHotel($hotelObj,$obj);
		});
		//景区处理--计算、新增
		var $scenicObj = $listObj.find('.T-count-scenic');
		$scenicObj.find('input[type=text]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoScenicSum($(this),$obj);
		});
		//新增景区
		$listObj.find('.T-scenic-add').off('click').on('click',function(){
			Count.addScenic($scenicObj,$obj);
		});
		//票务处理--计算、新增
		var $ticketObj = $listObj.find('.T-count-ticket');
		$ticketObj.find('input[type=text]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoTicketSum($(this),$obj);
		});
		//新增票务
		$listObj.find('.T-ticket-add').off('click').on('click',function(){
			Count.addTicket($ticketObj,$obj);
		});
		//其他支出
		var $totherOutObj = $listObj.find('.T-count-otherOut');
		$totherOutObj.find('input[type=text]').off('change').on('change',function(){
			Count.calculateCost($(this));
			Count.autoOtherOutSum($(this),$obj);
		});
		//新增其他支出
		$listObj.find('.T-otherOut-add').off('click').on('click',function(){
			Count.addOtherOut($totherOutObj,$obj);
		});
		//触发页面的change事件
		$obj.find('input[type=text]').trigger('change');
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
			var id = $(this).attr('data-entity-id');
			id = $obj.find('.financial-tripPlanId').val();
			Count.arrangeDetail(id);
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
					var colorbox_params = {
		    			rel: 'colorbox',
		    			reposition:true,
		    			scalePhotos:true,
		    			scrolling:false,
		    			previous:'<i class="ace-icon fa fa-arrow-left"></i>',
		    			next:'<i class="ace-icon fa fa-arrow-right"></i>',
		    			close:'&times;',
		    			current:'{current} of {total}',
		    			maxWidth:'100%',
		    			maxHeight:'100%',
		    			onOpen:function(){ 
		    				$overflow = document.body.style.overflow;
		    				document.body.style.overflow = 'hidden';
		    			},
		    			onClosed:function(){
		    				document.body.style.overflow = $overflow;
		    			},
		    			onComplete:function(){
		    				$.colorbox.resize();
		    			}
		    		};

		    		$('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(colorbox_params);
				}
			});
	};
	//审核通过事件
	Count.accountCheck = function(id, billStatus, financialTripPlanId,$obj){
		var method = billStatus==0?"opVerify":"financialVerify";
		var saveJson = Count.saveTripCount(id,financialTripPlanId,$obj,1);
		saveJson = JSON.stringify(saveJson);
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
        			Count.updateExamine(id);
        			Count.listCountHeader(0);
        		}
        	}
        });
	};
	//退回计调事件
	Count.reback = function(id, billStatus, financialTripPlanId){
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
                	console.log(data);
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
	//团款明细事件
	Count.viewGroupDetail = function(id){
		$.ajax({
		    url:KingServices.build_url('touristGroup',"findTouristGroupByTripPlanId"),
			type:"POST",
			data:{
				tripPlanId:id
			},
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var touristGroupList = JSON.parse(data.touristGroupList);
					data.touristGroupList = touristGroupList;
					var html = groupDetailTemplate(data);
					layer.open({
					    type: 1,
					    title:"团款明细",
					    skin: 'layui-layer-rim', //加上边框
					    area: ['1000px', '500px'], //宽高
					    zIndex:1028,
					    content: html
					});
				}
			}
		});
	};
	//中转明细
	Count.ViewOutDetail = function(id){
		$.ajax({
			url:KingServices.build_url('touristGroup','findTouristGroupArrangeById'),
			type:"POST",
			data:{
				tripPlanId:id
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
	                data.receiveGroup = JSON.parse(data.receiveGroup);
	                data.isNeedArriveService = hasData(data.receiveGroup);
	                data.bus = JSON.parse(data.bus);
	                data.isNeedBus = (data.bus.length > 0)? 1 : 0;
	                data.sendGroup = JSON.parse(data.sendGroup);
	                data.isNeedLeaveService = hasData(data.sendGroup);

					var html = outDetailTempLate(data);
					var financialOutDetail = addTab(outDetailId, "中转明细", html);
					var $tabid = $("#tab-"+outDetailId+"-content")
					$tabid.find('.T-download').off('click').on('click',function(){
						Count.exportOutDetail(id);
					});
	                function hasData(src)  {
	                    var res = 0;
	                    if (!!src)  {
	                        if (!!src.outBusList && src.outBusList.length) {    res = 1; }
	                        else if (!!src.outHotelList && src.outHotelList.length) {    res = 1; }
	                        else if (!!src.outOtherList && src.outOtherList.length) {    res = 1; }
	                        else if (!!src.outRestaurantList && src.outRestaurantList.length) {    res = 1; } 
	                        else if (!!src.outTicketList && src.outTicketList.length) {    res = 1; } 
	                    }
	                    return res;
	                }
				}
			}
		});
	};
	//导出电子表格
	Count.exportOutDetail = function(id){
		var url = KingServices.build_url('export','exportOutDetail');
		url +="&tripPlanId="+id;
		exportXLS(url);
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
                        console.log(data);
                        var html = qualityTempLate(data);
                        Tools.addTab(qualityId,"质量跟踪",html);                    
                    }
                }
            })
        }
	};
	//新增购物安排--报账、审核通用
	Count.addShopping = function($bodyObj,$parentObj){
		var billStatus = $parentObj.find('input[name=billStatus]').val(), 
			td = '';
		if(billStatus == 2){
			td = '<td></td>'
		};
		var html = '<tr>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td><input type="text" name="shopName" style="width:90px;"/><input type="hidden" name="shopId" /></td>'+
		'<td><input type="text" name="shopPolicy" style="width:90px;"/><input type="hidden" name="shopPolicyId" /></td>'+
		'<td><input type="text" name="consumeMoney" style="width:90px;"/></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><span class="sumMoney"></span></td>'+
		'<td><input type="text" name="travelAgencyRate" style="width:90px;"/><input type="hidden" name="travelAgencyRateMoney"/></td>'+
		'<td><span class="travelAgencyRateMoney"></span></td>'+
		'<td><input type="text" name="guideRate" style="width:90px;"/><input type="hidden" name="guideRateMoney" /></td>'+
		'<td><span class="guideRateMoney"></span></td>'+
		'<td><input type="text" name="customerRebateMoney" style="width:90px;"/></td>'+
		'<td><span class="sumCustomerRebateMoney"></span></td>'+
		'<td><input type="text" name="parkingRebateMoney" style="width:90px;"/></td>'+
		'<td><span class="sumParkingRebateMoney"></span></td>'+
		'<td><span class="T-shopIncome"></span></td>'+
		'<td><input type="text" name="billRemark"/><a href="javascript:void(0)" style="margin-left:20px;" class="T-del">删除</a></td>'+
		td+
		'</tr>';
		
		$bodyObj.append(html);
		//新增获取购物店数据
		Count.getShopData($bodyObj);
		//设置下拉框
		Count.setChooseDays($bodyObj,$parentObj);
		$bodyObj.find('input[type=text]').off('change').on('change',function(){
			
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "shopName" && $nameFlag != "shopPolicy" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
			//计算金额
			Count.autoShopSum($(this),$parentObj);
			}
		});
		//删除新增的购物安排
		$bodyObj.find('.T-del').off('click').on('click',function(){
			var $tr = $(this).closest('tr');
			$tr.fadeOut(function(){
                $(this).remove();
            });
			var $sumIncome = $tr.find('.T-shopIncome').text();
			var $tripIncome = $parentObj.find('.tripIncome-shopTravelAgencyRateMoney');
			var $newTripIncome = parseFloat(parseFloat($tripIncome.text()-$sumIncome));
			$newTripIncome = Count.changeTwoDecimal($newTripIncome);
			$tripIncome.text($newTripIncome);
			//删除计算团成本的购物返佣
			var $guideRateMoney = $tr.find('.guideRateMoney').text();
			var $tripCost = $parentObj.find('.tripCost-guideshopFee');
			var $newTripCost = parseFloat(parseFloat($tripCost.text()-$guideRateMoney));
			$newTripCost = Count.changeTwoDecimal($newTripCost);
			$tripCost.text($newTripCost);
			//计算团收入
			Count.tripIncome($parentObj);
			//计算团成本
			Count.tripCost($parentObj);
		});
	};
	//购物金额计算
	Count.autoShopSum = function($obj,$parentObj){
		var $parent = $obj.closest('tr');
		var consumeMoney = $parent.find('input[name=consumeMoney]').val();
		var travelAgencyRate = $parent.find('input[name=travelAgencyRate]').val();
		var travelAgencyRateMoney = $parent.find('input[name=travelAgencyRateMoney]').val();
		var guideRate = $parent.find('input[name=guideRate]').val();
		var guideRateMoney = $parent.find('input[name=guideRateMoney]').val();
		
		if(consumeMoney.length == 0) {
			consumeMoney = 0;
		}
		consumeMoney = parseFloat(consumeMoney);
		travelAgencyRate = parseFloat(travelAgencyRate);
		travelAgencyRateMoney = parseFloat(travelAgencyRateMoney);
		guideRate = parseFloat(guideRate);
		guideRateMoney = parseFloat(guideRateMoney);

		travelAgencyRateMoney = consumeMoney*travelAgencyRate/100;
		travelAgencyRateMoney = Count.changeTwoDecimal(travelAgencyRateMoney);
		guideRateMoney = consumeMoney*guideRate/100;
		guideRateMoney = Count.changeTwoDecimal(guideRateMoney);
		$parent.find('.travelAgencyRateMoney').text(travelAgencyRateMoney);
		$parent.find('input[name=travelAgencyRateMoney]').val(travelAgencyRateMoney);
		$parent.find('.guideRateMoney').text(guideRateMoney);
		$parent.find('input[name=guideRateMoney]').val(guideRateMoney);
		//设置总金额
		Count.autoShopSumCost($obj,$parentObj);
	};
	//购物--总金额计算
	Count.autoShopSumCost = function($obj,$tableObj){
		var tabId,
		    $parentObj = $tableObj.find('.T-list'),
			shopId;
	        //if(id == "T-shopping"){tabId="T-shopping"}else{tabId="shopping"};
	        if($obj.closest('tr').attr("shopId")){
	        	shopId = $obj.closest('tr').attr("shopId");
	        	//设置总金额--原有安排的总金额
	        	var sumMoney = 0;
				$parentObj.find('.T-count-shopping').find('tr[shopId='+ shopId +']').find('input[name=consumeMoney]').each(function() {
					var t = $(this).val();
					sumMoney += parseFloat(t);
				});
				$parentObj.find('.T-count-shopping').find('.sumMoney'+shopId).text(Count.changeTwoDecimal(sumMoney));
				//设置人数返佣，停车返佣
				var customerRebateMoney = $parentObj.find('.T-count-shopping').find('input[name=customerRebateMoney' + shopId + ']').val();
				var touristAdultCount = $parentObj.find('.T-count-shopping').find('input[name=touristAdultCount' + shopId + ']').val();

				var parkingRebateMoney = $parentObj.find('.T-count-shopping').find('input[name=parkingRebateMoney' + shopId + ']').val();
				var busNumber = $tableObj.find('.busNumber').val();
				//var touristAdultCount = $tableObj.find('input[name=totalPersonCount]').val();
				
				var sumCustomerRebateMoney = Count.changeTwoDecimal(customerRebateMoney)*Count.changeTwoDecimal(touristAdultCount);
				var sumParkingRebateMoney = Count.changeTwoDecimal(parkingRebateMoney)*Count.changeTwoDecimal(busNumber);
				
				sumCustomerRebateMoney = Count.changeTwoDecimal(sumCustomerRebateMoney);
				sumParkingRebateMoney = Count.changeTwoDecimal(sumParkingRebateMoney);
				
				$tableObj.find('.T-count-shopping').find('.sumCustomerRebateMoney' + shopId).text(sumCustomerRebateMoney);
				$tableObj.find('.T-count-shopping').find('.sumParkingRebateMoney' + shopId).text(sumParkingRebateMoney);
	        }else{
				var sumMoney = 0,t,$tr = $obj.closest('tr');
					t = $obj.closest('tr').find('input[name=consumeMoney]').val();
					sumMoney += parseFloat(t);
				$tr.find('.sumMoney').text(Count.changeTwoDecimal(sumMoney));
				//设置人数返佣，停车返佣
				var customerRebateMoney = $tr.find('input[name=customerRebateMoney]').val();
				var touristAdultCount = $tableObj.find('input[name=totalPersonCount]').val();
				var parkingRebateMoney = $tr.find('input[name=parkingRebateMoney]').val();
				var busNumber =  $tableObj.find('.busNumber').val();
				
				var sumCustomerRebateMoney = Count.changeTwoDecimal(customerRebateMoney)*Count.changeTwoDecimal(touristAdultCount);
				var sumParkingRebateMoney = Count.changeTwoDecimal(parkingRebateMoney)*Count.changeTwoDecimal(busNumber);
				
				sumCustomerRebateMoney = Count.changeTwoDecimal(sumCustomerRebateMoney);
				sumParkingRebateMoney = Count.changeTwoDecimal(sumParkingRebateMoney);
				
				$tr.find('.sumCustomerRebateMoney').text(sumCustomerRebateMoney);
				$tr.find('.sumParkingRebateMoney').text(sumParkingRebateMoney);
			}
			Count.autoSumTripIncome($tableObj,$parentObj,$obj);
	};
	//计算团收入--购物;
	Count.autoSumTripIncome = function($tableObj,$parentObj,$obj){
		var $mainTable = $tableObj.find('.T-main-table');
		//购物的计算
		var shopRebateMoney = 0;
		var sumIncome = 0;
		var guideIncomeMoney = 0;
		var $shopObj = $obj.closest('tr');
		var $mainTr = $parentObj.find('.T-count-shopping');
			if($shopObj.attr('shopId')){
				var shopId = $shopObj.attr('shopId');
				$mainTr.find('.travelAgencyRateMoney'+shopId).each(function(i){
					var $thisVal = Count.changeTwoDecimal($(this).val());
					sumIncome += parseFloat($thisVal);
				});
				$mainTr.find('.guideRateMoney'+shopId).each(function(){
					var $thisVal = Count.changeTwoDecimal($(this).val());
					sumIncome += parseFloat($thisVal);
				});
				$mainTr.find('.sumCustomerRebateMoney'+shopId).each(function(){
					var $thisVal = Count.changeTwoDecimal($(this).text());
					sumIncome += parseFloat($thisVal);
				});
				$mainTr.find('.sumParkingRebateMoney'+shopId).each(function(){
					var $thisVal = Count.changeTwoDecimal($(this).text());
					sumIncome += parseFloat($thisVal);
				});
				var sumIncome = Count.changeTwoDecimal(sumIncome);
				$mainTr.find('.T-shopIncome'+shopId).text(Count.changeTwoDecimal(sumIncome));
			}else{
				var $shopObj = $obj.closest('tr'),travelAgencyRateMoney,guideRateMoney,sumCustomerRebateMoney,sumParkingRebateMoney;
				travelAgencyRateMoney = parseFloat($shopObj.find('input[name=travelAgencyRateMoney]').val());
				guideRateMoney = parseFloat($shopObj.find('input[name=guideRateMoney]').val());
				sumCustomerRebateMoney = parseFloat($shopObj.find('.sumCustomerRebateMoney').text());
				sumParkingRebateMoney = parseFloat($shopObj.find('.sumParkingRebateMoney').text());
				var sumIncome = Count.changeTwoDecimal(travelAgencyRateMoney+guideRateMoney+sumCustomerRebateMoney+sumParkingRebateMoney)	
				$shopObj.find('.T-shopIncome').text(sumIncome);
				//计算团成本中的购物导佣
				
			};
			$mainTr.find('.T-shopIncome').each(function() {
				var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
				shopRebateMoney += totalSum;
			});
			//计算导游购物返佣
			$mainTr.find('.guideRateMoney').each(function() {
				var $thisVal = Count.changeTwoDecimal($(this).text());
					guideIncomeMoney += parseFloat($thisVal);
			});
			guideIncomeMoney = Count.changeTwoDecimal(guideIncomeMoney);
			shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
			$mainTable.find('.tripIncome-shopTravelAgencyRateMoney').text(shopRebateMoney);
			//计算团收入
			Count.tripIncome($tableObj);
			$mainTable.find('.tripCost-guideshopFee').text(guideIncomeMoney);
			//计算团成本
			Count.tripCost($tableObj);
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
		tripIncome.text(tripSum);
		//计算毛利
		var grossProfi = tripSum-tripCost-tripTransitCost;
		grossProfi = Count.changeTwoDecimal(grossProfi);
		grossProfitMoney.text(grossProfi);
		//计算人均毛利
		var perGrossProfit = (grossProfi/allPerson);
		perGrossProfit = Count.changeTwoDecimal(perGrossProfit);
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
		var allSum = (tripSum+tripCostSum)
		tripCost.text(allSum);
		//计算毛利
		var grossProfi = tripIncome-allSum-tripTransitCost;
		grossProfi = Count.changeTwoDecimal(grossProfi);
		grossProfitMoney.text(grossProfi);
		//计算人均毛利
		var perGrossProfit = (grossProfi/allPerson);
		perGrossProfit = Count.changeTwoDecimal(perGrossProfit);
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
		tripTransitCost.text(transfetCost);
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
            //计算应付
            var needPayMoney = $parent.find(".needPayMoney");
            var reduceMoney = $parent.find('input[name="reduceMoney"]').val();
            //规范数据
            realCount = Count.changeTwoDecimal(realCount);
            memberCount = Count.changeTwoDecimal(memberCount);
            marketPrice = Count.changeTwoDecimal(marketPrice);
            price = Count.changeTwoDecimal(price);
            travelAgencyRate = Count.changeTwoDecimal(travelAgencyRate);
            guideRate = Count.changeTwoDecimal(guideRate);
            realCount = Count.changeTwoDecimal(realCount);
            reduceMoney = Count.changeTwoDecimal(reduceMoney);
            var needSum = parseFloat(realCount) * parseFloat(price)-parseFloat(reduceMoney);
            needPayMoney.text(needSum);
            //计算应收（单价*（实际数量-计划数量））
            var needCount = parseFloat(realCount)-parseFloat(memberCount);
            var needIncome = $parent.find('.needIncome');
            if(needCount<0){
            	needIncome.text(0)
            }else{
            	var $income = parseFloat(marketPrice)*parseFloat(needCount);
            	$income = Count.changeTwoDecimal($income);
				needIncome.text($income);
            };
            //计算自费费用
            var $selfSum = parseFloat(realCount*price);
            $parent.find('.selfMoney').val($selfSum);
			//导游佣金= (实际数量-计划数量)*(单价-低价)*导佣比例
			var guideRebateMoney = (parseFloat(realCount)-parseFloat(memberCount)) * (parseFloat(marketPrice)-parseFloat(price)) * parseFloat(guideRate)/100;
			guideRebateMoney = Count.changeTwoDecimal(guideRebateMoney);
			$parent.find('.guideRebateMoney').text(guideRebateMoney);
			$parent.find('input[name=guideRebateMoney]').val(guideRebateMoney);
			
			//旅行社佣金= (实际数量-计划数量)*(单价-低价)*社佣比例
			var travelAgencyRebateMoney = (parseFloat(realCount)-parseFloat(memberCount)) * (parseFloat(marketPrice)-parseFloat(price)) * parseFloat(travelAgencyRate)/100;
			travelAgencyRebateMoney = Count.changeTwoDecimal(travelAgencyRebateMoney);
			$parent.find('.travelAgencyRebateMoney').text(travelAgencyRebateMoney);
			$parent.find('input[name=travelAgencyRebateMoney]').val(travelAgencyRebateMoney);
			//计算团收入--自费收入
			var $bodyObj = $parentObj.find('.T-main-table');
			var shopRebateMoney = 0;
			var $selfMoney = 0;
			var $guideRebateMoney = 0;
			var $mainTr = $parentObj.find('.T-count-selfPay');
			$mainTr.find('.selfMoney').each(function() {
				var totalSum = Count.changeTwoDecimal(parseFloat($(this).val()));
				$selfMoney += totalSum;
			});
			$mainTr.find('.needIncome').each(function() {
				var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
				shopRebateMoney += totalSum;
			});
			$mainTr.find('.guideRebateMoney').each(function() {
				var totalSum = Count.changeTwoDecimal(parseFloat($(this).text()));
				$guideRebateMoney += totalSum;
			});
			shopRebateMoney = Count.changeTwoDecimal(shopRebateMoney);
			$bodyObj.find('.tripIncome-selfPayTravelAgencyRebateMoney').text(shopRebateMoney);
			//计算团收入
			Count.tripIncome($parentObj);
			//计算团成本
			Count.tripCost($parentObj);
			//计算自费导佣
			$parentObj.find('.tripCost-guideSelfMoney').text($guideRebateMoney);
			//计算自费费用
			$parentObj.find('.tripCost-selfArrangeNeedPayMoney').text($selfMoney);
	};
	//新增自费安排
	Count.addSelf = function($obj,$parentObj){
		var billStatus = $parentObj.find('input[name=billStatus]').val(), 
			td = '';
		if(billStatus == 2){
			td = '<td></td>'
		};
		var html = '<tr>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td><input type="text" name="selfPayName" style="width:90px;"><input type="hidden" name="selfPayId"></td>'+
		'<td><input name="selfPayItem" style="width:90px;" type="text"><input type="hidden" name="selfPayItemId"></td>'+
		'<td><input name="marketPrice" style="width:60px;" type="text"></td>'+
		'<td><input name="price" style="width:60px;" type="text"></td>'+
		'<td><input name="allPersonMoney" style="width:60px;" type="text"></td>'+
		'<td><input name="realCount" style="width:60px;" type="text"><input name="memberCount" value="0" style="width:60px;" type="hidden"></td>'+
		'<td><input name="reduceMoney" style="width:60px;" type="text"><input name="selfMoney" class="selfMoney" style="width:60px;" type="hidden"></td>'+
		'<td><span class="needIncome"></span></td>'+
		'<td><span class="needPayMoney"></span></td>'+
		'<td>0</td>'+
		'<td><input name="guidePayMoney" style="width:60px;" type="text"></td>'+
		'<td><input name="currentMonry" style="width:60px;" type="text"></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input name="travelAgencyRate" style="width:60px;" type="text"></td>'+
		'<td><span class="travelAgencyRebateMoney"></span></td>'+
		'<td><input name="guideRate" style="width:60px;" type="text"></td>'+
		'<td><span class="guideRebateMoney"></span></td>'+
		'<td><input name="billRemark" style="width:90px;" type="text"><a class="T-del" href="javascript:void(0)" style="margin-left:20px;">删除</a></td>'+
		td+
		'</tr>';
		$obj.append(html);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//获取新增自费的数据
		Count.getSelfData($obj,$parentObj);
		$obj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "selfPayName" && $nameFlag != "selfPayItem" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				//计算金额
				Count.autoSelfSum($(this),$parentObj);
			}
			
		});
		//删除新增的购物安排
		$obj.find('.T-del').off('click').on('click',function(){
		 	var $tr = $(this).closest('tr');
		 	$tr.fadeOut(function(){
              $(this).remove();
            });
			var $sumIncome = $tr.find('.needIncome').text();
			var $tripIncome = $parentObj.find('.tripIncome-selfPayTravelAgencyRebateMoney');
			var $newTripIncome = parseFloat(parseFloat($tripIncome.text()-$sumIncome));
		 	$newTripIncome = Count.changeTwoDecimal($newTripIncome);
			$tripIncome.text($newTripIncome);
			//计算团成本--自费费用、导游自费返佣 tripCost-guideSelfMoney
			var $guideRebateMoney = $tr.find('.guideRebateMoney').text();
			var $guideSelfMoney = $parentObj.find('.tripCost-guideSelfMoney');
			var $newTripTost = parseFloat(parseFloat($guideSelfMoney.text()-$guideRebateMoney));
		 	$newTripTost = Count.changeTwoDecimal($newTripTost);
			$guideSelfMoney.text($newTripTost);
			//导游自费返佣
			var $price = $tr.find('input[name=price]').val();
			var $realCount = $tr.find('input[name=realCount]').val();
			var $selfArrangeNeedPayMoney = $parentObj.find('.tripCost-selfArrangeNeedPayMoney');
			var $newselfArrangeNeedPayMoney = parseFloat(parseFloat($selfArrangeNeedPayMoney.text()-$price*$realCount));
		 	$newselfArrangeNeedPayMoney = Count.changeTwoDecimal($newselfArrangeNeedPayMoney);
			$selfArrangeNeedPayMoney.text($newselfArrangeNeedPayMoney);
			//计算团收入
			Count.tripIncome($parentObj);
			//计算团成本
			Count.tripCost($parentObj);
		});
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
		'<td><input type="text" name="title" style="width:90px;"/></td>'+
		'<td><input type="text" name="price" style="width:90px;"/></td>'+
		'<td><input type="text" name="count" style="width:90px;"/></td>'+
		'<td><span class="needPayMoney">0</span></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input type="text" name="billRemark" style="width:230px;"/><a href="javascript:void(0)" class="T-del" style="margin-left:20px;">删除</a></td>'+
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
		//删除事件
		$obj.find('.T-del').off('click').on('click',function(){
		 	var $tr = $(this).closest('tr');
		 	$tr.fadeOut(function(){
              $(this).remove();
            });
			var $sumIncome = $tr.find('.needPayMoney').text();
			var $tripIncome = $parentObj.find('.tripIncome-otherInCome');
			var $newTripIncome = parseFloat(parseFloat($tripIncome.text()-$sumIncome));
		 	$newTripIncome = Count.changeTwoDecimal($newTripIncome);
			$tripIncome.text($newTripIncome);
			//计算团收入
			Count.tripIncome($parentObj);
		});
	};
	//车费金额计算
	Count.autoBusSum = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var $busFee = parseFloat($tr.find('input[name=price]').val());
		var $reduceMoney = parseFloat($tr.find('input[name=reduceMoney]').val());
		var $planNeedpay = $tr.find('input[name=needPayMoney]').val()
		//规范数据
		$busFee = Count.changeTwoDecimal($busFee);
		$reduceMoney = Count.changeTwoDecimal($reduceMoney);
		$planNeedpay = Count.changeTwoDecimal($planNeedpay);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($busFee-$reduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		$tr.find('.BusneedPayMoney').text(needPay);
		//计算差额
		var difference = 0 ;
		difference = parseFloat(needPay-$planNeedpay);
		difference = Count.changeTwoDecimal(difference);
		$tr.find('.difference').text(difference);
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
	/*//新增车费--这个版本对于车队没有新增
	Count.addBus = function($obj,$parentObj){
		var html = '<tr>'+
		'<td><input type="text" name="companyName" style="width:200px;"/><input type="hidden" name="companyId"></td>'+
		'<td><input type="text" name="licenseNumber" style="width:90px;"/></td>'+
		'<td><input type="text" name="seatCount" style="width:90px;"/></td>'+
		'<td><input type="text" name="price" style="width:90px;"/></td>'+
		'<td><input type="text" name="reduceMoney" style="width:90px;"/></td>'+
		'<td><span class="BusneedPayMoney">0</span></td>'+
		'<td><input type="text" name="payedMoney" style="width:90px;"/></td>'+
		'<td><input type="text" name="guidePayMoney" style="width:90px;"/></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><input type="text" name="difference" style="width:90px;"/></td>'+
		'<td><input type="text" name="billRemark" style="width:230px;"/><a href="javascript:void(0)" class="T-del" style="margin-left:20px;">删除</a></td>'+
		'</tr>';
		$obj.append(html);
		//获取车队数据
		Count.getBusData($obj);
		//绑定事件
		$obj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "companyName" && $nameFlag != "licenseNumber" && $nameFlag != "seatCount" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				//计算金额
				Count.autoBusSum($(this),$parentObj);
			}
		});
		//删除事件
		$obj.find('.T-del').off('click').on('click',function(){
		 	var $tr = $(this).closest('tr');
		 	$tr.fadeOut(function(){
              $(this).remove();
            });
			var $sumIncome = $tr.find('.BusneedPayMoney').text();
			var $tripIncome = $parentObj.find('.tripCost-busCompanyNeedPayMoney');
			var $newTripIncome = parseFloat(parseFloat($tripIncome.text()-$sumIncome));
		 	$newTripIncome = Count.changeTwoDecimal($newTripIncome);
			$tripIncome.text($newTripIncome);
		});
	};*/
	//餐费金额计算
	Count.autoRestaurantSum = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var $price = parseFloat($tr.find('input[name=price]').val());
		var $realCount = parseFloat($tr.find('input[name=realCount]').val());
		var $reduceMoney = parseFloat($tr.find('input[name=reduceMoney]').val());
		var $needPayMoney = parseFloat($tr.find('input[name=needPayMoney]').val());
		//规范数据
		$price = Count.changeTwoDecimal($price);
		$realCount = Count.changeTwoDecimal($realCount);
		$reduceMoney = Count.changeTwoDecimal($reduceMoney);
		$needPayMoney = Count.changeTwoDecimal($needPayMoney);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($price*$realCount-$reduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		$tr.find('.restneedPayMoney').text(needPay);
		//计算差额
		var difference = 0 ;
		difference = parseFloat(needPay-$needPayMoney);
		difference = Count.changeTwoDecimal(difference);
		$tr.find('.difference').text(difference);
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
		var billStatus = $parentObj.find('input[name=billStatus]').val(), 
			td = '';
		if(billStatus == 2){
			td = '<td></td>'
		};
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
		'<td><input type="text" name="price" style="width:90px;"/><input type="hidden" name="standardId"></td>'+
		'<td><input type="text" name="realCount" style="width:90px;"/></td>'+
		'<td><input type="text" name="reduceMoney" style="width:90px;"/></td>'+
		'<td><span class="restneedPayMoney">0</span><input type="hidden" value="0" name="needPayMoney"></td>'+
		'<td>0</td>'+
		'<td><input type="text" name="guidePayMoney" style="width:90px;"/></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><span class="difference"></span></td>'+
		'<td><input type="text" name="billRemark" style="width:230px;"/><a href="javascript:void(0)" class="T-del" style="margin-left:20px;">删除</a></td>'+
		td+
		'</tr>';
		$obj.append(html);
		//获取餐厅数据
		Count.getRestData($obj);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//绑定事件
		$obj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "restaurantName" && $nameFlag != "type" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				//计算金额
				Count.autoRestaurantSum($(this),$parentObj);
			}
		});
		//删除事件
		$obj.find('.T-del').off('click').on('click',function(){
		 	var $tr = $(this).closest('tr');
		 	$tr.fadeOut(function(){
              $(this).remove();
            });
			var $sumIncome = $tr.find('.restneedPayMoney').text();
			var $tripIncome = $parentObj.find('.tripCost-restaurantArrangeNeedPayMoney');
			var $newTripIncome = parseFloat(parseFloat($tripIncome.text()-$sumIncome));
		 	$newTripIncome = Count.changeTwoDecimal($newTripIncome);
			$tripIncome.text($newTripIncome);
			//计算整个团成本
			Count.tripCost($parentObj);
		});
	};
	//房费金额计算
	Count.autoHotelSum = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var $price = parseFloat($tr.find('input[name=price]').val());
		var $realCount = parseFloat($tr.find('input[name=realCount]').val());
		var $reduceMoney = parseFloat($tr.find('input[name=reduceMoney]').val());
		var $needPayMoney = parseFloat($tr.find('input[name=needPayMoney]').val());
		//规范数据
		$price = Count.changeTwoDecimal($price);
		$realCount = Count.changeTwoDecimal($realCount);
		$reduceMoney = Count.changeTwoDecimal($reduceMoney);
		$needPayMoney = Count.changeTwoDecimal($needPayMoney);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($price*$realCount-$reduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		$tr.find('.hotelneedPayMoney').text(needPay);
		//计算差额
		var difference = 0 ;
		difference = parseFloat(needPay-$needPayMoney);
		difference = Count.changeTwoDecimal(difference);
		$tr.find('.difference').text(difference);
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
		var billStatus = $parentObj.find('input[name=billStatus]').val(), 
			td = '';
		if(billStatus == 2){
			td = '<td></td>'
		};
		var html = '<tr>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td><input type="text" name="hotelName" style="width:90px;"/><input name="hotelId" type="hidden"></td>'+
		'<td><input type="text" name="hotelRoom" style="width:90px;"/><input name="hotelRoomId" type="hidden"></td>'+
		'<td><input type="text" name="price" style="width:90px;"/></td>'+
		'<td><input type="text" name="realCount" style="width:90px;"/></td>'+
		'<td><input type="text" name="reduceMoney" style="width:90px;"/></td>'+
		'<td><span class="hotelneedPayMoney">0</span><input type="hidden" value="0" name="needPayMoney"></td>'+
		'<td>0</td>'+
		'<td><input type="text" name="guidePayMoney" style="width:90px;"/></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><span class="difference"></span></td>'+
		'<td><input type="text" name="billRemark" style="width:230px;"/><a href="javascript:void(0)" class="T-del" style="margin-left:20px;">删除</a></td>'+
		td+
		'</tr>';
		$obj.append(html);
		//获取酒店数据
		Count.getHotelData($obj,$parentObj);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//绑定事件
		$obj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "hotelName" && $nameFlag != "type" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				//计算金额
				Count.autoHotelSum($(this),$parentObj);
			}
		});
		//删除事件
		$obj.find('.T-del').off('click').on('click',function(){
		 	var $tr = $(this).closest('tr');
		 	$tr.fadeOut(function(){
              $(this).remove();
            });
			var $sumIncome = $tr.find('.hotelneedPayMoney').text();
			var $tripIncome = $parentObj.find('.tripCost-hotelArrangeNeedPayMoney');
			var $newTripIncome = parseFloat(parseFloat($tripIncome.text()-$sumIncome));
		 	$newTripIncome = Count.changeTwoDecimal($newTripIncome);
			$tripIncome.text($newTripIncome);
			//计算整个团成本
			Count.tripCost($parentObj);
		});
	};
	//景区金额计算
	Count.autoScenicSum = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var $price = parseFloat($tr.find('input[name=price]').val());
		var $realCount = parseFloat($tr.find('input[name=realCount]').val());
		var $reduceMoney = parseFloat($tr.find('input[name=reduceMoney]').val());
		var $needPayMoney = parseFloat($tr.find('input[name=needPayMoney]').val());
		//规范数据
		$price = Count.changeTwoDecimal($price);
		$realCount = Count.changeTwoDecimal($realCount);
		$reduceMoney = Count.changeTwoDecimal($reduceMoney);
		$needPayMoney = Count.changeTwoDecimal($needPayMoney);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($price*$realCount-$reduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		$tr.find('.scenicneedPayMoney').text(needPay);
		//计算差额
		var difference = 0 ;
		difference = parseFloat(needPay-$needPayMoney);
		difference = Count.changeTwoDecimal(difference);
		$tr.find('.difference').text(difference);
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
		var billStatus = $parentObj.find('input[name=billStatus]').val(), 
			td = '';
		if(billStatus == 2){
			td = '<td></td>'
		};
		var html = '<tr>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td><input type="text" name="scenicName" style="width:90px;"/><input type="hidden" name="scenicId"></td>'+
		'<td><input type="text" name="scenicItem" style="width:90px;"/><input type="hidden" name="scenicItemId"></td>'+
		'<td><input type="text" name="price" style="width:90px;"/></td>'+
		'<td><input type="text" name="realCount" style="width:90px;"/></td>'+
		'<td><input type="text" name="reduceMoney" style="width:90px;"/></td>'+
		'<td><span class="scenicneedPayMoney">0</span><input type="hidden" value="0" name="needPayMoney"></td>'+
		'<td>0</td>'+
		'<td><input type="text" name="guidePayMoney" style="width:90px;"/></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><span class="difference"></span></td>'+
		'<td><input type="text" name="billRemark" style="width:230px;"/><a href="javascript:void(0)" class="T-del" style="margin-left:20px;">删除</a></td>'+
		td+
		'</tr>';
		$obj.append(html);
		//获取景区数据
		Count.getScenicData($obj,$parentObj);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//绑定事件
		$obj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "scenicName" && $nameFlag != "type" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				//计算金额
				Count.autoScenicSum($(this),$parentObj);
			}
		});
		//删除事件
		$obj.find('.T-del').off('click').on('click',function(){
		 	var $tr = $(this).closest('tr');
		 	$tr.fadeOut(function(){
              $(this).remove();
            });
			var $sumIncome = $tr.find('.scenicneedPayMoney').text();
			var $tripIncome = $parentObj.find('.tripCost-scenicArrangeNeedPayMoney');
			var $newTripIncome = parseFloat(parseFloat($tripIncome.text()-$sumIncome));
		 	$newTripIncome = Count.changeTwoDecimal($newTripIncome);
			$tripIncome.text($newTripIncome);
			//计算整个团成本
			Count.tripCost($parentObj);
		});
	};
	//票务金额计算
	Count.autoTicketSum = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var $price = parseFloat($tr.find('input[name=price]').val());
		var $realCount = parseFloat($tr.find('input[name=realCount]').val());
		var $reduceMoney = parseFloat($tr.find('input[name=reduceMoney]').val());
		var $needPayMoney = parseFloat($tr.find('input[name=needPayMoney]').val());
		//规范数据
		$price = Count.changeTwoDecimal($price);
		$realCount = Count.changeTwoDecimal($realCount);
		$reduceMoney = Count.changeTwoDecimal($reduceMoney);
		$needPayMoney = Count.changeTwoDecimal($needPayMoney);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($price*$realCount-$reduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		$tr.find('.ticketneedPayMoney').text(needPay);
		//计算差额
		var difference = 0 ;
		difference = parseFloat(needPay-$needPayMoney);
		difference = Count.changeTwoDecimal(difference);
		$tr.find('.difference').text(difference);
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
		var billStatus = $parentObj.find('input[name=billStatus]').val(), 
			td = '';
		if(billStatus == 2){
			td = '<td></td>'
		};
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
		'<td><input type="text" name="startTime" class="date-Picker" style="width:90px;"/></td>'+
		'<td><input type="text" name="startArea" style="width:60px;"/></td>'+
		'<td><input type="text" name="endArea" style="width:60px;"/></td>'+
		'<td><input type="text" name="shift" style="width:60px;"/></td>'+
		'<td><input type="text" name="seatLevel" style="width:90px;"/></td>'+
		'<td><input type="text" name="price" style="width:90px;"/></td>'+
		'<td><input type="text" name="realCount" style="width:90px;"/></td>'+
		'<td><input type="text" name="reduceMoney" style="width:90px;"/></td>'+
		'<td><span class="ticketneedPayMoney">0</span><input type="hidden" value="0" name="needPayMoney"></td>'+
		'<td>0</td>'+
		'<td><input type="text" name="guidePayMoney" style="width:90px;"/></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><span class="difference"></span></td>'+
		'<td><input type="text" name="billRemark" style="width:170px;"/><a href="javascript:void(0)" class="T-del" style="margin-left:20px;">删除</a></td>'+
		td+
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
		 	var $tr = $(this).closest('tr');
		 	$tr.fadeOut(function(){
              $(this).remove();
            });
			var $sumIncome = $tr.find('.ticketneedPayMoney').text();
			var $tripIncome = $parentObj.find('.tripCost-ticketArrangeNeedPayMoney');
			var $newTripIncome = parseFloat(parseFloat($tripIncome.text()-$sumIncome));
		 	$newTripIncome = Count.changeTwoDecimal($newTripIncome);
			$tripIncome.text($newTripIncome);
			//计算整个团成本
			Count.tripCost($parentObj);
		});
	};
	//其他支出金额计算
	Count.autoOtherOutSum = function($obj,$parentObj){
		var $tr = $obj.closest('tr');
		var $price = parseFloat($tr.find('input[name=price]').val());
		var $realCount = parseFloat($tr.find('input[name=realCount]').val());
		var $reduceMoney = parseFloat($tr.find('input[name=reduceMoney]').val());
		var $needPayMoney = parseFloat($tr.find('input[name=needPayMoney]').val());
		//规范数据
		$price = Count.changeTwoDecimal($price);
		$realCount = Count.changeTwoDecimal($realCount);
		$reduceMoney = Count.changeTwoDecimal($reduceMoney);
		$needPayMoney = Count.changeTwoDecimal($needPayMoney);
		//计算应付
		var needPay = 0;
		needPay = parseFloat($price*$realCount-$reduceMoney);
		needPay = Count.changeTwoDecimal(needPay);
		$tr.find('.otherOutNeedPayMoney').text(needPay);
		//计算差额
		var difference = 0 ;
		difference = parseFloat(needPay-$needPayMoney);
		difference = Count.changeTwoDecimal(difference);
		$tr.find('.difference').text(difference);
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
		var billStatus = $parentObj.find('input[name=billStatus]').val(), 
			td = '';
		if(billStatus == 2){
			td = '<td></td>'
		};
		var html = '<tr>'+
		'<td class="countWhichDaysContainer"></td>'+
		'<td><input type="text" name="addOtherOutName" style="width:90px;"/></td>'+
		'<td><input type="text" name="price" style="width:90px;"/></td>'+
		'<td><input type="text" name="realCount" style="width:90px;"/></td>'+
		'<td><input type="text" name="reduceMoney" style="width:90px;"/></td>'+
		'<td><span class="otherOutNeedPayMoney">0</span><input type="hidden" value="0" name="needPayMoney"></td>'+
		'<td>0</td>'+
		'<td><input type="text" name="guidePayMoney" style="width:90px;"/></td>'+
		'<td><span style="color:#bbb;">查看</span></td>'+
		'<td><span class="difference"></span></td>'+
		'<td><input type="text" name="billRemark" style="width:230px;"/><a href="javascript:void(0)" class="T-del" style="margin-left:20px;">删除</a></td>'+
		td+
		'</tr>';
		$obj.append(html);
		//设置下拉框
		Count.setChooseDays($obj,$parentObj);
		//绑定事件
		$obj.find('input[type=text]').off('change').on('change',function(){
			var $nameFlag = $(this).attr('name');
			if($nameFlag != "addOtherOutName" && $nameFlag != "billRemark"){
				Count.calculateCost($(this));
				//计算金额
				Count.autoOtherOutSum($(this),$parentObj);
			}
		});
		//删除事件
		$obj.find('.T-del').off('click').on('click',function(){
		 	var $tr = $(this).closest('tr');
		 	$tr.fadeOut(function(){
              $(this).remove();
            });
			var $sumIncome = $tr.find('.otherOutNeedPayMoney').text();
			var $tripIncome = $parentObj.find('.tripCost-otherArrangeNeedPayMoney');
			var $newTripIncome = parseFloat(parseFloat($tripIncome.text()-$sumIncome));
		 	$newTripIncome = Count.changeTwoDecimal($newTripIncome);
			$tripIncome.text($newTripIncome);
			//计算整个团成本
			Count.tripCost($parentObj);
		});
	};
	//获取购物店的数据
	Count.getShopData = function($obj){
		var $shopObj = $obj.find('input[name=shopName]');
		$.ajax({
			url:KingServices.build_url("shop","findAll"),
			type:'POST',
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
								$tr.find('input[name=shopId]').val('');
								$tr.find('input[name=shopPolicy]').val('');
								$tr.find('input[name=shopPolicyId]').val('');
							}/*else{
								$tr.find('input[name=shopId]').val('');
							}*/
						},
						select:function(event,ui){
							if(ui.item != null){
								var $tr = $(this).closest('tr');
								$tr.find('input[name=shopId]').val(ui.item.id);
								$tr.find('input[name=shopPolicy]').val('');
								$tr.find('input[name=shopPolicyId]').val('');
								//获取对应的商品政策的数据
								Count.getShopPolicy($tr);
							}
						}
					}).off('click').on('click',function(){
						var obj = this;
						if(scenicList && scenicList.length > 0){
							for(var i=0; i < scenicList.length; i++){
								scenicList[i].value = scenicList[i].name;
							}
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
	Count.getShopPolicy = function($obj){
		var $shopPolicyObj = $obj.find('input[name=shopPolicy]'),shopId = $obj.find('input[name=shopId]').val();
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
					var shopPolicyList = JSON.parse(data.shopPolicyList);
					if(shopPolicyList && shopPolicyList.length > 0){
						for(var i=0; i < shopPolicyList.length; i++){
							shopPolicyList[i].value = shopPolicyList[i].name;
						}
						$shopPolicyObj.autocomplete({
							minLength:0,
							change:function(event,ui){
							if(ui.item == null){
								$obj.find('input[name=shopPolicyId]').val('');
							}
						},
						select:function(event,ui){
							if(ui.item != null){
								$obj.find('input[name=shopPolicyId]').val(ui.item.id);
							}
						}
						}).off('click').on('click',function(){
							$shopPolicyObj.autocomplete('option','source', shopPolicyList);
							$shopPolicyObj.autocomplete('search', '');
						});
					}else{
						layer.tips('没有内容。', shopObj, {
						    tips: [1, '#3595CC'],
						    time: 2000
						});
					}
				}
			}
		});
	};
	//获取自费的数据
	Count.getSelfData = function($obj,$parentObj){
		var $selfObj = $obj.find('input[name=selfPayName]');
		$.ajax({
			url:KingServices.build_url('selfpay','findAll'),
			type:'POST',
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
		var $selfPayItemObj = $obj.find('input[name=selfPayItem]'),$selfId = $obj.find('input[name=selfPayId]').val();
		$.ajax({
			url:KingServices.build_url('selfpay','findSelfPayItemBySelfPayId'),
			data:{
				id:$selfId
			},
			showLoading:false,
			type:'POST',
			success:function(data){
				var result = showDialog(data);
				if(result){
					console.log(data);
					var selfpay = JSON.parse(data.selfPayItemList);
					console.log(selfpay);
					for(var i=0; i < selfpay.length; i++){
						selfpay[i].value = selfpay[i].name;
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
								Count.getSelfPrice($tr,$parentObj);
							}
						}
					}).off('click').on('click',function(){
						$selfPayItemObj.autocomplete('option','source', selfpay);
						$selfPayItemObj.autocomplete('search', '');
					});
				}
			}
		});
	};
	//获取单价底价
	Count.getSelfPrice = function($obj,$parentObj){
		var startTime = $parentObj.find('.startTime_Choose').text(),
			whichDay = $obj.find('select[name=whichDay]').val(),
			id = $obj.find('input[name=selfPayItemId]').val();
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
				$obj.find('input[name=marketPrice]').val(data.marketPrice);
				$obj.find('input[name=price]').val(data.price);
			}
		});
	};
	//获取餐厅
	Count.getRestData = function($obj){
		var $restObj = $obj.find('input[name=restaurantName]');
		$.ajax({
			url:KingServices.build_url('restaurant','findAll'),
			type:'POST',
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
					$restObj.autocomplete({
						minLength:0,
						change:function(event,ui){
							if(ui.item == null){
								var $tr = $(this).closest('tr');
								$tr.find('input[name=price]').val('');
								$tr.find('input[name=standardId]').val(ui.item.id);
							}
						},
						select:function(event,ui){
							if(ui.item != null){
								var $tr = $(this).closest('tr');
								$tr.find('input[name=restaurantId]').val(ui.item.id);
								$tr.find('input[name=price]').val('');
								$tr.find('input[name=standardId]').val(ui.item.id);
								//获取餐标
								Count.getRestPrice($tr);
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
	Count.getRestPrice = function($obj){
		var id = $obj.find('input[name=restaurantId]').val(),
			standardObj = $obj.find('input[name=price]'),
			type = $obj.find('select[name=type]').val();
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
					var restaurantStandardList = data.restaurantStandardList;
					if(restaurantStandardList && restaurantStandardList.length > 0){
						for(var i=0; i < restaurantStandardList.length; i++){
							restaurantStandardList[i].value = restaurantStandardList[i].price;
						}
						standardObj.autocomplete({
							minLength:0,
							change:function(event,ui){
								 if(ui.item == null){
								 	var $tr = $(this).closest('tr');
								 	$tr.find('input[name=standardId]').val('');
								 }
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
				showLoading:false,
				success:function(data){
					var result = showDialog(data);
					if(result){
						console.log(data);
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
					Count.getHotelRoomPrice(parents,$parentObj);
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
	Count.getHotelRoomPrice = function($obj,$parentObj){
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
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
					var scenicList = JSON.parse(data.scenicList);
					console.log(scenicList);
					scenicObj.autocomplete({
						minLength:0,
						change:function(event,ui){
							var $tr = $(this).closest('tr');
							if(ui.item == null){
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
								$tr.find('input[name=price]').val('');
								$tr.find('input[name=scenicItemId]').val('');
							}
						},
						select:function(event,ui){
							var $tr = $(this).closest('tr');
							if(ui.item != null){
								$tr.find('input[name=scenicItemId]').val(ui.item.id);
								//获取单价
								Count.getScenicItemPrice($tr,$parentObj);
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
	Count.getScenicItemPrice = function($obj,$parentObj){
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
                	console.log(data);
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
					console.log(ui);
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
		if(newVal<0){
			newVal = 0;
		}
		return newVal;
	};
	Count.changeForInstall = function($val){
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
	Count.setChooseDays = function($obj,$parentObj){
		var days = $parentObj.find('.T-ProductDays').text();
        if(parseInt(days) < 1)return;
        if($obj){
            var tr = $obj.find("tr");
            var selectText = '<select class="col-sm-12" name="whichDay">';
            for(var i = 0; i < parseInt(days); i++){
                selectText += '<option value="'+(i+1)+'">第'+(i+1)+'天</option>';
            }
            selectText += '</select>';
            tr.eq(tr.length-1).find(".countWhichDaysContainer").html(selectText);
        }else{
            $("td.whichDaysContainer").each(function(index){
                var val = $(this).attr("value");
                var selectText = '<select class="col-sm-12" name="whichDay">';
                for(var i = 0; i < parseInt(days); i++){
                    if(val == (i+1)){
                        selectText += '<option value="'+(i+1)+'" selected="selected">第'+(i+1)+'天</option>';
                    }else{
                        selectText += '<option value="'+(i+1)+'">第'+(i+1)+'天</option>';
                    }
                }
                selectText += '</select>';
                $(this).html(selectText);
            });
        }
	};
	//获取社佣比例、导佣比例
	Count.getShopRate = function($obj,$bodyObj){
		$.ajax({
			url:KingServices.build_url('shop','findShopCostRebateBy'),
			type:'POST',
			data:{
				policyId:$obj.attr("policyId"),
            	consumeMoney:$obj.val(),
            	date:$bodyObj.find('.tripPlanStartTime').val()
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					var shopCostRebate = JSON.parse(data.shopCostRebate);
                	if(shopCostRebate != null) {
                		var travelAgencyRate = parseFloat(shopCostRebate.travelAgencyRate)*100;
                		travelAgencyRate = Count.changeTwoDecimal(travelAgencyRate);
                		var guideRate = parseFloat(shopCostRebate.guideRate)*100;
                		guideRate = Count.changeTwoDecimal(guideRate);
                		
                		if(travelAgencyRate > 0) {
                			$obj.closest('tr').find("input[name=travelAgencyRate]").val(travelAgencyRate);
                		} else {
                			$obj.closest('tr').find("input[name=travelAgencyRate]").val(0);
                		}
                		if(guideRate > 0) {
                			$obj.closest('tr').find("input[name=guideRate]").val(guideRate);
                		} else {s
                			$obj.closest('tr').find("input[name=guideRate]").val(0);
                		}
                		Count.autoShopSum($obj,$bodyObj);
                	}
				}
			}
		});
	};
	//保存数据
	Count.saveTripCount = function(id, financialTripPlanId,$obj,typeFlag){
		var method = typeFlag == 1?'update':'webGuideAccountUpdate';
		//组装数据
		var saveJsonStr = Count.installData(id,$obj);
		console.log(saveJsonStr);
			saveJsonStr.log.type = "1";

		var addShopList = saveJsonStr.addShopArrangeList;
		for(var i = 0;i<addShopList.length;i++){
			if(addShopList[i].shopId == "" || addShopList[i].shopPolicyId == ""){
				var message="";
				if(addShopList[i].shopId == ""){
					message = "请选择购物店"
				}else{
					if(addShopList[i].shopPolicyId == ""){
						message="请选择商品"
					}
				};
				showMessageDialog($("#confirm-dialog-message"),message);
				return;
			}
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
				showMessageDialog($("#confirm-dialog-message"),message);
				return;
			}
		}

		var addRestList = saveJsonStr.addRestArrangeList;
		for(var i = 0;i<addRestList.length;i++){
			if(addRestList[i].restaurantId == "" || addRestList[i].restaurantStandardId == ""){
				var message="";
				if(addRestList[i].restaurantId == ""){
					message = "请选择餐厅"
				}else{
					if(addRestList[i].restaurantStandardId == ""){
						message="请选择餐标"
					}
				};
				showMessageDialog($("#confirm-dialog-message"),message);
				return;
			}
		}

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
		}

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
		$.ajax({
			url:KingServices.build_url('financialTripPlan',method),
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
			"shopArrangeList":[],
			"addShopArrangeList":[],
			"selfPayArrangeList":[],
			"addSelfPayArrangeList":[],
			"otherInList":[],
			"busCompanyArrangeList":[],
			"restaurantArrangeList":[],
			"addRestArrangeList":[],
			"hotelArrangeList":[],
			"addHotelArrangeList":[],
			"scenicArrangeList":[],
			"addScenicArrangeList":[],
			"ticketArrangeList":[],
			"addTicketArrangeList":[],
			"otherArrangeList":[],
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
				"otherLog":[],
			}
		};
		//团信息
		var tripPlan = {
				id:Count.changeTwoDecimal($obj.find('.financial-tripPlanId').val()),
				grossProfitMoney:Count.changeTwoDecimal(parseFloat($obj.find('.grossProfitMoney').text())),
				perGrossProfitMoney:Count.changeTwoDecimal(parseFloat($obj.find('.T-main-table .perGrossProfitMoney').text())),
				getAllMoney:Count.changeTwoDecimal(parseFloat($obj.find('.T-main-table .tripIncome').text())),
				payAllMoney:Count.changeTwoDecimal(parseFloat($obj.find('.T-main-table .tripCost').text()))
		};
		if(typeof tripPlan.opCheckRemark == "undefined") {
            tripPlan.opCheckRemark = "";
        }
        if(typeof tripPlan.financialCheckRemark == "undefined") {
            tripPlan.financialCheckRemark = "";
        }
		saveJson.financialTripPlan = tripPlan;
		//购物数据
		var $shopObj = $obj.find('.T-count-shopping'),
		$tr = $shopObj.find('tr');
		$tr.each(function(){
			if($(this).attr('shopArrangeId')){
				var shopId = $(this).attr('shopid');
				var shopArrange = {
					id:$(this).attr('shopArrangeId'),
					consumeMoney:$(this).find('input[name=consumeMoney]').val(),
					travelAgencyRate:parseFloat($(this).find('input[name=travelAgencyRate]').val())/100,
					travelAgencyRebateMoney:$(this).find('input[name=travelAgencyRateMoney]').val(),
					guideRate:parseFloat($(this).find('input[name=guideRate]').val())/100,
					guideRebateMoney:$(this).find('input[name=guideRateMoney]').val(),
					customerRebateMoney:$(this).find('input[name=customerRebateMoney' + shopId + ']').val(),
					parkingRebateMoney:$(this).find('input[name=parkingRebateMoney' + shopId + ']').val(),
					billRemark:$(this).find('input[name=billRemark]').val()
				}
				saveJson.shopArrangeList.push(shopArrange);
				var log = {
					"aid":shopArrange.id,
					"om":Count.changeToString(parseFloat($(this).find('input[name=consumeMoney]').attr('old'))),
					"nm":shopArrange.consumeMoney,
					"orr":Count.changeToString(parseFloat($(this).find('input[name=travelAgencyRate]').attr('old'))),
					"nrr":shopArrange.travelAgencyRate,
					"ogr":Count.changeToString(parseFloat($(this).find('input[name=guideRate]').attr('old'))),
					"ngr":shopArrange.guideRate,
					"ocm":Count.changeToString(parseFloat($(this).find('input[name=customerRebateMoney' + shopId + ']').attr('old'))),
					"ncm":shopArrange.customerRebateMoney,
					"opm":Count.changeToString(parseFloat($(this).find('input[name=parkingRebateMoney' + shopId + ']').attr('old'))),
					"npm":shopArrange.parkingRebateMoney
				}
				saveJson.log.shopLog.push(log);
			}else{
				var addShopArrange = {
					id:"",
					whichDay:$(this).find('select[name=whichDay]').val(),
					shopId:$(this).find('input[name=shopId]').val(),
					shopPolicyId:$(this).find('input[name=shopPolicyId]').val(),
					consumeMoney:$(this).find('input[name=consumeMoney]').val(),
					travelAgencyRate:$(this).find('input[name=travelAgencyRate]').val()/100,
					travelAgencyRebateMoney:$(this).find('.travelAgencyRateMoney').text(),
					guideRate:$(this).find('input[name=guideRate]').val()/100,
					guideRebateMoney:$(this).find('.guideRateMoney').text(),
					customerRebateMoney:parseFloat($(this).find('input[name=customerRebateMoney]').val()),
					parkingRebateMoney:parseFloat($(this).find('input[name=parkingRebateMoney]').val()),
					billRemark:$(this).find('input[name=billRemark]').val()
				};
				saveJson.addShopArrangeList.push(addShopArrange);
			};
		});
		//自费数据
		var $selfObj = $obj.find('.T-count-selfPay'),
		$tr = $selfObj.find('tr');
		$tr.each(function(){
			if($(this).attr('selfPayArrangeId')){
				var shopId = $(this).attr('shopid');
				var selfPayArrange = {
						"id":Count.changeToString($(this).attr('selfPayArrangeId')),
						"realCount":Count.changeToString($(this).find('input[name=realCount]').val()),
						"reduceMoney":Count.changeToString($(this).find('input[name=reduceMoney]').val()),
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val()),
						"realGetMoney":Count.changeToString($(this).find('input[name=realGetMoney]').val()),
						"travelAgencyRate":Count.changeToString(parseFloat($(this).find('input[name=travelAgencyRate]').val())/100),
						"travelAgencyRebateMoney":Count.changeToString($(this).find('input[name=travelAgencyRebateMoney]').val()),
						"guideRate":Count.changeToString(parseFloat($(this).find('input[name=guideRate]').val())/100),
						billRemark:$(this).find('input[name=billRemark]').val(),
						"guideRebateMoney":Count.changeToString($(this).find('input[name=guideRebateMoney]').val())
				}
				saveJson.selfPayArrangeList.push(selfPayArrange);
				var log = {
						"aid":selfPayArrange.id,
						"oc":Count.changeToString(parseFloat($(this).find('input[name=realCount]').attr('old'))),
						"nc":selfPayArrange.realCount,
						"ogm":Count.changeToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
						"ngm":selfPayArrange.realGuidePayMoney
				}
				saveJson.log.selfPayLog.push(log);
			}else{
				var addSelfArrange = {
					id:'',
					whichDay:$(this).find('select[name=whichDay]').val(),
					selfPayId:$(this).find('input[name=selfPayId]').val(),
					selfPayItemId:$(this).find('input[name=selfPayItemId]').val(),
					marketPrice:$(this).find('input[name=marketPrice]').val(),
					price:$(this).find('input[name=price]').val(),
					allPersonMoney:$(this).find('input[name=allPersonMoney]').val(),
					realCount:$(this).find('input[name=realCount]').val(),
					reduceMoney:$(this).find('input[name=reduceMoney]').val(),
					needPayMoney:$(this).find('.needPayMoney').text(),
					payedMoney:$(this).find('input[name=hasPayedMoney]').val(),
					realGuidePayMoney:$(this).find('input[name=guidePayMoney]').val(),
					travelAgencyRate:Count.changeTwoDecimal(parseFloat($(this).find('input[name=travelAgencyRate]').val())/100),
					travelAgencyRebateMoney:$(this).find('.travelAgencyRebateMoney').text(),
					guideRate:Count.changeTwoDecimal(parseFloat($(this).find('input[name=guideRate]').val())/100),
					realGetMoney:$(this).find('input[name=currentMonry]').val(),
					guideRebateMoney:$(this).find('.guideRebateMoney').text(),
					billRemark:$(this).find('input[name=billRemark]').val(),
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
						"price":Count.changeToString($(this).find('input[name=price]').val()),
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"reduceMoney":Count.changeToString($(this).find('input[name=reduceMoney]').val()),
						billRemark:$(this).find('input[name=billRemark]').val(),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val())
				}
				saveJson.busCompanyArrangeList.push(busCompanyArrange);
				var log = {
						"aid":busCompanyArrange.id,
						"reduceMoney":Count.changeToString(parseFloat($(this).find('input[name=reduceMoney]').attr('old'))),
						"ogm":Count.changeToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
						"ngm":busCompanyArrange.realGuidePayMoney
				}
				saveJson.log.busLog.push(log);
			}
		});
		//餐费数据
		var $restObj = $obj.find('.T-count-restaurant'),
		$tr = $restObj.find('tr');
		$tr.each(function(){
			if($(this).attr('restaurantArrangeId')){
				var restaurantArrange = {
						"id":Count.changeToString($(this).attr('restaurantArrangeId')),
						"realCount":Count.changeToString($(this).find('input[name=realCount]').val()),
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"reduceMoney":Count.changeToString($(this).find('input[name=reduceMoney]').val()),
						billRemark:$(this).find('input[name=billRemark]').val(),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val())
				}
				saveJson.restaurantArrangeList.push(restaurantArrange);
				var log = {
						"aid":restaurantArrange.id,
						"oc":Count.changeToString(parseFloat($(this).find('input[name=realCount]').attr('old'))),
						"nc":restaurantArrange.realCount,
						"reduceMoney":Count.changeToString(parseFloat($(this).find('input[name=reduceMoney]').attr('old'))),
						"ogm":Count.changeToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
						"ngm":restaurantArrange.realGuidePayMoney
				}
				saveJson.log.restaurantLog.push(log);
			}else{
				var addRestArrange = {
					id:'',
					whichDay:$(this).find('select[name=whichDay]').val(),
					restaurantId:$(this).find('input[name=restaurantId]').val(),
					type:$(this).find('select[name=type]').val(),
					restaurantStandardId:$(this).find('input[name=standardId]').val(),
					price:$(this).find('input[name=price]').val(),
					realCount:$(this).find('input[name=realCount]').val(),
					reduceMoney:$(this).find('input[name=reduceMoney]').val(),
					payedMoney:$(this).find('input[name=payedMoney]').val(),
					realGuidePayMoney:$(this).find('input[name=guidePayMoney]').val(),
					billRemark:$(this).find('input[name=billRemark]').val(),
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
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"reduceMoney":Count.changeToString($(this).find('input[name=reduceMoney]').val()),
						billRemark:$(this).find('input[name=billRemark]').val(),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val())
				}
				saveJson.hotelArrangeList.push(hotelArrange);
				var log = {
						"aid":hotelArrange.id,
						"oc":Count.changeToString(parseFloat($(this).find('input[name=realCount]').attr('old'))),
						"nc":hotelArrange.realCount,
						"reduceMoney":Count.changeToString(parseFloat($(this).find('input[name=reduceMoney]').attr('old'))),
						"ogm":Count.changeToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
						"ngm":hotelArrange.realGuidePayMoney
				}
				saveJson.log.hotelLog.push(log);
			}else{
				var addHotelArrange = {
					id:'',
					whichDay:$(this).find('select[name=whichDay]').val(),
					hotelId:$(this).find('input[name=hotelId]').val(),
					hotelRoomId:$(this).find('input[name=hotelRoomId]').val(),
					price:$(this).find('input[name=price]').val(),
					realCount:$(this).find('input[name=realCount]').val(),
					reduceMoney:$(this).find('input[name=reduceMoney]').val(),
					payedMoney:$(this).find('input[name=payedMoney]').val(),
					realGuidePayMoney:$(this).find('input[name=guidePayMoney]').val(),
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
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"reduceMoney":Count.changeToString($(this).find('input[name=reduceMoney]').val()),
						billRemark:$(this).find('input[name=billRemark]').val(),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val())
				}
				saveJson.scenicArrangeList.push(scenicArrange);
				var log = {
						"aid":scenicArrange.id,
						"oc":Count.changeToString(parseFloat($(this).find('input[name=realCount]').attr('old'))),
						"nc":scenicArrange.realCount,
						"reduceMoney":Count.changeToString(parseFloat($(this).find('input[name=reduceMoney]').attr('old'))),
						"ogm":Count.changeToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
						"ngm":scenicArrange.realGuidePayMoney
				}
				saveJson.log.scenicLog.push(log);
			}else{
				var addScenic = {
					id:'',
					whichDay:$(this).find('select[name=whichDay]').val(),
					scenicId:$(this).find('input[name=scenicId]').val(),
					scenicItemId:$(this).find('input[name=scenicItemId]').val(),
					price:$(this).find('input[name=price]').val(),
					realCount:$(this).find('input[name=realCount]').val(),
					reduceMoney:$(this).find('input[name=reduceMoney]').val(),
					payedMoney:$(this).find('input[name=payedMoney]').val(),
					realGuidePayMoney:$(this).find('input[name=guidePayMoney]').val(),
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
						"needPayMoney":Count.changeToString($(this).find('.needPayMoney').text()),
						"reduceMoney":Count.changeToString($(this).find('input[name=reduceMoney]').val()),
						billRemark:$(this).find('input[name=billRemark]').val(),
						"realGuidePayMoney":Count.changeToString($(this).find('input[name=realGuidePayMoney]').val())
				}
				saveJson.ticketArrangeList.push(ticketArrange);
				var log = {
						"aid":ticketArrange.id,
						"oc":Count.changeToString(parseFloat($(this).find('input[name=realCount]').attr('old'))),
						"nc":ticketArrange.realCount,
						"reduceMoney":Count.changeToString(parseFloat($(this).find('input[name=reduceMoney]').attr('old'))),
						"ogm":Count.changeToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
						"ngm":ticketArrange.realGuidePayMoney
				}
				saveJson.log.ticketLog.push(log);
			}else{
				var addTicket = {
					id:'',
					ticketId:$(this).find('input[name=ticketId]').val(),
					type:$(this).find('select[name=ticketType]').val(),
					startTime:$(this).find('input[name=startTime]').val(),
					startingCity:$(this).find('input[name=startArea]').val(),
					arriveCity:$(this).find('input[name=endArea]').val(),
					seatLevel:$(this).find('input[name=seatLevel]').val(),
					price:$(this).find('input[name=price]').val(),
					shift:$(this).find('input[name=shift]').val(),
					realCount:$(this).find('input[name=realCount]').val(),
					reduceMoney:$(this).find('input[name=reduceMoney]').val(),
					payedMoney:$(this).find('input[name=payedMoney]').val(),
					realGuidePayMoney:$(this).find('input[name=guidePayMoney]').val(),
					billRemark:$(this).find('input[name=billRemark]').val(),
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
                    "price":$(this).find('input[name="price"]').val(),
                    "count":$(this).find('input[name="realCount"]').val(),
                    "reduceMoney":Count.changeToString($(this).find('input[name=reduceMoney]').val()),
                    "realGuidePayMoney":$(this).find('input[name="realGuidePayMoney"]').val(),
                    "billRemark":$(this).find('input[name="billRemark"]').val()
                }
                saveJson.otherArrangeList.push(otherArrange);
            }else{var otherArrange = {
            		id:'',
                    "whichDay":$(this).find('select[name="whichDay"]').val(),
                    "title":$(this).find('input[name="addOtherOutName"]').val(),
                    "price":$(this).find('input[name="price"]').val(),
                    "realCount":$(this).find('input[name="realCount"]').val(),
                    "reduceMoney":$(this).find('input[name="reduceMoney"]').val(),
                    "payedMoney":$(this).find('input[name="payedMoney"]').val(),
                    "realGuidePayMoney":$(this).find('input[name="guidePayMoney"]').val(),
                    "billRemark":$(this).find('input[name="billRemark"]').val()
                }
                saveJson.otherArrangeList.push(otherArrange);
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
	exports.init = Count.initModule;
	exports.tripDetail = Count.viewTripDetail;
});