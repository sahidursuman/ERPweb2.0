/**
 * 导游业绩的查询&&列表的显示
 */
define(function(require, exports) {
	var menuKey="business_analyst_tourguidePerfor",
        listTemplate=require("./view/list"),
        guidePlaySingle=require("./view/guidePlaySingle"),
        tabId="tab-"+menuKey+"-content",
        tabKey=menuKey+"-guidePlaySingle",
        guideTab="tab-"+menuKey+"-guidePlaySingle-content";
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
		$guideTab:false,
		autocompleteDate:{}
	};

	/**
	 * 导游业绩面初始化的方法
	 * @return {[type]} [description]
	 */
	tourguidPerObj.initModule=function(){
		tourguidPerObj.listtourguidPer(0,"desc","person");
	};

	//导游业绩页面list
	tourguidPerObj.listtourguidPer=function(page,sortType,order,startTime,endTime,guideId,guideName){
	   if (tourguidPerObj.$searchArea && arguments.length===1) {
	   		//初始化页面后可以获取页面参数
	   		order=tourguidPerObj.$tab.find('[name=sortType]').val();
	   		sortType=tourguidPerObj.$tab.find('[name=orderBy]').val();
	   		startTime=tourguidPerObj.$tab.find('input[name=startTime]').val();
	   		endTime=tourguidPerObj.$tab.find('input[name=endTime]').val();
	   		guideId =tourguidPerObj.$tab.find('input[name=guidChooseId]').val();
	   		guideName =tourguidPerObj.$tab.find('input[name=guideName]').val();
	   };

	   // 修正页码
	   page = page || 0;

	   //导游业绩列表请求Ajax
	 	$.ajax({
	 		url : KingServices.build_url("Performance","sumListPerformance"),
			type : "POST",
			data : {
				startTime:startTime,
				endTime:endTime,
				guideId:guideId,
				guideName:guideName,
				sortType:sortType,
				order:order,
				pageNo: page
			},
			success : function(data){
				var result = showDialog(data);
				if(result){
				       var html=listTemplate(data);
	                   Tools.addTab(menuKey,"导游业绩",html);
	                   //初始化JQuery对象
				       tourguidPerObj.$tab=$("#" + tabId);//最大区域模块
				       tourguidPerObj.$searchArea=tourguidPerObj.$tab.find('.T-search-area');//搜索模块区域
				       //初始化页面控件
				       Tools.setDatePicker(tourguidPerObj.$tab.find('.datepicker'), true);
				       //初始化页面绑定事件
				       tourguidPerObj.init_event(startTime,endTime);
				       //autocomplete数据
				       tourguidPerObj.guideChooseList(tourguidPerObj.$tab);
			       	// 绑定翻页组件
					laypage({
					    cont: tourguidPerObj.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		tourguidPerObj.listtourguidPer(obj.curr -1,sortType,order,startTime,endTime,guideId,guideName);
					    	}
					    }
					});
				}
			}
		});

	//autocomplete
	$.ajax({
		    url : KingServices.build_url("Performance","getQueryTerms"),
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
    tourguidPerObj.init_event=function(startTime,endTime){
    	//搜索按钮绑定事件
    	tourguidPerObj.$tab.find('.T-tourguidPer-search').on('click', function(event) {
    		event.preventDefault();
    		/* Act on the event */
    		//导游业绩列表查询
    		tourguidPerObj.listtourguidPer(0);
    	});
    	//导游打单
    	tourguidPerObj.$tab.find('.T-tourCount').on('click', function(event) {
    		event.preventDefault();
    		var $that=$(this),$tr=$that.closest('tr'),guideId=$tr.attr('data-guideId');
    		/* Act on the event */
    		tourguidPerObj.guidePlayList(0,guideId,startTime,endTime);
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

	//导游打单
	tourguidPerObj.guidePlayList=function(page,guideId,startTime,endTime){
	   if (!!tourguidPerObj.$guideTab && arguments.length==1) {
	   	   var startTime=tourguidPerObj.getValue(tourguidPerObj.$guideTab,"startTime");
		   var endTime=tourguidPerObj.getValue(tourguidPerObj.$guideTab,"endTime");
           var guideId=tourguidPerObj.getValue(tourguidPerObj.$guideTab,"guideId");
	   }
	   var pageNo = page || 0;
       $.ajax({
	 		url : KingServices.build_url("Performance","findShops"),
			type : "POST",
			data : {
				guideId:guideId,
				startTime:startTime,
				endTime:endTime,
				pageNo: page
			},
			success : function(data){
				var result = showDialog(data);
				if(result){
					Tools.addTab(tabKey, "导游打单", guidePlaySingle(data));
					tourguidPerObj.$guideTab=$("#"+guideTab);
					tourguidPerObj.initGuidePlay_event(tourguidPerObj.$guideTab);

					// 绑定翻页组件
					laypage({
					    cont: tourguidPerObj.$guideTab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.searchParam.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		tourguidPerObj.guidePlayList(obj.curr -1,guideId,startTime,endTime);
					    	}
					    }
					});
				}
			}
		}); 
	}

    //导游打单事件
	tourguidPerObj.initGuidePlay_event=function($tab){
		Tools.setDatePicker($tab.find('.datepicker'), true);
		//tip
		Tools.descToolTip($tab.find('.T-ctrl-tip'),1);
		$tab.find('.T-guideSingle-search').off('click').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			tourguidPerObj.guidePlayList(0);
		});

		//总打单详情页
		$tab.find('.T-allMoney').off('click').on('click', function(event) {
			event.preventDefault();
			/* Act on the event */
			var $that=$(this),
				tripPlanId=$that.attr('data-tripPlanId'),
				shopArrangeId=$that.attr('data-arrangeId'),
				guideArrangeId = $that.attr('guideArrangeId');
			KingServices.viewConsumeMoney(tripPlanId,shopArrangeId,guideArrangeId);
		});;
	};
	//获取控件中的值
	tourguidPerObj.getValue = function($obj,name){
		var value = $obj.find("[name="+name+"]").val();
		return value;
	};

	exports.init = tourguidPerObj.initModule;

});