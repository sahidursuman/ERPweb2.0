/*TMODJS:{"debug":true,"version":115,"md5":"2e729427758f93ddd19113b8a1f2950f"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, tripPlanList = $data.tripPlanList, $escape = ($data.financialTripPlan, 
            $data.$index, $utils.$escape), recordSize = ($data.tripPlanDetails, $data.index, 
            $data.recordSize), $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover" style="margin-top: 20px"> <thead> <tr class="bg-blur"> <th style="min-width:50px">团号</th> <th style="min-width:70px">出团日期</th> <th style="min-width:70px">完团日期</th> <th style="min-width:80px">线路产品</th> <th style="min-width:40px">人数</th> <th style="min-width:80px">团队人数</th> <th style="min-width:50px">导游</th> <th style="min-width:40px">车牌号</th> <th style="min-width:40pxpx">收入</th> <th style="min-width:40pxpx">成本</th> <th style="min-width:40pxpx">毛利</th> <th style="min-width:40px">人均毛利</th> <th style="min-width:80px">审核状态</th> <th style="min-width:40px">审核人</th> <th style="min-width:130px">操作</th> </tr </thead> <tbody> ', 
            $line = 22, $each(tripPlanList, function(financialTripPlan) {
                $out += " ", $line = 23, null != financialTripPlan && ($out += ' <tr data-entity-id="', 
                $line = 24, $out += $escape(financialTripPlan.id), $out += '"> <td style="min-width:50px" ', 
                $line = 25, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 25, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 25), $out += ">", $line = 25, $out += $escape(financialTripPlan.tripPlan.tripNumber), 
                $out += "</td> ", $line = 26, 0 == financialTripPlan.tripPlan.tripPlanDetails.length ? ($out += " <td>", 
                $line = 27, null != financialTripPlan.tripPlan && ($line = 27, $out += $escape($helpers.dateFormat(financialTripPlan.tripPlan.startTime, "yyyy-MM-dd")), 
                $line = 27), $out += "</td> <td>", $line = 28, null != financialTripPlan.tripPlan && ($line = 28, 
                $out += $escape($helpers.dateFormat(financialTripPlan.tripPlan.endTime, "yyyy-MM-dd")), 
                $line = 28), $out += "</td> <td>", $line = 29, $out += $escape(financialTripPlan.tripPlan.lineProduct.name), 
                $out += "</td> <td>", $line = 30, $out += $escape(financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount), 
                $out += "</td> ", $line = 31) : ($out += " ", $line = 32, $each(financialTripPlan.tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 33, 0 == index && ($out += " <td>", $line = 34, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 35, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 36, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 37, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> ", $line = 38), $out += " ", $line = 39;
                }), $out += " ", $line = 40), $out += ' <td style="vertical-align:middle" ', $line = 41, 
                financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 41, 
                $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), $out += '"', 
                $line = 41), $out += ">", $line = 41, $out += $escape(financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 42, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 42, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 42), $out += ">", $line = 42, null != financialTripPlan.tripPlan.guide && ($line = 42, 
                $out += $escape(financialTripPlan.tripPlan.guide.realname), $line = 42), $out += '</td> <td style="vertical-align:middle" ', 
                $line = 43, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 43, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 43), $out += ">", $line = 43, null != financialTripPlan.tripPlan.bus && ($line = 43, 
                $out += $escape(financialTripPlan.tripPlan.bus.licenseNumber), $line = 43), $out += '</td> <td style="vertical-align:middle" ', 
                $line = 44, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 44, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 44), $out += ">", $line = 44, $out += $escape(financialTripPlan.getAllMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 45, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 45, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 45), $out += ">", $line = 45, $out += $escape(financialTripPlan.payAllMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 46, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 46, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 46), $out += ">", $line = 46, $out += $escape(financialTripPlan.grossProfitMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 47, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 47, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 47), $out += ">", $line = 47, $out += $escape(financialTripPlan.perGrossProfitMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 48, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 48, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 48), $out += ">", $line = 48, -1 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="#ff9900">待报账</font> ', 
                $line = 50) : 0 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="#ff9900">待审核</font> ', 
                $line = 52) : 1 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="green">计调已审</font> ', 
                $line = 54) : 2 == financialTripPlan.tripPlan.billStatus && ($out += ' <font color="green">财务已审</font> ', 
                $line = 56), $out += ' </td> <td style="vertical-align:middle" ', $line = 58, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 58, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 58), $out += "> ", $line = 59, 2 == financialTripPlan.tripPlan.billStatus ? ($out += " ", 
                $line = 60, null != financialTripPlan.tripPlan.financialCheckUser && ($line = 60, 
                $out += $escape(financialTripPlan.tripPlan.financialCheckUser.realName), $line = 60), 
                $out += " ", $line = 61) : 1 == financialTripPlan.tripPlan.billStatus && ($out += " ", 
                $line = 62, null != financialTripPlan.tripPlan.oPCheckUser && ($line = 62, $out += $escape(financialTripPlan.tripPlan.oPCheckUser.realName), 
                $line = 62), $out += " ", $line = 63), $out += ' </td> <td style="vertical-align:middle" ', 
                $line = 65, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 65, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 65), $out += "> ", $line = 66, 1 != financialTripPlan.guideFinancialExamine && ($out += ' <a data-entity-id="', 
                $line = 67, $out += $escape(financialTripPlan.id), $out += '" class="cursor btn-count-update T-audit"> 审核 <label style="padding-left:10px;">|</label> </a> ', 
                $line = 71), $out += ' <a data-entity-id="', $line = 72, $out += $escape(financialTripPlan.id), 
                $out += '" class=" btn-count-examine cursor"> 明细 </a> <a data-entity-billStatus="', 
                $line = 75, $out += $escape(financialTripPlan.tripPlan.billStatus), $out += '" data-entity-id="', 
                $line = 75, $out += $escape(financialTripPlan.id), $out += '" class="cursor btn-guide-account R-right" data-right="1190004"> <label class="padding-right20">|</label> 报账 </a> </td> </tr> ', 
                $line = 81, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += " ", 
                $line = 82, $each(financialTripPlan.tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 83, index > 0 && ($out += " <tr> <td>", $line = 85, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 86, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 87, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 88, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> </tr> ", $line = 90), $out += " ", $line = 91;
                }), $out += " ", $line = 92), $out += " ", $line = 93), $out += " ", $line = 94;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 99, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover" style="margin-top: 20px">\r\n    <thead>\r\n    <tr class="bg-blur">\r\n        <th style="min-width:50px">团号</th>\r\n        <th style="min-width:70px">出团日期</th>\r\n        <th style="min-width:70px">完团日期</th>\r\n        <th style="min-width:80px">线路产品</th>\r\n        <th style="min-width:40px">人数</th>\r\n        <th style="min-width:80px">团队人数</th>\r\n        <th style="min-width:50px">导游</th>\r\n        <th style="min-width:40px">车牌号</th>\r\n        <th style="min-width:40pxpx">收入</th>\r\n        <th style="min-width:40pxpx">成本</th>\r\n        <th style="min-width:40pxpx">毛利</th>\r\n        <th style="min-width:40px">人均毛利</th>\r\n        <th style="min-width:80px">审核状态</th>\r\n        <th style="min-width:40px">审核人</th>\r\n        <th style="min-width:130px">操作</th>\r\n    </tr\r\n    </thead>\r\n    <tbody> \r\n    {{each tripPlanList as financialTripPlan}}\r\n        {{if financialTripPlan != null}}\r\n        <tr data-entity-id="{{financialTripPlan.id}}">\r\n        <td style="min-width:50px" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.tripPlan.tripNumber}}</td>\r\n        {{if financialTripPlan.tripPlan.tripPlanDetails.length == 0}}\r\n            <td>{{if financialTripPlan.tripPlan != null}}{{financialTripPlan.tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n            <td>{{if financialTripPlan.tripPlan != null}}{{financialTripPlan.tripPlan.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n            <td>{{financialTripPlan.tripPlan.lineProduct.name}}</td>\r\n            <td>{{financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount}}</td>\r\n        {{else}}\r\n        {{each financialTripPlan.tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n            {{if index == 0}}\r\n                <td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.lineProductName}}</td>\r\n                <td>{{tripPlanDetails.sumMemberCount}}</td> \r\n            {{/if}}\r\n        {{/each}}\r\n        {{/if}}\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.tripPlan.touristAdultCount+financialTripPlan.tripPlan.touristChildCount}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{if financialTripPlan.tripPlan.guide != null}}{{financialTripPlan.tripPlan.guide.realname}}{{/if}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{if financialTripPlan.tripPlan.bus != null}}{{financialTripPlan.tripPlan.bus.licenseNumber}}{{/if}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.getAllMoney}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.payAllMoney}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.grossProfitMoney}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.perGrossProfitMoney}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{if financialTripPlan.tripPlan.billStatus == -1}}\r\n            <font color="#ff9900">待报账</font>\r\n            {{else if financialTripPlan.tripPlan.billStatus == 0}}\r\n            <font color="#ff9900">待审核</font>\r\n            {{else if financialTripPlan.tripPlan.billStatus == 1}}\r\n            <font color="green">计调已审</font>\r\n            {{else if financialTripPlan.tripPlan.billStatus == 2}}\r\n            <font color="green">财务已审</font>\r\n            {{/if}}\r\n        </td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n            {{if financialTripPlan.tripPlan.billStatus == 2}}\r\n                {{if financialTripPlan.tripPlan.financialCheckUser != null}}{{financialTripPlan.tripPlan.financialCheckUser.realName}}{{/if}}\r\n            {{else if financialTripPlan.tripPlan.billStatus == 1}}\r\n                {{if financialTripPlan.tripPlan.oPCheckUser != null}}{{financialTripPlan.tripPlan.oPCheckUser.realName}}{{/if}}\r\n            {{/if}}\r\n        </td>\r\n           <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n            {{if financialTripPlan.guideFinancialExamine != 1}}\r\n            <a data-entity-id="{{financialTripPlan.id}}" class="cursor btn-count-update T-audit">\r\n                审核\r\n                <label style="padding-left:10px;">|</label>\r\n            </a>\r\n            {{/if}}\r\n            <a data-entity-id="{{financialTripPlan.id}}" class=" btn-count-examine cursor">\r\n                明细\r\n            </a>\r\n            <a data-entity-billStatus="{{financialTripPlan.tripPlan.billStatus}}" data-entity-id="{{financialTripPlan.id}}" class="cursor btn-guide-account R-right" data-right="1190004">\r\n                <label class="padding-right20">|</label>\r\n                报账\r\n            </a>\r\n        </td>\r\n        </tr> \r\n        {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}\r\n        {{each financialTripPlan.tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n            {{if index>0}}\r\n            <tr>\r\n                <td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.lineProductName}}</td>\r\n                <td>{{tripPlanDetails.sumMemberCount}}</td> \r\n            </tr>\r\n            {{/if}}\r\n        {{/each}}\r\n        {{/if}}\r\n        {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});