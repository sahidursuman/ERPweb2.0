/*TMODJS:{"debug":true,"version":29,"md5":"f3bbb98c2cd4856eaf7537be2f41f943"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/viewCostRemark", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), touristGroupFeeList = $data.touristGroupFeeList, $each = $utils.$each, $escape = ($data.touristGroupFee, 
            $data.index, $utils.$escape), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody class="T-tripDetail"> <tr> ', 
            $line = 13, touristGroupFeeList.length > 0 ? ($out += " ", $line = 14, $each(touristGroupFeeList, function(touristGroupFee) {
                $out += " <tr> <td>", $line = 16, $out += $escape(touristGroupFee.name), $out += "</td> <td>", 
                $line = 17, $out += $escape(touristGroupFee.count), $out += "</td> <td>", $line = 18, 
                $out += $escape(touristGroupFee.price), $out += "</td> <td> ", $line = 20, $out += $escape(touristGroupFee.price * touristGroupFee.count), 
                $out += " </td> <td> ", $line = 23, $out += $escape(touristGroupFee.remark), $out += " </td> </tr> ", 
                $line = 26;
            }), $out += " ", $line = 27) : ($out += ' <tr> <td colspan="5">暂无数据</td> </tr> ', 
            $line = 31), $out += " </tbody> </table>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover">\r\n    <thead>\r\n        <tr>\r\n            <th class="th-border">费用项</th>\r\n            <th class="th-border">数量</th>\r\n            <th class="th-border">单价</th>\r\n            <th class="th-border">金额</th>\r\n            <th class="th-border">说明</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-tripDetail">\r\n    <tr>\r\n        {{if touristGroupFeeList.length>0}}\r\n            {{each touristGroupFeeList as touristGroupFee index}}\r\n                <tr>\r\n                    <td>{{touristGroupFee.name}}</td>\r\n                    <td>{{touristGroupFee.count}}</td>\r\n                    <td>{{touristGroupFee.price}}</td>\r\n                    <td>\r\n                        {{touristGroupFee.price*touristGroupFee.count}}\r\n                    </td>\r\n                    <td>\r\n                        {{touristGroupFee.remark}}\r\n                    </td>\r\n                </tr>\r\n            {{/each}}\r\n        {{else}}\r\n            <tr>\r\n                <td colspan="5">暂无数据</td>\r\n            </tr>\r\n        {{/if}}\r\n    </tbody>\r\n</table>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});