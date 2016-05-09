define(function(require, exports) {
	var menuKey = "resource_selfpay",
		listTemplate = require("./view/list"),
		rule = require('./selfRule'),
		addTemplate = require("./view/add"),
		updateTemplate = require("./view/update"),
		viewTemplate = require("./view/view");
	/**
	 * 定义自费项目对象
	 * @type {Object}
	 */
	var selfpay = {
		$tab : false,
		$searchArea : false,
		$addLayer : "",
		$updateLayer : ""
	};
	//验证对象
	var ruleData = {};
	/**
	 * 页面初始化方法
	 * @return {[type]} [description]
	 */
	selfpay.initModule = function(){
		selfpay.selfpayList(0,"",1)
	};
	/**
	 * 初始化自费列表
	 * @param  {[type]} page   [页数]
	 * @param  {[type]} name   [搜索关键字]
	 * @param  {[type]} status [自费状态]
	 * @return {[type]}        [description]
	 */
	selfpay.selfpayList = function(page,name,status){
		if (selfpay.$searchArea && arguments.length == 1) {
			name = selfpay.$searchArea.find("input[name=selfpay_name]").val();
			status = selfpay.$searchArea.find('.T-btn-status').find("button").data('value');
		}
		// 修正页码
		page = page || 0;
		$.ajax({
			url:selfpay.url("listSelfPay","view"),
			type:"POST",
			data: {
				pageNo: page,
				name: name,
				status: status,
				sortType: 'auto'
			},
			success:function(data){
				data.selfPayList = JSON.parse(data.selfPayList);
				var result = showDialog(data);
				if(result){
					var html = listTemplate(data);
					Tools.addTab(menuKey,"自费管理",html);

					// 初始化jQuery 对象
					selfpay.$tab = $("#tab-resource_selfpay-content");
					selfpay.$searchArea = selfpay.$tab.find('.T-search-area');
					selfpay.init_event();	
					// 绑定翻页组件
					laypage({
					    cont: selfpay.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		selfpay.selfpayList(obj.curr -1);
					    	}
					    }
					});	
				}
			}
		})
	};
	/**
	 * 绑定list页内事件
	 * @return {[type]} [description]
	 */
	selfpay.init_event = function(){
		//搜索栏状态button下拉事件
		selfpay.$tab.find('.T-btn-status').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that = $(this);
			// 设置选择状态的效果
			$that.closest('ul').prev().data('value', $that.data('value')).children('span').text($that.text());
			selfpay.selfpayList(0);
		});

		//搜索按钮事件
		selfpay.$tab.find('.T-btn-selfpay-search').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			selfpay.selfpayList(0);
		});

		// 回车搜索
		selfpay.$tab.find('input[name=selfpay_name]').keyup(function(e){
			if(e.which == 13 && !window.forbiddenError){
				selfpay.selfpayList(0);
			}
		});

		//添加自费
		selfpay.$tab.find(".T-btn-selfpay-add").on("click",function(event){
			event.preventDefault();
			selfpay.addSelfpay();
		});

		// 报表内的操作
		selfpay.$tab.find('.T-selfpayList').on('click', '.T-action', function(event) {
			event.preventDefault();
			var $that = $(this), id = $that.closest('tr').data('entity-id');

			if ($that.hasClass('T-view'))  {
				// 查看自费信息
				selfpay.viewSelfpay(id);
			} else if ($that.hasClass('T-edit'))  {
				// 编辑自费信息
				selfpay.updateSelfpay(id);
			} else if ($that.hasClass('T-delete'))  {
				// 删除自费
				selfpay.deleteSelfpay(id,$that);
			}
		});
	};
	/**
	 * 查看自费信息
	 * @param  {[type]} id [id]
	 * @return {[type]}    [description]
	 */
	selfpay.viewSelfpay = function(id){
		$.ajax({
			url:selfpay.url("getSelfPayById","view"),
			type:"POST",
			data:"id="+id+"",
			success:function(data){
				var result = showDialog(data);
				if(result){
					data.selfpay = JSON.parse(data.selfpay);
					var html = viewTemplate(data);
					layer.open({
					    type: 1,
					    title:"查看自费项目",
					    skin: 'layui-layer-rim', //加上边框
					    area: '1190px', //宽高
					    zIndex:1028,
					    content: html,
						scrollbar: false,    // 推荐禁用浏览器外部滚动条
					    success:function(){
					    }
					});
				}
			}
		});
	};
	/**
	 * 编辑自费信息
	 * @return {[type]} [description]
	 */
	selfpay.updateSelfpay = function(id){
		$.ajax({
			url:selfpay.url("getSelfPayById","view"),
			type:"POST",
			data:"id="+id+"",
			success:function(data){
				data.selfpay = JSON.parse(data.selfpay);
				if(data.selfpay.province != null){var provinceId = data.selfpay.province.id};
				if(data.selfpay.city != null){var cityId = data.selfpay.city.id};
				if(data.selfpay.district != null){var districtId = data.selfpay.district.id};
				var result = showDialog(data);
				if(result){
					var html = updateTemplate(data);
					selfpay.$updateLayer = layer.open({
					    type: 1,
					    title:"编辑自费项目",
					    skin: 'layui-layer-rim', //加上边框
					    area: '1190px', //宽高
					    zIndex:1028,
					    content: html,
						scrollbar: false,    // 推荐禁用浏览器外部滚动条
					    success:function(){
					    	var $container = $(".T-update-selfpay-form"),$tbody = $container.find('.T-selfpayList-Tbody');//T-selfpayList-Tbody
					    	ruleData.Uvalidator = rule.check($container);

					    	//导游返佣&旅行社返佣计算
					    	selfpay.numberRate($tbody);
					    	
					    	//精度限制--非法数字退格--控制
						    var $price = $container.find('.T-calc');
						        Tools.inputCtrolFloat($price);

					    	//初始化地区
							KingServices.provinceCity($container,provinceId,cityId,districtId);
					    	//添加项目列表
					    	$container.find(".T-btn-selfpay-update").off("click").on('click', function(event) {
					    		event.preventDefault();
					    		/* Act on the event */
					    		selfpay.addSelfpayList($container);
					    	});
							//删除自费项目列表
							$tbody.find('.T-btn-price-delete').off("click").on('click', function(event) {
								event.preventDefault();
								var $this = $(this);
								selfpay.delSelfpayList($this);
							});
							selfpay.datepicker($tbody);
					    	//添加时间区间
							$tbody.find('.T-add').off("click").on('click', function(event) {
								event.preventDefault();
								var $this = $(this);
								selfpay.addTimeArea($this,$tbody);
							});

						

							//删除时间区间
							$tbody.find('.T-del').off('click').on('click',function() {
								var $this = $(this);
								selfpay.delTimeArea($this);
							});
					    	//提交事件
					    	$container.off("click").on('click', '.T-btn-submit-selfpay', function(event) {
					    		event.preventDefault();
					    		/* Act on the event */
					    		selfpay.saveSelfpay($container,2);
					    	});

					    }
					});
				}
			}
		});
	};
	/**
	 * 删除自费项目
	 * @param  {[type]} id    [id]
	 * @param  {[type]} $this [对象]
	 */
	
		selfpay.deleteSelfpay = function(id,$this){
			if(!!id){
				showConfirmDialog("你确定要删除该自费项目？",function(){
					$.ajax({
							url:selfpay.url("deleteSelfPay","delete"),
							type:"POST",
							data:"id="+id+"&cateName=selfpay"+"",
					})
					.done(function(data){
						if(showDialog(data)){
							selfpay.selfpayList(0);
						}
					})
				})
			}
		}


	selfpay.deleteSelfitem = function(id,cateName,$parent){
		
	};
	/**
	 * 新建自费项目
	 */
	selfpay.addSelfpay = function(fn){
		var html = addTemplate();
		selfpay.$addLayer = layer.open({
		    type: 1,
		    title:"新增自费项目",
		    skin: 'layui-layer-rim', //加上边框
		    area: '1190px', //宽高
		    zIndex:1028,
		    content: html,
			scrollbar: false,    // 推荐禁用浏览器外部滚动条
		    success:function(){

		    	var $container = $(".T-add-selfpay-form"),$tbody= $container.find('.T-selfpayList-Tbody');
		    	ruleData.validator = rule.check($container);
		    	//精度控制--非法数字退格
			    var $price = $tbody.find('.T-calc');
			        Tools.inputCtrolFloat($price);
			    selfpay.numberRate($tbody);
		    	//初始化地区
		    	KingServices.provinceCity($container);
		    	//添加项目列表
		    	$container.find(".T-btn-selfpay-add").off("click").on('click', function(event) {
		    		event.preventDefault();
		    		/* Act on the event */
		    		selfpay.addSelfpayList($container);
		    	});
		    	//提交事件
		    	$container.off("click").on('click', '.T-btn-submit-selfpay', function(event) {
		    		event.preventDefault();
		    		/* Act on the event */
		    		selfpay.saveSelfpay($container,1,fn);
		    	});
		    }
		})
	};
	/**
	 * 添加自费项目列表
	 * @param {[type]} $container [容器]
	 */
	selfpay.addSelfpayList = function($container){
		var $tbody = $container.find('.T-selfpayList-Tbody'),
		    index = $tbody.find('tr').find('td').children('div').length;
		var html = '<tr><td><input name="name" class="col-sm-12" type="text" style="min-width:100px;" maxlength="100"/></td>'+
			'<td class="hidden"><select class="col-sm-12" name="customerType" style="min-width:100px;"><option value="0">散客</option><option value="1">团体</option></select></td>'+
			'<td><div class="col-sm-12 no-padding"><label class="col-sm-10">日常价格</label><label class="priceArea" style="padding-top:0px;"><button class="btn btn-success btn-sm btn-white T-add"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button></label></div></td>'+
			'<td><div class="col-sm-12 no-padding"><input data-index="'+(index)+'" name="normalMarketPrice" class="col-sm-12 T-marketPrice T-calc F-float F-money" type="text" maxlength="10"/></div></td>'+
			'<td><div class="col-sm-12 no-padding"><input data-index="0" name="customerRebateMoney" class="col-sm-12 T-customerRebateMoney T-calc F-float F-money" type="text" maxlength="10"/></div></td>'+
			'<td><div class="col-sm-12 no-padding"><input data-index="'+(index)+'" name="normalInnerPrice" class="col-sm-12 T-contractPrice T-calc  F-float F-money" type="text" maxlength="10"/></div></td>'+
			'<td><div class="col-sm-12 no-padding"><input data-index="'+(index)+'" name="normalGuideRate" class="col-sm-12 T-guideRate T-calc" type="text" maxlength="5"/></div></td>'+
			'<td><div class="col-sm-12 no-padding"><input data-index="'+(index)+'" name="normalTravelAgencyRate" class="col-sm-12 T-travelAgencyRate T-calc" type="text" maxlength="5"/></div></td>'+
			'<td><input name="remark" type="text" class="col-sm-12" style="min-width:100px;" maxlength="1000"/></div></td>'+
			'<td style="width:70px"><a class="T-btn-price-delete">删除</a></td></tr>';
		$tbody.append(html);

		//精度控制--非法数字退格
	    var $price = $tbody.find('.T-calc');
	        Tools.inputCtrolFloat($price);

		//导返佣、内部、市场、人数计算
		selfpay.numberRate($tbody);

		// 再调整对话框的高度
		$(window).trigger('resize');
		ruleData.validatorList = rule.checkItems($tbody);
		selfpay.datepicker($tbody);
		//删除自费项目列表
		$tbody.find('.T-btn-price-delete').off("click").on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			selfpay.delSelfpayList($this);
		});
		//添加时间区间
		$tbody.find('.T-add').off("click").on('click', function(event) {
			event.preventDefault();
			var $this = $(this);
			selfpay.addTimeArea($this,$tbody);
		});
	};
	/**
	 * 删除自费项目列表
	 * @param  {[type]} $this [对象]
	 */
	selfpay.delSelfpayList = function($this){
		var $listTr = $this.closest('tr'),
			$id = $listTr.data("entity-id");
		if (!!$id) {
			$conDiaMes.removeClass('hide').dialog({
				modal: true,
				title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
				title_html: true,
				draggable:false,
				buttons: [ 
					{
						text: "取消",
						"class" : "btn btn-minier btn-heightMall",
						click: function() {
							$( this ).dialog( "close" );
						}
					},
					{
						text: "确定",
						"class" : "btn btn-primary btn-minier btn-heightMall",
						click: function() {
							$( this ).dialog( "close" );
							$.ajax({
								url:selfpay.url("deleteSelfPay","delete"),
								type:"POST",
								data:"id="+$id+"&cateName=selfitem"+"",
								success:function(data){
									var result = showDialog(data);
									if(result){
										$listTr.fadeOut(function(){
											$(this).remove();
										});
									}
								}
							});
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确定要删除该项目价格？");
				}
			});
		}else{
			$listTr.fadeOut(function(){
				$(this).remove();
			});
		}
	};
	/**
	 * 添加时间区间
	 * @param {[type]} $this [对象]
	 */
	selfpay.addTimeArea = function($this,$tbody){
	 var $parents = $this.closest('tr'), $td = $parents.find("td"),index = $td.find('div').length; 
		$td.eq(2).append('<div class="col-sm-12 no-padding T-dateTimeArea" style=""><input type="hidden" name="rebateListId" value="" /><input name="startTime" value="" type="text" class="datepicker col-sm-4"><label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label><input name="endTime" value="" type="text" class="datepicker col-sm-4"><label class="priceArea" style="padding-top:0px;"><button class="btn btn-danger btn-sm btn-white T-del"><i class="ace-icon fa fa-minus bigger-110 icon-only" style="line-height: 20px"></i></button></label></div>');
		$td.eq(3).append('<div class="col-sm-12 no-padding" style="padding-top:5px!important;"><input data-index="'+(index)+'" name="marketPrice" value="" class="col-sm-12 T-marketPrice T-calc F-float F-money" type="text" maxlength="10"></div>');
		$td.eq(5).append('<div class="col-sm-12 no-padding" style="padding-top:5px!important;"><input data-index="'+(index)+'" name="contractPrice" value="" class="col-sm-12 T-contractPrice T-calc F-float F-money" type="text" maxlength="10"></div>');
		$td.eq(6).append('<div class="col-sm-12 no-padding" style="padding-top:5px!important;"><input data-index="'+(index)+'" name="guideRate" value="" class="col-sm-12 T-guideRate T-calc" type="text" maxlength="5"></div>');
		$td.eq(7).append('<div class="col-sm-12 no-padding" style="padding-top:5px!important;"><input data-index="'+(index)+'" name="travelAgencyRate" value="" class="col-sm-12 T-travelAgencyRate T-calc" type="text" maxlength="5"></div>');
		$parents.find(".T-del").off().on("click", selfpay.deteleDateArea);
		$parents.find(".T-dateTimeArea").eq($parents.find(".T-dateTimeArea").length - 1).attr("data-index", $parents.find(".T-dateTimeArea").length);
		ruleData.validatorList = rule.checkItems($tbody);
		selfpay.datepicker($tbody);
		//精度控制--非法数字退格
	    var $price = $tbody.find('.T-calc');
	        Tools.inputCtrolFloat($price);
		//导返佣计算
		selfpay.numberRate($tbody);
		//删除时间区间
		$tbody.find('.T-del').off('click').on('click',function() {
			var $this = $(this);
			selfpay.delTimeArea($this);
		});

	};
	/**
	 * 删除时间区间
	 * @param  {[type]} $this [对象]
	 * @return {[type]}       [description]
	 */
	selfpay.delTimeArea = function($this){
		var $parents = $this.closest('tr'), 
		    td = $parents.find("td"),
		    index = $this.closest('.T-dateTimeArea').index(), 
		    id = $this.closest('div').find("input[name=rebateListId]").val();
		if (!!id) {
			$conDiaMes.removeClass('hide').dialog({
				modal: true,
				title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
				title_html: true,
				draggable:false,
				buttons: [ 
					{
						text: "取消",
						"class" : "btn btn-minier btn-heightMall",
						click: function() {
							$( this ).dialog( "close" );
						}
					},
					{
						text: "确定",
						"class" : "btn btn-primary btn-minier btn-heightMall",
						click: function() {
							$( this ).dialog( "close" );
							$.ajax({
								url:selfpay.url("deleteSelfPay","delete"),
								type:"POST",
								data:"id="+id+"&cateName=selfrebate",
								success:function(data){
									var result = showDialog(data);
									if(result){
										for(var i=2; i < 8; i++){
											var $children =  td.eq(i).children("div");
											$children.eq(index).fadeOut(function(){
												$(this).remove();
												for(var j=0; j<$parents.find(".T-dateTimeArea").length;j++){
													$parents.find(".T-dateTimeArea").eq(j).attr("data-index", j+1)
												}
											});
										}
									}
								}
							});
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确定要删除该时间区间？");
				}
			});
		}else{
			for(var i=2; i < 8; i++){
				var $children =  td.eq(i).children("div");
				$children.eq(index).fadeOut(function(){
					$(this).remove();
					for(var j=0; j<$parents.find(".T-dateTimeArea").length;j++){
						$parents.find(".T-dateTimeArea").eq(j).attr("data-index", j+1)
					}
				});
			}
		}
	};
	/**
	 * 自费项目保存方法
	 * @param  {[type]} $container [容器]
	 * @param  {[type]} type       [type:1 新增   type:2 修改]
	 * @return {[type]}            [description]
	 */
	selfpay.saveSelfpay = function($container,type,fn){
		if(!rule.check($container).form()){return;}
		var $trList=$container.find('.T-selfpayList-Tbody').children('tr'),isTrue;
		    $trList.each(function(index) {
		    	var $that = $(this);
		    	var customerVal = $that.find('.T-customerRebateMoney').eq(0).val(),
		    	    contractVal = $that.find('.T-contractPrice').eq(index).val(),
		    	    marketVal = $that.find('.T-marketPrice').eq(index).val(),
		    	    guideVal = $that.find('.T-guideRate').eq(index).val(),
		    	    travelVal = $that.find('.T-travelAgencyRate').eq(index).val();
		    	customerVal =parseFloat(customerVal);
		    	contractVal = parseFloat(contractVal);
		    	marketVa= parseFloat(marketVal);
		    	guideVal= parseFloat(guideVal);
		    	travelVal=parseFloat(travelVal);
		    	    
		    	if (!!customerVal || !!contractVal || !!guideVal ||  !!travelVal ) {
		    		if ( customerVal > marketVal || contractVal > marketVal ||  guideVal > 100 || travelVal > 100 ) {
		    			isTrue = true;
		    			if (guideVal>100) {showMessageDialog("导游返佣不能大于100")};
						if (travelVal>100) {showMessageDialog("旅行社返佣不能大于100")};

		    		};
		    	};
		    });
		if (isTrue) { return;};

		if(ruleData.validatorList != undefined){
			if(!ruleData.validatorList.form()){return;}
		}
		var operation = "",method = "",jsonName = "";
		if (type == 1) {
			method = "addSelfPay";
			operation = "add";
			jsonName = "priceJsonAdd";
		}else if(type == 2){
			method = "updateSelfPay";
			operation = "update";
			jsonName = "selfPayUpdate";
		}
		var status = 0,id = $container.find("input[name=selfpayId]").val();
		if($container.find(".T-selfpay-status").prop("checked")){
			status = 1;
		}
		var form = $container.find(".T-selfpayMainForm").serialize()+"&status="+status+"&id="+id+"",
			formData = $container.find(".T-selfpayMainForm").serializeJson(),
			selfPayJson = [],
			selfList = $container.find(".T-selfpayList-Tbody tr");
			selfListLength = selfList.length;

		selfList.each(function(i){
			var name = $(this).find("input[name=name]").val(),
			id = $(this).data("entity-id") || "",
			customerType = $(this).find("select[name=customerType]").val(),
			remark = $(this).find("input[name=remark]").val(),
			priceJson = {
				id : id+"",
				name : name,
				customerType : customerType,
				normalInnerPrice : $(this).find("input[name=normalInnerPrice]").val(),
				customerRebateMoney : $(this).find("input[name=customerRebateMoney]").val(),
				normalMarketPrice : $(this).find("input[name=normalMarketPrice]").val(),
				normalGuideRate : $(this).find("input[name=normalGuideRate]").val(),
				normalTravelAgencyRate : $(this).find("input[name=normalTravelAgencyRate]").val(),
				dateArea : [],
				remark : remark
			};
			
			$(this).find(".T-dateTimeArea").each(function(){
				var index = $(this).data("index") || 1,
				$parents = $(this).closest('tr'),
				id = $parents.find("input[name=rebateListId]").eq(index-1).val(),
				startTime = $parents.find("input[name=startTime]").eq(index-1).val(),
				endTime = $parents.find("input[name=endTime]").eq(index-1).val(),
				contractPrice = $parents.find("input[name=contractPrice]").eq(index-1).val(),
				marketPrice = $parents.find("input[name=marketPrice]").eq(index-1).val(),
				guideRate = $parents.find("input[name=guideRate]").eq(index-1).val(),
				travelAgencyRate = $parents.find("input[name=travelAgencyRate]").eq(index-1).val();

				var dateArea = {
					id : id,
					startTime : startTime,
					endTime : endTime,
					price : contractPrice || 0,
					marketPrice : marketPrice || 0,
					guideRate : guideRate || 0,
					travelAgencyRate : travelAgencyRate || 0,
				}
				priceJson.dateArea.push(dateArea);
			})
			
			selfPayJson.push(priceJson)
		});
		selfPayJson = JSON.stringify(selfPayJson);
		$.ajax({
			url:selfpay.url(method,operation),
			type:"POST",
			data:form+"&"+jsonName+"="+encodeURIComponent(selfPayJson),
			success:function(data){
				var result = showDialog(data);
				if(result){
					if(type == 1){layer.close(selfpay.$addLayer);}
					else if(type == 2){layer.close(selfpay.$updateLayer);}
					showMessageDialog(data.message,function(){
						if (typeof fn === "function") {
							data.selfPay = JSON.parse(data.selfPay);
							formData.id = data.selfPay.id; 
							fn(formData);
						}else{
							selfpay.selfpayList(0);
						}
					});
				}
			}
		});
	};

	/**
	 * [numberRate description]  市场、内部、人数返佣 导社返佣的计算
	 * @param  {[type]} $tbody [description]
	 * @return {[type]}        [description]
	 */
	selfpay.numberRate = function($tbody){
		$tbody.on('change', '.T-calc', function(event) {
			event.preventDefault();
			var $that = $(this),
				$tr = $that.closest('tr');
				index = $that.closest('div').index();

			if ($that.hasClass('T-marketPrice')) {
				// 当市场价改变时
				var marketVal = $tr.find('.T-marketPrice').eq(index).val(),
					customerVal = $tr.find('.T-customerRebateMoney').eq(0).val();
					marketVal =parseFloat(marketVal);
    				customerVal =parseFloat(customerVal);
    				contractVal =parseFloat(contractVal);
					if(marketVal!="" && marketVal >= customerVal && !isNaN(customerVal) ) {
    					var innerPrice = parseFloat(marketVal-customerVal);
							//内部价格
							$tr.find('.T-contractPrice').eq(index).val(innerPrice);
					}else if(marketVal < customerVal){
						$tr.find(".T-marketPrice").eq(index).focus();
						showMessageDialog("市场价格不能小于人数返佣");

					}

			} else if ($that.hasClass('T-customerRebateMoney')) {
				// 当人数返佣改变时
				var customerVal = $tr.find('.T-customerRebateMoney').eq(0).val(),
					marketVal = $tr.find('.T-marketPrice').eq(index).val();
					contractVal = $tr.find('.T-contractPrice').eq(index).val();
					marketVal =parseFloat(marketVal);
    				customerVal =parseFloat(customerVal);
    				contractVal =parseFloat(contractVal);
    				if(isNaN(customerVal)){
    					customerVal = 0;
    				}
    				if(isNaN(contractVal)){
    					contractVal = 0;
    				}
					if(customerVal<=marketVal && customerVal!=null && contractVal< marketVal && marketVal!=null && !isNaN(marketVal)) {
						var innerPrice = parseFloat((marketVal-customerVal).toFixed(2));
							//内部价格
							$tr.find('.T-contractPrice').eq(index).val(innerPrice);
						
					}else if (customerVal!=null && contractVal!=null && !isNaN(contractVal)) {
						var marketVal = parseFloat((contractVal+customerVal).toFixed(2));
							//内部价格
							$tr.find('.T-marketPrice').eq(index).val(marketVal);
					};
			} else if ($that.hasClass('T-contractPrice') && false) {
				// 内部价格改变时
				var contractVal = $tr.find('.T-contractPrice').eq(index).val(),
					customerVal = $tr.find('.T-customerRebateMoney').eq(0).val();
					marketVal = $tr.find('.T-marketPrice').eq(index).val();
					contractVal = parseFloat(contractVal);
					customerVal = parseFloat(customerVal);
					marketVal = parseFloat(marketVal);
				   if (!!contractVal && !!customerVal  ) {                                            
                          totalVal =parseFloat((contractVal+customerVal).toFixed(2));         
				   	     $tr.find('.T-marketPrice').eq(index).val(totalVal);
				   };
			} else if ($that.hasClass('T-guideRate')) {
				// 当导游返佣改变时
				 var guideVal = $tr.find('.T-guideRate').eq(index).val();
				    if ( guideVal!=null && guideVal!="" && guideVal < 0 ) {
				    	 $tr.find('.T-guideRate').eq(index).focus();
				    	 showMessageDialog("导游返佣不能是负数");
				    }else if(guideVal!=null && guideVal!="" && guideVal <= 100){
				    	    $tr.find('.T-travelAgencyRate').eq(index).val(100-guideVal);
				    }else if(guideVal!=null && guideVal!="" && guideVal > 100){
				    	 $tr.find('.T-guideRate').eq(index).focus();
				    	 showMessageDialog("导游返佣不能大于100");
				    };
				
			} else if ($that.hasClass('T-travelAgencyRate')) {
				// 当旅行社返佣改变时
				var traveVal = $tr.find('.T-travelAgencyRate').eq(index).val();
				    if (traveVal!=null && traveVal!="" && traveVal < 0 ) {
				    	$tr.find('.T-travelAgencyRate').eq(index).focus();
				    	 showMessageDialog("旅行社返佣不能是负数");
				    }else if(traveVal!=null && traveVal!="" && traveVal <= 100){
				    	$tr.find('.T-guideRate').eq(index).val(100-traveVal);
				    }else if(traveVal!=null && traveVal!="" && traveVal > 100){
				    	$tr.find('.T-travelAgencyRate').eq(index).focus();
				    	showMessageDialog("旅行社返佣不能大于100");
				    };
				
			} 
		});
	};

	/**
	 * ajax url方法
	 * @param  {[type]} method    [方法名]
	 * @param  {[type]} operation [operation]
	 * @return {[type]}           [description]
	 */
	selfpay.url = function(method,operation){
		var url = ''+APP_ROOT+'back/selfpay.do?method='+method+'&token='+$.cookie('token')+'&menuKey='+menuKey+'&operation='+operation+'';
		return url;
	};
	/**
	 * 时间控件
	 * @param  {[type]} $obj [容器]
	 */
	selfpay.datepicker = function($obj){
		$obj.find(".datepicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		});
	};
		
	exports.init = selfpay.initModule;
	exports.addSelfPay = selfpay.addSelfpay;
});