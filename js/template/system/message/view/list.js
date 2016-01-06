/*TMODJS:{"debug":true,"version":233,"md5":"6a702b725ac26e66956ac4c2e670c3d7"}*/
define(function(require) {
    return require("../../../template")("system/message/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, unReadMsgCount = $data.unReadMsgCount, $each = $utils.$each, msgList = $data.msgList, recordSize = ($data.msg, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="operation-area clearfix"> <input name="menuName" class="col-xs-2 input-default-height T-chooseMenu guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.messageTypeName), $out += '" placeholder="请输入发生业务"/>&nbsp; <input type="hidden" name="menuId" value="', 
            $line = 3, $out += $escape(searchParam.messageType), $out += '" /> <button class=" btn-sm T-search pull-left search-btn " style="border-radius: 0;background: #51b0c2;border:2px solid #51b0c2!important;color: white"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="pull-right btn btn-sm btn-success T-set-read-all ', 
            $line = 8, unReadMsgCount || ($out += " hidden ", $line = 8), $out += '">全部标记为已读</button> </div> <div class="row"> <div class="col-xs-12"> <table id="simple-table" class="table table-striped table-bordered table-hover table-fixed T-showHighLight"> <colgroup> <col style="width:180px"> <col style="width:60%"> <col style="width:100px"> <col style="width:180px"> <col style="width:100px"> </colgroup> <thead> <tr class="bg-blur"> <th>发生业务</th> <th>消息主体</th> <th>是否已读</th> <th> <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> 发送时间 </th> <th>操作</th> </tr> </thead> <tbody class="T-message-list"> ', 
            $line = 32, $each(msgList, function(msg) {
                $out += ' <tr data-id="', $line = 33, $out += $escape(msg.id), $out += '"> <td>', 
                $line = 34, $out += $escape(msg.menu.name), $out += '</td> <td class="align-left">', 
                $line = 35, $out += $escape(msg.content), $out += "</td> <td> ", $line = 37, 1 == msg.isRead ? ($out += ' <span style="color: green"><b>已读</b></span> ', 
                $line = 38) : 0 == msg.isRead && ($out += ' <span style="color: red"><b>未读</b></span> ', 
                $line = 39), $out += ' </td> <td> <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> ', 
                $line = 42, $out += $escape($helpers.dateFormat(msg.createTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += ' </td> <td> <a href="javascript:void(0);" class="T-view ', $line = 45, 
                1 != msg.isRead && ($out += " T-unread ", $line = 45), $out += '">查看</a> </td> </tr> ', 
                $line = 48;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 53, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>  </div>  ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="operation-area clearfix">\r\n	<input name="menuName" class="col-xs-2 input-default-height T-chooseMenu guideInputList" value="{{searchParam.messageTypeName}}"  placeholder="请输入发生业务"/>&nbsp;\r\n	<input type="hidden" name="menuId" value="{{searchParam.messageType}}" />\r\n	<button class=" btn-sm  T-search pull-left search-btn " style="border-radius: 0;background: #51b0c2;border:2px solid #51b0c2!important;color: white">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<button class="pull-right btn btn-sm btn-success T-set-read-all {{if !unReadMsgCount }} hidden {{/if}}">全部标记为已读</button>\r\n</div>\r\n<div class="row">\r\n    <div class="col-xs-12">\r\n        <table id="simple-table" class="table table-striped table-bordered table-hover table-fixed T-showHighLight">\r\n            <colgroup>\r\n            	<col style="width:180px">\r\n                <col style="width:60%">\r\n                <col style="width:100px">\r\n                <col style="width:180px">\r\n                <col style="width:100px">\r\n            </colgroup>\r\n            <thead>\r\n                <tr class="bg-blur">\r\n                	<th>发生业务</th>\r\n                    <th>消息主体</th>\r\n                    <th>是否已读</th>\r\n                    <th>\r\n                        <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> 发送时间\r\n                    </th>\r\n                    <th>操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-message-list">\r\n                {{each msgList as msg}}\r\n                <tr data-id="{{msg.id}}">\r\n                	<td>{{msg.menu.name}}</td>\r\n                    <td class="align-left">{{msg.content}}</td>\r\n                    <td>\r\n                        {{if msg.isRead == 1}}\r\n                        <span style="color: green"><b>已读</b></span> {{else if msg.isRead == 0}}\r\n                        <span style="color: red"><b>未读</b></span> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <i class="ace-icon fa fa-clock-o bigger-110 hidden-480"></i> {{msg.createTime | dateFormat : \'yyyy-MM-dd hh:mm:ss\'}}\r\n                    </td>\r\n                    <td>\r\n                        <a href="javascript:void(0);" class="T-view {{if msg.isRead != 1}} T-unread {{/if}}">查看</a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.span -->\r\n</div>\r\n<!-- /.row -->\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});