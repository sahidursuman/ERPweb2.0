/*TMODJS:{"debug":true,"version":5,"md5":"0cca17fd77a26d05ec9587594925a8e8"}*/
define(function(require) {
    return require("../../../template")("financial/offsetByDetail/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), searchParam = $data.searchParam, $escape = $utils.$escape, $each = $utils.$each, result = $data.result, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>资源类型</label> <select name="resourceType" style="width: 51px;" class="T-resourceType"> <option ', 
            $line = 6, "20" == searchParam.resourceType && ($out += "selected", $line = 6), 
            $out += ' value="20">酒店</option> <option ', $line = 7, "21" == searchParam.resourceType && ($out += "selected", 
            $line = 7), $out += ' value="21">购物</option> <option ', $line = 8, "22" == searchParam.resourceType && ($out += "selected", 
            $line = 8), $out += ' value="22">客户</option> <option ', $line = 9, "23" == searchParam.resourceType && ($out += "selected", 
            $line = 9), $out += ' value="23">车队</option> </select> </div> <div class="form-group mar-r-10"> <label>对方单位</label> <input type="text" class="form-control" name="resourceName" style="width: 120px;" value="', 
            $line = 14, $out += $escape(searchParam.resourceName), $out += '" maxlength="100" placeholder="对方单位"> </div> <div class="form-group input-daterange mar-r-10"> <label>记账日期</label> <input type="text" class="form-control datepicker w100" name="startDate" value="', 
            $line = 19, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker w100" name="endDate" value="', 
            $line = 21, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group"> <button class="btn-sm search-btn T-btn-search"><i class="ace-icon fa fa-search"></i> 搜索</button> </div> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>对方单位</th> <th>账款合计</th> <th>冲抵合计</th> <th>余额</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 39, $each(result, function(rs) {
                $out += ' <tr data-resourceId="', $line = 40, $out += $escape(rs.resourceId), $out += '" data-resourceType="', 
                $line = 40, $out += $escape(rs.resourceType), $out += '"> <td>', $line = 41, $out += $escape(rs.resourceName), 
                $out += '</td> <td><a class="cursor T-action T-income">', $line = 42, $out += $escape(rs.income), 
                $out += '</a></td> <td><a class="cursor T-action T-viewDetails">', $line = 43, $out += $escape(rs.pay), 
                $out += "</a></td> <td>", $line = 44, $out += $escape(rs.balance), $out += "</td> </tr> ", 
                $line = 46;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 51, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group mar-r-10">\r\n            <label>资源类型</label> \r\n            <select name="resourceType" style="width: 51px;" class="T-resourceType">\r\n                <option {{if searchParam.resourceType=="20"}}selected{{/if}} value="20">酒店</option>\r\n                <option {{if searchParam.resourceType=="21"}}selected{{/if}} value="21">购物</option> \r\n                <option {{if searchParam.resourceType=="22"}}selected{{/if}} value="22">客户</option>\r\n                <option {{if searchParam.resourceType=="23"}}selected{{/if}} value="23">车队</option>\r\n            </select> \r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>对方单位</label>\r\n            <input type="text" class="form-control" name="resourceName" style="width: 120px;" value="{{searchParam.resourceName}}" maxlength="100"\r\n            placeholder="对方单位">\r\n        </div>\r\n        <div class="form-group input-daterange mar-r-10">\r\n            <label>记账日期</label>\r\n            <input type="text" class="form-control datepicker w100" name="startDate" value="{{searchParam.startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker w100" name="endDate" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group">\r\n            <button class="btn-sm search-btn T-btn-search"><i class="ace-icon fa fa-search"></i> 搜索</button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur T-tr-fixed">\r\n                <th>对方单位</th>\r\n                <th>账款合计</th>\r\n                <th>冲抵合计</th>\r\n                <th>余额</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n            {{each result as rs}}\r\n              <tr data-resourceId="{{rs.resourceId}}" data-resourceType="{{rs.resourceType}}">\r\n                <td>{{rs.resourceName}}</td>\r\n                <td><a class="cursor T-action T-income">{{rs.income}}</a></td>\r\n                <td><a class="cursor T-action T-viewDetails">{{rs.pay}}</a></td>\r\n                <td>{{rs.balance}}</td>\r\n              </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});