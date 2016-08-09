/*TMODJS:{"debug":true,"version":216,"md5":"99a673140068c6c08be997fe5b95186a"}*/
define(function(require) {
    return require("../../../template")("busOrder/newOrder/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, order = $data.order, $each = $utils.$each, $out = ($data.rs, 
            $data.index, $data.group, $data.i, $data.arrangeInfo, $data.roundArrangeInfo, "");
            return $out += '<div class="T-updateOrder container-fulid col-xs-12"> <div class="col-xs-12 padding-b10 mar-b10 clearBoth border-bottom-solid"> <label class="mar-r20">订单状态：<span class="orange">', 
            $line = 3, $out += $escape($helpers.getOrderStatusText(order.orderStatus)), $out += '</span></label> <label class="mar-r20">商家申请价：<span class="', 
            $line = 4, "1" == order.orderStatus || "3" == order.orderStatus ? ($out += "textd-line color-999", 
            $line = 4) : ($out += "orange", $line = 4), $out += '">￥', $line = 4, $out += $escape(order.needPayMoney), 
            $out += "</span></label> ", $line = 5, ("1" == order.orderStatus || "3" == order.orderStatus) && ($out += '<label class="mar-r20">回复价：<span class="orange">￥', 
            $line = 5, $out += $escape(order.comfirmNeedPayMoney), $out += "</span>", $line = 5, 
            order.confirmNeedPayMoneyRemark && ($out += "(备注：", $line = 5, $out += $escape(order.confirmNeedPayMoneyRemark), 
            $out += ")", $line = 5), $out += "</label>", $line = 5), $out += " <label>总现收：￥", 
            $line = 6, $out += $escape(order.driverIncomeMoney), $out += '</label> <div class="inline pull-right"> <label class="mar-r20">下单时间：<span>', 
            $line = 8, $out += $escape(order.createTime), $out += '</span></label> <label class="mar-r20">订单号：<span>', 
            $line = 9, $out += $escape(order.orderNumber), $out += '</span></label> <!-- <label class="mar-r20">商家：<span>', 
            $line = 10, $out += $escape(order.customerName), $out += '</span></label> --> </div> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">操作记录<a class="T-viewOperationRecord lineblock mar-l-20 pointer font-s-12">查看&gt;</a></h5> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">订单信息</h5> <div> <label class="lineblock width150">', 
            $line = 19, $out += $escape(order.tripType.name), $out += '</label> <label class="mar-r20">', 
            $line = 20, "0" == order.tripType.type ? ($out += "接", $line = 20) : "1" == order.tripType.type && ($out += "送", 
            $line = 20), $out += "团日期：", $line = 20, $out += $escape(order.tripTime), $out += '</label> <label class="mar-r20"><span class="lineblock width60 texta-r">', 
            $line = 21, "0" == order.tripType.position ? ($out += "航班号", $line = 21) : "1" == order.tripType.position && ($out += "班次", 
            $line = 21), $out += '：</span><span class="lineblock width80">', $line = 21, $out += $escape(order.shiftNumber), 
            $out += "</span></label> <label>", $line = 22, "0" == order.tripType.position ? ($line = 22, 
            "0" == order.tripType.type ? ($out += "抵达时间", $line = 22) : ($out += "起飞时间", $line = 22), 
            $line = 22) : ($line = 22, "0" == order.tripType.type ? ($out += "到站时间", $line = 22) : ($out += "发车时间", 
            $line = 22), $line = 22), $out += "：", $line = 22, $out += $escape(order.shiftDate), 
            $out += " ", $line = 22, $out += $escape(order.shiftHour), $out += ":", $line = 22, 
            $out += $escape(order.shiftMinute), $out += "</label> </div> ", $line = 24, "1" == order.isRoundTrip && ($out += ' <div> <label class="lineblock width150">', 
            $line = 26, $out += $escape(order.roundTripType.name), $out += '</label> <label class="mar-r20">', 
            $line = 27, "0" == order.roundTripType.type ? ($out += "接", $line = 27) : "1" == order.roundTripType.type && ($out += "送", 
            $line = 27), $out += "团日期：", $line = 27, $out += $escape(order.roundTripTime), $out += '</label> <label class="mar-r20"><span class="lineblock width60 texta-r">', 
            $line = 28, "0" == order.roundTripType.position ? ($out += "航班号", $line = 28) : "1" == order.roundTripType.position && ($out += "班次", 
            $line = 28), $out += '：</span><span class="lineblock width80">', $line = 28, $out += $escape(order.roundShiftNumber), 
            $out += "</span></label> <label>", $line = 29, "0" == order.roundTripType.position ? ($line = 29, 
            "0" == order.roundTripType.type ? ($out += "抵达时间", $line = 29) : ($out += "起飞时间", 
            $line = 29), $line = 29) : ($line = 29, "0" == order.roundTripType.type ? ($out += "到站时间", 
            $line = 29) : ($out += "发车时间", $line = 29), $line = 29), $out += "：", $line = 29, 
            $out += $escape(order.roundShiftDate), $out += " ", $line = 29, $out += $escape(order.roundShiftHour), 
            $out += ":", $line = 29, $out += $escape(order.roundShiftMinute), $out += "</label> </div> ", 
            $line = 31), $out += ' </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">订单类型</h5> <label>', 
            $line = 35, "0" == order.priceType ? ($out += "包车", $line = 35) : ($out += "拼车", 
            $line = 35), $out += "</label> <label>", $line = 36, $out += $escape(order.price), 
            $out += "元", $line = 36, "1" == order.priceType && ($out += "/座", $line = 36), $out += '</label> <input class="T-radio T-carpooling ace" name="form-field-radio" type="hidden" ', 
            $line = 37, "1" == order.priceType && ($out += "checked", $line = 37), $out += '> <input type="hidden" name="carpoolingPrice" value="', 
            $line = 38, $out += $escape(order.price), $out += '"> <input type="hidden" name="charterPrice" value="', 
            $line = 39, $out += $escape(order.price), $out += '"> <input class="ace T-isRoundTrip" name="form-field-checkbox" type="hidden" ', 
            $line = 40, 1 == order.isRoundTrip && ($out += "checked", $line = 40), $out += '> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">备注</h5> <label>', 
            $line = 44, $out += $escape(order.orderRemark), $out += '</label> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">其他费用</h5> ', 
            $line = 48, $each(order.otherFeeList, function(rs) {
                $out += ' <div> <label class="lineblock width150">金额：', $line = 50, $out += $escape(rs.fee), 
                $out += '<input class="T-clacFee" name="fee" type="hidden" value="', $line = 50, 
                $out += $escape(rs.fee), $out += '"></label> <label> 备注：', $line = 51, $out += $escape(rs.remark), 
                $out += "</label> </div> ", $line = 53;
            }), $out += ' </div> <div class="T-touristList"> <table class="table table-striped table-bordered table-hover table-text-center va-middle"> <tr> <th>小组序号</th> <th>团号</th> <th>人数</th> <th>联系人姓名</th> <th>联系人电话</th> <th>现收</th> <th>上车点</th> <th>目的地</th> <th>备注</th> ', 
            $line = 67, "1" == order.isShowArrangeInfoColumn && ($out += " <th>派车信息</th> ", 
            $line = 69, order.isRoundTrip && ($out += " <th>返程派车信息</th> ", $line = 71), $out += " ", 
            $line = 72), $out += " </tr> ", $line = 74, order.touristGroupList.length && ($out += " ", 
            $line = 75, $each(order.touristGroupList, function(group, i) {
                $out += ' <tr class="T-sort" data-index="', $line = 76, $out += $escape(group.touristGroupMemberList.length), 
                $out += '" data-id="', $line = 76, $out += $escape(group.id), $out += '" data-content="', 
                $line = 76, $out += $escape($helpers.stringify(group)), $out += '" data-adultcount="', 
                $line = 76, $out += $escape(group.adultCount), $out += '" data-childCount="', $line = 76, 
                $out += $escape(group.childCount), $out += '"> <td rowspan="', $line = 77, $out += $escape(group.touristGroupMemberList.length), 
                $out += '"></td> <td rowspan="', $line = 78, $out += $escape(group.touristGroupMemberList.length), 
                $out += '">', $line = 78, $out += $escape(group.tripNumber), $out += '</td> <td rowspan="', 
                $line = 79, $out += $escape(group.touristGroupMemberList.length), $out += '">', 
                $line = 79, $out += $escape(group.adultCount), $out += "大", $line = 79, $out += $escape(group.childCount), 
                $out += "小</td> ", $line = 80, group.touristGroupMemberList.length ? ($out += " ", 
                $line = 81, $each(group.touristGroupMemberList, function(rs, index) {
                    $out += " ", $line = 82, 0 == index && ($out += " <td>", $line = 83, $out += $escape(rs.name), 
                    $out += "</td> <td>", $line = 84, $out += $escape(rs.mobileNumber), $out += "</td> ", 
                    $line = 85), $out += " ", $line = 86;
                }), $out += " ", $line = 87) : ($out += " <td></td> <td></td> ", $line = 90), $out += ' <td class="has-div" rowspan="', 
                $line = 91, $out += $escape(group.touristGroupMemberList.length), $out += '"> <div class="', 
                $line = 92, 1 == group.touristGroupMemberList.length && ($out += "td-div", $line = 92), 
                $out += '" ', $line = 92, group.touristGroupMemberList.length > 1 && ($out += 'style="padding-bottom:', 
                $line = 92, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), $out += 'px"', 
                $line = 92), $out += ">", $line = 92, $out += $escape(group.driverIncomeMoney), 
                $out += "</div> ", $line = 93, "1" == group.isRoundTrip && ($out += ' <div class="border-top1 ', 
                $line = 94, 1 == group.touristGroupMemberList.length && ($out += "td-div", $line = 94), 
                $out += '" ', $line = 94, group.touristGroupMemberList.length > 1 && ($out += 'style="padding-top:', 
                $line = 94, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), $out += 'px"', 
                $line = 94), $out += ">", $line = 94, $out += $escape(group.roundDriverIncomeMoney), 
                $out += "</div> ", $line = 95), $out += ' </td> <td class="has-div" rowspan="', 
                $line = 97, $out += $escape(group.touristGroupMemberList.length), $out += '"> <div class="', 
                $line = 98, 1 == group.touristGroupMemberList.length && ($out += "td-div", $line = 98), 
                $out += '" ', $line = 98, group.touristGroupMemberList.length > 1 && ($out += 'style="padding-bottom:', 
                $line = 98, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), $out += 'px"', 
                $line = 98), $out += "> ", $line = 99, "0" == order.tripType.type ? ($line = 99, 
                "0" == order.tripType.position ? ($out += "机场", $line = 99) : ($out += "火车站", $line = 99), 
                $line = 99) : ($line = 99, $out += $escape(group.hotelName), $line = 99), $out += " </div> ", 
                $line = 101, "1" == order.isRoundTrip && ($out += ' <div class="border-top1 ', $line = 102, 
                1 == group.touristGroupMemberList.length && ($out += "td-div", $line = 102), $out += '" ', 
                $line = 102, group.touristGroupMemberList.length > 1 && ($out += 'style="padding-top:', 
                $line = 102, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), 
                $out += 'px"', $line = 102), $out += "> ", $line = 103, "0" == order.roundTripType.type ? ($line = 103, 
                $out += $escape(group.roundHotelName), $line = 103) : ($line = 103, "0" == order.roundTripType.position ? ($out += "机场", 
                $line = 103) : ($out += "火车站", $line = 103), $line = 103), $out += " </div> ", $line = 105), 
                $out += ' </td> <td class="has-div" rowspan="', $line = 107, $out += $escape(group.touristGroupMemberList.length), 
                $out += '"> <div class="', $line = 108, 1 == group.touristGroupMemberList.length && ($out += "td-div", 
                $line = 108), $out += '" ', $line = 108, group.touristGroupMemberList.length > 1 && ($out += 'style="padding-bottom:', 
                $line = 108, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), 
                $out += 'px"', $line = 108), $out += "> ", $line = 109, "0" == order.tripType.type ? ($line = 109, 
                $out += $escape(group.hotelName), $line = 109) : ($line = 109, "0" == order.tripType.position ? ($out += "机场", 
                $line = 109) : ($out += "火车站", $line = 109), $line = 109), $out += " </div> ", $line = 111, 
                "1" == order.isRoundTrip && ($out += ' <div class="border-top1 ', $line = 112, 1 == group.touristGroupMemberList.length && ($out += "td-div", 
                $line = 112), $out += '" ', $line = 112, group.touristGroupMemberList.length > 1 && ($out += 'style="padding-top:', 
                $line = 112, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), 
                $out += 'px"', $line = 112), $out += "> ", $line = 113, "0" == order.roundTripType.type ? ($line = 113, 
                "0" == order.roundTripType.roundPosition ? ($out += "机场", $line = 113) : ($out += "火车站", 
                $line = 113), $line = 113) : ($line = 113, $out += $escape(group.roundHotelName), 
                $line = 113), $out += " </div> ", $line = 115), $out += ' </td> <td class="has-div" rowspan="', 
                $line = 117, $out += $escape(group.touristGroupMemberList.length), $out += '" style="width: 300px; max-width: 300px;"> <div class="T-ctrl-tip remark-div ', 
                $line = 118, 1 == group.touristGroupMemberList.length && ($out += "td-div", $line = 118), 
                $out += '" ', $line = 118, group.touristGroupMemberList.length > 1 && ($out += 'style="padding-bottom:', 
                $line = 118, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), 
                $out += "px;", $line = 118), $out += '" title="', $line = 118, $out += $escape(group.remark), 
                $out += '"> <span style="white-space: nowrap;">', $line = 119, group.remark ? ($line = 119, 
                $out += $escape(group.remark), $line = 119) : ($out += "&nbsp;", $line = 119), $out += "</span> </div> ", 
                $line = 121, "1" == order.isRoundTrip && ($out += ' <div class="T-ctrl-tip remark-div border-top1 ', 
                $line = 122, 1 == group.touristGroupMemberList.length && ($out += "td-div", $line = 122), 
                $out += '" ', $line = 122, group.touristGroupMemberList.length > 1 && ($out += 'style="padding-top:', 
                $line = 122, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), 
                $out += 'px"', $line = 122), $out += ' title="', $line = 122, $out += $escape(group.roundRemark), 
                $out += '"> <span style="white-space: nowrap;">', $line = 123, group.roundRemark ? ($line = 123, 
                $out += $escape(group.roundRemark), $line = 123) : ($out += "&nbsp;", $line = 123), 
                $out += "</span> </div> ", $line = 125), $out += " </td> ", $line = 127, "1" == order.isShowArrangeInfoColumn && ($out += " ", 
                $line = 128, 0 == i && "0" == order.priceType ? ($out += ' <td rowspan="', $line = 129, 
                $out += $escape(order.sumMemberCount), $out += '" class="has-div"> ', $line = 130, 
                order.arrangeInfoList.length ? ($out += " ", $line = 131, $each(order.arrangeInfoList, function(arrangeInfo, i) {
                    $out += ' <div class="', $line = 132, i > 0 && ($out += "border-top1", $line = 132), 
                    $out += ' td-div"> ', $line = 133, $out += $escape(arrangeInfo.driverName), $out += "<br>", 
                    $line = 133, $out += $escape(arrangeInfo.driverMobileNumber), $out += "<br>", $line = 133, 
                    $out += $escape(arrangeInfo.licenceNumber), $out += " </div> ", $line = 135;
                }), $out += " ", $line = 136) : ($out += ' <span class="red">暂未派车</span> ', $line = 138), 
                $out += " </td> ", $line = 140, order.isRoundTrip && ($out += ' <td rowspan="', 
                $line = 141, $out += $escape(order.sumMemberCount), $out += '" class="has-div"> ', 
                $line = 142, order.roundArrangeInfoList.length ? ($out += " ", $line = 143, $each(order.roundArrangeInfoList, function(roundArrangeInfo, i) {
                    $out += ' <div class="', $line = 144, i > 0 && ($out += "border-top1", $line = 144), 
                    $out += ' td-div"> ', $line = 145, $out += $escape(roundArrangeInfo.driverName), 
                    $out += "<br>", $line = 145, $out += $escape(roundArrangeInfo.driverMobileNumber), 
                    $out += "<br>", $line = 145, $out += $escape(roundArrangeInfo.licenceNumber), $out += " </div> ", 
                    $line = 147;
                }), $out += " ", $line = 148) : ($out += ' <span class="red">暂未派车</span> ', $line = 150), 
                $out += " </td> ", $line = 152), $out += " ", $line = 153) : "1" == order.priceType && ($out += ' <td rowspan="', 
                $line = 154, $out += $escape(group.touristGroupMemberList.length), $out += '" class="has-div"> ', 
                $line = 155, group.arrangeInfoList.length ? ($out += " ", $line = 156, $each(group.arrangeInfoList, function(arrangeInfo, i) {
                    $out += ' <div class="', $line = 157, i > 0 && ($out += "border-top1", $line = 157), 
                    $out += ' td-div">', $line = 157, $out += $escape(arrangeInfo.driverName), $out += "<br>", 
                    $line = 157, $out += $escape(arrangeInfo.driverMobileNumber), $out += "<br>", $line = 157, 
                    $out += $escape(arrangeInfo.licenceNumber), $out += "</div> ", $line = 158;
                }), $out += " ", $line = 159) : ($out += ' <span class="red">暂未派车</span> ', $line = 161), 
                $out += " </td> ", $line = 163, order.isRoundTrip && ($out += ' <td rowspan="', 
                $line = 164, $out += $escape(group.touristGroupMemberList.length), $out += '" class="has-div"> ', 
                $line = 165, group.roundArrangeInfoList.length ? ($out += " ", $line = 166, $each(group.roundArrangeInfoList, function(roundArrangeInfo, i) {
                    $out += ' <div class="', $line = 167, i > 0 && ($out += "border-top1", $line = 167), 
                    $out += ' td-div">', $line = 167, $out += $escape(roundArrangeInfo.driverName), 
                    $out += "<br>", $line = 167, $out += $escape(roundArrangeInfo.driverMobileNumber), 
                    $out += "<br>", $line = 167, $out += $escape(roundArrangeInfo.licenceNumber), $out += "</div> ", 
                    $line = 168;
                }), $out += " ", $line = 169) : ($out += ' <span class="red">暂未派车</span> ', $line = 171), 
                $out += " </td> ", $line = 173), $out += " ", $line = 174), $out += " ", $line = 175), 
                $out += " </tr> ", $line = 177, $each(group.touristGroupMemberList, function(rs, index) {
                    $out += " ", $line = 178, index > 0 && ($out += " <tr> <td>", $line = 180, $out += $escape(rs.name), 
                    $out += "</td> <td>", $line = 181, $out += $escape(rs.mobileNumber), $out += "</td> </tr> ", 
                    $line = 183), $out += " ", $line = 184;
                }), $out += " ", $line = 185;
            }), $out += " ", $line = 186), $out += ' </table> <div class="col-xs-12"> <p>人数统计：<span class="T-allPeopleText">0大0小</span></p> <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-updateOrder container-fulid col-xs-12">\r\n    <div class="col-xs-12 padding-b10 mar-b10 clearBoth border-bottom-solid">\r\n        <label class="mar-r20">订单状态：<span class="orange">{{order.orderStatus | getOrderStatusText}}</span></label>\r\n        <label class="mar-r20">商家申请价：<span class="{{if order.orderStatus == \'1\' || order.orderStatus == \'3\'}}textd-line color-999{{else}}orange{{/if}}">￥{{order.needPayMoney}}</span></label>\r\n        {{if order.orderStatus == \'1\' || order.orderStatus == \'3\'}}<label class="mar-r20">回复价：<span class="orange">￥{{order.comfirmNeedPayMoney}}</span>{{if !!order.confirmNeedPayMoneyRemark}}(备注：{{order.confirmNeedPayMoneyRemark}}){{/if}}</label>{{/if}}\r\n        <label>总现收：￥{{order.driverIncomeMoney}}</label>\r\n        <div class="inline pull-right">\r\n            <label class="mar-r20">下单时间：<span>{{order.createTime}}</span></label>\r\n            <label class="mar-r20">订单号：<span>{{order.orderNumber}}</span></label>\r\n            <!-- <label class="mar-r20">商家：<span>{{order.customerName}}</span></label> -->\r\n        </div>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">操作记录<a class="T-viewOperationRecord lineblock mar-l-20 pointer font-s-12">查看&gt;</a></h5>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">订单信息</h5>\r\n        <div>\r\n            <label class="lineblock width150">{{order.tripType.name}}</label>\r\n            <label class="mar-r20">{{if order.tripType.type == \'0\'}}接{{else if order.tripType.type == \'1\'}}送{{/if}}团日期：{{order.tripTime}}</label>\r\n            <label class="mar-r20"><span class="lineblock width60 texta-r">{{if order.tripType.position == \'0\'}}航班号{{else if order.tripType.position == \'1\'}}班次{{/if}}：</span><span class="lineblock width80">{{order.shiftNumber}}</span></label>\r\n            <label>{{if order.tripType.position == \'0\'}}{{if order.tripType.type == \'0\'}}抵达时间{{else}}起飞时间{{/if}}{{else}}{{if order.tripType.type == \'0\'}}到站时间{{else}}发车时间{{/if}}{{/if}}：{{order.shiftDate}} {{order.shiftHour}}:{{order.shiftMinute}}</label>\r\n        </div>\r\n        {{if order.isRoundTrip == \'1\'}}\r\n        <div>\r\n            <label class="lineblock width150">{{order.roundTripType.name}}</label>\r\n            <label class="mar-r20">{{if order.roundTripType.type == \'0\'}}接{{else if order.roundTripType.type == \'1\'}}送{{/if}}团日期：{{order.roundTripTime}}</label>\r\n            <label class="mar-r20"><span class="lineblock width60 texta-r">{{if order.roundTripType.position == \'0\'}}航班号{{else if order.roundTripType.position == \'1\'}}班次{{/if}}：</span><span class="lineblock width80">{{order.roundShiftNumber}}</span></label>\r\n            <label>{{if order.roundTripType.position == \'0\'}}{{if order.roundTripType.type == \'0\'}}抵达时间{{else}}起飞时间{{/if}}{{else}}{{if order.roundTripType.type == \'0\'}}到站时间{{else}}发车时间{{/if}}{{/if}}：{{order.roundShiftDate}} {{order.roundShiftHour}}:{{order.roundShiftMinute}}</label>\r\n        </div>\r\n        {{/if}}\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">订单类型</h5>\r\n        <label>{{if order.priceType == \'0\'}}包车{{else}}拼车{{/if}}</label>\r\n        <label>{{order.price}}元{{if order.priceType == \'1\'}}/座{{/if}}</label>\r\n        <input class="T-radio T-carpooling ace" name="form-field-radio" type="hidden" {{if order.priceType == \'1\'}}checked{{/if}}>\r\n        <input type="hidden" name="carpoolingPrice" value="{{order.price}}">\r\n        <input type="hidden" name="charterPrice" value="{{order.price}}">\r\n        <input class="ace T-isRoundTrip" name="form-field-checkbox" type="hidden" {{if order.isRoundTrip == 1}}checked{{/if}}>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">备注</h5>\r\n        <label>{{order.orderRemark}}</label>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">其他费用</h5>\r\n        {{each order.otherFeeList as rs index}}\r\n        <div>\r\n            <label class="lineblock width150">金额：{{rs.fee}}<input class="T-clacFee" name="fee" type="hidden" value="{{rs.fee}}"></label>\r\n            <label> 备注：{{rs.remark}}</label>\r\n        </div>\r\n        {{/each}}\r\n    </div>\r\n    <div class="T-touristList">\r\n        <table class="table table-striped table-bordered table-hover table-text-center va-middle">\r\n            <tr>\r\n                <th>小组序号</th>\r\n                <th>团号</th>\r\n                <th>人数</th>\r\n                <th>联系人姓名</th>\r\n                <th>联系人电话</th>\r\n                <th>现收</th>\r\n                <th>上车点</th>\r\n                <th>目的地</th>\r\n                <th>备注</th>\r\n                {{if order.isShowArrangeInfoColumn == \'1\'}}\r\n                <th>派车信息</th>\r\n                {{if !!order.isRoundTrip}}\r\n                <th>返程派车信息</th>\r\n                {{/if}}\r\n                {{/if}}\r\n            </tr>\r\n            {{if order.touristGroupList.length}}\r\n            {{each order.touristGroupList as group i}}\r\n            <tr class="T-sort" data-index="{{group.touristGroupMemberList.length}}" data-id="{{group.id}}" data-content="{{group | stringify}}" data-adultcount="{{group.adultCount}}" data-childCount="{{group.childCount}}">\r\n                <td rowspan="{{group.touristGroupMemberList.length}}"></td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">{{group.tripNumber}}</td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">{{group.adultCount}}大{{group.childCount}}小</td>\r\n                {{if group.touristGroupMemberList.length}}\r\n                {{each group.touristGroupMemberList as rs index}}\r\n                {{if index == 0}}\r\n                <td>{{rs.name}}</td>\r\n                <td>{{rs.mobileNumber}}</td>\r\n                {{/if}}\r\n                {{/each}}\r\n                {{else}}\r\n                <td></td>\r\n                <td></td>\r\n                {{/if}}\r\n                <td class="has-div" rowspan="{{group.touristGroupMemberList.length}}">\r\n                    <div class="{{if group.touristGroupMemberList.length == 1}}td-div{{/if}}" {{if group.touristGroupMemberList.length > 1}}style="padding-bottom:{{group.touristGroupMemberList.length*35/4-9}}px"{{/if}}>{{group.driverIncomeMoney}}</div>\r\n                    {{if group.isRoundTrip == \'1\'}}\r\n                    <div class="border-top1 {{if group.touristGroupMemberList.length == 1}}td-div{{/if}}" {{if group.touristGroupMemberList.length > 1}}style="padding-top:{{group.touristGroupMemberList.length*35/4-9}}px"{{/if}}>{{group.roundDriverIncomeMoney}}</div>\r\n                    {{/if}}\r\n                </td>\r\n                <td class="has-div" rowspan="{{group.touristGroupMemberList.length}}">\r\n                    <div class="{{if group.touristGroupMemberList.length == 1}}td-div{{/if}}" {{if group.touristGroupMemberList.length > 1}}style="padding-bottom:{{group.touristGroupMemberList.length*35/4-9}}px"{{/if}}>\r\n                        {{if order.tripType.type == \'0\'}}{{if order.tripType.position == \'0\'}}机场{{else}}火车站{{/if}}{{else}}{{group.hotelName}}{{/if}}\r\n                    </div>\r\n                    {{if order.isRoundTrip == \'1\'}}\r\n                    <div class="border-top1 {{if group.touristGroupMemberList.length == 1}}td-div{{/if}}" {{if group.touristGroupMemberList.length > 1}}style="padding-top:{{group.touristGroupMemberList.length*35/4-9}}px"{{/if}}>\r\n                        {{if order.roundTripType.type == \'0\'}}{{group.roundHotelName}}{{else}}{{if order.roundTripType.position == \'0\'}}机场{{else}}火车站{{/if}}{{/if}}\r\n                    </div>\r\n                    {{/if}}\r\n                </td>\r\n                <td class="has-div" rowspan="{{group.touristGroupMemberList.length}}">\r\n                    <div class="{{if group.touristGroupMemberList.length == 1}}td-div{{/if}}" {{if group.touristGroupMemberList.length > 1}}style="padding-bottom:{{group.touristGroupMemberList.length*35/4-9}}px"{{/if}}>\r\n                        {{if order.tripType.type == \'0\'}}{{group.hotelName}}{{else}}{{if order.tripType.position == \'0\'}}机场{{else}}火车站{{/if}}{{/if}}\r\n                    </div>\r\n                    {{if order.isRoundTrip == \'1\'}}\r\n                    <div class="border-top1 {{if group.touristGroupMemberList.length == 1}}td-div{{/if}}" {{if group.touristGroupMemberList.length > 1}}style="padding-top:{{group.touristGroupMemberList.length*35/4-9}}px"{{/if}}>\r\n                        {{if order.roundTripType.type == \'0\'}}{{if order.roundTripType.roundPosition == \'0\'}}机场{{else}}火车站{{/if}}{{else}}{{group.roundHotelName}}{{/if}}\r\n                    </div>\r\n                    {{/if}}\r\n                </td>\r\n                <td class="has-div" rowspan="{{group.touristGroupMemberList.length}}" style="width: 300px; max-width: 300px;">\r\n                    <div class="T-ctrl-tip remark-div {{if group.touristGroupMemberList.length == 1}}td-div{{/if}}" {{if group.touristGroupMemberList.length > 1}}style="padding-bottom:{{group.touristGroupMemberList.length*35/4-9}}px;{{/if}}" title="{{group.remark}}">\r\n                        <span style="white-space: nowrap;">{{if !!group.remark}}{{group.remark}}{{else}}&nbsp;{{/if}}</span>\r\n                    </div>\r\n                    {{if order.isRoundTrip == \'1\'}}\r\n                    <div class="T-ctrl-tip remark-div border-top1 {{if group.touristGroupMemberList.length == 1}}td-div{{/if}}" {{if group.touristGroupMemberList.length > 1}}style="padding-top:{{group.touristGroupMemberList.length*35/4-9}}px"{{/if}} title="{{group.roundRemark}}">\r\n                        <span style="white-space: nowrap;">{{if !!group.roundRemark}}{{group.roundRemark}}{{else}}&nbsp;{{/if}}</span>\r\n                    </div>\r\n                    {{/if}}\r\n                </td>\r\n                {{if order.isShowArrangeInfoColumn == \'1\'}}\r\n                    {{if i == 0  && order.priceType == \'0\'}}\r\n                        <td rowspan="{{order.sumMemberCount}}" class="has-div">\r\n                        {{if order.arrangeInfoList.length}}\r\n                        {{each order.arrangeInfoList as arrangeInfo i}}\r\n                        <div class="{{if i > 0}}border-top1{{/if}} td-div">\r\n                            {{arrangeInfo.driverName}}<br>{{arrangeInfo.driverMobileNumber}}<br>{{arrangeInfo.licenceNumber}}\r\n                        </div>\r\n                        {{/each}}\r\n                        {{else}}\r\n                        <span class="red">暂未派车</span>\r\n                        {{/if}}\r\n                        </td>\r\n                        {{if !!order.isRoundTrip}}\r\n                        <td rowspan="{{order.sumMemberCount}}" class="has-div">\r\n                        {{if order.roundArrangeInfoList.length}}\r\n                        {{each order.roundArrangeInfoList as roundArrangeInfo i}}\r\n                        <div class="{{if i > 0}}border-top1{{/if}} td-div">\r\n                            {{roundArrangeInfo.driverName}}<br>{{roundArrangeInfo.driverMobileNumber}}<br>{{roundArrangeInfo.licenceNumber}}\r\n                        </div>\r\n                        {{/each}}\r\n                        {{else}}\r\n                        <span class="red">暂未派车</span>\r\n                        {{/if}}\r\n                        </td>\r\n                        {{/if}}\r\n                    {{else if order.priceType == \'1\'}}\r\n                        <td rowspan="{{group.touristGroupMemberList.length}}" class="has-div">\r\n                        {{if group.arrangeInfoList.length}}\r\n                            {{each group.arrangeInfoList as arrangeInfo i}}\r\n                                <div class="{{if i > 0}}border-top1{{/if}} td-div">{{arrangeInfo.driverName}}<br>{{arrangeInfo.driverMobileNumber}}<br>{{arrangeInfo.licenceNumber}}</div>\r\n                            {{/each}}\r\n                        {{else}}\r\n                        <span class="red">暂未派车</span>\r\n                        {{/if}}\r\n                        </td>\r\n                        {{if !!order.isRoundTrip}}\r\n                        <td rowspan="{{group.touristGroupMemberList.length}}" class="has-div">\r\n                        {{if group.roundArrangeInfoList.length}}\r\n                            {{each group.roundArrangeInfoList as roundArrangeInfo i}}\r\n                                <div class="{{if i > 0}}border-top1{{/if}} td-div">{{roundArrangeInfo.driverName}}<br>{{roundArrangeInfo.driverMobileNumber}}<br>{{roundArrangeInfo.licenceNumber}}</div>\r\n                            {{/each}}\r\n                        {{else}}\r\n                        <span class="red">暂未派车</span>\r\n                        {{/if}}\r\n                        </td>\r\n                        {{/if}}\r\n                    {{/if}}\r\n                {{/if}}\r\n            </tr>\r\n            {{each group.touristGroupMemberList as rs index}}\r\n                {{if index > 0}}\r\n                <tr>\r\n                    <td>{{rs.name}}</td>\r\n                    <td>{{rs.mobileNumber}}</td>\r\n                </tr>\r\n                {{/if}}\r\n            {{/each}}\r\n            {{/each}}\r\n            {{/if}}\r\n        </table>\r\n        <div class="col-xs-12">\r\n            <p>人数统计：<span class="T-allPeopleText">0大0小</span></p>\r\n            <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});