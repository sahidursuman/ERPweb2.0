/*TMODJS:{"debug":true,"version":3,"md5":"296066080ffd06f01cd13b2c94bda435"}*/
define(function(require) {
    return require("../../../template")("system/department/view/addGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, businessGroupId = $data.businessGroupId, $each = $utils.$each, businessList = $data.businessList, $out = ($data.business, 
            $data.$index, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal T-addGroup-form" role="form" style="margin-top:26px" onsubmit="return false"> <input type="hidden" value="', 
            $line = 3, $out += $escape(businessGroupId), $out += '" id="businessGroupId" /> <div class="form-group"> <label class="col-sm-4 control-label no-padding-right"><span class="necessary">*</span>业务部门:</label> <div class="col-sm-6" style="line-height: 32px;"> <select name="businessGroupId" class="col-sm-12"> ', 
            $line = 8, $each(businessList, function(business) {
                $out += ' <option value="', $line = 9, $out += $escape(business.id), $out += '">', 
                $line = 9, $out += $escape(business.name), $out += "</option> ", $line = 10;
            }), $out += ' </select> </div> </div> <div class="form-group"> <label class="col-sm-4 control-label no-padding-right"><span class="necessary">*</span>子部门名称:</label> <div class="col-sm-6"> <input class="R-childGroupName" type="text" name="name" class="col-sm-12" /> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-save-group"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal T-addGroup-form" role="form" style="margin-top:26px" onsubmit="return false">\r\n		<input type="hidden" value="{{businessGroupId}}" id="businessGroupId" />\r\n		<div class="form-group">\r\n			<label class="col-sm-4 control-label no-padding-right"><span class="necessary">*</span>业务部门:</label>\r\n			<div class="col-sm-6" style="line-height: 32px;">\r\n			<select name="businessGroupId" class="col-sm-12">\r\n				{{each businessList as business}}\r\n					<option value="{{business.id}}">{{business.name}}</option>\r\n				{{/each}}\r\n			</select>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-4 control-label no-padding-right"><span class="necessary">*</span>子部门名称:</label>\r\n			<div class="col-sm-6">\r\n				<input class="R-childGroupName" type="text" name="name" class="col-sm-12" />\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary T-save-group">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});