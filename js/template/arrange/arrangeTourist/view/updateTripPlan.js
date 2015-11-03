/*TMODJS:{"debug":true,"version":211,"md5":"dbea625562632b547cf0e105f31741ff"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/updateTripPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, tripPlan = $data.tripPlan, lineProduct = $data.lineProduct, bus = $data.bus, busCompant = $data.busCompant, guide = $data.guide, driver = $data.driver, $each = $utils.$each, touristGroupList = $data.touristGroupList, lineProductDayList = ($data.touristGroup, 
            $data.$index, $data.lineProductDayList), $out = ($data.dayList, "");
            return $out += '<div class="mergeTripPlan globalAdd"> <div class="col-xs-12 addTripPlanMain"> <form class="form-horizontal newAddTripPlanMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 基本信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <input type="hidden" name="tripPlanId" value="', 
            $line = 16, $out += $escape(tripPlan.id), $out += '" /> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="name" id="" value="', 
            $line = 19, $out += $escape(lineProduct.name), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 20, $out += $escape(lineProduct.id), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出团日期：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="startTime" readonly="readonly" id="" value="', 
            $line = 24, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>计划人数：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="planTouristCount" id="" value="', 
            $line = 28, $out += $escape(tripPlan.planTouristCount), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">团队编号：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="', 
            $line = 32, $out += $escape(tripPlan.tripNumber), $out += '" placeholder="系统自动生成" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车座数：</label> <div class="col-sm-2"> <input class="col-sm-12 bind-change chooseSeatCount" type="text" name="seatCount" id="" value="', 
            $line = 38, $out += $escape(bus.seatCount), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">车辆品牌：</label> <div class="col-sm-2"> <input class="col-sm-12 chooseBusBrand bind-change" type="text" name="needBusBrand" id="" value="', 
            $line = 42, $out += $escape(bus.brand), $out += '" /> <input type="hidden" name="busBrandId" value="" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车牌号：</label> <div class="col-sm-2"> <div class="col-sm-12 no-padding"> <input class="col-sm-12 chooseBusLicenseNumber bind-change" type="text" name="LicenseNumber" id="" value="', 
            $line = 48, $out += $escape(bus.licenseNumber), $out += '" /> <input type="hidden" name="busLicenseNumberId" value="', 
            $line = 49, $out += $escape(bus.id), $out += '" /> <span class="addResourceBtnTripPlan T-addBusResource R-right" data-right="1020003" title="添加车辆"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </div> <label class="col-sm-1 control-label no-padding-right">所属车队：</label> <div class="col-sm-2"> <div class="col-sm-12 no-padding"> <input class="col-sm-12 bind-change" type="text" name="busCompany" readonly="readonly" id="" value="', 
            $line = 58, $out += $escape(busCompant.companyName), $out += '" /> <input type="hidden" name="busCompanyId" value="', 
            $line = 59, $out += $escape(busCompant.id), $out += '" /> <span class="addResourceBtnTripPlan T-addBusCompanyResource R-right" data-right="1020002" title="添加车队"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>导游：</label> <div class="col-sm-2"> <div class="col-sm-12 no-padding"> <input class="col-sm-12 AddTPchooseGuide bind-change" type="text" name="AddTPchooseGuide" id="" value="', 
            $line = 70, $out += $escape(guide.realname), $out += '" /> <input type="hidden" name="AddTPchooseGuideId" value="', 
            $line = 71, $out += $escape(guide.id), $out += '" /> <span class="addResourceBtnTripPlan T-addGuideResource R-right" data-right="1010002" title="添加导游"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </div> <label class="col-sm-1 control-label no-padding-right">导游电话：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="GmobileNumber" id="" value="', 
            $line = 79, $out += $escape(guide.mobileNumber), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>司机：</label> <div class="col-sm-2"> <div class="col-sm-12 no-padding"> <input class="col-sm-12 chooseDriver bind-change" type="text" name="driverName" id="" value="', 
            $line = 84, $out += $escape(driver.name), $out += '" /> <input type="hidden" name="driverId" value="', 
            $line = 85, $out += $escape(driver.id), $out += '" /> <span class="addResourceBtnTripPlan T-addDriverResource R-right" data-right="1020003" title="添加司机"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </div> <label class="col-sm-1 control-label no-padding-right">司机电话：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="DmobileNumber" id="" value="', 
            $line = 93, $out += $escape(driver.mobileNumber), $out += '" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">全陪：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="accompanyGuideName" id="" value="', 
            $line = 99, $out += $escape(tripPlan.accompanyGuideName), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">全陪电话：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="accompanyGuideMobile" id="" value="', 
            $line = 103, $out += $escape(tripPlan.accompanyGuideMobile), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">集合地点：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="setPlacePosition" id="" value="', 
            $line = 107, $out += $escape(tripPlan.setPlacePosition), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">集合时间：</label> <div class="col-sm-2"> <input class="form-control col-sm-12 dataTimePicker" type="text" name="setPlaceTime" value="', 
            $line = 111, $out += $escape(tripPlan.setPlaceTime), $out += '" /> </div> </div> </div> </div> </div> </div> </div> </form> <div class="form-horizontal col-sm-12 checkbox"> <div class="pull-left no-padding-right"> <label class="control-label no-padding-right">确认发团后游客短信设置:</label> 立即发送 <label style="padding-left:0px;"> <input type="radio" class="ace checked" value="0" name="executeTimeType"> <span class="lbl"> </span> </label> &nbsp;&nbsp;&nbsp;&nbsp; 定时发送 <label style="padding-left:0px;"> <input type="radio" class="ace checked" value="1" name="executeTimeType"> <span class="lbl"> </span> </label> </div> <div class="col-sm-2 addMergePlanTime"> <input class="form-control col-sm-4 datetimepicker" type="text" name="executeTime" value="', 
            $line = 140, $out += $escape(tripPlan.executeTime), $out += '" /> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 游客名单 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12">  <div style="display: inline-block;padding-left: 30px;">总人数：<span class="tripPlanAllMemberCount"></span></div> </div> </div> <div class="form-group"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">小组</th> <th class="th-border">外联销售</th> <th class="th-border">线路产品</th> <th class="th-border">来源</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">现收团款</th> <th class="th-border">住宿标准</th> <th class="th-border">包含自费</th> <th class="th-border">备注</th> <th class="th-border" width="100">操作</th> </tr> </thead> <tbody class="updateTripPlanTouristTbody">', 
            $line = 189, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 190, $out += $escape(touristGroup.id), 
                $out += '" data-entity-pid="', $line = 190, $out += $escape(touristGroup.pid), $out += '"> <td></td> <td>', 
                $line = 192, $out += $escape(touristGroup.creatorName), $out += "</td> <td>", $line = 193, 
                $out += $escape(touristGroup.lineProduct.name), $out += "</td> <td>", $line = 194, 
                null != touristGroup.partnerAgency && ($line = 194, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
                $line = 194), $out += "</td> <td>", $line = 195, null != touristGroup.contactMember && ($line = 195, 
                $out += $escape(touristGroup.contactMember.name), $line = 195), $out += "</td> <td>", 
                $line = 196, null != touristGroup.contactMember && ($line = 196, $out += $escape(touristGroup.contactMember.mobileNumber), 
                $line = 196), $out += "</td> <td>", $line = 197, $out += $escape(touristGroup.areaData), 
                $out += "</td> <td>", $line = 198, $out += $escape(touristGroup.ageData), $out += '</td> <td class="tripPlanTrMemberCount">', 
                $line = 199, $out += $escape(touristGroup.adultCount + touristGroup.childCount), 
                $out += "</td> <td>", $line = 200, $out += $escape(touristGroup.transNeedPayAllMoney), 
                $out += "</td> <td>", $line = 201, 0 == touristGroup.hotelLevel ? ($out += " 未选择 ", 
                $line = 203) : 1 == touristGroup.hotelLevel ? ($out += " 三星以下 ", $line = 205) : 2 == touristGroup.hotelLevel ? ($out += " 三星 ", 
                $line = 207) : 3 == touristGroup.hotelLevel ? ($out += " 准四星 ", $line = 209) : 4 == touristGroup.hotelLevel ? ($out += " 四星 ", 
                $line = 211) : 5 == touristGroup.hotelLevel ? ($out += " 准五星 ", $line = 213) : 6 == touristGroup.hotelLevel ? ($out += " 五星 ", 
                $line = 215) : 7 == touristGroup.hotelLevel && ($out += " 五星以上 ", $line = 217), 
                $out += " </td> <td>", $line = 219, $out += $escape(touristGroup.includeSelfPay), 
                $out += "</td> <td>", $line = 220, $out += $escape(touristGroup.remark), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <button data-entity-id="', 
                $line = 223, $out += $escape(touristGroup.id), $out += '" class="btn btn-xs btn-success touristGroupView"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </button> <button data-entity-id="', 
                $line = 226, $out += $escape(touristGroup.id), $out += '" class="btn btn-xs btn-danger touristGroupDelete"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </button> </div> </td> </tr>', 
                $line = 231;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal formOneList" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 线路 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">类别：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="type" id="" value="', 
            $line = 260, $out += $escape(lineProduct.type), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">应用范围：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="customerType" id="" value="', 
            $line = 264, 0 == lineProduct.customerType ? ($out += "散客", $line = 264) : 1 == lineProduct.customerType && ($out += "团体", 
            $line = 264), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">天数：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="days" id="" value="', 
            $line = 268, $out += $escape(lineProduct.days), $out += '" /> </div> </div> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 日程 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <table class="table table-striped table-bordered table-hover days"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">含餐情况</th> <th class="th-border">酒店星级</th> <th class="th-border">简要行程</th> </tr> </thead> <tbody>', 
            $line = 304, $each(lineProductDayList, function(dayList) {
                $out += ' <tr data-entity-id="', $line = 305, $out += $escape(dayList.id), $out += '"> <td>第', 
                $line = 306, $out += $escape(dayList.whichDay), $out += "天</td> <td>", $line = 307, 
                $out += $escape(dayList.repastDetail), $out += "</td> <td> ", $line = 309, 1 == dayList.hotelLevel ? ($out += " 三星以下 ", 
                $line = 311) : 2 == dayList.hotelLevel ? ($out += " 三星 ", $line = 313) : 3 == dayList.hotelLevel ? ($out += " 准四星 ", 
                $line = 315) : 4 == dayList.hotelLevel ? ($out += " 四星 ", $line = 317) : 5 == dayList.hotelLevel ? ($out += " 准五星 ", 
                $line = 319) : 6 == dayList.hotelLevel ? ($out += " 五星 ", $line = 321) : 7 == dayList.hotelLevel && ($out += " 五星以上 ", 
                $line = 323), $out += ' </td> <td class="col-xs-6">', $line = 325, $out += $escape(dayList.title), 
                $out += "</td> </tr>", $line = 326;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="includeFee">', 
            $line = 339, $out += $escape(lineProduct.includeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用不含:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="excludeFee">', 
            $line = 345, $out += $escape(lineProduct.excludeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="lineFeature">', 
            $line = 351, $out += $escape(lineProduct.lineFeature), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly" name="lineNotice">', 
            $line = 357, $out += $escape(lineProduct.lineNotice), $out += '</textarea> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-danger btn-updatecancelTripPlan otherButton"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-primary btn-saveTripPlan otherButton"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="mergeTripPlan globalAdd">\r\n	<div class="col-xs-12 addTripPlanMain">\r\n		<form class="form-horizontal newAddTripPlanMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								基本信息\r\n							</h5>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<input type="hidden" name="tripPlanId" value="{{tripPlan.id}}" />\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="name" id="" value="{{lineProduct.name}}" />\r\n										<input type="hidden" name="lineProductId" value="{{lineProduct.id}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出团日期：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="startTime" readonly="readonly" id="" value="{{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>计划人数：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="planTouristCount" id="" value="{{tripPlan.planTouristCount}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">团队编号：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="{{tripPlan.tripNumber}}" placeholder="系统自动生成" />\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车座数：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 bind-change chooseSeatCount" type="text" name="seatCount" id="" value="{{bus.seatCount}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">车辆品牌：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 chooseBusBrand bind-change" type="text" name="needBusBrand" id="" value="{{bus.brand}}" />\r\n										<input type="hidden" name="busBrandId" value="" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车牌号：</label>\r\n									<div class="col-sm-2">\r\n										<div class="col-sm-12 no-padding">\r\n											<input class="col-sm-12 chooseBusLicenseNumber bind-change" type="text" name="LicenseNumber" id="" value="{{bus.licenseNumber}}" />\r\n											<input type="hidden" name="busLicenseNumberId" value="{{bus.id}}" />\r\n											<span class="addResourceBtnTripPlan T-addBusResource R-right" data-right="1020003" title="添加车辆">\r\n                                                <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                            </span>\r\n                                        </div>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">所属车队：</label>\r\n									<div class="col-sm-2">\r\n										<div class="col-sm-12 no-padding">\r\n											<input class="col-sm-12 bind-change" type="text" name="busCompany" readonly="readonly" id="" value="{{busCompant.companyName}}" />\r\n											<input type="hidden" name="busCompanyId" value="{{busCompant.id}}" />\r\n											<span class="addResourceBtnTripPlan T-addBusCompanyResource R-right" data-right="1020002" title="添加车队">\r\n                                                <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                            </span>\r\n                                        </div>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>导游：</label>\r\n									<div class="col-sm-2">\r\n										<div class="col-sm-12 no-padding">\r\n											<input class="col-sm-12 AddTPchooseGuide bind-change" type="text" name="AddTPchooseGuide" id="" value="{{guide.realname}}" />\r\n											<input type="hidden" name="AddTPchooseGuideId" value="{{guide.id}}" />\r\n											<span class="addResourceBtnTripPlan T-addGuideResource R-right" data-right="1010002" title="添加导游">\r\n                                                <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                            </span>\r\n                                        </div>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">导游电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="GmobileNumber" id="" value="{{guide.mobileNumber}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>司机：</label>\r\n									<div class="col-sm-2">\r\n										<div class="col-sm-12 no-padding">\r\n											<input class="col-sm-12 chooseDriver bind-change" type="text" name="driverName" id="" value="{{driver.name}}" />\r\n											<input type="hidden" name="driverId" value="{{driver.id}}" />\r\n											<span class="addResourceBtnTripPlan T-addDriverResource R-right" data-right="1020003" title="添加司机">\r\n                                                <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n                                            </span>\r\n                                        </div>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">司机电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="DmobileNumber" id="" value="{{driver.mobileNumber}}" />\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">全陪：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="accompanyGuideName" id="" value="{{tripPlan.accompanyGuideName}}" />\r\n									</div>							\r\n									<label class="col-sm-1 control-label no-padding-right">全陪电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="accompanyGuideMobile" id="" value="{{tripPlan.accompanyGuideMobile}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合地点：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="setPlacePosition" id="" value="{{tripPlan.setPlacePosition}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合时间：</label>\r\n									<div class="col-sm-2">\r\n										<input class="form-control col-sm-12 dataTimePicker" type="text" name="setPlaceTime" value="{{tripPlan.setPlaceTime}}" />\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n\r\n\r\n		<div class="form-horizontal col-sm-12 checkbox">\r\n			<div class="pull-left  no-padding-right">\r\n				<label class="control-label no-padding-right">确认发团后游客短信设置:</label>\r\n				立即发送\r\n				<label style="padding-left:0px;">\r\n					<input type="radio" class="ace checked" value="0" name="executeTimeType">\r\n					<span class="lbl">\r\n					</span>\r\n				</label>\r\n				&nbsp;&nbsp;&nbsp;&nbsp;\r\n				定时发送\r\n				<label style="padding-left:0px;">\r\n					<input type="radio" class="ace checked"  value="1" name="executeTimeType">\r\n					<span class="lbl">\r\n					</span>\r\n				</label> \r\n			</div>\r\n			<div class="col-sm-2 addMergePlanTime">\r\n				<input class="form-control col-sm-4 datetimepicker" type="text" name="executeTime" value="{{tripPlan.executeTime}}" />\r\n			</div>\r\n        </div>\r\n\r\n\r\n\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								游客名单\r\n							</h5>\r\n						</div>\r\n	\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<!-- 	<button class="btn btn-sm btn-success addTouristGroup">\r\n											<i class="ace-icon fa fa-plus"></i>\r\n											添加游客小组\r\n										</button> -->\r\n										<div style="display: inline-block;padding-left: 30px;">总人数：<span class="tripPlanAllMemberCount"></span></div>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<table class="table table-striped table-bordered table-hover"> \r\n											<thead>\r\n												<tr>\r\n													<th class="th-border">小组</th>\r\n													<th class="th-border">外联销售</th>\r\n													<th class="th-border">线路产品</th>\r\n													<th class="th-border">来源</th>\r\n													<th class="th-border">联系人</th>\r\n													<th class="th-border">联系电话</th>\r\n													<th class="th-border">客源地</th>\r\n													<th class="th-border">年龄</th>\r\n													<th class="th-border">人数</th>\r\n													<th class="th-border">现收团款</th>\r\n													<th class="th-border">住宿标准</th>\r\n													<th class="th-border">包含自费</th>\r\n													<th class="th-border">备注</th>\r\n													<th class="th-border" width="100">操作</th>\r\n												</tr>\r\n											</thead>\r\n											<tbody class="updateTripPlanTouristTbody">{{each touristGroupList as touristGroup}}\r\n												<tr data-entity-id="{{touristGroup.id}}" data-entity-pid="{{touristGroup.pid}}">\r\n													<td></td>\r\n													<td>{{touristGroup.creatorName}}</td>\r\n													<td>{{touristGroup.lineProduct.name}}</td>\r\n													<td>{{if touristGroup.partnerAgency != null}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n													<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n													<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n													<td>{{touristGroup.areaData}}</td>\r\n													<td>{{touristGroup.ageData}}</td>\r\n													<td class="tripPlanTrMemberCount">{{touristGroup.adultCount + touristGroup.childCount}}</td>\r\n													<td>{{touristGroup.transNeedPayAllMoney}}</td>\r\n													<td>{{if touristGroup.hotelLevel==0}}\r\n													   未选择\r\n													   {{else if touristGroup.hotelLevel==1}}\r\n													   三星以下\r\n													   {{else if touristGroup.hotelLevel==2 }}\r\n													   三星\r\n													   {{else if touristGroup.hotelLevel==3 }}\r\n													   准四星\r\n													   {{else if touristGroup.hotelLevel==4 }}\r\n													   四星\r\n													   {{else if touristGroup.hotelLevel==5 }}\r\n													   准五星\r\n													   {{else if touristGroup.hotelLevel==6 }}\r\n													   五星\r\n													   {{else if touristGroup.hotelLevel==7 }}\r\n													   五星以上\r\n													   {{/if}}\r\n												    </td>\r\n													<td>{{touristGroup.includeSelfPay}}</td>\r\n													<td>{{touristGroup.remark}}</td>\r\n													<td>\r\n														<div class="hidden-sm hidden-xs btn-group">\r\n															<button data-entity-id="{{touristGroup.id}}" class="btn btn-xs btn-success touristGroupView">\r\n																<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n															</button>\r\n															<button data-entity-id="{{touristGroup.id}}" class="btn btn-xs btn-danger touristGroupDelete">\r\n																<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n															</button>\r\n														</div>\r\n													</td>\r\n												</tr>{{/each}}\r\n											</tbody>\r\n										</table>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal formOneList" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								线路\r\n							</h5>\r\n						</div>\r\n	\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<label class="col-sm-1 control-label no-padding-right">类别：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="type" id="" value="{{lineProduct.type}}" />\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">应用范围：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="customerType" id="" value="{{if lineProduct.customerType==0}}散客{{else if lineProduct.customerType==1}}团体{{/if}}" />\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">天数：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="days" id="" value="{{lineProduct.days}}" />\r\n											</div>				\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								日程\r\n							</h5>\r\n						</div>\r\n	\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<table class="table table-striped table-bordered table-hover days">\r\n												<thead>\r\n													<tr>\r\n														<th class="th-border">日期</th>\r\n														<th class="th-border">含餐情况</th>\r\n														<th class="th-border">酒店星级</th>\r\n														<th class="th-border">简要行程</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>{{each lineProductDayList as dayList}}\r\n													<tr data-entity-id="{{dayList.id}}">\r\n														<td>第{{dayList.whichDay}}天</td>\r\n														<td>{{dayList.repastDetail}}</td>\r\n														<td>\r\n															{{if dayList.hotelLevel == 1}}\r\n															三星以下\r\n															{{else if dayList.hotelLevel == 2}}\r\n															三星\r\n															{{else if dayList.hotelLevel == 3}}\r\n															准四星\r\n															{{else if dayList.hotelLevel == 4}}\r\n															四星\r\n															{{else if dayList.hotelLevel == 5}}\r\n															准五星\r\n															{{else if dayList.hotelLevel == 6}}\r\n															五星\r\n															{{else if dayList.hotelLevel == 7}}\r\n															五星以上\r\n															{{/if}}\r\n														</td>\r\n														<td class="col-xs-6">{{dayList.title}}</td>\r\n													</tr>{{/each}}\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">费用包含:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly" name="includeFee">{{lineProduct.includeFee}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">费用不含:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly" name="excludeFee">{{lineProduct.excludeFee}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">行程特色:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly" name="lineFeature">{{lineProduct.lineFeature}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">行程须知:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly" name="lineNotice">{{lineProduct.lineNotice}}</textarea>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group" style="text-align: center;">\r\n				<button class="btn btn-danger btn-updatecancelTripPlan otherButton">\r\n					<i class="ace-icon fa fa-times"></i>\r\n					取消\r\n				</button>\r\n				<button class="btn btn-primary btn-saveTripPlan otherButton">\r\n					<i class="ace-icon fa fa-check"></i>\r\n					保存\r\n				</button>\r\n			</div>\r\n		</form>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});