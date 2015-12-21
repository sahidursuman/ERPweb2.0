define(function(require, exports) {
	var menuKey = "financial_scenic",
	    listTemplate = require("./view/list"),
        scenicChecking = require("./view/scenicChecking"),
        scenicClearing = require("./view/scenicClearing"),
	    billImagesTemplate = require("./view/billImages"),
        payedDetailTempLate = require("./view/viewPayedDetail"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail");

    var scenic = {
  		searchData : false,
        $tab :false,
        $checkTab : false,
        $clearTab : false,
        $searchArea : false,
        $checkSearchArea: false,
        $clearSearchArea : false,
        scenicList : false,
        clearTempData : false,
        clearTempSumDate : false
  	};

  	scenic.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        scenic.listScenic(0,"","",dateJson.startDate,dateJson.endDate);
    };

    scenic.listScenic = function(page,scenicName,scenicId,startDate,endDate){
    	if (scenic.$searchArea && arguments.length === 1) {
            scenicName = scenic.$searchArea.find("input[name=scenicName]").val(),
            scenicId = scenic.$searchArea.find("input[name=scenicId]").val(),
            startDate = scenic.$searchArea.find("input[name=startDate]").val(),
            endDate = scenic.$searchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        scenicName = (scenicName == "全部") ? "" : scenicName;
        // 修正页码
        page = page || 0;
        scenic.searchData = {
            pageNo : page,
            scenicName : scenicName,
            scenicId : scenicId,
            startDate : startDate,
            endDate : endDate,
            sortType: 'auto'
        };

        var searchParam = JSON.stringify(scenic.searchData);
        $.ajax({
            url:KingServices.build_url("financial/financialScenic","listSumFinancialScenic"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
               layer.close(globalLoadingLayer);
               var result = showDialog(data);
                if(result){
                    scenic.scenicList = data.scenicNameList;
                    data.searchParam.scenicName = scenicName || '全部';
                    var html = listTemplate(data);
                    Tools.addTab(menuKey,"景区账务",html);

                    scenic.initList(startDate,endDate);

                    // 绑定翻页组件
					laypage({
					    cont: scenic.$tab.find('.T-pagenation'),
					    pages: data.searchParam.totalPage,
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {
					    		scenic.listScenic(obj.curr -1);
                    		}
					    }
					});
                }
            }
        });
    };

    scenic.initList = function(startDate,endDate){
    	scenic.$tab = $('#tab-' + menuKey + "-content");
        scenic.$searchArea = scenic.$tab.find('.T-search-area');

        scenic.getQueryList();
        Tools.setDatePicker(scenic.$searchArea.find('.datepicker'), true);

        //搜索按钮事件
        scenic.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            scenic.listScenic(0);
        });

        // 报表内的操作
        scenic.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id'),
                name = $that.closest('tr').data('name');
            if ($that.hasClass('T-check')) {
                // 对账
                scenic.scenicCheck(0,id,name,"",startDate,endDate);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                scenic.clearTempSumDate = false;
                scenic.clearTempData = false;
                scenic.scenicClear(0,0,id,name,"",startDate,endDate);
            }
        });
    };

    //对账
    scenic.scenicCheck = function(page,scenicId,scenicName,accountInfo,startDate,endDate){
        if (scenic.$checkSearchArea && arguments.length === 3) {
            accountInfo = scenic.$checkSearchArea.find("input[name=accountInfo]").val(),
            startDate = scenic.$checkSearchArea.find("input[name=startDate]").val(),
            endDate = scenic.$checkSearchArea.find("input[name=endDate]").val()
        }
        if(startDate > endDate){
            showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
            return false;
        }

        // 修正页码
        page = page || 0;
        var searchParam = {
            pageNo : page,
            scenicId : scenicId || scenic.$checkTab.find('.T-newData').data('id'),
            accountInfo : accountInfo,
            startDate : startDate,
            endDate : endDate,
            sortType : "auto"
        };
        if(!scenicId && !!scenic.$checkTab){
            scenicName = scenic.$checkTab.find('.T-newData').data('name');
        }
        searchParam = JSON.stringify(searchParam);
        $.ajax({
            url:KingServices.build_url("financial/financialScenic","listScenicAccount"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var fhList = data.financialScenicListData;
                    data.scenicName = scenicName;
                    var html = scenicChecking(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "景区对账", html)) {
                        scenic.initCheck(page,scenicId,scenicName); 
                        validator = (new FinRule(0)).check(scenic.$checkTab.find(".T-checkList"));                       
                    }
                    //取消对账权限过滤
                    var checkTr = scenic.$checkTab.find(".T-checkTr");
                    var rightCode = scenic.$checkTab.find(".T-checkList").data("right");
                    checkDisabled(fhList,checkTr,rightCode);

                    //绑定翻页组件
                    laypage({
                        cont: scenic.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (page + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                scenic.scenicCheck(obj.curr-1,scenicId,scenicName);
                            }
                        }
                    });
                }
            }
        });
    };

    scenic.initCheck = function(page,id,name){
    	// 初始化jQuery 对象 
        scenic.$checkTab = $("#tab-" + menuKey + "-checking-content");

        scenic.$checkSearchArea = scenic.$checkTab.find('.T-search-area');

        scenic.init_event(page,id,name,scenic.$checkTab,"check");
        Tools.setDatePicker(scenic.$checkSearchArea.find('.datepicker'), true);
        FinancialService.updateUnpayMoney(scenic.$checkTab, new FinRule(0));

        //搜索按钮事件
        scenic.$checkSearchArea.find('.T-search').on('click', function(event) {
            event.preventDefault();
            scenic.scenicCheck(0,null,name);
        });

        //导出报表事件 btn-scenicExport
        // scenic.$checkSearchArea.find(".T-scenicExport").click(function(){
        //     var year = scenic.$checkSearchArea.find("[name=year]").val();
        //     var month = scenic.$checkSearchArea.find("[name=month]").val();
        //     checkLogin(function(){
        //         var url = KingServices.build_url("export","scenic") + "&scenicId="+id+"&year="+year+"&month="+month+"&sortType=auto";
        //         exportXLS(url)
        //     });
        // });

        //复选框事件初始化
        var checkboxList = scenic.$checkTab.find(".T-checkList tr .T-checkbox"),
            $checkAll = scenic.$checkTab.find(".T-checkAll");
        FinancialService.initCheckBoxs($checkAll,checkboxList);

        //报表内的操作
        scenic.listOption(scenic.$checkTab);

        //关闭页面事件
        scenic.$checkTab.find(".T-close-check").click(function(){
             Tools.closeTab(menuKey + "-checking");
        });
        //确认对账按钮事件
        scenic.$checkTab.find(".T-saveCheck").click(function(){ 
            validator = (new FinRule(0)).check(scenic.$checkTab.find(".T-checkList"));
            if (!validator.form()) { return; }
            FinancialService.changeUncheck(scenic.$checkTab.find('.T-checkTr'), function(){
                scenic.saveChecking(id,name,page);
            });
        });
    };

    /**
     * 对外付款接口
     * @param  {object} options 付款参数
     * @return {[type]}         [description]
     */
    scenic.initPay = function(options) {
        scenic.scenicClear(0, 0, options.id, options.name, '', options.startDate, options.endDate, true);
    }
    //结算
    scenic.scenicClear = function(isAutoPay,page,scenicId,scenicName,accountInfo,startDate,endDate, isOuter){
        if (isAutoPay) {
            var searchParam = FinancialService.autoPayJson(scenic.$clearTab.find('.T-newData').data('id'),scenic.$clearTab, new FinRule(3), 0);
            searchParam = JSON.parse(searchParam);
            searchParam.scenicId = searchParam.id;   
            delete(searchParam.id);
        } else {
            if (scenic.$clearSearchArea && arguments.length === 4) {
                accountInfo = scenic.$clearSearchArea.find("input[name=accountInfo]").val(),
                startDate = scenic.$clearSearchArea.find("input[name=startDate]").val(),
                endDate = scenic.$clearSearchArea.find("input[name=endDate]").val()
            }
            if(startDate > endDate){
                showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
                return false;
            }

            page = page || 0;
            var searchParam = {
                pageNo : page,
                scenicId : scenicId || scenic.$clearTab.find('.T-newData').data('id'),
                accountInfo : accountInfo,
                startDate : startDate,
                endDate : endDate,
                sortType : "auto"
            };
        }
        searchParam = JSON.stringify(searchParam);
        
        if(!scenicId && !!scenic.$clearTab){
            scenicName = scenic.$clearTab.find('.T-newData').data('name');
        }
        $.ajax({
            url:KingServices.build_url("financial/financialScenic","listScenicAccount"),
            type:"POST",
            data:{ searchParam : searchParam },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    data.scenicName = scenicName;
                    if (isAutoPay && scenic.$clearTab) {
                        scenic.$clearTab.find(".T-clear-auto").toggle();
                        scenic.$clearTab.find(".T-cancel-auto").toggle();
                        scenic.$clearTab.data('isEdited', false);
                        scenic.clearTempData = data.autoPaymentJson;
                        scenic.clearTempSumDate = {
                            sumPayMoney : scenic.$clearTab.find('input[name=sumPayMoney]').val(),
                            sumPayType : scenic.$clearTab.find('select[name=sumPayType]').val()
                        };
                    }

                    //暂存数据读取
                    if(scenic.clearTempSumDate){
                        data.sumPayMoney = scenic.clearTempSumDate.sumPayMoney;
                        data.sumPayType = scenic.clearTempSumDate.sumPayType;
                    } else {
                        data.sumPayMoney = 0;
                        data.sumPayType = 0;
                    }
                    data.isOuter = scenic.isOuter = !!isOuter || scenic.isOuter;
                    var resultList = data.financialScenicListData;
                    data.financialScenicListData = FinancialService.getTempDate(data.financialScenicListData,scenic.clearTempData);
                    var html = scenicClearing(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "景区付款", html)) {
                        scenic.initClear(page,scenicId,scenicName); 
                        validator = (new FinRule(isOuter ? 3 : 1)).check(scenic.$clearTab.find('.T-clearList'));  

                        if(isAutoPay == 1){
                            scenic.$clearTab.find('input[name=sumPayMoney]').prop("disabled",true);
                            scenic.$clearTab.find(".T-clear-auto").hide(); 
                            scenic.$clearTab.find(".T-cancel-auto").show();
                            scenic.$clearTab.data('isEdited', !!data.autoPaymentJson.length);
                        } else {
                            scenic.$clearTab.find(".T-clear-auto").show(); 
                            scenic.$clearTab.find(".T-cancel-auto").hide();
                        }

                        //绑定翻页组件
                        var $tr = scenic.$clearTab.find('.T-clearList tr');
                        laypage({
                            cont: scenic.$clearTab.find('.T-pagenation'),
                            pages: data.searchParam.totalPage,
                            curr: (page + 1),
                            jump: function(obj, first) {
                                if (!first) { 
                                    var tempJson = FinancialService.clearSaveJson(scenic.$clearTab,scenic.clearTempData, FinRule(3));
                                    scenic.clearTempData = tempJson;
                                    var sumPayMoney = parseInt(scenic.$clearTab.find('input[name=sumPayMoney]').val());
                                        sumPayType = parseInt(scenic.$clearTab.find('select[name=sumPayType]').val());
                                    scenic.clearTempSumDate = {
                                        sumPayMoney : sumPayMoney,
                                        sumPayType : sumPayType
                                    }
                                    scenic.scenicClear(isAutoPay,obj.curr-1,scenicId,scenicName);
                                }
                            }
                        });
                    }

                }
            }
        });
    };

    scenic.initClear = function(page,id,name){
        // 初始化jQuery 对象 
        scenic.$clearTab = $("#tab-" + menuKey + "-clearing-content");
        scenic.$clearSearchArea = scenic.$clearTab.find('.T-search-area');

        scenic.init_event(page,id,name,scenic.$clearTab,"clear");
        Tools.setDatePicker(scenic.$clearSearchArea.find('.datepicker'), true);

        //搜索事件
        scenic.$clearTab.find(".T-search").click(function(){
            scenic.clearTempSumDate = false;
            scenic.clearTempData = false;
            scenic.scenicClear(0,0,null,name);
        });

        //报表内的操作
        scenic.listOption(scenic.$clearTab);

        //关闭页面事件
        scenic.$clearTab.find(".T-close-clear").click(function(){
            Tools.closeTab(menuKey + "-clearing");
        });
        //保存结算事件
        scenic.$clearTab.find(".T-saveClear").click(function(){
            if (!(new FinRule(scenic.isOuter ? 3 : 1)).check(scenic.$clearTab).form()) { return; }
            scenic.saveClear(id,name,page);
        });

        //自动下账
        scenic.$clearTab.find(".T-clear-auto").click(function(){
            var autoPayJson = FinancialService.autoPayJson(id,scenic.$clearTab,new FinRule(scenic.isOuter ? 3 : 1));
            if(!autoPayJson){return false;}

            var startDate = scenic.$clearTab.find("input[name=startDate]").val(),
                endDate = scenic.$clearTab.find("input[name=endDate]").val();
            FinancialService.autoPayConfirm(startDate, endDate, function() {
                scenic.scenicClear(1,page,null,name);
            });
        });

        scenic.$clearTab.find(".T-cancel-auto").off().on("click",function(){
            scenic.$clearTab.find(".T-cancel-auto").toggle();
            scenic.$clearTab.find(".T-clear-auto").toggle();
            scenic.clearTempSumDate = false;
            scenic.clearTempData = false;
            scenic.$clearTab.data('isEdited',false);
            scenic.scenicClear(0,0,null,name);
        });

        FinancialService.updateSumPayMoney(scenic.$clearTab,new FinRule(scenic.isOuter ? 3 : 1));
    };

    //显示单据
    scenic.viewImage = function(obj,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL) {
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
    scenic.payedDetail = function(id){
        $.ajax({
            url:KingServices.build_url("financial/financialScenic","getPayedMoneyDetail"),
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
    scenic.needPayDetail = function(id){
        $.ajax({
            url:KingServices.build_url("financial/financialScenic","getNeedPayDetail"),
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
    scenic.saveChecking = function(scenicId,scenicName,page,tab_id, title, html){
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(scenic.$checkTab, new FinRule(0));
        if(!checkSaveJson){ return false; }

        $.ajax({
            url:KingServices.build_url("financial/financialScenic","saveAccountChecking"),
            type:"POST",
            data:{ scenicJson : checkSaveJson },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        if(argumentsLen == 2){
                            Tools.closeTab(menuKey + "-checking");
                            scenic.listScenic(scenic.searchData.pageNo,scenic.searchData.scenicName,scenic.searchData.scenicId,scenic.searchData.startDate,scenic.searchData.endDate);
                        } else if(argumentsLen == 3){
                            scenic.$checkTab.data('isEdited',false);
                            scenic.scenicCheck(page,scenicId,scenicName);
                        } else {
                            scenic.$checkTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            scenic.scenicCheck(0,scenic.$checkTab.find(".T-newData").data("id"),scenic.$checkTab.find(".T-newData").data("name"));
                        }
                    });
                }
            }
        });
    };

    scenic.saveClear = function(id,name,page,tab_id, title, html){
        if(!FinancialService.isClearSave(scenic.$clearTab, new FinRule(scenic.isOuter ? 3 : 1))){
            return false;
        }

        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson(scenic.$clearTab,scenic.clearTempData, new FinRule(scenic.isOuter ? 3 : 1)),
            searchParam = {
                        sumCurrentPayMoney : scenic.$clearTab.find('input[name=sumPayMoney]').val(),
                        payType : scenic.$clearTab.find('select[name=sumPayType]').val(),
                        payRemark : scenic.$clearTab.find('input[name=sumPayRemark]').val()
                    };

        $.ajax({
            url:KingServices.build_url("financial/financialScenic","saveAccountSettlement"),
            type:"POST",
            data:{
                scenicJson : JSON.stringify(clearSaveJson),
                searchParam : JSON.stringify(searchParam)
            },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                        scenic.clearTempData = false;
                        scenic.clearTempSumDate = false;
                        if(argumentsLen === 2){
                            Tools.closeTab(menuKey + "-clearing");
                            scenic.listScenic(scenic.searchData.pageNo,scenic.searchData.scenicName,scenic.searchData.scenicId,scenic.searchData.startDate,scenic.searchData.endDate);
                        }else if(argumentsLen === 3){
                            scenic.$clearTab.data('isEdited',false);
                            scenic.scenicClear(0,page,null,name);
                        } else {
                            scenic.$clearTab.data('isEdited',false);
                            Tools.addTab(tab_id, title, html);
                            scenic.initClear(0,scenic.$clearTab.find(".T-newData").data("id"),scenic.$clearTab.find(".T-newData").data("name"));
                        }
                    }); 
                }
            }
        });
    };

    scenic.init_event = function(page,id,name,$tab,option) {
        if (!!$tab && $tab.length === 1) {
            var validator = (new FinRule(option == "check" ? 0 : (scenic.isOuter ? 3 : 1))).check($tab);

            // 监听修改
            $tab.find(".T-" + option + "List").off('change').on('change',"input",function(event) {
                event.preventDefault();
                $(this).closest('tr').data("change",true);
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
                if(option == "check"){
                    scenic.initCheck(page,id,name);
                } else if(option == "clear"){
                    scenic.initClear(page,id,name);
                }
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event,tab_id,title,html) {
                event.preventDefault();
                if(option == "check"){
                    scenic.saveChecking(id,name,0,tab_id,title,html);
                } else if(option == "clear"){
                    scenic.saveClear(id,name,0,tab_id,title,html);
                }
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                if(option == "check"){
                    scenic.saveChecking(id,name);
                } else if(option == "clear"){
                    scenic.saveClear(id,name);
                }
            });
        }
    };

    scenic.getQueryList = function(){
        var $scenic = scenic.$tab.find(".T-chooseScenic"),
            scenicList = scenic.scenicList;
        if(scenicList != null && scenicList.length > 0){
            for(var i=0;i<scenicList.length;i++){
                scenicList[i].id = scenicList[i].scenicId;
                scenicList[i].value = scenicList[i].scenicName;
            }
        }
        var all = {
            id : "",
            value : "全部"
        };
        scenicList.unshift(all);

        //景区
        $scenic.autocomplete({
            minLength: 0,
            source : scenicList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name="scenicId"]').val('');
                }
            },
            select: function(event,ui) {
                $(this).blur().nextAll('input[name="scenicId"]').val(ui.item.id);
            }
        }).on("click",function(){
            $scenic.autocomplete('search','');
        });      
    };

    // 对账、付款报表内的操作
    scenic.listOption = function($tab){
        $tab.find('.T-option').on('click',function(event) {
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id');
            if ($that.hasClass('T-scenicImg')) {
                // 查看单据
                var WEB_IMG_URL_BIG = $tab.find("input[name=WEB_IMG_URL_BIG]").val();//大图
                var WEB_IMG_URL_SMALL = $tab.find("input[name=WEB_IMG_URL_SMALL]").val();//大图
                scenic.viewImage(this,WEB_IMG_URL_BIG,WEB_IMG_URL_SMALL);
            } else if ($that.hasClass('T-payedDetail')) {
                // 已付明细
                scenic.payedDetail(id);
            } else if ($that.hasClass('T-needPayDetail')) {
                // 应收明细
                scenic.needPayDetail(id);
            }
        });
    };

    exports.init = scenic.initModule;
    exports.initPay = scenic.initPay;
});
