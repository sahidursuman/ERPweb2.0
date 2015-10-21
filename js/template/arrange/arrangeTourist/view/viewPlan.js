/*TMODJS:{"debug":true,"version":19,"md5":"0e62239b9df517bfa845e9a07d852e46"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/viewPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, lineProduct = $data.lineProduct, tripPlan = $data.tripPlan, busCompant = $data.busCompant, bus = $data.bus, guide = $data.guide, driver = $data.driver, $each = $utils.$each, touristGroupList = $data.touristGroupList, lineProductDayList = ($data.touristGroup, 
            $data.$index, $data.lineProductDayList), $out = ($data.dayList, "");
            return $out += '<div class="viewTripPlan"> <div class="col-xs-12 newAddTripPlanMain"> <form class="form-horizontal newAddTripPlanMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">基本信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%;"> <tr> <td class="style-myself">线路名称</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 13, $out += $escape(lineProduct.name), $out += '</td> <td class="style-myself">出团日期</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 15, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
            $out += '</td> <td class="style-myself">团队编号</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 17, $out += $escape(tripPlan.tripNumber), $out += '</td> </tr> <tr> <td class="style-myself">计划人数</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 21, $out += $escape(tripPlan.planTouristCount), $out += '</td> <td class="style-myself">车队</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 23, $out += $escape(busCompant.companyName), $out += '</td> <td class="style-myself">车牌号</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 25, $out += $escape(bus.licenseNumber), $out += '</td> <td class="style-myself">车座数</td> <td style="text-align: left;padding: 0px 0px 0px 10px" >', 
            $line = 27, $out += $escape(bus.seatCount), $out += '</td> </tr> <tr> <td class="style-myself">导游</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 31, $out += $escape(guide.realname), $out += '</td> <td class="style-myself">导游电话</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 33, $out += $escape(guide.mobileNumber), $out += '</td> <td class="style-myself">司机</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 35, $out += $escape(driver.name), $out += '</td> <td class="style-myself">司机电话</td> <td style="text-align: left;padding: 0px 0px 0px 10px" >', 
            $line = 37, $out += $escape(driver.mobileNumber), $out += '</td> </tr> <tr> <td class="style-myself">全陪</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 41, $out += $escape(tripPlan.accompanyGuideName), $out += '</td> <td class="style-myself">全陪电话</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 43, $out += $escape(tripPlan.accompanyGuideMobile), $out += '</td> <td class="style-myself">集合地点</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 45, $out += $escape(tripPlan.setPlacePosition), $out += '</td> <td class="style-myself">集合时间</td> <td style="text-align: left;padding: 0px 0px 0px 10px" >', 
            $line = 47, $out += $escape(tripPlan.setPlaceTime), $out += '</td> </tr> </table> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">线路</label> </h5>        <!--<label class="control-label">', 
            $line = 68, $out += $escape(lineProduct.type), $out += '</label>-->    <!--<label class="control-label">', 
            $line = 72, 0 == lineProduct.customerType ? ($out += "散客", $line = 72) : 1 == lineProduct.customerType && ($out += "团体", 
            $line = 72), $out += '</label>-->    <!--<label class="control-label">', $line = 76, 
            $out += $escape(lineProduct.days), $out += '</label>-->       <table class="whereQ whereTwo" style="width: 100%;"> <tr> <td class="style-myself">类别</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 87, $out += $escape(lineProduct.type), $out += '</td> <td class="style-myself">应用范围</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 89, 0 == lineProduct.customerType ? ($out += "散客", $line = 89) : 1 == lineProduct.customerType && ($out += "团体", 
            $line = 89), $out += '</td> <td class="style-myself">天数</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 91, $out += $escape(lineProduct.days), $out += '</td> </tr> </table> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">游客名单</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">小组</th> <th class="th-border">线路产品</th> <th class="th-border">住宿标准 </th> <th class="th-border">自费</th> <th class="th-border">来源</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">备注</th> <th class="th-border">查看成员</th> </tr> </thead> <tbody class="addTripPlanTouristTbody">', 
            $line = 128, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 129, $out += $escape(touristGroup.id), 
                $out += '"> <td></td> <td>', $line = 131, $out += $escape(touristGroup.lineProduct.name), 
                $out += "</td> <td>", $line = 132, $out += $escape(touristGroup.hotelLevel), $out += "</td> <td>", 
                $line = 133, $out += $escape(touristGroup.includeSelfPay), $out += "</td> <td>", 
                $line = 134, null != touristGroup.partnerAgency && ($line = 134, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
                $line = 134), $out += "</td> <td>", $line = 135, null != touristGroup.contactMember && ($line = 135, 
                $out += $escape(touristGroup.contactMember.name), $line = 135), $out += "</td> <td>", 
                $line = 136, null != touristGroup.contactMember && ($line = 136, $out += $escape(touristGroup.contactMember.mobileNumber), 
                $line = 136), $out += "</td> <td>", $line = 137, $out += $escape(touristGroup.areaData), 
                $out += "</td> <td>", $line = 138, $out += $escape(touristGroup.ageData), $out += "</td> <td>", 
                $line = 139, $out += $escape(touristGroup.adultCount + touristGroup.childCount), 
                $out += "</td> <td>", $line = 140, $out += $escape(touristGroup.remark), $out += '</td> <td> <a data-entity-id="', 
                $line = 142, $out += $escape(touristGroup.id), $out += '" class="cursor viewTripPlanView"> 查看 </a> </td> </tr>', 
                $line = 146;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">日程</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <div class="col-xs-12"> <div class=""> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">日期</th> <th class="th-border">含餐情况</th> <th class="th-border">酒店星级</th> <th class="th-border">简要行程</th> </tr> </thead> <tbody>', 
            $line = 178, $each(lineProductDayList, function(dayList) {
                $out += ' <tr data-entity-id="', $line = 179, $out += $escape(dayList.id), $out += '"> <td>第', 
                $line = 180, $out += $escape(dayList.whichDay), $out += "天</td> <td>", $line = 181, 
                $out += $escape(dayList.repastDetail), $out += "</td> <td> ", $line = 183, 1 == dayList.hotelLevel ? ($out += " 三星以下 ", 
                $line = 185) : 2 == dayList.hotelLevel ? ($out += " 三星 ", $line = 187) : 3 == dayList.hotelLevel ? ($out += " 准四星 ", 
                $line = 189) : 4 == dayList.hotelLevel ? ($out += " 四星 ", $line = 191) : 5 == dayList.hotelLevel ? ($out += " 准五星 ", 
                $line = 193) : 6 == dayList.hotelLevel ? ($out += " 五星 ", $line = 195) : 7 == dayList.hotelLevel && ($out += " 五星以上 ", 
                $line = 197), $out += ' </td> <td class="col-xs-6">', $line = 199, $out += $escape(dayList.title), 
                $out += "</td> </tr>", $line = 200;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 213, $out += $escape(lineProduct.includeFee), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">费用不含:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 219, $out += $escape(lineProduct.excludeFee), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 225, $out += $escape(lineProduct.lineFeature), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 231, $out += $escape(lineProduct.lineNotice), $out += "</label> </div> </div> </div> </div> </div> </div> </div> </form> </div> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="viewTripPlan">\r\n	<div class="col-xs-12 newAddTripPlanMain">\r\n		<form class="form-horizontal newAddTripPlanMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<label class="middle title-size">基本信息</label>\r\n							</h5>\r\n						<table class="whereQ whereTwo" style="width: 100%;">\r\n							<tr>\r\n								<td class="style-myself">线路名称</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{lineProduct.name}}</td>\r\n								<td class="style-myself">出团日期</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n								<td class="style-myself">团队编号</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{tripPlan.tripNumber}}</td>\r\n							</tr>\r\n							<tr>\r\n								<td class="style-myself">计划人数</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.planTouristCount}}</td>\r\n								<td class="style-myself">车队</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{busCompant.companyName}}</td>\r\n								<td class="style-myself">车牌号</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{bus.licenseNumber}}</td>\r\n								<td class="style-myself">车座数</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px" >{{bus.seatCount}}</td>\r\n								</tr>\r\n							<tr>\r\n								<td class="style-myself">导游</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{guide.realname}}</td>\r\n								<td class="style-myself">导游电话</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{guide.mobileNumber}}</td>\r\n								<td class="style-myself">司机</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{driver.name}}</td>\r\n								<td class="style-myself">司机电话</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px" >{{driver.mobileNumber}}</td>\r\n							</tr>\r\n							<tr>\r\n								<td class="style-myself">全陪</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.accompanyGuideName}}</td>\r\n								<td class="style-myself">全陪电话</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.accompanyGuideMobile}}</td>\r\n								<td class="style-myself">集合地点</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{tripPlan.setPlacePosition}}</td>\r\n								<td class="style-myself">集合时间</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px" >{{tripPlan.setPlaceTime}}</td>\r\n							</tr>\r\n						</table>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">线路</label>\r\n						</h5>\r\n						<!--<div class="widget-body">-->\r\n							<!--<div class="widget-main">-->\r\n								<!--<div class="form-group">-->\r\n									<!--<div class="col-xs-12">-->\r\n										<!--<div class="form-group">-->\r\n											<!--<label class="col-sm-1 control-label no-padding-right">类别：</label>-->\r\n											<!--<div class="col-sm-2">-->\r\n												<!--<label class="control-label">{{lineProduct.type}}</label>-->\r\n											<!--</div>-->\r\n											<!--<label class="col-sm-1 control-label no-padding-right">应用范围：</label>-->\r\n											<!--<div class="col-sm-2">-->\r\n												<!--<label class="control-label">{{if lineProduct.customerType == 0}}散客{{else if lineProduct.customerType == 1}}团体{{/if}}</label>-->\r\n											<!--</div>-->\r\n											<!--<label class="col-sm-1 control-label no-padding-right">天数：</label>-->\r\n											<!--<div class="col-sm-2">-->\r\n												<!--<label class="control-label">{{lineProduct.days}}</label>-->\r\n											<!--</div>-->\r\n										<!--</div>-->\r\n									<!--</div>-->\r\n								<!--</div>-->\r\n							<!--</div>-->\r\n						<!--</div>-->\r\n\r\n						<table class="whereQ whereTwo" style="width: 100%;">\r\n							<tr>\r\n								<td class="style-myself">类别</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{lineProduct.type}}</td>\r\n								<td class="style-myself">应用范围</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">{{if lineProduct.customerType == 0}}散客{{else if lineProduct.customerType == 1}}团体{{/if}}</td>\r\n								<td class="style-myself">天数</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{lineProduct.days}}</td>\r\n							</tr>\r\n						</table>\r\n\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<label class="middle title-size">游客名单</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<table class="table table-striped table-bordered table-hover"> \r\n											<thead>\r\n												<tr>\r\n													<th class="th-border">小组</th>\r\n													<th class="th-border">线路产品</th>\r\n													<th class="th-border">住宿标准 </th>\r\n													<th class="th-border">自费</th>\r\n													<th class="th-border">来源</th>\r\n													<th class="th-border">联系人</th>\r\n													<th class="th-border">联系电话</th>\r\n													<th class="th-border">客源地</th>\r\n													<th class="th-border">年龄</th>\r\n													<th class="th-border">人数</th>\r\n													<th class="th-border">备注</th>\r\n													<th class="th-border">查看成员</th>\r\n												</tr>\r\n											</thead>\r\n											<tbody class="addTripPlanTouristTbody">{{each touristGroupList as touristGroup}}\r\n												<tr data-entity-id="{{touristGroup.id}}">\r\n													<td></td>\r\n													<td>{{touristGroup.lineProduct.name}}</td>    \r\n													<td>{{touristGroup.hotelLevel}}</td>\r\n													<td>{{touristGroup.includeSelfPay}}</td>    \r\n													<td>{{if touristGroup.partnerAgency != null}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n													<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n													<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n													<td>{{touristGroup.areaData}}</td>\r\n													<td>{{touristGroup.ageData}}</td>\r\n													<td>{{touristGroup.adultCount + touristGroup.childCount}}</td>\r\n													<td>{{touristGroup.remark}}</td>\r\n													<td>\r\n														<a data-entity-id="{{touristGroup.id}}" class="cursor viewTripPlanView">\r\n															查看\r\n														</a>\r\n													</td>\r\n												</tr>{{/each}}\r\n											</tbody>\r\n										</table>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col">\r\n					<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<label class="middle title-size">日程</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<div class="col-xs-12">\r\n										<div class="">\r\n											<table class="table table-striped table-bordered table-hover">\r\n												<thead>\r\n													<tr>\r\n														<th class="th-border">日期</th>\r\n														<th class="th-border">含餐情况</th>\r\n														<th class="th-border">酒店星级</th>\r\n														<th class="th-border">简要行程</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody>{{each lineProductDayList as dayList}}\r\n													<tr data-entity-id="{{dayList.id}}">\r\n														<td>第{{dayList.whichDay}}天</td>\r\n														<td>{{dayList.repastDetail}}</td>\r\n														<td>\r\n															{{if dayList.hotelLevel == 1}}\r\n															三星以下\r\n															{{else if dayList.hotelLevel == 2}}\r\n															三星\r\n															{{else if dayList.hotelLevel == 3}}\r\n															准四星\r\n															{{else if dayList.hotelLevel == 4}}\r\n															四星\r\n															{{else if dayList.hotelLevel == 5}}\r\n															准五星\r\n															{{else if dayList.hotelLevel == 6}}\r\n															五星\r\n															{{else if dayList.hotelLevel == 7}}\r\n															五星以上\r\n															{{/if}}\r\n														</td>\r\n														<td class="col-xs-6">{{dayList.title}}</td>\r\n													</tr>{{/each}}\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main">\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">费用包含:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.includeFee}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">费用不含:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.excludeFee}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">行程特色:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.lineFeature}}</label>\r\n									</div>\r\n								</div>\r\n								<div class="form-group">\r\n									<label class="col-sm-1 control-label no-padding-right">行程须知:</label>\r\n									<div class="col-sm-8">\r\n										<label class="control-label">{{lineProduct.lineNotice}}</label>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});