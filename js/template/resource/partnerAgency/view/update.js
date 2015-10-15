/*TMODJS:{"debug":true,"version":108,"md5":"93b9990dace44ff4dcf9dc552dea7983"}*/
define(function(require) {
    return require("../../../template")("resource/partnerAgency/view/update", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, partnerAgencyJson = $data.partnerAgencyJson, $each = $utils.$each, $out = ($data.contact, 
            $data.$index, "");
            return $out += '<div class="col-xs-12 updatePartnerAgencyContainer"> <form class="form-horizontal partnerAgencyMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">同行旅行社主体信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <input name="id" type="hidden" value="', 
            $line = 10, $out += $escape(partnerAgencyJson.id), $out += '"/> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>同行名称:</label> <div class="col-sm-3"> <input type="text" name="travelAgencyName" value=', 
            $line = 14, $out += $escape(partnerAgencyJson.travelAgencyName), $out += ' class="col-sm-12" maxlength="100"/> </div> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>类型:</label> <div class="col-sm-3"> <select name="type" class="col-sm-12"> <option value="1" ', 
            $line = 19, 0 == partnerAgencyJson.type && ($out += 'selected="selected"', $line = 19), 
            $out += '>组团社</option> <option value="0" ', $line = 20, 1 == partnerAgencyJson.type && ($out += 'selected="selected"', 
            $line = 20), $out += '>地接社</option> <option value="2" ', $line = 21, 2 == partnerAgencyJson.type && ($out += 'selected="selected"', 
            $line = 21), $out += '>组团社和地接社</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" value="', 
            $line = 28, $out += $escape(partnerAgencyJson.telNumber), $out += '" class="col-sm-12" maxlength="20"/> </div> <label class="col-sm-2 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" value="', 
            $line = 32, $out += $escape(partnerAgencyJson.faxNumber), $out += '" class="col-sm-12" maxlength="20"/> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">等级:</label> <div class="col-sm-3"> <select name="level" class="col-sm-12"> <option value="1" ', 
            $line = 39, 1 == partnerAgencyJson.level && ($out += 'selected="selected"', $line = 39), 
            $out += '>金牌</option> <option value="2" ', $line = 40, 2 == partnerAgencyJson.level && ($out += 'selected="selected"', 
            $line = 40), $out += '>银牌</option> <option value="3" ', $line = 41, 3 == partnerAgencyJson.level && ($out += 'selected="selected"', 
            $line = 41), $out += '>铜牌</option> </select> </div> <label class="col-sm-2 control-label no-padding-right">总社:</label> <div class="col-sm-3"> <div class="input-group addHeaderGroup">  <select class="col-sm-12" name="headPartnerAgency"> </select> <input type="hidden" name="headerAgencyName" maxlength="100"/> <span class="input-group-addon addheaderPartnerAgency" style="cursor:pointer;" title="添加总社"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">所在地区:</label> <div class="col-sm-8"> <select name="provinceId" class="col-sm-3" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" class="col-sm-3" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" class="col-sm-3"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" value="', 
            $line = 74, $out += $escape(partnerAgencyJson.street), $out += '" class="col-sm-12" placeholder="请输入街道地址" maxlength="100"/> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input ', 
            $line = 81, 1 == partnerAgencyJson.status && ($out += ' checked="checked" ', $line = 81), 
            $out += ' type="checkbox" class="ace partnerAgency-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" >', 
            $line = 91, $out += $escape(partnerAgencyJson.remark), $out += '</textarea> </div> </div> </div> </div> </div> <div class="space-10"></div> <div class=" ui-sortable-handle contactList"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">联系人列表</label> <a href="javascript:void(0)" class="btn-contact-add"> <button class="btn btn-sm btn-success btn-partnerAgency-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border"> <span class="necessary">*</span>联系人姓名</th> <th class="th-border"> <span class="necessary">*</span>联系人电话</th> <th class="th-border"> <span class="necessary">*</span>所属部门</th> <th class="th-border"> <span class="necessary">*</span>所属职位</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 122, $each(partnerAgencyJson.partnerAgencyContactList, function(contact) {
                $out += ' <tr data-entity-id="', $line = 123, $out += $escape(contact.id), $out += '"> <td><input class="col-sm-12" type="text" name="contactRealname" value="', 
                $line = 124, $out += $escape(contact.contactRealname), $out += '" maxlength="32"/></td> <td><input class="col-sm-12" type="text" name="contactMobileNumber" value="', 
                $line = 125, $out += $escape(contact.contactMobileNumber), $out += '" maxlength="20"/></td> <td><input class="col-sm-12" type="text" name="departmentName" value="', 
                $line = 126, $out += $escape(contact.departmentName), $out += '" maxlength="45"/></td> <td><input class="col-sm-12" type="text" name="dutyName" value="', 
                $line = 127, $out += $escape(contact.dutyName), $out += '" maxlength="45"/></td> <td><a data-entity-id="', 
                $line = 128, $out += $escape(contact.id), $out += '" class="cursor btn-contact-delete needConfirm">删除</a></td> </tr> ', 
                $line = 130;
            }), $out += ' </tbody> </table> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-partnerAgency"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 updatePartnerAgencyContainer">\r\n	<form class="form-horizontal partnerAgencyMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="middle title-size">同行旅行社主体信息</label>\r\n				</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<input name="id" type="hidden" value="{{partnerAgencyJson.id}}"/>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>同行名称:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="travelAgencyName" value={{partnerAgencyJson.travelAgencyName}} class="col-sm-12" maxlength="100"/>\r\n						</div>\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>类型:</label> \r\n						<div class="col-sm-3">\r\n							<select name="type" class="col-sm-12">\r\n								<option value="1" {{if partnerAgencyJson.type == 0}}selected="selected"{{/if}}>组团社</option>\r\n								<option value="0" {{if partnerAgencyJson.type == 1}}selected="selected"{{/if}}>地接社</option>\r\n								<option value="2" {{if partnerAgencyJson.type == 2}}selected="selected"{{/if}}>组团社和地接社</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="telNumber" value="{{partnerAgencyJson.telNumber}}" class="col-sm-12" maxlength="20"/>\r\n						</div>\r\n						<label class="col-sm-2 control-label no-padding-right">传真号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="faxNumber" value="{{partnerAgencyJson.faxNumber}}" class="col-sm-12" maxlength="20"/>\r\n						</div>\r\n					</div>  \r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">等级:</label>\r\n						<div class="col-sm-3">\r\n							<select name="level" class="col-sm-12">\r\n								<option value="1" {{if partnerAgencyJson.level == 1}}selected="selected"{{/if}}>金牌</option>\r\n								<option value="2" {{if partnerAgencyJson.level == 2}}selected="selected"{{/if}}>银牌</option>\r\n								<option value="3" {{if partnerAgencyJson.level == 3}}selected="selected"{{/if}}>铜牌</option>\r\n							</select>\r\n						</div>\r\n						<label class="col-sm-2 control-label no-padding-right">总社:</label>\r\n						<div class="col-sm-3">\r\n							<div class="input-group addHeaderGroup">\r\n								<!-- <input class="choosePartnerManager col-sm-12" name="partnerAgencyNameList" type="text" /> -->\r\n								<select class="col-sm-12" name="headPartnerAgency">\r\n								</select>\r\n								<input type="hidden" name="headerAgencyName" maxlength="100"/>\r\n								<span class="input-group-addon addheaderPartnerAgency" style="cursor:pointer;" title="添加总社">\r\n									<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n								</span>\r\n							</div>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">所在地区:</label>\r\n						<div class="col-sm-8">\r\n							<select name="provinceId" class="col-sm-3" style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="cityId" class="col-sm-3"  style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>  \r\n							</select>\r\n							<select name="districtId" class="col-sm-3">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n						<div class="col-sm-6">\r\n							<input type="text" name="street" value="{{partnerAgencyJson.street}}" class="col-sm-12" placeholder="请输入街道地址" maxlength="100"/>\r\n						</div>										  \r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">是否启用:</label>\r\n						<div class="col-sm-2 checkbox" style="margin-left:-10px">\r\n							<label>\r\n								<input {{if partnerAgencyJson.status == 1}} checked="checked" {{/if}} type="checkbox" class="ace partnerAgency-status" value="1">\r\n								<span class="lbl">\r\n									启用\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">简介:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="remark" class="col-sm-12" >{{partnerAgencyJson.remark}}</textarea>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<div class=" ui-sortable-handle contactList">\r\n				<h5 class="">\r\n					<span class="badge badge-primary">2</span>\r\n					<label class="middle title-size">联系人列表</label>\r\n					<a href="javascript:void(0)" class="btn-contact-add">\r\n						<button class="btn btn-sm btn-success btn-partnerAgency-add" style="margin-left: 20px">\r\n							<i class="ace-icon fa fa-plus"></i>\r\n							新增\r\n						</button>\r\n					</a>\r\n				</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<table class="table table-striped table-bordered table-hover">\r\n						<thead>\r\n							<tr>\r\n								<th class="th-border"> <span class="necessary">*</span>联系人姓名</th>\r\n								<th class="th-border"> <span class="necessary">*</span>联系人电话</th>\r\n								<th class="th-border"> <span class="necessary">*</span>所属部门</th>\r\n								<th class="th-border"> <span class="necessary">*</span>所属职位</th>\r\n								<th class="th-border">操作</th>\r\n							</tr>\r\n						</thead>\r\n						<tbody>\r\n							{{each partnerAgencyJson.partnerAgencyContactList as contact}}\r\n								<tr data-entity-id="{{contact.id}}">\r\n									<td><input class="col-sm-12" type="text" name="contactRealname" value="{{contact.contactRealname}}" maxlength="32"/></td>\r\n									<td><input class="col-sm-12" type="text" name="contactMobileNumber" value="{{contact.contactMobileNumber}}" maxlength="20"/></td>\r\n									<td><input class="col-sm-12" type="text" name="departmentName" value="{{contact.departmentName}}" maxlength="45"/></td>\r\n									<td><input class="col-sm-12" type="text" name="dutyName" value="{{contact.dutyName}}" maxlength="45"/></td>\r\n									<td><a data-entity-id="{{contact.id}}" class="cursor btn-contact-delete needConfirm">删除</a></td>\r\n								</tr>\r\n							{{/each}}\r\n						</tbody>\r\n					</table>\r\n				</div>\r\n			</div>  \r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-partnerAgency">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});