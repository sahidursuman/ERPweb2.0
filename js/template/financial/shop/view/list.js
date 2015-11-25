/*TMODJS:{"debug":true,"version":139,"md5":"fcab87810fb6a8b2bb21bcaba661e2b1"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, shopInfoList = $data.shopInfoList, $escape = ($data.shopInfo, 
            $data.$index, $utils.$escape), shopId = $data.shopId, yearList = $data.yearList, year = ($data.yearInfo, 
            $data.year), monthList = $data.monthList, month = ($data.monthInfo, $data.month), financialShopSumList = $data.financialShopSumList, recordSize = ($data.sumList, 
            $data.recordSize), $out = "";
            return $out += '<div class="row globalAdd"> <div class="search-area shopMain"> <div class="form-group T-search-area"> <label class="pull-left" style="margin-left: 15px;margin-top: 3px">购物店：</label> <select name="shopId" class="col-xs-12 T-search-name" style="width: 220px"> <option value="">全部</option> ', 
            $line = 7, $each(shopInfoList, function(shopInfo) {
                $out += ' <option value="', $line = 8, $out += $escape(shopInfo.shopId), $out += '" ', 
                $line = 8, shopInfo.shopId == shopId && ($out += 'selected="selected"', $line = 8), 
                $out += ">", $line = 8, $out += $escape(shopInfo.shopName), $out += "</option> ", 
                $line = 9;
            }), $out += ' </select> <label class=" control-label pull-left marginLeft-30" style="margin-top: 3px">账期：</label> <select name="year" class="col-sm-1 T-search-year"> ', 
            $line = 14, $each(yearList, function(yearInfo) {
                $out += ' <option value="', $line = 15, $out += $escape(yearInfo), $out += '" ', 
                $line = 15, yearInfo == year && ($out += 'selected="selected"', $line = 15), $out += ">", 
                $line = 15, $out += $escape(yearInfo), $out += "</option> ", $line = 16;
            }), $out += ' </select> <select name="month" class="col-sm-1 marginLeft-30 T-search-month"> <option value="">全部</option> ', 
            $line = 20, $each(monthList, function(monthInfo) {
                $out += ' <option value="', $line = 21, $out += $escape(monthInfo), $out += '" ', 
                $line = 21, monthInfo == month && ($out += 'selected="selected"', $line = 21), $out += ">", 
                $line = 21, $out += $escape(monthInfo), $out += "月</option> ", $line = 22;
            }), $out += ' </select> <button class=" btn-sm search-btn T-btn-search marginLeft-30" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="row ticketList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>购物店</th> <th>总人数</th> <th>购物总额</th> <th>总账面返佣</th> <th>总实际返佣</th> <th>总已结账</th> <th>总未结账</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 47, $each(financialShopSumList, function(sumList) {
                $out += ' <tr data-id="', $line = 48, $out += $escape(sumList.shopId), $out += '"> <td>', 
                $line = 49, $out += $escape(sumList.shopName), $out += "</td> <td>", $line = 50, 
                $out += $escape(sumList.sumPerson), $out += "</td> <td>", $line = 51, $out += $escape(sumList.sumConsumeMoney), 
                $out += "</td> <td>", $line = 52, $out += $escape(sumList.sumRebateMoney), $out += "</td> <td>", 
                $line = 53, $out += $escape(sumList.sumRealRebateMoney), $out += "</td> <td>", $line = 54, 
                $out += $escape(sumList.sumAlreadyCloseAccountMoney), $out += "</td> <td>", $line = 55, 
                $out += $escape(sumList.sumUnCloseAccountMoney), $out += "</td> <td> ", $line = 57, 
                sumList.allCount != sumList.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 58, $out += $escape(sumList.checkedCount), $line = 58, $out += $escape("/"), 
                $line = 58, $out += $escape(sumList.allCount), $out += "</span> ", $line = 59), 
                $out += " ", $line = 60, sumList.allCount == sumList.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 61, $out += $escape(sumList.checkedCount), $line = 61, $out += $escape("/"), 
                $line = 61, $out += $escape(sumList.allCount), $out += "</span> ", $line = 62), 
                $out += ' </td> <td> <a data-entity-id="', $line = 65, $out += $escape(sumList.shopId), 
                $out += '" class="cursor R-right T-action T-checking" data-right="1310002"> 对账 </a> <label class="cursor R-right" data-right="1310002"><a class="R-right" data-right="1310003"> |</a></label> <a data-entity-id="', 
                $line = 69, $out += $escape(sumList.shopId), $out += '" class="cursor R-right T-action T-settlement" data-right="1310003"> 结算 </a> </td> </tr> ', 
                $line = 74;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 79, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row globalAdd">\r\n    <div class="search-area shopMain">\r\n        <div class="form-group T-search-area">\r\n            <label class="pull-left" style="margin-left: 15px;margin-top: 3px">购物店：</label>\r\n                <select name="shopId" class="col-xs-12 T-search-name" style="width: 220px">\r\n                    <option value="">全部</option>\r\n                    {{each shopInfoList as shopInfo}}\r\n                    <option value="{{shopInfo.shopId}}" {{if shopInfo.shopId == shopId}}selected="selected"{{/if}}>{{shopInfo.shopName}}</option>\r\n                    {{/each}}\r\n  \r\n                </select>\r\n                <label class=" control-label pull-left marginLeft-30" style="margin-top: 3px">账期：</label>\r\n                <select name="year" class="col-sm-1 T-search-year">\r\n                    {{each yearList as yearInfo}}\r\n                    <option value="{{yearInfo}}" {{if yearInfo == year}}selected="selected"{{/if}}>{{yearInfo}}</option>\r\n                    {{/each}}\r\n                </select>\r\n                <select name="month"  class="col-sm-1 marginLeft-30 T-search-month">\r\n                    <option value="">全部</option>\r\n                    {{each monthList as monthInfo}}\r\n                        <option value="{{monthInfo}}" {{if monthInfo == month}}selected="selected"{{/if}}>{{monthInfo}}月</option>\r\n                    {{/each}}\r\n                </select>\r\n            <button class=" btn-sm search-btn T-btn-search marginLeft-30" >\r\n                <i class="ace-icon fa fa-search"></i>\r\n                搜索\r\n            </button>\r\n    </div>\r\n    <div class="row ticketList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>购物店</th>\r\n                    <th>总人数</th>\r\n                    <th>购物总额</th>\r\n                    <th>总账面返佣</th>\r\n                    <th>总实际返佣</th>\r\n                    <th>总已结账</th>\r\n                    <th>总未结账</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody class="T-list">\r\n                {{each financialShopSumList as sumList}}\r\n                <tr data-id="{{sumList.shopId}}">\r\n                    <td>{{sumList.shopName}}</td>\r\n                    <td>{{sumList.sumPerson}}</td>\r\n                    <td>{{sumList.sumConsumeMoney}}</td>\r\n                    <td>{{sumList.sumRebateMoney}}</td>\r\n                    <td>{{sumList.sumRealRebateMoney}}</td>\r\n                    <td>{{sumList.sumAlreadyCloseAccountMoney}}</td>\r\n                    <td>{{sumList.sumUnCloseAccountMoney}}</td>\r\n                    <td>\r\n						{{if sumList.allCount != sumList.checkedCount}}\r\n	                      <span style="color:#ff9900"> {{sumList.checkedCount}}{{"/"}}{{sumList.allCount}}</span>\r\n	                    {{/if}}\r\n	                    {{if sumList.allCount == sumList.checkedCount}}\r\n	                      <span style="color:green"> {{sumList.checkedCount}}{{"/"}}{{sumList.allCount}}</span>\r\n	                    {{/if}}\r\n					</td>\r\n                    <td>\r\n                        <a data-entity-id="{{sumList.shopId}}" class="cursor R-right T-action T-checking" data-right="1310002">\r\n                            对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right="1310002"><a class="R-right" data-right="1310003"> |</a></label>\r\n                        <a data-entity-id="{{sumList.shopId}}" class="cursor R-right T-action T-settlement" data-right="1310003">\r\n                            结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n   </div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});