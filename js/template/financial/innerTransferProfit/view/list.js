/*TMODJS:{"debug":true,"version":76,"md5":"50eb12a247fb11519b0c80a565dd840d"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, sumPersonCount = $data.sumPersonCount, sumNeedIncomeMoney = $data.sumNeedIncomeMoney, sumNeedPayMoney = $data.sumNeedPayMoney, sumGrossProfit = $data.sumGrossProfit, sumAveragerGrossProfit = $data.sumAveragerGrossProfit, $each = $utils.$each, touristGroupInnerTransferList = $data.touristGroupInnerTransferList, recordSize = ($data.innerTransferList, 
            $data.index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row financial_innerTransferInProfit" > <div class="col-sm-12"> <div class="form-group"> <div class="search-area border" style="margin:0px;border-style:solid solid none solid"> <div class="col-xs-1"> <input type="text" value="', 
            $line = 6, $out += $escape(searchParam.lineProductName), $out += '" name="lineProductName" class="col-xs-12 clearBlur" placeholder="线路产品" /> <input type="hidden" value="', 
            $line = 7, $out += $escape(searchParam.lineProductId), $out += '" name="lineProductId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 10, $out += $escape(searchParam.partnerAgencyName), $out += '" name="partnerAgencyName" class="col-xs-12" placeholder="组团社" /> <input type="hidden" value="', 
            $line = 11, $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" /> </div> <div class="col-xs-1"> <input type="text" value="', 
            $line = 14, $out += $escape(searchParam.toBusinessGroupName), $out += '" name="toBusinessGroupName" class="col-xs-12" placeholder="部门" /> <input type="hidden" value="', 
            $line = 15, $out += $escape(searchParam.toBusinessGroupId), $out += '" name="toBusinessGroupId" /> </div> <div class="col-xs-3"> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 date-picker" name="startTime" placeholder="开始日期" value="', 
            $line = 20, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 date-picker" name="endTime" placeholder="结束日期" value="', 
            $line = 28, $out += $escape(searchParam.endTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <button class="btn-sm btn-height search-btn btn-arrangeTourist-search" style="border-top-width: 4px;border-bottom-width: 4px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div style="clear:both;height:0px;line-height:0px;"></div> </div> <div class="form-group border" style="margin:0px;border-style:dashed solid solid solid" > <label class="control-label" style="margin-left:12px;">总人数：', 
            $line = 45, $out += $escape(sumPersonCount), $out += '</label> <label class="control-label" style="margin-left:12px;">总应收：', 
            $line = 46, $out += $escape(sumNeedIncomeMoney), $out += '</label> <label class="control-label" style="margin-left:12px;">总应付：', 
            $line = 47, $out += $escape(sumNeedPayMoney), $out += '</label> <label class="control-label" style="margin-left:12px;">毛利：', 
            $line = 48, $out += $escape(sumGrossProfit), $out += '</label> <label class="control-label" style="margin-left:12px;">人均毛利：', 
            $line = 49, $out += $escape(sumAveragerGrossProfit), $out += '</label> </div> </div> <div class="row ticketList" style="margin-top:10px;"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <td class="col-sm-1"> 线路产品</td> <td> 出游日期</td> <td> 游客</td> <td> 人数</td> <td> 组团社</td> <td> 款项应收</td> <td> 中转</td> <td> 中转应付</td> <td> 部门</td> <td> 内转应付</td> <td> 毛利</td> <td> 人均毛利</td> </tr> </thead> <tbody> ', 
            $line = 72, $each(touristGroupInnerTransferList, function(innerTransferList) {
                $out += " <tr> <td>", $line = 74, $out += $escape(innerTransferList.lineProductName), 
                $out += "</td>  <td>", $line = 76, $out += $escape($helpers.dateFormat(innerTransferList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 77, $out += $escape(innerTransferList.contact), $out += '</td> <td><a href="javascript:void(0)" class="showPerson" data-entity-id = "', 
                $line = 78, $out += $escape(innerTransferList.touristGroupId), $out += '">', $line = 78, 
                $out += $escape(innerTransferList.adultCount), $out += "大", $line = 78, $out += $escape(innerTransferList.childCount), 
                $out += "</a></td> <td>", $line = 79, $out += $escape(innerTransferList.partnerAgencyName), 
                $out += '</td> <td><a href="javascript:void(0)" class="showIncomeDetail" data-entity-id = "', 
                $line = 80, $out += $escape(innerTransferList.touristGroupId), $out += '">', $line = 80, 
                $out += $escape(innerTransferList.needInComMoney), $out += "</a></td> <td>", $line = 81, 
                $out += $escape(innerTransferList.change), $out += '</td> <td><a href="javascript:void(0)" class="showChangeNeedPayDetail" data-entity-id = "', 
                $line = 82, $out += $escape(innerTransferList.touristGroupId), $out += '">', $line = 82, 
                $out += $escape(innerTransferList.changeNeedPayMoney), $out += "</a></td> <td>", 
                $line = 83, null == innerTransferList.toBusinessGroupName || "" == innerTransferList.toBusinessGroupName ? ($out += "无", 
                $line = 83) : ($line = 83, $out += $escape(innerTransferList.toBusinessGroupName), 
                $line = 83), $out += '</td> <td> <a href="javascript:void(0)" class="showTransNeedPayDeatil" data-entity-id = "', 
                $line = 85, $out += $escape(innerTransferList.InnerTransferId), $out += '">', $line = 85, 
                $out += $escape(innerTransferList.transNeedPayAllMoney), $out += '</a> </td> <td> <span style="color: red">', 
                $line = 88, $out += $escape(innerTransferList.grossProfit), $out += '</span> </td> <td> <span style="color: red"> ', 
                $line = 91, $out += $escape(innerTransferList.averageGrossProfit), $out += "</span> </td> </tr> ", 
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
                source: '<div class="row financial_innerTransferInProfit" >\r\n    <div class="col-sm-12">\r\n        <div class="form-group">\r\n            <div class="search-area border" style="margin:0px;border-style:solid solid none solid">\r\n                    <div class="col-xs-1">\r\n                        <input type="text" value="{{searchParam.lineProductName}}" name="lineProductName" class="col-xs-12 clearBlur" placeholder="线路产品" />\r\n                        <input type="hidden" value="{{searchParam.lineProductId}}" name="lineProductId" />\r\n                    </div>\r\n                <div class="col-xs-1">\r\n                    <input type="text" value="{{searchParam.partnerAgencyName}}"  name="partnerAgencyName" class="col-xs-12" placeholder="组团社" />\r\n                    <input type="hidden" value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" />\r\n                </div>\r\n                <div class="col-xs-1">\r\n                    <input type="text" value="{{searchParam.toBusinessGroupName}}" name="toBusinessGroupName" class="col-xs-12" placeholder="部门" />\r\n                    <input type="hidden" value="{{searchParam.toBusinessGroupId}}" name="toBusinessGroupId" />\r\n                </div>\r\n                <div class="col-xs-3">\r\n                    <div class="col-xs-6">\r\n                        <div class="input-group">\r\n                            <input class="col-xs-12 date-picker" name="startTime" placeholder="开始日期" value="{{searchParam.startTime}}" type="text" />\r\n                        <span class="input-group-addon">\r\n                            <i class="fa fa-calendar"></i>\r\n                        </span>\r\n                        </div>\r\n                    </div>  \r\n                    <div class="col-xs-6">    \r\n                        <div class="input-group">\r\n                            <input class="col-xs-12 date-picker" name="endTime" placeholder="结束日期" value="{{searchParam.endTime}}" type="text" />\r\n                        <span class="input-group-addon">\r\n                            <i class="fa fa-calendar"></i>   \r\n                        </span>  \r\n                        </div>\r\n\r\n                    </div>\r\n                </div>\r\n                <div class="col-xs-2">\r\n                    <button class="btn-sm  btn-height search-btn btn-arrangeTourist-search" style="border-top-width: 4px;border-bottom-width: 4px;">\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                         搜索\r\n                    </button>\r\n                </div>\r\n                <div style="clear:both;height:0px;line-height:0px;"></div>\r\n                </div>\r\n                <div class="form-group border" style="margin:0px;border-style:dashed solid solid solid" >\r\n                    <label class="control-label" style="margin-left:12px;">总人数：{{sumPersonCount}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">总应收：{{sumNeedIncomeMoney}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">总应付：{{sumNeedPayMoney}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">毛利：{{sumGrossProfit}}</label>\r\n                    <label class="control-label" style="margin-left:12px;">人均毛利：{{sumAveragerGrossProfit}}</label>\r\n                </div>\r\n            </div>\r\n<div class="row ticketList" style="margin-top:10px;">\r\n    <div class="col-xs-12">\r\n        <table class="table table-striped table-bordered table-hover">\r\n            <thead>\r\n            <tr class="bg-blur">\r\n                 <td class="col-sm-1"> 线路产品</td>\r\n                 <td> 出游日期</td>\r\n                 <td> 游客</td>  \r\n                 <td> 人数</td>\r\n                 <td> 组团社</td>   \r\n                 <td> 款项应收</td>\r\n                 <td> 中转</td>\r\n                 <td> 中转应付</td>\r\n                 <td> 部门</td>\r\n                 <td> 内转应付</td>  \r\n                 <td> 毛利</td>\r\n                 <td> 人均毛利</td>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            {{each touristGroupInnerTransferList as innerTransferList index}}\r\n            <tr>  \r\n                <td>{{innerTransferList.lineProductName}}</td>\r\n                <!--给日期转码-->\r\n                <td>{{innerTransferList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{innerTransferList.contact}}</td>\r\n                <td><a href="javascript:void(0)" class="showPerson" data-entity-id = "{{innerTransferList.touristGroupId}}">{{innerTransferList.adultCount}}大{{innerTransferList.childCount}}</a></td>\r\n                <td>{{innerTransferList.partnerAgencyName}}</td>\r\n                <td><a href="javascript:void(0)" class="showIncomeDetail" data-entity-id = "{{innerTransferList.touristGroupId}}">{{innerTransferList.needInComMoney}}</a></td>\r\n                <td>{{innerTransferList.change}}</td>\r\n                <td><a href="javascript:void(0)" class="showChangeNeedPayDetail"  data-entity-id = "{{innerTransferList.touristGroupId}}">{{innerTransferList.changeNeedPayMoney}}</a></td>\r\n                <td>{{if innerTransferList.toBusinessGroupName == null || innerTransferList.toBusinessGroupName == ""}}无{{else}}{{innerTransferList.toBusinessGroupName}}{{/if}}</td> \r\n                <td>\r\n                    <a href="javascript:void(0)" class="showTransNeedPayDeatil" data-entity-id = "{{innerTransferList.InnerTransferId}}">{{innerTransferList.transNeedPayAllMoney}}</a>\r\n                </td>\r\n                <td>\r\n                    <span style="color: red">{{innerTransferList.grossProfit}}</span>\r\n                </td>\r\n                <td>\r\n                  <span style="color: red"> {{innerTransferList.averageGrossProfit}}</span>\r\n                </td>\r\n            </tr>   \r\n            {{/each}}\r\n            </tbody>  \r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                    <ul class="pagination">\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                            <a href="javascript:void(0)">\r\n                                {{if totalPage == 0}}\r\n                                0/0\r\n                                {{else}}\r\n                                {{pageNo+1}}/{{totalPage}}\r\n                                {{/if}}\r\n                            </a>\r\n                        </li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});