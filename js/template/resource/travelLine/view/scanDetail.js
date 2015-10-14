/*TMODJS:{"debug":true,"version":56,"md5":"8e5014b47d8ecc2531fd62fdd19c7569"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/scanDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, travelLine = $data.travelLine, $each = $utils.$each, $out = ($data.line, 
            $data.$index, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal travelLineMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-info-circle"></i> 线路主体信息 </h5> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">线路名称:</label> <div class="col-sm-4"> <label class="control-label">', 
            $line = 13, $out += $escape(travelLine.name), $out += '</label> </div> <label class="col-sm-2 control-label no-padding-right">行程天数:</label> <div class="col-sm-4"> <label class="control-label">', 
            $line = 17, $out += $escape(travelLine.days), $out += '天</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用包含:</label> <div class="col-sm-8"> <label class="control-label" style="text-align: left">', 
            $line = 23, $out += $escape(travelLine.includeFee), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">费用不包含:</label> <div class="col-sm-8"> <label class="control-label" style="text-align: left">', 
            $line = 29, $out += $escape(travelLine.excludeFee), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程特色:</label> <div class="col-sm-8"> <label class="control-label" style="text-align: left">', 
            $line = 35, $out += $escape(travelLine.lineFeature), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程须知:</label> <div class="col-sm-8"> <label class="control-label" style="text-align: left">', 
            $line = 41, $out += $escape(travelLine.lineNotice), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">行程备注:</label> <div class="col-sm-8"> <label class="control-label" style="text-align: left">', 
            $line = 47, $out += $escape(travelLine.remark), $out += '</label> </div> </div> </div> </form> <form class="form-horizontal travelLineDayList" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-line-day"></i> 日程列表 </h5> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover lineDayList"> <thead> <tr> <th>日期</th> <th>含餐情况</th> <th>住宿地点</th> <th>酒店星级</th> <th>行程标题</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 76, $each(travelLine.travelLineDayList, function(line) {
                $out += " <tr> <td>第", $line = 78, $out += $escape(line.whichDay), $out += "天</td> <td>", 
                $line = 79, $out += $escape(line.repastDetail), $out += "</td> <td>", $line = 80, 
                $out += $escape(line.restPosition), $out += "</td> <td> ", $line = 82, 1 == line.hotelLevel ? ($out += " 三星以下 ", 
                $line = 84) : 2 == line.hotelLevel ? ($out += " 三星 ", $line = 86) : 3 == line.hotelLevel ? ($out += " 准四星 ", 
                $line = 88) : 4 == line.hotelLevel ? ($out += " 四星 ", $line = 90) : 5 == line.hotelLevel ? ($out += " 准五星 ", 
                $line = 92) : 6 == line.hotelLevel ? ($out += " 五星 ", $line = 94) : 7 == line.hotelLevel && ($out += " 五星以上 ", 
                $line = 96), $out += " </td> <td>", $line = 98, $out += $escape(line.title), $out += '</td> <td> <button data-entiy-id="', 
                $line = 100, $out += $escape(line.id), $out += '" class="btn btn-xs btn-success btn-guide-scan"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </button> </td> </tr> ', 
                $line = 105;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal travelLineMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="widget-box ui-sortable-handle">\r\n			<div class="widget-header">\r\n				<h5 class="widget-title">\r\n					<i class="ace-icon fa fa-info-circle"></i>\r\n					线路主体信息\r\n				</h5>\r\n			</div>\r\n			<div class="form-group">\r\n				<label class="col-sm-2 control-label no-padding-right">线路名称:</label>\r\n				<div class="col-sm-4">\r\n					<label class="control-label">{{travelLine.name}}</label>\r\n				</div>\r\n				<label class="col-sm-2 control-label no-padding-right">行程天数:</label>\r\n				<div class="col-sm-4">\r\n					<label class="control-label">{{travelLine.days}}天</label>\r\n				</div>\r\n			</div>\r\n			<div class="form-group">\r\n				<label class="col-sm-2 control-label no-padding-right">费用包含:</label>\r\n				<div class="col-sm-8">\r\n					<label class="control-label" style="text-align: left">{{travelLine.includeFee}}</label>\r\n				</div>\r\n			</div>\r\n			<div class="form-group">\r\n				<label class="col-sm-2 control-label no-padding-right">费用不包含:</label>\r\n				<div class="col-sm-8">\r\n					<label class="control-label" style="text-align: left">{{travelLine.excludeFee}}</label>\r\n				</div>\r\n			</div>\r\n			<div class="form-group">\r\n				<label class="col-sm-2 control-label no-padding-right">行程特色:</label>\r\n				<div class="col-sm-8">\r\n					<label class="control-label" style="text-align: left">{{travelLine.lineFeature}}</label>\r\n				</div>\r\n			</div>\r\n			<div class="form-group">\r\n				<label class="col-sm-2 control-label no-padding-right">行程须知:</label>\r\n				<div class="col-sm-8">\r\n					<label class="control-label" style="text-align: left">{{travelLine.lineNotice}}</label>\r\n				</div>\r\n			</div>\r\n			<div class="form-group">\r\n				<label class="col-sm-2 control-label no-padding-right">行程备注:</label>\r\n				<div class="col-sm-8">\r\n					<label class="control-label" style="text-align: left">{{travelLine.remark}}</label>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<form class="form-horizontal travelLineDayList" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-line-day"></i>\r\n							日程列表\r\n						</h5>\r\n					</div>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover lineDayList">\r\n								<thead>\r\n									<tr>\r\n										<th>日期</th>\r\n										<th>含餐情况</th>\r\n										<th>住宿地点</th>\r\n										<th>酒店星级</th>\r\n										<th>行程标题</th>\r\n										<th>操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each travelLine.travelLineDayList as line}}\r\n											<tr>\r\n												<td>第{{line.whichDay}}天</td>\r\n												<td>{{line.repastDetail}}</td>\r\n												<td>{{line.restPosition}}</td>\r\n												<td>\r\n													{{if line.hotelLevel == 1}}\r\n														三星以下\r\n													{{else if line.hotelLevel == 2}}\r\n														三星\r\n													{{else if line.hotelLevel == 3}}\r\n														准四星\r\n													{{else if line.hotelLevel == 4}}\r\n														四星\r\n													{{else if line.hotelLevel == 5}}\r\n														准五星\r\n													{{else if line.hotelLevel == 6}}\r\n														五星\r\n													{{else if line.hotelLevel == 7}}\r\n														五星以上\r\n													{{/if}}\r\n												</td>\r\n												<td>{{line.title}}</td>\r\n												<td>\r\n													<button data-entiy-id="{{line.id}}" class="btn btn-xs btn-success btn-guide-scan">\r\n														<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n													</button>\r\n												</td>\r\n											</tr>\r\n										{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});