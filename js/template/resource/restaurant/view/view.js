/*TMODJS:{"debug":true,"version":165,"md5":"4f626542be9b32b70c5818ba4d398407"}*/
define(function(require) {
    return require("../../../template")("resource/restaurant/view/view", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, restaurant = $data.restaurant, $each = $utils.$each, $out = ($data.restaurantStandard, 
            $data.$index, "");
            return $out += ' <form class="form-horizontal restaurantMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ" style="width: 96%"> <tr> <td colspan="4" class="HeadManage">餐厅主体信息</td> </tr> <tr> <td class="style-myself">餐厅名称：</td> <td class="styleOne-self">', 
            $line = 9, $out += $escape(restaurant.name), $out += '</td> <td class="style-myself">联系人：</td> <td class="styleOne-self">', 
            $line = 11, $out += $escape(restaurant.managerName), $out += '</td> </tr> <tr> <td class="style-myself">联系电话：</td> <td class="styleOne-self">', 
            $line = 15, $out += $escape(restaurant.mobileNumber), $out += '</td> <td class="style-myself">座机号码：</td> <td class="styleOne-self">', 
            $line = 17, $out += $escape(restaurant.telNumber), $out += '</td> </tr> <tr> <td class="style-myself">传真号码：</td> <td class="styleOne-self">', 
            $line = 21, $out += $escape(restaurant.faxNumber), $out += '</td> <td class="style-myself">餐厅设施：</td> <td class="styleOne-self">', 
            $line = 23, $out += $escape(restaurant.facility), $out += '</td> </tr> <tr> <td class="style-myself">所在地区：</td> <td class="styleOne-self">', 
            $line = 27, null != restaurant.province && ($out += " ", $line = 28, $out += $escape(restaurant.province.name), 
            $out += " ", $line = 29), $out += " ", $line = 30, null != restaurant.city && ($out += " -", 
            $line = 31, $out += $escape(restaurant.city.name), $out += " ", $line = 32), $out += " ", 
            $line = 33, null != restaurant.district && ($out += " -", $line = 34, $out += $escape(restaurant.district.name), 
            $out += " ", $line = 35), $out += '</td> <td class="style-myself">是否启用：</td> <td class="styleOne-self"> ', 
            $line = 37, 0 == restaurant.status ? ($out += " 已停用 ", $line = 39) : ($out += " 已启用 ", 
            $line = 41), $out += '</td> </tr> <tr> <td class="style-myself">详细地址:</td> <td class="styleOne-self" colspan="3">', 
            $line = 45, $out += $escape(restaurant.street), $out += '</td> </tr> <tr> <td class="style-myself">餐厅简介:</td> <td class="styleOne-self" colspan="3">', 
            $line = 49, $out += $escape(restaurant.remark), $out += '</td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo" style="width:1140px;"> <tr> <td colspan="8" class="HeadManage" style="text-align: left">餐标列表</td> </tr> <tr> <td class="style-myself">用餐类型</td> <td class="style-myself">餐标<span style="font-size:12px;">(元/人)</span></td> <td class="style-myself">菜单</td> <td class="style-myself">备注</td> </tr> ', 
            $line = 64, $each(restaurant.restaurantStandardList, function(restaurantStandard) {
                $out += " <tr> <td>", $line = 66, "早餐" == restaurantStandard.type ? ($out += " 早餐 ", 
                $line = 68) : "午餐" == restaurantStandard.type ? ($out += " 午餐 ", $line = 70) : ($out += " 晚餐 ", 
                $line = 72), $out += '</td> <td><span class="F-float F-money">', $line = 73, $out += $escape(restaurantStandard.price), 
                $out += '</span></td> <td style="padding:10px;">', $line = 74, $out += $escape(restaurantStandard.menuList), 
                $out += '</td> <td style="padding:10px;">', $line = 75, $out += $escape(restaurantStandard.remark), 
                $out += "</td> </tr> ", $line = 77;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n	<form class="form-horizontal restaurantMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ" style="width: 96%">\r\n			<tr>\r\n				<td colspan="4" class="HeadManage">餐厅主体信息</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">餐厅名称：</td>\r\n				<td class="styleOne-self">{{restaurant.name}}</td>\r\n				<td class="style-myself">联系人：</td>\r\n				<td class="styleOne-self">{{restaurant.managerName}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">联系电话：</td>\r\n				<td class="styleOne-self">{{restaurant.mobileNumber}}</td>\r\n				<td class="style-myself">座机号码：</td>\r\n				<td class="styleOne-self">{{restaurant.telNumber}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">传真号码：</td>\r\n				<td class="styleOne-self">{{restaurant.faxNumber}}</td>\r\n				<td class="style-myself">餐厅设施：</td>\r\n				<td class="styleOne-self">{{restaurant.facility}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">所在地区：</td>\r\n				<td class="styleOne-self">{{if restaurant.province != null}}\r\n					{{restaurant.province.name}}\r\n					{{/if}}\r\n					{{if restaurant.city != null}}\r\n					-{{restaurant.city.name}}\r\n					{{/if}}\r\n					{{if restaurant.district != null}}\r\n					-{{restaurant.district.name}}\r\n					{{/if}}</td>\r\n				<td class="style-myself">是否启用：</td>\r\n				<td class="styleOne-self">	{{if restaurant.status == 0}}\r\n					已停用\r\n					{{else}}\r\n					已启用\r\n					{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">详细地址:</td>\r\n				<td class="styleOne-self" colspan="3">{{restaurant.street}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">餐厅简介:</td>\r\n				<td class="styleOne-self" colspan="3">{{restaurant.remark}}</td>\r\n			</tr>\r\n		</table>\r\n	</form>\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ whereTwo" style="width:1140px;">\r\n			<tr>\r\n				<td colspan="8" class="HeadManage" style="text-align: left">餐标列表</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">用餐类型</td>\r\n				<td class="style-myself">餐标<span style="font-size:12px;">(元/人)</span></td>\r\n				<td class="style-myself">菜单</td>\r\n				<td class="style-myself">备注</td>\r\n			</tr>\r\n			{{each restaurant.restaurantStandardList as restaurantStandard}}\r\n			<tr>\r\n				<td>{{if restaurantStandard.type == \'早餐\'}}\r\n					早餐\r\n					{{else if restaurantStandard.type == \'午餐\'}}\r\n					午餐\r\n					{{else}}\r\n					晚餐\r\n					{{/if}}</td>\r\n				<td><span class="F-float F-money">{{restaurantStandard.price}}</span></td>\r\n				<td style="padding:10px;">{{restaurantStandard.menuList}}</td>\r\n				<td style="padding:10px;">{{restaurantStandard.remark}}</td>\r\n			</tr>\r\n			{{/each}}\r\n		</table> \r\n	</form>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});