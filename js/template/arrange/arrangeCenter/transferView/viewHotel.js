/*TMODJS:{"debug":true,"version":21,"md5":"b31b16296dce05eeffff754ae917ef9f"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/transferView/viewHotel", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, outRemarkList = $data.outRemarkList, $escape = ($data.viewmian, 
            $data.$index, $utils.$escape), outHotelList = $data.outHotelList, $out = ($data.view, 
            "");
            return $out += '<div class="T-planbus globalAdd "> ', $line = 2, $each(outRemarkList, function(viewmian) {
                $out += ' <div class="form-group"> <label class="control-label mar-r-20">中转单号：', 
                $line = 4, $out += $escape(viewmian.orderNumber), $out += '</label> <label class="control-label mar-r-20">人数：', 
                $line = 5, $out += $escape(viewmian.adultCount), $out += " 大 ", $line = 5, $out += $escape(viewmian.childCount), 
                $out += '小</label> <!-- <label class="control-label mar-r-20">抵达时间：', $line = 6, 
                $out += $escape(viewmian.arriveTime), $out += '</label> --> <label class="control-label mar-r-20">游客联系人：', 
                $line = 7, $out += $escape(viewmian.contactMemberName), $out += '</label> <label class="control-label mar-r-20">线路名称：', 
                $line = 8, $out += $escape(viewmian.lineProductName), $out += '</label> <label class="control-label">外联销售：', 
                $line = 9, $out += $escape(viewmian.outOPUserName), $out += '</label> </div> <div class="form-group"> <label class="control-label mar-r-20">客户名：', 
                $line = 12, $out += $escape(viewmian.partnerAgencyName), $out += ' </label> <label class="control-label mar-r-20">要求：', 
                $line = 13, $out += $escape(viewmian.require), $out += '</label> <!-- <label class="control-label mar-r-20">班次：', 
                $line = 14, $out += $escape(viewmian.shift), $out += '</label> --> <label class="control-label mar-r-20">类型：', 
                $line = 15, 1 == viewmian.shuttleType ? ($out += "接团", $line = 15) : 2 == viewmian.shuttleType && ($out += "送团 ", 
                $line = 15), $out += '</label> <label class="control-label mar-r-20">出游日期：', $line = 16, 
                $out += $escape(viewmian.startTime), $out += '</label> <label class="control-label">收客单号：', 
                $line = 17, $out += $escape(viewmian.tgOrderNumber), $out += "</label> </div> ", 
                $line = 19;
            }), $out += ' <table class="table table-striped table-bordered table-hover "> <thead> <tr> <th class="th-border"><span class="necessary">*</span>入住日期</th> <th class="th-border"><span class="necessary">*</span>离店日期</th> <th class="th-border">星级</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border">单价</th> <th class="th-border"><span class="necessary">*</span>数量</th> <th class="th-border">优惠</th> <th class="th-border">应付款</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-hotel-plan"> ', 
            $line = 39, $each(outHotelList, function(view) {
                $out += ' <tr data-entity-id="', $line = 40, $out += $escape(view.id), $out += '"> <td> ', 
                $line = 42, $out += $escape(view.checkInTime), $out += " </td> <td> ", $line = 45, 
                $out += $escape(view.checkOutTime), $out += " </td> <td> ", $line = 48, $out += $escape($helpers.getHotelLevelDesc(view.hotelLevel)), 
                $out += " </td> <td> ", $line = 51, $out += $escape(view.hotelName), $out += " </td> <td> ", 
                $line = 54, $out += $escape(view.hotelManagerName), $out += " </td> <td> ", $line = 57, 
                $out += $escape(view.hotelMobileNumber), $out += " </td> <td> ", $line = 60, $out += $escape(view.hotelRoomType), 
                $out += " </td> <td> ", $line = 63, $out += $escape(view.price), $out += " </td> <td> ", 
                $line = 66, $out += $escape(view.memberCount), $out += " </td> <td> ", $line = 69, 
                $out += $escape(view.reduceMoney), $out += " </td> <td> ", $line = 72, $out += $escape(view.needPayMoney), 
                $out += " </td> <td> ", $line = 75, $out += $escape(view.prePayMoney), $out += " </td> <td>", 
                $line = 77, $out += $escape(view.remark), $out += "</td> </tr>", $line = 78;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-planbus globalAdd ">\r\n{{each outRemarkList as viewmian}}\r\n    <div class="form-group"> \r\n        <label class="control-label mar-r-20">中转单号：{{viewmian.orderNumber}}</label>\r\n        <label class="control-label mar-r-20">人数：{{viewmian.adultCount}} 大 {{viewmian.childCount}}小</label>\r\n        <!-- <label class="control-label mar-r-20">抵达时间：{{viewmian.arriveTime}}</label>  -->\r\n        <label class="control-label mar-r-20">游客联系人：{{viewmian.contactMemberName}}</label> \r\n        <label class="control-label mar-r-20">线路名称：{{viewmian.lineProductName}}</label>\r\n        <label class="control-label">外联销售：{{viewmian.outOPUserName}}</label> \r\n    </div>\r\n    <div class="form-group"> \r\n        <label class="control-label mar-r-20">客户名：{{viewmian.partnerAgencyName}} </label>\r\n        <label class="control-label mar-r-20">要求：{{viewmian.require}}</label> \r\n        <!-- <label class="control-label mar-r-20">班次：{{viewmian.shift}}</label>  -->\r\n        <label class="control-label mar-r-20">类型：{{if viewmian.shuttleType == 1}}接团{{else if viewmian.shuttleType == 2}}送团 {{/if}}</label>\r\n        <label class="control-label mar-r-20">出游日期：{{viewmian.startTime}}</label>\r\n        <label class="control-label">收客单号：{{viewmian.tgOrderNumber}}</label> \r\n    </div>\r\n{{/each}}\r\n    <table class="table table-striped table-bordered table-hover ">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border"><span class="necessary">*</span>入住日期</th>\r\n                <th class="th-border"><span class="necessary">*</span>离店日期</th>\r\n                <th class="th-border">星级</th>\r\n                <th class="th-border"><span class="necessary">*</span>酒店</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">联系电话</th>\r\n                <th class="th-border"><span class="necessary">*</span>房型</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border"><span class="necessary">*</span>数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">应付款</th>\r\n                <th class="th-border">预付款</th>\r\n                <th class="th-border">备注</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-hotel-plan">\r\n            {{each outHotelList as view}}\r\n            <tr data-entity-id="{{view.id}}">\r\n                <td>\r\n                    {{view.checkInTime}}\r\n                </td>\r\n                 <td>\r\n                    {{view.checkOutTime}}\r\n                </td>\r\n                <td>\r\n                   {{view.hotelLevel  | getHotelLevelDesc}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelName}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelManagerName}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelMobileNumber}}\r\n                </td>\r\n                <td>\r\n                    {{view.hotelRoomType}}\r\n                </td>\r\n                <td>\r\n                    {{view.price}}\r\n                </td>\r\n                <td>\r\n                    {{view.memberCount}}\r\n                </td>\r\n                <td>\r\n                    {{view.reduceMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.needPayMoney}}\r\n                </td>\r\n                <td>\r\n                    {{view.prePayMoney}}\r\n                </td>\r\n                <td>{{view.remark}}</td>\r\n            </tr>{{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});