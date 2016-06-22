/*TMODJS:{"debug":true,"version":16,"md5":"3fb236a250157fb281534b9473b4967a"}*/
define(function(require) {
    return require("../../../../template")("resource/touristGroupN/view/booking/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, bookingOrderList = $data.bookingOrderList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(bookingOrderList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 3, $out += $escape(rs.orderNumber), $out += "</td> <td>", $line = 4, "" != rs.date && null != rs.date ? ($line = 4, 
                $out += $escape(rs.date), $line = 4) : ($out += "-", $line = 4), $out += "</td> <td>", 
                $line = 5, $out += $escape(rs.partnerAgencyName), $out += '</td> <td><i class="ace-icon fa', 
                $line = 6, 1 == rs.hotelOrderStatus ? ($out += " fa-check green bigger-130", $line = 6) : ($out += " fa-times red bigger-125", 
                $line = 6), $out += '"></i></td> <td><i class="ace-icon fa', $line = 7, 1 == rs.ticketOrderStatus ? ($out += " fa-check green bigger-130", 
                $line = 7) : ($out += " fa-times red bigger-125", $line = 7), $out += '"></i></td> <td><i class="ace-icon fa', 
                $line = 8, 1 == rs.scenicOrderStatus ? ($out += " fa-check green bigger-130", $line = 8) : ($out += " fa-times red bigger-125", 
                $line = 8), $out += '"></i></td> <td><i class="ace-icon fa', $line = 9, 1 == rs.busCompanyOrderStatus ? ($out += " fa-check green bigger-130", 
                $line = 9) : ($out += " fa-times red bigger-125", $line = 9), $out += '"></i></td> <td><i class="ace-icon fa', 
                $line = 10, 1 == rs.otherOrderStatus ? ($out += " fa-check green bigger-130", $line = 10) : ($out += " fa-times red bigger-125", 
                $line = 10), $out += '"></i></td> <td><span class="F-float">', $line = 11, $out += $escape(rs.sumNeedGetMoney), 
                $out += "</span></td> <td>", $line = 12, $out += $escape(rs.outOPUserName), $out += '</td> <td> <div class="btn-group" style="width:120px;"> <a class="T-action T-view cursor"> 查看 </a> <a class="', 
                $line = 18, 1 != rs.isConfirmAccount ? ($out += "T-action T-update cursor", $line = 18) : ($out += "hct-color-BBB", 
                $line = 18), $out += ' R-right" data-right="1470006" ', $line = 18, 1 == rs.isConfirmAccount && ($out += 'title="该代订订单已对账，不能编辑"', 
                $line = 18), $out += '> <label class="padding-right20">|</label> <span>编辑</span> </a> <a class="', 
                $line = 22, 1 != rs.isConfirmAccount && 1 != rs.isArrange ? ($out += "T-action T-delete cursor", 
                $line = 22) : ($out += "hct-color-BBB", $line = 22), $out += ' R-right" data-right="1470005" ', 
                $line = 22, 1 == rs.isConfirmAccount ? ($out += 'title="该代订订单已对账，不能删除"', $line = 22) : 1 == rs.isArrange && ($out += 'title="该代订订单已有安排，不能删除"', 
                $line = 22), $out += '> <label class="padding-right20">|</label> 删除 </a> </div> </td> </tr> ', 
                $line = 29;
            }), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each bookingOrderList as rs}}\r\n<tr data-id="{{rs.id}}">\r\n    <td>{{rs.orderNumber}}</td>\r\n    <td>{{if rs.date != "" && rs.date != null}}{{rs.date}}{{else}}-{{/if}}</td>\r\n    <td>{{rs.partnerAgencyName}}</td>\r\n    <td><i class="ace-icon fa{{if rs.hotelOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><i class="ace-icon fa{{if rs.ticketOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><i class="ace-icon fa{{if rs.scenicOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><i class="ace-icon fa{{if rs.busCompanyOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><i class="ace-icon fa{{if rs.otherOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><span class="F-float">{{rs.sumNeedGetMoney}}</span></td>\r\n    <td>{{rs.outOPUserName}}</td>\r\n    <td>\r\n        <div class="btn-group" style="width:120px;">\r\n            <a class="T-action T-view cursor">\r\n                查看\r\n            </a>\r\n            <a class="{{if rs.isConfirmAccount != 1}}T-action T-update cursor{{else}}hct-color-BBB{{/if}} R-right" data-right="1470006" {{if rs.isConfirmAccount == 1}}title="该代订订单已对账，不能编辑"{{/if}}>\r\n                <label class="padding-right20">|</label>\r\n                <span>编辑</span>\r\n            </a>\r\n            <a class="{{if rs.isConfirmAccount != 1 && rs.isArrange != 1}}T-action T-delete cursor{{else}}hct-color-BBB{{/if}} R-right" data-right="1470005" {{if rs.isConfirmAccount == 1}}title="该代订订单已对账，不能删除"{{else if rs.isArrange ==1}}title="该代订订单已有安排，不能删除"{{/if}}>\r\n                <label class="padding-right20">|</label>\r\n                删除\r\n            </a>\r\n        </div>\r\n    </td>\r\n</tr>\r\n{{/each}}\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});