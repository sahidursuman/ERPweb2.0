define(function(require, exports) {
		var menuKey = "arrange_tourist",
		    tabId = "tab-"+ menuKey +"-content",
		    tabIdInner = "tab-"+ menuKey +"-innerTransfer-content",
		    tabIdOut = "tab-" + menuKey + "-outTransfer-content",
		    addTripPlanTabId = "tab-" + menuKey + "-addTripPlan-content",
		    addMergePlanTabId = "tab-"+ menuKey+ "-mergeAddTripPlan-content" ,
		    updateTripPlanTabId = "tab-" + menuKey + "-updateTripPlan-content",
		    rule = require("./rule"),
		    listMainTemplate = require("./view/listMain"),
		    listTemplate = require("./view/list"),
		    listGroupTemplate = require("./view/listGroup"),
		    listTransferTemplate = require("./view/listTransfer"),
		    viewTouristGroupTemplate = require("./view/viewTouristGroup"),
		    inTransferTemplate = require("./view/inTransfer"),
		    innerEditFeeTemplate = require("./view/innerEditFee"),
		    outEditFeeTemplate = require("./view/outEditFee"),
		    outTransferTemplate = require("./view/outTransfer"),
		    addTripPlanTemplate = require("./view/addTripPlan"),
		    addGroupTemplate = require("./view/addGroup"),
		    chooseMergeTemplate = require("./view/chooseMerge"),
		    chosenTripPlanTemplate = require("./view/chooseTriPlan"),
		    addMergePlanTemplate = require("./view/addMergePlan"),
		    updateTripPlanTemplate = require("./view/updateTripPlan"),
		    chosenMergenTripPlanTemplate = require("./view/chosenMergenTripPlan");

		var arrangeTourist = { 
				editFeeLayer : "" ,
				addGroupTemplateLayer : "" ,
				chosenMergenTripPlanlayer : "" ,
				touristGroupMergeData : {  
					touristGroupMergeList : []
				}
		    };
		
		/**
		 * [initModule description]
		 * @return {[type]} [description]
		 */
		arrangeTourist.initModule = function(){
			var html = listMainTemplate();
			    Tools.addTab( menuKey, "并团转客", html);
			    //初始化时间控件
				arrangeTourist.initDatePicker($("#"+tabId));

				//初始化散拼、团体、转客时间
				arrangeTourist.init_event();
		};


		/**
		 * init_event散客 团体 转客 初始化绑定事件
		 * @return {[type]} [description]
		 */
		arrangeTourist.init_event=function(){
			var $visitorObj=$('#T-Visitor-list'),
				$GroupObj=$('#T-Group-list'),
				$TransferObj= $('#T-Transfer-list');
				//散拼
				$visitorObj.find('.T-visitorTourist-search').off().on('click', function(event) {
					event.preventDefault();
					/* Act on the event */
					var $searchArgumentsForm=$visitorObj.find('form'),
					    customerType=0,
					    divId="T-Visitor-list";
					    //console.info(searchArguments);
					//选择组团社与业务部
					var $selectObj = $visitorObj.find(".T-choosePart-chooseFromB");
						$selectObj.on('change',function(){
							var $that=$(this);
							arrangeTourist.chosenPartAgenOrBussiness($that);
						});
					arrangeTourist.listArrangeTourist(0,$searchArgumentsForm,customerType,divId);

				});

				//团体
				$GroupObj.find('.T-GroupTourist-search').off().on('click', function(event) {
					event.preventDefault();
					/* Act on the event */
					var $searchArgumentsForm=$GroupObj.find('form'),
						customerType=1,
						divId="T-Group-list";
						//组团社与业务部选择
						var $selectObj = $GroupObj.find(".T-choosePart-chooseFromB");
						$selectObj.on('change',function(){
							var $that=$(this);
							arrangeTourist.chosenPartAgenOrBussiness($that);
						});
					arrangeTourist.listArrangeTourist(0,$searchArgumentsForm,customerType,divId);
				});

				//转客
				$TransferObj.find('.T-Transfer-search').off().on('click', function(event) {
					event.preventDefault();
					/* Act on the event */
					var $searchArgumentsForm=$TransferObj.find('form'),
					    customerType=2,
						divId="T-Transfer-list";
						//组团社与业务部选择
						var $selectObj = $TransferObj.find(".T-choosePart-chooseFromB");
						$selectObj.on('change',function(){
							var $that=$(this);
							arrangeTourist.chosenPartAgenOrBussiness($that);
						});
					arrangeTourist.listArrangeTourist(0,$searchArgumentsForm,customerType,divId);
				});


				//线路产品的AutocomPlate数据
				var $visitorLinPro = $visitorObj.find('.T-Choose-linProList'),
				    $groupLinPro = $GroupObj.find('.T-Choose-linProList'),
				    $transferLinPro = $TransferObj.find('.T-Choose-linProList');

					arrangeTourist.chooseLineProduct($visitorLinPro, 0);
					arrangeTourist.chooseLineProduct($groupLinPro, 1);
					arrangeTourist.chooseLineProduct($transferLinPro, 2);

				//业务部AutocomPlate数据
				var $visitorfromBus = $visitorObj.find('.T-fromBussinessGroup'),
				    $groupfromBus = $GroupObj.find('.T-fromBussinessGroup'),
				    $transferfromBus = $TransferObj.find('.T-fromBussinessGroup');

				    arrangeTourist.chooseBusinessGroup($visitorfromBus, 0);
					arrangeTourist.chooseBusinessGroup($groupfromBus, 1);
					arrangeTourist.chooseBusinessGroup($transferfromBus, 2);

				//组团社AutocomPlate数据
				var $visitorPart = $visitorObj.find('.T-fromPartnerAgency'),
				    $groupPart = $GroupObj.find('.T-fromPartnerAgency'),
				    $transferPart = $TransferObj.find('.T-fromPartnerAgency');

                    arrangeTourist.choosePartnerAgency($visitorPart, 0);
					arrangeTourist.choosePartnerAgency($groupPart, 1);
					arrangeTourist.choosePartnerAgency($transferPart, 2);

				//模拟Click事件
				$visitorObj.find('.T-visitorTourist-search').trigger('click');
				$GroupObj.find('.T-GroupTourist-search').trigger('click');
				$TransferObj.find('.T-Transfer-search').trigger('click');

		};
				

		
		/**
		 * [listArrangeTourist description]
		 * @param  {[type]} customerType 0--散拼   1--团体   ""--转客
		 * @param  {[type]} divId        [description]
		 * @return {[type]}              [description]
		 */
		arrangeTourist.listArrangeTourist=function(page,$searchArgumentsForm,customerType,divId){
			var formData=$searchArgumentsForm.serializeJson();
			    formData.customerType=customerType;
			    formData.pageNo = page;
			var $divIdObj=$('#'+ divId );
			$.ajax({
				url:KingServices.build_url("touristGroup","getTouristGroupForTripPlan"),
				type:"POST",
				data:formData,
				success:function(data){
                    var result = showDialog(data);
				    if(result){
				    	data.searchParam = data.searchParam;
				    	data.touristGroupList = JSON.parse(data.touristGroupList);
				    	if (customerType == 0 ) { //散拼
							var html = listTemplate(data);
							    $divIdObj.find('.T-touristVisitor-list').html(html);
							    //初始化页面事件
							    arrangeTourist.init_visitorEvent();
						} else if (customerType ==1 ){  //团体
							var html = listGroupTemplate(data);
							    $divIdObj.find('.T-touristGroup-list').html(html);
							    //初始化页面事件
							    arrangeTourist.init_groupEvent();

						} else{ //转客
							var html = listTransferTemplate(data);
							    $divIdObj.find('.T-Transfer-list').html(html);
							    //初始化页面事件
							    arrangeTourist.init_transferEvent();

						};

						// 绑定共用翻页组件
						laypage({
						    cont: $('#' + divId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		arrangeTourist.listArrangeTourist(obj.curr -1,$searchArgumentsForm,customerType,divId);
						    	}
						    }
						});

				    }
				}
			})	
		};


		/**
		 * init_visitorEvent 散拼报表绑定事件
		 * @return {[type]} [description]
		 */
		arrangeTourist.init_visitorEvent = function(){
            var $visitorObj=$('#T-Visitor-list');
            $visitorObj.find('.T-arrageVisitor-list').on('click', '.T-action', function(event) {
            	event.preventDefault();
            	/* Act on the event */
            	var  $that=$(this),id=$that.closest('tr').data('value');
            	    arrangeTourist.viewTouristGroup(id);
            });

            //散拼checkbox绑定事件
			$visitorObj.find(".T-touristGroupMergeCheckBox").off().click(arrangeTourist.addTouristGroupMerge);

            
			$visitorObj.find('.T-start-touristGroup-merge').off().on('click', function(event) {
				event.preventDefault();
				var list = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
				if ( !!list && list.length > 0 ) {
					/* Act on the event */
				    arrangeTourist.initChosenMergenTripPlan();	
				} else{
					showMessageDialog( $( "#confirm-dialog-message" ), "你还没有勾选任何并团小组");
				};
				
			});
			
		};

		/**
		 * [initChosenTripMergen 初始化选择--生成计划
		 * @return {[type]} [description]
		 */
		arrangeTourist.initChosenMergenTripPlan = function(){
		   var html = chosenMergenTripPlanTemplate();
			   arrangeTourist.chosenMergenTripPlanlayer =layer.open({
					type: 1,
					title:"选择生成计划",
					skin: 'layui-layer-rim', //加上边框
					area: '85%;', //宽高
					zIndex:1029,
					content: html,
					scrollbar: false,
					success:function(){
						  arrangeTourist.chosenTripPlan();
			              arrangeTourist.mergenTripPlan();

					}
			   });
			 
		};

		/**
		 * chosenTripPlan 选择计划
		 * @return {[type]} [description]
		 */
		arrangeTourist.chosenTripPlan = function(){
			var $chooseTipPlan = $("#chooseTipPlan");
			    $.ajax({
			    	url:""+APP_ROOT+"back/tripPlan.do?method=findNoStartTripPlanList&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
					showLoading:false,
					type:"POST",
					success:function(data){
						var result = showDialog(data);
						if(result){
							data.tripPlanList = JSON.parse(data.tripPlanList);   
							var html = chosenTripPlanTemplate(data);
							$chooseTipPlan.find('.T-chooseTipPlan-Content').html(html);
							arrangeTourist.initchooseTipP_Event($chooseTipPlan);
							// 绑定共用翻页组件
							/*laypage({
							    cont: $('#' + divId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
							    pages: data.totalPage, //总页数
							    curr: (page + 1),
							    jump: function(obj, first) {
							    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							    		arrangeTourist.listArrangeTourist(obj.curr -1,$searchArgumentsForm,customerType,divId);
							    	}
							    }
							});*/	
						}
					}
			})
		};

		/**
		 * mergenTripPlan 生成计划
		 * @return {[type]} [description]
		 */
		arrangeTourist.mergenTripPlan = function(){
			var $mergenTripPlan = $("#mergenTripPlan"),
			    $data = arrangeTourist.touristGroupMergeData;
				if( !!$data.touristGroupMergeList && $data.touristGroupMergeList.length > 0){
					var html = chooseMergeTemplate($data);
					    $mergenTripPlan.find('.T-mergenTripPlan-Content').html(html);

					    arrangeTourist.mergTripP_Event($mergenTripPlan);
				    	// 绑定共用翻页组件
						/*laypage({
						    cont: $('#' + divId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		arrangeTourist.listArrangeTourist(obj.curr -1,$searchArgumentsForm,customerType,divId);
						    	}
						    }
						});*/	
				}

		};


		/**
		 * initchooseTipP_Event 选择计划绑定事件
		 * @return {[type]} [description]
		 */
		arrangeTourist.initchooseTipP_Event = function($chooseTipPlan){
			var mergeDataJson = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
				mergeDataJson = JSON.stringify(mergeDataJson);
			var tripPlanId = "";

			//确认
			$chooseTipPlan.find('.T-savechooseTipPlan').on('click', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $chooseMergeTr = $chooseTipPlan.find(".T-chosenTrip-list").children('tr');
		    		$chooseMergeTr.each(function(i){
		    			if($chooseMergeTr.eq(i).find(".ridioCheck").is(":checked") == true){
		    				tripPlanId = $chooseMergeTr.eq(i).data("value");
		    			}
		    		});
		        if ( !!tripPlanId && tripPlanId !=null ) {	    	   
			         $.ajax({
		    			url: KingServices.build_url("tripPlan","chooseTripPlanByMerge"),
						data:"tripPlanId="+tripPlanId+"&mergeDataJson="+encodeURIComponent(mergeDataJson)+"",
						type:"POST",
						success:function(data){
							var result = showDialog(data);
							if(result){
								layer.close(arrangeTourist.chosenMergenTripPlanlayer);
								data.touristGroupList =JSON.parse(data.touristGroupList);
								data.lineProductDayList =JSON.parse(data.lineProductDayList);
								data.tripPlan =JSON.parse(data.tripPlan);
								data.lineProduct =JSON.parse(data.lineProduct);
								data.guide =JSON.parse(data.guide);
								data.driver =JSON.parse(data.driver);
								data.busCompant =JSON.parse(data.busCompant);
								data.bus =JSON.parse(data.bus);
								var html = updateTripPlanTemplate(data); 
								var  tab_id = menuKey + "-updateTripPlan",
								         title = '并团-修改计划';
									// 初始化页面
									if (Tools.addTab(tab_id, title, html)) {
										var tab = updateTripPlanTabId, $tab = $("#" + tab ),
										    type = '1',
										    tbody = 'updateTripPlanTouristTbody';
										//Tab切换    
										arrangeTourist.init_CRU_event( $tab, type, tbody);							
									}

								//并团修改计划绑定事件
							    //arrangeTourist.init_upTripEvent();

								
						    }
						}
				    });

		        } else{
		        	showMessageDialog( $( "#confirm-dialog-message" ), "请选择计划");
		        };
			});

			//取消操作
			$chooseTipPlan.find('.T-cancelChooseTipPlan').on('click',  function(event) {
				event.preventDefault();
				/* Act on the event */
				layer.close(arrangeTourist.chosenMergenTripPlanlayer);
			});

		};

		/**
		 * mergTripP_Event 生成计划事件的绑定
		 * @return {[type]} [description]
		 */
		 arrangeTourist.mergTripP_Event = function($mergenTripPlan){

		 	//取消
		 	$mergenTripPlan.find('.T-cancelMergenTripPlan').on('click', function(event) {
		 		event.preventDefault();
		 		/* Act on the event */
		 		layer.close(arrangeTourist.chosenMergenTripPlanlayer);
		 	});

		 	//保存
		 	$mergenTripPlan.find('.T-saveMergenTripPlan').on('click', function(event) {
		 		/* Act on the event */
		 		event.preventDefault();
		 		var mergeDataJson = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
				    mergeDataJson = JSON.stringify(mergeDataJson);
		 		var $mergenTrList = $mergenTripPlan.find('.chooseMergeTbody').find('tr');
		 		var lineProductId = "",startTime = "";
		 		$mergenTrList.each(function(i){
	    			if( $mergenTrList.find(".ridioCheck").is(":checked") == true ){
		    				lineProductId = $mergenTrList.eq(i).attr("data-entity-id");
		    				startTime = $mergenTrList.eq(i).attr("data-entity-starttime");
	    			}
	    		})
	    		console.info("mergeDataJson"+mergeDataJson+"lineProductId"+lineProductId+"startTime="+startTime);

	    	    if ( lineProductId!=null && lineProductId.length > 0) {
		    	    $.ajax({
					    url:KingServices.build_url("tripPlan","addTripPlanByMergeData"),
						data:"lineProductId="+lineProductId+"&startTime="+startTime+"&mergeDataJson="+mergeDataJson,
						dateType:"json",
						showLoading:false,
						type:"POST",
						success:function(data){
							data.addTripPlan.touristGroupList = JSON.parse(data.addTripPlan.touristGroupList);
							data.addTripPlan.lineProduct = JSON.parse(data.addTripPlan.lineProduct);
							data.addTripPlan.lineProductDayList = JSON.parse(data.addTripPlan.lineProductDayList);
							data.addTripPlan.bus = JSON.parse(data.addTripPlan.bus);
							data.addTripPlan.busCompany = JSON.parse(data.addTripPlan.busCompany);
							data.addTripPlan.guide = JSON.parse(data.addTripPlan.guide);
							var html = addMergePlanTemplate(data);
						    var  tab_id = menuKey + "-mergeAddTripPlan",
								 title = '并团-生成计划';
								// 初始化页面
								if (Tools.addTab(tab_id, title, html)) {
									var tab = addMergePlanTabId, $tab = $("#" + tab ),
									    type = '2',
									    tbody = 'mergeTripPlanTouristTbody';
									//Tab切换    
									arrangeTourist.init_CRU_event( $tab, type, tbody);							
								}
						    
						    //关闭层
						    layer.close(arrangeTourist.chosenMergenTripPlanlayer);

						    //生成计划绑定事件
						    //arrangeTourist.mergeAddTr_Event();
						}
				    })
	    	    } else{
	    	    	showMessageDialog( $( "#confirm-dialog-message" ), "请选择线路产品");
	    	    };
		 	});
		 };


		 /**
		  * init_upTripEvent 并团修改计划绑定事件
		  * @return {[type]} [description]
		  */
		 arrangeTourist.init_upTripEvent = function($tab, validator ){
		   var  tab = updateTripPlanTabId, $updateTripPlan = $tab;

		  	//小组总人数计算
			arrangeTourist.tripPlanAllMemberCount("tripPlanAllMemberCount",$tab,"updateTripPlanTouristTbody");
			
			//立即发送点击Click
			$updateTripPlan.find('.T-checkBox').find('.T-immSendChecked').off().on('click', function(event) {
				/* Act on the event */
				var $that = $(this),$dvi = $that.closest('div.T-checkBox'),$is_ImChecked = $that.is(':checked');
				    if ( $is_ImChecked ) {
				    	$dvi.find('.T-To-TimeChecked').addClass('hide');
				    	$dvi.find('.fa-exclamation').addClass('hide');
				    } else{
                        $dvi.find('.T-To-TimeChecked').removeClass('hide');
                        $dvi.find('.fa-exclamation').removeClass('hide');
				    };
			});

			//定时发送Click
			$updateTripPlan.find('.T-checkBox').find('.T-timeChecked').off().on('click', function(event) {
				/* Act on the event */
				var $that = $(this),$dvt = $that.closest('div.T-checkBox'),$isTiChecked = $that.is(':checked');
				    if ( $isTiChecked ) {
				    	$dvt.find('.T-To-TimeChecked').removeClass('hide');
				    } else{
                        $dvt.find('.T-To-TimeChecked').addClass('hide');
				    };
			});

			//集合时间   时间控件
			arrangeTourist.initDatePicker($updateTripPlan);

			//小组序号
			arrangeTourist.menberNumber("updateTripPlanTouristTbody");

			//游客小组的查看&&删除信息
			$updateTripPlan.find('.updateTripPlanTouristTbody').on('click', '.T-action', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $that = $(this),id = $that.closest('tr').data('value');
					if ( $that.hasClass('T-touristGroupView') ) {
						arrangeTourist.viewTouristGroup(id);
					} else if ( $that.hasClass('T-touristGroupDelete') ) {
						arrangeTourist.delTrouristGroup($that,id,$updateTripPlan,"updateTripPlanTouristTbody")
				};
			});
			
			//添加游客小组 （多选）
			$updateTripPlan.find(".T-addTouristGroup").on("click",function(){
				var lineProductId = arrangeTourist.getVal($updateTripPlan,"lineProductId"),
				    startTime = arrangeTourist.getVal($updateTripPlan,"startTime");
				arrangeTourist.addTouristGroup(lineProductId,startTime,$updateTripPlan,"updateTripPlanTouristTbody");
			})

			//车座数
			arrangeTourist.seatCountChoose();
			//车辆品牌
			arrangeTourist.brandChoose();
			arrangeTourist.licenseNumberChoose();
			arrangeTourist.driverChoose();
			arrangeTourist.guideChoose();
		
	
			//取消生成计划   btn-cancelTripPlan
			$updateTripPlan.find(" .T-updatecancelTripPlan").click(function(){
				closeTab(menuKey+"-updateTripPlan");
			})

			//保存生成计划
			$updateTripPlan.find(" .T-saveTripPlan").click(function(){
				//($tab,validator, tabArgs,className,status,tbody)
				arrangeTourist.saveAddTripPlan($tab,validator,"","addTripPlanMain",0,"updateTripPlanTouristTbody");
			})

			//添加资源--导--车			
			arrangeTourist.addResource(tab);
		 };


		 /**
		  * mergeAddTr_Event 生成计划绑定事件
		  * @return {[type]} [description]
		  */
		  arrangeTourist.mergeAddTr_Event = function($tab , validator ){
		  	 var  tab = addMergePlanTabId,$addMergeAddTr = $tab;
		  	 //小组总人数计算
			arrangeTourist.tripPlanAllMemberCount("tripPlanAllMemberCount",$tab,"mergeTripPlanTouristTbody");
			//游客短信及时发送显示隐藏
			$addMergeAddTr.find('.T-checkBox').find('.T-immSendChecked').off().on('click', function(event) {
				/* Act on the event */
				var $that = $(this),$dvi = $that.closest('div.T-checkBox'),$is_ImChecked = $that.is(':checked');
				    if ( $is_ImChecked ) {
				    	$dvi.find('.T-To-TimeChecked').addClass('hide');
				    	$dvi.find('.fa-exclamation').addClass('hide');
				    } else{
                        $dvi.find('.T-To-TimeChecked').removeClass('hide');
                        $dvi.find('.fa-exclamation').removeClass('hide');
				    };
			});
			$addMergeAddTr.find('.T-checkBox').find('.T-timeChecked').off().on('click', function(event) {
				/* Act on the event */
				var $that = $(this),$dvt = $that.closest('div.T-checkBox'),$isTiChecked = $that.is(':checked');
				    if ( $isTiChecked ) {
				    	$dvt.find('.T-To-TimeChecked').removeClass('hide');
				    } else{
                        $dvt.find('.T-To-TimeChecked').addClass('hide');
				    };
			});
			//集合时间   时间控件
			arrangeTourist.initDatePicker($addMergeAddTr);
			//小组序号
			arrangeTourist.menberNumber("mergeTripPlanTouristTbody");

			//游客小组的查看&&删除信息
			$addMergeAddTr.find('.mergeTripPlanTouristTbody').on('click', '.T-action', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $that = $(this),id = $that.closest('tr').data('value');
					if ( $that.hasClass('T-addTripPlanView') ) {
						arrangeTourist.viewTouristGroup(id);
					} else if ( $that.hasClass('T-addTripPlanDelete') ) {
						arrangeTourist.delTrouristGroup($that,id,$addMergeAddTr,"mergeTripPlanTouristTbody")
				};
			});
			
			//添加游客小组 （多选）
			$addMergeAddTr.find(".T-addTouristGroup").on("click",function(){
				var lineProductId = arrangeTourist.getVal($addMergeAddTr,"lineProductId"),
				    startTime = arrangeTourist.getVal($addMergeAddTr,"startTime");
				arrangeTourist.addTouristGroup(lineProductId,startTime,$addMergeAddTr,"mergeTripPlanTouristTbody");
			})

			//车座数
			arrangeTourist.seatCountChoose();
			//车辆品牌
			arrangeTourist.brandChoose();
			arrangeTourist.licenseNumberChoose();
			arrangeTourist.driverChoose();
			arrangeTourist.guideChoose();
		
	
			//取消生成计划   btn-cancelTripPlan
			$addMergeAddTr.find(" .T-cancelMergnPlan").click(function(){
				closeTab(menuKey+"-mergeAddTripPlan");
			})

			//保存生成计划
			$addMergeAddTr.find(" .T-saveMergnPlan").click(function(){//($tab,className,status,tbody)
				//表单验证
				//if (!validator.form()) { return };
				//$tab,validator, tabArgs,className,status,tbody
				arrangeTourist.saveAddTripPlan($addMergeAddTr,validator,"","addTripPlanMain",0,"mergeTripPlanTouristTbody");
			})	

			//添加资源--导--车			
			arrangeTourist.addResource(tab);

		  };


		 /**
		  * init_groupEvent  团体报表绑定事件
		  * @return {[type]} [description]
		  */
		 arrangeTourist.init_groupEvent = function(){
		 	 var $GroupObj=$('#T-Group-list');
		 	 $GroupObj.find('.T-arrageGroup-list').on('click', '.T-action', function(event) {
            	event.preventDefault();
            	/* Act on the event */
            	var  $that=$(this),id=$that.closest('tr').data('value');
                     arrangeTourist.viewTouristGroup(id);
            });

		 	 //为团体生成计划绑定事件--单选
		 	 $GroupObj.find('.T-createTripPlan').on('click', function(event) {
		 	 	/* Act on the event */
		 	 	event.preventDefault();
	 	 		var  idJson=[];
				var $trList = $GroupObj.find(".T-arrageGroup-list").children("tr");
				    $trList.each(function(i) {
				    	var $cheked = $trList.eq(i).find('.T-arrageGroupCheckBox');
				    	    if ($cheked.is(":checked")) {
				    	    	var  id = $cheked.closest('tr').data('value');
				    	    	var id = {
				    	    		id : id
				    	    	};
				    	    	console.info(id);
				    	    	idJson.push(id );
				    	    };
				    });
		 	 	if (!!idJson && idJson.length > 0) {
		 	 		idJson = JSON.stringify(idJson);
		 	 	    console.info('idJson......'+idJson);
		 	 		arrangeTourist.generationGroupPlan(idJson);
		 	 	}else{
		 	 		showMessageDialog( $( "#confirm-dialog-message" ), "请选择游客小组");
		 	 	};
		 	 });

		 	 //计算已选人数
		 	 $GroupObj.find('.T-cheked').on('click', function(event) {
		 	 	/* Act on the event*/ 
			    arrangeTourist.choosenAdultAndChildCount( $GroupObj );
		 	 });
		 	

		 };

		//团体操作生成计划
		arrangeTourist.generationGroupPlan = function(idJson){
			$.ajax({
				    url:KingServices.build_url("tripPlan","generationTripPlan"),
					type:"POST",
					data:"touristGroupId="+encodeURIComponent(idJson)+"",
					success:function(data){
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

						var  tab_id = menuKey + "-addTripPlan",
					         title = '新增计划';
						// 初始化页面
						if (Tools.addTab(tab_id, title, html)) {
							var tab = addTripPlanTabId,$tab = $("#" + tab ),
							    type = '0',
							    tbody = 'T-addTripPlanTouristTbody-list';
							//Tab切换    
							arrangeTourist.init_CRU_event( $tab, type, tbody  );							
						}
					
					}
				});
		};


		/**
		 * [init_CRU_event Tab--切换
		 * @param  {[type]} $tab  TabId对象
		 * @param  {[type]} type  调用方法识别
		 * @param  {[type]} tbody 
		 * @return {[type]}
		 */
		arrangeTourist.init_CRU_event = function( $tab, type, tbody ){
			if (!!$tab && $tab.length === 1) {
			var validator = rule.checkdCreateTripPlan($tab);

				// 监听修改
				$tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
				.on('change', function(event) {
					event.preventDefault();
					$tab.data('isEdited', true);
				})
				// 监听保存，并切换tab
				.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
					event.preventDefault();
					arrangeTourist.saveAddTripPlan($tab, validator, [tab_id, title, html],"addTripPlanMain",1,tbody + "" );
				})
				.on(SWITCH_TAB_BIND_EVENT, function(event) {
					event.preventDefault();
					arrangeTourist.init_CRU_event($tab,type,tbody);
				})
				// 保存后关闭
				.on(CLOSE_TAB_SAVE, function(event) {
					event.preventDefault();
					arrangeTourist.saveAddTripPlan($tab, validator);
				});
			}

			if ( type === "0" ) {//团体生成计划
				//初始化页面事件
				arrangeTourist.initAdd_Event( $tab , validator);
			}else if( type === '1' ){//选择计划---并团--修改计划
				//并团修改计划绑定事件
				arrangeTourist.init_upTripEvent( $tab , validator );
			}else { //生成计划---并团-生成计划
				arrangeTourist.mergeAddTr_Event( $tab , validator  );
			}
		};


		/**
		 * initAdd_Event 新增计划绑定事件
		 * @return {[type]} [description]
		 */
		arrangeTourist.initAdd_Event = function( $tab ,validator  ){

			var tab = addTripPlanTabId ,$addTripPlan = $tab;

			//小组总人数计算
			arrangeTourist.tripPlanAllMemberCount("tripPlanAllMemberCount",$tab,"T-addTripPlanTouristTbody-list");
			
			//游客短信及时发送显示隐藏
			$tab.find('.T-checkBox').find('.T-immSendChecked').off().on('click', function(event) {
				/* Act on the event */
				var $that = $(this),$dvi = $that.closest('div.T-checkBox'),$is_ImChecked = $that.is(':checked');
				    if ( $is_ImChecked ) {
				    	$dvi.find('.T-To-TimeChecked').addClass('hide');
				    	$dvi.find('.fa-exclamation').addClass('hide');
				    } else{
                        $dvi.find('.T-To-TimeChecked').removeClass('hide');
                        $dvi.find('.fa-exclamation').removeClass('hide');
				    };
			});

			$tab.find('.T-checkBox').find('.T-timeChecked').off().on('click', function(event) {
				/* Act on the event */
				var $that = $(this),$dvt = $that.closest('div.T-checkBox'),$isTiChecked = $that.is(':checked');
				    if ( $isTiChecked ) {
				    	$dvt.find('.T-To-TimeChecked').removeClass('hide');
				    } else{
                        $dvt.find('.T-To-TimeChecked').addClass('hide');
				    };
			});

			//集合时间   时间控件
			arrangeTourist.initDatePicker($tab);

			//小组序号
			arrangeTourist.menberNumber("T-addTripPlanTouristTbody-list");

			//游客小组的查看&&删除信息
			$tab.find('.T-addTripPlanTouristTbody-list').on('click', '.T-action', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $that = $(this),id = $that.closest('tr').data('value');
					if ( $that.hasClass('T-addTripPlanView') ) {
						arrangeTourist.viewTouristGroup(id);
					} else if ( $that.hasClass('T-addTripPlanDelete') ) {
						arrangeTourist.delTrouristGroup($that,id,$tab,"T-addTripPlanTouristTbody-list")
				};
			});
			
		

			//添加游客小组 （多选）
			$tab.find(".T-addTouristGroup").on("click",function(){
				var lineProductId = arrangeTourist.getVal($tab,"lineProductId"),
				    startTime = arrangeTourist.getVal($tab,"startTime");
				arrangeTourist.addTouristGroup(lineProductId,startTime,$tab,"T-addTripPlanTouristTbody-list");
			})

			//车座数
			arrangeTourist.seatCountChoose();
			//车辆品牌
			arrangeTourist.brandChoose();
			arrangeTourist.licenseNumberChoose();
			arrangeTourist.driverChoose();
			arrangeTourist.guideChoose();
		
	
			//取消生成计划   btn-cancelTripPlan
			$tab.find(" .T-cancelTripPlan").click(function(){
				closeTab(menuKey+"-addTripPlan");
			})

			//保存生成计划
			$tab.find(" .T-saveTripPlan").click(function(){
				arrangeTourist.saveAddTripPlan($tab,validator,"","addTripPlanMain",1,"T-addTripPlanTouristTbody-list");
			})

			//添加资源--导--车			
			arrangeTourist.addResource(tab);
		}; 



		/**
		 * addResource 添加资源
		 * @param {[type]} tab TabId
		 */
		arrangeTourist.addResource =  function(tab){
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
		};


		/**
		 * delTrouristGroup 删除游客小组信息
		 * @param  {[type]} $obj  当前点击对象
		 * @param  {[type]} id    [description]
		 * @param  {[type]} $tab  [description]
		 * @param  {[type]} tbody [description]
		 * @return {[type]}       [description]
		 */
		arrangeTourist.delTrouristGroup = function($obj,id,$tab,tbody){
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
							$obj.closest('tr').remove();
							arrangeTourist.menberNumber(tbody);
							arrangeTourist.menberNumber(tbody);
					    	//小组总人数计算
					    	arrangeTourist.tripPlanAllMemberCount("tripPlanAllMemberCount",$tab,tbody);
					    	console.log($tab)
					    	console.log(tbody)
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("你确定要移除该小组吗？");
				}
			});
		},



		/**
		 * saveAddTripPlan 保存生成计划
		 * @param  {[type]}  tab        打开的tab
		 * @param  {[type]}  className  class名
		 * @param  {[type]}  status     区分---1----新增计划&&修改计划标识
		 * @param  {[type]}  tbody      [description]
		 * @return {[type]}             [description]
		 */
		
		//($tab, validator, [tab_id, title, html],);
		arrangeTourist.saveAddTripPlan = function($tab,validator, tabArgs,className,status,tbody){
			if (!validator.form()) {return; } 
			//保存生成计划   btn-savelTripPlan
			function getValue(name){
				var thisObj = $tab.find(".addTripPlanMain").find("[name="+name+"]"), objValue;
				if(thisObj.attr("type") == "checkbox"){
					objValue = thisObj.is(":checked") ? 1 : 0;
				}else{
					objValue = thisObj.val();
				}
				return objValue;
			}

		    var executeTimeType=$tab.find(".checkbox input[name=executeTimeType]:radio:checked").val();
			var planTouristCount = parseInt(getValue("planTouristCount")),
				memberCount = parseInt($tab.find(".tripPlanAllMemberCount").text());
			if(planTouristCount < memberCount){
				showMessageDialog($( "#confirm-dialog-message" ),"小组总人数不能大于计划人数",function(){
				});
			}else{
				// 表单校验
				//if (!validator.form()) {return; } 
				var saveTripP = {
					tripPlanId: getValue("tripPlanId"),
					"tripPlan": {
						"tripPlanId":getValue("tripPlanId"),
						"startTime": getValue("startTime"),
						"accompanyGuideName": getValue("accompanyGuideName"),
						"accompanyGuideMobile": getValue("accompanyGuideMobile"),
						"planTouristCount": getValue("planTouristCount"),
						"setPlacePosition": getValue("setPlacePosition"),
						"setPlaceTime": getValue("setPlaceTime"),
						"executeTimeType": executeTimeType+"",  
						"executeTime": getValue("executeTime"),
						"remark" : getValue("remark")
					},
					"lineProductId": getValue("lineProductId"),
					"driverId": getValue("driverId"),
					"guideId": getValue("AddTPchooseGuideId"),
					"busId": getValue("busLicenseNumberId"),
					"touristGroupId": [],
					"qouteId" :  getValue("qouteId") 
				}
				var touristGroupList = $tab.find( " ."+className+" ."+ tbody +" tr").length;
				$tab.find( " ."+className+" ."+ tbody +" tr").each(function(i){
					var $_that = $(this);
					saveTripP.touristGroupId[i] = {
						"id": $_that.data("value")
					}
				})
				
				var saveTripPlan = JSON.stringify(saveTripP);
				var url = '';
				if (status == 2) {
					url = KingServices.build_url("tripPlan","updateTripPlan")
				}else{
					url = KingServices.build_url("tripPlan","saveTripPlan")
				}
				$.ajax({
					url:url,
					data:"saveTripPlan="+encodeURIComponent(saveTripPlan),
					dataType: "json",
					success:function(data){
						var result = showDialog(data);
						if(result){
							$tab.data('isEdited', false);
							showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
								if(status==1){    //新增计划
									if (!!tabArgs && tabArgs.length === 3) {
										// 切换tab，就不做数据更新
										Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
										arrangeTourist.init_CRU_event(tabArgs[0]);

									} else {

										var divId="T-Group-list" ,
										    $GroupObj = $('#' + divId ),
										    $searchArgumentsForm=$GroupObj.find('form'),
											customerType=1;
											Tools.closeTab(menuKey+"-addTripPlan");
											Tools.closeTab(menuKey+ "mergeAddTripPlan");
											arrangeTourist.listArrangeTourist(0,$searchArgumentsForm,customerType,divId);					
									}
									
								}
								else if(status==0){   //并团--生成计划  并团--修改计划
									var divId="T-Visitor-list" ,
									    $VisitorObj = $('#' + divId ),
									    $searchArgumentsForm=$VisitorObj.find('form'),
										customerType= 0 ;
										closeTab(menuKey+ "-mergeAddTripPlan");
										closeTab(menuKey+ "-updateTripPlan");
										arrangeTourist.listArrangeTourist(0,$searchArgumentsForm,customerType,divId);
								}
								else{  
									arrangeTourist.listArrangeTourist();
								}
							});
						}
					}
				})
			}
		};


		/**
		 * tripPlanAllMemberCount 游客小组总人数的计算
		 * @param  {[type]} className  计算目标类名
		 * @param  {[type]} $tab      tab对象
		 * @param  {[type]} tbody    
		 * @return {[type]}
		 */
		arrangeTourist.tripPlanAllMemberCount = function(className,$tab,tbody){
			var $tr = $tab.find( "." + tbody + "").find("tr"),
				trMemberCount = 0,pidArray = ['---'],pidIsThrer = 0;
			$tr.each(function(){
				var $that = $(this),
				$pid = $that.data("value");
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
			$tab.find("."+ className +"" ).text(trMemberCount);
			trMemberCount = 0;
		};


		/**
		 * addTouristGroup 添加游客小组函数
		 * @param {[type]} lineProductId 线路产品Id
		 * @param {[type]} startTime     开始日期
		 * @param {[type]} $tab          新增计划$tab
		 * @param {[type]} tbody         新增计划tbody
		 */
		arrangeTourist.addTouristGroup = function(lineProductId,startTime,$tab,tbody){
			var excludeIdJson = [];
			var $trList = $tab.find( "." + tbody + "" ).children('tr');
			$trList.each(function(i){
				var $_that = $(this),
				    id = {
						id : $_that.data('value')
					};
				excludeIdJson.push(id);
			})
			excludeIdJson = JSON.stringify(excludeIdJson);
			$.ajax({
				url: KingServices.build_url("tripPlan","findTouristGroupInfo"),
				type:"POST",
				data:"lineProductId="+lineProductId+"&startTime="+startTime+"&type=1"+"&excludeIdJson="+encodeURIComponent(excludeIdJson)+"",
				dataType:"json",
				success:function(data){
					var result = showDialog(data);
					if(result){
						data.lineProduct = JSON.parse(data.lineProduct);
						data.touristGroupList = JSON.parse(data.touristGroupList);
						var html = addGroupTemplate(data);
						    arrangeTourist.addGroupTemplateLayer = layer.open({
						    type: 1,
						    title:"添加游客小组",
						    skin: 'layui-layer-rim', //加上边框
						    area: '60%', //宽高
						    zIndex:1028,
						    content: html,
						    scrollbar: false,
						    success:function(){
                                //添加游客小组绑定事件
						    	arrangeTourist.init_addEventTouGroup($tab,tbody);
						    }

						})
					}
				}
			})
		};

		/**
		 * init_addEventTouristGroup 新增游客小组
		 * @param  {[type]} $tab  新增计划TabId
		 * @param  {[type]} tbody 新增计划表格Tab
		 * @return {[type]}       [description]
		 */
		arrangeTourist.init_addEventTouGroup = function( $tab,tbody ){

		  var $addTouristGroup = $("#T-addTouristGroupContainer");

		  	//新增计划Layer全选
			$addTouristGroup.find(".all .T-addMainCheckBox").click(function(){
				var $that = $(this);
				var is_checked = $that.is(':checked');
				$addTouristGroup.find(".all tbody tr").each(function(){
					if(is_checked){
						$(this).find(".T-touristGroupCheckBox").prop("checked",true);
					}
					else{
						$(this).find(".T-touristGroupCheckBox").prop("checked",false);
					}
				});
			});

			//查看添加小组游客
			$addTouristGroup.find(".T-addGroupView").on('click', function(event) {
				event.preventDefault();
				/* Act on the event */
				$that = $(this),id = $that.closest('tr').data('value');
				arrangeTourist.viewTouristGroup(id);
			});

			//提交按钮事件绑定
			$addTouristGroup.find(".T-submit-addTouristGroup").click(function(){
				var addGroupIdJson = [];
				$addTouristGroup.find(".all tbody tr").find("input:checked").each(function(i){
					var parents = $(this).closest('tr'),
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
						"<tr data-value=\""+addGroupIdJson[i].id+"\">"+
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
							"<a data-entity-id=\""+addGroupIdJson[i].id+"\" class=\"cursor T-addTripPlanView\">"+
								"查看"+
							"</a>"+"<a class='cursor'> |</a>"+
							"<a data-entity-id=\""+addGroupIdJson[i].id+"\" class=\"cursor T-addTripPlanDelete\">"+
								"删除"+
							"</a>"+
							"</div>"+
							"</td>"+
						"</tr>";
			    		$tab.find( "." + tbody + "" ).append(html);
					}
				}

				//关闭新增游客小组layer
				layer.close(arrangeTourist.addGroupTemplateLayer);

				arrangeTourist.menberNumber(tbody); //新增计划tbody

				$tab.find(".T-addTripPlanDelete").off().on("click",function(){
					var $obj = $(this),id = $obj.closest('tr').data("value");
					    arrangeTourist.delTrouristGroup($obj,id,$tab,tbody)
				})

				$tab.find(".T-addTripPlanView").click(arrangeTourist.viewTouristGroup);

		    	//小组总人数计算
		    	arrangeTourist.tripPlanAllMemberCount("tripPlanAllMemberCount",$tab,tbody);
		    })

		};



		/**
		 * [menberNumber 游客小组序列号
		 * @param  {[type]} className [description]
		 * @return {[type]}           [description]
		 */
		arrangeTourist.menberNumber = function(className){
			$("."+className+" tr").each(function(i){
					$(this).children().eq(0).text(i+1);
			})
		};

		/**
		 * seatCountChoose 车座数的下拉数据Autocomplate
		 * @return {[type]} [description]
		 */
		arrangeTourist.seatCountChoose = function(){
			var $obj = $(".widget-main").find(".T-chooseSeatCount");
			$obj.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $this.closest('.widget-main');
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
		};

		/**
		 * brandChoose 车辆品牌Autocomplate
		 * @return {[type]} [description]
		*/
		arrangeTourist.brandChoose = function(){
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
		};  

		/**
		 * licenseNumberChoose 车牌号Autocomplate
		 * @return {[type]} [description]
		 */
		arrangeTourist.licenseNumberChoose = function(){
			var chooseLicense = $(".widget-main").find("input.chooseBusLicenseNumber");
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
				var seatCount = $(this).closest('.widget-main').find("input[name=seatCount]").val(),
				    busBrand = $(this).closest('.widget-main').find("input[name=needBusBrand]").val(),
				    busCompanyId = $(this).closest('.widget-main').find("input[name=busCompanyId]").val(),
				    quoteId= $(this).closest('.widget-main').find("input[name=qouteId]").val();
				  var data={
					seatCount: seatCount,
					brand: busBrand,
				}
				 if (quoteId != null&& quoteId!='') {
					data.busCompanyId = busCompanyId;
				 } 
				if (!!seatCount) {
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=getLicenseNumbers&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data:data,
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
			var chooseLicenseByCompany = $(".widget-main").find("input.T-chooseBusbyCompanyId");
			chooseLicenseByCompany.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var $this = $(this),parents = $(this).closest('.widget-main');
						$this.val("");
						parents.find("input[name=busLicenseNumberId]").val("");
					}
				},
				select :function(event, ui){
					var $this = $(this),parents = $(this).closest('.widget-main');
						parents.find("input[name=busLicenseNumberId]").val(ui.item.id).trigger('change');
				}
			}).unbind("click").click(function(){
				var obj = this;
				var id = $(this).closest('.widget-main').find("input[name=busCompanyId]").val()
				    busBrand = $(this).closest('.widget-main').find("input[name=needBusBrand]").val(),
				    quoteId= $(this).closest('.widget-main').find("input[name=qouteId]").val(),
				    seatCount=$(this).closest('.widget-main').find("input[name=seatCount]").val();
				var data= {
							brand:busBrand,
							seatCount:seatCount
						};
				    if (quoteId!=null&&quoteId!='') {
				    	data.busCompanyId=id;
				    };

				if (!!id) {
					$.ajax({
						url:""+APP_ROOT+"back/busCompany.do?method=getLicenseNumbers&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
						data:data,
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
					layer.tips('请选择车车队', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		};


		/**
		 * driverChoose 司机Autocomplate
		 * @return {[type]} [description]
		 */
	    arrangeTourist.driverChoose =  function(){
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
		};

		/**
		 * guideChoose 导游Autocomplate
		 * @return {[type]} [description]
		 */
		arrangeTourist.guideChoose = function(){
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
		};

		/**
		 * addTouristGroupMerge 散拼信息
		 */
		arrangeTourist.addTouristGroupMerge = function(){
			var	$visitorObj=$('#T-Visitor-list'),
			    $merge = $visitorObj.find('.T-arrangeTouristMergeList .list'),
			    $that=$(this),$parents=$that.closest('tr'),
			    memberCount = $parents.attr("data-entity-memberCount");
			    //计算已选人数
			    arrangeTourist.choosenAdultAndChildCount( $visitorObj );

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
					$merge.find('.btn-'+lineProductId+'-'+startTime+'').on('click', function(event) {
						event.preventDefault();
						/* Act on the event */
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
			
		};



		/**
		 * bindRemoveTouristGroupMerge 移除散拼
		 * @param  {[type]} $merge        [description]
		 * @param  {[type]} lineProductId [description]
		 * @param  {[type]} startTime     [description]
		 * @return {[type]}               [description]
		 */
	    arrangeTourist.bindRemoveTouristGroupMerge = function($merge,lineProductId,startTime){
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
		};

		/**
		 * removeTouristGroupMergeData 删除散拼
		 * @param  {[type]} $merge        [description]
		 * @param  {[type]} lineProductId [description]
		 * @param  {[type]} startTime     [description]
		 * @return {[type]}               [description]
		 */
		arrangeTourist.removeTouristGroupMergeData = function($merge,lineProductId,startTime){
			$merge.find(".btn-"+lineProductId+"-"+startTime+"").remove();
			$("#"+tabId+" .tr-"+lineProductId+"-"+startTime+" .T-touristGroupMergeCheckBox").prop("checked",false);
			var touristGroupMergeList = arrangeTourist.touristGroupMergeData.touristGroupMergeList;
			if(touristGroupMergeList.length > 0){
				for(var i=0;i<touristGroupMergeList.length;i++){
					if(touristGroupMergeList[i].lineProductId == lineProductId && touristGroupMergeList[i].startTime == startTime){
						touristGroupMergeList.splice(i,1);
						break;
					}
				}
			}
		};




		 /**
		  * init_transferEvent 转客报表绑定事件
		  * @return {[type]} [description]
		  */
		 arrangeTourist.init_transferEvent = function(){
		 	 var $transferObj= $('#T-Transfer-list'),
		 	     divId = " T-Transfer-list ",
		 	     $searchArgumentsForm=$transferObj.find('form'),
		 	     customerType =  2 ;

		 	 //查看小组信息
		 	 $transferObj.find('.T-arrageTransfer-list').on('click', '.T-action', function(event) {
            	event.preventDefault();
            	/* Act on the event */
            	var  $that=$(this),id=$that.closest('tr').data('value');
            	     arrangeTourist.viewTouristGroup(id);
            });


		 	 //内转
		 	 $transferObj.find('.T-arrageTransfer-inner').on('click', function(event) {
		 	 	event.preventDefault();
		 	 	var type = 1 ;
		 	 	/* Act on the event */
		 	 	arrangeTourist.inOutTransferTourist($transferObj,type);

		 	 });

		 	 //外转
		 	 $transferObj.find('.T-arrageTransfer-out').on('click', function(event) {
		 	 	event.preventDefault();
		 	 	var type = 2 ;
		 	 	/* Act on the event */
		 	 	arrangeTourist.inOutTransferTourist($transferObj,type);

		 	 });


		 	 //计算转客已选人数
		 	 $transferObj.find('.T-transferCheckBox').on('click', function(event) {
			    arrangeTourist.choosenAdultAndChildCount( $transferObj );
		 	 });

		 };


		/**
		 * choosenAdultAndChildCount 已选人数的计算
		 * @return {[type]} [description]
		 */
		arrangeTourist.choosenAdultAndChildCount = function($tab){
			var sumAdultCount = 0,sumChildCount = 0,
				$trList = $tab.find("tbody").children('tr');
				$trList.each(function(){
					var $that = $(this);
					if($that.find(".T-cheked").is(":checked")){
						sumAdultCount += parseInt($(this).attr("data-entity-adultcount"));
						sumChildCount += parseInt($(this).attr("data-entity-childcount"));
					}
				});

				console.info('roger..'+sumAdultCount+"zh"+sumChildCount );
				$tab.find(".T-chosenAdultAndChildCount").text("大人"+sumAdultCount+"小孩"+sumChildCount+"");
		};

        /**
         * viewTouristGroup 查看游客小组
         * @param  {[type]} id [description]
         * @return {[type]}    [description]
         */
		arrangeTourist.viewTouristGroup = function(id){
			$.ajax({
				url: KingServices.build_url("tripPlan","getMemberList"),
				data:"touristGroupId="+id+"",
				success:function(data){
					var result = showDialog(data);
					if(result){
						var memberList = JSON.parse(data.memberList);
						data.memberList = memberList;
						//var  memberList=data.memberList; 
						var html = viewTouristGroupTemplate(data);
						var viewGroupTemplateLayer = layer.open({
						    type: 1,
						    title:"查看小组信息",
						    skin: 'layui-layer-rim', //加上边框
						    area: '60%', //宽高
						    zIndex:1028,
						    content: html,
						    scrollbar: false,
						    success:function(){
						    	
						    }
						})
					}
				}	
			})
		};


		/**
		 * inOutTransferTourist 内转/外转报表操作
		 * @param  {[type]} $transferObj 内转转客Dom对象
		 * @return {[type]}              内外转标识
		 */
		arrangeTourist.inOutTransferTourist = function ($transferObj,type){
			var  ids=[];
			var $trList = $transferObj.find(".T-arrageTransfer-list").find('tr');
			    $trList.each(function(i) {
			    	var $cheked = $trList.eq(i).find('.T-transferCheckBox');
			    	    if ($cheked.is(":checked")) {
			    	    	var  id = $cheked.closest('tr').data('value');
			    	    	var transferIds = {
			    	    		id : id
			    	    	};
			    	    	console.info(transferIds);
			    	    	ids.push(transferIds );
			    	    };
			    });
			if ( !!ids && ids.length > 0) {
				var ids = JSON.stringify(ids);
				$.ajax({
					url : KingServices.build_url("touristGroup","getTouristGroupByIdsForTransit"),
					type:"POST",
					data:"ids="+encodeURIComponent(ids),
					success:function(data){
						var result = showDialog(data);
						if(result){
							data.touristGroupJson = JSON.parse(data.touristGroupJson);
							if ( type == 1 ) { //内转
								var html = inTransferTemplate(data);
								Tools.addTab(menuKey+"-innerTransfer","内转操作",html);
								//初始化时内转页面事件
							    arrangeTourist.init_innerTransfer_Event();

							} else{ //外转 
								var html = outTransferTemplate(data);
								Tools.addTab(menuKey+"-outTransfer","外转操作",html);
								//初始化时内转页面事件
							    arrangeTourist.init_outTransfer_Event();

							};	
						}
				    }
				})

			} else{
				showMessageDialog( $("#confirm-dialog-message"),"请选择游客小组",function(){

				});
			};
		};



	
		/**
		 * init_innerTransfer_Event 初始化内转报表操作
		 * @return {[type]} [description]
		 */
		arrangeTourist.init_innerTransfer_Event =  function(){
			var $innerTransfer =  $("#"+ tabIdInner);
			    //查看内转小组信息
			    $innerTransfer.find('.T-viewTouristGroup').on('click', function(event) {
			    	event.preventDefault();
			    	/* Act on the event */
			    	$that = $(this),id = $that.closest('tr').data('value');
			    	arrangeTourist.viewTouristGroup(id);
			    });

			    //填写费用
			    $innerTransfer.find('.T-editFee').on('click', function(event) {
			    	event.preventDefault();
			    	/* Act on the event */
			    	var $that = $(this),id = $that.closest('tr').data('value'),
			    	    type = 1 ;

			    	arrangeTourist.innerOutEditFee(id, type);
			    });

			    var $businessObj = $innerTransfer.find(".T-Chosen-businessGroup");

			    //获取内转对应的部门Autocomplate
			    arrangeTourist.getBusinessGroup($businessObj);

			    //内转保存操作
			    $innerTransfer.find(".T-saveTransfer").on('click', function(event) {
			    	event.preventDefault();
			    	//内转保存操作
			        arrangeTourist.saveInTransfer($innerTransfer);
			    });


				//绑定是否全选
			    $innerTransfer.find('.all .T-CheckAllBox').on('click', function(event) {
			    	/* Act on the event */
			    	var $that = $(this);
			    	arrangeTourist.checkTransferAll($innerTransfer,$that,"tbody");

			    });
			   
		};


		/**
		 * init_outTransfer_Event 外转操作绑定事件
		 * @return {[type]} [description]
		 */
		arrangeTourist.init_outTransfer_Event = function(){
			var $outTransfer =  $("#"+ tabIdOut );
			    //查看外转小组信息
			    $outTransfer.find('.T-viewTouristGroup').on('click', function(event) {
			    	event.preventDefault();
			    	/* Act on the event */
			    	$that = $(this),id = $that.closest('tr').data('value');
			    	arrangeTourist.viewTouristGroup(id);
			    });

			    //填写费用--外转
			    $outTransfer.find('.T-editFee').on('click', function(event) {
			    	event.preventDefault();
			    	/* Act on the event */
			    	var $that = $(this),id = $that.closest('tr').data('value');
			    	    type = 2 ; 
			    	arrangeTourist.innerOutEditFee(id , type );
			    });

			    var $partnerObj = $outTransfer.find(".T-Chosen-partnerAgency");

			    //获取外转对应的部门Autocomplate    partnerAgencyList
			    arrangeTourist.getPartnerAgencyList($partnerObj);

			    //外转保存操作
			    $outTransfer.find('.T-saveOutTransfer').on('click', function(event) {
			    	event.preventDefault();
			    	/* Act on the event */
			    	arrangeTourist.saveOutTransfer($outTransfer);
			    });

			    //外转取消
			    $outTransfer.find('.T-cancelOutTransfer').on('click', function(event) {
			    	event.preventDefault();
			    	/* Act on the event */
			    	closeTab( menuKey + "-outTransfer");
			    });

			    //绑定是否全选
			    $outTransfer.find('.all .T-CheckAllBox').on('click', function(event) {
			    	/* Act on the event */
			    	var $that = $(this);
			    	arrangeTourist.checkTransferAll($outTransfer,$that,"tbody");

			    });

		};



		
		/** 
		 * saveOutTransfer 外转保存
		 * @return {[type]} [description]
		 */
		arrangeTourist.saveOutTransfer = function ($outTransfer){
			  var touristGroupId = [];
				$outTransfer.find(".T-transferTouristGroup").children('tr').each(function(){
					var $that = $(this);
					if($that.find(".T-TransferCheckBox").is(":checked")){
						var id = $that.data("value");
						var ids = {
							id : id 
						};
						touristGroupId.push(ids);
					}
				});
				var partnerAgencyId = arrangeTourist.getVal($outTransfer,"partnerAgencyId") || 0;
				if(touristGroupId.length == 0){
					showMessageDialog($( "#confirm-dialog-message" ), "请勾选小组")
				}else if( partnerAgencyId == 0){
					showMessageDialog($( "#confirm-dialog-message" ), "请选择同行地接")
				}else{
					$.ajax({
						url: KingServices.build_url("transTourist","saveTransfer"),
						type:"POST",
						data:"touristGroupId="+JSON.stringify(touristGroupId)+"&partnerAgencyId="+partnerAgencyId+"",
						success:function(data){
							var result = showDialog(data);
							if(result){
								showMessageDialog($( "#confirm-dialog-message" ), data.message,function(){
									Tools.closeTab(menuKey+"-outTransfer");
									var customerType = 2 ,
									    divId = "T-Transfer-list" ,
									    $TransferObj = $("#" + divId );
									var $searchArgumentsForm=$TransferObj.find('form');
									arrangeTourist.listArrangeTourist(0,$searchArgumentsForm,customerType,divId);
								});
							}
						}
					})
				}

		};

	   /**
	    * checkTransferAll 全选组件
	    * @param  {[type]} $tab  TabId--唯一标识
	    * @param  {[type]} $that 当前点击对象
	    * @param  {[type]} tbody 
	    * @return {[type]}
	    */
	   arrangeTourist.checkTransferAll = function($tab,$that,tbody){
		   	var $trList = $tab.find("" + tbody ).children('tr'),
		   	    $is_Checked = $that.is(':checked');
		   	    if ( $is_Checked ) { //选中
		   	    	$trList.each(function(i) {
						$trList.eq(i).find('.T-TransferCheckBox').prop("checked" ,true);	
		   	    	});
		   	    } else{
		   	        $trList.each(function(i) {
						$trList.eq(i).find('.T-TransferCheckBox').prop("checked" ,false);
		   	    	}); 
		   	};
	   };
		/**
		 * innerEditFee innerEditFee 内转费用填写
		 * @param  {[type]} id 游客小组Id
		 * @return {[type]}    1---内转 ---2--  外转
		 */
		arrangeTourist.innerOutEditFee = function(id,type){
			if ( type == 1 ) {
				$.ajax({
					url: KingServices.build_url("innerTransferOperation","getInTransferFeeDetails"),
					type:"POST",
					data:"id="+id+"",
					success:function(data){
						var result = showDialog(data);
						if(result){
							var touristGroupInfo = JSON.parse(data.touristGroup);
								data.touristGroup = touristGroupInfo;
							var touristGroupFeeList = JSON.parse(data.touristGroupFeeList);
							    data.touristGroupFeeList = touristGroupFeeList;
							var innerTransferFeeList = JSON.parse(data.innerTransferFeeList);
							    data.innerTransferFeeList = innerTransferFeeList;
							var html = innerEditFeeTemplate(data);
							arrangeTourist.editFeeLayer = layer.open({
							    type: 1,
							    title:"编辑转客费用信息",
							    skin: 'layui-layer-rim', //加上边框
							    area: '60%', //宽高
							    zIndex:1028,
							    content: html,
							    scrollbar: false,
							    success:function(){
							    	//初始化编辑费用事件
							    	arrangeTourist.innerEditFee_Event(type);
							    }
							})
						}
					}
				});

			} else{
				$.ajax({
					url: KingServices.build_url("transTourist","getTransfer"),
					type:"POST",
					data:"id="+id+"",
					success:function(data){
						var result = showDialog(data);
						if(result){
							var touristGroupInfo = JSON.parse(data.touristGroup);
								data.touristGroup = touristGroupInfo;
							var touristGroupFeeList = JSON.parse(data.touristGroupFeeList);
							    data.touristGroupFeeList = touristGroupFeeList;
							var html = outEditFeeTemplate(data);
							arrangeTourist.editFeeLayer = layer.open({
							    type: 1,
							    title:"编辑转客费用信息",
							    skin: 'layui-layer-rim', //加上边框
							    area: '60%', //宽高
							    zIndex:1028,
							    content: html,
							    scrollbar: false,
							    success:function(){
							    	//初始化编辑费用事件
							    	arrangeTourist.outEditFee_Event(type);
							    }
							})
						}
					}
				});

			};
		};

        /**
         * innerEditFee_Event 编辑费用事件
         * @return {[type]} [description]
         */
		arrangeTourist.innerEditFee_Event = function(type) {
			var $editFeeObj = $("#T-innerEditFeeMain"),

			    //精度限制
			    $price = $editFeeObj.find('.price');
			    Tools.inputCtrolFloat( $price );

			    $editFeeObj.find(".T-newEditFee").on('click', function(event) {
			    	//新增内外转编辑费用
			    	arrangeTourist.newAddFee($editFeeObj,type);
			    });
			    //计算应付款
			    arrangeTourist.PayMoneyF($editFeeObj);

				$editFeeObj.find(".count").on('change',function(event) {
					event.preventDefault();
					/* Act on the event */
					arrangeTourist.PayMoneyF($editFeeObj);
				});

				$editFeeObj.find(".price").on('change',function(event) {
					event.preventDefault();
					/* Act on the event */
					arrangeTourist.PayMoneyF($editFeeObj);
				});

				//提交编辑转客费用信息
				$editFeeObj.find('.T-updateFee').on('click',function(event) {
					event.preventDefault();
					/* Act on the event */
					arrangeTourist.saveTransFee($editFeeObj,type);
				});

				//绑定删除
				$editFeeObj.find(".T-delete").off().on("click",function(){
					var $that=$(this),
					    $tr=$that.closest('tr');
					var id = $tr.attr("data-entity-id");
					arrangeTourist.delTransferData(id,$tr,$editFeeObj);
				});
		};


		/**
		 * outEditFee_Event  外转 
		 * @return {[type]} [description]
		 */
		arrangeTourist.outEditFee_Event = function(type){

			var $outFeeObj = $("#T-outEditFeeMain"),

				//精度限制
			    $price = $outFeeObj.find('.price');
			    Tools.inputCtrolFloat( $price );

			    $outFeeObj.find(".T-newEditFee").on('click', function(event) {
			    	//新增内外转编辑费用
			    	arrangeTourist.newAddFee($outFeeObj,type);
			    });

			    //绑定删除分团转客信息
				$outFeeObj.find(".T-delete").off().on("click",function(){
					var $that=$(this),
					    $tr=$that.closest('tr');
					var id = $tr.attr("data-entity-id");
					 arrangeTourist.delOutTransfer(id,$tr,$outFeeObj);
				});

			    //计算应付款
			    arrangeTourist.PayMoneyF($outFeeObj);

				$outFeeObj.find(".count").on('change',function(event) {
					event.preventDefault();
					/* Act on the event */
					arrangeTourist.PayMoneyF($outFeeObj);
				});

				$outFeeObj.find(".price").on('change',function(event) {
					event.preventDefault();
					/* Act on the event */
					arrangeTourist.PayMoneyF($outFeeObj);
				});

				//提交编辑转客费用信息
				$outFeeObj.find('.T-updateFee').on('click',function(event) {
					event.preventDefault();
					/* Act on the event */
					arrangeTourist.saveTransFee($outFeeObj,type);
				});


		};



			/**
		 * [newAddFee 给新增费用绑定事件]
		 * @param  {[type]} $tab      [description]
		 * @return {[type]}           [description]
		 */
		arrangeTourist.newAddFee=function($tab,type){
		 	var html="<tr><td><span name=\"type\" value=\"0\">其他费用</span></td>"+
			          "<td><input  name=\"describe\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
			          "<td><input  name=\"count\" type=\"text\" class=\"col-sm-12  no-padding-right count\" /></td>"+
					  "<td><input  name=\"otherPrice\" type=\"text\" class=\"col-sm-12  no-padding-right price\" /></td>"+
					  "<td><a class=\"cursor T-delete\">删除</a></td></tr>";
		    var $tbody = $tab.find(".T-innerOutEditFeeTbody");
	    	    $tbody.append(html);

	    	//精度限制
	    	var  $price = $tbody.find('.price');
	    	     Tools.inputCtrolFloat( $price );

			// 更新表单验证的事件绑定
			//rule.update(validator);   
			
			//绑定删除分团转客信息
			if (type == '1') {
				$tab.find(".T-delete").off().on("click",function(){
					var $that=$(this),
					    $tr=$that.closest('tr');
					var id = $tr.attr("data-entity-id");
					arrangeTourist.delTransferData(id,$tr,$tab);
			    });

			} else{
				 $tab.find(".T-delete").off().on("click",function(){
					var $that=$(this),
					    $tr=$that.closest('tr');
					var id = $tr.attr("data-entity-id");
					arrangeTourist.delOutTransfer(id,$tr,$tab);
			    });
			};
			

			$tab.find(".count").on('change',function(event) {
				event.preventDefault();
				/* Act on the event */
				arrangeTourist.PayMoneyF($tab);
			});

			$tab.find(".price").on('change',function(event) {
				event.preventDefault();
				/* Act on the event */
				arrangeTourist.PayMoneyF($tab);
			});

			//重新计算
			arrangeTourist.PayMoneyF($tab);

		};



		/**
		 * 逻辑删除&&及时删除
		 * @param  {[type]} id  费用Id
		 * @param  {[type]} $tr f行对象
		 * @return {[type]}     [description]
		 */
		arrangeTourist.delTransferData=function(id,$tr,$tab){
			if( id!=null && id!=""){
				$.ajax({
					url:KingServices.build_url("innerTransferOperation","deleteInTransferFee"),
					type:"POST",
					data:"id="+id,
					success:function(data){
						$tr.remove();
						arrangeTourist.PayMoneyF($tab);
					}
				});	
			}else{
				//移除空的其他费用
				$tr.fadeOut(function() {
					$tr.remove();
					arrangeTourist.PayMoneyF($tab);
				});
			}
		};

		/**
		 * delOutTransfer        外转删除
		 * @param  {[type]} id   [description]
		 * @param  {[type]} $tr  [description]
		 * @param  {[type]} $tab [description]
		 * @return {[type]}      [description]
		 */
	    arrangeTourist.delOutTransfer = function(id,$tr,$tab){
	    	if (!!id &&　id != null) {
	    		//移除空的其他费用
				$tr.fadeOut(function() {
					$tr.addClass('deleted');
					$tr.hide();
					arrangeTourist.PayMoneyF($tab);
				});
	    	} else{
	    		//移除空的其他费用
				$tr.fadeOut(function() {
					$tr.remove();
					arrangeTourist.PayMoneyF($tab);
				});
	    	};
	    };

		/**
		 * [PayMoneyF 付款账务--应付/现付/已付的计算]
		 */ 
		arrangeTourist.PayMoneyF=function($tab){
			var needPayMoney = 0,//transNeedPayAllMoney   transPayedMoney
			    transNeedPayAllMoney = $tab.find("input[name=transNeedPayAllMoney]"),//应付
			    transPayedMoney = $tab.find("input[name=transPayedMoney]"), //已付
			    transCurrentPM = $tab.find("input[name=transCurrentPayedMoney]"), //现付
			    trList = $tab.find("tbody.T-innerOutEditFeeTbody").find("tr");
						
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
		};

		/**
		 * saveTransFee 提交转客费用信息
		 * @return {[type]} [description]
		 */
		arrangeTourist.saveTransFee = function($editFeeObj,type){
			var transferFeeStatus = arrangeTourist.getVal($editFeeObj, "transferFeeStatus"),
			    $innerForm = $editFeeObj.find('form'),
			    id = arrangeTourist.getVal($editFeeObj , "touristGroupId");
			var touristGroup = {
						"id" : id,
						"transRemark" : arrangeTourist.getVal($editFeeObj, "remark") || "无",
						"transAdultPrice" : arrangeTourist.getVal($editFeeObj, "transAdultPrice") || 0,
						"transChildPrice" : arrangeTourist.getVal($editFeeObj, "transChildPrice") || 0,
						"transPayedMoney" : arrangeTourist.getVal($editFeeObj, "transPayedMoney") || 0,
						"transNeedPayAllMoney": arrangeTourist.getVal($editFeeObj, "transNeedPayAllMoney") || 0 ,
						"isCurrent" : arrangeTourist.getVal($editFeeObj, "isCurrent") || 0
				    },
				otherFeeList = [],
				inTransferFee = {
					innerTransferFeeList : []
				}
			var $tbodyFee = $editFeeObj.find(".T-innerOutEditFeeTbody"),
				$trNotDelete = $tbodyFee.find('tr:not(.deleted)'),
			    otherFeeListLength = $trNotDelete.length;
			$trNotDelete.each(function(i) {
				var $that=$(this);
				if ( i > 1) {
				   var FeeJson = {
					    id : $that.attr("data-entity-id"),
					    type : arrangeTourist.getVal($that, "value"),
					    discribe : arrangeTourist.getVal($that, "describe"),
					    otherPrice : arrangeTourist.getVal($that, "otherPrice"), 
					    count : arrangeTourist.getVal($that, "count")
					};
					otherFeeList.push(FeeJson);	
					inTransferFee.innerTransferFeeList.push(FeeJson);
				};
			});


			var otherFeeListDel = [];
			if (transferFeeStatus==1) {
				$tbodyFee.find(" tr.deleted").each(function(i){
				var otherFeeDel = {
						"id" : $(this).attr("data-entity-id")
					};
					otherFeeListDel.push( otherFeeDel );
				})
			};
			var formInData = $innerForm.serialize();
			var touristGroup = JSON.stringify(touristGroup),
			    inTransferFee = JSON.stringify(inTransferFee ),
			    otherFeeList = JSON.stringify(otherFeeList),
			    otherFeeListDel = JSON.stringify(otherFeeListDel);


			if ( type == 1) {
				$.ajax({
					url: KingServices.build_url("innerTransferOperation","saveInTransferFee"),
					data:formInData+"&inTransferFee="+inTransferFee+"",
					type:"POST",
					success:function(data){
						var result = showDialog(data);
			        	if(result){
			        		showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							layer.close(arrangeTourist.editFeeLayer);
			        			if(data.success==1){
	        					  var inTransferTr = $(".T-transferTouristGroup-list").find("tr");
			        				  inTransferTr.each(function(i){
				        					var id = inTransferTr.eq(i).data("value");
				        					if(id == data.touristGroupId ){
				        						inTransferTr.eq(i).find("td.transferFeeStatus").html('<i class ="ace-icon fa fa-check green"></i>已填写');
				        						inTransferTr.eq(i).find("[name=label_payed]").html(data.transPayedMoney);
				        						inTransferTr.eq(i).find("[name=label_needPay]").html(data.transNeedPayAllMoney);
				        					}
				        		     })

			        			}
			        		})
				    	}
					}
				})
			} else {
				$.ajax({
					url: KingServices.build_url("transTourist","saveTransFee"),
					data:"touristGroup="+encodeURIComponent(touristGroup)+"&otherFeeList="+encodeURIComponent(otherFeeList)+"&otherFeeListDel="+encodeURIComponent(otherFeeListDel),
					type:"POST",
					success:function(data){
						var result = showDialog(data);
			        	if(result){
			        		showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							layer.close(arrangeTourist.editFeeLayer);
			        			if(data.success==1){
			        		        var transferTr = $(".T-transferTouristGroup").find("tr");
				        				transferTr.each(function(i){
				        					var id = transferTr.eq(i).data("value");
				        					if(id == data.id){
				        						transferTr.eq(i).find("td.transferFeeStatus").html('<i class ="ace-icon fa fa-check green"></i>已填写');
				        						transferTr.eq(i).find("[name=label_payed]").html(data.transPayedMoney);
				        						transferTr.eq(i).find("[name=label_needPay]").html(data.transNeedPayAllMoney);
				        				}
				        			})

			        			}
			        		})
				    	}
					}
				})
			}	
		};

	
		/**
		 * saveInTransfer 内转保存操作
		 * @return {[type]} [description]
		 */
		 arrangeTourist.saveInTransfer = function($innerTransfer){
			var touristGroupIds = [];
				$innerTransfer.find(".T-transferTouristGroup-list").children('tr').each(function(){
					var $that = $(this);
					if($that.find(".T-TransferCheckBox").is(":checked")){
						var id = $that.data("value");
						touristGroupIds.push(id);
					}
				});
				var businessGroupId = arrangeTourist.getVal($innerTransfer,"businessGroupId") || 0;
				if(touristGroupIds.length == 0){
					showMessageDialog($( "#confirm-dialog-message" ), "请勾选小组")
				}else if(businessGroupId == 0){
					showMessageDialog($( "#confirm-dialog-message" ), "请选择部门")
				}else{
					$.ajax({
						url: KingServices.build_url("innerTransferOperation","saveInTransfer"),
						type:"POST",
						data:"touristGroupIds="+touristGroupIds+"&businessGroupId="+businessGroupId+"",
						success:function(data){
							var result = showDialog(data);
							if(result){
								showMessageDialog($( "#confirm-dialog-message" ), data.message,function(){
									Tools.closeTab(menuKey+"-innerTransfer");
									var customerType = 2 ,
									    divId = "T-Transfer-list" ,
									    $TransferObj = $("#" + divId );
									var $searchArgumentsForm=$TransferObj.find('form');
									arrangeTourist.listArrangeTourist(0,$searchArgumentsForm,customerType,divId);
								});
							}
						}
					})
				}
		 };


		/**
		 * getBusinessGroup 获取内转对应部门数据Autocomplate
		 * @param  {[type]} $businessObj [description]
		 * @return {[type]}              [description]
		 */
		arrangeTourist.getBusinessGroup = function ( $businessObj ){
			$.ajax({
				url: KingServices.build_url("innerTransferOperation","getBusinessGroupList"),
				type:"POST",
				success:function(data){
					var result = showDialog(data);
					if(result){
					var businessGroupList;
					    data.businessGroupList=JSON.parse(data.businessGroupList);
					    businessGroupList=data.businessGroupList;
						  if(!!businessGroupList && businessGroupList.length> 0){
						    	for(var i=0; i < businessGroupList.length; i++){
									businessGroupList[i].value = businessGroupList[i].name;
							    };
						    }
							$businessObj.autocomplete({
								minLength:0,
								change :function(event, ui){
									if(ui.item == null){
										var parents = $(this).parent();
										parents.find("input[name=businessGroupId]").val("");
									}
								},
								select :function(event, ui){
									var _this = this, parents = $(_this).parent();
									parents.find("input[name=businessGroupId]").val(ui.item.id).trigger('change');
								},source:businessGroupList
							}).unbind("click").click(function(){
								var obj = this,$obj = $(obj);
								if(!!businessGroupList && businessGroupList.length){
									$obj.autocomplete('search', '');
								}else{
									layer.tips('没有内容', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
						})
					}
				}
		    });
		};



		/**
		 * getPartnerAgencyList 获取外转同行地接
		 * @param  {[type]} $partnerObj [description]
		 * @return {[type]}             [description]
		 */
		arrangeTourist.getPartnerAgencyList = function ( $partnerObj ){
			$.ajax({
				url: KingServices.build_url("partnerAgency","findPartnerAgencyByOtherTravelAgency"),
				type:"POST",
				success:function(data){
					var result = showDialog(data);
					if(result){
					var partnerAgencyList;
					    data.partnerAgencyList=JSON.parse(data.partnerAgencyList);
					    partnerAgencyList=data.partnerAgencyList;
						  if(!!partnerAgencyList && partnerAgencyList.length> 0){
						    	for(var i=0; i < partnerAgencyList.length; i++){
									partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName;
							    };
						    }
							$partnerObj.autocomplete({
								minLength:0,
								change :function(event, ui){
									if(ui.item == null){
										var parents = $(this).parent();
										parents.find("input[name=partnerAgencyId]").val("");
									}
								},
								select :function(event, ui){
									var _this = this, parents = $(_this).parent();
									parents.find("input[name=partnerAgencyId]").val(ui.item.id).trigger('change');
								},source:partnerAgencyList
							}).unbind("click").click(function(){
								var obj = this,$obj = $(obj);
								if(!!partnerAgencyList && partnerAgencyList.length){
									$obj.autocomplete('search', '');
								}else{
									layer.tips('没有内容', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
									});
								}
						})
					}
				}
		    });
		};



		/**
		 * 组团社与业务部选项
		 * @param  {[type]} $obj 选择对象
		 * @return {[type]}
		 */
	    arrangeTourist.chosenPartAgenOrBussiness = function($that){
			var $parents = $that.closest('div'),$val = $that.val();
				if ($val == 1) {   //组团社
					$parents.find('.T-chosenPB').hide();
					$parents.find('.T-fromBussinessGroup').hide();
					$parents.find('.T-fromPartnerAgency').show();
				}else if ( $val == 2 ) { //业务部
					$parents.find('.T-chosenPB').hide();
					$parents.find('.T-fromPartnerAgency').hide();
					$parents.find('.T-fromBussinessGroup').show();
				}else if( $val == '' ){
					$parents.find('.T-chosenPB').show();
					$parents.find('.T-fromPartnerAgency').hide();
					$parents.find('.T-fromBussinessGroup').hide();
				}
				$parents.find('.T-fromPartnerAgency').val("");
				$parents.find('.T-fromBussinessGroup').val("");
				$parents.find('[name=fromPartnerAgencyId]').val("");
				$parents.find('[name=fromBussinessGroupId]').val("");
	    };


	    /**
	     * 线路产品Autocomplete
	     * @param  {[type]} $obj [description]
	     * @return {[type]}      [description]
	     */
		arrangeTourist.chooseLineProduct = function($obj,customerType){
			$obj.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						var parents = $(this).parent();
						parents.find("input[name=lineProductId]").val("");
					}
				},
				select :function(event, ui){
					var _this = this, parents = $(_this).parent();
					parents.find("input[name=lineProductId]").val(ui.item.id).trigger('change');
				}
			}).unbind("click").click(function(){
				var obj = this,$obj = $(obj),list;
				$.ajax({
					url:KingServices.build_url("touristGroup","getQueryForTripOperation"),
					type: 'POST',
					dataType: 'json',
					data:"customerType="+customerType,
					success:function(data){
				       var result = showDialog(data);
				        if (result) {
				        	 var list;
				           	 if (customerType == 0) {
				           	 	 list=data.lineProductList;	
				           	 } else if (customerType == 1) {
				           	 	list=data.lineProductList;	
				           	 }else if( customerType == 2){
				           	 	list=data.lineProductList;	
				           	 }
				           	 if(!!list && list.length> 0){
							    	for(var i=0; i < list.length; i++){
										list[i].value = list[i].name;
								    };
							 }else{
							    	layer.tips('没有内容', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
								    });
							};
							$obj.autocomplete('option','source', list);
							$obj.autocomplete('search', '');
					    }
					}
			   })
		    }) 
		};


		/**
	     * 业务部----Autocomplete
	     * @param  {[type]} $obj [description]
	     * @return {[type]}      [description]
	     */
		arrangeTourist.chooseBusinessGroup = function($obj,customerType){
			$obj.autocomplete({
					minLength:0,
					change :function(event, ui){
						if(ui.item == null){
							var parents = $(this).parent();
							parents.find("input[name=fromBussinessGroupId]").val("");
						}
					},
					select :function(event, ui){
						var _this = this, parents = $(_this).parent();
						parents.find("input[name=fromBussinessGroupId]").val(ui.item.id).trigger('change');
					}
				}).unbind("click").click(function(){
					var obj = this,$obj = $(obj),list;
					$.ajax({
						url:KingServices.build_url("touristGroup","getQueryForTripOperation"),
						type: 'POST',
						dataType: 'json',
						data:"customerType="+customerType,
						success:function(data){
					       var result = showDialog(data);
					        if (result) {
					          var list;
					           	 if (customerType == 0) {
					           	 	 list=data.fromBusinessGroupList;
					           	 } else if (customerType == 1) {
					           	 	list=data.fromBusinessGroupList;	
					           	 }else if( customerType == 2){
					           	 	list=data.fromBusinessGroupList;	
					           	 }
					           	if(!!list && list.length> 0){
							    	for(var i=0; i < list.length; i++){
										list[i].value = list[i].businessGroupName;
								    };
							    }else{
							    	layer.tips('没有内容', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
								    });
							    };
								$obj.autocomplete('option','source', list);
							    $obj.autocomplete('search', '');
							}
						}
			        })
			  })
		};

	    /**
	     * 组团社----Autocomplete
	     * @param  {[type]} $obj [description]
	     * @return {[type]}      [description]
	     */
		arrangeTourist.choosePartnerAgency = function($obj,customerType){
			$obj.autocomplete({
					minLength:0,
					change :function(event, ui){
						if(ui.item == null){
							var parents = $(this).parent();
							parents.find("input[name=fromPartnerAgencyId]").val("");
						}
					},
					select :function(event, ui){
						var _this = this, parents = $(_this).parent();
						parents.find("input[name=fromPartnerAgencyId]").val(ui.item.id).trigger('change');
					}
				}).unbind("click").click(function(){
					var obj = this,$obj = $(obj),list;
					$.ajax({
						url:KingServices.build_url("touristGroup","getQueryForTripOperation"),
						type: 'POST',
						dataType: 'json',
						data:"customerType="+customerType,
						success:function(data){
					       var result = showDialog(data);
					        if (result) {
					           	 if (customerType == 0) {
					           	 	 list=data.fromPartnerAgencyList;
					           	 } else if (customerType == 1) {
					           	 	list=data.fromPartnerAgencyList;	
					           	 }else if( customerType == 2){
					           	 	list=data.fromPartnerAgencyList;	
					           	 }
					           	if(!!list && list.length> 0){
							    	for(var i=0; i < list.length; i++){
										list[i].value = list[i].travelAgencyName;
								    };
							    }else{
							    	layer.tips('没有内容', obj, {
									    tips: [1, '#3595CC'],
									    time: 2000
								    });
							    };
								$obj.autocomplete('option','source', list);
							    $obj.autocomplete('search', '');
							}
						}
			        })
			  })
		};	

	    //获取value值
		arrangeTourist.getVal = function(obj, name){
			return obj.find("[name="+name+"]").val();
		};

	    /**
		 * 时间控件是初始化
		 * @param  {[type]} $tabId 在外层ID
		 * @return {[type]}
		 */
		arrangeTourist.initDatePicker = function($tabId){
			$tabId.find('.datepicker').datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			})

			//定时发送
			$tabId.find('.dataTimePicker').datetimepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'L',
				language: 'zh-CN'
			});


		};

		exports.init = arrangeTourist.initModule;
});