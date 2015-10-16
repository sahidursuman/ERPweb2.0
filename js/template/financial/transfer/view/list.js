/*TMODJS:{"debug":true,"version":95,"md5":"5fc9271369a6dd99a68bcfb9b52668d6"}*/
define(function(require) {
    return require("../../../template")("financial/transfer/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, partnerAgencyListNew = $data.partnerAgencyListNew, $escape = ($data.partnerAgency, 
            $data.index, $utils.$escape), searchParam = $data.searchParam, yearList = $data.yearList, monthList = ($data.year, 
            $data.monthList), financialTransferList = ($data.month, $data.financialTransferList), recordSize = ($data.transfer, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row Financialtransfer globalAdd" > <div class="form-horizontal search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">同行地接:</label> <div class="col-sm-2"> <select class="col-xs-12" name="hotelId" style="width:220px;"> <option value ="">全部</option> ', 
            $line = 8, $each(partnerAgencyListNew, function(partnerAgency) {
                $out += ' <option value="', $line = 9, $out += $escape(partnerAgency.id), $out += '" ', 
                $line = 9, searchParam.partnerAgencyId == partnerAgency.id && ($out += 'selected="selected"', 
                $line = 9), $out += ">", $line = 9, $out += $escape(partnerAgency.travelAgencyName), 
                $out += "</option> ", $line = 10;
            }), $out += ' </select> </div> <label class="control-label col-sm-1" >账期:</label> <div class="col-sm-2" > <select class="col-sm-5" name="year" > ', 
            $line = 16, $each(yearList, function(year) {
                $out += ' <option value="', $line = 17, $out += $escape(year.value), $out += '" ', 
                $line = 17, searchParam.year == year.value && ($out += 'selected="selected"', $line = 17), 
                $out += ">", $line = 17, $out += $escape(year.value), $out += "</option> ", $line = 18;
            }), $out += ' </select> <select class="col-sm-5" name="month" style = "margin-left:10px;"> <option value ="">全部</option> ', 
            $line = 22, $each(monthList, function(month) {
                $out += ' <option value="', $line = 23, $out += $escape(month.value), $out += '" ', 
                $line = 23, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 23), $out += ">", $line = 23, $out += $escape(month.value), $out += "月</option> ", 
                $line = 24;
            }), $out += ' </select> </div> <button class="btn-sm btn-transfer-search search-btn btn-height"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row transferList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>同行地接</th> <th>总账面应付</th> <th>总实际应付</th> <th>总实际已付</th> <th>总账面未付</th> <th>总实际未付</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 47, $each(financialTransferList, function(transfer) {
                $out += " <tr> <td>", $line = 49, $out += $escape(transfer.partnerAgencyName), $out += "</td> <td>", 
                $line = 50, $out += $escape(transfer.sumTransNeedPayAllMoney), $out += "</td> <td>", 
                $line = 51, $out += $escape(transfer.sumRealNeedPayMoney), $out += "</td> <td>", 
                $line = 52, $out += $escape(transfer.sumRealPayedMoney), $out += "</td> <td>", $line = 53, 
                $out += $escape(transfer.sumTransUnPayedMoney), $out += '</td> <td> <span style="color:red">', 
                $line = 55, $out += $escape(transfer.sumRealUnPayedMoney), $out += "</span> </td> <td > ", 
                $line = 58, transfer.allCount != transfer.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 59, $out += $escape(transfer.checkedCount), $line = 59, $out += $escape("/"), 
                $line = 59, $out += $escape(transfer.allCount), $out += "</span> ", $line = 60), 
                $out += " ", $line = 61, transfer.allCount == transfer.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 62, $out += $escape(transfer.checkedCount), $line = 62, $out += $escape("/"), 
                $line = 62, $out += $escape(transfer.allCount), $out += "</span> ", $line = 63), 
                $out += ' </td> <td> <a data-entity-id="', $line = 66, $out += $escape(transfer.partnerAgencyId), 
                $out += '" data-entity-partnerAgencyName="', $line = 66, $out += $escape(transfer.partnerAgencyName), 
                $out += '" data-entity-year="', $line = 66, $out += $escape(searchParam.year), $out += '" data-entity-month="', 
                $line = 66, $out += $escape(searchParam.month), $out += '" class="cursor btn-transfer-check " > 对账 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 69, $out += $escape(transfer.partnerAgencyId), $out += '" data-entity-partnerAgencyName="', 
                $line = 69, $out += $escape(transfer.partnerAgencyName), $out += '" data-entity-year="', 
                $line = 69, $out += $escape(searchParam.year), $out += '" ', $line = 70, "" == searchParam.month ? ($out += " data-entity-startMonth=1 data-entity-endMonth=12 ", 
                $line = 72) : ($out += ' data-entity-startMonth="', $line = 73, $out += $escape(searchParam.month), 
                $out += '" data-entity-endMonth="', $line = 73, $out += $escape(searchParam.month), 
                $out += '" ', $line = 74), $out += ' class="cursor btn-transfer-balance"> 结算 </a> </td> </tr> ', 
                $line = 80;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 85, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 94, 0 == totalPage ? ($out += " 0/0 ", $line = 96) : ($out += " ", $line = 97, 
            $out += $escape(pageNo + 1), $out += "/", $line = 97, $out += $escape(totalPage), 
            $out += " ", $line = 98), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row Financialtransfer globalAdd" >\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left" style="margin-left: 15px">同行地接:</label>\r\n            <div class="col-sm-2">\r\n                <select  class="col-xs-12" name="hotelId" style="width:220px;">\r\n                    <option value ="">全部</option>\r\n                    {{each partnerAgencyListNew as partnerAgency index}}\r\n						<option value="{{partnerAgency.id}}" {{if searchParam.partnerAgencyId == partnerAgency.id}}selected="selected"{{/if}}>{{partnerAgency.travelAgencyName}}</option>\r\n					{{/each}} \r\n                </select>        \r\n             </div>    \r\n           <label class="control-label col-sm-1" >账期:</label>\r\n			<div class="col-sm-2" >\r\n				<select class="col-sm-5" name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select>\r\n				<select class="col-sm-5" name="month" style = "margin-left:10px;">\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n					{{/each}}\r\n				</select>\r\n			</div> \r\n            <button class="btn-sm  btn-transfer-search search-btn btn-height">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button> </div>\r\n    </div>\r\n    <div class="row transferList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>同行地接</th>  \r\n                    <th>总账面应付</th>\r\n                    <th>总实际应付</th>\r\n                    <th>总实际已付</th>\r\n                    <th>总账面未付</th>\r\n                    <th>总实际未付</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each financialTransferList as transfer}}\r\n                <tr>\r\n                    <td>{{transfer.partnerAgencyName}}</td>\r\n                    <td>{{transfer.sumTransNeedPayAllMoney}}</td>\r\n                    <td>{{transfer.sumRealNeedPayMoney}}</td>\r\n                    <td>{{transfer.sumRealPayedMoney}}</td>\r\n                    <td>{{transfer.sumTransUnPayedMoney}}</td>\r\n                    <td>\r\n                    	<span style="color:red">{{transfer.sumRealUnPayedMoney}}</span>\r\n                    </td>\r\n                    <td >\r\n	                    {{if transfer.allCount != transfer.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{transfer.checkedCount}}{{"/"}}{{transfer.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if transfer.allCount == transfer.checkedCount}}\r\n	                      <span style="color:green"> {{transfer.checkedCount}}{{"/"}}{{transfer.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a data-entity-id="{{transfer.partnerAgencyId}}" data-entity-partnerAgencyName="{{transfer.partnerAgencyName}}" data-entity-year="{{searchParam.year}}" data-entity-month="{{searchParam.month}}" class="cursor btn-transfer-check " >\r\n                            	对账\r\n                        </a><a href="" class="cursor"> |</a>\r\n                        <a data-entity-id="{{transfer.partnerAgencyId}}" data-entity-partnerAgencyName="{{transfer.partnerAgencyName}}" data-entity-year="{{searchParam.year}}"\r\n                                {{if searchParam.month == ""}}\r\n                                 	 data-entity-startMonth=1 data-entity-endMonth=12 \r\n                                  {{else}}\r\n                                 	 data-entity-startMonth="{{searchParam.month}}" data-entity-endMonth="{{searchParam.month}}" \r\n                                {{/if}}\r\n                        		class="cursor btn-transfer-balance">\r\n                           		 结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                        <ul class="pagination">\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                                <a href="javascript:void(0)">\r\n                                    {{if totalPage == 0}}\r\n                                    	0/0\r\n                                    {{else}}\r\n                                    	{{pageNo+1}}/{{totalPage}}\r\n                                    {{/if}}\r\n                                </a>\r\n                            </li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});