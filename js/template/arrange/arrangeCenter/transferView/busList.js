/*TMODJS:{"debug":true,"version":212,"md5":"5e44db58d39b7dcdc8aca11e652f73ff"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/busList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), isFrame = $data.isFrame, $each = $utils.$each, outRemarkArrangeList = $data.outRemarkArrangeList, $escape = ($data.bus, 
            $data.$index, $utils.$escape), recordSize = ($data.itme, $data.recordSize), canMergeArrange = $data.canMergeArrange, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th><label class="pos-rel"><input type="checkbox" class="ace T-chekedAll"><span class="lbl"></span> 选择</label></th> <th>中转信息</th> <th>类型</th> <th>客人信息</th> <th>抵达/送离时间</th> <th>班次</th> <th>要求</th> ', 
            $line = 11, isFrame || ($out += " <th>操作</th> ", $line = 13), $out += ' </tr> </thead> <tbody class="T-bus-list"> ', 
            $line = 20, $each(outRemarkArrangeList, function(bus) {
                $out += ' <tr data-id="', $line = 21, $out += $escape(bus.id), $out += '" shuttleType = "', 
                $line = 21, $out += $escape(bus.shuttleType), $out += '" data-touristGroupId="', 
                $line = 21, $out += $escape(bus.touristGroupId), $out += '" ', $line = 21, bus.checked && ($out += ' class="success" ', 
                $line = 21), $out += '> <td> <label class="pos-rel"> <input type="hidden" name="outRemarkId" value="', 
                $line = 24, $out += $escape(bus.id), $out += '"> <input type="checkbox" class="ace T-cheked" ', 
                $line = 25, bus.checked && ($out += ' checked="checked" ', $line = 25), $out += '> <span class="lbl"></span> </label> </td> <td class="h-touristGroupInfo"> <p>中转单号：<span class="orderNumber">', 
                $line = 29, $out += $escape(bus.orderNumber), $out += '</span></p> <p><span><span class="lineProductName">', 
                $line = 30, $out += $escape(bus.lineProductName), $out += '</span></span></p> <p><span class="startTime">', 
                $line = 31, $out += $escape(bus.startTime), $out += '</span> <span class="partnerAgencyName">', 
                $line = 32, $out += $escape(bus.partnerAgencyName), $out += '</span>外联销售： <span class="outOPUserName">', 
                $line = 33, $out += $escape(bus.outOPUserName), $out += '</span></p> <p>收客单号：<span class="tgOrderNumber">', 
                $line = 34, $out += $escape(bus.tgOrderNumber), $out += '</span></p> </td> <td> <span class="shuttleType"> ', 
                $line = 38, 1 == bus.shuttleType ? ($out += " 接团 ", $line = 38) : 2 == bus.shuttleType && ($out += " 送团", 
                $line = 38), $out += ' </span> <input type="hidden" name="shuttleType" value="', 
                $line = 40, 1 == bus.shuttleType ? ($out += " 1 ", $line = 40) : 2 == bus.shuttleType && ($out += " 2", 
                $line = 40), $out += '"> </td> <td> <p></p> <p> <span class="adultCount">', $line = 45, 
                $out += $escape(bus.adultCount), $out += '</span>大 <span class="childCount">', $line = 46, 
                $out += $escape(bus.childCount), $out += "</span>小 </p> ", $line = 48, $each(bus.contactMemberList, function(itme) {
                    $out += ' <p><span class="contactMemberName">', $line = 49, $out += $escape(itme.contactMemberName), 
                    $out += '</span> <span class="contactMemberPhoneNumber">(', $line = 50, $out += $escape(itme.contactMemberPhoneNumber), 
                    $out += ")</span></p> ", $line = 51;
                }), $out += ' </td> <td><span class="arriveTime">', $line = 53, $out += $escape(bus.arriveTime), 
                $out += '</span></td> <td><span class="shift">', $line = 54, $out += $escape(bus.shift), 
                $out += '</span></td> <td><span class="require">', $line = 55, $out += $escape(bus.require), 
                $out += "</span></td> ", $line = 56, isFrame || ($out += ' <td> <a class="cursor T-arrange-item T-action R-right" data-right=\'1480001\'> 安排 </a> <a class="cursor T-view T-action"><label class="padding-right20">|</label> 查看</a> </td> ', 
                $line = 63), $out += " </tr> ", $line = 65;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 71, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="T-pagenation text-right"> </div> </div> </div> <div class="text-center"> ', 
            $line = 79, isFrame || ($out += ' <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" ', 
            $line = 80, canMergeArrange || ($out += ' disabled="disabled" ', $line = 80), $out += ' data-right="1130004"> <i class="ace-icon fa fa-user-plus"></i> 统一安排 </button> ', 
            $line = 83), $out += " </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th><label class="pos-rel"><input type="checkbox" class="ace T-chekedAll"><span class="lbl"></span> 选择</label></th>\r\n            <th>中转信息</th>\r\n            <th>类型</th>\r\n            <th>客人信息</th>\r\n            <th>抵达/送离时间</th>\r\n            <th>班次</th>\r\n            <th>要求</th>\r\n            {{if !isFrame}}\r\n            <th>操作</th>\r\n            {{/if}}\r\n        </tr>\r\n    </thead>\r\n\r\n    \r\n\r\n    <tbody class="T-bus-list">\r\n        {{each outRemarkArrangeList as bus}}\r\n        <tr data-id="{{bus.id}}" shuttleType = "{{bus.shuttleType}}" data-touristGroupId="{{bus.touristGroupId}}" {{if bus.checked}} class="success" {{/if}}>\r\n            <td>\r\n                <label class="pos-rel">\r\n                    <input type="hidden" name="outRemarkId" value="{{bus.id}}">\r\n                    <input type="checkbox" class="ace T-cheked" {{if bus.checked}} checked="checked" {{/if}}> <span class="lbl"></span>\r\n                </label>\r\n            </td>\r\n            <td class="h-touristGroupInfo">\r\n                <p>中转单号：<span class="orderNumber">{{bus.orderNumber}}</span></p>\r\n                <p><span><span class="lineProductName">{{bus.lineProductName}}</span></span></p>\r\n                <p><span class="startTime">{{bus.startTime}}</span>\r\n                <span class="partnerAgencyName">{{bus.partnerAgencyName}}</span>外联销售：\r\n                <span class="outOPUserName">{{bus.outOPUserName}}</span></p>\r\n                <p>收客单号：<span class="tgOrderNumber">{{bus.tgOrderNumber}}</span></p>\r\n            </td>\r\n            <td>\r\n                <span class="shuttleType">\r\n                    {{if bus.shuttleType == 1}} 接团 {{else if bus.shuttleType == 2}} 送团{{/if}}\r\n                </span>\r\n                <input type="hidden" name="shuttleType"  value="{{if bus.shuttleType == 1}} 1 {{else if bus.shuttleType == 2}} 2{{/if}}">\r\n            </td>\r\n            <td>\r\n                <p></p>\r\n                <p>\r\n                    <span class="adultCount">{{bus.adultCount}}</span>大\r\n                    <span class="childCount">{{bus.childCount}}</span>小\r\n                </p>\r\n                {{each bus.contactMemberList as itme}}\r\n                <p><span class="contactMemberName">{{itme.contactMemberName}}</span>\r\n                <span class="contactMemberPhoneNumber">({{itme.contactMemberPhoneNumber}})</span></p>\r\n                {{/each}}\r\n            </td>\r\n            <td><span class="arriveTime">{{bus.arriveTime}}</span></td>\r\n            <td><span class="shift">{{bus.shift}}</span></td>\r\n            <td><span class="require">{{bus.require}}</span></td>\r\n            {{if !isFrame}}\r\n            <td>\r\n                <a class="cursor T-arrange-item T-action R-right" data-right=\'1480001\'>\r\n                    安排 \r\n                </a>\r\n                <a class="cursor T-view T-action"><label class="padding-right20">|</label> 查看</a>\r\n            </td>\r\n            {{/if}}\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="clearfix"></div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="T-pagenation text-right">\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="text-center">\r\n    {{if !isFrame}}\r\n    <button class="btn btn-sm btn-success w-150 R-right T-merge-arrange" {{if !canMergeArrange}} disabled="disabled" {{/if}} data-right="1130004">\r\n        <i class="ace-icon fa fa-user-plus"></i> 统一安排\r\n    </button>\r\n    {{/if}}\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});