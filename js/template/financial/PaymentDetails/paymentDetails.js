/**
 * 财务管理--现金日记
 */
define(function(require, exports){
	var listTemplate = require("./view/list"),
		listTableTemplate = require("./view/listTable"),
		addTemplate = require("./view/add"),
		detailsTemplate = require("./view/viewDetails"),
		rule = require("./rule"),
		menuKey = "financial_payment_details";

	var Payment = {
		$tab : false,
		total : {},
		subList0 : false,
		subList1 : false
	};
	/**
	 * 初始化模块
	 */
	Payment.initModule = function(argsData){
		Payment.$tab = null;
		var date = new Date(),
	        year = date.getFullYear(),
	        month = Tools.addZero2Two(date.getMonth() + 1),
	        day = Tools.addZero2Two(date.getDate()),
	        args = argsData || {};
		args.pageNo = 0;
		args.endTime = year + "-" + month + "-" + day;
		args.startTime = year + "-" + month + "-01";
		data = {
			searchParam : args
		};
		Payment.initSearch(args,args.bankNo);
	};
	/**
	 * 获取收/付款合计
	 * @param  {object/number} args 参数
	 * @param  {object} $tab $tab
	 */
	Payment.getTotal = function(args, $tab){
		var page = typeof(args) !== "number" ? (args || 0) : (args.pageNo || 0);
		if(!!Payment.$tab){
			args = Payment.getArgs(page);
		}
		$.ajax({
			url : KingServices.build_url('financialIncomeOrPay', 'findTotal'),
			type : "POST",
			data : {searchParam : JSON.stringify(args)},
			showLoading: false
		}).done(function(data){
			$tab.find('.T-incomeMoney').text(data.total.incomeMoney);
			$tab.find('.T-payMoney').text(data.total.payMoney);
			Payment.total = data.total;
			Payment.allClac($tab,args.beginningBalance);
		});
	};
	//计算合计
	Payment.allClac = function($tab,beginningBalance) {
		var beginningBalance = beginningBalance * 1 || $tab.find('input[name=beginningBalance]').val()-0 || '',
			incomeMoney = $tab.find('.T-incomeMoney').text()-0,
			payMoney = $tab.find('.T-payMoney').text()-0;
		if (($tab.find('.T-search-payment').val() == 1 || $tab.find('.T-search-payment').val() == 0)) {
			var all = ((beginningBalance + incomeMoney) - payMoney).toFixed(2),
				html = ''
				+'<div class="form-group mar-r-10">'
	            +'<label>合计：</label>'
	            +'<label class="F-float F-money">'+ all +'</label>'
	        	+'</div>';
	        var $payMoney = $tab.find('.T-payMoney').closest('div.form-group');
	        if ($payMoney.next('div.form-group').length) {
				$payMoney.next('div.form-group').find('.F-float').text(all);
	        }else {
				$tab.find('.T-payMoney').closest('div.form-group').after(html)
	        }
		}else {
			$tab.find('.T-payMoney').closest('div.form-group').next().remove();
		}
	}
	/**
	 * 初始化事件
	 * @param  {object} $tab $tab
	 */
	Payment.init_event = function($tab){
		var $searchArea = $tab.find('.T-search-area'),
			$datepicker = $searchArea.find('.T-search-time');
		Tools.setDatePicker($datepicker, true);

		$searchArea.on('click',".T-btn-search",function(event){
			event.preventDefault();
			Payment.getTotal(0,$tab);
			Payment.ajaxInit(0);
		})
		.on('click',".T-btn-add",function(event){
			Payment.addPayment();
		});

		$tab.on('change', '.T-beginningBalance, .T-search-payment', function() {
			Payment.getTotal(0,$tab);
			Payment.ajaxInit(0);
		})

		$tab.on("click",".T-viewDetails",function(event){
			Payment.viewDetails($(this).closest('tr').data("id"));
		})
		.on("click",".T-delete",function(){
			var id = $(this).closest('tr').data("id");
			showConfirmMsg($("#confirm-dialog-message"),"是否确认删除该条数据？",function(){
		        Payment.deletePayment(id);
		    },function(){},"放弃","删除");
		});	

		Payment.getSubjectList($tab);
		// FinancialService.initPayEvent($tab);	
	};
	/**
	 * 初始化搜索栏
	 * @param  {object} args 初始化时填充参数
	 */
	Payment.initSearch = function(args,bankNo){
		$.ajax({
			url : KingServices.build_url('financialIncomeOrPay', 'findSelectValue'),
			type : "POST",
		}).done(function(data){
			data.businessTypes = JSON.parse(data.businessTypes);
			data.costTypes = JSON.parse(data.costTypes);
			data.incomeOrPayTypes = JSON.parse(data.incomeOrPayTypes);
			data.receivableTypes = JSON.parse(data.receivableTypes);
			data.total = Payment.total;
			data.searchParam = args;
			Tools.addTab(menuKey, "现金日记", listTemplate(data));
			$tab = $('#tab-' + menuKey + '-content').off();

			FinancialService.initPayEvent($tab);
			Payment.getTotal(args,$tab);
			Payment.ajaxInit(args);
			Payment.$tab = $tab;

			Payment.init_event(Payment.$tab);
			if(bankNo){
				var $obj = (args.accountType == 0) ? Payment.$tab.find(".T-cash-number") : Payment.$tab.find(".T-card-number");
				$obj.val(bankNo);
				$obj.next().val(args.bankId);
				$obj.closest('div').removeClass('hidden');
			}
		});
	};
	/**
	 * 初始化列表
	 * @param  {object/number} args 请求参数
	 */
	Payment.ajaxInit = function(args){
		var page = typeof(args) === "number" ? (args || 0) : (args.pageNo || 0);
		if(!!Payment.$tab){
			args = Payment.getArgs(page);
		}
		$.ajax({
			url : KingServices.build_url('financialIncomeOrPay', 'findPager'),
			type : "POST",
			data : {searchParam : JSON.stringify(args)}
		})
		.done(function(data){
			if(showDialog(data)){
				data.result = JSON.parse(data.result);
				var html = listTableTemplate(data);
				Payment.$tab.find('.T-list').html(html);
				// 设置记录条数及页面
                Payment.$tab.find('.T-sumItem').text('共计' + data.searchParam.totalCount + '条记录');
				// 绑定翻页组件
				laypage({
				    cont: Payment.$tab.find('.T-pagenation'), 
				    pages: data.searchParam.totalPage, //总页数
				    curr: (data.searchParam.pageNo + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		Payment.ajaxInit(obj.curr -1);
				    	}
				    }
				});	
			}
		});
	};
	/**
	 * 获取请求参数
	 * @param  {number} page 当前页
	 */
	Payment.getArgs = function(page){
		var name = Payment.$tab.find('.T-resourceName').val();
		args = {
			pageNo: (page || 0),
			businessTypeId : Payment.$tab.find('.T-search-business').val(),
			moneyType : Payment.$tab.find('.T-moneyType').val(),
			receivableTypeId : Payment.$tab.find('.T-search-category').val(),
			// resourceId : Payment.$tab.find('.T-search-unit').data('id'),
			resourceName : name,
			endTime : Payment.$tab.find('.T-search-end-time').val(),
			startTime : Payment.$tab.find('.T-search-start-time').val(),
			payType : Payment.$tab.find('.T-search-payment').val(),
			subjectId : Payment.$tab.find('.T-search-subject').val(),
			voucher : Payment.$tab.find('.T-search-voucher').val()
		}
		if(args.payType == ""){
			args.bankId = Payment.$tab.find('input[name=cash-id]').val() || Payment.$tab.find('input[name=card-id]').val();
		}
		else if(args.payType == 0){
			args.bankId = Payment.$tab.find('input[name=cash-id]').val();
		}
		else if (args.payType == 1) {
			args.bankId = Payment.$tab.find('input[name=card-id]').val();
		}
		return args;
	};

	Payment.addPayment = function(){
		$.ajax({
			url:KingServices.build_url("financialIncomeOrPay","addIncomeorPay"),
			type:"POST",
			success:function(data){
				var result = showDialog(data);
				if(result){
					var html = addTemplate(data);
					var addGuideLayer = layer.open({
					    type: 1,
					    title:"新增现金日记账",
					    skin: 'layui-layer-rim', //加上边框
					    area: '800px', //宽高
					    zIndex:1028,
					    content: html,
					    scrollbar: false,
					    success:function(){
					    	Payment.subList0 = data.subjectdata0;
					    	Payment.subList1 = data.subjectdata1;
					    	Payment.subList2 = data.subjectdata2;
					    	var $container = $(".T-addPayment-container"),
					    		$bankCount = $container.find(".T-choose-bankCount"),
					    		$bankCountList = $container.find(".T-bankCount-list"),
					    		validator = rule.check($container);
					    	FinancialService.initPayEvent($container);
					    	FinancialService.datetimepicker($container);

					    	$container.find(".T-moneyType").off().on("change",function(){
					    		Payment.loadSubjectHtml($(this).val(),$container);
					    		if($(this).val() == 2){
					    			$container.find(".T-Ntransfer").addClass('hidden');
					    			$container.find(".T-payType-cash").addClass('hidden');
					    			$container.find(".T-transfer").removeClass('hidden');
					    			
					    		} else {
					    			$container.find(".T-Ntransfer").removeClass('hidden');
					    			$container.find(".T-payType-cash").removeClass('hidden');
					    			$container.find(".T-transfer").addClass('hidden');
					    		}
					    	});

					    	$bankCountList.find("li").on("click",function(){
					    		var bankId = $(this).data("id"),
					    			bankCount = $(this).find('.T-bankCount').text(),
					    			avilableMoney = $(this).find('.T-avilableMoney').text();
					    		$bankCount.find("input[name=bankId]").val(bankId);
					    		$bankCount.find(".T-count").text(bankCount);
					    		$bankCount.find(".T-money").text(avilableMoney);
					    		$bankCountList.trigger("mouseleave");
					    	});

					    	$bankCountList.hide();
					    	$container.on("click",".T-choose-bankCount",function(){
					    		$bankCountList.show();
					    	})
					    	.on("mouseleave",".T-choose-bankCount",function(){
					    		$bankCountList.hide(150);
					    	})
					    	.on("click",".T-option",function(){
					    		var $this = $(this);
					    		if($this.hasClass('T-close-payment')){
					    			layer.close(addGuideLayer);
					    		} else if($this.hasClass('T-save-payment')){
					    			var subjectName=$container.find('.T-subject').find("option:selected").text(),
					    			    resourceName=$container.find('[name=resourceName]').val();
					    			if ((subjectName==="预收账款" || subjectName==="预付账款") && !resourceName) {
					    				showMessageDialog($("#confirm-dialog-message"), "对方单位不能为空");
            							return;
					    			}
					    			if (!validator.form()) { return; }
					    			Payment.submitPayment();
					    		}
					    	})
					    	.on("change",".T-subject",function(){
					    		var subjectName = $(this).find("option:selected").text();
					    		$container.find('input[name=subjectName]').val(subjectName);
					    		Payment.loadResTypeSelect(subjectName,$container);
					    	});
					    	$container.find('.T-subject').trigger('change');

					    	//获取对方单位
					    	Payment.getResourceList($container.find('[name=resourceName]'),$container);

				    		$container.find('.T-chooseAccount').autocomplete({
						        minLength:0,
						        change :function(event, ui){
						            if(ui.item == null){
						               $(this).val('').nextAll('.T-accountId').val('');
						            }
						        },
						        select :function(event, ui){
									$(this).nextAll('.T-accountId').val(ui.item.id).trigger('change');
						        }
						    }).on("click", function(){
						        var $this = $(this),
					    			id = "";
					    		if($this.hasClass('T-type-out')){
					    			id = $container.find('input[name=in-id]').val();
					    		} else if($this.hasClass('T-type-in')){
					    			id = $container.find('input[name=out-id]').val();
					    		}

						        $.ajax({
						            url:KingServices.build_url('financialIncomeOrPay','selectBankAccount'),
						            data : {id : id},
						            showLoading:false,
						            success:function(data){
						                if(showDialog(data)){
						                    var cardNumberJson = [];
						                    var bankList = data.bankList;
						                    if(bankList && bankList.length > 0){
						                        for(var i=0; i < bankList.length; i++){
						                            var seatCount = {
						                                value : "账户："+ bankList[i].accountName+",余额："+ bankList[i].balance,
						                                id: bankList[i].id
						                            }
						                            cardNumberJson.push(seatCount);
						                        }
						                        $this.autocomplete('option','source', cardNumberJson);
						                        $this.autocomplete('search', '');
						                    }else{
						                        layer.tips('没有内容', $that, {
						                            tips: [1, '#3595CC'],
						                            time: 2000
						                        });
						                    }
						                }
						            }
						        })
						    });
					    }
					});
				}
			}
		});
	};

	//查看收/付款金额明细
	Payment.viewDetails = function(id){
		$.ajax({
			url:KingServices.build_url("financialIncomeOrPay","getIncomeOrPayDetailById"),
			type:"POST",
			data : {id : id},
			success:function(data){
				if(showDialog(data)){
					var html = detailsTemplate(data);
					var addGuideLayer = layer.open({
					    type: 1,
					    title:"收/付款金额明细",
					    skin: 'layui-layer-rim',
					    area: '800px',
					    zIndex:1028,
					    content: html,
					    scrollbar: false
					});
				}
			}
		});
	};

	//删除记录
	Payment.deletePayment = function(id){
		$.ajax({
			url:KingServices.build_url("financialIncomeOrPay","deleteIncomeorPay"),
			type:"POST",
			data : {id : id},
			success:function(data){
				if(showDialog(data)){
					showMessageDialog($("#confirm-dialog-message"),data.message,function(){
						Payment.getTotal(0,Payment.$tab);
						Payment.ajaxInit(0);
					});
				}
			}
		});
	};
   
    /**
     * [loadSubjectHtml 根据业务类别加载对应会计科目+]
     * @param  {[type]} type       [业务类别]
     * @param  {[type]} $container [容器]
     * @return {[type]}            [description]
     */
	Payment.loadSubjectHtml = function(type,$container){
		var subList = false,subjectHtml = "";
		if(type == 0) { subList = Payment.subList0; }
		else if(type == 1) { subList = Payment.subList1; }
		else if(type == 2) { subList = Payment.subList2; }	
		if(subList.length > 0){
			for(var i = 0; i < subList.length; i++){
				subjectHtml += "<option value=" + subList[i].id + ">" + subList[i].subjectName + "</option>";
			}
			$container.find(".T-subject").html(subjectHtml);
			$container.find("input[name=subjectName]").val(subList[0].subjectName);
			Payment.loadResTypeSelect(subList[0].subjectName, $container);
		} else {
			showMessageDialog($("#confirm-dialog-message"),"会计科目列表为空，请先进行添加！",function(){
				$container.find(".T-subject").html("");
				$container.find("input[name=subjectName]").val("");
			});
		}
	};
    
    /**
     * [loadResTypeSelect 会计科目加载资源]
     * @param  {[type]} resTypeText [会计科目Text]
     * @param  {[type]} $container  [容器]
     * @return {[type]}             [description]
     */
	Payment.loadResTypeSelect =function(resTypeText, $container){
		var resPayTypeList=[{id:'20',name:'酒店'},{id:'23',name:'车队'}],resRecTypeList=[{id:'21',name:'购物'},{id:'22',name:'客户'}],
		    resTypeOption="<select name='resourceType' class='col-sm-12 T-selct-rsType'>";
		if (resTypeText==="预付账款") {
		   for(var i = 0; i < resPayTypeList.length; i++){
			 resTypeOption+="<option  value=" + resPayTypeList[i].id + ">" + resPayTypeList[i].name + "</option>";
		   }
		}
		if (resTypeText==="预收账款") {
		    for(var i = 0; i < resRecTypeList.length; i++){
			 resTypeOption+="<option  value=" + resRecTypeList[i].id + ">" + resRecTypeList[i].name + "</option>";
		   }
		}
		resTypeOption+='</select>';
		if (resTypeText==="预收账款" || resTypeText==="预付账款") {
			$container.find(".T-resourceType").html(resTypeOption);
			$container.find('.T-resType').removeClass('hidden');
		}else{
			$container.find(".T-resourceType").html("");
			$container.find('.T-resType').addClass('hidden');
		}
		$container.find('input[name=resourceName]').val('').next().val('');
	};

	Payment.submitPayment = function(){
		var form = $(".T-addPayment-container .T-form").serializeJson();
		form.bankId = form['card-id'] || form['cash-id'];
		form.bankIdIn = form['in-id'];
		form.bankIdOut = form['out-id'];
		delete(form['card-id']);
		delete(form['card-number']);
		
		$.ajax({
			url:KingServices.build_url("financialIncomeOrPay","saveIncomeorPay"),
			type:"POST",
			data:form,
			success:function(data){
				var result = showDialog(data);
				if(result){
					showMessageDialog($("#confirm-dialog-message"),data.message,function(){
						$(".T-addPayment-container .T-close-payment").trigger('click');
						Payment.initModule();
					});
				}
			}
		});
	};

	Payment.getSubjectList = function($tab){
		$.ajax({
			url : KingServices.build_url('financialIncomeOrPay', 'getSubjectList'),
			type : "POST",
			showLoading: false
		}).done(function(data){
			var subjectList = data.subjectList,
				listHtml = "";
			for(var i = 0;i < subjectList.length;i++){
				listHtml += "<option value='" + subjectList[i].id + "'>" + subjectList[i].subjectName + "</option>";
			}
			$tab.find(".T-search-subject").append(listHtml);
		});
	}

	 /**
     * [getResourceList 获取对方单位]
     * @param  {[type]} $obj         [对方单位对象]
     * @param  {[type]} resourceType [资源类型]
     * @return {[type]}           
     */
    Payment.getResourceList = function($obj,$tab) {
    	var resourceTypeList=null;
        $obj.off('click').on('click', function() {
        	var resourceType = $tab.find('[name=resourceType]').val();
        	//修正change当resourceType作用域
        	resourceTypeList=resourceType;
	    	if (!resourceType) {
	    		return;
	    	}
            $.ajax({
                url:KingServices.build_url("cash","findUnits"),
                type: 'POST',
                data:"resourceType="+resourceType,
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var list = data.units;
                    if (list != null && list.length > 0) {
                        for (var i = 0; i < list.length; i++) {
                            list[i].value = list[i].name;
                            list[i].id = list[i].id;
                        };
                    } else {
                        layer.tips('没有内容', $obj, {
                            tips: [1, '#3595CC'],
                            time: 2000
                        });
                    }
                    $obj.autocomplete({
			            minLength: 0,
			            change: function(event, ui) {
			                if (!ui.item && !!resourceTypeList) {
			                   $(this).val('');
			                }
			            },
			            select: function(event, ui) {
			                $(this).val(ui.item.name).nextAll('[name=resourceId]').val(ui.item.id);
			            }
			        })
			        $obj.autocomplete('option', 'source', list);
                    $obj.autocomplete('search', '');
                }
            });
        })
    };

	// 暴露方法
	exports.init = Payment.initModule;
	//收付款
	exports.viewDetails=Payment.viewDetails;
});