/*TMODJS:{"debug":true,"version":58,"md5":"bb61c3bb8f6090f0b29b3d44b5a40e16"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/ticketPayingTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, financialTicketList = $data.financialTicketList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $out = "";
            return $line = 1, $each(financialTicketList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 3, $out += $escape(rs.tripNumber), $line = 3, rs.tripNumber && rs.lineProductName && ($out += "，", 
                $line = 3), $line = 3, $out += $escape(rs.lineProductName), $line = 3, (rs.lineProductName && rs.guideName || rs.tripNumber && !rs.lineProductName && rs.guideName) && ($out += "，", 
                $line = 3), $line = 3, $out += $escape(rs.guideName), $out += "</td> <td>", $line = 4, 
                $out += $escape(rs.accountTime), $out += "</td> <td>", $line = 5, 1 == rs.type ? ($out += "机票", 
                $line = 5) : 2 == rs.type ? ($out += "汽车票", $line = 5) : 3 == rs.type ? ($out += "火车票", 
                $line = 5) : 4 == rs.type && ($out += "轮船票", $line = 5), $out += "</td> <td>", $line = 6, 
                $out += $escape(rs.shift), $out += "</td> <td>", $line = 7, $out += $escape(rs.seatLevel), 
                $out += '</td> <td class="F-float F-money">', $line = 8, $out += $escape(rs.price), 
                $out += '</td> <td class="F-float F-count">', $line = 9, $out += $escape(rs.memberCount), 
                $out += '</td> <td class="F-float F-money">', $line = 10, $out += $escape(rs.reduceMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 11, $out += $escape(rs.needPayMoney), 
                $out += '</td> <td><a class="', $line = 12, rs.payRecoredId ? ($out += "T-action T-payRequest", 
                $line = 12) : ($out += "black", $line = 12), $out += '" data-preid="', $line = 12, 
                $out += $escape(rs.payRecoredId), $out += '" ', $line = 12, rs.payRecoredId || ($out += 'title="没有预付款记录"', 
                $line = 12), $out += '><span class="F-float F-money">', $line = 12, $out += $escape(rs.prePayMoney), 
                $out += '</span></a></td> <td class="T-payedDetail align-left" data-money="', $line = 13, 
                $out += $escape(rs.payedMoney + rs.realGuidePayMoney), $out += '"> <a class="T-action T-payDetails"> <span class="in-block">社付<span class="F-float F-money">', 
                $line = 15, $out += $escape(rs.payedMoney), $out += "</span></span> ", $line = 16, 
                1 != rs.isGuidePay && ($out += '<span class="in-block">导付<span class="F-float F-money" >', 
                $line = 16, $out += $escape(rs.realGuidePayMoney), $out += "</span></span>", $line = 16), 
                $out += " </a> </td> <td>", $line = 19, rs.billImage ? ($out += '<a class="cursor T-action T-view-receipts" url="', 
                $line = 19, $out += $escape(rs.billImage), $out += '">查看</a>', $line = 19) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 19), $out += '</td> <td class="F-float F-money">', $line = 20, $out += $escape(rs.settlementMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 21, $out += $escape(rs.unPayedMoney), 
                $out += '</td> <td><input type="text" class="col-sm-12 T-reciveMoney F-float F-money" name="payMoney" value="', 
                $line = 22, $out += $escape(rs.payMoney), $out += '"></td> <td><textarea class="col-sm-12 hct-textarea T-payRemark" name="payRemark" maxlength="1000">', 
                $line = 23, $out += $escape(rs.payRemark), $out += "</textarea></td> <td>", $line = 24, 
                $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 25, $out += $escape(rs.checkUserName), 
                $out += '</td> <td> <label class="pos-rel"> <span class="lbl">', $line = 28, rs.isConfirmAccount ? ($out += "已", 
                $line = 28) : ($out += "未", $line = 28), $out += '对账</span> </label> <label class="cursor R-right" data-right="1210004"> <a> |</a></label> <a class="cursor T-action T-view-details R-right" data-right="1210004">查看</a> </td> </tr> ', 
                $line = 34;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each financialTicketList as rs index}}\r\n    <tr data-id="{{rs.id}}">\r\n        <td>{{rs.tripNumber}}{{if rs.tripNumber && rs.lineProductName}}，{{/if}}{{rs.lineProductName}}{{if (rs.lineProductName  && rs.guideName) || (rs.tripNumber && !rs.lineProductName && rs.guideName)}}，{{/if}}{{rs.guideName}}</td>\r\n        <td>{{rs.accountTime}}</td>\r\n        <td>{{if rs.type == 1}}机票{{else if rs.type == 2}}汽车票{{else if rs.type == 3}}火车票{{else if rs.type == 4}}轮船票{{/if}}</td>\r\n        <td>{{rs.shift}}</td>\r\n        <td>{{rs.seatLevel}}</td>\r\n        <td class="F-float F-money">{{rs.price}}</td>\r\n        <td class="F-float F-count">{{rs.memberCount}}</td>\r\n        <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n        <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n        <td><a class="{{if rs.payRecoredId}}T-action T-payRequest{{else}}black{{/if}}" data-preid="{{rs.payRecoredId}}" {{if !rs.payRecoredId}}title="没有预付款记录"{{/if}}><span class="F-float F-money">{{rs.prePayMoney}}</span></a></td>\r\n        <td class="T-payedDetail align-left" data-money="{{rs.payedMoney + rs.realGuidePayMoney}}">\r\n            <a class="T-action T-payDetails">\r\n                <span class="in-block">社付<span class="F-float F-money">{{rs.payedMoney}}</span></span>\r\n                {{if rs.isGuidePay != 1}}<span class="in-block">导付<span class="F-float F-money" >{{rs.realGuidePayMoney}}</span></span>{{/if}}\r\n            </a>\r\n        </td>\r\n        <td>{{if !rs.billImage}}<span style="color:#bbb">查看</span>{{else}}<a class="cursor T-action T-view-receipts" url="{{rs.billImage}}">查看</a>{{/if}}</td>\r\n        <td class="F-float F-money">{{rs.settlementMoney}}</td>\r\n        <td class="F-float F-money">{{rs.unPayedMoney}}</td>\r\n        <td><input type="text" class="col-sm-12 T-reciveMoney F-float F-money" name="payMoney" value="{{rs.payMoney}}"></td>\r\n        <td><textarea class="col-sm-12 hct-textarea T-payRemark" name="payRemark" maxlength="1000">{{rs.payRemark}}</textarea></td>\r\n        <td>{{rs.checkTime}}</td>\r\n        <td>{{rs.checkUserName}}</td>\r\n        <td>\r\n            <label class="pos-rel">\r\n                <span class="lbl">{{if !!rs.isConfirmAccount}}已{{else}}未{{/if}}对账</span>\r\n            </label>\r\n            <label class="cursor R-right" data-right="1210004"> <a> |</a></label>\r\n            <a class="cursor T-action T-view-details R-right" data-right="1210004">查看</a>\r\n        </td>\r\n    </tr>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});