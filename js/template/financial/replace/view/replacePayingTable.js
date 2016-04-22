/*TMODJS:{"debug":true,"version":47,"md5":"b1d62033c42ffe21fce0b505e86100c4"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/replacePayingTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, bookinAccountList = $data.bookinAccountList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $out = "";
            return $line = 1, $each(bookinAccountList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 3, $out += $escape(rs.orderNumber), $out += "</td> <td>", $line = 4, $out += $escape(rs.startTime), 
                $out += "</td> <td>", $line = 5, $out += $escape(rs.projectName), $out += '</td> <td class="T-ctrl-tip" title="', 
                $line = 6, $out += $escape(rs.newDetail), $out += '" ><span style="height:35px;">', 
                $line = 6, $out += $escape(rs.newDetail), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 7, $out += $escape(rs.bookingMoney), $out += '</span></td> <td><a class="cursor T-action T-receive-money F-float F-money">', 
                $line = 8, $out += $escape(rs.receiveMoney), $out += '</a></td> <td><span class="F-float F-money">', 
                $line = 9, $out += $escape(rs.settlementMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 10, $out += $escape(rs.unReceiveMoney), $out += '</span></td> <td><input type="text" class="col-xs-12 T-reciveMoney F-float F-money" name="payMoney" value="', 
                $line = 11, $out += $escape(rs.payMoney), $out += '"></td> <td><textarea class="col-sm-12 hct-textarea T-remark" name="payRemark" maxlength="1000">', 
                $line = 12, $out += $escape(rs.payRemark), $out += "</textarea></td> <td>", $line = 13, 
                $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 14, $out += $escape(rs.checkUserName), 
                $out += '</td> <td> <label class="pos-rel"> <span class="lbl">', $line = 17, rs.isConfirmAccount ? ($out += "已", 
                $line = 17) : ($out += "未", $line = 17), $out += '对账</span> </label> <label class="cursor" data-right="1290004"> <a> |</a></label> <a class="cursor T-action T-view-Received" data-right="1290004">查看</a> </td> </tr> ', 
                $line = 23;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each bookinAccountList as rs index}}\r\n    <tr data-id="{{rs.id}}">\r\n        <td>{{rs.orderNumber}}</td>\r\n        <td>{{rs.startTime}}</td>\r\n        <td>{{rs.projectName}}</td>\r\n        <td class="T-ctrl-tip" title="{{rs.newDetail}}" ><span style="height:35px;">{{rs.newDetail}}</span></td>\r\n        <td><span class="F-float F-money">{{rs.bookingMoney}}</span></td>\r\n        <td><a class="cursor T-action T-receive-money F-float F-money">{{rs.receiveMoney}}</a></td>\r\n        <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n        <td><span class="F-float F-money">{{rs.unReceiveMoney}}</span></td>\r\n        <td><input type="text" class="col-xs-12 T-reciveMoney F-float F-money" name="payMoney" value="{{rs.payMoney}}"></td>\r\n        <td><textarea class="col-sm-12 hct-textarea T-remark" name="payRemark" maxlength="1000">{{rs.payRemark}}</textarea></td>\r\n        <td>{{rs.checkTime}}</td>\r\n        <td>{{rs.checkUserName}}</td>\r\n        <td>\r\n            <label class="pos-rel">\r\n                <span class="lbl">{{if !!rs.isConfirmAccount}}已{{else}}未{{/if}}对账</span>\r\n            </label>\r\n            <label class="cursor" data-right="1290004"> <a> |</a></label>\r\n            <a class="cursor T-action T-view-Received" data-right="1290004">查看</a>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});