/*TMODJS:{"debug":true,"version":210,"md5":"59977171777dd8e2fc6f6291b6e941c5"}*/
define(function(require) {
    return require("../../../template")("arrange/booking/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, bookingOrder = $data.bookingOrder, $each = $utils.$each, $out = ($data.hotelList, 
            $data.$index, $data.scenicList, $data.ticketList, $data.busList, "");
            return $out += '<div class="updateBooking"> <button class="btn btn-sm btn-success btn-Booking-export export-Btn T-bookingBtn ">导出项目代订</button> <form class="form-horizontal bookingMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="group-info-area form-inline"> <div class="form-group fixed-width-1"> <span class="badge badge-primary">1</span> <label class="middle title-size">代订信息</label> </div> <div class="form-group fixed-width-1" style="dispaly:inline-block; margin-left:1040px;"> <label>代订单号：', 
            $line = 10, $out += $escape(bookingOrder.orderNumber), $out += '</label> </div> </div> <table class="whereQ whereTwo" style="width: 100%">  <tr> <td class="style-myself">同行客户 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 21, null != bookingOrder.partnerAgency && ($line = 21, $out += $escape(bookingOrder.partnerAgency.travelAgencyName), 
            $line = 21), $out += '</td> <td class="style-myself">联系人 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 23, null != bookingOrder.partnerAgencyContact && ($line = 23, $out += $escape(bookingOrder.partnerAgencyContact.contactRealname), 
            $line = 23), $out += '</td> <td class="style-myself">联系电话 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 25, null != bookingOrder.partnerAgencyContact && ($line = 25, $out += $escape(bookingOrder.partnerAgencyContact.contactMobileNumber), 
            $line = 25), $out += '</td> </tr> <tr> <td class="style-myself">游客 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 30, $out += $escape(bookingOrder.touristRealname), $out += '</td> <td class="style-myself">游客电话 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 32, $out += $escape(bookingOrder.touristMobileNumber), $out += '</td> <td class="style-myself">外联销售 </td> <td style="text-align: left;padding-left: 6px;">', 
            $line = 34, bookingOrder.outOPUser && ($line = 34, $out += $escape(bookingOrder.outOPUser.realName), 
            $line = 34), $out += '</td> </tr> <tr> <td class="style-myself">备注 </td> <td style="text-align: left;padding-left: 6px;" colspan="5">', 
            $line = 38, $out += $escape(bookingOrder.remark), $out += '</td> </tr> </table> <table class="whereQ whereTwo" style="width: 100%;margin-top: 10px"> <tr> <td class="style-myself">总应收 </td> <td style="text-align: left;padding-left: 6px;" class="F-float F-money">', 
            $line = 46, $out += $escape(bookingOrder.sumNeedGetMoney), $out += '</td> <td class="style-myself">已收 </td> <td style="text-align: left;padding-left: 6px;"class="F-float F-money">', 
            $line = 48, $out += $escape(bookingOrder.getedMoney), $out += '</td> <td class="style-myself">预收款 </td> <td style="text-align: left;padding-left: 6px;"class="F-float F-money">', 
            $line = 50, $out += $escape(bookingOrder.preIncomeMoney), $out += ' </td> </tr> <tr> <td class="style-myself">总成本 </td> <td style="text-align: left;padding-left: 6px;" class="F-float F-money">', 
            $line = 54, $out += $escape(bookingOrder.sumCostMoney), $out += '</td> <td class="style-myself">已付 </td> <td style="text-align: left;padding-left: 6px;" class="F-float F-money">', 
            $line = 56, $out += $escape(bookingOrder.payedMoney), $out += '</td> <td></td> <td></td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingHotelList"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">酒店代订</label> </h5> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border" width="150">入住日期</th> <th class="th-border" width="150">离店日期</th> <th class="th-border">星级</th> <th class="th-border">酒店</th> <th class="th-border">房型</th> <th class="th-border">天数</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border">预付款</th> </tr> </thead> <tbody class="hotelBookingList">', 
            $line = 88, $each(bookingOrder.bookingHotelList, function(hotelList) {
                $out += ' <tr data-entity-id="', $line = 89, $out += $escape(hotelList.id), $out += '"> <td>', 
                $line = 90, $out += $escape($helpers.dateFormat(hotelList.enterTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 91, $out += $escape($helpers.dateFormat(hotelList.leaveTime, "yyyy-MM-dd")), 
                $out += "</td> <td> ", $line = 93, 1 == hotelList.hotel.level ? ($out += " 三星以下 ", 
                $line = 95) : 2 == hotelList.hotel.level ? ($out += " 三星 ", $line = 97) : 3 == hotelList.hotel.level ? ($out += " 准四星 ", 
                $line = 99) : 4 == hotelList.hotel.level ? ($out += " 四星 ", $line = 101) : 5 == hotelList.hotel.level ? ($out += " 准五星 ", 
                $line = 103) : 6 == hotelList.hotel.level ? ($out += " 五星 ", $line = 105) : 7 == hotelList.hotel.level && ($out += " 五星以上 ", 
                $line = 107), $out += " </td> <td>", $line = 109, null != hotelList.hotel && ($line = 109, 
                $out += $escape(hotelList.hotel.name), $line = 109), $out += "</td> <td>", $line = 110, 
                null != hotelList.hotelRoom && ($line = 110, $out += $escape(hotelList.hotelRoom.type), 
                $line = 110), $out += '</td> <td class="F-float F-count">', $line = 111, $out += $escape(hotelList.days), 
                $out += '</td> <td class="F-float F-count">', $line = 112, $out += $escape(hotelList.roomCount), 
                $out += '</td> <td><span class="F-float F-money">', $line = 113, $out += $escape(hotelList.costPrice), 
                $out += '</span>/天</td> <td><span class="F-float F-money">', $line = 114, $out += $escape(hotelList.salePrice), 
                $out += '</span>/天</td> <td class="F-float F-money">', $line = 115, $out += $escape(hotelList.sumCostMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 116, $out += $escape(hotelList.sumNeedGetMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 117, $out += $escape(hotelList.prePayMoney), 
                $out += "</td> </tr>", $line = 118;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingScenicList"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">景区项目代订</label> </h5> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border" width="150">日期</th> <th class="th-border">景区</th> <th class="th-border">收费项</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border">订单号</th> <th class="th-border">预付款</th> </tr> </thead> <tbody class="scenicBookingList">', 
            $line = 149, $each(bookingOrder.bookingScenicList, function(scenicList) {
                $out += ' <tr data-entity-id="', $line = 150, $out += $escape(scenicList.id), $out += '"> <td>', 
                $line = 151, $out += $escape($helpers.dateFormat(scenicList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 152, null != scenicList.scenic && ($line = 152, $out += $escape(scenicList.scenic.name), 
                $line = 152), $out += "</td> <td>", $line = 153, null != scenicList.scenicItem && ($line = 153, 
                $out += $escape(scenicList.scenicItem.name), $line = 153), $out += '</td> <td class="F-float F-count">', 
                $line = 154, $out += $escape(scenicList.roomCount), $out += '</td> <td class="F-float F-money">', 
                $line = 155, $out += $escape(scenicList.costPrice), $out += '</td> <td class="F-float F-money">', 
                $line = 156, $out += $escape(scenicList.salePrice), $out += '</td> <td class="F-float F-money">', 
                $line = 157, $out += $escape(scenicList.sumCostMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 158, $out += $escape(scenicList.sumNeedGetMoney), $out += "</td> <td>", 
                $line = 159, $out += $escape(scenicList.orderNumber), $out += '</td> <td class="F-float F-money">', 
                $line = 160, $out += $escape(scenicList.prePayMoney), $out += "</td> </tr>", $line = 161;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingTicketList"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">票务代订</label> </h5> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border">票务公司</th> <th class="th-border">类型</th> <th class="th-border">出发城市</th> <th class="th-border">到达城市</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border" width="150">时间</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border">预付款</th> </tr> </thead> <tbody class="ticketBookingList">', 
            $line = 195, $each(bookingOrder.bookingTicketList, function(ticketList) {
                $out += ' <tr data-entity-id="', $line = 196, $out += $escape(ticketList.id), $out += '"> <td>', 
                $line = 197, null != ticketList.ticket && ($line = 197, $out += $escape(ticketList.ticket.name), 
                $line = 197), $out += "</td> <td> ", $line = 199, 1 == ticketList.type ? ($out += " 机票 ", 
                $line = 201) : 2 == ticketList.type ? ($out += " 汽车票 ", $line = 203) : 3 == ticketList.type ? ($out += " 火车票 ", 
                $line = 205) : 4 == ticketList.type && ($out += " 轮船票 ", $line = 207), $out += " </td> <td>", 
                $line = 209, $out += $escape(ticketList.startCity), $out += "</td> <td>", $line = 210, 
                $out += $escape(ticketList.arriveCity), $out += "</td> <td>", $line = 211, $out += $escape(ticketList.shift), 
                $out += "</td> <td>", $line = 212, $out += $escape(ticketList.seatLevel), $out += "</td> <td>", 
                $line = 213, $out += $escape($helpers.getDataForMatHS(ticketList.startTime)), $out += '</td> <td class="F-float F-count">', 
                $line = 214, $out += $escape(ticketList.roomCount), $out += '</td> <td class="F-float F-money">', 
                $line = 215, $out += $escape(ticketList.costPrice), $out += '</td> <td class="F-float F-money">', 
                $line = 216, $out += $escape(ticketList.salePrice), $out += '</td> <td class="F-float F-money">', 
                $line = 217, $out += $escape(ticketList.sumCostMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 218, $out += $escape(ticketList.sumNeedGetMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 219, $out += $escape(ticketList.prePayMoney), $out += "</td> </tr>", $line = 220;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingBusList"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="cursor title-size">旅游车代订</label> </h5> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border" width="150">开始日期</th> <th class="th-border" width="150">结束日期</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">所属车队</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border ">预付款</th> </tr> </thead> <tbody class="busBookingList">', 
            $line = 253, $each(bookingOrder.bookingBusCompanieList, function(busList) {
                $out += ' <tr data-entity-id="', $line = 254, $out += $escape(busList.id), $out += '"> <td>', 
                $line = 255, $out += $escape($helpers.dateFormat(busList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 256, $out += $escape($helpers.dateFormat(busList.endTime, "yyyy-MM-dd")), 
                $out += '</td> <td class="F-float F-count">', $line = 257, $out += $escape(busList.needSeatCount), 
                $out += "</td> <td>", $line = 258, $out += $escape(busList.needBusBrand), $out += "</td> <td>", 
                $line = 259, null != busList.busCompany && ($line = 259, $out += $escape(busList.busCompany.companyName), 
                $line = 259), $out += '</td> <td class="F-float F-count">', $line = 260, $out += $escape(busList.roomCount), 
                $out += '</td> <td class="F-float F-money">', $line = 261, $out += $escape(busList.costPrice), 
                $out += '</td> <td class="F-float F-money">', $line = 262, $out += $escape(busList.salePrice), 
                $out += '</td> <td class="F-float F-money">', $line = 263, $out += $escape(busList.sumCostMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 264, $out += $escape(busList.sumNeedGetMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 265, $out += $escape(busList.prePayMoney), 
                $out += "</td> </tr>", $line = 266;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="updateBooking">\r\n <button class="btn btn-sm btn-success btn-Booking-export export-Btn T-bookingBtn ">导出项目代订</button>\r\n	<form class="form-horizontal bookingMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="group-info-area form-inline">\r\n			<div class="form-group fixed-width-1">\r\n		        <span class="badge badge-primary">1</span>\r\n		        <label class="middle title-size">代订信息</label>\r\n		    </div>\r\n			<div class="form-group fixed-width-1" style="dispaly:inline-block; margin-left:1040px;">\r\n		        <label>代订单号：{{bookingOrder.orderNumber}}</label>\r\n		         \r\n		    </div> \r\n		</div>\r\n\r\n		<table class="whereQ whereTwo" style="width: 100%">\r\n			<!-- <tr>\r\n				<td colspan="8" class="HeadManage" style="text-align: left">代订信息</td>\r\n			</tr> -->\r\n			<tr>\r\n				<td class="style-myself">同行客户 </td>\r\n				<td style="text-align: left;padding-left: 6px;">{{if bookingOrder.partnerAgency != null}}{{bookingOrder.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n				<td class="style-myself">联系人 </td>\r\n				<td style="text-align: left;padding-left: 6px;">{{if bookingOrder.partnerAgencyContact != null}}{{bookingOrder.partnerAgencyContact.contactRealname}}{{/if}}</td>\r\n				<td class="style-myself">联系电话 </td>\r\n				<td style="text-align: left;padding-left: 6px;">{{if bookingOrder.partnerAgencyContact != null}}{{bookingOrder.partnerAgencyContact.contactMobileNumber}}{{/if}}</td>\r\n\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">游客 </td> \r\n				<td style="text-align: left;padding-left: 6px;">{{bookingOrder.touristRealname}}</td>\r\n				<td class="style-myself">游客电话 </td>\r\n				<td style="text-align: left;padding-left: 6px;">{{bookingOrder.touristMobileNumber}}</td>\r\n				<td class="style-myself">外联销售 </td>\r\n				<td style="text-align: left;padding-left: 6px;">{{if bookingOrder.outOPUser}}{{bookingOrder.outOPUser.realName}}{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">备注 </td>\r\n				<td style="text-align: left;padding-left: 6px;" colspan="5">{{bookingOrder.remark}}</td>\r\n			</tr>\r\n		</table>\r\n\r\n		<table class="whereQ whereTwo" style="width: 100%;margin-top: 10px">\r\n\r\n			<tr>\r\n				<td class="style-myself">总应收 </td>\r\n				<td style="text-align: left;padding-left: 6px;" class="F-float F-money">{{bookingOrder.sumNeedGetMoney}}</td>\r\n				<td class="style-myself">已收 </td>\r\n				<td style="text-align: left;padding-left: 6px;"class="F-float F-money">{{bookingOrder.getedMoney}}</td>\r\n				<td class="style-myself">预收款 </td>\r\n				<td style="text-align: left;padding-left: 6px;"class="F-float F-money">{{bookingOrder.preIncomeMoney}}	</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">总成本 </td>\r\n				<td style="text-align: left;padding-left: 6px;" class="F-float F-money">{{bookingOrder.sumCostMoney}}</td>\r\n				<td class="style-myself">已付 </td>\r\n				<td  style="text-align: left;padding-left: 6px;" class="F-float F-money">{{bookingOrder.payedMoney}}</td>\r\n				<td></td>\r\n				<td></td>\r\n			</tr>\r\n		</table>\r\n	</form>\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingHotelList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">酒店代订</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border" width="150">入住日期</th>\r\n										<th class="th-border" width="150">离店日期</th>\r\n										<th class="th-border">星级</th>\r\n										<th class="th-border">酒店</th>\r\n										<th class="th-border">房型</th>\r\n										<th class="th-border">天数</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n										<th class="th-border">预付款</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="hotelBookingList">{{each bookingOrder.bookingHotelList as hotelList}}\r\n									<tr data-entity-id="{{hotelList.id}}">\r\n										<td>{{hotelList.enterTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>{{hotelList.leaveTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>\r\n											{{if hotelList.hotel.level == 1}}\r\n											三星以下\r\n											{{else if hotelList.hotel.level == 2}}\r\n											三星\r\n											{{else if hotelList.hotel.level == 3}}\r\n											准四星\r\n											{{else if hotelList.hotel.level == 4}}\r\n											四星\r\n											{{else if hotelList.hotel.level == 5}}\r\n											准五星\r\n											{{else if hotelList.hotel.level == 6}}\r\n											五星\r\n											{{else if hotelList.hotel.level == 7}}\r\n											五星以上\r\n											{{/if}}\r\n										</td>\r\n										<td>{{if hotelList.hotel != null}}{{hotelList.hotel.name}}{{/if}}</td>\r\n										<td>{{if hotelList.hotelRoom != null}}{{hotelList.hotelRoom.type}}{{/if}}</td>\r\n										<td class="F-float F-count">{{hotelList.days}}</td>\r\n										<td class="F-float F-count">{{hotelList.roomCount}}</td>\r\n										<td><span class="F-float F-money">{{hotelList.costPrice}}</span>/天</td>\r\n										<td><span class="F-float F-money">{{hotelList.salePrice}}</span>/天</td>\r\n										<td class="F-float F-money">{{hotelList.sumCostMoney}}</td>\r\n										<td class="F-float F-money">{{hotelList.sumNeedGetMoney}}</td>\r\n										<td class="F-float F-money">{{hotelList.prePayMoney}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingScenicList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">景区项目代订</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border" width="150">日期</th>\r\n										<th class="th-border">景区</th>\r\n										<th class="th-border">收费项</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n										<th class="th-border">订单号</th>\r\n										<th class="th-border">预付款</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="scenicBookingList">{{each bookingOrder.bookingScenicList as scenicList}}\r\n									<tr data-entity-id="{{scenicList.id}}">\r\n										<td>{{scenicList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>{{if scenicList.scenic != null}}{{scenicList.scenic.name}}{{/if}}</td>\r\n										<td>{{if scenicList.scenicItem != null}}{{scenicList.scenicItem.name}}{{/if}}</td>\r\n										<td class="F-float F-count">{{scenicList.roomCount}}</td>\r\n										<td class="F-float F-money">{{scenicList.costPrice}}</td>\r\n										<td class="F-float F-money">{{scenicList.salePrice}}</td>\r\n										<td class="F-float F-money">{{scenicList.sumCostMoney}}</td>\r\n										<td class="F-float F-money">{{scenicList.sumNeedGetMoney}}</td>\r\n										<td>{{scenicList.orderNumber}}</td>\r\n										<td class="F-float F-money">{{scenicList.prePayMoney}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingTicketList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">票务代订</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">票务公司</th>\r\n										<th class="th-border">类型</th>\r\n										<th class="th-border">出发城市</th>\r\n										<th class="th-border">到达城市</th>\r\n										<th class="th-border">班次</th>\r\n										<th class="th-border">座位级别</th>\r\n										<th class="th-border" width="150">时间</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n										<th class="th-border">预付款</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="ticketBookingList">{{each bookingOrder.bookingTicketList as ticketList}}\r\n									<tr data-entity-id="{{ticketList.id}}">\r\n										<td>{{if ticketList.ticket != null}}{{ticketList.ticket.name}}{{/if}}</td>\r\n										<td>\r\n											{{if ticketList.type==1}}\r\n											机票\r\n											{{else if ticketList.type==2}}\r\n											汽车票\r\n											{{else if ticketList.type==3}}  \r\n											火车票\r\n											{{else if ticketList.type==4}}\r\n											轮船票\r\n											{{/if}}\r\n										</td>\r\n										<td>{{ticketList.startCity}}</td>\r\n										<td>{{ticketList.arriveCity}}</td>\r\n										<td>{{ticketList.shift}}</td>\r\n										<td>{{ticketList.seatLevel}}</td>\r\n										<td>{{ticketList.startTime | getDataForMatHS}}</td>\r\n										<td class="F-float F-count">{{ticketList.roomCount}}</td>\r\n										<td class="F-float F-money">{{ticketList.costPrice}}</td>\r\n										<td class="F-float F-money">{{ticketList.salePrice}}</td>\r\n										<td class="F-float F-money">{{ticketList.sumCostMoney}}</td>\r\n										<td class="F-float F-money">{{ticketList.sumNeedGetMoney}}</td>\r\n										<td class="F-float F-money">{{ticketList.prePayMoney}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingBusList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="cursor title-size">旅游车代订</label>\r\n						</h5>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border" width="150">开始日期</th>\r\n										<th class="th-border" width="150">结束日期</th>\r\n										<th class="th-border">车座数</th>\r\n										<th class="th-border">车辆品牌</th>\r\n										<th class="th-border">所属车队</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n										<th class="th-border ">预付款</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="busBookingList">{{each bookingOrder.bookingBusCompanieList as busList}}\r\n									<tr data-entity-id="{{busList.id}}">\r\n										<td>{{busList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>{{busList.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td class="F-float F-count">{{busList.needSeatCount}}</td>\r\n										<td>{{busList.needBusBrand}}</td>\r\n										<td>{{if busList.busCompany != null}}{{busList.busCompany.companyName}}{{/if}}</td>\r\n										<td class="F-float F-count">{{busList.roomCount}}</td>\r\n										<td class="F-float F-money">{{busList.costPrice}}</td>\r\n										<td class="F-float F-money">{{busList.salePrice}}</td>\r\n										<td class="F-float F-money">{{busList.sumCostMoney}}</td>\r\n										<td class="F-float F-money">{{busList.sumNeedGetMoney}}</td>\r\n										<td class="F-float F-money">{{busList.prePayMoney}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div><!-- \r\n		<div class="space-20"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-booking">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button> -->\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});