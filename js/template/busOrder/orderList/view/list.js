/*TMODJS:{"debug":true,"version":184,"md5":"6bd3054382a2b50cc87d65011f9ce4c7"}*/
define(function(require) {
    return require("../../../template")("busOrder/orderList/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, orderList = $data.orderList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $string = $utils.$string, recordSize = ($data.group, 
            $data.i, $data.member, $data.j, $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover table-text-center T-showHighLight"> <thead> <tr class="bg-blur"> <th>车队</th> <th>订单编号</th> <th>行程类型</th> <th>行程日期</th> <th>航班号/班次</th> <th>车辆要求</th> <th>游客人数</th> <th>游客联系人</th> <th>游客电话</th> <th>上车点</th> <th>目的地</th> <th>费用</th> <th>订单状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 21, $each(orderList, function(rs) {
                $out += ' <tr data-id="', $line = 22, $out += $escape(rs.id), $out += '" data-triptype="', 
                $line = 22, $out += $escape(rs.tripType.type), $out += '" data-companyid="', $line = 22, 
                $out += $escape(rs.companyId), $out += '"> <td rowspan="', $line = 23, $out += $escape(rs.touristGroupList.length || 1), 
                $out += '">', $line = 23, $out += $escape(rs.companyName), $out += '</td> <td rowspan="', 
                $line = 24, $out += $escape(rs.touristGroupList.length || 1), $out += '">', $line = 24, 
                $out += $escape(rs.orderNumber), $out += '</td> <td rowspan="', $line = 25, $out += $escape(rs.touristGroupList.length || 1), 
                $out += '">', $line = 25, $out += $string(rs.tripTypeName), $out += '</td> <td rowspan="', 
                $line = 26, $out += $escape(rs.touristGroupList.length || 1), $out += '">', $line = 26, 
                $out += $string(rs.tripTime), $out += '</td> <td rowspan="', $line = 27, $out += $escape(rs.touristGroupList.length || 1), 
                $out += '">', $line = 27, $out += $string(rs.shiftNumber), $out += '</td> <td rowspan="', 
                $line = 28, $out += $escape(rs.touristGroupList.length || 1), $out += '">', $line = 28, 
                $out += $string(rs.priceInfo), $out += "</td> ", $line = 29, 3 != rs.tripType.type ? ($out += " ", 
                $line = 30, $each(rs.touristGroupList, function(group, i) {
                    $out += " ", $line = 31, 0 == i && ($out += " <td>", $line = 32, $out += $escape(group.memberCountInfo), 
                    $out += '</td> <td class="has-div"> ', $line = 34, $each(group.memberList, function(member, j) {
                        $out += ' <div class="td-div ', $line = 35, j > 0 && ($out += "border-top1", $line = 35), 
                        $out += '">', $line = 35, $out += $escape(member.name), $out += "</div> ", $line = 36;
                    }), $out += ' </td> <td class="has-div"> ', $line = 39, $each(group.memberList, function(member, j) {
                        $out += ' <div class="td-div ', $line = 40, j > 0 && ($out += "border-top1", $line = 40), 
                        $out += '">', $line = 40, $out += $escape(member.moblieNumber), $out += "</div> ", 
                        $line = 41;
                    }), $out += ' </td> <td class="has-div"> <div class="', $line = 44, 1 == group.memberList.length && ($out += "td-div", 
                    $line = 44), $out += '" ', $line = 44, group.memberList.length > 1 && ($out += 'style="padding-bottom:', 
                    $line = 44, $out += $escape(35 * group.memberList.length / 4 - 9), $out += 'px"', 
                    $line = 44), $out += "> ", $line = 45, $out += $escape(group.startPosition), $out += " </div> ", 
                    $line = 47, "1" == rs.isRoundTrip && ($out += ' <div class="border-top1 ', $line = 48, 
                    1 == group.memberList.length && ($out += "td-div", $line = 48), $out += '" ', $line = 48, 
                    group.memberList.length > 1 && ($out += 'style="padding-top:', $line = 48, $out += $escape(35 * group.memberList.length / 4 - 9), 
                    $out += 'px"', $line = 48), $out += "> ", $line = 49, $out += $escape(group.roundStartPosition), 
                    $out += " </div> ", $line = 51), $out += ' </td> <td class="has-div"> <div class="', 
                    $line = 54, 1 == group.memberList.length && ($out += "td-div", $line = 54), $out += '" ', 
                    $line = 54, group.memberList.length > 1 && ($out += 'style="padding-bottom:', $line = 54, 
                    $out += $escape(35 * group.memberList.length / 4 - 9), $out += 'px"', $line = 54), 
                    $out += "> ", $line = 55, $out += $escape(group.toPosition), $out += " </div> ", 
                    $line = 57, "1" == rs.isRoundTrip && ($out += ' <div class="border-top1 ', $line = 58, 
                    1 == group.memberList.length && ($out += "td-div", $line = 58), $out += '" ', $line = 58, 
                    group.memberList.length > 1 && ($out += 'style="padding-top:', $line = 58, $out += $escape(35 * group.memberList.length / 4 - 9), 
                    $out += 'px"', $line = 58), $out += "> ", $line = 59, $out += $escape(group.roundToPosition), 
                    $out += " </div> ", $line = 61), $out += " </td> ", $line = 63), $out += " ", $line = 64;
                }), $out += " ", $line = 65) : ($out += " <td>", $line = 66, $out += $escape(rs.adultCount), 
                $out += "大", $line = 66, $out += $escape(rs.childCount), $out += "小</td> <td>-</td> <td>-</td> <td>", 
                $line = 69, $out += $escape(rs.togetherPosition), $out += "</td> <td>-</td> ", $line = 71), 
                $out += ' <td rowspan="', $line = 72, $out += $escape(rs.touristGroupList.length || 1), 
                $out += '">', $line = 72, ("1" == rs.orderStatus || "3" == rs.orderStatus) && ($line = 72, 
                $out += $escape(rs.comfirmNeedPayMoney), $out += "元(回复价)<br/>", $line = 72), $out += '<span class="', 
                $line = 72, ("1" == rs.orderStatus || "3" == rs.orderStatus) && ($out += "textd-line", 
                $line = 72), $out += '">', $line = 72, $out += $escape(rs.needPayMoney), $out += '元(申请价)</span></td> <td rowspan="', 
                $line = 73, $out += $escape(rs.touristGroupList.length || 1), $out += '" ', $line = 73, 
                "6" == rs.orderStatus && ($out += 'class="red"', $line = 73), $out += ">", $line = 73, 
                $out += $escape(rs.orderStatusText), $out += '</td> <td rowspan="', $line = 74, 
                $out += $escape(rs.touristGroupList.length || 1), $out += '"> ', $line = 75, $out += $string($helpers.getOrderStatusListBtn(rs.orderStatus)), 
                $out += " </td> </tr> ", $line = 78, $each(rs.touristGroupList, function(group, i) {
                    $out += " ", $line = 79, i > 0 && ($out += " <tr> <td>", $line = 81, $out += $escape(group.memberCountInfo), 
                    $out += '</td> <td class="has-div"> ', $line = 83, $each(group.memberList, function(member, j) {
                        $out += ' <div class="td-div ', $line = 84, j > 0 && ($out += "border-top1", $line = 84), 
                        $out += '">', $line = 84, $out += $escape(member.name), $out += "</div> ", $line = 85;
                    }), $out += ' </td> <td class="has-div"> ', $line = 88, $each(group.memberList, function(member, j) {
                        $out += ' <div class="td-div ', $line = 89, j > 0 && ($out += "border-top1", $line = 89), 
                        $out += '">', $line = 89, $out += $escape(member.moblieNumber), $out += "</div> ", 
                        $line = 90;
                    }), $out += ' </td> <td class="has-div"> <div class="', $line = 93, 1 == group.memberList.length && ($out += "td-div", 
                    $line = 93), $out += '" ', $line = 93, group.memberList.length > 1 && ($out += 'style="padding-bottom:', 
                    $line = 93, $out += $escape(35 * group.memberList.length / 4 - 9), $out += 'px"', 
                    $line = 93), $out += "> ", $line = 94, $out += $escape(group.startPosition), $out += " </div> ", 
                    $line = 96, "1" == rs.isRoundTrip && ($out += ' <div class="border-top1 ', $line = 97, 
                    1 == group.memberList.length && ($out += "td-div", $line = 97), $out += '" ', $line = 97, 
                    group.memberList.length > 1 && ($out += 'style="padding-top:', $line = 97, $out += $escape(35 * group.memberList.length / 4 - 9), 
                    $out += 'px"', $line = 97), $out += "> ", $line = 98, $out += $escape(group.roundStartPosition), 
                    $out += " </div> ", $line = 100), $out += ' </td> <td class="has-div"> <div class="', 
                    $line = 103, 1 == group.memberList.length && ($out += "td-div", $line = 103), $out += '" ', 
                    $line = 103, group.memberList.length > 1 && ($out += 'style="padding-bottom:', $line = 103, 
                    $out += $escape(35 * group.memberList.length / 4 - 9), $out += 'px"', $line = 103), 
                    $out += "> ", $line = 104, $out += $escape(group.toPosition), $out += " </div> ", 
                    $line = 106, "1" == rs.isRoundTrip && ($out += ' <div class="border-top1 ', $line = 107, 
                    1 == group.memberList.length && ($out += "td-div", $line = 107), $out += '" ', $line = 107, 
                    group.memberList.length > 1 && ($out += 'style="padding-top:', $line = 107, $out += $escape(35 * group.memberList.length / 4 - 9), 
                    $out += 'px"', $line = 107), $out += "> ", $line = 108, $out += $escape(group.roundToPosition), 
                    $out += " </div> ", $line = 110), $out += " </td> </tr> ", $line = 113), $out += " ", 
                    $line = 114;
                }), $out += " ", $line = 115;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 120, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover table-text-center T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>车队</th>\r\n            <th>订单编号</th>\r\n            <th>行程类型</th>\r\n            <th>行程日期</th>\r\n            <th>航班号/班次</th>\r\n            <th>车辆要求</th>\r\n            <th>游客人数</th>\r\n            <th>游客联系人</th>\r\n            <th>游客电话</th>\r\n            <th>上车点</th>\r\n            <th>目的地</th>\r\n            <th>费用</th>\r\n            <th>订单状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        {{each orderList as rs index}}\r\n        <tr data-id="{{rs.id}}" data-triptype="{{rs.tripType.type}}" data-companyid="{{rs.companyId}}">\r\n            <td rowspan="{{rs.touristGroupList.length || 1}}">{{rs.companyName}}</td>\r\n            <td rowspan="{{rs.touristGroupList.length || 1}}">{{rs.orderNumber}}</td>\r\n            <td rowspan="{{rs.touristGroupList.length || 1}}">{{#rs.tripTypeName}}</td>\r\n            <td rowspan="{{rs.touristGroupList.length || 1}}">{{#rs.tripTime}}</td>\r\n            <td rowspan="{{rs.touristGroupList.length || 1}}">{{#rs.shiftNumber}}</td>\r\n            <td rowspan="{{rs.touristGroupList.length || 1}}">{{#rs.priceInfo}}</td>\r\n            {{if rs.tripType.type != 3}}\r\n            {{each rs.touristGroupList as group i}}\r\n            {{if i == 0}}\r\n            <td>{{group.memberCountInfo}}</td>\r\n            <td class="has-div">\r\n                {{each group.memberList as member j}}\r\n                    <div class="td-div {{if j > 0}}border-top1{{/if}}">{{member.name}}</div>\r\n                {{/each}}\r\n            </td>\r\n            <td class="has-div">\r\n                {{each group.memberList as member j}}\r\n                    <div class="td-div {{if j > 0}}border-top1{{/if}}">{{member.moblieNumber}}</div>\r\n                {{/each}}\r\n            </td>\r\n            <td class="has-div">\r\n                <div class="{{if group.memberList.length == 1}}td-div{{/if}}" {{if group.memberList.length > 1}}style="padding-bottom:{{group.memberList.length*35/4-9}}px"{{/if}}>\r\n                    {{group.startPosition}}\r\n                </div>\r\n                {{if rs.isRoundTrip == \'1\'}}\r\n                <div class="border-top1  {{if group.memberList.length == 1}}td-div{{/if}}" {{if group.memberList.length > 1}}style="padding-top:{{group.memberList.length*35/4-9}}px"{{/if}}>\r\n                    {{group.roundStartPosition}}\r\n                </div>\r\n                {{/if}}\r\n            </td>\r\n            <td class="has-div">\r\n                <div class="{{if group.memberList.length == 1}}td-div{{/if}}" {{if group.memberList.length > 1}}style="padding-bottom:{{group.memberList.length*35/4-9}}px"{{/if}}>\r\n                    {{group.toPosition}}\r\n                </div>\r\n                {{if rs.isRoundTrip == \'1\'}}\r\n                <div class="border-top1 {{if group.memberList.length == 1}}td-div{{/if}}" {{if group.memberList.length > 1}}style="padding-top:{{group.memberList.length*35/4-9}}px"{{/if}}>\r\n                    {{group.roundToPosition}}\r\n                </div>\r\n                {{/if}}\r\n            </td>\r\n            {{/if}}\r\n            {{/each}}\r\n            {{else}}\r\n            <td>{{rs.adultCount}}大{{rs.childCount}}小</td>\r\n            <td>-</td>\r\n            <td>-</td>\r\n            <td>{{rs.togetherPosition}}</td>\r\n            <td>-</td>\r\n            {{/if}}\r\n            <td rowspan="{{rs.touristGroupList.length || 1}}">{{if rs.orderStatus == \'1\' || rs.orderStatus == \'3\'}}{{rs.comfirmNeedPayMoney}}元(回复价)<br/>{{/if}}<span class="{{if rs.orderStatus == \'1\' || rs.orderStatus == \'3\'}}textd-line{{/if}}">{{rs.needPayMoney}}元(申请价)</span></td>\r\n            <td rowspan="{{rs.touristGroupList.length || 1}}" {{if rs.orderStatus == \'6\'}}class="red"{{/if}}>{{rs.orderStatusText}}</td>\r\n            <td rowspan="{{rs.touristGroupList.length || 1}}">\r\n                {{#rs.orderStatus | getOrderStatusListBtn}}\r\n            </td>\r\n        </tr>\r\n        {{each rs.touristGroupList as group i}}\r\n        {{if i > 0}}\r\n        <tr>\r\n            <td>{{group.memberCountInfo}}</td>\r\n            <td class="has-div">\r\n                {{each group.memberList as member j}}\r\n                    <div class="td-div {{if j > 0}}border-top1{{/if}}">{{member.name}}</div>\r\n                {{/each}}\r\n            </td>\r\n            <td class="has-div">\r\n                {{each group.memberList as member j}}\r\n                    <div class="td-div {{if j > 0}}border-top1{{/if}}">{{member.moblieNumber}}</div>\r\n                {{/each}}\r\n            </td>\r\n            <td class="has-div">\r\n                <div class="{{if group.memberList.length == 1}}td-div{{/if}}" {{if group.memberList.length > 1}}style="padding-bottom:{{group.memberList.length*35/4-9}}px"{{/if}}>\r\n                    {{group.startPosition}}\r\n                </div>\r\n                {{if rs.isRoundTrip == \'1\'}}\r\n                <div class="border-top1  {{if group.memberList.length == 1}}td-div{{/if}}" {{if group.memberList.length > 1}}style="padding-top:{{group.memberList.length*35/4-9}}px"{{/if}}>\r\n                    {{group.roundStartPosition}}\r\n                </div>\r\n                {{/if}}\r\n            </td>\r\n            <td class="has-div">\r\n                <div class="{{if group.memberList.length == 1}}td-div{{/if}}" {{if group.memberList.length > 1}}style="padding-bottom:{{group.memberList.length*35/4-9}}px"{{/if}}>\r\n                    {{group.toPosition}}\r\n                </div>\r\n                {{if rs.isRoundTrip == \'1\'}}\r\n                <div class="border-top1 {{if group.memberList.length == 1}}td-div{{/if}}" {{if group.memberList.length > 1}}style="padding-top:{{group.memberList.length*35/4-9}}px"{{/if}}>\r\n                    {{group.roundToPosition}}\r\n                </div>\r\n                {{/if}}\r\n            </td>\r\n        </tr>\r\n        {{/if}}\r\n        {{/each}}\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-4">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-8">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});