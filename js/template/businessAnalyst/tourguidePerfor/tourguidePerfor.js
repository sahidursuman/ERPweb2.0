/**
 * 导游业绩的查询&&列表的显示
 */
define(function(require, exports) {
	var menuKey = "business_analyst_tourguidePerfor",
        listTemplate = require("./view/list"),
        tabId="tab-"+menuKey+"-content";
    /**
	 * 定义导游业绩管理对象
	 * @type {Object}
	 */
	var tourguidPerObj={
		$searchParam:{
			startTime:"",
			endTime:"",
			guideId:"",
			guideName:"",
			pageNo:0
		},
		$searchArea:false,
		$tab:false,
		autocompleteDate:{}
	};

	/**
	 * 导游业绩面初始化的方法
	 * @return {[type]} [description]
	 */
	tourguidPerObj.initModule=function(){
		tourguidPerObj.listtourguidPer(0,"","","");
	};

	//导游业绩页面list
	tourguidPerObj.listtourguidPer=function(page,startTime,endTime,guideId,guideName){
	   if (tourguidPerObj.$searchArea && arguments.length===1) {
	   		//初始化页面后可以获取页面参数
	   		startTime=tourguidPerObj.$tab.find('input[name=startTime]').val();
	   		endTime=tourguidPerObj.$tab.find('input[name=endTime]').val();
	   		guideId =tourguidPerObj.$tab.find('input[name=guidChooseId]').val();
	   		guideName =tourguidPerObj.$tab.find('input[name=guideName]').val();

	   };

	   // 修正页码
	   page = page || 0;

	   //导游业绩列表请求Ajax
	 	$.ajax({
			url : tourguidPerObj.url("sumListPerformance","view"),
			type : "POST",
			data : {
				startTime:startTime,
				endTime:endTime,
				guideId:guideId,
				guideName:guideName,
				pageNo: page
			},
			success : function(data){
				var result = showDialog(data);
				if(result){
				       var html=listTemplate(data);
	                   addTab(menuKey,"导游业绩",html);
	                   //初始化JQuery对象
				       tourguidPerObj.$tab=$("#" + tabId);//最大区域模块
				       tourguidPerObj.$searchArea=tourguidPerObj.$tab.find('.T-search-area');//搜索模块区域
				       //初始化页面控件
				       tourguidPerObj.datepicker(tourguidPerObj.$tab);
				       //初始化页面绑定事件
				       tourguidPerObj.init_event();


				       //autocomplete数据
				       tourguidPerObj.guideChooseList(tourguidPerObj.$tab);

				       console.info("================"+data.totalPage);


			       	// 绑定翻页组件
					laypage({
					    cont: tourguidPerObj.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pageNo: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		tourguidPerObj.listtourguidPer(obj.curr -1);
					    	}
					    }
					});
				}
			}
		});

	//autocomplete
	$.ajax({
			url: tourguidPerObj.url("getQueryTerms","view"),
			type: "POST",
			success:function(data){
				var result = showDialog(data);
				if(result){
					tourguidPerObj.autocompleteDate.guideList=data.guideList;
				}
			}
		});
	};

    //初始化页面绑定事件
    tourguidPerObj.init_event=function(){
    	//搜索按钮绑定事件
    	tourguidPerObj.$tab.find('.T-tourguidPer-search').on('click', function(event) {
    		event.preventDefault();
    		/* Act on the event */
    		//导游业绩列表查询
    		tourguidPerObj.listtourguidPer(0);
    	});
    };

	//导游业绩的Autocomplete
    tourguidPerObj.guideChooseList=function($obj){
		var guideChooseList = $obj.find(".T-Choose-tourgSet");
		guideChooseList.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).parent().parent().find("input[name=guidChooseId]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;
				$(obj).parent().parent().find("input[name=guidChooseId]").val(ui.item.id).trigger('change');
			}
		}).click(function(){
			var obj = this;
			var listObj = tourguidPerObj.autocompleteDate.guideList;
			if(listObj !=null && listObj.length>0){
				for(var i=0;i<listObj.length;i++){
					listObj[i].value = listObj[i].realname;
				}
			}
			$(obj).autocomplete('option','source', listObj);
			$(obj).autocomplete('search', '');
		})
	};

 


	//时间控件初始化
	tourguidPerObj.datepicker = function($obj){
		$obj.find(".datepicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
	};
	//获取控件中的值
	tourguidPerObj.getValue = function($obj,name){
		var value = $obj.find("[name="+name+"]").val();
		return value;
	};
	//ajax中的url
	tourguidPerObj.url = function(method,operation){
		var url = ''+APP_ROOT+' back/Performance.do?method='+method+'&token='+$.cookie('token')+'&menuKey='+menuKey+'&operation='+operation+'';
		return url;
	}

	exports.init = tourguidPerObj.initModule;

});