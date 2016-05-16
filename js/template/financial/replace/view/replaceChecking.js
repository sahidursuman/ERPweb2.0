/*TMODJS:{"debug":true,"version":147,"md5":"dd697104c223ba0f57c61b42c38eac5f"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/replaceChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, name = $data.name, searchParam = $data.searchParam, totalList = $data.totalList, $each = $utils.$each, bookinAccountList = $data.bookinAccountList, $string = ($data.rs, 
            $data.index, $utils.$string), $out = "";
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false" > <div class="form-group mar-r-10"> <label>同行客户：</label> <input value="', 
            $line = 5, $out += $escape(name), $out += '" name="partnerAgencyName" type="text"> <input value="', 
            $line = 6, $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" type="hidden"> </div> <div class="form-group mar-r-10"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 10, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 12, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group mar-r-10"> <label>代订单号：</label> <input type="text" class="form-control T-search-order" value="', 
            $line = 16, $out += $escape(searchParam.orderNumber), $out += '" style="width: 190px;"> </div> <div class="form-group mar-r-10"> <label>项目：</label> <input type="text" class="form-control T-search-project" value="', 
            $line = 20, $out += $escape(searchParam.projects), $out += '"> </div> <label class="form-group">对账状态：</label> <div class="form-group btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 24, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 26, searchParam.isConfirmAccount && "" != searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 30) : ($out += " 未对账 ", $line = 32) : ($out += " 全部 ", $line = 28), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group"> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> </form> <input name="accountStatus" value="', 
            $line = 51, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> <div class="form-inline"> <div class="form-group mar-r-20"> <label>代订金额合计：</label> <label class="F-float F-money T-sumBookingMoney">', 
            $line = 55, $out += $escape(totalList.sumBookingMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label>已收金额合计：</label> <label class="F-float F-money T-sumReceiveMoney">', 
            $line = 59, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label>结算金额合计：</label> <label class="T-stMoney F-float F-money">', 
            $line = 63, $out += $escape(totalList.sumSettlementMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label>未收金额合计：</label> <label class="T-unpayMoney F-float F-money">', 
            $line = 67, $out += $escape(totalList.sumUnReceiveMoney), $out += '</label> </div> <div class="form-group mar-r-10"> <label>未收金额合计(已对账)：</label> <label class="F-float F-money T-checkedUnPayedMoney">', 
            $line = 71, $out += $escape(totalList.checkedUnPayedMoney), $out += '</label> </div> </div> </div> <div class="row"> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover table-fixed hct_align_middle w-1500"> <colgroup> <col style="width:12%;"> <col style="width:6%;"> <col style="width:10%;"> <col style="width:20%;"> <col style="width:5%;"> <col style="width:5%;"> <col style="width:8%;"> <col style="width:5%;"> <col style="width:8%;"> <col style="width:9%;"> <col style="width:5%;"> <col style="width:7%; min-width: 110px;"> </colgroup> <thead> <tr class="T-tr-fixed bg-blur"> <th>代订单号</th> <th>代订日期（账期）</th> <th>项目</th> <th>明细</th> <th>代订金额</th> <th>已收金额</th> <th>结算金额</th> <th>未收金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th>对账</th> </tr> </thead> <tbody class="T-list T-checkList" data-right="1290005"> ', 
            $line = 109, $each(bookinAccountList, function(rs) {
                $out += ' <tr class="T-checkTr ', $line = 110, rs.change && ($out += "success", 
                $line = 110), $out += '" data-id="', $line = 110, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 110, rs.isConfirmAccount ? ($out += "1", $line = 110) : ($out += "0", $line = 110), 
                $out += '" ', $line = 110, rs.change && ($out += 'data-change="true"', $line = 110), 
                $out += "> <td>", $line = 111, $out += $escape(rs.orderNumber), $out += "</td> <td>", 
                $line = 112, $out += $escape(rs.startTime), $out += "</td> <td>", $line = 113, $out += $escape(rs.projectName), 
                $out += '</td> <td class="T-ctrl-tip" title="', $line = 114, $out += $string(rs.newDetail), 
                $out += '"><span>', $line = 114, $out += $string(rs.newDetail), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 115, $out += $escape(rs.bookingMoney), $out += '</span></td> <td><a class="cursor T-action T-receive-money T-payedDetail F-float F-money" data-money="', 
                $line = 116, $out += $escape(rs.receiveMoney), $out += '">', $line = 116, $out += $escape(rs.receiveMoney), 
                $out += "</a></td> <td>", $line = 117, rs.isConfirmAccount ? ($out += '<span class="F-float F-money">', 
                $line = 117, $out += $escape(rs.settlementMoney), $out += "</span>", $line = 117) : ($out += '<input type="text" class="col-xs-12 F-float F-money" name="settlementMoney" value="', 
                $line = 117, $out += $escape(rs.settlementMoney), $out += '">', $line = 117), $out += '</td> <td name="unPayedMoney"><span class="F-float F-money">', 
                $line = 118, rs.unPayedMoney ? ($line = 118, $out += $escape(rs.unPayedMoney), $line = 118) : ($line = 118, 
                $out += $escape(rs.unReceiveMoney), $line = 118), $out += "</span></td> <td>", $line = 119, 
                rs.isConfirmAccount ? ($line = 119, $out += $escape(rs.checkRemark), $line = 119) : ($out += ' <textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">', 
                $line = 120, $out += $escape(rs.checkRemark), $out += "</textarea> ", $line = 121), 
                $out += " </td> <td>", $line = 123, $out += $escape(rs.checkTime), $out += "</td> <td>", 
                $line = 124, $out += $escape(rs.checkUserName), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 127, (rs.change && 1 == rs.isChecked || !rs.change && 1 == rs.isConfirmAccount) && ($out += 'checked="checked"', 
                $line = 127), $out += ' /> <span class="lbl">对账</span> </label> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-view-Received">查看</a> </td> </tr> ', 
                $line = 134;
            }), $out += ' </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 140, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <label class="pos-rel pull-right" style="line-height: 2.2em;"> <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"></div> </div> </div> </div> <div class="row"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false" >\r\n        <div class="form-group mar-r-10">\r\n            <label>同行客户：</label>\r\n            <input value="{{name}}" name="partnerAgencyName" type="text">\r\n            <input value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" type="hidden">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>代订单号：</label>\r\n            <input type="text" class="form-control T-search-order" value="{{searchParam.orderNumber}}" style="width: 190px;">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>项目：</label>\r\n            <input type="text" class="form-control T-search-project" value="{{searchParam.projects}}">\r\n        </div>\r\n        <label class="form-group">对账状态：</label>\r\n        <div class="form-group btn-group T-check-status mar-r-10">\r\n            <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                    {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount == ""}}\r\n                        全部\r\n                    {{else if searchParam.isConfirmAccount == 1}}\r\n                        已对账\r\n                    {{else}}\r\n                        未对账\r\n                    {{/if}}\r\n                </span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu">\r\n                <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n        <div class="form-group">\r\n            <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n        </div>\r\n    </form>\r\n    <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n    <div class="form-inline">\r\n        <div class="form-group mar-r-20">\r\n            <label>代订金额合计：</label>\r\n            <label class="F-float F-money T-sumBookingMoney">{{totalList.sumBookingMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label>已收金额合计：</label>\r\n            <label class="F-float F-money T-sumReceiveMoney">{{totalList.sumReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label>结算金额合计：</label>\r\n            <label class="T-stMoney F-float F-money">{{totalList.sumSettlementMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label>未收金额合计：</label>\r\n            <label class="T-unpayMoney F-float F-money">{{totalList.sumUnReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>未收金额合计(已对账)：</label>\r\n            <label class="F-float F-money T-checkedUnPayedMoney">{{totalList.checkedUnPayedMoney}}</label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover table-fixed hct_align_middle w-1500">\r\n        <colgroup> \r\n            <col style="width:12%;"> \r\n            <col style="width:6%;"> \r\n            <col style="width:10%;"> \r\n            <col style="width:20%;"> \r\n            <col style="width:5%;"> \r\n            <col style="width:5%;"> \r\n            <col style="width:8%;"> \r\n            <col style="width:5%;"> \r\n            <col style="width:8%;"> \r\n            <col style="width:9%;"> \r\n            <col style="width:5%;"> \r\n            <col style="width:7%; min-width: 110px;"> \r\n        </colgroup>\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>代订单号</th>\r\n                <th>代订日期（账期）</th>\r\n                <th>项目</th>\r\n                <th>明细</th>\r\n                <th>代订金额</th>\r\n                <th>已收金额</th>\r\n                <th>结算金额</th>\r\n                <th>未收金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th>对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list T-checkList" data-right="1290005">\r\n        {{each bookinAccountList as rs index}}\r\n            <tr class="T-checkTr {{if rs.change}}success{{/if}}" data-id="{{rs.id}}" data-confirm="{{if !!rs.isConfirmAccount}}1{{else}}0{{/if}}" {{if rs.change}}data-change="true"{{/if}}>\r\n                <td>{{rs.orderNumber}}</td>\r\n                <td>{{rs.startTime}}</td>\r\n                <td>{{rs.projectName}}</td>\r\n                <td class="T-ctrl-tip" title="{{#rs.newDetail}}"><span>{{#rs.newDetail}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.bookingMoney}}</span></td>\r\n                <td><a class="cursor T-action T-receive-money T-payedDetail F-float F-money" data-money="{{rs.receiveMoney}}">{{rs.receiveMoney}}</a></td>\r\n                <td>{{if !!rs.isConfirmAccount}}<span class="F-float F-money">{{rs.settlementMoney}}</span>{{else}}<input type="text" class="col-xs-12 F-float F-money" name="settlementMoney" value="{{rs.settlementMoney}}">{{/if}}</td>\r\n                <td name="unPayedMoney"><span class="F-float F-money">{{if rs.unPayedMoney}}{{rs.unPayedMoney}}{{else}}{{rs.unReceiveMoney}}{{/if}}</span></td>\r\n                <td>{{if !!rs.isConfirmAccount}}{{rs.checkRemark}}{{else}}\r\n                    <textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">{{rs.checkRemark}}</textarea>\r\n                    {{/if}}\r\n                </td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkUserName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" class="ace T-checkbox" {{if (rs.change && rs.isChecked == 1) || (!rs.change && rs.isConfirmAccount == 1)}}checked="checked"{{/if}} /> \r\n                        <span class="lbl">对账</span>\r\n                    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view-Received">查看</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    </div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <label class="pos-rel pull-right" style="line-height: 2.2em;">\r\n                <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> \r\n            </label>\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});