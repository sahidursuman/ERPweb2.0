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
					addTab(menuKey,"自费管理",html);

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
				if(data.selfpay.province != null){var cityId = data.selfpay.city.id};
				if(data.selfpay.province != null){var districtId = data.selfpay.district.id};
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

					    	$container = $(".T-update-selfpay-form"),$tbody = $container.find('.T-selfpayList-Tbody');
					    	ruleData.Uvalidator = rule.check($container);
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
		var dialogObj = $( "#confirm-dialog-message" );
		dialogObj.removeClass('hide').dialog({
			modal: true,
			title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
			title_html: true,
			draggable:false,
			buttons: [ 
				{
					text: "取消",
					"class" : "btn btn-minier",
					click: function() {
						$( this ).dialog( "close" );
					}
				},
				{
					text: "确定",
					"class" : "btn btn-primary btn-minier",
					click: function() {
						$( this ).dialog( "close" );
						$.ajax({
							url:selfpay.url("deleteSelfPay","delete"),
							type:"POST",
							data:"id="+id+"&cateName=selfpay"+"",
							success:function(data){
								var result = showDialog(data);
								if(result){
									$this.closest('tr').fadeOut(function() {
										$(this).remove();
										selfpay.selfpayList(0);
									});
								}
							}
						});
					}
				}
			],
			open:function(event,ui){
				$(this).find("p").text("你确定要删除该自费项目？");
			}
		});
	};

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

		    	var $container = $(".T-add-selfpay-form");
		    	ruleData.validator = rule.check($container);
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
		var $tbody = $container.find('.T-selfpayList-Tbody');
		var html = '<tr><td><input name="name" class="col-sm-12" type="text" style="min-width:100px;" maxlength="100"/></td>'+
			'<td><select class="col-sm-12" name="customerType" style="min-width:100px;"><option value="0">散客</option><option value="1">团体</option></select></td>'+
			'<td><div class="col-sm-12 no-padding"><label class="col-sm-10">日常价格</label><label class="priceArea col-sm-2" style="padding-top:0px;"><button class="btn btn-success btn-sm btn-white T-add"><i class="ace-icon fa fa-plus bigger-110 icon-only"></i></button></label></div></td>'+
			'<td><div class="col-sm-12 no-padding"><input name="normalInnerPrice" class="col-sm-12" type="text" maxlength="10"/></div></td>'+
			'<td><div class="col-sm-12 no-padding"><input name="normalMarketPrice" class="col-sm-12" type="text" maxlength="10"/></div></td>'+
			'<td><div class="col-sm-12 no-padding"><input name="normalGuideRate" class="col-sm-12" type="text" maxlength="5"/></div></td>'+
			'<td><div class="col-sm-12 no-padding"><input name="normalTravelAgencyRate" class="col-sm-12" type="text" maxlength="5"/></div></td>'+
			'<td><input name="remark" type="text" class="col-sm-12" style="min-width:100px;" maxlength="1000"/></div></td>'+
			'<td style="width:70px"><a class="T-btn-price-delete">删除</a></td></tr>';
		$tbody.append(html);
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
			var dialogObj = $( "#confirm-dialog-message" );
			dialogObj.removeClass('hide').dialog({
				modal: true,
				title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
				title_html: true,
				draggable:false,
				buttons: [ 
					{
						text: "取消",
						"class" : "btn btn-minier",
						click: function() {
							$( this ).dialog( "close" );
						}
					},
					{
						text: "确定",
						"class" : "btn btn-primary btn-minier",
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
		var $parents = $this.closest('tr'), td = $parents.find("td");
		td.eq(2).append('<div class="col-sm-12 no-padding T-dateTimeArea" style=""><input type="hidden" name="rebateListId" value="" /><input name="startTime" value="" type="text" class="datepicker col-sm-4"><label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label><input name="endTime" value="" type="text" class="datepicker col-sm-4"><label class="priceArea col-sm-2" style="padding-top:0px;"><button class="btn btn-danger btn-sm btn-white T-del"><i class="ace-icon fa fa-minus bigger-110 icon-only" style="line-height: 20px"></i></button></label></div>');
		td.eq(3).append('<div class="col-sm-12 no-padding" style="padding-top:5px!important;"><input name="contractPrice" value="" class="col-sm-12" type="text" maxlength="10"></div>');
		td.eq(4).append('<div class="col-sm-12 no-padding" style="padding-top:5px!important;"><input name="marketPrice" value="" class="col-sm-12" type="text" maxlength="10"></div>');
		td.eq(5).append('<div class="col-sm-12 no-padding" style="padding-top:5px!important;"><input name="guideRate" value="" class="col-sm-12" type="text" maxlength="5"></div>');
		td.eq(6).append('<div class="col-sm-12 no-padding" style="padding-top:5px!important;"><input name="travelAgencyRate" value="" class="col-sm-12" type="text" maxlength="5"></div>');
		$parents.find(".T-del").off().on("click", selfpay.deteleDateArea);
		$parents.find(".T-dateTimeArea").eq($parents.find(".T-dateTimeArea").length - 1).attr("data-index", $parents.find(".T-dateTimeArea").length);
		ruleData.validatorList = rule.checkItems($tbody);
		selfpay.datepicker($tbody);
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
		var $parents = $this.closest('tr'), td = $parents.find("td"), index = $this.closest('.T-dateTimeArea').index(), id = $this.closest('div').find("input[name=rebateListId]").val();
		if (!!id) {
			var dialogObj = $( "#confirm-dialog-message" );
			dialogObj.removeClass('hide').dialog({
				modal: true,
				title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
				title_html: true,
				draggable:false,
				buttons: [ 
					{
						text: "取消",
						"class" : "btn btn-minier",
						click: function() {
							$( this ).dialog( "close" );
						}
					},
					{
						text: "确定",
						"class" : "btn btn-primary btn-minier",
						click: function() {
							$( this ).dialog( "close" );
							$.ajax({
								url:selfpay.url("deleteSelfPay","delete"),
								type:"POST",
								data:"id="+id+"&cateName=selfrebate",
								success:function(data){
									var result = showDialog(data);
									if(result){
										for(var i=2; i < 7; i++){
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
			for(var i=2; i < 7; i++){
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
		var operation = "",method = "",jsonName = "";
		if (type == 1) {
			method = "addSelfPay";
			operation = "add";
			jsonName = "priceJsonAdd";
    		if(!ruleData.validator.form()){return;}
    		if(ruleData.validatorList != undefined){
    			if(!ruleData.validatorList.form()){return;}
    		}
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
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
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