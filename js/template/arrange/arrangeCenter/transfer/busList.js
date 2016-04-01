/*TMODJS:{"debug":true,"version":20,"md5":"18bb2a86de06991033d389478e664a36"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/transfer/busList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, outRemarkArrangeList = $data.outRemarkArrangeList, $escape = ($data.bus, 
            $data.$index, $utils.$escape), canMergeArrange = $data.canMergeArrange, recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>选择</th> <th>中转信息</th> <th>类型</th> <th>客人信息</th> <th>抵达时间</th> <th>班次</th> <th>要求</th> <th>操作</th> </tr> </thead> <tbody class="T-bus-list"> ', 
            $line = 15, $each(outRemarkArrangeList, function(bus) {
                $out += ' <tr data-id="', $line = 16, $out += $escape(bus.outRemarkId), $out += '" ', 
                $line = 16, bus.checked && ($out += ' class="success"', $line = 16), $out += '> <td > <label class="pos-rel"> <input type="checkbox" class="ace T-cheked" ', 
                $line = 19, bus.checked && ($out += ' checked="checked" ', $line = 19), $out += '> <span class="lbl"></span> </label> </td> <td class="h-touristGroupInfo"> <p>中转单号：', 
                $line = 23, $out += $escape(bus.orderNumber), $out += "</p> <p><span>&lt;", $line = 24, 
                $out += $escape(bus.lineProductName), $out += "&gt;</span></p> <p><span>", $line = 25, 
                $out += $escape(bus.startTime), $out += "</span><span>", $line = 25, $out += $escape(bus.partnerAgencyName), 
                $out += "</span><span>外联销售：", $line = 25, $out += $escape(bus.outOPUserName), $out += "</span></p> <p>收客单号：", 
                $line = 26, $out += $escape(bus.tgOrderNumber), $out += "</p> </td> <td> <span >", 
                $line = 29, 1 == bus.shuttleType ? ($out += " 接团 ", $line = 29) : 2 == bus.shuttleType && ($out += " 送团", 
                $line = 29), $out += '</span> <input type="hidden" name="shuttleType" value="', 
                $line = 30, 1 == bus.shuttleType ? ($out += " 1 ", $line = 30) : 2 == bus.shuttleType && ($out += " 2", 
                $line = 30), $out += '" > </td> <td> <p>', $line = 33, $out += $escape(bus.contactMemberName), 
                $out += "</p> <p>", $line = 34, $out += $escape(bus.adultCount), $out += "大", $line = 34, 
                $out += $escape(bus.childCount), $out += "小</p> </td> <td>", $line = 36, $out += $escape(bus.arriveTime), 
                $out += "</td> <td>", $line = 37, $out += $escape(bus.shift), $out += "</td> <td>", 
                $line = 38, $out += $escape(bus.require), $out += '</td> <td> <a class="cursor T-arrange-item T-action">安排</a> <a class="cursor T-view T-action"> <label class="padding-right20">|</label>查看 </td> </tr> ', 
                $line = 45;
            }), $out += ' </tbody> </table> <div class="text-center"> <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" ', 
            $line = 49, canMergeArrange || ($out += ' disabled="disabled" ', $line = 49), $out += ' data-right="1130004"> <i class="ace-icon fa fa-user-plus"></i> 统一安排 </button> </div> <div class="style=\'clear: both;\'"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 56, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="T-pagenation text-right"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur T-tr-fixed">\r\n            <th>选择</th>\r\n            <th>中转信息</th>\r\n            <th>类型</th>\r\n            <th>客人信息</th>\r\n            <th>抵达时间</th>\r\n            <th>班次</th>\r\n            <th>要求</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-bus-list">\r\n    {{each outRemarkArrangeList as bus}}\r\n    <tr data-id="{{bus.outRemarkId}}" {{if bus.checked}} class="success"{{/if}}>\r\n        <td >\r\n            <label class="pos-rel">\r\n                <input type="checkbox" class="ace T-cheked" {{if bus.checked}} checked="checked" {{/if}}> <span class="lbl"></span>\r\n            </label>\r\n        </td>\r\n        <td class="h-touristGroupInfo">\r\n            <p>中转单号：{{bus.orderNumber}}</p>\r\n            <p><span>&lt;{{bus.lineProductName}}&gt;</span></p>\r\n            <p><span>{{bus.startTime}}</span><span>{{bus.partnerAgencyName}}</span><span>外联销售：{{bus.outOPUserName}}</span></p>\r\n            <p>收客单号：{{bus.tgOrderNumber}}</p>\r\n        </td>\r\n        <td>\r\n        <span >{{if bus.shuttleType == 1}} 接团 {{else if bus.shuttleType == 2}} 送团{{/if}}</span>\r\n         <input type="hidden" name="shuttleType" value="{{if bus.shuttleType == 1}} 1 {{else if bus.shuttleType == 2}} 2{{/if}}" >\r\n        </td>\r\n        <td>\r\n            <p>{{bus.contactMemberName}}</p>\r\n            <p>{{bus.adultCount}}大{{bus.childCount}}小</p>\r\n        </td>\r\n        <td>{{bus.arriveTime}}</td>\r\n        <td>{{bus.shift}}</td>\r\n        <td>{{bus.require}}</td>\r\n        <td>\r\n            <a class="cursor T-arrange-item T-action">安排</a>\r\n            <a class="cursor T-view T-action">\r\n                <label class="padding-right20">|</label>查看\r\n        </td>\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="text-center">\r\n    <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" {{if !canMergeArrange}} disabled="disabled" {{/if}} data-right="1130004">\r\n        <i class="ace-icon fa fa-user-plus"></i> 统一安排\r\n    </button>\r\n</div>\r\n<div class="style=\'clear: both;\'"></div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="T-pagenation text-right">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});