/*TMODJS:{"debug":true,"version":75,"md5":"ecfd072a3df05ec91a65a52570f2379f"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/groupDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupList = $data.touristGroupList, $escape = ($data.touristGroup, 
            $data.index, $utils.$escape), $out = ($data.touristGroupFee, $data.$index, "");
            return $out += '<div class="financialCountViewLog" > <div class="ticketList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover" style="margin-top: 20px"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">来源</th> <th class="th-border">小组联系人</th> <th class="th-border">联系人电话</th> <th class="th-border">人数</th> <th class="th-border">应收</th> <th class="th-border">已收</th> <th class="th-border">现收</th> <th class="th-border">明细</th> <th class="th-border">备注</th> </tr> </thead> <tbody> ', 
            $line = 20, $each(touristGroupList, function(touristGroup, index) {
                $out += " <tr> <td>", $line = 22, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 23, touristGroup.partnerAgency && ($line = 23, $out += $escape(touristGroup.partnerAgency.travelAgencyName), 
                $line = 23), $out += "</td> <td>", $line = 24, null != touristGroup.touristGroupMember && ($line = 24, 
                $out += $escape(touristGroup.touristGroupMember.name), $line = 24), $out += "</td> <td>", 
                $line = 25, null != touristGroup.touristGroupMember && ($line = 25, $out += $escape(touristGroup.touristGroupMember.mobileNumber), 
                $line = 25), $out += "</td> <td>", $line = 26, $out += $escape(touristGroup.adultCount), 
                $out += "大", $line = 26, $out += $escape(touristGroup.childCount), $out += "小</td> <td>", 
                $line = 27, $out += $escape(touristGroup.needPayAllMoney), $out += "</td> <td>", 
                $line = 28, $out += $escape(touristGroup.payedMoney), $out += "</td> <td>", $line = 29, 
                $out += $escape(touristGroup.currentNeedPayMoney), $out += "</td> <td> ", $line = 31, 
                touristGroup.adultCount > 0 && ($out += " 大人：", $line = 32, $out += $escape(touristGroup.adultPrice), 
                $out += "X", $line = 32, $out += $escape(touristGroup.adultCount), $out += "=", 
                $line = 32, $out += $escape(touristGroup.adultPrice * touristGroup.adultCount), 
                $out += "<br /> 小孩：", $line = 33, $out += $escape(touristGroup.childPrice), $out += "X", 
                $line = 33, $out += $escape(touristGroup.childCount), $out += "=", $line = 33, $out += $escape(touristGroup.childPrice * touristGroup.childCount), 
                $out += "<br /> ", $line = 34, $each(touristGroup.touristGroupFeeList, function(touristGroupFee) {
                    $out += " ", $line = 35, $out += $escape(touristGroupFee.describeInfo), $out += " ：", 
                    $line = 35, $out += $escape(touristGroupFee.price), $out += "X", $line = 35, $out += $escape(touristGroupFee.count), 
                    $out += "=", $line = 35, $out += $escape(touristGroupFee.price * touristGroupFee.count), 
                    $out += "<br /> ", $line = 36;
                }), $out += " ", $line = 37), $out += " </td> <td>", $line = 39, null != touristGroup.transRemark && ($line = 39, 
                $out += $escape(touristGroup.transRemark), $line = 39), $out += "</td> </tr> ", 
                $line = 41;
            }), $out += " </tbody> </table> </div> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="financialCountViewLog" >\r\n    <div class="ticketList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover" style="margin-top: 20px">\r\n                <thead>\r\n                <tr>\r\n                    <th class="th-border">序号</th>\r\n                   	<th class="th-border">来源</th>\r\n                   	<th class="th-border">小组联系人</th>\r\n                   	<th class="th-border">联系人电话</th>\r\n                   	<th class="th-border">人数</th>\r\n                   	<th class="th-border">应收</th>\r\n                   	<th class="th-border">已收</th>\r\n                   	<th class="th-border">现收</th>\r\n                    <th class="th-border">明细</th>\r\n                   	<th class="th-border">备注</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each touristGroupList as touristGroup index}}\r\n                <tr>\r\n                	<td>{{index+1}}</td>\r\n                	<td>{{if touristGroup.partnerAgency}}{{touristGroup.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n                	<td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.name}}{{/if}}</td>\r\n                	<td>{{if touristGroup.touristGroupMember != null}}{{touristGroup.touristGroupMember.mobileNumber}}{{/if}}</td>\r\n                	<td>{{touristGroup.adultCount}}大{{touristGroup.childCount}}小</td>\r\n                	<td>{{touristGroup.needPayAllMoney}}</td>\r\n                	<td>{{touristGroup.payedMoney}}</td>\r\n                	<td>{{touristGroup.currentNeedPayMoney}}</td>\r\n                	<td>\r\n                		{{if touristGroup.adultCount > 0}}\r\n                		大人：{{touristGroup.adultPrice}}X{{touristGroup.adultCount}}={{touristGroup.adultPrice * touristGroup.adultCount}}<br />\r\n                		小孩：{{touristGroup.childPrice}}X{{touristGroup.childCount}}={{touristGroup.childPrice * touristGroup.childCount}}<br />\r\n                			{{each touristGroup.touristGroupFeeList as touristGroupFee}}\r\n                				{{touristGroupFee.describeInfo}} ：{{touristGroupFee.price}}X{{touristGroupFee.count}}={{touristGroupFee.price * touristGroupFee.count}}<br />\r\n                			{{/each}}\r\n                		{{/if}}\r\n                	</td>\r\n                    <td>{{if touristGroup.transRemark != null}}{{touristGroup.transRemark}}{{/if}}</td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});