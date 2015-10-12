/*TMODJS:{"debug":true,"version":159,"md5":"63ec5696d8b86a82fd0860072c0524d7"}*/
define(function(require) {
    return require("../../../template")("resource/selfpay/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, selfpay = $data.selfpay, $each = $utils.$each, $out = ($data.itemList, 
            $data.$index, $data.rebateList, $data.index, "");
            return $out += ' <form class="form-horizontal selfpayMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <input name="selfpayId" type="hidden" value="', 
            $line = 3, $out += $escape(selfpay.id), $out += '" /> <table class="whereQ whereOne"> <tr> <td colspan="4" class="HeadManage">自费项目主体信息</td> </tr> <tr> <td class="style-myself">公司名称：</td> <td class="styleOne-self">', 
            $line = 10, $out += $escape(selfpay.name), $out += '</td> <td class="style-myself">是否启用：</td> <td class="styleOne-self"> ', 
            $line = 12, 1 == selfpay.status ? ($out += " 已启用 ", $line = 14) : 0 == selfpay.status && ($out += " 已停用 ", 
            $line = 16), $out += ' </td> </tr> <tr> <td class="style-myself">联系人：</td> <td class="styleOne-self">', 
            $line = 20, $out += $escape(selfpay.managerName), $out += '</td> <td class="style-myself">联系电话：</td> <td class="styleOne-self">', 
            $line = 22, $out += $escape(selfpay.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">座机号码：</td> <td class="styleOne-self">', 
            $line = 26, $out += $escape(selfpay.telNumber), $out += '</td> <td class="style-myself">传真号码：</td> <td class="styleOne-self">', 
            $line = 28, $out += $escape(selfpay.faxNumber), $out += '</td> </tr> <tr> <td class="style-myself">公司所在省市：</td> <td class="styleOne-self" colspan="3">', 
            $line = 32, null != selfpay.province && ($out += " ", $line = 33, $out += $escape(selfpay.province.name), 
            $out += " ", $line = 34), $out += " ", $line = 35, null != selfpay.city && ($out += " -", 
            $line = 36, $out += $escape(selfpay.city.name), $out += " ", $line = 37), $out += " ", 
            $line = 38, null != selfpay.district && ($out += " -", $line = 39, $out += $escape(selfpay.district.name), 
            $out += " ", $line = 40), $out += '</td> </tr> <tr> <td class="style-myself">详细地址：</td> <td class="styleOne-self" colspan="3">', 
            $line = 45, $out += $escape(selfpay.street), $out += '</td> </tr> <tr> <td class="style-myself">公司简介：</td> <td class="styleOne-self" colspan="3">', 
            $line = 49, $out += $escape(selfpay.remark), $out += '</td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo"> <tr> <td colspan="8" class="HeadManage" style="text-align: left">项目价格列表</td> </tr> <tr> <td class="style-myself">项目名称</td> <td class="style-myself">针对客源</td> <td class="style-myself">时间区间</td> <td class="style-myself">内部价格(元)</td> <td class="style-myself">市场价格(元)</td> <td class="style-myself">导游返佣(%)</td> <td class="style-myself">旅行社返佣(%)</td> <td class="style-myself">备注</td> </tr> ', 
            $line = 69, $each(selfpay.selfPayItemList, function(itemList) {
                $out += ' <tr data-entity-id="', $line = 70, $out += $escape(itemList.id), $out += '"> <td> ', 
                $line = 72, $out += $escape(itemList.name), $out += " </td> <td> ", $line = 75, 
                0 == itemList.customerType ? ($out += " 散客 ", $line = 77) : 1 == itemList.customerType && ($out += " 团体 ", 
                $line = 79), $out += ' </td> <td class="rangeTimeWidth">', $line = 81, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 82, 0 == index ? ($out += " ", $line = 83, $out += $escape($helpers.dateFormat(rebateList.startTime, "yyyy-MM-dd")), 
                    $out += "至", $line = 83, $out += $escape($helpers.dateFormat(rebateList.endTime, "yyyy-MM-dd")), 
                    $out += " ", $line = 84) : ($out += " ", $line = 86, $out += $escape($helpers.dateFormat(rebateList.startTime, "yyyy-MM-dd")), 
                    $out += "至", $line = 86, $out += $escape($helpers.dateFormat(rebateList.endTime, "yyyy-MM-dd")), 
                    $out += " ", $line = 87), $line = 87;
                }), $out += " </td> <td>", $line = 89, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 90, 0 == index ? ($out += " ", $line = 91, $out += $escape(rebateList.price), 
                    $out += " ", $line = 92) : ($out += ' <div class="no-padding" style="padding-top:2px!important;"> <label class="control-label center">', 
                    $line = 94, $out += $escape(rebateList.price), $out += "</label> </div>", $line = 95), 
                    $line = 95;
                }), $out += " </td> <td>", $line = 97, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 98, 0 == index ? ($out += ' <div class="no-padding"> <label class="control-label center">', 
                    $line = 100, $out += $escape(rebateList.marketPrice), $out += "</label> </div>", 
                    $line = 101) : ($out += ' <div class="no-padding" style="padding-top:2px!important;"> <label class="control-label center">', 
                    $line = 103, $out += $escape(rebateList.marketPrice), $out += "</label> </div>", 
                    $line = 104), $line = 104;
                }), $out += " </td> <td>", $line = 106, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 107, 0 == index ? ($out += ' <div class="no-padding"> <label class="control-label center">', 
                    $line = 109, $out += $escape($helpers.toFixed(100 * rebateList.guideRate)), $out += "</label> </div>", 
                    $line = 110) : ($out += ' <div class="no-padding" style="padding-top:2px!important;"> <label class="control-label center">', 
                    $line = 112, $out += $escape($helpers.toFixed(100 * rebateList.guideRate)), $out += "</label> </div>", 
                    $line = 113), $line = 113;
                }), $out += " </td> <td>", $line = 115, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 116, 0 == index ? ($out += ' <div class="no-padding"> <label class="control-label center">', 
                    $line = 118, $out += $escape($helpers.toFixed(100 * rebateList.travelAgencyRate)), 
                    $out += "</label> </div>", $line = 119) : ($out += ' <div class="no-padding" style="padding-top:2px!important;"> <label class="control-label center">', 
                    $line = 121, $out += $escape($helpers.toFixed(100 * rebateList.travelAgencyRate)), 
                    $out += "</label> </div>", $line = 122), $line = 122;
                }), $out += ' </td> <td class="remarkWidth"> ', $line = 125, $out += $escape(itemList.remark), 
                $out += " </td> </tr> ", $line = 128;
            }), $out += " </table> </form>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n	<form class="form-horizontal selfpayMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<input name="selfpayId" type="hidden" value="{{selfpay.id}}" />\r\n		<table class="whereQ whereOne">\r\n			<tr>\r\n				<td colspan="4" class="HeadManage">自费项目主体信息</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">公司名称：</td>\r\n				<td class="styleOne-self">{{selfpay.name}}</td>\r\n				<td class="style-myself">是否启用：</td>\r\n				<td class="styleOne-self">	{{if selfpay.status == 1}}\r\n					已启用\r\n					{{else if selfpay.status == 0}}\r\n					已停用\r\n					{{/if}}	</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">联系人：</td>\r\n				<td class="styleOne-self">{{selfpay.managerName}}</td>\r\n				<td class="style-myself">联系电话：</td>\r\n				<td class="styleOne-self">{{selfpay.mobileNumber}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">座机号码：</td>\r\n				<td class="styleOne-self">{{selfpay.telNumber}}</td>\r\n				<td class="style-myself">传真号码：</td>\r\n				<td class="styleOne-self">{{selfpay.faxNumber}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">公司所在省市：</td>\r\n				<td class="styleOne-self" colspan="3">{{if selfpay.province != null}}\r\n					{{selfpay.province.name}}\r\n					{{/if}}\r\n					{{if selfpay.city != null}}\r\n					-{{selfpay.city.name}}\r\n					{{/if}}\r\n					{{if selfpay.district != null}}\r\n					-{{selfpay.district.name}}\r\n					{{/if}}</td>\r\n\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">详细地址：</td>\r\n				<td class="styleOne-self" colspan="3">{{selfpay.street}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">公司简介：</td>\r\n				<td class="styleOne-self" colspan="3">{{selfpay.remark}}</td>\r\n			</tr>\r\n		</table>\r\n	</form>  \r\n\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ whereTwo">\r\n			<tr>\r\n				<td colspan="8" class="HeadManage" style="text-align: left">项目价格列表</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">项目名称</td>\r\n				<td class="style-myself">针对客源</td>\r\n				<td class="style-myself">时间区间</td>\r\n				<td class="style-myself">内部价格(元)</td>\r\n				<td class="style-myself">市场价格(元)</td>\r\n				<td class="style-myself">导游返佣(%)</td>\r\n				<td class="style-myself">旅行社返佣(%)</td>\r\n				<td class="style-myself">备注</td>\r\n			</tr>\r\n			{{each selfpay.selfPayItemList as itemList}}\r\n			<tr data-entity-id="{{itemList.id}}">\r\n				<td>\r\n					{{itemList.name}}\r\n				</td>\r\n				<td>\r\n					{{if itemList.customerType == 0}}\r\n					散客\r\n					{{else if itemList.customerType == 1}}\r\n					团体\r\n					{{/if}}\r\n				</td>\r\n				<td class="rangeTimeWidth">{{each itemList.SelfPayRebateList as rebateList index}}\r\n					{{if index == 0}}\r\n						{{rebateList.startTime | dateFormat: \'yyyy-MM-dd\'}}至{{rebateList.endTime | dateFormat: \'yyyy-MM-dd\'}}\r\n					{{else}}\r\n\r\n					{{rebateList.startTime | dateFormat: \'yyyy-MM-dd\'}}至{{rebateList.endTime | dateFormat: \'yyyy-MM-dd\'}}\r\n					{{/if}}{{/each}}\r\n				</td>\r\n				<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n					{{if index == 0}}\r\n					{{rebateList.price}}\r\n					{{else}}\r\n					<div class="no-padding" style="padding-top:2px!important;">\r\n						<label class="control-label center">{{rebateList.price}}</label>\r\n					</div>{{/if}}{{/each}}\r\n				</td>\r\n				<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n					{{if index == 0}}\r\n					<div class="no-padding">\r\n						<label class="control-label center">{{rebateList.marketPrice}}</label>\r\n					</div>{{else}}\r\n					<div class="no-padding" style="padding-top:2px!important;">\r\n						<label class="control-label center">{{rebateList.marketPrice}}</label>\r\n					</div>{{/if}}{{/each}}\r\n				</td>\r\n				<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n					{{if index == 0}}\r\n					<div class="no-padding">\r\n						<label class="control-label center">{{rebateList.guideRate*100 | toFixed}}</label>\r\n					</div>{{else}}\r\n					<div class="no-padding" style="padding-top:2px!important;">\r\n						<label class="control-label center">{{rebateList.guideRate*100 | toFixed}}</label>\r\n					</div>{{/if}}{{/each}}\r\n				</td>\r\n				<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n					{{if index == 0}}\r\n					<div class="no-padding">\r\n						<label class="control-label center">{{rebateList.travelAgencyRate*100 | toFixed}}</label>\r\n					</div>{{else}}\r\n					<div class="no-padding" style="padding-top:2px!important;">\r\n						<label class="control-label center">{{rebateList.travelAgencyRate*100 | toFixed}}</label>\r\n					</div>{{/if}}{{/each}}\r\n				</td>\r\n				<td class="remarkWidth">\r\n					{{itemList.remark}}\r\n				</td>\r\n			</tr>\r\n			{{/each}}\r\n		</table>\r\n	</form>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});