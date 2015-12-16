/*TMODJS:{"debug":true,"version":540,"md5":"b94d8ee0d6969f85a7d2c33140dd5018"}*/
define(function(require) {
    return require("../../../template")("arrange/orderManage/view/listHotel", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, hotelOrderList = $data.hotelOrderList, $escape = ($data.hotOrderList, 
            $data.$index, $utils.$escape), searchParam = ($data.htOrderNList, $data.index, $data.searchParam), $out = "";
            return $out += ' <div class="row col-xs-12 listHotel"> <table class="table table-striped table-bordered table-hover table-fixed"> <thead> <tr class="bg-blur"> <th class="col-sm-2">订单号</th> <th class="col-sm-1">类型</th> <th class="col-sm-2">类型编号</th> <th class="col-sm-1">酒店</th> <th class="col-sm-1">星级</th> <th class="col-sm-1">房型</th> <th class="col-sm-1">数量</th> <th class="col-sm-1">单价</th> <th class="col-sm-1">金额</th> <th class="col-sm-1">操作人</th> <th class="col-sm-1">操作时间</th> <th class="col-sm-1">备注</th> <th class="col-sm-1">状态</th> </tr> </thead> <tbody class="T-Hotel-list"> ', 
            $line = 23, $each(hotelOrderList, function(hotOrderList) {
                $out += ' <tr data-value="', $line = 24, $out += $escape(hotOrderList.id), $out += '"> <td rowspan="', 
                $line = 25, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">', 
                $line = 25, $out += $escape(hotOrderList.orderNumber), $out += '</td> <td rowspan="', 
                $line = 26, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">发团</td> <td rowspan="', 
                $line = 27, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">', 
                $line = 27, null != hotOrderList.tripPlan && ($line = 27, $out += $escape(hotOrderList.tripPlan.tripNumber), 
                $line = 27), $out += '</td> <td rowspan="', $line = 28, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                $out += '" style="vertical-align:middle">', $line = 28, null != hotOrderList.hotel && ($line = 28, 
                $out += $escape(hotOrderList.hotel.name), $line = 28), $out += '</td> <td rowspan="', 
                $line = 29, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">', 
                $line = 29, null != hotOrderList.hotel && ($out += " ", $line = 30, 1 == hotOrderList.hotel.level ? ($out += "三星以下 ", 
                $line = 31) : 2 == hotOrderList.hotel.level ? ($out += "三星 ", $line = 32) : 3 == hotOrderList.hotel.level ? ($out += "准四星 ", 
                $line = 33) : (hotOrderList.hotel.level = 4) ? ($out += "四星 ", $line = 34) : 5 == hotOrderList.hotel.level ? ($out += "准五星 ", 
                $line = 35) : 6 == hotOrderList.hotel.level ? ($out += "五星 ", $line = 36) : 7 == hotOrderList.hotel.level && ($out += "五星以上 ", 
                $line = 37), $out += " ", $line = 38), $out += " </td> ", $line = 40, hotOrderList.hotelOrderNeedRoomList.length > 0 ? ($out += " ", 
                $line = 41, $each(hotOrderList.hotelOrderNeedRoomList, function(htOrderNList, index) {
                    $out += " ", $line = 42, 0 == index && ($out += " <td>", $line = 43, $out += $escape(htOrderNList.type), 
                    $out += '</td> <td class="count">', $line = 44, $out += $escape(htOrderNList.needRoomCount), 
                    $out += '</td> <td class="price">', $line = 45, $out += $escape(htOrderNList.price), 
                    $out += '</td> <td class="totalMoney">', $line = 46, $out += $escape(htOrderNList.price), 
                    $out += "</td> ", $line = 47), $out += " ", $line = 48;
                }), $out += " ", $line = 49) : ($out += " <td>-</td> <td>-</td> <td>-</td> <td>-</td> ", 
                $line = 54), $out += ' <td rowspan="', $line = 55, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                $out += '" style="vertical-align:middle">', $line = 55, null != hotOrderList.user && ($line = 55, 
                $out += $escape(hotOrderList.user.realName), $line = 55), $out += "</td> <td>", 
                $line = 56, null != hotOrderList.createTime && ($line = 56, $out += $escape(hotOrderList.createTime), 
                $line = 56), $out += '</td> <td rowspan="', $line = 59, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                $out += '" style="vertical-align:middle" class="T-ctrl-tip">', $line = 59, null != hotOrderList.hotel && ($line = 59, 
                $out += $escape(hotOrderList.hotel.remark), $line = 59), $out += '</td> <td rowspan="', 
                $line = 61, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '"> ', 
                $line = 62, -1 == hotOrderList.status ? ($out += " 已撤单 ", $line = 64) : 0 == hotOrderList.status ? ($out += " 已下单 ", 
                $line = 66) : 1 == hotOrderList.status ? ($out += " 已确认 ", $line = 68) : 2 == hotOrderList.status ? ($out += " 已完成 ", 
                $line = 70) : 3 == hotOrderList.status && ($out += " 进行中 ", $line = 72), $out += " </td> </tr> ", 
                $line = 76, $each(hotOrderList.hotelOrderNeedRoomList, function(htOrderNList, index) {
                    $out += " ", $line = 77, index > 0 && ($out += " <tr> <td>", $line = 79, $out += $escape(htOrderNList.type), 
                    $out += '</td> <td class="count">', $line = 80, $out += $escape(htOrderNList.needRoomCount), 
                    $out += '</td> <td class="price">', $line = 81, $out += $escape(htOrderNList.price), 
                    $out += '</td> <td class="totalMoney">', $line = 82, $out += $escape(htOrderNList.price), 
                    $out += "</td> </tr> ", $line = 84), $out += " ", $line = 85;
                }), $out += " ", $line = 86;
            }), $out += ' </tbody> </table>  <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 93, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>  </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--酒店start-->\r\n<div class="row col-xs-12 listHotel">	\r\n	<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-2">订单号</th>\r\n					<th class="col-sm-1">类型</th>\r\n					<th class="col-sm-2">类型编号</th>\r\n					<th class="col-sm-1">酒店</th>\r\n					<th class="col-sm-1">星级</th>\r\n					<th class="col-sm-1">房型</th>\r\n					<th class="col-sm-1">数量</th>\r\n					<th class="col-sm-1">单价</th>\r\n					<th class="col-sm-1">金额</th>\r\n					<th class="col-sm-1">操作人</th>\r\n					<th class="col-sm-1">操作时间</th>\r\n					<th class="col-sm-1">备注</th>\r\n					<th class="col-sm-1">状态</th>\r\n\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Hotel-list">\r\n			{{each hotelOrderList as hotOrderList}}\r\n				<tr data-value="{{hotOrderList.id}}">\r\n				    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{hotOrderList.orderNumber}}</td>\r\n				    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">发团</td>\r\n				    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.tripPlan!=null}}{{hotOrderList.tripPlan.tripNumber}}{{/if}}</td>\r\n				    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.hotel!=null}}{{hotOrderList.hotel.name}}{{/if}}</td>\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.hotel!=null}}\r\n							{{if hotOrderList.hotel.level==1}}三星以下\r\n								{{else if hotOrderList.hotel.level==2}}三星\r\n								{{else if hotOrderList.hotel.level==3}}准四星\r\n								{{else if hotOrderList.hotel.level=4}}四星\r\n								{{else if hotOrderList.hotel.level==5}}准五星\r\n								{{else if hotOrderList.hotel.level==6}}五星\r\n								{{else if hotOrderList.hotel.level==7}}五星以上\r\n							{{/if}}\r\n			            {{/if}}\r\n					</td>\r\n					{{if hotOrderList.hotelOrderNeedRoomList.length > 0}}\r\n					{{each hotOrderList.hotelOrderNeedRoomList as htOrderNList index}}\r\n					{{if index == 0}}\r\n					<td>{{htOrderNList.type}}</td>\r\n					<td class="count">{{htOrderNList.needRoomCount}}</td>\r\n					<td class="price">{{htOrderNList.price}}</td>\r\n					<td class="totalMoney">{{htOrderNList.price}}</td>\r\n					{{/if}}\r\n					{{/each}}\r\n					{{else}}\r\n					<td>-</td>\r\n					<td>-</td>\r\n					<td>-</td>\r\n					<td>-</td>\r\n					{{/if}}\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.user!=null}}{{hotOrderList.user.realName}}{{/if}}</td>\r\n					<td>{{if hotOrderList.createTime!=null}}{{hotOrderList.createTime}}{{/if}}</td>			    				    	    \r\n\r\n					\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle" class="T-ctrl-tip">{{if hotOrderList.hotel!=null}}{{hotOrderList.hotel.remark}}{{/if}}</td>\r\n\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}">\r\n						{{if hotOrderList.status==-1}}\r\n						  已撤单\r\n						  {{else if hotOrderList.status==0}}\r\n						  已下单\r\n						  {{else if hotOrderList.status==1}}\r\n						  已确认\r\n						  {{else if hotOrderList.status==2}}\r\n						  已完成\r\n						  {{else if hotOrderList.status==3}}\r\n						  进行中\r\n						{{/if}}\r\n					</td>\r\n				</tr>	\r\n\r\n				{{each hotOrderList.hotelOrderNeedRoomList as htOrderNList index}}\r\n				{{if index > 0}}\r\n				<tr>\r\n					<td>{{htOrderNList.type}}</td>\r\n					<td class="count">{{htOrderNList.needRoomCount}}</td>\r\n					<td class="price">{{htOrderNList.price}}</td>\r\n					<td class="totalMoney">{{htOrderNList.price}}</td>\r\n				</tr>\r\n				{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n			</tbody>\r\n	</table>\r\n\r\n   	<!--分页条数-->\r\n	<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n	</div>\r\n	<!--分页条数-->	\r\n\r\n\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});