/*TMODJS:{"debug":true,"version":8,"md5":"b6605ece96e4da34f332a594d7e9408a"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/listTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, tripPlanList = $data.tripPlanList, $escape = ($data.financialTripPlan, 
            $data.$index, $utils.$escape), recordSize = ($data.tripPlanDetails, $data.index, 
            $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<table class="table table-striped table-bordered table-hover" style="margin-top: 20px"> <thead> <tr class="bg-blur"> <th >团号</th> <th >出团日期</th> <th >完团日期</th> <th >线路产品</th> <th >人数</th> <th >团队人数</th> <th >导游</th> <th >车牌号</th> <th >收入</th> <th >成本</th> <th >毛利</th> <th >人均毛利</th> <th >审核状态</th> <th >审核人</th> <th >操作</th> </tr> </thead> <tbody> ', 
            $line = 22, $each(tripPlanList, function(financialTripPlan) {
                $out += " ", $line = 23, null != financialTripPlan && ($out += ' <tr data-entity-id="', 
                $line = 24, $out += $escape(financialTripPlan.id), $out += '"> <td style="vertical-align:middle" ', 
                $line = 25, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 25, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 25), $out += ">", $line = 25, $out += $escape(financialTripPlan.tripPlan.tripNumber), 
                $out += "</td> ", $line = 26, $each(financialTripPlan.tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 27, 0 == index && ($out += " <td>", $line = 28, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 29, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 30, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 31, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> ", $line = 32), $out += " ", $line = 33;
                }), $out += ' <td style="vertical-align:middle" ', $line = 34, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 34, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 34), $out += ">", $line = 34, $out += $escape(financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 35, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 35, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 35), $out += ">", $line = 35, null != financialTripPlan.tripPlan.guide && ($line = 35, 
                $out += $escape(financialTripPlan.tripPlan.guide.realname), $line = 35), $out += '</td> <td style="vertical-align:middle" ', 
                $line = 36, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 36, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 36), $out += ">", $line = 36, null != financialTripPlan.tripPlan.bus && ($line = 36, 
                $out += $escape(financialTripPlan.tripPlan.bus.licenseNumber), $line = 36), $out += '</td> <td style="vertical-align:middle" ', 
                $line = 37, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 37, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 37), $out += ">", $line = 37, $out += $escape(financialTripPlan.getAllMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 38, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 38, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 38), $out += ">", $line = 38, $out += $escape(financialTripPlan.payAllMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 39, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 39, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 39), $out += ">", $line = 39, $out += $escape(financialTripPlan.grossProfitMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 40, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 40, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 40), $out += ">", $line = 40, $out += $escape(financialTripPlan.perGrossProfitMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 41, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 41, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 41), $out += ">", $line = 41, -1 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="#ff9900">待报账</font> ', 
                $line = 43) : 0 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="#ff9900">待审核</font> ', 
                $line = 45) : 1 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="green">计调已审</font> ', 
                $line = 47) : 2 == financialTripPlan.tripPlan.billStatus && ($out += ' <font color="green">财务已审</font> ', 
                $line = 49), $out += ' </td> <td style="vertical-align:middle" ', $line = 51, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 51, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 51), $out += "> ", $line = 52, 2 == financialTripPlan.tripPlan.billStatus ? ($out += " ", 
                $line = 53, null != financialTripPlan.tripPlan.financialCheckUser && ($line = 53, 
                $out += $escape(financialTripPlan.tripPlan.financialCheckUser.realName), $line = 53), 
                $out += " ", $line = 54) : 1 == financialTripPlan.tripPlan.billStatus && ($out += " ", 
                $line = 55, null != financialTripPlan.tripPlan.oPCheckUser && ($line = 55, $out += $escape(financialTripPlan.tripPlan.oPCheckUser.realName), 
                $line = 55), $out += " ", $line = 56), $out += ' </td> <td style="vertical-align:middle" ', 
                $line = 58, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 58, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 58), $out += '> <a data-entity-billStatus="', $line = 59, $out += $escape(financialTripPlan.tripPlan.billStatus), 
                $out += '" data-entity-id="', $line = 59, $out += $escape(financialTripPlan.id), 
                $out += '" class="cursor btn-count-update"> 审核 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 62, $out += $escape(financialTripPlan.id), $out += '" class=" btn-count-examine cursor"> 明细 </a><a href="" class="cursor"> |</a> <a data-entity-billStatus="', 
                $line = 65, $out += $escape(financialTripPlan.tripPlan.billStatus), $out += '" data-entity-id="', 
                $line = 65, $out += $escape(financialTripPlan.id), $out += '" class="cursor btn-guide-account" > 报账 </a> </td> </tr> ', 
                $line = 70, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += " ", 
                $line = 71, $each(financialTripPlan.tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 72, index > 0 && ($out += " <tr> <td>", $line = 74, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 75, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 76, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 77, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> </tr> ", $line = 79), $out += " ", $line = 80;
                }), $out += " ", $line = 81), $out += " ", $line = 82), $out += " ", $line = 83;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 88, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 97, 0 == totalPage ? ($out += " 0/0 ", $line = 99) : ($out += " ", $line = 100, 
            $out += $escape(pageNo + 1), $out += "/", $line = 100, $out += $escape(totalPage), 
            $out += " ", $line = 101), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<table class="table table-striped table-bordered table-hover" style="margin-top: 20px">\r\n    <thead>\r\n    <tr class="bg-blur">\r\n        <th >团号</th>\r\n        <th >出团日期</th>\r\n        <th >完团日期</th>\r\n        <th >线路产品</th>\r\n        <th >人数</th>\r\n        <th >团队人数</th>\r\n        <th >导游</th>\r\n        <th >车牌号</th>\r\n        <th >收入</th>\r\n        <th >成本</th>\r\n        <th >毛利</th>\r\n        <th >人均毛利</th>\r\n        <th >审核状态</th>\r\n        <th >审核人</th>\r\n        <th >操作</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody> \r\n    {{each tripPlanList as financialTripPlan}}\r\n        {{if financialTripPlan != null}}\r\n        <tr data-entity-id="{{financialTripPlan.id}}">\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.tripPlan.tripNumber}}</td>\r\n        {{each financialTripPlan.tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n            {{if index == 0}}\r\n                <td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.lineProductName}}</td>\r\n                <td>{{tripPlanDetails.sumMemberCount}}</td> \r\n            {{/if}}\r\n        {{/each}}\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.tripPlan.touristAdultCount+financialTripPlan.tripPlan.touristChildCount}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{if financialTripPlan.tripPlan.guide != null}}{{financialTripPlan.tripPlan.guide.realname}}{{/if}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{if financialTripPlan.tripPlan.bus != null}}{{financialTripPlan.tripPlan.bus.licenseNumber}}{{/if}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.getAllMoney}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.payAllMoney}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.grossProfitMoney}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.perGrossProfitMoney}}</td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{if financialTripPlan.tripPlan.billStatus == -1}}\r\n            <font color="#ff9900">待报账</font>\r\n            {{else if financialTripPlan.tripPlan.billStatus == 0}}\r\n            <font color="#ff9900">待审核</font>\r\n            {{else if financialTripPlan.tripPlan.billStatus == 1}}\r\n            <font color="green">计调已审</font>\r\n            {{else if financialTripPlan.tripPlan.billStatus == 2}}\r\n            <font color="green">财务已审</font>\r\n            {{/if}}\r\n        </td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n            {{if financialTripPlan.tripPlan.billStatus == 2}}\r\n                {{if financialTripPlan.tripPlan.financialCheckUser != null}}{{financialTripPlan.tripPlan.financialCheckUser.realName}}{{/if}}\r\n            {{else if financialTripPlan.tripPlan.billStatus == 1}}\r\n                {{if financialTripPlan.tripPlan.oPCheckUser != null}}{{financialTripPlan.tripPlan.oPCheckUser.realName}}{{/if}}\r\n            {{/if}}\r\n        </td>\r\n        <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n            <a data-entity-billStatus="{{financialTripPlan.tripPlan.billStatus}}" data-entity-id="{{financialTripPlan.id}}" class="cursor btn-count-update">\r\n                审核\r\n            </a><a href="" class="cursor"> |</a>\r\n            <a data-entity-id="{{financialTripPlan.id}}" class=" btn-count-examine cursor">\r\n                明细\r\n            </a><a href="" class="cursor"> |</a>\r\n            <a data-entity-billStatus="{{financialTripPlan.tripPlan.billStatus}}" data-entity-id="{{financialTripPlan.id}}" class="cursor btn-guide-account" >\r\n                报账\r\n            </a>\r\n        </td>\r\n        </tr> \r\n        {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}\r\n        {{each financialTripPlan.tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n            {{if index>0}}\r\n            <tr>\r\n                <td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{tripPlanDetails.lineProductName}}</td>\r\n                <td>{{tripPlanDetails.sumMemberCount}}</td> \r\n            </tr>\r\n            {{/if}}\r\n        {{/each}}\r\n        {{/if}}\r\n        {{/if}}\r\n    {{/each}}\r\n    </tbody>\r\n</table>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n            <ul class="pagination">\r\n                <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                    <a href="javascript:void(0)">\r\n                        {{if totalPage == 0}}\r\n                        0/0\r\n                        {{else}}\r\n                        {{pageNo+1}}/{{totalPage}}\r\n                        {{/if}}\r\n                    </a>\r\n                </li>\r\n                <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n                <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});