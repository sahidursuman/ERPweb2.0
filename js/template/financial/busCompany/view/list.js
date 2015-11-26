/*TMODJS:{"debug":true,"version":286,"md5":"6d309370e27863a6a328907d3e5f6120"}*/
define(function(require) {
    return require("../../../template")("financial/busCompany/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, yearList = $data.yearList, monthList = ($data.year, 
            $data.index, $data.monthList), financialBusCompanyList = ($data.month, $data.financialBusCompanyList), recordSize = ($data.busCompany, 
            $data.recordSize), $out = "";
            return $out += '<div class="row FinancialbusCompany globalAdd" > <div class="form-horizontal search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">车队：</label> <input type="text" class="col-sm-12 T-choosebusCompany" style="width: 220px" placeholder="请选择车队" name="busCompanyName" value="', 
            $line = 6, $out += $escape(searchParam.busCompanyName), $out += '" /> <input type="hidden" name="busCompanyId" value="', 
            $line = 7, $out += $escape(searchParam.busCompanyId), $out += '" > <label class="control-label pull-left marginLeft-30" >账期：</label> <select class="col-sm-1" name="year" > ', 
            $line = 12, $each(yearList, function(year) {
                $out += ' <option value="', $line = 13, $out += $escape(year.value), $out += '" ', 
                $line = 13, searchParam.year == year.value && ($out += 'selected="selected"', $line = 13), 
                $out += ">", $line = 13, $out += $escape(year.value), $out += "</option> ", $line = 14;
            }), $out += ' </select> <select class="col-sm-1 marginLeft-30" name="month" > <option value ="">全部</option> ', 
            $line = 18, $each(monthList, function(month) {
                $out += ' <option value="', $line = 19, $out += $escape(month.value), $out += '" ', 
                $line = 19, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 19), $out += ">", $line = 19, $out += $escape(month.value), $out += "月</option> ", 
                $line = 20;
            }), $out += ' </select> <button class="btn-sm btn-busCompany-search search-btn marginLeft-30" > <i class="ace-ico n fa fa-search"></i> 搜索 </button> </div> </div> <div class="row busCompanyList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>车队</th> <th>总账面应付</th> <th>总实际应付</th> <th>总实际已付</th> <th>总账面未付</th> <th>总实际未付</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 43, $each(financialBusCompanyList, function(busCompany) {
                $out += " <td>", $line = 44, $out += $escape(busCompany.CompanyName), $out += "</td> <td>", 
                $line = 45, $out += $escape(busCompany.sumNeedPayMoney), $out += "</td> <td>", $line = 46, 
                $out += $escape(busCompany.sumRealNeedPayMoney), $out += "</td> <td>", $line = 47, 
                $out += $escape(busCompany.sumRealPayedMoney), $out += "</td> <td>", $line = 48, 
                $out += $escape(busCompany.sumUnPayedMoney), $out += '</td> <td><span style="color:red">', 
                $line = 49, $out += $escape(busCompany.sumRealUnPayedMoney), $out += "</span></td> <td > ", 
                $line = 51, busCompany.allCount != busCompany.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 52, $out += $escape(busCompany.checkedCount), $line = 52, $out += $escape("/"), 
                $line = 52, $out += $escape(busCompany.allCount), $out += "</span> ", $line = 53), 
                $out += " ", $line = 54, busCompany.allCount == busCompany.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 55, $out += $escape(busCompany.checkedCount), $line = 55, $out += $escape("/"), 
                $line = 55, $out += $escape(busCompany.allCount), $out += "</span> ", $line = 56), 
                $out += ' </td> <td> <a data-entity-id="', $line = 60, $out += $escape(busCompany.busCompanyId), 
                $out += '" data-entity-CompanyName="', $line = 60, $out += $escape(busCompany.CompanyName), 
                $out += '" data-entity-year="', $line = 60, $out += $escape(searchParam.year), $out += '" data-entity-month="', 
                $line = 60, $out += $escape(searchParam.month), $out += '" class="cursor btn-busCompany-check R-right" data-right="1230002"> 对账 </a> <label class="cursor R-right" data-right=\'1230002\'> <a class=\'R-right\' data-right=\'1230003\'> |</a></label> <a data-entity-id="', 
                $line = 64, $out += $escape(busCompany.busCompanyId), $out += '" data-entity-CompanyName="', 
                $line = 64, $out += $escape(busCompany.CompanyName), $out += '" data-entity-year="', 
                $line = 64, $out += $escape(searchParam.year), $out += '" ', $line = 65, "" == searchParam.month ? ($out += " data-entity-startMonth=1 data-entity-endMonth=12 ", 
                $line = 67) : ($out += ' data-entity-startMonth="', $line = 68, $out += $escape(searchParam.month), 
                $out += '" data-entity-endMonth="', $line = 68, $out += $escape(searchParam.month), 
                $out += '" ', $line = 69), $out += ' class=" btn-busCompany-balance cursor R-right" data-right="1230003"> 结算 </td> </tr> ', 
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
                source: '<div class="row FinancialbusCompany globalAdd" >\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left" style="margin-left: 15px">车队：</label>\r\n\r\n                <input type="text" class="col-sm-12 T-choosebusCompany" style="width: 220px" placeholder="请选择车队" name="busCompanyName" value="{{searchParam.busCompanyName}}" />\r\n                <input type="hidden" name="busCompanyId" value="{{searchParam.busCompanyId}}" >\r\n\r\n\r\n           <label class="control-label pull-left marginLeft-30" >账期：</label>\r\n				<select class="col-sm-1" name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select> \r\n				<select class="col-sm-1 marginLeft-30" name="month" >\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n					{{/each}}\r\n				</select>\r\n            <button class="btn-sm  btn-busCompany-search search-btn marginLeft-30" >\r\n                <i class="ace-ico n fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="row busCompanyList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>车队</th>\r\n                    <th>总账面应付</th>\r\n                    <th>总实际应付</th>\r\n                    <th>总实际已付</th>\r\n                    <th>总账面未付</th>\r\n                    <th>总实际未付</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each financialBusCompanyList as busCompany index}}\r\n                    <td>{{busCompany.CompanyName}}</td>\r\n                    <td>{{busCompany.sumNeedPayMoney}}</td>\r\n                    <td>{{busCompany.sumRealNeedPayMoney}}</td>\r\n                    <td>{{busCompany.sumRealPayedMoney}}</td>\r\n                    <td>{{busCompany.sumUnPayedMoney}}</td>\r\n                    <td><span style="color:red">{{busCompany.sumRealUnPayedMoney}}</span></td>\r\n                    <td >\r\n	                    {{if busCompany.allCount != busCompany.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{busCompany.checkedCount}}{{"/"}}{{busCompany.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if busCompany.allCount == busCompany.checkedCount}}\r\n	                      <span style="color:green"> {{busCompany.checkedCount}}{{"/"}}{{busCompany.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                    <td>\r\n\r\n                        <a data-entity-id="{{busCompany.busCompanyId}}" data-entity-CompanyName="{{busCompany.CompanyName}}" data-entity-year="{{searchParam.year}}" data-entity-month="{{searchParam.month}}" class="cursor btn-busCompany-check R-right" data-right="1230002">\r\n                            	对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right=\'1230002\'> <a class=\'R-right\' data-right=\'1230003\'> |</a></label>\r\n                        <a data-entity-id="{{busCompany.busCompanyId}}" data-entity-CompanyName="{{busCompany.CompanyName}}" data-entity-year="{{searchParam.year}}"\r\n                               {{if searchParam.month == ""}}\r\n                            data-entity-startMonth=1 data-entity-endMonth=12\r\n                            {{else}}\r\n                            data-entity-startMonth="{{searchParam.month}}" data-entity-endMonth="{{searchParam.month}}"\r\n                            {{/if}}\r\n                            class=" btn-busCompany-balance cursor R-right" data-right="1230003">\r\n                            结算\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});