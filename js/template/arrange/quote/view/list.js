/*TMODJS:{"debug":true,"version":201,"md5":"44d3814ce3c6e6f0fc9ac6eaabdf2fb9"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, quoteList = $data.quoteList, $escape = ($data.quote, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, $out = "";
            return $out += '<div class="col-xs-12"> <table class="table table-striped overflow-table table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>报价单号</th> <th>产品信息</th> <th>出游日期</th> <th>人数</th> <th>客户</th> <th>联系人</th> <th>大人报价</th> <th>小孩报价</th> <th>总报价</th> <th>报价人</th> <th class="col-sm-1">报价时间</th> <th>操作</th> </tr> </thead> <tbody>', 
            $line = 19, $each(quoteList, function(quote) {
                $out += ' <tr data-entity-id="', $line = 20, $out += $escape(quote.id), $out += '"> <td>', 
                $line = 21, $out += $escape(quote.quoteNumber), $out += '</td> <td class="h-touristGroupInfo"> <p class="h-lineName">', 
                $line = 23, null != quote.lineProduct && ($line = 23, $out += $escape(quote.lineProduct.name), 
                $line = 23), $out += '</p> <p> <span class="h-agencyName">', $line = 25, null != quote.lineProduct && ($line = 25, 
                0 == quote.lineProduct.customerType ? ($out += "散客", $line = 25) : ($out += "团体", 
                $line = 25), $line = 25), $out += '</span> <span class="h-agencyName">', $line = 26, 
                null != quote.lineProduct && ($line = 26, $out += $escape(quote.lineProduct.type), 
                $line = 26), $out += '</span> <label><span class="F-float F-count h-peopleCount">', 
                $line = 27, null != quote.lineProduct && ($line = 27, $out += $escape(quote.lineProduct.days), 
                $line = 27), $out += "</span></label> </p> </td> <td>", $line = 30, quote.startTime && ($line = 30, 
                $out += $escape($helpers.dateFormat(quote.startTime, "yyyy-MM-dd")), $line = 30), 
                $out += '</td> <td><span class="F-float F-count">', $line = 31, $out += $escape(quote.adultCount), 
                $out += '</span>大<span class="F-float F-count">', $line = 31, $out += $escape(quote.childCount), 
                $out += "</span>小</td> <td>", $line = 32, $out += $escape(quote.partnerAgency.travelAgencyName), 
                $out += "</td> <td>", $line = 33, $out += $escape(quote.partnerAgencyContact.contactRealname), 
                $out += '</td> <td><span class="F-float F-money">', $line = 34, $out += $escape(quote.adultQuotePrice), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 35, $out += $escape(quote.childQuotePrice), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 36, $out += $escape(quote.sumQuoteFee), 
                $out += "</span></td> <td>", $line = 37, null != quote.user && ($line = 37, $out += $escape(quote.user.realName), 
                $line = 37), $out += "</td> <td>", $line = 38, $out += $escape(quote.createTime), 
                $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a class="cursor R-right T-action ', 
                $line = 41, quote.touristGroupId || ($out += "T-status", $line = 41), $out += '" data-right="1440002" ', 
                $line = 41, quote.touristGroupId && ($out += ' style="color:#bbb;" ', $line = 41), 
                $out += "> 询价状态 <span style='margin-left:5px;'>|</span> </a> <a class=\"cursor R-right T-action ", 
                $line = 44, quote.touristGroupId || ($out += " T-update ", $line = 44), $out += '" data-right="1440002" ', 
                $line = 44, quote.touristGroupId && ($out += ' style="color:#bbb;" ', $line = 44), 
                $out += "> 修改 <span style='margin-left:5px;'>|</span> </a> <a class=\"cursor R-right T-action ", 
                $line = 47, quote.touristGroupId || ($out += " T-copy ", $line = 47), $out += '" data-right="1440002" ', 
                $line = 47, quote.touristGroupId && ($out += ' style="color:#bbb;" ', $line = 47), 
                $out += "> 复制 <span style='margin-left:5px;'>|</span> </a> <a class=\"cursor T-action T-view\"> 查看 <span style='margin-left:5px;'>|</span> </a> <a class=\"cursor R-right T-action ", 
                $line = 53, quote.touristGroupId || ($out += " T-delete ", $line = 53), $out += '" data-right="1440003" ', 
                $line = 53, quote.touristGroupId && ($out += ' style="color:#bbb;" ', $line = 53), 
                $out += "> 删除 <span style='margin-left:5px;'>|</span> </a> <a class=\"cursor T-action T-share\"> 分享 </a> </div> </td> </tr>", 
                $line = 61;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 66, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n    <table class="table table-striped overflow-table table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>报价单号</th>\r\n                <th>产品信息</th>\r\n                <th>出游日期</th>\r\n                <th>人数</th>\r\n                <th>客户</th>\r\n                <th>联系人</th>\r\n                <th>大人报价</th>\r\n                <th>小孩报价</th>\r\n                <th>总报价</th>\r\n                <th>报价人</th>\r\n                <th class="col-sm-1">报价时间</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>{{each quoteList as quote}}\r\n            <tr data-entity-id="{{quote.id}}">\r\n                <td>{{quote.quoteNumber}}</td>\r\n                <td class="h-touristGroupInfo">\r\n                    <p class="h-lineName">{{if quote.lineProduct != null}}{{quote.lineProduct.name}}{{/if}}</p>\r\n                    <p>\r\n                        <span class="h-agencyName">{{if quote.lineProduct != null}}{{if quote.lineProduct.customerType == 0}}散客{{else}}团体{{/if}}{{/if}}</span>\r\n                        <span class="h-agencyName">{{if quote.lineProduct != null}}{{quote.lineProduct.type}}{{/if}}</span>\r\n                        <label><span class="F-float F-count h-peopleCount">{{if quote.lineProduct != null}}{{quote.lineProduct.days}}{{/if}}</span></label>\r\n                    </p>\r\n                </td>\r\n                <td>{{if !!quote.startTime}}{{quote.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td><span class="F-float F-count">{{quote.adultCount}}</span>大<span class="F-float F-count">{{quote.childCount}}</span>小</td>\r\n                <td>{{quote.partnerAgency.travelAgencyName}}</td>\r\n                <td>{{quote.partnerAgencyContact.contactRealname}}</td>\r\n                <td><span class="F-float F-money">{{quote.adultQuotePrice}}</span></td>\r\n                <td><span class="F-float F-money">{{quote.childQuotePrice}}</span></td>\r\n                <td><span class="F-float F-money">{{quote.sumQuoteFee}}</span></td>\r\n                <td>{{if quote.user != null}}{{quote.user.realName}}{{/if}}</td>\r\n                <td>{{quote.createTime}}</td>\r\n                <td>\r\n                    <div class="hidden-sm hidden-xs btn-group">\r\n                        <a class="cursor R-right T-action {{if !quote.touristGroupId}}T-status{{/if}}" data-right="1440002" {{if !!quote.touristGroupId}} style="color:#bbb;" {{/if}}>\r\n                            询价状态 <span style=\'margin-left:5px;\'>|</span>\r\n                        </a>\r\n                        <a class="cursor R-right T-action {{if !quote.touristGroupId}} T-update {{/if}}" data-right="1440002" {{if !!quote.touristGroupId}} style="color:#bbb;" {{/if}}>\r\n                            修改  <span style=\'margin-left:5px;\'>|</span>\r\n                        </a>\r\n                        <a class="cursor R-right T-action {{if !quote.touristGroupId}} T-copy {{/if}}" data-right="1440002" {{if !!quote.touristGroupId}} style="color:#bbb;" {{/if}}>\r\n                            复制  <span style=\'margin-left:5px;\'>|</span>\r\n                        </a>\r\n                        <a class="cursor T-action T-view">\r\n                            查看  <span style=\'margin-left:5px;\'>|</span>\r\n                        </a>\r\n                        <a class="cursor R-right T-action {{if !quote.touristGroupId}} T-delete {{/if}}" data-right="1440003" {{if !!quote.touristGroupId}} style="color:#bbb;" {{/if}}>\r\n                            删除  <span style=\'margin-left:5px;\'>|</span>\r\n                        </a>\r\n                        <a class="cursor T-action T-share">\r\n                            分享\r\n                        </a>\r\n                    </div>\r\n                </td>\r\n            </tr>{{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});