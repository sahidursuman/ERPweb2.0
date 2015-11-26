define(function(require, exports) {
	var rule = require("./rule");
    var menuKey = "financial_rummery",
	    listTemplate = require("./view/list"),
	    billImagesTemplate = require("./view/billImages"),
	    hotelChecking = require("./view/hotelChecking"),
	    hotelClearing = require("./view/hotelClearing"),
	    blanceRecords = require("./view/hotelRecords"),
		tabId = "tab-"+menuKey+"-content",
	    checkTabId = menuKey+"-checking",
	    blanceTabId = menuKey+"-blance",
	    yearList=[],
	    monthList = []
	    for(var i=2013;i<=new Date().getFullYear();i++){
	    	var yeardata={"value":i}
	    	yearList.push(yeardata)
	    };
	    for(var j = 1;j<=12;j++){
	    	var monthData = {"value":j}
	    	monthList.push(monthData);
	    }
    var hotel = {
  		searchData : false,
  		$tab : false,
  		$checkTab : false,
  		$clearTab : false
  	};

  	hotel.initModule = function() {
    	var date = new Date(),
    		year = date.getFullYear();
        hotel.listHotel(0,"",year,"");
    };

    hotel.listHotel = function(page,hotelId,year,month){
    	if (hotel.$searchArea && arguments.length === 1) {
            hotelId = hotel.$searchArea.find("select[name=hotelId]").val(),
            year = hotel.$searchArea.find("select[name=year]").val(),
            month = hotel.$searchArea.find("select[name=month]").val()
        }
        // 修正页码
        page = page || 0;
        hotel.searchData = {
            pageNo : page,
            hotelId : hotelId,
            year : year,
            month : month,
            sortType: 'auto'
        };

        $.ajax({
            url:KingServices.build_url("financial/financialHotel","listSumFcHotel"),
            type:"POST",
            data:hotel.searchData,
            success:function(data){
               layer.close(globalLoadingLayer);
               var result = showDialog(data);
                if(result){
                	data.hotelNameListNew = JSON.parse(data.hotelNameListNew);
                	data.yearList = yearList;
                    data.monthList = monthList;
                    data.searchParam = hotel.searchData;
                    var html = listTemplate(data);
                    Tools.addTab(menuKey,"酒店账务",html);

                    hotel.initList(year,month);

                    // 绑定翻页组件
					laypage({
					    cont: hotel.$tab.find('.T-pagenation'),
					    pages: data.totalPage,
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

    hotel.initList = function(year,month){
    	hotel.$tab = $('#tab-' + menuKey + "-content");
        hotel.$searchArea = hotel.$tab.find('.T-search-area');

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
                hotel.hotelCheck(0,id,name,year,month);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                hotel.hotelClear(id,name,year,1,12);
            }
        });
    };

    //对账
    hotel.hotelCheck = function(page,hotelId,hotelName,year,month){
        if (hotel.$checkSearchArea && arguments.length === 3) {
            year = hotel.$checkSearchArea.find("select[name=year]").val(),
            month = hotel.$checkSearchArea.find("select[name=month]").val()
        }
        // 修正页码
        page = page || 0;
        $.ajax({
            url:KingServices.build_url("financial/financialHotel","listFcHotel"),
            type:"POST",
            data:{
                pageNo : page,
                hotelId : hotelId + "",
                year : year,
                month : month,
                sortType : "auto"
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var financialHotelList = JSON.parse(data.financialHotelList);
                    data.financialHotelList = financialHotelList;
                    data.yearList = yearList;
                    data.monthList = monthList;
                    data.hotelName = hotelName;
                    data.searchParam.year = year;
                    data.searchParam.month = month;
                    var html = hotelChecking(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "酒店对账", html)) {
                        hotel.initCheck(page,hotelId,hotelName); 
                        validator = rule.check(hotel.$checkTab.find('.T-checkList'));                       
                    }
                    //取消对账权限过滤
                    var checkTr = hotel.$checkTab.find(".T-checkTr");
                    var rightCode = hotel.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(financialHotelList,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: hotel.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                hotel.hotelCheck(obj.curr -1,hotelId);
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

        //搜索按钮事件
        hotel.$checkSearchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            hotel.hotelCheck(0,id,name);
        });

        //导出报表事件 btn-hotelExport
        hotel.$checkSearchArea.find(".T-hotelExport").click(function(){
            var year = hotel.$checkSearchArea.find("[name=year]").val();
            var month = hotel.$checkSearchArea.find("[name=month]").val();
            checkLogin(function(){
                var url = KingServices.build_url("export","hotel") + "&hotelId="+id+"&year="+year+"&month="+month+"&sortType=auto";
                exportXLS(url)
            });
        });

        //给全选按钮绑定事件
        hotel.$checkTab.find(".T-checkAll").click(function(){
            var checkboxList = hotel.$checkTab.find(".T-checkList tr input[type=checkbox]");
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

        //给查看单据绑定事件
        hotel.$checkTab.find(".hotelImg").click(function(){
        	var WEB_IMG_URL_BIG = hotel.$checkTab.find("input[name=WEB_IMG_URL_BIG]").val();//大图
        	var WEB_IMG_URL_SMALL = hotel.$checkTab.find("input[name=WEB_IMG_URL_SMALL]").val();//大图
        	Hotel.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
        });

        //关闭页面事件
        hotel.$checkTab.find(".T-close-check").click(function(){
            Tools.closeTab(menuKey + "-checking");
        });
        //确认对账按钮事件
        hotel.$checkTab.find(".T-saveCheck").click(function(){ 
            validator = rule.check(hotel.$checkTab.find('.T-checkList'));
            if (!validator.form()) { return; }
            hotel.saveChecking(id,name,page);
         });
    };

    //结算
    hotel.hotelClear = function(hotelId,hotelName,year,startMonth,endMonth){
        if (hotel.$clearSearchArea && arguments.length === 2) {
            year = hotel.$clearSearchArea.find("select[name=year]").val(),
            startMonth = hotel.$clearSearchArea.find("select[name=startMonth]").val(),
            endMonth = hotel.$clearSearchArea.find("select[name=endMonth]").val()
        }
        $.ajax({
            url:KingServices.build_url("financial/financialHotel","listFcHotelSettlement"),
            type:"POST",
            data:{
                hotelId : hotelId + "",
                year : year,
                monthStart : startMonth,
                monthEnd : endMonth,
                sortType : "auto"
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.yearList = yearList;
                    data.monthList = monthList;
                    data.hotelName = hotelName;
                    var html = hotelClearing(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "酒店结算", html)) {
                        hotel.initClear(hotelId,hotelName); 
                        validator = rule.check(hotel.$clearTab.find('.T-clearList'));                       
                    }
                }
            }
        });
    };

    hotel.initClear = function(id,name){
        // 初始化jQuery 对象 
        hotel.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        hotel.$clearSearchArea = hotel.$clearTab.find('.T-search-area');

        hotel.init_clear_event(id);

        //搜索事件
        hotel.$clearTab.find(".T-search").click(function(){
            hotel.hotelClear(id,name);
        });

        //保存结算事件
        hotel.$clearTab.find(".T-saveClear").click(function(){
            if (!rule.check(hotel.$clearTab).form()) { return; }
            hotel.saveClear($(this),id);
        });
        //明细按钮事件
        hotel.$clearTab.find(".T-detail").click(function(){
            var year = $(this).closest('tr').data("year");
            var month = $(this).closest('tr').data("month");
            hotel.hotelCheck(0,id,name,year,month);
        });

        //操作记录事件
        hotel.$clearTab.find(".T-clear-records").click(function(){
            $.ajax({
                url:KingServices.build_url("financial/financialHotel","listFcHotelSettlementRecord"),
                type:"POST",
                data:{
                    hotelId : id + ""
                },
                success:function(data){
                    var result = showDialog(data);
                    if(result){
                        if(data.financialHotelSettlementRecordList.length == 0){
                            showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
                        }else{
                            var html =blanceRecords(data);
				    		var blanceRecordsTemplateLayer =layer.open({
				    			type: 1,
							    title:"操作记录",
							    skin: 'layui-layer-rim',
							    area: '60%',
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
    hotel.saveChecking = function(hotelId,hotelName,page,tab_id, title, html){
        if(!hotel.$checkTab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        //保存对账时提交的数据
        var $this = hotel.$checkTab.find(".T-checkList"),argumentsLen = arguments.length;
        var financialhotelListStr = [];
        function getValue($obj,name){
            var result = $obj.find("[name="+name+"]").val();
            if (result == "") {//所有空字符串变成0
                result = 0;
            }
            return result;
        } 
        var hotelCheckingTr = $this.find(".T-checkTr");
        hotelCheckingTr.each(function(){
            var id = $(this).data("id");
            var isConfirmAccount = "";
            if ($(this).find(".T-checkbox").is(':checked')) {
                isConfirmAccount = 1;
            } else {
                isConfirmAccount = 0; 
            }
            var checkRecord = {
                id : id,
			    hotelId : hotelId,
			    hotelName : hotelName,
			    consumeStartTime : $(this).find("td[name=consumeStartTime]").text(),
			    realUnPayedMoney : $(this).find("input[name=realUnPayedMoney]").val(),
			    remark : $(this).find("input[name=remark]").val(),
			    isConfirmAccount:1
            };
            financialhotelListStr.push(checkRecord);
        });
        financialhotelListStr = JSON.stringify(financialhotelListStr);
        $.ajax({
            url:KingServices.build_url("financial/financialHotel","accountChecking"),
            type:"POST",
            data:{
                financialHotelListStr : financialhotelListStr
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen == 2){
                            Tools.closeTab(menuKey + "-checking");
                            hotel.listhotel(hotel.searchData.pageNo,hotel.searchData.hotelId,hotel.searchData.year,hotel.searchData.month);
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

    hotel.saveClear = function($obj,id,tab_id, title, html){
        if(!hotel.$clearTab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        var $tr,argumentsLen = arguments.length;
        console.log(argumentsLen);
        if (!!$obj)  {
            $tr= $obj.closest('tr');
        } else{
            $tr = $cleartab.find(".T-clearList tr");
        }

        var fcHotelSettlementStr = [];
        $tr.each(function(i){
            //获取数据
            var clearJson = {
                id : $(this).data("id"),
				hotelId : id,
				year : $(this).data("year"),
				month : $(this).data("month"),
				realPayedMoney : $(this).find("td[name=blancerealrealPayedMoney]").text(),
				unPayedMoney : $(this).find("td[name=blanceunPayedMoney]").text(),
				realUnPayedMoney : $(this).find("td[name=blancerealrealUnPayedMoney]").text(),
				payMoney : $(this).find("input[name=blancerealPayedMoney]").val(),
				payType : $(this).find("select[name=blancePayType]").val(),
				remark : $(this).find("input[name=blancerealRemark]").val()
            };
            fcHotelSettlementStr.push(clearJson);
        });
        fcHotelSettlementStr = JSON.stringify(fcHotelSettlementStr);
        $.ajax({
            url:KingServices.build_url("financial/financialHotel","saveFcHotelSettlement"),
            type:"POST",
            data:{
                fcHotelSettlementStr : fcHotelSettlementStr
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen === 0){
                            Tools.closeTab(menuKey + "-clearing");
                            hotel.listhotel(hotel.searchData.pageNo,hotel.searchData.hotelId,hotel.searchData.year,hotel.searchData.month);
                        }else if(argumentsLen === 2){
                            hotel.$clearTab.data('isEdited',false);
                            hotel.hotelClear(id,name);
                        } else {
                            hotel.$clearTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            hotel.initClear(hotel.$clearTab.find(".T-newData").data("id"),hotel.$clearTab.find(".T-newData").data("name"));
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
            hotel.$checkTab.find(".T-checkList").off('change').on('change', function(event) {
                event.preventDefault();
                hotel.$checkTab.data('isEdited', true);
            });
            hotel.$checkTab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
				hotel.initCheck(page,id,name);
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                hotel.saveChecking(id,name,0,tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                hotel.saveChecking(id,name);
            });
        }
    };

    hotel.init_clear_event = function(id, $tab) {
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
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                hotel.saveClear("",id,tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                hotel.saveClear();
            });
        }
    };

    exports.init = hotel.initModule;
});
