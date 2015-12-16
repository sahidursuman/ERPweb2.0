/**
 * 财务管理--代订账务
 * 未优化
 * by David Bear 2015-11-27
 */
define(function(require, exports) {
	var menuKey = "financial_replace",
		listTemplate = require("./view/list"),
		billImagesTemplate = require("./view/billImages"),
		replaceChecking = require("./view/replaceChecking"),
		replaceClearing = require("./view/replaceClearing"),
		blanceRecords = require("./view/replaceRecords"),
		viewReceivedTemplate = require("./view/viewReceived"),
		viewAccountTemplate = require('./view/viewAccount'),
		payingTableTemplate = require('./view/replacePayingTable'),
		checkMenuKey = menuKey+"-checking",
		blanceMenuKey = menuKey+"-blance";

	var Replace = {
		$tab : false
	};
	/**
	 * 初始化模块
	 */
	Replace.initModule = function(){
		Replace.$tab = null;
		Replace.getList(0);
	};

	/**
	 * 获取代订账务列表，初始化列表页面
	 * @param  {int} page 页码
	 */
	Replace.getList = function(page){
	    var date = new Date(),
        year = date.getFullYear(),
        month = Tools.addZero2Two(date.getMonth() + 1),
        day = Tools.addZero2Two(date.getDate()),
		args= {
			pageNo : (page || 0),
			startTime : year + "-" + month + "-01",
			endTime : year + "-" + month + "-" + day
		};
		if(!!Replace.$tab){
			var name = Replace.$tab.find('.T-search-customer').val();
			args= {
				pageNo : (page || 0),
				travelAgencyName : name == '全部' ? '' : name,
				startTime : Replace.$tab.find('.T-search-start-date').val(),
				endTime : Replace.$tab.find('.T-search-end-date').val()
			};
		}
		$.ajax({
			url : KingServices.build_url('financial/bookingAccount', 'listPager'),
			type: 'post',
			data: args
		}).done(function(data){
			if(showDialog(data)){
				Tools.addTab(menuKey, "代订账务", listTemplate(data));
				//绑定事件
				Replace.init_event();
				// 缓存页面
				Replace.listPageNo = args.pageNo;
				// 绑定翻页组件
				laypage({
				    cont: Replace.$tab.find('.T-pagenation'), 
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Replace.getList(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};

	/**
	 * 初始化列表页面的事件绑定
	 */
	Replace.init_event = function(){
		Replace.$tab = $('#tab-' + menuKey + '-content');
		//搜索顶部的事件绑定
		var $searchArea = Replace.$tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');

		Replace.chooseCustomer($searchArea.find('.T-search-customer'));
		Tools.setDatePicker($datepicker, true);
		$searchArea.find('.T-btn-search').on('click', function(event) {
			event.preventDefault();
			Replace.getList();
		});
		// 报表内的操作
		Replace.$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id'), name = $that.closest('tr').data('name');
			if ($that.hasClass('T-checking'))  {
				// 对账
				Replace.checking(id, name);
			} else if ($that.hasClass('T-balance'))  {
				// 结算
				Replace.balance(id, name);
			}
		});
	};

	Replace.chooseCustomer = function($obj){
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
		}).on('click', function(){
			if (!$obj.data('ajax')) {  // 避免重复请求
				$.ajax({
					url : KingServices.build_url('financial/bookingAccount', 'selectPartnerAgency'),
					type : "POST"
				}).done(function(data){
					if(showDialog(data)){
						for(var i=0; i<data.partnerAgencyList.length; i++){
			                data.partnerAgencyList[i].value = data.partnerAgencyList[i].fromPartnerAgencyName;
			                data.partnerAgencyList[i].id = data.partnerAgencyList[i].partnerAgencyId;
			            }
			            data.partnerAgencyList.unshift({id:'', value: '全部'});
			            $obj.autocomplete('option', 'source', data.partnerAgencyList);
			            $obj.autocomplete('search', '');

			            $obj.data('ajax', true);
		        	}
				});
			} else {
		        $obj.autocomplete('search', '');
		    }
		});
	};
	/**
	 * 对账
	 * @param  {int} id 客户ID
	 */
	Replace.checking = function(id, name){
		Replace.$checkingTab = null;
		Replace.checkingId = id;
		Replace.checkingName = name;
		Replace.checkingList(0, id);
	};
	Replace.clearComma = function(str){
		return str.replace(/(\uff0c){2,}/g, '，').replace(/(\uff0c)$/g, '');
	};
	Replace.checkingList = function(page, id, startTime, endTime){
		var args = {
			pageNo : (page || 0),
			partnerAgencyId : id || Replace.checkingId,
			endTime : endTime || Replace.$tab.find('.T-search-end-date').val(),
			startTime : startTime || Replace.$tab.find('.T-search-start-date').val()
		};
		if(!!Replace.$checkingTab){
			var project = Replace.$checkingTab.find(".T-search-project").val().split(', '),
				order = Replace.$checkingTab.find(".T-search-order").val();
			args = {
				pageNo : (page || 0),
				partnerAgencyId : id || Replace.checkingId,
				orderNumber : order == '全部' ? '' : order,
				endTime : Replace.$checkingTab.find(".T-search-end-date").val(),
				startTime : Replace.$checkingTab.find(".T-search-start-date").val()
			};
			if(project.length > 0){
				for(var i=0; i<project.length; i++){
					if(project[i] == "车队"){
						args.busCompanyOrderStatus = 1;
					}else if(project[i] == "酒店"){
						args.hotelOrderStatus = 1;
					}else if(project[i] == "景区"){
						args.scenicOrderStatus = 1;
					}else if(project[i] == "票务"){
						args.ticketOrderStatus = 1;
					}
				}
			}
		}
		$.ajax({
			url : KingServices.build_url('financial/bookingAccount', 'listCheckBookingAcccount'),
			type: 'post',
			data: args
		}).done(function(data){
			if (showDialog(data)) {
				data.name = Replace.checkingName;
				for(var j=0; j<data.bookinAccountList.length; j++){
					var detailList = data.bookinAccountList[j].detailList;
					data.bookinAccountList[j].newDetail = '';
					for(var i=0; i<detailList.length; i++){
						data.bookinAccountList[j].newDetail += detailList[i].name + '，' + detailList[i].type + '，' + detailList[i].shift + '，' + detailList[i].level + '，' + detailList[i].count + "×" + detailList[i].price + "=" + (detailList[i].count * detailList[i].price) + '，';
					}
					data.bookinAccountList[j].newDetail = Replace.clearComma(data.bookinAccountList[j].newDetail);
				}
				
				Tools.addTab(checkMenuKey, "代订对账", replaceChecking(data));

				Replace.$checkingTab = $('#tab-' + checkMenuKey + '-content');

				Replace.CM_event(Replace.$checkingTab, true);
				// 绑定翻页组件
				laypage({
				    cont: Replace.$checkingTab.find('.T-pagenation'), 
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Replace.checkingList(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};

	Replace.CM_event = function($tab, isCheck){
		var validator = new FinRule(isCheck ? 0 : 3),
		validatorCheck = validator.check($tab);
		// 处理关闭与切换tab
        $tab.off('change').off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
        .on('change', '.T-checkList, .T-clearList', function() {
            $tab.data('isEdited', true);
        })
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            if (!validatorCheck.form())return;
            if (!isCheck) {
            	Replace.saveCheckingData($tab, [tab_id, title, html]);
        	}else{
            	Replace.savePayingData($tab, [tab_id, title, html]);
        	}
        })
        .on(SWITCH_TAB_BIND_EVENT, function() {
            if (!isCheck) {
				Replace.balanceList();
            }else{
            	Replace.checkingList();
            }
        })
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (!validatorCheck.form())return;
            if (!isCheck) {
            	Replace.saveCheckingData($tab);
        	}else{
            	Replace.savePayingData($tab);
        	}
        });
		//搜索
		var $searchArea = $tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');
		Tools.setDatePicker($datepicker, true);
		Replace.chooseOrder($searchArea.find('.T-search-order'));
		Replace.chooseProject($searchArea.find('.T-search-project'));

		$searchArea.find('.T-btn-search').on('click', function(event){
			event.preventDefault();
			if(isCheck){
				Replace.checkingList();
			}else{
				Replace.balanceList();
			}
		});

		$tab.find('.T-checkTr').on('change', function(){
			$(this).data('change', true);
		});

		$tab.find('.T-list').on('click', '.T-action', function(event){
			var $that = $(this), id = $that.closest('tr').data('id');
			if($that.hasClass('T-view-Received')){
				Replace.viewOperationDetail(id, true);
			}else if($that.hasClass('T-receive-money')){
				Replace.viewOperationDetail(id, false);
			}
		});
		var oMenuKey = checkMenuKey;
		// 计算
        if (!isCheck) {
        	oMenuKey = blanceMenuKey;
            FinancialService.updateSumPayMoney($tab, validator);
        } else {
            //给全选按钮绑定事件: 未去重
        	FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));
			FinancialService.updateUnpayMoney($tab, validator);
        }
		$tab.find('.T-btn-close').on('click', function(event){
			if(!!$tab.data('isEdited')){
				showSaveConfirmDialog($('#confirm-dialog-message'), "内容已经被修改，是否保存?", function(){
					Replace.saveCheckingData($tab);
				}, function(){
					Tools.closeTab(oMenuKey);
                	Replace.getList(Replace.listPageNo);
				});
			}else{
				Tools.closeTab(oMenuKey);
                Replace.getList(Replace.listPageNo);
			}
		});
		$tab.find('.T-btn-save').on('click', function(event){
			if (!validatorCheck.form()) {
                return;
            }
			if(isCheck){
				Replace.saveCheckingData($tab);
			}else{
				Replace.savePayingData($tab);
			}
		});

		if(!isCheck){
			$tab.find('.T-btn-autofill').on('click', function(event){
				event.preventDefault();
				var $that = $(this);

	            if ($that.hasClass('btn-primary')) {
	                if (validatorCheck.form()) {
	                    FinancialService.autoPayConfirm($datepicker.eq(0).val(), $datepicker.eq(1).val(),function(){
	                    	Replace.autoFillData($tab)
	                    });
	                }
	            } else {
	            	Replace.payingJson = [];
	                Replace.setAutoFillEdit($tab, false);
	            }
			});

            // 清空数据
            Replace.payingJson = [];
		}
	};

	Replace.autoFillData = function($tab){
		if(!!$tab && $tab.length){
			var project = $tab.find(".T-search-project").val(),
				bus, hotel, scenic, ticket;
			if(project.length > 0){
				for(var i=0; i<project.length; i++){
					if(project[i] == "车队"){
						bus = 1;
					}else if(project[i] == "酒店"){
						hotel = 1;
					}else if(project[i] == "景区"){
						scenic = 1;
					}else if(project[i] == "票务"){
						ticket = 1;
					}
				}
			}
			var order = $tab.find('.T-search-order').val();
			var args = {
                partnerAgencyId : Replace.balanceId,
                orderNumber : order == '全部' ? '' : order,
                busCompanyOrderStatus : bus,
                hotelOrderStatus : hotel,
                scenicOrderStatus : scenic,
                ticketOrderStatus : ticket,
                sumTemporaryIncomeMoney : $tab.find('.T-sumReciveMoney').val(),
                startTime : $tab.find('.T-search-start-date').val(),
                endTime : $tab.find('.T-search-end-date').val()
            }
            $.ajax({
                url: KingServices.build_url('financial/bookingAccount', 'autoBookingAccount'),
                type: 'post',
                data: args,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    Replace.payingJson = data.bookingAccountList;
					$tab.find('input[name="sumPayMoney"]').val(data.realAutoPayMoney);
                    Replace.setAutoFillEdit($tab, true);
                }
            });
		}
	}
	Replace.setAutoFillEdit = function($tab, disable) {
        var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
        }

        $tab.find('.T-btn-autofill').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');

        Replace.getOperationList(0, $tab);

    };

    /**
     * 获取对账列表数据
     * @param  {int} pageNo 列表页码
     * @return {[type]}        [description]
     */
    Replace.getOperationList = function(pageNo, $tab) {
        if ($tab) {
            var project = Replace.$balanceTab.find(".T-search-project").val().split(', ');
			var order = Replace.$balanceTab.find(".T-search-order").val();
			args = {
				pageNo : (pageNo || 0),
				partnerAgencyId : Replace.balanceId,
				orderNumber : order == '全部' ? '' : order,
				endTime : Replace.$balanceTab.find(".T-search-end-date").val(),
				startTime : Replace.$balanceTab.find(".T-search-start-date").val()
			};
			if(project.length > 0){
				for(var i=0; i<project.length; i++){
					if(project[i] == "车队"){
						args.busCompanyOrderStatus = 1;
					}else if(project[i] == "酒店"){
						args.hotelOrderStatus = 1;
					}else if(project[i] == "景区"){
						args.scenicOrderStatus = 1;
					}else if(project[i] == "票务"){
						args.ticketOrderStatus = 1;
					}
				}
			}

			$.ajax({
				url : KingServices.build_url('financial/bookingAccount', 'listReciveBookingAcccount'),
				type : "POST",
				data : args
			}).done(function(data){
				if (showDialog(data)) {
					var html;
					data.bookinAccountList = FinancialService.getTempDate(data.bookinAccountList, Replace.payingJson);
					html = payingTableTemplate(data);
					Replace.$balanceTab.find('.T-clearList').html(html);

                    // 设置记录条数及页面
                    $tab.find('.T-sumItem').text('共计' + data.recordSize + '条记录');
                    $tab.find('.T-btn-save').data('pageNo', args.pageNo);
                    //给全选按钮绑定事件: 未去重
                    FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-clearList").find('.T-checkbox'));

					// 绑定翻页组件
					laypage({
					    cont: Replace.$balanceTab.find('.T-pagenation'), 
					    pages: data.totalPage, //总页数
					    curr: (data.pageNo + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		Replace.getOperationList(obj.curr -1);
					    	}
					    }
					});	
				}
			});
        }
    }

	Replace.chooseProject = function($obj){
		$obj.autocomplete({
			minLength: 0,
		    change: function(event, ui) {
		        if (!ui.item)  {
		            $(this).val("");
		        }
		    },
		    select: function(event, ui) {
		    	var terms = this.value.split( /,\s*/ );
		    	//移除当前输入
          		terms.pop();
          		if($(this).val().indexOf(ui.item.value) == -1){
	          		//添加被选项
			        terms.push( ui.item.value );
			        //添加占位符，在结尾添加逗号+空格
			        terms.push( "" );
			        this.value = terms.join( ", " );
          		}
		        return false;
		    },
		    focus : function(){
		    	// 防止在获得焦点时插入值
          		return false;
		    }
		}).on('click', function(){
			if (!$obj.data('ajax')) {  // 避免重复请求
				var data = ["车队", "酒店", "景区", "票务",];
				$obj.autocomplete('option', 'source', data);
			    $obj.autocomplete('search', '');
			    $obj.data('ajax', true);
			}else{
				$obj.autocomplete('search', '');
			}

		});
	};

	Replace.chooseOrder = function($obj){
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
		}).on('click', function(){
			if (!$obj.data('ajax')) {  // 避免重复请求
				$.ajax({
					url : KingServices.build_url('financial/bookingAccount', 'selectCheckOrder'),
					type : "POST",
					data : {partnerAgencyId : Replace.checkingId}
				}).done(function(data){
					for(var i=0; i<data.orderList.length; i++){
		                data.orderList[i].value = data.orderList[i].orderNumber;
		            }
		            data.orderList.unshift({id:'', value: '全部'});
		            $obj.autocomplete('option', 'source', data.orderList);
		            $obj.autocomplete('search', '');

		            $obj.data('ajax', true);
				});
			} else {
		        $obj.autocomplete('search', '');
		    }
		});
	};

	Replace.viewOperationDetail = function(id, type){
		if (!!id) {
			var method = 'findCheckAccountDetail',
                title = '应收金额明细',
                html = viewAccountTemplate;
            if (!type) {
                method = 'findReciveAccountDetail';
                title = '已收金额明细';
                html = viewReceivedTemplate;
            }
            $.ajax({
                url: KingServices.build_url('financial/bookingAccount', method),
                type: 'post',
                data: {
                    id: id
                },
            })
            .done(function(data) {
                if (showDialog(data)) {
                    data.type = type;
                    layer.open({
                        type: 1,
                        title: title,
                        skin: 'layui-layer-rim',
                        area: '1024px',
                        zIndex: 1028,
                        content: html(data),
                        scrollbar: false
                    });
                }
            });
		}
	};

	Replace.saveCheckingData = function($tab, tabArgs){
		var validator = new FinRule(0);
		var json = FinancialService.checkSaveJson($tab, validator);
		if (json) { // 有值
			$.ajax({
                url: KingServices.build_url('financial/bookingAccount', 'checkBookingAccount'),
                type: 'post',
                data: {
                    checkAccountList: json
                },
            })
            .done(function(data) {
                if (showDialog(data)) {
                    $tab.data('isEdited', false);

                    showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                        if (!!tabArgs) {
                            Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                            Replace.checkingList(0);
                        } else {
                            Tools.closeTab(checkMenuKey);
                            Replace.getList(Replace.listPageNo);
                        }
                    })
                }
            });
		}
	};

	/**
	 * 收款
	 * @param  {int} id 客户ID
	 */
	Replace.balance = function(id, name){
		Replace.$balanceTab = null;
		Replace.balanceId = id;
		Replace.balanceName = name;
		Replace.isBalanceSource = false;
		Replace.balanceList(0, id);
	};
	Replace.initIncome = function(args){
		Replace.$balanceTab = null;
		Replace.balanceId = args.id;
		Replace.balanceName = args.name;
		Replace.isBalanceSource = true;
		Replace.balanceList(0, args.id, args.startDate, args.endDate);
	};


	Replace.balanceList = function(page, id, startTime, endTime){
		var args = {
			pageNo : (page || 0),
			partnerAgencyId : id || Replace.balanceId,
			endTime : endTime || Replace.$tab.find('.T-search-end-date').val(),
			startTime : startTime || Replace.$tab.find('.T-search-start-date').val()
		};

		if(!!Replace.$balanceTab){
			var project = Replace.$balanceTab.find(".T-search-project").val().split(', ');
			var order = Replace.$balanceTab.find(".T-search-order").val();
			args = {
				pageNo : (page || 0),
				partnerAgencyId : id || Replace.balanceId,
				orderNumber : order == '全部' ? '' : order,
				endTime : Replace.$balanceTab.find(".T-search-end-date").val(),
				startTime : Replace.$balanceTab.find(".T-search-start-date").val()
			};
			if(project.length > 0){
				for(var i=0; i<project.length; i++){
					if(project[i] == "车队"){
						args.busCompanyOrderStatus = 1;
					}else if(project[i] == "酒店"){
						args.hotelOrderStatus = 1;
					}else if(project[i] == "景区"){
						args.scenicOrderStatus = 1;
					}else if(project[i] == "票务"){
						args.ticketOrderStatus = 1;
					}
				}
			}
		}

		$.ajax({
			url : KingServices.build_url('financial/bookingAccount', 'listReciveBookingAcccount'),
			type : "POST",
			data : args
		}).done(function(data){
			if (showDialog(data)) {
				var html;
				data.name = Replace.balanceName;
				data.source = Replace.isBalanceSource;
				for(var j=0; j<data.bookinAccountList.length; j++){
					var detailList = data.bookinAccountList[j].detailList;
					data.bookinAccountList[j].newDetail = '';
					for(var i=0; i<detailList.length; i++){
						data.bookinAccountList[j].newDetail += detailList[i].name + '，' + detailList[i].type + '，' + detailList[i].shift + '，' + detailList[i].level + '，' + detailList[i].count + "×" + detailList[i].price + "=" + (detailList[i].count * detailList[i].price) + '，';
					}
					data.bookinAccountList[j].newDetail = Replace.clearComma(data.bookinAccountList[j].newDetail);
				}
				Tools.addTab(blanceMenuKey, "代订收款", replaceClearing(data));
				Replace.$balanceTab = $('#tab-' + blanceMenuKey + '-content');

				html = payingTableTemplate(data);
				Replace.$balanceTab.find('.T-clearList').html(html);

				Replace.CM_event(Replace.$balanceTab, false);

				// 绑定翻页组件
				laypage({
				    cont: Replace.$balanceTab.find('.T-pagenation'), 
				    pages: data.totalPage, //总页数
				    curr: (data.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Replace.balanceList(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};
	Replace.savePayingData = function($tab, tabArgs){
		var validator = new FinRule(3);
		var json = FinancialService.clearSaveJson($tab, Replace.payingJson, validator);

		if (json.length) {
            $.ajax({
                    url: KingServices.build_url('financial/bookingAccount', 'receiveBookingAccount'),
                    type: 'post',
                    data: {
                        reciveAccountList: JSON.stringify(json),
                        partnerAgencyId: Replace.balanceId,
                        payType: $tab.find('.T-sumPayType').val(),
                        remark: $tab.find('.T-sumRemark').val()
                    },
                })
                .done(function(data) {
                    $tab.data('isEdited', false);
                    Replace.payingJson = [];
                    showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                        if (!!tabArgs) {
                            Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
                            Replace.balanceList(0);
                        } else {
                            Tools.closeTab(blanceMenuKey);
                            Replace.getList(Replace.listPageNo);
                        }
                    })
                });
        } else {
            showMessageDialog($('#confirm-dialog-message'), '您当前未进行任何操作！');
        }
	};
	exports.init = Replace.initModule;
	exports.initIncome = Replace.initIncome;
});