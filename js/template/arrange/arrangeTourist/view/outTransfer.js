/*TMODJS:{"debug":true,"version":38,"md5":"67224ca628cd667a9a18c0ee591a4775"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/outTransfer", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupJson = $data.touristGroupJson, $escape = ($data.touristGroup, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row"> <div class="col-xs-12 T-transferTouristMain globalAdd"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover all"> <thead> <tr class="bg-blur"> <th> <label class="pos-rel"> <input type="checkbox" class="ace T-CheckAllBox"> <span class="lbl"></span> </label> </th> <th>客户</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>应付</th> <th>填写状态</th> <th>操作</th> </tr> </thead> <tbody class="T-transferTouristGroup"> ', 
            $line = 25, $each(touristGroupJson, function(touristGroup) {
                $out += ' <tr data-value="', $line = 26, $out += $escape(touristGroup.id), $out += '" data-entity-adultCount="', 
                $line = 26, $out += $escape(touristGroup.adultCount), $out += '" data-entity-childCount="', 
                $line = 26, $out += $escape(touristGroup.childCount), $out += '"> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-TransferCheckBox" /> <span class="lbl"></span> </label> </td> <td>', 
                $line = 33, null != touristGroup.partnerAgency && ($line = 33, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
                $line = 33), $out += "</td> <td>", $line = 34, null != touristGroup.contactMember && ($line = 34, 
                $out += $escape(touristGroup.contactMember.name), $line = 34), $out += "</td> <td>", 
                $line = 35, null != touristGroup.contactMember && ($line = 35, $out += $escape(touristGroup.contactMember.mobileNumber), 
                $line = 35), $out += '</td> <td><span class="T-viewTouristGroup" data-entity-id="', 
                $line = 36, $out += $escape(touristGroup.id), $out += '" style="color:blue;text-decoration: underline; cursor:pointer;">大人', 
                $line = 36, $out += $escape(touristGroup.adultCount), $out += "小孩", $line = 36, 
                $out += $escape(touristGroup.childCount), $out += "</span></td> <td>", $line = 37, 
                $out += $escape(touristGroup.areaData), $out += '</td> <td class="F-float F-count">', 
                $line = 38, $out += $escape(touristGroup.ageData), $out += '</td> <td class="F-float F-money T-needPay">', 
                $line = 39, $out += $escape(touristGroup.transNeedPayAllMoney), $out += '</td> <td class="transferFeeStatus">', 
                $line = 40, 1 == touristGroup.transferFeeStatus ? ($out += ' <i class ="ace-icon fa fa-check green"></i> 已填写 ', 
                $line = 43) : ($out += ' <i class ="ace-icon fa fa-times red"></i> 未填写 ', $line = 46), 
                $out += ' </td> <td> <a class="cursor T-editFee"> 填写费用 </a> </td> </tr> ', $line = 54;
            }), $out += ' </tbody> </table> <div style="color:RGB(184,70,53);" class="pull-right">(*提示：外转操作需填写费用信息)</div> <form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> <div class="form-group col-sm-12" style="text-align: center;"> <label class="control-label no-padding-right">同行地接：</label> <input type="text" name="partnerAgencyName" value="" class="T-Chosen-partnerAgency" placeholder="选择同行地接" style="width:270px;" /> <input type="hidden" name="partnerAgencyId" value="" /> </div> <div class="form-group col-sm-12" style="text-align: center;"> <button class="btn btn-sm btn-danger T-cancelOutTransfer otherButton"> <i class="ace-icon fa fa-times "></i> 取消 </button> <button class="btn btn-sm btn-primary T-saveOutTransfer otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12 T-transferTouristMain globalAdd">\r\n		<div class="col-xs-12">\r\n				<table class="table table-striped table-bordered table-hover all">\r\n					<thead>\r\n						<tr class="bg-blur">\r\n							<th>\r\n								<label class="pos-rel">\r\n									<input type="checkbox" class="ace T-CheckAllBox">\r\n									<span class="lbl"></span>\r\n								</label>\r\n							</th>\r\n							<th>客户</th>\r\n							<th>联系人</th>\r\n							<th>联系电话</th>\r\n							<th>人数</th>\r\n							<th>客源地</th>\r\n							<th>年龄</th>\r\n							<th>应付</th>\r\n							<th>填写状态</th>\r\n							<th>操作</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody class="T-transferTouristGroup">\r\n						{{each touristGroupJson as touristGroup}}\r\n							<tr data-value="{{touristGroup.id}}"  data-entity-adultCount="{{touristGroup.adultCount}}" data-entity-childCount="{{touristGroup.childCount}}">\r\n								<td>\r\n									<label class="pos-rel">\r\n										<input type="checkbox" class="ace T-TransferCheckBox" />\r\n										<span class="lbl"></span>\r\n									</label>\r\n								</td>\r\n								<td>{{if touristGroup.partnerAgency != null}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n								<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n								<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n								<td><span class="T-viewTouristGroup" data-entity-id="{{touristGroup.id}}" style="color:blue;text-decoration: underline; cursor:pointer;">大人{{touristGroup.adultCount}}小孩{{touristGroup.childCount}}</span></td>\r\n								<td>{{touristGroup.areaData}}</td>\r\n								<td class="F-float F-count">{{touristGroup.ageData}}</td>\r\n								<td class="F-float F-money T-needPay">{{touristGroup.transNeedPayAllMoney}}</td>\r\n								<td class="transferFeeStatus">{{if touristGroup.transferFeeStatus == 1}}\r\n									<i class ="ace-icon fa fa-check green"></i>\r\n									已填写\r\n									{{else}}\r\n									<i class ="ace-icon fa fa-times red"></i>\r\n									未填写\r\n									{{/if}}\r\n								</td>\r\n								<td>\r\n									<a class="cursor T-editFee">\r\n										填写费用\r\n									</a>\r\n								</td>\r\n							</tr>\r\n						{{/each}}\r\n					</tbody>\r\n				</table>\r\n			<div style="color:RGB(184,70,53);" class="pull-right">(*提示：外转操作需填写费用信息)</div>\r\n				<form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;">\r\n					<div class="form-group col-sm-12" style="text-align: center;">\r\n						<label class="control-label no-padding-right">同行地接：</label>\r\n						<input type="text" name="partnerAgencyName" value="" class="T-Chosen-partnerAgency" placeholder="选择同行地接" style="width:270px;" />\r\n						<input type="hidden" name="partnerAgencyId" value="" />\r\n					</div>\r\n					<div class="form-group col-sm-12" style="text-align: center;">\r\n						<button class="btn btn-sm btn-danger T-cancelOutTransfer otherButton">\r\n							<i class="ace-icon fa fa-times "></i>\r\n							取消\r\n						</button>\r\n						<button class="btn btn-sm btn-primary T-saveOutTransfer otherButton" style="margin-left: 30px">\r\n							<i class="ace-icon fa fa-check"></i>\r\n							保存\r\n						</button>\r\n					</div>\r\n				</form>\r\n			</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});