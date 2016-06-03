/*TMODJS:{"debug":true,"version":872,"md5":"87cad5ef0bab3759ed1231cd15238b47"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/saleProduct/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, lineProductSalesList = $data.lineProductSalesList, recordSize = ($data.lineProL, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="search-area search-tripPlanContainer"> <div class="row T-search-area"> <label class="pull-left text-right control-label no-padding-right">开始日期 </label> <div class="col-xs-1"> <input type="text" name="startDate" class="col-xs-12 datepicker" placeholder="开始日期" value="', 
            $line = 5, $out += $escape(searchParam.startDate), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">结束日期 </label> <div class="col-xs-1"> <input type="text" name="endDate" class="col-xs-12 datepicker" placeholder="结束日期" value="', 
            $line = 9, $out += $escape(searchParam.endDate), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">针对客源 </label> <div class="col-sm-1 "> <select name="customerType" class="col-xs-12"> <option value="" ', 
            $line = 14, "0" != searchParam.customerType && "1" != searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 14), $out += '>全部</option> <option value="0" ', $line = 15, "0" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 15), $out += '>散客</option> <option value="1" ', $line = 16, "1" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 16), $out += '>团体</option> </select> </div> <div class="col-xs-2"> <button class=" btn-sm T-saleProduct-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="saleProduct-toTal" style="padding-bottom: 15px; margin-top:15px;"> <div class="saleProduct-toTal-Cost"> <label class="peopleCount mar-r-20">游客合计 : ', 
            $line = 27, $out += $escape(searchParam.sumAdult), $out += "大", $line = 27, $out += $escape(searchParam.sumChild), 
            $out += '小</label> <label class="needPayMoney mar-r-20">发团合计:', $line = 28, $out += $escape(searchParam.sumTouristAdult), 
            $out += "大", $line = 28, $out += $escape(searchParam.sumTouristChild), $out += '小</label> <label class="payedMoney mar-r-20">外转合计:', 
            $line = 29, $out += $escape(searchParam.sumTransferAdult), $out += "大", $line = 29, 
            $out += $escape(searchParam.sumTransferChild), $out += '小</label> <label class="pMoney">内转合计:', 
            $line = 30, $out += $escape(searchParam.sumInnerAdult), $out += "大", $line = 30, 
            $out += $escape(searchParam.sumInnerChild), $out += '小</label> </div> </div> <table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <colgroup> <col style="width:25%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-2">线路产品</th> <th class="col-sm-2">天数</th> <th class="col-sm-1">类别</th> <th class="col-sm-1">针对客源</th> <th class="col-sm-1">游客量</th> <th class="col-sm-1">发团客量</th> <th class="col-sm-1">内转客量</th> <th class="col-sm-1">外转客量</th> </tr> </thead> <tbody class="T-scenic-list"> ', 
            $line = 56, $each(lineProductSalesList, function(lineProL) {
                $out += " <tr> <td>", $line = 58, $out += $escape(lineProL.lineProductName), $out += "</td> <td>", 
                $line = 59, $out += $escape(lineProL.days), $out += "</td> <td>", $line = 60, $out += $escape(lineProL.type), 
                $out += "</td> <td>", $line = 61, $out += $escape(lineProL.customerType), $out += "</td> <td>", 
                $line = 62, $out += $escape(lineProL.tourist), $out += "</td> <td>", $line = 63, 
                $out += $escape(lineProL.touristStart), $out += "</td> <td>", $line = 64, $out += $escape(lineProL.innerTransfer), 
                $out += "</td> <td>", $line = 65, $out += $escape(lineProL.outerTransfer), $out += "</td> </tr> ", 
                $line = 67;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 72, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area search-tripPlanContainer">\r\n    <div class="row T-search-area">\r\n        <label class="pull-left text-right control-label no-padding-right">开始日期 </label>\r\n        <div class="col-xs-1">\r\n            <input type="text" name="startDate" class="col-xs-12 datepicker" placeholder="开始日期" value="{{searchParam.startDate}}" />\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right">结束日期 </label>\r\n        <div class="col-xs-1">\r\n            <input type="text" name="endDate" class="col-xs-12 datepicker" placeholder="结束日期" value="{{searchParam.endDate}}" />\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right">针对客源 </label>\r\n        <div class="col-sm-1 ">\r\n            <select name="customerType" class="col-xs-12">\r\n                <option value="" {{if searchParam.customerType !=\'0\' && searchParam.customerType !=\'1\' }}selected="selected" {{/if}}>全部</option>\r\n                <option value="0" {{if searchParam.customerType=="0" }}selected="selected" {{/if}}>散客</option>\r\n                <option value="1" {{if searchParam.customerType=="1" }}selected="selected" {{/if}}>团体</option>\r\n            </select>\r\n        </div>\r\n        <div class="col-xs-2">\r\n            <button class=" btn-sm  T-saleProduct-search search-btn">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="saleProduct-toTal" style="padding-bottom: 15px; margin-top:15px;">\r\n        <div class="saleProduct-toTal-Cost">\r\n            <label class="peopleCount mar-r-20">游客合计 : {{searchParam.sumAdult}}大{{searchParam.sumChild}}小</label>\r\n            <label class="needPayMoney mar-r-20">发团合计:{{searchParam.sumTouristAdult}}大{{searchParam.sumTouristChild}}小</label>\r\n            <label class="payedMoney mar-r-20">外转合计:{{searchParam.sumTransferAdult}}大{{searchParam.sumTransferChild}}小</label>\r\n            <label class="pMoney">内转合计:{{searchParam.sumInnerAdult}}大{{searchParam.sumInnerChild}}小</label>\r\n        </div>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n        <colgroup>\r\n            <col style="width:25%;"></col>\r\n            <col style="width:10%;"></col>\r\n            <col style="width:10%;"></col>\r\n            <col style="width:10%;"></col>\r\n            <col style="width:15%;"></col>\r\n            <col style="width:15%;"></col>\r\n            <col style="width:15%;"></col>\r\n        </colgroup>\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th class="col-sm-2">线路产品</th>\r\n                <th class="col-sm-2">天数</th>\r\n                <th class="col-sm-1">类别</th>\r\n                <th class="col-sm-1">针对客源</th>\r\n                <th class="col-sm-1">游客量</th>\r\n                <th class="col-sm-1">发团客量</th>\r\n                <th class="col-sm-1">内转客量</th>\r\n                <th class="col-sm-1">外转客量</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-scenic-list">\r\n            {{each lineProductSalesList as lineProL}}\r\n            <tr>\r\n                <td>{{lineProL.lineProductName}}</td>\r\n                <td>{{lineProL.days}}</td>\r\n                <td>{{lineProL.type}}</td>\r\n                <td>{{lineProL.customerType}}</td>\r\n                <td>{{lineProL.tourist}}</td>\r\n                <td>{{lineProL.touristStart}}</td>\r\n                <td>{{lineProL.innerTransfer}}</td>\r\n                <td>{{lineProL.outerTransfer}}</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});