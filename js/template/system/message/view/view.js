/*TMODJS:{"debug":true,"version":28,"md5":"2b8a5d8f211c6c361e870e874b6018f4"}*/
define(function(require) {
    return require("../../../template")("system/message/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, msg = $data.msg, $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal msgFrom" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">发送时间:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 6, $out += $escape($helpers.dateTimeFormat(msg.createTime)), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">消息内容:</label> <div class="col-sm-8"> <label class="control-label" style="text-align: left">', 
            $line = 12, $out += $escape(msg.content), $out += "</label> </div> </div> </form> </div> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal msgFrom" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<label class="col-sm-3 control-label no-padding-right">发送时间:</label> \r\n			<div class="col-sm-8">\r\n				<label class="control-label">{{msg.createTime | dateTimeFormat}}</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-3 control-label no-padding-right">消息内容:</label>\r\n			<div class="col-sm-8">\r\n				<label class="control-label" style="text-align: left">{{msg.content}}</label>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});