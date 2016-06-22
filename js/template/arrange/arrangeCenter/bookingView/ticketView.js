/*TMODJS:{"debug":true,"version":11,"md5":"a16d3b48eecd515ad5aff2a02dd7c3ff"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/bookingView/ticketView", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, bookingOrder = $data.bookingOrder, required = $data.required, arrangeList = $data.arrangeList, $each = $utils.$each, status = ($data.rs, 
            $data.$index, $data.status), $out = "";
            return $out += '<div class="base-info" data-id="', $line = 1, $out += $escape(bookingOrder.id), 
            $out += '"> <div class="hct-view-container"> <table class="table table-bordered"> <tbody> <tr> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">代订单号</div> <div class="hct-view-content">', 
            $line = 8, $out += $escape(bookingOrder.orderNumber), $out += '</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">客人信息</div> <div class="hct-view-content">', 
            $line = 12, $out += $escape(bookingOrder.touristRealname), $out += " ", $line = 12, 
            $out += $escape(bookingOrder.adultCount), $out += "大", $line = 12, $out += $escape(bookingOrder.childCount), 
            $out += '小</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">外联销售</div> <div class="hct-view-content">', 
            $line = 16, $out += $escape(bookingOrder.outOPUserName), $out += '</div> </td> </tr> <tr> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">出发时间</div> <div class="hct-view-content">', 
            $line = 22, $out += $escape($helpers.dateFormat(bookingOrder.startTime, "yyyy-MM-dd hh:mm")), 
            $out += '</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">出发城市</div> <div class="hct-view-content">', 
            $line = 26, $out += $escape(bookingOrder.startingCity), $out += '</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">到达城市</div> <div class="hct-view-content">', 
            $line = 30, $out += $escape(bookingOrder.arriveCity), $out += '</div> </td> </tr> <tr> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">座位席别</div> <div class="hct-view-content">', 
            $line = 36, $out += $escape(bookingOrder.seatLevel), $out += '</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">数量</div> <div class="hct-view-content">', 
            $line = 40, $out += $escape(bookingOrder.memberCount), $out += '</div> </td> <td class="hct-view-group col-xs-4"> <div class="hct-view-title">类型</div> <div class="hct-view-content">', 
            $line = 44, $out += $escape($helpers.getTicketText(bookingOrder.type)), $out += '</div> </td> </tr> </tbody> </table> </div> </div> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">票务</label> </h5> <p class="panel hct-mh-required">现票务计划要求：', 
            $line = 55, $out += $escape(required), $out += '</p> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc"> <thead> <tr> <th class="th-border"><span class="necessary">*</span>票务公司</th> <th class="th-border"><span class="necessary">*</span>类型</th> <th class="th-border">出发城市</th> <th class="th-border">到达城市</th> <th class="th-border"><span class="necessary">*</span>班次</th> <th class="th-border" width="100"><span class="necessary">*</span>时间</th> <th class="th-border"><span class="necessary">*</span>座位级别</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">应付</th> <th class="th-border ">预付款</th> <th class="th-border ">备注</th> </tr> </thead> <tbody class="T-ticketList"> ', 
            $line = 77, arrangeList && arrangeList.length > 0 && ($out += " ", $line = 78, $each(arrangeList, function(rs) {
                $out += " <tr> <td>", $line = 80, $out += $escape(rs.ticketName), $out += "</td> <td>", 
                $line = 81, $out += $escape($helpers.getTicketText(rs.type)), $out += "</td> <td>", 
                $line = 82, $out += $escape(rs.startCity), $out += "</td> <td>", $line = 83, $out += $escape(rs.arriveCity), 
                $out += "</td> <td>", $line = 84, $out += $escape(rs.shift), $out += "</td> <td>", 
                $line = 85, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd hh:mm")), 
                $out += "</td> <td>", $line = 86, $out += $escape(rs.seatLevel), $out += '</td> <td class="F-float F-money">', 
                $line = 87, $out += $escape(rs.costPrice), $out += '</td> <td class="F-float F-count">', 
                $line = 88, $out += $escape(rs.roomCount), $out += '</td> <td class="F-float F-money">', 
                $line = 89, $out += $escape(rs.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 90, $out += $escape(rs.sumCostMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 91, $out += $escape(rs.prePayMoney), $out += "</td> <td>", $line = 92, $out += $escape(rs.remark), 
                $out += "</td> </tr> ", $line = 94;
            }), $out += " ", $line = 95), $out += ' </tbody> </table> </div> </div> </div> <div class="text-center mar-t-20"> <span class="checkbox checkbox-inline mar-0" data-target="#booking_receive_ticket"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100 mar-r-20"> <i class="ace-icon fa fa-times"></i> 关闭 </button> <label> <input name="status" type="checkbox" class="ace T-finishedArrange" disabled ', 
            $line = 105, 1 == status && ($out += "checked", $line = 105), $out += '> <span class="lbl font-w"> 票务安排完成</span> </label> </span> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="base-info" data-id="{{bookingOrder.id}}">\r\n    <div class="hct-view-container">\r\n        <table class="table table-bordered">\r\n            <tbody>\r\n                <tr>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">代订单号</div>\r\n                        <div class="hct-view-content">{{bookingOrder.orderNumber}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">客人信息</div>\r\n                        <div class="hct-view-content">{{bookingOrder.touristRealname}} {{bookingOrder.adultCount}}大{{bookingOrder.childCount}}小</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">外联销售</div>\r\n                        <div class="hct-view-content">{{bookingOrder.outOPUserName}}</div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">出发时间</div>\r\n                        <div class="hct-view-content">{{bookingOrder.startTime | dateFormat: \'yyyy-MM-dd hh:mm\'}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">出发城市</div>\r\n                        <div class="hct-view-content">{{bookingOrder.startingCity}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">到达城市</div>\r\n                        <div class="hct-view-content">{{bookingOrder.arriveCity}}</div>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">座位席别</div>\r\n                        <div class="hct-view-content">{{bookingOrder.seatLevel}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">数量</div>\r\n                        <div class="hct-view-content">{{bookingOrder.memberCount}}</div>\r\n                    </td>\r\n                    <td class="hct-view-group col-xs-4">\r\n                        <div class="hct-view-title">类型</div>\r\n                        <div class="hct-view-content">{{bookingOrder.type | getTicketText}}</div>\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n<div class=" ui-sortable-handle">\r\n    <h5 class="">\r\n        <label class="middle title-size">票务</label>\r\n    </h5>\r\n    <p class="panel hct-mh-required">现票务计划要求：{{required}}</p>\r\n    <div class="widget-body">\r\n        <div class="widget-main no-padding">\r\n            <table class="table table-striped table-bordered table-hover margin-top" style="border: 1px solid #ccc">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border"><span class="necessary">*</span>票务公司</th>\r\n                        <th class="th-border"><span class="necessary">*</span>类型</th>\r\n                        <th class="th-border">出发城市</th>\r\n                        <th class="th-border">到达城市</th>\r\n                        <th class="th-border"><span class="necessary">*</span>班次</th>\r\n                        <th class="th-border" width="100"><span class="necessary">*</span>时间</th>\r\n                        <th class="th-border"><span class="necessary">*</span>座位级别</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">优惠</th>\r\n                        <th class="th-border">应付</th>\r\n                        <th class="th-border ">预付款</th>\r\n                        <th class="th-border ">备注</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-ticketList">\r\n                {{if !!arrangeList && arrangeList.length > 0}}\r\n                {{each arrangeList as rs}}\r\n                    <tr>\r\n                        <td>{{rs.ticketName}}</td>\r\n                        <td>{{rs.type | getTicketText}}</td>\r\n                        <td>{{rs.startCity}}</td>\r\n                        <td>{{rs.arriveCity}}</td>\r\n                        <td>{{rs.shift}}</td>\r\n                        <td>{{rs.startTime | dateFormat: \'yyyy-MM-dd hh:mm\'}}</td>\r\n                        <td>{{rs.seatLevel}}</td>\r\n                        <td class="F-float F-money">{{rs.costPrice}}</td>\r\n                        <td class="F-float F-count">{{rs.roomCount}}</td>\r\n                        <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.sumCostMoney}}</td>\r\n                        <td class="F-float F-money">{{rs.prePayMoney}}</td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                {{/each}}\r\n                {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="text-center mar-t-20">\r\n    <span class="checkbox checkbox-inline mar-0" data-target="#booking_receive_ticket">\r\n        <button class="btn btn-xs btn-default T-btn-close btn-primary w100 mar-r-20"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n        <label>\r\n            <input name="status" type="checkbox" class="ace T-finishedArrange" disabled {{if status == 1}}checked{{/if}}>\r\n            <span class="lbl font-w"> 票务安排完成</span>\r\n        </label>\r\n    </span>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});