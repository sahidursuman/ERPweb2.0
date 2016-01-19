/*TMODJS:{"debug":true,"version":103,"md5":"b70398e42ad378b3540a3d16447d7376"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/inTransfer", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupJson = $data.touristGroupJson, $escape = ($data.touristGroup, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row globalAdd"> <div class="col-xs-12 T-transferTouristMain"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover all"> <thead> <tr class="bg-blur"> <th> <label class="pos-rel"> <input type="checkbox" class="ace T-CheckAllBox"> <span class="lbl"></span> </label> </th> <th>客户来源</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>应付</th> <th>已付</th> <th>填写状态</th> <th>操作</th> </tr> </thead> <tbody class="T-transferTouristGroup-list"> ', 
            $line = 26, $each(touristGroupJson, function(touristGroup) {
                $out += ' <tr data-value="', $line = 27, $out += $escape(touristGroup.id), $out += '" data-entity-adultCount="', 
                $line = 27, $out += $escape(touristGroup.adultCount), $out += '" data-entity-childCount="', 
                $line = 27, $out += $escape(touristGroup.childCount), $out += '"> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-TransferCheckBox" /> <span class="lbl"></span> </label> </td> <td>', 
                $line = 34, null != touristGroup.partnerAgency && ($line = 34, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
                $line = 34), $out += "</td> <td>", $line = 35, null != touristGroup.contactMember && ($line = 35, 
                $out += $escape(touristGroup.contactMember.name), $line = 35), $out += "</td> <td>", 
                $line = 36, null != touristGroup.contactMember && ($line = 36, $out += $escape(touristGroup.contactMember.mobileNumber), 
                $line = 36), $out += '</td> <td><span class="T-viewTouristGroup T-action" data-entity-id="', 
                $line = 37, $out += $escape(touristGroup.id), $out += '" style="color:blue;text-decoration: underline; cursor:pointer;">大人', 
                $line = 37, $out += $escape(touristGroup.adultCount), $out += "小孩", $line = 37, 
                $out += $escape(touristGroup.childCount), $out += "</span></td> <td>", $line = 38, 
                $out += $escape(touristGroup.areaData), $out += '</td> <td class="F-float F-count">', 
                $line = 39, $out += $escape(touristGroup.ageData), $out += '</td> <td class="F-float F-money T-needPay">', 
                $line = 40, $out += $escape(touristGroup.transNeedPayAllMoney), $out += '</td> <td class="F-float F-money T-payed">', 
                $line = 41, $out += $escape(touristGroup.transPayedMoney), $out += '</td> <td class="transferFeeStatus">', 
                $line = 42, 1 == touristGroup.transferFeeStatus ? ($out += ' <i class ="ace-icon fa fa-check green"></i> 已填写 ', 
                $line = 45) : ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 未填写 ', 
                $line = 48), $out += ' </td> <td> <a class="cursor T-action T-editFee"> 填写费用 </a> </td> </tr> ', 
                $line = 56;
            }), $out += ' </tbody> </table> <div style="color:RGB(184,70,53);" class="pull-right">(*提示：内转操作需填写费用信息)</div> <form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> <div class="form-group col-sm-12" style="text-align: center;"> <label class="control-label no-padding-right">部门：</label> <input name="businessGroupName" style="width:270px;" class="T-Chosen-businessGroup" placeholder="请选择部门" /> <input name="businessGroupId" type="hidden" value="businessGroupId" style="width:270px;"/> <label class="control-label no-padding-right">责任计调：</label> <input name="opUserName" style="width:270px;" class="T-Chosen-opUser" placeholder="请选择责任计调" /> <input name="opUserId" type="hidden" value="1" style="width:270px;"/> </div> <div class="form-group col-sm-12" style="text-align: center; margin-top:50px;"> <button class="btn btn-sm btn-danger T-cancelTransfer"> <i class="ace-icon fa fa-times "></i> 取消 </button> <button class="btn btn-sm btn-primary T-saveTransfer" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row globalAdd">\r\n	<div class="col-xs-12 T-transferTouristMain">\r\n		<div class="col-xs-12">\r\n				<table class="table table-striped table-bordered table-hover all">\r\n					<thead>\r\n						<tr class="bg-blur">\r\n							<th>\r\n								<label class="pos-rel">\r\n									<input type="checkbox" class="ace T-CheckAllBox">\r\n									<span class="lbl"></span>\r\n								</label>\r\n							</th>\r\n							<th>客户来源</th>\r\n							<th>联系人</th>\r\n							<th>联系电话</th>\r\n							<th>人数</th>\r\n							<th>客源地</th>\r\n							<th>年龄</th>\r\n							<th>应付</th>\r\n							<th>已付</th>\r\n							<th>填写状态</th>\r\n							<th>操作</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody class="T-transferTouristGroup-list">\r\n						{{each touristGroupJson as touristGroup}}\r\n							<tr data-value="{{touristGroup.id}}"  data-entity-adultCount="{{touristGroup.adultCount}}" data-entity-childCount="{{touristGroup.childCount}}">\r\n								<td>\r\n									<label class="pos-rel">\r\n										<input type="checkbox" class="ace T-TransferCheckBox" />\r\n										<span class="lbl"></span>\r\n									</label>\r\n								</td>\r\n								<td>{{if touristGroup.partnerAgency != null}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n								<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n								<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n								<td><span class="T-viewTouristGroup T-action" data-entity-id="{{touristGroup.id}}" style="color:blue;text-decoration: underline; cursor:pointer;">大人{{touristGroup.adultCount}}小孩{{touristGroup.childCount}}</span></td>\r\n								<td>{{touristGroup.areaData}}</td>\r\n								<td class="F-float F-count">{{touristGroup.ageData}}</td>\r\n								<td class="F-float F-money T-needPay">{{touristGroup.transNeedPayAllMoney}}</td>\r\n								<td class="F-float F-money T-payed">{{touristGroup.transPayedMoney}}</td>\r\n								<td class="transferFeeStatus">{{if touristGroup.transferFeeStatus == 1}}\r\n									<i class ="ace-icon fa fa-check green"></i>\r\n									已填写\r\n									{{else}}\r\n									<i class="ace-icon fa fa-times red bigger-125"></i>\r\n									未填写\r\n									{{/if}}\r\n								</td>                                                                                                          \r\n								<td>\r\n									<a class="cursor T-action T-editFee">\r\n										填写费用\r\n									</a>\r\n								</td>\r\n							</tr>\r\n						{{/each}}\r\n					</tbody>\r\n				</table>\r\n			<div style="color:RGB(184,70,53);" class="pull-right">(*提示：内转操作需填写费用信息)</div>\r\n				<form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;">\r\n					<div class="form-group col-sm-12" style="text-align: center;">\r\n						<label class="control-label no-padding-right">部门：</label>\r\n						<input name="businessGroupName" style="width:270px;" class="T-Chosen-businessGroup" placeholder="请选择部门" />\r\n						<input name="businessGroupId" type="hidden" value="businessGroupId" style="width:270px;"/>\r\n\r\n						<label class="control-label no-padding-right">责任计调：</label>\r\n						<input name="opUserName" style="width:270px;" class="T-Chosen-opUser" placeholder="请选择责任计调" />\r\n						<input name="opUserId" type="hidden" value="1" style="width:270px;"/>\r\n					</div>\r\n					<div class="form-group col-sm-12" style="text-align: center; margin-top:50px;">\r\n						<button class="btn btn-sm btn-danger T-cancelTransfer">\r\n							<i class="ace-icon fa fa-times "></i>\r\n							取消\r\n						</button>\r\n						<button class="btn btn-sm btn-primary T-saveTransfer" style="margin-left: 30px">\r\n							<i class="ace-icon fa fa-check"></i>\r\n							保存\r\n						</button>\r\n					</div>\r\n				</form>\r\n			</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});