/*TMODJS:{"debug":true,"version":104,"md5":"005c604e07f45e9ab7068e9b770056d9"}*/
define(function(require) {
    return require("../../../template")("financial/Scenic/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, scenicNameListNew = $data.scenicNameListNew, $escape = ($data.scenic, 
            $data.index, $utils.$escape), searchParam = $data.searchParam, yearList = $data.yearList, monthList = ($data.year, 
            $data.monthList), financialScenicList = ($data.month, $data.financialScenicList), recordSize = ($data.rs, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row Scenic scenicMain globalAdd"> <div class="form-horizontal search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">景区：</label> <select class="col-xs-12" name="scenicId" style="width: 220px"> <option value ="">全部</option> ', 
            $line = 7, $each(scenicNameListNew, function(scenic) {
                $out += ' <option value="', $line = 8, $out += $escape(scenic.id), $out += '" ', 
                $line = 8, searchParam.scenicId == scenic.id && ($out += 'selected="selected"', 
                $line = 8), $out += ">", $line = 8, $out += $escape(scenic.name), $out += "</option> ", 
                $line = 9;
            }), $out += ' </select> <label class="control-label pull-left marginLeft-30" >账期：</label> <select class="col-sm-1" name="year" > ', 
            $line = 13, $each(yearList, function(year) {
                $out += ' <option value="', $line = 14, $out += $escape(year.value), $out += '" ', 
                $line = 14, searchParam.year == year.value && ($out += 'selected="selected"', $line = 14), 
                $out += ">", $line = 14, $out += $escape(year.value), $out += "</option> ", $line = 15;
            }), $out += ' </select> <select class="col-sm-1 marginLeft-30" name="month" > <option value ="">全部</option> ', 
            $line = 19, $each(monthList, function(month) {
                $out += ' <option value="', $line = 20, $out += $escape(month.value), $out += '" ', 
                $line = 20, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 20), $out += ">", $line = 20, $out += $escape(month.value), $out += "</option> ", 
                $line = 21;
            }), $out += ' </select> <button class=" btn-sm search-btn btn-scenic-search marginLeft-30"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row ticketList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-NotShowHighLight"> <thead> <tr class="bg-blur"> <th class="col-sm-1">景区</th> <th >总账面应付</th> <th >总实际应付</th> <th >总实际已付</th> <th >总账面未付</th> <th >总实际未付</th> <th >对账进度</th> <th >操作</th> </tr> </thead> <tbody> ', 
            $line = 42, $each(financialScenicList, function(rs) {
                $out += ' <tr data-entity-id="', $line = 43, $out += $escape(rs.scenicId), $out += '"> <td>', 
                $line = 44, $out += $escape(rs.scenicName), $out += "</td> <td>", $line = 45, $out += $escape(rs.sumNeedPayMoney), 
                $out += "</td> <td>", $line = 46, $out += $escape(rs.sumRealNeedPayMoney), $out += "</td> <td>", 
                $line = 47, $out += $escape(rs.sumRealPayedMoney), $out += "</td> <td>", $line = 48, 
                $out += $escape(rs.sumUnPayedMoney), $out += '</td> <td><span style="color:red">', 
                $line = 49, $out += $escape(rs.sumRealUnPayedMoney), $out += "</span></td> <td> ", 
                $line = 51, rs.allCount != rs.checkedCount && ($out += ' <span style="color:#ff9900">', 
                $line = 52, $out += $escape(rs.checkedCount), $line = 52, $out += $escape("/"), 
                $line = 52, $out += $escape(rs.allCount), $out += "</span> ", $line = 53), $out += " ", 
                $line = 54, rs.allCount == rs.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 55, $out += $escape(rs.checkedCount), $line = 55, $out += $escape("/"), 
                $line = 55, $out += $escape(rs.allCount), $out += "</span> ", $line = 56), $out += ' </td> <td> <a data-entity-id="', 
                $line = 59, $out += $escape(rs.scenicId), $out += '" data-entity-scenicName="', 
                $line = 59, $out += $escape(rs.scenicName), $out += '" data-entity-year="', $line = 59, 
                $out += $escape(searchParam.year), $out += '" data-entity-month="', $line = 59, 
                $out += $escape(searchParam.month), $out += '" class="cursor R-right btn-scenic-Check" data-right="1250002"> 对账 </a> <label class="cursor R-right" data-right="1250002"><a class="R-right" data-right="1250003"> |</a></label> <a data-entity-id="', 
                $line = 63, $out += $escape(rs.scenicId), $out += '" data-entity-scenicName="', 
                $line = 63, $out += $escape(rs.scenicName), $out += '" data-entity-year="', $line = 63, 
                $out += $escape(searchParam.year), $out += '" ', $line = 64, "" == searchParam.month ? ($out += " data-entity-startMonth=1 data-entity-endMonth=12 ", 
                $line = 66) : ($out += ' data-entity-startMonth="', $line = 67, $out += $escape(searchParam.month), 
                $out += '" data-entity-endMonth="', $line = 67, $out += $escape(searchParam.month), 
                $out += '" ', $line = 68), $out += ' class="cursor R-right btn-scenic-balance" data-right="1250003"> 结算 </a> </td> </tr> ', 
                $line = 74;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 79, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row Scenic scenicMain globalAdd">\r\n   <div class="form-horizontal search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left" style="margin-left: 15px">景区：</label>\r\n                <select  class="col-xs-12" name="scenicId" style="width: 220px">\r\n                    <option value ="">全部</option>\r\n                    {{each scenicNameListNew as scenic index}}\r\n						<option value="{{scenic.id}}" {{if searchParam.scenicId == scenic.id}}selected="selected"{{/if}}>{{scenic.name}}</option>\r\n					{{/each}}\r\n                </select>        \r\n                <label class="control-label pull-left marginLeft-30" >账期：</label>\r\n				<select class="col-sm-1" name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select>\r\n				<select class="col-sm-1 marginLeft-30" name="month" >\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}</option>\r\n					{{/each}}\r\n				</select>\r\n            <button class=" btn-sm search-btn btn-scenic-search marginLeft-30"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div>\r\n    </div>\r\n    <div class="row ticketList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-NotShowHighLight">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th  class="col-sm-1">景区</th>\r\n                    <th >总账面应付</th>\r\n                    <th >总实际应付</th>\r\n                    <th >总实际已付</th>\r\n                    <th >总账面未付</th>\r\n                    <th >总实际未付</th>\r\n                    <th >对账进度</th>\r\n                    <th >操作</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                {{each financialScenicList as rs}}\r\n                <tr data-entity-id="{{rs.scenicId}}">\r\n                    <td>{{rs.scenicName}}</td>\r\n                    <td>{{rs.sumNeedPayMoney}}</td>\r\n                    <td>{{rs.sumRealNeedPayMoney}}</td>\r\n                    <td>{{rs.sumRealPayedMoney}}</td>\r\n                    <td>{{rs.sumUnPayedMoney}}</td>\r\n                    <td><span style="color:red">{{rs.sumRealUnPayedMoney}}</span></td>\r\n                    <td>\r\n	                    {{if rs.allCount != rs.checkedCount}}\r\n		                      <span style="color:#ff9900">{{rs.checkedCount}}{{"/"}}{{rs.allCount}}</span>\r\n		                {{/if}}\r\n	                    {{if rs.allCount == rs.checkedCount}}\r\n	                      	<span style="color:green"> {{rs.checkedCount}}{{"/"}}{{rs.allCount}}</span>\r\n	                    {{/if}}\r\n                   </td>\r\n                    <td>  \r\n                        <a data-entity-id="{{rs.scenicId}}" data-entity-scenicName="{{rs.scenicName}}" data-entity-year="{{searchParam.year}}" data-entity-month="{{searchParam.month}}" class="cursor R-right btn-scenic-Check" data-right="1250002">\r\n                            	对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right="1250002"><a class="R-right" data-right="1250003"> |</a></label>\r\n                        <a data-entity-id="{{rs.scenicId}}" data-entity-scenicName="{{rs.scenicName}}" data-entity-year="{{searchParam.year}}"\r\n                                {{if searchParam.month == ""}}\r\n                                 	 data-entity-startMonth=1 data-entity-endMonth=12 \r\n                                  {{else}}\r\n                                 	 data-entity-startMonth="{{searchParam.month}}" data-entity-endMonth="{{searchParam.month}}" \r\n                                {{/if}}\r\n                        		class="cursor R-right btn-scenic-balance" data-right="1250003">\r\n                           		 结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});