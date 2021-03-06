/*TMODJS:{"debug":true,"version":1,"md5":"d595e3bcd15c8d7305e878a34af44e46"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/planCollection", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, collectionList = $data.collectionList, $escape = ($data.item, 
            $data.index, $utils.$escape), isConfirmAccount = $data.isConfirmAccount, isView = $data.isView, $out = "";
            return $out += '<div class="row" style="margin: 0; padding: 10px 10px 0;"> <div >提示：代收团款计入客户账务，代收增项不计入客户账务。</div> <table class="table table-striped table-bordered table-hover mar-t-10"> <thead> <tr> <th>收客信息</th> <th>游客信息</th> <th>客户</th> <th>外联销售</th> <th>代收团款</th> <th>代收增项</th> </tr> </thead> <tbody id="T-transfer-bus"> ', 
            $line = 15, $each(collectionList, function(item) {
                $out += ' <tr id="', $line = 16, $out += $escape(item.id), $out += '" touristGroupId="', 
                $line = 16, $out += $escape(item.touristGroupId), $out += '" > <td> <p>收客单号：<span class="orderNumber">', 
                $line = 18, $out += $escape(item.orderNumber), $out += '</span></p> <p><span class="lineProductName">', 
                $line = 19, $out += $escape(item.lineProductName), $out += '</span></p> <p><span name="startTime">', 
                $line = 20, $out += $escape($helpers.dateFormat(item.startTime, "yyyy-MM-dd")), 
                $out += '</span> </td> <td> <p><span name="tgMemberName">', $line = 23, $out += $escape(item.tgMemberName), 
                $out += '</span></p> <p> <span name="adultCount">', $line = 25, $out += $escape(item.adultCount), 
                $out += '</span>大 <span name="childCount">', $line = 26, $out += $escape(item.childCount), 
                $out += '</span>小 </p> <p><span name="tgMemberMobileNumber ">', $line = 28, $out += $escape(item.tgMemberMobileNumber), 
                $out += "</span></p> </td> <td>", $line = 30, $out += $escape(item.partnerAgencyName), 
                $out += "</td> <td>", $line = 31, $out += $escape(item.outOPUser), $out += '</td> <td><input type="text" class="F-float F-money" name="collectionGroup" value="', 
                $line = 32, $out += $escape(item.collectionGroup), $out += '" maxlength="11" ', 
                $line = 32, ("1" == isConfirmAccount || isView) && ($out += "disabled", $line = 32), 
                $out += '></td> <td><input type="text" class="F-float F-money" name="collectionItem" value="', 
                $line = 33, $out += $escape(item.collectionItem), $out += '" maxlength="11" ', $line = 33, 
                ("1" == isConfirmAccount || isView) && ($out += "disabled", $line = 33), $out += "></td> </tr> ", 
                $line = 35;
            }), $out += ' </tbody> </table> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-default otherButton T-btn-close" style="height: auto;"> <i class="ace-icon fa fa-times"></i> 关闭 </button> <button class="btn btn-sm btn-primary otherButton T-btn-save mar-l-15 ', 
            $line = 40, ("1" == isConfirmAccount || isView) && ($out += "hidden", $line = 40), 
            $out += '" style="height: auto;" > <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" style="margin: 0; padding: 10px 10px 0;">\r\n    <div >提示：代收团款计入客户账务，代收增项不计入客户账务。</div>\r\n    <table class="table table-striped table-bordered table-hover mar-t-10">\r\n        <thead>\r\n            <tr>\r\n                <th>收客信息</th>\r\n                <th>游客信息</th>\r\n                <th>客户</th>\r\n                <th>外联销售</th>\r\n                <th>代收团款</th>\r\n                <th>代收增项</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody id="T-transfer-bus">\r\n        {{each collectionList as item index}}\r\n            <tr  id="{{item.id}}" touristGroupId="{{item.touristGroupId}}" >\r\n                <td>\r\n                    <p>收客单号：<span class="orderNumber">{{item.orderNumber}}</span></p>\r\n                    <p><span class="lineProductName">{{item.lineProductName}}</span></p>\r\n                    <p><span name="startTime">{{item.startTime | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                </td>\r\n                <td>\r\n                    <p><span name="tgMemberName">{{item.tgMemberName}}</span></p>\r\n                <p>\r\n                    <span name="adultCount">{{item.adultCount}}</span>大\r\n                    <span name="childCount">{{item.childCount}}</span>小\r\n                </p>\r\n                <p><span name="tgMemberMobileNumber ">{{item.tgMemberMobileNumber}}</span></p>\r\n                </td>\r\n                <td>{{item.partnerAgencyName}}</td>\r\n                <td>{{item.outOPUser}}</td>\r\n                <td><input type="text" class="F-float F-money" name="collectionGroup" value="{{item.collectionGroup}}" maxlength="11" {{if isConfirmAccount=="1" || isView}}disabled{{/if}}></td>\r\n                <td><input type="text" class="F-float F-money" name="collectionItem" value="{{item.collectionItem}}" maxlength="11" {{if isConfirmAccount=="1" || isView}}disabled{{/if}}></td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n        <button class="btn btn-sm btn-default otherButton T-btn-close" style="height: auto;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n        <button class="btn btn-sm btn-primary otherButton T-btn-save mar-l-15 {{if isConfirmAccount=="1" || isView}}hidden{{/if}}" style="height: auto;" > <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});