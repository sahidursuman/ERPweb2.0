/*TMODJS:{"debug":true,"version":17,"md5":"b2b7688766f2fb04be338e2082f5115c"}*/
define(function(require) {
    return require("../../../template")("busOrder/newOrder/view/chooseCompany", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, bindAccountList = $data.bindAccountList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $out = "";
            return $out += '<div class="col-sm-12 T-chooseCompanyContent globalAdd"> <table class="table table-striped table-bordered table-hover table-text-center mar-t-20"> <thead> <tr> <th>选择</th> <th>车队名称</th> </tr> </thead> <tbody> ', 
            $line = 10, $each(bindAccountList, function(rs) {
                $out += ' <tr data-token="', $line = 11, $out += $escape(rs.authToken), $out += '" data-name="', 
                $line = 11, $out += $escape(rs.name), $out += '"> <td><label> <input class="ace" name="chooseCompanyRadio" type="radio"><span class="lbl"></span></label></td> <td>', 
                $line = 13, $out += $escape(rs.name), $out += "</td> </tr> ", $line = 15;
            }), $out += ' </tbody> </table> <div class="mar-t20"> <button class="btn btn-block btn-primary T-save guideSubmit"><i class="ace-icon fa fa-check"></i>提交 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 T-chooseCompanyContent globalAdd">\r\n    <table class="table table-striped table-bordered table-hover table-text-center mar-t-20">\r\n        <thead>\r\n            <tr>\r\n                <th>选择</th>\r\n                <th>车队名称</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each bindAccountList as rs index}}\r\n            <tr data-token="{{rs.authToken}}" data-name="{{rs.name}}">\r\n                <td><label> <input class="ace" name="chooseCompanyRadio" type="radio"><span class="lbl"></span></label></td>\r\n                <td>{{rs.name}}</td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="mar-t20">\r\n        <button class="btn btn-block btn-primary T-save guideSubmit"><i class="ace-icon fa fa-check"></i>提交 </button>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});