/*TMODJS:{"debug":true,"version":71,"md5":"a16128dd12e5f6fd7d319dd69761d454"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, tripPlan = $data.tripPlan, $each = $utils.$each, busCompanyList = $data.busCompanyList, restaurantList = ($data.busCompany, 
            $data.$index, $data.restaurantList), hotelList = ($data.restaurant, $data.hotelList), scenicList = ($data.hotel, 
            $data.scenicList), shopList = ($data.scenic, $data.shopList), selfPayList = ($data.shop, 
            $data.selfPayList), ticketList = ($data.selfPay, $data.ticketList), otherList = ($data.ticket, 
            $data.otherList), $out = ($data.other, "");
            return $out += '<div class="container-fluid" style="overflow: hidden;"> <div class="row no-margin"> <div class="col-sm-12"> <div class="row show-grid"> <div class="col-sm-3 font-size-14 border"> <span class="col-sm-4 control-label align-right no-padding-right">线路：</span> <span class="col-sm-8 control-label">', 
            $line = 7, $out += $escape(tripPlan.lineProduct.name), $out += '</span> </div> <div class="col-sm-3 font-size-14 border no-border-left"> <span class="col-sm-4 control-label align-right no-border-left">类别：</span> <span class="col-sm-8 control-label">', 
            $line = 11, $out += $escape(tripPlan.lineProduct.type), $out += '</span> </div> <div class="col-sm-3 font-size-14 border no-border-left"> <span class="col-sm-4 control-label align-right no-padding">应用范围：</span> <span class="col-sm-8 control-label">', 
            $line = 15, 0 == tripPlan.lineProduct.customerType ? ($out += "散客", $line = 15) : ($out += "团体", 
            $line = 15), $out += '</span> </div> <div class="col-sm-3 font-size-14 border no-border-left"> <span class="col-sm-4 control-label align-right no-padding">天数：</span> <span class="col-sm-8 control-label">', 
            $line = 19, $out += $escape(tripPlan.lineProduct.days), $out += '</span> </div> <div class="col-sm-3 font-size-14 border no-border-top"> <span class="col-sm-4 control-label align-right no-padding">团号：</span> <span class="col-sm-8 control-label">', 
            $line = 24, $out += $escape(tripPlan.tripNumber), $out += '</span> </div> <div class="col-sm-3 font-size-14 border no-border-top no-border-left"> <span class="col-sm-4 control-label align-right no-padding">出团日期：</span> <span class="col-sm-8 control-label">', 
            $line = 28, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '</span> </div> <div class="col-sm-3 font-size-14 border no-border-top no-border-left"> <span class="col-sm-4 control-label align-right no-padding">完团日期：</span> <span class="col-sm-8 control-label">', 
            $line = 32, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
            $out += '</span> </div> <div class="col-sm-3 font-size-14 border no-border-top no-border-left"> <span class="col-sm-4 control-label align-right no-padding">团队人数：</span> <span class="col-sm-8 control-label">', 
            $line = 36, $out += $escape(tripPlan.touristAdultCount), $out += "大", $line = 36, 
            $out += $escape(tripPlan.touristChildCount), $out += '小</span> </div> <div class="col-sm-3 font-size-14 border no-border-top"> <span class="col-sm-4 control-label align-right no-padding">导游：</span> <span class="col-sm-8 control-label">', 
            $line = 41, $out += $escape(tripPlan.guide.realname), $out += '</span> </div>  <div class="col-sm-3 font-size-14 border no-border-top no-border-left"> <span class="col-sm-4 control-label align-right no-padding">全陪：</span> <span class="col-sm-8 control-label">', 
            $line = 53, $out += $escape(tripPlan.accompanyGuideName), $out += '</span> </div> </div> </div> </div> </div> <div class="container-fluid"> <div class="row form-horizontal no-margin"> <div class="col-sm-3 border"> <label class="col-sm-6 control-label no-padding"><strong>计划导付金额：</strong></label> <label class="col-sm-6 control-label align-left no-padding-top"><strong>', 
            $line = 63, $out += $escape(tripPlan.guideAllPayMoney), $out += '</strong></label> </div> <div class="col-sm-3 border no-border-left"> <label class="col-sm-6 control-label no-padding"><strong>导游现收团款：</strong></label> <label class="col-sm-6 control-label align-left no-padding-top"><strong>', 
            $line = 67, $out += $escape(tripPlan.guideAllNowMoney), $out += '</strong></label> </div> <div class="col-sm-3 border no-border-left"> <label class="col-sm-6 control-label no-padding align-right"><strong>导游预支金额：</strong></label> <label class="col-sm-6 control-label align-left no-padding-top"><strong>', 
            $line = 71, $out += $escape(tripPlan.guideAllPreMoney), $out += '</strong></label> </div> <div class="col-sm-3 border no-border-left"> <label class="col-sm-6 control-label no-padding align-right"><strong>&nbsp;</strong></label> </div> </div> <div class="row no-margin"> <div class="col-sm-12 border no-border-top"> <label class="col-sm-12 control-label"><strong>旅游车安排：</strong></label> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>司机</th> <th>司机电话</th> <th>车牌号</th> <th>车辆品牌</th> <th>合同号</th> <th>导付</th> <th>付款方式</th> <th style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 96, $each(busCompanyList, function(busCompany) {
                $out += " <tr> <td>", $line = 98, null != busCompany.driver && ($line = 98, $out += $escape(busCompany.driver.name), 
                $line = 98), $out += "</td> <td>", $line = 99, null != busCompany.driver && ($line = 99, 
                $out += $escape(busCompany.driver.mobileNumber), $line = 99), $out += "</td> <td>", 
                $line = 100, null != busCompany.bus && ($line = 100, $out += $escape(busCompany.bus.licenseNumber), 
                $line = 100), $out += "</td> <td>", $line = 101, null != busCompany.bus && ($line = 101, 
                $out += $escape(busCompany.bus.brand), $line = 101), $out += "</td> <td>", $line = 102, 
                $out += $escape(busCompany.contractNumber), $out += "</td> <td>", $line = 103, $out += $escape(busCompany.guidePayMoney), 
                $out += "</td> <td>", $line = 104, 0 == busCompany.payType ? ($out += "现付", $line = 104) : 1 == busCompany.payType ? ($out += "签单", 
                $line = 104) : 2 == busCompany.payType ? ($out += "转账", $line = 104) : ($out += "网付", 
                $line = 104), $out += "</td> <td>", $line = 105, $out += $escape(busCompany.remark), 
                $out += "</td> </tr> ", $line = 107;
            }), $out += ' </tbody> </table> </div>  <div class="col-sm-12 border"> <label class="col-sm-12 control-label"><strong>餐安排：</strong></label> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>日期</th> <th>餐厅</th> <th>联系电话</th> <th>类型</th> <th>餐标</th> <th>人数</th> <th>导付</th> <th>付款方式</th> <th style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 131, $each(restaurantList, function(restaurant) {
                $out += " <tr> <td>第", $line = 133, $out += $escape(restaurant.whichDay), $out += "天</td> <td>", 
                $line = 134, null != restaurant.restaurant && ($line = 134, $out += $escape(restaurant.restaurant.name), 
                $line = 134), $out += "</td> <td>", $line = 135, null != restaurant.restaurant && ($line = 135, 
                $out += $escape(restaurant.restaurant.mobileNumber), $line = 135), $out += "</td> <td>", 
                $line = 136, null != restaurant.restaurantStandard && ($line = 136, $out += $escape(restaurant.restaurantStandard.type), 
                $line = 136), $out += "</td> <td>", $line = 137, null != restaurant.restaurantStandard && ($line = 137, 
                $out += $escape(restaurant.restaurantStandard.price), $line = 137), $out += "</td> <td>", 
                $line = 138, $out += $escape(restaurant.memberCount), $out += "</td> <td>", $line = 139, 
                $out += $escape(restaurant.guidePayMoney), $out += "</td> <td>", $line = 140, 0 == restaurant.payType ? ($out += "现付", 
                $line = 140) : 1 == restaurant.payType ? ($out += "签单", $line = 140) : 2 == restaurant.payType ? ($out += "转账", 
                $line = 140) : ($out += "网付", $line = 140), $out += "</td> <td>", $line = 141, $out += $escape(restaurant.remark), 
                $out += "</td> </tr> ", $line = 143;
            }), $out += ' </tbody> </table> </div>  <div class="col-sm-12 border"> <label class="col-sm-12 control-label"><strong>房安排：</strong></label> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>日期</th> <th>星级</th> <th>酒店</th> <th>联系电话</th> <th>房型</th> <th>数量</th> <th>导付</th> <th>付款方式</th> <th style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 167, $each(hotelList, function(hotel) {
                $out += " <tr> <td>第", $line = 169, $out += $escape(hotel.whichDay), $out += "天</td> <td>", 
                $line = 170, 1 == hotel.hotel.level ? ($out += "三星以下", $line = 170) : 2 == hotel.hotel.level ? ($out += "三星", 
                $line = 170) : 3 == hotel.hotel.level ? ($out += "准四星", $line = 170) : 4 == hotel.hotel.level ? ($out += "四星", 
                $line = 170) : 5 == hotel.hotel.level ? ($out += "准五星", $line = 170) : 6 == hotel.hotel.level ? ($out += "五星", 
                $line = 170) : 7 == hotel.hotel.level && ($out += "五星以上", $line = 170), $out += "</td> <td>", 
                $line = 171, $out += $escape(hotel.hotel.name), $out += "</td> <td>", $line = 172, 
                $out += $escape(hotel.hotel.mobileNumber), $out += "</td> <td>", $line = 173, $out += $escape(hotel.hotelRoom.type), 
                $out += "</td> <td>", $line = 174, $out += $escape(hotel.needRoomCount), $out += "</td> <td>", 
                $line = 175, $out += $escape(hotel.guidePayMoney), $out += "</td> <td>", $line = 176, 
                0 == hotel.payType ? ($out += "现付", $line = 176) : 1 == hotel.payType ? ($out += "签单", 
                $line = 176) : 2 == hotel.payType ? ($out += "转账", $line = 176) : ($out += "网付", 
                $line = 176), $out += "</td> <td>", $line = 177, $out += $escape(hotel.remark), 
                $out += "</td> </tr> ", $line = 179;
            }), $out += ' </tbody> </table> </div>  <div class="col-sm-12 border"> <label class="col-sm-12 control-label"><strong>景点安排：</strong></label> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>日期</th> <th>时段</th> <th>景区</th> <th>收费项</th> <th>游览时长</th> <th>单价</th> <th>数量</th> <th>订单号</th> <th>导付</th> <th>付款方式</th> <th style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 205, $each(scenicList, function(scenic) {
                $out += " <tr> <td>第", $line = 207, $out += $escape(scenic.whichDay), $out += "天</td> <td>", 
                $line = 208, $out += $escape(scenic.tourTime), $out += "</td> <td>", $line = 209, 
                $out += $escape(scenic.scenic.name), $out += "</td> <td>", $line = 210, $out += $escape(scenic.scenicItem.name), 
                $out += "</td> <td>", $line = 211, $out += $escape(scenic.tourDuration), $out += "</td> <td>", 
                $line = 212, $out += $escape(scenic.price), $out += "</td> <td>", $line = 213, $out += $escape(scenic.memberCount), 
                $out += "</td> <td>", $line = 214, $out += $escape(scenic.orderNumber), $out += "</td> <td>", 
                $line = 215, $out += $escape(scenic.guidePayMoney), $out += "</td> <td>", $line = 216, 
                0 == scenic.payType ? ($out += "现付", $line = 216) : 1 == scenic.payType ? ($out += "签单", 
                $line = 216) : 2 == scenic.payType ? ($out += "转账", $line = 216) : ($out += "网付", 
                $line = 216), $out += "</td> <td>", $line = 217, $out += $escape(scenic.remark), 
                $out += "</td> </tr> ", $line = 219;
            }), $out += ' </tbody> </table> </div>  <div class="col-sm-12 border"> <label class="col-sm-12 control-label"><strong>购物安排：</strong></label> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>日期</th> <th>购物店</th> <th>商品名</th> <th>联系电话</th> <th style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 239, $each(shopList, function(shop) {
                $out += " <tr> <td>第", $line = 241, $out += $escape(shop.whichDay), $out += "天</td> <td>", 
                $line = 242, $out += $escape(shop.shop.name), $out += "</td> <td>", $line = 243, 
                $out += $escape(shop.shopPolicy.name), $out += "</td> <td>", $line = 244, $out += $escape(shop.shop.mobileNumber), 
                $out += "</td> <td>", $line = 245, $out += $escape(shop.remark), $out += "</td> </tr> ", 
                $line = 247;
            }), $out += ' </tbody> </table> </div>  <div class="col-sm-12 border"> <label class="col-sm-12 control-label"><strong>自费安排：</strong></label> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>日期</th> <th>自费商家</th> <th>项目</th> <th>联系电话</th> <th>单价</th> <th>底价</th> <th>数量</th> <th>导付</th> <th>付款方式</th> <th style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 272, $each(selfPayList, function(selfPay) {
                $out += " <tr> <td>第", $line = 274, $out += $escape(selfPay.whichDay), $out += "天</td> <td>", 
                $line = 275, $out += $escape(selfPay.selfPay.name), $out += "</td> <td>", $line = 276, 
                null != selfPay.selfPayItem && ($line = 276, $out += $escape(selfPay.selfPayItem.name), 
                $line = 276), $out += "</td> <td>", $line = 277, $out += $escape(selfPay.selfPay.mobileNumber), 
                $out += "</td> <td>", $line = 278, $out += $escape(selfPay.marketPrice), $out += "</td> <td>", 
                $line = 279, $out += $escape(selfPay.price), $out += "</td> <td>", $line = 280, 
                $out += $escape(selfPay.memberCount), $out += "</td> <td>", $line = 281, $out += $escape(selfPay.guidePayMoney), 
                $out += "</td> <td>", $line = 282, 0 == selfPay.payType ? ($out += "现付", $line = 282) : 1 == selfPay.payType ? ($out += "签单", 
                $line = 282) : 2 == selfPay.payType ? ($out += "转账", $line = 282) : ($out += "网付", 
                $line = 282), $out += "</td> <td>", $line = 283, $out += $escape(selfPay.remark), 
                $out += "</td> </tr> ", $line = 285;
            }), $out += ' </tbody> </table> </div>  <div class="col-sm-12 border"> <label class="col-sm-12 control-label"><strong>票务安排：</strong></label> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>票务公司</th> <th>类型</th> <th>出发城市</th> <th>到达城市</th> <th>日期</th> <th>班次</th> <th>座位级别</th> <th>单价</th> <th>数量</th> <th>导付</th> <th>付款方式</th> <th style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 312, $each(ticketList, function(ticket) {
                $out += " <tr> <td>", $line = 314, $out += $escape(ticket.ticket.name), $out += "</td> <td>", 
                $line = 315, $out += $escape(ticket.type), $out += "</td> <td>", $line = 316, $out += $escape(ticket.startingCity), 
                $out += "</td> <td>", $line = 317, $out += $escape(ticket.arriveCity), $out += "</td> <td>", 
                $line = 318, null != ticket.startTime && ($line = 318, $out += $escape(ticket.startTime), 
                $line = 318), $out += "</td> <td>", $line = 319, $out += $escape(ticket.shift), 
                $out += "</td> <td>", $line = 320, $out += $escape(ticket.seatLevel), $out += "</td> <td>", 
                $line = 321, $out += $escape(ticket.price), $out += "</td> <td>", $line = 322, $out += $escape(ticket.memberCount), 
                $out += "</td> <td>", $line = 323, $out += $escape(ticket.guidePayMoney), $out += "</td> <td>", 
                $line = 324, 0 == ticket.payType ? ($out += "现付", $line = 324) : 1 == ticket.payType ? ($out += "签单", 
                $line = 324) : 2 == ticket.payType ? ($out += "转账", $line = 324) : ($out += "网付", 
                $line = 324), $out += "</td> <td>", $line = 325, $out += $escape(ticket.remark), 
                $out += "</td> </tr> ", $line = 327;
            }), $out += ' </tbody> </table> </div>  <!-- <div class="col-sm-12 border"> <label class="col-sm-12 control-label"><strong>地接安排：</strong></label> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>日期</th> <th>同行地接</th> <th>项目</th> <th>联系人</th> <th>联系电话</th> <th>单价</th> <th>数量</th> <th>导付</th> <th>付款方式</th> <th style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 352, $each(otherList, function(other) {
                $out += " <tr> <td>第", $line = 354, $out += $escape(other.whichDay), $out += "天</td> <td>", 
                $line = 355, $out += $escape(other.name), $out += "</td> <td>", $line = 356, $out += $escape(other.managerName), 
                $out += "</td> <td>", $line = 357, $out += $escape(other.mobileNumber), $out += "</td> <td>", 
                $line = 358, $out += $escape(other.price), $out += "</td> <td>", $line = 359, $out += $escape(other.memberCount), 
                $out += "</td> <td>", $line = 360, $out += $escape(other.guidePayMoney), $out += "</td> <td>", 
                $line = 361, 0 == other.payType ? ($out += "现付", $line = 361) : ($out += "账期", $line = 361), 
                $out += "</td> <td>", $line = 362, $out += $escape(other.remark), $out += "</td> </tr> ", 
                $line = 364;
            }), $out += ' </tbody> </table> </div> -->  <div class="col-sm-12 border"> <label class="col-sm-12 control-label"><strong>其他安排：</strong></label> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>日期</th> <th>项目</th> <th>联系人</th> <th>联系电话</th> <th>单价</th> <th>数量</th> <th>导付</th> <th>付款方式</th> <th style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 388, $each(otherList, function(other) {
                $out += " <tr> <td>第", $line = 390, $out += $escape(other.whichDay), $out += "天</td> <td>", 
                $line = 391, $out += $escape(other.name), $out += "</td> <td>", $line = 392, $out += $escape(other.managerName), 
                $out += "</td> <td>", $line = 393, $out += $escape(other.mobileNumber), $out += "</td> <td>", 
                $line = 394, $out += $escape(other.price), $out += "</td> <td>", $line = 395, $out += $escape(other.memberCount), 
                $out += "</td> <td>", $line = 396, $out += $escape(other.guidePayMoney), $out += "</td> <td>", 
                $line = 397, 0 == other.payType ? ($out += "现付", $line = 397) : 1 == other.payType ? ($out += "签单", 
                $line = 397) : 1 == other.payType ? ($out += "转账", $line = 397) : ($out += "网付", 
                $line = 397), $out += "</td> <td>", $line = 398, $out += $escape(other.remark), 
                $out += "</td> </tr> ", $line = 400;
            }), $out += " </tbody> </table> </div> </div> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid" style="overflow: hidden;">\r\n	<div class="row no-margin">\r\n	    <div class="col-sm-12">\r\n	        <div class="row show-grid">\r\n	            <div class="col-sm-3 font-size-14 border">\r\n	                <span class="col-sm-4 control-label align-right no-padding-right">线路：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.lineProduct.name}}</span>\r\n	            </div>\r\n	            <div class="col-sm-3 font-size-14 border no-border-left">\r\n	                <span class="col-sm-4 control-label align-right no-border-left">类别：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.lineProduct.type}}</span>\r\n	            </div>\r\n	            <div class="col-sm-3 font-size-14 border no-border-left">\r\n	                <span class="col-sm-4 control-label align-right no-padding">应用范围：</span>\r\n	                <span class="col-sm-8 control-label">{{if tripPlan.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}</span>\r\n	            </div>\r\n	            <div class="col-sm-3 font-size-14 border no-border-left">\r\n	                <span class="col-sm-4 control-label align-right no-padding">天数：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.lineProduct.days}}</span>\r\n	            </div>\r\n	\r\n	            <div class="col-sm-3 font-size-14 border no-border-top">\r\n	                <span class="col-sm-4 control-label align-right no-padding">团号：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.tripNumber}}</span>\r\n	            </div>\r\n	            <div class="col-sm-3 font-size-14 border no-border-top no-border-left">\r\n	                <span class="col-sm-4 control-label align-right no-padding">出团日期：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</span>\r\n	            </div>\r\n	            <div class="col-sm-3 font-size-14 border no-border-top no-border-left">\r\n	                <span class="col-sm-4 control-label align-right no-padding">完团日期：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</span>\r\n	            </div>\r\n	            <div class="col-sm-3 font-size-14 border no-border-top no-border-left">\r\n	                <span class="col-sm-4 control-label align-right no-padding">团队人数：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.touristAdultCount}}大{{tripPlan.touristChildCount}}小</span>\r\n	            </div>\r\n	\r\n	            <div class="col-sm-3 font-size-14 border no-border-top">\r\n	                <span class="col-sm-4 control-label align-right no-padding">导游：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.guide.realname}}</span>\r\n	            </div>\r\n	            <!-- <div class="col-sm-3 font-size-14 border no-border-top no-border-left">\r\n	                <span class="col-sm-4 control-label align-right no-padding">司机：</span>\r\n	                <span class="col-sm-8 control-label"></span>\r\n	            </div>\r\n	            <div class="col-sm-3 font-size-14 border no-border-top">\r\n	                <span class="col-sm-4 control-label align-right no-padding">车牌号：</span>\r\n	                <span class="col-sm-8 control-label"></span>\r\n	            </div> -->\r\n	            <div class="col-sm-3 font-size-14 border no-border-top no-border-left">\r\n	                <span class="col-sm-4 control-label align-right no-padding">全陪：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.accompanyGuideName}}</span>\r\n	            </div>\r\n	        </div>\r\n	    </div>\r\n	</div>\r\n</div>\r\n<div class="container-fluid">\r\n	<div class="row form-horizontal  no-margin">\r\n		<div class="col-sm-3 border">\r\n			<label class="col-sm-6 control-label no-padding"><strong>计划导付金额：</strong></label>\r\n			<label class="col-sm-6 control-label align-left no-padding-top"><strong>{{tripPlan.guideAllPayMoney}}</strong></label>\r\n		</div>\r\n		<div class="col-sm-3 border no-border-left">\r\n			<label class="col-sm-6 control-label no-padding"><strong>导游现收团款：</strong></label>\r\n			<label class="col-sm-6 control-label align-left no-padding-top"><strong>{{tripPlan.guideAllNowMoney}}</strong></label>\r\n		</div>\r\n		<div class="col-sm-3 border no-border-left">\r\n			<label class="col-sm-6 control-label no-padding align-right"><strong>导游预支金额：</strong></label>\r\n			<label class="col-sm-6 control-label align-left no-padding-top"><strong>{{tripPlan.guideAllPreMoney}}</strong></label>\r\n		</div>\r\n		<div class="col-sm-3 border no-border-left">\r\n			<label class="col-sm-6 control-label no-padding align-right"><strong>&nbsp;</strong></label>\r\n		</div>\r\n	</div>\r\n	<div class="row no-margin">\r\n		<div class="col-sm-12 border no-border-top">\r\n			<label class="col-sm-12 control-label"><strong>旅游车安排：</strong></label>\r\n		</div>\r\n		<div class="col-sm-12 no-padding"> \r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>司机</th>\r\n						<th>司机电话</th>\r\n						<th>车牌号</th>\r\n						<th>车辆品牌</th>\r\n						<th>合同号</th>\r\n						<th>导付</th>\r\n						<th>付款方式</th>\r\n						<th style="border-right: 1px solid #ddd;">备注</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody> \r\n				{{each busCompanyList as busCompany}}\r\n					<tr>\r\n						<td>{{if busCompany.driver != null}}{{busCompany.driver.name}}{{/if}}</td>\r\n						<td>{{if busCompany.driver != null}}{{busCompany.driver.mobileNumber}}{{/if}}</td>\r\n						<td>{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}</td>\r\n						<td>{{if busCompany.bus != null}}{{busCompany.bus.brand}}{{/if}}</td>\r\n						<td>{{busCompany.contractNumber}}</td>\r\n						<td>{{busCompany.guidePayMoney}}</td>\r\n						<td>{{if busCompany.payType == 0}}现付{{else if busCompany.payType==1}}签单{{else if busCompany.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{busCompany.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 餐安排 -->\r\n		<div class="col-sm-12 border">\r\n			<label class="col-sm-12 control-label"><strong>餐安排：</strong></label>\r\n		</div>\r\n		<div class="col-sm-12 no-padding"> \r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>日期</th>\r\n						<th>餐厅</th>\r\n						<th>联系电话</th>\r\n						<th>类型</th>\r\n						<th>餐标</th>\r\n						<th>人数</th>\r\n						<th>导付</th>\r\n						<th>付款方式</th>\r\n						<th style="border-right: 1px solid #ddd;">备注</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody> \r\n				{{each restaurantList as restaurant}}\r\n					<tr>\r\n						<td>第{{restaurant.whichDay}}天</td>\r\n						<td>{{if restaurant.restaurant != null}}{{restaurant.restaurant.name}}{{/if}}</td>\r\n						<td>{{if restaurant.restaurant != null}}{{restaurant.restaurant.mobileNumber}}{{/if}}</td>\r\n						<td>{{if restaurant.restaurantStandard != null}}{{restaurant.restaurantStandard.type}}{{/if}}</td>\r\n						<td>{{if restaurant.restaurantStandard != null}}{{restaurant.restaurantStandard.price}}{{/if}}</td>\r\n						<td>{{restaurant.memberCount}}</td>\r\n						<td>{{restaurant.guidePayMoney}}</td>\r\n						<td>{{if restaurant.payType == 0}}现付{{else if restaurant.payType==1}}签单{{else if restaurant.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{restaurant.remark}}</td>\r\n					</tr>\r\n                {{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 房安排 -->\r\n		<div class="col-sm-12 border">\r\n			<label class="col-sm-12 control-label"><strong>房安排：</strong></label>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th>日期</th>\r\n					<th>星级</th>\r\n					<th>酒店</th>\r\n					<th>联系电话</th>\r\n					<th>房型</th>\r\n					<th>数量</th>\r\n					<th>导付</th>\r\n					<th>付款方式</th>\r\n					<th style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each hotelList as hotel}}\r\n					<tr>\r\n						<td>第{{hotel.whichDay}}天</td>\r\n						<td>{{if hotel.hotel.level == 1}}三星以下{{else if hotel.hotel.level == 2}}三星{{else if hotel.hotel.level == 3}}准四星{{else if hotel.hotel.level == 4}}四星{{else if hotel.hotel.level == 5}}准五星{{else if hotel.hotel.level == 6}}五星{{else if hotel.hotel.level == 7}}五星以上{{/if}}</td>\r\n						<td>{{hotel.hotel.name}}</td>\r\n						<td>{{hotel.hotel.mobileNumber}}</td>\r\n						<td>{{hotel.hotelRoom.type}}</td>\r\n						<td>{{hotel.needRoomCount}}</td>\r\n						<td>{{hotel.guidePayMoney}}</td>\r\n						<td>{{if hotel.payType == 0}}现付{{else if hotel.payType==1}}签单{{else if hotel.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{hotel.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 景点安排 -->\r\n		<div class="col-sm-12 border">\r\n			<label class="col-sm-12 control-label"><strong>景点安排：</strong></label>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th>日期</th>\r\n					<th>时段</th>\r\n					<th>景区</th>\r\n					<th>收费项</th>\r\n					<th>游览时长</th>\r\n					<th>单价</th>\r\n					<th>数量</th>\r\n					<th>订单号</th>\r\n					<th>导付</th>\r\n					<th>付款方式</th>\r\n					<th style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n                {{each scenicList as scenic}}\r\n					<tr>\r\n						<td>第{{scenic.whichDay}}天</td>\r\n						<td>{{scenic.tourTime}}</td>\r\n						<td>{{scenic.scenic.name}}</td>\r\n						<td>{{scenic.scenicItem.name}}</td>\r\n						<td>{{scenic.tourDuration}}</td>\r\n						<td>{{scenic.price}}</td>\r\n						<td>{{scenic.memberCount}}</td>\r\n						<td>{{scenic.orderNumber}}</td>\r\n						<td>{{scenic.guidePayMoney}}</td>\r\n						<td>{{if scenic.payType == 0}}现付{{else if scenic.payType==1}}签单{{else if scenic.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{scenic.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 购物安排 -->\r\n		<div class="col-sm-12 border">\r\n			<label class="col-sm-12 control-label"><strong>购物安排：</strong></label>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th>日期</th>\r\n					<th>购物店</th>\r\n					<th>商品名</th>\r\n					<th>联系电话</th>\r\n					<th style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each shopList as shop}}\r\n					<tr>\r\n						<td>第{{shop.whichDay}}天</td>\r\n						<td>{{shop.shop.name}}</td>\r\n						<td>{{shop.shopPolicy.name}}</td>\r\n						<td>{{shop.shop.mobileNumber}}</td>\r\n						<td>{{shop.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 自费安排 -->\r\n		<div class="col-sm-12 border">\r\n			<label class="col-sm-12 control-label"><strong>自费安排：</strong></label>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th>日期</th>\r\n					<th>自费商家</th>\r\n					<th>项目</th>\r\n					<th>联系电话</th>\r\n					<th>单价</th>\r\n					<th>底价</th>\r\n					<th>数量</th>\r\n					<th>导付</th>\r\n					<th>付款方式</th>\r\n					<th style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each selfPayList as selfPay}}\r\n					<tr>\r\n						<td>第{{selfPay.whichDay}}天</td>\r\n						<td>{{selfPay.selfPay.name}}</td>\r\n						<td>{{if selfPay.selfPayItem !=null}}{{selfPay.selfPayItem.name}}{{/if}}</td>\r\n						<td>{{selfPay.selfPay.mobileNumber}}</td>\r\n						<td>{{selfPay.marketPrice}}</td>\r\n						<td>{{selfPay.price}}</td>\r\n						<td>{{selfPay.memberCount}}</td>\r\n						<td>{{selfPay.guidePayMoney}}</td>\r\n						<td>{{if selfPay.payType == 0}}现付{{else if selfPay.payType==1}}签单{{else if selfPay.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{selfPay.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 票务安排 -->\r\n		<div class="col-sm-12 border">\r\n			<label class="col-sm-12 control-label"><strong>票务安排：</strong></label>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th>票务公司</th>\r\n					<th>类型</th>\r\n					<th>出发城市</th>\r\n					<th>到达城市</th>\r\n					<th>日期</th>\r\n					<th>班次</th>\r\n					<th>座位级别</th>\r\n					<th>单价</th>\r\n					<th>数量</th>\r\n					<th>导付</th>\r\n					<th>付款方式</th>\r\n					<th style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each ticketList as ticket}}\r\n					<tr>\r\n						<td>{{ticket.ticket.name}}</td>\r\n						<td>{{ticket.type}}</td>\r\n						<td>{{ticket.startingCity}}</td>\r\n						<td>{{ticket.arriveCity}}</td>\r\n						<td>{{if ticket.startTime != null}}{{ticket.startTime}}{{/if}}</td>\r\n						<td>{{ticket.shift}}</td>\r\n						<td>{{ticket.seatLevel}}</td>\r\n						<td>{{ticket.price}}</td>\r\n						<td>{{ticket.memberCount}}</td>\r\n						<td>{{ticket.guidePayMoney}}</td>\r\n						<td>{{if ticket.payType == 0}}现付{{else if ticket.payType==1}}签单{{else if ticket.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{ticket.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 地接安排 -->\r\n		<!-- <div class="col-sm-12 border">\r\n			<label class="col-sm-12 control-label"><strong>地接安排：</strong></label>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th>日期</th>\r\n					<th>同行地接</th>\r\n					<th>项目</th>\r\n					<th>联系人</th>\r\n					<th>联系电话</th>\r\n					<th>单价</th>\r\n					<th>数量</th>\r\n					<th>导付</th>\r\n					<th>付款方式</th>\r\n					<th style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each otherList as other}}\r\n					<tr>\r\n						<td>第{{other.whichDay}}天</td>\r\n						<td>{{other.name}}</td>\r\n						<td>{{other.managerName}}</td>\r\n						<td>{{other.mobileNumber}}</td>\r\n						<td>{{other.price}}</td>\r\n						<td>{{other.memberCount}}</td>\r\n						<td>{{other.guidePayMoney}}</td>\r\n						<td>{{if other.payType == 0}}现付{{else}}账期{{/if}}</td>\r\n						<td>{{other.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody> \r\n			</table> \r\n		</div> -->\r\n		<!-- 其他安排 -->\r\n		<div class="col-sm-12 border">\r\n			<label class="col-sm-12 control-label"><strong>其他安排：</strong></label>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th>日期</th>\r\n					<th>项目</th>\r\n					<th>联系人</th>\r\n					<th>联系电话</th>\r\n					<th>单价</th>\r\n					<th>数量</th>\r\n					<th>导付</th>\r\n					<th>付款方式</th>\r\n					<th style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each otherList as other}}\r\n					<tr>\r\n						<td>第{{other.whichDay}}天</td>\r\n						<td>{{other.name}}</td>\r\n						<td>{{other.managerName}}</td>\r\n						<td>{{other.mobileNumber}}</td>\r\n						<td>{{other.price}}</td>\r\n						<td>{{other.memberCount}}</td>\r\n						<td>{{other.guidePayMoney}}</td>\r\n						<td>{{if other.payType == 0}}现付{{else if other.payType==1}}签单{{else if other.payType==1}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{other.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody> \r\n			</table> \r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});