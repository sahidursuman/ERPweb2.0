/**
 * 业务分析——购物统计模块
 *
 * 购物统计列表和详情显示
 */
define(function(require, exports) {
	var menuKey = "business_analyst_shopStat",
        listMainTemplate = require("./view/listMain"),
        listTemplate = require("./view/list"),
        viewConsumeMoneyTemplate = require("./view/viewConsumeMoney"),
        tabId="tab-"+menuKey+"-content";
    /**
	 * 定义购物统计对象
	 * @type {Object}
	 */
	var shopStat={
		$searchArea:false,
		$tab:false,
		autocompleteDate:{}
	};

	/**
	 * 购物统计页面初始化的方法
	 * @return {[type]} [description]
	 */
	shopStat.initModule=function(){
		shopStat.listMain_init();
	};

	/**
	 * 搜索域初始化
	 * @return {[type]} [description]
	 */
	shopStat.listMain_init = function() {
		Tools.addTab(menuKey, '购物统计', listMainTemplate());
		shopStat.$tab = $('#tab-business_analyst_shopStat-content');
		shopStat.$searchArea = shopStat.$tab.find('.T-search-shopStatArea');
		shopStat.datepicker(shopStat.$searchArea)
		shopStat.listShopStat(0);
		//获取客户、团号和购物店列表
   		shopStat.autocompleteDate(shopStat.$tab);
   		//加载打印插件
   		var pluginKey = 'plugin_print';
		Tools.loadPluginScript(pluginKey);
		
	}

	//购物统计页面list
	shopStat.listShopStat=function(page){
		if (shopStat.$searchArea && arguments.length===1) {
	   		//初始化页面后可以获取页面参数
	   		var searchData = {
	   			pageNo: page,
	   			customerType: shopStat.getValue(shopStat.$searchArea,'customerType'),
	   			startTime: shopStat.getValue(shopStat.$searchArea,'startTime'),
	   			endTime: shopStat.getValue(shopStat.$searchArea,'endTime'),
	   			fromPartnerAgencyName: shopStat.getValue(shopStat.$searchArea,'fromPartnerAgency'),
	   			fromPartnerAgencyId: shopStat.getValue(shopStat.$searchArea,'fromPartnerAgencyId'),
	   			shopName: shopStat.getValue(shopStat.$searchArea,'shop'),
	   			shopId: shopStat.getValue(shopStat.$searchArea,'shopId'),
	   			startTime: shopStat.getValue(shopStat.$searchArea,'startTime'),
	   			tripNumber: shopStat.getValue(shopStat.$searchArea,'tripNumber')
	   		}
		};
		if(searchData.startTime > searchData.endTime){
	        showMessageDialog($("#confirm-dialog-message"),"开始时间不能大于结束时间，请重新选择！");
	        return false;
	    }
	   	// 修正页码
	   	searchData.pageNo = page || 0;
	   	//购物统计列表请求Ajax
	 	$.ajax({
	 		url : KingServices.build_url("financial/shopAccount","shopStatistics"),
			type : "POST",
			data : searchData,
			success : function(data){
				var result = showDialog(data);
				if(result){
					data.totalShop = data.totalShop[0];
		       		var html = listTemplate(data);
		       		shopStat.$tab.find('.T-shopStatPager-list').html(html);
		       		//绑定页面事件
		       		shopStat.initEvent();
		       		//设置记录条数
					var recordSize = Tools.getRecordSizeDesc(data.searchParam.totalCount);
					shopStat.$tab.find('.recordSize').text(recordSize);
			       	// 绑定翻页组件
					laypage({
					    cont: shopStat.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.searchParam.totalPage, //总页数
					    curr: (page + 1),
					    jump: function(obj, first) {
					    	if (!first) {  // 避免死循环，第一次进入，不调用页面方法
					    		shopStat.listShopStat(obj.curr -1);
					    	}
					    }
					});
				}
			}
		});
	};

	/**
	 * 列表事件
	 */
	shopStat.initEvent = function(){

		//搜索事件 T-shopStat-outToexcel
		shopStat.$searchArea.off('click').on('click','.T-shopStat-search',function(){
			//搜索事件
			shopStat.listShopStat(0);
		}).on('click','.T-shopStat-export',function(){
			var $obj = shopStat.$tab;

			//打印事件
			$obj.print({
				globalStyles:true
			});
		}).on('click','.T-shopStat-outToexcel',function(){
			//导出事件
		});
		//列表事件
		var $listObj = shopStat.$tab.find('.T-shopStatPager-list');
		$listObj.off('click').on('click','.T-option',function(){

			var $that = $(this);

			if($that.hasClass('T-consumeMoney')){

				//查看总打单金额
				var shopArrangeId = $that.closest('tr').attr('shopArrangeId'),
					tripPlanId = $that.closest('tr').attr('tripPlanId');
				shopStat.viewConsumeMoney(tripPlanId,shopArrangeId);
			};
		});
	};

	/**
	 *展示点击总打单
	 */
	shopStat.viewConsumeMoney = function(tripPlanId,shopArrangeId){
		$.ajax({
			url:KingServices.build_url('financial/shopAccount','consumeMoney'),
			data:{
				tripPlanId:tripPlanId,
				shopArrangeId:shopArrangeId,
				
			},
			type:'POST',
			showLoading:false,
			success:function(data){
				var html = viewConsumeMoneyTemplate(data);
				layer.open({
                    type : 1,
                    title : "打单详情",
                    skin : 'layui-layer-rim',
                    area : '1000px',
                    zIndex : 1028,
                    content : html,
                    scrollbar: false 
                });
			}
		});
	};
	/**
	 * [autocompleteDate 获取客户、团号和购物店列表]
	 * @return {[type]} [description]
	 */
	shopStat.autocompleteDate = function(tab) {
		$.ajax({
			url: KingServices.build_url('financial/shopAccount','shopRequest'),
			type: 'POST'
		})
		.done(function(data) {
			if (showDialog(data)){
				var partnerAgency = tab.find('[name=fromPartnerAgency]'),
					shop = tab.find('[name=shop]');

				//购物店列表
				var shopList = data.shopList;
				for(var i = 0;i<shopList.length;i++){
					shopList[i].value = shopList[i].shopName;
				};
				//客户列表
				var customerList = data.fromPartnerAgencyList;
				for(var i = 0;i<customerList.length;i++){
					customerList[i].value = customerList[i].travelAgencyName;
					customerList[i].id = customerList[i].fromPartnerAgencyId;
				};

				shopStat.showList(shop,shopList);
				shopStat.showList(partnerAgency,customerList);
			}
		});
		
	}
	/**
	 * [下拉列表展示]
	 * @return {[type]} [description]
	 */
	shopStat.showList = function($obj,dataList){
		var name = $obj.attr('name');
		$obj.autocomplete({
			minLength:0,
			select:function(event,ui){
				if(ui.item != null){
					var divObj = $(this).closest('div');
					divObj.find('[name='+name+'Id]').val(ui.item.id);
				}
			},
			change:function(event,ui){
				if(ui.item == null){
					var divObj = $(this).closest('div');
					$(this).val('');
					divObj.find('[name='+name+'Id]').val('');
				};
			}

		}).off('click').on('click',function(){
			var obj = $(this);
			obj.autocomplete('option','source', dataList);
			obj.autocomplete('search', '');
		});
	};
	//时间控件初始化
	shopStat.datepicker = function($obj){
		$obj.find(".datepicker").datepicker({
			autoclose: true,
			todayHighlight: true,
			format: 'yyyy-mm-dd',
			language: 'zh-CN'
		})
	};
	//获取控件中的值
	shopStat.getValue = function($obj,name){
		var value = $obj.find("[name="+name+"]").val();
		return value;
	};

	exports.init = shopStat.initModule;
});