/**
 * 财务管理--餐厅账务
 *
 * by 廖佳玲
 */
define(function(require, exports) {
    var rule = require("./rule"),
    	menuKey = "financial_restaurant",
    	listTemplate = require("./view/list"),
        restaurantChecking = require("./view/restaurantChecking"),
        restaurantClearing = require("./view/restaurantClearing"),
        billImageTempLate = require("./view/billImages"),
        payedDetailTempLate = require("./view/viewPayedDetail"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail");

    var restaurant = {
    	searchData : false,
    	$tab :false,
    	$checkTab : false,
    	$clearTab : false,
    	$searchArea : false,
        restaurantList : false,
        clearTempData : false,
        clearTempSumDate : false
    };

    restaurant.initModule = function() {
    	var dateJson = FinancialService.getInitDate();
        restaurant.listRestaurant(0,"","",dateJson.startDate,dateJson.endDate,2);
    };

    restaurant.listRestaurant = function(page,restaurantName,restaurantId,startDate,endDate,accountStatus){
    	if (restaurant.$searchArea && arguments.length === 1) {
            restaurantName = restaurant.$searchArea.find("input[name=restaurantName]").val();
            restaurantId = restaurant.$searchArea.find("input[name=restaurantId]").val();
            startDate = restaurant.$searchArea.find("input[name=startDate]").val();
            endDate = restaurant.$searchArea.find("input[name=endDate]").val();
            accountStatus = restaurant.$searchArea.find(".T-finance-status").find("button").data("value");
        }
        restaurantName = (restaurantName == "全部") ? "" : restaurantName;
        // 修正页码
        page = page || 0;
        restaurant.searchData = {
            pageNo : page,
            restaurantName : restaurantName,
            restaurantId : restaurantId,
            startDate : startDate,
            endDate : endDate,
            accountStatus : accountStatus,
            sortType: 'auto'
        };

        var searchParam = JSON.stringify(restaurant.searchData);
        $.ajax({
            url:KingServices.build_url("account/arrangeRestaurantFinancial","listSumFinancialRestaurant"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
               layer.close(globalLoadingLayer);
               var result = showDialog(data);
                if(result){
                    restaurant.restaurantList = data.restaurantNameList;
                    var html = listTemplate(data);
                    Tools.addTab(menuKey,"餐厅账务",html);
                    restaurant.listPage = page;
                    restaurant.$tab = $('#tab-' + menuKey + "-content");
                    restaurant.$searchArea = restaurant.$tab.find('.T-search-area');
                    restaurant.initList(startDate,endDate,accountStatus);
                    var sumMoneyData = {
                        settlementMoneySum:data.settlementMoneySum,
                        unPayedMoneySum:data.unPayedMoneySum,
                        payedMoneySum:data.payedMoneySum,
                        needPayMoneySum:data.needPayMoneySum
                    };
                    restaurant.getSumMoney(sumMoneyData,restaurant.$tab);
                    // 绑定翻页组件
                    laypage({
                        cont: restaurant.$tab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                restaurant.listRestaurant(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };
    //获取合计金额
    restaurant.getSumMoney = function(data,tabId){
        tabId.find('.T-sumNeedPay').text(data.needPayMoneySum);
        tabId.find('.T-sumStMoney').text(data.settlementMoneySum);
        tabId.find('.T-sumPaiedMoney').text(data.payedMoneySum);
        tabId.find('.T-sumUnPaiedMoney').text(data.unPayedMoneySum);
    };
    restaurant.initList = function(startDate,endDate,accountStatus){
        restaurant.getQueryList();
        Tools.setDatePicker(restaurant.$tab.find(".date-picker"),true);
        //搜索按钮事件
        restaurant.$tab.find('.T-search').on('click',function(event) {
            event.preventDefault();
            restaurant.listRestaurant(0);
        });

        //状态框选择事件
        restaurant.$tab.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            restaurant.listRestaurant(0);
        });

        // 报表内的操作
        restaurant.$tab.find('.T-list').on('click','.T-option',function(event) {
            event.preventDefault();
            var $that = $(this),
                args = {
                    pageNo : 0,
                    restaurantId : $that.closest('tr').data('id'),
                    restaurantName : $that.closest('tr').data('name'),
                    startDate : startDate,
                    endDate : endDate,
                    accountStatus : accountStatus,
                    sortType : "accountTime"
                };
            if ($that.hasClass('T-check')) {
                // 对账
                restaurant.restaurantCheck(args);
            } else if ($that.hasClass('T-clear')) {
                // 付款
                args.isAutoPay = 0;
                restaurant.restaurantClear(args);
            }
        });
    };
    //对账
    restaurant.restaurantCheck = function(args,$tab){
        if (!!$tab) {
            args.pageNo = args.pageNo || 0;
            args.accountInfo = $tab.find("input[name=accountInfo]").val();
            args.startDate = $tab.find("input[name=startDate]").val();
            args.endDate = $tab.find("input[name=endDate]").val();
        }

        $.ajax({
            url:KingServices.build_url("account/arrangeRestaurantFinancial","listRestaurantAccount"),
            type:"POST",
            data:{ searchParam : JSON.stringify(args) },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var frList = data.financialRestaurantList;
                    data.financialRestaurantList = FinancialService.isGuidePay(frList);
                    data.restaurantName = args.restaurantName;
                    var html = restaurantChecking(data);
                    
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "餐厅对账", html)) {
                        restaurant.$checkTab = $("#tab-" + menuKey + "-checking-content");
                        restaurant.initCheck(args,restaurant.$checkTab); 
                        //取消对账权限过滤
                        checkDisabled(frList,restaurant.$checkTab.find(".T-checkTr"),restaurant.$checkTab.find(".T-checkList").data("right"));
                    } else {
                        restaurant.$checkTab.data('next', args);
                    }

                    //绑定翻页组件
                    laypage({
                        cont: restaurant.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {
                                restaurant.$checkTab.data('isEdited',false);
                                args.pageNo = obj.curr-1;
                                restaurant.restaurantCheck(args);
                            }
                        }
                    });
                }
            }
        });
    };

    restaurant.initCheck = function(args,$tab){
    	// 初始化jQuery 对象  
        var ruleCheck = new FinRule(0);

        restaurant.init_event(args,$tab,"check");
        Tools.setDatePicker($tab.find(".date-picker"),true);
        FinancialService.updateUnpayMoney($tab,ruleCheck);
        restaurant.getRestaurantList($tab,false);

        //搜索按钮事件
        $tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            args.pageNo = 0 ;
            restaurant.restaurantCheck(args,$tab);
        });
        
        //导出报表事件 btn-hotelExport
        $tab.find(".T-btn-export").click(function(){
            var argsDate = {
                restaurantId: args.restaurantId, 
                accountStatus :$tab.find('input[name=accountStatus]').val(),
                accountInfo : $tab.find("input[name=accountInfo]").val(),
                startDate: $tab.find('input[name=startDate]').val(),
                endDate: $tab.find('input[name=endDate]').val(),
                accountStatus : args.accountStatus
            };
            FinancialService.exportReport(argsDate,"exportArrangeRestaurantFinancial");
        });

        //复选框事件初始化
        FinancialService.initCheckBoxs($tab.find(".T-checkAll"),$tab.find(".T-checkList tr .T-checkbox"));

        //确认对账按钮事件
        restaurant.$checkTab.find(".T-saveCheck").click(function(){
            FinancialService.changeUncheck($tab.find(".T-checkTr"),function(){
                restaurant.saveChecking($tab,args);
            });
        });
    };

    //付款
    restaurant.restaurantClear= function(args,$tab){
        if (!!$tab) {
            args.pageNo = args.pageNo || 0;
            args.accountInfo = $tab.find("input[name=accountInfo]").val();
            args.startDate = $tab.find("input[name=startDate]").val();
            args.endDate = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.find("input[name=accountStatus]").val();
        }
        if(args.isAutoPay == 1){
           args.sumCurrentPayMoney = restaurant.$clearTab.find('input[name=sumPayMoney]').val();
        }

        $.ajax({
            url:KingServices.build_url("account/arrangeRestaurantFinancial","listRestaurantAccount"),
            type:"POST",
            data:{ searchParam : JSON.stringify(args) },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.restaurantName = args.restaurantName;
                    if(args.isAutoPay == 1){
                        restaurant.clearTempData = data.autoPaymentJson;
                    }
                    args.saveRule = new FinRule(args.isAutoPay== 2?3: 1);

                    var resultList = data.financialRestaurantList;
                    //暂存数据读取
                    if(restaurant.clearTempSumDate && restaurant.clearTempSumDate.id == args.restaurantId){
                        data.sumPayMoney = restaurant.clearTempSumDate.sumPayMoney;
                        data.sumPayType = restaurant.clearTempSumDate.sumPayType;
                        data.sumPayRemark = restaurant.clearTempSumDate.sumPayRemark;
                        data.bankNo = restaurant.clearTempSumDate.bankNo;
                        data.bankId = restaurant.clearTempSumDate.bankId;
                        data.voucher = restaurant.clearTempSumDate.voucher;
                        data.billTime = restaurant.clearTempSumDate.billTime;

                        data.financialRestaurantList = FinancialService.getTempDate(resultList,restaurant.clearTempData);
                    } else {
                        data.sumPayMoney = 0;
                        data.sumPayType = 0;
                        data.sumPayRemark = "";
                    }
                    data.financialRestaurantList = FinancialService.isGuidePay(resultList);

                    data.isAutoPay = args.isAutoPay;
                    var html = restaurantClearing(data);
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "餐厅付款", html)) {
                        restaurant.$clearTab = $("#tab-" + menuKey + "-clearing-content");
                        if(restaurant.clearTempSumDate){
                            restaurant.$clearTab.data('isEdited',true);
                        }
                        restaurant.initClear(args,restaurant.$clearTab); 
                    } else {
                        restaurant.$clearTab.data('next', args);
                    }

                    //绑定翻页组件
                    laypage({
                        cont: restaurant.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                var tempJson = FinancialService.clearSaveJson(restaurant.$clearTab,restaurant.clearTempData, new FinRule(args.isAutoPay== 2?3: 1));
                                restaurant.clearTempData = tempJson;
                                var sumPayMoney = parseFloat(restaurant.$clearTab.find('input[name=sumPayMoney]').val()),
                                    sumPayType = parseFloat(restaurant.$clearTab.find('select[name=sumPayType]').val()),
                                    sumPayRemark = restaurant.$clearTab.find('input[name=remark]').val();
                                restaurant.clearTempSumDate = {
                                    id : args.restaurantId,
                                    sumPayMoney : sumPayMoney,
                                    sumPayType : sumPayType,
                                    sumPayRemark : sumPayRemark,
                                    bankNo : (sumPayType == 0) ? restaurant.$clearTab.find('input[name=cash-number]').val() : restaurant.$clearTab.find('input[name=card-number]').val(),
                                    bankId : (sumPayType == 0) ? restaurant.$clearTab.find('input[name=cash-id]').val() : restaurant.$clearTab.find('input[name=card-id]').val(),
                                    voucher : restaurant.$clearTab.find('input[name=credentials-number]').val(),
                                    billTime : restaurant.$clearTab.find('input[name=tally-date]').val()
                                }
                                restaurant.$clearTab.data('isEdited',false);
                                args.pageNo = obj.curr -1;
                                restaurant.restaurantClear(args);
                            }
                        }
                    });
                }
            }
        });
    };

    restaurant.initClear = function(args,$tab){
        FinancialService.initPayEvent($tab);
        restaurant.init_event(args,$tab,"clear");
        Tools.setDatePicker($tab.find(".date-picker"),true);
        restaurant.getRestaurantList($tab,true);

        //搜索事件
        $tab.find(".T-search").off().click(function(){
            if(args.isAutoPay == 1){
                args.isAutoPay = 0;
            }
            args.pageNo = 0;
            restaurant.restaurantClear(args,$tab);
        });

        //保存付款事件
        $tab.find(".T-saveClear").off().click(function(){
            restaurant.saveClear($tab,args);
        });

        //自动下账
        $tab.find(".T-clear-auto").off().on("click",function(){
            var isAutoPay = FinancialService.autoPayJson(args.restaurantId,$tab,new FinRule(2));
            if(!isAutoPay){return false;}
            var startDate = $tab.find("input[name=startDate]").val(),
                endDate = $tab.find("input[name=endDate]").val();
            FinancialService.autoPayConfirm(startDate,endDate,function(){
                var payType = $tab.find('select[name=sumPayType]').val();
                restaurant.clearTempSumDate = {
                    id : args.restaurantId,
                    sumPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                    sumPayType : payType,
                    sumPayRemark : $tab.find('input[name=remark]').val(),
                    bankNo : (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val(),
                    bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                    voucher : $tab.find('input[name=credentials-number]').val(),
                    billTime : $tab.find('input[name=tally-date]').val()
                };
                args.isAutoPay = 1;
                restaurant.restaurantClear(args);
            });
        });

        $tab.find(".T-cancel-auto").off().on("click",function(){
            restaurant.clearTempSumDate = false;
            restaurant.clearTempData = false;
            $tab.data('isEdited',false);
            args.isAutoPay = 0;
            restaurant.restaurantClear(args);
        });

        FinancialService.updateSumPayMoney($tab,args.saveRule);
    };

    //显示单据
    restaurant.viewImage = function(obj,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL) {
        var data = { "images":[]  };
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
                $('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(Tools.colorbox_params);
            } 
        });
    };

    //已付金额明细
    restaurant.payedDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/arrangeRestaurantFinancial","getPayedMoneyDetail"),
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
    restaurant.needPayDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/arrangeRestaurantFinancial","getNeedPayDetail"),
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
    restaurant.saveChecking = function($tab,args,tabArgs){
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(restaurant.$checkTab,new FinRule(0));
        if(!checkSaveJson){ return false; }

        $.ajax({
            url:KingServices.build_url("account/arrangeRestaurantFinancial","saveAccountChecking"),
            type:"POST",
            data:{
                restaurantJson : checkSaveJson
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        restaurant.$checkTab.data('isEdited',false);
                        if(argumentsLen == 1){
                            Tools.closeTab(menuKey + "-checking");
                            restaurant.listRestaurant(restaurant.listPage);
                        } else {
                            restaurant.restaurantCheck(args,$tab);
                        }
                    });
                }
            }
        });
    };

    restaurant.saveClear = function($tab,args,tabArgs){
        if(!FinancialService.isClearSave($tab,args ? args.saveRule : $tab.data('saveRule'))){
            return false;
        }
        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson(restaurant.$clearTab,restaurant.clearTempData,args ? args.saveRule : $tab.data('saveRule'));
        var payType = restaurant.$clearTab.find('select[name=sumPayType]').val(),
            searchParam = {
                restaurantId : args ? args.restaurantId : $tab.data('restaurantId'),
                sumCurrentPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                payType : payType,
                payRemark : $tab.find('input[name=remark]').val(),
                bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                voucher : $tab.find('input[name=credentials-number]').val(),
                billTime : $tab.find('input[name=tally-date]').val()
            };

        $.ajax({
            url:KingServices.build_url("account/arrangeRestaurantFinancial","saveAccountSettlement"),
            type:"POST",
            data:{
                restaurantJson : JSON.stringify(clearSaveJson),
                searchParam : JSON.stringify(searchParam)
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        $tab.data('isEdited',false);
                        restaurant.clearTempData = false;
                        restaurant.clearTempSumDate = false;
                        if(argumentsLen === 1){
                            Tools.closeTab(menuKey + "-clearing");
                            restaurant.listRestaurant(restaurant.listPage);
                        }else{
                            if(args.isAutoPay == 1){
                                args.isAutoPay = 0;
                            }
                            restaurant.restaurantClear(args,$tab);
                        }
                    });
                    
                }
            }
        });
    };

    restaurant.init_event = function(args,$tab,option) {
        if (!!$tab && $tab.length === 1) {
            // 监听修改
            $tab.find(".T-" + option + "List").off('change').on('change',"input",function(event) {
                event.preventDefault();
                $(this).closest('tr').data("change",true);
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
                if(option == "check"){
                    restaurant.restaurantCheck($tab.data('next'),$tab);
                } else if(option == "clear"){
                    restaurant.clearTempSumDate = false;
                    restaurant.clearTempData = false;
                    restaurant.$clearTab.data('isEdited',false);
                    if(args.isAutoPay == 1){
                        args.isAutoPay = 0;
                    }
                    restaurant.restaurantClear($tab.data('next'),$tab);
                }
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                if(option == "check"){
                    restaurant.saveChecking($tab,$tab.data('next'),[tab_id, title, html]);
                } else if(option == "clear"){
                    restaurant.saveClear($tab,$tab.data('next'),[tab_id, title, html]);
                }
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                if(option == "check"){
                    restaurant.saveChecking($tab);
                } else if(option == "clear"){
                    $tab.data('saveRule',args.saveRule);
                    $tab.data('restaurantId',args.restaurantId);
                    restaurant.saveClear($tab);
                }
            })
            .on(CLOSE_TAB_SAVE_NO, function(event) {
                event.preventDefault();
                if(option == "clear"){
                    restaurant.clearTempSumDate = false;
                    restaurant.clearTempData = false;
                }
            });

            //报表内的操作
            restaurant.listOption($tab);
            //关闭页面事件
            FinancialService.closeTab(menuKey + "-" + option + "ing");
        }
    };

    restaurant.getQueryList = function(){
        var $restaurant = restaurant.$tab.find(".T-chooseRestaurant"),
            restaurantList = restaurant.restaurantList;
        if(restaurantList != null && restaurantList.length > 0){
            for(var i=0;i<restaurantList.length;i++){
                restaurantList[i].id = restaurantList[i].restaurantId;
                restaurantList[i].value = restaurantList[i].restaurantName;
            }
        }
        var all = {
            id : "",
            value : "全部"
        };
        restaurant.restaurantList = restaurantList.slice(all);
        restaurantList.unshift(all);

        //餐厅
        $restaurant.autocomplete({
            minLength: 0,
            source : restaurantList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name="restaurantId"]').val('');
                }
            },
            select: function(event,ui) {
                $(this).blur().nextAll('input[name="restaurantId"]').val(ui.item.id);
            }
        }).on("click",function(){
            $restaurant.autocomplete('search','');
        });      
    };

    // 对账、付款报表内的操作
    restaurant.listOption = function($tab){
        $tab.find('.T-option').on('click',function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');
            if ($that.hasClass('T-restaurantImg')) {
                // 查看单据
                var WEB_IMG_URL_BIG = $tab.find("input[name=WEB_IMG_URL_BIG]").val();//大图
                var WEB_IMG_URL_SMALL = $tab.find("input[name=WEB_IMG_URL_SMALL]").val();//大图
                restaurant.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
            } else if ($that.hasClass('T-payedDetail')) {
                // 已付明细
                restaurant.payedDetail(id);
            } else if ($that.hasClass('T-needPayDetail')) {
                // 应收明细
                restaurant.needPayDetail(id);
            }
        });
    };

    restaurant.getRestaurantList = function($tab,type){
        var $obj = $tab.find('input[name=restaurantName]'),
            name = $obj.val();
        $obj.autocomplete({
            minLength: 0,
            source : restaurant.restaurantList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo : 0,
                    restaurantId : ui.item.id,
                    restaurantName : ui.item.value,
                    startDate : $tab.find('input[name=startDate]').val(),
                    endDate : $tab.find('input[name=endDate]').val(),
                    accountStatus : $tab.find('input[name=accountStatus]').val(),
                    sortType : "accountTime"
                };
                if(type){
                    args.isAutoPay = ($tab.find(".T-clear-auto").length || $tab.find(".T-cancel-auto").length) ? 0 : 2;
                    restaurant.restaurantClear(args);
                } else {
                    restaurant.restaurantCheck(args);
                }
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
    };

    restaurant.initPay = function(options){
        var args = {
            pageNo : 0,
            restaurantId : options.id,
            restaurantName : options.name,
            startDate : options.startDate,
            endDate : options.endDate,
            accountStatus : options.accountStatus,
            isAutoPay : 2
        };
         $.ajax({
            url:KingServices.build_url("account/arrangeRestaurantFinancial","listSumFinancialRestaurant"),
            type:"POST",
            data:{ searchParam : JSON.stringify(args) },
            success:function(data){
               layer.close(globalLoadingLayer);
               var result = showDialog(data);
                if(result){
                    var restaurantList = data.restaurantNameList;
                    if(restaurantList != null && restaurantList.length > 0){
                        for(var i=0;i<restaurantList.length;i++){
                            restaurantList[i].id = restaurantList[i].restaurantId;
                            restaurantList[i].value = restaurantList[i].restaurantName;
                        }
                    }
                    restaurant.restaurantList = restaurantList;
                    args.isAutoPay = 2;
                    restaurant.restaurantClear(args);
                }
            }
        });
    };

    exports.init = restaurant.initModule;
    exports.initPay = restaurant.initPay;
});