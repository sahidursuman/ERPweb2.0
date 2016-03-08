/*TMODJS:{"debug":true,"version":71,"md5":"b2284b62f95fdc96baec96d89dfa901d"}*/
define(function(require) {
    return require("../../../template")("system/basicSet/view/updateBanlAccount", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, bankAccount = $data.bankAccount, $out = "";
            return $out += '<div class="col-xs-12 T-bankAcc-container"> <form class="form-horizontal T-mainForm" role="form" style="margin-top:10px" onsubmit="return false" data-type="', 
            $line = 2, $out += $escape(bankAccount.type), $out += '"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">类型：</label> <div class="col-sm-3"> <select class="col-sm-12 T-accountType" name="type" disabled> <option value="0">现金账户</option> <option value="1" ', 
            $line = 8, 1 == bankAccount.type && ($out += "selected", $line = 8), $out += '>银行账户</option> </select> </div> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px"> <label> <input ', 
            $line = 14, 1 == bankAccount.status && ($out += 'checked ="checked" ', $line = 14), 
            $out += ' type="checkbox" class="ace T-checkStatus" /> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>账户名称：</label> <div class="col-sm-3"> <input type="text" name="aliasName" value="', 
            $line = 24, $out += $escape(bankAccount.aliasName), $out += '" class="col-sm-12" maxlength="32" disabled/> </div> <div class="T-cashHidden"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>银行账号:</label> <div class="col-sm-3"> <input type="text" name="bankNumber" value="', 
            $line = 29, $out += $escape(bankAccount.bankAccountNumber), $out += '" class="col-sm-12" maxlength="32" disabled/> <input type="hidden" name="bankNumberId" value="', 
            $line = 30, $out += $escape(bankAccount.id), $out += '" class="col-sm-12" maxlength="32"/> </div> </div> </div> <input name="incomeMoney" value="', 
            $line = 34, $out += $escape(bankAccount.incomeMoney), $out += '" type="hidden"> <input name="payMoney" value="', 
            $line = 35, $out += $escape(bankAccount.payMoney), $out += '" type="hidden"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>期初余额:</label> <div class="col-sm-3"> <input type="text" name="balanceMoney" class="col-sm-12" value="', 
            $line = 39, $out += $escape(bankAccount.beginningBalance), $out += '" maxlength="9" disabled /> </div> <div class="T-cashHidden"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>开户银行:</label> <div class="col-sm-3"> <input type="text" name="bankName" class="col-sm-12" value="', 
            $line = 44, $out += $escape(bankAccount.openingBank), $out += '" maxlength="32" disabled /> </div> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>期初日期:</label> <div class="col-sm-3"> <input type="text" name="startTime" style="width: 175px;" value="', 
            $line = 51, $out += $escape($helpers.dateFormat(bankAccount.beginningTime, "yyyy-MM-dd")), 
            $out += '" class="col-sm-12 datepicker" disabled /> </div> <div class="T-cashHidden"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>开户户名:</label> <div class="col-sm-3"> <input type="text" name="accountName" class="col-sm-12" value="', 
            $line = 56, $out += $escape(bankAccount.accountName), $out += '" maxlength="20" disabled /> </div> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">备注:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="500">', 
            $line = 63, $out += $escape(bankAccount.remark), $out += '</textarea> </div> </div> <div class="space-10"></div> <button class="btn btn-xs btn-block btn-primary T-submit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 T-bankAcc-container">\r\n	<form class="form-horizontal T-mainForm" role="form" style="margin-top:10px" onsubmit="return false" data-type="{{bankAccount.type}}">\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">类型：</label>\r\n			<div class="col-sm-3">\r\n				<select class="col-sm-12 T-accountType" name="type" disabled>\r\n					<option value="0">现金账户</option>\r\n					<option value="1" {{if bankAccount.type == 1}}selected{{/if}}>银行账户</option>\r\n				</select>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">是否启用:</label>\r\n			<div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px">\r\n				<label>\r\n					<input {{if bankAccount.status == 1}}checked ="checked" {{/if}} type="checkbox" class="ace T-checkStatus"  />\r\n					<span class="lbl">\r\n						启用\r\n					</span>\r\n				</label> \r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>账户名称：</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="aliasName" value="{{bankAccount.aliasName}}" class="col-sm-12"  maxlength="32" disabled/>\r\n			</div>\r\n			<div class="T-cashHidden">\r\n				<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>银行账号:</label>\r\n				<div class="col-sm-3">\r\n					<input type="text" name="bankNumber" value="{{bankAccount.bankAccountNumber}}" class="col-sm-12"  maxlength="32" disabled/>\r\n					<input type="hidden" name="bankNumberId" value="{{bankAccount.id}}" class="col-sm-12"  maxlength="32"/>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<input name="incomeMoney" value="{{bankAccount.incomeMoney}}" type="hidden">\r\n		<input name="payMoney" value="{{bankAccount.payMoney}}" type="hidden">\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>期初余额:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="balanceMoney" class="col-sm-12" value="{{bankAccount.beginningBalance}}" maxlength="9" disabled />\r\n			</div>\r\n			<div class="T-cashHidden">\r\n				<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>开户银行:</label>\r\n				<div class="col-sm-3">\r\n					<input type="text" name="bankName" class="col-sm-12" value="{{bankAccount.openingBank}}" maxlength="32" disabled />\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>期初日期:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="startTime" style="width: 175px;" value="{{bankAccount.beginningTime | dateFormat: \'yyyy-MM-dd\'}}" class="col-sm-12 datepicker" disabled />\r\n			</div>\r\n			<div class="T-cashHidden">\r\n				<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>开户户名:</label>\r\n				<div class="col-sm-3">\r\n					<input type="text" name="accountName" class="col-sm-12" value="{{bankAccount.accountName}}" maxlength="20" disabled />\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">备注:</label>\r\n			<div class="col-sm-8">\r\n				<textarea class="form-control" name="remark" class="col-sm-12" maxlength="500">{{bankAccount.remark}}</textarea> \r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-xs btn-block btn-primary T-submit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});