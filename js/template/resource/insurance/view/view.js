/*TMODJS:{"debug":true,"version":106,"md5":"172fe31ce305c8af8a128412621646ea"}*/
define(function(require) {
    return require("../../../template")("resource/insurance/view/view", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, insurance = $data.insurance, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<form class="form-horizontal insuranceMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ" style="width: 96%"> <tr> <td class="style-myself">公司名称</td> <td class="styleOne-self">', 
            $line = 5, $out += $escape(insurance.name), $out += '</td> <td class="style-myself">是否启用</td> <td class="styleOne-self">', 
            $line = 7, 0 == insurance.status ? ($out += " 已停用 ", $line = 7) : ($out += " 已启用 ", 
            $line = 7), $out += ' </td> </tr> <tr> <td class="style-myself">联系人</td> <td class="styleOne-self">', 
            $line = 12, $out += $escape(insurance.managerName), $out += '</td> <td class="style-myself">联系电话</td> <td class="styleOne-self">', 
            $line = 14, $out += $escape(insurance.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">座机号码</td> <td class="styleOne-self">', 
            $line = 18, $out += $escape(insurance.telNumber), $out += '</td> <td class="style-myself">传真号码</td> <td class="styleOne-self">', 
            $line = 20, $out += $escape(insurance.faxNumber), $out += '</td> </tr> <tr> <td class="style-myself style-myselfOne">所在地区</td> <td class="styleOne-self" colspan="3"> ', 
            $line = 24, null != insurance.province && ($out += " ", $line = 24, $out += $escape(insurance.province.name), 
            $out += " ", $line = 24), $out += " ", $line = 24, null != insurance.city && ($out += " -", 
            $line = 24, $out += $escape(insurance.city.name), $out += " ", $line = 24), $out += " ", 
            $line = 24, null != insurance.district && ($out += " -", $line = 24, $out += $escape(insurance.district.name), 
            $out += " ", $line = 24), $out += ' </td> </tr> <tr> <td class="style-myself">详细地址</td> <td class="styleOne-self" colspan="3">', 
            $line = 29, $out += $escape(insurance.street), $out += '</td> </tr> <tr> <td class="style-myself">公司简介</td> <td class="styleOne-self" colspan="3">', 
            $line = 33, $out += $escape(insurance.remark), $out += '</td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo" style="width: 96%"> <tr> <td colspan="8" class="HeadManage" style="text-align: left">保险列表</td> </tr> <tr> <td class="style-myself">险种</td> <td class="style-myself">单价</td> <td class="style-myself">适用天数</td> <td class="style-myself">适用人群</td> <td>备注</td> </tr> ', 
            $line = 49, $each(insurance.insuranceItemList, function(rs) {
                $out += ' <tr data-entity-id="', $line = 50, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 51, $out += $escape(rs.name), $out += "</td> <td><span class='F-float F-money'>", 
                $line = 52, $out += $escape(rs.price), $out += "</span></td> <td><span class='F-float F-count'>", 
                $line = 53, $out += $escape(rs.days), $out += "<span>天</td> <td>", $line = 54, $out += $escape(rs.type), 
                $out += "</td> <td>", $line = 55, $out += $escape(rs.remark), $out += "</td> </tr> ", 
                $line = 57;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal insuranceMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n    <table class="whereQ" style="width: 96%">\r\n        <tr>\r\n            <td class="style-myself">公司名称</td>\r\n            <td class="styleOne-self">{{insurance.name}}</td>\r\n            <td class="style-myself">是否启用</td>\r\n            <td class="styleOne-self">{{if insurance.status == 0}} 已停用 {{else}} 已启用 {{/if}}\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td class="style-myself">联系人</td>\r\n            <td class="styleOne-self">{{insurance.managerName}}</td>\r\n            <td class="style-myself">联系电话</td>\r\n            <td class="styleOne-self">{{insurance.mobileNumber}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class="style-myself">座机号码</td>\r\n            <td class="styleOne-self">{{insurance.telNumber}}</td>\r\n            <td class="style-myself">传真号码</td>\r\n            <td class="styleOne-self">{{insurance.faxNumber}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class="style-myself style-myselfOne">所在地区</td>\r\n            <td class="styleOne-self" colspan="3"> {{if insurance.province != null}} {{insurance.province.name}} {{/if}} {{if insurance.city != null}} -{{insurance.city.name}} {{/if}} {{if insurance.district != null}} -{{insurance.district.name}} {{/if}}\r\n            </td>\r\n        </tr>\r\n        <tr>\r\n            <td class="style-myself">详细地址</td>\r\n            <td class="styleOne-self" colspan="3">{{insurance.street}}</td>\r\n        </tr>\r\n        <tr>\r\n            <td class="style-myself">公司简介</td>\r\n            <td class="styleOne-self" colspan="3">{{insurance.remark}}</td>\r\n        </tr>\r\n    </table>\r\n</form>\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n    <table class="whereQ whereTwo" style="width: 96%">\r\n        <tr>\r\n            <td colspan="8" class="HeadManage" style="text-align: left">保险列表</td>\r\n        </tr>\r\n        <tr>\r\n            <td class="style-myself">险种</td>\r\n            <td class="style-myself">单价</td>\r\n            <td class="style-myself">适用天数</td>\r\n            <td class="style-myself">适用人群</td>\r\n            <td>备注</td>\r\n        </tr>\r\n        {{each insurance.insuranceItemList as rs}}\r\n        <tr data-entity-id="{{rs.id}}">\r\n            <td>{{rs.name}}</td>\r\n            <td><span class=\'F-float F-money\'>{{rs.price}}</span></td>\r\n            <td><span class=\'F-float F-count\'>{{rs.days}}<span>天</td>\r\n            <td>{{rs.type}}</td>\r\n            <td>{{rs.remark}}</td>\r\n        </tr>\r\n        {{/each}}\r\n    </table>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});