define(function(require, exports) {
	var menuKey = "financial_scenic",
	    listTemplate = require("./view/list"),
        scenicChecking = require("./view/scenicChecking"),
        scenicClearing = require("./view/scenicClearing"),
        payedDetailTempLate = require("./view/viewPayedDetail"),
        needPayDetailTempLate = require("./view/viewNeedPayDetail");

    var scenic = {
  		searchData : false,
        $tab :false,
        $checkTab : false,
        $clearTab : false,
        $searchArea : false,
        scenicList : false,
        clearTempData : false,
        clearTempSumDate : false
  	};

  	scenic.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        scenic.listScenic(0,"","",dateJson.startDate,dateJson.endDate,2,'','','','');
    };

    scenic.listScenic = function(page,scenicName,scenicId,startDate,endDate,accountStatus,businessName,businessGroupId,groupName,groupId){
    	if (scenic.$searchArea && arguments.length === 1) {
            scenicName = scenic.$searchArea.find("input[name=scenicName]").val();
            scenicId = scenic.$searchArea.find("input[name=scenicId]").val();
            startDate = scenic.$searchArea.find("input[name=startDate]").val();
            endDate = scenic.$searchArea.find("input[name=endDate]").val();
            accountStatus = scenic.$searchArea.find(".T-finance-status").find("button").data("value");
            businessName = scenic.$searchArea.find('[name=departmentName]').val();
            businessGroupId = scenic.$searchArea.find('[name=departmentId]').val();
            groupName = scenic.$searchArea.find('[name=childDepartmentName]').val();
            groupId = scenic.$searchArea.find('[name=childDepartmentId]').val();
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
            accountStatus : accountStatus,
            sortType: scenic.$searchArea ? scenic.$searchArea.find("select[name=orderBy]").val() : "desc",
            businessName: businessName,
            businessGroupId: businessGroupId,
            groupName: groupName,
            groupId: groupId
        };

       scenic.searchData =  FinancialService.getChangeArgs(scenic.searchData,scenic.$tab);

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
                    scenic.$tab = $('#tab-' + menuKey + "-content");
                    scenic.$searchArea = scenic.$tab.find('.T-search-area');
                    scenic.initList(scenic.searchData);
                    var sumMoneyData = {
                        settlementMoneySum:data.settlementMoneySum,
                        unPayedMoneySum:data.unPayedMoneySum,
                        payedMoneySum:data.payedMoneySum,
                        needPayMoneySum:data.needPayMoneySum
                    };
                    scenic.getSumMoney(sumMoneyData,scenic.$tab);
                    // 绑定翻页组件
					laypage({
					    cont: scenic.$tab.find('.T-pagenation'),
					    pages: data.searchParam.totalPage,
					    curr: (scenic.searchData.pageNo + 1),
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
    //获取合计金额
    scenic.getSumMoney = function(data,tabId){
        tabId.find('.T-sumNeedPay').text(data.needPayMoneySum);
        tabId.find('.T-sumStMoney').text(data.settlementMoneySum);
        tabId.find('.T-sumPaiedMoney').text(data.payedMoneySum);
        tabId.find('.T-sumUnPaiedMoney').text(data.unPayedMoneySum);
    };
    scenic.initList = function(args){
    	scenic.getQueryList();
        Tools.setDatePicker(scenic.$searchArea.find('.datepicker'), true);
        FinancialService.searchChange(scenic.$tab);

        //部门下拉
        FinancialService.getDepartment(scenic.$searchArea.find('input[name=departmentName]'));

        //子部门下拉
        FinancialService.getChildDeparment(scenic.$searchArea.find('input[name=childDepartmentName]'));

        //搜索按钮事件
        scenic.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            scenic.listScenic(0);
        });

        //状态框选择事件
        scenic.$tab.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            scenic.listScenic(0);
        });

        // 报表内的操作
        scenic.$tab.find('.T-list').on('click', '.T-option', function(event) {
            event.preventDefault();
            var $that = $(this);
                args.pageNo = 0;
                args.scenicId = $that.closest('tr').data('id');
                args.scenicName = $that.closest('tr').data('name');
            if ($that.hasClass('T-check')) {
                // 对账
                scenic.scenicCheck(args);
            } else if ($that.hasClass('T-clear')) {
                // 结算
                args.isAutoPay = 0;
                scenic.scenicClear(args);
            }
        });
    };

    //对账
    scenic.scenicCheck = function(args,$tab){
        if (!!$tab) {
            args.scenicName = $tab.find("input[name=scenicName]").val();
            args.scenicId = $tab.find("input[name=scenicId]").val();
            args.accountInfo = $tab.find("input[name=accountInfo]").val();
            args.startDate = $tab.find("input[name=startDate]").val();
            args.endDate = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.find("input[name=accountStatus]").val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
            args.startCheck = $tab.find('.T-checkStartTime').val();
            args.endCheck = $tab.find('.T-checkEndTime').val();
        }
        // 修正页码
        args.pageNo = args.pageNo || 0;
        args.sortType = "auto";
        $.ajax({
            url:KingServices.build_url("financial/financialScenic","listScenicAccount"),
            type:"POST",
            data:{ searchParam : JSON.stringify(args) },
            success:function(data){
                if(showDialog(data)){
                    var fhList = data.financialScenicListData;
                    data.financialScenicListData = FinancialService.isGuidePay(fhList);
                    data.scenicName = args.scenicName;
                    if(scenic.checkTemp && scenic.checkTemp.length > 0){
                        data.financialScenicListData = FinancialService.getCheckTempData(data.financialScenicListData,scenic.checkTemp);
                        data.sumSettlementMoney = scenic.checkTemp.sumSttlementMoney;
                        data.sumUnPayedMoney = scenic.checkTemp.sumUnPayedMoney;
                    }
                    var html = scenicChecking(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-checking", "景区对账", html)) {
                        scenic.$checkTab = $("#tab-" + menuKey + "-checking-content");
                        if(scenic.checkTemp && scenic.checkTemp.length > 0){
                            scenic.$checkTab.data('isEdited',true);
                        }
                        scenic.initCheck(args,scenic.$checkTab); 
                        validator = (new FinRule(0)).check(scenic.$checkTab.find(".T-checkList"));                       

                        //取消对账权限过滤
                        FinancialService.checkAuthFilter(scenic.$checkTab.find(".T-checkTr"),scenic.$checkTab.find(".T-checkList").data("right"));
                    } else {
                       scenic.$checkTab.data('next',args);
                    }
                    //绑定翻页组件
                    laypage({
                        cont: scenic.$checkTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                var temp = FinancialService.checkSaveJson(scenic.$checkTab,scenic.checkTemp,new FinRule(0));
                                if(!temp){
                                    return false;
                                } else {
                                    scenic.checkTemp = temp;
                                    scenic.$checkTab.data('isEdited',false);
                                    args.pageNo = obj.curr-1;
                                    scenic.scenicCheck(args);
                                }
                                
                            }
                        }
                    });
                }
            }
        });
    };

    scenic.initCheck = function(args,$tab){
        scenic.init_event(args,$tab,"check");
        FinancialService.updateUnpayMoney($tab, new FinRule(0));

        //搜索下拉事件
        $tab.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            args.pageNo = 0;
            scenic.scenicCheck(args,$tab);
        });
        //搜索按钮事件
        $tab.find('.T-search').off().on('click', function(event) {
            event.preventDefault();
            args.pageNo = 0;
            scenic.scenicCheck(args,$tab);
        });

        //导出报表事件 btn-hotelExport
        $tab.find(".T-btn-export").click(function(){
            var argsData = {
                scenicId: args.scenicId, 
                accountStatus: $tab.find('input[name=accountStatus]').val(),
                accountInfo : $tab.find("input[name=accountInfo]").val(),
                startDate: $tab.find('input[name=startDate]').val(),
                endDate: $tab.find('input[name=endDate]').val(),
                accountStatus : args.accountStatus,
                isConfirmAccount : $tab.find(".T-check-status").find("button").data("value"),
                startCheck : $tab.find('.T-checkStartTime').val(),
                endCheck : $tab.find('.T-checkEndTime').val(),
                businessName: args.businessName,
                businessGroupId: args.businessGroupId,
                groupName: args.groupName,
                groupId: args.groupId
            };
            console.log(argsData);
            FinancialService.exportReport(argsData,"exportArrangeScenicFinancial");
        });

        //复选框事件初始化
        FinancialService.initCheckBoxs($tab.find(".T-checkAll"),$tab.find(".T-checkList tr .T-checkbox"));

        //确认对账按钮事件
        $tab.find(".T-saveCheck").click(function(){ 
            validator = (new FinRule(0)).check($tab.find(".T-checkList"));
            if (!validator.form()) { return; }
            FinancialService.changeUncheck($tab.find('.T-checkTr'), function(){
                scenic.saveChecking($tab,args);
            });
        });
    };

    /**
     * 对外付款接口
     * @param  {object} options 付款参数
     * @return {[type]}         [description]
     */
    scenic.initPay = function(args) {
        if(args.isCheck){
            scenic.scenicCheck(args);
        } else {
            args.isOuter = true;
            args.isAutoPay = 2;
            scenic.scenicClear(args);
        }
    }
    //结算
    scenic.scenicClear = function(args,$tab){
        if (!!$tab) {
            args.scenicName = $tab.find("input[name=scenicName]").val();
            args.scenicId = $tab.find("input[name=scenicId]").val();
            args.accountInfo = $tab.find("input[name=accountInfo]").val();
            args.startDate = $tab.find("input[name=startDate]").val();
            args.endDate = $tab.find("input[name=endDate]").val();
            args.accountStatus = $tab.find("input[name=accountStatus]").val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
            args.startCheck = $tab.find('.T-checkStartTime').val();
            args.endCheck = $tab.find('.T-checkEndTime').val();
        }
        if(args.autoPay == 1){
            args.isAutoPay = 0;
        }
        if(args.isAutoPay == 1){
            args.sumCurrentPayMoney = scenic.$clearTab.find('input[name=sumPayMoney]').val();
        }
        args.page = args.page || 0;
        args.sortType = "auto";
        $.ajax({
            url:KingServices.build_url("financial/financialScenic","listScenicAccount"),
            type:"POST",
            data:{ searchParam : JSON.stringify(args) },
            success:function(data){
                if(showDialog(data)){
                    data.scenicName = args.scenicName;
                    if (args.isAutoPay == 1 && scenic.$clearTab) {
                        scenic.clearTempData = data.autoPaymentJson;
                    }

                    //暂存数据读取
                    if(scenic.clearTempSumDate){
                        data.sumPayMoney = scenic.clearTempSumDate.sumPayMoney;
                        data.sumPayType = scenic.clearTempSumDate.sumPayType;
                        data.sumPayRemark = scenic.clearTempSumDate.sumPayRemark;
                        data.bankNo = scenic.clearTempSumDate.bankNo;
                        data.bankId = scenic.clearTempSumDate.bankId;
                        data.voucher = scenic.clearTempSumDate.voucher;
                        data.billTime = scenic.clearTempSumDate.billTime;
                    }
                    data.isOuter = scenic.isOuter = !!args.isOuter || scenic.isOuter;
                    data.isAutoPay = (args.autoPay == 1) ? 1 : args.isAutoPay;
                    var resultList = data.financialScenicListData;
                    data.financialScenicListData = FinancialService.isGuidePay(resultList);
                    data.financialScenicListData = FinancialService.getTempDate(data.financialScenicListData,scenic.clearTempData);
                    var html = scenicClearing(data);
                    
                    var validator;
                    // 初始化页面
                    if (Tools.addTab(menuKey + "-clearing", "景区付款", html)) {
                        scenic.$clearTab = $("#tab-" + menuKey + "-clearing-content");
                        if(scenic.clearTempData.length > 0){
                            scenic.$clearTab.data('isEdited',true);
                        }
                        scenic.initClear(args,scenic.$clearTab); 
                        validator = (new FinRule(args.isOuter ? 3 : 1)).check(scenic.$clearTab.find('.T-clearList'));  
                    } else {
                        scenic.$clearTab.data('next',args);
                    }
                    //绑定翻页组件
                    laypage({
                        cont: scenic.$clearTab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                var tempJson = FinancialService.clearSaveJson(scenic.$clearTab,scenic.clearTempData, new FinRule(3));
                                if(tempJson){
                                    scenic.clearTempData = tempJson;
                                    var sumPayMoney = parseInt(scenic.$clearTab.find('input[name=sumPayMoney]').val());
                                        sumPayType = parseInt(scenic.$clearTab.find('select[name=sumPayType]').val());
                                    scenic.clearTempSumDate = {
                                        sumPayMoney : sumPayMoney,
                                        sumPayType : sumPayType,
                                        sumPayRemark : scenic.$clearTab.find('input[name=remark]').val(),
                                        bankNo : (sumPayType == 0) ? scenic.$clearTab.find('input[name=cash-number]').val() : scenic.$clearTab.find('input[name=card-number]').val(),
                                        bankId : (sumPayType == 0) ? scenic.$clearTab.find('input[name=cash-id]').val() : scenic.$clearTab.find('input[name=card-id]').val(),
                                        voucher : scenic.$clearTab.find('input[name=credentials-number]').val(),
                                        billTime : scenic.$clearTab.find('input[name=tally-date]').val()
                                    }
                                }
                                scenic.$clearTab.data('isEdited',false);
                                args.pageNo = obj.curr-1;
                                args.autoPay = (args.autoPay == 1) ? args.autoPay : args.isAutoPay;
                                args.isAutoPay = (args.isAutoPay == 1) ? 0 : args.isAutoPay;
                                scenic.scenicClear(args);
                            }
                        }
                    });
                }
            }
        });
    };

    scenic.initClear = function(args,$tab){
        scenic.init_event(args,$tab,"clear");
        //搜索下拉事件
        $tab.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            args.pageNo = 0;
            scenic.scenicClear(args,$tab);
        });
        //搜索事件
        $tab.find(".T-search").off().click(function(){
            args.pageNo = 0;
            scenic.scenicClear(args,$tab);
        });

        FinancialService.initPayEvent($tab);
        //保存结算事件
        $tab.find(".T-saveClear").click(function(){
            if (!(new FinRule(scenic.isOuter ? 3 : 1)).check($tab).form()) { return; }
            scenic.saveClear($tab,args);
        });

        var payingCheck = new FinRule(2).check($tab);

        //自动下账
        $tab.find(".T-clear-auto").click(function(){
            var autoPayJson = FinancialService.autoPayJson(args.scenicId,$tab,new FinRule(scenic.isOuter ? 3 : 1));
            if(!autoPayJson){return false;}

            var startDate = $tab.find("input[name=startDate]").val(),
                endDate = $tab.find("input[name=endDate]").val();
            FinancialService.autoPayConfirm(startDate,endDate,function(){
                var payType = $tab.find('select[name=sumPayType]').val();
                scenic.clearTempSumDate = {
                    id : args.scenicId,
                    sumPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                    sumPayType : payType,
                    sumPayRemark : $tab.find('input[name=remark]').val(),
                    bankNo : (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val(),
                    bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                    voucher : $tab.find('input[name=credentials-number]').val(),
                    billTime : $tab.find('input[name=tally-date]').val()
                };
                args.isAutoPay = 1;
                scenic.scenicClear(args,$tab);
            });
        });

        scenic.$clearTab.find(".T-cancel-auto").off().on("click",function(){
            scenic.clearTempSumDate = false;
            scenic.clearTempData = false;
            scenic.$clearTab.data('isEdited',false);
            args.isAutoPay = 0;
            args.autoPay = 0;
            scenic.scenicClear(args);
        });

        FinancialService.updateSumPayMoney($tab,new FinRule(scenic.isOuter ? 3 : 1));
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
    scenic.saveChecking = function($tab,args,tabArgs){
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(scenic.$checkTab,scenic.checkTemp,new FinRule(0),true);
        if(!checkSaveJson){ return false; }

        $.ajax({
            url:KingServices.build_url("financial/financialScenic","saveAccountChecking"),
            type:"POST",
            data:{ scenicJson : checkSaveJson },
            success:function(data){
                if(showDialog(data)){
                    showMessageDialog(data.message,function(){
                        scenic.checkTemp = false;
                        $tab.data('isEdited',false);
                        if(argumentsLen === 1){
                            Tools.closeTab(menuKey + "-checking");
                            scenic.listScenic(scenic.searchData.pageNo);
                        } else {
                            scenic.scenicCheck(args);
                        }
                    });
                }
            }
        });
    };

    scenic.saveClear = function($tab,args,tabArgs){
        var argumentsLen = arguments.length,
            clearSaveJson = FinancialService.clearSaveJson($tab,scenic.clearTempData, new FinRule(scenic.isOuter ? 3 : 1),true),
            payType = $tab.find('select[name=sumPayType]').val();
            searchParam = {
                sumCurrentPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                payType : payType,
                payRemark : $tab.find('input[name=remark]').val(),
                bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                voucher : $tab.find('input[name=credentials-number]').val(),
                billTime : $tab.find('input[name=tally-date]').val()
            };
        if(!clearSaveJson){ return false; }
        $.ajax({
            url:KingServices.build_url("financial/financialScenic","saveAccountSettlement"),
            type:"POST",
            data:{
                scenicJson : clearSaveJson,
                searchParam : JSON.stringify(searchParam)
            },
            success:function(data){
                if(showDialog(data)){
                    showMessageDialog(data.message,function(){
                        scenic.clearTempData = false;
                        scenic.clearTempSumDate = false;
                        $tab.data('isEdited',false);
                        if(argumentsLen === 1){
                            Tools.closeTab(menuKey + "-clearing");
                            scenic.listScenic(scenic.searchData.pageNo);
                        }else{
                            args.isAutoPay = (args.isAutoPay == 1) ? 0 : args.isAutoPay;
                            args.autoPay = 0;
                            scenic.scenicClear(args);
                        }
                    }); 
                }
            }
        });
    };

    scenic.init_event = function(args,$tab,option) {
        if (!!$tab && $tab.length === 1) {
            var validator = (new FinRule(option == "check" ? 0 : (scenic.isOuter ? 3 : 1))).check($tab);
            Tools.setDatePicker($tab.find(".T-time"), true);
            Tools.setDatePicker($tab.find(".T-checkTime"), true);

            // 监听修改
            $tab.find(".T-" + option + "List").off('change').on('change',"input",function(event) {
                event.preventDefault();
                $(this).closest('tr').data("change",true);
                $tab.data('isEdited', true);
            });
            $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
				event.preventDefault();
                if(option == "check"){
                    scenic.checkTemp = false;
                    scenic.scenicCheck($tab.data('next'),$tab);
                } else if(option == "clear"){
                    args.isAutoPay = (args.isAutoPay == 1) ? 0 : args.isAutoPay;
                    scenic.clearTempData = false;
                    scenic.clearTempSumDate = false;
                    scenic.scenicClear($tab.data('next'),$tab);
                }
			})
            // 监听保存，并切换tab
            .on('switch.tab.save', function(event,tab_id,title,html) {
                event.preventDefault();
                if(option == "check"){
                    scenic.saveChecking($tab,$tab.data('next'),[tab_id,title,html]);
                } else if(option == "clear"){
                    scenic.saveClear($tab,$tab.data('next'),[tab_id,title,html]);
                }
            })
            // 保存后关闭
            .on('close.tab.save', function(event) {
                event.preventDefault();
                if(option == "check"){
                    scenic.saveChecking($tab);
                } else if(option == "clear"){
                    scenic.saveClear($tab);
                }
            })
            .on(CLOSE_TAB_SAVE_NO, function(event) {
                event.preventDefault();
                if(option == "clear"){
                    scenic.clearTempData = false;
                    scenic.clearTempSumDate = false;
                }else if(option == "check"){
                    scenic.checkTemp = false;
                }
            });

            scenic.getScenicList($tab.find("input[name=scenicName]"));
            //报表内的操作
            scenic.listOption($tab);

            //关闭页面事件
            FinancialService.closeTab(menuKey + "-" + option + "ing");
        }
    };

    /**
     * 绑定景区事件
     * @param  {object} $obj 绑定对象
     * @return {[type]}      [description]
     */
    scenic.getScenicList = function($obj) {
        if (!!scenic.scenicList) {
            scenic.getQueryList($obj);
        } else {
            $.ajax({
               url:KingServices.build_url("financial/financialScenic","listSumFinancialScenic"),
                type:"POST",
                data:{ searchParam : JSON.stringify({
                    scenicId: '-1'
                }) },
                showLoading: false,
                success: function(data){
                    if (showDialog(data)) {
                        scenic.scenicList = data.scenicNameList;
                        scenic.getQueryList($obj);
                    }
                }
            });
        }
    };

    scenic.getQueryList = function($obj){
        var isMainList = !$obj;

        if (!$obj || $obj.length == 0) {
            $obj = scenic.$tab.find(".T-chooseScenic");
        }

        var list = scenic.scenicList
            hasItem = !!list && list.length > 0;

        if (!hasItem) {
            console.info('绑定下拉菜单时，没有列表数据');
            return;
        }

        for(var i=0;i<list.length;i++){
            list[i].id = list[i].scenicId;
            list[i].value = list[i].scenicName;
        }

        var all = {
            id : "",
            value : "全部"
        }, $tab = $obj.closest('.tab-pane-menu');
        if (isMainList && list[0].value != '全部')  {
            list.unshift(all);
        } else if (!isMainList && list[0].value === '全部') {
            list.shift(all);
        }        
        var name = $obj.val();
        //景区 
        $obj.autocomplete({
            minLength: 0,
            source : list,
            change: function(event,ui) {
                if(!isMainList){
                    $obj.val(name);
                } else{
                    if (!ui.item)  {
                        $obj.nextAll('input[name="scenicId"]').val('');
                    }
                }
            },
            select: function(event,ui) {
                $obj.trigger('change');
                $obj.blur().nextAll('input[name="scenicId"]').val(ui.item.id);
                if (!isMainList) {
                    $tab.find('input[name="accountInfo"]').val('');
                    $tab.find('.T-insuranceId').val(ui.item.id);
                }
                setTimeout(function() {
                    $tab.find('.T-search').trigger('click');
                }, 0);
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
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
                FinancialService.viewBillImage(this);
            } else if ($that.hasClass('T-payedDetail')) {
                // 已付明细
                scenic.payedDetail(id);
            } else if ($that.hasClass('T-needPayDetail')) {
                // 应收明细
                scenic.needPayDetail(id);
            } else if($that.hasClass('T-payRequest')){
                KingServices.getPayment($(this).data("preid"));
            }
        });
    };

    exports.init = scenic.initModule;
    exports.initPayment = scenic.initPay;
});
