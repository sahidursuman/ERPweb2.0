/*TMODJS:{"debug":true,"version":25,"md5":"bce565c68ae6875fef3531f952f5ae66"}*/
define(function(require) {
    return require("../../../template")("financial/guideBorrow/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), searchParam = $data.searchParam, $escape = $utils.$escape, $each = $utils.$each, list = $data.list, recordSize = ($data.rs, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>导游</label> <input type="text" class="form-control" name="guideName" style="width: 100px;" value="', 
            $line = 5, searchParam.guideName && "" != searchParam.guideName ? ($line = 5, $out += $escape(searchParam.guideName), 
            $line = 5) : ($out += "全部", $line = 5), $out += '" maxlength="100"> <input type="hidden" name="guideId" value="', 
            $line = 6, $out += $escape(searchParam.guideId), $out += '" /> </div> <div class="form-group input-daterange mar-r-10"> <label>账期</label> <input type="text" class="form-control datepicker" name="startDate" style="width:100px;" value="', 
            $line = 10, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker" name="endDate" style="width:100px;" value="', 
            $line = 12, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group T-borrow-status btn-group mar-r-10"> <button data-value="', 
            $line = 15, $out += $escape(searchParam.accountStatus), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 17, searchParam.accountStatus && "" != searchParam.accountStatus ? 1 == searchParam.accountStatus ? ($out += " 已结清 ", 
            $line = 21) : ($out += " 未结清 ", $line = 23) : ($out += " 全部 ", $line = 19), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu "> <li><a data-value="0">全部</a></li> <li><a data-value="1">已结清</a></li> <li><a data-value="2">未结清</a></li> </ul> </div> <div class="form-group"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>导游</th> <th>计划预支款</th> <th>预支金额</th> <th>未付金额</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 52, $each(list, function(rs) {
                $out += ' <tr data-id="', $line = 53, $out += $escape(rs.guideId), $out += '" data-name="', 
                $line = 53, $out += $escape(rs.guideName), $out += '"> <td>', $line = 54, $out += $escape(rs.guideName), 
                $out += '</td> <td><span class="F-float F-money">', $line = 55, $out += $escape(rs.planPreMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 56, $out += $escape(rs.preMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 57, $out += $escape(rs.unPayedMoney), 
                $out += '</span></td> <td><a class="cursor T-borrow">借款</a></td> </tr> ', $line = 60;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 65, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group mar-r-10">\r\n            <label>导游</label>\r\n            <input type="text" class="form-control" name="guideName" style="width: 100px;" value="{{if !searchParam.guideName || searchParam.guideName == \'\'}}全部{{else}}{{searchParam.guideName}}{{/if}}" maxlength="100">\r\n            <input type="hidden" name="guideId" value="{{searchParam.guideId}}" />\r\n        </div>\r\n        <div class="form-group input-daterange mar-r-10">\r\n            <label>账期</label>\r\n            <input type="text" class="form-control datepicker" name="startDate" style="width:100px;" value="{{searchParam.startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker" name="endDate" style="width:100px;" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group T-borrow-status btn-group mar-r-10">\r\n            <button data-value="{{searchParam.accountStatus}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                    {{if !searchParam.accountStatus || searchParam.accountStatus == ""}}\r\n                        全部\r\n                    {{else if searchParam.accountStatus == 1}}\r\n                        已结清\r\n                    {{else}}\r\n                        未结清\r\n                    {{/if}}\r\n                </span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu ">\r\n                <li><a data-value="0">全部</a></li>\r\n                <li><a data-value="1">已结清</a></li>\r\n                <li><a data-value="2">未结清</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur T-tr-fixed">\r\n                <th>导游</th>\r\n                <th>计划预支款</th>\r\n                <th>预支金额</th>\r\n                <th>未付金额</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n            {{each list as rs}}\r\n            <tr data-id="{{rs.guideId}}" data-name="{{rs.guideName}}">\r\n                <td>{{rs.guideName}}</td>\r\n                <td><span class="F-float F-money">{{rs.planPreMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.preMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.unPayedMoney}}</span></td>\r\n                <td><a class="cursor T-borrow">借款</a></td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});