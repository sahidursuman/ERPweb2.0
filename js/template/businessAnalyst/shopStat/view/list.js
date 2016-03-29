/*TMODJS:{"debug":true,"version":84,"md5":"5ac21a33aa9bfd1a7e3288fbb6059d16"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/shopStat/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, shopListdata = $data.shopListdata, $escape = ($data.rs, 
            $data.index, $utils.$escape), totalShop = ($data.shop, $data.totalShop), $out = "";
            return $out += '<p style="display:none;" class="T-print">购物统计表</p> <table class="table table-striped table-bordered table-hover table-fixed T-showHighLight"> <colgroup> <col style="width:15%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:6%;"></col> <col style="width:6%;"></col> <col style="width:6%;"></col> <col style="width:6%;"></col> <col style="width:6%;"></col> <col style="width:6%;"></col> <col style="width:6%;"></col> </colgroup> <thead> <tr class="bg-blur T-tr-fixed" style="transform: translateY();"> <th class="P-trFontSize">客户</th> <th class="P-trFontSize">团号</th> <th class="P-trFontSize">人数</th> <th class="P-trFontSize">出团日期</th> <th class="P-trFontSize">进店日期</th> <th class="P-trFontSize">购物店</th> <th class="P-trFontSize">总打单</th> <th class="P-trFontSize">人均打单</th> <th class="P-trFontSize">导佣</th> <th class="P-trFontSize">社佣</th> <th class="P-trFontSize">总佣金</th> <th class="P-trFontSize">人均返佣</th> </tr> </thead> <tbody class="T-tourguidPer-list"> ', 
            $line = 34, $each(shopListdata, function(rs) {
                $out += ' <tr> <td class="P-tdFontSize" rowspan="', $line = 36, rs.shopList.length ? ($line = 36, 
                $out += $escape(rs.shopList.length + 1), $line = 36) : ($out += "1", $line = 36), 
                $out += '">', $line = 36, $out += $escape(rs.partnerAgencyName), $out += '</td> <td class="P-tdFontSize" rowspan="', 
                $line = 37, rs.shopList.length ? ($line = 37, $out += $escape(rs.shopList.length + 1), 
                $line = 37) : ($out += "1", $line = 37), $out += '">', $line = 37, $out += $escape(rs.tripNumber), 
                $out += '</td> <td class="P-tdFontSize" rowspan="', $line = 38, rs.shopList.length ? ($line = 38, 
                $out += $escape(rs.shopList.length + 1), $line = 38) : ($out += "1", $line = 38), 
                $out += '">', $line = 38, $out += $escape(rs.touristAdultCount), $out += "大", $line = 38, 
                $out += $escape(rs.touristChildCount), $out += '小</td> <td class="P-tdFontSize" rowspan="', 
                $line = 39, rs.shopList.length ? ($line = 39, $out += $escape(rs.shopList.length + 1), 
                $line = 39) : ($out += "1", $line = 39), $out += '">', $line = 39, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += " - ", $line = 39, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), 
                $out += "</td> ", $line = 40, 0 == rs.shopList.length && ($out += " <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> ", 
                $line = 49), $out += " </tr> ", $line = 51, $each(rs.shopList, function(shop) {
                    $out += ' <tr shopArrangeId = "', $line = 52, $out += $escape(shop.shopArrangeId), 
                    $out += '" tripPlanId = "', $line = 52, $out += $escape(shop.tripPlanId), $out += '"> <td class="P-tdFontSize">', 
                    $line = 53, $out += $escape($helpers.dateFormat(shop.inStoreDate, "yyyy-MM-dd")), 
                    $out += '</td> <td class="P-tdFontSize">', $line = 54, $out += $escape(shop.shopName), 
                    $out += '</td> <td class="P-tdFontSize"><a href="javascript:void(0)" class="T-option T-consumeMoney">', 
                    $line = 55, $out += $escape(shop.consumeMoney), $out += '</a></td> <td class="P-tdFontSize">', 
                    $line = 56, $out += $escape(shop.aveconsumeMoney), $out += '</td> <td class="P-tdFontSize">', 
                    $line = 57, $out += $escape(shop.guideRebateMoney), $out += '</td> <td class="P-tdFontSize">', 
                    $line = 58, $out += $escape(shop.travelAgencyRebateMoney), $out += '</td> <td class="P-tdFontSize">', 
                    $line = 59, $out += $escape(shop.sumRebateMoney), $out += '</td> <td class="P-tdFontSize">', 
                    $line = 60, $out += $escape(shop.aveRebateMoney), $out += "</td> </tr> ", $line = 62;
                }), $out += " ", $line = 63;
            }), $out += ' <tr style="background: #e0effd;"> <td colspan="2" class="T-fontSize">合计</td> <td class="P-tdFontSize">', 
            $line = 66, $out += $escape(totalShop.touristAdultCount), $out += "大", $line = 66, 
            $out += $escape(totalShop.touristChildCount), $out += '小</td> <td class="P-tdFontSize">-</td> <td class="P-tdFontSize">-</td> <td class="P-tdFontSize">-</td> <td class="P-tdFontSize">', 
            $line = 70, $out += $escape(totalShop.consumeMoney), $out += '</td> <td class="P-tdFontSize">', 
            $line = 71, $out += $escape(totalShop.avgConsumeMoney), $out += '</td> <td class="P-tdFontSize">', 
            $line = 72, $out += $escape(totalShop.guideRebateMoney), $out += '</td> <td class="P-tdFontSize">', 
            $line = 73, $out += $escape(totalShop.travelAgencyRebateMoney), $out += '</td> <td class="P-tdFontSize">', 
            $line = 74, $out += $escape(totalShop.sumRebateMoney), $out += '</td> <td class="P-tdFontSize">', 
            $line = 75, $out += $escape(totalShop.avgRebateMoney), $out += '</td> </tr> </tbody> </table> <div class="pageMode T-noprint"> <div class="col-xs-5"> <small><span class="recordSize"></span></small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<p style="display:none;" class="T-print">购物统计表</p>\r\n<table class="table table-striped table-bordered table-hover table-fixed T-showHighLight">\r\n    <colgroup>\r\n        <col style="width:15%;"></col>\r\n        <col style="width:15%;"></col>\r\n        <col style="width:10%;"></col>\r\n        <col style="width:15%;"></col>\r\n        <col style="width:10%;"></col>\r\n        <col style="width:6%;"></col>\r\n        <col style="width:6%;"></col>\r\n        <col style="width:6%;"></col>\r\n        <col style="width:6%;"></col>\r\n        <col style="width:6%;"></col>\r\n        <col style="width:6%;"></col>\r\n        <col style="width:6%;"></col>\r\n    </colgroup>\r\n    <thead>\r\n        <tr class="bg-blur T-tr-fixed" style="transform: translateY();">\r\n            <th class="P-trFontSize">客户</th>\r\n            <th class="P-trFontSize">团号</th>\r\n            <th class="P-trFontSize">人数</th>\r\n            <th class="P-trFontSize">出团日期</th>\r\n            <th class="P-trFontSize">进店日期</th>\r\n            <th class="P-trFontSize">购物店</th>\r\n            <th class="P-trFontSize">总打单</th>\r\n            <th class="P-trFontSize">人均打单</th>\r\n            <th class="P-trFontSize">导佣</th>\r\n            <th class="P-trFontSize">社佣</th>\r\n            <th class="P-trFontSize">总佣金</th>\r\n            <th class="P-trFontSize">人均返佣</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-tourguidPer-list">\r\n        {{each shopListdata as rs index}}\r\n        <tr>\r\n            <td class="P-tdFontSize" rowspan="{{if rs.shopList.length}}{{rs.shopList.length+1}}{{else}}1{{/if}}">{{rs.partnerAgencyName}}</td>\r\n            <td class="P-tdFontSize" rowspan="{{if rs.shopList.length}}{{rs.shopList.length+1}}{{else}}1{{/if}}">{{rs.tripNumber}}</td>\r\n            <td class="P-tdFontSize" rowspan="{{if rs.shopList.length}}{{rs.shopList.length+1}}{{else}}1{{/if}}">{{rs.touristAdultCount}}大{{rs.touristChildCount}}小</td>\r\n            <td class="P-tdFontSize" rowspan="{{if rs.shopList.length}}{{rs.shopList.length+1}}{{else}}1{{/if}}">{{rs.startTime |dateFormat: \'yyyy-MM-dd\'}} - {{rs.endTime |dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            {{if rs.shopList.length == 0}}\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n            {{/if}}\r\n        </tr>\r\n        {{each rs.shopList as shop index}}\r\n        <tr shopArrangeId = "{{shop.shopArrangeId}}" tripPlanId = "{{shop.tripPlanId}}">\r\n            <td class="P-tdFontSize">{{shop.inStoreDate |dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            <td class="P-tdFontSize">{{shop.shopName}}</td>\r\n            <td class="P-tdFontSize"><a href="javascript:void(0)" class="T-option T-consumeMoney">{{shop.consumeMoney}}</a></td>\r\n            <td class="P-tdFontSize">{{shop.aveconsumeMoney}}</td>\r\n            <td class="P-tdFontSize">{{shop.guideRebateMoney}}</td>\r\n            <td class="P-tdFontSize">{{shop.travelAgencyRebateMoney}}</td>\r\n            <td class="P-tdFontSize">{{shop.sumRebateMoney}}</td>\r\n            <td class="P-tdFontSize">{{shop.aveRebateMoney}}</td>\r\n        </tr>\r\n        {{/each}}\r\n        {{/each}}\r\n        <tr style="background: #e0effd;">\r\n            <td colspan="2" class="T-fontSize">合计</td>\r\n            <td class="P-tdFontSize">{{totalShop.touristAdultCount}}大{{totalShop.touristChildCount}}小</td>\r\n            <td class="P-tdFontSize">-</td>\r\n            <td class="P-tdFontSize">-</td>\r\n            <td class="P-tdFontSize">-</td>\r\n            <td class="P-tdFontSize">{{totalShop.consumeMoney}}</td>\r\n            <td class="P-tdFontSize">{{totalShop.avgConsumeMoney}}</td>\r\n            <td class="P-tdFontSize">{{totalShop.guideRebateMoney}}</td>\r\n            <td class="P-tdFontSize">{{totalShop.travelAgencyRebateMoney}}</td>\r\n            <td class="P-tdFontSize">{{totalShop.sumRebateMoney}}</td>\r\n            <td class="P-tdFontSize">{{totalShop.avgRebateMoney}}</td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<div class="pageMode T-noprint">\r\n    <div class="col-xs-5">\r\n        <small><span class="recordSize"></span></small>\r\n    </div>\r\n    <div class="col-xs-7">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});