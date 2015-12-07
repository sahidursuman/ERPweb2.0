/**
 * 财务管理--导游账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "financial_guide",
        listTemplate = require("./view/list"),
        // 对账模板
        guideCheckingTemplate = require("./view/guideChecking"),
        checkingTableTemplate = require('./view/guideCheckingTable'),
        needPayDetailTemplate = require('./view/needPayDetail'),
        // 付款模板
        guidePayTemplate = require("./view/guidePaying"),
        payingTableTemplate = require('./view/guidePayingTable'),

        billImagesTemplate = require("./view/billImages"),
        costDetail = require("./view/costDetail"),
        guideRecords = require("./view/guideRecords"),
        checkMenuKey = menuKey+"_checking",
        payMenuKey = menuKey+"-paying";

    var FinGuide = {
    	mock: true,
		$tab: false,
		$checkingTab : false,
		checkingId : null,
		$clearTab : false,
		clearId : null
	};
	/**
	 * 初始化模块
	 */
	FinGuide.initModule = function(){
		FinGuide.$tab = null;
		FinGuide.getList(0);
	};
	/**
	 * 获取购物账务列表，初始化列表页面
	 * @param  {int} page 页码
	 */
	FinGuide.getList = function(page){
		var args = FinancialService.getInitDate();

		args.pageNo = page || 0;
		if (!!FinGuide.$tab) {
			args = {
				pageNo: (page || 0),
				guideId: FinGuide.$tab.find('.T-search-name').data('id'),
				startDate: FinGuide.$tab.find('.T-search-start-date').val(),
				endDate : FinGuide.$tab.find('.T-search-end-date').val(),
			}

			var guideName = FinGuide.$tab.find('.T-search-name').val();
			if (guideName === '全部') {
				guideName = '';
			}

			args.guideName = guideName;
		}

		$.ajax({
			url: KingServices.build_url('account/guideFinancial', 'listSumFinancialGuide'),
			type: 'POST',
			data: args,
		}).done(function(data){
			if(showDialog(data)){
				data.guideName = data.guideName || '全部';
				Tools.addTab(menuKey,"导游账务",listTemplate(data));
				// 绑定事件
				FinGuide.init_event();
				// 缓存页面
				FinGuide.listPageNo = args.pageNo;
				// 绑定翻页组件
				laypage({
				    cont: FinGuide.$tab.find('.T-pagenation'), 
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		FinGuide.getList(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};

	/**
	 * 初始化列表页面的事件绑定
	 */
	FinGuide.init_event = function(){
		FinGuide.$tab = $('#tab-' + menuKey + '-content');
		//搜索顶部的事件绑定
		var $searchArea = FinGuide.$tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');

		// 导游绑定
		FinGuide.getGuideNameList($searchArea.find('.T-search-name'), [$datepicker.eq(0).val(), $datepicker.eq(1).val()])
		// 绑定时间控件
		FinancialService.setDatePicker($datepicker).on('changeDate', function(event) {
			event.preventDefault();
			$searchArea.find('.T-search-name').data('ajax', false);
		});
		$searchArea.find('.T-search-start-date').on('changeDate', function(event) {
			event.preventDefault();
			var start = $(this).val(),
				$end = $searchArea.find('.T-search-end-date').datepicker('setStartDate', start);

			if ($end.val() < start) {
				$end.val(start);
			}
		}).trigger('changeDate');


		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			FinGuide.getList();
		});
		// 报表内的操作
		FinGuide.$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id'),
				name = $that.closest('tr').children('td').first().text();

			if ($that.hasClass('T-check'))  {
				// 对账
				FinGuide.currentId = id;
				FinGuide.initOperationModule(id, name, 0);
			} else if ($that.hasClass('T-pay'))  {
				// 结算
				FinGuide.currentId = id;
				FinGuide.initOperationModule(id, name, 1);
			}
		});
	};

	FinGuide.getGuideNameList = function($obj, valArray)  {
		$obj.autocomplete({
		    minLength: 0,
		    change: function(event, ui) {
		        if (!ui.item)  {
		            $(this).data('id', '');
		        }
		    },
		    select: function(event, ui) {
		        $(this).blur().data('id', ui.item.id);
		    }
		}).on("click",function(){
		    if (!$obj.data('ajax')) {  // 避免重复请求
		    	var args = {};

		    	if (!!valArray && valArray.length === 2) {
		    		args.startDate = valArray[0];
		    		args.endDate = valArray[1];
		    	}
		        $.ajax({
		            url : KingServices.build_url('account/guideFinancial', 'listFinancialGuideQuery'),
		            type : "POST",
		            showLoading:false,
		            data: args
		        }).done(function(data){
		            for(var i=0; i<data.guideList.length; i++){
		                data.guideList[i].value = data.guideList[i].realname;
		                data.guideList[i].id = data.guideList[i].guideId;
		            }
		            data.guideList.unshift({id:'', value: '全部'});
		            $obj.autocomplete('option', 'source', data.guideList);
		            $obj.autocomplete('search', '');

		            $obj.data('ajax', true);
		        });
		    } else {
		        $obj.autocomplete('search', '');
		    }
		});
	};

	/**
	 * 初始化对账页面
	 * @param  {int}  id         导游ID
	 * @param  {string}  id      导游的姓名
	 * @param  {Boolean} isSearchIn true: 来自搜索，false: 来自初始化
	 * @return {[type]}             [description]
	 */
	FinGuide.initOperationModule = function(id, name, type, $tab) {
		var args = FinancialService.getInitDate();

		args.guideId = id;
		if (!!$tab) { 
			var $line = $tab.find('.T-lineProductName');

			args = {
				guideId: $tab.find('.T-btn-save').data('id'),
				startDate: $tab.find('.T-search-start-date').val(),
				endDate: $tab.find('.T-search-end-date').val(),
				tripPlanNumber: $tab.find('.T-tripPlanNumber').val(),
				lineProductId: $line.data('id'),
				lineProductName: $line.val(),
			};

			if (args.lineProductName === '全部') {
				args.lineProductName = '';
			}

			name = $tab.find('.T-guideName').text();
		}

		$.ajax({
			url: KingServices.build_url('account/guideFinancial','financialGuideSumStaticsByGuideId'),
			type: 'post',
			data: args,
		})
		.done(function(data) {
			if (showDialog(data)) {
				data.guideName = name;
				data.id = id;
				data.type = type;
				data.lineProductName = data.lineProductName || '全部';
				// 临时缓存
				FinGuide.checkingTabLineProduct = data.lineProductList;

				var key = checkMenuKey, title = '导游对账', html;
				if (type) {
					key = payMenuKey, title = '导游付款';
					html = guidePayTemplate(data);
				} else {
					html = guideCheckingTemplate(data);
				}
				if (Tools.addTab(key, title, html)) {
					FinGuide.initOperationEvent($('#tab-'+ key + '-content'), type);
				}
			}
		});
		
	};

	/**
	 * 对账页面事件初始化及列表初始化
	 * @return {[type]} [description]
	 */
	FinGuide.initOperationEvent = function($tab, type) {
		// 绑定搜索
		var $searchArea = $tab.find('.T-search-area');
		
		FinGuide.getLineProduct($searchArea.find('.T-lineProductName'), FinGuide.checkingTabLineProduct);

		FinancialService.setDatePicker($searchArea.find('.datepicker'));
		$searchArea.find('.T-search-start-date').on('changeDate', function(event) {
			event.preventDefault();
			var start = $(this).val(),
				$end = $searchArea.find('.T-search-end-date').datepicker('setStartDate', start);

			if ($end.val() < start) {
				$end.val(start);
			}
		}).trigger('changeDate');
		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			var $btn = $tab.find('.T-btn-save');

			FinGuide.initOperationModule($btn.data('id'), $btn.data('name'), type, $tab);
		});

		var validator = rule.check($tab);

		// 处理关闭与切换tab
		$tab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
		.on('change', '.T-checkList', function() {
			$tab.data('isEdited', true);
		})
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html){
			event.preventDefault();
			FinGuide.saveCheckingData($tab, [tab_id, title, html]);
		})
		.on(SWITCH_TAB_BIND_EVENT, function() {
			FinGuide.initOperationEvent();			
		})
		.on(CLOSE_TAB_SAVE, function(event){
			event.preventDefault();
			if (!validator.form()) { return; }	
			FinGuide.saveCheckingData($tab);
		});

		// 计算
		if (type) {
			FinancialService.updateSumPayMoney($tab, rule);
		} else {
			FinancialService.updateUnpayMoney($tab, rule);
		}

		// 绑定表格内容元素的事件
		$tab.find('.T-checkList').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this),
				id = $that.closest('tr').data('id');

			if ($that.hasClass('T-view')) {
				// 查看应付明细
				FinGuide.viewNeedPay(id)
			} else if ($that.hasClass('T-gid')) {
				// 查看
				FinGuide.viewFeeDetail($that.data('id'));
			}
		});

		//确认按钮事件
		$tab.find(".T-btn-save").click(function(){ 
		    if (!validator.form()) { return; }
		    if (type) {
		    	FinGuide.savePayingData($tab);
		    } else {
		    	FinGuide.saveCheckingData($tab);		    	
		    }
		 });

		//关闭页面事件
		$tab.find(".T-btn-close").click(function(){
		    Tools.closeTab(Tools.getTabKey($tab.prop('id')));
		});

		// 付款时，自动下账
		if (type) {
			$tab.find('.T-btn-autofill').on('click', function(event) {
				event.preventDefault();
				if ($(this).hasClass('btn-primary')) {
					if (validator.form()) {
						FinGuide.autoFillMoney($tab);					
					}
				} else {
					FinGuide.payingJson = [];
					FinGuide.setAutoFillEdit($tab, false);
				}
			});
		}

		// 后续业务
		FinGuide.getOperationList(0, $tab);
	}

	/**
	 * 保存对账数据
	 * @param  {object} $tab    对账页面的Jquery对象
	 * @param  {array} tabArgs 翻页提示所需的切换参数
	 * @return {[type]}         [description]
	 */
	FinGuide.saveCheckingData = function($tab, tabArgs) {
		var json = FinancialService.checkSaveJson($tab, rule);

		if (json) {  // 有值
			$.ajax({
				url: KingServices.build_url('account/guideFinancial', 'operateCheckAccount'),
				type: 'post',
				data: {checkJson: json},
			})
			.done(function(data) {
				if (showDialog(data)) {
					$tab.data('isEdited', false);

					showMessageDialog($('#confirm-dialog-message'), data.message, function() {
						if (!!tabArgs)  {
							Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
							FinGuide.initOperationEvent($tab, 0);
						} else {
							Tools.closeTab(checkMenuKey);
							FinGuide.getList(FinGuide.listPageNo);
						}
					})
				}
			});
		}
	}

	/**
	 * 保存付款
	 * @param  {object} $tab    对账页面的Jquery对象
	 * @param  {array} tabArgs 翻页提示所需的切换参数
	 * @return {[type]}         [description]
	 */
	FinGuide.savePayingData = function($tab, tabArgs) {
		var json = FinancialService.clearSaveJson($tab, FinGuide.payingJson, rule);
		if (json.length) {
			$.ajax({
				url: KingServices.build_url('account/guideFinancial', 'operatePayAccount'),
				type: 'post',
				data: {
					payJson: JSON.stringify(json),
					guideId: $tab.find('.T-btn-save').data('id'),
					payType: $tab.find('.T-sumPayType').val(),
					remark: $tab.find('.T-remark').val()
				},
			})
			.done(function(data) {
				$tab.data('isEdited', false);
				FinGuide.payingJson = [];
				showMessageDialog($('#confirm-dialog-message'), data.message, function() {
					if (!!tabArgs)  {
						Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
						FinGuide.initOperationEvent($tab, 1);
					} else {
						Tools.closeTab(payMenuKey);
						FinGuide.getList(FinGuide.listPageNo);
					}
				})
			});
		} else {
			showMessageDialog($('#confirm-dialog-message'), '您当前未进行任何操作！');
		}
	};

	/**
	 * 自动下账业务逻辑
	 * @param  {[type]} $tab [description]
	 * @return {[type]}      [description]
	 */
	FinGuide.autoFillMoney = function($tab) {
		if(!!$tab && $tab.length) {
			var $line = $tab.find('.T-lineProductName'),
				$autoPayMoney = $tab.find('.T-sumPayMoney');

			var args = {
				guideId: $tab.find('.T-btn-save').data('id'),
				startDate: $tab.find('.T-search-start-date').val(),
				endDate: $tab.find('.T-search-end-date').val(),
				tripPlanNumber: $tab.find('.T-tripPlanNumber').val(),
				lineProductId: $line.data('id'),
				lineProductName: $line.val(),
				autoPayMoney: $autoPayMoney.val(),
				payType: $tab.find('.T-sumPayType').val()
			};

			if (args.lineProductName === '全部') {
				args.lineProductName = '';
			}

			$.ajax({
				url: KingServices.build_url('account/guideFinancial', 'autoPay'),
				type: 'post',
				data: args,
				showLoading: false
			})
			.done(function(data) {
				if (showDialog(data)) {
					FinGuide.payingJson = data.autoPayList;

					FinGuide.setAutoFillEdit($tab, true);
				}
			});
		}
	};

	FinGuide.setAutoFillEdit = function($tab, disable) {
		var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
		if (!disable) {
			$sum.val(0);
		}

		$tab.find('.T-btn-autofill').html(disable?'<i class="ace-icon fa fa-times"></i> 取消下账': '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');;
		
		FinGuide.getOperationList(0, $tab);

	}
	/**
	 * 获取对账列表数据
	 * @param  {int} pageNo 列表页码
	 * @return {[type]}        [description]
	 */
	FinGuide.getOperationList = function(pageNo, $tab) {
		if ($tab) { 
			var $line = $tab.find('.T-lineProductName');

			var args = {
				pageNo: pageNo || 0,
				guideId: $tab.find('.T-btn-save').data('id'),
				startDate: $tab.find('.T-search-start-date').val(),
				endDate: $tab.find('.T-search-end-date').val(),
				tripPlanNumber: $tab.find('.T-tripPlanNumber').val(),
				lineProductId: $line.data('id'),
				lineProductName: $line.val(),
			};

			if (args.lineProductName === '全部') {
				args.lineProductName = '';
			}

			$.ajax({
				url: KingServices.build_url('account/guideFinancial', 'listFinancialGuideByGuideId'),
				type: 'post',
				data: args,
				showLoading: false
			})
			.done(function(data) {
				if (showDialog(data)) {
					var html,
						type = $tab.find('.T-btn-save').data('type');
					if (!!type) {
						data.list = FinancialService.getTempDate(data.list, FinGuide.payingJson);

						html = payingTableTemplate(data);
					} else {
						html = checkingTableTemplate(data);
					}
					$tab.find('.T-checkList').html(html);

					if (!type) {
						//给全选按钮绑定事件: 未去重
						FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));
					}

					// 设置记录条数及页面
					$tab.find('.T-sumItem').text('共计'+ data.recordSize + '条记录');
					$tab.find('.T-btn-save').data('pageNo', args.pageNo);
					// 绑定翻页组件
					laypage({
					    cont: $tab.find('.T-pagenation'), 
					    pages: data.totalPage, //总页数
					    curr: (data.pageNo + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		FinGuide.getOperationList(obj.curr -1, $tab);
					    	}
					    }
					});	
				}
			});
			
		}
	}

	/**
	 * 绑定线路产品的下拉选择
	 * @param  {object} $obj 绑定对象
	 * @param  {array} list 线路产品的选项
	 * @return {[type]}      [description]
	 */
	FinGuide.getLineProduct = function($obj, list) {
		for(var i=0; i< list.length; i++){
		    list[i].value = list[i].name;
		    list[i].id = list[i].id;
		}
		list.unshift({id:'', value: '全部'});

		$obj.autocomplete({
		    minLength: 0,
		    change: function(event, ui) {
		        if (!ui.item)  {
		            $(this).data('id', '');
		        }
		    },
		    select: function(event, ui) {
		        $(this).blur().data('id', ui.item.id);
		    }
		}).on("click",function(){
	        $obj.autocomplete('search', '');
		})
		.autocomplete('option', 'source', list);
	}

	/**
	 * 应付金额明细对话框
	 * @param  {[type]} id [description]
	 * @return {[type]}    [description]
	 */
	FinGuide.viewNeedPay = function(id) {
		if (!!id) {
			$.ajax({
				url: KingServices.build_url('account/guideFinancial', 'viewCheckRecordList'),
				type: 'post',
				data: {id: id},
			})
			.done(function(data) {
				if (showDialog(data)) {
					layer.open({
					    type: 1,
					    title:"应付金额明细",
					    skin: 'layui-layer-rim', 
					    area: '1024px', 
					    zIndex:1028,
					    content: needPayDetailTemplate(data),
					    scrollbar: false
					});
				}
			});
			
		}
	}

	/**
	 * 查看--导游对账费用明细 
	 * @param  {[type]} tripId [description]
	 * @return {[type]}        [description]
	 */
	FinGuide.viewFeeDetail = function(tripId) {

	}



	/**
	 * 初始化对账模块
	 * @param  {int} id    导游ID
	 * @param  {int} year  年
	 * @param  {int} month 月
	 */

	FinGuide.checking = function(id, year, month){
		FinGuide.$checkingTab = null;
		FinGuide.checkingId = id;
		FinGuide.checkingList(0, id, year, month);
	};

	FinGuide.checkingList = function(page, id, year, month){
		var args = {
			pageNo : (page || 0),
			guideId : id,
			year : FinGuide.$tab.find('.T-search-year').val() || year,
			month : FinGuide.$tab.find('.T-search-month').val() || month
		};
		if(!!FinGuide.$checkingTab){
			var args = {
				pageNo : (page || 0),
				guideId : id,
				year : FinGuide.$checkingTab.find('.T-search-year').val() || year,
				month : FinGuide.$checkingTab.find('.T-search-month').val() || month
			};
		}

		FinGuide.checkingPageNo = args.pageNo;

		$.ajax({
			url : KingServices.build_url('financialGuide', 'listGuideChecking'),
			type : "POST",
			data : args
		}).done(function(data){
			if(showDialog(data)){
				data.guideList = JSON.parse(data.guideList);
				data.monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
				Tools.addTab(checkMenuKey, "导游对账", guideCheckingTemplate(data));
				FinGuide.CL_event();
			}
		});
	};

	FinGuide.CL_event = function(){
		FinGuide.$checkingTab = $('#tab-' + checkMenuKey + '-content');
		var validator = rule.check(FinGuide.$checkingTab);
		FinGuide.$checkingTab.find('.T-checkList').off('change')
		.on('change', function(event) {
			event.preventDefault();
			FinGuide.$checkingTab.data('isEdited', true);
		});

		FinGuide.$checkingTab.off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE)
		.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html){
			event.preventDefault();
			FinGuide.saveChecking(FinGuide.$checkingTab, validator, [tab_id, title, html], false);
		})
		.on(CLOSE_TAB_SAVE, function(event){
			event.preventDefault();
			FinGuide.saveChecking(FinGuide.$checkingTab, validator, null, true);
		});

		var $searchArea = FinGuide.$checkingTab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event){
			event.preventDefault();
			FinGuide.checkingList(0, FinGuide.checkingId);
		});
		$searchArea.find('.T-btn-export').on('click', function(event){
			event.preventDefault();
			var guideName = $searchArea.find('.T-guide-name').text();
			var year = $searchArea.find('.T-search-year').val();
			var month = $searchArea.find('.T-search-month').val();
			FinGuide.exportReport(guideName, year, month);
		});
		FinGuide.$checkingTab.find('.T-select-all').on('click', function(event){
			var account = FinGuide.$checkingTab.find('.T-checkList .T-account'),
				$that = $(this);
			if(!!$that.is(':checked')){
				account.each(function(){
					$(this).prop("checked",true);
				});
			}else{
				account.each(function(){
					$(this).prop("checked",false);
				});
			}
		});
		//绑定确定事件
		FinGuide.$checkingTab.find('.T-confirm-guide').on('click', function(event){
			event.preventDefault();
			FinGuide.saveChecking(FinGuide.$checkingTab, validator, null, false);
		});
		//绑定取消事件
		FinGuide.$checkingTab.find('.T-guide-close').on('click', function(event){
			event.preventDefault();
			Tools.closeTab(Tools.getTabKey(FinGuide.$checkingTab.prop('id')));
		});
	};

	FinGuide.saveChecking = function($tab, validator, tab_array, isClose){
		// 表单校验
		if (!validator.form()) { 
			return;
		}
		var JsonStr = [],$tr = $tab.find('.T-checkList tr'),
			oldRealBack,
            newRealBack,
            oldRemark,
            newRemark;
	    $tr.each(function(i){
		    var checkStatus = $(this).data("entity-isConfirmAccount");
		    var flag = $(this).find("input[name='isConfirmAccount']").is(":checked");
		    newRealBack = $(this).find("input[name='realBackGuideMoney']").val();
		    oldRealBack = $(this).data("entity-realBackGuideMoney");
		    newRemark = $(this).find("input[name='billRemark']").val();
		    oldRemark = $(this).data("entity-billRemark");
		   	if(flag){
			   	if(checkStatus == 1){
				   	//判断是否被修改
				   	if(oldRemark != newRemark || oldRealBack != newRealBack){
				   	   	var checkData = {
				   	   	   	id:$(this).data("entity-id"),
    					   	guideId:FinGuide.checkingId,
    					   	realBackGuideMoney:newRealBack,
    					   	billRemark:newRemark,
    					   	isConfirmAccount:1
				   	   	}
				   	   	JsonStr.push(checkData);
				    }
		        }else{
		      	    var checkData = {
			   	   		id:$(this).data("entity-id"),
					   	guideId:FinGuide.checkingId,
					   	realBackGuideMoney:newRealBack,
					   	billRemark:newRemark,
					   	isConfirmAccount:1
			   	   	}
			   	   	JsonStr.push(checkData);
		        }
		    }else{
			    if(checkStatus == 1){
				    var checkData = {
					   id:$(this).data("entity-id"),
					   guideId:FinGuide.checkingId,
					   realBackGuideMoney:newRealBack,
					   billRemark:newRemark,
					   isConfirmAccount:0
    			    }
    			    JsonStr.push(checkData);
			    }
		   	}
	    });
	   
	    if(JsonStr.length == 0){
		    showMessageDialog($( "#confirm-dialog-message" ),"您当前未进行任何操作");
		    return;
	    }
	    console.log(JsonStr);
	    JsonStr = JSON.stringify(JsonStr);
	    $.ajax({
	   		url : KingServices.build_url('financialGuide', 'updateGuideChecking'),
	   		type : "POST",
	   		data : {financialGuideListStr : encodeURIComponent(JsonStr), menuKey : menuKey, operation : 'update'}
	    }).done(function(data){
	   		if(showDialog(data)){
	   			showMessageDialog($( "#confirm-dialog-message" ),data.message);
	   			if(!!isClose){
 	    			Tools.closeTab(Tools.getTabKey($tab.prop('id')));
 	    			FinGuide.getList(FinGuide.listPageNo);
 	    		}else{
 	    			FinGuide.checkingList(FinGuide.checkingPageNo, FinGuide.checkingId);
 	    		}
	   		}
	    });
	};

	FinGuide.clearing = function(id){
		FinGuide.$clearingTab = null;
		FinGuide.clearingId = id;
		FinGuide.clearingList(0, id);
	};

	FinGuide.clearingList = function(page, id){
		var args = {
			pageNo : (page || 0),
			guideId : id,
			year: FinGuide.$tab.find('.T-search-year').val(),
			start_month : 1,
			end_month : 12,
			menuKey : menuKey,
			operation : "view"
		};
		if(!!FinGuide.$clearingTab){
			args = {
				pageNo : (page || 0),
				shopId : id,
				year: FinGuide.$clearingTab.find('.T-search-year').val(),
				start_month : FinGuide.$clearingTab.find('.T-search-start-month').val(),
				end_month : FinGuide.$clearingTab.find('.T-search-end-month').val(),
				menuKey : menuKey,
				operation : "view"
			};
		}
		FinGuide.clearingPageNo = args.pageNo;
		$.ajax({
			url : KingServices.build_url('financialGuide', 'listGuideSettlement'),
			type : 'POST',
			data : args
		}).done(function(data){
			if(showDialog(data)){
				data.monthList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
				Tools.addTab(clearMenuKey, "导游结算", guideClearingTemplate(data))
				FinGuide.GC_event();
			}
		});
	};
	FinGuide.GC_event = function(){
		FinGuide.$clearingTab = $('#tab-' + clearMenuKey + '-content');
		//搜索顶部的事件绑定
		var $searchArea = FinGuide.$clearingTab.find('.T-search-area');
		$searchArea.find('.T-btn-search').on('click', function(event){
			FinGuide.clearingList(0, FinGuide.clearingId);
		});
		FinGuide.$clearingTab.find('.T-guide-records').on('click', function(event){
			event.preventDefault();
			FinGuide.records();
		});
		FinGuide.$clearingTab.find('.T-list').on('click', '.T-action', function(event){
			event.preventDefault();
			var $that = $(this);
			if($that.hasClass('T-save')){
				FinGuide.saveClearing($that, $that.data('entity-id'));
			}else if($that.hasClass('T-checkDetail')){
				FinGuide.checking(FinGuide.clearingId, $that.data('entity-year'), $that.data('entity-month'));
			}
		});
	};

	FinGuide.records = function(){
		$.ajax({
			url : KingServices.build_url('financialGuide', 'listFinancialGuideSettlementRecord'),
			type:"POST",
			data: {guideId : FinGuide.clearingId}
		}).done(function(data){
			if(showDialog(data)){
				if(data.financialGuideSettlementRecordList.length == 0){
        			showMessageDialog($( "#confirm-dialog-message" ),"暂时还没有操作记录");
        		}else{
		    		var blanceRecordsTemplateLayer =layer.open({
		    			type: 1,
					    title:"操作记录",
					    skin: 'layui-layer-rim', //加上边框
					    area: '60%', //宽高
					    zIndex:1030,
					    content: guideRecords(data),
					    scrollbar: false, // 推荐禁用浏览器外部滚动条
					    success: function(){}
		    		})
        		}
			}
		});
	};

	FinGuide.saveClearing = function($that, id){
		var $tr = $that.closest('tr'),
		payMoney = $tr.find('input[name=payMoney]').val(),
		payType = $tr.find("select[name='payType'] :selected").text(),
		remark = $tr.find(" input[name='remark']").val();
		$.ajax({
			url : KingServices.build_url('financialGuide', 'saveFinancialGuideSettlement'),
			type : 'POST',
			data : {id : id, payMoney : payMoney, payType : payType, remark : remark}
		}).done(function(data){
			if(showDialog(data)){
				showMessageDialog($( "#confirm-dialog-message" ),data.message);
				FinGuide.clearingList(FinGuide.clearingPageNo, FinGuide.clearingId);
			}
		});
	};

	/**
	 * 导出报表
	 * @param  {string} guideName 导游名
	 * @param  {string} year     年份
	 * @param  {string} month    月份
	 */
	FinGuide.exportReport = function(guideName, year, month){
		var url = APP_ROOT+"back/export.do?method=guide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&guideId="+FinGuide.checkingId+"&guideName="+guideName+"&year="+year+"&month="+month+"&sortType=auto";
	    exportXLS(url);
	};

	// 暴露方法
	exports.init = FinGuide.initModule;
});