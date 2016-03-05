/*TMODJS:{"debug":true,"version":231,"md5":"d4d1a5953e30a50d4790c9040b96cbc4"}*/
define(function(require) {
    return require("../../../template")("financial/totalProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, startDate = $data.startDate, endDate = $data.endDate, fromPartnerAgencyName = $data.fromPartnerAgencyName, fromPartnerAgencyId = $data.fromPartnerAgencyId, outOPUserName = $data.outOPUserName, groupName = $data.groupName, $out = "";
            return $out += ' <div class="row" > <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <label>开始时间：</label> <input class="date-picker mar-r-10" name="startTime" value = "', 
            $line = 5, $out += $escape(startDate), $out += '" placeholder="开始日期" type="text" style="width:100px;" /> <label >结束时间：</label> <input class="date-picker mar-r-10" name="endTime" value = "', 
            $line = 7, $out += $escape(endDate), $out += '" placeholder="结束日期" type="text" style="width:100px;" /> <label>客户：</label> <input type="text" class="T-choosePartner mar-r-10" name="fromPartnerAgencyName" value="', 
            $line = 9, $out += $escape(fromPartnerAgencyName), $out += '" placeholder="客户" type="text" style="width:100px;" /> <input type="hidden" name="fromPartnerAgencyId" value="', 
            $line = 10, $out += $escape(fromPartnerAgencyId), $out += '" /> <label>外联销售：</label> <input type="text" class="mar-r-10" name="outOPUserName" value="', 
            $line = 12, $out += $escape(outOPUserName), $out += '" placeholder="外联销售" type="text" style="width:100px;" /> <label>部门：</label> <input type="text" name="groupName" class="mar-r-10" value="', 
            $line = 14, $out += $escape(groupName), $out += '" placeholder="部门" type="text" style="width:100px;" /> <label>类别：</label> <select name="type" class="mar-r-10"> <option value="" selected="selected">全部</option> <option value="receiveProfit">收客利润</option> <option value="booking">代订利润</option> </select> <button class="btn-height btn-sm search-btn T-search "> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <div class="form-group mar-t-10"> <label class="control-label mar-r-20">收入合计：<span class="income F-float F-money"></span></label> <label class="control-label mar-r-20">支出合计：<span class="cost F-float F-money"></span></label> <label class="control-label ">毛利合计：<span class="profit F-float F-money"></span></label> </div> <div class="row ticketList" style="margin-top:10px;"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>收客单号/代订单号</th> <th>线路产品</th> <th>出游日期/代订日期</th> <th>游客</th> <th>人数</th> <th>客户</th> <th>外联销售</th> <th>部门</th> <th>团款收入</th> <th>发团收入(不含团款)</th> <th>代订收入</th> <th>中转成本</th> <th>发团成本</th> <th>外转成本</th> <th>代订成本</th> <th>收入小计</th> <th>支出小计</th> <th>毛利</th> </tr> </thead> <tbody class="T-list"> </tbody> </table> </div> </div> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-recordSize">&nbsp;</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: ' <div class="row" >\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="T-search-area">\r\n            <label>开始时间：</label>\r\n			<input class="date-picker mar-r-10" name="startTime" value = "{{startDate}}" placeholder="开始日期" type="text" style="width:100px;" />	\r\n            <label >结束时间：</label>\r\n            <input class="date-picker mar-r-10" name="endTime" value = "{{endDate}}" placeholder="结束日期"  type="text" style="width:100px;" />	\r\n            <label>客户：</label>\r\n            <input type="text" class="T-choosePartner mar-r-10" name="fromPartnerAgencyName" value="{{fromPartnerAgencyName}}" placeholder="客户"  type="text" style="width:100px;" /> \r\n            <input type="hidden" name="fromPartnerAgencyId" value="{{fromPartnerAgencyId}}" /> \r\n            <label>外联销售：</label>\r\n            <input type="text" class="mar-r-10" name="outOPUserName" value="{{outOPUserName}}" placeholder="外联销售"  type="text" style="width:100px;" /> \r\n            <label>部门：</label>\r\n            <input type="text" name="groupName" class="mar-r-10" value="{{groupName}}" placeholder="部门"  type="text" style="width:100px;" /> \r\n            <label>类别：</label>\r\n            <select name="type" class="mar-r-10">\r\n                <option value="" selected="selected">全部</option>\r\n                <option value="receiveProfit">收客利润</option>\r\n                <option value="booking">代订利润</option>\r\n            </select>\r\n            <button class="btn-height btn-sm search-btn T-search ">\r\n                <i class="ace-icon fa fa-search"></i>\r\n             	   搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class="form-group mar-t-10">\r\n        <label class="control-label mar-r-20">收入合计：<span class="income F-float F-money"></span></label>\r\n        <label class="control-label mar-r-20">支出合计：<span class="cost F-float F-money"></span></label>\r\n        <label class="control-label ">毛利合计：<span class="profit F-float F-money"></span></label>\r\n    </div> \r\n    <div class="row ticketList" style="margin-top:10px;">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n	                <tr class="bg-blur">\r\n	                   <th>收客单号/代订单号</th>\r\n	                   <th>线路产品</th>\r\n	                   <th>出游日期/代订日期</th>\r\n                       <th>游客</th>\r\n	                   <th>人数</th>\r\n                       <th>客户</th>\r\n                       <th>外联销售</th>\r\n                       <th>部门</th>\r\n	                   <th>团款收入</th>\r\n	                   <th>发团收入(不含团款)</th>\r\n                       <th>代订收入</th>\r\n                       <th>中转成本</th>\r\n	                   <th>发团成本</th>\r\n                       <th>外转成本</th>\r\n                       <th>代订成本</th>\r\n                       <th>收入小计</th>\r\n                       <th>支出小计</th>\r\n                       <th>毛利</th>\r\n	                </tr>\r\n                </thead>\r\n                <tbody class="T-list">\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small class="T-recordSize">&nbsp;</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});