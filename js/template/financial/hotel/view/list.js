/*TMODJS:{"debug":true,"version":155,"md5":"327310f2ce24251329f2bdf402cde130"}*/
define(function(require) {
    return require("../../../template")("financial/hotel/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, hotelNameListNew = $data.hotelNameListNew, $escape = ($data.hotel, 
            $data.index, $utils.$escape), searchParam = $data.searchParam, yearList = $data.yearList, monthList = ($data.year, 
            $data.monthList), financialHotelSettlementList = ($data.month, $data.financialHotelSettlementList), recordSize = ($data.$index, 
            $data.recordSize), $out = "";
            return $out += '<div class="row Financialhotel" > <div class="form-horizontal T-search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">酒店：</label> <select class="col-xs-12" name="hotelId" style="width: 220px"> <option value ="">全部</option> ', 
            $line = 7, $each(hotelNameListNew, function(hotel) {
                $out += ' <option value="', $line = 8, $out += $escape(hotel.id), $out += '" ', 
                $line = 8, searchParam.hotelId == hotel.id && ($out += 'selected="selected"', $line = 8), 
                $out += ">", $line = 8, $out += $escape(hotel.name), $out += "</option> ", $line = 9;
            }), $out += ' </select> <label class="control-label pull-left marginLeft-30" >账期：</label> <select class="col-sm-1 " name="year" > ', 
            $line = 13, $each(yearList, function(year) {
                $out += ' <option value="', $line = 14, $out += $escape(year.value), $out += '" ', 
                $line = 14, searchParam.year == year.value && ($out += 'selected="selected"', $line = 14), 
                $out += ">", $line = 14, $out += $escape(year.value), $out += "</option> ", $line = 15;
            }), $out += ' </select> <select class="col-sm-1 marginLeft-30" name="month"> <option value ="">全部</option> ', 
            $line = 19, $each(monthList, function(month) {
                $out += ' <option value="', $line = 20, $out += $escape(month.value), $out += '" ', 
                $line = 20, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 20), $out += ">", $line = 20, $out += $escape(month.value), $out += "月</option> ", 
                $line = 21;
            }), $out += ' </select> <button class="btn-sm T-search search-btn marginLeft-30 " > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row hotelaurantList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th class="col-sm-1">酒店</th> <th>总账面应付</th> <th>总实际应付</th> <th>总实际已付</th> <th>总账面未付</th> <th>总实际未付</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 44, $each(financialHotelSettlementList, function(hotel) {
                $out += ' <tr data-id="', $line = 45, $out += $escape(hotel.hotelId), $out += '" data-name="', 
                $line = 45, $out += $escape(hotel.hotelName), $out += '"> <td>', $line = 46, $out += $escape(hotel.hotelName), 
                $out += "</td> <td>", $line = 47, $out += $escape(hotel.sumNeedPayMoney), $out += "</td> <td>", 
                $line = 48, $out += $escape(hotel.sumRealNeedPayMoney), $out += "</td> <td>", $line = 49, 
                $out += $escape(hotel.sumRealPayedMoney), $out += "</td> <td>", $line = 50, $out += $escape(hotel.sumUnPayedMoney), 
                $out += '</td> <td> <span style="color:red">', $line = 52, $out += $escape(hotel.sumRealUnPayedMoney), 
                $out += "</span> </td> <td > ", $line = 56, hotel.allCount != hotel.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 57, $out += $escape(hotel.checkedCount), $line = 57, $out += $escape("/"), 
                $line = 57, $out += $escape(hotel.allCount), $out += "</span> ", $line = 58), $out += " ", 
                $line = 59, hotel.allCount == hotel.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 60, $out += $escape(hotel.checkedCount), $line = 60, $out += $escape("/"), 
                $line = 60, $out += $escape(hotel.allCount), $out += "</span> ", $line = 61), $out += ' </td> <td> <a class="cursor T-option T-check R-right" data-right="1220002"> 对账 </a> <label class="cursor R-right" data-right="1220002"><a class="R-right" data-right="1220003"> |</a></label> <a class="cursor R-right T-option T-clear" data-right="1220003"> 结算 </a> </td> </tr> ', 
                $line = 73;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 78, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row Financialhotel" >\r\n    <div class="form-horizontal T-search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left" style="margin-left: 15px">酒店：</label>\r\n                <select  class="col-xs-12" name="hotelId" style="width: 220px">\r\n                    <option value ="">全部</option>\r\n                    {{each hotelNameListNew as hotel index}}\r\n						<option value="{{hotel.id}}" {{if searchParam.hotelId == hotel.id}}selected="selected"{{/if}}>{{hotel.name}}</option>\r\n					{{/each}} \r\n                </select>\r\n           <label class="control-label pull-left marginLeft-30" >账期：</label>\r\n				<select class="col-sm-1 " name="year" >\r\n					{{each yearList as year index}}\r\n						<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					{{/each}}\r\n				</select>\r\n				<select class="col-sm-1 marginLeft-30" name="month">\r\n				    <option value ="">全部</option>\r\n					{{each monthList as month index}}\r\n						<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n					{{/each}}\r\n				</select>\r\n            <button class="btn-sm  T-search search-btn marginLeft-30 " >\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="row hotelaurantList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th class="col-sm-1">酒店</th>\r\n                    <th>总账面应付</th>\r\n                    <th>总实际应付</th>\r\n                    <th>总实际已付</th>\r\n                    <th>总账面未付</th>\r\n                    <th>总实际未付</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody class="T-list">\r\n                {{each financialHotelSettlementList as hotel}}\r\n                <tr data-id="{{hotel.hotelId}}" data-name="{{hotel.hotelName}}">\r\n                    <td>{{hotel.hotelName}}</td>\r\n                    <td>{{hotel.sumNeedPayMoney}}</td>\r\n                    <td>{{hotel.sumRealNeedPayMoney}}</td>\r\n                    <td>{{hotel.sumRealPayedMoney}}</td>\r\n                    <td>{{hotel.sumUnPayedMoney}}</td>\r\n                    <td>\r\n                    	<span style="color:red">{{hotel.sumRealUnPayedMoney}}</span>\r\n                    </td>\r\n                   \r\n                    <td >\r\n	                    {{if hotel.allCount != hotel.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{hotel.checkedCount}}{{"/"}}{{hotel.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if hotel.allCount == hotel.checkedCount}}\r\n	                      <span style="color:green"> {{hotel.checkedCount}}{{"/"}}{{hotel.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a class="cursor T-option T-check R-right" data-right="1220002">\r\n                            	对账\r\n                       </a>\r\n                       <label class="cursor R-right" data-right="1220002"><a class="R-right" data-right="1220003"> |</a></label>\r\n                        <a class="cursor R-right T-option T-clear" data-right="1220003">\r\n                           		 结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});