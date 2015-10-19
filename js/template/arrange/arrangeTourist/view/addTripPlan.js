/*TMODJS:{"debug":true,"version":291,"md5":"4d8bd4aaee83fafe1f450a071890d4d9"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/addTripPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, addTripPlan = $data.addTripPlan, $each = $utils.$each, $out = ($data.touristGroupList, 
            $data.$index, $data.lineProductDay, "");
            return $out += '<div class="addTripPlan clearfix globalAdd"> <div class="col-xs-12 addTripPlanMain"> <form class="form-horizontal addTripPlanMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">基本信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="', 
            $line = 16, $out += $escape(addTripPlan.lineProduct.name), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 17, $out += $escape(addTripPlan.lineProduct.id), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出团日期：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="startTime" id="" value="', 
            $line = 21, $out += $escape($helpers.dateFormat(addTripPlan.touristGroupList[0].startTime, "yyyy-MM-dd")), 
            $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">团队编号：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="" placeholder="系统自动生成" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>计划人数：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="planTouristCount" id="" value="" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车座数：</label> <div class="col-sm-2"> <input class="col-sm-12 bind-change" type="text" name="seatCount" id="" value="', 
            $line = 35, null != addTripPlan.bus && ($line = 35, $out += $escape(addTripPlan.bus.seatCount), 
            $line = 35), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车辆品牌：</label> <div class="col-sm-2"> <input class="col-sm-12 chooseBusCompany bind-change" type="text" name="needBusBrand" id="" value="', 
            $line = 39, null != addTripPlan.bus && ($line = 39, $out += $escape(addTripPlan.bus.brand), 
            $line = 39), $out += '" /> <input type="hidden" name="busBrandId" value="', $line = 40, 
            null != addTripPlan.brand && ($line = 40, $out += $escape(addTripPlan.brand.id), 
            $line = 40), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车牌号：</label> <div class="col-sm-2"> <input class="col-sm-12 chooseBusLicenseNumber bind-change" type="text" name="LicenseNumber" id="" value="', 
            $line = 44, null != addTripPlan.bus && ($line = 44, $out += $escape(addTripPlan.bus.licenseNumber), 
            $line = 44), $out += '" /> <input type="hidden" name="busLicenseNumberId" value="', 
            $line = 45, null != addTripPlan.bus && ($line = 45, $out += $escape(addTripPlan.bus.id), 
            $line = 45), $out += '" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>导游：</label> <div class="col-sm-2"> <input class="col-sm-12 AddTPchooseGuide bind-change" type="text" name="AddTPchooseGuide" id="" value="', 
            $line = 51, null != addTripPlan.guide && ($line = 51, $out += $escape(addTripPlan.guide.realname), 
            $line = 51), $out += '" /> <input type="hidden" name="AddTPchooseGuideId" value="', 
            $line = 52, null != addTripPlan.guide && ($line = 52, $out += $escape(addTripPlan.guide.id), 
            $line = 52), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">导游电话：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="GmobileNumber" id="" value="', 
            $line = 56, null != addTripPlan.guide && ($line = 56, $out += $escape(addTripPlan.guide.mobileNumber), 
            $line = 56), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>司机：</label> <div class="col-sm-2"> <input class="col-sm-12 chooseDriver bind-change" type="text" name="driverName" id="" value="', 
            $line = 60, null != addTripPlan.driver && ($line = 60, $out += $escape(addTripPlan.driver.name), 
            $line = 60), $out += '" /> <input type="hidden" name="driverId" value="', $line = 61, 
            null != addTripPlan.driver && ($line = 61, $out += $escape(addTripPlan.driver.id), 
            $line = 61), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">司机电话：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="DmobileNumber" id="" value="', 
            $line = 65, null != addTripPlan.driver && ($line = 65, $out += $escape(addTripPlan.driver.mobileNumber), 
            $line = 65), $out += '" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">全陪：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="accompanyGuideName" id="" value="" maxlength="16" /> </div> <label class="col-sm-1 control-label no-padding-right">全陪电话：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="accompanyGuideMobile" id="" value="" maxlength="11" /> </div> <label class="col-sm-1 control-label no-padding-right">集合地点：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="setPlacePosition" id="" value="" maxlength="50"/> </div> <label class="col-sm-1 control-label no-padding-right">集合时间：</label> <div class="col-sm-2"> <input class="form-control col-sm-12 dataTimePicker" type="text" name="setPlaceTime" value="" /> </div> </div> </div> </div> </div> </div> </div> </form> <div class="form-horizontal col-sm-12 checkbox"> <div class="pull-left no-padding-right"> <label class="control-label no-padding-right">游客短信发送:</label> 立即发送 <label> <input type="radio" class="ace checked" checked="checked" value="0" name="executeTimeType"> <span class="lbl"> </span> </label> 定时发送 <label> <input type="radio" class="ace checked" value="1" name="executeTimeType"> <span class="lbl"> </span> </label> </div> <div class="col-sm-2 addMergePlanTime hide"> <input class="form-control col-sm-4 datetimepicker" type="text" name="executeTime" value="" /> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">游客名单</label> <button class="btn btn-sm btn-success addTouristGroup"> <i class="ace-icon fa fa-plus"></i> 添加游客小组 </button> </h5> <div style="display: inline-block;padding-left: 30px;">总人数：<span class="tripPlanAllMemberCount"></span></div> </div> <div class="form-group"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">小组</th> <th class="th-border">线路产品</th> <th class="th-border">住宿标准 </th> <th class="th-border">自费</th> <th class="th-border">来源</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">备注</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="addTripPlanTouristTbody">', 
            $line = 149, $each(addTripPlan.touristGroupList, function(touristGroupList) {
                $out += ' <tr data-entity-id="', $line = 150, $out += $escape(touristGroupList.id), 
                $out += '"> <td></td> <td>', $line = 154, $out += $escape(touristGroupList.lineProduct.name), 
                $out += "</td> <td> ", $line = 156, 1 == touristGroupList.hotelLevel && ($out += "三星以下", 
                $line = 156), $out += " ", $line = 157, 2 == touristGroupList.hotelLevel && ($out += "三星", 
                $line = 157), $out += " ", $line = 158, 3 == touristGroupList.hotelLevel && ($out += "准四星", 
                $line = 158), $out += " ", $line = 159, 4 == touristGroupList.hotelLevel && ($out += "四星", 
                $line = 159), $out += " ", $line = 160, 5 == touristGroupList.hotelLevel && ($out += "准五星", 
                $line = 160), $out += " ", $line = 161, 6 == touristGroupList.hotelLevel && ($out += "五星", 
                $line = 161), $out += " ", $line = 162, 7 == touristGroupList.hotelLevel && ($out += "五星以上", 
                $line = 162), $out += " </td> <td>", $line = 164, $out += $escape(touristGroupList.includeSelfPay), 
                $out += "</td> <td> ", $line = 167, null != touristGroupList.partnerAgency && ($out += " ", 
                $line = 168, $out += $escape(touristGroupList.partnerAgency.travelAgencyName), $out += " ", 
                $line = 169), $out += " </td> <td> ", $line = 172, null != touristGroupList.contactMember && ($out += " ", 
                $line = 173, $out += $escape(touristGroupList.contactMember.name), $out += " ", 
                $line = 174), $out += " </td> <td> ", $line = 177, null != touristGroupList.contactMember && ($out += " ", 
                $line = 178, $out += $escape(touristGroupList.contactMember.mobileNumber), $out += " ", 
                $line = 179), $out += " </td> <td>", $line = 181, $out += $escape(touristGroupList.areaData), 
                $out += "</td> <td>", $line = 182, $out += $escape(touristGroupList.ageData), $out += '</td> <td class="tripPlanTrMemberCount">', 
                $line = 183, $out += $escape(touristGroupList.adultCount + touristGroupList.childCount), 
                $out += "</td> <td>", $line = 184, $out += $escape(touristGroupList.remark), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 187, $out += $escape(touristGroupList.id), $out += '" class="cursor addTripPlanView"> 查看 </a> <a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 190, $out += $escape(touristGroupList.id), $out += '" class="cursor addTripPlanDelete"> 删除 </a> </div> </td> </tr>', 
                $line = 195;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">3</span> <label class="middle title-size">线路</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">类别：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="type" id="" value="', 
            $line = 221, $out += $escape(addTripPlan.lineProduct.type), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">应用范围：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="customerType" id="" value="', 
            $line = 225, null != addTripPlan.lineProduct && ($line = 225, 0 == addTripPlan.lineProduct.customerType ? ($out += "散客", 
            $line = 225) : 1 == addTripPlan.lineProduct.customerType && ($out += "团体", $line = 225), 
            $line = 225), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">天数：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="days" id="" value="', 
            $line = 229, $out += $escape(addTripPlan.lineProduct.days), $out += '" /> </div> </div> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">4</span> <label class="middle title-size">日程</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">含餐情况</th> <th class="th-border">酒店星级</th> <th class="th-border">简要行程</th> </tr> </thead> <tbody>', 
            $line = 262, $each(addTripPlan.lineProductDayList, function(lineProductDay) {
                $out += ' <tr data-travelLine-Id="', $line = 263, $out += $escape(lineProductDay.id), 
                $out += '"> <td>第', $line = 264, $out += $escape(lineProductDay.whichDay), $out += "天</td> <td>", 
                $line = 265, $out += $escape(lineProductDay.repastDetail), $out += "</td> <td> ", 
                $line = 267, 1 == lineProductDay.hotelLevel ? ($out += " 三星以下 ", $line = 269) : 2 == lineProductDay.hotelLevel ? ($out += " 三星 ", 
                $line = 271) : 3 == lineProductDay.hotelLevel ? ($out += " 准四星 ", $line = 273) : 4 == lineProductDay.hotelLevel ? ($out += " 四星 ", 
                $line = 275) : 5 == lineProductDay.hotelLevel ? ($out += " 准五星 ", $line = 277) : 6 == lineProductDay.hotelLevel ? ($out += " 五星 ", 
                $line = 279) : 7 == lineProductDay.hotelLevel && ($out += " 五星以上 ", $line = 281), 
                $out += ' </td> <td class="col-xs-6">', $line = 283, $out += $escape(lineProductDay.title), 
                $out += "</td> </tr>", $line = 284;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly">', 
            $line = 297, $out += $escape(addTripPlan.lineProduct.includeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用不含:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly">', 
            $line = 303, $out += $escape(addTripPlan.lineProduct.excludeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly">', 
            $line = 309, $out += $escape(addTripPlan.lineProduct.lineFeature), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly">', 
            $line = 315, $out += $escape(addTripPlan.lineProduct.lineNotice), $out += '</textarea> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-danger btn-cancelTripPlan otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-primary btn-saveTripPlan btn-xs otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="addTripPlan clearfix globalAdd">\r\n	<div class="col-xs-12 addTripPlanMain">\r\n		<form class="form-horizontal addTripPlanMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<span class="badge badge-primary">1</span>\r\n								<label class="middle title-size">基本信息</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="{{addTripPlan.lineProduct.name}}" />\r\n										<input type="hidden" name="lineProductId" value="{{addTripPlan.lineProduct.id}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出团日期：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="startTime" id="" value="{{addTripPlan.touristGroupList[0].startTime | dateFormat: \'yyyy-MM-dd\'}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">团队编号：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="" placeholder="系统自动生成" />\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>计划人数：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="planTouristCount" id="" value="" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车座数：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 bind-change" type="text" name="seatCount" id="" value="{{if addTripPlan.bus != null}}{{addTripPlan.bus.seatCount}}{{/if}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车辆品牌：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 chooseBusCompany bind-change" type="text" name="needBusBrand" id="" value="{{if addTripPlan.bus != null}}{{addTripPlan.bus.brand}}{{/if}}" />\r\n										<input type="hidden" name="busBrandId" value="{{if addTripPlan.brand != null}}{{addTripPlan.brand.id}}{{/if}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车牌号：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 chooseBusLicenseNumber bind-change" type="text" name="LicenseNumber" id="" value="{{if addTripPlan.bus != null}}{{addTripPlan.bus.licenseNumber}}{{/if}}" />\r\n										<input type="hidden" name="busLicenseNumberId" value="{{if addTripPlan.bus != null}}{{addTripPlan.bus.id}}{{/if}}" />\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>导游：</label>\r\n									<div class="col-sm-2">  \r\n										<input class="col-sm-12 AddTPchooseGuide bind-change" type="text" name="AddTPchooseGuide" id="" value="{{if addTripPlan.guide != null}}{{addTripPlan.guide.realname}}{{/if}}" />\r\n										<input type="hidden" name="AddTPchooseGuideId" value="{{if addTripPlan.guide != null}}{{addTripPlan.guide.id}}{{/if}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">导游电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="GmobileNumber" id="" value="{{if addTripPlan.guide != null}}{{addTripPlan.guide.mobileNumber}}{{/if}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>司机：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 chooseDriver bind-change" type="text" name="driverName" id="" value="{{if addTripPlan.driver != null}}{{addTripPlan.driver.name}}{{/if}}" />\r\n										<input type="hidden" name="driverId" value="{{if addTripPlan.driver != null}}{{addTripPlan.driver.id}}{{/if}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">司机电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="DmobileNumber" id="" value="{{if addTripPlan.driver != null}}{{addTripPlan.driver.mobileNumber}}{{/if}}" />\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">全陪：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="accompanyGuideName" id="" value="" maxlength="16" />\r\n									</div>							\r\n									<label class="col-sm-1 control-label no-padding-right">全陪电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="accompanyGuideMobile" id="" value="" maxlength="11" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合地点：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="setPlacePosition" id="" value="" maxlength="50"/>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合时间：</label>\r\n									<div class="col-sm-2">\r\n										<input class="form-control col-sm-12 dataTimePicker" type="text" name="setPlaceTime" value="" />\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n\r\n		<div class="form-horizontal col-sm-12 checkbox">\r\n			<div class="pull-left  no-padding-right">\r\n				<label class="control-label no-padding-right">游客短信发送:</label>\r\n				立即发送\r\n				<label>\r\n					<input type="radio" class="ace checked" checked="checked" value="0" name="executeTimeType">\r\n					<span class="lbl">\r\n					</span>\r\n				</label>\r\n				定时发送\r\n				<label>\r\n					<input type="radio" class="ace checked"  value="1" name="executeTimeType">\r\n					<span class="lbl">\r\n					</span>\r\n				</label> \r\n			</div>\r\n			<div class="col-sm-2 addMergePlanTime hide">\r\n				<input class="form-control col-sm-4 datetimepicker" type="text" name="executeTime" value="" />\r\n			</div>\r\n        </div>\r\n\r\n        \r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<span class="badge badge-primary">2</span>\r\n								<label class="middle title-size">游客名单</label>\r\n										<button class="btn btn-sm btn-success addTouristGroup">\r\n											<i class="ace-icon fa fa-plus"></i>\r\n											添加游客小组\r\n										</button>\r\n								</h5>\r\n										<div style="display: inline-block;padding-left: 30px;">总人数：<span class="tripPlanAllMemberCount"></span></div>\r\n\r\n								</div>\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<table class="table table-striped table-bordered table-hover"> \r\n											<thead>\r\n												<tr>\r\n													<th class="th-border">小组</th>\r\n													<th class="th-border">线路产品</th>\r\n													<th class="th-border">住宿标准 </th>\r\n													<th class="th-border">自费</th>\r\n													<th class="th-border">来源</th>\r\n													<th class="th-border">联系人</th>\r\n													<th class="th-border">联系电话</th>\r\n													<th class="th-border">客源地</th>\r\n													<th class="th-border">年龄</th>\r\n													<th class="th-border">人数</th>\r\n													<th class="th-border">备注</th>\r\n													<th class="th-border">操作</th>\r\n												</tr>\r\n											</thead>\r\n											<tbody class="addTripPlanTouristTbody">{{each addTripPlan.touristGroupList as touristGroupList}}\r\n												<tr data-entity-id="{{touristGroupList.id}}">\r\n													<td></td>\r\n\r\n\r\n												    <td>{{touristGroupList.lineProduct.name}}</td>    \r\n													<td>\r\n														{{if touristGroupList.hotelLevel == 1}}三星以下{{/if}}\r\n														{{if touristGroupList.hotelLevel == 2}}三星{{/if}}\r\n														{{if touristGroupList.hotelLevel == 3}}准四星{{/if}}\r\n														{{if touristGroupList.hotelLevel == 4}}四星{{/if}}\r\n														{{if touristGroupList.hotelLevel == 5}}准五星{{/if}}\r\n														{{if touristGroupList.hotelLevel == 6}}五星{{/if}}\r\n														{{if touristGroupList.hotelLevel == 7}}五星以上{{/if}}\r\n													</td>\r\n													<td>{{touristGroupList.includeSelfPay}}</td>    \r\n\r\n													<td>\r\n														{{if touristGroupList.partnerAgency != null}}\r\n															{{touristGroupList.partnerAgency.travelAgencyName}}\r\n														{{/if}}\r\n													</td>\r\n													<td>\r\n														{{if touristGroupList.contactMember != null}}\r\n															{{touristGroupList.contactMember.name}}\r\n														{{/if}}\r\n													</td>\r\n													<td>\r\n														{{if touristGroupList.contactMember != null}}\r\n															{{touristGroupList.contactMember.mobileNumber}}\r\n														{{/if}}\r\n													</td>\r\n													<td>{{touristGroupList.areaData}}</td>\r\n													<td>{{touristGroupList.ageData}}</td>\r\n													<td class="tripPlanTrMemberCount">{{touristGroupList.adultCount + touristGroupList.childCount}}</td>\r\n													<td>{{touristGroupList.remark}}</td>\r\n													<td>\r\n													<div class="hidden-sm hidden-xs btn-group">\r\n														<a data-entity-id="{{touristGroupList.id}}" class="cursor addTripPlanView">\r\n															查看\r\n														</a> <a href="" class="cursor"> |</a>\r\n														<a data-entity-id="{{touristGroupList.id}}" class="cursor addTripPlanDelete">\r\n															删除\r\n														</a>\r\n													</div>\r\n													</td>\r\n												</tr>{{/each}}\r\n											</tbody>\r\n										</table>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<span class="badge badge-primary">3</span>\r\n								<label class="middle title-size">线路</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<label class="col-sm-1 control-label no-padding-right">类别：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="type" id="" value="{{addTripPlan.lineProduct.type}}" />\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">应用范围：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="customerType" id="" value="{{if addTripPlan.lineProduct != null}}{{if addTripPlan.lineProduct.customerType == 0}}散客{{else if addTripPlan.lineProduct.customerType == 1}}团体{{/if}}{{/if}}" />\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">天数：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="days" id="" value="{{addTripPlan.lineProduct.days}}" />\r\n											</div>				\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="widget-title">\r\n								<span class="badge badge-primary">4</span>\r\n								<label class="middle title-size">日程</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<table class="table table-striped table-bordered table-hover">\r\n												<thead>\r\n													<tr>\r\n														<th class="th-border">日期</th>\r\n														<th class="th-border">含餐情况</th>\r\n														<th class="th-border">酒店星级</th>\r\n														<th class="th-border">简要行程</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>{{each addTripPlan.lineProductDayList as lineProductDay}}\r\n													<tr data-travelLine-Id="{{lineProductDay.id}}">\r\n														<td>第{{lineProductDay.whichDay}}天</td>\r\n														<td>{{lineProductDay.repastDetail}}</td>\r\n														<td>\r\n															{{if lineProductDay.hotelLevel==1}}\r\n																三星以下\r\n															{{else if lineProductDay.hotelLevel==2}}\r\n																三星\r\n															{{else if lineProductDay.hotelLevel==3}}\r\n																准四星\r\n															{{else if lineProductDay.hotelLevel==4}}\r\n																四星\r\n															{{else if lineProductDay.hotelLevel==5}}\r\n																准五星\r\n															{{else if lineProductDay.hotelLevel==6}}\r\n																五星\r\n															{{else if lineProductDay.hotelLevel==7}}\r\n																五星以上\r\n															{{/if}}\r\n														</td>\r\n														<td class="col-xs-6">{{lineProductDay.title}}</td>\r\n													</tr>{{/each}}\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">费用包含:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly">{{addTripPlan.lineProduct.includeFee}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">费用不含:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly">{{addTripPlan.lineProduct.excludeFee}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">行程特色:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly">{{addTripPlan.lineProduct.lineFeature}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">行程须知:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly">{{addTripPlan.lineProduct.lineNotice}}</textarea>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group" style="text-align: center;">\r\n				<button class="btn btn-xs btn-danger btn-cancelTripPlan otherButton">\r\n					<i class="ace-icon fa fa-times"></i>\r\n					取消\r\n				</button>\r\n				<button class="btn btn-primary btn-saveTripPlan btn-xs otherButton" style="margin-left: 30px">\r\n					<i class="ace-icon  fa fa-check"></i>\r\n					保存\r\n				</button>\r\n			</div>\r\n		</form>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});