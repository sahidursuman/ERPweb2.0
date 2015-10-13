/*TMODJS:{"debug":true,"version":62,"md5":"372225b55c286df69c80b319f444e0b8"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/addGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.touristGroup, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="col-sm-12" style="margin-top:10px;"> <div class="tabbable addTouristGroupList"> <div class="tab-content col-xs-12" style="padding:10px 0 0 0;"> <div class="tab-pane fade active in"> <div class="col-xs-12" class="search-TravelLineList"> <table class="table table-striped table-bordered table-hover add-travelLineList-table all"> <thead> <tr> <th> <label class="pos-rel"> <input type="checkbox" class="ace addMainCheckBox"> <span class="lbl"></span> </label> </th> <th>线路产品</th> <th>住宿标准</th> <th>自费</th> <th>来源</th> <th>联系人</th> <th>联系电话</th> <th>客源地</th> <th>年龄</th> <th>人数</th> <th>备注</th> <th>操作</th> </tr> </thead> <tbody>', 
            $line = 29, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 30, $out += $escape(touristGroup.id), $out += '"> <td> <label class="pos-rel"> <input type="checkbox" class="ace touristGroupCheckBox"> <span class="lbl"></span> </label> </td> <td name="lineProductName">', 
                $line = 37, $out += $escape(touristGroup.lineProduct.name), $out += '</td> <td name="hotelLevel">', 
                $line = 38, $out += $escape(touristGroup.hotelLevel), $out += '</td> <td name="includeSelfPay">', 
                $line = 39, $out += $escape(touristGroup.includeSelfPay), $out += '</td> <td name="travelAgencyName">', 
                $line = 40, $out += $escape(touristGroup.partnerAgency.travelAgencyName), $out += '</td> <td name="contactMemberName">', 
                $line = 41, $out += $escape(touristGroup.contactMember.name), $out += '</td> <td name="contactMemberMobileNumber">', 
                $line = 42, $out += $escape(touristGroup.contactMember.mobileNumber), $out += '</td> <td name="areaData">', 
                $line = 43, $out += $escape(touristGroup.areaData), $out += '</td> <td name="ageData">', 
                $line = 44, $out += $escape(touristGroup.ageData), $out += '</td> <td name="peopleCount">', 
                $line = 45, $out += $escape(touristGroup.adultCount + touristGroup.childCount), 
                $out += '</td> <td name="remark">', $line = 46, $out += $escape(touristGroup.remark), 
                $out += '</td> <td> <button data-entity-id="', $line = 48, $out += $escape(touristGroup.id), 
                $out += '" class="btn btn-xs btn-success addGroupView"> <i class="ace-icon fa fa-search-plus"></i> </button> </td> </tr>', 
                $line = 52;
            }), $out += ' </tbody> </table> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-addtravelLine"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-10"></div> </div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12" style="margin-top:10px;">\r\n	<div class="tabbable addTouristGroupList">\r\n		<div class="tab-content col-xs-12" style="padding:10px 0 0 0;">\r\n			<div class="tab-pane fade active in">\r\n				<div class="col-xs-12" class="search-TravelLineList">\r\n					<table class="table table-striped table-bordered table-hover add-travelLineList-table all">\r\n						<thead>\r\n							<tr>\r\n								<th>\r\n									<label class="pos-rel">\r\n										<input type="checkbox" class="ace addMainCheckBox">\r\n										<span class="lbl"></span>\r\n									</label>\r\n								</th>\r\n\r\n								<th>线路产品</th>\r\n								<th>住宿标准</th>\r\n								<th>自费</th>\r\n								<th>来源</th>\r\n								<th>联系人</th>\r\n								<th>联系电话</th>\r\n								<th>客源地</th>\r\n								<th>年龄</th>\r\n								<th>人数</th>\r\n								<th>备注</th>\r\n								<th>操作</th>\r\n							</tr>\r\n						</thead>\r\n						<tbody>{{each touristGroupList as touristGroup}}\r\n							<tr data-entity-id="{{touristGroup.id}}">\r\n								<td>\r\n									<label class="pos-rel">\r\n										<input type="checkbox" class="ace touristGroupCheckBox">\r\n										<span class="lbl"></span>\r\n									</label>\r\n								</td>\r\n								<td name="lineProductName">{{touristGroup.lineProduct.name}}</td>    \r\n								<td name="hotelLevel">{{touristGroup.hotelLevel}}</td>\r\n								<td name="includeSelfPay">{{touristGroup.includeSelfPay}}</td>    \r\n								<td name="travelAgencyName">{{touristGroup.partnerAgency.travelAgencyName}}</td>\r\n								<td name="contactMemberName">{{touristGroup.contactMember.name}}</td>\r\n								<td name="contactMemberMobileNumber">{{touristGroup.contactMember.mobileNumber}}</td>\r\n								<td name="areaData">{{touristGroup.areaData}}</td>\r\n								<td name="ageData">{{touristGroup.ageData}}</td>\r\n								<td name="peopleCount">{{touristGroup.adultCount + touristGroup.childCount}}</td>\r\n								<td name="remark">{{touristGroup.remark}}</td>\r\n								<td>\r\n									<button data-entity-id="{{touristGroup.id}}" class="btn btn-xs btn-success addGroupView">\r\n										<i class="ace-icon fa fa-search-plus"></i>\r\n									</button>\r\n								</td>\r\n							</tr>{{/each}}\r\n						</tbody>\r\n					</table>\r\n					<div class="space-10"></div>\r\n					<button class="btn btn-block btn-primary btn-submit-addtravelLine">\r\n						<i class="ace-icon fa fa-check"></i>\r\n						提交信息\r\n					</button>\r\n					<div class="space-10"></div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});