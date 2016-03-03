/*TMODJS:{"debug":true,"version":34,"md5":"bdcdfc6a41f1c930c862e7b9808c69cc"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, shopAccountList = $data.shopAccountList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row check globalAdd"> <div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>购物店：</label> <input type="text" class="form-control T-search-name" value="', 
            $line = 6, $out += $escape(searchParam.shopName || " 全部 "), $out += '" style="width: 220px;"> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 10, $out += $escape(searchParam.startDate), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 12, $out += $escape(searchParam.endDate), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group btn-status btn-group marginLeft-30"> <button data-value="" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> 已结清 </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu T-sleect-ul"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="-1" href="javascript:void(0)">已结清</a></li> <li><a data-value="0" href="javascript:void(0)">未结清</a></li> </ul> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="form-inline T-sum-area"> <div class="form-group"> <label class="control-label">总人数合计：</label> <label class="control-label F-float F-count T-sumCount"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">打单金额合计：</label> <label class="control-label F-float F-money T-sumOrderMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">返佣金额合计：</label> <label class="control-label F-float F-money T-sumContractMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumStMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">已收金额合计：</label> <label class="control-label F-float F-money T-sumReceiveMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未收金额合计：</label> <label class="control-label F-float F-money T-sumUnReceivedMoney"></label> </div> </div> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>购物店</th> <th>总人数</th> <th>打单金额</th> <th>返佣金额</th> <th>结算金额</th> <th>已收金额</th> <th>未收金额</th> <th>对账进度</th> <th>收款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 76, $each(shopAccountList, function(rs) {
                $out += ' <tr data-id="', $line = 77, $out += $escape(rs.shopId), $out += '" data-name="', 
                $line = 77, $out += $escape(rs.shopName), $out += '"> <td>', $line = 78, $out += $escape(rs.shopName), 
                $out += "</td> <td><span>", $line = 79, $out += $escape(rs.sumCount), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 80, $out += $escape(rs.shopMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 81, $out += $escape(rs.backMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 82, $out += $escape(rs.settlementMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 83, $out += $escape(rs.reciveMoney), $out += '</span></td> <td><span class="F-float F-money" ', 
                $line = 84, 0 != rs.unReciveMoney && ($out += 'style="color:#FF0000;" ', $line = 84), 
                $out += ">", $line = 84, $out += $escape(rs.unReciveMoney), $out += '</span></td> <td><span style="color:#', 
                $line = 85, rs.checkStep == rs.allRecord ? ($out += "00CC00", $line = 85) : ($out += "FF9900", 
                $line = 85), $out += ';">', $line = 85, $out += $escape(rs.checkStep), $out += "/", 
                $line = 85, $out += $escape(rs.allRecord), $out += '</span></td> <td><span style="color:#', 
                $line = 86, rs.reciveStep == rs.allRecord ? ($out += "00CC00", $line = 86) : ($out += "FF9900", 
                $line = 86), $out += ';">', $line = 86, $out += $escape(rs.reciveStep), $out += "/", 
                $line = 86, $out += $escape(rs.allRecord), $out += '</span></td> <td> <a class="cursor T-action T-checking R-right" data-right="1310002">对账</a> <label class="cursor R-right" data-right="1310002|1310003"> <a> |</a></label> <a class="cursor T-action T-settlement R-right" data-right="1310003">收款</a> </td> </tr> ', 
                $line = 93;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 98, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd">\r\n    <div class="T-search-area">\r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label>购物店：</label>\r\n                <input type="text" class="form-control T-search-name" value="{{searchParam.shopName || " 全部 "}}" style="width: 220px;">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>账期：</label>\r\n                <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}" style="width: 100px; text-align: center;">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}" style="width: 100px; text-align: center;">\r\n            </div>\r\n            <div class="form-group btn-status btn-group marginLeft-30">\r\n                <button data-value="" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n                    <span>\r\n                        已结清        \r\n                    </span>\r\n                    <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                </button>\r\n                <ul class="dropdown-menu T-sleect-ul">\r\n                    <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                    <li><a data-value="-1" href="javascript:void(0)">已结清</a></li>\r\n                    <li><a data-value="0" href="javascript:void(0)">未结清</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <button class="btn-sm search-btn T-btn-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="form-inline T-sum-area">\r\n        <div class="form-group">\r\n            <label class="control-label">总人数合计：</label>\r\n            <label class="control-label F-float F-count T-sumCount"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">打单金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumOrderMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">返佣金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumContractMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumStMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">已收金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumReceiveMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">未收金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumUnReceivedMoney"></label>\r\n        </div>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>购物店</th>\r\n                <th>总人数</th>\r\n                <th>打单金额</th>\r\n                <th>返佣金额</th>\r\n                <th>结算金额</th>\r\n                <th>已收金额</th>\r\n                <th>未收金额</th>\r\n                <th>对账进度</th>\r\n                <th>收款进度</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n            {{each shopAccountList as rs}}\r\n            <tr data-id="{{rs.shopId}}" data-name="{{rs.shopName}}">\r\n                <td>{{rs.shopName}}</td>\r\n                <td><span>{{rs.sumCount}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.shopMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.backMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.reciveMoney}}</span></td>\r\n                <td><span class="F-float F-money" {{if rs.unReciveMoney !=0 }}style="color:#FF0000;" {{/if}}>{{rs.unReciveMoney}}</span></td>\r\n                <td><span style="color:#{{if rs.checkStep == rs.allRecord}}00CC00{{else}}FF9900{{/if}};">{{rs.checkStep}}/{{rs.allRecord}}</span></td>\r\n                <td><span style="color:#{{if rs.reciveStep == rs.allRecord}}00CC00{{else}}FF9900{{/if}};">{{rs.reciveStep}}/{{rs.allRecord}}</span></td>\r\n                <td>\r\n                    <a class="cursor T-action T-checking R-right" data-right="1310002">对账</a>\r\n                    <label class="cursor R-right" data-right="1310002|1310003"> <a> |</a></label>\r\n                    <a class="cursor T-action T-settlement R-right" data-right="1310003">收款</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});