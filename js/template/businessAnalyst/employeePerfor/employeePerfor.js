/**
 * 员工部门的查询&&列表的显示
 */
define(function(require, exports) {
	var menuKey = "business_analyst_employeePerfor",
        listMainTemplate = require("./view/listMain"),
        listDeptTemplate=require("./view/listDept"),
        listEmployTemplate=require("./view/listEmploy"),
        tabId="tab-"+menuKey+"-content";
    /**
	 * 定义产品销量管理对象
	 * @type {Object}
	 */
	var employeePerforObj={
		searchData:false,
		$searchArea:false,
		$tab:false,
		$searchParam:{
			startTime:"",
			endTime:"",
			type:"",
			customerType:"",
			pageNo:""
		}
	};

	/**
	 * 员工业绩页面初始化的方法
	 * @return {[type]} [description]
	 */
	employeePerforObj.initModule=function(){
		employeePerforObj.listemployeePerfor();
	};

	//产品销量页面list
	employeePerforObj.listemployeePerfor=function(){

	    var html=listMainTemplate();
		addTab(menuKey,"员工业绩",html);
		employeePerforObj.initJQueryDateObj();
		//初始化页面绑定事件
		employeePerforObj.init_event();
		employeePerforObj.first = true;
    };

	/**
	 * 初始化JQuery对象&&页面控件
	 * @return {[type]} [description]
	 */
	employeePerforObj.initJQueryDateObj=function(){
		  //初始化Jquery对象
		  employeePerforObj.$tab=$('#' + tabId);//最大区域模块
		  employeePerforObj.$searchArea=employeePerforObj.$tab.find('.T-search-area');//搜索模块区域
		  //初始化页面控件
		  employeePerforObj.datepicker(employeePerforObj.$tab);
	};

 
    /**
     * 初始化页面绑定事件
     * @return {[type]} [description]
     */
    employeePerforObj.init_event=function(){
	  

    	//搜索按钮绑定事件
    	employeePerforObj.$tab.find('.T-employeePerfor-search').on('click', function(event) {
    		event.preventDefault();
    		//初始化页面后可以获取页面参数
		   	var startTime=employeePerforObj.$tab.find("input[name=startTime]").val(),
		   	    endTime=employeePerforObj.$tab.find('input[name=endTime]').val(),
		   	    type=employeePerforObj.$tab.find('button').attr('data-value'),
		   	    customerType=employeePerforObj.$tab.find('.T-select-customerType').children('button').attr('data-value');
	   		employeePerforObj.getListEmpDept(startTime,endTime,type,customerType,0);

    	}); 	
    	//trigger事件
    	employeePerforObj.$tab.find('.T-employeePerfor-search').trigger('click');

    	//员工部门之间选项切换
		employeePerforObj.$tab.find('.T-select-employeerDept').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that=$(this),customerType;
			$that.closest('ul').prev().attr('data-value', $that.data('value')).children('span').text($that.text());
			$that.closest('ul').prev().attr('data-value');
			customerType = $that.closest('div').next('div').children('button').data('value');
			if ($that.closest('ul').prev().attr('data-value')==1) {
				employeePerforObj.$tab.find('.T-deptPerfor-list').addClass('hide');
				employeePerforObj.$tab.find('.T-employeePerfor-list').removeClass('hide');
				employeePerforObj.getListEmpDept("","",1,customerType,0);
			} else{
				employeePerforObj.$tab.find('.T-deptPerfor-list').removeClass('hide');
				employeePerforObj.$tab.find('.T-employeePerfor-list').addClass('hide');
				employeePerforObj.getListEmpDept("","",2,customerType,0);

			};
		});

		//针对客源 
		employeePerforObj.$tab.find('.T-select-customerType').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that=$(this);$that.closest('ul').prev().attr('data-value', $that.data('value')).children('span').text($that.text());
			var isEmployee = $that.closest('div').prev('div').children('button').attr('data-value');
			if (isEmployee==1) {//员工
				employeePerforObj.$tab.find('.T-deptPerfor-list').addClass('hide');
				employeePerforObj.$tab.find('.T-employeePerfor-list').removeClass('hide');
				employeePerforObj.getListEmpDept("","",1,$that.data('value'),0);
			}else{//部门
				employeePerforObj.$tab.find('.T-deptPerfor-list').removeClass('hide');
				employeePerforObj.$tab.find('.T-employeePerfor-list').addClass('hide');
				employeePerforObj.getListEmpDept("","",2,$that.data('value'),0);
			};
			   
		});

    };

    employeePerforObj.getListEmpDept=function(startTime,endTime,type,customerType,page){
    		employeePerforObj.$searchParam.startTime=startTime;
    		employeePerforObj.$searchParam.endTime=endTime;
    		employeePerforObj.$searchParam.type=type;
    		employeePerforObj.$searchParam.customerType=customerType;
    		employeePerforObj.$searchParam.pageNo=page;
	
	    	if (type==1) {
	    		$.ajax({
	    			url : KingServices.build_url("performanceOfUser","findTotal"),
					type : "POST",
					data : "searchParam="+encodeURIComponent(JSON.stringify(employeePerforObj.$searchParam)),
					success : function(data){
						var result = showDialog(data);
						if(result){
						   var html=listEmployTemplate(data);
						   employeePerforObj.$tab.find('.T-employeePerfor-list').html(html);
						   // 绑定翻页组件
							laypage({
							    cont: employeePerforObj.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
							    pages: data.searchParam.totalPage, //总页数 
							    curr: (page + 1),
							    jump: function(obj, first) {
							    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							    		employeePerforObj.getListEmpDept(startTime,endTime,1,customerType,obj.curr -1);
							    	}
							    }
							});
						}
					}
				});

	    	}
	    	if(type==2){
	    		$.ajax({
	    			url : KingServices.build_url("performanceOfUser","findTotalByBusinessGroup"),
					type : "POST",
					data : "searchParam="+encodeURIComponent(JSON.stringify(employeePerforObj.$searchParam)),
					success : function(data){
						var result = showDialog(data);
						if(result){
						   var html=listDeptTemplate(data);
						   employeePerforObj.$tab.find('.T-deptPerfor-list').html(html);

						   // 绑定翻页组件
							laypage({
							    cont: employeePerforObj.$tab.find('.T-listDept-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
							    pages: data.searchParam.totalPage, //总页数 
							    curr: (page + 1),
							    jump: function(obj, first) {
							    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							    		employeePerforObj.getListEmpDept(startTime,endTime,2,customerType,obj.curr -1);
							    	}
							    }
							});
						   
						}
					}

				});
	    	};
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

 
	exports.init = employeePerforObj.initModule;

});