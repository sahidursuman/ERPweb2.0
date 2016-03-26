/*TMODJS:{"debug":true,"version":58,"md5":"e6392aa5564f112776417453a25d0318"}*/
define(function(require) {
    return require("/js/template/template")("resource/touristGroupN/view/tourists/update/updateHotel", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, id = $data.id, intakeTime = $data.intakeTime, $string = $utils.$string, level = $data.level, roomCount = $data.roomCount, hotelName = $data.hotelName, hotel = $data.hotel, require = $data.require, isTransfer = $data.isTransfer, dutyDepartmentName = $data.dutyDepartmentName, dutyDepartmentId = $data.dutyDepartmentId, dutyUserName = $data.dutyUserName, dutyUserId = $data.dutyUserId, transferPartnerAgency = $data.transferPartnerAgency, transferPartnerAgencyId = $data.transferPartnerAgencyId, needPayAllMoney = $data.needPayAllMoney, type = $data.type, hotelFeeDel = $data.hotelFeeDel, hotelFee = $data.hotelFee, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="container-fluid mar-t-20" data-id="', $line = 1, $out += $escape(id), 
            $out += '"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>入住时间</div> <div class="col-xs-3"> <input type="text" class="col-xs-12 datepicker" name="intakeTime" value="', 
            $line = 6, $out += $escape(intakeTime), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary pull-left">*</span>星级</div> <div class="col-xs-3"> <select class="col-xs-12" name="level"> ', 
            $line = 13, $out += $string($helpers.getHotelLevelOptions(level)), $out += ' </select> </div> <div class="col-xs-1 text-right no-padding-right control-label">间数</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="roomCount" value="', 
            $line = 18, $out += $escape(roomCount), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">指定酒店</div> <div class="col-xs-11"> <input type="text" class="col-xs-12 hct-cursor T-choose-hotel" name="hotel" readonly value="', 
            $line = 24, $out += $escape(hotelName), $out += '" data-json="', $line = 24, $out += $escape(hotel), 
            $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">酒店要求</div> <div class="col-xs-11"> <input type="text" class="col-xs-12" name="requireContent" value="', 
            $line = 30, require && ($line = 30, $out += $escape(require.requireContent), $line = 30), 
            $out += '" data-id="', $line = 30, require && ($line = 30, $out += $escape(require.id), 
            $line = 30), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-2 col-xs-offset-1"> <select class="col-xs-12 T-abversion"> <option value="0">内部操作</option> <option value="1" ', 
            $line = 37, 1 == isTransfer && ($out += "selected", $line = 37), $out += '>外转操作</option> </select> </div> <div class="col-xs-8', 
            $line = 40, 1 == isTransfer && ($out += " hidden", $line = 40), $out += ' T-internal"> <div class="col-xs-2 text-right no-padding-right control-label no-padding-left">责任部门</div> <div class="col-xs-4"> <input type="text" class="col-xs-12" name="dutyDepartmentName" value="', 
            $line = 43, $out += $escape(dutyDepartmentName), $out += '" data-id="', $line = 43, 
            $out += $escape(dutyDepartmentId), $out += '"> </div> <div class="col-xs-2 text-right no-padding-right control-label">责任计调</div> <div class="col-xs-4"> <input type="text" class="col-xs-12" name="dutyUserName" value="', 
            $line = 47, $out += $escape(dutyUserName), $out += '" data-id="', $line = 47, $out += $escape(dutyUserId), 
            $out += '"> </div> </div> <div class="col-xs-8', $line = 50, 1 != isTransfer && ($out += " hidden", 
            $line = 50), $out += ' T-peer"> <div class="col-xs-2 text-right no-padding-right control-label">同行</div> <div class="col-xs-4"> <input type="text" class="col-xs-12" name="transferPartnerAgency" value="', 
            $line = 53, $out += $escape(transferPartnerAgency), $out += '" data-id="', $line = 53, 
            $out += $escape(transferPartnerAgencyId), $out += '"> </div> </div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-2" style="padding-left: 20px;"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> <div class="col-xs-8" style="padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">应付</label> <input type="text" readonly class="pull-left" name="needPayAllMoney" value="', 
            $line = 63, $out += $escape(needPayAllMoney), $out += '"> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> </tr> </thead> <tbody class="T-fee-list" data-type="', 
            $line = 77, $out += $escape(type), $out += '" data-del-json="', $line = 77, $out += $escape(hotelFeeDel), 
            $out += '"> ', $line = 78, hotelFee && hotelFee.length > 0 && ($out += " ", $line = 79, 
            $each(hotelFee, function(rs) {
                $out += ' <tr data-id="', $line = 80, $out += $escape(rs.id), $out += '"> <td> ', 
                $line = 82, 1 === type ? ($out += " ", $line = 83, 3 == rs.type ? ($out += "中转结算价", 
                $line = 83) : ($out += "酒店费用", $line = 83), $out += " ", $line = 84) : ($out += " ", 
                $line = 85, $out += $escape($helpers.getFeeItemText(rs.type)), $out += " ", $line = 86), 
                $out += ' </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="', 
                $line = 88, $out += $escape(rs.count), $out += '"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="', 
                $line = 89, $out += $escape(rs.price), $out += '"></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="', 
                $line = 90, $out += $escape(rs.price * rs.count), $out += '"></td> <td><input type="text" class="col-xs-12" name="remark" value="', 
                $line = 91, $out += $escape(rs.remark), $out += '"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', 
                $line = 94;
            }), $out += " ", $line = 95), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20" data-id="{{id}}">\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>入住时间</div>\r\n			<div class="col-xs-3">\r\n				<input type="text" class="col-xs-12 datepicker" name="intakeTime" value="{{intakeTime}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary pull-left">*</span>星级</div>\r\n			<div class="col-xs-3">\r\n				<select class="col-xs-12" name="level">\r\n				{{#level | getHotelLevelOptions}}\r\n				</select>\r\n			</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">间数</div>\r\n			<div class="col-xs-3">\r\n				<input type="text" class="col-xs-12" name="roomCount" value="{{roomCount}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">指定酒店</div>\r\n			<div class="col-xs-11">\r\n				<input type="text" class="col-xs-12 hct-cursor T-choose-hotel" name="hotel" readonly value="{{hotelName}}" data-json="{{hotel}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">酒店要求</div>\r\n			<div class="col-xs-11">\r\n				<input type="text" class="col-xs-12" name="requireContent" value="{{if !!require}}{{require.requireContent}}{{/if}}" data-id="{{if !!require}}{{require.id}}{{/if}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-2 col-xs-offset-1">\r\n				<select class="col-xs-12 T-abversion">\r\n					<option value="0">内部操作</option>\r\n					<option value="1" {{if isTransfer == 1}}selected{{/if}}>外转操作</option>\r\n				</select> \r\n			</div>\r\n			<div class="col-xs-8{{if isTransfer == 1}} hidden{{/if}} T-internal">\r\n				<div class="col-xs-2 text-right no-padding-right control-label no-padding-left">责任部门</div>\r\n				<div class="col-xs-4">\r\n					<input type="text" class="col-xs-12" name="dutyDepartmentName" value="{{dutyDepartmentName}}" data-id="{{dutyDepartmentId}}">\r\n				</div>\r\n				<div class="col-xs-2 text-right no-padding-right control-label">责任计调</div>\r\n				<div class="col-xs-4">\r\n					<input type="text" class="col-xs-12" name="dutyUserName" value="{{dutyUserName}}" data-id="{{dutyUserId}}">\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-8{{if isTransfer != 1}} hidden{{/if}} T-peer">\r\n				<div class="col-xs-2 text-right no-padding-right control-label">同行</div>\r\n				<div class="col-xs-4">\r\n					<input type="text" class="col-xs-12" name="transferPartnerAgency" value="{{transferPartnerAgency}}" data-id="{{transferPartnerAgencyId}}">\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-2" style="padding-left: 20px;">\r\n				<button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>				\r\n			</div>\r\n			<div class="col-xs-8" style="padding-top: 4px;">\r\n				<label class="control-label pull-left" style="width: 35px;">应付</label>\r\n				<input type="text" readonly class="pull-left" name="needPayAllMoney" value="{{needPayAllMoney}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>费用项</th>\r\n						<th>数量</th>\r\n						<th>单价</th>\r\n						<th>金额</th>\r\n						<th>说明</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-fee-list" data-type="{{type}}" data-del-json="{{hotelFeeDel}}">\r\n				{{if hotelFee && hotelFee.length > 0}}\r\n					{{each hotelFee as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							{{if type === 1}}\r\n								{{if rs.type == 3}}中转结算价{{else}}酒店费用{{/if}}\r\n							{{else}}\r\n								{{rs.type | getFeeItemText}}\r\n							{{/if}}\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="{{rs.count}}"></td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="{{rs.price}}"></td>\r\n						<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{rs.price*rs.count}}"></td>\r\n						<td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}"></td>\r\n						<td><a class="cursor T-action T-delete">删除</a></td>\r\n					</tr>\r\n					{{/each}}\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});