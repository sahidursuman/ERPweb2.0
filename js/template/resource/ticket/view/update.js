/*TMODJS:{"debug":true,"version":61,"md5":"0c9ae857da95758dcc25d8815e8c9fcd"}*/
define(function(require) {
    return require("../../../template")("resource/ticket/view/update", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, ticket = $data.ticket, $out = "";
            return $out += '<div class="col-xs-12 updateTicketContainer guideAdd"> <form class="form-horizontal ticketMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <input type="hidden" name="id" value="', 
            $line = 3, $out += $escape(ticket.id), $out += '"/> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>票务公司名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" value="', 
            $line = 7, $out += $escape(ticket.name), $out += '" maxlength="32" /> </div> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px"> <label> <input ', 
            $line = 12, 1 == ticket.status && ($out += 'checked="checked"', $line = 12), $out += ' type="checkbox" class="ace ticket-status" value="1" /> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" value="', 
            $line = 22, $out += $escape(ticket.managerName), $out += '" maxlength="20" /> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" value="', 
            $line = 26, $out += $escape(ticket.mobileNumber), $out += '" maxlength="11" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" value="', 
            $line = 32, $out += $escape(ticket.telNumber), $out += '" maxlength="20" /> </div> <label class="col-sm-2 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" value="', 
            $line = 36, $out += $escape(ticket.faxNumber), $out += '" maxlength="20" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">票务所在省市:</label> <div class="col-sm-8"> <select name="provinceId"style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" value="', 
            $line = 56, $out += $escape(ticket.street), $out += '" class="col-sm-12" placeholder="请输入街道地址" maxlength="100" /> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="500" >', 
            $line = 62, $out += $escape(ticket.remark), $out += '</textarea> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-ticket guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 updateTicketContainer guideAdd">\r\n	<form class="form-horizontal ticketMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<input type="hidden" name="id" value="{{ticket.id}}"/>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>票务公司名称:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="name" class="col-sm-12" value="{{ticket.name}}" maxlength="32" />\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">是否启用:</label>\r\n			<div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px">\r\n				<label>\r\n					<input {{if ticket.status == 1}}checked="checked"{{/if}}  type="checkbox" class="ace ticket-status" value="1" />\r\n					<span class="lbl">\r\n						启用\r\n					</span>\r\n				</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="managerName" class="col-sm-12"  value="{{ticket.managerName}}" maxlength="20" />\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="mobileNumber" class="col-sm-12"  value="{{ticket.mobileNumber}}" maxlength="11" />\r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="telNumber" class="col-sm-12" value="{{ticket.telNumber}}" maxlength="20" />\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">传真号码:</label>\r\n			<div class="col-sm-3">\r\n				<input type="text" name="faxNumber" class="col-sm-12" value="{{ticket.faxNumber}}" maxlength="20" />\r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right">票务所在省市:</label>\r\n			<div class="col-sm-8">\r\n				<select name="provinceId"style="margin-right:3px">\r\n					<option selected="selected" value="">未选择</option>\r\n				</select>\r\n				<select name="cityId" style="margin-right:3px">\r\n					<option selected="selected" value="">未选择</option>\r\n				</select>\r\n				<select name="districtId">\r\n					<option selected="selected" value="">未选择</option>\r\n				</select>\r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n			<div class="col-sm-6">\r\n				<input type="text" name="street" value="{{ticket.street}}" class="col-sm-12" placeholder="请输入街道地址" maxlength="100" />\r\n			</div>\r\n		</div>\r\n		<div class="form-group guideInterval">\r\n			<label class="col-sm-2 control-label no-padding-right">简介:</label>\r\n			<div class="col-sm-8">\r\n				<textarea class="form-control" name="remark" class="col-sm-12"  maxlength="500" >{{ticket.remark}}</textarea>  \r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-ticket guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});