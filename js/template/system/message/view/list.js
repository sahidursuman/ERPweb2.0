/*TMODJS:{"debug":true,"version":140,"md5":"3548b667fa8f411e17d951cc87830261"}*/
define(function(require) {
    return require("../../../template")("system/message/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, msgList = $data.msgList, $escape = ($data.msg, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<div class="row" id="messageList"> <div class="col-xs-12"> <table id="simple-table" class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:60%"> <col style="width:100px"> <col style="width:180px"> <col style="width:100px"> </colgroup> <thead> <tr class="bg-blur"> <th>消息主体</th> <th>是否已读</th> <th> <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> 发送时间 </th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 22, $each(msgList, function(msg) {
                $out += ' <tr data-id="', $line = 23, $out += $escape(msg.id), $out += '"> <td class="align-left">', 
                $line = 24, $out += $escape(msg.content), $out += "</td> <td> ", $line = 26, 1 == msg.isRead ? ($out += ' <span style="color: green"><b>已读</b></span> ', 
                $line = 28) : 0 == msg.isRead && ($out += ' <span style="color: red"><b>未读</b></span> ', 
                $line = 30), $out += ' </td> <td> <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> ', 
                $line = 34, $out += $escape($helpers.dateFormat(msg.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += ' </td> <td> <a href="javascript:void(0);" class="btn-msg-view">查看</a> </td> </tr> ', 
                $line = 40;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 45, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" id="messageList">\r\n	<div class="col-xs-12">\r\n	<table id="simple-table" class="table table-striped table-bordered table-hover table-fixed">\r\n		<colgroup>\r\n			<col style="width:60%">\r\n			<col style="width:100px">\r\n			<col style="width:180px">\r\n			<col style="width:100px">\r\n		</colgroup>\r\n		<thead>\r\n			<tr class="bg-blur">\r\n				<th>消息主体</th>\r\n				<th>是否已读</th>\r\n				<th>\r\n					<i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i>\r\n					发送时间\r\n				</th>\r\n				<th>操作</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n		{{each msgList as msg}}\r\n			<tr data-id="{{msg.id}}">\r\n				<td class="align-left">{{msg.content}}</td>\r\n				<td>\r\n					{{if msg.isRead == 1}}\r\n						<span style="color: green"><b>已读</b></span>\r\n					{{else if msg.isRead == 0}}\r\n						<span style="color: red"><b>未读</b></span>\r\n					{{/if}}\r\n				</td>\r\n				<td>\r\n					<i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i>\r\n					{{msg.createTime | dateFormat : \'yyyy-MM-dd hh:mm:ss\'}}\r\n				</td>\r\n				<td>\r\n					<a href="javascript:void(0);" class="btn-msg-view">查看</a>\r\n				</td>\r\n			</tr>\r\n			{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div><!-- /.span -->\r\n</div><!-- /.row -->'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});