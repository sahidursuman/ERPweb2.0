/*TMODJS:{"debug":true,"version":166,"md5":"4c0593ac5eef2f5c13b174aaae71b75e"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, tripPlan = $data.tripPlan, $each = $utils.$each, busCompanyList = $data.busCompanyList, restaurantList = ($data.busCompany, 
            $data.$index, $data.restaurantList), hotelList = ($data.restaurant, $data.hotelList), scenicList = ($data.hotel, 
            $data.scenicList), shopList = ($data.scenic, $data.shopList), selfPayList = ($data.shop, 
            $data.selfPayList), ticketList = ($data.selfPay, $data.ticketList), otherList = ($data.ticket, 
            $data.otherList), $out = ($data.other, "");
            return $out += '<div class="container-fluid" style="overflow: hidden;"> <table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px"> <tr> <td class="style-myself">线路：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 5, $out += $escape(tripPlan.lineProduct.name), $out += '</td> <td class="style-myself">类别：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 7, $out += $escape(tripPlan.lineProduct.type), $out += '</td> <td class="style-myself">应用范围：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 9, 0 == tripPlan.lineProduct.customerType ? ($out += "散客", $line = 9) : ($out += "团体", 
            $line = 9), $out += '</td> <td class="style-myself">天数：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 11, $out += $escape(tripPlan.lineProduct.days), $out += '</td> <td class="style-myself">团号：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 13, $out += $escape(tripPlan.tripNumber), $out += '</td> </tr> <tr> <td class="style-myself">出团日期：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span name="startTime_Choose">', 
            $line = 17, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '</span></td> <td class="style-myself">完团日期：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 19, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
            $out += '</td> <td class="style-myself">团队人数：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 21, $out += $escape(tripPlan.touristAdultCount), $out += "大", $line = 21, 
            $out += $escape(tripPlan.touristChildCount), $out += '小</td> <td class="style-myself">导游：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" >', 
            $line = 23, $out += $escape(tripPlan.guide.realname), $out += '</td> <td class="style-myself">全陪：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 25, $out += $escape(tripPlan.accompanyGuideName), $out += '</td> </tr> <tr> <td class="style-myself">计划导付金额</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 30, $out += $escape(tripPlan.guideAllPayMoney), $out += '</td> <td class="style-myself">导游现收团款</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 33, $out += $escape(tripPlan.guideAllNowMoney), $out += '</td> <td class="style-myself">导游预支金额</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 36, $out += $escape(tripPlan.guideAllPreMoney), $out += '</td> </tr> </table> </div> <div class="container-fluid" style="margin-top:10px ;"> <div class="row no-margin"> <div style="margin: 30px auto 10px auto"> <span class="title-size"> <strong>旅游车安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">司机</th> <th class="th-border">司机电话</th> <th class="th-border">车牌号</th> <th class="th-border">车辆品牌</th> <th class="th-border">合同号</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 63, $each(busCompanyList, function(busCompany) {
                $out += " <tr> <td>", $line = 65, null != busCompany.driver && ($line = 65, $out += $escape(busCompany.driver.name), 
                $line = 65), $out += "</td> <td>", $line = 66, null != busCompany.driver && ($line = 66, 
                $out += $escape(busCompany.driver.mobileNumber), $line = 66), $out += "</td> <td>", 
                $line = 67, null != busCompany.bus && ($line = 67, $out += $escape(busCompany.bus.licenseNumber), 
                $line = 67), $out += "</td> <td>", $line = 68, null != busCompany.bus && ($line = 68, 
                $out += $escape(busCompany.bus.brand), $line = 68), $out += "</td> <td>", $line = 69, 
                $out += $escape(busCompany.contractNumber), $out += "</td> <td>", $line = 70, $out += $escape(busCompany.guidePayMoney), 
                $out += "</td> <td>", $line = 71, 0 == busCompany.payType ? ($out += "现付", $line = 71) : 1 == busCompany.payType ? ($out += "签单", 
                $line = 71) : 2 == busCompany.payType ? ($out += "转账", $line = 71) : ($out += "网付", 
                $line = 71), $out += "</td> <td>", $line = 72, $out += $escape(busCompany.remark), 
                $out += "</td> </tr> ", $line = 74;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap"> <span class="title-size"> <strong>餐安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">餐厅</th> <th class="th-border">联系电话</th> <th class="th-border">类型</th> <th class="th-border">餐标</th> <th class="th-border">人数</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 100, $each(restaurantList, function(restaurant) {
                $out += ' <tr> <td class="viewWhichDaysContainer" whichDay="', $line = 102, $out += $escape(restaurant.whichDay), 
                $out += '">第', $line = 102, $out += $escape(restaurant.whichDay), $out += "天</td> <td>", 
                $line = 103, null != restaurant.restaurant && ($line = 103, $out += $escape(restaurant.restaurant.name), 
                $line = 103), $out += "</td> <td>", $line = 104, null != restaurant.restaurant && ($line = 104, 
                $out += $escape(restaurant.restaurant.mobileNumber), $line = 104), $out += "</td> <td>", 
                $line = 105, null != restaurant.restaurantStandard && ($line = 105, $out += $escape(restaurant.restaurantStandard.type), 
                $line = 105), $out += "</td> <td>", $line = 106, null != restaurant.restaurantStandard && ($line = 106, 
                $out += $escape(restaurant.restaurantStandard.price), $line = 106), $out += "</td> <td>", 
                $line = 107, $out += $escape(restaurant.memberCount), $out += "</td> <td>", $line = 108, 
                $out += $escape(restaurant.guidePayMoney), $out += "</td> <td>", $line = 109, 0 == restaurant.payType ? ($out += "现付", 
                $line = 109) : 1 == restaurant.payType ? ($out += "签单", $line = 109) : 2 == restaurant.payType ? ($out += "转账", 
                $line = 109) : ($out += "网付", $line = 109), $out += "</td> <td>", $line = 110, $out += $escape(restaurant.remark), 
                $out += "</td> </tr> ", $line = 112;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap "> <span class="title-size"> <strong>房安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">星级</th> <th class="th-border">酒店</th> <th class="th-border">联系电话</th> <th class="th-border">房型</th> <th class="th-border">数量</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 138, $each(hotelList, function(hotel) {
                $out += ' <tr> <td class="viewWhichDaysContainer" whichDay="', $line = 140, $out += $escape(hotel.whichDay), 
                $out += '">第', $line = 140, $out += $escape(hotel.whichDay), $out += "天</td> <td>", 
                $line = 141, 1 == hotel.hotel.level ? ($out += "三星以下", $line = 141) : 2 == hotel.hotel.level ? ($out += "三星", 
                $line = 141) : 3 == hotel.hotel.level ? ($out += "准四星", $line = 141) : 4 == hotel.hotel.level ? ($out += "四星", 
                $line = 141) : 5 == hotel.hotel.level ? ($out += "准五星", $line = 141) : 6 == hotel.hotel.level ? ($out += "五星", 
                $line = 141) : 7 == hotel.hotel.level && ($out += "五星以上", $line = 141), $out += "</td> <td>", 
                $line = 142, $out += $escape(hotel.hotel.name), $out += "</td> <td>", $line = 143, 
                $out += $escape(hotel.hotel.mobileNumber), $out += "</td> <td>", $line = 144, $out += $escape(hotel.hotelRoom.type), 
                $out += "</td> <td>", $line = 145, $out += $escape(hotel.memberCount), $out += "</td> <td>", 
                $line = 146, $out += $escape(hotel.guidePayMoney), $out += "</td> <td>", $line = 147, 
                0 == hotel.payType ? ($out += "现付", $line = 147) : 1 == hotel.payType ? ($out += "签单", 
                $line = 147) : 2 == hotel.payType ? ($out += "转账", $line = 147) : ($out += "网付", 
                $line = 147), $out += "</td> <td>", $line = 148, $out += $escape(hotel.remark), 
                $out += "</td> </tr> ", $line = 150;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap "> <span class="title-size"> <strong>景点安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">时段</th> <th class="th-border">景区</th> <th class="th-border">收费项</th> <th class="th-border">游览时长</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">订单号</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 178, $each(scenicList, function(scenic) {
                $out += ' <tr> <td class="viewWhichDaysContainer" whichDay="', $line = 180, $out += $escape(scenic.whichDay), 
                $out += '">第', $line = 180, $out += $escape(scenic.whichDay), $out += "天</td> <td>", 
                $line = 181, $out += $escape(scenic.tourTime), $out += "</td> <td>", $line = 182, 
                $out += $escape(scenic.scenic.name), $out += "</td> <td>", $line = 183, $out += $escape(scenic.scenicItem.name), 
                $out += "</td> <td>", $line = 184, $out += $escape(scenic.tourDuration), $out += "</td> <td>", 
                $line = 185, $out += $escape(scenic.price), $out += "</td> <td>", $line = 186, $out += $escape(scenic.memberCount), 
                $out += "</td> <td>", $line = 187, $out += $escape(scenic.orderNumber), $out += "</td> <td>", 
                $line = 188, $out += $escape(scenic.guidePayMoney), $out += "</td> <td>", $line = 189, 
                0 == scenic.payType ? ($out += "现付", $line = 189) : 1 == scenic.payType ? ($out += "签单", 
                $line = 189) : 2 == scenic.payType ? ($out += "转账", $line = 189) : ($out += "网付", 
                $line = 189), $out += "</td> <td>", $line = 190, $out += $escape(scenic.remark), 
                $out += "</td> </tr> ", $line = 192;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap "> <span class="title-size"> <strong>购物安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">购物店</th> <th class="th-border">商品名</th> <th class="th-border">联系电话</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 214, $each(shopList, function(shop) {
                $out += ' <tr> <td class="viewWhichDaysContainer" whichDay="', $line = 216, $out += $escape(shop.whichDay), 
                $out += '">第', $line = 216, $out += $escape(shop.whichDay), $out += "天</td> <td>", 
                $line = 217, $out += $escape(shop.shop.name), $out += "</td> <td>", $line = 218, 
                $out += $escape(shop.shopPolicy.name), $out += "</td> <td>", $line = 219, $out += $escape(shop.shop.mobileNumber), 
                $out += "</td> <td>", $line = 220, $out += $escape(shop.remark), $out += "</td> </tr> ", 
                $line = 222;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap "> <span class="title-size"> <strong>自费安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">自费商家</th> <th class="th-border">自费项目</th> <th class="th-border">联系电话</th> <th class="th-border">单价</th> <th class="th-border">底价</th> <th class="th-border">数量</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 249, $each(selfPayList, function(selfPay) {
                $out += ' <tr> <td class="viewWhichDaysContainer" whichDay="', $line = 251, $out += $escape(selfPay.whichDay), 
                $out += '">第', $line = 251, $out += $escape(selfPay.whichDay), $out += "天</td> <td>", 
                $line = 252, $out += $escape(selfPay.selfPay.name), $out += "</td> <td>", $line = 253, 
                null != selfPay.selfPayItem && ($line = 253, $out += $escape(selfPay.selfPayItem.name), 
                $line = 253), $out += "</td> <td>", $line = 254, $out += $escape(selfPay.selfPay.mobileNumber), 
                $out += "</td> <td>", $line = 255, $out += $escape(selfPay.marketPrice), $out += "</td> <td>", 
                $line = 256, $out += $escape(selfPay.price), $out += "</td> <td>", $line = 257, 
                $out += $escape(selfPay.memberCount), $out += "</td> <td>", $line = 258, $out += $escape(selfPay.guidePayMoney), 
                $out += "</td> <td>", $line = 259, 0 == selfPay.payType ? ($out += "现付", $line = 259) : 1 == selfPay.payType ? ($out += "签单", 
                $line = 259) : 2 == selfPay.payType ? ($out += "转账", $line = 259) : ($out += "网付", 
                $line = 259), $out += "</td> <td>", $line = 260, $out += $escape(selfPay.remark), 
                $out += "</td> </tr> ", $line = 262;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap "> <span class="title-size"> <strong>票务安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">票务公司</th> <th class="th-border">类型</th> <th class="th-border">出发城市</th> <th class="th-border">到达城市</th> <th class="th-border">日期</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 291, $each(ticketList, function(ticket) {
                $out += " <tr> <td>", $line = 293, $out += $escape(ticket.ticket.name), $out += "</td> <td> ", 
                $line = 295, 1 == ticket.type ? ($out += " 飞机票 ", $line = 297) : 2 == ticket.type ? ($out += " 汽车票 ", 
                $line = 299) : 3 == ticket.type ? ($out += " 火车票 ", $line = 301) : 4 == ticket.type && ($out += " 轮船票 ", 
                $line = 303), $out += " </td> <td>", $line = 305, $out += $escape(ticket.startingCity), 
                $out += "</td> <td>", $line = 306, $out += $escape(ticket.arriveCity), $out += "</td> <td>", 
                $line = 307, null != ticket.startTime && ($line = 307, $out += $escape(ticket.startTime), 
                $line = 307), $out += "</td> <td>", $line = 308, $out += $escape(ticket.shift), 
                $out += "</td> <td>", $line = 309, $out += $escape(ticket.seatLevel), $out += "</td> <td>", 
                $line = 310, $out += $escape(ticket.price), $out += "</td> <td>", $line = 311, $out += $escape(ticket.memberCount), 
                $out += "</td> <td>", $line = 312, $out += $escape(ticket.guidePayMoney), $out += "</td> <td>", 
                $line = 313, 0 == ticket.payType ? ($out += "现付", $line = 313) : 1 == ticket.payType ? ($out += "签单", 
                $line = 313) : 2 == ticket.payType ? ($out += "转账", $line = 313) : ($out += "网付", 
                $line = 313), $out += "</td> <td>", $line = 314, $out += $escape(ticket.remark), 
                $out += "</td> </tr> ", $line = 316;
            }), $out += ' </tbody> </table> </div>  <div class=" tipPlan-gap"> <span class="title-size"> <strong>其他安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">项目</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 342, $each(otherList, function(other) {
                $out += ' <tr> <td class="viewWhichDaysContainer" whichDay="', $line = 344, $out += $escape(other.whichDay), 
                $out += '">第', $line = 344, $out += $escape(other.whichDay), $out += "天</td> <td>", 
                $line = 345, $out += $escape(other.name), $out += "</td> <td>", $line = 346, $out += $escape(other.managerName), 
                $out += "</td> <td>", $line = 347, $out += $escape(other.mobileNumber), $out += "</td> <td>", 
                $line = 348, $out += $escape(other.price), $out += "</td> <td>", $line = 349, $out += $escape(other.memberCount), 
                $out += "</td> <td>", $line = 350, $out += $escape(other.guidePayMoney), $out += "</td> <td>", 
                $line = 351, 0 == other.payType ? ($out += "现付", $line = 351) : 1 == other.payType ? ($out += "签单", 
                $line = 351) : 1 == other.payType ? ($out += "转账", $line = 351) : ($out += "网付", 
                $line = 351), $out += "</td> <td>", $line = 352, $out += $escape(other.remark), 
                $out += "</td> </tr> ", $line = 354;
            }), $out += " </tbody> </table> </div> </div> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid" style="overflow: hidden;">\r\n	<table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px">\r\n		<tr>\r\n			<td class="style-myself">线路：</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.lineProduct.name}}</td>\r\n			<td class="style-myself">类别：</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.lineProduct.type}}</td>\r\n			<td class="style-myself">应用范围：</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px">{{if tripPlan.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}</td>\r\n			<td class="style-myself">天数：</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.lineProduct.days}}</td>\r\n			<td class="style-myself">团号：</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.tripNumber}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="style-myself">出团日期：</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px"><span name="startTime_Choose">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</span></td>\r\n			<td class="style-myself">完团日期：</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n			<td class="style-myself">团队人数：</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.touristAdultCount}}大{{tripPlan.touristChildCount}}小</td>\r\n			<td class="style-myself">导游：</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px" >{{tripPlan.guide.realname}}</td>\r\n			<td class="style-myself">全陪：</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.accompanyGuideName}}</td>\r\n		</tr>\r\n\r\n		<tr>\r\n			<td  class="style-myself">计划导付金额</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{tripPlan.guideAllPayMoney}}</td>\r\n\r\n			<td class="style-myself">导游现收团款</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{tripPlan.guideAllNowMoney}}</td>\r\n\r\n			<td class="style-myself">导游预支金额</td>\r\n			<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{tripPlan.guideAllPreMoney}}</td>\r\n		</tr>\r\n	</table>\r\n</div>\r\n<div class="container-fluid" style="margin-top:10px ;">\r\n\r\n	<div class="row no-margin">\r\n		<div style="margin: 30px auto 10px auto">\r\n				<span  class="title-size">\r\n					<strong>旅游车安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding"> \r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">司机</th>\r\n						<th class="th-border">司机电话</th>\r\n						<th class="th-border">车牌号</th>\r\n						<th class="th-border">车辆品牌</th>\r\n						<th class="th-border">合同号</th>\r\n						<th class="th-border">导付</th>\r\n						<th class="th-border">付款方式</th>\r\n						<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody> \r\n				{{each busCompanyList as busCompany}}\r\n					<tr>\r\n						<td>{{if busCompany.driver != null}}{{busCompany.driver.name}}{{/if}}</td>\r\n						<td>{{if busCompany.driver != null}}{{busCompany.driver.mobileNumber}}{{/if}}</td>\r\n						<td>{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}</td>\r\n						<td>{{if busCompany.bus != null}}{{busCompany.bus.brand}}{{/if}}</td>\r\n						<td>{{busCompany.contractNumber}}</td>\r\n						<td>{{busCompany.guidePayMoney}}</td>\r\n						<td>{{if busCompany.payType == 0}}现付{{else if busCompany.payType==1}}签单{{else if busCompany.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{busCompany.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 餐安排 -->\r\n		<div class="tipPlan-gap">\r\n				<span class="title-size">\r\n					<strong>餐安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding"> \r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">日期</th>\r\n						<th class="th-border">餐厅</th>\r\n						<th class="th-border">联系电话</th>\r\n						<th class="th-border">类型</th>\r\n						<th class="th-border">餐标</th>\r\n						<th class="th-border">人数</th>\r\n						<th class="th-border">导付</th>\r\n						<th class="th-border">付款方式</th>\r\n						<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody> \r\n				{{each restaurantList as restaurant}}\r\n					<tr>\r\n						<td class="viewWhichDaysContainer" whichDay="{{restaurant.whichDay}}">第{{restaurant.whichDay}}天</td>\r\n						<td>{{if restaurant.restaurant != null}}{{restaurant.restaurant.name}}{{/if}}</td>\r\n						<td>{{if restaurant.restaurant != null}}{{restaurant.restaurant.mobileNumber}}{{/if}}</td>\r\n						<td>{{if restaurant.restaurantStandard != null}}{{restaurant.restaurantStandard.type}}{{/if}}</td>\r\n						<td>{{if restaurant.restaurantStandard != null}}{{restaurant.restaurantStandard.price}}{{/if}}</td>\r\n						<td>{{restaurant.memberCount}}</td>\r\n						<td>{{restaurant.guidePayMoney}}</td>\r\n						<td>{{if restaurant.payType == 0}}现付{{else if restaurant.payType==1}}签单{{else if restaurant.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{restaurant.remark}}</td>\r\n					</tr>\r\n                {{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 房安排 -->\r\n		<div class="tipPlan-gap ">\r\n				<span class="title-size">\r\n					<strong>房安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">星级</th>\r\n					<th class="th-border">酒店</th>\r\n					<th class="th-border">联系电话</th>\r\n					<th class="th-border">房型</th>\r\n					<th class="th-border">数量</th>\r\n					<th class="th-border">导付</th>\r\n					<th class="th-border">付款方式</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each hotelList as hotel}}\r\n					<tr>\r\n						<td class="viewWhichDaysContainer" whichDay="{{hotel.whichDay}}">第{{hotel.whichDay}}天</td>\r\n						<td>{{if hotel.hotel.level == 1}}三星以下{{else if hotel.hotel.level == 2}}三星{{else if hotel.hotel.level == 3}}准四星{{else if hotel.hotel.level == 4}}四星{{else if hotel.hotel.level == 5}}准五星{{else if hotel.hotel.level == 6}}五星{{else if hotel.hotel.level == 7}}五星以上{{/if}}</td>\r\n						<td>{{hotel.hotel.name}}</td>\r\n						<td>{{hotel.hotel.mobileNumber}}</td>\r\n						<td>{{hotel.hotelRoom.type}}</td>\r\n						<td>{{hotel.memberCount}}</td>\r\n						<td>{{hotel.guidePayMoney}}</td>\r\n						<td>{{if hotel.payType == 0}}现付{{else if hotel.payType==1}}签单{{else if hotel.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{hotel.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 景点安排 -->\r\n		<div class="tipPlan-gap ">\r\n				<span class="title-size">\r\n					<strong>景点安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">时段</th>\r\n					<th class="th-border">景区</th>\r\n					<th class="th-border">收费项</th>\r\n					<th class="th-border">游览时长</th>\r\n					<th class="th-border">单价</th>\r\n					<th class="th-border">数量</th>\r\n					<th class="th-border">订单号</th>\r\n					<th class="th-border">导付</th>\r\n					<th class="th-border">付款方式</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n                {{each scenicList as scenic}}\r\n					<tr>\r\n						<td class="viewWhichDaysContainer" whichDay="{{scenic.whichDay}}">第{{scenic.whichDay}}天</td>\r\n						<td>{{scenic.tourTime}}</td>\r\n						<td>{{scenic.scenic.name}}</td>\r\n						<td>{{scenic.scenicItem.name}}</td>\r\n						<td>{{scenic.tourDuration}}</td>\r\n						<td>{{scenic.price}}</td>\r\n						<td>{{scenic.memberCount}}</td>\r\n						<td>{{scenic.orderNumber}}</td>\r\n						<td>{{scenic.guidePayMoney}}</td>\r\n						<td>{{if scenic.payType == 0}}现付{{else if scenic.payType==1}}签单{{else if scenic.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{scenic.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 购物安排 -->\r\n		<div class="tipPlan-gap ">\r\n				<span class="title-size">\r\n					<strong>购物安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">购物店</th>\r\n					<th class="th-border">商品名</th>\r\n					<th class="th-border">联系电话</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each shopList as shop}}\r\n					<tr>\r\n						<td class="viewWhichDaysContainer" whichDay="{{shop.whichDay}}">第{{shop.whichDay}}天</td>\r\n						<td>{{shop.shop.name}}</td>\r\n						<td>{{shop.shopPolicy.name}}</td>\r\n						<td>{{shop.shop.mobileNumber}}</td>\r\n						<td>{{shop.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 自费安排 -->\r\n		<div class="tipPlan-gap ">\r\n				<span class="title-size">\r\n 					<strong>自费安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">自费商家</th>\r\n					<th class="th-border">自费项目</th>\r\n					<th class="th-border">联系电话</th>\r\n					<th class="th-border">单价</th>\r\n					<th class="th-border">底价</th>\r\n					<th class="th-border">数量</th>\r\n					<th class="th-border">导付</th>\r\n					<th class="th-border">付款方式</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each selfPayList as selfPay}}\r\n					<tr>\r\n						<td class="viewWhichDaysContainer" whichDay="{{selfPay.whichDay}}">第{{selfPay.whichDay}}天</td>\r\n						<td>{{selfPay.selfPay.name}}</td>\r\n						<td>{{if selfPay.selfPayItem !=null}}{{selfPay.selfPayItem.name}}{{/if}}</td>\r\n						<td>{{selfPay.selfPay.mobileNumber}}</td>\r\n						<td>{{selfPay.marketPrice}}</td>\r\n						<td>{{selfPay.price}}</td>\r\n						<td>{{selfPay.memberCount}}</td>\r\n						<td>{{selfPay.guidePayMoney}}</td>\r\n						<td>{{if selfPay.payType == 0}}现付{{else if selfPay.payType==1}}签单{{else if selfPay.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{selfPay.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 票务安排 -->\r\n		<div class="tipPlan-gap ">\r\n				<span class="title-size">\r\n					<strong>票务安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">票务公司</th>\r\n					<th class="th-border">类型</th>\r\n					<th class="th-border">出发城市</th>\r\n					<th class="th-border">到达城市</th>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">班次</th>\r\n					<th class="th-border">座位级别</th>\r\n					<th class="th-border">单价</th>\r\n					<th class="th-border">数量</th>\r\n					<th class="th-border">导付</th>\r\n					<th class="th-border">付款方式</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each ticketList as ticket}}\r\n					<tr>\r\n						<td>{{ticket.ticket.name}}</td>\r\n						<td>\r\n		                    {{if ticket.type == 1}}\r\n		                       		飞机票\r\n	                        {{else if ticket.type ==2}}\r\n		                       	 	 汽车票\r\n                            {{else if ticket.type ==3}}  \r\n		                       		 火车票\r\n                            {{else if ticket.type ==4}}\r\n		                        	 轮船票\r\n		                    {{/if}}\r\n						</td>\r\n						<td>{{ticket.startingCity}}</td>\r\n						<td>{{ticket.arriveCity}}</td>\r\n						<td>{{if ticket.startTime != null}}{{ticket.startTime}}{{/if}}</td>\r\n						<td>{{ticket.shift}}</td>\r\n						<td>{{ticket.seatLevel}}</td>\r\n						<td>{{ticket.price}}</td>\r\n						<td>{{ticket.memberCount}}</td>\r\n						<td>{{ticket.guidePayMoney}}</td>\r\n						<td>{{if ticket.payType == 0}}现付{{else if ticket.payType==1}}签单{{else if ticket.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{ticket.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 其他安排 -->\r\n		<div class=" tipPlan-gap">\r\n				<span class="title-size">\r\n					<strong>其他安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">项目</th>\r\n					<th class="th-border">联系人</th>\r\n					<th class="th-border">联系电话</th>\r\n					<th class="th-border">单价</th>\r\n					<th class="th-border">数量</th>\r\n					<th class="th-border">导付</th>\r\n					<th class="th-border">付款方式</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each otherList as other}}\r\n					<tr>\r\n						<td class="viewWhichDaysContainer" whichDay="{{other.whichDay}}">第{{other.whichDay}}天</td>\r\n						<td>{{other.name}}</td>\r\n						<td>{{other.managerName}}</td>\r\n						<td>{{other.mobileNumber}}</td>\r\n						<td>{{other.price}}</td>\r\n						<td>{{other.memberCount}}</td>\r\n						<td>{{other.guidePayMoney}}</td>\r\n						<td>{{if other.payType == 0}}现付{{else if other.payType==1}}签单{{else if other.payType==1}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{other.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table> \r\n		</div>\r\n	</div>\r\n</div>\r\n   '.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});