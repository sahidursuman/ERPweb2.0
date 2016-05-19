/*TMODJS:{"debug":true,"version":308,"md5":"fabc31a4a069b52eac9c811861f6ed4c"}*/
define(function(require) {
    return require("../../../template")("arrange/booking/view/viewSettlement", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, operateUser = $data.operateUser, $escape = $utils.$escape, imgUrl = $data.imgUrl, partnerAgency = $data.partnerAgency, bookingBusCompany = $data.bookingBusCompany, bookingTicket = $data.bookingTicket, bookingHotel = $data.bookingHotel, bookingScenic = $data.bookingScenic, $each = $utils.$each, $out = ($data.rs, 
            $data.index, "");
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
            $line = 31, bookingBusCompany.length && ($out += " 车辆 ", $line = 33, (bookingTicket.length || bookingHotel.length || bookingScenic.length) && ($out += " 、 ", 
            $line = 35), $out += " ", $line = 36), $out += " ", $line = 37, bookingHotel.length && ($out += " 酒店 ", 
            $line = 39, (bookingTicket.length || bookingScenic.length) && ($out += " 、 ", $line = 41), 
            $out += " ", $line = 42), $out += " ", $line = 43, bookingScenic.length && ($out += "景区 ", 
            $line = 44, bookingTicket.length && ($out += " 、 ", $line = 46), $out += " ", $line = 47), 
            $out += " ", $line = 48, bookingTicket.length && ($out += "票务", $line = 48), $out += ' ,</span> <span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span> </p> <table class="table whereQ whereTwo" style="width: 100%;"> ', 
            $line = 53, bookingBusCompany.length && ($out += " ", $line = 54, $each(bookingBusCompany, function(rs, index) {
                $out += " ", $line = 55, 0 == index ? ($out += ' <tr> <td class="textaR-paR" rowspan="', 
                $line = 57, $out += $escape(bookingBusCompany.length), $out += '">车辆</td> <td class="textaR-paL"> <span>', 
                $line = 59, $out += $escape(rs.needSeatCount), $out += "&nbsp;座</span>, ", $line = 60, 
                "" != rs.needBusBrand && ($out += "<span>", $line = 60, $out += $escape(rs.needBusBrand), 
                $out += "</span>,", $line = 60), $out += " <span>用车时间：", $line = 61, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "至", $line = 61, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), 
                $out += "</span> </td> </tr> ", $line = 64) : ($out += ' <tr> <td class="textaR-paL"> <span>', 
                $line = 67, $out += $escape(rs.needSeatCount), $out += "&nbsp;座</span>, <span>", 
                $line = 68, $out += $escape(rs.needBusBrand), $out += "</span>, <span>用车时间：", $line = 69, 
                $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += "至", $line = 69, 
                $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), $out += "</span> </td> </tr> ", 
                $line = 72), $out += " ", $line = 73;
            }), $out += " ", $line = 74), $out += " ", $line = 76, bookingHotel.length && ($out += " ", 
            $line = 77, $each(bookingHotel, function(rs, index) {
                $out += " ", $line = 78, 0 == index ? ($out += ' <tr> <td class="textaR-paR" rowspan="', 
                $line = 80, $out += $escape(bookingHotel.length), $out += '">酒店</td> <td class="textaR-paL"> <span>', 
                $line = 82, $out += $escape(rs.name), $out += "</span>, <span>", $line = 83, $out += $escape(rs.type), 
                $out += "</span>, <span> 住店时间：", $line = 85, $out += $escape($helpers.dateFormat(rs.enterTime, "yyyy-MM-dd")), 
                $out += " ", $line = 86, "" != rs.enterTime && ($out += " 至", $line = 87, $out += $escape($helpers.dateFormat(rs.leaveTime, "yyyy-MM-dd")), 
                $out += " ", $line = 88), $out += "</span> </td> </tr> ", $line = 91) : ($out += ' <tr> <td class="textaR-paL"> <span>', 
                $line = 94, $out += $escape(rs.name), $out += "</span>, <span>", $line = 95, $out += $escape(rs.type), 
                $out += "</span>, <span>住店时间：", $line = 96, $out += $escape($helpers.dateFormat(rs.enterTime, "yyyy-MM-dd")), 
                $out += " ", $line = 97, "" != rs.enterTime && ($out += " 至", $line = 98, $out += $escape($helpers.dateFormat(rs.leaveTime, "yyyy-MM-dd")), 
                $out += " ", $line = 99), $out += "</span> </td> </tr> ", $line = 102), $out += " ", 
                $line = 103;
            }), $out += " ", $line = 104), $out += " ", $line = 106, bookingScenic.length && ($out += " ", 
            $line = 107, $each(bookingScenic, function(rs, index) {
                $out += " ", $line = 108, 0 == index ? ($out += ' <tr> <td class="textaR-paR" rowspan="', 
                $line = 110, $out += $escape(bookingScenic.length), $out += '">景区</td> <td class="textaR-paL"> <span>', 
                $line = 112, $out += $escape(rs.name), $out += "</span>, <span>", $line = 113, $out += $escape(rs.scenicItemName), 
                $out += "</span>, <span>日期：", $line = 114, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</span> </td> </tr> ", $line = 117) : ($out += ' <tr> <td class="textaR-paL"> <span>', 
                $line = 120, $out += $escape(rs.name), $out += "</span>, <span>", $line = 121, $out += $escape(rs.scenicItemName), 
                $out += "</span>, <span>日期：", $line = 122, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += "</span> </td> </tr> ", $line = 125), $out += " ", $line = 126;
            }), $out += " ", $line = 127), $out += " ", $line = 129, bookingTicket.length && ($out += " ", 
            $line = 130, $each(bookingTicket, function(rs, index) {
                $out += " ", $line = 131, 0 == index ? ($out += ' <tr> <td class="textaR-paR" rowspan="', 
                $line = 133, $out += $escape(bookingTicket.length), $out += '">票务</td> <td class="textaR-paL"> <span>', 
                $line = 135, $out += $escape(rs.name), $out += "</span>, <span> ", $line = 137, 
                1 == rs.type ? ($out += " 机票 ", $line = 139) : 2 == rs.type ? ($out += " 汽车票 ", 
                $line = 141) : 3 == rs.type ? ($out += " 火车票 ", $line = 143) : 4 == rs.type && ($out += " 轮船票 ", 
                $line = 145), $out += " </span>, <span> ", $line = 148, $out += $escape(rs.startCity), 
                $line = 148, "" != rs.arriveCity && ($out += "-", $line = 148), $line = 148, $out += $escape(rs.arriveCity), 
                $out += ", </span> ", $line = 150, "" != rs.shift && ($out += "<span>", $line = 150, 
                $out += $escape(rs.shift), $out += "</span>,", $line = 150), $out += " ", $line = 151, 
                "" != rs.seatLevel && ($out += "<span>", $line = 151, $out += $escape(rs.seatLevel), 
                $out += "</span>,", $line = 151), $out += " <span>时间：", $line = 152, $out += $escape($helpers.dateTimeHSFormat(rs.startTime)), 
                $out += "</span> </td> </tr> ", $line = 155) : ($out += ' <tr> <td class="textaR-paL"> <span>', 
                $line = 158, $out += $escape(rs.name), $out += "</span>, <span> ", $line = 160, 
                1 == rs.type ? ($out += " 机票 ", $line = 162) : 2 == rs.type ? ($out += " 汽车票 ", 
                $line = 164) : 3 == rs.type ? ($out += " 火车票 ", $line = 166) : 4 == rs.type && ($out += " 轮船票 ", 
                $line = 168), $out += " </span>, <span> ", $line = 171, $out += $escape(rs.startCity), 
                $line = 171, "" != rs.arriveCity && ($out += "-", $line = 171, $out += $escape(rs.arriveCity), 
                $out += ",", $line = 171), $out += " </span> ", $line = 173, "" != rs.shift && ($out += "<span>", 
                $line = 173, $out += $escape(rs.shift), $out += "</span>,", $line = 173), $out += " ", 
                $line = 174, "" != rs.seatLevel && ($out += "<span>", $line = 174, $out += $escape(rs.seatLevel), 
                $out += "</span>,", $line = 174), $out += " <span>时间：", $line = 175, $out += $escape($helpers.dateTimeHSFormat(rs.startTime)), 
                $out += "</span> </td> </tr> ", $line = 178), $out += " ", $line = 179;
            }), $out += " ", $line = 180), $out += ' </table> <table class="table table-bordered"> <thead> <tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2"> <th class="th-border" width="160">项目</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> </tr> </thead> <tbody class="addCostTbody"> ', 
            $line = 193, bookingBusCompany.length && ($out += " ", $line = 194, $each(bookingBusCompany, function(rs) {
                $out += " <tr> <td > ", $line = 197, rs.needBusBrand && ($out += " <span>", $line = 198, 
                $out += $escape(rs.needBusBrand), $out += "</span>, ", $line = 199), $out += " <span>", 
                $line = 200, $out += $escape(rs.needSeatCount), $out += "&nbsp;座</span> </td> <td > ", 
                $line = 203, $out += $escape(rs.roomCount), $out += " </td> <td > ", $line = 206, 
                $out += $escape(rs.salePrice), $out += " </td> <td > ", $line = 209, $out += $escape(rs.sumNeedGetMoney), 
                $out += " </td> </tr> ", $line = 212;
            }), $out += " ", $line = 213), $out += " ", $line = 215, bookingHotel.length && ($out += " ", 
            $line = 216, $each(bookingHotel, function(rs) {
                $out += " <tr> <td > ", $line = 219, $out += $escape(rs.type), $out += " </td> <td > ", 
                $line = 222, $out += $escape(rs.roomCount), $out += " </td> <td > ", $line = 225, 
                $out += $escape(rs.salePrice), $out += " </td> <td > ", $line = 228, $out += $escape(rs.sumNeedGetMoney), 
                $out += " </td> </tr> ", $line = 231;
            }), $out += " ", $line = 232), $out += " ", $line = 234, bookingScenic.length && ($out += " ", 
            $line = 235, $each(bookingScenic, function(rs) {
                $out += " <tr> <td > ", $line = 238, $out += $escape(rs.scenicItemName), $out += " </td> <td > ", 
                $line = 241, $out += $escape(rs.roomCount), $out += " </td> <td > ", $line = 244, 
                $out += $escape(rs.salePrice), $out += " </td> <td > ", $line = 247, $out += $escape(rs.sumNeedGetMoney), 
                $out += " </td> </tr> ", $line = 250;
            }), $out += " ", $line = 251), $out += " ", $line = 253, bookingTicket.length && ($out += " ", 
            $line = 254, $each(bookingTicket, function(rs) {
                $out += " <tr> <td> ", $line = 257, 1 == rs.type ? ($out += " 机票 ", $line = 259) : 2 == rs.type ? ($out += " 汽车票 ", 
                $line = 261) : 3 == rs.type ? ($out += " 火车票 ", $line = 263) : 4 == rs.type && ($out += " 轮船票 ", 
                $line = 265), $out += " </td> <td> ", $line = 268, $out += $escape(rs.roomCount), 
                $out += " </td> <td> ", $line = 271, $out += $escape(rs.salePrice), $out += " </td> <td> ", 
                $line = 274, $out += $escape(rs.sumNeedGetMoney), $out += " </td> </tr> ", $line = 277;
            }), $out += " ", $line = 278), $out += ' </tbody> </table> <table class="table whereQ" style="width: 100%;margin-top: -20px;"> <tr> <td style="text-align: right;padding-right:60px;width: 160px">备注</td> <td class="textaR-paL"> <span>', 
            $line = 285, $out += $escape(partnerAgency.remark), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">应收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 291, $out += $escape(partnerAgency.sumNeedGetMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">已收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 297, $out += $escape(partnerAgency.getedMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">未收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 303, $out += $escape(partnerAgency.unIncomeMoney), $out += '</span> </td> </tr> <tr> <td colspan="2" class="text-a-l"><span style="margin-left: 10px;">请仔细阅读并盖章确认之后回传！谢谢！</span></td> </tr> </table> <p style="text-align: right;margin-top: 10px;"><span class="', 
            $line = 310, operateUser.realName || operateUser.realName ? $line = 310 : ($out += "hidden", 
            $line = 310), $out += '"><span>外联销售：</span> <span>', $line = 310, $out += $escape(operateUser.realName), 
            $out += "</span> <span>", $line = 310, $out += $escape(operateUser.mobileNumber), 
            $out += '</span></span></p> <p style="text-align: right;margin-top: -8px;" class="', 
            $line = 311, operateUser.traFaxNumber ? $line = 311 : ($out += "hidden", $line = 311), 
            $out += '">传真：', $line = 311, $out += $escape(operateUser.traFaxNumber), $out += '</p> <p style="text-align: right;margin-top: -8px;"><span>', 
            $line = 312, $out += $escape($helpers.dateFormat(operateUser.nowTime, "yyyy-MM-dd hh:mm:ss")), 
            $out += '</span></p> </div> </form> <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="touristGroupViewAccount" id="T-viewSettlement">\r\n    <div class="form-inline" style="text-align:center;margin: 15px 0px 25px 0px;">\r\n        <div class="form-group">\r\n            <h4 style="margin: auto;">\r\n            {{if operateUser.companyLogo !=""}}<img src="{{imgUrl}}{{operateUser.companyLogo}}" class="imgViewAccount" alt=" " style="width: 35px;height: 35px">{{/if}}<span class="mar-l-5">{{operateUser.travelName}}</span>\r\n        </h4>\r\n        </div>\r\n        <div class="form-group pull-right mar-r-20 globalAdd">\r\n            <button class="btn btn-sm btn-success T-printBooking T-noprint" style="height: 24px;">\r\n                <i class="ace-icon fa fa-print"></i>打印\r\n            </button>\r\n        </div>\r\n    </div>\r\n    \r\n    <form action="">\r\n        <div class="viewAccountsMain">\r\n            <p>\r\n                <span>致</span> \r\n                <span style="margin-left: 4px;">{{partnerAgency.travelAgencyName}}</span> \r\n                <span class="mar-l-5"></span> \r\n                (<span>{{partnerAgency.contactRealname}}&nbsp;&nbsp;\r\n                {{partnerAgency.contactMobileNumber}}</span>&nbsp;\r\n                {{if !!partnerAgency.faxNumber}}传真：\r\n                <span class="mar-l-3">{{partnerAgency.faxNumber}}</span>{{/if}}) <span class="mar-l-5">您好！</span>\r\n            </p>\r\n            <p>\r\n                <span>贵单位：</span> \r\n                <span>(代订单号)</span>\r\n                <span>{{partnerAgency.orderNumber}}</span> \r\n                <span class="mar-l-8">(代订项目)</span> <span>\r\n                {{if bookingBusCompany.length}}\r\n                    车辆\r\n                    {{if bookingTicket.length  || bookingHotel.length || bookingScenic.length}}\r\n                        、\r\n                    {{/if}}\r\n                {{/if}}\r\n                {{if bookingHotel.length}}\r\n                    酒店\r\n                    {{if bookingTicket.length || bookingScenic.length}}\r\n                        、\r\n                    {{/if}}\r\n                {{/if}}\r\n                {{if bookingScenic.length}}景区\r\n                    {{if bookingTicket.length}}\r\n                        、\r\n                    {{/if}}\r\n                {{/if}}\r\n                {{if bookingTicket.length}}票务{{/if}}\r\n                ,</span> \r\n                <span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span>\r\n            </p>\r\n            <table class="table whereQ whereTwo" style="width: 100%;">\r\n                {{if bookingBusCompany.length}}\r\n                    {{each bookingBusCompany as rs index}}\r\n                        {{if index == 0}}\r\n                            <tr>\r\n                                <td class="textaR-paR" rowspan="{{bookingBusCompany.length}}">车辆</td>\r\n                                <td class="textaR-paL">\r\n                                    <span>{{rs.needSeatCount}}&nbsp;座</span>,\r\n                                    {{if rs.needBusBrand != ""}}<span>{{rs.needBusBrand}}</span>,{{/if}}\r\n                                    <span>用车时间：{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}至{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{else}}\r\n                            <tr>\r\n                                <td class="textaR-paL">\r\n                                    <span>{{rs.needSeatCount}}&nbsp;座</span>,\r\n                                    <span>{{rs.needBusBrand}}</span>,\r\n                                    <span>用车时间：{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}至{{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{/if}}<!-- 车辆 -->\r\n\r\n                {{if bookingHotel.length}}\r\n                    {{each bookingHotel as rs index}}\r\n                        {{if index == 0}}\r\n                            <tr>\r\n                                <td class="textaR-paR" rowspan="{{bookingHotel.length}}">酒店</td>\r\n                                <td class="textaR-paL">\r\n                                    <span>{{rs.name}}</span>,\r\n                                    <span>{{rs.type}}</span>,\r\n                                    <span>\r\n                                    住店时间：{{rs.enterTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                                    {{if rs.enterTime != ""}}\r\n                                        至{{rs.leaveTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                                    {{/if}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{else}}\r\n                            <tr>\r\n                                <td class="textaR-paL">\r\n                                    <span>{{rs.name}}</span>,\r\n                                    <span>{{rs.type}}</span>,\r\n                                    <span>住店时间：{{rs.enterTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                                    {{if rs.enterTime != ""}}\r\n                                        至{{rs.leaveTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                                    {{/if}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{/if}}<!-- 酒店 -->\r\n\r\n                {{if bookingScenic.length}}\r\n                    {{each bookingScenic as rs index}}\r\n                        {{if index == 0}}\r\n                            <tr>\r\n                                <td class="textaR-paR" rowspan="{{bookingScenic.length}}">景区</td>\r\n                                <td class="textaR-paL">\r\n                                    <span>{{rs.name}}</span>,\r\n                                    <span>{{rs.scenicItemName}}</span>,\r\n                                    <span>日期：{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{else}}\r\n                            <tr>\r\n                                <td class="textaR-paL">\r\n                                    <span>{{rs.name}}</span>,\r\n                                    <span>{{rs.scenicItemName}}</span>,\r\n                                    <span>日期：{{rs.startTime | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{/if}}<!-- 景区 -->\r\n\r\n                {{if bookingTicket.length}}\r\n                    {{each bookingTicket as rs index}}\r\n                        {{if index == 0}}\r\n                            <tr>\r\n                                <td class="textaR-paR" rowspan="{{bookingTicket.length}}">票务</td>\r\n                                <td class="textaR-paL">\r\n                                    <span>{{rs.name}}</span>,\r\n                                    <span>\r\n                                        {{if rs.type==1}}\r\n                                            机票\r\n                                        {{else if rs.type==2}}\r\n                                            汽车票\r\n                                        {{else if rs.type==3}}  \r\n                                            火车票\r\n                                        {{else if rs.type==4}}\r\n                                            轮船票\r\n                                        {{/if}}\r\n                                    </span>,\r\n                                    <span>\r\n                                        {{rs.startCity}}{{if rs.arriveCity != ""}}-{{/if}}{{rs.arriveCity}},\r\n                                    </span>\r\n                                    {{if rs.shift != ""}}<span>{{rs.shift}}</span>,{{/if}}\r\n                                    {{if rs.seatLevel != ""}}<span>{{rs.seatLevel}}</span>,{{/if}}\r\n                                    <span>时间：{{rs.startTime | dateTimeHSFormat}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{else}}\r\n                            <tr>\r\n                                <td class="textaR-paL">\r\n                                    <span>{{rs.name}}</span>,\r\n                                    <span>\r\n                                        {{if rs.type==1}}\r\n                                            机票\r\n                                        {{else if rs.type==2}}\r\n                                            汽车票\r\n                                        {{else if rs.type==3}}  \r\n                                            火车票\r\n                                        {{else if rs.type==4}}\r\n                                            轮船票\r\n                                        {{/if}}\r\n                                    </span>,\r\n                                    <span>\r\n                                        {{rs.startCity}}{{if rs.arriveCity != ""}}-{{rs.arriveCity}},{{/if}}\r\n                                    </span>\r\n                                    {{if rs.shift != ""}}<span>{{rs.shift}}</span>,{{/if}}\r\n                                    {{if rs.seatLevel != ""}}<span>{{rs.seatLevel}}</span>,{{/if}}\r\n                                    <span>时间：{{rs.startTime | dateTimeHSFormat}}</span>\r\n                                </td>\r\n                            </tr>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                {{/if}}<!-- 票务 -->\r\n            </table>\r\n\r\n            <table class="table table-bordered"> \r\n                    <thead>\r\n                        <tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2">\r\n                            <th class="th-border" width="160">项目</th>\r\n                            <th class="th-border">数量</th>\r\n                            <th class="th-border">单价</th>\r\n                            <th class="th-border">金额</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="addCostTbody">\r\n                        {{if bookingBusCompany.length}}\r\n                            {{each bookingBusCompany as rs index}}\r\n                                <tr>\r\n                                    <td >\r\n                                        {{if !!rs.needBusBrand}}\r\n                                            <span>{{rs.needBusBrand}}</span>,\r\n                                        {{/if}}\r\n                                        <span>{{rs.needSeatCount}}&nbsp;座</span>\r\n                                    </td>\r\n                                    <td >\r\n                                        {{rs.roomCount}}\r\n                                    </td>\r\n                                    <td >\r\n                                        {{rs.salePrice}}\r\n                                    </td>\r\n                                    <td >\r\n                                        {{rs.sumNeedGetMoney}}\r\n                                    </td>\r\n                                </tr>\r\n                            {{/each}}\r\n                        {{/if}}<!-- 车辆 -->\r\n\r\n                        {{if bookingHotel.length}}\r\n                            {{each bookingHotel as rs index}}\r\n                                <tr>\r\n                                    <td >\r\n                                        {{rs.type}}\r\n                                    </td>\r\n                                    <td >\r\n                                        {{rs.roomCount}}\r\n                                    </td>\r\n                                    <td >\r\n                                        {{rs.salePrice}}\r\n                                    </td>\r\n                                    <td >\r\n                                        {{rs.sumNeedGetMoney}}\r\n                                    </td>\r\n                                </tr>\r\n                            {{/each}}\r\n                        {{/if}}<!-- 酒店 -->\r\n\r\n                        {{if bookingScenic.length}}\r\n                            {{each bookingScenic as rs index}}\r\n                                <tr>\r\n                                    <td >\r\n                                        {{rs.scenicItemName}}\r\n                                    </td>\r\n                                    <td >\r\n                                        {{rs.roomCount}}\r\n                                    </td>\r\n                                    <td >\r\n                                        {{rs.salePrice}}\r\n                                    </td>\r\n                                    <td >\r\n                                        {{rs.sumNeedGetMoney}}\r\n                                    </td>\r\n                                </tr>\r\n                            {{/each}}\r\n                        {{/if}}<!-- 景区 -->\r\n\r\n                        {{if bookingTicket.length}}\r\n                            {{each bookingTicket as rs index}}\r\n                                <tr>\r\n                                    <td>\r\n                                         {{if rs.type==1}}\r\n                                            机票\r\n                                        {{else if rs.type==2}}\r\n                                            汽车票\r\n                                        {{else if rs.type==3}}  \r\n                                            火车票\r\n                                        {{else if rs.type==4}}\r\n                                            轮船票\r\n                                        {{/if}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{rs.roomCount}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{rs.salePrice}}\r\n                                    </td>\r\n                                    <td>\r\n                                        {{rs.sumNeedGetMoney}}\r\n                                    </td>\r\n                                </tr>\r\n                            {{/each}}\r\n                        {{/if}}<!-- 票务 -->\r\n                    </tbody>\r\n            </table>\r\n            <table class="table whereQ" style="width: 100%;margin-top: -20px;">\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">备注</td>\r\n                    <td class="textaR-paL">\r\n                        <span>{{partnerAgency.remark}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">应收</td>\r\n                    <td class="textaR-paL">\r\n                        <span class="F-float F-money">{{partnerAgency.sumNeedGetMoney}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">已收</td>\r\n                    <td class="textaR-paL">\r\n                        <span class="F-float F-money">{{partnerAgency.getedMoney}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">未收</td>\r\n                    <td class="textaR-paL">\r\n                        <span class="F-float F-money">{{partnerAgency.unIncomeMoney}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td colspan="2" class="text-a-l"><span style="margin-left: 10px;">请仔细阅读并盖章确认之后回传！谢谢！</span></td>\r\n                </tr>\r\n            </table>\r\n            <p style="text-align: right;margin-top: 10px;"><span class="{{if !!operateUser.realName || !!operateUser.realName}}{{else}}hidden{{/if}}"><span>外联销售：</span> <span>{{operateUser.realName}}</span> <span>{{operateUser.mobileNumber}}</span></span></p>\r\n            <p style="text-align: right;margin-top: -8px;" class="{{if !!operateUser.traFaxNumber}}{{else}}hidden{{/if}}">传真：{{operateUser.traFaxNumber}}</p>\r\n            <p style="text-align: right;margin-top: -8px;"><span>{{operateUser.nowTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</span></p>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> \r\n        <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});