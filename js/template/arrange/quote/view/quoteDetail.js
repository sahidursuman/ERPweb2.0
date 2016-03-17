/*TMODJS:{"debug":true,"version":412,"md5":"e349ac449e5e8db3336bbc6295ad80c4"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/quoteDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, quote = $data.quote, guideQuote = $data.guideQuote, $each = $utils.$each, insuranceQuote = $data.insuranceQuote, busCompanyQuote = ($data.insuranceList, 
            $data.$index, $data.busCompanyQuote), daysList = ($data.busCompany, $data.daysList), $string = ($data.i, 
            $data.ticketList, $data.index, $data.shopList, $data.restaurantList, $data.hotelList, 
            $data.scenicList, $data.selfPayList, $data.otherList, $utils.$string), $out = "";
            return $out += '<div style="background-color:#fff; font-family: \'微软雅黑\'" id="top"> <div class="shareQuoteS" style="" id="D1"> <div class="quote-title-style"> <h5 class="share-title-h5">', 
            $line = 4, $out += $escape(quote.lineProduct.name), $out += '</h5> <p class="share-startTime">出游日期：', 
            $line = 5, $out += $escape($helpers.dateFormat(quote.startTime, "yyyy-MM-dd")), 
            $out += '</p> </div> <div class="share-quoteBigMain"> <div class="share-quote-offer"> <p style="font-size: 16px;color: #ff6511;"><span>', 
            $line = 9, $out += $escape(quote.partnerAgency.travelAgencyName), $out += '</span> <span style="margin-left: 12px;">', 
            $line = 9, $out += $escape(quote.partnerAgencyContact.contactRealname), $out += '</span> <span style="margin-left: 12px;">', 
            $line = 9, $out += $escape(quote.partnerAgencyContact.contactMobileNumber), $out += '：</span></p> <p class="share-thank-p">感谢惠顾，线路行程和报价为您展示如下，如有不明白之处请来电，谢谢！</p> <p class="share-agency-name"><span>', 
            $line = 11, $out += $escape(quote.partnerAgency.travelAgency.name), $out += '</span> <span style="margin-left: 8px;">', 
            $line = 12, $out += $escape(quote.user.realName), $out += '</span> <span style="margin-left: 8px;">', 
            $line = 13, $out += $escape(quote.user.mobileNumber), $out += '</span></p> <p class="share-agency-times">', 
            $line = 14, $out += $escape($helpers.dateFormat(quote.startTime, "yyyy-MM-dd")), 
            $out += '</p> <div class="share-quote-offerdetails"> <p class="share-dividing">线路报价</p> <p>', 
            $line = 17, $out += $escape(quote.lineProduct.name), $out += '</p> <p style="margin-top: -5px;"><span>天数：<span class="F-float F-count">', 
            $line = 18, $out += $escape(quote.lineProduct.days), $out += '</span></span> <span style="margin-left: 20px; ">类别：', 
            $line = 19, $out += $escape(quote.lineProduct.type), $out += '</span> <span style="margin-left: 20px; ">出游日期：', 
            $line = 20, $out += $escape($helpers.dateFormat(quote.startTime, "yyyy-MM-dd")), 
            $out += '</span> <span style="margin-left: 20px; ">出游人数：<span class="F-float F-count">', 
            $line = 21, $out += $escape(quote.adultCount), $out += '</span>大<span class="F-float F-count">', 
            $line = 21, $out += $escape(quote.childCount), $out += '</span>小</span> </p> <table class="whereQ whereTwo quoteTable" style="width: 100%;margin-bottom: 10px;"> <tr style="font-weight: bold;background-color: #F3F3F3;"> <td class="style-myself"></td> <td class="style-myself">大人</td> <td class="style-myself">小孩</td> <td class="style-myself">总价</td> </tr> <tr> <td>单价</td> <td style="font-size: 14px;color: #ff6511;font-weight: bold;">￥<span class="F-float F-money">', 
            $line = 32, $out += $escape(quote.adultQuotePrice), $out += '</span></td> <td style="font-size: 14px;color: #ff6511;font-weight: bold;">￥<span class="F-float F-money">', 
            $line = 33, $out += $escape(quote.childQuotePrice), $out += '</span></td> <td rowspan="3" style="font-size: 14px;font-weight: bold;">￥<span class="F-float F-money">', 
            $line = 34, $out += $escape(quote.sumQuoteFee), $out += '</span></td> </tr> <tr> <td>数量</td> <td><span class="F-float F-count">', 
            $line = 38, $out += $escape(quote.adultCount), $out += '</span></td> <td><span class="F-float F-count">', 
            $line = 39, $out += $escape(quote.childCount), $out += '</span></td> </tr> </table> <p><span style="color: #FE9C52">*说明：</span>&nbsp;&nbsp;&nbsp;单房差报价：', 
            $line = 42, $out += $escape(quote.singleRoomQuotePrice), $out += "，单房差数量：", $line = 42, 
            $out += $escape(quote.singleRoomCount), $out += '。</p>  <p style="margin-left: 55px;">导游： <span>导服费￥', 
            $line = 46, guideQuote && ($line = 46, $out += $escape(guideQuote.quotePrice), $line = 46), 
            $out += '。</span> </p>  <div style="margin-left: 55px;">保险： <p style="width: 70%;margin-left: 42px;margin-top: -18px;"> ', 
            $line = 52, $each(insuranceQuote, function(insuranceList) {
                $out += " <span>", $line = 53, $out += $escape(insuranceList.insurance.name), $out += "，</span><span>", 
                $line = 53, $out += $escape(insuranceList.insuranceItem.name), $out += "，</span><span>单价￥", 
                $line = 53, $out += $escape(insuranceList.quotePrice), $out += "。</span><br> ", 
                $line = 54;
            }), $out += ' </p> </div>  <div style="margin-left: 55px; ', $line = 59, 0 == busCompanyQuote.length && ($out += "margin-top: 25px;margin-bottom: 20px;", 
            $line = 59), $out += '">交通： <p style="width: 70%;margin-left: 42px;margin-top: -18px"> ', 
            $line = 61, $each(busCompanyQuote, function(busCompany) {
                $out += " ", $line = 62, busCompanyQuote && ($out += " <span>", $line = 63, $out += $escape(busCompany.brand), 
                $out += '</span> <span><span class="F-float F-count">', $line = 64, $out += $escape(busCompany.needSeatCount), 
                $out += "</span>座，</span> <span>座位价￥", $line = 65, $out += $escape(busCompany.quotePrice), 
                $out += "。</span> <span>", $line = 66, $out += $escape(busCompany.remark), $out += "</span> <br> ", 
                $line = 67), $out += " ", $line = 68;
            }), $out += ' </p> </div> <p style="margin-left: 8px;"><span style="color: #FE9C52">备注：</span><span>', 
            $line = 71, $out += $escape(quote.remark), $out += '</span></p> </div> </div> <div class="share-quote-arrange"> <p class="share-dividing">线路安排</p> ', 
            $line = 76, $each(daysList, function(daysList, i) {
                $out += ' <table class="whereQ quoteTable quoteTable-arrange"> <tr style="font-weight: bold;background-color: #F3F3F3;"> <td class="style-myself" colspan="3"><span>第', 
                $line = 79, $out += $escape(i + 1), $out += '天</span> <span style="margin-left: 10px;">', 
                $line = 79, $out += $escape(daysList.times), $out += "</span> <span></span></td> </tr>  ", 
                $line = 82, null != daysList.ticketQuote && ($out += " ", $line = 82, $each(daysList.ticketQuote, function(ticketList, index) {
                    $out += " ", $line = 82, 0 == index && ($out += ' <tr> <td style="width: 160px"rowspan="', 
                    $line = 84, $out += $escape(daysList.ticketQuote.length), $out += '">交通</td> <td style="text-align: left;"> <span> ', 
                    $line = 86, 1 == ticketList.type ? ($out += "机票 ", $line = 86) : 2 == ticketList.type ? ($out += " 汽车票 ", 
                    $line = 86) : 3 == ticketList.type ? ($out += " 火车票 ", $line = 86) : 4 == ticketList.type && ($out += " 轮船票 ", 
                    $line = 86), $out += '</span></td> <td style="width: 180px;">￥<span class="F-float F-money">', 
                    $line = 87, $out += $escape(ticketList.quotePrice), $out += "</span></td> </tr> ", 
                    $line = 89), $out += " ", $line = 89;
                }), $out += " ", $line = 89, $each(daysList.ticketQuote, function(ticketList, index) {
                    $out += " ", $line = 89, index > 0 && ($out += ' <tr> <td style="text-align: left;"> <span> ', 
                    $line = 92, 1 == ticketList.type ? ($out += "机票 ", $line = 92) : 2 == ticketList.type ? ($out += " 汽车票 ", 
                    $line = 92) : 3 == ticketList.type ? ($out += " 火车票 ", $line = 92) : 4 == ticketList.type && ($out += " 轮船票 ", 
                    $line = 92), $out += '</span></td> <td style="width: 180px;">￥<span class="F-float F-money">', 
                    $line = 93, $out += $escape(ticketList.quotePrice), $out += "</span></td> </tr> ", 
                    $line = 95), $out += " ", $line = 95;
                }), $out += " ", $line = 95), $out += "  ", $line = 98, $each(daysList.shopArrange, function(shopList) {
                    $out += " <tr> <td>购物</td> <td>", $line = 101, $out += $escape(shopList.shop.name), 
                    $out += "</td> <td> </td> </tr> ", $line = 105;
                }), $out += "  ", $line = 107, null != daysList.restaurantQuote && ($out += " ", 
                $line = 107, $each(daysList.restaurantQuote, function(restaurantList, index) {
                    $out += " ", $line = 107, 0 == index && ($out += ' <tr> <td rowspan="', $line = 109, 
                    $out += $escape(daysList.restaurantQuote.length), $out += '">餐饮</td> <td>', $line = 110, 
                    $out += $escape(restaurantList.type), $out += ' <span style="margin-left: 15px;">', 
                    $line = 110, $out += $escape(restaurantList.restaurant.name), $out += '</span></td> <td>￥<span class="F-float F-money">', 
                    $line = 111, $out += $escape(restaurantList.quotePrice), $out += "</span></td> </tr> ", 
                    $line = 113), $out += " ", $line = 113;
                }), $out += " ", $line = 113, $each(daysList.restaurantQuote, function(restaurantList, index) {
                    $out += " ", $line = 113, index > 0 && ($out += " <tr> <td>", $line = 115, $out += $escape(restaurantList.type), 
                    $out += ' <span style="margin-left: 15px;">', $line = 115, $out += $escape(restaurantList.restaurant.name), 
                    $out += '</span></td> <td>￥<span class="F-float F-money">', $line = 116, $out += $escape(restaurantList.quotePrice), 
                    $out += "</span></td> </tr> ", $line = 118), $out += " ", $line = 118;
                }), $out += " ", $line = 118), $out += "  ", $line = 122, null != daysList.hotelQuote && ($out += " ", 
                $line = 122, $each(daysList.hotelQuote, function(hotelList, index) {
                    $out += " ", $line = 122, 0 == index && ($out += ' <tr> <td rowspan="', $line = 124, 
                    $out += $escape(daysList.hotelQuote.length), $out += '">住宿</td> <td><span> ', $line = 126, 
                    0 == hotelList.hotel.level ? ($out += " 未选择 ", $line = 128) : 1 == hotelList.hotel.level ? ($out += " 三星以下 ", 
                    $line = 130) : 2 == hotelList.hotel.level ? ($out += " 三星 ", $line = 132) : 3 == hotelList.hotel.level ? ($out += " 准四星 ", 
                    $line = 134) : 4 == hotelList.hotel.level ? ($out += " 四星 ", $line = 136) : 5 == hotelList.hotel.level ? ($out += " 准五星 ", 
                    $line = 138) : 6 == hotelList.hotel.level ? ($out += " 五星 ", $line = 140) : 7 == hotelList.hotel.level && ($out += " 五星以上 ", 
                    $line = 142), $out += '</span><span style="margin-left: 15px;">', $line = 142, $out += $escape(hotelList.hotel.name), 
                    $out += '</span> <span style="margin-left: 15px;">', $line = 142, $out += $escape(hotelList.hotelRoom.type), 
                    $out += "</span> <span>", $line = 143, 1 == hotelList.hotelRoom.containBreakfast ? ($out += "含早", 
                    $line = 143) : ($out += "不含早", $line = 143), $out += "</span> <span>", $line = 144, 
                    1 == hotelList.hotelRoom.containLunch ? ($out += "含午", $line = 144) : ($out += "不含午", 
                    $line = 144), $out += "</span> <span>", $line = 145, 1 == hotelList.hotelRoom.containDinner ? ($out += "含晚", 
                    $line = 145) : ($out += "不含晚", $line = 145), $out += '</span> </td> <td>￥<span class="F-float F-money">', 
                    $line = 147, $out += $escape(hotelList.quotePrice), $out += "</span></td> </tr> ", 
                    $line = 149), $out += " ", $line = 149;
                }), $out += " ", $line = 149, $each(daysList.hotelQuote, function(hotelList, index) {
                    $out += " ", $line = 149, index > 0 && ($out += " <tr> <td> <span> ", $line = 152, 
                    0 == hotelList.hotel.level ? ($out += " 未选择 ", $line = 154) : 1 == hotelList.hotel.level ? ($out += " 三星以下 ", 
                    $line = 156) : 2 == hotelList.hotel.level ? ($out += " 三星 ", $line = 158) : 3 == hotelList.hotel.level ? ($out += " 准四星 ", 
                    $line = 160) : 4 == hotelList.hotel.level ? ($out += " 四星 ", $line = 162) : 5 == hotelList.hotel.level ? ($out += " 准五星 ", 
                    $line = 164) : 6 == hotelList.hotel.level ? ($out += " 五星 ", $line = 166) : 7 == hotelList.hotel.level && ($out += " 五星以上 ", 
                    $line = 168), $out += '</span> <span style="margin-left: 15px;"> ', $line = 169, 
                    $out += $escape(hotelList.hotel.name), $out += '</span> <span style="margin-left: 15px;">', 
                    $line = 169, $out += $escape(hotelList.hotelRoom.type), $out += "</span> <span>", 
                    $line = 170, 0 == hotelList.hotelRoom.containBreakfast ? ($out += "含早", $line = 170) : ($out += "不含早", 
                    $line = 170), $out += "</span> <span>", $line = 171, 0 == hotelList.hotelRoom.containLunch ? ($out += "含午", 
                    $line = 171) : ($out += "不含午", $line = 171), $out += "</span> <span>", $line = 172, 
                    0 == hotelList.hotelRoom.containDinner ? ($out += "含晚", $line = 172) : ($out += "不含晚", 
                    $line = 172), $out += '</span> </td> <td>￥<span class="F-float F-money">', $line = 174, 
                    $out += $escape(hotelList.quotePrice), $out += "</span></td> </tr> ", $line = 176), 
                    $out += " ", $line = 176;
                }), $out += " ", $line = 176), $out += "  ", $line = 179, null != daysList.scenicQuote && ($out += " ", 
                $line = 179, $each(daysList.scenicQuote, function(scenicList, index) {
                    $out += " ", $line = 179, 0 == index && ($out += ' <tr> <td rowspan="', $line = 181, 
                    $out += $escape(daysList.scenicQuote.length), $out += '">景点</td> <td>', $line = 182, 
                    $out += $escape(scenicList.scenic.name), $out += ' <span style="margin-left: 15px;">', 
                    $line = 182, scenicList.tourDuration && ($line = 182, $out += $escape(scenicList.tourDuration), 
                    $line = 182), $out += '</span> <td>￥<span class="F-float F-money">', $line = 183, 
                    $out += $escape(scenicList.quotePrice), $out += "</span></td> </tr> ", $line = 185), 
                    $out += " ", $line = 185;
                }), $out += " ", $line = 185, $each(daysList.scenicQuote, function(scenicList, index) {
                    $out += " ", $line = 185, index > 0 && ($out += " <tr> <td>", $line = 187, $out += $escape(scenicList.scenic.name), 
                    $out += '</td> <td>￥<span class="F-float F-money">', $line = 188, $out += $escape(scenicList.quotePrice), 
                    $out += "</span></td> </tr> ", $line = 190), $out += " ", $line = 190;
                }), $out += " ", $line = 190), $out += "  ", $line = 193, $each(daysList.selfPayQuote, function(selfPayList) {
                    $out += " <tr> <td>自费</td> <td>", $line = 196, $out += $escape(selfPayList.selfPayItem.name), 
                    $out += '</td> <td>￥<span class="F-float F-money">', $line = 197, $out += $escape(selfPayList.quotePrice), 
                    $out += "</span></td> </tr> ", $line = 199;
                }), $out += "  ", $line = 201, $each(daysList.otherQuote, function(otherList) {
                    $out += " <tr> <td>其他</td> <td>", $line = 204, $out += $escape(otherList.name), 
                    $out += '</td> <td>￥<span class="F-float F-money">', $line = 205, $out += $escape(otherList.quotePrice), 
                    $out += "</span></td> </tr> ", $line = 207;
                }), $out += " </table> ", $line = 209;
            }), $out += ' </div> <div class="share-quote-schedule"> <p id="D2" class="share-dividing">日程安排</p> ', 
            $line = 213, $each(daysList, function(daysList) {
                $out += ' <div class="share-quote-origin"> <span class="share-startTime-divid">', 
                $line = 215, $out += $escape(daysList.times), $out += '</span> <p style="margin-top: 6px;color: #222;font-size: 15px">出发地--成都</p> <div class="share-detailedContent"> <div class="share-detailedContent-div"> ', 
                $line = 219, $out += $string(daysList.lineProductDay.detail), $out += " </div> </div> </div> ", 
                $line = 223;
            }), $out += ' </div> <div class="share-needing-attention"> <p id="D3" class="share-dividing">注意事项</p> <div class="form-group"> <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">费用包含</b></p> <p>', 
            $line = 229, $out += $escape(quote.includeFee), $out += '</p> </div> <div class="form-group" style="margin-top: 20px;"> <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">费用不含</b></p> <p>', 
            $line = 233, $out += $escape(quote.excludeFee), $out += '</p> </div> <div class="form-group" style="margin-top: 20px;"> <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">行程特色</b> </p> <p>', 
            $line = 237, $out += $escape(quote.lineFeature), $out += '</p> </div> <div class="form-group" style="margin-top: 20px;"> <p><span class="share-attention"></span> <b style="position: absolute;margin-left: 5px;">行程须知</b> </p> <p>', 
            $line = 241, $out += $escape(quote.lineNotice), $out += '</p> </div> </div> <div class="share-anchor"> <ul class="share-anchor-ul"> <li><a href="#D1">D1</a></li> <li><a href="#D2">D2</a></li> <li><a href="#D3">D3</a></li> </ul> </div> <p id="back-top"><a href=""><span></span></a></p> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div style="background-color:#fff; font-family: \'微软雅黑\'" id="top">\r\n    <div class="shareQuoteS" style="" id="D1">\r\n        <div class="quote-title-style">\r\n            <h5 class="share-title-h5">{{quote.lineProduct.name}}</h5>\r\n            <p class="share-startTime">出游日期：{{quote.startTime | dateFormat:\'yyyy-MM-dd\'}}</p>\r\n        </div>\r\n        <div class="share-quoteBigMain">\r\n            <div class="share-quote-offer">\r\n                <p style="font-size: 16px;color: #ff6511;"><span>{{quote.partnerAgency.travelAgencyName}}</span> <span style="margin-left: 12px;">{{quote.partnerAgencyContact.contactRealname}}</span> <span style="margin-left: 12px;">{{quote.partnerAgencyContact.contactMobileNumber}}：</span></p>\r\n                <p class="share-thank-p">感谢惠顾，线路行程和报价为您展示如下，如有不明白之处请来电，谢谢！</p>\r\n                <p class="share-agency-name"><span>{{quote.partnerAgency.travelAgency.name}}</span>\r\n                    <span style="margin-left: 8px;">{{quote.user.realName}}</span>\r\n                    <span style="margin-left: 8px;">{{quote.user.mobileNumber}}</span></p>\r\n                <p class="share-agency-times">{{quote.startTime | dateFormat:\'yyyy-MM-dd\'}}</p>\r\n                <div class="share-quote-offerdetails">\r\n                    <p class="share-dividing">线路报价</p>\r\n                    <p>{{quote.lineProduct.name}}</p>\r\n                    <p style="margin-top: -5px;"><span>天数：<span class="F-float F-count">{{quote.lineProduct.days}}</span></span>\r\n                        <span style="margin-left: 20px; ">类别：{{quote.lineProduct.type}}</span>\r\n                        <span style="margin-left: 20px; ">出游日期：{{quote.startTime | dateFormat:\'yyyy-MM-dd\'}}</span>\r\n                        <span style="margin-left: 20px; ">出游人数：<span class="F-float F-count">{{quote.adultCount}}</span>大<span class="F-float F-count">{{quote.childCount}}</span>小</span>\r\n                    </p>\r\n                    <table class="whereQ whereTwo quoteTable" style="width: 100%;margin-bottom: 10px;">\r\n                        <tr style="font-weight: bold;background-color: #F3F3F3;">\r\n                            <td class="style-myself"></td>\r\n                            <td class="style-myself">大人</td>\r\n                            <td class="style-myself">小孩</td>\r\n                            <td class="style-myself">总价</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>单价</td>\r\n                            <td style="font-size: 14px;color: #ff6511;font-weight: bold;">￥<span class="F-float F-money">{{quote.adultQuotePrice}}</span></td>\r\n                            <td style="font-size: 14px;color: #ff6511;font-weight: bold;">￥<span class="F-float F-money">{{quote.childQuotePrice}}</span></td>\r\n                            <td rowspan="3" style="font-size: 14px;font-weight: bold;">￥<span class="F-float F-money">{{quote.sumQuoteFee}}</span></td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>数量</td>\r\n                            <td><span class="F-float F-count">{{quote.adultCount}}</span></td>\r\n                            <td><span class="F-float F-count">{{quote.childCount}}</span></td>\r\n                        </tr>\r\n                    </table>\r\n                    <p><span style="color: #FE9C52">*说明：</span>&nbsp;&nbsp;&nbsp;单房差报价：{{quote.singleRoomQuotePrice}}，单房差数量：{{quote.singleRoomCount}}。</p>\r\n                     <!-- 导游 -->\r\n\r\n                    <p style="margin-left: 55px;">导游：\r\n                    <span>导服费￥{{if !!guideQuote}}{{guideQuote.quotePrice}}{{/if}}。</span> \r\n                    </p>\r\n\r\n                    <!-- 保险 -->\r\n                    <div style="margin-left: 55px;">保险：\r\n                     <p style="width: 70%;margin-left: 42px;margin-top: -18px;">\r\n                    {{each insuranceQuote as insuranceList}}\r\n                    <span>{{insuranceList.insurance.name}}，</span><span>{{insuranceList.insuranceItem.name}}，</span><span>单价￥{{insuranceList.quotePrice}}。</span><br> \r\n                    {{/each}}\r\n                    </p>\r\n                    </div>\r\n                    \r\n                    <!-- 交通 -->\r\n                    <div style="margin-left: 55px; {{if busCompanyQuote.length == 0}}margin-top: 25px;margin-bottom: 20px;{{/if}}">交通：\r\n                    <p style="width: 70%;margin-left: 42px;margin-top: -18px">\r\n                     {{each busCompanyQuote as busCompany}}\r\n                    {{if !!busCompanyQuote}}\r\n                        <span>{{busCompany.brand}}</span>\r\n                        <span><span class="F-float F-count">{{busCompany.needSeatCount}}</span>座，</span>\r\n                        <span>座位价￥{{busCompany.quotePrice}}。</span>\r\n                        <span>{{busCompany.remark}}</span> <br>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    </p>\r\n                    </div>\r\n                    <p style="margin-left: 8px;"><span style="color: #FE9C52">备注：</span><span>{{quote.remark}}</span></p>\r\n                </div>\r\n            </div>\r\n            <div class="share-quote-arrange">\r\n                <p class="share-dividing">线路安排</p>\r\n                {{each daysList as daysList i}}\r\n                <table class="whereQ quoteTable quoteTable-arrange">\r\n                    <tr style="font-weight: bold;background-color: #F3F3F3;">\r\n                        <td class="style-myself" colspan="3"><span>第{{i+1}}天</span> <span style="margin-left: 10px;">{{daysList.times}}</span> <span></span></td>\r\n                    </tr>\r\n                    <!-- 交通 -->\r\n                    {{if daysList.ticketQuote != null}} {{each daysList.ticketQuote as ticketList index}} {{if index == 0}}\r\n                    <tr>\r\n                        <td style="width: 160px"rowspan="{{daysList.ticketQuote.length}}">交通</td>\r\n                            <td style="text-align: left;"> <span>\r\n                            {{if ticketList.type == 1 }}机票 {{ else if ticketList.type == 2}} 汽车票 {{ else if ticketList.type == 3 }} 火车票 {{ else if ticketList.type == 4}} 轮船票 {{ /if }}</span></td>\r\n                            <td style="width: 180px;">￥<span class="F-float F-money">{{ticketList.quotePrice}}</span></td>\r\n                    </tr>\r\n                    {{/if}} {{/each}} {{each daysList.ticketQuote as ticketList index}} {{if index > 0}}\r\n                    <tr>\r\n                            <td style="text-align: left;"> <span>\r\n                            {{if ticketList.type == 1 }}机票 {{ else if ticketList.type == 2}} 汽车票 {{ else if ticketList.type == 3 }} 火车票 {{ else if ticketList.type == 4}} 轮船票 {{ /if }}</span></td>\r\n                            <td style="width: 180px;">￥<span class="F-float F-money">{{ticketList.quotePrice}}</span></td>\r\n                    </tr> \r\n                    {{/if}} {{/each}} {{/if}}\r\n\r\n                    <!-- 购物 -->\r\n                    {{each daysList.shopArrange as shopList}}\r\n                    <tr>\r\n                        <td>购物</td>\r\n                        <td>{{shopList.shop.name}}</td>\r\n                        <td> </td>\r\n                    </tr>\r\n\r\n                    {{/each}}\r\n                    <!-- 餐饮 -->\r\n                    {{if daysList.restaurantQuote != null}} {{each daysList.restaurantQuote as restaurantList index}} {{if index == 0}}\r\n                    <tr>\r\n                        <td rowspan="{{daysList.restaurantQuote.length}}">餐饮</td>\r\n                        <td>{{restaurantList.type}} <span style="margin-left: 15px;">{{restaurantList.restaurant.name}}</span></td>\r\n                        <td>￥<span class="F-float F-money">{{restaurantList.quotePrice}}</span></td>\r\n                    </tr>\r\n                    {{/if}} {{/each}} {{each daysList.restaurantQuote as restaurantList index}} {{if index > 0}}\r\n                    <tr>\r\n                        <td>{{restaurantList.type}} <span style="margin-left: 15px;">{{restaurantList.restaurant.name}}</span></td>\r\n                        <td>￥<span class="F-float F-money">{{restaurantList.quotePrice}}</span></td>\r\n                    </tr>\r\n                    {{/if}} {{/each}} {{/if}}\r\n\r\n\r\n                    <!-- 住宿 -->\r\n                    {{if daysList.hotelQuote != null}} {{each daysList.hotelQuote as hotelList index}} {{if index == 0}}\r\n                    <tr>\r\n                        <td rowspan="{{daysList.hotelQuote.length}}">住宿</td>\r\n                        <td><span>\r\n                        {{if hotelList.hotel.level == 0}}   \r\n                                未选择\r\n                            {{else if hotelList.hotel.level == 1}}\r\n                                三星以下\r\n                            {{else if hotelList.hotel.level == 2}}\r\n                                三星\r\n                            {{else if hotelList.hotel.level == 3}}\r\n                                准四星\r\n                            {{else if hotelList.hotel.level == 4}}\r\n                                四星\r\n                            {{else if hotelList.hotel.level == 5}}\r\n                                准五星\r\n                            {{else if hotelList.hotel.level == 6}}\r\n                                五星\r\n                            {{else if hotelList.hotel.level == 7}}\r\n                                五星以上\r\n                            {{/if}}</span><span style="margin-left: 15px;">{{hotelList.hotel.name}}</span> <span style="margin-left: 15px;">{{hotelList.hotelRoom.type}}</span>\r\n                            <span>{{if hotelList.hotelRoom.containBreakfast == 1}}含早{{else}}不含早{{/if}}</span>\r\n                            <span>{{if hotelList.hotelRoom.containLunch == 1}}含午{{else}}不含午{{/if}}</span>\r\n                            <span>{{if hotelList.hotelRoom.containDinner == 1}}含晚{{else}}不含晚{{/if}}</span>\r\n                            </td>\r\n                            <td>￥<span class="F-float F-money">{{hotelList.quotePrice}}</span></td>\r\n                        </tr>\r\n                        {{/if}} {{/each}} {{each daysList.hotelQuote as hotelList index}} {{if index > 0}}\r\n                        <tr>\r\n                            <td> <span>\r\n                            {{if hotelList.hotel.level == 0}}   \r\n                            未选择\r\n                            {{else if hotelList.hotel.level == 1}}\r\n                            三星以下\r\n                            {{else if hotelList.hotel.level == 2}}\r\n                            三星\r\n                            {{else if hotelList.hotel.level == 3}}\r\n                            准四星\r\n                            {{else if hotelList.hotel.level == 4}}\r\n                            四星\r\n                            {{else if hotelList.hotel.level == 5}}\r\n                            准五星\r\n                            {{else if hotelList.hotel.level == 6}}\r\n                            五星\r\n                            {{else if hotelList.hotel.level == 7}}\r\n                            五星以上\r\n                            {{/if}}</span>\r\n                            <span style="margin-left: 15px;"> {{hotelList.hotel.name}}</span> <span style="margin-left: 15px;">{{hotelList.hotelRoom.type}}</span>\r\n                            <span>{{if hotelList.hotelRoom.containBreakfast == 0}}含早{{else}}不含早{{/if}}</span>\r\n                            <span>{{if hotelList.hotelRoom.containLunch == 0}}含午{{else}}不含午{{/if}}</span>\r\n                            <span>{{if hotelList.hotelRoom.containDinner == 0}}含晚{{else}}不含晚{{/if}}</span>\r\n                            </td>\r\n                            <td>￥<span class="F-float F-money">{{hotelList.quotePrice}}</span></td>\r\n                        </tr>\r\n                        {{/if}} {{/each}} {{/if}}\r\n\r\n                    <!-- 景点 -->\r\n                    {{if daysList.scenicQuote != null}} {{each daysList.scenicQuote as scenicList index}} {{if index == 0}}\r\n                    <tr>\r\n                        <td rowspan="{{daysList.scenicQuote.length}}">景点</td>\r\n                        <td>{{scenicList.scenic.name}} <span style="margin-left: 15px;">{{if !!scenicList.tourDuration}}{{scenicList.tourDuration}}{{/if}}</span>\r\n                        <td>￥<span class="F-float F-money">{{scenicList.quotePrice}}</span></td>\r\n                    </tr>\r\n                    {{/if}} {{/each}} {{each daysList.scenicQuote as scenicList index}} {{if index > 0}}\r\n                    <tr>\r\n                        <td>{{scenicList.scenic.name}}</td>\r\n                        <td>￥<span class="F-float F-money">{{scenicList.quotePrice}}</span></td>\r\n                    </tr>\r\n                    {{/if}} {{/each}} {{/if}}\r\n                    \r\n                    <!-- 自费 -->\r\n                    {{each daysList.selfPayQuote as selfPayList}}\r\n                    <tr>\r\n                        <td>自费</td>\r\n                        <td>{{selfPayList.selfPayItem.name}}</td>\r\n                        <td>￥<span class="F-float F-money">{{selfPayList.quotePrice}}</span></td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <!-- 其他 -->\r\n                    {{each daysList.otherQuote as otherList}}\r\n                    <tr>\r\n                        <td>其他</td>\r\n                        <td>{{otherList.name}}</td>\r\n                        <td>￥<span class="F-float F-money">{{otherList.quotePrice}}</span></td>\r\n                    </tr>\r\n                    {{/each}}\r\n                </table>\r\n                {{/each}}\r\n            </div>\r\n            <div class="share-quote-schedule">\r\n                <p id="D2" class="share-dividing">日程安排</p>\r\n                {{each daysList as daysList i}}\r\n                <div class="share-quote-origin">\r\n                    <span class="share-startTime-divid">{{daysList.times}}</span>\r\n                    <p style="margin-top: 6px;color: #222;font-size: 15px">出发地--成都</p>\r\n                    <div class="share-detailedContent">\r\n                        <div class="share-detailedContent-div">\r\n                            {{#daysList.lineProductDay.detail}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                {{/each}}\r\n            </div>\r\n            <div class="share-needing-attention">\r\n                <p id="D3" class="share-dividing">注意事项</p>\r\n                <div class="form-group">\r\n                    <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">费用包含</b></p>\r\n                    <p>{{quote.includeFee}}</p>\r\n                </div>\r\n                <div class="form-group" style="margin-top: 20px;">\r\n                    <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">费用不含</b></p>\r\n                    <p>{{quote.excludeFee}}</p>\r\n                </div>\r\n                <div class="form-group" style="margin-top: 20px;">\r\n                    <p><span class="share-attention"></span><b style="position: absolute;margin-left: 5px;">行程特色</b> </p>\r\n                    <p>{{quote.lineFeature}}</p>\r\n                </div>\r\n                <div class="form-group" style="margin-top: 20px;">\r\n                    <p><span class="share-attention"></span> <b style="position: absolute;margin-left: 5px;">行程须知</b> </p>\r\n                    <p>{{quote.lineNotice}}</p>\r\n                </div>\r\n            </div>\r\n        <div class="share-anchor">\r\n            <ul class="share-anchor-ul">\r\n                <li><a href="#D1">D1</a></li>\r\n                <li><a href="#D2">D2</a></li>\r\n                <li><a href="#D3">D3</a></li>\r\n            </ul>\r\n        </div>\r\n        <p id="back-top"><a href=""><span></span></a></p>\r\n    </div>\r\n    </div>\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});