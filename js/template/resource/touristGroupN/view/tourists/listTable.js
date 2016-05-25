/*TMODJS:{"debug":true,"version":31,"md5":"05856008b241a4d8b9979b190ecb8dca"}*/
define(function(require) {
    return require("../../../../template")("resource/touristGroupN/view/tourists/listTable", function($data, $filename) {
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
                $line = 4), $out += "</td> <td> ", $line = 6, null != touristGroup.lineProduct && ($out += " ", 
                $line = 6, $out += $escape(touristGroup.lineProduct.name), $out += " ", $line = 6), 
                $out += " ", $line = 7, 5 == touristGroup.status && ($out += ' <label class="lineProductArea pull-right"> <button class="btn btn-success btn-sm btn-white T-action T-show-part-group" index="0"> <i class="ace-icon fa bigger-110 icon-only fa-plus"></i> </button> </label> ', 
                $line = 11), $out += " </td> <td>", $line = 13, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 14, $out += $escape($helpers.dateFormat(touristGroup.endTime, "yyyy-MM-dd")), 
                $out += '</td> <td><span class="F-float F-money">', $line = 15, $out += $escape(touristGroup.needPayAllMoney), 
                $out += '</span></td> <td> <label class="h-peopleCount"> (<span>', $line = 18, $out += $escape(touristGroup.adultCount), 
                $out += "</span>大 <span>", $line = 19, $out += $escape(touristGroup.childCount), 
                $out += "</span>小) </label> ", $line = 21, null != touristGroup.touristGroupMember && ($out += ' <label class="h-memberName"> ', 
                $line = 23, $out += $escape(touristGroup.touristGroupMember.name), $out += " </label> ", 
                $line = 25), $out += " </td> <td>", $line = 27, null != touristGroup.touristGroupMember && ($line = 27, 
                $out += $escape(touristGroup.touristGroupMember.mobileNumber), $line = 27), $out += "</span></td> <td>", 
                $line = 28, null != touristGroup.outOPUser && ($line = 28, $out += $escape(touristGroup.outOPUser.realName), 
                $line = 28), $out += "</td> <td>", $line = 29, 1 == !!touristGroup.customerType ? ($out += "独立成团", 
                $line = 29) : ($out += "散客拼团", $line = 29), $out += "</td> <td>", $line = 30, $out += $escape($helpers.getPartGroupStatusText(touristGroup.status)), 
                $out += '</td> <td> <div class="btn-group" style="width:120px;"> <a data-entity-id="', 
                $line = 33, $out += $escape(touristGroup.id), $out += '" class="T-action T-view btn-touristGroup-view cursor"> 查看 </a> ', 
                $line = 36, 1 == touristGroup.innerFlag ? ($out += "  ", $line = 41) : ($out += ' <a data-entity-id="', 
                $line = 42, $out += $escape(touristGroup.id), $out += '" class="T-action R-right ', 
                $line = 42, touristGroup.canEdit && ($out += "T-edit", $line = 42), $out += ' cursor" ', 
                $line = 42, touristGroup.canEdit || ($out += 'style="color:#bbb;" title="', $line = 42, 
                $out += $escape(touristGroup.editTitle), $out += '"', $line = 42), $out += ' data-right="1470002"> <label class="padding-right20">|</label> <span>编辑</span> </a> <a data-entity-id="', 
                $line = 46, $out += $escape(touristGroup.id), $out += '" class="T-action R-right ', 
                $line = 46, touristGroup.canDelete && ($out += "T-del", $line = 46), $out += ' cursor" ', 
                $line = 46, touristGroup.canDelete || ($out += 'style="color:#bbb;" title="', $line = 46, 
                $out += $escape(touristGroup.deleteTitle), $out += '"', $line = 46), $out += ' data-right="1470003"> <label class="padding-right20">|</label> 删除 </a> ', 
                $line = 50), $out += " </div> </td> </tr> ", $line = 54, 5 == touristGroup.status && ($out += ' <tr class="hidden"> <td colspan="12"> <table class="table table-striped table-bordered hct-pos-inherit"> <thead> <tr> <th class="th-border">线路产品</th> <th class="th-border">出团日期</th> <th class="th-border">完团日期</th> <th class="th-border">状态</th> </tr> </thead> <tbody class="T-part-group-list"> </tbody> </table> </td> </tr> ', 
                $line = 71), $out += " ", $line = 72;
            }), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each touristGroupList as touristGroup}}\r\n    <tr class="touristGroup-{{touristGroup.id}}" data-id="{{touristGroup.id}}" data-status="{{touristGroup.status}}" data-InnerTransfer="{{touristGroup.isInnerTransferConfirm}}">\r\n        <td>{{touristGroup.orderNumber}}</td>\r\n        <td>{{if touristGroup.partnerAgency != null}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n        <td>\r\n            {{if touristGroup.lineProduct != null}} {{touristGroup.lineProduct.name}} {{/if}}\r\n            {{if touristGroup.status == 5}}\r\n            <label class="lineProductArea pull-right"> \r\n                <button class="btn btn-success btn-sm btn-white T-action T-show-part-group" index="0"> <i class="ace-icon fa bigger-110 icon-only fa-plus"></i>  </button> \r\n            </label>\r\n            {{/if}}\r\n        </td>\r\n        <td>{{touristGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td>{{touristGroup.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n        <td><span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span></td>\r\n        <td>\r\n            <label class="h-peopleCount">\r\n                (<span>{{touristGroup.adultCount}}</span>大\r\n                <span>{{touristGroup.childCount}}</span>小)\r\n            </label>\r\n            {{if touristGroup.touristGroupMember != null}}\r\n            <label class="h-memberName">\r\n                {{touristGroup.touristGroupMember.name}}\r\n            </label>\r\n            {{/if}}\r\n        </td>\r\n        <td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.mobileNumber}}{{/if}}</span></td>\r\n        <td>{{if touristGroup.outOPUser != null}}{{touristGroup.outOPUser.realName}}{{/if}}</td>\r\n        <td>{{if !!touristGroup.customerType == 1}}独立成团{{else}}散客拼团{{/if}}</td>\r\n        <td>{{touristGroup.status | getPartGroupStatusText}}</td>\r\n        <td>\r\n            <div class="btn-group" style="width:120px;">\r\n                <a data-entity-id="{{touristGroup.id}}" class="T-action T-view btn-touristGroup-view cursor">\r\n					查看\r\n				</a>\r\n                {{if touristGroup.innerFlag == 1}}\r\n                <!-- <a class="T-action T-outer-turn cursor">\r\n                    <label class="padding-right20">|</label>\r\n                    <span>外转</span>\r\n                </a> -->\r\n                {{else}}\r\n                <a data-entity-id="{{touristGroup.id}}" class="T-action  R-right {{if touristGroup.canEdit}}T-edit{{/if}} cursor" {{if !touristGroup.canEdit}}style="color:#bbb;"  title="{{touristGroup.editTitle}}"{{/if}} data-right="1470002">\r\n                    <label class="padding-right20">|</label>\r\n                    <span>编辑</span>\r\n                </a>\r\n                <a data-entity-id="{{touristGroup.id}}" class="T-action R-right {{if touristGroup.canDelete}}T-del{{/if}} cursor" {{if !touristGroup.canDelete}}style="color:#bbb;"   title="{{touristGroup.deleteTitle}}"{{/if}} data-right="1470003">\r\n                    <label class="padding-right20">|</label>\r\n                    删除\r\n                </a>\r\n                {{/if}}\r\n            </div>\r\n        </td>\r\n    </tr>\r\n    {{if touristGroup.status == 5}}\r\n    <tr class="hidden">\r\n        <td colspan="12">\r\n            <table class="table table-striped table-bordered hct-pos-inherit">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border">线路产品</th>\r\n                        <th class="th-border">出团日期</th>\r\n                        <th class="th-border">完团日期</th>\r\n                        <th class="th-border">状态</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-part-group-list">\r\n                </tbody>\r\n            </table>\r\n        </td>\r\n    </tr>\r\n    {{/if}}\r\n{{/each}}\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});