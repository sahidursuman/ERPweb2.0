/*TMODJS:{"debug":true,"version":58,"md5":"e8e9aed1a7589899c9800a986b5efda7"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/viewDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, lineDay = $data.lineDay, $string = $utils.$string, $out = "";
            return $out += ' <form class="form-horizontal travelLineDayForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ whereTwo"> <tr> <td class="style-myself">日期：</td> <td class="styleOne-self">第', 
            $line = 7, $out += $escape(lineDay.whichDay), $out += '天</td> <td class="style-myself">行程标题：</td> <td class="styleOne-self">', 
            $line = 9, $out += $escape(lineDay.title), $out += '</td> </tr> <tr> <td class="style-myself">住宿地点：</td> <td class="styleOne-self">', 
            $line = 13, $out += $escape(lineDay.restPosition), $out += '</td> <td class="style-myself">酒店星级：</td> <td class="styleOne-self">', 
            $line = 15, 1 == lineDay.hotelLevel ? ($out += " 三星以下 ", $line = 17) : 2 == lineDay.hotelLevel ? ($out += " 三星 ", 
            $line = 19) : 3 == lineDay.hotelLevel ? ($out += " 准四星 ", $line = 21) : 4 == lineDay.hotelLevel ? ($out += " 四星 ", 
            $line = 23) : 5 == lineDay.hotelLevel ? ($out += " 准五星 ", $line = 25) : 6 == lineDay.hotelLevel ? ($out += " 五星 ", 
            $line = 27) : 7 == lineDay.hotelLevel && ($out += " 五星以上 ", $line = 29), $out += '</td> </tr> <tr> <td class="style-myself">含餐情况：</td> <td class="styleOne-self"colspan="1">', 
            $line = 33, $out += $escape(lineDay.repastDetail), $out += '</td> <td class="style-myself">沿途风景：</td> <td class="styleOne-self" colspan="3">', 
            $line = 35, $out += $escape(lineDay.roadScenic), $out += '</td> </tr> <tr> <td class="style-myself">行程详情：</td> <td class="styleOne-self" colspan="4">', 
            $line = 39, $out += $string(lineDay.detail), $out += "</td> </tr> </table> </form> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n	<form class="form-horizontal travelLineDayForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ whereTwo">\r\n\r\n			<tr>\r\n				<td class="style-myself">日期：</td>\r\n				<td class="styleOne-self">第{{lineDay.whichDay}}天</td>\r\n				<td class="style-myself">行程标题：</td>\r\n				<td class="styleOne-self">{{lineDay.title}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">住宿地点：</td>\r\n				<td class="styleOne-self">{{lineDay.restPosition}}</td>\r\n				<td class="style-myself">酒店星级：</td>\r\n				<td class="styleOne-self">{{if lineDay.hotelLevel == 1}}\r\n					三星以下\r\n					{{else if lineDay.hotelLevel == 2}}\r\n					三星\r\n					{{else if lineDay.hotelLevel == 3}}\r\n					准四星\r\n					{{else if lineDay.hotelLevel == 4}}\r\n					四星\r\n					{{else if lineDay.hotelLevel == 5}}\r\n					准五星\r\n					{{else if lineDay.hotelLevel == 6}}\r\n					五星\r\n					{{else if lineDay.hotelLevel == 7}}\r\n					五星以上\r\n					{{/if}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">含餐情况：</td>\r\n				<td class="styleOne-self"colspan="1">{{lineDay.repastDetail}}</td>\r\n				<td class="style-myself">沿途风景：</td>\r\n				<td class="styleOne-self" colspan="3">{{lineDay.roadScenic}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">行程详情：</td>\r\n				<td class="styleOne-self" colspan="4">{{#lineDay.detail}}</td>\r\n\r\n			</tr>\r\n\r\n		</table>\r\n	</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});