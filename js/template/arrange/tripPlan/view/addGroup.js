/*TMODJS:{"debug":true,"version":140,"md5":"84a90e02a8556ecdb9baf2a039b68569"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/addGroup", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.touristGroup, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="col-sm-12" style="margin-top:10px;"> <div class="tabbable T-addtourist-toplan globalAdd"> <div class=" col-xs-12" style="padding:10px 0 0 0;"> <div class="tab-pane fade active in"> <div class="col-xs-12" class="search-TravelLineList"> <table class="table table-striped table-bordered table-hover add-travelLineList-table"> <thead> <tr> <th class="th-border"> <label class="pos-rel"> <input type="checkbox" class="ace T-checkAll"> <span class="lbl"></span> </label> </th> <th class="th-border">收客单号</th> <th class="th-border">外联销售</th> <th class="th-border">线路产品</th> <th class="th-border">客户</th> <th class="th-border">联系人</th> <th class="th-border">联系电话</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> <th class="th-border">人数</th> <th class="th-border">现收团款</th>  <th class="th-border">全陪</th> <th class="th-border">全陪电话</th> <th class="th-border">接站牌</th> <th class="th-border">备注</th> <th class="th-border" style="width: 50px">操作</th> </tr> </thead> <tbody class="T-group-list">', 
            $line = 34, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr data-id="', $line = 35, $out += $escape(touristGroup.id), $out += '"> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-tourist-check"> <span class="lbl"></span> </label> </td> <td>', 
                $line = 42, $out += $escape(touristGroup.orderNumber), $out += '</td> <td name="creatorName">', 
                $line = 43, $out += $escape(touristGroup.creatorName), $out += '</td> <td name="lineProductName">', 
                $line = 44, touristGroup.lineProduct && ($line = 44, $out += $escape(touristGroup.lineProduct.name), 
                $line = 44), $out += '</td> <td name="travelAgencyName">', $line = 45, touristGroup.partnerAgency && ($line = 45, 
                $out += $escape(touristGroup.partnerAgency.travelAgencyName), $line = 45), $out += '</td> <td name="contactMemberName">', 
                $line = 46, touristGroup.contactMember && ($line = 46, $out += $escape(touristGroup.contactMember.name), 
                $line = 46), $out += '</td> <td name="contactMemberMobileNumber">', $line = 47, 
                touristGroup.contactMember && ($line = 47, $out += $escape(touristGroup.contactMember.mobileNumber), 
                $line = 47), $out += '</td> <td name="areaData">', $line = 48, $out += $escape(touristGroup.areaData), 
                $out += '</td> <td name="ageData">', $line = 49, $out += $escape(touristGroup.ageData), 
                $out += '</td> <td name="peopleCount" data-adultCount="', $line = 50, $out += $escape(touristGroup.adultCount), 
                $out += '" data-childCount="', $line = 50, $out += $escape(touristGroup.childCount), 
                $out += '">', $line = 50, $out += $escape(touristGroup.adultCount + touristGroup.childCount), 
                $out += '</td> <td name="currentNeedPayMoney">', $line = 51, $out += $escape(touristGroup.currentNeedPayMoney), 
                $out += '</td> <!-- <td name="hotelLevel">', $line = 52, $out += $escape($helpers.getHotelLevelDesc(touristGroup.hotelLevel)), 
                $out += '</td> <td name="includeSelfPay">', $line = 53, $out += $escape(touristGroup.includeSelfPay), 
                $out += "</td> --> <td>", $line = 54, $out += $escape(touristGroup.accompanyGuideName), 
                $out += "</td> <td>", $line = 55, $out += $escape(touristGroup.accompanyGuideMobile), 
                $out += "</td> <td>", $line = 56, $out += $escape(touristGroup.welcomeBoard), $out += '</td> <td name="remark">', 
                $line = 57, $out += $escape(touristGroup.remark), $out += '</td> <td> <a class="cursor T-groupView"> 查看 </a> </td> </tr>', 
                $line = 63;
            }), $out += ' </tbody> </table> <div class="space-10"></div> <button class="btn btn-block btn-primary T-saveGroup"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-10"></div> </div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12" style="margin-top:10px;">\r\n	<div class="tabbable T-addtourist-toplan globalAdd">\r\n		<div class=" col-xs-12" style="padding:10px 0 0 0;">\r\n			<div class="tab-pane fade active in">\r\n				<div class="col-xs-12" class="search-TravelLineList">\r\n					<table class="table table-striped table-bordered table-hover add-travelLineList-table">\r\n						<thead>\r\n							<tr>\r\n								<th class="th-border">\r\n									<label class="pos-rel">\r\n										<input type="checkbox" class="ace T-checkAll">\r\n										<span class="lbl"></span>\r\n									</label>\r\n								</th>\r\n								<th class="th-border">收客单号</th>\r\n								<th class="th-border">外联销售</th>\r\n								<th class="th-border">线路产品</th>\r\n								<th class="th-border">客户</th>\r\n								<th class="th-border">联系人</th>\r\n								<th class="th-border">联系电话</th>\r\n								<th class="th-border">客源地</th>\r\n								<th class="th-border">年龄</th>\r\n								<th class="th-border">人数</th>\r\n								<th class="th-border">现收团款</th>\r\n								<!-- <th class="th-border">住宿标准</th>\r\n								<th class="th-border">包含自费</th> -->\r\n								<th class="th-border">全陪</th>\r\n								<th class="th-border">全陪电话</th>\r\n								<th class="th-border">接站牌</th>\r\n								<th class="th-border">备注</th>\r\n								<th class="th-border" style="width: 50px">操作</th>\r\n							</tr>\r\n						</thead>\r\n						<tbody class="T-group-list">{{each touristGroupList as touristGroup}}\r\n							<tr data-id="{{touristGroup.id}}">\r\n								<td>\r\n									<label class="pos-rel">\r\n										<input type="checkbox" class="ace T-tourist-check">\r\n										<span class="lbl"></span>\r\n									</label>\r\n								</td>\r\n								<td>{{touristGroup.orderNumber}}</td>\r\n								<td name="creatorName">{{touristGroup.creatorName}}</td>\r\n								<td name="lineProductName">{{if touristGroup.lineProduct}}{{touristGroup.lineProduct.name}}{{/if}}</td>\r\n								<td name="travelAgencyName">{{if touristGroup.partnerAgency}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n								<td name="contactMemberName">{{if touristGroup.contactMember}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n								<td name="contactMemberMobileNumber">{{if touristGroup.contactMember}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n								<td name="areaData">{{touristGroup.areaData}}</td>\r\n								<td name="ageData">{{touristGroup.ageData}}</td>\r\n								<td name="peopleCount" data-adultCount="{{touristGroup.adultCount}}" data-childCount="{{touristGroup.childCount}}">{{touristGroup.adultCount+touristGroup.childCount}}</td>\r\n								<td name="currentNeedPayMoney">{{touristGroup.currentNeedPayMoney}}</td>\r\n								<!-- <td name="hotelLevel">{{touristGroup.hotelLevel | getHotelLevelDesc}}</td>\r\n								<td name="includeSelfPay">{{touristGroup.includeSelfPay}}</td> -->\r\n								<td>{{touristGroup.accompanyGuideName}}</td>\r\n								<td>{{touristGroup.accompanyGuideMobile}}</td>\r\n								<td>{{touristGroup.welcomeBoard}}</td>\r\n								<td name="remark">{{touristGroup.remark}}</td>\r\n								<td>\r\n									<a class="cursor T-groupView">\r\n										查看\r\n									</a>\r\n								</td>\r\n							</tr>{{/each}}\r\n						</tbody>\r\n					</table>\r\n					<div class="space-10"></div>\r\n					<button class="btn btn-block btn-primary T-saveGroup">\r\n						<i class="ace-icon fa fa-check"></i>\r\n						提交信息\r\n					</button>\r\n					<div class="space-10"></div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});