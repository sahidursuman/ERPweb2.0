/*TMODJS:{"debug":true,"version":3,"md5":"2a9b5ce87c28b83c21a71377252a3ff1"}*/
define(function(require) {
    return require("../../../../template")("resource/touristGroupN/view/tourists/addFee", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $string = $utils.$string, $out = "";
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody class="T-feeAdjustBody"> <tr> <td> <select name="type" class="col-sm-12"> ', 
            $line = 18, $out += $string($helpers.getFeeItemType(1)), $out += ' </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price"></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly></td> <td><input type="text" class="col-xs-12" name="remark"></td> </tr> </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary T-btn-save"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-new table-bordered table-hover">\r\n                <thead>\r\n                    <tr>\r\n                        <th class="th-border">费用项</th>\r\n                        <th class="th-border">数量</th>\r\n                        <th class="th-border">单价</th>\r\n                        <th class="th-border">金额</th>\r\n                        <th class="th-border">说明</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-feeAdjustBody">\r\n                    <tr>\r\n                        <td>\r\n                            <select name="type" class="col-sm-12">\r\n                                {{#1 | getFeeItemType}}\r\n                            </select>\r\n                        </td>\r\n                        <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count"></td>\r\n                        <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price"></td>\r\n                        <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly></td>\r\n                        <td><input type="text" class="col-xs-12" name="remark"></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n            <button class="btn btn-sm btn-primary T-btn-save"> <i class="ace-icon fa fa-check"></i> 提交信息 </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});