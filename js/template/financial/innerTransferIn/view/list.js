/*TMODJS:{"debug":true,"version":41,"md5":"d4b3659875d7344ef30936ceef2525a5"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, fromBusinessGroupList = $data.fromBusinessGroupList, $escape = ($data.innerTransferIn, 
            $data.index, $utils.$escape), searchParam = $data.searchParam, yearList = $data.yearList, monthList = ($data.year, 
            $data.monthList), financialInnerTransferInList = ($data.month, $data.financialInnerTransferInList), recordSize = ($data.$index, 
            $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += ' <div class="row FinancialinnerTransferIn" > <div class="form-horizontal search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">部门:</label> <div class="col-sm-2"> <select class="col-xs-12" name="fromBusinessGroupId"> <option value ="">全部</option> ', 
            $line = 9, $each(fromBusinessGroupList, function(innerTransferIn) {
                $out += ' <option value="', $line = 10, $out += $escape(innerTransferIn.fromBusinessGroupId), 
                $out += '" ', $line = 10, searchParam.fromBusinessGroupId == innerTransferIn.fromBusinessGroupId && ($out += 'selected="selected"', 
                $line = 10), $out += ">", $line = 10, $out += $escape(innerTransferIn.fromBusinessGroupName), 
                $out += "</option> ", $line = 11;
            }), $out += ' </select> </div> <label class="control-label col-sm-1" >账期:</label> <div class="col-sm-2" > <select class="col-sm-5" name="year" > ', 
            $line = 17, $each(yearList, function(year) {
                $out += ' <option value="', $line = 18, $out += $escape(year.value), $out += '" ', 
                $line = 18, searchParam.year == year.value && ($out += 'selected="selected"', $line = 18), 
                $out += ">", $line = 18, $out += $escape(year.value), $out += "</option> ", $line = 19;
            }), $out += ' </select> <select class="col-sm-5" name="month" style = "margin-left:10px;"> <option value ="">全部</option> ', 
            $line = 23, $each(monthList, function(month) {
                $out += ' <option value="', $line = 24, $out += $escape(month.value), $out += '" ', 
                $line = 24, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 24), $out += ">", $line = 24, $out += $escape(month.value), $out += "月</option> ", 
                $line = 25;
            }), $out += ' </select> </div> <button class="btn-height btn-sm search-btn btn-innerTransferIn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row innerTransferInList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>部门</th> <th>总人数</th> <th>总账面应收</th> <th>总实际应收</th> <th>总实际已收</th> <th>总账面未收</th> <th>总实际未收</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 47, $each(financialInnerTransferInList, function(innerTransferIn) {
                $out += " <tr> <td>", $line = 49, $out += $escape(innerTransferIn.fromBusinessGroupName), 
                $out += "</td> <td>", $line = 50, $out += $escape(innerTransferIn.allPerson), $out += "</td> <td>", 
                $line = 51, $out += $escape(innerTransferIn.realNeedIncomeMoney), $out += "</td> <td>", 
                $line = 52, $out += $escape(innerTransferIn.realIncomeMoney), $out += "</td> <td>", 
                $line = 53, $out += $escape(innerTransferIn.realIncomeMoney), $out += "</td> <td>", 
                $line = 54, $out += $escape(innerTransferIn.unIncomeMoney), $out += '</td> <td> <span style="color:red">', 
                $line = 56, $out += $escape(innerTransferIn.realUnIncomeMoney), $out += "</span> </td> <td > ", 
                $line = 60, innerTransferIn.allCount != innerTransferIn.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 61, $out += $escape(innerTransferIn.checkedCount), $line = 61, $out += $escape("/"), 
                $line = 61, $out += $escape(innerTransferIn.allCount), $out += "</span> ", $line = 62), 
                $out += " ", $line = 63, innerTransferIn.allCount == innerTransferIn.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 64, $out += $escape(innerTransferIn.checkedCount), $line = 64, $out += $escape("/"), 
                $line = 64, $out += $escape(innerTransferIn.allCount), $out += "</span> ", $line = 65), 
                $out += ' </td> <td> <a data-entity-id="', $line = 70, $out += $escape(innerTransferIn.fromBusinessGroupId), 
                $out += '" data-entity-fromBusinessGroupName="', $line = 70, $out += $escape(innerTransferIn.fromBusinessGroupName), 
                $out += '" data-entity-year="', $line = 70, $out += $escape(searchParam.year), $out += '" data-entity-month="', 
                $line = 70, $out += $escape(searchParam.month), $out += '" class="cursor btn-innerTransferIn-check " > 对账 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 73, $out += $escape(innerTransferIn.fromBusinessGroupId), $out += '" data-entity-fromBusinessGroupName="', 
                $line = 73, $out += $escape(innerTransferIn.fromBusinessGroupName), $out += '" data-entity-year="', 
                $line = 73, $out += $escape(searchParam.year), $out += '" ', $line = 74, "" == searchParam.month ? ($out += " data-entity-startMonth=1 data-entity-endMonth=12 ", 
                $line = 76) : ($out += ' data-entity-startMonth="', $line = 77, $out += $escape(searchParam.month), 
                $out += '" data-entity-endMonth="', $line = 77, $out += $escape(searchParam.month), 
                $out += '" ', $line = 78), $out += ' class="cursor btn-innerTransferIn-balance"> 结算 </a> </td> </tr> ', 
                $line = 84;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 89, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 98, 0 == totalPage ? ($out += " 0/0 ", $line = 100) : ($out += " ", $line = 101, 
            $out += $escape(pageNo + 1), $out += "/", $line = 101, $out += $escape(totalPage), 
            $out += " ", $line = 102), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n<div class="row FinancialinnerTransferIn" >\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left" style="margin-left: 15px">部门:</label>\r\n            <div class="col-sm-2">\r\n                <select  class="col-xs-12" name="fromBusinessGroupId">\r\n                    <option value ="">全部</option>    \r\n                    {{each fromBusinessGroupList as innerTransferIn index}}\r\n						<option value="{{innerTransferIn.fromBusinessGroupId}}" {{if searchParam.fromBusinessGroupId == innerTransferIn.fromBusinessGroupId}}selected="selected"{{/if}}>{{innerTransferIn.fromBusinessGroupName}}</option>\r\n					{{/each}}\r\n                </select>        \r\n             </div>    \r\n           <label class="control-label col-sm-1" >账期:</label>\r\n			<div class="col-sm-2" >\r\n				<select class="col-sm-5" name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select> \r\n				<select class="col-sm-5" name="month" style = "margin-left:10px;">\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n					{{/each}}\r\n				</select>\r\n			</div> \r\n            <button class="btn-height btn-sm search-btn btn-innerTransferIn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div>\r\n    </div>\r\n    <div class="row innerTransferInList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>部门</th>\r\n                    <th>总人数</th>\r\n                    <th>总账面应收</th>\r\n                    <th>总实际应收</th>\r\n                    <th>总实际已收</th>\r\n                    <th>总账面未收</th>\r\n                    <th>总实际未收</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each financialInnerTransferInList as innerTransferIn}}\r\n                <tr>\r\n                    <td>{{innerTransferIn.fromBusinessGroupName}}</td>\r\n                    <td>{{innerTransferIn.allPerson}}</td>\r\n                    <td>{{innerTransferIn.realNeedIncomeMoney}}</td>\r\n                    <td>{{innerTransferIn.realIncomeMoney}}</td>\r\n                    <td>{{innerTransferIn.realIncomeMoney}}</td>\r\n                    <td>{{innerTransferIn.unIncomeMoney}}</td>\r\n                    <td>\r\n                    	<span style="color:red">{{innerTransferIn.realUnIncomeMoney}}</span>\r\n                    </td>\r\n                   \r\n                    <td >\r\n	                    {{if innerTransferIn.allCount != innerTransferIn.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{innerTransferIn.checkedCount}}{{"/"}}{{innerTransferIn.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if innerTransferIn.allCount == innerTransferIn.checkedCount}}\r\n	                      <span style="color:green"> {{innerTransferIn.checkedCount}}{{"/"}}{{innerTransferIn.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                   \r\n                    \r\n                    <td>\r\n                        <a data-entity-id="{{innerTransferIn.fromBusinessGroupId}}" data-entity-fromBusinessGroupName="{{innerTransferIn.fromBusinessGroupName}}" data-entity-year="{{searchParam.year}}" data-entity-month="{{searchParam.month}}" class="cursor btn-innerTransferIn-check " >\r\n                            	对账\r\n                        </a><a href="" class="cursor"> |</a>\r\n                        <a data-entity-id="{{innerTransferIn.fromBusinessGroupId}}" data-entity-fromBusinessGroupName="{{innerTransferIn.fromBusinessGroupName}}" data-entity-year="{{searchParam.year}}"\r\n                                {{if searchParam.month == ""}}\r\n                                 	 data-entity-startMonth=1 data-entity-endMonth=12 \r\n                                  {{else}}\r\n                                 	 data-entity-startMonth="{{searchParam.month}}" data-entity-endMonth="{{searchParam.month}}" \r\n                                {{/if}}\r\n                        		class="cursor btn-innerTransferIn-balance">\r\n                           		 结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                        <ul class="pagination">\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                                <a href="javascript:void(0)">\r\n                                    {{if totalPage == 0}}\r\n                                    0/0\r\n                                    {{else}}\r\n                                    {{pageNo+1}}/{{totalPage}} \r\n                                    {{/if}}\r\n                                </a>\r\n                            </li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});