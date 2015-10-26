/*TMODJS:{"debug":true,"version":29,"md5":"47dc5ca2c052e7ac47e5869046482b88"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/innerTransferOutView", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, innerTransfer = $data.innerTransfer, $escape = $utils.$escape, $each = $utils.$each, $out = ($data.result, 
            $data.i, "");
            return $out += ' <div class="col-xs-12"> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <label class="middle title-size">线路产品信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">线路产品</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 11, null != innerTransfer.lineProduct && ($out += " ", $line = 11, $out += $escape(innerTransfer.lineProduct.name), 
            $line = 11), $out += '</td> <td class="style-myself CheckPlan">出游日期</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 13, $out += $escape($helpers.dateFormat(innerTransfer.touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">客户来源</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 17, $out += $escape(innerTransfer.touristGroup.partnerAgency.travelAgencyName), 
            $out += '</td> <td class="style-myself CheckPlan">同行联系人</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 19, null != innerTransfer.touristGroup.partnerAgency && ($line = 19, $out += $escape(innerTransfer.touristGroup.partnerAgencyContact.contactRealname), 
            $line = 19), $out += '</td> <td class="style-myself CheckPlan">联系人电话</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 21, null != innerTransfer.touristGroup.partnerAgency && ($line = 21, $out += $escape(innerTransfer.touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 21), $out += '</td> </tr> </table> </div> </form> </div>  <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 52, $each(innerTransfer.touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 54, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 55, $out += $escape(result.name), $out += "</td> <td>", $line = 56, $out += $escape(result.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 58, $out += $escape(result.idCardNumber), 
                $out += "</td> <td>", $line = 59, 0 == result.isContactUser ? ($out += "否", $line = 59) : ($out += "是", 
                $line = 59), $out += "</td> </tr> ", $line = 61;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n			<h5 class="widget-title">\r\n				<label class="middle title-size">线路产品信息</label>\r\n			</h5>\r\n			<table class="whereQ whereTwo" style="width: 100%">\r\n				<tr>\r\n					<td class="style-myself CheckPlan">线路产品</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{if innerTransfer.lineProduct!=null}} {{innerTransfer.lineProduct.name}}{{/if}}</td>\r\n					<td class="style-myself CheckPlan">出游日期</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{innerTransfer.touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="style-myself CheckPlan">客户来源</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{innerTransfer.touristGroup.partnerAgency.travelAgencyName}}</td>\r\n					<td class="style-myself CheckPlan">同行联系人</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{if innerTransfer.touristGroup.partnerAgency != null}}{{innerTransfer.touristGroup.partnerAgencyContact.contactRealname}}{{/if}}</td>\r\n					<td class="style-myself CheckPlan">联系人电话</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{if innerTransfer.touristGroup.partnerAgency != null}}{{innerTransfer.touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}</td>\r\n					\r\n				</tr>\r\n\r\n			</table>\r\n		</div>\r\n	</form>\r\n</div>\r\n<!-- 收客信息end -->\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">游客小组信息</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">序号</th>\r\n										<th class="th-border">姓名</th>\r\n										<th class="th-border">联系电话</th>\r\n										<th class="th-border">证件类型</th>\r\n										<th class="th-border">证件号</th>\r\n										<th class="th-border">联系人</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each innerTransfer.touristGroup.touristGroupMemberList as result i}}\r\n									<tr>\r\n										<td>{{i+1}}</td>\r\n										<td>{{result.name}}</td>\r\n										<td>{{result.mobileNumber}}</td>\r\n										<td>身份证</td>\r\n										<td>{{result.idCardNumber}}</td>\r\n										<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});