/*TMODJS:{"debug":true,"version":56,"md5":"5764fb4063ded27c34105629d2f60611"}*/
define(function(require) {
    return require("../../../template")("system/user/view/view", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, user = $data.user, groupname = $data.groupname, $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal guideMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">用户名:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 6, $out += $escape(user.userName), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">姓名:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 12, $out += $escape(user.realName), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">联系电话:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 18, $out += $escape(user.mobileNumber), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">审核角色:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 24, 1 == user.roleType && ($out += "管理员", $line = 24), $out += " ", $line = 25, 
            2 == user.roleType && ($out += "财务", $line = 25), $out += " ", $line = 26, 3 == user.roleType && ($out += "计调", 
            $line = 26), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">部门:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 32, $out += $escape(groupname), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">启用状态:</label> <div class="col-sm-2"> <label class="control-label"> ', 
            $line = 39, 1 == user.status ? ($out += " 已启用 ", $line = 41) : ($out += " 已停用 ", 
            $line = 43), $out += " </label> </div> </div> </form> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal guideMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">用户名:</label>\r\n			<div class="col-sm-3">\r\n				<label class="control-label">{{user.userName}}</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">姓名:</label>\r\n			<div class="col-sm-3">\r\n				<label class="control-label">{{user.realName}}</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">联系电话:</label>\r\n			<div class="col-sm-3">\r\n				<label class="control-label">{{user.mobileNumber}}</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">审核角色:</label>\r\n			<div class="col-sm-3">\r\n				<label class="control-label">{{if user.roleType == 1 }}管理员{{/if}}\r\n				{{if user.roleType == 2 }}财务{{/if}}\r\n				{{if user.roleType == 3 }}计调{{/if}}</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">部门:</label>\r\n			<div class="col-sm-3">\r\n				<label class="control-label">{{groupname}}</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">启用状态:</label>\r\n			<div class="col-sm-2">\r\n				<label class="control-label">\r\n					{{if user.status == 1}}\r\n						已启用\r\n					{{else user.status == 0}}\r\n						已停用\r\n					{{/if}}\r\n				</label>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});