/*TMODJS:{"debug":true,"version":410,"md5":"b129ba0dab9913608dde6e60847f81be"}*/
define(function(require) {
    return require("../../../template")("financial/count/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, tripPlanList = $data.tripPlanList, recordSize = ($data.financialTripPlan, 
            $data.$index, $data.tripPlanDetails, $data.index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row financialCount globalAdd" > <div class="search-area Company"> <div class="form-group"> <div class="col-xs-2"> <input type="text" value="', 
            $line = 5, $out += $escape(searchParam.tripNumber), $out += '" name ="chooseTripNumber" class="col-xs-12 clearBlur" placeholder="全部团号" /> <input type="hidden" value="', 
            $line = 6, $out += $escape(searchParam.tripNumber), $out += '" name="tripNumber" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 10, $out += $escape(searchParam.lineProductName), $out += '" name="chooseLineProductName" class="col-xs-12 clearBlur" placeholder="全部线路产品" /> <input type="hidden" value="', 
            $line = 11, $out += $escape(searchParam.lineProductId), $out += '" name="lineProductId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 15, $out += $escape(searchParam.guideName), $out += '" name="chooseGuideRealName" class="col-xs-12 clearBlur" placeholder="全部的导游" /> <input type="hidden" value="', 
            $line = 16, $out += $escape(searchParam.guideId), $out += '" name="guideId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 19, $out += $escape(searchParam.startTime), $out += '" name="startTime" class="col-xs-10 date-picker" placeholder="开始日期" /> </div> <div class="col-xs-1" style="margin-left: -15px"> <input type="text" value="', 
            $line = 22, $out += $escape(searchParam.endTime), $out += '" name="entTime" class="col-xs-10 date-picker" placeholder="结束日期" /> </div> <div class=" btn-status btn-group" > <button data-value="', 
            $line = 25, $out += $escape(searchParam.billStatus), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 27, "-1" == searchParam.billStatus ? ($out += " 待报账 ", $line = 29) : "0" == searchParam.billStatus ? ($out += " 待审核 ", 
            $line = 31) : "1" == searchParam.billStatus ? ($out += " 计调已审 ", $line = 33) : "2" == searchParam.billStatus ? ($out += " 财务已审 ", 
            $line = 35) : ($out += " 全部 ", $line = 37), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu marginLeft-30"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="-1" href="javascript:void(0)">待报账</a></li> <li><a data-value="0" href="javascript:void(0)">待审核</a></li> <li><a data-value="1" href="javascript:void(0)">计调已审</a></li> <li><a data-value="2" href="javascript:void(0)">财务已审</a></li> </ul> </div> <button class=" btn-sm btn-arrangeTourist-search marginLeft-30 search-btn" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row ticketList"> <div class="col-xs-12 row"> <table class="table table-striped table-bordered table-hover" style="margin-top: 20px"> <thead> <tr class="bg-blur"> <th >团号</th> <th >出团日期</th> <th >完团日期</th> <th >线路产品</th> <th >人数</th> <th >团队人数</th> <th >导游</th> <th >车牌号</th> <th >收入</th> <th >成本</th> <th >毛利</th> <th >人均毛利</th> <th style="width: 100px;!important">审核状态</th> <th >审核人</th> <th style="width: 100px;!important">操作</th> </tr> </thead> <tbody> ', 
            $line = 78, $each(tripPlanList, function(financialTripPlan) {
                $out += " ", $line = 79, null != financialTripPlan && ($out += ' <tr data-entity-id="', 
                $line = 80, $out += $escape(financialTripPlan.id), $out += '"> <td style="vertical-align:middle" ', 
                $line = 81, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 81, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 81), $out += ">", $line = 81, $out += $escape(financialTripPlan.tripPlan.tripNumber), 
                $out += "</td> ", $line = 82, 0 == financialTripPlan.tripPlan.tripPlanDetails.length ? ($out += " <td>", 
                $line = 83, null != financialTripPlan.tripPlan && ($line = 83, $out += $escape($helpers.dateFormat(financialTripPlan.tripPlan.startTime, "yyyy-MM-dd")), 
                $line = 83), $out += "</td> <td>", $line = 84, null != financialTripPlan.tripPlan && ($line = 84, 
                $out += $escape($helpers.dateFormat(financialTripPlan.tripPlan.endTime, "yyyy-MM-dd")), 
                $line = 84), $out += "</td> <td>", $line = 85, $out += $escape(financialTripPlan.tripPlan.lineProduct.name), 
                $out += "</td> <td>", $line = 86, $out += $escape(financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount), 
                $out += "</td> ", $line = 87) : ($out += " ", $line = 88, $each(financialTripPlan.tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 89, 0 == index && ($out += " <td>", $line = 90, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 91, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 92, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 93, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> ", $line = 94), $out += " ", $line = 95;
                }), $out += " ", $line = 96), $out += ' <td style="vertical-align:middle" ', $line = 97, 
                financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 97, 
                $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), $out += '"', 
                $line = 97), $out += ">", $line = 97, $out += $escape(financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 98, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 98, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 98), $out += ">", $line = 98, null != financialTripPlan.tripPlan.guide && ($line = 98, 
                $out += $escape(financialTripPlan.tripPlan.guide.realname), $line = 98), $out += '</td> <td style="vertical-align:middle" ', 
                $line = 99, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 99, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 99), $out += ">", $line = 99, null != financialTripPlan.tripPlan.bus && ($line = 99, 
                $out += $escape(financialTripPlan.tripPlan.bus.licenseNumber), $line = 99), $out += '</td> <td style="vertical-align:middle" ', 
                $line = 100, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 100, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 100), $out += ">", $line = 100, $out += $escape(financialTripPlan.getAllMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 101, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 101, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 101), $out += ">", $line = 101, $out += $escape(financialTripPlan.payAllMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 102, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 102, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 102), $out += ">", $line = 102, $out += $escape(financialTripPlan.grossProfitMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 103, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 103, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 103), $out += ">", $line = 103, $out += $escape(financialTripPlan.perGrossProfitMoney), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 104, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 104, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 104), $out += ">", $line = 104, -1 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="#ff9900">待报账</font> ', 
                $line = 106) : 0 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="#ff9900">待审核</font> ', 
                $line = 108) : 1 == financialTripPlan.tripPlan.billStatus ? ($out += ' <font color="green">计调已审</font> ', 
                $line = 110) : 2 == financialTripPlan.tripPlan.billStatus && ($out += ' <font color="green">财务已审</font> ', 
                $line = 112), $out += ' </td> <td style="vertical-align:middle" ', $line = 114, 
                financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 114, 
                $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), $out += '"', 
                $line = 114), $out += "> ", $line = 115, 2 == financialTripPlan.tripPlan.billStatus ? ($out += " ", 
                $line = 116, null != financialTripPlan.tripPlan.financialCheckUser && ($line = 116, 
                $out += $escape(financialTripPlan.tripPlan.financialCheckUser.realName), $line = 116), 
                $out += " ", $line = 117) : 1 == financialTripPlan.tripPlan.billStatus && ($out += " ", 
                $line = 118, null != financialTripPlan.tripPlan.oPCheckUser && ($line = 118, $out += $escape(financialTripPlan.tripPlan.oPCheckUser.realName), 
                $line = 118), $out += " ", $line = 119), $out += ' </td> <td style="vertical-align:middle" ', 
                $line = 121, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 121, $out += $escape(financialTripPlan.tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 121), $out += '> <a data-entity-billStatus="', $line = 122, 
                $out += $escape(financialTripPlan.tripPlan.billStatus), $out += '" data-entity-id="', 
                $line = 122, $out += $escape(financialTripPlan.id), $out += '" class="cursor btn-count-update R-right R-left" data-left="1190003" data-right="1190002"> 审核 </a> <a data-entity-id="', 
                $line = 125, $out += $escape(financialTripPlan.id), $out += '" class=" btn-count-examine cursor R-right" data-right="1190001"> <label class="padding-right20"> |</label> 明细 </a> <a data-entity-billStatus="', 
                $line = 129, $out += $escape(financialTripPlan.tripPlan.billStatus), $out += '" data-entity-id="', 
                $line = 129, $out += $escape(financialTripPlan.id), $out += '" class="cursor R-right btn-guide-account" data-right="1190004"> <label class="padding-right20"> |</label> 报账 </a> </td> </tr> ', 
                $line = 135, financialTripPlan.tripPlan.tripPlanDetails.length > 1 && ($out += " ", 
                $line = 136, $each(financialTripPlan.tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 137, index > 0 && ($out += " <tr> <td>", $line = 139, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 140, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 141, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 142, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> </tr> ", $line = 144), $out += " ", $line = 145;
                }), $out += " ", $line = 146), $out += " ", $line = 147), $out += " ", $line = 148;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 153, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 162, 0 == totalPage ? ($out += " 0/0 ", $line = 164) : ($out += " ", $line = 165, 
            $out += $escape(pageNo + 1), $out += "/", $line = 165, $out += $escape(totalPage), 
            $out += " ", $line = 166), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row financialCount globalAdd" >\r\n    <div class="search-area  Company">\r\n        <div class="form-group">\r\n            <div class="col-xs-2">\r\n                <input type="text" value="{{searchParam.tripNumber}}" name ="chooseTripNumber" class="col-xs-12 clearBlur" placeholder="全部团号" />\r\n                <input type="hidden" value="{{searchParam.tripNumber}}" name="tripNumber" />\r\n            </div>\r\n\r\n            <div class="col-xs-1">\r\n                <input type="text" value="{{searchParam.lineProductName}}" name="chooseLineProductName" class="col-xs-12 clearBlur" placeholder="全部线路产品" />\r\n                <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n            </div>\r\n\r\n            <div class="col-xs-1">\r\n                <input type="text" value="{{searchParam.guideName}}" name="chooseGuideRealName" class="col-xs-12 clearBlur" placeholder="全部的导游" />\r\n                <input type="hidden" value="{{searchParam.guideId}}" name="guideId" />\r\n            </div>\r\n            <div class="col-xs-1">\r\n                <input type="text" value="{{searchParam.startTime}}" name="startTime" class="col-xs-10 date-picker" placeholder="开始日期" />\r\n            </div>\r\n            <div class="col-xs-1" style="margin-left: -15px">\r\n                <input type="text" value="{{searchParam.endTime}}" name="entTime" class="col-xs-10 date-picker" placeholder="结束日期" />\r\n            </div>\r\n            <div class=" btn-status btn-group" >\r\n                <button data-value="{{searchParam.billStatus}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n                    <span>\r\n                        {{if searchParam.billStatus == \'-1\'}}\r\n                            待报账\r\n                        {{else if searchParam.billStatus == \'0\'}}\r\n                            待审核\r\n                        {{else if searchParam.billStatus == \'1\'}}\r\n                            计调已审\r\n                        {{else if searchParam.billStatus == \'2\'}}\r\n                            财务已审\r\n                        {{else}}\r\n                            全部\r\n                        {{/if}}\r\n                    </span>\r\n                    <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                </button>\r\n                <ul class="dropdown-menu marginLeft-30">\r\n                    <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                    <li><a data-value="-1" href="javascript:void(0)">待报账</a></li>\r\n                    <li><a data-value="0" href="javascript:void(0)">待审核</a></li>\r\n                    <li><a data-value="1" href="javascript:void(0)">计调已审</a></li>\r\n                    <li><a data-value="2" href="javascript:void(0)">财务已审</a></li>\r\n                </ul>\r\n            </div>\r\n            <button class=" btn-sm  btn-arrangeTourist-search marginLeft-30 search-btn" >\r\n                <i class="ace-icon fa fa-search"></i>\r\n                搜索\r\n            </button>\r\n           </div>\r\n    </div>\r\n    <div class="row ticketList">\r\n        <div class="col-xs-12 row">\r\n            <table class="table table-striped table-bordered table-hover" style="margin-top: 20px">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th >团号</th>\r\n                    <th >出团日期</th>\r\n                    <th >完团日期</th>\r\n                    <th >线路产品</th>\r\n                    <th >人数</th>\r\n                    <th >团队人数</th>\r\n                    <th >导游</th>\r\n                    <th >车牌号</th>\r\n                    <th >收入</th>\r\n                    <th >成本</th>\r\n                    <th >毛利</th>\r\n                    <th >人均毛利</th>\r\n                    <th style="width: 100px;!important">审核状态</th>\r\n                    <th >审核人</th>\r\n                    <th style="width: 100px;!important">操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each tripPlanList as financialTripPlan}}\r\n                    {{if financialTripPlan != null}}\r\n                    <tr data-entity-id="{{financialTripPlan.id}}">\r\n                    <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.tripPlan.tripNumber}}</td>\r\n                    {{if financialTripPlan.tripPlan.tripPlanDetails.length == 0}}\r\n                        <td>{{if financialTripPlan.tripPlan != null}}{{financialTripPlan.tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                        <td>{{if financialTripPlan.tripPlan != null}}{{financialTripPlan.tripPlan.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                        <td>{{financialTripPlan.tripPlan.lineProduct.name}}</td>\r\n                        <td>{{financialTripPlan.tripPlan.touristAdultCount + financialTripPlan.tripPlan.touristChildCount}}</td>\r\n                    {{else}}\r\n                        {{each financialTripPlan.tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n                        {{if index == 0}}\r\n                            <td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>{{tripPlanDetails.lineProductName}}</td>\r\n                            <td>{{tripPlanDetails.sumMemberCount}}</td>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.tripPlan.touristAdultCount+financialTripPlan.tripPlan.touristChildCount}}</td>\r\n                    <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{if financialTripPlan.tripPlan.guide != null}}{{financialTripPlan.tripPlan.guide.realname}}{{/if}}</td>\r\n                    <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{if financialTripPlan.tripPlan.bus != null}}{{financialTripPlan.tripPlan.bus.licenseNumber}}{{/if}}</td>\r\n                    <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.getAllMoney}}</td>\r\n                    <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.payAllMoney}}</td>\r\n                    <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.grossProfitMoney}}</td>\r\n                    <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{financialTripPlan.perGrossProfitMoney}}</td>\r\n                    <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>{{if financialTripPlan.tripPlan.billStatus == -1}}\r\n                        <font color="#ff9900">待报账</font>\r\n                        {{else if financialTripPlan.tripPlan.billStatus == 0}}\r\n                        <font color="#ff9900">待审核</font>\r\n                        {{else if financialTripPlan.tripPlan.billStatus == 1}}\r\n                        <font color="green">计调已审</font>\r\n                        {{else if financialTripPlan.tripPlan.billStatus == 2}}\r\n                        <font color="green">财务已审</font>\r\n                        {{/if}}\r\n                    </td>\r\n                    <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n                        {{if financialTripPlan.tripPlan.billStatus == 2}}\r\n                            {{if financialTripPlan.tripPlan.financialCheckUser != null}}{{financialTripPlan.tripPlan.financialCheckUser.realName}}{{/if}}\r\n                        {{else if financialTripPlan.tripPlan.billStatus == 1}}\r\n                            {{if financialTripPlan.tripPlan.oPCheckUser != null}}{{financialTripPlan.tripPlan.oPCheckUser.realName}}{{/if}}\r\n                        {{/if}}\r\n                    </td>\r\n                    <td style="vertical-align:middle" {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}rowspan="{{financialTripPlan.tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n                       <a data-entity-billStatus="{{financialTripPlan.tripPlan.billStatus}}" data-entity-id="{{financialTripPlan.id}}" class="cursor btn-count-update R-right R-left" data-left="1190003" data-right="1190002">\r\n                              审核\r\n                       </a>\r\n                       <a data-entity-id="{{financialTripPlan.id}}" class=" btn-count-examine cursor R-right" data-right="1190001">\r\n                       <label class="padding-right20"> |</label>\r\n                              明细\r\n                        </a>\r\n                        <a data-entity-billStatus="{{financialTripPlan.tripPlan.billStatus}}" data-entity-id="{{financialTripPlan.id}}" class="cursor R-right btn-guide-account" data-right="1190004">\r\n                        <label class="padding-right20"> |</label>\r\n                              报账\r\n                       </a>\r\n                   </td> \r\n                    </tr>\r\n                    {{if financialTripPlan.tripPlan.tripPlanDetails.length > 1}}\r\n                    {{each financialTripPlan.tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n                        {{if index>0}}\r\n                        <tr>\r\n                            <td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>{{tripPlanDetails.lineProductName}}</td>\r\n                            <td>{{tripPlanDetails.sumMemberCount}}</td>\r\n                        </tr>\r\n                        {{/if}}\r\n                    {{/each}}\r\n                    {{/if}}\r\n                    {{/if}}\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                        <ul class="pagination">\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                                <a href="javascript:void(0)">\r\n                                    {{if totalPage == 0}}\r\n                                    0/0\r\n                                    {{else}}\r\n                                    {{pageNo+1}}/{{totalPage}}\r\n                                    {{/if}}\r\n                                </a>\r\n                            </li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});