/*TMODJS:{"debug":true,"version":74,"md5":"0eb1566308b7053348d521dde4b2bf61"}*/
define(function(require) {
    return require("../../../template")("customer/newOrder/view/addGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, tripNumber = $data.tripNumber, id = $data.id, adultCount = $data.adultCount, childCount = $data.childCount, $each = $utils.$each, touristGroupMemberList = $data.touristGroupMemberList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="T-addGroup col-xs-12 layer-content"> <form class="form-horizontal"> <div class="form-group"> <label for="" class="col-sm-2 control-label">团号：</label> <div class="col-sm-3"><input type="text" name="tripNumber" value="', 
            $line = 5, $out += $escape(tripNumber), $out += '"><input name="id" type="hidden" value="', 
            $line = 5, $out += $escape(id), $out += '"></div> <label for="" class="col-sm-2 control-label"><span class="red">*</span>游客人数：</label> <div class="col-sm-3"><input class="width60" type="text" name="adultCount" value="', 
            $line = 7, $out += $escape(adultCount), $out += '">&nbsp;大&nbsp;<input class="width60" type="text" name="childCount" value="', 
            $line = 7, $out += $escape(childCount), $out += '">&nbsp;小&nbsp;</div> </div> <div class="form-group mar-t20"> <label class="col-sm-2 control-label"><span class="red">*</span>游客联系人：</label> <button class="T-addContactMember btn btn-xs btn-success"><i class="ace-icon fa fa-plus"></i>新增联系人</button> </div> <table class="T-contactMemberList table table-striped table-bordered table-hover table-text-center table-group"> <tr> <th>姓名</th> <th>手机号码</th> <th>操作</th> </tr> ', 
            $line = 19, $each(touristGroupMemberList, function(rs) {
                $out += ' <tr data-id="', $line = 20, $out += $escape(rs.id), $out += '"> <td><input name="name" type="text" value="', 
                $line = 21, $out += $escape(rs.name), $out += '"></td> <td><input name="mobileNumber" type="text" value="', 
                $line = 22, $out += $escape(rs.mobileNumber), $out += '"></td> <td><button class="T-delete btn btn-xs btn-danger"><i class="ace-icon fa fa-close"></i>删除</button></td> </tr> ', 
                $line = 25;
            }), $out += ' </table> </form> <button class="T-save btn btn-block btn-primary btn-sm">保存</button> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-addGroup col-xs-12 layer-content">\r\n    <form class="form-horizontal">\r\n        <div class="form-group">\r\n            <label for="" class="col-sm-2 control-label">团号：</label>\r\n            <div class="col-sm-3"><input type="text" name="tripNumber" value="{{tripNumber}}"><input name="id" type="hidden" value="{{id}}"></div>\r\n            <label for="" class="col-sm-2 control-label"><span class="red">*</span>游客人数：</label>\r\n            <div class="col-sm-3"><input class="width60" type="text" name="adultCount" value="{{adultCount}}">&nbsp;大&nbsp;<input class="width60" type="text" name="childCount" value="{{childCount}}">&nbsp;小&nbsp;</div>\r\n        </div>\r\n        <div class="form-group mar-t20">\r\n            <label class="col-sm-2 control-label"><span class="red">*</span>游客联系人：</label>\r\n            <button class="T-addContactMember btn btn-xs btn-success"><i class="ace-icon fa fa-plus"></i>新增联系人</button>\r\n        </div>\r\n        <table class="T-contactMemberList table table-striped table-bordered table-hover table-text-center table-group">\r\n            <tr>\r\n                <th>姓名</th>\r\n                <th>手机号码</th>\r\n                <th>操作</th>\r\n            </tr>\r\n            {{each touristGroupMemberList as rs}}\r\n            <tr data-id="{{rs.id}}">\r\n                <td><input name="name" type="text" value="{{rs.name}}"></td>\r\n                <td><input name="mobileNumber" type="text" value="{{rs.mobileNumber}}"></td>\r\n                <td><button class="T-delete btn btn-xs btn-danger"><i class="ace-icon fa fa-close"></i>删除</button></td>\r\n            </tr>\r\n            {{/each}}\r\n        </table>\r\n    </form>\r\n    <button class="T-save btn btn-block btn-primary btn-sm">保存</button>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});