/*TMODJS:{"debug":true,"version":115,"md5":"3e87f4a7b2622134df98a43ea687d7d3"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/quoteDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, quoteDetailJson = $data.quoteDetailJson, busCompanyArrange = $data.busCompanyArrange, $each = $utils.$each, daysList = $data.daysList, $string = ($data.viewQuoteDaysList, 
            $data.i, $data.shopList, $data.$index, $data.restaurantList, $data.index, $data.hotelList, 
            $data.scenicList, $data.selfPayList, $utils.$string), $out = "";
            return $out += '<div style="background-color:#fff;" id="top"> <div class="shareQuoteS" style="" id="D1"> <div class="quote-title-style"> <h5 class="share-title-h5">', 
            $line = 4, $out += $escape(quoteDetailJson.lineProduct.name), $out += '</h5> <p class="share-startTime">出游日期：', 
            $line = 5, $out += $escape($helpers.dateFormat(quoteDetailJson.startTime, "yyyy-MM-dd")), 
            $out += '</p> </div> <div class="share-quoteBigMain"> <div class="share-quote-offer"> <p style="font-size: 16px;color: #ff6511;"><span>', 
            $line = 9, $out += $escape(quoteDetailJson.partnerAgency.travelAgencyName), $out += '</span> <span style="margin-left: 12px;">', 
            $line = 9, $out += $escape(quoteDetailJson.partnerAgencyContact.contactRealname), 
            $out += '</span> <span style="margin-left: 12px;">', $line = 9, $out += $escape(quoteDetailJson.partnerAgencyContact.contactMobileNumber), 
            $out += '：</span></p> <p class="share-thank-p">感谢惠顾，线路行程和报价为您展示如下，如有不明白之处请来电，谢谢！</p> <p class="share-agency-name"><span>', 
            $line = 11, $out += $escape(quoteDetailJson.travelAgency.name), $out += '</span> <span style="margin-left: 8px;">', 
            $line = 12, $out += $escape(quoteDetailJson.user.realName), $out += '</span> <span style="margin-left: 8px;">', 
            $line = 13, $out += $escape(quoteDetailJson.user.mobileNumber), $out += '</span></p> <p style="margin-left:560px;color: #444;margin-top: -5px;">', 
            $line = 14, $out += $escape(quoteDetailJson.createTime), $out += '</p> <div class="share-quote-offerdetails"> <p class="share-dividing">线路报价</p> <p>', 
            $line = 17, $out += $escape(quoteDetailJson.lineProduct.name), $out += '</p> <p style="margin-top: -5px;"><span>天数：', 
            $line = 18, $out += $escape(quoteDetailJson.lineProduct.days), $out += '</span> <span style="margin-left: 20px; ">类别：', 
            $line = 19, $out += $escape(quoteDetailJson.lineProduct.type), $out += '</span> <span style="margin-left: 20px; ">出游日期：', 
            $line = 20, $out += $escape($helpers.dateFormat(quoteDetailJson.startTime, "yyyy-MM-dd")), 
            $out += '</span> <span style="margin-left: 20px; ">出游人数：', $line = 21, $out += $escape(quoteDetailJson.adultCount), 
            $out += "大", $line = 21, $out += $escape(quoteDetailJson.childCount), $out += '小</span> </p> <table class="whereQ whereTwo quoteTable" style="width: 100%;margin-bottom: 10px;"> <tr style="font-weight: bold;background-color: #F3F3F3;"> <td class="style-myself"></td> <td class="style-myself">大人</td> <td class="style-myself">小孩</td> <td class="style-myself">总价</td> </tr> <tr> <td>单价</td> <td style="font-size: 14px;color: #ff6511;font-weight: bold;">￥', 
            $line = 32, $out += $escape(quoteDetailJson.adultQuotePrice), $out += '</td> <td style="font-size: 14px;color: #ff6511;font-weight: bold;">￥', 
            $line = 33, $out += $escape(quoteDetailJson.childQuotePrice), $out += '</td> <td rowspan="3" style="font-size: 14px;font-weight: bold;">￥', 
            $line = 34, $out += $escape(quoteDetailJson.sumQuoteFee), $out += "</td> </tr> <tr> <td>数量</td> <td>", 
            $line = 38, $out += $escape(quoteDetailJson.adultCount), $out += "</td> <td>", $line = 39, 
            $out += $escape(quoteDetailJson.childCount), $out += '</td> </tr> </table> <p><span style="color: #ff6511">*</span>备注：&nbsp;&nbsp;&nbsp;单房差报价：', 
            $line = 42, $out += $escape(quoteDetailJson.singleRoomQuotePrice), $out += "，单房差数量：", 
            $line = 42, $out += $escape(quoteDetailJson.singleRoomCount), $out += "。</p> ", 
            $line = 43, busCompanyArrange && ($out += ' <p style="margin-left: 55px;">交通： <span>', 
            $line = 45, busCompanyArrange.bus && ($line = 45, $out += $escape(busCompanyArrange.bus.brand), 
            $line = 45), $out += "</span> <span>", $line = 46, busCompanyArrange.bus && ($line = 46, 
            $out += $escape(busCompanyArrange.bus.seatCount), $line = 46), $out += "座，</span> <span>", 
            $line = 47, $out += $escape(busCompanyArrange.remark), $out += "</span></p> ", $line = 48), 
            $out += ' </div> </div> <div class="share-quote-arrange"> <p class="share-dividing">线路安排</p> ', 
            $line = 53, $each(daysList, function(viewQuoteDaysList, i) {
                $out += ' <table class="whereQ quoteTable quoteTable-arrange" style="width: 100%;margin-bottom: 30px;"> <tr style="font-weight: bold;background-color: #F3F3F3;"> <td class="style-myself" colspan="3"><span>第', 
                $line = 56, $out += $escape(i + 1), $out += '天</span> <span style="margin-left: 10px;">', 
                $line = 56, $out += $escape(viewQuoteDaysList.times), $out += '</span> <span></span></td> </tr>  <tr> <td style="width: 160px">交通</td> <td style="text-align: left;"> <span>', 
                $line = 61, $out += $escape(busCompanyArrange.bus.brand), $out += '</span></td> <td style="width: 180px;"></td> </tr>  <tr> <td>含餐</td> <td><span>', 
                $line = 67, $out += $escape(viewQuoteDaysList.lineProductDay.repastDetail), $out += "</span> </td> <td></td> </tr>  ", 
                $line = 72, $each(viewQuoteDaysList.shopArrange, function(shopList) {
                    $out += " <tr> <td>购物</td> <td>", $line = 75, $out += $escape(shopList.shop.name), 
                    $out += "</td> <td> </td> </tr> ", $line = 78;
                }), $out += "  ", $line = 80, null != viewQuoteDaysList.restaurantArrange && ($out += " ", 
                $line = 80, $each(viewQuoteDaysList.restaurantArrange, function(restaurantList, index) {
                    $out += " ", $line = 80, 0 == index && ($out += ' <tr> <td rowspan="', $line = 82, 
                    $out += $escape(viewQuoteDaysList.restaurantArrange.length), $out += '">餐饮</td> <td>', 
                    $line = 83, $out += $escape(restaurantList.restaurantStandard.type), $out += ' <span style="margin-left: 15px;">', 
                    $line = 83, $out += $escape(restaurantList.restaurant.name), $out += "</span></td> <td>￥", 
                    $line = 84, $out += $escape(restaurantList.restaurantStandard.price), $out += "</td> </tr> ", 
                    $line = 86), $out += " ", $line = 86;
                }), $out += " ", $line = 86, $each(viewQuoteDaysList.restaurantArrange, function(restaurantList, index) {
                    $out += " ", $line = 86, index > 0 && ($out += " <tr> <td>", $line = 88, $out += $escape(restaurantList.restaurantStandard.type), 
                    $out += ' <span style="margin-left: 15px;">', $line = 88, $out += $escape(restaurantList.restaurant.name), 
                    $out += "</span></td> <td>￥", $line = 89, $out += $escape(restaurantList.restaurantStandard.price), 
                    $out += "</td> </tr> ", $line = 91), $out += " ", $line = 91;
                }), $out += " ", $line = 91), $out += "  ", $line = 93, null != viewQuoteDaysList.hotelArrange && ($out += " ", 
                $line = 93, $each(viewQuoteDaysList.hotelArrange, function(hotelList, index) {
                    $out += " ", $line = 93, 0 == index && ($out += ' <tr> <td rowspan="', $line = 95, 
                    $out += $escape(viewQuoteDaysList.hotelArrange.length), $out += '">住宿</td> <td><span> ', 
                    $line = 97, 0 == hotelList.hotel.level ? ($out += " 未选择 ", $line = 99) : 1 == hotelList.hotel.level ? ($out += " 三星以下 ", 
                    $line = 101) : 2 == hotelList.hotel.level ? ($out += " 三星 ", $line = 103) : 3 == hotelList.hotel.level ? ($out += " 准四星 ", 
                    $line = 105) : 4 == hotelList.hotel.level ? ($out += " 四星 ", $line = 107) : 5 == hotelList.hotel.level ? ($out += " 准五星 ", 
                    $line = 109) : 6 == hotelList.hotel.level ? ($out += " 五星 ", $line = 111) : 7 == hotelList.hotel.level && ($out += " 五星以上 ", 
                    $line = 113), $out += '</span><span style="margin-left: 15px;">', $line = 113, $out += $escape(hotelList.hotel.name), 
                    $out += '</span> <span style="margin-left: 15px;">', $line = 113, $out += $escape(hotelList.hotelRoom.type), 
                    $out += "</span> <span>", $line = 114, 0 == hotelList.hotelRoom.containBreakfast ? ($out += "含早", 
                    $line = 114) : $line = 114, $out += "</span> <span>", $line = 115, 0 == hotelList.hotelRoom.containLunch ? ($out += "含午", 
                    $line = 115) : $line = 115, $out += "</span> <span>", $line = 116, 0 == hotelList.hotelRoom.containDinner ? ($out += "含晚", 
                    $line = 116) : $line = 116, $out += '</span> <span style="margin-left: 15px;">', 
                    $line = 117, $out += $escape(hotelList.hotel.remark), $out += "</span> </td> <td>￥", 
                    $line = 119, $out += $escape(hotelList.price), $out += "</td> </tr> ", $line = 121), 
                    $out += " ", $line = 121;
                }), $out += " ", $line = 121, $each(viewQuoteDaysList.hotelArrange, function(hotelList, index) {
                    $out += " ", $line = 121, index > 0 && ($out += " <tr> <td> <span> ", $line = 124, 
                    0 == hotelList.hotel.level ? ($out += " 未选择 ", $line = 126) : 1 == hotelList.hotel.level ? ($out += " 三星以下 ", 
                    $line = 128) : 2 == hotelList.hotel.level ? ($out += " 三星 ", $line = 130) : 3 == hotelList.hotel.level ? ($out += " 准四星 ", 
                    $line = 132) : 4 == hotelList.hotel.level ? ($out += " 四星 ", $line = 134) : 5 == hotelList.hotel.level ? ($out += " 准五星 ", 
                    $line = 136) : 6 == hotelList.hotel.level ? ($out += " 五星 ", $line = 138) : 7 == hotelList.hotel.level && ($out += " 五星以上 ", 
                    $line = 140), $out += '</span> <span style="margin-left: 15px;"> ', $line = 140, 
                    $out += $escape(hotelList.hotel.name), $out += '</span> <span style="margin-left: 15px;">', 
                    $line = 140, $out += $escape(hotelList.hotelRoom.type), $out += "</span> <span>", 
                    $line = 141, 0 == hotelList.hotelRoom.containBreakfast ? ($out += "含早", $line = 141) : $line = 141, 
                    $out += "</span> <span>", $line = 142, 0 == hotelList.hotelRoom.containLunch ? ($out += "含午", 
                    $line = 142) : $line = 142, $out += "</span> <span>", $line = 143, 0 == hotelList.hotelRoom.containDinner ? ($out += "含晚", 
                    $line = 143) : $line = 143, $out += '</span> <span style="margin-left: 15px;">', 
                    $line = 144, $out += $escape(hotelList.hotel.remark), $out += "</span> </td> <td>￥", 
                    $line = 146, $out += $escape(hotelList.price), $out += "</td> </tr> ", $line = 148), 
                    $out += " ", $line = 148;
                }), $out += " ", $line = 148), $out += "  ", $line = 150, null != viewQuoteDaysList.scenicArrange && ($out += " ", 
                $line = 150, $each(viewQuoteDaysList.scenicArrange, function(scenicList, index) {
                    $out += " ", $line = 150, 0 == index && ($out += ' <tr> <td rowspan="', $line = 152, 
                    $out += $escape(viewQuoteDaysList.scenicArrange.length), $out += '">景点</td> <td>', 
                    $line = 153, $out += $escape(scenicList.scenic.name), $out += ' <span style="margin-left: 15px;">', 
                    $line = 153, $out += $escape(scenicList.tourDuration), $out += '</span> <span style="margin-left: 15px;">', 
                    $line = 153, $out += $escape(scenicList.remark), $out += "</span></td> <td>￥", $line = 154, 
                    $out += $escape(scenicList.price), $out += "</td> </tr> ", $line = 156), $out += " ", 
                    $line = 156;
                }), $out += " ", $line = 156, $each(viewQuoteDaysList.scenicArrange, function(scenicList, index) {
                    $out += " ", $line = 156, index > 0 && ($out += " <tr> <td>", $line = 158, $out += $escape(scenicList.scenic.name), 
                    $out += "</td> <td>￥", $line = 159, $out += $escape(scenicList.price), $out += "</td> </tr> ", 
                    $line = 161), $out += " ", $line = 161;
                }), $out += " ", $line = 161), $out += "  ", $line = 163, $each(viewQuoteDaysList.selfPayArrange, function(selfPayList) {
                    $out += " <tr> <td>自费</td> <td>", $line = 166, $out += $escape(selfPayList.selfPayItem.name), 
                    $out += "</td> <td>￥", $line = 167, $out += $escape(selfPayList.price), $out += "</td> </tr> ", 
                    $line = 169;
                }), $out += " </table>  ", $line = 176;
            }), $out += ' </div> <div class="share-quote-schedule"> <p id="D2" class="share-dividing">日程安排</p> ', 
            $line = 180, $each(daysList, function(viewQuoteDaysList) {
                $out += ' <div class="share-quote-origin"> <span class="share-startTime-divid">', 
                $line = 182, $out += $escape(viewQuoteDaysList.times), $out += '</span> <p style="margin-top: 6px;color: #222;font-size: 15px">出发地--成都</p> <div class="share-detailedContent"> <div style="width: 960px;margin: auto;overflow: scroll;"> ', 
                $line = 186, $out += $string(viewQuoteDaysList.lineProductDay.detail), $out += " </div>  </div> </div> ", 
                $line = 192;
            }), $out += ' </div> <div class="share-needing-attention"> <p id="D3" class="share-dividing">注意事项</p> <div class="form-group"> <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">费用包含</b></p> <p>', 
            $line = 198, $out += $escape(quoteDetailJson.lineProduct.includeFee), $out += '</p> </div> <div class="form-group" style="margin-top: 20px;"> <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">费用不含</b></p> <p>', 
            $line = 202, $out += $escape(quoteDetailJson.lineProduct.excludeFee), $out += '</p> </div> <div class="form-group" style="margin-top: 20px;"> <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">行程特色</b> </p> <p>', 
            $line = 206, $out += $escape(quoteDetailJson.lineProduct.lineFeature), $out += '</p> </div> <div class="form-group" style="margin-top: 20px;"> <p><span class="share-attention"></span> <b style="position: absolute;margin-left: 5px;">行程须知</b> </p> <p>', 
            $line = 210, $out += $escape(quoteDetailJson.lineProduct.lineNotice), $out += '</p> </div> </div> </div> </div> </div> <p id="back-top"><a href=""><span></span></a></p> <div class="share-anchor" style="width: 30px;height: 170px;background-color: #eaeaea;position: fixed;top: 340px;left:414px;border-radius: 20px"> <ul class="share-anchor-ul"> <li><a href="#D1">D1</a></li> <li><a href="#D2">D2</a></li> <li><a href="#D3">D3</a></li> </ul> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div style="background-color:#fff;" id="top">\r\n    <div class="shareQuoteS" style="" id="D1">\r\n        <div class="quote-title-style">\r\n            <h5 class="share-title-h5">{{quoteDetailJson.lineProduct.name}}</h5>\r\n            <p class="share-startTime">出游日期：{{quoteDetailJson.startTime | dateFormat:\'yyyy-MM-dd\'}}</p>\r\n        </div>\r\n        <div class="share-quoteBigMain">\r\n            <div class="share-quote-offer">\r\n                <p style="font-size: 16px;color: #ff6511;"><span>{{quoteDetailJson.partnerAgency.travelAgencyName}}</span> <span style="margin-left: 12px;">{{quoteDetailJson.partnerAgencyContact.contactRealname}}</span> <span style="margin-left: 12px;">{{quoteDetailJson.partnerAgencyContact.contactMobileNumber}}：</span></p>\r\n                <p class="share-thank-p">感谢惠顾，线路行程和报价为您展示如下，如有不明白之处请来电，谢谢！</p>\r\n                <p class="share-agency-name"><span>{{quoteDetailJson.travelAgency.name}}</span>\r\n                    <span style="margin-left: 8px;">{{quoteDetailJson.user.realName}}</span>\r\n                    <span style="margin-left: 8px;">{{quoteDetailJson.user.mobileNumber}}</span></p>\r\n                <p style="margin-left:560px;color: #444;margin-top: -5px;">{{quoteDetailJson.createTime}}</p>\r\n                <div class="share-quote-offerdetails">\r\n                    <p class="share-dividing">线路报价</p>\r\n                    <p>{{quoteDetailJson.lineProduct.name}}</p>\r\n                    <p style="margin-top: -5px;"><span>天数：{{quoteDetailJson.lineProduct.days}}</span>\r\n                        <span style="margin-left: 20px; ">类别：{{quoteDetailJson.lineProduct.type}}</span>\r\n                        <span style="margin-left: 20px; ">出游日期：{{quoteDetailJson.startTime | dateFormat:\'yyyy-MM-dd\'}}</span>\r\n                        <span style="margin-left: 20px; ">出游人数：{{quoteDetailJson.adultCount}}大{{quoteDetailJson.childCount}}小</span>\r\n                    </p>\r\n                    <table class="whereQ whereTwo quoteTable" style="width: 100%;margin-bottom: 10px;">\r\n                        <tr style="font-weight: bold;background-color: #F3F3F3;">\r\n                            <td class="style-myself"></td>\r\n                            <td class="style-myself">大人</td>\r\n                            <td class="style-myself">小孩</td>\r\n                            <td class="style-myself">总价</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>单价</td>\r\n                            <td style="font-size: 14px;color: #ff6511;font-weight: bold;">￥{{quoteDetailJson.adultQuotePrice}}</td>\r\n                            <td style="font-size: 14px;color: #ff6511;font-weight: bold;">￥{{quoteDetailJson.childQuotePrice}}</td>\r\n                            <td rowspan="3" style="font-size: 14px;font-weight: bold;">￥{{quoteDetailJson.sumQuoteFee}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>数量</td>\r\n                            <td>{{quoteDetailJson.adultCount}}</td>\r\n                            <td>{{quoteDetailJson.childCount}}</td>\r\n                        </tr>\r\n                    </table>\r\n                    <p><span style="color: #ff6511">*</span>备注：&nbsp;&nbsp;&nbsp;单房差报价：{{quoteDetailJson.singleRoomQuotePrice}}，单房差数量：{{quoteDetailJson.singleRoomCount}}。</p>\r\n                    {{if !!busCompanyArrange}}\r\n                    <p style="margin-left: 55px;">交通：\r\n                        <span>{{if !!busCompanyArrange.bus}}{{busCompanyArrange.bus.brand}}{{/if}}</span>\r\n                        <span>{{if !!busCompanyArrange.bus}}{{busCompanyArrange.bus.seatCount}}{{/if}}座，</span>\r\n                        <span>{{busCompanyArrange.remark}}</span></p>\r\n                    {{/if}}\r\n                </div>\r\n            </div>\r\n            <div class="share-quote-arrange">\r\n                <p class="share-dividing">线路安排</p>\r\n                {{each daysList as viewQuoteDaysList i}}\r\n                <table class="whereQ quoteTable quoteTable-arrange" style="width: 100%;margin-bottom: 30px;">\r\n                    <tr style="font-weight: bold;background-color: #F3F3F3;">\r\n                        <td class="style-myself" colspan="3"><span>第{{i+1}}天</span> <span style="margin-left: 10px;">{{viewQuoteDaysList.times}}</span> <span></span></td>\r\n                    </tr>\r\n                    <!-- 交通 -->\r\n                    <tr>\r\n                        <td style="width: 160px">交通</td>\r\n                        <td style="text-align: left;"> <span>{{busCompanyArrange.bus.brand}}</span></td>\r\n                        <td style="width: 180px;"></td>\r\n                    </tr>\r\n                    <!-- 含餐 -->\r\n                    <tr>\r\n                        <td>含餐</td>\r\n                        <td><span>{{viewQuoteDaysList.lineProductDay.repastDetail}}</span>\r\n                        </td>\r\n                        <td></td>\r\n                    </tr>\r\n                    <!-- 购物 -->\r\n                    {{each viewQuoteDaysList.shopArrange as shopList}}\r\n                    <tr>\r\n                        <td>购物</td>\r\n                        <td>{{shopList.shop.name}}</td>\r\n                        <td> </td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <!-- 餐饮 -->\r\n                    {{if viewQuoteDaysList.restaurantArrange != null}} {{each viewQuoteDaysList.restaurantArrange as restaurantList index}} {{if index == 0}}\r\n                    <tr>\r\n                        <td rowspan="{{viewQuoteDaysList.restaurantArrange.length}}">餐饮</td>\r\n                        <td>{{restaurantList.restaurantStandard.type}} <span style="margin-left: 15px;">{{restaurantList.restaurant.name}}</span></td>\r\n                        <td>￥{{restaurantList.restaurantStandard.price}}</td>\r\n                    </tr>\r\n                    {{/if}} {{/each}} {{each viewQuoteDaysList.restaurantArrange as restaurantList index}} {{if index > 0}}\r\n                    <tr>\r\n                        <td>{{restaurantList.restaurantStandard.type}} <span style="margin-left: 15px;">{{restaurantList.restaurant.name}}</span></td>\r\n                        <td>￥{{restaurantList.restaurantStandard.price}}</td>\r\n                    </tr>\r\n                    {{/if}} {{/each}} {{/if}}\r\n                    <!-- 住宿 -->\r\n                    {{if viewQuoteDaysList.hotelArrange != null}} {{each viewQuoteDaysList.hotelArrange as hotelList index}} {{if index == 0}}\r\n                    <tr>\r\n                        <td rowspan="{{viewQuoteDaysList.hotelArrange.length}}">住宿</td>\r\n                        <td><span>\r\n                        {{if hotelList.hotel.level == 0}}   \r\n                                            未选择\r\n                                        {{else if hotelList.hotel.level == 1}}\r\n                                            三星以下\r\n                                        {{else if hotelList.hotel.level == 2}}\r\n                                            三星\r\n                                        {{else if hotelList.hotel.level == 3}}\r\n                                            准四星\r\n                                        {{else if hotelList.hotel.level == 4}}\r\n                                            四星\r\n                                        {{else if hotelList.hotel.level == 5}}\r\n                                            准五星\r\n                                        {{else if hotelList.hotel.level == 6}}\r\n                                            五星\r\n                                        {{else if hotelList.hotel.level == 7}}\r\n                                            五星以上\r\n                                        {{/if}}</span><span style="margin-left: 15px;">{{hotelList.hotel.name}}</span> <span style="margin-left: 15px;">{{hotelList.hotelRoom.type}}</span>\r\n                                        <span>{{if hotelList.hotelRoom.containBreakfast == 0}}含早{{else}}{{/if}}</span>\r\n                                        <span>{{if hotelList.hotelRoom.containLunch == 0}}含午{{else}}{{/if}}</span>\r\n                                        <span>{{if hotelList.hotelRoom.containDinner == 0}}含晚{{else}}{{/if}}</span>\r\n                                        <span style="margin-left: 15px;">{{hotelList.hotel.remark}}</span>\r\n                                        </td>\r\n                                        <td>￥{{hotelList.price}}</td>\r\n                         </tr>\r\n                            {{/if}} {{/each}} {{each viewQuoteDaysList.hotelArrange as hotelList index}} {{if index > 0}}\r\n                            <tr>\r\n                                <td> <span>\r\n                                {{if hotelList.hotel.level == 0}}   \r\n                                未选择\r\n                                {{else if hotelList.hotel.level == 1}}\r\n                                三星以下\r\n                                {{else if hotelList.hotel.level == 2}}\r\n                                三星\r\n                                {{else if hotelList.hotel.level == 3}}\r\n                                准四星\r\n                                {{else if hotelList.hotel.level == 4}}\r\n                                四星\r\n                                {{else if hotelList.hotel.level == 5}}\r\n                                准五星\r\n                                {{else if hotelList.hotel.level == 6}}\r\n                                五星\r\n                                {{else if hotelList.hotel.level == 7}}\r\n                                五星以上\r\n                                {{/if}}</span> <span style="margin-left: 15px;"> {{hotelList.hotel.name}}</span> <span style="margin-left: 15px;">{{hotelList.hotelRoom.type}}</span>\r\n                                 <span>{{if hotelList.hotelRoom.containBreakfast == 0}}含早{{else}}{{/if}}</span>\r\n                                        <span>{{if hotelList.hotelRoom.containLunch == 0}}含午{{else}}{{/if}}</span>\r\n                                        <span>{{if hotelList.hotelRoom.containDinner == 0}}含晚{{else}}{{/if}}</span>\r\n                                        <span style="margin-left: 15px;">{{hotelList.hotel.remark}}</span>\r\n                                        </td>\r\n                            <td>￥{{hotelList.price}}</td>\r\n                        </tr>\r\n                        {{/if}} {{/each}} {{/if}}\r\n                    <!-- 景点 -->\r\n                    {{if viewQuoteDaysList.scenicArrange != null}} {{each viewQuoteDaysList.scenicArrange as scenicList index}} {{if index == 0}}\r\n                    <tr>\r\n                        <td rowspan="{{viewQuoteDaysList.scenicArrange.length}}">景点</td>\r\n                        <td>{{scenicList.scenic.name}} <span style="margin-left: 15px;">{{scenicList.tourDuration}}</span> <span style="margin-left: 15px;">{{scenicList.remark}}</span></td>\r\n                        <td>￥{{scenicList.price}}</td>\r\n                    </tr>\r\n                    {{/if}} {{/each}} {{each viewQuoteDaysList.scenicArrange as scenicList index}} {{if index > 0}}\r\n                    <tr>\r\n                        <td>{{scenicList.scenic.name}}</td>\r\n                        <td>￥{{scenicList.price}}</td>\r\n                    </tr>\r\n                    {{/if}} {{/each}} {{/if}}\r\n                    <!-- 自费 -->\r\n                    {{each viewQuoteDaysList.selfPayArrange as selfPayList}}\r\n                    <tr>\r\n                        <td>自费</td>\r\n                        <td>{{selfPayList.selfPayItem.name}}</td>\r\n                        <td>￥{{selfPayList.price}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                </table>\r\n                <!--  <p><span class="share-attention"></span> <b style="position: absolute;margin-left: 5px;">特色</b> </p>\r\n<p style=""><span>酒店：</span><span>全程三星</span></p>\r\n<p style="margin-top: -4px"><span>景点：</span><span>全程15个景点，(映秀 羌族 黄龙 九寨 宽窄巷子)</span></p>\r\n<p style="margin-top: -4px"><span>购物：</span><span>全程15个景点，(映秀 羌族 黄龙 九寨 宽窄巷子)</span></p>\r\n<p style="margin-top: -4px;margin-bottom: 50px;"><span>特色：</span><span>全程15个景点，(映秀 羌族 黄龙 九寨 宽窄巷子)</span></p> -->\r\n                {{/each}}\r\n            </div>\r\n            <div class="share-quote-schedule">\r\n                <p id="D2" class="share-dividing">日程安排</p>\r\n                {{each daysList as viewQuoteDaysList i}}\r\n                <div class="share-quote-origin">\r\n                    <span class="share-startTime-divid">{{viewQuoteDaysList.times}}</span>\r\n                    <p style="margin-top: 6px;color: #222;font-size: 15px">出发地--成都</p>\r\n                    <div class="share-detailedContent">\r\n                        <div style="width: 960px;margin: auto;overflow: scroll;">\r\n                            {{#viewQuoteDaysList.lineProductDay.detail}}\r\n                        </div>\r\n                        <!-- <p style="margin-top: 20px">自行搭乘航班飞往成都，工作人员在成都双流机场接机，送至酒店，办理手续后入住酒店休息（如果时间较充裕，可自行前往成都的春熙路、天府广场等繁华商业区游玩，晚上可就近享受四川美食）。 \r\n</p> -->\r\n                    </div>\r\n                </div>\r\n                {{/each}}\r\n            </div>\r\n            <div class="share-needing-attention">\r\n                <p id="D3" class="share-dividing">注意事项</p>\r\n                <div class="form-group">\r\n                    <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">费用包含</b></p>\r\n                    <p>{{quoteDetailJson.lineProduct.includeFee}}</p>\r\n                </div>\r\n                <div class="form-group" style="margin-top: 20px;">\r\n                    <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">费用不含</b></p>\r\n                    <p>{{quoteDetailJson.lineProduct.excludeFee}}</p>\r\n                </div>\r\n                <div class="form-group" style="margin-top: 20px;">\r\n                    <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">行程特色</b> </p>\r\n                    <p>{{quoteDetailJson.lineProduct.lineFeature}}</p>\r\n                </div>\r\n                <div class="form-group" style="margin-top: 20px;">\r\n                    <p><span class="share-attention"></span> <b style="position: absolute;margin-left: 5px;">行程须知</b> </p>\r\n                    <p>{{quoteDetailJson.lineProduct.lineNotice}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<p id="back-top"><a href=""><span></span></a></p>\r\n<div class="share-anchor" style="width: 30px;height: 170px;background-color: #eaeaea;position: fixed;top: 340px;left:414px;border-radius: 20px">\r\n    <ul class="share-anchor-ul">\r\n        <li><a href="#D1">D1</a></li>\r\n        <li><a href="#D2">D2</a></li>\r\n        <li><a href="#D3">D3</a></li>\r\n    </ul>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});