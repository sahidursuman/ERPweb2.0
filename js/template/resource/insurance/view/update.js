/*TMODJS:{"debug":true,"version":57,"md5":"f50ad5087d5097c1fd9964dbcde153d1"}*/
define(function(require) {
    return require("../../../template")("resource/insurance/view/update", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, insurance = $data.insurance, $out = "";
            return $out += '<div class="col-xs-12 updateInsuranceContainer guideAdd"> <form class="form-horizontal insuranceMainForm insuranceWidth" role="form" style="margin-top:10px" onsubmit="return false"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-info-circle"></i> 保险主体信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>公司名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" value="', 
            $line = 15, $out += $escape(insurance.name), $out += '" maxlength="50"> <input type="text" name="id" hidden="hidden" value="', 
            $line = 16, $out += $escape(insurance.id), $out += '"> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label> <div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px"> <label> <input ', 
            $line = 21, 1 == insurance.status && ($out += 'checked="checked"', $line = 21), 
            $out += ' type="checkbox" class="ace insurance-status" value="1" /> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" value="', 
            $line = 31, $out += $escape(insurance.managerName), $out += '" maxlength="32"> </div> <label class="col-sm-2 control-label no-padding-right">联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" value="', 
            $line = 35, $out += $escape(insurance.mobileNumber), $out += '" maxlength="11"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" value="', 
            $line = 41, $out += $escape(insurance.telNumber), $out += '" maxlength="20" /> </div> <label class="col-sm-2 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" value="', 
            $line = 45, $out += $escape(insurance.faxNumber), $out += '" maxlength="20" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">公司所在省市:</label> <div class="col-sm-8"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" > <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12" placeholder="请输入街道地址" value="', 
            $line = 65, $out += $escape(insurance.street), $out += '" maxlength="100" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">保险公司简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="100">', 
            $line = 71, $out += $escape(insurance.remark), $out += '</textarea> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-insurance guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 updateInsuranceContainer guideAdd">\r\n		<form class="form-horizontal insuranceMainForm insuranceWidth" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="widget-box ui-sortable-handle">\r\n			<div class="widget-header">\r\n				<h5 class="widget-title">\r\n					<i class="ace-icon fa fa-info-circle"></i>\r\n					保险主体信息\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>公司名称:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="name" class="col-sm-12" value="{{insurance.name}}" maxlength="50">\r\n							<input type="text" name="id" hidden="hidden" value="{{insurance.id}}">\r\n						</div>\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label>\r\n						<div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px">\r\n							<label>\r\n								<input {{if insurance.status == 1}}checked="checked"{{/if}} type="checkbox" class="ace insurance-status" value="1" />\r\n								<span class="lbl">\r\n									启用\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n					    <label class="col-sm-2 control-label no-padding-right">联系人:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="managerName" class="col-sm-12" value="{{insurance.managerName}}" maxlength="32">\r\n						</div>\r\n						<label class="col-sm-2 control-label no-padding-right">联系电话:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="mobileNumber" class="col-sm-12" value="{{insurance.mobileNumber}}" maxlength="11">\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="telNumber" class="col-sm-12" value="{{insurance.telNumber}}" maxlength="20" />\r\n						</div>\r\n						<label class="col-sm-2 control-label no-padding-right">传真号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="faxNumber" class="col-sm-12" value="{{insurance.faxNumber}}"  maxlength="20" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">公司所在省市:</label>\r\n						<div class="col-sm-8">\r\n							<select name="provinceId" style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="cityId" style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="districtId" >\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n						<div class="col-sm-6">\r\n							<input type="text" name="street" class="col-sm-12" placeholder="请输入街道地址" value="{{insurance.street}}"  maxlength="100" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">保险公司简介:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="remark" class="col-sm-12" maxlength="100">{{insurance.remark}}</textarea>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-insurance guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});