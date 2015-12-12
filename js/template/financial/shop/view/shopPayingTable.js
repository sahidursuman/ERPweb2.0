/*TMODJS:{"debug":true,"version":7,"md5":"308a9cd78fddec1e9fea88d67b0a5c14"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/shopPayingTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, shopAccountList = $data.shopAccountList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $out = "";
            return $line = 1, $each(shopAccountList, function(rs, index) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 2, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 2, rs.isConfirmAccount ? ($out += "1", $line = 2) : ($out += "0", $line = 2), 
                $out += '"> <td>', $line = 3, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 4, $out += $escape(rs.tripMessage), $out += "</td> <td>", $line = 5, $out += $escape(rs.accountTime), 
                $out += "</td> <td>", $line = 6, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 7, $out += $escape(rs.shopName), $line = 7, rs.shopName && ($out += '<a class="cursor T-action">展开</a>', 
                $line = 7), $out += "</td> <td>", $line = 8, $out += $escape(rs.consumeMoney), $out += "</td> <td>", 
                $line = 9, $out += $escape(rs.travelAgencyRebateMoney), $out += "</td> <td>", $line = 10, 
                $out += $escape(rs.guideRebateMoney), $out += "</td> <td>", $line = 11, $out += $escape(rs.customerRebateMoney), 
                $out += "</td> <td>", $line = 12, $out += $escape(rs.parkingRebateMoney), $out += "</td> <td>", 
                $line = 13, rs.billImage ? ($out += '<a class="cursor T-action T-view-receipts" data-billImage="', 
                $line = 13, $out += $escape(rs.billImage), $out += '">查看</a>', $line = 13) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 13), $out += "</td> <td>", $line = 14, $out += $escape(rs.backMoney), $out += '</td> <td><a class="cursor T-action T-payDetails">', 
                $line = 15, $out += $escape(rs.receiveMoney), $out += "</a> <td>", $line = 16, $out += $escape(rs.settlementMoney), 
                $out += '</td> <td name="unPayedMoney">', $line = 17, $out += $escape(rs.unReceiveMoney), 
                $out += '</td> <td><input type="text" class="col-sm-12 T-reciveMoney" name="payMoney" value="', 
                $line = 18, $out += $escape(rs.payMoney), $out += '"></td> <td><input type="text" class="col-sm-12 T-payRemark" name="payRemark" value="', 
                $line = 19, $out += $escape(rs.checkRemark), $out += '"></td> <td>', $line = 20, 
                $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 21, $out += $escape(rs.checkName), 
                $out += '</td> <td> <label class="pos-rel"> <span class="lbl">', $line = 24, rs.isConfirmAccount ? ($out += "已", 
                $line = 24) : ($out += "未", $line = 24), $out += '对账</span> </label> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-view-details">查看</a> </td> </tr> ', 
                $line = 30;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each shopAccountList as rs index}}\r\n            <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{if !!rs.isConfirmAccount}}1{{else}}0{{/if}}">\r\n                <td>{{index + 1}}</td>\r\n                <td>{{rs.tripMessage}}</td>\r\n                <td>{{rs.accountTime}}</td>\r\n                <td>{{rs.count}}</td>\r\n                <td>{{rs.shopName}}{{if rs.shopName}}<a class="cursor T-action">展开</a>{{/if}}</td>\r\n                <td>{{rs.consumeMoney}}</td>\r\n                <td>{{rs.travelAgencyRebateMoney}}</td>\r\n                <td>{{rs.guideRebateMoney}}</td>\r\n                <td>{{rs.customerRebateMoney}}</td>\r\n                <td>{{rs.parkingRebateMoney}}</td>\r\n                <td>{{if !rs.billImage}}<span style="color:#bbb">查看</span>{{else}}<a class="cursor T-action T-view-receipts" data-billImage="{{rs.billImage}}">查看</a>{{/if}}</td>\r\n                <td>{{rs.backMoney}}</td>\r\n                <td><a class="cursor T-action T-payDetails">{{rs.receiveMoney}}</a>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td name="unPayedMoney">{{rs.unReceiveMoney}}</td>\r\n                <td><input type="text" class="col-sm-12 T-reciveMoney" name="payMoney" value="{{rs.payMoney}}"></td>\r\n                <td><input type="text" class="col-sm-12 T-payRemark" name="payRemark" value="{{rs.checkRemark}}"></td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <span class="lbl">{{if !!rs.isConfirmAccount}}已{{else}}未{{/if}}对账</span>\r\n                    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view-details">查看</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});