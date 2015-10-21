/*TMODJS:{"debug":true,"version":106,"md5":"463dbb37dea8b8104b2f499bcf38b1f7"}*/
define(function(require) {
    return require("../../../template")("system/user/view/add", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, groupList = $data.groupList, $escape = ($data.group, 
            $data.$index, $utils.$escape), $out = ($data.item, "");
            return $out += '<div class="col-xs-12 globalAdd"> <form class="form-horizontal userMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>姓名:</label> <div class="col-sm-3"> <input type="text" name="realName" class="col-sm-12" /> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>所属子部门:</label> <div class="col-sm-3"> <select name="groupId" class="col-sm-12"> ', 
            $line = 18, $each(groupList, function(group) {
                $out += ' <optgroup label="', $line = 19, $out += $escape(group.name), $out += '"> ', 
                $line = 20, $each(group.subOrg, function(item) {
                    $out += ' <option value="', $line = 21, $out += $escape(item.orgId), $out += '">', 
                    $line = 21, $out += $escape(item.orgName), $out += "</option> ", $line = 22;
                }), $out += " </optgroup> ", $line = 24;
            }), $out += ' </select> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary"></span>审核角色:</label> <div class="col-sm-3"> <select name="roleType" class="col-sm-12"> <option value="0">无</option> <option value="1">管理员</option> <option value="2">财务</option> <option value="3">计调</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">启用标志:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input checked="checked" type="checkbox" class="ace user-status" value="1" /> <span class="lbl"> 启用 </span> </label> </div> <label class="col-sm-2 control-label no-padding-right">&nbsp;</label> <div class="col-sm-3" style="margin-left:-10px"> 自动生成账号和密码 </div> </div>    <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-user guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 globalAdd">\r\n	<form class="form-horizontal userMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group  guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>姓名:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="realName" class="col-sm-12" />\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="mobileNumber" class="col-sm-12" />\r\n			</div>\r\n		</div>\r\n\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>所属子部门:</label>\r\n			<div class="col-sm-3">  \r\n				<select name="groupId" class="col-sm-12">\r\n					{{each groupList as group}}\r\n						<optgroup label="{{group.name}}">\r\n							{{each group.subOrg as item}}\r\n							<option value="{{item.orgId}}">{{item.orgName}}</option>\r\n							{{/each}}\r\n						</optgroup>  \r\n					{{/each}}\r\n				</select>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary"></span>审核角色:</label>\r\n			<div class="col-sm-3">\r\n				<select name="roleType" class="col-sm-12">\r\n					<option value="0">无</option>\r\n					<option value="1">管理员</option>\r\n					<option value="2">财务</option>\r\n					<option value="3">计调</option>\r\n				</select>\r\n			</div>\r\n		</div>\r\n\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right">启用标志:</label>\r\n			<div class="col-sm-2 checkbox" style="margin-left:-10px">\r\n				<label>\r\n					<input checked="checked" type="checkbox" class="ace user-status" value="1" />\r\n					<span class="lbl">\r\n						启用\r\n					</span>\r\n				</label>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">&nbsp;</label>\r\n			<div class="col-sm-3" style="margin-left:-10px">\r\n				自动生成账号和密码\r\n			</div>\r\n		</div>\r\n		<!--<div class="form-group guideInterval">-->\r\n			<!-- -->\r\n		<!--</div>-->\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-user guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});