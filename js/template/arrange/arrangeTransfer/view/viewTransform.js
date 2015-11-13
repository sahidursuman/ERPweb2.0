/*TMODJS:{"debug":true,"version":234,"md5":"2f9cbd76d0520027a693855d8ebc8747"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/viewTransform", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, partnerAgency = $data.partnerAgency, touristGroup = $data.touristGroup, $each = $utils.$each, lineProduct = ($data.transferFee, 
            $data.$index, $data.lineProduct), $out = ($data.transferFeeList, $data.result, $data.i, 
            "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">我社转出主体信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px"> <tr> <td class="style-myself">同行地接：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 10, $out += $escape(partnerAgency.travelAgencyName), $out += '</td> <td class="style-myself">转客备注：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 12, null != touristGroup.contactMember && ($line = 12, $out += $escape(touristGroup.contactMember.name), 
            $line = 12), $out += '</td> </tr> <tr> <td class="style-myself">应付：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 16, $out += $escape(touristGroup.transNeedPayAllMoney), $out += '</td> <td class="style-myself">已付：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" readonly="readonly" class="date-picker" colspan="3">', 
            $line = 18, $out += $escape(touristGroup.transPayedMoney), $out += " ", $line = 20, 
            1 == touristGroup.operateCurrentNeedPayMoney ? ($out += ' <label> <input type="checkbox" class="ace buyInsurance-status" checked="checked" value="', 
            $line = 22, $out += $escape(touristGroup.operateCurrentNeedPayMoney), $out += '" name="operateCurrentNeedPayMoney" disabled="disabled"> <span class="lbl"> </span> </label> ', 
            $line = 26) : ($out += ' <label style="padding-left:0px;"> <input type="checkbox" class="ace buyInsurance-status" checked="" value="', 
            $line = 29, $out += $escape(touristGroup.operateCurrentNeedPayMoney), $out += '" name="operateCurrentNeedPayMoney" disabled="disabled"> <span class="lbl"> </span> </label> ', 
            $line = 33), $out += ' <label class="control-label no-padding-right">对方现收</label> </td> </tr> </table> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">转客列表</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">转客单价</th> </tr> </thead> <tbody> <tr> <td>转客价</td> <td>大人</td> <td>', 
            $line = 66, $out += $escape(touristGroup.adultCount), $out += "</td> <td>", $line = 67, 
            $out += $escape(touristGroup.transAdultPrice), $out += "</td> </tr> <tr> <td>转客价</td> <td>小孩</td> <td>", 
            $line = 74, $out += $escape(touristGroup.childCount), $out += "</td> <td>", $line = 75, 
            $out += $escape(touristGroup.transChildPrice), $out += "</td> </tr>  ", $line = 79, 
            $each(touristGroup.touristGroupTransferFeeSet, function(transferFee) {
                $out += " ", $line = 80, null != transferFee && ($out += " <tr> <td>其他费用</td> <td>", 
                $line = 83, $out += $escape(transferFee.discribe), $out += "</td> <td>", $line = 84, 
                $out += $escape(transferFee.count), $out += "</td> <td>", $line = 85, $out += $escape(transferFee.otherPrice), 
                $out += "</td> </tr> ", $line = 87), $out += " ", $line = 88;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">线路产品信息</label> </h5> <div class="widget-body"> <div class="widget-main clearfix"> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">线路产品: </label> <div class="col-sm-2"> <input value="', 
            $line = 110, null != lineProduct.name && ($out += " ", $line = 110, $out += $escape(lineProduct.name), 
            $line = 110), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">出游日期:</label> <div class="col-sm-2"> <input value="', 
            $line = 115, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '" name="tourGroupTime" type="text" readonly="readonly" class="date-picker col-xs-12"/> </div> </div> </div> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">客户来源: </label> <div class="col-sm-2"> <input value="', 
            $line = 125, $out += $escape(touristGroup.partnerAgency.travelAgencyName), $out += '" type="text" readonly="readonly" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">同行联系人:</label> <div class="col-sm-2"> <input value="', 
            $line = 131, null != touristGroup.partnerAgencyContact && ($line = 131, $out += $escape(touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 131, $out += $escape(touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 131), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">获得方式:</label> <div class="col-sm-2"> <select name="getType" class="col-sm-12" disabled="disabled"> <option', 
            $line = 137, 1 == touristGroup.getType && ($out += ' selected="selected"', $line = 137), 
            $out += ' value="1">旅行社系统</option> <option', $line = 138, 2 == touristGroup.getType && ($out += ' selected="selected"', 
            $line = 138), $out += ' value="2">传真</option> <option', $line = 139, 3 == touristGroup.getType && ($out += ' selected="selected"', 
            $line = 139), $out += ' value="3">短信</option> <option', $line = 140, 4 == touristGroup.getType && ($out += ' selected="selected"', 
            $line = 140), $out += ' value="4">电话</option> <option', $line = 141, 5 == touristGroup.getType && ($out += ' selected="selected"', 
            $line = 141), $out += ' value="5">QQ</option> </select> </div> </div> </div> </div> </div> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">收客信息</label> </h5> <div class="search-area col-sm-12"> <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label> <div class="col-sm-1"> <input name="needPayAllMoney" value="', 
            $line = 163, $out += $escape(touristGroup.needPayAllMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-1"> <input name="payedMoney" value="', 
            $line = 168, $out += $escape(touristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">现收：</label> <div class="col-sm-1"> <input name="currentNeedPayMoney" value="', 
            $line = 173, $out += $escape(touristGroup.currentNeedPayMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> </div> <div class="search-area col-sm-12"> <label class="pull-left control-label no-padding-right">收客时的备注：</label> <div class="col-sm-5"> <input name="remark" value="', 
            $line = 179, $out += $escape(touristGroup.remark), $out += '" type="text" class="col-xs-12" readonly="readonly" /> </div> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">收客单价</th> </tr> </thead> <tbody> <tr> <td>结算价</td> <td>大人</td> <td>', 
            $line = 197, $out += $escape(touristGroup.adultCount), $out += "</td> <td>", $line = 198, 
            $out += $escape(touristGroup.adultPrice), $out += "</td> </tr> <tr> <td>结算价</td> <td>小孩</td> <td>", 
            $line = 204, $out += $escape(touristGroup.childCount), $out += "</td> <td>", $line = 205, 
            $out += $escape(touristGroup.childPrice), $out += "</td> </tr> ", $line = 208, $each(touristGroup.touristGroupFeeList, function(transferFeeList) {
                $out += " <tr> <td>", $line = 210, 0 == transferFeeList.type ? ($out += "增加", $line = 210) : ($out += "减少", 
                $line = 210), $out += "</td> <td>", $line = 211, $out += $escape(transferFeeList.describeInfo), 
                $out += "</td> <td>", $line = 212, $out += $escape(transferFeeList.count), $out += "</td> <td>", 
                $line = 213, $out += $escape(transferFeeList.price), $out += "</td> </tr> ", $line = 215;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 249, $each(touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 251, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 252, $out += $escape(result.name), $out += "</td> <td>", $line = 253, $out += $escape(result.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 255, $out += $escape(result.idCardNumber), 
                $out += "</td> <td>", $line = 256, 0 == result.isContactUser ? ($out += "否", $line = 256) : ($out += "是", 
                $line = 256), $out += "</td> </tr> ", $line = 258;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					 <label class="middle title-size">我社转出主体信息</label>\r\n				</h5>\r\n			<table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px">\r\n				<tr>\r\n					<td class="style-myself">同行地接：</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{partnerAgency.travelAgencyName}}</td>\r\n					<td class="style-myself">转客备注：</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{if touristGroup.contactMember!=null }}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n					</tr>\r\n				<tr>\r\n					<td class="style-myself">应付：</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{touristGroup.transNeedPayAllMoney}}</td>\r\n					<td class="style-myself">已付：</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px" readonly="readonly"  class="date-picker" colspan="3">{{touristGroup.transPayedMoney}}\r\n\r\n						{{if touristGroup.operateCurrentNeedPayMoney==1}}\r\n						<label>\r\n							<input  type="checkbox" class="ace buyInsurance-status" checked="checked" value="{{touristGroup.operateCurrentNeedPayMoney}}" name="operateCurrentNeedPayMoney" disabled="disabled">\r\n								<span class="lbl">\r\n								</span>\r\n						</label>\r\n						{{else}}\r\n\r\n						<label style="padding-left:0px;">\r\n							<input  type="checkbox" class="ace buyInsurance-status" checked="" value="{{touristGroup.operateCurrentNeedPayMoney}}" name="operateCurrentNeedPayMoney" disabled="disabled">\r\n								<span class="lbl">\r\n								</span>\r\n						</label>\r\n						{{/if}}\r\n						<label class="control-label no-padding-right">对方现收</label>\r\n\r\n					</td>\r\n				</tr>\r\n			</table>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<div  class="col-xs-12">	\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">转客列表</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n								<thead>\r\n							      	<tr>\r\n										<th class="th-border">类型</th>\r\n										<th class="th-border">说明</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">转客单价</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									<tr>\r\n										<td>转客价</td>\r\n										<td>大人</td>\r\n										<td>{{touristGroup.adultCount}}</td>\r\n										<td>{{touristGroup.transAdultPrice}}</td>\r\n								\r\n									</tr>\r\n									\r\n									<tr>\r\n										<td>转客价</td>\r\n										<td>小孩</td>\r\n										<td>{{touristGroup.childCount}}</td>\r\n										<td>{{touristGroup.transChildPrice}}</td>	\r\n									</tr>  \r\n									\r\n								  <!-- 其他费用 -->\r\n								  {{each touristGroup.touristGroupTransferFeeSet as transferFee}}\r\n								    {{if transferFee!=null}}\r\n								      <tr>   \r\n								            <td>其他费用</td>  \r\n								            <td>{{transferFee.discribe}}</td>\r\n								            <td>{{transferFee.count}}</td>  \r\n								            <td>{{transferFee.otherPrice}}</td>\r\n								      </tr>\r\n								      {{/if}}  \r\n								  {{/each}} 										  \r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					<label class="middle title-size">线路产品信息</label>\r\n				</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main clearfix">\r\n					<div class="form-group col-sm-12">\r\n						 <div class="search-area">  \r\n							  <label class="col-sm-1 control-label no-padding-right">线路产品: </label>\r\n							  <div class="col-sm-2">\r\n								 <input value="{{if lineProduct.name!=null}} {{lineProduct.name}}{{/if}}" type="text" readonly="readonly" class="date-picker col-xs-12"/>\r\n							  </div>\r\n							  \r\n							  <label class="col-sm-1 control-label no-padding-right">出游日期:</label>\r\n							  <div class="col-sm-2">\r\n								 <input  value="{{touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}" name="tourGroupTime" type="text" readonly="readonly"  class="date-picker col-xs-12"/>\r\n							  </div>\r\n						 </div>  \r\n					</div>  \r\n\r\n\r\n					<div class="form-group col-sm-12">\r\n						 <div class="search-area">\r\n							  <label class="col-sm-1 control-label no-padding-right">客户来源: </label>\r\n							  <div class="col-sm-2">\r\n								 <input value="{{touristGroup.partnerAgency.travelAgencyName}}" type="text" readonly="readonly" class="col-xs-12"/>\r\n							  </div>\r\n							       \r\n							  <label class="col-sm-1 control-label no-padding-right">同行联系人:</label>\r\n							  \r\n							  <div class="col-sm-2">\r\n								 <input value="{{if touristGroup.partnerAgencyContact != null}}{{touristGroup.partnerAgencyContact.contactRealname}}|{{touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n							  </div>\r\n					\r\n							  <label class="col-sm-1 control-label no-padding-right">获得方式:</label>\r\n							  <div class="col-sm-2">\r\n								 <select name="getType" class="col-sm-12" disabled="disabled">\r\n									<option{{if touristGroup.getType == 1}} selected="selected"{{/if}} value="1">旅行社系统</option>\r\n									<option{{if touristGroup.getType == 2}} selected="selected"{{/if}} value="2">传真</option>\r\n									<option{{if touristGroup.getType == 3}} selected="selected"{{/if}} value="3">短信</option>\r\n									<option{{if touristGroup.getType == 4}} selected="selected"{{/if}} value="4">电话</option>\r\n									<option{{if touristGroup.getType == 5}} selected="selected"{{/if}} value="5">QQ</option>\r\n								</select>\r\n							  </div>\r\n						 </div>\r\n					</div>\r\n					\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n <div  class="col-xs-12"> \r\n   	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px">\r\n				<div class=" ui-sortable-handle">\r\n					<h5 class="">\r\n						<label class="middle title-size">收客信息</label>\r\n					</h5>\r\n					<div class="search-area col-sm-12">\r\n						<label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label>\r\n						<div class="col-sm-1">\r\n							<input name="needPayAllMoney" value="{{touristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n						<div class="col-sm-1">\r\n							<input name="payedMoney" value="{{touristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">现收：</label>\r\n						<div class="col-sm-1">\r\n							<input name="currentNeedPayMoney" value="{{touristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n						</div>\r\n					</div>\r\n					<div class="search-area col-sm-12">\r\n						<label class="pull-left control-label no-padding-right">收客时的备注：</label>\r\n						<div class="col-sm-5">\r\n							<input name="remark" value="{{touristGroup.remark}}" type="text" class="col-xs-12" readonly="readonly" />\r\n						</div>\r\n					</div>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n								<thead>\r\n										<tr>\r\n											<th class="th-border">类型</th>\r\n											<th class="th-border">说明</th>\r\n											<th class="th-border">数量</th>\r\n											<th class="th-border">收客单价</th>\r\n										</tr>\r\n									</thead>\r\n								  <tbody>      \r\n										<tr>\r\n											<td>结算价</td>\r\n											<td>大人</td>\r\n											<td>{{touristGroup.adultCount}}</td>\r\n											<td>{{touristGroup.adultPrice}}</td>	\r\n										</tr>\r\n										\r\n										<tr>   \r\n											<td>结算价</td>\r\n											<td>小孩</td>\r\n											<td>{{touristGroup.childCount}}</td>\r\n											<td>{{touristGroup.childPrice}}</td>	\r\n										</tr>\r\n										\r\n								      {{each touristGroup.touristGroupFeeList as transferFeeList}}\r\n										<tr>\r\n											<td>{{if transferFeeList.type==0}}增加{{else}}减少{{/if}}</td>\r\n											<td>{{transferFeeList.describeInfo}}</td>\r\n											<td>{{transferFeeList.count}}</td>\r\n											<td>{{transferFeeList.price}}</td>	  \r\n										</tr>\r\n									   {{/each}}  \r\n										\r\n									</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>   \r\n\r\n<div  class="col-xs-12">\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">游客小组信息</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n									<thead>\r\n										<tr>\r\n											<th class="th-border">序号</th>\r\n											<th class="th-border">姓名</th>\r\n											<th class="th-border">联系电话</th>\r\n											<th class="th-border">证件类型</th>\r\n											<th class="th-border">证件号</th>\r\n											<th class="th-border">联系人</th>\r\n										</tr>\r\n									</thead>\r\n								  <tbody> \r\n								  {{each touristGroup.touristGroupMemberList as result i}}      \r\n										<tr>\r\n											<td>{{i+1}}</td>\r\n											<td>{{result.name}}</td>\r\n											<td>{{result.mobileNumber}}</td>\r\n											<td>身份证</td>	\r\n											<td>{{result.idCardNumber}}</td>\r\n											<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>	\r\n										</tr>\r\n								   {{/each}}\r\n									</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n \r\n \r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});