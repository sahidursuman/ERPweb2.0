/*TMODJS:{"debug":true,"version":84,"md5":"7674604e5197c5e7d9868910728167b2"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/transferView/viewHotel", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, outRemarkList = $data.outRemarkList, $escape = ($data.viewmian, 
            $data.$index, $utils.$escape), outHotelList = $data.outHotelList, $out = ($data.view, 
            "");
            return $out += '<div class="T-planbus globalAdd "> ', $line = 2, $each(outRemarkList, function(viewmian) {
                $out += ' <table class="table table-striped table-bordered mar-b-20"> <tbody class="T-transfersId-hotel"> <tr> <td style="text-align: left;"> <label class="control-label mar-r-20">中转单号：', 
                $line = 7, $out += $escape(viewmian.orderNumber), $out += '</label> <label class="control-label mar-r-20">人数：', 
                $line = 8, $out += $escape(viewmian.adultCount), $out += " 大 ", $line = 8, $out += $escape(viewmian.childCount), 
                $out += '小</label> <label class="control-label mar-r-20">联系人电话：', $line = 9, $out += $escape(viewmian.contactMemberPhoneNumber), 
                $out += '</label> <!-- <label class="control-label mar-r-20">抵达时间：', $line = 10, 
                $out += $escape(viewmian.arriveTime), $out += '</label> --> <label class="control-label mar-r-20">游客联系人：', 
                $line = 11, $out += $escape(viewmian.contactMemberName), $out += '</label> <label class="control-label mar-r-20">线路名称：', 
                $line = 12, $out += $escape(viewmian.lineProductName), $out += '</label> <label class="control-label">外联销售：', 
                $line = 13, $out += $escape(viewmian.outOPUserName), $out += '</label> </td> </tr> <tr> <td style="text-align: left;"> <label class="control-label mar-r-20">客户名：', 
                $line = 19, $out += $escape(viewmian.partnerAgencyName), $out += ' </label> <label class="control-label mar-r-20">要求：', 
                $line = 20, $out += $escape(viewmian.require), $out += '</label> <!-- <label class="control-label mar-r-20">班次：', 
                $line = 21, $out += $escape(viewmian.shift), $out += '</label> --> <label class="control-label mar-r-20">类型：', 
                $line = 22, 1 == viewmian.shuttleType ? ($out += "接团", $line = 22) : 2 == viewmian.shuttleType ? ($out += "送团", 
                $line = 22) : 3 == viewmian.shuttleType && ($out += "返程住宿 ", $line = 22), $out += '</label> <label class="control-label mar-r-20">出游日期：', 
                $line = 23, $out += $escape(viewmian.startTime), $out += '</label> <label class="control-label">收客单号：', 
                $line = 24, $out += $escape(viewmian.tgOrderNumber), $out += "</label> </td> </tr> </tbody> </table> ", 
                $line = 29;
            }), $out += ' <table class="table table-striped table-bordered table-hover "> <thead> <tr> <th class="th-border"><span class="necessary">*</span>入住日期</th> <th class="th-border"><span class="necessary">*</span>离店日期</th> <th class="th-border">星级</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border">单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-hotel-plan"> ', 
            $line = 49, $each(outHotelList, function(view) {
                $out += ' <tr data-entity-id="', $line = 50, $out += $escape(view.id), $out += '"> <td> ', 
                $line = 52, $out += $escape(view.checkInTime), $out += " </td> <td> ", $line = 55, 
                $out += $escape(view.checkOutTime), $out += " </td> <td> ", $line = 58, $out += $escape($helpers.getHotelLevelDesc(view.hotelLevel)), 
                $out += " </td> <td> ", $line = 61, $out += $escape(view.hotelName), $out += " </td> <td> ", 
                $line = 64, $out += $escape(view.hotelManagerName), $out += " </td> <td> ", $line = 67, 
                $out += $escape(view.hotelMobileNumber), $out += " </td> <td> ", $line = 70, $out += $escape(view.hotelRoomType), 
                $out += " </td> <td> ", $line = 73, $out += $escape(view.price), $out += " </td> <td> ", 
                $line = 76, $out += $escape(view.memberCount), $out += " </td> <td> ", $line = 79, 
                $out += $escape(view.reduceMoney), $out += " </td> <td> ", $line = 82, $out += $escape(view.needPayMoney), 
                $out += " </td> <td> ", $line = 85, $out += $escape(view.prePayMoney), $out += " </td> <td>", 
                $line = 87, $out += $escape(view.remark), $out += "</td> </tr>", $line = 88;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n{{each outRemarkList as viewmian}}\r\n<table class="table table-striped table-bordered mar-b-20">\r\n    <tbody class="T-transfersId-hotel">\r\n        <tr>\r\n            <td style="text-align: left;">\r\n                <label class="control-label mar-r-20">中转单号：{{viewmian.orderNumber}}</label>\r\n                <label class="control-label mar-r-20">人数：{{viewmian.adultCount}} 大 {{viewmian.childCount}}小</label>\r\n                <label class="control-label mar-r-20">联系人电话：{{viewmian.contactMemberPhoneNumber}}</label>\r\n                <!-- <label class="control-label mar-r-20">抵达时间：{{viewmian.arriveTime}}</label>  -->\r\n                <label class="control-label mar-r-20">游客联系人：{{viewmian.contactMemberName}}</label> \r\n                <label class="control-label mar-r-20">线路名称：{{viewmian.lineProductName}}</label>\r\n                <label class="control-label">外联销售：{{viewmian.outOPUserName}}</label>\r\n            </td>\r\n            \r\n        </tr>\r\n        <tr>\r\n            <td style="text-align: left;">\r\n                <label class="control-label mar-r-20">客户名：{{viewmian.partnerAgencyName}} </label>\r\n                <label class="control-label mar-r-20">要求：{{viewmian.require}}</label> \r\n                <!-- <label class="control-label mar-r-20">班次：{{viewmian.shift}}</label>  -->\r\n                <label class="control-label mar-r-20">类型：{{if viewmian.shuttleType == 1}}接团{{else if viewmian.shuttleType == 2}}送团{{else if viewmian.shuttleType == 3}}返程住宿 {{/if}}</label>\r\n                <label class="control-label mar-r-20">出游日期：{{viewmian.startTime}}</label>\r\n                <label class="control-label">收客单号：{{viewmian.tgOrderNumber}}</label>\r\n            </td>\r\n        </tr>\r\n    </tbody> \r\n</table>\r\n{{/each}}\r\n    <table class="table table-striped table-bordered table-hover ">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>入住日期</th>\r\n                <th class="th-border"><span class="necessary">*</span>离店日期</th>\r\n                <th class="th-border">星级</th>\r\n                <th class="th-border"><span class="necessary">*</span>酒店</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">联系电话</th>\r\n                <th class="th-border"><span class="necessary">*</span>房型</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-hotel-plan">\r\n            {{each outHotelList as view}}\r\n            <tr data-entity-id="{{view.id}}">\r\n                <td>\r\n                    {{view.checkInTime}}\r\n                </td>\r\n                 <td>\r\n                    {{view.checkOutTime}}\r\n                </td>\r\n                <td>\r\n                   {{view.hotelLevel  | getHotelLevelDesc}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelName}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelManagerName}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelMobileNumber}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelRoomType}}\r\n                </td>\r\n                <td>\r\n                    {{view.price}}\r\n                </td>\r\n                <td>\r\n                    {{view.memberCount}}\r\n                </td>\r\n                <td>\r\n                    {{view.reduceMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.needPayMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.prePayMoney}}\r\n                </td>\r\n                <td>{{view.remark}}</td>\r\n            </tr>{{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});