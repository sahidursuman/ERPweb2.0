/*TMODJS:{"debug":true,"version":201,"md5":"53dfa64e9e54e3fd272f90bea9164a36"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/viewTripPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, lineProduct = $data.lineProduct, tripPlan = $data.tripPlan, bus = $data.bus, busCompant = $data.busCompant, guide = $data.guide, driver = $data.driver, $each = $utils.$each, touristGroupList = $data.touristGroupList, lineProductDayList = ($data.touristGroup, 
            $data.$index, $data.lineProductDayList), $out = ($data.dayList, "");
            return $out += '<div class="viewTripPlan"> <div class="col-xs-12 newAddTripPlanMain"> <form class="form-horizontal newAddTripPlanMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <h5 class=""> <label class="middle title-size">基本信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%">  <tr> <td class="style-myself CheckPlan">线路名称</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 13, $out += $escape(lineProduct.name), $out += '</td> <td class="style-myself CheckPlan">出团日期</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 15, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '</td> <td class="style-myself CheckPlan">计划人数</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 17, $out += $escape(tripPlan.planTouristCount), $out += '</td> <td class="style-myself CheckPlan">团队编号</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 19, $out += $escape(tripPlan.tripNumber), $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">车座数</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 24, $out += $escape(bus.seatCount), $out += '</td> <td class="style-myself CheckPlan">车辆品牌</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 26, $out += $escape(bus.brand), $out += '</td> <td class="style-myself CheckPlan">车辆号</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 28, $out += $escape(bus.licenseNumber), $out += '</td> <td class="style-myself CheckPlan">所属车队</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 30, $out += $escape(busCompant.companyName), $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">导游</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 34, $out += $escape(guide.realname), $out += '</td> <td class="style-myself CheckPlan">导游电话</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 36, $out += $escape(guide.mobileNumber), $out += '</td> <td class="style-myself CheckPlan">司机</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 38, $out += $escape(driver.name), $out += '</td> <td class="style-myself CheckPlan">司机电话</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 40, $out += $escape(driver.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">全陪</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 44, $out += $escape(tripPlan.accompanyGuideName), $out += '</td> <td class="style-myself CheckPlan">全陪电话</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 46, $out += $escape(tripPlan.accompanyGuideMobile), $out += '</td> <td class="style-myself CheckPlan">集合地点</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 48, $out += $escape(tripPlan.setPlacePosition), $out += '</td> <td class="style-myself CheckPlan">集合时间</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 50, $out += $escape(tripPlan.setPlaceTime), $out += '</td> </tr> </table> </form> <div class="form-group search-area clearfix" style="margin-top:13px;"> <label class="pull-left control-label no-padding-right" style="margin-left:5px;">备注：</label> <div class="col-sm-8"> <input class="col-sm-8" type="text" name="remark" id="" value="" maxlength="100" /> </div> </div> <div class="form-horizontal col-sm-12 checkbox"> <div class="pull-left no-padding-right"> <label class="control-label no-padding-right">确认发团后游客短信设置:</label> ', 
            $line = 66, 1 == tripPlan.isSendTouristMessage ? ($out += ' <label style="padding-left:0px;" class="executeTimeType1"> 立即发送 </label> ', 
            $line = 70) : 0 == tripPlan.isSendTouristMessage && ($out += ' <label style="padding-left:0px;" class="executeTimeType2"> 定时发送于', 
            $line = 72, $out += $escape(tripPlan.executeTime), $out += " </label> ", $line = 74), 
            $out += ' </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">游客名单</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">小组</th> <th class="th-border">外联销售</th> <th class="th-border">线路产品</th> <th class="th-border">来源</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">现收团款</th> <th class="th-border">住宿标准</th> <th class="th-border">包含自费</th> <th class="th-border">备注</th> <th class="th-border">查看成员</th> </tr> </thead> <tbody class="T-tourist-list"> ', 
            $line = 109, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr data-id="', $line = 110, $out += $escape(touristGroup.id), $out += '"> <td></td> <td>', 
                $line = 112, $out += $escape(touristGroup.creatorName), $out += "</td> <td>", $line = 113, 
                $out += $escape(touristGroup.lineProduct.name), $out += "</td> <td>", $line = 114, 
                null != touristGroup.partnerAgency && ($line = 114, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
                $line = 114), $out += "</td> <td>", $line = 115, null != touristGroup.contactMember && ($line = 115, 
                $out += $escape(touristGroup.contactMember.name), $line = 115), $out += "</td> <td>", 
                $line = 116, null != touristGroup.contactMember && ($line = 116, $out += $escape(touristGroup.contactMember.mobileNumber), 
                $line = 116), $out += "</td> <td>", $line = 117, $out += $escape(touristGroup.areaData), 
                $out += "</td> <td>", $line = 118, $out += $escape(touristGroup.ageData), $out += "</td> <td>", 
                $line = 119, $out += $escape(touristGroup.adultCount + touristGroup.childCount), 
                $out += "</td> <td>", $line = 120, $out += $escape(touristGroup.currentNeedPayMoney), 
                $out += "</td> <td>", $line = 121, 0 == touristGroup.hotelLevel ? ($out += " 未选择 ", 
                $line = 123) : 1 == touristGroup.hotelLevel ? ($out += " 三星以下 ", $line = 125) : 2 == touristGroup.hotelLevel ? ($out += " 三星 ", 
                $line = 127) : 3 == touristGroup.hotelLevel ? ($out += " 准四星 ", $line = 129) : 4 == touristGroup.hotelLevel ? ($out += " 四星 ", 
                $line = 131) : 5 == touristGroup.hotelLevel ? ($out += " 准五星 ", $line = 133) : 6 == touristGroup.hotelLevel ? ($out += " 五星 ", 
                $line = 135) : 7 == touristGroup.hotelLevel && ($out += " 五星以上 ", $line = 137), 
                $out += " </td> <td>", $line = 139, $out += $escape(touristGroup.includeSelfPay), 
                $out += "</td> <td>", $line = 140, $out += $escape(touristGroup.remark), $out += '</td> <td> <a class="cursor T-touristView"> 查看 </a> </td> </tr> ', 
                $line = 147;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="title-size middle">线路</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">类别：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 172, $out += $escape(lineProduct.type), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">应用范围：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 176, 0 == lineProduct.customerType ? ($out += "散客", $line = 176) : 1 == lineProduct.customerType && ($out += "团体", 
            $line = 176), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">天数：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 180, $out += $escape(lineProduct.days), $out += '</label> </div> </div> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">日程</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">含餐情况</th> <th class="th-border">酒店星级</th> <th class="th-border">简要行程</th> </tr> </thead> <tbody>', 
            $line = 212, $each(lineProductDayList, function(dayList) {
                $out += ' <tr data-entity-id="', $line = 213, $out += $escape(dayList.id), $out += '"> <td>第', 
                $line = 214, $out += $escape(dayList.whichDay), $out += "天</td> <td>", $line = 215, 
                $out += $escape(dayList.repastDetail), $out += "</td> <td> ", $line = 217, 1 == dayList.hotelLevel ? ($out += " 三星以下 ", 
                $line = 219) : 2 == dayList.hotelLevel ? ($out += " 三星 ", $line = 221) : 3 == dayList.hotelLevel ? ($out += " 准四星 ", 
                $line = 223) : 4 == dayList.hotelLevel ? ($out += " 四星 ", $line = 225) : 5 == dayList.hotelLevel ? ($out += " 准五星 ", 
                $line = 227) : 6 == dayList.hotelLevel ? ($out += " 五星 ", $line = 229) : 7 == dayList.hotelLevel && ($out += " 五星以上 ", 
                $line = 231), $out += ' </td> <td class="col-xs-6">', $line = 233, $out += $escape(dayList.title), 
                $out += "</td> </tr>", $line = 234;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 247, $out += $escape(lineProduct.includeFee), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用不含:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 253, $out += $escape(lineProduct.excludeFee), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 259, $out += $escape(lineProduct.lineFeature), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 265, $out += $escape(lineProduct.lineNotice), $out += "</label> </div> </div> </div> </div> </div> </div> </div> </form> </div> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="viewTripPlan">\r\n	<div class="col-xs-12 newAddTripPlanMain">\r\n		<form class="form-horizontal newAddTripPlanMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<h5 class="">\r\n					<label class="middle title-size">基本信息</label>\r\n							</h5>\r\n			<table class="whereQ whereTwo" style="width: 100%">\r\n				<!-- <tr>\r\n					<td colspan="8" class="HeadManage" style="text-align: left">基本信息</td>\r\n				</tr> -->\r\n				<tr>\r\n					<td class="style-myself CheckPlan">线路名称</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{lineProduct.name}}</td>\r\n					<td class="style-myself CheckPlan">出团日期</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td class="style-myself CheckPlan">计划人数</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.planTouristCount}}</td>\r\n					<td class="style-myself CheckPlan">团队编号</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{tripPlan.tripNumber}}</td>\r\n\r\n				</tr>\r\n				<tr>\r\n					<td class="style-myself CheckPlan">车座数</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{bus.seatCount}}</td>\r\n					<td class="style-myself CheckPlan">车辆品牌</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{bus.brand}}</td>\r\n					<td class="style-myself CheckPlan">车辆号</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{bus.licenseNumber}}</td>\r\n					<td class="style-myself CheckPlan">所属车队</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{busCompant.companyName}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="style-myself CheckPlan">导游</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{guide.realname}}</td>\r\n					<td class="style-myself CheckPlan">导游电话</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{guide.mobileNumber}}</td>\r\n					<td class="style-myself CheckPlan">司机</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{driver.name}}</td>\r\n					<td class="style-myself CheckPlan">司机电话</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{driver.mobileNumber}}</td>\r\n				</tr>\r\n				<tr> \r\n					<td class="style-myself CheckPlan">全陪</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.accompanyGuideName}}</td>\r\n					<td class="style-myself CheckPlan">全陪电话</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.accompanyGuideMobile}}</td>\r\n					<td class="style-myself CheckPlan">集合地点</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.setPlacePosition}}</td>\r\n					<td class="style-myself CheckPlan">集合时间</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.setPlaceTime}}</td>\r\n				</tr>\r\n			</table>\r\n		</form>\r\n\r\n\r\n		<div class="form-group search-area clearfix" style="margin-top:13px;">\r\n			<label class="pull-left control-label no-padding-right" style="margin-left:5px;">备注：</label>\r\n			<div class="col-sm-8">\r\n				<input class="col-sm-8" type="text" name="remark" id="" value="" maxlength="100" />\r\n			</div>							\r\n		</div>\r\n\r\n		<div class="form-horizontal col-sm-12 checkbox">\r\n			<div class="pull-left  no-padding-right">\r\n				<label class="control-label no-padding-right">确认发团后游客短信设置:</label>\r\n				{{if tripPlan.isSendTouristMessage == 1}}\r\n					<label style="padding-left:0px;" class="executeTimeType1">\r\n						立即发送\r\n					</label>\r\n				{{else if tripPlan.isSendTouristMessage == 0}}\r\n					<label style="padding-left:0px;" class="executeTimeType2">\r\n						定时发送于{{tripPlan.executeTime}}\r\n					</label>\r\n				{{/if}}\r\n			</div>\r\n        </div>\r\n	\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<label class="middle title-size">游客名单</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<table class="table table-striped table-bordered table-hover"> \r\n											<thead>\r\n												<tr>\r\n													<th class="th-border">小组</th>\r\n													<th class="th-border">外联销售</th>\r\n													<th class="th-border">线路产品</th>\r\n													<th class="th-border">来源</th>\r\n													<th class="th-border">联系人</th>\r\n													<th class="th-border">联系电话</th>\r\n													<th class="th-border">客源地</th>\r\n													<th class="th-border">年龄</th>\r\n													<th class="th-border">人数</th>\r\n													<th class="th-border">现收团款</th>\r\n													<th class="th-border">住宿标准</th>\r\n													<th class="th-border">包含自费</th>\r\n													<th class="th-border">备注</th>\r\n													<th class="th-border">查看成员</th>\r\n												</tr>\r\n											</thead>\r\n											<tbody class="T-tourist-list">\r\n												{{each touristGroupList as touristGroup}}\r\n													<tr data-id="{{touristGroup.id}}">\r\n														<td></td>\r\n														<td>{{touristGroup.creatorName}}</td>\r\n														<td>{{touristGroup.lineProduct.name}}</td>\r\n														<td>{{if touristGroup.partnerAgency != null}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n														<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n														<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n														<td>{{touristGroup.areaData}}</td>\r\n														<td>{{touristGroup.ageData}}</td>\r\n														<td>{{touristGroup.adultCount + touristGroup.childCount}}</td>\r\n														<td>{{touristGroup.currentNeedPayMoney}}</td>\r\n														<td>{{if touristGroup.hotelLevel==0}}\r\n														   未选择 \r\n														   {{else if touristGroup.hotelLevel==1}}\r\n														   三星以下\r\n														   {{else if touristGroup.hotelLevel==2 }}\r\n														   三星\r\n														   {{else if touristGroup.hotelLevel==3 }}\r\n														   准四星\r\n														   {{else if touristGroup.hotelLevel==4 }}\r\n														   四星\r\n														   {{else if touristGroup.hotelLevel==5 }}\r\n														   准五星\r\n														   {{else if touristGroup.hotelLevel==6 }}\r\n														   五星\r\n														   {{else if touristGroup.hotelLevel==7 }}\r\n														   五星以上\r\n														   {{/if}}\r\n													   </td>\r\n														<td>{{touristGroup.includeSelfPay}}</td>\r\n														<td>{{touristGroup.remark}}</td>\r\n														<td>\r\n															<a class="cursor T-touristView">\r\n																查看\r\n															</a>\r\n														</td>\r\n													</tr>\r\n												{{/each}}\r\n											</tbody>\r\n										</table>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<label class="title-size middle">线路</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<label class="col-sm-1 control-label no-padding-right">类别：</label>\r\n											<div class="col-sm-2">\r\n												<label class="control-label">{{lineProduct.type}}</label>\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">应用范围：</label>\r\n											<div class="col-sm-2">\r\n												<label class="control-label">{{if lineProduct.customerType == 0}}散客{{else if lineProduct.customerType == 1}}团体{{/if}}</label>\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">天数：</label>\r\n											<div class="col-sm-2">\r\n												<label class="control-label">{{lineProduct.days}}</label>\r\n											</div>				\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<label class="middle title-size">日程</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<table class="table table-striped table-bordered table-hover">\r\n												<thead>\r\n													<tr>\r\n														<th class="th-border">日期</th>\r\n														<th class="th-border">含餐情况</th>\r\n														<th class="th-border">酒店星级</th>\r\n														<th class="th-border">简要行程</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>{{each lineProductDayList as dayList}}\r\n													<tr data-entity-id="{{dayList.id}}">\r\n														<td>第{{dayList.whichDay}}天</td>\r\n														<td>{{dayList.repastDetail}}</td>\r\n														<td>\r\n															{{if dayList.hotelLevel == 1}}\r\n															三星以下\r\n															{{else if dayList.hotelLevel == 2}}\r\n															三星\r\n															{{else if dayList.hotelLevel == 3}}\r\n															准四星\r\n															{{else if dayList.hotelLevel == 4}}\r\n															四星\r\n															{{else if dayList.hotelLevel == 5}}\r\n															准五星\r\n															{{else if dayList.hotelLevel == 6}}\r\n															五星\r\n															{{else if dayList.hotelLevel == 7}}\r\n															五星以上\r\n															{{/if}}\r\n														</td>\r\n														<td class="col-xs-6">{{dayList.title}}</td>\r\n													</tr>{{/each}}\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">费用包含:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.includeFee}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">费用不含:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.excludeFee}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">行程特色:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.lineFeature}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">行程须知:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.lineNotice}}</label>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});