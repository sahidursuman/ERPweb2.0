/**
 * 客户客量的查询&&列表的显示
 */
define(function(require, exports) {
		var menuKey = "business_analyst_customerVol",
	        listTemplate = require("./view/list"),
	        customerDelTemplate = require("./view/customerDetail"),
	        tabId="tab-"+menuKey+"-content";
	    /**
		 * 客源分布管理对象
		 * @type {Object}
		 */
		var customerVolObj={
			searchData:false,
			$searchArea:false,
			$tab:false,
			$searchParam:{
				startTime:"",
				endTime:"",
				customerId:"",
				customerName:"",
				pageNo:0
			},
			autocompleteDate:{}
		};

		/**
		 *  客户客量面初始化的方法
		 * @return {[type]} [description]
		 */
		customerVolObj.initModule=function(){
			customerVolObj.listCusVo(0,"","","","");
		};

		// 客户客量页面list
		customerVolObj.listCusVo=function(page,startTime,endTime,customerId,customerName){
		   if (customerVolObj.$searchArea && arguments.length===1) {
		   		//初始化页面后可以获取页面参数
		   		startTime=customerVolObj.$searchArea.find('input[name=startTime]').val();
		   		endTime=customerVolObj.$searchArea.find('input[name=endTime]').val();
		   		customerId =customerVolObj.$searchArea.find('input[name=customerId]').val();
		   		customerName =customerVolObj.$searchArea.find('input[name=customerName]').val();
		   };

		page:0 || page;

		//封装查询参数
		customerVolObj.$searchParam={
			startTime:startTime,
			endTime:endTime,
			customerId:customerId,
			customerName:customerName,
			pageNo:page
		};

		// 客户客量列表查询
		$.ajax({
			url : customerVolObj.url("findPager","view"),
			type:"POST",
			data : "searchParam="+encodeURIComponent(JSON.stringify(customerVolObj.$searchParam)),
			success:function(data){
						
			  var html=listTemplate(data);
		       Tools.addTab(menuKey,"客户客量",html);

		       //初始化JQuery对象
		       customerVolObj.$tab=$("#" + tabId);//最大区域模块
		       customerVolObj.$searchArea=customerVolObj.$tab.find('.T-search-area');//搜索模块区域

		       //初始化客户数据Autocomplate
		       customerVolObj.autocompleteDate.getCusList=data.resultList;

		       //初始化页面控件
		       customerVolObj.datepicker(customerVolObj.$tab);

		       //初始化页面绑定事件
		       customerVolObj.init_event();

		       	// 绑定翻页组件
				laypage({
				    cont: customerVolObj.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
				    pages: data.totalPage, //总页数
				    curr: (page + 1),
				    jump: function(obj, first) {
				    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
				    		customerVolObj.listCusVo(obj.curr -1);
				    	}
				    }
				});
			}
		});


	};

	    //初始化页面绑定事件
	    customerVolObj.init_event=function(){
	    	//搜索按钮绑定事件
	    	customerVolObj.$tab.find('.T-saleProduct-search').on('click', function(event) {
	    		event.preventDefault();
	    		/* Act on the event */
	    		// 客户客量统计查询
	    		customerVolObj.listCusVo(0);
	    	
	    	});

	    	//客户autocomplate数据
	    	customerVolObj.getCusList(customerVolObj.$tab);


	    	//客户客量明细Detail
	    	customerVolObj.$tab.find('.T-customerVo-Detail').on('click',function(event) {
	    		event.preventDefault();
	    		/* Act on the event */
    				var $that=$(this),
    		            id=$that.data('value');
    		        customerVolObj.getCusDetail(id);

	    	}); 	
	};



    //查询客户明细
    customerVolObj.getCusDetail=function(id) {
    	// body...
    	//查询客户明细列
		$.ajax({
			url : customerVolObj.url("findTourist","view"),
			type:"POST",
			data : "id="+id,
			success:function(data){
	            var html=customerDelTemplate(data);
	                customerVolObj.$tab.find('.T-customerDetail-list').html(html);
			}
		});
    };
	


    //客户客量的Autocomplete
    customerVolObj.getCusList=function($obj){
		var getCusList = $obj.find(".T-customerVo-linPro");
		getCusList.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).parent().parent().find("input[name=customerId]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).parent().parent().find("input[name=customerId]").val(ui.item.id).trigger('change');
			}
		}).click(function(){
			var obj = this;
			var listObj = customerVolObj.autocompleteDate.getCusList;
			if(listObj !=null && listObj.length>0){
				for(var i=0;i<listObj.length;i++){
					listObj[i].value = listObj[i].name;
				}
			}
			$(obj).autocomplete('option','source', listObj);
			$(obj).autocomplete('search', '');
		})
	};

	//时间控件初始化
	customerVolObj.datepicker = function($obj){
		$obj.find(".datepicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
	};

	//ajax中的url
	customerVolObj.url = function(method,operation){
		var url = ''+APP_ROOT+' /back/numberOfPartnerAgency.do?method='+method+'&token='+$.cookie('token')+'&menuKey='+menuKey+'&operation='+operation+'';
		return url;
	}

	exports.init = customerVolObj.initModule;

});