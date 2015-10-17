/*TMODJS:{"debug":true,"version":154,"md5":"0da054579fc2415a16a8159e610f92a6"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, tripPlan = $data.tripPlan, $each = $utils.$each, busCompanyList = $data.busCompanyList, restaurantList = ($data.busCompany, 
            $data.$index, $data.restaurantList), hotelList = ($data.restaurant, $data.hotelList), scenicList = ($data.hotel, 
            $data.scenicList), shopList = ($data.scenic, $data.shopList), selfPayList = ($data.shop, 
            $data.selfPayList), ticketList = ($data.selfPay, $data.ticketList), otherList = ($data.ticket, 
            $data.otherList), $out = ($data.other, "");
            return $out += '<div class="container-fluid" style="overflow: hidden;"> <div class="row no-margin"> <div class="col-sm-12"> <div class="row show-grid font-size-12 "> <div class="col-sm-2 "> <span class="pull-left control-label align-right no-padding-right">线路：</span> <span class=" control-label">', 
            $line = 7, $out += $escape(tripPlan.lineProduct.name), $out += '</span> </div> <div class="col-sm-2 no-border-left"> <span class="pull-left control-label align-right no-border-left">类别：</span> <span class="col-sm-8 control-label">', 
            $line = 11, $out += $escape(tripPlan.lineProduct.type), $out += '</span> </div> <div class="col-sm-2 no-border-left"> <span class="pull-left control-label align-right no-padding">应用范围：</span> <span class="col-sm-8 control-label">', 
            $line = 15, 0 == tripPlan.lineProduct.customerType ? ($out += "散客", $line = 15) : ($out += "团体", 
            $line = 15), $out += '</span> </div> <div class="col-sm-2 no-border-left"> <span class="pull-left control-label align-right no-padding">天数：</span> <span class="col-sm-8 control-label">', 
            $line = 19, $out += $escape(tripPlan.lineProduct.days), $out += '</span> </div> <div class="col-sm-2 no-border-top"> <span class="pull-left control-label align-right no-padding">团号：</span> <span class="col-sm-8 control-label">', 
            $line = 23, $out += $escape(tripPlan.tripNumber), $out += '</span> </div> <div class="col-sm-2 no-border-top no-border-left"> <span class="pull-left control-label align-right no-padding">出团日期：</span> <span class="col-sm-8 control-label" name="startTime_Choose">', 
            $line = 27, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '</span> </div> <div style="margin-top: 25px"> <div class="col-sm-2 no-border-top no-border-left"> <span class="pull-left control-label align-right no-padding">完团日期：</span> <span class="col-sm-8 control-label">', 
            $line = 32, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
            $out += '</span> </div> <div class="col-sm-2 no-border-top no-border-left"> <span class="pull-left control-label align-right no-padding">团队人数：</span> <span class="col-sm-8 control-label">', 
            $line = 36, $out += $escape(tripPlan.touristAdultCount), $out += "大", $line = 36, 
            $out += $escape(tripPlan.touristChildCount), $out += '小</span> </div> <div class="col-sm-2 no-border-top"> <span class="pull-left control-label align-right no-padding">导游：</span> <span class="col-sm-8 control-label">', 
            $line = 40, $out += $escape(tripPlan.guide.realname), $out += '</span> </div> <div class="col-sm-2 no-border-top no-border-left"> <span class="pull-left control-label align-right no-padding">全陪：</span> <span class="col-sm-8 control-label">', 
            $line = 44, $out += $escape(tripPlan.accompanyGuideName), $out += '</span> </div> </div> </div> </div> </div> </div> <div class="container-fluid" style="margin-top:10px ;"> <div class="row form-horizontal no-margin " style=" border-bottom: 1px solid #ccc"> <div class="col-sm-2 "> <label class="pull-left control-label no-padding"><strong>计划导付金额：</strong></label> <label class="col-sm-6 control-label align-left no-padding-top"><strong>', 
            $line = 55, $out += $escape(tripPlan.guideAllPayMoney), $out += '</strong></label> </div> <div class="col-sm-2 no-border-left"> <label class="pull-left control-label no-padding"><strong>导游现收团款：</strong></label> <label class="col-sm-6 control-label align-left no-padding-top"><strong>', 
            $line = 59, $out += $escape(tripPlan.guideAllNowMoney), $out += '</strong></label> </div> <div class="col-sm-2 no-border-left"> <label class="pull-left control-label no-padding align-right"><strong>导游预支金额：</strong></label> <label class="col-sm-6 control-label align-left no-padding-top"><strong>', 
            $line = 63, $out += $escape(tripPlan.guideAllPreMoney), $out += '</strong></label> </div> <div class="col-sm-2 no-border-left"> <label class="pull-left control-label no-padding align-right"><strong>&nbsp;</strong></label> </div> </div> <div class="row no-margin"> <div style="margin: 30px auto 10px auto"> <span class="title-size"> <i class="ace-icon fa fa-bus"></i> <strong>旅游车安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">司机</th> <th class="th-border">司机电话</th> <th class="th-border">车牌号</th> <th class="th-border">车辆品牌</th> <th class="th-border">合同号</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 91, $each(busCompanyList, function(busCompany) {
                $out += " <tr> <td>", $line = 93, null != busCompany.driver && ($line = 93, $out += $escape(busCompany.driver.name), 
                $line = 93), $out += "</td> <td>", $line = 94, null != busCompany.driver && ($line = 94, 
                $out += $escape(busCompany.driver.mobileNumber), $line = 94), $out += "</td> <td>", 
                $line = 95, null != busCompany.bus && ($line = 95, $out += $escape(busCompany.bus.licenseNumber), 
                $line = 95), $out += "</td> <td>", $line = 96, null != busCompany.bus && ($line = 96, 
                $out += $escape(busCompany.bus.brand), $line = 96), $out += "</td> <td>", $line = 97, 
                $out += $escape(busCompany.contractNumber), $out += "</td> <td>", $line = 98, $out += $escape(busCompany.guidePayMoney), 
                $out += "</td> <td>", $line = 99, 0 == busCompany.payType ? ($out += "现付", $line = 99) : 1 == busCompany.payType ? ($out += "签单", 
                $line = 99) : 2 == busCompany.payType ? ($out += "转账", $line = 99) : ($out += "网付", 
                $line = 99), $out += "</td> <td>", $line = 100, $out += $escape(busCompany.remark), 
                $out += "</td> </tr> ", $line = 102;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap"> <span class="title-size"> <i class="ace-icon fa fa-cutlery"></i> <strong>餐安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">餐厅</th> <th class="th-border">联系电话</th> <th class="th-border">类型</th> <th class="th-border">餐标</th> <th class="th-border">人数</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 129, $each(restaurantList, function(restaurant) {
                $out += ' <tr> <td class="whichDaysContainer" whichDay="', $line = 131, $out += $escape(restaurant.whichDay), 
                $out += '">第', $line = 131, $out += $escape(restaurant.whichDay), $out += "天</td> <td>", 
                $line = 132, null != restaurant.restaurant && ($line = 132, $out += $escape(restaurant.restaurant.name), 
                $line = 132), $out += "</td> <td>", $line = 133, null != restaurant.restaurant && ($line = 133, 
                $out += $escape(restaurant.restaurant.mobileNumber), $line = 133), $out += "</td> <td>", 
                $line = 134, null != restaurant.restaurantStandard && ($line = 134, $out += $escape(restaurant.restaurantStandard.type), 
                $line = 134), $out += "</td> <td>", $line = 135, null != restaurant.restaurantStandard && ($line = 135, 
                $out += $escape(restaurant.restaurantStandard.price), $line = 135), $out += "</td> <td>", 
                $line = 136, $out += $escape(restaurant.memberCount), $out += "</td> <td>", $line = 137, 
                $out += $escape(restaurant.guidePayMoney), $out += "</td> <td>", $line = 138, 0 == restaurant.payType ? ($out += "现付", 
                $line = 138) : 1 == restaurant.payType ? ($out += "签单", $line = 138) : 2 == restaurant.payType ? ($out += "转账", 
                $line = 138) : ($out += "网付", $line = 138), $out += "</td> <td>", $line = 139, $out += $escape(restaurant.remark), 
                $out += "</td> </tr> ", $line = 141;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap "> <span class="title-size"> <i class="ace-icon fa fa-hotel"></i> <strong>房安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">星级</th> <th class="th-border">酒店</th> <th class="th-border">联系电话</th> <th class="th-border">房型</th> <th class="th-border">数量</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 168, $each(hotelList, function(hotel) {
                $out += ' <tr> <td class="whichDaysContainer" whichDay="', $line = 170, $out += $escape(hotel.whichDay), 
                $out += '">第', $line = 170, $out += $escape(hotel.whichDay), $out += "天</td> <td>", 
                $line = 171, 1 == hotel.hotel.level ? ($out += "三星以下", $line = 171) : 2 == hotel.hotel.level ? ($out += "三星", 
                $line = 171) : 3 == hotel.hotel.level ? ($out += "准四星", $line = 171) : 4 == hotel.hotel.level ? ($out += "四星", 
                $line = 171) : 5 == hotel.hotel.level ? ($out += "准五星", $line = 171) : 6 == hotel.hotel.level ? ($out += "五星", 
                $line = 171) : 7 == hotel.hotel.level && ($out += "五星以上", $line = 171), $out += "</td> <td>", 
                $line = 172, $out += $escape(hotel.hotel.name), $out += "</td> <td>", $line = 173, 
                $out += $escape(hotel.hotel.mobileNumber), $out += "</td> <td>", $line = 174, $out += $escape(hotel.hotelRoom.type), 
                $out += "</td> <td>", $line = 175, $out += $escape(hotel.needRoomCount), $out += "</td> <td>", 
                $line = 176, $out += $escape(hotel.guidePayMoney), $out += "</td> <td>", $line = 177, 
                0 == hotel.payType ? ($out += "现付", $line = 177) : 1 == hotel.payType ? ($out += "签单", 
                $line = 177) : 2 == hotel.payType ? ($out += "转账", $line = 177) : ($out += "网付", 
                $line = 177), $out += "</td> <td>", $line = 178, $out += $escape(hotel.remark), 
                $out += "</td> </tr> ", $line = 180;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap "> <span class="title-size"> <i class="ace-icon fa fa-tree"></i> <strong>景点安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">时段</th> <th class="th-border">景区</th> <th class="th-border">收费项</th> <th class="th-border">游览时长</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">订单号</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 209, $each(scenicList, function(scenic) {
                $out += ' <tr> <td class="whichDaysContainer" whichDay="', $line = 211, $out += $escape(scenic.whichDay), 
                $out += '">第', $line = 211, $out += $escape(scenic.whichDay), $out += "天</td> <td>", 
                $line = 212, $out += $escape(scenic.tourTime), $out += "</td> <td>", $line = 213, 
                $out += $escape(scenic.scenic.name), $out += "</td> <td>", $line = 214, $out += $escape(scenic.scenicItem.name), 
                $out += "</td> <td>", $line = 215, $out += $escape(scenic.tourDuration), $out += "</td> <td>", 
                $line = 216, $out += $escape(scenic.price), $out += "</td> <td>", $line = 217, $out += $escape(scenic.memberCount), 
                $out += "</td> <td>", $line = 218, $out += $escape(scenic.orderNumber), $out += "</td> <td>", 
                $line = 219, $out += $escape(scenic.guidePayMoney), $out += "</td> <td>", $line = 220, 
                0 == scenic.payType ? ($out += "现付", $line = 220) : 1 == scenic.payType ? ($out += "签单", 
                $line = 220) : 2 == scenic.payType ? ($out += "转账", $line = 220) : ($out += "网付", 
                $line = 220), $out += "</td> <td>", $line = 221, $out += $escape(scenic.remark), 
                $out += "</td> </tr> ", $line = 223;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap "> <span class="title-size"> <i class="ace-icon fa fa-shopping-cart"></i> <strong>购物安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">购物店</th> <th class="th-border">商品名</th> <th class="th-border">联系电话</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 246, $each(shopList, function(shop) {
                $out += ' <tr> <td class="whichDaysContainer" whichDay="', $line = 248, $out += $escape(shop.whichDay), 
                $out += '">第', $line = 248, $out += $escape(shop.whichDay), $out += "天</td> <td>", 
                $line = 249, $out += $escape(shop.shop.name), $out += "</td> <td>", $line = 250, 
                $out += $escape(shop.shopPolicy.name), $out += "</td> <td>", $line = 251, $out += $escape(shop.shop.mobileNumber), 
                $out += "</td> <td>", $line = 252, $out += $escape(shop.remark), $out += "</td> </tr> ", 
                $line = 254;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap "> <span class="title-size"> <i class="ace-icon fa fa-credit-card"></i> <strong>自费安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">自费商家</th> <th class="th-border">自费项目</th> <th class="th-border">联系电话</th> <th class="th-border">单价</th> <th class="th-border">底价</th> <th class="th-border">数量</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 282, $each(selfPayList, function(selfPay) {
                $out += ' <tr> <td class="whichDaysContainer" whichDay="', $line = 284, $out += $escape(selfPay.whichDay), 
                $out += '">第', $line = 284, $out += $escape(selfPay.whichDay), $out += "天</td> <td>", 
                $line = 285, $out += $escape(selfPay.selfPay.name), $out += "</td> <td>", $line = 286, 
                null != selfPay.selfPayItem && ($line = 286, $out += $escape(selfPay.selfPayItem.name), 
                $line = 286), $out += "</td> <td>", $line = 287, $out += $escape(selfPay.selfPay.mobileNumber), 
                $out += "</td> <td>", $line = 288, $out += $escape(selfPay.marketPrice), $out += "</td> <td>", 
                $line = 289, $out += $escape(selfPay.price), $out += "</td> <td>", $line = 290, 
                $out += $escape(selfPay.memberCount), $out += "</td> <td>", $line = 291, $out += $escape(selfPay.guidePayMoney), 
                $out += "</td> <td>", $line = 292, 0 == selfPay.payType ? ($out += "现付", $line = 292) : 1 == selfPay.payType ? ($out += "签单", 
                $line = 292) : 2 == selfPay.payType ? ($out += "转账", $line = 292) : ($out += "网付", 
                $line = 292), $out += "</td> <td>", $line = 293, $out += $escape(selfPay.remark), 
                $out += "</td> </tr> ", $line = 295;
            }), $out += ' </tbody> </table> </div>  <div class="tipPlan-gap "> <span class="title-size"> <i class="ace-icon fa fa-car"></i> <strong>票务安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">票务公司</th> <th class="th-border">类型</th> <th class="th-border">出发城市</th> <th class="th-border">到达城市</th> <th class="th-border">日期</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 325, $each(ticketList, function(ticket) {
                $out += " <tr> <td>", $line = 327, $out += $escape(ticket.ticket.name), $out += "</td> <td>", 
                $line = 328, $out += $escape(ticket.type), $out += "</td> <td>", $line = 329, $out += $escape(ticket.startingCity), 
                $out += "</td> <td>", $line = 330, $out += $escape(ticket.arriveCity), $out += "</td> <td>", 
                $line = 331, null != ticket.startTime && ($line = 331, $out += $escape(ticket.startTime), 
                $line = 331), $out += "</td> <td>", $line = 332, $out += $escape(ticket.shift), 
                $out += "</td> <td>", $line = 333, $out += $escape(ticket.seatLevel), $out += "</td> <td>", 
                $line = 334, $out += $escape(ticket.price), $out += "</td> <td>", $line = 335, $out += $escape(ticket.memberCount), 
                $out += "</td> <td>", $line = 336, $out += $escape(ticket.guidePayMoney), $out += "</td> <td>", 
                $line = 337, 0 == ticket.payType ? ($out += "现付", $line = 337) : 1 == ticket.payType ? ($out += "签单", 
                $line = 337) : 2 == ticket.payType ? ($out += "转账", $line = 337) : ($out += "网付", 
                $line = 337), $out += "</td> <td>", $line = 338, $out += $escape(ticket.remark), 
                $out += "</td> </tr> ", $line = 340;
            }), $out += ' </tbody> </table> </div>  <div class=" tipPlan-gap"> <span class="title-size"> <i class="ace-icon fa fa-smile-o"></i> <strong>其他安排</strong> </span> </div> <div class="col-sm-12 no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">项目</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">导付</th> <th class="th-border">付款方式</th> <th class="th-border" style="border-right: 1px solid #ddd;">备注</th> </tr> </thead> <tbody> ', 
            $line = 367, $each(otherList, function(other) {
                $out += ' <tr> <td class="whichDaysContainer" whichDay="', $line = 369, $out += $escape(other.whichDay), 
                $out += '">第', $line = 369, $out += $escape(other.whichDay), $out += "天</td> <td>", 
                $line = 370, $out += $escape(other.name), $out += "</td> <td>", $line = 371, $out += $escape(other.managerName), 
                $out += "</td> <td>", $line = 372, $out += $escape(other.mobileNumber), $out += "</td> <td>", 
                $line = 373, $out += $escape(other.price), $out += "</td> <td>", $line = 374, $out += $escape(other.memberCount), 
                $out += "</td> <td>", $line = 375, $out += $escape(other.guidePayMoney), $out += "</td> <td>", 
                $line = 376, 0 == other.payType ? ($out += "现付", $line = 376) : 1 == other.payType ? ($out += "签单", 
                $line = 376) : 1 == other.payType ? ($out += "转账", $line = 376) : ($out += "网付", 
                $line = 376), $out += "</td> <td>", $line = 377, $out += $escape(other.remark), 
                $out += "</td> </tr> ", $line = 379;
            }), $out += " </tbody> </table> </div> </div> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid" style="overflow: hidden;">\r\n	<div class="row no-margin">\r\n	    <div class="col-sm-12">\r\n	        <div class="row show-grid font-size-12 ">\r\n	            <div class="col-sm-2 ">\r\n	                <span class="pull-left control-label align-right no-padding-right">线路：</span>\r\n	                <span class=" control-label">{{tripPlan.lineProduct.name}}</span>\r\n	            </div>\r\n	            <div class="col-sm-2 no-border-left">\r\n	                <span class="pull-left control-label align-right no-border-left">类别：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.lineProduct.type}}</span>\r\n	            </div>\r\n	            <div class="col-sm-2  no-border-left">\r\n	                <span class="pull-left control-label align-right no-padding">应用范围：</span>\r\n	                <span class="col-sm-8 control-label">{{if tripPlan.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}</span>\r\n	            </div>\r\n	            <div class="col-sm-2  no-border-left">\r\n	                <span class="pull-left control-label align-right no-padding">天数：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.lineProduct.days}}</span>\r\n	            </div>\r\n	            <div class="col-sm-2 no-border-top">\r\n	                <span class="pull-left control-label align-right no-padding">团号：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.tripNumber}}</span>\r\n	            </div>\r\n	            <div class="col-sm-2   no-border-top no-border-left">\r\n	                <span class="pull-left control-label align-right no-padding">出团日期：</span>\r\n	                <span class="col-sm-8 control-label" name="startTime_Choose">{{tripPlan.startTime | dateFormat:\'yyyy-MM-dd\'}}</span>\r\n	            </div>\r\n				<div  style="margin-top: 25px">\r\n	            <div class="col-sm-2 no-border-top no-border-left">\r\n	                <span class="pull-left control-label align-right no-padding">完团日期：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.endTime | dateFormat:\'yyyy-MM-dd\'}}</span>\r\n	            </div>\r\n	            <div class="col-sm-2  no-border-top no-border-left">\r\n	                <span class="pull-left control-label align-right no-padding">团队人数：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.touristAdultCount}}大{{tripPlan.touristChildCount}}小</span>\r\n	            </div>\r\n	            <div class="col-sm-2  no-border-top">\r\n	                <span class="pull-left control-label align-right no-padding">导游：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.guide.realname}}</span>\r\n	            </div>\r\n	            <div class="col-sm-2   no-border-top no-border-left">\r\n	                <span class="pull-left control-label align-right no-padding">全陪：</span>\r\n	                <span class="col-sm-8 control-label">{{tripPlan.accompanyGuideName}}</span>\r\n	            </div>\r\n				</div>\r\n	        </div>\r\n	    </div>\r\n	</div>\r\n</div>\r\n<div class="container-fluid" style="margin-top:10px ;">\r\n	<div class="row form-horizontal  no-margin " style=" border-bottom: 1px solid #ccc">\r\n		<div class="col-sm-2 ">\r\n			<label class="pull-left control-label no-padding"><strong>计划导付金额：</strong></label>\r\n			<label class="col-sm-6 control-label align-left no-padding-top"><strong>{{tripPlan.guideAllPayMoney}}</strong></label>\r\n		</div>\r\n		<div class="col-sm-2  no-border-left">\r\n			<label class="pull-left control-label no-padding"><strong>导游现收团款：</strong></label>\r\n			<label class="col-sm-6 control-label align-left no-padding-top"><strong>{{tripPlan.guideAllNowMoney}}</strong></label>\r\n		</div>\r\n		<div class="col-sm-2 no-border-left">\r\n			<label class="pull-left control-label no-padding align-right"><strong>导游预支金额：</strong></label>\r\n			<label class="col-sm-6 control-label align-left no-padding-top"><strong>{{tripPlan.guideAllPreMoney}}</strong></label>\r\n		</div>\r\n		<div class="col-sm-2  no-border-left">\r\n			<label class="pull-left control-label no-padding align-right"><strong>&nbsp;</strong></label>\r\n		</div>\r\n	</div>\r\n	<div class="row no-margin">\r\n		<div style="margin: 30px auto 10px auto">\r\n				<span  class="title-size">\r\n					<i class="ace-icon fa fa-bus"></i>\r\n					<strong>旅游车安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding"> \r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">司机</th>\r\n						<th class="th-border">司机电话</th>\r\n						<th class="th-border">车牌号</th>\r\n						<th class="th-border">车辆品牌</th>\r\n						<th class="th-border">合同号</th>\r\n						<th class="th-border">导付</th>\r\n						<th class="th-border">付款方式</th>\r\n						<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody> \r\n				{{each busCompanyList as busCompany}}\r\n					<tr>\r\n						<td>{{if busCompany.driver != null}}{{busCompany.driver.name}}{{/if}}</td>\r\n						<td>{{if busCompany.driver != null}}{{busCompany.driver.mobileNumber}}{{/if}}</td>\r\n						<td>{{if busCompany.bus != null}}{{busCompany.bus.licenseNumber}}{{/if}}</td>\r\n						<td>{{if busCompany.bus != null}}{{busCompany.bus.brand}}{{/if}}</td>\r\n						<td>{{busCompany.contractNumber}}</td>\r\n						<td>{{busCompany.guidePayMoney}}</td>\r\n						<td>{{if busCompany.payType == 0}}现付{{else if busCompany.payType==1}}签单{{else if busCompany.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{busCompany.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 餐安排 -->\r\n		<div class="tipPlan-gap">\r\n				<span class="title-size">\r\n					<i class="ace-icon fa fa-cutlery"></i>\r\n					<strong>餐安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding"> \r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">日期</th>\r\n						<th class="th-border">餐厅</th>\r\n						<th class="th-border">联系电话</th>\r\n						<th class="th-border">类型</th>\r\n						<th class="th-border">餐标</th>\r\n						<th class="th-border">人数</th>\r\n						<th class="th-border">导付</th>\r\n						<th class="th-border">付款方式</th>\r\n						<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody> \r\n				{{each restaurantList as restaurant}}\r\n					<tr>\r\n						<td class="whichDaysContainer" whichDay="{{restaurant.whichDay}}">第{{restaurant.whichDay}}天</td>\r\n						<td>{{if restaurant.restaurant != null}}{{restaurant.restaurant.name}}{{/if}}</td>\r\n						<td>{{if restaurant.restaurant != null}}{{restaurant.restaurant.mobileNumber}}{{/if}}</td>\r\n						<td>{{if restaurant.restaurantStandard != null}}{{restaurant.restaurantStandard.type}}{{/if}}</td>\r\n						<td>{{if restaurant.restaurantStandard != null}}{{restaurant.restaurantStandard.price}}{{/if}}</td>\r\n						<td>{{restaurant.memberCount}}</td>\r\n						<td>{{restaurant.guidePayMoney}}</td>\r\n						<td>{{if restaurant.payType == 0}}现付{{else if restaurant.payType==1}}签单{{else if restaurant.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{restaurant.remark}}</td>\r\n					</tr>\r\n                {{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 房安排 -->\r\n		<div class="tipPlan-gap ">\r\n				<span class="title-size">\r\n					<i class="ace-icon fa fa-hotel"></i>\r\n					<strong>房安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">星级</th>\r\n					<th class="th-border">酒店</th>\r\n					<th class="th-border">联系电话</th>\r\n					<th class="th-border">房型</th>\r\n					<th class="th-border">数量</th>\r\n					<th class="th-border">导付</th>\r\n					<th class="th-border">付款方式</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each hotelList as hotel}}\r\n					<tr>\r\n						<td class="whichDaysContainer" whichDay="{{hotel.whichDay}}">第{{hotel.whichDay}}天</td>\r\n						<td>{{if hotel.hotel.level == 1}}三星以下{{else if hotel.hotel.level == 2}}三星{{else if hotel.hotel.level == 3}}准四星{{else if hotel.hotel.level == 4}}四星{{else if hotel.hotel.level == 5}}准五星{{else if hotel.hotel.level == 6}}五星{{else if hotel.hotel.level == 7}}五星以上{{/if}}</td>\r\n						<td>{{hotel.hotel.name}}</td>\r\n						<td>{{hotel.hotel.mobileNumber}}</td>\r\n						<td>{{hotel.hotelRoom.type}}</td>\r\n						<td>{{hotel.needRoomCount}}</td>\r\n						<td>{{hotel.guidePayMoney}}</td>\r\n						<td>{{if hotel.payType == 0}}现付{{else if hotel.payType==1}}签单{{else if hotel.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{hotel.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 景点安排 -->\r\n		<div class="tipPlan-gap ">\r\n				<span class="title-size">\r\n					<i class="ace-icon fa fa-tree"></i>\r\n					<strong>景点安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">时段</th>\r\n					<th class="th-border">景区</th>\r\n					<th class="th-border">收费项</th>\r\n					<th class="th-border">游览时长</th>\r\n					<th class="th-border">单价</th>\r\n					<th class="th-border">数量</th>\r\n					<th class="th-border">订单号</th>\r\n					<th class="th-border">导付</th>\r\n					<th class="th-border">付款方式</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n                {{each scenicList as scenic}}\r\n					<tr>\r\n						<td class="whichDaysContainer" whichDay="{{scenic.whichDay}}">第{{scenic.whichDay}}天</td>\r\n						<td>{{scenic.tourTime}}</td>\r\n						<td>{{scenic.scenic.name}}</td>\r\n						<td>{{scenic.scenicItem.name}}</td>\r\n						<td>{{scenic.tourDuration}}</td>\r\n						<td>{{scenic.price}}</td>\r\n						<td>{{scenic.memberCount}}</td>\r\n						<td>{{scenic.orderNumber}}</td>\r\n						<td>{{scenic.guidePayMoney}}</td>\r\n						<td>{{if scenic.payType == 0}}现付{{else if scenic.payType==1}}签单{{else if scenic.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{scenic.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 购物安排 -->\r\n		<div class="tipPlan-gap ">\r\n				<span class="title-size">\r\n					<i class="ace-icon fa fa-shopping-cart"></i>\r\n					<strong>购物安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">购物店</th>\r\n					<th class="th-border">商品名</th>\r\n					<th class="th-border">联系电话</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each shopList as shop}}\r\n					<tr>\r\n						<td class="whichDaysContainer" whichDay="{{shop.whichDay}}">第{{shop.whichDay}}天</td>\r\n						<td>{{shop.shop.name}}</td>\r\n						<td>{{shop.shopPolicy.name}}</td>\r\n						<td>{{shop.shop.mobileNumber}}</td>\r\n						<td>{{shop.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 自费安排 -->\r\n		<div class="tipPlan-gap ">\r\n				<span class="title-size">\r\n					<i class="ace-icon fa fa-credit-card"></i>\r\n					<strong>自费安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">自费商家</th>\r\n					<th class="th-border">自费项目</th>\r\n					<th class="th-border">联系电话</th>\r\n					<th class="th-border">单价</th>\r\n					<th class="th-border">底价</th>\r\n					<th class="th-border">数量</th>\r\n					<th class="th-border">导付</th>\r\n					<th class="th-border">付款方式</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each selfPayList as selfPay}}\r\n					<tr>\r\n						<td class="whichDaysContainer" whichDay="{{selfPay.whichDay}}">第{{selfPay.whichDay}}天</td>\r\n						<td>{{selfPay.selfPay.name}}</td>\r\n						<td>{{if selfPay.selfPayItem !=null}}{{selfPay.selfPayItem.name}}{{/if}}</td>\r\n						<td>{{selfPay.selfPay.mobileNumber}}</td>\r\n						<td>{{selfPay.marketPrice}}</td>\r\n						<td>{{selfPay.price}}</td>\r\n						<td>{{selfPay.memberCount}}</td>\r\n						<td>{{selfPay.guidePayMoney}}</td>\r\n						<td>{{if selfPay.payType == 0}}现付{{else if selfPay.payType==1}}签单{{else if selfPay.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{selfPay.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 票务安排 -->\r\n		<div class="tipPlan-gap ">\r\n				<span class="title-size">\r\n					<i class="ace-icon fa fa-car"></i>\r\n					<strong>票务安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">票务公司</th>\r\n					<th class="th-border">类型</th>\r\n					<th class="th-border">出发城市</th>\r\n					<th class="th-border">到达城市</th>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">班次</th>\r\n					<th class="th-border">座位级别</th>\r\n					<th class="th-border">单价</th>\r\n					<th class="th-border">数量</th>\r\n					<th class="th-border">导付</th>\r\n					<th class="th-border">付款方式</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each ticketList as ticket}}\r\n					<tr>\r\n						<td>{{ticket.ticket.name}}</td>\r\n						<td>{{ticket.type}}</td>\r\n						<td>{{ticket.startingCity}}</td>\r\n						<td>{{ticket.arriveCity}}</td>\r\n						<td>{{if ticket.startTime != null}}{{ticket.startTime}}{{/if}}</td>\r\n						<td>{{ticket.shift}}</td>\r\n						<td>{{ticket.seatLevel}}</td>\r\n						<td>{{ticket.price}}</td>\r\n						<td>{{ticket.memberCount}}</td>\r\n						<td>{{ticket.guidePayMoney}}</td>\r\n						<td>{{if ticket.payType == 0}}现付{{else if ticket.payType==1}}签单{{else if ticket.payType==2}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{ticket.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!-- 其他安排 -->\r\n		<div class=" tipPlan-gap">\r\n				<span class="title-size">\r\n					<i class="ace-icon fa fa-smile-o"></i>\r\n					<strong>其他安排</strong>\r\n				</span>\r\n		</div>\r\n		<div class="col-sm-12 no-padding">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n				<tr>\r\n					<th class="th-border">日期</th>\r\n					<th class="th-border">项目</th>\r\n					<th class="th-border">联系人</th>\r\n					<th class="th-border">联系电话</th>\r\n					<th class="th-border">单价</th>\r\n					<th class="th-border">数量</th>\r\n					<th class="th-border">导付</th>\r\n					<th class="th-border">付款方式</th>\r\n					<th class="th-border" style="border-right: 1px solid #ddd;">备注</th>\r\n				</tr>\r\n				</thead>\r\n				<tbody>\r\n				{{each otherList as other}}\r\n					<tr>\r\n						<td class="whichDaysContainer" whichDay="{{other.whichDay}}">第{{other.whichDay}}天</td>\r\n						<td>{{other.name}}</td>\r\n						<td>{{other.managerName}}</td>\r\n						<td>{{other.mobileNumber}}</td>\r\n						<td>{{other.price}}</td>\r\n						<td>{{other.memberCount}}</td>\r\n						<td>{{other.guidePayMoney}}</td>\r\n						<td>{{if other.payType == 0}}现付{{else if other.payType==1}}签单{{else if other.payType==1}}转账{{else}}网付{{/if}}</td>\r\n						<td>{{other.remark}}</td>\r\n					</tr>\r\n				{{/each}}\r\n				</tbody>\r\n			</table> \r\n		</div>\r\n	</div>\r\n</div>\r\n   '.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});