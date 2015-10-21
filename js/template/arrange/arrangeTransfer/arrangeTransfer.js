define(function(require, exports) {
	var rule = require("./rule"); 
	var menuKey = "arrange_transfer",
	listMainTemplate = require("./view/listMain"),
	listTemplate = require("./view/list"),
	listTransInTemplate = require("./view/listTransIn"),
	viewTransferInTemplate=require("./view/viewTransformIn"),
	editTransferInTemplate=require("./view/editTransformIn"),
	searchLineProTransferInTemplate=require("./view/searchLineProIn"),
	viewTemplate=require("./view/viewTransform"),
	updateTemplate=require("./view/updateTransfer"),
	tabId = "tab-" + menuKey + "-content",
	checkTable="arrange_transfer-updateTransfer";   
	var transfer = {
		//我社转出搜索字段
		searData:{
			partnerAgencyId : "",
			creator : "",
			startTime : "",
			endTime : "",
			status : "",
			type : "",
			page : ""
		},
		//同行转入的搜索字段
		searchInData:{
			lineProductId : "",
			startTime : "",
			partnerAgencyId : "",//同行地接
			contactUserId : "",
			status : "",
			page : ""
		},
		//导出参数 
		exportParam:{
			creator:"",
			status:"",
			partnerAgencyId:"",
			startTime:"",
			endTime:""	
		},
		edited : {},
		isEdited : function(editedType){
			if(!!transfer.edited[editedType] && transfer.edited[editedType] != ""){
				return true;
			}
			return false;
		},	
		//下拉数据  
		getlistTransferSumData : function(page,partnerAgencyId,contactUserId,creator,startTime,endTime,status,type){
			var pager = {
				"eqMap":{
					"transferPartnerAgencyId":partnerAgencyId,
					"touristGroupId":contactUserId,
					"creator":creator,
					"status":status
				},
				"gtMap":{"createTime":startTime},
				"ltMap":{"createTime":endTime},
			};
			pager = JSON.stringify(pager);

			var map = {
				totalPayed : "",
				totalNeedPay : "",
				totalAdultCount:"",
				totalChildCount:"",
				touristGroup1:"",
				pager : "",
				partnerAgency:"",
				lineProduct1:"",
				user1:"",
				touristGroup2 : "",
				lineProduct2 :"",
				user2 :"",
				lineProduct2 :"",
			};

			//查询统计数据
			$.ajax({  
				url:""+APP_ROOT+"back/transfer.do?method=findTotal&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"pager="+encodeURIComponent(pager)+"&type="+type+"&partnerAgencyId="+partnerAgencyId+"&creator="+creator+"&status="+status+"&endTime="+endTime+"&startTime="+startTime,
				dataType:'json',
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						zIndex:1028,
						type:3
					});
				},
				success:function(data){
					map.totalNeedPay = data.totalNeedPay;
					map.totalPayed = data.totalPayed;   
				    map.totalAdultCount = data.totalAdultCount;
					map.totalChildCount = data.totalChildCount;
			    }
		   });


			
			//查询所有下拉菜单数据
			$.ajax({  
				url:""+APP_ROOT+"back/transfer.do?method=findListInfo&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"pager="+encodeURIComponent(pager)+"&type="+type,
				dataType:'json',
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						zIndex:1028,
						type:3
					});
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					map.touristGroup1 = JSON.parse(data.touristGroup1);
					map.pager = JSON.parse(data.pager);
					map.partnerAgency = JSON.parse(data.partnerAgency);
					map.lineProduct1=JSON.parse(data.lineProduct1);   
					map.user1 = JSON.parse(data.user1);

					map.touristGroup2 = JSON.parse(data.touristGroup2);
					map.lineProduct2=JSON.parse(data.lineProduct2);   
					map.user2 = JSON.parse(data.user2);
					
					var html = listMainTemplate(map);
					addTab(menuKey,"转客管理",html);
					var $transferOut=$("#transferOut");   
					//调用默认时间是一周的函数
					var startTime=data.startDay;
					var endTime = transfer.dateCalculation(startTime,6);
					$transferOut.find("input[name=createTime]").eq(1).val(endTime);

					$("#" +tabId+" .transferTouristMain .date-picker").datepicker({
						autoclose: true,
						todayHighlight: true,
						format: 'yyyy-mm-dd',
						language: 'zh-CN'
					});
					
					var $transferTourObj=$(".transferTouristMain");
					var $transferIn=$("#transferIn");
					//同行转入选项卡绑定事件
					$("#"+tabId+" #myTab li a.transferIn").click(function(){
						var type=$(this).attr("data-value");//1	
						var startTime=data.startDay;
						//调用默认时间是一周的函数
						var endTime = transfer.dateCalculation(startTime,6);
						$transferIn.find("input[name=endTime]").val(endTime);
						
						transfer.listTransferIn(page,partnerAgencyId,startTime,partnerAgencyId,contactUserId,status,type);

					});
					transfer.getLineProductList($("#" +tabId+" .chooseLineProductId"),"");
					transfer.getPartnerAgencyList($("#" +tabId+" .choosePartnerAgency"),"");
					//我社转出选项卡绑定事件
					$("#"+tabId+" #myTab li a.transferOut").click(function(){
						var type=$(this).attr("data-value");//2
						var startTime=data.startDay;
						//调用默认时间是一周的函数
						var endTime = transfer.dateCalculation(startTime,6);
						$transferOut.find("input[name=createTime]").eq(1).val(endTime);
						transfer.listTransfer(page,partnerAgencyId,creator,startTime,endTime,status,type);
					});
					//我社转出搜索栏状态button下拉事件
					$("#transferIn .search-area .btn-status .dropdown-menu a").click(function(){
						$(this).parent().parent().parent().find("button").attr("data-value",$(this).attr("data-value"));
						$(this).parent().parent().parent().find("span").text($(this).text());
						var startTime = $transferOut.find("input[name=createTime]").eq(0).val();
					    var endTime = transfer.dateCalculation(startTime,6);
						transfer.searchInData = {
							//搜索字段
							partnerAgencyId : $transferIn.find("input[name=transferPartnerAgencyId]").val(),
							creator : $transferIn.find("select[name=creator]").val(),
							startTime :$transferIn.find("input[name=createTime]").eq(0).val(),
							endTime : $transferIn.find("input[name=createTime]").eq(1).val(),
							status : $transferIn.find(".btn-status button").attr("data-value"),
							type : $("#" +tabId+" #myTab li.active a").attr("data-value"),
							page:$("#" +tabId+" #pagerH").val()
						}
						transfer.listTransfer(transfer.searchInData.page,transfer.searchInData.partnerAgencyId,transfer.searchInData.creator,transfer.searchInData.startTime,transfer.searchInData.endTime,transfer.searchInData.status,transfer.searchInData.type);
					});
					//同行转入搜索条件按钮绑定事件
					$transferIn.find(".btn-transferIn-search").click(function(){
						transfer.searchInData = {
							//搜索字段
							lineProductId : $transferIn.find("input[name=lineProductId]").val(),
							startTime : $transferIn.find("input[name=createTime]").val(),
							partnerAgencyId : $transferIn.find("input[name=transferPartnerAgencyId]").val(),
							creator : $transferIn.find("select[name=creator]").val(),
							status : $transferIn.find(".btn-status button").attr("data-value"),
							type : $("#myTab li a.transferIn").attr("data-value")			
						}
						//刷新人数合计、应付款合计和已付款合计
						transfer.listTransferIn(page,transfer.searchInData.lineProductId,transfer.searchInData.startTime,transfer.searchInData.partnerAgencyId,transfer.searchInData.creator,transfer.searchInData.status,transfer.searchInData.type);
					});

					//给我社转出搜索按钮绑定事件
					$transferOut.find(".btn-transferOut-search").click(function(){
						transfer.searData = {
							//搜索字段
							partnerAgencyId : $transferOut.find("input[name=transferPartnerAgencyId]").val(),
							creator : $transferOut.find("select[name=creator]").val(),
							startTime :$transferOut.find("input[name=createTime]").eq(0).val(),
							endTime : $transferOut.find("input[name=createTime]").eq(1).val(),
							status : $transferOut.find(".btn-status button").attr("data-value"),
							type : $("#" +tabId+" #myTab li.active a").attr("data-value"),
							page:$("#" +tabId+" #pagerH").val()
						}
						//刷新人数合计、应付款合计和已付款合计
						transfer.listTransfer(page,transfer.searData.partnerAgencyId,transfer.searData.creator,transfer.searData.startTime,transfer.searData.endTime,transfer.searData.status,transfer.searData.type);
					});				 
					transfer.listTransfer(page,partnerAgencyId,creator,startTime,endTime,status,type);
				}
			});
		},
		//默认时间是一周的计算
		dateCalculation:function(dt, days){
			dt = dt.split('-').join('/');//js不认2000-1-31,只认2000/1/31 
			var t1 = new Date(new Date(dt).valueOf() + days*24*60*60*1000);// 日期加上指定的天数 
			return t1.getFullYear() + "-" + (t1.getMonth()+1) + "-" + t1.getDate();
		}, 
		//同行转入参数
		listTransferIn:function(page,lineProductId,startTime,partnerAgencyId,creator,status,type){
			var $transferIn=$("#transferIn");
			var endTime = $transferIn.find("input[name=endTime]").val();
			var pager = {  
				"pageNo":page,
			};
			pager = JSON.stringify(pager);


			//查询统计数据
			$.ajax({  
				url:""+APP_ROOT+"back/transfer.do?method=findTotal&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"pager="+encodeURIComponent(pager)+"&type="+type+"&fromTravelAgencyId="+partnerAgencyId+"&creator="+creator+"&status="+status+"&endTime="+endTime+"&startTime="+startTime+"&lineProductId="+lineProductId,
				dataType:'json',
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						zIndex:1028,
						type:3
					});
				},
				success:function(data){
					var $transferInObj=$("#transferIn-Header-Cost");
					$transferInObj.find(".totalAdultCount").text(data.totalAdultCount);
					$transferInObj.find(".totalChildCount").text(data.totalChildCount);
					$transferInObj.find(".totalNeedPay").text(data.totalNeedPay);  
					$transferInObj.find(".totalPayed").text(data.totalPayed);
			    }
		   });


			$.ajax({
				url:""+APP_ROOT+"back/transfer.do?method=findPager&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"pager="+encodeURIComponent(pager)+"&type="+type+"&fromTravelAgencyId="+partnerAgencyId+"&creator="+creator+"&status="+status+"&endTime="+endTime+"&startTime="+startTime+"&lineProductId="+lineProductId,
				dataType:'json',
				type:"POST",
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						zIndex:1028,
						type:3
					});
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					data.pager = JSON.parse(data.pager);
					var html=listTransInTemplate(data);
					
					/*$transferInObj=$("#transferIn");    
					$transferInObj.find(".totalAdultCount").text(data.totalAdultCount);
					$transferInObj.find(".totalChildCount").text(data.totalChildCount);
					$transferInObj.find(".totalNeedPay").text(data.totalNeedPay);  
					$transferInObj.find(".totalPayed").text(data.totalPayed);  */
					
					//绑定数据模板
					$(".transferTouristMain .transferInList").html(html);
					//绑定查看分转客信息
					var $transferInObj=$("#transferIn");
					$transferInObj.find(".btn-transferIn-view").click(transfer.viewTransferIn);
					//绑定编辑分转客信息
					$transferInObj.find(".btn-transferIn-edit").click(transfer.editTransferIn);
		
					//绑定同行收入删除事件
					$transferInObj.find(".btn-transferIn-delete").click(transfer.deleteTransferIn);
					//绑定同行收入接受事件  
					//$transferInObj.find(".btn-transferIn-accept").click(transfer.acceptTransferIn);
					
					//分页--首页按钮事件
					$("#" +tabId+" .pageMode a.first").click(function(){
						transfer.listTransferIn(0,lineProductId,startTime,partnerAgencyId,creator,status,type);
					});
					
					//分页--上一页事件
					$("#" +tabId+"  .pageMode a.previous").click(function(){
						var previous = data.pager.pageNo - 1;
						if(data.pager.pageNo == 0){
							previous = 0;
						}
						transfer.listTransferIn(previous,lineProductId,startTime,partnerAgencyId,creator,status,type);
					});   
					
					//分页--下一页事件
					$("#" +tabId+" .pageMode a.next").click(function(){
						
						var next =  data.pager.pageNo + 1;
						if(data.pager.pageNo == data.pager.totalPage-1){
							next = data.pager.pageNo ;
						}
						transfer.listTransferIn(next,lineProductId,startTime,partnerAgencyId,creator,status,type);
					});
					
					//分页--尾页事件
					$("#" +tabId+"  .pageMode a.last").click(function(){
						transfer.listTransferIn(data.pager.totalPage== 0 ? data.pager.totalPage : data.pager.totalPage-1,lineProductId,startTime,partnerAgencyId,creator,status,type);
					});
				}
			});
		},
		//拒绝同行转入
		deleteTransferIn:function(){  
			var id = $(this).attr("data-entity-id"),
			statusVlue=$(this).parent().parent().parent().find("span").attr("data-status");
			if (statusVlue==2) {
				showMessageDialog($( "#confirm-dialog-message" ),"您已拒绝接收！");
				return ;
				
			} else {
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
								url:""+APP_ROOT+"back/transfer.do?method=refuse&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
									transfer.listTransferIn(0,"","","","","",1);										}
							});
							$( this ).dialog( "close" );
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("是否拒收？");
				}
			});
		  }
		},
		//条件的分页查询
		listTransfer:function(page,partnerAgencyId,creator,startTime,endTime,status,type){
			var pager = {
					"pageNo":page,
			};
			pager = JSON.stringify(pager);
			$.ajax({
				url:""+APP_ROOT+"back/transfer.do?method=findPager&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"pager="+encodeURIComponent(pager)+"&type="+type+"&partnerAgencyId="+partnerAgencyId+"&creator="+creator+"&status="+status+"&endTime="+endTime+"&startTime="+startTime,
				dataType:'json',
				type:"POST",
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						zIndex:1028,
						type:3
					});
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					data.pager = JSON.parse(data.pager);
					$transferOutObj=$("#transferOut");    
					$transferOutObj.find(".totalAdultCount").text(data.totalAdultCount);
					$transferOutObj.find(".totalChildCount").text(data.totalChildCount);
					$transferOutObj.find(".totalNeedPay").text(data.totalNeedPay);
					$transferOutObj.find(".totalPayed").text(data.totalPayed);
					
					if(type==2){
						//我社转出模板数据
						var html = listTemplate(data);	
						
						$("#" +tabId+" .transferTouristMain .transferList").html(html);
						//绑定查看分转客信息
						$("#transferOut .btn-transfer-view").click(transfer.viewTransfer);
						//绑定删除分团转客信息
						$("#transferOut .btn-transfer-delete").click(transfer.deleteTransfer);
						//绑定编辑分团转客信息
						$("#transferOut .btn-transfer-edit").click(transfer.updateTransfer);
						//导出分团转客信息
						$("#transferOut .btn-transfer-export").unbind().click(transfer.exportTransfer);
						//分页--首页按钮事件
						$("#" +tabId+" .pageMode a.first").click(function(){
							transfer.listTransfer(0,partnerAgencyId,creator,startTime,endTime,status,type);
						});
						
						//分页--上一页事件
						$("#" +tabId+"  .pageMode a.previous").click(function(){
							var previous = data.pager.pageNo - 1;
							if(data.pager.pageNo == 0){
								previous = 0;
							}
							transfer.listTransfer(previous,partnerAgencyId,creator,startTime,endTime,status,type);
						});            
						//分页--下一页事件
						$("#" +tabId+" .pageMode a.next").click(function(){
							
							var next =  data.pager.pageNo + 1;
							if(data.pager.pageNo == data.pager.totalPage-1){
								next = data.pager.pageNo ;
							}
							transfer.listTransfer(next,partnerAgencyId,creator,startTime,endTime,status,type);
						});
						
						//分页--尾页事件
						$("#" +tabId+"  .pageMode a.last").click(function(){
							transfer.listTransfer(data.pager.totalPage== 0 ? data.pager.totalPage : data.pager.totalPage-1,partnerAgencyId,creator,startTime,endTime,status,type);
						});	
						
					}else{
						//同行转入模板数据
						var html=listTransInTemplate(data);
					}
				}		
			});	
		},		
		//导出分团转客信息
		exportTransfer:function(){
			var $transferOut=$("#transferOut");  
			var type =$("#" +tabId+" #myTab li.active a").attr("data-value");
			
			//导出参数  
			exportParam = {	
					creator : $transferOut.find("select[name=creator]").val(),
					status : $transferOut.find("select[name=status]").val(),
					partnerAgencyId : $transferOut.find("input[name=transferPartnerAgencyId]").val(),
					startTime :$transferOut.find("input[name=createTime]").eq(0).val(),
					endTime : $transferOut.find("input[name=createTime]").eq(1).val(),
			}
			exportParam = JSON.stringify(exportParam);
			var url = ""+APP_ROOT+"back/transfer.do?method=findExcel&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&exportParam="+exportParam;
			window.open(url);
		},	
		//查看我社转出分团转客信息	
		viewTransfer:function(){
			var id = $(this).attr("data-entity-id");
			$.ajax({
				url:""+APP_ROOT+"back/transfer.do?method=findMember&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = layer.open({
						type:3
					});
				},
				success:function(data){	
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.lineProduct = JSON.parse(data.lineProduct);
						data.touristGroup =JSON.parse(data.touristGroup);
						data.partnerAgency=JSON.parse(data.partnerAgency);
						var html = viewTemplate(data);
						addTab(menuKey+"-viewTransfer","查看我社转出",html);
					}
				}
			});
		},
		//查看同行转入信息
		viewTransferIn:function(){
			var id=$(this).attr("data-entity-id");
			$.ajax({
				url:""+APP_ROOT+"back/transfer.do?method=findMember&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"id="+id+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.lineProduct = JSON.parse(data.lineProduct);
						data.touristGroup =JSON.parse(data.touristGroup);
						data.partnerAgency=JSON.parse(data.partnerAgency);
						var html = viewTransferInTemplate(data);
						addTab(menuKey+"-viewTransferIn","查看同行转入",html);
					}
				}
			});	
		},
		//编辑同行转入
		editTransferIn:function(){	
			var editTransferInTemplateLayer;
			var id = $(this).attr("data-entity-id");
			$.ajax({
				url:""+APP_ROOT+"back/transfer.do?method=edit&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"id="+id+"", 
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
						data.touristGroupTransfer = JSON.parse(data.touristGroupTransfer);	
						var html = editTransferInTemplate(data);
						var editTransferInTemplateLayer = layer.open({
							type: 1,
							title:"编辑同行转入信息",
							skin: 'layui-layer-rim', //加上边框
							area: ['45%', '55%'], //宽高
							zIndex:1028,
							content: html,
							success:function(){
								
							}
						});
						//线路产品查询列表
						$(".btn-searchLineProtransferIn-search").click(function(){
							searchLineProList(true,0,"");	
						});
						
						//线路产品保存操作 
						$(".btn-editLineProInfo").click(function(){
							var lineProductId=$(".editTransferIn input[name=lineProductId]").val();
							var tourGroupTransferId=$(".editTransferIn input[name=tourGroupTransferId]").val();
							var lineProductIdName=$(".editTransferIn input[name=lineProductIdName]").val();

							
							if (lineProductIdName==null||lineProductIdName=="") {
								showMessageDialog($( "#confirm-dialog-message" ),"请选择线路产品！");
								return ;	
							}else{
								$.ajax({
									url:""+APP_ROOT+"back/transfer.do?method=saveLine&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
									data:"lineProductId="+lineProductId+"&tourGroupTransferId="+tourGroupTransferId,
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
											layer.close(editTransferInTemplateLayer);
											showMessageDialog($( "#confirm-dialog-message" ),data.message);
											transfer.listTransferIn(0,"","","","","",1);
										}
									}
								});
							}
						})
						//关闭Layer
						$(".btn-canceleditTransfer").click(function(){
							layer.close(editTransferInTemplateLayer);
						});
						//调用线路产品查询列表layer层
						var searchLineProTransferInlayer;
						function searchLineProList(init,page,name){
							$.ajax({
								url:""+APP_ROOT+"back/lineProduct.do?method=findAll&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view&sortType=auto",
								data:"pageNo="+page+"&name="+name,
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = layer.open({
										type:3
									});
								},
								success: function(data) {
									layer.close(globalLoadingLayer);
									var result =showDialog(data);
									var dataD = data;
									if(result){
										var lineProductInfo = JSON.parse(data.lineProductList);
										data.lineProductList = lineProductInfo;								
										
										if(lineProductInfo != null && lineProductInfo.length > 0){
											for(var i=0;i<lineProductInfo.length;i++){
												lineProductInfo[i].value = lineProductInfo[i].name;
											}
										}
										var html =searchLineProTransferInTemplate(data);
										if(init){
											searchLineProTransferInlayer =layer.open({
												type: 1,
												title:"选择路线",
												skin: 'layui-layer-rim', //加上边框
												area: ['85%', '80%'], //宽高
												zIndex:1029,
												content: html,
												success: function(data) {
												}
											});
										}
										else{
											$("#layui-layer"+searchLineProTransferInlayer+"").find(".layui-layer-content").html(html);
										}
										//搜索按钮事件
										$("#chooseLineProductId .btn-lineProduct-search").click(function(){
											var name = $("#chooseLineProductId input[name=lineProduct_name]").val();
											searchLineProList(false,0,name);
										});
										
										//分页--首页按钮事件
										$("#chooseLineProductId .pageMode a.first").click(function(){
											var name = $("#chooseLineProductId input[name=lineProduct_name]").val();
											searchLineProList(false,0,name);
										});
										//分页--上一页事件
										$("#chooseLineProductId .pageMode a.previous").click(function(){
											var name = $("#chooseLineProductId input[name=lineProduct_name]").val();
											var previous = dataD.pageNo - 1;
											if(data.pageNo == 0){
												previous = 0;
											}
											searchLineProList(false,previous,name);
										});
										//分页--下一页事件
										$("#chooseLineProductId .pageMode a.next").click(function(){
											var name = $("#chooseLineProductId input[name=lineProduct_name]").val();
											var next =  dataD.pageNo + 1;
											if(dataD.pageNo == dataD.totalPage-1){
												next = dataD.pageNo ;
											}
											searchLineProList(false,next,name);
										});
										//分页--尾页事件
										$("#chooseLineProductId .pageMode a.last").click(function(){
											var name = $("#chooseLineProductId input[name=lineProduct_name]").val();
											if(dataD.totalPage < 1){return;}
											searchLineProList(false,dataD.totalPage-1,name);
										});
										
										//选择线路产品/提交事件绑定
										var travelLineName="";
										var travelLineId="";
										$(".btn-submit-searchtravelLine").click(function(){
											var trSearchtravelLine =$(".search-travelLineList-table tbody tr");
											for(var i=0;i<trSearchtravelLine.length;i++){
							
												if(trSearchtravelLine.eq(i).find("input[name=choice-TravelLine]").is(":checked")==true){
													travelLineName =trSearchtravelLine.eq(i).find("td[name=travelLine-select]").text();
													travelLineId =trSearchtravelLine.eq(i).find("td[name=travelLine-select]").attr("data-travelLine-Id");
													layer.close(searchLineProTransferInlayer);
												}
												else{
												}
											}
											$(".editTransferIn input[name=lineProductNameId]").val(travelLineName);
											$(".editTransferIn input[name=lineProductId]").val(travelLineId);
											$(".editTransferIn input[name=lineProductIdName]").val(travelLineName);
										});
									}
								}
							})	
						}
					}	
				}
			})	
		},
		//删除分团转客信息	
		deleteTransfer:function(){
			var id = $(this).attr("data-entity-id");
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
							$.ajax({
								url:""+APP_ROOT+"back/transfer.do?method=delete&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
								type:"POST",
								data:"id="+id + "&isDelete=0",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = layer.open({
										type:3
									});
								},
								success:function(data){
									 layer.close(globalLoadingLayer);
								}
							});
							$( this ).dialog( "close" );
						}
					},
					{
						text: "是",
						"class" : "btn btn-primary btn-minier",
						click: function() {
		
								$.ajax({
									url:""+APP_ROOT+"back/transfer.do?method=delete&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
										transfer.listTransfer(0,transfer.searData.partnerAgencyId,"",transfer.searData.startTime,transfer.searData.endTime,transfer.searData.status,2);
									 }
								});
							$( this ).dialog( "close" );
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("是否撤销转客操作？");
				}
			});
		},	
	   //编辑分团转客信息	
		updateTransfer:function(){
			var id = $(this).attr("data-entity-id");
			$.ajax({
				url:""+APP_ROOT+"back/transfer.do?method=edit&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
				data:"id="+id+"", 
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
						data.touristGroupTransfer=JSON.parse(data.touristGroupTransfer);
						var html = updateTemplate(data);
						// 设置表单验证
						var validator;
						if($(".tab-"+menuKey+"-updateTransfer").length > 0) {
							addTab(menuKey+"-updateTransfer","编辑我社转出");
							if(!!transfer.edited["updateTransfer"] && transfer.edited["updateTransfer"] != ""){
								showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
									var $obj=$("#tab-arrange_transfer-updateTransfer-content .updateTransfer");
									 validator = rule.transferCheckor($obj);
									 if (!validator.form()) { 
										 return; 
									 }
									 transfer.saveTransfer($obj,0);
									 transfer.edited["updateTransfer"] = "";
									 addTab(menuKey+"-updateTransfer","编辑我社转出",html);	
									 transfer.initUpdateTransfer(data,validator); 
									 validator = rule.transferCheckor($obj);
								},function(){
									var $obj=$("#tab-arrange_transfer-updateTransfer-content .updateTransfer");
									addTab(menuKey+"-updateTransfer","编辑我社转出",html);
									transfer.initUpdateTransfer(data,validator); 
									validator = rule.transferCheckor($obj);									
									transfer.edited["updateTransfer"] = "";
								}); 							
							 }else{
								var $obj=$("#tab-arrange_transfer-updateTransfer-content .updateTransfer");
								addTab(menuKey+"-updateTransfer","编辑我社转出",html);				
								validator = rule.transferCheckor($obj);
								transfer.initUpdateTransfer(data,validator);
							 } 
						}else{
							var $obj=$("#tab-arrange_transfer-updateTransfer-content .updateTransfer");
							addTab(menuKey+"-updateTransfer","编辑我社转出",html);				
							validator = rule.transferCheckor($obj);
							transfer.initUpdateTransfer(data,validator);
						}	
					}
				}
			});
		},
		/* updateTransferTemp:function(html){
			var $obj=$("#tab-arrange_transfer-updateTransfer-content .updateTransfer");
			//已修改提示
			var validator = rule.transferCheckor($obj);  
			if($(".tab-"+menuKey+"-update").length > 0) {
				if(!!transfer.edited["updateTransfer"] && transfer.edited["updateTransfer"] != ""){
					showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
						 validator = rule.transferCheckor($obj);
						 if (!validator.form()) { 
							 return; 
						 }
						 transfer.saveTransfer();
						 transfer.edited["updateTransfer"] = "";
						 addTab(menuKey+"-updateTransfer","编辑我社转出",html);	
						 transfer.initUpdateTransfer($obj,validator); 
						 validator = rule.transferCheckor($obj);
					},function(){
						addTab(menuKey+"-updateTransfer","编辑我社转出",html);
						transfer.initUpdateTransfer($obj,validator); 
						validator = rule.transferCheckor($obj);									
						transfer.edited["updateTransfer"] = "";
					}); 							
				 }else{
					addTab(menuKey+"-updateTransfer","编辑我社转出",html);				
					validator = rule.transferCheckor($obj);
				 } 
			}else{
				addTab(menuKey+"-updateTransfer","编辑我社转出",html);				
				validator = rule.transferCheckor($obj);
			}	
			//转客事件绑定  
			transfer.initUpdateTransfer($obj,validator);  
			transfer.PayMoneyF();	
		}, */
		initUpdateTransfer:function(data,validator){
			var $obj=$("#tab-arrange_transfer-updateTransfer-content .updateTransfer");
			$obj.on("change",function(){
				transfer.edited["updateTransfer"] = "updateTransfer";
			});
			//查询所有同行地接
			transfer.getPartnerAgencyList($obj.find(".choosePartnerAgency"),data.touristGroupTransfer.partnerAgency.id);
			//获取转态  
			var statusVal=$obj.find("input[name=status]").val();
			transfer.isEditStatus($obj,statusVal);
			//给新增费用绑定事件
			$obj.find(".btn-transfer-addCost").click(function(){
				var html="<tr class=\"transferFee1SelectId\">"+
				"<td><span name=\"type\" value=\"0\">其他费用</span></td>"+
				"<td><input  name=\"discribe\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
				"<td><input  name=\"count\" type=\"text\" maxlength=\"5\" class=\"col-sm-12  no-padding-right count\" /></td>"+
				"<td><input  name=\"otherPrice\" type=\"text\" maxlength=\"11\" class=\"col-sm-12  no-padding-right price\" /></td>"+
				"<td><a class=\"cursor btn-edittransfer-delete\">删除</a></td>"+
				"</tr>";
				$obj.find(".addTransferCost").append(html);
				
				// 更新表单验证的事件绑定
				validator = rule.update(validator);   
				
				//绑定删除分团转客信息
				$(".btn-edittransfer-delete").off().on("click",function(){
					var tr =$(this).parent().parent();
					var id = tr.attr("data-entity-id");
					transfer.delTransferData(id,tr);
				});
				//其他费用数量
				$obj.find("input[name=count]").keyup(function(){
					transfer.PayMoneyF();
				});
				//其他费用单价
				$obj.find("input[name=otherPrice]").keyup(function(){
					transfer.PayMoneyF();
				});
				$(document).ready(function(){
					transfer.PayMoneyF();
				})
				//新增其他费用选项
				$obj.find(".addOrOtherSelect").change(function(){
					transfer.PayMoneyF();
				})
			});
			//成人数量
			$obj.find("input[name=transChildPrice]").keyup(function(){
				transfer.PayMoneyF();	
			});
			
			//成人单价
			$obj.find("input[name=transAdultPrice]").keyup(function(){
				transfer.PayMoneyF();
			});
			//绑定修改分团转客信息
			$obj.find(".btn-saveTransoutInfo").click(function(){
				// 表单校验
				if (!validator.form()) { return; }
				transfer.saveTransfer($obj,1);  
			});
			
			//删除有费用的id记录
			$obj.find(".btn-edittransferId-delete").click(function(){
				var tr =$(this).parent().parent();
				var id = tr.attr("data-entity-id");
				transfer.delTransferData(id,tr);
				transfer.PayMoneyF();	
			});
			//取消分团转客信息
			$obj.find(".btn-cancelTransfer").click(function(){
				closeTab(menuKey+"-updateTransfer");
				transfer.edited["updateTransfer"] = "";
			});
			//已付keyup事件
			$obj.find("input[name=transPayedMoney]").keyup(function(){
				transfer.PayMoneyF();
			});
			//其他费用数量
			$obj.find("input[name=count]").keyup(function(){ 
				transfer.PayMoneyF();
			});
			//其他费用价格
			$obj.find("input[name=otherPrice]").keyup(function(){
				transfer.PayMoneyF();
			});
			//新增其他费用选项
			$obj.find(".addOrOtherSelect").change(function(){
				transfer.PayMoneyF();
			});
			//出游日期时间控件
			$obj.find("input[name=createTime]").datepicker({
				autoclose: true,  
				todayHighlight: true,   
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			})
		},
		getPartnerAgencyList:function(obj,partnerAId){
			$(obj).autocomplete({
				minLength: 0,
				change: function(event, ui) {
					if (!ui.item)  {
						$(this).val('').nextAll('input[name="transferPartnerAgencyId"]').val('');
					}
				},
				select: function(event, ui) {
					$(this).blur().nextAll('input[name="transferPartnerAgencyId"]').val(ui.item.id);
				}
			})
			.click(function(event) {
				var $objC = $(this);
				$.ajax({
					url:""+APP_ROOT+"back/partnerAgency.do?method=findPartnerAnencyList&token="+$.cookie("token")+"&menuKey=resource_partnerAgency&operation=view",
                    dataType: "json",
                    data:"travelAgencyName="+$objC.val(),
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var partnerAgencyList = JSON.parse(data.partnerAgencyList);
							if(partnerAgencyList != null && partnerAgencyList.length > 0){
								for(var i=0;i<partnerAgencyList.length;i++){
									partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName;
								}
							}
							$objC.autocomplete('option','source', partnerAgencyList);
							$objC.autocomplete('search', '');
						}
                    }
                });
			});
		},
		getLineProductList:function(obj,partnerAId){
			$(obj).autocomplete({
				minLength: 0,
				change: function(event, ui) {
					if (!ui.item)  {
						$(this).val('').nextAll('input[name="lineProductId"]').val('');
					}
				},
				select: function(event, ui) {
					$(this).blur().nextAll('input[name="lineProductId"]').val(ui.item.id);
				}
			})
			.click(function(event) {
				var $objC = $(this);
				$.ajax({
					url:""+APP_ROOT+"back/transfer.do?method=findLineProduct&token="+$.cookie("token")+"&menuKey=resource_partnerAgency&operation=view",
                    dataType: "json",
                    data:"name="+$objC.val(),
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var lineProductList = JSON.parse(data.lineProductList);
							if(lineProductList != null && lineProductList.length > 0){
								for(var i=0;i<lineProductList.length;i++){
									lineProductList[i].value = lineProductList[i].name;
								}
							}
							$objC.autocomplete('option','source', lineProductList);
							$objC.autocomplete('search', '');
						} 
                    }
                });
			});
		},

		//判定状态
		isEditStatus:function($obj,statusVal){
			if (statusVal==1) {//已确认
				$obj.find("input[name=transferPartnerAgencyId]").attr("disabled","disabled");
			} else{
				$obj.find("input[name=transferPartnerAgencyId]").removeAttr("disabled","disabled");

			};
		},

		//付款账务--应付/现付/已付的计算
		PayMoneyF:function(){
			var $obj=$(".updateTransfer"); 
			var needPayMoney = 0;
			
			var transNeedPayAllMoney = $obj.find("input[name=transNeedPayAllMoney]");//应付
			var transPayedMoney = $obj.find("input[name=transPayedMoney]"); //已付
			var transCurrentPM = $obj.find("input[name=transCurrentPayedMoney]"); //现付
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
			var transNeedPayAllM=transNeedPayAllMoney.val(needPayMoney.toFixed(2));
			//已付
			var payedMN =parseFloat(transPayedMoney.val());
			if(isNaN(payedMN)){
				payedMN = 0;
			}
			//现付=应付-已付
			var transCurrent = transNeedPayAllM.val()-payedMN;
			
			if(isNaN(transCurrent)){
				transCurrent = 0;
			}
			transCurrentPM.val(transCurrent);
		},
		//删除添加其他费用
		delTransferData:function(id,tr){
			$updateObj=$(".updateTransfer");
			if( id!=null && id!=""){
				$.ajax({
					url:""+APP_ROOT+"back/transfer.do?method=deleteFee&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
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
						transfer.PayMoneyF();
					}
				});	
			}else{
				//移除空的其他费用
				$updateObj.find(".transferFee1SelectId").click(function(){
					$(this).remove();transfer.PayMoneyF();
				});
			}
		},
		//编辑保存分团转客信息
		saveTransfer:function($obj,isClose){ 
			var id = $obj.find("input[name=touristGroupTransferId]").val(),
			remark =$obj.find("input[name=remark]").val(),
			status = 1,
			isCurrent = 0,

			//startTime = $obj.find(" input[name=createTime]").val(),
			partnerAgencyId = $obj.find("input[name=transferPartnerAgencyId]").val(),
			transPayedMoney = $obj.find("input[name=transPayedMoney]").val(),
			transNeedPayAllMoney = $obj.find("input[name=transNeedPayAllMoney]").val(),
			
			transAdultPrice = $obj.find("input[name=transAdultPrice]").val(),
			transChildPrice = $obj.find("input[name=transChildPrice]").val(),
			transRemark = $obj.find("input[name=transRemark]").val();
			if ($obj.find("input[name=isCurrent]").is(":checked")==true) {
				isCurrent=1;
			}
		
			//获取新增费用项目
			//添加费用JSON
			var otherFeeJsonAdd = [];
			var otherFeeJsonAddLength=$obj.find(".addTransferCost tr").length;
			$obj.find(".addTransferCost tr").each(function(i){
				var id=$(this).attr("data-entity-id");
				var type = $(this).find("[name=type]").attr("value");
				var discribe = $(this).find("input[name=discribe]").val();
				var count = $(this).find("input[name=count]").val();
				var otherPrice = $(this).find("input[name=otherPrice]").val();
				if(i>1){
					var otherFeeJson = {
						"type":type,    
						"id":id,
						"discribe":discribe,
						"count":count,
						"otherPrice" : otherPrice
					}
					otherFeeJsonAdd.push(otherFeeJson);
				}
			})   
			var saveDate={
				touristGroupTransfer : {
					"id":id,  //转客表ID
					"remark":remark, //转客备注
					"status":status,//转客状态，0未完成，1已完成
					//"startTime":startTime,//发团日期
					"partnerAgencyId":partnerAgencyId //转到的地接社			
				},
			    transferFee : {
					"transNeedPayAllMoney":transNeedPayAllMoney,//应付
					"transPayedMoney":transPayedMoney,//已付
					"transAdultPrice":transAdultPrice,//大人转客单价
					"transChildPrice":transChildPrice,//小孩转客单价
					"transRemark":transRemark//转客费用备注
				},			
			}
			var otherFee=JSON.stringify(otherFeeJsonAdd);
			if (isCurrent==1) {
				$.ajax({
					url:""+APP_ROOT+"back/transfer.do?method=update&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
					data:"id="+id+"&touristGroupTransfer="+JSON.stringify(saveDate.touristGroupTransfer)+"&transferFee="+JSON.stringify(saveDate.transferFee)+"&otherFee="+encodeURIComponent(otherFee)+"&isCurrent="+isCurrent,
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
							transfer.edited["updateTransfer"] = "";
							showMessageDialog($( "#confirm-dialog-message" ),data.message);
							if(isClose == 1){
								closeTab(menuKey+"-updateTransfer");
								transfer.getlistTransferSumData(0,"","","","","","",2);
							}
							
						}
					}
				});
			} else{
				showMessageDialog($( "#confirm-dialog-message" ),"必须有一个游客小组指定现收!");
			};
		},
		save : function(saveType){
			if(saveType == "updateTransfer"){
				var $obj = $("#tab-arrange_transfer-updateTransfer-content .updateTransfer");
				transfer.saveTransfer($obj,1);
			}
		},
		clearEdit : function(clearType){
			transfer.edited[clearType] = "";
		}
	}

	exports.getlistTransferSumData = transfer.getlistTransferSumData; 
	exports.isEdited = transfer.isEdited; 
	exports.save = transfer.save; 
	exports.clearEdit = transfer.clearEdit; 
});
