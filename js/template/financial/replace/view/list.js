/*TMODJS:{"debug":true,"version":46,"md5":"bb03c0e08cb31ba6cdefa69cf1a13963"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, partnerAgencyNameListNew = $data.partnerAgencyNameListNew, $escape = ($data.booking, 
            $data.index, $utils.$escape), searchParam = $data.searchParam, yearList = $data.yearList, monthList = ($data.year, 
            $data.monthList), financialBookingOrderList = ($data.month, $data.financialBookingOrderList), recordSize = $data.recordSize, totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row Financialbooking" > <div class="form-horizontal search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">客户:</label> <div class="col-sm-2"> <select class="col-xs-12" name="partnerAgencyId"> <option value ="">全部</option> ', 
            $line = 8, $each(partnerAgencyNameListNew, function(booking) {
                $out += ' <option value="', $line = 9, $out += $escape(booking.id), $out += '" ', 
                $line = 9, searchParam.partnerAgencyId == booking.id && ($out += 'selected="selected"', 
                $line = 9), $out += ">", $line = 9, $out += $escape(booking.travelAgencyName), $out += "</option> ", 
                $line = 10;
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
            }), $out += ' </select> </div> <button class="btn-height btn-sm search-btn btn-financialbooking-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row bookingaurantList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>客户</th> <th>总账面应收</th> <th>总实际应收</th> <th>总实际已收</th> <th>总账面未收</th> <th>总实际未收</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 45, $each(financialBookingOrderList, function(booking) {
                $out += " <tr> <td>", $line = 47, $out += $escape(booking.partnerAgencyName), $out += "</td> <td>", 
                $line = 48, $out += $escape(booking.sumNeedIncomeMoney), $out += "</td> <td>", $line = 49, 
                $out += $escape(booking.sumRealNeedIncomeMoney), $out += "</td> <td>", $line = 50, 
                $out += $escape(booking.sumRealIncomeMoney), $out += "</td> <td>", $line = 51, $out += $escape(booking.sumUnIncomeMoney), 
                $out += '</td> <td> <span style="color:red">', $line = 53, $out += $escape(booking.sumRealUnIncomeMoney), 
                $out += "</span> </td> <td > ", $line = 57, booking.allCount != booking.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 58, $out += $escape(booking.checkedCount), $line = 58, $out += $escape("/"), 
                $line = 58, $out += $escape(booking.allCount), $out += "</span> ", $line = 59), 
                $out += " ", $line = 60, booking.allCount == booking.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 61, $out += $escape(booking.checkedCount), $line = 61, $out += $escape("/"), 
                $line = 61, $out += $escape(booking.allCount), $out += "</span> ", $line = 62), 
                $out += ' </td> <td> <a data-entity-id="', $line = 67, $out += $escape(booking.partnerAgencyId), 
                $out += '" data-entity-partnerAgencyName="', $line = 67, $out += $escape(booking.partnerAgencyName), 
                $out += '" data-entity-year="', $line = 67, $out += $escape(searchParam.year), $out += '" data-entity-month="', 
                $line = 67, $out += $escape(searchParam.month), $out += '" class="cursor btn-financialbooking-check " > 对账 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 71, $out += $escape(booking.partnerAgencyId), $out += '" data-entity-partnerAgencyName="', 
                $line = 71, $out += $escape(booking.partnerAgencyName), $out += '" data-entity-year="', 
                $line = 71, $out += $escape(searchParam.year), $out += '" ', $line = 72, "" == searchParam.month ? ($out += " data-entity-startMonth=1 data-entity-endMonth=12 ", 
                $line = 74) : ($out += ' data-entity-startMonth="', $line = 75, $out += $escape(searchParam.month), 
                $out += '" data-entity-endMonth="', $line = 75, $out += $escape(searchParam.month), 
                $out += '" ', $line = 76), $out += ' class="cursor btn-financialbooking-balance"> 结算 </a> </td> </tr> ', 
                $line = 83;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 88, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 97, 0 == totalPage ? ($out += " 0/0 ", $line = 99) : ($out += " ", $line = 100, 
            $out += $escape(pageNo + 1), $out += "/", $line = 100, $out += $escape(totalPage), 
            $out += " ", $line = 101), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row Financialbooking" >\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left" style="margin-left: 15px">客户:</label>\r\n            <div class="col-sm-2">\r\n                <select  class="col-xs-12" name="partnerAgencyId">\r\n                    <option value ="">全部</option>\r\n                    {{each partnerAgencyNameListNew as booking index}}\r\n						<option value="{{booking.id}}" {{if searchParam.partnerAgencyId == booking.id}}selected="selected"{{/if}}>{{booking.travelAgencyName}}</option>\r\n					{{/each}}\r\n                </select>         \r\n             </div>    \r\n           <label class="control-label col-sm-1" >账期:</label>\r\n			<div class="col-sm-2" >\r\n				<select class="col-sm-5" name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select>\r\n				<select class="col-sm-5" name="month" style = "margin-left:10px;">\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n					{{/each}}\r\n				</select>\r\n			</div> \r\n            <button class="btn-height btn-sm search-btn btn-financialbooking-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div>\r\n    </div>\r\n    <div class="row bookingaurantList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>客户</th>\r\n                    <th>总账面应收</th>\r\n                    <th>总实际应收</th>\r\n                    <th>总实际已收</th>\r\n                    <th>总账面未收</th>\r\n                    <th>总实际未收</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each financialBookingOrderList as booking index}}\r\n                <tr>\r\n                    <td>{{booking.partnerAgencyName}}</td>\r\n                    <td>{{booking.sumNeedIncomeMoney}}</td>\r\n                    <td>{{booking.sumRealNeedIncomeMoney}}</td>\r\n                    <td>{{booking.sumRealIncomeMoney}}</td>\r\n                    <td>{{booking.sumUnIncomeMoney}}</td>\r\n                    <td>\r\n                    	<span style="color:red">{{booking.sumRealUnIncomeMoney}}</span>\r\n                    </td>\r\n                   \r\n                    <td >\r\n	                    {{if booking.allCount != booking.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{booking.checkedCount}}{{"/"}}{{booking.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if booking.allCount == booking.checkedCount}}\r\n	                      <span style="color:green"> {{booking.checkedCount}}{{"/"}}{{booking.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                   \r\n                    \r\n                    <td>\r\n                        <a data-entity-id="{{booking.partnerAgencyId}}" data-entity-partnerAgencyName="{{booking.partnerAgencyName}}" data-entity-year="{{searchParam.year}}" data-entity-month="{{searchParam.month}}" class="cursor btn-financialbooking-check " >\r\n\r\n                            	对账\r\n                        </a><a href="" class="cursor"> |</a>\r\n                        <a data-entity-id="{{booking.partnerAgencyId}}" data-entity-partnerAgencyName="{{booking.partnerAgencyName}}" data-entity-year="{{searchParam.year}}"\r\n                                {{if searchParam.month == ""}}\r\n                                 	 data-entity-startMonth=1 data-entity-endMonth=12 \r\n                                  {{else}}\r\n                                 	 data-entity-startMonth="{{searchParam.month}}" data-entity-endMonth="{{searchParam.month}}" \r\n                                {{/if}}\r\n                        		class="cursor btn-financialbooking-balance">\r\n\r\n                           		 结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                        <ul class="pagination">\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                                <a href="javascript:void(0)">\r\n                                    {{if totalPage == 0}}\r\n                                    0/0\r\n                                    {{else}}\r\n                                    {{pageNo+1}}/{{totalPage}}\r\n                                    {{/if}}\r\n                                </a>\r\n                            </li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});