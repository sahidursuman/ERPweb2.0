/*TMODJS:{"debug":true,"version":18,"md5":"b04c3df76d9bb696de74df1147bd209a"}*/
define(function(require) {
    return require("/js/template/template")("arrange/arrangeCenter/groupView/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, tripPlanArrangeList = $data.tripPlanArrangeList, $escape = ($data.item, 
            $data.$index, $utils.$escape), tripPlanType = $data.tripPlanType, recordSize = ($data.res, 
            $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>团队信息</th> <th>团期</th> <th>团队人数</th> <th>要求</th> <th>安排结果</th> <th>责任计调</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-guide-list"> ', 
            $line = 15, $each(tripPlanArrangeList, function(item) {
                $out += ' <tr data-id="', $line = 16, $out += $escape(item.id), $out += '" data-billstatus="', 
                $line = 16, $out += $escape(item.billStatus), $out += '">  <td class="h-touristGroupInfo"> <p class="h-orderNumber">团号：', 
                $line = 19, $out += $escape(item.tripNumber), $out += '</p> <p class="hct-absolute-group h-lineName"> &lt;', 
                $line = 21, $out += $escape(item.lineProductName), $out += "&gt; - ", $line = 21, 
                1 == tripPlanType ? ($out += "团队", $line = 21) : ($out += "散客", $line = 21), $out += ' </p> <p class="h-memberName">导游：', 
                $line = 23, $out += $escape(item.guideNames), $out += '</p> </td>  <td class="h-touristGroupInfo"> <p class="center">', 
                $line = 28, $out += $escape($helpers.dateFormat(item.startTime, "yyyy-MM-dd")), 
                $out += '</p> -- <p class="center">', $line = 30, $out += $escape($helpers.dateFormat(item.endTime, "yyyy-MM-dd")), 
                $out += "</p> </td>  <td>", $line = 34, $out += $escape(item.touristAdultCount), 
                $out += "大", $line = 34, $out += $escape(item.touristChildCount), $out += "小</td> <td>", 
                $line = 35, $out += $escape(item.require), $out += "</td> <td> ", $line = 37, $each(item.arrangeResultList, function(res) {
                    $out += " <p>", $line = 38, $out += $escape(res), $out += "</p> ", $line = 39;
                }), $out += " </td> <td>", $line = 41, $out += $escape(item.dutyOPUserName), $out += "</td> <td> ", 
                $line = 43, 1 == item.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已安排 ', 
                $line = 45) : ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 未安排 ', 
                $line = 47), $out += ' </td> <td style="vertical-align:middle;width:200px"> <a class="cursor T-action T-inform R-right" data-right="1140010" title="通知"> 通知 <label style="padding-left:10px;">|</label> </a> <a class="cursor T-action T-view" title="查看"> 查看 </a> <a class="cursor T-action T-arrange-item R-right" data-right="1140007" title="安排"> <label class="padding-right20">|</label> 安排 </a> </td> </tr> ', 
                $line = 57;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 63, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="T-pagenation text-right"> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n        <tr class="bg-blur">\r\n            <th>团队信息</th>\r\n            <th>团期</th>\r\n            <th>团队人数</th>\r\n            <th>要求</th>\r\n            <th>安排结果</th>\r\n            <th>责任计调</th>\r\n            <th>状态</th>\r\n            <th>操作</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-guide-list">\r\n        {{each tripPlanArrangeList as item}}\r\n        <tr data-id="{{item.id}}" data-billstatus="{{item.billStatus}}">\r\n            <!-- 团信息 -->\r\n            <td class="h-touristGroupInfo">\r\n                <p class="h-orderNumber">团号：{{item.tripNumber}}</p>\r\n                <p class="hct-absolute-group h-lineName">\r\n                    &lt;{{item.lineProductName}}&gt; - {{if tripPlanType == 1}}团队{{else}}散客{{/if}}\r\n                </p>\r\n                <p class="h-memberName">导游：{{item.guideNames}}</p>\r\n            </td>\r\n\r\n            <!-- 团期 -->\r\n            <td class="h-touristGroupInfo">\r\n                <p class="center">{{item.startTime | dateFormat:\'yyyy-MM-dd\'}}</p>\r\n                --\r\n                <p class="center">{{item.endTime | dateFormat:\'yyyy-MM-dd\'}}</p>\r\n            </td>\r\n\r\n            <!-- 团队人数 -->\r\n            <td>{{item.touristAdultCount}}大{{item.touristChildCount}}小</td>\r\n            <td>{{item.require}}</td>\r\n            <td>\r\n                {{each item.arrangeResultList as res}}\r\n                <p>{{res}}</p>\r\n                {{/each}}\r\n            </td>\r\n            <td>{{item.dutyOPUserName}}</td>\r\n            <td>\r\n                {{if item.status == 1}}\r\n                <i class="ace-icon fa fa-check green bigger-130"></i> 已安排 \r\n                {{else}}\r\n                <i class="ace-icon fa fa-times red bigger-125"></i> 未安排 \r\n                {{/if}}\r\n            </td>\r\n            <td style="vertical-align:middle;width:200px"> \r\n                <a class="cursor T-action T-inform R-right" data-right="1140010" title="通知"> 通知 <label style="padding-left:10px;">|</label> </a> \r\n                <a class="cursor T-action T-view" title="查看"> 查看 </a>\r\n                <a class="cursor T-action T-arrange-item R-right" data-right="1140007" title="安排">\r\n                    <label class="padding-right20">|</label> 安排 </a>\r\n            </td>\r\n\r\n        </tr>\r\n        {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="clearfix"></div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="T-pagenation text-right">\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});