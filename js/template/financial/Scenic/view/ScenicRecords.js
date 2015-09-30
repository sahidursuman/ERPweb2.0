/*TMODJS:{"debug":true,"version":7,"md5":"43ba90d5dd0ab1078972a842048227f0"}*/
define(function(require) {
    return require("../../../template")("financial/Scenic/view/ScenicRecords", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, financialScenicSettlementRecordList = $data.financialScenicSettlementRecordList, $escape = ($data.record, 
            $data.index, $utils.$escape), $out = "";
            return $out += '<div class="row scenicFinancialRecords"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>操作详情</th> </tr> </thead> <tbody> ', 
            $line = 9, $each(financialScenicSettlementRecordList, function(record) {
                $out += " <tr> <td>操作者:", $line = 11, $out += $escape(record.operationUser), $out += ",操作时间:", 
                $line = 11, $out += $escape($helpers.dateFormat(record.operationTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += ", 操作详情:(账期:", $line = 12, $out += $escape(record.year), $out += "年", $line = 12, 
                $out += $escape(record.month), $out += "月,付款金额:", $line = 12, $out += $escape(record.payMoney), 
                $out += ",付款方式:", $line = 12, $out += $escape(record.payType), $out += ",备注:", $line = 12, 
                $out += $escape(record.remark), $out += ")</td> </tr> ", $line = 14;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row scenicFinancialRecords">\r\n <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n        <tr>\r\n            <th>操作详情</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n          {{each financialScenicSettlementRecordList as record index}}\r\n	        <tr>\r\n	           <td>操作者:{{record.operationUser}},操作时间:{{record.operationTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}},\r\n	                                            操作详情:(账期:{{record.year}}年{{record.month}}月,付款金额:{{record.payMoney}},付款方式:{{record.payType}},备注:{{record.remark}})</td>\r\n	        </tr>\r\n	      {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});