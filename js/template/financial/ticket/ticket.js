/**
 * 财务管理--票务账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "financial_ticket",
		listTemplate = require("./view/list"),
		billImagesTemplate = require("./view/billImages"),
		ticketChecking = require("./view/TicketChecking"),
		ticketClearing = require("./view/TicketClearing"),
		blanceRecords = require("./view/ticketRecords"),
		payDetailsTemplate = require("./view/payDetails"),
		viewDetailsTemplate = require("./view/viewDetails"),
		payingTableTemplate = require("./view/ticketPayingTable"),
		checkMenuKey = menuKey + '_checking',
		clearMenuKey = menuKey + '_clearing';

	var Ticket = {
		$tab : false,
		ticketNameList : []
	};

	Ticket.initModule = function(){
		Ticket.$tab = null;
		Ticket.getList();
	};

	Ticket.getList = function(page){
		var date = new Date(),
        year = date.getFullYear(),
        month = Tools.addZero2Two(date.getMonth() + 1),
        day = Tools.addZero2Two(date.getDate()),
        args = {
			pageNo : (page || 0),
			ticketId : "",
			startDate : year + "-" + month + "-01",
			endDate : year + "-" + month + "-" + day,
			ticketName : ""
		};
		if(!!Ticket.$tab){
			var name = Ticket.$tab.find('.T-search-name').val();
			args = {
				pageNo : (page || 0),
				ticketId : Ticket.$tab.find('.T-search-name').data('id'),
				ticketName : name == "全部" ? '' : name,
				startDate : Ticket.$tab.find('.T-search-start-date').val(),
				endDate : Ticket.$tab.find('.T-search-end-date').val()
			};
		}
		$.ajax({
			url : KingServices.build_url('account/arrangeTicketFinancial', 'listSumFinancialTicket'),
			type : 'POST',
            data : {searchParam : JSON.stringify(args)}
		}).done(function(data){
			if(showDialog(data)){
				//缓存数据
				Ticket.ticketNameList = data.ticketNameList;
				//打开TAB
				Tools.addTab(menuKey, "票务账务", listTemplate(data));
				Ticket.$tab = $("#tab-"+menuKey+"-content");
				//绑定事件
				Ticket.init_event(Ticket.$tab);
				// 缓存页面
				Ticket.listPageNo = args.pageNo;
				// 绑定翻页组件
				laypage({
				    cont: Ticket.$tab.find('.T-pagenation'), 
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Ticket.getList(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};

	Ticket.init_event = function($tab){
		/**
		 * 搜索顶部的事件绑定
		 */
		var $searchArea = $tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');

		Ticket.getTicketNameList($searchArea.find('.T-search-name'));
		FinancialService.setDatePicker($datepicker);

		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			Ticket.getList();
		});
		// 报表内的操作
		$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if ($that.hasClass('T-checking'))  {
				// 对账
				Ticket.checking(id);
			} else if ($that.hasClass('T-balance'))  {
				// 结算
				Ticket.clearing(id);
			}
		});
	};

	Ticket.getTicketNameList = function($obj){
		$obj.autocomplete({
			minLength: 0,
			change : function(){
				if (!ui.item)  {
		            $(this).data('id', '');
		        }
			},
			select: function(event, ui) {
		        $(this).blur().data('id', ui.item.id);
		    }
		}).on('click', function(event){
			if (!$obj.data('ajax')) {  // 避免重复请求
				for(var i=0; i<Ticket.ticketNameList.length; i++){
					Ticket.ticketNameList[i].id = Ticket.ticketNameList[i].ticketId;
					Ticket.ticketNameList[i].value = Ticket.ticketNameList[i].ticketName;
				}
				Ticket.ticketNameList.unshift({id:'', value: '全部'});
			    $obj.autocomplete('option', 'source', Ticket.ticketNameList);
			    $obj.autocomplete('search', '');
			    $obj.data('ajax', true);
			}else{
			    $obj.autocomplete('search', '');
			}
		});
	};

	Ticket.checking = function(id){
		Ticket.$checkingTab = null;
		Ticket.checkingId = id;
		Ticket.checkingList(0, id);
	};

	Ticket.checkingList = function(page, id, start, end){
		var args = {
			pageNo : (page || 0),
			ticketId : id || Ticket.checkingId,
			accountInfo : "",
			startDate : start || Ticket.$tab.find('.T-search-start-date').val(),
			endDate : end || Ticket.$tab.find('.T-search-end-date').val()
		};
		$.ajax({
			url : KingServices.build_url('account/arrangeTicketFinancial', 'listTicketAccount'),
			type : "POST",
			data : {searchParam : JSON.stringify(args)}
		}).done(function(data){
			if(showDialog(data)){
				Tools.addTab(checkMenuKey, "票务对账", ticketChecking(data));
				Ticket.$checkingTab = $("#tab-" + checkMenuKey + "-content");
				Ticket.check_event(Ticket.$checkingTab);
				// 绑定翻页组件
				laypage({
				    cont: Ticket.$checkingTab.find('.T-pagenation'), 
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Ticket.checkingList(obj.curr -1);
				    	}
				    }
				});
			}
		});
	};

	Ticket.check_event = function($tab){
		var validator = rule.check($tab);
		// 处理关闭与切换tab
        $tab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
        .on('change', '.T-checkList', function() {
            $tab.data('isEdited', true);
        })
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            Ticket.saveCheckData($tab, [tab_id, title, html]);
        })
        .on(SWITCH_TAB_BIND_EVENT, function() {
            Ticket.checkingList();
        })
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (!validator.form()) {
                return;
            }
            Ticket.saveCheckData($tab);
        });
		var validator = rule.check($tab),
			$searchArea = $tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');

		FinancialService.setDatePicker($datepicker);
		FinancialService.updateUnpayMoney($tab, rule);

		$searchArea.find(".T-btn-search").on('click', function(event){
			event.preventDefault();
			Ticket.checkingList(0);
		});
		$tab.find('.T-checkTr').on('change', function(){
			$(this).data('change', true);
		});

		$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if ($that.hasClass('T-payDetails'))  {
				// 已付金额
				Ticket.payDetails(id);
			} else if ($that.hasClass('T-view-receipts'))  {
				// 单据
				Ticket.viewReceipts(id);
			}else if($that.hasClass('T-view-details')){
				// 查看对账
				Ticket.viewDetails(id);
			}
		});

		$tab.find(".T-btn-close").on('click', function(event){
			event.preventDefault();
			if(!!$tab.data('isEdited')){
				showSaveConfirmDialog($('#confirm-dialog-message'), "内容已经被修改，是否保存?", function(){
					Ticket.saveCheckData($tab);
				}, function(){
					Tools.closeTab(checkMenuKey);
                	Ticket.getList(Ticket.listPageNo);
				});
			}else{
				Tools.closeTab(checkMenuKey);
                Ticket.getList(Ticket.listPageNo);
			}
		});
		$tab.find(".T-btn-save").on('click', function(event){
			event.preventDefault();
		 	if (!validator.form()) {
                return;
            }
			Ticket.saveCheckData($tab);
		});
	};

	Ticket.payDetails = function(id){
		if(!!id){
			$.ajax({
				url : KingServices.build_url('account/arrangeTicketFinancial', 'getPayedMoneyDetail'),
				data : "POST",
				data : {id : id}
			}).done(function(data){
				if(showDialog(data)){
					layer.open({
		                type: 1,
		                title: "已付金额明细",
		                skin: 'layui-layer-rim',
		                area: '1024px',
		                zIndex: 1028,
		                content: payDetailsTemplate(data),
		                scrollbar: false
		            });
				}
			});			
		}
	};

	Ticket.viewReceipts = function(id){
		
	};

	Ticket.viewDetails = function(id){
		if(!!id){
			$.ajax({
				url : KingServices.build_url('account/arrangeTicketFinancial', 'getNeedPayDetail'),
				data : "POST",
				data : {id : id}
			}).done(function(data){
				if(showDialog(data)){
					layer.open({
		                type: 1,
		                title: "应付金额明细",
		                skin: 'layui-layer-rim',
		                area: '1024px',
		                zIndex: 1028,
		                content: viewDetailsTemplate(data),
		                scrollbar: false
		            });
				}
			});
		}
	};

	Ticket.saveCheckData = function($tab, tabArgs){
		var json = FinancialService.checkSaveJson($tab, rule);
		if(json.length > 0){
			$.ajax({
				url : KingServices.build_url('account/arrangeTicketFinancial', 'saveAccountChecking'),
				type : "POST",
				data : {ticketJson : json}
			}).done(function(data){
				if(showDialog(data)){
					$tab.data('isEdited', false);
	                showMessageDialog($('#confirm-dialog-message'), data.message, function() {
	                    if (!!tabArgs) {
	                        Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
	                        Ticket.checkList($tab, 1);
	                    } else {
	                        Tools.closeTab(checkMenuKey);
	                        Ticket.getList(Ticket.listPageNo);
	                    }
	                });
	            }
			});
		}else{
			showMessageDialog($('#confirm-dialog-message'), '您当前未进行任何操作！');
		}
	};

	Ticket.clearing = function(id, name){
		Ticket.$clearingTab = null;
		Ticket.clearingId = id;
		Ticket.clearingList(0, id);
		Ticket.balanceName = name;
	};

	Ticket.clearingList = function(page, id, start, end){
		var args = {
			pageNo : (page || 0),
			ticketId : id || Ticket.clearingId,
			startDate : start || Ticket.$tab.find('.T-search-start-date').val(),
			endDate : end || Ticket.$tab.find('.T-search-end-date').val(),
			accountInfo : ""
		};
		if(Ticket.$clearingTab){
			args = {
				pageNo : (page || 0),
				ticketId : id || Ticket.clearingId,
				startDate : Ticket.$clearingTab.find('.T-search-start-date').val(),
				endDate : Ticket.$clearingTab.find('.T-search-end-date').val(),
				accountInfo : Ticket.$clearingTab.find('.T-search-type').val()
			};
		}

		$.ajax({
			url : KingServices.build_url('account/arrangeTicketFinancial', 'listTicketAccount'),
			type : "POST",
			data : {searchParam : JSON.stringify(args)}
		}).done(function(data){
			if(showDialog(data)){
				data.name = Ticket.balanceName;
				Tools.addTab(clearMenuKey, "票务结算", ticketClearing(data));
				Ticket.$clearingTab = $("#tab-" + clearMenuKey + "-content");
				var html = payingTableTemplate(data);
				Ticket.$clearingTab.find('.T-checkList').html(html);
				Ticket.clear_init(Ticket.$clearingTab);
				// 绑定翻页组件
				laypage({
				    cont: Ticket.$clearingTab.find('.T-pagenation'), 
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Ticket.clearingList(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};

	Ticket.clear_init = function($tab){
		var validator = rule.check($tab);
		// 处理关闭与切换tab
        $tab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
        .on('change', '.T-checkList', function() {
            $tab.data('isEdited', true);
        })
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            Ticket.savePayingData($tab, [tab_id, title, html]);
        })
        .on(SWITCH_TAB_BIND_EVENT, function() {
            Ticket.clearingList();
        })
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (!validator.form()) {
                return;
            }
            Ticket.savePayingData($tab);
        });

		var $searchArea = $tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');

		FinancialService.setDatePicker($datepicker);

		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			Ticket.clearingList(0, Ticket.clearingId);
		});
		$tab.find('.T-records').on('click', function(event){
			event.preventDefault();
			Ticket.records();
		});

		// 报表内的操作
		$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if ($that.hasClass('T-payDetails'))  {
				// 已付金额
				Ticket.payDetails(id);
			} else if ($that.hasClass('T-view-receipts'))  {
				// 单据
				Ticket.viewReceipts(id);
			}else if($that.hasClass('T-view-details')){
				// 查看对账
				Ticket.viewDetails(id);
			}
		});
		$tab.find(".T-btn-close").on('click', function(event){
			event.preventDefault();
			if(!!$tab.data('isEdited')){
				showSaveConfirmDialog($('#confirm-dialog-message'), "内容已经被修改，是否保存?", function(){
					Ticket.savePayingData($tab);
				}, function(){
					Tools.closeTab(clearMenuKey);
                	Ticket.getList(Ticket.listPageNo);
				});
			}else{
				Tools.closeTab(clearMenuKey);
                Ticket.getList(Ticket.listPageNo);
			}
		});
		$tab.find(".T-btn-save").on('click', function(event){
			event.preventDefault();
			Ticket.savePayingData($tab);
		});

		$tab.find(".T-btn-autofill").on('click', function(event){
			event.preventDefault();
			if ($(this).hasClass('btn-primary')) {
                if (validator.form()) {
                    Ticket.autoFillMoney($tab);
                }
            } else {
                Ticket.payingJson = [];
                Ticket.setAutoFillEdit($tab, false);
            }
		})
	};

	/**
     * 自动下账业务逻辑
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    Ticket.autoFillMoney = function($tab) {
        if (!!$tab && $tab.length) {
            var $autoPayMoney = $tab.find('.T-sumPayMoney');

            var args = {
				ticketId : Ticket.clearingId,
				startDate : $tab.find('.T-search-start-date').val(),
				endDate : $tab.find('.T-search-end-date').val(),
				accountInfo : $tab.find('.T-search-type').val(),
				isAutoPay : 1,
				sumCurrentPayMoney : $tab.find('.T-sumReciveMoney').val()
            };

            $.ajax({
                    url: KingServices.build_url('account/arrangeTicketFinancial', 'listTicketAccount'),
                    type: 'post',
                    data: {searchParam : JSON.stringify(args)},
                    showLoading: false
                })
                .done(function(data) {
                    if (showDialog(data)) {
                        Ticket.payingJson = data.autoPaymentJson;
                        $tab.find('input[name="sumPayMoney"]').val(data.checkedUnPayedMoney);
                        Ticket.setAutoFillEdit($tab, true);
                    }
                });
        }
    };

    Ticket.setAutoFillEdit = function($tab, disable) {
        var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
        }

        $tab.find('.T-btn-autofill').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');;

        Ticket.getOperationList(0, $tab);

    };
    /**
     * 获取对账列表数据
     * @param  {int} pageNo 列表页码
     * @return {[type]}        [description]
     */
    Ticket.getOperationList = function(pageNo, $tab) {
        if ($tab) {
            var args = {
                pageNo: pageNo || 0,
				ticketId : Ticket.clearingId,
				startDate : $tab.find('.T-search-start-date').val(),
				endDate : $tab.find('.T-search-end-date').val(),
				accountInfo : $tab.find('.T-search-type').val()
            };

            $.ajax({
                    url : KingServices.build_url('account/arrangeTicketFinancial', 'listTicketAccount'),
					type : "POST",
					data : {searchParam : JSON.stringify(args)}
                })
                .done(function(data) {
                    if (showDialog(data)) {
                    	data.financialTicketList = FinancialService.getTempDate(data.financialTicketList, Ticket.payingJson);
                    	var html = payingTableTemplate(data);
						Ticket.$clearingTab.find('.T-checkList').html(html);

						//给全选按钮绑定事件: 未去重
                        FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));
                        // 设置记录条数及页面
                        $tab.find('.T-sumItem').text('共计' + data.recordSize + '条记录');
                        $tab.find('.T-btn-save').data('pageNo', args.pageNo);
						// 绑定翻页组件
						laypage({
						    cont: $tab.find('.T-pagenation'), 
						    pages: data.totalPage, //总页数
						    curr: (data.pageNo + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		Ticket.getOperationList(obj.curr -1);
						    	}
						    }
						});	
                    }
                });

        }
    }

	//确认收款
	Ticket.savePayingData = function($tab, tabArgs){
		var json = FinancialService.clearSaveJson($tab, Ticket.payingJson, rule);
		if (json.length) {
			var args = {
                ticketId: Ticket.clearingId,
                sumCurrentPayMoney: $tab.find('.T-sumReciveMoney').val(),
                payType: $tab.find('.T-sumPayType').val(),
                payRemark: $tab.find('.T-sumRemark').val()
			}
            $.ajax({
                    url: KingServices.build_url('account/arrangeTicketFinancial', 'saveAccountSettlement'),
                    type: 'post',
                    data: {
                    	searchParam : JSON.stringify(args),
                    	ticketJson : JSON.stringify(json)
                    },
                })
                .done(function(data) {
                    $tab.data('isEdited', false);
                    Ticket.payingJson = [];
                    showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                        if (!!tabArgs) {
                            Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                            Ticket.clearingList(0);
                        } else {
                            Tools.closeTab(clearingTab);
                            Ticket.getList(Ticket.listPageNo);
                        }
                    })
                });
        } else {
            showMessageDialog($('#confirm-dialog-message'), '您当前未进行任何操作！');
        }
	};

	exports.init = Ticket.initModule;
});