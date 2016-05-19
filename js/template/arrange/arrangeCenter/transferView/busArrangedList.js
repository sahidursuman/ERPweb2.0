/*TMODJS:{"debug":true,"version":147,"md5":"a1494a2a8b295d37cca0cd1d6c8f82b7"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/busArrangedList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, unifyList = $data.unifyList, $escape = ($data.bus, 
            $data.$index, $data.buslist, $data.index, $utils.$escape), recordSize = ($data.businfo, 
            $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>车俩信息</th> <th>类型</th> <th>中转信息</th> <th>客人信息</th> <th>抵达时间</th> <th>班次</th> <th>要求</th> <th>安排人</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-busCompleted-list"> ', 
            $line = 17, $each(unifyList, function(bus) {
                $out += " ", $line = 18, $each(bus.outRemarkList, function(buslist, index) {
                    $out += ' <tr data-id = "', $line = 19, $out += $escape(bus.unifyId), $out += '"> ', 
                    $line = 20, 0 == index && ($out += ' <td class="h-touristGroupInfo" rowspan="', 
                    $line = 21, $out += $escape(bus.outRemarkList.length), $out += '"> ', $line = 22, 
                    $each(bus.busList, function(businfo) {
                        $out += "<p> <span>", $line = 23, $out += $escape(businfo.busCompanyName), $out += "</span> &nbsp;<span>", 
                        $line = 23, $out += $escape(businfo.licenseNumber), $out += "</span> </p>", $line = 24;
                    }), $out += " </td> ", $line = 26), $out += " ", $line = 27, 0 == index && ($out += ' <td rowspan="', 
                    $line = 28, $out += $escape(bus.outRemarkList.length), $out += '"> <span >', $line = 29, 
                    1 == bus.shuttleType ? ($out += " 接团 ", $line = 29) : 2 == bus.shuttleType && ($out += " 送团", 
                    $line = 29), $out += '</span> <input type="hidden" name="shuttleType" value="', 
                    $line = 30, 1 == buslist.shuttleType ? ($out += " 1 ", $line = 30) : 2 == buslist.shuttleType && ($out += " 2", 
                    $line = 30), $out += '" > </td> ', $line = 32), $out += ' <td class="h-touristGroupInfo"> <p>中转单号：', 
                    $line = 34, $out += $escape(buslist.orderNumber), $out += "</p> <p><span>", $line = 35, 
                    $out += $escape(buslist.lineProductName), $out += "</span></p> <p><span>", $line = 36, 
                    $out += $escape(buslist.startTime), $out += "</span><span>", $line = 36, $out += $escape(buslist.partnerAgencyName), 
                    $out += "</span><span>外联销售：", $line = 36, $out += $escape(buslist.outOPUserName), 
                    $out += "</span></p> <p>收客单号：", $line = 37, $out += $escape(buslist.tgOrderNumber), 
                    $out += "</p> </td> <td> <p><span>", $line = 40, $out += $escape(buslist.contactMemberName), 
                    $out += "</span></p> <p> ", $line = 41, $out += $escape(buslist.adultCount), $out += "大", 
                    $line = 41, $out += $escape(buslist.childCount), $out += "小</p> </td> <td>", $line = 43, 
                    $out += $escape(buslist.arriveTime), $out += "</td> <td>", $line = 44, $out += $escape(buslist.shift), 
                    $out += "</td> <td>", $line = 45, $out += $escape(buslist.require), $out += "</td> ", 
                    $line = 46, 0 == index && ($out += ' <td rowspan="', $line = 47, $out += $escape(bus.outRemarkList.length), 
                    $out += '">', $line = 47, $out += $escape(bus.arrangeUserName), $out += "</td> ", 
                    $line = 48), $out += " ", $line = 50, 0 == index && ($out += ' <td rowspan="', $line = 51, 
                    $out += $escape(bus.outRemarkList.length), $out += '">', $line = 51, 1 == buslist.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已完成', 
                    $line = 53) : ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i>未完成', 
                    $line = 54), $out += " </td> ", $line = 56), $out += " ", $line = 58, 0 == index && ($out += ' <td rowspan="', 
                    $line = 59, $out += $escape(bus.outRemarkList.length), $out += '">  <a class="cursor T-arrange-item T-action">  安排</a> <a class="cursor T-view T-action"> <label class="padding-right20">|</label>查看 </a> ', 
                    $line = 67, 1 == bus.isConfirmAccount ? ($out += ' <a class="cursor" style="color:#bbb;" data-catename="bus" title="取消"><label class="padding-right20">|</label>取消</a> ', 
                    $line = 68) : ($out += ' <a class="cursor T-action T-bus-cancel" data-catename="bus" title="取消"><label class="padding-right20">|</label>取消</a> ', 
                    $line = 70), $out += " </td> ", $line = 72), $out += " </tr> ", $line = 74;
                }), $out += " ", $line = 75;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 80, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur T-tr-fixed">\r\n            <th>车俩信息</th>\r\n            <th>类型</th>\r\n            <th>中转信息</th>\r\n            <th>客人信息</th>\r\n            <th>抵达时间</th>\r\n            <th>班次</th>\r\n            <th>要求</th>\r\n            <th>安排人</th>\r\n            <th>状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-busCompleted-list">\r\n        {{each unifyList as bus}}\r\n        {{each bus.outRemarkList as buslist index}}\r\n            <tr data-id = "{{bus.unifyId}}">\r\n            {{if index == 0}}\r\n            <td class="h-touristGroupInfo" rowspan="{{bus.outRemarkList.length}}">\r\n            {{each bus.busList as businfo }}<p>\r\n            <span>{{businfo.busCompanyName}}</span> &nbsp;<span>{{businfo.licenseNumber}}</span>\r\n            </p>{{/each}}\r\n            </td>\r\n            {{/if}}\r\n            {{if index == 0}}\r\n             <td rowspan="{{bus.outRemarkList.length}}">\r\n                <span >{{if bus.shuttleType == 1}} 接团 {{else if bus.shuttleType == 2}} 送团{{/if}}</span>\r\n                 <input type="hidden" name="shuttleType" value="{{if buslist.shuttleType == 1}} 1 {{else if buslist.shuttleType == 2}} 2{{/if}}" >\r\n            </td>\r\n            {{/if}}\r\n            <td class="h-touristGroupInfo">\r\n                <p>中转单号：{{buslist.orderNumber}}</p>\r\n                <p><span>{{buslist.lineProductName}}</span></p>\r\n                <p><span>{{buslist.startTime}}</span><span>{{buslist.partnerAgencyName}}</span><span>外联销售：{{buslist.outOPUserName}}</span></p>\r\n                <p>收客单号：{{buslist.tgOrderNumber}}</p>\r\n            </td>\r\n            <td>\r\n            <p><span>{{buslist.contactMemberName}}</span></p>\r\n                <p> {{buslist.adultCount}}大{{buslist.childCount}}小</p>\r\n            </td>\r\n            <td>{{buslist.arriveTime}}</td>\r\n            <td>{{buslist.shift}}</td>\r\n            <td>{{buslist.require}}</td>\r\n            {{if index == 0}}\r\n            <td rowspan="{{bus.outRemarkList.length}}">{{bus.arrangeUserName}}</td>\r\n            {{/if}}\r\n\r\n            {{if index == 0}}\r\n            <td rowspan="{{bus.outRemarkList.length}}">{{if buslist.status == 1}}\r\n            <i class="ace-icon fa fa-check green bigger-130"></i>\r\n            已完成{{else}}\r\n            <i class="ace-icon fa fa-times red bigger-125"></i>未完成{{/if}}\r\n            </td>\r\n            {{/if}}\r\n\r\n            {{if index == 0}}\r\n            <td rowspan="{{bus.outRemarkList.length}}">\r\n                <!-- <a class="cursor T-action T-inform">通知</a> -->\r\n                <a class="cursor T-arrange-item T-action">\r\n                    <!-- <label class="padding-right20">|</label>  -->\r\n                    安排</a>\r\n                <a class="cursor T-view T-action">\r\n                    <label class="padding-right20">|</label>查看\r\n                </a>\r\n                {{ if bus.isConfirmAccount == 1 }}\r\n                    <a class="cursor" style="color:#bbb;" data-catename="bus" title="取消"><label class="padding-right20">|</label>取消</a> {{else}}\r\n                    <a class="cursor T-action T-bus-cancel" data-catename="bus" title="取消"><label class="padding-right20">|</label>取消</a>\r\n                {{/if}}\r\n            </td>\r\n            {{/if}}\r\n        </tr>\r\n            {{/each}}\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});