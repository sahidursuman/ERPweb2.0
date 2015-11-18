/*TMODJS:{"debug":true,"version":198,"md5":"b94daaea5b388d2d06acd440a1bd7509"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, companyNameListNew = $data.companyNameListNew, $escape = ($data.ticket, 
            $data.index, $utils.$escape), searchParam = $data.searchParam, yearList = $data.yearList, monthList = ($data.year, 
            $data.monthList), financialTicketSettlementList = ($data.month, $data.financialTicketSettlementList), recordSize = ($data.$index, 
            $data.recordSize), $out = "";
            return $out += '<div class="row FinancialTicket globalAdd" > <div class="form-horizontal search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">票务商家：</label> <select class="col-xs-12" name="ticketId" style="width: 220px"> <option value ="">全部</option> ', 
            $line = 7, $each(companyNameListNew, function(ticket) {
                $out += ' <option value="', $line = 8, $out += $escape(ticket.id), $out += '" ', 
                $line = 8, searchParam.ticketId == ticket.id && ($out += 'selected="selected"', 
                $line = 8), $out += ">", $line = 8, $out += $escape(ticket.name), $out += "</option> ", 
                $line = 9;
            }), $out += ' </select> <label class="control-label pull-left marginLeft-30" >账期：</label>  <select class="col-sm-1" name="year" > ', 
            $line = 14, $each(yearList, function(year) {
                $out += ' <option value="', $line = 15, $out += $escape(year.value), $out += '" ', 
                $line = 15, searchParam.year == year.value && ($out += 'selected="selected"', $line = 15), 
                $out += ">", $line = 15, $out += $escape(year.value), $out += "</option> ", $line = 16;
            }), $out += ' </select> <select class="marginLeft-30 col-sm-1" name="month"> <option value ="">全部</option> ', 
            $line = 21, $each(monthList, function(month) {
                $out += ' <option value="', $line = 22, $out += $escape(month.value), $out += '" ', 
                $line = 22, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 22), $out += ">", $line = 22, $out += $escape(month.value), $out += "月</option> ", 
                $line = 23;
            }), $out += ' </select>  <button class=" btn-sm search-btn marginLeft-30 btn-ticket-search "> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row ticketList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-NotShowHighLight"> <thead> <tr class="bg-blur" > <th>票务商家</th> <th>总账面应付</th> <th>总实际应付</th> <th>总实际已付</th> <th>总账面未付</th> <th>总实际未付</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 45, $each(financialTicketSettlementList, function(ticket) {
                $out += " <tr> <td>", $line = 47, $out += $escape(ticket.companyName), $out += "</td> <td>", 
                $line = 48, $out += $escape(ticket.sumNeedPayMoney), $out += "</td> <td>", $line = 49, 
                $out += $escape(ticket.sumRealNeedPayMoney), $out += "</td> <td>", $line = 50, $out += $escape(ticket.sumRealPayedMoney), 
                $out += "</td> <td>", $line = 51, $out += $escape(ticket.sumUnPayedMoney), $out += '</td> <td> <span style="color:red">', 
                $line = 53, $out += $escape(ticket.sumRealUnPayedMoney), $out += "</span> </td> <td > ", 
                $line = 56, ticket.allCount != ticket.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 57, $out += $escape(ticket.checkedCount), $line = 57, $out += $escape("/"), 
                $line = 57, $out += $escape(ticket.allCount), $out += "</span> ", $line = 58), $out += " ", 
                $line = 59, ticket.allCount == ticket.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 60, $out += $escape(ticket.checkedCount), $line = 60, $out += $escape("/"), 
                $line = 60, $out += $escape(ticket.allCount), $out += "</span> ", $line = 61), $out += ' </td> <td> <a data-entity-id="', 
                $line = 64, $out += $escape(ticket.ticketId), $out += '" data-entity-companyName="', 
                $line = 64, $out += $escape(ticket.companyName), $out += '" data-entity-year="', 
                $line = 64, $out += $escape(searchParam.year), $out += '" data-entity-month="', 
                $line = 64, $out += $escape(searchParam.month), $out += '" class="cursor btn-ticket-check R-right" data-right="1210002"> 对账 </a> <label class="cursor R-right" data-right="1210002"><a class="R-right" data-right="1210003"> |</a></label> <a data-entity-id="', 
                $line = 68, $out += $escape(ticket.ticketId), $out += '" data-entity-companyName="', 
                $line = 68, $out += $escape(ticket.companyName), $out += '" data-entity-year="', 
                $line = 68, $out += $escape(searchParam.year), $out += '" ', $line = 69, "" == searchParam.month ? ($out += " data-entity-startMonth=1 data-entity-endMonth=12 ", 
                $line = 71) : ($out += ' data-entity-startMonth="', $line = 72, $out += $escape(searchParam.month), 
                $out += '" data-entity-endMonth="', $line = 72, $out += $escape(searchParam.month), 
                $out += '" ', $line = 73), $out += ' class="cursor R-right btn-ticket-balance" data-right="1210003"> 结算 </a> </td> </tr> ', 
                $line = 79;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 84, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row FinancialTicket globalAdd" >\r\n    <div class="form-horizontal search-area">\r\n        <div class="form-group" >\r\n          <label class="control-label pull-left" style="margin-left: 15px">票务商家：</label>\r\n              <select  class="col-xs-12" name="ticketId" style="width: 220px">\r\n                  <option value ="">全部</option>\r\n                  {{each companyNameListNew as ticket index}}\r\n                  <option value="{{ticket.id}}" {{if searchParam.ticketId == ticket.id}}selected="selected"{{/if}}>{{ticket.name}}</option>\r\n                  {{/each}}\r\n              </select>\r\n           <label class="control-label pull-left  marginLeft-30" >账期：</label>\r\n			<!--<div class="col-sm-2" >-->\r\n				<select class="col-sm-1" name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select>\r\n\r\n				<select class="marginLeft-30 col-sm-1" name="month">\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n					{{/each}}\r\n				</select>\r\n			<!--</div>-->\r\n            <button class=" btn-sm search-btn marginLeft-30 btn-ticket-search "> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div>\r\n    </div>\r\n    <div class="row ticketList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-NotShowHighLight">\r\n                <thead>\r\n                <tr class="bg-blur" >\r\n                    <th>票务商家</th>\r\n                    <th>总账面应付</th>\r\n                    <th>总实际应付</th>\r\n                    <th>总实际已付</th>\r\n                    <th>总账面未付</th>\r\n                    <th>总实际未付</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                {{each financialTicketSettlementList as ticket}}\r\n                <tr>\r\n                    <td>{{ticket.companyName}}</td>\r\n                    <td>{{ticket.sumNeedPayMoney}}</td>\r\n                    <td>{{ticket.sumRealNeedPayMoney}}</td>\r\n                    <td>{{ticket.sumRealPayedMoney}}</td>\r\n                    <td>{{ticket.sumUnPayedMoney}}</td>\r\n                    <td>\r\n                    	<span style="color:red">{{ticket.sumRealUnPayedMoney}}</span>\r\n                    </td>\r\n                    <td >\r\n	                    {{if ticket.allCount != ticket.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{ticket.checkedCount}}{{"/"}}{{ticket.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if ticket.allCount == ticket.checkedCount}}\r\n	                      <span style="color:green"> {{ticket.checkedCount}}{{"/"}}{{ticket.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a data-entity-id="{{ticket.ticketId}}" data-entity-companyName="{{ticket.companyName}}" data-entity-year="{{searchParam.year}}" data-entity-month="{{searchParam.month}}" class="cursor btn-ticket-check R-right" data-right="1210002">\r\n                            	 对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right="1210002"><a class="R-right" data-right="1210003"> |</a></label>\r\n                        <a data-entity-id="{{ticket.ticketId}}" data-entity-companyName="{{ticket.companyName}}" data-entity-year="{{searchParam.year}}"\r\n                                {{if searchParam.month == ""}}\r\n                                 	 data-entity-startMonth=1 data-entity-endMonth=12\r\n                                  {{else}}\r\n                                 	 data-entity-startMonth="{{searchParam.month}}" data-entity-endMonth="{{searchParam.month}}"\r\n                                {{/if}}\r\n                        		class="cursor R-right btn-ticket-balance" data-right="1210003">\r\n                           		 结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});