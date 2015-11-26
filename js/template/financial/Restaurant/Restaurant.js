define(function(require, exports) {
    var rule = require("./rule"),
    	menuKey = "financial_restaurant",
    	listTemplate = require("./view/list"),
    	restaurantChecking = require("./view/restaurantChecking"),
        restaurantClearing = require("./view/restaurantClearing"),
        blanceRecords = require("./view/restaurantRecords"),
    	yearList=[],
        monthList = [];
        for(var i=2013;i<=new Date().getFullYear();i++){
            var yeardata={"value":i}
            yearList.push(yeardata)
        }
        for(var j = 1;j<=12;j++){
            var monthData = {"value":j}
            monthList.push(monthData);
        }

    var restaurant = {
    	searchData : false,
    	$tab :false,
    	$checkTab : false,
    	$clearTab : false,
    	$searchArea : false,
    	$checkSearchArea: false,
        $clearSearchArea : false
    };

    restaurant.initModule = function() {
    	var date = new Date(),
    		year = date.getFullYear();
        restaurant.listRestaurant(0,"",year,"");
    };

    restaurant.listRestaurant = function(page,restaurantId,year,month){
    	if (restaurant.$searchArea && arguments.length === 1) {
            restaurantId = restaurant.$searchArea.find("select[name=restaurantId]").val(),
            year = restaurant.$searchArea.find("select[name=year]").val(),
            month = restaurant.$searchArea.find("select[name=month]").val()
        }
        // 修正页码
        page = page || 0;
        restaurant.searchData = {
            pageNo : page,
            restaurantId : restaurantId,
            year : year,
            month : month,
            sortType: 'auto'
        };

        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","listSumFcRestaurant"),
            type:"POST",
            data:restaurant.searchData,
            success:function(data){
               layer.close(globalLoadingLayer);
               var result = showDialog(data);
                if(result){
                	data.restaurantNameListNew = JSON.parse(data.restaurantNameListNew);
                    data.yearList = yearList;
                    data.monthList = monthList;
                    data.searchParam = restaurant.searchData;

                    var html = listTemplate(data);
                    Tools.addTab(menuKey,"餐厅账务",html);

                    restaurant.initList(year,month);
                    // 绑定翻页组件
                    laypage({
                        cont: restaurant.$tab.find('.T-pagenation'),
                        pages: data.totalPage,
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

    restaurant.initList = function(year,month){
        restaurant.$tab = $('#tab-' + menuKey + "-content");
        restaurant.$searchArea = restaurant.$tab.find('.T-search-area');

        //搜索按钮事件
        restaurant.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            restaurant.listRestaurant(0);
        });

        // 报表内的操作
        restaurant.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
            	id = $that.closest('tr').data('id'),
            	name = $that.closest('tr').data('name');
            if ($that.hasClass('T-check')) {
                // 对账
                restaurant.restaurantCheck(0,id,name,year,month);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                restaurant.restaurantClear(id,name,year,1,12);
            }
        });
    };

    //对账
    restaurant.restaurantCheck = function(page,restaurantId,restaurantName,year,month){
        if (restaurant.$checkSearchArea && arguments.length === 3) {
            year = restaurant.$checkSearchArea.find("select[name=year]").val(),
            month = restaurant.$checkSearchArea.find("select[name=month]").val()
        }
        // 修正页码
        page = page || 0;
        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","listFcRestaurant"),
            type:"POST",
            data:{
                pageNo : page,
                restaurantId : restaurantId + "",
                year : year,
                month : month,
                sortType : "auto"
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var financialRestaurantList = JSON.parse(data.financialRestaurantList);
                    data.financialRestaurantList = financialRestaurantList;
                    data.yearList = yearList;
                    data.monthList = monthList;
                    data.restaurantName = restaurantName;
                    data.searchParam.year = year;
                    data.searchParam.month = month;
                    var html = restaurantChecking(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "餐厅对账", html)) {
                        restaurant.initCheck(page,restaurantId,restaurantName); 
                        validator = rule.check(restaurant.$checkTab.find('.T-checkList'));                       
                    }
                    //取消对账权限过滤
                    var checkTr = restaurant.$checkTab.find(".T-checkTr");
                    var rightCode = restaurant.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(financialRestaurantList,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: restaurant.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                restaurant.restaurantCheck(obj.curr -1,restaurantId);
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

        //搜索按钮事件
        restaurant.$checkSearchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            restaurant.restaurantCheck(0,id,name);
        });

        //导出报表事件 btn-restaurantExport
        restaurant.$checkSearchArea.find(".T-restaurantExport").click(function(){
            var year = restaurant.$checkSearchArea.find("[name=year]").val();
            var month = restaurant.$checkSearchArea.find("[name=month]").val();
            checkLogin(function(){
                var url = KingServices.build_url("export","restaurant") + "&restaurantId="+id+"&year="+year+"&month="+month+"&sortType=auto";
                exportXLS(url)
            });
        });

        //给查看单据绑定事件
        restaurant.$checkTab.find(".T-restaurantImg").click(function(){
            var WEB_IMG_URL_BIG = restaurant.$checkTab.find("input[name=WEB_IMG_URL_BIG]").val();//大图
            var WEB_IMG_URL_SMALL = restaurant.$checkTab.find("input[name=WEB_IMG_URL_SMALL]").val();//大图
            restaurant.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
        });

        //给全选按钮绑定事件
        restaurant.$checkTab.find(".T-checkAll").click(function(){
            var checkboxList = restaurant.$checkTab.find(".T-checkList tr input[type=checkbox]");
            if($(this).is(":checked")){
                checkboxList.each(function(i){
                    $(this).prop("checked",true);
                });
            } else{
                checkboxList.each(function(i){
                	if(!$(this).prop("disabled")){
                		$(this).prop("checked",false);
                	}                                
                });
            } 
        });

        //关闭页面事件
        restaurant.$checkTab.find(".T-close-check").click(function(){
            Tools.closeTab(menuKey + "-checking");
        });
        //确认对账按钮事件
        restaurant.$checkTab.find(".T-saveCheck").click(function(){ 
            validator = rule.check(restaurant.$checkTab.find('.T-checkList'));
            if (!validator.form()) { return; }
            restaurant.saveChecking(id,name,page);
         });
    };

    //结算
    restaurant.restaurantClear = function(restaurantId,restaurantName,year,startMonth,endMonth){
        if (restaurant.$clearSearchArea && arguments.length === 2) {
            year = restaurant.$clearSearchArea.find("select[name=year]").val(),
            startMonth = restaurant.$clearSearchArea.find("select[name=startMonth]").val(),
            endMonth = restaurant.$clearSearchArea.find("select[name=endMonth]").val()
        }
        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","listFcRestaurantSettlement"),
            type:"POST",
            data:{
                restaurantId : restaurantId + "",
                year : year,
                monthStart : startMonth,
                monthEnd : endMonth,
                sortType : "auto"
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.yearList = yearList
                    data.monthList = monthList
                    data.restaurantName = restaurantName
                    var html = restaurantClearing(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "餐厅结算", html)) {
                        restaurant.initClear(restaurantId,restaurantName); 
                        validator = rule.check(restaurant.$clearTab.find('.T-clearList'));                       
                    }
                }
            }
        });
    };

    restaurant.initClear = function(id,name){
        // 初始化jQuery 对象 
        restaurant.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        restaurant.$clearSearchArea = restaurant.$clearTab.find('.T-search-area');

        restaurant.init_clear_event(id);

        //搜索事件
        restaurant.$clearTab.find(".T-search").click(function(){
            restaurant.restaurantClear(id,name);
        });

        //保存结算事件
        restaurant.$clearTab.find(".T-saveClear").click(function(){
            if (!rule.check(restaurant.$clearTab).form()) { return; }
            restaurant.saveClear(id,name,$(this));
        });
        //明细按钮事件
        restaurant.$clearTab.find(".T-detail").click(function(){
            var year = $(this).closest('tr').data("year");
            var month = $(this).closest('tr').data("month");
            restaurant.restaurantCheck(0,id,name,year,month);
        });

        //操作记录事件
        restaurant.$clearTab.find(".T-clear-records").click(function(){
            $.ajax({
                url:KingServices.build_url("financial/financialRestaurant","listFcRestaurantSettlementRecord"),
                type:"POST",
                data:{
                    restaurantId : id + ""
                },
                success:function(data){
                    var result = showDialog(data);
                    if(result){
                        if(data.financialRestaurantSettlementRecordList.length == 0){
                            showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
                        }else{
                            var html = blanceRecords(data);
                            var blanceRecordsTemplateLayer =layer.open({
                                type: 1,
                                title:"操作记录",
                                skin: 'layui-layer-rim', //加上边框
                                area: '60%', //宽高
                                zIndex:1030,
                                content: html,
                                scrollbar: false
                            });
                        }
                    }
                }
            })
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

    //对账数据保存
    restaurant.saveChecking = function(restaurantId,restaurantName,page,tab_id, title, html){
        if(!restaurant.$checkTab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        //保存对账时提交的数据
        var $this = restaurant.$checkTab.find(".T-checkList"),argumentsLen = arguments.length;
        var financialRestaurantListStr = [];
        function getValue($obj,name){
            var result = $obj.find("[name="+name+"]").val();
            if (result == "") {//所有空字符串变成0
                result = 0;
            }
            return result;
        } 
        var restaurantCheckingTr = $this.find(".T-checkTr");
        restaurantCheckingTr.each(function(){
            var id = $(this).data("id");
            var consumeStartTime = $(this).find("td[name=consumeStartTime]").text();
            var realUnPayedMoney = getValue($(this),"realUnPayedMoney");
            var remark = getValue($(this),"remark");
            var isConfirmAccount = "";
            if ($(this).find(".T-checkbox").is(':checked')) {
                isConfirmAccount = 1;
            } else {
                isConfirmAccount = 0; 
            }
            var checkRecord = {
                id : id,
                restaurantId : restaurantId,
                restaurantName : restaurantName,
                consumeStartTime : consumeStartTime,
                realUnPayedMoney : realUnPayedMoney,
                remark : remark,
                isConfirmAccount : isConfirmAccount
            };
            financialRestaurantListStr.push(checkRecord);
        });
        financialRestaurantListStr = JSON.stringify(financialRestaurantListStr);
        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","accountChecking"),
            type:"POST",
            data:{
                financialRestaurantListStr : financialRestaurantListStr
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen == 2){
                            Tools.closeTab(menuKey + "-checking");
                            restaurant.listRestaurant(restaurant.searchData.pageNo,restaurant.searchData.restaurantId,restaurant.searchData.year,restaurant.searchData.month);
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

    restaurant.saveClear = function(id,name,$obj,tab_id, title, html){
        if(!restaurant.$clearTab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        var $tr,argumentsLen = arguments.length;
        if (!!$obj)  {
            $tr= $obj.closest('tr');
        } else{
            $tr = restaurant.$clearTab.find(".T-clearList tr");
        }

        var fcRestaurantSettlementStr = [];
        $tr.each(function(i){
            //获取数据
            var clearJson = {
                id : $(this).data("id"),
                restaurantId : id,
                year : $(this).data("year"),  
                month : $(this).data("month"),
                realPayedMoney : $(this).find("td[name=blancerealrealPayedMoney]").text(),
                unPayedMoney : $(this).find("td[name=blanceunPayedMoney]").text(),
                realUnPayedMoney : $(this).find("td[name=blancerealrealUnPayedMoney]").text(),
                payMoney : $(this).find("input[name=blancerealPayedMoney]").val(),
                payType : $(this).find("select[name=blancePayType]").val(),
                remark : $(this).find("input[name=blancerealRemark]").val()
            };
            fcRestaurantSettlementStr.push(clearJson);
        });
        fcRestaurantSettlementStr = JSON.stringify(fcRestaurantSettlementStr);
        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","saveFcRestaurantSettlement"),
            type:"POST",
            data:{
                fcRestaurantSettlementStr : fcRestaurantSettlementStr
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen === 2){
                            Tools.closeTab(menuKey + "-clearing");
                            restaurant.listRestaurant(restaurant.searchData.pageNo,restaurant.searchData.restaurantId,restaurant.searchData.year,restaurant.searchData.month);
                        }else if(argumentsLen === 3){
                            restaurant.$clearTab.data('isEdited',false);
                            restaurant.restaurantClear(id,name);
                        } else {
                            restaurant.$clearTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            restaurant.initClear(restaurant.$clearTab.find(".T-newData").data("id"),restaurant.$clearTab.find(".T-newData").data("name"));
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

    restaurant.init_clear_event = function(id, $tab) {
        if (!!restaurant.$clearTab && restaurant.$clearTab.length === 1) {
            var validator = rule.check(restaurant.$clearTab);

           restaurant.$clearTab.find(".T-clearList").off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
            .on('change', function(event) {
                event.preventDefault();
                restaurant.$clearTab.data('isEdited', true);
            });
            restaurant.$clearTab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
                event.preventDefault();
                restaurant.initClear(id,name);
            })
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                restaurant.saveClear(id,name,"",tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                restaurant.saveClear(id,name);
            });
        }
    };

    exports.init = restaurant.initModule;
});