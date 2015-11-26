define(function(require, exports) {
	var rule = require("./rule"); 
	var  menuKey = "financial_busCompany",
		 blanceTabId = menuKey+"-blance",
		 listTemplate = require("./view/list"),
		 checkBill = require("./view/checkBill"),
		 Clearing = require("./view/Clearing"),
		 blanceRecords = require("./view/busCompanyRecords"),
		 billImageTempLate = require("./view/billImages"),
		 tabId = "tab-"+menuKey+"-content",
	     checkTabId = menuKey+"-checking",
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
	var busCompany = {
		searchData : false,
    	$tab :false,
    	$checkTab : false,
    	$clearTab : false,
    	$searchArea : false,
    	$checkSearchArea: false,
        $clearSearchArea : false
	};

	busCompany.initModule = function() {
    	var date = new Date(),
    		year = date.getFullYear();
        busCompany.listBusCompany(0,"",year,"");
    };

    busCompany.listBusCompany = function(page,busCompanyId,year,month){
    	if (busCompany.$searchArea && arguments.length === 1) {
            busCompanyId = busCompany.$searchArea.find("select[name=busCompanyId]").val(),
            year = busCompany.$searchArea.find("select[name=year]").val(),
            month = busCompany.$searchArea.find("select[name=month]").val()
        }
        // 修正页码
        page = page || 0;
        busCompany.searchData = {
            pageNo : page,
            busCompanyId : busCompanyId,
            year : year,
            month : month,
            sortType: 'auto'
        };

        $.ajax({
            url:KingServices.build_url("financial/financialBusCompany","listSumFcBusCompany"),
            type:"POST",
            data:busCompany.searchData,
            success:function(data){
               layer.close(globalLoadingLayer);
               var result = showDialog(data);
                if(result){
                	data.searchParam = busCompany.searchData;
					data.yearList = yearList;
					data.monthList = monthList;
					var html = listTemplate(data);
					addTab(menuKey,"车队账务",html);

					busCompany.initList(year,month);

					// 绑定翻页组件
					laypage({
					    cont: busCompany.$tab.find('.T-pagenation'),
					    pages: data.totalPage,
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

    busCompany.initList = function(year,month){
    	busCompany.$tab = $('#tab-' + menuKey + "-content");
        busCompany.$searchArea = busCompany.$tab.find('.T-search-area');

        //搜索按钮事件
        busCompany.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            busCompany.listBusCompany(0);
        });

        // 报表内的操作
        busCompany.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
            	id = $that.closest('tr').data('id'),
            	name = $that.closest('tr').data('name');
            if ($that.hasClass('T-check')) {
                // 对账
                busCompany.busCompanyCheck(0,id,name,year,month);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                busCompany.busCompanyClear(id,name,year,1,12);
            }
        });
    };

    //对账
    busCompany.busCompanyCheck = function(page,busCompanyId,busCompanyName,year,month){
        if (busCompany.$checkSearchArea && arguments.length === 3) {
            year = busCompany.$checkSearchArea.find("select[name=year]").val(),
            month = busCompany.$checkSearchArea.find("select[name=month]").val()
        }
        // 修正页码
        page = page || 0;
        $.ajax({
            url:KingServices.build_url("financial/financialBusCompany","listFcBusCompany"),
            type:"POST",
            data:{
                pageNo : page,
                busCompanyId : busCompanyId + "",
                year : year,
                month : month,
                sortType : "auto"
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var financialBusCompanyList = JSON.parse(data.financialBusCompanyList);
                    data.financialBusCompanyList = financialBusCompanyList;
					data.yearList = yearList;
					data.monthList = monthList;
					data.companyName = busCompanyName;
					data.searchParam.year = year;
					data.searchParam.month = month;
                    var html = checkBill(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "餐厅对账", html)) {
                        busCompany.initCheck(page,busCompanyId,busCompanyName); 
                        validator = rule.check(busCompany.$checkTab.find('.T-checkList'));                       
                    }
                    //取消对账权限过滤
                    var checkTr = busCompany.$checkTab.find(".T-checkTr");
                    var rightCode = busCompany.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(financialBusCompanyList,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: busCompany.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                busCompany.busCompanyCheck(obj.curr -1,busCompanyId);
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

        busCompany.init_check_event(page,id,name);

        //搜索按钮事件
        busCompany.$checkSearchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            busCompany.busCompanyCheck(0,id,name);
        });

        //导出报表事件 btn-busCompanyExport
        busCompany.$checkSearchArea.find(".T-busCompanyExport").click(function(){
            var year = busCompany.$checkSearchArea.find("[name=year]").val();
            var month = busCompany.$checkSearchArea.find("[name=month]").val();
            checkLogin(function(){
                var url = KingServices.build_url("export","busCompany") + "&busCompanyId="+id+"&year="+year+"&month="+month+"&sortType=auto";
                exportXLS(url)
            });
        });

        //给查看单据绑定事件
        busCompany.$checkTab.find(".T-busCompanyImg").click(function(){
            var WEB_IMG_URL_BIG = busCompany.$checkTab.find("input[name=WEB_IMG_URL_BIG]").val();//大图
            var WEB_IMG_URL_SMALL = busCompany.$checkTab.find("input[name=WEB_IMG_URL_SMALL]").val();//大图
            busCompany.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
        });

        //给全选按钮绑定事件
        busCompany.$checkTab.find(".T-checkAll").click(function(){
            var checkboxList = busCompany.$checkTab.find(".T-checkList tr input[type=checkbox]");
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
        busCompany.$checkTab.find(".T-close-check").click(function(){
            Tools.closeTab(menuKey + "-checking");
        });
        //确认对账按钮事件
        busCompany.$checkTab.find(".T-saveCheck").click(function(){ 
            validator = rule.check(busCompany.$checkTab.find('.T-checkList'));
            if (!validator.form()) { return; }
            busCompany.saveChecking(id,name,page);
        });
    };

    //结算
    busCompany.busCompanyClear = function(busCompanyId,busCompanyName,year,startMonth,endMonth){
        if (busCompany.$clearSearchArea && arguments.length === 2) {
            year = busCompany.$clearSearchArea.find("select[name=year]").val(),
            startMonth = busCompany.$clearSearchArea.find("select[name=startMonth]").val(),
            endMonth = busCompany.$clearSearchArea.find("select[name=endMonth]").val()
        }
        $.ajax({
            url:KingServices.build_url("financial/financialBusCompany","listFcBusCompanySettlement"),
            type:"POST",
            data:{
                busCompanyId : busCompanyId + "",
                year : year,
                monthStart : startMonth,
                monthEnd : endMonth,
                sortType : "auto"
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.yearList = yearList;
					data.companyName = busCompanyName;
					data.monthList = monthList;
					var html = Clearing(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "车队结算", html)) {
                        busCompany.initClear(busCompanyId,busCompanyName); 
                        validator = rule.check(busCompany.$clearTab.find('.T-clearList'));                       
                    }
                }
            }
        });
    };

    busCompany.initClear = function(id,name){
        // 初始化jQuery 对象 
        busCompany.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        busCompany.$clearSearchArea = busCompany.$clearTab.find('.T-search-area');

        busCompany.init_clear_event(id);

        //搜索事件
        busCompany.$clearTab.find(".T-search").click(function(){
            busCompany.busCompanyClear(id,name);
        });

        //保存结算事件
        busCompany.$clearTab.find(".T-saveClear").click(function(){
            if (!rule.check(busCompany.$clearTab).form()) { return; }
            busCompany.saveClear(id,name,$(this));
        });
        //明细按钮事件
        busCompany.$clearTab.find(".T-detail").click(function(){
            var year = $(this).closest('tr').data("year");
            var month = $(this).closest('tr').data("month");
            busCompany.busCompanyCheck(0,id,name,year,month);
        });

        //操作记录事件
        busCompany.$clearTab.find(".T-clear-records").click(function(){
            $.ajax({
                url:KingServices.build_url("financial/financialBusCompany","listFcBusCompanySettlementRecord"),
                type:"POST",
                data:{
                    busCompanyId : id + ""
                },
                success:function(data){
                    var result = showDialog(data);
                    if(result){
                        if(data.financialBusCompanySettlementRecordList.length == 0){
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

    //对账数据保存
    busCompany.saveChecking = function(busCompanyId,busCompanyName,page,tab_id, title, html){
        if(!busCompany.$checkTab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        //保存对账时提交的数据
        var $this = busCompany.$checkTab.find(".T-checkList"),argumentsLen = arguments.length;
        var financialBusCompanyListStr = [];
        function getValue($obj,name){
            var result = $obj.find("[name="+name+"]").val();
            if (result == "") {//所有空字符串变成0
                result = 0;
            }
            return result;
        } 
        var busCompanyCheckingTr = $this.find(".T-checkTr");
        busCompanyCheckingTr.each(function(){
            var id = $(this).data("id");
            var consumeStartTime = $(this).find("td[name=startTime]").text();
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
                busCompanyId : busCompanyId,
                busCompanyName : busCompanyName,
                startTime : consumeStartTime,
                realUnPayedMoney : realUnPayedMoney,
                remark : remark,
                isConfirmAccount : isConfirmAccount
            };
            financialBusCompanyListStr.push(checkRecord);
        });
        financialBusCompanyListStr = JSON.stringify(financialBusCompanyListStr);
        $.ajax({
            url:KingServices.build_url("financial/financialBusCompany","accountChecking"),
            type:"POST",
            data:{
                financialBusCompanyListStr : financialBusCompanyListStr
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen == 2){
                            Tools.closeTab(menuKey + "-checking");
                            busCompany.listBusCompany(busCompany.searchData.pageNo,busCompany.searchData.busCompanyId,busCompany.searchData.year,busCompany.searchData.month);
                        } else if(argumentsLen == 3){
                            busCompany.$checkTab.data('isEdited',false);
                            busCompany.busCompanyCheck(page,busCompanyId,busCompanyName);
                        } else {
                            busCompany.$checkTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            busCompany.initCheck(page,busCompanyId,busCompanyName);
                        }
                    });
                }
            }
        });
    };

    busCompany.saveClear = function(id,name,$obj,tab_id, title, html){
        if(!busCompany.$clearTab.data('isEdited')){
            showMessageDialog($( "#confirm-dialog-message" ),"您未进行任何操作！");
            return false;
        }
        var $tr,argumentsLen = arguments.length;
        if (!!$obj)  {
            $tr= $obj.closest('tr');
        } else{
            $tr = busCompany.$clearTab.find(".T-clearList tr");
        }

        var fcbusCompanySettlementStr = [];
        $tr.each(function(i){
            //获取数据
            var clearJson = {
                id : $(this).data("id"),
                busCompanyId : id,
                year : $(this).data("year"),  
                month : $(this).data("month"),
                realPayedMoney : $(this).find("td[name=blancerealrealPayedMoney]").text(),
                unPayedMoney : $(this).find("td[name=blanceunPayedMoney]").text(),
                realUnPayedMoney : $(this).find("td[name=blancerealrealUnPayedMoney]").text(),
                payMoney : $(this).find("input[name=blancerealPayedMoney]").val(),
                payType : $(this).find("select[name=blancePayType]").val(),
                remark : $(this).find("input[name=blancerealRemark]").val()
            };
            fcbusCompanySettlementStr.push(clearJson);
        });
        fcbusCompanySettlementStr = JSON.stringify(fcbusCompanySettlementStr);
        $.ajax({
            url:KingServices.build_url("financial/financialBusCompany","saveFcBusCompanySettlement"),
            type:"POST",
            data:{
                fcBusCompanySettlementStr : fcbusCompanySettlementStr
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
                        if(argumentsLen === 2){
                            Tools.closeTab(menuKey + "-clearing");
                            busCompany.listBusCompany(busCompany.searchData.pageNo,busCompany.searchData.busCompanyId,busCompany.searchData.year,busCompany.searchData.month);
                        }else if(argumentsLen === 3){
                            busCompany.$clearTab.data('isEdited',false);
                            busCompany.busCompanyClear(id,name);
                        } else {
                            busCompany.$clearTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            busCompany.initClear(busCompany.$clearTab.find(".T-data-id").data("id"),name);
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

	busCompany.init_check_event = function(page,id,name) {
        if (!!busCompany.$checkTab && busCompany.$checkTab.length === 1) {
            var validator = rule.check(busCompany.$checkTab);

            // 监听修改
            busCompany.$checkTab.find(".T-checkList").off('change').on('change', function(event) {
                event.preventDefault();
                busCompany.$checkTab.data('isEdited', true);
            });
            busCompany.$checkTab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
				busCompany.initCheck(page,id,name);
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                busCompany.saveChecking(id,name,0,tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                busCompany.saveChecking(id,name);
            });
        }
    };

    busCompany.init_clear_event = function(id, $tab) {
        if (!!busCompany.$clearTab && busCompany.$clearTab.length === 1) {
            var validator = rule.check(busCompany.$clearTab);

           busCompany.$clearTab.find(".T-clearList").off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
            .on('change', function(event) {
                event.preventDefault();
                busCompany.$clearTab.data('isEdited', true);
            });
            busCompany.$clearTab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
                event.preventDefault();
                busCompany.initClear(id,name);
            })
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event, tab_id, title, html) {
                event.preventDefault();
                busCompany.saveClear(id,name,"",tab_id, title, html);
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                busCompany.saveClear(id,name);
            });
        }
    };

	exports.init = busCompany.initModule;
});
