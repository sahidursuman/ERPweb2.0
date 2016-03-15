/**
 * 业务分析——购物统计模块
 *
 * 购物统计列表和详情显示
 */
define(function(require, exports) {
	var menuKey = "business_analyst_shopStat",
        listMainTemplate = require("./view/listMain"),
        listTemplate = require("./view/list"),
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
	   			fromPartnerAgencyName: shopStat.getValue(shopStat.$searchArea,'fromPartnerAgencyName'),
	   			fromPartnerAgencyId: shopStat.getValue(shopStat.$searchArea,'fromPartnerAgencyId'),
	   			shopName: shopStat.getValue(shopStat.$searchArea,'shopName'),
	   			shopId: shopStat.getValue(shopStat.$searchArea,'shopId'),
	   			startTime: shopStat.getValue(shopStat.$searchArea,'startTime'),
	   			tripNumber: shopStat.getValue(shopStat.$searchArea,'tripNumber')
	   		}
		};
	   	// 修正页码
	   	page = page || 0;
	   	//购物统计列表请求Ajax
	 	$.ajax({
	 		url : KingServices.build_url("financial/shopAccount","shopStatistics"),
			type : "POST",
			data : searchData,
			success : function(data){
				var result = showDialog(data);
				if(result){
		       		var html = listTemplate(data);
		       		shopStat.$tab.find('.T-shopStatPager-list').html(html);
		       		//获取客户、团号和购物店列表
		       		shopStat.autocompleteDate(shopStat.$tab);

			       	// 绑定翻页组件
					laypage({
					    cont: shopStat.$tab.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
					    pages: data.searchParam.recordSize, //总页数
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
	}

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
				var $partnerAgencyObj = tab.find('[name=partnerAgency]'),
					$shopObj = tab.find('[name=shop]');
			}
		});
		
	}
	

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