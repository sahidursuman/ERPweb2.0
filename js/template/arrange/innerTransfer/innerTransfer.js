define(function(require, exports) {
	var rule = require("./rule"); 
	var menuKey = "arrange_inner_Transfer",
	listTemplate = require("./view/list"),
	listTransferInTemplate=require("./view/listTransferIn"),
	viewTemplate=require("./view/view"),
	editTemplate=require("./view/edit"),
	tabId = "tab-" + menuKey + "-content";
	var requestMain = true;//控制搜索头的访问次数
	var requestTotal = true;//控制统计数据的访问次数
	//搜索字段
	var searchParam = {
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
	//分页查询的返回结果
    map = {
		searchParam : "",
		resultList : "",
		total : "",
		lineProduct : "",
		user : "",
		businessGroup : ""
	},
	innerTransfer = {
	    id : "",//	内转ID		
	    innerTransferFeeSet : "",	//内转的其他费用	array<object>	
	    toBusinessGroupId :"",//	转给的部门ID		
	    transAdultPrice	: "",//内转大人价		
	    transChildPrice	: "", //内转小孩价		
	    transNeedPayMoney :"",//	应付		需要计算
	    transPayedMoney	 : "", //已付		填写
	    transRemark : ""
	},

	innerTransferFeeSet= {
		id : "",
		count :"",
		discribe : "",
		price : ""
	};

	function url(method,operation){
		return ""+APP_ROOT+"back/innerTransfer.do?&method="+method+"&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation="+operation;
	};

	var inner = {
		edited : {},
		isEdited : function(editedType){
			if(!!inner.edited[editedType] && inner.edited[editedType] != ""){
				return true;
			}
			return false;
		},
		list:function(searchParam){
			globalLoadingLayer = layer.open({
				zIndex:1028,
				type:3
			});
			if(searchParam.first=="1"){
				requestMain = true;
				requestTotal = true;
				searchParam.first = "2";
			}
			if(requestMain){
				//搜索头数据  
				$.ajax({  
					url:url("findListMain","view"),
					data:"",
					dataType:'json',
					success:function(data1){
						map.lineProduct = JSON.parse(data1.lineProduct);
						map.user = JSON.parse(data1.user);
						map.businessGroup = JSON.parse(data1.businessGroup);
						requestMain = false;
					}
				});
			}
			//统计数据  
			if(requestTotal){
				$.ajax({  
					url:url("findTotal","view"),
					data:"searchParam="+encodeURIComponent(JSON.stringify(searchParam)),
					dataType:'json',
					success:function(data2){
						map.total = data2.total;
						requestTotal = false;
					}
				});
			}
			//分页结果集
			$.ajax({  
				url:url("findPager","view"),
				data:"searchParam="+encodeURIComponent(JSON.stringify(searchParam)),
				dataType:'json',
				success:function(data3){
					layer.close(globalLoadingLayer);
					var result = showDialog(data3);
					//如果正确则就执行
					if(result){

						map.resultList = JSON.parse(data3.resultList);
						map.searchParam = data3.searchParam;
						var html = listTemplate(map);
						addTab(menuKey,"内转管理",html);
						//时间控件
						inner.initTimePicker();
						//内部转出分页 
						inner.transferOutfindPager(searchParam);

						function getVal (name){
							var val = $("#" +tabId+" .innerTransfer_list ").find("[name="+name+"]").val();
							return val;
						}

						function buildSearchParam(){
							searchParam.pageNo = getVal("pageNo");
							searchParam.totalPage = getVal("totalPage");
							searchParam.type = 1;
							searchParam.lineProductId = getVal("lineProductId");
							searchParam.businessGroupId = getVal("businessGroupId");
							searchParam.creator = getVal("creator");
							searchParam.startTime = getVal("startTime");
							searchParam.endTime = getVal("endTime");
							searchParam.status = $("#" +tabId+" .innerTransfer_list .btn-status button").attr("data-value");
							return searchParam;
						}
						//搜索栏状态button下拉事件
						$("#" +tabId+" .innerTransfer_list .btn-status .dropdown-menu a").click(function(){
							$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
							$(this).parent().parent().parent().find("span").text($(this).text());
							searchParam = buildSearchParam();
							requestTotal = true;
							inner.list(searchParam);
						});
						//搜索事件
						$("#" +tabId+" .innerTransfer_list .btn-transferOut-search").click(function(){
							searchParam = buildSearchParam();
							searchParam.pageNo = 0;
							requestTotal = true;
							inner.list(searchParam);
						});
						
						//导出操作 
						$("#" +tabId +"  .innerTransfer_list .btn-transfer-export").click(function(){
							searchParam.type=1; 
							var exportUrl ="" + url("findExcel","view") + "&searchParam="+encodeURIComponent(JSON.stringify(searchParam));
							window.location.href=exportUrl;
						});
						
						//切换我部转出
						$("#" +tabId+" .innerTransfer_list .transferOut").click(function(){
							searchParam.pageNo = 0;
							searchParam.type = 1;
							requestTotal = true;
							inner.listTransferIn(searchParam);
						});

						//切换他部转入
						$("#" +tabId+" .innerTransfer_list .transferIn").click(function(){
							searchParam.pageNo = 0;
							searchParam.type = 2;
							requestTotal = true;
							inner.listTransferIn(searchParam);
						});
					}
				}
			})
		},
	   //时间初始化控件 
	   initTimePicker:function(){
			$(".innerTransfer_list input[name=startTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});

			$(".innerTransfer_list input[name=endTime]").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		},

		/**
		 * @param  {[searchParam]}
		 * @return {[type]}
		 * 我部转出
		 * 
		 */
		transferOutfindPager:function(searchParam){
			var $obj=$("#" +tabId+" .innerTransfer_list");
			var classType = map.searchParam.type;
			 $obj.find("[name=type]").val(classType);
			function getVal (name){
					var val = $obj.find("[name="+name+"]").val();
					return val;
			}
			function buildSearchParam(){
					searchParam.pageNo = getVal("pageNo");
					searchParam.totalPage = getVal("totalPage");
					searchParam.type = 1;
					searchParam.lineProductId = getVal("lineProductId");
					searchParam.businessGroupId = getVal("businessGroupId");
					searchParam.creator = getVal("creator");
					searchParam.startTime = getVal("startTime");
					searchParam.endTime = getVal("endTime");
					searchParam.status = getVal("status");
					return searchParam;
			 }

			//分页--首页按钮事件
				$obj.find(".pageMode a.first").click(function(){
					searchParam = buildSearchParam();
					searchParam.pageNo = 0;
					inner.list(searchParam);
				});
				//分页--上一页事件
				$obj.find(".pageMode a.previous").click(function(){
					searchParam = buildSearchParam();
					var pageNo = parseInt(searchParam.pageNo);
					var previous = pageNo - 1;
					if(pageNo == 0){
						previous = 0;
					}
					searchParam.pageNo = previous;
					inner.list(searchParam);
				});   
				//分页--下一页事件
				$obj.find(".pageMode a.next").click(function(){
					searchParam = buildSearchParam();
					var pageNo = parseInt(searchParam.pageNo);
					var totalPage = parseInt(searchParam.totalPage);
					var next =  pageNo + 1;
					if(pageNo == totalPage-1){
						next = pageNo ;
					}
					searchParam.pageNo = next;
					inner.list(searchParam);
				});
				//分页--尾页事件
				$obj.find(".pageMode a.last").click(function(){
					searchParam = buildSearchParam();
					var totalPage = parseInt(searchParam.totalPage);
					var pageNo = 0;
					if(totalPage==0){
						pageNo = 0;
					}else{
						pageNo = totalPage - 1; 
					}
					searchParam.pageNo = pageNo;
					inner.list(searchParam);
				});
				//查看
				$obj.find(".btn-TransferOut-view").click(function(){
					var id = $(this).attr("data-entity-id");
					inner.viewTransferOut(id);
				});
				//编辑
				$obj.find(".btn-TransferOut-edit").click(function(){
					var id = $(this).attr("data-entity-id");
					inner.editTransferOut(id);
					//计算初始化
			        inner.PayMoneyF();
				});
				//撤销
				$obj.find(".btn-TransferOut-delete").click(function(){
					var id = $(this).attr("data-entity-id");
					inner.deleteTransferOut(id);
				});
		},

		viewTransferOut:function(id){
			$.ajax({  
				url:url("edit","view"),
				data:"id="+id,
				dataType:'json',
				before:function(){
					globalLoadingLayer = layer.open();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					data.innerTransfer = JSON.parse(data.innerTransfer);
					var html = viewTemplate(data);
					addTab(menuKey+"-view","内转信息",html);
				}
			});
		},

		//我社转出编辑操作
		editTransferOut:function(id){
			$.ajax({  
				url:url("edit","view"),
				data:"id="+id,
				dataType:'json',
				before:function(){
					globalLoadingLayer = layer.open();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					data.innerTransfer = JSON.parse(data.innerTransfer);
					data.businessGroup = JSON.parse(data.businessGroup);
					var html = editTemplate(data),
					validator;
					if($("#tab-"+menuKey+"-edit-content").length > 0) {
						addTab(menuKey+"-edit","修改内转信息");
						if(!!inner.edited["edit"] && inner.edited["edit"] != ""){
							addTab(menuKey+"-edit","修改内转信息");
							rule.transferCheckor($(".inner-edit"));
							showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
								 inner.saveEditTranIn(0);
								 inner.edited["edit"] = "";
								 addTab(menuKey+"-edit","修改内转信息",html);
								 validator=rule.transferCheckor($(".inner-edit"));
					
							 },function(){
								 addTab(menuKey+"-edit","修改内转信息",html);
								 inner.edited["edit"] = "";
								 validator=rule.transferCheckor($(".inner-edit"));
						
							 });
						 }else{
							addTab(menuKey+"-edit","修改内转信息",html);
							validator=rule.transferCheckor($(".inner-edit"));
						
						 }
					}else{
						addTab(menuKey+"-edit","修改内转信息",html);
						validator=rule.transferCheckor($(".inner-edit"));
				
					}
					$("#tab-"+menuKey+"-edit-content").on("change",function(){
						inner.edited["edit"] = "edit"; 
					
					})

					//新增&&智能计算
					inner.innitAddFee(validator);
					rule.update(validator);

					$obj=$("#tab-arrange_inner_Transfer-edit-content");

					//绑定删除分团转客信息
					$obj.find(".btn-edittransfer-delete").off().on("click",function(){
						var tr =$(this).parent().parent();
						var id = tr.attr("data-entity-id");
						inner.delTransferData(id,tr);
					});
				   
					$obj.find(".btn-saveTransoutInfo").click(function(){
					    // 表单校验
				        if (!validator.form()) { return; }
						inner.saveEditTranIn(1);

					})
					$obj.find(".btn-cancelTransfer").click(function(){
						showConfirmDialog($( "#confirm-dialog-message" ), "确定关闭本选项卡?",function(){
							closeTab(menuKey + "-edit");
							inner.edited["edit"] = "";
						});
					})
				}
			});
		},


		saveEditTranIn:function(isClose){
		
			var $obj=$("#tab-arrange_inner_Transfer-edit-content");

			function getValParam (name){
				var val = $obj.find("[name="+name+"]").val();
				return val;
			}


			var innerTransfer = {
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
				var discribe = $(this).find("input[name=discribe]").val();
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

			innerTransfer.innerTransferFeeSet=otherFeeJsonAdd;
			var innerTransfer=JSON.stringify(innerTransfer);
			$.ajax({
				url:""+APP_ROOT+"back/innerTransfer.do?method=update&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
				data:"innerTransfer="+encodeURIComponent(innerTransfer),
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
						showMessageDialog($( "#confirm-dialog-message" ),data.message);
						//if(isClose == 1){
							//closeTab(menuKey+"-updateTransfer");
							inner.edited["edit"] = "";
							if(isClose == 1){
								closeTab(menuKey+"-edit");
								inner.list(searchParam);
							}
						//}
						
					}
				}
			});

		},


		innitAddFee:function(validator){  
			var $obj=$("#tab-arrange_inner_Transfer-edit-content");
			//给新增费用绑定事件
			$obj.find(".btn-transfer-addCost").click(function(){
				var html="<tr class=\"transferFee1SelectId\">"+
				"<td><span name=\"type\" value=\"0\">其他费用</span></td>"+
				"<td><input  name=\"discribe\" type=\"text\" class=\"col-sm-10  no-padding-right\" /></td>"+
				"<td><input  name=\"count\" type=\"text\" class=\"col-sm-10  no-padding-right count\" /></td>"+
				"<td><span class=\"necessary  pull-left col-sm-2\"></span><input  name=\"price\" type=\"text\" class=\"col-sm-10  no-padding-right price\" /></td>"+
				"<td><a class=\"cursor btn-edittransfer-delete\">删除</a></td>"+
				"</tr>";
				$obj.find(".addTransferCost").append(html);
				//表单验证
				rule.update(validator);

				//绑定删除分团转客信息
				$(".btn-edittransfer-delete").off().on("click",function(){
					var tr =$(this).parent().parent();
					var id = tr.attr("data-entity-id");
					inner.delTransferData(id,tr);
				});

				//其他费用数量
				$obj.find("input[name=count]").keyup(function(){
					inner.PayMoneyF();
				});
				//其他费用单价
				$obj.find("input[name=price]").keyup(function(){
					inner.PayMoneyF();
				});
				$(document).ready(function(){
					inner.PayMoneyF();
				})
				

			});

		},


		//付款账务--应付/现付/已付的计算
		PayMoneyF:function(){
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
		},


		//删除添加其他费用
		delTransferData:function(id,tr){
			if( id!=null && id!=""){
				$.ajax({
					url:""+APP_ROOT+"back/innerTransfer.do?method=deleteFee&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
						inner.PayMoneyF();
					}
				});	
			}else{
				//移除空的其他费用
				$(tr).remove();
				inner.PayMoneyF();
			}
		},



		//删除我部转出
		deleteTransferOut:function(id){
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
									url:""+APP_ROOT+"back/innerTransfer.do?method=delete&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
									type:"POST",
									data:"id="+id + "&isDelete=1",
									dataType:"json",
									beforeSend:function(){
										globalLoadingLayer = layer.open({
											type:3
										});
									},
									success:function(data){
										var result = showDialog(data);
										layer.close(globalLoadingLayer);
										inner.list(searchParam);
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
		},	


		//他部转入
		listTransferIn:function(searchParam){
			globalLoadingLayer = layer.open({
				zIndex:1028,
				type:3
			});
			if(searchParam.first=="1"){
				requestMain = true;
				requestTotal = true;
				searchParam.first = "2";
			}
			if(requestMain){
				//搜索头数据  
				$.ajax({  
					url:url("findListMain","view"),
					data:"",
					dataType:'json',
					success:function(data1){
						var result = showDialog(data1);
						//如果正确则就执行
						if(result){
							map.lineProduct = JSON.parse(data1.lineProduct);
							map.user = JSON.parse(data1.user);
							map.businessGroup = JSON.parse(data1.businessGroup);
							requestMain = false;
						}
					}
				});
			}
			//统计数据  
			if(requestTotal){
				$.ajax({  
					url:url("findTotal","view"),
					data:"searchParam="+encodeURIComponent(JSON.stringify(searchParam)),
					dataType:'json',
					success:function(data2){
						map.total = data2.total;
						requestTotal = false;
					}
				});
			}

			//分页结果集
			$.ajax({  
				url:url("findPager","view"),
				data:"searchParam="+encodeURIComponent(JSON.stringify(searchParam)),
				dataType:'json',
				success:function(data3){
					layer.close(globalLoadingLayer);
					map.resultList = JSON.parse(data3.resultList);
					map.searchParam = data3.searchParam;
					var html = listTransferInTemplate(map);
					$("#transferIn .transferIn-content").html(html);

					//时间控件
					inner.initTimePicker();

					//过滤搜索时间是否执行初始化操作
					if (searchParam.startTime!=null&&searchParam.endTime!=null) {
					} else{
						//时间默认一周初始化 
					    inner.initSinTimer();
					};
				


					function getVal (name){
					   var val = $("#" +tabId+" .transferIn-content").find("[name="+name+"]").val();
							return val;
					}

					function buildSearchParam(){
						searchParam.pageNo = getVal("pageNo");
						searchParam.totalPage = getVal("totalPage2");
						searchParam.type = 2;
						searchParam.lineProductId = getVal("lineProductId");
						searchParam.businessGroupId = getVal("businessGroupId");
						searchParam.creator = getVal("creator");
						searchParam.startTime = getVal("startTime");
						searchParam.endTime = getVal("endTime");
						searchParam.status = getVal("status");
						return searchParam;
					}

					//搜索事件
					$("#" +tabId+" .btn-transferIn-search").click(function(){
						searchParam = buildSearchParam();
						searchParam.pageNo = 0;
						requestTotal = true;

						inner.listTransferIn(searchParam=buildSearchParam());
				   });

				   inner.transferInfindPager(searchParam=buildSearchParam());

				}
		   })	    
		},

		transferInfindPager:function(searchParam){
				var $obj=$("#" +tabId+" .transferIn-content ");
			   //分页--首页按钮事件
				$obj.find(".pageMode a.first").click(function(){
					searchParam.pageNo = 0;
					inner.listTransferIn(searchParam);
				});
				//分页--上一页事件
				$obj.find(".pageMode a.previous").click(function(){
					var pageNo = parseInt(searchParam.pageNo);
					var previous = pageNo - 1;
					if(pageNo == 0){
						previous = 0;
					}
					searchParam.pageNo = previous;
					inner.listTransferIn(searchParam);
				});   
				//分页--下一页事件
				$obj.find(".pageMode a.next").click(function(){
					var pageNo = parseInt(searchParam.pageNo);
					var totalPage = parseInt(searchParam.totalPage);
					var next =  pageNo + 1;
					if(pageNo == totalPage-1){
						next = pageNo ;
					}
					searchParam.pageNo = next;
					inner.listTransferIn(searchParam);
				});
				//分页--尾页事件
				$obj.find(".pageMode a.last").click(function(){
					var totalPage = parseInt(searchParam.totalPage);
					var pageNo = 0;
					if(totalPage==0){
						pageNo = 0;
					}else{
						pageNo = totalPage - 1; 
					}
					searchParam.pageNo = pageNo;
					inner.listTransferIn(searchParam);
				});
				//查看
				$obj.find(".btn-transfer-view").click(function(){
					var id = $(this).attr("data-entity-id");
					inner.viewTransferOut(id);
				});


				//确认
				$obj.find(".btn-transfer-save").click(function(){
					var id = $(this).attr("data-entity-id");
					inner.saveTransferIn(id);
				});

				//拒绝
				$obj.find(".btn-transfer-refuse").click(function(){
					var id = $(this).attr("data-entity-id");
					inner.deleteTransferIn(id);
				});
			

				//分页--首页按钮事件
				$obj.find(".pageMode a.first").click(function(){
					searchParam.pageNo = 0;
					inner.listTransferIn(searchParam);
				});
				//分页--上一页事件
				$obj.find(".pageMode a.previous").click(function(){
					var pageNo = parseInt(searchParam.pageNo);
					var previous = pageNo - 1;
					if(pageNo == 0){
						previous = 0;
					}
					searchParam.pageNo = previous;
					inner.listTransferIn(searchParam);
				});   
				//分页--下一页事件
				$obj.find(".pageMode a.next").click(function(){
					var pageNo = parseInt(searchParam.pageNo);
					var totalPage = parseInt(searchParam.totalPage);
					var next =  pageNo + 1;
					if(pageNo == totalPage-1){
						next = pageNo ;
					}
					searchParam.pageNo = next;
					inner.listTransferIn(searchParam);
				});
				//分页--尾页事件
				$obj.find(".pageMode a.last").click(function(){
					var totalPage = parseInt(searchParam.totalPage);
					var pageNo = 0;
					if(totalPage==0){
						pageNo = 0;
					}else{
						pageNo = totalPage - 1; 
					}
					searchParam.pageNo = pageNo;
					inner.listTransferIn(searchParam);
				});
				
			

		},





		//确认操作
		saveTransferIn:function(id){
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
								url:""+APP_ROOT+"back/innerTransfer.do?method=save&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
								type:"POST",
								data:"id="+id + "&isDelete=1",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = layer.open({
										type:3
									});
								},
								success:function(data){
									var result = showDialog(data);
									layer.close(globalLoadingLayer);
									inner.listTransferIn(searchParam);
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
		},


		//拒绝操作
		deleteTransferIn:function(id){
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
								url:""+APP_ROOT+"back/innerTransfer.do?method=refuse&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
								type:"POST",
								data:"id="+id + "&isDelete=1",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = layer.open({
										type:3
									});
								},
								success:function(data){
									var result = showDialog(data);
									layer.close(globalLoadingLayer);
									inner.listTransferIn(searchParam);
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
		},
		save : function(saveType){
			console.log(saveType);
			if(saveType == "edit"){
				inner.saveEditTranIn(1);
			} 
		},
		clearEdit : function(clearType){
			inner.edited[clearType] = "";
		}		
	}
	
	exports.list = inner.list; 
	exports.isEdited = inner.isEdited; 
	exports.save = inner.save; 
	exports.clearEdit = inner.clearEdit; 
});