/*TMODJS:{"debug":true,"version":56,"md5":"71b7e0a88753309213ca855f3a846487"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/groupDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.touristGroup, 
            $data.index, $utils.$escape), $out = ($data.touristGroupFee, $data.$index, "");
            return $out += '<div class="financialCountViewLog" > <div class="ticketList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover" style="margin-top: 20px"> <thead> <tr> <th>序号</th> <th>来源</th> <th>小组联系人</th> <th>联系人电话</th> <th>人数</th> <th>应收</th> <th>已收</th> <th>现收</th> <th>明细</th> </tr> </thead> <tbody> ', 
            $line = 19, $each(touristGroupList, function(touristGroup, index) {
                $out += " <tr> <td>", $line = 21, $out += $escape(index + 1), $out += "</td> <td> ", 
                $line = 23, 1 == touristGroup.getType ? ($out += " 旅行社系统 ", $line = 25) : 2 == touristGroup.getType ? ($out += " 传真 ", 
                $line = 27) : 3 == touristGroup.getType ? ($out += " 短信 ", $line = 29) : 4 == touristGroup.getType ? ($out += " 电话 ", 
                $line = 31) : 5 == touristGroup.getType && ($out += " QQ ", $line = 33), $out += " </td> <td>", 
                $line = 35, null != touristGroup.touristGroupMember && ($line = 35, $out += $escape(touristGroup.touristGroupMember.name), 
                $line = 35), $out += "</td> <td>", $line = 36, null != touristGroup.touristGroupMember && ($line = 36, 
                $out += $escape(touristGroup.touristGroupMember.mobileNumber), $line = 36), $out += "</td> <td>", 
                $line = 37, $out += $escape(touristGroup.adultCount), $out += "大", $line = 37, $out += $escape(touristGroup.childCount), 
                $out += "小</td> <td>", $line = 38, $out += $escape(touristGroup.needPayAllMoney), 
                $out += "</td> <td>", $line = 39, $out += $escape(touristGroup.payedMoney), $out += "</td> <td>", 
                $line = 40, $out += $escape(touristGroup.currentNeedPayMoney), $out += "</td> <td> ", 
                $line = 42, touristGroup.adultCount > 0 && ($out += " 大人：", $line = 43, $out += $escape(touristGroup.adultPrice), 
                $out += "X", $line = 43, $out += $escape(touristGroup.adultCount), $out += "=", 
                $line = 43, $out += $escape(touristGroup.adultPrice * touristGroup.adultCount), 
                $out += "<br /> 小孩：", $line = 44, $out += $escape(touristGroup.childPrice), $out += "X", 
                $line = 44, $out += $escape(touristGroup.childCount), $out += "=", $line = 44, $out += $escape(touristGroup.childPrice * touristGroup.childCount), 
                $out += "<br /> ", $line = 45, $each(touristGroup.touristGroupFeeList, function(touristGroupFee) {
                    $out += " ", $line = 46, $out += $escape(touristGroupFee.describeInfo), $out += " ：", 
                    $line = 46, $out += $escape(touristGroupFee.price), $out += "X", $line = 46, $out += $escape(touristGroupFee.count), 
                    $out += "=", $line = 46, $out += $escape(touristGroupFee.price * touristGroupFee.count), 
                    $out += "<br /> ", $line = 47;
                }), $out += " ", $line = 48), $out += " </td> </tr> ", $line = 51;
            }), $out += " </tbody> </table> </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="financialCountViewLog" >\r\n    <div class="ticketList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover" style="margin-top: 20px">\r\n                <thead>\r\n                <tr>\r\n                    <th>序号</th>\r\n                   	<th>来源</th>\r\n                   	<th>小组联系人</th>\r\n                   	<th>联系人电话</th>\r\n                   	<th>人数</th>\r\n                   	<th>应收</th>\r\n                   	<th>已收</th>\r\n                   	<th>现收</th>\r\n                   	<th>明细</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each touristGroupList as touristGroup index}}\r\n                <tr>\r\n                	<td>{{index+1}}</td>\r\n                	<td>\r\n                	{{if touristGroup.getType == 1}}\r\n                	旅行社系统\r\n                	{{else if touristGroup.getType == 2}}\r\n                	传真\r\n                	{{else if touristGroup.getType == 3}}\r\n                	短信\r\n                	{{else if touristGroup.getType == 4}}\r\n                	电话\r\n                	{{else if touristGroup.getType == 5}}\r\n                	QQ\r\n                	{{/if}}\r\n                	</td>\r\n                	<td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.name}}{{/if}}</td>\r\n                	<td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.mobileNumber}}{{/if}}</td>\r\n                	<td>{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                	<td>{{touristGroup.needPayAllMoney}}</td>\r\n                	<td>{{touristGroup.payedMoney}}</td>\r\n                	<td>{{touristGroup.currentNeedPayMoney}}</td>\r\n                	<td>\r\n                		{{if touristGroup.adultCount > 0}}\r\n                		大人：{{touristGroup.adultPrice}}X{{touristGroup.adultCount}}={{touristGroup.adultPrice * touristGroup.adultCount}}<br />\r\n                		小孩：{{touristGroup.childPrice}}X{{touristGroup.childCount}}={{touristGroup.childPrice * touristGroup.childCount}}<br />\r\n                			{{each touristGroup.touristGroupFeeList as touristGroupFee}}\r\n                				{{touristGroupFee.describeInfo}} ：{{touristGroupFee.price}}X{{touristGroupFee.count}}={{touristGroupFee.price * touristGroupFee.count}}<br />\r\n                			{{/each}}\r\n                		{{/if}}\r\n                	</td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});