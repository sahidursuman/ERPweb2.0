/*TMODJS:{"debug":true,"version":44,"md5":"430b8af086e5c5bf00f71127b6137252"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/shopPayingTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, shopAccountList = $data.shopAccountList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $out = ($data.list, $data.i, "");
            return $line = 1, $each(shopAccountList, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 2, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 2, rs.isConfirmAccount ? ($out += "1", $line = 2) : ($out += "0", $line = 2), 
                $out += '"> <td>', $line = 3, $out += $escape(rs.tripMessage), $out += "</td> <td>", 
                $line = 4, $out += $escape(rs.accountTime), $out += "</td> <td><span>", $line = 5, 
                $out += $escape(rs.count), $out += "</span></td> <td>", $line = 6, rs.shopItem.length > 0 && ($line = 6, 
                $out += $escape(rs.shopItem[0].itemName), $line = 6, rs.shopItem.length > 1 && ($out += "...", 
                $line = 6), $out += '<a class="cursor T-action T-see-group">展开</a>', $line = 6), 
                $out += '</td> <td><span class="F-float F-money">', $line = 7, $out += $escape(rs.consumeMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 8, $out += $escape(rs.travelAgencyRebateMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 9, $out += $escape(rs.guideRebateMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 10, $out += $escape(rs.quanpeiRebateMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 11, $out += $escape(rs.twoRebateMoney), 
                $out += '</span></td> <td style="white-space: nowrap;">', $line = 12, rs.billImage ? ($out += '<a class="cursor T-action T-view-receipts" data-billimage="', 
                $line = 12, $out += $escape(rs.billImage), $out += '">查看</a>', $line = 12) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 12), $out += '</td> <td><span class="F-float F-money">', $line = 13, $out += $escape(rs.backMoney), 
                $out += '</span></td> <td><a class="cursor T-action T-payDetails">&nbsp;&nbsp;社收:<span class="F-float F-money">', 
                $line = 14, $out += $escape(rs.receiveMoney), $out += '</span>&nbsp;&nbsp;导游现收:<span class="F-float F-money">', 
                $line = 14, $out += $escape(rs.rebateCurrentIncomeMoney), $out += '</span></a></td> <td><span class="F-float F-money">', 
                $line = 14, $out += $escape(rs.settlementMoney), $out += '</span></td> <td name="unPayedMoney"><span class="F-float F-money">', 
                $line = 15, $out += $escape(rs.unReceiveMoney), $out += '</span></td> <td><input type="text" class="col-sm-12 T-reciveMoney F-float F-money" name="payMoney" value="', 
                $line = 16, $out += $escape(rs.payMoney), $out += '"></td> <td><textarea class="col-sm-12 hct-textarea T-payRemark" name="payRemark" maxlength="1000">', 
                $line = 17, $out += $escape(rs.payRemark), $out += "</textarea></td> <td>", $line = 18, 
                $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 19, $out += $escape(rs.checkName), 
                $out += '</td> <td> <label class="pos-rel"> <span class="lbl">', $line = 22, rs.isConfirmAccount ? ($out += "已", 
                $line = 22) : ($out += "未", $line = 22), $out += '对账</span> </label> <label class="cursor" data-right="1310004"> <a> |</a></label> <a class="cursor T-action T-view-details" data-right="1310004">查看</a> </td> </tr> ', 
                $line = 28, rs.shopItem.length > 0 && ($out += ' <tr class="hide"> <td colspan="19"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" style="min-width: 45px;">序号</th> <th class="th-border" style="min-width: 70px;">商品</th> <th class="th-border" style="min-width: 120px;">消费金额</th> <th class="th-border" style="min-width: 45px;">社佣</th> <th class="th-border" style="min-width: 45px;">导佣</th> </tr> </thead> <tbody> ', 
                $line = 42, $each(rs.shopItem, function(list, i) {
                    $out += " <tr> <td>", $line = 44, $out += $escape(i + 1), $out += "</td> <td>", 
                    $line = 45, $out += $escape(list.itemName), $out += '</td> <td><span class="F-float F-money">', 
                    $line = 46, $out += $escape(list.consumeMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 47, $out += $escape(list.travelAgencyRebateMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                    $line = 48, $out += $escape(list.guideRebateMoney), $out += "</span></td> </tr> ", 
                    $line = 50;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 56), $out += " ", $line = 57;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each shopAccountList as rs index}}\r\n    <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{if !!rs.isConfirmAccount}}1{{else}}0{{/if}}">\r\n        <td>{{rs.tripMessage}}</td>\r\n        <td>{{rs.accountTime}}</td>\r\n        <td><span>{{rs.count}}</span></td>\r\n        <td>{{if rs.shopItem.length >0}}{{rs.shopItem[0].itemName}}{{if rs.shopItem.length >1}}...{{/if}}<a class="cursor T-action T-see-group">展开</a>{{/if}}</td>\r\n        <td><span class="F-float F-money">{{rs.consumeMoney}}</span></td>\r\n        <td><span class="F-float F-money">{{rs.travelAgencyRebateMoney}}</span></td>\r\n        <td><span class="F-float F-money">{{rs.guideRebateMoney}}</span></td>\r\n        <td><span class="F-float F-money">{{rs.quanpeiRebateMoney}}</span></td>\r\n        <td><span class="F-float F-money">{{rs.twoRebateMoney}}</span></td>\r\n        <td style="white-space: nowrap;">{{if !rs.billImage}}<span style="color:#bbb">查看</span>{{else}}<a class="cursor T-action T-view-receipts" data-billimage="{{rs.billImage}}">查看</a>{{/if}}</td>\r\n        <td><span class="F-float F-money">{{rs.backMoney}}</span></td>\r\n        <td><a class="cursor T-action T-payDetails">&nbsp;&nbsp;社收:<span class="F-float F-money">{{rs.receiveMoney}}</span>&nbsp;&nbsp;导游现收:<span class="F-float F-money">{{rs.rebateCurrentIncomeMoney}}</span></a></td>        <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n        <td name="unPayedMoney"><span class="F-float F-money">{{rs.unReceiveMoney}}</span></td>\r\n        <td><input type="text" class="col-sm-12 T-reciveMoney F-float F-money" name="payMoney" value="{{rs.payMoney}}"></td>\r\n        <td><textarea class="col-sm-12 hct-textarea T-payRemark" name="payRemark" maxlength="1000">{{rs.payRemark}}</textarea></td>\r\n        <td>{{rs.checkTime}}</td>\r\n        <td>{{rs.checkName}}</td>\r\n        <td>\r\n            <label class="pos-rel">\r\n                <span class="lbl">{{if !!rs.isConfirmAccount}}已{{else}}未{{/if}}对账</span>\r\n            </label>\r\n            <label class="cursor" data-right="1310004"> <a> |</a></label>\r\n            <a class="cursor T-action T-view-details" data-right="1310004">查看</a>\r\n        </td>\r\n    </tr>\r\n    {{if rs.shopItem.length > 0}}\r\n    <tr class="hide">\r\n        <td colspan="19">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border" style="min-width: 45px;">序号</th>\r\n                        <th class="th-border" style="min-width: 70px;">商品</th>\r\n                        <th class="th-border" style="min-width: 120px;">消费金额</th>\r\n                        <th class="th-border" style="min-width: 45px;">社佣</th>\r\n                        <th class="th-border" style="min-width: 45px;">导佣</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    {{each rs.shopItem as list i}}\r\n                    <tr>\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{list.itemName}}</td>\r\n                        <td><span class="F-float F-money">{{list.consumeMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{list.travelAgencyRebateMoney}}</span></td>\r\n                        <td><span class="F-float F-money">{{list.guideRebateMoney}}</span></td>\r\n                    </tr>\r\n                    {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </td>\r\n    </tr>\r\n\r\n    {{/if}}\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});