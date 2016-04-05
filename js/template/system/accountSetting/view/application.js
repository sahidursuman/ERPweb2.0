/*TMODJS:{"debug":true,"version":76,"md5":"15181987a25b6ef0b0e7b893c626c4e4"}*/
define(function(require) {
    return require("../../../template")("system/accountSetting/view/application", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, oldMobile = $data.oldMobile, $out = "";
            return $out += '<div class="applicationMain" id="T-applicationMain" style="margin-top: 10px;"> <form class="T-main-form" role="form" onsubmit="return false"> <span class="addPhone-prompt">为了保证您的账号安全，更换手机前请先进行安全验证</span> <span class="addPhone-prompt" style="display: inline-block;margin-top: -10px;">发送成功， <a class="T-solution">收不到验证怎么办?</a> </span> <h5 class="application-style">验证方式</h5> <div class="application"> <span class="fixedPhone">绑定手机</span> <input type="text" placeholder="" name="mobile" class="newPhone application-newPhone" disabled="disabled" value="', 
            $line = 10, $out += $escape(oldMobile), $out += '"> </div> <div class="application mar-t-20 pad-b-20"> <input type="text" name="verifyCode" placeholder="短信验证码" class="Verification-code" style="width: 240px;height: 40px !important;"> <input class="applicationBtn T-applicationBtn" type="button" id="send" value="发送验证码"> </div> <button class="btn btn-block btn-primary T-newPhone guideSubmit" style="width:400px;margin-left:20px;"> <i class="ace-icon fa fa-check"></i> 确定 </button> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="applicationMain" id="T-applicationMain" style="margin-top: 10px;">\r\n	<form class="T-main-form" role="form" onsubmit="return false">\r\n		<span class="addPhone-prompt">为了保证您的账号安全，更换手机前请先进行安全验证</span>\r\n		<span class="addPhone-prompt" style="display: inline-block;margin-top: -10px;">发送成功，\r\n			<a class="T-solution">收不到验证怎么办?</a> \r\n		</span> \r\n		<h5 class="application-style">验证方式</h5>\r\n		<div class="application">\r\n			<span class="fixedPhone">绑定手机</span>\r\n			<input type="text" placeholder="" name="mobile" class="newPhone application-newPhone" disabled="disabled" value="{{oldMobile}}">\r\n		</div>\r\n		<div class="application mar-t-20 pad-b-20">\r\n			<input type="text" name="verifyCode" placeholder="短信验证码" class="Verification-code" style="width: 240px;height: 40px !important;">\r\n			<input class="applicationBtn T-applicationBtn" type="button" id="send" value="发送验证码">\r\n		</div>\r\n		<button class="btn btn-block btn-primary T-newPhone guideSubmit" style="width:400px;margin-left:20px;">\r\n			<i class="ace-icon fa fa-check"></i> 确定 </button>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});