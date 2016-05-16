/*TMODJS:{"debug":true,"version":370,"md5":"9e86f04d67996cfcc621a036ae9a17d7"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, sumAdultCount = $data.sumAdultCount, sumChildCount = $data.sumChildCount, sumTripIncome = $data.sumTripIncome, sumOutCost = $data.sumOutCost, sumInnerCost = $data.sumInnerCost, sumProfit = $data.sumProfit, sumAverProfit = $data.sumAverProfit, $each = $utils.$each, touristGroupInnerTransferList = $data.touristGroupInnerTransferList, recordSize = ($data.innerTransferList, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="financial_innerTransferInProfit col-xs-12" > <div class="row"> <div class="form-inline search-area T-search-area"> <div class="form-group mar-r-10"> <label class="control-label"><span>线路产品：</span></label> <input type="text" value="', 
            $line = 6, $out += $escape(searchParam.lineProductName), $out += '" name="lineProductName" placeholder="线路产品" /> <input type="hidden" value="', 
            $line = 7, $out += $escape(searchParam.lineProductId), $out += '" name="lineProductId" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>客户：</span></label> <input type="text" value="', 
            $line = 11, $out += $escape(searchParam.partnerAgencyName), $out += '" name="partnerAgencyName" placeholder="组团社" /> <input type="hidden" value="', 
            $line = 12, $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>部门：</span></label> <input type="text" value="', 
            $line = 16, $out += $escape(searchParam.toBusinessGroupName), $out += '" name="toBusinessGroupName" placeholder="部门" /> <input type="hidden" value="', 
            $line = 17, $out += $escape(searchParam.toBusinessGroupId), $out += '" name="toBusinessGroupId" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>收客单号：</span></label> <input type="text" value="', 
            $line = 21, $out += $escape(searchParam.indexOrderNumber), $out += '" name="indexOrderNumber" placeholder="收客单号" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>开始日期：</span></label> <input type="text" value="', 
            $line = 25, $out += $escape(searchParam.startTime), $out += '" name="startTime" class="datepicker" style="width:100px;" placeholder="开始日期" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>结束日期：</span></label> <input class="datepicker" name="endTime" placeholder="结束日期" value="', 
            $line = 29, $out += $escape(searchParam.endTime), $out += '" type="text" /> </div> <div class="form-group"> <button class="btn-sm btn-height search-btn T-search" style="border-top-width: 4px;border-bottom-width: 4px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="form-group"> <label class="control-label">总人数：<span class="F-float F-count">', 
            $line = 39, $out += $escape(sumAdultCount), $out += " 大 ", $line = 39, $out += $escape(sumChildCount), 
            $out += ' 小</span></label> <label class="control-label marginLeft-30">团款应收合计：<span class="F-float F-money">', 
            $line = 40, $out += $escape(sumTripIncome), $out += "</span></label> ", $line = 41, 
            "1" == searchParam.isSelectTransfer && ($out += ' <label class="control-label marginLeft-30">中转成本合计：<span class="F-float F-money">', 
            $line = 42, $out += $escape(sumOutCost), $out += "</span></label> ", $line = 43), 
            $out += ' <label class="control-label marginLeft-30">内转成本合计：<span class="F-float F-money">', 
            $line = 44, $out += $escape(sumInnerCost), $out += '</span></label> <label class="control-label marginLeft-30">毛利合计：<span class="F-float F-money">', 
            $line = 45, $out += $escape(sumProfit), $out += '</span></label> <label class="control-label marginLeft-30">人均毛利(不含小孩)：<span class="F-float F-money">', 
            $line = 46, $out += $escape(sumAverProfit), $out += '</span></label> <label class="pos-rel pull-right"> <input type="checkbox" class="ace T-checkTurn" ', 
            $line = 48, "1" == searchParam.isSelectTransfer && ($out += 'checked="checked"', 
            $line = 48), $out += '/> <span class="lbl"> 核算中转</span> </label> </div> </div> <div class="row ticketList"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>收客单号</th>  <th class="col-sm-1">线路产品</th> <th>出游日期</th> <th>游客</th> <th>人数</th> <th>客户</th>  <th>收客部门</th> <th>团款应收</th> ', 
            $line = 67, "1" == searchParam.isSelectTransfer && ($out += " <th>中转</th> <th>中转成本</th> ", 
            $line = 70), $out += ' <th>接收部门</th> <th>内转成本</th> <th>毛利</th> <th>人均毛利</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 78, $each(touristGroupInnerTransferList, function(innerTransferList) {
                $out += ' <tr data-id = "', $line = 79, $out += $escape(innerTransferList.touristGroupId), 
                $out += '" lineProductId="', $line = 79, $out += $escape(innerTransferList.lineProductId), 
                $out += '" tgTransferId = "', $line = 79, $out += $escape(innerTransferList.InnerTransferId), 
                $out += '"> <td><a href="javascript:void(0)" class="T-option T-lineProductDetail">', 
                $line = 80, null == innerTransferList.orderNumber || "" == innerTransferList.orderNumber ? ($out += "-", 
                $line = 80) : ($line = 80, $out += $escape(innerTransferList.orderNumber), $line = 80), 
                $out += "</a></td> <!-- <td>", $line = 81, $out += $escape(innerTransferList.fromBusinessGroupName), 
                $out += "</td> --> <td>", $line = 82, $out += $escape(innerTransferList.lineProductName), 
                $out += "</td>  <td>", $line = 84, $out += $escape($helpers.dateFormat(innerTransferList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 85, null == innerTransferList.contact || "" == innerTransferList.contact ? ($out += "无", 
                $line = 85) : ($line = 85, $out += $escape(innerTransferList.contact), $line = 85), 
                $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showTourist"> <span class="F-float F-count">', 
                $line = 87, $out += $escape(innerTransferList.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 88, $out += $escape(innerTransferList.childCount), $out += "</span>小 </a> </td> <td>", 
                $line = 91, null == innerTransferList.area || "" == innerTransferList.area ? ($out += "-", 
                $line = 91) : ($line = 91, $out += $escape(innerTransferList.area), $line = 91), 
                $out += "</td> <td>", $line = 92, innerTransferList.fromBusinessGroupName ? ($line = 92, 
                $out += $escape(innerTransferList.fromBusinessGroupName), $line = 92) : ($out += "无", 
                $line = 92), $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showIncomeDetail"> <span class="F-float F-money">', 
                $line = 94, $out += $escape(innerTransferList.needInComeMoney), $out += "</span> </a> </td> ", 
                $line = 97, "1" == searchParam.isSelectTransfer && ($out += " <td>", $line = 98, 
                null == innerTransferList.change || "" == innerTransferList.change ? ($out += "-", 
                $line = 98) : ($line = 98, $out += $escape(innerTransferList.change), $line = 98), 
                $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showChangePay"> <span class="F-float F-money">', 
                $line = 100, $out += $escape(innerTransferList.totalPaySettlementMoney), $out += "</span> </a> </td> ", 
                $line = 103), $out += " <td>", $line = 104, null == innerTransferList.toBusinessGroupName || "" == innerTransferList.toBusinessGroupName ? ($out += "无", 
                $line = 104) : ($line = 104, $out += $escape(innerTransferList.toBusinessGroupName), 
                $line = 104), $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showTransPay" data-inner-id = "', 
                $line = 105, $out += $escape(innerTransferList.InnerTransferId), $out += '"> <span class="F-float F-money">', 
                $line = 106, $out += $escape(innerTransferList.transNeedPayAllMoney), $out += '</span> </a> </td> <td> <span class="F-float F-money" style="color: red">', 
                $line = 110, $out += $escape(innerTransferList.grossProfit), $out += '</span> </td> <td> <span class="F-float F-money" style="color: red"> ', 
                $line = 113, $out += $escape(innerTransferList.averageGrossProfit), $out += "</span> </td> </tr> ", 
                $line = 116;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 121, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="financial_innerTransferInProfit col-xs-12" >\r\n    <div class="row">\r\n        <div class="form-inline search-area T-search-area">\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label"><span>线路产品：</span></label>\r\n                <input type="text" value="{{searchParam.lineProductName}}" name="lineProductName" placeholder="线路产品" />\r\n                <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n            <label class="control-label"><span>客户：</span></label>\r\n                <input type="text" value="{{searchParam.partnerAgencyName}}"  name="partnerAgencyName"  placeholder="组团社" />\r\n                <input type="hidden" value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n            <label class="control-label"><span>部门：</span></label>\r\n                <input type="text" value="{{searchParam.toBusinessGroupName}}" name="toBusinessGroupName" placeholder="部门" />\r\n                <input type="hidden" value="{{searchParam.toBusinessGroupId}}" name="toBusinessGroupId" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label"><span>收客单号：</span></label>\r\n                <input type="text" value="{{searchParam.indexOrderNumber}}" name="indexOrderNumber" placeholder="收客单号" />\r\n            </div>\r\n            <div class="form-group mar-r-10"> \r\n                <label class="control-label"><span>开始日期：</span></label>\r\n                <input type="text" value="{{searchParam.startTime}}" name="startTime" class="datepicker" style="width:100px;" placeholder="开始日期" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label"><span>结束日期：</span></label>\r\n                <input class="datepicker" name="endTime" placeholder="结束日期" value="{{searchParam.endTime}}" type="text" />\r\n            </div>\r\n            <div class="form-group">\r\n                <button class="btn-sm  btn-height search-btn T-search" style="border-top-width: 4px;border-bottom-width: 4px;">\r\n                    <i class="ace-icon fa fa-search"></i>\r\n                     搜索\r\n                </button>\r\n            </div>\r\n        </div>\r\n        <div class="form-group">\r\n            <label class="control-label">总人数：<span class="F-float F-count">{{sumAdultCount}} 大 {{sumChildCount}} 小</span></label>\r\n            <label class="control-label marginLeft-30">团款应收合计：<span class="F-float F-money">{{sumTripIncome}}</span></label>\r\n            {{if searchParam.isSelectTransfer == "1"}}\r\n            <label class="control-label marginLeft-30">中转成本合计：<span class="F-float F-money">{{sumOutCost}}</span></label>\r\n            {{/if}}\r\n            <label class="control-label marginLeft-30">内转成本合计：<span class="F-float F-money">{{sumInnerCost}}</span></label>\r\n            <label class="control-label marginLeft-30">毛利合计：<span class="F-float F-money">{{sumProfit}}</span></label>\r\n            <label class="control-label marginLeft-30">人均毛利(不含小孩)：<span class="F-float F-money">{{sumAverProfit }}</span></label>\r\n            <label class="pos-rel pull-right">\r\n                <input type="checkbox" class="ace T-checkTurn" {{if searchParam.isSelectTransfer == "1"}}checked="checked"{{/if}}/> \r\n                <span class="lbl"> 核算中转</span>\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class="row ticketList">\r\n        <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n            <thead>\r\n            <tr class="bg-blur T-tr-fixed">\r\n                <th>收客单号</th>\r\n                <!-- <th>转出部门</th> -->\r\n                <th class="col-sm-1">线路产品</th>\r\n                <th>出游日期</th>\r\n                <th>游客</th>\r\n                <th>人数</th>\r\n                <th>客户</th>\r\n                <!-- <th>组团社</th> -->\r\n                <th>收客部门</th>   \r\n                <th>团款应收</th> \r\n                {{if searchParam.isSelectTransfer == "1"}}\r\n                <th>中转</th>\r\n                <th>中转成本</th>\r\n                {{/if}}\r\n                <th>接收部门</th>\r\n                <th>内转成本</th>  \r\n                <th>毛利</th>\r\n                <th>人均毛利</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody class="T-list">\r\n            {{each touristGroupInnerTransferList as innerTransferList index}}\r\n            <tr data-id = "{{innerTransferList.touristGroupId}}" lineProductId="{{innerTransferList.lineProductId}}" tgTransferId = "{{innerTransferList.InnerTransferId}}"> \r\n                <td><a href="javascript:void(0)" class="T-option T-lineProductDetail">{{if innerTransferList.orderNumber == null || innerTransferList.orderNumber == ""}}-{{else}}{{innerTransferList.orderNumber}}{{/if}}</a></td>\r\n                <!-- <td>{{innerTransferList.fromBusinessGroupName}}</td> --> \r\n                <td>{{innerTransferList.lineProductName}}</td>\r\n                <!--给日期转码-->\r\n                <td>{{innerTransferList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{if innerTransferList.contact == null || innerTransferList.contact ==""}}无{{else}}{{innerTransferList.contact}}{{/if}}</td>\r\n                <td><a href="javascript:void(0)" class="T-option T-showTourist">\r\n                        <span class="F-float F-count">{{innerTransferList.adultCount}}</span>大\r\n                        <span class="F-float F-count">{{innerTransferList.childCount}}</span>小\r\n                    </a>\r\n                </td>\r\n                <td>{{if innerTransferList.area == null || innerTransferList.area == ""}}-{{else}}{{innerTransferList.area}}{{/if}}</td>\r\n                <td>{{if !innerTransferList.fromBusinessGroupName}}无{{else}}{{innerTransferList.fromBusinessGroupName}}{{/if}}</td>\r\n                <td><a href="javascript:void(0)" class="T-option T-showIncomeDetail">\r\n                        <span class="F-float F-money">{{innerTransferList.needInComeMoney}}</span>\r\n                    </a>\r\n                </td>\r\n                {{if searchParam.isSelectTransfer == "1"}}\r\n                <td>{{if innerTransferList.change == null || innerTransferList.change == ""}}-{{else}}{{innerTransferList.change}}{{/if}}</td> \r\n                <td><a href="javascript:void(0)" class="T-option T-showChangePay">\r\n                        <span class="F-float F-money">{{innerTransferList.totalPaySettlementMoney}}</span>\r\n                    </a>\r\n                </td>\r\n                {{/if}}\r\n                <td>{{if innerTransferList.toBusinessGroupName == null || innerTransferList.toBusinessGroupName == ""}}无{{else}}{{innerTransferList.toBusinessGroupName}}{{/if}}</td> \r\n                <td><a href="javascript:void(0)" class="T-option T-showTransPay" data-inner-id = "{{innerTransferList.InnerTransferId}}">\r\n                        <span class="F-float F-money">{{innerTransferList.transNeedPayAllMoney}}</span>\r\n                    </a>\r\n                </td>\r\n                <td>\r\n                    <span class="F-float F-money" style="color: red">{{innerTransferList.grossProfit}}</span>\r\n                </td>\r\n                <td>\r\n                   <span class="F-float F-money" style="color: red"> {{innerTransferList.averageGrossProfit}}</span>\r\n                </td>\r\n            </tr>   \r\n            {{/each}}\r\n            </tbody>  \r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});