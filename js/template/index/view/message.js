/*TMODJS:{"debug":true,"version":27,"md5":"47c1bde6f3c7914ab4a19e68ee03cb7a"}*/
define(function(require) {
    return require("../../template")("index/view/message", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, msgList = $data.msgList, $escape = ($data.msg, 
            $data.$index, $utils.$escape), $out = "";
            return $line = 1, $each(msgList, function(msg) {
                $out += ' <li class="msg-intro" data-entity-id="', $line = 2, $out += $escape(msg.id), 
                $out += '"> <a href="#" class="clearfix" style="text-align: left"> <span class="msg-pic pull-left"><i class="ace-icon fa fa-bell bigger-240 ', 
                $line = 4, 1 == msg.isRead && ($out += " green", $line = 4), $out += '"></i></span> <span class="msg-body"> <span class="msg-title"> <span class="blue">消息内容</span> ', 
                $line = 8, $out += $escape($helpers.interceptStr(msg.content)), $out += ' </span> <span class="msg-time"> <i class="ace-icon fa fa-clock-o"></i> <span>', 
                $line = 12, $out += $escape($helpers.dateFormat(msg.createTime, "hh:mm:ss")), $out += "</span> </span> </span> </a> </li> ", 
                $line = 17;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '{{each msgList as msg}}\r\n	<li class="msg-intro" data-entity-id="{{msg.id}}">\r\n		<a href="#" class="clearfix"  style="text-align: left">\r\n			<span class="msg-pic pull-left"><i class="ace-icon fa fa-bell bigger-240 {{if msg.isRead == 1}} green{{/if}}"></i></span>\r\n			<span class="msg-body">\r\n				<span class="msg-title">\r\n					<span class="blue">消息内容</span>\r\n						{{msg.content | interceptStr}}\r\n				</span>\r\n				<span class="msg-time">\r\n					<i class="ace-icon fa fa-clock-o"></i>\r\n					<span>{{msg.createTime | dateFormat:\'hh:mm:ss\'}}</span>\r\n				</span>\r\n			</span>\r\n		</a>\r\n	</li>\r\n{{/each}}'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});