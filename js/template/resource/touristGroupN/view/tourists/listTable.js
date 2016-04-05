/*TMODJS:{"debug":true,"version":8,"md5":"c7ba33bb33e908d0351bbe1925185f80"}*/
define(function(require) {
    return require("/js/template/template")("resource/touristGroupN/view/tourists/listTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.touristGroup, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr class="touristGroup-', $line = 2, $out += $escape(touristGroup.id), 
                $out += '" data-id="', $line = 2, $out += $escape(touristGroup.id), $out += '" data-status="', 
                $line = 2, $out += $escape(touristGroup.status), $out += '" data-InnerTransfer="', 
                $line = 2, $out += $escape(touristGroup.isInnerTransferConfirm), $out += '"> <td>', 
                $line = 3, $out += $escape(touristGroup.orderNumber), $out += "</td> <td>", $line = 4, 
                null != touristGroup.partnerAgency && ($line = 4, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
                $line = 4), $out += "</td> <td>", $line = 5, null != touristGroup.lineProduct && ($out += " ", 
                $line = 5, $out += $escape(touristGroup.lineProduct.name), $out += " ", $line = 5), 
                $out += "</td> <td>", $line = 6, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 7, $out += $escape($helpers.dateFormat(touristGroup.endTime, "yyyy-MM-dd")), 
                $out += '</td> <td><span class="F-float F-money">', $line = 8, $out += $escape(touristGroup.needPayAllMoney), 
                $out += '</span></td> <td> <label class="h-peopleCount"> (<span>', $line = 11, $out += $escape(touristGroup.adultCount), 
                $out += "</span>大 <span>", $line = 12, $out += $escape(touristGroup.childCount), 
                $out += "</span>小) </label> ", $line = 14, null != touristGroup.touristGroupMember && ($out += ' <label class="h-memberName"> ', 
                $line = 16, $out += $escape(touristGroup.touristGroupMember.name), $out += " </label> ", 
                $line = 18), $out += " </td> <td>", $line = 20, null != touristGroup.touristGroupMember && ($line = 20, 
                $out += $escape(touristGroup.touristGroupMember.mobileNumber), $line = 20), $out += "</span></td> <td>", 
                $line = 21, null != touristGroup.outOPUser && ($line = 21, $out += $escape(touristGroup.outOPUser.realName), 
                $line = 21), $out += "</td> <td>", $line = 22, 1 == !!touristGroup.customerType ? ($out += "独立成团", 
                $line = 22) : ($out += "散客拼团", $line = 22), $out += "</td> <td>", $line = 23, $out += $escape($helpers.getPartGroupStatusText(touristGroup.status)), 
                $out += '</td> <td> <div class="btn-group" style="width:120px;"> <a data-entity-id="', 
                $line = 26, $out += $escape(touristGroup.id), $out += '" class="T-action T-view btn-touristGroup-view cursor"> 查看 </a> <a data-entity-id="', 
                $line = 29, $out += $escape(touristGroup.id), $out += '" class="T-action ', $line = 29, 
                touristGroup.canEdit && ($out += "T-edit", $line = 29), $out += ' cursor R-right" data-right="1120003" ', 
                $line = 29, touristGroup.canEdit || ($out += 'style="color:#bbb;" title=', $line = 29, 
                $out += $escape(touristGroup.editTitle), $line = 29), $out += '> <label class="padding-right20">|</label> <span>编辑</span> </a> <a data-entity-id="', 
                $line = 33, $out += $escape(touristGroup.id), $out += '" class="T-action ', $line = 33, 
                touristGroup.canDelete && ($out += "T-del", $line = 33), $out += ' cursor R-right" data-right="1120004" ', 
                $line = 33, touristGroup.canDelete || ($out += 'style="color:#bbb;" title=', $line = 33, 
                $out += $escape(touristGroup.deleteTitle), $line = 33), $out += '> <label class="padding-right20">|</label> 删除 </a> </div> </td> </tr> ', 
                $line = 40;
            }), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each touristGroupList as touristGroup}}\r\n    <tr class="touristGroup-{{touristGroup.id}}" data-id="{{touristGroup.id}}" data-status="{{touristGroup.status}}" data-InnerTransfer="{{touristGroup.isInnerTransferConfirm}}">\r\n        <td>{{touristGroup.orderNumber}}</td>\r\n        <td>{{if touristGroup.partnerAgency != null}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n        <td>{{if touristGroup.lineProduct != null}} {{touristGroup.lineProduct.name}} {{/if}}</td>\r\n        <td>{{touristGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td>{{touristGroup.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td><span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span></td>\r\n        <td>\r\n            <label class="h-peopleCount">\r\n                (<span>{{touristGroup.adultCount}}</span>大\r\n                <span>{{touristGroup.childCount}}</span>小)\r\n            </label>\r\n            {{if touristGroup.touristGroupMember != null}}\r\n            <label class="h-memberName">\r\n                {{touristGroup.touristGroupMember.name}}\r\n            </label>\r\n            {{/if}}\r\n        </td>\r\n        <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.mobileNumber}}{{/if}}</span></td>\r\n        <td>{{if touristGroup.outOPUser != null}}{{touristGroup.outOPUser.realName}}{{/if}}</td>\r\n        <td>{{if !!touristGroup.customerType == 1}}独立成团{{else}}散客拼团{{/if}}</td>\r\n        <td>{{touristGroup.status | getPartGroupStatusText}}</td>\r\n        <td>\r\n            <div class="btn-group" style="width:120px;">\r\n                <a data-entity-id="{{touristGroup.id}}" class="T-action T-view btn-touristGroup-view cursor">\r\n					查看\r\n				</a>\r\n                <a data-entity-id="{{touristGroup.id}}" class="T-action  {{if touristGroup.canEdit}}T-edit{{/if}} cursor  R-right" data-right="1120003" {{if !touristGroup.canEdit}}style="color:#bbb;"  title={{touristGroup.editTitle}}{{/if}}>\r\n                    <label class="padding-right20">|</label>\r\n                    <span>编辑</span>\r\n                </a>\r\n                <a data-entity-id="{{touristGroup.id}}" class="T-action {{if touristGroup.canDelete}}T-del{{/if}} cursor R-right" data-right="1120004" {{if !touristGroup.canDelete}}style="color:#bbb;"   title={{touristGroup.deleteTitle}}{{/if}}>\r\n                    <label class="padding-right20">|</label>\r\n                    删除\r\n                </a>\r\n            </div>\r\n        </td>\r\n    </tr>\r\n{{/each}}\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});