/*TMODJS:{"debug":true,"version":9,"md5":"6e9c5924e2cee4d0d0feee45b0519622"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/tourists", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, memberList = $data.memberList, $escape = ($data.member, 
            $data.index, $utils.$escape), $out = "";
            return $line = 1, $each(memberList, function(member, index) {
                $out += " <tr> <td>", $line = 3, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 4, $out += $escape(member.name), $out += "</td> <td>", $line = 5, $out += $escape(member.mobileNumber), 
                $out += "</td> <td>", $line = 6, $out += $escape(0 == member.idCardType ? "身份证" : 1 == member.idCardType ? "护照" : "其他"), 
                $out += "</td> <td>", $line = 7, $out += $escape(member.idCardNumber), $out += "</td> <td>", 
                $line = 8, $out += $escape(member.isContactUser ? "是" : "否"), $out += "</td> </tr> ", 
                $line = 10;
            }), new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "{{each memberList as member index}}\r\n<tr>\r\n    <td>{{index + 1}}</td>\r\n    <td>{{member.name}}</td>\r\n    <td>{{member.mobileNumber}}</td>\r\n    <td>{{member.idCardType == 0? '身份证': (member.idCardType == 1? '护照': '其他')}}</td>\r\n    <td>{{member.idCardNumber}}</td>\r\n    <td>{{member.isContactUser?'是': '否'}}</td>\r\n</tr>\r\n{{/each}}".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});