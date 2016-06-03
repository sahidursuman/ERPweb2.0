/*TMODJS:{"debug":true,"version":42,"md5":"4b454469429bd901015ad35c62c48a60"}*/
define(function(require) {
    return require("../../../../template")("resource/touristGroupN/view/booking/add", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, id = $data.id, orderNumber = $data.orderNumber, partnerAgencyName = $data.partnerAgencyName, partnerAgencyId = $data.partnerAgencyId, contactId = $data.contactId, bookDate = $data.bookDate, hotel = $data.hotel, hotelNeedPayMoney = $data.hotelNeedPayMoney, hotelId = $data.hotelId, ticket = $data.ticket, ticketNeedPayMoney = $data.ticketNeedPayMoney, ticketId = $data.ticketId, scenic = $data.scenic, scenicNeedPayMoney = $data.scenicNeedPayMoney, scenicId = $data.scenicId, bus = $data.bus, busNeedPayMoney = $data.busNeedPayMoney, busId = $data.busId, needGet = $data.needGet, needGetNeedPayMoney = $data.needGetNeedPayMoney, tourist = $data.tourist, touristInfo = $data.touristInfo, touristMobileNumber = $data.touristMobileNumber, outOPUserName = $data.outOPUserName, outOPUserId = $data.outOPUserId, type = $data.type, $out = "";
            return $out += '<div class="container-fluid T-container line-h-submit" data-id="', 
            $line = 1, $out += $escape(id), $out += '"> <div class="row"> <div class="col-xs-12"> <div class="pull-right" style="margin-top: -6px;"> <label class="pull-left control-label text-right mar-r-10">代订单号</label> <input type="text" class="pull-left w-150" name="orderNumber" placeholder="默认系统自动生成" value="', 
            $line = 6, $out += $escape(orderNumber), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <table class="table table-striped table-bordered table-hover hct-table-update"> <thead> <tr> <th rowspan="2">客户</th> <th rowspan="2">代订日期</th> <th colspan="4">代订项目</th> <th rowspan="2">代订小计</th> <th rowspan="2">应收</th> <th rowspan="2">游客信息</th> <th rowspan="2">游客电话</th> <th rowspan="2">外联销售</th> </tr> <tr> <th width="150">酒店</th> <th width="150">票务</th> <th width="150">景区</th> <th width="150">旅游车</th> </tr> </thead> <tbody class="T-booking-info"> <tr> <td><input type="text" class="col-xs-12 hct-cursor T-action T-client" readonly name="fromPartnerAgency" placeholder="点击选择客户" value="', 
            $line = 31, $out += $escape(partnerAgencyName), $out += '" data-id="', $line = 31, 
            $out += $escape(partnerAgencyId), $out += '" data-contact-id="', $line = 31, $out += $escape(contactId), 
            $out += '"></td> <td> <input class="datepicker w-100" name="bookDate" value="', 
            $line = 33, $out += $escape(bookDate), $out += '" type="text"> </td> <td> <input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly placeholder="点击填写酒店" ', 
            $line = 36, hotel && ($out += 'value="', $line = 36, $out += $escape(hotelNeedPayMoney), 
            $out += '" data-json="', $line = 36, $out += $escape(hotel), $out += '"', $line = 36), 
            $out += ' data-id="', $line = 36, $out += $escape(hotelId), $out += '"> <a class="cursor T-action T-clear" data-status="hotel">清空</a> </td> <td> <input type="text" class="w-100 hct-cursor T-action T-ticket F-float F-money" readonly placeholder="点击填写票务" ', 
            $line = 40, ticket && ($out += 'value="', $line = 40, $out += $escape(ticketNeedPayMoney), 
            $out += '" data-json="', $line = 40, $out += $escape(ticket), $out += '"', $line = 40), 
            $out += ' data-id="', $line = 40, $out += $escape(ticketId), $out += '"> <a class="cursor T-action T-clear" data-status="ticket">清空</a> </td> <td> <input type="text" class="w-100 hct-cursor T-action T-scenic F-float F-money" readonly placeholder="点击填写景区" ', 
            $line = 44, scenic && ($out += 'value="', $line = 44, $out += $escape(scenicNeedPayMoney), 
            $out += '" data-json="', $line = 44, $out += $escape(scenic), $out += '"', $line = 44), 
            $out += ' data-id="', $line = 44, $out += $escape(scenicId), $out += '"> <a class="cursor T-action T-clear" data-status="scenic">清空</a> </td> <td> <input type="text" class="w-100 hct-cursor T-action T-bus F-float F-money" readonly placeholder="点击填写旅游车" ', 
            $line = 48, bus && ($out += 'value="', $line = 48, $out += $escape(busNeedPayMoney), 
            $out += '" data-json="', $line = 48, $out += $escape(bus), $out += '"', $line = 48), 
            $out += ' data-id="', $line = 48, $out += $escape(busId), $out += '"> <a class="cursor T-action T-clear" data-status="bus">清空</a> </td> <td><input type="text" class="col-xs-12 F-float F-money" readonly name="bookingSubtotal" value="', 
            $line = 51, $out += $escape((hotelNeedPayMoney || 0) + (ticketNeedPayMoney || 0) + (scenicNeedPayMoney || 0) + (busNeedPayMoney || 0)), 
            $out += '"></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-receivable F-float F-money" readonly name="" placeholder="点击填写应收" ', 
            $line = 52, needGet && ($out += 'value="', $line = 52, $out += $escape(needGetNeedPayMoney), 
            $out += '" data-json="', $line = 52, $out += $escape(needGet), $out += '"', $line = 52), 
            $out += '></td> <td><input type="text" class="col-xs-12 hct-cursor T-action T-guest-info" readonly name="guestDetails" placeholder="点击填写客人信息" ', 
            $line = 53, tourist && ($out += 'value="', $line = 53, $out += $escape(touristInfo), 
            $out += '" data-json="', $line = 53, $out += $escape(tourist), $out += '"', $line = 53), 
            $out += '></td> <td><input type="text" class="col-xs-12" name="mobileNumber" readonly value="', 
            $line = 54, $out += $escape(touristMobileNumber), $out += '"></td> <td><input type="text" class="col-xs-12 T-chooseUser" name="outOPUserName" value="', 
            $line = 55, $out += $escape(outOPUserName), $out += '" data-id="', $line = 55, $out += $escape(outOPUserId), 
            $out += '"></td> </tr> </tbody> </table> </div> </div> <div class="row"> <div class="col-xs-12 mar-t-20 mar-b-10"> <button class="btn btn-block btn-primary T-btn-save R-right guideSubmit" data-right="1470004"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </div> </div> </div> <!-- ', 
            $line = 67, 1 == type ? ($out += ' <div style="position: fixed; right: 20px; bottom: 10px;min-width: 50px;"> <a class="btn btn-warning T-refresh" title="重新加载数据" style="border-radius: 5px;"> <i class="ace-icon fa fa-refresh bigger-160" style="margin-right: 0;"></i> </a> </div> ', 
            $line = 73) : ($out += ' <div style="position: fixed; right: 20px; bottom: 10px;min-width: 50px;"> <a class="btn btn-warning T-restore" title="恢复上次填写数据" style="border-radius: 5px;"> <i class="ace-icon fa fa-undo bigger-160" style="margin-right: 0;"></i> </a> </div> ', 
            $line = 79), $out += " --> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid T-container line-h-submit" data-id="{{id}}">\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <div class="pull-right" style="margin-top: -6px;">\r\n                <label class="pull-left control-label text-right mar-r-10">代订单号</label>\r\n                <input type="text" class="pull-left w-150" name="orderNumber" placeholder="默认系统自动生成" value="{{orderNumber}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <table class="table table-striped table-bordered table-hover hct-table-update">\r\n                <thead>\r\n                    <tr>\r\n                        <th rowspan="2">客户</th>\r\n                        <th rowspan="2">代订日期</th>\r\n                        <th colspan="4">代订项目</th>\r\n                        <th rowspan="2">代订小计</th>\r\n                        <th rowspan="2">应收</th>\r\n                        <th rowspan="2">游客信息</th>\r\n                        <th rowspan="2">游客电话</th>\r\n                        <th rowspan="2">外联销售</th>\r\n                    </tr>\r\n                    <tr>\r\n                        <th width="150">酒店</th>\r\n                        <th width="150">票务</th>\r\n                        <th width="150">景区</th>\r\n                        <th width="150">旅游车</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-booking-info">\r\n                    <tr>\r\n                        <td><input type="text" class="col-xs-12 hct-cursor T-action T-client" readonly name="fromPartnerAgency" placeholder="点击选择客户" value="{{partnerAgencyName}}" data-id="{{partnerAgencyId}}" data-contact-id="{{contactId}}"></td>\r\n                        <td>\r\n                            <input class="datepicker w-100" name="bookDate" value="{{bookDate}}" type="text">\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" class="w-100 hct-cursor T-action T-hotel F-float F-money" readonly placeholder="点击填写酒店" {{if !!hotel}}value="{{hotelNeedPayMoney}}" data-json="{{hotel}}"{{/if}} data-id="{{hotelId}}">\r\n                            <a class="cursor T-action T-clear" data-status="hotel">清空</a>\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" class="w-100 hct-cursor T-action T-ticket F-float F-money" readonly placeholder="点击填写票务" {{if !!ticket}}value="{{ticketNeedPayMoney}}" data-json="{{ticket}}"{{/if}} data-id="{{ticketId}}">\r\n                            <a class="cursor T-action T-clear" data-status="ticket">清空</a>\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" class="w-100 hct-cursor T-action T-scenic F-float F-money" readonly placeholder="点击填写景区" {{if !!scenic}}value="{{scenicNeedPayMoney}}" data-json="{{scenic}}"{{/if}} data-id="{{scenicId}}">\r\n                            <a class="cursor T-action T-clear" data-status="scenic">清空</a>\r\n                        </td>\r\n                        <td>\r\n                            <input type="text" class="w-100 hct-cursor T-action T-bus F-float F-money" readonly placeholder="点击填写旅游车" {{if !!bus}}value="{{busNeedPayMoney}}" data-json="{{bus}}"{{/if}} data-id="{{busId}}">\r\n                            <a class="cursor T-action T-clear" data-status="bus">清空</a>\r\n                        </td>\r\n                        <td><input type="text" class="col-xs-12 F-float F-money" readonly name="bookingSubtotal" value="{{(hotelNeedPayMoney||0) + (ticketNeedPayMoney||0) + (scenicNeedPayMoney||0) + (busNeedPayMoney||0)}}"></td>\r\n                        <td><input type="text" class="col-xs-12 hct-cursor T-action T-receivable F-float F-money" readonly name="" placeholder="点击填写应收" {{if !!needGet}}value="{{needGetNeedPayMoney}}" data-json="{{needGet}}"{{/if}}></td>\r\n                        <td><input type="text" class="col-xs-12 hct-cursor T-action T-guest-info" readonly name="guestDetails" placeholder="点击填写客人信息" {{if !!tourist}}value="{{touristInfo}}" data-json="{{tourist}}"{{/if}}></td>\r\n                        <td><input type="text" class="col-xs-12" name="mobileNumber" readonly value="{{touristMobileNumber}}"></td>\r\n                        <td><input type="text" class="col-xs-12 T-chooseUser" name="outOPUserName" value="{{outOPUserName}}" data-id="{{outOPUserId}}"></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class="row">\r\n        <div class="col-xs-12 mar-t-20 mar-b-10">\r\n            <button class="btn btn-block btn-primary T-btn-save R-right guideSubmit" data-right="1470004"> <i class="ace-icon fa fa-check"></i> 提交信息 </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- {{if type == 1}}\r\n<div style="position: fixed; right: 20px; bottom: 10px;min-width: 50px;">\r\n    <a class="btn btn-warning T-refresh" title="重新加载数据" style="border-radius: 5px;">\r\n        <i class="ace-icon fa fa-refresh bigger-160" style="margin-right: 0;"></i>\r\n    </a>\r\n</div>\r\n{{else}}\r\n<div style="position: fixed; right: 20px; bottom: 10px;min-width: 50px;">\r\n    <a class="btn btn-warning T-restore" title="恢复上次填写数据" style="border-radius: 5px;">\r\n        <i class="ace-icon fa fa-undo bigger-160" style="margin-right: 0;"></i>\r\n    </a>\r\n</div>\r\n{{/if}} -->\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});