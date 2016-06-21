/*TMODJS:{"debug":true,"version":97,"md5":"e52292b932a16096f95a4e485e437281"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/booking/view/viewBookSingle", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, checkOrder = $data.checkOrder, $each = $utils.$each, $out = ($data.rs, 
            $data.index, $data.$index, "");
            return $out += '<div class="bookViewSingle" id="T-bookViewSingle"> <h4>代订核算表</h4> <div class="form-group pull-right globalAdd" style="margin-right: 45px"> <button class="btn btn-sm btn-success T-printSingleBtn T-noprint" style="height: 24px;"> <i class="ace-icon fa fa-print"></i>打印 </button> </div> <form action=""> <div class="viewSingleMain view-InfoPrint"> <table class="table whereQ whereTwo" style="width: 100%;"> <tr class="view-TranAccountsPrint"> <td class="textaR-paR"><span>团号</span></td> <td class="textaR-paL"><span>', 
            $line = 13, $out += $escape(checkOrder.base.orderNumber), $out += '</span></td> <td class="textaR-paR"><span>人数</span></td> <td class="textaR-paL"><span>', 
            $line = 15, $out += $escape(checkOrder.base.adultCount), $out += "大</span> <span>", 
            $line = 15, $out += $escape(checkOrder.base.childCount), $out += '小</span></td> <td class="textaR-paR"><span>日期</span></td> <td class="textaR-paL" colspan="4"><span>', 
            $line = 17, $out += $escape(checkOrder.base.date), $out += '</span></td> </tr> <tr class="view-TranAccountsPrint"> <td class="textaR-paR"><span>收入</span></td> <td class="textaR-paL"><span>', 
            $line = 21, $out += $escape(checkOrder.base.settlementMoney), $out += '</span></td> <td class="textaR-paR"><span>成本</span></td> <td class="textaR-paL"><span>', 
            $line = 23, $out += $escape(checkOrder.base.paySettlementMoney), $out += '</span></td> <td class="textaR-paR"><span>毛利</span></td> <td class="textaR-paL"><span>', 
            $line = 25, $out += $escape(checkOrder.base.profit), $out += '</span></td> <td class="textaR-paR"><span>毛利率</span></td> <td class="textaR-paL"><span>', 
            $line = 27, $out += $escape(checkOrder.base.perCapitaProfit), $out += '</span></td> </tr> </table> <table class="table table-bordered"> <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【团款明细】</h5> <tbody> <tr class="view-TranAccountsPrint"> <th class="th-border">组团社</th> <th class="th-border">客人</th> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">备注</th> </tr> <tr class="view-TranAccountsPrint"> <td rowspan="', 
            $line = 44, $out += $escape(checkOrder.needGet.feeList.length), $out += '">', $line = 44, 
            $out += $escape(checkOrder.needGet.partnerAgencyName), $out += '</td> <td rowspan="', 
            $line = 45, $out += $escape(checkOrder.needGet.feeList.length), $out += '">', $line = 45, 
            $out += $escape(checkOrder.needGet.touristRealname), $out += "</td> ", $line = 46, 
            $each(checkOrder.needGet.feeList, function(rs, index) {
                $out += " ", $line = 47, checkOrder.needGet.feeList.length > 0 ? ($out += " ", $line = 48, 
                0 == index && ($out += " <td>", $line = 49, $out += $escape($helpers.getFeeItemText(rs.type)), 
                $out += "</td> <td>", $line = 50, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 51, $out += $escape(rs.price), $out += "</td> <td>", $line = 52, $out += $escape(rs.money), 
                $out += "</td> <td>", $line = 53, $out += $escape(rs.remark), $out += "</td> ", 
                $line = 54), $out += " ", $line = 55) : ($out += " <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> ", 
                $line = 62), $out += " ", $line = 63;
            }), $out += " </tr> ", $line = 65, $each(checkOrder.needGet.feeList, function(rs, index) {
                $out += " ", $line = 66, index > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <td>', 
                $line = 68, $out += $escape(rs.type), $out += "</td> <td>", $line = 69, $out += $escape(rs.count), 
                $out += "</td> <td>", $line = 70, $out += $escape(rs.price), $out += "</td> <td>", 
                $line = 71, $out += $escape(rs.money), $out += "</td> <td>", $line = 72, $out += $escape(rs.remark), 
                $out += "</td> </tr> ", $line = 74), $out += " ", $line = 75;
            }), $out += ' <tr> <td>合计</td> <td colspan="4"></td> <td>', $line = 79, $out += $escape(checkOrder.needGet.settlementMoney), 
            $out += "</td> <td></td> </tr> </tbody> </table>  ", $line = 86, checkOrder.needPay.hotel && ($out += ' <table class="table table-bordered" style="margin-bottom: 10px;"> <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【成本明细】</h5> <tbody> ', 
            $line = 90, checkOrder.needPay.hotel.arrangeList && checkOrder.needPay.hotel.arrangeList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 92, $out += $escape(checkOrder.needPay.hotel.arrangeList.length + 1), $out += '" style="vertical-align: middle;" class="th-border">酒店</th> <th class="th-border">酒店名称</th> <th class="th-border">房间类型</th> <th class="th-border">入住日期</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">天数</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 103, $each(checkOrder.needPay.hotel.arrangeList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 105, $out += $escape(rs.hotelName), 
                $out += "</td> <td>", $line = 106, $out += $escape(rs.hotelRoomType), $out += "</td> <td>", 
                $line = 107, $out += $escape(rs.enterTime), $out += "</td> <td>", $line = 108, $out += $escape(rs.costPrice), 
                $out += "</td> <td>", $line = 109, $out += $escape(rs.roomCount), $out += "</td> <td>", 
                $line = 110, $out += $escape(rs.days), $out += "</td> <td>", $line = 111, $out += $escape(rs.sumCostMoney), 
                $out += "</td> <td>", $line = 112, $out += $escape(rs.settlementMoney), $out += "</td> </tr> ", 
                $line = 114;
            }), $out += ' <tr> <td>合计</td> <td colspan="6"></td> <td>', $line = 119, $out += $escape(checkOrder.needPay.hotel.sumCostMoney), 
            $out += "</td> <td>", $line = 120, $out += $escape(checkOrder.needPay.hotel.settlementMoney), 
            $out += "</td> </tr> ", $line = 122), $out += " </tbody> </table> ", $line = 125), 
            $out += " ", $line = 127, checkOrder.needPay.bus && ($out += ' <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 130, checkOrder.needPay.bus.arrangeList && checkOrder.needPay.bus.arrangeList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 132, $out += $escape(checkOrder.needPay.bus.arrangeList.length + 1), $out += '" style="vertical-align: middle;" class="th-border">用车</th> <th class="th-border">开始日期</th> <th class="th-border">结束日期</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">所属车队</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 144, $each(checkOrder.needPay.bus.arrangeList, function(rs) {
                $out += ' <tr data-id="', $line = 145, $out += $escape(rs.id), $out += '" class="view-TranAccountsPrint"> <td>', 
                $line = 146, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 147, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 148, $out += $escape(rs.needSeatCount), $out += "</td> <td>", $line = 149, 
                $out += $escape(rs.needBusBrand), $out += "</td> <td>", $line = 150, $out += $escape(rs.busCompanyName), 
                $out += '</td> <td class="F-float F-money">', $line = 151, $out += $escape(rs.fee), 
                $out += '</td> <td class="F-float F-money">', $line = 152, $out += $escape(rs.reduceMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 153, $out += $escape(rs.sumCostMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 154, $out += $escape(rs.settlementMoney), 
                $out += "</td> </tr> ", $line = 156;
            }), $out += ' <tr> <td>合计</td> <td colspan="7"></td> <td>', $line = 161, $out += $escape(checkOrder.needPay.bus.sumCostMoney), 
            $out += "</td> <td>", $line = 162, $out += $escape(checkOrder.needPay.bus.settlementMoney), 
            $out += "</td> </tr> ", $line = 164), $out += " </tbody> </table> ", $line = 167), 
            $out += " ", $line = 169, checkOrder.needPay.scenic && ($out += ' <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 172, checkOrder.needPay.scenic.arrangeList && checkOrder.needPay.scenic.arrangeList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 174, $out += $escape(checkOrder.needPay.scenic.arrangeList.length + 1), 
            $out += '" style="vertical-align: middle;" class="th-border">景区</th> <th class="th-border">日期</th> <th class="th-border">时段</th> <th class="th-border">景区</th> <th class="th-border">收费项目</th> <th class="th-border">时长</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">订单号</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 187, $each(checkOrder.needPay.scenic.arrangeList, function(rs) {
                $out += ' <tr data-id="', $line = 188, $out += $escape(rs.id), $out += '" class="view-TranAccountsPrint"> <td>', 
                $line = 189, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 190, $out += $escape(rs.tourTime), $out += "</td> <td>", $line = 191, $out += $escape(rs.scenicName), 
                $out += "</td> <td>", $line = 192, $out += $escape(rs.scenicItemName), $out += "</td> <td>", 
                $line = 193, $out += $escape(rs.tourDuration), $out += '</td> <td class="F-float F-money">', 
                $line = 194, $out += $escape(rs.costPrice), $out += '</td> <td class="F-float F-count">', 
                $line = 195, $out += $escape(rs.roomCount), $out += '</td> <td class="F-float F-money">', 
                $line = 196, $out += $escape(rs.reduceMoney), $out += "</td> <td>", $line = 197, 
                $out += $escape(rs.orderNumber), $out += '</td> <td class="F-float F-money">', $line = 198, 
                $out += $escape(rs.sumCostMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 199, $out += $escape(rs.settlementMoney), $out += "</td> </tr> ", $line = 201;
            }), $out += ' <tr> <td>合计</td> <td colspan="9"></td> <td>', $line = 206, $out += $escape(checkOrder.needPay.scenic.sumCostMoney), 
            $out += "</td> <td>", $line = 207, $out += $escape(checkOrder.needPay.scenic.settlementMoney), 
            $out += "</td> </tr> ", $line = 209), $out += " </tbody> </table> ", $line = 212), 
            $out += " ", $line = 214, checkOrder.needPay.ticket && ($out += ' <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 217, checkOrder.needPay.ticket.arrangeList && checkOrder.needPay.ticket.arrangeList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 219, $out += $escape(checkOrder.needPay.ticket.arrangeList.length + 1), 
            $out += '" style="vertical-align: middle;" class="th-border">票务</th> <th class="th-border">票务公司</th> <th class="th-border">类型</th> <th class="th-border">出发城市</th> <th class="th-border">到达城市</th> <th class="th-border">班次</th> <th class="th-border">时间</th> <th class="th-border">座位级别</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 233, $each(checkOrder.needPay.ticket.arrangeList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 235, $out += $escape(rs.ticketName), 
                $out += "</td> <td>", $line = 236, $out += $escape($helpers.getTicketText(rs.type)), 
                $out += "</td> <td>", $line = 237, $out += $escape(rs.startCity), $out += "</td> <td>", 
                $line = 238, $out += $escape(rs.arriveCity), $out += "</td> <td>", $line = 239, 
                $out += $escape(rs.shift), $out += "</td> <td>", $line = 240, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd hh:mm")), 
                $out += "</td> <td>", $line = 241, $out += $escape(rs.seatLevel), $out += '</td> <td class="F-float F-money">', 
                $line = 242, $out += $escape(rs.costPrice), $out += '</td> <td class="F-float F-count">', 
                $line = 243, $out += $escape(rs.roomCount), $out += '</td> <td class="F-float F-money">', 
                $line = 244, $out += $escape(rs.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 245, $out += $escape(rs.sumCostMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 246, $out += $escape(rs.settlementMoney), $out += "</td> </tr> ", $line = 248;
            }), $out += ' <tr> <td>合计</td> <td colspan="10"></td> <td>', $line = 253, $out += $escape(checkOrder.needPay.ticket.sumCostMoney), 
            $out += "</td> <td>", $line = 254, $out += $escape(checkOrder.needPay.ticket.settlementMoney), 
            $out += "</td> </tr> ", $line = 256), $out += " </tbody> </table> ", $line = 259), 
            $out += " ", $line = 261, checkOrder.needPay.other && ($out += ' <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 264, checkOrder.needPay.other.arrangeList && checkOrder.needPay.other.arrangeList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 266, $out += $escape(checkOrder.needPay.other.arrangeList.length + 1), $out += '" style="vertical-align: middle;" class="th-border">其它</th> <th class="th-border">日期</th> <th class="th-border">项目</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 277, $each(checkOrder.needPay.other.arrangeList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 279, $out += $escape(rs.date), 
                $out += "</td> <td>", $line = 280, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 281, $out += $escape(rs.managerName), $out += "</td> <td>", $line = 282, 
                $out += $escape(rs.mobileNumber), $out += "</td> <td>", $line = 283, $out += $escape(rs.price), 
                $out += "</td> <td>", $line = 284, $out += $escape(rs.roomCount), $out += "</td> <td>", 
                $line = 285, $out += $escape(rs.reduceMoney), $out += "</td> <td>", $line = 286, 
                $out += $escape(rs.sumCostMoney), $out += "</td> <td>", $line = 287, $out += $escape(rs.settlementMoney), 
                $out += "</td> </tr> ", $line = 289;
            }), $out += ' <tr> <td>合计</td> <td colspan="7"></td> <td>', $line = 294, $out += $escape(checkOrder.needPay.other.sumCostMoney), 
            $out += "</td> <td>", $line = 295, $out += $escape(checkOrder.needPay.other.settlementMoney), 
            $out += "</td> </tr> ", $line = 297), $out += " </tbody> </table> ", $line = 300), 
            $out += " </div> </form>  </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="bookViewSingle" id="T-bookViewSingle">\r\n    <h4>代订核算表</h4>\r\n    <div class="form-group pull-right globalAdd" style="margin-right: 45px">\r\n            <button class="btn btn-sm btn-success T-printSingleBtn T-noprint" style="height: 24px;">\r\n                <i class="ace-icon fa fa-print"></i>打印\r\n            </button>\r\n        </div>\r\n    <form action="">\r\n        <div class="viewSingleMain view-InfoPrint">\r\n    <table class="table whereQ whereTwo" style="width: 100%;">\r\n                <tr class="view-TranAccountsPrint">\r\n                    <td class="textaR-paR"><span>团号</span></td>\r\n                    <td class="textaR-paL"><span>{{checkOrder.base.orderNumber}}</span></td>\r\n                    <td class="textaR-paR"><span>人数</span></td>\r\n                    <td class="textaR-paL"><span>{{checkOrder.base.adultCount}}大</span> <span>{{checkOrder.base.childCount}}小</span></td>\r\n                    <td class="textaR-paR"><span>日期</span></td>\r\n                    <td class="textaR-paL" colspan="4"><span>{{checkOrder.base.date}}</span></td>\r\n                </tr>\r\n                <tr class="view-TranAccountsPrint">\r\n                    <td class="textaR-paR"><span>收入</span></td>\r\n                    <td class="textaR-paL"><span>{{checkOrder.base.settlementMoney}}</span></td>\r\n                    <td class="textaR-paR"><span>成本</span></td>\r\n                    <td class="textaR-paL"><span>{{checkOrder.base.paySettlementMoney}}</span></td>\r\n                    <td class="textaR-paR"><span>毛利</span></td>\r\n                    <td class="textaR-paL"><span>{{checkOrder.base.profit}}</span></td>\r\n                    <td class="textaR-paR"><span>毛利率</span></td>\r\n                    <td class="textaR-paL"><span>{{checkOrder.base.perCapitaProfit}}</span></td>\r\n                </tr>\r\n            </table>\r\n\r\n            <table class="table table-bordered"> \r\n                <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【团款明细】</h5>\r\n                <tbody>\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th class="th-border">组团社</th>\r\n                        <th class="th-border">客人</th>\r\n                        <th class="th-border">费用项</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">备注</th>\r\n                    </tr>\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td rowspan="{{checkOrder.needGet.feeList.length}}">{{checkOrder.needGet.partnerAgencyName}}</td>\r\n                        <td rowspan="{{checkOrder.needGet.feeList.length}}">{{checkOrder.needGet.touristRealname}}</td>\r\n                        {{each checkOrder.needGet.feeList as rs index}}\r\n                        {{if checkOrder.needGet.feeList.length > 0}}\r\n                        {{if index == 0}}\r\n                        <td>{{rs.type | getFeeItemText}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.money}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                        {{/if}}\r\n                        {{else}}\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        {{/if}}\r\n                        {{/each}}\r\n                    </tr>\r\n                    {{each checkOrder.needGet.feeList as rs index}}\r\n                    {{if index > 0}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                         <td>{{rs.type}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.money}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="4"></td>\r\n                        <td>{{checkOrder.needGet.settlementMoney}}</td>\r\n                        <td></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <!-- 酒店 -->\r\n            {{if !!checkOrder.needPay.hotel}}\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【成本明细】</h5>\r\n                <tbody>\r\n                    {{if !!checkOrder.needPay.hotel.arrangeList && checkOrder.needPay.hotel.arrangeList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{checkOrder.needPay.hotel.arrangeList.length + 1}}" style="vertical-align: middle;" class="th-border">酒店</th>\r\n                        <th class="th-border">酒店名称</th>\r\n                        <th class="th-border">房间类型</th>\r\n                        <th class="th-border">入住日期</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">天数</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    \r\n                    {{each checkOrder.needPay.hotel.arrangeList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.hotelName}}</td>\r\n                        <td>{{rs.hotelRoomType}}</td>\r\n                        <td>{{rs.enterTime}}</td>\r\n                        <td>{{rs.costPrice}}</td>\r\n                        <td>{{rs.roomCount}}</td>\r\n                        <td>{{rs.days}}</td>\r\n                        <td>{{rs.sumCostMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    \r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="6"></td>\r\n                        <td>{{checkOrder.needPay.hotel.sumCostMoney}}</td>\r\n                        <td>{{checkOrder.needPay.hotel.settlementMoney}}</td>\r\n                    </tr>\r\n                {{/if}}\r\n                </tbody>\r\n            </table>\r\n            {{/if}}\r\n            \r\n            {{if !!checkOrder.needPay.bus}}\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!checkOrder.needPay.bus.arrangeList && checkOrder.needPay.bus.arrangeList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{checkOrder.needPay.bus.arrangeList.length + 1}}" style="vertical-align: middle;" class="th-border">用车</th>\r\n                        <th class="th-border">开始日期</th>\r\n                        <th class="th-border">结束日期</th>\r\n                        <th class="th-border">车座数</th>\r\n                        <th class="th-border">车辆品牌</th>\r\n                        <th class="th-border">所属车队</th>\r\n                        <th class="th-border">车费</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    \r\n                    {{each checkOrder.needPay.bus.arrangeList as rs}}\r\n                    <tr data-id="{{rs.id}}" class="view-TranAccountsPrint">\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.needSeatCount}}</td>\r\n                        <td>{{rs.needBusBrand}}</td>\r\n                        <td>{{rs.busCompanyName}}</td>\r\n                        <td class="F-float F-money">{{rs.fee}}</td>\r\n                        <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.sumCostMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    \r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="7"></td>\r\n                        <td>{{checkOrder.needPay.bus.sumCostMoney}}</td>\r\n                        <td>{{checkOrder.needPay.bus.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n            {{/if}}\r\n\r\n            {{if !!checkOrder.needPay.scenic}}\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!checkOrder.needPay.scenic.arrangeList && checkOrder.needPay.scenic.arrangeList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{checkOrder.needPay.scenic.arrangeList.length + 1}}" style="vertical-align: middle;" class="th-border">景区</th>\r\n                        <th class="th-border">日期</th>\r\n                        <th class="th-border">时段</th>\r\n                        <th class="th-border">景区</th>\r\n                        <th class="th-border">收费项目</th>\r\n                        <th class="th-border">时长</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">订单号</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each checkOrder.needPay.scenic.arrangeList as rs}}\r\n                    <tr data-id="{{rs.id}}" class="view-TranAccountsPrint">\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.tourTime}}</td>\r\n                        <td>{{rs.scenicName}}</td>\r\n                        <td>{{rs.scenicItemName}}</td>\r\n                        <td>{{rs.tourDuration}}</td>\r\n                        <td class="F-float F-money">{{rs.costPrice}}</td>\r\n                        <td class="F-float F-count">{{rs.roomCount}}</td>\r\n                        <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.orderNumber}}</td>\r\n                        <td class="F-float F-money">{{rs.sumCostMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                   \r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="9"></td>\r\n                        <td>{{checkOrder.needPay.scenic.sumCostMoney}}</td>\r\n                        <td>{{checkOrder.needPay.scenic.settlementMoney}}</td>\r\n                    </tr>\r\n                     {{/if}}\r\n                </tbody>\r\n            </table>\r\n            {{/if}}\r\n\r\n            {{if !!checkOrder.needPay.ticket}}\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!checkOrder.needPay.ticket.arrangeList && checkOrder.needPay.ticket.arrangeList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{checkOrder.needPay.ticket.arrangeList.length + 1}}" style="vertical-align: middle;" class="th-border">票务</th>\r\n                        <th class="th-border">票务公司</th>\r\n                        <th class="th-border">类型</th>\r\n                        <th class="th-border">出发城市</th>\r\n                        <th class="th-border">到达城市</th>\r\n                        <th class="th-border">班次</th>\r\n                        <th class="th-border">时间</th>\r\n                        <th class="th-border">座位级别</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each checkOrder.needPay.ticket.arrangeList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.ticketName}}</td>\r\n                        <td>{{rs.type | getTicketText}}</td>\r\n                        <td>{{rs.startCity}}</td>\r\n                        <td>{{rs.arriveCity}}</td>\r\n                        <td>{{rs.shift}}</td>\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd hh:mm\'}}</td>\r\n                        <td>{{rs.seatLevel}}</td>\r\n                        <td class="F-float F-money">{{rs.costPrice}}</td>\r\n                        <td class="F-float F-count">{{rs.roomCount}}</td>\r\n                        <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.sumCostMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    \r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="10"></td>\r\n                        <td>{{checkOrder.needPay.ticket.sumCostMoney}}</td>\r\n                        <td>{{checkOrder.needPay.ticket.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/if}} \r\n                </tbody>\r\n            </table>\r\n            {{/if}}\r\n            \r\n            {{if !!checkOrder.needPay.other}}\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!checkOrder.needPay.other.arrangeList && checkOrder.needPay.other.arrangeList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{checkOrder.needPay.other.arrangeList.length + 1}}" style="vertical-align: middle;" class="th-border">其它</th>\r\n                        <th class="th-border">日期</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">联系人</th>\r\n                        <th class="th-border">联系电话</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each checkOrder.needPay.other.arrangeList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.date}}</td>\r\n                        <td>{{rs.name}}</td>\r\n                        <td>{{rs.managerName}}</td>\r\n                        <td>{{rs.mobileNumber}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.roomCount}}</td>\r\n                        <td>{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.sumCostMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    \r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="7"></td>\r\n                        <td>{{checkOrder.needPay.other.sumCostMoney}}</td>\r\n                        <td>{{checkOrder.needPay.other.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/if}} \r\n                </tbody>\r\n            </table>\r\n            {{/if}}\r\n        </div>\r\n    </form>\r\n\r\n\r\n\r\n    <!-- <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> \r\n        <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n    </div> -->\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});