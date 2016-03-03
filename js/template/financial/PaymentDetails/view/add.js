/*TMODJS:{"debug":true,"version":270,"md5":"a0bdc1c89fb34a54bd7f3f54ae750cd5"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/add", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, subjectdata0 = $data.subjectdata0, $escape = ($data.sub0, 
            $data.$index, $utils.$escape), groupdata = ($data.sub, $data.index, $data.groupdata), $out = ($data.group, 
            "");
            return $out += '<div class="col-xs-12 T-addPayment-container"> <form class="form-horizontal T-form" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>业务类别：</label> <div class="col-sm-3"> <select name="moneyType" class="col-sm-12 T-moneyType"> <option value="0">收入</option> <option value="1">支出</option> <option value="2">转账</option> </select> </div> <div class="col-sm-6 T-Ntransfer"> <label class="col-sm-4 control-label no-padding-right">对方单位：</label> <div class="col-sm-6"> <input type="text" name="resourceName" class="col-sm-12" /> </div> </div> </div> <div class="form-group T-bank-area T-Ntransfer"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>支付方式：</label> <div class="col-sm-3"> <select name="payType" class="col-sm-12"> <option value="0">现金</option> <option value="1">银行转账</option> <option value="3">支票</option> <option value="4">其他</option> </select> </div> <div class="hidden"> <label class="col-sm-2 control-label no-padding-right bankNum">银行账号：</label> <label class="col-sm-3"> <input type="text" name="card-number" class="money" style="width:226px;"> <input type="hidden" name="card-id"> </label> </div> </div> <div class="form-group T-transfer hidden"> <label class="col-sm-2 control-label no-padding-right bankNum"><span class="necessary">*</span>转出账户：</label> <label class="col-sm-3"> <input type="text" name="out-number" class="money" style="width:226px;"> <input type="hidden" name="out-id"> </label> <label class="col-sm-2 control-label no-padding-right bankNum"><span class="necessary">*</span>转入账户：</label> <label class="col-sm-3"> <input type="text" name="in-number" class="money" style="width:226px;"> <input type="hidden" name="in-id"> </label> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>会计科目：</label> <div class="col-sm-3"> <select name="subjectId" class="col-sm-12 T-option T-subject"> ', 
            $line = 55, $each(subjectdata0, function(sub0) {
                $out += ' <option value="', $line = 56, $out += $escape(sub0.id), $out += '">', 
                $line = 56, $out += $escape(sub0.subjectName), $out += "</option> ", $line = 57;
            }), $out += ' </select> <input type="hidden" name="subjectName" value="', $line = 59, 
            $each(subjectdata0, function(sub, index) {
                $line = 59, 0 == index && ($line = 59, $out += $escape(sub.subjectName), $line = 59), 
                $line = 59;
            }), $out += '" /> </div> <label class="col-sm-2 control-label no-padding-right">所属部门：</label> <div class="col-sm-3"> <select name="departmentId" class="col-sm-12"> ', 
            $line = 64, $each(groupdata, function(group) {
                $out += ' <option value="', $line = 65, $out += $escape(group.id), $out += '">', 
                $line = 65, $out += $escape(group.name), $out += "</option> ", $line = 66;
            }), $out += ' </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>记账金额：</label> <div class="col-sm-3"> <input type="text" name="incomeMoney" class="col-sm-12 F-float F-money" maxlength="9"/> </div> <label class="col-sm-2 control-label no-padding-right">凭证编号：</label> <div class="col-sm-3"> <input type="text" name="voucher" class="col-sm-12" maxlength="45"/> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>记账日期：</label> <div class="col-sm-3"> <input type="text" name="billTime" class="col-sm-12 datepicker" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">备注：</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000"></textarea> </div> </div> <div class="form-group" style="text-align:center;"> <button class="btn btn-xs btn-primary T-option T-close-payment"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-option T-save-payment marginLeft-30"> <i class="ace-icon fa fa-check-circle"></i>保存 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 T-addPayment-container">\r\n	<form class="form-horizontal T-form" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>业务类别：</label>\r\n			<div class="col-sm-3">\r\n				<select name="moneyType" class="col-sm-12 T-moneyType">\r\n					<option value="0">收入</option>\r\n					<option value="1">支出</option>\r\n					<option value="2">转账</option>\r\n				</select>\r\n			</div>\r\n			<div class="col-sm-6 T-Ntransfer">\r\n				<label class="col-sm-4 control-label no-padding-right">对方单位：</label> \r\n				<div class="col-sm-6">\r\n					<input type="text" name="resourceName" class="col-sm-12" />\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="form-group T-bank-area T-Ntransfer">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>支付方式：</label>\r\n			<div class="col-sm-3">\r\n				<select name="payType" class="col-sm-12">\r\n					<option value="0">现金</option>\r\n					<option value="1">银行转账</option>\r\n					<option value="3">支票</option>\r\n					<option value="4">其他</option>\r\n				</select>\r\n			</div>\r\n			<div class="hidden">\r\n				<label class="col-sm-2 control-label no-padding-right bankNum">银行账号：</label>\r\n				<label class="col-sm-3">\r\n					<input type="text" name="card-number" class="money" style="width:226px;">\r\n	                <input type="hidden" name="card-id">\r\n				</label>\r\n			</div>\r\n		</div>\r\n\r\n		<div class="form-group T-transfer hidden">\r\n			<label class="col-sm-2 control-label no-padding-right bankNum"><span class="necessary">*</span>转出账户：</label>\r\n			<label class="col-sm-3">\r\n				<input type="text" name="out-number" class="money" style="width:226px;">\r\n                <input type="hidden" name="out-id">\r\n			</label>\r\n			<label class="col-sm-2 control-label no-padding-right bankNum"><span class="necessary">*</span>转入账户：</label>\r\n			<label class="col-sm-3">\r\n				<input type="text" name="in-number" class="money" style="width:226px;">\r\n                <input type="hidden" name="in-id">\r\n			</label>\r\n		</div>\r\n\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>会计科目：</label>\r\n			<div class="col-sm-3">\r\n				<select name="subjectId" class="col-sm-12 T-option T-subject">\r\n					{{each subjectdata0 as sub0}}\r\n					<option value="{{sub0.id}}">{{sub0.subjectName}}</option>\r\n					{{/each}}\r\n				</select>\r\n				<input type="hidden" name="subjectName" value="{{each subjectdata0 as sub index}}{{if index == 0}}{{sub.subjectName}}{{/if}}{{/each}}" />\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">所属部门：</label>\r\n			<div class="col-sm-3">\r\n				<select name="departmentId" class="col-sm-12">\r\n					{{each groupdata as group}}\r\n						<option value="{{group.id}}">{{group.name}}</option>\r\n					{{/each}}\r\n				</select>\r\n			</div>\r\n		</div>\r\n\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>记账金额：</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="incomeMoney" class="col-sm-12 F-float F-money" maxlength="9"/>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">凭证编号：</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="voucher" class="col-sm-12" maxlength="45"/>\r\n			</div>\r\n		</div>\r\n\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>记账日期：</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="billTime" class="col-sm-12 datepicker"  />\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">备注：</label>\r\n			<div class="col-sm-8">\r\n				<textarea class="form-control" name="remark" class="col-sm-12" maxlength="1000"></textarea>  \r\n			</div>\r\n		</div>\r\n		\r\n		<div class="form-group" style="text-align:center;">\r\n			<button class="btn btn-xs btn-primary T-option T-close-payment">\r\n	            <i class="ace-icon fa fa-times-circle"></i>关闭\r\n	        </button>\r\n	        <button class="btn btn-xs btn-primary T-option T-save-payment marginLeft-30">\r\n	            <i class="ace-icon fa fa-check-circle"></i>保存\r\n	        </button>\r\n	    </div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});