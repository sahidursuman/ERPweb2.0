/*TMODJS:{"debug":true,"version":6,"md5":"9bb4be0ad541f6c3defc543889d669f0"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/booking/view/viewMoney", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, sumNeedGetMoney = $data.sumNeedGetMoney, preIncomeMoney = $data.preIncomeMoney, feeDel = $data.feeDel, feeList = $data.feeList, $each = $utils.$each, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12 mar-t-20"> <label class="control-label pull-left" style="width: 35px;">应收</label> <span class="control-label pull-left F-float F-money">', 
            $line = 6, $out += $escape(sumNeedGetMoney), $out += '</span> <label class="control-label pull-left" style="width: 70px; padding-left: 24px;">预收款</label> <span class="control-label pull-left F-float F-money">', 
            $line = 8, $out += $escape(preIncomeMoney), $out += '</span> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> </tr> </thead> <tbody class="T-fee-list" data-del-json="', 
            $line = 21, $out += $escape(feeDel), $out += '"> ', $line = 22, feeList && feeList.length > 0 && ($out += " ", 
            $line = 23, $each(feeList, function(rs) {
                $out += " <tr> <td>", $line = 25, $out += $escape($helpers.getFeeItemText(rs.type)), 
                $out += '</td> <td><span class="F-float F-count">', $line = 26, $out += $escape(rs.count), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 27, $out += $escape(rs.price), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 28, $out += $escape(rs.price * rs.count), 
                $out += "</span></td> <td>", $line = 29, $out += $escape(rs.remark), $out += "</td> </tr> ", 
                $line = 31;
            }), $out += " ", $line = 32), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n    <div class="row">\r\n        \r\n        <div class="col-xs-12 mar-t-20">\r\n            <label class="control-label pull-left" style="width: 35px;">应收</label>\r\n            <span class="control-label pull-left F-float F-money">{{sumNeedGetMoney}}</span>\r\n            <label class="control-label pull-left" style="width: 70px; padding-left: 24px;">预收款</label>\r\n            <span class="control-label pull-left F-float F-money">{{preIncomeMoney}}</span>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20">\r\n            <table class="table table-striped table-new table-bordered table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th>费用项</th>\r\n                        <th>数量</th>\r\n                        <th>单价</th>\r\n                        <th>金额</th>\r\n                        <th>说明</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-fee-list" data-del-json="{{feeDel}}">\r\n                {{if feeList && feeList.length > 0}}\r\n                    {{each feeList as rs}}\r\n                    <tr>\r\n                        <td>{{rs.type | getFeeItemText}}</td>\r\n                        <td><span class="F-float F-count">{{rs.count}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.price}}</span></td>\r\n                        <td><span class="F-float F-money">{{rs.price*rs.count}}</span></td>\r\n                        <td>{{rs.remark}}</td>\r\n                    </tr>\r\n                    {{/each}}\r\n                {{/if}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n            <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});