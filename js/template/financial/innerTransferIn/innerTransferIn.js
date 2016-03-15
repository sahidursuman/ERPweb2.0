/**
 * 财务管理--购物账务
 *
 * by David Bear 2015-11-24
 */
define(function(require, exports) {
    var listTemplate = require("./view/list"),
        checkingTemplate = require("./view/shopChecking"),
        billImagesTemplate = require("./view/shopLookImg"),
        clearingTemplate = require("./view/shopClearing"),
        viewReceivedTemplate = require("./view/viewReceived"),
        viewAccountTemplate = require('./view/viewAccount'),
        payingTableTemplate = require('./view/shopPayingTable'),
        menuKey = "financial_shop";

    var FinTransIn = {
        $tab: false,
        $checkingTab: false,
        checkingId: null
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
        args.pageNo = page || 0;
        args.sortType = "auto";
        $.ajax({
            url: KingServices.build_url("account/innerTransferIn","listInnerTransferIncome"),
            type: 'post',
            data: args
        }).done(function(data) {
            if (showDialog(data)) {
                Tools.addTab(listTabId,"内转转入",html);
                // 绑定事件
                FinTransIn.$tab = $tab = $('#tab-' + menuKey + '-content');
                FinTransIn.initList($tab);
                FinTransIn.getQuery(FinTransIn.$tab);
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
                            FinTransIn.getList(obj.curr - 1, $tab);
                        }
                    }
                });
            }
        });
    };

    //获取合计金额
	FinTransIn.getSumData = function(data,$tab){
		var totalPeople = data.sumChildCount+data.sumAdultCount;
		$tab.find('.T-sumCount').text(totalPeople);
        $tab.find('.T-sumInnerInMoney').text(data.sumTransNeedPayMoney);
        $tab.find('.T-sumStMoney').text(data.sumSettlementMoney);
        $tab.find('.T-sumReceiveMoney').text(data.sumAlreadyIncomeMoney);
        $tab.find('.T-sumUnReceivedMoney').text(data.sumUnIncomeMoney);
	};

    //获取首页搜索框的数据
	FinTransIn.getQuery = function($obj){
		var $nameObj = $obj.find('input[name=businessGroupName]');
		$nameObj.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					var $div = $(this).closest('div');
					$div.find('input[name=toBusinessGroupId]').val('');
				}
			},
			select:function(event,ui){
				var $div = $(this).closest('div');
				$div.find('input[name=toBusinessGroupId]').val(ui.item.id);
			}
		}).off('click').on('click',function(){
			var obj = $(this);
			$.ajax({
				url:KingServices.build_url('account/innerTransferIn','getQueryTerms'),
				type:'POST',
				showLoading:false,
				success:function(data){
					var result = showDialog(data);
					if(result){
						var businessGroupList = data.businessGroupList;
						var allItem = {
							id:"",
							name:"全部"
						};
						businessGroupList.unshift(allItem);
						for(var i = 0;i<businessGroupList.length;i++){
						businessGroupList[i].value = businessGroupList[i].name;
						}
						obj.autocomplete('option','source', businessGroupList);
						obj.autocomplete('search','');
					}
				}
			});
			
		});
	};

    //初始化列表页面的事件绑定
    FinTransIn.initList = function($tab) {
        //搜索下拉事件
        $tab.find('.T-finance-status').on('click', 'a', function(event) {
            event.preventDefault(); //阻止相应控件的默认事件
            var $that = $(this);
            // 设置选择的效果
            $that.closest('ul').prev().attr('data-value', $that.data('value')).children('span').text($that.text());
            FinTransIn.getList(0,$tab);
        });
        $tab.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            FinTransIn.getList(0, $tab);
        });
        Tools.setDatePicker($tab.find('.datepicker'), true);
        FinTransIn.getShopName($tab.find('.T-search-name'));
        // 报表内的操作
        $tab.find('.T-list').on('click', '.T-action', function(event) {
            event.preventDefault();
            var $that = $(this),
                argsData = {
                    businessGroupId: $that.closest('tr').data('id'),
                    businessGroupName: $that.closest('tr').data('name'),
                    startAccountTime: $tab.find('input[name=startDate]').val(),
                    endAccountTime: $tab.find('input[name=endDate]').val(),
                    accountStatus : $tab.find(".T-finance-status").find("button").data("value")
                };
            if ($that.hasClass('T-checking')) {
                // 对账
                FinTransIn.accountChecking(argsData);
            } else if ($that.hasClass('T-settlement')) {
                // 结算
                FinTransIn.settlement(argsData);
            }
        });
    };

    //对账
    FinTransIn.getCheckList = function(args,$tab) {
        if (!!$tab) {
        	args.lineProductId = $tab.find('input[name=lineProductId]').val();
        	args.lineProductName = $tab.find('input[name=lineProductName]').val();
        	args.receiveUserId = $tab.find('input[name=receiveUserId]').val();
        	args.receiveUserName = $tab.find('input[name=receiveUserName]').val();
        	args.orderNumber = $tab.find('input[name=orderNumber]').val();
        	args.startAccountTime = $tab.find('input[name=startDate]').val();
        	args.endAccountTime = $tab.find('input[name=endDate]').val();
            args.accountStatus = $tab.find('[name=accountStatus]').val();
        }
        args.pageNo = args.pageNo || 0;
        
        $.ajax({
            url:KingServices.build_url("account/innerTransferIn","listInnerTransferIncomeDetails"),
            type: "POST",
            data: args
        }).done(function(data) {
            if (showDialog(data)) {
                if (Tools.addTab(menuKey + "-checking", "内转转入对账", checkingTemplate(data))) {
                    FinTransIn.$checkingTab = $('#tab-' + menuKey + '-checking-content');
                    FinTransIn.initCheck(args,FinTransIn.$checkingTab);
                } else {
                    FinTransIn.$checkingTab.data('next',args);
                }

                // 绑定翻页组件
                laypage({
                    cont: FinTransIn.$checkingTab.find('.T-pagenation'),
                    pages: data.searchParam.totalPage, //总页数
                    curr: (args.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) {
                            FinTransIn.$checkingTab.data('isEdited',false);
                            args.pageNo = obj.curr - 1;
                            FinTransIn.getCheckList(args);
                        }
                    }
                });
            }
        });
    };

    //对账事件初始化
    FinTransIn.initCheck = function(args,$tab){
    	FinTransIn.getSumDataIn(args,$tab);

    	//搜索顶部的事件绑定
        $tab.find('.T-btn-search').on('click', function(event) {
            event.preventDefault();
            args.pageNo = 0;
            FinTransIn.getCheckList(args,$tab);
        });
		FinancialService.initCheckBoxs($tab.find(".T-selectAll"),$tab.find('.T-checkbox'));
		//计算返款金额
		FinancialService.updateMoney_checking($tab,3);

        //导出报表事件
		$tab.find(".T-btn-export").on('click',function(event){
			var argsDate = { 
					businessGroupId : args.businessGroupId,
					lineProductId : $tab.find('input[name=lineProductId]').val(),
					lineProductName : $tab.find('input[name=lineProductName]').val(),
					orderNumber : $tab.find('input[name=orderNumber]').val(),
					receiveUserId : $tab.find('input[name=receiveUserId]').val(),
					receiveUserName : $tab.find('input[name=receiveUserName]').val(),
                    startAccountTime : $tab.find('input[name=startDate]').val(),
                    endAccountTime : $tab.find('input[name=endDate]').val()
                };
            argsDate.lineProductName = argsDate.lineProductName === "全部" ? "" : argsDate.lineProductName;
            argsDate.receiveUserName = argsDate.receiveUserName === "全部" ? "" : argsDate.receiveUserName;
            FinancialService.exportReport(argsDate,"exportArrangeInnerTransferInFinancial");
		});

		//确认对账事件
        $tab.find(".T-checking").off().on('click',function(event){
        	if(!validatorCheck.form()){return;}
			FinancialService.changeUncheck($tab.find('.T-checkList tr'),function(){
                InnerTransferIn.saveCheckingData($tab,args);
            });
        });
    };

    FinTransIn.init_event = function(args,$tab,option){
    	Tools.setDatePicker($tab.find(".date-picker"), true);
    	//关闭事件
        FinancialService.closeTab(menuKey + "-" + option + "ing");

        //查看游客小组
		$tab.on('click','.T-seeGroup',function(event){
			event.preventDefault();
	    	FinTransIn.viewGroup($(this));
	    });
         //查看对账明细
        $tab.on('click','.T-check-Detail',function(){
        	var id = $(this).closest('tr').attr('data-entity-id');
        	FinTransIn.viewAccountDetail(id);
        });
        //查看付款明细事件
        $tab.on('click',".T-viewDetail",function(){
        	var id = $(this).closest('tr').attr('data-entity-id');
        	FinTransIn.viewPayedDetail(id);
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
					$tab.find('.T-sumTransCount').text(data.totalCount);
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

	//查看游客小组
	InnerTransferIn.viewGroup = function($obj){
		var data = {
			memberList : $obj.data("list")
		};

		if(!data){
			showMessageDialog($("#confirm-dialog-message"),"游客小组不存在，请检查！");
            return false;
		}
		var html = viewGroupTemplate(data);
		layer.open({
			type : 1,
			title :"查看小组",
			skin : 'layui-layer-rim',
			area : "850px", 
			zIndex : 1028,
			content : html,
			scrollbar: false 
		});
	};
    // /**
    //  * 对账和收款绑定事件
    //  * @param  {[type]} $tab [description]
    //  * @param  {[type]} type [description]
    //  * @return {[type]}      [description]
    //  */
    // FinTransIn.initOperationEvent = function($tab,args,type) {
    //     var validator = (new FinRule(!type ? 0 : (FinTransIn.isBalanceSource ? 3 : 1))).check($tab);

    //     
    //     var $datepicker = $searchArea.find('.datepicker');
    //     Tools.setDatePicker($datepicker, true);
    //     var operationMenuKey = settMenuKey,
    //         saveData = type ? FinTransIn.saveSettlement : FinTransIn.saveChecking;

    //     // 监听修改
    //     var $list = type ? $tab.find(".T-clearList") : $tab.find(".T-checkList");
    //     $list.off('change').on('change', "input", function(event) {
    //         event.preventDefault();
    //         $(this).closest('tr').data("change", true);
    //         $tab.data('isEdited', true);
    //     });

    //     $tab.off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE).on(SWITCH_TAB_BIND_EVENT, function(event) {
    //         event.preventDefault();
    //         FinTransIn.initOperationEvent($tab,$tab.data("next"),type);
    //     })
    //     // 监听保存，并切换tab
    //     .on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
    //         event.preventDefault();
    //         saveData($tab,args,[tab_id, title, html]);
    //     })
    //     // 保存后关闭
    //     .on(CLOSE_TAB_SAVE, function(event) {
    //         event.preventDefault();
    //         saveData($tab);
    //     });

    //     if (type) {
    //         var autoValidator = (new FinRule(2)).check($tab);
    //         FinancialService.updateSumPayMoney($tab, new FinRule(FinTransIn.isBalanceSource ? 3 : 1));
    //         $tab.find(".T-btn-autofill").on('click', function(event) {
    //             event.preventDefault();
    //             if ($(this).hasClass('btn-primary')) {
    //                 if (autoValidator.form()) {
    //                     FinancialService.autoPayConfirm($datepicker.eq(0).val(), $datepicker.eq(1).val(), function() {
    //                         FinTransIn.autoFillMoney($tab);
    //                     });
    //                 }
    //             } else {
    //                 FinTransIn.payingJson = [];
    //                 FinTransIn.setAutoFillEdit($tab, false);
    //             }
    //         });

    //         FinancialService.initPayEvent($searchArea);
    //     } else {
    //         operationMenuKey = checkMenuKey;
    //         FinancialService.updateUnpayMoney($tab, new FinRule(0));
    //         //给全选按钮绑定事件
    //         FinancialService.initCheckBoxs($tab.find(".T-checkAll"), $tab.find(".T-checkList").find('.T-checkbox'));

    //         //导出报表事件 btn-hotelExport
    //         $tab.find(".T-btn-export").click(function() {
    //             var args = {
    //                 shopId: $tab.find('input[name=shopId]').val(),
    //                 shopName: $tab.find('input[name=shopName]').val(),
    //                 tripMessage: $tab.find('.T-search-trip').val(),
    //                 startDate: $tab.find('.T-search-start-date').val(),
    //                 endDate: $tab.find('.T-search-end-date').val()
    //             };
    //             FinancialService.exportReport(args, "exportArrangeShopFinancial");
    //         });
    //     }

    //     // 报表内的操作
    //     $tab.find('.T-list').on('click', '.T-action', function(event) {
    //         event.preventDefault();
    //         var $that = $(this),
    //             id = $that.closest('tr').data('id');
    //         if ($that.hasClass('T-see-group')) {
    //             FinTransIn.unfold($that);
    //         } else if ($that.hasClass('T-view-receipts')) {
    //             FinTransIn.viewImage($tab, $that.data('billimage'));
    //         } else if ($that.hasClass('T-payDetails')) {
    //             FinTransIn.viewOperationDetail(id, 0);
    //         } else if ($that.hasClass('T-view-details')) {
    //             FinTransIn.viewOperationDetail(id, 1);
    //         }
    //     });


    //     //绑定确定事件
    //     $tab.find('.T-saveClear').on('click', function(event) {
    //         var check = new FinRule(5).check($tab);
    //         if (!check.form()) {
    //             return false;
    //         }
    //         event.preventDefault();
    //         if (!type) {
    //             FinancialService.changeUncheck($tab.find('.T-checkTr'), function() {
    //                 saveData($tab,args);
    //             });
    //         } else {
    //             if (!$tab.data('isEdited')) {
    //                 showMessageDialog($("#confirm-dialog-message"), "您未进行任何操作！");
    //                 return false;
    //             }
    //             var sumPayMoney = parseFloat($tab.find('input[name=sumPayMoney]').val()),
    //                 sumListMoney = parseFloat($tab.find('input[name=sumPayMoney]').data("money"));
    //             if (sumPayMoney != sumListMoney) {
    //                 showMessageDialog($("#confirm-dialog-message"), "本次收款金额合计与单条记录本收付款金额的累计值不相等，请检查！");
    //                 return false;
    //             }
    //             if (sumPayMoney == 0) {
    //                 showConfirmDialog($('#confirm-dialog-message'), '本次收款金额合计为0，是否继续?', function() {
    //                     saveData($tab,args);
    //                 })
    //             } else {
    //                 saveData($tab,args);
    //             }
    //         }
    //     });
    //     //绑定取消事件
    //     FinancialService.closeTab(operationMenuKey);
    // };

    // FinTransIn.viewOperationDetail = function(id, type) {
    //     if (!!id) {
    //         var method = 'findCheckAccountDetail',
    //             title = '应收金额明细',
    //             html = viewAccountTemplate;
    //         if (!type) {
    //             method = 'findReciveAccountDetail';
    //             title = '已收金额明细';
    //             html = viewReceivedTemplate;
    //         }
    //         $.ajax({
    //                 url: KingServices.build_url('financial/shopAccount', method),
    //                 type: 'post',
    //                 data: {
    //                     id: id
    //                 },
    //             })
    //             .done(function(data) {
    //                 if (showDialog(data)) {
    //                     data.type = type;
    //                     layer.open({
    //                         type: 1,
    //                         title: title,
    //                         skin: 'layui-layer-rim',
    //                         area: '1024px',
    //                         zIndex: 1028,
    //                         content: html(data),
    //                         scrollbar: false
    //                     });
    //                 }
    //             });
    //     }
    // };

    // FinTransIn.unfold = function($that) {
    //     if ($that.data('is-show')) {
    //         $that.html('展开');
    //         $that.data('is-show', '');
    //         $that.closest('tr').next().addClass('hide');
    //     } else {
    //         $that.html('收起');
    //         $that.data('is-show', 'true');
    //         $that.closest('tr').next().removeClass('hide');
    //     }
    // };

    // FinTransIn.viewImage = function($tab, strImage) {
    //     if (!strImage) return;
    //     var WEB_IMG_URL_BIG = $tab.find(".globalAdd").data('big'),
    //         WEB_IMG_URL_SMALL = $tab.find(".globalAdd").data('small'),
    //         data = {
    //             "images": []
    //         },
    //         str = strImage,
    //         strs = str.split(",");
    //     for (var i = 0; i < strs.length; i++) {
    //         var s = strs[i];
    //         if (s != null && s != "" && s.length > 0) {
    //             var image = {
    //                 "WEB_IMG_URL_BIG": imgUrl + s,
    //                 "WEB_IMG_URL_SMALL": imgUrl + s + "?imageView2/2/w/150",
    //             }
    //             data.images.push(image);
    //         }
    //     }
    //     var $overflow = null;
    //     layer.open({
    //         type: 1,
    //         title: "单据图片",
    //         skin: 'layui-layer-rim', // 加上边框
    //         area: '500px', // 宽高
    //         zIndex: 1028,
    //         content: billImagesTemplate(data),
    //         scrollbar: false, // 推荐禁用浏览器外部滚动条
    //         success: function() {
    //             $('#layer-photos-financial-count [data-rel="colorbox"]').colorbox(Tools.colorbox_params);
    //         }
    //     });
    // };

    // FinTransIn.saveChecking = function($tab,args,tabArgs) {
    //     console.log("saveChecking");
    //     // 表单校验
    //     var argLen = arguments.length,
    //         json = FinancialService.checkSaveJson($tab, new FinRule(0));
    //     if (JSON.parse(json).length > 0) {
    //         $.ajax({
    //             url: KingServices.build_url('financial/shopAccount', 'checkShopAccount'),
    //             type: "POST",
    //             data: { checkAccountList: json }
    //         }).done(function(data) {
    //             if (showDialog(data)) {
    //                 $tab.data('isEdited', false);
    //                 showMessageDialog($('#confirm-dialog-message'), data.message, function() {
    //                     if (argLen === 1) {
    //                         Tools.closeTab(checkMenuKey);
    //                         FinTransIn.getList(FinTransIn.listPageNo);
    //                     } else if(argLen === 2){
    //                         FinTransIn.initOperationList(args, false, false);
    //                     } else if(argLen === 3){
    //                         Tools.addTab(tabArgs[0],tabArgs[1],tabArgs[2]);
    //                         FinTransIn.initOperationEvent($tab,args,false);
    //                     }
    //                 });
    //             }
    //         });
    //     }else {
    //         showMessageDialog($('#confirm-dialog-message'), '没有可提交的数据');
    //     }
    // };

    // /**
    //  * 自动下账业务逻辑
    //  * @param  {[type]} $tab [description]
    //  * @return {[type]}      [description]
    //  */
    // FinTransIn.autoFillMoney = function($tab) {
    //     if (!!$tab && $tab.length) {
    //         var args = FinancialService.autoPayJson(FinTransIn.settlementId, $tab, new FinRule(2), 1);
    //         if (!args) return;
    //         args = JSON.parse(args);
    //         args.shopId = args.id;
    //         args.sumTemporaryIncomeMoney = args.sumCurrentPayMoney
    //         args.tripMessage = $tab.find('.T-search-trip').val();
    //         delete args.id;
    //         delete args.sumCurrentPayMoney;

    //         $.ajax({
    //                 url: KingServices.build_url('financial/shopAccount', 'autoShopAccount'),
    //                 type: 'post',
    //                 data: args,
    //                 showLoading: false
    //             })
    //             .done(function(data) {
    //                 if (showDialog(data)) {
    //                     var payType = $tab.find('.T-sumPayType').val(),
    //                         bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val();
    //                     var voucher = $tab.find('input[name=credentials-number]').val();
    //                     var billTime = $tab.find('input[name=tally-date]').val();
    //                     var bankNumber = (payType == 0) ? $tab.find('input[name=cash-number]').val() : $tab.find('input[name=card-number]').val();
    //                     FinTransIn.payingJson = data.autoAccountList;
    //                     FinTransIn.payingJson.bankId = bankId;
    //                     FinTransIn.payingJson.voucher = voucher;
    //                     FinTransIn.payingJson.billTime = billTime;
    //                     FinTransIn.payingJson.bankNumber = bankNumber;
    //                     $tab.find('input[name="sumPayMoney"]').val(data.realAutoPayMoney);
    //                     FinTransIn.setAutoFillEdit($tab, true);
    //                 }
    //             });
    //     }
    // };

    // FinTransIn.setAutoFillEdit = function($tab, disable) {
    //     var $sum = $tab.find('input[name="sumPayMoney"]').prop('disabled', disable);
    //     if (!disable) {
    //         $sum.val(0);
    //     }

    //     $tab.find('.T-btn-autofill').html(disable ? '<i class="ace-icon fa fa-times"></i> 取消下账' : '<i class="ace-icon fa fa-check-circle"></i> 自动下账').toggleClass('btn-primary btn-warning');;

    //     FinTransIn.getOperationList(0, $tab);
    //     $tab.data('isEdited', true);
    //     FinancialService.updateSumPayMoney($tab, new FinRule(FinTransIn.isBalanceSource ? 3 : 1));
    // };
    // /**
    //  * 获取对账列表数据
    //  * @param  {int} pageNo 列表页码
    //  * @return {[type]}        [description]
    //  */
    // FinTransIn.getOperationList = function(pageNo, $tab) {
    //     if ($tab) {
    //         var args = {
    //             pageNo: pageNo || 0,
    //             shopId: FinTransIn.settlementId,
    //             startDate: $tab.find('.T-search-start-date').val(),
    //             endDate: $tab.find('.T-search-end-date').val(),
    //             tripMessage: $tab.find('.T-search-trip').val()
    //         };

    //         $.ajax({
    //                 url: KingServices.build_url('financial/shopAccount', 'listReciveShopAcccount'),
    //                 type: "POST",
    //                 data: args
    //             })
    //             .done(function(data) {
    //                 if (showDialog(data)) {
    //                     data.shopAccountList = FinancialService.getTempDate(data.shopAccountList, FinTransIn.payingJson);
    //                     var html = payingTableTemplate(data);
    //                     FinTransIn.$settlementTab.find('.T-checkList').html(html);
    //                     $tab.find('.T-checkTr').on('change', function() {
    //                         $(this).data('change', 'true');
    //                     });
    //                     // 设置记录条数及页面
    //                     $tab.find('.T-sumItem').text('共计' + data.searchParam.recordSize + '条记录');
    //                     $tab.find('.T-saveClear').data('pageNo', args.pageNo);
    //                     // 绑定翻页组件
    //                     laypage({
    //                         cont: $tab.find('.T-pagenation'),
    //                         pages: data.searchParam.totalPage, //总页数
    //                         curr: (data.searchParam.pageNo + 1),
    //                         jump: function(obj, first) {
    //                             if (!first) { // 避免死循环，第一次进入，不调用页面方法
    //                                 $tab.data('isEdited',false);
    //                                 FinTransIn.getOperationList(obj.curr - 1, $tab);
    //                             }
    //                         }
    //                     });
    //                 }
    //             });

    //     }
    // }

    // FinTransIn.saveSettlement = function($tab,args,tabArgs) {
    //     var argLen = arguments.length,
    //         payType = $tab.find('.T-sumPayType').val(),
    //         bankId = (payType == 0) ? $tab.find('input[name=cash-id]').val() : $tab.find('input[name=card-id]').val();
    //     var voucher = $tab.find('input[name=credentials-number]').val();
    //     var billTime = $tab.find('input[name=tally-date]').val();
    //     var json = FinancialService.clearSaveJson($tab, FinTransIn.payingJson, new FinRule(FinTransIn.isBalanceSource ? 3 : 1));
    //     if (json.length) {
    //         var saveArgs = {
    //             shopId: FinTransIn.settlementId,
    //             payType: payType,
    //             bankId: bankId,
    //             voucher: voucher,
    //             billTime: billTime,
    //             remark: $tab.find('.T-sumRemark').val(),
    //             reciveAccountList: JSON.stringify(json)
    //         }
    //         $.ajax({
    //                 url: KingServices.build_url('financial/shopAccount', 'receiveShopAccount'),
    //                 type: 'post',
    //                 data: saveArgs,
    //             })
    //             .done(function(data) {
    //                 $tab.data('isEdited', false);
    //                 FinTransIn.payingJson = [];
    //                 showMessageDialog($('#confirm-dialog-message'), data.message, function() {
    //                     if (argLen === 1) {
    //                         Tools.closeTab(settMenuKey);
    //                         FinTransIn.getList(FinTransIn.listPageNo);
    //                     } else if(argLen === 2){
    //                         FinTransIn.initOperationList(args, true,false);
    //                     } else if(argLen === 3){
    //                         Tools.addTab(tabArgs[0],tabArgs[1],tabArgs[2]);
    //                         FinTransIn.initOperationEvent($tab,args,true);
    //                     }
    //                 })
    //             });
    //     } else {
    //         showMessageDialog($('#confirm-dialog-message'), '没有可提交的数据！');
    //     }
    // };

    // 暴露方法
    exports.init = FinTransIn.initModule;
    exports.initIncome = FinTransIn.initPay;
});
