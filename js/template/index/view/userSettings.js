/*TMODJS:{"debug":true,"version":10,"md5":"26996b7cea32480d5d82e328e29ca8cc"}*/
define(function(require) {
    return require("../../template")("index/view/userSettings", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, userName = $data.userName, realName = $data.realName, mobileNumber = $data.mobileNumber, $out = "";
            return $out += '<div class=\'login-userData-form\'> <div class="userinfo-tabs"> <p class="pull-left alter color alter-user user-active">修改个人资料</p> <p class="pull-left alter Default alter-pwd">修改密码 </p> </div> <div class="clearfix"></div> <div class="userinfo-content">  <div id="alter-user"> <div class=\'update-login-User\'> <div class=\'input-group top-box\'> <label class="pull-left control-label label-font" style="margin-right:8px;">用户名</label> <input class=\'\' readonly=\'readonly\' name=\'userName\' placeholder=\'用户名\' value=\'', 
            $line = 13, $out += $escape(userName), $out += "' type='text' /> </div> <div class='input-group top-box'> <label class=\"pull-left control-label label-font\"><span class=\"necessary\">*</span>姓&nbsp;&nbsp;&nbsp;&nbsp;名 </label> <input name='realName' placeholder='用户真实名' value='", 
            $line = 17, $out += $escape(realName), $out += "' type='text' /> </div> <div class='input-group top-box'> <label class=\"pull-left control-label label-font\"><span class=\"necessary\">*</span>电&nbsp;&nbsp;&nbsp;&nbsp;话 </label> <input value='", 
            $line = 21, $out += $escape(mobileNumber), $out += "' name='mobileNumber' placeholder='手机号码' type='text' autocomplete=\"off\"/> </div> </div> </div>  <div id=\"alter-pwd\" class=\"hidden\"> <div class='input-group top-box col-xs-12'> <label class=\"pull-left control-label label-font col-xs-2\"><span class=\"necessary\">*</span>旧密码</label> <input class='col-xs-10' name='oldPassword' placeholder='请输入旧密码' value='' type='password' /> </div> <div class='input-group top-box col-xs-12'> <label class=\"pull-left label-font col-xs-2\"><span class=\"necessary\">*</span>新密码</label> <input class='col-xs-10' name='newPassword' placeholder='请输入新密码' value='' type='password' autocomplete=\"off\"/> </div> <div class=\"input-group top-box col-xs-12\"> <label class=\"pull-left label-font col-xs-2\"><span class=\"necessary\">*</span>确认密码</label> <input class='col-xs-10' name='newPassword1' placeholder='再输一次' value='' type='password' autocomplete=\"off\"/> </div> </div> </div> <div class='col-xs-12'> <div class='lighter red password-validate' style=\"font-size:12px;text-align: center;height:18px;padding-top:10px\"> </div> </div> <form class='form-horizontal col-sm-12' role='form' style='margin-top:30px;' onsubmit='return false'> <div class='form-group' style='text-align: center;'> <button class='btn btn-xs btn-danger btn-cancelUserInfo'> <i class='ace-icon btn-xs fa fa-times'>&nbsp;&nbsp;取消</i> </button> <button class='btn btn-xs btn-primary btn-UserSaveInfo'> <i class='btn-xs ace-icon fa fa-check '>&nbsp;&nbsp;保存</i> </button> </div> </form> </div> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "<div class='login-userData-form'>\r\n    <div class=\"userinfo-tabs\">\r\n        <p class=\"pull-left alter color alter-user user-active\">修改个人资料</p>\r\n        <p class=\"pull-left alter Default alter-pwd\">修改密码 </p>\r\n    </div>\r\n    <div class=\"clearfix\"></div>\r\n    <div class=\"userinfo-content\">\r\n        <!--修改个人资料-->\r\n        <div id=\"alter-user\">\r\n            <div class='update-login-User'>\r\n                <div class='input-group top-box'>\r\n                    <label class=\"pull-left control-label label-font\" style=\"margin-right:8px;\">用户名</label>\r\n                    <input class='' readonly='readonly' name='userName' placeholder='用户名' value='{{userName}}' type='text' />\r\n                </div>\r\n                <div class='input-group top-box'>\r\n                    <label class=\"pull-left control-label label-font\"><span class=\"necessary\">*</span>姓&nbsp;&nbsp;&nbsp;&nbsp;名 </label>\r\n                    <input name='realName' placeholder='用户真实名' value='{{realName}}' type='text' />\r\n                </div>\r\n                <div class='input-group top-box'>\r\n                    <label class=\"pull-left control-label label-font\"><span class=\"necessary\">*</span>电&nbsp;&nbsp;&nbsp;&nbsp;话 </label>\r\n                    <input value='{{mobileNumber}}' name='mobileNumber' placeholder='手机号码' type='text' autocomplete=\"off\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!--修改密码-->\r\n        <div id=\"alter-pwd\" class=\"hidden\">\r\n            <div class='input-group top-box col-xs-12'>\r\n                <label class=\"pull-left control-label label-font  col-xs-2\"><span class=\"necessary\">*</span>旧密码</label>\r\n                <input class='col-xs-10' name='oldPassword' placeholder='请输入旧密码' value='' type='password' />\r\n            </div>\r\n            <div class='input-group top-box  col-xs-12'>\r\n                <label class=\"pull-left label-font col-xs-2\"><span class=\"necessary\">*</span>新密码</label>\r\n                <input class='col-xs-10' name='newPassword' placeholder='请输入新密码' value='' type='password' autocomplete=\"off\"/>\r\n            </div>\r\n            <div class=\"input-group top-box  col-xs-12\">\r\n                <label class=\"pull-left label-font  col-xs-2\"><span class=\"necessary\">*</span>确认密码</label>\r\n                <input class='col-xs-10' name='newPassword1' placeholder='再输一次' value='' type='password' autocomplete=\"off\"/>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class='col-xs-12'>\r\n        <div class='lighter red password-validate' style=\"font-size:12px;text-align: center;height:18px;padding-top:10px\">\r\n        </div>\r\n    </div>\r\n    <form class='form-horizontal col-sm-12' role='form' style='margin-top:30px;' onsubmit='return false'>\r\n        <div class='form-group' style='text-align: center;'>\r\n            <button class='btn btn-xs  btn-danger btn-cancelUserInfo'>\r\n                <i class='ace-icon btn-xs  fa fa-times'>&nbsp;&nbsp;取消</i>\r\n            </button>\r\n            <button class='btn btn-xs btn-primary btn-UserSaveInfo'>\r\n                <i class='btn-xs ace-icon fa fa-check '>&nbsp;&nbsp;保存</i>\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});