define(function(require, exports) {
    var menuKey = "financial_turnProfit",
    listTurnProfit = require("./view/list"),
    tabId = "tab-"+menuKey+"-content",
    checkTabId = menuKey+"-checking",
    viewTemplate = require("./view/visitorGroup"),
    transitViewTemplate = require("./view/innerTransferView"),
    visitorGroupMainInfo = require("./view/visitorGroupMainInfo"),
    arrangeTransferViewTemplate=require("./view/turnVisitorGroup"),
    blanceTabId = menuKey+"-blance";
    var TurnProfit  = {
	    searchParam: false,
        $tab: false,
        $searchArea: false,
        clickFlag : 0
    };

    TurnProfit.initModule = function() {
    	console.log('modal');
        TurnProfit.searchParam = {
            pageNo: 0,
            lineProductId : "",
            lineProductName :"",
            partnerAgencyId : "",
            partnerAgencyName : "",
            toBusinessGroupId : "",
            toBusinessGroupName : "",
            startTime : "",
            endTime : "",
            sortType: 'auto' 
        };
        TurnProfit.listTurnProfit(0,"","","","","","","","");
    };

    TurnProfit.listTurnProfit = function(page,lineProductId,lineProductName,partnerAgencyId,partnerAgencyName,toBusinessGroupId,toBusinessGroupName,startTime,endTime) {
        if (TurnProfit.$searchArea && arguments.length === 1) {
        	TurnProfit.searchParam = {
	        	pageNo: page,
	        	lineProductId : TurnProfit.$searchArea.find("input[name=lineProductId]").val(),
	        	lineProductName : TurnProfit.$searchArea.find("input[name=lineProductName]").val(),
	        	partnerAgencyId : TurnProfit.$searchArea.find("input[name=partnerAgencyId]").val(),
	        	partnerAgencyName : TurnProfit.$searchArea.find("input[name=partnerAgencyName]").val(),
	        	toBusinessGroupId : TurnProfit.$searchArea.find("input[name=toBusinessGroupId]").val(),
	        	toBusinessGroupName : TurnProfit.$searchArea.find("input[name=toBusinessGroupName]").val(),
	        	startTime : TurnProfit.$searchArea.find("input[name=startTime]").val(),
	        	endTime : TurnProfit.$searchArea.find("input[name=endTime]").val(),
	        	sortType: 'auto' 
	        }
        }
        // 修正页码
        page = page || 0;
        $.ajax({
            url:TurnProfit.url("profitTransfer","listProfitTransfer"),
            type: "POST",
            data: TurnProfit.searchParam,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                	data.searchParam = TurnProfit.searchParam;
                    var html = listTurnProfit(data);
                    addTab(menuKey,"外转利润",html);
                    TurnProfit.searchParam.pageNo = page;
                    
                    TurnProfit.initList();
                    // 绑定翻页组件
                    laypage({
                        cont: TurnProfit.$tab.find('.T-pagenation'),
                        pages: data.totalPage, 
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                TurnProfit.listTurnProfit(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };

    TurnProfit.initList = function(){
    	console.log("init");
        // 初始化jQuery 对象
        TurnProfit.$tab = $('#' + tabId);
        TurnProfit.$searchArea = TurnProfit.$tab.find('.T-search-area');

        TurnProfit.searchAreaList();
        $("#" + tabId + " .date-picker").datepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'yyyy-mm-dd',
            language: 'zh-CN'
        });
        //搜索按钮事件
        TurnProfit.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            TurnProfit.listTurnProfit(0);
        });

        // 报表内的操作
        TurnProfit.$tab.find('.T-option').on('click', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id'),
                transferId = $that.closest('tr').attr('tgTransferId');
                lineProductId = $that.closest('tr').attr('lineProductId');
            if ($that.hasClass('T-showTourist')) {
                // 查看游客小组
                TurnProfit.clickFlag = 1;
                TurnProfit.viewTouristGroup(id);
            } else if ($that.hasClass('T-showIncomeDetail')) {
                // 查看收客团款
                TurnProfit.clickFlag = 2;
                TurnProfit.viewTouristGroup(transferId);
            } else if ($that.hasClass('T-showChangePay')) {
                // 查看中转明细
                TurnProfit.viewTransit(transferId);
            } else if ($that.hasClass('T-showTransPay')) {
                // 查看外转明细
                TurnProfit.viewTransfer(this);
            } else if($that.hasClass('T-lineProductDetail')){
                //查看线路产品
                KingServices.viewTurnInfo(id);
            }
        });
    };

    //查看遊客小組的信息
    TurnProfit.viewTouristGroup = function(id){
        var $path = TurnProfit.clickFlag == 2?'profitTransfer':'touristGroup';
        var $method = TurnProfit.clickFlag == 2?'findIncome':'viewTransferTouristGroupDetails';
        var $title = TurnProfit.clickFlag == 2?'团款应收明细':'查看小组';
		$.ajax({
			url:TurnProfit.url($path,$method),
			type:"POST",
			data:{
				id : id + ""
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
                    if(TurnProfit.clickFlag == 2){
                        data.income = JSON.parse(data.income);
                        console.log(data);
                        var html = visitorGroupMainInfo(data);
                        layer.open({
                            type : 1,
                            title : $title,
                            skin : 'layui-layer-rim', 
                            area : "65%", 
                            zIndex : 1028,
                            content : html,
                            scrollbar: false // 推荐禁用浏览器外部滚动条
                        });
                    }else{
                        var memberList = JSON.parse(data.touristGroupMemberDetail.touristGroupMemberList);
                        var otherCost = JSON.parse(data.needIncomeMoneyDetail.touristGroupFeeList);
                        data.touristGroupMemberDetail.touristGroupMemberList = memberList;
                        data.needIncomeMoneyDetail.touristGroupFeeList = otherCost;
    					if(TurnProfit.clickFlag == 1){
    						var html = viewTemplate(data);
    						layer.open({
    							type : 1,
    							title :$title,
    							skin : 'layui-layer-rim',
    							area : "60%", 
    							zIndex : 1028,
    							content : html,
    							scrollbar: false // 推荐禁用浏览器外部滚动条
    						});
    					};
					}
				}
			}
		});
	};

	TurnProfit.viewTransit = function(id){
		$.ajax({
			url:TurnProfit.url("profitTransfer","findOut"),
			type:"POST",
			data:{
				id : id + ""
			},
			success:function(data){
	        	var result = showDialog(data);
	        	if(result){
                    data.financial = JSON.parse(data.financial);
					var html =transitViewTemplate(data);
					layer.open({
						type : 1,
						title : "中转成本明细",
						skin : 'layui-layer-rim', // 加上边框
						area : "70%", // 宽高
						zIndex : 1028,
						content : html,
						scrollbar: false // 推荐禁用浏览器外部滚动条
					});
	        	}
			}
		})
	};
	//查看我社转出分团转客信息	
	TurnProfit.viewTransfer = function(obj){
		var id = $(obj).data("id");
		$.ajax({
			url:TurnProfit.url("profitTransfer","findPay"),
			type:"POST",
			data:{
				id : id + ""
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.financial = JSON.parse(data.income);
					var html = arrangeTransferViewTemplate(data);
					//addTab(menuKey+"-viewTransfer","查看我社转出",html);
					layer.open({
						type : 1,
						title : "外转成本明细",
						skin : 'layui-layer-rim', // 加上边框
						area : "60%", // 宽高
						zIndex : 1028,
						content : html,
						scrollbar: false // 推荐禁用浏览器外部滚动条
					});
				}
			}
		});
	};

    TurnProfit.searchAreaList = function(){
    	console.log("searchAreaList");
    	//获取搜索框数据
        $.ajax({
            url:TurnProfit.url("profitTransfer","searchParam"),
            type:"POST",
            data:"",
            success:function(data){
                var result = showDialog(data);
                if(result){
                	var lineProductNameList = data.lineProductNameList,
                        partnerAgencyNameList = data.partnerAgencyNameList, 
                        partnerLocalAgencyNameList  = data.partnerLocalAgencyNameList;

                    var lineProducts  = $("#" + tabId + " input[name=lineProductName]"),
                        groupCollective  = $("#" + tabId + " input[name=partnerAgencyName]"),
                        partner = $("#" + tabId + " input[name=toBusinessGroupName]");

                    if(lineProductNameList !=null && lineProductNameList.length>0){
                        for(var i = 0;i<lineProductNameList.length;i++){
                            lineProductNameList[i].value = lineProductNameList[i].lineProductName
                        }
                    }

                    if(partnerAgencyNameList !=null && partnerAgencyNameList.length>0){
                        for(var i = 0;i<partnerAgencyNameList.length;i++){
                            partnerAgencyNameList[i].value = partnerAgencyNameList[i].partnerAgencyName
                        }
                    }

                    if(partnerLocalAgencyNameList !=null && partnerLocalAgencyNameList.length>0){
                        for(var i = 0;i<partnerLocalAgencyNameList.length;i++){
                            partnerLocalAgencyNameList[i].value = partnerLocalAgencyNameList[i].partnerLocalAgencyName
                        }
                    }
                    //线路产品   
                    lineProducts.autocomplete({
                        minLength:0,
                        change:function(event,ui){
                            if(ui.item == null){
                                $(this).next().val("");
                            }
                        },
                        select:function(event,ui){
                        	//console.log(ui);
                            $(this).blur();
                            $(this).next().val(ui.item.lineProductId);
                        }
                    }).off("click").on("click", function(){
                        var Obj = lineProducts;
                        $(Obj).autocomplete('option','source',lineProductNameList);
                        $(Obj).autocomplete('search', '');
                    });

                    //组团社
                    groupCollective.autocomplete({
                        minLength:0,
                        change:function(even,ui){
                            if(ui.item == null){
                                $(this).next().val("");
                            }
                        },
                        select:function(evevt,ui){
                            $(this).blur();
                            $(this).next().val(ui.item.partnerAgencyId);
                        }
                    }).off("click").on("click",function(){
                        var Obj = groupCollective;
                        $(Obj).autocomplete("option","source",partnerAgencyNameList);
                        $(Obj).autocomplete('search','');
                    });

                    //同行地接
                    partner.autocomplete({
                        minLength:0,
                        change:function(even,ui){
                            if(ui.item == null){
                                $(this).next().val("");
                            }
                        },
                        select:function(evevt,ui){
                            $(this).blur();
                            $(this).next().val(ui.item.partnerLocalAgencyId);
                        }
                    }).off("click").on("click",function(){
                        var Obj = partner;
                        $(Obj).autocomplete("option","source",partnerLocalAgencyNameList);
                        $(Obj).autocomplete('search','');
                    });
                }
            }
        });            
	};

    TurnProfit.url = function(path,method){
        var url = ''+APP_ROOT+'back/'+path +'.do?method='+method+'&token='+$.cookie('token')+'';
        return url;
    };

    exports.init = TurnProfit.initModule;
});
