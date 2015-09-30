/*TMODJS:{"debug":true,"version":13,"md5":"c710ba6663397e8202ae264f11e0bd18"}*/
define(function(require) {
    return require("../../../template")("system/business/view/updateGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, businessGroup = $data.businessGroup, group = $data.group, $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal groupMainForm" role="form" style="margin-top:50px" onsubmit="return false"> <input type="hidden" value="', 
            $line = 3, $out += $escape(businessGroup.id), $out += '" id="businessGroupId" /> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right"><span class="necessary">*</span>业务部门:</label> <div class="col-sm-5" style="line-height: 32px;"> <label class="col-sm-4 control-label no-padding-right">', 
            $line = 8, $out += $escape(businessGroup.name), $out += '</label> <input name="businessGroupId" type="hidden" value="', 
            $line = 9, $out += $escape(businessGroup.id), $out += '" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right"><span class="necessary">*</span>子部门名称:</label> <div class="col-sm-4"> <input type="hidden" name="groupId" value="', 
            $line = 16, $out += $escape(group.id), $out += '" /> <input type="text" name="name" class="col-sm-12" value="', 
            $line = 17, $out += $escape(group.name), $out += '" /> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-group"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal groupMainForm" role="form" style="margin-top:50px" onsubmit="return false">\r\n		<input type="hidden" value="{{businessGroup.id}}" id="businessGroupId" />\r\n		<div class="form-group">\r\n			<label class="col-sm-3 control-label no-padding-right"><span class="necessary">*</span>业务部门:</label>\r\n			<div class="col-sm-5" style="line-height: 32px;">\r\n				\r\n				<label class="col-sm-4 control-label no-padding-right">{{businessGroup.name}}</label>\r\n				<input name="businessGroupId" type="hidden" value="{{businessGroup.id}}" />\r\n				\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-3 control-label no-padding-right"><span class="necessary">*</span>子部门名称:</label>\r\n			<div class="col-sm-4">\r\n				<input type="hidden" name="groupId" value="{{group.id}}" />\r\n				<input type="text" name="name" class="col-sm-12" value="{{group.name}}" />\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-group">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});