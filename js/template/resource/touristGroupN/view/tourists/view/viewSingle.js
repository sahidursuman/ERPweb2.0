/*TMODJS:{"debug":true,"version":105,"md5":"fe92f3dd9c8bcc01f523293130452bb2"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/tourists/view/viewSingle", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, baseInfo = $data.baseInfo, tripFee = $data.tripFee, $each = $utils.$each, outRemarkFee = ($data.rs, 
            $data.index, $data.outRemarkFee), outRemarkArrange = ($data.$index, $data.outRemarkArrange), $out = "";
            return $out += '<div class="touristGroupViewSingle" id="T-touristGroupViewSingle"> <h4>中转核算表</h4> <div class="form-group pull-right globalAdd" style="margin-right: 45px"> <button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;"> <i class="ace-icon fa fa-print"></i>打印 </button> </div> <form action=""> <div class="viewSingleMain view-InfoPrint"> <table class="table whereQ whereTwo" style="width: 100%;"> <tr class="view-TranAccountsPrint"> <td class="textaR-paR"><span>团号</span></td> <td class="textaR-paL"><span>', 
            $line = 13, $out += $escape(baseInfo.orderNumber), $out += '</span></td> <td class="textaR-paR"><span>人数</span></td> <td class="textaR-paL"><span>', 
            $line = 15, $out += $escape(baseInfo.adultCount), $out += "大</span> <span>", $line = 15, 
            $out += $escape(baseInfo.childCount), $out += '小</span></td> <td class="textaR-paR"><span>日期</span></td> <td class="textaR-paL" colspan="4"><span>', 
            $line = 17, $out += $escape($helpers.dateFormat(baseInfo.startTime, "yyyy-MM-dd")), 
            $out += '</span></td> </tr> <tr class="view-TranAccountsPrint"> <td class="textaR-paR"><span>收入</span></td> <td class="textaR-paL"><span>', 
            $line = 21, $out += $escape(baseInfo.sumTransitMoney), $out += '</span></td> <td class="textaR-paR"><span>成本</span></td> <td class="textaR-paL"><span>', 
            $line = 23, $out += $escape(baseInfo.transitPaySMoney), $out += '</span></td> <td class="textaR-paR"><span>毛利</span></td> <td class="textaR-paL"><span>', 
            $line = 25, $out += $escape(baseInfo.grossProfitMoney), $out += '</span></td> <td class="textaR-paR"><span>人均毛利</span></td> <td class="textaR-paL"><span>', 
            $line = 27, $out += $escape(baseInfo.perGrossProfitMoney), $out += '</span></td> </tr> </table> <table class="table table-bordered"> <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【团款明细】</h5> <tbody> <tr class="view-TranAccountsPrint"> <th class="th-border">组团社</th> <th class="th-border">客人</th> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">天数</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">备注</th> </tr> <tr class="view-TranAccountsPrint"> <td rowspan="', 
            $line = 46, $out += $escape(tripFee.feeList.length), $out += '">', $line = 46, $out += $escape(tripFee.partnerAgencyName), 
            $out += '</td> <td rowspan="', $line = 47, $out += $escape(tripFee.feeList.length), 
            $out += '">', $line = 47, $out += $escape(tripFee.contactName), $out += "</td> ", 
            $line = 48, $each(tripFee.feeList, function(rs, index) {
                $out += " ", $line = 49, tripFee.feeList.length > 0 ? ($out += " ", $line = 50, 
                0 == index && ($out += " <td>", $line = 51, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 52, $out += $escape(rs.count), $out += "</td> <td>", $line = 53, $out += $escape(rs.days), 
                $out += "</td> <td>", $line = 54, $out += $escape(rs.price), $out += "</td> <td>", 
                $line = 55, $out += $escape(rs.needIncome), $out += "</td> <td>", $line = 56, $out += $escape(rs.remark), 
                $out += "</td> ", $line = 57), $out += " ", $line = 58) : ($out += " <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> ", 
                $line = 65), $out += " ", $line = 66;
            }), $out += " </tr> ", $line = 68, $each(tripFee.feeList, function(rs, index) {
                $out += " ", $line = 69, index > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <td>', 
                $line = 71, $out += $escape(rs.name), $out += "</td> <td>", $line = 72, $out += $escape(rs.count), 
                $out += "</td> <td>", $line = 73, $out += $escape(rs.days), $out += "</td> <td>", 
                $line = 74, $out += $escape(rs.price), $out += "</td> <td>", $line = 75, $out += $escape(rs.needIncome), 
                $out += "</td> <td>", $line = 76, $out += $escape(rs.remark), $out += "</td> </tr> ", 
                $line = 78), $out += " ", $line = 79;
            }), $out += ' <tr> <td>合计</td> <td colspan="6"></td> <td>', $line = 83, $out += $escape(tripFee.sumTripFee), 
            $out += '</td> </tr> </tbody> </table> <table class="table table-bordered"> <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【收入明细】</h5> <tbody> <tr class="view-TranAccountsPrint"> <th class="th-border">费用</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">应收</th> </tr> ', 
            $line = 97, $each(outRemarkFee.outRemarkFeeList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 100, $out += $escape(rs.name), 
                $out += "</td> <td>", $line = 101, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 102, $out += $escape(rs.price), $out += "</td> <td>", $line = 103, $out += $escape(rs.needIncome), 
                $out += "</td> </tr> ", $line = 106;
            }), $out += ' <tr> <td>合计</td> <td colspan="2"></td> <td>', $line = 110, $out += $escape(outRemarkFee.sumOutRemarkFee), 
            $out += '</td> </tr> </tbody> </table> <table class="table table-bordered" style="margin-bottom: 10px;"> <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【成本明细】</h5> <tbody> ', 
            $line = 120, outRemarkArrange.hotelList && outRemarkArrange.hotelList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 122, $out += $escape(outRemarkArrange.hotelList.length + 1), $out += '" style="vertical-align: middle;" class="th-border">酒店</th> <th class="th-border">酒店名称</th> <th class="th-border">入住日期</th> <th class="th-border">房间类型</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 132, $each(outRemarkArrange.hotelList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 134, $out += $escape(rs.hotelName), 
                $out += "</td> <td>", $line = 135, $out += $escape($helpers.dateFormat(rs.checkInTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 136, $out += $escape(rs.roomType), $out += "</td> <td>", 
                $line = 137, $out += $escape(rs.price), $out += "</td> <td>", $line = 138, $out += $escape(rs.count), 
                $out += "</td> <td>", $line = 139, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 140, $out += $escape(rs.needPayMoney), $out += "</td> <td>", $line = 141, 
                $out += $escape(rs.settlementMoney), $out += "</td> </tr> ", $line = 143;
            }), $out += ' <tr> <td>合计</td> <td colspan="6"></td> <td>', $line = 147, $out += $escape(outRemarkArrange.hotelNeedMoney), 
            $out += "</td> <td>", $line = 148, $out += $escape(outRemarkArrange.hotelSettMoney), 
            $out += "</td> </tr> ", $line = 150), $out += ' </tbody> </table> <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 156, outRemarkArrange.busList && outRemarkArrange.busList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 158, $out += $escape(outRemarkArrange.busList.length + 1), $out += '" style="vertical-align: middle;" class="th-border">用车</th> <th class="th-border">车队</th> <th class="th-border">用车时间</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 166, $each(outRemarkArrange.busList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 168, $out += $escape(rs.busCompanyName), 
                $out += "</td> <td>", $line = 169, $out += $escape($helpers.dateFormat(rs.useTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 170, $out += $escape(rs.fee), $out += "</td> <td>", 
                $line = 171, $out += $escape(rs.reduceMoney), $out += "</td> <td>", $line = 172, 
                $out += $escape(rs.needPayMoney), $out += "</td> <td>", $line = 173, $out += $escape(rs.settlementMoney), 
                $out += "</td> </tr> ", $line = 175;
            }), $out += ' <tr> <td>合计</td> <td colspan="4"></td> <td>', $line = 179, $out += $escape(outRemarkArrange.busNeedMoney), 
            $out += "</td> <td>", $line = 180, $out += $escape(outRemarkArrange.busSettMoney), 
            $out += "</td> </tr> ", $line = 182), $out += ' </tbody> </table> <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 188, outRemarkArrange.restaurantList && outRemarkArrange.restaurantList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 190, $out += $escape(outRemarkArrange.restaurantList.length + 1), $out += '" style="vertical-align: middle;" class="th-border">餐费</th> <th class="th-border">餐厅名称</th> <th class="th-border">用餐时间</th> <th class="th-border">类型</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 200, $each(outRemarkArrange.restaurantList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 202, $out += $escape(rs.restaurantName), 
                $out += "</td> <td>", $line = 203, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 204, $out += $escape(rs.standardType), $out += "</td> <td>", 
                $line = 205, $out += $escape(rs.price), $out += "</td> <td>", $line = 206, $out += $escape(rs.count), 
                $out += "</td> <td>", $line = 207, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 208, $out += $escape(rs.needPayMoney), $out += "</td> <td>", $line = 209, 
                $out += $escape(rs.settlementMoney), $out += "</td> </tr> ", $line = 211;
            }), $out += ' <tr> <td>合计</td> <td colspan="6"></td> <td>', $line = 215, $out += $escape(outRemarkArrange.restaurantNeedMoney), 
            $out += "</td> <td>", $line = 216, $out += $escape(outRemarkArrange.restaurantSettMoney), 
            $out += "</td> </tr> ", $line = 218), $out += ' </tbody> </table> <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 224, outRemarkArrange.ticketList && outRemarkArrange.ticketList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 226, $out += $escape(outRemarkArrange.ticketList.length + 1), $out += '" style="vertical-align: middle;" class="th-border">票务</th> <th class="th-border">票务公司</th> <th class="th-border">乘坐时间</th> <th class="th-border">类型-出发-到达</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 236, $each(outRemarkArrange.ticketList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 238, $out += $escape(rs.ticketName), 
                $out += "</td> <td>", $line = 239, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td><span>", $line = 240, 1 == rs.type ? ($out += " 机票 ", $line = 240) : 2 == rs.type ? ($out += " 汽车票 ", 
                $line = 240) : 3 == rs.type && ($out += " 火车票 ", $line = 240), $out += "</span>- <span>", 
                $line = 241, $out += $escape(rs.startingCity), $out += "</span>- <span>", $line = 242, 
                $out += $escape(rs.arriveCity), $out += "</span></td> <td>", $line = 243, $out += $escape(rs.price), 
                $out += "</td> <td>", $line = 244, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 245, $out += $escape(rs.reduceMoney), $out += "</td> <td>", $line = 246, 
                $out += $escape(rs.needPayMoney), $out += "</td> <td>", $line = 247, $out += $escape(rs.settlementMoney), 
                $out += "</td> </tr> ", $line = 249;
            }), $out += ' <tr> <td>合计</td> <td colspan="6"></td> <td>', $line = 253, $out += $escape(outRemarkArrange.ticketNeedMoney), 
            $out += "</td> <td>", $line = 254, $out += $escape(outRemarkArrange.ticketSettMoney), 
            $out += "</td> </tr> ", $line = 256), $out += ' </tbody> </table> <table class="table table-bordered" style="margin-bottom: 10px;"> <tbody> ', 
            $line = 262, outRemarkArrange.otherList && outRemarkArrange.otherList.length > 0 && ($out += ' <tr class="view-TranAccountsPrint"> <th rowspan="', 
            $line = 264, $out += $escape(outRemarkArrange.otherList.length + 1), $out += '" style="vertical-align: middle;" class="th-border">其它</th> <th class="th-border">项目</th> <th class="th-border">日期</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border">结算</th> </tr> ', 
            $line = 275, $each(outRemarkArrange.otherList, function(rs) {
                $out += ' <tr class="view-TranAccountsPrint"> <td>', $line = 277, $out += $escape(rs.otherName), 
                $out += "</td> <td>", $line = 278, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 279, $out += $escape(rs.managerName), $out += "</td> <td>", 
                $line = 280, $out += $escape(rs.mobileNumber), $out += "</td> <td>", $line = 281, 
                $out += $escape(rs.price), $out += "</td> <td>", $line = 282, $out += $escape(rs.count), 
                $out += "</td> <td>", $line = 283, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 284, $out += $escape(rs.needPayMoney), $out += "</td> <td>", $line = 285, 
                $out += $escape(rs.settlementMoney), $out += "</td> </tr> ", $line = 287;
            }), $out += ' <tr> <td>合计</td> <td colspan="7"></td> <td>', $line = 291, $out += $escape(outRemarkArrange.otherNeedMoney), 
            $out += "</td> <td>", $line = 292, $out += $escape(outRemarkArrange.otherSettMoney), 
            $out += "</td> </tr> ", $line = 294), $out += ' </tbody> </table> </div> </form> <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="touristGroupViewSingle" id="T-touristGroupViewSingle">\r\n    <h4>中转核算表</h4>\r\n    <div class="form-group pull-right globalAdd" style="margin-right: 45px">\r\n            <button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;">\r\n                <i class="ace-icon fa fa-print"></i>打印\r\n            </button>\r\n        </div>\r\n    <form action="">\r\n        <div class="viewSingleMain view-InfoPrint">\r\n    <table class="table whereQ whereTwo" style="width: 100%;">\r\n                <tr class="view-TranAccountsPrint">\r\n                    <td class="textaR-paR"><span>团号</span></td>\r\n                    <td class="textaR-paL"><span>{{baseInfo.orderNumber}}</span></td>\r\n                    <td class="textaR-paR"><span>人数</span></td>\r\n                    <td class="textaR-paL"><span>{{baseInfo.adultCount}}大</span> <span>{{baseInfo.childCount}}小</span></td>\r\n                    <td class="textaR-paR"><span>日期</span></td>\r\n                    <td class="textaR-paL" colspan="4"><span>{{baseInfo.startTime | dateFormat: \'yyyy-MM-dd\'}}</span></td>\r\n                </tr>\r\n                <tr class="view-TranAccountsPrint">\r\n                    <td class="textaR-paR"><span>收入</span></td>\r\n                    <td class="textaR-paL"><span>{{baseInfo.sumTransitMoney}}</span></td>\r\n                    <td class="textaR-paR"><span>成本</span></td>\r\n                    <td class="textaR-paL"><span>{{baseInfo.transitPaySMoney}}</span></td>\r\n                    <td class="textaR-paR"><span>毛利</span></td>\r\n                    <td class="textaR-paL"><span>{{baseInfo.grossProfitMoney}}</span></td>\r\n                    <td class="textaR-paR"><span>人均毛利</span></td>\r\n                    <td class="textaR-paL"><span>{{baseInfo.perGrossProfitMoney}}</span></td>\r\n                </tr>\r\n            </table>\r\n            \r\n            \r\n            <table class="table table-bordered"> \r\n                <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【团款明细】</h5>\r\n                <tbody>\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th class="th-border">组团社</th>\r\n                        <th class="th-border">客人</th>\r\n                        <th class="th-border">费用项</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">天数</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">备注</th>\r\n                    </tr>\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td rowspan="{{tripFee.feeList.length}}">{{tripFee.partnerAgencyName}}</td>\r\n                        <td rowspan="{{tripFee.feeList.length}}">{{tripFee.contactName}}</td>\r\n                        {{each tripFee.feeList as rs index}}\r\n                        {{if tripFee.feeList.length > 0}}\r\n                        {{if index == 0}}\r\n                        <td>{{rs.name}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.days}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.needIncome}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                        {{/if}}\r\n                        {{else}}\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        <td></td>\r\n                        {{/if}}\r\n                        {{/each}}\r\n                    </tr>\r\n                    {{each tripFee.feeList as rs index}}\r\n                    {{if index > 0}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.name}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.days}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.needIncome}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="6"></td>\r\n                        <td>{{tripFee.sumTripFee}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <table class="table table-bordered"> \r\n                <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【收入明细】</h5>\r\n                <tbody>\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th class="th-border">费用</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">应收</th>\r\n                    </tr>\r\n                    {{each outRemarkFee.outRemarkFeeList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                    \r\n                        <td>{{rs.name}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.needIncome}}</td>\r\n                       \r\n                    </tr> \r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="2"></td>\r\n                        <td>{{outRemarkFee.sumOutRemarkFee}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n                \r\n\r\n\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <h5 style="color: #707070;margin-bottom:5px;margin-top:20px;font-weight: bold;">【成本明细】</h5>\r\n                <tbody>\r\n                {{if !!outRemarkArrange.hotelList && outRemarkArrange.hotelList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{outRemarkArrange.hotelList.length +1}}" style="vertical-align: middle;" class="th-border">酒店</th>\r\n                        <th class="th-border">酒店名称</th>\r\n                        <th class="th-border">入住日期</th>\r\n                        <th class="th-border">房间类型</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each outRemarkArrange.hotelList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.hotelName}}</td>\r\n                        <td>{{rs.checkInTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.roomType}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.needPayMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="6"></td>\r\n                        <td>{{outRemarkArrange.hotelNeedMoney}}</td>\r\n                        <td>{{outRemarkArrange.hotelSettMoney}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!outRemarkArrange.busList && outRemarkArrange.busList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{outRemarkArrange.busList.length +1}}" style="vertical-align: middle;" class="th-border">用车</th>\r\n                        <th class="th-border">车队</th>\r\n                        <th class="th-border">用车时间</th>\r\n                        <th class="th-border">车费</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each outRemarkArrange.busList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.busCompanyName}}</td>\r\n                        <td>{{rs.useTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.fee}}</td>\r\n                        <td>{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.needPayMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="4"></td>\r\n                        <td>{{outRemarkArrange.busNeedMoney}}</td>\r\n                        <td>{{outRemarkArrange.busSettMoney}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!outRemarkArrange.restaurantList && outRemarkArrange.restaurantList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{outRemarkArrange.restaurantList.length +1}}" style="vertical-align: middle;" class="th-border">餐费</th>\r\n                        <th class="th-border">餐厅名称</th>\r\n                        <th class="th-border">用餐时间</th>\r\n                        <th class="th-border">类型</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each outRemarkArrange.restaurantList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.restaurantName}}</td>\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.standardType}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.needPayMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="6"></td>\r\n                        <td>{{outRemarkArrange.restaurantNeedMoney}}</td>\r\n                        <td>{{outRemarkArrange.restaurantSettMoney}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!outRemarkArrange.ticketList && outRemarkArrange.ticketList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{outRemarkArrange.ticketList.length +1}}" style="vertical-align: middle;" class="th-border">票务</th>\r\n                        <th class="th-border">票务公司</th>\r\n                        <th class="th-border">乘坐时间</th>\r\n                        <th class="th-border">类型-出发-到达</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each outRemarkArrange.ticketList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.ticketName}}</td>\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td><span>{{if rs.type == 1}} 机票 {{else if rs.type == 2}} 汽车票 {{else if rs.type == 3}} 火车票 {{/if}}</span>-\r\n                        <span>{{rs.startingCity}}</span>-\r\n                        <span>{{rs.arriveCity}}</span></td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.needPayMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="6"></td>\r\n                        <td>{{outRemarkArrange.ticketNeedMoney}}</td>\r\n                        <td>{{outRemarkArrange.ticketSettMoney}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n\r\n            <table class="table table-bordered" style="margin-bottom: 10px;">\r\n                <tbody>\r\n                {{if !!outRemarkArrange.otherList && outRemarkArrange.otherList.length > 0}}\r\n                     <tr class="view-TranAccountsPrint">\r\n                        <th rowspan="{{outRemarkArrange.otherList.length +1}}" style="vertical-align: middle;" class="th-border">其它</th>\r\n                        <th class="th-border">项目</th>\r\n                        <th class="th-border">日期</th>\r\n                        <th class="th-border">联系人</th>\r\n                        <th class="th-border">联系电话</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border">结算</th>\r\n                    </tr>\r\n                    {{each outRemarkArrange.otherList as rs}}\r\n                    <tr class="view-TranAccountsPrint">\r\n                        <td>{{rs.otherName}}</td>\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                        <td>{{rs.managerName}}</td>\r\n                        <td>{{rs.mobileNumber}}</td>\r\n                        <td>{{rs.price}}</td>\r\n                        <td>{{rs.count}}</td>\r\n                        <td>{{rs.reduceMoney}}</td>\r\n                        <td>{{rs.needPayMoney}}</td>\r\n                        <td>{{rs.settlementMoney}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                    <tr>\r\n                        <td>合计</td>\r\n                        <td colspan="7"></td>\r\n                        <td>{{outRemarkArrange.otherNeedMoney}}</td>\r\n                        <td>{{outRemarkArrange.otherSettMoney}}</td>\r\n                    </tr>\r\n                    {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </form>\r\n\r\n    <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> \r\n        <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});