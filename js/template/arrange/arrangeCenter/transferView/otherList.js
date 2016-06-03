/*TMODJS:{"debug":true,"version":142,"md5":"ca86dbecd0208c973f58d46edb6b34eb"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/otherList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, outOtherList = $data.outOtherList, $escape = ($data.item, 
            $data.$index, $utils.$escape), recordSize = ($data.itmes, $data.list, $data.arrange, 
            $data.level2, $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>中转信息</th> <th>类型</th> <th>客人信息</th> <th>消费时间</th> <th>分类</th> <th>要求</th> <th>安排结果</th> <th>安排人</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-its-list">  ', 
            $line = 18, $each(outOtherList, function(item) {
                $out += ' <tr data-id="', $line = 19, $out += $escape(item.outRemarkId), $out += '" data-shuttleType="', 
                $line = 19, $out += $escape(item.shuttleType), $out += '"> <td class="h-touristGroupInfo" rowspan="', 
                $line = 20, $out += $escape(item.size), $out += '"> <p>中转单号：', $line = 21, $out += $escape(item.orderNumber), 
                $out += "</p> <p><span>", $line = 22, $out += $escape(item.lineProductName), $out += "</span></p> <p><span>", 
                $line = 23, $out += $escape(item.startTime), $out += "</span><span>", $line = 23, 
                $out += $escape(item.partnerAgencyName), $out += "</span><span>外联销售：", $line = 23, 
                $out += $escape(item.outOPUserName), $out += "</span></p> <p>收客单号：", $line = 24, 
                $out += $escape(item.tgOrderNumber), $out += '</p> </td> <td rowspan="', $line = 26, 
                $out += $escape(item.size), $out += '"> ', $line = 27, 1 == item.shuttleType ? ($out += "接团 ", 
                $line = 28) : 2 == item.shuttleType && ($out += "送团", $line = 28), $out += ' </td> <td rowspan="', 
                $line = 30, $out += $escape(item.size), $out += '"> <p>', $line = 31, $out += $escape(item.adultCount), 
                $out += "大", $line = 31, $out += $escape(item.childCount), $out += "小</p> ", $line = 32, 
                $each(item.contactMemberList, function(itmes) {
                    $out += ' <p><span class="contactMemberName">', $line = 33, $out += $escape(itmes.contactMemberName), 
                    $out += '</span> <span class="contactMemberPhoneNumber">(', $line = 34, $out += $escape(itmes.contactMemberPhoneNumber), 
                    $out += ")</span></p> ", $line = 35;
                }), $out += ' </td> <td rowspan="', $line = 37, $out += $escape(item.size), $out += '"> ', 
                $line = 38, $out += $escape(item.consumeTime), $out += " </td> <td> ", $line = 43, 
                item.arrangeItems.length > 0 ? ($out += " ", $line = 44, "ticket" == item.arrangeItems[0].arrangeType ? ($out += " 票 ", 
                $line = 45) : "restaurant" == item.arrangeItems[0].arrangeType ? ($out += "餐 ", 
                $line = 46) : "other" == item.arrangeItems[0].arrangeType && ($out += "它 ", $line = 47), 
                $out += " ", $line = 48) : ($out += " - ", $line = 50), $out += " </td> <td> ", 
                $line = 53, item.arrangeItems.length > 0 ? ($out += " ", $line = 54, $out += $escape(item.arrangeItems[0].require), 
                $out += " ", $line = 55) : ($out += " - ", $line = 57), $out += ' </td>  <td class="h-touristGroupInfo"> ', 
                $line = 62, item.arrangeItems.length > 0 ? ($out += " ", $line = 63, item.arrangeItems[0].arrangeResultList.length && ($out += " ", 
                $line = 64, $each(item.arrangeItems[0].arrangeResultList, function(list) {
                    $out += ' <p class="inline-block">  ', $line = 67, $out += $escape(list.name), $out += "  ", 
                    $line = 69, $out += $escape(list.shift), $out += " </p> ", $line = 71;
                }), $out += " ", $line = 72), $out += " ", $line = 73) : ($out += " - ", $line = 75), 
                $out += ' </td> <td rowspan="', $line = 77, $out += $escape(item.size), $out += '"> ', 
                $line = 78, item.arrangeItems.length > 0 ? ($out += " ", $line = 79, $out += $escape(item.arrangeUserName), 
                $out += " ", $line = 80) : ($out += " - ", $line = 82), $out += " </td> <td> ", 
                $line = 85, item.arrangeItems.length > 0 ? ($out += " ", $line = 86, 1 == item.arrangeItems[0].status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已完成 ', 
                $line = 88) : 0 == item.arrangeItems[0].status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 未完成 ', 
                $line = 90), $out += " </td> ", $line = 93) : ($out += " - ", $line = 95), $out += ' <td rowspan="', 
                $line = 96, $out += $escape(item.size), $out += '"> ', $line = 97, 1 == item.status && ($out += ' <a class="cursor T-arrage T-inform T-action"> 通知 <label class="padding-right20">|</label> </a> ', 
                $line = 100), $out += ' <a class="cursor T-arrage T-arrange-item T-action R-right" data-right=\'1480005\'> 安排 </a> <a class="cursor T-arrage T-view T-action"> <label class="padding-right20">|</label> 查看 </a> </td> </tr> ', 
                $line = 108, $each(item.arrangeItems, function(arrange, level2) {
                    $out += " ", $line = 109, level2 > 0 && ($out += " <tr> <td> ", $line = 112, "ticket" == arrange.arrangeType ? ($out += " 票 ", 
                    $line = 113) : "restaurant" == arrange.arrangeType ? ($out += "餐 ", $line = 114) : "other" == arrange.arrangeType && ($out += "它 ", 
                    $line = 115), $out += " </td> <td>", $line = 117, $out += $escape(arrange.require), 
                    $out += '</td>  <td class="h-touristGroupInfo"> ', $line = 121, $each(arrange.arrangeResultList, function(list) {
                        $out += ' <p class="inline-block">  ', $line = 124, $out += $escape(list.name), 
                        $out += "  ", $line = 126, $out += $escape(list.shift), $out += " </p> ", $line = 128;
                    }), $out += " </td> <td> ", $line = 132, 1 == arrange.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已完成 ', 
                    $line = 134) : 0 == arrange.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 未完成 ', 
                    $line = 136), $out += " </td> </tr> ", $line = 139), $out += " ", $line = 140;
                }), $out += " ", $line = 141;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 146, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover  T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>中转信息</th>\r\n            <th>类型</th>\r\n            <th>客人信息</th>\r\n            <th>消费时间</th>\r\n            <th>分类</th>\r\n            <th>要求</th>\r\n            <th>安排结果</th>\r\n            <th>安排人</th>\r\n            <th>状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-its-list">\r\n    <!-- 它 -->\r\n    {{each outOtherList as item}}\r\n        <tr data-id="{{item.outRemarkId}}" data-shuttleType="{{item.shuttleType}}">\r\n            <td class="h-touristGroupInfo" rowspan="{{item.size}}">\r\n                <p>中转单号：{{item.orderNumber}}</p>\r\n                <p><span>{{item.lineProductName}}</span></p>\r\n                <p><span>{{item.startTime}}</span><span>{{item.partnerAgencyName}}</span><span>外联销售：{{item.outOPUserName}}</span></p>\r\n                <p>收客单号：{{item.tgOrderNumber}}</p>\r\n            </td>\r\n            <td  rowspan="{{item.size}}">\r\n                {{if item.shuttleType == 1 }}接团\r\n                {{else if item.shuttleType == 2}}送团{{/if}}            \r\n            </td>\r\n            <td  rowspan="{{item.size}}">\r\n                <p>{{item.adultCount}}大{{item.childCount}}小</p>\r\n                {{each item.contactMemberList as itmes}}\r\n                <p><span class="contactMemberName">{{itmes.contactMemberName}}</span>\r\n                <span class="contactMemberPhoneNumber">({{itmes.contactMemberPhoneNumber}})</span></p>\r\n                {{/each}}\r\n            </td>\r\n            <td rowspan="{{item.size}}">\r\n                {{item.consumeTime}}\r\n            </td>\r\n\r\n            \r\n            <td>\r\n            {{if item.arrangeItems.length > 0}}\r\n                {{if item.arrangeItems[0].arrangeType == \'ticket\' }} 票\r\n                     {{else if item.arrangeItems[0].arrangeType == \'restaurant\' }}餐\r\n                     {{else if item.arrangeItems[0].arrangeType == \'other\' }}它\r\n                {{/if}}\r\n            {{else}}\r\n            -\r\n            {{/if}}\r\n            </td>\r\n            <td>\r\n            {{if item.arrangeItems.length > 0}}\r\n            {{item.arrangeItems[0].require}}\r\n             {{else}}\r\n            -\r\n            {{/if}}\r\n            </td>\r\n\r\n            <!-- 具体安排 -->\r\n            <td class="h-touristGroupInfo">\r\n            {{if item.arrangeItems.length > 0}}\r\n            {{if item.arrangeItems[0].arrangeResultList.length}}\r\n                {{each item.arrangeItems[0].arrangeResultList as list}}\r\n                <p class="inline-block">\r\n                <!-- 项目名称 -->\r\n                {{list.name}}\r\n                <!-- 如果是票，显示班次 -->\r\n                {{list.shift}}\r\n                </p>\r\n                {{/each}}\r\n            {{/if}}\r\n             {{else}}\r\n            -\r\n            {{/if}}\r\n            </td>\r\n            <td rowspan="{{item.size}}">\r\n            {{if item.arrangeItems.length > 0}}\r\n            {{item.arrangeUserName}}\r\n            {{else}}\r\n            -\r\n            {{/if}}\r\n            </td>\r\n            <td>\r\n            {{if item.arrangeItems.length > 0}}\r\n                {{if item.arrangeItems[0].status == 1}}\r\n                    <i class="ace-icon fa fa-check green bigger-130"></i> 已完成\r\n                {{else if item.arrangeItems[0].status == 0}}\r\n                    <i class="ace-icon fa fa-times red bigger-125"></i> 未完成\r\n                {{/if}}\r\n            \r\n            </td>\r\n            {{else}}\r\n            -\r\n            {{/if}}\r\n            <td rowspan="{{item.size}}">\r\n                {{if item.status == 1}}\r\n                <a class="cursor T-arrage T-inform T-action"> \r\n                通知 <label class="padding-right20">|</label> </a>\r\n                {{/if}}\r\n                <a class="cursor T-arrage T-arrange-item T-action R-right" data-right=\'1480005\'>\r\n                     安排\r\n                </a>\r\n                <a class="cursor T-arrage T-view T-action">  <label class="padding-right20">|</label> 查看 </a>\r\n            </td>\r\n        </tr>\r\n\r\n            {{each item.arrangeItems as arrange level2}}\r\n            {{if level2 > 0}}\r\n            <tr>\r\n                <td>\r\n                    {{if arrange.arrangeType == \'ticket\' }} 票\r\n                         {{else if arrange.arrangeType == \'restaurant\' }}餐\r\n                         {{else if arrange.arrangeType == \'other\' }}它\r\n                    {{/if}}\r\n                </td>\r\n                <td>{{arrange.require}}</td>\r\n\r\n                <!-- 具体安排 -->\r\n                <td class="h-touristGroupInfo">\r\n                {{each arrange.arrangeResultList as list}}\r\n                    <p  class="inline-block">\r\n                    <!-- 项目名称 -->\r\n                    {{list.name}}\r\n                    <!-- 如果是票，显示班次 -->\r\n                    {{list.shift}}\r\n                    </p>\r\n                {{/each}}\r\n                </td>\r\n\r\n                <td>\r\n                    {{if arrange.status == 1}}\r\n                        <i class="ace-icon fa fa-check green bigger-130"></i> 已完成\r\n                    {{else if arrange.status == 0}}\r\n                        <i class="ace-icon fa fa-times red bigger-125"></i> 未完成\r\n                    {{/if}}\r\n                </td>\r\n            </tr>\r\n            {{/if}}\r\n            {{/each}}\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});