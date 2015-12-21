/*TMODJS:{"debug":true,"version":154,"md5":"43b6df92612f5ad359d9d2e17d1b3efa"}*/
define(function(require) {
    return require("../../../template")("financial/transfer/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, yearList = $data.yearList, monthList = ($data.year, 
            $data.index, $data.monthList), financialTransferList = ($data.month, $data.financialTransferList), recordSize = ($data.transfer, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row Financialtransfer globalAdd" > <div class="form-horizontal search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">同行地接：</label> <input type="text" class="col-sm-12 choosePartnerAgency" style="width: 220px" placeholder="来源" name="travelAgencyName" value="', 
            $line = 5, $out += $escape(searchParam.travelAgencyName), $out += '" /> <input type="hidden" name="fromPartnerAgencyId" value="', 
            $line = 6, $out += $escape(searchParam.partnerAgencyId), $out += '" > <label class="control-label pull-left marginLeft-30" >账期：</label> <select class="col-sm-1" name="year" > ', 
            $line = 9, $each(yearList, function(year) {
                $out += ' <option value="', $line = 10, $out += $escape(year.value), $out += '" ', 
                $line = 10, searchParam.year == year.value && ($out += 'selected="selected"', $line = 10), 
                $out += ">", $line = 10, $out += $escape(year.value), $out += "</option> ", $line = 11;
            }), $out += ' </select> <select class="col-sm-1 marginLeft-30" name="month" > <option value ="">全部</option> ', 
            $line = 15, $each(monthList, function(month) {
                $out += ' <option value="', $line = 16, $out += $escape(month.value), $out += '" ', 
                $line = 16, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 16), $out += ">", $line = 16, $out += $escape(month.value), $out += "月</option> ", 
                $line = 17;
            }), $out += ' </select> <button class="btn-sm btn-transfer-search search-btn marginLeft-30"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row transferList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th >同行地接</th> <th >总账面应付</th> <th >总实际应付</th> <th >总实际已付</th> <th >总账面未付</th> <th >总实际未付</th> <th >对账进度</th> <th >操作</th> </tr> </thead> <tbody> ', 
            $line = 40, $each(financialTransferList, function(transfer) {
                $out += " <tr> <td>", $line = 42, $out += $escape(transfer.partnerAgencyName), $out += "</td> <td>", 
                $line = 43, $out += $escape(transfer.sumTransNeedPayAllMoney), $out += "</td> <td>", 
                $line = 44, $out += $escape(transfer.sumRealNeedPayMoney), $out += "</td> <td>", 
                $line = 45, $out += $escape(transfer.sumRealPayedMoney), $out += "</td> <td>", $line = 46, 
                $out += $escape(transfer.sumTransUnPayedMoney), $out += '</td> <td> <span style="color:red">', 
                $line = 48, $out += $escape(transfer.sumRealUnPayedMoney), $out += "</span> </td> <td > ", 
                $line = 51, transfer.allCount != transfer.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 52, $out += $escape(transfer.checkedCount), $line = 52, $out += $escape("/"), 
                $line = 52, $out += $escape(transfer.allCount), $out += "</span> ", $line = 53), 
                $out += " ", $line = 54, transfer.allCount == transfer.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 55, $out += $escape(transfer.checkedCount), $line = 55, $out += $escape("/"), 
                $line = 55, $out += $escape(transfer.allCount), $out += "</span> ", $line = 56), 
                $out += ' </td> <td> <a data-entity-id="', $line = 59, $out += $escape(transfer.partnerAgencyId), 
                $out += '" data-entity-partnerAgencyName="', $line = 59, $out += $escape(transfer.partnerAgencyName), 
                $out += '" data-entity-year="', $line = 59, $out += $escape(searchParam.year), $out += '" data-entity-month="', 
                $line = 59, $out += $escape(searchParam.month), $out += '" class="cursor btn-transfer-check R-right" data-right="1300002"> 对账 </a> <label class="cursor R-right" data-right="1300002"><a class="R-right" data-right="1300003"> |</a></label> <a data-entity-id="', 
                $line = 63, $out += $escape(transfer.partnerAgencyId), $out += '" data-entity-partnerAgencyName="', 
                $line = 63, $out += $escape(transfer.partnerAgencyName), $out += '" data-entity-year="', 
                $line = 63, $out += $escape(searchParam.year), $out += '" ', $line = 64, "" == searchParam.month ? ($out += " data-entity-startMonth=1 data-entity-endMonth=12 ", 
                $line = 66) : ($out += ' data-entity-startMonth="', $line = 67, $out += $escape(searchParam.month), 
                $out += '" data-entity-endMonth="', $line = 67, $out += $escape(searchParam.month), 
                $out += '" ', $line = 68), $out += ' class="cursor R-right btn-transfer-balance" data-right="1300003"> 结算 </a> </td> </tr> ', 
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
                source: '<div class="row Financialtransfer globalAdd" >\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left" style="margin-left: 15px">同行地接：</label>\r\n				<input type="text" class="col-sm-12 choosePartnerAgency" style="width: 220px" placeholder="来源" name="travelAgencyName" value="{{searchParam.travelAgencyName}}" />\r\n				<input type="hidden" name="fromPartnerAgencyId" value="{{searchParam.partnerAgencyId}}" >\r\n                <label class="control-label pull-left marginLeft-30" >账期：</label>\r\n				<select class="col-sm-1" name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select>\r\n				<select class="col-sm-1 marginLeft-30" name="month" >\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n					{{/each}}\r\n				</select>\r\n            <button class="btn-sm  btn-transfer-search search-btn marginLeft-30">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="row transferList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                    <tr class="bg-blur">\r\n                        <th >同行地接</th>\r\n                        <th >总账面应付</th>\r\n                        <th >总实际应付</th>\r\n                        <th >总实际已付</th>\r\n                        <th >总账面未付</th>\r\n                        <th >总实际未付</th>\r\n                        <th >对账进度</th>\r\n                        <th >操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each financialTransferList as transfer}}\r\n                <tr>\r\n                    <td>{{transfer.partnerAgencyName}}</td>\r\n                    <td>{{transfer.sumTransNeedPayAllMoney}}</td>\r\n                    <td>{{transfer.sumRealNeedPayMoney}}</td>\r\n                    <td>{{transfer.sumRealPayedMoney}}</td>\r\n                    <td>{{transfer.sumTransUnPayedMoney}}</td>\r\n                    <td>\r\n                    	<span style="color:red">{{transfer.sumRealUnPayedMoney}}</span>\r\n                    </td>\r\n                    <td >\r\n	                    {{if transfer.allCount != transfer.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{transfer.checkedCount}}{{"/"}}{{transfer.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if transfer.allCount == transfer.checkedCount}}\r\n	                      <span style="color:green"> {{transfer.checkedCount}}{{"/"}}{{transfer.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a data-entity-id="{{transfer.partnerAgencyId}}" data-entity-partnerAgencyName="{{transfer.partnerAgencyName}}" data-entity-year="{{searchParam.year}}" data-entity-month="{{searchParam.month}}" class="cursor  btn-transfer-check R-right" data-right="1300002">\r\n                            	对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right="1300002"><a class="R-right" data-right="1300003"> |</a></label>\r\n                        <a data-entity-id="{{transfer.partnerAgencyId}}" data-entity-partnerAgencyName="{{transfer.partnerAgencyName}}" data-entity-year="{{searchParam.year}}"\r\n                                {{if searchParam.month == ""}}\r\n                                 	 data-entity-startMonth=1 data-entity-endMonth=12 \r\n                                  {{else}}\r\n                                 	 data-entity-startMonth="{{searchParam.month}}" data-entity-endMonth="{{searchParam.month}}" \r\n                                {{/if}}\r\n                        		class="cursor R-right btn-transfer-balance" data-right="1300003">\r\n                           		 结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});