/*TMODJS:{"debug":true,"version":899,"md5":"fcb5c7fad78c5ae291d8aa07620e0dad"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, statistics = $data.statistics, $out = "";
            return $out += '<div class="search-area T-touristGroupSearchForm clearfix globalAdd"> <style> .T-touristGroupSearchForm .form-control { width: 114px; } .T-touristGroupSearchForm .datepicker { width: 84px; } </style> <div class="form-group T-search-area clearfix"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-9"> <button class="btn btn-sm btn-success T-touristGroup-add R-right" data-right="1120002"> <i class="ace-icon fa fa-plus"></i> 新增小组 </button> </div> <div class="form-group"> <button class="btn btn-sm btn-success T-export">导出游客保险名单</button> </div> </form> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-9"> <label>收客单号</label> <input type="text" class="form-control" placeholder="收客单号" name="orderNumber" value="', 
            $line = 27, $out += $escape(searchParam.orderNumber), $out += '" /> </div> <div class="form-group"> <select class="T-choosePorB" style="width: 63px;"> <option value=\'0\' ', 
            $line = 33, 0 == searchParam.type && ($out += 'selected="selected" ', $line = 33), 
            $out += ">全部</option> <option value='1' ", $line = 34, 1 == searchParam.type && ($out += 'selected="selected" ', 
            $line = 34), $out += ">组团社</option> <option value='2' ", $line = 35, 2 == searchParam.type && ($out += 'selected="selected" ', 
            $line = 35), $out += '>业务部</option> </select> </div> <div class="form-group mar-r-9"> <input type="text" class="T-choosePAB form-control" placeholder="全部客户" style="', 
            $line = 39, 0 != searchParam.type && ($out += "display: none", $line = 39), $out += '" readonly="readonly" /> <input type="text" class="T-choosePartnerAgency T-PorB form-control" placeholder="客户" name="fromPartnerAgencyName" style="', 
            $line = 40, (1 != searchParam.type || null == searchParam.type) && ($out += "display: none", 
            $line = 40), $out += '" value="', $line = 40, "" == searchParam.fromPartnerAgencyName ? ($out += "全部", 
            $line = 40) : ($line = 40, $out += $escape(searchParam.fromPartnerAgencyName), $line = 40), 
            $out += '" /> <input type="text" class="T-chooseBussinessGroup T-PorB form-control" placeholder="客户" name="fromBussinessGroupName" style="', 
            $line = 41, (2 != searchParam.type || null == searchParam.type) && ($out += "display: none;", 
            $line = 41), $out += '" value="', $line = 41, " " == searchParam.fromBussinessGroupName ? ($out += "全部", 
            $line = 41) : ($line = 41, $out += $escape(searchParam.fromBussinessGroupName), 
            $line = 41), $out += '" /> <input type="hidden" name="fromPartnerAgencyId" value="', 
            $line = 42, $out += $escape(searchParam.fromPartnerAgencyId), $out += '"> <input type="hidden" name="fromBussinessGroupId" value="', 
            $line = 43, $out += $escape(searchParam.fromBussinessGroupId), $out += '" /> </div> <div class="form-group mar-r-9"> <label>线路产品</label> <input type="text" class="form-control T-chooseLineProduct tourist-LineProduct" placeholder="线路产品" name="lineProductName" value="', 
            $line = 48, $out += $escape(searchParam.lineProductName), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 49, $out += $escape(searchParam.lineProductId), $out += '"> </div> <div class="form-group mar-r-9"> <label>针对客源</label> <select name="customerType" style="width: 51px;"> <option value="" ', 
            $line = 55, "" == searchParam.customerType && ($out += 'selected="selected" ', $line = 55), 
            $out += '>全部</option> <option value="0" ', $line = 56, "0" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 56), $out += '>散客</option> <option value="1" ', $line = 57, "1" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 57), $out += '>团体</option> </select> </div> <div class="form-group mar-r-10"> <label>出游时间</label> <input class="datepicker" name="startTime" value="', 
            $line = 63, $out += $escape(searchParam.startTime), $out += '" type="text" /> </div> <div class="form-group mar-r-9"> <label >报价单号</label> <input type="text" class="form-control T-choose-quoteNumber" placeholder="报价单号" name="quoteNumber" value="', 
            $line = 68, $out += $escape(searchParam.quoteNumber), $out += '" /> </div> <div class="form-group"> <label >出游日期</label> <select name="order_by" id="order_by"> <option value="asc" ', 
            $line = 73, "asc" == searchParam.order && ($out += 'selected="selected" ', $line = 73), 
            $out += '>升序</option> <option value="desc" ', $line = 74, "desc" == searchParam.order && ($out += 'selected="selected" ', 
            $line = 74), $out += '>降序</option> </select> </div> </form> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-9"> <label >组团单号</label> <input type="text" class="form-control T-choose-otaOrderNumber" placeholder="组团单号" name="otaOrderNumber" value="', 
            $line = 81, $out += $escape(searchParam.otaOrderNumber), $out += '" /> </div> <div class="form-group mar-r-9"> <label>游客</label> <input type="text" class="form-control" placeholder="联系人或联系电话" name="contactInfo" value="', 
            $line = 85, $out += $escape(searchParam.contactInfo), $out += '" style="width: 140px;" /> </div> <div class="form-group mar-r-9"> <label>外联销售</label> <input type="text" class="form-control T-choose-outUserList" placeholder="外联销售" name="realName" value="', 
            $line = 89, $out += $escape(searchParam.realName), $out += '" /> </div> <div class="form-group mar-r-9"> <label>客源类型</label> <select name="memberType" style="width: 51px;"> <option value="" ', 
            $line = 94, "" == searchParam.memberType && ($out += 'selected="selected" ', $line = 94), 
            $out += '>全部</option> <option value="0" ', $line = 95, "0" == searchParam.memberType && ($out += 'selected="selected" ', 
            $line = 95), $out += '>内宾</option> <option value="1" ', $line = 96, "1" == searchParam.memberType && ($out += 'selected="selected" ', 
            $line = 96), $out += '>外宾</option> </select> </div> <div class="form-group mar-r-9"> <label>录入日期</label> <input type="text" name="createTimeStart" class="datepicker" value="', 
            $line = 103, searchParam.createTimeStart ? ($line = 103, $out += $escape($helpers.dateFormat(searchParam.createTimeStart, "yyyy-MM-dd")), 
            $line = 103) : $line = 103, $out += '"> <label>至</label> <input type="text" name="createTimeEnd" class="datepicker" value="', 
            $line = 105, searchParam.createTimeEnd ? ($line = 105, $out += $escape($helpers.dateFormat(searchParam.createTimeEnd, "yyyy-MM-dd")), 
            $line = 105) : $line = 105, $out += '"> </div> <div class="form-group"> <label>状态</label> <select class="T-select-status" style="width: 62px;"> <option value="">全部</option> <option value="0" ', 
            $line = 112, "0" == searchParam.status && ($out += 'selected="selected" ', $line = 112), 
            $out += '>已发团</option> <option value="1" ', $line = 113, "1" == searchParam.status && ($out += 'selected="selected" ', 
            $line = 113), $out += '>未分团</option> <option value="2" ', $line = 114, "2" == searchParam.status && ($out += 'selected="selected" ', 
            $line = 114), $out += '>已分团</option> <option value="3" ', $line = 115, "3" == searchParam.status && ($out += 'selected="selected" ', 
            $line = 115), $out += '>已外转</option> <option value="5" ', $line = 116, "5" == searchParam.status && ($out += 'selected="selected" ', 
            $line = 116), $out += '>已分段</option> <option value="6" ', $line = 117, "6" == searchParam.status && ($out += 'selected="selected" ', 
            $line = 117), $out += '>已内转</option> </select> </div> <div class="form-group mar-r-9"> <button class=" btn-sm T-touristGroupList-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <div class="form-horizontal T-countData"> <label class="control-label pull-left mar-r-20" name="statistics-count">人数合计：<span class="allPerson"><span class="F-float F-count">', 
            $line = 129, $out += $escape(statistics.adultCount), $out += '</span>大<span class="F-float F-count">', 
            $line = 129, $out += $escape(statistics.childCount), $out += '</span>小</span> </label> <label class="control-label mar-r-20" name="statistics-needPay">应收款合计：<span class="needIncome"><span class="F-float F-money">', 
            $line = 131, $out += $escape(statistics.needPay), $out += '</span>元</span> </label> <label class="control-label mar-r-20" name="statistics-needPay">预收款合计：<span class="needIncome"><span class="F-float F-money">', 
            $line = 133, $out += $escape(statistics.sumPreIncomeMoney), $out += '</span>元</span></label> <label class="control-label mar-r-20" name="statistics-payed">已收款合计：<span class="payedMoney"><span class="F-float F-money">', 
            $line = 134, $out += $escape(statistics.payedMoney), $out += '</span>元</span> </label> <label class="control-label mar-r-20" name="statistics-currentNeedPay">现收款合计：<span class="currentNeedPay"><span class="F-float F-money">', 
            $line = 136, $out += $escape(statistics.currentNeedPay), $out += '</span>元</span> </label> <label class="control-label mar-r-20" name="statistics-unIncome">未收款合计：<span class="unIncome"><span class="F-float F-money">', 
            $line = 138, $out += $escape(statistics.unIncomeMoney), $out += '</span>元</span> </label> </div> </div> <div id="touristGroup-listMain"> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area T-touristGroupSearchForm clearfix globalAdd">\r\n    <style>\r\n        .T-touristGroupSearchForm .form-control {\r\n            width: 114px;\r\n        }\r\n\r\n        .T-touristGroupSearchForm .datepicker  {\r\n            width: 84px;\r\n        }\r\n\r\n    </style>\r\n\r\n    <div class="form-group T-search-area clearfix">\r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group  mar-r-9">\r\n                <button class="btn btn-sm btn-success T-touristGroup-add R-right" data-right="1120002">\r\n                    <i class="ace-icon fa fa-plus"></i> 新增小组\r\n                </button>\r\n            </div>\r\n            <div class="form-group">\r\n                <button class="btn btn-sm btn-success T-export">导出游客保险名单</button>\r\n            </div>\r\n        </form>        \r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group mar-r-9">\r\n                <label>收客单号</label>\r\n                <input type="text" class="form-control" placeholder="收客单号" name="orderNumber" value="{{searchParam.orderNumber}}" />\r\n            </div>\r\n\r\n\r\n            <div class="form-group">\r\n                <select class="T-choosePorB" style="width: 63px;">\r\n                    <option value=\'0\' {{if searchParam.type==0 }}selected="selected" {{/if}}>全部</option>\r\n                    <option value=\'1\' {{if searchParam.type==1 }}selected="selected" {{/if}}>组团社</option>\r\n                    <option value=\'2\' {{if searchParam.type==2 }}selected="selected" {{/if}}>业务部</option>\r\n                </select>\r\n            </div>\r\n            <div class="form-group mar-r-9">\r\n                <input type="text" class="T-choosePAB form-control" placeholder="全部客户" style="{{if searchParam.type != 0}}display: none{{/if}}" readonly="readonly" />\r\n                <input type="text" class="T-choosePartnerAgency T-PorB form-control" placeholder="客户" name="fromPartnerAgencyName" style="{{if searchParam.type != 1 || searchParam.type == null}}display: none{{/if}}" value="{{if searchParam.fromPartnerAgencyName==\'\'}}全部{{else}}{{searchParam.fromPartnerAgencyName}}{{/if}}" />\r\n                <input type="text" class="T-chooseBussinessGroup T-PorB form-control" placeholder="客户" name="fromBussinessGroupName" style="{{if searchParam.type != 2 || searchParam.type == null}}display: none;{{/if}}" value="{{if searchParam.fromBussinessGroupName == " "}}全部{{else}}{{searchParam.fromBussinessGroupName}}{{/if}}" />\r\n                <input type="hidden" name="fromPartnerAgencyId" value="{{searchParam.fromPartnerAgencyId}}">\r\n                <input type="hidden" name="fromBussinessGroupId" value="{{searchParam.fromBussinessGroupId}}" />\r\n            </div>\r\n\r\n            <div class="form-group mar-r-9">\r\n                <label>线路产品</label>\r\n                <input type="text" class="form-control T-chooseLineProduct tourist-LineProduct" placeholder="线路产品" name="lineProductName" value="{{searchParam.lineProductName}}" />\r\n                <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}">\r\n            </div>\r\n\r\n            <div class="form-group mar-r-9">\r\n                <label>针对客源</label>\r\n                <select name="customerType" style="width: 51px;">\r\n                    <option value="" {{if searchParam.customerType=="" }}selected="selected" {{/if}}>全部</option>\r\n                    <option value="0" {{if searchParam.customerType=="0" }}selected="selected" {{/if}}>散客</option>\r\n                    <option value="1" {{if searchParam.customerType=="1" }}selected="selected" {{/if}}>团体</option>\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label>出游时间</label>\r\n                <input class="datepicker" name="startTime" value="{{searchParam.startTime}}" type="text" />\r\n            </div>\r\n\r\n            <div class="form-group mar-r-9">\r\n                <label >报价单号</label>\r\n                <input type="text" class="form-control T-choose-quoteNumber" placeholder="报价单号" name="quoteNumber" value="{{searchParam.quoteNumber}}" />\r\n            </div> \r\n            <div class="form-group">\r\n                <label >出游日期</label>\r\n                <select name="order_by" id="order_by">\r\n                    <option value="asc" {{if searchParam.order == \'asc\'}}selected="selected" {{/if}}>升序</option>\r\n                    <option value="desc" {{if searchParam.order == \'desc\'}}selected="selected" {{/if}}>降序</option>\r\n                </select>\r\n            </div>         \r\n        </form>\r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group mar-r-9">\r\n                <label >组团单号</label>\r\n                <input type="text" class="form-control T-choose-otaOrderNumber" placeholder="组团单号" name="otaOrderNumber" value="{{searchParam.otaOrderNumber}}" />\r\n            </div>\r\n            <div class="form-group mar-r-9">\r\n                <label>游客</label>\r\n                <input type="text" class="form-control" placeholder="联系人或联系电话" name="contactInfo" value="{{searchParam.contactInfo}}" style="width: 140px;" />\r\n            </div>\r\n            <div class="form-group mar-r-9">\r\n                <label>外联销售</label>\r\n                <input type="text" class="form-control T-choose-outUserList" placeholder="外联销售" name="realName" value="{{searchParam.realName}}" />\r\n            </div>\r\n            <div class="form-group mar-r-9">\r\n                <label>客源类型</label>\r\n                <select name="memberType" style="width: 51px;">\r\n                    <option value="" {{if searchParam.memberType=="" }}selected="selected" {{/if}}>全部</option>\r\n                    <option value="0" {{if searchParam.memberType=="0" }}selected="selected" {{/if}}>内宾</option>\r\n                    <option value="1" {{if searchParam.memberType=="1" }}selected="selected" {{/if}}>外宾</option>\r\n                </select>\r\n            </div>\r\n            \r\n            \r\n            <div class="form-group mar-r-9">\r\n                <label>录入日期</label>\r\n                <input type="text" name="createTimeStart" class="datepicker" value="{{if !!searchParam.createTimeStart}}{{searchParam.createTimeStart  | dateFormat: \'yyyy-MM-dd\'}}{{else}}{{/if}}">\r\n                <label>至</label>\r\n                <input type="text" name="createTimeEnd" class="datepicker" value="{{if !!searchParam.createTimeEnd}}{{searchParam.createTimeEnd | dateFormat: \'yyyy-MM-dd\'}}{{else}}{{/if}}">\r\n            </div>\r\n\r\n            <div class="form-group">\r\n                <label>状态</label>\r\n                <select class="T-select-status" style="width: 62px;">\r\n                    <option value="">全部</option>\r\n                    <option value="0"  {{if searchParam.status=="0" }}selected="selected" {{/if}}>已发团</option>\r\n                    <option value="1"  {{if searchParam.status=="1" }}selected="selected" {{/if}}>未分团</option>\r\n                    <option value="2"  {{if searchParam.status=="2" }}selected="selected" {{/if}}>已分团</option>\r\n                    <option value="3"  {{if searchParam.status=="3" }}selected="selected" {{/if}}>已外转</option>\r\n                    <option value="5"  {{if searchParam.status=="5" }}selected="selected" {{/if}}>已分段</option>\r\n                    <option value="6"  {{if searchParam.status=="6" }}selected="selected" {{/if}}>已内转</option>\r\n                </select>\r\n            </div>\r\n\r\n             <div class="form-group mar-r-9">\r\n                <button class=" btn-sm  T-touristGroupList-search search-btn">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索\r\n                </button>\r\n            </div>\r\n            \r\n        </form>\r\n        <div class="form-horizontal T-countData">\r\n            <label class="control-label pull-left mar-r-20" name="statistics-count">人数合计：<span class="allPerson"><span class="F-float F-count">{{statistics.adultCount}}</span>大<span class="F-float F-count">{{statistics.childCount}}</span>小</span>\r\n            </label>\r\n            <label class="control-label mar-r-20" name="statistics-needPay">应收款合计：<span class="needIncome"><span class="F-float F-money">{{statistics.needPay}}</span>元</span>\r\n            </label>\r\n            <label class="control-label mar-r-20" name="statistics-needPay">预收款合计：<span class="needIncome"><span class="F-float F-money">{{statistics.sumPreIncomeMoney}}</span>元</span></label>\r\n            <label class="control-label mar-r-20" name="statistics-payed">已收款合计：<span class="payedMoney"><span class="F-float F-money">{{statistics.payedMoney}}</span>元</span>\r\n            </label>\r\n            <label class="control-label mar-r-20" name="statistics-currentNeedPay">现收款合计：<span class="currentNeedPay"><span class="F-float F-money">{{statistics.currentNeedPay}}</span>元</span>\r\n            </label>\r\n            <label class="control-label mar-r-20" name="statistics-unIncome">未收款合计：<span class="unIncome"><span class="F-float F-money">{{statistics.unIncomeMoney}}</span>元</span>\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div id="touristGroup-listMain">\r\n    </div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});