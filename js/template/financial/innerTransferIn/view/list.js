/*TMODJS:{"debug":true,"version":105,"md5":"9b10678419083905b1fbba009ecd0d1a"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, fromBusinessGroupList = $data.fromBusinessGroupList, $escape = ($data.innerTransferIn, 
            $data.index, $utils.$escape), searchParam = $data.searchParam, yearList = $data.yearList, monthList = ($data.year, 
            $data.monthList), financialInnerTransferInList = ($data.month, $data.financialInnerTransferInList), recordSize = ($data.$index, 
            $data.recordSize), $out = "";
            return $out += ' <div class="row FinancialinnerTransferIn" > <div class="form-horizontal search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">部门：</label> <select class="col-xs-12" name="fromBusinessGroupId" style="width: 220px"> <option value ="">全部</option> ', 
            $line = 8, $each(fromBusinessGroupList, function(innerTransferIn) {
                $out += ' <option value="', $line = 9, $out += $escape(innerTransferIn.fromBusinessGroupId), 
                $out += '" ', $line = 9, searchParam.fromBusinessGroupId == innerTransferIn.fromBusinessGroupId && ($out += 'selected="selected"', 
                $line = 9), $out += ">", $line = 9, $out += $escape(innerTransferIn.fromBusinessGroupName), 
                $out += "</option> ", $line = 10;
            }), $out += ' </select> <label class="control-label pull-left marginLeft-30 " >账期：</label> <select class="col-sm-1" name="year" > ', 
            $line = 14, $each(yearList, function(year) {
                $out += ' <option value="', $line = 15, $out += $escape(year.value), $out += '" ', 
                $line = 15, searchParam.year == year.value && ($out += 'selected="selected"', $line = 15), 
                $out += ">", $line = 15, $out += $escape(year.value), $out += "</option> ", $line = 16;
            }), $out += ' </select> <select class="col-sm-1 marginLeft-30" name="month" > <option value ="">全部</option> ', 
            $line = 20, $each(monthList, function(month) {
                $out += ' <option value="', $line = 21, $out += $escape(month.value), $out += '" ', 
                $line = 21, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 21), $out += ">", $line = 21, $out += $escape(month.value), $out += "月</option> ", 
                $line = 22;
            }), $out += ' </select> <button class="marginLeft-30 btn-sm search-btn btn-innerTransferIn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row innerTransferInList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>部门</th> <th>总人数</th> <th>总账面应收</th> <th>总实际应收</th> <th>总实际已收</th> <th>总账面未收</th> <th>总实际未收</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 43, $each(financialInnerTransferInList, function(innerTransferIn) {
                $out += " <tr> <td>", $line = 45, $out += $escape(innerTransferIn.fromBusinessGroupName), 
                $out += "</td> <td>", $line = 46, $out += $escape(innerTransferIn.allPerson), $out += "</td> <td>", 
                $line = 47, $out += $escape(innerTransferIn.needIncomeMoney), $out += "</td> <td>", 
                $line = 48, $out += $escape(innerTransferIn.realNeedIncomeMoney), $out += "</td> <td>", 
                $line = 49, $out += $escape(innerTransferIn.realIncomeMoney), $out += "</td> <td>", 
                $line = 50, $out += $escape(innerTransferIn.unIncomeMoney), $out += '</td> <td> <span style="color:red">', 
                $line = 52, $out += $escape(innerTransferIn.realUnIncomeMoney), $out += "</span> </td> <td > ", 
                $line = 56, innerTransferIn.allCount != innerTransferIn.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 57, $out += $escape(innerTransferIn.checkedCount), $line = 57, $out += $escape("/"), 
                $line = 57, $out += $escape(innerTransferIn.allCount), $out += "</span> ", $line = 58), 
                $out += " ", $line = 59, innerTransferIn.allCount == innerTransferIn.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 60, $out += $escape(innerTransferIn.checkedCount), $line = 60, $out += $escape("/"), 
                $line = 60, $out += $escape(innerTransferIn.allCount), $out += "</span> ", $line = 61), 
                $out += ' </td> <td> <a data-entity-id="', $line = 66, $out += $escape(innerTransferIn.fromBusinessGroupId), 
                $out += '" data-entity-fromBusinessGroupName="', $line = 66, $out += $escape(innerTransferIn.fromBusinessGroupName), 
                $out += '" data-entity-year="', $line = 66, $out += $escape(searchParam.year), $out += '" data-entity-month="', 
                $line = 66, $out += $escape(searchParam.month), $out += '" class="cursor btn-innerTransferIn-check R-right" data-right="1360001"> 对账 </a> <label class="cursor R-right" data-right="1360001"><a class="R-right" data-right="1360002"> |</a></label> <a data-entity-id="', 
                $line = 70, $out += $escape(innerTransferIn.fromBusinessGroupId), $out += '" data-entity-fromBusinessGroupName="', 
                $line = 70, $out += $escape(innerTransferIn.fromBusinessGroupName), $out += '" data-entity-year="', 
                $line = 70, $out += $escape(searchParam.year), $out += '" ', $line = 71, "" == searchParam.month ? ($out += " data-entity-startMonth=1 data-entity-endMonth=12 ", 
                $line = 73) : ($out += ' data-entity-startMonth="', $line = 74, $out += $escape(searchParam.month), 
                $out += '" data-entity-endMonth="', $line = 74, $out += $escape(searchParam.month), 
                $out += '" ', $line = 75), $out += ' class="cursor btn-innerTransferIn-balance R-right" data-right="1360002"> 结算 </a> </td> </tr> ', 
                $line = 82;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 87, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n<div class="row FinancialinnerTransferIn" >\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left" style="margin-left: 15px">部门：</label>\r\n                <select  class="col-xs-12" name="fromBusinessGroupId" style="width: 220px">\r\n                    <option value ="">全部</option>    \r\n                    {{each fromBusinessGroupList as innerTransferIn index}}\r\n						<option value="{{innerTransferIn.fromBusinessGroupId}}" {{if searchParam.fromBusinessGroupId == innerTransferIn.fromBusinessGroupId}}selected="selected"{{/if}}>{{innerTransferIn.fromBusinessGroupName}}</option>\r\n					{{/each}}\r\n                </select>        \r\n           <label class="control-label pull-left marginLeft-30 " >账期：</label>\r\n				<select class="col-sm-1" name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select> \r\n				<select class="col-sm-1 marginLeft-30" name="month" >\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n					{{/each}}\r\n				</select>\r\n            <button class="marginLeft-30 btn-sm  search-btn btn-innerTransferIn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div>\r\n    </div>\r\n    <div class="row innerTransferInList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>部门</th>\r\n                    <th>总人数</th>\r\n                    <th>总账面应收</th>\r\n                    <th>总实际应收</th>\r\n                    <th>总实际已收</th>\r\n                    <th>总账面未收</th>\r\n                    <th>总实际未收</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each financialInnerTransferInList as innerTransferIn}}\r\n                <tr>\r\n                    <td>{{innerTransferIn.fromBusinessGroupName}}</td>\r\n                    <td>{{innerTransferIn.allPerson}}</td>\r\n                    <td>{{innerTransferIn.needIncomeMoney}}</td>\r\n                    <td>{{innerTransferIn.realNeedIncomeMoney}}</td>\r\n                    <td>{{innerTransferIn.realIncomeMoney}}</td>\r\n                    <td>{{innerTransferIn.unIncomeMoney}}</td>\r\n                    <td>\r\n                    	<span style="color:red">{{innerTransferIn.realUnIncomeMoney}}</span>\r\n                    </td>\r\n                   \r\n                    <td >\r\n	                    {{if innerTransferIn.allCount != innerTransferIn.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{innerTransferIn.checkedCount}}{{"/"}}{{innerTransferIn.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if innerTransferIn.allCount == innerTransferIn.checkedCount}}\r\n	                      <span style="color:green"> {{innerTransferIn.checkedCount}}{{"/"}}{{innerTransferIn.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                   \r\n                    \r\n                    <td>\r\n                        <a data-entity-id="{{innerTransferIn.fromBusinessGroupId}}" data-entity-fromBusinessGroupName="{{innerTransferIn.fromBusinessGroupName}}" data-entity-year="{{searchParam.year}}" data-entity-month="{{searchParam.month}}" class="cursor btn-innerTransferIn-check R-right" data-right="1360001">\r\n                            	对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right="1360001"><a class="R-right" data-right="1360002"> |</a></label>\r\n                        <a data-entity-id="{{innerTransferIn.fromBusinessGroupId}}" data-entity-fromBusinessGroupName="{{innerTransferIn.fromBusinessGroupName}}" data-entity-year="{{searchParam.year}}"\r\n                                {{if searchParam.month == ""}}\r\n                                 	 data-entity-startMonth=1 data-entity-endMonth=12 \r\n                                  {{else}}\r\n                                 	 data-entity-startMonth="{{searchParam.month}}" data-entity-endMonth="{{searchParam.month}}" \r\n                                {{/if}}\r\n                        		class="cursor btn-innerTransferIn-balance R-right" data-right="1360002">\r\n                                \r\n                           		 结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});