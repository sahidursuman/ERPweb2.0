/*TMODJS:{"debug":true,"version":67,"md5":"d2558fa8c8eed1ce7df9a19298b70be8"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeCenter/transferView/planCollection", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, collectionList = $data.collectionList, $escape = ($data.item, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row T-transfer-bus-planCollectionLayer" style="margin: 0; padding: 10px 10px 0;"> <div >提示：代收团款计入客户账务，代收增项不计入客户账务。</div> <table class="table table-striped table-bordered table-hover mar-t-10"> <thead> <tr> <th>收客信息</th> <th>游客信息</th> <th>客户</th> <th>外联销售</th> <th>代收金额</th> <th>代收类型</th> </tr> </thead> <tbody> ', 
            $line = 15, $each(collectionList, function(item) {
                $out += ' <tr> <td> <p>收客单号：<span class="orderNumber">', $line = 18, $out += $escape(item.orderNumber), 
                $out += '</span></p> <p><span><span class="lineProductName">&lt;', $line = 19, $out += $escape(item.lineProductName), 
                $out += '&gt;</span></span></p> <p><span class="startTime">', $line = 20, $out += $escape(item.startTime), 
                $out += '</span> </td> <td> <p><span cals="tgMemberName">', $line = 23, $out += $escape(item.tgMemberName), 
                $out += '</span></p> <p> <span class="adultCount">', $line = 25, $out += $escape(item.adultCount), 
                $out += '</span>大 <span class="childCount">', $line = 26, $out += $escape(item.childCount), 
                $out += '</span>小 </p> <p><span class="tgMemberMobileNumber ">', $line = 28, $out += $escape(item.tgMemberMobileNumber), 
                $out += "</span></p> </td> <td>", $line = 30, $out += $escape(item.partnerAgencyName), 
                $out += "</td> <td>", $line = 31, $out += $escape(item.outOPUser), $out += '</td> <td><input type="text" name="collection " value="', 
                $line = 32, $out += $escape(item.collection), $out += '"></td> <td> <label class="pos-rel mar-r-10"> <input type="radio" ', 
                $line = 35, 0 == item.collectionType && ($out += ' checked="checked" ', $line = 35), 
                $out += ' class="ace ridioCheck" name=""> <span class="lbl"></span> 代收团款 </label> <label class="pos-rel"> <input type="radio" ', 
                $line = 39, 1 == item.collectionType && ($out += ' checked="checked" ', $line = 39), 
                $out += ' class="ace ridioCheck" name=""> <span class="lbl"></span> 代收增项 </label> </td> </tr> ', 
                $line = 43;
            }), $out += ' </tbody> </table> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-default otherButton T-btn-close" style="height: auto;"> <i class="ace-icon fa fa-times"></i> 关闭 </button> <button class="btn btn-sm btn-primary otherButton T-btn-save mar-l-15" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-transfer-bus-planCollectionLayer" style="margin: 0; padding: 10px 10px 0;">\r\n    <div >提示：代收团款计入客户账务，代收增项不计入客户账务。</div>\r\n    <table class="table table-striped table-bordered table-hover mar-t-10">\r\n        <thead>\r\n            <tr>\r\n                <th>收客信息</th>\r\n                <th>游客信息</th>\r\n                <th>客户</th>\r\n                <th>外联销售</th>\r\n                <th>代收金额</th>\r\n                <th>代收类型</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each collectionList as item}}\r\n            <tr>\r\n                <td>\r\n                    <p>收客单号：<span class="orderNumber">{{item.orderNumber}}</span></p>\r\n                    <p><span><span class="lineProductName">&lt;{{item.lineProductName}}&gt;</span></span></p>\r\n                    <p><span class="startTime">{{item.startTime}}</span>\r\n                </td>\r\n                <td>\r\n                    <p><span cals="tgMemberName">{{item.tgMemberName}}</span></p>\r\n                <p>\r\n                    <span class="adultCount">{{item.adultCount}}</span>大\r\n                    <span class="childCount">{{item.childCount}}</span>小\r\n                </p>\r\n                <p><span class="tgMemberMobileNumber ">{{item.tgMemberMobileNumber}}</span></p>\r\n                </td>\r\n                <td>{{item.partnerAgencyName}}</td>\r\n                <td>{{item.outOPUser}}</td>\r\n                <td><input type="text" name="collection " value="{{item.collection}}"></td>\r\n                <td>\r\n                    <label class="pos-rel mar-r-10">\r\n                        <input type="radio" {{if item.collectionType == 0}} checked="checked" {{/if}} class="ace ridioCheck" name=""> <span class="lbl"></span> \r\n                        代收团款\r\n                    </label>\r\n                    <label class="pos-rel">\r\n                        <input type="radio" {{if item.collectionType == 1}} checked="checked" {{/if}} class="ace ridioCheck" name=""> <span class="lbl"></span> 代收增项\r\n                    </label>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n        <button class="btn btn-sm btn-default otherButton T-btn-close" style="height: auto;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n        <button class="btn btn-sm btn-primary otherButton T-btn-save mar-l-15" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});