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
			autocompleteDate:{}
		};

		/**
		 * 客源分布面初始化的方法
		 * @return {[type]} [description]
		 */
		sourDstributionObj.initModule=function(){
			sourDstributionObj.listSourDstri("","","","");
		};

		//客源分布页面list
		sourDstributionObj.listSourDstri=function(startDate,endDate,lineProductId,lineProductName){
		   if (sourDstributionObj.$searchArea && arguments.length===1) {
		   		//初始化页面后可以获取页面参数
		   		startDate=sourDstributionObj.$searchArea.find('input[name=startDate]').val();
		   		endDate=sourDstributionObj.$searchArea.find('input[name=endDate]').val();
		   		lineProductId =sourDstributionObj.$searchArea.find('input[name=lineProductId]').val();
		   		lineProductName =sourDstributionObj.$searchArea.find('input[name=lineProductName]').val();
		   };


		   //客源分布列表查询
			$.ajax({
				url : KingServices.build_url("groupMemberDistribution","listGroupMemberDistribution"),
				type:"POST",
				data:{
					startDate:startDate,
					endDate:endDate,
					lineProductId:lineProductId,
					lineProductName:lineProductName,
					sortType: 'tourist'

				},
				success:function(data){
							
				   var html=listTemplate(data);
			       Tools.addTab(menuKey,"客源分布",html);

			       //缓存autocompalet数据
			       sourDstributionObj.autocompleteDate.lineProList=data.lineProductList;
			       //初始化JQuery对象
			       sourDstributionObj.$tab=$("#" + tabId);//最大区域模块
			       sourDstributionObj.$searchArea=sourDstributionObj.$tab.find('.T-search-area');//搜索模块区域

			       //初始化页面控件
			       sourDstributionObj.datepicker(sourDstributionObj.$tab);

			       //初始化页面绑定事件
			       sourDstributionObj.init_event();
				}
			});




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
	    		//客源分布统计查询
	    		sourDstributionObj.listSourDstri(0);
	    	
	    	});

	    	//下拉数据----线路产品
	    	sourDstributionObj.lineProChooseList(sourDstributionObj.$tab);
	    };

	//客源分布的Autocomplete
    sourDstributionObj.lineProChooseList=function($obj){
		var lineProChooseList = $obj.find(".T-sourDstri-linPro");
		lineProChooseList.autocomplete({
			minLength:0,
			change:function(event,ui){
				if(ui.item == null){
					$(this).parent().find("input[name=lineProductId]").val("");
				}
			},
			select:function(event,ui){
				$(this).blur();
				var obj = this;

				$(obj).parent().find("input[name=lineProductId]").val(ui.item.lineProductId).trigger('change');
			}
		}).click(function(){
			var obj = this;
			var listObj = sourDstributionObj.autocompleteDate.lineProList;
			if(listObj !=null && listObj.length>0){
				for(var i=0;i<listObj.length;i++){
					listObj[i].value = listObj[i].lineProductName;
				}
			}
			$(obj).autocomplete('option','source', listObj);
			$(obj).autocomplete('search', '');
		})
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


	exports.init = sourDstributionObj.initModule;

});