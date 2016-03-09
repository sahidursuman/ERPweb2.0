/*TMODJS:{"debug":true,"version":117,"md5":"87a5c6070e4ef14be5f2b79941b8f36b"}*/
define(function(require) {
    return require("../../../template")("financial/collectedGuests/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $out = "";
            return $out += '<div class="row"> <div class="T-search-area" style="margin:0px;"> <div class="form-horizontal"> <label>线路产品：</label> <input type="text" class="mar-r-10" style="width: 220px" placeholder="线路产品" name="lineProductName" value="', 
            $line = 5, $out += $escape(searchParam.lineProductName), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 6, $out += $escape(searchParam.lineProductId), $out += '" /> <label>客户：</label> <input type="text" class="mar-r-10" style="width: 100px" placeholder="客户" name="fromPartnerAgencyName" value="', 
            $line = 8, $out += $escape(searchParam.fromPartnerAgencyName), $out += '" /> <input type="hidden" name="fromPartnerAgencyId" value="', 
            $line = 9, $out += $escape(searchParam.fromPartnerAgencyId), $out += '" /> <label>针对客源：</label> <select name="customerType" class="mar-r-10"> <option value="" ', 
            $line = 12, searchParam.customerType && "" != searchParam.customerType || ($out += "selected", 
            $line = 12), $out += '>全部</option> <option value="0" ', $line = 13, 0 == searchParam.customerType && ($out += "selected", 
            $line = 13), $out += '>散客</option> <option value="1" ', $line = 14, 1 == searchParam.customerType && ($out += "selected", 
            $line = 14), $out += '>团队</option> </select> <label>收客单号：</label> <input type="text" class="mar-r-10" style="width: 100px" placeholder="收客单号" name="orderNumber" value="', 
            $line = 17, $out += $escape(searchParam.orderNumber), $out += '" /> </div> <div class="mar-t-10"> <label>外联销售：</label> <input type="text" class="mar-r-10" style="width: 100px" placeholder="外联销售" name="outOPUserName" value="', 
            $line = 21, $out += $escape(searchParam.outOPUserName), $out += '" /> <label>部门：</label> <input type="text" class="mar-r-10" style="width: 100px" placeholder="部门" name="groupName" value="', 
            $line = 23, $out += $escape(searchParam.groupName), $out += '" /> <label>开始日期：</label> <input class="date-picker mar-r-10" name="startTime" placeholder="开始日期" type="text" value="', 
            $line = 25, $out += $escape(searchParam.startTime), $out += '" style="width:100px;" /> <label>结束日期：</label> <input class="date-picker mar-r-10" name="endTime" placeholder="结束日期" type="text" value="', 
            $line = 27, $out += $escape(searchParam.endTime), $out += '" style="width:100px;" /> <button class="btn-sm search-btn T-search"> <i class="ace-icon fa fa-search"></i>搜索</button> </div> <div style="margin:8px 0px;"> <label>总人数：<span class="F-float F-money T-touristCount"></span></label> <label class="mar-r-20">收入合计：<span class="F-float F-money T-totalIncome"></span></label> <label class="mar-r-20">支出合计：<span class="F-float F-money T-totalTrip"></span></label> <label class="mar-r-20 T-turn">毛利合计：<span class="F-float F-money T-totalProfit"></span></label> <label>人均毛利合计：<span class="F-float F-money T-AvgProfit"></span></label> </div> </div> <table class="table-bordered table table-striped table-hover overflow-table T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>收客单号</th> <th>线路产品</th> <th>针对客源</th> <th>出游日期</th> <th>游客</th> <th>人数</th> <th>客户</th> <th>外联销售</th> <th>部门</th> <th>团款收入</th> <th>发团收入(不含团款)</th> <th>中转成本</th> <th>发团成本</th> <th>外转成本</th> <th>收入小计</th> <th>支出小计</th> <th>毛利</th> <th>人均毛利</th> </tr> </thead> <tbody class="T-guest-list"> </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-totalSize">没有查询到相关记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n    <div class="T-search-area" style="margin:0px;">\r\n        <div class="form-horizontal">\r\n            <label>线路产品：</label>\r\n            <input type="text" class="mar-r-10" style="width: 220px" placeholder="线路产品" name="lineProductName" value="{{searchParam.lineProductName}}" />\r\n            <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}" />\r\n            <label>客户：</label>\r\n            <input type="text" class="mar-r-10" style="width: 100px" placeholder="客户" name="fromPartnerAgencyName" value="{{searchParam.fromPartnerAgencyName}}" />\r\n            <input type="hidden" name="fromPartnerAgencyId" value="{{searchParam.fromPartnerAgencyId}}" />\r\n            <label>针对客源：</label>\r\n            <select name="customerType" class="mar-r-10">\r\n                <option value="" {{if !searchParam.customerType || searchParam.customerType=="" }}selected{{/if}}>全部</option>\r\n                <option value="0" {{if searchParam.customerType==0 }}selected{{/if}}>散客</option>\r\n                <option value="1" {{if searchParam.customerType==1 }}selected{{/if}}>团队</option>\r\n            </select>\r\n            <label>收客单号：</label>\r\n            <input type="text" class="mar-r-10" style="width: 100px" placeholder="收客单号" name="orderNumber" value="{{searchParam.orderNumber}}" />\r\n        </div>\r\n        <div class="mar-t-10">\r\n            <label>外联销售：</label>\r\n            <input type="text" class="mar-r-10" style="width: 100px" placeholder="外联销售" name="outOPUserName" value="{{searchParam.outOPUserName}}" />\r\n            <label>部门：</label>\r\n            <input type="text" class="mar-r-10" style="width: 100px" placeholder="部门" name="groupName" value="{{searchParam.groupName}}" />\r\n            <label>开始日期：</label>\r\n            <input class="date-picker mar-r-10" name="startTime" placeholder="开始日期" type="text" value="{{searchParam.startTime}}" style="width:100px;" />\r\n            <label>结束日期：</label>\r\n            <input class="date-picker mar-r-10"  name="endTime" placeholder="结束日期" type="text" value="{{searchParam.endTime}}" style="width:100px;" />\r\n            <button class="btn-sm  search-btn T-search"> <i class="ace-icon fa fa-search"></i>搜索</button>\r\n        </div>\r\n        <div style="margin:8px 0px;">\r\n            <label>总人数：<span class="F-float F-money T-touristCount"></span></label>\r\n            <label class="mar-r-20">收入合计：<span class="F-float F-money T-totalIncome"></span></label>\r\n            <label class="mar-r-20">支出合计：<span class="F-float F-money T-totalTrip"></span></label>\r\n            <label class="mar-r-20 T-turn">毛利合计：<span class="F-float F-money T-totalProfit"></span></label>\r\n            <label>人均毛利合计：<span class="F-float F-money T-AvgProfit"></span></label>\r\n        </div>\r\n    </div>\r\n    <table class="table-bordered table  table-striped table-hover overflow-table T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur T-tr-fixed">\r\n                <th>收客单号</th>\r\n                <th>线路产品</th>\r\n                <th>针对客源</th>\r\n                <th>出游日期</th>\r\n                <th>游客</th>\r\n                <th>人数</th>\r\n                <th>客户</th>\r\n                <th>外联销售</th>\r\n                <th>部门</th>\r\n                <th>团款收入</th>\r\n                <th>发团收入(不含团款)</th>\r\n                <th>中转成本</th>\r\n                <th>发团成本</th>\r\n                <th>外转成本</th>\r\n                <th>收入小计</th>\r\n                <th>支出小计</th>\r\n                <th>毛利</th>\r\n                <th>人均毛利</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-guest-list">\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small class="T-totalSize">没有查询到相关记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});