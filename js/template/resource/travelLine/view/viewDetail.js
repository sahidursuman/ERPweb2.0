/*TMODJS:{"debug":true,"version":105,"md5":"6c6112746c74efb8f375473e062b55c5"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/viewDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, lineDay = $data.lineDay, $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal travelLineDayForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ" style="width: 96%"> <tr> <td colspan="4" class="HeadManage">行程安排主体信息</td> </tr> <tr> <td class="style-myself">日期：</td> <td class="styleOne-self" style="min-width:50px;">第', 
            $line = 9, $out += $escape(lineDay.whichDay), $out += '天</td> <td class="style-myself">简要行程：</td> <td class="styleOne-self">', 
            $line = 11, $out += $escape(lineDay.title), $out += '</td> </tr> <tr> <td class="style-myself">含餐情况：</td> <td class="styleOne-self" style="width: 205px;"> <label><input type="checkbox" class="ace T-breakfast" value="1" name="breakfast" /><span class="lbl">&nbsp;早餐</span></label> <label><input type="checkbox" class="ace T-lunch" value="1" name="lunch" /><span class="lbl">&nbsp;午餐</span></label> <label><input type="checkbox" class="ace T-dinner" value="1" name="dinner" /><span class="lbl">&nbsp;晚餐</span></label> </td> <td class="style-myself">住宿地点：</td> <td class="styleOne-self">', 
            $line = 21, $out += $escape(lineDay.restPosition), $out += '</td> </tr> <tr> <td class="style-myself">景点：</td> <td class="styleOne-self" colspan="3">', 
            $line = 25, $out += $escape(lineDay.repastDetail), $out += "</td> </tr> </table> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal travelLineDayForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<table class="whereQ" style="width: 96%">\r\n			<tr>\r\n				<td colspan="4" class="HeadManage">行程安排主体信息</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">日期：</td>\r\n				<td class="styleOne-self" style="min-width:50px;">第{{lineDay.whichDay}}天</td>\r\n				<td class="style-myself">简要行程：</td>\r\n				<td class="styleOne-self">{{lineDay.title}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">含餐情况：</td>\r\n				<td class="styleOne-self" style="width: 205px;">\r\n					<label><input type="checkbox" class="ace T-breakfast" value="1" name="breakfast" /><span class="lbl">&nbsp;早餐</span></label>\r\n					<label><input type="checkbox" class="ace T-lunch" value="1" name="lunch" /><span class="lbl">&nbsp;午餐</span></label>\r\n					<label><input type="checkbox" class="ace T-dinner" value="1" name="dinner" /><span class="lbl">&nbsp;晚餐</span></label>\r\n				</td>\r\n				<td class="style-myself">住宿地点：</td>\r\n				<td class="styleOne-self">{{lineDay.restPosition}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td class="style-myself">景点：</td>\r\n				<td class="styleOne-self" colspan="3">{{lineDay.repastDetail}}</td>\r\n			</tr>\r\n		</table>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});