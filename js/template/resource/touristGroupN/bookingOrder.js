/**
 * 计调操作--代订订单
 * 
 * by David Bear 2016-04-12
 */
define(function(require, exports) {
    //key
    var K = {
            menu : "resource_bookingOrder",
            update : "resource_bookingOrder_update",
            add : "resource_bookingOrder_add",
            view : "resource_bookingOrder_view",
        },
        //模板文件
        T = {
            list : require('./view/booking/list'),//列表页
            // listTable : require('./view/tourists/listTable'),//列表页表格
            // listCount : require('./view/tourists/listCount'),//列表页合计
        },
        bookingOrder = {
        };
        bookingOrder.showListPage = function(){
            console.log(1);
        };
        bookingOrder.getList = function(){

        };
    return bookingOrder;
});