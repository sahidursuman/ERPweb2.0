/*TMODJS:{"debug":true,"version":246,"md5":"75dc60bc9e5e710d43282a5c4f1f8036"}*/
define(function(require) {
    return require("../../../template")("financial/busCompany/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, companyNameListNew = $data.companyNameListNew, $escape = ($data.busCompany, 
            $data.index, $utils.$escape), searchParam = $data.searchParam, yearList = $data.yearList, monthList = ($data.year, 
            $data.monthList), financialBusCompanyList = ($data.month, $data.financialBusCompanyList), recordSize = $data.recordSize, $out = "";
            return $out += '<div class="row" > <div class="form-horizontal T-search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">车队：</label> <select class="col-xs-12" name="busCompanyId" style="width: 220px"> <option value ="">全部</option> ', 
            $line = 7, $each(companyNameListNew, function(busCompany) {
                $out += ' <option value="', $line = 8, $out += $escape(busCompany.busCompanyId), 
                $out += '" ', $line = 8, searchParam.busCompanyId == busCompany.busCompanyId && ($out += 'selected="selected"', 
                $line = 8), $out += ">", $line = 8, $out += $escape(busCompany.CompanyName), $out += "</option> ", 
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
                $line = 20), $out += ">", $line = 20, $out += $escape(month.value), $out += "月</option> ", 
                $line = 21;
            }), $out += ' </select> <button class="btn-sm T-search search-btn marginLeft-30" > <i class="ace-ico n fa fa-search"></i> 搜索 </button> </div> </div> <div class="row busCompanyList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>车队</th> <th>总账面应付</th> <th>总实际应付</th> <th>总实际已付</th> <th>总账面未付</th> <th>总实际未付</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 44, $each(financialBusCompanyList, function(busCompany) {
                $out += ' <tr data-id="', $line = 45, $out += $escape(busCompany.busCompanyId), 
                $out += '" data-name="', $line = 45, $out += $escape(busCompany.CompanyName), $out += '"> <td>', 
                $line = 46, $out += $escape(busCompany.CompanyName), $out += "</td> <td>", $line = 47, 
                $out += $escape(busCompany.sumNeedPayMoney), $out += "</td> <td>", $line = 48, $out += $escape(busCompany.sumRealNeedPayMoney), 
                $out += "</td> <td>", $line = 49, $out += $escape(busCompany.sumRealPayedMoney), 
                $out += "</td> <td>", $line = 50, $out += $escape(busCompany.sumUnPayedMoney), $out += '</td> <td><span style="color:red">', 
                $line = 51, $out += $escape(busCompany.sumRealUnPayedMoney), $out += "</span></td> <td > ", 
                $line = 53, busCompany.allCount != busCompany.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 54, $out += $escape(busCompany.checkedCount), $line = 54, $out += $escape("/"), 
                $line = 54, $out += $escape(busCompany.allCount), $out += "</span> ", $line = 55), 
                $out += " ", $line = 56, busCompany.allCount == busCompany.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 57, $out += $escape(busCompany.checkedCount), $line = 57, $out += $escape("/"), 
                $line = 57, $out += $escape(busCompany.allCount), $out += "</span> ", $line = 58), 
                $out += ' </td> <td> <a class="cursor T-option T-check R-right" data-right="1230002"> 对账 </a> <label class="cursor R-right" data-right=\'1230002\'> <a class=\'R-right\' data-right=\'1230003\'> |</a></label> <a class="T-option T-clear cursor R-right" data-right="1230003"> 结算 </td> </tr> ', 
                $line = 71;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 76, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" >\r\n    <div class="form-horizontal T-search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left" style="margin-left: 15px">车队：</label>\r\n                <select  class="col-xs-12" name="busCompanyId" style="width: 220px">\r\n                    <option value ="">全部</option>\r\n                    {{each companyNameListNew as busCompany index}}\r\n						<option value="{{busCompany.busCompanyId}}" {{if searchParam.busCompanyId == busCompany.busCompanyId}}selected="selected"{{/if}}>{{busCompany.CompanyName}}</option>\r\n					{{/each}}\r\n                </select>        \r\n           <label class="control-label pull-left marginLeft-30" >账期：</label>\r\n				<select class="col-sm-1" name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select> \r\n				<select class="col-sm-1 marginLeft-30" name="month" >\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n					{{/each}}\r\n				</select>\r\n            <button class="btn-sm  T-search search-btn marginLeft-30" >\r\n                <i class="ace-ico n fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="row busCompanyList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>车队</th>\r\n                    <th>总账面应付</th>\r\n                    <th>总实际应付</th>\r\n                    <th>总实际已付</th>\r\n                    <th>总账面未付</th>\r\n                    <th>总实际未付</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody class="T-list">\r\n                {{each financialBusCompanyList as busCompany index}}\r\n                    <tr data-id="{{busCompany.busCompanyId}}" data-name="{{busCompany.CompanyName}}">\r\n                    <td>{{busCompany.CompanyName}}</td>\r\n                    <td>{{busCompany.sumNeedPayMoney}}</td>\r\n                    <td>{{busCompany.sumRealNeedPayMoney}}</td>\r\n                    <td>{{busCompany.sumRealPayedMoney}}</td>\r\n                    <td>{{busCompany.sumUnPayedMoney}}</td>\r\n                    <td><span style="color:red">{{busCompany.sumRealUnPayedMoney}}</span></td>\r\n                    <td >\r\n	                    {{if busCompany.allCount != busCompany.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{busCompany.checkedCount}}{{"/"}}{{busCompany.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if busCompany.allCount == busCompany.checkedCount}}\r\n	                      <span style="color:green"> {{busCompany.checkedCount}}{{"/"}}{{busCompany.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                    <td>\r\n\r\n                        <a class="cursor T-option T-check R-right" data-right="1230002">\r\n                            	对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right=\'1230002\'> \r\n                        <a class=\'R-right\' data-right=\'1230003\'> |</a></label>\r\n                        <a class="T-option T-clear cursor R-right" data-right="1230003">\r\n                            结算\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});