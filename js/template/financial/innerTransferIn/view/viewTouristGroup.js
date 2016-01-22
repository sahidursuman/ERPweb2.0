/*TMODJS:{"debug":true,"version":3,"md5":"d18f4285a8288287cc1423fa874d674c"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/viewTouristGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, memberList = $data.memberList, $escape = ($data.member, 
            $data.index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>序号</th> <th>姓名</th> <th>联系电话</th> <th>证件类型</th> <th>证件号</th> <th>联系人</th> </tr> </thead> <tbody> ', 
            $line = 14, $each(memberList, function(member, index) {
                $out += " <tr> <td>", $line = 16, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 17, $out += $escape(member.name), $out += "</td> <td>", $line = 18, $out += $escape(member.mobileNumber), 
                $out += "</td> <td>", $line = 19, $out += $escape(0 == member.idCardType ? "身份证" : 1 == member.idCardType ? "护照" : "其他"), 
                $out += "</td> <td>", $line = 20, $out += $escape(member.idCardNumber), $out += "</td> <td>", 
                $line = 21, $out += $escape(member.isContactUser ? "是" : "否"), $out += "</td> </tr> ", 
                $line = 23;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: "<div class=\"row\" style=\"margin: 0; padding: 10px 10px 0;\">\r\n	<table class=\"table table-striped table-bordered table-hover\">\r\n        <thead>\r\n            <tr>\r\n                <th>序号</th>\r\n                <th>姓名</th>\r\n                <th>联系电话</th>\r\n                <th>证件类型</th>\r\n                <th>证件号</th>\r\n                <th>联系人</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            {{each memberList as member index}}\r\n			<tr>\r\n			    <td>{{index + 1}}</td>\r\n			    <td>{{member.name}}</td>\r\n			    <td>{{member.mobileNumber}}</td>\r\n			    <td>{{member.idCardType == 0? '身份证': (member.idCardType == 1? '护照': '其他')}}</td>\r\n			    <td>{{member.idCardNumber}}</td>\r\n			    <td>{{member.isContactUser?'是': '否'}}</td>\r\n			</tr>\r\n			{{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>".split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});