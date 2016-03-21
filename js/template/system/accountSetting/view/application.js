/*TMODJS:{"debug":true,"version":70,"md5":"365af11972160c27a49f4ab3cc817e6f"}*/
define(function(require) {
    return require("../../../template")("system/accountSetting/view/application", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, oldMobile = $data.oldMobile, $out = "";
            return $out += '<div class="applicationMain" style="margin-top: 10px;"> <form class="T-main-form" role="form" onsubmit="return false"> <span style="margin-left: 40px;font-family: \'宋体\';color: #666666">为了保证您的账号安全，更换手机前请先进行安全验证</span> <span style="margin-left: 40px;font-family: \'宋体\';color: #666666;display: inline-block;">发送成功，<a class="T-solution">收不到验证怎么办?</a> </span> <h5 style="margin-left: 40px;font-family: \'宋体\';font-weight: bold;">验证方式</h5> <div class="application"><span style="margin-left: 46px;margin-top: 11px;position: absolute;font-size: 12px;">绑定手机</span> <input type="text" placeholder="" name="mobile" class="newPhone" disabled="disabled" value="', 
            $line = 7, $out += $escape(oldMobile), $out += '" style="width: 370px;height: 40px !important;padding-left:60px !important;"></div> <div class="application" style="margin-top: 20px;padding: 0px 0px 20px 0px;"> <input type="text" name="verifyCode" placeholder="短信验证码" class="Verification-code" style="width: 240px;height: 40px !important;"><input class="applicationBtn T-applicationBtn" type="button" id="send" style="width: 120px;height: 40px !important;margin-left: 6px;" value="发送验证码"></div> <button class="btn btn-block btn-primary T-newPhone guideSubmit" style="width:400px;margin-left:20px;"> <i class="ace-icon fa fa-check"></i> 确定 </button> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="applicationMain" style="margin-top: 10px;">\r\n	<form class="T-main-form" role="form" onsubmit="return false">\r\n		<span style="margin-left: 40px;font-family: \'宋体\';color: #666666">为了保证您的账号安全，更换手机前请先进行安全验证</span>\r\n		<span style="margin-left: 40px;font-family: \'宋体\';color: #666666;display: inline-block;">发送成功，<a class="T-solution">收不到验证怎么办?</a> </span> \r\n		<h5 style="margin-left: 40px;font-family: \'宋体\';font-weight: bold;">验证方式</h5>\r\n		<div class="application"><span style="margin-left: 46px;margin-top: 11px;position: absolute;font-size: 12px;">绑定手机</span>\r\n		<input type="text" placeholder="" name="mobile" class="newPhone" disabled="disabled" value="{{oldMobile}}" style="width: 370px;height: 40px !important;padding-left:60px !important;"></div>\r\n		<div class="application" style="margin-top: 20px;padding: 0px 0px 20px 0px;">\r\n		<input type="text" name="verifyCode" placeholder="短信验证码" class="Verification-code" style="width: 240px;height: 40px !important;"><input class="applicationBtn T-applicationBtn" type="button" id="send"  style="width: 120px;height: 40px !important;margin-left: 6px;" value="发送验证码"></div>\r\n\r\n		<button class="btn btn-block btn-primary T-newPhone guideSubmit" style="width:400px;margin-left:20px;"> <i class="ace-icon fa fa-check"></i> 确定 </button>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});