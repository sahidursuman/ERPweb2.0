/*TMODJS:{"debug":true,"version":434,"md5":"0559fb7d5c5976aaf5ebb194acfed8fa"}*/
define(function(require) {
    return require("../../../template")("system/companyInfo/view/info", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, name = $data.name, type = $data.type, contacts = $data.contacts, contactNumber = $data.contactNumber, telephoneNumber = $data.telephoneNumber, faxNumber = $data.faxNumber, businessDetail = $data.businessDetail, lineDetail = $data.lineDetail, companyLogo = $data.companyLogo, companySeal = $data.companySeal, financialSeal = $data.financialSeal, $out = "";
            return $out += '<div class="row col-sm-12"> <form class="form-horizontal T-form" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-sm-6"> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">旅行社名称：</label> <label class="col-sm-6" style="padding-top:2px;">', 
            $line = 7, $out += $escape(name), $out += '</label> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">旅行社类型：</label> <div class="col-sm-6 radio"> <label> <input name="type" type="radio" value="0" ', 
            $line = 13, 0 == type && ($out += "checked", $line = 13), $out += ' class="ace" /> <span class="lbl">国际社</span> </label> <label style="margin-left:100px;"> <input name="type" type="radio" value="1" ', 
            $line = 17, 1 == type && ($out += "checked", $line = 17), $out += ' class="ace" /> <span class="lbl">国内社</span> </label> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">所在地区：</label> <div class="col-sm-9"> <select name="provinceId" style="margin-right:3px;height:30px !important;"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px;height:30px !important;"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" style="height:30px !important;"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">联系人：</label> <div class="col-sm-6"> <input type="text" name="contacts" value="', 
            $line = 39, $out += $escape(contacts), $out += '" class="col-sm-12" style="height:30px !important;" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">联系电话：</label> <div class="col-sm-6"> <input type="text" name="contactNumber" value="', 
            $line = 45, $out += $escape(contactNumber), $out += '" class="col-sm-12" style="height:30px !important;" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">座机电话：</label> <div class="col-sm-6"> <input type="text" name="telephoneNumber" value="', 
            $line = 51, $out += $escape(telephoneNumber), $out += '" class="col-sm-12" style="height:30px !important;" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">传真电话：</label> <div class="col-sm-6"> <input type="text" name="faxNumber" value="', 
            $line = 57, $out += $escape(faxNumber), $out += '" class="col-sm-12" style="height:30px !important;" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">专注业务：</label> <div class="col-sm-6"> <input type="text" name="businessDetail" value="', 
            $line = 63, $out += $escape(businessDetail), $out += '" class="col-sm-12" style="height:30px !important;" /> </div> </div> <div class="form-group"> <label class="col-sm-3 control-label no-padding-right">专注线路：</label> <div class="col-sm-6"> <input type="text" name="lineDetail" value="', 
            $line = 69, $out += $escape(lineDetail), $out += '" class="col-sm-12" style="height:30px !important;" /> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-company"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-save-company" style="margin-left:60px;"> <i class="ace-icon fa fa-check-circle"></i>保存 </button> </div> </form> </div> <div class="col-sm-3"> <div class="form-group T-imgContainer" data-id="companyLogo"> <label class="col-sm-4 control-label no-padding-right">公司LOGO：</label> <label class="col-sm-8 ace-file-input" style="height:170px;"> <input type="file" name="companyLogo" id="companyLogo" class="T-upimg" /> ', 
            $line = 88, null != companyLogo && "" != companyLogo && ($out += ' <div class="T-original" style="position:relative;top:0;z-index:99;margin-top:-123px;text-align:center;"> <img class="middle" src="', 
            $line = 90, $out += $escape(companyLogo), $out += '" style="max-height:120px;max-width:185px;" /> </div> ', 
            $line = 92), $out += ' </label> </div> <div class="form-group T-imgContainer" data-id="companySeal"> <label class="col-sm-4 control-label no-padding-right">公司业务章：</label> <label class="col-sm-8 ace-file-input" style="height:170px;"> <input type="file" class="T-upimg" name="companySeal" id="companySeal" /> ', 
            $line = 99, null != companySeal && "" != companySeal && ($out += ' <div class="T-original" style="position:relative;top:0;z-index:99;margin-top:-123px;text-align:center;"> <img class="middle" src="', 
            $line = 101, $out += $escape(companySeal), $out += '" style="max-height:120px;max-width:185px;" /> </div> ', 
            $line = 103), $out += ' </label> </div> <div class="form-group T-imgContainer" data-id="financialSeal"> <label class="col-sm-4 control-label no-padding-right">公司财务章：</label> <label class="col-sm-8 ace-file-input" style="height:170px;"> <input type="file" class="T-upimg" name="financialSeal" id="financialSeal" /> ', 
            $line = 110, null != financialSeal && "" != financialSeal && ($out += ' <div class="T-original" style="position:relative;top:0;z-index:99;margin-top:-123px;text-align:center;"> <img class="middle" src="', 
            $line = 112, $out += $escape(financialSeal), $out += '" style="max-height:120px;max-width:185px;" /> </div> ', 
            $line = 114), $out += " </label> </div> </div> </div> </form> </div> ", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-sm-12">\r\n	<form class="form-horizontal T-form" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-sm-6">\r\n				<div class="form-group">\r\n					<label class="col-sm-3 control-label no-padding-right">旅行社名称：</label>\r\n					<label class="col-sm-6" style="padding-top:2px;">{{name}}</label>\r\n				</div>\r\n				<div class="form-group">\r\n					<label class="col-sm-3 control-label no-padding-right">旅行社类型：</label>\r\n					<div class="col-sm-6 radio">\r\n						<label>\r\n							<input name="type" type="radio" value="0" {{if type == 0}}checked{{/if}} class="ace" />\r\n							<span class="lbl">国际社</span>\r\n						</label>\r\n						<label style="margin-left:100px;">\r\n							<input name="type" type="radio" value="1" {{if type == 1}}checked{{/if}} class="ace" />\r\n							<span class="lbl">国内社</span>\r\n						</label>\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<label class="col-sm-3 control-label no-padding-right">所在地区：</label>\r\n					<div class="col-sm-9">\r\n						<select name="provinceId" style="margin-right:3px;height:30px !important;">\r\n							<option selected="selected" value="">未选择</option>\r\n						</select>\r\n						<select name="cityId" style="margin-right:3px;height:30px !important;">\r\n							<option selected="selected" value="">未选择</option>\r\n						</select>\r\n						<select name="districtId" style="height:30px !important;">\r\n							<option selected="selected" value="">未选择</option>\r\n						</select>\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<label class="col-sm-3 control-label no-padding-right">联系人：</label>\r\n					<div class="col-sm-6">\r\n						<input type="text" name="contacts" value="{{contacts}}" class="col-sm-12" style="height:30px !important;" />\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<label class="col-sm-3 control-label no-padding-right">联系电话：</label>\r\n					<div class="col-sm-6">\r\n						<input type="text" name="contactNumber" value="{{contactNumber}}" class="col-sm-12" style="height:30px !important;" />\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<label class="col-sm-3 control-label no-padding-right">座机电话：</label>\r\n					<div class="col-sm-6">\r\n						<input type="text" name="telephoneNumber" value="{{telephoneNumber}}" class="col-sm-12" style="height:30px !important;" />\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<label class="col-sm-3 control-label no-padding-right">传真电话：</label>\r\n					<div class="col-sm-6">\r\n						<input type="text" name="faxNumber" value="{{faxNumber}}" class="col-sm-12" style="height:30px !important;" />\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<label class="col-sm-3 control-label no-padding-right">专注业务：</label>\r\n					<div class="col-sm-6">\r\n						<input type="text" name="businessDetail" value="{{businessDetail}}" class="col-sm-12" style="height:30px !important;" />\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<label class="col-sm-3 control-label no-padding-right">专注线路：</label>\r\n					<div class="col-sm-6">\r\n						<input type="text" name="lineDetail" value="{{lineDetail}}" class="col-sm-12" style="height:30px !important;" />\r\n					</div>\r\n				</div>\r\n				<form class="form-horizontal" role="form" onsubmit="return false">\r\n			        <div class="form-group" style="text-align: center;">\r\n			            <button class="btn btn-xs btn-primary T-close-company">\r\n			                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n			            </button>\r\n			            <button class="btn btn-xs btn-primary T-save-company" style="margin-left:60px;">\r\n			                <i class="ace-icon fa fa-check-circle"></i>保存\r\n			            </button>\r\n			        </div>\r\n			    </form>\r\n			</div>\r\n			<div class="col-sm-3">\r\n				<div class="form-group T-imgContainer" data-id="companyLogo">\r\n					<label class="col-sm-4 control-label no-padding-right">公司LOGO：</label>\r\n					<label class="col-sm-8 ace-file-input" style="height:170px;">\r\n						<input type="file" name="companyLogo" id="companyLogo" class="T-upimg" />\r\n						{{if companyLogo != null && companyLogo != ""}}\r\n							<div class="T-original" style="position:relative;top:0;z-index:99;margin-top:-123px;text-align:center;">\r\n								<img class="middle" src="{{companyLogo}}" style="max-height:120px;max-width:185px;" />\r\n							</div>\r\n						{{/if}}\r\n					</label>\r\n				</div>\r\n				<div class="form-group T-imgContainer" data-id="companySeal">\r\n					<label class="col-sm-4 control-label no-padding-right">公司业务章：</label>\r\n					<label class="col-sm-8 ace-file-input" style="height:170px;">\r\n						<input type="file" class="T-upimg" name="companySeal" id="companySeal" />\r\n						{{if companySeal != null && companySeal != ""}}\r\n							<div class="T-original" style="position:relative;top:0;z-index:99;margin-top:-123px;text-align:center;">\r\n								<img class="middle" src="{{companySeal}}" style="max-height:120px;max-width:185px;" />\r\n							</div>\r\n						{{/if}}\r\n					</label>\r\n				</div>\r\n				<div class="form-group T-imgContainer" data-id="financialSeal">\r\n					<label class="col-sm-4 control-label no-padding-right">公司财务章：</label>\r\n					<label class="col-sm-8 ace-file-input" style="height:170px;">\r\n						<input type="file" class="T-upimg" name="financialSeal" id="financialSeal" />\r\n						{{if financialSeal != null && financialSeal != ""}}\r\n							<div class="T-original" style="position:relative;top:0;z-index:99;margin-top:-123px;text-align:center;">\r\n								<img class="middle" src="{{financialSeal}}" style="max-height:120px;max-width:185px;" />\r\n							</div>\r\n						{{/if}}\r\n					</label>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});