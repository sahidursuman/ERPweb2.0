/*TMODJS:{"debug":true,"version":250,"md5":"940fb662011097b52ba5e8783e7faf1c"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/addLineDay", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, time = $data.time, $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal T-schedule-form" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <a > <i class="ace-icon fa fa-info-circle" style="font-size: 20px!important; position: relative;top:5px"></i> <label class="middle title-size">日程安排主体信息</label> </a> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">行程详情:</label> <div class="clearfix"></div> <div style="width:98.5%;margin:0 auto;"> <script id="schedule-detail-editor-', 
            $line = 14, $out += $escape(time), $out += '" class="T-editor" type="text/plain" style="width:100%"></script> </div> </div> </div> </div> </div> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger otherButton T-btn-delete"> <i class="ace-icon fa fa-times"></i> 关闭 </button> <button class="btn btn-sm btn-primary otherButton T-btn-submit" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal T-schedule-form" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n			<a >\r\n				<i class="ace-icon fa fa-info-circle" style="font-size: 20px!important; position: relative;top:5px"></i>\r\n				<label class="middle title-size">日程安排主体信息</label>\r\n			</a>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n						<label class="col-sm-1 control-label no-padding-right">行程详情:</label>\r\n						<div class="clearfix"></div>\r\n						<div style="width:98.5%;margin:0 auto;">\r\n							<script id="schedule-detail-editor-{{time}}" class="T-editor" type="text/plain" style="width:100%"></script>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		 <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger otherButton T-btn-delete"> <i class="ace-icon fa fa-times"></i> 关闭 </button> <button class="btn btn-sm btn-primary otherButton T-btn-submit" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});