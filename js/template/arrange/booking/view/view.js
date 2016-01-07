/*TMODJS:{"debug":true,"version":183,"md5":"e254dffc4cfcd973562433a440ba60ab"}*/
define(function(require) {
    return require("../../../template")("arrange/booking/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, bookingOrder = $data.bookingOrder, $escape = $utils.$escape, $each = $utils.$each, $out = ($data.hotelList, 
            $data.$index, $data.scenicList, $data.ticketList, $data.busList, "");
            return $out += '<div class="col-xs-12 updateBooking"> <button class="btn btn-sm btn-success btn-Booking-export bookingBtn T-bookingBtn ">导出信息</button> <form class="form-horizontal bookingMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <h5 class=""> <label class="middle title-size">代订信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%">  <tr> <td class="style-myself">同行客户 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 16, null != bookingOrder.partnerAgency && ($line = 16, $out += $escape(bookingOrder.partnerAgency.travelAgencyName), 
            $line = 16), $out += '</td> <td class="style-myself">联系人 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 18, null != bookingOrder.partnerAgencyContact && ($line = 18, $out += $escape(bookingOrder.partnerAgencyContact.contactRealname), 
            $line = 18), $out += '</td> <td class="style-myself">联系电话 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 20, null != bookingOrder.partnerAgencyContact && ($line = 20, $out += $escape(bookingOrder.partnerAgencyContact.contactMobileNumber), 
            $line = 20), $out += '</td> </tr> <tr> <td class="style-myself">游客 </td> <td style="text-align: left;padding-left: 6px;" colspan="2">', 
            $line = 25, $out += $escape(bookingOrder.touristRealname), $out += '</td> <td class="style-myself">游客电话 </td> <td style="text-align: left;padding-left: 6px;" colspan="4">', 
            $line = 27, $out += $escape(bookingOrder.touristMobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">备注 </td> <td style="text-align: left;padding-left: 6px;" colspan="5">', 
            $line = 31, $out += $escape(bookingOrder.remark), $out += '</td> </tr> </table> <table class="whereQ whereTwo" style="width: 100%;margin-top: 10px"> <tr> <td class="style-myself">总应收 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 39, $out += $escape(bookingOrder.sumNeedGetMoney), $out += '</td> <td class="style-myself">已收 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 41, $out += $escape(bookingOrder.getedMoney), $out += '</td> <td class="style-myself">预收款 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 43, $out += $escape(bookingOrder.preIncomeMoney), $out += ' </td> </tr> <tr> <td class="style-myself">总成本 </td> <td style="text-align: left;padding-left: 6px;" >', 
            $line = 47, $out += $escape(bookingOrder.sumCostMoney), $out += '</td> <td class="style-myself">已付 </td> <td style="text-align: left;padding-left: 6px;" >', 
            $line = 49, $out += $escape(bookingOrder.prePayMoney), $out += '</td> <td></td> <td></td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingHotelList"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">酒店代订</label> </h5> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border" width="150">入住日期</th> <th class="th-border" width="150">离店日期</th> <th class="th-border">星级</th> <th class="th-border">酒店</th> <th class="th-border">房型</th> <th class="th-border">天数</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border">预付款</th> </tr> </thead> <tbody class="hotelBookingList">', 
            $line = 81, $each(bookingOrder.bookingHotelList, function(hotelList) {
                $out += ' <tr data-entity-id="', $line = 82, $out += $escape(hotelList.id), $out += '"> <td>', 
                $line = 83, $out += $escape($helpers.dateFormat(hotelList.enterTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 84, $out += $escape($helpers.dateFormat(hotelList.leaveTime, "yyyy-MM-dd")), 
                $out += "</td> <td> ", $line = 86, 1 == hotelList.hotel.level ? ($out += " 三星以下 ", 
                $line = 88) : 2 == hotelList.hotel.level ? ($out += " 三星 ", $line = 90) : 3 == hotelList.hotel.level ? ($out += " 准四星 ", 
                $line = 92) : 4 == hotelList.hotel.level ? ($out += " 四星 ", $line = 94) : 5 == hotelList.hotel.level ? ($out += " 准五星 ", 
                $line = 96) : 6 == hotelList.hotel.level ? ($out += " 五星 ", $line = 98) : 7 == hotelList.hotel.level && ($out += " 五星以上 ", 
                $line = 100), $out += " </td> <td>", $line = 102, null != hotelList.hotel && ($line = 102, 
                $out += $escape(hotelList.hotel.name), $line = 102), $out += "</td> <td>", $line = 103, 
                null != hotelList.hotelRoom && ($line = 103, $out += $escape(hotelList.hotelRoom.type), 
                $line = 103), $out += "</td> <td>", $line = 104, $out += $escape(hotelList.days), 
                $out += "</td> <td>", $line = 105, $out += $escape(hotelList.roomCount), $out += "</td> <td>", 
                $line = 106, $out += $escape(hotelList.costPrice), $out += "/天</td> <td>", $line = 107, 
                $out += $escape(hotelList.salePrice), $out += "/天</td> <td>", $line = 108, $out += $escape(hotelList.sumCostMoney), 
                $out += "</td> <td>", $line = 109, $out += $escape(hotelList.sumNeedGetMoney), $out += "</td> <td>", 
                $line = 110, $out += $escape(hotelList.prePayMoney), $out += "</td> </tr>", $line = 111;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingScenicList"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">景区项目代订</label> </h5> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border" width="150">日期</th> <th class="th-border">景区</th> <th class="th-border">收费项</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border">订单号</th> <th class="th-border">预付款</th> </tr> </thead> <tbody class="scenicBookingList">', 
            $line = 142, $each(bookingOrder.bookingScenicList, function(scenicList) {
                $out += ' <tr data-entity-id="', $line = 143, $out += $escape(scenicList.id), $out += '"> <td>', 
                $line = 144, $out += $escape($helpers.dateFormat(scenicList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 145, null != scenicList.scenic && ($line = 145, $out += $escape(scenicList.scenic.name), 
                $line = 145), $out += "</td> <td>", $line = 146, null != scenicList.scenicItem && ($line = 146, 
                $out += $escape(scenicList.scenicItem.name), $line = 146), $out += "</td> <td>", 
                $line = 147, $out += $escape(scenicList.roomCount), $out += "</td> <td>", $line = 148, 
                $out += $escape(scenicList.costPrice), $out += "</td> <td>", $line = 149, $out += $escape(scenicList.salePrice), 
                $out += "</td> <td>", $line = 150, $out += $escape(scenicList.sumCostMoney), $out += "</td> <td>", 
                $line = 151, $out += $escape(scenicList.sumNeedGetMoney), $out += "</td> <td>", 
                $line = 152, $out += $escape(scenicList.orderNumber), $out += "</td> <td>", $line = 153, 
                $out += $escape(scenicList.prePayMoney), $out += "</td> </tr>", $line = 154;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingTicketList"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">票务代订</label> </h5> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border">票务公司</th> <th class="th-border">类型</th> <th class="th-border">出发城市</th> <th class="th-border">到达城市</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border" width="150">时间</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border">预付款</th> </tr> </thead> <tbody class="ticketBookingList">', 
            $line = 188, $each(bookingOrder.bookingTicketList, function(ticketList) {
                $out += ' <tr data-entity-id="', $line = 189, $out += $escape(ticketList.id), $out += '"> <td>', 
                $line = 190, null != ticketList.ticket && ($line = 190, $out += $escape(ticketList.ticket.name), 
                $line = 190), $out += "</td> <td> ", $line = 192, 1 == ticketList.type ? ($out += " 机票 ", 
                $line = 194) : 2 == ticketList.type ? ($out += " 汽车票 ", $line = 196) : 3 == ticketList.type ? ($out += " 火车票 ", 
                $line = 198) : 4 == ticketList.type && ($out += " 轮船票 ", $line = 200), $out += " </td> <td>", 
                $line = 202, $out += $escape(ticketList.startCity), $out += "</td> <td>", $line = 203, 
                $out += $escape(ticketList.arriveCity), $out += "</td> <td>", $line = 204, $out += $escape(ticketList.shift), 
                $out += "</td> <td>", $line = 205, $out += $escape(ticketList.seatLevel), $out += "</td> <td>", 
                $line = 206, $out += $escape(ticketList.startTime), $out += "</td> <td>", $line = 207, 
                $out += $escape(ticketList.roomCount), $out += "</td> <td>", $line = 208, $out += $escape(ticketList.costPrice), 
                $out += "</td> <td>", $line = 209, $out += $escape(ticketList.salePrice), $out += "</td> <td>", 
                $line = 210, $out += $escape(ticketList.sumCostMoney), $out += "</td> <td>", $line = 211, 
                $out += $escape(ticketList.sumNeedGetMoney), $out += "</td> <td>", $line = 212, 
                $out += $escape(ticketList.prePayMoney), $out += "</td> </tr>", $line = 213;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingBusList"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="cursor title-size">旅游车代订</label> </h5> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border" width="150">开始日期</th> <th class="th-border" width="150">结束日期</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">所属车队</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border ">预付款</th> </tr> </thead> <tbody class="busBookingList">', 
            $line = 246, $each(bookingOrder.bookingBusCompanieList, function(busList) {
                $out += ' <tr data-entity-id="', $line = 247, $out += $escape(busList.id), $out += '"> <td>', 
                $line = 248, $out += $escape($helpers.dateFormat(busList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 249, $out += $escape($helpers.dateFormat(busList.endTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 250, $out += $escape(busList.needSeatCount), $out += "</td> <td>", 
                $line = 251, $out += $escape(busList.needBusBrand), $out += "</td> <td>", $line = 252, 
                null != busList.busCompany && ($line = 252, $out += $escape(busList.busCompany.companyName), 
                $line = 252), $out += "</td> <td>", $line = 253, $out += $escape(busList.roomCount), 
                $out += "</td> <td>", $line = 254, $out += $escape(busList.costPrice), $out += "</td> <td>", 
                $line = 255, $out += $escape(busList.salePrice), $out += "</td> <td>", $line = 256, 
                $out += $escape(busList.sumCostMoney), $out += "</td> <td>", $line = 257, $out += $escape(busList.sumNeedGetMoney), 
                $out += "</td> <td>", $line = 258, $out += $escape(busList.prePayMoney), $out += "</td> </tr>", 
                $line = 259;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 updateBooking">\r\n <button class="btn btn-sm btn-success btn-Booking-export bookingBtn T-bookingBtn ">导出信息</button>\r\n	<form class="form-horizontal bookingMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<h5 class="">\r\n				<label class="middle title-size">代订信息</label>\r\n						</h5>\r\n\r\n        \r\n\r\n		<table class="whereQ whereTwo" style="width: 100%">\r\n			<!-- <tr>\r\n				<td colspan="8" class="HeadManage" style="text-align: left">代订信息</td>\r\n			</tr> -->\r\n			<tr>\r\n				<td class="style-myself">同行客户 </td>\r\n				<td style="text-align: left;padding-left: 6px;">{{if bookingOrder.partnerAgency != null}}{{bookingOrder.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n				<td class="style-myself">联系人 </td>\r\n				<td style="text-align: left;padding-left: 6px;">{{if bookingOrder.partnerAgencyContact != null}}{{bookingOrder.partnerAgencyContact.contactRealname}}{{/if}}</td>\r\n				<td class="style-myself">联系电话 </td>\r\n				<td style="text-align: left;padding-left: 6px;">{{if bookingOrder.partnerAgencyContact != null}}{{bookingOrder.partnerAgencyContact.contactMobileNumber}}{{/if}}</td>\r\n\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">游客 </td> \r\n				<td style="text-align: left;padding-left: 6px;" colspan="2">{{bookingOrder.touristRealname}}</td>\r\n				<td class="style-myself">游客电话 </td>\r\n				<td style="text-align: left;padding-left: 6px;" colspan="4">{{bookingOrder.touristMobileNumber}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">备注 </td>\r\n				<td style="text-align: left;padding-left: 6px;" colspan="5">{{bookingOrder.remark}}</td>\r\n			</tr>\r\n		</table>\r\n\r\n		<table class="whereQ whereTwo" style="width: 100%;margin-top: 10px">\r\n\r\n			<tr>\r\n				<td class="style-myself">总应收 </td>\r\n				<td style="text-align: left;padding-left: 6px;">{{bookingOrder.sumNeedGetMoney}}</td>\r\n				<td class="style-myself">已收 </td>\r\n				<td style="text-align: left;padding-left: 6px;">{{bookingOrder.getedMoney}}</td>\r\n				<td class="style-myself">预收款 </td>\r\n				<td style="text-align: left;padding-left: 6px;">{{bookingOrder.preIncomeMoney}}	</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">总成本 </td>\r\n				<td style="text-align: left;padding-left: 6px;" >{{bookingOrder.sumCostMoney}}</td>\r\n				<td class="style-myself">已付 </td>\r\n				<td  style="text-align: left;padding-left: 6px;" >{{bookingOrder.prePayMoney}}</td>\r\n				<td></td>\r\n				<td></td>\r\n			</tr>\r\n		</table>\r\n	</form>\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingHotelList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">酒店代订</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border" width="150">入住日期</th>\r\n										<th class="th-border" width="150">离店日期</th>\r\n										<th class="th-border">星级</th>\r\n										<th class="th-border">酒店</th>\r\n										<th class="th-border">房型</th>\r\n										<th class="th-border">天数</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n										<th class="th-border">预付款</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="hotelBookingList">{{each bookingOrder.bookingHotelList as hotelList}}\r\n									<tr data-entity-id="{{hotelList.id}}">\r\n										<td>{{hotelList.enterTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>{{hotelList.leaveTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>\r\n											{{if hotelList.hotel.level == 1}}\r\n											三星以下\r\n											{{else if hotelList.hotel.level == 2}}\r\n											三星\r\n											{{else if hotelList.hotel.level == 3}}\r\n											准四星\r\n											{{else if hotelList.hotel.level == 4}}\r\n											四星\r\n											{{else if hotelList.hotel.level == 5}}\r\n											准五星\r\n											{{else if hotelList.hotel.level == 6}}\r\n											五星\r\n											{{else if hotelList.hotel.level == 7}}\r\n											五星以上\r\n											{{/if}}\r\n										</td>\r\n										<td>{{if hotelList.hotel != null}}{{hotelList.hotel.name}}{{/if}}</td>\r\n										<td>{{if hotelList.hotelRoom != null}}{{hotelList.hotelRoom.type}}{{/if}}</td>\r\n										<td>{{hotelList.days}}</td>\r\n										<td>{{hotelList.roomCount}}</td>\r\n										<td>{{hotelList.costPrice}}/天</td>\r\n										<td>{{hotelList.salePrice}}/天</td>\r\n										<td>{{hotelList.sumCostMoney}}</td>\r\n										<td>{{hotelList.sumNeedGetMoney}}</td>\r\n										<td>{{hotelList.prePayMoney}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingScenicList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">景区项目代订</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border" width="150">日期</th>\r\n										<th class="th-border">景区</th>\r\n										<th class="th-border">收费项</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n										<th class="th-border">订单号</th>\r\n										<th class="th-border">预付款</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="scenicBookingList">{{each bookingOrder.bookingScenicList as scenicList}}\r\n									<tr data-entity-id="{{scenicList.id}}">\r\n										<td>{{scenicList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>{{if scenicList.scenic != null}}{{scenicList.scenic.name}}{{/if}}</td>\r\n										<td>{{if scenicList.scenicItem != null}}{{scenicList.scenicItem.name}}{{/if}}</td>\r\n										<td>{{scenicList.roomCount}}</td>\r\n										<td>{{scenicList.costPrice}}</td>\r\n										<td>{{scenicList.salePrice}}</td>\r\n										<td>{{scenicList.sumCostMoney}}</td>\r\n										<td>{{scenicList.sumNeedGetMoney}}</td>\r\n										<td>{{scenicList.orderNumber}}</td>\r\n										<td>{{scenicList.prePayMoney}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingTicketList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">票务代订</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">票务公司</th>\r\n										<th class="th-border">类型</th>\r\n										<th class="th-border">出发城市</th>\r\n										<th class="th-border">到达城市</th>\r\n										<th class="th-border">班次</th>\r\n										<th class="th-border">座位级别</th>\r\n										<th class="th-border" width="150">时间</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n										<th class="th-border">预付款</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="ticketBookingList">{{each bookingOrder.bookingTicketList as ticketList}}\r\n									<tr data-entity-id="{{ticketList.id}}">\r\n										<td>{{if ticketList.ticket != null}}{{ticketList.ticket.name}}{{/if}}</td>\r\n										<td>\r\n											{{if ticketList.type==1}}\r\n											机票\r\n											{{else if ticketList.type==2}}\r\n											汽车票\r\n											{{else if ticketList.type==3}}  \r\n											火车票\r\n											{{else if ticketList.type==4}}\r\n											轮船票\r\n											{{/if}}\r\n										</td>\r\n										<td>{{ticketList.startCity}}</td>\r\n										<td>{{ticketList.arriveCity}}</td>\r\n										<td>{{ticketList.shift}}</td>\r\n										<td>{{ticketList.seatLevel}}</td>\r\n										<td>{{ticketList.startTime}}</td>\r\n										<td>{{ticketList.roomCount}}</td>\r\n										<td>{{ticketList.costPrice}}</td>\r\n										<td>{{ticketList.salePrice}}</td>\r\n										<td>{{ticketList.sumCostMoney}}</td>\r\n										<td>{{ticketList.sumNeedGetMoney}}</td>\r\n										<td>{{ticketList.prePayMoney}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingBusList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="cursor title-size">旅游车代订</label>\r\n						</h5>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border" width="150">开始日期</th>\r\n										<th class="th-border" width="150">结束日期</th>\r\n										<th class="th-border">车座数</th>\r\n										<th class="th-border">车辆品牌</th>\r\n										<th class="th-border">所属车队</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n										<th class="th-border ">预付款</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="busBookingList">{{each bookingOrder.bookingBusCompanieList as busList}}\r\n									<tr data-entity-id="{{busList.id}}">\r\n										<td>{{busList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>{{busList.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>{{busList.needSeatCount}}</td>\r\n										<td>{{busList.needBusBrand}}</td>\r\n										<td>{{if busList.busCompany != null}}{{busList.busCompany.companyName}}{{/if}}</td>\r\n										<td>{{busList.roomCount}}</td>\r\n										<td>{{busList.costPrice}}</td>\r\n										<td>{{busList.salePrice}}</td>\r\n										<td>{{busList.sumCostMoney}}</td>\r\n										<td>{{busList.sumNeedGetMoney}}</td>\r\n										<td>{{busList.prePayMoney}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div><!-- \r\n		<div class="space-20"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-booking">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button> -->\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});