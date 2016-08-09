/**
 * 财务管理--付款申请
 * 
 * by 廖佳玲 2016-05-06
 */
define(function(require, exports) {
	var menuKey = "funancial_paymentRequisition",
		listHeaderTemplate = require("./view/listHeader"),
		listTableTemplate = require("./view/listTable"),
		payTemplate = require("./view/pay"),
		payedDetailTempLate = require("./view/payedDetail");

	var Pay = {
		$tab : false,
		searchData : false
	};
	/**
	 * 初始化模块
	 */
	Pay.initModule = function(){
		var dateJson = FinancialService.getInitDate();
		Pay.getListHeader(0,{startTime : dateJson.startDate,endTime : dateJson.endDate,accountStatus:2});
	};

    Pay.getListHeader = function(page,args){
        args = Pay.getArgs(page,args);
        var data = {};
        data.searchParam = args;
        if(Tools.addTab(menuKey,"付款申请",listHeaderTemplate(data))){
            Pay.getList(page,args);
        } else {
            Pay.$tab.data("next",args);
        } 

        Pay.$tab = $("#tab-" + menuKey + "-content");
        //监听搜索区修改
        Pay.$tab.find('.T-search-area').off().on('change', 'input,select', function(event) {
            event.preventDefault();
            Pay.$tab.data('searchEdit', true);
        });
    };

	Pay.getList = function(page,args){
        args = Pay.getArgs(page,args);
		$.ajax({
			url: KingServices.build_url("account/paymentRecored", "findPager"),
			type: 'POST',
			data: args,
		})
		.done(function(data) {
			if(showDialog(data)){
				Pay.searchData = args;
				Pay.$tab = $("#tab-" + menuKey + "-content");
                if(Pay.checkTemp && Pay.checkTemp.length > 0){
                    data.result = FinancialService.getCheckTempData(data.result,Pay.checkTemp);
                    var total = Pay.$tab.data("total");
                    total.unpays = Pay.checkTemp.sumUnPayedMoney;
                    Pay.$tab.data("total",total);
                }

                var html = listTableTemplate(data);
                html = Tools.filterMoney(html);
                html = Tools.filterUnPoint(html);
                Pay.$tab.find('.T-list').html(html);
                Pay.$tab.find('.T-sumItem').text("共计 " + data.searchParam.totalCount + " 条记录");
				
                if(!Pay.$tab.data("searchEdit") && Pay.$tab.data("total")){
                    Pay.loadSumData();
                } else {
                    Pay.getSumData(args);
                }
                Pay.$tab.data('searchEdit',false);
				
				if(args.pageNo == 0){
					Pay.initList();
				}

				// 绑定翻页组件
                laypage({
                    cont: Pay.$tab.find('.T-pagenation'),
                    pages: data.searchParam.totalPage,
                    curr: (args.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) {
                            var temp = FinancialService.checkSaveJson(Pay.$tab,Pay.checkTemp,new FinRule(0));
                            if(!temp){
                                return false;
                            } else {
                                Pay.checkTemp = temp;
                                Pay.$tab.data('isEdited',false);
                                Pay.getList(obj.curr - 1,args);
                            }
                        }
                    }
                });
			}
		});
	};

    Pay.getArgs = function(page,args){
        args = args || [];
        if(Pay.$tab && args.length == 0){
            args = {
                type : Pay.$tab.find('.T-business-type').val(),
                accountType : Pay.$tab.find('.T-accountType').val(),
                startTime : Pay.$tab.find('.T-startTime').val(),
                endTime : Pay.$tab.find('.T-endTime').val(),
                unitName : Pay.$tab.find('.T-unitName').val(),
                resourceName : Pay.$tab.find('.T-resourceName').val(),
                accountStatus : Pay.$tab.find(".T-finance-status").find("button").data("value")
            }
            Pay.checkTemp = false;
            Pay.$tab.data('total', false);
        }
        args.pageNo = page || 0;
        if(Pay.$tab && Pay.$tab.data("searchEdit")){
            args.pageNo = 0;
        }
        return args;
    };

	//获取统计数据
	Pay.getSumData = function(args){
		$.ajax({
			url: KingServices.build_url("account/paymentRecored", "findTotal"),
			type: 'POST',
			data: args,
		})
		.done(function(data) {
			if(showDialog(data)){
                Pay.$tab.data('total', data.total);
                Pay.loadSumData();
                Pay.$tab.find('.T-needPay').text(data.total.needPays);
                Pay.$tab.find('.T-payed').text(data.total.payeds);
                Pay.$tab.find('.T-unpay').text(data.total.unpays);
			}
		});
	};
    Pay.loadSumData = function(){
        var total = Pay.$tab.data("total");
        Pay.$tab.find('.T-needPay').text(total.needPays);
        Pay.$tab.find('.T-payed').text(total.payeds);
        Pay.$tab.find('.T-unpay').text(total.unpays);
    };

    Pay.loadSumData = function(){
        var total = Pay.$tab.data('total');
        Pay.$tab.find('.T-needPay').text(total.needPays);
        Pay.$tab.find('.T-payed').text(total.payeds);
        Pay.$tab.find('.T-unpay').text(total.unpays);
    };

	Pay.initList = function(){
		Tools.setDatePicker(Pay.$tab.find(".date-picker"), true);
        //状态框选择事件
        Pay.$tab.find(".T-finance-status").off().on('click', 'a', function(event) {
            event.preventDefault(); //阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prevAll('button').data('value', $that.data('value')).children('span').text($that.text());
            Pay.$tab.data('searchEdit',true);
            Pay.getList(0);
        });

        //搜索按钮事件
        Pay.$tab.find(".T-btn-search").off().on('click',function(event) {
            event.preventDefault();
            Pay.$tab.data('searchEdit',false);
            Pay.$tab.data('total',false);
            Pay.getList(0);
        });

        Pay.$tab.find(".T-list").off().on('click',".T-pay",function(event) {
            event.preventDefault();
            Pay.getPayment($(this).closest('tr').data('id'));
        });

        //复选框事件初始化
        FinancialService.initCheckBoxs(Pay.$tab.find(".T-checkAll"),Pay.$tab.find(".T-checkList tr .T-checkbox"));
        //确认对账按钮事件
        Pay.$tab.find(".T-saveCheck").off().click(function(){ 
            FinancialService.changeUncheck(Pay.$tab.find(".T-checkTr"),function(){
                Pay.saveChecking(Pay.$tab);
            });
        });

        
        // 监听修改
        Pay.$tab.find(".T-checkList").off('change').on('change',"input,textarea",function(event) {
            event.preventDefault();
            $(this).closest('tr').data("change",true);
            Pay.$tab.data('isEdited', true);
        });
        Pay.$tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
            event.preventDefault();
            Pay.checkTemp = false;
            Pay.$tab.data('total', false);
            Pay.getListHeader(Pay.$tab.data('next').pageNo,Pay.$tab.data('next'));
        })
        // 保存后关闭
        .on('close.tab.save', function(event) {
            event.preventDefault();
            Pay.saveChecking(Pay.$tab);
        }) 
        // 监听保存，并切换tab
        .on('switch.tab.save', function(event,tab_id,title,html) {
            event.preventDefault();
            Pay.saveChecking(Pay.$tab,Pay.$tab.data('next'));
        }).on(CLOSE_TAB_SAVE_NO, function(event) {
            event.preventDefault();
            Pay.checkTemp = false;
            Pay.$tab.data('total', false);
        });
        FinancialService.updateUnpayMoney(Pay.$tab,new FinRule(0));

	};

    //审核数据保存
    Pay.saveChecking = function($tab,args){
        var argumentsLen = arguments.length,
            checkSaveJson = FinancialService.checkSaveJson(Pay.$tab,Pay.checkTemp,new FinRule(0),true);
        if(!checkSaveJson){ return false; }

        $.ajax({
            url:KingServices.build_url("account/paymentRecored","auditorRealNeedPay"),
            type:"POST",
            data:{ realNeedPayList : checkSaveJson },
            success:function(data){
                var result = showDialog(data);
                if(result){
                    showMessageDialog(data.message,function(){
                        Pay.checkTemp = false;
                        $tab.data('isEdited',false);
                        $tab.data('total',false);
                        if(argumentsLen === 1){
                            Pay.getListHeader(0);
                        } else {
                            Pay.getListHeader(args.pageNo,args);
                        }
                    });
                }
            }
        });
    };

	//付款
	Pay.getPayment = function(id){
		$.ajax({
			url: KingServices.build_url("account/paymentRecored", "edit"),
			type: 'POST',
			data: {id: id},
		})
		.done(function(data) {
			if(showDialog(data)){
				if(Tools.addTab(menuKey+"_pay","支付预付款",payTemplate(data))){
					var $tab = $("#tab-" + menuKey + "_pay-content");
					Pay.initEvent($tab);
				} else {
					$("#tab-" + menuKey + "_pay-content").data('next',id);
				}
				
			}
		});
	};

	Pay.initEvent = function($tab){
		FinancialService.initPayEvent($tab);
		$tab.off('change').on('change',"input",function(event) {
            event.preventDefault();
            $tab.data('isEdited', true);
        });
        $tab.off().on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            Pay.savePayment($tab,$tab.data('next'));
        })
        .on(SWITCH_TAB_BIND_EVENT, function() {
        	Pay.getPayment($tab.data('next'));
        })
        .on(CLOSE_TAB_SAVE, function(event) {
            Pay.savePayment($tab);
        });

        $tab.on('click', '.T-action', function(event) {
        	event.preventDefault();
        	var $this = $(this),
        		id = $tab.find('.T-savePayment').data('id');
        	if($this.hasClass('T-payedDetail')){
        		Pay.payedDetail(id);
        	} else if($this.hasClass('T-savePayment')){
        		Pay.savePayment($tab,id);
        	}
        });

        //关闭页面事件
        FinancialService.closeTab(menuKey + "_pay");
	};

	//已付金额明细
    Pay.payedDetail = function(id) {
        $.ajax({
            url: KingServices.build_url("account/paymentRecored", "findDetail"),
            type: "POST",
            data: {
                id: id
            },
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = payedDetailTempLate(data);
                    layer.open({
                        type: 1,
                        title: "已付金额明细",
                        skin: 'layui-layer-rim',
                        area: '1000px',
                        zIndex: 1028,
                        content: html,
                        scrollbar: false
                    });
                }
            }
        });
    };

	//保存付款
	Pay.savePayment = function($tab,id){
		var argLen = arguments.length,
			check =  new FinRule(5).check($tab),
			validator = (new FinRule(4)).check($tab);
    	if(!check.form() || !validator.form()){ return false; }
		$.ajax({
            url: KingServices.build_url("account/paymentRecored", "save"),
            type: "POST",
            data: {
                id : $tab.find('.T-savePayment').data('id'),
                payed : $tab.find('input[name=payMoney]').val(),
                payType : $tab.find('select[name=preType]').val(),
                remark : $tab.find('input[name=remark]').val(),
                bankId : $tab.find('input[name=cash-id]').val() || $tab.find('input[name=card-id]').val(),
                number : $tab.find('input[name=credentials-number]').val(),
                date :$tab.find('input[name=tally-date]').val()
            },
            success: function(data) {
                if (showDialog(data)) {
                    showMessageDialog("保存成功！", function() {
                        $tab.data('isEdited', false);
                        Pay.getList(Pay.searchData.pageNo);
                        if (argLen === 1) {
                            Tools.closeTab(menuKey + "_pay");
                        } else {
                            Pay.getPayment(id);
                        }
                    });
                }
            }
        });
	};

	exports.init = Pay.initModule;
    exports.getPayment = Pay.getPayment;
});