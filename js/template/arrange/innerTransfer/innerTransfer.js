define(function(require, exports) {
	//var rule = require("./rule"); 
	var menuKey = "arrange_inner_Transfer";
	listTemplate = require("./view/list"),
	listTransferInTemplate=require("./view/listTransferIn");
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
			first : "",
		}
	//分页查询的返回结果
	var map = {
			searchParam : "",
			resultList : "",
			total : "",
			lineProduct : "",
			user : "",
			businessGroup : "",
	};

	function url(method,operation){
		return ""+APP_ROOT+"back/innerTransfer.do?&method="+method+"&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation="+operation;
	};

	var inner = {
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
						map.resultList = JSON.parse(data3.resultList);
						map.searchParam = data3.searchParam;
						var html = listTemplate(map);
						addTab(menuKey,"内转管理",html);

						//时间控件
						inner.initTimePicker();

						//内部转出分页 
						inner.transferOutfindPager(searchParam);	
					
						function getVal (name){
							var val = $("#" +tabId+" .innerTransfer_list").find("[name="+name+"]").val();
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
						
						//搜索事件
						$("#" +tabId+" .innerTransfer_list .btn-transferOut-search").click(function(){
							searchParam = buildSearchParam();
							searchParam.pageNo = 0;
							requestTotal = true;
							inner.list(searchParam);
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
				})
				
				
			},

		   //时间初始化控件 
		   initTimePicker:function(){
			   	$(".innerTransfer_list input[name=startTime]").datetimepicker({
					autoclose: true,
					todayHighlight: true,
					format: 'L',
					language: 'zh-CN'
				});

				$(".innerTransfer_list input[name=endTime]").datetimepicker({
					autoclose: true,
					todayHighlight: true,
					format: 'L',
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

					var classType = map.searchParam.type;
				     $("#" +tabId+" .innerTransfer_list").find("[name=type]").val(classType);
					function getVal (name){
							var val = $("#" +tabId+" .innerTransfer_list").find("[name="+name+"]").val();
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
						$("#" +tabId+" .innerTransfer_list .pageMode a.first").click(function(){
							searchParam = buildSearchParam();
							searchParam.pageNo = 0;
							inner.list(searchParam);
						});
						//分页--上一页事件
						$("#" +tabId+" .innerTransfer_list .pageMode a.previous").click(function(){
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
						$("#" +tabId+" .innerTransfer_list .pageMode a.next").click(function(){
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
						$("#" +tabId+" .innerTransfer_list .pageMode a.last").click(function(){
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
						$("#" +tabId+" .innerTransfer_list .btn-TransferOut-view").click(function(){
							var id = $(this).attr("data-entity-id");
							inner.view(id);
						});
						//编辑
						$("#" +tabId+" .innerTransfer_list .btn-TransferOut-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							inner.edit(id);
						});
						//撤销
						$("#" +tabId+" .innerTransfer_list .btn-TransferOut-delete").click(function(){
							var id = $(this).attr("data-entity-id");
							inner.deleteTransferOut(id);
						});
						
						//提交修改数据
						$("#" +tabId+" .innerTransfer_list .123").click(function(){
							
						});
						//提交确认数据
						$("#" +tabId+" .innerTransfer_list .123").click(function(){
							
				});

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
						map.resultList = JSON.parse(data3.resultList);
						map.searchParam = data3.searchParam;
						var html = listTransferInTemplate(map);
						$("#transferIn .transferIn-content").html(html);

						//时间控件
						inner.initTimePicker();


						function getVal (name){
						   var val = $("#" +tabId+" .transferIn-content").find("[name="+name+"]").val();
								return val;
						}

						function buildSearchParam(){
							searchParam.pageNo = getVal("pageNo");
							searchParam.totalPage = getVal("totalPage");
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
					var classType = map.searchParam.type;
				     $("#" +tabId+" .innerTransfer_list").find("[name=type]").val(classType);
					function getVal (name){
							var val = $("#" +tabId+" .innerTransfer_list").find("[name="+name+"]").val();
							return val;
					}
					function buildSearchParam(){
							searchParam.pageNo = getVal("pageNo");
							searchParam.totalPage = getVal("totalPage");
							searchParam.type = 2;
							searchParam.lineProductId = getVal("lineProductId");
							searchParam.businessGroupId = getVal("businessGroupId");
							searchParam.creator = getVal("creator");
							searchParam.startTime = getVal("startTime");
							searchParam.endTime = getVal("endTime");
							searchParam.status = getVal("status");
							return searchParam;
					 }

					//分页--首页按钮事件
						$("#" +tabId+" .transferIn-content .pageMode a.first").click(function(){
							searchParam = buildSearchParam();
							searchParam.pageNo = 0;
							inner.listTransferIn(searchParam);
						});
						//分页--上一页事件
						$("#" +tabId+" .transferIn-content .pageMode a.previous").click(function(){
							searchParam = buildSearchParam();
							var pageNo = parseInt(searchParam.pageNo);
							var previous = pageNo - 1;
							if(pageNo == 0){
								previous = 0;
							}
							searchParam.pageNo = previous;
							inner.listTransferIn(searchParam);
						});   
						//分页--下一页事件
						$("#" +tabId+" .transferIn-content .pageMode a.next").click(function(){
							searchParam = buildSearchParam();
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
						$("#" +tabId+" .transferIn-content .pageMode a.last").click(function(){
							searchParam = buildSearchParam();
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
						$("#" +tabId+" .transferIn-content .btn-transfer-view").click(function(){
							var id = $(this).attr("data-entity-id");
							inner.view(id);
						});
						//编辑
						$("#" +tabId+" .transferIn-content .btn-transfer-edit").click(function(){
							var id = $(this).attr("data-entity-id");
							inner.edit(id);
						});
					
						//确认
						$("#" +tabId+" .transferIn-content .btn-transfer-save").click(function(){
							var id = $(this).attr("data-entity-id");
							inner.saveTransferIn(id);
						});
						//拒绝
						$("#" +tabId+" .transferIn-content .btn-transfer-refuse").click(function(){
							var id = $(this).attr("data-entity-id");
							inner.deleteTransferIn(id);
							
						});
						//提交修改数据
						$("#" +tabId+" .transferIn-content .123").click(function(){
							
						});
						//提交确认数据
						$("#" +tabId+" .transferIn-content .123").click(function(){
							
				});

			},



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





	    view:function(id){
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

			edit:function(id){
				$.ajax({  
					url:url("edit","edit"),
					data:"id="+id,
					dataType:'json',
					before:function(){
						globalLoadingLayer = layer.open();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						data.innerTransfer = JSON.parse(data.innerTransfer);
						data.businessGroup = JSON.parse(data.businessGroup);
						var html = editTemplate(data);
						addTab(menuKey+"-edit","修改内转信息",html);
						
						//新增其他费用按钮
						$(".inner-edit-fee").find("button[name=addOhterFeeBtn]").click(function(){
							var addTr = "<tr><td>其他费用</td><td><input type='text' name='discribe' value='' /></td><td><input type='text' name='count' value='' /></td><td><input type='text' name='price' value='' /></td><td><label nam='deleteLable'>删除</label></td></tr>"
							$(".inner-edit-fee").find("tr[name=addDiv]").after(addTr);
						});
					}
				});
			},
			
	}
	
	exports.list=inner.list; 
});