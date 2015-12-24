/*TMODJS:{"debug":true,"version":683,"md5":"700f85dfb3ac349f9ba5735422c54a3e"}*/
define(function(require) {
    return require("../../../template")("arrange/orderManage/view/listHotel", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, hotelOrderList = $data.hotelOrderList, $escape = ($data.hotOrderList, 
            $data.$index, $utils.$escape), searchParam = ($data.htOrderNList, $data.index, $data.searchParam), $out = "";
            return $out += ' <div class="row col-xs-12 listHotel"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:30%;"></col> <col style="width:10%;"></col> <col style="width:25%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:15%;"></col> <col style="width:95px"></col> <col style="width:95px"></col> <col style="width:80px;"></col> <col style="width:10%;"></col> <col style="width:15%;"></col> <col style="width:25%;"></col> <col style="width:100px;"></col> </colgroup> <thead> <tr class="bg-blur"> <th>订单号</th> <th>类型</th> <th>类型编号</th> <th>酒店</th> <th>星级</th> <th>房型</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>操作人</th> <th>操作时间</th> <th>备注</th> <th>状态</th> </tr> </thead> <tbody class="T-Hotel-list"> ', 
            $line = 37, $each(hotelOrderList, function(hotOrderList) {
                $out += ' <tr data-value="', $line = 38, $out += $escape(hotOrderList.id), $out += '"> <td rowspan="', 
                $line = 39, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">', 
                $line = 39, $out += $escape(hotOrderList.orderNumber), $out += '</td> <td rowspan="', 
                $line = 40, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">发团</td> <td rowspan="', 
                $line = 41, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">', 
                $line = 41, null != hotOrderList.tripPlan && ($line = 41, $out += $escape(hotOrderList.tripPlan.tripNumber), 
                $line = 41), $out += '</td> <td rowspan="', $line = 42, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                $out += '" style="vertical-align:middle">', $line = 42, null != hotOrderList.hotel && ($line = 42, 
                $out += $escape(hotOrderList.hotel.name), $line = 42), $out += '</td> <td rowspan="', 
                $line = 43, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">', 
                $line = 43, null != hotOrderList.hotel && ($out += " ", $line = 44, 1 == hotOrderList.hotel.level ? ($out += "三星以下 ", 
                $line = 45) : 2 == hotOrderList.hotel.level ? ($out += "三星 ", $line = 46) : 3 == hotOrderList.hotel.level ? ($out += "准四星 ", 
                $line = 47) : (hotOrderList.hotel.level = 4) ? ($out += "四星 ", $line = 48) : 5 == hotOrderList.hotel.level ? ($out += "准五星 ", 
                $line = 49) : 6 == hotOrderList.hotel.level ? ($out += "五星 ", $line = 50) : 7 == hotOrderList.hotel.level && ($out += "五星以上 ", 
                $line = 51), $out += " ", $line = 52), $out += " </td> ", $line = 54, hotOrderList.hotelOrderNeedRoomList.length > 0 ? ($out += " ", 
                $line = 55, $each(hotOrderList.hotelOrderNeedRoomList, function(htOrderNList, index) {
                    $out += " ", $line = 56, 0 == index && ($out += " <td>", $line = 57, $out += $escape(htOrderNList.type), 
                    $out += "</td> <td>", $line = 58, $out += $escape(htOrderNList.needRoomCount), $out += "</td> <td>", 
                    $line = 59, $out += $escape(htOrderNList.price), $out += "</td> <td>", $line = 60, 
                    $out += $escape(htOrderNList.needRoomCount * htOrderNList.price), $out += "</td> ", 
                    $line = 61), $out += " ", $line = 62;
                }), $out += " ", $line = 63) : ($out += " <td>-</td> <td>-</td> <td>-</td> <td>-</td> ", 
                $line = 68), $out += ' <td rowspan="', $line = 69, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                $out += '" style="vertical-align:middle">', $line = 69, null != hotOrderList.user && ($line = 69, 
                $out += $escape(hotOrderList.user.realName), $line = 69), $out += '</td> <td rowspan="', 
                $line = 70, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">', 
                $line = 70, null != hotOrderList.createTime && ($line = 70, $out += $escape($helpers.dateFormat(hotOrderList.createTime, "yyyy-MM-dd")), 
                $line = 70), $out += '</td> <td rowspan="', $line = 73, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                $out += '" style="vertical-align:middle" class="T-ctrl-tip">', $line = 73, null != hotOrderList.hotel && ($line = 73, 
                $out += $escape(hotOrderList.hotel.remark), $line = 73), $out += '</td> <td rowspan="', 
                $line = 75, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '"> ', 
                $line = 76, -1 == hotOrderList.status ? ($out += " 已撤单 ", $line = 78) : 0 == hotOrderList.status ? ($out += " 预定中 ", 
                $line = 80) : 1 == hotOrderList.status && -1 == hotOrderList.result ? ($out += " 已拒绝 ", 
                $line = 82) : 1 == hotOrderList.status && 1 == hotOrderList.status && ($out += " 已预订 ", 
                $line = 84), $out += " </td> </tr> ", $line = 88, $each(hotOrderList.hotelOrderNeedRoomList, function(htOrderNList, index) {
                    $out += " ", $line = 89, index > 0 && ($out += " <tr> <td>", $line = 91, $out += $escape(htOrderNList.type), 
                    $out += '</td> <td class="count">', $line = 92, $out += $escape(htOrderNList.needRoomCount), 
                    $out += '</td> <td class="price">', $line = 93, $out += $escape(htOrderNList.price), 
                    $out += '</td> <td class="totalMoney">', $line = 94, $out += $escape(htOrderNList.price), 
                    $out += "</td> </tr> ", $line = 96), $out += " ", $line = 97;
                }), $out += " ", $line = 98;
            }), $out += ' </tbody> </table>  <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 105, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>  </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--酒店start-->\r\n<div class="row col-xs-12 listHotel">	\r\n	<table class="table table-striped table-bordered table-hover table-fixed">\r\n	        <colgroup>\r\n		    	<col style="width:30%;"></col>\r\n		    	<col style="width:10%;"></col>\r\n		    	<col style="width:25%;"></col>\r\n		    	<col style="width:15%;"></col>\r\n		    	<col style="width:10%;"></col>\r\n			 	<col style="width:15%;"></col>\r\n 				<col style="width:95px"></col>\r\n		    	<col style="width:95px"></col>\r\n		    	<col style="width:80px;"></col>\r\n		 	 	<col style="width:10%;"></col>\r\n		 	 	<col style="width:15%;"></col>\r\n		 	 	<col style="width:25%;"></col>\r\n		 	 	<col style="width:100px;"></col>\r\n		    </colgroup>\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>订单号</th>\r\n					<th>类型</th>\r\n					<th>类型编号</th>\r\n					<th>酒店</th>\r\n					<th>星级</th>\r\n					<th>房型</th>\r\n					<th>数量</th>\r\n					<th>单价</th>\r\n					<th>金额</th>\r\n					<th>操作人</th>\r\n					<th>操作时间</th>\r\n					<th>备注</th>\r\n					<th>状态</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-Hotel-list">\r\n			{{each hotelOrderList as hotOrderList}}\r\n				<tr data-value="{{hotOrderList.id}}">\r\n				    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{hotOrderList.orderNumber}}</td>\r\n				    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">发团</td>\r\n				    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.tripPlan!=null}}{{hotOrderList.tripPlan.tripNumber}}{{/if}}</td>\r\n				    <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.hotel!=null}}{{hotOrderList.hotel.name}}{{/if}}</td>\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.hotel!=null}}\r\n							{{if hotOrderList.hotel.level==1}}三星以下\r\n								{{else if hotOrderList.hotel.level==2}}三星\r\n								{{else if hotOrderList.hotel.level==3}}准四星\r\n								{{else if hotOrderList.hotel.level=4}}四星\r\n								{{else if hotOrderList.hotel.level==5}}准五星\r\n								{{else if hotOrderList.hotel.level==6}}五星\r\n								{{else if hotOrderList.hotel.level==7}}五星以上\r\n							{{/if}}\r\n			            {{/if}}\r\n					</td>\r\n					{{if hotOrderList.hotelOrderNeedRoomList.length > 0}}\r\n					{{each hotOrderList.hotelOrderNeedRoomList as htOrderNList index}}\r\n					{{if index == 0}}\r\n					<td>{{htOrderNList.type}}</td>\r\n					<td>{{htOrderNList.needRoomCount}}</td>\r\n					<td>{{htOrderNList.price}}</td>\r\n					<td>{{htOrderNList.needRoomCount*htOrderNList.price}}</td>\r\n					{{/if}}\r\n					{{/each}}\r\n					{{else}}\r\n					<td>-</td>\r\n					<td>-</td>\r\n					<td>-</td>\r\n					<td>-</td>\r\n					{{/if}}\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.user!=null}}{{hotOrderList.user.realName}}{{/if}}</td>\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.createTime!=null}}{{hotOrderList.createTime  | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>			    				    	    \r\n\r\n					\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle" class="T-ctrl-tip">{{if hotOrderList.hotel!=null}}{{hotOrderList.hotel.remark}}{{/if}}</td>\r\n\r\n					<td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}">\r\n						{{if hotOrderList.status==-1}}\r\n						  已撤单\r\n						  {{else if hotOrderList.status==0}}\r\n						  预定中\r\n						  {{else if hotOrderList.status==1 && hotOrderList.result==-1}}\r\n						  已拒绝\r\n						  {{else if hotOrderList.status==1  && hotOrderList.status==1}}\r\n						  已预订\r\n						{{/if}}\r\n					</td>\r\n				</tr>	\r\n\r\n				{{each hotOrderList.hotelOrderNeedRoomList as htOrderNList index}}\r\n				{{if index > 0}}\r\n				<tr>\r\n					<td>{{htOrderNList.type}}</td>\r\n					<td class="count">{{htOrderNList.needRoomCount}}</td>\r\n					<td class="price">{{htOrderNList.price}}</td>\r\n					<td class="totalMoney">{{htOrderNList.price}}</td>\r\n				</tr>\r\n				{{/if}}\r\n				{{/each}}\r\n			{{/each}}\r\n			</tbody>\r\n	</table>\r\n\r\n   	<!--分页条数-->\r\n	<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n	</div>\r\n	<!--分页条数-->	\r\n\r\n\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});