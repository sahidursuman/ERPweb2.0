/*TMODJS:{"debug":true,"version":14,"md5":"e74be8741083c45e1f807147a0670065"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/shopPayingTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, shopAccountList = $data.shopAccountList, $escape = ($data.rs, 
            $data.index, $utils.$escape), source = $data.source, $out = ($data.list, $data.i, 
            "");
            return $line = 1, $each(shopAccountList, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 2, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 2, rs.isConfirmAccount ? ($out += "1", $line = 2) : ($out += "0", $line = 2), 
                $out += '"> <td>', $line = 3, $out += $escape(rs.tripMessage), $out += "</td> <td>", 
                $line = 4, $out += $escape(rs.accountTime), $out += "</td> <td>", $line = 5, $out += $escape(rs.count), 
                $out += "</td> <td>", $line = 6, rs.shopItem.length > 0 && ($line = 6, $out += $escape(rs.shopItem[0].itemName), 
                $line = 6, rs.shopItem.length > 1 && ($out += "...", $line = 6), $out += '<a class="cursor T-action T-see-group">展开</a>', 
                $line = 6), $out += "</td> <td>", $line = 7, $out += $escape(rs.consumeMoney), $out += "</td> <td>", 
                $line = 8, $out += $escape(rs.travelAgencyRebateMoney), $out += "</td> <td>", $line = 9, 
                $out += $escape(rs.guideRebateMoney), $out += "</td> <td>", $line = 10, $out += $escape(rs.customerRebateMoney), 
                $out += "</td> <td>", $line = 11, $out += $escape(rs.parkingRebateMoney), $out += '</td> <td style="white-space: nowrap;">', 
                $line = 12, rs.billImage ? ($out += '<a class="cursor T-action T-view-receipts" data-billImage="', 
                $line = 12, $out += $escape(rs.billImage), $out += '">查看</a>', $line = 12) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 12), $out += "</td> <td>", $line = 13, $out += $escape(rs.backMoney), $out += '</td> <td><a class="cursor T-action T-payDetails">', 
                $line = 14, $out += $escape(rs.receiveMoney), $out += "</a> <td>", $line = 15, $out += $escape(rs.settlementMoney), 
                $out += '</td> <td name="unPayedMoney">', $line = 16, $out += $escape(rs.unReceiveMoney), 
                $out += '</td> <td><input type="text" class="col-sm-12 T-reciveMoney" name="payMoney" data-le="', 
                $line = 17, $out += $escape(rs.unReceiveMoney), $out += '" ', $line = 17, !source && rs.unReceiveMoney <= 0 && ($out += " disabled ", 
                $line = 17), $out += ' value="', $line = 17, $out += $escape(rs.payMoney), $out += '"></td> <td><input type="text" class="col-sm-12 T-payRemark" name="payRemark" ', 
                $line = 18, !source && rs.unReceiveMoney <= 0 && ($out += " disabled ", $line = 18), 
                $out += ' value="', $line = 18, $out += $escape(rs.IncomeRemark), $out += '"></td> <td>', 
                $line = 19, $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 20, $out += $escape(rs.checkName), 
                $out += '</td> <td> <label class="pos-rel"> <span class="lbl">', $line = 23, rs.isConfirmAccount ? ($out += "已", 
                $line = 23) : ($out += "未", $line = 23), $out += '对账</span> </label> <label class="cursor" data-right="1310004"> <a> |</a></label> <a class="cursor T-action T-view-details" data-right="1310004">查看</a> </td> </tr> ', 
                $line = 29, rs.shopItem.length > 0 && ($out += ' <tr class="hide"> <td colspan="19"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" style="min-width: 45px;">序号</th> <th class="th-border" style="min-width: 70px;">商品</th> <th class="th-border" style="min-width: 120px;">消费金额</th> <th class="th-border" style="min-width: 45px;">社佣</th> <th class="th-border" style="min-width: 45px;">导佣</th> </tr> </thead> <tbody> ', 
                $line = 43, $each(rs.shopItem, function(list, i) {
                    $out += " <tr> <td>", $line = 45, $out += $escape(i + 1), $out += "</td> <td>", 
                    $line = 46, $out += $escape(list.itemName), $out += "</td> <td>", $line = 47, $out += $escape(list.consumeMoney), 
                    $out += "</td> <td>", $line = 48, $out += $escape(list.travelAgencyRebateMoney), 
                    $out += "</td> <td>", $line = 49, $out += $escape(list.guideRebateMoney), $out += "</td> </tr> ", 
                    $line = 51;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 57), $out += " ", $line = 58;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each shopAccountList as rs index}}\r\n    <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{if !!rs.isConfirmAccount}}1{{else}}0{{/if}}">\r\n        <td>{{rs.tripMessage}}</td>\r\n        <td>{{rs.accountTime}}</td>\r\n        <td>{{rs.count}}</td>\r\n        <td>{{if rs.shopItem.length >0}}{{rs.shopItem[0].itemName}}{{if rs.shopItem.length >1}}...{{/if}}<a class="cursor T-action T-see-group">展开</a>{{/if}}</td>\r\n        <td>{{rs.consumeMoney}}</td>\r\n        <td>{{rs.travelAgencyRebateMoney}}</td>\r\n        <td>{{rs.guideRebateMoney}}</td>\r\n        <td>{{rs.customerRebateMoney}}</td>\r\n        <td>{{rs.parkingRebateMoney}}</td>\r\n        <td style="white-space: nowrap;">{{if !rs.billImage}}<span style="color:#bbb">查看</span>{{else}}<a class="cursor T-action T-view-receipts" data-billImage="{{rs.billImage}}">查看</a>{{/if}}</td>\r\n        <td>{{rs.backMoney}}</td>\r\n        <td><a class="cursor T-action T-payDetails">{{rs.receiveMoney}}</a>\r\n        <td>{{rs.settlementMoney}}</td>\r\n        <td name="unPayedMoney">{{rs.unReceiveMoney}}</td>\r\n        <td><input type="text" class="col-sm-12 T-reciveMoney" name="payMoney" data-le="{{rs.unReceiveMoney}}" {{if !source && rs.unReceiveMoney <= 0}} disabled {{/if}} value="{{rs.payMoney}}"></td>\r\n        <td><input type="text" class="col-sm-12 T-payRemark" name="payRemark" {{if !source && rs.unReceiveMoney <= 0}} disabled {{/if}} value="{{rs.IncomeRemark}}"></td>\r\n        <td>{{rs.checkTime}}</td>\r\n        <td>{{rs.checkName}}</td>\r\n        <td>\r\n            <label class="pos-rel">\r\n                <span class="lbl">{{if !!rs.isConfirmAccount}}已{{else}}未{{/if}}对账</span>\r\n            </label>\r\n            <label class="cursor" data-right="1310004"> <a> |</a></label>\r\n            <a class="cursor T-action T-view-details" data-right="1310004">查看</a>\r\n        </td>\r\n    </tr>\r\n    {{if rs.shopItem.length > 0}}\r\n    <tr class="hide">\r\n        <td colspan="19">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border" style="min-width: 45px;">序号</th>\r\n                        <th class="th-border" style="min-width: 70px;">商品</th>\r\n                        <th class="th-border" style="min-width: 120px;">消费金额</th>\r\n                        <th class="th-border" style="min-width: 45px;">社佣</th>\r\n                        <th class="th-border" style="min-width: 45px;">导佣</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    {{each rs.shopItem as list i}}\r\n                    <tr>\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{list.itemName}}</td>\r\n                        <td>{{list.consumeMoney}}</td>\r\n                        <td>{{list.travelAgencyRebateMoney}}</td>\r\n                        <td>{{list.guideRebateMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </td>\r\n    </tr>\r\n\r\n    {{/if}}\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});