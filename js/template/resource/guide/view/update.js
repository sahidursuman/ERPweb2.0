/*TMODJS:{"debug":true,"version":65,"md5":"c3af0eec0c74ba679ea1e632c67e6080"}*/
define(function(require) {
    return require("../../../template")("resource/guide/view/update", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, guide = $data.guide, $out = "";
            return $out += '<div class="col-xs-12 updateGuideContainer guideAdd"> <form class="form-horizontal guideMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>姓名:</label> <div class="col-sm-3"> <input type="text" name="realname" class="col-sm-12" value=', 
            $line = 6, $out += $escape(guide.realname), $out += ' maxlength="32"/> </div> <label class="col-sm-2 control-label no-padding-right">性别:</label> <div class="col-sm-3"> <select name="gender" class="col-sm-12"> <option value="0" ', 
            $line = 11, 0 == guide.gender && ($out += 'selected="selected"', $line = 11), $out += '>男</option> <option value="1" ', 
            $line = 12, 1 == guide.gender && ($out += 'selected="selected"', $line = 12), $out += '>女</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" value="', 
            $line = 19, $out += $escape(guide.mobileNumber), $out += '" maxlength="11" /> </div> <label class="col-sm-2 control-label no-padding-right">所属公司:</label> <div class="col-sm-3"> <input type="text" name="company" class="col-sm-12" value="', 
            $line = 23, $out += $escape(guide.company), $out += '" maxlength="200" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>导游证编号:</label> <div class="col-sm-3"> <input type="text" name="guideCardNumber" class="col-sm-12" value="', 
            $line = 29, $out += $escape(guide.guideCardNumber), $out += '" maxlength="32" /> </div> <label class="col-sm-2 control-label no-padding-right">身份证:</label> <div class="col-sm-3"> <input type="text" name="idCardNumber" class="col-sm-12" value="', 
            $line = 33, $out += $escape(guide.idCardNumber), $out += '" maxlength="11" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">等级:</label> <div class="col-sm-3"> <select name="guideLevel" class="col-sm-12"> <option value="1" ', 
            $line = 40, 1 == guide.guideLevel && ($out += 'selected="selected"', $line = 40), 
            $out += '>初级导游</option> <option value="2" ', $line = 41, 2 == guide.guideLevel && ($out += 'selected="selected"', 
            $line = 41), $out += '>中级导游</option> <option value="3" ', $line = 42, 3 == guide.guideLevel && ($out += 'selected="selected"', 
            $line = 42), $out += '>高级导游</option> <option value="4" ', $line = 43, 4 == guide.guideLevel && ($out += 'selected="selected"', 
            $line = 43), $out += '>特级导游</option> </select> </div> <label class="col-sm-2 control-label no-padding-right">学历:</label> <div class="col-sm-3"> <select name="guideEducation" class="col-sm-12"> <option value="1" ', 
            $line = 49, 1 == guide.guideEducation && ($out += 'selected="selected"', $line = 49), 
            $out += '>小学</option> <option value="2" ', $line = 50, 2 == guide.guideEducation && ($out += 'selected="selected"', 
            $line = 50), $out += '>初中</option> <option value="3" ', $line = 51, 3 == guide.guideEducation && ($out += 'selected="selected"', 
            $line = 51), $out += '>高中</option> <option value="4" ', $line = 52, 4 == guide.guideEducation && ($out += 'selected="selected"', 
            $line = 52), $out += '>中专</option> <option value="5" ', $line = 53, 5 == guide.guideEducation && ($out += 'selected="selected"', 
            $line = 53), $out += '>大专</option> <option value="6" ', $line = 54, 6 == guide.guideEducation && ($out += 'selected="selected"', 
            $line = 54), $out += '>本科</option> <option value="7" ', $line = 55, 7 == guide.guideEducation && ($out += 'selected="selected"', 
            $line = 55), $out += ' >研究生</option> <option value="8" ', $line = 56, 8 == guide.guideEducation && ($out += 'selected="selected"', 
            $line = 56), $out += '>硕士</option> <option value="9" ', $line = 57, 9 == guide.guideEducation && ($out += 'selected="selected"', 
            $line = 57), $out += '>博士</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">加入时间:</label> <div class="col-sm-3"> <div class="input-group"> <input type="text" name="joinTime" class="col-sm-12 date-picker" value="', 
            $line = 65, $out += $escape($helpers.dateFormat(guide.joinTime, "yyyy-MM-dd")), 
            $out += '" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input ', 
            $line = 74, 1 == guide.status && ($out += 'checked="checked"', $line = 74), $out += ' type="checkbox" class="ace guide-status" value="1" /> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12">', 
            $line = 84, $out += $escape(guide.remark), $out += '</textarea> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-guide guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 updateGuideContainer guideAdd">\r\n	<form class="form-horizontal guideMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>姓名:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="realname" class="col-sm-12" value={{guide.realname}}  maxlength="32"/>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">性别:</label>\r\n			<div class="col-sm-3">\r\n				<select name="gender" class="col-sm-12">\r\n					<option value="0" {{if guide.gender == 0}}selected="selected"{{/if}}>男</option>\r\n					<option value="1" {{if guide.gender == 1}}selected="selected"{{/if}}>女</option>\r\n				</select>\r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>电话:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="mobileNumber" class="col-sm-12" value="{{guide.mobileNumber}}"  maxlength="11" />\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">所属公司:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="company" class="col-sm-12" value="{{guide.company}}" maxlength="200" />\r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>导游证编号:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="guideCardNumber" class="col-sm-12" value="{{guide.guideCardNumber}}" maxlength="32" />\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">身份证:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="idCardNumber" class="col-sm-12" value="{{guide.idCardNumber}}" maxlength="11" />  \r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right">等级:</label>\r\n			<div class="col-sm-3">\r\n				<select name="guideLevel" class="col-sm-12">\r\n					<option value="1" {{if guide.guideLevel == 1}}selected="selected"{{/if}}>初级导游</option>\r\n					<option value="2" {{if guide.guideLevel == 2}}selected="selected"{{/if}}>中级导游</option>\r\n					<option value="3" {{if guide.guideLevel == 3}}selected="selected"{{/if}}>高级导游</option>\r\n					<option value="4" {{if guide.guideLevel == 4}}selected="selected"{{/if}}>特级导游</option>\r\n				</select>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">学历:</label>\r\n			<div class="col-sm-3">\r\n				<select name="guideEducation" class="col-sm-12">\r\n					<option value="1" {{if guide.guideEducation == 1}}selected="selected"{{/if}}>小学</option>\r\n					<option value="2" {{if guide.guideEducation == 2}}selected="selected"{{/if}}>初中</option>\r\n					<option value="3" {{if guide.guideEducation == 3}}selected="selected"{{/if}}>高中</option>\r\n					<option value="4" {{if guide.guideEducation == 4}}selected="selected"{{/if}}>中专</option>\r\n					<option value="5" {{if guide.guideEducation == 5}}selected="selected"{{/if}}>大专</option>\r\n					<option value="6" {{if guide.guideEducation == 6}}selected="selected"{{/if}}>本科</option>\r\n					<option value="7" {{if guide.guideEducation == 7}}selected="selected"{{/if}} >研究生</option>\r\n					<option value="8" {{if guide.guideEducation == 8}}selected="selected"{{/if}}>硕士</option>\r\n					<option value="9" {{if guide.guideEducation == 9}}selected="selected"{{/if}}>博士</option>\r\n				</select>\r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right">加入时间:</label>\r\n			<div class="col-sm-3">\r\n				<div class="input-group">\r\n					<input type="text" name="joinTime" class="col-sm-12 date-picker" value="{{guide.joinTime | dateFormat:\'yyyy-MM-dd\'}}" />\r\n					<span class="input-group-addon">\r\n						<i class="fa fa-calendar"></i>\r\n					</span>\r\n				</div>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">是否启用:</label>\r\n			<div class="col-sm-2 checkbox" style="margin-left:-10px">\r\n				<label>\r\n					<input {{if guide.status == 1}}checked="checked"{{/if}} type="checkbox" class="ace guide-status" value="1" />\r\n					<span class="lbl">\r\n						启用\r\n					</span>\r\n				</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right">简介:</label>\r\n			<div class="col-sm-8">\r\n				<textarea class="form-control" name="remark" class="col-sm-12">{{guide.remark}}</textarea>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-guide guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});