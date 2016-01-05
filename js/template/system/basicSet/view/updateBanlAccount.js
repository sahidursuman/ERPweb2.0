/*TMODJS:{"debug":true,"version":42,"md5":"c0a0792d7995accdf67a01df0f630813"}*/
define(function(require) {
    return require("../../../template")("system/basicSet/view/updateBanlAccount", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, bankAccount = $data.bankAccount, $out = "";
            return $out += '<div class="col-xs-12 T-bankAcc-container"> <form class="form-horizontal T-mainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>银行账号:</label> <div class="col-sm-4"> <input type="text" name="bankNumber" value="', 
            $line = 6, $out += $escape(bankAccount.bankAccountNumber), $out += '" class="col-sm-12" maxlength="32"/> <input type="hidden" name="bankNumberId" value="', 
            $line = 7, $out += $escape(bankAccount.id), $out += '" class="col-sm-12" maxlength="32"/> </div> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px"> <label> <input checked="checked" type="checkbox" class="ace T-checkStatus" value="', 
            $line = 12, $out += $escape(bankAccount.status), $out += '" /> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>开户银行:</label> <div class="col-sm-4"> <input type="text" name="bankName" class="col-sm-12" value="', 
            $line = 22, $out += $escape(bankAccount.openingBank), $out += '" maxlength="32" /> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>期初余额:</label> <div class="col-sm-3"> <input type="text" name="balanceMoney" class="col-sm-12" value="', 
            $line = 26, $out += $escape(bankAccount.beginningBalance), $out += '" maxlength="9" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>开户户名:</label> <div class="col-sm-4"> <input type="text" name="accountName" class="col-sm-12" value="', 
            $line = 32, $out += $escape(bankAccount.accountName), $out += '" maxlength="20" /> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>期初日期:</label> <div class="col-sm-3"> <input type="text" name="startTime" value="', 
            $line = 36, $out += $escape($helpers.dateFormat(bankAccount.beginningTime, "yyyy-MM-dd")), 
            $out += '" class="col-sm-12 datepicker" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">备注:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="500">', 
            $line = 42, $out += $escape(bankAccount.remark), $out += '</textarea> </div> </div> <div class="space-10"></div> <button class="btn btn-xs btn-block btn-primary T-submit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 T-bankAcc-container">\r\n	<form class="form-horizontal T-mainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>银行账号:</label>\r\n			<div class="col-sm-4">\r\n				<input type="text" name="bankNumber" value="{{bankAccount.bankAccountNumber}}" class="col-sm-12"  maxlength="32"/>\r\n				<input type="hidden" name="bankNumberId" value="{{bankAccount.id}}" class="col-sm-12"  maxlength="32"/>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">是否启用:</label>\r\n			<div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px">\r\n				<label>\r\n					<input checked="checked" type="checkbox" class="ace T-checkStatus" value="{{bankAccount.status}}" />\r\n					<span class="lbl">\r\n						启用\r\n					</span>\r\n				</label> \r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>开户银行:</label>\r\n			<div class="col-sm-4">\r\n				<input type="text" name="bankName" class="col-sm-12" value="{{bankAccount.openingBank}}" maxlength="32" />\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>期初余额:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="balanceMoney" class="col-sm-12" value="{{bankAccount.beginningBalance}}" maxlength="9" />\r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>开户户名:</label>\r\n			<div class="col-sm-4">\r\n				<input type="text" name="accountName" class="col-sm-12" value="{{bankAccount.accountName}}" maxlength="20" />\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>期初日期:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="startTime" value="{{bankAccount.beginningTime | dateFormat: \'yyyy-MM-dd\'}}" class="col-sm-12 datepicker" />\r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right">备注:</label>\r\n			<div class="col-sm-8">\r\n				<textarea class="form-control" name="remark" class="col-sm-12" maxlength="500">{{bankAccount.remark}}</textarea> \r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-xs btn-block btn-primary T-submit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});