/*TMODJS:{"debug":true,"version":714,"md5":"f19ffdadfba3d8dbfbdc154dcee78f81"}*/
define(function(require) {
    return require("../../../template")("arrange/orderManage/view/listHotel", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, hotelOrderList = $data.hotelOrderList, $escape = ($data.hotOrderList, 
            $data.$index, $utils.$escape), searchParam = ($data.htOrderNList, $data.index, $data.searchParam), $out = "";
            return $out += ' <div class="listHotel"> <table class="table table-striped table-bordered table-hover table-fixed T-showHighLight"> <colgroup> <col style="width:190px;"> <col style="width:50px;"> <col style="width:155px;"> <col> <col style="width:50px;"> <col style="width:70px;"> <col style="width:40px;"> <col style="width:80px"> <col style="width:80px"> <col style="width:60px;"> <col style="width:100px;"> <col style=""> <col style="width:60px;"> </colgroup> <thead> <tr class="bg-blur"> <th>订单号</th> <th>类型</th> <th>类型编号</th> <th>酒店</th> <th>星级</th> <th>房型</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>操作人</th> <th>操作时间</th> <th>备注</th> <th>状态</th> </tr> </thead> <tbody class="T-Hotel-list"> ', 
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
                $line = 43, null != hotOrderList.hotel && ($out += " ", $line = 43, 1 == hotOrderList.hotel.level ? ($out += "三星以下 ", 
                $line = 43) : 2 == hotOrderList.hotel.level ? ($out += "三星 ", $line = 43) : 3 == hotOrderList.hotel.level ? ($out += "准四星 ", 
                $line = 43) : 4 == hotOrderList.hotel.level ? ($out += "四星 ", $line = 43) : 5 == hotOrderList.hotel.level ? ($out += "准五星 ", 
                $line = 43) : 6 == hotOrderList.hotel.level ? ($out += "五星 ", $line = 43) : 7 == hotOrderList.hotel.level && ($out += "五星以上 ", 
                $line = 43), $out += " ", $line = 43), $out += " </td> ", $line = 45, hotOrderList.hotelOrderNeedRoomList.length > 0 ? ($out += " ", 
                $line = 45, $each(hotOrderList.hotelOrderNeedRoomList, function(htOrderNList, index) {
                    $out += " ", $line = 45, 0 == index && ($out += " <td>", $line = 46, $out += $escape(htOrderNList.type), 
                    $out += '</td> <td class="F-float F-count">', $line = 47, $out += $escape(htOrderNList.needRoomCount), 
                    $out += '</td> <td class="F-float F-money">', $line = 48, $out += $escape(htOrderNList.price), 
                    $out += '</td> <td class="F-float F-money">', $line = 49, $out += $escape(htOrderNList.needRoomCount * htOrderNList.price), 
                    $out += "</td> ", $line = 50), $out += " ", $line = 50;
                }), $out += " ", $line = 50) : ($out += " <td>-</td> <td>-</td> <td>-</td> <td>-</td> ", 
                $line = 55), $out += ' <td rowspan="', $line = 56, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                $out += '" style="vertical-align:middle">', $line = 56, null != hotOrderList.user && ($line = 56, 
                $out += $escape(hotOrderList.user.realName), $line = 56), $out += '</td> <td rowspan="', 
                $line = 57, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '" style="vertical-align:middle">', 
                $line = 57, null != hotOrderList.createTime && ($line = 57, $out += $escape($helpers.dateFormat(hotOrderList.createTime, "yyyy-MM-dd")), 
                $line = 57), $out += '</td> <td rowspan="', $line = 58, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), 
                $out += '" style="vertical-align:middle" class="T-ctrl-tip">', $line = 58, null != hotOrderList.hotel && ($line = 58, 
                $out += $escape(hotOrderList.hotel.remark), $line = 58), $out += '</td> <td rowspan="', 
                $line = 59, $out += $escape(hotOrderList.hotelOrderNeedRoomList.length), $out += '"> ', 
                $line = 60, -1 == hotOrderList.status ? ($out += " 已撤单 ", $line = 60) : 0 == hotOrderList.status ? ($out += " 预定中 ", 
                $line = 60) : 1 == hotOrderList.status && -1 == hotOrderList.result ? ($out += " 已拒绝 ", 
                $line = 60) : 1 == hotOrderList.status && 1 == hotOrderList.result && ($out += " 已预订 ", 
                $line = 60), $out += " </td> </tr> ", $line = 63, $each(hotOrderList.hotelOrderNeedRoomList, function(htOrderNList, index) {
                    $out += " ", $line = 63, index > 0 && ($out += " <tr> <td>", $line = 65, $out += $escape(htOrderNList.type), 
                    $out += '</td> <td class="count F-float F-count">', $line = 66, $out += $escape(htOrderNList.needRoomCount), 
                    $out += '</td> <td class="price F-float F-money">', $line = 67, $out += $escape(htOrderNList.price), 
                    $out += '</td> <td class="totalMoney F-float F-money">', $line = 68, $out += $escape(htOrderNList.price), 
                    $out += "</td> </tr> ", $line = 70), $out += " ", $line = 70;
                }), $out += " ", $line = 70;
            }), $out += ' </tbody> </table>  <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 76, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>  </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--酒店start-->\r\n<div class="listHotel">\r\n    <table class="table table-striped table-bordered table-hover table-fixed T-showHighLight">\r\n        <colgroup>\r\n            <col style="width:190px;">\r\n            <col style="width:50px;">\r\n            <col style="width:155px;">\r\n            <col>\r\n            <col style="width:50px;">\r\n            <col style="width:70px;">\r\n            <col style="width:40px;">\r\n            <col style="width:80px">\r\n            <col style="width:80px">\r\n            <col style="width:60px;">\r\n            <col style="width:100px;">\r\n            <col style="">\r\n            <col style="width:60px;">\r\n        </colgroup>\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>订单号</th>\r\n                <th>类型</th>\r\n                <th>类型编号</th>\r\n                <th>酒店</th>\r\n                <th>星级</th>\r\n                <th>房型</th>\r\n                <th>数量</th>\r\n                <th>单价</th>\r\n                <th>金额</th>\r\n                <th>操作人</th>\r\n                <th>操作时间</th>\r\n                <th>备注</th>\r\n                <th>状态</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-Hotel-list">\r\n            {{each hotelOrderList as hotOrderList}}\r\n            <tr data-value="{{hotOrderList.id}}">\r\n                <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{hotOrderList.orderNumber}}</td>\r\n                <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">发团</td>\r\n                <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.tripPlan!=null}}{{hotOrderList.tripPlan.tripNumber}}{{/if}}</td>\r\n                <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.hotel!=null}}{{hotOrderList.hotel.name}}{{/if}}</td>\r\n                <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.hotel!=null}} {{if hotOrderList.hotel.level==1}}三星以下 {{else if hotOrderList.hotel.level==2}}三星 {{else if hotOrderList.hotel.level==3}}准四星 {{else if hotOrderList.hotel.level==4}}四星 {{else if hotOrderList.hotel.level==5}}准五星 {{else if hotOrderList.hotel.level==6}}五星 {{else if hotOrderList.hotel.level==7}}五星以上 {{/if}} {{/if}}\r\n                </td>\r\n                {{if hotOrderList.hotelOrderNeedRoomList.length > 0}} {{each hotOrderList.hotelOrderNeedRoomList as htOrderNList index}} {{if index == 0}}\r\n                <td>{{htOrderNList.type}}</td>\r\n                <td class="F-float F-count">{{htOrderNList.needRoomCount}}</td>\r\n                <td class="F-float F-money">{{htOrderNList.price}}</td>\r\n                <td class="F-float F-money">{{htOrderNList.needRoomCount*htOrderNList.price}}</td>\r\n                {{/if}} {{/each}} {{else}}\r\n                <td>-</td>\r\n                <td>-</td>\r\n                <td>-</td>\r\n                <td>-</td>\r\n                {{/if}}\r\n                <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.user!=null}}{{hotOrderList.user.realName}}{{/if}}</td>\r\n                <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle">{{if hotOrderList.createTime!=null}}{{hotOrderList.createTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}" style="vertical-align:middle" class="T-ctrl-tip">{{if hotOrderList.hotel!=null}}{{hotOrderList.hotel.remark}}{{/if}}</td>\r\n                <td rowspan="{{hotOrderList.hotelOrderNeedRoomList.length}}">\r\n                    {{if hotOrderList.status==-1}} 已撤单 {{else if hotOrderList.status==0}} 预定中 {{else if hotOrderList.status==1 && hotOrderList.result==-1}} 已拒绝 {{else if hotOrderList.status==1 && hotOrderList.result==1}} 已预订 {{/if}}\r\n                </td>\r\n            </tr>\r\n            {{each hotOrderList.hotelOrderNeedRoomList as htOrderNList index}} {{if index > 0}}\r\n            <tr>\r\n                <td>{{htOrderNList.type}}</td>\r\n                <td class="count F-float F-count">{{htOrderNList.needRoomCount}}</td>\r\n                <td class="price F-float F-money">{{htOrderNList.price}}</td>\r\n                <td class="totalMoney F-float F-money">{{htOrderNList.price}}</td>\r\n            </tr>\r\n            {{/if}} {{/each}} {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <!--分页条数-->\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--分页条数-->\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});