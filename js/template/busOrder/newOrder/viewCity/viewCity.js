/*TMODJS:{"debug":true,"version":22,"md5":"509478320249503c483ef65b030fa307"}*/
define(function(require) {
    return require("../../../template")("customer/newOrder/viewCity/viewCity", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, order = $data.order, $each = $utils.$each, $out = ($data.rs, 
            $data.index, $data.group, $data.i, "");
            return $out += '<div class="T-updateOrder container-fulid col-xs-12"> <div class="col-xs-12 padding-b10 mar-b10 clearBoth border-bottom-solid"> <label class="mar-r20">订单状态：<span class="orange">', 
            $line = 3, $out += $escape($helpers.getOrderStatusText(order.orderStatus)), $out += '</span></label> <label class="mar-r20">商家申请价：<span class="', 
            $line = 4, "1" == order.orderStatus || "3" == order.orderStatus ? ($out += "textd-line color-999", 
            $line = 4) : ($out += "orange", $line = 4), $out += '">￥', $line = 4, $out += $escape(order.needPayMoney), 
            $out += "</span></label> ", $line = 5, ("1" == order.orderStatus || "3" == order.orderStatus) && ($out += '<label class="mar-r20">回复价：<span class="orange">￥', 
            $line = 5, $out += $escape(order.comfirmNeedPayMoney), $out += "</span></label>", 
            $line = 5), $out += " <label>总现收：￥", $line = 6, $out += $escape(order.driverIncomeMoney), 
            $out += '</label> <div class="inline pull-right"> <label class="mar-r20">下单时间：<span>', 
            $line = 8, $out += $escape(order.createTime), $out += '</span></label> <label class="mar-r20">订单号：<span>', 
            $line = 9, $out += $escape(order.orderNumber), $out += '</span></label> <!-- <label class="mar-r20">商家：<span>', 
            $line = 10, $out += $escape(order.customerName), $out += '</span></label> --> </div> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">订单信息</h5> <div> <label class="mar-r30">', 
            $line = 16, $out += $escape(order.tripType.name), $out += '</label> <label class="mar-r30">任务日期：', 
            $line = 17, $out += $escape(order.tripTime), $out += '</label> <label class="mar-r30">目的地：', 
            $line = 18, $out += $escape(order.togetherPosition), $out += '</label> <label class="mar-r30">导游：', 
            $line = 19, $out += $escape(order.guideName), $out += '</label> <label class="mar-r30">导游电话：', 
            $line = 20, $out += $escape(order.guideMobileNumber), $out += "</label> <label>集合时间：", 
            $line = 21, $out += $escape(order.togetherHour), $out += ":", $line = 21, $out += $escape(order.togetherMinute), 
            $out += '</label> </div> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">订单类型</h5> <label>', 
            $line = 27, "0" == order.priceType ? ($out += "包车", $line = 27) : ($out += "拼车", 
            $line = 27), $out += "</label> <label>", $line = 28, $out += $escape(order.price), 
            $out += "元", $line = 28, "1" == order.priceType && ($out += "/座", $line = 28), $out += '</label> <input class="T-radio T-carpooling ace" name="form-field-radio" type="hidden" ', 
            $line = 29, "1" == order.priceType && ($out += "checked", $line = 29), $out += '> <input type="hidden" name="carpoolingPrice" value="', 
            $line = 30, $out += $escape(order.price), $out += '"> <input type="hidden" name="charterPrice" value="', 
            $line = 31, $out += $escape(order.price), $out += '"> <input class="ace T-isRoundTrip" name="form-field-checkbox" type="hidden" ', 
            $line = 32, 1 == order.isRoundTrip && ($out += "checked", $line = 32), $out += '> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">备注</h5> <label>', 
            $line = 36, $out += $escape(order.orderRemark), $out += '</label> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">其他费用</h5> ', 
            $line = 40, $each(order.otherFeeList, function(rs) {
                $out += ' <div> <label class="lineblock width150">金额：', $line = 42, $out += $escape(rs.fee), 
                $out += '<input class="T-clacFee" name="fee" type="hidden" value="', $line = 42, 
                $out += $escape(rs.fee), $out += '"></label> <label> 备注：', $line = 43, $out += $escape(rs.remark), 
                $out += "</label> </div> ", $line = 45;
            }), $out += ' </div> <div class="T-touristList"> <table class="table table-striped table-bordered table-hover table-text-center va-middle"> <tr> <th>小组序号</th> <th>团号</th> <th>人数</th> <th>现收</th> <th>联系人姓名</th> <th>联系人电话</th> <th>入住酒店</th> <th>酒店地址</th> <th>备注</th> ', 
            $line = 59, "1" == order.isShowArrangeInfoColumn && ($out += " <th>派车信息</th> ", 
            $line = 61), $out += " </tr> ", $line = 63, order.touristGroupList.length && ($out += " ", 
            $line = 64, $each(order.touristGroupList, function(group, i) {
                $out += ' <tr class="T-sort" data-index="', $line = 65, $out += $escape(group.touristGroupMemberList.length), 
                $out += '" data-id="', $line = 65, $out += $escape(group.id), $out += '" data-content="', 
                $line = 65, $out += $escape($helpers.stringify(group)), $out += '" data-adultcount="', 
                $line = 65, $out += $escape(group.adultCount), $out += '" data-childCount="', $line = 65, 
                $out += $escape(group.childCount), $out += '"> <td rowspan="', $line = 66, $out += $escape(group.touristGroupMemberList.length), 
                $out += '"></td> <td rowspan="', $line = 67, $out += $escape(group.touristGroupMemberList.length), 
                $out += '">', $line = 67, $out += $escape(group.tripNumber), $out += '</td> <td rowspan="', 
                $line = 68, $out += $escape(group.touristGroupMemberList.length), $out += '">', 
                $line = 68, $out += $escape(group.adultCount), $out += "大", $line = 68, $out += $escape(group.childCount), 
                $out += '小</td> <td rowspan="', $line = 69, $out += $escape(group.touristGroupMemberList.length), 
                $out += '">', $line = 69, $out += $escape(group.driverIncomeMoney), $out += "</td> ", 
                $line = 70, group.touristGroupMemberList.length ? ($out += " ", $line = 71, $each(group.touristGroupMemberList, function(rs, index) {
                    $out += " ", $line = 72, 0 == index && ($out += " <td>", $line = 73, $out += $escape(rs.name), 
                    $out += "</td> <td>", $line = 74, $out += $escape(rs.mobileNumber), $out += "</td> ", 
                    $line = 75), $out += " ", $line = 76;
                }), $out += " ", $line = 77) : ($out += " <td></td> <td></td> ", $line = 80), $out += ' <td rowspan="', 
                $line = 81, $out += $escape(group.touristGroupMemberList.length), $out += '"> ', 
                $line = 82, $out += $escape(group.hotelName), $out += ' </td> <td rowspan="', $line = 84, 
                $out += $escape(group.touristGroupMemberList.length), $out += '"> ', $line = 85, 
                $out += $escape(group.hotelAddress), $out += ' </td> <td rowspan="', $line = 87, 
                $out += $escape(group.touristGroupMemberList.length), $out += '" style="width: 300px; max-width: 300px;"> <div class="T-ctrl-tip remark-div ', 
                $line = 88, 1 == group.touristGroupMemberList.length && ($out += "td-div", $line = 88), 
                $out += '" ', $line = 88, group.touristGroupMemberList.length > 1 && ($out += 'style="padding-bottom:', 
                $line = 88, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), $out += "px;", 
                $line = 88), $out += '" title="', $line = 88, $out += $escape(group.remark), $out += '"> <span style="white-space: nowrap;">', 
                $line = 89, group.remark ? ($line = 89, $out += $escape(group.remark), $line = 89) : ($out += "&nbsp;", 
                $line = 89), $out += "</span> </div> </td> ", $line = 92, "1" == order.isShowArrangeInfoColumn && ($out += " ", 
                $line = 93, 0 == i && "0" == order.priceType ? ($out += ' <td rowspan="', $line = 94, 
                $out += $escape(order.sumMemberCount), $out += '">', $line = 94, order.arrangeInfo ? ($line = 94, 
                $out += $escape(order.arrangeInfo.driverName), $out += "<br>", $line = 94, $out += $escape(order.arrangeInfo.driverMobileNumber), 
                $out += "<br>", $line = 94, $out += $escape(order.arrangeInfo.licenceNumber), $line = 94) : ($out += '<span class="red">暂未派车</span>', 
                $line = 94), $out += "</td> ", $line = 95, order.isRoundTrip && ($out += ' <td rowspan="', 
                $line = 96, $out += $escape(order.sumMemberCount), $out += '">', $line = 96, order.roundArrangeInfo ? ($line = 96, 
                $out += $escape(order.roundArrangeInfo.driverName), $out += "<br>", $line = 96, 
                $out += $escape(order.roundArrangeInfo.driverMobileNumber), $out += "<br>", $line = 96, 
                $out += $escape(order.roundArrangeInfo.licenceNumber), $line = 96) : ($out += '<span class="red">暂未派车</span>', 
                $line = 96), $out += "</td> ", $line = 97), $out += " ", $line = 98) : "1" == order.priceType && ($out += ' <td rowspan="', 
                $line = 99, $out += $escape(group.touristGroupMemberList.length), $out += '">', 
                $line = 99, group.arrangeInfo ? ($line = 99, $out += $escape(group.arrangeInfo.driverName), 
                $out += "<br>", $line = 99, $out += $escape(group.arrangeInfo.driverMobileNumber), 
                $out += "<br>", $line = 99, $out += $escape(group.arrangeInfo.licenceNumber), $line = 99) : ($out += '<span class="red">暂未派车</span>', 
                $line = 99), $out += "</td> ", $line = 100, order.isRoundTrip && ($out += ' <td rowspan="', 
                $line = 101, $out += $escape(group.touristGroupMemberList.length), $out += '">', 
                $line = 101, group.roundArrangeInfo ? ($line = 101, $out += $escape(group.roundArrangeInfo.driverName), 
                $out += "<br>", $line = 101, $out += $escape(group.roundArrangeInfo.driverMobileNumber), 
                $out += "<br>", $line = 101, $out += $escape(group.roundArrangeInfo.licenceNumber), 
                $line = 101) : ($out += '<span class="red">暂未派车</span>', $line = 101), $out += "</td> ", 
                $line = 102), $out += " ", $line = 103), $out += " ", $line = 104), $out += " </tr> ", 
                $line = 106, $each(group.touristGroupMemberList, function(rs, index) {
                    $out += " ", $line = 107, index > 0 && ($out += " <tr> <td>", $line = 109, $out += $escape(rs.name), 
                    $out += "</td> <td>", $line = 110, $out += $escape(rs.mobileNumber), $out += "</td> </tr> ", 
                    $line = 112), $out += " ", $line = 113;
                }), $out += " ", $line = 114;
            }), $out += " ", $line = 115), $out += ' </table> <div class="col-xs-12"> <p>人数统计：<span class="T-allPeopleText">0大0小</span></p> <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-updateOrder container-fulid col-xs-12">\r\n    <div class="col-xs-12 padding-b10 mar-b10 clearBoth border-bottom-solid">\r\n        <label class="mar-r20">订单状态：<span class="orange">{{order.orderStatus | getOrderStatusText}}</span></label>\r\n        <label class="mar-r20">商家申请价：<span class="{{if order.orderStatus == \'1\' || order.orderStatus == \'3\'}}textd-line color-999{{else}}orange{{/if}}">￥{{order.needPayMoney}}</span></label>\r\n        {{if order.orderStatus == \'1\' || order.orderStatus == \'3\'}}<label class="mar-r20">回复价：<span class="orange">￥{{order.comfirmNeedPayMoney}}</span></label>{{/if}}\r\n        <label>总现收：￥{{order.driverIncomeMoney}}</label>\r\n        <div class="inline pull-right">\r\n            <label class="mar-r20">下单时间：<span>{{order.createTime}}</span></label>\r\n            <label class="mar-r20">订单号：<span>{{order.orderNumber}}</span></label>\r\n            <!-- <label class="mar-r20">商家：<span>{{order.customerName}}</span></label> -->\r\n        </div>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">订单信息</h5>\r\n        <div>\r\n            <label class="mar-r30">{{order.tripType.name}}</label>\r\n            <label class="mar-r30">任务日期：{{order.tripTime}}</label>\r\n            <label class="mar-r30">目的地：{{order.togetherPosition}}</label>\r\n            <label class="mar-r30">导游：{{order.guideName}}</label>\r\n            <label class="mar-r30">导游电话：{{order.guideMobileNumber}}</label>\r\n            <label>集合时间：{{order.togetherHour}}:{{order.togetherMinute}}</label>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">订单类型</h5>\r\n        <label>{{if order.priceType == \'0\'}}包车{{else}}拼车{{/if}}</label>\r\n        <label>{{order.price}}元{{if order.priceType == \'1\'}}/座{{/if}}</label>\r\n        <input class="T-radio T-carpooling ace" name="form-field-radio" type="hidden" {{if order.priceType == \'1\'}}checked{{/if}}>\r\n        <input type="hidden" name="carpoolingPrice" value="{{order.price}}">\r\n        <input type="hidden" name="charterPrice" value="{{order.price}}">\r\n        <input class="ace T-isRoundTrip" name="form-field-checkbox" type="hidden" {{if order.isRoundTrip == 1}}checked{{/if}}>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">备注</h5>\r\n        <label>{{order.orderRemark}}</label>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">其他费用</h5>\r\n        {{each order.otherFeeList as rs index}}\r\n        <div>\r\n            <label class="lineblock width150">金额：{{rs.fee}}<input class="T-clacFee" name="fee" type="hidden" value="{{rs.fee}}"></label>\r\n            <label> 备注：{{rs.remark}}</label>\r\n        </div>\r\n        {{/each}}\r\n    </div>\r\n    <div class="T-touristList">\r\n        <table class="table table-striped table-bordered table-hover table-text-center va-middle">\r\n            <tr>\r\n                <th>小组序号</th>\r\n                <th>团号</th>\r\n                <th>人数</th>\r\n                <th>现收</th>\r\n                <th>联系人姓名</th>\r\n                <th>联系人电话</th>\r\n                <th>入住酒店</th>\r\n                <th>酒店地址</th>\r\n                <th>备注</th>\r\n                {{if order.isShowArrangeInfoColumn == \'1\'}}\r\n                <th>派车信息</th>\r\n                {{/if}}\r\n            </tr>\r\n            {{if order.touristGroupList.length}}\r\n            {{each order.touristGroupList as group i}}\r\n            <tr class="T-sort" data-index="{{group.touristGroupMemberList.length}}" data-id="{{group.id}}" data-content="{{group | stringify}}" data-adultcount="{{group.adultCount}}" data-childCount="{{group.childCount}}">\r\n                <td rowspan="{{group.touristGroupMemberList.length}}"></td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">{{group.tripNumber}}</td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">{{group.adultCount}}大{{group.childCount}}小</td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">{{group.driverIncomeMoney}}</td>\r\n                {{if group.touristGroupMemberList.length}}\r\n                {{each group.touristGroupMemberList as rs index}}\r\n                {{if index == 0}}\r\n                <td>{{rs.name}}</td>\r\n                <td>{{rs.mobileNumber}}</td>\r\n                {{/if}}\r\n                {{/each}}\r\n                {{else}}\r\n                <td></td>\r\n                <td></td>\r\n                {{/if}}\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">\r\n                    {{group.hotelName}}\r\n                </td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">\r\n                    {{group.hotelAddress}}\r\n                </td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}" style="width: 300px; max-width: 300px;">\r\n                    <div class="T-ctrl-tip remark-div {{if group.touristGroupMemberList.length == 1}}td-div{{/if}}" {{if group.touristGroupMemberList.length > 1}}style="padding-bottom:{{group.touristGroupMemberList.length*35/4-9}}px;{{/if}}" title="{{group.remark}}">\r\n                        <span style="white-space: nowrap;">{{if !!group.remark}}{{group.remark}}{{else}}&nbsp;{{/if}}</span>\r\n                    </div>\r\n                </td>\r\n                {{if order.isShowArrangeInfoColumn == \'1\'}}\r\n                    {{if i == 0  && order.priceType == \'0\'}}\r\n                        <td rowspan="{{order.sumMemberCount}}">{{if !!order.arrangeInfo}}{{order.arrangeInfo.driverName}}<br>{{order.arrangeInfo.driverMobileNumber}}<br>{{order.arrangeInfo.licenceNumber}}{{else}}<span class="red">暂未派车</span>{{/if}}</td>\r\n                        {{if !!order.isRoundTrip}}\r\n                        <td rowspan="{{order.sumMemberCount}}">{{if !!order.roundArrangeInfo}}{{order.roundArrangeInfo.driverName}}<br>{{order.roundArrangeInfo.driverMobileNumber}}<br>{{order.roundArrangeInfo.licenceNumber}}{{else}}<span class="red">暂未派车</span>{{/if}}</td>\r\n                        {{/if}}\r\n                    {{else if order.priceType == \'1\'}}\r\n                        <td rowspan="{{group.touristGroupMemberList.length}}">{{if !!group.arrangeInfo}}{{group.arrangeInfo.driverName}}<br>{{group.arrangeInfo.driverMobileNumber}}<br>{{group.arrangeInfo.licenceNumber}}{{else}}<span class="red">暂未派车</span>{{/if}}</td>\r\n                        {{if !!order.isRoundTrip}}\r\n                        <td rowspan="{{group.touristGroupMemberList.length}}">{{if !!group.roundArrangeInfo}}{{group.roundArrangeInfo.driverName}}<br>{{group.roundArrangeInfo.driverMobileNumber}}<br>{{group.roundArrangeInfo.licenceNumber}}{{else}}<span class="red">暂未派车</span>{{/if}}</td>\r\n                        {{/if}}\r\n                    {{/if}}\r\n                {{/if}}\r\n            </tr>\r\n            {{each group.touristGroupMemberList as rs index}}\r\n                {{if index > 0}}\r\n                <tr>\r\n                    <td>{{rs.name}}</td>\r\n                    <td>{{rs.mobileNumber}}</td>\r\n                </tr>\r\n                {{/if}}\r\n            {{/each}}\r\n            {{/each}}\r\n            {{/if}}\r\n        </table>\r\n        <div class="col-xs-12">\r\n            <p>人数统计：<span class="T-allPeopleText">0大0小</span></p>\r\n            <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});