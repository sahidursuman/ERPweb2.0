/*TMODJS:{"debug":true,"version":72,"md5":"36d25d526a1d9b197ee1d8296d45d852"}*/
define(function(require) {
    return require("../../../template")("system/user/view/update", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, user = $data.user, $each = $utils.$each, groups = $data.groups, $out = ($data.group, 
            $data.$index, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal userMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">用户名:</label> <div class="col-sm-3" style="line-height: 32px;"> ', 
            $line = 6, $out += $escape(user.userName), $out += ' </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">姓名:</label> <div class="col-sm-3"> <input type="text" name="realName" class="col-sm-12" value="', 
            $line = 12, $out += $escape(user.realName), $out += '" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" value="', 
            $line = 18, $out += $escape(user.mobileNumber), $out += '" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>所属子部门:</label> <div class="col-sm-3"> <select name="groupId" class="col-sm-12"> ', 
            $line = 25, $each(groups, function(group) {
                $out += ' <option value="', $line = 26, $out += $escape(group.id), $out += '" ', 
                $line = 26, group.id == user.groupId && ($out += 'selected="selected"', $line = 26), 
                $out += ">", $line = 26, $out += $escape(group.name), $out += "</option> ", $line = 27;
            }), $out += ' </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">审核角色:</label> <div class="col-sm-3"> <select name="roleType" class="col-sm-12"> <option ', 
            $line = 35, 0 == user.roleType && ($out += 'selected="selected"', $line = 35), $out += ' value="0">无</option> <option ', 
            $line = 36, 1 == user.roleType && ($out += 'selected="selected"', $line = 36), $out += ' value="1">管理员</option> <option ', 
            $line = 37, 2 == user.roleType && ($out += 'selected="selected"', $line = 37), $out += ' value="2">财务</option> <option ', 
            $line = 38, 3 == user.roleType && ($out += 'selected="selected"', $line = 38), $out += ' value="3">计调</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">登录密码:</label> <div class="col-sm-3"> <input type="password" name="password" class="col-sm-12" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">启用标志:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input ', 
            $line = 52, 1 == user.status && ($out += 'checked="checked"', $line = 52), $out += ' type="checkbox" name="" class="ace user-status" /> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-user"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal userMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">用户名:</label>\r\n			<div class="col-sm-3" style="line-height: 32px;">\r\n				{{user.userName}}\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">姓名:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="realName" class="col-sm-12" value="{{user.realName}}" />\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="mobileNumber" class="col-sm-12" value="{{user.mobileNumber}}" />\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>所属子部门:</label>\r\n			<div class="col-sm-3">\r\n				<select name="groupId" class="col-sm-12">\r\n					{{each groups as group}}\r\n					<option value="{{group.id}}" {{if group.id == user.groupId}}selected="selected"{{/if}}>{{group.name}}</option>\r\n					{{/each}}\r\n				</select>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">审核角色:</label>\r\n			<div class="col-sm-3">\r\n				<select name="roleType" class="col-sm-12">\r\n					<option {{if user.roleType == 0 }}selected="selected"{{/if}} value="0">无</option>\r\n					<option {{if user.roleType == 1 }}selected="selected"{{/if}} value="1">管理员</option>\r\n					<option {{if user.roleType == 2 }}selected="selected"{{/if}} value="2">财务</option>\r\n					<option {{if user.roleType == 3 }}selected="selected"{{/if}} value="3">计调</option>\r\n				</select>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">登录密码:</label>\r\n			<div class="col-sm-3">\r\n				<input type="password" name="password" class="col-sm-12" />\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">启用标志:</label>\r\n			<div class="col-sm-2 checkbox" style="margin-left:-10px">\r\n				<label>\r\n					<input {{if user.status == 1}}checked="checked"{{/if}} type="checkbox" name="" class="ace user-status" />\r\n					<span class="lbl">\r\n						启用\r\n					</span>\r\n				</label>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-user">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});