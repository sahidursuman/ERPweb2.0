/*TMODJS:{"debug":true,"version":37,"md5":"b9a51addf091e243bf8a48632ea59291"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/transfer/busList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), isFrame = $data.isFrame, $each = $utils.$each, outRemarkArrangeList = $data.outRemarkArrangeList, $escape = ($data.bus, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, canMergeArrange = $data.canMergeArrange, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>选择</th> <th>中转信息</th> <th>类型</th> <th>客人信息</th> <th>抵达时间</th> <th>班次</th> <th>要求</th> ', 
            $line = 11, isFrame || ($out += " <th>操作</th> ", $line = 13), $out += ' </tr> </thead> <tbody class="T-bus-list"> ', 
            $line = 17, $each(outRemarkArrangeList, function(bus) {
                $out += ' <tr data-id="', $line = 18, $out += $escape(bus.outRemarkId), $out += '" ', 
                $line = 18, bus.checked && ($out += ' class="success" ', $line = 18), $out += '> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-cheked" ', 
                $line = 21, bus.checked && ($out += ' checked="checked" ', $line = 21), $out += '> <span class="lbl"></span> </label> </td> <td class="h-touristGroupInfo"> <p>中转单号：<span class="orderNumber">', 
                $line = 25, $out += $escape(bus.orderNumber), $out += '</span></p> <p><span>&lt;<span class="lineProductName">', 
                $line = 26, $out += $escape(bus.lineProductName), $out += '</span>&gt;</span></p> <p><span class="startTime">', 
                $line = 27, $out += $escape(bus.startTime), $out += '</span> <span class="partnerAgencyName">', 
                $line = 28, $out += $escape(bus.partnerAgencyName), $out += '</span>外联销售： <span class="outOPUserName">', 
                $line = 29, $out += $escape(bus.outOPUserName), $out += '</span></p> <p>收客单号：<span class="tgOrderNumber">', 
                $line = 30, $out += $escape(bus.tgOrderNumber), $out += "</span></p> </td> <td> <span>", 
                $line = 33, 1 == bus.shuttleType ? ($out += " 接团 ", $line = 33) : 2 == bus.shuttleType && ($out += " 送团", 
                $line = 33), $out += '</span> <input type="hidden" name="shuttleType" value="', 
                $line = 34, 1 == bus.shuttleType ? ($out += " 1 ", $line = 34) : 2 == bus.shuttleType && ($out += " 2", 
                $line = 34), $out += '"> </td> <td> <p><span cals="contactMemberName">', $line = 37, 
                $out += $escape(bus.contactMemberName), $out += '</span></p> <p> <span class="adultCount">', 
                $line = 39, $out += $escape(bus.adultCount), $out += '</span>大 <span class="childCount">', 
                $line = 40, $out += $escape(bus.childCount), $out += "</span>小 </p> </td> <td>", 
                $line = 43, $out += $escape(bus.arriveTime), $out += "</td> <td>", $line = 44, $out += $escape(bus.shift), 
                $out += "</td> <td>", $line = 45, $out += $escape(bus.require), $out += "</td> ", 
                $line = 46, isFrame || ($out += ' <td> <a class="cursor T-arrange-item T-action">安排</a> <a class="cursor T-view T-action"> <label class="padding-right20">|</label>查看 </td> ', 
                $line = 52), $out += " </tr> ", $line = 54;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 60, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="T-pagenation text-right"> </div> </div> </div> <div class="text-center"> ', 
            $line = 68, isFrame || ($out += ' <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" ', 
            $line = 69, canMergeArrange || ($out += ' disabled="disabled" ', $line = 69), $out += ' data-right="1130004"> <i class="ace-icon fa fa-user-plus"></i> 统一安排 </button> ', 
            $line = 72), $out += " </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur T-tr-fixed">\r\n            <th>选择</th>\r\n            <th>中转信息</th>\r\n            <th>类型</th>\r\n            <th>客人信息</th>\r\n            <th>抵达时间</th>\r\n            <th>班次</th>\r\n            <th>要求</th>\r\n            {{if !isFrame}}\r\n            <th>操作</th>\r\n            {{/if}}\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-bus-list">\r\n        {{each outRemarkArrangeList as bus}}\r\n        <tr data-id="{{bus.outRemarkId}}" {{if bus.checked}} class="success" {{/if}}>\r\n            <td>\r\n                <label class="pos-rel">\r\n                    <input type="checkbox" class="ace T-cheked" {{if bus.checked}} checked="checked" {{/if}}> <span class="lbl"></span>\r\n                </label>\r\n            </td>\r\n            <td class="h-touristGroupInfo">\r\n                <p>中转单号：<span class="orderNumber">{{bus.orderNumber}}</span></p>\r\n                <p><span>&lt;<span class="lineProductName">{{bus.lineProductName}}</span>&gt;</span></p>\r\n                <p><span class="startTime">{{bus.startTime}}</span>\r\n                <span class="partnerAgencyName">{{bus.partnerAgencyName}}</span>外联销售：\r\n                <span class="outOPUserName">{{bus.outOPUserName}}</span></p>\r\n                <p>收客单号：<span class="tgOrderNumber">{{bus.tgOrderNumber}}</span></p>\r\n            </td>\r\n            <td>\r\n                <span>{{if bus.shuttleType == 1}} 接团 {{else if bus.shuttleType == 2}} 送团{{/if}}</span>\r\n                <input type="hidden" name="shuttleType" value="{{if bus.shuttleType == 1}} 1 {{else if bus.shuttleType == 2}} 2{{/if}}">\r\n            </td>\r\n            <td>\r\n                <p><span cals="contactMemberName">{{bus.contactMemberName}}</span></p>\r\n                <p>\r\n                    <span class="adultCount">{{bus.adultCount}}</span>大\r\n                    <span class="childCount">{{bus.childCount}}</span>小\r\n                </p>\r\n            </td>\r\n            <td>{{bus.arriveTime}}</td>\r\n            <td>{{bus.shift}}</td>\r\n            <td>{{bus.require}}</td>\r\n            {{if !isFrame}}\r\n            <td>\r\n                <a class="cursor T-arrange-item T-action">安排</a>\r\n                <a class="cursor T-view T-action">\r\n                    <label class="padding-right20">|</label>查看\r\n            </td>\r\n            {{/if}}\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="clearfix"></div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="T-pagenation text-right">\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="text-center">\r\n    {{if !isFrame}}\r\n    <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" {{if !canMergeArrange}} disabled="disabled" {{/if}} data-right="1130004">\r\n        <i class="ace-icon fa fa-user-plus"></i> 统一安排\r\n    </button>\r\n    {{/if}}\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});