/*TMODJS:{"debug":true,"version":49,"md5":"6965a022efbd569bb315f75d45f07eba"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/viewGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, memberList = $data.memberList, $escape = ($data.$index, 
            $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 游客小组成员表 </h5> </div> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>姓名</th> <th>证件类型</th> <th>证件号</th> <th>手机号</th> <th>是否为联系人</th> <th>客源地</th> <th>年龄</th> </tr> </thead> <tbody>', 
            $line = 26, $each(memberList, function(memberList) {
                $out += ' <tr data-travelLine-Id="', $line = 27, $out += $escape(memberList.id), 
                $out += '"> <td>', $line = 28, $out += $escape(memberList.name), $out += "</td> <td> ", 
                $line = 30, 0 == memberList.idCardType ? ($out += " 身份证 ", $line = 32) : 1 == memberList.idCardType ? ($out += " 护照 ", 
                $line = 34) : ($out += " 其他 ", $line = 36), $out += " </td> <td>", $line = 38, $out += $escape(memberList.idCardNumber), 
                $out += "</td> <td>", $line = 39, $out += $escape(memberList.mobileNumber), $out += "</td> <td> ", 
                $line = 41, 1 == memberList.isContactUser ? ($out += " 是 ", $line = 43) : 0 == memberList.isContactUser && ($out += " 否 ", 
                $line = 45), $out += " </td> <td>", $line = 47, $out += $escape(memberList.area), 
                $out += "</td> <td>", $line = 48, $out += $escape(memberList.age), $out += "</td> </tr>", 
                $line = 49;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-building"></i>\r\n							游客小组成员表\r\n						</h5>\r\n					</div>\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover">\r\n								<thead>\r\n									<tr>\r\n										<th>姓名</th>\r\n										<th>证件类型</th>\r\n										<th>证件号</th>\r\n										<th>手机号</th>\r\n										<th>是否为联系人</th>\r\n										<th>客源地</th>\r\n										<th>年龄</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>{{each memberList as memberList}}\r\n								<tr  data-travelLine-Id="{{memberList.id}}">\r\n									<td>{{memberList.name}}</td>\r\n									<td>\r\n										{{if memberList.idCardType == 0}}\r\n											身份证\r\n										{{else if memberList.idCardType == 1}}\r\n											护照\r\n										{{else}}\r\n											其他\r\n										{{/if}}\r\n									</td>\r\n									<td>{{memberList.idCardNumber}}</td>\r\n									<td>{{memberList.mobileNumber}}</td>\r\n									<td>\r\n										{{if memberList.isContactUser == 1}}\r\n											是\r\n										{{else if memberList.isContactUser == 0}}\r\n											否\r\n										{{/if}}\r\n									</td>\r\n									<td>{{memberList.area}}</td>\r\n									<td>{{memberList.age}}</td>\r\n								</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});