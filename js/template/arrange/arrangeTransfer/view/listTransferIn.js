/*TMODJS:{"debug":true,"version":311,"md5":"922393b6493413be125973dbdb42d51f"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/listTransferIn", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, result = $data.result, $escape = ($data.$index, 
            $utils.$escape), searchParam = $data.searchParam, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>同行线路信息</th> <th>天数</th> <th>游客</th> <th>客户总社</th> <th>转客人</th> <th>联系电话</th> <th>应收</th>  <th>现收</th> <th>我方状态</th> <th>操作</th> </tr> </thead> <tbody class="T-listTransferIn"> ', 
            $line = 18, $each(result, function(result) {
                $out += ' <tr data-value="', $line = 19, $out += $escape(result.id), $out += '" data-status="', 
                $line = 19, $out += $escape(result.status), $out += '"> <td class="h-touristGroupInfo"> ', 
                $line = 21, null != result.lineProduct && ($out += '<p class="h-orderNumber">', 
                $line = 21, $out += $escape(result.lineProduct.name), $out += "</p>", $line = 21), 
                $out += ' <p class=""> <span class="h-lineName">', $line = 23, $out += $escape($helpers.dateFormat(result.startTime, "yyyy-MM-dd")), 
                $out += '</span> <span class="F-float F-count">', $line = 24, null != result.touristGroup && ($line = 24, 
                $out += $escape(result.touristGroup.adultCount), $line = 24), $out += '</span>大 <span class="F-float F-count">', 
                $line = 25, null != result.touristGroup && ($line = 25, $out += $escape(result.touristGroup.childCount), 
                $line = 25), $out += '</span>小 </p> </td> <td><span class="F-float F-count">', $line = 28, 
                null != result.lineProduct && ($line = 28, $out += $escape(result.lineProduct.days), 
                $line = 28), $out += "</span></td> <td>", $line = 29, null != result.touristGroup && ($line = 29, 
                null != result.touristGroup.contactMember && ($line = 29, $out += $escape(result.touristGroup.contactMember.name), 
                $line = 29), $line = 29), $out += "</td> <td> ", $line = 31, null != result.fromName && ($out += " ", 
                $line = 31, $out += $escape(result.fromName), $out += " ", $line = 31), $out += " </td> <td> ", 
                $line = 34, null != result.user && ($out += " ", $line = 34, null != result.user.realName && ($out += " ", 
                $line = 34, $out += $escape(result.user.realName), $out += " ", $line = 34), $out += " ", 
                $line = 34), $out += " </td> <td> ", $line = 37, $out += $escape(result.fromNumber), 
                $out += ' </td> <td><span class="F-float F-money">', $line = 39, null != result.touristGroup && ($line = 39, 
                $out += $escape(result.touristGroup.transNeedPayAllMoney), $line = 39), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 40, $out += $escape(result.touristGroup.currentNeedPayMoney), $out += '</span></td> <td class="result-status"> ', 
                $line = 42, null == result.transName ? ($out += "未使用", $line = 42) : ($out += " ", 
                $line = 43, 0 == result.status ? ($out += '<span style="color:#D2691E;" data-status="0">未确认</span> ', 
                $line = 44) : 1 == result.status ? ($out += '<span style="color: green;" data-status="1">已确认</span> ', 
                $line = 45) : 4 == result.status && ($out += '<span style="color: red;" data-status="4">已退回</span> ', 
                $line = 46), $line = 46), $out += '</td> <td> <div class="btn-group"> <a data-value="', 
                $line = 50, $out += $escape(result.id), $out += '" class="cursor T-transferIn-view T-action"> 查看 </a> <a data-value="', 
                $line = 53, $out += $escape(result.id), $out += '" class="cursor ', $line = 53, 
                1 != result.status && 4 != result.status && ($out += "T-transferIn-confirm", $line = 53), 
                $out += ' R-right T-action" style="', $line = 53, (1 == result.status || 4 == result.status) && ($out += " color:#bbb; ", 
                $line = 53), $out += '" data-right="1180007"> <label class="padding-right20">|</label> 确认 </a> <a data-value="', 
                $line = 57, $out += $escape(result.id), $out += '" class="cursor ', $line = 57, 
                1 != result.status && 4 != result.status && ($out += "T-transferIn-refuse", $line = 57), 
                $out += ' R-right T-action" style="', $line = 57, (1 == result.status || 4 == result.status) && ($out += " color:#bbb; ", 
                $line = 57), $out += '" data-right="1180008"> <label class="padding-right20">|</label> 拒绝 </a> <a data-value="', 
                $line = 62, $out += $escape(result.id), $out += '" class="cursor ', $line = 62, 
                1 == result.status && ($out += "T-returnTransferIn-refuse", $line = 62), $out += ' R-right T-action" style="', 
                $line = 62, 1 != result.status && ($out += " color:#bbb; ", $line = 62), $out += '" data-right="1180008"> <label class="padding-right20">|</label> 退回 </a> </div> </td> </tr> ', 
                $line = 70;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 ', 
            $line = 75, $out += $escape(searchParam.totalCount), $out += '条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>同行线路信息</th>\r\n            <th>天数</th>\r\n            <th>游客</th>\r\n            <th>客户总社</th>\r\n            <th>转客人</th>\r\n            <th>联系电话</th>\r\n            <th>应收</th>\r\n            <!-- <th>已收</th> -->\r\n            <th>现收</th>\r\n            <th>我方状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-listTransferIn">\r\n        {{each result as result}}\r\n        <tr data-value="{{result.id}}" data-status="{{result.status}}">\r\n            <td class="h-touristGroupInfo">\r\n                {{if result.lineProduct != null}}<p class="h-orderNumber">{{result.lineProduct.name}}</p>{{/if}}\r\n                <p class="">\r\n                    <span class="h-lineName">{{result.startTime | dateFormat:\'yyyy-MM-dd\'}}</span>\r\n                    <span class="F-float F-count">{{if result.touristGroup!=null}}{{result.touristGroup.adultCount}}{{/if}}</span>大\r\n                    <span class="F-float F-count">{{if result.touristGroup!=null}}{{result.touristGroup.childCount}}{{/if}}</span>小\r\n                </p>\r\n            </td>\r\n            <td><span class="F-float F-count">{{if result.lineProduct != null}}{{result.lineProduct.days}}{{/if}}</span></td>\r\n            <td>{{if result.touristGroup!=null}}{{if result.touristGroup.contactMember!=null}}{{result.touristGroup.contactMember.name}}{{/if}}{{/if}}</td>\r\n            <td>\r\n                {{if result.fromName!=null}} {{result.fromName}} {{/if}}\r\n            </td>\r\n            <td>\r\n                {{if result.user!=null}} {{if result.user.realName!=null}} {{result.user.realName}} {{/if}} {{/if}}\r\n            </td>\r\n            <td>\r\n                {{result.fromNumber}}\r\n            </td>\r\n            <td><span class="F-float F-money">{{if result.touristGroup != null}}{{result.touristGroup.transNeedPayAllMoney}}{{/if}}</span></td>\r\n            <td><span class="F-float F-money">{{result.touristGroup.currentNeedPayMoney}}</span></td>\r\n            <td class="result-status">\r\n            {{if result.transName==null}}未使用{{else}}\r\n            {{if result.status == 0}}<span style="color:#D2691E;" data-status="0">未确认</span>\r\n            {{else if result.status == 1}}<span style="color: green;" data-status="1">已确认</span>\r\n            {{else if result.status == 4}}<span style="color: red;" data-status="4">已退回</span>\r\n            {{/if}}{{/if}}</td>\r\n            \r\n            <td>\r\n                <div class="btn-group">\r\n                    <a data-value="{{result.id}}" class="cursor T-transferIn-view T-action">\r\n						查看\r\n					</a>\r\n                    <a data-value="{{result.id}}" class="cursor {{if result.status!= 1 && result.status!=4}}T-transferIn-confirm{{/if}}  R-right T-action" style="{{if result.status==1 || result.status==4 }} color:#bbb; {{/if}}" data-right="1180007">\r\n                        <label class="padding-right20">|</label>\r\n                        确认\r\n                    </a>\r\n                    <a data-value="{{result.id}}" class="cursor {{if result.status!=1 && result.status!=4}}T-transferIn-refuse{{/if}} R-right T-action" style="{{if result.status==1 || result.status==4}} color:#bbb; {{/if}}" data-right="1180008">\r\n                        <label class="padding-right20">|</label>\r\n                        拒绝\r\n                    </a>\r\n\r\n                    <a data-value="{{result.id}}" class="cursor  {{if result.status==1}}T-returnTransferIn-refuse{{/if}} R-right T-action" style="{{if result.status!=1}} color:#bbb; {{/if}}" data-right="1180008">\r\n                        <label class="padding-right20">|</label>\r\n                        退回\r\n                    </a>\r\n\r\n                </div>\r\n            </td>\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-5">\r\n        <small>共计 {{searchParam.totalCount}}条记录</small>\r\n    </div>\r\n    <div class="col-xs-7">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});