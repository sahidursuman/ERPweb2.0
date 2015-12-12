/*TMODJS:{"debug":true,"version":13,"md5":"f733cc1de443381989d10bcb1c8b1eda"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/shopChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, name = $data.name, searchParam = $data.searchParam, totalList = $data.totalList, $each = $utils.$each, shopAccountList = $data.shopAccountList, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row check globalAdd T-search-area"> <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;"> <div class="form-group"> <label>购物店：</label> <label>', 
            $line = 5, $out += $escape(name), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startTime), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endTime), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group marginLeft-30"> <label>团信息：</label> <input type="text" class="form-control T-search-trip" value="', 
            $line = 15, $out += $escape(searchParam.accountInfo), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <div class="form-inline"> <div class="form-group"> <label>人数合计：</label> <label>', 
            $line = 26, $out += $escape(totalList.sumCount), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>购物金额合计：</label> <label>', 
            $line = 30, $out += $escape(totalList.sumConsumeMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>社佣合计：</label> <label>', 
            $line = 34, $out += $escape(totalList.sumTravelAgencyRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>导佣合计：</label> <label>', 
            $line = 38, $out += $escape(totalList.sumGuideRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>人数返佣合计：</label> <label>', 
            $line = 42, $out += $escape(totalList.sumCustomerRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>停车返佣合计：</label> <label>', 
            $line = 46, $out += $escape(totalList.sumCustomerRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>返佣金额合计：</label> <label>', 
            $line = 50, $out += $escape(totalList.sumBackMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>已收金额合计：</label> <label>', 
            $line = 54, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未收金额合计：</label> <label class="T-unpayMoney">', 
            $line = 58, $out += $escape(totalList.sumUnReceiveMoney), $out += '</label> </div> </div> </div> <div class="row" style="margin-top: 20px;"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" style="min-width: 45px;">序号</th> <th class="th-border" style="min-width: 70px;">团信息</th> <th class="th-border" style="min-width: 120px;">进店日期（账期）</th> <th class="th-border" style="min-width: 45px;">人数</th> <th class="th-border" style="min-width: 45px;">商品</th> <th class="th-border" style="min-width: 70px;">购物金额</th> <th class="th-border" style="min-width: 45px;">社佣</th> <th class="th-border" style="min-width: 45px;">导佣</th> <th class="th-border" style="min-width: 70px;">人数返佣</th> <th class="th-border" style="min-width: 70px;">停车返佣</th> <th class="th-border" style="min-width: 55px;">单据</th> <th class="th-border" style="min-width: 70px;">返佣金额</th> <th class="th-border" style="min-width: 70px;">已收金额</th> <th class="th-border" style="min-width: 70px;">结算金额</th> <th class="th-border" style="min-width: 70px;">未收金额</th> <th class="th-border" style="min-width: 45px;">备注</th> <th class="th-border" style="min-width: 70px;">对账时间</th> <th class="th-border" style="min-width: 55px;">对账人</th> <th class="th-border" style="min-width: 100px;">对账</th> </tr> </thead> <tbody class="T-list T-checkList"> ', 
            $line = 88, $each(shopAccountList, function(rs, index) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 89, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 89, rs.isConfirmAccount ? ($out += "1", $line = 89) : ($out += "0", 
                $line = 89), $out += '"> <td>', $line = 90, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 91, $out += $escape(rs.tripMessage), $out += "</td> <td>", $line = 92, $out += $escape(rs.startTime), 
                $out += "</td> <td>", $line = 93, $out += $escape(rs.count), $out += "</td> <td>", 
                $line = 94, $out += $escape(rs.shopName), $line = 94, rs.shopName && ($out += '<a class="cursor T-action T-see-group">展开</a>', 
                $line = 94), $out += "</td> <td>", $line = 95, $out += $escape(rs.consumeMoney), 
                $out += "</td> <td>", $line = 96, $out += $escape(rs.travelAgencyRebateMoney), $out += "</td> <td>", 
                $line = 97, $out += $escape(rs.guideRebateMoney), $out += "</td> <td>", $line = 98, 
                $out += $escape(rs.customerRebateMoney), $out += "</td> <td>", $line = 99, $out += $escape(rs.parkingRebateMoney), 
                $out += '</td> <td><a class="cursor T-action T-view-receipts">查看</a></td> <td>', 
                $line = 101, $out += $escape(rs.backMoney), $out += '</td> <td><a class="cursor T-action T-payDetails">', 
                $line = 102, $out += $escape(rs.receiveMoney), $out += "</a> <td>", $line = 103, 
                rs.isConfirmAccount ? ($line = 103, $out += $escape(rs.settlementMoney), $line = 103) : ($out += '<input type="text" class="col-sm-12" name="settlementMoney" value="', 
                $line = 103, $out += $escape(rs.settlementMoney), $out += '">', $line = 103), $out += '</td> <td name="unPayedMoney">', 
                $line = 104, $out += $escape(rs.unReceiveMoney), $out += "</td> <td>", $line = 105, 
                rs.isConfirmAccount ? ($line = 105, $out += $escape(rs.checkRemark), $line = 105) : ($out += '<input type="text" class="col-sm-12" name="checkRemark" value="', 
                $line = 105, $out += $escape(rs.checkRemark), $out += '">', $line = 105), $out += "</td> <td>", 
                $line = 106, $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 107, $out += $escape(rs.checkName), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 110, rs.isConfirmAccount && ($out += 'checked="checked"', $line = 110), 
                $out += ' /> <span class="lbl"></span> </label> ', $line = 113, rs.isConfirmAccount && ($out += ' <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-view-details">查看</a> ', 
                $line = 116), $out += " </td> </tr> ", $line = 119;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 124, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> <label class="pos-rel pull-right"> <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> </label> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-btn-save" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label>购物店：</label>\r\n            <label>{{name}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startTime}}" style="width: 100px; text-align: center;">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endTime}}" style="width: 100px; text-align: center;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>团信息：</label>\r\n            <input type="text" class="form-control T-search-trip" value="{{searchParam.accountInfo}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline">\r\n        <div class="form-group">\r\n            <label>人数合计：</label>\r\n            <label>{{totalList.sumCount}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>购物金额合计：</label>\r\n            <label>{{totalList.sumConsumeMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>社佣合计：</label>\r\n            <label>{{totalList.sumTravelAgencyRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>导佣合计：</label>\r\n            <label>{{totalList.sumGuideRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>人数返佣合计：</label>\r\n            <label>{{totalList.sumCustomerRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>停车返佣合计：</label>\r\n            <label>{{totalList.sumCustomerRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>返佣金额合计：</label>\r\n            <label>{{totalList.sumBackMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>已收金额合计：</label>\r\n            <label>{{totalList.sumReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>未收金额合计：</label>\r\n            <label class="T-unpayMoney">{{totalList.sumUnReceiveMoney}}</label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row" style="margin-top: 20px;">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border" style="min-width: 45px;">序号</th>\r\n                <th class="th-border" style="min-width: 70px;">团信息</th>\r\n                <th class="th-border" style="min-width: 120px;">进店日期（账期）</th>\r\n                <th class="th-border" style="min-width: 45px;">人数</th>\r\n                <th class="th-border" style="min-width: 45px;">商品</th>\r\n                <th class="th-border" style="min-width: 70px;">购物金额</th>\r\n                <th class="th-border" style="min-width: 45px;">社佣</th>\r\n                <th class="th-border" style="min-width: 45px;">导佣</th>\r\n                <th class="th-border" style="min-width: 70px;">人数返佣</th>\r\n                <th class="th-border" style="min-width: 70px;">停车返佣</th>\r\n                <th class="th-border" style="min-width: 55px;">单据</th>\r\n                <th class="th-border" style="min-width: 70px;">返佣金额</th>\r\n                <th class="th-border" style="min-width: 70px;">已收金额</th>\r\n                <th class="th-border" style="min-width: 70px;">结算金额</th>\r\n                <th class="th-border" style="min-width: 70px;">未收金额</th>\r\n                <th class="th-border" style="min-width: 45px;">备注</th>\r\n                <th class="th-border" style="min-width: 70px;">对账时间</th>\r\n                <th class="th-border" style="min-width: 55px;">对账人</th>\r\n                <th class="th-border" style="min-width: 100px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list T-checkList">\r\n        {{each shopAccountList as rs index}}\r\n            <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{if !!rs.isConfirmAccount}}1{{else}}0{{/if}}">\r\n                <td>{{index + 1}}</td>\r\n                <td>{{rs.tripMessage}}</td>\r\n                <td>{{rs.startTime}}</td>\r\n                <td>{{rs.count}}</td>\r\n                <td>{{rs.shopName}}{{if rs.shopName}}<a class="cursor T-action T-see-group">展开</a>{{/if}}</td>\r\n                <td>{{rs.consumeMoney}}</td>\r\n                <td>{{rs.travelAgencyRebateMoney}}</td>\r\n                <td>{{rs.guideRebateMoney}}</td>\r\n                <td>{{rs.customerRebateMoney}}</td>\r\n                <td>{{rs.parkingRebateMoney}}</td>\r\n                <td><a class="cursor T-action T-view-receipts">查看</a></td>\r\n                <td>{{rs.backMoney}}</td>\r\n                <td><a class="cursor T-action T-payDetails">{{rs.receiveMoney}}</a>\r\n                <td>{{if !!rs.isConfirmAccount}}{{rs.settlementMoney}}{{else}}<input type="text" class="col-sm-12" name="settlementMoney" value="{{rs.settlementMoney}}">{{/if}}</td>\r\n                <td name="unPayedMoney">{{rs.unReceiveMoney}}</td>\r\n                <td>{{if !!rs.isConfirmAccount}}{{rs.checkRemark}}{{else}}<input type="text" class="col-sm-12" name="checkRemark" value="{{rs.checkRemark}}">{{/if}}</td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" class="ace T-checkbox" {{if !!rs.isConfirmAccount}}checked="checked"{{/if}} /> \r\n                        <span class="lbl"></span>\r\n                    </label>\r\n                    {{if !!rs.isConfirmAccount}}\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view-details">查看</a>\r\n                    {{/if}}\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n            <label class="pos-rel pull-right">\r\n                <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> \r\n            </label>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-btn-save" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});