/**
 * 员工部门的查询&&列表的显示
 */
define(function(require, exports) {
	var menuKey = "business_analyst_employeePerfor",
        listMainTemplate = require("./view/listMain"),
        listDeptTemplate=require("./view/listDept"),
        listEmployTemplate=require("./view/listEmploy"),
        listSalePerforTemplate=require("./view/listSalePer"),
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
			partnerAgencyType:"",
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
		   	    customerType=employeePerforObj.$tab.find('.T-select-customerType').children('button').attr('data-value'),
		   	    partnerAgencyType = employeePerforObj.$tab.find('.T-select-partnerAgencyType').children('button').attr('data-value');
		   	    opUserType = employeePerforObj.$tab.find('.T-select-opUserList').children('button').attr('data-value');
		   	    if (type==1 && opUserType==0) {
		   	    	employeePerforObj.getListEmpDept(startTime,endTime,type,customerType,partnerAgencyType,0);
		   	    };
		   	    if (type==1 && opUserType==1) {
		   	    	employeePerforObj.getListEmpDept(startTime,endTime,3,customerType,partnerAgencyType,0);
		   	    };
		   	    if (type==2) {
		   	    	employeePerforObj.getListEmpDept(startTime,endTime,type,customerType,partnerAgencyType,0);
		   	    };
    	}); 	
    	//trigger事件
    	employeePerforObj.$tab.find('.T-employeePerfor-search').trigger('click');

    	//员工部门之间选项切换
		employeePerforObj.$tab.find('.T-select-employeerDept').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that=$(this),customerType,partnerAgencyType,opUserType,startTime,endTime;
			$that.closest('ul').prev().attr('data-value', $that.data('value')).children('span').text($that.text());
			$that.closest('ul').prev().attr('data-value');
			startTime=employeePerforObj.$tab.find("input[name=startTime]").val(),
		   	endTime=employeePerforObj.$tab.find('input[name=endTime]').val(),
			customerType = employeePerforObj.$tab.find('.T-select-customerType').children('button').attr('data-value'),
			partnerAgencyType =employeePerforObj.$tab.find('.T-select-partnerAgencyType').children('button').attr('data-value'); //客户类型
			if ($that.closest('ul').prev().attr('data-value')==1) {//员工
				employeePerforObj.$tab.find('.T-select-opUserList').removeClass('hide');
				employeePerforObj.$tab.find('.T-deptPerfor-list').addClass('hide');
				opUserType = employeePerforObj.$tab.find('.T-select-opUserList').children('button').attr('data-value');//责任计调
				if (opUserType==0) { //责任计调
				    employeePerforObj.$tab.find('.T-employeePerfor-list').removeClass('hide');
				    employeePerforObj.$tab.find('.T-salePerfor-list').addClass('hide');
					employeePerforObj.getListEmpDept(startTime,endTime,1,customerType,partnerAgencyType,0);
				};
				if (opUserType==1) { //外联计调--销售业绩
					employeePerforObj.$tab.find('.T-employeePerfor-list').addClass('hide');
				    employeePerforObj.$tab.find('.T-salePerfor-list').removeClass('hide');
					employeePerforObj.getListEmpDept(startTime,endTime,3,customerType,partnerAgencyType,0);
				};
			} else{//部门

				console.log("customerType"+customerType)
				employeePerforObj.$tab.find('.T-deptPerfor-list').removeClass('hide');
				employeePerforObj.$tab.find('.T-employeePerfor-list').addClass('hide');
				employeePerforObj.$tab.find('.T-select-opUserList').addClass('hide');
				employeePerforObj.$tab.find('.T-salePerfor-list').addClass('hide');
				employeePerforObj.getListEmpDept(startTime,endTime,2,customerType,partnerAgencyType,0);
			};
		});

		//针对客源 
		employeePerforObj.$tab.find('.T-select-customerType').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that=$(this);$that.closest('ul').prev().attr('data-value', $that.data('value')).children('span').text($that.text());
			var isEmployee = $that.closest('div').prev('div').children('button').attr('data-value')
				startTime=employeePerforObj.$tab.find("input[name=startTime]").val(),
		   		endTime=employeePerforObj.$tab.find('input[name=endTime]').val(),
			    partnerAgencyType=employeePerforObj.$tab.find('.T-select-partnerAgencyType').children('button').attr('data-value'),
			    isEmployee=employeePerforObj.$tab.find('.T-select-employeerDept').children('button').attr('data-value');
			if (isEmployee==1) {
				employeePerforObj.$tab.find('.T-select-opUserList').removeClass('hide');
				employeePerforObj.$tab.find('.T-deptPerfor-list').addClass('hide');
				var opUserType=employeePerforObj.$tab.find('.T-select-opUserList').children('button').attr('data-value');
				if (opUserType==0) { //责任计调
					employeePerforObj.$tab.find('.T-employeePerfor-list').removeClass('hide');
				    employeePerforObj.$tab.find('.T-salePerfor-list').addClass('hide');
					employeePerforObj.getListEmpDept(startTime,endTime,1,$that.data('value'),partnerAgencyType,0);
				};
				if (opUserType==1) { //外联计调--销售业绩
					employeePerforObj.$tab.find('.T-employeePerfor-list').addClass('hide');
				    employeePerforObj.$tab.find('.T-salePerfor-list').removeClass('hide');
					employeePerforObj.getListEmpDept(startTime,endTime,3,$that.data('value'),partnerAgencyType,0);
				};
			}else if(isEmployee==2){//部门--无责任计调
			    employeePerforObj.$tab.find('.T-deptPerfor-list').removeClass('hide');
				employeePerforObj.$tab.find('.T-employeePerfor-list').addClass('hide');
				employeePerforObj.$tab.find('.T-select-opUserList').addClass('hide');
				employeePerforObj.$tab.find('.T-salePerfor-list').addClass('hide');
				employeePerforObj.getListEmpDept(startTime,endTime,2,$that.data('value'),partnerAgencyType,0);
			};
			   
		});


		//客户类型
		employeePerforObj.$tab.find('.T-select-partnerAgencyType').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that=$(this);$that.closest('ul').prev().attr('data-value', $that.data('value')).children('span').text($that.text()),
				startTime=employeePerforObj.$tab.find("input[name=startTime]").val(),
		   		endTime=employeePerforObj.$tab.find('input[name=endTime]').val(),
			    partnerAgencyType=$that.data('value'),
			    customerType=employeePerforObj.$tab.find('.T-select-customerType').children('button').attr('data-value'),
			    isEmployee=employeePerforObj.$tab.find('.T-select-employeerDept').children('button').attr('data-value');
			if (isEmployee==1) {
				employeePerforObj.$tab.find('.T-select-opUserList').removeClass('hide');
				employeePerforObj.$tab.find('.T-deptPerfor-list').addClass('hide');
				var opUserType=employeePerforObj.$tab.find('.T-select-opUserList').children('button').attr('data-value');
				if (opUserType==0) { //责任计调
					employeePerforObj.$tab.find('.T-employeePerfor-list').removeClass('hide');
				    employeePerforObj.$tab.find('.T-salePerfor-list').addClass('hide');
					employeePerforObj.getListEmpDept(startTime,endTime,1,customerType,partnerAgencyType,0);
				};
				if (opUserType==1) { //外联计调--销售业绩
					employeePerforObj.$tab.find('.T-employeePerfor-list').addClass('hide');
				    employeePerforObj.$tab.find('.T-salePerfor-list').removeClass('hide');
					employeePerforObj.getListEmpDept(startTime,endTime,3,customerType,partnerAgencyType,0);
				};
			}else if(isEmployee==2){//部门--无责任计调
			    employeePerforObj.$tab.find('.T-deptPerfor-list').removeClass('hide');
				employeePerforObj.$tab.find('.T-employeePerfor-list').addClass('hide');
				employeePerforObj.$tab.find('.T-select-opUserList').addClass('hide');
				employeePerforObj.$tab.find('.T-salePerfor-list').addClass('hide');
				employeePerforObj.getListEmpDept(startTime,endTime,2,customerType,partnerAgencyType,0);
			};
		});

		//责任计调
		employeePerforObj.$tab.find('.T-select-opUserList').on('click', 'a', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that=$(this);$that.closest('ul').prev().attr('data-value', $that.data('value')).children('span').text($that.text()),
				startTime=employeePerforObj.$tab.find("input[name=startTime]").val(),
		   		endTime=employeePerforObj.$tab.find('input[name=endTime]').val(),
			    partnerAgencyType=employeePerforObj.$tab.find('.T-select-partnerAgencyType').children('button').attr('data-value'),
			    customerType=employeePerforObj.$tab.find('.T-select-customerType').children('button').attr('data-value');
			if ($that.data('value')==0) {//责任计调
				employeePerforObj.$tab.find('.T-salePerfor-list').addClass('hide');
				employeePerforObj.$tab.find('.T-employeePerfor-list').removeClass('hide');
				employeePerforObj.getListEmpDept(startTime,endTime,1,customerType,partnerAgencyType,0); 
			}else{//外联计调--销售业绩
				employeePerforObj.$tab.find('.T-employeePerfor-list').addClass('hide');
				employeePerforObj.$tab.find('.T-salePerfor-list').removeClass('hide');
				employeePerforObj.getListEmpDept(startTime,endTime,3,customerType,partnerAgencyType,0);
			};
		});
    };

    employeePerforObj.getListEmpDept=function(startTime,endTime,type,customerType,partnerAgencyType,page){
    		employeePerforObj.$searchParam.startTime=startTime;
    		employeePerforObj.$searchParam.endTime=endTime;
    		employeePerforObj.$searchParam.type=type;
    		employeePerforObj.$searchParam.customerType=customerType;
    		employeePerforObj.$searchParam.partnerAgencyType=partnerAgencyType;
    		employeePerforObj.$searchParam.pageNo=page;
	
	    	if (type==1) {
	    		$.ajax({
	    			url : KingServices.build_url("performanceOfUser","findUserPager"),
					type : "POST",
					data : "searchParam="+encodeURIComponent(JSON.stringify(employeePerforObj.$searchParam)),
					success : function(data){
						var result = showDialog(data);
						if(result){
						   var html=listEmployTemplate(data);
						   employeePerforObj.$tab.find('.T-employeePerfor-list').html(html);
						   employeePerforObj.initFindUserTotal(employeePerforObj.$searchParam, employeePerforObj.$tab);
						   // 绑定翻页组件
							laypage({
							    cont: employeePerforObj.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
							    pages: data.searchParam.totalPage, //总页数 
							    curr: (page + 1),
							    jump: function(obj, first) {
							    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							    		employeePerforObj.getListEmpDept(startTime,endTime,1,customerType,partnerAgencyType,obj.curr -1);
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
						   employeePerforObj.initFindBusinessGroupTotal(employeePerforObj.$searchParam, employeePerforObj.$tab);
						   // 绑定翻页组件
							laypage({
							    cont: employeePerforObj.$tab.find('.T-listDept-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
							    pages: data.searchParam.totalPage, //总页数 
							    curr: (page + 1),
							    jump: function(obj, first) {
							    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							    		employeePerforObj.getListEmpDept(startTime,endTime,2,customerType,partnerAgencyType,obj.curr -1);
							    	}
							    }
							});
						   
						}
					}

				});
	    	};

	    	if(type==3){
	    		$.ajax({
	    			url : KingServices.build_url("performanceOfUser","findPager"),
					type : "POST",
					data : "searchParam="+encodeURIComponent(JSON.stringify(employeePerforObj.$searchParam)),
					success : function(data){
						var result = showDialog(data);
						if(result){
						   var html=listSalePerforTemplate(data);
						   employeePerforObj.$tab.find('.T-salePerfor-list').html(html);
						   employeePerforObj.initFindTotal(employeePerforObj.$searchParam, employeePerforObj.$tab);
						   // 绑定翻页组件
							laypage({
							    cont: employeePerforObj.$tab.find('.T-listSalePer-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
							    pages: data.searchParam.totalPage, //总页数 
							    curr: (page + 1),
							    jump: function(obj, first) {
							    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
							    		employeePerforObj.getListEmpDept(startTime,endTime,3,customerType,partnerAgencyType,obj.curr -1);
							    	}
							    }
							});
						   
						}
					}

				});
	    	};
    };


    //外联销售统计
     employeePerforObj.initFindTotal=function($searchParams, $tab){
     	$.ajax({
     		url: KingServices.build_url("performanceOfUser","totalFindPager"),
     		type: 'POST',
		    data : "searchParam="+encodeURIComponent(JSON.stringify($searchParams)),
     	})
     	.done(function(data) {
     		//var totalCount=data.adultCount*1+data.childCount*1;
     		$tab.find('.T-totalCount').text(data.adultCount+"大"+data.childCount+"小");
     	})
     }

    //员工业绩统计
    employeePerforObj.initFindUserTotal=function($searchParams, $tab){
     	$.ajax({
     		url: KingServices.build_url("performanceOfUser","totalFindUserPager"),
     		type: 'POST',
		    data : "searchParam="+encodeURIComponent(JSON.stringify($searchParams)),
     	})
     	.done(function(data) {
     		$tab.find('.T-tripTotalCount').text(data.tripCount);
     		$tab.find('.T-adChilTotalCount').text(data.adultCount+"大"+data.childCount+"小");
     		$tab.find('.T-transAdChilTotalCount').text(data.transAdultCount+"大"+data.transChildCount+"小");
     		$tab.find('.T-innerAdChilTotalCount').text(data.innerAdultCount+"大"+data.innerChildCount+"小");
     		$tab.find('.T-orderTotalCount').text(data.orderCount);
     	})
     }


    //部门统计
    employeePerforObj.initFindBusinessGroupTotal=function($searchParams, $tab){
     	$.ajax({
     		url: KingServices.build_url("performanceOfUser","totalFindTotalByBusinessGroup"),
     		type: 'POST',
		    data : "searchParam="+encodeURIComponent(JSON.stringify($searchParams)),
     	})
     	.done(function(data) {
     		$tab.find('.T-tripTotalCount').text(data.tripCount);
     		$tab.find('.T-tripAdChildCount').text(data.adultCount+"大"+data.childCount+"小");
     		$tab.find('.T-sumAdultCount').text(data.getAdultCount+"大"+data.getChildCount+"小");
     		$tab.find('.T-transAdChilTotalCount').text(data.transAdultCount+"大"+data.transChildCount+"小");
     		$tab.find('.T-innerAdChilTotalCount').text(data.innerAdultCount+"大"+data.innerChildCount+"小");
     		$tab.find('.T-orderTotalCount').text(data.orderCount);
     	})
    }

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