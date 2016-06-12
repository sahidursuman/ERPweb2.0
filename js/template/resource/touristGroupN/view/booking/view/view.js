/*TMODJS:{"debug":true,"version":19,"md5":"172c987830a0c5cc944259025b46a7ad"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/booking/view/view", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, orderNumber = $data.orderNumber, partnerAgencyName = $data.partnerAgencyName, date = $data.date, hotel = $data.hotel, hotelNeedPayMoney = $data.hotelNeedPayMoney, ticket = $data.ticket, ticketNeedPayMoney = $data.ticketNeedPayMoney, scenic = $data.scenic, scenicNeedPayMoney = $data.scenicNeedPayMoney, bus = $data.bus, busNeedPayMoney = $data.busNeedPayMoney, needGet = $data.needGet, needGetNeedPayMoney = $data.needGetNeedPayMoney, tourist = $data.tourist, touristInfo = $data.touristInfo, touristMobileNumber = $data.touristMobileNumber, outOPUserName = $data.outOPUserName, remark = $data.remark, $out = "";
            return $out += '<div class="container-fluid T-container"> <div class="row"> <div class="col-xs-12"> <div class="pull-right" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">代订单号</label> <input type="text" class="pull-left w-150" name="orderNumber" disabled value="', 
            $line = 8, $out += $escape(orderNumber), $out += '"> </div> <div class="pull-right mar-r-15 mar-t-F6"> <button class="btn btn-sm btn-success settlement-Btn T-viewSettle">代订结算单</button> </div> </div> <div class="col-xs-12 mar-t-10"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th rowspan="2">客户</th> <th rowspan="2">代订日期</th> <th colspan="4">代订项目</th> <th rowspan="2">代订小计</th> <th rowspan="2">应收</th> <th rowspan="2">游客信息</th> <th rowspan="2">游客电话</th> <th rowspan="2">外联销售</th> </tr> <tr> <th width="110">酒店</th> <th width="110">票务</th> <th width="110">景区</th> <th width="110">旅游车</th> </tr> </thead> <tbody class="T-booking-info"> <tr> <td>', 
            $line = 36, $out += $escape(partnerAgencyName), $out += "</td> <td> ", $line = 38, 
            "" == date || null == date ? ($out += " - ", $line = 40) : ($out += " ", $line = 41, 
            $out += $escape(date), $out += " ", $line = 42), $out += ' </td> <td><a class="cursor T-action T-hotel F-float F-money" data-json="', 
            $line = 44, $out += $escape(hotel), $out += '">', $line = 44, $out += $escape(hotelNeedPayMoney), 
            $out += '</a></td> <td><a class="cursor T-action T-ticket F-float F-money" data-json="', 
            $line = 45, $out += $escape(ticket), $out += '">', $line = 45, $out += $escape(ticketNeedPayMoney), 
            $out += '</a></td> <td><a class="cursor T-action T-scenic F-float F-money" data-json="', 
            $line = 46, $out += $escape(scenic), $out += '">', $line = 46, $out += $escape(scenicNeedPayMoney), 
            $out += '</a></td> <td><a class="cursor T-action T-bus F-float F-money" data-json="', 
            $line = 47, $out += $escape(bus), $out += '">', $line = 47, $out += $escape(busNeedPayMoney), 
            $out += '</a></td> <td><span class="F-float F-money">', $line = 48, $out += $escape((hotelNeedPayMoney || 0) + (ticketNeedPayMoney || 0) + (scenicNeedPayMoney || 0) + (busNeedPayMoney || 0)), 
            $out += '</span></td> <td><a class="cursor T-action T-receivable F-float F-money" data-json="', 
            $line = 49, $out += $escape(needGet), $out += '">', $line = 49, $out += $escape(needGetNeedPayMoney), 
            $out += '</a></td> <td><a class="cursor T-action T-guest-info" data-json="', $line = 50, 
            $out += $escape(tourist), $out += '">', $line = 50, $out += $escape(touristInfo), 
            $out += "</a></td> <td>", $line = 51, $out += $escape(touristMobileNumber), $out += "</td> <td>", 
            $line = 52, $out += $escape(outOPUserName), $out += '</td> </tr> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12"> <h3 class="hct-update-list-title hct-shrink-box">其它信息</h3> </div> </div> <div class="row T-other-info-cont"> <div class="col-xs-12 mar-t-10 hct-group-input"> <label>备注：</label> <div class="col-xs-12 control-label"> ', 
            $line = 67, $out += $escape(remark), $out += ' </div> </div> </div> <div class="row"> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid T-container">\r\n    <div class="row">\r\n    \r\n        <div class="col-xs-12">\r\n\r\n            <div class="pull-right" style="margin-top: -6px;">\r\n                <label class="pull-left control-label text-right mar-r-10">代订单号</label>\r\n                <input type="text" class="pull-left w-150" name="orderNumber" disabled value="{{orderNumber}}">\r\n            </div>\r\n             <div class="pull-right mar-r-15 mar-t-F6">\r\n            <button class="btn btn-sm btn-success settlement-Btn T-viewSettle">代订结算单</button>\r\n        </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <table class="table table-striped table-bordered table-hover hct-table-update">\r\n                <thead>\r\n                    <tr>\r\n                        <th rowspan="2">客户</th>\r\n                        <th rowspan="2">代订日期</th>\r\n                        <th colspan="4">代订项目</th>\r\n                        <th rowspan="2">代订小计</th>\r\n                        <th rowspan="2">应收</th>\r\n                        <th rowspan="2">游客信息</th>\r\n                        <th rowspan="2">游客电话</th>\r\n                        <th rowspan="2">外联销售</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th width="110">酒店</th>\r\n                        <th width="110">票务</th>\r\n                        <th width="110">景区</th>\r\n                        <th width="110">旅游车</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-booking-info">\r\n                    <tr>\r\n                        <td>{{partnerAgencyName}}</td>\r\n                        <td>\r\n                            {{if date == "" || date == null}}\r\n                                -\r\n                            {{else}}\r\n                                {{date}}\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><a class="cursor T-action T-hotel F-float F-money" data-json="{{hotel}}">{{hotelNeedPayMoney}}</a></td>\r\n                        <td><a class="cursor T-action T-ticket F-float F-money" data-json="{{ticket}}">{{ticketNeedPayMoney}}</a></td>\r\n                        <td><a class="cursor T-action T-scenic F-float F-money" data-json="{{scenic}}">{{scenicNeedPayMoney}}</a></td>\r\n                        <td><a class="cursor T-action T-bus F-float F-money" data-json="{{bus}}">{{busNeedPayMoney}}</a></td>\r\n                        <td><span class="F-float F-money">{{(hotelNeedPayMoney || 0) + (ticketNeedPayMoney||0) + (scenicNeedPayMoney||0) + (busNeedPayMoney||0)}}</span></td>\r\n                        <td><a class="cursor T-action T-receivable F-float F-money" data-json="{{needGet}}">{{needGetNeedPayMoney}}</a></td>\r\n                        <td><a class="cursor T-action T-guest-info" data-json="{{tourist}}">{{touristInfo}}</a></td>\r\n                        <td>{{touristMobileNumber}}</td>\r\n                        <td>{{outOPUserName}}</td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <h3 class="hct-update-list-title hct-shrink-box">其它信息</h3>\r\n        </div>\r\n    </div>\r\n    <div class="row T-other-info-cont">\r\n        <div class="col-xs-12 mar-t-10 hct-group-input">\r\n            <label>备注：</label>\r\n            <div class="col-xs-12 control-label">\r\n                {{remark}}\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="row">\r\n        <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n            <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});