/*TMODJS:{"debug":true,"version":200,"md5":"58672b1df1ed19e0a51e062d442f57b0"}*/
define(function(require) {
    return require("../../../template")("resource/guide/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, guide = $data.guide, $out = "";
            return $out += '<form class="form-horizontal guideMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <table class="whereQ"> <tr> <td class="style-myself">导游姓名</td> <td class="styleOne-self">', 
            $line = 5, $out += $escape(guide.realname), $out += '</td> <td class="style-myself">性别</td> <td class="styleOne-self">', 
            $line = 7, 1 == guide.gender ? ($out += " 女 ", $line = 9) : ($out += " 男 ", $line = 11), 
            $out += '</td> </tr> <tr> <td class="style-myself">联系电话</td> <td class="styleOne-self">', 
            $line = 15, $out += $escape(guide.mobileNumber), $out += '</td> <td class="style-myself">所属公司</td> <td class="styleOne-self">', 
            $line = 17, $out += $escape(guide.company), $out += '</td> </tr> <tr> <td class="style-myself">导游证编号</td> <td class="styleOne-self">', 
            $line = 21, $out += $escape(guide.guideCardNumber), $out += '</td> <td class="style-myself">身份证号</td> <td class="styleOne-self">', 
            $line = 23, $out += $escape(guide.idCardNumber), $out += '</td> </tr> <tr> <td class="style-myself">导游等级</td> <td class="styleOne-self">', 
            $line = 27, 1 == guide.guideLevel ? ($out += " 初级导游 ", $line = 29) : 2 == guide.guideLevel ? ($out += " 中级导游 ", 
            $line = 31) : 3 == guide.guideLevel ? ($out += " 高级导游 ", $line = 33) : 4 == guide.guideLevel && ($out += " 特级导游 ", 
            $line = 35), $out += '</td> <td class="style-myself">学历</td> <td class="styleOne-self">', 
            $line = 37, 1 == guide.guideEducation ? ($out += " 小学 ", $line = 39) : 2 == guide.guideEducation ? ($out += " 初中 ", 
            $line = 41) : 3 == guide.guideEducation ? ($out += " 高中 ", $line = 43) : 4 == guide.guideEducation ? ($out += " 中专 ", 
            $line = 45) : 5 == guide.guideEducation ? ($out += " 大专 ", $line = 47) : 6 == guide.guideEducation ? ($out += " 本科 ", 
            $line = 49) : 7 == guide.guideEducation ? ($out += " 研究生 ", $line = 51) : 8 == guide.guideEducation ? ($out += " 硕士 ", 
            $line = 53) : 9 == guide.guideEducation && ($out += " 博士 ", $line = 55), $out += '</td> </tr> <tr> <td class="style-myself">加入时间</td> <td class="styleOne-self">', 
            $line = 59, $out += $escape($helpers.dateFormat(guide.joinTime, "yyyy-MM-dd")), 
            $out += '</td> <td class="style-myself">是否启用</td> <td class="styleOne-self">', $line = 61, 
            0 == guide.status ? ($out += " 已停用 ", $line = 63) : ($out += " 已启用 ", $line = 65), 
            $out += '</td> </tr> <tr> <td class="style-myself">导游简介</td> <td colspan="3" class="styleOne-self"> ', 
            $line = 69, $out += $escape(guide.remark), $out += "</td> </tr> </table> </form>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-horizontal guideMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n<table class="whereQ">\r\n	<tr>\r\n		<td class="style-myself">导游姓名</td>\r\n		<td class="styleOne-self">{{guide.realname}}</td>\r\n		<td class="style-myself">性别</td>\r\n		<td class="styleOne-self">{{if guide.gender == 1}}\r\n			女\r\n			{{else}}\r\n			男\r\n			{{/if}}</td>\r\n	</tr>\r\n	<tr>\r\n		<td class="style-myself">联系电话</td>\r\n		<td class="styleOne-self">{{guide.mobileNumber}}</td>\r\n		<td class="style-myself">所属公司</td>\r\n		<td class="styleOne-self">{{guide.company}}</td>\r\n	</tr>\r\n	<tr>\r\n		<td class="style-myself">导游证编号</td>\r\n		<td class="styleOne-self">{{guide.guideCardNumber}}</td>\r\n		<td class="style-myself">身份证号</td>\r\n		<td class="styleOne-self">{{guide.idCardNumber}}</td>\r\n	</tr>\r\n	<tr>\r\n		<td class="style-myself">导游等级</td>\r\n		<td class="styleOne-self">{{if guide.guideLevel == 1}}\r\n			初级导游\r\n			{{else if guide.guideLevel == 2}}\r\n			中级导游\r\n			{{else if guide.guideLevel == 3}}\r\n			高级导游\r\n			{{else if guide.guideLevel == 4}}\r\n			特级导游\r\n			{{/if}}</td>\r\n		<td class="style-myself">学历</td>\r\n		<td class="styleOne-self">{{if guide.guideEducation == 1}}\r\n			小学\r\n			{{else if guide.guideEducation == 2}}\r\n			初中\r\n			{{else if guide.guideEducation == 3}}\r\n			高中\r\n			{{else if guide.guideEducation == 4}}\r\n			中专\r\n			{{else if guide.guideEducation == 5}}\r\n			大专\r\n			{{else if guide.guideEducation == 6}}\r\n			本科\r\n			{{else if guide.guideEducation == 7}}\r\n			研究生\r\n			{{else if guide.guideEducation == 8}}\r\n			硕士\r\n			{{else if guide.guideEducation == 9}}\r\n			博士\r\n			{{/if}}</td>\r\n	</tr>\r\n	<tr>\r\n		<td class="style-myself">加入时间</td>\r\n		<td class="styleOne-self">{{guide.joinTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n		<td class="style-myself">是否启用</td>\r\n		<td class="styleOne-self">{{if guide.status == 0}}\r\n			已停用\r\n			{{else guide.status == 1}}\r\n			已启用\r\n			{{/if}}</td>\r\n	</tr>\r\n	<tr>\r\n		<td class="style-myself">导游简介</td>\r\n		<td colspan="3" class="styleOne-self"> {{guide.remark}}</td>\r\n	</tr>\r\n</table>\r\n\r\n</form>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});