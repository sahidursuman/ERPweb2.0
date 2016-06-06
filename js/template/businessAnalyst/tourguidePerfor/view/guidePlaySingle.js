/*TMODJS:{"debug":true,"version":159,"md5":"a0a5443dc2e0c3cf6525d59486679e18"}*/
define(function(require) {
    return require("../../../template")("businessAnalyst/tourguidePerfor/view/guidePlaySingle", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, guide = $data.guide, $each = $utils.$each, result = $data.result, $out = ($data.resultList, 
            $data.$index, $data.shopL, $data.index, "");
            return $out += '<div class="search-guideSingle"> <div class="clearfix T-search-area mar-b-10" data-shopname="', 
            $line = 2, $out += $escape(searchParam.shopName), $out += '" data-policyname="', 
            $line = 2, $out += $escape(searchParam.policyName), $out += '"> <label class="pull-left text-right control-label no-padding-right mar-l-10">开始日期 </label> <label class="pull-left text-right control-label no-padding-right mar-l-10">', 
            $line = 5, $out += $escape(searchParam.startTime), $out += ' </label> <label class="pull-left text-right control-label no-padding-right mar-l-10">结束日期 </label> <label class="pull-left text-right control-label no-padding-right mar-l-10">', 
            $line = 7, $out += $escape(searchParam.endTime), $out += ' </label> <label class="pull-left text-right control-label no-padding-right mar-l-10">导游：</label> <label class="pull-left text-right control-label no-padding-right mar-l-10">', 
            $line = 9, guide && ($line = 9, $out += $escape(guide.guideName), $out += " (", 
            $line = 9, $out += $escape(guide.mobileNumber), $out += ")", $line = 9), $out += ' </label> <input type="hidden" name="guideId" class="col-xs-12" value="', 
            $line = 10, $out += $escape(guide.id), $out += '" /> <label class="pull-left text-right control-label no-padding-right mar-l-10">购物店：</label> <label class="pull-left text-right control-label no-padding-right mar-l-10">', 
            $line = 12, searchParam && ($line = 12, $out += $escape(searchParam.shopName), $line = 12), 
            $out += ' </label> <label class="pull-left text-right control-label no-padding-right mar-l-10">商品：</label> <label class="pull-left text-right control-label no-padding-right mar-l-10">', 
            $line = 14, searchParam && ($line = 14, $out += $escape(searchParam.policyName), 
            $line = 14), $out += ' </label> <!-- <label class="pull-left text-right control-label no-padding-right mar-l-10">联系电话：</label> <label class="pull-left text-right control-label no-padding-right mar-l-10 T-mobileNumber">', 
            $line = 17, guide && ($line = 17, $out += $escape(guide.mobileNumber), $line = 17), 
            $out += '</label> --> <!-- <div class="col-xs-2"> <button class=" btn-sm T-guideSingle-search search-btn" data-shopname="', 
            $line = 20, $out += $escape(searchParam.shopName), $out += '" data-policyname="', 
            $line = 20, $out += $escape(searchParam.policyName), $out += '"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> --> </div> <div class="T-guideSinglePager-list overflow-x"> <table class="table table-striped table-bordered table-hover w-1200 T-showHighLight"> <colgroup> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:5%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:6%;"></col> <col style="width:10%;"></col> <col style="width:7%;"></col> <col style="width:7%;"></col> <col style="width:7%;"></col> <col style="width:6%;"></col> <col style="width:6%;"></col> <col style="width:6%;"></col> </colgroup> <thead class="T-thead"> <tr class="bg-blur"> <th>客户</th> <th>团号</th> <th>人数</th> <th>线路产品</th> <th>团期</th> <th>进店日期</th> <th>购物店</th> <th>总打单</th> <th>人均打单</th> <th>社佣</th> <th>导佣</th> <th>总佣金</th> <th>人均返佣</th> </tr> </thead> <tbody> ', 
            $line = 60, $each(result, function(resultList) {
                $out += ' <tr> <td rowspan="', $line = 62, resultList.shopList.length ? ($line = 62, 
                $out += $escape(resultList.shopList.length), $line = 62) : ($out += "1", $line = 62), 
                $out += '">', $line = 62, $out += $escape(resultList.travelAgencyName), $out += '</td> <td rowspan="', 
                $line = 63, resultList.shopList.length ? ($line = 63, $out += $escape(resultList.shopList.length), 
                $line = 63) : ($out += "1", $line = 63), $out += '">', $line = 63, $out += $escape(resultList.tripNumber), 
                $out += '</td> <td rowspan="', $line = 64, resultList.shopList.length ? ($line = 64, 
                $out += $escape(resultList.shopList.length), $line = 64) : ($out += "1", $line = 64), 
                $out += '">', $line = 64, $out += $escape(resultList.adult), $out += "大", $line = 64, 
                $out += $escape(resultList.child), $out += '小</td> <td rowspan="', $line = 65, resultList.shopList.length ? ($line = 65, 
                $out += $escape(resultList.shopList.length), $line = 65) : ($out += "1", $line = 65), 
                $out += '"><p style="margin:0;" class="T-ctrl-tip" title="', $line = 65, $out += $escape(resultList.lineProductName), 
                $out += '"> <span>', $line = 65, $out += $escape(resultList.lineProductName), $out += '</span></p></td> <td rowspan="', 
                $line = 66, resultList.shopList.length ? ($line = 66, $out += $escape(resultList.shopList.length), 
                $line = 66) : ($out += "1", $line = 66), $out += '" title="', $line = 66, $out += $escape(resultList.tripDate), 
                $out += '">', $line = 66, $out += $escape(resultList.tripDate), $out += "</td> ", 
                $line = 67, 0 == resultList.shopList.length ? ($out += " <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> <td>-</td> ", 
                $line = 76) : resultList.shopList.length > 0 && ($out += " ", $line = 77, $each(resultList.shopList, function(shopL, index) {
                    $out += " ", $line = 78, 0 == index && ($out += " <td>", $line = 79, $out += $escape(shopL.accountTime), 
                    $out += "</td> <td>", $line = 80, $out += $escape(shopL.shopName), $out += '</td> <td class="T-allMoney cursor" style="color:#337ab7" data-tripPlanId="', 
                    $line = 81, $out += $escape(resultList.tripPlanId), $out += '" data-arrangeId="', 
                    $line = 81, $out += $escape(shopL.arrangeId), $out += '" guideArrangeId = "', $line = 82, 
                    $out += $escape(resultList.guideArrangeId), $out += "\"><span class='F-float F-money'>", 
                    $line = 82, $out += $escape(shopL.allMoney), $out += "</span></td> <td><span class='F-float F-money'>", 
                    $line = 83, $out += $escape(shopL.avgAllMoney), $out += "</span></td> <td><span class='F-float F-money'>", 
                    $line = 84, $out += $escape(shopL.agencyMoney), $out += "</span></td> <td><span class='F-float F-money'>", 
                    $line = 85, $out += $escape(shopL.guideMoney), $out += "</span></td> <td><span class='F-float F-money'>", 
                    $line = 86, $out += $escape(shopL.totalMoney), $out += "</span></td> <td><span class='F-float F-money'>", 
                    $line = 87, $out += $escape(shopL.avgMoney), $out += "</span></td> ", $line = 88), 
                    $out += " ", $line = 89;
                }), $out += " ", $line = 90), $out += " </tr> ", $line = 92, $each(resultList.shopList, function(shopL, index) {
                    $out += " ", $line = 93, index > 0 && ($out += " <tr > <td>", $line = 95, $out += $escape(shopL.accountTime), 
                    $out += "</td> <td>", $line = 96, $out += $escape(shopL.shopName), $out += '</td> <td class="T-allMoney cursor" style="color:#337ab7" data-tripPlanId="', 
                    $line = 97, $out += $escape(resultList.tripPlanId), $out += '" data-arrangeId="', 
                    $line = 97, $out += $escape(shopL.arrangeId), $out += '" guideArrangeId = "', $line = 98, 
                    $out += $escape(resultList.guideArrangeId), $out += "\"><span class='F-float F-money'>", 
                    $line = 98, $out += $escape(shopL.allMoney), $out += "</span></td> <td><span class='F-float F-money'>", 
                    $line = 99, $out += $escape(shopL.avgAllMoney), $out += "</span></td> <td><span class='F-float F-money'>", 
                    $line = 100, $out += $escape(shopL.agencyMoney), $out += "</span></td> <td><span class='F-float F-money'>", 
                    $line = 101, $out += $escape(shopL.guideMoney), $out += "</span></td> <td><span class='F-float F-money'>", 
                    $line = 102, $out += $escape(shopL.totalMoney), $out += "</span></td> <td><span class='F-float F-money'>", 
                    $line = 103, $out += $escape(shopL.avgMoney), $out += "</span></td> </tr> ", $line = 105), 
                    $out += " ", $line = 106;
                }), $out += " ", $line = 107;
            }), $out += ' </tbody> </table> <div class="pageMode"> <div class="col-xs-5"> <small>共计 ', 
            $line = 112, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-guideSingle">\r\n    <div class="clearfix T-search-area mar-b-10" data-shopname="{{searchParam.shopName}}" data-policyname="{{searchParam.policyName}}">\r\n\r\n        <label class="pull-left text-right control-label no-padding-right mar-l-10">开始日期 </label>\r\n        <label class="pull-left text-right control-label no-padding-right mar-l-10">{{searchParam.startTime}} </label>\r\n        <label class="pull-left text-right control-label no-padding-right mar-l-10">结束日期 </label>\r\n        <label class="pull-left text-right control-label no-padding-right  mar-l-10">{{searchParam.endTime}} </label>\r\n        <label class="pull-left text-right control-label no-padding-right mar-l-10">导游：</label>\r\n        <label class="pull-left text-right control-label no-padding-right mar-l-10">{{if !!guide}}{{guide.guideName}} ({{guide.mobileNumber}}){{/if}} </label>\r\n        <input type="hidden" name="guideId" class="col-xs-12" value="{{guide.id}}" />\r\n        <label class="pull-left text-right control-label no-padding-right mar-l-10">购物店：</label>\r\n        <label class="pull-left text-right control-label no-padding-right mar-l-10">{{if !!searchParam}}{{searchParam.shopName}}{{/if}} </label>\r\n         <label class="pull-left text-right control-label no-padding-right mar-l-10">商品：</label>\r\n        <label class="pull-left text-right control-label no-padding-right mar-l-10">{{if !!searchParam}}{{searchParam.policyName}}{{/if}} </label>\r\n\r\n    <!--     <label class="pull-left text-right control-label no-padding-right mar-l-10">联系电话：</label>\r\n    <label class="pull-left text-right control-label no-padding-right mar-l-10 T-mobileNumber">{{if !!guide}}{{guide.mobileNumber}}{{/if}}</label> -->\r\n\r\n    <!-- <div class="col-xs-2">\r\n        <button class=" btn-sm  T-guideSingle-search search-btn" data-shopname="{{searchParam.shopName}}" data-policyname="{{searchParam.policyName}}">\r\n            <i class="ace-icon fa fa-search"></i> 搜索\r\n        </button>\r\n    </div> -->\r\n    </div>\r\n    <div class="T-guideSinglePager-list overflow-x">\r\n        <table class="table table-striped table-bordered table-hover w-1200 T-showHighLight">\r\n            <colgroup>\r\n                <col style="width:10%;"></col>\r\n                <col style="width:10%;"></col>\r\n                <col style="width:5%;"></col>\r\n                <col style="width:10%;"></col>\r\n                <col style="width:10%;"></col>\r\n                <col style="width:6%;"></col>\r\n                <col style="width:10%;"></col>\r\n                <col style="width:7%;"></col>\r\n                <col style="width:7%;"></col>\r\n                <col style="width:7%;"></col>\r\n                <col style="width:6%;"></col>\r\n                <col style="width:6%;"></col>\r\n                <col style="width:6%;"></col>\r\n            </colgroup>\r\n            <thead class="T-thead">\r\n                <tr class="bg-blur">\r\n                    <th>客户</th>\r\n                    <th>团号</th>\r\n                    <th>人数</th>\r\n                    <th>线路产品</th>\r\n                    <th>团期</th>\r\n                    <th>进店日期</th>\r\n                    <th>购物店</th>\r\n                    <th>总打单</th>\r\n                    <th>人均打单</th>\r\n                    <th>社佣</th>\r\n                    <th>导佣</th>\r\n                    <th>总佣金</th>\r\n                    <th>人均返佣</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n              {{each result as resultList}}\r\n                <tr>\r\n                    <td rowspan="{{if resultList.shopList.length}}{{resultList.shopList.length}}{{else}}1{{/if}}">{{resultList.travelAgencyName}}</td>\r\n                    <td rowspan="{{if resultList.shopList.length}}{{resultList.shopList.length}}{{else}}1{{/if}}">{{resultList.tripNumber}}</td>\r\n                    <td rowspan="{{if resultList.shopList.length}}{{resultList.shopList.length}}{{else}}1{{/if}}">{{resultList.adult}}大{{resultList.child}}小</td>\r\n                    <td rowspan="{{if resultList.shopList.length}}{{resultList.shopList.length}}{{else}}1{{/if}}"><p style="margin:0;" class="T-ctrl-tip" title="{{resultList.lineProductName}}"> <span>{{resultList.lineProductName}}</span></p></td>\r\n                    <td rowspan="{{if resultList.shopList.length}}{{resultList.shopList.length}}{{else}}1{{/if}}" title="{{resultList.tripDate}}">{{resultList.tripDate}}</td>\r\n                    {{if resultList.shopList.length==0}}\r\n                        <td>-</td>\r\n                        <td>-</td>\r\n                        <td>-</td>\r\n                        <td>-</td>\r\n                        <td>-</td>\r\n                        <td>-</td>\r\n                        <td>-</td>\r\n                        <td>-</td>\r\n                    {{else if resultList.shopList.length>0}}\r\n                        {{each resultList.shopList as shopL index}}\r\n                        {{if index == 0}}\r\n                        <td>{{shopL.accountTime}}</td>\r\n                        <td>{{shopL.shopName}}</td>\r\n                        <td class="T-allMoney  cursor" style="color:#337ab7" data-tripPlanId="{{resultList.tripPlanId}}" data-arrangeId="{{shopL.arrangeId}}"\r\n                        guideArrangeId = "{{resultList.guideArrangeId}}"><span class=\'F-float F-money\'>{{shopL.allMoney}}</span></td>\r\n                        <td><span class=\'F-float F-money\'>{{shopL.avgAllMoney}}</span></td>\r\n                        <td><span class=\'F-float F-money\'>{{shopL.agencyMoney}}</span></td>\r\n                        <td><span class=\'F-float F-money\'>{{shopL.guideMoney}}</span></td>\r\n                        <td><span class=\'F-float F-money\'>{{shopL.totalMoney}}</span></td>\r\n                        <td><span class=\'F-float F-money\'>{{shopL.avgMoney}}</span></td>\r\n                        {{/if}}\r\n                        {{/each}}\r\n                    {{/if}}\r\n                </tr>\r\n                {{each resultList.shopList as shopL index}}\r\n                {{if index > 0}}\r\n                <tr >\r\n                    <td>{{shopL.accountTime}}</td>\r\n                    <td>{{shopL.shopName}}</td>\r\n                    <td class="T-allMoney cursor" style="color:#337ab7" data-tripPlanId="{{resultList.tripPlanId}}" data-arrangeId="{{shopL.arrangeId}}" \r\n                     guideArrangeId = "{{resultList.guideArrangeId}}"><span class=\'F-float F-money\'>{{shopL.allMoney}}</span></td>\r\n                    <td><span class=\'F-float F-money\'>{{shopL.avgAllMoney}}</span></td>\r\n                    <td><span class=\'F-float F-money\'>{{shopL.agencyMoney}}</span></td>\r\n                    <td><span class=\'F-float F-money\'>{{shopL.guideMoney}}</span></td>\r\n                    <td><span class=\'F-float F-money\'>{{shopL.totalMoney}}</span></td>\r\n                    <td><span class=\'F-float F-money\'>{{shopL.avgMoney}}</span></td>\r\n                </tr>\r\n                {{/if}}\r\n                {{/each}}\r\n               {{/each}}\r\n            </tbody>\r\n        </table>\r\n        <div class="pageMode">\r\n            <div class="col-xs-5">\r\n                <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-7">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});