define(function(require, exports) {
    var menuKey = "financial_Other_accounts",
        listTemplate = require("./view/list"),
        AccountsCheckingTemplate = require("./view/AccountsChecking"),
        AccountsPaymentTemplate = require("./view/AccountsPayment"),
        lookDetailTemplate = require("./view/lookDetail"),
        viewhandleTemplate = require("./view/viewhandle"),
        ViewAmountPaidTemplate = require("./view/ViewAmountPaid"),
        viewOrderDetailTemplate = require("./view/viewOrderDetail"),
        checkTabId = menuKey + "-checking",
        tabId = "tab-" + menuKey + "-content",
        checkTabId = menuKey + "-checking",
        blanceTabId = menuKey + "-blance";

    var OtherAccounts = {

    };
    OtherAccounts.initModule = function() {
        var myDate = new Date(),
            thisyear = myDate.getFullYear(),
            thismonth = myDate.getMonth()+1,
            endAccountTime= moment(new Date(myDate)).format("YYYY-MM-DD"),//结束日期
            myDate =  new Date(thisyear+'-'+thismonth+'-01'),
            startAccountTime = moment(new Date(myDate)).format("YYYY-MM-DD");//开始日期
            OtherAccounts.listFinancialOtherAccounts(0,"",startAccountTime,endAccountTime);
            
    };

    OtherAccounts.listFinancialOtherAccounts = function(pageNo, name, startAccountTime, endAccountTime) {
        OtherAccounts.searchData = {
            pageNo : pageNo,
            name : name,
            startAccountTime : startAccountTime,
            endAccountTime : endAccountTime,
            sortType: 'auto'
        }
        $.ajax({
        	url:KingServices.build_url("account/arrangeOtherFinancial","listFinancialOther"),
            type:"POST",
            data:OtherAccounts.searchData,
        	success: function(data){
                console.log(data);
                var result = showDialog(data);
                if (result) {
                    data.startAccountTime = startAccountTime
                    data.endAccountTime = endAccountTime
                    var html = listTemplate(data);
                    Tools.addTab(menuKey, "其他账务", html);
                    OtherAccounts.initList();
                      // 对账     
                    
                    
                }
            }
        
      


        })
    },
    OtherAccounts.initList = function(){
        // 初始化jQuery 对象
    
        OtherAccounts.$tab = $('#' + tabId);
        OtherAccounts.$searchArea=OtherAccounts.$tab.find('.T-search-area');
        //搜索按钮事件
        OtherAccounts.$tab.find('.T-search').on('click', function(event) {
            event.preventDefault();
            OtherAccounts.listInsure(0);
        });
        // 搜索
         OtherAccounts.$tab.find('.T-search').click(function(event) {
            alert();
        });
        // 报表内的操作
        OtherAccounts.$tab.find('.T-other').on('click', '.T-option', function(event) {
            alert();
            event.preventDefault();
            var $that = $(this),
                id = $that.closest('tr').data('id'),
                yearList = OtherAccounts.$searchArea.find("select[name=year]").val(),
                monthList = OtherAccounts.$searchArea.find("select[name=month]").val();
                console.log(id);

            if ($that.hasClass('T-check')) {
                // 对账
                OtherAccounts.AccountsChecking();
            } else if ($that.hasClass('T-payment')) {
                // 结算
                OtherAccounts.AccountsPayment();
            }
        });
    };

        // 对账
        OtherAccounts.AccountsChecking = function() {
                var html = AccountsCheckingTemplate();
                Tools.addTab(checkTabId, "其他对账", html);
                var $checkTabId = $("#tab-" + checkTabId + "-content");
                // 查看已付金额明细
                $(".T-Accounts").find('.T-lookDetail').click(function(event) {
                    event.preventDefault();
                    /* Act on the event */
                    OtherAccounts.lookDetail();
                });

                //应付金额明细
                $(".T-Accounts").find('.T-viewhandle').click(function(event) {
                    event.preventDefault();
                    /* Act on the event */
                    OtherAccounts.viewhandle();
                });

                //时间控件
                var $container = $(".T-Accounts");
                $container.find("input[name=joinTime]").datepicker({
                    autoclose: true,
                    todayHighlight: true,
                    format: 'yyyy-mm-dd',
                    language: 'zh-CN'
                });
                //关闭页面事件
                $container.find(".T-closeTab").click(function() {
                    closeTab(checkTabId);
                });
                //给全选按钮绑定事件
                $container.find('.T-selectAll').click(function(event) {
                var checkboxList = $(".T-Accounts").find(".T-checkListNum tr input[type=checkbox]");
                if($(this).is(":checked")){
                    checkboxList.each(function(i){
                        $(this).prop("checked",true);
                    });
                } else{
                    checkboxList.each(function(i){
                        if(!$(this).prop("disabled")){
                            $(this).prop("checked",false);
                        }                                
                    });
                }
                });
            }
            //付款
        OtherAccounts.AccountsPayment = function() {
            var html = AccountsPaymentTemplate();
            Tools.addTab("-payment", "其他付款", html);

            //已付付金额明细
            $(".T-AccountsPayment").find('.T-ViewAmountPaid').click(function(event) {
                event.preventDefault();
                /* Act on the event */
                OtherAccounts.ViewAmountPaid();
            });
            //应付金额明细
            $(".T-AccountsPayment").find('.T-viewPaid').click(function(event) {
                event.preventDefault();
                /* Act on the event */
                OtherAccounts.viewOrderDetail();
            });
            //时间控件
            var $container = $(".T-AccountsPayment");
            $container.find("input[name=joinTime]").datepicker({
                autoclose: true,
                todayHighlight: true,
                format: 'yyyy-mm-dd',
                language: 'zh-CN'
            });
        }

        // // 查看已付金额a-1
        OtherAccounts.lookDetail = function() {
                var html = lookDetailTemplate();
                var lookDetailLayer = layer.open({
                    type: 1,
                    title: "已付金额明细",
                    skin: 'layui-layer-rim', //加上边框
                    area: '55%', //宽高
                    zIndex: 1028,
                    content: html,
                    scrollbar: false,

                });
            }
            //应付金额明细a-2
        OtherAccounts.viewhandle = function() {
                var html = viewhandleTemplate();
                var lookDetailLayer = layer.open({
                    type: 1,
                    title: "应付金额明细",
                    skin: 'layui-layer-rim', //加上边框
                    area: '55%', //宽高
                    zIndex: 1028,
                    content: html,
                    scrollbar: false,

                });
            }
            //已付金额明细b-1
        OtherAccounts.ViewAmountPaid = function() {
                var html = ViewAmountPaidTemplate();
                var lookDetailLayer = layer.open({
                    type: 1,
                    title: "已付金额明细",
                    skin: 'layui-layer-rim', //加上边框
                    area: '55%', //宽高
                    zIndex: 1028,
                    content: html,
                    scrollbar: false,

                });
            }
            //应付金额明细b-2
        OtherAccounts.viewOrderDetail = function() {
            var html = viewOrderDetailTemplate();
            var lookDetailLayer = layer.open({
                type: 1,
                title: "应付金额明细",
                skin: 'layui-layer-rim', //加上边框
                area: '55%', //宽高
                zIndex: 1028,
                content: html,
                scrollbar: false,
            });
        }



    




    exports.init = OtherAccounts.initModule;
})
