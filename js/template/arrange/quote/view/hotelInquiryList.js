/*TMODJS:{"debug":true,"version":87,"md5":"baa0d76741652a66a87b432136f456fe"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/hotelInquiryList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, hotelList = $data.hotelList, $escape = ($data.hotel, 
            $data.$index, $utils.$escape), searchParam = ($data.room, $data.index, $data.searchParam), $out = "";
            return $out += '<div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>酒店</th> <th>星级</th> <th>所在地区</th> <th>联系人</th> <th>联系电话</th> <th>房型</th> <th>含餐情况</th> <th>协议价</th> <th>操作</th> </tr> </thead> <tbody>', 
            $line = 17, $each(hotelList, function(hotel) {
                $out += ' <tr data-entity-id="', $line = 18, $out += $escape(hotel.id), $out += '"> <td style="vertical-align:middle" rowspan="', 
                $line = 19, $out += $escape(hotel.inquiryHotelRoolList.length), $out += '" class="T-name">', 
                $line = 19, $out += $escape(hotel.name), $out += '</td> <td style="vertical-align:middle" rowspan="', 
                $line = 20, $out += $escape(hotel.inquiryHotelRoolList.length), $out += '">', $line = 20, 
                1 == hotel.level ? ($out += "三星以下 ", $line = 21) : 2 == hotel.level ? ($out += "三星 ", 
                $line = 22) : 3 == hotel.level ? ($out += "准四星 ", $line = 23) : 4 == hotel.level ? ($out += "四星 ", 
                $line = 24) : 5 == hotel.level ? ($out += "准五星 ", $line = 25) : 6 == hotel.level ? ($out += "五星 ", 
                $line = 26) : 7 == hotel.level && ($out += "五星以上", $line = 26), $out += '</td> <td style="vertical-align:middle" rowspan="', 
                $line = 27, $out += $escape(hotel.inquiryHotelRoolList.length), $out += '">', $line = 27, 
                null != hotel.province && ($line = 27, $out += $escape(hotel.province.name), $line = 27), 
                $out += "-", $line = 27, null != hotel.city && ($line = 27, $out += $escape(hotel.city.name), 
                $line = 27), $out += "-", $line = 27, null != hotel.district && ($line = 27, $out += $escape(hotel.district.name), 
                $line = 27), $out += '</td> <td style="vertical-align:middle" rowspan="', $line = 28, 
                $out += $escape(hotel.inquiryHotelRoolList.length), $out += '" class="T-managerName">', 
                $line = 28, $out += $escape(hotel.managerName), $out += '</td> <td style="vertical-align:middle" rowspan="', 
                $line = 29, $out += $escape(hotel.inquiryHotelRoolList.length), $out += '" class="T-mobileNumber">', 
                $line = 29, $out += $escape(hotel.mobileNumber), $out += "</td> ", $line = 30, 0 == hotel.inquiryHotelRoolList.length ? ($out += " <td>-</td> <td>-</td> <td>-</td> ", 
                $line = 34) : ($out += " ", $line = 35, $each(hotel.inquiryHotelRoolList, function(room, index) {
                    $out += " ", $line = 36, 0 == index && ($out += " <td>", $line = 37, $out += $escape(room.type), 
                    $out += "</td> <td>", $line = 38, 1 == room.containBreakfast && ($out += "早餐、", 
                    $line = 38), $line = 38, 1 == room.containLunch && ($out += "午餐、", $line = 38), 
                    $line = 38, 1 == room.containDinner && ($out += "晚餐", $line = 38), $out += "</td> <td>", 
                    $line = 39, null != room.price && ($line = 39, $out += $escape(room.price.contractPrice), 
                    $line = 39), $out += "</td> ", $line = 40), $out += " ", $line = 41;
                }), $out += " ", $line = 42), $out += ' <td style="vertical-align:middle" rowspan="', 
                $line = 43, $out += $escape(hotel.inquiryHotelRoolList.length), $out += '"> <label class="pos-rel"><input type="checkbox" class="ace T-chooseHotel"> <span class="lbl"></span> </label> </td> </tr> ', 
                $line = 47, $each(hotel.inquiryHotelRoolList, function(room, index) {
                    $out += " ", $line = 48, index > 0 && ($out += " <tr> <td>", $line = 50, $out += $escape(room.type), 
                    $out += "</td> <td>", $line = 51, 1 == room.containBreakfast && ($out += "早餐、", 
                    $line = 51), $line = 51, 1 == room.containLunch && ($out += "午餐、", $line = 51), 
                    $line = 51, 1 == room.containDinner && ($out += "晚餐", $line = 51), $out += '</td> <td><span class="F-float F-money">', 
                    $line = 52, null != room.price && ($line = 52, $out += $escape(room.price.contractPrice), 
                    $line = 52), $out += "</span></td> </tr> ", $line = 54), $out += " ", $line = 55;
                }), $out += " ", $line = 56;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 61, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr class="bg-blur">  \r\n				<th>酒店</th>\r\n				<th>星级</th>\r\n				<th>所在地区</th>               \r\n				<th>联系人</th>\r\n				<th>联系电话</th>\r\n				<th>房型</th>\r\n				<th>含餐情况</th>\r\n				<th>协议价</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n	\r\n		<tbody>{{each hotelList as hotel}}\r\n			<tr data-entity-id="{{hotel.id}}">\r\n				<td style="vertical-align:middle" rowspan="{{hotel.inquiryHotelRoolList.length}}" class="T-name">{{hotel.name}}</td>\r\n				<td style="vertical-align:middle" rowspan="{{hotel.inquiryHotelRoolList.length}}">{{if hotel.level == 1}}三星以下\r\n					{{else if hotel.level == 2}}三星\r\n					{{else if hotel.level == 3}}准四星\r\n					{{else if hotel.level == 4}}四星\r\n					{{else if hotel.level == 5}}准五星\r\n					{{else if hotel.level == 6}}五星\r\n					{{else if hotel.level == 7}}五星以上{{/if}}</td>\r\n				<td style="vertical-align:middle" rowspan="{{hotel.inquiryHotelRoolList.length}}">{{if hotel.province != null}}{{hotel.province.name}}{{/if}}-{{if hotel.city != null}}{{hotel.city.name}}{{/if}}-{{if hotel.district != null}}{{hotel.district.name}}{{/if}}</td>\r\n				<td style="vertical-align:middle" rowspan="{{hotel.inquiryHotelRoolList.length}}" class="T-managerName">{{hotel.managerName}}</td>\r\n				<td style="vertical-align:middle" rowspan="{{hotel.inquiryHotelRoolList.length}}" class="T-mobileNumber">{{hotel.mobileNumber}}</td>\r\n				{{if hotel.inquiryHotelRoolList.length == 0}}\r\n				<td>-</td>\r\n				<td>-</td>\r\n				<td>-</td>\r\n				{{else}}\r\n					{{each hotel.inquiryHotelRoolList as room index}}\r\n						{{if index == 0}}\r\n						<td>{{room.type}}</td>\r\n						<td>{{if room.containBreakfast == 1}}早餐、{{/if}}{{if room.containLunch == 1}}午餐、{{/if}}{{if room.containDinner == 1}}晚餐{{/if}}</td>\r\n						<td>{{if room.price !=null}}{{room.price.contractPrice}}{{/if}}</td>\r\n						{{/if}}\r\n					{{/each}}\r\n				{{/if}}\r\n				<td style="vertical-align:middle" rowspan="{{hotel.inquiryHotelRoolList.length}}"><!-- <a class="T-chooseHotel">添加</a> -->\r\n					<label class="pos-rel"><input type="checkbox" class="ace T-chooseHotel"> <span class="lbl"></span> </label>\r\n				</td>\r\n			</tr>\r\n			{{each hotel.inquiryHotelRoolList as room index}}\r\n			{{if index > 0}}\r\n			<tr>\r\n				<td>{{room.type}}</td>\r\n				<td>{{if room.containBreakfast == 1}}早餐、{{/if}}{{if room.containLunch == 1}}午餐、{{/if}}{{if room.containDinner == 1}}晚餐{{/if}}</td>\r\n				<td><span class="F-float F-money">{{if room.price !=null}}{{room.price.contractPrice}}{{/if}}</span></td>\r\n			</tr>\r\n			{{/if}}\r\n			{{/each}}\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n	<div class="row pageMode">\r\n		<div class="col-xs-6">\r\n			<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n		</div>\r\n		<div class="col-xs-6">\r\n			<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});