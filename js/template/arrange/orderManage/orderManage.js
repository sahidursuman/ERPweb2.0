/**
 * 订单查询车、房、导findPager及撤销操作
 * @param  {[type]} require  [description]
 * @param  {String} exports) {	var        menuKey [description]
 * @return {[type]}          [description]
 */
define(function(require, exports) {
	var menuKey="arrange_orderManage",
	    tabId="tab-"+menuKey+"-content",
		orderManageListTemplate = require("./view/orderManagerList"),
		listBusCompanyTemplate= require("./view/ListBusCompany"),
		listHotelTemplate= require("./view/listHotel"),
		listGuideTemplate=require("./view/listGuid"),
		orderManage={
			$tab:false,
			$busCompanyOrder:false,
			$hotelOrder:false,
			$searchJson:{
				pageNo : 0
			},
			$deleOrderId:{},
			$delJson:{
				ids:[]
			}
		};

	orderManage.initModule=function(){
		orderManage.orderManagerList();
	};
	/**
	 * [orderManagerList 订单列表]
	 * @return {[type]} [description]
	 */
	orderManage.orderManagerList=function(){
		var html=orderManageListTemplate();
			Tools.addTab(menuKey,"订单管理",html);
		    //初始化订单请求
		    orderManage.initRequest();
	};
	/**
	 * initRequest 初始化订单管理请求
	 * @return {[type]} [description]
	 */
	orderManage.initRequest=function(){
		//全局的Tab对象
		orderManage.$tab=$('#'+tabId);

		//车队订单Ajax
		orderManage.listBusCompanyOrder(0);

		//房订单Ajax
	    orderManage.listHotelOrder(0);

	    //导游订单Ajax
	    //orderManage.listGuidOrder();

	
	};
	/**
	 * [listBusCompanyOrder 车队订单列表]
	 * @return {[type]} [description]
	 */
	orderManage.listBusCompanyOrder=function(page){
		    orderManage.$searchJson.pageNo=page;
			$.ajax({
				url :KingServices.build_url('busInquiry', 'listBusCompanyOrder'),
				type:"POST",
				data : "searchJson="+encodeURIComponent(JSON.stringify(orderManage.$searchJson)),
				success:function(data){
					var result = showDialog(data);
					if(result){
						//将字符串解析成一个对象
		                var busOrderList=JSON.parse(data.busOrderList);
		                data.busOrderList=busOrderList;
	             
						var listBusHtml=listBusCompanyTemplate(data);
						//车队订单
				        orderManage.$tab.find('#T-BusCompany-list').html(listBusHtml);

				        //初始化页面事件
				        orderManage.init_evet();

				        //分页组件
				        orderManage.initPager=function(data,type){
								// 绑定翻页组件
								laypage({
								    cont: orderManage.$tab.find('#T-HotelOrder-list').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
								    pages: data.searchParam.totalPage, //总页数 
								    curr: (page + 1),
								    jump: function(obj, first) {
								    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
								    		orderManage.listBusCompanyOrder(obj.curr -1);
								    	}
								    }
								});
						};
				    }
				}
			})
	};

	/**
	 * [listHotelOrder 酒店订单列表]
	 * @return {[type]} [description]
	 */
	orderManage.listHotelOrder=function(page){
			orderManage.$searchJson.pageNo=page;
			$.ajax({
				url :KingServices.build_url('hotelInquiry', 'listHotelOrder'),
				type:"POST",
				data : "searchJson="+encodeURIComponent(JSON.stringify(orderManage.$searchJson)),
				success:function(data){
					var result = showDialog(data);
					if(result){
						var hotelOrderList=JSON.parse(data.hotelOrderList);
						    data.hotelOrderList=hotelOrderList;

						var listHotelHtml=listHotelTemplate(data);
						//房订单
						orderManage.$tab.find('#T-HotelOrder-list').html(listHotelHtml);

						//酒店金额的计算
						orderManage.hotelAmountCal();

						//初始化页面事件
				        orderManage.init_evet();

				        // 绑定翻页组件
						laypage({
						    cont: orderManage.$tab.find('#T-HotelOrder-list').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.searchParam.totalPage, //总页数 
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		orderManage.listHotelOrder(obj.curr -1);
						    	}
						    }
						});
				    }
				}
			})
	};

	/**
	 * [hotelAmountCal 酒店金额的计算]
	 * @return {[type]} [description]
	 */
	orderManage.hotelAmountCal=function(){
		var $trObj=orderManage.$tab.find('.T-Hotel-list').find('tr');
		for (var i = 0; i < $trObj.length; i++) {
			var count=$trObj.eq(i).find('.count').text(),
		        price=$trObj.eq(i).find('.price').text(),
		        totalMoney=parseFloat(count*price);
		     $trObj.eq(i).find(".totalMoney").text(totalMoney);
		};
	};

	/**
	 * [listGuidOrder 导游订单列表]
	 * @return {[type]} [description]
	 
	orderManage.listGuidOrder=function(){
		var listGuideHtml=listGuideTemplate();
		//导订单
		orderManage.$tab.find('#T-Guide-list').html(listGuideHtml);
	};*/


	/**
	 * [init_evet 为页面绑定事件]
	 * @return {[type]} [description]
	 */
	orderManage.init_evet=function(){
		//车队订单的撤销操作
		orderManage.$tab.find('.T-Bus-list').find('.T-listBusCompany-refuse').on('click', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $that=$(this),id=$that.closest('tr').data('value'),type=1;
				orderManage.deleteBusHotelOrder(id,type);
		});

		//酒店订单的撤销操作
		orderManage.$tab.find('.T-Hotel-list').find('.T-listHotel-refuse').on('click', function(event) {
				event.preventDefault();
				/* Act on the event */
				var $that=$(this),id=$that.closest('tr').data('value'),type=2;
				orderManage.deleteBusHotelOrder(id,type)
		});

		//tip信息提示
		Tools.descToolTip(orderManage.$tab.find(".T-ctrl-tip"),1);
	};



	/**
	 * [deleteBusHotelOrder 车队订单的撤销操作]
	 * @param  {[type]} id 车队或酒店ID
	 * @return {[type]}    车队酒店的标识
	 */
	orderManage.deleteBusHotelOrder=function(id,type){
		orderManage.id={
			id:id
		};
		orderManage.$delJson.ids.push(orderManage.id);
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
						if (type==1) {//车队订单
							$.ajax({
								url:KingServices.build_url("busInquiry","revokeOrder"),
								type:"POST",
								data: "delJson="+encodeURIComponent(JSON.stringify(orderManage.$delJson)),
								success:function(data){
									orderManage.listBusCompanyOrder(0);
									console.info(type);
								}
							});
						}else if(type==2){
							$.ajax({//酒店订单
								url:KingServices.build_url("hotelInquiry","revokeOrder"),
								type:"POST",
								data: "delJson="+encodeURIComponent(JSON.stringify(orderManage.$delJson)),
								success:function(data){
									orderManage.listHotelOrder(0);
									console.info(type);

								}
							});
						};
						
						$( this ).dialog( "close" );
					}
				}
			],
			open:function(event,ui){
				$(this).find("p").text("是否撤销？");
			}
		});
	};

	exports.init = orderManage.initModule;

});