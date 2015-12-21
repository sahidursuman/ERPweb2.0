/*TMODJS:{"debug":true,"version":11,"md5":"927f23d90adfe8e67531c0421adc17ca"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, shopAccountList = $data.shopAccountList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row check globalAdd"> <div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>购物店</label> <input type="text" class="form-control T-search-name" value="', 
            $line = 6, $out += $escape(searchParam.shopName || "全部"), $out += '" style="width: 220px;"> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 10, $out += $escape(searchParam.startDate), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 12, $out += $escape(searchParam.endDate), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>购物店</th> <th>总人数</th> <th>购物金额</th> <th>返佣金额</th> <th>结算金额</th> <th>已收金额</th> <th>未收金额</th> <th>对账进度</th> <th>收款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 38, $each(shopAccountList, function(rs) {
                $out += ' <tr data-id="', $line = 39, $out += $escape(rs.shopId), $out += '" data-name="', 
                $line = 39, $out += $escape(rs.shopName), $out += '"> <td>', $line = 40, $out += $escape(rs.shopName), 
                $out += "</td> <td>", $line = 41, $out += $escape(rs.sumCount), $out += "</td> <td>", 
                $line = 42, $out += $escape(rs.shopMoney), $out += "</td> <td>", $line = 43, $out += $escape(rs.backMoney), 
                $out += "</td> <td>", $line = 44, $out += $escape(rs.settlementMoney), $out += "</td> <td>", 
                $line = 45, $out += $escape(rs.reciveMoney), $out += "</td> <td><span ", $line = 46, 
                0 != rs.unReciveMoney && ($out += 'style="color:#FF0000;"', $line = 46), $out += ">", 
                $line = 46, $out += $escape(rs.unReciveMoney), $out += '</span></td> <td><span style="color:#', 
                $line = 47, rs.checkStep == rs.allRecord ? ($out += "00CC00", $line = 47) : ($out += "FF9900", 
                $line = 47), $out += ';">', $line = 47, $out += $escape(rs.checkStep), $out += "/", 
                $line = 47, $out += $escape(rs.allRecord), $out += '</span></td> <td><span style="color:#', 
                $line = 48, rs.reciveStep == rs.allRecord ? ($out += "00CC00", $line = 48) : ($out += "FF9900", 
                $line = 48), $out += ';">', $line = 48, $out += $escape(rs.reciveStep), $out += "/", 
                $line = 48, $out += $escape(rs.allRecord), $out += '</span></td> <td> <a class="cursor T-action T-checking" data-right="1310002">对账</a> <label class="cursor R-right" data-right="1310002|1310003"> <a> |</a></label> <a class="cursor T-action T-settlement R-right" data-right="1310003">收款</a> </td> </tr> ', 
                $line = 55;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 60, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd">\r\n    <div class="T-search-area">\r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label>购物店</label>\r\n                <input type="text" class="form-control T-search-name" value="{{searchParam.shopName || "全部"}}" style="width: 220px;">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>账期：</label>\r\n                <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}" style="width: 100px; text-align: center;">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}" style="width: 100px; text-align: center;">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <button class="btn-sm search-btn T-btn-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索 \r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>购物店</th>\r\n                <th>总人数</th>\r\n                <th>购物金额</th>\r\n                <th>返佣金额</th>\r\n                <th>结算金额</th>\r\n                <th>已收金额</th>\r\n                <th>未收金额</th>\r\n                <th>对账进度</th>\r\n                <th>收款进度</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        {{each shopAccountList as rs}}\r\n            <tr data-id="{{rs.shopId}}" data-name="{{rs.shopName}}">\r\n                <td>{{rs.shopName}}</td>\r\n                <td>{{rs.sumCount}}</td>\r\n                <td>{{rs.shopMoney}}</td>\r\n                <td>{{rs.backMoney}}</td>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td>{{rs.reciveMoney}}</td>\r\n                <td><span {{if rs.unReciveMoney != 0}}style="color:#FF0000;"{{/if}}>{{rs.unReciveMoney}}</span></td>\r\n                <td><span style="color:#{{if rs.checkStep == rs.allRecord}}00CC00{{else}}FF9900{{/if}};">{{rs.checkStep}}/{{rs.allRecord}}</span></td>\r\n                <td><span style="color:#{{if rs.reciveStep == rs.allRecord}}00CC00{{else}}FF9900{{/if}};">{{rs.reciveStep}}/{{rs.allRecord}}</span></td>\r\n                <td>\r\n                    <a class="cursor T-action T-checking" data-right="1310002">对账</a>\r\n                    <label class="cursor R-right" data-right="1310002|1310003"> <a> |</a></label>\r\n                    <a class="cursor T-action T-settlement R-right" data-right="1310003">收款</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});