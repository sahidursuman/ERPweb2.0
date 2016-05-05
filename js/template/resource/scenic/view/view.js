/*TMODJS:{"debug":true,"version":90,"md5":"86cf6bdbd19ea21f0d4035946754278a"}*/
define(function(require) {
    return require("../../../template")("resource/scenic/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, scenic = $data.scenic, $each = $utils.$each, $out = ($data.item, 
            $data.$index, $data.price, "");
            return $out += ' <form class="form-horizontal scenicMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereOne"> <tr> <td colspan="4" class="HeadManage">景区主体信息</td> </tr> <tr> <td class="style-myself">景区名称</td> <td class="styleOne-self">', 
            $line = 9, $out += $escape(scenic.name), $out += '</td> <td class="style-myself">是否启用</td> <td class="styleOne-self">', 
            $line = 11, 0 == scenic.status ? ($out += " 已停用 ", $line = 13) : ($out += " 已启用 ", 
            $line = 15), $out += '</td> </tr> <tr> <td class="style-myself">联系人</td> <td class="styleOne-self">', 
            $line = 19, $out += $escape(scenic.managerName), $out += '</td> <td class="style-myself">联系电话</td> <td class="styleOne-self">', 
            $line = 21, $out += $escape(scenic.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">座机号码</td> <td class="styleOne-self">', 
            $line = 25, $out += $escape(scenic.telNumber), $out += '</td> <td class="style-myself">传真号码</td> <td class="styleOne-self">', 
            $line = 27, $out += $escape(scenic.faxNumber), $out += '</td> </tr> <tr> <td class="style-myself">所在地区</td> <td class="styleOne-self" colspan="3">', 
            $line = 32, null != scenic.province && ($out += " ", $line = 33, $out += $escape(scenic.province.name), 
            $out += " ", $line = 34), $out += " ", $line = 35, null != scenic.city && ($out += " -", 
            $line = 36, $out += $escape(scenic.city.name), $out += " ", $line = 37), $out += " ", 
            $line = 38, null != scenic.district && ($out += " -", $line = 39, $out += $escape(scenic.district.name), 
            $out += " ", $line = 40), $out += '</td> </tr> <tr> <td class="style-myself">景区政策</td> <td class="styleOne-self" colspan="3">', 
            $line = 44, $out += $escape(scenic.seasonPolicy), $out += '</td> </tr> <tr> <td class="style-myself">景区简介</td> <td class="styleOne-self" colspan="3">', 
            $line = 48, $out += $escape(scenic.remark), $out += '</td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo"> <tr> <td colspan="8" class="HeadManage" style="text-align: left">项目列表</td> </tr> <tr> <td class="style-myself">收费项目</td> <td class="style-myself">时间范围</td> <td class="style-myself">单价</td> <td>备注</td> </tr> ', 
            $line = 63, $each(scenic.scenicItemList, function(item) {
                $out += ' <tr data-entity-id="', $line = 64, $out += $escape(item.id), $out += '"> <td colspan="">', 
                $line = 65, $out += $escape(item.name), $out += '</td> <td class="rangeTimeWidth"> <div> 日常价格 </div> ', 
                $line = 70, $each(item.priceList, function(price) {
                    $out += " <div> ", $line = 72, $out += $escape($helpers.dateFormat(price.startTime, "yyyy-MM-dd")), 
                    $out += "至", $line = 72, $out += $escape($helpers.dateFormat(price.endTime, "yyyy-MM-dd")), 
                    $out += " </div> ", $line = 74;
                }), $out += " </td> <td> <div> <span class='F-float F-money'>", $line = 78, $out += $escape(item.normalInnerPrice), 
                $out += "</span> </div> ", $line = 80, $each(item.priceList, function(price) {
                    $out += " <div> <span class='F-float F-money'>", $line = 82, $out += $escape(price.contractPrice), 
                    $out += "</span> </div> ", $line = 84;
                }), $out += ' </td> <td class="remarkWidth"> ', $line = 87, $out += $escape(item.remark), 
                $out += " </td> </tr> ", $line = 90;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n	<form class="form-horizontal scenicMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ whereOne">\r\n			<tr>\r\n				<td colspan="4" class="HeadManage">景区主体信息</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">景区名称</td>\r\n				<td class="styleOne-self">{{scenic.name}}</td>\r\n				<td class="style-myself">是否启用</td>\r\n				<td class="styleOne-self">{{if scenic.status == 0}}\r\n					已停用\r\n					{{else}}\r\n					已启用\r\n					{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">联系人</td>\r\n				<td class="styleOne-self">{{scenic.managerName}}</td>\r\n				<td class="style-myself">联系电话</td>\r\n				<td class="styleOne-self">{{scenic.mobileNumber}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">座机号码</td>\r\n				<td class="styleOne-self">{{scenic.telNumber}}</td>\r\n				<td class="style-myself">传真号码</td>\r\n				<td class="styleOne-self">{{scenic.faxNumber}}</td>\r\n			</tr>\r\n\r\n			<tr>\r\n				<td class="style-myself">所在地区</td>\r\n				<td class="styleOne-self" colspan="3">{{if scenic.province != null}}\r\n					{{scenic.province.name}}\r\n					{{/if}}\r\n					{{if scenic.city != null}}\r\n					-{{scenic.city.name}}\r\n					{{/if}}\r\n					{{if scenic.district != null}}\r\n					-{{scenic.district.name}}\r\n					{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">景区政策</td>\r\n				<td class="styleOne-self" colspan="3">{{scenic.seasonPolicy}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">景区简介</td>\r\n				<td class="styleOne-self" colspan="3">{{scenic.remark}}</td>\r\n			</tr>\r\n		</table>\r\n	</form>\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ whereTwo">\r\n			<tr>\r\n				<td colspan="8" class="HeadManage" style="text-align: left">项目列表</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">收费项目</td>\r\n				<td class="style-myself">时间范围</td>\r\n				<td class="style-myself">单价</td>\r\n				<td>备注</td>\r\n			</tr>\r\n			{{each scenic.scenicItemList as item}}\r\n			<tr data-entity-id="{{item.id}}">\r\n				<td colspan="">{{item.name}}</td>\r\n				<td class="rangeTimeWidth">\r\n					<div>\r\n						日常价格\r\n					</div>\r\n					{{each item.priceList as price}}\r\n					<div>\r\n						{{price.startTime | dateFormat:\'yyyy-MM-dd\'}}至{{price.endTime | dateFormat:\'yyyy-MM-dd\'}}\r\n					</div>\r\n					{{/each}}\r\n				</td>\r\n				<td>\r\n					<div>\r\n						<span class=\'F-float F-money\'>{{item.normalInnerPrice}}</span>\r\n					</div>\r\n					{{each item.priceList as price}}\r\n					<div>\r\n						<span class=\'F-float F-money\'>{{price.contractPrice}}</span>\r\n					</div>\r\n					{{/each}}\r\n				</td>\r\n				<td class="remarkWidth">\r\n					{{item.remark}}\r\n				</td>\r\n			</tr>\r\n			{{/each}}\r\n		</table> \r\n	</form>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});