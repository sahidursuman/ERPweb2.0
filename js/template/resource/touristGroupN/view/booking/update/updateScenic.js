/*TMODJS:{"debug":true,"version":3,"md5":"a5d72291b0e715506725f90bc97276cc"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/booking/update/updateScenic", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, id = $data.id, checkOutTime = $data.checkOutTime, startCity = $data.startCity, arriveCity = $data.arriveCity, require = $data.require, isTransfer = $data.isTransfer, businessName = $data.businessName, dutyDepartmentId = $data.dutyDepartmentId, groupName = $data.groupName, dutyUserName = $data.dutyUserName, dutyUserId = $data.dutyUserId, transferPartnerAgency = $data.transferPartnerAgency, transferPartnerAgencyId = $data.transferPartnerAgencyId, needPayAllMoney = $data.needPayAllMoney, scenicFeeDel = $data.scenicFeeDel, scenicFee = $data.scenicFee, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="container-fluid mar-t-20" data-id="', $line = 1, $out += $escape(id), 
            $out += '"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right control-label">出游日期</div> <div class="col-xs-3"> <input type="text" class="col-xs-12 datepicker" name="checkOutTime" value="', 
            $line = 6, $out += $escape($helpers.dateFormat(checkOutTime, "yyyy-MM-dd")), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary pull-left">*</span>景区</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="startCity" value="', 
            $line = 12, $out += $escape(startCity), $out += '"> </div> <div class="col-xs-1 text-right no-padding-right control-label">门票数量</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="arriveCity" value="', 
            $line = 16, $out += $escape(arriveCity), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">景区要求</div> <div class="col-xs-11"> <input type="text" class="col-xs-12" name="require" ', 
            $line = 22, require && ($out += 'value="', $line = 22, $out += $escape(require.requireContent), 
            $out += '" data-id="', $line = 22, $out += $escape(require.id), $out += '"', $line = 22), 
            $out += '> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-2 col-xs-offset-1"> <select class="col-xs-12 T-abversion"> <option value="0">本部操作</option> <option value="1" ', 
            $line = 29, 1 == isTransfer && ($out += "selected", $line = 29), $out += '>他部操作</option> </select> </div> <div class="col-xs-9', 
            $line = 32, 1 != isTransfer && ($out += " hidden", $line = 32), $out += ' T-internal"> <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">部门</div> <div class="col-xs-2"> <input type="text" class="col-xs-12" name="businessName" value="', 
            $line = 35, $out += $escape(businessName), $out += '" data-id="', $line = 35, $out += $escape(dutyDepartmentId), 
            $out += '"> </div> <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">子部门</div> <div class="col-xs-2"> <input type="text" class="col-xs-12" name="groupName" value="', 
            $line = 39, $out += $escape(groupName), $out += '" data-id="', $line = 39, $out += $escape(dutyDepartmentId), 
            $out += '"> </div> <div class="col-xs-2 text-right no-padding-right control-label">责任计调</div> <div class="col-xs-4"> <input type="text" class="col-xs-12" name="dutyUserName" value="', 
            $line = 43, $out += $escape(dutyUserName), $out += '" data-id="', $line = 43, $out += $escape(dutyUserId), 
            $out += '"> </div> </div> <div class="col-xs-8', $line = 46, 2 != isTransfer && ($out += " hidden", 
            $line = 46), $out += ' T-peer"> <div class="col-xs-2 text-right no-padding-right control-label">同行</div> <div class="col-xs-4"> <input type="text" class="col-xs-12" name="transferPartnerAgency" value="', 
            $line = 49, $out += $escape(transferPartnerAgency), $out += '" data-id="', $line = 49, 
            $out += $escape(transferPartnerAgencyId), $out += '"> </div> </div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-2" style="padding-left: 20px;"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> <div class="col-xs-8" style="padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">应付</label> <input type="text" readonly class="pull-left F-float F-money" name="needPayAllMoney" value="', 
            $line = 59, $out += $escape(needPayAllMoney), $out += '"> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> <th>操作</th> </tr> </thead> <tbody class="T-fee-list" data-type="3" data-del-json="', 
            $line = 74, $out += $escape(scenicFeeDel), $out += '"> ', $line = 75, scenicFee && scenicFee.length > 0 && ($out += " ", 
            $line = 76, $each(scenicFee, function(rs) {
                $out += ' <tr data-id="', $line = 77, $out += $escape(rs.id), $out += '"> <td> <select class="col-xs-12" name="type"> <option value="9"景区费用</option> </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="', 
                $line = 83, $out += $escape(rs.count), $out += '"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="', 
                $line = 84, $out += $escape(rs.price), $out += '"></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="', 
                $line = 85, $out += $escape(rs.price * rs.count), $out += '"></td> <td><input type="text" class="col-xs-12" name="remark" value="', 
                $line = 86, $out += $escape(rs.remark), $out += '"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', 
                $line = 89;
            }), $out += " ", $line = 90), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20" data-id="{{id}}">\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <div class="col-xs-1 text-right no-padding-right control-label">出游日期</div>\r\n            <div class="col-xs-3">\r\n                <input type="text" class="col-xs-12 datepicker" name="checkOutTime" value="{{checkOutTime | dateFormat: \'yyyy-MM-dd\'}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <div class="col-xs-1 text-right no-padding-right control-label"><span class="necessary pull-left">*</span>景区</div>\r\n            <div class="col-xs-3">\r\n                <input type="text" class="col-xs-12" name="startCity" value="{{startCity}}">\r\n            </div>\r\n            <div class="col-xs-1 text-right no-padding-right control-label">门票数量</div>\r\n            <div class="col-xs-3">\r\n                <input type="text" class="col-xs-12" name="arriveCity" value="{{arriveCity}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <div class="col-xs-1 text-right no-padding-right control-label">景区要求</div>\r\n            <div class="col-xs-11">\r\n                <input type="text" class="col-xs-12" name="require" {{if !!require}}value="{{require.requireContent}}" data-id="{{require.id}}"{{/if}}>\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <div class="col-xs-2 col-xs-offset-1">\r\n                <select class="col-xs-12 T-abversion">\r\n                    <option value="0">本部操作</option>\r\n                    <option value="1" {{if isTransfer == 1}}selected{{/if}}>他部操作</option>\r\n                </select> \r\n            </div>\r\n            <div class="col-xs-9{{if isTransfer != 1}} hidden{{/if}} T-internal">\r\n                <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">部门</div>\r\n                <div class="col-xs-2">\r\n                    <input type="text" class="col-xs-12" name="businessName" value="{{businessName}}" data-id="{{dutyDepartmentId}}">\r\n                </div>\r\n                <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">子部门</div>\r\n                <div class="col-xs-2">\r\n                    <input type="text" class="col-xs-12" name="groupName" value="{{groupName}}" data-id="{{dutyDepartmentId}}">\r\n                </div>\r\n                <div class="col-xs-2 text-right no-padding-right control-label">责任计调</div>\r\n                <div class="col-xs-4">\r\n                    <input type="text" class="col-xs-12" name="dutyUserName" value="{{dutyUserName}}" data-id="{{dutyUserId}}">\r\n                </div>\r\n            </div>\r\n            <div class="col-xs-8{{if isTransfer != 2}} hidden{{/if}} T-peer">\r\n                <div class="col-xs-2 text-right no-padding-right control-label">同行</div>\r\n                <div class="col-xs-4">\r\n                    <input type="text" class="col-xs-12" name="transferPartnerAgency" value="{{transferPartnerAgency}}" data-id="{{transferPartnerAgencyId}}">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20">\r\n            <div class="col-xs-2" style="padding-left: 20px;">\r\n                <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>               \r\n            </div>\r\n            <div class="col-xs-8" style="padding-top: 4px;">\r\n                <label class="control-label pull-left" style="width: 35px;">应付</label>\r\n                <input type="text" readonly class="pull-left F-float F-money" name="needPayAllMoney" value="{{needPayAllMoney}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20">\r\n            <table class="table table-striped table-new table-bordered table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th>费用项</th>\r\n                        <th>数量</th>\r\n                        <th>单价</th>\r\n                        <th>金额</th>\r\n                        <th>说明</th>\r\n                        <th>操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-fee-list" data-type="3" data-del-json="{{scenicFeeDel}}">\r\n                {{if scenicFee && scenicFee.length > 0}}\r\n                    {{each scenicFee as rs}}\r\n                    <tr data-id="{{rs.id}}">\r\n                        <td>\r\n                            <select class="col-xs-12" name="type">\r\n                                <option value="9"景区费用</option>\r\n                            </select>\r\n                        </td>\r\n                        <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="{{rs.count}}"></td>\r\n                        <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="{{rs.price}}"></td>\r\n                        <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{rs.price*rs.count}}"></td>\r\n                        <td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}"></td>\r\n                        <td><a class="cursor T-action T-delete">删除</a></td>\r\n                    </tr>\r\n                    {{/each}}\r\n                {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n            <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});