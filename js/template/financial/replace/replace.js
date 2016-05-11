/**
 * 财务管理--代订账务
 * 
 * by David Bear 2015-11-27
 */
define(function(require, exports) {
	var menuKey = "financial_replace",
		listTemplate = require("./view/list"),
		billImagesTemplate = require("./view/billImages"),
		replaceChecking = require("./view/replaceChecking"),
		replaceClearing = require("./view/replaceClearing"),
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
	    var dateJson = FinancialService.getInitDate();
		args= {
			pageNo : (page || 0),
			startDate : dateJson.startDate,
			endDate : dateJson.endDate,
			accountStatus : 2
		};
		if(!!Replace.$tab){
			var name = Replace.$tab.find('.T-search-customer').val().trim();
			args= {
				pageNo : (page || 0),
				travelAgencyName : name == '全部' ? '' : name,
				startDate : Replace.$tab.find('.T-search-start-date').val(),
				endDate : Replace.$tab.find('.T-search-end-date').val(),
				accountStatus : Replace.$tab.find(".T-finance-status").find("button").data("value")
			};
		}
		$.ajax({
			url : KingServices.build_url('financial/bookingAccount', 'listPager'),
			type: 'post',
			data: args
		}).done(function(data){
			if(showDialog(data)){
				Tools.addTab(menuKey, "代订账务", listTemplate(data));
				Replace.$tab = $('#tab-' + menuKey + '-content');
				//绑定事件
				Replace.init_event(args);
				// 缓存页面
				Replace.listPageNo = args.pageNo;
				//获取统计金额
				Replace.getSumMoney(args,Replace.$tab);
				// 绑定翻页组件
				laypage({
				    cont: Replace.$tab.find('.T-pagenation'), 
				    pages: data.searchParam.totalPage, //总页数
				    curr: (data.searchParam.pageNo + 1),
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
	Replace.init_event = function(args){
		//搜索顶部的事件绑定
		var $searchArea = Replace.$tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');

		Replace.chooseCustomer($searchArea.find('.T-search-customer'));
		Tools.setDatePicker($datepicker, true);
		$searchArea.find('.T-btn-search').off().on('click', function(event) {
			event.preventDefault();
			Replace.getList();
		});
		
		//状态框选择事件
        Replace.$tab.find(".T-finance-status").on('click','a',function(event){
            event.preventDefault();//阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
            Replace.getList();
        });

		// 报表内的操作
		Replace.$tab.find('.T-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this),
				argsData = {
					pageNo : 0,
					partnerAgencyId : $that.closest('tr').data('id'), 
					name : $that.closest('tr').data('name'),
					startDate : args.startDate,
					endDate : args.endDate,
					accountStatus : args.accountStatus				
				};
			if ($that.hasClass('T-checking'))  {
				// 对账
				Replace.checking(argsData);
			} else if ($that.hasClass('T-balance'))  {
				// 结算
				Replace.balance(argsData);
			}
		});
	};
	//获取统计金额
	Replace.getSumMoney = function(args,tabId){
		$.ajax({
			url:KingServices.build_url('financial/bookingAccount', 'listPagerTotal'),
			data:args,
			type:"POST",
			success:function(data){
				if(showDialog(data)){
	                tabId.find('.T-sumMoney').text(data.sumContractMoney);
	                tabId.find('.T-sumStMoney').text(data.sumSettlementMoney);
	                tabId.find('.T-sumReceiveMoney').text(data.sumReceiveMoney);
	                tabId.find('.T-sumUnReceivedMoney').text(data.sumUnReceivedMoney);
	            }
			}
		});
	};
	Replace.chooseCustomer = function($obj){
		$.ajax({
			url : KingServices.build_url('financial/bookingAccount', 'selectPartnerAgency'),
			type : "POST"
		}).done(function(data){
			if(showDialog(data)){
				if(!data.partnerAgencyList)return;
				for(var i=0; i<data.partnerAgencyList.length; i++){
	                data.partnerAgencyList[i].value = data.partnerAgencyList[i].fromPartnerAgencyName;
	                data.partnerAgencyList[i].id = data.partnerAgencyList[i].partnerAgencyId;
	            }
	            var all = {id:'', value: '全部'};
	            Replace.customerList = data.partnerAgencyList.slice(all);
	            if(!!$obj){
	            	data.partnerAgencyList.unshift(all);
		            $obj.autocomplete({
						minLength: 0,
						source : data.partnerAgencyList,
					    change: function(event, ui) {
					        if (!ui.item)  {
					            $(this).data('id', '');
					        }
					    },
					    select: function(event, ui) {
					        $(this).blur().data('id', ui.item.id);
					    }
					}).on('click', function(){
					    $obj.autocomplete('search', '');
					});
	            }
        	}
		});
	};
	/**
	 * 对账
	 * @param  {int} id 客户ID
	 */
	Replace.checking = function(args){
		Replace.checkingId = args.partnerAgencyId;
		Replace.checkingName = args.name;
		Replace.checkingList(args);
	};
	Replace.clearComma = function(str){
		return str.replace(/(\uff0c){2,}/g, '，').replace(/(\uff0c)$/g, '');
	};
	Replace.checkingList = function(args,$tab){
		if(!!$tab){
			var project = Replace.$checkingTab.find(".T-search-project").val().split(', '),
				order = Replace.$checkingTab.find(".T-search-order").val();
				args.pageNo = args.pageNo || 0;
				args.partnerAgencyId = Replace.$checkingTab.find('input[name=partnerAgencyId]').val();
				args.name = Replace.$checkingTab.find('input[name=partnerAgencyName]').val();
				args.orderNumber = order == '全部' ? '' : order;
				args.startDate = Replace.$checkingTab.find(".T-search-start-date").val();
				args.endDate = Replace.$checkingTab.find(".T-search-end-date").val();
				args.projects = Replace.$checkingTab.find(".T-search-project").val();
				args.isConfirmAccount = Replace.$checkingTab.find(".T-check-status").find("button").data("value");

                args.busCompanyOrderStatus = '';
                args.hotelOrderStatus = '';
                args.scenicOrderStatus = '';
                args.ticketOrderStatus = '';
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
		args.sortType = 'startTime';
        args.order='asc';
		$.ajax({
			url : KingServices.build_url('financial/bookingAccount', 'listBookingAcccount'),
			type: 'post',
			data: args
		}).done(function(data){
			if (showDialog(data)) {
				data.name = args.name;
				for(var j=0; j<data.bookinAccountList.length; j++){
					var detailList = data.bookinAccountList[j].detailList;
					data.bookinAccountList[j].newDetail = '';
					for(var i=0; i<detailList.length; i++){
						var formula = detailList[i].count + "×" + detailList[i].price;
						data.bookinAccountList[j].newDetail += detailList[i].name + '，' + detailList[i].type + '，' + detailList[i].shift + '，' + detailList[i].level + '，' + formula + "=" + (detailList[i].count * detailList[i].price) + '，';
					}
					data.bookinAccountList[j].newDetail = Replace.clearComma(data.bookinAccountList[j].newDetail);
				}
				if(Replace.checkTemp && Replace.checkTemp.length > 0){
                    data.bookinAccountList = FinancialService.getCheckTempData(data.bookinAccountList,Replace.checkTemp);
                    var total = $tab.data("total");
                    total.sumSettlementMoney = Replace.checkTemp.sumSttlementMoney;
                    total.sumUnReceiveMoney = Replace.checkTemp.sumUnPayedMoney;
                    $tab.data('total', total);
                }
				
				if(Tools.addTab(checkMenuKey, "代订对账", replaceChecking(data))){
					Replace.$checkingTab = $('#tab-' + checkMenuKey + '-content');
					if(Replace.checkTemp && Replace.checkTemp.length > 0){
                        Replace.$checkingTab.data('isEdited',true);
                    }
                    if(Replace.$checkingTab.data("total")){
                        Replace.loadSumData(Replace.$checkingTab);
                    } else {
                        Replace.getCheckSumData(args,Replace.$checkingTab);
                    }
                    //取消对账权限过滤
                    checkDisabled(data.bookinAccountList,Replace.$checkingTab.find(".T-checkTr"),Replace.$checkingTab.find(".T-checkList").data("right"));
					Replace.CM_event(Replace.$checkingTab,args,true);
				} else {
					Replace.$checkingTab.data('next', args)
				}
				
				// 绑定翻页组件
				laypage({
				    cont: Replace.$checkingTab.find('.T-pagenation'), 
				    pages: data.searchParam.totalPage, //总页数
				    curr: (data.searchParam.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		var temp = FinancialService.checkSaveJson(Replace.$checkingTab,Replace.checkTemp,new FinRule(0));
                            if(!temp){
                                return false;
                            } else {
                                Replace.checkTemp = temp;
                                Replace.$checkingTab.data('isEdited',false);
					    		args.pageNo = obj.curr -1;
					    		Replace.checkingList(args,Replace.$checkingTab);
                            }
				    	}
				    }
				});	
			}
		});
	};

	Replace.CM_event = function($tab,args,isCheck){
		var validator = new FinRule(isCheck ? 0 : (Replace.isBalanceSource ? 3 : 1)),
		validatorCheck = validator.check($tab);
		Replace.getCustomerList($tab,isCheck);
		// 处理关闭与切换tab
        $tab.find(".T-clearList, .T-checkList").off('change').on('change',"input",function(event) {
            event.preventDefault();
            $(this).closest('tr').data("change",true);
            $tab.data('isEdited', true);
        });
        $tab.off(SWITCH_TAB_SAVE).off(CLOSE_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT)
        .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
            event.preventDefault();
            if (!validatorCheck.form())return;
            if (isCheck) {
            	Replace.saveCheckingData($tab,$tab.data('next'),[tab_id, title, html]);
        	}else{
            	Replace.savePayingData($tab,$tab.data('next'),[tab_id, title, html]);
        	}
        })
        .on(SWITCH_TAB_BIND_EVENT, function() {
            if (!isCheck) {
            	Replace.payingJson = false;
				Replace.balanceList($tab.data('next'));
            }else{
            	Replace.checkTemp = false;
            	Replace.checkingList($tab.data('next'));
            }
            $tab.data("total","");
        })
        .on(CLOSE_TAB_SAVE, function(event) {
            event.preventDefault();
            if (!validatorCheck.form())return;
            if (isCheck) {
            	Replace.saveCheckingData($tab);
        	}else{
            	Replace.savePayingData($tab);
        	}
        })
        .on(CLOSE_TAB_SAVE_NO, function(event) {
            event.preventDefault();
            if(!isCheck){
                Replace.payingJson = false;
            } else {
            	Replace.checkTemp = false;
            }
            $tab.data("total","");
        });
		//搜索
		var $searchArea = $tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.datepicker');
		Tools.setDatePicker($datepicker, true);
		Replace.chooseOrder($searchArea.find('.T-search-order'));
		Replace.chooseProject($searchArea.find('.T-search-project'));

		//搜索下拉事件
        $searchArea.find('.T-check-status').on('click', 'a', function(event) {
            event.preventDefault(); 
            var $this = $(this);
            // 设置选择的效果
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());
            $tab.data("total","");
            args.pageNo = 0;
			if(isCheck){
				Replace.checkingList(args,$tab);
			}else{
				Replace.balanceList(args,$tab);
			}
        });
		$searchArea.find('.T-btn-search').off().on('click', function(event){
			event.preventDefault();
			$tab.data("total","");
			args.pageNo = 0;
			if(isCheck){
				Replace.checkingList(args,$tab);
			}else{
				Replace.balanceList(args,$tab);
			}
		});
		if (!isCheck) {
        	var $list = $tab.find('.T-clearList');
        	Tools.descToolTip($list.find(".T-ctrl-tip"),1);
        }else{
        	Tools.descToolTip($tab.find(".T-ctrl-tip"),1);
        };
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
            FinancialService.initPayEvent($searchArea);
        } else {
            //给全选按钮绑定事件: 未去重
        	FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));
			FinancialService.updateUnpayMoney($tab, validator);
			//导出报表事件 btn-hotelExport
	        $tab.find(".T-btn-export").click(function(){

	            var argsData = {
	                    orderNumber: $tab.find('.T-search-order').val(),
	                    partnerAgencyId: $tab.find('input[name=partnerAgencyId]').val(),
	                    travelAgencyName: $tab.find('input[name=partnerAgencyName]').val(),
	                    startDate: $tab.find('.T-search-start-date').val(),
	                    endDate: $tab.find('.T-search-end-date').val(),
	                    accountStatus : args.accountStatus,
	                    isConfirmAccount : $tab.find(".T-check-status").find("button").data("value")
	                };
	            argsData.orderNumber = argsData.orderNumber === "全部" ? "" : argsData.orderNumber;
                var project = Replace.$checkingTab.find(".T-search-project").val().split(', ');
	        	if(project.length > 0){
					for(var i=0; i<project.length; i++){
						if(project[i] == "车队"){
							argsData.busCompanyOrderStatus = 1;
						}else if(project[i] == "酒店"){
							argsData.hotelOrderStatus = 1;
						}else if(project[i] == "景区"){
							argsData.scenicOrderStatus = 1;
						}else if(project[i] == "票务"){
							argsData.ticketOrderStatus = 1;
						}
					}
				}
	            FinancialService.exportReport(argsData,"exportArrangeBookingOrderFinancial");
	        });
        }
        FinancialService.closeTab(oMenuKey);
		$tab.find('.T-saveClear').off().on('click', function(event){
			if (!validatorCheck.form()) {
                return;
            }
			if(isCheck){
				FinancialService.changeUncheck($tab.find('.T-checkTr'), function(){
					Replace.saveCheckingData($tab,args);
	            });
			}else{
	        	Replace.savePayingData($tab,args);
			}
		});

		if(!isCheck){
			$tab.find('.T-btn-autofill').off().on('click', function(event){
				event.preventDefault();
				var $that = $(this);

	            if ($that.hasClass('btn-primary')) {
	                if (validatorCheck.form()) {

                    	Replace.autoFillData($tab);
	                }
	            } else {
	                Replace.setAutoFillEdit($tab, false,isCheck);
	            }
			});
		}
	};

	Replace.autoFillData = function($tab){
		if(!!$tab && $tab.length){
			var args = FinancialService.autoPayJson(Replace.balanceId, $tab, new FinRule(2), 1);
			if(!args)return;
			var project = $tab.find(".T-search-project").val().split(', '),
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
			args = {
                partnerAgencyId : Replace.balanceId,
                orderNumber : order == '全部' ? '' : order,
                busCompanyOrderStatus : bus,
                hotelOrderStatus : hotel,
                scenicOrderStatus : scenic,
                ticketOrderStatus : ticket,
                sumTemporaryIncomeMoney : $tab.find('.T-sumReciveMoney').val(),
                startDate : $tab.find('.T-search-start-date').val(),
                endDate : $tab.find('.T-search-end-date').val(),
                accountStatus : $tab.find('input[name=accountStatus]').val()
            }
			var $datepicker = $tab.find('.T-search-area .datepicker');
            FinancialService.autoPayConfirm($datepicker.eq(0).val(), $datepicker.eq(1).val(),function(){
            	$.ajax({
	                url: KingServices.build_url('financial/bookingAccount', 'autoBookingAccount'),
	                type: 'post',
	                data: args,
	            })
	            .done(function(data) {
	                if (showDialog(data)) {
	                	var payType = $tab.find('select[name=sumPayType]').val(),
	                		bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val();
						var voucher = $tab.find('input[name=credentials-number]').val();
						var billTime = $tab.find('input[name=tally-date]').val();
						var bankNumber = (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val();
	                    Replace.payingJson = data.bookingAccountList;
	                    Replace.payingJson.bankId = bankId;
	                    Replace.payingJson.voucher = voucher;
	                    Replace.payingJson.billTime = billTime;
	                    Replace.payingJson.bankNumber = bankNumber;
	                    Replace.setAutoFillEdit($tab, true);
	                    $tab.data('isEdited', true);
	                }
	            });
            });
		}
	}
	Replace.setAutoFillEdit = function($tab, disable,isCheck) {
        var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
        if (!disable) {
            $sum.val(0);
        }

        $tab.find('.T-btn-autofill').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');

        Replace.getOperationList({pageNo : 0}, $tab);
        $tab.data('isEdited', true);
        var validator = new FinRule(isCheck ? 0 : (Replace.isBalanceSource ? 3 : 1));
        FinancialService.updateSumPayMoney($tab, validator);
    };

    /**
     * 获取付款列表数据
     * @param  {int} pageNo 列表页码
     * @return {[type]}        [description]
     */
    Replace.getOperationList = function(args, $tab) {
        if ($tab) {
            var project = Replace.$balanceTab.find(".T-search-project").val().split(', ');
			var order = Replace.$balanceTab.find(".T-search-order").val();
			args = {
				pageNo : (args.pageNo || 0),
				partnerAgencyId : $tab.find('input[name="partnerAgencyId"]').val(),
				orderNumber : order == '全部' ? '' : order,
				endDate : Replace.$balanceTab.find(".T-search-end-date").val(),
				startDate : Replace.$balanceTab.find(".T-search-start-date").val(),
				accountStatus : Replace.$balanceTab.find("input[name=accountStatus]").val(),
				isConfirmAccount : Replace.$balanceTab.find(".T-check-status").find("button").data("value")
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
			args.sortType = 'startTime';
        	args.order='asc';
			$.ajax({
				url : KingServices.build_url('financial/bookingAccount', 'listBookingAcccount'),
				type : "POST",
				data : args
			}).done(function(data){
				if (showDialog(data)) {
					for(var j=0; j<data.bookinAccountList.length; j++){
						var detailList = data.bookinAccountList[j].detailList;
						data.bookinAccountList[j].newDetail = '';
						for(var i=0; i<detailList.length; i++){
							data.bookinAccountList[j].newDetail += detailList[i].name + '，' + detailList[i].type + '，' + detailList[i].shift + '，' + detailList[i].level + '，' + detailList[i].count + "×" + detailList[i].price + "=" + (detailList[i].count * detailList[i].price) + '，';
						}
						data.bookinAccountList[j].newDetail = Replace.clearComma(data.bookinAccountList[j].newDetail);
					}
					var html;
					data.bookinAccountList = FinancialService.getTempDate(data.bookinAccountList, Replace.payingJson);
					html = payingTableTemplate(data);
					Replace.$balanceTab.find('.T-clearList').html(html);
					if(Replace.payingJson){
						Replace.$balanceTab.data('isEdited',true);
					}
					Replace.CM_event(Replace.$balanceTab,args,false);

                    // 设置记录条数及页面
                    $tab.find('.T-sumItem').text('共计' + data.recordSize + '条记录');
                    $tab.find('.T-saveClear').data('pageNo', args.pageNo);

					// 绑定翻页组件
					laypage({
					    cont: Replace.$balanceTab.find('.T-pagenation'), 
					    pages: data.searchParam.totalPage, //总页数
					    curr: (data.searchParam.pageNo + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		Replace.payingJson = FinancialService.clearSaveJson(Replace.$balanceTab,Replace.payingJson,new FinRule(Replace.isBalanceSource ? 3 : 1));
					    		Replace.$balanceTab.data('isEdited',false);
					    		args.pageNo = obj.curr -1;
					    		Replace.getOperationList(args,Replace.$balanceTab);
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
          		var val = $(this).val();
          		if(val.indexOf(ui.item.value) == -1){
          			if(val){ val += ", "; }
	          		val += ui.item.value;
			         
			        this.value = val;
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

	Replace.saveCheckingData = function($tab,args,tabArgs){
		var argLen = arguments.length,
			validator = new FinRule(0);
		var json = FinancialService.checkSaveJson($tab,Replace.checkTemp,validator,true);
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
                    showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                    	$tab.data('isEdited', false);
                    	Replace.checkTemp = false;
                    	$tab.data("total","");
                        if (argLen === 1) {
                        	Tools.closeTab(checkMenuKey);
                            Replace.getList(Replace.listPageNo);
                        } else {
                            Replace.checkingList(args);
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
	Replace.balance = function(args){
		Replace.balanceId = args.partnerAgencyId;
		Replace.balanceName = args.name;
		Replace.isBalanceSource = false;
		args.accountStatus  =  args.accountStatus || Replace.$tab.find(".T-finance-status").find("button").data("value");
		Replace.balanceList(args);
	};
	Replace.initIncome = function(args){
		Replace.balanceId = args.id;
		Replace.balanceName = args.name;
		Replace.isBalanceSource = true;
		args.pageNo = 0;
		args.partnerAgencyId = args.id;
		Replace.chooseCustomer();
		Replace.balanceList(args);
	};


	Replace.balanceList = function(args,$tab){
		if(!!$tab){
			var project = $tab.find(".T-search-project").val().split(', '),
				order = $tab.find(".T-search-order").val();
			args = {
				pageNo : args.pageNo || 0,
				partnerAgencyId : $tab.find("input[name=partnerAgencyId]").val(),
				name : $tab.find("input[name=partnerAgencyName]").val(),
				orderNumber : order == '全部' ? '' : order,
				startDate : $tab.find(".T-search-start-date").val(),
				endDate : $tab.find(".T-search-end-date").val(),
				projects : $tab.find(".T-search-project").val(),
				isConfirmAccount : $tab.find(".T-check-status").find("button").data("value"),
				accountStatus : $tab.find('input[name=accountStatus]').val()
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
		args.sortType = 'startTime';
        args.order='asc';
		$.ajax({
			url : KingServices.build_url('financial/bookingAccount', 'listBookingAcccount'),
			type : "POST",
			data : args
		}).done(function(data){
			if (showDialog(data)) {
				var html;
				data.name = args.name;
				data.source = Replace.isBalanceSource;
				for(var j=0; j<data.bookinAccountList.length; j++){
					var detailList = data.bookinAccountList[j].detailList;
					data.bookinAccountList[j].newDetail = '';
					for(var i=0; i<detailList.length; i++){
						data.bookinAccountList[j].newDetail += detailList[i].name + '，' + detailList[i].type + '，' + detailList[i].shift + '，' + detailList[i].level + '，' + detailList[i].count + "×" + detailList[i].price + "=" + (detailList[i].count * detailList[i].price) + '，';
					}
					data.bookinAccountList[j].newDetail = Replace.clearComma(data.bookinAccountList[j].newDetail);
				}
				if(Tools.addTab(blanceMenuKey, "代订收款", replaceClearing(data))){
					Replace.$balanceTab = $('#tab-' + blanceMenuKey + '-content');
					html = payingTableTemplate(data);
					Replace.$balanceTab.find('.T-clearList').html(html);
					if(Replace.$balanceTab.data("total")){
                        Replace.loadSumData(Replace.$balanceTab);
                    } else {
                        Replace.getCheckSumData(args,Replace.$balanceTab);
                    }
					Replace.CM_event(Replace.$balanceTab,args,false);
					var payingCheck = new FinRule(2).check(Replace.$balanceTab);
				} else {
					Replace.$balanceTab.data("next",args);
				}
				// 绑定翻页组件
				laypage({
				    cont: Replace.$balanceTab.find('.T-pagenation'), 
				    pages: data.searchParam.totalPage, //总页数
				    curr: (data.searchParam.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Replace.payingJson = FinancialService.clearSaveJson(Replace.$balanceTab,Replace.payingJson,new FinRule(Replace.isBalanceSource ? 3 : 1));
				    		Replace.$balanceTab.data('isEdited',false);
				    		args.pageNo = obj.curr -1;
				    		Replace.getOperationList(args,Replace.$balanceTab);
				    	}
				    }
				});	
			}
		});
	};
	Replace.savePayingData = function($tab,args,tabArgs){
		var check =  new FinRule(5).check($tab);
    	if(!check.form()){ return false; }
		
		var validator = new FinRule(Replace.isBalanceSource ? 3 : 1);
		var argLen = arguments.length,
			json = FinancialService.clearSaveJson($tab, Replace.payingJson, validator,true);
		if(!json){ return false;}
		var payType = $tab.find('select[name=sumPayType]').val(),
			bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val();
		var voucher = $tab.find('input[name=credentials-number]').val();
		var billTime = $tab.find('input[name=tally-date]').val();
        $.ajax({
            url: KingServices.build_url('financial/bookingAccount', 'receiveBookingAccount'),
            type: 'post',
            data: {
                reciveAccountList: json,
                partnerAgencyId: Replace.balanceId,
                payType: payType,
                bankId:bankId,
                voucher:voucher,
                billTime:billTime,
                remark: $tab.find('.T-sumRemark').val()
            },
        })
        .done(function(data) {
            $tab.data('isEdited', false);
            Replace.payingJson = false;
            $tab.data("total","");
            showMessageDialog($('#confirm-dialog-message'), data.message, function() {
                if (argLen === 1) {
                	Tools.closeTab(blanceMenuKey);
                    Replace.getList(Replace.listPageNo);                            
                } else {
                    Replace.balanceList(args);
                }
            })
        });
	};

	Replace.getCustomerList = function($tab,isCheck){
		var $obj = $tab.find('input[name=partnerAgencyName]'),
			name = $obj.val();
        $obj.autocomplete({
            minLength: 0,
            source : Replace.customerList,
            change: function(event,ui) {
                if (!ui.item)  {
                    $obj.val(name);
                }
            },
            select: function(event,ui) {
                var args = {
                    pageNo : 0,
                    partnerAgencyId : ui.item.id, 
					name : ui.item.value,
					startDate : $tab.find('.T-search-start-date').val(),
					endDate : $tab.find('.T-search-end-date').val(),
					accountStatus : $tab.find('input[name=accountStatus]').val(),
                };
                if(isCheck){
                	Replace.checking(args);
                } else {
                	Replace.balance(args);
                }
            }
        }).on("click",function(){
            $obj.autocomplete('search','');
        });
	};

	/* 获取合计数据 */
    Replace.getCheckSumData = function(args,$tab){
        $.ajax({
            url: KingServices.build_url('financial/bookingAccount', 'listBookingAcccountTotal'),
            type: 'POST',
            data: args,
        })
        .done(function(data) {
            if(showDialog(data)){
                $tab.data("total",data);
                Replace.loadSumData($tab);
            }
        });
    };
    Replace.loadSumData = function($tab){
        var total = $tab.data("total");
        $tab.find(".T-sumBookingMoney").text(total.sumBookingMoney);
        $tab.find(".T-sumReceiveMoney").text(total.sumReceiveMoney);
        $tab.find(".T-stMoney").text(total.sumSettlementMoney);
        if($tab.find('.T-checkedUnPayedMoney').length > 0){
        	$tab.find(".T-unpayMoney").text(total.sumUnReceiveMoney);
        	$tab.find(".T-checkedUnPayedMoney").text(total.checkedUnPayedMoney);
        } else {
        	$tab.find(".T-unpayMoney").text(total.checkedUnPayedMoney);
        	$tab.find(".T-sumUnReceiveMoney").text(total.sumUnReceiveMoney);
        }
    };

	exports.init = Replace.initModule;
	exports.initIncome = Replace.initIncome;
});