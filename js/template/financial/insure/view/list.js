/*TMODJS:{"debug":true,"version":183,"md5":"cd6abd0139ee6a91b9ee27934551cb91"}*/
define(function(require) {
    return require("../../../template")("financial/insure/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, insuranceCompanyNameListNew = $data.insuranceCompanyNameListNew, $escape = ($data.insurance, 
            $data.index, $utils.$escape), searchParam = $data.searchParam, yearList = $data.yearList, monthList = ($data.year, 
            $data.monthList), financialInsuranceSettlementList = ($data.month, $data.financialInsuranceSettlementList), recordSize = ($data.$index, 
            $data.recordSize), $out = "";
            return $out += '<div class="row Financialinsurance globalAdd" > <div class="form-horizontal search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">保险公司：</label> <select class="col-xs-12" name="insuranceId" style="width: 220px"> <option value ="">全部</option> ', 
            $line = 7, $each(insuranceCompanyNameListNew, function(insurance) {
                $out += ' <option value="', $line = 8, $out += $escape(insurance.id), $out += '" ', 
                $line = 8, searchParam.insuranceId == insurance.id && ($out += 'selected="selected"', 
                $line = 8), $out += ">", $line = 8, $out += $escape(insurance.name), $out += "</option> ", 
                $line = 9;
            }), $out += ' </select> <label class="control-label pull-left marginLeft-30" >账期：</label> <select class="col-sm-1 " name="year" > ', 
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
            }), $out += ' </select> <button class=" btn-sm marginLeft-30 btn-insurance-search search-btn " > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row insuranceList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>保险公司</th> <th>总账面应付</th> <th>总实际应付</th> <th>总实际已付</th> <th>总账面未付</th> <th>总实际未付</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 42, $each(financialInsuranceSettlementList, function(insurance) {
                $out += " <tr> <td>", $line = 44, $out += $escape(insurance.insuranceCompanyName), 
                $out += "</td> <td>", $line = 45, $out += $escape(insurance.sumNeedPayMoney), $out += "</td> <td>", 
                $line = 46, $out += $escape(insurance.sumRealNeedPayMoney), $out += "</td> <td>", 
                $line = 47, $out += $escape(insurance.sumRealPayedMoney), $out += "</td> <td>", 
                $line = 48, $out += $escape(insurance.sumUnPayedMoney), $out += '</td> <td> <span style="color:red">', 
                $line = 50, $out += $escape(insurance.sumRealUnPayedMoney), $out += "</span> </td> <td > ", 
                $line = 53, insurance.allCount != insurance.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 54, $out += $escape(insurance.checkedCount), $line = 54, $out += $escape("/"), 
                $line = 54, $out += $escape(insurance.allCount), $out += "</span> ", $line = 55), 
                $out += " ", $line = 56, insurance.allCount == insurance.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 57, $out += $escape(insurance.checkedCount), $line = 57, $out += $escape("/"), 
                $line = 57, $out += $escape(insurance.allCount), $out += "</span> ", $line = 58), 
                $out += ' </td> <td> <a data-entity-id="', $line = 61, $out += $escape(insurance.insuranceId), 
                $out += '" data-entity-insuranceCompanyName="', $line = 61, $out += $escape(insurance.insuranceCompanyName), 
                $out += '" data-entity-year="', $line = 61, $out += $escape(searchParam.year), $out += '" data-entity-month="', 
                $line = 61, $out += $escape(searchParam.month), $out += '" class="cursor R-rigth btn-insurance-check" data-rigth="1270002"> 对账 </a> <a data-entity-id="', 
                $line = 64, $out += $escape(insurance.insuranceId), $out += '" data-entity-insuranceCompanyName="', 
                $line = 64, $out += $escape(insurance.insuranceCompanyName), $out += '" data-entity-year="', 
                $line = 64, $out += $escape(searchParam.year), $out += '" ', $line = 65, "" == searchParam.month ? ($out += " data-entity-startMonth=1 data-entity-endMonth=12 ", 
                $line = 67) : ($out += ' data-entity-startMonth="', $line = 68, $out += $escape(searchParam.month), 
                $out += '" data-entity-endMonth="', $line = 68, $out += $escape(searchParam.month), 
                $out += '" ', $line = 69), $out += ' class="cursor R-rigth btn-insurance-balance" data-rigth="1270003"> <label class="padding-right20"> |</label> 结算 </a> </td> </tr> ', 
                $line = 76;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 81, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row Financialinsurance globalAdd" >\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left" style="margin-left: 15px">保险公司：</label>\r\n                <select  class="col-xs-12" name="insuranceId" style="width: 220px">\r\n                    <option value ="">全部</option>\r\n                    {{each insuranceCompanyNameListNew as insurance index}}\r\n						<option value="{{insurance.id}}" {{if searchParam.insuranceId == insurance.id}}selected="selected"{{/if}}>{{insurance.name}}</option>\r\n					{{/each}}\r\n                </select>        \r\n                <label class="control-label pull-left marginLeft-30" >账期：</label>\r\n				<select class="col-sm-1 " name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select>\r\n				<select class="col-sm-1 marginLeft-30" name="month" >\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n					{{/each}}\r\n				</select>\r\n            <button class=" btn-sm marginLeft-30  btn-insurance-search search-btn " > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div>\r\n    </div>\r\n    <div class="row insuranceList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>保险公司</th>\r\n                    <th>总账面应付</th>\r\n                    <th>总实际应付</th>\r\n                    <th>总实际已付</th>\r\n                    <th>总账面未付</th>\r\n                    <th>总实际未付</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                {{each financialInsuranceSettlementList as insurance}}\r\n                <tr>\r\n                    <td>{{insurance.insuranceCompanyName}}</td>\r\n                    <td>{{insurance.sumNeedPayMoney}}</td>\r\n                    <td>{{insurance.sumRealNeedPayMoney}}</td>\r\n                    <td>{{insurance.sumRealPayedMoney}}</td>\r\n                    <td>{{insurance.sumUnPayedMoney}}</td>\r\n                    <td>\r\n                    	<span style="color:red">{{insurance.sumRealUnPayedMoney}}</span>\r\n                    </td>\r\n                    <td >\r\n	                    {{if insurance.allCount != insurance.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{insurance.checkedCount}}{{"/"}}{{insurance.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if insurance.allCount == insurance.checkedCount}}\r\n	                      <span style="color:green"> {{insurance.checkedCount}}{{"/"}}{{insurance.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a data-entity-id="{{insurance.insuranceId}}" data-entity-insuranceCompanyName="{{insurance.insuranceCompanyName}}" data-entity-year="{{searchParam.year}}" data-entity-month="{{searchParam.month}}" class="cursor R-rigth btn-insurance-check" data-rigth="1270002">\r\n                            	 对账\r\n                        </a>\r\n                        <a data-entity-id="{{insurance.insuranceId}}" data-entity-insuranceCompanyName="{{insurance.insuranceCompanyName}}" data-entity-year="{{searchParam.year}}"\r\n                                {{if searchParam.month == ""}}\r\n                                 	 data-entity-startMonth=1 data-entity-endMonth=12 \r\n                                  {{else}}\r\n                                 	 data-entity-startMonth="{{searchParam.month}}" data-entity-endMonth="{{searchParam.month}}" \r\n                                {{/if}}\r\n                        		class="cursor R-rigth btn-insurance-balance" data-rigth="1270003">\r\n                                <label class="padding-right20"> |</label>\r\n                           		 结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});