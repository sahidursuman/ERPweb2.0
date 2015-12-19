/*TMODJS:{"debug":true,"version":3,"md5":"09543cc04a4226fac07d28672a3cddc4"}*/
define(function(require) {
    return require("../../../template")("arrange/booking/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, bookingOrderList = $data.bookingOrderList, $escape = ($data.booking, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(bookingOrderList, function(booking) {
                $out += ' <tr data-entity-id="', $line = 2, $out += $escape(booking.id), $out += '"> <td>', 
                $line = 3, $out += $escape(booking.orderNumber), $out += "</td> <td>", $line = 4, 
                null != booking.partnerAgency && ($line = 4, $out += $escape(booking.partnerAgency.travelAgencyName), 
                $line = 4), $out += "</td> <td> ", $line = 6, 0 == booking.hotelOrderStatus ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 7) : ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 8), $out += " </td> <td> ", $line = 11, 0 == booking.ticketOrderStatus ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 12) : ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 13), $out += " </td> <td> ", $line = 16, 0 == booking.scenicOrderStatus ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 17) : ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 18), $out += " </td> <td> ", $line = 21, 0 == booking.busCompanyOrderStatus ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 22) : ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 23), $out += " </td> <td>", $line = 25, $out += $escape(booking.sumNeedGetMoney), 
                $out += "</td> <td>", $line = 26, $out += $escape(booking.getedMoney), $out += "</td> <td>", 
                $line = 27, null != booking.createUser && ($line = 27, $out += $escape(booking.createUser.realName), 
                $line = 27), $out += "</td> <td>", $line = 28, $out += $escape(booking.createTime), 
                $out += "</td> <td>", $line = 29, 1 == booking.isConfirmAccount ? ($out += "已对账", 
                $line = 29) : ($out += "未对账", $line = 29), $out += '</td> <td> <a data-entity-id="', 
                $line = 31, $out += $escape(booking.id), $out += '" title="查看计划" class="T-action cursor T-view"> 查看 </a> <a data-entity-id="', 
                $line = 34, $out += $escape(booking.id), $out += '" title="编辑计划" class=" cursor ', 
                $line = 34, 1 != booking.isConfirmAccount && ($out += "T-action T-edit", $line = 34), 
                $out += ' R-right" data-right="1170003" ', $line = 34, 1 == booking.isConfirmAccount && ($out += ' style="color: #bbb" ', 
                $line = 34), $out += '> <label class="padding-right20">|</label> 编辑 </a> <a data-entity-id="', 
                $line = 38, $out += $escape(booking.id), $out += '" title="取消计划" class=" cursor ', 
                $line = 38, 1 != booking.isConfirmAccount && ($out += "T-action T-cancel", $line = 38), 
                $out += ' R-right" data-right="1170004" ', $line = 38, 1 == booking.isConfirmAccount && ($out += ' style="color: #bbb" ', 
                $line = 38), $out += '> <label class="padding-right20">|</label> 取消 </a> </td> </tr> ', 
                $line = 44;
            }), $out += " ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each bookingOrderList as booking}}\r\n<tr data-entity-id="{{booking.id}}">\r\n    <td>{{booking.orderNumber}}</td>\r\n    <td>{{if booking.partnerAgency != null}}{{booking.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n    <td>\r\n        {{if booking.hotelOrderStatus == 0}}\r\n        <i class="ace-icon fa fa-times red bigger-125"></i> {{else}}\r\n        <i class="ace-icon fa fa-check green bigger-130"></i> {{/if}}\r\n    </td>\r\n    <td>\r\n        {{if booking.ticketOrderStatus == 0}}\r\n        <i class="ace-icon fa fa-times red bigger-125"></i> {{else}}\r\n        <i class="ace-icon fa fa-check green bigger-130"></i> {{/if}}\r\n    </td>\r\n    <td>\r\n        {{if booking.scenicOrderStatus == 0}}\r\n        <i class="ace-icon fa fa-times red bigger-125"></i> {{else}}\r\n        <i class="ace-icon fa fa-check green bigger-130"></i> {{/if}}\r\n    </td>\r\n    <td>\r\n        {{if booking.busCompanyOrderStatus == 0}}\r\n        <i class="ace-icon fa fa-times red bigger-125"></i> {{else}}\r\n        <i class="ace-icon fa fa-check green bigger-130"></i> {{/if}}\r\n    </td>\r\n    <td>{{booking.sumNeedGetMoney}}</td>\r\n    <td>{{booking.getedMoney}}</td>\r\n    <td>{{if booking.createUser != null}}{{booking.createUser.realName}}{{/if}}</td>\r\n    <td>{{booking.createTime}}</td>\r\n    <td>{{if booking.isConfirmAccount == 1}}已对账{{else}}未对账{{/if}}</td>\r\n    <td>\r\n        <a data-entity-id="{{booking.id}}" title="查看计划" class="T-action cursor T-view">\r\n							查看\r\n						</a>\r\n        <a data-entity-id="{{booking.id}}" title="编辑计划" class=" cursor {{if booking.isConfirmAccount != 1}}T-action T-edit{{/if}} R-right" data-right="1170003" {{if booking.isConfirmAccount==1 }} style="color: #bbb" {{/if}}>\r\n            <label class="padding-right20">|</label>\r\n            编辑\r\n        </a>\r\n        <a data-entity-id="{{booking.id}}" title="取消计划" class=" cursor {{if booking.isConfirmAccount != 1}}T-action T-cancel{{/if}} R-right" data-right="1170004" {{if booking.isConfirmAccount==1 }} style="color: #bbb" {{/if}}>\r\n            <label class="padding-right20">|</label>\r\n            取消\r\n        </a>\r\n    </td>\r\n</tr>\r\n{{/each}}\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});