/**
 * 财务管理--酒店账务
 *
 * by 廖佳玲
 */
define(function(require, exports) {
	var menuKey = "financial_rummery",
	    listTemplate = require("./view/list"),
        hotelChecking = require("./view/hotelChecking"),
        hotelClearing = require("./view/hotelClearing"),
	    billImagesTemplate = require("./view/billImages"),
        payedDetailTempLate = require("./view/viewPayedDetail"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail");

    var hotel = {
  		searchData : false,
        $tab :false,
        $checkTab : false,
        $clearTab : false,
        $searchArea : false,
        hotelList : false,
        clearTempData : false,
        clearTempSumDate : false
  	};

  	hotel.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        hotel.listHotel(0,"","",dateJson.startDate,dateJson.endDate,2);
    };

    hotel.listHotel = function(page,hotelName,hotelId,startDate,endDate,accountStatus){
    	if (hotel.$searchArea && arguments.length === 1) {
            hotelName = hotel.$searchArea.find("input[name=hotelName]").val();
            hotelId = hotel.$searchArea.find("input[name=hotelId]").val();
            startDate = hotel.$searchArea.find("input[name=startDate]").val();
            endDate = hotel.$searchArea.find("input[name=endDate]").val();
            accountStatus = hotel.$searchArea.find(".T-finance-status").find("button").data("value")
        }
        hotelName = (hotelName == "全部") ? "" : hotelName;
        // 修正页码
        page = page || 0;
        hotel.searchData = {
            pageNo : page,
            hotelName : hotelName,
            hotelId : hotelId,
            startTime : startDate,
            endTime : endDate,
            accountStatus : accountStatus,
            sortType: 'auto'
        };

        var searchParam = JSON.stringify(hotel.searchData);
        $.ajax({
            url:KingServices.build_url("account/financialHotel","listSumFinancialHotel"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
               var result = showDialog(data);
                if(result){
                    hotel.hotelList = data.hotelNameList;
                    var html = listTemplate(data);
                    Tools.addTab(menuKey,"酒店账务",html);
                    hotel.$tab = $('#tab-' + menuKey + "-content");
                    hotel.$searchArea = hotel.$tab.find('.T-search-area');
                    hotel.listPage = page;
                    hotel.initList(startDate,endDate,accountStatus);
                    //获取合计数据
                    var sumMoneyData = {
                        settlementMoneySum:data.settlementMoneySum,
                        unPayedMoneySum:data.unPayedMoneySum,
                        payedMoneySum:data.payedMoneySum,
                        needPayMoneySum:data.needPayMoneySum
                    };
                    hotel.getSumMoney(sumMoneyData,hotel.$tab);
                    // 绑定翻页组件
					laypage({
					    cont: hotel.$tab.find('.T-pagenation'),
					    pages: data.searchParam.totalPage,
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {
					    		hotel.listHotel(obj.curr -1);
                    		}
					    }
					});
                }
            }
        });
    };
    //获取合计金额
    hotel.getSumMoney = function(data,tabId){
        tabId.find('.T-sumNeedPay').text(data.needPayMoneySum);
        tabId.find('.T-sumStMoney').text(data.settlementMoneySum);
        tabId.find('.T-sumPaiedMoney').text(data.payedMoneySum);
        tabId.find('.T-sumUnPaiedMoney').text(data.unPayedMoneySum);
    };
    hotel.initList = function(startDate,endDate,accountStatus){
    	hotel.getQueryList();
        Tools.setDatePicker(hotel.$tab.find(".date-picker"),true);

        //搜索按钮事件
        hotel.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            hotel.listHotel(0);
        });

        //状态框选择事件
        hotel.$tab.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            hotel.listHotel(0);
        });

        // 报表内的操作
        hotel.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
                args = {
                    pageNo : 0,
                    hotelId : $that.closest('tr').data('id'),
                    hotelName : $that.closest('tr').data('name'),
                    startTime : startDate,
                    endTime : endDate,
                    accountStatus : accountStatus
                };
            if ($that.hasClass('T-check')) {
                // 对账
                hotel.hotelCheck(args);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                args.isAutoPay = 0;
                hotel.hotelClear(args);
            }
        });
    };

    //对账
    hotel.hotelCheck = function(args,$tab){
        if (!!$tab) {
            args.pageNo = args.pageNo || 0;
            args.accountInfo = $tab.find("input[name=accountInfo]").val();
            args.startTime = $tab.find("input[name=startDate]").val();
            args.endTime = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.find("input[name=accountStatus]").val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
        }
        args.sortType = "accountTime";
        $.ajax({
            url:KingServices.build_url("account/financialHotel","listHotelAccount"),
            type:"POST",
            data:{ searchParam : JSON.stringify(args) },
            success:function(data){
                if(showDialog(data)){
                    var fhList = data.financialHotelListData;
                    data.financialHotelListData = FinancialService.isGuidePay(fhList);
                    data.hotelName = args.hotelName;
                    if(hotel.checkTemp && hotel.checkTemp.length > 0){
                        data.financialHotelListData = FinancialService.getCheckTempData(data.financialHotelListData,hotel.checkTemp);
                        data.sumSettlementMoney = hotel.checkTemp.sumSttlementMoney;
                        data.sumUnPayedMoney = hotel.checkTemp.sumUnPayedMoney;
                    }
                    var html = hotelChecking(data);
                    
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "酒店对账", html)) {
                        hotel.$checkTab = $("#tab-" + menuKey + "-checking-content");
                        if(hotel.checkTemp && hotel.checkTemp.length > 0){
                            hotel.$checkTab.data('isEdited',true);
                        }
                        hotel.initCheck(args,hotel.$checkTab); 
                        //取消对账权限过滤
                        checkDisabled(fhList,hotel.$checkTab.find(".T-checkTr"),hotel.$checkTab.find(".T-checkList").data("right"));
                    } else {
                        hotel.$checkTab.data('next',args);
                    }

                    //绑定翻页组件
                    laypage({
                        cont: hotel.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                var temp = FinancialService.checkSaveJson(hotel.$checkTab,hotel.checkTemp,new FinRule(0));
                                if(!temp){
                                    return false;
                                } else {
                                    hotel.checkTemp = temp;
                                    hotel.$checkTab.data('isEdited',false);
                                    args.pageNo = obj.curr-1;
                                    hotel.hotelCheck(args);
                                }
                            }
                        }
                    });
                }
            }
        });
    };

    hotel.initCheck = function(args,$tab){
    	// 初始化jQuery 对象 
        var ruleCheck = new FinRule(0);
        hotel.init_event(args,$tab,"check");
        FinancialService.updateUnpayMoney($tab,ruleCheck);
        hotel.getHotelList($tab,false);

        //搜索下拉事件
        $tab.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            args.pageNo = 0;
            hotel.hotelCheck(args,$tab);
        });
        //搜索按钮事件
        $tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            args.pageNo = 0;
            hotel.hotelCheck(args,$tab);
        });

        //导出报表事件 btn-hotelExport
        $tab.find(".T-btn-export").click(function(){
            var argsData = {
                hotelId: args.hotelId, 
                accountInfo : $tab.find("input[name=accountInfo]").val(),
                startTime: $tab.find('input[name=startDate]').val(),
                endTime: $tab.find('input[name=endDate]').val(),
                accountStatus : args.accountStatus,
                isConfirmAccount : $tab.find(".T-check-status").find("button").data("value")
            };
            FinancialService.exportReport(argsData,"exportArrangeHotelFinancial");
        });

        //复选框事件初始化
        FinancialService.initCheckBoxs($tab.find(".T-checkAll"),$tab.find(".T-checkList tr .T-checkbox"));
        //确认对账按钮事件
        hotel.$checkTab.find(".T-saveCheck").click(function(){ 
            FinancialService.changeUncheck($tab.find(".T-checkTr"),function(){
                hotel.saveChecking($tab,args);
            });
        });
    };

    //结算
    hotel.hotelClear = function(args,$tab){
        if (!!$tab) {
            args.pageNo = args.pageNo || 0;
            args.accountInfo = $tab.find("input[name=accountInfo]").val();
            args.startTime = $tab.find("input[name=startDate]").val();
            args.endTime = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.find("input[name=accountStatus]").val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
        }
        args.sortType = "accountTime";
        if(args.autoPay == 1){
            args.isAutoPay = 0;
        }
        if(args.isAutoPay == 1){
           args.sumCurrentPayMoney = hotel.$clearTab.find('input[name=sumPayMoney]').val();
        }

        $.ajax({
            url:KingServices.build_url("account/financialHotel","listHotelAccount"),
            type:"POST",
            data:{ searchParam : JSON.stringify(args) },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.hotelName = args.hotelName;
                    if(args.isAutoPay == 1){
                        hotel.clearTempData = data.autoPaymentJson;
                    }

                    var resultList = data.financialHotelListData;
                    //暂存数据读取
                    if(hotel.clearTempSumDate && hotel.clearTempSumDate.id == args.hotelId){
                        data.sumPayMoney = hotel.clearTempSumDate.sumPayMoney;
                        data.sumPayType = hotel.clearTempSumDate.sumPayType;
                        data.sumPayRemark = hotel.clearTempSumDate.sumPayRemark;
                        data.bankNo = hotel.clearTempSumDate.bankNo;
                        data.bankId = hotel.clearTempSumDate.bankId;
                        data.voucher = hotel.clearTempSumDate.voucher;
                        data.billTime = hotel.clearTempSumDate.billTime;

                        data.financialHotelListData = FinancialService.getTempDate(resultList,hotel.clearTempData);
                    }
                    data.financialHotelListData = FinancialService.isGuidePay(resultList);
                    data.isAutoPay = (args.autoPay == 1) ? 1 : args.isAutoPay;
                    var html = hotelClearing(data);
                    
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "酒店付款", html)) {
                        hotel.$clearTab = $("#tab-" + menuKey + "-clearing-content");
                        if(hotel.clearTempData){
                            hotel.$clearTab.data('isEdited',true);
                        }
                        hotel.initClear(args,hotel.$clearTab); 
                    } else {
                        hotel.$clearTab.data('next', args);
                    }

                    //绑定翻页组件
                    laypage({
                        cont: hotel.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                var tempJson = FinancialService.clearSaveJson(hotel.$clearTab,hotel.clearTempData,new FinRule(args.isAutoPay== 2?3: 1));
                                if(tempJson){
                                    hotel.clearTempData = tempJson;
                                    var sumPayMoney = parseFloat(hotel.$clearTab.find('input[name=sumPayMoney]').val()),
                                        sumPayType = parseFloat(hotel.$clearTab.find('select[name=sumPayType]').val()),
                                        sumPayRemark = hotel.$clearTab.find('input[name=remark]').val();
                                    hotel.clearTempSumDate = {
                                        id : args.hotelId,
                                        sumPayMoney : sumPayMoney,
                                        sumPayType : sumPayType,
                                        sumPayRemark : sumPayRemark,
                                        bankNo : (sumPayType == 0) ? hotel.$clearTab.find('input[name=cash-number]').val() : hotel.$clearTab.find('input[name=card-number]').val(),
                                        bankId : (sumPayType == 0) ? hotel.$clearTab.find('input[name=cash-id]').val() : hotel.$clearTab.find('input[name=card-id]').val(),
                                        voucher : hotel.$clearTab.find('input[name=credentials-number]').val(),
                                        billTime : hotel.$clearTab.find('input[name=tally-date]').val()
                                    }
                                }
                                hotel.$clearTab.data('isEdited',false);
                                args.pageNo = obj.curr-1;
                                args.autoPay = (args.autoPay == 1) ? args.autoPay : args.isAutoPay;
                                args.isAutoPay = (args.isAutoPay == 1) ? 0 : args.isAutoPay;
                                hotel.hotelClear(args);
                            }
                        }
                    });
                }
            }
        });
    };

    hotel.initClear = function(args,$tab){
        // 初始化jQuery 对象 
        var autoPayRule = (new FinRule(2)).check($tab);
            args.saveRule = new FinRule(args.isAutoPay== 2?3: 1);
        hotel.init_event(args,$tab,"clear");
        hotel.getHotelList($tab,true);

        FinancialService.initPayEvent($tab);

        //搜索下拉事件
        $tab.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            if(args.isAutoPay == 1){
                args.isAutoPay = 0;
            }
            args.pageNo = 0;
            hotel.hotelClear(args,$tab);
        });
        //搜索事件
        $tab.find(".T-search").click(function(){
            if(args.isAutoPay == 1){
                args.isAutoPay = 0;
            }
            args.pageNo = 0;
            hotel.hotelClear(args,$tab);
        });
        //保存结算事件
        $tab.find(".T-saveClear").click(function(){
            if (!(new FinRule(args.isAutoPay== 2?3: 1)).check($tab).form()) { return; }
            hotel.saveClear($tab,args);
        });

        //自动下账
        $tab.find(".T-clear-auto").click(function(){
            var autoPayJson = FinancialService.autoPayJson(args.hotelId,$tab,new FinRule(2));
            if(!autoPayJson){return false;}
            var startDate = $tab.find("input[name=startDate]").val(),
                endDate = $tab.find("input[name=endDate]").val();
            FinancialService.autoPayConfirm(startDate,endDate,function(){
                var payType = $tab.find('select[name=sumPayType]').val();
                hotel.clearTempSumDate = {
                    id : args.hotelId,
                    sumPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                    sumPayType : payType,
                    sumPayRemark : $tab.find('input[name=remark]').val(),
                    bankNo : (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val(),
                    bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                    voucher : $tab.find('input[name=credentials-number]').val(),
                    billTime : $tab.find('input[name=tally-date]').val()
                };
                args.isAutoPay = 1;
                hotel.hotelClear(args,$tab);
            });
        });

        $tab.find(".T-cancel-auto").off().on("click",function(){
            hotel.clearTempSumDate = false;
            hotel.clearTempData = false;
            $tab.data('isEdited',false);
            args.isAutoPay = 0;
            args.autoPay = 0;
            hotel.hotelClear(args,$tab);
        });

        FinancialService.updateSumPayMoney($tab,args.saveRule);
    };

    //显示单据
    hotel.viewImage = function(obj,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL) {
    	var data = {"images":[] };
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
    	var html = billImagesTemplate(data);
    	
		layer.open({
			type : 1,
			title : "单据图片",
			skin : 'layui-layer-rim',
			area : '500px',
			zIndex : 1028,
			content : html,
			scrollbar: false,
			success : function() {
	    		$('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(Tools.colorbox_params);
			}
		});
    }; 

    //已付金额明细
    hotel.payedDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/financialHotel","getPayedMoneyDetail"),
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
    hotel.needPayDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/financialHotel","getNeedPayDetail"),
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
                        area : '1000px',
                        zIndex : 1028,
                        content : html,
                        scrollbar: false 
                    });
                }
            }
        });
    }; 

    //对账数据保存
    hotel.saveChecking = function($tab,args,tabArgs){
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(hotel.$checkTab,hotel.checkTemp,new FinRule(0),true);
        if(!checkSaveJson){ return false; }

        $.ajax({
            url:KingServices.build_url("account/financialHotel","saveAccountChecking"),
            type:"POST",
            data:{ hotelJson : checkSaveJson },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        hotel.checkTemp = false;
                        $tab.data('isEdited',false);
                        if(argumentsLen === 1){
                            Tools.closeTab(menuKey + "-checking");
                            hotel.listHotel(hotel.listPage);
                        } else {
                            hotel.hotelCheck(args,$tab);
                        }
                    });
                }
            }
        });
    };

    hotel.saveClear = function($tab,args,tabArgs){
        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson($tab,hotel.clearTempData,new FinRule((args ? args.isAutoPay : $tab.data('isAutoPay')) == 2?3: 1),true);
        if(!clearSaveJson){ return false; }
        var payType = $tab.find('select[name=sumPayType]').val(),
            searchParam = {
                hotelId : args ? args.hotelId : $tab.data('hotelId'),
                sumCurrentPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                payType : payType,
                payRemark : $tab.find('input[name=remark]').val(),
                bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                voucher : $tab.find('input[name=credentials-number]').val(),
                billTime : $tab.find('input[name=tally-date]').val()
            };

        $.ajax({
            url:KingServices.build_url("account/financialHotel","saveAccountSettlement"),
            type:"POST",
            data:{
                hotelJson : clearSaveJson,
                searchParam : JSON.stringify(searchParam)
            },
            success:function(data){
                if(showDialog(data)){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        hotel.clearTempData = false;
                        hotel.clearTempSumDate = false;
                        $tab.data('isEdited',false);
                        if(argumentsLen === 1){
                            Tools.closeTab(menuKey + "-clearing");
                            hotel.listHotel(hotel.listPage);
                        }else {
                            if(args.isAutoPay == 1){
                                args.isAutoPay = 0;
                            }
                            args.autoPay = 0;
                            hotel.hotelClear(args,$tab);
                        }
                    }); 
                }
            }
        });
    };

    hotel.init_event = function(args,$tab,option) {
        if (!!$tab && $tab.length === 1) {
            var validator = (new FinRule(0)).check($tab);
            Tools.setDatePicker($tab.find(".date-picker"),true);

            // 监听修改
            $tab.find(".T-" + option + "List").off('change').on('change',"input",function(event) {
                event.preventDefault();
                $(this).closest('tr').data("change",true);
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
                if(option == "check"){
                    hotel.checkTemp = false;
                    hotel.hotelCheck($tab.data('next'),$tab);
                } else if(option == "clear"){
                    hotel.clearTempData = false;
                    hotel.clearTempSumDate = false;
                    hotel.hotelClear($tab.data('next'),$tab);
                }
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event,tab_id,title,html) {
                event.preventDefault();
                if(option == "check"){
                    hotel.saveChecking($tab,$tab.data('next'),[tab_id,title,html]);
                } else if(option == "clear"){
                    hotel.saveClear($tab,$tab.data('next'),[tab_id,title,html]);
                }
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                if(option == "check"){
                    hotel.saveChecking($tab);
                } else if(option == "clear"){
                    $tab.data('isAutoPay',args.isAutoPay);
                    $tab.data('hotelId',args.hotelId);
                    hotel.saveClear($tab);
                }
            })
            .on(CLOSE_TAB_SAVE_NO, function(event) {
                event.preventDefault();
                if(option == "clear"){
                    hotel.clearTempData = false;
                    hotel.clearTempSumDate = false;
                } else if(option == "check"){
                    hotel.checkTemp = false;
                }
            });

            //报表内的操作
            hotel.listOption($tab);
            //关闭页面事件
            FinancialService.closeTab(menuKey + "-" + option + "ing");
        }
    };

    hotel.getQueryList = function(){
        var $hotel = hotel.$tab.find(".T-chooseHotel"),
            hotelList = hotel.hotelList;
        if(hotelList != null && hotelList.length > 0){
            for(var i=0;i<hotelList.length;i++){
                hotelList[i].id = hotelList[i].hotelId;
                hotelList[i].value = hotelList[i].hotelName;
            }
        }
        var all = {
            id : "",
            value : "全部"
        };
        hotel.hotelList = hotelList.slice(all);
        hotelList.unshift(all);

        //酒店
        $hotel.autocomplete({
            minLength: 0,
            source : hotelList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name="hotelId"]').val('');
                }
            },
            select: function(event,ui) {
                $(this).blur().nextAll('input[name="hotelId"]').val(ui.item.id);
            }
        }).on("click",function(){
            $hotel.autocomplete('search','');
        });      
    };

    // 对账、付款报表内的操作
    hotel.listOption = function($tab){
        $tab.find('.T-option').on('click',function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');
            if ($that.hasClass('T-hotelImg')) {
                // 查看单据
                var WEB_IMG_URL_BIG = $tab.find("input[name=WEB_IMG_URL_BIG]").val();//大图
                var WEB_IMG_URL_SMALL = $tab.find("input[name=WEB_IMG_URL_SMALL]").val();//大图
                hotel.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
            } else if ($that.hasClass('T-payedDetail')) {
                // 已付明细
                hotel.payedDetail(id);
            } else if ($that.hasClass('T-needPayDetail')) {
                // 应收明细
                hotel.needPayDetail(id);
            }
        });
    };

    hotel.getHotelList = function($tab,type){
        var $obj = $tab.find('input[name=hotelName]'),
            name = $obj.val();
        $obj.autocomplete({
            minLength: 0,
            source : hotel.hotelList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo : 0,
                    hotelId : ui.item.id,
                    hotelName : ui.item.value,
                    startTime : $tab.find('input[name=startDate]').val(),
                    endTime : $tab.find('input[name=endDate]').val(),
                    accountStatus : $tab.find('input[name=accountStatus]').val()
                };
                if(type){
                    args.isAutoPay = ($tab.find(".T-clear-auto").length || $tab.find(".T-cancel-auto").length) ? 0 : 2;
                    hotel.hotelClear(args);
                } else {
                    hotel.hotelCheck(args);
                }
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
    };

    hotel.initPay = function(options){
        var args = {
            pageNo : 0,
            hotelId : options.id,
            hotelName : options.name,
            startTime : options.startDate,
            endTime : options.endDate,
            accountStatus : options.accountStatus
        };
        $.ajax({
            url:KingServices.build_url("account/financialHotel","listSumFinancialHotel"),
            type:"POST",
            data:{ searchParam : JSON.stringify(args) },
            success:function(data){
               var result = showDialog(data);
                if(result){
                    var hotelList = data.hotelNameList;
                    if(hotelList != null && hotelList.length > 0){
                        for(var i=0;i<hotelList.length;i++){
                            hotelList[i].id = hotelList[i].hotelId;
                            hotelList[i].value = hotelList[i].hotelName;
                        }
                    }
                    hotel.hotelList = hotelList;
                    args.isAutoPay=2;
                    hotel.hotelClear(args);
                }
            }
        });
         
    };

    exports.init = hotel.initModule;
    exports.initPay = hotel.initPay;
});
