/*TMODJS:{"debug":true,"version":6,"md5":"8b0b5a45ff4594c864f442e2179fea82"}*/
define(function(require) {
    return require("../../../template")("system/accountSetting/view/addPhone", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, mobile = $data.mobile, $out = "";
            return $out += '<div class="applicationMain-other"> <form class="T-main-form" role="form" onsubmit="return false"> <label style="margin-left: 40px;font-family: \'宋体\';color: #666666;margin-top: 10px;">请输入您要绑定的手机号码</label> <div class="application"> <input type="text" placeholder="请输入手机号" name="mobile" class="newPhone" value="', 
            $line = 5, $out += $escape(mobile), $out += '" style="width: 370px;height: 40px !important;"></div> <div class="application" style="margin-top: 20px;padding: 0px 0px 20px 0px;"><input type="text" name="verifyCode" placeholder="手机验证码" class="Verification-code" style="width: 240px;height: 40px !important;"> <input class="applicationBtn" type="button" id="sended" style="width: 120px;height: 40px !important;margin-left: 6px;" value="发送验证码"></div> <button class="btn btn-block btn-primary T-newChangePhone guideSubmit" style="width:400px;margin-left:20px;"> <i class="ace-icon fa fa-check"></i> 确定 </button> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="applicationMain-other">\r\n	<form class="T-main-form" role="form" onsubmit="return false">\r\n		<label style="margin-left: 40px;font-family: \'宋体\';color: #666666;margin-top: 10px;">请输入您要绑定的手机号码</label>\r\n		<div class="application">\r\n		<input type="text" placeholder="请输入手机号" name="mobile" class="newPhone" value="{{mobile}}"  style="width: 370px;height: 40px !important;"></div>\r\n		<div class="application" style="margin-top: 20px;padding: 0px 0px 20px 0px;"><input type="text" name="verifyCode" placeholder="手机验证码" class="Verification-code" style="width: 240px;height: 40px !important;">\r\n		<input class="applicationBtn" type="button" id="sended"  style="width: 120px;height: 40px !important;margin-left: 6px;" value="发送验证码"></div>\r\n\r\n		<button class="btn btn-block btn-primary T-newChangePhone guideSubmit" style="width:400px;margin-left:20px;"> <i class="ace-icon fa fa-check"></i> 确定 </button>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});