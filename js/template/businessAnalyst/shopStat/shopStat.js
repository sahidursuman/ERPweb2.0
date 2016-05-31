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
        viewLineProductTemplate = require('./view/viewLineProduct'),
        viewLineProductListTemplate = require('./view/viewLineProductList'),
        tabId="tab-"+menuKey+"-content";
    /**
	 * 定义购物统计对象
	 * @type {Object}
	 */
	var shopStat={
		$searchArea:false,
		$tab:false,
		autocompleteDate:{},
		totalData : false
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
		Tools.addTab(menuKey, '购物统计', listMainTemplate(FinancialService.getInitDate()));
		shopStat.$tab = $('#tab-business_analyst_shopStat-content');
		shopStat.$searchArea = shopStat.$tab.find('.T-search-shopStatArea');
		//shopStat.datepicker(shopStat.$searchArea)
		Tools.setDatePicker(shopStat.$searchArea.find('.T-tripTime .datepicker'), true)
		Tools.setDatePicker(shopStat.$searchArea.find('.T-shopTime .datepicker'), true)
		shopStat.listShopStat(0);
		//获取客户、团号和购物店列表
   		shopStat.autocompleteDate(shopStat.$tab);
   		//加载打印插件
   		var printPluginKey = 'plugin_print';
		Tools.loadPluginScript(printPluginKey);
		//加载导出插件
		var exportPluginKey = 'plugin_export';
		Tools.loadPluginScript(exportPluginKey);
		
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
	   			tripNumber: shopStat.getValue(shopStat.$searchArea,'tripNumber'),
	   			shopItem: shopStat.getValue(shopStat.$searchArea,'shopItem'),
	   			startShopTime: shopStat.getValue(shopStat.$searchArea,'startShopTime'),
	   			endShopTime: shopStat.getValue(shopStat.$searchArea,'endShopTime'),
	   			isShopping: shopStat.getValue(shopStat.$searchArea,'isShopping'),
	   			lineProductId: shopStat.getValue(shopStat.$searchArea,'lineProductId'),
	   		}
		};
	   	// 修正页码
	   	searchData.pageNo = page || 0;
	   	//select修改查询
	   	shopStat.$searchArea.find('[name=isShopping],[name=customerType]').off('change').on('change', function() {
	   		shopStat.listShopStat(0);
	   	})
	   	//购物统计列表请求Ajax
	 	$.ajax({
	 		url : KingServices.build_url("financial/shopAccount","shopStatistics"),
			type : "POST",
			data : searchData,
			success : function(data){
				var result = showDialog(data);
				if(result){
		       		var html = listTemplate(data);
		       		shopStat.$tab.find('.T-shopStatPager-list').html(Tools.filterMoney(html));
		       		//翻页不请求合计数据
		       		if(searchData.pageNo > 0){
		       			shopStat.loadSumHtml(shopStat.$tab);
		       		} else{
		       			shopStat.getSumData(shopStat.$tab,searchData);
		       		}
		       		
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
	 * 获取合计数据
	 */
	shopStat.getSumData = function($tab,args){
		$.ajax({
			url: KingServices.build_url("financial/shopAccount","shopStatisticsTotal"),
			type: 'POST',
			data: args,
		})
		.done(function(data) {
			if(showDialog(data)){
				shopStat.totalData = data.totalShop[0];
				shopStat.loadSumHtml($tab);
			}
		});
	};

	shopStat.loadSumHtml = function($tab){
		if(!!shopStat.totalData){
			var total = shopStat.totalData,
				$totalTab = $tab.find('.T-totalAccount');
			$totalTab.find('.T-person').text(total.touristAdultCount+'大'+total.touristChildCount+'小');
			$totalTab.find('.T-consumeMoney').text(total.consumeMoney);
			$totalTab.find('.T-avgConsumeMoney').text(total.avgConsumeMoney);
			$totalTab.find('.T-guideRebateMoney').text(total.guideRebateMoney);
			$totalTab.find('.T-travelAgencyRebateMoney').text(total.travelAgencyRebateMoney);
			$totalTab.find('.T-sumRebateMoney').text(total.sumRebateMoney);
			$totalTab.find('.T-avgRebateMoney').text(total.avgRebateMoney);
			$totalTab.find('.T-tripCount').text(parseInt(shopStat.$tab.find('.recordSize').text().replace(/[^0-9]/ig,"")));
		}
		
	};

	/**
	 * 列表事件
	 */
	shopStat.initEvent = function(){

		//搜索事件 T-shopStat-outToexcel
		shopStat.$searchArea.off('click').on('click','.T-shopStat-search',function(){
			//搜索事件
			shopStat.totalData = false;
			shopStat.listShopStat(0);
		}).on('click','.T-shopStat-export',function(){
			var $obj = shopStat.$tab;

			//打印事件
			$obj.print({
				globalStyles:true
			});
		}).on('click','.T-shopStat-outToexcel',function(){
			//导出事件
			shopStat.$tab.find('.T-showHighLight').table2excel({
				name:'购物统计表',
				filename:'购物统计',
				exclude_links:false
			});
		}).on('click','.T-Choose-product',function(){
			//获取线路列表
			shopStat.showLineProduct($(this));
		}).on('click','.T-clear-line',function(){
			var $div = $(this).closest('div');
			if(!!$div.find('input[name=lineProduct]').val()){
				showConfirmDialog('是否清除?', function() {
	                $div.find('input[name=lineProduct]').val('');
	                $div.find('input[name=lineProductId]').val('');
	            });
			};
			
		});
		//列表事件
		var $listObj = shopStat.$tab.find('.T-shopStatPager-list');
		$listObj.off('click').on('click','.T-option',function(){

			var $that = $(this);

			if($that.hasClass('T-consumeMoney')){

				//查看总打单金额
				var shopArrangeId = $that.closest('tr').attr('shopArrangeId'),
					tripPlanId = $that.closest('tr').attr('tripPlanId');
				shopStat.viewConsumeMoney(tripPlanId,shopArrangeId,-1);
			};
		});

		//商品事件
		var $showLIt = shopStat.$tab.find(".T-Choose-goods");
			$showLIt.off('click').on('click',function(){
				shopStat.showItem($(this));
			})
		};
		/**
		 * 选择线路
		 */
		shopStat.showLineProduct = function($obj){
			layer.open({
	            type: 1,
	            title: "选择线路产品",
	            skin: 'layui-layer-rim', //加上边框
	            area: '80%', //宽高
	            zIndex: 1028,
	            content: viewLineProductTemplate(),
	            scrollbar: false,
	            success:function(obj, index){
	                var $layer = $(obj);
	                shopStat.getLineProduct(0,$layer);
	                $layer.find('.T-btn-search').on('click', function(){
	                    shopStat.getLineProduct({
	                        pageNo : 0,
	                        name : $layer.find('[name="lineProductName"]').val()
	                    }, $layer);
	                });
	                $layer.find('.T-btn-save').on('click', function(){
	                    var $lineRadio = $layer.find(".T-line-product-list").find('[name="chooseLineProduct"]:checked'),
	                        $tr = $lineRadio.closest('tr');
	                    if($lineRadio.length === 0){
	                        showMessageDialog('请选择一条线路产品！');
	                        return false;
	                    }
	                    var lineData = {
	                        id : $tr.data('id'),
	                        lineProductName : $tr.find('[name="lineProductName"]').text(),
	                    };
	                    $obj.closest('div').find('input[name=lineProductId]').val(lineData.id);
	                    $obj.closest('div').find('input[name=lineProduct]').val(lineData.lineProductName);
	                    layer.close(index);
	                });
	                //关闭
	                $layer.find('.T-btn-close').on('click', function(){
	                    layer.close(index);
	                });
	                
	            }
	        });
		}
		/**
		 * 获取线路列表
		 * @param  {[type]} $obj [当前搜索框]
		 * @return {[type]}      [description]
		 */
		shopStat.getLineProduct = function(args,$obj){
			if(typeof args === "number"){
	            var page = args;
	            args = {};
	            args.pageNo = page;
	        }
			$.ajax({
				url:KingServices.build_url('lineProduct','findAll'),
				type:'POST',
				data:args
			}).done(function(data){
				if(showDialog(data)){
					data.lineProductList = JSON.parse(data.lineProductList);
					$obj.find('.T-line-product-list').html(viewLineProductListTemplate(data));

					$obj.find('.T-record-size').text(data.recordSize);

					// 绑定翻页组件
	                laypage({
	                    cont: $obj.find('.T-pagenation'), //容器。值支持id名、原生dom对象，jquery对象,
	                    pages: data.totalPage, //总页数
	                    curr: (data.pageNo + 1),
	                    jump: function(obj, first) {
	                        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
	                            args.pageNo = (obj.curr - 1);
	                            shopStat.getLineProduct(args,$obj);
	                        }
	                    }
	                });
                 	$(document).trigger('resize');
				}
			});
		};
		shopStat.showItem = function($obj){
			var shopId = shopStat.$searchArea.find('input[name=shopId]').val();
			if (!!shopId) {
				$.ajax({
					url: KingServices.build_url('shop','findPolicyByShopId'),
					type: 'POST',
					data:{id:shopId},
					showLoading:false,
					success:function(data){
						 //商品列表
						var shopItemList = JSON.parse(data.shopPolicyList);
						for(var i = 0;i<shopItemList.length;i++){
							shopItemList[i].value = shopItemList[i].name;
						};
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
						})
						$obj.autocomplete('option','source', shopItemList);
						$obj.autocomplete('search', '');
					}
				});
			}else{
 				layer.tips('请选择购物店', $obj, {
 				    tips: [1, '#3595CC'],
 				    time: 2000
 				});
			}
		};

	/**
	 *展示点击总打单
	 */
	shopStat.viewConsumeMoney = function(tripPlanId,shopArrangeId,guideArrangeId){
		$.ajax({
			url:KingServices.build_url('financial/shopAccount','consumeMoney'),
			data:{
				tripPlanId:tripPlanId,
				shopArrangeId:shopArrangeId,
				guideArrangeId:guideArrangeId,
			},
			type:'POST',
			showLoading:false,
			success:function(data){
				var sumPlayList = data.sumPlayList;
				var newSumPlayList = [];
				//删除停车返佣和人数返佣的数据
				for(var i = 0;i<sumPlayList.length;i++){
					if(sumPlayList[i].name != '停车返佣' && sumPlayList[i].name != '人数返佣'){
						newSumPlayList.push(sumPlayList[i]);
					}
				};
				data.sumPlayList = newSumPlayList;
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
	exports.viewConsumeMoney = shopStat.viewConsumeMoney;
	exports.showLineProduct= shopStat.showLineProduct ;
});