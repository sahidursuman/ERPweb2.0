/*TMODJS:{"debug":true,"version":16,"md5":"8a8ce88de2e5e918ff8a6ba8a534dd3c"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferProfit/view/visitorGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), touristGroupDetail = $data.touristGroupDetail, $escape = $utils.$escape, $each = $utils.$each, $out = ($data.touristGroup, 
            $data.index, "");
            return $out += ' <form class="form-horizontal touristGroupMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereOne" style="width:97%"> <tr> <td class="style-myself">住宿标准：</td> <td class="styleOne-self">', 
            $line = 6, 1 == touristGroupDetail.hotelLevel ? ($out += " 三星以下 ", $line = 8) : 2 == touristGroupDetail.hotelLevel ? ($out += " 三星 ", 
            $line = 10) : 3 == touristGroupDetail.hotelLevel ? ($out += " 准四星 ", $line = 12) : 4 == touristGroupDetail.hotelLevel ? ($out += " 四星 ", 
            $line = 14) : 5 == touristGroupDetail.hotelLevel ? ($out += " 准五星 ", $line = 16) : 6 == touristGroupDetail.hotelLevel ? ($out += " 五星 ", 
            $line = 18) : 7 == touristGroupDetail.hotelLevel && ($out += " 五星以上 ", $line = 20), 
            $out += '</td> <td class="style-myself">包含自费：</td> <td class="styleOne-self">', 
            $line = 22, $out += $escape(touristGroupDetail.includeSelfPay), $out += '</td> </tr> <tr> <td class="style-myself">备注：</td> <td class="styleOne-self" colspan="3">', 
            $line = 26, $out += $escape(touristGroupDetail.remark), $out += '</td> </tr> </table> <table class="whereQ whereTwo margin-top15" style="width:97%">    <tr> <td class="style-myself">序号</td> <td class="style-myself">姓名</td> <td class="style-myself">手机号码</td> <td class="style-myself">证件类型</td> <td class="style-myself">证件号</td> <td class="style-myself">是否为联系人</td> </tr> ', 
            $line = 42, $each(touristGroupDetail.touristGroupMemberList, function(touristGroup, index) {
                $out += ' <tr data-entity-id="touristGroup.id"> <td>', $line = 44, $out += $escape(index + 1), 
                $out += '</td> <td class="">', $line = 45, $out += $escape(touristGroup.name), $out += "</td> <td> ", 
                $line = 47, $out += $escape(touristGroup.mobileNumber), $out += " </td> <td> ", 
                $line = 50, 0 == touristGroup.idCardType ? ($out += "身份证 ", $line = 51) : 1 == touristGroup.idCardType ? ($out += "护照 ", 
                $line = 52) : ($out += "其它 ", $line = 53), $out += " </td> <td> ", $line = 56, $out += $escape(touristGroup.idCardNumber), 
                $out += " </td> <td> ", $line = 59, 0 == touristGroup.isContactUser ? ($out += " 否 ", 
                $line = 61) : ($out += " 是 ", $line = 63), $out += " </td> </tr> ", $line = 66;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--<div class="col-xs-12">-->\r\n<form class="form-horizontal touristGroupMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ whereOne" style="width:97%">\r\n		<tr>\r\n			<td class="style-myself">住宿标准：</td>\r\n			<td class="styleOne-self">{{if touristGroupDetail.hotelLevel == 1}}\r\n				三星以下\r\n				{{else if touristGroupDetail.hotelLevel == 2}}\r\n				三星\r\n				{{else if touristGroupDetail.hotelLevel == 3}}\r\n				准四星\r\n				{{else if touristGroupDetail.hotelLevel == 4}}\r\n				四星\r\n				{{else if touristGroupDetail.hotelLevel == 5}}\r\n				准五星\r\n				{{else if touristGroupDetail.hotelLevel == 6}}\r\n				五星\r\n				{{else if touristGroupDetail.hotelLevel == 7}}\r\n				五星以上\r\n				{{/if}}</td>\r\n			<td class="style-myself">包含自费：</td>\r\n			<td class="styleOne-self">{{touristGroupDetail.includeSelfPay}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">备注：</td>\r\n			<td class="styleOne-self" colspan="3">{{touristGroupDetail.remark}}</td>\r\n		</tr>\r\n	</table>\r\n	<table class="whereQ whereTwo margin-top15" style="width:97%">\r\n		<!--<tr>-->\r\n			<!--<td colspan="8" class="HeadManage" style="text-align: left"></td>-->\r\n		<!--</tr>-->\r\n		<tr>\r\n			<td class="style-myself">序号</td>\r\n			<td class="style-myself">姓名</td>\r\n			<td class="style-myself">手机号码</td>\r\n			<td class="style-myself">证件类型</td>\r\n			<td class="style-myself">证件号</td>\r\n			<td class="style-myself">是否为联系人</td>\r\n\r\n		</tr>\r\n		{{each touristGroupDetail.touristGroupMemberList as touristGroup index}}\r\n		<tr  data-entity-id="touristGroup.id">\r\n			<td>{{index+1}}</td>\r\n			<td class="">{{touristGroup.name}}</td>\r\n			<td>\r\n				{{touristGroup.mobileNumber}}\r\n			</td>\r\n			<td>\r\n				{{if touristGroup.idCardType == 0}}身份证\r\n				{{else if touristGroup.idCardType == 1}}护照\r\n				{{else}}其它\r\n				{{/if}}\r\n			</td>\r\n			<td>\r\n				{{touristGroup.idCardNumber}}\r\n			</td>\r\n			<td>\r\n				{{if touristGroup.isContactUser==0}}\r\n				否\r\n				{{else}}\r\n				是\r\n				{{/if}}\r\n			</td>\r\n		</tr>\r\n		{{/each}}\r\n	</table>\r\n	</form>\r\n<!--</div>-->'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});