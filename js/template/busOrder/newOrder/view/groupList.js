/*TMODJS:{"debug":true,"version":95,"md5":"9bfc6807bc1af652c68d7bf547ac71d2"}*/
define(function(require) {
    return require("../../../template")("customer/newOrder/view/groupList", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, touristGroupList = $data.touristGroupList, $each = $utils.$each, $escape = ($data.group, 
            $data.$index, $utils.$escape), $out = ($data.rs, $data.index, "");
            return $line = 1, touristGroupList.length && ($out += " ", $line = 2, $each(touristGroupList, function(group) {
                $out += ' <tr class="T-sort" data-index="', $line = 3, $out += $escape(group.touristGroupMemberList.length), 
                $out += '" data-id="', $line = 3, $out += $escape(group.id), $out += '" data-content="', 
                $line = 3, $out += $escape($helpers.stringify(group)), $out += '" data-adultcount="', 
                $line = 3, $out += $escape(group.adultCount), $out += '" data-childCount="', $line = 3, 
                $out += $escape(group.childCount), $out += '"> <td rowspan="', $line = 4, $out += $escape(group.touristGroupMemberList.length), 
                $out += '"></td> <td rowspan="', $line = 5, $out += $escape(group.touristGroupMemberList.length), 
                $out += '">', $line = 5, $out += $escape(group.tripNumber), $out += "</td> ", $line = 6, 
                group.touristGroupMemberList.length ? ($out += " ", $line = 7, $each(group.touristGroupMemberList, function(rs, index) {
                    $out += " ", $line = 8, 0 == index && ($out += " <td>", $line = 9, $out += $escape(rs.name), 
                    $out += "</td> <td>", $line = 10, $out += $escape(rs.mobileNumber), $out += "</td> ", 
                    $line = 11), $out += " ", $line = 12;
                }), $out += " ", $line = 13) : ($out += " <td></td> <td></td> ", $line = 16), $out += ' <td rowspan="', 
                $line = 17, $out += $escape(group.touristGroupMemberList.length), $out += '">', 
                $line = 17, $out += $escape(group.adultCount), $out += "大", $line = 17, $out += $escape(group.childCount), 
                $out += '小</td> <td class="has-div" rowspan="', $line = 18, $out += $escape(group.touristGroupMemberList.length), 
                $out += '"> <div ', $line = 19, group.touristGroupMemberList.length > 1 ? ($out += 'style="padding-bottom:', 
                $line = 19, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), $out += 'px"', 
                $line = 19) : ($line = 19, "1" == group.isRoundTrip && ($out += 'style="padding:8px;"', 
                $line = 19), $line = 19), $out += "> ", $line = 20, "0" == group.type ? ($line = 20, 
                "0" == group.position ? ($out += "机场", $line = 20) : ($out += "火车站", $line = 20), 
                $line = 20) : "1" == group.type && ($line = 20, group.hotelName ? ($line = 20, $out += $escape(group.hotelName), 
                $line = 20) : ($out += "&nbsp;", $line = 20), $line = 20), $out += " </div> ", $line = 22, 
                "1" == group.isRoundTrip && ($out += ' <div class="border-top1" ', $line = 23, group.touristGroupMemberList.length > 1 ? ($out += 'style="padding-top:', 
                $line = 23, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), $out += 'px"', 
                $line = 23) : ($out += 'style="padding:8px;"', $line = 23), $out += "> ", $line = 24, 
                "0" == group.type ? ($line = 24, group.roundHotelName ? ($line = 24, $out += $escape(group.roundHotelName), 
                $line = 24) : "1" == group.type && ($out += "&nbsp;", $line = 24), $line = 24) : ($line = 24, 
                "0" == group.roundPosition ? ($out += "机场", $line = 24) : ($out += "火车站", $line = 24), 
                $line = 24), $out += " </div> ", $line = 26), $out += ' </td> <td class="has-div" rowspan="', 
                $line = 28, $out += $escape(group.touristGroupMemberList.length), $out += '"> <div ', 
                $line = 29, group.touristGroupMemberList.length > 1 ? ($out += 'style="padding-bottom:', 
                $line = 29, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), $out += 'px"', 
                $line = 29) : ($line = 29, "1" == group.isRoundTrip && ($out += 'style="padding:8px;"', 
                $line = 29), $line = 29), $out += "> ", $line = 30, "0" == group.type ? ($line = 30, 
                group.hotelName ? ($line = 30, $out += $escape(group.hotelName), $line = 30) : ($out += "&nbsp;", 
                $line = 30), $line = 30) : "1" == group.type && ($line = 30, "0" == group.position ? ($out += "机场", 
                $line = 30) : ($out += "火车站", $line = 30), $line = 30), $out += " </div> ", $line = 32, 
                "1" == group.isRoundTrip && ($out += ' <div class="border-top1" ', $line = 33, group.touristGroupMemberList.length > 1 ? ($out += 'style="padding-top:', 
                $line = 33, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), $out += 'px"', 
                $line = 33) : ($out += 'style="padding:8px;"', $line = 33), $out += "> ", $line = 34, 
                "0" == group.type ? ($line = 34, "0" == group.roundPosition ? ($out += "机场", $line = 34) : ($out += "火车站", 
                $line = 34), $line = 34) : "1" == group.type && ($line = 34, group.roundHotelName ? ($line = 34, 
                $out += $escape(group.roundHotelName), $line = 34) : ($out += "&nbsp;", $line = 34), 
                $line = 34), $out += " </div> ", $line = 36), $out += ' </td> <td rowspan="', $line = 38, 
                $out += $escape(group.touristGroupMemberList.length), $out += '"> <button class="T-update T-action btn btn-xs btn-primary">修改</button> <button class="T-delete T-action btn btn-xs btn-danger">删除</button> </td> </tr> ', 
                $line = 43, $each(group.touristGroupMemberList, function(rs, index) {
                    $out += " ", $line = 44, index > 0 && ($out += " <tr> <td>", $line = 46, $out += $escape(rs.name), 
                    $out += "</td> <td>", $line = 47, $out += $escape(rs.mobileNumber), $out += "</td> </tr> ", 
                    $line = 49), $out += " ", $line = 50;
                }), $out += " ", $line = 51;
            }), $out += " ", $line = 52), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{if touristGroupList.length}}\r\n{{each touristGroupList as group}}\r\n<tr class="T-sort" data-index="{{group.touristGroupMemberList.length}}" data-id="{{group.id}}" data-content="{{group | stringify}}" data-adultcount="{{group.adultCount}}" data-childCount="{{group.childCount}}">\r\n    <td rowspan="{{group.touristGroupMemberList.length}}"></td>\r\n    <td rowspan="{{group.touristGroupMemberList.length}}">{{group.tripNumber}}</td>\r\n    {{if group.touristGroupMemberList.length}}\r\n    {{each group.touristGroupMemberList as rs index}}\r\n    {{if index == 0}}\r\n    <td>{{rs.name}}</td>\r\n    <td>{{rs.mobileNumber}}</td>\r\n    {{/if}}\r\n    {{/each}}\r\n    {{else}}\r\n    <td></td>\r\n    <td></td>\r\n    {{/if}}\r\n    <td rowspan="{{group.touristGroupMemberList.length}}">{{group.adultCount}}大{{group.childCount}}小</td>\r\n    <td class="has-div" rowspan="{{group.touristGroupMemberList.length}}">\r\n        <div {{if group.touristGroupMemberList.length > 1}}style="padding-bottom:{{group.touristGroupMemberList.length*35/4-9}}px"{{else}}{{if group.isRoundTrip == \'1\'}}style="padding:8px;"{{/if}}{{/if}}>\r\n            {{if group.type == \'0\'}}{{if group.position == \'0\'}}机场{{else}}火车站{{/if}}{{else if group.type == \'1\'}}{{if group.hotelName}}{{group.hotelName}}{{else}}&nbsp;{{/if}}{{/if}}\r\n        </div>\r\n        {{if group.isRoundTrip == \'1\'}}\r\n        <div class="border-top1" {{if group.touristGroupMemberList.length > 1}}style="padding-top:{{group.touristGroupMemberList.length*35/4-9}}px"{{else}}style="padding:8px;"{{/if}}>\r\n            {{if group.type == \'0\'}}{{if group.roundHotelName}}{{group.roundHotelName}}{{else if group.type == \'1\'}}&nbsp;{{/if}}{{else}}{{if group.roundPosition == \'0\'}}机场{{else}}火车站{{/if}}{{/if}}\r\n        </div>\r\n        {{/if}}\r\n    </td>\r\n    <td class="has-div" rowspan="{{group.touristGroupMemberList.length}}">\r\n        <div {{if group.touristGroupMemberList.length > 1}}style="padding-bottom:{{group.touristGroupMemberList.length*35/4-9}}px"{{else}}{{if group.isRoundTrip == \'1\'}}style="padding:8px;"{{/if}}{{/if}}>\r\n            {{if group.type == \'0\'}}{{if group.hotelName}}{{group.hotelName}}{{else}}&nbsp;{{/if}}{{else if group.type == \'1\'}}{{if group.position == \'0\'}}机场{{else}}火车站{{/if}}{{/if}}\r\n        </div>\r\n        {{if group.isRoundTrip == \'1\'}}\r\n        <div class="border-top1" {{if group.touristGroupMemberList.length > 1}}style="padding-top:{{group.touristGroupMemberList.length*35/4-9}}px"{{else}}style="padding:8px;"{{/if}}>\r\n            {{if group.type == \'0\'}}{{if group.roundPosition == \'0\'}}机场{{else}}火车站{{/if}}{{else if group.type == \'1\'}}{{if group.roundHotelName}}{{group.roundHotelName}}{{else}}&nbsp;{{/if}}{{/if}}\r\n        </div>\r\n        {{/if}}\r\n    </td>\r\n    <td rowspan="{{group.touristGroupMemberList.length}}">\r\n        <button class="T-update T-action btn btn-xs btn-primary">修改</button>\r\n        <button class="T-delete T-action btn btn-xs btn-danger">删除</button>\r\n    </td>\r\n</tr>\r\n{{each group.touristGroupMemberList as rs index}}\r\n    {{if index > 0}}\r\n    <tr>\r\n        <td>{{rs.name}}</td>\r\n        <td>{{rs.mobileNumber}}</td>\r\n    </tr>\r\n    {{/if}}\r\n{{/each}}\r\n{{/each}}\r\n{{/if}}\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});