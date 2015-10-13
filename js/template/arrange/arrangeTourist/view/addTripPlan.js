/*TMODJS:{"debug":true,"version":251,"md5":"23e77e2947d4377bbff29f12c99f87c4"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/addTripPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, addTripPlan = $data.addTripPlan, $each = $utils.$each, $out = ($data.touristGroupList, 
            $data.$index, $data.lineProductDay, "");
            return $out += '<div class="addTripPlan clearfix"> <div class="col-xs-12 addTripPlanMain"> <form class="form-horizontal addTripPlanMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 基本信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="', 
            $line = 18, $out += $escape(addTripPlan.lineProduct.name), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 19, $out += $escape(addTripPlan.lineProduct.id), $out += '" />  </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出团日期：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="startTime" id="" value="', 
            $line = 26, $out += $escape($helpers.dateFormat(addTripPlan.touristGroupList[0].startTime, "yyyy-MM-dd")), 
            $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">团队编号：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="" placeholder="系统自动生成" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>计划人数：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="planTouristCount" id="" value="" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车座数：</label> <div class="col-sm-2"> <input class="col-sm-12 bind-change" type="text" name="seatCount" id="" value="', 
            $line = 40, null != addTripPlan.bus && ($line = 40, $out += $escape(addTripPlan.bus.seatCount), 
            $line = 40), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车辆品牌：</label> <div class="col-sm-2"> <input class="col-sm-12 chooseBusCompany bind-change" type="text" name="needBusBrand" id="" value="', 
            $line = 44, null != addTripPlan.brand && ($line = 44, $out += $escape(addTripPlan.brand.companyName), 
            $line = 44), $out += '" /> <input type="hidden" name="busBrandId" value="', $line = 45, 
            null != addTripPlan.brand && ($line = 45, $out += $escape(addTripPlan.brand.id), 
            $line = 45), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车牌号：</label> <div class="col-sm-2"> <input class="col-sm-12 chooseBusLicenseNumber bind-change" type="text" name="LicenseNumber" id="" value="', 
            $line = 49, null != addTripPlan.bus && ($line = 49, $out += $escape(addTripPlan.bus.licenseNumber), 
            $line = 49), $out += '" /> <input type="hidden" name="busLicenseNumberId" value="', 
            $line = 50, null != addTripPlan.bus && ($line = 50, $out += $escape(addTripPlan.bus.id), 
            $line = 50), $out += '" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>导游：</label> <div class="col-sm-2"> <input class="col-sm-12 AddTPchooseGuide bind-change" type="text" name="AddTPchooseGuide" id="" value="', 
            $line = 56, null != addTripPlan.guide && ($line = 56, $out += $escape(addTripPlan.guide.realname), 
            $line = 56), $out += '" /> <input type="hidden" name="AddTPchooseGuideId" value="', 
            $line = 57, null != addTripPlan.guide && ($line = 57, $out += $escape(addTripPlan.guide.id), 
            $line = 57), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">导游电话：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="GmobileNumber" id="" value="', 
            $line = 61, null != addTripPlan.guide && ($line = 61, $out += $escape(addTripPlan.guide.mobileNumber), 
            $line = 61), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>司机：</label> <div class="col-sm-2"> <input class="col-sm-12 chooseDriver bind-change" type="text" name="driverName" id="" value="', 
            $line = 65, null != addTripPlan.driver && ($line = 65, $out += $escape(addTripPlan.driver.name), 
            $line = 65), $out += '" /> <input type="hidden" name="driverId" value="', $line = 66, 
            null != addTripPlan.driver && ($line = 66, $out += $escape(addTripPlan.driver.id), 
            $line = 66), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">司机电话：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="DmobileNumber" id="" value="', 
            $line = 70, null != addTripPlan.driver && ($line = 70, $out += $escape(addTripPlan.driver.mobileNumber), 
            $line = 70), $out += '" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">全陪：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="accompanyGuideName" id="" value="" /> </div> <label class="col-sm-1 control-label no-padding-right">全陪电话：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="accompanyGuideMobile" id="" value="" /> </div> <label class="col-sm-1 control-label no-padding-right">集合地点：</label> <div class="col-sm-2"> <input class="col-sm-12" type="text" name="setPlacePosition" id="" value="" /> </div> <label class="col-sm-1 control-label no-padding-right">集合时间：</label> <div class="col-sm-2"> <input class="form-control col-sm-12 dataTimePicker" type="text" name="setPlaceTime" value="" /> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 游客名单 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <button class="btn btn-sm btn-success addTouristGroup"> <i class="ace-icon fa fa-plus"></i> 添加游客小组 </button> </div> </div> <div class="form-group"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>小组</th> <th>线路产品</th> <th>住宿标准 </th> <th>自费</th> <th>来源</th> <th>联系人</th> <th>联系电话</th> <th>客源地</th> <th>年龄</th> <th>人数</th> <th>备注</th> <th>操作</th> </tr> </thead> <tbody class="addTripPlanTouristTbody">', 
            $line = 137, $each(addTripPlan.touristGroupList, function(touristGroupList) {
                $out += ' <tr data-entity-id="', $line = 138, $out += $escape(touristGroupList.id), 
                $out += '"> <td></td> <td>', $line = 142, $out += $escape(touristGroupList.lineProduct.name), 
                $out += "</td> <td>", $line = 143, $out += $escape(touristGroupList.hotelLevel), 
                $out += "</td> <td>", $line = 144, $out += $escape(touristGroupList.includeSelfPay), 
                $out += "</td> <td> ", $line = 147, null != touristGroupList.partnerAgency && ($out += " ", 
                $line = 148, $out += $escape(touristGroupList.partnerAgency.travelAgencyName), $out += " ", 
                $line = 149), $out += " </td> <td> ", $line = 152, null != touristGroupList.contactMember && ($out += " ", 
                $line = 153, $out += $escape(touristGroupList.contactMember.name), $out += " ", 
                $line = 154), $out += " </td> <td> ", $line = 157, null != touristGroupList.contactMember && ($out += " ", 
                $line = 158, $out += $escape(touristGroupList.contactMember.mobileNumber), $out += " ", 
                $line = 159), $out += " </td> <td>", $line = 161, $out += $escape(touristGroupList.areaData), 
                $out += "</td> <td>", $line = 162, $out += $escape(touristGroupList.ageData), $out += "</td> <td>", 
                $line = 163, $out += $escape(touristGroupList.adultCount), $out += "大人", $line = 163, 
                $out += $escape(touristGroupList.childCount), $out += "小孩</td> <td>", $line = 164, 
                $out += $escape(touristGroupList.remark), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <button data-entity-id="', 
                $line = 167, $out += $escape(touristGroupList.id), $out += '" class="btn btn-xs btn-success addTripPlanView"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </button> <button data-entity-id="', 
                $line = 170, $out += $escape(touristGroupList.id), $out += '" class="btn btn-xs btn-danger addTripPlanDelete"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </button> </div> </td> </tr>', 
                $line = 175;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 线路 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">类别：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="type" id="" value="', 
            $line = 204, $out += $escape(addTripPlan.lineProduct.type), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">应用范围：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="customerType" id="" value="', 
            $line = 208, null != addTripPlan.lineProduct && ($line = 208, 0 == addTripPlan.lineProduct.customerType ? ($out += "散客", 
            $line = 208) : 1 == addTripPlan.lineProduct.customerType && ($out += "团体", $line = 208), 
            $line = 208), $out += '" /> </div> <label class="col-sm-1 control-label no-padding-right">天数：</label> <div class="col-sm-2"> <input class="col-sm-12" readonly="readonly" type="text" name="days" id="" value="', 
            $line = 212, $out += $escape(addTripPlan.lineProduct.days), $out += '" /> </div> </div> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 日程 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>日期</th> <th>含餐情况</th> <th>酒店星级</th> <th>简要行程</th> </tr> </thead> <tbody>', 
            $line = 248, $each(addTripPlan.lineProductDayList, function(lineProductDay) {
                $out += ' <tr data-travelLine-Id="', $line = 249, $out += $escape(lineProductDay.id), 
                $out += '"> <td>第', $line = 250, $out += $escape(lineProductDay.whichDay), $out += "天</td> <td>", 
                $line = 251, $out += $escape(lineProductDay.repastDetail), $out += "</td> <td> ", 
                $line = 253, 1 == lineProductDay.hotelLevel ? ($out += " 三星以下 ", $line = 255) : 2 == lineProductDay.hotelLevel ? ($out += " 三星 ", 
                $line = 257) : 3 == lineProductDay.hotelLevel ? ($out += " 准四星 ", $line = 259) : 4 == lineProductDay.hotelLevel ? ($out += " 四星 ", 
                $line = 261) : 5 == lineProductDay.hotelLevel ? ($out += " 准五星 ", $line = 263) : 6 == lineProductDay.hotelLevel ? ($out += " 五星 ", 
                $line = 265) : 7 == lineProductDay.hotelLevel && ($out += " 五星以上 ", $line = 267), 
                $out += ' </td> <td class="col-xs-6">', $line = 269, $out += $escape(lineProductDay.title), 
                $out += "</td> </tr>", $line = 270;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly">', 
            $line = 283, $out += $escape(addTripPlan.lineProduct.includeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用不含:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly">', 
            $line = 289, $out += $escape(addTripPlan.lineProduct.excludeFee), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly">', 
            $line = 295, $out += $escape(addTripPlan.lineProduct.lineFeature), $out += '</textarea> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <textarea class="form-control" class="col-sm-12" readonly="readonly">', 
            $line = 301, $out += $escape(addTripPlan.lineProduct.lineNotice), $out += '</textarea> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-danger btn-cancelTripPlan"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-primary btn-saveTripPlan"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="addTripPlan clearfix">      \r\n	<div class="col-xs-12 addTripPlanMain">\r\n		<form class="form-horizontal addTripPlanMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								基本信息\r\n							</h5>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="{{addTripPlan.lineProduct.name}}" />\r\n										<input type="hidden" name="lineProductId" value="{{addTripPlan.lineProduct.id}}" />\r\n										<!-- <button class="col-sm-4 btn btn-sm btn-primary btn-search" style="padding-bottom:5px;">\r\n											<i class="ace-icon fa fa-search "></i>搜索  \r\n										</button> -->\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出团日期：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="startTime" id="" value="{{addTripPlan.touristGroupList[0].startTime | dateFormat: \'yyyy-MM-dd\'}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">团队编号：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="" id="" value="" placeholder="系统自动生成" />\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>计划人数：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="planTouristCount" id="" value="" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车座数：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 bind-change" type="text" name="seatCount" id="" value="{{if addTripPlan.bus != null}}{{addTripPlan.bus.seatCount}}{{/if}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车辆品牌：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 chooseBusCompany bind-change" type="text" name="needBusBrand" id="" value="{{if addTripPlan.brand != null}}{{addTripPlan.brand.companyName}}{{/if}}" />\r\n										<input type="hidden" name="busBrandId" value="{{if addTripPlan.brand != null}}{{addTripPlan.brand.id}}{{/if}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>车牌号：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 chooseBusLicenseNumber bind-change" type="text" name="LicenseNumber" id="" value="{{if addTripPlan.bus != null}}{{addTripPlan.bus.licenseNumber}}{{/if}}" />\r\n										<input type="hidden" name="busLicenseNumberId" value="{{if addTripPlan.bus != null}}{{addTripPlan.bus.id}}{{/if}}" />\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>导游：</label>\r\n									<div class="col-sm-2">  \r\n										<input class="col-sm-12 AddTPchooseGuide bind-change" type="text" name="AddTPchooseGuide" id="" value="{{if addTripPlan.guide != null}}{{addTripPlan.guide.realname}}{{/if}}" />\r\n										<input type="hidden" name="AddTPchooseGuideId" value="{{if addTripPlan.guide != null}}{{addTripPlan.guide.id}}{{/if}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">导游电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="GmobileNumber" id="" value="{{if addTripPlan.guide != null}}{{addTripPlan.guide.mobileNumber}}{{/if}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>司机：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12 chooseDriver bind-change" type="text" name="driverName" id="" value="{{if addTripPlan.driver != null}}{{addTripPlan.driver.name}}{{/if}}" />\r\n										<input type="hidden" name="driverId" value="{{if addTripPlan.driver != null}}{{addTripPlan.driver.id}}{{/if}}" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">司机电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" readonly="readonly" type="text" name="DmobileNumber" id="" value="{{if addTripPlan.driver != null}}{{addTripPlan.driver.mobileNumber}}{{/if}}" />\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">全陪：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="accompanyGuideName" id="" value="" />\r\n									</div>							\r\n									<label class="col-sm-1 control-label no-padding-right">全陪电话：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="accompanyGuideMobile" id="" value="" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合地点：</label>\r\n									<div class="col-sm-2">\r\n										<input class="col-sm-12" type="text" name="setPlacePosition" id="" value="" />\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合时间：</label>\r\n									<div class="col-sm-2">\r\n										<input class="form-control col-sm-12 dataTimePicker" type="text" name="setPlaceTime" value="" />\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								游客名单\r\n							</h5>\r\n						</div>\r\n	\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<button class="btn btn-sm btn-success addTouristGroup">\r\n											<i class="ace-icon fa fa-plus"></i>\r\n											添加游客小组\r\n										</button>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<table class="table table-striped table-bordered table-hover"> \r\n											<thead>\r\n												<tr>\r\n													<th>小组</th>\r\n													<th>线路产品</th>    \r\n													<th>住宿标准 </th>\r\n													<th>自费</th>   \r\n													<th>来源</th>  \r\n													<th>联系人</th>\r\n													<th>联系电话</th>\r\n													<th>客源地</th>\r\n													<th>年龄</th>\r\n													<th>人数</th>\r\n													<th>备注</th>\r\n													<th>操作</th>\r\n												</tr>\r\n											</thead>\r\n											<tbody class="addTripPlanTouristTbody">{{each addTripPlan.touristGroupList as touristGroupList}}\r\n												<tr data-entity-id="{{touristGroupList.id}}">\r\n													<td></td>\r\n\r\n\r\n												    <td>{{touristGroupList.lineProduct.name}}</td>    \r\n													<td>{{touristGroupList.hotelLevel}}</td>\r\n													<td>{{touristGroupList.includeSelfPay}}</td>    \r\n\r\n													<td>\r\n														{{if touristGroupList.partnerAgency != null}}\r\n															{{touristGroupList.partnerAgency.travelAgencyName}}\r\n														{{/if}}\r\n													</td>\r\n													<td>\r\n														{{if touristGroupList.contactMember != null}}\r\n															{{touristGroupList.contactMember.name}}\r\n														{{/if}}\r\n													</td>\r\n													<td>\r\n														{{if touristGroupList.contactMember != null}}\r\n															{{touristGroupList.contactMember.mobileNumber}}\r\n														{{/if}}\r\n													</td>\r\n													<td>{{touristGroupList.areaData}}</td>\r\n													<td>{{touristGroupList.ageData}}</td>\r\n													<td>{{touristGroupList.adultCount}}大人{{touristGroupList.childCount}}小孩</td>\r\n													<td>{{touristGroupList.remark}}</td>\r\n													<td>\r\n													<div class="hidden-sm hidden-xs btn-group">\r\n														<button data-entity-id="{{touristGroupList.id}}" class="btn btn-xs btn-success addTripPlanView">\r\n															<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n														</button>\r\n														<button data-entity-id="{{touristGroupList.id}}" class="btn btn-xs btn-danger addTripPlanDelete">\r\n															<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n														</button>\r\n													</div>\r\n													</td>\r\n												</tr>{{/each}}\r\n											</tbody>\r\n										</table>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								线路\r\n							</h5>\r\n						</div>\r\n	\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<label class="col-sm-1 control-label no-padding-right">类别：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="type" id="" value="{{addTripPlan.lineProduct.type}}" />\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">应用范围：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="customerType" id="" value="{{if addTripPlan.lineProduct != null}}{{if addTripPlan.lineProduct.customerType == 0}}散客{{else if addTripPlan.lineProduct.customerType == 1}}团体{{/if}}{{/if}}" />\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">天数：</label>\r\n											<div class="col-sm-2">\r\n												<input class="col-sm-12" readonly="readonly" type="text" name="days" id="" value="{{addTripPlan.lineProduct.days}}" />\r\n											</div>				\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								日程\r\n							</h5>\r\n						</div>\r\n	\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<table class="table table-striped table-bordered table-hover">\r\n												<thead>\r\n													<tr>\r\n														<th>日期</th>\r\n														<th>含餐情况</th>\r\n														<th>酒店星级</th>\r\n														<th>简要行程</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>{{each addTripPlan.lineProductDayList as lineProductDay}}\r\n													<tr data-travelLine-Id="{{lineProductDay.id}}">\r\n														<td>第{{lineProductDay.whichDay}}天</td>\r\n														<td>{{lineProductDay.repastDetail}}</td>\r\n														<td>\r\n															{{if lineProductDay.hotelLevel==1}}\r\n																三星以下\r\n															{{else if lineProductDay.hotelLevel==2}}\r\n																三星\r\n															{{else if lineProductDay.hotelLevel==3}}\r\n																准四星\r\n															{{else if lineProductDay.hotelLevel==4}}\r\n																四星\r\n															{{else if lineProductDay.hotelLevel==5}}\r\n																准五星\r\n															{{else if lineProductDay.hotelLevel==6}}\r\n																五星\r\n															{{else if lineProductDay.hotelLevel==7}}\r\n																五星以上\r\n															{{/if}}\r\n														</td>\r\n														<td class="col-xs-6">{{lineProductDay.title}}</td>\r\n													</tr>{{/each}}\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">费用包含:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly">{{addTripPlan.lineProduct.includeFee}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">费用不含:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly">{{addTripPlan.lineProduct.excludeFee}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">行程特色:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly">{{addTripPlan.lineProduct.lineFeature}}</textarea>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">行程须知:</label>\r\n									<div class="col-sm-8">\r\n										<textarea class="form-control" class="col-sm-12" readonly="readonly">{{addTripPlan.lineProduct.lineNotice}}</textarea>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group" style="text-align: center;">\r\n				<button class="btn btn-danger btn-cancelTripPlan">\r\n					<i class="ace-icon fa fa-times"></i>\r\n					取消\r\n				</button>\r\n				<button class="btn btn-primary btn-saveTripPlan">\r\n					<i class="ace-icon fa fa-check"></i>\r\n					保存\r\n				</button>\r\n			</div>\r\n		</form>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});