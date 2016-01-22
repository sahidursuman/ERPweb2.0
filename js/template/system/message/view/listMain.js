/*TMODJS:{"debug":true,"version":36,"md5":"b5ae344b453009d83209412e844bbb05"}*/
define(function(require) {
    return require("../../../template")("system/message/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, menus = $data.menus, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="T-message-listMain"> <div class="operation-area clearfix"> <input name="messageKey" class="col-xs-2 input-default-height T-chooseMenu guideInputList" value="" placeholder="输入消息主题关键词进行搜索"/> <div class="col-xs-2 mar-l-20" style="width:100px;"> <select name="menuId"> <option value="">全部</option> ', 
            $line = 7, $each(menus, function(rs) {
                $out += ' <option value="', $line = 8, $out += $escape(rs.id), $out += '">', $line = 8, 
                $out += $escape(rs.name), $out += "</option> ", $line = 9;
            }), $out += ' </select> </div>  <div class="col-xs-1 mar-l-20" style="width:100px;"> <button class=" btn-sm T-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索</button> </div> <button class="pull-right btn btn-sm btn-success T-set-read-all">全部标记为已读</button> </div> <div class="row"> <div class="col-xs-12 T-message-tbody"> </div>  </div>  </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-message-listMain">\r\n    <div class="operation-area clearfix">\r\n    	<input name="messageKey" class="col-xs-2 input-default-height T-chooseMenu guideInputList" value=""  placeholder="输入消息主题关键词进行搜索"/>  \r\n        <div class="col-xs-2 mar-l-20" style="width:100px;"> \r\n            <select name="menuId">\r\n                <option value="">全部</option>\r\n                {{each menus as rs}}\r\n                <option value="{{rs.id}}">{{rs.name}}</option>\r\n                {{/each}}\r\n            </select>\r\n        </div>\r\n\r\n        <!-- <button class=" btn-sm  T-search pull-left search-btn " style="border-radius: 0;background: #51b0c2;border:2px solid #51b0c2!important;color: white">\r\n            <i class="ace-icon fa fa-search"></i>\r\n            搜索\r\n        </button> -->\r\n        <div class="col-xs-1 mar-l-20" style="width:100px;">\r\n            <button class=" btn-sm  T-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索</button> \r\n        </div>\r\n    	<button class="pull-right btn btn-sm btn-success T-set-read-all">全部标记为已读</button>\r\n    </div>\r\n    <div class="row">\r\n        <div class="col-xs-12 T-message-tbody">\r\n        </div>\r\n        <!-- /.span -->\r\n    </div>\r\n    <!-- /.row -->\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});