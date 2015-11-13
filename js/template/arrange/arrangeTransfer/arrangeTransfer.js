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

	    /**
	     * 初始化转客数据
	     * @return {[type]} [description]
	     */
	    transfer.initModule=function(){
	    	transfer.transferList();
	    };
	    
	    transfer.transferList=function(){
	    	//请求下拉数据
	    	transfer.listMainHead();
	    	var html=listMainTemplate(transfer.allData);
	    	addTab(menuKey,"转客管理",html);

	    	transfer.$tab=$('#'+ tabId);
	    	//初始化时间插件
	    	transfer.datePicker(transfer.$tab);
	    	//初始化事件的绑定
	    	transfer.init_event(); 	
	    };

	    /**
	     * [listMainHead 转客管理所有下拉数据Ajax]
	     * @return {[type]} [description]
	     */
	    transfer.listMainHead=function(){
	    	$.ajax({
	    		url: KingServices.build_url('transfer', 'findListInfo'),
	    		type: 'POST',
	    		dataType: 'JSON',
	    		success:function(data){
					var result = showDialog(data);
					if(result){
						transfer.allData.lineProduct1 = JSON.parse(data.lineProduct1);
						transfer.allData.lineProduct2 = JSON.parse(data.lineProduct2);
						transfer.allData.partnerAgency = JSON.parse(data.partnerAgency);
						transfer.allData.partnerAgency2 = JSON.parse(data.partnerAgency2);
						transfer.allData.touristGroup1 = JSON.parse(data.touristGroup1);
						transfer.allData.touristGroup2 = JSON.parse(data.touristGroup2);
						transfer.allData.travelAgency = JSON.parse(data.travelAgency);
						transfer.allData.user1 = JSON.parse(data.user1);
						transfer.allData.user2 = JSON.parse(data.user2);
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
				var exportUrl ="" + transfer.url("findExcel","view") + "&exportParam="+encodeURIComponent(JSON.stringify(transfer.$searchParam));
				window.location.href=exportUrl;
			});
	    };


	    /**
	     * 线路产品Autocomplete
	     * @param  {[type]} $obj [description]
	     * @return {[type]}      [description]
	     */
		transfer.chooseLineProduct = function($obj){
			var $that = $obj.find(".T-chooseLineProduct");
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
				}
			}).unbind("click").click(function(){
				var obj = this,
					list = transfer.allData.lineProduct2;
				if(list && list.length > 0){
					for(var i=0; i < list.length; i++){
						list[i].value = list[i].name;
					}
					$(obj).autocomplete('option','source', list);
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
			var $that = $obj.find(".T-choosePartnerAgency");
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
				}
			}).unbind("click").click(function(){
				var obj = this,list;
				if (type==1) {
					list = transfer.allData.partnerAgency;
				} else{
					list = transfer.allData.partnerAgency2;
				};
					
				if(list && list.length > 0){
					for(var i=0; i < list.length; i++){
						list[i].value = list[i].travelAgencyName;
					}
					$(obj).autocomplete('option','source', list);
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
		   var $that = $obj.find(".T-chooseUserName");
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
					}
				}).unbind("click").click(function(){
					var obj = this,list;
						list = transfer.allData.user1;
						
					if(list && list.length > 0){
						for(var i=0; i < list.length; i++){
							list[i].value = list[i].realName;
						}
						$(obj).autocomplete('option','source', list);
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
	    		dataType: 'JSON',
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
	    		dataType: 'JSON',
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
	    		dataType: 'JSON',
				data:"id="+id+"",
				success:function(data){	
					var result = showDialog(data);
					if(result){
						data.lineProduct = JSON.parse(data.lineProduct);
						data.touristGroup =JSON.parse(data.touristGroup);
						data.partnerAgency=JSON.parse(data.partnerAgency);
						var html = viewTrsferOutTemplate(data);
						addTab(menuKey+"-viewTransferOut","查看我社转出",html);
					}
				}
			});
		};

		/**
		 * 我社转出撤销操作
		 * @param  {[type]} id [description]
		 * @return {[type]}    [description]
		 */
		transfer.deleteTransferOut=function(id){
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
								url:KingServices.build_url("transfer","delete"),
								type:"POST",
								data:"id="+id + "&isDelete=0",
								dataType:"json",
								success:function(data){
									 var result = showDialog(data);
									 var type="1",
									     divId="Transfer-Out";
									 transfer.getSearchParam(divId,type);
									 transfer.findPager(divId,type,0);
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
		};

		/**
		 * 编辑我社转出
		 * @param  {[type]} id [description]
		 * @return {[type]}    [description]
		 */
		transfer.updateTransferOut=function(id){
			$.ajax({
				url: KingServices.build_url('transfer', 'edit'),
				data:"id="+id+"", 
				datatype:"JSON",
				success:function(data){
					var result = showDialog(data);
					if(result){	
						data.touristGroupTransfer=JSON.parse(data.touristGroupTransfer);
						var html = updateTransferOutTemplate(data);
						addTab(menuKey+"-updateTransferOut","编辑我社转出",html);

						//初始化编辑我社转出事件
						transfer.initUpdateOutEvent(data);
					}
				}
			});
		};

		/**
		 * [initUpdateOutEvent 初始化编辑我社转出事件]
		 * @param  {[type]} data [description]
		 * @return {[type]}      [description]
		 */
		transfer.initUpdateOutEvent=function(data){
            var $obj=$("#"+ tabIdOut).find('.updateTransfer'),
                partnerAId=data.touristGroupTransfer.partnerAgency.id,
                validator=rule.transferCheckor($obj);//表单验证

			//查询所有同行地接
			transfer.getPartnerAgencyList($obj.find(".T-choosePartnerAgency"),partnerAId);
			//获取转态  
			var statusVal=$obj.find("input[name=status]").val();
			//给新增费用绑定事件
			$obj.find(".T-transfer-addCost").click(function(){    
				var html="<tr class=\"transferFee1SelectId\">"+
				"<td><span name=\"type\" value=\"0\">其他费用</span></td>"+
				"<td><input  name=\"discribe\" type=\"text\" class=\"col-sm-12  no-padding-right\" /></td>"+
				"<td><input  name=\"count\" type=\"text\" maxlength=\"5\" class=\"col-sm-12  no-padding-right count\" /></td>"+
				"<td><input  name=\"otherPrice\" type=\"text\" maxlength=\"11\" class=\"col-sm-12  no-padding-right price\" /></td>"+
				"<td><a class=\"cursor T-updateTransfer-delete\">删除</a></td>"+
				"</tr>";
				$obj.find(".T-addTransferCost").append(html);
				
				// 更新表单验证的事件绑定
				validator = rule.update(validator);   
				
				//绑定删除分团转客信息
				$(".T-updateTransfer-delete").off().on("click",function(){
					var $that=$(this),
					    $tr=$that.closest('tr');
					var id = $tr.attr("data-entity-id");
					transfer.delTransferData(id,$tr);
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
	
			//删除有费用的id记录
			$obj.find(".T-updateTransfer-delete").click(function(){
				var $that=$(this),
					$tr=$that.closest('tr'),
				    id =$tr.attr("data-entity-id");
				transfer.delTransferData(id,$tr);
				transfer.PayMoneyF();	
			});

			//绑定修改分团转客信息
			$obj.find(".T-saveTransoutInfo").click(function(){
				// 表单校验
				if (!validator.form()) { return; }
				transfer.saveUpdateTrsferOut($obj,1);  
			});
			
			//取消分团转客信息
			$obj.find(".T-cancelTransfer").click(function(){
				closeTab(menuKey+"-updateTransferOut");
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
		};

		/**
		 * [getPartnerAgencyList 同行地接下拉数据Autocomplate]
		 * @param  {[type]} obj        [description]
		 * @param  {[type]} partnerAId [description]
		 * @return {[type]}            [description]
		 */
		transfer.getPartnerAgencyList=function(obj,partnerAId){
			var $obj = $(obj);
			$.ajax({
				url: KingServices.build_url('partnerAgency', 'findPartnerAnencyList'),
                dataType: "JSON",
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
		transfer.PayMoneyF=function(){
			var $obj=$("#"+ tabIdOut).find('.updateTransfer');
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
		};

		/**
		 * 编辑保存转客信息
		 * @param  {[type]}  $obj    [description]
		 * @param  {Boolean} isClose [description]
		 * @return {[type]}          [description]
		 */
		transfer.saveUpdateTrsferOut=function($obj,isClose){ 
			getValue = function(name){
				var value = $obj.find("[name="+name+"]").val()
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
			    status=getValue("status");

	
	
			/**
			 * [otherFeeJsonAdd 获取新增费用项目组装成JSON数据
			 * @type {Array}
			 */
			var otherFeeJsonAdd = [];
			var otherFeeJsonAddLength=$obj.find(".T-addTransferCost tr").length;
			$obj.find(".T-addTransferCost tr").each(function(i){
				var $that=$(this);
				var id=$that.attr("data-entity-id"),
				    type = $that.find("[name=type]").attr("value"),
				    discribe = $that.find("input[name=discribe]").val(),
				    count = $that.find("input[name=count]").val(),
				    otherPrice = $that.find("input[name=otherPrice]").val();
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
			$.ajax({
				url:KingServices.build_url("transfer","update"),
				data:"id="+id+"&touristGroupTransfer="+JSON.stringify(saveDate.touristGroupTransfer)+"&transferFee="+JSON.stringify(saveDate.transferFee)+"&otherFee="+encodeURIComponent(otherFee),
				datatype:"JSON",
				success:function(data){
					var result = showDialog(data);  
					if(result){  
						showMessageDialog($( "#confirm-dialog-message" ),data.message);
						if(isClose == 1){
							closeTab(menuKey+"-updateTransferOut");
							var divId="Transfer-Out",
							    type="1";
							transfer.getSearchParam(divId,type);
							transfer.findPager(divId,type,0);
						}
						
					}
				}
			});
		};

		/**
		 * 删除添加其他费用
		 * @param  {[type]} id  [description]
		 * @param  {[type]} $tr [description]
		 * @return {[type]}     [description]
		 */
		transfer.delTransferData=function(id,$tr){
			$updateObj=$("#"+ tabIdOut).find('.updateTransfer');
			if( id!=null && id!=""){
				$.ajax({
					url:KingServices.build_url("transfer","deleteFee"),
					type:"POST",
					data:"id="+id,
					dataType:"JSON",
					success:function(data){
						$tr.remove();
						transfer.PayMoneyF();
					}
				});	
			}else{
				//移除空的其他费用
				$updateObj.find(".transferFee1SelectId").click(function(){
					var $that=$(this);
					    $that.remove();transfer.PayMoneyF();
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
				dataType:"JSON",
				success:function(data){
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
								dataType:"json",
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
		 * 同行转入确认
		 * @param  {[type]} id [description]
		 * @return {[type]}    [description]
		 */
		transfer.updateTransferIn=function(id){
			var editTransferInTemplateLayer;
			$.ajax({
				url:KingServices.build_url("transfer","edit"),
				data:"id="+id+"", 
				datatype:"json",
				success:function(data){
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
						var $editTrsferInObj=$("#editTransfer-container"),searchLineProTransferInlayer;
						$editTrsferInObj.find(".T-searLineProtrsferIn-search").click(function(){
							//调用线路产品Layer层
							transfer.searchLineProList(true,0, "",searchLineProTransferInlayer,$editTrsferInObj);
						});
						
						//线路产品保存操作 
						$editTrsferInObj.find(".T-editLineProInfo").click(function(){
						    var getValue = function(name){
									var value = $editTrsferInObj.find("[name="+name+"]").val()
									return value;
						        }
							var lineProductId=getValue("lineProductId"),
							    tourGroupTransferId=getValue("tourGroupTransferId"),
							    lineProductIdName=getValue("lineProductIdName");

							
							if (lineProductIdName==null||lineProductIdName=="") {
								showMessageDialog($( "#confirm-dialog-message" ),"请选择线路产品！");
								return ;	
							}else{
								$.ajax({
									url:transfer.url("saveLine","view"),
									data:"lineProductId="+lineProductId+"&tourGroupTransferId="+tourGroupTransferId,
									datatype:"JSON",
									success:function(data){
										var result = showDialog(data);
										if(result){  		
											layer.close(editTransferInTemplateLayer);
											showMessageDialog($( "#confirm-dialog-message" ),data.message);
											var type="2",
											    divId="Transfer-In";
											transfer.getSearchParam(divId,type);
											transfer.findPager(divId,type,0);
										}
									}
								});
							}
						})
						//关闭Layer
						$editTrsferInObj.find(".T-canceleditTransfer").click(function(){
							layer.close(editTransferInTemplateLayer);
						});
					}	
				}
			})	
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
					url:KingServices.url("lineProduct","findAll"),
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
							var html =searchLineProTrsInTemplate(data);
							if(init){
								searchLineProLayer =layer.open({
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
});