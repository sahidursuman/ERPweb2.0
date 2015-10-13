/*TMODJS:{"debug":true,"version":70,"md5":"4751c1048ad740105f0618f6212d2701"}*/
define(function(require) {
    return require("../../../template")("resource/hotel/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, hotel = $data.hotel, $each = $utils.$each, $out = ($data.room, 
            $data.$index, $data.price, "");
            return $out += ' <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereOne"> <tr> <td colspan="4" class="HeadManage">酒店主体信息</td> </tr> <tr> <td class="style-myself">酒店名称：</td> <td class="styleOne-self">', 
            $line = 8, $out += $escape(hotel.name), $out += '</td> <td class="style-myself">酒店星级：</td> <td class="styleOne-self">', 
            $line = 10, 1 == hotel.level ? ($out += " 三星以下 ", $line = 12) : 2 == hotel.level ? ($out += " 三星 ", 
            $line = 14) : 3 == hotel.level ? ($out += " 准四星 ", $line = 16) : 4 == hotel.level ? ($out += " 四星 ", 
            $line = 18) : 5 == hotel.level ? ($out += " 准五星 ", $line = 20) : 6 == hotel.level ? ($out += " 五星 ", 
            $line = 22) : 7 == hotel.level && ($out += " 五星以上 ", $line = 24), $out += '</td> </tr> <tr> <td class="style-myself">联系人：</td> <td class="styleOne-self">', 
            $line = 28, $out += $escape(hotel.managerName), $out += '</td> <td class="style-myself">联系电话：</td> <td class="styleOne-self">', 
            $line = 30, $out += $escape(hotel.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">座机号码：</td> <td class="styleOne-self">', 
            $line = 34, $out += $escape(hotel.telNumber), $out += '</td> <td class="style-myself">传真号码：</td> <td class="styleOne-self">', 
            $line = 36, $out += $escape(hotel.faxNumber), $out += '</td> </tr> <tr> <td class="style-myself">酒店所在省市：</td> <td class="styleOne-self">', 
            $line = 40, null != hotel.province && ($out += " ", $line = 41, $out += $escape(hotel.province.name), 
            $out += " ", $line = 42), $out += " ", $line = 43, null != hotel.city && ($out += " -", 
            $line = 44, $out += $escape(hotel.city.name), $out += " ", $line = 45), $out += " ", 
            $line = 46, null != hotel.district && ($out += " -", $line = 47, $out += $escape(hotel.district.name), 
            $out += " ", $line = 48), $out += '</td> <td class="style-myself">是否启用：</td> <td class="styleOne-self"> ', 
            $line = 50, 0 == hotel.status ? ($out += " 已停用 ", $line = 52) : ($out += " 已启用 ", 
            $line = 54), $out += '</td> </tr> <tr> <td class="style-myself">详细地址：</td> <td class="styleOne-self" >', 
            $line = 58, $out += $escape(hotel.street), $out += '</td> <td class="style-myself">酒店设施：</td> <td class="styleOne-self" >', 
            $line = 60, $out += $escape(hotel.facility), $out += '</td> </tr> <tr> <td class="style-myself">酒店简介：</td> <td class="styleOne-self" colspan="3">', 
            $line = 64, $out += $escape(hotel.remark), $out += '</td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo"> <tr> <td colspan="11" class="HeadManage" style="text-align: left">房间列表</td> </tr> <tr> <td class="style-myself">房型</td> <td class="style-myself">时间范围</td> <td class="style-myself">市场价(元)</td> <td class="style-myself">旅行社价(元)</td> <td class="style-myself">早餐</td> <td class="style-myself">午餐</td> <td class="style-myself">晚餐</td> <td class="style-myself">宽带</td> <td class="style-myself" style="width: 95px!important;">建筑面积(平方)</td> <td class="style-myself">最多入住人数</td> <td class="style-myself">备注</td> </tr> ', 
            $line = 86, $each(hotel.hotelRoomList, function(room) {
                $out += ' <tr data-entity-id="', $line = 87, $out += $escape(room.id), $out += '"> <td>', 
                $line = 88, $out += $escape(room.type), $out += '</td> <td class="rangeTimeWidth">', 
                $line = 89, $each(room.priceList, function(price) {
                    $out += " ", $line = 90, $out += $escape($helpers.dateFormat(price.startTime, "yyyy-MM-dd")), 
                    $out += "至", $line = 90, $out += $escape($helpers.dateFormat(price.endTime, "yyyy-MM-dd")), 
                    $out += " ", $line = 91;
                }), $out += "</td> <td> ", $line = 93, $each(room.priceList, function(price) {
                    $out += " <div> ", $line = 95, $out += $escape(price.marketPrice), $out += " </div> ", 
                    $line = 97;
                }), $out += " </td> <td> ", $line = 101, $each(room.priceList, function(price) {
                    $out += " <div> ", $line = 103, $out += $escape(price.contractPrice), $out += " </div> ", 
                    $line = 105;
                }), $out += " </td> <td> ", $line = 109, 0 == room.containBreakfast ? ($out += " 不含 ", 
                $line = 111) : ($out += " 包含 ", $line = 113), $out += " </td> <td> ", $line = 117, 
                0 == room.containLunch ? ($out += " 不含 ", $line = 119) : ($out += " 包含 ", $line = 121), 
                $out += " </td> <td> ", $line = 124, 0 == room.containDinner ? ($out += " 不含 ", 
                $line = 126) : ($out += " 包含 ", $line = 128), $out += " </td> <td> ", $line = 131, 
                $out += $escape(room.broadband), $out += " </td> <td> ", $line = 134, $out += $escape(room.areaSize), 
                $out += " </td> <td> ", $line = 137, $out += $escape(room.guestNumber), $out += ' </td> <td class="remarkWidth"> ', 
                $line = 140, $out += $escape(room.remark), $out += " </td> </tr> ", $line = 144;
            }), $out += " </table> </form> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '   <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	   <table class="whereQ whereOne">\r\n		   <tr>\r\n			   <td colspan="4" class="HeadManage">酒店主体信息</td>\r\n		   </tr>\r\n		   <tr>\r\n			   <td class="style-myself">酒店名称：</td>\r\n			   <td class="styleOne-self">{{hotel.name}}</td>\r\n			   <td class="style-myself">酒店星级：</td>\r\n			   <td class="styleOne-self">{{if hotel.level==1 }}\r\n				   三星以下\r\n				   {{else if hotel.level==2 }}\r\n				   三星\r\n				   {{else if hotel.level==3 }}\r\n				   准四星\r\n				   {{else if hotel.level==4 }}\r\n				   四星\r\n				   {{else if hotel.level==5 }}\r\n				   准五星\r\n				   {{else if hotel.level==6 }}\r\n				   五星\r\n				   {{else if hotel.level==7 }}\r\n				   五星以上\r\n				   {{/if}}</td>\r\n		   </tr>\r\n		   <tr>\r\n			   <td class="style-myself">联系人：</td>\r\n			   <td class="styleOne-self">{{hotel.managerName}}</td>\r\n			   <td class="style-myself">联系电话：</td>\r\n			   <td class="styleOne-self">{{hotel.mobileNumber}}</td>\r\n		   </tr>\r\n		   <tr>\r\n			   <td class="style-myself">座机号码：</td>\r\n			   <td class="styleOne-self">{{hotel.telNumber}}</td>\r\n			   <td class="style-myself">传真号码：</td>\r\n			   <td class="styleOne-self">{{hotel.faxNumber}}</td>\r\n		   </tr>\r\n		   <tr>\r\n			   <td class="style-myself">酒店所在省市：</td>\r\n			   <td class="styleOne-self">{{if hotel.province != null}}\r\n				   {{hotel.province.name}}\r\n				   {{/if}}\r\n				   {{if hotel.city != null}}\r\n				   -{{hotel.city.name}}\r\n				   {{/if}}\r\n				   {{if hotel.district != null}}\r\n				   -{{hotel.district.name}}\r\n				   {{/if}}</td>\r\n			   <td class="style-myself">是否启用：</td>\r\n			   <td class="styleOne-self">	{{if hotel.status == 0}}\r\n				   已停用\r\n				   {{else}}\r\n				   已启用\r\n				   {{/if}}</td>\r\n		   </tr>\r\n		   <tr>\r\n			   <td class="style-myself">详细地址：</td>\r\n			   <td class="styleOne-self" >{{hotel.street}}</td>\r\n			   <td class="style-myself">酒店设施：</td>\r\n			   <td class="styleOne-self" >{{hotel.facility}}</td>\r\n		   </tr>\r\n		   <tr>\r\n			   <td class="style-myself">酒店简介：</td>\r\n			   <td class="styleOne-self" colspan="3">{{hotel.remark}}</td>\r\n		   </tr>\r\n	   </table>\r\n	</form>\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ whereTwo">\r\n			<tr>\r\n				<td colspan="11" class="HeadManage" style="text-align: left">房间列表</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">房型</td>\r\n				<td class="style-myself">时间范围</td>\r\n				<td class="style-myself">市场价(元)</td>\r\n				<td class="style-myself">旅行社价(元)</td>\r\n				<td class="style-myself">早餐</td>\r\n				<td class="style-myself">午餐</td>\r\n				<td class="style-myself">晚餐</td>\r\n				<td class="style-myself">宽带</td>\r\n				<td class="style-myself" style="width: 95px!important;">建筑面积(平方)</td>\r\n				<td class="style-myself">最多入住人数</td>\r\n				<td class="style-myself">备注</td>\r\n			</tr>\r\n			{{each hotel.hotelRoomList as room}}\r\n			<tr data-entity-id="{{room.id}}">\r\n			<td>{{room.type}}</td>\r\n			<td class="rangeTimeWidth">{{each room.priceList as price}}\r\n					{{price.startTime | dateFormat:\'yyyy-MM-dd\'}}至{{price.endTime | dateFormat:\'yyyy-MM-dd\'}}\r\n				{{/each}}</td>\r\n				<td>\r\n					{{each room.priceList as price}}\r\n					<div>\r\n						{{price.marketPrice}}\r\n					</div>\r\n					{{/each}}\r\n				</td>\r\n\r\n				<td>\r\n					{{each room.priceList as price}}\r\n					<div>\r\n						{{price.contractPrice}}\r\n					</div>\r\n					{{/each}}\r\n				</td>\r\n\r\n				<td>\r\n					{{if room.containBreakfast == 0}}\r\n					不含\r\n					{{else}}\r\n					包含\r\n					{{/if}}\r\n				</td>\r\n\r\n				<td>\r\n					{{if room.containLunch == 0}}\r\n					不含\r\n					{{else}}\r\n					包含\r\n					{{/if}}\r\n				</td>\r\n				<td>\r\n					{{if room.containDinner == 0}}\r\n					不含\r\n					{{else}}\r\n					包含\r\n					{{/if}}\r\n				</td>\r\n				<td>\r\n					{{room.broadband}}\r\n				</td>\r\n				<td>\r\n					{{room.areaSize}}\r\n				</td>\r\n				<td>\r\n					{{room.guestNumber}}\r\n				</td>\r\n				<td class="remarkWidth">\r\n					{{room.remark}}\r\n				</td>\r\n\r\n			</tr>\r\n			{{/each}}\r\n		</table>\r\n	</form>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});