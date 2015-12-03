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
    	$checkSearchArea: false,
        $clearSearchArea : false,
        restaurantList : false
    };

    restaurant.initModule = function() {
    	var date = new Date(),
            year = date.getFullYear(),
            month = date.getMonth()+1,
            day = date.getDate();
        var startDate = year + "-" + month + "-1",
            endDate = year + "-" + month + "-" + day;

        restaurant.listRestaurant(0,"","",startDate,endDate);
    };

    restaurant.listRestaurant = function(page,restaurantName,restaurantId,startDate,endDate){
    	if (restaurant.$searchArea && arguments.length === 1) {
            restaurantName = restaurant.$searchArea.find("input[name=restaurantName]").val(),
            restaurantId = restaurant.$searchArea.find("input[name=restaurantId]").val(),
            startDate = restaurant.$searchArea.find("input[name=startDate]").val(),
            endDate = restaurant.$searchArea.find("input[name=endDate]").val()
        }
        // 修正页码
        page = page || 0;
        restaurant.searchData = {
            pageNo : page,
            restaurantName : restaurantName,
            restaurantId : restaurantId,
            startDate : startDate,
            endDate : endDate,
            sortType: 'auto'
        };

        var searchParam = JSON.stringify(restaurant.searchData);
        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","listSumFinancialRestaurant"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
               layer.close(globalLoadingLayer);
               var result = showDialog(data);
                if(result){
                    restaurant.restaurantList = data.restaurantNameList;
                    var html = listTemplate(data);
                    Tools.addTab(menuKey,"餐厅账务",html);

                    restaurant.initList();
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

    restaurant.initList = function(){
        restaurant.$tab = $('#tab-' + menuKey + "-content");
        restaurant.$searchArea = restaurant.$tab.find('.T-search-area');

        restaurant.getQueryList();
        restaurant.initDate(restaurant.$tab);

        //搜索按钮事件
        restaurant.$tab.find('.T-search').on('click',function(event) {
            event.preventDefault();
            restaurant.listRestaurant(0);
        });

        // 报表内的操作
        restaurant.$tab.find('.T-list').on('click','.T-option',function(event) {
            event.preventDefault();
            var $that = $(this),
            	id = $that.closest('tr').data('id'),
            	name = $that.closest('tr').data('name'),
                startDate = restaurant.$searchArea.find("input[name=startDate]").val(),
                endDate = restaurant.$searchArea.find("input[name=endDate]").val();
            if ($that.hasClass('T-check')) {
                // 对账
                restaurant.restaurantCheck(0,id,name,"",startDate,endDate);
            } else if ($that.hasClass('T-clear')) {
                // 付款
                restaurant.restaurantClear(0,id,name,"",startDate,endDate);
            }
        });
    };

    //对账
    restaurant.restaurantCheck = function(page,restaurantId,restaurantName,accountInfo,startDate,endDate){
        if (restaurant.$checkSearchArea && arguments.length === 3) {
            accountInfo = restaurant.$checkSearchArea.find("input[name=accountInfo]").val(),
            startDate = restaurant.$checkSearchArea.find("input[name=startDate]").val(),
            endDate = restaurant.$checkSearchArea.find("input[name=endDate]").val()
        }
        // 修正页码
        page = page || 0;
        var searchParam = {
            pageNo : page,
            restaurantId : restaurantId + "",
            accountInfo : accountInfo,
            startDate : startDate,
            endDate : endDate,
            sortType : "auto"
        };
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","listAccountChecking"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var frList = data.financialRestaurantList;
                    data.restaurantName = restaurantName;
                    var html = restaurantChecking(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "餐厅对账", html)) {
                        restaurant.initCheck(page,restaurantId,restaurantName); 
                        validator = rule.check(restaurant.$checkTab.find(".T-checkList"));                     
                    }
                    //取消对账权限过滤
                    var checkTr = restaurant.$checkTab.find(".T-checkTr");
                    var rightCode = restaurant.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(frList,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: restaurant.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                restaurant.restaurantCheck(obj.curr-1,restaurantId,restaurantName);
                            }
                        }
                    });
                }
            }
        });
    };

    restaurant.initCheck = function(page,id,name){
    	// 初始化jQuery 对象 
        restaurant.$checkTab = $("#tab-" + menuKey + "-checking-content");
        restaurant.$checkSearchArea = restaurant.$checkTab.find('.T-search-area');

        restaurant.init_check_event(page,id,name);
        restaurant.initDate(restaurant.$checkTab);

        //搜索按钮事件
        restaurant.$checkSearchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            restaurant.restaurantCheck(0,id,name);
        });

        //导出报表事件 btn-restaurantExport
        // restaurant.$checkSearchArea.find(".T-restaurantExport").click(function(){
        //     var year = restaurant.$checkSearchArea.find("[name=year]").val();
        //     var month = restaurant.$checkSearchArea.find("[name=month]").val();
        //     checkLogin(function(){
        //         var url = KingServices.build_url("export","restaurant") + "&restaurantId="+id+"&year="+year+"&month="+month+"&sortType=auto";
        //         exportXLS(url)
        //     });
        // });

        //报表内的操作
        restaurant.listOption(restaurant.$checkTab);

        //复选框事件初始化
        var checkboxList = restaurant.$checkTab.find(".T-checkList tr .T-checkbox"),
            $checkAll = restaurant.$checkTab.find(".T-checkAll");
        KingServices.checkAll($checkAll,checkboxList);

        //关闭页面事件
        restaurant.$checkTab.find(".T-close-check").click(function(){
            Tools.closeTab(menuKey + "-checking");
        });
        //确认对账按钮事件
        restaurant.$checkTab.find(".T-saveCheck").click(function(){ 
            validator = rule.check(restaurant.$checkTab.find(".T-checkList"));
            if (!validator.form()) { return; }
            restaurant.saveChecking(id,name,page);
         });
    };

    //结算
    restaurant.restaurantClear= function(page,restaurantId,restaurantName,accountInfo,startDate,endDate){
        if (restaurant.$clearSearchArea && arguments.length === 3) {
            accountInfo = restaurant.$clearSearchArea.find("input[name=accountInfo]").val(),
            startDate = restaurant.$clearSearchArea.find("input[name=startDate]").val(),
            endDate = restaurant.$clearSearchArea.find("input[name=endDate]").val()
        }

        page = page || 0;
        var searchParam = {
            pageNo : page,
            restaurantId : restaurantId + "",
            accountInfo : accountInfo,
            startDate : startDate,
            endDate : endDate,
            sortType : "auto"
        };
        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","listAccountSettlement"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.restaurantName = restaurantName
                    var html = restaurantClearing(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "餐厅结算", html)) {
                        restaurant.initClear(page,restaurantId,restaurantName); 
                        validator = rule.check(restaurant.$clearTab.find('.T-clearList'));                       
                    }

                    //绑定翻页组件
                    laypage({
                        cont: restaurant.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                restaurant.restaurantClear(obj.curr -1,restaurantId,restaurantName);
                            }
                        }
                    });
                }
            }
        });
    };

    restaurant.initClear = function(page,id,name){
        // 初始化jQuery 对象 
        restaurant.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        restaurant.$clearSearchArea = restaurant.$clearTab.find('.T-search-area');

        restaurant.init_clear_event(page,id,name);
        restaurant.initDate(restaurant.$clearTab);

        //搜索事件
        restaurant.$clearTab.find(".T-search").click(function(){
            restaurant.restaurantClear(0,id,name);
        });

        //关闭页面事件
        restaurant.$checkTab.find(".T-close-clear").click(function(){
            Tools.closeTab(menuKey + "-clearing");
        });

        //保存结算事件
        restaurant.$clearTab.find(".T-saveClear").click(function(){
            if (!rule.check(restaurant.$clearTab).form()) { return; }
            restaurant.saveClear(id,name,page);
        });

        //报表内的操作
        restaurant.listOption(restaurant.$clearTab);

        //自动下账
        restaurant.$clearTab.find(".T-clear-auto").click(function(){
            var startDate = restaurant.$clearSearchArea.find("input[name=startDate]").val(),
                endDate = restaurant.$clearSearchArea.find("input[name=endDate]").val();
            var searchParam = {
                restaurantId : id + "",
                sumPayMoney : restaurant.$clearSearchArea.find("input[name=sumPayMoney]").val(),
                sumPayType : restaurant.$clearSearchArea.find("select[name=sumPayType]").val(),
                startDate : startDate,
                endDate : endDate
            };
            searchParam = JSON.stringify(searchParam);
            showConfirmMsg($( "#confirm-dialog-message" ), "是否按当前账期 " + startTime + " 至 " + endTime + " 下账？",function(){
                $.ajax({
                    url:KingServices.build_url("financial/financialRestaurant","autoPayment"),
                    type:"POST",
                    data:{ searchParam : searchParam },
                    success:function(data){
                        var result = showDialog(data);
                        if(result){
                            showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                                restaurant.restaurantClear(page,id,name);
                            });
                        }
                    }
                });
            });
        });

        restaurant.sumPayMoney();
    };

    //自动计算本次付款总额
    restaurant.sumPayMoney = function(){
        var $sumPayMoney = restaurant.$clearTab.find("input[name=sumPayMoney]");
        restaurant.$clearTab.find("input[name=payMoney]").on("change",function(){
            var $this = $(this),validator = rule.check($this.closest('tr'));
            if(!validator.form()){ return false;}
            var sumPayMoney = parseInt($sumPayMoney.val());
            $sumPayMoney.val(sumPayMoney + parseInt($this.val()));
        });
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

    //已付金额明细
    restaurant.payedDetail = function(id){
        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","listFcRestaurantSettlementRecord"),
            type:"POST",
            data:{
                restaurantId : id + ""
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var html = payedDetailTempLate();
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
            url:KingServices.build_url("financial/financialRestaurant","listFcRestaurantSettlementRecord"),
            type:"POST",
            data:{
                restaurantId : id + ""
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

    //对账数据保存
    restaurant.saveChecking = function(restaurantId,restaurantName,page,tab_id, title, html){
        if(!restaurant.$checkTab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        //保存对账时提交的数据
        var $this = restaurant.$checkTab.find(".T-checkList"),argumentsLen = arguments.length;
        var checkSaveJson = [];
        function getValue($obj,name){
            var result = $obj.find("[name="+name+"]").val();
            if (result == "") {//所有空字符串变成0
                result = 0;
            }
            return result;
        } 
        var restaurantCheckingTr = $this.find(".T-checkTr");
        restaurantCheckingTr.each(function(){
            var id = $(this).data("id"),
                settlementMoney = getValue($(this),"settlementMoney"),
                checkRemark = getValue($(this),"checkRemark"),
                isConfirmAccount = "";
            if ($(this).find(".T-checkbox").is(':checked')) {
                isConfirmAccount = 1;
            } else {
                isConfirmAccount = 0; 
            }
            var checkRecord = {
                id : id,
                settlementMoney : settlementMoney,
                checkRemark : checkRemark,
                isConfirmAccount : isConfirmAccount
            };
            checkSaveJson.push(checkRecord);
        });
        checkSaveJson = JSON.stringify(checkSaveJson);
        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","saveAccountChecking"),
            type:"POST",
            data:{
                financialRestaurantListStr : checkSaveJson
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen == 2){
                            Tools.closeTab(menuKey + "-checking");
                            restaurant.listRestaurant(restaurant.searchData.pageNo,restaurant.searchData.restaurantName,restaurant.searchData.restaurantId,restaurant.searchData.startDate,restaurant.searchData.endDate);
                        } else if(argumentsLen == 3){
                            restaurant.$checkTab.data('isEdited',false);
                            restaurant.restaurantCheck(page,restaurantId,restaurantName);
                        } else {
                            restaurant.$checkTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            restaurant.initCheck(0,restaurant.$checkTab.find(".T-newData").data("id"),restaurant.$checkTab.find(".T-newData").data("name"));
                        }
                    });
                }
            }
        });
    };

    restaurant.saveClear = function(id,name,page,tab_id, title, html){
        if(!restaurant.$clearTab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        var $tr,argumentsLen = arguments.length;
        $tr = restaurant.$clearTab.find(".T-clearList tr");

        var clearSaveJson = [];
        $tr.each(function(i){
            //获取数据
            var clearJson = {
                id : $(this).data("id"),
                payMoney : $(this).find("input[name=payMoney]").val(),
                payType : $(this).find("select[name=payType]").val(),
                payRemark : $(this).find("input[name=payRemark]").val()
            };
            clearSaveJson.push(clearJson);
        });
        clearSaveJson = JSON.stringify(clearSaveJson);
        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","saveAccountSettlement"),
            type:"POST",
            data:{
                financialRestaurantListStr : clearSaveJson
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen === 2){
                            Tools.closeTab(menuKey + "-clearing");
                            restaurant.listRestaurant(restaurant.searchData.pageNo,restaurant.searchData.restaurantName,restaurant.searchData.restaurantId,restaurant.searchData.startDate,restaurant.searchData.endDate);
                        }else if(argumentsLen === 3){
                            restaurant.$clearTab.data('isEdited',false);
                            restaurant.restaurantClear(page,id,name);
                        } else {
                            restaurant.$clearTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            restaurant.initClear(0,restaurant.$clearTab.find(".T-newData").data("id"),restaurant.$clearTab.find(".T-newData").data("name"));
                        }
                    });
                    
                }
            }
        });
    };

    restaurant.init_check_event = function(page,id,name) {
        if (!!restaurant.$checkTab && restaurant.$checkTab.length === 1) {
            var validator = rule.check(restaurant.$checkTab);

            // 监听修改
            restaurant.$checkTab.find(".T-checkList").off('change').on('change', function(event) {
                event.preventDefault();
                restaurant.$checkTab.data('isEdited', true);
            });
            restaurant.$checkTab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
				restaurant.initCheck(page,id,name);
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                restaurant.saveChecking(id,name,0,tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                restaurant.saveChecking(id,name);
            });
        }
    };

    restaurant.init_clear_event = function(page,id,name) {
        if (!!restaurant.$clearTab && restaurant.$clearTab.length === 1) {
            var validator = rule.check(restaurant.$clearTab);

           restaurant.$clearTab.find(".T-clearList").off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
            .on('change', function(event) {
                event.preventDefault();
                restaurant.$clearTab.data('isEdited', true);
            });
            restaurant.$clearTab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
                event.preventDefault();
                restaurant.initClear(page,id,name);
            })
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                restaurant.saveClear(id,name,0,tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                restaurant.saveClear(id,name);
            });
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

    //时间控件初始化
    restaurant.initDate = function($tab){
        $tab.find('.date-picker').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'yyyy-mm-dd',
            language: 'zh-CN'
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

    exports.init = restaurant.initModule;
});