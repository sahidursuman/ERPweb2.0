/*TMODJS:{"debug":true,"version":12,"md5":"359a056a725b3aca54eff4482abb36d9"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/bookingView/hotelView", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, bookingOrder = $data.bookingOrder, required = $data.required, arrangeList = $data.arrangeList, $each = $utils.$each, $string = ($data.rs, 
            $data.$index, $utils.$string), status = $data.status, $out = "";
            return $out += '<div class="base-info" data-id="', $line = 1, $out += $escape(bookingOrder.id), 
            $out += '"> <div class="hct-view-container"> <table class="table table-bordered"> <tbody> <tr> <td class="hct-view-group col-xs-3"> <div class="hct-view-title">代订单号</div> <div class="hct-view-content">', 
            $line = 8, $out += $escape(bookingOrder.orderNumber), $out += '</div> </td> <td class="hct-view-group col-xs-3"> <div class="hct-view-title">客人信息</div> <div class="hct-view-content">', 
            $line = 12, $out += $escape(bookingOrder.touristRealname), $out += " ", $line = 12, 
            $out += $escape(bookingOrder.adultCount), $out += "大", $line = 12, $out += $escape(bookingOrder.childCount), 
            $out += '小</div> </td> <td colspan="2" class="hct-view-group col-xs-3"> <div class="hct-view-title">外联销售</div> <div class="hct-view-content">', 
            $line = 16, $out += $escape(bookingOrder.outOPUserName), $out += '</div> </td> </tr> <tr> <td class="hct-view-group col-xs-3"> <div class="hct-view-title">入住日期</div> <div class="hct-view-content">', 
            $line = 22, $out += $escape(bookingOrder.checkInTime), $out += '</div> </td> <td class="hct-view-group col-xs-3"> <div class="hct-view-title">离店日期</div> <div class="hct-view-content">', 
            $line = 26, $out += $escape(bookingOrder.checkOutTime), $out += '</div> </td> <td class="hct-view-group col-xs-3"> <div class="hct-view-title">星级</div> <div class="hct-view-content">', 
            $line = 30, $out += $escape($helpers.getHotelLevelDesc(bookingOrder.hotelLevel)), 
            $out += '</div> </td> <td class="hct-view-group col-xs-3"> <div class="hct-view-title">间数</div> <div class="hct-view-content">', 
            $line = 34, $out += $escape(bookingOrder.roomCount), $out += '</div> </td> </tr> <tr> <td colspan="4" class="hct-view-group col-xs-12"> <div class="hct-view-title">指定酒店</div> <div class="hct-view-content">', 
            $line = 40, $out += $escape(bookingOrder.arrangeHotel), $out += '</div> </td> </tr> </tbody> </table> </div> </div> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">酒店代订</label> </h5> <p class="panel hct-mh-required">现酒店计划要求：', 
            $line = 52, $out += $escape(required), $out += '</p> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc"> <thead> <tr> <th class="th-border" width="110"><span class="necessary">*</span>入住日期</th> <th class="th-border" width="110"><span class="necessary">*</span>离店日期</th> <th class="th-border">星级</th> <th class="th-border"><span class="necessary">*</span>酒店</th> <th class="th-border"><span class="necessary">*</span>房型</th> <th class="th-border">天数</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border" width="110">优惠</th> <th class="th-border" width="110">应付</th> <th class="th-border">预付款</th> <th class="th-border">备注</th> </tr> </thead> <tbody class="T-hotelList"> ', 
            $line = 73, arrangeList && arrangeList.length > 0 && ($out += " ", $line = 74, $each(arrangeList, function(rs) {
                $out += " <tr> <td> ", $line = 77, $out += $escape($helpers.dateFormat(rs.enterTime, "yyyy-MM-dd")), 
                $out += " </td> <td> ", $line = 80, $out += $escape($helpers.dateFormat(rs.leaveTime, "yyyy-MM-dd")), 
                $out += " </td> <td> ", $line = 83, $out += $string($helpers.getHotelLevelDesc(rs.hotelLevel)), 
                $out += " </td> <td> ", $line = 86, $out += $escape(rs.hotelName), $out += " </td> <td> ", 
                $line = 89, $out += $escape(rs.hotelRoomType), $out += " </td> <td>", $line = 91, 
                $out += $escape(rs.days), $out += '</td> <td class="F-float F-money"> ', $line = 93, 
                $out += $escape(rs.costPrice), $out += ' </td> <td class="F-float F-count"> ', $line = 96, 
                $out += $escape(rs.roomCount), $out += ' </td> <td class="F-float F-money"> ', $line = 99, 
                $out += $escape(rs.reduceMoney), $out += ' </td> <td class="F-float F-money"> ', 
                $line = 102, $out += $escape(rs.sumCostMoney), $out += ' </td> <td class="F-float F-money"> ', 
                $line = 105, $out += $escape(rs.prePayMoney), $out += " </td> <td> ", $line = 108, 
                $out += $escape(rs.remark), $out += " </td> </tr> ", $line = 111;
            }), $out += " ", $line = 112), $out += ' </tbody> </table> </div> </div> </div> <div class="text-center mar-t-20"> <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100 mar-r-20"> <i class="ace-icon fa fa-times"></i> 关闭 </button> <label> <input name="status" type="checkbox" class="ace T-finishedArrange" disabled ', 
            $line = 123, 1 == status && ($out += "checked", $line = 123), $out += '> <span class="lbl font-w"> 酒店安排完成</span> </label> </span> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="base-info" data-id="{{bookingOrder.id}}">\r\n    <div class="hct-view-container">\r\n        <table class="table table-bordered">\r\n            <tbody>\r\n                <tr>\r\n                    <td class="hct-view-group col-xs-3">\r\n                        <div class="hct-view-title">代订单号</div>\r\n                        <div class="hct-view-content">{{bookingOrder.orderNumber}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-3">\r\n                        <div class="hct-view-title">客人信息</div>\r\n                        <div class="hct-view-content">{{bookingOrder.touristRealname}} {{bookingOrder.adultCount}}大{{bookingOrder.childCount}}小</div>\r\n                    </td>\r\n                    <td colspan="2" class="hct-view-group col-xs-3">\r\n                        <div class="hct-view-title">外联销售</div>\r\n                        <div class="hct-view-content">{{bookingOrder.outOPUserName}}</div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="hct-view-group col-xs-3">\r\n                        <div class="hct-view-title">入住日期</div>\r\n                        <div class="hct-view-content">{{bookingOrder.checkInTime}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-3">\r\n                        <div class="hct-view-title">离店日期</div>\r\n                        <div class="hct-view-content">{{bookingOrder.checkOutTime}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-3">\r\n                        <div class="hct-view-title">星级</div>\r\n                        <div class="hct-view-content">{{bookingOrder.hotelLevel | getHotelLevelDesc}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-3">\r\n                        <div class="hct-view-title">间数</div>\r\n                        <div class="hct-view-content">{{bookingOrder.roomCount}}</div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan="4" class="hct-view-group col-xs-12">\r\n                        <div class="hct-view-title">指定酒店</div>\r\n                        <div class="hct-view-content">{{bookingOrder.arrangeHotel}}</div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=" ui-sortable-handle">\r\n    <h5 class="">\r\n        <label class="middle title-size">酒店代订</label>\r\n    </h5>\r\n    \r\n    <p class="panel hct-mh-required">现酒店计划要求：{{required}}</p>\r\n    <div class="widget-body">\r\n        <div class="widget-main no-padding">\r\n            <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border" width="110"><span class="necessary">*</span>入住日期</th>\r\n                        <th class="th-border" width="110"><span class="necessary">*</span>离店日期</th>\r\n                        <th class="th-border">星级</th>\r\n                        <th class="th-border"><span class="necessary">*</span>酒店</th>\r\n                        <th class="th-border"><span class="necessary">*</span>房型</th>\r\n                        <th class="th-border">天数</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border" width="110">优惠</th>\r\n                        <th class="th-border" width="110">应付</th>\r\n                        <th class="th-border">预付款</th>\r\n                        <th class="th-border">备注</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-hotelList">\r\n                {{if !!arrangeList && arrangeList.length > 0}}\r\n                {{each arrangeList as rs}}\r\n                    <tr>\r\n                        <td>\r\n                            {{rs.enterTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                        </td>\r\n                        <td>\r\n                            {{rs.leaveTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                        </td>\r\n                        <td>\r\n                            {{#rs.hotelLevel | getHotelLevelDesc}}\r\n                        </td>\r\n                        <td>\r\n                            {{rs.hotelName}}\r\n                        </td>\r\n                        <td>\r\n                            {{rs.hotelRoomType}}\r\n                        </td>\r\n                        <td>{{rs.days}}</td>\r\n                        <td class="F-float F-money">\r\n                            {{rs.costPrice}}\r\n                        </td>\r\n                        <td class="F-float F-count">\r\n                            {{rs.roomCount}}\r\n                        </td>\r\n                        <td class="F-float F-money">\r\n                            {{rs.reduceMoney}}\r\n                        </td>\r\n                        <td class="F-float F-money">\r\n                            {{rs.sumCostMoney}}\r\n                        </td>\r\n                        <td class="F-float F-money">\r\n                            {{rs.prePayMoney}}\r\n                        </td>\r\n                        <td>\r\n                            {{rs.remark}}\r\n                        </td>\r\n                    </tr>\r\n                {{/each}}\r\n                {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class="text-center mar-t-20">\r\n    <span class="checkbox checkbox-inline mar-0" data-target="#transit_receive_bus">\r\n        <button class="btn btn-xs btn-default T-btn-close btn-primary w100 mar-r-20"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n        <label>\r\n            <input name="status" type="checkbox" class="ace T-finishedArrange" disabled {{if status == 1}}checked{{/if}}>\r\n            <span class="lbl font-w"> 酒店安排完成</span>\r\n        </label>\r\n    </span>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});