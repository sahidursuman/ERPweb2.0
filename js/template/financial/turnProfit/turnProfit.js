define(function(require, exports) {
    var menuKey = "financial_turnProfit",
    listTemplate = require("./view/list"),
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
        var dateJson = FinancialService.getInitDate(),
            args = {
                startTime : dateJson.startDate,
                endTime : dateJson.endDate
            };
        TurnProfit.listTurnProfit(0,args);
    };

    TurnProfit.listTurnProfit = function(page,args) {
        args = TurnProfit.getArgs(page,args);
        if (args.page == -1) {
            if (!TurnProfit.searchParam.startTime || !TurnProfit.searchParam.endTime) {
                showMessageDialog("请选择时间区间"); 
                return false;
            }
            exportXLS( APP_ROOT + 'back/export.do?method=exportArrangeTransferProfit&token='+ $.cookie("token") + '&' + $.param(TurnProfit.searchParam));
            return;
        }
        $.ajax({
            url:KingServices.build_url("profitTransfer","listProfitTransfer"),
            type: "POST",
            data: args,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                	data.searchParam = args;
                    var html = listTemplate(data);
                    Tools.addTab(menuKey,"外转利润",html);
                    TurnProfit.searchParam.pageNo = page;
                    TurnProfit.$tab = $('#' + tabId);
                    
                    TurnProfit.initList();
                    // 绑定翻页组件
                    laypage({
                        cont: TurnProfit.$tab.find('.T-pagenation'),
                        pages: data.totalPage, 
                        curr: (args.pageNo + 1),
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

    TurnProfit.getArgs = function(page,args){
        var args = args || {};
        if(TurnProfit.$tab){
            args = {
                pageNo: page || 0,
                lineProductId : TurnProfit.$searchArea.find("input[name=lineProductId]").val(),
                lineProductName : TurnProfit.$searchArea.find("input[name=lineProductName]").val(),
                partnerAgencyId : TurnProfit.$searchArea.find("input[name=partnerAgencyId]").val(),
                partnerAgencyName : TurnProfit.$searchArea.find("input[name=partnerAgencyName]").val(),
                toBusinessGroupId : TurnProfit.$searchArea.find("input[name=toBusinessGroupId]").val(),
                toBusinessGroupName : TurnProfit.$searchArea.find("input[name=toBusinessGroupName]").val(),
                orderNumber : TurnProfit.$searchArea.find("input[name=orderNumber]").val(),
                startTime : TurnProfit.$searchArea.find("input[name=startTime]").val(),
                endTime : TurnProfit.$searchArea.find("input[name=endTime]").val()
            }
        }

        args.lineProductName = (args.lineProductName  == "全部") ? "" : args.lineProductName;
        args.partnerAgencyName = (args.partnerAgencyName  == "全部") ? "" : args.partnerAgencyName;
        args.toBusinessGroupName = (args.toBusinessGroupName  == "全部") ? "" : args.toBusinessGroupName;

        args.sortType = 'auto';
        if(TurnProfit.$tab && TurnProfit.$tab.data("searchEdit")){
            args.pageNo = 0;
            TurnProfit.$tab.data("searchEdit",false);
        }
        return args;
    };

    TurnProfit.initList = function(){
        // 初始化jQuery 对象
        TurnProfit.$searchArea = TurnProfit.$tab.find('.T-search-area');

        if(TurnProfit.$tab.data('searchData')){
            TurnProfit.loadSearchList();
        } else {
            TurnProfit.searchAreaList();
        }
        
        Tools.setDatePicker(TurnProfit.$tab.find(".date-picker"), true);

        //监听搜索区修改
        TurnProfit.$tab.find(".T-search-area").off().on('change', 'input,select', function(event) {
            event.preventDefault();
            TurnProfit.$tab.data('searchEdit', true);
        });
        //搜索按钮事件
        TurnProfit.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            TurnProfit.listTurnProfit(0);
        });

        //导出
        TurnProfit.$tab.find('.T-export').on('click', function() {
            TurnProfit.listTurnProfit(-1);
        })

        //核算中转
        TurnProfit.$tab.find(".T-checkTurn").on("click",function(){
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
                KingServices.viewTurnInfo(transferId);
            }
        });
    };

    //查看遊客小組的信息
    TurnProfit.viewTouristGroup = function(id){
        var $path = TurnProfit.clickFlag == 2?'profitTransfer':'touristGroup';
        var $method = TurnProfit.clickFlag == 2?'findIncome':'viewTransferTouristGroupDetails';
        var $title = TurnProfit.clickFlag == 2?'团款应收明细':'查看小组';
		$.ajax({
			url:KingServices.build_url($path,$method),
			type:"POST",
			data:{
				id : id + ""
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
                    if(TurnProfit.clickFlag == 2){
                        data.income = JSON.parse(data.income);
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
			url:KingServices.build_url("profitTransfer","findOut"),
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
			url:KingServices.build_url("profitTransfer","findPay"),
			type:"POST",
			data:{
				id : id + ""
			},
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.pay = JSON.parse(data.pay);
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
    	//获取搜索框数据
        $.ajax({
            url:KingServices.build_url("profitTransfer","searchParam"),
            type:"POST",
            data:"",
            success:function(data){
                var result = showDialog(data);
                if(result){
                	var lineProductNameList = data.lineProductNameList,
                        partnerAgencyNameList = data.partnerAgencyNameList, 
                        partnerLocalAgencyNameList  = data.partnerLocalAgencyNameList;

                    if(lineProductNameList !=null && lineProductNameList.length>0){
                        for(var i = 0;i<lineProductNameList.length;i++){
                            lineProductNameList[i].value = lineProductNameList[i].name
                        }
                    }

                    if(partnerAgencyNameList !=null && partnerAgencyNameList.length>0){
                        for(var i = 0;i<partnerAgencyNameList.length;i++){
                            partnerAgencyNameList[i].value = partnerAgencyNameList[i].name
                        }
                    }

                    if(partnerLocalAgencyNameList !=null && partnerLocalAgencyNameList.length>0){
                        for(var i = 0;i<partnerLocalAgencyNameList.length;i++){
                            partnerLocalAgencyNameList[i].value = partnerLocalAgencyNameList[i].name
                        }
                    }
                    var all = {
                        id : "",
                        value : "全部"
                    };
                    lineProductNameList.unshift(all);
                    partnerAgencyNameList.unshift(all);
                    partnerLocalAgencyNameList.unshift(all);

                    TurnProfit.lineProductNameList = lineProductNameList,
                    TurnProfit.partnerAgencyNameList = partnerAgencyNameList, 
                    TurnProfit.partnerLocalAgencyNameList  = partnerLocalAgencyNameList; 
                    TurnProfit.$tab.data('searchData',true);

                    TurnProfit.loadSearchList();                   
                }
            }
        });            
	};
    TurnProfit.loadSearchList = function(){
        var lineProductNameList = TurnProfit.lineProductNameList,
            partnerAgencyNameList = TurnProfit.partnerAgencyNameList, 
            partnerLocalAgencyNameList  = TurnProfit.partnerLocalAgencyNameList,
            lineProducts  = TurnProfit.$tab.find("input[name=lineProductName]"),
            groupCollective  = TurnProfit.$tab.find("input[name=partnerAgencyName]"),
            partner = TurnProfit.$tab.find("input[name=toBusinessGroupName]");

        //线路产品   
        lineProducts.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $(this).next().val("");
                }
            },
            select:function(event,ui){
                $(this).blur();
                $(this).next().val(ui.item.id).trigger('change');
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
                $(this).next().val(ui.item.id).trigger('change');
            }
        }).off("click").on("click",function(){
            var Obj = groupCollective;
            $(Obj).autocomplete("option","source",partnerLocalAgencyNameList);
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
                $(this).next().val(ui.item.id).trigger('change');
            }
        }).off("click").on("click",function(){
            var Obj = partner;
            $(Obj).autocomplete("option","source",partnerAgencyNameList);
            $(Obj).autocomplete('search','');
        });
    };

    exports.init = TurnProfit.initModule;
});
