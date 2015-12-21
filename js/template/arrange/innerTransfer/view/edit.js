/*TMODJS:{"debug":true,"version":501,"md5":"c5689a3b9a83c94a445d6687c61ea644"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/edit", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, innerTransfer = $data.innerTransfer, $each = $utils.$each, businessGroup = $data.businessGroup, isParent = ($data.rs, 
            $data.$index, $data.isParent), parentTouristGroup = $data.parentTouristGroup, $out = ($data.result, 
            $data.i, "");
            return $out += '<div class="col-xs-12 inner-edit "> <form class="form-horizontal" role="form" style="margin-top:10px"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">内转信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <input type="hidden" name="id" value="', 
            $line = 11, $out += $escape(innerTransfer.id), $out += '" /> <!--<label class="col-sm-1 control-label no-padding-right">来源部门：</label> <div class="col-sm-2"> <input value="', 
            $line = 14, $out += $escape(innerTransfer.fromBusinessGroup.name), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div>--> <label class="col-sm-1 control-label no-padding-right">接收部门：</label> <div class="col-sm-2"> ', 
            $line = 18, $each(businessGroup, function(rs) {
                $out += " ", $line = 19, null != innerTransfer.toBusinessGroup && ($out += " ", 
                $line = 20, innerTransfer.toBusinessGroup.id == rs.id && ($out += ' <input value="', 
                $line = 21, $out += $escape(rs.name), $out += '" data-group-id="', $line = 21, $out += $escape(rs.id), 
                $out += '" type="text" name="businessGroup_id" class="col-xs-12" ', $line = 21, 
                2 != innerTransfer.status && ($out += 'readonly="readonly"', $line = 21), $out += "/> ", 
                $line = 22), $out += " ", $line = 23), $out += " ", $line = 24;
            }), $out += ' </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">内转备注:</label> <div class="col-sm-5"> <input value="', 
            $line = 30, $out += $escape(innerTransfer.transRemark), $out += '" type="text" name="transRemark" class="date-picker col-xs-12" maxlength="500" /> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">应付：</label> <div class="col-sm-2"> <input name="transNeedPayMoney" value="', 
            $line = 36, $out += $escape(innerTransfer.transNeedPayMoney), $out += '" maxlength="9" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已付：</label> <div class="col-sm-2"> <input name="transPayedMoney" value="', 
            $line = 41, $out += $escape(innerTransfer.transPayedMoney), $out += '" maxlength="9" type="text" class="date-picker col-xs-12" /> </div> ', 
            $line = 44, 0 == innerTransfer.touristGroup.operateCurrentNeedPayMoney ? ($out += ' <label style="padding-left:0px;"> <input type="checkbox" class="ace" disabled="disabled" value="', 
            $line = 46, $out += $escape(innerTransfer.touristGroup.operateCurrentNeedPayMoney), 
            $out += '" name="isCurrent"> <span class="lbl"> </span> <input type="hidden" name="isCurrent" value="', 
            $line = 49, $out += $escape(innerTransfer.touristGroup.operateCurrentNeedPayMoney), 
            $out += '" /> </label> ', $line = 51) : ($out += ' <label style="padding-left:0px;"> <input type="checkbox" class="ace" checked="checked" disabled="disabled" value="', 
            $line = 53, $out += $escape(innerTransfer.touristGroup.operateCurrentNeedPayMoney), 
            $out += '" name="isCurrent"> <span class="lbl"> </span> <input type="hidden" name="isCurrent" value="', 
            $line = 56, $out += $escape(innerTransfer.touristGroup.operateCurrentNeedPayMoney), 
            $out += '" /> </label> ', $line = 58), $out += ' <label class="control-label no-padding-right">对方现收</label> </div> </div> </div> </div> </form> </div> <div class="form-group col-sm-12 globalAdd"> <div class="search-area">  <div class="col-sm-8"> <button class="btn btn-sm btn-success T-transfer-addCost pull-left"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> </div>  <table class="table table-striped table-bordered table-hover addTransferCostTable"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">内转单价</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="addTransferCost"> <tr> <td>内转价</td> <td>大人</td> <td><input type="text" name="adultCount" value="', 
            $line = 95, $out += $escape(innerTransfer.transAdultCount), $out += '" readonly="readonly" class="col-sm-10 count"/></td> <td><span class="necessary pull-left col-sm-2">*</span><input type="text" name="transAdultPrice" maxlength="9" value="', 
            $line = 96, $out += $escape(innerTransfer.transAdultPrice), $out += '" class="col-sm-10 price"/></td> <td></td> </tr> <tr> <td>内转价</td> <td>小孩</td> <td><input type="text" name="transChildCount" value="', 
            $line = 103, $out += $escape(innerTransfer.transChildCount), $out += '" readonly="readonly" class="col-sm-10 count"/></td> <td><span class="necessary pull-left col-sm-2"></span><input type="text" name="transChildPrice" maxlength="9" value="', 
            $line = 104, $out += $escape(innerTransfer.transChildPrice), $out += '" class="col-sm-10 price"/></td> <td></td> </tr>  ', 
            $line = 110, $each(innerTransfer.innerTransferFeeSet, function(rs) {
                $out += " <tr data-entity-id=", $line = 111, $out += $escape(rs.id), $out += '> <td>其他费用</td> <td><input name="discribe" type="text" class="col-sm-10 no-padding-right" maxlength="100" value="', 
                $line = 113, $out += $escape(rs.discribe), $out += '" /></td> <td><input name="count" type="text" class="col-sm-10 no-padding-right count" maxlength="6" value="', 
                $line = 114, $out += $escape(rs.count), $out += '" /></td> <td><span class="necessary pull-left col-sm-2"></span><input name="price" type="text" maxlength="9" class="col-sm-10 no-padding-right price" value="', 
                $line = 115, $out += $escape(rs.price), $out += '" /></td> <td><a class="cursor T-edittransfer-delete">删除</a></td> </tr> ', 
                $line = 118;
            }), $out += ' </tbody> </table>  <div class="col-xs-12"> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">线路产品信息</label> </h5> <div class="widget-body"> <div class="widget-main clearfix"> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">线路产品: </label> <div class="col-sm-2"> <input value="', 
            $line = 136, null != innerTransfer.lineProduct && ($out += " ", $line = 136, $out += $escape(innerTransfer.lineProduct.name), 
            $line = 136), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">出游日期:</label> <div class="col-sm-2"> <input value="', 
            $line = 141, $out += $escape($helpers.dateFormat(innerTransfer.touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '" name="tourGroupTime" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> </div> </div> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">客户来源: </label> <div class="col-sm-2"> <input value="', 
            $line = 150, $out += $escape(innerTransfer.touristGroup.partnerAgency.travelAgencyName), 
            $out += '" type="text" readonly="readonly" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">同行联系人:</label> <div class="col-sm-2"> <input value="', 
            $line = 156, null != innerTransfer.touristGroup.partnerAgency && ($line = 156, $out += $escape(innerTransfer.touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 156, $out += $escape(innerTransfer.touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 156), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">获得方式:</label> <div class="col-sm-2"> <select name="getType" class="col-sm-12" disabled="disabled"> <option', 
            $line = 162, 1 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 162), $out += ' value="1">旅行社系统</option> <option', $line = 163, 2 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 163), $out += ' value="2">传真</option> <option', $line = 164, 3 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 164), $out += ' value="3">短信</option> <option', $line = 165, 4 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 165), $out += ' value="4">电话</option> <option', $line = 166, 5 == innerTransfer.touristGroup.getType && ($out += ' selected="selected" ', 
            $line = 166), $out += ' value="5">QQ</option> </select> </div> </div> </div> </div> </div> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">3</span> <label class="middle title-size">收客信息</label> </h5> ', 
            $line = 189, 1 == isParent ? ($out += ' <div class="search-area col-sm-12"> <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label> <div class="col-sm-1"> <input name="needPayAllMoney" value="', 
            $line = 193, $out += $escape(parentTouristGroup.needPayAllMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-1"> <input name="payedMoney" value="', 
            $line = 198, $out += $escape(parentTouristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">现收：</label> <div class="col-sm-1"> <input name="currentNeedPayMoney" value="', 
            $line = 203, $out += $escape(parentTouristGroup.currentNeedPayMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> </div> ', 
            $line = 207) : ($out += ' <div class="search-area col-sm-12"> <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label> <div class="col-sm-1"> <input name="needPayAllMoney" value="', 
            $line = 211, $out += $escape(innerTransfer.touristGroup.needPayAllMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-1"> <input name="payedMoney" value="', 
            $line = 216, $out += $escape(innerTransfer.touristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">现收：</label> <div class="col-sm-1"> <input name="currentNeedPayMoney" value="', 
            $line = 221, $out += $escape(innerTransfer.touristGroup.currentNeedPayMoney), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> </div> ', 
            $line = 224), $out += ' <div class="search-area col-sm-12"> <label class="pull-left control-label no-padding-right">收客时的备注：</label> <div class="col-sm-5"> <input name="remark" value="', 
            $line = 230, $out += $escape(innerTransfer.touristGroup.remark), $out += '" type="text" class="col-xs-12" readonly="readonly" /> </div> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">收客单价</th> </tr> </thead> <tbody> <tr> <td>结算价</td> <td>大人</td> <td>', 
            $line = 248, $out += $escape(innerTransfer.touristGroup.adultCount), $out += "</td> <td>", 
            $line = 249, $out += $escape(innerTransfer.touristGroup.adultPrice), $out += "</td> </tr> <tr> <td>结算价</td> <td>小孩</td> <td>", 
            $line = 255, $out += $escape(innerTransfer.touristGroup.childCount), $out += "</td> <td>", 
            $line = 256, $out += $escape(innerTransfer.touristGroup.childPrice), $out += "</td> </tr> ", 
            $line = 259, $each(innerTransfer.touristGroup.touristGroupFeeList, function(rs) {
                $out += " <tr> <td>其他费用</td> <td>", $line = 262, $out += $escape(rs.describeInfo), 
                $out += "</td> <td>", $line = 263, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 264, $out += $escape(rs.price), $out += "</td> </tr> ", $line = 266;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div>  <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">4</span> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 301, $each(innerTransfer.touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 303, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 304, $out += $escape(result.name), $out += "</td> <td>", $line = 305, $out += $escape(result.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 307, $out += $escape(result.idCardNumber), 
                $out += "</td> <td>", $line = 308, 0 == result.isContactUser ? ($out += "否", $line = 308) : ($out += "是", 
                $line = 308), $out += "</td> </tr> ", $line = 310;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> <form class="form-horizontal globalAdd" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-danger T-cancelTransfer"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-primary T-saveTransoutInfo"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 inner-edit ">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px">\r\n		<div class=" ui-sortable-handle">\r\n			<h5 class="">\r\n				<span class="badge badge-primary">1</span>\r\n				 <label class="middle title-size">内转信息</label>\r\n			</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n					    <input type="hidden" name="id" value="{{innerTransfer.id}}" />\r\n						<!--<label class="col-sm-1 control-label no-padding-right">来源部门：</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{innerTransfer.fromBusinessGroup.name}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>-->\r\n						<label class="col-sm-1 control-label no-padding-right">接收部门：</label>\r\n						<div class="col-sm-2">\r\n							{{each businessGroup as rs}}\r\n								{{if innerTransfer.toBusinessGroup!=null}}\r\n									{{if innerTransfer.toBusinessGroup.id==rs.id}}\r\n										<input  value="{{rs.name}}" data-group-id="{{rs.id}}" type="text" name="businessGroup_id" class="col-xs-12" {{if innerTransfer.status!=2}}readonly="readonly"{{/if}}/>\r\n									{{/if}}\r\n								{{/if}}\r\n							{{/each}}\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">内转备注:</label>\r\n						<div class="col-sm-5">\r\n							<input value="{{innerTransfer.transRemark}}" type="text" name="transRemark" class="date-picker col-xs-12" maxlength="500" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">应付：</label>\r\n						<div class="col-sm-2">\r\n							<input name="transNeedPayMoney" value="{{innerTransfer.transNeedPayMoney}}" maxlength="9" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">已付：</label>\r\n						<div class="col-sm-2">\r\n							<input name="transPayedMoney" value="{{innerTransfer.transPayedMoney}}" maxlength="9" type="text" class="date-picker col-xs-12" />\r\n						</div>\r\n\r\n						{{if innerTransfer.touristGroup.operateCurrentNeedPayMoney==0}}\r\n						<label style="padding-left:0px;">  \r\n							<input  type="checkbox" class="ace" disabled="disabled" value="{{innerTransfer.touristGroup.operateCurrentNeedPayMoney}}" name="isCurrent">\r\n							<span class="lbl">\r\n							</span>\r\n							<input type="hidden" name="isCurrent" value="{{innerTransfer.touristGroup.operateCurrentNeedPayMoney}}" />\r\n						</label>\r\n						{{else}}\r\n						<label style="padding-left:0px;">  \r\n							<input  type="checkbox" class="ace" checked="checked" disabled="disabled" value="{{innerTransfer.touristGroup.operateCurrentNeedPayMoney}}" name="isCurrent">\r\n							<span class="lbl">\r\n							</span>\r\n							<input type="hidden" name="isCurrent" value="{{innerTransfer.touristGroup.operateCurrentNeedPayMoney}}" />\r\n						</label>\r\n                        {{/if}}\r\n\r\n\r\n\r\n						<label class="control-label no-padding-right">对方现收</label>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n<div class="form-group col-sm-12 globalAdd">\r\n	 <div class="search-area">       \r\n		<!-- 新增费用项目 -->\r\n		<div class="col-sm-8">\r\n			<button class="btn btn-sm btn-success T-transfer-addCost pull-left">\r\n				<i class="ace-icon fa fa-plus"></i> 新增费用项\r\n			</button>\r\n		</div>\r\n	 </div>\r\n</div>\r\n	\r\n<!-- 转客列表编辑start -->		\r\n<table class="table table-striped table-bordered table-hover addTransferCostTable">\r\n	<thead>\r\n		<tr>   \r\n			<th class="th-border">类型</th>\r\n			<th class="th-border">说明</th>\r\n			<th class="th-border">数量</th>\r\n			<th class="th-border">内转单价</th>\r\n			<th class="th-border">操作</th>\r\n		</tr>\r\n	</thead>\r\n  <tbody class="addTransferCost">        \r\n		<tr>\r\n			<td>内转价</td>\r\n			<td>大人</td>\r\n			<td><input type="text" name="adultCount"  value="{{innerTransfer.transAdultCount}}" readonly="readonly" class="col-sm-10 count"/></td>\r\n			<td><span class="necessary pull-left col-sm-2">*</span><input type="text" name="transAdultPrice" maxlength="9"  value="{{innerTransfer.transAdultPrice}}"  class="col-sm-10 price"/></td>\r\n			<td></td>	\r\n		</tr>\r\n		\r\n		<tr>\r\n			<td>内转价</td>      \r\n			<td>小孩</td>\r\n			<td><input type="text" name="transChildCount" value="{{innerTransfer.transChildCount}}" readonly="readonly" class="col-sm-10 count"/></td>\r\n			<td><span class="necessary  pull-left col-sm-2"></span><input type="text" name="transChildPrice" maxlength="9" value="{{innerTransfer.transChildPrice}}"  class="col-sm-10 price"/></td>	\r\n			<td></td>\r\n		</tr>\r\n\r\n\r\n		<!-- 其他费用 -->\r\n		{{each innerTransfer.innerTransferFeeSet as rs}}\r\n			<tr data-entity-id={{rs.id}}>\r\n				<td>其他费用</td>\r\n				<td><input  name="discribe" type="text" class="col-sm-10  no-padding-right" maxlength="100" value="{{rs.discribe}}" /></td>\r\n				<td><input  name="count" type="text" class="col-sm-10  no-padding-right count" maxlength="6" value="{{rs.count}}" /></td>\r\n				<td><span class="necessary  pull-left col-sm-2"></span><input  name="price" type="text" maxlength="9" class="col-sm-10  no-padding-right price" value="{{rs.price}}" /></td>\r\n				<td><a class="cursor T-edittransfer-delete">删除</a></td>\r\n			</tr>\r\n		{{/each}}\r\n\r\n	</tbody>\r\n </table>\r\n <!-- 转客列表编辑end -->	\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					<span class="badge badge-primary">2</span>\r\n					<label class="middle title-size">线路产品信息</label>\r\n				</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main clearfix">\r\n					<div class="form-group col-sm-12">\r\n						<div class="search-area">\r\n							<label class="col-sm-1 control-label no-padding-right">线路产品: </label>\r\n							<div class="col-sm-2">\r\n								<input value="{{if innerTransfer.lineProduct!=null}} {{innerTransfer.lineProduct.name}}{{/if}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n							</div>\r\n\r\n							<label class="col-sm-1 control-label no-padding-right">出游日期:</label>\r\n							<div class="col-sm-2">\r\n								<input value="{{innerTransfer.touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}" name="tourGroupTime" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n							</div>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="form-group col-sm-12">\r\n						<div class="search-area">\r\n							<label class="col-sm-1 control-label no-padding-right">客户来源: </label>\r\n							<div class="col-sm-2">\r\n								<input value="{{innerTransfer.touristGroup.partnerAgency.travelAgencyName}}" type="text" readonly="readonly" class="col-xs-12" />\r\n							</div>\r\n\r\n							<label class="col-sm-1 control-label no-padding-right">同行联系人:</label>\r\n\r\n							<div class="col-sm-2">\r\n								<input value="{{if innerTransfer.touristGroup.partnerAgency != null}}{{innerTransfer.touristGroup.partnerAgencyContact.contactRealname}}|{{innerTransfer.touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}" readonly="readonly" type="text" class="col-xs-12" />\r\n							</div>\r\n\r\n							<label class="col-sm-1 control-label no-padding-right">获得方式:</label>\r\n							<div class="col-sm-2">\r\n								<select name="getType" class="col-sm-12" disabled="disabled">\r\n									<option{{if innerTransfer.touristGroup.getType==1 }} selected="selected" {{/if}} value="1">旅行社系统</option>\r\n									<option{{if innerTransfer.touristGroup.getType==2 }} selected="selected" {{/if}} value="2">传真</option>\r\n									<option{{if innerTransfer.touristGroup.getType==3 }} selected="selected" {{/if}} value="3">短信</option>\r\n									<option{{if innerTransfer.touristGroup.getType==4 }} selected="selected" {{/if}} value="4">电话</option>\r\n									<option{{if innerTransfer.touristGroup.getType==5 }} selected="selected" {{/if}} value="5">QQ</option>\r\n								</select>\r\n							</div>\r\n						</div>\r\n					</div>\r\n\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px">\r\n				<div class=" ui-sortable-handle">\r\n					<h5 class="widget-title">\r\n						<span class="badge badge-primary">3</span>\r\n						<label class="middle title-size">收客信息</label>\r\n					</h5>\r\n\r\n\r\n					    {{if isParent==1}}\r\n					    	<div class="search-area col-sm-12">\r\n							    <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label>\r\n								<div class="col-sm-1">\r\n									<input name="needPayAllMoney" value="{{parentTouristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n								</div>\r\n\r\n								<label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n								<div class="col-sm-1">\r\n									<input name="payedMoney" value="{{parentTouristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n				  				</div>\r\n\r\n								<label class="col-sm-1 control-label no-padding-right">现收：</label>\r\n								<div class="col-sm-1">\r\n									<input name="currentNeedPayMoney" value="{{parentTouristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n				  				</div>\r\n				  			</div>\r\n						  \r\n						   {{else}}\r\n							<div class="search-area col-sm-12">\r\n								<label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label>\r\n								<div class="col-sm-1">\r\n									<input name="needPayAllMoney" value="{{innerTransfer.touristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n								</div>\r\n\r\n								<label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n								<div class="col-sm-1">\r\n									<input name="payedMoney" value="{{innerTransfer.touristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n								</div>\r\n\r\n								<label class="col-sm-1 control-label no-padding-right">现收：</label>\r\n								<div class="col-sm-1">\r\n									<input name="currentNeedPayMoney" value="{{innerTransfer.touristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12" />\r\n								</div>\r\n							</div>\r\n						{{/if}}\r\n\r\n					\r\n					<div class="search-area col-sm-12">\r\n						<label class="pull-left control-label no-padding-right">收客时的备注：</label>\r\n						<div class="col-sm-5">\r\n							<input name="remark" value="{{innerTransfer.touristGroup.remark}}" type="text" class="col-xs-12" readonly="readonly" />\r\n						</div>\r\n					</div>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">类型</th>\r\n										<th class="th-border">说明</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">收客单价</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>大人</td>\r\n										<td>{{innerTransfer.touristGroup.adultCount}}</td>\r\n										<td>{{innerTransfer.touristGroup.adultPrice}}</td>\r\n									</tr>\r\n\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>小孩</td>\r\n										<td>{{innerTransfer.touristGroup.childCount}}</td>\r\n										<td>{{innerTransfer.touristGroup.childPrice}}</td>\r\n									</tr>\r\n\r\n									{{each innerTransfer.touristGroup.touristGroupFeeList as rs}}\r\n									<tr>\r\n										<td>其他费用</td>\r\n										<td>{{rs.describeInfo}}</td>\r\n										<td>{{rs.count}}</td>\r\n										<td>{{rs.price}}</td>\r\n									</tr>\r\n									{{/each}}\r\n\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n<!-- 收客信息end -->\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">4</span>\r\n							<label class="middle title-size">游客小组信息</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">序号</th>\r\n										<th class="th-border">姓名</th>\r\n										<th class="th-border">联系电话</th>\r\n										<th class="th-border">证件类型</th>\r\n										<th class="th-border">证件号</th>\r\n										<th class="th-border">联系人</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each innerTransfer.touristGroup.touristGroupMemberList as result i}}\r\n									<tr>\r\n										<td>{{i+1}}</td>\r\n										<td>{{result.name}}</td>\r\n										<td>{{result.mobileNumber}}</td>\r\n										<td>身份证</td>\r\n										<td>{{result.idCardNumber}}</td>\r\n										<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>\r\n									</tr>\r\n									{{/each}} \r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<form class="form-horizontal globalAdd" role="form" onsubmit="return false"> \r\n		<div class="form-group" style="text-align: center;">\r\n		    <button class="btn btn-danger T-cancelTransfer">\r\n				<i class="ace-icon fa fa-times"></i> 取消\r\n			</button> \r\n			<button class="btn btn-primary T-saveTransoutInfo">\r\n			    <i class="ace-icon fa fa-check"></i> 保存 \r\n			</button> \r\n		</div> \r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});