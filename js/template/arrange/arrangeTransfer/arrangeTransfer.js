/**
 * 我社转出&&他部转入数据列表的查询、编辑、查看、删除操作
 * @param  {[type]} require  [description]
 * @param  {String} exports) {	var        menuKey [description]
 * @return {[type]}          [description]
 */
define(function(require, exports) {
	var rule = require("./rule"),
	    menuKey = "arrange_transfer",
	    listMainTemplate = require("./view/listMain"),
	    outListTemplate=require("./view/listTransferOut"),
	    inListTemplate=require("./view/listTransferIn"),
	    viewTrsferOutTemplate=require("./view/viewTransferOut"),
	    updateTransferOutTemplate=require("./view/updateTransferOut"),
	    viewTransferInTemplate=require("./view/viewTransferIn"),
	    editTransferInTemplate=require("./view/editTransferIn"),
	    searchLineProTrsInTemplate=require("./view/searchLineProIn"),
	    pmenuKey="resource_partnerAgency",
	    tabId="tab-"+menuKey+"-content",
	    tabIdOut="tab-"+menuKey+"-updateTransferOut-content",
	    transfer={
	    	$searchParam : {
	    		creator : "",	
				startTime : "",
				endTime	: "",
				lineProductId : "",			
				lineProductName	: "",						
				partnerAgencyId	: "",	//地接社	
				partnerAgencyName :"",					
				status	: "",		
				type : "",	
				userName : "",
				pageNo : ""
	    	},
	    	$tab:"",
	    	$divIdOutObj:"",
	    	$divIdInObj:"",
	    	allData : {}
	    };
		var getFeeItemPayTypeOptions =  {
	         payType : 1
	    };

	    /**
	     * 初始化转客数据
	     * @return {[type]} [description]
	     */
	    transfer.initModule=function(){
	    	transfer.transferList();
	    };
	    
	    transfer.transferList=function(){
	    	//异步Ajax请求下拉数据
	    	transfer.listMainHead();
	    };

	    /**
	     * [listMainHead 转客管理所有下拉数据Ajax]
	     * @return {[type]} [description]
	     */
	    transfer.listMainHead=function(){
	    	$.ajax({
	    		url: KingServices.build_url('transfer', 'findListInfo'),
	    		type: 'POST',
	    		success:function(data){
					var result = showDialog(data);
					if(result){
						transfer.allData.lineProduct1 = JSON.parse(data.lineProduct1);
						transfer.allData.lineProduct2 = JSON.parse(data.lineProduct2);
						transfer.allData.partnerAgency = JSON.parse(data.partnerAgency1);
						transfer.allData.partnerAgency2 = JSON.parse(data.partnerAgency2);
						transfer.allData.user1 = JSON.parse(data.user1);
						transfer.allData.user2 = JSON.parse(data.user2);

						var html=listMainTemplate(transfer.allData);
						Tools.addTab(menuKey,"外转管理",html);

				    	transfer.$tab=$('#'+ tabId);
				    	//初始化时间插件
				    	transfer.datePicker(transfer.$tab);
				    	//初始化事件的绑定
				    	transfer.init_event(); 	
					}
			    }
	    	})
	    };

	    /**
	     * [init_event listMain搜索域数据查询事件绑定]
	     * @return {[type]} [description]
	     */
	    transfer.init_event=function(){
	    	transfer.$divIdInObj=$('#Transfer-In');
	    	transfer.$divIdOutObj=$('#Transfer-Out');
	    	transfer.chooseLineProduct(transfer.$divIdInObj);
	    	transfer.choosePartnerAgency(transfer.$divIdInObj,2);
	    	transfer.choosePartnerAgency(transfer.$divIdOutObj,1);
	    	transfer.chooseUserList(transfer.$divIdOutObj,1);

	    	/**
	    	 * type 1 我社转出 2他部转入
	    	 * @type {String}
	    	 */
	    	transfer.$divIdOutObj.find(".T-transferOut-search").off("click").on("click",{divId:"Transfer-Out",type:"1"},transfer.getListPage);
	    	transfer.$divIdInObj.find(".T-transferIn-search").off("click").on("click",{divId:"Transfer-In",type:"2"},transfer.getListPage);

	    	//模拟click事件
	    	transfer.$divIdOutObj.find(".T-transferOut-search").trigger("click");
	    	transfer.$divIdInObj.find(".T-transferIn-search").trigger("click");

	    	//搜索下拉事件
	    	transfer.$divIdOutObj.find(".dropdown-menu a").click(function(){
	    	   var $that=$(this),
	    	       $thatDivObj=$that.closest('div');
		    	   $thatDivObj.find("button").attr("data-value",$that.data('value'));
				   $thatDivObj.find("span").text($(this).text());
			   var divId = "Transfer-Out",
				type = "1";
				transfer.getSearchParam(divId,type);
				transfer.findPager(divId,type,0);
				transfer.findTotal(divId);
		    });

	    	//状态搜索
			transfer.$divIdInObj.find(".dropdown-menu a").click(function(){
			   var $that=$(this),
			   	   $thatDivObj=$that.closest('div');
		    	   $thatDivObj.find("button").attr("data-value",$that.data('value'));
				   $thatDivObj.find("span").text($(this).text());
				var divId = "Transfer-In",
					type = "2";
				transfer.getSearchParam(divId,type);
				transfer.findPager(divId,type,0);
				transfer.findTotal(divId);
			});

			//导出操作 
			transfer.$divIdOutObj.find(".T-transferOut-export").click(function(){
				var divId = "Transfer-Out",
				    type = "1";
				    transfer.getSearchParam(divId,type);
				var exportUrl="" + KingServices.build_url("transfer","findExcel") + "&searchParam="+encodeURIComponent(JSON.stringify(transfer.$searchParam));
				window.location.href=exportUrl;
			});
	    };


	    /**
	     * 线路产品Autocomplete
	     * @param  {[type]} $obj [description]
	     * @return {[type]}      [description]
	     */
		transfer.chooseLineProduct = function($obj){
			var $that = $obj.find(".T-chooseLineProduct"),list;
			    list = transfer.allData.lineProduct2;
			    if(!!list && list.length> 0){
			    	for(var i=0; i < list.length; i++){
						list[i].value = list[i].name;
				    };
			    }
			$that.autocomplete({
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
				},source:list
			}).unbind("click").click(function(){
				var obj = this;
				if(!!list && list.length){
					$(obj).autocomplete('search', '');
				}else{
					layer.tips('没有内容', obj, {
					    tips: [1, '#3595CC'],
					    time: 2000
					});
				}
			})
		};

		/**
		 * 同行地地接Autocomplete
		 * @param  {[type]} $obj [description]
		 * @param  {[type]} type [description]
		 * @return {[type]}      [description]
		 */
		transfer.choosePartnerAgency=function($obj,type){
			var $that = $obj.find(".T-choosePartnerAgency"),list;
				if (type==1) {
					list = transfer.allData.partnerAgency;
				} else{
					list = transfer.allData.partnerAgency2;
				};
					
				if(!!list && list.length){
					for(var i=0; i < list.length; i++){
						list[i].value = list[i].travelAgencyName;
				   }
				}
			$that.autocomplete({
				minLength:0,
				change :function(event, ui){
					if(ui.item == null){
						//$(this).val("");
						var parents = $(this).parent();
						parents.find("input[name=partnerAgencyId]").val("");
					}
				},
				select :function(event, ui){
					var _this = this, parents = $(_this).parent();
					parents.find("input[name=partnerAgencyId]").val(ui.item.id).trigger('change');
				},source:list
			}).unbind("click").click(function(){
				var obj = this;
					if(!!list && list.length){
						$(obj).autocomplete('search', '');
					}else{
						layer.tips('没有内容', obj, {
						    tips: [1, '#3595CC'],
						    time: 2000
						});
					}
			})

		};

		/**
		 * [chooseUserList 转客人数据列表]
		 * @param  {[type]} $obj [description]
		 * @param  {[type]} type [description]
		 * @return {[type]}      [description]
		 */
		transfer.chooseUserList=function($obj,type){
		   var $that = $obj.find(".T-chooseUserName"),list;
		       list = transfer.allData.user1;
		       if(!!list && list.length > 0){
					for(var i=0; i < list.length; i++){
							list[i].value = list[i].realName;
					}
				}
				$that.autocomplete({
					minLength:0,
					change :function(event, ui){
						if(ui.item == null){
							var parents = $(this).parent();
							parents.find("input[name=userNameId]").val("");
						}
					},
					select :function(event, ui){
						var _this = this, parents = $(_this).parent();
						parents.find("input[name=userNameId]").val(ui.item.id).trigger('change');
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
		/**
		 * 时间控件初始化
		 * @param  {[type]} $obj [description]
		 * @return {[type]}      [description]
		 */
		transfer.datePicker = function($obj){
			$obj.find(".datepicker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			})
		};

	    /**
	     * 获取查询参数并将其封装成$searchParam对象
		 * @param  {[type]} divId 转入转出Id标识
	     * @param  {[type]} type  转入转出唯一标识
	     * @return {[type]}       [description]
	     */
	    transfer.getSearchParam = function(divId,type){
			getValue = function(name){
				var value = $("#"+ divId ).find("[name="+name+"]").val()
				return value;
			}
			transfer.$searchParam = {
				pageNo : 0,
				type : type,
				lineProductId : getValue("lineProductId"),
				lineProductName :getValue("lineProductName"),
				partnerAgencyId : getValue("partnerAgencyId"),
				partnerAgencyName : getValue("partnerAgencyName"),
				userName:getValue("userName"),
				startTime : getValue("startTime"),
				endTime : getValue("endTime"),
				status : $("#"+divId).find(".btn-status button").attr('data-value')
			}
	    };
	
      	/**
      	 * 获取统计数据findTotal&&分页数据Pager
      	 * @param  {[type]} event [description]
      	 * @return {[type]}       [description]
      	 */
	    transfer.getListPage=function(event){
	    	var divId=event.data.divId,
	    	    type=event.data.type;
	    	transfer.getSearchParam(divId,type);
	    	transfer.findPager(divId,type,0);
	    	transfer.findTotal(divId);

	    };
	    transfer.findTotal=function(divId){
	    	$.ajax({
	    		url:KingServices.build_url("transfer","findTotal"),
	    		type: 'POST',
	    		data: "searchParam="+encodeURIComponent(JSON.stringify(transfer.$searchParam)),
	    		success:function(data){
	    			var result = showDialog(data);
	    			if (result) {
		    			if(divId == "Transfer-Out"){
							$("#"+divId).find(".totalAdultCount").text(data.total.totalAdultCount);
							$("#"+divId).find(".totalChildCount").text(data.total.totalChildCount);  
							$("#"+divId).find(".totalNeedPay").text(data.total.totalNeedPay);
							$("#"+divId).find(".totalPayed").text(data.total.totalPayed);
						} else {
							$("#"+divId).find(".totalAdultCount").text(data.total.totalAdultCount);
							$("#"+divId).find(".totalChildCount").text(data.total.totalChildCount);  
							$("#"+divId).find(".totalNeedPay").text(data.total.totalNeedPay);
							$("#"+divId).find(".totalPayed").text(data.total.totalPayed);
						}
	    			};
	    		}
	    	});
	    };

	    /**
	     * 分页数据findPager
	     * @param  {[type]} divId 转入转出Id标识
	     * @param  {[type]} type  转入转出唯一标识
	     * @return {[type]}       [description]
	     */
	    transfer.findPager=function(divId,type,page){
	    	transfer.$searchParam.pageNo=page;
	    	transfer.$searchParam.type=type;
	    	$.ajax({
	    		url: KingServices.build_url('transfer', 'findPager'),
	    		type: 'POST',
	    		data: "searchParam="+encodeURIComponent(JSON.stringify(transfer.$searchParam)),
	    		success:function(data){
	    			var result = showDialog(data);
	    			if (result) {
	    				data.result=JSON.parse(data.result);
	    				var html;
						if (type == 1) {
							html = outListTemplate(data);
						}else{
							html = inListTemplate(data);
						}
						html = filterUnAuth(html);
						//模板页面追加
						$("#"+divId ).find(".transferList").html(html);

						//模板数据Action事件
						transfer.initActionEvent(divId,type);

						// 绑定翻页组件
						laypage({
						    cont: $('#' + divId).find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.searchParam.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		transfer.findPager(divId,type,obj.curr -1);
						    	}
						    }
						});
						
	    			}
	    		}
	    	})
	    };

	    /**
	     * 初始化转入转入转出事件
	     * @param  {[type]} divId 转入转出Id标识
	     * @param  {[type]} type  转入转出唯一标识
	     * @return {[type]}       [description]
	     */
	    transfer.initActionEvent=function(divId,type){
		    $("#" + divId).find('.T-listTransferOut').off('click').on('click', '.T-action', function(event) {
	    		event.preventDefault();
	    		/* Act on the event */
	    		var $that=$(this),id=$that.closest('tr').data('value');
	    		if ($that.hasClass('T-transfer-view'))  {
					// 查看我社转出信息
					transfer.viewTransferOut(id);
				} else if ($that.hasClass('T-transfer-edit'))  {
					//修改
					transfer.updateTransferOut(id);
				} else if ($that.hasClass('T-transfer-delete'))  {
					//撤销
					transfer.deleteTransferOut(id);
				}
		    });

		    $("#" + divId).find('.T-listTransferIn').off('click').on('click', '.T-action', function(event) {
	    		event.preventDefault();
	    		/* Act on the event */
	    		var $that=$(this),id=$that.closest('tr').data('value');
	    		if ($that.hasClass('T-transferIn-view'))  {
					//查看
					transfer.viewTransferIn(id);
				} else if ($that.hasClass('T-transferIn-confirm'))  {
					// 确认
					transfer.updateTransferIn(id);
				} else if ($that.hasClass('T-transferIn-refuse'))  {
					//拒绝
					transfer.deleteTransferIn(id);
				}
		    });
	    };

	    /**
	     * [viewTransferOut description]
	     */
	    transfer.viewTransferOut=function(id){
			$.ajax({
				url:KingServices.build_url("transfer","findMember"),
	    		type: 'POST',
				data:"id="+id+"",
				success:function(data){	
					var result = showDialog(data);
					if(result){
						data.lineProduct = JSON.parse(data.lineProduct);
						data.touristGroup =JSON.parse(data.touristGroup);
						data.partnerAgency=JSON.parse(data.partnerAgency);
						data.parentTouristGroup=JSON.parse(data.parentTouristGroup);
						var html = viewTrsferOutTemplate(data);
						Tools.addTab(menuKey+"-viewTransferOut","查看我社转出",html);
					}
				}
			});
		};

		/**
		 * 我社转出撤销操作
		 * @param  {[type]} id [description]
		 * @return {[type]}    [description]
		 */

		transfer.deleteTransferOut = function(id){
			if(!!id){
				showNndoConfirmDialog($("#confirm-dialog-message"),"是否撤销转客操作？",function(){
					$.ajax({
							url:KingServices.build_url("transfer","delete"),
	 						type:"POST",
		 					data:"id="+id + "&isDelete=0",
					})
					.done(function(data) {
						if(showDialog(data)){
							showMessageDialog($( "#confirm-dialog-message" ), data.message, function() {
								var type="1",
 							    divId="Transfer-Out";
								transfer.getSearchParam(divId,type);
								transfer.findPager(divId,type,0);
								transfer.listMainHead(0);
							})
							
						}
					})
					
				});
			}
		}

		/**
		 * 编辑我社转出
		 * @param  {[type]} id [description]
		 * @return {[type]}    [description]
		 */
		transfer.updateTransferOut=function(id){
			$.ajax({
				url: KingServices.build_url('transfer', 'edit'),
				data:"id="+id+"", 
				success:function(data){
					var result = showDialog(data);
					if(result){	
						var data = {
						    touristGroupTransfer : JSON.parse(data.touristGroupTransfer),
						    parentTouristGroup : JSON.parse(data.parentTouristGroup),
						    getPayType : getFeeItemPayTypeOptions.getPayType
						    
						};
						
						var html = updateTransferOutTemplate(data),
						    title="编辑我社转出",
						    tab_id=menuKey+"-updateTransferOut";

						// 初始化页面
						if (Tools.addTab(tab_id, title, html)) {
							transfer.init_updata_tab(tab_id,data);							
						}

					}
				}
			});
		};


	    /**
	     * [init_updata_tab 为编辑我社转出绑定事件]
	     * @param  {[type]} tab_id [description]
	     * @param  {[type]} data   [description]
	     * @return {[type]}        [description]
	     */
		transfer.init_updata_tab=function(tab_id,data){
			var id=data.touristGroupTransfer.touristGroup.id,
			 	$tab = $('#tab-'+ tab_id + '-content');
			 	// 绑定页面事件
		        transfer.init_CRU_event(id, $tab);
		        $tab.find('.T-saveTransoutInfo').data('id', id);
		};


		/**
		 * [init_CRU_event 初始化Tab方法]
		 * @param  {[type]} id   游客小组id
		 * @param  {[type]} $tab 编辑我社转出页面ID
		 * @return {[type]}      [description]
		 */
		transfer.init_CRU_event=function(id, $tab){
			if (!!$tab && $tab.length === 1) {
			var validator = rule.transferCheckor($tab);

				//监听修改
				$tab.off('change').off(SWITCH_TAB_SAVE).off(SWITCH_TAB_BIND_EVENT).off(CLOSE_TAB_SAVE)
				.on('change', function(event) {
					event.preventDefault();
					$tab.data('isEdited', true);
				})
				// 监听保存，并切换tab
				.on(SWITCH_TAB_SAVE, function(event, tab_id, title, html) {
					event.preventDefault();
					transfer.saveUpdateTrsferOut($tab, validator, [tab_id, title, html]);
				})

				.on(SWITCH_TAB_BIND_EVENT, function(event) {
					event.preventDefault();
					transfer.init_CRU_event($tab.find('.T-saveTransoutInfo').data('id'), $tab); 
				})

				// 保存后关闭
				.on(CLOSE_TAB_SAVE, function(event) {
					event.preventDefault();
					transfer.saveUpdateTrsferOut($tab, validator);
				});

				//为新增费用绑定事件
			    $tab.find('.T-transfer-addCost').on('click', function(event) {
			    	event.preventDefault();
			    	/* Act on the event */
			    	transfer.newAddFee($tab ,validator);
			    });

			    //重新计算
			    transfer.PayMoneyF($tab);

			    //数量&&价格change事件
				$tab.find(".count").on('change',function(event) {
					event.preventDefault();
					/* Act on the event */
					transfer.PayMoneyF($tab);
				});

				$tab.find(".price").on('change',function(event) {
					event.preventDefault();
					/* Act on the event */
					transfer.PayMoneyF($tab);
				});

				//计算金额
				transfer.calcPayMoney($tab);
				$tab.find('.T-calc').trigger('change');

				//精度调整
				var $price=$tab.find('.T-price'),
					$count=$tab.find('.count')
				    $transPayedMoney=$tab.find('input[name=transPayedMoney]');
				Tools.inputCtrolFloat($transPayedMoney);
				Tools.inputCtrolFloat($price);
				Tools.inputCtrolFloat($count);


				//同行地接
				transfer.getPartnerAgencyList($tab.find(".T-choosePartnerAgency"),id);

				//绑定分团转客信息
				$tab.find('.T-saveTransoutInfo').on('click', function(event) {
					event.preventDefault();
					/* Act on the event */
					transfer.saveUpdateTrsferOut($tab,validator); 
				});

				//取消关闭Tab
				$tab.find('.T-cancelTransfer').on('click', function(event) {
					event.preventDefault();
					/* Act on the event */
					Tools.closeTab(Tools.getTabKey($tab.prop('id')));	
				});

				//逻辑删除与及时删除
				$(".T-updateTransfer-delete").off().on("click",function(){
					var $that=$(this),
					    $tr=$that.closest('tr');
					var id = $tr.attr("data-entity-id");
					transfer.delTransferData(id,$tr,$tab);
				});

		    }
		};


		/**
		 * [newAddFee 给新增费用绑定事件]
		 * @param  {[type]} $tab      [description]
		 * @param  {[type]} validator [description]
		 * @return {[type]}           [description]
		 */
		transfer.newAddFee=function($tab,validator){
			var html="<tr class=\"transferFee1SelectId\" data-entity-id=\"\" >"+
		    "<td><select name=\"describeInfo\" class=\"col-sm-10 col-sm-offset-1\"><option value=\"1\">大人结算价</option><option value=\"2\">小孩结算价</option>"+
            "<option value=\"3\">中转结算价</option><option value=\"4\">保险结算价</option><option value=\"5\">车费结算价</option><option value=\"6\">餐饮结算价</option>"+
            "<option value=\"7\">导服费</option><option value=\"8\">酒店费用</option><option value=\"9\">景区费用</option>"+
            "<option value=\"10\">自费费用</option><option value=\"11\">票务费用</option><option value=\"12\">其他费用</option></select></td>"+
			"<td><input  name=\"count\" type=\"text\" class=\"col-sm-10 col-sm-offset-1  no-padding-right count T-count T-calc F-float F-count\" maxlength=\"6\" /></td>"+
			"<td><input  name=\"otherPrice\" type=\"text\" class=\"col-sm-10 col-sm-offset-1  no-padding-right price T-price T-calc F-float F-money\" maxlength=\"9\" /></td>"+
            "<td><input  name=\"payMoney\" type=\"text\" class=\"col-sm-10 col-sm-offset-1   no-padding-right T-payMoney F-float F-money\" maxlength=\"6\"readonly=\"readonly\" /></td>"+
            "<td><input  name=\"remark\" type=\"text\" class=\"col-sm-10 col-sm-offset-1   no-padding-right\" maxlength=\"100\" /></td>"+
			"<td><a class=\"cursor T-updateTransfer-delete\">删除</a></td>"+
			"</tr>";
			var $tbody=$tab.find(".T-addTransferCost");
			    $tbody.append(html);
			var $count=$tbody.find('.count');
			Tools.inputCtrolFloat($count);
			
			// 更新表单验证的事件绑定
			rule.update(validator);   
			
			//绑定删除分团转客信息
			$tab.find(".T-updateTransfer-delete").off().on("click",function(){
				var $that=$(this),
				    $tr=$that.closest('tr');
				var id = $tr.attr("data-entity-id");
				transfer.delTransferData(id,$tr,$tab);
			});

			$tab.find(".count").on('change',function(event) {
				event.preventDefault();
				/* Act on the event */
				transfer.PayMoneyF($tab);
			});

			$tab.find(".price").on('change',function(event) {
				event.preventDefault();
				/* Act on the event */
				transfer.PayMoneyF($tab);
			});

			//重新计算
			transfer.PayMoneyF($tab);

		};


	    /**
	     * calcPayMoney 根据费用【单价、数量】项目计算金额
	     * @param  {[type]} $tab [description]
	     * @return {[type]}      [description]
	     */
	    transfer.calcPayMoney = function($tab){
	        $tab.find('.T-addTransferCost').on('change', '.T-calc', function(event) {
	            /* Act on the event */
	            var $that=$(this),$tr = $that.closest('tr');
	            if ($that.hasClass('T-count')) {  //若数量改变
	                var count = $tr.find('.T-count').val(),
	                    price = $tr.find('.T-price').val(),payMoney;
	                if (!isNaN(price) && !isNaN(count)) {
	                     payMoney=parseFloat(price*count);        
	                    $tr.find('.T-payMoney').val(payMoney);
	                };

	            }else if($that.hasClass('T-price')){ //若价格改变
	                var count = $tr.find('.T-count').val(),
	                    price = $tr.find('.T-price').val(),payMoney;
	                if (!isNaN(price) && !isNaN(count)) {
	                     payMoney=parseFloat(price*count);        
	                    $tr.find('.T-payMoney').val(payMoney);
	                };
	            };
	        });
	    };



		/**
		 * [getPartnerAgencyList 同行地接下拉数据]
		 * @param  {[type]} obj [description]
		 * @return {[type]}     [description]
		 */
		transfer.getPartnerAgencyList=function(obj){
			var $obj = $(obj);
			$.ajax({
				url: KingServices.build_url('partnerAgency', 'findPartnerAnencyList'),
                success:function(data){
					var result = showDialog(data);
					if(result){
						var partnerAgencyList=JSON.parse(data.partnerAgencyList);
						if(partnerAgencyList != null && partnerAgencyList.length > 0){
							for(var i=0;i<partnerAgencyList.length;i++){
								partnerAgencyList[i].value = partnerAgencyList[i].travelAgencyName;
							}
						};
						$obj.autocomplete({
							minLength: 0,
							change: function(event, ui) {
								if (!ui.item)  {
									$(this).val('').nextAll('input[name="transferPartnerAgencyId"]').val('');
								}
							},
							select: function(event, ui) {
								$(this).blur().nextAll('input[name="transferPartnerAgencyId"]').val(ui.item.id);
								$(tabId).find("input[name=partnerAgencyNameList]").val("");
							}
						}).off("click").on("click",function(){
							$obj.autocomplete('option','source', partnerAgencyList);
							$obj.autocomplete('search', '');
						});
					}
            	}
			});	         
		};

		/**
		 * [PayMoneyF 付款账务--应付/现付/已付的计算]
		 */ 
		transfer.PayMoneyF=function($tab){
			var needPayMoney = 0,
			    transNeedPayAllMoney = $tab.find("input[name=transNeedPayAllMoney]"),//应付
			    transPayedMoney = $tab.find("input[name=transPayedMoney]"), //已付
			    transCurrentPM = $tab.find("input[name=transCurrentPayedMoney]"), //现付
			    trList = $tab.find("tbody.T-addTransferCost").find("tr");
						
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
		 * 编辑保存转客信息
		 * @param  {[type]}  $obj    [description]
		 * @param  {Boolean} isClose [description]
		 * @return {[type]}          [description]
		 */
		transfer.saveUpdateTrsferOut=function($tab,validator,tabArgs){ 
			// 表单校验
			if (!validator.form()) { return; }
			getValue = function(name){
				var value = $tab.find("[name="+name+"]").val()
				return value;
			}
			var id=getValue("touristGroupTransferId"),
			    remark=getValue("remark"),

			    partnerAgencyId=getValue("transferPartnerAgencyId"),
			    transPayedMoney=getValue("transPayedMoney"),
			    transNeedPayAllMoney=getValue("transNeedPayAllMoney"),

			    transAdultPrice=getValue("transAdultPrice"),
			    transChildPrice=getValue("transChildPrice"),
			    transRemark=getValue("transRemark"),
			    status=getValue("status"),
			    cashFlag = getValue("cashFlag");

	
	
			/**
			 * [otherFeeJsonAdd 获取新增费用项目组装成JSON数据
			 * @type {Array}
			 */
			var otherFeeJsonAdd = [];
			var otherFeeJsonAddLength=$tab.find(".T-addTransferCost tr").length;
			$tab.find(".T-addTransferCost tr").each(function(i){
				var $that=$(this);
				var id=$that.attr("data-entity-id"),
				    discribe = $that.find("input[name=describe]").val(),
				    remark = $that.find("input[name=remark]").val(),
				    count = $that.find("input[name=count]").val(),
				    otherPrice = $that.find("input[name=otherPrice]").val();
				    var otherFeeJson = {
						"discribe":discribe,
						"count":count,
						"remark":remark,
						"otherPrice" : otherPrice
					}
					if(!!id && id!=null ){
				    	 otherFeeJson = {
				    		"id":id,
				    		"discribe":discribe,
							"count":count,
							"remark":remark,
							"otherPrice" : otherPrice
				          }
				    }
					otherFeeJsonAdd.push(otherFeeJson);
				
			})   
			var saveDate={
				touristGroupTransfer : {
					"id":id,  //转客表ID
					"remark":remark, //转客备注
					"status":status,//转客状态，0未完成，1已完成
					"partnerAgencyId":partnerAgencyId
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
			$.ajax({
				url:KingServices.build_url("transfer","update"),
				type: 'post',
				data:"id="+id+"&touristGroupTransfer="+JSON.stringify(saveDate.touristGroupTransfer)+"&transferFee="+JSON.stringify(saveDate.transferFee)+"&otherFee="+encodeURIComponent(otherFee)+"&cashFlag="+cashFlag,
			})
			.done(function(data) {
				if (showDialog(data)) {
					showMessageDialog($( "#confirm-dialog-message" ), data.message, function() {
						$tab.data('isEdited', false);
						if (!!tabArgs && tabArgs.length === 3) {
							// 切换tab，就不做数据更新
							Tools.addTab(tabArgs[0], tabArgs[1], tabArgs[2]);
							transfer.init_updata_tab(tabArgs[0]);
						} else {
							var divId="Transfer-Out",
							    type="1";
							    transfer.getSearchParam(divId,type);
							    transfer.findPager(divId,type,0);	
							Tools.closeTab(Tools.getTabKey($tab.prop('id')));						
						}
					})
				};
			})
		};

		/**
		 * 逻辑删除&&及时删除
		 * @param  {[type]} id  费用Id
		 * @param  {[type]} $tr f行对象
		 * @return {[type]}     [description]
		 */
		transfer.delTransferData=function(id,$tr,$tab){
			$updateObj=$("#"+ tabIdOut).find('.updateTransfer');
			if( id!=null && id!=""){
				$.ajax({
					url:KingServices.build_url("transfer","deleteFee"),
					type:"POST",
					data:"id="+id,
					success:function(data){
						$tr.remove();
						transfer.PayMoneyF($tab);
					}
				});	
			}else{
				//移除空的其他费用
				$tab.find(".transferFee1SelectId").click(function(){
					var $that=$(this);
					    $that.remove();transfer.PayMoneyF($tab);
				});
			}
		};

		/**
		 * 查看同行转入信息
		 * @param  {[type]} id [description]
		 * @return {[type]}    [description]
		 */
		transfer.viewTransferIn=function(id){
			$.ajax({
				url:KingServices.build_url("transfer","findMember"),
				type:"POST",
				data:"id="+id+"",
				success:function(data){
					var result = showDialog(data);
					if(result){
						data.lineProduct = JSON.parse(data.lineProduct);
						data.touristGroup =JSON.parse(data.touristGroup);
						data.partnerAgency=JSON.parse(data.partnerAgency);
						var html = viewTransferInTemplate(data);
						Tools.addTab(menuKey+"-viewTransferIn","查看同行转入",html);
					}
				}
			});	
		};

		/**
		 * 拒绝同行转入
		 * @param  {[type]} id [description]
		 * @return {[type]}    [description]
		 */
		transfer.deleteTransferIn=function(id){
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
								url:KingServices.build_url("transfer","refuse"),
								type:"POST",
								data:"id="+id + "&isDelete=1",
								success:function(data){
									var type="2";
									    divId="Transfer-In";
									transfer.getSearchParam(divId,type);
									transfer.findPager(divId,type,0);
									
								}
							});
							$( this ).dialog( "close" );
						}
					}
				],
				open:function(event,ui){
					$(this).find("p").text("是否拒收？");
				}
			});
		};


	/**
	 * [transitMessage description]
	 * @param  {[type]} touristGroupId [游客小组id]
	 * @param  {[type]} type           [标识]
	 * @return {[type]}                [description]
	 */
	transfer.updateTransferIn=function(id){
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
								$( this ).dialog( "close" );
								$.ajax({
									url:KingServices.build_url("transfer","saveLine"),
									data:"transferId="+id+"",
									success:function(data){
										var result = showDialog(data);
										if(result){  	
										   var touristGroupId = data.touristGroupId;
										   //跳转游客小组新增页面
										   KingServices.updateTransfer(touristGroupId);
										   //外转确认后数据刷新--模拟Click
										   transfer.$divIdInObj.find(".T-transferIn-search").off("click").on("click",{divId:"Transfer-In",type:"2"},transfer.getListPage);
	    	                               transfer.$divIdInObj.find(".T-transferIn-search").trigger("click");
								
										}
									}
								});
								
							}
						}
					],
					open:function(event,ui){
						$(this).find("p").text("是否确认外转？");
					}
				});

	};


		/**
		 * 调用线路产品Layer层
		 * @param  {[type]} init              是否打开线路layer
		 * @param  {[type]} page               分页参数
		 * @param  {[type]} name               线路名称
		 * @param  {[type]} searchLineProLayer [description]
		 * @param  {[type]} $editTrsferInObj   编辑同行线路
		 * @return {[type]}                    [description]
		 */
		transfer.searchLineProList=function(init,page,name,searchLineProLayer,$editTrsferInObj){
				$.ajax({
					url:KingServices.build_url("lineProduct","findAll"),
					data:"pageNo="+page+"&name="+name,
					success: function(data) {
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
							var html =searchLineProTrsInTemplate(data);
							if(init){
								searchLineProLayer =layer.open({
									type: 1,
									title:"选择路线",
									skin: 'layui-layer-rim', //加上边框
									area: '85%', //宽高
									zIndex:1029,
									content: html,
									scrollbar: false,
									success: function(data) {
									}
								});
							}
							else{
								$("#layui-layer"+searchLineProLayer+"").find(".layui-layer-content").html(html);
							}
							//搜索按钮事件
							var $chooseLineProduct=$('#chooseLineProduct-container');
							$chooseLineProduct.find(".T-lineProduct-search").click(function(){
								var name = $chooseLineProduct.find("input[name=lineProduct_name]").val();
								transfer.searchLineProList(false,obj.curr -1, name,searchLineProLayer,$editTrsferInObj);
							});

							// 绑定翻页组件   
							laypage({
							    cont: $chooseLineProduct.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
							    pages: data.totalPage, //总页数
							    curr: (data.pageNo + 1),
							    jump: function(obj, first) {
							    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							    		var name=$chooseLineProduct.find('input[name=lineProduct_name]').val();
							    		transfer.searchLineProList(false,obj.curr -1, name,searchLineProLayer,$editTrsferInObj);
							    	}
							    }
							});	
							
							//选择线路产品/提交事件绑定
							var travelLineName="",travelLineId="";
							$(".T-submit-searchtravelLine").click(function(){
								var trSearchtravelLine =$(".T-travelLineList-table tbody tr");
								for(var i=0;i<trSearchtravelLine.length;i++){
									if(trSearchtravelLine.eq(i).find("input[name=choice-TravelLine]").is(":checked")==true){
										travelLineName =trSearchtravelLine.eq(i).find("td[name=travelLine-select]").text();
										travelLineId =trSearchtravelLine.eq(i).find("td[name=travelLine-select]").attr("data-travelLine-Id");
										layer.close(searchLineProLayer);
									}
									else{
									}
								}
								$editTrsferInObj.find("input[name=lineProductNameId]").val(travelLineName);
								$editTrsferInObj.find("input[name=lineProductId]").val(travelLineId);
								$editTrsferInObj.find("input[name=lineProductIdName]").val(travelLineName);
							});
						}
					}
			    })
		};
    exports.init = transfer.initModule;
    exports.getListPage = transfer.getListPage;
	exports.viewTransferOut	= transfer.viewTransferOut;

});