define(function(require, exports) {
	var rule = require("./rule"),
        menuKey = "financial_rummery",
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
        $checkSearchArea: false,
        $clearSearchArea : false,
        hotelList : false,
        clearTempData : false,
        clearTempSumDate : false
  	};

  	hotel.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        hotel.listHotel(0,"","",dateJson.startDate,dateJson.endDate);
    };

    hotel.listHotel = function(page,hotelName,hotelId,startDate,endDate){
    	if (hotel.$searchArea && arguments.length === 1) {
            hotelName = hotel.$searchArea.find("input[name=hotelName]").val(),
            hotelId = hotel.$searchArea.find("input[name=hotelId]").val(),
            startDate = hotel.$searchArea.find("input[name=startDate]").val(),
            endDate = hotel.$searchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
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
            sortType: 'auto'
        };

        var searchParam = JSON.stringify(hotel.searchData);
        $.ajax({
            url:KingServices.build_url("account/financialHotel","listSumFinancialHotel"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
               layer.close(globalLoadingLayer);
               var result = showDialog(data);
                if(result){
                    hotel.hotelList = data.hotelNameList;
                    var html = listTemplate(data);
                    Tools.addTab(menuKey,"酒店账务",html);

                    hotel.initList(startDate,endDate);

                    // 绑定翻页组件
					laypage({
					    cont: hotel.$tab.find('.T-pagenation'),
					    pages: data.searchParam.totalPage,
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {
					    		Hotel.listHotel(obj.curr -1);
                    		}
					    }
					});
                }
            }
        });
    };

    hotel.initList = function(startDate,endDate){
    	hotel.$tab = $('#tab-' + menuKey + "-content");
        hotel.$searchArea = hotel.$tab.find('.T-search-area');

        hotel.getQueryList();
        Tools.setDatePicker(hotel.$tab.find(".date-picker"),true);

        //搜索按钮事件
        hotel.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            hotel.listHotel(0);
        });

        // 报表内的操作
        hotel.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id'),
                name = $that.closest('tr').data('name');
            if ($that.hasClass('T-check')) {
                // 对账
                hotel.hotelCheck(0,id,name,"",startDate,endDate);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                hotel.clearTempSumDate = false;
                hotel.clearTempData = false;
                hotel.hotelClear(0,0,id,name,"",startDate,endDate);
            }
        });
    };

    //对账
    hotel.hotelCheck = function(page,hotelId,hotelName,accountInfo,startDate,endDate){
        if (hotel.$checkSearchArea && arguments.length === 3) {
            accountInfo = hotel.$checkSearchArea.find("input[name=accountInfo]").val(),
            startDate = hotel.$checkSearchArea.find("input[name=startDate]").val(),
            endDate = hotel.$checkSearchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        // 修正页码
        page = page || 0;
        var searchParam = {
            pageNo : page,
            hotelId : hotelId + "",
            accountInfo : accountInfo,
            startTime : startDate,
            endTime : endDate,
            sortType : "auto"
        };
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("account/financialHotel","listHotelAccount"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var fhList = data.financialHotelListData;
                    data.financialHotelListData = FinancialService.isGuidePay(fhList);
                    data.hotelName = hotelName;
                    var html = hotelChecking(data);
                    
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "酒店对账", html)) {
                        hotel.initCheck(page,hotelId,hotelName); 
                    }
                    //取消对账权限过滤
                    var checkTr = hotel.$checkTab.find(".T-checkTr");
                    var rightCode = hotel.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(fhList,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: hotel.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                hotel.hotelCheck(obj.curr-1,hotelId,hotelName);
                            }
                        }
                    });
                }
            }
        });
    };

    hotel.initCheck = function(page,id,name){
    	// 初始化jQuery 对象 
        var ruleCheck = new FinRule(0);
        hotel.$checkTab = $("#tab-" + menuKey + "-checking-content");
        hotel.$checkSearchArea = hotel.$checkTab.find('.T-search-area');

        hotel.init_event(page,id,name,hotel.$checkTab,"check");
        Tools.setDatePicker(hotel.$checkTab.find(".date-picker"),true);
        FinancialService.updateUnpayMoney(hotel.$checkTab,ruleCheck);

        //搜索按钮事件
        hotel.$checkSearchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            hotel.hotelCheck(0,id,name);
        });

        //导出报表事件 btn-hotelExport
        // hotel.$checkSearchArea.find(".T-hotelExport").click(function(){
        //     var year = hotel.$checkSearchArea.find("[name=year]").val();
        //     var month = hotel.$checkSearchArea.find("[name=month]").val();
        //     checkLogin(function(){
        //         var url = KingServices.build_url("export","hotel") + "&hotelId="+id+"&year="+year+"&month="+month+"&sortType=auto";
        //         exportXLS(url)
        //     });
        // });

        //复选框事件初始化
        var checkboxList = hotel.$checkTab.find(".T-checkList tr .T-checkbox"),
            $checkAll = hotel.$checkTab.find(".T-checkAll");
        FinancialService.initCheckBoxs($checkAll,checkboxList);

        //报表内的操作
        hotel.listOption(hotel.$checkTab);

        //关闭页面事件
        hotel.$checkTab.find(".T-close-check").click(function(){
            Tools.closeTab(menuKey + "-checking");
        });
        //确认对账按钮事件
        hotel.$checkTab.find(".T-saveCheck").click(function(){ 
            validator = rule.check(hotel.$checkTab.find(".T-checkList"));
            if (!validator.form()) { return; }
            hotel.saveChecking(id,name,page);
        });
    };

    //结算
    hotel.hotelClear = function(isAutoPay,page,hotelId,hotelName,accountInfo,startDate,endDate){
        if (hotel.$clearSearchArea && arguments.length === 4) {
            accountInfo = hotel.$clearSearchArea.find("input[name=accountInfo]").val(),
            startDate = hotel.$clearSearchArea.find("input[name=startDate]").val(),
            endDate = hotel.$clearSearchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        page = page || 0;
        var searchParam = {
            pageNo : page,
            hotelId : hotelId + "",
            accountInfo : accountInfo,
            startTime : startDate,
            endTime : endDate,
            sortType : "auto"
        }, args = arguments;
        if(isAutoPay == 1){
           searchParam.isAutoPay = isAutoPay;
           searchParam.sumCurrentPayMoney = hotel.$clearTab.find('input[name=sumPayMoney]').val();
           searchParam.payType = hotel.$clearTab.find('select[name=sumPayType]').val();
           searchParam.payRemark = hotel.$clearTab.find('input[name=sumPayRemark]').val();
        }
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("account/financialHotel","listHotelAccount"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.hotelName = hotelName;
                    if(isAutoPay == 1){
                        hotel.clearTempData = data.autoPaymentJson;
                        hotel.clearTempSumDate = {
                            sumPayMoney : hotel.$clearTab.find('input[name=sumPayMoney]').val(),
                            sumPayType : hotel.$clearTab.find('select[name=sumPayType]').val(),
                            sumPayRemark : hotel.$clearTab.find('input[name=sumPayRemark]').val()
                        };
                    }

                    //暂存数据读取
                    if(hotel.clearTempSumDate){
                        data.sumPayMoney = hotel.clearTempSumDate.sumPayMoney;
                        data.sumPayType = hotel.clearTempSumDate.sumPayType;
                        data.sumPayRemark = hotel.clearTempSumDate.sumPayRemark;
                    } else {
                        data.sumPayMoney = 0;
                        data.sumPayType = 0;
                        data.sumPayRemark = "";
                    }
                    var resultList = data.financialHotelListData;
                    data.financialHotelListData = FinancialService.getTempDate(resultList,hotel.clearTempData);
                    data.financialHotelListData = FinancialService.isGuidePay(resultList);
                    data.isAutoPay = isAutoPay;
                    var html = hotelClearing(data);
                    
                    args.data = data;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "酒店付款", html)) {
                        hotel.initClear(args); 
                    } else {
                        hotel.$clearTab.data('next', args);
                    }

                    //绑定翻页组件
                    var $tr = hotel.$clearTab.find('.T-clearList tr');
                    laypage({
                        cont: hotel.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                var tempJson = FinancialService.clearSaveJson(hotel.$clearTab,hotel.clearTempData,rule);
                                hotel.clearTempData = tempJson;
                                var sumPayMoney = parseFloat(hotel.$clearTab.find('input[name=sumPayMoney]').val()),
                                    sumPayType = parseFloat(hotel.$clearTab.find('select[name=sumPayType]').val()),
                                    sumPayRemark = hotel.$clearTab.find('input[name=sumPayRemark]').val();
                                hotel.clearTempSumDate = {
                                    sumPayMoney : sumPayMoney,
                                    sumPayType : sumPayType,
                                    sumPayRemark : sumPayRemark
                                }
                                hotel.hotelClear(isAutoPay,obj.curr-1,hotelId,hotelName);
                            }
                        }
                    });
                }
            }
        });
    };

    hotel.initClear = function(args){
        var isAutoPay = args[0],
            data = args.data,
            page = args[1] || 0,
            id = args[2],
            name = args[3];
        // 初始化jQuery 对象 
        hotel.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        hotel.$clearSearchArea = hotel.$clearTab.find('.T-search-area');
        var $tab = hotel.$clearTab, saveRule = new FinRule(isAutoPay== 2?3: 1);
        args.saveRule = saveRule;

        if(isAutoPay == 0){
            hotel.$clearTab.find(".T-cancel-auto").hide();
        } else {
            hotel.$clearTab.find('input[name=sumPayMoney]').prop("disabled",true);
            hotel.$clearTab.find(".T-clear-auto").hide(); 
            if(isAutoPay == 1){
                hotel.$clearTab.data('isEdited',true);
            } else if(isAutoPay == 2){
                hotel.$clearTab.find(".T-cancel-auto").hide();
            }
        }

        // 监听修改
        $tab.find(".T-clearList").off('change').on('change',"input",function(event) {
            event.preventDefault();
            $(this).closest('tr').data("change",true);
            $tab.data('isEdited', true);
        });
        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            hotel.initClear(hotel.$clearTab.data('next'));
            hotel.$clearTab.find(".T-cancel-auto").hide();
        })
        // 监听保存，并切换tab
        .on('switch.tab.save', function(event,tab_id,title,html) {
            event.preventDefault();
            hotel.saveClear(args,tab_id,title,html);
        })
        // 保存后关闭
        .on('close.tab.save', function(event) {
            event.preventDefault();
            hotel.saveClear(args,true);
        });
        Tools.setDatePicker(hotel.$clearTab.find(".date-picker"),true);

        //搜索事件
        hotel.$clearTab.find(".T-search").click(function(){
            hotel.clearTempSumDate = false;
            hotel.clearTempData = false;
            hotel.$clearTab.data('isEdited',false);
            hotel.hotelClear(isAutoPay,0,id,name);
        });

        //报表内的操作
        hotel.listOption(hotel.$clearTab);

        //关闭页面事件
        hotel.$clearTab.find(".T-close-clear").click(function(){
            Tools.closeTab(menuKey + "-clearing");
        });
        //保存结算事件
        hotel.$clearTab.find(".T-saveClear").click(function(){
            if (!rule.check(hotel.$clearTab).form()) { return; }
            hotel.saveClear(args);
        });

        //自动下账
        hotel.$clearTab.find(".T-clear-auto").click(function(){
            var autoPayJson = FinancialService.autoPayJson(id,hotel.$clearTab,rule);
            if(!autoPayJson){return false;}
            hotel.hotelClear(1,page,id,name);
        });

        hotel.$clearTab.find(".T-cancel-auto").off().on("click",function(){
            hotel.$clearTab.find(".T-cancel-auto").toggle();
            hotel.$clearTab.find(".T-clear-auto").toggle();
            hotel.clearTempSumDate = false;
            hotel.clearTempData = false;
            hotel.$clearTab.data('isEdited',false);
            hotel.hotelClear(0,0,id,name);
        });

        FinancialService.updateSumPayMoney(hotel.$clearTab,saveRule);
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
				var colorbox_params = {
                    photo: true,
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
    hotel.saveChecking = function(hotelId,hotelName,page,tab_id, title, html){
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(hotel.$checkTab,new FinRule(0));
        if(!checkSaveJson){ return false; }

        $.ajax({
            url:KingServices.build_url("account/financialHotel","saveAccountChecking"),
            type:"POST",
            data:{ hotelJson : checkSaveJson },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        if(argumentsLen == 2){
                            Tools.closeTab(menuKey + "-checking");
                            hotel.listhotel(hotel.searchData.pageNo,hotel.searchData.hotelName,hotel.searchData.hotelId,hotel.searchData.startDate,hotel.searchData.endDate);
                        } else if(argumentsLen == 3){
                            hotel.$checkTab.data('isEdited',false);
                            hotel.hotelCheck(page,hotelId,hotelName);
                        } else {
                            hotel.$checkTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            hotel.initCheck(0,hotel.$checkTab.find(".T-newData").data("id"),hotel.$checkTab.find(".T-newData").data("name"));
                        }
                    });
                }
            }
        });
    };

    hotel.saveClear = function(args,tab_id, title, html){
        if(!FinancialService.isClearSave(hotel.$clearTab,rule)){
            return false;
        }

        var isAutoPay = args[0],
            data = args.data,
            page = args[1] || 0,
            id = args[2],
            name = args[3];

        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson(hotel.$clearTab,hotel.clearTempData,args.saveRule);
        var searchParam = {
            hotelId : id,
            sumCurrentPayMoney : hotel.$clearTab.find('input[name=sumPayMoney]').val(),
            payType : hotel.$clearTab.find('select[name=sumPayType]').val(),
            payRemark : hotel.$clearTab.find('input[name=sumPayRemark]').val()
        };

        clearSaveJson = JSON.stringify(clearSaveJson);
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("account/financialHotel","saveAccountSettlement"),
            type:"POST",
            data:{
                hotelJson : clearSaveJson,
                searchParam : searchParam
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        hotel.clearTempData = false;
                        hotel.clearTempSumDate = false;
                        if(argumentsLen === 2){
                            Tools.closeTab(menuKey + "-clearing");
                            hotel.listhotel(hotel.searchData.pageNo,hotel.searchData.hotelName,hotel.searchData.hotelId,hotel.searchData.startDate,hotel.searchData.endDate);
                        }else if(argumentsLen === 1){
                            hotel.$clearTab.data('isEdited',false);
                            hotel.hotelClear(0,page,id,name);
                        } else {
                            hotel.$clearTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            hotel.initClear(hotel.$clearTab.data('next'));
                        }
                    }); 
                }
            }
        });
    };

    hotel.init_event = function(page,id,name,$tab,option) {
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
                    hotel.initCheck(page,id,name);
                } else if(option == "clear"){
                    hotel.initClear(page,id,name);
                    hotel.$clearTab.find(".T-cancel-auto").hide();
                }
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event,tab_id,title,html) {
                event.preventDefault();
                if(option == "check"){
                    hotel.saveChecking(id,name,0,tab_id,title,html);
                } else if(option == "clear"){
                    hotel.saveClear(id,name,0,tab_id,title,html);
                }
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                if(option == "check"){
                    hotel.saveChecking(id,name);
                } else if(option == "clear"){
                    hotel.saveClear(id,name);
                }
            });
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

    hotel.initPay = function(options){
        hotel.hotelClear(2,0,options.id,options.name,"",options.startDate,options.endDate); 
    };

    exports.init = hotel.initModule;
    exports.initPay = hotel.initPay;
});
