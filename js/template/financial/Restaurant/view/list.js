/*TMODJS:{"debug":true,"version":381,"md5":"207c9a3fb740a4d7a07ba7ea3a758a57"}*/
define(function(require) {
    return require("../../../template")("financial/Restaurant/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, financialRestaurantList = $data.financialRestaurantList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row"> <div class="form-group T-search-area" > <label>餐厅：</label> <input type="text" class="T-chooseRestaurant" name="restaurantName" value="', 
            $line = 4, $out += $escape(searchParam.restaurantName), $out += '" /> <input type="hidden" name="restaurantId" value="', 
            $line = 5, $out += $escape(searchParam.restaurantId), $out += '" /> <label class="control-label marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 8, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <button class="btn-sm search-btn T-search marginLeft-30"><i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>餐厅</th> <th>账面应付</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 31, $each(financialRestaurantList, function(rs) {
                $out += ' <tr data-id="', $line = 32, $out += $escape(rs.restaurantId), $out += '" data-name="', 
                $line = 32, $out += $escape(rs.restaurantName), $out += '"> <td>', $line = 33, $out += $escape(rs.restaurantName), 
                $out += "</td> <td>", $line = 34, $out += $escape(rs.sumNeedPayMoney), $out += "</td> <td>", 
                $line = 35, $out += $escape(rs.sumSettlementMoney), $out += "</td> <td>", $line = 36, 
                $out += $escape(rs.sumPayedMoney), $out += "</td> <td><span ", $line = 37, 0 != rs.sumUnPayedMoney && ($out += 'style="color:red"', 
                $line = 37), $out += ">", $line = 37, $out += $escape(rs.sumUnPayedMoney), $out += "</span></td> <td>", 
                $line = 38, rs.allCheckCount != rs.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 39, $out += $escape(rs.checkedCount), $line = 39, $out += $escape("/"), 
                $line = 39, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 40), 
                $out += " ", $line = 41, rs.allCheckCount == rs.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 42, $out += $escape(rs.checkedCount), $line = 42, $out += $escape("/"), 
                $line = 42, $out += $escape(rs.allCheckCount), $out += "</span> ", $line = 43), 
                $out += " </td> <td>", $line = 45, rs.allPayCount != rs.payedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 46, $out += $escape(rs.payedCount), $line = 46, $out += $escape("/"), $line = 46, 
                $out += $escape(rs.allPayCount), $out += "</span> ", $line = 47), $out += " ", $line = 48, 
                rs.allPayCount == rs.payedCount && ($out += ' <span style="color:green"> ', $line = 49, 
                $out += $escape(rs.payedCount), $line = 49, $out += $escape("/"), $line = 49, $out += $escape(rs.allPayCount), 
                $out += "</span> ", $line = 50), $out += ' </td> <td> <a class="cursor T-option T-check R-right" data-right="1240002">对账</a> <label class="cursor R-right" data-right="1240002"><a class="R-right" data-right="1240003"> |</a></label> <a class="cursor T-option T-clear R-right" data-right="1240003">付款</a> </td> </tr> ', 
                $line = 58;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 63, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">   \r\n    <div class="form-group T-search-area" >      \r\n        <label>餐厅：</label>\r\n        <input type="text" class="T-chooseRestaurant" name="restaurantName" value="{{searchParam.restaurantName}}" />\r\n        <input type="hidden" name="restaurantId" value="{{searchParam.restaurantId}}" />  \r\n\r\n        <label class="control-label marginLeft-30">账期：</label>\r\n        <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />   \r\n        <label>&nbsp;至&nbsp;</label>\r\n        <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />   \r\n        <button class="btn-sm search-btn T-search marginLeft-30"><i class="ace-icon fa fa-search"></i> 搜索 </button> \r\n    </div>\r\n\r\n    <div class="row">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>餐厅</th>\r\n                    <th>账面应付</th>\r\n                    <th>结算金额</th>\r\n                    <th>已付金额</th>\r\n                    <th>未付金额</th>\r\n                    <th>对账进度</th>\r\n                    <th>付款进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody class="T-list">\r\n                {{each financialRestaurantList as rs}}\r\n                <tr data-id="{{rs.restaurantId}}" data-name="{{rs.restaurantName}}">\r\n                    <td>{{rs.restaurantName}}</td>\r\n                    <td>{{rs.sumNeedPayMoney}}</td>\r\n                    <td>{{rs.sumSettlementMoney}}</td>\r\n                    <td>{{rs.sumPayedMoney}}</td>\r\n                    <td><span {{if rs.sumUnPayedMoney != 0}}style="color:red"{{/if}}>{{rs.sumUnPayedMoney}}</span></td>\r\n                    <td>{{if rs.allCheckCount != rs.checkedCount}}\r\n	                        <span style="color:#ff9900"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if rs.allCheckCount == rs.checkedCount}}\r\n	                        <span style="color:green"> {{rs.checkedCount}}{{"/"}}{{rs.allCheckCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                    <td>{{if rs.allPayCount != rs.payedCount}}\r\n                            <span style="color:#ff9900"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span>\r\n                        {{/if}}\r\n                        {{if rs.allPayCount == rs.payedCount}}\r\n                            <span style="color:green"> {{rs.payedCount}}{{"/"}}{{rs.allPayCount}}</span>\r\n                        {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a class="cursor T-option T-check R-right" data-right="1240002">对账</a>\r\n                        <label class="cursor R-right" data-right="1240002"><a class="R-right" data-right="1240003"> |</a></label>\r\n                        <a class="cursor T-option T-clear R-right" data-right="1240003">付款</a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});