/*TMODJS:{"debug":true,"version":342,"md5":"f4acd875b0f209744ab0d76c43d60511"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/booking/view/viewSettlement", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, operateUser = $data.operateUser, $escape = $utils.$escape, imgUrl = $data.imgUrl, partnerAgency = $data.partnerAgency, bookingTicketInfo = $data.bookingTicketInfo, bookingHotelInfo = $data.bookingHotelInfo, bookingScenicInfo = $data.bookingScenicInfo, bookingBusCompanyInfo = $data.bookingBusCompanyInfo, $each = $utils.$each, needGet = ($data.rs, 
            $data.index, $data.needGet), $out = "";
            return $out += '<div class="touristGroupViewAccount" id="T-viewSettlement"> <div class="form-inline" style="text-align:center;margin: 15px 0px 25px 0px;"> <div class="form-group"> <h4 style="margin: auto;"> ', 
            $line = 5, "" != operateUser.companyLogo && ($out += '<img src="', $line = 5, $out += $escape(imgUrl), 
            $line = 5, $out += $escape(operateUser.companyLogo), $out += '" class="imgViewAccount" alt=" " style="width: 35px;height: 35px">', 
            $line = 5), $out += '<span class="mar-l-5">', $line = 5, $out += $escape(operateUser.travelName), 
            $out += '</span> </h4> </div> <div class="form-group pull-right mar-r-20 globalAdd"> <button class="btn btn-sm btn-success T-printBooking T-noprint" style="height: 24px;"> <i class="ace-icon fa fa-print"></i>打印 </button> </div> </div> <form action=""> <div class="viewAccountsMain"> <p> <span>致</span> <span style="margin-left: 4px;">', 
            $line = 19, $out += $escape(partnerAgency.travelAgencyName), $out += '</span> <span class="mar-l-5"></span> (<span>', 
            $line = 21, $out += $escape(partnerAgency.contactRealname), $out += "&nbsp;&nbsp; ", 
            $line = 22, $out += $escape(partnerAgency.contactMobileNumber), $out += "</span>&nbsp; ", 
            $line = 23, partnerAgency.faxNumber && ($out += '传真： <span class="mar-l-3">', $line = 24, 
            $out += $escape(partnerAgency.faxNumber), $out += "</span>", $line = 24), $out += ') <span class="mar-l-5">您好！</span> </p> <p> <span>贵单位：</span> <span>(代订单号)</span> <span>', 
            $line = 29, $out += $escape(partnerAgency.orderNumber), $out += '</span> <span class="mar-l-8">(代订项目)</span> <span> ', 
            $line = 31, bookingTicketInfo.length && ($out += " 车辆 ", $line = 33, (bookingTicketInfo.length || bookingHotelInfo.length || bookingScenicInfo.length) && ($out += " 、 ", 
            $line = 35), $out += " ", $line = 36), $out += " ", $line = 37, bookingHotelInfo.length && ($out += " 酒店 ", 
            $line = 39, (bookingTicketInfo.length || bookingScenicInfo.length) && ($out += " 、 ", 
            $line = 41), $out += " ", $line = 42), $out += " ", $line = 43, bookingScenicInfo.length && ($out += "景区 ", 
            $line = 44, bookingTicketInfo.length && ($out += " 、 ", $line = 46), $out += " ", 
            $line = 47), $out += " ", $line = 48, bookingTicketInfo.length && ($out += "票务", 
            $line = 48), $out += ' ,</span> <span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span> </p> <table class="table whereQ whereTwo" style="width: 100%;"> ', 
            $line = 53, bookingBusCompanyInfo.length && ($out += " ", $line = 54, $each(bookingBusCompanyInfo, function(rs, index) {
                $out += " ", $line = 55, 0 == index ? ($out += ' <tr> <td class="textaR-paR" rowspan="', 
                $line = 57, $out += $escape(bookingBusCompanyInfo.length), $out += '">车辆</td> <td class="textaR-paL"> ', 
                $line = 59, "" != rs.required && null != rs.required && ($out += "要求：<span>", $line = 59, 
                $out += $escape(rs.required), $out += "</span>,", $line = 59), $out += " <span>用车时间：", 
                $line = 60, $out += $escape($helpers.dateFormat(rs.startUseTime, "yyyy-MM-dd")), 
                $out += "至", $line = 60, $out += $escape($helpers.dateFormat(rs.endUseTime, "yyyy-MM-dd")), 
                $out += "</span> </td> </tr> ", $line = 63) : ($out += ' <tr> <td class="textaR-paL"> ', 
                $line = 66, "" != rs.required && null != rs.required && ($out += "要求：<span>", $line = 66, 
                $out += $escape(rs.required), $out += "</span>,", $line = 66), $out += " <span>用车时间：", 
                $line = 67, $out += $escape($helpers.dateFormat(rs.startUseTime, "yyyy-MM-dd")), 
                $out += "至", $line = 67, $out += $escape($helpers.dateFormat(rs.endUseTime, "yyyy-MM-dd")), 
                $out += "</span> </td> </tr> ", $line = 70), $out += " ", $line = 71;
            }), $out += " ", $line = 72), $out += " ", $line = 74, bookingHotelInfo.length && ($out += " ", 
            $line = 75, $each(bookingHotelInfo, function(rs, index) {
                $out += " ", $line = 76, 0 == index ? ($out += ' <tr> <td class="textaR-paR" rowspan="', 
                $line = 78, $out += $escape(bookingHotelInfo.length), $out += '">酒店</td> <td class="textaR-paL"> ', 
                $line = 80, "" != rs.required && null != rs.required && ($out += "要求：<span>", $line = 80, 
                $out += $escape(rs.required), $out += "</span>,", $line = 80), $out += " <span> 住店时间：", 
                $line = 82, $out += $escape($helpers.dateFormat(rs.checkInTime, "yyyy-MM-dd")), 
                $out += " ", $line = 83, "" != rs.checkOutTime && ($out += " 至", $line = 84, $out += $escape($helpers.dateFormat(rs.checkOutTime, "yyyy-MM-dd")), 
                $out += " ", $line = 85), $out += "</span> </td> </tr> ", $line = 88) : ($out += ' <tr> <td class="textaR-paL"> ', 
                $line = 91, "" != rs.required && null != rs.required && ($out += "要求：<span>", $line = 91, 
                $out += $escape(rs.required), $out += "</span>,", $line = 91), $out += " <span> 住店时间：", 
                $line = 93, $out += $escape($helpers.dateFormat(rs.checkInTime, "yyyy-MM-dd")), 
                $out += " ", $line = 94, "" != rs.checkOutTime && ($out += " 至", $line = 95, $out += $escape($helpers.dateFormat(rs.checkOutTime, "yyyy-MM-dd")), 
                $out += " ", $line = 96), $out += "</span> </td> </tr> ", $line = 99), $out += " ", 
                $line = 100;
            }), $out += " ", $line = 101), $out += " ", $line = 103, bookingScenicInfo.length && ($out += " ", 
            $line = 104, $each(bookingScenicInfo, function(rs, index) {
                $out += " ", $line = 105, 0 == index ? ($out += ' <tr> <td class="textaR-paR" rowspan="', 
                $line = 107, $out += $escape(bookingScenicInfo.length), $out += '">景区</td> <td class="textaR-paL"> ', 
                $line = 109, "" != rs.required && null != rs.required && ($out += "要求：<span>", $line = 109, 
                $out += $escape(rs.required), $out += "</span>,", $line = 109), $out += " <span>日期：", 
                $line = 110, $out += $escape($helpers.dateFormat(rs.startDate, "yyyy-MM-dd")), $out += "</span> </td> </tr> ", 
                $line = 113) : ($out += ' <tr> <td class="textaR-paL"> ', $line = 116, "" != rs.required && null != rs.required && ($out += "要求：<span>", 
                $line = 116, $out += $escape(rs.required), $out += "</span>,", $line = 116), $out += " <span>日期：", 
                $line = 117, $out += $escape($helpers.dateFormat(rs.startDate, "yyyy-MM-dd")), $out += "</span> </td> </tr> ", 
                $line = 120), $out += " ", $line = 121;
            }), $out += " ", $line = 122), $out += " ", $line = 124, bookingTicketInfo.length && ($out += " ", 
            $line = 125, $each(bookingTicketInfo, function(rs, index) {
                $out += " ", $line = 126, 0 == index ? ($out += ' <tr> <td class="textaR-paR" rowspan="', 
                $line = 128, $out += $escape(bookingTicketInfo.length), $out += '">票务</td> <td class="textaR-paL"> ', 
                $line = 130, "" != rs.required && null != rs.required && ($out += "要求：<span>", $line = 130, 
                $out += $escape(rs.required), $out += "</span>,", $line = 130), $out += " <span>日期：", 
                $line = 131, $out += $escape(rs.startTime), $out += "</span> </td> </tr> ", $line = 134) : ($out += ' <tr> <td class="textaR-paL"> ', 
                $line = 137, "" != rs.required && null != rs.required && ($out += "要求：<span>", $line = 137, 
                $out += $escape(rs.required), $out += "</span>,", $line = 137), $out += " <span>日期：", 
                $line = 138, $out += $escape(rs.startTime), $out += "</span> </td> </tr> ", $line = 141), 
                $out += " ", $line = 142;
            }), $out += " ", $line = 143), $out += ' </table> <table class="table table-bordered"> <thead> <tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2"> <th class="th-border" width="160">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody class="addCostTbody"> ', 
            $line = 157, needGet.feeList.length && ($out += " ", $line = 158, $each(needGet.feeList, function(rs) {
                $out += " <tr> <td> ", $line = 161, $out += $escape($helpers.getFeeItemText(rs.type)), 
                $out += ' </td> <td> <span class="F-float F-count">', $line = 164, $out += $escape(rs.count), 
                $out += '</span> </td> <td> <span class="F-float F-money">', $line = 167, $out += $escape(rs.price), 
                $out += '</span> </td> <td> <span class="F-float F-money">', $line = 170, $out += $escape(rs.money), 
                $out += "</span> </td> <td> <span>", $line = 173, $out += $escape(rs.remark), $out += "</span> </td> </tr> ", 
                $line = 176;
            }), $out += " ", $line = 177), $out += ' </tbody> </table> <table class="table whereQ" style="width: 100%;margin-top: -20px;"> <tr> <td style="text-align: right;padding-right:60px;width: 160px">备注</td> <td class="textaR-paL"> <span>', 
            $line = 185, $out += $escape(partnerAgency.remark), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">应收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 191, $out += $escape(partnerAgency.sumNeedGetMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">已收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 197, $out += $escape(partnerAgency.getedMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">未收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 203, $out += $escape(partnerAgency.unIncomeMoney), $out += '</span> </td> </tr> <tr> <td colspan="2" class="text-a-l"><span style="margin-left: 10px;">请仔细阅读并盖章确认之后回传！谢谢！</span></td> </tr> </table> <p style="text-align: right;margin-top: 10px;"><span class="', 
            $line = 210, operateUser.realName || operateUser.realName ? $line = 210 : ($out += "hidden", 
            $line = 210), $out += '"><span>外联销售：</span> <span>', $line = 210, $out += $escape(operateUser.realName), 
            $out += "</span> <span>", $line = 210, $out += $escape(operateUser.mobileNumber), 
            $out += '</span></span></p> <p style="text-align: right;margin-top: -8px;" class="', 
            $line = 211, operateUser.traFaxNumber ? $line = 211 : ($out += "hidden", $line = 211), 
            $out += '">传真：', $line = 211, $out += $escape(operateUser.traFaxNumber), $out += '</p> <p style="text-align: right;margin-top: -8px;"><span>', 
            $line = 212, $out += $escape($helpers.dateFormat(operateUser.nowTime, "yyyy-MM-dd hh:mm:ss")), 
            $out += '</span></p> </div> </form> <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="touristGroupViewAccount" id="T-viewSettlement">\r\n    <div class="form-inline" style="text-align:center;margin: 15px 0px 25px 0px;">\r\n        <div class="form-group">\r\n            <h4 style="margin: auto;">\r\n            {{if operateUser.companyLogo !=""}}<img src="{{imgUrl}}{{operateUser.companyLogo}}" class="imgViewAccount" alt=" " style="width: 35px;height: 35px">{{/if}}<span class="mar-l-5">{{operateUser.travelName}}</span>\r\n        </h4>\r\n        </div>\r\n        <div class="form-group pull-right mar-r-20 globalAdd">\r\n            <button class="btn btn-sm btn-success T-printBooking T-noprint" style="height: 24px;">\r\n                <i class="ace-icon fa fa-print"></i>打印\r\n            </button>\r\n        </div>\r\n    </div>\r\n    \r\n    <form action="">\r\n        <div class="viewAccountsMain">\r\n            <p>\r\n                <span>致</span> \r\n                <span style="margin-left: 4px;">{{partnerAgency.travelAgencyName}}</span> \r\n                <span class="mar-l-5"></span> \r\n                (<span>{{partnerAgency.contactRealname}}&nbsp;&nbsp;\r\n                {{partnerAgency.contactMobileNumber}}</span>&nbsp;\r\n                {{if !!partnerAgency.faxNumber}}传真：\r\n                <span class="mar-l-3">{{partnerAgency.faxNumber}}</span>{{/if}}) <span class="mar-l-5">您好！</span>\r\n            </p>\r\n            <p>\r\n                <span>贵单位：</span> \r\n                <span>(代订单号)</span>\r\n                <span>{{partnerAgency.orderNumber}}</span> \r\n                <span class="mar-l-8">(代订项目)</span> <span>\r\n                {{if bookingTicketInfo.length}}\r\n                    车辆\r\n                    {{if bookingTicketInfo.length  || bookingHotelInfo.length || bookingScenicInfo.length}}\r\n                        、\r\n                    {{/if}}\r\n                {{/if}}\r\n                {{if bookingHotelInfo.length}}\r\n                    酒店\r\n                    {{if bookingTicketInfo.length || bookingScenicInfo.length}}\r\n                        、\r\n                    {{/if}}\r\n                {{/if}}\r\n                {{if bookingScenicInfo.length}}景区\r\n                    {{if bookingTicketInfo.length}}\r\n                        、\r\n                    {{/if}}\r\n                {{/if}}\r\n                {{if bookingTicketInfo.length}}票务{{/if}}\r\n                ,</span> \r\n                <span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span>\r\n            </p>\r\n            <table class="table whereQ whereTwo" style="width: 100%;">\r\n                {{if bookingBusCompanyInfo.length}}\r\n                    {{each bookingBusCompanyInfo as rs index}}\r\n                        {{if index == 0}}\r\n                            <tr>\r\n                                <td class="textaR-paR" rowspan="{{bookingBusCompanyInfo.length}}">车辆</td>\r\n                                <td class="textaR-paL">\r\n                                    {{if rs.required != "" && rs.required != null}}要求：<span>{{rs.required}}</span>,{{/if}}\r\n                                    <span>用车时间：{{rs.startUseTime | dateFormat: \'yyyy-MM-dd\'}}至{{rs.endUseTime | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{else}}\r\n                            <tr>\r\n                                <td class="textaR-paL">\r\n                                    {{if rs.required != "" && rs.required != null}}要求：<span>{{rs.required}}</span>,{{/if}}\r\n                                    <span>用车时间：{{rs.startUseTime | dateFormat: \'yyyy-MM-dd\'}}至{{rs.endUseTime | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{/if}}<!-- 车辆 -->\r\n\r\n                {{if bookingHotelInfo.length}}\r\n                    {{each bookingHotelInfo as rs index}}\r\n                        {{if index == 0}}\r\n                            <tr>\r\n                                <td class="textaR-paR" rowspan="{{bookingHotelInfo.length}}">酒店</td>\r\n                                <td class="textaR-paL">\r\n                                    {{if rs.required != "" && rs.required != null}}要求：<span>{{rs.required}}</span>,{{/if}}\r\n                                    <span>\r\n                                    住店时间：{{rs.checkInTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                                    {{if rs.checkOutTime != ""}}\r\n                                        至{{rs.checkOutTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                                    {{/if}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{else}}\r\n                            <tr>\r\n                                <td class="textaR-paL">\r\n                                    {{if rs.required != "" && rs.required != null}}要求：<span>{{rs.required}}</span>,{{/if}}\r\n                                    <span>\r\n                                    住店时间：{{rs.checkInTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                                    {{if rs.checkOutTime != ""}}\r\n                                        至{{rs.checkOutTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                                    {{/if}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{/if}}<!-- 酒店 -->\r\n\r\n                {{if bookingScenicInfo.length}}\r\n                    {{each bookingScenicInfo as rs index}}\r\n                        {{if index == 0}}\r\n                            <tr>\r\n                                <td class="textaR-paR" rowspan="{{bookingScenicInfo.length}}">景区</td>\r\n                                <td class="textaR-paL">\r\n                                    {{if rs.required != "" && rs.required != null}}要求：<span>{{rs.required}}</span>,{{/if}}\r\n                                    <span>日期：{{rs.startDate | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{else}}\r\n                            <tr>\r\n                                <td class="textaR-paL">\r\n                                    {{if rs.required != "" && rs.required != null}}要求：<span>{{rs.required}}</span>,{{/if}}\r\n                                    <span>日期：{{rs.startDate | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{/if}}<!-- 景区 -->\r\n\r\n                {{if bookingTicketInfo.length}}\r\n                    {{each bookingTicketInfo as rs index}}\r\n                        {{if index == 0}}\r\n                            <tr>\r\n                                <td class="textaR-paR" rowspan="{{bookingTicketInfo.length}}">票务</td>\r\n                                <td class="textaR-paL">\r\n                                    {{if rs.required != "" && rs.required != null}}要求：<span>{{rs.required}}</span>,{{/if}}\r\n                                    <span>日期：{{rs.startTime}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{else}}\r\n                            <tr>\r\n                                <td class="textaR-paL">\r\n                                    {{if rs.required != "" && rs.required != null}}要求：<span>{{rs.required}}</span>,{{/if}}\r\n                                    <span>日期：{{rs.startTime}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{/if}}<!-- 票务 -->\r\n            </table>\r\n\r\n            <table class="table table-bordered"> \r\n                    <thead>\r\n                        <tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2">\r\n                            <th class="th-border" width="160">费用项</th>\r\n                            <th class="th-border">数量</th>\r\n                            <th class="th-border">单价</th>\r\n                            <th class="th-border">金额</th>\r\n                            <th class="th-border">说明</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="addCostTbody">\r\n                        {{if needGet.feeList.length}}\r\n                            {{each needGet.feeList as rs index}}\r\n                                <tr>\r\n                                    <td>\r\n                                        {{rs.type | getFeeItemText}}\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class="F-float F-count">{{rs.count}}</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class="F-float F-money">{{rs.price}}</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span class="F-float F-money">{{rs.money}}</span>\r\n                                    </td>\r\n                                    <td>\r\n                                        <span>{{rs.remark}}</span>\r\n                                    </td>\r\n                                </tr>\r\n                            {{/each}}\r\n                        {{/if}}\r\n                        \r\n                    </tbody>\r\n            </table>\r\n            <table class="table whereQ" style="width: 100%;margin-top: -20px;">\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">备注</td>\r\n                    <td class="textaR-paL">\r\n                        <span>{{partnerAgency.remark}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">应收</td>\r\n                    <td class="textaR-paL">\r\n                        <span class="F-float F-money">{{partnerAgency.sumNeedGetMoney}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">已收</td>\r\n                    <td class="textaR-paL">\r\n                        <span class="F-float F-money">{{partnerAgency.getedMoney}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">未收</td>\r\n                    <td class="textaR-paL">\r\n                        <span class="F-float F-money">{{partnerAgency.unIncomeMoney}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan="2" class="text-a-l"><span style="margin-left: 10px;">请仔细阅读并盖章确认之后回传！谢谢！</span></td>\r\n                </tr>\r\n            </table>\r\n            <p style="text-align: right;margin-top: 10px;"><span class="{{if !!operateUser.realName || !!operateUser.realName}}{{else}}hidden{{/if}}"><span>外联销售：</span> <span>{{operateUser.realName}}</span> <span>{{operateUser.mobileNumber}}</span></span></p>\r\n            <p style="text-align: right;margin-top: -8px;" class="{{if !!operateUser.traFaxNumber}}{{else}}hidden{{/if}}">传真：{{operateUser.traFaxNumber}}</p>\r\n            <p style="text-align: right;margin-top: -8px;"><span>{{operateUser.nowTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</span></p>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> \r\n        <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});