/*TMODJS:{"debug":true,"version":203,"md5":"b2e9d33ce37c68075436e0456de77bfd"}*/
define(function(require) {
    return require("../../../template")("financial/hotel/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, financialHotelList = $data.financialHotelList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row" > <div class="form-horizontal T-search-area"> <div class="form-group" > <label class="control-label pull-left" style="margin-left: 15px">酒店：</label> <input type="text" class="T-chooseHotel col-xs-1" name="hotelName" value="', 
            $line = 5, $out += $escape(searchParam.hotelName), $out += '" /> <input type="hidden" name="hotelId" value="', 
            $line = 6, $out += $escape(searchParam.hotelId), $out += '" /> <label class="control-label pull-left marginLeft-30" >账期：</label> <div class="col-xs-1"> <div class="input-group"> <input class="col-xs-12 date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 11, $out += $escape(searchParam.startTime), $out += '" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left">至</label> <div class="col-xs-1"> <div class="input-group"> <input class="col-xs-12 date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 20, $out += $escape(searchParam.endTime), $out += '" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <button class="btn-sm T-search search-btn marginLeft-30 " > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div class="row hotelaurantList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>酒店</th> <th>账面应付</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 48, $each(financialHotelList, function(rs) {
                $out += ' <tr data-id="', $line = 49, $out += $escape(rs.hotelId), $out += '" data-name="', 
                $line = 49, $out += $escape(rs.hotelName), $out += '"> <td>', $line = 50, $out += $escape(rs.hotelName), 
                $out += "</td> <td>", $line = 51, $out += $escape(rs.sumNeedPayMoney), $out += "</td> <td>", 
                $line = 52, $out += $escape(rs.sumSettlementMoney), $out += "</td> <td>", $line = 53, 
                $out += $escape(rs.sumPayedMoney), $out += "</td> <td>", $line = 54, $out += $escape(rs.sumUnPayedMoney), 
                $out += "</td> <td>", $line = 55, rs.allCheckCount != rs.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 56, $out += $escape(rs.checkedCount), $line = 56, $out += $escape("/"), 
                $line = 56, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 57), 
                $out += " ", $line = 58, rs.allCheckCount == rs.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 59, $out += $escape(rs.checkedCount), $line = 59, $out += $escape("/"), 
                $line = 59, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 60), 
                $out += " </td> <td>", $line = 62, rs.allPayCount != rs.payedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 63, $out += $escape(rs.payedCount), $line = 63, $out += $escape("/"), $line = 63, 
                $out += $escape(rs.allPayCount), $out += "</span> ", $line = 64), $out += " ", $line = 65, 
                rs.allPayCount == rs.payedCount && ($out += ' <span style="color:green"> ', $line = 66, 
                $out += $escape(rs.payedCount), $line = 66, $out += $escape("/"), $line = 66, $out += $escape(rs.allPayCount), 
                $out += "</span> ", $line = 67), $out += ' </td> <td> <a class="cursor T-option T-check R-right" data-right="1220002">对账</a> <label class="cursor R-right" data-right="1220002"><a class="R-right" data-right="1220003"> |</a></label> <a class="cursor R-right T-option T-clear" data-right="1220003">付款</a> </td> </tr> ', 
                $line = 75;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 80, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row" >\r\n    <div class="form-horizontal T-search-area">\r\n        <div class="form-group" > \r\n            <label class="control-label pull-left" style="margin-left: 15px">酒店：</label>\r\n            <input type="text" class="T-chooseHotel col-xs-1" name="hotelName" value="{{searchParam.hotelName}}" />\r\n            <input type="hidden" name="hotelId" value="{{searchParam.hotelId}}" />  \r\n\r\n            <label class="control-label pull-left marginLeft-30" >账期：</label>\r\n            <div class="col-xs-1">\r\n                <div class="input-group">\r\n                    <input class="col-xs-12 date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime}}" />   \r\n                    <span class="input-group-addon">\r\n                        <i class="fa fa-calendar"></i>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n            <label class="pull-left">至</label>\r\n            <div class="col-xs-1">\r\n                <div class="input-group">\r\n                    <input class="col-xs-12 date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime}}" />   \r\n                    <span class="input-group-addon">\r\n                        <i class="fa fa-calendar"></i>\r\n                    </span>\r\n                </div>\r\n            </div>\r\n\r\n            <button class="btn-sm  T-search search-btn marginLeft-30 " >\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="row hotelaurantList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                    <tr class="bg-blur">\r\n                        <th>酒店</th>\r\n                        <th>账面应付</th>\r\n                        <th>结算金额</th>\r\n                        <th>已付金额</th>\r\n                        <th>未付金额</th>\r\n                        <th>对账进度</th>\r\n                        <th>付款进度</th>\r\n                        <th>操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody class="T-list">\r\n                    {{each financialHotelList as rs}}\r\n                    <tr data-id="{{rs.hotelId}}" data-name="{{rs.hotelName}}">\r\n                        <td>{{rs.hotelName}}</td>\r\n                        <td>{{rs.sumNeedPayMoney}}</td>\r\n                        <td>{{rs.sumSettlementMoney}}</td>\r\n                        <td>{{rs.sumPayedMoney}}</td>\r\n                        <td>{{rs.sumUnPayedMoney}}</td>\r\n                        <td>{{if rs.allCheckCount != rs.checkedCount}}\r\n                                <span style="color:#ff9900"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span>\r\n                            {{/if}}\r\n                            {{if rs.allCheckCount == rs.checkedCount}}\r\n                                <span style="color:green"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>{{if rs.allPayCount != rs.payedCount}}\r\n                                <span style="color:#ff9900"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span>\r\n                            {{/if}}\r\n                            {{if rs.allPayCount == rs.payedCount}}\r\n                                <span style="color:green"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span>\r\n                            {{/if}}\r\n                        </td>\r\n                        <td>\r\n                            <a class="cursor T-option T-check R-right" data-right="1220002">对账</a>\r\n                            <label class="cursor R-right" data-right="1220002"><a class="R-right" data-right="1220003"> |</a></label>\r\n                            <a class="cursor R-right T-option T-clear" data-right="1220003">付款</a>\r\n                        </td>\r\n                    </tr>\r\n                    {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});