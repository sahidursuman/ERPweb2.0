/*TMODJS:{"debug":true,"version":190,"md5":"25dd64bb2d0c961d4694bae7e8155a29"}*/
define(function(require) {
    return require("../../../template")("arrange/orderManage/view/listHotel", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, hotelOrderList = $data.hotelOrderList, $escape = ($data.hotOrderList, 
            $data.$index, $data.htOrderNList, $data.index, $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += ' <div class="row col-xs-12 listHotel"> <table class="table table-striped table-bordered table-hover table-fixed"> <thead> <tr class="bg-blur"> <th class="col-sm-2">订单号</th> <th class="col-sm-1">类型</th> <th class="col-sm-2">类型编号</th> <th class="col-sm-1">星级</th> <th class="col-sm-1">房型</th> <th class="col-sm-1">数量</th> <th class="col-sm-1">单价</th> <th class="col-sm-1">金额</th> <th class="col-sm-1">操作人</th> <th class="col-sm-1">酒店</th>` <th class="col-sm-1">备注</th> <th class="col-sm-1">状态</th> <th class="col-sm-1">操作</th> </tr> </thead> <tbody class="T-Hotel-list"> ', 
            $line = 22, $each(hotelOrderList, function(hotOrderList) {
                $out += " ", $line = 23, null != hotOrderList.hotelOrderNeedRoomList && ($out += " ", 
                $line = 24, $each(hotOrderList.hotelOrderNeedRoomList, function(htOrderNList, index) {
                    $out += " <tr data-value=", $line = 25, $out += $escape(hotOrderList.id), $out += "> ", 
                    $line = 26, 0 == index && ($out += '<td rowspan="', $line = 26, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                    $out += '">', $line = 26, $out += $escape(hotOrderList.orderNumber), $out += '</td> <td rowspan="', 
                    $line = 27, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '">发团</td> <td rowspan="', 
                    $line = 28, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '">', 
                    $line = 28, null != hotOrderList.tripPlan && ($line = 28, $out += $escape(hotOrderList.tripPlan.tripNumber), 
                    $line = 28), $out += '</td> <td rowspan="', $line = 30, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                    $out += '"> ', $line = 31, null != hotOrderList.hotel && ($out += " ", $line = 32, 
                    1 == hotOrderList.hotel.level ? ($out += "三星以下 ", $line = 33) : 2 == hotOrderList.hotel.level ? ($out += "三星 ", 
                    $line = 34) : 3 == hotOrderList.hotel.level ? ($out += "准四星 ", $line = 35) : (hotOrderList.hotel.level = 4) ? ($out += "四星 ", 
                    $line = 36) : 5 == hotOrderList.hotel.level ? ($out += "准五星 ", $line = 37) : 6 == hotOrderList.hotel.level ? ($out += "五星 ", 
                    $line = 38) : 7 == hotOrderList.hotel.level && ($out += "五星以上 ", $line = 39), $out += " ", 
                    $line = 40), $out += "</td>", $line = 40), $out += " <td>", $line = 41, $out += $escape(htOrderNList.type), 
                    $out += '</td> <td class="count">', $line = 42, $out += $escape(htOrderNList.needRoomCount), 
                    $out += '</td> <td class="price">', $line = 43, $out += $escape(htOrderNList.price), 
                    $out += '</td> <td class="totalMoney">', $line = 44, $out += $escape(htOrderNList.price), 
                    $out += "</td> ", $line = 45, 0 == index && ($out += '<td rowspan="', $line = 45, 
                    $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '">', $line = 45, 
                    null != hotOrderList.user && ($line = 45, $out += $escape(hotOrderList.user.realName), 
                    $line = 45), $out += '</td> <td rowspan="', $line = 47, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                    $out += '">', $line = 47, null != hotOrderList.hotel && ($line = 47, $out += $escape(hotOrderList.hotel.name), 
                    $line = 47), $out += '</td> <td rowspan="', $line = 48, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                    $out += '" class="T-ctrl-tip">', $line = 48, null != hotOrderList.hotel && ($line = 48, 
                    $out += $escape(hotOrderList.hotel.remark), $line = 48), $out += '</td> <td rowspan="', 
                    $line = 49, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '">', 
                    $line = 49, $out += $escape(hotOrderList.statusStr), $out += '</td> <td rowspan="', 
                    $line = 50, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '"> <a class="cursor ', 
                    $line = 51, 0 == hotOrderList.status && ($out += "T-listHotel-refuse", $line = 51), 
                    $out += ' R-right T-action" style="', $line = 51, (1 == hotOrderList.status || -1 == hotOrderList.status) && ($out += "color:#bbb;", 
                    $line = 51), $out += '"> 撤销 </a> </td>', $line = 54), $out += " </tr> ", $line = 56;
                }), $out += " ", $line = 57), $out += " ", $line = 59;
            }), $out += ' </tbody> </table>  <div class="row pageMode"> <div class="col-xs-4"> <small>共计', 
            $line = 65, $out += $escape(searchParam.totalCount), $out += '条记录</small> </div> <div style="width:320px; float:right;"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>  </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--酒店start-->\r\n<div class="row col-xs-12 listHotel">	\r\n	<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-2">订单号</th>\r\n					<th class="col-sm-1">类型</th>\r\n					<th class="col-sm-2">类型编号</th>\r\n					<th class="col-sm-1">星级</th>\r\n					<th class="col-sm-1">房型</th>\r\n					<th class="col-sm-1">数量</th>\r\n					<th class="col-sm-1">单价</th>\r\n					<th class="col-sm-1">金额</th>\r\n					<th class="col-sm-1">操作人</th>\r\n					<th class="col-sm-1">酒店</th>`\r\n					<th class="col-sm-1">备注</th>\r\n					<th class="col-sm-1">状态</th>\r\n					<th class="col-sm-1">操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Hotel-list">\r\n			{{each hotelOrderList as hotOrderList}}\r\n					{{if hotOrderList.hotelOrderNeedRoomList!=null}}\r\n						{{each hotOrderList.hotelOrderNeedRoomList as htOrderNList index}}\r\n							<tr data-value={{hotOrderList.id}}>\r\n							    {{if index==0}}<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}">{{hotOrderList.orderNumber}}</td>\r\n							    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}">发团</td>\r\n								<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}">{{if hotOrderList.tripPlan!=null}}{{hotOrderList.tripPlan.tripNumber}}{{/if}}</td>\r\n\r\n								<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}">\r\n								{{if hotOrderList.hotel!=null}}\r\n									{{if hotOrderList.hotel.level==1}}三星以下\r\n										{{else if hotOrderList.hotel.level==2}}三星\r\n										{{else if hotOrderList.hotel.level==3}}准四星\r\n										{{else if hotOrderList.hotel.level=4}}四星\r\n										{{else if hotOrderList.hotel.level==5}}准五星\r\n										{{else if hotOrderList.hotel.level==6}}五星\r\n										{{else if hotOrderList.hotel.level==7}}五星以上\r\n									{{/if}}\r\n								{{/if}}</td>{{/if}}\r\n								<td>{{htOrderNList.type}}</td>\r\n								<td class="count">{{htOrderNList.needRoomCount}}</td>\r\n								<td class="price">{{htOrderNList.price}}</td>\r\n								<td class="totalMoney">{{htOrderNList.price}}</td>\r\n								{{if index==0}}<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}">{{if hotOrderList.user!=null}}{{hotOrderList.user.realName}}{{/if}}</td>\r\n\r\n								<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}">{{if hotOrderList.hotel!=null}}{{hotOrderList.hotel.name}}{{/if}}</td>\r\n								<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" class="T-ctrl-tip">{{if hotOrderList.hotel!=null}}{{hotOrderList.hotel.remark}}{{/if}}</td>\r\n								<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}">{{hotOrderList.statusStr}}</td>\r\n								<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}">\r\n									<a class="cursor {{if hotOrderList.status==0}}T-listHotel-refuse{{/if}} R-right T-action" style="{{if hotOrderList.status==1 || hotOrderList.status==-1}}color:#bbb;{{/if}}">\r\n										撤销\r\n									</a>\r\n								</td>{{/if}}					\r\n				            </tr>\r\n						{{/each}}\r\n					{{/if}}\r\n				\r\n			{{/each}}\r\n			</tbody>\r\n	</table>\r\n  <!--分页条数-->\r\n	<div class="row pageMode">\r\n		<div class="col-xs-4">\r\n			<small>共计{{searchParam.totalCount}}条记录</small>\r\n		</div>\r\n		<div style="width:320px; float:right;">\r\n			<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n			</div>  \r\n		</div>\r\n	</div>\r\n   <!--分页条数-->	\r\n\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});