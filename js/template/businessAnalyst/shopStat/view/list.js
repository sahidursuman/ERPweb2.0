/*TMODJS:{"debug":true,"version":8,"md5":"e5090f47b333d1a765a3c79ec371d42c"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/shopStat/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, sumListPerformance = $data.sumListPerformance, $escape = ($data.sumL, 
            $data.$index, $utils.$escape), totalCount = $data.totalCount, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover table-fixed T-showHighLight"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:20%;"></col> <col style="width:20%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-1">客户</th> <th class="col-sm-2">团号</th> <th class="col-sm-1">人数</th> <th class="col-sm-1">进店日期</th> <th class="col-sm-1">购物店</th> <th class="col-sm-1">总打单</th> <th class="col-sm-1">人均打单</th> <th class="col-sm-2">导佣</th> <th class="col-sm-1">社佣</th> <th class="col-sm-1">总佣金</th> <th class="col-sm-2">人均返佣</th> </tr> </thead> <tbody class="T-tourguidPer-list"> ', 
            $line = 30, $each(sumListPerformance, function(sumL) {
                $out += " <tr> <td>", $line = 32, $out += $escape(sumL.guideName), $out += "</td> <td>", 
                $line = 33, $out += $escape(sumL.mobileNumber), $out += "</td> <td>", $line = 34, 
                $out += $escape(sumL.tourCount), $out += "</td> <td>", $line = 35, $out += $escape(sumL.tourNumber), 
                $out += "</td> <td>", $line = 36, $out += $escape(sumL.sumShopMoney), $out += "</td> <td>", 
                $line = 37, $out += $escape(sumL.maxShopMoney), $out += "</td> <td>", $line = 38, 
                $out += $escape(sumL.aveTeamShop), $out += "</td> <td>", $line = 39, $out += $escape(sumL.avePeoShop), 
                $out += "</td> <td>", $line = 40, $out += $escape(sumL.sumSelfPayMoney), $out += "</td> <td>", 
                $line = 41, $out += $escape(sumL.aveSelfPayMoney), $out += "</td> <td>", $line = 42, 
                $out += $escape(sumL.aveSelfPay), $out += "</td> </tr> ", $line = 44;
            }), $out += ' </tbody> </table> <div class="pageMode"> <div class="col-xs-5"> <small>共计', 
            $line = 49, $out += $escape(totalCount), $out += '条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover table-fixed T-showHighLight">\r\n    <colgroup>\r\n        <col style="width:10%;"></col>\r\n        <col style="width:10%;"></col>\r\n        <col style="width:10%;"></col>\r\n        <col style="width:20%;"></col>\r\n        <col style="width:20%;"></col>\r\n        <col style="width:15%;"></col>\r\n        <col style="width:15%;"></col>\r\n        <col style="width:10%;"></col>\r\n        <col style="width:10%;"></col>\r\n        <col style="width:10%;"></col>\r\n    </colgroup>\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th class="col-sm-1">客户</th>\r\n            <th class="col-sm-2">团号</th>\r\n            <th class="col-sm-1">人数</th>\r\n            <th class="col-sm-1">进店日期</th>\r\n            <th class="col-sm-1">购物店</th>\r\n            <th class="col-sm-1">总打单</th>\r\n            <th class="col-sm-1">人均打单</th>\r\n            <th class="col-sm-2">导佣</th>\r\n            <th class="col-sm-1">社佣</th>\r\n            <th class="col-sm-1">总佣金</th>\r\n            <th class="col-sm-2">人均返佣</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-tourguidPer-list">\r\n        {{each sumListPerformance as sumL}}\r\n        <tr>\r\n            <td>{{sumL.guideName}}</td>\r\n            <td>{{sumL.mobileNumber}}</td>\r\n            <td>{{sumL.tourCount}}</td>\r\n            <td>{{sumL.tourNumber}}</td>\r\n            <td>{{sumL.sumShopMoney}}</td>\r\n            <td>{{sumL.maxShopMoney}}</td>\r\n            <td>{{sumL.aveTeamShop}}</td>\r\n            <td>{{sumL.avePeoShop}}</td>\r\n            <td>{{sumL.sumSelfPayMoney}}</td>\r\n            <td>{{sumL.aveSelfPayMoney}}</td>\r\n            <td>{{sumL.aveSelfPay}}</td>\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="pageMode">\r\n    <div class="col-xs-5">\r\n        <small>共计{{totalCount}}条记录</small>\r\n    </div>\r\n    <div class="col-xs-7">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});