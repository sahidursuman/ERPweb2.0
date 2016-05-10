/**
 * 财务管理--付款申请
 * 
 * by 廖佳玲 2016-05-06
 */
define(function(require, exports) {
	var menuKey = "funancial_paymentRequisition",
		listTemplate = require("./view/list"),
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
		Pay.getList(0,{startTime : dateJson.startDate,endTime : dateJson.endDate,accountStatus:2});
	};

	Pay.getList = function(page,args){
		var args = args || [];
		if(Pay.$tab && arguments.length === 1){
			args = {
				type : Pay.$tab.find('.T-business-type').val(),
				accountType : Pay.$tab.find('.T-accountType').val(),
				startTime : Pay.$tab.find('.T-startTime').val(),
				endTime : Pay.$tab.find('.T-endTime').val(),
				unitName : Pay.$tab.find('.T-unitName').val(),
				resourceName : Pay.$tab.find('.T-resourceName').val(),
				accountStatus : Pay.$tab.find(".T-finance-status").find("button").data("value")
			}
		}
		args.pageNo = page || 0;

		$.ajax({
			url: KingServices.build_url("account/paymentRecored", "findPager"),
			type: 'POST',
			data: args,
		})
		.done(function(data) {
			if(showDialog(data)){
				Pay.searchData = args;
				Tools.addTab(menuKey,"付款申请",listTemplate(data));
				Pay.$tab = $("#tab-" + menuKey + "-content");
				Pay.getSumData(args);
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
                            Pay.getList(obj.curr - 1,args);
                        }
                    }
                });
			}
		});
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
                Pay.$tab.find('.T-needPay').text(data.total.needPays);
                Pay.$tab.find('.T-payed').text(data.total.payeds);
                Pay.$tab.find('.T-unpay').text(data.total.unpays);
			}
		});
	};

	Pay.initList = function(){
		Tools.setDatePicker(Pay.$tab.find(".date-picker"), true);
        //状态框选择事件
        Pay.$tab.find(".T-finance-status").off().on('click', 'a', function(event) {
            event.preventDefault(); //阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            Pay.getList(0);
        });

        //搜索按钮事件
        Pay.$tab.find(".T-btn-search").off().on('click',function(event) {
            event.preventDefault();
            Pay.getList(0);
        });

        Pay.$tab.find(".T-list").on('click',".T-pay",function(event) {
            event.preventDefault();
            Pay.getPayment($(this).closest('tr').data('id'));
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
				if(Tools.addTab(menuKey+"_pay","付款",payTemplate(data))){
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
                        if (argLen === 1) {
                            Tools.closeTab(menuKey + "_pay");
                            Pay.getList(Pay.searchData.pageNo);
                        } else {
                            Pay.getPayment(id);
                        }
                    });
                }
            }
        });
	};

	exports.init = Pay.initModule;
});