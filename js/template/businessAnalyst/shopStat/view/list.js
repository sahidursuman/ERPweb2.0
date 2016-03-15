/*TMODJS:{"debug":true,"version":1,"md5":"cb24f56e2cbee1b06a5a45c9d7884e84"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/shopStat/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, shopListdata = $data.shopListdata, $escape = ($data.rs, 
            $data.$index, $utils.$escape), totalShop = ($data.shop, $data.index, $data.totalShop), searchParam = ($data.total, 
            $data.searchParam), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover table-fixed T-showHighLight"> <colgroup> <col style="width:15%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th>客户</th> <th>团号</th> <th>人数</th> <th>进店日期</th> <th>购物店</th> <th>总打单</th> <th>人均打单</th> <th>导佣</th> <th>社佣</th> <th>总佣金</th> <th>人均返佣</th> </tr> </thead> <tbody class="T-tourguidPer-list"> ', 
            $line = 31, $each(shopListdata, function(rs) {
                $out += ' <tr> <td rowspan="', $line = 33, rs.shopList.length ? ($line = 33, $out += $escape(rs.shopList.length + 1), 
                $line = 33) : ($out += "1", $line = 33), $out += '">', $line = 33, $out += $escape(rs.partnerAgencyName), 
                $out += '</td> <td rowspan="', $line = 34, rs.shopList.length ? ($line = 34, $out += $escape(rs.shopList.length + 1), 
                $line = 34) : ($out += "1", $line = 34), $out += '">', $line = 34, $out += $escape(rs.tripNumber), 
                $out += '</td> <td rowspan="', $line = 35, rs.shopList.length ? ($line = 35, $out += $escape(rs.shopList.length + 1), 
                $line = 35) : ($out += "1", $line = 35), $out += '">', $line = 35, $out += $escape(rs.touristAdultCount), 
                $out += "大", $line = 35, $out += $escape(rs.touristChildCount), $out += "小</td> ", 
                $line = 36, 0 == rs.shopList.length && ($out += " <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> <td></td> ", 
                $line = 45), $out += " </tr> ", $line = 47, $each(rs.shopList, function(shop) {
                    $out += " <tr> <td>", $line = 49, $out += $escape($helpers.dateFormat(shop.inStoreDate, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 50, $out += $escape(shop.shopName), $out += "</td> <td>", 
                    $line = 51, $out += $escape(shop.consumeMoney), $out += "</td> <td>", $line = 52, 
                    $out += $escape(shop.aveconsumeMoney), $out += "</td> <td>", $line = 53, $out += $escape(shop.guideRebateMoney), 
                    $out += "</td> <td>", $line = 54, $out += $escape(shop.travelAgencyRebateMoney), 
                    $out += "</td> <td>", $line = 55, $out += $escape(shop.sumRebateMoney), $out += "</td> <td>", 
                    $line = 56, $out += $escape(shop.aveRebateMoney), $out += "</td> </tr> ", $line = 58;
                }), $out += " ", $line = 59;
            }), $out += " ", $line = 60, $each(totalShop, function(total, index) {
                $out += " ", $line = 61, 0 == index && ($out += ' <tr style="background: #e0effd;"> <td>合计</td> <td></td> <td>', 
                $line = 65, $out += $escape(total.touristAdultCount), $out += "大", $line = 65, $out += $escape(total.touristChildCount), 
                $out += "小</td> <td></td> <td></td> <td>", $line = 68, $out += $escape(total.sumConsumeMoney), 
                $out += "</td> <td>", $line = 69, $out += $escape(total.aveconsumeMoney), $out += "</td> <td>", 
                $line = 70, $out += $escape(total.guideRebateMoney), $out += "</td> <td>", $line = 71, 
                $out += $escape(total.travelAgencyRebateMoney), $out += "</td> <td>", $line = 72, 
                $out += $escape(total.sumRebateMoney), $out += "</td> <td>", $line = 73, $out += $escape(total.aveRebateMoney), 
                $out += "</td> </tr> ", $line = 75), $out += " ", $line = 76;
            }), $out += ' </tbody> </table> <div class="pageMode"> <div class="col-xs-5"> <small>共计', 
            $line = 81, $out += $escape(searchParam.recordSize), $out += '条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover table-fixed T-showHighLight">\r\n    <colgroup>\r\n        <col style="width:15%;"></col>\r\n        <col style="width:15%;"></col>\r\n        <col style="width:10%;"></col>\r\n        <col style="width:10%;"></col>\r\n        <col style="width:8%;"></col>\r\n        <col style="width:8%;"></col>\r\n        <col style="width:8%;"></col>\r\n        <col style="width:8%;"></col>\r\n        <col style="width:10%;"></col>\r\n        <col style="width:10%;"></col>\r\n        <col style="width:10%;"></col>\r\n    </colgroup>\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>客户</th>\r\n            <th>团号</th>\r\n            <th>人数</th>\r\n            <th>进店日期</th>\r\n            <th>购物店</th>\r\n            <th>总打单</th>\r\n            <th>人均打单</th>\r\n            <th>导佣</th>\r\n            <th>社佣</th>\r\n            <th>总佣金</th>\r\n            <th>人均返佣</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-tourguidPer-list">\r\n        {{each shopListdata as rs}}\r\n        <tr>\r\n            <td rowspan="{{if rs.shopList.length}}{{rs.shopList.length+1}}{{else}}1{{/if}}">{{rs.partnerAgencyName}}</td>\r\n            <td rowspan="{{if rs.shopList.length}}{{rs.shopList.length+1}}{{else}}1{{/if}}">{{rs.tripNumber}}</td>\r\n            <td rowspan="{{if rs.shopList.length}}{{rs.shopList.length+1}}{{else}}1{{/if}}">{{rs.touristAdultCount}}大{{rs.touristChildCount}}小</td>\r\n            {{if rs.shopList.length == 0}}\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n                <td></td>\r\n            {{/if}}\r\n        </tr>\r\n        {{each rs.shopList as shop index}}\r\n        <tr>\r\n            <td>{{shop.inStoreDate |dateFormat: \'yyyy-MM-dd\'}}</td>\r\n            <td>{{shop.shopName}}</td>\r\n            <td>{{shop.consumeMoney}}</td>\r\n            <td>{{shop.aveconsumeMoney}}</td>\r\n            <td>{{shop.guideRebateMoney}}</td>\r\n            <td>{{shop.travelAgencyRebateMoney}}</td>\r\n            <td>{{shop.sumRebateMoney}}</td>\r\n            <td>{{shop.aveRebateMoney}}</td>\r\n        </tr>\r\n        {{/each}}\r\n        {{/each}}\r\n        {{each totalShop as total index}}\r\n            {{if index == 0}}\r\n            <tr style="background: #e0effd;">\r\n                <td>合计</td>\r\n                <td></td>\r\n                <td>{{total.touristAdultCount}}大{{total.touristChildCount}}小</td>\r\n                <td></td>\r\n                <td></td>\r\n                <td>{{total.sumConsumeMoney}}</td>\r\n                <td>{{total.aveconsumeMoney}}</td>\r\n                <td>{{total.guideRebateMoney}}</td>\r\n                <td>{{total.travelAgencyRebateMoney}}</td>\r\n                <td>{{total.sumRebateMoney}}</td>\r\n                <td>{{total.aveRebateMoney}}</td>\r\n            </tr>\r\n            {{/if}}\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="pageMode">\r\n    <div class="col-xs-5">\r\n        <small>共计{{searchParam.recordSize}}条记录</small>\r\n    </div>\r\n    <div class="col-xs-7">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});