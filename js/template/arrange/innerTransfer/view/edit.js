/*TMODJS:{"debug":true,"version":768,"md5":"cea92b0713cd6aef070a97a8ecc4eff6"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/edit", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, innerTransfer = $data.innerTransfer, $each = $utils.$each, businessGroup = $data.businessGroup, cashFlag = ($data.rs, 
            $data.$index, $data.cashFlag), isParent = $data.isParent, $string = $utils.$string, parentTouristGroup = $data.parentTouristGroup, $out = ($data.result, 
            $data.i, "");
            return $out += '<form class="inner-edit form-horizontal" role="form" style="margin-top:10px"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">内转信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <input type="hidden" name="id" value="', 
            $line = 10, $out += $escape(innerTransfer.id), $out += '" /> <!--<label class="col-sm-1 control-label no-padding-right">客户部门：</label> <div class="col-sm-2"> <input value="', 
            $line = 13, $out += $escape(innerTransfer.fromBusinessGroup.name), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div>--> <label class="col-sm-1 control-label no-padding-right">接收部门：</label> <div class="col-sm-2"> ', 
            $line = 17, $each(businessGroup, function(rs) {
                $out += " ", $line = 18, null != innerTransfer.toBusinessGroup && ($out += " ", 
                $line = 19, innerTransfer.toBusinessGroup.id == rs.id && ($out += ' <input value="', 
                $line = 20, $out += $escape(rs.name), $out += '" data-group-id="', $line = 20, $out += $escape(rs.id), 
                $out += '" type="text" name="businessGroup_id" class="col-xs-12" ', $line = 20, 
                2 != innerTransfer.status && ($out += 'readonly="readonly"', $line = 20), $out += "/> ", 
                $line = 21), $out += " ", $line = 22), $out += " ", $line = 23;
            }), $out += ' </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">内转备注:</label> <div class="col-sm-5"> <input value="', 
            $line = 29, $out += $escape(innerTransfer.transRemark), $out += '" type="text" name="transRemark" class="date-picker col-xs-12" maxlength="500" /> </div> </div> <div class="form-group"> <label class="col-xs-1 control-label no-padding-right">应付：</label> <div class="col-xs-1"> <input name="transNeedPayMoney" value="', 
            $line = 35, $out += $escape(innerTransfer.transNeedPayMoney), $out += '" maxlength="9" type="text" readonly="readonly" class="date-picker col-xs-12 F-float F-money" /> </div> <label class=" pull-left"> <input type="checkbox" class="ace" ', 
            $line = 39, 1 == cashFlag && ($out += 'checked="checked"', $line = 39), $out += ' name="cashFlag" /> <span class="lbl"> 对方现收</span> </label> <div class="T-cashFlag mar-l-15 pull-left ', 
            $line = 42, 0 == cashFlag && ($out += "hidden", $line = 42), $out += '"> <label class="control-label pad-l-5">对方现收金额：</label> <input name="currentNeedPayMoney" value="', 
            $line = 44, innerTransfer.touristGroup && ($line = 44, $out += $escape(innerTransfer.touristGroup.currentNeedPayMoney), 
            $line = 44), $out += '" maxlength="9" type="text" class="F-float F-money" /> </div> <div class="col-xs-1"> <input name="transPayedMoney" value="', 
            $line = 48, $out += $escape(innerTransfer.transPayedMoney), $out += '" readonly="readonly" maxlength="9" type="hidden" class="col-xs-12 F-float F-money" /> </div> </div> </div> </div> </div> </form> <div class="globalAdd"> <button class="btn btn-sm btn-success T-transfer-addCost mar-b-10"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div>  <table class="table table-striped table-bordered table-hover addTransferCostTable"> <thead> <tr> <th class="th-border" width="20%">费用项</th> <th class="th-border"><span class="necessary pull-left col-sm-2">*</span>数量</th> <th class="th-border"><span class="necessary pull-left col-sm-2">*</span>单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="addTransferCost"> ', 
            $line = 76, 1 == isParent ? ($out += "  ", $line = 78, $each(innerTransfer.innerTransferFeeSet, function(rs) {
                $out += " <tr data-entity-id=", $line = 79, $out += $escape(rs.id), $out += '> <td> <select name="type" class="col-sm-10 col-sm-offset-1" ', 
                $line = 81, 3 == rs.type && ($out += "disabled", $line = 81), $out += "> ", $line = 82, 
                $out += $string($helpers.getFeeItemType(rs.type, !0)), $out += ' </select> </td> <td><input name="count" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right count T-count T-calc F-float F-count" maxlength="6" value="', 
                $line = 85, $out += $escape(rs.count), $out += '" ', $line = 85, 3 == rs.type && ($out += "disabled", 
                $line = 85), $out += ' /></td> <td><span class="necessary pull-left col-sm-2"></span><input name="price" type="text" maxlength="9" class="col-sm-10 col-sm-offset-1 no-padding-right price T-price T-calc F-float F-money" value="', 
                $line = 86, $out += $escape(rs.price), $out += '" ', $line = 86, 3 == rs.type && ($out += "disabled", 
                $line = 86), $out += ' /></td> <td> <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-payMoney F-float F-money" /> </td> <td><input name="remark" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right" maxlength="100" value="', 
                $line = 90, $out += $escape(rs.remark), $out += '" ', $line = 90, 3 == rs.type && ($out += "disabled", 
                $line = 90), $out += ' /></td> <td><a class="cursor T-edittransfer-delete" ', $line = 91, 
                3 == rs.type && ($out += "disabled", $line = 91), $out += ">删除</a></td> </tr> ", 
                $line = 93;
            }), $out += "  ", $line = 95) : ($out += " ", $line = 97, $each(innerTransfer.innerTransferFeeSet, function(rs) {
                $out += " ", $line = 98, 3 != rs.type && ($out += " <tr data-entity-id=", $line = 99, 
                $out += $escape(rs.id), $out += '> <td> <select name="type" class="col-sm-10 col-sm-offset-1"> ', 
                $line = 102, $out += $string($helpers.getFeeItemType(rs.type, !1)), $out += ' </select> </td> <td><input name="count" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right count T-count T-calc F-float F-count" maxlength="6" value="', 
                $line = 105, $out += $escape(rs.count), $out += '"/></td> <td><span class="necessary pull-left col-sm-2"></span><input name="price" type="text" maxlength="9" class="col-sm-10 col-sm-offset-1 no-padding-right price T-price T-calc F-float F-money" value="', 
                $line = 106, $out += $escape(rs.price), $out += '" /></td> <td> <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right T-payMoney F-float F-money" /> </td> <td><input name="remark" type="text" class="col-sm-10 col-sm-offset-1 no-padding-right" maxlength="100" value="', 
                $line = 110, $out += $escape(rs.remark), $out += '"/></td> <td><a class="cursor T-edittransfer-delete">删除</a></td> </tr> ', 
                $line = 113), $out += " ", $line = 114;
            }), $out += " ", $line = 115), $out += ' </tbody> </table>  <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">线路产品信息</label> </h5> <div class="widget-body"> <div class="widget-main clearfix"> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">线路产品: </label> <div class="col-sm-2"> <input value="', 
            $line = 131, null != innerTransfer.lineProduct && ($out += " ", $line = 131, $out += $escape(innerTransfer.lineProduct.name), 
            $line = 131), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">出游日期:</label> <div class="col-sm-2"> <input value="', 
            $line = 136, $out += $escape($helpers.dateFormat(innerTransfer.touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '" name="tourGroupTime" type="text" readonly="readonly" class="date-picker col-xs-12" /> </div> </div> </div> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">客户: </label> <div class="col-sm-2"> <input value="', 
            $line = 145, $out += $escape(innerTransfer.touristGroup.partnerAgency.travelAgencyName), 
            $out += '" type="text" readonly="readonly" class="col-xs-12" /> </div> <label class="col-sm-1 control-label no-padding-right">客户联系人:</label> <div class="col-sm-2"> <input value="', 
            $line = 151, null != innerTransfer.touristGroup.partnerAgency && ($line = 151, $out += $escape(innerTransfer.touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 151, $out += $escape(innerTransfer.touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 151), $out += '" readonly="readonly" type="text" class="col-xs-12" /> </div> </div> </div> <div class="search-area col-sm-12"> <label class="pull-left control-label no-padding-right">收客备注：</label> <div class="col-sm-10"> <textarea class="form-control col-sm-12" name="remark" value="', 
            $line = 159, $out += $escape(innerTransfer.touristGroup.remark), $out += '" readonly="readonly" maxlength="1000">', 
            $line = 159, $out += $escape(innerTransfer.touristGroup.remark), $out += '</textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <span class="badge badge-primary">3</span> <label class="middle title-size">收客信息</label> </h5> <div class="search-area col-sm-12"> <label class="col-sm-1 control-label no-padding-right" style="width:84px;">本段团款：</label> <div class="col-sm-1"> <input name="needPayAllMoney" value="', 
            $line = 182, $out += $escape(parentTouristGroup.needPayAllMoney), $out += '" readonly="readonly" type="text" class="col-xs-12 F-float F-money"/> </div> </div> <!-- <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody> ', 
            $line = 201, $each(innerTransfer.touristGroup.touristGroupFeeList, function(rs) {
                $out += ' <tr> <td> <input value="', $line = 204, $out += $escape(rs.name), $out += '" readonly="readonly" type="text" name="type" class="col-sm-12"> </td> <td><span class=" F-float F-count">', 
                $line = 206, $out += $escape(rs.count), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 207, $out += $escape(rs.price), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 208, $out += $escape(rs.count * rs.price), $out += "</span></td> <td>", 
                $line = 209, $out += $escape(rs.remark), $out += "</td> </tr> ", $line = 212;
            }), $out += ' </tbody> </table> </div> </div> --> </div> </div> </div> </form>  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">4</span> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 245, $each(innerTransfer.touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 247, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 248, $out += $escape(result.name), $out += "</td> <td>", $line = 249, $out += $escape(result.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 251, $out += $escape(result.idCardNumber), 
                $out += "</td> <td>", $line = 252, 0 == result.isContactUser ? ($out += "否", $line = 252) : ($out += "是", 
                $line = 252), $out += "</td> </tr> ", $line = 254;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> <form class="form-horizontal globalAdd" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-danger T-cancelTransfer"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-primary T-saveTransoutInfo"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="inner-edit form-horizontal" role="form" style="margin-top:10px">\r\n	<div class=" ui-sortable-handle">\r\n		<h5 class="">\r\n			<span class="badge badge-primary">1</span>\r\n			 <label class="middle title-size">内转信息</label>\r\n		</h5>\r\n		<div class="widget-body">\r\n			<div class="widget-main">\r\n				<div class="form-group">\r\n				    <input type="hidden" name="id" value="{{innerTransfer.id}}" />\r\n					<!--<label class="col-sm-1 control-label no-padding-right">客户部门：</label>\r\n					<div class="col-sm-2">\r\n						<input value="{{innerTransfer.fromBusinessGroup.name}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n					</div>-->\r\n					<label class="col-sm-1 control-label no-padding-right">接收部门：</label>\r\n					<div class="col-sm-2">\r\n						{{each businessGroup as rs}}\r\n							{{if innerTransfer.toBusinessGroup!=null}}\r\n								{{if innerTransfer.toBusinessGroup.id==rs.id}}\r\n									<input  value="{{rs.name}}" data-group-id="{{rs.id}}" type="text" name="businessGroup_id" class="col-xs-12" {{if innerTransfer.status!=2}}readonly="readonly"{{/if}}/>\r\n								{{/if}}\r\n							{{/if}}\r\n						{{/each}}\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<label class="col-sm-1 control-label no-padding-right">内转备注:</label>\r\n					<div class="col-sm-5">\r\n						<input value="{{innerTransfer.transRemark}}" type="text" name="transRemark" class="date-picker col-xs-12" maxlength="500" />\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<label class="col-xs-1 control-label no-padding-right">应付：</label>\r\n					<div class="col-xs-1">\r\n						<input name="transNeedPayMoney" value="{{innerTransfer.transNeedPayMoney}}" maxlength="9" type="text" readonly="readonly" class="date-picker col-xs-12 F-float F-money" />\r\n					</div>\r\n\r\n                    <label class=" pull-left">\r\n						<input  type="checkbox" class="ace" {{if cashFlag==1}}checked="checked"{{/if}} name="cashFlag" />\r\n						<span class="lbl"> 对方现收</span>\r\n					</label>					\r\n					<div class="T-cashFlag mar-l-15 pull-left {{if cashFlag==0}}hidden{{/if}}">\r\n						<label class="control-label pad-l-5">对方现收金额：</label>\r\n						<input name="currentNeedPayMoney" value="{{if !!innerTransfer.touristGroup}}{{innerTransfer.touristGroup.currentNeedPayMoney}}{{/if}}" maxlength="9" type="text" class="F-float F-money" />\r\n					</div>\r\n\r\n					<div class="col-xs-1">\r\n						<input name="transPayedMoney" value="{{innerTransfer.transPayedMoney}}" readonly="readonly" maxlength="9" type="hidden" class="col-xs-12 F-float F-money" />\r\n					</div>\r\n\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</form>\r\n<div class="globalAdd">\r\n	<button class="btn btn-sm btn-success T-transfer-addCost mar-b-10">\r\n		<i class="ace-icon fa fa-plus"></i> 新增费用项\r\n	</button>\r\n</div>\r\n	\r\n<!-- 转客列表编辑start -->	\r\n\r\n<table class="table table-striped table-bordered table-hover addTransferCostTable">\r\n	<thead>\r\n		<tr>   \r\n			<th class="th-border" width="20%">费用项</th>\r\n			<th class="th-border"><span class="necessary pull-left col-sm-2">*</span>数量</th>\r\n			<th class="th-border"><span class="necessary pull-left col-sm-2">*</span>单价</th>\r\n			<th class="th-border">金额</th>\r\n			<th class="th-border">说明</th>\r\n			<th class="th-border">操作</th>\r\n		</tr>\r\n	</thead>\r\n  <tbody class="addTransferCost">\r\n		{{if isParent==1}}\r\n		    <!-- 其他费用中转分段显示值灰 -->\r\n			{{each innerTransfer.innerTransferFeeSet as rs}}\r\n				<tr data-entity-id={{rs.id}}>\r\n					<td>	\r\n					  <select name="type" class="col-sm-10 col-sm-offset-1" {{if rs.type==3}}disabled{{/if}}>\r\n					       {{#rs.type | getFeeItemType: true}}\r\n					  </select>\r\n					</td>\r\n					<td><input  name="count" type="text" class="col-sm-10 col-sm-offset-1  no-padding-right count  T-count T-calc F-float F-count" maxlength="6" value="{{rs.count}}" {{if rs.type==3}}disabled{{/if}} /></td>\r\n					<td><span class="necessary  pull-left col-sm-2"></span><input  name="price" type="text" maxlength="9" class="col-sm-10 col-sm-offset-1   no-padding-right  price T-price T-calc F-float F-money" value="{{rs.price}}" {{if rs.type==3}}disabled{{/if}} /></td>\r\n					<td>\r\n						<input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1  no-padding-right T-payMoney F-float F-money" />\r\n					</td>\r\n					<td><input  name="remark" type="text" class="col-sm-10 col-sm-offset-1  no-padding-right" maxlength="100" value="{{rs.remark}}" {{if rs.type==3}}disabled{{/if}} /></td>\r\n					<td><a class="cursor T-edittransfer-delete" {{if rs.type==3}}disabled{{/if}}>删除</a></td>\r\n				</tr>\r\n			{{/each}}\r\n			<!-- 其他费用中转分段显示值灰 -->\r\n			{{else}}\r\n			\r\n			{{each innerTransfer.innerTransferFeeSet as rs}}\r\n			{{if rs.type!=3}}\r\n				<tr data-entity-id={{rs.id}}>\r\n					<td>	\r\n					  <select name="type" class="col-sm-10 col-sm-offset-1">\r\n					       {{#rs.type | getFeeItemType: false}}\r\n					  </select>\r\n					</td>\r\n					<td><input  name="count" type="text" class="col-sm-10 col-sm-offset-1  no-padding-right count  T-count T-calc F-float F-count" maxlength="6" value="{{rs.count}}"/></td>\r\n					<td><span class="necessary  pull-left col-sm-2"></span><input  name="price" type="text" maxlength="9" class="col-sm-10 col-sm-offset-1   no-padding-right  price T-price T-calc F-float F-money" value="{{rs.price}}" /></td>\r\n					<td>\r\n						<input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-10 col-sm-offset-1  no-padding-right T-payMoney F-float F-money" />\r\n					</td>\r\n					<td><input  name="remark" type="text" class="col-sm-10 col-sm-offset-1  no-padding-right" maxlength="100" value="{{rs.remark}}"/></td>\r\n					<td><a class="cursor T-edittransfer-delete">删除</a></td>\r\n				</tr>\r\n			{{/if}}\r\n			{{/each}}\r\n		{{/if}}\r\n	</tbody>\r\n </table>\r\n <!-- 转客列表编辑end -->	\r\n<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<div class=" ui-sortable-handle">\r\n			<h5 class="">\r\n				<span class="badge badge-primary">2</span>\r\n				<label class="middle title-size">线路产品信息</label>\r\n			</h5>\r\n		<div class="widget-body">\r\n			<div class="widget-main clearfix">\r\n				<div class="form-group col-sm-12">\r\n					<div class="search-area">\r\n						<label class="col-sm-1 control-label no-padding-right">线路产品: </label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if innerTransfer.lineProduct!=null}} {{innerTransfer.lineProduct.name}}{{/if}}" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">出游日期:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{innerTransfer.touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}" name="tourGroupTime" type="text" readonly="readonly" class="date-picker col-xs-12" />\r\n						</div>\r\n					</div>\r\n				</div>\r\n\r\n				<div class="form-group col-sm-12">\r\n					<div class="search-area">\r\n						<label class="col-sm-1 control-label no-padding-right">客户: </label>\r\n						<div class="col-sm-2">\r\n							<input value="{{innerTransfer.touristGroup.partnerAgency.travelAgencyName}}" type="text" readonly="readonly" class="col-xs-12" />\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">客户联系人:</label>\r\n\r\n						<div class="col-sm-2">\r\n							<input value="{{if innerTransfer.touristGroup.partnerAgency != null}}{{innerTransfer.touristGroup.partnerAgencyContact.contactRealname}}|{{innerTransfer.touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}" readonly="readonly" type="text" class="col-xs-12" />\r\n						</div>\r\n					</div>\r\n				</div>\r\n\r\n				<div class="search-area col-sm-12">\r\n					<label class="pull-left control-label no-padding-right">收客备注：</label>\r\n				    <div class="col-sm-10">\r\n					    <textarea class="form-control col-sm-12" name="remark" value="{{innerTransfer.touristGroup.remark}}" readonly="readonly" maxlength="1000">{{innerTransfer.touristGroup.remark}}</textarea> \r\n				    </div>\r\n				</div>\r\n\r\n			</div>\r\n		</div>\r\n	</div>\r\n</form>\r\n\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<div class="form-group">\r\n		<div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px">\r\n			<div class=" ui-sortable-handle">\r\n				<h5 class="widget-title">\r\n					<span class="badge badge-primary">3</span>\r\n					<label class="middle title-size">收客信息</label>\r\n				</h5>\r\n\r\n\r\n				 \r\n		    	<div class="search-area col-sm-12">\r\n				    <label class="col-sm-1 control-label no-padding-right" style="width:84px;">本段团款：</label>\r\n					<div class="col-sm-1">\r\n						<input name="needPayAllMoney" value="{{parentTouristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12 F-float F-money"/>\r\n					</div>\r\n	  			</div>\r\n\r\n				\r\n				\r\n				<!-- <div class="widget-body TransferTable">\r\n					<div class="widget-main no-padding">\r\n						<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n							<thead>\r\n								<tr>\r\n									<th class="th-border">费用项</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n									<th class="th-border">金额</th>\r\n									<th class="th-border">说明</th>\r\n								</tr>\r\n							</thead>\r\n							<tbody>\r\n								{{each innerTransfer.touristGroup.touristGroupFeeList as rs}}\r\n								<tr>\r\n									<td>  \r\n									  <input value="{{rs.name}}" readonly="readonly" type="text" name="type" class="col-sm-12">\r\n							                        </td>\r\n									<td><span class=" F-float F-count">{{rs.count}}</span></td>\r\n									<td><span class=" F-float F-money">{{rs.price}}</span></td>\r\n									<td><span class=" F-float F-money">{{rs.count*rs.price}}</span></td>\r\n									<td>{{rs.remark}}</td>\r\n								\r\n								</tr>\r\n								{{/each}}\r\n				\r\n							</tbody>\r\n						</table>\r\n					</div>\r\n				</div> -->\r\n			</div>\r\n		</div>\r\n	</div>\r\n</form>\r\n<!-- 收客信息end -->\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<div class="form-group">\r\n		<div class="col-xs-12 col-sm-12 widget-container-col">\r\n			<div class=" ui-sortable-handle">\r\n					<h5 class="">\r\n						<span class="badge badge-primary">4</span>\r\n						<label class="middle title-size">游客小组信息</label>\r\n					</h5>\r\n				<div class="widget-body TransferTable">\r\n					<div class="widget-main no-padding">\r\n						<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n							<thead>\r\n								<tr>\r\n									<th class="th-border">序号</th>\r\n									<th class="th-border">姓名</th>\r\n									<th class="th-border">联系电话</th>\r\n									<th class="th-border">证件类型</th>\r\n									<th class="th-border">证件号</th>\r\n									<th class="th-border">联系人</th>\r\n								</tr>\r\n							</thead>\r\n							<tbody>\r\n								{{each innerTransfer.touristGroup.touristGroupMemberList as result i}}\r\n								<tr>\r\n									<td>{{i+1}}</td>\r\n									<td>{{result.name}}</td>\r\n									<td>{{result.mobileNumber}}</td>\r\n									<td>身份证</td>\r\n									<td>{{result.idCardNumber}}</td>\r\n									<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>\r\n								</tr>\r\n								{{/each}} \r\n							</tbody>\r\n						</table>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</form>\r\n<form class="form-horizontal globalAdd" role="form" onsubmit="return false"> \r\n	<div class="form-group" style="text-align: center;">\r\n	    <button class="btn btn-danger T-cancelTransfer">\r\n			<i class="ace-icon fa fa-times"></i> 取消\r\n		</button> \r\n		<button class="btn btn-primary T-saveTransoutInfo">\r\n		    <i class="ace-icon fa fa-check"></i> 保存 \r\n		</button> \r\n	</div> \r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});