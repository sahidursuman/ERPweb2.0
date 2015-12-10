/*TMODJS:{"debug":true,"version":114,"md5":"3138b51b3d3f626a4c1d1723146b04e2"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, sumPersonCount = $data.sumPersonCount, sumNeedIncomeMoney = $data.sumNeedIncomeMoney, sumNeedPayMoney = $data.sumNeedPayMoney, sumGrossProfit = $data.sumGrossProfit, sumAveragerGrossProfit = $data.sumAveragerGrossProfit, $each = $utils.$each, touristGroupInnerTransferList = $data.touristGroupInnerTransferList, recordSize = ($data.innerTransferList, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row financial_innerTransferInProfit" > <div class="col-sm-12"> <div class="form-group"> <div class="search-area border T-search-area" style="margin:0px;border-style:solid solid none solid"> <div class="col-xs-1"> <input type="text" value="', 
            $line = 6, $out += $escape(searchParam.lineProductName), $out += '" name="lineProductName" class="col-xs-12 clearBlur" placeholder="线路产品" /> <input type="hidden" value="', 
            $line = 7, $out += $escape(searchParam.lineProductId), $out += '" name="lineProductId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 10, $out += $escape(searchParam.partnerAgencyName), $out += '" name="partnerAgencyName" class="col-xs-12" placeholder="组团社" /> <input type="hidden" value="', 
            $line = 11, $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 14, $out += $escape(searchParam.toBusinessGroupName), $out += '" name="toBusinessGroupName" class="col-xs-12" placeholder="部门" /> <input type="hidden" value="', 
            $line = 15, $out += $escape(searchParam.toBusinessGroupId), $out += '" name="toBusinessGroupId" /> </div> <div class="col-xs-3"> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 date-picker" name="startTime" placeholder="开始日期" value="', 
            $line = 20, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 date-picker" name="endTime" placeholder="结束日期" value="', 
            $line = 28, $out += $escape(searchParam.endTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <button class="btn-sm btn-height search-btn T-search" style="border-top-width: 4px;border-bottom-width: 4px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div style="clear:both;height:0px;line-height:0px;"></div> </div> <div class="form-group border" style="margin:0px;border-style:dashed solid solid solid" > <label class="control-label" style="margin-left:12px;">总人数：', 
            $line = 45, $out += $escape(sumPersonCount), $out += '</label> <label class="control-label" style="margin-left:12px;">团款应收合计：', 
            $line = 46, $out += $escape(sumNeedIncomeMoney), $out += '</label> <label class="control-label" style="margin-left:12px;">中转成本合计：', 
            $line = 47, $out += $escape(sumNeedPayMoney), $out += '</label> <label class="control-label" style="margin-left:12px;">内转成本合计：', 
            $line = 48, $out += $escape(sumGrossProfit), $out += '</label> <label class="control-label" style="margin-left:12px;">毛利合计：', 
            $line = 49, $out += $escape(sumGrossProfit), $out += '</label> <label class="control-label" style="margin-left:12px;">人均毛利合计：', 
            $line = 50, $out += $escape(sumAveragerGrossProfit), $out += '</label> </div> </div> <div class="row ticketList" style="margin-top:10px;"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th class="col-sm-1"> 线路产品</th> <th> 出游日期</th> <th> 游客</th> <th> 人数</th> <th> 组团社</th> <th> 团款应收</th> <th> 中转</th> <th> 中转成本</th> <th> 部门</th> <th> 内转成本</th> <th> 毛利</th> <th> 人均毛利</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 73, $each(touristGroupInnerTransferList, function(innerTransferList) {
                $out += ' <tr data-id = "', $line = 74, $out += $escape(innerTransferList.touristGroupId), 
                $out += '" tgTransferId = "', $line = 74, $out += $escape(innerTransferList.InnerTransferId), 
                $out += '"> <td>', $line = 75, $out += $escape(innerTransferList.lineProductName), 
                $out += "</td>  <td>", $line = 77, $out += $escape($helpers.dateFormat(innerTransferList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 78, null == innerTransferList.contact || "" == innerTransferList.contact ? ($out += "无", 
                $line = 78) : ($line = 78, $out += $escape(innerTransferList.contact), $line = 78), 
                $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showTourist"> ', 
                $line = 80, $out += $escape(innerTransferList.adultCount), $out += "大", $line = 80, 
                $out += $escape(innerTransferList.childCount), $out += "小</a></td> <td>", $line = 81, 
                null == innerTransferList.partnerAgencyName || "" == innerTransferList.partnerAgencyName ? ($out += "无", 
                $line = 81) : ($line = 81, $out += $escape(innerTransferList.partnerAgencyName), 
                $line = 81), $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showIncomeDetail">', 
                $line = 82, $out += $escape(innerTransferList.needInComeMoney), $out += "</a></td> <td>", 
                $line = 83, null == innerTransferList.change || "" == innerTransferList.change ? ($out += "无", 
                $line = 83) : ($line = 83, $out += $escape(innerTransferList.change), $line = 83), 
                $out += '</td> <td><a href="javascript:void(0)" class="T-option T-showChangePay">', 
                $line = 84, $out += $escape(innerTransferList.changeNeedPayMoney), $out += "</a></td> <td>", 
                $line = 85, null == innerTransferList.toBusinessGroupName || "" == innerTransferList.toBusinessGroupName ? ($out += "无", 
                $line = 85) : ($line = 85, $out += $escape(innerTransferList.toBusinessGroupName), 
                $line = 85), $out += '</td> <td> <a href="javascript:void(0)" class="T-option T-showTransPay" data-inner-id = "', 
                $line = 87, $out += $escape(innerTransferList.InnerTransferId), $out += '">', $line = 87, 
                $out += $escape(innerTransferList.transNeedPayAllMoney), $out += '</a> </td> <td> <span style="color: red">', 
                $line = 90, $out += $escape(innerTransferList.grossProfit), $out += '</span> </td> <td> <span style="color: red"> ', 
                $line = 93, $out += $escape(innerTransferList.averageGrossProfit), $out += "</span> </td> </tr> ", 
                $line = 96;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 101, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row financial_innerTransferInProfit" >\r\n    <div class="col-sm-12">\r\n        <div class="form-group">\r\n            <div class="search-area border T-search-area" style="margin:0px;border-style:solid solid none solid">\r\n                <div class="col-xs-1">\r\n                    <input type="text" value="{{searchParam.lineProductName}}" name="lineProductName" class="col-xs-12 clearBlur" placeholder="线路产品" />\r\n                    <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n                </div>\r\n                <div class="col-xs-1">\r\n                    <input type="text" value="{{searchParam.partnerAgencyName}}"  name="partnerAgencyName" class="col-xs-12" placeholder="组团社" />\r\n                    <input type="hidden" value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" />\r\n                </div>\r\n                <div class="col-xs-1">\r\n                    <input type="text" value="{{searchParam.toBusinessGroupName}}" name="toBusinessGroupName" class="col-xs-12" placeholder="部门" />\r\n                    <input type="hidden" value="{{searchParam.toBusinessGroupId}}" name="toBusinessGroupId" />\r\n                </div>\r\n                <div class="col-xs-3">\r\n                    <div class="col-xs-6">\r\n                        <div class="input-group">\r\n                            <input class="col-xs-12 date-picker" name="startTime" placeholder="开始日期" value="{{searchParam.startTime}}" type="text" />\r\n                        <span class="input-group-addon">\r\n                            <i class="fa fa-calendar"></i>\r\n                        </span>\r\n                        </div>\r\n                    </div>  \r\n                    <div class="col-xs-6">    \r\n                        <div class="input-group">\r\n                            <input class="col-xs-12 date-picker" name="endTime" placeholder="结束日期" value="{{searchParam.endTime}}" type="text" />\r\n                        <span class="input-group-addon">\r\n                            <i class="fa fa-calendar"></i>   \r\n                        </span>  \r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class="col-xs-2">\r\n                    <button class="btn-sm  btn-height search-btn T-search" style="border-top-width: 4px;border-bottom-width: 4px;">\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                         搜索\r\n                    </button>\r\n                </div>\r\n                <div style="clear:both;height:0px;line-height:0px;"></div>\r\n                </div>\r\n                <div class="form-group border" style="margin:0px;border-style:dashed solid solid solid" >\r\n                    <label class="control-label" style="margin-left:12px;">总人数：{{sumPersonCount}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">团款应收合计：{{sumNeedIncomeMoney}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">中转成本合计：{{sumNeedPayMoney}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">内转成本合计：{{sumGrossProfit}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">毛利合计：{{sumGrossProfit}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">人均毛利合计：{{sumAveragerGrossProfit}}</label>\r\n                </div>\r\n            </div>\r\n            <div class="row ticketList" style="margin-top:10px;">\r\n                <div class="col-xs-12">\r\n                    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                        <thead>\r\n                        <tr class="bg-blur">\r\n                             <th class="col-sm-1"> 线路产品</th>\r\n                             <th> 出游日期</th>\r\n                             <th> 游客</th>  \r\n                             <th> 人数</th>\r\n                             <th> 组团社</th>   \r\n                             <th> 团款应收</th>\r\n                             <th> 中转</th>\r\n                             <th> 中转成本</th>\r\n                             <th> 部门</th>\r\n                             <th> 内转成本</th>  \r\n                             <th> 毛利</th>\r\n                             <th> 人均毛利</th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody class="T-list">\r\n                        {{each touristGroupInnerTransferList as innerTransferList index}}\r\n                        <tr data-id = "{{innerTransferList.touristGroupId}}" tgTransferId = "{{innerTransferList.InnerTransferId}}">  \r\n                            <td>{{innerTransferList.lineProductName}}</td>\r\n                            <!--给日期转码-->\r\n                            <td>{{innerTransferList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                            <td>{{if innerTransferList.contact == null || innerTransferList.contact ==""}}无{{else}}{{innerTransferList.contact}}{{/if}}</td>\r\n                            <td><a href="javascript:void(0)" class="T-option T-showTourist">\r\n                            {{innerTransferList.adultCount}}大{{innerTransferList.childCount}}小</a></td>\r\n                            <td>{{if innerTransferList.partnerAgencyName == null || innerTransferList.partnerAgencyName == ""}}无{{else}}{{innerTransferList.partnerAgencyName}}{{/if}}</td>\r\n                            <td><a href="javascript:void(0)" class="T-option T-showIncomeDetail">{{innerTransferList.needInComeMoney}}</a></td>\r\n                            <td>{{if innerTransferList.change == null || innerTransferList.change == ""}}无{{else}}{{innerTransferList.change}}{{/if}}</td> \r\n                            <td><a href="javascript:void(0)" class="T-option T-showChangePay">{{innerTransferList.changeNeedPayMoney}}</a></td>\r\n                            <td>{{if innerTransferList.toBusinessGroupName == null || innerTransferList.toBusinessGroupName == ""}}无{{else}}{{innerTransferList.toBusinessGroupName}}{{/if}}</td> \r\n                            <td>\r\n                                <a href="javascript:void(0)" class="T-option T-showTransPay" data-inner-id = "{{innerTransferList.InnerTransferId}}">{{innerTransferList.transNeedPayAllMoney}}</a>\r\n                            </td>\r\n                            <td>\r\n                                <span style="color: red">{{innerTransferList.grossProfit}}</span>\r\n                            </td>\r\n                            <td>\r\n                              <span style="color: red"> {{innerTransferList.averageGrossProfit}}</span>\r\n                            </td>\r\n                        </tr>   \r\n                        {{/each}}\r\n                        </tbody>  \r\n                    </table>\r\n                    <div class="row pageMode">\r\n                        <div class="col-xs-6">\r\n                            <small>共计 {{recordSize}} 条记录</small>\r\n                        </div>\r\n                        <div class="col-xs-6">\r\n                            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});