/*TMODJS:{"debug":true,"version":30,"md5":"0c3f6238c2e06cb536d166854e6cc014"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroupN/view/guestInfo", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, adultCount = $data.adultCount, childCount = $data.childCount, touristGroupMemberJsonAdd = $data.touristGroupMemberJsonAdd, $each = $utils.$each, $string = ($data.rs, 
            $data.$index, $utils.$string), $out = "";
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12 mar-t-20"> <div class="pull-left"> <span class="necessary">*</span>人数：大人 <span class="necessary">*</span> <input type="text" class="w-50" name="adultCount" value="', 
            $line = 5, $out += $escape(adultCount), $out += '"> 小孩 <input type="text" class="w-50" name="childCount" value="', 
            $line = 6, $out += $escape(childCount), $out += '"> </div> <div class="pull-right"> <button class="btn btn-sm btn-success T-add-tourist"> <i class="ace-icon fa fa-plus"></i> 添加成员 </button> <button class="btn btn-sm btn-success T-add-tourist-more"> <i class="ace-icon fa fa-plus"></i> 批量添加 </button> </div> </div> <div class="col-xs-12 mar-t-10"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>序号</th> <th>姓名</th> <th>手机号码</th> <th>证件类型</th> <th>证件号</th> <th>设为联系人</th> <th>操作</th> </tr> </thead> <tbody class="T-addTouristTbody"> ', 
            $line = 27, touristGroupMemberJsonAdd && touristGroupMemberJsonAdd.length > 0 && ($out += " ", 
            $line = 28, $each(touristGroupMemberJsonAdd, function(rs) {
                $out += ' <tr> <td>1</td> <td><input type="text" class="col-xs-12" name="name" value="', 
                $line = 31, $out += $escape(rs.name), $out += '"></td> <td><input type="text" class="col-xs-12" name="mobileNumber" value="', 
                $line = 32, $out += $escape(rs.mobileNumber), $out += '"></td> <td> <select class="col-xs-12" name="idCardType"> ', 
                $line = 35, $out += $string($helpers.getCardOption(rs.idCardType)), $out += ' </select> </td> <td><input type="text" class="col-xs-12" name="idCardNumber" value="', 
                $line = 38, $out += $escape(rs.idCardNumber), $out += '"></td> <td> <label> <input type="checkbox" name="isContactUser" class="ace"', 
                $line = 41, 1 == rs.isContactUser && ($out += " checked", $line = 41), $out += '> <span class="lbl"></span> </label> </td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', 
                $line = 47;
            }), $out += " ", $line = 48), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="pull-left">\r\n				<span class="necessary">*</span>人数：大人 <span class="necessary">*</span> <input type="text" class="w-50" name="adultCount" value="{{adultCount}}">\r\n				小孩 <input type="text" class="w-50" name="childCount" value="{{childCount}}">\r\n			</div>\r\n			<div class="pull-right">\r\n				<button class="btn btn-sm btn-success T-add-tourist"> <i class="ace-icon fa fa-plus"></i> 添加成员 </button>\r\n				<button class="btn btn-sm btn-success T-add-tourist-more"> <i class="ace-icon fa fa-plus"></i> 批量添加 </button>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>序号</th>\r\n						<th>姓名</th>\r\n						<th>手机号码</th>\r\n						<th>证件类型</th>\r\n						<th>证件号</th>\r\n						<th>设为联系人</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-addTouristTbody">\r\n				{{if !!touristGroupMemberJsonAdd && touristGroupMemberJsonAdd.length > 0}}\r\n					{{each touristGroupMemberJsonAdd as rs}}\r\n					<tr>\r\n						<td>1</td>\r\n						<td><input type="text" class="col-xs-12" name="name" value="{{rs.name}}"></td>\r\n						<td><input type="text" class="col-xs-12" name="mobileNumber" value="{{rs.mobileNumber}}"></td>\r\n						<td>\r\n							<select class="col-xs-12" name="idCardType">\r\n								{{#rs.idCardType | getCardOption}}\r\n							</select>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12" name="idCardNumber" value="{{rs.idCardNumber}}"></td>\r\n						<td>\r\n							<label>\r\n								<input type="checkbox" name="isContactUser" class="ace"{{if rs.isContactUser == 1}} checked{{/if}}>\r\n								<span class="lbl"></span>\r\n							</label>\r\n						</td>\r\n						<td><a class="cursor T-action T-delete">删除</a></td>\r\n					</tr>\r\n					{{/each}}\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});