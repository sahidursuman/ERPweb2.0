/*TMODJS:{"debug":true,"version":24,"md5":"48877af8134a358addb93f9c0cbc0ce0"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/shopStat/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, shopListdata = $data.shopListdata, $escape = ($data.rs, 
            $data.index, $utils.$escape), $out = ($data.shop, "");
            return $out += '<p style="display:none;" class="T-print">购物统计表</p> <table class="table table-striped table-bordered table-hover T-showHighLight"> <colgroup> <col style="width:18%;"></col> <col style="width:7%;"></col> <col style="width:7%;"></col> <col style="width:7%;"></col> <col style="width:15%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> </colgroup> <thead> <tr class="bg-blur T-tr-fixed" style="transform: translateY();"> <th class="P-trFontSize">团信息</th> <th class="P-trFontSize">导游</th> <th class="P-trFontSize">出团日期</th> <th class="P-trFontSize">进店日期</th> <th class="P-trFontSize">购物店</th> <th class="P-trFontSize">总打单</th> <th class="P-trFontSize">人均打单</th> <th class="P-trFontSize">导佣</th> <th class="P-trFontSize">社佣</th> <th class="P-trFontSize">总佣金</th> <th class="P-trFontSize">人均返佣</th> </tr> </thead> <tbody class="T-tourguidPer-list"> ', 
            $line = 33, $each(shopListdata, function(rs) {
                $out += ' <tr> <td class="P-tdFontSize" rowspan="', $line = 35, rs.shopList.length ? ($line = 35, 
                $out += $escape(rs.shopList.length + 1), $line = 35) : ($out += "1", $line = 35), 
                $out += '" style="text-align:left"> <span>线路：', $line = 36, $out += $escape(rs.lineName), 
                $out += "</span><br/> <span>客户：", $line = 37, $out += $escape(rs.partnerAgencyName), 
                $out += "</span><br/> <span>团号：", $line = 38, $out += $escape(rs.tripNumber), $out += "</span><br/> <span>人数：", 
                $line = 39, $out += $escape(rs.touristAdultCount), $out += "大", $line = 39, $out += $escape(rs.touristChildCount), 
                $out += '小</span><br/> </td> <td class="P-tdFontSize" rowspan="', $line = 42, rs.shopList.length ? ($line = 42, 
                $out += $escape(rs.shopList.length + 1), $line = 42) : ($out += "1", $line = 42), 
                $out += '" style="text-align:left"> <span>', $line = 43, $out += $escape(rs.guidName), 
                $out += "</span><br/><span>", $line = 43, $out += $escape(rs.guideMobileNumber), 
                $out += '</span> </td> <td class="P-tdFontSize" rowspan="', $line = 45, rs.shopList.length ? ($line = 45, 
                $out += $escape(rs.shopList.length + 1), $line = 45) : ($out += "1", $line = 45), 
                $out += '">', $line = 45, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy.MM.dd")), 
                $out += "<br/> - <br/> ", $line = 45, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy.MM.dd")), 
                $out += "</td> ", $line = 46, 0 == rs.shopList.length && ($out += " <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> ", 
                $line = 55), $out += " </tr> ", $line = 57, $each(rs.shopList, function(shop) {
                    $out += ' <tr shopArrangeId = "', $line = 58, $out += $escape(shop.shopArrangeId), 
                    $out += '" tripPlanId = "', $line = 58, $out += $escape(shop.tripPlanId), $out += '"> <td class="P-tdFontSize">', 
                    $line = 59, $out += $escape($helpers.dateFormat(shop.inStoreDate, "yyyy-MM-dd")), 
                    $out += '</td> <td class="P-tdFontSize">', $line = 60, $out += $escape(shop.shopName), 
                    $out += '</td> <td class="P-tdFontSize"><a href="javascript:void(0)" class="T-option T-consumeMoney"><span class=\'F-float F-money\'>', 
                    $line = 61, $out += $escape(shop.consumeMoney), $out += "</span></a></td> <td class=\"P-tdFontSize\"><span class='F-float F-money'>", 
                    $line = 62, $out += $escape(shop.aveconsumeMoney), $out += "</span></td> <td class=\"P-tdFontSize\"><span class='F-float F-money'>", 
                    $line = 63, $out += $escape(shop.guideRebateMoney), $out += "</span></td> <td class=\"P-tdFontSize\"><span class='F-float F-money'>", 
                    $line = 64, $out += $escape(shop.travelAgencyRebateMoney), $out += "</span></td> <td class=\"P-tdFontSize\"><span class='F-float F-money'>", 
                    $line = 65, $out += $escape(shop.sumRebateMoney), $out += "</span></td> <td class=\"P-tdFontSize\"><span class='F-float F-money'>", 
                    $line = 66, $out += $escape(shop.aveRebateMoney), $out += "</span></td> </tr> ", 
                    $line = 68;
                }), $out += " ", $line = 69;
            }), $out += ' </tbody> </table> <div class="pageMode T-noprint"> <div class="col-xs-5"> <small><span class="recordSize"></span></small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<p style="display:none;" class="T-print">购物统计表</p>\r\n<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <colgroup>\r\n        <col style="width:18%;"></col>\r\n        <col style="width:7%;"></col>\r\n        <col style="width:7%;"></col>\r\n        <col style="width:7%;"></col>\r\n        <col style="width:15%;"></col>\r\n        <col style="width:8%;"></col>\r\n        <col style="width:8%;"></col>\r\n        <col style="width:8%;"></col>\r\n        <col style="width:8%;"></col>\r\n        <col style="width:8%;"></col>\r\n        <col style="width:8%;"></col>\r\n\r\n    </colgroup>\r\n    <thead>\r\n        <tr class="bg-blur T-tr-fixed" style="transform: translateY();">\r\n            <th class="P-trFontSize">团信息</th>\r\n            <th class="P-trFontSize">导游</th>\r\n            <th class="P-trFontSize">出团日期</th>\r\n            <th class="P-trFontSize">进店日期</th>\r\n            <th class="P-trFontSize">购物店</th>\r\n            <th class="P-trFontSize">总打单</th>\r\n            <th class="P-trFontSize">人均打单</th>\r\n            <th class="P-trFontSize">导佣</th>\r\n            <th class="P-trFontSize">社佣</th>\r\n            <th class="P-trFontSize">总佣金</th>\r\n            <th class="P-trFontSize">人均返佣</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-tourguidPer-list">\r\n        {{each shopListdata as rs index}}\r\n        <tr>\r\n            <td class="P-tdFontSize" rowspan="{{if rs.shopList.length}}{{rs.shopList.length+1}}{{else}}1{{/if}}" style="text-align:left">\r\n                <span>线路：{{rs.lineName}}</span><br/>\r\n                <span>客户：{{rs.partnerAgencyName}}</span><br/>\r\n                <span>团号：{{rs.tripNumber}}</span><br/>\r\n                <span>人数：{{rs.touristAdultCount}}大{{rs.touristChildCount}}小</span><br/>\r\n\r\n            </td>\r\n            <td class="P-tdFontSize" rowspan="{{if rs.shopList.length}}{{rs.shopList.length+1}}{{else}}1{{/if}}" style="text-align:left">\r\n                <span>{{rs.guidName}}</span><br/><span>{{rs.guideMobileNumber}}</span>\r\n            </td>\r\n            <td class="P-tdFontSize" rowspan="{{if rs.shopList.length}}{{rs.shopList.length+1}}{{else}}1{{/if}}">{{rs.startTime |dateFormat: \'yyyy.MM.dd\'}}<br/> - <br/> {{rs.endTime |dateFormat: \'yyyy.MM.dd\'}}</td>\r\n            {{if rs.shopList.length == 0}}\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n            {{/if}}\r\n        </tr>\r\n        {{each rs.shopList as shop index}}\r\n        <tr shopArrangeId = "{{shop.shopArrangeId}}" tripPlanId = "{{shop.tripPlanId}}">\r\n            <td class="P-tdFontSize">{{shop.inStoreDate |dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            <td class="P-tdFontSize">{{shop.shopName}}</td>\r\n            <td class="P-tdFontSize"><a href="javascript:void(0)" class="T-option T-consumeMoney"><span class=\'F-float F-money\'>{{shop.consumeMoney}}</span></a></td>\r\n            <td class="P-tdFontSize"><span class=\'F-float F-money\'>{{shop.aveconsumeMoney}}</span></td>\r\n            <td class="P-tdFontSize"><span class=\'F-float F-money\'>{{shop.guideRebateMoney}}</span></td>\r\n            <td class="P-tdFontSize"><span class=\'F-float F-money\'>{{shop.travelAgencyRebateMoney}}</span></td>\r\n            <td class="P-tdFontSize"><span class=\'F-float F-money\'>{{shop.sumRebateMoney}}</span></td>\r\n            <td class="P-tdFontSize"><span class=\'F-float F-money\'>{{shop.aveRebateMoney}}</span></td>\r\n        </tr>\r\n        {{/each}}\r\n        {{/each}}\r\n        \r\n    </tbody>\r\n</table>\r\n<div class="pageMode T-noprint">\r\n    <div class="col-xs-5">\r\n        <small><span class="recordSize"></span></small>\r\n    </div>\r\n    <div class="col-xs-7">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});