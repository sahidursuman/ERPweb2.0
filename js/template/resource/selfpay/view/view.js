/*TMODJS:{"debug":true,"version":201,"md5":"82cdab9d728d36bd08ca893408e14be3"}*/
define(function(require) {
    return require("../../../template")("resource/selfpay/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, selfpay = $data.selfpay, $each = $utils.$each, $out = ($data.shopPolicy, 
            $data.$index, $data.hopTimeArea, $data.i, "");
            return $out += ' <form class="form-horizontal shopMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereOne"> <tr> <td colspan="4" class="HeadManage">商家主体信息</td> </tr> <tr> <td class="style-myself">商家名称：</td> <td class="styleOne-self">', 
            $line = 9, $out += $escape(selfpay.name), $out += '</td> <td class="style-myself">是否启用：</td> <td class="styleOne-self">', 
            $line = 11, 0 == selfpay.status ? ($out += " 已停用 ", $line = 13) : ($out += " 已启用 ", 
            $line = 15), $out += '</td> </tr> <tr> <td class="style-myself">联系人：</td> <td class="styleOne-self">', 
            $line = 19, $out += $escape(selfpay.managerName), $out += '</td> <td class="style-myself">联系电话：</td> <td class="styleOne-self">', 
            $line = 21, $out += $escape(selfpay.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">座机号码：</td> <td class="styleOne-self">', 
            $line = 25, $out += $escape(selfpay.telNumber), $out += '</td> <td class="style-myself">传真号码：</td> <td class="styleOne-self">', 
            $line = 27, $out += $escape(selfpay.faxNumber), $out += '</td> </tr> <tr> <td class="style-myselfOne">人数返佣(元/人)：</td> <td class="styleOne-self">', 
            $line = 31, $out += $escape(selfpay.customerRebateMoney), $out += '</td> <td class="style-myselfOne">停车返佣(辆/人)：</td> <td class="styleOne-self">', 
            $line = 33, $out += $escape(selfpay.parkingRebateMoney), $out += ' </td> </tr> <tr> <td class="style-myself">商家所在省市：</td> <td class="styleOne-self" colspan="3">', 
            $line = 37, null != selfpay.province && ($out += " ", $line = 38, $out += $escape(selfpay.province.name), 
            $out += " ", $line = 39), $out += " ", $line = 40, null != selfpay.city && ($out += " -", 
            $line = 41, $out += $escape(selfpay.city.name), $out += " ", $line = 42), $out += " ", 
            $line = 43, null != selfpay.district && ($out += " -", $line = 44, $out += $escape(selfpay.district.name), 
            $out += " ", $line = 45), $out += '</td> </tr> <tr> <td class="style-myself">详细地址：</td> <td class="styleOne-self" colspan="3">', 
            $line = 49, $out += $escape(selfpay.street), $out += '</td> </tr> <tr> <td class="style-myself">商家简介：</td> <td class="styleOne-self" colspan="3">', 
            $line = 53, $out += $escape(selfpay.remark), $out += '</td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo"> <tr> <td colspan="8" class="HeadManage" style="text-align: left">商品列表</td> </tr> <tr> <td class="style-myself">商品名称</td> <td class="style-myself">针对客源</td> <td class="style-myself">时间范围</td> <td class="style-myself">价格区间</td> <td class="style-myself">导佣比例(%)</td> <td class="style-myself">社佣比例(%)</td> <td>备注</td> </tr> ', 
            $line = 71, $each(selfpay.selfPayItemList, function(shopPolicy) {
                $out += ' <tr data-entity-id="', $line = 72, $out += $escape(shopPolicy.id), $out += '"> <td> ', 
                $line = 74, $out += $escape(shopPolicy.name), $out += " </td> <td> ", $line = 77, 
                0 == shopPolicy.customerType ? ($out += " 散客 ", $line = 79) : ($out += " 团体 ", $line = 81), 
                $out += ' </td> <td class="rangeTimeWidth" > ', $line = 84, $each(shopPolicy.SelfPayRebateList, function(hopTimeArea) {
                    $out += " <div> ", $line = 86, $out += $escape($helpers.dateFormat(hopTimeArea.startTime, "yyyy-MM-dd")), 
                    $out += "至", $line = 86, $out += $escape($helpers.dateFormat(hopTimeArea.endTime, "yyyy-MM-dd")), 
                    $out += " </div> ", $line = 88;
                }), $out += ' </td> <td class="no-padding"> ', $line = 91, $each(shopPolicy.SelfPayRebateList, function(hopTimeArea) {
                    $out += " ", $line = 95, $out += $escape(hopTimeArea.price), $out += "至", $line = 95, 
                    $out += $escape(hopTimeArea.marketPrice), $out += "<br> ", $line = 98;
                }), $out += ' </td> <td class="no-padding"> ', $line = 101, $each(shopPolicy.SelfPayRebateList, function(hopTimeArea, i) {
                    $out += ' <!-- <div class="col-sm-12', $line = 102, 0 != i && ($out += " border-top", 
                    $line = 102), $out += '" > --> <label class="col-sm-12 control-label center"> ', 
                    $line = 105, $out += $escape($helpers.toFixed(100 * hopTimeArea.guideRate)), $out += " </label>  ", 
                    $line = 109;
                }), $out += ' </td> <td class="no-padding"> ', $line = 112, $each(shopPolicy.SelfPayRebateList, function(hopTimeArea, i) {
                    $out += ' <!-- <div class="col-sm-12', $line = 113, 0 != i && ($out += " border-top", 
                    $line = 113), $out += '" > --> <label class="col-sm-12 control-label center"> ', 
                    $line = 116, $out += $escape($helpers.toFixed(100 * hopTimeArea.travelAgencyRate)), 
                    $out += " </label>  ", $line = 120;
                }), $out += ' </td> <td class="remarkWidth">', $line = 122, $out += $escape(shopPolicy.remark), 
                $out += "</td> </tr> ", $line = 124;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n<form class="form-horizontal shopMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ whereOne">\r\n		<tr>\r\n			<td colspan="4" class="HeadManage">商家主体信息</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">商家名称：</td>\r\n			<td class="styleOne-self">{{selfpay.name}}</td>\r\n			<td class="style-myself">是否启用：</td>\r\n			<td class="styleOne-self">{{if selfpay.status == 0}}\r\n				已停用\r\n				{{else}}\r\n				已启用\r\n				{{/if}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">联系人：</td>\r\n			<td class="styleOne-self">{{selfpay.managerName}}</td>\r\n			<td class="style-myself">联系电话：</td>\r\n			<td class="styleOne-self">{{selfpay.mobileNumber}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">座机号码：</td>\r\n			<td class="styleOne-self">{{selfpay.telNumber}}</td>\r\n			<td class="style-myself">传真号码：</td>\r\n			<td class="styleOne-self">{{selfpay.faxNumber}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myselfOne">人数返佣(元/人)：</td>\r\n			<td class="styleOne-self">{{selfpay.customerRebateMoney}}</td>\r\n			<td class="style-myselfOne">停车返佣(辆/人)：</td>\r\n			<td class="styleOne-self">{{selfpay.parkingRebateMoney}}	</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">商家所在省市：</td>\r\n			<td class="styleOne-self" colspan="3">{{if selfpay.province != null}}\r\n				{{selfpay.province.name}}\r\n				{{/if}}\r\n				{{if selfpay.city != null}}\r\n				-{{selfpay.city.name}}\r\n				{{/if}}\r\n				{{if selfpay.district != null}}\r\n				-{{selfpay.district.name}}\r\n				{{/if}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">详细地址：</td>\r\n			<td class="styleOne-self" colspan="3">{{selfpay.street}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">商家简介：</td>\r\n			<td class="styleOne-self" colspan="3">{{selfpay.remark}}</td>\r\n		</tr>\r\n	</table>\r\n</form>\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ whereTwo">\r\n		<tr>\r\n			<td colspan="8" class="HeadManage" style="text-align: left">商品列表</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">商品名称</td>\r\n			<td class="style-myself">针对客源</td>\r\n			<td class="style-myself">时间范围</td>\r\n			<td class="style-myself">价格区间</td>\r\n			<td class="style-myself">导佣比例(%)</td>\r\n			<td class="style-myself">社佣比例(%)</td>\r\n			<td>备注</td>\r\n		</tr>\r\n		{{each selfpay.selfPayItemList as shopPolicy}}\r\n		<tr data-entity-id="{{shopPolicy.id}}">\r\n			<td>\r\n				{{shopPolicy.name}}\r\n			</td>\r\n			<td>\r\n				{{if shopPolicy.customerType == 0}}\r\n				散客\r\n				{{else}}\r\n				团体\r\n				{{/if}}\r\n			</td>\r\n			<td class="rangeTimeWidth" > \r\n				{{each shopPolicy.SelfPayRebateList as hopTimeArea i}}\r\n				<div>\r\n					{{hopTimeArea.startTime | dateFormat:\'yyyy-MM-dd\'}}至{{hopTimeArea.endTime | dateFormat:\'yyyy-MM-dd\'}}\r\n				</div>\r\n				{{/each}}\r\n			</td>\r\n			<td class="no-padding">\r\n				{{each shopPolicy.SelfPayRebateList as hopTimeArea i}}\r\n\r\n				\r\n\r\n				{{hopTimeArea.price}}至{{hopTimeArea.marketPrice}}<br>\r\n\r\n				\r\n				{{/each}}\r\n			</td>\r\n			<td class="no-padding">\r\n				{{each shopPolicy.SelfPayRebateList as hopTimeArea i}}\r\n				<!-- <div class="col-sm-12{{if i != 0}} border-top{{/if}}" > -->\r\n					\r\n					<label class="col-sm-12 control-label center">\r\n						{{hopTimeArea.guideRate*100 | toFixed}}\r\n					</label>\r\n					\r\n				<!-- </div> -->\r\n				{{/each}}\r\n			</td>\r\n			<td class="no-padding">\r\n				{{each shopPolicy.SelfPayRebateList as hopTimeArea i}}\r\n				<!-- <div class="col-sm-12{{if i != 0}} border-top{{/if}}" > -->\r\n				\r\n					<label class="col-sm-12 control-label center">\r\n						{{hopTimeArea.travelAgencyRate*100 | toFixed}} \r\n					</label>\r\n				\r\n				<!-- </div> -->\r\n				{{/each}}\r\n			</td>\r\n			<td class="remarkWidth">{{shopPolicy.remark}}</td>\r\n		</tr>\r\n		{{/each}}\r\n	</table>\r\n</form>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});