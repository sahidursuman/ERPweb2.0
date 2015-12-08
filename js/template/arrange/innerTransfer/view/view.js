/*TMODJS:{"debug":true,"version":6,"md5":"81d9fd042615a8d83bdd412170a71e3d"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, innerTransfer = $data.innerTransfer, $each = $utils.$each, isParent = ($data.rs, 
            $data.$index, $data.isParent), parentTouristGroup = $data.parentTouristGroup, $out = ($data.result, 
            $data.i, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">内转信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%"> <tr> <!--<td class="style-myself CheckPlan">来源部门</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 10, $out += $escape(innerTransfer.fromBusinessGroup.name), $out += '</td>--> <td class="style-myself CheckPlan">接收部门</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 12, $out += $escape(innerTransfer.toBusinessGroup.name), $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">内转备注</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">', 
            $line = 16, $out += $escape(innerTransfer.transRemark), $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">应付</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 21, $out += $escape(innerTransfer.transNeedPayMoney), $out += '</td> <td class="style-myself CheckPlan">已付</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 23, $out += $escape(innerTransfer.transPayedMoney), $out += '</td> </tr> </table> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <label class="middle title-size">线路产品信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">线路产品</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 39, null != innerTransfer.lineProduct && ($out += " ", $line = 39, $out += $escape(innerTransfer.lineProduct.name), 
            $line = 39), $out += '</td> <td class="style-myself CheckPlan">出游日期</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 41, $out += $escape($helpers.dateFormat(innerTransfer.touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">客户来源</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 45, $out += $escape(innerTransfer.fromBusinessGroup.name), $out += '</td> <td class="style-myself CheckPlan">同行联系人</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 47, null != innerTransfer.touristGroup.partnerAgency && ($line = 47, $out += $escape(innerTransfer.touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 47, $out += $escape(innerTransfer.touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 47), $out += '</td> <td class="style-myself CheckPlan">获得方式</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><select name="getType" class="col-sm-12" disabled="disabled"> <option', 
            $line = 50, 1 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 50), $out += ' value="1">旅行社系统</option> <option', $line = 51, 2 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 51), $out += ' value="2">传真</option> <option', $line = 52, 3 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 52), $out += ' value="3">短信</option> <option', $line = 53, 4 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 53), $out += ' value="4">电话</option> <option', $line = 54, 5 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 54), $out += ' value="5">QQ</option> </select></td> </tr> </table> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">内转列表</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">内转单价</th> </tr> </thead> <tbody> <tr> <td>内转价</td> <td>大人</td> <td>', 
            $line = 86, $out += $escape(innerTransfer.transAdultCount), $out += "</td> <td>", 
            $line = 87, $out += $escape(innerTransfer.transAdultPrice), $out += "</td> </tr> <tr> <td>内转价</td> <td>小孩</td> <td>", 
            $line = 94, $out += $escape(innerTransfer.transChildCount), $out += "</td> <td>", 
            $line = 95, $out += $escape(innerTransfer.transChildPrice), $out += "</td> </tr>  ", 
            $line = 99, $each(innerTransfer.innerTransferFeeSet, function(rs) {
                $out += " <tr> <td>其他费用</td> <td>", $line = 102, $out += $escape(rs.discribe), $out += "</td> <td>", 
                $line = 103, $out += $escape(rs.count), $out += "</td> <td>", $line = 104, $out += $escape(rs.price), 
                $out += "</td> </tr> ", $line = 106;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div>  <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">收客信息</label> </h5> ', 
            $line = 127, 0 == isParent ? ($out += ' <div class="search-area col-sm-12"> <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label> <div class="col-sm-1"> <input name="needPayAllMoney" value="', 
            $line = 131, $out += $escape(innerTransfer.touristGroup.needPayAllMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-1"> <input name="payedMoney" value="', 
            $line = 135, $out += $escape(innerTransfer.touristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">现收：</label> <div class="col-sm-1"> <input name="currentNeedPayMoney" value="', 
            $line = 140, $out += $escape(innerTransfer.touristGroup.currentNeedPayMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> </div> ', 
            $line = 143) : ($out += ' <div class="search-area col-sm-12"> <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label> <div class="col-sm-1"> <input name="needPayAllMoney" value="', 
            $line = 147, $out += $escape(parentTouristGroup.needPayAllMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-1"> <input name="payedMoney" value="', 
            $line = 151, $out += $escape(parentTouristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">现收：</label> <div class="col-sm-1"> <input name="currentNeedPayMoney" value="', 
            $line = 156, $out += $escape(parentTouristGroup.currentNeedPayMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> </div> ', 
            $line = 160), $out += ' <div class="search-area col-sm-12"> <label class="pull-left control-label no-padding-right">收客时的备注：</label> <div class="col-sm-5"> <input name="remark" value="', 
            $line = 165, $out += $escape(innerTransfer.touristGroup.remark), $out += '" type="text" class="col-xs-12" readonly="readonly" /> </div> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">收客单价</th> </tr> </thead> <tbody> <tr> <td>结算价</td> <td>大人</td> <td>', 
            $line = 183, $out += $escape(innerTransfer.touristGroup.adultCount), $out += "</td> <td>", 
            $line = 184, $out += $escape(innerTransfer.touristGroup.adultPrice), $out += "</td> </tr> <tr> <td>结算价</td> <td>小孩</td> <td>", 
            $line = 189, $out += $escape(innerTransfer.touristGroup.childCount), $out += "</td> <td>", 
            $line = 190, $out += $escape(innerTransfer.touristGroup.childPrice), $out += "</td> </tr> ", 
            $line = 192, $each(innerTransfer.touristGroup.touristGroupFeeList, function(rs) {
                $out += " <tr> <td>", $line = 194, 0 == rs.type ? ($out += "增加", $line = 194) : ($out += "减少", 
                $line = 194), $out += "</td> <td>", $line = 195, $out += $escape(rs.describeInfo), 
                $out += "</td> <td>", $line = 196, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 197, $out += $escape(rs.price), $out += "</td> </tr> ", $line = 199;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div>  <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 234, $each(innerTransfer.touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 236, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 237, $out += $escape(result.name), $out += "</td> <td>", $line = 238, $out += $escape(result.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 240, $out += $escape(result.idCardNumber), 
                $out += "</td> <td>", $line = 241, 0 == result.isContactUser ? ($out += "否", $line = 241) : ($out += "是", 
                $line = 241), $out += "</td> </tr> ", $line = 243;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					 <label class="middle title-size">内转信息</label>\r\n				</h5>\r\n			<table class="whereQ whereTwo" style="width: 100%">\r\n				<tr>\r\n					<!--<td class="style-myself CheckPlan">来源部门</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{innerTransfer.fromBusinessGroup.name}}</td>-->\r\n					<td class="style-myself CheckPlan">接收部门</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{innerTransfer.toBusinessGroup.name}}</td>\r\n					</tr>\r\n				<tr>\r\n					<td class="style-myself CheckPlan">内转备注</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">{{innerTransfer.transRemark}}</td>\r\n\r\n				</tr>\r\n				<tr>\r\n					<td class="style-myself CheckPlan">应付</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{innerTransfer.transNeedPayMoney}}</td>\r\n					<td class="style-myself CheckPlan">已付</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{innerTransfer.transPayedMoney}}</td>\r\n				</tr>\r\n			</table>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n			<h5 class="widget-title">\r\n				<label class="middle title-size">线路产品信息</label>\r\n			</h5>\r\n			<table class="whereQ whereTwo" style="width: 100%">\r\n				<tr>\r\n					<td class="style-myself CheckPlan">线路产品</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{if innerTransfer.lineProduct!=null}} {{innerTransfer.lineProduct.name}}{{/if}}</td>\r\n					<td class="style-myself CheckPlan">出游日期</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{innerTransfer.touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="style-myself CheckPlan">客户来源</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{innerTransfer.fromBusinessGroup.name}}</td>\r\n					<td class="style-myself CheckPlan">同行联系人</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{if innerTransfer.touristGroup.partnerAgency != null}}{{innerTransfer.touristGroup.partnerAgencyContact.contactRealname}}|{{innerTransfer.touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}</td>\r\n					<td class="style-myself CheckPlan">获得方式</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px"><select name="getType" class="col-sm-12" disabled="disabled">\r\n						<option{{if innerTransfer.touristGroup.getType==1 }} selected="selected" {{/if}} value="1">旅行社系统</option>\r\n						<option{{if innerTransfer.touristGroup.getType==2 }} selected="selected" {{/if}} value="2">传真</option>\r\n						<option{{if innerTransfer.touristGroup.getType==3 }} selected="selected" {{/if}} value="3">短信</option>\r\n						<option{{if innerTransfer.touristGroup.getType==4 }} selected="selected" {{/if}} value="4">电话</option>\r\n						<option{{if innerTransfer.touristGroup.getType==5 }} selected="selected" {{/if}} value="5">QQ</option>\r\n					</select></td>\r\n				</tr>\r\n\r\n			</table>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">内转列表</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">类型</th>\r\n										<th class="th-border">说明</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">内转单价</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									<tr>\r\n										<td>内转价</td>\r\n										<td>大人</td>\r\n										<td>{{innerTransfer.transAdultCount}}</td>\r\n										<td>{{innerTransfer.transAdultPrice}}</td>\r\n\r\n									</tr>\r\n\r\n									<tr>\r\n										<td>内转价</td>\r\n										<td>小孩</td>\r\n										<td>{{innerTransfer.transChildCount}}</td>\r\n										<td>{{innerTransfer.transChildPrice}}</td>\r\n									</tr>\r\n\r\n									<!-- 其他费用 -->\r\n									{{each innerTransfer.innerTransferFeeSet as rs}}\r\n									<tr>\r\n										<td>其他费用</td>\r\n										<td>{{rs.discribe}}</td>\r\n										<td>{{rs.count}}</td>\r\n										<td>{{rs.price}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n						\r\n<!-- 收客信息start -->\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n					<h5 class="">\r\n						<label class="middle title-size">收客信息</label>\r\n					</h5>\r\n\r\n					{{if isParent ==  0 }}\r\n					<div class="search-area col-sm-12">\r\n						<label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label>\r\n						<div class="col-sm-1">\r\n							<input name="needPayAllMoney" value="{{innerTransfer.touristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n						<div class="col-sm-1">\r\n							<input name="payedMoney" value="{{innerTransfer.touristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">现收：</label>\r\n						<div class="col-sm-1">\r\n							<input name="currentNeedPayMoney" value="{{innerTransfer.touristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n						</div>\r\n					</div>\r\n					{{else}}\r\n					<div class="search-area col-sm-12">\r\n						<label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label>\r\n						<div class="col-sm-1">\r\n							<input name="needPayAllMoney" value="{{parentTouristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n						<div class="col-sm-1">\r\n							<input name="payedMoney" value="{{parentTouristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">现收：</label>\r\n						<div class="col-sm-1">\r\n							<input name="currentNeedPayMoney" value="{{parentTouristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n						</div>\r\n					</div>\r\n\r\n					{{/if}}\r\n\r\n					<div class="search-area col-sm-12">\r\n						<label class="pull-left control-label no-padding-right">收客时的备注：</label>\r\n						<div class="col-sm-5">\r\n							<input name="remark" value="{{innerTransfer.touristGroup.remark}}" type="text" class="col-xs-12" readonly="readonly" />\r\n						</div>\r\n					</div>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">类型</th>\r\n										<th class="th-border">说明</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">收客单价</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>大人</td>\r\n										<td>{{innerTransfer.touristGroup.adultCount}}</td>\r\n										<td>{{innerTransfer.touristGroup.adultPrice}}</td>\r\n									</tr>\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>小孩</td>\r\n										<td>{{innerTransfer.touristGroup.childCount}}</td>\r\n										<td>{{innerTransfer.touristGroup.childPrice}}</td>\r\n									</tr>\r\n									{{each innerTransfer.touristGroup.touristGroupFeeList as rs}}\r\n									<tr>\r\n										<td>{{if rs.type==0}}增加{{else}}减少{{/if}}</td>\r\n										<td>{{rs.describeInfo}}</td>\r\n										<td>{{rs.count}}</td>\r\n										<td>{{rs.price}}</td>\r\n									</tr>\r\n									{{/each}}\r\n\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<!-- 收客信息end -->\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">游客小组信息</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">序号</th>\r\n										<th class="th-border">姓名</th>\r\n										<th class="th-border">联系电话</th>\r\n										<th class="th-border">证件类型</th>\r\n										<th class="th-border">证件号</th>\r\n										<th class="th-border">联系人</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each innerTransfer.touristGroup.touristGroupMemberList as result i}}\r\n									<tr>\r\n										<td>{{i+1}}</td>\r\n										<td>{{result.name}}</td>\r\n										<td>{{result.mobileNumber}}</td>\r\n										<td>身份证</td>\r\n										<td>{{result.idCardNumber}}</td>\r\n										<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});