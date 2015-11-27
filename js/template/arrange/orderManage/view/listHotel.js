/*TMODJS:{"debug":true,"version":449,"md5":"5274d5ab46cb806ff36880918358652a"}*/
define(function(require) {
    return require("../../../template")("arrange/orderManage/view/listHotel", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, hotelOrderList = $data.hotelOrderList, $escape = ($data.hotOrderList, 
            $data.$index, $utils.$escape), searchParam = ($data.htOrderNList, $data.index, $data.searchParam), $out = "";
            return $out += ' <div class="row col-xs-12 listHotel"> <table class="table table-striped table-bordered table-hover table-fixed"> <thead> <tr class="bg-blur"> <th class="col-sm-2">订单号</th> <th class="col-sm-1">类型</th> <th class="col-sm-2">类型编号</th> <th class="col-sm-1">星级</th> <th class="col-sm-1">房型</th> <th class="col-sm-1">数量</th> <th class="col-sm-1">单价</th> <th class="col-sm-1">金额</th> <th class="col-sm-1">操作人</th> <th class="col-sm-1">酒店</th> <th class="col-sm-1">备注</th> </tr> </thead> <tbody class="T-Hotel-list"> ', 
            $line = 20, $each(hotelOrderList, function(hotOrderList) {
                $out += ' <tr data-value="', $line = 21, $out += $escape(hotOrderList.id), $out += '"> <td rowspan="', 
                $line = 22, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">', 
                $line = 22, $out += $escape(hotOrderList.orderNumber), $out += '</td> <td rowspan="', 
                $line = 23, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">发团</td> <td rowspan="', 
                $line = 24, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">', 
                $line = 24, null != hotOrderList.tripPlan && ($line = 24, $out += $escape(hotOrderList.tripPlan.tripNumber), 
                $line = 24), $out += '</td> <td rowspan="', $line = 25, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                $out += '" style="vertical-align:middle">', $line = 25, null != hotOrderList.hotel && ($out += " ", 
                $line = 26, 1 == hotOrderList.hotel.level ? ($out += "三星以下 ", $line = 27) : 2 == hotOrderList.hotel.level ? ($out += "三星 ", 
                $line = 28) : 3 == hotOrderList.hotel.level ? ($out += "准四星 ", $line = 29) : (hotOrderList.hotel.level = 4) ? ($out += "四星 ", 
                $line = 30) : 5 == hotOrderList.hotel.level ? ($out += "准五星 ", $line = 31) : 6 == hotOrderList.hotel.level ? ($out += "五星 ", 
                $line = 32) : 7 == hotOrderList.hotel.level && ($out += "五星以上 ", $line = 33), $out += " ", 
                $line = 34), $out += " </td> ", $line = 36, hotOrderList.hotelOrderNeedRoomList.length > 0 ? ($out += " ", 
                $line = 37, $each(hotOrderList.hotelOrderNeedRoomList, function(htOrderNList, index) {
                    $out += " ", $line = 38, 0 == index && ($out += " <td>", $line = 39, $out += $escape(htOrderNList.type), 
                    $out += "</td> <td>", $line = 40, $out += $escape(htOrderNList.needRoomCount), $out += "</td> <td>", 
                    $line = 41, $out += $escape(htOrderNList.price), $out += "</td> <td>", $line = 42, 
                    $out += $escape(htOrderNList.price), $out += "</td> ", $line = 43), $out += " ", 
                    $line = 44;
                }), $out += " ", $line = 45) : ($out += " <td>-</td> <td>-</td> <td>-</td> <td>-</td> ", 
                $line = 50), $out += ' <td rowspan="', $line = 51, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                $out += '" style="vertical-align:middle">', $line = 51, null != hotOrderList.user && ($line = 51, 
                $out += $escape(hotOrderList.user.realName), $line = 51), $out += '</td> <td rowspan="', 
                $line = 53, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">', 
                $line = 53, null != hotOrderList.hotel && ($line = 53, $out += $escape(hotOrderList.hotel.name), 
                $line = 53), $out += '</td> <td rowspan="', $line = 54, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                $out += '" style="vertical-align:middle" class="T-ctrl-tip">', $line = 54, null != hotOrderList.hotel && ($line = 54, 
                $out += $escape(hotOrderList.hotel.remark), $line = 54), $out += "</td> </tr> ", 
                $line = 57, $each(hotOrderList.hotelOrderNeedRoomList, function(htOrderNList, index) {
                    $out += " ", $line = 58, index > 0 && ($out += " <tr> <td>", $line = 60, $out += $escape(htOrderNList.type), 
                    $out += "</td> <td>", $line = 61, $out += $escape(htOrderNList.needRoomCount), $out += "</td> <td>", 
                    $line = 62, $out += $escape(htOrderNList.price), $out += "</td> <td>", $line = 63, 
                    $out += $escape(htOrderNList.price), $out += "</td> </tr> ", $line = 65), $out += " ", 
                    $line = 66;
                }), $out += " ", $line = 67;
            }), $out += ' </tbody> </table>  <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 74, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>  </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--酒店start-->\r\n<div class="row col-xs-12 listHotel">	\r\n	<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-2">订单号</th>\r\n					<th class="col-sm-1">类型</th>\r\n					<th class="col-sm-2">类型编号</th>\r\n					<th class="col-sm-1">星级</th>\r\n					<th class="col-sm-1">房型</th>\r\n					<th class="col-sm-1">数量</th>\r\n					<th class="col-sm-1">单价</th>\r\n					<th class="col-sm-1">金额</th>\r\n					<th class="col-sm-1">操作人</th>\r\n					<th class="col-sm-1">酒店</th>\r\n					<th class="col-sm-1">备注</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Hotel-list">\r\n			{{each hotelOrderList as hotOrderList}}\r\n				<tr data-value="{{hotOrderList.id}}">\r\n				    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{hotOrderList.orderNumber}}</td>\r\n				    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">发团</td>\r\n				    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.tripPlan!=null}}{{hotOrderList.tripPlan.tripNumber}}{{/if}}</td>\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.hotel!=null}}\r\n							{{if hotOrderList.hotel.level==1}}三星以下\r\n								{{else if hotOrderList.hotel.level==2}}三星\r\n								{{else if hotOrderList.hotel.level==3}}准四星\r\n								{{else if hotOrderList.hotel.level=4}}四星\r\n								{{else if hotOrderList.hotel.level==5}}准五星\r\n								{{else if hotOrderList.hotel.level==6}}五星\r\n								{{else if hotOrderList.hotel.level==7}}五星以上\r\n							{{/if}}\r\n			            {{/if}}\r\n					</td>\r\n					{{if hotOrderList.hotelOrderNeedRoomList.length > 0}}\r\n					{{each hotOrderList.hotelOrderNeedRoomList as htOrderNList index}}\r\n					{{if index == 0}}\r\n					<td>{{htOrderNList.type}}</td>\r\n					<td>{{htOrderNList.needRoomCount}}</td>\r\n					<td>{{htOrderNList.price}}</td>\r\n					<td>{{htOrderNList.price}}</td>\r\n					{{/if}}\r\n					{{/each}}\r\n					{{else}}\r\n					<td>-</td>\r\n					<td>-</td>\r\n					<td>-</td>\r\n					<td>-</td>\r\n					{{/if}}\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.user!=null}}{{hotOrderList.user.realName}}{{/if}}</td>					    				    	    \r\n\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.hotel!=null}}{{hotOrderList.hotel.name}}{{/if}}</td>\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle" class="T-ctrl-tip">{{if hotOrderList.hotel!=null}}{{hotOrderList.hotel.remark}}{{/if}}</td>\r\n				</tr>	\r\n\r\n				{{each hotOrderList.hotelOrderNeedRoomList as htOrderNList index}}\r\n				{{if index > 0}}\r\n				<tr>\r\n				<td>{{htOrderNList.type}}</td>\r\n				<td>{{htOrderNList.needRoomCount}}</td>\r\n				<td>{{htOrderNList.price}}</td>\r\n				<td>{{htOrderNList.price}}</td>\r\n				</tr>\r\n				{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n			</tbody>\r\n	</table>\r\n\r\n   	<!--分页条数-->\r\n	<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n	</div>\r\n	<!--分页条数-->	\r\n\r\n\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});