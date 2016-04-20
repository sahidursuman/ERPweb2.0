/*TMODJS:{"debug":true,"version":8,"md5":"882823d0d29fc187087c83a46bcc929d"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/tourists/view/viewOther", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, dutyDepartmentName = $data.dutyDepartmentName, dutySubDepartmentName = $data.dutySubDepartmentName, dutyUserName = $data.dutyUserName, consumeTime = $data.consumeTime, isRestaurantRequired = $data.isRestaurantRequired, restaurantRequired = $data.restaurantRequired, isTicketRequired = $data.isTicketRequired, ticketRequired = $data.ticketRequired, isOtherRequired = $data.isOtherRequired, otherRequired = $data.otherRequired, needPayAllMoney = $data.needPayAllMoney, otherFeeDel = $data.otherFeeDel, otherFee = $data.otherFee, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">部门</div> <div class="col-xs-2 control-label">', 
            $line = 5, $out += $escape(dutyDepartmentName), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">子部门</div> <div class="col-xs-2 control-label">', 
            $line = 7, $out += $escape(dutySubDepartmentName), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">责任计调</div> <div class="col-xs-3 control-label">', 
            $line = 9, $out += $escape(dutyUserName), $out += '</div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">消费日期</div> <div class="col-xs-3 control-label">', 
            $line = 13, $out += $escape($helpers.dateFormat(consumeTime, "yyyy-MM-dd")), $out += '</div> </div> <div class="col-xs-12 mar-t-10 ', 
            $line = 15, 1 != isRestaurantRequired && ($out += "hidden ", $line = 15), $out += 'T-ask-restaurant"> <div class="col-xs-1 text-right no-padding-right control-label">餐厅要求</div> <div class="col-xs-11 control-label">', 
            $line = 17, restaurantRequired && ($line = 17, $out += $escape(restaurantRequired.requireContent), 
            $line = 17), $out += '</div> </div> <div class="col-xs-12 mar-t-10', $line = 19, 
            1 != isTicketRequired && ($out += " hidden", $line = 19), $out += ' T-ask-ticket"> <div class="col-xs-1 text-right no-padding-right control-label">票务要求</div> <div class="col-xs-11 control-label">', 
            $line = 21, ticketRequired && ($line = 21, $out += $escape(ticketRequired.requireContent), 
            $line = 21), $out += '</div> </div> <div class="col-xs-12 mar-t-10 ', $line = 23, 
            1 != isOtherRequired && ($out += "hidden ", $line = 23), $out += 'T-ask-other"> <div class="col-xs-1 text-right no-padding-right control-label">其它要求</div> <div class="col-xs-11 control-label">', 
            $line = 25, otherRequired && ($line = 25, $out += $escape(otherRequired.requireContent), 
            $line = 25), $out += '</div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-8" style="padding-left: 20px; padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">应付</label> <span class="control-label pull-left">', 
            $line = 30, $out += $escape(needPayAllMoney), $out += '</span> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> </tr> </thead> <tbody class="T-fee-list" data-del-json="', 
            $line = 44, $out += $escape(otherFeeDel), $out += '"> ', $line = 45, otherFee && otherFee.length > 0 && ($out += " ", 
            $line = 46, $each(otherFee, function(rs) {
                $out += ' <tr data-id="', $line = 47, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 48, $out += $escape($helpers.getFeeItemText(rs.type)), $out += "</td> <td>", 
                $line = 49, $out += $escape(rs.count), $out += "</td> <td>", $line = 50, $out += $escape(rs.price), 
                $out += "</td> <td>", $line = 51, $out += $escape(rs.price * rs.count), $out += "</td> <td>", 
                $line = 52, $out += $escape(rs.remark), $out += "</td> </tr> ", $line = 54;
            }), $out += " ", $line = 55), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">部门</div>\r\n			<div class="col-xs-2 control-label">{{dutyDepartmentName}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">子部门</div>\r\n			<div class="col-xs-2 control-label">{{dutySubDepartmentName}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">责任计调</div>\r\n			<div class="col-xs-3 control-label">{{dutyUserName}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">消费日期</div>\r\n			<div class="col-xs-3 control-label">{{consumeTime | dateFormat: \'yyyy-MM-dd\'}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10 {{if isRestaurantRequired != 1}}hidden {{/if}}T-ask-restaurant">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">餐厅要求</div>\r\n			<div class="col-xs-11 control-label">{{if !!restaurantRequired}}{{restaurantRequired.requireContent}}{{/if}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10{{if isTicketRequired != 1}} hidden{{/if}} T-ask-ticket">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">票务要求</div>\r\n			<div class="col-xs-11 control-label">{{if !!ticketRequired}}{{ticketRequired.requireContent}}{{/if}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10 {{if isOtherRequired != 1}}hidden {{/if}}T-ask-other">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">其它要求</div>\r\n			<div class="col-xs-11 control-label">{{if !!otherRequired}}{{otherRequired.requireContent}}{{/if}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-8" style="padding-left: 20px; padding-top: 4px;">\r\n				<label class="control-label pull-left" style="width: 35px;">应付</label>\r\n				<span class="control-label pull-left">{{needPayAllMoney}}</span>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>费用项</th>\r\n						<th>数量</th>\r\n						<th>单价</th>\r\n						<th>金额</th>\r\n						<th>说明</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-fee-list" data-del-json="{{otherFeeDel}}">\r\n				{{if otherFee && otherFee.length > 0}}\r\n					{{each otherFee as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>{{rs.type | getFeeItemText}}</td>\r\n						<td>{{rs.count}}</td>\r\n						<td>{{rs.price}}</td>\r\n						<td>{{rs.price*rs.count}}</td>\r\n						<td>{{rs.remark}}</td>\r\n					</tr>\r\n					{{/each}}\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});