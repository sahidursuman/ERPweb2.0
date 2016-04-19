/*TMODJS:{"debug":true,"version":5,"md5":"d9e25a6c9025274a50307686e524c4bb"}*/
define(function(require) {
    return require("../../../../template")("resource/touristGroupN/view/booking/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, bookingOrderList = $data.bookingOrderList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(bookingOrderList, function(rs) {
                $out += ' <tr data-id="', $line = 2, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 3, $out += $escape(rs.orderNumber), $out += "</td> <td>", $line = 4, $out += $escape(rs.partnerAgencyName), 
                $out += '</td> <td><i class="ace-icon fa', $line = 5, 1 == rs.hotelOrderStatus ? ($out += " fa-check green bigger-130", 
                $line = 5) : ($out += " fa-times red bigger-125", $line = 5), $out += '"></i></td> <td><i class="ace-icon fa', 
                $line = 6, 1 == rs.ticketOrderStatus ? ($out += " fa-check green bigger-130", $line = 6) : ($out += " fa-times red bigger-125", 
                $line = 6), $out += '"></i></td> <td><i class="ace-icon fa', $line = 7, 1 == rs.scenicOrderStatus ? ($out += " fa-check green bigger-130", 
                $line = 7) : ($out += " fa-times red bigger-125", $line = 7), $out += '"></i></td> <td><i class="ace-icon fa', 
                $line = 8, 1 == rs.busCompanyOrderStatus ? ($out += " fa-check green bigger-130", 
                $line = 8) : ($out += " fa-times red bigger-125", $line = 8), $out += '"></i></td> <td><span class="F-float">', 
                $line = 9, $out += $escape(rs.sumNeedGetMoney), $out += "</span></td> <td>", $line = 10, 
                $out += $escape(rs.outOPUserName), $out += "</td> <td>", $line = 11, $out += $escape("1" == rs.status ? "已安排" : "未安排"), 
                $out += ' </td> <td> <div class="btn-group" style="width:120px;"> <a class="T-action T-view cursor"> 查看 </a> <a class="T-action T-update cursor"> <label class="padding-right20">|</label> <span>编辑</span> </a> <a class="T-action T-delete cursor"> <label class="padding-right20">|</label> 删除 </a> </div> </td> </tr> ', 
                $line = 28;
            }), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each bookingOrderList as rs}}\r\n<tr data-id="{{rs.id}}">\r\n    <td>{{rs.orderNumber}}</td>\r\n    <td>{{rs.partnerAgencyName}}</td>\r\n    <td><i class="ace-icon fa{{if rs.hotelOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><i class="ace-icon fa{{if rs.ticketOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><i class="ace-icon fa{{if rs.scenicOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><i class="ace-icon fa{{if rs.busCompanyOrderStatus == 1}} fa-check green bigger-130{{else}} fa-times red bigger-125{{/if}}"></i></td>\r\n    <td><span class="F-float">{{rs.sumNeedGetMoney}}</span></td>\r\n    <td>{{rs.outOPUserName}}</td>\r\n    <td>{{rs.status == "1" ? "已安排" : "未安排"}} </td>\r\n    <td>\r\n        <div class="btn-group" style="width:120px;">\r\n            <a class="T-action T-view cursor">\r\n                查看\r\n            </a>\r\n            <a class="T-action T-update cursor">\r\n                <label class="padding-right20">|</label>\r\n                <span>编辑</span>\r\n            </a>\r\n            <a class="T-action T-delete cursor">\r\n                <label class="padding-right20">|</label>\r\n                删除\r\n            </a>\r\n        </div>\r\n    </td>\r\n</tr>\r\n{{/each}}\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});