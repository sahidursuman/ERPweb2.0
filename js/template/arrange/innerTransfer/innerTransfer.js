define(function(require, exports) {
	var rule = require("./rule"),
		menuKey = "arrange_inner_Transfer",
		listMainTemplate = require("./view/listMain"),
		outListTemplate = require("./view/outList"),
		inListTemplate = require("./view/inList"),
		viewTemplate=require("./view/view"),
		innerTransferOut = require("./view/innerTransferOutView"),
		editTemplate=require("./view/edit"),
		tabId = "tab-"+menuKey+"-content";


	var innerTransfer = {
		$searchParam : {
			pageNo : "",
			type : "",
			touristGroupId : "",
			lineProductId : "",
			businessGroupId : "",
			creator : "",
			startTime : "",
			endTime : "",
			status : "",
			first : ""
		},
		allData : {},
		edited : {}
	};

	innerTransfer.initModule = function(){
		innerTransfer.innerTransferList();
	};
	innerTransfer.url = function(method,operation){
		return ""+APP_ROOT+"back/innerTransfer.do?&method="+method+"&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation="+operation;
	};
	innerTransfer.innerTransferList = function(){
		//请求下拉框数据
		innerTransfer.ListMainHead();
		var html = listMainTemplate(innerTransfer.allData);
		addTab(menuKey,"内转管理",html);

		var tab = "tab-arrange_inner_Transfer-content";
		//搜索 type:1 转出   type:2 转入
		$("#inner-TransferOut .btn-transferOut-search").off("click").on("click",{divId:"inner-TransferOut",btn:"btn-transferOut-search",type:"1"},innerTransfer.getListPage);
		$("#inner-TransferIn .btn-transferIn-search").off("click").on("click",{divId:"inner-TransferIn",btn:"btn-transferIn-search",type:"2"},innerTransfer.getListPage);
		//初始化列表
		$("#inner-TransferOut .btn-transferOut-search").trigger('click');
		$("#inner-TransferIn .btn-transferIn-search").trigger('click');
		//线路产品autocomplete
		innerTransfer.chooseLineProduct("inner-TransferIn");
		//部门autocomplete
		innerTransfer.chooseBusinessGroup("inner-TransferOut","1");
		innerTransfer.chooseBusinessGroup("inner-TransferIn","2");
		//转客人autocomplete
		innerTransfer.chooseCreator("inner-TransferOut","1");
		innerTransfer.chooseCreator("inner-TransferIn","2");
		//时间控件
		innerTransfer.datePicker(tab);
		//导出
		$("#inner-TransferIn .btn-transfer-export").click(function(){
			innerTransfer.$searchParam.type=2; 
			var exportUrl ="" + innerTransfer.url("findExcel","view") + "&searchParam="+encodeURIComponent(JSON.stringify(innerTransfer.$searchParam));
			window.location.href=exportUrl;
		});
		//导出操作 
		$("#inner-TransferOut .btn-transfer-export").click(function(){
			innerTransfer.$searchParam.type=1; 
			var exportUrl ="" + innerTransfer.url("findExcel","view") + "&searchParam="+encodeURIComponent(JSON.stringify(innerTransfer.$searchParam));
			window.location.href=exportUrl;
		});
		$("#inner-TransferOut .dropdown-menu a").click(function(){
			$(this).closest('div').find("button").attr("data-value",$(this).attr("data-value"));
			$(this).closest('div').find("span").text($(this).text());
			var divId = "inner-TransferOut",
				type = "1";
			innerTransfer.getSearchParam(divId,type);
			innerTransfer.innerList(divId,type);
			innerTransfer.findTotal(divId);
		})
		$("#inner-TransferIn .dropdown-menu a").click(function(){
			$(this).closest('div').find("button").attr("data-value",$(this).attr("data-value"));
			$(this).closest('div').find("span").text($(this).text());
			var divId = "inner-TransferIn",
				type = "2";
			innerTransfer.getSearchParam(divId,type);
			innerTransfer.innerList(divId,type);
			innerTransfer.findTotal(divId);
		})
	};
	innerTransfer.getListPage = function(event){
		var divId = event.data.divId,
			btn = event.data.btn,
			type = event.data.type;
		innerTransfer.getSearchParam(divId,type);
		innerTransfer.innerList(divId,type)
		innerTransfer.findTotal(divId);
	};
	innerTransfer.getSearchParam = function(divId,type){
		getValue = function(name){
			var value = $("#"+divId).find("[name="+name+"]").val()
			return value;
		}
		innerTransfer.$searchParam = {
			pageNo : 0,
			type : type,
			lineProductId : getValue("lineProductId"),
			businessGroupId : getValue("businessGroupId"),
			creator : getValue("creatorId"),
			startTime : getValue("startTime"),
			endTime : getValue("endTime"),
			status : $("#"+divId).find(".btn-status button").attr("data-value")
		}
	};
	innerTransfer.ListMainHead = function(){
		$.ajax({
			url: innerTransfer.url("findListMain","view"),
			type: 'POST',
			dataType: 'JSON',
			beforeSend:function(){
				globalLoadingLayer = openLoadingLayer();
			},
			success:function(data){
				layer.close(globalLoadingLayer);
				var result = showDialog(data);
				if(result){
					innerTransfer.allData.fromBusinessGroup = JSON.parse(data.fromBusinessGroup)
					innerTransfer.allData.fromUser = JSON.parse(data.fromUser)
					innerTransfer.allData.lineProduct = JSON.parse(data.lineProduct)
					innerTransfer.allData.toBusinessGroup = JSON.parse(data.toBusinessGroup)
					innerTransfer.allData.toUser = JSON.parse(data.toUser)
				}
			}
		});
	};
	innerTransfer.findTotal = function(divId){
		$.ajax({
			url: innerTransfer.url("findTotal","view"),
			type: 'POST',
			dataType: 'JSON',
			data: "searchParam="+encodeURIComponent(JSON.stringify(innerTransfer.$searchParam)),
			beforeSend:function(){
				globalLoadingLayer = openLoadingLayer();
			},
			success:function(data){
				layer.close(globalLoadingLayer);
				var result = showDialog(data);
				if(result){
					if(divId == "inner-TransferIn"){
						$("#"+divId).find(".peopleCount").text("人数合计 : "+data.total.adultCount+"大"+data.total.childCount+"小");
						$("#"+divId).find(".needPayMoney").text("应收款合计:"+data.total.transNeedPayMoney+"元");
						$("#"+divId).find(".payedMoney").text("已收款合计:"+data.total.transPayedMoney+"元");
					} else {
						$("#"+divId).find(".peopleCount").text("人数合计 : "+data.total.adultCount+"大"+data.total.childCount+"小");
						$("#"+divId).find(".needPayMoney").text("应付款合计:"+data.total.transNeedPayMoney+"元");
						$("#"+divId).find(".payedMoney").text("已付款合计:"+data.total.transPayedMoney+"元");
					}
				}
			}
		});
	};
	innerTransfer.innerList = function(divId,type){
		$.ajax({
			url: innerTransfer.url("findPager","view"),
			type: 'POST',
			dataType: 'json',
			data: "searchParam="+encodeURIComponent(JSON.stringify(innerTransfer.$searchParam)),
			beforeSend:function(){
				globalLoadingLayer = openLoadingLayer();
			},
			success:function(data){
				layer.close(globalLoadingLayer);
				data.resultList = JSON.parse(data.resultList);
				var result = showDialog(data);
				if(result){
					var html;
					if (type == 1) {
						html = outListTemplate(data);
					}else{
						html = inListTemplate(data);
					}
					html = filterUnAuth(html);
					$("#"+divId+" .innerList").html(html);

					//我部转出小组操作
					$("#"+divId+" .btn-TransferOut-edit").click(function(){
						var parents = $(this).closest('tr');
							id = parents.attr("data-entity-id");
						innerTransfer.editTransferOut(id);
					});
					$("#"+divId+" .btn-TransferOut-view").click(function(){
						var parents = $(this).closest('tr');
							id = parents.attr("data-entity-id");
						innerTransfer.viewTransferOut(id,type);
					});
					$("#"+divId+" .btn-TransferOut-delete").click(function(){
						var parents = $(this).closest('tr');
							id = parents.attr("data-entity-id");
						innerTransfer.deleteTransferOut(id);
					});
					//他部转入小组操作
					$("#"+divId+" .btn-TransferIn-save").click(function(){
						var parents = $(this).closest('tr');
							id = parents.attr("data-entity-id");
						innerTransfer.saveTransferIn(id);
					});
					$("#"+divId+" .btn-TransferIn-view").click(function(){
						var parents = $(this).closest('tr');
							id = parents.attr("data-entity-id");
						innerTransfer.viewTransferOut(id,type);
					});
					$("#"+divId+" .btn-TransferIn-refuse").click(function(){
						var parents = $(this).closest('tr');
							id = parents.attr("data-entity-id");
						innerTransfer.deleteTransferIn(id);
					});

					// 绑定翻页组件
					laypage({
					    cont: $('#' + tabId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		innerTransfer.innerList(divId,type);
					    	}
					    }
					});
				}
			}
		})
	};
	innerTransfer.viewTransferOut = function(id,type){
		$.ajax({  
			url:innerTransfer.url("edit","view"),
			data:"id="+id,
			dataType:'json',
			before:function(){
				globalLoadingLayer = layer.open();
			},
			success:function(data){
				layer.close(globalLoadingLayer);
				data.innerTransfer = JSON.parse(data.innerTransfer);
				
				var html = viewTemplate(data);
				var outViewTemplate = innerTransferOut(data);
				if(type == 1){
					addTab(menuKey+"-outView","我部转出小组信息",html);
				}else{
					addTab(menuKey+"-inView","他部转入小组信息",outViewTemplate);
				}
				
			}
		});
	};
	innerTransfer.editTransferOut = function(id){
		$.ajax({
			url:innerTransfer.url("edit","view"),
			data:"id="+id,
			dataType:'json',
			before:function(){
				globalLoadingLayer = layer.open();
			},
			success:function(data){
				layer.close(globalLoadingLayer);
				data.innerTransfer = JSON.parse(data.innerTransfer);
				data.businessGroup = JSON.parse(data.businessGroup);
				var result = showDialog(data);
				if (result) {
					var html = editTemplate(data),validator,
					$editObj=$("#tab-arrange_inner_Transfer-edit-content");

					if($("#tab-"+menuKey+"-edit-content").length > 0) {
						addTab(menuKey+"-edit","修改内转信息");
						if(!!innerTransfer.edited["edit"] && innerTransfer.edited["edit"] != ""){
							addTab(menuKey+"-edit","修改内转信息");
							rule.transferCheckor($editObj);
							showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
								 innerTransfer.saveEditTranIn(0);
								 innerTransfer.edited["edit"] = "";
								 addTab(menuKey+"-edit","修改内转信息",html);
								 validator=rule.transferCheckor($editObj);
					
							 },function(){
								 addTab(menuKey+"-edit","修改内转信息",html);
								 innerTransfer.edited["edit"] = "";
								 validator=rule.transferCheckor($editObj);
						
							 });
						 }else{
							addTab(menuKey+"-edit","修改内转信息",html);
							validator=rule.transferCheckor($editObj);
						
						 }
					}else{
						addTab(menuKey+"-edit","修改内转信息",html);

						$editObj=$("#tab-arrange_inner_Transfer-edit-content");
						validator=rule.transferCheckor($editObj);
					}
					$("#tab-"+menuKey+"-edit-content").on("change",function(){
						innerTransfer.edited["edit"] = "edit"; 					
					})
					//新增&&智能计算
					//inner.innitAddFee(validator);
					innerTransfer.innitAddFee(validator);
					
					$editObj=$("#tab-arrange_inner_Transfer-edit-content");				

					//绑定删除分团转客信息
					$editObj.find(".btn-edittransfer-delete").off().on("click",function(){
						var tr =$(this).parent().parent();
						var id = tr.attr("data-entity-id");
						innerTransfer.delTransferData(id,tr);
					});
				   
					$editObj.find(".btn-saveTransoutInfo").click(function(){
					    // 表单校验
				        if (!validator.form()) { return; }
						innerTransfer.saveEditTranIn(1);

					})
					$editObj.find(".btn-cancelTransfer").click(function(){
						showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
							closeTab(menuKey + "-edit");
							innerTransfer.edited["edit"] = "";
						});
					})
				}
			}
		});
	};
	innerTransfer.innitAddFee = function(validator){  
		var $obj=$("#tab-arrange_inner_Transfer-edit-content");
		$obj.find("input[name=transChildPrice],input[name=transAdultPrice],input[name=count],input[name=price]").keyup(function(){
			innerTransfer.PayMoneyF();
		});
		//给新增费用绑定事件
		$obj.find(".btn-transfer-addCost").click(function(){
			var html="<tr class=\"transferFee1SelectId\">"+
			"<td><span name=\"type\" value=\"0\">其他费用</span></td>"+
			"<td><input  name=\"discribe\" type=\"text\" class=\"col-sm-10  no-padding-right\"  maxlength=\"100\" /></td>"+
			"<td><input  name=\"count\" type=\"text\" class=\"col-sm-10  no-padding-right count\" maxlength=\"6\" /></td>"+
			"<td><span class=\"necessary  pull-left col-sm-2\"></span><input  name=\"price\" type=\"text\" class=\"col-sm-10  no-padding-right price\" maxlength=\"9\" /></td>"+
			"<td><a class=\"cursor btn-edittransfer-delete\">删除</a></td>"+
			"</tr>";
			$obj.find(".addTransferCost").append(html);
			//表单验证
			rule.update(validator);

			//绑定删除分团转客信息
			$(".btn-edittransfer-delete").off().on("click",function(){
				var tr =$(this).closest('tr');
				var id = tr.attr("data-entity-id");
				innerTransfer.delTransferData(id,tr);
			});
			$obj.find("input[name=transChildPrice],input[name=transAdultPrice],input[name=count],input[name=price]").keyup(function(){
				innerTransfer.PayMoneyF();
			});
			$(document).ready(function(){
				innerTransfer.PayMoneyF();
			})
		});
	};
	innerTransfer.PayMoneyF = function(){
		var $objFee=$("#tab-arrange_inner_Transfer-edit-content");
		var $obj=$(".addTransferCostTable"); 
		var needPayMoney = 0;
		var transNeedPayMoney = $objFee.find("input[name=transNeedPayMoney]");//应付
		var transPayedMoney = $obj.find("input[name=transPayedMoney]"); //已付
		var trList = $(".addTransferCostTable tbody.addTransferCost").find("tr");
					
		for(i=0;i<trList.length;i++){
			var a =parseFloat(trList.eq(i).find(".count").val());
			var b =parseFloat(trList.eq(i).find(".price").val());
				if(isNaN(a)){
					a = 0;
				}
				if(isNaN(b)){
					b =0;
				}
			needPayMoney += a*b;
		}
		//应付
		transNeedPayMoney.val(needPayMoney.toFixed(2));
	};
	innerTransfer.delTransferData = function(id,tr){
		if( id!=null && id!=""){
			$.ajax({
				url:innerTransfer.url("deleteFee","delete"),
				type:"POST",
				data:"id="+id,
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						type:3
					});
				},
				success:function(data){
					$(tr).remove();
					layer.close(globalLoadingLayer);
					innerTransfer.PayMoneyF();
				}
			});	
		}else{
			//移除空的其他费用
			$(tr).remove();
			innerTransfer.PayMoneyF();
		}
	}
	innerTransfer.saveEditTranIn = function(isClose){
		var $obj=$("#tab-arrange_inner_Transfer-edit-content")
		function getValParam (name){
			var val = $obj.find("[name="+name+"]").val();
			return val;
		}
		var innerTransferJson = {
			id : getValParam("id"),//	内转ID		
			innerTransferFeeSet : "",	//内转的其他费用	array<object>	
			toBusinessGroupId :$obj.find("select[name=businessGroup_id]").val(),//	转给的部门ID	  	
			transAdultPrice	: getValParam("transAdultPrice"),//内转大人价		
			transChildPrice	: getValParam("transChildPrice"), //内转小孩价		
			transNeedPayMoney :getValParam("transNeedPayMoney"),//	应付		需要计算
			transPayedMoney	 : getValParam("transPayedMoney"), //已付		填写
			transRemark : getValParam("transRemark")
		}   

		//获取新增费用项目
		//添加费用JSON
		var otherFeeJsonAdd = [];
		var otherFeeJsonAddLength=$obj.find(".addTransferCost tr").length;
		$obj.find(".addTransferCost tr").each(function(i){
			var id=$(this).attr("data-entity-id");
			var discribe = "\""+$(this).find("input[name=discribe]").val()+"\"";
			var count = $(this).find("input[name=count]").val();
			var price = $(this).find("input[name=price]").val();
			if(i>1){
				var otherFeeJson = { 
					"id":id,
					"discribe":discribe,
					"count":count,
					"price" : price
				}
				otherFeeJsonAdd.push(otherFeeJson);
			}
		})
		innerTransferJson.innerTransferFeeSet=otherFeeJsonAdd;
		var innerTransferJson=JSON.stringify(innerTransferJson);
		$.ajax({
			url:""+APP_ROOT+"back/innerTransfer.do?method=update&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
			data:"innerTransfer="+encodeURIComponent(innerTransferJson),
			datatype:"json",
			beforeSend:function(){
				globalLoadingLayer = layer.open({
					type:3
				});
			},
			success:function(data){
				layer.close(globalLoadingLayer);
				var result = showDialog(data);  
				if(result){  
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						innerTransfer.edited["edit"] = "";
						if(isClose == 1){
							closeTab(menuKey+"-edit");
							var divId = "inner-TransferOut",
								type = "1";
							innerTransfer.getSearchParam(divId,type);
							innerTransfer.innerList(divId,type);
						}
					});
				}
			}
		});
	}
	innerTransfer.deleteTransferOut = function(id){
		var dialogObj = $( "#confirm-dialog-message" );
		dialogObj.removeClass('hide').dialog({
			modal: true,
			title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
			title_html: true,
			draggable:false,
			buttons: [ 
				{
					text: "否",
					"class" : "btn btn-minier",
					click: function() {
						$( this ).dialog( "close" );
					}
				},
				{
					text: "是",
					"class" : "btn btn-primary btn-minier",
					click: function() {
							$.ajax({
								url:innerTransfer.url("delete","delete"),
								type:"POST",
								data:"id="+id + "&isDelete=1",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = layer.open({
										type:3
									});
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if (result) {
										var divId = "inner-TransferOut",
											type = "1";
										innerTransfer.getSearchParam(divId,type);
										innerTransfer.innerList(divId,type);
									}
								 }
							});
						$( this ).dialog( "close" );
					}
				}
			],
			open:function(event,ui){
				$(this).find("p").text("是否撤销内转操作？");
			}
		});
	};
	innerTransfer.saveTransferIn = function(id){
		var dialogObj = $( "#confirm-dialog-message" );
		dialogObj.removeClass('hide').dialog({
			modal: true,
			title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
			title_html: true,
			draggable:false,
			buttons: [ 
				{
					text: "否",
					"class" : "btn btn-minier",
					click: function() {
						$( this ).dialog( "close" );
					}
				},
				{
					text: "是",
					"class" : "btn btn-primary btn-minier",
					click: function() {
	
						$.ajax({
							url:innerTransfer.url("save","add"),
							type:"POST",
							data:"id="+id + "&isDelete=1",
							dataType:"json",
							beforeSend:function(){
								globalLoadingLayer = layer.open({
									type:3
								});
							},
							success:function(data){
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if (result) {
									var divId = "inner-TransferIn",
										type = "2";
									innerTransfer.getSearchParam(divId,type);
									innerTransfer.innerList(divId,type);
								}
							 }
						});
						$( this ).dialog( "close" );
					}
				}
			],
			open:function(event,ui){
				$(this).find("p").text("是否确认转入操作？");
			}
		});
	};
	innerTransfer.deleteTransferIn = function(id){
		var dialogObj = $( "#confirm-dialog-message" );
		dialogObj.removeClass('hide').dialog({
			modal: true,
			title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
			title_html: true,
			draggable:false,
			buttons: [ 
				{
					text: "否",
					"class" : "btn btn-minier",
					click: function() {
						$( this ).dialog( "close" );
					}
				},
				{
					text: "是",
					"class" : "btn btn-primary btn-minier",
					click: function() {
						$.ajax({
							url:innerTransfer.url("refuse","delete"),
							type:"POST",
							data:"id="+id + "&isDelete=1",
							dataType:"json",
							beforeSend:function(){
								globalLoadingLayer = layer.open({
									type:3
								});
							},
							success:function(data){
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
								if (result) {
									var divId = "inner-TransferIn",
										type = "2";
									innerTransfer.getSearchParam(divId,type);
									innerTransfer.innerList(divId,type);
								}
							 }
						});
						$( this ).dialog( "close" );
					}
				}
			],
			open:function(event,ui){
				$(this).find("p").text("是否拒绝转入操作？");
			}
		});
	};
	innerTransfer.chooseLineProduct = function(divId){
		var chooseLineProduct = $("#"+divId).find(".T-lineProductChoose");
		chooseLineProduct.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					$(this).val("");
					var parents = $(this).parent();
					parents.find("input[name=lineProductId]").val("");
				}
			},
			select :function(event, ui){
				var _this = this, parents = $(_this).parent();
				parents.find("input[name=lineProductId]").val(ui.item.id).trigger('change');
			}
		}).unbind("click").click(function(){
			var obj = this,
				list = innerTransfer.allData.lineProduct;
			if(list && list.length > 0){
				for(var i=0; i < list.length; i++){
					list[i].value = list[i].name;
				}
				$(obj).autocomplete('option','source', list);
				$(obj).autocomplete('search', '');
			}else{
				layer.tips('没有内容', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})
	};
	innerTransfer.chooseBusinessGroup = function(divId,type){
		var chooseBusinessGroup = $("#"+divId).find(".T-businessGroupChoose");
		chooseBusinessGroup.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					$(this).val("");
					var parents = $(this).parent();
					parents.find("input[name=businessGroupId]").val("");
				}
			},
			select :function(event, ui){
				var _this = this, parents = $(_this).parent();
				parents.find("input[name=businessGroupId]").val(ui.item.id).trigger('change');
			}
		}).unbind("click").click(function(){
			var businessData;
			if (type == 1) {
				businessData = innerTransfer.allData.fromBusinessGroup;
			}else{
				businessData = innerTransfer.allData.toBusinessGroup;
			}
			var obj = this,
				list = businessData;
			if(list && list.length > 0){
				for(var i=0; i < list.length; i++){
					list[i].value = list[i].name;
				}
				$(obj).autocomplete('option','source', list);
				$(obj).autocomplete('search', '');
			}else{
				layer.tips('没有内容', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})
	};
	innerTransfer.chooseCreator = function(divId,type){
		var chooseCreator = $("#"+divId).find(".T-creatorChoose");
		chooseCreator.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					$(this).val("");
					var parents = $(this).parent();
					parents.find("input[name=creatorId]").val("");
				}
			},
			select :function(event, ui){
				var _this = this, parents = $(_this).parent();
				parents.find("input[name=creatorId]").val(ui.item.id).trigger('change');
			}
		}).unbind("click").click(function(){
			var creatorData;
			if (type == 1) {
				creatorData = innerTransfer.allData.fromUser;
			}else{
				creatorData = innerTransfer.allData.toUser;
			}
			var obj = this,
				list = creatorData;
			if(list && list.length > 0){
				for(var i=0; i < list.length; i++){
					list[i].value = list[i].realName;
				}
				$(obj).autocomplete('option','source', list);
				$(obj).autocomplete('search', '');
			}else{
				layer.tips('没有内容', obj, {
				    tips: [1, '#3595CC'],
				    time: 2000
				});
			}
		})
	};
	innerTransfer.datePicker = function(tab){
		$("#"+tab+" .datepicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
	}
	innerTransfer.isEdited = function(editedType){
		if(!!innerTransfer.edited[editedType] && innerTransfer.edited[editedType] != ""){
			return true;
		}
		return false;
	}
	innerTransfer.clearEdit = function(clearType){
		innerTransfer.edited[clearType] = "";
	}
	innerTransfer.save = function(saveType){
		if(saveType == "edit"){
			innerTransfer.saveEditTranIn(1);
		} 
	}

	exports.innerTransfer = innerTransfer.initModule;
	exports.isEdited = innerTransfer.isEdited; 
	exports.save = innerTransfer.save; 
	exports.clearEdit = innerTransfer.clearEdit; 
});