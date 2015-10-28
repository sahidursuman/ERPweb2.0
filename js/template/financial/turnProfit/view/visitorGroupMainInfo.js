/*TMODJS:{"debug":true,"version":49,"md5":"96ae2efdcfb61655cd47aa5ba0d30864"}*/
define(function(require) {
    return require("../../../template")("financial/turnProfit/view/visitorGroupMainInfo", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, touristGroupDetail = $data.touristGroupDetail, $escape = $utils.$escape, $each = $utils.$each, $out = ($data.transferFee, 
            $data.$index, "");
            return $out += ' <form class="form-horizontal touristGroupMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereOne"> <tr> <td class="style-myself">线路产品：</td> <td class="styleOne-self">', 
            $line = 7, null != touristGroupDetail.lineProduct && ($line = 7, $out += $escape(touristGroupDetail.lineProduct.name), 
            $line = 7), $out += '</td> <td class="style-myself">出游日期：</td> <td class="styleOne-self">', 
            $line = 9, $out += $escape($helpers.dateFormat(touristGroupDetail.startTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> <tr> <td class="style-myself" style="width:150px">是否购买保险：</td> <td class="styleOne-self">', 
            $line = 14, 0 == touristGroupDetail.buyInsurance ? ($out += " 否 ", $line = 16) : ($out += " 是 ", 
            $line = 18), $out += '</td> <td class="style-myself">客户来源：</td> <td class="styleOne-self" >', 
            $line = 20, null != touristGroupDetail.partnerAgency && ($line = 20, $out += $escape(touristGroupDetail.partnerAgency.travelAgencyName), 
            $line = 20), $out += '</td> </tr> <tr> <td class="style-myself" style="width:150px">同行联系人：</td> <td class="styleOne-self" >', 
            $line = 25, null != touristGroupDetail.partnerAgencyContact && ($line = 25, $out += $escape(touristGroupDetail.partnerAgencyContact.contactRealname), 
            $out += " -[", $line = 25, $out += $escape(touristGroupDetail.partnerAgencyContact.contactMobileNumber), 
            $out += "]", $line = 25), $out += '</td> <td class="style-myself">获得方式：</td> <td class="styleOne-self" >', 
            $line = 27, 1 == touristGroupDetail.getType ? ($out += " 旅行社系统 ", $line = 29) : 2 == touristGroupDetail.getType ? ($out += " 传真 ", 
            $line = 31) : 3 == touristGroupDetail.getType ? ($out += " 短信 ", $line = 33) : 4 == touristGroupDetail.getType ? ($out += " 电话 ", 
            $line = 35) : 5 == touristGroupDetail.getType && ($out += " QQ ", $line = 37), $out += '</td> </tr> <tr> <td class="style-myself">应收：</td> <td class="styleOne-self" >', 
            $line = 42, $out += $escape(touristGroupDetail.needPayAllMoney), $out += '</td> <td class="style-myself">已收：</td> <td class="styleOne-self">', 
            $line = 44, $out += $escape(touristGroupDetail.payedMoney), $out += '</td> </tr> <tr> <td class="style-myself">现收：</td> <td class="styleOne-self">', 
            $line = 48, $out += $escape(touristGroupDetail.currentNeedPayMoney), $out += '</td> <td class="style-myself">未收：</td> <td class="styleOne-self">', 
            $line = 51, $out += $escape(touristGroupDetail.unIncomeMoney), $out += '</td></tr> </table> <table class="whereQ whereTwo" style="margin-top: 40px">    <tr> <td class="style-myself">类型</td> <td class="style-myself">说明</td> <td class="style-myself">数量</td> <td class="style-myself">单价</td> </tr> <tr> <td> 结算价 </td> <td> 大人 </td> <td> <label class="control-label">', 
            $line = 73, $out += $escape(touristGroupDetail.adultCount), $out += '</label> </td> <td> <label class="control-label">', 
            $line = 76, $out += $escape(touristGroupDetail.adultPrice), $out += '</label> </td> </tr> <tr> <td> 结算价 </td> <td> 小孩 </td> <td> <label class="control-label">', 
            $line = 89, $out += $escape(touristGroupDetail.childCount), $out += '</label> </td> <td> <label class="control-label">', 
            $line = 92, $out += $escape(touristGroupDetail.childPrice), $out += "</label> </td> </tr>  ", 
            $line = 98, $each(touristGroupDetail.touristGroupTransferFeeSet, function(transferFee) {
                $out += " ", $line = 99, null != transferFee && ($out += " <tr> <td>其他费用</td> <td>", 
                $line = 102, $out += $escape(transferFee.discribe), $out += "</td> <td>", $line = 103, 
                $out += $escape(transferFee.count), $out += "</td> <td>", $line = 104, $out += $escape(transferFee.otherPrice), 
                $out += "</td> </tr> ", $line = 106), $out += " ", $line = 107;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n<form class="form-horizontal touristGroupMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ whereOne">\r\n\r\n		<tr>\r\n			<td class="style-myself">线路产品：</td>\r\n			<td class="styleOne-self">{{if touristGroupDetail.lineProduct != null}}{{touristGroupDetail.lineProduct.name}}{{/if}}</td>\r\n			<td class="style-myself">出游日期：</td>\r\n			<td class="styleOne-self">{{touristGroupDetail.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself" style="width:150px">是否购买保险：</td>\r\n			<td class="styleOne-self">{{if touristGroupDetail.buyInsurance == 0}}\r\n				否\r\n				{{else touristGroupDetail.buyInsurance == 1}}\r\n				是\r\n				{{/if}}</td>\r\n			<td class="style-myself">客户来源：</td>\r\n			<td class="styleOne-self" >{{if touristGroupDetail.partnerAgency != null}}{{touristGroupDetail.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself" style="width:150px">同行联系人：</td>\r\n			<td class="styleOne-self" >{{if touristGroupDetail.partnerAgencyContact != null}}{{touristGroupDetail.partnerAgencyContact.contactRealname}} -[{{touristGroupDetail.partnerAgencyContact.contactMobileNumber}}]{{/if}}</td>\r\n			<td class="style-myself">获得方式：</td>\r\n			<td class="styleOne-self" >{{if touristGroupDetail.getType == 1}}\r\n				旅行社系统\r\n				{{else if touristGroupDetail.getType == 2}}\r\n				传真\r\n				{{else if touristGroupDetail.getType == 3}}\r\n				短信\r\n				{{else if touristGroupDetail.getType == 4}}\r\n				电话\r\n				{{else if touristGroupDetail.getType == 5}}\r\n				QQ\r\n				{{/if}}</td>\r\n		</tr>\r\n\r\n		<tr>\r\n			<td class="style-myself">应收：</td>\r\n			<td class="styleOne-self" >{{touristGroupDetail.needPayAllMoney}}</td>\r\n			<td class="style-myself">已收：</td>\r\n			<td class="styleOne-self">{{touristGroupDetail.payedMoney}}</td>\r\n			</tr>\r\n		<tr>\r\n			<td class="style-myself">现收：</td>\r\n			<td class="styleOne-self">{{touristGroupDetail.currentNeedPayMoney}}</td>\r\n\r\n			<td class="style-myself">未收：</td>\r\n			<td class="styleOne-self">{{touristGroupDetail.unIncomeMoney}}</td></tr>\r\n	</table>\r\n\r\n	<table class="whereQ whereTwo" style="margin-top: 40px">\r\n		<!--<tr>-->\r\n		<!--<td colspan="8" class="HeadManage" style="text-align: left"></td>-->\r\n		<!--</tr>-->\r\n		<tr>\r\n			<td class="style-myself">类型</td>\r\n			<td class="style-myself">说明</td>\r\n			<td class="style-myself">数量</td>\r\n			<td class="style-myself">单价</td>\r\n		</tr>\r\n\r\n		<tr>\r\n			<td>\r\n				结算价\r\n			</td>\r\n			<td>\r\n				大人\r\n			</td>\r\n			<td>\r\n				<label class="control-label">{{touristGroupDetail.adultCount}}</label>\r\n			</td>\r\n			<td>\r\n				<label class="control-label">{{touristGroupDetail.adultPrice}}</label>\r\n			</td>\r\n\r\n\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n				结算价\r\n			</td>\r\n			<td>\r\n				小孩\r\n			</td>\r\n			<td>\r\n				<label class="control-label">{{touristGroupDetail.childCount}}</label>\r\n			</td>\r\n			<td>\r\n				<label class="control-label">{{touristGroupDetail.childPrice}}</label>\r\n			</td>\r\n			\r\n\r\n		</tr>\r\n		<!-- 其他费用 -->\r\n		  {{each touristGroupDetail.touristGroupTransferFeeSet as transferFee}}\r\n		    {{if transferFee!=null}}\r\n		      <tr>   \r\n		            <td>其他费用</td>  \r\n		            <td>{{transferFee.discribe}}</td>\r\n		            <td>{{transferFee.count}}</td>  \r\n		            <td>{{transferFee.otherPrice}}</td>\r\n		      </tr>\r\n		      {{/if}}  \r\n		  {{/each}} \r\n	</table>\r\n	</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});