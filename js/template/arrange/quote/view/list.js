/*TMODJS:{"debug":true,"version":200,"md5":"597a95d3baeb73a3ba3530ed1edd6ee4"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, quoteList = $data.quoteList, $escape = ($data.quote, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += ' <table class="table table-striped overflow-table table-bordered table-hover T-showHighLight"> <thead> <colgroup> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col></col> <col width="277"></col> </colgroup> <tr class="bg-blur"> <th>报价单号</th> <th>产品信息</th> <th>出游日期</th> <th>人数</th> <th>客户</th> <th>联系人</th> <th>大人报价</th> <th>小孩报价</th> <th>总报价</th> <th>报价人</th> <th class="col-sm-1">报价时间</th> <th>操作</th> </tr> </thead> <tbody>', 
            $line = 33, $each(quoteList, function(quote) {
                $out += ' <tr data-entity-id="', $line = 34, $out += $escape(quote.id), $out += '"> <td>', 
                $line = 35, $out += $escape(quote.quoteNumber), $out += '</td> <td class="h-touristGroupInfo"> <p class="h-lineName"><', 
                $line = 37, null != quote.lineProduct && ($line = 37, $out += $escape(quote.lineProduct.name), 
                $line = 37), $out += '></p> <p> <span class="h-agencyName">', $line = 39, null != quote.lineProduct && ($line = 39, 
                0 == quote.lineProduct.customerType ? ($out += "散客", $line = 39) : ($out += "团体", 
                $line = 39), $line = 39), $out += '</span> <span class="h-agencyName">', $line = 40, 
                null != quote.lineProduct && ($line = 40, $out += $escape(quote.lineProduct.type), 
                $line = 40), $out += '</span> <label><span class="F-float F-count h-peopleCount">', 
                $line = 41, null != quote.lineProduct && ($line = 41, $out += $escape(quote.lineProduct.days), 
                $line = 41), $out += "</span></label> </p> </td> <td>", $line = 44, quote.startTime && ($line = 44, 
                $out += $escape($helpers.dateFormat(quote.startTime, "yyyy-MM-dd")), $line = 44), 
                $out += '</td> <td><span class="F-float F-count">', $line = 45, $out += $escape(quote.adultCount), 
                $out += '</span>大<span class="F-float F-count">', $line = 45, $out += $escape(quote.childCount), 
                $out += "</span>小</td> <td>", $line = 46, $out += $escape(quote.partnerAgency.travelAgencyName), 
                $out += "</td> <td>", $line = 47, $out += $escape(quote.partnerAgencyContact.contactRealname), 
                $out += '</td> <td><span class="F-float F-money">', $line = 48, $out += $escape(quote.adultQuotePrice), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 49, $out += $escape(quote.childQuotePrice), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 50, $out += $escape(quote.sumQuoteFee), 
                $out += "</span></td> <td>", $line = 51, null != quote.user && ($line = 51, $out += $escape(quote.user.realName), 
                $line = 51), $out += "</td> <td>", $line = 52, $out += $escape(quote.createTime), 
                $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a class="cursor R-right T-action ', 
                $line = 55, quote.touristGroupId || ($out += "T-status", $line = 55), $out += '" data-right="1440002" ', 
                $line = 55, quote.touristGroupId && ($out += ' style="color:#bbb;" ', $line = 55), 
                $out += "> 询价状态 <span style='margin-left:5px;'>|</span> </a> <a class=\"cursor R-right T-action ", 
                $line = 58, quote.touristGroupId || ($out += " T-update ", $line = 58), $out += '" data-right="1440002" ', 
                $line = 58, quote.touristGroupId && ($out += ' style="color:#bbb;" ', $line = 58), 
                $out += "> 修改 <span style='margin-left:5px;'>|</span> </a> <a class=\"cursor R-right T-action ", 
                $line = 61, quote.touristGroupId || ($out += " T-copy ", $line = 61), $out += '" data-right="1440002" ', 
                $line = 61, quote.touristGroupId && ($out += ' style="color:#bbb;" ', $line = 61), 
                $out += "> 复制 <span style='margin-left:5px;'>|</span> </a> <a class=\"cursor T-action T-view\"> 查看 <span style='margin-left:5px;'>|</span> </a> <a class=\"cursor R-right T-action ", 
                $line = 67, quote.touristGroupId || ($out += " T-delete ", $line = 67), $out += '" data-right="1440003" ', 
                $line = 67, quote.touristGroupId && ($out += ' style="color:#bbb;" ', $line = 67), 
                $out += "> 删除 <span style='margin-left:5px;'>|</span> </a> <a class=\"cursor T-action T-share\"> 分享 </a> </div> </td> </tr>", 
                $line = 75;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 80, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n<table class="table table-striped overflow-table table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <colgroup>\r\n            <col></col>\r\n            <col></col>\r\n            <col></col>\r\n            <col></col>\r\n            <col></col>\r\n            <col></col>\r\n            <col></col>\r\n            <col></col>\r\n            <col></col>\r\n            <col></col>\r\n            <col></col>\r\n            <col width="277"></col>\r\n        </colgroup>\r\n        <tr class="bg-blur">\r\n            <th>报价单号</th>\r\n            <th>产品信息</th>\r\n            <th>出游日期</th>\r\n            <th>人数</th>\r\n            <th>客户</th>\r\n            <th>联系人</th>\r\n            <th>大人报价</th>\r\n            <th>小孩报价</th>\r\n            <th>总报价</th>\r\n            <th>报价人</th>\r\n            <th class="col-sm-1">报价时间</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>{{each quoteList as quote}}\r\n        <tr data-entity-id="{{quote.id}}">\r\n            <td>{{quote.quoteNumber}}</td>\r\n            <td class="h-touristGroupInfo">\r\n                <p class="h-lineName"><{{if quote.lineProduct != null}}{{quote.lineProduct.name}}{{/if}}></p>\r\n                <p>\r\n                    <span class="h-agencyName">{{if quote.lineProduct != null}}{{if quote.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}{{/if}}</span>\r\n                    <span class="h-agencyName">{{if quote.lineProduct != null}}{{quote.lineProduct.type}}{{/if}}</span>\r\n                    <label><span class="F-float F-count h-peopleCount">{{if quote.lineProduct != null}}{{quote.lineProduct.days}}{{/if}}</span></label>\r\n                </p>\r\n            </td>\r\n            <td>{{if !!quote.startTime}}{{quote.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n            <td><span class="F-float F-count">{{quote.adultCount}}</span>大<span class="F-float F-count">{{quote.childCount}}</span>小</td>\r\n            <td>{{quote.partnerAgency.travelAgencyName}}</td>\r\n            <td>{{quote.partnerAgencyContact.contactRealname}}</td>\r\n            <td><span class="F-float F-money">{{quote.adultQuotePrice}}</span></td>\r\n            <td><span class="F-float F-money">{{quote.childQuotePrice}}</span></td>\r\n            <td><span class="F-float F-money">{{quote.sumQuoteFee}}</span></td>\r\n            <td>{{if quote.user != null}}{{quote.user.realName}}{{/if}}</td>\r\n            <td>{{quote.createTime}}</td>\r\n            <td>\r\n                <div class="hidden-sm hidden-xs btn-group">\r\n                    <a class="cursor R-right T-action {{if !quote.touristGroupId}}T-status{{/if}}" data-right="1440002" {{if !!quote.touristGroupId}} style="color:#bbb;" {{/if}}>\r\n                        询价状态 <span style=\'margin-left:5px;\'>|</span>\r\n                    </a>\r\n                    <a class="cursor R-right T-action {{if !quote.touristGroupId}} T-update {{/if}}" data-right="1440002" {{if !!quote.touristGroupId}} style="color:#bbb;" {{/if}}>\r\n                        修改  <span style=\'margin-left:5px;\'>|</span>\r\n                    </a>\r\n                    <a class="cursor R-right T-action {{if !quote.touristGroupId}} T-copy {{/if}}" data-right="1440002" {{if !!quote.touristGroupId}} style="color:#bbb;" {{/if}}>\r\n                        复制  <span style=\'margin-left:5px;\'>|</span>\r\n                    </a>\r\n                    <a class="cursor T-action T-view">\r\n                        查看  <span style=\'margin-left:5px;\'>|</span>\r\n                    </a>\r\n                    <a class="cursor R-right T-action {{if !quote.touristGroupId}} T-delete {{/if}}" data-right="1440003" {{if !!quote.touristGroupId}} style="color:#bbb;" {{/if}}>\r\n                        删除  <span style=\'margin-left:5px;\'>|</span>\r\n                    </a>\r\n                    <a class="cursor T-action T-share">\r\n                        分享\r\n                    </a>\r\n                </div>\r\n            </td>\r\n        </tr>{{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});