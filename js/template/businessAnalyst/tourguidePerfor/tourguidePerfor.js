/**
 * 产品销量的查询&&列表的显示
 */
define(function(require, exports) {
		var menuKey = "business_analyst_employeePerfor",
	        listTemplate = require("./view/list"),
	        tabId="tab-"+menuKey+"-content";
	    /**
		 * 定义产品销量管理对象
		 * @type {Object}
		 */
		var employeePerforObj={
			searchData:false,
			$searchArea:false,
			$tab:false,
			allData:{}
		};

		/**
		 * 产品销量面初始化的方法
		 * @return {[type]} [description]
		 */
		employeePerforObj.initModule=function(){
			employeePerforObj.listemployeePerfor(0,"","","");
		};

		//产品销量页面list
		employeePerforObj.listemployeePerfor=function(page,startTime,endTime,status){
		   if (employeePerforObj.$searchArea && arguments.length===1) {
		   		//初始化页面后可以获取页面参数
		   		employeePerforObj.allData.startTime=employeePerforObj.getValue(employeePerforObj.$tab, startTime);
		   		employeePerforObj.allData.endTime=employeePerforObj.getValue(employeePerforObj.$tab, endTime);
		   		employeePerforObj.allData.status =employeePerforObj.$tab.find('input[name=status]').find("option:selected").val();
		   };


		//产品销量列表查询
		/*$.ajax({
			url:""+APP_ROOT+"back/guide.do?method=listGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
			type:"POST",
			data: {
				pageNo: page,
				startTime: employeePerforObj.allData.startTime,
				endTime: employeePerforObj.allData.endTime,
				status : employeePerforObj.allData.status
				sortType: 'auto'
			},
			success:function(data){

			}
		});*/

		   var html=listTemplate();
	       addTab(menuKey,"导游业绩",html);

	       //初始化JQuery对象
	       employeePerforObj.$tab=$("#" + tabId);//最大区域模块
	       employeePerforObj.$searchArea=employeePerforObj.$tab.find('.T-search-area');//搜索模块区域

	       //初始化页面控件
	       employeePerforObj.datepicker(employeePerforObj.$tab);

	       //初始化页面绑定事件
	       employeePerforObj.init_event();

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
	    employeePerforObj.init_event=function(){
	    	//搜索按钮绑定事件
	    	employeePerforObj.$tab.find('.T-employeePerfor-search').on('click', function(event) {
	    		event.preventDefault();
	    		/* Act on the event */
	    		//产品销量列表查询
	    		//employeePerforObj.listemployeePerfor(0);
	    		alert("click Search....... ");
	    		//产品销量统计查询
	    		employeePerforObj.listSaleProTotal();
	    	
	    	});
	    };

	    /**
	     * 产品销量统计查询
	     * @return {[type]} [description]
	     */
	    employeePerforObj.listSaleProTotal=function(){
	    	alert("click listSaleProTotal....... ");
	    	//产品销量统计查询	
			/*$.ajax({
				url:""+APP_ROOT+"back/guide.do?method=listGuide&token="+$.cookie("token")+"&menuKey="+menuKey+"&operation=view",
				type:"POST",
				data: {
					pageNo: page,
					startTime: employeePerforObj.allData.startTime,
					endTime: employeePerforObj.allData.endTime,
					status : employeePerforObj.allData.status
					sortType: 'auto'
			    },
				success:function(data){

				}
			});*/
	    };

	//时间控件初始化
	employeePerforObj.datepicker = function($obj){
		$obj.find(".datepicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
	};
	//获取控件中的值
	employeePerforObj.getValue = function($obj,name){
		var value = $obj.find("[name="+name+"]").val();
		return value;
	};
	//ajax中的url
	employeePerforObj.url = function(method,operation){
		var url = ''+APP_ROOT+'back/hotel.do?method='+method+'&token='+$.cookie('token')+'&menuKey='+menuKey+'&operation='+operation+'';
		return url;
	}

	exports.init = employeePerforObj.initModule;

});