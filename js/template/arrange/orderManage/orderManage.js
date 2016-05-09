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
			$busCompanyOrderTabId:"",
			$hotelOrderTabId:"",
			$hotelOrder:false,
			$searchJson:{
				pageNo : 0
			},
			$deleOrderId:{},
			$delJson:{
				ids:[]
			},
			//车对缓存数据Autocomplate
			busAutoUsers : [],
			busOrderNumbers : [],
			busBrands : [],
			busSeatCounts : [],

			//酒店缓存数据Autocomplate
			hotelsAutoComplate : [],
			hotelsAutoComplate : [],
			hotelsAutoUsers : [],
			hotelsLevels : [],
			hotelsOrderNumbers : [],
			hotelstypes : [],

			$searchParam : {   //车队封装参数
			    brand : "",//	车辆品牌		
			    busCompanyId : "",//	车辆ID		
			    busCompanyName : "",//	车队名称		
			    endTime	: "" ,//结束时间		
			    method	: "", //	string	
			    orderNumber  : "", //	订单号		
			    pageNo : "", //	页数	number	
			    seatCount : "", //	座位数		
			    startTime : "", //	开始时间		
			    status : "", //	状态		
			    userId	 : "", // 操作人ID		
			    userName  : "", //	操作人

			},

			$searchHotelParam : {   //酒店封装参数
				startTime : "",//	开始时间				
			    endTime : "", //结束时间		
			    hotelId : "", //酒店ID		
			    hotelName : "", //	酒店名称		
			    level : "", //星级		
			    method : "",//	string	
			    orderNumber : "",//	订单号		
			    pageNo : "",//	number
			    status : "", //状态		
			    type : "", //房型		
			    userId : "", //操作人ID		
			    userName : ""	//操作人
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
		    //全局的Tab对象
			orderManage.$tab=$('#'+tabId);
			//车、酒店订单TabId
		    orderManage.$busCompanyOrderTabId = orderManage.$tab.find('#T-BusCompany-list');
		    orderManage.$hotelOrderTabId = orderManage.$tab.find('#T-HotelOrder-list');
			//时间初始化控件
		    orderManage.initDatePicker(orderManage.$tab);
			//酒店请求下拉数据//车辆请求下拉数据
			orderManage.initSelectRequest();
		
	};

	/**
	 * [initSelectRequest 酒店车请求下拉数据
	 * @return {[type]} [description]
	 */
	orderManage.initSelectRequest=function(){

			//车请求下拉数据
			$.ajax({
				url :KingServices.build_url('order', 'findBusSelectValue'),
				type:"POST",
				success:function(data){
					var result = showDialog(data);
					if(result){
				     	orderManage.busAutoComplate=data.busCompanys;
			     	    orderManage.busAutoUsers=data.users;
					    orderManage.busOrderNumbers=data.orderNumbers;
					    orderManage.busBrands=data.brands;
					    orderManage.busSeatCounts=data.seatCounts;
					    //初始化车
					    orderManage.init_BusCompany();
					}
				}
			});

			//酒店的请求下拉数据
			$.ajax({
				url :KingServices.build_url('order', 'findHotelSelectValue'),
				type:"POST",
				success:function(data){
					var result = showDialog(data);
					if(result){
						    orderManage.hotelsAutoComplate = data.hotels;
							orderManage.hotelsAutoUsers = data.users;
							orderManage.hotelsLevels = data.levels;
							orderManage.hotelsOrderNumbers = data.orderNumbers;
							orderManage.hotelstypes = data.types;
							//初始化酒店
							orderManage.init_Hotel();
					}
				}
			});

	};

	/**
	 * init_busCompany 车队初始化
	 * @return {[type]} [description]
	 */
	orderManage.init_BusCompany = function(){
		//车
	     orderManage.$busCompanyOrderTabId.find('.T-busCompanyOrder-search').on('click', function(event) {
	     	event.preventDefault();
	     	/* Act on the event */
	     	var $searchParam = orderManage.$busCompanyOrderTabId.find('form'),pageNo=0,
	     		status = orderManage.$busCompanyOrderTabId.find('.T-select-status').children('button').data('value');
	     	//车队订单Ajax
		    orderManage.listBusCompanyOrder($searchParam,pageNo);
	     });
	     //模拟Click事件
	     orderManage.$busCompanyOrderTabId.find('.T-busCompanyOrder-search').trigger('click');

	    //车--搜索下拉事件
    	orderManage.$busCompanyOrderTabId.find(".T-status").change(function(){
			//表单序列化
			var $searchParam = orderManage.$busCompanyOrderTabId.find('form'),pageNo=0;
	     	//车队订单Ajax
		    orderManage.listBusCompanyOrder($searchParam,pageNo);
		   
	    });

	     var type = '0'; //订单号唯一标识
	     //订单号
	     orderManage.chooseBusOrderNumber(orderManage.$busCompanyOrderTabId,type);
	     //车队
	     orderManage.chooseBusCompany(orderManage.$busCompanyOrderTabId);
	     //车座数
	     orderManage.chooseSeatCount(orderManage.$busCompanyOrderTabId);
	     //车牌
	     orderManage.chooseBrand(orderManage.$busCompanyOrderTabId);
	     //操作人
	     orderManage.chooseUser(orderManage.$busCompanyOrderTabId,type);

	};

	/**
	 * init_Hotel 酒店初始化
	 * @return {[type]} [description]
	 */
	orderManage.init_Hotel = function(){
		 //酒店
	     orderManage.$hotelOrderTabId.find('.T-hotelOrder-search').on('click', function(event) {
	     	event.preventDefault();
	     	/* Act on the event */
	     	var $searchParam = orderManage.$hotelOrderTabId.find('form'),pageNo=0;

	     	   //房订单Ajax
	           orderManage.listHotelOrder($searchParam,pageNo);
	     });
	     orderManage.$hotelOrderTabId.find('.T-hotelOrder-search').trigger('click');
    	//酒店--搜索下拉数据
	    orderManage.$hotelOrderTabId.find(".T-status").change(function(){
			var $searchParam = orderManage.$hotelOrderTabId.find('form'),pageNo=0;
	     	//房订单Ajax
	        orderManage.listHotelOrder($searchParam,pageNo);
	    });

	    var type = '1'; //订单号唯一标识
	    //订单号
	    orderManage.chooseBusOrderNumber(orderManage.$hotelOrderTabId,type);
	    //酒店
	    orderManage.chooseHotel(orderManage.$hotelOrderTabId);
	    //房型
		orderManage.chooseHouseType(orderManage.$hotelOrderTabId);
		//星级
		orderManage.chooseLevel(orderManage.$hotelOrderTabId);
	    //操作人
	    orderManage.chooseUser(orderManage.$hotelOrderTabId,type);

	};

	/**
	 * [listBusCompanyOrder 车队订单列表]
	 * @return {[type]} [description]
	 */
	orderManage.listBusCompanyOrder=function($searchParam,pageNo){
		    orderManage.$searchParam = $searchParam.serializeJson();
		    orderManage.$searchParam.pageNo=pageNo;                      
			$.ajax({
				url :KingServices.build_url('order', 'findBusPager'),
				type:"POST",
				data : "searchParam="+encodeURIComponent(JSON.stringify(orderManage.$searchParam)),
				success:function(data){
					var result = showDialog(data);
					if(result){
						//将字符串解析成一个对象
		                var busOrderList=JSON.parse(data.result);
		                data.busOrderList=busOrderList;
						var listBusHtml=listBusCompanyTemplate(data),
						    listBusHtml = filterUnAuth(listBusHtml);
						//车队订单
				        orderManage.$busCompanyOrderTabId.find('.T-busCompany-pagerList').html(listBusHtml);
				        //车队计算
				        orderManage.moneyCalc(orderManage.$busCompanyOrderTabId);

				        //初始化页面事件
				        orderManage.init_evet();
						// 绑定翻页组件
					    laypage({
						    cont: orderManage.$tab.find('#T-BusCompany-list').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.searchParam.totalPage, //总页数 
						    curr: (pageNo + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		orderManage.listBusCompanyOrder($searchParam,obj.curr -1);
						    	}
						    }
						});
					
				    }
				}
			})
	};

	/**
	 * [listHotelOrder 酒店订单列表]
	 * @return {[type]} [description]
	 */
	orderManage.listHotelOrder=function($searchParam,pageNo){
			orderManage.$searchHotelParam = $searchParam.serializeJson();
		    orderManage.$searchHotelParam.pageNo=pageNo;    

			$.ajax({
				url :KingServices.build_url('order', 'findHotelPager'),
				type:"POST",
				data : "searchParam="+encodeURIComponent(JSON.stringify( orderManage.$searchHotelParam)),
				success:function(data){
					var result = showDialog(data);
					if(result){
						var hotelOrderList=JSON.parse(data.result);
						    data.hotelOrderList=hotelOrderList;
						var listHotelHtml=listHotelTemplate(data),
						    listHotelHtml = filterUnAuth(listHotelHtml);
						//房订单
						orderManage.$hotelOrderTabId.find('.T-HotelOrder-pagerList').html(listHotelHtml);
						//酒店金额的计算
						orderManage.moneyCalc(orderManage.$hotelOrderTabId);
						//初始化页面事件
				        orderManage.init_evet();

				        // 绑定翻页组件
						laypage({
						    cont: orderManage.$tab.find('#T-HotelOrder-list').find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.searchParam.totalPage, //总页数 
						    curr: (pageNo + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		orderManage.listHotelOrder($searchParam,obj.curr -1);
						    	}
						    }
						});
				    }
				}
			})
	};

	/**
	 * moneyCalc 酒店金额的计算]
	 * @return {[type]} [description]
	 */
	orderManage.moneyCalc=function($tab){
		var $trObj=$tab.find('tr');
		for (var i = 0; i < $trObj.length; i++) {
			var count=$trObj.eq(i).find('.count').text(),
		        price=$trObj.eq(i).find('.price').text(),
		        totalMoney=parseFloat(count*price);
		     $trObj.eq(i).find(".totalMoney").text(totalMoney);
		};
	};


	/**
	 * chooseOrderNumber 订单号Autocomplate
	 * @param  {[type]} $obj [description]
	 * @return {[type]}      [description]
	 */
	orderManage.chooseBusOrderNumber = function($obj,type){
		var $that = $obj.find(".T-Choose-orderNumber"),list;
		if (!!type && type=='0') {
			list = orderManage.busOrderNumbers;
		} else if(!!type && type=='1'){
			list = orderManage.hotelsOrderNumbers
		};
		    
		    if(!!list && list.length> 0){
		    	for(var i=0; i < list.length; i++){
					list[i].value = list[i];
			    };
		    }
		$that.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var parents = $(this).parent();
					parents.find("input[name=orderNumber]").val("");
				}
			},
			select :function(event, ui){
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
	 * chooseBusCompany 车队Autocomplate
	 * @param  {[type]} $obj [description]
	 * @return {[type]}      [description]
	 */
	orderManage.chooseBusCompany = function($obj){
		var $that = $obj.find(".T-Choose-busCompany"),list;
		    list = orderManage.busAutoComplate;
		    if(!!list && list.length> 0){
		    	for(var i=0; i < list.length; i++){
					list[i].value = list[i].companyName;
			    };
		    }
		$that.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var parents = $(this).parent();
					parents.find("input[name=busCompanyName]").val("");
				}
			},
			select :function(event, ui){
				var _this = this, parents = $(_this).parent();
				parents.find("input[name=busCompanyId]").val(ui.item.id).trigger('change');
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
	 * chooseBusCompany 车队Autocomplate
	 * @param  {[type]} $obj [description]
	 * @return {[type]}      [description]
	 */
	orderManage.chooseSeatCount = function($obj){
		var $that = $obj.find(".T-Choose-seatCount"),list;
		    list = orderManage.busSeatCounts;
		    if(!!list && list.length> 0){
		    	for(var i=0; i < list.length; i++){
					list[i].value = list[i];
			    };
		    }
		$that.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var parents = $(this).parent();
					parents.find("input[name=seatCount]").val("");
				}
			},
			select :function(event, ui){
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
	 * chooseBrand 车牌
	 * @param  {[type]} $obj [description]
	 * @return {[type]}      [description]
	 */
	orderManage.chooseBrand = function($obj){
		var $that = $obj.find(".T-Choose-busBrand"),list;
		    list = orderManage.busBrands;
		    if(!!list && list.length> 0){
		    	for(var i=0; i < list.length; i++){
					list[i].value = list[i];
			    };
		    }
		$that.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var parents = $(this).parent();
					parents.find("input[name=brand]").val("");
				}
			},
			select :function(event, ui){
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
	 * chooseBrand 车牌
	 * @param  {[type]} $obj [description]
	 * @return {[type]}      [description]
	 */
	orderManage.chooseUser = function($obj,type){
		var $that = $obj.find(".T-Choose-user"),list;
		if (!!type && type=='0') {
			list = orderManage.busAutoUsers;
		} else if (!!type && type=='1'){
			list = orderManage.hotelsAutoUsers;
		};
		    
		    if(!!list && list.length> 0){
		    	for(var i=0; i < list.length; i++){
					list[i].value = list[i].realName;
			    };
		    }
		$that.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var parents = $(this).parent();
					parents.find("input[name=userName]").val("");
				}
			},
			select :function(event, ui){
				var _this = this, parents = $(_this).parent();
				parents.find("input[name=userId]").val(ui.item.id).trigger('change');
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
	 * chooseBrand 车牌
	 * @param  {[type]} $obj [description]
	 * @return {[type]}      [description]
	 */
	orderManage.chooseHotel = function($obj){
		var $that = $obj.find(".T-Choose-Hotel"),list;
			list = orderManage.hotelsAutoComplate;
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
					parents.find("input[name=hotelName]").val("");
					parents.find("input[name=hotelId]").val("");
				}
			},
			select :function(event, ui){
				var _this = this, parents = $(_this).parent();
				parents.find("input[name=hotelId]").val(ui.item.id).trigger('change');
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
	 * 星级
	 * @param  {[type]} $obj [description]
	 * @return {[type]}      [description]
	 */
	orderManage.chooseLevel = function($obj){
		var $that = $obj.find(".T-Choose-level"),list;
			list = orderManage.hotelsLevels;
		    if(!!list && list.length> 0){
		    	for(var i=0; i < list.length; i++){
		    		if (list[i] == '1') {
		    			list[i] = '三星以下'
		    		}else if (list[i] == '2') {
		    			list[i] = '三星'
		    		}else if (list[i] == '3') {
		    			list[i] = '准四星'
		    		}else if (list[i] == '4') {
		    			list[i] = '四星'
		    		}else if (list[i] == '5') {
		    			list[i] = '准五星'
		    		}else if (list[i] == '6') {
		    			list[i] = '五星'
		    		}else if (list[i] == '7') {
		    			list[i] = '五星以上'
		    		}
			    };
		    }
		$that.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var parents = $(this).parent();
					parents.find("input[name=level]").val("");
				}
			},
			select :function(event, ui){
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
	 * [chooseHouseType 房型
	 * @param  {[type]} $obj [description]
	 * @return {[type]}      [description]
	 */
	orderManage.chooseHouseType = function($obj){
		var $that = $obj.find(".T-Choose-HotelType"),list;
			list = orderManage.hotelstypes; 
		    if(!!list && list.length> 0){
		    	for(var i=0; i < list.length; i++){
					list[i].value = list[i];
			    };
		    }
		$that.autocomplete({
			minLength:0,
			change :function(event, ui){
				if(ui.item == null){
					var parents = $(this).parent();
					parents.find("input[name=type]").val("");
				}
			},
			select :function(event, ui){
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

		showConfirmDialog("是否撤销？",function() {
			if (type==1) {//车队订单
				$.ajax({
					url:KingServices.build_url("busInquiry","revokeOrder"),
					type:"POST",
					data: "delJson="+encodeURIComponent(JSON.stringify(orderManage.$delJson)),
					success:function(data){
						orderManage.listBusCompanyOrder(0);
					}
				});
			}else if(type==2){
				$.ajax({//酒店订单
					url:KingServices.build_url("hotelInquiry","revokeOrder"),
					type:"POST",
					data: "delJson="+encodeURIComponent(JSON.stringify(orderManage.$delJson)),
					success:function(data){
						orderManage.listHotelOrder(0);
					}
				});
			};
		})
	};

   /**
	 * 时间控件是初始化
	 * @param  {[type]} $tabId 在外层ID
	 * @return {[type]}
	 */
	orderManage.initDatePicker = function($tabId){
		$tabId.find('.date-picker').datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
    };

	exports.init = orderManage.initModule;

});