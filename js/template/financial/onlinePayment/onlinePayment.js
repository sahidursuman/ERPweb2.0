/**
 * 财务管理--在线支付
 *
 * by 廖佳玲
 */
define(function(require, exports) {
    var menuKey = "financial_onlinePayment",
    listTemplate = require("./view/list");

    var Payment = {
        searchData: false,
        $tab: false,
        $searchArea: false
    };

    Payment.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        var args = {
            businessType : "",
            resourceName : "",
            partnerAgencyId : "",
            startTime : dateJson.startDate,
            endTime : dateJson.endDate,
            status : "",
            sortType : "auto"
        };
        Payment.listPayment(0,args);
    };

    Payment.listPayment = function(pageNo,args){
        if(!!Payment.$searchArea && arguments.length === 1){
            args = {
                pageNo : pageNo,
                businessType : Payment.$searchArea.find('select[name=businessType]').val(),
                resourceName : Payment.$searchArea.find('input[name=resourceName]').val(),
                partnerAgencyId : Payment.$searchArea.find('input[name=partnerAgencyId]').val(),
                startTime : Payment.$searchArea.find('input[name=startTime]').val(),
                endTime : Payment.$searchArea.find('input[name=endTime]').val(),
                status : Payment.$searchArea.find('.T-status button').data("value"),
                sortType : "auto"
            }
        }
        $.ajax({
            url: KingServices.build_url("onlinePay/payOrder","listPayOrder"),
            type: 'POST',
            data: args,
        })
        .done(function(data) {
            data.searchParam = args;
            if (Tools.addTab(menuKey,"在线支付",listTemplate(data))) {
                Payment.$tab = $('#tab-'+ menuKey + '-content');
                Payment.$searchArea = Payment.$tab.find('.T-search-area');
                Payment.initEvents();
            }

            // 绑定翻页组件
            laypage({
                cont: Payment.$tab.find('.T-pagenation'), 
                pages: data.totalPage, //总页数
                curr: (pageNo + 1),
                jump: function(obj, first) {
                    if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                        Payment.listPayment(obj.curr -1);
                    }
                }
            }); 
        });
        
        
    };
    //处理事件
    Payment.initEvents = function(){
        Tools.setDatePicker(Payment.$tab.find(".date-picker"),true);
        // Payment.getPartnerList();
        
        //搜索栏状态button下拉事件
        Payment.$tab.find('.T-status').on('click', 'a', function(event) {
            event.preventDefault();
            var $this = $(this);
            $this.closest('ul').prev().data('value', $this.data('value')).children('span').text($this.text());

            Payment.listPayment(0);
        });
        //搜索按钮事件
        Payment.$searchArea.find('.T-search').off().on('click', function(){
            Payment.listPayment(0);
        });

        //列表点击事件
        Payment.$tab.find(".T-list").off().on("click",".T-option",function(){
            var $this = $(this),
                orderId = $this.closest('tr').data("id");
            if($this.hasClass('T-paymentdetail')){
                KingServices.paymentDetail(orderId);
            } else if($this.hasClass('T-payment')){
                var args = {
                    orderId : orderId,
                    type : 2
                };
                KingServices.payment(args,function(){
                    Payment.listPayment(0);
                });
            } else if($this.hasClass('T-cancel-payment')){
                Payment.cancelPayOrder(orderId);
            }
        });
    };

    //取消订单
    Payment.cancelPayOrder = function(orderId){
        $.ajax({
            url: KingServices.build_url("onlinePay/payOrder","cancelPayOrder"),
            type: 'POST',
            data: {orderId: orderId},
        })
        .done(function(data) {
            showMessageDialog($("#confirm-dialog-message"),data.message,function(){
                Payment.listPayment(0);
            });
        });
        
    };

    Payment.getPartnerList = function($obj){
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).val("");
                    $(this).nextAll('input[name=fromPartnerAgencyId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name=fromPartnerAgencyId]').val(ui.item.id);
            }
        }).one("click",function(){
            $.ajax({
                url:KingServices.build_url("partnerAgency","getPartnerAnencyList"),
                data:"",
                showLoading:false,
                type:'POST',
                success:function(data){
                    if(showDialog(data)){
                        var partnerList = JSON.parse(data.partnerAgencyList);
                        for(var i = 0; i < partnerList.length; i++){
                            partnerList[i].value = partnerList[i].travelAgencyName;
                        }

                        $obj.autocomplete('option', 'source', partnerList).data('ajax', true);
                        $obj.autocomplete('search', '');
                    }
                }
            });
        }).on("click",function(){
            if ($obj.data('ajax')) {
                $obj.autocomplete('search', '');
            }
        });
    };

    exports.init = Payment.initModule;
});