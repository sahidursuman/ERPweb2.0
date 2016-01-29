/*TMODJS:{"debug":true,"version":2,"md5":"370ffbea8a21db77fc5908fc025ddbb8"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeGroupTransfer/view/viewTouristGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, memberList = $data.memberList, $escape = ($data.$index, 
            $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">姓名</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">客源地</th> <th class="th-border">年龄</th> </tr> </thead> <tbody> ', 
            $line = 19, $each(memberList, function(memberList) {
                $out += ' <tr data-travelLine-Id="', $line = 20, $out += $escape(memberList.id), 
                $out += '"> <td>', $line = 21, $out += $escape(memberList.name), $out += "</td> <td> ", 
                $line = 23, 0 == memberList.idCardType ? ($out += " 身份证 ", $line = 25) : 1 == memberList.idCardType ? ($out += " 护照 ", 
                $line = 27) : ($out += " 其他 ", $line = 29), $out += " </td> <td>", $line = 31, $out += $escape(memberList.idCardNumber), 
                $out += "</td> <td>", $line = 32, 0 == memberList.idCardType ? ($line = 32, $out += $escape(memberList.area), 
                $line = 32) : ($out += "--", $line = 32), $out += '</td> <td class="F-float F-count">', 
                $line = 33, 0 == memberList.idCardType ? ($line = 33, 0 == memberList.age ? ($out += "--", 
                $line = 33) : ($line = 33, $out += $escape(memberList.age), $line = 33), $line = 33) : $line = 33, 
                $out += "</td> </tr> ", $line = 35;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">姓名</th>\r\n										<th class="th-border">证件类型</th>\r\n										<th class="th-border">证件号</th>\r\n										<th class="th-border">客源地</th>\r\n										<th class="th-border">年龄</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n	                              {{each memberList as memberList}}\r\n									<tr  data-travelLine-Id="{{memberList.id}}">\r\n										<td>{{memberList.name}}</td>\r\n										<td>\r\n											{{if memberList.idCardType == 0}}\r\n												身份证\r\n											{{else if memberList.idCardType == 1}}\r\n												护照\r\n											{{else}}\r\n												其他 \r\n											{{/if}}\r\n										</td>\r\n										<td>{{memberList.idCardNumber}}</td>\r\n										<td>{{if memberList.idCardType == 0}}{{memberList.area}}{{else}}--{{/if}}</td>\r\n										<td class="F-float F-count">{{if memberList.idCardType == 0}}{{if memberList.age==0}}--{{else}}{{memberList.age}}{{/if}}{{else}}{{/if}}</td>\r\n									</tr>\r\n								  {{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});