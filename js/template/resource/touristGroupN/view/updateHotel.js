/*TMODJS:{"debug":true,"version":35,"md5":"51c89504781adda9d56667c6f601bb07"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroupN/view/updateHotel", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, intakeTime = $data.intakeTime, $string = $utils.$string, level = $data.level, roomCount = $data.roomCount, hotelName = $data.hotelName, hotelId = $data.hotelId, require = $data.require, dutyDepartmentName = $data.dutyDepartmentName, dutyDepartmentId = $data.dutyDepartmentId, dutyUserName = $data.dutyUserName, dutyUserId = $data.dutyUserId, isTransfer = $data.isTransfer, transferPartnerAgency = $data.transferPartnerAgency, needPayAllMoney = $data.needPayAllMoney, outFee = $data.outFee, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>入住时间</div> <div class="col-xs-3"> <input type="text" class="col-xs-12 datepicker" name="intakeTime" value="', 
            $line = 6, $out += $escape(intakeTime), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary pull-left">*</span>星级</div> <div class="col-xs-3"> <select class="col-xs-12" name="level"> ', 
            $line = 13, $out += $string($helpers.getHotelLevelOptions(level)), $out += ' </select> </div> <div class="col-xs-1 text-right no-padding-right control-label">间数</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="roomCount" value="', 
            $line = 18, $out += $escape(roomCount), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">指定酒店</div> <div class="col-xs-11"> <input type="text" class="col-xs-12 hct-cursor T-choose-hotel" readonly value="', 
            $line = 24, $out += $escape(hotelName), $out += '" data-id="', $line = 24, $out += $escape(hotelId), 
            $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">酒店要求</div> <div class="col-xs-11"> <input type="text" class="col-xs-12" name="requireContent" value="', 
            $line = 30, require && ($line = 30, $out += $escape(require.requireContent), $line = 30), 
            $out += '" data-id="', $line = 30, require && ($line = 30, $out += $escape(require.id), 
            $line = 30), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">责任部门</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="dutyDepartmentName" value="', 
            $line = 36, $out += $escape(dutyDepartmentName), $out += '" data-id="', $line = 36, 
            $out += $escape(dutyDepartmentId), $out += '"> </div> <div class="col-xs-1 text-right no-padding-right control-label">责任计调</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="dutyUserName" value="', 
            $line = 40, $out += $escape(dutyUserName), $out += '" data-id="', $line = 40, $out += $escape(dutyUserId), 
            $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 col-xs-offset-1" style="padding-left: 7px;"> <label class="control-label"> <input type="checkbox" class="ace T-abversion"', 
            $line = 46, 1 == isTransfer && ($out += " checked", $line = 46), $out += '> <span class="lbl"> 外转</span> </label> </div> <div class="col-xs-4', 
            $line = 50, 1 != isTransfer && ($out += " hidden", $line = 50), $out += ' T-peer"> <label class="pull-left control-label" style="width: 35px">同行</label> <input type="text" class="pull-left" name="transferPartnerAgency" value="', 
            $line = 52, $out += $escape(transferPartnerAgency), $out += '"> </div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-2" style="padding-left: 20px;"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> <div class="col-xs-8" style="padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">应付</label> <input type="text" readonly class="pull-left" name="needPayAllMoney" value="', 
            $line = 61, $out += $escape(needPayAllMoney), $out += '"> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> <th>操作</th> </tr> </thead> <tbody class="T-fee-list"> ', 
            $line = 77, outFee && outFee.length > 0 && ($out += " ", $line = 78, $each(outFee, function(rs) {
                $out += ' <tr> <td><input type="text" class="col-xs-12" name="type" value="', $line = 80, 
                $out += $escape(rs.type), $out += '"></td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="', 
                $line = 81, $out += $escape(rs.count), $out += '"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="', 
                $line = 82, $out += $escape(rs.price), $out += '"></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="', 
                $line = 83, $out += $escape(rs.price * rs.count), $out += '"></td> <td><input type="text" class="col-xs-12" name="remark" value="', 
                $line = 84, $out += $escape(rs.remark), $out += '"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', 
                $line = 87;
            }), $out += " ", $line = 88), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>入住时间</div>\r\n			<div class="col-xs-3">\r\n				<input type="text" class="col-xs-12 datepicker" name="intakeTime" value="{{intakeTime}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary pull-left">*</span>星级</div>\r\n			<div class="col-xs-3">\r\n				<select class="col-xs-12" name="level">\r\n				{{#level | getHotelLevelOptions}}\r\n				</select>\r\n			</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">间数</div>\r\n			<div class="col-xs-3">\r\n				<input type="text" class="col-xs-12" name="roomCount" value="{{roomCount}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">指定酒店</div>\r\n			<div class="col-xs-11">\r\n				<input type="text" class="col-xs-12 hct-cursor T-choose-hotel" readonly value="{{hotelName}}" data-id="{{hotelId}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">酒店要求</div>\r\n			<div class="col-xs-11">\r\n				<input type="text" class="col-xs-12" name="requireContent" value="{{if !!require}}{{require.requireContent}}{{/if}}" data-id="{{if !!require}}{{require.id}}{{/if}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">责任部门</div>\r\n			<div class="col-xs-3">\r\n				<input type="text" class="col-xs-12" name="dutyDepartmentName" value="{{dutyDepartmentName}}" data-id="{{dutyDepartmentId}}">\r\n			</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">责任计调</div>\r\n			<div class="col-xs-3">\r\n				<input type="text" class="col-xs-12" name="dutyUserName" value="{{dutyUserName}}" data-id="{{dutyUserId}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 col-xs-offset-1" style="padding-left: 7px;">\r\n				<label class="control-label">\r\n					<input type="checkbox" class="ace T-abversion"{{if isTransfer == 1}} checked{{/if}}>\r\n					<span class="lbl"> 外转</span>\r\n				</label>\r\n			</div>\r\n			<div class="col-xs-4{{if isTransfer != 1}} hidden{{/if}} T-peer">\r\n				<label class="pull-left control-label" style="width: 35px">同行</label>\r\n				<input type="text" class="pull-left" name="transferPartnerAgency" value="{{transferPartnerAgency}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-2" style="padding-left: 20px;">\r\n				<button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>				\r\n			</div>\r\n			<div class="col-xs-8" style="padding-top: 4px;">\r\n				<label class="control-label pull-left" style="width: 35px;">应付</label>\r\n				<input type="text" readonly class="pull-left" name="needPayAllMoney" value="{{needPayAllMoney}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>费用项</th>\r\n						<th>数量</th>\r\n						<th>单价</th>\r\n						<th>金额</th>\r\n						<th>说明</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-fee-list">\r\n				{{if outFee && outFee.length > 0}}\r\n					{{each outFee as rs}}\r\n					<tr>\r\n						<td><input type="text" class="col-xs-12" name="type" value="{{rs.type}}"></td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="{{rs.count}}"></td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="{{rs.price}}"></td>\r\n						<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{rs.price*rs.count}}"></td>\r\n						<td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}"></td>\r\n						<td><a class="cursor T-action T-delete">删除</a></td>\r\n					</tr>\r\n					{{/each}}\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});