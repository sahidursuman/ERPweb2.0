/*TMODJS:{"debug":true,"version":154,"md5":"001968886c671a4c3117ca2fd8e318de"}*/
define(function(require) {
    return require("../../../template")("system/message/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, unReadMsgCount = $data.unReadMsgCount, $each = $utils.$each, msgList = $data.msgList, $escape = ($data.msg, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<div class="operation-area clearfix"> <button class="pull-right btn btn-sm btn-success T-set-read-all ', 
            $line = 2, unReadMsgCount || ($out += " hidden ", $line = 2), $out += '">全部标记为已读</button> </div> <div class="row"> <div class="col-xs-12"> <table id="simple-table" class="table table-striped table-bordered table-hover table-fixed T-showHighLight"> <colgroup> <col style="width:60%"> <col style="width:100px"> <col style="width:180px"> <col style="width:100px"> </colgroup> <thead> <tr class="bg-blur"> <th>消息主体</th> <th>是否已读</th> <th> <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> 发送时间 </th> <th>操作</th> </tr> </thead> <tbody class="T-message-list"> ', 
            $line = 24, $each(msgList, function(msg) {
                $out += ' <tr data-id="', $line = 25, $out += $escape(msg.id), $out += '"> <td class="align-left">', 
                $line = 26, $out += $escape(msg.content), $out += "</td> <td> ", $line = 28, 1 == msg.isRead ? ($out += ' <span style="color: green"><b>已读</b></span> ', 
                $line = 29) : 0 == msg.isRead && ($out += ' <span style="color: red"><b>未读</b></span> ', 
                $line = 30), $out += ' </td> <td> <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> ', 
                $line = 33, $out += $escape($helpers.dateFormat(msg.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += ' </td> <td> <a href="javascript:void(0);" class="T-view ', $line = 36, 
                1 != msg.isRead && ($out += " T-unread ", $line = 36), $out += '">查看</a> </td> </tr> ', 
                $line = 39;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 44, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>  </div>  ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="operation-area clearfix">\r\n	<button class="pull-right btn btn-sm btn-success T-set-read-all {{if !unReadMsgCount }} hidden {{/if}}">全部标记为已读</button>\r\n</div>\r\n<div class="row">\r\n    <div class="col-xs-12">\r\n        <table id="simple-table" class="table table-striped table-bordered table-hover table-fixed T-showHighLight">\r\n            <colgroup>\r\n                <col style="width:60%">\r\n                    <col style="width:100px">\r\n                        <col style="width:180px">\r\n                            <col style="width:100px">\r\n            </colgroup>\r\n            <thead>\r\n                <tr class="bg-blur">\r\n                    <th>消息主体</th>\r\n                    <th>是否已读</th>\r\n                    <th>\r\n                        <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> 发送时间\r\n                    </th>\r\n                    <th>操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-message-list">\r\n                {{each msgList as msg}}\r\n                <tr data-id="{{msg.id}}">\r\n                    <td class="align-left">{{msg.content}}</td>\r\n                    <td>\r\n                        {{if msg.isRead == 1}}\r\n                        <span style="color: green"><b>已读</b></span> {{else if msg.isRead == 0}}\r\n                        <span style="color: red"><b>未读</b></span> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> {{msg.createTime | dateFormat : \'yyyy-MM-dd hh:mm:ss\'}}\r\n                    </td>\r\n                    <td>\r\n                        <a href="javascript:void(0);" class="T-view {{if msg.isRead != 1}} T-unread {{/if}}">查看</a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.span -->\r\n</div>\r\n<!-- /.row -->\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});