/**
 * 财务统计--销售利润
 * by  Aragorn 2016-5-9
 * 
 */
define(function(require, exports) {
    var menuKey='financial_salesProfit',
        listMainTemp = require('./view/listMain'),
        tableTemp = require('./view/listTable'),
        salesProfit = {
            $tab:null
        }; 

    /**
     * 初始化模块
     */
    salesProfit.initModule = function() {
         var args= FinancialService.getInitDate() || {};
         Tools.addTab(menuKey,"销售利润",listMainTemp({searchParam : args}));
         salesProfit.$tab=$("#tab-"+menuKey+"-content");
         salesProfit._initMain_event(salesProfit.$tab);
        //初始化模板
        salesProfit._getListMain(0, args);

        //监听搜索区修改
        salesProfit.$tab.find('.T-search-area').on('change', 'input,select', function(event) {
            event.preventDefault();
            salesProfit.$tab.data("searchEdit",true);
        });

        salesProfit.getPartnerList(salesProfit.$tab.find('[name=partnerAgencyName]'));
        salesProfit.getBusinessList(salesProfit.$tab.find('[name=businessName]'));
        salesProfit.getGroupMapList(salesProfit.$tab.find('[name=groupName]'));
        salesProfit.getOPUserList(salesProfit.$tab.find('[name=outOPUserName]'));
    };

    salesProfit._getListMain=function(page, args){
        var args = salesProfit._getArgs(args,page);
        $.ajax({
            url:KingServices.build_url("saleProfit","findPager"),
            data:args,
            type:'POST',
        })
        .done(function(data) {
            if(showDialog(data)){
                var html = Tools.filterUnPoint(Tools.filterMoney(Tools.filterCount(tableTemp(data))));
                salesProfit.$tab.find('.T-salesProfit-list').html(html);
                salesProfit.$tab.find('.T-recordSize').html(Tools.getRecordSizeDesc(data.searchParam.totalCount));

                if(!salesProfit.$tab.data("searchEdit") && salesProfit.$tab.data("total")){
                    salesProfit._loadTotalData();
                } else {
                    salesProfit._getTotalData(args);
                }
                // 绑定翻页组件
                laypage({
                    cont: salesProfit.$tab.find('.T-pagenation'), 
                    pages: data.searchParam.totalPage, //总页数
                    curr: (data.searchParam.pageNo + 1),
                    jump: function(obj, first) {
                        if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                            salesProfit._getListMain(obj.curr -1);
                        }
                    }
                }); 
            }
        })
    };


    salesProfit._getArgs = function(args,page){
        var args = args ||　{};
        args.pageNo=page || 0;
        if (!!salesProfit.$tab) { //封装查询参数
            args = {
                pageNo: (page || 0),
                orderNumber: salesProfit.$tab.find('[name=orderNumber]').val(),
                partnerAgencyName: salesProfit.$tab.find('[name=partnerAgencyName]').val(),
                customerType: salesProfit.$tab.find('[name=customerType]').val(),
                outOPUserName: salesProfit.$tab.find('[name=outOPUserName]').val(),
                businessName: salesProfit.$tab.find('[name=businessName]').val(),
                groupName: salesProfit.$tab.find('[name=groupName]').val(),
                outOPUserName: salesProfit.$tab.find('[name=outOPUserName]').val(),
                startDate: salesProfit.$tab.find('[name=startTime]').val(),
                endDate: salesProfit.$tab.find('[name=endTime]').val()
            }
        }
        return args;
    }

    salesProfit._initMain_event=function($tab){

        //点击搜索
        $tab.find('.T-search-area').on('click', '.T-search', function(event) { 
            event.preventDefault();
            salesProfit.$tab.data("searchEdit",false);
            salesProfit.$tab.data("total",false);
            salesProfit._getListMain(0);
        });

        //点击线路产品事件
        $tab.find('.T-salesProfit-list').on('click', '.T-line', function(event) { 
            event.preventDefault();
            /* Act on the event */
            var $that=$(this),id=$that.closest('tr').attr('lineId');
            KingServices.viewLineProduct(id);

        });

        //格式化时间控件
        Tools.setDatePicker(salesProfit.$tab.find(".date-picker"),true);
    };

 
    //获取统计数据
    salesProfit._getTotalData = function(args){
        $.ajax({
            url:KingServices.build_url("saleProfit","findTotal"),
            data:args,
            type:'POST',
            success:function(data){
                if(showDialog(data)){
                    salesProfit.$tab.data("total",data.total);
                    salesProfit._loadTotalData();
                }
            }
        });
    };
    salesProfit._loadTotalData = function(){
        var total = salesProfit.$tab.data("total");
        salesProfit.$tab.find('.T-totalCount').text(total.sumAdultCount+'大'+ total.sumChildCount+'小');
        salesProfit.$tab.find('.T-totalNeed').text(total.sumIncome);
        salesProfit.$tab.find('.T-totalCost').text(total.sumCost);
        salesProfit.$tab.find('.T-totalProfit').text(total.sumProfit);
        salesProfit.$tab.find('.T-avgProfit').text(total.avgProfit);
    };

    //getPartnerList 获取客户的下拉数据
    salesProfit.getPartnerList = function($target){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.id);
            }
        }).one('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $.ajax({
                url: KingServices.build_url('partnerAgency', 'getPartnerAnencyList'),
                type: 'post',
            })
            .done(function(data) {
                if (showDialog(data)) {
                    if(showDialog(data)){
                        var partnerList = JSON.parse(data.partnerAgencyList);
                        for(var i = 0; i < partnerList.length; i++){
                            partnerList[i].value = partnerList[i].travelAgencyName;
                        }
                        $target.autocomplete('option', 'source', partnerList).data('ajax', true);
                        $target.autocomplete('search', '');
                    }
                }
            });
        })
        .on('click', function(event) {
            event.preventDefault();
            if ($target.data('ajax')) {
                $target.autocomplete('search', '');
            }
        })
    };


    /**
     * 绑定责任计调的选择
     * @param  {object} $target 绑定选择的Jquery对象
     * @return {[type]}         [description]
     */
    salesProfit.getOPUserList = function($target){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.id);
            }
        }).one('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $.ajax({
                url: KingServices.build_url('financialTotal', 'findTable'),
                type: 'post',
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var userList = data.opList || false;
                    if (!!userList) {
                        for (var i = 0, len = userList.length;i < len; i++) {
                            userList[i].value = userList[i].realName;
                        }

                        $target.autocomplete('option', 'source', userList).data('ajax', true);
                        $target.autocomplete('search', '');
                    }
                }
            });
        })
        .on('click', function(event) {
            event.preventDefault();
            if ($target.data('ajax')) {
                $target.autocomplete('search', '');
            }
        })
    };

    /**
     * 绑定部门的选择
     * @param  {object} $target jQuery对象
     * @param  {object} data    部门数据
     * @return {[type]}         [description]
     */
    salesProfit.getBusinessList = function($target){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.businessGroupId);
                $target.nextAll('[name=groupName]').val('').data('id','');
            }
        }).off('click').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $.ajax({
                url: KingServices.build_url("group", "selectBusinessGroup"),
                type: "POST",
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var listObj = data.businessGroupList;
                    if (listObj != null && listObj.length > 0) {
                        for (var i = 0; i < listObj.length; i++) {
                            listObj[i].value = listObj[i].businessGroupName;
                        }
                    } else {
                        layer.tips('没有内容', $target, {
                            tips: [1, '#3595CC'],
                            time: 2000
                        });
                    }
                    $target.autocomplete('option', 'source', listObj);
                    $target.autocomplete('search', '');
                }
            })
        })
    };

    /**
     * 绑定子部门的选择
     * @param  {object} $target jQuery对象
     * @param  {object} data    部门数据
     * @return {[type]}         [description]
     */
    salesProfit.getGroupMapList = function($target){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.groupId);
            }
        }).off('click').on('click', function(event) {
            event.preventDefault();
            /* Act on the event */
            $.ajax({
                url: KingServices.build_url("group", "selectGroup"),
                type: "POST",
                data: "businessGroupId=" + $target.closest('div').find('[name=businessName]').data('id'),
            })
            .done(function(data) {
                if (showDialog(data)) {
                    var listObj = data.groupMapList;
                    if (listObj != null && listObj.length > 0) {
                        for (var i = 0; i < listObj.length; i++) {
                            listObj[i].value = listObj[i].groupName;
                        }
                    } else {
                        layer.tips('没有内容', $target, {
                            tips: [1, '#3595CC'],
                            time: 2000
                        });
                    }
                    $target.autocomplete('option', 'source', listObj);
                    $target.autocomplete('search', '');
                }
            })
        })
    };
    exports.init = salesProfit.initModule;
})