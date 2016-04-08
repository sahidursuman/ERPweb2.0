/**
 * 产品销量的查询&&列表的显示
 */
define(function(require, exports) {
		var menuKey = "business_analyst_saleProduct",
	        listTemplate = require("./view/list"),
	        tabId="tab-"+menuKey+"-content";
	    /**
		 * 定义产品销量管理对象
		 * @type {Object}
		 */
		var SaleProductObj={
			searchData:false,
			$searchArea:false,
			$tab:false
		
	   };

		/**
		 * 产品销量面初始化的方法
		 * @return {[type]} [description]
		 */
		SaleProductObj.initModule=function(){
			SaleProductObj.listSaleProduct(0,"","","");
		};

		//产品销量页面list
		SaleProductObj.listSaleProduct=function(page,startDate,endDate,customerType){
		   if (SaleProductObj.$searchArea && arguments.length===1) {
		   		//初始化页面后可以获取页面参数
		   		startDate=SaleProductObj.$searchArea.find('input[name=startDate]').val();
		   		endDate=SaleProductObj.$searchArea.find('input[name=endDate]').val();
		   		customerType =SaleProductObj.$searchArea.find('select[name=customerType]').find("option:selected").val();
		   };
		   	

		   	page=0 || page;

			//产品销量列表查询
			$.ajax({
				url : KingServices.build_url("lineProductSales","listLineProductSales"),
				type:"POST",
				data:{
					startDate:startDate,
					endDate:endDate,
					customerType:customerType,
					pageNo:page,
					sortType: 'tourist'

				},
				success:function(data){
					 var html=listTemplate(data);
				       Tools.addTab(menuKey,"产品销量",html);

				       //初始化JQuery对象
				       SaleProductObj.$tab=$("#" + tabId);//最大区域模块
				       SaleProductObj.$searchArea=SaleProductObj.$tab.find('.T-search-area');//搜索模块区域

				       //初始化页面控件
				       SaleProductObj.datepicker(SaleProductObj.$tab);

				       //初始化页面绑定事件
				       SaleProductObj.init_event();

				       	// 绑定翻页组件
						laypage({
						    cont: SaleProductObj.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
						    pages: data.totalPage, //总页数
						    curr: (page + 1),
						    jump: function(obj, first) {
						    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
						    		SaleProductObj.listSaleProduct(obj.curr -1,startDate,endDate,data.searchParam.customerType);
						    	}
						    }
						});
				}
			});
		};

	    //初始化页面绑定事件
	    SaleProductObj.init_event=function(){
	    	//搜索按钮绑定事件
	    	SaleProductObj.$tab.find('.T-saleProduct-search').on('click', function(event) {
	    		event.preventDefault();
	    		/* Act on the event */
	    		SaleProductObj.listSaleProduct(0);
	    	});

	    };

		//时间控件初始化
		SaleProductObj.datepicker = function($obj){
			$obj.find(".datepicker").datepicker({
				autoclose: true,
				todayHighlight: true,
				format: 'yyyy-mm-dd',
				language: 'zh-CN'
			})
		};

		exports.init = SaleProductObj.initModule;

});