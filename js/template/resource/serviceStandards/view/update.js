/*TMODJS:{"debug":true,"version":36,"md5":"ae5344a796fb6959fb6be9e1e5271399"}*/
define(function(require) {
    return require("../../../template")("resource/serviceStandards/view/update", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, gssTemplate = $data.gssTemplate, $out = "";
            return $out += '<div class="col-xs-12 T-service-container"> <form class="form-horizontal T-mainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group guideInterval" style="margin-left:-75px;"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>服务标准:</label> <div class="col-sm-4"> <input type="text" name="serviceName" value="', 
            $line = 6, $out += $escape(gssTemplate.serviceTitle), $out += '" class="col-sm-12" maxlength="32"/> <input type="hidden" name="serviceId" value="', 
            $line = 7, $out += $escape(gssTemplate.id), $out += '" class="col-sm-12" maxlength="32"/> </div> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-3 checkbox resource_checkbox"> <label> <input ', 
            $line = 12, 1 == gssTemplate.status && ($out += 'checked ="checked" ', $line = 12), 
            $out += ' type="checkbox" class="ace T-checkStatus" value="1" /> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval" style="margin-left:-75px;"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>服务内容:</label> <div class="col-sm-10"> <textarea style="height:160px;" class="form-control" name="serviceContent" class="col-sm-12">', 
            $line = 22, $out += $escape(gssTemplate.serviceContent), $out += '</textarea> </div> </div> <div class="form-group guideInterval" style="margin-left:-75px;"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>服务要求:</label> <div class="col-sm-10"> <textarea style="height:160px;" class="form-control" name="serviceRequire" class="col-sm-12">', 
            $line = 28, $out += $escape(gssTemplate.serviceRequire), $out += '</textarea> </div> </div> <div class="space-10"></div> <button class="btn btn-xs btn-block btn-primary T-submit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 T-service-container">\r\n	<form class="form-horizontal T-mainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group guideInterval" style="margin-left:-75px;">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>服务标准:</label>\r\n			<div class="col-sm-4">\r\n				<input type="text" name="serviceName" value="{{gssTemplate.serviceTitle}}" class="col-sm-12"  maxlength="32"/>\r\n				<input type="hidden" name="serviceId" value="{{gssTemplate.id}}" class="col-sm-12"  maxlength="32"/>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">是否启用:</label>\r\n			<div class="col-sm-3 checkbox resource_checkbox">\r\n				<label>\r\n					<input {{if gssTemplate.status == 1}}checked ="checked" {{/if}} type="checkbox" class="ace T-checkStatus" value="1" />\r\n					<span class="lbl">\r\n						启用\r\n					</span>\r\n				</label> \r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval" style="margin-left:-75px;">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>服务内容:</label>\r\n			<div class="col-sm-10">\r\n				<textarea style="height:160px;" class="form-control" name="serviceContent"  class="col-sm-12">{{gssTemplate.serviceContent}}</textarea> \r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval" style="margin-left:-75px;">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>服务要求:</label>\r\n			<div class="col-sm-10">\r\n				<textarea style="height:160px;" class="form-control" name="serviceRequire"  class="col-sm-12">{{gssTemplate.serviceRequire}}</textarea> \r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-xs btn-block btn-primary T-submit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});