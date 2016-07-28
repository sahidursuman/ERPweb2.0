/*TMODJS:{"debug":true,"version":4,"md5":"90af94be61e409f05e25bd3b1084399f"}*/
define(function(require) {
    return require("../../../template")("customer/newOrder/viewCity/cityGroupList", function($data, $filename) {
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
                $out += '小</td> <td rowspan="', $line = 18, $out += $escape(group.touristGroupMemberList.length), 
                $out += '">', $line = 18, $out += $escape(group.hotelName), $out += '</td> <td rowspan="', 
                $line = 19, $out += $escape(group.touristGroupMemberList.length), $out += '">', 
                $line = 19, $out += $escape(group.hotelAddress), $out += '</td> <td rowspan="', 
                $line = 20, $out += $escape(group.touristGroupMemberList.length), $out += '"> <button class="T-update T-action btn btn-xs btn-primary">修改</button> <button class="T-delete T-action btn btn-xs btn-danger">删除</button> </td> </tr> ', 
                $line = 25, $each(group.touristGroupMemberList, function(rs, index) {
                    $out += " ", $line = 26, index > 0 && ($out += " <tr> <td>", $line = 28, $out += $escape(rs.name), 
                    $out += "</td> <td>", $line = 29, $out += $escape(rs.mobileNumber), $out += "</td> </tr> ", 
                    $line = 31), $out += " ", $line = 32;
                }), $out += " ", $line = 33;
            }), $out += " ", $line = 34), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{if touristGroupList.length}}\r\n{{each touristGroupList as group}}\r\n<tr class="T-sort" data-index="{{group.touristGroupMemberList.length}}" data-id="{{group.id}}" data-content="{{group | stringify}}" data-adultcount="{{group.adultCount}}" data-childCount="{{group.childCount}}">\r\n    <td rowspan="{{group.touristGroupMemberList.length}}"></td>\r\n    <td rowspan="{{group.touristGroupMemberList.length}}">{{group.tripNumber}}</td>\r\n    {{if group.touristGroupMemberList.length}}\r\n    {{each group.touristGroupMemberList as rs index}}\r\n    {{if index == 0}}\r\n    <td>{{rs.name}}</td>\r\n    <td>{{rs.mobileNumber}}</td>\r\n    {{/if}}\r\n    {{/each}}\r\n    {{else}}\r\n    <td></td>\r\n    <td></td>\r\n    {{/if}}\r\n    <td rowspan="{{group.touristGroupMemberList.length}}">{{group.adultCount}}大{{group.childCount}}小</td>\r\n    <td rowspan="{{group.touristGroupMemberList.length}}">{{group.hotelName}}</td>\r\n    <td rowspan="{{group.touristGroupMemberList.length}}">{{group.hotelAddress}}</td>\r\n    <td rowspan="{{group.touristGroupMemberList.length}}">\r\n        <button class="T-update T-action btn btn-xs btn-primary">修改</button>\r\n        <button class="T-delete T-action btn btn-xs btn-danger">删除</button>\r\n    </td>\r\n</tr>\r\n{{each group.touristGroupMemberList as rs index}}\r\n    {{if index > 0}}\r\n    <tr>\r\n        <td>{{rs.name}}</td>\r\n        <td>{{rs.mobileNumber}}</td>\r\n    </tr>\r\n    {{/if}}\r\n{{/each}}\r\n{{/each}}\r\n{{/if}}\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});