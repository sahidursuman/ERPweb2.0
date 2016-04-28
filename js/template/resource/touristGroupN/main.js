/**
 * 计调操作--客户订单
 * 
 * by David Bear 2016-04-08
 */
define(function(require, exports) {
	var mainFrameTemplate = require('./view/mainFrame'),//主框架
		touristsOrderExports = require('./touristGroup'),//游客订单
        bookingOrder = require('./bookingOrder'),//代订订单
		customerOrder = {
            isFirstTouristsOrder : 0,
            isFirstBookingOrder : 0
        },
		tabKey = "customer_order",
        touristsOrder = touristsOrderExports.touristGroup;
        
	/**
	 * 初始化客户订单首页框架
	 * @param  {[type]} tabIndex [description]
	 * @return {[type]}          [description]
	 */
	customerOrder.initModule = function(tabIndex){
        customerOrder.isFirstTouristsOrder = 0;
        customerOrder.isFirstBookingOrder = 0;

		tabIndex = tabIndex || 0;
        if(Tools.addTab(tabKey, '订单中心', mainFrameTemplate())){
        	var $tab = $("#tab-" + tabKey + "-content");
        	if(tabIndex === 0){
        		$('a[href="#customerOrderTouristsOrder"]').trigger('click');
        		touristsOrder.listTouristGroup(0, false, $tab.find('#customerOrderTouristsOrder'));
                customerOrder.isFirstTouristsOrder = 1;
        	}else{
        		$('a[href="#customerOrderBookingOrder"]').trigger('click');
                bookingOrder.showListPage(0, false, $tab.find('#customerOrderBookingOrder'));
                customerOrder.isFirstBookingOrder = 1;
        	}
            customerOrder.init_event($tab);
        }
    };

    /**
     * 初始化事件
     * @param  {[type]} $tab [description]
     * @return {[type]}      [description]
     */
    customerOrder.init_event = function($tab){
        $tab.find('.tabable').on('shown.bs.tab', 'a[data-toggle="tab"]', function(e) {
            if($(e.target).attr('href') == "#customerOrderTouristsOrder" && customerOrder.isFirstTouristsOrder === 0){
                touristsOrder.listTouristGroup(0, false, $tab.find('#customerOrderTouristsOrder'));
                customerOrder.isFirstTouristsOrder = 1;
            }else if($(e.target).attr('href') == "#customerOrderBookingOrder" && customerOrder.isFirstBookingOrder === 0){
                bookingOrder.showListPage(0, false, $tab.find('#customerOrderBookingOrder'));
                customerOrder.isFirstBookingOrder = 1;
            }
        });
    };

    
    exports.init = customerOrder.initModule;
});