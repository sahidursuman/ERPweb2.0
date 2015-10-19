/*TMODJS:{"debug":true,"version":114,"md5":"54b9a37077d07696aa2306f9f7cce3cd"}*/
define(function(require) {
    return require("../../../template")("arrange/booking/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, bookingOrder = $data.bookingOrder, $escape = $utils.$escape, $each = $utils.$each, $out = ($data.hotelList, 
            $data.$index, $data.scenicList, $data.ticketList, $data.busList, "");
            return $out += '<div class="col-xs-12 updateBooking"> <form class="form-horizontal bookingMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo" style="width: 98%"> <tr> <td colspan="8" class="HeadManage" style="text-align: left">代订信息</td> </tr> <tr> <td class="style-myself">同行客户：</td> <td style="text-align: left">', 
            $line = 9, null != bookingOrder.partnerAgency && ($line = 9, $out += $escape(bookingOrder.partnerAgency.travelAgencyName), 
            $line = 9), $out += '</td> <td class="style-myself">联系人：</td> <td style="text-align: left">', 
            $line = 11, null != bookingOrder.partnerAgencyContact && ($line = 11, $out += $escape(bookingOrder.partnerAgencyContact.contactRealname), 
            $line = 11), $out += '</td> <td class="style-myself">联系电话：</td> <td style="text-align: left">', 
            $line = 13, null != bookingOrder.partnerAgencyContact && ($line = 13, $out += $escape(bookingOrder.partnerAgencyContact.contactMobileNumber), 
            $line = 13), $out += '</td> </tr> <tr> <td class="style-myself">游客：</td> <td style="text-align: left" colspan="2">', 
            $line = 18, $out += $escape(bookingOrder.touristRealname), $out += '</td> <td class="style-myself">游客电话：</td> <td style="text-align: left" colspan="4">', 
            $line = 20, $out += $escape(bookingOrder.touristMobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">备注：</td> <td style="text-align: left" colspan="5">', 
            $line = 24, $out += $escape(bookingOrder.remark), $out += '</td> </tr> </table> <table class="whereQ whereTwo" style="width: 98%;margin-top: 40px"> <tr> <td class="style-myself">总应收：</td> <td style="text-align: left">', 
            $line = 32, $out += $escape(bookingOrder.sumNeedGetMoney), $out += '</td> <td class="style-myself">已收：</td> <td style="text-align: left">', 
            $line = 34, $out += $escape(bookingOrder.getedMoney), $out += '</td> <td class="style-myself">收款方式：</td> <td style="text-align: left"> ', 
            $line = 36, 0 == bookingOrder.getType ? ($out += " 现金 ", $line = 38) : 1 == bookingOrder.getType ? ($out += " 签单 ", 
            $line = 40) : 2 == bookingOrder.getType ? ($out += " 转账 ", $line = 42) : ($out += " 网付 ", 
            $line = 44), $out += '</td> </tr> <tr> <td class="style-myself">总成本：</td> <td style="text-align: left" >', 
            $line = 48, $out += $escape(bookingOrder.sumCostMoney), $out += '</td> <td class="style-myself">已付：</td> <td style="text-align: left" >', 
            $line = 50, $out += $escape(bookingOrder.payedMoney), $out += '</td> <td class="style-myself">付款方式：</td> <td style="text-align: left" >', 
            $line = 52, 0 == bookingOrder.payType ? ($out += " 现金 ", $line = 54) : 1 == bookingOrder.payType ? ($out += " 签单 ", 
            $line = 56) : 2 == bookingOrder.payType ? ($out += " 转账 ", $line = 58) : ($out += " 网付 ", 
            $line = 60), $out += '</td> </tr> </table> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingHotelList"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">酒店代订</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border" width="150">入住日期</th> <th class="th-border" width="150">离店日期</th> <th class="th-border">星级</th> <th class="th-border">酒店</th> <th class="th-border">房型</th> <th class="th-border">天数</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> </tr> </thead> <tbody class="hotelBookingList">', 
            $line = 92, $each(bookingOrder.bookingHotelList, function(hotelList) {
                $out += ' <tr data-entity-id="', $line = 93, $out += $escape(hotelList.id), $out += '"> <td>', 
                $line = 94, $out += $escape($helpers.dateFormat(hotelList.enterTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 95, $out += $escape($helpers.dateFormat(hotelList.leaveTime, "yyyy-MM-dd")), 
                $out += "</td> <td> ", $line = 97, 1 == hotelList.hotel.level ? ($out += " 三星以下 ", 
                $line = 99) : 2 == hotelList.hotel.level ? ($out += " 三星 ", $line = 101) : 3 == hotelList.hotel.level ? ($out += " 准四星 ", 
                $line = 103) : 4 == hotelList.hotel.level ? ($out += " 四星 ", $line = 105) : 5 == hotelList.hotel.level ? ($out += " 准五星 ", 
                $line = 107) : 6 == hotelList.hotel.level ? ($out += " 五星 ", $line = 109) : 7 == hotelList.hotel.level && ($out += " 五星以上 ", 
                $line = 111), $out += " </td> <td>", $line = 113, null != hotelList.hotel && ($line = 113, 
                $out += $escape(hotelList.hotel.name), $line = 113), $out += "</td> <td>", $line = 114, 
                null != hotelList.hotelRoom && ($line = 114, $out += $escape(hotelList.hotelRoom.type), 
                $line = 114), $out += "</td> <td>", $line = 115, $out += $escape(hotelList.days), 
                $out += "</td> <td>", $line = 116, $out += $escape(hotelList.roomCount), $out += "</td> <td>", 
                $line = 117, $out += $escape(hotelList.costPrice), $out += "/天</td> <td>", $line = 118, 
                $out += $escape(hotelList.salePrice), $out += "/天</td> <td>", $line = 119, $out += $escape(hotelList.sumCostMoney), 
                $out += "</td> <td>", $line = 120, $out += $escape(hotelList.sumNeedGetMoney), $out += "</td> </tr>", 
                $line = 121;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingScenicList"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">3</span> <label class="middle title-size">景区项目代订</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border" width="150">日期</th> <th class="th-border">景区</th> <th class="th-border">收费项</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> <th class="th-border">订单号</th> </tr> </thead> <tbody class="scenicBookingList">', 
            $line = 152, $each(bookingOrder.bookingScenicList, function(scenicList) {
                $out += ' <tr data-entity-id="', $line = 153, $out += $escape(scenicList.id), $out += '"> <td>', 
                $line = 154, $out += $escape($helpers.dateFormat(scenicList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 155, null != scenicList.scenic && ($line = 155, $out += $escape(scenicList.scenic.name), 
                $line = 155), $out += "</td> <td>", $line = 156, null != scenicList.scenicItem && ($line = 156, 
                $out += $escape(scenicList.scenicItem.name), $line = 156), $out += "</td> <td>", 
                $line = 157, $out += $escape(scenicList.roomCount), $out += "</td> <td>", $line = 158, 
                $out += $escape(scenicList.costPrice), $out += "</td> <td>", $line = 159, $out += $escape(scenicList.salePrice), 
                $out += "</td> <td>", $line = 160, $out += $escape(scenicList.sumCostMoney), $out += "</td> <td>", 
                $line = 161, $out += $escape(scenicList.sumNeedGetMoney), $out += "</td> <td>", 
                $line = 162, $out += $escape(scenicList.orderNumber), $out += "</td> </tr>", $line = 163;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingTicketList"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">4</span> <label class="middle title-size">票务代订</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border">票务公司</th> <th class="th-border">类型</th> <th class="th-border">出发城市</th> <th class="th-border">到达城市</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border" width="150">时间</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> </tr> </thead> <tbody class="ticketBookingList">', 
            $line = 197, $each(bookingOrder.bookingTicketList, function(ticketList) {
                $out += ' <tr data-entity-id="', $line = 198, $out += $escape(ticketList.id), $out += '"> <td>', 
                $line = 199, null != ticketList.ticket && ($line = 199, $out += $escape(ticketList.ticket.name), 
                $line = 199), $out += "</td> <td> ", $line = 201, 1 == ticketList.type ? ($out += " 机票 ", 
                $line = 203) : 2 == ticketList.type ? ($out += " 汽车票 ", $line = 205) : 3 == ticketList.type ? ($out += " 火车票 ", 
                $line = 207) : 4 == ticketList.type && ($out += " 轮船票 ", $line = 209), $out += " </td> <td>", 
                $line = 211, $out += $escape(ticketList.startCity), $out += "</td> <td>", $line = 212, 
                $out += $escape(ticketList.arriveCity), $out += "</td> <td>", $line = 213, $out += $escape(ticketList.shift), 
                $out += "</td> <td>", $line = 214, $out += $escape(ticketList.seatLevel), $out += "</td> <td>", 
                $line = 215, $out += $escape(ticketList.startTime), $out += "</td> <td>", $line = 216, 
                $out += $escape(ticketList.roomCount), $out += "</td> <td>", $line = 217, $out += $escape(ticketList.costPrice), 
                $out += "</td> <td>", $line = 218, $out += $escape(ticketList.salePrice), $out += "</td> <td>", 
                $line = 219, $out += $escape(ticketList.sumCostMoney), $out += "</td> <td>", $line = 220, 
                $out += $escape(ticketList.sumNeedGetMoney), $out += "</td> </tr>", $line = 221;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col bookingBusList"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">5</span> <label class="cursor title-size">旅游车代订</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover margin-top"> <thead> <tr> <th class="th-border" width="150">开始日期</th> <th class="th-border" width="150">结束日期</th> <th class="th-border">车座数</th> <th class="th-border">车辆品牌</th> <th class="th-border">所属车队</th> <th class="th-border">数量</th> <th class="th-border">成本单价</th> <th class="th-border">销售单价</th> <th class="th-border">成本</th> <th class="th-border">应收</th> </tr> </thead> <tbody class="busBookingList">', 
            $line = 254, $each(bookingOrder.bookingBusCompanieList, function(busList) {
                $out += ' <tr data-entity-id="', $line = 255, $out += $escape(busList.id), $out += '"> <td>', 
                $line = 256, $out += $escape($helpers.dateFormat(busList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 257, $out += $escape($helpers.dateFormat(busList.endTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 258, $out += $escape(busList.needSeatCount), $out += "</td> <td>", 
                $line = 259, $out += $escape(busList.needBusBrand), $out += "</td> <td>", $line = 260, 
                null != busList.busCompany && ($line = 260, $out += $escape(busList.busCompany.companyName), 
                $line = 260), $out += "</td> <td>", $line = 261, $out += $escape(busList.roomCount), 
                $out += "</td> <td>", $line = 262, $out += $escape(busList.costPrice), $out += "</td> <td>", 
                $line = 263, $out += $escape(busList.salePrice), $out += "</td> <td>", $line = 264, 
                $out += $escape(busList.sumCostMoney), $out += "</td> <td>", $line = 265, $out += $escape(busList.sumNeedGetMoney), 
                $out += "</td> </tr>", $line = 266;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 updateBooking">\r\n	<form class="form-horizontal bookingMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ whereTwo" style="width: 98%">\r\n			<tr>\r\n				<td colspan="8" class="HeadManage" style="text-align: left">代订信息</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">同行客户：</td>\r\n				<td style="text-align: left">{{if bookingOrder.partnerAgency != null}}{{bookingOrder.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n				<td class="style-myself">联系人：</td>\r\n				<td style="text-align: left">{{if bookingOrder.partnerAgencyContact != null}}{{bookingOrder.partnerAgencyContact.contactRealname}}{{/if}}</td>\r\n				<td class="style-myself">联系电话：</td>\r\n				<td style="text-align: left">{{if bookingOrder.partnerAgencyContact != null}}{{bookingOrder.partnerAgencyContact.contactMobileNumber}}{{/if}}</td>\r\n\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">游客：</td>\r\n				<td style="text-align: left" colspan="2">{{bookingOrder.touristRealname}}</td>\r\n				<td class="style-myself">游客电话：</td>\r\n				<td style="text-align: left" colspan="4">{{bookingOrder.touristMobileNumber}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">备注：</td>\r\n				<td style="text-align: left" colspan="5">{{bookingOrder.remark}}</td>\r\n			</tr>\r\n		</table>\r\n\r\n		<table class="whereQ whereTwo" style="width: 98%;margin-top: 40px">\r\n\r\n			<tr>\r\n				<td class="style-myself">总应收：</td>\r\n				<td style="text-align: left">{{bookingOrder.sumNeedGetMoney}}</td>\r\n				<td class="style-myself">已收：</td>\r\n				<td style="text-align: left">{{bookingOrder.getedMoney}}</td>\r\n				<td class="style-myself">收款方式：</td>\r\n				<td style="text-align: left">	{{if bookingOrder.getType==0}}\r\n					现金\r\n					{{else if bookingOrder.getType==1}}\r\n					签单\r\n					{{else if bookingOrder.getType==2}}\r\n					转账\r\n					{{else}}\r\n					网付\r\n					{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">总成本：</td>\r\n				<td style="text-align: left" >{{bookingOrder.sumCostMoney}}</td>\r\n				<td class="style-myself">已付：</td>\r\n				<td style="text-align: left" >{{bookingOrder.payedMoney}}</td>\r\n				<td class="style-myself">付款方式：</td>\r\n				<td style="text-align: left" >{{if bookingOrder.payType==0}}\r\n					现金\r\n					{{else if bookingOrder.payType==1}}\r\n					签单\r\n					{{else if bookingOrder.payType==2}}\r\n					转账\r\n					{{else}}\r\n					网付\r\n					{{/if}}</td>\r\n			</tr>\r\n		</table>\r\n	</form>\r\n\r\n\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingHotelList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">2</span>\r\n							<label class="middle title-size">酒店代订</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border" width="150">入住日期</th>\r\n										<th class="th-border" width="150">离店日期</th>\r\n										<th class="th-border">星级</th>\r\n										<th class="th-border">酒店</th>\r\n										<th class="th-border">房型</th>\r\n										<th class="th-border">天数</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="hotelBookingList">{{each bookingOrder.bookingHotelList as hotelList}}\r\n									<tr data-entity-id="{{hotelList.id}}">\r\n										<td>{{hotelList.enterTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>{{hotelList.leaveTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>\r\n											{{if hotelList.hotel.level == 1}}\r\n											三星以下\r\n											{{else if hotelList.hotel.level == 2}}\r\n											三星\r\n											{{else if hotelList.hotel.level == 3}}\r\n											准四星\r\n											{{else if hotelList.hotel.level == 4}}\r\n											四星\r\n											{{else if hotelList.hotel.level == 5}}\r\n											准五星\r\n											{{else if hotelList.hotel.level == 6}}\r\n											五星\r\n											{{else if hotelList.hotel.level == 7}}\r\n											五星以上\r\n											{{/if}}\r\n										</td>\r\n										<td>{{if hotelList.hotel != null}}{{hotelList.hotel.name}}{{/if}}</td>\r\n										<td>{{if hotelList.hotelRoom != null}}{{hotelList.hotelRoom.type}}{{/if}}</td>\r\n										<td>{{hotelList.days}}</td>\r\n										<td>{{hotelList.roomCount}}</td>\r\n										<td>{{hotelList.costPrice}}/天</td>\r\n										<td>{{hotelList.salePrice}}/天</td>\r\n										<td>{{hotelList.sumCostMoney}}</td>\r\n										<td>{{hotelList.sumNeedGetMoney}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingScenicList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">3</span>\r\n							<label class="middle title-size">景区项目代订</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border" width="150">日期</th>\r\n										<th class="th-border">景区</th>\r\n										<th class="th-border">收费项</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n										<th class="th-border">订单号</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="scenicBookingList">{{each bookingOrder.bookingScenicList as scenicList}}\r\n									<tr data-entity-id="{{scenicList.id}}">\r\n										<td>{{scenicList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>{{if scenicList.scenic != null}}{{scenicList.scenic.name}}{{/if}}</td>\r\n										<td>{{if scenicList.scenicItem != null}}{{scenicList.scenicItem.name}}{{/if}}</td>\r\n										<td>{{scenicList.roomCount}}</td>\r\n										<td>{{scenicList.costPrice}}</td>\r\n										<td>{{scenicList.salePrice}}</td>\r\n										<td>{{scenicList.sumCostMoney}}</td>\r\n										<td>{{scenicList.sumNeedGetMoney}}</td>\r\n										<td>{{scenicList.orderNumber}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingTicketList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">4</span>\r\n							<label class="middle title-size">票务代订</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">票务公司</th>\r\n										<th class="th-border">类型</th>\r\n										<th class="th-border">出发城市</th>\r\n										<th class="th-border">到达城市</th>\r\n										<th class="th-border">班次</th>\r\n										<th class="th-border">座位级别</th>\r\n										<th class="th-border" width="150">时间</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="ticketBookingList">{{each bookingOrder.bookingTicketList as ticketList}}\r\n									<tr data-entity-id="{{ticketList.id}}">\r\n										<td>{{if ticketList.ticket != null}}{{ticketList.ticket.name}}{{/if}}</td>\r\n										<td>\r\n											{{if ticketList.type==1}}\r\n											机票\r\n											{{else if ticketList.type==2}}\r\n											汽车票\r\n											{{else if ticketList.type==3}}  \r\n											火车票\r\n											{{else if ticketList.type==4}}\r\n											轮船票\r\n											{{/if}}\r\n										</td>\r\n										<td>{{ticketList.startCity}}</td>\r\n										<td>{{ticketList.arriveCity}}</td>\r\n										<td>{{ticketList.shift}}</td>\r\n										<td>{{ticketList.seatLevel}}</td>\r\n										<td>{{ticketList.startTime}}</td>\r\n										<td>{{ticketList.roomCount}}</td>\r\n										<td>{{ticketList.costPrice}}</td>\r\n										<td>{{ticketList.salePrice}}</td>\r\n										<td>{{ticketList.sumCostMoney}}</td>\r\n										<td>{{ticketList.sumNeedGetMoney}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col bookingBusList">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">5</span>\r\n							<label class="cursor title-size">旅游车代订</label>\r\n						</h5>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover margin-top">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border" width="150">开始日期</th>\r\n										<th class="th-border" width="150">结束日期</th>\r\n										<th class="th-border">车座数</th>\r\n										<th class="th-border">车辆品牌</th>\r\n										<th class="th-border">所属车队</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">成本单价</th>\r\n										<th class="th-border">销售单价</th>\r\n										<th class="th-border">成本</th>\r\n										<th class="th-border">应收</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="busBookingList">{{each bookingOrder.bookingBusCompanieList as busList}}\r\n									<tr data-entity-id="{{busList.id}}">\r\n										<td>{{busList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>{{busList.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n										<td>{{busList.needSeatCount}}</td>\r\n										<td>{{busList.needBusBrand}}</td>\r\n										<td>{{if busList.busCompany != null}}{{busList.busCompany.companyName}}{{/if}}</td>\r\n										<td>{{busList.roomCount}}</td>\r\n										<td>{{busList.costPrice}}</td>\r\n										<td>{{busList.salePrice}}</td>\r\n										<td>{{busList.sumCostMoney}}</td>\r\n										<td>{{busList.sumNeedGetMoney}}</td>\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div><!-- \r\n		<div class="space-20"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-booking">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button> -->\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});