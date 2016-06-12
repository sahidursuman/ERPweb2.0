/*TMODJS:{"debug":true,"version":8,"md5":"94a519e49dccf2aadfcb301349a906be"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/booking/update/updateMoney", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, sumNeedGetMoney = $data.sumNeedGetMoney, preIncomeMoney = $data.preIncomeMoney, feeDel = $data.feeDel, feeList = $data.feeList, $each = $utils.$each, $string = ($data.rs, 
            $data.$index, $utils.$string), $out = "";
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12 mar-t-20"> <label class="control-label pull-left" style="width: 35px;">应收</label> <input type="text" readonly class="pull-left F-float F-money" name="sumNeedGetMoney" value="', 
            $line = 6, $out += $escape(sumNeedGetMoney), $out += '"> <label class="control-label pull-left" style="width: 70px; padding-left: 24px;">预收款</label> <input type="text" class="pull-left F-float F-money" name="preIncomeMoney" value="', 
            $line = 8, $out += $escape(preIncomeMoney), $out += '"> </div> <div class="col-xs-12 mar-t-20"> <label class="control-label" style="width: 35px;"></label><button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> <th width="50">操作</th> </tr> </thead> <tbody class="T-fee-list" data-del-json="', 
            $line = 25, $out += $escape(feeDel), $out += '"> ', $line = 26, feeList && feeList.length > 0 ? ($out += " ", 
            $line = 27, $each(feeList, function(rs) {
                $out += ' <tr data-id="', $line = 28, $out += $escape(rs.id), $out += '"> <td> <select name="type" class="col-xs-12"> ', 
                $line = 31, $out += $string($helpers.getFeeItemType(rs.type)), $out += ' </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="', 
                $line = 34, $out += $escape(rs.count), $out += '"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="', 
                $line = 35, $out += $escape(rs.price), $out += '"></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="', 
                $line = 36, $out += $escape(rs.price * rs.count), $out += '"></td> <td><input type="text" class="col-xs-12" name="remark" value="', 
                $line = 37, $out += $escape(rs.remark), $out += '"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', 
                $line = 40;
            }), $out += " ", $line = 41) : ($out += ' <tr> <td> <select name="type" class="col-xs-12"> ', 
            $line = 45, $out += $string($helpers.getFeeItemType(0)), $out += ' </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price"></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly></td> <td><input type="text" class="col-xs-12" name="remark"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', 
            $line = 54), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n    <div class="row">\r\n        \r\n        <div class="col-xs-12 mar-t-20">\r\n            <label class="control-label pull-left" style="width: 35px;">应收</label>\r\n            <input type="text" readonly class="pull-left F-float F-money" name="sumNeedGetMoney" value="{{sumNeedGetMoney}}">\r\n            <label class="control-label pull-left" style="width: 70px; padding-left: 24px;">预收款</label>\r\n            <input type="text" class="pull-left F-float F-money" name="preIncomeMoney" value="{{preIncomeMoney}}">\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20">\r\n            <label class="control-label" style="width: 35px;"></label><button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20">\r\n            <table class="table table-striped table-new table-bordered table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th>费用项</th>\r\n                        <th>数量</th>\r\n                        <th>单价</th>\r\n                        <th>金额</th>\r\n                        <th>说明</th>\r\n                        <th width="50">操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-fee-list" data-del-json="{{feeDel}}">\r\n                {{if feeList && feeList.length > 0}}\r\n                    {{each feeList as rs}}\r\n                    <tr data-id="{{rs.id}}">\r\n                        <td>\r\n                            <select name="type" class="col-xs-12">\r\n                                {{#rs.type | getFeeItemType}}\r\n                            </select>\r\n                        </td>\r\n                        <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="{{rs.count}}"></td>\r\n                        <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="{{rs.price}}"></td>\r\n                        <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{rs.price*rs.count}}"></td>\r\n                        <td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}"></td>\r\n                        <td><a class="cursor T-action T-delete">删除</a></td>\r\n                    </tr>\r\n                    {{/each}}\r\n                {{else}}\r\n                    <tr>\r\n                        <td>\r\n                            <select name="type" class="col-xs-12">\r\n                                {{#0 | getFeeItemType}}\r\n                            </select>\r\n                        </td>\r\n                        <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count"></td>\r\n                        <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price"></td>\r\n                        <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly></td>\r\n                        <td><input type="text" class="col-xs-12" name="remark"></td>\r\n                        <td><a class="cursor T-action T-delete">删除</a></td>\r\n                    </tr>\r\n                {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n            <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});