define(function(require, exports) {
	var menuKey = "financial_transferProfits",
        listMainTemplate = require("./view/listMain"),
        listTemplate = require("./view/list"),
        touristsTemplate = require("./view/viewTouristGroup"),
        costDetailTemplate = require("./view/viewCostDetail");

    var transfer = {
    	searchData : false,
        lineProductList : false,
        partnerAgencyList : false
	};

    transfer.initModule = function(isTurn) {
        var dateJson = FinancialService.getInitDate(),
            args = {
                pageNo : 0,
                startTime : dateJson.startDate,
                endTime : dateJson.endDate,
            };
        var data = {};
        data.searchParam = args;
        var html = listMainTemplate(data);
        Tools.addTab(menuKey,"中转利润",html);
        
        transfer.listMain(args);
    };

    transfer.listMain = function(args){
        $.ajax({
            url: KingServices.build_url('profitOutRemark', 'listProfitOutSelect'),
            type: 'POST',
            success: function(data) {
                var result = showDialog(data);
                if(result){
                    transfer.lineProductList = data.lineProducts;
                    transfer.partnerAgencyList = data.partnerAgencys;
                    for(var i = 0; i < transfer.lineProductList.length; i++){
                        transfer.lineProductList[i].value = transfer.lineProductList[i].name;
                    }
                    for(var i = 0; i < transfer.partnerAgencyList.length; i++){
                        transfer.partnerAgencyList[i].value = transfer.partnerAgencyList[i].travelAgencyName;
                    }

                    //搜索事件
                    transfer.$tab = $("#tab-" + menuKey + "-content");
                    transfer.listTransfer(0,args);
                    
                    Tools.setDatePicker(transfer.$tab.find(".date-picker"),true);
                    //监听搜索区修改
                    transfer.$tab.find(".T-search-area").off().on('change', 'input,select', function(event) {
                        event.preventDefault();
                        transfer.$tab.data('searchEdit', true);
                    });
                    transfer.$tab.find(".T-search").off().on('click', function(event) {
                        event.preventDefault();
                        transfer.listTransfer(0);
                    });
                }
            }
        });
    };

    transfer.listTransfer = function(page,args){
        args = transfer.getArgs(page,args);

        $.ajax({
            url:KingServices.build_url("profitOutRemark","findPager"),
            type: "POST",
            data: args,
            success: function(data) {
                var result = showDialog(data);
                if (result) {
                    var html = listTemplate(data);
                    html = Tools.filterCount(html);
                    html = Tools.filterMoney(html);
                    html = Tools.filterUnPoint(html);

                    $("#tab-" + menuKey + "-content").find(".T-transfer-list").html(html);
                    var $tab = $("#tab-" + menuKey + "-content");
                    $tab.find(".T-totalSize").text("共计 " + data.searchParam.totalCount + " 条记录");

                    if(!$tab.data('searchEdit') && $tab.data('total')){
                        transfer.loadSumData($tab);
                    } else {
                        transfer.getSumData($tab,args);
                    }
                    
                    transfer.getQuery($tab);

                    //报表内的操作
                    $tab.find(".T-transfer-list").off().on("click",".T-option",function(){
                        var $this = $(this),
                            $tr = $this.closest('tr'),
                            id = $tr.data("id"),
                            lid = $tr.data("lid");
                        if($this.hasClass('T-viewLineproduct')){
                            KingServices.viewLineProduct(lid);
                        } else if($this.hasClass('T-viewGroup')){
                            transfer.viewGroup(id);
                        } else if($this.hasClass('T-costDetail')){
                            transfer.viewCostDetail(id);
                        }
                    });

                    //绑定翻页组件
                    laypage({
                        cont: $tab.find('.T-pagenation'),
                        pages: data.searchParam.totalPage,
                        curr: (args.pageNo + 1),
                        jump: function(obj, first) {
                            if (!first) { 
                                transfer.listTransfer(obj.curr - 1);
                            }
                        }
                    });
                }
            }
        });
    };

    transfer.getArgs = function(page,args){
        var args = args || {};
        if(transfer.$tab){
            args = {
                pageNo : page || 0,
                lineProductName : transfer.$tab.find("input[name=lineProductName]").val(),
                lineProductId : transfer.$tab.find("input[name=lineProductId]").val(),
                fromPartnerAgencyName : transfer.$tab.find("input[name=fromPartnerAgencyName]").val(),
                fromPartnerAgencyId : transfer.$tab.find("input[name=fromPartnerAgencyId]").val(),
                customerType : transfer.$tab.find("select[name=customerType]").val(),
                orderNumber : transfer.$tab.find("input[name=orderNumber]").val(),
                startTime : transfer.$tab.find("input[name=startTime]").val(),
                endTime : transfer.$tab.find("input[name=endTime]").val(),
                billStatus : transfer.$tab.find(".T-status button").data("value")
            };
        }
        args.lineProductName = (args.lineProductName == "全部") ? "" : args.lineProductName;
        args.fromPartnerAgencyName = (args.fromPartnerAgencyName == "全部") ? "" : args.fromPartnerAgencyName;
        args.sortType = 'auto';

        if(transfer.$tab && transfer.$tab.data("searchEdit")){
            args.pageNo = 0;
            transfer.$tab.data("searchEdit",false);
            transfer.$tab.data("total",false);
        }
        return args;
    };

    //查看游客小组
    transfer.viewGroup = function(id){
        $.ajax({
            url: KingServices.build_url('financial/customerAccount', 'findTouristGroupDetail'),
            type: 'post',
            data: {touristGroupId: id},
        })
        .done(function(data) {
            if (showDialog(data)) {
                data.memberList = JSON.parse(data.memberList || false) || [];
                var html = touristsTemplate(data);
                var addGuide = layer.open({
                    type: 1,
                    title:"查看小组",
                    skin: 'layui-layer-rim', //加上边框
                    area: '850px', //宽高
                    zIndex:1028,
                    content: html,
                    scrollbar: false
                });
            }
        });
    };

    //查看中转明细
    transfer.viewCostDetail = function(id){
        $.ajax({
            url: KingServices.build_url('profitOutRemark', 'outRemarkFinancialDetail'),
            type: 'post',
            data: {id: id},
        })
        .done(function(data) {
            if (showDialog(data)) {
                data.financialNeedPays = JSON.parse(data.financialNeedPays);
                var html = costDetailTemplate(data);
                var addGuide = layer.open({
                    type: 1,
                    title:"中转成本明细",
                    skin: 'layui-layer-rim', //加上边框
                    area: '1050px', //宽高
                    zIndex:1028,
                    content: html,
                    scrollbar: false
                });
            }
        });
    };

    transfer.getSumData = function($tab,args){
        $.ajax({
            url: KingServices.build_url("profitOutRemark","findTotal"),
            type: 'POST',
            data: args,
        })
        .done(function(data) {
            if(showDialog(data)){
                $tab.data('total',data.total);
                transfer.loadSumData($tab);
            }
        });
    };

    transfer.loadSumData = function($tab,args){
        var total = $tab.data("total");
        $tab.find(".T-totalCount").text((total.adultCount ? total.adultCount : 0) + " 大" + (total.childCount ? total.childCount : 0) + " 小");
        $tab.find(".T-totalNeed").text(total.transitSMoney);
        $tab.find(".T-totalCost").text(total.transitPaySMoney);
        $tab.find(".T-totalProfit").text(total.grossProfit);
        $tab.find(".T-perProfit").text(total.perGrossProfit);
    };

    transfer.getQuery = function($tab){
        var $lineProduct = $tab.find("input[name=lineProductName]"),
            $partner = $tab.find("input[name=fromPartnerAgencyName]");

        //线路产品
        $lineProduct.autocomplete({
            minLength: 0,
            source : transfer.lineProductList,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name=lineProductId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name=lineProductId]').val(ui.item.id).trigger('change');
            }
        }).on("click",function(){
            $lineProduct.autocomplete('search', '');
        });  

        //来源
        $partner.autocomplete({
            minLength: 0,
            source : transfer.partnerAgencyList,
            change: function(event, ui) {
                if (!ui.item)  {
                    $(this).nextAll('input[name=fromPartnerAgencyId]').val('');
                }
            },
            select: function(event, ui) {
                $(this).blur().nextAll('input[name=fromPartnerAgencyId]').val(ui.item.id).trigger('change');
            }
        }).on("click",function(){
            $partner.autocomplete('search', '');
        });
    };

    exports.init = transfer.initModule;
});