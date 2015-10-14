/*TMODJS:{"debug":true,"version":49,"md5":"a3bd68da2c573da56c3c0a80affd0d31"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/viewDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, lineDay = $data.lineDay, $string = $utils.$string, $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal travelLineDayForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-info-circle"></i> 行程安排主体信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">日期:</label> <div class="col-sm-4"> <label class="control-label">第', 
            $line = 15, $out += $escape(lineDay.whichDay), $out += '天</label> </div> <label class="col-sm-2 control-label no-padding-right">行程标题:</label> <div class="col-sm-4"> <label class="control-label">', 
            $line = 19, $out += $escape(lineDay.title), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">住宿地点:</label> <div class="col-sm-4"> <label class="control-label">', 
            $line = 25, $out += $escape(lineDay.restPosition), $out += '</label> </div> <label class="col-sm-2 control-label no-padding-right">酒店星级:</label> <div class="col-sm-4"><label class="control-label"> ', 
            $line = 29, 1 == lineDay.hotelLevel ? ($out += " 三星以下 ", $line = 31) : 2 == lineDay.hotelLevel ? ($out += " 三星 ", 
            $line = 33) : 3 == lineDay.hotelLevel ? ($out += " 准四星 ", $line = 35) : 4 == lineDay.hotelLevel ? ($out += " 四星 ", 
            $line = 37) : 5 == lineDay.hotelLevel ? ($out += " 准五星 ", $line = 39) : 6 == lineDay.hotelLevel ? ($out += " 五星 ", 
            $line = 41) : 7 == lineDay.hotelLevel && ($out += " 五星以上 ", $line = 43), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">含餐情况:</label> <div class="col-sm-8"> <label class="control-label" style="text-align: left">', 
            $line = 49, $out += $escape(lineDay.repastDetail), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">沿途风景:</label> <div class="col-sm-8"> <label class="control-label" style="text-align: left">', 
            $line = 55, $out += $escape(lineDay.roadScenic), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程详情:</label> <div class="clearfix col-sm-10"></div> <div class="detailEditor wysiwyg-editor" style="height: 200px;overflow: scroll;">', 
            $line = 61, $out += $string(lineDay.detail), $out += "</div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal travelLineDayForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="widget-box ui-sortable-handle">\r\n			<div class="widget-header">\r\n				<h5 class="widget-title">\r\n					<i class="ace-icon fa fa-info-circle"></i>\r\n					行程安排主体信息\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">日期:</label>\r\n						<div class="col-sm-4">\r\n							<label class="control-label">第{{lineDay.whichDay}}天</label>\r\n						</div>\r\n						<label class="col-sm-2 control-label no-padding-right">行程标题:</label>\r\n						<div class="col-sm-4">\r\n							<label class="control-label">{{lineDay.title}}</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">住宿地点:</label>\r\n						<div class="col-sm-4">\r\n							<label class="control-label">{{lineDay.restPosition}}</label>\r\n						</div>\r\n						<label class="col-sm-2 control-label no-padding-right">酒店星级:</label>\r\n						<div class="col-sm-4"><label class="control-label">\r\n							{{if lineDay.hotelLevel == 1}}\r\n								三星以下\r\n							{{else if lineDay.hotelLevel == 2}}\r\n								三星\r\n							{{else if lineDay.hotelLevel == 3}}\r\n								准四星\r\n							{{else if lineDay.hotelLevel == 4}}\r\n								四星\r\n							{{else if lineDay.hotelLevel == 5}}\r\n								准五星\r\n							{{else if lineDay.hotelLevel == 6}}\r\n								五星\r\n							{{else if lineDay.hotelLevel == 7}}\r\n								五星以上\r\n							{{/if}}</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">含餐情况:</label>\r\n						<div class="col-sm-8">\r\n							<label class="control-label" style="text-align: left">{{lineDay.repastDetail}}</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">沿途风景:</label>\r\n						<div class="col-sm-8">\r\n							<label class="control-label" style="text-align: left">{{lineDay.roadScenic}}</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">行程详情:</label>\r\n						<div class="clearfix col-sm-10"></div>\r\n						<div class="detailEditor wysiwyg-editor" style="height: 200px;overflow: scroll;">{{#lineDay.detail}}</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});