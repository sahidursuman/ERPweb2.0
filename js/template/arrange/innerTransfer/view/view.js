/*TMODJS:{"debug":true,"version":29,"md5":"a469cfc5bbc8c3a5c3012aa6126c363c"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, innerTransfer = $data.innerTransfer, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, $data.result, $data.i, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">内转信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">来源部门：</label> <div class="col-sm-2"> <input value="', 
            $line = 13, $out += $escape(innerTransfer.fromBusinessGroup.name), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">接收部门：</label> <div class="col-sm-2"> <input value="', 
            $line = 17, $out += $escape(innerTransfer.toBusinessGroup.name), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">内转备注:</label> <div class="col-sm-2"> <input value="', 
            $line = 23, $out += $escape(innerTransfer.transRemark), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">应付：</label> <div class="col-sm-2"> <input name="transNeedPayMoney" value="', 
            $line = 30, $out += $escape(innerTransfer.transNeedPayMoney), $out += '" type="text" readonly="readonly" readonly="readonly" class="date-picker col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已付：</label> <div class="col-sm-2"> <input name="transPayedMoney" value="', 
            $line = 35, $out += $escape(innerTransfer.transPayedMoney), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> ', 
            $line = 39, 1 == innerTransfer.touristGroup.operateCurrentNeedPayMoney ? ($out += ' <label> <input type="checkbox" class="ace buyInsurance-status" checked="checked" value="', 
            $line = 41, $out += $escape(innerTransfer.touristGroup.operateCurrentNeedPayMoney), 
            $out += '" name="operateCurrentNeedPayMoney" disabled="disabled"> <span class="lbl"> </span> </label> ', 
            $line = 45) : ($out += ' <label style="padding-left:0px;"> <input type="checkbox" class="ace buyInsurance-status" checked="" value="', 
            $line = 48, $out += $escape(innerTransfer.touristGroup.operateCurrentNeedPayMoney), 
            $out += '" name="operateCurrentNeedPayMoney" disabled="disabled"> <span class="lbl"> </span> </label> ', 
            $line = 52), $out += ' <label class="control-label no-padding-right">对方现收</label> </div> </div> </div> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">内转列表</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">内转单价</th> </tr> </thead> <tbody> <tr> <td>内转价</td> <td>大人</td> <td>', 
            $line = 87, $out += $escape(innerTransfer.transAdultCount), $out += "</td> <td>", 
            $line = 88, $out += $escape(innerTransfer.transAdultPrice), $out += "</td> </tr> <tr> <td>内转价</td> <td>小孩</td> <td>", 
            $line = 95, $out += $escape(innerTransfer.transChildCount), $out += "</td> <td>", 
            $line = 96, $out += $escape(innerTransfer.transChildPrice), $out += "</td> </tr>  ", 
            $line = 100, $each(innerTransfer.innerTransferFeeSet, function(rs) {
                $out += " <tr> <td>其他费用</td> <td>", $line = 103, $out += $escape(rs.discribe), $out += "</td> <td>", 
                $line = 104, $out += $escape(rs.count), $out += "</td> <td>", $line = 105, $out += $escape(rs.price), 
                $out += "</td> </tr> ", $line = 107;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">3</span> <label class="middle title-size">线路产品信息</label> </h5> <div class="widget-body"> <div class="widget-main clearfix"> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">线路产品: </label> <div class="col-sm-2"> <input value="', 
            $line = 131, null != innerTransfer.lineProduct && ($out += " ", $line = 131, $out += $escape(innerTransfer.lineProduct.name), 
            $line = 131), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">出游日期:</label> <div class="col-sm-2"> <input value="', 
            $line = 136, $out += $escape($helpers.dateFormat(innerTransfer.touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '" name="tourGroupTime" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> </div> </div> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">客户来源: </label> <div class="col-sm-2"> <input value="', 
            $line = 145, $out += $escape(innerTransfer.touristGroup.partnerAgency.travelAgencyName), 
            $out += '" type="text" readonly="readonly" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">同行联系人:</label> <div class="col-sm-2"> <input value="', 
            $line = 151, null != innerTransfer.touristGroup.partnerAgency && ($line = 151, $out += $escape(innerTransfer.touristGroup.partnerAgency.managerName), 
            $out += "|", $line = 151, $out += $escape(innerTransfer.touristGroup.partnerAgency.phoneNumber), 
            $line = 151), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">获得方式:</label> <div class="col-sm-2"> <select name="getType" class="col-sm-12" disabled="disabled"> <option', 
            $line = 157, 1 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 157), $out += ' value="1">旅行社系统</option> <option', $line = 158, 2 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 158), $out += ' value="2">传真</option> <option', $line = 159, 3 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 159), $out += ' value="3">短信</option> <option', $line = 160, 4 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 160), $out += ' value="4">电话</option> <option', $line = 161, 5 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 161), $out += ' value="5">QQ</option> </select> </div> </div> </div> </div> </div> </div> </form> </div>  <div class="form-group col-sm-12" style="margin-top:20px; "> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">应收：</label> <div class="col-sm-2"> <input name="needPayAllMoney" value="', 
            $line = 178, $out += $escape(innerTransfer.touristGroup.needPayAllMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-2"> <input name="payedMoney" value="', 
            $line = 183, $out += $escape(innerTransfer.touristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">现收：</label> <div class="col-sm-2"> <input name="currentNeedPayMoney" value="', 
            $line = 188, $out += $escape(innerTransfer.touristGroup.currentNeedPayMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">收客时的备注:</label> <div class="col-sm-2"> <input name="remark" value="', 
            $line = 193, $out += $escape(innerTransfer.touristGroup.remark), $out += '" type="text" class="col-xs-12" readonly="readonly" /> </div> </div> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">4</span> <label class="middle title-size">收客信息</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">收客单价</th> </tr> </thead> <tbody> <tr> <td>结算价</td> <td>大人</td> <td>', 
            $line = 223, $out += $escape(innerTransfer.touristGroup.adultCount), $out += "</td> <td>", 
            $line = 224, $out += $escape(innerTransfer.touristGroup.adultPrice), $out += "</td> </tr> <tr> <td>结算价</td> <td>小孩</td> <td>", 
            $line = 229, $out += $escape(innerTransfer.touristGroup.childCount), $out += "</td> <td>", 
            $line = 230, $out += $escape(innerTransfer.touristGroup.childPrice), $out += "</td> </tr> ", 
            $line = 232, $each(innerTransfer.touristGroup.touristGroupFeeList, function(rs) {
                $out += " <tr> <td>", $line = 234, 0 == rs.type ? ($out += "增加", $line = 234) : ($out += "减少", 
                $line = 234), $out += "</td> <td>", $line = 235, $out += $escape(rs.describeInfo), 
                $out += "</td> <td>", $line = 236, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 237, $out += $escape(rs.price), $out += "</td> </tr> ", $line = 239;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div>  <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">5</span> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 274, $each(innerTransfer.touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 276, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 277, $out += $escape(result.name), $out += "</td> <td>", $line = 278, $out += $escape(result.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 280, $out += $escape(result.idCardNumber), 
                $out += "</td> <td>", $line = 281, 0 == result.isContactUser ? ($out += "否", $line = 281) : ($out += "是", 
                $line = 281), $out += "</td> </tr> ", $line = 283;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					<span class="badge badge-primary">1</span>\r\n					 <label class="middle title-size">内转信息</label>\r\n				</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">来源部门：</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{innerTransfer.fromBusinessGroup.name}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">接收部门：</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{innerTransfer.toBusinessGroup.name}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">内转备注:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{innerTransfer.transRemark}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n					</div>\r\n\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">应付：</label>\r\n						<div class="col-sm-2">\r\n							<input name="transNeedPayMoney" value="{{innerTransfer.transNeedPayMoney}}" type="text" readonly="readonly" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">已付：</label>\r\n						<div class="col-sm-2">\r\n							<input name="transPayedMoney" value="{{innerTransfer.transPayedMoney}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n\r\n\r\n						{{if innerTransfer.touristGroup.operateCurrentNeedPayMoney==1}}\r\n							<label>\r\n								<input  type="checkbox" class="ace buyInsurance-status" checked="checked" value="{{innerTransfer.touristGroup.operateCurrentNeedPayMoney}}" name="operateCurrentNeedPayMoney" disabled="disabled">\r\n								<span class="lbl">\r\n								</span>\r\n							</label>\r\n							{{else}}\r\n\r\n							<label style="padding-left:0px;">\r\n								<input  type="checkbox" class="ace buyInsurance-status" checked="" value="{{innerTransfer.touristGroup.operateCurrentNeedPayMoney}}" name="operateCurrentNeedPayMoney" disabled="disabled">\r\n								<span class="lbl">\r\n								</span>\r\n							</label>\r\n						{{/if}}\r\n\r\n						<label class="control-label no-padding-right">对方现收</label>\r\n\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">2</span>\r\n							<label class="middle title-size">内转列表</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">类型</th>\r\n										<th class="th-border">说明</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">内转单价</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									<tr>\r\n										<td>内转价</td>\r\n										<td>大人</td>\r\n										<td>{{innerTransfer.transAdultCount}}</td>\r\n										<td>{{innerTransfer.transAdultPrice}}</td>\r\n\r\n									</tr>\r\n\r\n									<tr>\r\n										<td>内转价</td>\r\n										<td>小孩</td>\r\n										<td>{{innerTransfer.transChildCount}}</td>\r\n										<td>{{innerTransfer.transChildPrice}}</td>\r\n									</tr>\r\n\r\n									<!-- 其他费用 -->\r\n									{{each innerTransfer.innerTransferFeeSet as rs}}\r\n									<tr>\r\n										<td>其他费用</td>\r\n										<td>{{rs.discribe}}</td>\r\n										<td>{{rs.count}}</td>\r\n										<td>{{rs.price}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="widget-title">\r\n					<span class="badge badge-primary">3</span>\r\n					<label class="middle title-size">线路产品信息</label>\r\n				</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main clearfix">\r\n					<div class="form-group col-sm-12">\r\n						<div class="search-area">\r\n							<label class="col-sm-1 control-label no-padding-right">线路产品: </label>\r\n							<div class="col-sm-2">\r\n								<input value="{{if innerTransfer.lineProduct!=null}} {{innerTransfer.lineProduct.name}}{{/if}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n							</div>\r\n\r\n							<label class="col-sm-1 control-label no-padding-right">出游日期:</label>\r\n							<div class="col-sm-2">\r\n								<input value="{{innerTransfer.touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}" name="tourGroupTime" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n							</div>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="form-group col-sm-12">\r\n						<div class="search-area">\r\n							<label class="col-sm-1 control-label no-padding-right">客户来源: </label>\r\n							<div class="col-sm-2">\r\n								<input value="{{innerTransfer.touristGroup.partnerAgency.travelAgencyName}}" type="text" readonly="readonly" class="col-xs-12" />\r\n							</div>\r\n\r\n							<label class="col-sm-1 control-label no-padding-right">同行联系人:</label>\r\n\r\n							<div class="col-sm-2">\r\n								<input value="{{if innerTransfer.touristGroup.partnerAgency != null}}{{innerTransfer.touristGroup.partnerAgency.managerName}}|{{innerTransfer.touristGroup.partnerAgency.phoneNumber}}{{/if}}" readonly="readonly" type="text" class="col-xs-12" />\r\n							</div>\r\n\r\n							<label class="col-sm-1 control-label no-padding-right">获得方式:</label>\r\n							<div class="col-sm-2">\r\n								<select name="getType" class="col-sm-12" disabled="disabled">\r\n									<option{{if innerTransfer.touristGroup.getType==1 }} selected="selected" {{/if}} value="1">旅行社系统</option>\r\n										<option{{if innerTransfer.touristGroup.getType==2 }} selected="selected" {{/if}} value="2">传真</option>\r\n											<option{{if innerTransfer.touristGroup.getType==3 }} selected="selected" {{/if}} value="3">短信</option>\r\n												<option{{if innerTransfer.touristGroup.getType==4 }} selected="selected" {{/if}} value="4">电话</option>\r\n													<option{{if innerTransfer.touristGroup.getType==5 }} selected="selected" {{/if}} value="5">QQ</option>\r\n								</select>\r\n							</div>\r\n						</div>\r\n					</div>\r\n\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<!-- 收客信息start -->\r\n<div class="form-group col-sm-12" style="margin-top:20px; ">\r\n	<div class="search-area">\r\n		<label class="col-sm-1 control-label no-padding-right">应收：</label>\r\n		<div class="col-sm-2">\r\n			<input name="needPayAllMoney" value="{{innerTransfer.touristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n		</div>\r\n\r\n		<label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n		<div class="col-sm-2">\r\n			<input name="payedMoney" value="{{innerTransfer.touristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n		</div>\r\n\r\n		<label class="col-sm-1 control-label no-padding-right">现收：</label>\r\n		<div class="col-sm-2">\r\n			<input name="currentNeedPayMoney" value="{{innerTransfer.touristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n		</div>\r\n\r\n		<label class="col-sm-1 control-label no-padding-right">收客时的备注:</label>\r\n		<div class="col-sm-2">\r\n			<input name="remark" value="{{innerTransfer.touristGroup.remark}}" type="text" class="col-xs-12" readonly="readonly" />\r\n		</div>\r\n\r\n	</div>\r\n</div>\r\n\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">4</span>\r\n							<label class="middle title-size">收客信息</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">类型</th>\r\n										<th class="th-border">说明</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">收客单价</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>大人</td>\r\n										<td>{{innerTransfer.touristGroup.adultCount}}</td>\r\n										<td>{{innerTransfer.touristGroup.adultPrice}}</td>\r\n									</tr>\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>小孩</td>\r\n										<td>{{innerTransfer.touristGroup.childCount}}</td>\r\n										<td>{{innerTransfer.touristGroup.childPrice}}</td>\r\n									</tr>\r\n									{{each innerTransfer.touristGroup.touristGroupFeeList as rs}}\r\n									<tr>\r\n										<td>{{if rs.type==0}}增加{{else}}减少{{/if}}</td>\r\n										<td>{{rs.describeInfo}}</td>\r\n										<td>{{rs.count}}</td>\r\n										<td>{{rs.price}}</td>\r\n									</tr>\r\n									{{/each}}\r\n\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n<!-- 收客信息end -->\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">5</span>\r\n							<label class="middle title-size">游客小组信息</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">序号</th>\r\n										<th class="th-border">姓名</th>\r\n										<th class="th-border">联系电话</th>\r\n										<th class="th-border">证件类型</th>\r\n										<th class="th-border">证件号</th>\r\n										<th class="th-border">联系人</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each innerTransfer.touristGroup.touristGroupMemberList as result i}}\r\n									<tr>\r\n										<td>{{i+1}}</td>\r\n										<td>{{result.name}}</td>\r\n										<td>{{result.mobileNumber}}</td>\r\n										<td>身份证</td>\r\n										<td>{{result.idCardNumber}}</td>\r\n										<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});