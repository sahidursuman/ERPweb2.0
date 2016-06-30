/*TMODJS:{"debug":true,"version":8,"md5":"7027229356d7ed99c56c1ef770485d28"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/tourists/view/viewGuestInfo", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, adultCount = $data.adultCount, childCount = $data.childCount, touristGroupMemberJsonDel = $data.touristGroupMemberJsonDel, touristGroupMemberJsonAdd = $data.touristGroupMemberJsonAdd, $each = $utils.$each, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12 mar-t-20"> <div class="pull-left"> 人数：大人 ', 
            $line = 5, $out += $escape(adultCount), $out += " 小孩 ", $line = 5, $out += $escape(childCount), 
            $out += ' </div> </div> <div class="col-xs-12 mar-t-10"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>序号</th> <th>姓名</th> <th>手机号码</th> <th>证件类型</th> <th>证件号</th> <th>设为联系人</th> <th>备注</th> </tr> </thead> <tbody class="T-addTouristTbody" data-del-json="', 
            $line = 21, $out += $escape(touristGroupMemberJsonDel), $out += '"> ', $line = 22, 
            touristGroupMemberJsonAdd && touristGroupMemberJsonAdd.length > 0 && ($out += " ", 
            $line = 23, $each(touristGroupMemberJsonAdd, function(rs, index) {
                $out += " <tr> <td>", $line = 25, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 26, $out += $escape(rs.name), $out += "</td> <td>", $line = 27, $out += $escape(rs.mobileNumber), 
                $out += "</td> <td>", $line = 28, $out += $escape($helpers.getCardText(rs.idCardType)), 
                $out += "</td> <td>", $line = 29, $out += $escape(rs.idCardNumber), $out += "</td> <td>", 
                $line = 30, 1 == rs.isContactUser && ($out += "是", $line = 30), $out += "</td> <td>", 
                $line = 31, $out += $escape(rs.remark), $out += "</td> </tr> ", $line = 33;
            }), $out += " ", $line = 34), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="pull-left">\r\n				人数：大人 {{adultCount}} 小孩 {{childCount}}\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>序号</th>\r\n						<th>姓名</th>\r\n						<th>手机号码</th>\r\n						<th>证件类型</th>\r\n						<th>证件号</th>\r\n						<th>设为联系人</th>\r\n						<th>备注</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-addTouristTbody" data-del-json="{{touristGroupMemberJsonDel}}">\r\n				{{if !!touristGroupMemberJsonAdd && touristGroupMemberJsonAdd.length > 0}}\r\n					{{each touristGroupMemberJsonAdd as rs index}}\r\n					<tr>\r\n						<td>{{index+1}}</td>\r\n						<td>{{rs.name}}</td>\r\n						<td>{{rs.mobileNumber}}</td>\r\n						<td>{{rs.idCardType | getCardText}}</td>\r\n						<td>{{rs.idCardNumber}}</td>\r\n						<td>{{if rs.isContactUser == 1}}是{{/if}}</td>\r\n						<td>{{rs.remark}}</td>\r\n					</tr>\r\n					{{/each}}\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-xs btn-default T-btn-close btn-primary w100"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});