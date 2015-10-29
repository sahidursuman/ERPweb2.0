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
			$tab:false,
			allData:{}
		};

		/**
		 * 产品销量面初始化的方法
		 * @return {[type]} [description]
		 */
		SaleProductObj.initModule=function(){
			SaleProductObj.listSaleProduct(0,"","","");
		};

		//产品销量页面list
		SaleProductObj.listSaleProduct=function(page,startTime,endTime,status){
		   if (SaleProductObj.$searchArea && arguments.length===1) {
		   		//初始化页面后可以获取页面参数
		   		SaleProductObj.allData.startTime=SaleProductObj.getValue(SaleProductObj.$tab, startTime);
		   		SaleProductObj.allData.endTime=SaleProductObj.getValue(SaleProductObj.$tab, endTime);
		   		SaleProductObj.allData.status =SaleProductObj.$tab.find('input[name=status]').find("option:selected").val();
		   };


		//产品销量列表查询
		/*$.ajax({
			url:""+APP_ROOT+"back/guide.do?method=listGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type:"POST",
			data: {
				pageNo: page,
				startTime: SaleProductObj.allData.startTime,
				endTime: SaleProductObj.allData.endTime,
				status : SaleProductObj.allData.status
				sortType: 'auto'
			},
			success:function(data){

			}
		});*/

		   var html=listTemplate();
	       addTab(menuKey,"产品销量",html);

	       //初始化JQuery对象
	       SaleProductObj.$tab=$("#" + tabId);//最大区域模块
	       SaleProductObj.$searchArea=SaleProductObj.$tab.find('.T-search-area');//搜索模块区域

	       //初始化页面控件
	       SaleProductObj.datepicker(SaleProductObj.$tab);

	       //初始化页面绑定事件
	       SaleProductObj.init_event();

	       	// 绑定翻页组件
			/*laypage({
			    cont: GuideResource.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
			    pages: data.totalPage, //总页数
			    curr: (page + 1),
			    jump: function(obj, first) {
			    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
			    		GuideResource.listGuide(obj.curr -1);
			    	}
			    }
			});*/


		};

	    //初始化页面绑定事件
	    SaleProductObj.init_event=function(){
	    	//搜索按钮绑定事件
	    	SaleProductObj.$tab.find('.T-saleProduct-search').on('click', function(event) {
	    		event.preventDefault();
	    		/* Act on the event */
	    		//产品销量列表查询
	    		//SaleProductObj.listSaleProduct(0);
	    		alert("click Search....... ");
	    		//产品销量统计查询
	    		SaleProductObj.listSaleProTotal();
	    	
	    	});
	    };

	    /**
	     * 产品销量统计查询
	     * @return {[type]} [description]
	     */
	    SaleProductObj.listSaleProTotal=function(){
	    	alert("click listSaleProTotal....... ");
	    	//产品销量统计查询	
			/*$.ajax({
				url:""+APP_ROOT+"back/guide.do?method=listGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data: {
					pageNo: page,
					startTime: SaleProductObj.allData.startTime,
					endTime: SaleProductObj.allData.endTime,
					status : SaleProductObj.allData.status
					sortType: 'auto'
			    },
				success:function(data){

				}
			});*/
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
	//获取控件中的值
	SaleProductObj.getValue = function($obj,name){
		var value = $obj.find("[name="+name+"]").val();
		return value;
	};
	//ajax中的url
	SaleProductObj.url = function(method,operation){
		var url = ''+APP_ROOT+'back/hotel.do?method='+method+'&token='+$.cookie('token')+'&menuKey='+menuKey+'&operation='+operation+'';
		return url;
	}

	exports.init = SaleProductObj.initModule;

});