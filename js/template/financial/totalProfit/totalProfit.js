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

        //格式化时间控件
        Tools.setDatePicker(TotalProfit.$tab.find(".date-picker"),true);

        TotalProfit.getPartnerList(TotalProfit.$searchArea.find('input[name=fromPartnerAgencyName]'));

        //搜索按钮事件
        TotalProfit.$searchArea.find('.T-search').off().on('click', function(){
            var args = {
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
                businessGroupId: TotalProfit.$searchArea.find("input[name=businessName]").data("id")
            };
            //获取数据列表
            TotalProfit.getListData(0, args);
            // 获取统计数据
            TotalProfit.getCountData(args);
        }).trigger('click');

        TotalProfit.getOPUserList(TotalProfit.$searchArea.find('[name="outOPUserName"]'));
        TotalProfit.getGroupMapList(TotalProfit.$searchArea.find('[name="groupName"]'));
        TotalProfit.getBusinessList(TotalProfit.$searchArea.find('[name="businessName"]'));
       
    };
    //获取列表数据
    TotalProfit.getListData = function(page, args){
        if (!!args) {
            args.pageNo = page || 0;
        } else if (TotalProfit.$searchArea) {
            args = {
                startTime: TotalProfit.$searchArea.find("input[name=startTime]").val(),
                endTime: TotalProfit.$searchArea.find("input[name=endTime]").val(),
                fromPartnerAgencyId : TotalProfit.$searchArea.find("input[name=fromPartnerAgencyId]").val(),
                type: TotalProfit.$searchArea.find("select[name=type]").val(),
                outOPUserName: TotalProfit.$searchArea.find("input[name=outOPUserName]").val(),
                groupName: TotalProfit.$searchArea.find("input[name=groupName]").val(),
                businessGroupName: TotalProfit.$searchArea.find("input[name=businessName]").val(),
                pageNo: page || 0
            }
        }
        $.ajax({
            url:KingServices.build_url("financialTotal","findPager"),
            data:args,
            showLoading:false,
            type:'POST',
            success:function(data){
                if(showDialog(data)){
                    TotalProfit.$tab.find('.T-list').html(tableTemplate(data));

                    TotalProfit.$tab.find('.T-recordSize').html(Tools.getRecordSizeDesc(data.searchParam.totalCount));
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
            showLoading:false,
            type:'POST',
            success:function(data){
                if(showDialog(data)){
                    TotalProfit.$tab.find('.income').text(data.total.income);
                    TotalProfit.$tab.find('.cost').text(data.total.cost);
                    TotalProfit.$tab.find('.profit').text(data.total.profit);
                }
            }
        });
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

    exports.init = TotalProfit.initModule;
});
