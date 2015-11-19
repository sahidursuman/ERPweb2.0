define(function(require, exports) {
	var rule = require("./rule");
	var menuKey = "arrange_tourist",
		listMainTemplate = require("./view/listMain"),
		listTemplate = require("./view/list"),
		touristGrouplistTemplate = require("./view/touristGrouplist"),
		divideTemplate = require("./view/divide"),
		transferDivideTemplate=require("./view/transferDivide"),
		addTripPlanTemplate = require("./view/addTripPlan"),
		viewGroupTemplate = require("./view/viewGroup"),
		addGroupTemplate = require("./view/addGroup"),
		viewTripPlanTemplate = require("./view/viewTripPlan"),
		transferTemplate = require("./view/transfer"),
		editFeeTemplate = require("./view/editFee"),
		chooseMergeTemplate = require("./view/chooseMerge"),
		addMergePlanTemplate = require("./view/addMergePlan"),
		chooseTravelLineTemplate = require("./view/chooseTravelLine"),
		updateTripPlanTemplate = require("./view/updateTripPlan"),
		viewPlanTemplate = require("./view/viewPlan"),
		inTransferTemplate = require("./view/inTransfer"),
		innerEditFeeTemplate = require("./view/innerEditFee"),
		addMergePlanTemplateLayer = "",
		chooseMergeLayer = "",
		updateInnerFeeLayer = "",
		checkTable="arrange_tourist-addTripPlan",
		tabId = "tab-"+menuKey+"-content";
	var arrangeTourist = {
		searchData : {
			lineProductId : "",
			startTime : ""
		},
		lineProListData : {
		},
		edited : {},
		isEdited : function(editedType){
			if(!!arrangeTourist.edited[editedType] && arrangeTourist.edited[editedType] != ""){
				return true;
			}
			return false;
		},

		/**
		 * listArrangeTouristMain 初始化数据模板
		 * @return {[type]} [description]
		 */
		listArrangeTouristMain:function(){
				var html = listMainTemplate();
				addTab(menuKey,"分并转团",html);

				//声明一个用于存储并团对象集合
				arrangeTourist.touristGroupMergeData = {
						touristGroupMergeList : []
				}
				//初始化分散团事件
				arrangeTourist.init_event();
		},

		/**
		 * init_event 初始化分散团事件
		 * @return {[type]} [description]
		 */
	    init_event:function(){
	    	var $visitorObj=$('#T-Visitor-list'),
				$GroupObj=$('#T-Group-list');
				//散客团体搜索		
				$visitorObj.find('.T-visitorTourist-search').off().on('click', function(event) {
					event.preventDefault();
					/* Act on the event */
					var lineProductId=$visitorObj.find("input[name=lineProductId]").val(),
						startTime=$visitorObj.find("input[name=startTime]").val(),
						customerType=0,
						divId="T-Visitor-list";
					arrangeTourist.listArrangeTourist(0,lineProductId,startTime,customerType,divId);

				});
				$GroupObj.find('.T-GroupTourist-search').off().on('click', function(event) {
					event.preventDefault();
					/* Act on the event */
					var lineProductId=$GroupObj.find("input[name=lineProductId]").val(),
						startTime=$GroupObj.find("input[name=startTime]").val(),
						customerType=1,
						divId="T-Group-list";
					arrangeTourist.listArrangeTourist(0,lineProductId,startTime,customerType,divId);
				});

				//初始化页面数据
				arrangeTourist.listArrangeTourist(0,"","",0,"T-Visitor-list");
				arrangeTourist.listArrangeTourist(0,"","",1,"T-Group-list");

				//Autocomplate线路产品
				arrangeTourist.getlineProductList($visitorObj,0);
				arrangeTourist.getlineProductList($GroupObj,1);

	    },


	    /**
	     * getlineProductList 线路产品的及时请求
	     * @param  {[type]} $obj  散客团体DOM对象
	     * @param  {[type]} customerType 0散客 1团体标识
	     * @return {[type]}          
	     */
        getlineProductList:function($obj,customerType){
			var $that = $obj.find(".T-Choose-linProList");	
			$that.autocomplete({
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
				}
			}).unbind("click").click(function(){
				var obj = this,list;
					$.ajax({
						url:KingServices.build_url("touristGroup","getLineProductList"),
						type: 'POST',
						dataType: 'json',
						data:"customerType="+customerType,
						success:function(data){
					       var result = showDialog(data),
					           list=data.lineProductList;
					       if(!!list && list.length){
								for(var i=0; i < list.length; i++){
								  list[i].value = list[i].name;
						        }
							}
							$(obj).autocomplete('option','source', list);
				            $(obj).autocomplete('search', '');
				        }
					})		
			})
		},
		/**
		 * listArrangeTourist 散客团体列表数据
		 * @param  {[type]} page          分页page
		 * @param  {[type]} lineProductId 线路产品id
		 * @param  {[type]} startTime     开始日提
		 * @param  {[type]} customerType  0 散客、1 团体标识
		 * @param  {[type]} divId         散客团体DOM-ID
		 * @return {[type]}               [description]
		 */
		listArrangeTourist:function(page,lineProductId,startTime,customerType,divId){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=arrangeTouristGroup&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"pageNo="+page+"&lineProductId="+lineProductId+"&startTime="+startTime+"&customerType="+customerType+"&sortType=auto",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						if (customerType==0) {// 0 散客 1团体
							var html = listTemplate(data);
							html = filterUnAuth(html);
							//无权限时移除“并团操作”列
							function filterAuth(html){
								var $obj = $(html);
								if(!isAuth("1130004")){
									$obj.find(".T-arrangeList .T-touristGroupMergeCheckBox").each(function(i){
										$(this).closest('td').remove();
									});
									//移除表头
									$obj.find(".T-arrangeList").closest('table').find('th').eq(0).remove();
								}
								return html;
							}
							html = filterAuth(html);
							//绑定模板数据
							$("#T-Visitor-list").find('.T-touristVisitor-list').html(html);
					
						} else{
							var html=touristGrouplistTemplate(data);
		                    $("#T-Group-list").find('.T-touristGroup-list').html(html);
						};

						//初始化时间控件
						arrangeTourist.initDatePicker($("#"+tabId));

						//散客团体的报表操作
						arrangeTourist.init_VistorGroupEvent();
						
						// 绑定翻页组件
						laypage({
						    cont: $('#' + divId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		arrangeTourist.listArrangeTourist(obj.curr -1,lineProductId,startTime,customerType,divId);
						    	}
						    }
						});
					}
				}
			});
		},

		/**
		 * 时间控件是初始化
		 * @param  {[type]} $tabId 在外层ID
		 * @return {[type]}
		 */
		initDatePicker:function($tabId){
			$tabId.find('.datepicker').datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			})
		},

		/**
		 * init_VistorGroupEvent 散客团体的报表操作
		 * @return {[type]} [description]
		 */
		init_VistorGroupEvent:function(){
			//散客操作
			$("#T-Visitor-list").find('.T-arrageVisitor-list').on('click', '.T-action', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $that=$(this),$tr=$that.closest('tr'),lineProductId=$tr.attr("data-entity-id"), 
				    startTime=$tr.attr("data-entity-startTime"),
				    customerType=0;
					if ($that.hasClass('T-divide'))  {
						// 分团
						arrangeTourist.divideTourist(lineProductId,startTime,customerType);
					} else if ($that.hasClass('T-transfer'))  {
						// 转客
						arrangeTourist.transferTourist(lineProductId,startTime);
					} else if ($that.hasClass('T-inTransfer'))  {
						// 内转
						arrangeTourist.inTransferTourist(lineProductId,startTime);
					}


					if($tr.hasClass('.T-touristGroupMergeCheckBox')){
						//并团的checkbox绑定事件
						arrangeTourist.addTouristGroupMerge();
					}else if ($tr.hasClass('.T-start-touristGroup-merge')){
						//并团绑定事件
						arrangeTourist.startTouristGroupMerge();
					}
			});


			//给并团checkbox绑定事件
			$("#T-Visitor-list").find(".T-touristGroupMergeCheckBox").click(arrangeTourist.addTouristGroupMerge);
			
			//散客并团事件的绑定
			$("#T-Visitor-list").find('.T-start-touristGroup-merge').on('click', function(event) {
				event.preventDefault();
				/* Act on the event */
				arrangeTourist.startTouristGroupMerge();
			});


		    //团体操作
		    $("#T-Group-list").find('.T-arrageGroup-list').on('click', '.T-action', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $that=$(this),
				    $tr=$that.closest('tr'),
				    lineProductId=$tr.attr("data-entity-id"), 
				    startTime=$tr.attr("data-entity-startTime"),
				    customerType=1;
					if ($that.hasClass('T-divide'))  {
						// 分团
						arrangeTourist.divideTourist(lineProductId,startTime,customerType);
					} else if ($that.hasClass('T-transfer'))  {
						// 转客
						arrangeTourist.transferTourist(lineProductId,startTime);
					} else if ($that.hasClass('T-inTransfer'))  {
						// 内转
						arrangeTourist.inTransferTourist(lineProductId,startTime);
					}
			});
		},


		/**
		 * 团体
		 * @return {[type]} [description]
		 */
		listGroupTourist:function(){
			var html=touristGrouplistTemplate();
			$("#T-Group-list").find('.T-touristGroup-list').html(html);
		},
		//分团操作
		divideTourist:function(lineProductId,startTime,customerType){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=findTouristGroupInfo&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"type=1"+"&lineProductId="+lineProductId+"&startTime="+startTime+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);

					var result = showDialog(data);
					if(result){
						data.touristGroupList = JSON.parse(data.touristGroupList);
						data.lineProduct = JSON.parse(data.lineProduct);
						if (customerType==0) {//0--散客 1--团体
							var html = divideTemplate(data);
						    addTab(menuKey+"-divide","分团操作",html);
						} else{
							var html=transferDivideTemplate(data);
							 addTab(menuKey+"-transfer-divide","分团操作",html);

							 //团体分团操作--查看--生成计划
							 arrangeTourist.init_trfdivieEvent();

						};
					

						var choose_lineProductId = data.lineProduct.id;
						var choose_startTime = data.lineProduct.startTime;
						//绑定table的全选按钮事件
						$("#tab-"+menuKey+"-divide-content .divideTouristMain .all .mainCheckBox").click(function(){
							var is_checked = $(this).is(':checked');
							$("#tab-"+menuKey+"-divide-content .divideTouristMain .all tbody tr").each(function(){
								if(is_checked){
									$(this).find(".touristGroupCheckBox").prop("checked",true);
								}
								else{
									$(this).find(".touristGroupCheckBox").prop("checked",false);
								}
							});
							calChoosenAdultAndChildCount();
						});
						
						$("#tab-"+menuKey+"-divide-content .divideTouristMain .all tbody tr .touristGroupCheckBox").click(function(){
							calChoosenAdultAndChildCount();
						});
						
						function calChoosenAdultAndChildCount(){
							var sumAdultCount = 0;
							var sumChildCount = 0;
							$("#tab-"+menuKey+"-divide-content .divideTouristMain .all tbody tr").each(function(){
								if($(this).find(".touristGroupCheckBox").is(":checked")){
									sumAdultCount += parseInt($(this).attr("data-entity-adultCount"));
									sumChildCount += parseInt($(this).attr("data-entity-childCount"));
								}
							});
							$("#tab-"+menuKey+"-divide-content .divideTouristMain .choosenAdultAndChildCount").text("大人"+sumAdultCount+"小孩"+sumChildCount+"");
						}
						
						//绑定查看游客成员列表按钮事件
						$("#tab-"+menuKey+"-divide-content .divideTouristMain .groupView").unbind().click(arrangeTourist.viewTouristGroup);
						//给生成计划绑定事件
						$("#tab-"+menuKey+"-divide-content .divideTouristMain .btn-createTripPlan").on("click",function(){
							arrangeTourist.generationPlan("tab-"+menuKey+"-divide-content");
						});
						//分团操作中 选择计划按钮事件绑定
						$("#tab-"+menuKey+"-divide-content .divideTouristMain .btn-chooseTripPlan").on("click",function(){
							arrangeTourist.choosePlan({choose_lineProductId:choose_lineProductId,choose_startTime:choose_startTime});
						});
					}
				}
			});
		},
		//转客操作
		transferTourist:function(lineProductId,startTime){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=findTouristGroupInfo&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"type=2"+"&lineProductId="+lineProductId+"&startTime="+startTime+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);

					var result = showDialog(data);
					if(result){
						data.lineProduct = JSON.parse(data.lineProduct);
						data.touristGroupList = JSON.parse(data.touristGroupList);
						var html = transferTemplate(data);
						addTab(menuKey+"-transfer","转客操作",html);
						//查看游客小组
						$(".transferTouristMain .viewTouristGroup_transfer").click(arrangeTourist.viewTouristGroup);
						//绑定table的全选按钮事件
						$(".transferTouristMain .mainCheckBox").click(function(){
							var is_checked = $(this).is(':checked');
							$(".transferTouristMain .transferTouristGroupTbody tr").each(function(){
								if(is_checked){
									$(this).find(".transferCheckBox").prop("checked",true);
								}
								else{
									$(this).find(".transferCheckBox").prop("checked",false);
								}
							});
							choosenAdultAndChildCount();
						});

						$("#tab-"+menuKey+"-transfer-content .transferTouristMain .all tbody tr .transferCheckBox").click(function(){
							choosenAdultAndChildCount();
						});
						
						function choosenAdultAndChildCount(){
							var sumAdultCount = 0;
							var sumChildCount = 0;
							$("#tab-"+menuKey+"-transfer-content .transferTouristMain .all tbody tr").each(function(){
								if($(this).find(".transferCheckBox").is(":checked")){
									sumAdultCount += parseInt($(this).attr("data-entity-adultCount"));
									sumChildCount += parseInt($(this).attr("data-entity-childCount"));
								}
							});
							$("#tab-"+menuKey+"-transfer-content .transferTouristMain .choosenAdultAndChildCount").text("大人"+sumAdultCount+"小孩"+sumChildCount+"");
						}
						var lineProductIdFee = lineProductId;
						var startTimeFee = startTime;
						//初始化 组社团数据
						//arrangeTourist.getPartnerAgencyList($(".transferTouristMain select[name=toPartnerAgency"));
						arrangeTourist.partnerAgencyChoose();
						//绑定编辑费用点击事件
						$(".transferTouristMain .editFee").click(arrangeTourist.transferFee);
						//提交转客操作事件绑定
						$(".transferTouristMain .btn-saveTransfer").click(arrangeTourist.saveTransfer);
						//取消转客事件绑定
						$(".transferTouristMain .btn-cancelTransfer").click(function(){
							closeTab(menuKey+"-transfer");
						})
					}
				}
			});
		},
		/**
		 * 内转操作
		 * @param  {[type]} lineProductId 线路产品
		 * @param  {[type]} startTime     开始时间
		 * @return {[type]}
		 */
		inTransferTourist :function(lineProductId,startTime){
			$.ajax({
				url:""+APP_ROOT+"back/innerTransferOperation.do?method=getInTransferMainInfo&token="+$.cookie("token")+"&menuKey=resource_subsection&operation=view",
				type:"POST",
				data:"id="+lineProductId+"&startTime="+startTime+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					data.inTransferTouristGroupList = JSON.parse(data.inTransferTouristGroupList);
					var result = showDialog(data);
					if(result){
						var html = inTransferTemplate(data);
						addTab("resource_subsection-intransfer","内转操作",html);
						var tab = "tab-resource_subsection-intransfer-content";

						//初始化部门数据
						arrangeTourist.getBusinessGroupList($("#"+tab+" .inTransferTouristMain select[name=toBusinessGroup]"));
						//查看游客小组
						$("#"+tab+" .inTransferTouristMain .viewTouristGroup_transfer").click(arrangeTourist.viewTouristGroup);
						//填写费用事件绑定 
						$("#"+tab+" .inTransferTouristMain .editFee").click(arrangeTourist.inTransferFee);
						//绑定table的全选按钮事件
						$(".inTransferTouristMain .mainCheckBox").click(function(){
							var is_checked = $(this).is(':checked');
							$(".inTransferTouristMain .transferTouristGroupTbody tr").each(function(){
								if(is_checked){
									$(this).find(".transferCheckBox").prop("checked",true);
								}
								else{
									$(this).find(".transferCheckBox").prop("checked",false);
								}
							});
							choosenAdultAndChildCount();
						});
						$("#"+tab+" .inTransferTouristMain .all tbody tr .transferCheckBox").click(function(){
							choosenAdultAndChildCount();
						});
						function choosenAdultAndChildCount(){
							var sumAdultCount = 0;
							var sumChildCount = 0;
							$("#"+tab+" .inTransferTouristMain .all tbody tr").each(function(){
								if($(this).find(".transferCheckBox").is(":checked")){
									sumAdultCount += parseInt($(this).attr("data-entity-adultCount"));
									sumChildCount += parseInt($(this).attr("data-entity-childCount"));
								}
							});
							$("#"+tab+" .inTransferTouristMain .choosenAdultAndChildCount").text("大人"+sumAdultCount+"小孩"+sumChildCount+"");
						}
						$("#"+tab+" .btn-cancelTransfer").click(function(){
							closeTab("resource_subsection-intransfer");
						})
						$("#"+tab+" .btn-saveTransfer").click(function(){
							var touristGroupIds = [];
							$("#"+tab+" .inTransferTouristMain .all tbody tr").each(function(){
								if($(this).find(".transferCheckBox").is(":checked")){
									var id = $(this).attr("data-entity-id");
									touristGroupIds.push(id);
								}
							});
							var businessGroupId = $("#"+tab+" .inTransferTouristMain").find("[name=toBusinessGroup]").val() || 0;
							if(touristGroupIds.length == 0){
								showMessageDialog($( "#confirm-dialog-message" ), "请勾选小组")
							}else if(businessGroupId == 0){
								showMessageDialog($( "#confirm-dialog-message" ), "请选择部门")
							}else{
								$.ajax({
									url:""+APP_ROOT+"back/innerTransferOperation.do?method=saveInTransfer&token="+$.cookie("token")+"&menuKey=resource_subsection&operation=view",
									type:"POST",
									data:"touristGroupIds="+touristGroupIds+"&businessGroupId="+businessGroupId+"",
									dataType:"json",
									beforeSend:function(){
										globalLoadingLayer = openLoadingLayer();
									},
									success:function(data){
										layer.close(globalLoadingLayer);
										var result = showDialog(data);
										if(result){
											showMessageDialog($( "#confirm-dialog-message" ), data.message,function(){
												closeTab("resource_subsection-intransfer");
												arrangeTourist.listArrangeTourist(0,"","");
											});
										}
									}
								})
							}
							
						})
					}
				}
			})
		},
		//并团操作函数
		addTouristGroupMerge:function(){
			var $visitorObj=$('#T-Visitor-list'),
			    $merge = $visitorObj.find('.T-arrangeTouristMergeList .list'),
			    $that=$(this),$parents=$that.closest('tr'),
			    memberCount = $parents.attr("data-entity-memberCount");
			if(memberCount == 0){
				$(this).prop("checked",false);
				showMessageDialog($( "#confirm-dialog-message" ), "未分团人数为0，不能加入并团选择");
				return;
			}
			var lineProductId = $parents.attr("data-entity-id"),
			    startTime = $parents.attr("data-entity-startTime"),
			    days = $parents.attr("data-entity-days"),
			    lineProductName = $parents.attr("data-entity-name"),
			    lineProductType = $parents.attr("data-entity-type");
			if($that.is(":checked")){
				if($merge.find(".btn-"+lineProductId+"-"+startTime+"").length == 0){
					var button = '<button class="btn btn-white btn-default btn-round btn-'+lineProductId+'-'+startTime+'" style="margin-bottom:10px;margin-right:10px">'+
						'【'+lineProductName+'】 类别：'+lineProductType+'；出游日期：'+startTime+'；天数：'+days+'天'+
						'<i class="ace-icon fa fa-times icon-on-right red2"></i>'+
					'</button>';
					$merge.prepend(button);
					$merge.find('.btn-'+lineProductId+'-'+startTime+'').click(function(){
						arrangeTourist.bindRemoveTouristGroupMerge($merge,lineProductId,startTime)
					});
					var touristGroupMerge = {
						lineProductId : lineProductId,
						startTime : startTime,
						days : days,
						lineProductName : lineProductName,
						lineProductType : lineProductType
					}
					arrangeTourist.touristGroupMergeData.touristGroupMergeList.push(touristGroupMerge);
				}
				else{
					showMessageDialog($( "#confirm-dialog-message" ),"该游客组已经被加入过并团列表了");
				}
			}
			else{
				arrangeTourist.removeTouristGroupMergeData($merge,lineProductId,startTime);
			}
			
		},

		//查看团体信息-生成计划
		init_trfdivieEvent:function(){
			//查看团体信息
			$("#tab-"+menuKey+"-transfer-divide-content").find('.T-transferdivide-createTripPlan').on('click', function(event) {
				event.preventDefault();
				$that=$(this),$tr=$that.closest('tr'),id=$tr.attr("data-entity-id");
			    /*Act on the event */
				arrangeTourist.generationGroupPlan(id);

			})

			//给生成计划绑定事件
			/*$("#tab-"+menuKey+"-transfer-divide-content  .T-transferdivide-createTripPlan").on("click",function(){
				arrangeTourist.generationPlan("tab-"+menuKey+"-transfer-divide-content");
			});*/

			//绑定查看游客成员列表按钮事件   
			$("#tab-"+menuKey+"-transfer-divide-content .T-groupView").unbind().click(arrangeTourist.viewTouristGroup);

		},

		//生成计划函数
		generationPlan :function(tab){
			var tab = tab;
			var idJson = [];
			$("#"+tab+" .divideTouristMain .all tbody tr").each(function(){
				if($(this).find(".touristGroupCheckBox").is(":checked")){
					var id = {
						id : $(this).attr("data-entity-id")
					};
					idJson.push(id);
				}
			});
			idJson = JSON.stringify(idJson);
			if(idJson != "[]" && idJson.length > 2){
				$.ajax({
					url:""+APP_ROOT+"back/tripPlan.do?method=generationTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					type:"POST",
					data:"touristGroupId="+encodeURIComponent(idJson)+"",
					dataType:"json",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						data.addTripPlan.touristGroupList = JSON.parse(data.addTripPlan.touristGroupList);
						data.addTripPlan.lineProduct = JSON.parse(data.addTripPlan.lineProduct);
						data.addTripPlan.lineProductDayList = JSON.parse(data.addTripPlan.lineProductDayList);
						data.addTripPlan.bus = JSON.parse(data.addTripPlan.bus);
						data.addTripPlan.driver = JSON.parse(data.addTripPlan.driver);
						data.addTripPlan.busCompany = JSON.parse(data.addTripPlan.busCompany);
						data.addTripPlan.guide = JSON.parse(data.addTripPlan.guide);
						var result = showDialog(data);
						if(result){
							var html = addTripPlanTemplate(data);    
							//已修改提示
							var validator = rule.checkdCreateTripPlan($(".addTripPlan "));
							if($(".tab-"+menuKey+"-addTripPlan").length > 0) {
								addTab(menuKey+"-addTripPlan","生成计划");
								if(!!arrangeTourist.edited["addTripPlan"] && arrangeTourist.edited["addTripPlan"] !=""){
									showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
										 validator = rule.checkdCreateTripPlan($(".addTripPlan "))
										 if (!validator.form()) { 
											 return; 
										 }
										 arrangeTourist.saveAddTripPlan("tab-arrange_tourist-addTripPlan-content","addTripPlan",1,"","addTripPlanTouristTbody",validator,0);
										 arrangeTourist.edited["addTripPlan"] = "";
										 addTab(menuKey+"-addTripPlan","生成计划",html);
										 arrangeTourist.initAdd();
									},function(){
										addTab(menuKey+"-addTripPlan","生成计划",html);
										arrangeTourist.initAdd();								
										arrangeTourist.edited["addTripPlan"] = "";
									}); 							
								 }else{
									addTab(menuKey+"-addTripPlan","生成计划",html);
									arrangeTourist.initAdd();
								 } 
							}else{
								addTab(menuKey+"-addTripPlan","生成计划",html);	
								arrangeTourist.initAdd();
							}	
						}
					}
				});
			}else{
				var dialogObj = $( "#confirm-dialog-message" );
				dialogObj.removeClass('hide').dialog({
					modal: true,
					title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
					title_html: true,
					draggable:false,
					buttons: [ 
						{
							text: "确定",
							"class" : "btn btn-primary btn-minier",
							click: function() {
								$( this ).dialog( "close" );
							}
						}
					],
					open:function(event,ui){
						$(this).find("p").text("请选择游客小组");
					}
				});
			}
		},

		//团体分团操作
		generationGroupPlan:function(id){
			var id={ id : id },
			    idJson=[];
			    idJson.push(id);
			    idJson = JSON.stringify(idJson);
			$.ajax({
				    url:KingServices.build_url("tripPlan","generationTripPlan"),
					type:"POST",
					data:"touristGroupId="+encodeURIComponent(idJson)+"",
					dataType:"json",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						data.addTripPlan.touristGroupList = JSON.parse(data.addTripPlan.touristGroupList);
						data.addTripPlan.lineProduct = JSON.parse(data.addTripPlan.lineProduct);
						data.addTripPlan.lineProductDayList = JSON.parse(data.addTripPlan.lineProductDayList);
						data.addTripPlan.bus = JSON.parse(data.addTripPlan.bus);
						data.addTripPlan.driver = JSON.parse(data.addTripPlan.driver);
						data.addTripPlan.busCompany = JSON.parse(data.addTripPlan.busCompany);
						if (data.addTripPlan.quoteId!=null) {
							data.addTripPlan.busCompanyArrange = JSON.parse(data.addTripPlan.busCompanyArrange);
						};
						data.addTripPlan.guide = JSON.parse(data.addTripPlan.guide);
						var result = showDialog(data);
						var html = addTripPlanTemplate(data);
						addTab(menuKey+"-addTripPlan","生成计划",html);
						arrangeTourist.initAdd();
					
					}
				});
		},
		initAdd : function(){
			$('.addTripPlan').on("change",function(){
				arrangeTourist.edited["addTripPlan"] = "addTripPlan";
			});	
			var tab = "tab-arrange_tourist-addTripPlan-content";
			var validator = rule.checkdCreateTripPlan($(".addTripPlan "));
			//小组总人数计算
			arrangeTourist.tripPlanAllMemberCount("tripPlanAllMemberCount",tab,"addTripPlanTouristTbody");
			//集合时间   时间控件
			arrangeTourist.dateTimePicker();

			//短信发送  定时控件
			arrangeTourist.setTripPlanPicker();

			//游客短信及时发送显示隐藏
			$("#"+tab+" .checkbox").unbind().click(function(){
				if ($("#"+tab+" .checkbox input[name=executeTimeType]:radio:checked").val()==1) {
					$(this).parent().parent().find(".addMergePlanTime").removeClass("hide");
				} else{
					$(this).parent().parent().find(".addMergePlanTime").addClass("hide");
				};

			})  



			//查看旅游小组成员
			$("#"+tab+" .addTripPlanView").unbind().click(arrangeTourist.viewTouristGroup);
			//删除小组   addTripPlanViewDelete
			$("#"+tab+" .addTripPlanDelete").off().on("click",function(){
				var obj = $(this);
				var id = $(this).attr("data-entity-id");
				arrangeTourist.delTrouristGroup(obj,id,tab,"addTripPlanTouristTbody")
			})
			//添加游客小组 （多选）
			$("#"+tab+" .addTouristGroup").on("click",function(){
				var lineProductId = $(".addTripPlanMain input[name=lineProductId]").val();
				var startTime = $(".addTripPlanMain input[name=startTime]").val();
				arrangeTourist.addTouristGroup(lineProductId,startTime,tab,"addTripPlanTouristTbody");
			})
			//拉下查询
			arrangeTourist.seatCountChoose();
			arrangeTourist.brandChoose();
			arrangeTourist.licenseNumberChoose();
			arrangeTourist.driverChoose();
			arrangeTourist.guideChoose();
			//小组序号
			arrangeTourist.MenberNumber("addTripPlanTouristTbody");
			//取消生成计划   btn-cancelTripPlan
			$("#"+tab+" .btn-cancelTripPlan").click(function(){
				closeTab(menuKey+"-addTripPlan");
				arrangeTourist.edited["addTripPlan"] = "";
			})
			//保存生成计划
			$("#"+tab+" .btn-saveTripPlan").click(function(){
				arrangeTourist.saveAddTripPlan(tab,"addTripPlanMain",1,"","addTripPlanTouristTbody",validator,1);
			})			
			arrangeTourist.addResource(tab);
		},
		//添加资源
		addResource : function(tab){
			$container = $("#"+tab);
			$container.find('.T-addGuideResource').on('click' , {function : KingServices.addGuide ,type : ".widget-main" ,  name : "AddTPchooseGuide" , id : "AddTPchooseGuideId" , mobileNumber : "GmobileNumber"} , KingServices.addResourceFunction);
			$container.find(".T-addBusCompanyResource").off('click').on("click",{function : KingServices.addBusCompany}, KingServices.addResourceFunction);
			$container.find(".T-addBusResource,.T-addDriverResource").off('click').on("click",{
				function : KingServices.addBusDriver,
				busCompanyName : "busCompany",
				busCompanyId : "busCompanyId",
				busLicenseNumberId : "busLicenseNumberId",
				busLicenseNumber : "LicenseNumber",
				busbrand : "needBusBrand",
				seatCount : "seatCount",
				driverName : "driverName",
				driverId : "driverId",
				driverMobileNumber : "DmobileNumber",
				type : ".widget-main"
			}, KingServices.addBusDriverFunction);
		},
		tripPlanAllMemberCount :function(className,tab,tbody){
			var tr = $("#"+tab+" ."+tbody+"").find("tr"),
				trMemberCount = 0,pidArray = ['---'],pidIsThrer = 0;
			tr.each(function(){
				var $that = $(this),
				$pid = $that.attr("data-entity-pid");
				pidIsThrer = 0;
				console.log($pid);
				if (!!$pid) {
					for(var i = 0,$length = pidArray.length;i < $length;i++){
						if (pidArray[i] == $pid) {
							pidIsThrer = 1;
								console.log("数组里有的pid")
							break;
						}else{
							if (i == $length - 1) {
								console.log("数组里没有的pid")
								pidArray.push($pid);
								break;
							}
						}
					}
				}
				console.log(pidIsThrer)
				console.log(pidArray)
				if (pidIsThrer == 0) {
					trMemberCount += parseInt($(this).find(".tripPlanTrMemberCount").text());
				}
				console.log("----------------------------")
			})
			$("#"+tab+" ."+className+"").text(trMemberCount);
			trMemberCount = 0;
		},
		getPartnerAgencyList:function(obj,partnerAId){
			$.ajax({
				url:""+APP_ROOT+"back/partnerAgency.do?method=findPartnerAgencyByOtherTravelAgency&token="+$.cookie("token")+"&menuKey=resource_partnerAgency&operation=view",
				type:"POST",
				showLoading:false,
				dataType:"json",
				success:function(data){
					var html = "<option value=''>未选择</option>";
					var partnerAgencyList = JSON.parse(data.partnerAgencyList);
					if(partnerAgencyList != null && partnerAgencyList.length > 0){ 
						for(var i=0;i<partnerAgencyList.length;i++){
							if (partnerAId != null && partnerAgencyList[i].id == partnerAId) {
								html += "<option selected=\"selected\" value='"+partnerAgencyList[i].id+"'>"+partnerAgencyList[i].travelAgencyName+"</option>";
							} else {
								html += "<option value='"+partnerAgencyList[i].id+"'>"+partnerAgencyList[i].travelAgencyName+"</option>";
							}
						}
						$(obj).html(html);
					}
			    	//给组社团select绑定事件
			    	$(".transferTouristMain select[name=toPartnerAgency]").change(function(){
			    		var partnerAId = $(this).val();
			    			for(var i=0;i<partnerAgencyList.length;i++){
							if (partnerAId == partnerAgencyList[i].id && partnerAId != "") {
								$(".transferTouristMain input[name=toPartnerAgency]").val(partnerAgencyList[i].managerName);
							} else {
								}
						} 
			    	});
				}
			})
		},
		partnerAgencyChoose :function(){
			var choosePartner = $("#tab-arrange_tourist-transfer-content .chooseToPartnerAgency")
			choosePartner.autocomplete({
				minLength:0,
				select:function(event,ui){
					var $obj = $(this);
					var objParent = $(this).parent();
					objParent.find("input[name=toPartnerAgencyId]").val(ui.item.id).trigger('change');
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent();
						objParent.find("input[name=toPartnerAgencyId]").val("");
					}
				}
			}).off("click").click(function(){
				var $this = this;
				$.ajax({
					url:""+APP_ROOT+"back/partnerAgency.do?method=findPartnerAgencyByOtherTravelAgency&token="+$.cookie("token")+"&menuKey=resource_partnerAgency&operation=view",
	                dataType: "json",
	                beforSend:function(){
	                	globalLoadingLayer = openLoadingLayer()
	                },
	                success: function(data) {
	                	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var contactList = JSON.parse(data.partnerAgencyList);
							if(contactList != null && contactList.length>0){
									for(var i=0;i<contactList.length;i++){
										contactList[i].value = contactList[i].travelAgencyName;
									}
								$($this).autocomplete('option','source', contactList);
								$($this).autocomplete('search', '');
							}else{
								layer.tips('没有数据', $this, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
	                }
	             });
			})
		},
		getBusinessGroupList :function(obj){
			$.ajax({
				url:""+APP_ROOT+"back/innerTransferOperation.do?method=getBusinessGroupList&token="+$.cookie("token")+"&menuKey=resource_subsection&operation=view",
				type:"POST",
				dateType:"json",
				success:function(data){
					var html = "<option value='' selected='selected'>未选择</option>";
					var businessGroupList = JSON.parse(data.businessGroupList);
					if(businessGroupList != null && businessGroupList.length > 0){
						for(var i=0;i<businessGroupList.length;i++){
							html += "<option value='"+businessGroupList[i].id+"'>"+businessGroupList[i].name+"</option>";
						}
						$(obj).html(html);
					}
					//给组社团select绑定事件
			    	/*$(obj).change(function(){
			    		var partnerAId = $(this).val();
			    			for(var i=0;i<businessGroupList.length;i++){
							if (partnerAId == businessGroupList[i].id && partnerAId != "") {
								$(obj).val(partnerAgencyList[i].managerName);
							} else {
								}
						} 
			    	});*/
				}
			})
		},
		touristGroupMergeData:{
			touristGroupMergeList:[]
		},
		//选择计划函数
		choosePlan :function(data){
			var touristGroupIdJson = [],
				choose_lineProductId = data.choose_lineProductId,
				choose_startTime = data.choose_startTime;
			$("#tab-"+menuKey+"-divide-content .divideTouristMain .all tbody tr").each(function(){
				if($(this).find(".touristGroupCheckBox").is(":checked")){
					var id = {
						id : $(this).attr("data-entity-id")
					};
					touristGroupIdJson.push(id);
				}
			});
			touristGroupIdJson = JSON.stringify(touristGroupIdJson);

			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=getTripPlanList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data:"lineProductId="+choose_lineProductId+"&startTime="+choose_startTime+"&touristGroupIdJson="+encodeURIComponent(touristGroupIdJson)+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result =showDialog(data);
					if(result){
				    	data.lineProduct = JSON.parse(data.lineProduct);
				    	data.tripPlanList = JSON.parse(data.tripPlanList);
						var html = viewTripPlanTemplate(data);
						var viewTripPlanLayer = layer.open({
						    type: 1,
						    title:"选择计划",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['60%', '50%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	//chooseTripPlanTbody
						    	//saveTouristGroupToTripPlan 方法名
						    	$(".chooseTripPlanMain .groupView").click(function(){
						    		var id = $(this).attr("data-entity-id");
						    		arrangeTourist.viewTripPlan(id);
						    	})
						    	$(".chooseTripPlanMain .btn-chooseTripPlan").click(function(){
						    		var tripPlanId = "";
						    		$(".chooseTripPlanMain .chooseTripPlanTbody tr").each(function(i){
						    			if($(".chooseTripPlanMain .chooseTripPlanTbody tr").eq(i).find(".ridioCheck").is(":checked")){
											tripPlanId = $(".chooseTripPlanMain .chooseTripPlanTbody tr").eq(i).attr("data-entity-id");
										}
						    		})
							    	$.ajax({
							    		url:""+APP_ROOT+"back/tripPlan.do?method=saveTouristGroupToTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
										type:"POST",
										data:"tripPlanId="+tripPlanId+"",
										dataType:"json",
										beforeSend:function(){
											globalLoadingLayer = openLoadingLayer();
										},
										success:function(data){
											layer.close(globalLoadingLayer);
											var result = showDialog(data);
											if(result){
												showMessageDialog($( "#confirm-dialog-message" ),"分团成功",function(){
													layer.close(viewTripPlanLayer);
													closeTab(menuKey+"-divide");
													arrangeTourist.listArrangeTouristMain();
												});
											}
										}
							    	})
						    	})
						    }
						})
					}
				}
			})	
		},
		//提交转客函数   
		saveTransfer :function(){
			var touristGroupId = [],     
			$transferCheckObj=$(".transferTouristMain .transferTouristGroupTbody tr");    
			$transferCheckObj.each(function(){
				if($(this).find(".transferCheckBox").is(":checked")==true){
					var id = {
							id : $(this).attr("data-entity-id")
						};
					touristGroupId.push(id);
				}
			})
			touristGroupId = JSON.stringify(touristGroupId);
			
			var transferTravelAgencyId = $("#tab-arrange_tourist-transfer-content .transferTouristMain input[name=toPartnerAgencyId]").val();
			if(!!transferTravelAgencyId){
				if($transferCheckObj.find(".transferCheckBox").is(":checked")==true){    
						$.ajax({
							url:""+APP_ROOT+"back/transTourist.do?method=saveTransfer&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=add",
							data:"partnerAgencyId="+transferTravelAgencyId+"&touristGroupId="+encodeURIComponent(touristGroupId)+"",
							dataType:"json",
							type:"POST",
							beforeSend:function(){
								globalLoadingLayer = openLoadingLayer();
							},
							success:function(data){
								layer.close(globalLoadingLayer);
								var result = showDialog(data);
					        	if(result){
					        		showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
										$(".tab-arrange_tourist-transfer i.tab-close").trigger("click");
										window.open(APP_ROOT+"back/transTourist.do?method=exportTransfer&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view"+"&idJson="+touristGroupId+"");
										arrangeTourist.listArrangeTouristMain();
					        		})
					        	}
							}
						})
					}else{
	                    showMessageDialog($( "#confirm-dialog-message" ), "请选择游客小组信息！");  
				}
			}else{
				showMessageDialog($( "#confirm-dialog-message" ), "请选择同行地接信息！");  
			}
		},
		//集合时间控件
		dateTimePicker :function(){
			$(".dataTimePicker").datetimepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'L',
				language: 'zh-CN'
			});
		},
		//时间控件
		datePicker :function(){
			$(".datePicker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			});
		},

		//发团定时   
		setTripPlanPicker:function(){
	    	$(".addMergePlanTime").datetimepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'L',
				language: 'zh-CN'
			});
		},
		

		bindRemoveTouristGroupMerge:function($merge,lineProductId,startTime){
			var obj = $(this);
			var dialog = $( "#confirm-dialog-message" ).removeClass('hide').dialog({
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
							obj.remove();
							$( this ).dialog( "close" );
							arrangeTourist.removeTouristGroupMergeData($merge,lineProductId,startTime);
						} 
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确认要从并团列表中移除该条游客小组？");
				}
			});
		},
		removeTouristGroupMergeData:function($merge,lineProductId,startTime){
			$merge.find(".btn-"+lineProductId+"-"+startTime+"").remove();
			$("#"+tabId+" .arrangeTouristMain .arrangeTouristList .tr-"+lineProductId+"-"+startTime+" .touristGroupMergeCheckBox").prop("checked",false);
			var touristGroupMergeList = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
			if(touristGroupMergeList.length > 0){
				for(var i=0;i<touristGroupMergeList.length;i++){
					if(touristGroupMergeList[i].lineProductId == lineProductId && touristGroupMergeList[i].startTime == startTime){
						touristGroupMergeList.splice(i,1);
						break;
					}
				}
			}
		},
		startTouristGroupMerge:function(){
			var data = arrangeTourist.touristGroupMergeData;
			if(data.touristGroupMergeList.length > 0){
				var html = chooseMergeTemplate(data);
				var chooseMergeLayer = layer.open({
				    type: 1,
				    title:"选择安排模板",
				    skin: 'layui-layer-rim', //加上边框
				    area: ['70%', '70%'], //宽高
				    zIndex:1028,
				    content: html,
				    success:function(){
				    	$(".chooseMerge .btn-mergeAddPlan").click(function(){
				    		var lineProductId = "";
				    		var startTime = "";
				    		$(".chooseMerge .chooseMergeTbody tr").each(function(i){
				    			if($(this).find(".ridioCheck").is(":checked")){
				    				lineProductId = $(this).attr("data-entity-id");
									startTime = $(this).attr("data-entity-startTime");
								}
				    		})
				    		var mergeDataJson = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
				    		mergeDataJson = JSON.stringify(mergeDataJson);
				    		if(lineProductId !=null && lineProductId.length > 0){
				    			$.ajax({
						    		url:""+APP_ROOT+"back/tripPlan.do?method=addTripPlanByMergeData&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
									type:"POST",
									data:"lineProductId="+lineProductId+"&startTime="+startTime+"&mergeDataJson="+encodeURIComponent(mergeDataJson)+"",
									dataType:"json",
									beforeSend:function(){
										globalLoadingLayer = openLoadingLayer();
									},
									success:function(data){
										layer.close(globalLoadingLayer);
										var result = showDialog(data);
										if(result){
											layer.close(chooseMergeLayer);
											var validatorCreateTripPlan;
											data.addTripPlan.touristGroupList = JSON.parse(data.addTripPlan.touristGroupList);
											data.addTripPlan.lineProduct = JSON.parse(data.addTripPlan.lineProduct);
											data.addTripPlan.lineProductDayList = JSON.parse(data.addTripPlan.lineProductDayList);
											data.addTripPlan.bus = JSON.parse(data.addTripPlan.bus);
											data.addTripPlan.busCompany = JSON.parse(data.addTripPlan.busCompany);
											data.addTripPlan.guide = JSON.parse(data.addTripPlan.guide);
											var html = addMergePlanTemplate(data);
											//已修改提示
											var validator = rule.checkdCreateTripPlan($(".addMergePlan"));
											if($(".tab-"+menuKey+"-mergeAddTripPlan").length > 0) {
												addTab(menuKey+"-mergeAddTripPlan","并团-生成计划")
												if(!!arrangeTourist.edited["mergeAddTripPlan"] && arrangeTourist.edited["mergeAddTripPlan"] !=""){
													showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
														 validator = rule.checkdCreateTripPlan($(".addMergePlan"));
														 if (!validator.form()) { 
															 return; 
														 }
														 arrangeTourist.saveAddTripPlan("tab-arrange_tourist-mergeAddTripPlan-content","addMergePlan",0,"arrange_tourist-mergeAddTripPlan","mergeTripPlanTouristTbody",validator,1);
														 arrangeTourist.edited["mergeAddTripPlan"] = "";
														 addTab(menuKey+"-mergeAddTripPlan","并团-生成计划",html)
														 arrangeTourist.initMergeAdd();
														 validator = rule.checkdCreateTripPlan($(".addMergePlan"));
													},function(){
														addTab(menuKey+"-mergeAddTripPlan","并团-生成计划",html)
														 arrangeTourist.initMergeAdd();								
														arrangeTourist.edited["mergeAddTripPlan"] = "";
													}); 							
												 }else{
													addTab(menuKey+"-mergeAddTripPlan","并团-生成计划",html)	
													 arrangeTourist.initMergeAdd();
												 } 
											}else{
												addTab(menuKey+"-mergeAddTripPlan","并团-生成计划",html)	
												 arrangeTourist.initMergeAdd();
											}	
										}
									}
						    	})
				    		}else{
				    			var dialogObj = $( "#confirm-dialog-message" );
								dialogObj.removeClass('hide').dialog({
									modal: true,
									title: "<div class='widget-header widget-header-small'><h4 class='smaller'><i class='ace-icon fa fa-info-circle'></i> 消息提示</h4></div>",
									title_html: true,
									draggable:false,
									buttons: [ 
										{
											text: "确定",
											"class" : "btn btn-primary btn-minier",
											click: function() {
												$( this ).dialog( "close" );
											}
										}
									],
									open:function(event,ui){
										$(this).find("p").text("请选择线路产品");
									}
								});
				    		}
				    	})
				    	$(".chooseMerge .btn-chooseMergePlan").click(function(){
				    		var mergeDataJson = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
				    		mergeDataJson = JSON.stringify(mergeDataJson);
				    		$.ajax({
					    		url:""+APP_ROOT+"back/tripPlan.do?method=findNoStartTripPlanList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
								dataType:"json",
								beforeSend:function(){
									globalLoadingLayer = openLoadingLayer();
								},
								success:function(data){
									data.tripPlanList = JSON.parse(data.tripPlanList);
									layer.close(globalLoadingLayer);
									var result = showDialog(data);
									if(result){
										var html =chooseTravelLineTemplate(data);
										var chooseTravelLinelayer =layer.open({
							    			type: 1,
										    title:"选择计划",
										    skin: 'layui-layer-rim', //加上边框
										    area: ['85%', '80%'], //宽高
										    zIndex:1029,
										    content: html,
										    success: function(data) {
										    	
										    	$(".groupView").click(function(){
										    		var id = $(this).attr("data-entity-id");
										    		arrangeTourist.viewTripPlan(id);
										    	})
										    	
										    	var $obj = $(".chooseMergeTripPlan");//chooseTripPlanTbody
										    	var tripPlanId = "";
										    	$obj.find(".btn-chooseMergeTripPlan").click(function(){
										    		var chooseMergeTr = $obj.find(".chooseTripPlanTbody tr");
										    		chooseMergeTr.each(function(i){
										    			if(chooseMergeTr.eq(i).find("input[name=form-field-radio]").is(":checked")==true){
										    				tripPlanId = chooseMergeTr.eq(i).attr("data-entity-id");
										    			}
										    		})
										    		$.ajax({
										    			url:""+APP_ROOT+"back/tripPlan.do?method=chooseTripPlanByMerge&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
														data:"tripPlanId="+tripPlanId+"&mergeDataJson="+encodeURIComponent(mergeDataJson)+"",
														type:"POST",
										    			dataType:"json",
														beforeSend:function(){
															globalLoadingLayer = openLoadingLayer();
														},
														success:function(data){
															layer.close(globalLoadingLayer);
															var result = showDialog(data);
															if(result){
																layer.close(chooseTravelLinelayer);
																layer.close(chooseMergeLayer);
																arrangeTourist.updateTripPlan(data);
//																showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
//																	layer.close(chooseTravelLinelayer);
//																	layer.close(chooseMergeLayer);
//																	arrangeTourist.listArrangeTouristMain();
//																})
															}
														}
										    		})		
										    	})
										    }
									    });
									}
								}
				    		})
				    	})
				    }
				})
			}
			else{
				showMessageDialog($( "#confirm-dialog-message" ),"你还没有勾选任何需要并团的游客小组");
			}
		},
		initMergeAdd : function(){
			var tab = "tab-arrange_tourist-mergeAddTripPlan-content";
			$('.addMergePlan').on("change",function(){
				arrangeTourist.edited["mergeAddTripPlan"] = "mergeAddTripPlan";
			});	
			//小组总人数计算
			arrangeTourist.tripPlanAllMemberCount("tripPlanAllMemberCount",tab,"mergeTripPlanTouristTbody");
			//生成计划验证  
			var validator = rule.checkdCreateTripPlan($(".addMergePlan"));        
			
			//小组序号自动
			arrangeTourist.MenberNumber("mergeTripPlanTouristTbody");
			arrangeTourist.MenberNumber("addTripPlanTouristTbody");
			//出游日期控件
			arrangeTourist.datePicker();
			//集合时间   时间控件
			arrangeTourist.dateTimePicker();


			//短信发送时间控件
			arrangeTourist.setTripPlanPicker();

			//游客短信及时发送显示隐藏
			$("#"+tab+" .checkbox").unbind().click(function(){
				if ($("#"+tab+" .checkbox input[name=executeTimeType]:radio:checked").val()==1) {
					$(this).parent().parent().find(".addMergePlanTime").removeClass("hide");
					$(this).parent().parent().find(".addMergePlanTime").find('input[name=executeTime]').val('');
				} else{
					$(this).parent().parent().find(".addMergePlanTime").addClass("hide");
				};

			});

			//查看旅游小组成员
			$("#"+tab+" .addMergePlan .addTripPlanView").click(arrangeTourist.viewTouristGroup);
			//删除小组  
			$("#"+tab+" .addMergePlan .addTripPlanDelete").on("click",function(){
				var obj = $(this);
				var id = $(this).attr("data-entity-id");
				arrangeTourist.delTrouristGroup(obj,id,tab,"mergeTripPlanTouristTbody")
			})
			//拉下查询
			arrangeTourist.seatCountChoose();
			arrangeTourist.brandChoose();
			arrangeTourist.licenseNumberChoose();
			arrangeTourist.driverChoose();
			arrangeTourist.guideChoose();
			//关闭生成计划 
			$("#"+tab+" .addMergePlan .btn-cancelTripPlan").click(function(){
				closeTab(menuKey+"-mergeAddTripPlan");
				arrangeTourist.edited["mergeAddTripPlan"] = "";
			})
			//保存生成计划
			$("#"+tab+" .addMergePlan .btn-saveTripPlan").click(function(){
				arrangeTourist.saveAddTripPlan(tab,"addMergePlan",0,"arrange_tourist-mergeAddTripPlan","mergeTripPlanTouristTbody",validator,1);
			})
			//新增资源
			arrangeTourist.addResource(tab);
		},
		viewTouristGroup :function(){
			var id = $(this).attr("data-entity-id");
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=getMemberList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"touristGroupId="+id+"",
				datatype:"json",
				beforSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						var memberList = JSON.parse(data.memberList);
						data.memberList = memberList;
						var html = viewGroupTemplate(data);
						var viewGroupTemplateLayer = layer.open({
						    type: 1,
						    title:"查看小组信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['60%', '50%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	
						    }
						})
					}
				}
				
			})
		},
		MenberNumber :function(className){
			$("."+className+" tr").each(function(i){
					$(this).children().eq(0).text(i+1);
			})
		},
		//添加游客小组函数
		addTouristGroup :function(lineProductId,startTime,tab,tbody){
			
			var excludeIdJson = [];
			$(".addTripPlanMain .addTripPlanTouristTbody tr").each(function(i){
				var id = {
						id : $(this).attr("data-entity-id")
					};
				excludeIdJson.push(id);
			})
			excludeIdJson = JSON.stringify(excludeIdJson);
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=findTouristGroupInfo&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=delete",
				type:"POST",
				data:"lineProductId="+lineProductId+"&startTime="+startTime+"&type=1"+"&excludeIdJson="+encodeURIComponent(excludeIdJson)+"",
				dataType:"json",
				beforeSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.lineProduct = JSON.parse(data.lineProduct);
						data.touristGroupList = JSON.parse(data.touristGroupList);
						var html = addGroupTemplate(data);
						var addGroupTemplateLayer = layer.open({
						    type: 1,
						    title:"添加游客小组",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['60%', '50%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	//选择游客小组并提交（多选）
						    	//绑定table的全选按钮事件
								$(".addTouristGroupList .all .addMainCheckBox").click(function(){
									var is_checked = $(this).is(':checked');
									$(".addTouristGroupList .all tbody tr").each(function(){
										if(is_checked){
											$(this).find(".touristGroupCheckBox").prop("checked",true);
										}
										else{
											$(this).find(".touristGroupCheckBox").prop("checked",false);
										}
									});
								});
								//查看添加小组游客
								$(".addTouristGroupList .addGroupView").click(arrangeTourist.viewTouristGroup);
								//提交按钮事件绑定
								$(".addTouristGroupList .btn-submit-addtravelLine").click(function(){
									var addGroupIdJson = [];
									$(".addTouristGroupList .all tbody tr").find("input:checked").each(function(i){
										var parents = $(this).parent().parent().parent(),
											groupJson = {
												id : parents.attr("data-entity-id"),
												creatorName : $.text(parents.find("td[name=creatorName]")),
												lineProductName : $.text(parents.find("td[name=lineProductName]")),
												travelAgencyName : $.text(parents.find("td[name=travelAgencyName]")),
												contactMemberName : $.text(parents.find("td[name=contactMemberName]")),
												contactMemberMobileNumber : $.text(parents.find("td[name=contactMemberMobileNumber]")),
												areaData : $.text(parents.find("td[name=areaData]")),
												ageData : $.text(parents.find("td[name=ageData]")),
												peopleCount : $.text(parents.find("td[name=peopleCount]")),
												currentNeedPayMoney : $.text(parents.find("td[name=currentNeedPayMoney]")),
												hotelLevel : $.text(parents.find("td[name=hotelLevel]")),
												includeSelfPay : $.text(parents.find("td[name=includeSelfPay]")),
												remark : $.text(parents.find("td[name=remark]")),
											}
										addGroupIdJson.push(groupJson);
									});
									for(var i in addGroupIdJson){
										//addGroupIdJson[i];
										if(i<addGroupIdJson.length){
										var html=
											"<tr data-entity-id=\""+addGroupIdJson[i].id+"\">"+
												"<td></td>"+
												"<td>"+addGroupIdJson[i].creatorName+"</td>"+
												"<td>"+addGroupIdJson[i].lineProductName+"</td>"+
												"<td>"+addGroupIdJson[i].travelAgencyName+"</td>"+
												"<td>"+addGroupIdJson[i].contactMemberName+"</td>"+
												"<td>"+addGroupIdJson[i].contactMemberMobileNumber+"</td>"+
												"<td>"+addGroupIdJson[i].areaData+"</td>"+
												"<td>"+addGroupIdJson[i].ageData+"</td>"+
												"<td class=\"tripPlanTrMemberCount\">"+addGroupIdJson[i].peopleCount+"</td>"+
												"<td>"+addGroupIdJson[i].currentNeedPayMoney+"</td>"+
												"<td>"+addGroupIdJson[i].hotelLevel+"</td>"+
												"<td>"+addGroupIdJson[i].includeSelfPay+"</td>"+
												"<td>"+addGroupIdJson[i].remark+"</td>"+
												"<td>"+
												"<div class=\"hidden-sm hidden-xs btn-group\">"+
												"<a data-entity-id=\""+addGroupIdJson[i].id+"\" class=\"cursor addTripPlanView\">"+
													"查看"+
												"</a>"+"<a class='cursor'> |</a>"+
												"<a data-entity-id=\""+addGroupIdJson[i].id+"\" class=\"cursor addTripPlanDelete\">"+
													"删除"+
												"</a>"+
												"</div>"+
												"</td>"+
											"</tr>";
								    		$(".addTripPlanMain .addTripPlanTouristTbody").append(html);
										}
									}
									layer.close(addGroupTemplateLayer);
									arrangeTourist.MenberNumber("addTripPlanTouristTbody");
									$(".addTripPlanMain .addTripPlanDelete").off().on("click",function(){
										var obj = $(this);
										var id = $(this).attr("data-entity-id");
										arrangeTourist.delTrouristGroup(obj,id,tab,tbody)
									})
									$(".addTripPlanMain .addTripPlanView").click(arrangeTourist.viewTouristGroup);
							    	//小组总人数计算
							    	arrangeTourist.tripPlanAllMemberCount("tripPlanAllMemberCount",tab,tbody);
						    	})
						    }
						})
					}
				}
			})
		},
		delTrouristGroup :function(obj,id,tab,tbody){
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
							obj.parent().parent().parent().remove();
							arrangeTourist.MenberNumber("addTripPlanTouristTbody");
							arrangeTourist.MenberNumber("updateTripPlanTouristTbody");
					    	//小组总人数计算
					    	arrangeTourist.tripPlanAllMemberCount("tripPlanAllMemberCount",tab,tbody);
					    	console.log(tab)
					    	console.log(tbody)
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确定要移除该小组吗？");
				}
			});
		},
		guideChoose :function(){
			//导游autocomplete
			$(".addTripPlanMain .AddTPchooseGuide").autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						$(this).closest('.widget-main').find("input[name=GmobileNumber]").val("");
						$(this).closest('.widget-main').find("input[name=AddTPchooseGuideId]").val("");
					}
				},
				select:function(event,ui){
					$(this).blur();
					var obj = this;
					$.ajax({
						url:""+APP_ROOT+"back/guide.do?method=getGuideById&token="+$.cookie("token")+"&menuKey=resource_guide&operation=view",
	                    dataType: "json",
	                    showLoading:false,
	                    data:"id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var guide = JSON.parse(data.guide);
								$(obj).closest('.widget-main').find("input[name=AddTPchooseGuideId]").val(guide.id).trigger('change');
								$(obj).closest('.widget-main').find("input[name=GmobileNumber]").val(guide.mobileNumber);
							}
	                    }
	                });
				}
			}).click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/guide.do?method=findAll&token="+$.cookie("token")+"&menuKey=resource_guide&operation=view",
                    dataType: "json",
                    showLoading:false,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var guideList = JSON.parse(data.guideList);
							if(guideList != null && guideList.length > 0){
								for(var i=0;i<guideList.length;i++){
									guideList[i].value = guideList[i].realname;
								}
							}
							$(obj).autocomplete('option','source', guideList);
							$(obj).autocomplete('search', '');
						}
                    }
                });
			});
		},
		/*busChoose : function(){
		//给车辆绑定autocomplete事件
			chooseBusLicenseNumber = $(".addTripPlanMain .chooseBusLicenseNumber").autocomplete({
				minLength:0,
				select:function(event,ui){
					
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=findBusDetailById&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
	                    dataType: "json",
	                    data:"id="+ui.item.id,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var d = JSON.parse(data.bus), objParent = $(".addTripPlanMain");
								objParent.find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
								objParent.find("input[name=seatCount]").val(d.seatCount);
							}
	                    }
	                 });
					
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent().parent().parent();
						objParent.find("input[name=busLicenseNumberId]").val("");
						objParent.find("input[name=licenseNumber]").val("");
						objParent.find("input[name=seatCount]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objBus = this;
				var busCompanyId = $(".addTripPlanMain").find("input[name=busCompanyId]").val();
				if(busCompanyId){
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=findBusListBySeat&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
	                    dataType: "json",
	                    data:"id="+busCompanyId+"&seatCount="+0,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var busList = JSON.parse(data.busList);
								
								
								if(busList != null && busList.length){
									for(var i=0;i<busList.length;i++){
										busList[i].value = busList[i].licenseNumber;
									}
								}
								$(objBus).autocomplete('option','source', busList);
								$(objBus).autocomplete('search', '');
								
							}
	                    }
	                 });
				}else{
					layer.tips('请选择车队', objBus, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		driverChoose : function(){
			//给司机绑定autocomplete事件
			chooseDriver = $(".addTripPlanMain .chooseDriver").autocomplete({
				minLength:0,
				select:function(event,ui){
					//获得busCompanyId，到后台查询driver相应信息
					$.ajax({
						url:""+APP_ROOT+"back/tripPlan.do?method=getDriverById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	                    dataType: "json",
	                    data:"id="+ui.item.id,
	                    success: function(data) {

	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var d = JSON.parse(data.driverNumber), objParent = $(".addTripPlanMain");
								objParent.find("input[name=driverId]").val(d.id).trigger('change');
								objParent.find("input[name=DmobileNumber]").val(d.mobileNumber);
							}
	                    }
	                 });
					
				},
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						var objParent = $(this).parent().parent().parent();
						objParent.find("input[name=driverId]").val("");
						objParent.find("input[name=DmobileNumber]").val("");
					}
				}
			}).unbind("click").click(function(){
				var objBus = this;
				var busCompanyId = $(".addTripPlanMain").find("input[name=busCompanyId]").val();
				if(busCompanyId){
					$.ajax({
						url:""+APP_ROOT+"back/tripPlan.do?method=getDriverBybusCompany&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
	                    dataType: "json",
	                    data:"id="+busCompanyId,
	                    success: function(data) {
	                    	layer.close(globalLoadingLayer);
							var result = showDialog(data);
							if(result){
								var driverList = JSON.parse(data.driverList);
								if(driverList != null && driverList.length){
									for(var i=0;i<driverList.length;i++){
										driverList[i].value = driverList[i].name;
									}
								}
								$(objBus).autocomplete('option','source', driverList);
								$(objBus).autocomplete('search', '');
							}
	                    }
	                 });
				}else{
					layer.tips('请选择车队', objBus, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
				
			});
		},
		busCompanyChoose : function(){
			//车队-车牌autocomplete  
			var chooseBusLicenseNumber= $(".addTripPlanMain .chooseBusCompany");
			chooseBusLicenseNumber.autocomplete({
				minLength:0,
				change:function(event,ui){
					if(ui.item == null){
						$(this).val("");
						$(this).parent().parent().parent().find("input[name=busCompanyId]").val("");
						$(this).parent().parent().parent().find("input[name=LicenseNumber]").val("");
						$(this).parent().parent().parent().find("input[name=busLicenseNumberId]").val("");
						$(this).parent().parent().parent().find("input[name=seatCount]").val("");
						$(this).parent().parent().parent().parent().find("input[name=driverName]").val("");
						$(this).parent().parent().parent().parent().find("input[name=driverId]").val("");
						$(this).parent().parent().parent().parent().find("input[name=DmobileNumber]").val("");
					}
				},
				select:function(event,ui){
					$(this).blur();
					
					$(this).parent().parent().parent().find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
					$(this).parent().parent().parent().find("input[name=LicenseNumber]").val("");
					$(this).parent().parent().parent().find("input[name=busLicenseNumberId]").val("");
					$(this).parent().parent().parent().find("input[name=seatCount]").val("");
					$(this).parent().parent().parent().parent().find("input[name=driverName]").val("");
					$(this).parent().parent().parent().parent().find("input[name=driverId]").val("");
					$(this).parent().parent().parent().parent().find("input[name=DmobileNumber]").val("");
					
					//var obj = this, mobileNumber = "";
					
				}
			}).click(function(){
				var obj = this;
				//var needSeatCount = $(obj).parent().parent().parent().find("input[name=needSeatCount]").val();
				$.ajax({
					url:""+APP_ROOT+"back/busCompany.do?method=findBusCompanyBySeat&token="+$.cookie("token")+"&menuKey=resource_busCompany&operation=view",
                    dataType: "json",
                    data:"seatCount="+0,
                    success: function(data) {
                    	layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							var busCompanyList = JSON.parse(data.busCompanyList);
							if(busCompanyList != null && busCompanyList.length > 0){
								for(var i=0;i<busCompanyList.length;i++){
									busCompanyList[i].value = busCompanyList[i].companyName;
								}
							}
							$(obj).autocomplete('option','source', busCompanyList);
							$(obj).autocomplete('search', '');
						}
                    }
                });
			})
		},*/
		//查看计划    arrangeTourist.viewTripPlan(id);
		viewTripPlan:function(id){
			$.ajax({
				url:""+APP_ROOT+"back/tripPlan.do?method=getTripPlanById&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				data:"tripPlanId="+id+"",
				datatype:"json",
				beforSend:function(){
					globalLoadingLayer = openLoadingLayer();
				},
				success:function(data){
					layer.close(globalLoadingLayer);
					var result = showDialog(data);
					if(result){
						data.touristGroupList =JSON.parse(data.touristGroupList);
						data.lineProductDayList =JSON.parse(data.lineProductDayList);
						data.tripPlan =JSON.parse(data.tripPlan);
						data.lineProduct =JSON.parse(data.lineProduct);
						data.guide =JSON.parse(data.guide);
						data.driver =JSON.parse(data.driver);
						data.busCompant =JSON.parse(data.busCompant);
						data.bus =JSON.parse(data.bus);
						var html = viewPlanTemplate(data);
						//addTab(menuKey+"-view","查看发团计划",html);
						
						var viewPlanLayer = layer.open({
						    type: 1,
						    title:"查看发团计划",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['85%', '80%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	
								var tab = "tab-arrange_plan-view-content";
						    	arrangeTourist.MenberNumber("addTripPlanTouristTbody");
						    	//查看计划中 查看游客小组
						    	$(".viewTripPlan .viewTripPlanView").click(arrangeTourist.viewTouristGroup)
						    }
						})
					}
				}
			});
		},
		//填写费用信息函数
		transferFee :function(){
			var id = $(this).parent().parent().attr("data-entity-id");
			$.ajax({
				url:""+APP_ROOT+"back/transTourist.do?method=getTransfer&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
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
						var touristGroupInfo = JSON.parse(data.touristGroup);
						data.touristGroup = touristGroupInfo;
						var touristGroupFeeList = JSON.parse(data.touristGroupFeeList);
						data.touristGroupFeeList = touristGroupFeeList;
						var html = editFeeTemplate(data);
						var updateTouristGroupLayer = layer.open({
						    type: 1,
						    title:"编辑费用信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: '60%', //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){  
						    	var feeId = "";//data.touristGroupTransferFeeSet.id;
						    	//给新增费用项绑定事件
						    	$(".editFeeMainForm .newEditFee").click(function(){
						    		var html=
					    			"<tr>"+
					    			"<td><span name=\"type\" value=\"0\">其他费用</span></td>"+
					    			"<td><input  name=\"describe\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
					    			"<td><input  name=\"count\" type=\"text\" class=\"col-sm-12  no-padding-right costCount\" /></td>"+
					    			"<td><input  name=\"otherPrice\" type=\"text\" class=\"col-sm-12  no-padding-right costPrice\" /></td>"+
					    			"<td><a class=\"cursor addCost-delete\">删除</a></td>"+
					    			"</tr>";
						    		$(".editFeeMainForm .editFeeTbody").append(html);
						    		
						    		//给费用清单列表删除按钮绑定事件
							    	$(".editFeeTbody .addCost-delete").click(function(){
					    				$(this).parent().parent().fadeOut(function(){
					    					$(this).remove();
							    			PayMoneyF();
					    				})
						    			PayMoneyF();
						    			$(".editFeeMainForm input[name=payedMoney]").keyup(function(){
											PayMoneyF();
										})
										$(".editFeeMainForm .editFeeTbody").keyup(function(){
											PayMoneyF();
										})
										$(".editFeeMainForm .editFeeTbody").find(".addOrReduceSelect").change(function(){
											PayMoneyF();
										})
							    	});
						    		$(".editFeeMainForm input[name=payedMoney]").keyup(function(){
										PayMoneyF();
									})
									$(".editFeeMainForm .editFeeTbody").keyup(function(){
										PayMoneyF();
									})
									$(".editFeeMainForm .editFeeTbody").find(".addOrReduceSelect").change(function(){
										PayMoneyF();
									})
									PayMoneyF();
						    	});
						    	//费用清单删除列表事件
						    	$(".editFeeTbody .addCost-delete").click(function(){
				    				var tr =$(this).parent().parent();
					    			var costListTrId = tr.attr("data-entity-id");
					    			if(costListTrId!=null && costListTrId!=""){
					    				tr.addClass("deleted");
					    				tr.fadeOut(function(){
					    					$(this).hide();
							    			PayMoneyF();
					    				})
					    			}



					    			PayMoneyF();
					    			$(".editFeeMainForm input[name=payedMoney]").keyup(function(){
										PayMoneyF();
									})
									$(".editFeeMainForm .editFeeTbody").keyup(function(){
										PayMoneyF();
									})
									$(".editFeeMainForm .editFeeTbody").find(".addOrReduceSelect").change(function(){
										PayMoneyF();
									})
						    	});


						    	
						    	//新增费用项目  算应收
								$(".editFeeMainForm input[name=payedMoney]").keyup(function(){
									PayMoneyF();
								})
								$(".editFeeMainForm .editFeeTbody").keyup(function(){
									PayMoneyF();
								})
								$(".editFeeMainForm .editFeeTbody").find(".addOrReduceSelect").change(function(){
									PayMoneyF();
								})  
								
								function PayMoneyF(){
									var needPayMoney = 0;
									var needPayAllM = $(".form-group input[name=needPayMoney]");
									var payedM = $(".form-group input[name=payedMoney]"); 
									var currentNeedPayM = $(".form-group input[name=currentNeedPayMoney]"); 
									var assC_tr = $(".editFeeMainForm .editFeeTbody").find("tr:not(.deleted)");
									needPayMoney=0;
									for(i=0;i<assC_tr.length;i++){
										var a =parseFloat(assC_tr.eq(i).find(".costCount").val());
										var b =parseFloat(assC_tr.eq(i).find(".costPrice").val());
										
											if(assC_tr.eq(i).find("option:selected").val()==0){
												a=a;
											}
											else if(assC_tr.eq(i).find("option:selected").val()==1){
												a=-a;
											}
										
										
										if(isNaN(a)){
											a = 0;
										}
										if(isNaN(b)){
											b =0;
										}
										needPayMoney += a*b;
									}//应收-已收=现收
									needPayAllM.val(needPayMoney);
									var payedMN =parseFloat(payedM.val());
									if(isNaN(payedMN)){
										payedMN = 0;
									}
									var currentNPM = needPayMoney-payedMN;
									currentNeedPayM.val(currentNPM);
								}  


								//转客费用提交按钮  
								$(".editFeeMain .btn-updateFee").click(function(){
									var $isCurrentObj=$(".editFeeMain "),
										isCurrent,
									    form = $(".editFeeMain .editFeeMainForm").serialize(),
								        touristGroup = {
											"id" : id,
											"transRemark" : $(".editFeeMain input[name=remark]").val() || "无",
											"transAdultPrice" : $(".editFeeMain input[name=adultTransferMoney]").val() || 0,
											"transChildPrice" : $(".editFeeMain input[name=childTransferMoney]").val() || 0,
											"transPayedMoney" : $(".editFeeMain input[name=payedMoney]").val() || 0,
											"transNeedPayAllMoney":$(".editFeeMain input[name=needPayMoney]").val() || 0,
									    },
									    otherFeeList = "[",
									    otherFeeListLength = $(".editFeeMain .editFeeTbody tr:not(.deleted)").length;
									 $(".editFeeMain .editFeeTbody tr:not(.deleted)").each(function(i){
										var id = $(this).attr("data-entity-id");
										var type = $(this).find("[name=type]").attr("value");
										var discribe = $(this).find("input[name=describe]").val();
										var otherPrice = $(this).find("input[name=otherPrice]").val();
										var count = $(this).find("input[name=count]").val();
										if(i>1){
											if (id != null && id != "") {
								    			if(i==(otherFeeListLength-1)){
								    				otherFeeList+="{\"id\":\""+id+"\",\"type\":\""+type+"\",\"discribe\":\""+discribe+"\",\"count\":\""+count+"\",\"otherPrice\":\""+otherPrice+"\"}";
								    			}else{
								    				otherFeeList+="{\"id\":\""+id+"\",\"type\":\""+type+"\",\"discribe\":\""+discribe+"\",\"count\":\""+count+"\",\"otherPrice\":\""+otherPrice+"\"},"
								    			}
							    			}
							    			else{
							    				if(i==(otherFeeListLength-1)){
							    					otherFeeList+="{\"type\":\""+type+"\",\"discribe\":\""+discribe+"\",\"count\":\""+count+"\",\"otherPrice\":\""+otherPrice+"\"}";
								    			}else{
								    				otherFeeList+="{\"type\":\""+type+"\",\"discribe\":\""+discribe+"\",\"count\":\""+count+"\",\"otherPrice\":\""+otherPrice+"\"},"
								    			}
							    			}
										}
									})
									otherFeeList += "]";

									//是否现收状态 
									if ($isCurrentObj.find('input[name=isCurrent]').is(":checked")) {
										isCurrent=1
									} else{
										isCurrent=0;
									};
									
									/*$(".editFeeMain .editFeeTbody tr:not(.deleted)").each(function(i){
										if(i>1){
											otherFeeList[i] = {
													"id" : $(this).attr("data-entity-id"),
													"type" : $(this).find("option:selected").val(),
													"discribe" : $(this).find("input[name=describe]").val(),
													"otherPrice" : $(this).find("input[name=otherPrice]").val(),
													"count" : $(this).find("input[name=count]").val()
											}
										}
									})*/
									var otherFeeListDel = [];
									$(".editFeeMain .editFeeTbody tr.deleted").each(function(i){
										otherFeeListDel[i] = {
												"id" : $(this).attr("data-entity-id")
										}
									})
									touristGroup = JSON.stringify(touristGroup);
									otherFeeListDel = JSON.stringify(otherFeeListDel);

									if (isCurrent==1) {
										$.ajax({
											url:""+APP_ROOT+"back/transTourist.do?method=saveTransFee&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=update",
											data:"touristGroup="+encodeURIComponent(touristGroup)+"&otherFeeList="+encodeURIComponent(otherFeeList)+"&otherFeeListDel="+encodeURIComponent(otherFeeListDel)+"&isCurrent="+isCurrent,
											type:"POST",
											dataType:"json",
											beforeSend:function(){
												globalLoadingLayer = openLoadingLayer();
											},
											success:function(data){
												layer.close(globalLoadingLayer);
												var result = showDialog(data);
									        	if(result){
									        		showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
													layer.close(updateTouristGroupLayer);
									        			if(data.success==1){
									        				var transferTr = $(".transferTouristMain .transferTouristGroupTbody tr");
									        				transferTr.each(function(i){
									        					var id = transferTr.eq(i).attr("data-entity-id");
									        					if(id == data.id){
									        						transferTr.eq(i).find("td.transferFeeStatus").html('<i class ="ace-icon fa fa-check green"></i>已填写');
									        						transferTr.eq(i).find("[name=label_payed]").html(data.transPayedMoney);
									        						transferTr.eq(i).find("[name=label_needPay]").html(data.transNeedPayAllMoney);
									        					}
									        				})
									        			}
													//arrangeTourist.transferTourist(lineProductIdFee,startTimeFee);
									        		})
										    	}
											}
										})

									} else{
										showMessageDialog($( "#confirm-dialog-message" ),"必须有一个游客小组指定现收!");
									};
								});
						    }//编辑费用信息end
						})
					}
					
				}
			})
		},
		//内转费用函数
		inTransferFee :function(){
			var id = $(this).parent().parent().attr("data-entity-id");
			$.ajax({
				url:""+APP_ROOT+"back/innerTransferOperation.do?method=getInTransferFeeDetails&token="+$.cookie("token")+"&menuKey=resource_subsection&operation=view",
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
						var touristGroupInfo = JSON.parse(data.touristGroup);
						data.touristGroup = touristGroupInfo;
						var touristGroupFeeList = JSON.parse(data.touristGroupFeeList);
						data.touristGroupFeeList = touristGroupFeeList;
						var innerTransferFeeList = JSON.parse(data.innerTransferFeeList);
						data.innerTransferFeeList = innerTransferFeeList;
						var html = innerEditFeeTemplate(data);
						updateInnerFeeLayer = layer.open({
						    type: 1,
						    title:"编辑内转费用信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: ['60%', '75%'], //宽高
						    zIndex:1028,
						    content: html,
						    success:function(){
						    	var form = $(".innerEditFeeMainForm");
								saveInnerTransferFee(form);
						    	$(".innerEditFeeMainForm .newEditFee").click(function(){
						    		var html=
					    			"<tr>"+
					    			"<td><span name=\"type\" value=\"0\">其他费用</span></td>"+
					    			"<td><input  name=\"discribe\" type=\"text\" class=\"col-sm-12  no-padding-right\" maxlength=\"500\" /></td>"+
					    			"<td><input  name=\"count\" type=\"text\" class=\"col-sm-12  no-padding-right costCount\" maxlength=\"10\" /></td>"+
					    			"<td><input  name=\"otherPrice\" type=\"text\" class=\"col-sm-12  no-padding-right costPrice\" maxlength=\"10\" /></td>"+
					    			"<td><a class=\"cursor addCost-delete\">删除</a></td>"+
					    			"</tr>";
						    		$(".innerEditFeeMainForm .innerEditFeeTbody").append(html);
						    		$(".innerEditFeeMainForm  .innerEditFeeTbody .costPrice,.costCount").change(PayMoneyF);
						    		deleteInnerTransferFee(form);
						    	})
						    	PayMoneyF();
						    	deleteInnerTransferFee(form);
						    	$(".innerEditFeeMainForm  .innerEditFeeTbody .costPrice,.costCount").change(PayMoneyF);
						    	function PayMoneyF(){
									var needPayMoney = 0;
									var needPayAllM = $(".innerEditFeeMainForm .form-group input[name=transNeedPayAllMoney]");
									var assC_tr = $(".innerEditFeeMainForm .innerEditFeeTbody").find("tr:not(.deleted)");
									needPayMoney=0;
									for(i=0;i<assC_tr.length;i++){
										var a =parseFloat(assC_tr.eq(i).find(".costCount").val());
										var b =parseFloat(assC_tr.eq(i).find(".costPrice").val());
										
										if(isNaN(a)){
											a = 0;
										}
										if(isNaN(b)){
											b =0;
										}
										needPayMoney += a*b;
									}//应收-已收=现收
									needPayAllM.val(needPayMoney);
								}
								function deleteInnerTransferFee(form){
									form.find(".addCost-delete").click(function(){
										var $this = $(this);
											parents = $this.parent().parent();
											id = parents.attr("data-entity-id");
										if (id) {
											var dialog = $( "#confirm-dialog-message" ).removeClass('hide').dialog({
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
																url:""+APP_ROOT+"back/innerTransferOperation.do?method=deleteInTransferFee&token="+$.cookie("token")+"&menuKey=resource_subsection&operation=view",
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
																		parents.remove();
						    											PayMoneyF();
																	}
																}
															})

														} 
													}
												],
												open:function(event,ui){
													$(this).find("p").text("确认删除该费用信息？");
												}
											});
										}else{
											parents.remove();
						    				PayMoneyF();
										}
									})
								}
								function saveInnerTransferFee(form){
							    	$(".innerEditFeeMain .btn-updateFee").click(function(){
										var innerFeeForm = $(".innerEditFeeMainForm").serialize(),
											inTransferFee = {
												innerTransferFeeList : []
											}
											;
										form.find(".innerEditFeeTbody tr").each(function(i){
											if (i > 1) {
												var feeList = {
													id : $(this).attr("data-entity-id"),
													discribe : $(this).find("input[name = discribe]").val(),
													count : $(this).find("input[name = count]").val(),
													price : $(this).find("input[name = otherPrice]").val()
												}
												inTransferFee.innerTransferFeeList.push(feeList);
											}
											
										})
										inTransferFee = JSON.stringify(inTransferFee);
										$.ajax({
											url:""+APP_ROOT+"back/innerTransferOperation.do?method=saveInTransferFee&token="+$.cookie("token")+"&menuKey=resource_subsection&operation=view",
											type:"POST",
											data:innerFeeForm+"&inTransferFee="+inTransferFee+"",
											dataType:"json",
											beforeSend:function(){
												globalLoadingLayer = openLoadingLayer();
											},
											success:function(data){
												layer.close(globalLoadingLayer);
												var result = showDialog(data);
												if(result){
													showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
												    	layer.close(updateInnerFeeLayer)
														if(data.success == 1){
									        				var transferTr = $("#tab-resource_subsection-intransfer-content .transferTouristGroupTbody tr");
									        				transferTr.each(function(i){
									        					var id = transferTr.eq(i).attr("data-entity-id");
									        					if(id == data.touristGroupId){
									        						transferTr.eq(i).find("td.transferFeeStatus").html('<i class ="ace-icon fa fa-check green"></i>已填写');
									        						transferTr.eq(i).find("[name=label_payed]").html(data.transPayedMoney);
									        						transferTr.eq(i).find("[name=label_needPay]").html(data.transNeedPayAllMoney);
									        					}
									        				})
														}
													});
												}
											}
										})
							    	});
								}
						    }
						})
					}
				}
			})
		},
		saveAddTripPlan :function(tab,className,status,layerIndex,tbody,validator,isClose){
			//保存生成计划   btn-savelTripPlan
			function getValue(name){
				var thisObj = $("#"+tab+" .addTripPlanMain").find("[name="+name+"]"), objValue;
				if(thisObj.attr("type") == "checkbox"){
					objValue = thisObj.is(":checked") ? 1 : 0;
				}else{
					objValue = thisObj.val();
				}
				return objValue;
			}

		    var executeTimeType=$("#"+tab+" .checkbox input[name=executeTimeType]:radio:checked").val();
			var planTouristCount = parseInt(getValue("planTouristCount")),
				memberCount = parseInt($("#" + tab + " .tripPlanAllMemberCount").text());
			if(planTouristCount < memberCount){
				showMessageDialog($( "#confirm-dialog-message" ),"小组总人数不能大于计划人数",function(){
				});
			}else{
				// 表单校验
				if (!validator.form()) {return; } 
				var saveTripP = {
					"tripPlan": {
						"startTime": getValue("startTime"),
						"accompanyGuideName": getValue("accompanyGuideName"),
						"accompanyGuideMobile": getValue("accompanyGuideMobile"),
						"planTouristCount": getValue("planTouristCount"),
						"setPlacePosition": getValue("setPlacePosition"),
						"setPlaceTime": getValue("setPlaceTime"),
						"executeTimeType": executeTimeType+"",  
						"executeTime": getValue("executeTime")
					},
					"lineProductId": getValue("lineProductId"),
					"driverId": getValue("driverId"),
					"guideId": getValue("AddTPchooseGuideId"),
					"busId": getValue("busLicenseNumberId"),
					"touristGroupId": [],
					"qouteId" :  getValue("qouteId") 
				}
				var touristGroupList = $("#"+tab+" ."+className+" ."+tbody+" tr").length;
				$("#"+tab+" ."+className+" ."+tbody+" tr").each(function(i){
					saveTripP.touristGroupId[i] = {
						"id": $(this).attr("data-entity-id")
					}
				})
				
				var saveTripPlan = JSON.stringify(saveTripP);
				$.ajax({
					url:""+APP_ROOT+"back/tripPlan.do?method=saveTripPlan&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					data:"saveTripPlan="+encodeURIComponent(saveTripPlan),
					dataType: "json",
					type:"POST",
					beforeSend:function(){
						globalLoadingLayer = openLoadingLayer();
					},
					success:function(data){
						layer.close(globalLoadingLayer);
						var result = showDialog(data);
						if(result){
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
								if(status==1){
									arrangeTourist.edited["addTripPlan"] = "";
									if(isClose == 1){
										closeTab(menuKey+"-addTripPlan");
									closeTab(menuKey+"-divide");
										arrangeTourist.listArrangeTouristMain();
									}
								}
								else if(status==0){
									arrangeTourist.edited["mergeAddTripPlan"] = "";
									if(isClose == 1){
										closeTab(layerIndex);
										arrangeTourist.listArrangeTouristMain();
									}
								}
								else{
									arrangeTourist.edited["chooseMerge"] = "";
									if(isClose == 1){
										closeTab(layerIndex);
										arrangeTourist.listArrangeTouristMain();
									}
								}
							});
						}
					}
				})
			}
		},
		updateTripPlan:function(data){
			data.touristGroupList =JSON.parse(data.touristGroupList);
			data.lineProductDayList =JSON.parse(data.lineProductDayList);
			data.tripPlan =JSON.parse(data.tripPlan);
			data.lineProduct =JSON.parse(data.lineProduct);
			data.guide =JSON.parse(data.guide);
			data.driver =JSON.parse(data.driver);
			data.busCompant =JSON.parse(data.busCompant);
			data.bus =JSON.parse(data.bus);
			var html = updateTripPlanTemplate(data);  

			//已修改提示
			var validator = rule.checkdCreateTripPlan($(".mergeTripPlan"));  
			if($(".tab-"+menuKey+"-chooseMerge").length > 0) {
				addTab(menuKey+"-chooseMerge","并团-修改计划");
				if(!!arrangeTourist.edited["chooseMerge"] && arrangeTourist.edited["chooseMerge"] !=""){
					showConfirmMsg($( "#confirm-dialog-message" ), "是否保存已更改的数据?",function(){
						 validator = rule.checkdCreateTripPlan($(".mergeTripPlan"));  
						 if (!validator.form()) { 
							 return; 
						 }
						 arrangeTourist.saveAddTripPlan("tab-arrange_tourist-chooseMerge-content","mergeTripPlan",2,"arrange_tourist-chooseMerge","updateTripPlanTouristTbody",validator,0);
						 arrangeTourist.edited["chooseMerge"] = "";
						 addTab(menuKey+"-chooseMerge","并团-修改计划",html);
						 arrangeTourist.initUpdate(data);
					},function(){
						addTab(menuKey+"-chooseMerge","并团-修改计划",html);
						arrangeTourist.initUpdate(data);								
						arrangeTourist.edited["chooseMerge"] = "";
					}); 							
				 }else{
					addTab(menuKey+"-chooseMerge","并团-修改计划",html);
					arrangeTourist.initUpdate(data);
				 } 
			}else{
				addTab(menuKey+"-chooseMerge","并团-修改计划",html);
				arrangeTourist.initUpdate(data);
			}	
		},
		initUpdate : function(data){

			$('.mergeTripPlan').on("change",function(){
				arrangeTourist.edited["chooseMerge"] = "chooseMerge";
			});	
			var tab = "tab-arrange_tourist-chooseMerge-content";
			//小组总人数计算
			arrangeTourist.tripPlanAllMemberCount("tripPlanAllMemberCount",tab,"updateTripPlanTouristTbody");
			
			//修改发团计划
			var validator = rule.checkdCreateTripPlan($(".mergeTripPlan"));   
	
			var isCheckedStatus=data.tripPlan.executeTimeType,  //选中状态
			isSendMessageStatus=data.tripPlan.isSendTouristMessage,   //短信是否发送
			$checkedObj=$(".addTripPlanMain ");
			//短信发送  定时控件 
			arrangeTourist.setTripPlanPicker();

			//游客短信及时发送显示隐藏
			$("#"+tab+" .checkbox").unbind().click(function(){
				var $that=$(this);
				if ($("#"+tab+" .checkbox input[name=executeTimeType]:radio:checked").val()==1) {
					$that.parent().parent().find(".addMergePlanTime").removeClass("hide");
				} else{
					$that.parent().parent().find(".addMergePlanTime").addClass("hide");
				};

			});
			if (isSendMessageStatus==1) {
				$checkedObj.find(" .checkbox input[name=executeTimeType]").eq(0).attr("disabled","disabled");
				$checkedObj.find(" .checkbox input[name=executeTimeType]").eq(1).attr("disabled","disabled");
				$checkedObj.find(".checkbox input[name=executeTime]").attr("disabled","disabled");
			} else{
				$checkedObj.find(".checkbox input[name=executeTimeType]").eq(0).removeAttr("disabled");
				$checkedObj.find(".checkbox input[name=executeTimeType]").eq(1).removeAttr("disabled");
				$checkedObj.find(".checkbox input[name=executeTime]").removeAttr("disabled");
			}
			if (isCheckedStatus==0) {//立即发送
				$checkedObj.find("input[name=executeTimeType]").eq(0).attr("checked","checked");
			} else{//定时发送
				$checkedObj.find("input[name=executeTimeType]").eq(1).attr("checked","checked");
			};


			//查看旅游小组成员
			$("#"+tab+" .mergeTripPlan .addTripPlanMain .touristGroupView").unbind().click(arrangeTourist.viewTouristGroup);
			//删除小组   addTripPlanViewDelete
			$("#"+tab+" .mergeTripPlan .addTripPlanMain .touristGroupDelete").on("click",function(){
				var obj = $(this);
				var id = $(this).attr("data-entity-id");
				arrangeTourist.delTrouristGroup(obj,id,tab,"updateTripPlanTouristTbody")
			})
			//拉下查询
			arrangeTourist.seatCountChoose();
			arrangeTourist.brandChoose();
			arrangeTourist.licenseNumberChoose();
			arrangeTourist.driverChoose();
			arrangeTourist.guideChoose();
			//小组序号
			arrangeTourist.MenberNumber("updateTripPlanTouristTbody");
			//取消生成计划   btn-cancelTripPlan
			$("#"+tab+" .mergeTripPlan .btn-updatecancelTripPlan").click(function(){
				closeTab(menuKey+"-chooseMerge");
			})
			//保存生成计划
			$("#"+tab+" .mergeTripPlan .btn-saveTripPlan").click(function(){
				arrangeTourist.saveAddTripPlan(tab,"mergeTripPlan",2,"arrange_tourist-chooseMerge","updateTripPlanTouristTbody",validator,1);
			})
			//新增资源
			arrangeTourist.addResource(tab);
			//集合时间   时间控件
			arrangeTourist.dateTimePicker();
		},
		seatCountChoose : function(){
			var chooseSeatCount = $(".widget-main").find(".chooseSeatCount");
			chooseSeatCount.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).closest('.widget-main');
						$this.val("");
						parents.find("input[name=needBusBrand]").val("");
						parents.find("input[name=LicenseNumber]").val("");
						parents.find("input[name=busLicenseNumberId]").val("");
						parents.find("input[name=busCompany]").val("");
						parents.find("input[name=busCompanyId]").val("");
						parents.find("input[name=driverName]").val("");
						parents.find("input[name=driverId]").val("");
						parents.find("input[name=DmobileNumber]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).closest('.widget-main');
					parents.find("input[name=needBusBrand]").val("");
					parents.find("input[name=LicenseNumber]").val("");
					parents.find("input[name=busLicenseNumberId]").val("");
					parents.find("input[name=busCompany]").val("");
					parents.find("input[name=busCompanyId]").val("");
					parents.find("input[name=driverName]").val("");
					parents.find("input[name=driverId]").val("");
					parents.find("input[name=DmobileNumber]").val("");
				}
			}).unbind("click").click(function(){
				var obj = this;
				$.ajax({
					url:""+APP_ROOT+"back/bookingOrder.do?method=getSeatCountList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					dataType:"json",
					showLoading: false,
					success:function(data){
						var result = showDialog(data);
						if(result){
							var seatCountListJson = [];
							var seatCountList = data.seatCountList;
							if(seatCountList && seatCountList.length > 0){
								for(var i=0; i < seatCountList.length; i++){
									var seatCount = {
										value : seatCountList[i]
									}
									seatCountListJson.push(seatCount);
								}
								$(obj).autocomplete('option','source', seatCountListJson);
								$(obj).autocomplete('search', '');
							}else{
								layer.tips('没有内容', obj, {
								    tips: [1, '#3595CC'],
								    time: 2000
								});
							}
						}
					}
				})
			})
		},
		brandChoose :function(){
			var chooseBrand = $(".widget-main").find(".chooseBusBrand");
			chooseBrand.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).closest('.widget-main');
						$this.val("");
						parents.find("input[name=LicenseNumber]").val("");
						parents.find("input[name=busLicenseNumberId]").val("");
						parents.find("input[name=busCompany]").val("");
						parents.find("input[name=busCompanyId]").val("");
						parents.find("input[name=driverName]").val("");
						parents.find("input[name=driverId]").val("");
						parents.find("input[name=DmobileNumber]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).closest('.widget-main');
					parents.find("input[name=LicenseNumber]").val("");
					parents.find("input[name=busLicenseNumberId]").val("");
					parents.find("input[name=busCompany]").val("");
					parents.find("input[name=busCompanyId]").val("");
					parents.find("input[name=driverName]").val("");
					parents.find("input[name=driverId]").val("");
					parents.find("input[name=DmobileNumber]").val("");
				}
			}).unbind("click").click(function(){
				var obj = this;
				var seatCount = $(this).closest('.widget-main').find("input[name=seatCount]").val();
				if(!!seatCount){
					$.ajax({
						url:""+APP_ROOT+"back/bookingOrder.do?method=getBusBrandList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data:"seatCount="+seatCount+"",
						dateType:"json",
						showLoading:false,
						type:"POST",
						success:function(data){
							var result = showDialog(data);
							if(result){
								var busBrandListJson = [];
								var busBrandList = data.busBrandList;
								if(busBrandList && busBrandList.length > 0){
									for(var i=0; i < busBrandList.length; i++){
										var busBrand = {
											value : busBrandList[i]
										}
										busBrandListJson.push(busBrand);
									}
									$(obj).autocomplete('option','source', busBrandListJson);
									$(obj).autocomplete('search', '');
								}else{
									layer.tips('没有内容', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
							}
						}
					})
				}else{
					layer.tips('请选择车座数', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		licenseNumberChoose :function(){
			var chooseLicense = $(".widget-main").find("input[name=LicenseNumber]");
			chooseLicense.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).closest('.widget-main');
						$this.val("");
						parents.find("input[name=busLicenseNumberId]").val("");
						parents.find("input[name=busCompany]").val("");
						parents.find("input[name=busCompanyId]").val("");
						parents.find("input[name=driverName]").val("");
						parents.find("input[name=driverId]").val("");
						parents.find("input[name=DmobileNumber]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).closest('.widget-main');
						parents.find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
						parents.find("input[name=busCompany]").val(ui.item.busCompanyName);
						parents.find("input[name=busCompanyId]").val(ui.item.busCompanyId);
						parents.find("input[name=driverName]").val("");
						parents.find("input[name=driverId]").val("");
						parents.find("input[name=DmobileNumber]").val("");
				}
			}).unbind("click").click(function(){
				var obj = this;
				var seatCount = $(this).closest('.widget-main').find("input[name=seatCount]").val();
				var busBrand = $(this).closest('.widget-main').find("input[name=needBusBrand]").val();
				if (!!seatCount) {
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=getLicenseNumbers&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data: {
							seatCount: seatCount,
							brand: busBrand
						},
						dateType:"json",
						showLoading:false,
						type:"POST",
						success:function(data){
							var result = showDialog(data);
							if(result){
								var licenseList = JSON.parse(data.busList);
								if(licenseList && licenseList.length > 0){
									for(var i=0; i < licenseList.length; i++){
										licenseList[i].value = licenseList[i].licenseNumber;
									}
									$(obj).autocomplete('option','source', licenseList);
									$(obj).autocomplete('search', '');
								}else{
									layer.tips('没有内容', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
							}
						}
					})
				}else{
					layer.tips('请选择车座数', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		driverChoose : function(){
			var chooseDriver = $(".widget-main").find("input[name=driverName]");
			chooseDriver.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).closest('.widget-main');
						$this.val("");
						parents.find("input[name=driverId]").val("");
						parents.find("input[name=DmobileNumber]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).closest('.widget-main');
					parents.find("input[name=driverId]").val(ui.item.id).trigger('change');
					parents.find("input[name=DmobileNumber]").val(ui.item.mobileNumber);
				}
			}).unbind("click").click(function(){
				var obj = this;
				var busLicenseNumberId = $(this).closest('.widget-main').find("input[name=busLicenseNumberId]").val();
				if(busLicenseNumberId){
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=getDrivers&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data:"busId="+busLicenseNumberId+"",
						dateType:"json",
						showLoading:false,
						type:"POST",
						success:function(data){
							var result = showDialog(data);
							if(result){
								var driverList = JSON.parse(data.driverList);
								if(driverList && driverList.length > 0){
									for(var i=0; i < driverList.length; i++){
										driverList[i].value = driverList[i].name;
									}
									$(obj).autocomplete('option','source', driverList);
									$(obj).autocomplete('search', '');
								}else{
									layer.tips('没有内容', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
							}
						}
					})
				}else{
					layer.tips('请选择车牌号', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		},
		save : function(saveType){
			if(saveType == "addTripPlan"){
				var validator = rule.checkdCreateTripPlan($(".addTripPlan"));
				arrangeTourist.saveAddTripPlan("tab-arrange_tourist-addTripPlan-content","addTripPlan",1,"","addTripPlanTouristTbody",validator,1);
			} else if(saveType == "mergeAddTripPlan"){
				var validator = rule.checkdCreateTripPlan($(".addMergePlan"));
				arrangeTourist.saveAddTripPlan("tab-arrange_tourist-mergeAddTripPlan-content","addMergePlan",0,"arrange_tourist-mergeAddTripPlan","mergeTripPlanTouristTbody",validator,1);
			}else if(saveType == "chooseMerge"){
				var validator = rule.checkdCreateTripPlan($(".mergeTripPlan"));
				arrangeTourist.saveAddTripPlan("tab-arrange_tourist-chooseMerge-content","mergeTripPlan",2,"arrange_tourist-chooseMerge","updateTripPlanTouristTbody",validator,1);
			}
		},
		clearEdit : function(clearType){
			arrangeTourist.edited[clearType] = "";
		}
	}
	exports.listArrangeTouristMain = arrangeTourist.listArrangeTouristMain;
	exports.isEdited = arrangeTourist.isEdited;
	exports.save = arrangeTourist.save;
	exports.clearEdit = arrangeTourist.clearEdit;
});