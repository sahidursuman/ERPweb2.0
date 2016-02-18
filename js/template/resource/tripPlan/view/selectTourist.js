/*TMODJS:{"debug":true,"version":104,"md5":"5b3889541b8d744935cbc2273671604d"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/selectTourist", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, busData = $data.busData, $each = $utils.$each, touristGroupList = $data.touristGroupList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="col-sm-12" style="margin-top:10px;"> <div class="tabbable T-addtourist-TripPlanBus globalAdd" data-tasktype="', 
            $line = 2, $out += $escape(busData.taskType), $out += '"> <div class=" col-xs-12" style="padding:10px 0 0 0;"> <div class="tab-pane fade active in"> <div class="col-xs-12" class="search-TravelLineList"> <table class="table table-striped table-bordered table-hover add-travelLineList-table"> <thead> <tr> <th class="th-border"> <label class="pos-rel"> <input type="checkbox" class="ace T-checkAll"> <span class="lbl"></span> </label> </th> <th class="th-border">外联销售</th> <th class="th-border">线路产品</th> <th class="th-border">客户</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">全陪</th> <th class="th-border">全陪电话</th> <th class="th-border">接站牌</th> <th class="th-border">送客地点</th> <th class="th-border">备注</th> <th class="th-border">集合时间</th> <th class="th-border">集合地点</th> <th class="th-border" style="width: 50px">操作</th> </tr> </thead> <tbody class="T-group-list">', 
            $line = 33, $each(touristGroupList, function(rs) {
                $out += ' <tr data-entity-id="', $line = 34, $out += $escape(rs.id), $out += '"> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-tourist-check"> <span class="lbl"></span> </label> </td> <td name="creatorName">', 
                $line = 41, rs.outOPUser && ($line = 41, $out += $escape(rs.outOPUser.realName), 
                $line = 41), $out += '</td> <td name="lineProductName">', $line = 42, $out += $escape(rs.lineProduct.name), 
                $out += '</td> <td name="travelAgencyName">', $line = 43, $out += $escape(rs.partnerAgency.travelAgencyName), 
                $out += '</td> <td name="contactMemberName">', $line = 44, $out += $escape(rs.contactMember.name), 
                $out += '</td> <td name="contactMemberMobileNumber">', $line = 45, $out += $escape(rs.contactMember.mobileNumber), 
                $out += '</td> <td name="areaData">', $line = 46, $out += $escape(rs.areaData), 
                $out += '</td> <td name="ageData">', $line = 47, $out += $escape(rs.ageData), $out += '</td> <td name="peopleCount" data-adultCount="" data-childCount="">', 
                $line = 48, $out += $escape(rs.adultCount + rs.childCount), $out += "</td> <td>", 
                $line = 49, $out += $escape(rs.accompanyGuideName), $out += "</td> <td>", $line = 50, 
                $out += $escape(rs.accompanyGuideMobile), $out += "</td> <td>", $line = 51, $out += $escape(rs.welcomeBoard), 
                $out += "</td> <td>", $line = 52, $out += $escape(rs.sendPosition), $out += "</td> <td>", 
                $line = 53, $out += $escape(rs.remark), $out += '</td> <td><input type="text" name="setPlaceTime" class="T-dateTimePicker col-xs-12" ', 
                $line = 54, 6 == busData.taskType ? $line = 54 : ($out += "disabled", $line = 54), 
                $out += ' value="', $line = 54, 6 == busData.taskType ? ($line = 54, $out += $escape(rs.setPlaceTime), 
                $line = 54) : ($line = 54, $out += $escape(busData.setPlaceTime), $line = 54), $out += '"></td> <td><input type="text" name="setPlacePosition" class="col-xs-12" ', 
                $line = 55, 6 == busData.taskType ? $line = 55 : ($out += "disabled", $line = 55), 
                $out += ' value="', $line = 55, 6 == busData.taskType ? ($line = 55, $out += $escape(rs.setPlacePosition), 
                $line = 55) : ($line = 55, $out += $escape(busData.setPlacePosition), $line = 55), 
                $out += '"></td> <td> <a class="cursor T-groupView"> 查看 </a> </td> </tr>', $line = 61;
            }), $out += ' </tbody> </table> <div class="col-md-12 text-center mar-t-20"> <button class="btn btn-sm btn-primary T-cancel"> <i class="ace-icon fa fa-times-circle"></i> 取消 </button> <button data-entity-id="" class="btn btn-sm btn-primary T-saveGroup"> <i class="ace-icon fa fa-check-circle"></i> 提交信息 </button> </div> </div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12" style="margin-top:10px;">\r\n	<div class="tabbable T-addtourist-TripPlanBus globalAdd" data-tasktype="{{busData.taskType}}">\r\n		<div class=" col-xs-12" style="padding:10px 0 0 0;">\r\n			<div class="tab-pane fade active in">\r\n				<div class="col-xs-12" class="search-TravelLineList">\r\n					<table class="table table-striped table-bordered table-hover add-travelLineList-table">\r\n						<thead>\r\n							<tr>\r\n								<th class="th-border">\r\n									<label class="pos-rel">\r\n										<input type="checkbox" class="ace T-checkAll">\r\n										<span class="lbl"></span>\r\n									</label>\r\n								</th>\r\n								<th class="th-border">外联销售</th>\r\n								<th class="th-border">线路产品</th>\r\n								<th class="th-border">客户</th>\r\n								<th class="th-border">联系人</th>\r\n								<th class="th-border">联系电话</th>\r\n								<th class="th-border">客源地</th>\r\n								<th class="th-border">年龄</th>\r\n								<th class="th-border">人数</th>\r\n								<th class="th-border">全陪</th>\r\n								<th class="th-border">全陪电话</th>\r\n								<th class="th-border">接站牌</th>\r\n								<th class="th-border">送客地点</th>\r\n								<th class="th-border">备注</th>\r\n								<th class="th-border">集合时间</th>\r\n								<th class="th-border">集合地点</th>\r\n								<th class="th-border" style="width: 50px">操作</th>\r\n							</tr>\r\n						</thead>\r\n						<tbody class="T-group-list">{{each touristGroupList as rs}}\r\n							<tr data-entity-id="{{rs.id}}">\r\n								<td>\r\n									<label class="pos-rel">\r\n										<input type="checkbox" class="ace T-tourist-check">\r\n										<span class="lbl"></span>\r\n									</label>\r\n								</td>\r\n								<td name="creatorName">{{if !!rs.outOPUser}}{{rs.outOPUser.realName}}{{/if}}</td>\r\n								<td name="lineProductName">{{rs.lineProduct.name}}</td>\r\n								<td name="travelAgencyName">{{rs.partnerAgency.travelAgencyName}}</td>\r\n								<td name="contactMemberName">{{rs.contactMember.name}}</td>\r\n								<td name="contactMemberMobileNumber">{{rs.contactMember.mobileNumber}}</td>\r\n								<td name="areaData">{{rs.areaData}}</td>\r\n								<td name="ageData">{{rs.ageData}}</td>\r\n								<td name="peopleCount" data-adultCount="" data-childCount="">{{rs.adultCount + rs.childCount}}</td>\r\n								<td>{{rs.accompanyGuideName}}</td>\r\n								<td>{{rs.accompanyGuideMobile}}</td>\r\n								<td>{{rs.welcomeBoard}}</td>\r\n								<td>{{rs.sendPosition}}</td>\r\n								<td>{{rs.remark}}</td>\r\n								<td><input type="text" name="setPlaceTime" class="T-dateTimePicker col-xs-12" {{if busData.taskType == 6}}{{else}}disabled{{/if}} value="{{if busData.taskType == 6}}{{rs.setPlaceTime}}{{else}}{{busData.setPlaceTime}}{{/if}}"></td>\r\n								<td><input type="text" name="setPlacePosition" class="col-xs-12" {{if busData.taskType == 6}}{{else}}disabled{{/if}} value="{{if busData.taskType == 6}}{{rs.setPlacePosition}}{{else}}{{busData.setPlacePosition}}{{/if}}"></td>\r\n								<td>\r\n									<a class="cursor T-groupView">\r\n										查看\r\n									</a>\r\n								</td>\r\n							</tr>{{/each}}\r\n						</tbody>\r\n					</table>\r\n					 <div class="col-md-12 text-center mar-t-20">\r\n			            <button class="btn btn-sm btn-primary T-cancel">\r\n			                <i class="ace-icon fa fa-times-circle"></i> 取消\r\n			            </button>\r\n\r\n			            <button data-entity-id="" class="btn btn-sm btn-primary T-saveGroup">\r\n			                <i class="ace-icon fa fa-check-circle"></i> 提交信息\r\n			            </button>\r\n			        </div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});