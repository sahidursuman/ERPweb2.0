/*TMODJS:{"debug":true,"version":227,"md5":"f22b45e047146366e3e972c1a1c70859"}*/
define(function(require) {
    return require("../../../template")("resource/busCompany/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, busCompany = $data.busCompany, $each = $utils.$each, $out = ($data.bus, 
            $data.$index, $data.price, $data.driver, "");
            return $out += '<form class="form-horizontal busCompanyMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereOne"> <tr> <td colspan="4" class="HeadManage">车队主体信息</td> </tr> <tr> <td class="style-myself">车队名称</td> <td class="styleOne-self">', 
            $line = 8, $out += $escape(busCompany.companyName), $out += '</td> <td class="style-myself">车队类型</td> <td class="styleOne-self">', 
            $line = 10, 0 == busCompany.type ? ($out += " 个人 ", $line = 12) : ($out += " 集团 ", 
            $line = 14), $out += '</td> </tr> <tr> <td class="style-myself">联系人</td> <td class="styleOne-self">', 
            $line = 18, $out += $escape(busCompany.managerName), $out += '</td> <td class="style-myself">联系电话</td> <td class="styleOne-self">', 
            $line = 20, $out += $escape(busCompany.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">座机号码</td> <td class="styleOne-self">', 
            $line = 24, $out += $escape(busCompany.telNumber), $out += '</td> <td class="style-myself">传真号码</td> <td class="styleOne-self">', 
            $line = 26, $out += $escape(busCompany.faxNumber), $out += '</td> </tr> <tr> <td class="style-myself">所在地区</td> <td class="styleOne-self">', 
            $line = 30, null != busCompany.province && ($out += " ", $line = 31, $out += $escape(busCompany.province.name), 
            $out += " ", $line = 32), $out += " ", $line = 33, null != busCompany.city && ($out += " -", 
            $line = 34, $out += $escape(busCompany.city.name), $out += " ", $line = 35), $out += " ", 
            $line = 36, null != busCompany.district && ($out += " -", $line = 37, $out += $escape(busCompany.district.name), 
            $out += " ", $line = 38), $out += '</td> <td class="style-myself">是否启用</td> <td class="styleOne-self">', 
            $line = 40, 0 == busCompany.status ? ($out += " 已停用 ", $line = 42) : ($out += " 已启用 ", 
            $line = 44), $out += '</td> </tr> <tr> <td class="style-myself">详细地址</td> <td class="styleOne-self" colspan="3">', 
            $line = 48, $out += $escape(busCompany.street), $out += '</td> </tr> <tr> <td class="style-myself">车队简介</td> <td class="styleOne-self" colspan="4">', 
            $line = 52, $out += $escape(busCompany.remark), $out += '</td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo"> <tr> <td colspan="8" class="HeadManage" style="text-align: left">车辆列表</td> </tr> <tr> <td class="style-myself">车牌号</td> <td class="style-myself">车辆品牌</td> <td class="style-myself">座位数</td> <td class="style-myself">购买时间</td> <td class="style-myself">协议包车</td> <td class="style-myself">包车时限</td> <td class="style-myself">包车价格</td> <td class="style-myself">备注</td> </tr> ', 
            $line = 71, $each(busCompany.busList, function(bus) {
                $out += ' <tr> <td class="style-myself">', $line = 73, $out += $escape(bus.licenseNumber), 
                $out += '</td> <td class="styleOne-self">', $line = 74, $out += $escape(bus.brand), 
                $out += '</td> <td class="style-myself"><span class="F-float F-count">', $line = 75, 
                $out += $escape(bus.seatCount), $out += '</span></td> <td class="styleOne-self">', 
                $line = 76, null == bus.buyTime || "" == bus.buyTime ? ($out += "-", $line = 76) : ($line = 76, 
                $out += $escape($helpers.dateFormat(bus.buyTime, "yyyy-MM-dd")), $line = 76), $out += '</td> <td class="styleOne-self">', 
                $line = 77, 0 == bus.isChartered ? ($out += " 否 ", $line = 79) : ($out += " 是 ", 
                $line = 81), $out += '</td> <td class="styleOne-self" style="width: 140px">', $line = 82, 
                $each(bus.priceList, function(price) {
                    $out += " <div> ", $line = 84, 0 == bus.isChartered ? ($out += " - ", $line = 86) : ($out += " ", 
                    $line = 87, $out += $escape($helpers.dateFormat(price.startTime, "yyyy-MM-dd")), 
                    $out += "至", $line = 87, $out += $escape($helpers.dateFormat(price.endTime, "yyyy-MM-dd")), 
                    $out += " ", $line = 88), $out += " </div> ", $line = 90;
                }), $out += '</td> <td class="styleOne-self">', $line = 91, $each(bus.priceList, function(price) {
                    $out += ' <div class="F-float F-money"> ', $line = 93, 0 == bus.isChartered ? ($out += " - ", 
                    $line = 95) : ($out += " ", $line = 96, $out += $escape(price.contractPrice), $out += "元 ", 
                    $line = 97), $out += " </div> ", $line = 99;
                }), $out += '</td> <td class="styleOne-self" style="width: 210px">', $line = 100, 
                $out += $escape(bus.remark), $out += "</td> </tr> ", $line = 102;
            }), $out += ' </table> <table class="whereQ whereTwo" style="margin-top: 10px;"> <tr> <td colspan="8" class="HeadManage" style="text-align: left">司机列表</td> </tr> <tr> <td class="style-myself">司机姓名</td> <td class="style-myself">司机性别</td> <td class="style-myself">司机电话</td> <td class="style-myself">司机驾龄</td> <td class="style-myself">驾驶证编号</td> <td class="style-myself">是否启用</td> <td class="style-myself">备注</td> </tr> ', 
            $line = 118, $each(busCompany.driverList, function(driver) {
                $out += ' <tr> <td class="style-myself">', $line = 120, $out += $escape(driver.name), 
                $out += '</td> <td class="styleOne-self">', $line = 121, 0 == driver.gender ? ($out += " 男 ", 
                $line = 123) : ($out += " 女 ", $line = 125), $out += '</td> <td class="style-myself">', 
                $line = 126, $out += $escape(driver.mobileNumber), $out += '</td> <td class="styleOne-self F-float F-count">', 
                $line = 127, $out += $escape(driver.driveYears), $out += '</td> <td class="styleOne-self">', 
                $line = 128, $out += $escape(driver.licenseId), $out += '</td> <td class="styleOne-self">', 
                $line = 129, 0 == driver.status ? ($out += " 已停用 ", $line = 131) : ($out += " 已启用 ", 
                $line = 133), $out += '</td> <td class="styleOne-self">', $line = 134, $out += $escape(driver.remark), 
                $out += "</td> </tr> ", $line = 136;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal busCompanyMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ whereOne">\r\n		<tr>\r\n			<td colspan="4" class="HeadManage">车队主体信息</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">车队名称</td>\r\n			<td class="styleOne-self">{{busCompany.companyName}}</td>\r\n			<td class="style-myself">车队类型</td>\r\n			<td class="styleOne-self">{{if busCompany.type == 0}}\r\n				个人\r\n				{{else}}\r\n				集团\r\n				{{/if}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">联系人</td>\r\n			<td class="styleOne-self">{{busCompany.managerName}}</td>\r\n			<td class="style-myself">联系电话</td>\r\n			<td class="styleOne-self">{{busCompany.mobileNumber}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">座机号码</td>\r\n			<td class="styleOne-self">{{busCompany.telNumber}}</td>\r\n			<td class="style-myself">传真号码</td>\r\n			<td class="styleOne-self">{{busCompany.faxNumber}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">所在地区</td>\r\n			<td class="styleOne-self">{{if busCompany.province != null}}\r\n				{{busCompany.province.name}}\r\n				{{/if}}\r\n				{{if busCompany.city != null}}\r\n				-{{busCompany.city.name}}\r\n				{{/if}}\r\n				{{if busCompany.district != null}}\r\n				-{{busCompany.district.name}}\r\n				{{/if}}</td>\r\n			<td class="style-myself">是否启用</td>\r\n			<td class="styleOne-self">{{if busCompany.status == 0}}\r\n				已停用\r\n				{{else}}\r\n				已启用\r\n				{{/if}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">详细地址</td>\r\n			<td class="styleOne-self" colspan="3">{{busCompany.street}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">车队简介</td>\r\n			<td class="styleOne-self" colspan="4">{{busCompany.remark}}</td>\r\n		</tr>\r\n	</table>\r\n</form>\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<table class="whereQ whereTwo">\r\n		<tr>\r\n			<td colspan="8" class="HeadManage" style="text-align: left">车辆列表</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">车牌号</td>\r\n			<td class="style-myself">车辆品牌</td>\r\n			<td class="style-myself">座位数</td>\r\n			<td class="style-myself">购买时间</td>\r\n			<td class="style-myself">协议包车</td>\r\n			<td class="style-myself">包车时限</td>\r\n			<td class="style-myself">包车价格</td>\r\n			<td class="style-myself">备注</td>\r\n		</tr>\r\n		{{each busCompany.busList as bus}}\r\n		<tr>\r\n			<td class="style-myself">{{bus.licenseNumber}}</td>\r\n			<td class="styleOne-self">{{bus.brand}}</td>\r\n			<td class="style-myself"><span class="F-float F-count">{{bus.seatCount}}</span></td>\r\n			<td class="styleOne-self">{{if bus.buyTime == null || bus.buyTime == ""}}-{{else}}{{bus.buyTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n			<td class="styleOne-self">{{if bus.isChartered == 0}}\r\n				否\r\n				{{else}}\r\n				是\r\n				{{/if}}</td>\r\n			<td class="styleOne-self" style="width: 140px">{{each bus.priceList as price}}\r\n				<div>\r\n					{{if bus.isChartered == 0}}\r\n					-\r\n					{{else}}\r\n					{{price.startTime | dateFormat:\'yyyy-MM-dd\'}}至{{price.endTime | dateFormat:\'yyyy-MM-dd\'}}\r\n					{{/if}}\r\n				</div>\r\n				{{/each}}</td>\r\n			<td class="styleOne-self">{{each bus.priceList as price}}\r\n				<div class="F-float F-money">\r\n					{{if bus.isChartered == 0}}\r\n					-\r\n					{{else}}\r\n					{{price.contractPrice}}元\r\n					{{/if}}\r\n				</div>\r\n				{{/each}}</td>\r\n			<td class="styleOne-self" style="width: 210px">{{bus.remark}}</td>\r\n		</tr>\r\n		{{/each}}\r\n	</table>\r\n\r\n	<table class="whereQ whereTwo" style="margin-top: 10px;">\r\n		<tr>\r\n			<td colspan="8" class="HeadManage" style="text-align: left">司机列表</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">司机姓名</td>\r\n			<td class="style-myself">司机性别</td>\r\n			<td class="style-myself">司机电话</td>\r\n			<td class="style-myself">司机驾龄</td>\r\n			<td class="style-myself">驾驶证编号</td>\r\n			<td class="style-myself">是否启用</td>\r\n			<td class="style-myself">备注</td>\r\n		</tr>\r\n		{{each busCompany.driverList as driver}}\r\n		<tr>\r\n			<td class="style-myself">{{driver.name}}</td>\r\n			<td class="styleOne-self">{{if driver.gender == 0}}\r\n				男\r\n				{{else}}\r\n				女\r\n				{{/if}}</td>\r\n			<td class="style-myself">{{driver.mobileNumber}}</td>\r\n			<td class="styleOne-self F-float F-count">{{driver.driveYears}}</td>\r\n			<td class="styleOne-self">{{driver.licenseId}}</td>\r\n			<td class="styleOne-self">{{if driver.status == 0}}\r\n				已停用\r\n				{{else driver.status == 1}}\r\n				已启用\r\n				{{/if}}</td>\r\n			<td class="styleOne-self">{{driver.remark}}</td>\r\n		</tr>\r\n		{{/each}}\r\n	</table>\r\n</form>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});