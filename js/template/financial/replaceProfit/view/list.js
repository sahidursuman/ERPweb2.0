/*TMODJS:{"debug":true,"version":192,"md5":"7fe38c48a26b8d1884297b1ae437f007"}*/
define(function(require) {
    return require("../../../template")("financial/replaceProfit/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, allSumNeedGetMoney = $data.allSumNeedGetMoney, allSumCostMoney = $data.allSumCostMoney, allGrossProfit = $data.allGrossProfit, $each = $utils.$each, bookingOrderList = $data.bookingOrderList, recordSize = ($data.booking, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row bookingProFit"> <div class="col-xs-12"> <div class="form-group"> <div class="search-area border" style="margin:0px;border-style:solid solid none solid"> <div class="col-xs-1"> <input type="text" value = "', 
            $line = 6, $out += $escape(searchParam.partnerAgencyName), $out += '" name ="chooseAgencies" class="col-xs-12" placeholder="客户" /> <input type="hidden" value="', 
            $line = 7, $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" /> </div> <div class="col-xs-1"> <input type="text" value = "', 
            $line = 10, $out += $escape(searchParam.hotelName), $out += '" name="chooseLineHotels" class="col-xs-12" placeholder="酒店" /> <input type="hidden" value="', 
            $line = 11, $out += $escape(searchParam.hotelId), $out += '" name="hotelId" /> </div> <div class="col-xs-1"> <input type="text" value = "', 
            $line = 15, $out += $escape(searchParam.scenicName), $out += '" name="chooseScenics" class="col-xs-12" placeholder="景区" /> <input type="hidden" value="', 
            $line = 16, $out += $escape(searchParam.scenicId), $out += '" name="scenicId" /> </div> <div class="col-xs-1"> <select class="col-sm-12" name="ticketType"> <option value="">票务</option> <option value="1" ', 
            $line = 21, 1 == searchParam.type && ($out += 'selected="selected"', $line = 21), 
            $out += '>飞机票</option> <option value="2" ', $line = 22, 2 == searchParam.type && ($out += 'selected="selected"', 
            $line = 22), $out += '>汽车票</option> <option value="3" ', $line = 23, 3 == searchParam.type && ($out += 'selected="selected"', 
            $line = 23), $out += '>火车票</option> <option value="4" ', $line = 24, 4 == searchParam.type && ($out += 'selected="selected"', 
            $line = 24), $out += '>轮船票</option> </select> </div> <div class="col-xs-1"> <input type="text" value = "', 
            $line = 28, $out += $escape(searchParam.needSeatCount), $out += '" name="chooseBus" class="col-xs-12" placeholder="旅游车" /> <input type="hidden" value="', 
            $line = 29, $out += $escape(searchParam.needSeatCount), $out += '" name="busSeat" /> </div> <div class="col-xs-3"> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 date-picker" name="startTime" placeholder="开始日期" value="', 
            $line = 34, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 date-picker" name="endTime" placeholder="结束日期" value="', 
            $line = 42, $out += $escape(searchParam.endTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <button class="search-btn btn-sm btn-height btn-bookingProFit-search" style="border-top-width: 4px;border-bottom-width: 4px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div style="clear:both;height:0px;line-height:0px;"></div> </div> <div class="form-group border" style="margin:0px;border-style:dashed solid solid solid""> <label class=" control-label " style="margin-left:12px;">总应收：', 
            $line = 60, $out += $escape(allSumNeedGetMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总应付：', 
            $line = 61, $out += $escape(allSumCostMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总毛利：', 
            $line = 62, $out += $escape(allGrossProfit), $out += '</label> </div> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th rowspan="2">订单代号</th> <th rowspan="2">客户</th> <th rowspan="2">应收</th> <th colspan="4">项目</th> <th rowspan="2">应付</th> <th rowspan="2">毛利</th> </tr> <tr class="bg-blur"> <th>酒店</th> <th>票务</th> <th>景区</th> <th>旅游车</th> </tr> </thead> <tbody>', 
            $line = 82, $each(bookingOrderList, function(booking) {
                $out += ' <tr data-entity-id="', $line = 83, $out += $escape(booking.id), $out += '"> <td>', 
                $line = 84, $out += $escape(booking.orderNumber), $out += "</td> <td>", $line = 85, 
                null != booking.partnerAgency && ($line = 85, $out += $escape(booking.partnerAgency.travelAgencyName), 
                $line = 85), $out += "</td> <td>", $line = 86, $out += $escape(booking.sumNeedGetMoney), 
                $out += "</td> <td> ", $line = 88, "" == booking.financialHotel ? ($out += " - ", 
                $line = 90) : ($out += " ", $line = 91, $out += $escape(booking.financialHotel), 
                $out += " ", $line = 92), $out += " </td> <td> ", $line = 95, "" == booking.financialTicket ? ($out += " - ", 
                $line = 97) : ($out += " ", $line = 98, $out += $escape(booking.financialTicket), 
                $out += " ", $line = 99), $out += " </td> <td> ", $line = 102, "" == booking.financialScenic ? ($out += " - ", 
                $line = 104) : ($out += " ", $line = 105, $out += $escape(booking.financialScenic), 
                $out += " ", $line = 106), $out += " </td> <td> ", $line = 109, "" == booking.financialBus ? ($out += " - ", 
                $line = 111) : ($out += " ", $line = 112, $out += $escape(booking.financialBus), 
                $out += " ", $line = 113), $out += " </td> <td>", $line = 115, $out += $escape(booking.sumCostMoney), 
                $out += "</td> <td>", $line = 116, $out += $escape(booking.financialGrossProfit), 
                $out += "</td> </tr>", $line = 117;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 122, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 131, 0 == totalPage ? ($out += " 0/0 ", $line = 133) : ($out += " ", $line = 134, 
            $out += $escape(pageNo + 1), $out += "/", $line = 134, $out += $escape(totalPage), 
            $out += " ", $line = 135), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row bookingProFit">\r\n	<div class="col-xs-12">\r\n	  <div class="form-group">\r\n		<div class="search-area border" style="margin:0px;border-style:solid solid none solid">\r\n			<div class="col-xs-1"> \r\n	            <input type="text" value = "{{searchParam.partnerAgencyName}}" name ="chooseAgencies" class="col-xs-12" placeholder="客户" />\r\n	            <input type="hidden" value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" />\r\n            </div>\r\n            <div class="col-xs-1"> \r\n	            <input type="text" value = "{{searchParam.hotelName}}" name="chooseLineHotels" class="col-xs-12" placeholder="酒店" />\r\n	            <input type="hidden" value="{{searchParam.hotelId}}" name="hotelId" />\r\n			</div>\r\n			 \r\n			<div class="col-xs-1">\r\n	            <input type="text" value = "{{searchParam.scenicName}}" name="chooseScenics" class="col-xs-12" placeholder="景区" />\r\n	            <input type="hidden" value="{{searchParam.scenicId}}" name="scenicId" />\r\n			</div>\r\n			<div class="col-xs-1">\r\n	             <select class="col-sm-12" name="ticketType">\r\n						<option value="">票务</option>\r\n						<option value="1" {{if searchParam.type == 1}}selected="selected"{{/if}}>飞机票</option>\r\n						<option value="2" {{if searchParam.type == 2}}selected="selected"{{/if}}>汽车票</option>\r\n						<option value="3" {{if searchParam.type == 3}}selected="selected"{{/if}}>火车票</option>\r\n						<option value="4" {{if searchParam.type == 4}}selected="selected"{{/if}}>轮船票</option>\r\n				</select>\r\n			</div> \r\n			<div class="col-xs-1">\r\n				<input type="text" value = "{{searchParam.needSeatCount}}" name="chooseBus" class="col-xs-12" placeholder="旅游车" />\r\n	            <input type="hidden" value="{{searchParam.needSeatCount}}" name="busSeat" />\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<div class="col-xs-6">  \r\n					<div class="input-group">\r\n						<input class="col-xs-12 date-picker" name="startTime" placeholder="开始日期" value="{{searchParam.startTime}}" type="text" />	\r\n						<span class="input-group-addon">\r\n							<i class="fa fa-calendar"></i>\r\n						</span>\r\n					</div>\r\n				</div>\r\n				<div class="col-xs-6">\r\n					<div class="input-group">\r\n						<input class="col-xs-12 date-picker" name="endTime" placeholder="结束日期" value="{{searchParam.endTime}}" type="text" />	\r\n						<span class="input-group-addon">\r\n							<i class="fa fa-calendar"></i>\r\n						</span>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-2">			\r\n				<button class="search-btn btn-sm btn-height btn-bookingProFit-search" style="border-top-width: 4px;border-bottom-width: 4px;">\r\n					<i class="ace-icon fa fa-search"></i>\r\n					搜索\r\n				</button>\r\n			</div>\r\n                \r\n           \r\n			<div style="clear:both;height:0px;line-height:0px;"></div>\r\n		</div>\r\n		<div class="form-group border" style="margin:0px;border-style:dashed solid solid solid"">\r\n                    <label class=" control-label " style="margin-left:12px;">总应收：{{allSumNeedGetMoney}}</label>\r\n                    <label class=" control-label " style="margin-left:30px;">总应付：{{allSumCostMoney}}</label>\r\n                    <label class=" control-label " style="margin-left:30px;">总毛利：{{allGrossProfit}}</label>\r\n        </div>\r\n		</div>\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th rowspan="2">订单代号</th>\r\n					<th rowspan="2">客户</th>\r\n					<th rowspan="2">应收</th>\r\n					<th colspan="4">项目</th>\r\n					<th rowspan="2">应付</th>\r\n					<th rowspan="2">毛利</th>\r\n				</tr>\r\n				<tr class="bg-blur">\r\n					<th>酒店</th>\r\n					<th>票务</th>\r\n					<th>景区</th>\r\n					<th>旅游车</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody>{{each bookingOrderList as booking}}\r\n				<tr data-entity-id="{{booking.id}}">\r\n					<td>{{booking.orderNumber}}</td>\r\n					<td>{{if booking.partnerAgency != null}}{{booking.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n					<td>{{booking.sumNeedGetMoney}}</td>\r\n					<td>\r\n					{{if booking.financialHotel == ""}}\r\n					-\r\n					{{else}}\r\n					{{booking.financialHotel}}\r\n					{{/if}}\r\n					</td>\r\n					<td>\r\n					{{if booking.financialTicket == ""}}\r\n					-\r\n					{{else}}\r\n					{{booking.financialTicket}}\r\n					{{/if}}\r\n					</td>\r\n					<td>\r\n					{{if booking.financialScenic == ""}}\r\n					-\r\n					{{else}}\r\n					{{booking.financialScenic}}\r\n					{{/if}}\r\n					</td>\r\n					<td>\r\n					{{if booking.financialBus == ""}}\r\n					-\r\n					{{else}}\r\n					{{booking.financialBus}}\r\n					{{/if}}\r\n					</td>\r\n					<td>{{booking.sumCostMoney}}</td>\r\n					<td>{{booking.financialGrossProfit}}</td>\r\n				</tr>{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});