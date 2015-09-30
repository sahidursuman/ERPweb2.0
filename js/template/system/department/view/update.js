/*TMODJS:{"debug":true,"version":54,"md5":"f05ac8b717fed3c04344fcd360e2a875"}*/
define(function(require) {
    return require("../../../template")("system/business/view/update", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, businessGroup = $data.businessGroup, $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal businessMainForm" role="form" style="margin-top:50px" onsubmit="return false"> <input type="hidden" name="id" value="', 
            $line = 3, $out += $escape(businessGroup.id), $out += '" /> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>部门名称:</label> <div class="col-sm-4"> <input type="text" name="name" class="col-sm-12" value="', 
            $line = 7, $out += $escape(businessGroup.name), $out += '" /> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-business"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal businessMainForm" role="form" style="margin-top:50px" onsubmit="return false">\r\n		<input type="hidden" name="id" value="{{businessGroup.id}}" />\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>部门名称:</label>\r\n			<div class="col-sm-4">\r\n				<input type="text" name="name" class="col-sm-12" value="{{businessGroup.name}}" />\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-business">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});