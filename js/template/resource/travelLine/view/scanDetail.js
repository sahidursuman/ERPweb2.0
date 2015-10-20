/*TMODJS:{"debug":true,"version":88,"md5":"ec0b60b51268ee63608a2adf4bd883dc"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/scanDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, travelLine = $data.travelLine, $each = $utils.$each, $out = ($data.line, 
            $data.$index, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal travelLineMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">线路主体信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%">  <tr> <td class="style-myself">线路名称：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 13, $out += $escape(travelLine.name), $out += '</td> <td class="style-myself">行程天数：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 15, $out += $escape(travelLine.days), $out += '天</td> </tr> <tr> <td class="style-myself">费用包含：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 19, $out += $escape(travelLine.includeFee), $out += '</td> </tr> <tr> <td class="style-myself">费用不包含：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 24, $out += $escape(travelLine.excludeFee), $out += '</td> </tr> <tr> <td class="style-myself">行程特色：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 29, $out += $escape(travelLine.lineFeature), $out += '</td> </tr> <tr> <td class="style-myself">行程须知：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 34, $out += $escape(travelLine.lineNotice), $out += '</td> </tr> <tr> <td class="style-myself">行程备注：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 39, $out += $escape(travelLine.remark), $out += '</td> </tr> </table> </form> <form class="form-horizontal travelLineDayList" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">日程列表</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover lineDayList"> <thead> <tr > <th class="th-border">日期</th> <th class="th-border" >含餐情况</th> <th class="th-border">住宿地点</th> <th class="th-border">酒店星级</th> <th class="th-border">行程标题</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 65, $each(travelLine.travelLineDayList, function(line) {
                $out += " <tr> <td>第", $line = 67, $out += $escape(line.whichDay), $out += "天</td> <td>", 
                $line = 68, $out += $escape(line.repastDetail), $out += "</td> <td>", $line = 69, 
                $out += $escape(line.restPosition), $out += "</td> <td> ", $line = 71, 1 == line.hotelLevel ? ($out += " 三星以下 ", 
                $line = 73) : 2 == line.hotelLevel ? ($out += " 三星 ", $line = 75) : 3 == line.hotelLevel ? ($out += " 准四星 ", 
                $line = 77) : 4 == line.hotelLevel ? ($out += " 四星 ", $line = 79) : 5 == line.hotelLevel ? ($out += " 准五星 ", 
                $line = 81) : 6 == line.hotelLevel ? ($out += " 五星 ", $line = 83) : 7 == line.hotelLevel && ($out += " 五星以上 ", 
                $line = 85), $out += " </td> <td>", $line = 87, $out += $escape(line.title), $out += '</td> <td> <a data-entiy-id="', 
                $line = 89, $out += $escape(line.id), $out += '" class="cursor btn-guide-scan"> 查看 </a> </td> </tr> ', 
                $line = 94;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal travelLineMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	<h5 class="">\r\n							<span class="badge badge-primary">1</span>\r\n							<label class="middle title-size">线路主体信息</label>\r\n						</h5>\r\n		<table class="whereQ whereTwo" style="width: 100%">\r\n			<!-- <tr>\r\n				<td colspan="8" class="HeadManage" style="text-align: left">线路主体信息</td>\r\n			</tr> -->\r\n			<tr>\r\n				<td class="style-myself">线路名称：</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{travelLine.name}}</td>\r\n				<td class="style-myself">行程天数：</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px">{{travelLine.days}}天</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">费用包含：</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{travelLine.includeFee}}</td>\r\n				</tr>\r\n\r\n			<tr>\r\n				<td class="style-myself">费用不包含：</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{travelLine.excludeFee}}</td>\r\n			</tr>\r\n\r\n			<tr>\r\n				<td class="style-myself">行程特色：</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{travelLine.lineFeature}}</td>\r\n			</tr>\r\n\r\n			<tr>\r\n				<td class="style-myself">行程须知：</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{travelLine.lineNotice}}</td>\r\n			</tr>\r\n\r\n			<tr>\r\n				<td class="style-myself">行程备注：</td>\r\n				<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{travelLine.remark}}</td>\r\n			</tr>\r\n		</table>\r\n	</form>\r\n	<form class="form-horizontal travelLineDayList" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">2</span>\r\n							<label class="middle title-size">日程列表</label>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover lineDayList"> \r\n								<thead>\r\n									<tr >\r\n										<th class="th-border">日期</th>\r\n										<th class="th-border" >含餐情况</th>\r\n										<th class="th-border">住宿地点</th>\r\n										<th class="th-border">酒店星级</th>\r\n										<th class="th-border">行程标题</th>\r\n										<th class="th-border">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each travelLine.travelLineDayList as line}}\r\n											<tr>\r\n												<td>第{{line.whichDay}}天</td>\r\n												<td>{{line.repastDetail}}</td>\r\n												<td>{{line.restPosition}}</td>\r\n												<td>\r\n													{{if line.hotelLevel == 1}}\r\n														三星以下\r\n													{{else if line.hotelLevel == 2}}\r\n														三星\r\n													{{else if line.hotelLevel == 3}}\r\n														准四星\r\n													{{else if line.hotelLevel == 4}}\r\n														四星\r\n													{{else if line.hotelLevel == 5}}\r\n														准五星\r\n													{{else if line.hotelLevel == 6}}\r\n														五星\r\n													{{else if line.hotelLevel == 7}}\r\n														五星以上\r\n													{{/if}}\r\n												</td>\r\n												<td>{{line.title}}</td>\r\n												<td>\r\n													<a data-entiy-id="{{line.id}}" class="cursor btn-guide-scan">\r\n														查看\r\n													</a>\r\n												</td>\r\n											</tr>\r\n										{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});