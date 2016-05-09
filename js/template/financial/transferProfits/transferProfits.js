define(function(require, exports) {
	var menuKey = "financial_transferProfits",
        listMainTemplate = require("./view/listMain"),
        listTemplate = require("./view/list"),
        touristsTemplate = require("./view/viewTouristGroup"),
        costDetailTemplate = require("./view/viewCostDetail");

    var transfer = {
    	searchData : false,
        $searchArea: false,
        lineProductList : false,
        partnerAgencyList : false
	};

    transfer.initModule = function(isTurn) {
        var dateJson = FinancialService.getInitDate();
        transfer.searchData = {
            pageNo : 0,
            startTime : dateJson.startDate,
            endTime : dateJson.endDate,
        };
        var data = {};
        data.searchParam = transfer.searchData;
        var html = listMainTemplate(data);
        Tools.addTab(menuKey,"中转利润",html);
        
        transfer.listMain("","","","","","",dateJson.startDate,dateJson.endDate);
    };

    transfer.listMain = function(lineProductName,lineProductId,fromPartnerAgencyName,fromPartnerAgencyId,customerType,orderNumber,startTime,endTime){
        transfer.searchData = {
            pageNo : 0,
            lineProductName : lineProductName,
            lineProductId : lineProductId,
            fromPartnerAgencyName : fromPartnerAgencyName,
            fromPartnerAgencyId : fromPartnerAgencyId,
            customerType : customerType,
            orderNumber : orderNumber,
            startTime : startTime,
            endTime : endTime,
            sortType: 'auto'
        };
        var searchParam = JSON.stringify(transfer.searchData);

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
                    var  $tab = $("#tab-" + menuKey + "-content");
                    transfer.$searchArea = $tab.find('.T-search-area');
                    transfer.listTransfer(0);
                    
                    Tools.setDatePicker($tab.find(".date-picker"),true);
                    $tab.find(".T-search").off().on('click', function(event) {
                        event.preventDefault();
                        transfer.listTransfer(0);
                    });
                }
            }
        });
    };

    transfer.listTransfer = function(pageNo,lineProductName,lineProductId,fromPartnerAgencyName,fromPartnerAgencyId,customerType,orderNumber,startTime,endTime){
        if (transfer.$searchArea && arguments.length === 1) {
            // 初始化页面后，可以获取页面的参数
            lineProductName = transfer.$searchArea.find("input[name=lineProductName]").val(),
            lineProductId = transfer.$searchArea.find("input[name=lineProductId]").val(),
            fromPartnerAgencyName = transfer.$searchArea.find("input[name=fromPartnerAgencyName]").val(),
            fromPartnerAgencyId = transfer.$searchArea.find("input[name=fromPartnerAgencyId]").val(),
            customerType = transfer.$searchArea.find("select[name=customerType]").val(),
            orderNumber = transfer.$searchArea.find("input[name=orderNumber]").val(),
            startTime = transfer.$searchArea.find("input[name=startTime]").val(),
            endTime = transfer.$searchArea.find("input[name=endTime]").val(),
            billStatus = transfer.$searchArea.find(".T-status button").data("value")
        }
        if(startTime > endTime){
            showMessageDialog("开始时间不能大于结束时间，请重新选择！");
            return false;
        }
        lineProductName = (lineProductName == "全部") ? "" : lineProductName;
        fromPartnerAgencyName = (fromPartnerAgencyName == "全部") ? "" : fromPartnerAgencyName;

        // 修正页码
        pageNo = pageNo || 0;
        transfer.searchData = {
            pageNo : pageNo,
            lineProductName : lineProductName,
            lineProductId : lineProductId,
            fromPartnerAgencyName : fromPartnerAgencyName,
            fromPartnerAgencyId : fromPartnerAgencyId,
            customerType : customerType,
            orderNumber : orderNumber,
            startTime : startTime,
            endTime : endTime,
            sortType: 'auto'
        };

        $.ajax({
            url:KingServices.build_url("profitOutRemark","findPager"),
            type: "POST",
            data: transfer.searchData,
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

                    transfer.getSumData($tab,transfer.searchData);
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
                        curr: (pageNo + 1),
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
                $tab.find(".T-totalCount").text((data.total.adultCount ? data.total.adultCount : 0) + " 大" + (data.total.childCount ? data.total.childCount : 0) + " 小");
                $tab.find(".T-totalNeed").text(data.total.transitSMoney);
                $tab.find(".T-totalCost").text(data.total.transitPaySMoney);
                $tab.find(".T-totalProfit").text(data.total.grossProfit);
                $tab.find(".T-perProfit").text(data.total.perGrossProfit);
            }
        });
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
                $(this).blur().nextAll('input[name=lineProductId]').val(ui.item.id);
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
                $(this).blur().nextAll('input[name=fromPartnerAgencyId]').val(ui.item.id);
            }
        }).on("click",function(){
            $partner.autocomplete('search', '');
        });
    };

    exports.init = transfer.initModule;
});