/*TMODJS:{"debug":true,"version":19,"md5":"4a0d490ddca706d0b0ce09f23753ab5f"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/booking/update/updateHotel", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, id = $data.id, checkInTime = $data.checkInTime, checkOutTime = $data.checkOutTime, $string = $utils.$string, hotelLevel = $data.hotelLevel, roomCount = $data.roomCount, arrangeHotel = $data.arrangeHotel, hotel = $data.hotel, required = $data.required, opSide = $data.opSide, dutyDepartmentName = $data.dutyDepartmentName, dutyDepartmentId = $data.dutyDepartmentId, dutySubDepartmentName = $data.dutySubDepartmentName, dutySubDepartmentId = $data.dutySubDepartmentId, dutyUserName = $data.dutyUserName, dutyUserId = $data.dutyUserId, needPayMoney = $data.needPayMoney, feeDel = $data.feeDel, feeList = $data.feeList, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="container-fluid mar-t-20" data-id="', $line = 1, $out += $escape(id), 
            $out += '"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>入住日期</div> <div class="col-xs-3"> <input type="text" class="col-xs-12 datepicker" name="checkInTime" value="', 
            $line = 6, $out += $escape($helpers.dateFormat(checkInTime, "yyyy-MM-dd")), $out += '"> </div> <div class="col-xs-1 text-right no-padding-right control-label">离店日期</div> <div class="col-xs-3"> <input type="text" class="col-xs-12 datepicker" name="checkOutTime" value="', 
            $line = 10, $out += $escape($helpers.dateFormat(checkOutTime, "yyyy-MM-dd")), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary pull-left">*</span>星级</div> <div class="col-xs-3"> <select class="col-xs-12" name="hotelLevel"> ', 
            $line = 17, $out += $string($helpers.getHotelLevelOptions(hotelLevel)), $out += ' </select> </div> <div class="col-xs-1 text-right no-padding-right control-label">间数</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="roomCount" value="', 
            $line = 22, $out += $escape(roomCount), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">指定酒店</div> <div class="col-xs-11"> <input type="text" class="col-xs-12 hct-cursor T-choose-hotel" name="arrangeHotel" readonly value="', 
            $line = 28, $out += $escape(arrangeHotel), $out += '" data-json="', $line = 28, 
            $out += $escape(hotel), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">酒店要求</div> <div class="col-xs-11"> <input type="text" class="col-xs-12" name="required" value="', 
            $line = 34, $out += $escape(required), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-2 col-xs-offset-1"> <select class="col-xs-12 T-abversion"> <option value="0">本部操作</option> <option value="1" ', 
            $line = 41, 1 == opSide && ($out += "selected", $line = 41), $out += '>他部操作</option> </select> </div> <div class="col-xs-9', 
            $line = 44, 1 != opSide && ($out += " hidden", $line = 44), $out += ' T-internal"> <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">部门</div> <div class="col-xs-2"> <input type="text" class="col-xs-12" name="businessName" value="', 
            $line = 47, $out += $escape(dutyDepartmentName), $out += '" data-id="', $line = 47, 
            $out += $escape(dutyDepartmentId), $out += '"> </div> <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">子部门</div> <div class="col-xs-2"> <input type="text" class="col-xs-12" name="groupName" value="', 
            $line = 51, $out += $escape(dutySubDepartmentName), $out += '" data-id="', $line = 51, 
            $out += $escape(dutySubDepartmentId), $out += '" data-type="1"> </div> <div class="col-xs-2 text-right no-padding-right control-label">责任计调</div> <div class="col-xs-4"> <input type="text" class="col-xs-12" name="dutyUserName" value="', 
            $line = 55, $out += $escape(dutyUserName), $out += '" data-id="', $line = 55, $out += $escape(dutyUserId), 
            $out += '"> </div> </div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-2" style="padding-left: 20px;"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> <div class="col-xs-8" style="padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">应付</label> <input type="text" readonly class="pull-left F-float F-money" name="needPayAllMoney" value="', 
            $line = 65, $out += $escape(needPayMoney), $out += '"> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> <th>操作</th> </tr> </thead> <tbody class="T-fee-list" data-type="1" data-del-json="', 
            $line = 80, $out += $escape(feeDel), $out += '"> ', $line = 81, feeList && feeList.length > 0 && ($out += " ", 
            $line = 82, $each(feeList, function(rs) {
                $out += ' <tr data-id="', $line = 83, $out += $escape(rs.id), $out += '"> <td> <select class="col-xs-12" name="type"> <option value="8">酒店费用</option> </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="', 
                $line = 89, $out += $escape(rs.count), $out += '"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="', 
                $line = 90, $out += $escape(rs.price), $out += '"></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="', 
                $line = 91, $out += $escape(rs.price * rs.count), $out += '"></td> <td><input type="text" class="col-xs-12" name="remark" value="', 
                $line = 92, $out += $escape(rs.remark), $out += '"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', 
                $line = 95;
            }), $out += " ", $line = 96), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20" data-id="{{id}}">\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary">*</span>入住日期</div>\r\n            <div class="col-xs-3">\r\n                <input type="text" class="col-xs-12 datepicker" name="checkInTime" value="{{checkInTime | dateFormat: \'yyyy-MM-dd\'}}">\r\n            </div>\r\n            <div class="col-xs-1 text-right no-padding-right control-label">离店日期</div>\r\n            <div class="col-xs-3">\r\n                <input type="text" class="col-xs-12 datepicker" name="checkOutTime" value="{{checkOutTime | dateFormat: \'yyyy-MM-dd\'}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary pull-left">*</span>星级</div>\r\n            <div class="col-xs-3">\r\n                <select class="col-xs-12" name="hotelLevel">\r\n                {{#hotelLevel | getHotelLevelOptions}}\r\n                </select>\r\n            </div>\r\n            <div class="col-xs-1 text-right no-padding-right control-label">间数</div>\r\n            <div class="col-xs-3">\r\n                <input type="text" class="col-xs-12" name="roomCount" value="{{roomCount}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <div class="col-xs-1 text-right no-padding-right control-label">指定酒店</div>\r\n            <div class="col-xs-11">\r\n                <input type="text" class="col-xs-12 hct-cursor T-choose-hotel" name="arrangeHotel" readonly value="{{arrangeHotel}}" data-json="{{hotel}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <div class="col-xs-1 text-right no-padding-right control-label">酒店要求</div>\r\n            <div class="col-xs-11">\r\n                <input type="text" class="col-xs-12" name="required" value="{{required}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <div class="col-xs-2 col-xs-offset-1">\r\n                <select class="col-xs-12 T-abversion">\r\n                    <option value="0">本部操作</option>\r\n                    <option value="1" {{if opSide == 1}}selected{{/if}}>他部操作</option>\r\n                </select> \r\n            </div>\r\n            <div class="col-xs-9{{if opSide != 1}} hidden{{/if}} T-internal">\r\n                <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">部门</div>\r\n                <div class="col-xs-2">\r\n                    <input type="text" class="col-xs-12" name="businessName" value="{{dutyDepartmentName}}" data-id="{{dutyDepartmentId}}">\r\n                </div>\r\n                <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">子部门</div>\r\n                <div class="col-xs-2">\r\n                    <input type="text" class="col-xs-12" name="groupName" value="{{dutySubDepartmentName}}" data-id="{{dutySubDepartmentId}}" data-type="1">\r\n                </div>\r\n                <div class="col-xs-2 text-right no-padding-right control-label">责任计调</div>\r\n                <div class="col-xs-4">\r\n                    <input type="text" class="col-xs-12" name="dutyUserName" value="{{dutyUserName}}" data-id="{{dutyUserId}}">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20">\r\n            <div class="col-xs-2" style="padding-left: 20px;">\r\n                <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>               \r\n            </div>\r\n            <div class="col-xs-8" style="padding-top: 4px;">\r\n                <label class="control-label pull-left" style="width: 35px;">应付</label>\r\n                <input type="text" readonly class="pull-left F-float F-money" name="needPayAllMoney" value="{{needPayMoney}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20">\r\n            <table class="table table-striped table-new table-bordered table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th>费用项</th>\r\n                        <th>数量</th>\r\n                        <th>单价</th>\r\n                        <th>金额</th>\r\n                        <th>说明</th>\r\n                        <th>操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-fee-list" data-type="1" data-del-json="{{feeDel}}">\r\n                {{if feeList && feeList.length > 0}}\r\n                    {{each feeList as rs}}\r\n                    <tr data-id="{{rs.id}}">\r\n                        <td>\r\n                            <select class="col-xs-12" name="type">\r\n                                <option value="8">酒店费用</option>\r\n                            </select>\r\n                        </td>\r\n                        <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="{{rs.count}}"></td>\r\n                        <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="{{rs.price}}"></td>\r\n                        <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{rs.price*rs.count}}"></td>\r\n                        <td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}"></td>\r\n                        <td><a class="cursor T-action T-delete">删除</a></td>\r\n                    </tr>\r\n                    {{/each}}\r\n                {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n            <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});