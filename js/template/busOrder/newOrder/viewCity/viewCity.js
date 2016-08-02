/*TMODJS:{"debug":true,"version":23,"md5":"04acd21819c23d204d3be2e671a6956a"}*/
define(function(require) {
    return require("../../../template")("busOrder/newOrder/viewCity/viewCity", function($data, $filename) {
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
            $line = 10, $out += $escape(order.customerName), $out += '</span></label> --> </div> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">操作记录<a class="T-viewOperationRecord lineblock mar-l-20 pointer font-s-12">查看&gt;</a></h5> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">订单信息</h5> <div> <label class="mar-r30">', 
            $line = 19, $out += $escape(order.tripType.name), $out += '</label> <label class="mar-r30">任务日期：', 
            $line = 20, $out += $escape(order.tripTime), $out += '</label> <label class="mar-r30">目的地：', 
            $line = 21, $out += $escape(order.togetherPosition), $out += '</label> <label class="mar-r30">导游：', 
            $line = 22, $out += $escape(order.guideName), $out += '</label> <label class="mar-r30">导游电话：', 
            $line = 23, $out += $escape(order.guideMobileNumber), $out += "</label> <label>集合时间：", 
            $line = 24, $out += $escape(order.togetherHour), $out += ":", $line = 24, $out += $escape(order.togetherMinute), 
            $out += '</label> </div> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">订单类型</h5> <label>', 
            $line = 30, "0" == order.priceType ? ($out += "包车", $line = 30) : ($out += "拼车", 
            $line = 30), $out += "</label> <label>", $line = 31, $out += $escape(order.price), 
            $out += "元", $line = 31, "1" == order.priceType && ($out += "/座", $line = 31), $out += '</label> <input class="T-radio T-carpooling ace" name="form-field-radio" type="hidden" ', 
            $line = 32, "1" == order.priceType && ($out += "checked", $line = 32), $out += '> <input type="hidden" name="carpoolingPrice" value="', 
            $line = 33, $out += $escape(order.price), $out += '"> <input type="hidden" name="charterPrice" value="', 
            $line = 34, $out += $escape(order.price), $out += '"> <input class="ace T-isRoundTrip" name="form-field-checkbox" type="hidden" ', 
            $line = 35, 1 == order.isRoundTrip && ($out += "checked", $line = 35), $out += '> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">备注</h5> <label>', 
            $line = 39, $out += $escape(order.orderRemark), $out += '</label> </div> <div class="col-xs-12 padding-b10 mar-b10 border-bottom"> <h5 class="color-999">其他费用</h5> ', 
            $line = 43, $each(order.otherFeeList, function(rs) {
                $out += ' <div> <label class="lineblock width150">金额：', $line = 45, $out += $escape(rs.fee), 
                $out += '<input class="T-clacFee" name="fee" type="hidden" value="', $line = 45, 
                $out += $escape(rs.fee), $out += '"></label> <label> 备注：', $line = 46, $out += $escape(rs.remark), 
                $out += "</label> </div> ", $line = 48;
            }), $out += ' </div> <div class="T-touristList"> <table class="table table-striped table-bordered table-hover table-text-center va-middle"> <tr> <th>小组序号</th> <th>团号</th> <th>人数</th> <th>现收</th> <th>联系人姓名</th> <th>联系人电话</th> <th>入住酒店</th> <th>酒店地址</th> <th>备注</th> ', 
            $line = 62, "1" == order.isShowArrangeInfoColumn && ($out += " <th>派车信息</th> ", 
            $line = 64), $out += " </tr> ", $line = 66, order.touristGroupList.length && ($out += " ", 
            $line = 67, $each(order.touristGroupList, function(group, i) {
                $out += ' <tr class="T-sort" data-index="', $line = 68, $out += $escape(group.touristGroupMemberList.length), 
                $out += '" data-id="', $line = 68, $out += $escape(group.id), $out += '" data-content="', 
                $line = 68, $out += $escape($helpers.stringify(group)), $out += '" data-adultcount="', 
                $line = 68, $out += $escape(group.adultCount), $out += '" data-childCount="', $line = 68, 
                $out += $escape(group.childCount), $out += '"> <td rowspan="', $line = 69, $out += $escape(group.touristGroupMemberList.length), 
                $out += '"></td> <td rowspan="', $line = 70, $out += $escape(group.touristGroupMemberList.length), 
                $out += '">', $line = 70, $out += $escape(group.tripNumber), $out += '</td> <td rowspan="', 
                $line = 71, $out += $escape(group.touristGroupMemberList.length), $out += '">', 
                $line = 71, $out += $escape(group.adultCount), $out += "大", $line = 71, $out += $escape(group.childCount), 
                $out += '小</td> <td rowspan="', $line = 72, $out += $escape(group.touristGroupMemberList.length), 
                $out += '">', $line = 72, $out += $escape(group.driverIncomeMoney), $out += "</td> ", 
                $line = 73, group.touristGroupMemberList.length ? ($out += " ", $line = 74, $each(group.touristGroupMemberList, function(rs, index) {
                    $out += " ", $line = 75, 0 == index && ($out += " <td>", $line = 76, $out += $escape(rs.name), 
                    $out += "</td> <td>", $line = 77, $out += $escape(rs.mobileNumber), $out += "</td> ", 
                    $line = 78), $out += " ", $line = 79;
                }), $out += " ", $line = 80) : ($out += " <td></td> <td></td> ", $line = 83), $out += ' <td rowspan="', 
                $line = 84, $out += $escape(group.touristGroupMemberList.length), $out += '"> ', 
                $line = 85, $out += $escape(group.hotelName), $out += ' </td> <td rowspan="', $line = 87, 
                $out += $escape(group.touristGroupMemberList.length), $out += '"> ', $line = 88, 
                $out += $escape(group.hotelAddress), $out += ' </td> <td rowspan="', $line = 90, 
                $out += $escape(group.touristGroupMemberList.length), $out += '" style="width: 300px; max-width: 300px;"> <div class="T-ctrl-tip remark-div ', 
                $line = 91, 1 == group.touristGroupMemberList.length && ($out += "td-div", $line = 91), 
                $out += '" ', $line = 91, group.touristGroupMemberList.length > 1 && ($out += 'style="padding-bottom:', 
                $line = 91, $out += $escape(35 * group.touristGroupMemberList.length / 4 - 9), $out += "px;", 
                $line = 91), $out += '" title="', $line = 91, $out += $escape(group.remark), $out += '"> <span style="white-space: nowrap;">', 
                $line = 92, group.remark ? ($line = 92, $out += $escape(group.remark), $line = 92) : ($out += "&nbsp;", 
                $line = 92), $out += "</span> </div> </td> ", $line = 95, "1" == order.isShowArrangeInfoColumn && ($out += " ", 
                $line = 96, 0 == i && "0" == order.priceType ? ($out += ' <td rowspan="', $line = 97, 
                $out += $escape(order.sumMemberCount), $out += '">', $line = 97, order.arrangeInfo ? ($line = 97, 
                $out += $escape(order.arrangeInfo.driverName), $out += "<br>", $line = 97, $out += $escape(order.arrangeInfo.driverMobileNumber), 
                $out += "<br>", $line = 97, $out += $escape(order.arrangeInfo.licenceNumber), $line = 97) : ($out += '<span class="red">暂未派车</span>', 
                $line = 97), $out += "</td> ", $line = 98, order.isRoundTrip && ($out += ' <td rowspan="', 
                $line = 99, $out += $escape(order.sumMemberCount), $out += '">', $line = 99, order.roundArrangeInfo ? ($line = 99, 
                $out += $escape(order.roundArrangeInfo.driverName), $out += "<br>", $line = 99, 
                $out += $escape(order.roundArrangeInfo.driverMobileNumber), $out += "<br>", $line = 99, 
                $out += $escape(order.roundArrangeInfo.licenceNumber), $line = 99) : ($out += '<span class="red">暂未派车</span>', 
                $line = 99), $out += "</td> ", $line = 100), $out += " ", $line = 101) : "1" == order.priceType && ($out += ' <td rowspan="', 
                $line = 102, $out += $escape(group.touristGroupMemberList.length), $out += '">', 
                $line = 102, group.arrangeInfo ? ($line = 102, $out += $escape(group.arrangeInfo.driverName), 
                $out += "<br>", $line = 102, $out += $escape(group.arrangeInfo.driverMobileNumber), 
                $out += "<br>", $line = 102, $out += $escape(group.arrangeInfo.licenceNumber), $line = 102) : ($out += '<span class="red">暂未派车</span>', 
                $line = 102), $out += "</td> ", $line = 103, order.isRoundTrip && ($out += ' <td rowspan="', 
                $line = 104, $out += $escape(group.touristGroupMemberList.length), $out += '">', 
                $line = 104, group.roundArrangeInfo ? ($line = 104, $out += $escape(group.roundArrangeInfo.driverName), 
                $out += "<br>", $line = 104, $out += $escape(group.roundArrangeInfo.driverMobileNumber), 
                $out += "<br>", $line = 104, $out += $escape(group.roundArrangeInfo.licenceNumber), 
                $line = 104) : ($out += '<span class="red">暂未派车</span>', $line = 104), $out += "</td> ", 
                $line = 105), $out += " ", $line = 106), $out += " ", $line = 107), $out += " </tr> ", 
                $line = 109, $each(group.touristGroupMemberList, function(rs, index) {
                    $out += " ", $line = 110, index > 0 && ($out += " <tr> <td>", $line = 112, $out += $escape(rs.name), 
                    $out += "</td> <td>", $line = 113, $out += $escape(rs.mobileNumber), $out += "</td> </tr> ", 
                    $line = 115), $out += " ", $line = 116;
                }), $out += " ", $line = 117;
            }), $out += " ", $line = 118), $out += ' </table> <div class="col-xs-12"> <p>人数统计：<span class="T-allPeopleText">0大0小</span></p> <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-updateOrder container-fulid col-xs-12">\r\n    <div class="col-xs-12 padding-b10 mar-b10 clearBoth border-bottom-solid">\r\n        <label class="mar-r20">订单状态：<span class="orange">{{order.orderStatus | getOrderStatusText}}</span></label>\r\n        <label class="mar-r20">商家申请价：<span class="{{if order.orderStatus == \'1\' || order.orderStatus == \'3\'}}textd-line color-999{{else}}orange{{/if}}">￥{{order.needPayMoney}}</span></label>\r\n        {{if order.orderStatus == \'1\' || order.orderStatus == \'3\'}}<label class="mar-r20">回复价：<span class="orange">￥{{order.comfirmNeedPayMoney}}</span></label>{{/if}}\r\n        <label>总现收：￥{{order.driverIncomeMoney}}</label>\r\n        <div class="inline pull-right">\r\n            <label class="mar-r20">下单时间：<span>{{order.createTime}}</span></label>\r\n            <label class="mar-r20">订单号：<span>{{order.orderNumber}}</span></label>\r\n            <!-- <label class="mar-r20">商家：<span>{{order.customerName}}</span></label> -->\r\n        </div>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">操作记录<a class="T-viewOperationRecord lineblock mar-l-20 pointer font-s-12">查看&gt;</a></h5>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">订单信息</h5>\r\n        <div>\r\n            <label class="mar-r30">{{order.tripType.name}}</label>\r\n            <label class="mar-r30">任务日期：{{order.tripTime}}</label>\r\n            <label class="mar-r30">目的地：{{order.togetherPosition}}</label>\r\n            <label class="mar-r30">导游：{{order.guideName}}</label>\r\n            <label class="mar-r30">导游电话：{{order.guideMobileNumber}}</label>\r\n            <label>集合时间：{{order.togetherHour}}:{{order.togetherMinute}}</label>\r\n        </div>\r\n        \r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">订单类型</h5>\r\n        <label>{{if order.priceType == \'0\'}}包车{{else}}拼车{{/if}}</label>\r\n        <label>{{order.price}}元{{if order.priceType == \'1\'}}/座{{/if}}</label>\r\n        <input class="T-radio T-carpooling ace" name="form-field-radio" type="hidden" {{if order.priceType == \'1\'}}checked{{/if}}>\r\n        <input type="hidden" name="carpoolingPrice" value="{{order.price}}">\r\n        <input type="hidden" name="charterPrice" value="{{order.price}}">\r\n        <input class="ace T-isRoundTrip" name="form-field-checkbox" type="hidden" {{if order.isRoundTrip == 1}}checked{{/if}}>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">备注</h5>\r\n        <label>{{order.orderRemark}}</label>\r\n    </div>\r\n    <div class="col-xs-12 padding-b10 mar-b10 border-bottom">\r\n        <h5 class="color-999">其他费用</h5>\r\n        {{each order.otherFeeList as rs index}}\r\n        <div>\r\n            <label class="lineblock width150">金额：{{rs.fee}}<input class="T-clacFee" name="fee" type="hidden" value="{{rs.fee}}"></label>\r\n            <label> 备注：{{rs.remark}}</label>\r\n        </div>\r\n        {{/each}}\r\n    </div>\r\n    <div class="T-touristList">\r\n        <table class="table table-striped table-bordered table-hover table-text-center va-middle">\r\n            <tr>\r\n                <th>小组序号</th>\r\n                <th>团号</th>\r\n                <th>人数</th>\r\n                <th>现收</th>\r\n                <th>联系人姓名</th>\r\n                <th>联系人电话</th>\r\n                <th>入住酒店</th>\r\n                <th>酒店地址</th>\r\n                <th>备注</th>\r\n                {{if order.isShowArrangeInfoColumn == \'1\'}}\r\n                <th>派车信息</th>\r\n                {{/if}}\r\n            </tr>\r\n            {{if order.touristGroupList.length}}\r\n            {{each order.touristGroupList as group i}}\r\n            <tr class="T-sort" data-index="{{group.touristGroupMemberList.length}}" data-id="{{group.id}}" data-content="{{group | stringify}}" data-adultcount="{{group.adultCount}}" data-childCount="{{group.childCount}}">\r\n                <td rowspan="{{group.touristGroupMemberList.length}}"></td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">{{group.tripNumber}}</td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">{{group.adultCount}}大{{group.childCount}}小</td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">{{group.driverIncomeMoney}}</td>\r\n                {{if group.touristGroupMemberList.length}}\r\n                {{each group.touristGroupMemberList as rs index}}\r\n                {{if index == 0}}\r\n                <td>{{rs.name}}</td>\r\n                <td>{{rs.mobileNumber}}</td>\r\n                {{/if}}\r\n                {{/each}}\r\n                {{else}}\r\n                <td></td>\r\n                <td></td>\r\n                {{/if}}\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">\r\n                    {{group.hotelName}}\r\n                </td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}">\r\n                    {{group.hotelAddress}}\r\n                </td>\r\n                <td rowspan="{{group.touristGroupMemberList.length}}" style="width: 300px; max-width: 300px;">\r\n                    <div class="T-ctrl-tip remark-div {{if group.touristGroupMemberList.length == 1}}td-div{{/if}}" {{if group.touristGroupMemberList.length > 1}}style="padding-bottom:{{group.touristGroupMemberList.length*35/4-9}}px;{{/if}}" title="{{group.remark}}">\r\n                        <span style="white-space: nowrap;">{{if !!group.remark}}{{group.remark}}{{else}}&nbsp;{{/if}}</span>\r\n                    </div>\r\n                </td>\r\n                {{if order.isShowArrangeInfoColumn == \'1\'}}\r\n                    {{if i == 0  && order.priceType == \'0\'}}\r\n                        <td rowspan="{{order.sumMemberCount}}">{{if !!order.arrangeInfo}}{{order.arrangeInfo.driverName}}<br>{{order.arrangeInfo.driverMobileNumber}}<br>{{order.arrangeInfo.licenceNumber}}{{else}}<span class="red">暂未派车</span>{{/if}}</td>\r\n                        {{if !!order.isRoundTrip}}\r\n                        <td rowspan="{{order.sumMemberCount}}">{{if !!order.roundArrangeInfo}}{{order.roundArrangeInfo.driverName}}<br>{{order.roundArrangeInfo.driverMobileNumber}}<br>{{order.roundArrangeInfo.licenceNumber}}{{else}}<span class="red">暂未派车</span>{{/if}}</td>\r\n                        {{/if}}\r\n                    {{else if order.priceType == \'1\'}}\r\n                        <td rowspan="{{group.touristGroupMemberList.length}}">{{if !!group.arrangeInfo}}{{group.arrangeInfo.driverName}}<br>{{group.arrangeInfo.driverMobileNumber}}<br>{{group.arrangeInfo.licenceNumber}}{{else}}<span class="red">暂未派车</span>{{/if}}</td>\r\n                        {{if !!order.isRoundTrip}}\r\n                        <td rowspan="{{group.touristGroupMemberList.length}}">{{if !!group.roundArrangeInfo}}{{group.roundArrangeInfo.driverName}}<br>{{group.roundArrangeInfo.driverMobileNumber}}<br>{{group.roundArrangeInfo.licenceNumber}}{{else}}<span class="red">暂未派车</span>{{/if}}</td>\r\n                        {{/if}}\r\n                    {{/if}}\r\n                {{/if}}\r\n            </tr>\r\n            {{each group.touristGroupMemberList as rs index}}\r\n                {{if index > 0}}\r\n                <tr>\r\n                    <td>{{rs.name}}</td>\r\n                    <td>{{rs.mobileNumber}}</td>\r\n                </tr>\r\n                {{/if}}\r\n            {{/each}}\r\n            {{/each}}\r\n            {{/if}}\r\n        </table>\r\n        <div class="col-xs-12">\r\n            <p>人数统计：<span class="T-allPeopleText">0大0小</span></p>\r\n            <p>费用统计：<span class="T-allFeeText">0*(0+0)+0 = <span class="font-size20 red">0</span>元</span></p>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});