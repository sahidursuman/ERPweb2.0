/*TMODJS:{"debug":true,"version":79,"md5":"e09e2656ff97aaa0dd1f1eae5dc6a1ae"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/viewTransformIn", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, partnerAgency = $data.partnerAgency, touristGroup = $data.touristGroup, lineProduct = $data.lineProduct, $each = $utils.$each, $out = ($data.result, 
            $data.i, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 同行转入主体信息 </h5> </div> <div class="widget-body"> <div class="widget-main clearfix"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">同行地接：</label> <div class="col-sm-2"> <input value="', 
            $line = 15, $out += $escape(partnerAgency.travelAgencyName), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">联系人:</label> <div class="col-sm-2"> <input value="', 
            $line = 22, null != touristGroup.contactMember && ($line = 22, $out += $escape(touristGroup.contactMember.name), 
            $line = 22), $out += '" type="text" readonly="readonly" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">联系电话:</label> <div class="col-sm-2"> <input value="', 
            $line = 27, null != touristGroup.contactMember && ($line = 27, $out += $escape(touristGroup.contactMember.mobileNumber), 
            $line = 27), $out += '" type="text" readonly="readonly" class="col-xs-12"/> </div> </div> <div class="form-group"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">线路产品: </label> <div class="col-sm-2"> <input value="', 
            $line = 36, null != lineProduct.name && ($out += " ", $line = 36, $out += $escape(lineProduct.name), 
            $line = 36), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">出游日期:</label> <div class="col-sm-2"> <input value="', 
            $line = 41, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '" type="text" readonly="readonly" class="date-picker col-xs-12"/> </div> </div> </div> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 游客小组信息 </h5> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th>序号</th> <th>姓名</th> <th>联系电话</th> <th>证件类型</th> <th>证件号</th> <th>联系人</th> </tr> </thead> <tbody> ', 
            $line = 73, $each(touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 75, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 76, $out += $escape(result.name), $out += "</td> <td>", $line = 77, $out += $escape(result.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 79, $out += $escape(result.idCardNumber), 
                $out += "</td> <td>", $line = 80, 0 == result.isContactUser ? ($out += "否", $line = 80) : ($out += "是", 
                $line = 80), $out += "</td> </tr> ", $line = 82;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </div> </div> </div> </form> </div> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px">\r\n		<div class="widget-box ui-sortable-handle">\r\n			<div class="widget-header">\r\n				<h5 class="widget-title">\r\n					<i class="ace-icon fa fa-building"></i>\r\n					 同行转入主体信息\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main clearfix">\r\n						<div class="form-group">\r\n						  <label class="col-sm-1 control-label no-padding-right">同行地接：</label>\r\n						  <div class="col-sm-2">\r\n							 <input value="{{partnerAgency.travelAgencyName}}" type="text" readonly="readonly" class="date-picker col-xs-12"/>\r\n						  </div>\r\n						\r\n						  \r\n						  \r\n						  <label class="col-sm-1 control-label no-padding-right">联系人:</label>\r\n						  <div class="col-sm-2">\r\n							 <input  value="{{if touristGroup.contactMember!=null }}{{touristGroup.contactMember.name}}{{/if}}" type="text" readonly="readonly"  class="col-xs-12"/>\r\n						  </div>\r\n						  \r\n						  <label class="col-sm-1 control-label no-padding-right">联系电话:</label>\r\n						  <div class="col-sm-2">\r\n							 <input  value="{{if touristGroup.contactMember!=null }}{{touristGroup.contactMember.mobileNumber}}{{/if}}" type="text" readonly="readonly"  class="col-xs-12"/>\r\n						  </div>\r\n						</div>  \r\n						  \r\n						  \r\n					    <div class="form-group">\r\n							 <div class="search-area">\r\n								  <label class="col-sm-1 control-label no-padding-right">线路产品: </label>\r\n								  <div class="col-sm-2">\r\n									 <input value="{{if lineProduct.name!=null}} {{lineProduct.name}}{{/if}}" type="text" readonly="readonly" class="date-picker col-xs-12"/>\r\n								  </div>\r\n								  \r\n								  <label class="col-sm-1 control-label no-padding-right">出游日期:</label>\r\n								  <div class="col-sm-2">\r\n									 <input  value="{{touristGroup.startTime  | dateFormat:\'yyyy-MM-dd\'}}" type="text" readonly="readonly"  class="date-picker col-xs-12"/>\r\n								  </div>\r\n							 </div>\r\n						</div> \r\n						\r\n						\r\n						\r\n						\r\n						<div class="form-group">\r\n							<div class="col-xs-12 col-sm-12 widget-container-col">\r\n								<div class="widget-box ui-sortable-handle">\r\n									<div class="widget-header">\r\n										<h5 class="widget-title">\r\n											<i class="ace-icon fa fa-building"></i>\r\n											游客小组信息\r\n										</h5>\r\n									</div>\r\n				\r\n									<div class="widget-body">\r\n										<div class="widget-main no-padding">\r\n											<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n												<thead>\r\n													<tr>\r\n														<th>序号</th>\r\n														<th>姓名</th>\r\n														<th>联系电话</th>\r\n														<th>证件类型</th>\r\n														<th>证件号</th>\r\n														<th>联系人</th>\r\n													</tr>\r\n												</thead>\r\n												<tbody> \r\n												  {{each touristGroup.touristGroupMemberList as result i}}      \r\n														<tr>\r\n															<td>{{i+1}}</td>\r\n															<td>{{result.name}}</td>\r\n															<td>{{result.mobileNumber}}</td>\r\n															<td>身份证</td>	\r\n															<td>{{result.idCardNumber}}</td>\r\n															<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>	\r\n														</tr>\r\n												   {{/each}}\r\n												</tbody>\r\n											</table>\r\n										</div>\r\n									</div>\r\n								</div>\r\n							</div>\r\n						</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n\r\n\r\n    \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});