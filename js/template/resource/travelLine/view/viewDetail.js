/*TMODJS:{"debug":true,"version":99,"md5":"e2bb3c9634ddb646fa5e113f24590f99"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/viewDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, lineDay = $data.lineDay, $string = $utils.$string, $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal travelLineDayForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ" style="width: 96%"> <tr> <td colspan="4" class="HeadManage">行程安排主体信息</td> </tr> <tr> <td class="style-myself">日期：</td> <td class="styleOne-self" style="min-width:50px;">第', 
            $line = 9, $out += $escape(lineDay.whichDay), $out += '天</td> <td class="style-myself">行程标题：</td> <td class="styleOne-self">', 
            $line = 11, $out += $escape(lineDay.title), $out += '</td> </tr> <tr> <td class="style-myself">住宿特点：</td> <td class="styleOne-self">', 
            $line = 15, $out += $escape(lineDay.restPosition), $out += '</td> <td class="style-myself">酒店星级：</td> <td class="styleOne-self">', 
            $line = 17, 0 == lineDay.hotelLevel ? ($out += " 未选择 ", $line = 19) : 1 == lineDay.hotelLevel ? ($out += " 三星以下 ", 
            $line = 21) : 2 == lineDay.hotelLevel ? ($out += " 三星 ", $line = 23) : 3 == lineDay.hotelLevel ? ($out += " 准四星 ", 
            $line = 25) : 4 == lineDay.hotelLevel ? ($out += " 四星 ", $line = 27) : 5 == lineDay.hotelLevel ? ($out += " 准五星 ", 
            $line = 29) : 6 == lineDay.hotelLevel ? ($out += " 五星 ", $line = 31) : 7 == lineDay.hotelLevel && ($out += " 五星以上 ", 
            $line = 33), $out += '</td> </tr> <tr> <td class="style-myself">含餐情况：</td> <td class="styleOne-self" colspan="3">', 
            $line = 37, $out += $escape(lineDay.repastDetail), $out += '</td> </tr> <tr> <td class="style-myself">沿途风景：</td> <td class="styleOne-self" colspan="3">', 
            $line = 42, $out += $escape(lineDay.roadScenic), $out += '</td> </tr> <tr> <td class="style-myself">行程详情：</td> <td class="styleOne-self" colspan="3">', 
            $line = 47, $out += $string(lineDay.detail), $out += "</td> </tr> </table> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal travelLineDayForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ" style="width: 96%">\r\n			<tr>\r\n				<td colspan="4" class="HeadManage">行程安排主体信息</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">日期：</td>\r\n				<td class="styleOne-self" style="min-width:50px;">第{{lineDay.whichDay}}天</td>\r\n				<td class="style-myself">行程标题：</td>\r\n				<td class="styleOne-self">{{lineDay.title}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">住宿特点：</td>\r\n				<td class="styleOne-self">{{lineDay.restPosition}}</td>\r\n				<td class="style-myself">酒店星级：</td>\r\n				<td class="styleOne-self">{{if lineDay.hotelLevel == 0}}\r\n					未选择\r\n					{{else if lineDay.hotelLevel == 1}}\r\n					三星以下\r\n					{{else if lineDay.hotelLevel == 2}}\r\n					三星\r\n					{{else if lineDay.hotelLevel == 3}}\r\n					准四星\r\n					{{else if lineDay.hotelLevel == 4}}\r\n					四星\r\n					{{else if lineDay.hotelLevel == 5}}\r\n					准五星\r\n					{{else if lineDay.hotelLevel == 6}}\r\n					五星\r\n					{{else if lineDay.hotelLevel == 7}}\r\n					五星以上\r\n					{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">含餐情况：</td>\r\n				<td class="styleOne-self" colspan="3">{{lineDay.repastDetail}}</td>\r\n\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">沿途风景：</td>\r\n				<td class="styleOne-self" colspan="3">{{lineDay.roadScenic}}</td>\r\n\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">行程详情：</td>\r\n				<td class="styleOne-self"  colspan="3">{{#lineDay.detail}}</td>\r\n			</tr>\r\n\r\n		</table>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});