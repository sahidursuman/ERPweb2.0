/*TMODJS:{"debug":true,"version":133,"md5":"2723a9070a715088dd485b9193dc0312"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/transfer", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, lineProduct = $data.lineProduct, $each = $utils.$each, touristGroupList = $data.touristGroupList, $out = ($data.touristGroup, 
            $data.$index, "");
            return $out += '<div class="row"> <div class="col-xs-12 transferTouristMain globalAdd"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label class="pitch control-label no-padding-right">线路产品：', 
            $line = 5, $out += $escape(lineProduct.name), $out += '</label> <label class="pitch control-label no-padding-right">类别：', 
            $line = 6, $out += $escape(lineProduct.type), $out += '</label> <label class="pitch control-label no-padding-right">应用范围：', 
            $line = 7, 0 == lineProduct.customerType ? ($out += "散客", $line = 7) : ($out += "团体", 
            $line = 7), $out += '</label> <label class="pitch control-label no-padding-right">天数：', 
            $line = 8, $out += $escape(lineProduct.days), $out += '</label> <label class="pitch control-label no-padding-right">出游日期：', 
            $line = 9, $out += $escape(lineProduct.startTime), $out += '</label> <label class="pitch control-label no-padding-right">人数合计：大人', 
            $line = 10, $out += $escape(lineProduct.adultCount), $out += "小孩", $line = 10, $out += $escape(lineProduct.childCount), 
            $out += '</label> <label class="pitch control-label no-padding-right">已选人数：<span class="choosenAdultAndChildCount">大人0小孩0</span></label> </div> </form> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover all"> <thead> <tr class="bg-blur"> <th> <label class="pos-rel"> <input type="checkbox" class="ace mainCheckBox"> <span class="lbl"></span> </label> </th> <th>客户来源</th> <th>联系人</th> <th>联系电话</th> <th>人数</th> <th>客源地</th> <th>年龄</th> <th>应付</th> <th>已付</th> <th>操作</th> <th>填写状态</th> </tr> </thead> <tbody class="transferTouristGroupTbody"> ', 
            $line = 37, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 38, $out += $escape(touristGroup.id), $out += '" data-entity-adultCount="', 
                $line = 38, $out += $escape(touristGroup.adultCount), $out += '" data-entity-childCount="', 
                $line = 38, $out += $escape(touristGroup.childCount), $out += '"> <td> <label class="pos-rel"> <input type="checkbox" class="ace transferCheckBox" /> <span class="lbl"></span> </label> </td> <td>', 
                $line = 45, null != touristGroup.partnerAgency && ($line = 45, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
                $line = 45), $out += "</td> <td>", $line = 46, null != touristGroup.contactMember && ($line = 46, 
                $out += $escape(touristGroup.contactMember.name), $line = 46), $out += "</td> <td>", 
                $line = 47, null != touristGroup.contactMember && ($line = 47, $out += $escape(touristGroup.contactMember.mobileNumber), 
                $line = 47), $out += '</td> <td><span class="viewTouristGroup_transfer" data-entity-id="', 
                $line = 48, $out += $escape(touristGroup.id), $out += '" style="color:blue;text-decoration: underline; cursor:pointer;">大人', 
                $line = 48, $out += $escape(touristGroup.adultCount), $out += "小孩", $line = 48, 
                $out += $escape(touristGroup.childCount), $out += "</span></td> <td>", $line = 49, 
                $out += $escape(touristGroup.areaData), $out += "</td> <td>", $line = 50, $out += $escape(touristGroup.ageData), 
                $out += '</td> <td><label name="label_needPay">', $line = 51, $out += $escape(touristGroup.transNeedPayAllMoney), 
                $out += '</label></td> <td><label name="label_payed">', $line = 52, $out += $escape(touristGroup.transPayedMoney), 
                $out += '</label></td> <td> <a class="cursor editFee"> 填写费用 </a> </td> <td>', $line = 58, 
                1 == touristGroup.transferFeeStatus ? ($out += ' <i class ="ace-icon fa fa-check red"></i> 已填写 ', 
                $line = 61) : ($out += ' <i class ="ace-icon fa fa-times green"></i> 未填写 ', $line = 64), 
                $out += " </td> </tr> ", $line = 67;
            }), $out += ' </tbody> </table> <div style="color:RGB(184,70,53);" class="pull-right">(*提示：转客操作需填写费用信息)</div> <form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> <div class="form-group col-sm-12" style="text-align: center;"> <label class="control-label no-padding-right">同行地接：</label>  <input type="text" name="toPartnerAgency" value="" class="chooseToPartnerAgency" placeholder="选择同行地接" style="width:270px;" /> <input type="hidden" name="toPartnerAgencyId" value="" /> </div> <div class="form-group col-sm-12" style="text-align: center;"> <button class="btn btn-sm btn-danger btn-cancelTransfer otherButton"> <i class="ace-icon fa fa-times "></i> 取消 </button> <button class="btn btn-sm btn-primary btn-saveTransfer otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12 transferTouristMain globalAdd">\r\n		<form class="form-horizontal" role="form" onsubmit="return false">\r\n			<div class="form-group">\r\n				<label class="pitch control-label no-padding-right">线路产品：{{lineProduct.name}}</label>\r\n				<label class="pitch control-label no-padding-right">类别：{{lineProduct.type}}</label>\r\n				<label class="pitch control-label no-padding-right">应用范围：{{if lineProduct.customerType == 0}}散客{{else}}团体{{/if}}</label>\r\n				<label class="pitch control-label no-padding-right">天数：{{lineProduct.days}}</label>\r\n				<label class="pitch control-label no-padding-right">出游日期：{{lineProduct.startTime}}</label>\r\n				<label class="pitch control-label no-padding-right">人数合计：大人{{lineProduct.adultCount}}小孩{{lineProduct.childCount}}</label>\r\n				<label class="pitch control-label no-padding-right">已选人数：<span class="choosenAdultAndChildCount">大人0小孩0</span></label>\r\n			</div>\r\n		</form>\r\n		<div class="col-xs-12">\r\n				<table class="table table-striped table-bordered table-hover all">\r\n					<thead>\r\n						<tr class="bg-blur">\r\n							<th>\r\n								<label class="pos-rel">\r\n									<input type="checkbox" class="ace mainCheckBox">\r\n									<span class="lbl"></span>\r\n								</label>\r\n							</th>\r\n							<th>客户来源</th>\r\n							<th>联系人</th>\r\n							<th>联系电话</th>\r\n							<th>人数</th>\r\n							<th>客源地</th>\r\n							<th>年龄</th>\r\n							<th>应付</th>\r\n							<th>已付</th>\r\n							<th>操作</th>\r\n							<th>填写状态</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody class="transferTouristGroupTbody">\r\n						{{each touristGroupList as touristGroup}}\r\n							<tr data-entity-id="{{touristGroup.id}}"  data-entity-adultCount="{{touristGroup.adultCount}}" data-entity-childCount="{{touristGroup.childCount}}">\r\n								<td>\r\n									<label class="pos-rel">\r\n										<input type="checkbox" class="ace transferCheckBox" />\r\n										<span class="lbl"></span>\r\n									</label>\r\n								</td>\r\n								<td>{{if touristGroup.partnerAgency != null}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n								<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n								<td>{{if touristGroup.contactMember != null}}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n								<td><span class="viewTouristGroup_transfer" data-entity-id="{{touristGroup.id}}" style="color:blue;text-decoration: underline; cursor:pointer;">大人{{touristGroup.adultCount}}小孩{{touristGroup.childCount}}</span></td>\r\n								<td>{{touristGroup.areaData}}</td>\r\n								<td>{{touristGroup.ageData}}</td>\r\n								<td><label name="label_needPay">{{touristGroup.transNeedPayAllMoney}}</label></td>\r\n								<td><label name="label_payed">{{touristGroup.transPayedMoney}}</label></td>\r\n								<td>\r\n									<a class="cursor editFee">\r\n										填写费用\r\n									</a>\r\n								</td>\r\n								<td>{{if touristGroup.transferFeeStatus == 1}}\r\n									<i class ="ace-icon fa fa-check red"></i>\r\n									已填写\r\n									{{else}}\r\n									<i class ="ace-icon fa fa-times green"></i>\r\n									未填写\r\n									{{/if}}\r\n								</td>\r\n							</tr>\r\n						{{/each}}\r\n					</tbody>\r\n				</table>\r\n			<div style="color:RGB(184,70,53);" class="pull-right">(*提示：转客操作需填写费用信息)</div>\r\n				<form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;">\r\n					<div class="form-group col-sm-12" style="text-align: center;">\r\n						<label class="control-label no-padding-right">同行地接：</label>\r\n						<!-- <select name="toPartnerAgency" style="width:270px;">\r\n							<option selected="selected" value="">未选择</option>\r\n						</select> -->\r\n						<input type="text" name="toPartnerAgency" value="" class="chooseToPartnerAgency" placeholder="选择同行地接" style="width:270px;" />\r\n						<input type="hidden" name="toPartnerAgencyId" value="" />\r\n					</div>\r\n					<div class="form-group col-sm-12" style="text-align: center;">\r\n						<button class="btn btn-sm btn-danger btn-cancelTransfer otherButton">\r\n							<i class="ace-icon fa fa-times "></i>\r\n							取消\r\n						</button>\r\n						<button class="btn btn-sm btn-primary btn-saveTransfer otherButton" style="margin-left: 30px">\r\n							<i class="ace-icon fa fa-check"></i>\r\n							保存\r\n						</button>\r\n					</div>\r\n				</form>\r\n			</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});