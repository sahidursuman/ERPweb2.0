/*TMODJS:{"debug":true,"version":43,"md5":"ce2317fdc2d4c8b6db49f03661a362fc"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, innerTransfer = $data.innerTransfer, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, $data.result, $data.i, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 内转信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">来源部门：</label> <div class="col-sm-2"> <input value="', 
            $line = 15, $out += $escape(innerTransfer.fromBusinessGroup.name), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">接收部门：</label> <div class="col-sm-2"> <input value="', 
            $line = 19, $out += $escape(innerTransfer.toBusinessGroup.name), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">内转备注:</label> <div class="col-sm-2"> <input value="', 
            $line = 25, $out += $escape(innerTransfer.transRemark), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">应付：</label> <div class="col-sm-2"> <input name="transNeedPayMoney" value="', 
            $line = 32, $out += $escape(innerTransfer.transNeedPayMoney), $out += '" type="text" readonly="readonly" readonly="readonly" class="date-picker col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已付：</label> <div class="col-sm-2"> <input name="transPayedMoney" value="', 
            $line = 37, $out += $escape(innerTransfer.transPayedMoney), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> ', 
            $line = 41, 1 == innerTransfer.touristGroup.operateCurrentNeedPayMoney ? ($out += ' <label> <input type="checkbox" class="ace buyInsurance-status" checked="checked" value="', 
            $line = 43, $out += $escape(innerTransfer.touristGroup.operateCurrentNeedPayMoney), 
            $out += '" name="operateCurrentNeedPayMoney" disabled="disabled"> <span class="lbl"> </span> </label> ', 
            $line = 47) : ($out += ' <label style="padding-left:0px;"> <input type="checkbox" class="ace buyInsurance-status" checked="" value="', 
            $line = 50, $out += $escape(innerTransfer.touristGroup.operateCurrentNeedPayMoney), 
            $out += '" name="operateCurrentNeedPayMoney" disabled="disabled"> <span class="lbl"> </span> </label> ', 
            $line = 54), $out += ' <label class="control-label no-padding-right">对方现收</label> </div> </div> </div> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 内转列表 </h5> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th>类型</th> <th>说明</th> <th>数量</th> <th>内转单价</th> </tr> </thead> <tbody> <tr> <td>内转价</td> <td>大人</td> <td>', 
            $line = 92, $out += $escape(innerTransfer.transAdultCount), $out += "</td> <td>", 
            $line = 93, $out += $escape(innerTransfer.transAdultPrice), $out += "</td> </tr> <tr> <td>内转价</td> <td>小孩</td> <td>", 
            $line = 100, $out += $escape(innerTransfer.transChildCount), $out += "</td> <td>", 
            $line = 101, $out += $escape(innerTransfer.transChildPrice), $out += "</td> </tr>  ", 
            $line = 105, $each(innerTransfer.innerTransferFeeSet, function(rs) {
                $out += " <tr> <td>其他费用</td> <td>", $line = 108, $out += $escape(rs.discribe), $out += "</td> <td>", 
                $line = 109, $out += $escape(rs.count), $out += "</td> <td>", $line = 110, $out += $escape(rs.price), 
                $out += "</td> </tr> ", $line = 112;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 线路产品信息 </h5> </div> <div class="widget-body"> <div class="widget-main clearfix"> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">线路产品: </label> <div class="col-sm-2"> <input value="', 
            $line = 138, null != innerTransfer.lineProduct && ($out += " ", $line = 138, $out += $escape(innerTransfer.lineProduct.name), 
            $line = 138), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">出游日期:</label> <div class="col-sm-2"> <input value="', 
            $line = 143, $out += $escape($helpers.dateFormat(innerTransfer.touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '" name="tourGroupTime" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> </div> </div> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">客户来源: </label> <div class="col-sm-2"> <input value="', 
            $line = 152, $out += $escape(innerTransfer.touristGroup.partnerAgency.travelAgencyName), 
            $out += '" type="text" readonly="readonly" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">同行联系人:</label> <div class="col-sm-2"> <input value="', 
            $line = 158, null != innerTransfer.touristGroup.partnerAgency && ($line = 158, $out += $escape(innerTransfer.touristGroup.partnerAgency.managerName), 
            $out += "|", $line = 158, $out += $escape(innerTransfer.touristGroup.partnerAgency.phoneNumber), 
            $line = 158), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">获得方式:</label> <div class="col-sm-2"> <select name="getType" class="col-sm-12" disabled="disabled"> <option', 
            $line = 164, 1 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 164), $out += ' value="1">旅行社系统</option> <option', $line = 165, 2 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 165), $out += ' value="2">传真</option> <option', $line = 166, 3 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 166), $out += ' value="3">短信</option> <option', $line = 167, 4 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 167), $out += ' value="4">电话</option> <option', $line = 168, 5 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 168), $out += ' value="5">QQ</option> </select> </div> </div> </div> </div> </div> </div> </form> </div>  <div class="form-group col-sm-12" style="margin-top:20px; "> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">应收：</label> <div class="col-sm-2"> <input name="needPayAllMoney" value="', 
            $line = 185, $out += $escape(innerTransfer.touristGroup.needPayAllMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-2"> <input name="payedMoney" value="', 
            $line = 190, $out += $escape(innerTransfer.touristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">现收：</label> <div class="col-sm-2"> <input name="currentNeedPayMoney" value="', 
            $line = 195, $out += $escape(innerTransfer.touristGroup.currentNeedPayMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">收客时的备注:</label> <div class="col-sm-2"> <input name="remark" value="', 
            $line = 200, $out += $escape(innerTransfer.touristGroup.remark), $out += '" type="text" class="col-xs-12" readonly="readonly" /> </div> </div> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 收客信息 </h5> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th>类型</th> <th>说明</th> <th>数量</th> <th>收客单价</th> </tr> </thead> <tbody> <tr> <td>结算价</td> <td>大人</td> <td>', 
            $line = 233, $out += $escape(innerTransfer.touristGroup.adultCount), $out += "</td> <td>", 
            $line = 234, $out += $escape(innerTransfer.touristGroup.adultPrice), $out += "</td> </tr> <tr> <td>结算价</td> <td>小孩</td> <td>", 
            $line = 240, $out += $escape(innerTransfer.touristGroup.childCount), $out += "</td> <td>", 
            $line = 241, $out += $escape(innerTransfer.touristGroup.childPrice), $out += "</td> </tr> ", 
            $line = 244, $each(innerTransfer.touristGroup.touristGroupFeeList, function(rs) {
                $out += " <tr> <td>", $line = 246, 0 == rs.type ? ($out += "增加", $line = 246) : ($out += "减少", 
                $line = 246), $out += "</td> <td>", $line = 247, $out += $escape(rs.describeInfo), 
                $out += "</td> <td>", $line = 248, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 249, $out += $escape(rs.price), $out += "</td> </tr> ", $line = 251;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div>  <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 游客小组信息 </h5> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th>序号</th> <th>姓名</th> <th>联系电话</th> <th>证件类型</th> <th>证件号</th> <th>联系人</th> </tr> </thead> <tbody> ', 
            $line = 290, $each(innerTransfer.touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 292, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 293, $out += $escape(result.name), $out += "</td> <td>", $line = 294, $out += $escape(result.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 296, $out += $escape(result.idCardNumber), 
                $out += "</td> <td>", $line = 297, 0 == result.isContactUser ? ($out += "否", $line = 297) : ($out += "是", 
                $line = 297), $out += "</td> </tr> ", $line = 299;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px">\r\n		<div class="widget-box ui-sortable-handle">\r\n			<div class="widget-header">\r\n				<h5 class="widget-title">\r\n					<i class="ace-icon fa fa-building"></i>\r\n					 内转信息\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">来源部门：</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{innerTransfer.fromBusinessGroup.name}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">接收部门：</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{innerTransfer.toBusinessGroup.name}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">内转备注:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{innerTransfer.transRemark}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n					</div>\r\n\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">应付：</label>\r\n						<div class="col-sm-2">\r\n							<input name="transNeedPayMoney" value="{{innerTransfer.transNeedPayMoney}}" type="text" readonly="readonly" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">已付：</label>\r\n						<div class="col-sm-2">\r\n							<input name="transPayedMoney" value="{{innerTransfer.transPayedMoney}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n\r\n\r\n						{{if innerTransfer.touristGroup.operateCurrentNeedPayMoney==1}}\r\n							<label>\r\n								<input  type="checkbox" class="ace buyInsurance-status" checked="checked" value="{{innerTransfer.touristGroup.operateCurrentNeedPayMoney}}" name="operateCurrentNeedPayMoney" disabled="disabled">\r\n								<span class="lbl">\r\n								</span>\r\n							</label>\r\n							{{else}}\r\n\r\n							<label style="padding-left:0px;">\r\n								<input  type="checkbox" class="ace buyInsurance-status" checked="" value="{{innerTransfer.touristGroup.operateCurrentNeedPayMoney}}" name="operateCurrentNeedPayMoney" disabled="disabled">\r\n								<span class="lbl">\r\n								</span>\r\n							</label>\r\n						{{/if}}\r\n\r\n						<label class="control-label no-padding-right">对方现收</label>\r\n\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-building"></i>\r\n							内转列表\r\n						</h5>\r\n					</div>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th>类型</th>\r\n										<th>说明</th>\r\n										<th>数量</th>\r\n										<th>内转单价</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									<tr>\r\n										<td>内转价</td>\r\n										<td>大人</td>\r\n										<td>{{innerTransfer.transAdultCount}}</td>\r\n										<td>{{innerTransfer.transAdultPrice}}</td>\r\n\r\n									</tr>\r\n\r\n									<tr>\r\n										<td>内转价</td>\r\n										<td>小孩</td>\r\n										<td>{{innerTransfer.transChildCount}}</td>\r\n										<td>{{innerTransfer.transChildPrice}}</td>\r\n									</tr>\r\n\r\n									<!-- 其他费用 -->\r\n									{{each innerTransfer.innerTransferFeeSet as rs}}\r\n									<tr>\r\n										<td>其他费用</td>\r\n										<td>{{rs.discribe}}</td>\r\n										<td>{{rs.count}}</td>\r\n										<td>{{rs.price}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="widget-box ui-sortable-handle">\r\n			<div class="widget-header">\r\n				<h5 class="widget-title">\r\n					<i class="ace-icon fa fa-building"></i>\r\n					线路产品信息\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main clearfix">\r\n					<div class="form-group col-sm-12">\r\n						<div class="search-area">\r\n							<label class="col-sm-1 control-label no-padding-right">线路产品: </label>\r\n							<div class="col-sm-2">\r\n								<input value="{{if innerTransfer.lineProduct!=null}} {{innerTransfer.lineProduct.name}}{{/if}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n							</div>\r\n\r\n							<label class="col-sm-1 control-label no-padding-right">出游日期:</label>\r\n							<div class="col-sm-2">\r\n								<input value="{{innerTransfer.touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}" name="tourGroupTime" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n							</div>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="form-group col-sm-12">\r\n						<div class="search-area">\r\n							<label class="col-sm-1 control-label no-padding-right">客户来源: </label>\r\n							<div class="col-sm-2">\r\n								<input value="{{innerTransfer.touristGroup.partnerAgency.travelAgencyName}}" type="text" readonly="readonly" class="col-xs-12" />\r\n							</div>\r\n\r\n							<label class="col-sm-1 control-label no-padding-right">同行联系人:</label>\r\n\r\n							<div class="col-sm-2">\r\n								<input value="{{if innerTransfer.touristGroup.partnerAgency != null}}{{innerTransfer.touristGroup.partnerAgency.managerName}}|{{innerTransfer.touristGroup.partnerAgency.phoneNumber}}{{/if}}" readonly="readonly" type="text" class="col-xs-12" />\r\n							</div>\r\n\r\n							<label class="col-sm-1 control-label no-padding-right">获得方式:</label>\r\n							<div class="col-sm-2">\r\n								<select name="getType" class="col-sm-12" disabled="disabled">\r\n									<option{{if innerTransfer.touristGroup.getType==1 }} selected="selected" {{/if}} value="1">旅行社系统</option>\r\n										<option{{if innerTransfer.touristGroup.getType==2 }} selected="selected" {{/if}} value="2">传真</option>\r\n											<option{{if innerTransfer.touristGroup.getType==3 }} selected="selected" {{/if}} value="3">短信</option>\r\n												<option{{if innerTransfer.touristGroup.getType==4 }} selected="selected" {{/if}} value="4">电话</option>\r\n													<option{{if innerTransfer.touristGroup.getType==5 }} selected="selected" {{/if}} value="5">QQ</option>\r\n								</select>\r\n							</div>\r\n						</div>\r\n					</div>\r\n\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<!-- 收客信息start -->\r\n<div class="form-group col-sm-12" style="margin-top:20px; ">\r\n	<div class="search-area">\r\n		<label class="col-sm-1 control-label no-padding-right">应收：</label>\r\n		<div class="col-sm-2">\r\n			<input name="needPayAllMoney" value="{{innerTransfer.touristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n		</div>\r\n\r\n		<label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n		<div class="col-sm-2">\r\n			<input name="payedMoney" value="{{innerTransfer.touristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n		</div>\r\n\r\n		<label class="col-sm-1 control-label no-padding-right">现收：</label>\r\n		<div class="col-sm-2">\r\n			<input name="currentNeedPayMoney" value="{{innerTransfer.touristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n		</div>\r\n\r\n		<label class="col-sm-1 control-label no-padding-right">收客时的备注:</label>\r\n		<div class="col-sm-2">\r\n			<input name="remark" value="{{innerTransfer.touristGroup.remark}}" type="text" class="col-xs-12" readonly="readonly" />\r\n		</div>\r\n\r\n	</div>\r\n</div>\r\n\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-building"></i>\r\n							收客信息\r\n						</h5>\r\n					</div>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th>类型</th>\r\n										<th>说明</th>\r\n										<th>数量</th>\r\n										<th>收客单价</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>大人</td>\r\n										<td>{{innerTransfer.touristGroup.adultCount}}</td>\r\n										<td>{{innerTransfer.touristGroup.adultPrice}}</td>\r\n									</tr>\r\n\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>小孩</td>\r\n										<td>{{innerTransfer.touristGroup.childCount}}</td>\r\n										<td>{{innerTransfer.touristGroup.childPrice}}</td>\r\n									</tr>\r\n\r\n									{{each innerTransfer.touristGroup.touristGroupFeeList as rs}}\r\n									<tr>\r\n										<td>{{if rs.type==0}}增加{{else}}减少{{/if}}</td>\r\n										<td>{{rs.describeInfo}}</td>\r\n										<td>{{rs.count}}</td>\r\n										<td>{{rs.price}}</td>\r\n									</tr>\r\n									{{/each}}\r\n\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n<!-- 收客信息end -->\r\n\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-building"></i>\r\n							游客小组信息\r\n						</h5>\r\n					</div>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th>序号</th>\r\n										<th>姓名</th>\r\n										<th>联系电话</th>\r\n										<th>证件类型</th>\r\n										<th>证件号</th>\r\n										<th>联系人</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each innerTransfer.touristGroup.touristGroupMemberList as result i}}\r\n									<tr>\r\n										<td>{{i+1}}</td>\r\n										<td>{{result.name}}</td>\r\n										<td>{{result.mobileNumber}}</td>\r\n										<td>身份证</td>\r\n										<td>{{result.idCardNumber}}</td>\r\n										<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});