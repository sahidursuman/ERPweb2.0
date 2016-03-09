/*TMODJS:{"debug":true,"version":398,"md5":"2f03cccaf30b62adb713d8da702923e5"}*/
define(function(require) {
    return require("../../../template")("financial/turnProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, sumAdultCount = $data.sumAdultCount, sumChildCount = $data.sumChildCount, sumTripIncome = $data.sumTripIncome, sumOutCost = $data.sumOutCost, sumTransCost = $data.sumTransCost, sumProfit = $data.sumProfit, sumAverProfit = $data.sumAverProfit, $each = $utils.$each, touristGroupTransferList = $data.touristGroupTransferList, recordSize = ($data.turnProfit, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="resource_hotel"> <div class="row"> <div class="form-inline search-area T-search-area"> <div class="form-group mar-r-10"> <label class="control-label"><span>线路产品 </span></label> <input type="text" value="', 
            $line = 6, $out += $escape(searchParam.lineProductName), $out += '" name="lineProductName" placeholder="线路产品" /> <input type="hidden" value="', 
            $line = 7, $out += $escape(searchParam.lineProductId), $out += '" name="lineProductId" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>客户 </span></label> <input type="text" value="', 
            $line = 11, $out += $escape(searchParam.partnerAgencyName), $out += '" name="partnerAgencyName" placeholder="客户" /> <input type="hidden" value="', 
            $line = 12, $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>同行地接 </span></label> <input type="text" value="', 
            $line = 16, $out += $escape(searchParam.toBusinessGroupName), $out += '" name="toBusinessGroupName" placeholder="同行地接" /> <input type="hidden" value="', 
            $line = 17, $out += $escape(searchParam.toBusinessGroupId), $out += '" name="toBusinessGroupId" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>收客单号 </span></label> <input type="text" value="', 
            $line = 21, $out += $escape(searchParam.orderNumber), $out += '" name="orderNumber" placeholder="收客单号" /> </div> <div> <div class="form-group mar-r-10"> <label class="control-label"><span>开始日期 </span></label> <input class="date-picker" name="startTime" placeholder="开始日期" value="', 
            $line = 26, $out += $escape(searchParam.startTime), $out += '" type="text" style="width:100px;" /> </div> <div class="form-group mar-r-10"> <label class="control-label"><span>结束日期 </span></label> <input class="date-picker" name="endTime" placeholder="结束日期" value="', 
            $line = 30, $out += $escape(searchParam.endTime), $out += '" type="text" style="width:100px;" /> </div> <div class="form-group mar-r-10"> <button class="btn-sm btn-height search-btn T-search" style="border-top-width: 4px;border-bottom-width: 4px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </div> <div class="form-group"> <label class="control-label mar-r-20">总人数：<span class="F-float F-count">', 
            $line = 40, $out += $escape(sumAdultCount), $out += '</span> 大 <span class="F-float F-count">', 
            $line = 40, $out += $escape(sumChildCount), $out += '</span> 小</label> <label class="control-label mar-r-20">团款应收合计：<span class="F-float F-money">', 
            $line = 41, $out += $escape(sumTripIncome), $out += "</span></label> ", $line = 42, 
            1 == searchParam.type && ($out += ' <label class="control-label mar-r-20">中转成本合计：<span class="F-float F-money">', 
            $line = 43, $out += $escape(sumOutCost), $out += "</span></label> ", $line = 44), 
            $out += ' <label class="control-label mar-r-20">外转成本合计：<span class="F-float F-money">', 
            $line = 45, $out += $escape(sumTransCost), $out += '</span></label> <label class="control-label mar-r-20">毛利合计：<span class="F-float F-money">', 
            $line = 46, $out += $escape(sumProfit), $out += '</span></label> <label class="control-label ">人均毛利合计：<span class="F-float F-money">', 
            $line = 47, $out += $escape(sumAverProfit), $out += '</span></label> <label class="pos-rel pull-right"> <input type="checkbox" class="ace T-checkTurn" ', 
            $line = 49, 1 == searchParam.type && ($out += 'checked="checked" ', $line = 49), 
            $out += '/> <span class="lbl"> 核算中转</span> </label> </div> </div> <div class="row ticketList"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>收客单号</th> <th class="col-sm-1">线路产品</th> <th>出游日期</th> <th>游客</th> <th>人数</th> <th>客户</th> <th>团款应收</th> ', 
            $line = 65, 1 == searchParam.type && ($out += " <th>中转</th> <th>中转成本</th> ", $line = 68), 
            $out += " <th>同行地接</th> <th>外转成本</th> <th>毛利</th> <th>人均毛利</th> </tr> </thead> <tbody> ", 
            $line = 76, $each(touristGroupTransferList, function(turnProfit) {
                $out += ' <tr data-id="', $line = 77, $out += $escape(turnProfit.touristGroupId), 
                $out += '" lineProductId="', $line = 77, $out += $escape(turnProfit.lineProductId), 
                $out += '" tgTransferId="', $line = 77, $out += $escape(turnProfit.tgTransferId), 
                $out += '"> <td><a href="javascript:void(0)" class="T-option T-lineProductDetail">', 
                $line = 78, null == turnProfit.orderNumber || "" == turnProfit.orderNumber ? ($out += "-", 
                $line = 78) : ($line = 78, $out += $escape(turnProfit.orderNumber), $line = 78), 
                $out += "</a></td> <td>", $line = 79, $out += $escape(turnProfit.lineProductName), 
                $out += "</td>  <td>", $line = 81, $out += $escape($helpers.dateFormat(turnProfit.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 82, $out += $escape(turnProfit.contact), $out += '</td> <td> <a href="javascript:void(0)" class="T-option T-showTourist"> <span class="F-float F-count">', 
                $line = 85, $out += $escape(turnProfit.adultCount), $out += '</span>大 <span class="F-float F-count">', 
                $line = 86, $out += $escape(turnProfit.childCount), $out += "</span>小 </a> </td> <td>", 
                $line = 89, $out += $escape(turnProfit.partnerAgencyName), $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showIncomeDetail F-float F-money">', 
                $line = 90, $out += $escape(turnProfit.settlementMoney), $out += "</a></td> ", $line = 91, 
                1 == searchParam.type && ($out += " <td>", $line = 92, "" == turnProfit.change ? ($out += "-", 
                $line = 92) : ($line = 92, $out += $escape(turnProfit.change), $line = 92), $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showChangePay F-float F-money">', 
                $line = 93, $out += $escape(turnProfit.changeNeedPayMoney), $out += "</a></td> ", 
                $line = 94), $out += " <td>", $line = 95, $out += $escape(turnProfit.transferPartnerAgencyName), 
                $out += '</td> <td> <a href="javascript:void(0)" class="T-option T-showTransPay F-float F-money" data-id="', 
                $line = 97, $out += $escape(turnProfit.tgTransferId), $out += '">', $line = 97, 
                $out += $escape(turnProfit.transNeedPayAllMoney), $out += '</a> </td> <td> <span class="F-float F-money" style="color: red">', 
                $line = 100, $out += $escape(turnProfit.grossProfit), $out += '</span> </td> <td> <span class="F-float F-money" style="color: red"> ', 
                $line = 103, $out += $escape(turnProfit.averageGrossProfit), $out += "</span> </td> </tr> ", 
                $line = 106;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 111, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="resource_hotel">\r\n    <div class="row">\r\n        <div class="form-inline search-area T-search-area">\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label"><span>线路产品 </span></label>\r\n                <input type="text" value="{{searchParam.lineProductName}}" name="lineProductName" placeholder="线路产品" />\r\n                <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label"><span>客户 </span></label>\r\n                <input type="text" value="{{searchParam.partnerAgencyName}}" name="partnerAgencyName" placeholder="客户" />\r\n                <input type="hidden" value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label"><span>同行地接 </span></label>\r\n                <input type="text" value="{{searchParam.toBusinessGroupName}}" name="toBusinessGroupName" placeholder="同行地接" />\r\n                <input type="hidden" value="{{searchParam.toBusinessGroupId}}" name="toBusinessGroupId" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label"><span>收客单号 </span></label>\r\n                <input type="text" value="{{searchParam.orderNumber}}" name="orderNumber" placeholder="收客单号" />\r\n            </div>\r\n            <div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label"><span>开始日期 </span></label>\r\n                    <input class="date-picker" name="startTime" placeholder="开始日期" value="{{searchParam.startTime}}" type="text" style="width:100px;" />\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label"><span>结束日期 </span></label>\r\n                    <input class="date-picker" name="endTime" placeholder="结束日期" value="{{searchParam.endTime}}" type="text" style="width:100px;" />\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <button class="btn-sm  btn-height search-btn T-search" style="border-top-width: 4px;border-bottom-width: 4px;">\r\n                        <i class="ace-icon fa fa-search"></i> 搜索\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="form-group">\r\n            <label class="control-label mar-r-20">总人数：<span class="F-float F-count">{{sumAdultCount}}</span> 大 <span class="F-float F-count">{{sumChildCount}}</span> 小</label>\r\n            <label class="control-label mar-r-20">团款应收合计：<span class="F-float F-money">{{sumTripIncome}}</span></label>\r\n            {{if searchParam.type == 1}}\r\n            <label class="control-label mar-r-20">中转成本合计：<span class="F-float F-money">{{sumOutCost}}</span></label>\r\n            {{/if}}\r\n            <label class="control-label mar-r-20">外转成本合计：<span class="F-float F-money">{{sumTransCost}}</span></label>\r\n            <label class="control-label mar-r-20">毛利合计：<span class="F-float F-money">{{sumProfit}}</span></label>\r\n            <label class="control-label ">人均毛利合计：<span class="F-float F-money">{{sumAverProfit}}</span></label>\r\n            <label class="pos-rel pull-right">\r\n                <input type="checkbox" class="ace T-checkTurn" {{if searchParam.type==1 }}checked="checked" {{/if}}/>\r\n                <span class="lbl"> 核算中转</span>\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class="row ticketList">\r\n        <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n            <thead>\r\n                <tr class="bg-blur T-tr-fixed">\r\n                    <th>收客单号</th>\r\n                    <th class="col-sm-1">线路产品</th>\r\n                    <th>出游日期</th>\r\n                    <th>游客</th>\r\n                    <th>人数</th>\r\n                    <th>客户</th>\r\n                    <th>团款应收</th>\r\n                    {{if searchParam.type == 1}}\r\n                    <th>中转</th>\r\n                    <th>中转成本</th>\r\n                    {{/if}}\r\n                    <th>同行地接</th>\r\n                    <th>外转成本</th>\r\n                    <th>毛利</th>\r\n                    <th>人均毛利</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                {{each touristGroupTransferList as turnProfit index}}\r\n                <tr data-id="{{turnProfit.touristGroupId}}" lineProductId="{{turnProfit.lineProductId}}" tgTransferId="{{turnProfit.tgTransferId}}">\r\n                    <td><a href="javascript:void(0)" class="T-option T-lineProductDetail">{{if turnProfit.orderNumber == null || turnProfit.orderNumber == ""}}-{{else}}{{turnProfit.orderNumber}}{{/if}}</a></td>\r\n                    <td>{{turnProfit.lineProductName}}</td>\r\n                    <!--给日期转码-->\r\n                    <td>{{turnProfit.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                    <td>{{turnProfit.contact}}</td>\r\n                    <td>\r\n                        <a href="javascript:void(0)" class="T-option T-showTourist">\r\n                            <span class="F-float F-count">{{turnProfit.adultCount}}</span>大\r\n                            <span class="F-float F-count">{{turnProfit.childCount}}</span>小\r\n                        </a>\r\n                    </td>\r\n                    <td>{{turnProfit.partnerAgencyName}}</td>\r\n                    <td><a href="javascript:void(0)" class="T-option T-showIncomeDetail F-float F-money">{{turnProfit.settlementMoney}}</a></td>\r\n                    {{if searchParam.type == 1}}\r\n                    <td>{{if turnProfit.change == ""}}-{{else}}{{turnProfit.change}}{{/if}}</td>\r\n                    <td><a href="javascript:void(0)" class="T-option T-showChangePay F-float F-money">{{turnProfit.changeNeedPayMoney}}</a></td>\r\n                    {{/if}}\r\n                    <td>{{turnProfit.transferPartnerAgencyName}}</td>\r\n                    <td>\r\n                        <a href="javascript:void(0)" class="T-option T-showTransPay F-float F-money" data-id="{{turnProfit.tgTransferId}}">{{turnProfit.transNeedPayAllMoney}}</a>\r\n                    </td>\r\n                    <td>\r\n                        <span class="F-float F-money" style="color: red">{{turnProfit.grossProfit}}</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class="F-float F-money" style="color: red"> {{turnProfit.averageGrossProfit}}</span>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});