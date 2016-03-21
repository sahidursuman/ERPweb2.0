/**
 * 财务管理--票务账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports) {
	var menuKey = "financial_ticket",
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
		cacheNameList : []
	};

	Ticket.initModule = function(){
		Ticket.getList();
	};

	Ticket.getList = function(page, $tab){
		var args = FinancialService.getInitDate();
		args.pageNo = page || 0;
		args.accountStatus = 2;
		if(!!$tab){
			var Name = $tab.find('.T-search-name').val().trim();

			if(Name == "全部"){
				Name = "" ;
			}
			args.ticketId = $tab.find('.T-search-name').data('id');
			args.ticketName = Name;
			args.startDate = $tab.find('.T-search-start-date').val();
			args.endDate = $tab.find('.T-search-end-date').val();
			args.accountStatus = $tab.find(".T-finance-status").find("button").data("value")
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
				// 缓存页面
				Ticket.listPageNo = args.pageNo;
				Ticket.$tab = $tab || $("#tab-"+menuKey+"-content");
				//绑定事件
				Ticket.init_event(Ticket.$tab);
				//获取合计数据
				var sumMoneyData = {
                    settlementMoneySum:data.settlementMoneySum,
                    unPayedMoneySum:data.unPayedMoneySum,
                    payedMoneySum:data.payedMoneySum,
                    needPayMoneySum:data.needPayMoneySum
                };
                Ticket.getSumMoney(sumMoneyData,Ticket.$tab);
				// 绑定翻页组件
				laypage({
				    cont: Ticket.$tab.find('.T-pagenation'), 
				    pages: data.searchParam.totalPage, //总页数
				    curr: (data.searchParam.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Ticket.getList(obj.curr -1, Ticket.$tab);
				    	}
				    }
				});	
			}
		});
	};
	//获取合计金额
    Ticket.getSumMoney = function(data,tabId){
        tabId.find('.T-sumNeedPay').text(data.needPayMoneySum);
        tabId.find('.T-sumStMoney').text(data.settlementMoneySum);
        tabId.find('.T-sumPaiedMoney').text(data.payedMoneySum);
        tabId.find('.T-sumUnPaiedMoney').text(data.unPayedMoneySum);
    };
	Ticket.init_event = function($tab){
		/**
		 * 搜索顶部的事件绑定
		 */
		var $searchArea = $tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');

		Ticket.getTicketNameList($searchArea.find('.T-search-name'));
		Tools.setDatePicker($datepicker, true);

		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			Ticket.getList(0, $tab);
		});

		//状态框选择事件
        $searchArea.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            Ticket.getList(0, $tab);
        });

		// 报表内的操作
		$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), 
				args = {
					pageNo : 0,
					ticketId : $that.closest('tr').data('id'),
					ticketName : $that.closest('tr').data('name'),
					startDate : $tab.find('.T-search-start-date').val(),
					endDate : $tab.find('.T-search-end-date').val(),
					accountStatus : $tab.find(".T-finance-status").find("button").data("value")
				};
			if ($that.hasClass('T-checking'))  {
				// 对账
				Ticket.checkingList(args);
			} else if ($that.hasClass('T-balance'))  {
				// 结算
				Ticket.clearingList(args);
			}
		});
	};
	
	Ticket.getTicketNameList = function($obj){
		var ticketNameList = Ticket.ticketNameList;
		for(var i=0; i<ticketNameList.length; i++){
			ticketNameList[i].id = ticketNameList[i].ticketId;
			ticketNameList[i].value = ticketNameList[i].ticketName;
		}
		var all = {id:'', value: '全部'};
		Ticket.ticketNameList = ticketNameList.slice(all);
		ticketNameList.unshift(all);
		$obj.autocomplete({
			minLength: 0,
			source : ticketNameList,
			change : function(){
				if (!ui.item)  {
		            $(this).data('id', '');
		        }
			},
			select: function(event, ui) {
		        $(this).blur().data('id', ui.item.id);
		    }
		}).on('click', function(event){
			$obj.autocomplete('search', '');
		});
	};

	Ticket.checkingList = function(args,$tab){
		if(!!$tab){
			args.accountInfo = $tab.find('.T-search-type').val();
			args.startDate = $tab.find('.T-search-start-date').val();
			args.endDate = $tab.find('.T-search-end-date').val();
			args.accountStatus = $tab.find('[name=accountStatus]').val();
		}
		$.ajax({
			url : KingServices.build_url('account/arrangeTicketFinancial', 'listTicketAccount'),
			type : "POST",
			data : {searchParam : JSON.stringify(args)}
		}).done(function(data){
			if(showDialog(data)){
				data.name = args.ticketName;
				data.financialTicketList = FinancialService.isGuidePay(data.financialTicketList);
				if(Tools.addTab(checkMenuKey, "票务对账", ticketChecking(data))){
					Ticket.$checkingTab = $("#tab-" + checkMenuKey + "-content");
					Ticket.check_event(args,Ticket.$checkingTab);
				} else {
					Ticket.$checkingTab.data('next',args);
				}
				
				// 绑定翻页组件
				laypage({
				    cont: Ticket.$checkingTab.find('.T-pagenation'), 
				    pages: data.searchParam.totalPage, //总页数
				    curr: (args.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Ticket.$checkingTab.data('isEdited',false);
				    		args.pageNo = obj.curr -1;
				    		Ticket.checkingList(args);
				    	}
				    }
				});
			}
		});
	};

	Ticket.check_event = function(args,$tab){
		var validator = (new FinRule(0)).check($tab);
		Ticket.getTicketList($tab,false);
		// 处理关闭与切换tab
        $tab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
        .on('change', '.T-checkList input', function() {
        	$(this).closest('tr').data('change',true);
            $tab.data('isEdited', true);
        })
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            Ticket.saveCheckData($tab,$tab.data('next'),[tab_id, title, html]);
        })
        .on(SWITCH_TAB_BIND_EVENT, function() {
            Ticket.checkingList($tab.data('next'),$tab);
        })
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (!validator.form()) {
                return;
            }
            Ticket.saveCheckData($tab);
        });

		Tools.setDatePicker($tab.find('.datepicker'), true);
		FinancialService.updateUnpayMoney($tab, new FinRule(0));

		$tab.find(".T-btn-search").off().on('click', function(event){
			event.preventDefault();
			args.pageNo = 0;
			Ticket.checkingList(args,$tab);
		});

		$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');
			if ($that.hasClass('T-payDetails'))  {
				// 已付金额
				Ticket.payDetails(id);
			} else if ($that.hasClass('T-view-receipts'))  {
				// 单据
				Ticket.viewReceipts($tab, $that.data('billimage'));
			}else if($that.hasClass('T-view-details')){
				// 查看对账
				Ticket.viewDetails(id);
			}
		});
		//给全选按钮绑定事件: 未去重
        FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));

        //导出报表事件 btn-hotelExport
        $tab.find(".T-btn-export").click(function(){
            var argsData = { 
            	accountStatus:$tab.find('input[name=accountStatus]').val(),
                ticketId: $tab.find('input[name=ticketId]').val(),
                ticketName: $tab.find('input[name=ticketName]').val(),
                startDate: $tab.find('.T-search-start-date').val(),
                accountInfo: $tab.find('.T-search-type').val(),
                endDate: $tab.find('.T-search-end-date').val(),
                accountStatus : args.accountStatus
            };
            FinancialService.exportReport(argsData,"exportArrangeTicketFinancial");
        });

        FinancialService.closeTab(checkMenuKey);
		$tab.find(".T-saveClear").off().on('click', function(event){
			event.preventDefault();
		 	if (!validator.form()) {
                return;
            }
			FinancialService.changeUncheck($tab.find('.T-checkTr'), function(){
				Ticket.saveCheckData($tab,args);
			});
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

	Ticket.viewReceipts = function($tab, billImage){
		if(!billImage){
			return;
		}
		var WEB_IMG_URL_BIG = $tab.find(".globalAdd").data('big'),
			WEB_IMG_URL_SMALL = $tab.find(".globalAdd").data('small'),
				data = {
	    		"images":[]
    		},
    		str = billImage,
    		strs = str.split(",");
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
    	var $overflow = null;
    	layer.open({
			type : 1,
			title : "单据图片",
			skin : 'layui-layer-rim', // 加上边框
			area : '500px', // 宽高
			zIndex : 1028,
			content : billImagesTemplate(data),
			scrollbar: false, // 推荐禁用浏览器外部滚动条
			success : function() {
	    		$('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(Tools.colorbox_params);
			}
		});
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

	Ticket.saveCheckData = function($tab,args,tabArgs){
		var argLen = arguments.length,
			json = FinancialService.checkSaveJson($tab, new FinRule(0));
		if(json.length > 0){
			$.ajax({
				url : KingServices.build_url('account/arrangeTicketFinancial', 'saveAccountChecking'),
				type : "POST",
				data : {ticketJson : json}
			}).done(function(data){
				if(showDialog(data)){
					$tab.data('isEdited', false);
	                showMessageDialog($('#confirm-dialog-message'), data.message, function() {
	                    if (argLen === 1) {
	                        Tools.closeTab(checkMenuKey);
	                        Ticket.getList(Ticket.listPageNo);
	                    } else if (argLen === 2){
	                        Ticket.checkingList(args,$tab);
	                    } else if (argLen === 3){
	                    	Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
	                        Ticket.check_event(args,$tab);
	                    }
	                });
	            }
			});
		}else{
			showMessageDialog($('#confirm-dialog-message'), '没有可提交的数据！');
		}
	};

	Ticket.initPay = function(options){
		Ticket.isBalanceSource = true;
		var args = {
			pageNo : 0,
			ticketId : options.id,
			ticketName : options.name,
			startDate : options.startDate,
			endDate : options.endDate,
			accountStatus : options.accountStatus
		}
		$.ajax({
			url : KingServices.build_url('account/arrangeTicketFinancial', 'listSumFinancialTicket'),
			type : 'POST',
            data : {searchParam : JSON.stringify(args)}
		}).done(function(data){
			if(showDialog(data)){
				var ticketNameList = data.ticketNameList;
				for(var i=0; i<ticketNameList.length; i++){
					ticketNameList[i].id = ticketNameList[i].ticketId;
					ticketNameList[i].value = ticketNameList[i].ticketName;
				}
				Ticket.ticketNameList = ticketNameList;
				args.type = 1;
				Ticket.clearingList(args);
			}
		});
	};
	Ticket.clearingList = function(args,$tab){
		if(!!$tab){
			args.startDate = $tab.find('.T-search-start-date').val();
			args.endDate = $tab.find('.T-search-end-date').val();
			args.accountInfo = $tab.find('.T-search-type').val();
			args.accountStatus = $tab.find('[name=accountStatus]').val();
		}

		$.ajax({
			url : KingServices.build_url('account/arrangeTicketFinancial', 'listTicketAccount'),
			type : "POST",
			data : {searchParam : JSON.stringify(args)}
		}).done(function(data){
			if(showDialog(data)){
				data.name = args.ticketName;
				data.source = Ticket.isBalanceSource;
				if(!!args.type){data.type = args.type;}
				if(Tools.addTab(clearMenuKey, "票务付款", ticketClearing(data))){
					Ticket.$clearingTab = $("#tab-" + clearMenuKey + "-content");
					data.financialTicketList = FinancialService.isGuidePay(data.financialTicketList);
					var html = payingTableTemplate(data);
					Ticket.$clearingTab.find('.T-checkList').html(html);
					Ticket.clear_init(args,Ticket.$clearingTab);
				} else {
					Ticket.$clearingTab.data('next',args);
				}
				
				// 绑定翻页组件
				laypage({
				    cont: Ticket.$clearingTab.find('.T-pagenation'), 
				    pages: data.searchParam.totalPage, //总页数
				    curr: (args.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) { 
				    		Ticket.payingJson = FinancialService.clearSaveJson(Ticket.$clearingTab,Ticket.payingJson,new FinRule(Ticket.isBalanceSource ? 3 : 1));	
				    		Ticket.$clearingTab.data('isEdited',false);
				    		args.pageNo = obj.curr -1;
				    		Ticket.getOperationList(args,Ticket.$clearingTab);
				    	}
				    }
				});	
			}
		});
	};

	Ticket.clear_init = function(args,$tab){
		var validator = (new FinRule(Ticket.isBalanceSource ? 3 : 1)).check($tab);
		var reciveValidtor = (new FinRule(2)).check($tab);
		Ticket.getTicketList($tab,true);
		// 处理关闭与切换tab
        $tab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
        .on('change', '.T-checkList input', function() {
        	$(this).closest('tr').data("change",true);
            $tab.data('isEdited', true);
        })
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            Ticket.savePayingData($tab,$tab.data('next'),[tab_id, title, html]);
        })
        .on(SWITCH_TAB_BIND_EVENT, function() {
        	Ticket.payingJson = false;
            Ticket.clearingList($tab.data('next'),$tab);
        })
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (!validator.form()) {
                return;
            }
            Ticket.savePayingData($tab);
        })
        .on(CLOSE_TAB_SAVE_NO, function(event) {
            event.preventDefault();
            Ticket.payingJson = false;
        });

        FinancialService.initPayEvent($tab);
		Tools.setDatePicker($tab.find('.datepicker'), true);

		$tab.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			args.pageNo = 0;
			Ticket.clearingList(args,$tab);
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
				Ticket.viewReceipts($tab, $that.data('billimage'));
			}else if($that.hasClass('T-view-details')){
				// 查看对账
				Ticket.viewDetails(id);
			}
		});

		FinancialService.closeTab(clearMenuKey);
		$tab.find(".T-saveClear").on('click', function(event){
			event.preventDefault();
			Ticket.savePayingData($tab,args);
		});

		FinancialService.updateSumPayMoney($tab, new FinRule(Ticket.isBalanceSource ? 3 : 1));
		
		$tab.find(".T-btn-autofill").on('click', function(event){
			event.preventDefault();
			if(!reciveValidtor.form())return;
			if ($(this).hasClass('btn-primary')) {
                if (validator.form()) {
					var autoPayJson = FinancialService.autoPayJson(Ticket.clearingId, $tab, new FinRule(2), 0);
					if(!autoPayJson)return;
                	FinancialService.autoPayConfirm($tab.find('.datepicker').eq(0).val(), $tab.find('.datepicker').eq(1).val(),function(){
                    	Ticket.setAutoFillEdit($tab,args,true);
                	});
                }
            } else {
                Ticket.payingJson = false;
                Ticket.setAutoFillEdit($tab,args,false);
            }
		})
	};

	/**
     * 自动下账业务逻辑
     * @param  {[type]} $tab [description]
     */
    Ticket.setAutoFillEdit = function($tab,args,disable) {
        var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
            args.sumCurrentPayMoney = 0;
        }else{
        	args.isAutoPay = 1;
        	args.sumCurrentPayMoney = $tab.find('.T-sumReciveMoney').val()
        }

        $tab.find('.T-btn-autofill').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');;

        Ticket.getOperationList(args, $tab);
        FinancialService.updateSumPayMoney($tab, new FinRule(Ticket.isBalanceSource ? 3 : 1));
    };
    /**
     * 获取付款列表数据
     * @param  {int} pageNo 列表页码
     * @return {[type]}        [description]
     */
    Ticket.getOperationList = function(args, $tab) {
        if (!!$tab) {
            var def = {
                pageNo: args.pageNo || 0,
				ticketId : Ticket.clearingId,
				startDate : $tab.find('.T-search-start-date').val(),
				endDate : $tab.find('.T-search-end-date').val(),
				accountInfo : $tab.find('.T-search-type').val()
            };
            $.extend(def, args);
            $.ajax({
                    url : KingServices.build_url('account/arrangeTicketFinancial', 'listTicketAccount'),
					type : "POST",
					data : {searchParam : JSON.stringify(def)}
                })
                .done(function(data) {
                    if (showDialog(data)) {
                    	if(args.isAutoPay == 1){
                    		Ticket.payingJson = data.autoPaymentJson;
                    	}
                    	data.financialTicketList = FinancialService.isGuidePay(data.financialTicketList);
                    	data.financialTicketList = FinancialService.getTempDate(data.financialTicketList, Ticket.payingJson);
                    	var html = payingTableTemplate(data);
						Ticket.$clearingTab.find('.T-checkList').html(html);

						// 设置记录条数及页面
                        $tab.find('.T-sumItem').text('共计' + data.recordSize + '条记录');
                        if(Ticket.payingJson){
                        	$tab.data('isEdited',true);
                        }
                        $tab.find('.T-saveClear').data('pageNo', args.pageNo);
						// 绑定翻页组件
						laypage({
						    cont: $tab.find('.T-pagenation'), 
						    pages: data.searchParam.totalPage, //总页数
						    curr: (data.searchParam.pageNo + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		Ticket.payingJson = FinancialService.clearSaveJson($tab,Ticket.payingJson,new FinRule(Ticket.isBalanceSource ? 3 : 1));
						    		$tab.data('isEdited',false);
						    		args.pageNo = obj.curr -1;
						    		Ticket.getOperationList(args,$tab);
						    	}
						    }
						});	
                    }
                });

        }
    }

	//确认收款
	Ticket.savePayingData = function($tab,args,tabArgs){
		var check =  new FinRule(5).check($tab);
        if(!check.form()){ return false; }
		if ($tab.find('.T-saveClear').data('type') == 1) {
	        var reciveValidtor = (new FinRule(2)).check($tab);
	        if(!reciveValidtor.form()){
	    		return;
	        }
        };
        if(!FinancialService.isClearSave($tab)){
            return false;
        }
		var argLen = arguments.length,
			json = FinancialService.clearSaveJson($tab, Ticket.payingJson, new FinRule(Ticket.isBalanceSource ? 3 : 1));
		if (!json) { return false; }
		var payType = $tab.find('select[name=sumPayType]').val(),
			argsData = {
                ticketId: Ticket.clearingId,
                sumCurrentPayMoney: $tab.find('.T-sumReciveMoney').val(),
                payType: payType,
                payRemark: $tab.find('.T-sumRemark').val(),
                bankId : (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val(),
                voucher : $tab.find('input[name=credentials-number]').val(),
                billTime : $tab.find('input[name=tally-date]').val()
			}
        $.ajax({
            url: KingServices.build_url('account/arrangeTicketFinancial', 'saveAccountSettlement'),
            type: 'post',
            data: {
            	searchParam : JSON.stringify(argsData),
            	ticketJson : JSON.stringify(json)
            },
        })
        .done(function(data) {
            showMessageDialog($('#confirm-dialog-message'), data.message, function() {
            	$tab.data('isEdited', false);
            	Ticket.payingJson = false;
                if (argLen === 1) {
                	Ticket.getList(Ticket.listPageNo);
                } else if(argLen === 2){
                    Ticket.clearingList(args,$tab);
                } else if(argLen === 3){
                	Ticket.clearingList(args,$tab);
                }
            })
        });
	};

	Ticket.getTicketList = function($tab,type){
        var $obj = $tab.find('input[name=ticketName]'),
        	name = $obj.val();
        $obj.autocomplete({
            minLength: 0,
            source : Ticket.ticketNameList,
            change: function(event,ui) {
                if (!ui.item)  {
                	$obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo : 0,
                    ticketId : ui.item.id,
                    ticketName : ui.item.value,
                    startDate : $tab.find('.T-search-start-date').val(),
                    endDate : $tab.find('.T-search-end-date').val(),
                    accountStatus : $tab.find('input[name=accountStatus]').val()
                };
                if(type){
                	args.type = $tab.find('.T-btn-autofill').length ? 0 : 1;
                    Ticket.clearingList(args)
                } else {
                    Ticket.checkingList(args)
                }
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
    };
	//暴露方法
	exports.init = Ticket.initModule;
	exports.initPay = Ticket.initPay;
});