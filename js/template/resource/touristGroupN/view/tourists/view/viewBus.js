/*TMODJS:{"debug":true,"version":19,"md5":"a405b92e530651c0b02468dbba1923e8"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/tourists/view/viewBus", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, require = $data.require, $escape = $utils.$escape, isTransfer = $data.isTransfer, dutyDepartmentName = $data.dutyDepartmentName, dutySubDepartmentName = $data.dutySubDepartmentName, dutyUserName = $data.dutyUserName, needPayAllMoney = $data.needPayAllMoney, busFeeDel = $data.busFeeDel, busFee = $data.busFee, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right control-label">车辆要求</div> <div class="control-label col-xs-11"> ', 
            $line = 6, require && ($line = 6, $out += $escape(require.requireContent), $line = 6), 
            $out += ' </div> </div> <div class="col-xs-12 mar-t-10"> ', $line = 10, 1 == isTransfer && ($out += ' <div class="col-xs-1 text-right no-padding-right control-label">部门</div> <div class="control-label col-xs-2"> ', 
            $line = 13, $out += $escape(dutyDepartmentName), $out += ' </div> <div class="col-xs-1 text-right no-padding-right control-label">子部门</div> <div class="control-label col-xs-2">', 
            $line = 16, $out += $escape(dutySubDepartmentName), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">责任计调</div> <div class="control-label col-xs-2">', 
            $line = 18, $out += $escape(dutyUserName), $out += "</div> ", $line = 19), $out += ' </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-8" style="padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">应付</label> <span class="control-label pull-left F-float F-money">', 
            $line = 24, $out += $escape(needPayAllMoney), $out += '</span> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> </tr> </thead> <tbody class="T-fee-list" data-del-json="', 
            $line = 38, $out += $escape(busFeeDel), $out += '"> ', $line = 39, busFee && busFee.length > 0 && ($out += " ", 
            $line = 40, $each(busFee, function(rs) {
                $out += ' <tr data-id="', $line = 41, $out += $escape(rs.id), $out += '"> <td> ', 
                $line = 43, $out += $escape($helpers.getFeeItemText(rs.type)), $out += ' </td> <td class="F-float F-count">', 
                $line = 45, $out += $escape(rs.count), $out += '</td> <td class="F-float F-money">', 
                $line = 46, $out += $escape(rs.price), $out += '</td> <td class="F-float F-money">', 
                $line = 47, $out += $escape(rs.price * rs.count), $out += "</td> <td>", $line = 48, 
                $out += $escape(rs.remark), $out += "</td> </tr> ", $line = 50;
            }), $out += " ", $line = 51), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">车辆要求</div>\r\n			<div class="control-label col-xs-11">\r\n				{{if !!require}}{{require.requireContent}}{{/if}}\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n		{{if isTransfer == 1}}\r\n			<div class="col-xs-1 text-right no-padding-right control-label">部门</div>\r\n			<div class="control-label col-xs-2">\r\n				{{dutyDepartmentName}}\r\n			</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">子部门</div>\r\n			<div class="control-label col-xs-2">{{dutySubDepartmentName}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">责任计调</div>\r\n			<div class="control-label col-xs-2">{{dutyUserName}}</div>\r\n		{{/if}}\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-8" style="padding-top: 4px;">\r\n				<label class="control-label pull-left" style="width: 35px;">应付</label>\r\n				<span class="control-label pull-left F-float F-money">{{needPayAllMoney}}</span>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>费用项</th>\r\n						<th>数量</th>\r\n						<th>单价</th>\r\n						<th>金额</th>\r\n						<th>说明</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-fee-list" data-del-json="{{busFeeDel}}">\r\n				{{if busFee && busFee.length > 0}}\r\n					{{each busFee as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							{{rs.type | getFeeItemText}}\r\n						</td>\r\n						<td class="F-float F-count">{{rs.count}}</td>\r\n						<td class="F-float F-money">{{rs.price}}</td>\r\n						<td class="F-float F-money">{{rs.price*rs.count}}</td>\r\n						<td>{{rs.remark}}</td>\r\n					</tr>\r\n					{{/each}}\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});