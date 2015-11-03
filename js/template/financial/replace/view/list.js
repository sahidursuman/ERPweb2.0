/*TMODJS:{"debug":true,"version":121,"md5":"e19d16102dee53dd3298024532406099"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, yearList = $data.yearList, monthList = ($data.year, 
            $data.index, $data.monthList), financialBookingOrderList = ($data.month, $data.financialBookingOrderList), recordSize = ($data.booking, 
            $data.recordSize), $out = "";
            return $out += '<div class="row Financialbooking globalAdd" > <div class="form-horizontal search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">客户：</label> <input type="text" class="col-sm-12 choosePartnerAgency" style="width: 220px" placeholder="来源" name="travelAgencyName" value="', 
            $line = 5, $out += $escape(searchParam.travelAgencyName), $out += '" /> <input type="hidden" name="partnerAgencyId" value="', 
            $line = 6, $out += $escape(searchParam.partnerAgencyId), $out += '"/> <label class="control-label pull-left marginLeft-30" >账期：</label> <select class="col-sm-1" name="year" > ', 
            $line = 9, $each(yearList, function(year) {
                $out += ' <option value="', $line = 10, $out += $escape(year.value), $out += '" ', 
                $line = 10, searchParam.year == year.value && ($out += 'selected="selected"', $line = 10), 
                $out += ">", $line = 10, $out += $escape(year.value), $out += "</option> ", $line = 11;
            }), $out += ' </select> <select class="col-sm-1 marginLeft-30" name="month"> <option value ="">全部</option> ', 
            $line = 15, $each(monthList, function(month) {
                $out += ' <option value="', $line = 16, $out += $escape(month.value), $out += '" ', 
                $line = 16, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 16), $out += ">", $line = 16, $out += $escape(month.value), $out += "月</option> ", 
                $line = 17;
            }), $out += ' </select> <button class=" btn-sm search-btn marginLeft-30 btn-financialbooking-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row bookingaurantList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>客户</th> <th>总账面应收</th> <th>总实际应收</th> <th>总实际已收</th> <th>总账面未收</th> <th>总实际未收</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 37, $each(financialBookingOrderList, function(booking) {
                $out += " <tr> <td>", $line = 39, $out += $escape(booking.partnerAgencyName), $out += "</td> <td>", 
                $line = 40, $out += $escape(booking.sumNeedIncomeMoney), $out += "</td> <td>", $line = 41, 
                $out += $escape(booking.sumRealNeedIncomeMoney), $out += "</td> <td>", $line = 42, 
                $out += $escape(booking.sumRealIncomeMoney), $out += "</td> <td>", $line = 43, $out += $escape(booking.sumUnIncomeMoney), 
                $out += '</td> <td> <span style="color:red">', $line = 45, $out += $escape(booking.sumRealUnIncomeMoney), 
                $out += "</span> </td> <td > ", $line = 48, booking.allCount != booking.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 49, $out += $escape(booking.checkedCount), $line = 49, $out += $escape("/"), 
                $line = 49, $out += $escape(booking.allCount), $out += "</span> ", $line = 50), 
                $out += " ", $line = 51, booking.allCount == booking.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 52, $out += $escape(booking.checkedCount), $line = 52, $out += $escape("/"), 
                $line = 52, $out += $escape(booking.allCount), $out += "</span> ", $line = 53), 
                $out += ' </td> <td> <a data-entity-id="', $line = 56, $out += $escape(booking.partnerAgencyId), 
                $out += '" data-entity-partnerAgencyName="', $line = 56, $out += $escape(booking.partnerAgencyName), 
                $out += '" data-entity-year="', $line = 56, $out += $escape(searchParam.year), $out += '" data-entity-month="', 
                $line = 56, $out += $escape(searchParam.month), $out += '" class="cursor btn-financialbooking-check R-right" data-right="1290002"> 对账 </a> <label class="cursor R-right" data-right="1290002"> <a class="R-right" data-right="1290003"> |</a></label> <a data-entity-id="', 
                $line = 60, $out += $escape(booking.partnerAgencyId), $out += '" data-entity-partnerAgencyName="', 
                $line = 60, $out += $escape(booking.partnerAgencyName), $out += '" data-entity-year="', 
                $line = 60, $out += $escape(searchParam.year), $out += '" ', $line = 61, "" == searchParam.month ? ($out += " data-entity-startMonth=1 data-entity-endMonth=12 ", 
                $line = 63) : ($out += ' data-entity-startMonth="', $line = 64, $out += $escape(searchParam.month), 
                $out += '" data-entity-endMonth="', $line = 64, $out += $escape(searchParam.month), 
                $out += '" ', $line = 65), $out += ' class="cursor btn-financialbooking-balance R-right" data-right="1290003"> 结算 </a> </td> </tr> ', 
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
                source: '<div class="row Financialbooking globalAdd" >\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left" style="margin-left: 15px">客户：</label>\r\n            	<input type="text" class="col-sm-12 choosePartnerAgency" style="width: 220px" placeholder="来源" name="travelAgencyName" value="{{searchParam.travelAgencyName}}" />\r\n				<input type="hidden" name="partnerAgencyId" value="{{searchParam.partnerAgencyId}}"/>\r\n           <label class="control-label pull-left marginLeft-30" >账期：</label>\r\n				<select class="col-sm-1" name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select>\r\n				<select class="col-sm-1 marginLeft-30" name="month">\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n					{{/each}}\r\n				</select>\r\n            <button class=" btn-sm search-btn marginLeft-30 btn-financialbooking-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div>\r\n    </div>\r\n    <div class="row bookingaurantList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>客户</th>\r\n                    <th>总账面应收</th>\r\n                    <th>总实际应收</th>\r\n                    <th>总实际已收</th>\r\n                    <th>总账面未收</th>\r\n                    <th>总实际未收</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                {{each financialBookingOrderList as booking index}}\r\n                <tr>\r\n                    <td>{{booking.partnerAgencyName}}</td>\r\n                    <td>{{booking.sumNeedIncomeMoney}}</td>\r\n                    <td>{{booking.sumRealNeedIncomeMoney}}</td>\r\n                    <td>{{booking.sumRealIncomeMoney}}</td>\r\n                    <td>{{booking.sumUnIncomeMoney}}</td>\r\n                    <td>\r\n                    	<span style="color:red">{{booking.sumRealUnIncomeMoney}}</span>\r\n                    </td>\r\n                    <td >\r\n	                    {{if booking.allCount != booking.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{booking.checkedCount}}{{"/"}}{{booking.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if booking.allCount == booking.checkedCount}}\r\n	                      <span style="color:green"> {{booking.checkedCount}}{{"/"}}{{booking.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a data-entity-id="{{booking.partnerAgencyId}}" data-entity-partnerAgencyName="{{booking.partnerAgencyName}}" data-entity-year="{{searchParam.year}}" data-entity-month="{{searchParam.month}}" class="cursor btn-financialbooking-check R-right" data-right="1290002">\r\n                            	对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right="1290002"> <a class="R-right" data-right="1290003"> |</a></label>\r\n                        <a data-entity-id="{{booking.partnerAgencyId}}" data-entity-partnerAgencyName="{{booking.partnerAgencyName}}" data-entity-year="{{searchParam.year}}"\r\n                                {{if searchParam.month == ""}}\r\n                                 	 data-entity-startMonth=1 data-entity-endMonth=12 \r\n                                  {{else}}\r\n                                 	 data-entity-startMonth="{{searchParam.month}}" data-entity-endMonth="{{searchParam.month}}" \r\n                                {{/if}}\r\n                        		class="cursor btn-financialbooking-balance R-right" data-right="1290003">\r\n                           		 结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});