/**
 * 财务管理--总利润表
 *
 * by 廖佳玲
 */
define(function(require, exports) {
    var menuKey = "financial_totalProfit",
    listTemplate = require("./view/list"),
    tableTemplate = require('./view/listTable'),
    tabId = "tab-"+menuKey+"-content";

    var TotalProfit = {
        searchData: false,
        $tab: false,
        $searchArea: false,
        headerData:{},
        changeStatus:false
    };

    TotalProfit.initModule = function() {
        var dateJson = FinancialService.getInitDate();
        TotalProfit.listTotalProfit(dateJson);
    };

    TotalProfit.listTotalProfit = function(searchData){
        if (Tools.addTab(menuKey,"总利润表",listTemplate(searchData))) {
            TotalProfit.initEvents();
        }
        
    };
    //处理事件
    TotalProfit.initEvents = function($obj,data){
        TotalProfit.$tab = $('#tab-'+ menuKey + '-content');
        TotalProfit.$searchArea = TotalProfit.$tab.find('.T-search-area');
        TotalProfit.getListData(0,data);

        //格式化时间控件
        Tools.setDatePicker(TotalProfit.$tab.find(".date-picker"),true);

        TotalProfit.getPartnerList(TotalProfit.$searchArea.find('input[name=fromPartnerAgencyName]'));

        //监听搜索区修改
        TotalProfit.$tab.find(".T-search-area").off().on('change', 'input,select', function(event) {
            event.preventDefault();
            TotalProfit.$tab.data('searchEdit', true);
        });
        //搜索按钮事件
        TotalProfit.$searchArea.find('.T-search').off().on('click', function(){
            TotalProfit.getListData(0);
        });

        //导出
        TotalProfit.$searchArea.find('.T-export').off().on('click', function(){
            TotalProfit.getListData(-1)
        })

        TotalProfit.getOPUserList(TotalProfit.$searchArea.find('[name="outOPUserName"]'));
        TotalProfit.getGroupMapList(TotalProfit.$searchArea.find('[name="groupName"]'));
        TotalProfit.getBusinessList(TotalProfit.$searchArea.find('[name="businessName"]'));
        TotalProfit.$searchArea.on('click', '.T-Choose-product', function(event) {
            event.preventDefault();
            /* Act on the event */
            KingServices.showLineProduct($(this));
        }).on('click', '.T-clear-line', function(event) {
            event.preventDefault();
            var $that = $(this),
                $div = $that.closest('div');
            if(!!$div.find('input[name=lineProduct]').val()){
                showConfirmDialog('是否清除?', function() {
                    $div.find('input[name=lineProduct]').val('');
                    $div.find('input[name=lineProductId]').val('');
                    $that.addClass('hidden');
                });
            };
        });
       
    };
    //获取列表数据
    TotalProfit.getListData = function(page, args){
        if (!!args) {
            args.pageNo = page || 0;
        } else if (TotalProfit.$searchArea) {
            args = {
                orderNumber: TotalProfit.$searchArea.find("input[name=orderNumber]").val(),
                startTime: TotalProfit.$searchArea.find("input[name=startTime]").val(),
                endTime: TotalProfit.$searchArea.find("input[name=endTime]").val(),
                fromPartnerAgencyId : TotalProfit.$searchArea.find("input[name=fromPartnerAgencyId]").val(),
                type: TotalProfit.$searchArea.find("select[name=type]").val(),
                outOPUserName: TotalProfit.$searchArea.find("input[name=outOPUserName]").val(),
                groupName: TotalProfit.$searchArea.find("input[name=groupName]").val(),
                groupId: TotalProfit.$searchArea.find("input[name=groupName]").data("id"),
                outOPUserId: TotalProfit.$searchArea.find("input[name=outOPUserName]").data("id"),
                businessGroupName: TotalProfit.$searchArea.find("input[name=businessName]").val(),
                businessGroupId: TotalProfit.$searchArea.find("input[name=businessName]").data("id"),
                lineProduct: TotalProfit.$searchArea.find("input[name=lineProduct]").val(),
                lineProductId: TotalProfit.$searchArea.find("input[name=lineProductId]").val(),
                pageNo: page || 0
            }
        }
        if (page == -1) {
            if (!args.startTime || !args.endTime) {
                showMessageDialog("请选择时间区间"); 
                return false;
            }
            exportXLS( APP_ROOT + 'back/export.do?method=exportTotalProfit&token='+ $.cookie("token") +'&'+ $.param(args));
            return;
        }

        if(TotalProfit.$tab && TotalProfit.$tab.data("searchEdit")){
            args.pageNo = 0;
            TotalProfit.$tab.data("searchEdit",false);
            TotalProfit.$tab.data("total",false);
        }

        $.ajax({
            url:KingServices.build_url("financialTotal","findPager"),
            data:args,
            type:'POST',
            success:function(data){
                if(showDialog(data)){
                    var html = tableTemplate(data);
                    html = Tools.filterCount(html);
                    html = Tools.filterMoney(html);
                    html = Tools.filterUnPoint(html);

                    TotalProfit.$tab.find('.T-list').html(html);

                    TotalProfit.$tab.find('.T-recordSize').html(Tools.getRecordSizeDesc(data.searchParam.totalCount));

                    // 获取统计数据
                    if(!TotalProfit.$tab.data("searchEdit") && TotalProfit.$tab.data("total")){
                        TotalProfit.loadSumData();
                    } else {
                        TotalProfit.getCountData(args);
                    }
                    
                    //点击线路产品事件
                    TotalProfit.$tab.find('.T-list').find('.T-transfer').off('click').on('click',function(){
                        var id = $(this).closest('tr').attr("lineProductId");
                        KingServices.viewLineProduct(id);
                    });
                    // 绑定翻页组件
                    laypage({
                        cont: TotalProfit.$tab.find('.T-pagenation'), 
                        pages: data.searchParam.totalPage, //总页数
                        curr: (data.searchParam.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) {  // 避免死循环，第一次进入，不调用页面方法
                                TotalProfit.getListData(obj.curr -1);
                            }
                        }
                    }); 
                }
            }
        });
    };
    //获取统计数据
    TotalProfit.getCountData = function(args){
        $.ajax({
            url:KingServices.build_url("financialTotal","findTotal"),
            data:args,
            type:'POST',
            success:function(data){
                if(showDialog(data)){
                    TotalProfit.$tab.data('total', data.total);
                    TotalProfit.loadSumData();
                } 
            }
        });
    };

    TotalProfit.loadSumData = function(){
        var total = TotalProfit.$tab.data("total");
        TotalProfit.$tab.find('.T-totalCount').text(total.sumAdultCount+'大'+total.sumChildCount+'小');
        TotalProfit.$tab.find('.income').text(total.income);
        TotalProfit.$tab.find('.cost').text(total.cost);
        TotalProfit.$tab.find('.profit').text(total.profit);
        TotalProfit.$tab.find('.T-avgProfit').text(total.preProfit);
    };

    TotalProfit.getPartnerList = function($obj){
        $obj.autocomplete({
            minLength: 0,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).val("");
                    $(this).nextAll('input[name=fromPartnerAgencyId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).trigger('change');
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

    /**
     * 绑定责任计调的选择
     * @param  {object} $target 绑定选择的Jquery对象
     * @return {[type]}         [description]
     */
    TotalProfit.getOPUserList = function($target){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.id).trigger('change');
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
    TotalProfit.getBusinessList = function($target){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.businessGroupId).trigger('change');
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
    TotalProfit.getGroupMapList = function($target){
        return $target.autocomplete({
            minLength:0,
            change:function(event,ui){
                if(ui.item == null){
                    $target.data("id", "");
                }
            },
            select:function(event,ui){
                var item = ui.item;
                $target.blur().data("id", item.groupId).trigger('change');
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

    exports.init = TotalProfit.initModule;
});
