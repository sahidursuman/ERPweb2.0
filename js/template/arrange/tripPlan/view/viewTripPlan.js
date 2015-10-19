/*TMODJS:{"debug":true,"version":52,"md5":"962a510f193e5dabfb8c2799eae66a67"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/viewTripPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, lineProduct = $data.lineProduct, tripPlan = $data.tripPlan, bus = $data.bus, guide = $data.guide, driver = $data.driver, $each = $utils.$each, touristGroupList = $data.touristGroupList, lineProductDayList = ($data.touristGroup, 
            $data.$index, $data.lineProductDayList), $out = ($data.dayList, "");
            return $out += '<div class="viewTripPlan"> <div class="col-xs-12 newAddTripPlanMain"> <form class="form-horizontal newAddTripPlanMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">基本信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">线路名称：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 16, $out += $escape(lineProduct.name), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">出团日期：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 20, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">团队编号：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 24, $out += $escape(tripPlan.tripNumber), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>计划人数：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 30, $out += $escape(tripPlan.planTouristCount), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">车座数：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 34, $out += $escape(bus.seatCount), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>车辆品牌：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 38, $out += $escape(bus.brand), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>车牌号：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 42, $out += $escape(bus.licenseNumber), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>导游：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 48, $out += $escape(guide.realname), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">导游电话：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 52, $out += $escape(guide.mobileNumber), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>司机：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 56, $out += $escape(driver.name), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">司机电话：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 60, $out += $escape(driver.mobileNumber), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">全陪：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 66, $out += $escape(tripPlan.accompanyGuideName), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">全陪电话：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 70, $out += $escape(tripPlan.accompanyGuideMobile), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">集合地点：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 74, $out += $escape(tripPlan.setPlacePosition), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">集合时间：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 78, $out += $escape(tripPlan.setPlaceTime), $out += '</label> </div> </div> </div> </div> </div> </div> </div> </form> <div class="form-horizontal col-sm-12 checkbox"> <div class="pull-left no-padding-right"> <label class="control-label no-padding-right">确认发团后游客短信设置:</label> 定时发送 <label> <input type="radio" checked="checked" class="ace buyInsurance-status" disabled="" value="', 
            $line = 95, $out += $escape(tripPlan.executeTimeType), $out += '" name="executeTimeType"> <span class="lbl"> </span> </label> 立即发送 <label> <input type="radio" class="ace buyInsurance-status" disabled="" value="', 
            $line = 101, $out += $escape(tripPlan.executeTimeType), $out += '" name="executeTimeType"> <span class="lbl"> </span> </label> </div> <div class="col-sm-2 newAddTripTimer"> <input class="form-control col-sm-4 datetimepicker" disabled="" type="text" name="executeTime" value="', 
            $line = 107, $out += $escape(tripPlan.executeTime), $out += '" /> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">游客名单</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">小组</th> <th class="th-border">来源</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">备注</th> <th class="th-border">查看成员</th> </tr> </thead> <tbody class="addTripPlanTouristTbody">', 
            $line = 148, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 149, $out += $escape(touristGroup.id), 
                $out += '"> <td></td> <td>', $line = 151, null != touristGroup.partnerAgency && ($line = 151, 
                $out += $escape(touristGroup.partnerAgency.travelAgencyName), $line = 151), $out += "</td> <td>", 
                $line = 152, null != touristGroup.contactMember && ($line = 152, $out += $escape(touristGroup.contactMember.name), 
                $line = 152), $out += "</td> <td>", $line = 153, null != touristGroup.contactMember && ($line = 153, 
                $out += $escape(touristGroup.contactMember.mobileNumber), $line = 153), $out += "</td> <td>", 
                $line = 154, $out += $escape(touristGroup.areaData), $out += "</td> <td>", $line = 155, 
                $out += $escape(touristGroup.ageData), $out += "</td> <td>", $line = 156, $out += $escape(touristGroup.adultCount + touristGroup.childCount), 
                $out += "</td> <td>", $line = 157, $out += $escape(touristGroup.remark), $out += '</td> <td> <a data-entity-id="', 
                $line = 159, $out += $escape(touristGroup.id), $out += '" class="cursor viewTripPlanView"> 查看 </a> </td> </tr>', 
                $line = 163;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">3</span> <label class="title-size middle">线路</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">类别：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 189, $out += $escape(lineProduct.type), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">应用范围：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 193, 0 == lineProduct.customerType ? ($out += "散客", $line = 193) : 1 == lineProduct.customerType && ($out += "团体", 
            $line = 193), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">天数：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 197, $out += $escape(lineProduct.days), $out += '</label> </div> </div> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">4</span> <label class="middle title-size">日程</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">含餐情况</th> <th class="th-border">酒店星级</th> <th class="th-border">简要行程</th> </tr> </thead> <tbody>', 
            $line = 230, $each(lineProductDayList, function(dayList) {
                $out += ' <tr data-entity-id="', $line = 231, $out += $escape(dayList.id), $out += '"> <td>第', 
                $line = 232, $out += $escape(dayList.whichDay), $out += "天</td> <td>", $line = 233, 
                $out += $escape(dayList.repastDetail), $out += "</td> <td> ", $line = 235, 1 == dayList.hotelLevel ? ($out += " 三星以下 ", 
                $line = 237) : 2 == dayList.hotelLevel ? ($out += " 三星 ", $line = 239) : 3 == dayList.hotelLevel ? ($out += " 准四星 ", 
                $line = 241) : 4 == dayList.hotelLevel ? ($out += " 四星 ", $line = 243) : 5 == dayList.hotelLevel ? ($out += " 准五星 ", 
                $line = 245) : 6 == dayList.hotelLevel ? ($out += " 五星 ", $line = 247) : 7 == dayList.hotelLevel && ($out += " 五星以上 ", 
                $line = 249), $out += ' </td> <td class="col-xs-6">', $line = 251, $out += $escape(dayList.title), 
                $out += "</td> </tr>", $line = 252;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 265, $out += $escape(lineProduct.includeFee), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用不含:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 271, $out += $escape(lineProduct.excludeFee), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 277, $out += $escape(lineProduct.lineFeature), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 283, $out += $escape(lineProduct.lineNotice), $out += "</label> </div> </div> </div> </div> </div> </div> </div> </form> </div> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="viewTripPlan">\r\n	<div class="col-xs-12 newAddTripPlanMain">\r\n		<form class="form-horizontal newAddTripPlanMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<span class="badge badge-primary">1</span>\r\n								<label class="middle title-size">基本信息</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">线路名称：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{lineProduct.name}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">出团日期：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">团队编号：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.tripNumber}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>计划人数：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.planTouristCount}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">车座数：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{bus.seatCount}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>车辆品牌：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{bus.brand}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>车牌号：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{bus.licenseNumber}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>导游：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{guide.realname}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">导游电话：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{guide.mobileNumber}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"> <span class="necessary">*</span>司机：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{driver.name}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">司机电话：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{driver.mobileNumber}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">全陪：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.accompanyGuideName}}</label>\r\n									</div>							\r\n									<label class="col-sm-1 control-label no-padding-right">全陪电话：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.accompanyGuideMobile}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合地点：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.setPlacePosition}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合时间：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.setPlaceTime}}</label>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n\r\n\r\n\r\n		<div class="form-horizontal col-sm-12 checkbox">\r\n			<div class="pull-left  no-padding-right">\r\n				<label class="control-label no-padding-right">确认发团后游客短信设置:</label>\r\n				定时发送\r\n				<label>\r\n					<input type="radio"  checked="checked" class="ace buyInsurance-status" disabled="" value="{{tripPlan.executeTimeType}}" name="executeTimeType">\r\n					<span class="lbl">\r\n					</span>\r\n				</label>\r\n				立即发送\r\n				<label>\r\n					<input type="radio" class="ace buyInsurance-status" disabled="" value="{{tripPlan.executeTimeType}}" name="executeTimeType">\r\n					<span class="lbl">\r\n					</span>\r\n				</label>\r\n			</div>\r\n			<div class="col-sm-2 newAddTripTimer">\r\n				<input class="form-control col-sm-4 datetimepicker" disabled="" type="text" name="executeTime" value="{{tripPlan.executeTime}}" />\r\n			</div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<span class="badge badge-primary">2</span>\r\n								<label class="middle title-size">游客名单</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<table class="table table-striped table-bordered table-hover"> \r\n											<thead>\r\n												<tr>\r\n													<th class="th-border">小组</th>\r\n													<th class="th-border">来源</th>\r\n													<th class="th-border">联系人</th>\r\n													<th class="th-border">联系电话</th>\r\n													<th class="th-border">客源地</th>\r\n													<th class="th-border">年龄</th>\r\n													<th class="th-border">人数</th>\r\n													<th class="th-border">备注</th>\r\n													<th class="th-border">查看成员</th>\r\n												</tr>\r\n											</thead>\r\n											<tbody class="addTripPlanTouristTbody">{{each touristGroupList as touristGroup}}\r\n												<tr data-entity-id="{{touristGroup.id}}">\r\n													<td></td>\r\n													<td>{{if touristGroup.partnerAgency != null}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n													<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n													<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n													<td>{{touristGroup.areaData}}</td>\r\n													<td>{{touristGroup.ageData}}</td>\r\n													<td>{{touristGroup.adultCount + touristGroup.childCount}}</td>\r\n													<td>{{touristGroup.remark}}</td>\r\n													<td>\r\n														<a data-entity-id="{{touristGroup.id}}" class="cursor viewTripPlanView">\r\n															查看\r\n														</a>\r\n													</td>\r\n												</tr>{{/each}}\r\n											</tbody>\r\n										</table>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<span class="badge badge-primary">3</span>\r\n								<label class="title-size middle">线路</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<label class="col-sm-1 control-label no-padding-right">类别：</label>\r\n											<div class="col-sm-2">\r\n												<label class="control-label">{{lineProduct.type}}</label>\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">应用范围：</label>\r\n											<div class="col-sm-2">\r\n												<label class="control-label">{{if lineProduct.customerType == 0}}散客{{else if lineProduct.customerType == 1}}团体{{/if}}</label>\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">天数：</label>\r\n											<div class="col-sm-2">\r\n												<label class="control-label">{{lineProduct.days}}</label>\r\n											</div>				\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<span class="badge badge-primary">4</span>\r\n								<label class="middle title-size">日程</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<table class="table table-striped table-bordered table-hover">\r\n												<thead>\r\n													<tr>\r\n														<th class="th-border">日期</th>\r\n														<th class="th-border">含餐情况</th>\r\n														<th class="th-border">酒店星级</th>\r\n														<th class="th-border">简要行程</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>{{each lineProductDayList as dayList}}\r\n													<tr data-entity-id="{{dayList.id}}">\r\n														<td>第{{dayList.whichDay}}天</td>\r\n														<td>{{dayList.repastDetail}}</td>\r\n														<td>\r\n															{{if dayList.hotelLevel == 1}}\r\n															三星以下\r\n															{{else if dayList.hotelLevel == 2}}\r\n															三星\r\n															{{else if dayList.hotelLevel == 3}}\r\n															准四星\r\n															{{else if dayList.hotelLevel == 4}}\r\n															四星\r\n															{{else if dayList.hotelLevel == 5}}\r\n															准五星\r\n															{{else if dayList.hotelLevel == 6}}\r\n															五星\r\n															{{else if dayList.hotelLevel == 7}}\r\n															五星以上\r\n															{{/if}}\r\n														</td>\r\n														<td class="col-xs-6">{{dayList.title}}</td>\r\n													</tr>{{/each}}\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">费用包含:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.includeFee}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">费用不含:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.excludeFee}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">行程特色:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.lineFeature}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">行程须知:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.lineNotice}}</label>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});