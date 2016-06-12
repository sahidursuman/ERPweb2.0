/**
 * 资源管理——商家管理
 * @param  {[type]} require                                                      [description]
 * @param  {String} exports)                                                     {	var        menuKey [description]
 * @param  {[type]} listShop:function(page,name,status){			shop.searchData.name [description]
 * @return {[type]}                                                              [description]
 */
define(function(require, exports) {
	var menuKey = "resource_shop",
		listTemplate = require("./view/list"),
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view"),
		updatePolicyTemplate = require("./view/updateShopPolicy"),
		shopFormLayer,
		// 表单校验相关
		rule = require('./shopRule'),
		mainValidator = false,
		policyListValidator = false,
		// 政策html
		policyHtml = [],
		policyHtmlItem = '<tr class="timeArea">'+
		    	'<td data-index="1" class="clearfix div-1" style="margin-bottom:3px"><div><input name=\"startTime\" maxlength=\"100\" type=\"text\" class=\"T-date datepicker\" style=\"width:100px\"/>'+
		    	'<label>&nbsp;至&nbsp;</label><input name=\"endTime\" type=\"text\" class=\"T-date datepicker\" style=\"width:100px\"/></div></td><td><div data-index="1" class="clearfix div-1" style="margin-bottom:3px">'+
		    	'<input name="costMoneyStart" maxlength=\"9\" class=\"F-float F-money\" type=\"text\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label>'+
		    	'<input name=\"costMoneyEnd\" maxlength=\"9\" class=\"F-float F-money\"  type=\"text\" style=\"width:100px\"/><label class=\"priceArea\" style=\"margin-left:10px;\">'+
		    	'<button class=\"btn btn-success btn-sm btn-white T-action T-add add\"><i class=\"ace-icon fa fa-plus bigger-110 icon-only\"></i>'+

		    	'</button></label></div></td><td><div data-index="1" class="clearfix div-1" style="margin-bottom:7px"><input name="guideRate" maxlength=\"5\" type="text" class="form-control"/>'+
		    	'</div></td><td><div data-index="1" class="clearfix div-1" style="margin-bottom:7px"><input name="travelAgencyRate" maxlength=\"5\" type="text"  class="form-control"/>'+
		    	'</div></td><td style=\"width:70px\"><a data-entity-id=\"\" class=\"cursor T-action T-delete\">'+
		    	'删除</a></td></tr>';

	policyHtml.push('<tr ><td><input name=\"name\" class="col-sm-12" type=\"text\" maxlength=\"100\" /></td>');
	policyHtml.push('<td class="hidden"><select name="customerType" class="col-sm-12"><option value="0" selected="selected">散客</option><option value="1">团体</option></select></td>');
	policyHtml.push("<td><button data-entity-id=\"\" class=\"btn btn-xs btn-success T-action T-shop-rate-add\"><i class=\"ace-icon fa fa-recorder bigger-240\"></i>添加政策</button><input hidden-index='$index' type=\"hidden\" name=\"policyInput\"></td>");
	policyHtml.push('<td><input name="remark" class="col-sm-12" type="text" maxlength=\"1000\" /></td>'); 
	policyHtml.push('<td style="width:70px"><a data-entity-id="" class="T-action T-shop-standard-delete">删除</a></td>');
	policyHtml.push("</tr>");

	policyHtml = policyHtml.join('');
	// 定义模块对象policyHtml.push(
	var shop = {
		$tab: false,
		$formContainer: false
	};

	/**
	 * 初始化模块
	 * @return {[type]} [description]
	 */
	shop.initModule = function() {
		shop.listShop(0, '', 1);		
	}

	/**
	 * 初始化页面
	 * @param  {int} page   页码
	 * @param  {string} name   商家搜索关键字
	 * @param  {商家状态} status 1：启用 0：停用
	 * @return {[type]}        [description]
	 */
	shop.listShop = function(page,name,status){
		if (shop.$searchArea && arguments.length === 1)  {
			name = shop.$searchArea.find('input[name="shop_name"]').val();
			status = shop.$searchArea.find('.T-btn-status').children('button').data('value');
		}

		$.ajax({
			url: KingServices.build_url('shop', 'listShop'),
			type:"POST",
			data: {
				pageNo: page,
				name: name,
				status: status,
				sortType: 'auto'
			},
			success:function(data){
				shop.currentPage = page;

				var result = showDialog(data);
				if(result){
					var shopList = data.shopList;
					shopList = JSON.parse(shopList);
					data.shopList = shopList;
					var html = listTemplate(data);
					Tools.addTab(menuKey,"商家管理",html);
					
					// 初始化页面对象
					shop.$tab = $("#tab-"+menuKey+"-content");
					shop.$searchArea = shop.$tab.find('.T-search-area');
					// 初始化事件绑定
					shop.init_event();

					// 绑定翻页组件
					laypage({
					    cont: shop.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		shop.listShop(obj.curr -1);
					    	}
					    }
					});	
				}
			}
		});
	}

	shop.init_event = function() {
		// bind add shop event
		shop.$searchArea.find('.T-shop-add').on('click', function(event) {	
			event.preventDefault();
			shop.addShop();
		});

		// bind table action which is view,update or delete one shop
		shop.$tab.find('.T-shop-list').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('id');

			if ($that.hasClass('T-shop-view'))  {
				// view shop which data index is id
				shop.viewShop(id);
				// make dialog re-layout
				$(window).trigger('resize');
			} else if ($that.hasClass('T-shop-edit')) {
				// update shop information which index is id
				shop.updateShop(id);
			} else if ($that.hasClass('T-shop-delete')) {
				// delete the shop information which index is id
				shop.deleteShop(id);
			}
		});

		// switch list status
		shop.$searchArea.find('.T-btn-status').on('click', 'a', function(event) {
			event.preventDefault();
			var $that = $(this);
			$that.closest('.T-btn-status').find('button').data('value', $that.data('value')).children('span').text($that.text());

			shop.listShop(0);
		});

		//搜索按钮事件
		shop.$tab.find('.T-shop-search').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			shop.listShop(0);
		});

		// 回车搜索
		shop.$tab.find('.T-shop-name').keyup(function(e){
			if(e.which == 13 && !window.forbiddenError){
				shop.listShop(0);
			}
		});

		// 绑定简介
		Tools.descToolTip(shop.$tab.find('.T-desc-tip'),1);
	};

	/**
	 * add shop 
	 */
	shop.addShop = function(fn){
		var html = addTemplate();
		shopFormLayer = layer.open({
		    type: 1,
		    title:"新增商家",
		    skin: 'layui-layer-rim', //加上边框
		    area: '900px', //宽高
		    zIndex:1028,
		    content: html,
			scrollbar: false,    // 推荐禁用浏览器外部滚动条
		    success:function(){
		    	shop.init_form_event("",fn);
		    }
		});
	}

	/**
	 * update shop information
	 * @param  {int} id     shop id
	 * @return {[type]}        [description]
	 */
	shop.updateShop = function(id) {
		$.ajax({
			url: KingServices.build_url('shop', 'getShopById'),
			type:"POST",
			data: {id: id},
			dataType:"json",
			success:function(data){
				var result = showDialog(data);
				if(result){
					var shopData = JSON.parse(data.shop);
					
					data.shop = shopData;	
					var html = updateTemplate(data);
					
					shopFormLayer = layer.open({
					    type: 1,
					    title:"修改商家",
					    skin: 'layui-layer-rim', //加上边框
					    area: '900px', //宽高
					    zIndex:1028,
					    content: html,
						scrollbar: false,    // 推荐禁用浏览器外部滚动条
					    success:function(){
					    	shop.init_form_event(1);

					    	var shopPolicyList = shopData.shopPolicyList,
					    		$tbody = shop.$formContainer.find('.T-shop-standard-list');
					    	for(var i=0; i<shopPolicyList.length; i++){
					    		for(var j=0; j < shopPolicyList[i].shopTimeAreaList.length; j++){
					    			shopPolicyList[i].shopTimeAreaList[j].costMoneyList = shopPolicyList[i].shopTimeAreaList[j].shopCostRebateList;
					    		}
					    		$tbody.find("input[name=policyInput]").eq(i).val(encodeURIComponent(JSON.stringify(shopPolicyList[i].shopTimeAreaList)));
					    	}

					    	//级联选择城市列表//
					    	var provinceId, cityId, districtId;
					    	if(data.shop.province != null){
					    		provinceId = data.shop.province.id;
					    		var cityId = "";
						    	if(data.shop.city != null){
						    		cityId = data.shop.city.id;
						    		var districtId = "";
						    		if(data.shop.district != null){
						    			districtId = data.shop.district.id;
						    		}
						    	}
					    	}

					    	KingServices.provinceCity(shop.$formContainer.find('.T-distict'), provinceId, cityId, districtId);
					    }
					});
				}
			}
		});
	}

	/**
	 * delete this shop
	 * @param  {int} id     shop id
	 * @return {[type]}        [description]
	 */
	

	shop.deleteShop = function(id){
		if(!!id){
			showConfirmDialog("你确定要删除该条记录？",function(){
					$.ajax({
							url: KingServices.build_url('shop', 'deleteShop'),
	 						type:"POST",
	 						data: {id: id},
					}).done(function(data){
						if(showDialog(data)){
							shop.listShop(0);
						}
					})
			});
		}
	}	


	/**
	 * view this shop
	 * @param  {int} id shop id
	 * @return {[type]}    [description]
	 */
	shop.viewShop = function(id){
		$.ajax({
			url: KingServices.build_url('shop', 'getShopById'),
			type:"POST",
			data: {id: id},
			dataType:"json",
			beforeSend:function(){
				globalLoadingLayer = openLoadingLayer();
			},
			success:function(data){
				layer.close(globalLoadingLayer);
				var result = showDialog(data);
				if(result){
					var shopData = JSON.parse(data.shop);
					data.shop = shopData;	
					var html = viewTemplate(data);
					
					var updateshopLayer = layer.open({
					    type: 1,
					    title:"查看商家信息",
					    skin: 'layui-layer-rim', //加上边框
					    area: '1024px', //宽高
					    zIndex:1028,
					    content: html,
						scrollbar: false,    // 推荐禁用浏览器外部滚动条
					    success:function(){
							$(".timeArea").each(function(i) {
								$(".T-priceArea").each(function(j) {
									if (i==j) {
										var priceAreaHeight = $(".T-priceArea").eq(j).height();
										$(".timeArea").eq(j).height(priceAreaHeight);
										$(".timeArea").eq(j).css("line-height",priceAreaHeight + "px");
									}
								})
							});
					    }
					});
				}
			}
		});
	}
		
	/**
	 * 绑定表单事件
	 * @param  {int} type 0: 添加，1：修改
	 * @return {[type]}      [description]
	 */
	shop.init_form_event = function(type,fn){
    	shop.$formContainer = $('.T-shop-dialog-container');

    	var $mainForm = shop.$formContainer.find('.T-shopMainForm'),	
    		//对新增商家校验
    		shopItem,
    		policyValidator;
    	
    	if (type === 1)  {
    		policyListValidator = rule.checkItems(shop.$formContainer.find(".T-shopPolicyForm"));
    	} else {
    		// 添加时，初始化省市区
    		KingServices.provinceCity($mainForm.find('.T-distict'));
    	}

    	// 初始化表单验证
    	mainValidator = rule.check($mainForm);
    	
    	// 表格中的事件处理
    	shop.$formContainer.find('.T-shop-standard-list').on('click', '.T-action', function(event) {
    		event.preventDefault();
    		var $that = $(this);

    		if ($that.hasClass('T-shop-standard-delete'))  {
    			// 删除
    			shop.deleteProductItem($that);
    		} else if ($that.hasClass('T-shop-rate-add')){
    			// 添加/修改政策
	    		var $policyInput = $(this).next(),
	    		// policyValidator = rule.checkShopItem($(".T-shopPolicyContainer"));
	    			policyVal = $policyInput.val(),
	    			data = { policyData: [] };

				if (!!policyVal) {
					// 修改政策
	    			policyVal = decodeURIComponent(policyVal);
					data.policyData = JSON.parse(policyVal);
				} 

				shop.updateShopPolicy(data, $policyInput);
    		}
    	});  

    	//给政策列表新增按钮绑定事件
    	$(".T-shop-standard-add").click(shop.addPolicyEvent);
    			    	
    	//给提交按钮绑定事件
    	$(".T-submit-shop").click(function(){
    		if(!mainValidator.form() || (!!policyValidator && !policyValidator.form())) return;

    		// 是否启用
    		var status = shop.$formContainer.find('.T-shop-status').prop('checked')? 1: 0,
    			form = shop.$formContainer.find(".T-shopMainForm").serialize()+"&status="+status+"",
    			formData = shop.$formContainer.find(".T-shopMainForm").serializeJson(),
    			url = KingServices.build_url('shop', 'addShop'),
	    		// 政策列表数据封装
	    		policyDataList = [];

    		if (type === 1)  {
    			url = KingServices.build_url('shop', 'updateShop');
    		}

    		shop.$formContainer.find('.T-shop-standard-list').children('tr').each(function(i){
    			var $that = $(this),
	    			policyInputJson = JSON.parse(decodeURIComponent($that.find("input[name=policyInput]").val()) || false),
	    			policyData = {
	    				id: $that.data('entity-id'),
	    				name : $that.find("input[name=name]").val(),
	    				customerType : $that.find("select[name=customerType]").val(),
	    				policyInput : [],
	    				remark : $that.find("input[name=remark]").val()
	    			};

    			if(!!policyInputJson){
    				for(var i=0;i<policyInputJson.length;i++){
    					policyData.policyInput.push(policyInputJson[i]);
    				}
    			}
    			policyDataList.push(policyData);
    		});

    		// 转换成字符串
    		var policyDataListJson = JSON.stringify(policyDataList);

    		$.ajax({
				url: url,
				type:"POST",
				data:form+"&policyDataListJson="+encodeURIComponent(policyDataListJson)+"",
				success:function(data){
					var result = showDialog(data);
					if(result){
						showMessageDialog(data.message,function(){
							if (type === 1) {
								shop.listShop(shop.currentPage);
							} else {
								if (typeof fn === "function") {
									data.shop = JSON.parse(data.shop);
									formData.id = data.shop.id;
									fn(formData);
								}else{
									shop.listShop(0,"","");
								}
							}

							layer.close(shopFormLayer);
						});
					}
				}
			});
    	});
    }		

    /**
     * add policy callback in main form
     */
	shop.addPolicyEvent = function(){
		var $tbody = shop.$formContainer.find('.T-shop-standard-list'),
			index = $tbody.children('tr').length;
		
		$tbody.append(shop.policyHtml(index+1));
		// 再调整对话框的高度
		$(window).trigger('resize');
		//政策列表的校验
		policyListValidator = rule.checkItems(shop.$formContainer.find(".T-shopPolicyForm"));
    	
    	$tbody.find(".datepicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		});
	};
	shop.compare = function(str1, str2){
		return str1 > str2 ? [str2, str1] : [str1, str2];
	};
	/**
	 * 验证政策列表事件范围
	 */
	shop.checkTimeAndPriceArea = function(){
		var $tr = $('.shopPolicyContainer .T-policyForm .T-list').find('tr.timeArea'),
			timeArea = [],
			boolTime = false;
		if($tr.length > 0){
			for(var i = 0; i < $tr.length; i++){
				var sTime = $tr.eq(i).find('input[name=startTime]').val();
				var eTime = $tr.eq(i).find('input[name=endTime]').val();
				var pTime = shop.compare(sTime, eTime);
				var isRepeat = false;
				if(sTime == eTime){
					boolTime = false;
					return false;
				}else if(timeArea.length > 0){
					for(var j = 0; j < timeArea.length; j++){
						if((pTime[0] < timeArea[j][0] && pTime[1] < timeArea[j][0]) ||
						   (pTime[0] > timeArea[j][1] && pTime[1] > timeArea[j][1])){
							isRepeat= false;
						}else{
							isRepeat = true;
							return false;
						}
					}
					if(!isRepeat){
						timeArea[timeArea.length] = pTime;
						boolTime = true;
					}else{
						boolTime = false;
					}
				}else{
					timeArea[0] = pTime;
					boolTime = true;
				}
			}
		}else{
			boolTime = true;
		}
		return boolTime;
	};
	shop.checkMoneyScope = function(){
		var $tr = $('.shopPolicyContainer .T-policyForm .T-list').find('tr.timeArea');
		if($tr.length > 0){
			for(var i = 0; i < $tr.length; i++){
				var $divList = $tr.eq(i).find('td').eq(1).children('div');
				var numberArea = [];
				var boolNumber = false;
				for(var j = 0; j < $divList.length; j++){
					var costMoneyStart = ($divList.eq(j).find('input[name=costMoneyStart]').val() || 0)*1;
					var costMoneyEnd = ($divList.eq(j).find('input[name=costMoneyEnd]').val() || 0)*1;
					var pMoney = shop.compare(costMoneyStart, costMoneyEnd);
					var isRepeat = false;
					if(costMoneyStart == costMoneyEnd){
						boolNumber = false;
						return false;
					}else if(numberArea.length > 0){
						for(var k = 0; k < numberArea.length; k++){
							if((pMoney[0] < numberArea[k][0] && pMoney[1] < numberArea[k][0]) ||
							   (pMoney[0] > numberArea[k][1] && pMoney[1] > numberArea[k][1])){
								isRepeat= false;
							}else{
								isRepeat = true;
								return false;
							}
						}
						if(!isRepeat){
							numberArea[numberArea.length] = pMoney;
							boolNumber = true;
						}else{
							boolNumber = false;
						}
					}else{
						boolNumber = true;
						numberArea[0] = pMoney;
					}
				}
			}
		}else{
			boolNumber = true;
		}
		return boolNumber;
	}
	/**
	 * 编辑购物政策
	 * @param  {object} data 已经保存过的政策
	 * @param  {object} obj  jQuery Object,保存政策的input
	 * @return {[type]}      [description]
	 */
	shop.updateShopPolicy = function(data,obj){
		var html = updatePolicyTemplate(data), title = "修改购物政策";

		if (!data || !data.policyData || !data.policyData.length)  {
			title = "新增购物政策";
		}
		var policyLayer = layer.open({
			 type: 1,
		    title: title,
		    skin: 'layui-layer-rim', //加上边框
		    area: '800px', 
		    zIndex:1029,
		    content: html,
		    scrollbar: false, // 推荐禁用浏览器外部滚动条
		    success:function(){
		    	var $form = $(".T-policyForm"),
		    		$tbody = $form.find('.T-list'),
		    		modiPolicyValidator = rule.checkShopItem($form);		    	
		    	
		    	shop.datePicter($tbody.find(".T-date"));

		       var $costMoneyStart=$tbody.find('input[name=costMoneyStart]'),
		   		   $costMoneyEnd=$tbody.find('input[name=costMoneyEnd]');

				Tools.inputCtrolFloat($costMoneyStart);
				Tools.inputCtrolFloat($costMoneyEnd);

		    	// 绑定事件处理
		    	$form.on('click', '.T-item-add', function(event) {
		    		event.preventDefault();
		    		/* Act on the event */
		    		$tbody.append(policyHtmlItem);
		    		modiPolicyValidator = rule.checkShopItem($form);
		    		shop.datePicter($tbody.find(".T-date"));
		    	}).
		    	on('click', '.T-action', function(event) {
		    		event.preventDefault();
		    		var $that = $(this);

		    		if ($that.hasClass('T-add'))  {
		    			// 添加费用
			    		shop.addPriceArea($(this));
			    		modiPolicyValidator = rule.checkShopItem($form);
						shop.datePicter($tbody.find(".T-date"));
		    		} else if ($that.hasClass('T-del')) {
		    			// 删除费用
		    			shop.deletePolicyPriceArea(this);
		    		} else if ($that.hasClass('T-delete'))  {
		    			shop.deletePolicy(this);
		    		}
		    	});

		    	// 提交数据，临时保存起来
		    	$(".T-submit-shop-policy").click(function(){
		    		if( modiPolicyValidator != undefined){
		    			if(!modiPolicyValidator.form()){return;}
		    		}else{
		    			showMessageDialog("政策不能为空");
		    			return;
		    		}
		    		if(!shop.checkTimeAndPriceArea()){
		    			showMessageDialog("时间范围不能重复");
		    			return;
		    		}
		    		if(!shop.checkMoneyScope()){
		    			showMessageDialog("消费金额范围同一段时间内不能重复");
		    			return;
		    		}
		    		var result = shop.submitShopPolicy(obj);
			    	if(result){
			    		layer.close(policyLayer);
			    		//showMessageDialog($( "#confirm-dialog-message" ), "成功更新购物政策");
			    	}
		    	});

		    	
		    }
		});
	};

	/**
	 * delete policy
	 * @param  {object} obj delete jquery DOM
	 * @return {[type]}     [description]
	 */
	shop.deletePolicy = function(obj){
		var $that = $(obj), 
			id=$that.data("entity-id");

		if(id){
			showConfirmDialog('你确定要删除该条记录？', function() {
				$.ajax({
					url: KingServices.build_url('shop', 'deleteShopTimeArea'),
                    dataType: "json",
                    data:"id="+id,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
			    			$that.closest('tr').remove();
							layer.msg(data.message || "删除成功");
						}
                    }
                });
			})
		}else{
			$that.closest('tr').remove();
		}
	}

	/**
	 * add price area in policy form
	 * @param {[type]} obj [description]
	 */
	shop.addPriceArea = function(obj){
		var td = obj.closest('td');
		var index = td.find("div").length;
		// var priceAreaDiv = "<div data-index=\""+(index+1)+"\" class=\"shopPolicyPriceList clearfix div-"+(index+1)+"\" style=\"margin-bottom:2px\"><input name=\"costMoneyStart\" maxlength=\"9\" type=\"text\" style=\"width:100px\"/><label>&nbsp;至&nbsp;</label><input name=\"costMoneyEnd\" type=\"text\" style=\"width:100px\" maxlength=\"9\"/><label class=\"priceArea\" style=\"float:right\"><button class=\"btn btn-danger btn-sm btn-white del\"><i class=\"ace-icon fa fa-minus bigger-110 icon-only delSelf\"></i></button></label></div>";
		var priceAreaDiv = '<div data-index="'+ (index+1) + '" class="clearfix div-'+ (index+1) + '" style="margin-bottom:2px"> <input name="costMoneyStart" maxlength="9" type="text" style="width:100px" class="input-success  F-float F-money"><label>&nbsp;至&nbsp;</label><input name="costMoneyEnd" maxlength="9" type="text" class="input-success  F-float F-money" style="width:100px"><label class="priceArea" style="margin-left:10px;"><button class="btn btn-danger btn-sm btn-white T-action T-del"><i class="ace-icon fa fa-minus bigger-110 icon-only"></i></button></label> </div>';
		var guideRateInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-bottom:7px\"><input name=\"guideRate\" type=\"text\" maxlength=\"5\" class='form-control'/></div>";
		var travelAgencyRateInput = "<div data-index=\""+(index+1)+"\" class=\"clearfix div-"+(index+1)+"\" style=\"margin-bottom:7px\"><input name=\"travelAgencyRate\" type=\"text\" maxlength=\"5\"  class='form-control'/></div>";
		td.append(priceAreaDiv);

		var $form = $(".T-policyForm"),$tbody = $form.find('.T-list');
		var $costMoneyStart=$tbody.find('input[name=costMoneyStart]'),
		    $costMoneyEnd=$tbody.find('input[name=costMoneyEnd]');

		Tools.inputCtrolFloat($costMoneyStart);
		Tools.inputCtrolFloat($costMoneyEnd);

		td.next().append(guideRateInput);
		td.next().next().append(travelAgencyRateInput);
	};

	shop.deleteProductItem = function($delBtn)  {
		if ($delBtn && $delBtn.length) {
			var $tr = $delBtn.closest('tr'),
				id = $tr.data('entity-id');
			if(id){
				showConfirmDialog('你确定要删除该条记录？', function() {
					$.ajax({
						url: KingServices.build_url('shop', 'deleteShopPolicy'),
	                    dataType: "json",
	                    data: {id: id},
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							if(showDialog(data)){
					    		$tr.fadeOut(function(){
					    			$(this).remove();
					    		});
								layer.msg(data.message || "删除成功");
							}
	                    }
	                });
				})
			}else{
				$tr.fadeOut(function(){
					$(this).remove();
	    		});
			}
		}
	};

	/**
	 * delete price area in the policy form
	 * @param  {object} btn delete button
	 * @return {[type]}     [description]
	 */
	shop.deletePolicyPriceArea = function(btn){
		var obj = $(btn), id= obj.attr("data-entity-id"), div = obj.parent().parent(),divIndex = div.attr("data-index");
		if(id){
			showConfirmDialog('你确定要删除该条记录？', function() {
				$.ajax({
					url: KingServices.build_url('shop', 'deleteShopCostRebate'),
                    dataType: "json",
                    data:"id="+id,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							div.fadeOut(function(){
								$(this).remove();
							});
							div.parent().next().find(".div-"+divIndex+"").fadeOut(function(){
								$(this).remove();
							});
							div.parent().next().next().find(".div-"+divIndex+"").fadeOut(function(){
								$(this).remove();
							});
							layer.msg(data.message || "删除成功");
						}
                    }
                });
			})
		}else{
			index = div.closest('td').find("div:not(.delete)").index(div);
			div.fadeOut(function(){
				$(this).remove();
			});
			div.parent().next().children('div').eq(index).fadeOut(function(){
				$(this).remove();
			});
			div.parent().next().next().children('div').eq(index).fadeOut(function(){
				$(this).remove();
			});
		}
	};
		
	shop.datePicter = function(obj){
		obj.datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		});
	};
		
	/**
	 * submit policy in the policy item form
	 * @param  {[type]} policyInput [description]
	 * @return {[type]}             [description]
	 */
	shop.submitShopPolicy = function(policyInput){
		var $form = $(".T-policyForm"),policyData;
		function getValue(obj, name){
			var thisObj = obj.find("input[name="+name+"]"), objValue;
			if(thisObj.attr("type") == "checkbox"){
				objValue = thisObj.is(":checked") ? 1 : 0;
			}else{
				objValue = thisObj.val();
			}
			return objValue;
		}
		function trim(str){ 
			var res = str;
			if (!!str) {
				res = str.replace(/(^\s*)|(\s*$)/g, ""); 
			}
			return res;
         }
		var startTime = getValue($form.eq(0), "startTime");
		var endTime = getValue($form.eq(0), "endTime");
		if(trim(startTime) == ""){
			showMessageDialog("请输入起始日期");
			return false;
		}
		if(trim(endTime) == ""){
			showMessageDialog("请输入截止日期");
			return false;
		}
		var shopPolicyList = [];
		$(".T-policyForm").find('.T-list').children('tr').each(function(){
			var shopPolicy = {
				id : $(this).attr("data-entity-id"),
				startTime : $(this).find("input[name=startTime]").val(),
				endTime : $(this).find("input[name=endTime]").val(),
				costMoneyList:[]
			}
			var $td = $($(this).find("td")[1]);
			$td.find("div").each(function(){
				var index = $(this).attr("data-index");
				var costMoney = {
					id : $(this).find("input[name=costMoneyStart]").attr("data-entity-id"),
					costMoneyStart :  $(this).find("input[name=costMoneyStart]").val(),
					costMoneyEnd :  $(this).find("input[name=costMoneyEnd]").val(),
					guideRate :  $(this).parent().parent().find(".div-"+index+" input[name=guideRate]").val()/100,
					travelAgencyRate :  $(this).parent().parent().find(".div-"+index+" input[name=travelAgencyRate]").val()/100
				}
				shopPolicy.costMoneyList.push(costMoney);
			});
			shopPolicyList.push(shopPolicy);
		});
		policyInput.prev().html(!shopPolicyList.length? '添加政策': '修改政策');
		var timeAreaJson = JSON.stringify(shopPolicyList);
		policyInput.val(encodeURIComponent(timeAreaJson));
		return true;
	}

	/**
	 * build policy HTML with index
	 * @param  {int} the index of policy DOM
	 * @return {[type]}       [description]
	 */
	shop.policyHtml = function(index)  {
		return policyHtml.replace('$index', index);
	}
	exports.init = shop.initModule;
	exports.addShop = shop.addShop;
});