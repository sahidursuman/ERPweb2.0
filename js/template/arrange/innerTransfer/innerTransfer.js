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
			success:function(data){
				var result = showDialog(data);
				if(result){
					innerTransfer.allData.fromBusinessGroup = JSON.parse(data.fromBusinessGroup)
					innerTransfer.allData.fromUser = JSON.parse(data.fromUser)
					innerTransfer.allData.lineProduct = JSON.parse(data.lineProduct)
					innerTransfer.allData.toBusinessGroup = JSON.parse(data.toBusinessGroup)
					innerTransfer.allData.toUser = JSON.parse(data.toUser);
					var html = listMainTemplate(innerTransfer.allData);
					Tools.addTab(menuKey,"内转管理",html);

					//内转管理页面绑定事件
					innerTransfer.initActionEvent();


				}
			}
		});
	};
	/**
	 * [initActionEvent 内转管理页面绑定事件]
	 * @return {[type]} [description]
	 */
	innerTransfer.initActionEvent=function(){
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
		innerTransfer.$searchParam.pageNo = page;
		innerTransfer.$searchParam.type = type;
		$.ajax({
			url:KingServices.build_url("innerTransfer","findPager"),
			type: 'POST',
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
			success:function(data){
				data.innerTransfer = JSON.parse(data.innerTransfer);
				data.parentTouristGroup = JSON.parse(data.parentTouristGroup);
				
				var html = viewTemplate(data);
				var outViewTemplate = innerTransferOut(data);
				if(type == 1){
					Tools.addTab(menuKey+"-outView","我部转出小组信息",html);
				}else{
					Tools.addTab(menuKey+"-inView","他部转入小组信息",outViewTemplate);
				}
				
			}
		});
	};
	innerTransfer.editTransferOut = function(id){
		$.ajax({
			url:KingServices.build_url("innerTransfer","edit"),
			data:"id="+id,
			success:function(data){
				data.innerTransfer = JSON.parse(data.innerTransfer);
				data.businessGroup = JSON.parse(data.businessGroup);
				data.parentTouristGroup = JSON.parse(data.parentTouristGroup);
				var result = showDialog(data);
				if (result) {
					var html = editTemplate(data),validator,
					    title="修改内转信息",
					    tab_id=menuKey+"-edit",
					    id=data.innerTransfer.touristGroup.id;
						//初始化Tab
						if (Tools.addTab(tab_id,title,html)) {
							innerTransfer.init_updata_tab(tab_id,id);
						};
				}
			}
		});
	};

    /**
     * [init_updata_tab 为Tab编辑页面绑定事件]
     * @param  {[type]} tab_id [description]
     * @param  {[type]} data   [description]
     * @return {[type]}        [description]
     */
	innerTransfer.init_updata_tab=function(tab_id,id){
		    var $tab=$('#tab-'+ tab_id + '-content');
		    //绑定所有事件
		    innerTransfer.init_CRU_event(id,$tab);
	};

	/**
	 * [init_CRU_event 我部转出编辑页面绑定事件]
	 * @param  {[type]} id   内转小组ID
	 * @param  {[type]} $tab [description]
	 * @return {[type]}      [description]
	 */
	innerTransfer.init_CRU_event=function(id,$tab){
		if (!!$tab && $tab.length === 1) {
			var validator = rule.transferCheckor($tab);
				// 监听修改
				$tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
				.on('change', function(event) {
					event.preventDefault();
					$tab.data('isEdited', true);
				})
				// 监听保存，并切换tab
				.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
					event.preventDefault();
					innerTransfer.saveEditTranIn($tab, validator, [tab_id, title, html]);
				})

				.on(SWITCH_TAB_BIND_EVENT, function(event) {
					event.preventDefault();
					innerTransfer.init_CRU_event($tab.find('.T-saveTransoutInfo').data('id'), $tab);
				})

				// 保存后关闭
				.on(CLOSE_TAB_SAVE, function(event) {
					event.preventDefault();
					innerTransfer.saveEditTranIn($tab, validator);
				});

				//为新增费用绑定事件
			    $tab.find('.T-transfer-addCost').on('click', function(event) {
			    	event.preventDefault();
			    	/* Act on the event */
			    	innerTransfer.innitAddFee($tab ,validator);
			    });

			    //重新计算
			    innerTransfer.PayMoneyF($tab);

			    //数量&&价格change事件
				$tab.find(".count").on('change',function(event) {
					event.preventDefault();
					/* Act on the event */
					innerTransfer.PayMoneyF($tab);
				});
				$tab.find(".price").on('change',function(event) {
					event.preventDefault();
					/* Act on the event */
					innerTransfer.PayMoneyF($tab);
				});

				//精度调整
				var $price=$tab.find('.price'),
				    $transPayedMoney=$tab.find('input[name=transPayedMoney]');
				Tools.inputCtrolFloat($transPayedMoney);
				Tools.inputCtrolFloat($price);


				//绑定分团转客信息
				$tab.find('.T-saveTransoutInfo').on('click', function(event) {
					event.preventDefault();
					/* Act on the event */
					innerTransfer.saveEditTranIn($tab,validator); 
				});

				//取消关闭Tab
				$tab.find('.T-cancelTransfer').on('click', function(event) {
					event.preventDefault();
					/* Act on the event */
					Tools.closeTab(Tools.getTabKey($tab.prop('id')));	
				});

				//物理删除与及时删除
				$tab.find('.T-edittransfer-delete').off().on("click",function(){
					var $tr =$(this).closest('tr'),id = $tr.attr("data-entity-id");
					innerTransfer.delTransferData(id,$tr,$tab);
				});

		}
	};

    /**
     * [innitAddFee 新增费用项目]
     * @param  {[type]} $tab      [description]
     * @param  {[type]} validator [description]
     * @return {[type]}           [description]
     */
	innerTransfer.innitAddFee=function($tab,validator){
		var html="<tr class=\"transferFee1SelectId\">"+
			"<td><span name=\"type\" value=\"0\">其他费用</span></td>"+
			"<td><input  name=\"discribe\" type=\"text\" class=\"col-sm-10  no-padding-right\"  maxlength=\"100\" /></td>"+
			"<td><input  name=\"count\" type=\"text\" class=\"col-sm-10  no-padding-right count\" maxlength=\"6\" /></td>"+
			"<td><span class=\"necessary  pull-left col-sm-2\"></span><input  name=\"price\" type=\"text\" class=\"col-sm-10  no-padding-right price\" maxlength=\"9\" /></td>"+
			"<td><a class=\"cursor T-edittransfer-delete\">删除</a></td>"+
			"</tr>";
			$tab.find(".addTransferCost").append(html);

			var $tbody=$tab.find(".addTransferCost");
			    $tbody.append(html);
			var $price=$tbody.find('input[name=price]');
			Tools.inputCtrolFloat($price);

			//表单验证
			rule.update(validator);

			//绑定删除分团转客信息
			$(".T-edittransfer-delete").off().on("click",function(){
				var $tr =$(this).closest('tr'),id = $tr.attr("data-entity-id");
				innerTransfer.delTransferData(id,$tr,$tab);
			});

			//重新计算
			$tab.find('.count').on('change',function(event) {
				event.preventDefault();
				/* Act on the event */
				innerTransfer.PayMoneyF($tab);
			});

			//重新计算
			$tab.find('.price').on('change',function(event) {
				event.preventDefault();
				/* Act on the event */
				innerTransfer.PayMoneyF($tab);
			});

	};


	/**
	 * [PayMoneyF 支付账务的计算]
	 */
	innerTransfer.PayMoneyF = function($tab){
		var needPayMoney = 0,
			transNeedPayMoney = $tab.find("input[name=transNeedPayMoney]"),//应付
			transPayedMoney = $tab.find("input[name=transPayedMoney]"), //已付
			trList = $tab.find("tbody.addTransferCost").find("tr");
					
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
		if(Math.abs(needPayMoney) > 900000000){
			showMessageDialog($( "#confirm-dialog-message" ),"计算应付值过大，请确认数据是否有误");
		}
		//应付
		transNeedPayMoney.val(needPayMoney.toFixed(2));
	};

	/**
	 * delTransferData 根据Id判定是物理删除&&及时删除
	 * @param  {[type]} id  [description]
	 * @param  {[type]} $tr [description]
	 * @return {[type]}     [description]
	 */
	innerTransfer.delTransferData = function(id,$tr,$tab){
		if( id!=null && id!=""){
			$.ajax({
				url:innerTransfer.url("deleteFee","delete"),
				type:"POST",
				data:"id="+id,
				success:function(data){
					$tr.remove();
					innerTransfer.PayMoneyF($tab);
				}
			});	
		}else{
			//移除空的其他费用
			$tr.remove();
			innerTransfer.PayMoneyF($tab);
		}
	}
	innerTransfer.saveEditTranIn = function($tab,validator,tabArgs){
		// 表单校验
		if (!validator.form()) { return; }
		var $obj=$tab;
		function getValParam (name){
			var val = $tab.find("[name="+name+"]").val();
			return val;
		}
		var payMoney = parseFloat(getValParam("transNeedPayMoney"));
		if(Math.abs(payMoney) > 900000000){
			showMessageDialog($( "#confirm-dialog-message" ),"计算应付值过大，请确认数据是否有误");
			return false;
		}
		var cashFlag = getValParam("cashFlag");
		var innerTransferJson = {
			id : getValParam("id"),//	内转ID		
			innerTransferFeeSet : "",	//内转的其他费用	array<object>	
			toBusinessGroupId :$tab.find("input[name=businessGroup_id]").data('group-id'),//	转给的部门ID	  	
			transAdultPrice	: getValParam("transAdultPrice"),//内转大人价		
			transChildPrice	: getValParam("transChildPrice"), //内转小孩价		
			transNeedPayMoney :getValParam("transNeedPayMoney"),//	应付		需要计算
			transPayedMoney	 : getValParam("transPayedMoney"), //已付		填写
			transRemark : getValParam("transRemark"),
			isCurrent : getValParam("isCurrent"),
			payType : getValParam("payType")
		}   

		//获取新增费用项目
		//添加费用JSON
		var otherFeeJsonAdd = [];
		var otherFeeJsonAddLength=$tab.find(".addTransferCost tr").length;
		$tab.find(".addTransferCost tr").each(function(i){
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
		innerTransferJson.innerTransferFeeSet=otherFeeJsonAdd;
		var innerTransferJson=JSON.stringify(innerTransferJson);
		$.ajax({
			url:KingServices.build_url("innerTransfer","update"),
			data:"innerTransfer="+encodeURIComponent(innerTransferJson)+"&cashFlag="+cashFlag,
			success:function(data){
				var result = showDialog(data);  
				if(result){ 
					$tab.data('isEdited', false); 
					showMessageDialog($( "#confirm-dialog-message" ),data.message,function(){
							if (!!tabArgs && tabArgs.length === 3) {
								// 切换tab，就不做数据更新
								Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
								innerTransfer.init_updata_tab(tabArgs[0]);
							} else {
								var divId = "inner-TransferOut",
									type = "1";
									innerTransfer.getSearchParam(divId,type);
									innerTransfer.innerList(divId,type,0);	
								Tools.closeTab(Tools.getTabKey($tab.prop('id')));						
							}
					});
				}
			}
		});
	}


		innerTransfer.deleteTransferOut = function(id){
			if(!!id){
				showNndoConfirmDialog($("#confirm-dialog-message"),"是否撤销内转操作？",function(){
					$.ajax({
								url:KingServices.build_url("innerTransfer","delete"),
								type:"POST",
								data:"id="+id + "&isDelete=1",
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
					
				});
			}
		}

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
							success:function(data){
								var result = showDialog(data);
								if (result) {
									var divId = "inner-TransferIn",
										type = "2";
									innerTransfer.getSearchParam(divId,type);
									innerTransfer.innerList(divId,type,0);

									var touristGroupId=data.touristGroupId;

									//是否中转安排提信息
									KingServices.updateTransferIn(touristGroupId);

									//内转确认后数据刷新
									$innerTrsfInObj=$('#inner-TransferIn');
									$innerTrsfInObj.find(".T-transferIn-search").off("click").on("click",{divId:"inner-TransferIn",btn:"btn-transferIn-search",type:"2"},innerTransfer.getListPage);
									$innerTrsfInObj.find(".T-transferIn-search").trigger('click');
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