/*TMODJS:{"debug":true,"version":139,"md5":"9ac03e82a298313f256f383dbcec9e61"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/tourists/update/updateMoney", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, type = $data.type, lineData = $data.lineData, $escape = $utils.$escape, isTransfer = $data.isTransfer, dutyDepartmentName = $data.dutyDepartmentName, dutyDepartmentId = $data.dutyDepartmentId, dutyUserName = $data.dutyUserName, dutyUserId = $data.dutyUserId, transferPartnerAgency = $data.transferPartnerAgency, transferPartnerAgencyId = $data.transferPartnerAgencyId, remark = $data.remark, needPayAllMoney = $data.needPayAllMoney, preIncomeMoney = $data.preIncomeMoney, currentNeedPayMoney = $data.currentNeedPayMoney, needPayMoney = $data.needPayMoney, isInnerTransferConfirm = $data.isInnerTransferConfirm, lineFeeDel = $data.lineFeeDel, touristGroupFeeJsonDel = $data.touristGroupFeeJsonDel, touristGroupFeeJsonAdd = $data.touristGroupFeeJsonAdd, $each = $utils.$each, $string = ($data.rs, 
            $data.$index, $utils.$string), lineFee = $data.lineFee, $out = "";
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> ', $line = 3, 
            1 == type && ($out += ' <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right control-label" style="width: 88px;">线路名称</div> <div class="col-xs-5 control-label">', 
            $line = 6, lineData && ($line = 6, $out += $escape(lineData.lineProductName), $line = 6), 
            $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">天数</div> <div class="col-xs-1 control-label">', 
            $line = 8, lineData && ($line = 8, $out += $escape(lineData.days), $line = 8), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">出团日期</div> <div class="col-xs-2 control-label">', 
            $line = 10, lineData && ($line = 10, $out += $escape($helpers.dateFormat(lineData.startTime, "yyyy-MM-dd")), 
            $line = 10), $out += '</div> </div> <div class="col-xs-12 mar-t-10" style="padding-left: 35px;"> <div class="col-xs-2"> <select class="col-xs-12 T-abversion"> <option value="0">本部操作</option> <option value="1" ', 
            $line = 16, 1 == isTransfer && ($out += "selected", $line = 16), $out += '>他部操作</option> <option value="2" ', 
            $line = 17, 2 == isTransfer && ($out += "selected", $line = 17), $out += '>外转操作</option> </select> </div> <div class="col-xs-8', 
            $line = 20, 1 != isTransfer && ($out += " hidden", $line = 20), $out += ' T-internal"> <div class="col-xs-2 text-right no-padding-right control-label no-padding-left">责任部门</div> <div class="col-xs-4"> <input type="text" class="col-xs-12" name="dutyDepartmentName"', 
            $line = 23, 1 == isTransfer && ($out += ' value="', $line = 23, $out += $escape(dutyDepartmentName), 
            $out += '" data-id="', $line = 23, $out += $escape(dutyDepartmentId), $out += '"', 
            $line = 23), $out += '> </div> <div class="col-xs-2 text-right no-padding-right control-label">责任计调</div> <div class="col-xs-4"> <input type="text" class="col-xs-12" name="dutyUserName"', 
            $line = 27, 1 == isTransfer && ($out += ' value="', $line = 27, $out += $escape(dutyUserName), 
            $out += '" data-id="', $line = 27, $out += $escape(dutyUserId), $out += '"', $line = 27), 
            $out += '> </div> </div> <div class="col-xs-8', $line = 30, 2 != isTransfer && ($out += " hidden", 
            $line = 30), $out += ' T-peer"> <div class="col-xs-2 text-right no-padding-right control-label">同行</div> <div class="col-xs-4"> <input type="text" class="col-xs-12" name="transferPartnerAgency"', 
            $line = 33, 2 == isTransfer && ($out += ' value="', $line = 33, $out += $escape(transferPartnerAgency), 
            $out += '" data-id="', $line = 33, $out += $escape(transferPartnerAgencyId), $out += '"', 
            $line = 33), $out += '> </div> </div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-1 text-right no-padding-right control-label">备注</div> <div class="col-xs-10"> <input type="text" class="col-xs-12 T-replace-remark" name="remark" value="', 
            $line = 40, $out += $escape(remark), $out += '"> </div> </div> ', $line = 43), $out += ' <div class="col-xs-12 mar-t-20"> ', 
            $line = 45, 1 != type ? ($out += ' <label class="control-label pull-left" style="width: 35px;">', 
            $line = 46, 1 != type ? ($out += "应收", $line = 46) : ($out += "应付", $line = 46), 
            $out += '</label> <input type="text" readonly class="pull-left F-float F-money" name="needPayAllMoney" value="', 
            $line = 47, $out += $escape(needPayAllMoney), $out += '"> <label class="control-label pull-left" style="width: 70px; padding-left: 24px;">预收款</label> <input type="text" class="pull-left F-float F-money" name="preIncomeMoney" value="', 
            $line = 49, $out += $escape(preIncomeMoney), $out += '"> <label class="control-label pull-left" style="width: 70px; padding-left: 12px;">现收团款</label> <input type="text" class="pull-left F-float F-money" name="currentNeedPayMoney" value="', 
            $line = 51, $out += $escape(currentNeedPayMoney), $out += '"> ', $line = 52) : ($out += ' <div class="col-xs-1 text-right no-padding-right control-label">应付</div> <div class="col-xs-3"> <input type="text" readonly class="pull-left F-float F-money" name="needPayAllMoney" value="', 
            $line = 55, $out += $escape(needPayAllMoney), $out += '"> </div> <div class="col-xs-1 text-right no-padding-right control-label">现收团款</div> <div class="col-xs-1 control-label F-float">', 
            $line = 58, $out += $escape(needPayMoney || 0), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label T-now-money">本段代收</div> <div class="col-xs-2 control-label T-now-money"> <input type="text" class="col-xs-12 F-float F-money" name="preIncomeMoney" value="', 
            $line = 61, $out += $escape(currentNeedPayMoney), $out += '"> </div> ', $line = 63), 
            $out += ' </div> <div class="col-xs-12 mar-t-20"> <label class="control-label" style="width: 35px;"></label><button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> <div class="col-xs-12 mar-t-10"> <p class="red">*单位解释：默认为1，针对某些客户需要按照吃几餐/住几晚来对账结算,请修改即可</p> </div> <div class="col-xs-12 mar-t-5"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> ', 
            $line = 78, (1 != type || isInnerTransferConfirm) && ($out += "<th>单位</th>", $line = 78), 
            $out += ' <th>金额</th> <th>说明</th> <th width="50">操作</th> </tr> </thead> <tbody class="T-fee-list" data-del-json="', 
            $line = 84, type ? ($line = 84, $out += $escape(lineFeeDel), $line = 84) : ($line = 84, 
            $out += $escape(touristGroupFeeJsonDel), $line = 84), $out += '" ', $line = 84, 
            (type || isInnerTransferConfirm) && ($out += 'data-type="4"', $line = 84), $out += "> ", 
            $line = 85, touristGroupFeeJsonAdd && touristGroupFeeJsonAdd.length > 0 ? ($out += " ", 
            $line = 86, $each(touristGroupFeeJsonAdd, function(rs) {
                $out += ' <tr data-id="', $line = 87, $out += $escape(rs.id), $out += '"> <td> <select name="type" class="col-xs-12"> ', 
                $line = 90, $out += $string($helpers.getFeeItemType(rs.type)), $out += ' </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="', 
                $line = 93, $out += $escape(rs.count), $out += '"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="', 
                $line = 94, $out += $escape(rs.price), $out += '"></td> ', $line = 95, (1 != type || isInnerTransferConfirm) && ($out += '<td><input type="text" class="col-xs-12 T-option" name="days" value="', 
                $line = 95, $out += $escape(rs.days || 1), $out += '"></td>', $line = 95), $out += ' <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="', 
                $line = 96, $out += $escape(rs.price * rs.count * (rs.days || 1)), $out += '"></td> <td><input type="text" class="col-xs-12" name="remark" value="', 
                $line = 97, $out += $escape(rs.remark), $out += '" maxlength="1000"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', 
                $line = 100;
            }), $out += " ", $line = 101) : lineFee && lineFee.length > 0 ? ($out += " ", $line = 102, 
            $each(lineFee, function(rs) {
                $out += ' <tr data-id="', $line = 103, $out += $escape(rs.id), $out += '"> <td> <select name="type" class="col-xs-12" ', 
                $line = 105, (3 == rs.type || 4 == rs.type || 5 == rs.type || 6 == rs.type || 7 == rs.type || 9 == rs.type || 10 == rs.type || 11 == rs.type) && ($out += "disabled", 
                $line = 105), $out += "> ", $line = 107, 1 == rs.type || 2 == rs.type || 8 == rs.type || 12 == rs.type ? ($out += " ", 
                $line = 108, $out += $string($helpers.getFeeItemType2(rs.type)), $out += " ", $line = 109) : ($out += " ", 
                $line = 110, $out += $string($helpers.getFeeItemType(rs.type, !0)), $out += " ", 
                $line = 111), $out += ' </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="', 
                $line = 114, $out += $escape(rs.count), $out += '" ', $line = 114, (3 == rs.type || 4 == rs.type || 5 == rs.type || 6 == rs.type || 7 == rs.type || 9 == rs.type || 10 == rs.type || 11 == rs.type) && ($out += "disabled", 
                $line = 114), $out += '></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="', 
                $line = 115, $out += $escape(rs.price), $out += '" ', $line = 115, (3 == rs.type || 4 == rs.type || 5 == rs.type || 6 == rs.type || 7 == rs.type || 9 == rs.type || 10 == rs.type || 11 == rs.type) && ($out += "disabled", 
                $line = 115), $out += "></td> ", $line = 116, (1 != type || isInnerTransferConfirm) && ($out += '<td><input type="text" class="col-xs-12 T-option" name="days" value="', 
                $line = 116, $out += $escape(rs.days), $out += '" ', $line = 116, (3 == rs.type || 4 == rs.type || 5 == rs.type || 6 == rs.type || 7 == rs.type || 9 == rs.type || 10 == rs.type || 11 == rs.type) && ($out += "disabled", 
                $line = 116), $out += "></td>", $line = 116), $out += ' <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="', 
                $line = 117, $out += $escape(rs.price * rs.count), $out += '"></td> <td><input type="text" class="col-xs-12" name="remark" value="', 
                $line = 118, $out += $escape(rs.remark), $out += '" maxlength="1000" ', $line = 118, 
                (3 == rs.type || 4 == rs.type || 5 == rs.type || 6 == rs.type || 7 == rs.type || 9 == rs.type || 10 == rs.type || 11 == rs.type) && ($out += "disabled", 
                $line = 118), $out += '></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', 
                $line = 121;
            }), $out += " ", $line = 122) : ($out += ' <tr> <td> <select name="type" class="col-xs-12"> ', 
            $line = 126, type ? ($out += " ", $line = 127, $out += $string($helpers.getFeeItemType2(0)), 
            $out += " ", $line = 128) : ($out += " ", $line = 129, $out += $string($helpers.getFeeItemType(0)), 
            $out += " ", $line = 130), $out += ' </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price"></td> ', 
            $line = 135, 1 != type && ($out += '<td><input type="text" class="col-xs-12 T-option" name="days" value="1"></td>', 
            $line = 135), $out += ' <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly></td> <td><input type="text" class="col-xs-12" name="remark" maxlength="1000"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', 
            $line = 140), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		{{if type == 1}}\r\n		<div class="col-xs-12">\r\n			<div class="col-xs-1 text-right no-padding-right control-label" style="width: 88px;">线路名称</div>\r\n			<div class="col-xs-5 control-label">{{if !!lineData}}{{lineData.lineProductName}}{{/if}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">天数</div>\r\n			<div class="col-xs-1 control-label">{{if !!lineData}}{{lineData.days}}{{/if}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">出团日期</div>\r\n			<div class="col-xs-2 control-label">{{if !!lineData}}{{lineData.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10" style="padding-left: 35px;">\r\n			<div class="col-xs-2">\r\n				<select class="col-xs-12 T-abversion">\r\n					<option value="0">本部操作</option>\r\n					<option value="1" {{if isTransfer == 1}}selected{{/if}}>他部操作</option>\r\n					<option value="2" {{if isTransfer == 2}}selected{{/if}}>外转操作</option>\r\n				</select> \r\n			</div>\r\n			<div class="col-xs-8{{if isTransfer != 1}} hidden{{/if}} T-internal">\r\n				<div class="col-xs-2 text-right no-padding-right control-label no-padding-left">责任部门</div>\r\n				<div class="col-xs-4">\r\n					<input type="text" class="col-xs-12" name="dutyDepartmentName"{{if isTransfer == 1}} value="{{dutyDepartmentName}}" data-id="{{dutyDepartmentId}}"{{/if}}>\r\n				</div>\r\n				<div class="col-xs-2 text-right no-padding-right control-label">责任计调</div>\r\n				<div class="col-xs-4">\r\n					<input type="text" class="col-xs-12" name="dutyUserName"{{if isTransfer == 1}} value="{{dutyUserName}}" data-id="{{dutyUserId}}"{{/if}}>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-8{{if isTransfer != 2}} hidden{{/if}} T-peer">\r\n				<div class="col-xs-2 text-right no-padding-right control-label">同行</div>\r\n				<div class="col-xs-4">\r\n					<input type="text" class="col-xs-12" name="transferPartnerAgency"{{if isTransfer == 2}} value="{{transferPartnerAgency}}" data-id="{{transferPartnerAgencyId}}"{{/if}}>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">备注</div>\r\n			<div class="col-xs-10">\r\n				<input type="text" class="col-xs-12 T-replace-remark" name="remark" value="{{remark}}">\r\n			</div>\r\n		</div>\r\n		{{/if}}\r\n		<div class="col-xs-12 mar-t-20">\r\n			{{if type != 1}}\r\n			<label class="control-label pull-left" style="width: 35px;">{{if type != 1}}应收{{else}}应付{{/if}}</label>\r\n			<input type="text" readonly class="pull-left F-float F-money" name="needPayAllMoney" value="{{needPayAllMoney}}">\r\n			<label class="control-label pull-left" style="width: 70px; padding-left: 24px;">预收款</label>\r\n			<input type="text" class="pull-left F-float F-money" name="preIncomeMoney" value="{{preIncomeMoney}}">\r\n			<label class="control-label pull-left" style="width: 70px; padding-left: 12px;">现收团款</label>\r\n			<input type="text" class="pull-left F-float F-money" name="currentNeedPayMoney" value="{{currentNeedPayMoney}}">\r\n			{{else}}\r\n			<div class="col-xs-1 text-right no-padding-right control-label">应付</div>\r\n			<div class="col-xs-3">\r\n				<input type="text" readonly class="pull-left F-float F-money" name="needPayAllMoney" value="{{needPayAllMoney}}">\r\n			</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">现收团款</div>\r\n			<div class="col-xs-1 control-label F-float">{{needPayMoney || 0}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label T-now-money">本段代收</div>\r\n			<div class="col-xs-2 control-label T-now-money">\r\n				<input type="text" class="col-xs-12 F-float F-money" name="preIncomeMoney" value="{{currentNeedPayMoney}}">\r\n			</div>\r\n			{{/if}}\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<label class="control-label" style="width: 35px;"></label><button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<p class="red">*单位解释：默认为1，针对某些客户需要按照吃几餐/住几晚来对账结算,请修改即可</p>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-5">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>费用项</th>\r\n						<th>数量</th>\r\n						<th>单价</th>\r\n						{{if type != 1 || !!isInnerTransferConfirm}}<th>单位</th>{{/if}}\r\n						<th>金额</th>\r\n						<th>说明</th>\r\n						<th width="50">操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-fee-list" data-del-json="{{if !!type}}{{lineFeeDel}}{{else}}{{touristGroupFeeJsonDel}}{{/if}}" {{if !!type || !!isInnerTransferConfirm}}data-type="4"{{/if}}>\r\n				{{if touristGroupFeeJsonAdd && touristGroupFeeJsonAdd.length > 0}}\r\n					{{each touristGroupFeeJsonAdd as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							<select name="type" class="col-xs-12">\r\n							{{#rs.type | getFeeItemType}}\r\n							</select>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="{{rs.count}}"></td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="{{rs.price}}"></td>\r\n						{{if type != 1 || !!isInnerTransferConfirm}}<td><input type="text" class="col-xs-12 T-option" name="days" value="{{rs.days || 1}}"></td>{{/if}}\r\n						<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{rs.price*rs.count*(rs.days || 1)}}"></td>\r\n						<td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}" maxlength="1000"></td>\r\n						<td><a class="cursor T-action T-delete">删除</a></td>\r\n					</tr>\r\n					{{/each}}\r\n				{{else if lineFee && lineFee.length > 0}}\r\n					{{each lineFee as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							<select name="type" class="col-xs-12" {{if rs.type == 3 || rs.type == 4 || rs.type == 5 || rs.type == 6 || rs.type == 7 || rs.type == 9 || rs.type == 10 || rs.type == 11}}disabled{{/if}}>\r\n\r\n							{{if rs.type == 1 || rs.type == 2 || rs.type == 8 || rs.type == 12}}\r\n							{{#rs.type | getFeeItemType2}}\r\n							{{else}}\r\n							{{#rs.type | getFeeItemType:true}}\r\n							{{/if}}\r\n							</select>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="{{rs.count}}"  {{if rs.type == 3 || rs.type == 4 || rs.type == 5 || rs.type == 6 || rs.type == 7 || rs.type == 9 || rs.type == 10 || rs.type == 11}}disabled{{/if}}></td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="{{rs.price}}"  {{if rs.type == 3 || rs.type == 4 || rs.type == 5 || rs.type == 6 || rs.type == 7 || rs.type == 9 || rs.type == 10 || rs.type == 11}}disabled{{/if}}></td>\r\n						{{if type != 1 || !!isInnerTransferConfirm}}<td><input type="text" class="col-xs-12 T-option" name="days" value="{{rs.days}}"  {{if rs.type == 3 || rs.type == 4 || rs.type == 5 || rs.type == 6 || rs.type == 7 || rs.type == 9 || rs.type == 10 || rs.type == 11}}disabled{{/if}}></td>{{/if}}\r\n						<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{rs.price*rs.count}}"></td>\r\n						<td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}" maxlength="1000"  {{if rs.type == 3 || rs.type == 4 || rs.type == 5 || rs.type == 6 || rs.type == 7 || rs.type == 9 || rs.type == 10 || rs.type == 11}}disabled{{/if}}></td>\r\n						<td><a class="cursor T-action T-delete">删除</a></td>\r\n					</tr>\r\n					{{/each}}\r\n				{{else}}\r\n					<tr>\r\n						<td>\r\n							<select name="type" class="col-xs-12">\r\n							{{if !!type}}\r\n								{{#0 | getFeeItemType2}}\r\n							{{else}}\r\n								{{#0 | getFeeItemType}}\r\n							{{/if}}\r\n							</select>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-count" name="count"></td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-money" name="price"></td>\r\n						{{if type != 1}}<td><input type="text" class="col-xs-12 T-option" name="days" value="1"></td>{{/if}}\r\n						<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly></td>\r\n						<td><input type="text" class="col-xs-12" name="remark" maxlength="1000"></td>\r\n						<td><a class="cursor T-action T-delete">删除</a></td>\r\n					</tr>\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});