/*TMODJS:{"debug":true,"version":310,"md5":"d6e82be7d1e036caf4123693c14dda5d"}*/
define(function(require) {
    return require("../../../template")("financial/Restaurant/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, restaurantNameListNew = $data.restaurantNameListNew, $escape = ($data.restaurant, 
            $data.index, $utils.$escape), searchParam = $data.searchParam, yearList = $data.yearList, monthList = ($data.year, 
            $data.monthList), financialRestaurantSettlementList = ($data.month, $data.financialRestaurantSettlementList), recordSize = ($data.rest, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row"> <div class="form-group T-search-area" > <label class="control-label pull-left" style="margin-left: 15px">餐厅：</label> <select class="col-xs-12" name="restaurantId" style="width: 220px"> <option value ="">全部</option> ', 
            $line = 6, $each(restaurantNameListNew, function(restaurant) {
                $out += ' <option value="', $line = 7, $out += $escape(restaurant.id), $out += '" ', 
                $line = 7, searchParam.restaurantId == restaurant.id && ($out += 'selected="selected"', 
                $line = 7), $out += ">", $line = 7, $out += $escape(restaurant.name), $out += "</option> ", 
                $line = 8;
            }), $out += ' </select> <label class="control-label pull-left marginLeft-30" >账期：</label> <select class="col-sm-1" name="year" > ', 
            $line = 12, $each(yearList, function(year) {
                $out += ' <option value="', $line = 13, $out += $escape(year.value), $out += '" ', 
                $line = 13, searchParam.year == year.value && ($out += 'selected="selected"', $line = 13), 
                $out += ">", $line = 13, $out += $escape(year.value), $out += "</option> ", $line = 14;
            }), $out += ' </select> <select class="col-sm-1 marginLeft-30" name="month" > <option value ="">全部</option> ', 
            $line = 18, $each(monthList, function(month) {
                $out += ' <option value="', $line = 19, $out += $escape(month.value), $out += '" ', 
                $line = 19, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 19), $out += ">", $line = 19, $out += $escape(month.value), $out += "月</option> ", 
                $line = 20;
            }), $out += ' </select> <button class=" btn-sm search-btn T-search marginLeft-30"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="row restaurantList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>餐厅</th> <th>总账面应付</th> <th>总实际应付</th> <th>总实际已付</th> <th>总账面未付</th> <th>总实际未付</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 42, $each(financialRestaurantSettlementList, function(rest) {
                $out += ' <tr data-id="', $line = 43, $out += $escape(rest.restaurantId), $out += '" data-name="', 
                $line = 43, $out += $escape(rest.restaurantName), $out += '"> <td>', $line = 44, 
                $out += $escape(rest.restaurantName), $out += "</td> <td>", $line = 45, $out += $escape(rest.sumNeedPayMoney), 
                $out += "</td> <td>", $line = 46, $out += $escape(rest.sumRealNeedPayMoney), $out += "</td> <td>", 
                $line = 47, $out += $escape(rest.sumRealPayedMoney), $out += "</td> <td>", $line = 48, 
                $out += $escape(rest.sumUnPayedMoney), $out += "</td> <td><span ", $line = 49, 0 != rest.sumRealUnPayedMoney && ($out += 'style="color:red"', 
                $line = 49), $out += ">", $line = 49, $out += $escape(rest.sumRealUnPayedMoney), 
                $out += "</span></td> <td>", $line = 50, rest.allCount != rest.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 51, $out += $escape(rest.checkedCount), $line = 51, $out += $escape("/"), 
                $line = 51, $out += $escape(rest.allCount), $out += "</span> ", $line = 52), $out += " ", 
                $line = 53, rest.allCount == rest.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 54, $out += $escape(rest.checkedCount), $line = 54, $out += $escape("/"), 
                $line = 54, $out += $escape(rest.allCount), $out += "</span> ", $line = 55), $out += ' </td> <td> <a class="cursor T-option T-check R-right" data-right="1240002">对账</a> <label class="cursor R-right" data-right="1240002"><a class="R-right" data-right="1240003"> |</a></label> <a class="cursor T-option T-clear R-right" data-right="1240003">结算</a> </td> </tr> ', 
                $line = 63;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 68, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">   \r\n    <div class="form-group T-search-area" >      \r\n        <label class="control-label pull-left" style="margin-left: 15px">餐厅：</label>\r\n        <select  class="col-xs-12" name="restaurantId" style="width: 220px">\r\n            <option value ="">全部</option>\r\n            {{each restaurantNameListNew as restaurant index}}\r\n				<option value="{{restaurant.id}}" {{if searchParam.restaurantId == restaurant.id}}selected="selected"{{/if}}>{{restaurant.name}}</option>\r\n			{{/each}}\r\n        </select>         \r\n        <label class="control-label pull-left marginLeft-30" >账期：</label>\r\n		<select class="col-sm-1" name="year" >\r\n			{{each yearList as year index}}\r\n				<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n			{{/each}}\r\n		</select>\r\n		<select class="col-sm-1 marginLeft-30" name="month" >\r\n		    <option value ="">全部</option>\r\n			{{each monthList as month index}}\r\n				<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n			{{/each}}\r\n		</select>\r\n        <button class=" btn-sm search-btn T-search marginLeft-30"> <i class="ace-icon fa fa-search"></i> 搜索 </button> \r\n    </div>\r\n\r\n    <div class="row restaurantList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>餐厅</th>\r\n                    <th>总账面应付</th>\r\n                    <th>总实际应付</th>\r\n                    <th>总实际已付</th>\r\n                    <th>总账面未付</th>\r\n                    <th>总实际未付</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody class="T-list">\r\n                {{each financialRestaurantSettlementList as rest}}\r\n                <tr data-id="{{rest.restaurantId}}" data-name="{{rest.restaurantName}}">\r\n                    <td>{{rest.restaurantName}}</td>\r\n                    <td>{{rest.sumNeedPayMoney}}</td>\r\n                    <td>{{rest.sumRealNeedPayMoney}}</td>\r\n                    <td>{{rest.sumRealPayedMoney}}</td>\r\n                    <td>{{rest.sumUnPayedMoney}}</td>\r\n                    <td><span {{if rest.sumRealUnPayedMoney != 0}}style="color:red"{{/if}}>{{rest.sumRealUnPayedMoney}}</span></td>\r\n                    <td>{{if rest.allCount != rest.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{rest.checkedCount}}{{"/"}}{{rest.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if rest.allCount == rest.checkedCount}}\r\n	                      <span style="color:green"> {{rest.checkedCount}}{{"/"}}{{rest.allCount}}</span>\r\n	                    {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a class="cursor T-option T-check R-right" data-right="1240002">对账</a>\r\n                        <label class="cursor R-right" data-right="1240002"><a class="R-right" data-right="1240003"> |</a></label>\r\n                        <a class="cursor T-option T-clear R-right" data-right="1240003">结算</a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});