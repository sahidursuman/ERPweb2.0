/*TMODJS:{"debug":true,"version":250,"md5":"ec7cdada3ea0e1551f4830a875711150"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, sumAdultCount = $data.sumAdultCount, sumChildCount = $data.sumChildCount, sumTripIncome = $data.sumTripIncome, sumOutCost = $data.sumOutCost, sumInnerCost = $data.sumInnerCost, sumProfit = $data.sumProfit, sumAverProfit = $data.sumAverProfit, $each = $utils.$each, touristGroupInnerTransferList = $data.touristGroupInnerTransferList, recordSize = ($data.innerTransferList, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="financial_innerTransferInProfit" > <div class="row border" style="padding: 0 20px;"> <div class="form-inline search-area T-search-area" style="padding-top:10px;"> <div class="form-group"> <label class="control-label"><span>线路产品：</span></label> <input type="text" value="', 
            $line = 6, $out += $escape(searchParam.lineProductName), $out += '" name="lineProductName" placeholder="线路产品" /> <input type="hidden" value="', 
            $line = 7, $out += $escape(searchParam.lineProductId), $out += '" name="lineProductId" /> </div> <div class="form-group mar-l-10"> <label class="control-label"><span>组团社：</span></label> <input type="text" value="', 
            $line = 11, $out += $escape(searchParam.partnerAgencyName), $out += '" name="partnerAgencyName" placeholder="组团社" /> <input type="hidden" value="', 
            $line = 12, $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" /> </div> <div class="form-group mar-l-10"> <label class="control-label"><span>部门：</span></label> <input type="text" value="', 
            $line = 16, $out += $escape(searchParam.toBusinessGroupName), $out += '" name="toBusinessGroupName" placeholder="部门" /> <input type="hidden" value="', 
            $line = 17, $out += $escape(searchParam.toBusinessGroupId), $out += '" name="toBusinessGroupId" /> </div> <div class="form-group mar-l-10"> <label class="control-label"><span>开始日期：</span></label> <input type="text" value="', 
            $line = 21, $out += $escape(searchParam.startTime), $out += '" name="startTime" class="date-picker" style="width:100px;" placeholder="开始日期" /> </div> <div class="form-group mar-l-10"> <label class="control-label"><span>结束日期：</span></label> <input class="date-picker" name="endTime" placeholder="结束日期" value="', 
            $line = 25, $out += $escape(searchParam.endTime), $out += '" type="text" /> </div> <div class="form-group marginLeft-30"> <button class="btn-sm btn-height search-btn T-search" style="border-top-width: 4px;border-bottom-width: 4px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="form-group"> <label class="control-label">总人数：', 
            $line = 35, $out += $escape(sumAdultCount + sumChildCount), $out += '</label> <label class="control-label marginLeft-30">团款应收合计：', 
            $line = 36, $out += $escape(sumTripIncome), $out += '</label> <label class="control-label marginLeft-30">中转成本合计：', 
            $line = 37, $out += $escape(sumOutCost), $out += '</label> <label class="control-label marginLeft-30">内转成本合计：', 
            $line = 38, $out += $escape(sumInnerCost), $out += '</label> <label class="control-label marginLeft-30">毛利合计：', 
            $line = 39, $out += $escape(sumProfit), $out += '</label> <label class="control-label marginLeft-30">人均毛利合计：', 
            $line = 40, $out += $escape(sumAverProfit), $out += '</label> </div> </div> <div class="row ticketList" style="margin-top:10px;"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th> 转出部门</th> <th class="col-sm-1">线路产品</th> <th> 出游日期</th> <th> 游客</th> <th> 人数</th> <th> 组团社</th> <th> 团款应收</th> <th> 中转</th> <th> 中转成本</th> <th> 转入部门</th> <th> 内转成本</th> <th> 毛利</th> <th> 人均毛利</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 63, $each(touristGroupInnerTransferList, function(innerTransferList) {
                $out += ' <tr data-id = "', $line = 64, $out += $escape(innerTransferList.touristGroupId), 
                $out += '" lineProductId="', $line = 64, $out += $escape(innerTransferList.lineProductId), 
                $out += '" tgTransferId = "', $line = 64, $out += $escape(innerTransferList.InnerTransferId), 
                $out += '"> <td>', $line = 65, $out += $escape(innerTransferList.fromBusinessGroupName), 
                $out += '</td> <td><a href="javascript:void(0)" class="T-option T-lineProductDetail">', 
                $line = 66, $out += $escape(innerTransferList.lineProductName), $out += "</a></td>  <td>", 
                $line = 68, $out += $escape($helpers.dateFormat(innerTransferList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 69, null == innerTransferList.contact || "" == innerTransferList.contact ? ($out += "无", 
                $line = 69) : ($line = 69, $out += $escape(innerTransferList.contact), $line = 69), 
                $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showTourist"> ', 
                $line = 71, $out += $escape(innerTransferList.adultCount), $out += "大", $line = 71, 
                $out += $escape(innerTransferList.childCount), $out += "小</a></td> <td>", $line = 72, 
                null == innerTransferList.partnerAgencyName || "" == innerTransferList.partnerAgencyName ? ($out += "无", 
                $line = 72) : ($line = 72, $out += $escape(innerTransferList.partnerAgencyName), 
                $line = 72), $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showIncomeDetail">', 
                $line = 73, $out += $escape(innerTransferList.needInComeMoney), $out += "</a></td> <td>", 
                $line = 74, null == innerTransferList.change || "" == innerTransferList.change ? ($out += "无", 
                $line = 74) : ($line = 74, $out += $escape(innerTransferList.change), $line = 74), 
                $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showChangePay">', 
                $line = 75, $out += $escape(innerTransferList.changeNeedPayMoney), $out += "</a></td> <td>", 
                $line = 76, null == innerTransferList.toBusinessGroupName || "" == innerTransferList.toBusinessGroupName ? ($out += "无", 
                $line = 76) : ($line = 76, $out += $escape(innerTransferList.toBusinessGroupName), 
                $line = 76), $out += '</td> <td> <a href="javascript:void(0)" class="T-option T-showTransPay" data-inner-id = "', 
                $line = 78, $out += $escape(innerTransferList.InnerTransferId), $out += '">', $line = 78, 
                $out += $escape(innerTransferList.transNeedPayAllMoney), $out += '</a> </td> <td> <span style="color: red">', 
                $line = 81, $out += $escape(innerTransferList.grossProfit), $out += '</span> </td> <td> <span style="color: red"> ', 
                $line = 84, $out += $escape(innerTransferList.averageGrossProfit), $out += "</span> </td> </tr> ", 
                $line = 87;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 92, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="financial_innerTransferInProfit" >\r\n    <div class="row border" style="padding: 0 20px;">\r\n        <div class="form-inline search-area T-search-area" style="padding-top:10px;">\r\n            <div class="form-group">\r\n                <label class="control-label"><span>线路产品：</span></label>\r\n                <input type="text" value="{{searchParam.lineProductName}}" name="lineProductName" placeholder="线路产品" />\r\n                <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n            <label class="control-label"><span>组团社：</span></label>\r\n                <input type="text" value="{{searchParam.partnerAgencyName}}"  name="partnerAgencyName"  placeholder="组团社" />\r\n                <input type="hidden" value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" />\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n            <label class="control-label"><span>部门：</span></label>\r\n                <input type="text" value="{{searchParam.toBusinessGroupName}}" name="toBusinessGroupName" placeholder="部门" />\r\n                <input type="hidden" value="{{searchParam.toBusinessGroupId}}" name="toBusinessGroupId" />\r\n            </div>\r\n            <div class="form-group mar-l-10"> \r\n                <label class="control-label"><span>开始日期：</span></label>\r\n                <input type="text" value="{{searchParam.startTime}}" name="startTime" class="date-picker" style="width:100px;" placeholder="开始日期" />\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label"><span>结束日期：</span></label>\r\n                <input class="date-picker" name="endTime" placeholder="结束日期" value="{{searchParam.endTime}}" type="text" />\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <button class="btn-sm  btn-height search-btn T-search" style="border-top-width: 4px;border-bottom-width: 4px;">\r\n                    <i class="ace-icon fa fa-search"></i>\r\n                     搜索\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class="form-group">\r\n            <label class="control-label">总人数：{{sumAdultCount+sumChildCount}}</label>\r\n            <label class="control-label marginLeft-30">团款应收合计：{{sumTripIncome}}</label>\r\n            <label class="control-label marginLeft-30">中转成本合计：{{sumOutCost}}</label>\r\n            <label class="control-label marginLeft-30">内转成本合计：{{sumInnerCost}}</label>\r\n            <label class="control-label marginLeft-30">毛利合计：{{sumProfit}}</label>\r\n            <label class="control-label marginLeft-30">人均毛利合计：{{sumAverProfit }}</label>\r\n        </div>\r\n    </div>\r\n    <div class="row ticketList" style="margin-top:10px;">\r\n        <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n            <thead>\r\n            <tr class="bg-blur">\r\n                 <th> 转出部门</th>\r\n                 <th class="col-sm-1">线路产品</th>\r\n                 <th> 出游日期</th>\r\n                 <th> 游客</th>  \r\n                 <th> 人数</th>\r\n                 <th> 组团社</th>   \r\n                 <th> 团款应收</th> \r\n                 <th> 中转</th>\r\n                 <th> 中转成本</th>\r\n                 <th> 转入部门</th>\r\n                 <th> 内转成本</th>  \r\n                 <th> 毛利</th>\r\n                 <th> 人均毛利</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody class="T-list">\r\n            {{each touristGroupInnerTransferList as innerTransferList index}}\r\n            <tr data-id = "{{innerTransferList.touristGroupId}}" lineProductId="{{innerTransferList.lineProductId}}" tgTransferId = "{{innerTransferList.InnerTransferId}}"> \r\n                <td>{{innerTransferList.fromBusinessGroupName}}</td> \r\n                <td><a href="javascript:void(0)" class="T-option T-lineProductDetail">{{innerTransferList.lineProductName}}</a></td>\r\n                <!--给日期转码-->\r\n                <td>{{innerTransferList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{if innerTransferList.contact == null || innerTransferList.contact ==""}}无{{else}}{{innerTransferList.contact}}{{/if}}</td>\r\n                <td><a href="javascript:void(0)" class="T-option T-showTourist">\r\n                {{innerTransferList.adultCount}}大{{innerTransferList.childCount}}小</a></td>\r\n                <td>{{if innerTransferList.partnerAgencyName == null || innerTransferList.partnerAgencyName == ""}}无{{else}}{{innerTransferList.partnerAgencyName}}{{/if}}</td>\r\n                <td><a href="javascript:void(0)" class="T-option T-showIncomeDetail">{{innerTransferList.needInComeMoney}}</a></td>\r\n                <td>{{if innerTransferList.change == null || innerTransferList.change == ""}}无{{else}}{{innerTransferList.change}}{{/if}}</td> \r\n                <td><a href="javascript:void(0)" class="T-option T-showChangePay">{{innerTransferList.changeNeedPayMoney}}</a></td>\r\n                <td>{{if innerTransferList.toBusinessGroupName == null || innerTransferList.toBusinessGroupName == ""}}无{{else}}{{innerTransferList.toBusinessGroupName}}{{/if}}</td> \r\n                <td>\r\n                    <a href="javascript:void(0)" class="T-option T-showTransPay" data-inner-id = "{{innerTransferList.InnerTransferId}}">{{innerTransferList.transNeedPayAllMoney}}</a>\r\n                </td>\r\n                <td>\r\n                    <span style="color: red">{{innerTransferList.grossProfit}}</span>\r\n                </td>\r\n                <td>\r\n                  <span style="color: red"> {{innerTransferList.averageGrossProfit}}</span>\r\n                </td>\r\n            </tr>   \r\n            {{/each}}\r\n            </tbody>  \r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});