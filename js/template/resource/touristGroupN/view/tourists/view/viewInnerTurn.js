/*TMODJS:{"debug":true,"version":8,"md5":"4ebbfe93af6da50377e86653511b4d24"}*/
define(function(require) {
    return require("/js/template/template")("resource/touristGroupN/view/tourists/view/viewInnerTurn", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, lineData = $data.lineData, $escape = $utils.$escape, dutyDepartmentName = $data.dutyDepartmentName, dutyUserName = $data.dutyUserName, remark = $data.remark, needPayAllMoney = $data.needPayAllMoney, currentNeedPayMoney = $data.currentNeedPayMoney, isNowIncome = $data.isNowIncome, innerTransferFee = $data.innerTransferFee, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right control-label">线路名称</div> <div class="col-xs-3 control-label">', 
            $line = 5, lineData && ($line = 5, $out += $escape(lineData.lineProductName), $line = 5), 
            $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">天数</div> <div class="col-xs-1 control-label">', 
            $line = 7, lineData && ($line = 7, $out += $escape(lineData.days), $line = 7), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">出团日期</div> <div class="col-xs-3 control-label">', 
            $line = 9, lineData && ($line = 9, $out += $escape($helpers.dateFormat(lineData.startTime, "yyyy-MM-dd")), 
            $line = 9), $out += '</div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-1 text-right no-padding-right control-label">责任部门</div> <div class="col-xs-3 control-label">', 
            $line = 13, $out += $escape(dutyDepartmentName), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">责任计调</div> <div class="col-xs-3 control-label">', 
            $line = 15, $out += $escape(dutyUserName), $out += '</div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-1 text-right no-padding-right control-label">备注</div> <div class="col-xs-10 control-label">', 
            $line = 19, $out += $escape(remark), $out += '</div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">应付</div> <div class="col-xs-3 control-label">', 
            $line = 23, $out += $escape(needPayAllMoney), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">计划现收</div> <div class="col-xs-2 control-label">', 
            $line = 25, $out += $escape(currentNeedPayMoney), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">对方现收</div> <div class="col-xs-1"> <input type="checkbox" disabled class="ace"', 
            $line = 28, 1 == isNowIncome && ($out += " checked", $line = 28), $out += '> <label class="lbl"></label> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> </tr> </thead> <tbody class="T-fee-list"> ', 
            $line = 44, innerTransferFee && innerTransferFee.length > 0 && ($out += " ", $line = 45, 
            $each(innerTransferFee, function(rs) {
                $out += " <tr> <td>", $line = 47, $out += $escape($helpers.getFeeItemText(rs.type)), 
                $out += "</td> <td>", $line = 48, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 49, $out += $escape(rs.price), $out += "</td> <td>", $line = 50, $out += $escape(rs.price * rs.count), 
                $out += "</td> <td>", $line = 51, $out += $escape(rs.remark), $out += "</td> </tr> ", 
                $line = 53;
            }), $out += " ", $line = 54), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">线路名称</div>\r\n			<div class="col-xs-3 control-label">{{if !!lineData}}{{lineData.lineProductName}}{{/if}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">天数</div>\r\n			<div class="col-xs-1 control-label">{{if !!lineData}}{{lineData.days}}{{/if}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">出团日期</div>\r\n			<div class="col-xs-3 control-label">{{if !!lineData}}{{lineData.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">责任部门</div>\r\n			<div class="col-xs-3 control-label">{{dutyDepartmentName}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">责任计调</div>\r\n			<div class="col-xs-3 control-label">{{dutyUserName}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">备注</div>\r\n			<div class="col-xs-10 control-label">{{remark}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">应付</div>\r\n			<div class="col-xs-3 control-label">{{needPayAllMoney}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">计划现收</div>\r\n			<div class="col-xs-2 control-label">{{currentNeedPayMoney}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">对方现收</div>\r\n			<div class="col-xs-1">\r\n				<input type="checkbox" disabled class="ace"{{if isNowIncome == 1}} checked{{/if}}>\r\n				<label class="lbl"></label>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>费用项</th>\r\n						<th>数量</th>\r\n						<th>单价</th>\r\n						<th>金额</th>\r\n						<th>说明</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-fee-list">\r\n				{{if innerTransferFee && innerTransferFee.length > 0}}\r\n					{{each innerTransferFee as rs}}\r\n					<tr>\r\n						<td>{{rs.type | getFeeItemText}}</td>\r\n						<td>{{rs.count}}</td>\r\n						<td>{{rs.price}}</td>\r\n						<td>{{rs.price*rs.count}}</td>\r\n						<td>{{rs.remark}}</td>\r\n					</tr>\r\n					{{/each}}\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});