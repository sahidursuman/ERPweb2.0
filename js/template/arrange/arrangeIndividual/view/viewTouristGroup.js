/*TMODJS:{"debug":true,"version":5,"md5":"d4d5ab656b78143a55bee16794d4461d"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeIndividual/view/viewTouristGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, memberList = $data.memberList, $escape = ($data.$index, 
            $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">姓名</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">手机号</th> <th class="th-border">是否为联系人</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> </tr> </thead> <tbody> ', 
            $line = 21, $each(memberList, function(memberList) {
                $out += ' <tr data-travelLine-Id="', $line = 22, $out += $escape(memberList.id), 
                $out += '"> <td>', $line = 23, $out += $escape(memberList.name), $out += "</td> <td> ", 
                $line = 25, 0 == memberList.idCardType ? ($out += " 身份证 ", $line = 27) : 1 == memberList.idCardType ? ($out += " 护照 ", 
                $line = 29) : ($out += " 其他 ", $line = 31), $out += " </td> <td>", $line = 33, $out += $escape(memberList.idCardNumber), 
                $out += "</td> <td>", $line = 34, $out += $escape(memberList.mobileNumber), $out += "</td> <td>", 
                $line = 35, 1 == memberList.isContactUser ? ($out += "是", $line = 35) : ($out += "-", 
                $line = 35), $out += "</td> <td>", $line = 36, 0 == memberList.idCardType ? ($line = 36, 
                $out += $escape(memberList.area), $line = 36) : ($out += "--", $line = 36), $out += '</td> <td class="F-float F-count">', 
                $line = 37, 0 == memberList.idCardType ? ($line = 37, 0 == memberList.age ? ($out += "--", 
                $line = 37) : ($line = 37, $out += $escape(memberList.age), $line = 37), $line = 37) : $line = 37, 
                $out += "</td> </tr> ", $line = 39;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">姓名</th>\r\n										<th class="th-border">证件类型</th>\r\n										<th class="th-border">证件号</th>\r\n										<th class="th-border">手机号</th>\r\n										<th class="th-border">是否为联系人</th>\r\n										<th class="th-border">客源地</th>\r\n										<th class="th-border">年龄</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n	                              {{each memberList as memberList}}\r\n									<tr  data-travelLine-Id="{{memberList.id}}">\r\n										<td>{{memberList.name}}</td>\r\n										<td>\r\n											{{if memberList.idCardType == 0}}\r\n												身份证\r\n											{{else if memberList.idCardType == 1}}\r\n												护照\r\n											{{else}}\r\n												其他 \r\n											{{/if}}\r\n										</td>\r\n										<td>{{memberList.idCardNumber}}</td>\r\n										<td>{{memberList.mobileNumber}}</td>\r\n										<td>{{if memberList.isContactUser == 1}}是{{else}}-{{/if}}</td>\r\n										<td>{{if memberList.idCardType == 0}}{{memberList.area}}{{else}}--{{/if}}</td>\r\n										<td class="F-float F-count">{{if memberList.idCardType == 0}}{{if memberList.age==0}}--{{else}}{{memberList.age}}{{/if}}{{else}}{{/if}}</td>\r\n									</tr>\r\n								  {{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});