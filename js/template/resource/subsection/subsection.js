define(function(require, exports) {
	var menuKey = "resource_subsection",
	    listMainTemplate = require("./view/listMain"),
	    listTemplate = require("./view/list"),
	    rule = require("./rule"),
	    operationTemplate = require("./view/operation"),
		validator;
	
	var subsection = {
		searchData : {
			lineProductId : "",
			fromPartnerAgencyId : "",
			creatorId : "",
			travelDate : "",
			operationStartDate : "",
			operationEndDate : ""
		},
		listMainSubsection :function(){
			$.ajax({
				url:""+APP_ROOT+"back/innerTransferOperation.do?method=getSearchCondition&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				dataType:"json",
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					//关闭遮罩
					layer.close(globalLoadingLayer);
					//根据返回值判断下一步操作，或者已出现错误
					var result = showDialog(data);
					//如果正确则就执行
					if(result){
						var html = listMainTemplate(data);
						addTab(menuKey,"中转分段",html);

						var tab = "tab-resource_subsection-content";
						subsection.listSubsection(0,subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
						subsection.searchNumber(subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
						subsection.datePicker();
						$("#"+tab+" .btn-subsection-search").on("click",function(){
							function getValue(name){
								var value = $("#"+tab+" .subsectionSearchForm [name="+name+"]").val();
								return value;
							}
							subsection.searchData = {
								lineProductId :  getValue("lineProductId"),
								fromPartnerAgencyId :  getValue("fromPartnerAgencyId"),
								creatorId :  getValue("creatorId"),
								travelDate :  getValue("travelDate"),
								operationStartDate :  getValue("operationStartDate"),
								operationEndDate :  getValue("operationEndDate")
							}
							subsection.listSubsection(0,subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
							subsection.searchNumber(subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
						})
						subsection.getPartnerAgencyList($("#"+tab+" .choosePartnerAgency"),"");
					}
				}
			})
		},
		searchNumber :function(lineProductId,fromPartnerAgencyId,creatorId,travelDate,operationStartDate,operationEndDate,tab){
			$.ajax({
				url:""+APP_ROOT+"back/innerTransferOperation.do?method=getTransitSubCount&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"lineProductId="+lineProductId+"&fromPartnerAgencyId="+fromPartnerAgencyId+"&creatorId="+creatorId+"&travelDate="+travelDate+"&operationStartDate="+operationStartDate+"&operationEndDate="+operationEndDate+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						$("#"+tab+" .search-memberCount").text("人数合计："+data.adultCount+"大"+data.childCount+"小");
						$("#"+tab+" .search-currentNeedPayMoney").text("现收款合计："+data.currentNeedPayMoney+"元");
					}
				}
			})
		},
		listSubsection :function(page,lineProductId,fromPartnerAgencyId,creatorId,travelDate,operationStartDate,operationEndDate,tab){
			$.ajax({
				url:""+APP_ROOT+"back/innerTransferOperation.do?method=listTransitSubTgroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&lineProductId="+lineProductId+"&fromPartnerAgencyId="+fromPartnerAgencyId+"&creatorId="+creatorId+"&travelDate="+travelDate+"&operationStartDate="+operationStartDate+"&operationEndDate="+operationEndDate+"",
				dataType:"json",
				beforeSend:function(){
					//打开一个遮罩层
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					data.transitSubTgroupList = JSON.parse(data.transitSubTgroupList);
					var result = showDialog(data);
					if(result){
						var html = listTemplate(data);
						$("#"+tab+" .subsectionList").html(html);
						show(tab);
						hid(tab);
						function show(tab){
							$("#"+tab+" .lineProductArea button.show").unbind().click(function(){
								var $this = $(this),
									index = $this.attr("index"),
									parents = $this.parent().parent().parent().parent();
								parents.find(".tr_"+index).css("display","table-row");
								$this.find("i").removeClass("fa-plus");
								$this.find("i").addClass("fa-minus");
								$this.addClass("hid");
								$this.removeClass("show");
								hid(tab);
							})
						}
						function hid(tab){
							$("#"+tab+" .lineProductArea button.hid").unbind().click(function(){
								var $this = $(this),
									index = $this.attr("index"),
									parents = $this.parent().parent().parent().parent();
								parents.find(".tr_"+index).css("display","none");
								$this.find("i").removeClass("fa-minus");
								$this.find("i").addClass("fa-plus");
								$this.addClass("show");
								$this.removeClass("hid");
								show(tab);
							})
						}
						$("#"+tab+" .subsectionList .btn-subsection-revoke").click(function(){
							var id = $(this).attr("data-entity-id");
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
												url:""+APP_ROOT+"back/innerTransferOperation.do?method=revokeSubTouristGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
														subsection.listSubsection(0,subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
													}
												}
											})
										}
									}
								],
								open:function(event,ui){
									$(this).find("p").text("你确定要撤销该小组分段？");
								}
							});
						})
						$("#"+tab+" .subsectionList .btn-subsection").click(function(){
							var id = $(this).attr("data-entity-id");
							$.ajax({
								url:""+APP_ROOT+"back/innerTransferOperation.do?method=getTouristGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
								type:"POST",
								data:"id="+id+"",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									layer.close(globalLoadingLayer);
									data.ptGroup = JSON.parse(data.ptGroup);
									data.subtGroupList = JSON.parse(data.subtGroupList);
									var result = showDialog(data);
									if(result){
										var html = operationTemplate(data);
										addTab(menuKey+"-operation","分段操作",html);

										var tab = "tab-resource_subsection-operation-content";
										validator = rule.checkdSaveSubsection($("#"+tab));
										subsection.datePicker();
										subsection.lineProductChoose(tab);
										$("#"+tab+" .btn-operation-delete").on("click",function(){
											var id = $(this).attr("data-entity-id"),
												$this = $(this);
											subsection.deleteOperation(id,$this);
										})
										$("#"+tab+" .btn-operation-add").click(function(){
											var radio = '<input type="radio" name="operateCurrentNeedPayMoney" />';
											if (data.mark != 0) {
													radio = '-';
											}
											var html = 
											'<tr data-entity-id="">'+
											'<td><input type="hidden" name="lineProductId" value="" /><input class="chooseLineProduct col-sm-12" name="lineProduct" type="text" value="" /></td>'+
											'<td><input type="text" name="customerType" class="col-sm-12" readonly="readonly" /></td>'+
											'<td><input type="text" name="days" class="col-sm-10" readonly="readonly" /><span class="col-sm-2" style="line-height: 30px">天</span></td>'+
											'<td><input class="datepicker col-sm-12" name="startTime" type="text" value="" /></td>'+
											'<td>'+radio+'</td>'+
											'<td>-</td>'+
											'<td><div class="hidden-sm hidden-xs btn-group"><a data-entity-id="" class=" btn-operation-delete cursor">删除</a></div></td>'+
											'</tr>';
											$("#"+tab+" .subsectionOperationTbody").append(html);

											subsection.lineProductChoose(tab);
											$("#"+tab+" .btn-operation-delete").on("click",function(){
												var id = $(this).attr("data-entity-id"),
													$this = $(this);
												subsection.deleteOperation(id,$this);
											})
											subsection.datePicker();
										})
										$("#"+tab+" .btn-operation-close").click(function(){
											closeTab(menuKey+"-operation");
										})
										$("#"+tab+" .btn-operation-save").on("click",{"tab" : tab,"days" : data.ptGroup.lineProduct.days,"validator" : validator},subsection.operationSave);
									}
								}
							})
						});
						//分页--首页按钮事件
						$("#"+tab+" .pageMode a.first").click(function(){
							if(data.pageNo == 0 || data.totalPage == 0)return;
							subsection.listSubsection(0,subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
						});
						//分页--上一页事件
						$("#"+tab+" .pageMode a.previous").click(function(){	
							if(data.pageNo == 0 || data.totalPage == 0)return;
							var previous = data.pageNo - 1;
							if(data.pageNo == 0){
								previous = 0;
							}
							subsection.listSubsection(previous,subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
						});
						//分页--下一页事件
						$("#"+tab+" .pageMode a.next").click(function(){
							console.log("next");
							if(data.pageNo+1 == data.totalPage || data.totalPage == 0)return;
							var next =  data.pageNo + 1;
							if(data.pageNo == data.totalPage-1){
								next = data.pageNo ;
							}
							subsection.listSubsection(next,subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
						});
						//分页--尾页事件
						$("#"+tab+" .pageMode a.last").click(function(){
							if(data.pageNo == data.totalPage-1 || data.totalPage == 0)return;
							subsection.listSubsection(data.totalPage-1,subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
						});
					}
				}
			})
		},
		lineProductChoose :function(tab){
			var chooseLineProduct = $("#"+tab+" .chooseLineProduct");
			chooseLineProduct.autocomplete({
				minLength:0,
				change :function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var parents = $(this).parent();
						parents.parent().find("input[name=days]").val("");
						parents.parent().find("input[name=customerType]").val("");
						parents.find("input[name=lineProductId]").val("");
					}
				},
				select :function(event,ui){
					var parents = $(this).parent();
					parents.find("input[name=lineProductId]").val(ui.item.id);
					if(ui.item.customerType == 0){
						parents.parent().find("input[name=customerType]").val("散客");
					}else{
						parents.parent().find("input[name=customerType]").val("团体");
					}
					parents.parent().find("input[name=days]").val(ui.item.days);
					validator = rule.updateCheckdSaveSubsection(validator);
				}
			}).unbind("click").click(function(){
				var obj =this;
				$.ajax({
					url:""+APP_ROOT+"back/innerTransferOperation.do?method=getLineProductList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	                dataType: "json",
	                success: function(data) {
						var result = showDialog(data);
						if(result){
							var lineProductList = data.lineProductList;
							if(lineProductList && lineProductList.length > 0){
								for(var i=0; i < lineProductList.length; i++){
									lineProductList[i].value = lineProductList[i].name;
								}
								$(obj).autocomplete('option','source', lineProductList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有同行客户信息', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
	                }
				})
			})
		},
		operationSave :function(e){
			var tab = e.data.tab,
				days = e.data.days,
				validator = e.data.validator,
				isCheckNeedPayMoney = 0;
			if(!validator.form()){return;}
			function getValue(obj,name){
				var value = $(obj).find("[name="+name+"]").val();
				return value;
			}
			var subTouristGroup = {
				id : getValue("#"+tab,"touristGroupId"),
				startTime : getValue("#"+tab,"touristGroupStartTime"),
				days : getValue("#"+tab,"touristGroupDays"),
				subTouristGroupList : [],
				delSubTouristGroupIdList : []
			}
			var tr = $("#"+tab+" .subsectionOperationTbody tr:not(.del)");
			tr.each(function(){
				var $this = $(this),
					NeedPayMoney = "0";
				if($this.find("input[name=operateCurrentNeedPayMoney]").is(":checked")){
					NeedPayMoney = "1";
					isCheckNeedPayMoney = 1;
				}
				var subTourist ={
					id : $this.attr("data-entity-id"),
					lineProductId : getValue($this,"lineProductId"),
					startTime : getValue($this,"startTime"),
					operateCurrentNeedPayMoney : NeedPayMoney,
					days : getValue($this,"days")
				}
				subTouristGroup.subTouristGroupList.push(subTourist);
			})
			var trDel = $("#"+tab+" .subsectionOperationTbody tr.del");
			trDel.each(function(){
				var $this = $(this);
				var idList = {
					id : $this.attr("data-entity-id")
				}
				subTouristGroup.delSubTouristGroupIdList.push(idList);
			})
			subTouristGroup = JSON.stringify(subTouristGroup);
			if ($("#"+tab+" .btn-operation-save").attr("data-entity-mark")) {
				isCheckNeedPayMoney = 1;
			}
			if(isCheckNeedPayMoney == 0){
				showMessageDialog($( "#confirm-dialog-message" ),"请选择在哪一分段现收团款");
				return;
			}
			$.ajax({
				url:""+APP_ROOT+"back/innerTransferOperation.do?method=saveSubTgroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"subTouristGroup="+encodeURIComponent(subTouristGroup)+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							closeTab(menuKey+"-operation");
							subsection.listMainSubsection();
						});
					}
				}
			})
		},
		deleteOperation :function(id,$this){
			if (id && id.length>0) {
				//deleteSubTGroup
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
								$this.parent().parent().parent().addClass("del");
								$this.parent().parent().parent().fadeOut(function(){
									$this.parent().parent().parent().hide();
								})
							}
						}
					],
					open:function(event,ui){
						$(this).find("p").text("你确定要删除该分段？");
					}
				});
			}else{
				$this.parent().parent().parent().fadeOut(function(){
					$this.parent().parent().parent().remove();
				})
			}
		},
		datePicker :function(){
			$(".datepicker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			})
		},
		getPartnerAgencyList:function(obj,partnerAId){
			var $objC = $(obj)
			$.ajax({
				url:""+APP_ROOT+"back/partnerAgency.do?method=findPartnerAnencyList&token="+$.cookie("token")+"&menuKey=resource_partnerAgency&operation=view",
                dataType: "json",
                data:"travelAgencyName="+$objC.val(),
                success:function(data){
                	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var partnerAgencyList = JSON.parse(data.partnerAgencyList);
							if(partnerAgencyList != null && partnerAgencyList.length > 0){
								for(var i=0;i<partnerAgencyList.length;i++){
									partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName;
								}
							};
							$(obj).autocomplete({
								
								minLength: 0,
								change: function(event, ui) {
									if (!ui.item)  {
										$(this).val('').nextAll('input[name="fromPartnerAgencyId"]').val('');
									}
								},
								select: function(event, ui) {
									var $tabId = $("#tab-resource_touristGroup-add-content");
									$(this).blur().nextAll('input[name="fromPartnerAgencyId"]').val(ui.item.id);
									$tabId.find("input[name=fromPartnerAgencyId]").val("");

								}
							}).off("click").on("click",function(){
								
								$objC.autocomplete('option','source', partnerAgencyList);
								$objC.autocomplete('search', '');

							});
							
						}
                }
			});
		},
	}
	exports.listMainSubsection = subsection.listMainSubsection;
});
