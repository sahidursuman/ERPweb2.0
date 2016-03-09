/*TMODJS:{"debug":true,"version":28,"md5":"67834bdd3cffa734a66b9568d587a106"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeGroupTransfer/view/outTransfer", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupJson = $data.touristGroupJson, $escape = ($data.touristGroup, 
            $data.$index, $utils.$escape), group = $data.group, $out = "";
            return $out += '<div class="row"> <div class="col-xs-12 T-transferTouristMain globalAdd"> <table class="table table-striped table-bordered table-hover T-showHighLight all"> <thead> <tr class="bg-blur"> <th> <label class="pos-rel"> <input type="checkbox" class="ace T-CheckAllBox"> <span class="lbl"></span> </label> </th> <th>收客信息</th>  <th>天数</th> <th>出游日期</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>应付</th> <th>填写状态</th> <th>操作</th> </tr> </thead> <tbody class="T-transferTouristGroup"> ', 
            $line = 27, $each(touristGroupJson, function(touristGroup) {
                $out += ' <tr data-value="', $line = 28, $out += $escape(touristGroup.id), $out += '" data-entity-adultCount="', 
                $line = 28, $out += $escape(touristGroup.adultCount), $out += '" data-entity-childCount="', 
                $line = 28, $out += $escape(touristGroup.childCount), $out += '"> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-TransferCheckBox" /> <span class="lbl"></span> </label> </td> <td class="h-touristGroupInfo"> <div> <p> ', 
                $line = 38, touristGroup.orderNumber && ($out += '<span class="h-orderNumber">收客单号：', 
                $line = 38, $out += $escape(touristGroup.orderNumber), $out += "</span>", $line = 38), 
                $out += " ", $line = 39, touristGroup.lineProduct && ($out += ' <span class="h-type"> ', 
                $line = 41, 0 == touristGroup.lineProduct.customerType ? ($out += "散客 ", $line = 42) : 1 == touristGroup.lineProduct.customerType ? ($out += "团体 ", 
                $line = 43) : 2 == group.lineProduct.customerType && ($out += "转客 ", $line = 44), 
                $out += " </span> ", $line = 46), $out += " </p> </div> ", $line = 49, touristGroup.lineProduct && ($out += ' <p class="h-lineName">', 
                $line = 50, $out += $escape(touristGroup.lineProduct.name), $out += "</p> ", $line = 51), 
                $out += " ", $line = 52, touristGroup.partnerAgency && ($out += '<p class="h-agencyName">', 
                $line = 52, $out += $escape(touristGroup.partnerAgency.travelAgencyName), $out += "</p>", 
                $line = 52), $out += " </td> <td> ", $line = 55, touristGroup.lineProduct && ($out += " ", 
                $line = 56, $out += $escape(touristGroup.lineProduct.days), $out += " ", $line = 57), 
                $out += " </td> <td>", $line = 59, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 60, null != touristGroup.contactMember && ($line = 60, 
                $out += $escape(touristGroup.contactMember.name), $line = 60), $out += "</td> <td>", 
                $line = 61, null != touristGroup.contactMember && ($line = 61, $out += $escape(touristGroup.contactMember.mobileNumber), 
                $line = 61), $out += '</td> <td><span class="T-viewTouristGroup" data-entity-id="', 
                $line = 62, $out += $escape(touristGroup.id), $out += '" style="color:blue;text-decoration: underline; cursor:pointer;">大人', 
                $line = 62, $out += $escape(touristGroup.adultCount), $out += "小孩", $line = 62, 
                $out += $escape(touristGroup.childCount), $out += "</span></td> <td>", $line = 63, 
                $out += $escape(touristGroup.areaData), $out += '</td> <td class="F-float F-count">', 
                $line = 64, $out += $escape(touristGroup.ageData), $out += '</td> <td class="F-float F-money T-needPay">', 
                $line = 65, $out += $escape(touristGroup.transNeedPayAllMoney), $out += '</td> <td class="transferFeeStatus">', 
                $line = 66, 1 == touristGroup.transferFeeStatus ? ($out += ' <i class ="ace-icon fa fa-check green"></i> 已填写 ', 
                $line = 69) : ($out += ' <i class ="ace-icon fa fa-times red"></i> 未填写 ', $line = 72), 
                $out += ' </td> <td> <a class="cursor T-editFee"> 填写费用 </a> </td> </tr> ', $line = 80;
            }), $out += ' </tbody> </table> <div class="mar-t-20"> <label class="control-label no-padding-right">同行地接：</label> <input type="text" name="partnerAgencyName" value="" class="T-Chosen-partnerAgency" placeholder="选择同行地接" style="width:270px;" /> <input type="hidden" name="partnerAgencyId" value="" /> <div style="color:RGB(184,70,53);" class="pull-right">(*提示：外转操作需填写费用信息)</div> </div> <div class="text-center mar-t-20"> <button class="btn btn-sm btn-danger T-cancelOutTransfer otherButton"> <i class="ace-icon fa fa-times "></i> 取消 </button> <button class="btn btn-sm btn-primary T-saveOutTransfer otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12 T-transferTouristMain globalAdd">\r\n		<table class="table table-striped table-bordered table-hover  T-showHighLight all">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>\r\n						<label class="pos-rel">\r\n							<input type="checkbox" class="ace T-CheckAllBox">\r\n							<span class="lbl"></span>\r\n						</label>\r\n					</th>\r\n					<th>收客信息</th>\r\n					<!-- <th>客户来源</th> -->\r\n					<th>天数</th>\r\n					<th>出游日期</th>\r\n					<th>联系人</th>\r\n					<th>联系电话</th>\r\n					<th>人数</th>\r\n					<th>客源地</th>\r\n					<th>年龄</th>\r\n					<th>应付</th>\r\n					<th>填写状态</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-transferTouristGroup">\r\n				{{each touristGroupJson as touristGroup}}\r\n					<tr data-value="{{touristGroup.id}}"  data-entity-adultCount="{{touristGroup.adultCount}}" data-entity-childCount="{{touristGroup.childCount}}">\r\n						<td>\r\n							<label class="pos-rel">\r\n								<input type="checkbox" class="ace T-TransferCheckBox" />\r\n								<span class="lbl"></span>\r\n							</label>\r\n						</td>\r\n						<td class="h-touristGroupInfo">\r\n						 	<div>\r\n						 		<p>\r\n						 			{{if touristGroup.orderNumber}}<span class="h-orderNumber">收客单号：{{touristGroup.orderNumber}}</span>{{/if}}\r\n								 	{{if touristGroup.lineProduct}}\r\n									 <span class="h-type">\r\n									 	{{if touristGroup.lineProduct.customerType==0}}散客\r\n									 	{{else if touristGroup.lineProduct.customerType==1}}团体\r\n									 	{{else if group.lineProduct.customerType == 2}}转客\r\n									 	{{/if}}\r\n									 </span>\r\n							 		{{/if}}\r\n						 		</p>\r\n						 	</div>\r\n						 	{{if !!touristGroup.lineProduct}}\r\n							 <p class="h-lineName">{{touristGroup.lineProduct.name}}</p>\r\n						 	{{/if}}									\r\n						 	{{if touristGroup.partnerAgency}}<p class="h-agencyName">{{touristGroup.partnerAgency.travelAgencyName}}</p>{{/if}}\r\n   						</td>\r\n   						<td>\r\n   							{{if !!touristGroup.lineProduct}}\r\n   								{{touristGroup.lineProduct.days}}\r\n   						 	{{/if}}	\r\n   						</td>\r\n						<td>{{touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n						<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n						<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n						<td><span class="T-viewTouristGroup" data-entity-id="{{touristGroup.id}}" style="color:blue;text-decoration: underline; cursor:pointer;">大人{{touristGroup.adultCount}}小孩{{touristGroup.childCount}}</span></td>\r\n						<td>{{touristGroup.areaData}}</td>\r\n						<td class="F-float F-count">{{touristGroup.ageData}}</td>\r\n						<td class="F-float F-money T-needPay">{{touristGroup.transNeedPayAllMoney}}</td>\r\n						<td class="transferFeeStatus">{{if touristGroup.transferFeeStatus == 1}}\r\n							<i class ="ace-icon fa fa-check green"></i>\r\n							已填写\r\n							{{else}}\r\n							<i class ="ace-icon fa fa-times red"></i>\r\n							未填写\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							<a class="cursor T-editFee">\r\n								填写费用\r\n							</a>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n	\r\n		<div class="mar-t-20">\r\n			<label class="control-label no-padding-right">同行地接：</label>\r\n			<input type="text" name="partnerAgencyName" value="" class="T-Chosen-partnerAgency" placeholder="选择同行地接" style="width:270px;" />\r\n			<input type="hidden" name="partnerAgencyId" value="" />\r\n			<div style="color:RGB(184,70,53);" class="pull-right">(*提示：外转操作需填写费用信息)</div>\r\n		</div>\r\n		<div class="text-center mar-t-20">\r\n			<button class="btn btn-sm btn-danger T-cancelOutTransfer otherButton">\r\n				<i class="ace-icon fa fa-times "></i>\r\n				取消\r\n			</button>\r\n			<button class="btn btn-sm btn-primary T-saveOutTransfer otherButton" style="margin-left: 30px">\r\n				<i class="ace-icon fa fa-check"></i>\r\n				保存\r\n			</button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});