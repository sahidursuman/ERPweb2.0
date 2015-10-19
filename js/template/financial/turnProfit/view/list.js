/*TMODJS:{"debug":true,"version":192,"md5":"b71fdf3a6df352bbdecd1ff77376ad27"}*/
define(function(require) {
    return require("../../../template")("financial/turnProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, sumAdultCount = $data.sumAdultCount, sumChildCount = $data.sumChildCount, sumNeedIncomeMoney = $data.sumNeedIncomeMoney, sumNeedPayMoney = $data.sumNeedPayMoney, sumGrossProfit = $data.sumGrossProfit, sumAveragerGrossProfit = $data.sumAveragerGrossProfit, $each = $utils.$each, touristGroupTransferList = $data.touristGroupTransferList, recordSize = ($data.turnProfit, 
            $data.index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row resource_hotel" > <div class="col-sm-12"> <div class="form-group"> <div class="search-area border" style="margin:0px;border-style:solid solid none solid"> <div class="col-xs-1"> <input type="text" value="', 
            $line = 6, $out += $escape(searchParam.lineProductName), $out += '" name="chooseLineProductName" class="col-xs-12 clearBlur" placeholder="线路产品" /> <input type="hidden" value="', 
            $line = 7, $out += $escape(searchParam.lineProductId), $out += '" name="lineProductId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 10, $out += $escape(searchParam.partnerAgencyName), $out += '" name="chooseLineTurnprofits" class="col-xs-12" placeholder="组团社" /> <input type="hidden" value="', 
            $line = 11, $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 14, $out += $escape(searchParam.transferPartnerAgencyName), $out += '" name="partnerTurnprofits" class="col-xs-12" placeholder="同行地接" /> <input type="hidden" value="', 
            $line = 15, $out += $escape(searchParam.transferPartnerAgencyId), $out += '" name="transferPartnerAgencyId" /> </div> <div class="col-xs-3"> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 date-picker" name="startTime" placeholder="开始日期" value="', 
            $line = 20, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 date-picker" name="endTime" placeholder="结束日期" value="', 
            $line = 28, $out += $escape(searchParam.endTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <button class="btn-sm btn-height search-btn btn-arrangeTourist-search" style="border-top-width: 4px;border-bottom-width: 4px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div style="clear:both;height:0px;line-height:0px;"></div> </div> <div class="form-group border" style="margin:0px;border-style:dashed solid solid solid" > <label class="control-label" style="margin-left:12px;">总人数：', 
            $line = 45, $out += $escape(sumAdultCount), $out += " 大 ", $line = 45, $out += $escape(sumChildCount), 
            $out += ' 小</label> <label class="control-label" style="margin-left:12px;">总应收：', 
            $line = 46, $out += $escape(sumNeedIncomeMoney), $out += '</label> <label class="control-label" style="margin-left:12px;">总应付：', 
            $line = 47, $out += $escape(sumNeedPayMoney), $out += '</label> <label class="control-label" style="margin-left:12px;">毛利：', 
            $line = 48, $out += $escape(sumGrossProfit), $out += '</label> <label class="control-label" style="margin-left:12px;">人均毛利：', 
            $line = 49, $out += $escape(sumAveragerGrossProfit), $out += '</label> </div> </div> <div class="row ticketList" style="margin-top:10px;"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <td class="col-sm-1"> 线路产品</td> <td> 出游日期</td> <td> 游客</td> <td> 人数</td> <td> 组团社</td> <td > 团款应收</td> <td> 中转</td> <td> 中转应付</td> <td> 同行地接</td> <td> 转客应付</td> <td> 毛利</td> <td> 人均毛利</td> </tr> </thead> <tbody> ', 
            $line = 72, $each(touristGroupTransferList, function(turnProfit) {
                $out += " <tr> <td>", $line = 74, $out += $escape(turnProfit.lineProductName), $out += "</td>  <td>", 
                $line = 76, $out += $escape($helpers.dateFormat(turnProfit.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 77, $out += $escape(turnProfit.contact), $out += '</td> <td><a href="javascript:void(0)" class="showPerson" data-entity-id = "', 
                $line = 78, $out += $escape(turnProfit.touristGroupId), $out += '">', $line = 78, 
                $out += $escape(turnProfit.adultCount), $out += "大", $line = 78, $out += $escape(turnProfit.childCount), 
                $out += "</a></td> <td>", $line = 79, $out += $escape(turnProfit.partnerAgencyName), 
                $out += '</td> <td><a href="javascript:void(0)" class="showIncomeDetail" data-entity-id = "', 
                $line = 80, $out += $escape(turnProfit.touristGroupId), $out += '">', $line = 80, 
                $out += $escape(turnProfit.needInComeMoney), $out += "</a></td> <td>", $line = 81, 
                "" == turnProfit.change ? ($out += "无", $line = 81) : ($line = 81, $out += $escape(turnProfit.change), 
                $line = 81), $out += '</td> <td><a href="javascript:void(0)" class="showChangeNeedPayDetail" data-entity-id = "', 
                $line = 82, $out += $escape(turnProfit.touristGroupId), $out += '">', $line = 82, 
                $out += $escape(turnProfit.changeNeedPayMoney), $out += "</a></td> <td>", $line = 83, 
                $out += $escape(turnProfit.transferPartnerAgencyName), $out += '</td> <td> <a href="javascript:void(0)" class="showTransNeedPayDeatil" data-entity-id = "', 
                $line = 85, $out += $escape(turnProfit.tgTransferId), $out += '">', $line = 85, 
                $out += $escape(turnProfit.transNeedPayAllMoney), $out += '</a> </td> <td> <span style="color: red">', 
                $line = 88, $out += $escape(turnProfit.grossProfit), $out += '</span> </td> <td> <span style="color: red"> ', 
                $line = 91, $out += $escape(turnProfit.averageGrossProfit), $out += "</span> </td> </tr> ", 
                $line = 94;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 99, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 108, 0 == totalPage ? ($out += " 0/0 ", $line = 110) : ($out += " ", $line = 111, 
            $out += $escape(pageNo + 1), $out += "/", $line = 111, $out += $escape(totalPage), 
            $out += " ", $line = 112), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row resource_hotel" >\r\n    <div class="col-sm-12">\r\n        <div class="form-group">\r\n            <div class="search-area border" style="margin:0px;border-style:solid solid none solid">\r\n                    <div class="col-xs-1">\r\n                        <input type="text" value="{{searchParam.lineProductName}}" name="chooseLineProductName" class="col-xs-12 clearBlur" placeholder="线路产品" />\r\n                        <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n                    </div>\r\n                <div class="col-xs-1">\r\n                    <input type="text" value="{{searchParam.partnerAgencyName}}"  name="chooseLineTurnprofits" class="col-xs-12" placeholder="组团社" />\r\n                    <input type="hidden" value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" />\r\n                </div>\r\n                <div class="col-xs-1">\r\n                    <input type="text" value="{{searchParam.transferPartnerAgencyName}}" name="partnerTurnprofits" class="col-xs-12" placeholder="同行地接" />\r\n                    <input type="hidden" value="{{searchParam.transferPartnerAgencyId}}" name="transferPartnerAgencyId" />\r\n                </div>\r\n                <div class="col-xs-3">\r\n                    <div class="col-xs-6">\r\n                        <div class="input-group">\r\n                            <input class="col-xs-12 date-picker" name="startTime" placeholder="开始日期" value="{{searchParam.startTime}}" type="text" />\r\n                        <span class="input-group-addon">\r\n                            <i class="fa fa-calendar"></i>\r\n                        </span>\r\n                        </div>\r\n                    </div>  \r\n                    <div class="col-xs-6">    \r\n                        <div class="input-group">\r\n                            <input class="col-xs-12 date-picker" name="endTime" placeholder="结束日期" value="{{searchParam.endTime}}" type="text" />\r\n                        <span class="input-group-addon">\r\n                            <i class="fa fa-calendar"></i>   \r\n                        </span>  \r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class="col-xs-2">\r\n                    <button class="btn-sm  btn-height search-btn btn-arrangeTourist-search" style="border-top-width: 4px;border-bottom-width: 4px;">\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                         搜索\r\n                    </button>\r\n                </div>\r\n                <div style="clear:both;height:0px;line-height:0px;"></div>\r\n                </div>\r\n                <div class="form-group border" style="margin:0px;border-style:dashed solid solid solid" >\r\n                    <label class="control-label" style="margin-left:12px;">总人数：{{sumAdultCount}} 大 {{sumChildCount}} 小</label>\r\n                    <label class="control-label" style="margin-left:12px;">总应收：{{sumNeedIncomeMoney}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">总应付：{{sumNeedPayMoney}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">毛利：{{sumGrossProfit}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">人均毛利：{{sumAveragerGrossProfit}}</label>\r\n                </div>\r\n            </div>\r\n<div class="row ticketList" style="margin-top:10px;">\r\n    <div class="col-xs-12">\r\n        <table class="table table-striped table-bordered table-hover">\r\n            <thead>\r\n            <tr class="bg-blur">\r\n                 <td class="col-sm-1"> 线路产品</td>\r\n                 <td> 出游日期</td>\r\n                 <td> 游客</td>  \r\n                 <td> 人数</td>\r\n                 <td> 组团社</td>   \r\n                 <td > 团款应收</td>\r\n                 <td> 中转</td>\r\n                 <td> 中转应付</td>\r\n                 <td> 同行地接</td>\r\n                 <td> 转客应付</td>  \r\n                 <td> 毛利</td>\r\n                 <td> 人均毛利</td>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            {{each touristGroupTransferList as turnProfit index}}\r\n            <tr>  \r\n                <td>{{turnProfit.lineProductName}}</td>\r\n                <!--给日期转码-->\r\n                <td>{{turnProfit.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{turnProfit.contact}}</td>\r\n                <td><a href="javascript:void(0)" class="showPerson" data-entity-id = "{{turnProfit.touristGroupId}}">{{turnProfit.adultCount}}大{{turnProfit.childCount}}</a></td>\r\n                <td>{{turnProfit.partnerAgencyName}}</td>\r\n                <td><a href="javascript:void(0)" class="showIncomeDetail" data-entity-id = "{{turnProfit.touristGroupId}}">{{turnProfit.needInComeMoney}}</a></td>\r\n                <td>{{if turnProfit.change == ""}}无{{else}}{{turnProfit.change}}{{/if}}</td>\r\n                <td><a href="javascript:void(0)" class="showChangeNeedPayDetail"  data-entity-id = "{{turnProfit.touristGroupId}}">{{turnProfit.changeNeedPayMoney}}</a></td>\r\n                <td>{{turnProfit.transferPartnerAgencyName}}</td> \r\n                <td>\r\n                    <a href="javascript:void(0)" class="showTransNeedPayDeatil" data-entity-id = "{{turnProfit.tgTransferId}}">{{turnProfit.transNeedPayAllMoney}}</a>\r\n                </td>\r\n                <td>\r\n                    <span style="color: red">{{turnProfit.grossProfit}}</span>\r\n                </td>\r\n                <td>\r\n                  <span style="color: red"> {{turnProfit.averageGrossProfit}}</span>\r\n                </td>\r\n            </tr>   \r\n            {{/each}}\r\n            </tbody>  \r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                    <ul class="pagination">\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                            <a href="javascript:void(0)">\r\n                                {{if totalPage == 0}}\r\n                                0/0\r\n                                {{else}}\r\n                                {{pageNo+1}}/{{totalPage}}\r\n                                {{/if}}\r\n                            </a>\r\n                        </li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});