/*TMODJS:{"debug":true,"version":1,"md5":"96ea8f26231e49a74cdb24a12013adc0"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/viewGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, memberList = $data.memberList, $escape = ($data.$index, 
            $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12 viewGroupMain"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">姓名</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">手机号</th> <th class="th-border">是否为联系人</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> </tr> </thead> <tbody>', 
            $line = 21, $each(memberList, function(memberList) {
                $out += ' <tr data-travelLine-Id="', $line = 22, $out += $escape(memberList.id), 
                $out += '"> <td>', $line = 23, $out += $escape(memberList.name), $out += "</td> <td> ", 
                $line = 25, 0 == memberList.idCardType ? ($out += "身份证 ", $line = 26) : 1 == memberList.idCardType ? ($out += "护照 ", 
                $line = 27) : ($out += "其他 ", $line = 28), $out += " </td> <td>", $line = 30, $out += $escape(memberList.idCardNumber), 
                $out += "</td> <td>", $line = 31, $out += $escape(memberList.mobileNumber), $out += "</td> <td> ", 
                $line = 33, 1 == memberList.isContactUser ? ($out += " 是 ", $line = 35) : 0 == memberList.isContactUser && ($out += " 否 ", 
                $line = 37), $out += " </td> <td>", $line = 39, 0 == memberList.idCardType ? ($line = 39, 
                $out += $escape(memberList.area), $line = 39) : ($out += "-", $line = 39), $out += "</td> <td>", 
                $line = 40, 0 == memberList.idCardType ? ($line = 40, $out += $escape(memberList.age), 
                $line = 40) : ($out += "-", $line = 40), $out += "</td> </tr>", $line = 41;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 viewGroupMain">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">姓名</th>\r\n										<th class="th-border">证件类型</th>\r\n										<th class="th-border">证件号</th>\r\n										<th class="th-border">手机号</th>\r\n										<th class="th-border">是否为联系人</th>\r\n										<th class="th-border">客源地</th>\r\n										<th class="th-border">年龄</th>\r\n									</tr>\r\n								</thead>\r\n\r\n								<tbody>{{each memberList as memberList}}\r\n								<tr  data-travelLine-Id="{{memberList.id}}">\r\n									<td>{{memberList.name}}</td>\r\n									<td>\r\n										{{if memberList.idCardType==0}}身份证\r\n										{{else if memberList.idCardType==1}}护照\r\n										{{else}}其他\r\n										{{/if}}\r\n									</td>\r\n									<td>{{memberList.idCardNumber}}</td>\r\n									<td>{{memberList.mobileNumber}}</td>\r\n									<td>\r\n										{{if memberList.isContactUser == 1}}\r\n											是\r\n										{{else if memberList.isContactUser == 0}}\r\n											 否\r\n										{{/if}}\r\n									</td>\r\n									<td>{{if memberList.idCardType==0}}{{memberList.area}}{{else}}-{{/if}}</td>\r\n									<td>{{if memberList.idCardType==0}}{{memberList.age}}{{else}}-{{/if}}</td>\r\n								</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});