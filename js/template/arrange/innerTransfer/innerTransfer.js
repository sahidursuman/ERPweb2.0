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
			lineProductName :"",
			businessGroupId : "",
			businessGroupName : "",
			creator : "",
			creatorName :"",
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
	innerTransfer.innerTransferList = function(){
		//请求下拉框数据
		innerTransfer.ListMainHead();
	};
	innerTransfer.getListPage = function(event){
		var divId = event.data.divId,
			btn = event.data.btn,
			type = event.data.type;
		innerTransfer.getSearchParam(divId,type);
		innerTransfer.innerList(divId,type,0)
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
			lineProductName :getValue("lineProductName"),
			businessGroupId : getValue("businessGroupId"),
			businessGroupName : getValue("businessGroupName"),
			creator : getValue("creatorId"),
			creatorName:getValue("creatorName"),
			startTime : getValue("startTime"),
			endTime : getValue("endTime"),
			status : $("#"+divId).find(".btn-status button").attr("data-value")
		}
	};
	innerTransfer.ListMainHead = function(){
		$.ajax({
			url:KingServices.build_url("innerTransfer","findListMain"),
			type: 'POST',
			dataType: 'JSON',
			success:function(data){
				var result = showDialog(data);
				if(result){
					innerTransfer.allData.fromBusinessGroup = JSON.parse(data.fromBusinessGroup)
					innerTransfer.allData.fromUser = JSON.parse(data.fromUser)
					innerTransfer.allData.lineProduct = JSON.parse(data.lineProduct)
					innerTransfer.allData.toBusinessGroup = JSON.parse(data.toBusinessGroup)
					innerTransfer.allData.toUser = JSON.parse(data.toUser);
					var html = listMainTemplate(innerTransfer.allData);
					addTab(menuKey,"内转管理",html);

					var tab = "tab-"+menuKey+"-content",
						$innerTrsfOutObj=$('#inner-TransferOut');
						$innerTrsfInObj=$('#inner-TransferIn');
					//搜索 type:1 转出   type:2 转入
					$innerTrsfOutObj.find(".T-transferOut-search").off("click").on("click",{divId:"inner-TransferOut",btn:"btn-transferOut-search",type:"1"},innerTransfer.getListPage);
					$innerTrsfInObj.find(".T-transferIn-search").off("click").on("click",{divId:"inner-TransferIn",btn:"btn-transferIn-search",type:"2"},innerTransfer.getListPage);
					//初始化列表
					$innerTrsfOutObj.find(".T-transferOut-search").trigger('click');
					$innerTrsfInObj.find(".T-transferIn-search").trigger('click');

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
					$innerTrsfInObj.find(".T-transfer-export").click(function(){
						innerTransfer.$searchParam.type=2; 
						var exportUrl="" + KingServices.build_url("innerTransfer","findExcel") + "&searchParam="+encodeURIComponent(JSON.stringify(innerTransfer.$searchParam));
						window.location.href=exportUrl;
					});
					//导出操作 
					$innerTrsfOutObj.find(".T-transfer-export").click(function(){
						innerTransfer.$searchParam.type=1;
						var exportUrl="" + KingServices.build_url("innerTransfer","findExcel") + "&searchParam="+encodeURIComponent(JSON.stringify(innerTransfer.$searchParam));
						window.location.href=exportUrl;
					});
					$innerTrsfOutObj.find(".dropdown-menu a").click(function(){
						$(this).closest('div').find("button").attr("data-value",$(this).attr("data-value"));
						$(this).closest('div').find("span").text($(this).text());
						var divId = "inner-TransferOut",
							type = "1";
						innerTransfer.getSearchParam(divId,type);
						innerTransfer.innerList(divId,type,0);
						innerTransfer.findTotal(divId);
					})
					$innerTrsfInObj.find(".dropdown-menu a").click(function(){
						$(this).closest('div').find("button").attr("data-value",$(this).attr("data-value"));
						$(this).closest('div').find("span").text($(this).text());
						var divId = "inner-TransferIn",
							type = "2";
						innerTransfer.getSearchParam(divId,type);
						innerTransfer.innerList(divId,type,0);
						innerTransfer.findTotal(divId);
					})
				}
			}
		});
	};
	/**
	 * [findTotal 统计数据]
	 * @param  {[type]} divId [description]
	 * @return {[type]}       [description]
	 */
	innerTransfer.findTotal = function(divId){
		$.ajax({
			url:KingServices.build_url("innerTransfer","findTotal"),
			type: 'POST',
			dataType: 'JSON',
			data: "searchParam="+encodeURIComponent(JSON.stringify(innerTransfer.$searchParam)),
			success:function(data){
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
	/**
	 * [innerList 分页数据的详情]
	 * @param  {[type]} divId [description]
	 * @param  {[type]} type  [description]
	 * @param  {[type]} page  [description]
	 * @return {[type]}       [description]
	 */
	innerTransfer.innerList = function(divId,type,page){
		innerTransfer.$searchParam.pageNo=page;
		$.ajax({
			url:KingServices.build_url("innerTransfer","findPager"),
			type: 'POST',
			dataType: 'json',
			data: "searchParam="+encodeURIComponent(JSON.stringify(innerTransfer.$searchParam)),
			success:function(data){
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

					//我部转出&&他部转入报表操作
					innerTransfer.init_event(divId,type);

					page=0||page;
					// 绑定翻页组件
					laypage({
					    cont: $('#' + divId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.searchParam.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		innerTransfer.innerList(divId,type,obj.curr -1);
					    	}
					    }
					});
				}
			}
		})
	};

	/**
	 * [init_event 我部转出&&他部转入报表操作]
	 * @param  {[type]} divId [转入转出ID标识]
	 * @return {[type]}       [description]
	 */
	innerTransfer.init_event=function(divId,type){
		//我部转出报表操作
	    $("#"+divId).find('.T-transferOut-list').off().on('click', '.T-action', function(event) {
	    	event.preventDefault();
	    	/* Act on the event */
	    	var $that=$(this),id=$that.closest('tr').data('value');
	    	if ($that.hasClass('T-TransferOut-edit')) {
	    		//编辑我社转出
	    		innerTransfer.editTransferOut(id);
	    	}else if($that.hasClass('T-TransferOut-view')){
	    		//查看
	    		innerTransfer.viewTransferOut(id,type);
	    	}else if($that.hasClass('T-TransferOut-delete')){
	    		//撤销
	    		innerTransfer.deleteTransferOut(id);
	    	};
	    });

	    //他部转入
	    $("#"+divId).find('.T-transferIn-list').off().on('click', '.T-action', function(event) {
	    	event.preventDefault();
	    	/* Act on the event */
	    	var $that=$(this),id=$that.closest('tr').data('value');
	    	if ($that.hasClass('T-TransferIn-save')) {
	    		//确认
	    		innerTransfer.saveTransferIn(id);
	    	}else if($that.hasClass('T-TransferIn-view')){
	    		//查看
	    		innerTransfer.viewTransferOut(id,type);
	    	}else if($that.hasClass('T-TransferIn-refuse')){
	    		//拒绝
	    		innerTransfer.deleteTransferIn(id);
	    	};
	    });

	};
	innerTransfer.viewTransferOut = function(id,type){
		$.ajax({  
			url:KingServices.build_url("innerTransfer","edit"),
			data:"id="+id,
			dataType:'json',
			success:function(data){
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
			url:KingServices.build_url("innerTransfer","edit"),
			data:"id="+id,
			dataType:'json',
			success:function(data){
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
					innerTransfer.innitAddFee(validator);
					
					$editObj=$("#tab-arrange_inner_Transfer-edit-content");				

					//绑定删除分团转客信息
					$editObj.find(".T-edittransfer-delete").off().on("click",function(){
						var $that=$(this),$tr=$that.closest('tr'),id = $tr.attr("data-entity-id");
						innerTransfer.delTransferData(id,$tr);
					});
				   
					$editObj.find(".T-saveTransoutInfo").click(function(){
					    // 表单校验
				        if (!validator.form()) { return; }
						innerTransfer.saveEditTranIn(1);

					})
					$editObj.find(".T-cancelTransfer").click(function(){
						showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
							closeTab(menuKey + "-edit");
							innerTransfer.edited["edit"] = "";
						});
					})
				}
			}
		});
	};
	/**
	 * [innitAddFee 新增费用项目的计算]
	 * @param  {[type]} validator [description]
	 * @return {[type]}           [description]
	 */
	innerTransfer.innitAddFee = function(validator){  
		var $obj=$("#tab-arrange_inner_Transfer-edit-content");
		$obj.find("input[name=transChildPrice],input[name=transAdultPrice],input[name=count],input[name=price]").keyup(function(){
			innerTransfer.PayMoneyF();
		});
		//给新增费用绑定事件
		$obj.find(".T-transfer-addCost").click(function(){
			var html="<tr class=\"transferFee1SelectId\">"+
			"<td><span name=\"type\" value=\"0\">其他费用</span></td>"+
			"<td><input  name=\"discribe\" type=\"text\" class=\"col-sm-10  no-padding-right\"  maxlength=\"100\" /></td>"+
			"<td><input  name=\"count\" type=\"text\" class=\"col-sm-10  no-padding-right count\" maxlength=\"6\" /></td>"+
			"<td><span class=\"necessary  pull-left col-sm-2\"></span><input  name=\"price\" type=\"text\" class=\"col-sm-10  no-padding-right price\" maxlength=\"9\" /></td>"+
			"<td><a class=\"cursor T-edittransfer-delete\">删除</a></td>"+
			"</tr>";
			$obj.find(".addTransferCost").append(html);
			//表单验证
			rule.update(validator);

			//绑定删除分团转客信息
			$(".T-edittransfer-delete").off().on("click",function(){
				var $tr =$(this).closest('tr'),id = $tr.attr("data-entity-id");
				innerTransfer.delTransferData(id,$tr);
			});
			$obj.find("input[name=transChildPrice],input[name=transAdultPrice],input[name=count],input[name=price]").keyup(function(){
				innerTransfer.PayMoneyF();
			});
			$(document).ready(function(){
				innerTransfer.PayMoneyF();
			})
		});
	};
	/**
	 * [PayMoneyF 支付账务的计算]
	 */
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

	/**
	 * [delTransferData 根据Id判定是物理删除&&及时删除]
	 * @param  {[type]} id  [description]
	 * @param  {[type]} $tr [description]
	 * @return {[type]}     [description]
	 */
	innerTransfer.delTransferData = function(id,$tr){
		if( id!=null && id!=""){
			$.ajax({
				url:innerTransfer.url("deleteFee","delete"),
				type:"POST",
				data:"id="+id,
				dataType:"json",
				success:function(data){
					$tr.remove();
					innerTransfer.PayMoneyF();
				}
			});	
		}else{
			//移除空的其他费用
			$tr.remove();
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
			success:function(data){
				var result = showDialog(data);  
				if(result){  
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
						innerTransfer.edited["edit"] = "";
						if(isClose == 1){
							closeTab(menuKey+"-edit");
							var divId = "inner-TransferOut",
								type = "1";
							innerTransfer.getSearchParam(divId,type);
							innerTransfer.innerList(divId,type,0);
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
								url:KingServices.build_url("innerTransfer","delete"),
								type:"POST",
								data:"id="+id + "&isDelete=1",
								dataType:"json",
								success:function(data){
									var result = showDialog(data);
									if (result) {
										var divId = "inner-TransferOut",
											type = "1";
										innerTransfer.getSearchParam(divId,type);
										innerTransfer.innerList(divId,type,0);
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
							url:KingServices.build_url("innerTransfer","save"),
							type:"POST",
							data:"id="+id + "&isDelete=1",
							dataType:"json",
							success:function(data){
								var result = showDialog(data);
								if (result) {
									var divId = "inner-TransferIn",
										type = "2";
									innerTransfer.getSearchParam(divId,type);
									innerTransfer.innerList(divId,type,0);
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
							url:KingServices.build_url("innerTransfer","refuse"),
							type:"POST",
							data:"id="+id + "&isDelete=1",
							dataType:"json",
							success:function(data){
								var result = showDialog(data);
								if (result) {
									var divId = "inner-TransferIn",
										type = "2";
									innerTransfer.getSearchParam(divId,type);
									innerTransfer.innerList(divId,type,0);
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
		var chooseLineProduct = $("#"+divId).find(".T-lineProductChoose"),list;
			list = innerTransfer.allData.lineProduct;
			if(!!list && list.length > 0){
				for(var i=0; i < list.length; i++){
					list[i].value = list[i].name;
				}				
			}
		chooseLineProduct.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					//$(this).val("");
					var parents = $(this).parent();
					parents.find("input[name=lineProductId]").val("");
				}
			},
			select :function(event, ui){
				var _this = this, parents = $(_this).parent();
				parents.find("input[name=lineProductId]").val(ui.item.id).trigger('change');
			},source:list
		}).unbind("click").click(function(){
			var obj = this;
			if(!!list && list.length > 0){
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
		var chooseBusinessGroup = $("#"+divId).find(".T-businessGroupChoose"),businessData;
			if (type == 1) {
				businessData = innerTransfer.allData.fromBusinessGroup;
			}else{
				businessData = innerTransfer.allData.toBusinessGroup;
			}
			var list = businessData;
			if(!!list && list.length > 0){
				for(var i=0; i < list.length; i++){
					list[i].value = list[i].name;
				}
			}
		chooseBusinessGroup.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					//$(this).val("");
					var parents = $(this).parent();
					parents.find("input[name=businessGroupId]").val("");
				}
			},
			select :function(event, ui){
				var _this = this, parents = $(_this).parent();
				parents.find("input[name=businessGroupId]").val(ui.item.id).trigger('change');
			},source:list
		}).unbind("click").click(function(){
			var obj = this;
			if(!!list && list.length > 0){
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
		var chooseCreator = $("#"+divId).find(".T-creatorChoose"),creatorData;
			if (type == 1) {
				creatorData = innerTransfer.allData.fromUser;
			}else{
				creatorData = innerTransfer.allData.toUser;
			}
			var list = creatorData;
			if(list && list.length > 0){
				for(var i=0; i < list.length; i++){
					list[i].value = list[i].realName;
				}
			}
		chooseCreator.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					//$(this).val("");
					var parents = $(this).parent();
					parents.find("input[name=creatorId]").val("");
				}
			},
			select :function(event, ui){
				var _this = this, parents = $(_this).parent();
				parents.find("input[name=creatorId]").val(ui.item.id).trigger('change');
			},source:list
		}).unbind("click").click(function(){
			var obj = this;
			if(!!list && list.length > 0){
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

	exports.init = innerTransfer.initModule;
	exports.isEdited = innerTransfer.isEdited; 
	exports.save = innerTransfer.save; 
	exports.clearEdit = innerTransfer.clearEdit; 
});