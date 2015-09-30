/*TMODJS:{"debug":true,"version":53,"md5":"af24aedb6c407b8d7862e33cf9979a08"}*/
define(function(require) {
    return require("../../../template")("resource/ticket/view/view", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, ticket = $data.ticket, $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal ticketMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">票务公司名称:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 6, $out += $escape(ticket.name), $out += '</label> </div> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-3"> <label class="control-label"> ', 
            $line = 11, 0 == ticket.status ? ($out += " 已停用 ", $line = 13) : ($out += " 已启用 ", 
            $line = 15), $out += ' </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">联系人:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 22, $out += $escape(ticket.managerName), $out += '</label> </div> <label class="col-sm-2 control-label no-padding-right">联系电话:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 26, $out += $escape(ticket.mobileNumber), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 32, $out += $escape(ticket.telNumber), $out += '</label> </div> <label class="col-sm-2 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 36, $out += $escape(ticket.faxNumber), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">票务公司所在省市:</label> <div class="col-sm-8"> <label class="control-label"> ', 
            $line = 43, null != ticket.province && ($out += " ", $line = 44, $out += $escape(ticket.province.name), 
            $out += " ", $line = 45), $out += " ", $line = 46, null != ticket.city && ($out += " -", 
            $line = 47, $out += $escape(ticket.city.name), $out += " ", $line = 48), $out += " ", 
            $line = 49, null != ticket.district && ($out += " -", $line = 50, $out += $escape(ticket.district.name), 
            $out += " ", $line = 51), $out += ' </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <label class="control-label">', 
            $line = 58, $out += $escape(ticket.street), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">简介:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 64, $out += $escape(ticket.remark), $out += "</label> </div> </div> </form> </div> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal ticketMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">票务公司名称:</label>\r\n			<div class="col-sm-3">\r\n				<label class="control-label">{{ticket.name}}</label>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">是否启用:</label>\r\n			<div class="col-sm-3">\r\n				<label class="control-label">\r\n					{{if ticket.status == 0}}\r\n						已停用\r\n					{{else}}\r\n						已启用\r\n					{{/if}}\r\n				</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">联系人:</label>\r\n			<div class="col-sm-3">\r\n				<label class="control-label">{{ticket.managerName}}</label>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">联系电话:</label>\r\n			<div class="col-sm-3">\r\n				<label class="control-label">{{ticket.mobileNumber}}</label>\r\n			</div>\r\n		</div> \r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n			<div class="col-sm-3">\r\n				<label class="control-label">{{ticket.telNumber}}</label>\r\n			</div>\r\n			<label class="col-sm-2 control-label no-padding-right">传真号码:</label> \r\n			<div class="col-sm-3">\r\n					<label class="control-label">{{ticket.faxNumber}}</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">票务公司所在省市:</label>\r\n			<div class="col-sm-8">\r\n				<label class="control-label">\r\n					{{if ticket.province != null}} \r\n						{{ticket.province.name}}\r\n					{{/if}}\r\n					{{if ticket.city != null}}\r\n						-{{ticket.city.name}}\r\n					{{/if}}\r\n					{{if ticket.district != null}}\r\n						-{{ticket.district.name}}\r\n					{{/if}}\r\n				</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n			<div class="col-sm-6">\r\n					<label class="control-label">{{ticket.street}}</label>\r\n			</div>\r\n		</div>\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">简介:</label>\r\n			<div class="col-sm-8">\r\n				<label class="control-label">{{ticket.remark}}</label>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});