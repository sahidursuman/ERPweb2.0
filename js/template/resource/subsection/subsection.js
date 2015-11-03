define(function(require, exports) {
	var menuKey = "resource_subsection",
	    listMainTemplate = require("./view/listMain"),
	    listTemplate = require("./view/list"),
	    rule = require("./rule"),
	    operationTemplate = require("./view/operation"),
	    tabId = "tab-"+menuKey+"-content",
		validator;
	
	var subsection = {
		searchData : {
			lineProduct:"",
			lineProductId : "",
			fromPartnerAgency:"",
			fromPartnerAgencyId : "",
			creator:"",
			creatorId : "",
			travelDate : "",
			operationStartDate : "",
			operationEndDate : ""
		},

		autocompleteDate : {},
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
						subsection.autocompleteDate.creatorList = data.creatorList;
						subsection.autocompleteDate.fromPartnerAgencyList = data.fromPartnerAgencyList;
						subsection.autocompleteDate.lineProductList = data.lineProductList;
						var html = listMainTemplate(data);
						addTab(menuKey,"中转分段",html);

						var tab = "tab-resource_subsection-content";
						subsection.datePicker();
						$("#"+tab+" .btn-subsection-search").off('click').on("click",function(){
							function getValue(name){
								var value = $("#"+tab+" .subsectionSearchForm [name="+name+"]").val();
								return value;
							}
							subsection.searchData = {
								lineProduct :  getValue("lineProductChoose"),
								lineProductId :  getValue("lineProductId"),
								fromPartnerAgency :  getValue("fromPartnerAgency"),
								fromPartnerAgencyId :  getValue("fromPartnerAgencyId"),
								creator :  getValue("creator"),
								creatorId :  getValue("creatorId"),
								travelDate :  getValue("travelDate"),
								operationStartDate :  getValue("operationStartDate"),
								operationEndDate :  getValue("operationEndDate")
							}
							subsection.listSubsection(0,subsection.searchData.lineProduct,subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgency,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creator,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
							subsection.searchNumber(subsection.searchData.lineProduct,subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgency,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creator,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
						})
						//subsection.getPartnerAgencyList($("#"+tab+" .choosePartnerAgency"),"");
						//subsection.getLineProductList($("#"+tab+" .chooseLineProduct"),"");
						//subsection.($("#"+tab+" .creatorUserChoose"),"");
						$("#"+tab+" .btn-subsection-search").trigger('click');
					}
				}
			})
		},
		searchNumber :function(lineProduct,lineProductId,fromPartnerAgency,fromPartnerAgencyId,creator,creatorId,travelDate,operationStartDate,operationEndDate,tab){
			$.ajax({
				url:""+APP_ROOT+"back/innerTransferOperation.do?method=getTransitSubCount&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"lineProductId="+lineProductId+"&lineProduct="+lineProduct+"&fromPartnerAgencyId="+fromPartnerAgencyId+"&fromPartnerAgency="+fromPartnerAgency+"&creatorId="+creatorId+"&creator="+creator+"&travelDate="+travelDate+"&operationStartDate="+operationStartDate+"&operationEndDate="+operationEndDate+"",
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
		listSubsection :function(page,lineProduct,lineProductId,fromPartnerAgency,fromPartnerAgencyId,creator,creatorId,travelDate,operationStartDate,operationEndDate,tab){
			$.ajax({
				url:""+APP_ROOT+"back/innerTransferOperation.do?method=listTransitSubTgroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&lineProductId="+lineProductId+"&lineProduct="+lineProduct+"&fromPartnerAgencyId="+fromPartnerAgencyId+"&fromPartnerAgency="+fromPartnerAgency+"&creatorId="+creatorId+"&creator="+creator+"&travelDate="+travelDate+"&operationStartDate="+operationStartDate+"&operationEndDate="+operationEndDate+"",
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
						html = filterUnAuth(html);
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
														subsection.listSubsection(0,subsection.searchData.lineProduct,subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgency,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creator,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
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
										$("#"+tab+" .btn-operation-save").on("click",
											{
												"tab" : tab,
												"days" : data.ptGroup.lineProduct.days,
												"validator" : validator,
												"currentNeedPayMoney": data.ptGroup.currentNeedPayMoney
											},
											subsection.operationSave);
									}
								}
							})
						});
						// 绑定翻页组件
						laypage({
						    cont: $('#' + tabId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		subsection.listSubsection(obj.curr -1,subsection.searchData.lineProduct,subsection.searchData.lineProductId,subsection.searchData.fromPartnerAgency,subsection.searchData.fromPartnerAgencyId,subsection.searchData.creator,subsection.searchData.creatorId,subsection.searchData.travelDate,subsection.searchData.operationStartDate,subsection.searchData.operationEndDate,tab);
						    	}
						    }
						});
						//autocomplete
						subsection.getPartnerAgencyList($("#tab-"+menuKey+"-content"));
						subsection.getLineProductList($("#tab-"+menuKey+"-content"));
						subsection.getCreatorList($("#tab-"+menuKey+"-content"));
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
						var $this = $(this),$parents = $this.closest('tr');
						$this.val("");
						$parents.find("input[name=lineProductId]").val("");
						$parents.find("input[name=days]").val("");
						$parents.find("input[name=customerType]").val("");
					}
				},
				select :function(event,ui){
					var $this = $(this),$parents = $this.closest('tr');
					$this.val(ui.item.name);
					$parents.find("input[name=lineProductId]").val(ui.item.id).trigger('change');
					if(ui.item.customerType == 0){
						$parents.find("input[name=customerType]").val("散客");
					}else{
						$parents.find("input[name=customerType]").val("团体");
					}
					$parents.find("input[name=days]").val(ui.item.days);
					validator = rule.updateCheckdSaveSubsection(validator);
					return false;
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
									lineProductList[i].value = "("+lineProductList[i].days+"天)"+lineProductList[i].name;
								}
								$(obj).autocomplete('option','source', lineProductList);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有线路信息', obj, {
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
			if(isCheckNeedPayMoney == 0 && e.data.currentNeedPayMoney > 0){
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

		//来源
		getPartnerAgencyList:function($obj){
			var getPartnerAgencyList = $obj.find(".choosePartnerAgency");
			getPartnerAgencyList.autocomplete({
				minLength: 0,
				change: function(event, ui) {
					if(ui.item == null){
						//$(this).nextAll('input[name="fromPartnerAgencyId"]').val('');
						$(this).parent().parent().find("input[name=fromPartnerAgencyId]").val("");
					}
				},
				select: function(event, ui) {
					$(this).blur();
					var obj = this;
					$(obj).parent().parent().find("input[name=fromPartnerAgencyId]").val(ui.item.id).trigger('change');
				}
			}).click(function(){
			var obj = this;
			var fromGuideObj = subsection.autocompleteDate.fromPartnerAgencyList;
			console.info(fromGuideObj);
			if(fromGuideObj !=null && fromGuideObj.length>0){
				for(var i=0;i<fromGuideObj.length;i++){
					fromGuideObj[i].value = fromGuideObj[i].travelAgencyName;
				}
			}
				$(obj).autocomplete('option','source',fromGuideObj);
				$(obj).autocomplete('search', '');
			});
		},

		//线路产品模糊查询
		getLineProductList:function($obj){
			var getPartnerAgencyList = $obj.find(".chooseLineProduct");
			getPartnerAgencyList.autocomplete({
				minLength: 0,
				change: function(event, ui) {
					if (ui.item == null)  {
						//$(this).nextAll('input[name="lineProductId"]').val('');
						$(this).parent().parent().find("input[name=lineProductId]").val("");
					}
				},
				select: function(event, ui) {
					$(this).blur();
					var obj = this;
					$(obj).parent().parent().find("input[name=lineProductId]").val(ui.item.id).trigger('change');
					//nextAll('input[name="lineProductId"]').val(ui.item.id);
				}
			}).click(function(){
			var obj = this;
			var lineProductObj = subsection.autocompleteDate.lineProductList;
			console.info(lineProductObj);
			if(lineProductObj !=null && lineProductObj.length>0){
				for(var i=0;i<lineProductObj.length;i++){
					lineProductObj[i].value = lineProductObj[i].name;
				}
			}
				$(obj).autocomplete('option','source',lineProductObj);
				$(obj).autocomplete('search', '');
			});
		},

        //操作人模糊查询
		getCreatorList:function($obj){
			var getCreatorList = $obj.find(".creatorUserChoose");
			getCreatorList.autocomplete({
				minLength: 0,
				change: function(event, ui) {
					if (ui.item == null)  {
						//$(this).nextAll('input[name="lineProductId"]').val('');
						$(this).parent().parent().find("input[name=creatorId]").val("");
					}
				},
				select: function(event, ui) {
					$(this).blur();
					var obj = this;
					$(obj).parent().parent().find("input[name=creatorId]").val(ui.item.id).trigger('change');
					//nextAll('input[name="lineProductId"]').val(ui.item.id);
				}
			}).click(function(){
				var obj = this;
				var creatorObj = subsection.autocompleteDate.creatorList;
				console.info(creatorObj);
				if(creatorObj !=null && creatorObj.length>0){
					for(var i=0;i<creatorObj.length;i++){
						creatorObj[i].value = creatorObj[i].realName;
					}
				}
				$(obj).autocomplete('option','source',creatorObj);
				$(obj).autocomplete('search', '');
			});
		},
	}
	exports.listMainSubsection = subsection.listMainSubsection;
});
