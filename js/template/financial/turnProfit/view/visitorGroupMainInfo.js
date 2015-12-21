/*TMODJS:{"debug":true,"version":123,"md5":"58f823a20ec619017e02334f38f0cf34"}*/
define(function(require) {
    return require("../../../template")("financial/turnProfit/view/visitorGroupMainInfo", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, needIncomeMoneyDetail = $data.needIncomeMoneyDetail, $escape = $utils.$escape, $each = $utils.$each, $out = ($data.transferFee, 
            $data.$index, "");
            return $out += ' <form class="form-horizontal touristGroupMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereOne" style="width:97%"> <tr> <td class="style-myself">线路产品：</td> <td class="styleOne-self">', 
            $line = 6, null != needIncomeMoneyDetail.lineProductName && ($line = 6, $out += $escape(needIncomeMoneyDetail.lineProductName), 
            $line = 6), $out += '</td> <td class="style-myself">出游日期：</td> <td class="styleOne-self">', 
            $line = 8, $out += $escape($helpers.dateFormat(needIncomeMoneyDetail.startTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> <tr> <td class="style-myself" style="width:150px">是否购买保险：</td> <td class="styleOne-self">', 
            $line = 13, 0 == needIncomeMoneyDetail.buyInsurance ? ($out += " 否 ", $line = 15) : ($out += " 是 ", 
            $line = 17), $out += '</td> <td class="style-myself">客户来源：</td> <td class="styleOne-self" >', 
            $line = 19, null != needIncomeMoneyDetail.partnerAgencyName && ($line = 19, $out += $escape(needIncomeMoneyDetail.partnerAgencyName), 
            $line = 19), $out += '</td> </tr> <tr> <td class="style-myself" style="width:150px">同行联系人：</td> <td class="styleOne-self" >', 
            $line = 24, null != needIncomeMoneyDetail.partnerAgencyContactName && ($line = 24, 
            $out += $escape(needIncomeMoneyDetail.partnerAgencyContactName), $out += " -[", 
            $line = 24, $out += $escape(needIncomeMoneyDetail.partnerAgencyContactMobileNumber), 
            $out += "]", $line = 24), $out += '</td> <td class="style-myself">获得方式：</td> <td class="styleOne-self" >', 
            $line = 26, 1 == needIncomeMoneyDetail.getType ? ($out += " 旅行社系统 ", $line = 28) : 2 == needIncomeMoneyDetail.getType ? ($out += " 传真 ", 
            $line = 30) : 3 == needIncomeMoneyDetail.getType ? ($out += " 短信 ", $line = 32) : 4 == needIncomeMoneyDetail.getType ? ($out += " 电话 ", 
            $line = 34) : 5 == needIncomeMoneyDetail.getType && ($out += " QQ ", $line = 36), 
            $out += '</td> </tr> <tr> <td class="style-myself">应收：</td> <td class="styleOne-self" >', 
            $line = 41, $out += $escape(needIncomeMoneyDetail.needIncomeAllMoney), $out += '</td> <td class="style-myself">已收：</td> <td class="styleOne-self">', 
            $line = 43, $out += $escape(needIncomeMoneyDetail.alreadyIncomeMoney), $out += '</td> </tr> <tr> <td class="style-myself">现收：</td> <td class="styleOne-self">', 
            $line = 47, $out += $escape(needIncomeMoneyDetail.currentNeedInComeMoney), $out += '</td> <td class="style-myself">未收：</td> <td class="styleOne-self">', 
            $line = 50, $out += $escape(needIncomeMoneyDetail.unIncomeMoney), $out += '</td></tr> </table> <table class="whereQ whereTwo" style="width:97%;margin-top:20px">    <tr> <td class="style-myself">类型</td> <td class="style-myself">说明</td> <td class="style-myself">数量</td> <td class="style-myself">单价</td> </tr> <tr> <td> 结算价 </td> <td> 大人 </td> <td> <label class="control-label">', 
            $line = 72, $out += $escape(needIncomeMoneyDetail.adultCount), $out += '</label> </td> <td> <label class="control-label">', 
            $line = 75, $out += $escape(needIncomeMoneyDetail.adultPrice), $out += '</label> </td> </tr> <tr> <td> 结算价 </td> <td> 小孩 </td> <td> <label class="control-label">', 
            $line = 86, $out += $escape(needIncomeMoneyDetail.childCount), $out += '</label> </td> <td> <label class="control-label">', 
            $line = 89, $out += $escape(needIncomeMoneyDetail.childPrice), $out += "</label> </td> </tr>  ", 
            $line = 93, $each(needIncomeMoneyDetail.touristGroupFeeList, function(transferFee) {
                $out += " ", $line = 94, null != transferFee && ($out += " <tr> <td>其他费用</td> <td>", 
                $line = 97, $out += $escape(transferFee.describeInfo), $out += "</td> <td>", $line = 98, 
                $out += $escape(transferFee.count), $out += "</td> <td>", $line = 99, $out += $escape(transferFee.price), 
                $out += "</td> </tr> ", $line = 101), $out += " ", $line = 102;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n<form class="form-horizontal touristGroupMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ whereOne" style="width:97%">\r\n		<tr>\r\n			<td class="style-myself">线路产品：</td>\r\n			<td class="styleOne-self">{{if needIncomeMoneyDetail.lineProductName != null}}{{needIncomeMoneyDetail.lineProductName}}{{/if}}</td>\r\n			<td class="style-myself">出游日期：</td>\r\n			<td class="styleOne-self">{{needIncomeMoneyDetail.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself" style="width:150px">是否购买保险：</td>\r\n			<td class="styleOne-self">{{if needIncomeMoneyDetail.buyInsurance == 0}}\r\n				否\r\n				{{else needIncomeMoneyDetail.buyInsurance == 1}}\r\n				是\r\n				{{/if}}</td>\r\n			<td class="style-myself">客户来源：</td>\r\n			<td class="styleOne-self" >{{if needIncomeMoneyDetail.partnerAgencyName != null}}{{needIncomeMoneyDetail.partnerAgencyName}}{{/if}}</td>\r\n\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself" style="width:150px">同行联系人：</td>\r\n			<td class="styleOne-self" >{{if needIncomeMoneyDetail.partnerAgencyContactName != null}}{{needIncomeMoneyDetail.partnerAgencyContactName}} -[{{needIncomeMoneyDetail.partnerAgencyContactMobileNumber}}]{{/if}}</td>\r\n			<td class="style-myself">获得方式：</td>\r\n			<td class="styleOne-self" >{{if needIncomeMoneyDetail.getType == 1}}\r\n				旅行社系统\r\n				{{else if needIncomeMoneyDetail.getType == 2}}\r\n				传真\r\n				{{else if needIncomeMoneyDetail.getType == 3}}\r\n				短信\r\n				{{else if needIncomeMoneyDetail.getType == 4}}\r\n				电话\r\n				{{else if needIncomeMoneyDetail.getType == 5}}\r\n				QQ\r\n				{{/if}}</td>\r\n		</tr>\r\n\r\n		<tr>\r\n			<td class="style-myself">应收：</td>\r\n			<td class="styleOne-self" >{{needIncomeMoneyDetail.needIncomeAllMoney}}</td>\r\n			<td class="style-myself">已收：</td>\r\n			<td class="styleOne-self">{{needIncomeMoneyDetail.alreadyIncomeMoney}}</td>\r\n			</tr>\r\n		<tr>\r\n			<td class="style-myself">现收：</td>\r\n			<td class="styleOne-self">{{needIncomeMoneyDetail.currentNeedInComeMoney}}</td>\r\n\r\n			<td class="style-myself">未收：</td>\r\n			<td class="styleOne-self">{{needIncomeMoneyDetail.unIncomeMoney}}</td></tr>\r\n	</table>\r\n\r\n	<table class="whereQ whereTwo" style="width:97%;margin-top:20px">\r\n		<!--<tr>-->\r\n		<!--<td colspan="8" class="HeadManage" style="text-align: left"></td>-->\r\n		<!--</tr>-->\r\n		<tr>\r\n			<td class="style-myself">类型</td>\r\n			<td class="style-myself">说明</td>\r\n			<td class="style-myself">数量</td>\r\n			<td class="style-myself">单价</td>\r\n		</tr>\r\n\r\n		<tr>\r\n			<td>\r\n				结算价\r\n			</td>\r\n			<td>\r\n				大人\r\n			</td>\r\n			<td>\r\n				<label class="control-label">{{needIncomeMoneyDetail.adultCount}}</label>\r\n			</td>\r\n			<td>\r\n				<label class="control-label">{{needIncomeMoneyDetail.adultPrice}}</label>\r\n			</td>\r\n		</tr>\r\n		<tr>\r\n			<td>\r\n				结算价\r\n			</td>\r\n			<td>\r\n				小孩\r\n			</td>\r\n			<td>\r\n				<label class="control-label">{{needIncomeMoneyDetail.childCount}}</label>\r\n			</td>\r\n			<td>\r\n				<label class="control-label">{{needIncomeMoneyDetail.childPrice}}</label>\r\n			</td>\r\n		</tr>\r\n		<!-- 其他费用 -->\r\n		  {{each needIncomeMoneyDetail.touristGroupFeeList as transferFee}}\r\n		    {{if transferFee!=null}}\r\n		      <tr>   \r\n		            <td>其他费用</td>  \r\n		            <td>{{transferFee.describeInfo}}</td>\r\n		            <td>{{transferFee.count}}</td>  \r\n		            <td>{{transferFee.price}}</td>\r\n		      </tr>\r\n		      {{/if}}  \r\n		  {{/each}} \r\n	</table>\r\n	</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});