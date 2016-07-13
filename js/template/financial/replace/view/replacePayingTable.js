/*TMODJS:{"debug":true,"version":77,"md5":"7e3cf7fd75c27a1e11dbbadf84ad1b18"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/replacePayingTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, bookinAccountList = $data.bookinAccountList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $string = $utils.$string, $out = "";
            return $line = 1, $each(bookinAccountList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 3, $out += $escape(rs.orderNumber), $out += "</td> <td>", $line = 4, $out += $escape(rs.startTime), 
                $out += "</td> <td>", $line = 5, $out += $escape(rs.partnerAgencyName), $out += "</td> <td>", 
                $line = 6, $out += $escape(rs.projectName), $out += '</td> <td class="T-ctrl-tip" title="', 
                $line = 7, $out += $escape(rs.projectList), $out += '"><span>', $line = 7, $out += $escape(rs.projectList), 
                $out += '</span></td> <td class="T-ctrl-tip" title="', $line = 8, $out += $string(rs.newDetail), 
                $out += '" ><span style="height:35px;">', $line = 8, $out += $string(rs.newDetail), 
                $out += "</span></td> <td>", $line = 9, $out += $escape(rs.creatorName), $out += "<br/>", 
                $line = 9, $out += $escape($helpers.dateFormat(rs.creatorTime, "yyyy-MM-dd")), $out += "<br/>", 
                $line = 9, $out += $escape($helpers.dateFormat(rs.creatorTime, "hh:mm:ss")), $out += '</td> <td><span class="F-float F-money">', 
                $line = 10, $out += $escape(rs.bookingMoney), $out += '</span></td> <td><a class="cursor T-action T-receive-money F-float F-money">', 
                $line = 11, $out += $escape(rs.receiveMoney), $out += '</a></td> <td><span class="F-float F-money">', 
                $line = 12, $out += $escape(rs.settlementMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 13, $out += $escape(rs.unReceiveMoney), $out += '</span></td> <td><input type="text" class="col-xs-12 T-reciveMoney F-float F-money" name="payMoney" value="', 
                $line = 14, $out += $escape(rs.payMoney), $out += '"></td> <td><textarea class="col-sm-12 hct-textarea T-remark" name="payRemark" maxlength="1000">', 
                $line = 15, $out += $escape(rs.payRemark), $out += "</textarea></td> <td>", $line = 16, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd")), $out += "<br />", 
                $line = 16, $out += $escape($helpers.dateFormat(rs.checkTime, "hh:mm:ss")), $out += "</td> <td>", 
                $line = 17, $out += $escape(rs.checkUserName), $out += "</td> <td> ", $line = 19, 
                rs.isConfirmAccount ? ($out += "已", $line = 19) : ($out += "未", $line = 19), $out += '对账 <label class="cursor" data-right="1290004"> <a> |</a></label> <a class="cursor T-action T-view-Received" data-right="1290004">查看</a> </td> </tr> ', 
                $line = 24;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each bookinAccountList as rs index}}\r\n    <tr data-id="{{rs.id}}">\r\n        <td>{{rs.orderNumber}}</td>\r\n        <td>{{rs.startTime}}</td>\r\n        <td>{{rs.partnerAgencyName}}</td>\r\n        <td>{{rs.projectName}}</td>\r\n        <td class="T-ctrl-tip" title="{{rs.projectList}}"><span>{{rs.projectList}}</span></td>\r\n        <td class="T-ctrl-tip" title="{{#rs.newDetail}}" ><span style="height:35px;">{{#rs.newDetail}}</span></td>\r\n        <td>{{rs.creatorName}}<br/>{{rs.creatorTime  | dateFormat:"yyyy-MM-dd"}}<br/>{{rs.creatorTime  | dateFormat:"hh:mm:ss"}}</td>\r\n        <td><span class="F-float F-money">{{rs.bookingMoney}}</span></td>\r\n        <td><a class="cursor T-action T-receive-money F-float F-money">{{rs.receiveMoney}}</a></td>\r\n        <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n        <td><span class="F-float F-money">{{rs.unReceiveMoney}}</span></td>\r\n        <td><input type="text" class="col-xs-12 T-reciveMoney F-float F-money" name="payMoney" value="{{rs.payMoney}}"></td>\r\n        <td><textarea class="col-sm-12 hct-textarea T-remark" name="payRemark" maxlength="1000">{{rs.payRemark}}</textarea></td>\r\n        <td>{{rs.checkTime | dateFormat:"yyyy-MM-dd"}}<br />{{rs.checkTime | dateFormat:"hh:mm:ss"}}</td>\r\n        <td>{{rs.checkUserName}}</td>\r\n        <td>\r\n            {{if !!rs.isConfirmAccount}}已{{else}}未{{/if}}对账\r\n            <label class="cursor" data-right="1290004"> <a> |</a></label>\r\n            <a class="cursor T-action T-view-Received" data-right="1290004">查看</a>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});