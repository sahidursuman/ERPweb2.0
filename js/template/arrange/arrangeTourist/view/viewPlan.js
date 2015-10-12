/*TMODJS:{"debug":true,"version":15,"md5":"4f1bf09c4ba3f2d30d429cd4d5e3c980"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/viewPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, lineProduct = $data.lineProduct, tripPlan = $data.tripPlan, busCompant = $data.busCompant, bus = $data.bus, guide = $data.guide, driver = $data.driver, $each = $utils.$each, touristGroupList = $data.touristGroupList, lineProductDayList = ($data.touristGroup, 
            $data.$index, $data.lineProductDayList), $out = ($data.dayList, "");
            return $out += '<div class="viewTripPlan"> <div class="col-xs-12 newAddTripPlanMain"> <form class="form-horizontal newAddTripPlanMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 基本信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 18, $out += $escape(lineProduct.name), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出团日期：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 22, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">团队编号：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 26, $out += $escape(tripPlan.tripNumber), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">计划人数：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 32, $out += $escape(tripPlan.planTouristCount), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">车队：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 36, $out += $escape(busCompant.companyName), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">车牌号：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 40, $out += $escape(bus.licenseNumber), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">车座数：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 44, $out += $escape(bus.seatCount), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">导游：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 50, $out += $escape(guide.realname), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">导游电话：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 54, $out += $escape(guide.mobileNumber), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">司机：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 58, $out += $escape(driver.name), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">司机电话：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 62, $out += $escape(driver.mobileNumber), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">全陪：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 68, $out += $escape(tripPlan.accompanyGuideName), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">全陪电话：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 72, $out += $escape(tripPlan.accompanyGuideMobile), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">集合地点：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 76, $out += $escape(tripPlan.setPlacePosition), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">集合时间：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 80, $out += $escape(tripPlan.setPlaceTime), $out += '</label> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 游客名单 </h5> </div> <div class="widget-body"> <div class="widget-main">  <div class="form-group"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>小组</th> <th>线路产品</th> <th>住宿标准 </th> <th>自费</th> <th>来源</th> <th>联系人</th> <th>联系电话</th> <th>客源地</th> <th>年龄</th> <th>人数</th> <th>备注</th> <th>查看成员</th> </tr> </thead> <tbody class="addTripPlanTouristTbody">', 
            $line = 129, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 130, $out += $escape(touristGroup.id), 
                $out += '"> <td></td> <td>', $line = 132, $out += $escape(touristGroup.lineProduct.name), 
                $out += "</td> <td>", $line = 133, $out += $escape(touristGroup.hotelLevel), $out += "</td> <td>", 
                $line = 134, $out += $escape(touristGroup.includeSelfPay), $out += "</td> <td>", 
                $line = 136, null != touristGroup.partnerAgency && ($line = 136, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
                $line = 136), $out += "</td> <td>", $line = 137, null != touristGroup.contactMember && ($line = 137, 
                $out += $escape(touristGroup.contactMember.name), $line = 137), $out += "</td> <td>", 
                $line = 138, null != touristGroup.contactMember && ($line = 138, $out += $escape(touristGroup.contactMember.mobileNumber), 
                $line = 138), $out += "</td> <td>", $line = 139, $out += $escape(touristGroup.areaData), 
                $out += "</td> <td>", $line = 140, $out += $escape(touristGroup.ageData), $out += "</td> <td>", 
                $line = 141, $out += $escape(touristGroup.adultCount + touristGroup.childCount), 
                $out += "</td> <td>", $line = 142, $out += $escape(touristGroup.remark), $out += '</td> <td> <button data-entity-id="', 
                $line = 144, $out += $escape(touristGroup.id), $out += '" class="btn btn-xs btn-success viewTripPlanView"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </button> </td> </tr>', 
                $line = 148;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 线路 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">类别：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 177, $out += $escape(lineProduct.type), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">应用范围：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 181, 0 == lineProduct.customerType ? ($out += "散客", $line = 181) : 1 == lineProduct.customerType && ($out += "团体", 
            $line = 181), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">天数：</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 185, $out += $escape(lineProduct.days), $out += '</label> </div> </div> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 日程 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class="form-group"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>日期</th> <th>含餐情况</th> <th>酒店星级</th> <th>简要行程</th> </tr> </thead> <tbody>', 
            $line = 221, $each(lineProductDayList, function(dayList) {
                $out += ' <tr data-entity-id="', $line = 222, $out += $escape(dayList.id), $out += '"> <td>第', 
                $line = 223, $out += $escape(dayList.whichDay), $out += "天</td> <td>", $line = 224, 
                $out += $escape(dayList.repastDetail), $out += "</td> <td> ", $line = 226, 1 == dayList.hotelLevel ? ($out += " 三星以下 ", 
                $line = 228) : 2 == dayList.hotelLevel ? ($out += " 三星 ", $line = 230) : 3 == dayList.hotelLevel ? ($out += " 准四星 ", 
                $line = 232) : 4 == dayList.hotelLevel ? ($out += " 四星 ", $line = 234) : 5 == dayList.hotelLevel ? ($out += " 准五星 ", 
                $line = 236) : 6 == dayList.hotelLevel ? ($out += " 五星 ", $line = 238) : 7 == dayList.hotelLevel && ($out += " 五星以上 ", 
                $line = 240), $out += ' </td> <td class="col-xs-6">', $line = 242, $out += $escape(dayList.title), 
                $out += "</td> </tr>", $line = 243;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 256, $out += $escape(lineProduct.includeFee), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用不含:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 262, $out += $escape(lineProduct.excludeFee), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 268, $out += $escape(lineProduct.lineFeature), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 274, $out += $escape(lineProduct.lineNotice), $out += "</label> </div> </div> </div> </div> </div> </div> </div> </form>  </div> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="viewTripPlan">\r\n	<div class="col-xs-12 newAddTripPlanMain">\r\n		<form class="form-horizontal newAddTripPlanMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								基本信息\r\n							</h5>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>线路名称：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{lineProduct.name}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>出团日期：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">团队编号：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.tripNumber}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">计划人数：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.planTouristCount}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">车队：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{busCompant.companyName}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">车牌号：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{bus.licenseNumber}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">车座数：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{bus.seatCount}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">导游：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{guide.realname}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">导游电话：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{guide.mobileNumber}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">司机：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{driver.name}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">司机电话：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{driver.mobileNumber}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">全陪：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.accompanyGuideName}}</label>\r\n									</div>							\r\n									<label class="col-sm-1 control-label no-padding-right">全陪电话：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.accompanyGuideMobile}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合地点：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.setPlacePosition}}</label>\r\n									</div>\r\n									<label class="col-sm-1 control-label no-padding-right">集合时间：</label>\r\n									<div class="col-sm-2">\r\n										<label class="control-label">{{tripPlan.setPlaceTime}}</label>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								游客名单\r\n							</h5>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<!-- <div class="form-group">\r\n									<div class="col-xs-12">\r\n										<button class="btn btn-sm btn-success  addTouristGroup">\r\n											<i class="ace-icon fa fa-plus"></i>\r\n											添加游客小组\r\n										</button>\r\n									</div>\r\n								</div> -->\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<table class="table table-striped table-bordered table-hover"> \r\n											<thead>\r\n												<tr>\r\n													<th>小组</th>\r\n													<th>线路产品</th>    \r\n													<th>住宿标准 </th>\r\n													<th>自费</th> \r\n\r\n													<th>来源</th>\r\n													<th>联系人</th>\r\n													<th>联系电话</th>\r\n													<th>客源地</th>\r\n													<th>年龄</th>\r\n													<th>人数</th>\r\n													<th>备注</th>\r\n													<th>查看成员</th>   \r\n												</tr>\r\n											</thead>\r\n											<tbody class="addTripPlanTouristTbody">{{each touristGroupList as touristGroup}}\r\n												<tr data-entity-id="{{touristGroup.id}}">\r\n													<td></td>\r\n													<td>{{touristGroup.lineProduct.name}}</td>    \r\n													<td>{{touristGroup.hotelLevel}}</td>\r\n													<td>{{touristGroup.includeSelfPay}}</td>    \r\n\r\n													<td>{{if touristGroup.partnerAgency != null}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n													<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n													<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n													<td>{{touristGroup.areaData}}</td>\r\n													<td>{{touristGroup.ageData}}</td>\r\n													<td>{{touristGroup.adultCount + touristGroup.childCount}}</td>\r\n													<td>{{touristGroup.remark}}</td>\r\n													<td>\r\n														<button data-entity-id="{{touristGroup.id}}" class="btn btn-xs btn-success viewTripPlanView">\r\n															<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n														</button>\r\n													</td>\r\n												</tr>{{/each}}\r\n											</tbody>\r\n										</table>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								线路\r\n							</h5>\r\n						</div>\r\n	\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<label class="col-sm-1 control-label no-padding-right">类别：</label>\r\n											<div class="col-sm-2">\r\n												<label class="control-label">{{lineProduct.type}}</label>\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">应用范围：</label>\r\n											<div class="col-sm-2">\r\n												<label class="control-label">{{if lineProduct.customerType == 0}}散客{{else if lineProduct.customerType == 1}}团体{{/if}}</label>\r\n											</div>\r\n											<label class="col-sm-1 control-label no-padding-right">天数：</label>\r\n											<div class="col-sm-2">\r\n												<label class="control-label">{{lineProduct.days}}</label>\r\n											</div>				\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class="widget-box ui-sortable-handle">\r\n						<div class="widget-header">\r\n							<h5 class="widget-title">\r\n								<i class="ace-icon fa fa-building"></i>\r\n								日程\r\n							</h5>\r\n						</div>\r\n	\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="form-group">\r\n											<table class="table table-striped table-bordered table-hover">\r\n												<thead>\r\n													<tr>\r\n														<th>日期</th>\r\n														<th>含餐情况</th>\r\n														<th>酒店星级</th>\r\n														<th>简要行程</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>{{each lineProductDayList as dayList}}\r\n													<tr data-entity-id="{{dayList.id}}">\r\n														<td>第{{dayList.whichDay}}天</td>\r\n														<td>{{dayList.repastDetail}}</td>\r\n														<td>\r\n															{{if dayList.hotelLevel == 1}}\r\n															三星以下\r\n															{{else if dayList.hotelLevel == 2}}\r\n															三星\r\n															{{else if dayList.hotelLevel == 3}}\r\n															准四星\r\n															{{else if dayList.hotelLevel == 4}}\r\n															四星\r\n															{{else if dayList.hotelLevel == 5}}\r\n															准五星\r\n															{{else if dayList.hotelLevel == 6}}\r\n															五星\r\n															{{else if dayList.hotelLevel == 7}}\r\n															五星以上\r\n															{{/if}}\r\n														</td>\r\n														<td class="col-xs-6">{{dayList.title}}</td>\r\n													</tr>{{/each}}\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">费用包含:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.includeFee}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">费用不含:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.excludeFee}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">行程特色:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.lineFeature}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-2 control-label no-padding-right">行程须知:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.lineNotice}}</label>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<!-- <form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group" style="text-align: center;">\r\n				<button class="btn btn-danger btn-cancelTripPlan">\r\n					<i class="ace-icon fa fa-times"></i>\r\n					取消\r\n				</button>\r\n				<button class="btn btn-primary btn-saveTripPlan">\r\n					<i class="ace-icon fa fa-check"></i>\r\n					保存\r\n				</button>\r\n			</div>\r\n		</form> -->\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});