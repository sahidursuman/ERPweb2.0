define(function(require, exports) {
    var menuKey = "financial_count";
    var listHeaderTemplate = require("./view/listHeader");
    var listTableTemplate = require("./view/listTable");
    var updateTemplate = require("./view/update");
    var viewLogTemplate = require("./view/viewLog");
    var billImageTempLate = require("./view/billImage");
    var detailTempLate = require("./view/detail");
    var arrangeDetailTempLate = require("./view/arrangeDetail");
    var tripDetailTempLate = require("./view/tripDetail");
    var groupDetailTemplate = require("./view/groupDetail");
    var Reimbursement = require("./view/Reimbursement");
    var outDetailTempLate = require("./view/outDetail");
    var uKey = menuKey + "-checkBill";
    
    var count = {
		searchData : {
			page : "",
			id:"",
			tripNumber : "",
			lineProductId : "",
			lineProductName : "",
			guideId : "",
			guideName : "",
			startTime : "",
			endTime : "",
			status : ""
		},
		edited : {},
		autocompleteDate : {},
		isEdited : function(editedType){
			if(!!count.edited[editedType] && count.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		oldCheckBillId : 0,
        init: function() {
            var today = (new Date()).Format('yyyy-MM-dd'),
                firstDay = today.split('-');
    
            firstDay[2] = '01';

            count.initCount('','','','','','','');
        },
        initCount: function(id,tripNumber,lineProductId,lineProductName,guideId,guideName,startTime,endTime,status) {
            // init page
            $.ajax({
                url: ""+APP_ROOT+"back/financialTripPlan.do?method=findFinancialListPageCount&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type: 'get',
                data: {
					"id":id,
                    "tripNumber":tripNumber,
                    "lineProductId":lineProductId,
                    "lineProductName": lineProductName,
                    "guideId":guideId,
                    "guideName":guideName,
                    "startTime":startTime,
                    "endTime":endTime,
                    "billStatus":status,
                },
                success: function(data) {
                    var result = showDialog(data);
                    if(result){
                        addTab(menuKey, "按团统计", listHeaderTemplate(data));
						//count.getQueryTerms();
                         //分页控件
                        
                        // 按照搜索条件，初始化报表
                        count.getlistCount(0,id, tripNumber,lineProductId,lineProductName,guideId,guideName,startTime,endTime,status);
                        // bind event
                        $('.btn-arrangeTourist-search').on('click', function(event) {
                            event.preventDefault();
                            /* Act on the event */
                            // 按照搜索条件，初始化报表
							var id = $('.financialCount .search-area').find('input[name=tripNumber]').val();
                            var tripNumber = $('.financialCount .search-area').find('input[name=chooseTripNumber]').val();
                            var lineProductId = $('.financialCount .search-area').find('input[name=lineProductId]').val();
                            var guideId = $('.financialCount .search-area').find('input[name=guideId]').val();
                            var endTime = $('.financialCount .search-area').find('input[name=entTime]').val();
                            var startTime = $('.financialCount .search-area').find('input[name=startTime]').val();
                            var status = $('.financialCount .search-area .btn-status').find('button').attr('data-value');
                            var lineProductName = $('.financialCount .search-area').find('input[name=chooseLineProductName]').val();
                            var guideName = $('.financialCount .search-area').find('input[name=chooseGuideRealName]').val();
                            count.initCount(id,tripNumber,lineProductId,lineProductName,guideId,guideName,startTime,endTime,status);
                        });
                    }
                }
            });            
            
            
            // trigger base
        },
        getlistCount:function(page,id,tripNumber,lineProductId,lineProductName,guideId,guideName,startTime,endTime,status){
           $.ajax({
                url:""+APP_ROOT+"back/financialTripPlan.do?method=listFinancialTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:{
                	"pageNo":page,
					"id":id,
                	"tripNumber":tripNumber,
                	"lineProductId":lineProductId,
                	"lineProductName":lineProductName,
                	"guideId":guideId,
                	"guideName":guideName,
                	"startTime":startTime,
                	"endTime":endTime,
                	"billStatus":status,
                	"sortType":"auto"
                },
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	
        				var tripPlanList = JSON.parse(data.tripPlanList);
        				data.tripPlanList = tripPlanList;
                        $('.counterList').html(listTableTemplate(data))
                        
                      //搜索按钮事件
                        $(".main-content .financialCount .clearBlur").blur(function(){
                        	var a = $(this).next().val();
                        	if(!isNaN(a)) {
                        		//$(this).val("");
                        		$(this).next().val("");
                        	}
                        });
                        
                        //搜索栏状态button下拉事件
						$("#tab-"+menuKey+"-content .search-area .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
						});
                        var tabid = $("#tab-financial_count-content");
                        laypage({
                            cont: tabid.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
                            pages: data.totalPage, //总页数
                            curr: (page + 1),
                            jump: function(obj, first) {
                                if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                                    count.getlistCount(obj.curr -1);
                                }
                            }
                            });
                        /*//分页--首页按钮事件
                        $(".main-content .page-content .pageMode a.first").click(function(){
                            count.search(0);
                        });
                        //分页--上一页事件
                        $(".main-content .page-content .pageMode a.previous").click(function(){
                            var previous = data.pageNo - 1;
                            if(data.pageNo == 0){
                                previous = 0;
                            }
                            count.search(previous);
                        });
                        //分页--下一页事件
                        $(".main-content .page-content .pageMode a.next").click(function(){
                            var next =  data.pageNo + 1;
                            if(data.pageNo == data.totalPage-1){
                                next = data.pageNo ;
                            }
                            count.search(next);
                        });
                        //分页--尾页事件
                        $(".main-content .page-content .pageMode a.last").click(function(){
                            count.search(data.totalPage-1);
                        });
*/



                        //给web报账绑定事件
                        $(".financialCount .btn-guide-account").click(function(){
                        	var id = $(this).attr('data-entity-id');
                        	var billStatus = $(this).attr('data-entity-billStatus');
                        	if(billStatus == -1 || billStatus == "-1") {
                        		count.Reimbursement(id,"guide");
                        	} else {
                        		showMessageDialog($( "#confirm-dialog-message" ), "本团已报账，不能重复操作！", function(){});
                        	}
                        });
                        
                        //给审核按钮绑定事件
                        $(".financialCount .btn-count-update").click(function(){
                        	var id = $(this).attr('data-entity-id');
                        	var billStatus = $(this).attr('data-entity-billStatus');
                        	if(billStatus == -1 || billStatus == "-1") {
                        		showMessageDialog($( "#confirm-dialog-message" ), "导游未报账，不能做审核操作", function(){});
                        	} else if(billStatus == 2 || billStatus == "2") {
                        		//是否需要做财务报账后，提示只有管理员能修改数据
                        		count.updateExamine(id,"");
                        	} else {
                        		count.updateExamine(id,"");
                        	}
                        });

                        //给明细按钮绑定事件
                        $(".financialCount .btn-count-examine").click(function(){
                        	var id = $(this).attr('data-entity-id');
                            count.tripDetail(id);
                        });
                        count.buildDatePicker();
                        //count.bindTripChoose();
						count.bindTripChoose($("#tab-"+menuKey+"-content"));
                        count.bindLineProductChoose();
                        count.bindGuideRealNameChoose();
                    }
                }
            });
        },

        //团号模糊
		bindTripChoose : function(){
			var tripPlan = $(".financialCount input[name=chooseTripNumber]");
			tripPlan.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).nextAll('input[name="tripNumber"]').val('');
					}
				},
				select:function(event,ui){
					$(this).blur();
					$(this).next().val(ui.item.tripNumber);
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/tripPlan.do?method=findTripByTripNumber&token="+$.cookie("token")+"&menuKey=arrange_plan&operation=self",
					dataType: "json",
					success: function(data) {
						var result = showDialog(data);
						if(result){
							var tripPlanList = JSON.parse(data.tripPlanList);
							if(tripPlanList != null && tripPlanList.length > 0){
								for(var i=0;i<tripPlanList.length;i++){
									tripPlanList[i].value = tripPlanList[i].tripNumber;
								}
							}
							$(obj).autocomplete('option','source', tripPlanList);
							$(obj).autocomplete('search', '');
						}
					}
				});
			});
		},
        //线路产品
        bindLineProductChoose : function(){
        	var lineProduct = $(".financialCount input[name=chooseLineProductName]");
        	lineProduct.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).nextAll('input[name="lineProductId"]').val('');
					}
				},
				select:function(event,ui){
					$(this).blur();
					$(this).next().val(ui.item.lineProductId);
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/lineProduct.do?method=findAllLineProductOnlyIdAndName&token="+$.cookie("token")+"&menuKey=resource_lineProduct&operation=self",
                    dataType: "json",
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
        },

        //导游
        bindGuideRealNameChoose : function(){
        	var guideRealName = $(".financialCount input[name=chooseGuideRealName]");
        	guideRealName.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).nextAll('input[name="guideId"]').val('');
					}
				},
				select:function(event,ui){
					$(this).blur();
					$(this).next().val(ui.item.guideId);
				}
			}).off("click").on("click", function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/guide.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_guide&operation=self",
                    dataType: "json",
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
        },
        search : function(pageNo) {
			var id = $('.financialCount .search-area').find('input[name=tripNumber]').val();
        	var tripNumber = $('.financialCount .search-area').find('input[name=chooseTripNumber]').val();
        	var lineProductId = $('.financialCount .search-area').find('input[name=lineProductId]').val();
        	var guideId = $('.financialCount .search-area').find('input[name=guideId]').val();
        	var endTime = $('.financialCount .search-area').find('input[name=entTime]').val();
        	var startTime = $('.financialCount .search-area').find('input[name=startTime]').val();
        	var status = $('.financialCount .search-area .btn-status').find('button').attr('data-value');
        	var lineProductName = $('.financialCount .search-area').find('input[name=chooseLineProductName]').val();
        	var guideName = $('.financialCount .search-area').find('input[name=chooseGuideRealName]').val();
        	count.getlistCount(pageNo,id,tripNumber,lineProductId,lineProductName,guideId,guideName,startTime,endTime,status);
        },
        buildDatePicker : function() {
        	$('.financialCount .search-area').find('.date-picker').datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
        },
        updateExamine : function(id,guide) {
            $.ajax({
                url:""+APP_ROOT+"back/financialTripPlan.do?method=findFinancialTripPlanById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:{
                	"id":id,
                	"guideType":guide
                },
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	var tmp = {
							"busCompanyArrange":JSON.parse(data.busCompanyArrange),
							"tripPlan":JSON.parse(data.tripPlan),
							"dayList":JSON.parse(data.dayList),
							"user":JSON.parse(data.user),
							"guideArrange":JSON.parse(data.guideArrange),
							"insuranceArrange":JSON.parse(data.insuranceArrange),
							"ticketArrangeList":JSON.parse(data.ticketArrangeList),
							"WEB_IMG_URL_BIG":data.WEB_IMG_URL_BIG,
							"WEB_IMG_URL_SMALL":data.WEB_IMG_URL_SMALL,
							"touristGroup":data.touristGroup,
							"financialTripPlanId":data.financialTripPlanId,
							"arrangeIncomePaymentList":JSON.parse(data.arrangeIncomePaymentList),
							"remarkArrangeList": JSON.parse(data.remarkArrangeList)
                        }

                        data = count.covertRemark(tmp);
                    	var html = updateTemplate(data);
                    	var title = (guide == "guide"?"单团报账":"单团审核");
						
						//判断页面是否存在 #tab-financial_guide-clearing-content  "tab-"+ menuKey+"-clearing"+"-content" 
                 	    if($("#tab-"+uKey+"-content").length > 0) {
                 	    	if(!!count.edited["checkBill"] && count.edited["checkBill"] != ""){
                 	    		addTab(uKey,title);
                 	    		showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
				            		var id = $(this).attr('data-entity-id');
									var financialTripPlanId = $(this).attr('data-entity-financial-id');
									var userName = $(this).attr('data-entity-userName');
									var roleType = $(this).attr('data-entity-roleType');
									count.saveTripCount(id, financialTripPlanId, userName, roleType,0);
				            		 count.edited["checkBill"] = "";
				            		 addTab(uKey,title,html);
				            	 },function(){
				            		 addTab(uKey,title,html);
				            		 count.edited["checkBill"] = "";
				            	 });
                 	    	 }else{
	                 	    	addTab(uKey,title,html);
                 	    	 }
                 	    }else{
                 	    	addTab(uKey,title,html);
                 	    }
            			
						$(".financial-count-update-update-tab").on("change",function(){
							count.edited["checkBill"] = "checkBill";
							count.oldCheckBillId = id;
						});
            			$('.countUpdate .btn-saveCount').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				var financialTripPlanId = $(this).attr('data-entity-financial-id');
            				var userName = $(this).attr('data-entity-userName');
            				var roleType = $(this).attr('data-entity-roleType');
            				count.saveTripCount(id, financialTripPlanId, userName, roleType,0);
            			});
            			$('.countUpdate .btn-guide-account').off('click').on('click',function() {
            				//访问报账函数
            				var id = $(this).attr('data-entity-id');
            				var financialTripPlanId = $(this).attr('data-entity-financial-id');
            				var roleType = $(this).attr('data-entity-roleType');
            				var userName = $(this).attr('data-entity-userName');
            				count.webGuideAccount(id, financialTripPlanId, userName, roleType);
            			});
            			
            			$('.countUpdate .btn-accountCheck').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				var billStatus = $(this).attr('data-entity-billStatus');
            				var financialTripPlanId = $(this).attr('data-entity-financial-id');
            				var userName = $(this).attr('data-entity-userName');
            				var roleType = $(this).attr('data-entity-roleType');
            				//showConfirmDialog($( "#confirm-dialog-message" ), "审核与数据无关，您如果修改了数据则需要先点击保存按钮进行数据的保存，否则您本次修改的数据将不会存入后台。审核过后您将不能修改数据，确认要这样操作吗？", function(){
                				count.accountCheck(id, billStatus, userName, roleType, financialTripPlanId);
			            	//});
            			});
            			//退回计调
            			$('.countUpdate .btn-rebackOP').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				var billStatus = $(this).attr('data-entity-billStatus');
            				var financialTripPlanId = $(this).attr('data-entity-financial-id');
            				showConfirmDialog($( "#confirm-dialog-message" ), "退回计调后，将需要等计调审核过后您才能再次操作，您确定要这样做吗？", function(){
            					count.reback(id, billStatus, financialTripPlanId);
            				});
            			});
            			//退回导游
            			$('.countUpdate .btn-rebackGuide').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				var billStatus = $(this).attr('data-entity-billStatus');
            				var financialTripPlanId = $(this).attr('data-entity-financial-id');
            				showConfirmDialog($( "#confirm-dialog-message" ), "退回导游后，将需要等导游报账过后您才能再次操作，您确定要这样做吗？", function(){
            					count.reback(id, billStatus, financialTripPlanId);
            				});
            			});
            			
            			//操作记录
            			$('.countUpdate .btn-financialLog').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				id = $('.countUpdate .financial-tripPlanId').val();
            				count.viewLog(id);
            			});
            			
            			//团款明细
            			$('.countUpdate .btn-viewGroupDetail').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				count.viewGroupDetail(id);
            			});
            			
            			//安排明细表
            			$('.countUpdate .btn-tripPlanArrange').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				id = $('.countUpdate .financial-tripPlanId').val();
            				count.arrangeDetail(id);
            			});
            			
            			//中转明细
            			$('.countUpdate .btn-viewTripTransit').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				count.ViewOutDetail(id);
            			});
            			
            			//单据图片
            			$('.countUpdate .btn-view').off('click').on('click',function() {
            		    	var WEB_IMG_URL_BIG = $('.countUpdate').find('input[name=WEB_IMG_URL_BIG]').val();
            		    	var WEB_IMG_URL_SMALL = $('.countUpdate').find('input[name=WEB_IMG_URL_SMALL]').val();
            				count.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
            			});
            			
            			//购物
            			$('.countUpdate #shopping').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				
            				if($(this).attr("name") == "travelAgencyRate" || $(this).attr("name") == "guideRate") {
            					var rate = parseFloat($(this).val());
            					if(rate > 100) {
            						$(this).val(100);
            					}
            					
            					var type = $(this).attr("name") == "travelAgencyRate"?1:2;
            					var travelAgencyRate = count.changeTwoDecimal(parseFloat($(this).parent().parent().find("input[name=travelAgencyRate]").val()));
            					var guideRate = count.changeTwoDecimal(parseFloat($(this).parent().parent().find("input[name=guideRate]").val()));
            					var sumRate = travelAgencyRate + guideRate;
            					if(sumRate > 100) {
	            					if(type == "1") {
	            						//社佣
	            						$(this).parent().parent().find("input[name=travelAgencyRate]").val(100-guideRate);
	            					} else if(type == "2") {
	            						//导佣
	            						$(this).parent().parent().find("input[name=guideRate]").val(100-travelAgencyRate);
	            					}
            					}
            				}
            				
            				count.bindShopping(this,"countUpdate");
            			});
            			$('.countUpdate #shopping').find('input[name=consumeMoney]').off('change').on('change',function() {
            				count.getShopRate(this,"countUpdate");
            			});
            			//自费
            			$('.countUpdate #selfPay').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				
            				if($(this).attr("name") == "travelAgencyRate" || $(this).attr("name") == "guideRate") {
            					var rate = parseFloat($(this).val());
            					if(rate > 100) {
            						$(this).val(100);
            					}
            					
            					var type = $(this).attr("name") == "travelAgencyRate"?1:2;
            					var travelAgencyRate = count.changeTwoDecimal(parseFloat($(this).parent().parent().find("input[name=travelAgencyRate]").val()));
            					var guideRate = count.changeTwoDecimal(parseFloat($(this).parent().parent().find("input[name=guideRate]").val()));
            					var sumRate = travelAgencyRate + guideRate;
            					if(sumRate > 100) {
	            					if(type == "1") {
	            						//社佣
	            						$(this).parent().parent().find("input[name=travelAgencyRate]").val(100-guideRate);
	            					} else if(type == "2") {
	            						//导佣
	            						$(this).parent().parent().find("input[name=guideRate]").val(100-travelAgencyRate);
	            					}
            					}
            				}
            				count.bindSelfPay(this,"countUpdate");
            			});
            			
            			//其他收入
            			$('.countUpdate #otherIn').find('input[type=text]').off('blur').on('blur',function() {
            				if($(this).attr('reset')) {
            				} else {
            					var vl = $(this).val();
            					if(vl.length == 0) {
            						$(this).val(0);
            					}
            					vl = $(this).val();
            					$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            					count.bindOtherIn(this,"countUpdate");
            				}
            			});
            			
            			//车费
            			$('.countUpdate #bus').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindBus(this,"countUpdate");
            			});
            			//餐费
            			$('.countUpdate #restaurant').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindRestaurant(this,"countUpdate");
            			});
            			//房费
            			$('.countUpdate #hotelArrange').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindHotel(this,"countUpdate");
            			});
            			//景区
            			$('.countUpdate #scenic').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindScenic(this,"countUpdate");
            			});
            			//票务
            			$('.countUpdate #ticket').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindTicket(this,"countUpdate");
            			});
            			
            			//其他支出
            			$('.countUpdate #other').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindOther(this,"countUpdate");
            			});
            			
            			//触发页面所有input框的blur时间
            			$('.countUpdate').find('input[type=text]').blur();
                    }
                }
            });
		},
        //报账处理
        Reimbursement:function(id,guide){
            $.ajax({
                url:""+APP_ROOT+"back/financialTripPlan.do?method=findFinancialTripPlanById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:{
                    "id":id,
                    "guideType":guide
                },
                success:function(data){
                    //layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        var tmp = {
                            "busCompanyArrange":JSON.parse(data.busCompanyArrange),
                            "tripPlan":JSON.parse(data.tripPlan),
                            "dayList":JSON.parse(data.dayList),
                            "user":JSON.parse(data.user),
                            "guideArrange":JSON.parse(data.guideArrange),
                            "insuranceArrange":JSON.parse(data.insuranceArrange),
                            "ticketArrangeList":JSON.parse(data.ticketArrangeList),
                            "WEB_IMG_URL_BIG":data.WEB_IMG_URL_BIG,
                            "WEB_IMG_URL_SMALL":data.WEB_IMG_URL_SMALL,
                            "touristGroup":data.touristGroup,
                            "financialTripPlanId":data.financialTripPlanId,
                            "arrangeIncomePaymentList":JSON.parse(data.arrangeIncomePaymentList),
                            "remarkArrangeList": JSON.parse(data.remarkArrangeList)
                        };
                        data = count.covertRemark(tmp);
                        console.log(data);
                        var html = Reimbursement(data);
                        addTab(menuKey+"-Reimbursement","单团报账",html);

                        $(document).on("mouseenter",".countWhichDaysContainer",function(){
                            var whichDay = $(this).val(),
                                $this = $(this)
                                startTime = $("#tab-financial_count-Reimbursement-content").find("span[name=startTime_Choose]").text(),
                                date = new Date(startTime.replace("-", "/").replace("-", "/"));
                            var timer = date.getTime()+(whichDay-1)*24*60*60*1000;
                            date.setTime(timer);
                            var datetime = date.getFullYear()+ "-"+ (date.getMonth() + 1) + "-"+ (date.getDate() < 10 ? "0" + date.getDate() : date.getDate());
                            layer.tips(datetime, $this, {
                                tips: [1, '#3595CC'],
                                time: 1500
                            });
                        });
                         //新增按钮事件
                        var $tabId = $("#tab-financial_count-Reimbursement-content");
                        $tabId.find('.countReimbursement .T-addOtherIn').on('click',function() {
                            var $divObj = $(this).closest('div').parent(); 
                            var $body = $divObj.find(".table tbody");
                            var html = '<tr>'+
                                        '<td class="countWhichDaysContainer"></td>'+
                                        '<td><input type="text" name="title"/></td>'+
                                        '<td><input type="text" maxlength="9" name="price" value=0 /></td>'+
                                        '<td><input type="text" maxlength="6" name="count" value=0 /></td>'+
                                        '<td><input type="text" maxlength="9" readOnly="readOnly" name="realneedPayMoney"/></td>'+
                                        '<td><span style="color:#bbb">查看</span></td>'+
                                        '<td><input type="text" name="billRemark" maxlength="1000"/><a href="javascript:void(0)" class="T-del" style="margin-left:15px;">删除</a></td>'+
                                        '</tr>';
                            $body.append(html);
                            count.autoSum($body);
                            count.setChooseDays("financial-count-update-other-incoming");
                        });
                        $("#T-otherIn").off('blur').on('blur','input[type=text]',function(){
                            var vl = $(this).val();
                                if(vl.length == 0) {
                                    $(this).val(0);
                                }
                                vl = $(this).val();
                                $(this).val(count.changeTwoDecimal(parseFloat(vl)));
                                count.bindOtherInSum(this,"countReimbursement");
                        });
                        $('#T-otherIn').on('click', '.T-del', function() {
                            var tr = $(this).closest("tr");
                                 var needPayMoney = tr.find('input[name="realneedPayMoney"]').val();
                                 var $body = $(".countReimbursement .main-table");
                                 var otherInCome = $body.find(".tripIncome-otherInCome");
                                 var otherInComeVal = otherInCome.text();
                                 var totalIncome = $body.find(".tripIncome");
                                 var grossProfit = $body.find(".grossProfitMoney");
                                 var vageGrossProfit = $body.find(".perGrossProfitMoney");
                                 var totalPerson = count.changeTwoDecimal(parseFloat($body.find('.tripPlanAdultCount').val())) + count.changeTwoDecimal(parseFloat($body.find(' .tripPlanChildCount').val()));
                                 var sum = totalIncome.text()-needPayMoney;
                                 var inComeSum = otherInComeVal-needPayMoney;
                                 var grossProfitSum = grossProfit.text()-needPayMoney;
                                 totalIncome.text(sum);
                                 grossProfit.text(grossProfitSum);
                                 otherInCome.text(inComeSum);
                                 vageGrossProfit.text(grossProfit.text()/totalPerson);

                                tr.fadeOut(function(){
                                        $(this).remove();
                                });
                        })
                        //其他支出的删除事件
                        $("#T-other").on('click','.T-del',function(){
                            var tr = $(this).closest('tr');
                            var  needPayMoney = tr.find('.needPayMoney').text();
                            var $body = $(".countReimbursement .main-table");
                            var otherCost = $body.find(".tripCost-otherArrangeNeedPayMoney");
                            var tripCost = $body.find(".tripCost");
                            var grossProfit = $body.find(".grossProfitMoney");
                            var vageGrossProfit = $body.find(".perGrossProfitMoney");
                            var totalPerson = count.changeTwoDecimal(parseFloat($body.find('.tripPlanAdultCount').val())) + count.changeTwoDecimal(parseFloat($body.find(' .tripPlanChildCount').val()));
                            var sum = otherCost.text()-needPayMoney;
                            otherCost.text(sum);
                            var otherSum = tripCost.text()-needPayMoney;
                            tripCost.text(otherSum);
                            var grossProfitSum = grossProfit.text() - needPayMoney;
                            grossProfit.text(grossProfitSum);
                            vageGrossProfit.text(grossProfit.text()/totalPerson);
                            tr.fadeOut(function(){
                                $(this).remove();
                            });
                        }); 
                        $tabId.find('.countReimbursement .T-addOtherOut').on('click',function() {
                            var $divObj = $(this).closest('div').parent();  
                            var $body = $divObj.find(".table tbody");
                            var html = '<tr>'+
                                        '<td class="countWhichDaysContainer"></td>'+
                                        '<td><input type="text" name="name" maxlength="32"/></td>'+
                                        '<td><input type="text" maxlength="9" name="realPrice" value=0 /></td>'+
                                        '<td><input type="text" maxlength="6" name="realCount" value=0 /></td>'+
                                        '<td><input type="text" maxlength="9" name="reduceMoney" value=0 /></td>'+
                                        '<td><span class="needPayMoney"></span></td>'+
                                        '<td>-</td>'+
                                        '<td><input type="text" maxlength="9" name="realGuidePayMoney" value=0 /></td>'+
                                        '<td><span style="color:#bbb">查看</span></td>'+
                                        '<td>-</td>'+
                                        '<td><input type="text" name="billRemark"/><a href="javascript:void(0)" class="T-del" style="margin-left:15px;">删除</a></td>'+
                                        '</tr>';
                            $body.append(html);
                            count.autoOutSum($body);
                            count.removeData($body);
                            $($body).find('input[type=text]').off('blur').on('blur',function() {
                                var vl = $(this).val();
                                if(vl.length == 0) {
                                    $(this).val(0);
                                }
                                vl = $(this).val();
                                $(this).val(count.changeTwoDecimal(parseFloat(vl)));
                                count.bindOther(this,"countReimbursement");
                            });
                            count.setChooseDays("financial-count-update-otherpay");
                        });
                        //购物
                        $('.countReimbursement #T-shopping').find('input[type=text]').off('blur').on('blur',function() {
                            var vl = $(this).val();
                            if(vl.length == 0) {
                                $(this).val(0);
                            }
                            vl = $(this).val();
                            $(this).val(count.changeTwoDecimal(parseFloat(vl)));
                            
                            if($(this).attr("name") == "travelAgencyRate" || $(this).attr("name") == "guideRate") {
                                var rate = parseFloat($(this).val());
                                if(rate > 100) {
                                    $(this).val(100);
                                }
                                
                                var type = $(this).attr("name") == "travelAgencyRate"?1:2;
                                var travelAgencyRate = count.changeTwoDecimal(parseFloat($(this).parent().parent().find("input[name=travelAgencyRate]").val()));
                                var guideRate = count.changeTwoDecimal(parseFloat($(this).parent().parent().find("input[name=guideRate]").val()));
                                var sumRate = travelAgencyRate + guideRate;
                                if(sumRate > 100) {
                                    if(type == "1") {
                                        //社佣
                                        $(this).parent().parent().find("input[name=travelAgencyRate]").val(100-guideRate);
                                    } else if(type == "2") {
                                        //导佣
                                        $(this).parent().parent().find("input[name=guideRate]").val(100-travelAgencyRate);
                                    }
                                }
                            }
                            count.bindShopping(this,"countReimbursement","T-shopping");
                        });
                        $('.countReimbursement #T-shopping').find('input[name=consumeMoney]').off('change').on('change',function() {
                            count.getShopRate(this,"countReimbursement","T-shopping");
                        });
                        //自费
                        $('.countReimbursement #T-selfPay').find('input[type=text]').off('blur').on('blur',function() {
                            var vl = $(this).val();
                            if(vl.length == 0) {
                                $(this).val(0);
                            }
                            vl = $(this).val();
                            $(this).val(count.changeTwoDecimal(parseFloat(vl)));
                            
                            if($(this).attr("name") == "travelAgencyRate" || $(this).attr("name") == "guideRate") {
                                var rate = parseFloat($(this).val());
                                if(rate > 100) {
                                    $(this).val(100);
                                };
                                var type = $(this).attr("name") == "travelAgencyRate"?1:2;
                                var travelAgencyRate = count.changeTwoDecimal(parseFloat($(this).parent().parent().find("input[name=travelAgencyRate]").val()));
                                var guideRate = count.changeTwoDecimal(parseFloat($(this).parent().parent().find("input[name=guideRate]").val()));
                                var sumRate = travelAgencyRate + guideRate;
                                if(sumRate > 100) {
                                    if(type == "1") {
                                        //社佣
                                        $(this).parent().parent().find("input[name=travelAgencyRate]").val(100-guideRate);
                                    } else if(type == "2") {
                                        //导佣
                                        $(this).parent().parent().find("input[name=guideRate]").val(100-travelAgencyRate);
                                    }
                                }
                            }
                            count.bindSelfPay(this,"countReimbursement","T-selfPay");
                        });
                        //其他收入
                        $('.countReimbursement #T-otherIn').find('input[type=text]').off('blur').on('blur',function() {
                            if($(this).attr('reset')) {
                            } else {
                                var vl = $(this).val();
                                if(vl.length == 0) {
                                    $(this).val(0);
                                }
                                vl = $(this).val();
                                $(this).val(count.changeTwoDecimal(parseFloat(vl)));
                                count.bindOtherIn(this,"countReimbursement");
                            }
                        });
                        //车费
                        $('.countReimbursement #T-bus').find('input[type=text]').off('blur').on('blur',function() {
                            var vl = $(this).val();
                            if(vl.length == 0) {
                                $(this).val(0);
                            }
                            vl = $(this).val();
                            $(this).val(count.changeTwoDecimal(parseFloat(vl)));
                            count.bindBus(this,"countReimbursement");
                        });
                        //餐费
                        $('.countReimbursement #T-restaurant').find('input[type=text]').off('blur').on('blur',function() {
                            var vl = $(this).val();
                            if(vl.length == 0) {
                                $(this).val(0);
                            }
                            vl = $(this).val();
                            $(this).val(count.changeTwoDecimal(parseFloat(vl)));
                            count.bindRestaurant(this,"countReimbursement");
                        });
                        //房费
                        $('.countReimbursement #T-hotelArrange').find('input[type=text]').off('blur').on('blur',function() {
                            var vl = $(this).val();
                            if(vl.length == 0) {
                                $(this).val(0);
                            }
                            vl = $(this).val();
                            $(this).val(count.changeTwoDecimal(parseFloat(vl)));
                            count.bindHotel(this,"countReimbursement");
                        });
                        //景区
                        $('.countReimbursement #T-scenic').find('input[type=text]').off('blur').on('blur',function() {
                            var vl = $(this).val();
                            if(vl.length == 0) {
                                $(this).val(0);
                            }
                            vl = $(this).val();
                            $(this).val(count.changeTwoDecimal(parseFloat(vl)));
                            count.bindScenic(this,"countReimbursement");
                        });
                        //票务
                        $('.countReimbursement #T-ticket').find('input[type=text]').off('blur').on('blur',function() {
                            var vl = $(this).val();
                            if(vl.length == 0) {
                                $(this).val(0);
                            }
                            vl = $(this).val();
                            $(this).val(count.changeTwoDecimal(parseFloat(vl)));
                            count.bindTicket(this,"countReimbursement");
                        });
                        //其他支出
                        $('.countReimbursement #T-other').find('input[type=text]').off('blur').on('blur',function() {
                            var vl = $(this).val();
                            if(vl.length == 0) {
                                $(this).val(0);
                            }
                            vl = $(this).val();
                            $(this).val(count.changeTwoDecimal(parseFloat(vl)));
                            count.bindOther(this,"countReimbursement");
                        });
                        $('.countReimbursement .btn-saveCount').off('click').on('click',function() {
                            var id = $(this).attr('data-entity-id');
                            var financialTripPlanId = $(this).attr('data-entity-financial-id');
                            var userName = $(this).attr('data-entity-userName');
                            var roleType = $(this).attr('data-entity-roleType');
                            count.saveTripCount(id, financialTripPlanId, userName, roleType,0,2);
                        });
                        $('.countReimbursement .btn-guide-account').off('click').on('click',function() {
                            //访问报账函数
                            var id = $(this).attr('data-entity-id');
                            var financialTripPlanId = $(this).attr('data-entity-financial-id');
                            var roleType = $(this).attr('data-entity-roleType');
                            var userName = $(this).attr('data-entity-userName');
                            count.webGuideAccount(id, financialTripPlanId, userName, roleType);
                        });
                        //操作记录
                        $('.countReimbursement .btn-financialLog').off('click').on('click',function() {
                            var id = $(this).attr('data-entity-id');
                            id = $('.countUpdate .financial-tripPlanId').val();
                            count.viewLog(id);
                        });
                        //单据图片
                        $('.countReimbursement .btn-view').off('click').on('click',function() {
                            var WEB_IMG_URL_BIG = $('.financialTripDetail').find('input[name=WEB_IMG_URL_BIG]').val();
                            var WEB_IMG_URL_SMALL = $('.financialTripDetail').find('input[name=WEB_IMG_URL_SMALL]').val();
                            count.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
                        });
                        //团款明细
                        $('.countReimbursement .btn-viewGroupDetail').off('click').on('click',function() {
                            var id = $(this).attr('data-entity-id');
                            count.viewGroupDetail(id);
                        });
                        //中转明细
                        $('.countReimbursement .btn-viewTripTransit').off('click').on('click',function() {
                            var id = $(this).attr('data-entity-id');
                            count.ViewOutDetail(id);
                        });
                        
                        //安排明细表
                        $('.countReimbursement .btn-tripPlanArrange').off('click').on('click',function() {
                            var id = $(this).attr('data-entity-id');
                            id = $('.countReimbursement .financial-tripPlanId').val();
                            count.arrangeDetail(id);
                        });
                        //触发页面所有input框的blur时间
                        $('.countReimbursement').find('input[type=text]').blur();
                    }
                }
            });
        },
        //自动计算
        autoSum:function($obj){
                var $price = $($obj).find('input[name="price"]');
                var $count = $($obj).find('input[name="count"]');
                $price.on('change',function(){
                    var tr = $(this).closest("tr");
                    var count = tr.find('input[name="count"]').val();
                    var price = $(this).val();
                    var needPayMoney = tr.find('input[name="realneedPayMoney"]');
                    var sum = price*count;
                    needPayMoney.val(sum);
                    
                });
                $count.on('change',function(){
                    var tr = $(this).closest("tr");
                    var price = tr.find('input[name="price"]').val();
                    var count = $(this).val();
                    var needPayMoney = tr.find('input[name="realneedPayMoney"]');
                    var sum = price*count;
                    needPayMoney.val(sum);
                    
                });
        },
        autoOutSum:function($obj){
            var $price = $($obj).find('input[name="realPrice"]');
            var $count = $($obj).find('input[name="realCount"]');
            var $reduceMoney = $($obj).find('input[name="reduceMoney"]');
                $price.on('change',function(){
                    var tr = $(this).closest("tr");
                    var count = tr.find('input[name="realCount"]').val();
                    var price = $(this).val();
                    var reduceMoney = tr.find('input[name="reduceMoney"]').val();
                    var needPayMoney = tr.find('input[name="needPayMoney"]');
                    var sum = price*count-reduceMoney;
                    needPayMoney.val(sum);
                });
                $count.on('change',function(){
                    var tr = $(this).closest('tr');
                    var count = $(this).val();
                    var price = tr.find('input[name="realPrice"]').val();
                    var reduceMoney = tr.find('input[name="reduceMoney"]').val();
                    var needPayMoney = tr.find('input[name="needPayMoney"]')
                    var sum = price*count-reduceMoney;
                    needPayMoney.val(sum);
                });
                $reduceMoney.on('change',function(){
                    var tr = $(this).closest('tr');
                    var count = tr.find('input[name="realCount"]').val();
                    var price = tr.find('input[name="realPrice"]').val();
                    var reduceMoney = $(this).val();
                    var needPayMoney = tr.find('input[name="needPayMoney"]')
                    var sum = price*count-reduceMoney;
                    needPayMoney.val(sum);
                });
        },
        //保存报账
        saveCountReimbursement:function(id){
            var saveJson = {
                    "financialTripPlan":{},
                    "shopArrangeList":[],
                    "selfPayArrangeList":[],
                    "otherInList":[],
                    "busCompanyArrangeList":[],
                    "restaurantArrangeList":[],
                    "hotelArrangeList":[],
                    "scenicArrangeList":[],
                    "ticketArrangeList":[],
                    "otherArrangeList":[],
                    "remarkArrangeList":[]
            }
            
            //团信息
            var tripPlan = {
                    "id":count.changeTwoDecimalToString($('.countReimbursement').find('.main-table .financial-tripPlanId').val()),
                    "grossProfitMoney":count.changeTwoDecimalToString(parseFloat($('.countReimbursement').find('.main-table .grossProfitMoney').text())),
                    "perGrossProfitMoney":count.changeTwoDecimalToString(parseFloat($('.countReimbursement').find('.main-table .perGrossProfitMoney').text())),
                    "getAllMoney":count.changeTwoDecimalToString(parseFloat($('.countReimbursement').find('.main-table .tripIncome').text())),
                    "payAllMoney":count.changeTwoDecimalToString(parseFloat($('.countReimbursement').find('.main-table .tripCost').text()))
            };
            if(typeof tripPlan.opCheckRemark == "undefined") {
                tripPlan.opCheckRemark = "";
            }
            if(typeof tripPlan.financialCheckRemark == "undefined") {
                tripPlan.financialCheckRemark = "";
            }
            saveJson.financialTripPlan = tripPlan;
            
            //购物
            $('.countReimbursement').find('#T-shopping').find('tr').each(function() {
                if($(this).attr('shopArrangeId')) {
                    var shopId = $(this).attr('shopid');
                    var shopArrange = {
                            "id":count.changeTwoDecimalToString($(this).attr('shopArrangeId')),
                            "consumeMoney":count.changeTwoDecimalToString($(this).find('input[name=consumeMoney]').val()),
                            "travelAgencyRate":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=travelAgencyRate]').val())/100),
                            "travelAgencyRebateMoney":count.changeTwoDecimalToString($(this).find('input[name=travelAgencyRateMoney]').val()),
                            "guideRate":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=guideRate]').val())/100),
                            "guideRebateMoney":count.changeTwoDecimalToString($(this).find('input[name=guideRateMoney]').val()),
                            "billRemark":$(this).find('input[name="billRemark"]').val(),
                            "customerRebateMoney":count.changeTwoDecimalToString($('.countReimbursement').find('#t-shopping').find('input[name=customerRebateMoney' + shopId + ']').val()),
                            "parkingRebateMoney":count.changeTwoDecimalToString($('.countReimbursement').find('#t-shopping').find('input[name=parkingRebateMoney' + shopId + ']').val())
                    }
                    saveJson.shopArrangeList.push(shopArrange);
                }
            });
            //自费
            $('.countReimbursement').find('#T-selfPay').find('tr').each(function() {
                if($(this).attr('selfPayArrangeId')) {
                    var selfPayArrange = {
                            "id":count.changeTwoDecimalToString($(this).attr('selfPayArrangeId')),
                            "realCount":count.changeTwoDecimalToString($(this).find('input[name=realCount]').val()),
                            "needPayMoney":count.changeTwoDecimalToString($(this).find('.needPayMoney').text()),
                            "realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val()),
                            "travelAgencyRate":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=travelAgencyRate]').val())/100),
                            "travelAgencyRebateMoney":count.changeTwoDecimalToString($(this).find('input[name=travelAgencyRebateMoney]').val()),
                            "guideRate":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=guideRate]').val())/100),
                            "billRemark":$(this).find('input[name="billRemark"]').val(),
                            "guideRebateMoney":count.changeTwoDecimalToString($(this).find('input[name=guideRebateMoney]').val())
                    }
                    saveJson.selfPayArrangeList.push(selfPayArrange);
                }
            });
            //其他收入
            $('.countReimbursement').find('#T-otherIn').find('tr').each(function() {
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
                    "id":"",
                    "whichDay":$(this).find('select[name="whichDay"]').val(),
                    "title":$(this).find('input[name="title"]').val(),
                    "price":$(this).find('input[name="price"]').val(),
                    "count":$(this).find('input[name="count"]').val(),
                    "billRemark":$(this).find('input[name="billRemark"]').val(),
                    }
                saveJson.otherInList.push(otherIn);
                }
                
            });
            //车费
            $('.countReimbursement').find('#T-bus').find('tr').each(function() {
                if($(this).attr('busCompanyArrangeId')) {
                    var busCompanyArrange = {
                            "id":count.changeTwoDecimalToString($(this).attr('busCompanyArrangeId')),
                            "realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val()),
                            "billRemark":$(this).find('input[name="billRemark"]').val()
                    }
                    saveJson.busCompanyArrangeList.push(busCompanyArrange);
                }
            });
            
            //餐费
            $('.countReimbursement').find('#T-restaurant').find('tr').each(function() {
                if($(this).attr('restaurantArrangeId')) {
                    var restaurantArrange = {
                            "id":count.changeTwoDecimalToString($(this).attr('restaurantArrangeId')),
                            "realCount":count.changeTwoDecimalToString($(this).find('input[name=realCount]').val()),
                            "billRemark":$(this).find('input[name="billRemark"]').val(),
                            "realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val())
                    }
                    saveJson.restaurantArrangeList.push(restaurantArrange);
                }
            });
            
            //房费
            $('.countReimbursement').find('#T-hotelArrange').find('tr').each(function() {
                if($(this).attr('hotelArrangeId')) {
                    var hotelArrange = {
                            "id":count.changeTwoDecimalToString($(this).attr('hotelArrangeId')),
                            "realCount":count.changeTwoDecimalToString($(this).find('input[name=realCount]').val()),
                            "billRemark":$(this).find('input[name="billRemark"]').val(),
                            "realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val())
                    }
                    saveJson.hotelArrangeList.push(hotelArrange);
                }
            });
            
            //景区
            $('.countReimbursement').find('#T-scenic').find('tr').each(function() {
                if($(this).attr('scenicArrangeId')) {
                    var scenicArrange = {
                            "id":count.changeTwoDecimalToString($(this).attr('scenicArrangeId')),
                            "realCount":count.changeTwoDecimalToString($(this).find('input[name=realCount]').val()),
                            "billRemark":$(this).find('input[name="billRemark"]').val(),
                            "realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val())
                    }
                    saveJson.scenicArrangeList.push(scenicArrange);
                }
            });
            
            //票务
            $('.countReimbursement').find('#T-ticket').find('tr').each(function() {
                if($(this).attr('ticketArrangeId')) {
                    var ticketArrange = {
                            "id":count.changeTwoDecimalToString($(this).attr('ticketArrangeId')),
                            "realCount":count.changeTwoDecimalToString($(this).find('input[name=realCount]').val()),
                            "billRemark":$(this).find('input[name="billRemark"]').val(),
                            "realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val())
                    }
                    saveJson.ticketArrangeList.push(ticketArrange);
                }
            });
            //其他
            $('.countReimbursement').find('#T-other').find('tr').each(function() {
                if($(this).attr('otherArrangeId')){
                    var otherArrange = {
                        "id":$(this).attr('otherArrangeId'),
                        "price":$(this).find('input[name="realPrice"]').val(),
                        "count":$(this).find('input[name="realCount"]').val(),
                        "reduceMoney":$(this).find('input[name="reduceMoney"]').val(),
                        "realGuidePayMoney":$(this).find('input[name="realGuidePayMoney"]').val(),
                        "billRemark":$(this).find('input[name="billRemark"]').val()
                    }
                    saveJson.otherArrangeList.push(otherArrange);
                }else{var otherArrange = {
                        "id":"",
                        "whichDay":$(this).find('select[name="whichDay"]').val(),
                        "title":$(this).find('input[name="name"]').val(),
                        "price":$(this).find('input[name="realPrice"]').val(),
                        "count":$(this).find('input[name="realCount"]').val(),
                        "reduceMoney":$(this).find('input[name="reduceMoney"]').val(),
                        "realGuidePayMoney":$(this).find('input[name="realGuidePayMoney"]').val(),
                        "billRemark":$(this).find('input[name="billRemark"]').val()
                    }
                    saveJson.otherArrangeList.push(otherArrange);
                }
            });
            return saveJson;
        },
        //删除事件
        removeData:function($obj){
            
            var delBtn = $($obj).find(".T-del");
            delBtn.on('click',function(){
                var tr = $(this).closest("tr");
                tr.fadeOut(function(){
                    $(this).remove();
                });
            });
        },
        setChooseDays : function(id){
            var days = $(".countReimbursement .T-ProductDays").text();

            if(parseInt(days) < 1)return;
            if(id){
                var tr = $("#"+id+" .table tbody tr");
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
        },
		getShopRate : function(obj,formClass,id) {
			 $.ajax({
	                url:""+APP_ROOT+"back/shop.do?method=findShopCostRebateBy&token="+$.cookie("token")+"&menuKey=resource_shop&operation=self",
	                type:"POST",
	                data:{
	                	"policyId":$(obj).attr("policyId"),
	                	"consumeMoney":$(obj).val(),
	                	"date":$('.'+formClass+' .main-table').find('.tripPlanStartTime').val()
	                },
	                dataType:"json",
	                beforeSend:function(){
	                    //globalLoadingLayer = openLoadingLayer();
	                },
	                success:function(data){
	                	//layer.close(globalLoadingLayer);
	                    var result = showDialog(data);
	                    if(result){
	                    	var shopCostRebate = JSON.parse(data.shopCostRebate);
		                	if(shopCostRebate != null) {
		                		var travelAgencyRate = parseFloat(shopCostRebate.travelAgencyRate)*100;
		                		travelAgencyRate = count.changeTwoDecimal(travelAgencyRate);
		                		var guideRate = parseFloat(shopCostRebate.guideRate)*100;
		                		guideRate = count.changeTwoDecimal(guideRate);
		                		
		                		if(travelAgencyRate > 0) {
		                			$(obj).parent().parent().find("input[name=travelAgencyRate]").val(travelAgencyRate);
		                		} else {
		                			$(obj).parent().parent().find("input[name=travelAgencyRate]").val(0);
		                		}
		                		if(guideRate > 0) {
		                			$(obj).parent().parent().find("input[name=guideRate]").val(guideRate);
		                		} else {s
		                			$(obj).parent().parent().find("input[name=guideRate]").val(0);
		                		}
		                	}
	                    }
	                    count.bindShopping(obj,formClass,id);
	                }
			 });
		},
		getSaveTripPlanJson : function(id) {
			var saveJson = {
					"financialTripPlan":{},
					"shopArrangeList":[],
					"selfPayArrangeList":[],
					"otherInList":[],
					"busCompanyArrangeList":[],
					"restaurantArrangeList":[],
					"hotelArrangeList":[],
					"scenicArrangeList":[],
					"ticketArrangeList":[],
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
			}
			
			//团信息
			var tripPlan = {
					"id":count.changeTwoDecimalToString($('.countUpdate').find('.main-table .financial-tripPlanId').val()),
					"grossProfitMoney":count.changeTwoDecimalToString(parseFloat($('.countUpdate').find('.main-table .grossProfitMoney').text())),
					"perGrossProfitMoney":count.changeTwoDecimalToString(parseFloat($('.countUpdate').find('.main-table .perGrossProfitMoney').text())),
					"getAllMoney":count.changeTwoDecimalToString(parseFloat($('.countUpdate').find('.main-table .tripIncome').text())),
					"payAllMoney":count.changeTwoDecimalToString(parseFloat($('.countUpdate').find('.main-table .tripCost').text()))
			};
			if(typeof tripPlan.opCheckRemark == "undefined") {
				tripPlan.opCheckRemark = "";
			}
			if(typeof tripPlan.financialCheckRemark == "undefined") {
				tripPlan.financialCheckRemark = "";
			}
			saveJson.financialTripPlan = tripPlan;
			
			//购物
			$('.countUpdate').find('#shopping').find('tr').each(function() {
				if($(this).attr('shopArrangeId')) {
					var shopId = $(this).attr('shopid');
					var shopArrange = {
							"id":count.changeTwoDecimalToString($(this).attr('shopArrangeId')),
							"consumeMoney":count.changeTwoDecimalToString($(this).find('input[name=consumeMoney]').val()),
							"travelAgencyRate":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=travelAgencyRate]').val())/100),
							"travelAgencyRebateMoney":count.changeTwoDecimalToString($(this).find('input[name=travelAgencyRateMoney]').val()),
							"guideRate":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=guideRate]').val())/100),
							"guideRebateMoney":count.changeTwoDecimalToString($(this).find('input[name=guideRateMoney]').val()),
							"customerRebateMoney":count.changeTwoDecimalToString($('.countUpdate').find('#shopping').find('input[name=customerRebateMoney' + shopId + ']').val()),
							"parkingRebateMoney":count.changeTwoDecimalToString($('.countUpdate').find('#shopping').find('input[name=parkingRebateMoney' + shopId + ']').val())
					}
					saveJson.shopArrangeList.push(shopArrange);
					var log = {
							"aid":shopArrange.id,
							"om":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=consumeMoney]').attr('old'))),
							"nm":shopArrange.consumeMoney,
							"orr":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=travelAgencyRate]').attr('old'))),
							"nrr":shopArrange.travelAgencyRate,
							"ogr":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=guideRate]').attr('old'))),
							"ngr":shopArrange.guideRate,
							"ocm":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=customerRebateMoney' + shopId + ']').attr('old'))),
							"ncm":shopArrange.customerRebateMoney,
							"opm":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=parkingRebateMoney' + shopId + ']').attr('old'))),
							"npm":shopArrange.parkingRebateMoney
					}
					saveJson.log.shopLog.push(log);
				}
			});
			
			//自费
			$('.countUpdate').find('#selfPay').find('tr').each(function() {
				if($(this).attr('selfPayArrangeId')) {
					var selfPayArrange = {
							"id":count.changeTwoDecimalToString($(this).attr('selfPayArrangeId')),
							"realCount":count.changeTwoDecimalToString($(this).find('input[name=realCount]').val()),
							"needPayMoney":count.changeTwoDecimalToString($(this).find('.needPayMoney').text()),
							"realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val()),
							"travelAgencyRate":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=travelAgencyRate]').val())/100),
							"travelAgencyRebateMoney":count.changeTwoDecimalToString($(this).find('input[name=travelAgencyRebateMoney]').val()),
							"guideRate":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=guideRate]').val())/100),
							"guideRebateMoney":count.changeTwoDecimalToString($(this).find('input[name=guideRebateMoney]').val())
					}
					saveJson.selfPayArrangeList.push(selfPayArrange);
					var log = {
							"aid":selfPayArrange.id,
							"oc":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=realCount]').attr('old'))),
							"nc":selfPayArrange.realCount,
							"ogm":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
							"ngm":selfPayArrange.realGuidePayMoney
					}
					saveJson.log.selfPayLog.push(log);
				}
			});
			//其他收入
			$('.countUpdate').find('#otherIn').find('tr').each(function() {
				/*if($(this).attr('otherInId')) {
					var otherIn = {
							"id":count.changeTwoDecimalToString($(this).attr('otherInId')),
							"title":$(this).find('input[name=title]').val(),
							"price":count.changeTwoDecimalToString($(this).find('input[name=price]').val()),
							"count":count.changeTwoDecimalToString($(this).find('input[name=count]').val())
					}
					saveJson.otherInList.push(otherIn);
					var log = {
							"aid":otherIn.id,
							"ot":$(this).find('input[name=title]').attr('old'),
							"nt":otherIn.title,
							"op":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=price]').attr('old'))),
							"np":otherIn.price,
							"oc":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=count]').attr('old'))),
							"nc":otherIn.count
					}
					saveJson.log.otherInLog.push(log);
				}*/
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
			//车费
			$('.countUpdate').find('#bus').find('tr').each(function() {
				if($(this).attr('busCompanyArrangeId')) {
					var busCompanyArrange = {
							"id":count.changeTwoDecimalToString($(this).attr('busCompanyArrangeId')),
							"needPayMoney":count.changeTwoDecimalToString($(this).find('.needPayMoney').text()),
							"realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val())
					}
					saveJson.busCompanyArrangeList.push(busCompanyArrange);
					var log = {
							"aid":busCompanyArrange.id,
							"ogm":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
							"ngm":busCompanyArrange.realGuidePayMoney
					}
					saveJson.log.busLog.push(log);
				}
			});
			
			//餐费
			$('.countUpdate').find('#restaurant').find('tr').each(function() {
				if($(this).attr('restaurantArrangeId')) {
					var restaurantArrange = {
							"id":count.changeTwoDecimalToString($(this).attr('restaurantArrangeId')),
							"realCount":count.changeTwoDecimalToString($(this).find('input[name=realCount]').val()),
							"needPayMoney":count.changeTwoDecimalToString($(this).find('.needPayMoney').text()),
							"realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val())
					}
					saveJson.restaurantArrangeList.push(restaurantArrange);
					var log = {
							"aid":restaurantArrange.id,
							"oc":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=realCount]').attr('old'))),
							"nc":restaurantArrange.realCount,
							"ogm":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
							"ngm":restaurantArrange.realGuidePayMoney
					}
					saveJson.log.restaurantLog.push(log);
				}
			});
			
			//房费
			$('.countUpdate').find('#hotelArrange').find('tr').each(function() {
				if($(this).attr('hotelArrangeId')) {
					var hotelArrange = {
							"id":count.changeTwoDecimalToString($(this).attr('hotelArrangeId')),
							"realCount":count.changeTwoDecimalToString($(this).find('input[name=realCount]').val()),
							"needPayMoney":count.changeTwoDecimalToString($(this).find('.needPayMoney').text()),
							"realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val())
					}
					saveJson.hotelArrangeList.push(hotelArrange);
					var log = {
							"aid":hotelArrange.id,
							"oc":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=realCount]').attr('old'))),
							"nc":hotelArrange.realCount,
							"ogm":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
							"ngm":hotelArrange.realGuidePayMoney
					}
					saveJson.log.hotelLog.push(log);
				}
			});
			
			//景区
			$('.countUpdate').find('#scenic').find('tr').each(function() {
				if($(this).attr('scenicArrangeId')) {
					var scenicArrange = {
							"id":count.changeTwoDecimalToString($(this).attr('scenicArrangeId')),
							"realCount":count.changeTwoDecimalToString($(this).find('input[name=realCount]').val()),
							"needPayMoney":count.changeTwoDecimalToString($(this).find('.needPayMoney').text()),
							"realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val())
					}
					saveJson.scenicArrangeList.push(scenicArrange);
					var log = {
							"aid":scenicArrange.id,
							"oc":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=realCount]').attr('old'))),
							"nc":scenicArrange.realCount,
							"ogm":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
							"ngm":scenicArrange.realGuidePayMoney
					}
					saveJson.log.scenicLog.push(log);
				}
			});
			
			//票务
			$('.countUpdate').find('#ticket').find('tr').each(function() {
				if($(this).attr('ticketArrangeId')) {
					var ticketArrange = {
							"id":count.changeTwoDecimalToString($(this).attr('ticketArrangeId')),
							"realCount":count.changeTwoDecimalToString($(this).find('input[name=realCount]').val()),
							"needPayMoney":count.changeTwoDecimalToString($(this).find('.needPayMoney').text()),
							"realGuidePayMoney":count.changeTwoDecimalToString($(this).find('input[name=realGuidePayMoney]').val())
					}
					saveJson.ticketArrangeList.push(ticketArrange);
					var log = {
							"aid":ticketArrange.id,
							"oc":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=realCount]').attr('old'))),
							"nc":ticketArrange.realCount,
							"ogm":count.changeTwoDecimalToString(parseFloat($(this).find('input[name=realGuidePayMoney]').attr('old'))),
							"ngm":ticketArrange.realGuidePayMoney
					}
					saveJson.log.ticketLog.push(log);
				}
			});
			
            // 批注
            var $tab = $('.financial-count-update-update-tab'),
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

			//其他
			$('.countUpdate').find('#other').find('tr').each(function() {
                if($(this).attr('otherArrangeId')){
                    var otherArrange = {
                        "id":$(this).attr('otherArrangeId'),
                        "price":$(this).find('input[name="realPrice"]').val(),
                        "count":$(this).find('input[name="realCount"]').val(),
                        "reduceMoney":$(this).find('input[name="reduceMoney"]').val(),
                        "realGuidePayMoney":$(this).find('input[name="realGuidePayMoney"]').val(),
                        "billRemark":$(this).find('input[name="billRemark"]').val()
                    }
                    saveJson.otherArrangeList.push(otherArrange);
                }else{var otherArrange = {
                        "whichDay":$(this).find('select[name="whichDay"]').val(),
                        "title":$(this).find('input[name="name"]').val(),
                        "price":$(this).find('input[name="realPrice"]').val(),
                        "count":$(this).find('input[name="realCount"]').val(),
                        "reduceMoney":$(this).find('input[name="reduceMoney"]').val(),
                        "realGuidePayMoney":$(this).find('input[name="realGuidePayMoney"]').val(),
                        "billRemark":$(this).find('input[name="billRemark"]').val()
                    }
                    saveJson.otherArrangeList.push(otherArrange);
                }
			});
			return saveJson;
		},
		reback : function(id, billStatus, financialTripPlanId) {
			//var method  = billStatus==0?"rebackOp":"rebackFinancial";
			//method = "rebackOp";//暂时只做一个退回计调
			var method = billStatus==0?"rebackGuide":billStatus==1?"rebackOp":"rebackFinancial";
			var guide = billStatus==0?"guide":"";
			$.ajax({
        		url:""+APP_ROOT+"back/financialTripPlan.do?method=" + method + "&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                type:"POST",
                data:"id="+id,
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                	layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	showMessageDialog($( "#confirm-dialog-message" ),data.message);
                    	if(billStatus == 0) {
                    		//financial_count
                    		count.search(0);
                    		closeTab(uKey);
                    	} else {
                    		count.updateExamine(financialTripPlanId,"");
                    	}
                    }
                }
        	});
		},
		webGuideAccount : function(id, financialTripPlanId, roleType) {
			var saveJson = count.getSaveTripPlanJson();
			if(roleType == "2") {
				saveJson.log.info.message = "财务（" + userName + "）保存信息";
			} else if(roleType == "3") {
				saveJson.log.info.message = "计调（" + userName + "）保存信息";
			} else if(roleType == "1") {
				saveJson.log.info.message = "管理员（" + userName + "）保存信息";
			}
			
			saveJson = JSON.stringify(saveJson);
			$.ajax({
            	url:""+APP_ROOT+"back/financialTripPlan.do?method=webGuideAccount&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
            	type:"POST",
            	data:"id="+id+"&saveJson="+encodeURIComponent(saveJson),
            	dataType:"json",
            	beforeSend:function(){
            		globalLoadingLayer = openLoadingLayer();
            	},
            	success:function(data){
            		layer.close(globalLoadingLayer);
            		var result = showDialog(data);
            		if(result){
            			showMessageDialog($( "#confirm-dialog-message" ),data.message);
            			count.search(0);
                		closeTab(uKey);
            		}
            	}
            });
		},
		accountCheck : function(id, billStatus, userName, roleType, financialTripPlanId) {
			var method = billStatus==0?"opVerify":"financialVerify";

			var saveJson = count.getSaveTripPlanJson();
			if(roleType == "2") {
				saveJson.log.info.message = "财务（" + userName + "）点击审核通过";
				saveJson.log.type = "2";
			} else if(roleType == "3") {
				saveJson.log.info.message = "计调（" + userName + "）点击审核通过";
				saveJson.log.type = "3";
			}
			
			saveJson = JSON.stringify(saveJson);
			$.ajax({
            	url:""+APP_ROOT+"back/financialTripPlan.do?method=" + method + "&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
            	type:"POST",
            	data:"id="+id+"&saveJson="+encodeURIComponent(saveJson),
            	dataType:"json",
            	beforeSend:function(){
            		globalLoadingLayer = openLoadingLayer();
            	},
            	success:function(data){
            		layer.close(globalLoadingLayer);
            		var result = showDialog(data);
            		if(result){
            			showMessageDialog($( "#confirm-dialog-message" ),data.message);
                        count.edited["checkBill"] = "";
            			count.updateExamine(financialTripPlanId,"");
            		}
            	}
            });
		},
		saveTripCount : function(id, financialTripPlanId, userName, roleType,isClose,typeFlag) {
            console.log(financialTripPlanId);
            var saveJson;
            if(typeFlag == 2){
                saveJson = count.saveCountReimbursement(financialTripPlanId);
            }else{
                saveJson = count.getSaveTripPlanJson(financialTripPlanId);
            };
            console.log(saveJson);
            if(typeFlag !=2){
			    if(roleType == "2") {
				saveJson.log.info.message = "财务（" + userName + "）保存信息";
    			} else if(roleType == "3") {
    				saveJson.log.info.message = "计调（" + userName + "）保存信息";
    			} else if(roleType == "1") {
    				saveJson.log.info.message = "管理员（" + userName + "）保存信息";
    			}
    			saveJson.log.type = "1";
			}
			saveJson = JSON.stringify(saveJson);
			console.log(saveJson);
            if(typeFlag == 2){
                $.ajax({
                url:""+APP_ROOT+"back/financialTripPlan.do?method=webGuideAccountUpdate&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                type:"POST",
                data:"saveJson="+encodeURIComponent(saveJson),
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                        showMessageDialog($( "#confirm-dialog-message" ),data.message);
                        count.edited["checkBill"] = "";
                        if(isClose == 1){
                            closeTab(uKey);
                            count.getlistCount(count.searchData.pageNo,count.searchData.id,count.searchData.tripNumber,count.searchData.lineProductId,count.searchData.lineProductName,count.searchData.guideId,count.searchData.guideName,count.searchData.startTime,count.searchData.endTime,count.searchData.status);
                        }else{
                            count.Reimbursement(financialTripPlanId,"guide");
                        }
                    }
                }
            });
            }else{
			$.ajax({
        		url:""+APP_ROOT+"back/financialTripPlan.do?method=update&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
                type:"POST",
                data:"saveJson="+encodeURIComponent(saveJson),
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                	layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	showMessageDialog($( "#confirm-dialog-message" ),data.message);
						count.edited["checkBill"] = "";
						if(isClose == 1){
							closeTab(uKey);
							count.getlistCount(count.searchData.pageNo,count.searchData.id,count.searchData.tripNumber,count.searchData.lineProductId,count.searchData.lineProductName,count.searchData.guideId,count.searchData.guideName,count.searchData.startTime,count.searchData.endTime,count.searchData.status);
						}else{
							count.updateExamine(financialTripPlanId,"");
						}
                    }
                }
        	});
            }
		},
		bindMainTable : function(formClass,typeFlag) {
			count.bindTripIncome(formClass,typeFlag);
			count.bindTripCost(formClass,typeFlag);
			count.bindTripOther(formClass,typeFlag);
			count.bindTripTransitCost(formClass,typeFlag);
			var parent = $('.'+formClass);
			
			var tripIncome = $(parent).find('.main-table .tripIncome').text();
			var tripCost = $(parent).find('.main-table .tripCost').text();
			var tripTransitCost = $(parent).find('.main-table .tripTransitCost').text();
			var totalPerson = count.changeTwoDecimal(parseFloat($(parent).find('.main-table .tripPlanAdultCount').val())) + count.changeTwoDecimal(parseFloat($(parent).find('.main-table .tripPlanChildCount').val()));
			//毛利=收入-团成本-中转成本
			var grossProfitMoney = count.changeTwoDecimal(parseFloat(tripIncome))-count.changeTwoDecimal(parseFloat(tripCost))-count.changeTwoDecimal(parseFloat(tripTransitCost));
			grossProfitMoney = count.changeTwoDecimal2(grossProfitMoney);
			$(parent).find('.main-table .grossProfitMoney').text(grossProfitMoney);
			
			//人均毛利=毛利/团队人数
			var perGrossProfitMoney = count.changeTwoDecimal2(grossProfitMoney)/count.changeTwoDecimal2(totalPerson);
			perGrossProfitMoney = count.changeTwoDecimal2(perGrossProfitMoney);
			$(parent).find('.main-table .perGrossProfitMoney').text(perGrossProfitMoney);
			
		},
		bindTripIncome : function(formClass,typeFlag) {
            var tabSelfId,
                tabShop,
                otherIn;

            if(typeFlag == 2){
                tabSelfId = "T-selfPay";
                tabShop = "T-shopping";
                otherIn = "T-otherIn";
            }else{
                tabSelfId = "selfPay";
                tabShop = "shopping";
                otherIn = "otherIn";
            }
			var parent = $('.'+formClass);
			//团款收入
            
			//自费返佣
			var selfPayRebateMoney = 0;
			$(parent).find('#'+tabSelfId).find('input[name=travelAgencyRebateMoney]').each(function() {
				selfPayRebateMoney += parseFloat($(this).val());
			});
			selfPayRebateMoney = count.changeTwoDecimal(selfPayRebateMoney);
			$(parent).find('.main-table .tripIncome-selfPayTravelAgencyRebateMoney').text(selfPayRebateMoney);
			
			//购物返佣
			var shopRebateMoney = 0;
			$(parent).find('#'+tabShop).find('input[name=travelAgencyRateMoney]').each(function() {
				shopRebateMoney += parseFloat($(this).val());
			});
			$(parent).find('#'+tabShop).find('.sumParkingRebateMoney').each(function() {
				shopRebateMoney += parseFloat($(this).text());
			});
			$(parent).find('#'+tabShop).find('.sumCustomerRebateMoney').each(function() {
				shopRebateMoney += parseFloat($(this).text());
			});
			shopRebateMoney = count.changeTwoDecimal(shopRebateMoney);
			$(parent).find('.main-table .tripIncome-shopTravelAgencyRateMoney').text(shopRebateMoney);
			
			//其他收入
			var otherInCome = 0;
            if(typeFlag == 2){
                $(parent).find('#'+otherIn).find('input[name=realneedPayMoney]').each(function() {
                otherInCome += parseFloat($(this).val());
            });
            }else{
                $(parent).find('#'+otherIn).find('.needPayMoney').each(function() {
                otherInCome += parseFloat($(this).text());
            });
            }
			otherInCome = count.changeTwoDecimal(otherInCome);
			$(parent).find('.main-table .tripIncome-otherInCome').text(otherInCome);
			
			var getAllMoney = $(parent).find('.main-table .tripIncome-getAllMoney').text();
			var selfPayMoney = $(parent).find('.main-table .tripIncome-selfPayTravelAgencyRebateMoney').text();
			var shopMoney = $(parent).find('.main-table .tripIncome-shopTravelAgencyRateMoney').text();
			var otherMoney = $(parent).find('.main-table .tripIncome-otherInCome').text();
			var sumMoney = count.changeTwoDecimal(getAllMoney)+count.changeTwoDecimal(selfPayMoney)+count.changeTwoDecimal(shopMoney)+count.changeTwoDecimal(otherMoney);
			sumMoney = count.changeTwoDecimal(sumMoney);
			$(parent).find('.main-table .tripIncome').text(sumMoney);
		},
		bindTripCost : function(formClass,typeFlag) {
            var bus,
                restaurant,
                hotel,
                scenic,
                ticket,
                other;

            if(typeFlag == 2){
                bus = "T-bus";
                restaurant = "T-restaurant";
                hotel = "T-hotelArrange";
                scenic = "T-scenic";
                ticket = "T-ticket";
                other = "T-other";
                otherIn = "T-otherIn";
            }else{
                bus = "bus";
                restaurant = "restaurant";
                hotel = "hotelArrange";
                scenic = "scenic";
                ticket = "ticket";
                other = "other";
            }
			var parent = $('.'+formClass);
			//团款成本
			
			//车费
			var busCompany = $('#'+bus).find('.BusneedPayMoney').text();
			busCompany = count.changeTwoDecimal(busCompany);
			$(parent).find('.main-table .tripCost-busCompanyNeedPayMoney').text(busCompany);
			
			//餐费
			var restaurantArrange = 0; 
			$(parent).find('#'+restaurant).find('.restneedPayMoney').each(function() {
				restaurantArrange += parseFloat($(this).text());
			});
			restaurantArrange = count.changeTwoDecimal(restaurantArrange);
			$(parent).find('.main-table .tripCost-restaurantArrangeNeedPayMoney').text(restaurantArrange);
			
			//房费
			var hotelArrange = 0; 
			$(parent).find('#'+hotel).find('.hotelneedPayMoney').each(function() {
				hotelArrange += parseFloat($(this).text());
			});
			hotelArrange = count.changeTwoDecimal(hotelArrange);
			$(parent).find('.main-table .tripCost-hotelArrangeNeedPayMoney').text(hotelArrange);
			
			//景区费用
			var scenicArrange = 0;
			$(parent).find('#'+scenic).find('.scenicneedPayMoney').each(function() {
				scenicArrange += parseFloat($(this).text());
			});
			scenicArrange = count.changeTwoDecimal(scenicArrange);
			$(parent).find('.main-table .tripCost-scenicArrangeNeedPayMoney').text(scenicArrange);
			
			//票务费用
			var ticketArrange = 0;
			$(parent).find('#'+ticket).find('.ticketneedPayMoney').each(function() {
				ticketArrange += parseFloat($(this).text());
			});
			ticketArrange = count.changeTwoDecimal(ticketArrange);
			$(parent).find('.main-table .tripCost-ticketArrangeNeedPayMoney').text(ticketArrange);
			
			//其他费用
			var otherArrange = 0;
			$(parent).find('#'+other).find('.needPayMoney').each(function() {
				otherArrange += parseFloat($(this).text());
			});
			otherArrange = count.changeTwoDecimal(otherArrange);
			$(parent).find('.main-table .tripCost-otherArrangeNeedPayMoney').text(otherArrange);
			
			var guideMoney = $(parent).find('.main-table .tripCost-guideArrangePrice').text();
			var insuranceMoney = $(parent).find('.main-table .tripCost-insuranceArrangeNeedPayMoney').text();
			var busMoney = $(parent).find('.main-table .tripCost-busCompanyNeedPayMoney').text();
			var restaurantMoney = $(parent).find('.main-table .tripCost-restaurantArrangeNeedPayMoney').text();
			var hotelMoney = $(parent).find('.main-table .tripCost-hotelArrangeNeedPayMoney').text();
			var scenicMoney = $(parent).find('.main-table .tripCost-scenicArrangeNeedPayMoney').text();
			var ticketMoney = $(parent).find('.main-table .tripCost-ticketArrangeNeedPayMoney').text();
			var groundMoney = $(parent).find('.main-table .tripCost-groundArrangeNeedPayMoney').text();
			groundMoney = 0;
			var otherMoney = $(parent).find('.main-table .tripCost-otherArrangeNeedPayMoney').text();
			var sumMoney = count.changeTwoDecimal(guideMoney) + count.changeTwoDecimal(insuranceMoney) + count.changeTwoDecimal(busMoney) + count.changeTwoDecimal(restaurantMoney) + count.changeTwoDecimal(hotelMoney) + count.changeTwoDecimal(scenicMoney) + count.changeTwoDecimal(ticketMoney) + count.changeTwoDecimal(groundMoney) + count.changeTwoDecimal(otherMoney);
			sumMoney = count.changeTwoDecimal(sumMoney);
			$(parent).find('.main-table .tripCost').text(sumMoney);
		},
		bindTripOther : function(formClass,typeFlag) {
			var parent = $('.'+formClass);
			//团其他
			var guideManageFee = $(parent).find('.main-table .tripOther-guideArrangeManageFee').text();
			var guidePreMoney= $(parent).find('.main-table .tripOther-guideAllPreMoney').text();
			var sumMoney = count.changeTwoDecimal(guideManageFee) + count.changeTwoDecimal(guidePreMoney);
			sumMoney = count.changeTwoDecimal(sumMoney);
			$(parent).find('.main-table .tripOther').text(sumMoney);
		},
		bindTripTransitCost : function(formClass) {
			var parent = $('.'+formClass);
			//团中转成本
			var busMoney = $(parent).find('.main-table .tripTransitCost-busCompanyNeedPayMoney').text();
			var hotelMoney = $(parent).find('.main-table .tripTransitCost-hotelArrangeNeedPayMoney').text();
			var tickeMoney = $(parent).find('.main-table .tripTransitCost-ticketArrangeNeedPayMoney').text();
			var sumMoney = count.changeTwoDecimal(busMoney) + count.changeTwoDecimal(hotelMoney) + count.changeTwoDecimal(tickeMoney);
			sumMoney = count.changeTwoDecimal(sumMoney);
			$(parent).find('.main-table .tripTransitCost').text(sumMoney);
		},
		bindShopping : function(obj,formClass,id) {
			var parent = $(obj).parent().parent();
			var consumeMoney = $(parent).find('input[name=consumeMoney]').val();
			var travelAgencyRate = $(parent).find('input[name=travelAgencyRate]').val();
			var travelAgencyRateMoney = $(parent).find('input[name=travelAgencyRateMoney]').val();
			var guideRate = $(parent).find('input[name=guideRate]').val();
			var guideRateMoney = $(parent).find('input[name=guideRateMoney]').val();
			
			if(consumeMoney.length == 0) {
				consumeMoney = 0;
			}
			
			consumeMoney = parseFloat(consumeMoney);
			travelAgencyRate = parseFloat(travelAgencyRate);
			travelAgencyRateMoney = parseFloat(travelAgencyRateMoney);
			guideRate = parseFloat(guideRate);
			guideRateMoney = parseFloat(guideRateMoney);
			
			travelAgencyRateMoney = consumeMoney*travelAgencyRate/100;
			travelAgencyRateMoney = count.changeTwoDecimal(travelAgencyRateMoney);
			guideRateMoney = consumeMoney*guideRate/100;
			guideRateMoney = count.changeTwoDecimal(guideRateMoney);
			$(parent).find('input[name=travelAgencyRateMoney]').prev().text(travelAgencyRateMoney);
			$(parent).find('input[name=travelAgencyRateMoney]').val(travelAgencyRateMoney);
			$(parent).find('input[name=guideRateMoney]').prev().text(guideRateMoney);
			$(parent).find('input[name=guideRateMoney]').val(guideRateMoney);
			
			count.bindShoppingSum(obj,formClass,id);
		},
		bindShoppingSum : function(obj, formClass,id) {
            var tabId;
            if(id == "T-shopping"){tabId="T-shopping"}else{tabId="shopping"};
			var shopId = $(obj).closest('tr').attr("shopId");
			//设置总金额
			var sumMoney = 0;
			$('.'+formClass).find('#'+tabId).find('tr[shopId='+ shopId +']').find('input[name=consumeMoney]').each(function() {
				var t = $(this).val();
				sumMoney += parseFloat(t);
			});
			$('.'+formClass).find('#'+tabId).find('.sumMoney'+shopId).text(count.changeTwoDecimal(sumMoney));
			
			
			//设置人数返佣，停车返佣
			var customerRebateMoney = $('.'+formClass).find('#'+tabId).find('input[name=customerRebateMoney' + shopId + ']').val();
			var touristAdultCount = $('.'+formClass).find('#'+tabId).find('input[name=touristAdultCount' + shopId + ']').val();
			var parkingRebateMoney = $('.'+formClass).find('#'+tabId).find('input[name=parkingRebateMoney' + shopId + ']').val();
			var busNumber = $('.'+formClass).find('#'+tabId).find('input[name=busNumber' + shopId + ']').val();
			
			var sumCustomerRebateMoney = count.changeTwoDecimal(customerRebateMoney)*count.changeTwoDecimal(touristAdultCount);
			var sumParkingRebateMoney = count.changeTwoDecimal(parkingRebateMoney)*count.changeTwoDecimal(busNumber);
			
			sumCustomerRebateMoney = count.changeTwoDecimal(sumCustomerRebateMoney);
			sumParkingRebateMoney = count.changeTwoDecimal(sumParkingRebateMoney);
			
			$('.'+formClass).find('#'+tabId).find('.sumCustomerRebateMoney' + shopId).text(sumCustomerRebateMoney);
			$('.'+formClass).find('#'+tabId).find('.sumParkingRebateMoney' + shopId).text(sumParkingRebateMoney);
			var typeFlag=0;
            if(tabId == "T-shopping"){
                typeFlag = 2
            }else{typeFlag = 1}
			count.bindMainTable(formClass,typeFlag);
		},
		bindSelfPay : function(obj, formClass,id) {
			
			count.calNeedPayMoney(obj);
			
			var parent = $(obj).parent().parent();
			
			var realCount = $(parent).find('input[name=realCount]').val();
			var memberCount = $(parent).find('input[name=memberCount]').val();
			var marketPrice = $(parent).find('input[name=marketPrice]').val();	//市场价
			var price = $(parent).find('input[name=price]').val();//协议价
			var travelAgencyRate = $(parent).find('input[name=travelAgencyRate]').val();
			var guideRate = $(parent).find('input[name=guideRate]').val();

			//导游佣金= (实际数量-计划数量)*(单价-低价)*社佣比例
			var guideRebateMoney = (parseFloat(realCount)-parseFloat(memberCount)) * (parseFloat(marketPrice)-parseFloat(price)) * parseFloat(guideRate)/100;
			guideRebateMoney = count.changeTwoDecimal(guideRebateMoney);
			$(parent).find('input[name=guideRebateMoney]').prev().text(guideRebateMoney);
			$(parent).find('input[name=guideRebateMoney]').val(guideRebateMoney);
			
			//旅行社佣金= (实际数量-计划数量)*(单价-低价)*社佣比例
			var travelAgencyRebateMoney = (parseFloat(realCount)-parseFloat(memberCount)) * (parseFloat(marketPrice)-parseFloat(price)) * parseFloat(travelAgencyRate)/100;
			travelAgencyRebateMoney = count.changeTwoDecimal(travelAgencyRebateMoney);
			$(parent).find('input[name=travelAgencyRebateMoney]').prev().text(travelAgencyRebateMoney);
			$(parent).find('input[name=travelAgencyRebateMoney]').val(travelAgencyRebateMoney);
            count.bindSelfPaySum(obj,formClass);
		},
		bindSelfPaySum : function(obj,formClass) {
            var typeFlag;
            if(formClass == "countReimbursement"){typeFlag=2}else{typeFlag=1}
			count.bindMainTable(formClass,typeFlag);
		},
		bindOtherIn : function(obj,formClass) {
			var parent = $(obj).parent().parent();
			var price = $(parent).find('input[name=price]').val();
			var realCount = $(parent).find('input[name=count]').val();
			var needPayMoney = parseFloat(price)*parseFloat(realCount);
			needPayMoney = count.changeTwoDecimal(needPayMoney);
			$(parent).find('.needPayMoney').text(needPayMoney);
            $(parent).find('input[name="needPayMoney"]').val(needPayMoney);
			count.bindOtherInSum(obj,formClass);

		},
		bindOtherInSum : function(obj,formClass) {
             var typeFlag;
            if(formClass == "countReimbursement"){typeFlag=2}else{typeFlag=1}
			count.bindMainTable(formClass,typeFlag);
		},
		bindBus : function(obj,formClass) {
			//count.calNeedPayMoney(obj,"Bus");
			count.bindBusSum(obj,formClass);
		},
		bindBusSum : function(obj,formClass) {
            var typeFlag;
            if(formClass == "countReimbursement"){typeFlag=2}else{typeFlag=1}
			count.bindMainTable(formClass,typeFlag);
		},
		bindRestaurant : function(obj,formClass) {
			count.calNeedPayMoney(obj,"rest");
			count.bindRestaurantSum(obj,formClass);
		},
		bindRestaurantSum : function(obj,formClass) {
            var typeFlag;
            if(formClass == "countReimbursement"){typeFlag=2}else{typeFlag=1}
			count.bindMainTable(formClass,typeFlag);
		},
		bindHotel : function(obj,formClass) {
			count.calNeedPayMoney(obj,"hotel");
			count.bindHotelSum(obj,formClass);
		},
		bindHotelSum : function(obj,formClass) {
            var typeFlag;
            if(formClass == "countReimbursement"){typeFlag=2}else{typeFlag=1}
			count.bindMainTable(formClass,typeFlag);
		},
		bindScenic : function(obj,formClass) {
			count.calNeedPayMoney(obj,"scenic");
			count.bindScenicSum(obj,formClass);
		},
		bindScenicSum : function(obj,formClass) {
            var typeFlag;
            if(formClass == "countReimbursement"){typeFlag=2}else{typeFlag=1}
			count.bindMainTable(formClass,typeFlag);
		},
		bindTicket : function(obj,formClass) {
			count.calNeedPayMoney(obj,"ticket");
			count.bindTicketSum(obj,formClass);
		},
		bindTicketSum: function(obj,formClass) {
            var typeFlag;
            if(formClass == "countReimbursement"){typeFlag=2}else{typeFlag=1}
			count.bindMainTable(formClass,typeFlag);
		},
		bindOther : function(obj,formClass) {
			count.calNeedPayMoney(obj);
			count.bindOtherSum(obj,formClass);
		},
		bindOtherSum : function(obj,formClass) {
            var typeFlag;
            if(formClass == "countReimbursement"){typeFlag=2}else{typeFlag=1}
			count.bindMainTable(formClass,typeFlag);
		},
		calNeedPayMoney : function(obj,$body) {
            var searchneedPayMoney;
            if($body){
                searchneedPayMoney = $body+"needPayMoney";
            }else{searchneedPayMoney = "needPayMoney"}
			var parent = $(obj).parent().parent();
			
			var payedMoney = $(parent).find('input[name=payedMoney]').val();
			var realGuidePayMoney = $(parent).find('input[name=realGuidePayMoney]').val();
			var guidePayMoney = $(parent).find('input[name=guidePayMoney]').val();
			var price = $(parent).find('input[name=realPrice]').val();
			var realCount = $(parent).find('input[name=realCount]').val();
			var reduceMoney = $(parent).find('input[name=reduceMoney]').val();
			
			//计算其他支出的应付   实际导付+计划已付
            if(realCount != 0 ){
                var needPayMoney = parseFloat(price)*parseFloat(realCount)-reduceMoney;
                needPayMoney = count.changeTwoDecimal(needPayMoney);
                $(parent).find('.'+searchneedPayMoney).text(needPayMoney);
            }
			//差额 实际导付-计划导付
			var difference = parseFloat(realGuidePayMoney)-parseFloat(guidePayMoney);
			difference = count.changeTwoDecimal2(difference);
			$(parent).find('.difference').text(difference);
		},
		changeTwoDecimal : function changeTwoDecimal(floatvar) {
			var f_x = parseFloat(floatvar);
			if (isNaN(f_x) || f_x == Number.POSITIVE_INFINITY)
			{
				return 0;
			}
			var f_x = Math.round(floatvar*100)/100;
			if(f_x < 0) {
				f_x = 0;
			}
			return f_x;
		},
		changeTwoDecimal2 : function changeTwoDecimal2(floatvar) {
			var f_x = parseFloat(floatvar);
			if (isNaN(f_x) || f_x == Number.POSITIVE_INFINITY)
			{
				return 0;
			}
			var f_x = Math.round(floatvar*100)/100;
			return f_x;
		},
		changeTwoDecimalToString : function (floatvar) { 
			return count.changeTwoDecimal2(floatvar)+"";
		},
		viewLog : function(id) {
			$.ajax({
				url:""+APP_ROOT+"back/financialTripPlan.do?method=findFinancialTripPlanLog&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"tripPlanId="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
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
        },
	    viewImage : function(obj,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL) {
	    	var data = {
	    			"images":[]
	    	};
	    	var str = $(obj).attr('url');
	    	var strs = str.split(",");
	    	for(var i = 0; i < strs.length; i ++) {
	    		var s = strs[i];
	    		if(s != null && s != "" && s.length > 0) {
		    		var image = {
		    				"WEB_IMG_URL_BIG":imgUrl+s,	//原图
		    				"WEB_IMG_URL_SMALL":imgUrl+s+"?imageView2/2/w/150",	//缩略图
		    		}
		    		data.images.push(image);
	    		}
	    	}
	    	if(data.images.length == 0) {
	    		showMessageDialog($( "#confirm-dialog-message" ), "没有回传单据", function(){});
	    		return;
	    	}
	    	var html = billImageTempLate(data);
	    	
	    	console.log(html);
	    	
	    	
			layer.open({
				type : 1,
				title : "单据图片",
				skin : 'layui-layer-rim', // 加上边框
				area : [ '500px', '540px' ], // 宽高
				zIndex : 1028,
				content : html,
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
	    },
	    viewGroupDetail : function(id) {
			 $.ajax({
			 url:""+APP_ROOT+"back/touristGroup.do?method=findTouristGroupByTripPlanId&token="+$.cookie("token")+"&menuKey=resource_touristGroup&operation=self",
				type:"POST",
				data:"tripPlanId="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
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
	    },
	    arrangeDetail : function(id) {
	    	$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=findTripArrangeById&token="+$.cookie("token")+"&menuKey=arrange_all&operation=self",
				type:"POST",
				data:"tripPlanId="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
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
                        console.log(data);
		    			var financialArrangeDetail = addTab(menuKey + "detail", "安排预算", html);
					}
				}
	    	});
	    },
	    tripDetail : function(id) {
	    	$.ajax({
                url:""+APP_ROOT+"back/financialTripPlan.do?method=findFinancialTripPlanById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
                type:"POST",
                data:{
                	"id":id,
                },
                dataType:"json",
                beforeSend:function(){
                    globalLoadingLayer = openLoadingLayer();
                },
                success:function(data){
                    layer.close(globalLoadingLayer);
                    var result = showDialog(data);
                    if(result){
                    	var tmp = {
                    			"busCompanyArrange":JSON.parse(data.busCompanyArrange),
                    			"tripPlan":JSON.parse(data.tripPlan),
                    			"dayList":JSON.parse(data.dayList),
                    			"user":JSON.parse(data.user),
                    			"guideArrange":JSON.parse(data.guideArrange),
                    			"insuranceArrange":JSON.parse(data.insuranceArrange),
                    			"ticketArrangeList":JSON.parse(data.ticketArrangeList),
                    			"WEB_IMG_URL_BIG":data.WEB_IMG_URL_BIG,
                    			"WEB_IMG_URL_SMALL":data.WEB_IMG_URL_SMALL,
                    			"touristGroup":data.touristGroup,
                    			"financialTripPlanId":data.financialTripPlanId,
                    			"arrangeIncomePaymentList":JSON.parse(data.arrangeIncomePaymentList),
                                "remarkArrangeList": JSON.parse(data.remarkArrangeList)
                    	}
                    	data = count.covertRemark(tmp);
                        console.log(data);
		    			var html = tripDetailTempLate(data);
		    			var financialTripDetail = addTab(menuKey + "tripDetail", "单团明细", html);
		    			
		    			//操作记录
            			$('.financialTripDetail .btn-financialLog').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				id = $('.financialTripDetail .financial-tripPlanId').val();
            				count.viewLog(id);
            			});
		    			
		    			//团款明细
            			$('.financialTripDetail .btn-viewGroupDetail').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				count.viewGroupDetail(id);
            			});
            			
		    			//安排明细表
            			$('.financialTripDetail .btn-tripPlanArrange').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				id = $('.financialTripDetail .financial-tripPlanId').val();
            				count.arrangeDetail(id);
            			});
            			
            			//中转明细
            			$('.financialTripDetail .btn-viewTripTransit').off('click').on('click',function() {
            				var id = $(this).attr('data-entity-id');
            				count.ViewOutDetail(id);
            			});
            			
            			//单据图片
            			$('.financialTripDetail .btn-view').off('click').on('click',function() {
            				var WEB_IMG_URL_BIG = $('.financialTripDetail').find('input[name=WEB_IMG_URL_BIG]').val();
            		    	var WEB_IMG_URL_SMALL = $('.financialTripDetail').find('input[name=WEB_IMG_URL_SMALL]').val();
            				count.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
            			});
            			
            			//购物
            			$('.financialTripDetail #shopping').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				
            				if($(this).attr("name") == "travelAgencyRate" || $(this).attr("name") == "guideRate") {
            					var rate = parseFloat($(this).val());
            					if(rate > 100) {
            						$(this).val(100);
            					}
            				}
            				
            				count.bindShopping(this,"financialTripDetail");
            			});
            			//自费
            			$('.financialTripDetail #selfPay').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindSelfPay(this,"financialTripDetail");
            			});
            			
            			//其他收入
            			$('.financialTripDetail #otherIn').find('input[type=text]').off('blur').on('blur',function() {
            				if($(this).attr('reset')) {
            				} else {
            					var vl = $(this).val();
            					if(vl.length == 0) {
            						$(this).val(0);
            					}
            					vl = $(this).val();
            					$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            					count.bindOtherIn(this,"financialTripDetail");
            				}
            			});
            			
            			//车费
            			$('.financialTripDetail #bus').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindBus(this,"financialTripDetail");
            			});
            			//餐费
            			$('.financialTripDetail #restaurant').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindRestaurant(this,"financialTripDetail");
            			});
            			//房费
            			$('.financialTripDetail #hotelArrange').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindHotel(this,"financialTripDetail");
            			});
            			//景区
            			$('.financialTripDetail #scenic').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindScenic(this,"financialTripDetail");
            			});
            			//票务
            			$('.financialTripDetail #ticket').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindTicket(this,"financialTripDetail");
            			});
            			
            			//其他支出
            			$('.financialTripDetail #other').find('input[type=text]').off('blur').on('blur',function() {
            				var vl = $(this).val();
            				if(vl.length == 0) {
            					$(this).val(0);
            				}
            				vl = $(this).val();
            				$(this).val(count.changeTwoDecimal(parseFloat(vl)));
            				count.bindOther(this,"financialTripDetail");
            			});
            			//触发页面所有input框的blur时间
            			$('.financialTripDetail').find('input[type=text]').blur();
            			
            			$('.financialTripDetail').find('.btn-download').click(function() {
            				var id = $(this).attr('data-entity-id');
							count.exportTripDetail(id);
            			});
					}
                }
	    	});
	    },
        // 将type转换成索引号
        covertRemark : function(data)  {
            var list = [], tmp;

            if (!!data && !!data.remarkArrangeList)  {
                for (var i = 0, len = data.remarkArrangeList.length; i < len; i++)  {
                    tmp = data.remarkArrangeList[i];

                    list[tmp.type] = {
                        opCheckRemark: tmp.opCheckRemark,
                        financeCheckRemark: tmp.financeCheckRemark
                    }
                }

            }

            data.remarkArrangeList = list;
            
            return data;
        },
	    ViewOutDetail : function (id) {
	    	$.ajax({
	    		url:""+APP_ROOT+"back/financialTripPlan.do?method=findOutTripArrange&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=self",
				type:"POST",
				data:"tripPlanId="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
                        data.receiveGroup = JSON.parse(data.receiveGroup);
                        data.isNeedArriveService = hasData(data.receiveGroup);
                        data.bus = JSON.parse(data.bus);
                        data.isNeedBus = (data.bus.length > 0)? 1 : 0;
                        data.sendGroup = JSON.parse(data.sendGroup);
                        data.isNeedLeaveService = hasData(data.sendGroup);

						var html = outDetailTempLate(data);
						var financialOutDetail = addTab(menuKey + "outDetail", "中转明细", html);
						
						$('.financialOutDetail .btn-download').click(function() {
							count.exportOutDetail(id);
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
	    },
	    exportTripDetail : function(id) {
	    	checkLogin(function(){
         		//var url = ""+APP_ROOT+"back/export.do?method=exportOutDetail&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&tripPlanId="+id;
             	//exportXLS(url)
             });
	    },
	    exportOutDetail : function(id) {
	    	checkLogin(function(){
         		var url = ""+APP_ROOT+"back/export.do?method=exportOutDetail&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&tripPlanId="+id;
             	exportXLS(url)
             });
	    },
		save : function(saveType){
			console.log(saveType);
			if(saveType == "checkBill"){
				count.saveTripCount(0,count.oldCheckBillId,"","",1);
			} 
		},
		clearEdit : function(clearType){
			count.edited[clearType] = "";
		},

		//getQueryTerms :function(){
		//	$.ajax({
		//		url:""+APP_ROOT+"back/financialTripPlan.do?method=getQueryTerms&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
		//		dateType:"json",
		//		type:"POST",
		//		success:function(data){
		//			var result = showDialog(data);
		//			if(result){
		//				count.autocompleteDate.guideList = data.guideList;
		//				count.autocompleteDate.lineProductList = data.lineProductList	;
		//				count.autocompleteDate.tripList = data.tripList;
		//			}
		//		}
		//	})
		//},

    }
    exports.init = count.init;
	exports.isEdited = count.isEdited;
	exports.save = count.save;
	exports.clearEdit = count.clearEdit;
});
