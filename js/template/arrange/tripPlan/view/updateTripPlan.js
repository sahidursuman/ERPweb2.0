/*TMODJS:{"debug":true,"version":104,"md5":"c1a224a4c9d09083e7f50edba1a1e9d6"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/updateTripPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, tripPlan = $data.tripPlan, lineProduct = $data.lineProduct, bus = $data.bus, guide = $data.guide, driver = $data.driver, $each = $utils.$each, touristGroupList = $data.touristGroupList, lineProductDayList = ($data.touristGroup, 
            $data.$index, $data.lineProductDayList), $out = ($data.dayList, "");
            return $out += '<div class="updateTripPlan"> <div class="col-xs-12 newAddTripPlanMain globalAdd"> <form class="form-horizontal newAddTripPlanMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">基本信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <input type="hidden" name="tripPlanId" value="', 
            $line = 14, $out += $escape(tripPlan.id), $out += '" /> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="name" id="" value="', 
            $line = 17, $out += $escape(lineProduct.name), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 18, $out += $escape(lineProduct.id), $out += '" />  </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出团日期：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="startTime" readonly="readonly" id="" value="', 
            $line = 25, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">团队编号：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="', 
            $line = 29, $out += $escape(tripPlan.tripNumber), $out += '" placeholder="系统自动生成" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>计划人数：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="planTouristCount" id="" value="', 
            $line = 35, $out += $escape(tripPlan.planTouristCount), $out += '" maxlength="6"/> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车座数：</label> <div class="col-sm-2"> <input class="col-sm-12 chooseSeatCount bind-change" type="text" name="seatCount" id="" value="', 
            $line = 39, $out += $escape(bus.seatCount), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>车辆品牌：</label> <div class="col-sm-2"> <input class="col-sm-12 chooseBusCompany bind-change" type="text" name="needBusBrand" id="" value="', 
            $line = 43, $out += $escape(bus.brand), $out += '" /> <input type="hidden" name="busBrandId" value="" /> </div> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>车牌号：</label> <div class="col-sm-2"> <input class="col-sm-12 chooseBusLicenseNumber bind-change" type="text" name="LicenseNumber" id="" value="', 
            $line = 48, $out += $escape(bus.licenseNumber), $out += '" /> <input type="hidden" name="busLicenseNumberId" value="', 
            $line = 49, $out += $escape(bus.id), $out += '" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>导游：</label> <div class="col-sm-2"> <input class="col-sm-12 AddTPchooseGuide bind-change" type="text" name="AddTPchooseGuide" id="" value="', 
            $line = 55, $out += $escape(guide.realname), $out += '" /> <input type="hidden" name="AddTPchooseGuideId" value="', 
            $line = 56, $out += $escape(guide.id), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">导游电话：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="GmobileNumber" id="" value="', 
            $line = 60, $out += $escape(guide.mobileNumber), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>司机：</label> <div class="col-sm-2"> <input class="col-sm-12 chooseDriver bind-change" type="text" name="driverName" id="" value="', 
            $line = 64, $out += $escape(driver.name), $out += '" /> <input type="hidden" name="driverId" value="', 
            $line = 65, $out += $escape(driver.id), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">司机电话：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="DmobileNumber" id="" value="', 
            $line = 69, $out += $escape(driver.mobileNumber), $out += '" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">全陪：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="accompanyGuideName" id="" value="', 
            $line = 75, $out += $escape(tripPlan.accompanyGuideName), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">全陪电话：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="accompanyGuideMobile" id="" value="', 
            $line = 79, $out += $escape(tripPlan.accompanyGuideMobile), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">集合地点：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="setPlacePosition" id="" value="', 
            $line = 83, $out += $escape(tripPlan.setPlacePosition), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">集合时间：</label> <div class="col-sm-2"> <input class="form-control col-sm-12" type="text" name="setPlaceTime" value="', 
            $line = 87, $out += $escape(tripPlan.setPlaceTime), $out += '" /> </div> </div> </div> </div> </div> </div> </div> </form> <div class="form-horizontal col-sm-12 checkbox"> <div class="pull-left no-padding-right"> <label class="control-label no-padding-right">游客短信发送:</label> 定时发送 <label> <input type="radio" checked="checked" class="ace buyInsurance-status" disabled="" value="', 
            $line = 103, $out += $escape(tripPlan.executeTimeType), $out += '" name="executeTimeType"> <span class="lbl"> </span> </label> 立即发送 <label> <input type="radio" class="ace buyInsurance-status" disabled="" value="', 
            $line = 109, $out += $escape(tripPlan.executeTimeType), $out += '" name="executeTimeType"> <span class="lbl"> </span> </label> </div> <div class="col-sm-2"> <input class="form-control col-sm-4 datetimepicker" disabled="" type="text" name="executeTime" value="', 
            $line = 115, $out += $escape(tripPlan.executeTime), $out += '" /> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">游客名单</label> <button class="btn btn-sm btn-success newAddTouristGroup" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 添加游客小组 </button> </h5> <div style="display: inline-block;padding-left: 30px;">总人数：<span class="tripPlanAllMemberCount"></span></div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">小组</th> <th class="th-border">来源</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="updateTripPlanTouristTbody">', 
            $line = 152, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 153, $out += $escape(touristGroup.id), 
                $out += '"> <td></td> <td>', $line = 155, null != touristGroup.partnerAgency && ($line = 155, 
                $out += $escape(touristGroup.partnerAgency.travelAgencyName), $line = 155), $out += "</td> <td>", 
                $line = 156, null != touristGroup.contactMember && ($line = 156, $out += $escape(touristGroup.contactMember.name), 
                $line = 156), $out += "</td> <td>", $line = 157, null != touristGroup.contactMember && ($line = 157, 
                $out += $escape(touristGroup.contactMember.mobileNumber), $line = 157), $out += "</td> <td>", 
                $line = 158, $out += $escape(touristGroup.areaData), $out += "</td> <td>", $line = 159, 
                $out += $escape(touristGroup.ageData), $out += '</td> <td class="tripPlanTrMemberCount">', 
                $line = 160, $out += $escape(touristGroup.adultCount + touristGroup.childCount), 
                $out += "</td> <td>", $line = 161, $out += $escape(touristGroup.remark), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 164, $out += $escape(touristGroup.id), $out += '" class="cursor touristGroupView"> 查看 </a><a class="cursor"></a> <a data-entity-id="', 
                $line = 167, $out += $escape(touristGroup.id), $out += '" class="cursor touristGroupDelete"> 删除 </a> </div> </td> </tr>', 
                $line = 172;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal formOneList" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">3</span> <label class="middle title-size">线路</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">类别：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="type" id="" value="', 
            $line = 198, $out += $escape(lineProduct.type), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">应用范围：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="customerType" id="" value="', 
            $line = 202, 0 == lineProduct.customerType ? ($out += "散客", $line = 202) : 1 == lineProduct.customerType && ($out += "团体", 
            $line = 202), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">天数：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="days" id="" value="', 
            $line = 206, $out += $escape(lineProduct.days), $out += '" /> </div> </div> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">4</span> <label class="middle title-size">日程</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <table class="table table-striped table-bordered table-hover days"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">含餐情况</th> <th class="th-border">酒店星级</th> <th class="th-border">简要行程</th> </tr> </thead> <tbody>', 
            $line = 239, $each(lineProductDayList, function(dayList) {
                $out += ' <tr data-entity-id="', $line = 240, $out += $escape(dayList.id), $out += '"> <td>第', 
                $line = 241, $out += $escape(dayList.whichDay), $out += "天</td> <td>", $line = 242, 
                $out += $escape(dayList.repastDetail), $out += "</td> <td> ", $line = 244, 1 == dayList.hotelLevel ? ($out += " 三星以下 ", 
                $line = 246) : 2 == dayList.hotelLevel ? ($out += " 三星 ", $line = 248) : 3 == dayList.hotelLevel ? ($out += " 准四星 ", 
                $line = 250) : 4 == dayList.hotelLevel ? ($out += " 四星 ", $line = 252) : 5 == dayList.hotelLevel ? ($out += " 准五星 ", 
                $line = 254) : 6 == dayList.hotelLevel ? ($out += " 五星 ", $line = 256) : 7 == dayList.hotelLevel && ($out += " 五星以上 ", 
                $line = 258), $out += ' </td> <td class="col-xs-6">', $line = 260, $out += $escape(dayList.title), 
                $out += "</td> </tr>", $line = 261;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="includeFee">', 
            $line = 274, $out += $escape(lineProduct.includeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用不含:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="excludeFee">', 
            $line = 280, $out += $escape(lineProduct.excludeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="lineFeature">', 
            $line = 286, $out += $escape(lineProduct.lineFeature), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="lineNotice">', 
            $line = 292, $out += $escape(lineProduct.lineNotice), $out += '</textarea> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger btn-updatecancelTripPlan otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary btn-updateTripPlan otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="updateTripPlan">\r\n	<div class="col-xs-12 newAddTripPlanMain globalAdd">\r\n		<form class="form-horizontal newAddTripPlanMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<span class="badge badge-primary">1</span>\r\n								<label class="middle title-size">基本信息</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<input type="hidden" name="tripPlanId" value="{{tripPlan.id}}" />\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="name" id="" value="{{lineProduct.name}}" />\r\n										<input type="hidden" name="lineProductId" value="{{lineProduct.id}}" />\r\n										<!-- <button class="col-sm-4 btn btn-sm btn-primary btn-Plan-search" style="padding-bottom:5px;">\r\n											<i class="ace-icon fa fa-search "></i>搜索\r\n										</button> --> \r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出团日期：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="startTime" readonly="readonly" id="" value="{{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">团队编号：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="{{tripPlan.tripNumber}}" placeholder="系统自动生成" />\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>计划人数：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="planTouristCount" id="" value="{{tripPlan.planTouristCount}}" maxlength="6"/>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车座数：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 chooseSeatCount bind-change" type="text" name="seatCount" id="" value="{{bus.seatCount}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>车辆品牌：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 chooseBusCompany bind-change" type="text" name="needBusBrand" id="" value="{{bus.brand}}" />\r\n										<input type="hidden" name="busBrandId" value="" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>车牌号：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 chooseBusLicenseNumber bind-change" type="text" name="LicenseNumber" id="" value="{{bus.licenseNumber}}" />\r\n										<input type="hidden" name="busLicenseNumberId" value="{{bus.id}}" />\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>导游：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 AddTPchooseGuide bind-change" type="text" name="AddTPchooseGuide" id="" value="{{guide.realname}}" />\r\n										<input type="hidden" name="AddTPchooseGuideId" value="{{guide.id}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">导游电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="GmobileNumber" id="" value="{{guide.mobileNumber}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>司机：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 chooseDriver bind-change" type="text" name="driverName" id="" value="{{driver.name}}" />\r\n										<input type="hidden" name="driverId" value="{{driver.id}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">司机电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="DmobileNumber" id="" value="{{driver.mobileNumber}}" />\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">全陪：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="accompanyGuideName" id="" value="{{tripPlan.accompanyGuideName}}" />\r\n									</div>							\r\n									<label class="col-sm-1 control-label no-padding-right">全陪电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="accompanyGuideMobile" id="" value="{{tripPlan.accompanyGuideMobile}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合地点：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="setPlacePosition" id="" value="{{tripPlan.setPlacePosition}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合时间：</label>\r\n									<div class="col-sm-2">\r\n										<input class="form-control col-sm-12" type="text" name="setPlaceTime" value="{{tripPlan.setPlaceTime}}" />\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n\r\n\r\n		<div class="form-horizontal col-sm-12 checkbox">\r\n			<div class="pull-left  no-padding-right">\r\n				<label class="control-label no-padding-right">游客短信发送:</label>\r\n				定时发送\r\n				<label>\r\n					<input type="radio"  checked="checked" class="ace buyInsurance-status" disabled="" value="{{tripPlan.executeTimeType}}" name="executeTimeType">\r\n					<span class="lbl">\r\n					</span>\r\n				</label>\r\n				立即发送\r\n				<label>\r\n					<input type="radio" class="ace buyInsurance-status" disabled="" value="{{tripPlan.executeTimeType}}" name="executeTimeType">\r\n					<span class="lbl">\r\n					</span>\r\n				</label>\r\n			</div>\r\n			<div class="col-sm-2">\r\n				<input class="form-control col-sm-4 datetimepicker" disabled="" type="text" name="executeTime" value="{{tripPlan.executeTime}}" />\r\n			</div>\r\n        </div>\r\n\r\n\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<span class="badge badge-primary">2</span>\r\n								<label class="middle title-size">游客名单</label>\r\n								<button class="btn btn-sm btn-success  newAddTouristGroup" style="margin-left: 20px">\r\n									<i class="ace-icon fa fa-plus"></i>\r\n									添加游客小组\r\n								</button>\r\n							</h5>\r\n						<div style="display: inline-block;padding-left: 30px;">总人数：<span class="tripPlanAllMemberCount"></span></div>\r\n\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<table class="table table-striped table-bordered table-hover">\r\n											<thead>\r\n												<tr>\r\n													<th class="th-border">小组</th>\r\n													<th class="th-border">来源</th>\r\n													<th class="th-border">联系人</th>\r\n													<th class="th-border">联系电话</th>\r\n													<th class="th-border">客源地</th>\r\n													<th class="th-border">年龄</th>\r\n													<th class="th-border">人数</th>\r\n													<th class="th-border">备注</th>\r\n													<th class="th-border">操作</th>\r\n												</tr>\r\n											</thead>\r\n											<tbody class="updateTripPlanTouristTbody">{{each touristGroupList as touristGroup}}\r\n												<tr data-entity-id="{{touristGroup.id}}">\r\n													<td></td>\r\n													<td>{{if touristGroup.partnerAgency != null}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n													<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n													<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n													<td>{{touristGroup.areaData}}</td>\r\n													<td>{{touristGroup.ageData}}</td>\r\n													<td class="tripPlanTrMemberCount">{{touristGroup.adultCount + touristGroup.childCount}}</td>\r\n													<td>{{touristGroup.remark}}</td>\r\n													<td>\r\n														<div class="hidden-sm hidden-xs btn-group">\r\n															<a data-entity-id="{{touristGroup.id}}" class="cursor touristGroupView">\r\n																查看\r\n															</a><a class="cursor"></a>\r\n															<a data-entity-id="{{touristGroup.id}}" class="cursor touristGroupDelete">\r\n																删除\r\n															</a>\r\n														</div>\r\n													</td>\r\n												</tr>{{/each}}\r\n											</tbody>\r\n										</table>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal formOneList" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<span class="badge badge-primary">3</span>\r\n								<label class="middle title-size">线路</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<label class="col-sm-1 control-label no-padding-right">类别：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="type" id="" value="{{lineProduct.type}}" />\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">应用范围：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="customerType" id="" value="{{if lineProduct.customerType == 0}}散客{{else if lineProduct.customerType == 1}}团体{{/if}}" />\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">天数：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="days" id="" value="{{lineProduct.days}}" />\r\n											</div>				\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="widget-title">\r\n								<span class="badge badge-primary">4</span>\r\n								<label class="middle title-size">日程</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<table class="table table-striped table-bordered table-hover days">\r\n												<thead>\r\n													<tr>\r\n														<th class="th-border">日期</th>\r\n														<th class="th-border">含餐情况</th>\r\n														<th class="th-border">酒店星级</th>\r\n														<th class="th-border">简要行程</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>{{each lineProductDayList as dayList}}\r\n													<tr data-entity-id="{{dayList.id}}">\r\n														<td>第{{dayList.whichDay}}天</td>\r\n														<td>{{dayList.repastDetail}}</td>\r\n														<td>\r\n															{{if dayList.hotelLevel == 1}}\r\n															三星以下\r\n															{{else if dayList.hotelLevel == 2}}\r\n															三星\r\n															{{else if dayList.hotelLevel == 3}}\r\n															准四星\r\n															{{else if dayList.hotelLevel == 4}}\r\n															四星\r\n															{{else if dayList.hotelLevel == 5}}\r\n															准五星\r\n															{{else if dayList.hotelLevel == 6}}\r\n															五星\r\n															{{else if dayList.hotelLevel == 7}}\r\n															五星以上\r\n															{{/if}}\r\n														</td>\r\n														<td class="col-xs-6">{{dayList.title}}</td>\r\n													</tr>{{/each}}\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">费用包含:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly" name="includeFee">{{lineProduct.includeFee}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">费用不含:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly" name="excludeFee">{{lineProduct.excludeFee}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">行程特色:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly" name="lineFeature">{{lineProduct.lineFeature}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">行程须知:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly" name="lineNotice">{{lineProduct.lineNotice}}</textarea>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group" style="text-align: center;">\r\n				<button class="btn btn-sm btn-danger btn-updatecancelTripPlan otherButton">\r\n					<i class="ace-icon fa fa-times"></i>\r\n					取消\r\n				</button>\r\n				<button class="btn btn-sm btn-primary btn-updateTripPlan otherButton" style="margin-left: 30px">\r\n					<i class="ace-icon fa fa-check"></i>\r\n					保存\r\n				</button>\r\n			</div>\r\n		</form>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});