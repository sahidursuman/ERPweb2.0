/*TMODJS:{"debug":true,"version":45,"md5":"02b6e4d3945bb2f44963b4af9e607942"}*/
define(function(require) {
    return require("../../../template")("arrange/transitPlan/view/listIts", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, outOtherList = $data.outOtherList, $escape = ($data.its, 
            $data.$index, $utils.$escape), shuttleType = $data.shuttleType, recordSize = $data.recordSize, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>中转信息</th> <th>类型</th> <th>客人信息</th> <th>消费时间</th> <th>要求</th> <th>安排结果</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-its-list">  ', 
            $line = 16, $each(outOtherList, function(its) {
                $out += ' <tr> <td class="h-touristGroupInfo"> <p>中转单号：', $line = 19, $out += $escape(its.orderNumber), 
                $out += "</p> <p><span>&lt;", $line = 20, $out += $escape(its.lineProductName), 
                $out += "&gt;</span></p> <p><span>", $line = 21, $out += $escape(its.startTime), 
                $out += "</span><span>", $line = 21, $out += $escape(its.partnerAgencyName), $out += "</span><span>外链销售：", 
                $line = 21, $out += $escape(its.outOPUserName), $out += "</span></p> <p>收客单号：", 
                $line = 22, $out += $escape(its.tgOrderNumber), $out += "</p> </td> <td> <span> ", 
                $line = 26, 1 == its.shuttleType ? ($out += "接 ", $line = 27) : 2 == shuttleType && ($out += "送", 
                $line = 27), $out += " </span> - <span> ", $line = 30, "ticket" == its.arrangeType ? ($out += " 票 ", 
                $line = 31) : "restaurant" == its.arrangeType ? ($out += "餐 ", $line = 32) : "other" == its.arrangeType && ($out += "它 ", 
                $line = 33), $out += " </span> </td> <td> <p>", $line = 37, $out += $escape(its.contactMemberName), 
                $out += "</p> <p>", $line = 38, $out += $escape(its.adultCount), $out += "大", $line = 38, 
                $out += $escape(its.childCount), $out += "小</p> </td> <td> ", $line = 41, $out += $escape(its.startTime), 
                $out += " </td> <td>", $line = 43, $out += $escape(its.require), $out += "</td> <td> <p> <span> 33</span> <span> 33</span> </p> </td> <td> ", 
                $line = 51, 1 == its.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已完成 ', 
                $line = 53) : 0 == its.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 未完成 ', 
                $line = 55), $out += ' </td> <td> <a class="cursor T-arrage T-inform T-action"> 通知</a> <a class="cursor T-arrage T-plan-its T-action"> <label class="padding-right20">|</label> 安排</a> <a class="cursor T-arrage T-view-plan T-action"> <label class="padding-right20">|</label> 查看 </a> </td> </tr> ', 
                $line = 66;
            }), $out += '    </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 137, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover  T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur T-tr-fixed">\r\n            <th>中转信息</th>\r\n            <th>类型</th>\r\n            <th>客人信息</th>\r\n            <th>消费时间</th>\r\n            <th>要求</th>\r\n            <th>安排结果</th>\r\n            <th>状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-its-list">\r\n    <!-- 它 -->\r\n    {{each outOtherList as its}}\r\n        <tr>\r\n            <td class="h-touristGroupInfo">\r\n                <p>中转单号：{{its.orderNumber}}</p>\r\n                <p><span>&lt;{{its.lineProductName}}&gt;</span></p>\r\n                <p><span>{{its.startTime}}</span><span>{{its.partnerAgencyName}}</span><span>外链销售：{{its.outOPUserName}}</span></p>\r\n                <p>收客单号：{{its.tgOrderNumber}}</p>\r\n            </td>\r\n            <td>\r\n            <span>\r\n                {{if its.shuttleType == 1 }}接\r\n                {{else if shuttleType == 2}}送{{/if}}\r\n            </span> -\r\n            <span> \r\n                {{if its.arrangeType == \'ticket\' }} 票\r\n                     {{else if its.arrangeType == \'restaurant\' }}餐\r\n                     {{else if its.arrangeType == \'other\' }}它\r\n                {{/if}}\r\n             </span>\r\n            </td>\r\n            <td>\r\n                <p>{{its.contactMemberName}}</p>\r\n                <p>{{its.adultCount}}大{{its.childCount}}小</p>\r\n            </td>\r\n            <td>\r\n                {{its.startTime}}\r\n            </td>\r\n            <td>{{its.require}}</td>\r\n            <td>\r\n                <p>\r\n                    <span> 33</span>\r\n                    <span> 33</span>\r\n                </p>\r\n            </td>\r\n            <td>\r\n                {{if its.status == 1}}\r\n                    <i class="ace-icon fa fa-check green bigger-130"></i> 已完成\r\n                {{else if its.status == 0}}\r\n                    <i class="ace-icon fa fa-times red bigger-125"></i> 未完成\r\n                {{/if}}\r\n            </td>\r\n            <td>\r\n                <a class="cursor T-arrage T-inform T-action"> \r\n                通知</a>\r\n                <a class="cursor T-arrage T-plan-its T-action">\r\n                    <label class="padding-right20">|</label> 安排</a>\r\n                <a class="cursor T-arrage T-view-plan T-action">\r\n                    <label class="padding-right20">|</label> 查看 </a>\r\n            </td>\r\n        </tr>\r\n        {{/each}}\r\n        <!-- 餐 -->\r\n        <!--  <tr>\r\n            <td class="h-touristGroupInfo">\r\n                <p>中转单号：HLJQ16390994858943ZZ</p>\r\n                <p><span>&lt;贵阳-西江-黄果树双飞五日游&gt;</span><span>跟团游</span></p>\r\n                <p><span>2016-3-15</span><span>百事通</span><span>外链销售：张晓雅</span></p>\r\n                <p>收客单号：HLJQ16390994858943ZZ</p>\r\n            </td>\r\n            <td>餐</td>\r\n            <td>\r\n                <p>王倩倩</p>\r\n                <p>20大2小</p>\r\n            </td>\r\n            <td>\r\n                2016-3-21\r\n            </td>\r\n            <td>川剧变脸</td>\r\n            <td>\r\n                <p>\r\n                    <span>四川大剧院</span>\r\n                    <span>16:30场</span>\r\n                </p>\r\n            </td>\r\n            <td><i class="ace-icon fa fa-check green bigger-130"></i>已安排</td>\r\n            <td>\r\n                <a class="cursor T-inform T-action"> \r\n                通知</a>\r\n                <a class="cursor T-plan-meal T-action">\r\n                    <label class="padding-right20">|</label> 安排</a>\r\n                <a class="cursor T-view T-action">\r\n                    <label class="padding-right20">|</label> 查看\r\n            </td>\r\n        </tr>\r\n        票\r\n         <tr>\r\n            <td class="h-touristGroupInfo">\r\n                <p>中转单号：HLJQ16390994858943ZZ</p>\r\n                <p><span>&lt;贵阳-西江-黄果树双飞五日游&gt;</span><span>跟团游</span></p>\r\n                <p><span>2016-3-15</span><span>百事通</span><span>外链销售：张晓雅</span></p>\r\n                <p>收客单号：HLJQ16390994858943ZZ</p>\r\n            </td>\r\n            <td>票</td>\r\n            <td>\r\n                <p>王倩倩</p>\r\n                <p>20大2小</p>\r\n            </td>\r\n            <td>\r\n                2016-3-21\r\n            </td>\r\n            <td>川剧变脸</td>\r\n            <td>\r\n                <p>\r\n                    <span>四川大剧院</span>\r\n                    <span>16:30场</span>\r\n                </p>\r\n            </td>\r\n            <td><i class="ace-icon fa fa-check green bigger-130"></i>已安排</td>\r\n            <td>\r\n                <a class="cursor T-inform T-action"> \r\n                通知</a>\r\n                <a class="cursor T-plan-ticket T-action">\r\n                    <label class="padding-right20">|</label> 安排</a>\r\n                <a class="cursor T-view-plan T-action">\r\n                    <label class="padding-right20">|</label> 查看\r\n            </td> -->\r\n        <!-- </tr> -->\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});