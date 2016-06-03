/*TMODJS:{"debug":true,"version":13,"md5":"028a54b7c58019ececedb95a935c2ff4"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/viewTourist", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, contactList = $data.contactList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover mar-t-10"> <thead> <tr> <th>游客名字</th> <th>联系人</th> </tr> </thead> <tbody> ', 
            $line = 10, $each(contactList, function(item) {
                $out += " <tr> <td>", $line = 12, $out += $escape(item.contactMemberName), $out += "</td> <td>", 
                $line = 13, $out += $escape(item.contactMemberPhoneNumber), $out += "</td> </tr> ", 
                $line = 15;
            }), $out += " </tbody> </table> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n    <table class="table table-striped table-bordered table-hover mar-t-10">\r\n        <thead>\r\n            <tr>\r\n                <th>游客名字</th>\r\n                <th>联系人</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each contactList as item}}\r\n            <tr>\r\n                <td>{{item.contactMemberName}}</td>\r\n                <td>{{item.contactMemberPhoneNumber}}</td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});