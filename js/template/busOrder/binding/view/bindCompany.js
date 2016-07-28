/*TMODJS:{"debug":true,"version":22,"md5":"3ee6ef7f8cdf7809d292f422c75c9fff"}*/
define(function(require) {
    return require("../../../template")("busOrder/binding/view/bindCompany", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, name = $data.name, $out = "";
            return $out += '<div class="col-xs-12 T-bindCompanyContent globalAdd"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">车队名称</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" value="', 
            $line = 6, $out += $escape(name), $out += '" readonly /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>商家账号名称</label> <div class="col-sm-3"> <input type="hidden"> <input type="text" name="userName" class="col-sm-12" maxlength="32" /> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>商家账号密码</label> <div class="col-sm-3"> <input type="hidden"> <input type="password" name="passWord" class="col-sm-12" maxlength="32" /> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-save guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 T-bindCompanyContent globalAdd">\r\n    <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label class="col-sm-2 control-label no-padding-right">车队名称</label>\r\n            <div class="col-sm-3">\r\n                <input type="text" name="name" class="col-sm-12" value="{{name}}" readonly />\r\n            </div>\r\n        </div>\r\n        <div class="form-group">\r\n            <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>商家账号名称</label>\r\n            <div class="col-sm-3">\r\n                <input type="hidden">\r\n                <input type="text" name="userName" class="col-sm-12" maxlength="32" />\r\n            </div>\r\n            <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>商家账号密码</label> \r\n            <div class="col-sm-3">\r\n                <input type="hidden">\r\n                <input type="password" name="passWord" class="col-sm-12" maxlength="32" />\r\n            </div>\r\n        </div>\r\n        <div class="space-10"></div>\r\n        <button class="btn btn-block btn-primary T-save guideSubmit">\r\n            <i class="ace-icon fa fa-check"></i>\r\n            提交信息\r\n        </button>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});