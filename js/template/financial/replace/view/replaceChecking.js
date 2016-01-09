/*TMODJS:{"debug":true,"version":82,"md5":"010e38a3c84cb987f8e5c47689c980e9"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/replaceChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, name = $data.name, searchParam = $data.searchParam, totalList = $data.totalList, $each = $utils.$each, bookinAccountList = $data.bookinAccountList, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row T-search-area border" style="padding: 0 20px;"> <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;"> <div class="form-group"> <label>同行客户：</label> <label>', 
            $line = 5, $out += $escape(name), $out += '</label> <input value="', $line = 6, 
            $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" type="hidden"> <input value="', 
            $line = 7, $out += $escape(name), $out += '" name="name" type="hidden"> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 11, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 13, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <label>订单号：</label> <input type="text" class="form-control T-search-order" value="', 
            $line = 17, $out += $escape(searchParam.orderNumber || "全部"), $out += '" style="width: 190px;"> </div> <div class="form-group marginLeft-30"> <label>项目：</label> <input type="text" class="form-control T-search-project" value="', 
            $line = 21, 1 == searchParam.busCompanyOrderStatus && ($out += "车队, ", $line = 21), 
            $line = 21, 1 == searchParam.hotelOrderStatus && ($out += "酒店, ", $line = 21), $line = 21, 
            1 == searchParam.scenicOrderStatus && ($out += "景区, ", $line = 21), $line = 21, 
            1 == searchParam.ticketOrderStatus && ($out += "票务, ", $line = 21), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> </form> <div class="form-inline" style="padding-top: 10px;"> <div class="form-group"> <label>代订金额合计：</label> <label class="F-float F-money">', 
            $line = 35, $out += $escape(totalList.sumBookingMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>已收金额合计：</label> <label class="F-float F-money">', 
            $line = 39, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>结算金额合计：</label> <label class="T-stMoney F-float F-money">', 
            $line = 43, $out += $escape(totalList.sumSettlementMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未收金额合计：</label> <label class="T-unpayMoney F-float F-money">', 
            $line = 47, $out += $escape(totalList.sumUnReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未收金额合计(已对账)：</label> <label class="F-float F-money">', 
            $line = 51, $out += $escape(totalList.checkedUnPayedMoney), $out += '</label> </div> </div> </div> <div class="row" style="margin-top: 30px"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:12%;"> <col style="width:6%;"> <col style="width:10%;"> <col style="width:20%;"> <col style="width:5%;"> <col style="width:5%;"> <col style="width:8%;"> <col style="width:5%;"> <col style="width:8%;"> <col style="width:9%;"> <col style="width:5%;"> <col style="width:7%; min-width: 110px;"> </colgroup> <thead> <tr> <th class="th-border">代订单号</th> <th class="th-border">代订日期（账期）</th> <th class="th-border">项目</th> <th class="th-border">明细</th> <th class="th-border">代订金额</th> <th class="th-border">已收金额</th> <th class="th-border">结算金额</th> <th class="th-border">未收金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-list T-checkList"> ', 
            $line = 88, $each(bookinAccountList, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 89, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 89, rs.isConfirmAccount ? ($out += "1", $line = 89) : ($out += "0", 
                $line = 89), $out += '"> <td>', $line = 90, $out += $escape(rs.orderNumber), $out += "</td> <td>", 
                $line = 91, $out += $escape(rs.startTime), $out += "</td> <td>", $line = 92, $out += $escape(rs.projectName), 
                $out += '</td> <td class="T-ctrl-tip" title="', $line = 93, $out += $escape(rs.newDetail), 
                $out += '"><span>', $line = 93, $out += $escape(rs.newDetail), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 94, $out += $escape(rs.bookingMoney), $out += '</span></td> <td><a class="cursor T-action T-receive-money T-payedDetail F-float F-money" data-money="', 
                $line = 95, $out += $escape(rs.receiveMoney), $out += '">', $line = 95, $out += $escape(rs.receiveMoney), 
                $out += "</a></td> <td>", $line = 96, rs.isConfirmAccount ? ($out += '<span class="F-float F-money">', 
                $line = 96, $out += $escape(rs.settlementMoney), $out += "</span>", $line = 96) : ($out += '<input type="text" class="col-xs-12 F-float F-money" name="settlementMoney" value="', 
                $line = 96, $out += $escape(rs.settlementMoney), $out += '">', $line = 96), $out += '</td> <td name="unPayedMoney"><span class="F-float F-money">', 
                $line = 97, $out += $escape(rs.unReceiveMoney), $out += "</span></td> <td>", $line = 98, 
                rs.isConfirmAccount ? ($line = 98, $out += $escape(rs.checkRemark), $line = 98) : ($out += '<input type="text" class="col-xs-12" name="checkRemark" value="', 
                $line = 98, $out += $escape(rs.checkRemark), $out += '">', $line = 98), $out += "</td> <td>", 
                $line = 99, $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 100, $out += $escape(rs.checkUserName), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 103, rs.isConfirmAccount && ($out += 'checked="checked"', $line = 103), 
                $out += ' /> <span class="lbl">对账</span> </label> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-view-Received">查看</a> </td> </tr> ', 
                $line = 110;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 115, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <label class="pos-rel pull-right" style="line-height: 2.2em;"> <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"></div> </div> </div> </div> <div class="row"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area border" style="padding: 0 20px;">\r\n    <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label>同行客户：</label>\r\n            <label>{{name}}</label>\r\n            <input value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" type="hidden">\r\n            <input value="{{name}}" name="name" type="hidden">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>订单号：</label>\r\n            <input type="text" class="form-control T-search-order" value="{{searchParam.orderNumber || \'全部\'}}" style="width: 190px;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>项目：</label>\r\n            <input type="text" class="form-control T-search-project" value="{{if searchParam.busCompanyOrderStatus == 1}}车队, {{/if}}{{if searchParam.hotelOrderStatus == 1}}酒店, {{/if}}{{if searchParam.scenicOrderStatus == 1}}景区, {{/if}}{{if searchParam.ticketOrderStatus == 1}}票务, {{/if}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label>代订金额合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumBookingMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>已收金额合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>结算金额合计：</label>\r\n            <label class="T-stMoney F-float F-money">{{totalList.sumSettlementMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>未收金额合计：</label>\r\n            <label class="T-unpayMoney F-float F-money">{{totalList.sumUnReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>未收金额合计(已对账)：</label>\r\n            <label class="F-float F-money">{{totalList.checkedUnPayedMoney}}</label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row" style="margin-top: 30px">\r\n    <table class="table table-striped table-bordered table-hover table-fixed">\r\n        <colgroup> \r\n            <col style="width:12%;"> \r\n            <col style="width:6%;"> \r\n            <col style="width:10%;"> \r\n            <col style="width:20%;"> \r\n            <col style="width:5%;"> \r\n            <col style="width:5%;"> \r\n            <col style="width:8%;"> \r\n            <col style="width:5%;"> \r\n            <col style="width:8%;"> \r\n            <col style="width:9%;"> \r\n            <col style="width:5%;"> \r\n            <col style="width:7%; min-width: 110px;"> \r\n        </colgroup>\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">代订单号</th>\r\n                <th class="th-border">代订日期（账期）</th>\r\n                <th class="th-border">项目</th>\r\n                <th class="th-border">明细</th>\r\n                <th class="th-border">代订金额</th>\r\n                <th class="th-border">已收金额</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未收金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list T-checkList">\r\n        {{each bookinAccountList as rs index}}\r\n            <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{if !!rs.isConfirmAccount}}1{{else}}0{{/if}}">\r\n                <td>{{rs.orderNumber}}</td>\r\n                <td>{{rs.startTime}}</td>\r\n                <td>{{rs.projectName}}</td>\r\n                <td class="T-ctrl-tip" title="{{rs.newDetail}}"><span>{{rs.newDetail}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.bookingMoney}}</span></td>\r\n                <td><a class="cursor T-action T-receive-money T-payedDetail F-float F-money" data-money="{{rs.receiveMoney}}">{{rs.receiveMoney}}</a></td>\r\n                <td>{{if !!rs.isConfirmAccount}}<span class="F-float F-money">{{rs.settlementMoney}}</span>{{else}}<input type="text" class="col-xs-12 F-float F-money" name="settlementMoney" value="{{rs.settlementMoney}}">{{/if}}</td>\r\n                <td name="unPayedMoney"><span class="F-float F-money">{{rs.unReceiveMoney}}</span></td>\r\n                <td>{{if !!rs.isConfirmAccount}}{{rs.checkRemark}}{{else}}<input type="text" class="col-xs-12" name="checkRemark" value="{{rs.checkRemark}}">{{/if}}</td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkUserName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" class="ace T-checkbox" {{if !!rs.isConfirmAccount}}checked="checked"{{/if}} /> \r\n                        <span class="lbl">对账</span>\r\n                    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view-Received">查看</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <label class="pos-rel pull-right" style="line-height: 2.2em;">\r\n                <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> \r\n            </label>\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});