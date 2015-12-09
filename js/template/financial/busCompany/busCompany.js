define(function(require, exports) {
	var rule = require("./rule"),
        menuKey = "financial_busCompany",
		listTemplate = require("./view/list"),
		checkBill = require("./view/checkBill"),
		Clearing = require("./view/Clearing"),
		blanceRecords = require("./view/busCompanyRecords"),
		billImageTempLate = require("./view/billImages"),
        payedDetailTempLate = require("./view/viewPayedDetail"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail");

	var busCompany = {
		searchData : false,
    	$tab :false,
    	$checkTab : false,
    	$clearTab : false,
    	$searchArea : false,
    	$checkSearchArea: false,
        $clearSearchArea : false,
        busCompanyList : false,
        clearTempData : false,
        clearTempSumDate : false
	};

	busCompany.initModule = function() {
    	var dateJson = FinancialService.getInitDate();
        busCompany.listBusCompany(0,"","",dateJson.startDate,dateJson.endDate);
    };

    busCompany.listBusCompany = function(page,busCompanyName,busCompanyId,startDate,endDate){
    	if (busCompany.$searchArea && arguments.length === 1) {
            busCompanyName = busCompany.$searchArea.find("input[name=busCompanyName]").val(),
            busCompanyId = busCompany.$searchArea.find("input[name=busCompanyId]").val(),
            startDate = busCompany.$searchArea.find("input[name=startDate]").val(),
            endDate = busCompany.$searchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        busCompanyName = (busCompanyName == "全部") ? "" : busCompanyName;
        // 修正页码
        page = page || 0;
        busCompany.searchData = {
            pageNo : page,
            busCompanyName : busCompanyName,
            busCompanyId : busCompanyId,
            startTime : startDate,
            endTime : endDate,
            sortType: 'auto'
        };

        var searchParam = JSON.stringify(busCompany.searchData);
        $.ajax({
            url:KingServices.build_url("account/financialBusCompany","listSumFinancialBusCompany"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
               layer.close(globalLoadingLayer);
               var result = showDialog(data);
                if(result){
                	busCompany.busCompanyList = data.busCompanyNameList;
					var html = listTemplate(data);
					Tools.addTab(menuKey,"车队账务",html);

					busCompany.initList(startDate,endDate);

					// 绑定翻页组件
					laypage({
					    cont: busCompany.$tab.find('.T-pagenation'),
					    pages: data.searchParam.totalPage,
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {
					    		busCompany.listBusCompany(obj.curr -1);
							}
					    }
					});
                }
            }
        });
    };

    busCompany.initList = function(startDate,endDate){
    	busCompany.$tab = $('#tab-' + menuKey + "-content");
        busCompany.$searchArea = busCompany.$tab.find('.T-search-area');

        busCompany.getQueryList();
        FinancialService.initDate(busCompany.$tab);

        //搜索按钮事件
        busCompany.$tab.find('.T-search').on('click',function(event) {
            event.preventDefault();
            busCompany.listBusCompany(0);
        });

        // 报表内的操作
        busCompany.$tab.find('.T-list').on('click','.T-option',function(event) {
            event.preventDefault();
            var $that = $(this),
            	id = $that.closest('tr').data('id'),
            	name = $that.closest('tr').data('name');
            if ($that.hasClass('T-check')) {
                // 对账
                busCompany.busCompanyCheck(0,id,name,"",startDate,endDate);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                busCompany.clearTempSumDate = false;
                busCompany.clearTempData = false;
                busCompany.busCompanyClear(0,0,id,name,"",startDate,endDate);
            }
        });
    };

    //对账
    busCompany.busCompanyCheck = function(page,busCompanyId,busCompanyName,accountInfo,startDate,endDate){
        if (busCompany.$checkSearchArea && arguments.length === 3) {
            accountInfo = busCompany.$checkSearchArea.find("input[name=accountInfo]").val(),
            startDate = busCompany.$checkSearchArea.find("input[name=startDate]").val(),
            endDate = busCompany.$checkSearchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        // 修正页码
        page = page || 0;
        var searchParam = {
            pageNo : page,
            busCompanyId : busCompanyId + "",
            accountInfo : accountInfo,
            startTime : startDate,
            endTime : endDate,
            sortType : "auto"
        };
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("account/financialBusCompany","listBusCompanyAccount"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var fbList = data.financialBusCompanyListData;
                    data.busCompanyName = busCompanyName;
                    var html = checkBill(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "车队对账", html)) {
                        busCompany.initCheck(page,busCompanyId,busCompanyName); 
                        validator = rule.check(busCompany.$checkTab.find(".T-checkList"));                       
                    }
                    //取消对账权限过滤
                    var checkTr = busCompany.$checkTab.find(".T-checkTr");
                    var rightCode = busCompany.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(fbList,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: busCompany.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                busCompany.busCompanyCheck(obj.curr-1,busCompanyId,busCompanyName);
                            }
                        }
                    });
                }
            }
        });
    };

    busCompany.initCheck = function(page,id,name){
    	// 初始化jQuery 对象 
        busCompany.$checkTab = $("#tab-" + menuKey + "-checking-content");
        busCompany.$checkSearchArea = busCompany.$checkTab.find('.T-search-area');

        busCompany.init_event(page,id,name,busCompany.$checkTab,"check");
        FinancialService.initDate(busCompany.$checkTab);
        FinancialService.updateUnpayMoney(busCompany.$checkTab,rule);

        //搜索按钮事件
        busCompany.$checkSearchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            busCompany.busCompanyCheck(0,id,name);
        });

        //导出报表事件 btn-busCompanyExport
        // busCompany.$checkSearchArea.find(".T-busCompanyExport").click(function(){
        //     var year = busCompany.$checkSearchArea.find("[name=year]").val();
        //     var month = busCompany.$checkSearchArea.find("[name=month]").val();
        //     checkLogin(function(){
        //         var url = KingServices.build_url("export","busCompany") + "&busCompanyId="+id+"&year="+year+"&month="+month+"&sortType=auto";
        //         exportXLS(url)
        //     });
        // });

        //报表内的操作
        busCompany.listOption(busCompany.$checkTab);

        //复选框事件初始化
        var checkboxList = busCompany.$checkTab.find(".T-checkList tr .T-checkbox"),
            $checkAll = busCompany.$checkTab.find(".T-checkAll");
        FinancialService.initCheckBoxs($checkAll,checkboxList);

        //关闭页面事件
        busCompany.$checkTab.find(".T-close-check").click(function(){
            Tools.closeTab(menuKey + "-checking");
        });
        //确认对账按钮事件
        busCompany.$checkTab.find(".T-saveCheck").click(function(){ 
            validator = rule.check(busCompany.$checkTab.find(".T-checkList"));
            if (!validator.form()) { return; }
            busCompany.saveChecking(id,name,page);
        });
    };

    //结算
    busCompany.busCompanyClear = function(isAutoPay,page,busCompanyId,busCompanyName,accountInfo,startDate,endDate){
        if (busCompany.$clearSearchArea && arguments.length === 4) {
            accountInfo = busCompany.$clearSearchArea.find("input[name=accountInfo]").val(),
            startDate = busCompany.$clearSearchArea.find("input[name=startDate]").val(),
            endDate = busCompany.$clearSearchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        page = page || 0;
        var searchParam = {
            pageNo : page,
            busCompanyId : busCompanyId + "",
            accountInfo : accountInfo,
            startTime : startDate,
            endTime : endDate,
            sortType : "auto"
        };
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("account/financialBusCompany","listBusCompanyAccount"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
					data.busCompanyName = busCompanyName;
                    //暂存数据读取
                    if(busCompany.clearTempSumDate){
                        data.sumPayMoney = busCompany.clearTempSumDate.sumPayMoney;
                        data.sumPayType = busCompany.clearTempSumDate.sumPayType;
                        data.sumPayRemark = busCompany.clearTempSumDate.sumPayRemark;
                    } else {
                        data.sumPayMoney = 0;
                        data.sumPayType = 0;
                        data.sumPayRemark = "";
                    }
                    var resultList = data.financialBusCompanyListData;
                    data.financialBusCompanyListData = FinancialService.getTempDate(resultList,busCompany.clearTempData);
					var html = Clearing(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "车队付款", html)) {
                        busCompany.initClear(page,busCompanyId,busCompanyName); 
                        validator = rule.check(busCompany.$clearTab.find('.T-clearList'));                       
                    }

                    if(isAutoPay == 0){
                        busCompany.$clearTab.find(".T-cancel-auto").hide();
                    } else {
                        busCompany.$clearTab.find('input[name=sumPayMoney]').prop("disabled",true);
                        busCompany.$clearTab.find(".T-clear-auto").hide(); 
                        if(isAutoPay == 1){
                            busCompany.$clearTab.data('isEdited',true);
                        } else if(isAutoPay == 2){
                            busCompany.$clearTab.find(".T-cancel--auto").hide();
                        }
                    }

                    //绑定翻页组件
                    var $tr = busCompany.$clearTab.find('.T-clearList tr');
                    laypage({
                        cont: busCompany.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                var tempJson = FinancialService.clearSaveJson(busCompany.$clearTab,busCompany.clearTempData,rule);
                                busCompany.clearTempData = tempJson;
                                var sumPayMoney = parseInt(busCompany.$clearTab.find('input[name=sumPayMoney]').val()),
                                    sumPayType = parseInt(busCompany.$clearTab.find('select[name=sumPayType]').val()),
                                    sumPayRemark = busCompany.$clearTab.find('input[name=sumPayRemark]').val();
                                busCompany.clearTempSumDate = {
                                    sumPayMoney : sumPayMoney,
                                    sumPayType : sumPayType,
                                    sumPayRemark : sumPayRemark
                                }
                                busCompany.busCompanyClear(isAutoPay,obj.curr -1,busCompanyId,busCompanyName);
                            }
                        }
                    });
                }
            }
        });
    };

    busCompany.initClear = function(page,id,name){
        // 初始化jQuery 对象 
        busCompany.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        busCompany.$clearSearchArea = busCompany.$clearTab.find('.T-search-area');

        busCompany.init_event(page,id,name,busCompany.$clearTab,"clear");
        FinancialService.initDate(busCompany.$clearTab);

        //搜索事件
        busCompany.$clearTab.find(".T-search").click(function(){
            busCompany.clearTempSumDate = false;
            busCompany.clearTempData = false;
            busCompany.busCompanyClear(0,0,id,name);
        });

        //关闭页面事件
        busCompany.$clearTab.find(".T-close-clear").click(function(){
            Tools.closeTab(menuKey + "-clearing");
        });

        //保存结算事件
        busCompany.$clearTab.find(".T-saveClear").click(function(){
            if (!rule.check(busCompany.$clearTab).form()) { return; }
            busCompany.saveClear(id,name,page);
        });
        
        //报表内的操作
        busCompany.listOption(busCompany.$clearTab);

        //自动下账
        busCompany.$clearTab.find(".T-clear-auto").off().on("click",function(){
            var autoPayJson = FinancialService.autoPayJson(id,busCompany.$clearTab,rule);
            if(!autoPayJson){return false;}

            var startDate = busCompany.$clearTab.find("input[name=startDate]").val(),
                endDate = busCompany.$clearTab.find("input[name=endDate]").val(),
                sumPayMoney = parseInt(busCompany.$clearTab.find('input[name=sumPayMoney]').val()),
                sumPayType = parseInt(busCompany.$clearTab.find('select[name=sumPayType]').val()),
                sumPayRemark = busCompany.$clearTab.find('input[name=sumPayRemark]').val();
            var searchParam = {
                busCompanyId : id,
                sumCurrentPayMoney : sumPayMoney,
                payType : sumPayType,
                payRemark : sumPayRemark,
                startTime : startDate,
                endTime : endDate,
                isAutoPay : 1
            };
            searchParam = JSON.stringify(searchParam);
            showConfirmMsg($("#confirm-dialog-message"),"是否按当前账期 " + startDate + " 至 " + endDate + " 下账？",function(){
                $.ajax({
                    url:KingServices.build_url("account/financialBusCompany","listBusCompanyAccount"),
                    type:"POST",
                    data:{ searchParam : searchParam },
                    success:function(data){
                        var result = showDialog(data);
                        if(result){
                            busCompany.$clearTab.find(".T-clear-auto").toggle();
                            busCompany.$clearTab.find(".T-cancel-auto").toggle();
                            busCompany.clearTempSumDate = false;
                            busCompany.clearTempData = false;
                            busCompany.clearTempData = data.autoPaymentJson;
                            busCompany.clearTempSumDate = {
                                sumPayMoney : busCompany.$clearTab.find('input[name=sumPayMoney]').val(),
                                sumPayType : busCompany.$clearTab.find('select[name=sumPayType]').val(),
                                sumPayRemark : busCompany.$clearTab.find('input[name=sumPayRemark]').val()
                            };
                            busCompany.busCompanyClear(1,page,id,name);
                        }
                    }
                });
            });
        });

        busCompany.$clearTab.find(".T-cancel-auto").off().on("click",function(){
            busCompany.$clearTab.find(".T-cancel-auto").toggle();
            busCompany.$clearTab.find(".T-clear-auto").toggle();
            busCompany.clearTempSumDate = false;
            busCompany.clearTempData = false;
            busCompany.busCompanyClear(0,0,id,name);
        });
        FinancialService.updateSumPayMoney(busCompany.$clearTab,rule);
    };

    //对账数据保存
    busCompany.saveChecking = function(busCompanyId,busCompanyName,page,tab_id,title,html){
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(busCompany.$checkTab,rule);
        if(!checkSaveJson){ return false; }
        
        $.ajax({
            url:KingServices.build_url("account/financialBusCompany","saveAccountChecking"),
            type:"POST",
            data:{
                busCompanyJson : checkSaveJson
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        if(argumentsLen == 2){
                            Tools.closeTab(menuKey + "-checking");
                            busCompany.listBusCompany(busCompany.searchData.pageNo,busCompany.searchData.busCompanyName,busCompany.searchData.busCompanyId,busCompany.searchData.startDate,busCompany.searchData.endDate);
                        } else if(argumentsLen == 3){
                            busCompany.$checkTab.data('isEdited',false);
                            busCompany.busCompanyCheck(page,busCompanyId,busCompanyName);
                        } else {
                            busCompany.$checkTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            busCompany.initCheck(0,busCompany.$checkTab.find(".T-newData").data("id"),busCompany.$checkTab.find(".T-newData").data("name"));
                        }
                    });
                }
            }
        });
    };

    busCompany.saveClear = function(id,name,page,tab_id, title, html){
        if(!FinancialService.isClearSave(busCompany.$clearTab,rule)){
            return false;
        }

        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson(busCompany.$clearTab,busCompany.clearTempData,rule);

        clearSaveJson = JSON.stringify(clearSaveJson);
        $.ajax({
            url:KingServices.build_url("account/financialBusCompany","saveAccountSettlement"),
            type:"POST",
            data:{ 
                busCompanyJson : clearSaveJson,
                payType : busCompany.$clearTab.find('select[name=sumPayType]').val(),
                payRemark : busCompany.$clearTab.find('input[name=sumPayRemark]').val() 
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        busCompany.clearTempData = false;
                        busCompany.clearTempSumDate = false;
                        if(argumentsLen === 2){
                            Tools.closeTab(menuKey + "-clearing");
                            busCompany.listBusCompany(busCompany.searchData.pageNo,busCompany.searchData.busCompanyName,busCompany.searchData.busCompanyId,busCompany.searchData.startDate,busCompany.searchData.endDate);
                        }else if(argumentsLen === 3){
                            busCompany.$clearTab.data('isEdited',false);
                            busCompany.busCompanyClear(0,page,id,name);
                        } else {
                            busCompany.$clearTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            busCompany.initClear(0,busCompany.$clearTab.find(".T-newData").data("id"),busCompany.$clearTab.find(".T-newData").data("name"));
                        }
                    });
                    
                }
            }
        });
    };

	//显示单据
	busCompany.viewImage = function(obj,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL) {
		var data = { "images":[] };
		var str = $(obj).attr('url');
		var strs = str.split(",");
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
                    photo : true,
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

    //已付金额明细
    busCompany.payedDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/financialBusCompany","getPayedMoneyDetail"),
            type:"POST",
            data:{
                id : id
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var html = payedDetailTempLate(data);
                    layer.open({
                        type : 1,
                        title : "已付金额明细",
                        skin : 'layui-layer-rim',
                        area : '1000px',
                        zIndex : 1028,
                        content : html,
                        scrollbar: false 
                    });
                }
            }
        });
    };

    //应付金额明细
    busCompany.needPayDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/financialBusCompany","getNeedPayDetail"),
            type:"POST",
            data:{
                id : id
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var html = needPayDetailTempLate(data);
                    layer.open({
                        type : 1,
                        title : "应付金额明细",
                        skin : 'layui-layer-rim',
                        area : '800px',
                        zIndex : 1028,
                        content : html,
                        scrollbar: false 
                    });
                }
            }
        });
    };

	busCompany.init_event = function(page,id,name,$tab,option) {
        if (!!$tab && $tab.length === 1) {
            var validator = rule.check($tab);

            // 监听修改
            $tab.find(".T-" + option + "List").off('change').on('change',"input",function(event) {
                event.preventDefault();
                $(this).closest('tr').data("change",true);
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
                if(option == "check"){
                    busCompany.initCheck(page,id,name);
                } else if(option == "clear"){
                    busCompany.initClear(page,id,name);
                }
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                if(option == "check"){
                    busCompany.saveChecking(id,name,0,tab_id, title, html);
                } else if(option == "clear"){
                    busCompany.saveClear(id,name,"",tab_id, title, html);
                }
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                if(option == "check"){
                    busCompany.saveChecking(id,name);
                } else if(option == "clear"){
                    busCompany.saveClear(id,name);
                }
            });
        }
    };

    busCompany.getQueryList = function(){
        var $busCompany = busCompany.$tab.find(".T-chooseBusCompany"),
            busCompanyList = busCompany.busCompanyList;
        if(busCompanyList != null && busCompanyList.length > 0){
            for(var i=0;i<busCompanyList.length;i++){
                busCompanyList[i].id = busCompanyList[i].busCompanyId;
                busCompanyList[i].value = busCompanyList[i].busCompanyName;
            }
        }
        var all = {
            id : "",
            value : "全部"
        };
        busCompanyList.unshift(all);

        //车队
        $busCompany.autocomplete({
            minLength: 0,
            source : busCompanyList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name="busCompanyId"]').val('');
                }
            },
            select: function(event,ui) {
                $(this).blur().nextAll('input[name="busCompanyId"]').val(ui.item.id);
            }
        }).on("click",function(){
            $busCompany.autocomplete('search','');
        });      
    };

    // 对账、付款报表内的操作
    busCompany.listOption = function($tab){
        $tab.find('.T-option').on('click',function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');
            if ($that.hasClass('T-busCompanyImg')) {
                // 查看单据
                var WEB_IMG_URL_BIG = $tab.find("input[name=WEB_IMG_URL_BIG]").val();//大图
                var WEB_IMG_URL_SMALL = $tab.find("input[name=WEB_IMG_URL_SMALL]").val();//大图
                busCompany.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
            } else if ($that.hasClass('T-payedDetail')) {
                // 已付明细
                busCompany.payedDetail(id);
            } else if ($that.hasClass('T-needPayDetail')) {
                // 应收明细
                busCompany.needPayDetail(id);
            }
        });
    };

    busCompany.initPay = function(options){
        busCompany.busCompanyClear(2,0,options.id,options.name,"",options.startDate,options.endDate); 
    };

	exports.init = busCompany.initModule;
    exports.initPay = busCompany.initPay;
});
