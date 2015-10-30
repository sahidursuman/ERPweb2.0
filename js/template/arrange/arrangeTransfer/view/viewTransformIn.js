/*TMODJS:{"debug":true,"version":132,"md5":"ec01e0834da76bb9d6b162b3d300bb13"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/viewTransformIn", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, fromName = $data.fromName, touristGroup = $data.touristGroup, lineProduct = $data.lineProduct, $each = $utils.$each, $out = ($data.result, 
            $data.i, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px">   <h5 class=""> <label class="middle title-size">同行转入主体信息</label> </h5>  <div class="widget-body"> <div class="widget-main clearfix"> <table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px"> <tr> <td class="style-myself">同行地接：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 14, $out += $escape(fromName), $out += '</td> <td class="style-myself">联系人：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 16, null != touristGroup.contactMember && ($line = 16, $out += $escape(touristGroup.contactMember.name), 
            $line = 16), $out += '</td> <td class="style-myself">联系电话：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 18, null != touristGroup.contactMember && ($line = 18, $out += $escape(touristGroup.contactMember.mobileNumber), 
            $line = 18), $out += '</td> </tr> <tr> <td class="style-myself">线路产品：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 22, null != lineProduct.name && ($out += " ", $line = 22, $out += $escape(lineProduct.name), 
            $line = 22), $out += '</td> <td class="style-myself">出游日期：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" readonly="readonly" class="date-picker" colspan="3">', 
            $line = 24, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> </table> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 48, $each(touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 50, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 51, $out += $escape(result.name), $out += "</td> <td>", $line = 52, $out += $escape(result.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 54, $out += $escape(result.idCardNumber), 
                $out += "</td> <td>", $line = 55, 0 == result.isContactUser ? ($out += "否", $line = 55) : ($out += "是", 
                $line = 55), $out += "</td> </tr> ", $line = 57;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </div> </div>  </form> </div> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px">\r\n		<!--<div class="widget-box ui-sortable-handle">-->\r\n			<!--<div class="widget-header">-->\r\n		<h5 class="">\r\n			<label class="middle title-size">同行转入主体信息</label>\r\n		</h5>\r\n			<!--</div>-->\r\n			<div class="widget-body">\r\n				<div class="widget-main clearfix">\r\n					<table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px">\r\n						<tr>\r\n							<td class="style-myself">同行地接：</td>\r\n							<td style="text-align: left;padding: 0px 0px 0px 10px">{{fromName}}</td>\r\n							<td class="style-myself">联系人：</td>\r\n							<td style="text-align: left;padding: 0px 0px 0px 10px">{{if touristGroup.contactMember!=null }}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n							<td class="style-myself">联系电话：</td>\r\n							<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{if touristGroup.contactMember!=null }}{{touristGroup.contactMember.mobileNumber}}{{/if}}</td>\r\n						</tr>\r\n						<tr>\r\n							<td class="style-myself">线路产品：</td>\r\n							<td style="text-align: left;padding: 0px 0px 0px 10px">{{if lineProduct.name!=null}} {{lineProduct.name}}{{/if}}</td>\r\n							<td class="style-myself">出游日期：</td>\r\n							<td style="text-align: left;padding: 0px 0px 0px 10px" readonly="readonly"  class="date-picker" colspan="3">{{touristGroup.startTime  | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n						</tr>\r\n					</table>\r\n\r\n						<div class="form-group">\r\n							<div class="col-xs-12 col-sm-12 widget-container-col">\r\n								<div class=" ui-sortable-handle">\r\n										<h5 class="widget-title">\r\n											<label class="middle title-size">游客小组信息</label>\r\n										</h5>\r\n									<div class="widget-body">\r\n										<div class="widget-main no-padding">\r\n											<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n												<thead>\r\n													<tr>\r\n														<th class="th-border">序号</th>\r\n														<th class="th-border">姓名</th>\r\n														<th class="th-border">联系电话</th>\r\n														<th class="th-border">证件类型</th>\r\n														<th class="th-border">证件号</th>\r\n														<th class="th-border">联系人</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody> \r\n												  {{each touristGroup.touristGroupMemberList as result i}}      \r\n														<tr>\r\n															<td>{{i+1}}</td>\r\n															<td>{{result.name}}</td>\r\n															<td>{{result.mobileNumber}}</td>\r\n															<td>身份证</td>	\r\n															<td>{{result.idCardNumber}}</td>\r\n															<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>	\r\n														</tr>\r\n												   {{/each}}\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n				</div>\r\n			</div>\r\n		<!--</div>-->\r\n	</form>\r\n</div>\r\n\r\n\r\n\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});