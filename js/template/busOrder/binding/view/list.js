/*TMODJS:{"debug":true,"version":33,"md5":"858c9d5f98b3e6586dbce0b155574145"}*/
define(function(require) {
    return require("../../../template")("busOrder/binding/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, companyList = $data.companyList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>车队名称</th> <th>公司名称</th> <th>下单网址</th> <th>负责人</th> <th>负责人电话</th> <th>公司座机</th> <th>绑定状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 15, $each(companyList, function(rs) {
                $out += ' <tr data-id="', $line = 16, $out += $escape(rs.id), $out += '" data-name="', 
                $line = 16, $out += $escape(rs.name), $out += '"> <td>', $line = 17, $out += $escape(rs.name), 
                $out += "</td> <td>", $line = 18, $out += $escape(rs.fullName), $out += '</td> <td><a href="http://', 
                $line = 19, $out += $escape(rs.domain), $out += '/user" target="_blank">http://', 
                $line = 19, $out += $escape(rs.domain), $out += "/user</a></td> <td>", $line = 20, 
                $out += $escape(rs.managerName), $out += "</td> <td>", $line = 21, $out += $escape(rs.managerMobileNumber), 
                $out += "</td> <td>", $line = 22, $out += $escape(rs.telPhoneNumber), $out += "</td> <td>", 
                $line = 23, "0" == rs.isBind ? ($out += "未绑定", $line = 23) : ($out += '<span class="green">已绑定</span>', 
                $line = 23), $out += "</td> <td> ", $line = 25, "0" == rs.isBind ? ($out += ' <a class="T-action cursor T-binding">绑定</a> ', 
                $line = 27) : ($out += " - ", $line = 29), $out += " </td> </tr> ", $line = 32;
            }), $out += ' </tbody> </table> <div class="pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 37, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>车队名称</th>\r\n            <th>公司名称</th>\r\n            <th>下单网址</th>\r\n            <th>负责人</th>\r\n            <th>负责人电话</th>\r\n            <th>公司座机</th>\r\n            <th>绑定状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        {{each companyList as rs}}\r\n        <tr data-id="{{rs.id}}" data-name="{{rs.name}}">\r\n            <td>{{rs.name}}</td>\r\n            <td>{{rs.fullName}}</td>\r\n            <td><a href="http://{{rs.domain}}/user" target="_blank">http://{{rs.domain}}/user</a></td>\r\n            <td>{{rs.managerName}}</td>\r\n            <td>{{rs.managerMobileNumber}}</td>\r\n            <td>{{rs.telPhoneNumber}}</td>\r\n            <td>{{if rs.isBind == \'0\'}}未绑定{{else}}<span class="green">已绑定</span>{{/if}}</td>\r\n            <td>\r\n            {{if rs.isBind == \'0\'}}\r\n                <a class="T-action cursor T-binding">绑定</a>\r\n            {{else}}\r\n            -\r\n            {{/if}}\r\n            </td>\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="pageMode">\r\n    <div class="col-xs-4">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-8">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});