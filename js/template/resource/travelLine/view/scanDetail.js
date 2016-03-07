/*TMODJS:{"debug":true,"version":277,"md5":"ef6401e727f93a7bee90d1453bad5984"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/scanDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, travelLine = $data.travelLine, $each = $utils.$each, $string = ($data.line, 
            $data.$index, $utils.$string), $out = "";
            return $out += ' <table class="table table-bordered"> <colgroup> <col style="width:100px;"> <col> <col style="width:100px;"> <col> <col style="width:100px;"> <col> </colgroup> <tbody> <tr> <td class="th-border">线路名称</td> <td style="text-align: left">', 
            $line = 14, $out += $escape(travelLine.name), $out += '</td> <td class="th-border">行程天数</td> <td style="text-align: left">', 
            $line = 16, $out += $escape(travelLine.days), $out += '天</td> <td class="th-border">是否启用</td> <td style="text-align: left"> ', 
            $line = 19, 1 == travelLine.status ? ($out += " 已启用 ", $line = 21) : 0 == travelLine.status && ($out += " 已停用 ", 
            $line = 23), $out += ' </td> </tr> </tbody> </table>  <table class="table table-bordered"> <colgroup> <col style="width:50px;"> <col style="width:100px;"> <col style="width:12%;"> <col style="width:18%;"> <col style="width:54%;"> </colgroup> <thead> <tr> <td class="th-border">日期</td> <td class="th-border">含餐情况</td> <td class="th-border">住宿地点</td> <td class="th-border">景点</td> <td class="th-border">简要行程</td> </tr> </thead> <tbody> ', 
            $line = 48, $each(travelLine.travelLineDayList, function(line) {
                $out += ' <tr> <td rowspan="2" style="vertical-align: middle;">第', $line = 50, $out += $escape(line.whichDay), 
                $out += "天</td> <td>", $line = 51, $out += $string($helpers.getRestaurantDesc(line.repastDetail)), 
                $out += "</td> <td>", $line = 52, $out += $escape(line.restPosition), $out += "</td> <td>", 
                $line = 53, $out += $escape(line.roadScenic), $out += "</td> <td>", $line = 54, 
                $out += $escape(line.title), $out += '</td> </tr> <tr> <td colspan="4" style="text-align: left">', 
                $line = 57, $out += $string(line.detail), $out += "</td> </tr> ", $line = 59;
            }), $out += ' </tbody> </table>  <table class="table table-bordered"> <colgroup> <col style="width:100px;"> <col> </colgroup> <tbody> <tr> <td class="th-border">费用包含</td> <td style="text-align: left">', 
            $line = 72, $out += $escape(travelLine.includeFee), $out += '</td> </tr> <tr> <td class="th-border">费用不包含</td> <td style="text-align: left">', 
            $line = 76, $out += $escape(travelLine.excludeFee), $out += '</td> </tr> <tr> <td class="th-border">行程特色</td> <td style="text-align: left">', 
            $line = 80, $out += $escape(travelLine.lineFeature), $out += '</td> </tr> <tr> <td class="th-border">行程须知</td> <td style="text-align: left">', 
            $line = 84, $out += $escape(travelLine.lineNotice), $out += '</td> </tr> <tr> <td class="th-border">备注</td> <td style="text-align: left">', 
            $line = 88, $out += $escape(travelLine.remark), $out += '</td> </tr> </tbody> </table> <div class="text-center"> <button class="btn btn-xs w100 btn-primary T-btn-viewCancel"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!-- 1. 基本信息 -->\r\n<table class="table table-bordered">\r\n	<colgroup>\r\n		<col style="width:100px;">\r\n		<col>\r\n		<col style="width:100px;">\r\n		<col>\r\n		<col style="width:100px;">\r\n		<col>\r\n	</colgroup>\r\n	<tbody>\r\n		<tr>\r\n			<td class="th-border">线路名称</td>\r\n			<td style="text-align: left">{{travelLine.name}}</td>\r\n			<td class="th-border">行程天数</td>\r\n			<td style="text-align: left">{{travelLine.days}}天</td>\r\n			<td class="th-border">是否启用</td>\r\n			<td style="text-align: left">\r\n				{{if travelLine.status == 1}}\r\n					已启用\r\n				{{else if travelLine.status == 0}}\r\n					已停用\r\n				{{/if}}\r\n			</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<!-- 2. 行程安排 -->\r\n<table class="table table-bordered">\r\n	<colgroup>\r\n		<col style="width:50px;">\r\n		<col style="width:100px;">\r\n		<col style="width:12%;">\r\n		<col style="width:18%;">\r\n		<col style="width:54%;">\r\n	</colgroup>\r\n	<thead>\r\n		<tr>\r\n			<td class="th-border">日期</td>\r\n			<td class="th-border">含餐情况</td>\r\n			<td class="th-border">住宿地点</td>\r\n			<td class="th-border">景点</td>\r\n			<td class="th-border">简要行程</td>\r\n		</tr>\r\n	</thead>\r\n	<tbody>\r\n		{{each travelLine.travelLineDayList as line}}\r\n		<tr>\r\n			<td rowspan="2" style="vertical-align: middle;">第{{line.whichDay}}天</td>\r\n			<td>{{#line.repastDetail | getRestaurantDesc }}</td>\r\n			<td>{{line.restPosition}}</td>\r\n			<td>{{line.roadScenic}}</td>\r\n			<td>{{line.title}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td colspan="4" style="text-align: left">{{#line.detail}}</td>\r\n		</tr>\r\n		{{/each}}\r\n	</tbody>\r\n</table>\r\n\r\n<!-- 3. 费用说明 -->\r\n<table class="table table-bordered">\r\n	<colgroup>\r\n		<col style="width:100px;">\r\n		<col>\r\n	</colgroup>\r\n	<tbody>\r\n		<tr>\r\n			<td class="th-border">费用包含</td>\r\n			<td style="text-align: left">{{travelLine.includeFee}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="th-border">费用不包含</td>\r\n			<td style="text-align: left">{{travelLine.excludeFee}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="th-border">行程特色</td>\r\n			<td style="text-align: left">{{travelLine.lineFeature}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="th-border">行程须知</td>\r\n			<td style="text-align: left">{{travelLine.lineNotice}}</td>\r\n		</tr>\r\n		<tr>\r\n			<td class="th-border">备注</td>\r\n			<td style="text-align: left">{{travelLine.remark}}</td>\r\n		</tr>\r\n	</tbody>\r\n</table>\r\n\r\n<div class="text-center">\r\n	<button class="btn btn-xs w100 btn-primary T-btn-viewCancel"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});