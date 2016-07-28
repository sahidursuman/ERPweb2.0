/*TMODJS:{"debug":true,"version":70,"md5":"d6f5d58428dcc5aff2182747ee123399"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/tourists/view/viewTransferSingle", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, base = $data.base, needGet = $data.needGet, $each = $utils.$each, needGetMap = ($data.rs, 
            $data.index, $data.needGetMap), needPay = $data.needPay, $out = ($data.$index, "");
            return $out += '<div class="transferViewSingle" id="T-touristGroupViewSingle"> <h4>外转核算表</h4> <div class="form-group pull-right globalAdd" style="margin-right: 20px"> <button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;"> <i class="ace-icon fa fa-print"></i>打印 </button> </div> <form action=""> <div class="viewSingleMain view-InfoPrint"> <table class="table whereQ whereTwo" style="width: 100%;"> <tr class="view-TranAccountsPrint"> <td class="textaR-paR"><span>单号</span></td> <td><span>', 
            $line = 13, $out += $escape(base.orderNumber), $out += '</span></td> <td class="textaR-paR"><span>人数</span></td> <td><span>', 
            $line = 15, $out += $escape(base.adultCount), $out += "大</span> <span>", $line = 15, 
            $out += $escape(base.childCount), $out += '小</span></span></td> <td class="textaR-paR"><span>出游</span></td> <td><span>', 
            $line = 17, $out += $escape(base.startTime), $out += '</span></td> <td class="textaR-paR"><span>完团</span></td> <td><span>', 
            $line = 19, $out += $escape(base.endTime), $out += '</span></td> </tr> <tr class="view-TranAccountsPrint"> <td class="textaR-paR"><span>收入</span></td> <td><span>', 
            $line = 23, $out += $escape(base.sumLineNeedPayMoney), $out += '</span></td> <td class="textaR-paR"><span>成本</span></td> <td><span>', 
            $line = 25, $out += $escape(base.sumNeedPayAllMoney), $out += '</span></td> <td class="textaR-paR"><span>毛利</span></td> <td><span>', 
            $line = 27, $out += $escape(base.profit), $out += '</span></td> <td class="textaR-paR"><span>人均毛利</span></td> <td><span>', 
            $line = 29, $out += $escape(base.preProfit), $out += '</span></td> </tr> </table> <table class="table table-bordered"> <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【团款明细】</h5> <tbody> <tr class="view-TranAccountsPrint"> <th class="th-border">组团社</th> <th class="th-border">客人</th> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">单位</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> <tr class="view-TranAccountsPrint"> <td rowspan="', 
            $line = 47, $out += $escape(needGet.length), $out += '">', $line = 47, $out += $escape(base.fromPartnerAgency), 
            $out += '</td> <td rowspan="', $line = 48, $out += $escape(needGet.length), $out += '">', 
            $line = 48, $out += $escape(base.fromPartnerAgencyContactName), $out += "</td> ", 
            $line = 49, $each(needGet, function(rs, index) {
                $out += " ", $line = 50, needGet.length > 0 ? ($out += " ", $line = 51, 0 == index && ($out += " <td>", 
                $line = 52, $out += $escape(rs.name), $out += "</td> <td>", $line = 53, $out += $escape(rs.count), 
                $out += "</td> <td>", $line = 54, $out += $escape(rs.price), $out += "</td> <td>", 
                $line = 55, $out += $escape(rs.days), $out += "</td> <td>", $line = 56, $out += $escape(rs.money), 
                $out += "</td> <td>", $line = 57, $out += $escape(rs.remark), $out += "</td> ", 
                $line = 58), $out += " ", $line = 59) : ($out += " <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> ", 
                $line = 66), $out += " ", $line = 67;
            }), $out += " </tr> ", $line = 69, $each(needGet, function(rs, index) {
                $out += " ", $line = 70, index > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <td>', 
                $line = 72, $out += $escape(rs.name), $out += "</td> <td>", $line = 73, $out += $escape(rs.count), 
                $out += "</td> <td>", $line = 74, $out += $escape(rs.price), $out += "</td> <td>", 
                $line = 75, $out += $escape(rs.days), $out += "</td> <td>", $line = 76, $out += $escape(rs.money), 
                $out += "</td> <td>", $line = 77, $out += $escape(rs.remark), $out += "</td> </tr> ", 
                $line = 79), $out += " ", $line = 80;
            }), $out += ' <tr> <td>合计</td> <td colspan="5"></td> <td>', $line = 84, $out += $escape(needGetMap.needPayAllMoney), 
            $out += '</td> <td></td> </tr> </tbody> </table> <table class="table table-bordered"> <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【成本明细】</h5> <tbody> <tr class="view-TranAccountsPrint"> <th class="th-border">地接社</th> <th class="th-border">接站牌</th> <th class="th-border">人数</th> <th class="th-border">抵达日期</th> <th class="th-border">离开日期</th> <th class="th-border">项目</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> <tr class="view-TranAccountsPrint"> <td rowspan="', 
            $line = 106, $out += $escape(needPay.receive.feeList.length), $out += '">', $line = 106, 
            $out += $escape(needPay.receive.transTravelAgencyName), $out += '</td> <td rowspan="', 
            $line = 107, $out += $escape(needPay.receive.feeList.length), $out += '">', $line = 107, 
            $out += $escape(needPay.receive.welcomeBoard), $out += '</td> <td rowspan="', $line = 108, 
            $out += $escape(needPay.receive.feeList.length), $out += '"><span>', $line = 108, 
            $out += $escape(needPay.receive.adultCount), $out += "大</span><span>", $line = 108, 
            $out += $escape(needPay.receive.childCount), $out += '小</span></td> <td rowspan="', 
            $line = 109, $out += $escape(needPay.receive.feeList.length), $out += '">', $line = 109, 
            $out += $escape($helpers.dateFormat(needPay.receive.tripStartTime, "yyyy-MM-dd")), 
            $out += '</td> <td rowspan="', $line = 110, $out += $escape(needPay.receive.feeList.length), 
            $out += '">', $line = 110, $out += $escape($helpers.dateFormat(needPay.receive.tripEndTime, "yyyy-MM-dd")), 
            $out += "</td> ", $line = 112, $each(needPay.receive.feeList, function(rs, index) {
                $out += " ", $line = 113, needPay.receive.feeList.length > 0 ? ($out += " ", $line = 114, 
                0 == index && ($out += " <td>", $line = 115, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 116, $out += $escape(rs.price), $out += "</td> <td>", $line = 117, $out += $escape(rs.count), 
                $out += "</td> <td>", $line = 118, $out += $escape(rs.money), $out += "</td> <td>", 
                $line = 119, $out += $escape(rs.remark), $out += "</td> ", $line = 120), $out += " ", 
                $line = 121) : ($out += " <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> ", 
                $line = 132), $out += " ", $line = 133;
            }), $out += " </tr> ", $line = 135, $each(needPay.receive.feeList, function(rs, index) {
                $out += " ", $line = 136, needPay.receive.feeList.length > 0 && ($out += " ", $line = 137, 
                index > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 139, 
                $out += $escape(rs.name), $out += "</td> <td>", $line = 140, $out += $escape(rs.price), 
                $out += "</td> <td>", $line = 141, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 142, $out += $escape(rs.money), $out += "</td> <td>", $line = 143, $out += $escape(rs.remark), 
                $out += "</td> </tr> ", $line = 145), $out += " ", $line = 146), $line = 146;
            }), $out += ' <tr> <td>合计</td> <td colspan="7"></td> <td>', $line = 151, $out += $escape(needPay.receive.lineNeedPayMoney), 
            $out += "</td> <td></td> </tr> </tbody> </table> ", $line = 156, needPay.hotel && ($out += ' <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 159, needPay.hotel.arrangeList && needPay.hotel.arrangeList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 161, $out += $escape(needPay.hotel.arrangeList.length + 1), $out += '" style="vertical-align: middle;" class="th-border head-nav-width">酒店</th> <th class="th-border">酒店名称</th> <th class="th-border">入住日期</th> <th class="th-border">房间类型</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 171, $each(needPay.hotel.arrangeList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 173, $out += $escape(rs.hotelName), 
                $out += "</td> <td>", $line = 174, $out += $escape($helpers.dateFormat(rs.checkInTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 175, $out += $escape(rs.hotelRoomType), $out += "</td> <td>", 
                $line = 176, $out += $escape(rs.price), $out += "</td> <td>", $line = 177, $out += $escape(rs.memberCount), 
                $out += "</td> <td>", $line = 178, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 179, $out += $escape(rs.needPayMoney), $out += "</td> <td>", $line = 180, 
                $out += $escape(rs.settlementMoney), $out += "</td> </tr> ", $line = 182;
            }), $out += ' <tr> <td>合计</td> <td colspan="6"></td> <td>', $line = 186, $out += $escape(needPay.hotel.sumNeedPayMoney), 
            $out += "</td> <td>", $line = 187, $out += $escape(needPay.hotel.sumSettlementMoney), 
            $out += "</td> </tr> ", $line = 189), $out += " </tbody> </table> ", $line = 192), 
            $out += " ", $line = 194, needPay.bus && ($out += ' <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 197, needPay.bus.arrangeList && needPay.bus.arrangeList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 199, $out += $escape(needPay.bus.arrangeList.length + 1), $out += '" style="vertical-align: middle;" class="th-border head-nav-width">用车</th> <th class="th-border">车队</th> <th class="th-border">用车时间</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 207, $each(needPay.bus.arrangeList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 209, $out += $escape(rs.busCompanyName), 
                $out += "</td> <td>", $line = 210, $out += $escape($helpers.dateFormat(rs.useTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 211, $out += $escape(rs.fee), $out += "</td> <td>", 
                $line = 212, $out += $escape(rs.reduceMoney), $out += "</td> <td>", $line = 213, 
                $out += $escape(rs.needPayMoney), $out += "</td> <td>", $line = 214, $out += $escape(rs.settlementMoney), 
                $out += "</td> </tr> ", $line = 216;
            }), $out += ' <tr> <td>合计</td> <td colspan="4"></td> <td>', $line = 220, $out += $escape(needPay.bus.sumNeedPayMoney), 
            $out += "</td> <td>", $line = 221, $out += $escape(needPay.bus.sumSettlementMoney), 
            $out += "</td> </tr> ", $line = 223), $out += " </tbody> </table> ", $line = 226), 
            $out += " ", $line = 228, needPay.restaurant && ($out += ' <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 231, needPay.restaurant.arrangeList && needPay.restaurant.arrangeList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 233, $out += $escape(needPay.restaurant.arrangeList.length + 1), $out += '" style="vertical-align: middle;" class="th-border head-nav-width">餐费</th> <th class="th-border">餐厅名称</th> <th class="th-border">用餐时间</th> <th class="th-border">类型</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 243, $each(needPay.restaurant.arrangeList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 245, $out += $escape(rs.restaurantName), 
                $out += "</td> <td>", $line = 246, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 247, $out += $escape(rs.standardType), $out += "</td> <td>", 
                $line = 248, $out += $escape(rs.price), $out += "</td> <td>", $line = 249, $out += $escape(rs.memberCount), 
                $out += "</td> <td>", $line = 250, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 251, $out += $escape(rs.needPayMoney), $out += "</td> <td>", $line = 252, 
                $out += $escape(rs.settlementMoney), $out += "</td> </tr> ", $line = 254;
            }), $out += ' <tr> <td>合计</td> <td colspan="6"></td> <td>', $line = 258, $out += $escape(needPay.restaurant.sumNeedPayMoney), 
            $out += "</td> <td>", $line = 259, $out += $escape(needPay.restaurant.sumSettlementMoney), 
            $out += "</td> </tr> ", $line = 261), $out += " </tbody> </table> ", $line = 264), 
            $out += " ", $line = 266, needPay.ticket && ($out += ' <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 269, needPay.ticket.arrangeList && needPay.ticket.arrangeList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 271, $out += $escape(needPay.ticket.arrangeList.length + 1), $out += '" style="vertical-align: middle;" class="th-border head-nav-width">票务</th> <th class="th-border">票务公司</th> <th class="th-border">乘坐时间</th> <th class="th-border">类型-出发-到达</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 281, $each(needPay.ticket.arrangeList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 283, $out += $escape(rs.ticketName), 
                $out += "</td> <td>", $line = 284, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td><span>", $line = 285, 1 == rs.type ? ($out += " 机票 ", $line = 285) : 2 == rs.type ? ($out += " 汽车票 ", 
                $line = 285) : 3 == rs.type && ($out += " 火车票 ", $line = 285), $out += "</span>- <span>", 
                $line = 286, $out += $escape(rs.startingCity), $out += "</span>- <span>", $line = 287, 
                $out += $escape(rs.shift), $out += "</span></td> <td>", $line = 288, $out += $escape(rs.price), 
                $out += "</td> <td>", $line = 289, $out += $escape(rs.memberCount), $out += "</td> <td>", 
                $line = 290, $out += $escape(rs.reduceMoney), $out += "</td> <td>", $line = 291, 
                $out += $escape(rs.needPayMoney), $out += "</td> <td>", $line = 292, $out += $escape(rs.settlementMoney), 
                $out += "</td> </tr> ", $line = 294;
            }), $out += ' <tr> <td>合计</td> <td colspan="6"></td> <td>', $line = 298, $out += $escape(needPay.ticket.sumNeedPayMoney), 
            $out += "</td> <td>", $line = 299, $out += $escape(needPay.ticket.sumSettlementMoney), 
            $out += "</td> </tr> ", $line = 301), $out += " </tbody> </table> ", $line = 304), 
            $out += " ", $line = 306, needPay.other && ($out += ' <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 309, needPay.other.arrangeList && needPay.other.arrangeList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 311, $out += $escape(needPay.other.arrangeList.length + 1), $out += '" style="vertical-align: middle;" class="th-border head-nav-width">其它</th> <th class="th-border">项目</th> <th class="th-border">日期</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 322, $each(needPay.other.arrangeList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 324, $out += $escape(rs.name), 
                $out += "</td> <td>", $line = 325, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 326, $out += $escape(rs.managerName), $out += "</td> <td>", 
                $line = 327, $out += $escape(rs.mobileNumber), $out += "</td> <td>", $line = 328, 
                $out += $escape(rs.price), $out += "</td> <td>", $line = 329, $out += $escape(rs.memberCount), 
                $out += "</td> <td>", $line = 330, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 331, $out += $escape(rs.needPayMoney), $out += "</td> <td>", $line = 332, 
                $out += $escape(rs.settlementMoney), $out += "</td> </tr> ", $line = 334;
            }), $out += ' <tr> <td>合计</td> <td colspan="7"></td> <td>', $line = 338, $out += $escape(needPay.other.sumNeedPayMoney), 
            $out += "</td> <td>", $line = 339, $out += $escape(needPay.other.sumSettlementMoney), 
            $out += "</td> </tr> ", $line = 341), $out += " </tbody> </table> ", $line = 344), 
            $out += ' </div> </form> <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="transferViewSingle" id="T-touristGroupViewSingle">\r\n    <h4>外转核算表</h4>\r\n    <div class="form-group pull-right globalAdd" style="margin-right: 20px">\r\n            <button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;">\r\n                <i class="ace-icon fa fa-print"></i>打印\r\n            </button>\r\n        </div>\r\n    <form action="">\r\n        <div class="viewSingleMain view-InfoPrint">\r\n            <table class="table whereQ whereTwo" style="width: 100%;">\r\n                <tr class="view-TranAccountsPrint">\r\n                    <td class="textaR-paR"><span>单号</span></td>\r\n                    <td><span>{{base.orderNumber}}</span></td>\r\n                    <td class="textaR-paR"><span>人数</span></td>\r\n                    <td><span>{{base.adultCount}}大</span> <span>{{base.childCount}}小</span></span></td>\r\n                    <td class="textaR-paR"><span>出游</span></td>\r\n                    <td><span>{{base.startTime}}</span></td>\r\n                    <td class="textaR-paR"><span>完团</span></td>\r\n                    <td><span>{{base.endTime}}</span></td>\r\n                </tr>\r\n                <tr class="view-TranAccountsPrint">\r\n                    <td class="textaR-paR"><span>收入</span></td>\r\n                    <td><span>{{base.sumLineNeedPayMoney}}</span></td>\r\n                    <td class="textaR-paR"><span>成本</span></td>\r\n                    <td><span>{{base.sumNeedPayAllMoney}}</span></td>\r\n                    <td class="textaR-paR"><span>毛利</span></td>\r\n                    <td><span>{{base.profit}}</span></td>\r\n                    <td class="textaR-paR"><span>人均毛利</span></td>\r\n                    <td><span>{{base.preProfit}}</span></td>\r\n                </tr>\r\n            </table>\r\n\r\n            <table class="table table-bordered"> \r\n                <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【团款明细】</h5>\r\n                <tbody>\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th class="th-border">组团社</th>\r\n                        <th class="th-border">客人</th>\r\n                        <th class="th-border">费用项</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">单位</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">说明</th>\r\n                    </tr>\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td rowspan="{{needGet.length}}">{{base.fromPartnerAgency}}</td>\r\n                        <td rowspan="{{needGet.length}}">{{base.fromPartnerAgencyContactName}}</td>\r\n                        {{each needGet as rs index}}\r\n                        {{if needGet.length > 0}}\r\n                        {{if index == 0}}\r\n                        <td>{{rs.name}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.days}}</td>\r\n                        <td>{{rs.money}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                        {{/if}}\r\n                        {{else}}\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        {{/if}}\r\n                        {{/each}}\r\n                    </tr>\r\n                    {{each needGet as rs index}}\r\n                    {{if index > 0}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.name}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.days}}</td>\r\n                        <td>{{rs.money}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="5"></td>\r\n                        <td>{{needGetMap.needPayAllMoney}}</td>\r\n                        <td></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <table class="table table-bordered"> \r\n                <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【成本明细】</h5>\r\n                <tbody>\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th class="th-border">地接社</th>\r\n                        <th class="th-border">接站牌</th>\r\n                        <th class="th-border">人数</th>\r\n                        <th class="th-border">抵达日期</th>\r\n                        <th class="th-border">离开日期</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">说明</th>\r\n                    </tr>\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td rowspan="{{needPay.receive.feeList.length}}">{{needPay.receive.transTravelAgencyName}}</td>\r\n                        <td rowspan="{{needPay.receive.feeList.length}}">{{needPay.receive.welcomeBoard}}</td>\r\n                        <td rowspan="{{needPay.receive.feeList.length}}"><span>{{needPay.receive.adultCount}}大</span><span>{{needPay.receive.childCount}}小</span></td>\r\n                        <td rowspan="{{needPay.receive.feeList.length}}">{{needPay.receive.tripStartTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td rowspan="{{needPay.receive.feeList.length}}">{{needPay.receive.tripEndTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n\r\n                        {{each needPay.receive.feeList as rs index}}\r\n                        {{if needPay.receive.feeList.length > 0}}\r\n                        {{if index == 0}}\r\n                        <td>{{rs.name}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.money}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                        {{/if}}\r\n                        {{else}}\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        {{/if}}\r\n                        {{/each}}\r\n                    </tr>\r\n                    {{each needPay.receive.feeList as rs index}}\r\n                    {{if needPay.receive.feeList.length > 0}}\r\n                    {{if index > 0}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.name}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.money}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/if}}{{/each}}\r\n\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="7"></td>\r\n                        <td>{{needPay.receive.lineNeedPayMoney}}</td>\r\n                        <td></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n            {{if !!needPay.hotel}}\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!needPay.hotel.arrangeList && needPay.hotel.arrangeList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{needPay.hotel.arrangeList.length + 1}}" style="vertical-align: middle;" class="th-border head-nav-width">酒店</th>\r\n                        <th class="th-border">酒店名称</th>\r\n                        <th class="th-border">入住日期</th>\r\n                        <th class="th-border">房间类型</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each needPay.hotel.arrangeList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.hotelName}}</td>\r\n                        <td>{{rs.checkInTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.hotelRoomType}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.memberCount}}</td>\r\n                        <td>{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.needPayMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="6"></td>\r\n                        <td>{{needPay.hotel.sumNeedPayMoney}}</td>\r\n                        <td>{{needPay.hotel.sumSettlementMoney}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n            {{/if}}\r\n            \r\n            {{if !!needPay.bus}}\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!needPay.bus.arrangeList && needPay.bus.arrangeList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{needPay.bus.arrangeList.length + 1}}" style="vertical-align: middle;" class="th-border head-nav-width">用车</th>\r\n                        <th class="th-border">车队</th>\r\n                        <th class="th-border">用车时间</th>\r\n                        <th class="th-border">车费</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each needPay.bus.arrangeList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.busCompanyName}}</td>\r\n                        <td>{{rs.useTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.fee}}</td>\r\n                        <td>{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.needPayMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="4"></td>\r\n                        <td>{{needPay.bus.sumNeedPayMoney}}</td>\r\n                        <td>{{needPay.bus.sumSettlementMoney}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n            {{/if}}\r\n\r\n            {{if !!needPay.restaurant}}\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!needPay.restaurant.arrangeList && needPay.restaurant.arrangeList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{needPay.restaurant.arrangeList.length + 1}}" style="vertical-align: middle;" class="th-border head-nav-width">餐费</th>\r\n                        <th class="th-border">餐厅名称</th>\r\n                        <th class="th-border">用餐时间</th>\r\n                        <th class="th-border">类型</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each needPay.restaurant.arrangeList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.restaurantName}}</td>\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.standardType}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.memberCount}}</td>\r\n                        <td>{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.needPayMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="6"></td>\r\n                        <td>{{needPay.restaurant.sumNeedPayMoney}}</td>\r\n                        <td>{{needPay.restaurant.sumSettlementMoney}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n            {{/if}}\r\n\r\n            {{if !!needPay.ticket}}\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!needPay.ticket.arrangeList && needPay.ticket.arrangeList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{needPay.ticket.arrangeList.length + 1}}" style="vertical-align: middle;" class="th-border head-nav-width">票务</th>\r\n                        <th class="th-border">票务公司</th>\r\n                        <th class="th-border">乘坐时间</th>\r\n                        <th class="th-border">类型-出发-到达</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each needPay.ticket.arrangeList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.ticketName}}</td>\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td><span>{{if rs.type == 1}} 机票 {{else if rs.type == 2}} 汽车票 {{else if rs.type == 3}} 火车票 {{/if}}</span>-\r\n                        <span>{{rs.startingCity}}</span>-\r\n                        <span>{{rs.shift}}</span></td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.memberCount}}</td>\r\n                        <td>{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.needPayMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="6"></td>\r\n                        <td>{{needPay.ticket.sumNeedPayMoney}}</td>\r\n                        <td>{{needPay.ticket.sumSettlementMoney}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n            {{/if}}\r\n            \r\n            {{if !!needPay.other}}\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!needPay.other.arrangeList && needPay.other.arrangeList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{needPay.other.arrangeList.length + 1}}" style="vertical-align: middle;" class="th-border head-nav-width">其它</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">日期</th>\r\n                        <th class="th-border">联系人</th>\r\n                        <th class="th-border">联系电话</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each needPay.other.arrangeList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.name}}</td>\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.managerName}}</td>\r\n                        <td>{{rs.mobileNumber}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.memberCount}}</td>\r\n                        <td>{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.needPayMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="7"></td>\r\n                        <td>{{needPay.other.sumNeedPayMoney}}</td>\r\n                        <td>{{needPay.other.sumSettlementMoney}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n            {{/if}}\r\n        </div>        \r\n    </form>\r\n    <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> \r\n        <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});