/*TMODJS:{"debug":true,"version":11,"md5":"999d43a1805f803d69fdde5a7d0801ce"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/replacePayingTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, bookinAccountList = $data.bookinAccountList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $out = "";
            return $line = 1, $each(bookinAccountList, function(rs, index) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 3, $out += $escape(index + 1), $out += "</td> <td>", $line = 4, $out += $escape(rs.orderNumber), 
                $out += "</td> <td>", $line = 5, $out += $escape(rs.startTime), $out += "</td> <td>", 
                $line = 6, $out += $escape(rs.projectName), $out += "</td> <td>", $line = 7, $out += $escape(rs.newDetail), 
                $out += "</td> <td>", $line = 8, $out += $escape(rs.bookingMoney), $out += '</td> <td><a class="cursor T-action T-receive-money">', 
                $line = 9, $out += $escape(rs.receiveMoney), $out += "</a></td> <td>", $line = 10, 
                $out += $escape(rs.settlementMoney), $out += "</td> <td>", $line = 11, $out += $escape(rs.unReceiveMoney), 
                $out += '</td> <th><input type="text" class="col-xs-12 T-reciveMoney" name="payMoney" value="', 
                $line = 12, $out += $escape(rs.payMoney), $out += '"></th> <td><input type="text" class="col-xs-12 T-remark" name="payRemark"></td> <td>', 
                $line = 14, $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 15, $out += $escape(rs.checkUserName), 
                $out += '</td> <td> <label class="pos-rel"> <span class="lbl">', $line = 18, rs.isConfirmAccount ? ($out += "已", 
                $line = 18) : ($out += "未", $line = 18), $out += '对账</span> </label> <label class="cursor R-right" data-right="1290004"> <a> |</a></label> <a class="cursor T-action T-view-Received R-right" data-right="1290004">查看</a> </td> </tr> ', 
                $line = 24;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each bookinAccountList as rs index}}\r\n    <tr data-id="{{rs.id}}">\r\n        <td>{{index + 1}}</td>\r\n        <td>{{rs.orderNumber}}</td>\r\n        <td>{{rs.startTime}}</td>\r\n        <td>{{rs.projectName}}</td>\r\n        <td>{{rs.newDetail}}</td>\r\n        <td>{{rs.bookingMoney}}</td>\r\n        <td><a class="cursor T-action T-receive-money">{{rs.receiveMoney}}</a></td>\r\n        <td>{{rs.settlementMoney}}</td>\r\n        <td>{{rs.unReceiveMoney}}</td>\r\n        <th><input type="text" class="col-xs-12 T-reciveMoney" name="payMoney" value="{{rs.payMoney}}"></th>\r\n        <td><input type="text" class="col-xs-12 T-remark" name="payRemark"></td>\r\n        <td>{{rs.checkTime}}</td>\r\n        <td>{{rs.checkUserName}}</td>\r\n        <td>\r\n            <label class="pos-rel">\r\n                <span class="lbl">{{if !!rs.isConfirmAccount}}已{{else}}未{{/if}}对账</span>\r\n            </label>\r\n            <label class="cursor R-right" data-right="1290004"> <a> |</a></label>\r\n            <a class="cursor T-action T-view-Received R-right" data-right="1290004">查看</a>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});