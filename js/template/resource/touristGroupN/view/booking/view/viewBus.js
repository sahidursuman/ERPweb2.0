/*TMODJS:{"debug":true,"version":5,"md5":"779ff1957f9860aceb954e70ebb4d6cb"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/booking/view/viewBus", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, id = $data.id, startUseTime = $data.startUseTime, endUseTime = $data.endUseTime, required = $data.required, opSide = $data.opSide, dutyDepartmentName = $data.dutyDepartmentName, dutySubDepartmentName = $data.dutySubDepartmentName, dutyUserName = $data.dutyUserName, needPayMoney = $data.needPayMoney, feeDel = $data.feeDel, feeList = $data.feeList, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="container-fluid mar-t-20" data-id="', $line = 1, $out += $escape(id), 
            $out += '"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right control-label">用车时间</div> <div class="col-xs-7 control-label"> ', 
            $line = 6, $out += $escape($helpers.dateFormat(startUseTime, "yyyy-MM-dd hh:mm")), 
            $out += " 至 ", $line = 6, $out += $escape($helpers.dateFormat(endUseTime, "yyyy-MM-dd hh:mm")), 
            $out += ' </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">车辆要求</div> <div class="col-xs-11 control-label"> ', 
            $line = 12, $out += $escape(required), $out += ' </div> </div> <div class="col-xs-12 mar-t-10"> ', 
            $line = 16, 1 == opSide && ($out += ' <div class="col-xs-9"> <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">部门</div> <div class="col-xs-2 control-label"> ', 
            $line = 20, $out += $escape(dutyDepartmentName), $out += ' </div> <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">子部门</div> <div class="col-xs-2 control-label"> ', 
            $line = 24, $out += $escape(dutySubDepartmentName), $out += ' </div> <div class="col-xs-2 text-right no-padding-right control-label">责任计调</div> <div class="col-xs-4 control-label"> ', 
            $line = 28, $out += $escape(dutyUserName), $out += " </div> </div> ", $line = 31), 
            $out += ' </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-8" style="padding-top: 4px;"> <label class="control-label pull-left" style="width: 35px;">应付</label> <input type="text" readonly class="pull-left F-float F-money" value="', 
            $line = 36, $out += $escape(needPayMoney), $out += '"> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> </tr> </thead> <tbody class="T-fee-list" data-type="4" data-del-json="', 
            $line = 50, $out += $escape(feeDel), $out += '"> ', $line = 51, feeList && feeList.length > 0 && ($out += " ", 
            $line = 52, $each(feeList, function(rs) {
                $out += ' <tr> <td>车辆费用</td> <td><span class="F-float F-count">', $line = 55, $out += $escape(rs.count), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 56, $out += $escape(rs.price), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 57, $out += $escape(rs.price * rs.count), 
                $out += "</span></td> <td>", $line = 58, $out += $escape(rs.remark), $out += "</td> </tr> ", 
                $line = 60;
            }), $out += " ", $line = 61), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20" data-id="{{id}}">\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <div class="col-xs-1 text-right no-padding-right control-label">用车时间</div>\r\n            <div class="col-xs-7 control-label">\r\n                {{startUseTime | dateFormat: \'yyyy-MM-dd hh:mm\'}} 至 {{endUseTime | dateFormat: \'yyyy-MM-dd hh:mm\'}}\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            <div class="col-xs-1 text-right no-padding-right control-label">车辆要求</div>\r\n            <div class="col-xs-11 control-label">\r\n                {{required}}\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-10">\r\n            {{if opSide == 1}}\r\n            <div class="col-xs-9">\r\n                <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">部门</div>\r\n                <div class="col-xs-2 control-label">\r\n                    {{dutyDepartmentName}}\r\n                </div>\r\n                <div class="col-xs-1 text-right no-padding-right control-label no-padding-left">子部门</div>\r\n                <div class="col-xs-2 control-label">\r\n                    {{dutySubDepartmentName}}\r\n                </div>\r\n                <div class="col-xs-2 text-right no-padding-right control-label">责任计调</div>\r\n                <div class="col-xs-4 control-label">\r\n                    {{dutyUserName}}\r\n                </div>\r\n            </div>\r\n            {{/if}}\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20">\r\n            <div class="col-xs-8" style="padding-top: 4px;">\r\n                <label class="control-label pull-left" style="width: 35px;">应付</label>\r\n                <input type="text" readonly class="pull-left F-float F-money" value="{{needPayMoney}}">\r\n            </div>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20">\r\n            <table class="table table-striped table-new table-bordered table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th>费用项</th>\r\n                        <th>数量</th>\r\n                        <th>单价</th>\r\n                        <th>金额</th>\r\n                        <th>说明</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-fee-list" data-type="4" data-del-json="{{feeDel}}">\r\n                {{if feeList && feeList.length > 0}}\r\n                    {{each feeList as rs}}\r\n                    <tr>\r\n                        <td>车辆费用</td>\r\n                        <td><span class="F-float F-count">{{rs.count}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.price}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.price*rs.count}}</span></td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n            <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});