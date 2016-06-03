/*TMODJS:{"debug":true,"version":69,"md5":"dbcb744cedbffaf7bcae3bdae2b8277c"}*/
define(function(require) {
    return require("../../../template")("financial/turnProfit/view/visitorGroup", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupMemberDetail = $data.touristGroupMemberDetail, $escape = ($data.touristGroup, 
            $data.index, $utils.$escape), $out = "";
            return $out += ' <div class="row" style="margin: 0; padding: 10px 10px 0;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="style-myself">序号</th> <th class="style-myself">姓名</th> <th class="style-myself">手机号码</th> <th class="style-myself">证件类型</th> <th class="style-myself">证件号</th> <th class="style-myself">是否为联系人</th> </tr> </thead> <tbody> ', 
            $line = 15, $each(touristGroupMemberDetail.touristGroupMemberList, function(touristGroup, index) {
                $out += ' <tr data-entity-id="touristGroup.id"> <td>', $line = 17, $out += $escape(index + 1), 
                $out += '</td> <td class="">', $line = 18, $out += $escape(touristGroup.name), $out += "</td> <td> ", 
                $line = 20, $out += $escape(touristGroup.mobileNumber), $out += " </td> <td> ", 
                $line = 23, 0 == touristGroup.idCardType ? ($out += "身份证 ", $line = 24) : 1 == touristGroup.idCardType ? ($out += "护照 ", 
                $line = 25) : ($out += "其它 ", $line = 26), $out += " </td> <td> ", $line = 29, $out += $escape(touristGroup.idCardNumber), 
                $out += " </td> <td> ", $line = 32, 0 == touristGroup.isContactUser ? ($out += " 否 ", 
                $line = 34) : ($out += " 是 ", $line = 36), $out += " </td> </tr> ", $line = 39;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<!--<div class="col-xs-12">-->\r\n<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n	<table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n			<tr>\r\n				<th class="style-myself">序号</th>\r\n				<th class="style-myself">姓名</th>\r\n				<th class="style-myself">手机号码</th>\r\n				<th class="style-myself">证件类型</th>\r\n				<th class="style-myself">证件号</th>\r\n				<th class="style-myself">是否为联系人</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody>\r\n			{{each touristGroupMemberDetail.touristGroupMemberList as touristGroup index}}\r\n			<tr  data-entity-id="touristGroup.id">\r\n				<td>{{index+1}}</td>\r\n				<td class="">{{touristGroup.name}}</td>\r\n				<td>\r\n					{{touristGroup.mobileNumber}}\r\n				</td>\r\n				<td>\r\n					{{if touristGroup.idCardType == 0}}身份证\r\n					{{else if touristGroup.idCardType == 1}}护照\r\n					{{else}}其它\r\n					{{/if}}\r\n				</td>\r\n				<td>\r\n					{{touristGroup.idCardNumber}}\r\n				</td>\r\n				<td>\r\n					{{if touristGroup.isContactUser==0}}\r\n					否\r\n					{{else}}\r\n					是\r\n					{{/if}}\r\n				</td>\r\n			</tr>\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});