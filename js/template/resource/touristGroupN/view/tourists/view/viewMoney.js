/*TMODJS:{"debug":true,"version":54,"md5":"0908719f92f732d07ad2828e5f882b11"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/tourists/view/viewMoney", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, type = $data.type, lineData = $data.lineData, $escape = $utils.$escape, isTransfer = $data.isTransfer, transferPartnerAgency = $data.transferPartnerAgency, dutyDepartmentName = $data.dutyDepartmentName, dutyUserName = $data.dutyUserName, remark = $data.remark, needPayAllMoney = $data.needPayAllMoney, needPayMoney = $data.needPayMoney, isFeeAdjust = $data.isFeeAdjust, currentNeedPayMoney = $data.currentNeedPayMoney, preIncomeMoney = $data.preIncomeMoney, lineFeeDel = $data.lineFeeDel, touristGroupFeeJsonDel = $data.touristGroupFeeJsonDel, touristGroupFeeJsonAdd = $data.touristGroupFeeJsonAdd, $each = $utils.$each, lineFee = ($data.rs, 
            $data.$index, $data.lineFee), $out = "";
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> ', $line = 3, 
            1 == type ? ($out += ' <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right no-padding-left control-label">线路名称：</div> <div class="col-xs-5 control-label">', 
            $line = 6, lineData && ($line = 6, $out += $escape(lineData.lineProductName), $line = 6), 
            $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">天数：</div> <div class="col-xs-1 control-label">', 
            $line = 8, lineData && ($line = 8, $out += $escape(lineData.days), $line = 8), $out += '</div> <div class="col-xs-1 text-right no-padding-right no-padding-left control-label">出团日期：</div> <div class="col-xs-2 control-label">', 
            $line = 10, lineData && ($line = 10, $out += $escape($helpers.dateFormat(lineData.startTime, "yyyy-MM-dd")), 
            $line = 10), $out += '</div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-2"> <select class="col-xs-12" disabled> <option value="0">本部操作</option> <option value="1" ', 
            $line = 16, 1 == isTransfer && ($out += "selected", $line = 16), $out += '>他部操作</option> <option value="2" ', 
            $line = 17, 2 == isTransfer && ($out += "selected", $line = 17), $out += ">外转操作</option> </select> </div> ", 
            $line = 20, 2 == isTransfer ? ($out += ' <div class="col-xs-1 text-right no-padding-right control-label">同行：</div> <div class="col-xs-3 control-label">', 
            $line = 22, $out += $escape(transferPartnerAgency), $out += "</div> ", $line = 23) : 1 == isTransfer && ($out += ' <div class="col-xs-1 text-right no-padding-right no-padding-left control-label">责任部门：</div> <div class="col-xs-3 control-label">', 
            $line = 25, $out += $escape(dutyDepartmentName), $out += '</div> <div class="col-xs-1 text-right no-padding-right no-padding-left control-label">责任计调：</div> <div class="col-xs-3 control-label">', 
            $line = 27, $out += $escape(dutyUserName), $out += "</div> ", $line = 28), $out += ' </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-1 text-right no-padding-right control-label">备注：</div> <div class="col-xs-10 control-label">', 
            $line = 32, $out += $escape(remark), $out += '</div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">应付：</div> <div class="col-xs-3 control-label F-float F-money T-needPayAllMoney">', 
            $line = 36, $out += $escape(needPayAllMoney), $out += '</div> <div class="col-xs-1 text-right no-padding-right no-padding-left control-label">现收团款：</div> <div class="col-xs-2 control-label F-float F-money">', 
            $line = 38, $out += $escape(needPayMoney), $out += '</div> <div class="col-xs-2 text-right no-padding-right no-padding-left control-label">对方现收金额：</div> ', 
            $line = 40, isFeeAdjust ? ($out += ' <input type="text" class="currentNeedPayMoney" value="', 
            $line = 41, $out += $escape(currentNeedPayMoney), $out += '"> ', $line = 42) : ($out += ' <div class="col-xs-2 control-label F-float F-money">', 
            $line = 43, $out += $escape(currentNeedPayMoney), $out += "</div> ", $line = 44), 
            $out += " </div> ", $line = 46) : ($out += ' <div class="col-xs-12 mar-t-20"> <label class="control-label pull-left" style="width: 40px;">应收：</label> <span class="control-label pull-left F-float F-money T-needPayAllMoney">', 
            $line = 49, $out += $escape(needPayAllMoney), $out += '</span> <label class="control-label pull-left" style="width: 75px; padding-left: 24px;">预收款：</label> <span class="control-label pull-left F-float F-money">', 
            $line = 51, $out += $escape(preIncomeMoney), $out += '</span> <label class="control-label pull-left" style="width: 75px; padding-left: 12px;">现收团款：</label> ', 
            $line = 53, isFeeAdjust ? ($out += ' <input type="text" class="currentNeedPayMoney" value="', 
            $line = 54, $out += $escape(currentNeedPayMoney), $out += '"> ', $line = 55) : ($out += ' <span class="control-label pull-left F-float F-money">', 
            $line = 56, $out += $escape(currentNeedPayMoney), $out += "</span> ", $line = 57), 
            $out += " </div> ", $line = 59), $out += " ", $line = 61, isFeeAdjust && ($out += ' <div class="col-xs-12 mar-t-20"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> ', 
            $line = 65), $out += ' <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> ', 
            $line = 72, 1 != type && ($out += "<th>日期</th>", $line = 72), $out += " <th>单价</th> <th>金额</th> <th>说明</th> ", 
            $line = 76, isFeeAdjust && ($out += " <th>操作</th> ", $line = 78), $out += ' </tr> </thead> <tbody class="T-fee-list" data-del-json="', 
            $line = 81, type ? ($line = 81, $out += $escape(lineFeeDel), $line = 81) : ($line = 81, 
            $out += $escape(touristGroupFeeJsonDel), $line = 81), $out += '" ', $line = 81, 
            type && ($out += 'data-type="4"', $line = 81), $out += "> ", $line = 82, touristGroupFeeJsonAdd && touristGroupFeeJsonAdd.length > 0 ? ($out += " ", 
            $line = 83, $each(touristGroupFeeJsonAdd, function(rs) {
                $out += ' <tr data-id="', $line = 84, $out += $escape(rs.id), $out += '"> <td> ', 
                $line = 86, $out += $escape($helpers.getFeeItemText(rs.type)), $out += ' </td> <td class="F-float F-count">', 
                $line = 88, $out += $escape(rs.count), $out += "</td> ", $line = 89, 1 != type && ($out += "<td>", 
                $line = 89, $out += $escape(rs.days), $out += "</td>", $line = 89), $out += ' <td class="F-float F-money">', 
                $line = 90, $out += $escape(rs.price), $out += '</td> <td class="F-float F-money T-money">', 
                $line = 91, $out += $escape(rs.price * rs.count * (rs.days || 1)), $out += "</td> <td>", 
                $line = 92, $out += $escape(rs.remark), $out += "</td> ", $line = 93, isFeeAdjust && ($out += " <td></td> ", 
                $line = 95), $out += " </tr> ", $line = 97;
            }), $out += " ", $line = 98) : lineFee && lineFee.length > 0 && ($out += " ", $line = 99, 
            $each(lineFee, function(rs) {
                $out += " <tr> <td>", $line = 101, $out += $escape($helpers.getFeeItemText(rs.type, 2)), 
                $out += '</td> <td class="F-float F-count">', $line = 102, $out += $escape(rs.count), 
                $out += "</td> ", $line = 103, 1 != type && ($out += "<td>", $line = 103, $out += $escape(rs.days), 
                $out += "</td>", $line = 103), $out += ' <td class="F-float F-money">', $line = 104, 
                $out += $escape(rs.price), $out += '</td> <td class="F-float F-money T-money">', 
                $line = 105, $out += $escape(rs.price * rs.count * (rs.days || 1)), $out += "</td> <td>", 
                $line = 106, $out += $escape(rs.remark), $out += "</td> ", $line = 107, isFeeAdjust && ($out += " <td></td> ", 
                $line = 109), $out += " </tr> ", $line = 111;
            }), $out += " ", $line = 112), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> ', 
            $line = 118, isFeeAdjust && ($out += ' <button class="btn btn-xs btn-primary T-btn-save w100" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> ', 
            $line = 120), $out += " </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		{{if type == 1}}\r\n		<div class="col-xs-12">\r\n			<div class="col-xs-1 text-right no-padding-right no-padding-left control-label">线路名称：</div>\r\n			<div class="col-xs-5 control-label">{{if !!lineData}}{{lineData.lineProductName}}{{/if}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">天数：</div>\r\n			<div class="col-xs-1 control-label">{{if !!lineData}}{{lineData.days}}{{/if}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right no-padding-left control-label">出团日期：</div>\r\n			<div class="col-xs-2 control-label">{{if !!lineData}}{{lineData.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-2">\r\n				<select class="col-xs-12" disabled>\r\n					<option value="0">本部操作</option>\r\n					<option value="1" {{if isTransfer == 1}}selected{{/if}}>他部操作</option>\r\n					<option value="2" {{if isTransfer == 2}}selected{{/if}}>外转操作</option>\r\n				</select> \r\n			</div>\r\n		{{if isTransfer == 2}}\r\n			<div class="col-xs-1 text-right no-padding-right control-label">同行：</div>\r\n			<div class="col-xs-3 control-label">{{transferPartnerAgency}}</div>\r\n		{{else if isTransfer == 1}}\r\n			<div class="col-xs-1 text-right no-padding-right no-padding-left control-label">责任部门：</div>\r\n			<div class="col-xs-3 control-label">{{dutyDepartmentName}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right no-padding-left control-label">责任计调：</div>\r\n			<div class="col-xs-3 control-label">{{dutyUserName}}</div>\r\n		{{/if}}\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">备注：</div>\r\n			<div class="col-xs-10 control-label">{{remark}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">应付：</div>\r\n			<div class="col-xs-3 control-label F-float F-money T-needPayAllMoney">{{needPayAllMoney}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right no-padding-left control-label">现收团款：</div>\r\n			<div class="col-xs-2 control-label F-float F-money">{{needPayMoney}}</div>\r\n			<div class="col-xs-2 text-right no-padding-right no-padding-left control-label">对方现收金额：</div>\r\n			{{if isFeeAdjust}}\r\n			<input type="text" class="currentNeedPayMoney" value="{{currentNeedPayMoney}}">\r\n			{{else}}\r\n			<div class="col-xs-2 control-label F-float F-money">{{currentNeedPayMoney}}</div>\r\n			{{/if}}\r\n		</div>\r\n		{{else}}\r\n		<div class="col-xs-12 mar-t-20">\r\n			<label class="control-label pull-left" style="width: 40px;">应收：</label>\r\n			<span class="control-label pull-left F-float F-money T-needPayAllMoney">{{needPayAllMoney}}</span>\r\n			<label class="control-label pull-left" style="width: 75px; padding-left: 24px;">预收款：</label>\r\n			<span class="control-label pull-left F-float F-money">{{preIncomeMoney}}</span>\r\n			<label class="control-label pull-left" style="width: 75px; padding-left: 12px;">现收团款：</label>\r\n			{{if isFeeAdjust}}\r\n			<input type="text" class="currentNeedPayMoney" value="{{currentNeedPayMoney}}">\r\n			{{else}}\r\n			<span class="control-label pull-left F-float F-money">{{currentNeedPayMoney}}</span>\r\n			{{/if}}\r\n		</div>\r\n		{{/if}}\r\n\r\n		{{if isFeeAdjust}}\r\n		<div class="col-xs-12 mar-t-20">\r\n			<button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>\r\n		</div>\r\n		{{/if}}\r\n		<div class="col-xs-12 mar-t-20">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>费用项</th>\r\n						<th>数量</th>\r\n						{{if type != 1}}<th>日期</th>{{/if}}\r\n						<th>单价</th>\r\n						<th>金额</th>\r\n						<th>说明</th>\r\n						{{if isFeeAdjust}}\r\n						<th>操作</th>\r\n						{{/if}}\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-fee-list" data-del-json="{{if !!type}}{{lineFeeDel}}{{else}}{{touristGroupFeeJsonDel}}{{/if}}" {{if !!type}}data-type="4"{{/if}}>\r\n				{{if touristGroupFeeJsonAdd && touristGroupFeeJsonAdd.length > 0}}\r\n					{{each touristGroupFeeJsonAdd as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							{{rs.type | getFeeItemText}}\r\n						</td>\r\n						<td class="F-float F-count">{{rs.count}}</td>\r\n						{{if type != 1}}<td>{{rs.days}}</td>{{/if}}\r\n						<td class="F-float F-money">{{rs.price}}</td>\r\n						<td class="F-float F-money T-money">{{rs.price*rs.count*(rs.days || 1)}}</td>\r\n						<td>{{rs.remark}}</td>\r\n						{{if isFeeAdjust}}\r\n						<td></td>\r\n						{{/if}}\r\n					</tr>\r\n					{{/each}}\r\n				{{else if lineFee && lineFee.length > 0}}\r\n					{{each lineFee as rs}}\r\n					<tr>\r\n						<td>{{rs.type | getFeeItemText:2}}</td>\r\n						<td class="F-float F-count">{{rs.count}}</td>\r\n						{{if type != 1}}<td>{{rs.days}}</td>{{/if}}\r\n						<td class="F-float F-money">{{rs.price}}</td>\r\n						<td class="F-float F-money T-money">{{rs.price*rs.count*(rs.days || 1)}}</td>\r\n						<td>{{rs.remark}}</td>\r\n						{{if isFeeAdjust}}\r\n						<td></td>\r\n						{{/if}}\r\n					</tr>\r\n					{{/each}}\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n			{{if isFeeAdjust}}\r\n			<button class="btn btn-xs btn-primary T-btn-save w100" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n			{{/if}}\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});