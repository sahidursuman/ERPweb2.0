/*TMODJS:{"debug":true,"version":17,"md5":"4990c81e6c220ec1cd529707652005ae"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/planCollection", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, collectionList = $data.collectionList, $escape = ($data.item, 
            $data.index, $utils.$escape), isConfirmAccount = $data.isConfirmAccount, isView = $data.isView, $out = "";
            return $out += '<div class="row T-transfer-bus-planCollectionLayer" style="margin: 0; padding: 10px 10px 0;"> <div >提示：代收团款计入客户账务，代收增项不计入客户账务。</div> <table class="table table-striped table-bordered table-hover mar-t-10"> <thead> <tr> <th>收客信息</th> <th>游客信息</th> <th>客户</th> <th>外联销售</th> <th>代收金额</th> <th>代收类型</th> </tr> </thead> <tbody id="T-transfer-bus"> ', 
            $line = 15, $each(collectionList, function(item, index) {
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
                $out += "</td> <td>", $line = 31, $out += $escape(item.outOPUser), $out += '</td> <td><input type="text" name="collection" value="', 
                $line = 32, $out += $escape(item.collection), $out += '" ', $line = 32, ("1" == isConfirmAccount || isView) && ($out += "disabled", 
                $line = 32), $out += '></td> <td> <label class="pos-rel mar-r-10"> <input type="radio" ', 
                $line = 35, 0 == item.collectionType && ($out += "checked", $line = 35), $out += " ", 
                $line = 35, ("1" == isConfirmAccount || isView) && ($out += "disabled", $line = 35), 
                $out += ' value="0" name="collectionType-', $line = 35, $out += $escape(index), 
                $out += '" class="ace ridioCheck T-assign-check"> <span class="lbl"></span> 代收团款 </label> <label class="pos-rel"> <input type="radio" ', 
                $line = 39, 1 == item.collectionType && ($out += "checked", $line = 39), $out += " ", 
                $line = 39, ("1" == isConfirmAccount || isView) && ($out += "disabled", $line = 39), 
                $out += ' value="1" name="collectionType-', $line = 39, $out += $escape(index), 
                $out += '" class="ace ridioCheck"> <span class="lbl"></span> 代收增项 </label> </td> </tr> ', 
                $line = 43;
            }), $out += ' </tbody> </table> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-default otherButton T-btn-close" style="height: auto;"> <i class="ace-icon fa fa-times"></i> 关闭 </button> <button class="btn btn-sm btn-primary otherButton T-btn-save mar-l-15 ', 
            $line = 48, ("1" == isConfirmAccount || isView) && ($out += "hidden", $line = 48), 
            $out += '" style="height: auto;" > <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-transfer-bus-planCollectionLayer" style="margin: 0; padding: 10px 10px 0;">\r\n    <div >提示：代收团款计入客户账务，代收增项不计入客户账务。</div>\r\n    <table class="table table-striped table-bordered table-hover mar-t-10">\r\n        <thead>\r\n            <tr>\r\n                <th>收客信息</th>\r\n                <th>游客信息</th>\r\n                <th>客户</th>\r\n                <th>外联销售</th>\r\n                <th>代收金额</th>\r\n                <th>代收类型</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody id="T-transfer-bus">\r\n        {{each collectionList as item index}}\r\n            <tr  id="{{item.id}}" touristGroupId="{{item.touristGroupId}}" >\r\n                <td>\r\n                    <p>收客单号：<span class="orderNumber">{{item.orderNumber}}</span></p>\r\n                    <p><span class="lineProductName">{{item.lineProductName}}</span></p>\r\n                    <p><span name="startTime">{{item.startTime | dateFormat: \'yyyy-MM-dd\'}}</span>\r\n                </td>\r\n                <td>\r\n                    <p><span name="tgMemberName">{{item.tgMemberName}}</span></p>\r\n                <p>\r\n                    <span name="adultCount">{{item.adultCount}}</span>大\r\n                    <span name="childCount">{{item.childCount}}</span>小\r\n                </p>\r\n                <p><span name="tgMemberMobileNumber ">{{item.tgMemberMobileNumber}}</span></p>\r\n                </td>\r\n                <td>{{item.partnerAgencyName}}</td>\r\n                <td>{{item.outOPUser}}</td>\r\n                <td><input type="text" name="collection" value="{{item.collection}}" {{if isConfirmAccount=="1" || isView}}disabled{{/if}}></td>\r\n                <td>\r\n                    <label class="pos-rel mar-r-10">\r\n                        <input type="radio" {{if item.collectionType == 0}}checked{{/if}} {{if isConfirmAccount=="1" || isView}}disabled{{/if}}  value="0"  name="collectionType-{{index}}" class="ace ridioCheck T-assign-check"> <span class="lbl"></span>\r\n                        代收团款\r\n                    </label>\r\n                    <label class="pos-rel">\r\n                        <input type="radio" {{if item.collectionType == 1}}checked{{/if}} {{if isConfirmAccount=="1" || isView}}disabled{{/if}}   value="1"  name="collectionType-{{index}}"  class="ace ridioCheck"> <span class="lbl"></span> 代收增项\r\n                    </label>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n        <button class="btn btn-sm btn-default otherButton T-btn-close" style="height: auto;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n        <button class="btn btn-sm btn-primary otherButton T-btn-save mar-l-15 {{if isConfirmAccount=="1" || isView}}hidden{{/if}}" style="height: auto;" > <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});