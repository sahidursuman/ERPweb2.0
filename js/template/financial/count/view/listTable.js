/*TMODJS:{"debug":true,"version":170,"md5":"4c829359630e3ed79fef40e5d10eac7a"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, tripPlanList = $data.tripPlanList, $escape = ($data.financialTripPlan, 
            $data.$index, $utils.$escape), recordSize = ($data.tripPlanDetails, $data.index, 
            $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th style="min-width:50px">团号</th> <th style="min-width:70px">出团日期</th> <th style="min-width:70px">完团日期</th> <th style="min-width:80px">线路产品</th> <th style="min-width:40px">人数</th> <th style="min-width:80px">团队人数</th> <th style="min-width:50px">导游</th> <th style="min-width:40pxpx">收入</th> <th style="min-width:40pxpx">成本</th> <th style="min-width:40pxpx">毛利</th> <th style="min-width:40px">人均毛利</th> <th style="min-width:80px">审核状态</th> <th style="min-width:40px">审核人</th> <th style="min-width:130px">操作</th> </tr> </thead> <tbody class="T-count-list"> ', 
            $line = 21, $each(tripPlanList, function(financialTripPlan) {
                $out += " ", $line = 22, null != financialTripPlan && ($out += ' <tr id="', $line = 23, 
                $out += $escape(financialTripPlan.id), $out += '" billStatus="', $line = 23, $out += $escape(financialTripPlan.tripPlan.billStatus), 
                $out += '" guideFinancialExamine = "', $line = 23, $out += $escape(financialTripPlan.guideFinancialExamine), 
                $out += '"> <td style="min-width:50px" ', $line = 24, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 24, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 24), $out += ">", $line = 24, $out += $escape(financialTripPlan.tripPlan.tripNumber), 
                $out += "</td> ", $line = 25, 0 == financialTripPlan.tripPlan.tripPlanDetails.length ? ($out += " <td>", 
                $line = 26, null != financialTripPlan.tripPlan && ($line = 26, $out += $escape($helpers.dateFormat(financialTripPlan.tripPlan.startTime, "yyyy-MM-dd")), 
                $line = 26), $out += "</td> <td>", $line = 27, null != financialTripPlan.tripPlan && ($line = 27, 
                $out += $escape($helpers.dateFormat(financialTripPlan.tripPlan.endTime, "yyyy-MM-dd")), 
                $line = 27), $out += "</td> <td>", $line = 28, $out += $escape(financialTripPlan.tripPlan.lineProduct.name), 
                $out += '</td> <td><span class="F-float F-count">', $line = 29, $out += $escape(financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount), 
                $out += "</span></td> ", $line = 30) : ($out += " ", $line = 31, $each(financialTripPlan.tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 32, 0 == index && ($out += " <td>", $line = 33, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 34, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 35, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 36, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> ", $line = 37), $out += " ", $line = 38;
                }), $out += " ", $line = 39), $out += ' <td style="vertical-align:middle" ', $line = 40, 
                financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 40, 
                $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), $out += '"', 
                $line = 40), $out += ">", $line = 40, $out += $escape(financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 41, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 41, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 41), $out += ">", $line = 41, null != financialTripPlan.tripPlan.guide && ($line = 41, 
                $out += $escape(financialTripPlan.tripPlan.guide.realname), $line = 41), $out += '</td> <td style="vertical-align:middle" ', 
                $line = 43, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 43, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 43), $out += '><span class="F-float F-money">', $line = 43, 
                $out += $escape(financialTripPlan.getAllMoney), $out += '</span></td> <td style="vertical-align:middle" ', 
                $line = 44, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 44, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 44), $out += '><span class="F-float F-money">', $line = 44, 
                $out += $escape(financialTripPlan.payAllMoney), $out += '</span></td> <td style="vertical-align:middle" ', 
                $line = 45, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 45, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 45), $out += '><span class="F-float F-money">', $line = 45, 
                $out += $escape(financialTripPlan.grossProfitMoney), $out += '</span></td> <td style="vertical-align:middle" ', 
                $line = 46, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 46, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 46), $out += '><span class="F-float F-money">', $line = 46, 
                $out += $escape(financialTripPlan.perGrossProfitMoney), $out += '</span></td> <td style="vertical-align:middle" ', 
                $line = 47, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 47, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 47), $out += ">", $line = 47, -1 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="#ff9900">待报账</font> ', 
                $line = 49) : 0 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="#ff9900">待审核</font> ', 
                $line = 51) : 1 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="green">计调已审</font> ', 
                $line = 53) : 2 == financialTripPlan.tripPlan.billStatus && ($out += ' <font color="green">财务已审</font> ', 
                $line = 55), $out += ' </td> <td style="vertical-align:middle" ', $line = 57, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 57, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 57), $out += "> ", $line = 58, 2 == financialTripPlan.tripPlan.billStatus ? ($out += " ", 
                $line = 59, null != financialTripPlan.tripPlan.financialCheckUser && ($line = 59, 
                $out += $escape(financialTripPlan.tripPlan.financialCheckUser.realName), $line = 59), 
                $out += " ", $line = 60) : 1 == financialTripPlan.tripPlan.billStatus && ($out += " ", 
                $line = 61, null != financialTripPlan.tripPlan.oPCheckUser && ($line = 61, $out += $escape(financialTripPlan.tripPlan.oPCheckUser.realName), 
                $line = 61), $out += " ", $line = 62), $out += ' </td> <td style="vertical-align:middle" ', 
                $line = 64, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 64, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 64), $out += '> <a data-entity-billStatus="', $line = 65, $out += $escape(financialTripPlan.tripPlan.billStatus), 
                $out += '" data-entity-id="', $line = 65, $out += $escape(financialTripPlan.id), 
                $out += '" data-guideFinancialExamine="', $line = 65, $out += $escape(financialTripPlan.guideFinancialExamine), 
                $out += '" class="cursor T-action T-update T-audit"> 审核 <label style="padding-left:10px;">|</label> </a> <a data-entity-id="', 
                $line = 69, $out += $escape(financialTripPlan.id), $out += '" class="T-action T-detail cursor"> 明细 </a> ', 
                $line = 72, -1 == financialTripPlan.tripPlan.billStatus && ($out += ' <a data-entity-billStatus="', 
                $line = 73, $out += $escape(financialTripPlan.tripPlan.billStatus), $out += '" data-entity-id="', 
                $line = 73, $out += $escape(financialTripPlan.id), $out += '" class="cursor T-action T-account R-right" data-right="1190004"> <label class="padding-right20">|</label> 报账 </a> ', 
                $line = 77), $out += " ", $line = 78, financialTripPlan.tripPlan && ($out += ' <a class="cursor R-right T-action T-quality" data-id="', 
                $line = 79, $out += $escape(financialTripPlan.tripPlan.id), $out += '" data-right="1190004"> <label class="padding-right20">|</label> 质量 </a> ', 
                $line = 83), $out += " </td> </tr> ", $line = 86, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += " ", 
                $line = 87, $each(financialTripPlan.tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 88, index > 0 && ($out += " <tr> <td>", $line = 90, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 91, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 92, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 93, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> </tr> ", $line = 95), $out += " ", $line = 96;
                }), $out += " ", $line = 97), $out += " ", $line = 98), $out += " ", $line = 99;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 104, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n    <thead>\r\n    <tr class="bg-blur">\r\n        <th style="min-width:50px">团号</th>\r\n        <th style="min-width:70px">出团日期</th>\r\n        <th style="min-width:70px">完团日期</th>\r\n        <th style="min-width:80px">线路产品</th>\r\n        <th style="min-width:40px">人数</th>\r\n        <th style="min-width:80px">团队人数</th>\r\n        <th style="min-width:50px">导游</th>\r\n        <th style="min-width:40pxpx">收入</th>\r\n        <th style="min-width:40pxpx">成本</th>\r\n        <th style="min-width:40pxpx">毛利</th>\r\n        <th style="min-width:40px">人均毛利</th>\r\n        <th style="min-width:80px">审核状态</th>\r\n        <th style="min-width:40px">审核人</th>\r\n        <th style="min-width:130px">操作</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody class="T-count-list"> \r\n    {{each tripPlanList as financialTripPlan}}\r\n        {{if financialTripPlan != null}}\r\n        <tr id="{{financialTripPlan.id}}" billStatus="{{financialTripPlan.tripPlan.billStatus}}" guideFinancialExamine = "{{financialTripPlan.guideFinancialExamine}}">\r\n        <td style="min-width:50px" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.tripPlan.tripNumber}}</td>\r\n        {{if financialTripPlan.tripPlan.tripPlanDetails.length == 0}}\r\n            <td>{{if financialTripPlan.tripPlan != null}}{{financialTripPlan.tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n            <td>{{if financialTripPlan.tripPlan != null}}{{financialTripPlan.tripPlan.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n            <td>{{financialTripPlan.tripPlan.lineProduct.name}}</td>\r\n            <td><span class="F-float F-count">{{financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount}}</span></td>\r\n        {{else}}\r\n        {{each financialTripPlan.tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n            {{if index == 0}}\r\n                <td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.lineProductName}}</td>\r\n                <td>{{tripPlanDetails.sumMemberCount}}</td> \r\n            {{/if}}\r\n        {{/each}}\r\n        {{/if}}\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.tripPlan.touristAdultCount+financialTripPlan.tripPlan.touristChildCount}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{if financialTripPlan.tripPlan.guide != null}}{{financialTripPlan.tripPlan.guide.realname}}{{/if}}</td>\r\n        \r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}><span class="F-float F-money">{{financialTripPlan.getAllMoney}}</span></td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}><span class="F-float F-money">{{financialTripPlan.payAllMoney}}</span></td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}><span class="F-float F-money">{{financialTripPlan.grossProfitMoney}}</span></td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}><span class="F-float F-money">{{financialTripPlan.perGrossProfitMoney}}</span></td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{if financialTripPlan.tripPlan.billStatus == -1}}\r\n            <font color="#ff9900">待报账</font>\r\n            {{else if financialTripPlan.tripPlan.billStatus == 0}}\r\n            <font color="#ff9900">待审核</font>\r\n            {{else if financialTripPlan.tripPlan.billStatus == 1}}\r\n            <font color="green">计调已审</font>\r\n            {{else if financialTripPlan.tripPlan.billStatus == 2}}\r\n            <font color="green">财务已审</font>\r\n            {{/if}}\r\n        </td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n            {{if financialTripPlan.tripPlan.billStatus == 2}}\r\n                {{if financialTripPlan.tripPlan.financialCheckUser != null}}{{financialTripPlan.tripPlan.financialCheckUser.realName}}{{/if}}\r\n            {{else if financialTripPlan.tripPlan.billStatus == 1}}\r\n                {{if financialTripPlan.tripPlan.oPCheckUser != null}}{{financialTripPlan.tripPlan.oPCheckUser.realName}}{{/if}}\r\n            {{/if}}\r\n        </td>\r\n           <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n            <a  data-entity-billStatus="{{financialTripPlan.tripPlan.billStatus}}"  data-entity-id="{{financialTripPlan.id}}" data-guideFinancialExamine="{{financialTripPlan.guideFinancialExamine}}" class="cursor T-action T-update T-audit">\r\n                审核\r\n                <label style="padding-left:10px;">|</label>\r\n            </a>\r\n            <a data-entity-id="{{financialTripPlan.id}}" class="T-action T-detail cursor">\r\n                明细\r\n            </a>\r\n            {{if financialTripPlan.tripPlan.billStatus == -1}}\r\n            <a data-entity-billStatus="{{financialTripPlan.tripPlan.billStatus}}" data-entity-id="{{financialTripPlan.id}}" class="cursor T-action T-account R-right" data-right="1190004">\r\n                <label class="padding-right20">|</label>\r\n                报账\r\n            </a>\r\n            {{/if}}\r\n            {{if financialTripPlan.tripPlan}}\r\n               <a  class="cursor R-right T-action T-quality" data-id="{{financialTripPlan.tripPlan.id}}" data-right="1190004">\r\n                   <label class="padding-right20">|</label>\r\n                   质量\r\n               </a>\r\n            {{/if}}\r\n        </td>\r\n        </tr> \r\n        {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}\r\n        {{each financialTripPlan.tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n            {{if index>0}}\r\n            <tr>\r\n                <td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.lineProductName}}</td>\r\n                <td>{{tripPlanDetails.sumMemberCount}}</td> \r\n            </tr>\r\n            {{/if}}\r\n        {{/each}}\r\n        {{/if}}\r\n        {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});