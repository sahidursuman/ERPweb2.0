/*TMODJS:{"debug":true,"version":63,"md5":"53661e3af8eb495448da05fdcb3af022"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/groupDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.touristGroup, 
            $data.index, $utils.$escape), $out = ($data.touristGroupFee, $data.$index, "");
            return $out += '<div class="financialCountViewLog" > <div class="ticketList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover" style="margin-top: 20px"> <thead> <tr> <th>序号</th> <th>来源</th> <th>小组联系人</th> <th>联系人电话</th> <th>人数</th> <th>应收</th> <th>已收</th> <th>现收</th> <th>明细</th> <th>备注</th> </tr> </thead> <tbody> ', 
            $line = 20, $each(touristGroupList, function(touristGroup, index) {
                $out += " <tr> <td>", $line = 22, $out += $escape(index + 1), $out += "</td> <td> ", 
                $line = 24, 1 == touristGroup.getType ? ($out += " 旅行社系统 ", $line = 26) : 2 == touristGroup.getType ? ($out += " 传真 ", 
                $line = 28) : 3 == touristGroup.getType ? ($out += " 短信 ", $line = 30) : 4 == touristGroup.getType ? ($out += " 电话 ", 
                $line = 32) : 5 == touristGroup.getType && ($out += " QQ ", $line = 34), $out += " </td> <td>", 
                $line = 36, null != touristGroup.touristGroupMember && ($line = 36, $out += $escape(touristGroup.touristGroupMember.name), 
                $line = 36), $out += "</td> <td>", $line = 37, null != touristGroup.touristGroupMember && ($line = 37, 
                $out += $escape(touristGroup.touristGroupMember.mobileNumber), $line = 37), $out += "</td> <td>", 
                $line = 38, $out += $escape(touristGroup.adultCount), $out += "大", $line = 38, $out += $escape(touristGroup.childCount), 
                $out += "小</td> <td>", $line = 39, $out += $escape(touristGroup.needPayAllMoney), 
                $out += "</td> <td>", $line = 40, $out += $escape(touristGroup.payedMoney), $out += "</td> <td>", 
                $line = 41, $out += $escape(touristGroup.currentNeedPayMoney), $out += "</td> <td> ", 
                $line = 43, touristGroup.adultCount > 0 && ($out += " 大人：", $line = 44, $out += $escape(touristGroup.adultPrice), 
                $out += "X", $line = 44, $out += $escape(touristGroup.adultCount), $out += "=", 
                $line = 44, $out += $escape(touristGroup.adultPrice * touristGroup.adultCount), 
                $out += "<br /> 小孩：", $line = 45, $out += $escape(touristGroup.childPrice), $out += "X", 
                $line = 45, $out += $escape(touristGroup.childCount), $out += "=", $line = 45, $out += $escape(touristGroup.childPrice * touristGroup.childCount), 
                $out += "<br /> ", $line = 46, $each(touristGroup.touristGroupFeeList, function(touristGroupFee) {
                    $out += " ", $line = 47, $out += $escape(touristGroupFee.describeInfo), $out += " ：", 
                    $line = 47, $out += $escape(touristGroupFee.price), $out += "X", $line = 47, $out += $escape(touristGroupFee.count), 
                    $out += "=", $line = 47, $out += $escape(touristGroupFee.price * touristGroupFee.count), 
                    $out += "<br /> ", $line = 48;
                }), $out += " ", $line = 49), $out += " </td> <td>", $line = 51, null != touristGroup.transRemark && ($line = 51, 
                $out += $escape(touristGroup.transRemark), $line = 51), $out += "</td> </tr> ", 
                $line = 53;
            }), $out += " </tbody> </table> </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="financialCountViewLog" >\r\n    <div class="ticketList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover" style="margin-top: 20px">\r\n                <thead>\r\n                <tr>\r\n                    <th>序号</th>\r\n                   	<th>来源</th>\r\n                   	<th>小组联系人</th>\r\n                   	<th>联系人电话</th>\r\n                   	<th>人数</th>\r\n                   	<th>应收</th>\r\n                   	<th>已收</th>\r\n                   	<th>现收</th>\r\n                    <th>明细</th>\r\n                   	<th>备注</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each touristGroupList as touristGroup index}}\r\n                <tr>\r\n                	<td>{{index+1}}</td>\r\n                	<td>\r\n                	{{if touristGroup.getType == 1}}\r\n                	旅行社系统\r\n                	{{else if touristGroup.getType == 2}}\r\n                	传真\r\n                	{{else if touristGroup.getType == 3}}\r\n                	短信\r\n                	{{else if touristGroup.getType == 4}}\r\n                	电话\r\n                	{{else if touristGroup.getType == 5}}\r\n                	QQ\r\n                	{{/if}}\r\n                	</td>\r\n                	<td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.name}}{{/if}}</td>\r\n                	<td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.mobileNumber}}{{/if}}</td>\r\n                	<td>{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                	<td>{{touristGroup.needPayAllMoney}}</td>\r\n                	<td>{{touristGroup.payedMoney}}</td>\r\n                	<td>{{touristGroup.currentNeedPayMoney}}</td>\r\n                	<td>\r\n                		{{if touristGroup.adultCount > 0}}\r\n                		大人：{{touristGroup.adultPrice}}X{{touristGroup.adultCount}}={{touristGroup.adultPrice * touristGroup.adultCount}}<br />\r\n                		小孩：{{touristGroup.childPrice}}X{{touristGroup.childCount}}={{touristGroup.childPrice * touristGroup.childCount}}<br />\r\n                			{{each touristGroup.touristGroupFeeList as touristGroupFee}}\r\n                				{{touristGroupFee.describeInfo}} ：{{touristGroupFee.price}}X{{touristGroupFee.count}}={{touristGroupFee.price * touristGroupFee.count}}<br />\r\n                			{{/each}}\r\n                		{{/if}}\r\n                	</td>\r\n                    <td>{{if touristGroup.transRemark != null}}{{touristGroup.transRemark}}{{/if}}</td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});