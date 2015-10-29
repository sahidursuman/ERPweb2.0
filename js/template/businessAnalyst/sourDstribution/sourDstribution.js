/**
 * 客源分布的查询&&列表的显示
 */
define(function(require, exports) {
		var menuKey = "business_analyst_sourDstribution",
	        listTemplate = require("./view/list"),
	        tabId="tab-"+menuKey+"-content";
	    /**
		 * 客源分布管理对象
		 * @type {Object}
		 */
		var sourDstributionObj={
			searchData:false,
			$searchArea:false,
			$tab:false,
			allData:{}
		};

		/**
		 * 产品销量面初始化的方法
		 * @return {[type]} [description]
		 */
		sourDstributionObj.initModule=function(){
			sourDstributionObj.listSaleProduct(0,"","","");
		};

		//产品销量页面list
		sourDstributionObj.listSaleProduct=function(page,startTime,endTime,status){
		   if (sourDstributionObj.$searchArea && arguments.length===1) {
		   		//初始化页面后可以获取页面参数
		   		sourDstributionObj.allData.startTime=sourDstributionObj.getValue(sourDstributionObj.$tab, startTime);
		   		sourDstributionObj.allData.endTime=sourDstributionObj.getValue(sourDstributionObj.$tab, endTime);
		   		sourDstributionObj.allData.status =sourDstributionObj.$tab.find('input[name=status]').find("option:selected").val();
		   };


		//产品销量列表查询
		/*$.ajax({
			url:""+APP_ROOT+"back/guide.do?method=listGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type:"POST",
			data: {
				pageNo: page,
				startTime: sourDstributionObj.allData.startTime,
				endTime: sourDstributionObj.allData.endTime,
				status : sourDstributionObj.allData.status
				sortType: 'auto'
			},
			success:function(data){

			}
		});*/

		   var html=listTemplate();
	       addTab(menuKey,"产品销量",html);

	       //初始化JQuery对象
	       sourDstributionObj.$tab=$("#" + tabId);//最大区域模块
	       sourDstributionObj.$searchArea=sourDstributionObj.$tab.find('.T-search-area');//搜索模块区域

	       //初始化页面控件
	       sourDstributionObj.datepicker(sourDstributionObj.$tab);

	       //初始化页面绑定事件
	       sourDstributionObj.init_event();

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
	    sourDstributionObj.init_event=function(){
	    	//搜索按钮绑定事件
	    	sourDstributionObj.$tab.find('.T-saleProduct-search').on('click', function(event) {
	    		event.preventDefault();
	    		/* Act on the event */
	    		//产品销量列表查询
	    		//sourDstributionObj.listSaleProduct(0);
	    		alert("click Search....... ");
	    		//产品销量统计查询
	    		sourDstributionObj.listSaleProTotal();
	    	
	    	});
	    };

	    /**
	     * 产品销量统计查询
	     * @return {[type]} [description]
	     */
	    sourDstributionObj.listSaleProTotal=function(){
	    	alert("click listSaleProTotal....... ");
	    	//产品销量统计查询	
			/*$.ajax({
				url:""+APP_ROOT+"back/guide.do?method=listGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data: {
					pageNo: page,
					startTime: sourDstributionObj.allData.startTime,
					endTime: sourDstributionObj.allData.endTime,
					status : sourDstributionObj.allData.status
					sortType: 'auto'
			    },
				success:function(data){

				}
			});*/
	    };

	//时间控件初始化
	sourDstributionObj.datepicker = function($obj){
		$obj.find(".datepicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
	};
	//获取控件中的值
	sourDstributionObj.getValue = function($obj,name){
		var value = $obj.find("[name="+name+"]").val();
		return value;
	};
	//ajax中的url
	sourDstributionObj.url = function(method,operation){
		var url = ''+APP_ROOT+'back/hotel.do?method='+method+'&token='+$.cookie('token')+'&menuKey='+menuKey+'&operation='+operation+'';
		return url;
	}

	exports.init = sourDstributionObj.initModule;

});