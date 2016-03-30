/*TMODJS:{"debug":true,"version":14,"md5":"84518333d27599afa1890af1d1e7ca01"}*/
define(function(require) {
    return require("/js/template/template")("resource/touristGroupN/view/tourists/view/viewHotel", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, intakeTime = $data.intakeTime, level = $data.level, roomCount = $data.roomCount, hotelName = $data.hotelName, require = $data.require, isTransfer = $data.isTransfer, dutyDepartmentName = $data.dutyDepartmentName, dutyUserName = $data.dutyUserName, transferPartnerAgency = $data.transferPartnerAgency, needPayAllMoney = $data.needPayAllMoney, type = $data.type, hotelFeeDel = $data.hotelFeeDel, hotelFee = $data.hotelFee, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right control-label">入住时间</div> <div class="col-xs-3 control-label">', 
            $line = 5, $out += $escape(intakeTime), $out += '</div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary pull-left">*</span>星级</div> <div class="col-xs-3">', 
            $line = 9, $out += $escape($helpers.getHotelLevelDesc(level)), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">间数</div> <div class="col-xs-3 control-label">', 
            $line = 11, $out += $escape(roomCount), $out += '</div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">指定酒店</div> <div class="col-xs-11 control-label">', 
            $line = 15, $out += $escape(hotelName), $out += '</div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">酒店要求</div> <div class="col-xs-11 control-label">', 
            $line = 19, require && ($line = 19, $out += $escape(require.requireContent), $line = 19), 
            $out += '</div> </div> <div class="col-xs-12 mar-t-10"> ', $line = 22, 1 != isTransfer ? ($out += ' <div class="col-xs-1 text-right no-padding-right control-label">责任部门</div> <div class="col-xs-3 control-label">', 
            $line = 24, $out += $escape(dutyDepartmentName), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">责任计调</div> <div class="col-xs-3 control-label">', 
            $line = 26, $out += $escape(dutyUserName), $out += "</div> ", $line = 27) : ($out += ' <div class="col-xs-1 text-right no-padding-right control-label">同行</div> <div class="col-xs-3 control-label">', 
            $line = 29, $out += $escape(transferPartnerAgency), $out += "</div> ", $line = 30), 
            $out += ' </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-8" style="padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">应付</label> <span class="pull-left control-label">', 
            $line = 35, $out += $escape(needPayAllMoney), $out += '</span> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> </tr> </thead> <tbody class="T-fee-list" data-type="', 
            $line = 49, $out += $escape(type), $out += '" data-del-json="', $line = 49, $out += $escape(hotelFeeDel), 
            $out += '"> ', $line = 50, hotelFee && hotelFee.length > 0 && ($out += " ", $line = 51, 
            $each(hotelFee, function(rs) {
                $out += ' <tr data-id="', $line = 52, $out += $escape(rs.id), $out += '"> <td> ', 
                $line = 54, $out += $escape($helpers.getFeeItemText(rs.type)), $out += " </td> <td>", 
                $line = 56, $out += $escape(rs.count), $out += "</td> <td>", $line = 57, $out += $escape(rs.price), 
                $out += "</td> <td>", $line = 58, $out += $escape(rs.price * rs.count), $out += "</td> <td>", 
                $line = 59, $out += $escape(rs.remark), $out += "</td> </tr> ", $line = 61;
            }), $out += " ", $line = 62), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">入住时间</div>\r\n			<div class="col-xs-3 control-label">{{intakeTime}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary pull-left">*</span>星级</div>\r\n			<div class="col-xs-3">{{level | getHotelLevelDesc}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">间数</div>\r\n			<div class="col-xs-3 control-label">{{roomCount}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">指定酒店</div>\r\n			<div class="col-xs-11 control-label">{{hotelName}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">酒店要求</div>\r\n			<div class="col-xs-11 control-label">{{if !!require}}{{require.requireContent}}{{/if}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n		{{if isTransfer != 1}}\r\n			<div class="col-xs-1 text-right no-padding-right control-label">责任部门</div>\r\n			<div class="col-xs-3 control-label">{{dutyDepartmentName}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">责任计调</div>\r\n			<div class="col-xs-3 control-label">{{dutyUserName}}</div>\r\n		{{else}}\r\n			<div class="col-xs-1 text-right no-padding-right control-label">同行</div>\r\n			<div class="col-xs-3 control-label">{{transferPartnerAgency}}</div>\r\n		{{/if}}\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-8" style="padding-top: 4px;">\r\n				<label class="control-label pull-left" style="width: 35px;">应付</label>\r\n				<span class="pull-left control-label">{{needPayAllMoney}}</span>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>费用项</th>\r\n						<th>数量</th>\r\n						<th>单价</th>\r\n						<th>金额</th>\r\n						<th>说明</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-fee-list" data-type="{{type}}" data-del-json="{{hotelFeeDel}}">\r\n				{{if hotelFee && hotelFee.length > 0}}\r\n					{{each hotelFee as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							{{rs.type | getFeeItemText}}\r\n						</td>\r\n						<td>{{rs.count}}</td>\r\n						<td>{{rs.price}}</td>\r\n						<td>{{rs.price*rs.count}}</td>\r\n						<td>{{rs.remark}}</td>\r\n					</tr>\r\n					{{/each}}\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});