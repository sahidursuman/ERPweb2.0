/**
 * 财务管理--购物账务
 *
 * by 廖佳玲 2016.03.15
 */
define(function(require, exports) {
    var listTemplate = require("./view/list"),
        checkTemplate = require("./view/innerTransferInChecking"),
        clearTemplate = require("./view/InnerTransferInClearing"),
        clearTableTemplate = require("./view/clearingTable"),
        payedDetailTemplate = require('./view/innerTransferIncome'),
        checkDetailTemplate = require('./view/innerTransferInCheckDetail'),
        viewGroupTemplate = require('./view/viewTouristGroup'),
        menuKey = "financial_innerTransfer_in";

    var FinTransIn = {
        $tab: false,
        clearTempData : false,
        isOut : false
    }

    /**
     * 初始化模块
     */
    FinTransIn.initModule = function() {
    	var dates = FinancialService.getInitDate();
            args = {
            	pageNo : 0,
            	startAccountTime : dates.startDate,
            	endAccountTime : dates.endDate,
            	accountStatus : 2 
            };
        FinTransIn.getList(args);
    };

    /**
     * 获取购物账务列表，初始化列表页面
     * @param  {int} page 页码
     */
    FinTransIn.getList = function(args, $tab) {
        if (!!$tab) {
            args = {
                startAccountTime: $tab.find('input[name=startDate]').val(),
                endAccountTime: $tab.find('input[name=endDate]').val(),
                accountStatus : $tab.find(".T-finance-status").find("button").data("value"),
                businessGroupId : $tab.find('input[name=businessGroupId]').val()
            }
            var businessGroupName = $tab.find('input[name=businessGroupName]').val().trim();
            args.businessGroupName = businessGroupName == '全部' ? '' : businessGroupName;
        }
        args.pageNo = args.page || 0;
        args.sortType = "auto";
        args = FinancialService.getChangeArgs(args,FinTransIn.$tab);
        $.ajax({
            url: KingServices.build_url("account/innerTransferIn","listInnerTransferIncome"),
            type: 'post',
            data: args
        }).done(function(data) {
            if (showDialog(data)) {
                Tools.addTab(menuKey,"内转转入",listTemplate(data));
                // 绑定事件
                FinTransIn.$tab = $tab = $('#tab-' + menuKey + '-content');
                FinTransIn.initList(args,$tab);
                if(FinTransIn.groupList){
                    FinTransIn.loadGroupList(FinTransIn.$tab.find('input[name=businessGroupName]'));
                } else {
                    FinTransIn.getQuery(FinTransIn.$tab.find('input[name=businessGroupName]'));
                }
                
				FinTransIn.getSumData(data.sumInnerTransferIncomeList[0],FinTransIn.$tab);
                // 缓存页面
                FinTransIn.listPageNo = args.pageNo;
                // 绑定翻页组件
                laypage({
                    cont: $tab.find('.T-pagenation'),
                    pages: data.totalPage, //总页数
                    curr: (data.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) { // 避免死循环，第一次进入，不调用页面方法
                            FinTransIn.getList({pageNo : obj.curr - 1}, $tab);
                        }
                    }
                });
            }
        });
    };

    //获取合计金额
	FinTransIn.getSumData = function(data,$tab){
		$tab.find('.T-sumCount').text((data.sumAdultCount || 0) + " 大 " + (data.sumChildCount || 0) + " 小");
        $tab.find('.T-sumInnerInMoney').text(data.sumTransNeedPayMoney);
        $tab.find('.T-sumStMoney').text(data.sumSettlementMoney);
        $tab.find('.T-sumReceiveMoney').text(data.sumAlreadyIncomeMoney);
        $tab.find('.T-sumUnReceivedMoney').text(data.sumUnIncomeMoney);
	};

    //获取首页搜索框的数据
	FinTransIn.getQuery = function($obj){
        $.ajax({
            url:KingServices.build_url('account/innerTransferIn','getQueryTerms'),
            type:'POST',
            showLoading:false,
            success:function(data){
                var result = showDialog(data);
                if(result){
                    var businessGroupList = data.businessGroupList;
                    if(businessGroupList.length > 0){
                        for(var i = 0;i<businessGroupList.length;i++){
                            businessGroupList[i].value = businessGroupList[i].name;
                        }
                        FinTransIn.groupList = JSON.stringify(businessGroupList);
                        FinTransIn.loadGroupList($obj);
                    };
                }
            }
        });
	};

    FinTransIn.loadGroupList = function($obj){
        if(!!$obj){
            $obj.autocomplete({
                minLength:0,
                source : FinancialService.parseList(FinTransIn.groupList),
                change:function(event,ui){
                    if(ui.item == null){
                        var $div = $obj.closest('div');
                        $obj.find('input[name=toBusinessGroupId]').val('');
                    }
                },
                select:function(event,ui){
                    $obj.trigger('change');
                    var $div = $obj.closest('div');
                    $div.find('input[name=toBusinessGroupId]').val(ui.item.id);
                }
            }).on("click",function(){
                $obj.autocomplete('search', '');
            });
        }
    };

    //初始化列表页面的事件绑定
    FinTransIn.initList = function(args,$tab) {
        //搜索下拉事件
        $tab.find('.T-finance-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prevAll('button').data('value', $this.data('value')).children('span').text($this.text());
            FinTransIn.getList({pageNo : 0},$tab);
        });
        $tab.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            FinTransIn.getList({pageNo : 0}, $tab);
        });
        Tools.setDatePicker($tab.find('.datepicker'), true);
        FinancialService.searchChange($tab);
        // 报表内的操作
        $tab.find('.T-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $this = $(this),
                argsData = {
                    businessGroupId: $this.closest('tr').data('id'),
                    businessGroupName: $this.closest('tr').data('name'),
                    startAccountTime: args.startAccountTime,
                    endAccountTime: args.endAccountTime,
                    accountStatus : args.accountStatus
                };
            if ($this.hasClass('T-check')) {
                // 对账
                FinTransIn.getCheckList(argsData,null,1);
            } else if ($this.hasClass('T-clear')) {
                // 结算
                FinTransIn.getCheckList(argsData,null,2);
            }
        });
    };

    //对账
    FinTransIn.getCheckList = function(args,$tab,type) {
        if (!!$tab) {
        	args.lineProductId = $tab.find('input[name=lineProductId]').val();
        	args.lineProductName = $tab.find('input[name=lineProductName]').val();
        	args.receiveUserId = $tab.find('input[name=receiveUserId]').val();
        	args.receiveUserName = $tab.find('input[name=receiveUserName]').val();
        	args.orderNumber = $tab.find('input[name=orderNumber]').val();
            args.contactInfo = $tab.find('input[name=contactInfo]').val();
        	args.startAccountTime = $tab.find('input[name=startDate]').val();
        	args.endAccountTime = $tab.find('input[name=endDate]').val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
        }
        args.pageNo = args.pageNo || 0;
        args.receiveUserName = (args.receiveUserName == "全部") ? "" : args.receiveUserName;
        args.lineProductName = (args.lineProductName == "全部") ? "" : args.lineProductName;
        
        $.ajax({
            url:KingServices.build_url("account/innerTransferIn","listInnerTransferIncomeDetails"),
            type: "POST",
            data: args
        }).done(function(data) {
            if (showDialog(data)) {
                data.businessGroupName = args.businessGroupName;
                data.isOut = FinTransIn.isOut;
                for(var i = 0; i < data.innerTransferIncomeDetailsList.length; i++){
                    data.innerTransferIncomeDetailsList[i].tgMemberList = JSON.stringify(data.innerTransferIncomeDetailsList[i].tgMemberList);
                }
                if(type == 1) {
                    data.innerTransferIncomeDetailsList = FinancialService.getCheckTempData(data.innerTransferIncomeDetailsList,FinTransIn.checkTemp,true);
                }
                var tabId = menuKey + ((type == 1) ? "-checking" : "-clearing"),
                    title = (type == 1) ? "内转转入对账" : "内转转入收款",
                    html = (type == 1) ? checkTemplate(data) : clearTemplate(data);
                if (Tools.addTab(tabId, title,html)) {
                    if(type == 1){
                        FinTransIn.$checkTab = $('#tab-' + menuKey + '-checking-content');
                        if(FinTransIn.checkTemp && FinTransIn.checkTemp.length > 0){
                            FinTransIn.$checkTab.data('isEdited',true);
                        }
                        FinTransIn.initCheck(args,FinTransIn.$checkTab,1);
                        //取消对账权限过滤
                        var checkTr = FinTransIn.$checkTab.find(".T-checkTr");
                        var rightCode = FinTransIn.$checkTab.find(".T-checkList").data("right");
                        FinancialService.checkAuthFilter(checkTr,rightCode);
                    } else {
                        FinTransIn.$clearTab = $('#tab-' + menuKey + '-clearing-content');
                        FinTransIn.getClearList(args,FinTransIn.$clearTab);
                    }
                } else {
                    if(type == 1){
                        FinTransIn.$checkTab.data('next',args);
                    } else {
                        FinTransIn.$clearTab.data('next',args);
                    }
                }
                var currTab = (type == 1) ? FinTransIn.$checkTab : FinTransIn.$clearTab;

                // 绑定翻页组件
                laypage({
                    cont: currTab.find('.T-pagenation'),
                    pages: data.totalPage, //总页数
                    curr: (args.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) {
                            currTab.data('isEdited',false);
                            args.pageNo = obj.curr - 1;
                            if(type == 1){
                                var temp = FinancialService.checkSaveJson(FinTransIn.$checkTab,FinTransIn.checkTemp,new FinRule(0),false,true);
                                if(!temp){
                                    return false;
                                } else {
                                    FinTransIn.checkTemp = temp;
                                    FinTransIn.checkTemp.backMoney = FinTransIn.$checkTab.find('.T-sumBackMoney').text();
                                    FinTransIn.checkTemp.settlementMoney = FinTransIn.$checkTab.find('.T-sumSettlementMoney').text();
                                    FinTransIn.checkTemp.unIncomeMoney = FinTransIn.$checkTab.find('.T-sumUnReceivedMoney').text()
                                    FinTransIn.$checkTab.data('isEdited',false);
                                    FinTransIn.getCheckList(args,null,1);
                                }
                            } else {
                                FinTransIn.getClearList(args,currTab);
                            }
                        }
                    }
                });
            }
        });
    };

    //付款table数据
    FinTransIn.getClearList = function(args,$tab) {
        if (!!$tab) {
            args.lineProductId = $tab.find('input[name=lineProductId]').val();
            args.lineProductName = $tab.find('input[name=lineProductName]').val();
            args.receiveUserId = $tab.find('input[name=receiveUserId]').val();
            args.receiveUserName = $tab.find('input[name=receiveUserName]').val();
            args.orderNumber = $tab.find('input[name=orderNumber]').val();
            args.contactInfo = $tab.find('input[name=contactInfo]').val();
            args.startAccountTime = $tab.find('input[name=startDate]').val();
            args.endAccountTime = $tab.find('input[name=endDate]').val();
            args.isConfirmAccount = $tab.find(".T-check-status").find("button").data("value");
        }
        args.pageNo = args.pageNo || 0;
        args.receiveUserName = (args.receiveUserName == "全部") ? "" : args.receiveUserName;
        args.lineProductName = (args.lineProductName == "全部") ? "" : args.lineProductName;
        
        $.ajax({
            url:KingServices.build_url("account/innerTransferIn","listInnerTransferIncomeDetails"),
            type: "POST",
            data: args
        }).done(function(data) {
            if (showDialog(data)) {
                data.innerTransferIncomeDetailsList = FinancialService.getTempDate(data.innerTransferIncomeDetailsList,FinTransIn.clearTempData);
                for(var i = 0; i < data.innerTransferIncomeDetailsList.length; i++){
                    data.innerTransferIncomeDetailsList[i].tgMemberList = JSON.stringify(data.innerTransferIncomeDetailsList[i].tgMemberList);
                }
                $tab.find('.T-clearList').html(clearTableTemplate(data));
                $tab.find('.T-recordSize').text(data.recordSize);
                FinTransIn.initCheck(args,$tab,2);
                if(FinTransIn.clearTempData){
                    $tab.data('isEdited',true);
                }
                // 绑定翻页组件
                laypage({
                    cont: $tab.find('.T-pagenation'),
                    pages: data.totalPage, //总页数
                    curr: (args.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) {
                            FinTransIn.clearTempData = FinancialService.clearSaveJson($tab,FinTransIn.clearTempData,new FinRule(4));
                            $tab.data('isEdited',false);
                            args.pageNo = obj.curr - 1;
                            FinTransIn.getClearList(args,$tab);
                        }
                    }
                });
            }
        });
    };

    //对账事件初始化
    FinTransIn.initCheck = function(args,$tab,type){
        FinTransIn.init_event(args,$tab,type);
        FinTransIn.getGroupList($tab,type);

        //搜索下拉事件
        $tab.find('.T-check-status').off().on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prevAll('button').data('value', $this.data('value')).children('span').text($this.text());
            args.pageNo = 0;
            if(type == 1){
                FinTransIn.getCheckList(args,$tab,1);
            } else {
                FinTransIn.getClearList(args,$tab);
            }
        });
    	//搜索顶部的事件绑定
        $tab.find('.T-btn-search').off().on('click', function(event) {
            event.preventDefault();
            args.pageNo = 0;
            if(type == 1){
                FinTransIn.getCheckList(args,$tab,1);
            } else {
                FinTransIn.getClearList(args,$tab);
            }
        });
        if(type == 1){
            FinancialService.initCheckBoxs($tab.find(".T-selectAll"),$tab.find('.T-checkbox'));
            //计算返款金额
            FinancialService.updateMoney_checking($tab,3);

            //导出报表事件
            $tab.find(".T-btn-export").on('click',function(event){
                var argsData = { 
                        businessGroupId : args.businessGroupId,
                        lineProductId : $tab.find('input[name=lineProductId]').val(),
                        lineProductName : $tab.find('input[name=lineProductName]').val(),
                        orderNumber : $tab.find('input[name=orderNumber]').val(),
                        contactInfo : $tab.find('input[name=contactInfo]').val(),
                        receiveUserId : $tab.find('input[name=receiveUserId]').val(),
                        receiveUserName : $tab.find('input[name=receiveUserName]').val(),
                        startAccountTime : $tab.find('input[name=startDate]').val(),
                        endAccountTime : $tab.find('input[name=endDate]').val(),
                        accountStatus : args.accountStatus,
                        isConfirmAccount : $tab.find(".T-check-status").find("button").data("value")
                    };
                argsData.lineProductName = argsData.lineProductName === "全部" ? "" : argsData.lineProductName;
                argsData.receiveUserName = argsData.receiveUserName === "全部" ? "" : argsData.receiveUserName;
                FinancialService.exportReport(argsData,"exportArrangeInnerTransferInFinancial");
            });

            //确认对账事件
            $tab.find(".T-checking").off().on('click',function(event){
                if(!(new FinRule(6).check($tab)).form()){return;}
                FinancialService.changeUncheck($tab.find('.T-checkList tr'),function(){
                    FinTransIn.saveCheck($tab,args);
                });
            });
        } else {
            FinancialService.updateSumPayMoney($tab,new FinRule(FinTransIn.isOut ? 3 : 4));
            FinancialService.initPayEvent($tab);

            //确认收款事件
            $tab.find(".T-saveClear").off().on('click',function(event){
                if(!(new FinRule(FinTransIn.isOut ? 3 : 4).check($tab)).form()){return;}
                FinTransIn.saveClear($tab,args);
            });

            $tab.find('.T-btn-autofill').off().on('click',function(){
                if ($(this).hasClass('btn-primary')) {
                    if (new FinRule(2).check($tab).form()) {
                        var isAutoPay = FinancialService.autoPayJson("",$tab,new FinRule(2));
                        if(!isAutoPay){return false;}
                        FinancialService.autoPayConfirm($tab.find('input[name=startDate]').val(),$tab.find('input[name=endDate]').val(), function() {
                            FinTransIn.autoFillMoney($tab,args);
                        });
                    }
                } else {
                    FinTransIn.clearTempData = false;
                    FinTransIn.setAutoFillEdit($tab,false);
                    FinTransIn.getClearList(args,$tab);
                }
            });
        }
    };

    FinTransIn.autoFillMoney = function($tab,args){
        var payType = $tab.find('select[name=sumPayType]').val(),
            argsData = {
                lineProductId : $tab.find('input[name=lineProductId]').val(),
                lineProductName : $tab.find('input[name=lineProductName]').val(),
                businessGroupId : $tab.find('input[name=businessGroupId]').val(),
                businessGroupName : args.businessGroupName,
                startAccountTime : $tab.find('input[name=startDate]').val(),
                endAccountTime : $tab.find('input[name=endDate]').val(),
                autoPayMoney : $tab.find('input[name=sumPayMoney]').val(),
                receiveUserId : $tab.find('input[name=receiveUserId]').val(),
                receiveUserName : $tab.find('input[name=receiveUserName]').val(),
                payType : payType,
                bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                voucher : $tab.find('input[name=credentials-number]').val(),
                billTime : $tab.find('input[name=tally-date]').val(),
                sumRemark : $tab.find('input[name=sumRemark]').val(),
                accountStatus : args.accountStatus
            };
        $.ajax({
            url: KingServices.build_url('account/innerTransferIn','automaticDown'),
            type: 'post',
            data: argsData,
        })
        .done(function(data) {
            if (showDialog(data)) {
                FinTransIn.clearTempData = data.autoPayList;
                FinTransIn.getClearList(argsData,$tab);
                FinTransIn.setAutoFillEdit($tab,true);
            }
        });
    };
    //设置按钮样式
    FinTransIn.setAutoFillEdit = function($tab,disable){
        var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
        }
        $tab.find('.T-btn-autofill').html(disable?'<i class="ace-icon fa fa-times"></i> 取消下账': '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');
    };

    FinTransIn.init_event = function(args,$tab,type){
        FinTransIn.getSumDataIn(args,$tab);
    	Tools.setDatePicker($tab.find(".date-picker"), true);
        FinTransIn.getAutocomData($tab,args);

        var $list = (type == 1) ? $tab.find(".T-checkList") : $tab.find(".T-clearList"),
            saveFn = (type == 1) ? FinTransIn.saveCheck : FinTransIn.saveClear;

        // 监听修改
        $list.off('change').on('change', "input", function(event) {
            event.preventDefault();
            $(this).closest('tr').data("change", true);
            $tab.data('isEdited', true);
        });

        $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            if(type == 1){
                FinTransIn.checkTemp = false;
                FinTransIn.getCheckList($tab.data('next'),false,1);
            } else {
                FinTransIn.clearTempData = false;
                FinTransIn.getClearList($tab.data('next'),$tab);
            }
        })
        // 监听保存，并切换tab
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            saveFn($tab,$tab.data('next'),[tab_id, title, html]);
        })
        // 保存后关闭
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            saveFn($tab);
        })
        .on(CLOSE_TAB_SAVE_NO, function(event) {
            event.preventDefault();
            if(type == 2){
                FinTransIn.clearTempData = false;
            } else if(type == 1){
                FinTransIn.checkTemp = false;
            }
        });

    	//关闭事件
        FinancialService.closeTab(menuKey + (type == 1 ? "-checking" : "-clearing") );

        //查看游客小组
        $tab.off('click.action').on("click.action",".T-action",function(){
            var $this = $(this),
                id = $this.closest('tr').data('id');
            if($this.hasClass('T-seeGroup')){
                FinTransIn.viewGroup($this);
            } else if($this.hasClass('T-needPayDetail')){
                FinTransIn.viewNeedPayDetail(id);
            } else if($this.hasClass('T-payedDetail')){
                FinTransIn.viewPayedDetail(id);
            }
        });
    };

    //获取统计数据
	FinTransIn.getSumDataIn = function(args,$tab){
		$.ajax({
			url:KingServices.build_url("account/innerTransferIn","getStatistics"),
			data:args,
			type:'POST',
			showLoading:false,
			success:function(data){
				var result = showDialog(data);
				if(result){
                    if(FinTransIn.checkTemp && FinTransIn.checkTemp.length > 0){
                        data.backMoney = FinTransIn.checkTemp.backMoney;
                        data.settlementMoney = FinTransIn.checkTemp.settlementMoney;
                        data.unIncomeMoney = FinTransIn.checkTemp.unIncomeMoney;
                    }
					$tab.find('.T-sumTransCount').text((data.sumAdultCount || 0) + '大' + (data.sumChildCount || 0) + '小');
					$tab.find('.T-sumTransNeedPayMoney').text(data.transInMoney);
					$tab.find('.T-sumPayedMoney').text(data.getedMoney);
					$tab.find('.T-sumBackMoney').text(data.backMoney);
					$tab.find('.T-sumSettlementMoney').text(data.settlementMoney);
					$tab.find('.T-sumUnPayedMoney').text(data.confirmedMoney);
					$tab.find('.T-sumUnReceivedMoney').text(data.unIncomeMoney);
				}
			}
		});
	};

    //获取接收人、线路名称列表
    FinTransIn.getAutocomData = function($tab,args){
        $.ajax({
            url:KingServices.build_url("account/innerTransferIn","getQueryTermsForDetails"),
            type:'POST',
            data:args,
            success:function(data){
                if(showDialog(data)){
                    FinTransIn.getCheckQuery(data.receiveUserList,$tab.find('input[name=receiveUserName]'));
                    FinTransIn.getCheckQuery(data.lineProductList,$tab.find('input[name=lineProductName]'));
                }
            }
        });
    };

    FinTransIn.getCheckQuery = function(dataList,$obj){
        if(dataList.length > 0){
            for(var i=0;i<dataList.length;i++){
                dataList[i].value = dataList[i].name
            }
            dataList.unshift({ id: '', value: '全部' });
        } else {
            layer.tips('没有内容', $obj, {
                tips: [1, '#3595CC'],
                time: 2000
            });
        }

        $obj.autocomplete({
            minLength:0,
            source: dataList,
            change:function(event,ui){
                if(ui.item == null){
                    $obj.next().val('');
                }
            },
            select:function(event,ui){
                $obj.next().val(ui.item.id);
            }
        }).off('click').on('click',function(){
            $obj.autocomplete('search', '');
        });
    };

	//查看游客小组
	FinTransIn.viewGroup = function($obj){
		var data = { memberList : $obj.data("list") };
        if(!data){
			showMessageDialog("游客小组不存在，请检查！");
            return false;
		}
		layer.open({
			type : 1,
			title :"查看小组",
			skin : 'layui-layer-rim',
			area : "850px", 
			zIndex : 1028,
			content : viewGroupTemplate(data),
			scrollbar: false 
		});
	};

    //应收明细
    FinTransIn.viewNeedPayDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/innerTransferIn","getReceivableDetails"),
            data:{ id:id },
            type:'POST',
            success:function(data){
                if(showDialog(data)){
                    layer.open({
                        type : 1,
                        title :"应收金额明细",
                        skin : 'layui-layer-rim',
                        area : "60%", 
                        zIndex : 1028,
                        content : checkDetailTemplate(data),
                        scrollbar: false 
                    });
                }
            }
        });
    };

    //查看已付明细
    FinTransIn.viewPayedDetail = function(id){
        $.ajax({
            url:KingServices.build_url("account/innerTransferIn","getReceivedDetails"),
            data:{ id:id },
            type:'POST',
            success:function(data){
                if(showDialog(data)){
                    layer.open({
                        type : 1,
                        title :"已收金额明细",
                        skin : 'layui-layer-rim',
                        area : "60%", 
                        zIndex : 1028,
                        content : payedDetailTemplate(data),
                        scrollbar: false 
                    });
                }
            }
        });
    };

    FinTransIn.saveCheck = function($tab,args,tabArgs) {
        var argLen = arguments.length,
            json = FinancialService.checkSaveJson(FinTransIn.$checkTab,FinTransIn.checkTemp,new FinRule(0),true,true);
        if(!json){ return false; }        

        $.ajax({
            url: KingServices.build_url("account/innerTransferIn","saveReconciliation"),
            type: "POST",
            data: { reconciliation: json }
        }).done(function(data) {
            if (showDialog(data)) {
                showMessageDialog(data.message, function() {
                    FinTransIn.checkTemp = false;
                    $tab.data('isEdited', false);
                    if (argLen === 1) {
                        Tools.closeTab(menuKey + "-checking");
                        FinTransIn.getList({pageNo : FinTransIn.listPageNo},FinTransIn.$tab);
                    } else {
                        FinTransIn.getCheckList(args,false,1);
                    }
                });
            }
        });
    };

    FinTransIn.saveClear = function($tab,args,tabArgs) {
        var argLen = arguments.length,
            json = FinancialService.clearSaveJson($tab,FinTransIn.clearTempData,new FinRule(FinTransIn.isOut ? 3 : 4),true);
        if(!json){ return false; }
        
        var payType = $tab.find('select[name=sumPayType]').val();
        $.ajax({
            url: KingServices.build_url('account/innerTransferIn','saveReceivables'),
            type: "POST",
            data: { 
                receivables:json,
                payType:payType,
                bankId:(payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                voucher:$tab.find('input[name=credentials-number]').val(),
                billTime:$tab.find('input[name=tally-date]').val(),
                remark:$tab.find('input[name=sumRemark]').val()
            }
        }).done(function(data) {
            if (showDialog(data)) {
                $tab.data('isEdited', false);
                FinTransIn.clearTempData = false;
                showMessageDialog(data.message, function() {
                    if (argLen === 1) {
                        Tools.closeTab(menuKey + "-clearing");
                        FinTransIn.getList({pageNo : FinTransIn.listPageNo},FinTransIn.$tab);
                    } else{
                        FinTransIn.getCheckList(args,false,2);
                    }
                });
            }
        });
    };

    FinTransIn.getGroupList = function($tab,type){
        var $obj = $tab.find('input[name=businessGroupName]'),
            name = $obj.val();;
        $obj.autocomplete({
            minLength: 0,
            source : JSON.parse(FinTransIn.groupList),
            change: function(event,ui) {
                if (!ui.item)  {
                    $obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo : 0,
                    businessGroupId: ui.item.id,
                    businessGroupName: ui.item.value,
                    startAccountTime: $tab.find("input[name=startDate]").val(),
                    endAccountTime: $tab.find("input[name=endDate]").val(),
                    accountStatus : $tab.find("input[name=accountStatus]").val()
                };
                FinTransIn.getCheckList(args,null,type)
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
    };

    FinTransIn.initPay = function(options){
        FinTransIn.isOut = true;
        FinTransIn.getQuery();
        FinTransIn.getCheckList(options,null,2); 
    };

    // 暴露方法
    exports.init = FinTransIn.initModule;
    exports.initPayment = FinTransIn.initPay;
});
