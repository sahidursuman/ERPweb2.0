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
        hotelList : false
  	};

  	hotel.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        hotel.listHotel(0,"","",dateJson.startDate,dateJson.endDate);
    };

    hotel.listHotel = function(page,hotelName,hotelId,startTime,endTime){
    	if (hotel.$searchArea && arguments.length === 1) {
            hotelName = hotel.$searchArea.find("input[name=hotelName]").val(),
            hotelId = hotel.$searchArea.find("input[name=hotelId]").val(),
            startTime = hotel.$searchArea.find("input[name=startTime]").val(),
            endTime = hotel.$searchArea.find("input[name=endTime]").val()
        }
        if(startTime > endTime){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        // 修正页码
        page = page || 0;
        hotel.searchData = {
            pageNo : page,
            hotelName : hotelName,
            hotelId : hotelId,
            startTime : startTime,
            endTime : endTime,
            sortType: 'auto'
        };

        var searchParam = JSON.stringify(hotel.searchData);
        $.ajax({
            url:KingServices.build_url("financial/financialHotel","listSumFinancialHotel"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
               layer.close(globalLoadingLayer);
               var result = showDialog(data);
                if(result){
                    hotel.hotelList = data.hotelNameList;
                    var html = listTemplate(data);
                    Tools.addTab(menuKey,"酒店账务",html);

                    hotel.initList();

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

    hotel.initList = function(){
    	hotel.$tab = $('#tab-' + menuKey + "-content");
        hotel.$searchArea = hotel.$tab.find('.T-search-area');

        hotel.getQueryList();
        hotel.initDate(hotel.$tab);

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
                name = $that.closest('tr').data('name'),
                startTime = hotel.$searchArea.find("input[name=startTime]").val(),
                endTime = hotel.$searchArea.find("input[name=endTime]").val();
            if ($that.hasClass('T-check')) {
                // 对账
                hotel.hotelCheck(0,id,name,"",startTime,endTime);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                hotel.hotelClear(0,id,name,"",startTime,endTime);
            }
        });
    };

    //对账
    hotel.hotelCheck = function(page,hotelId,hotelName,accountInfo,startTime,endTime){
        if (hotel.$checkSearchArea && arguments.length === 3) {
            accountInfo = hotel.$checkSearchArea.find("input[name=accountInfo]").val(),
            startTime = hotel.$checkSearchArea.find("input[name=startTime]").val(),
            endTime = hotel.$checkSearchArea.find("input[name=endTime]").val()
        }
        if(startTime > endTime){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        // 修正页码
        page = page || 0;
        var searchParam = {
            pageNo : page,
            hotelId : hotelId + "",
            accountInfo : accountInfo,
            startTime : startTime,
            endTime : endTime,
            sortType : "auto"
        };
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("financial/financialHotel","listFcHotel"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var fhList = data.financialHotelList;
                    data.hotelName = hotelName;
                    var html = hotelChecking(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "酒店对账", html)) {
                        hotel.initCheck(page,hotelId,hotelName); 
                        validator = rule.check(hotel.$checkTab.find(".T-checkList"));                       
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
        hotel.$checkTab = $("#tab-" + menuKey + "-checking-content");
        hotel.$checkSearchArea = hotel.$checkTab.find('.T-search-area');

        hotel.init_check_event(page,id,name);
        hotel.initDate(hotel.$checkTab);
        FinancialService.updateUnpayMoney(hotel.$checkTab,rule);

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
        KingServices.checkAll($checkAll,checkboxList);

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
    hotel.hotelClear = function(page,hotelId,hotelName,accountInfo,startTime,endTime){
        if (hotel.$clearSearchArea && arguments.length === 3) {
            accountInfo = hotel.$clearSearchArea.find("input[name=accountInfo]").val(),
            startTime = hotel.$clearSearchArea.find("input[name=startTime]").val(),
            endTime = hotel.$clearSearchArea.find("input[name=endTime]").val()
        }
        if(startTime > endTime){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        page = page || 0;
        var searchParam = {
            pageNo : page,
            hotelId : hotelId + "",
            accountInfo : accountInfo,
            startTime : startTime,
            endTime : endTime,
            sortType : "auto"
        };
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("financial/financialHotel","listFcHotelSettlement"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.hotelName = hotelName;
                    var html = hotelClearing(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "酒店结算", html)) {
                        hotel.initClear(page,hotelId,hotelName); 
                        validator = rule.check(hotel.$clearTab.find('.T-clearList'));                       
                    }
                }
            }
        });
    };

    hotel.initClear = function(page,id,name){
        // 初始化jQuery 对象 
        hotel.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        hotel.$clearSearchArea = hotel.$clearTab.find('.T-search-area');

        hotel.init_clear_event(page,id,name);
        hotel.initDate(hotel.$clearTab);

        //搜索事件
        hotel.$clearTab.find(".T-search").click(function(){
            hotel.hotelClear(0,id,name);
        });

        //报表内的操作
        hotel.listOption(hotel.$clearTab);

        //关闭页面事件
        hotel.$checkTab.find(".T-close-clear").click(function(){
            Tools.closeTab(menuKey + "-clearing");
        });
        //保存结算事件
        hotel.$clearTab.find(".T-saveClear").click(function(){
            if (!rule.check(hotel.$clearTab).form()) { return; }
            hotel.saveClear($(this),id);
        });

        //自动下账
        hotel.$clearTab.find(".T-clear-auto").click(function(){
            var startTime = hotel.$clearSearchArea.find("input[name=startTime]").val(),
                endTime = hotel.$clearSearchArea.find("input[name=endTime]").val();
            var searchParam = {
                hotelId : id + "",
                sumPayMoney : hotel.$clearSearchArea.find("input[name=sumPayMoney]").val(),
                sumPayType : hotel.$clearSearchArea.find("select[name=sumPayType]").val(),
                startTime : startTime,
                endTime : endTime
            };
            searchParam = JSON.stringify(searchParam);
            showConfirmMsg($("#confirm-dialog-message"), "是否按当前账期 " + startTime + " 至 " + endTime + " 下账？",function(){
                $.ajax({
                    url:KingServices.build_url("financial/financialRestaurant","autoPayment"),
                    type:"POST",
                    data:{ searchParam : searchParam },
                    success:function(data){
                        var result = showDialog(data);
                        if(result){
                            showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                                hotel.hotelClear(page,id,name);
                            });
                        }
                    }
                });
            });
        });

        FinancialService.updateSumPayMoney(hotel.$clearTab,rule);
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
            url:KingServices.build_url("financial/financialRestaurant","listFcRestaurantSettlementRecord"),
            type:"POST",
            data:{
                hotelId : id + ""
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
    hotel.needPayDetail = function(id){
        $.ajax({
            url:KingServices.build_url("financial/financialRestaurant","listFcRestaurantSettlementRecord"),
            type:"POST",
            data:{
                hotelId : id + ""
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
        if(!hotel.$checkTab.data('isEdited')){
            showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
            return false;
        }
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(hotel.$checkTab);
        $.ajax({
            url:KingServices.build_url("financial/financialHotel","saveAccountChecking"),
            type:"POST",
            data:{ financialHotelListStr : checkSaveJson },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        if(argumentsLen == 2){
                            Tools.closeTab(menuKey + "-checking");
                            hotel.listhotel(hotel.searchData.pageNo,hotel.searchData.hotelName,hotel.searchData.hotelId,hotel.searchData.startTime,hotel.searchData.endTime);
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

    hotel.saveClear = function(id,name,page,tab_id, title, html){
        if(!hotel.$clearTab.data('isEdited')){
            showMessageDialog($("#confirm-dialog-message"),"您未进行任何操作！");
            return false;
        }
        var $tr,argumentsLen = arguments.length;
        $tr = $cleartab.find(".T-clearList tr");

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
            url:KingServices.build_url("financial/financialHotel","saveFcHotelSettlement"),
            type:"POST",
            data:{
                financialHotelListStr : clearSaveJson
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        if(argumentsLen === 2){
                            Tools.closeTab(menuKey + "-clearing");
                            hotel.listhotel(hotel.searchData.pageNo,hotel.searchData.hotelName,hotel.searchData.hotelId,hotel.searchData.startTime,hotel.searchData.endTime);
                        }else if(argumentsLen === 3){
                            hotel.$clearTab.data('isEdited',false);
                            hotel.hotelClear(page,id,name);
                        } else {
                            hotel.$clearTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            hotel.initClear(0,hotel.$clearTab.find(".T-newData").data("id"),hotel.$clearTab.find(".T-newData").data("name"));
                        }
                    }); 
                }
            }
        });
    };

    hotel.init_check_event = function(page,id,name) {
        if (!!hotel.$checkTab && hotel.$checkTab.length === 1) {
            var validator = rule.check(hotel.$checkTab);

            // 监听修改
            hotel.$checkTab.find(".T-checkList").off('change').on('change',"input",function(event) {
                event.preventDefault();
                $(this).closest('tr').data("change",true);
                hotel.$checkTab.data('isEdited', true);
            });
            hotel.$checkTab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
				hotel.initCheck(page,id,name);
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event,tab_id,title,html) {
                event.preventDefault();
                hotel.saveChecking(id,name,0,tab_id,title,html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                hotel.saveChecking(id,name);
            });
        }
    };

    hotel.init_clear_event = function(page,id,name) {
        if (!!hotel.$clearTab && hotel.$clearTab.length === 1) {
            var validator = rule.check(hotel.$clearTab);

           hotel.$clearTab.find(".T-clearList").off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
            .on('change', function(event) {
                event.preventDefault();
                hotel.$clearTab.data('isEdited', true);
            });
            hotel.$clearTab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
                event.preventDefault();
                hotel.initClear(id);
            })
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event,tab_id, title,html) {
                event.preventDefault();
                hotel.saveClear(id,name,0,tab_id,title,html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                hotel.saveClear();
            });
        }
    };

    hotel.getQueryList = function(){
        var $hotel = hotel.$tab.find(".T-chooseHotel"),
            hotelList = hotel.hotelList;
        if(hotelList != null && hotelList.length > 0){
            for(var i=0;i<hotelList.length;i++){
                hotelList[i].value = hotelList[i].name;
            }
        }

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

    //时间控件初始化
    hotel.initDate = function($tab){
        $tab.find('.date-picker').datepicker({
            autoclose: true,
            todayHighlight: true,
            format: 'yyyy-mm-dd',
            language: 'zh-CN'
        });
    };

    // 对账、付款报表内的操作
    hotel.listOption = function($tab){
        $tab.find('.T-option').on('click',function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');
            if ($that.hasClass('T-restaurantImg')) {
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

    exports.init = hotel.initModule;
});
