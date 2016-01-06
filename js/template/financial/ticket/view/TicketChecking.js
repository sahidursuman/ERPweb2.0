/*TMODJS:{"debug":true,"version":50,"md5":"b36d9461a4f44be7d8a4bf02af5028a0"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/TicketChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, name = $data.name, searchParam = $data.searchParam, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, $each = $utils.$each, financialTicketList = $data.financialTicketList, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row check globalAdd" data-big="', $line = 1, $out += $escape(WEB_IMG_URL_BIG), 
            $out += '" data-small="', $line = 1, $out += $escape(WEB_IMG_URL_SMALL), $out += '"> <div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>票务商家：</label> <label>', 
            $line = 6, $out += $escape(name), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 10, $out += $escape(searchParam.startDate), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 12, $out += $escape(searchParam.endDate), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group marginLeft-30"> <label>账务类别：</label> <input type="text" class="form-control T-search-type" value="', 
            $line = 16, $out += $escape(searchParam.accountInfo), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> </form> <div class="form-inline"> <div class="form-group"> <label>账面应付合计：</label> <label>', 
            $line = 30, $out += $escape(sumNeedPayMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>已付金额合计：</label> <label>', 
            $line = 34, $out += $escape(sumPayedMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>结算金额合计：</label> <label class="T-stMoney">', 
            $line = 38, $out += $escape(sumSettlementMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未付金额合计：</label> <label class="T-unpayMoney">', 
            $line = 42, $out += $escape(sumUnPayedMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未付金额合计(已对账)：</label> <label>', 
            $line = 46, $out += $escape(checkedUnPayedMoney), $out += '</label> </div> </div> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">账务类别</th> <th class="th-border">发生日期（账期）</th> <th class="th-border">类型</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" style="min-width: 110px;">对账</th> </tr> </thead> <tbody class="T-list T-checkList"> ', 
            $line = 74, $each(financialTicketList, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 75, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 75, rs.isConfirmAccount ? ($out += "1", $line = 75) : ($out += "0", 
                $line = 75), $out += '"> <td>', $line = 76, $out += $escape(rs.tripNumber), $line = 76, 
                rs.tripNumber && rs.lineProductName && ($out += "，", $line = 76), $line = 76, $out += $escape(rs.lineProductName), 
                $line = 76, (rs.lineProductName && rs.guideName || rs.tripNumber && !rs.lineProductName && rs.guideName) && ($out += "，", 
                $line = 76), $line = 76, $out += $escape(rs.guideName), $out += "</td> <td>", $line = 77, 
                $out += $escape(rs.accountTime), $out += "</td> <td>", $line = 78, 1 == rs.type ? ($out += "机票", 
                $line = 78) : 2 == rs.type ? ($out += "汽车票", $line = 78) : 3 == rs.type ? ($out += "火车票", 
                $line = 78) : 4 == rs.type && ($out += "轮船票", $line = 78), $out += "</td> <td>", 
                $line = 79, $out += $escape(rs.shift), $out += "</td> <td>", $line = 80, $out += $escape(rs.seatLevel), 
                $out += "</td> <td>", $line = 81, $out += $escape(rs.price), $out += "</td> <td>", 
                $line = 82, $out += $escape(rs.memberCount), $out += "</td> <td>", $line = 83, $out += $escape(rs.reduceMoney), 
                $out += "</td> <td>", $line = 84, $out += $escape(rs.needPayMoney), $out += '</td> <td class="T-payedDetail" data-money="', 
                $line = 85, $out += $escape(rs.payedMoney + rs.realGuidePayMoney), $out += '"><a class="cursor T-action T-payDetails">社付', 
                $line = 85, $out += $escape(rs.payedMoney), $line = 85, 1 != rs.isGuidePay && ($out += "，导付", 
                $line = 85, $out += $escape(rs.realGuidePayMoney), $line = 85), $out += "</a></td> <td>", 
                $line = 86, rs.billImage ? ($out += '<a class="cursor T-action T-view-receipts" data-billImage="', 
                $line = 86, $out += $escape(rs.billImage), $out += '">查看</a>', $line = 86) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 86), $out += '</td> <td><input type="text" class="col-sm-12" name="settlementMoney" value="', 
                $line = 87, $out += $escape(rs.settlementMoney), $out += '"', $line = 87, rs.isConfirmAccount && ($out += "disabled", 
                $line = 87), $out += '></td> <td name="unPayedMoney">', $line = 88, $out += $escape(rs.unPayedMoney), 
                $out += '</td> <td><input type="text" class="col-sm-12" name="checkRemark" value="', 
                $line = 89, $out += $escape(rs.checkRemark), $out += '" ', $line = 89, rs.isConfirmAccount && ($out += "disabled", 
                $line = 89), $out += "></td> <td>", $line = 90, $out += $escape(rs.checkTime), $out += "</td> <td>", 
                $line = 91, $out += $escape(rs.checkUserName), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 94, rs.isConfirmAccount && ($out += 'checked="checked"', $line = 94), $out += ' /> <span class="lbl">对账</span> </label> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-view-details" style="white-space: nowrap;">查看</a> </td> </tr> ', 
                $line = 101;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 106, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <label class="pos-rel pull-right" style="line-height: 2.2em;"> <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"></div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd" data-big="{{WEB_IMG_URL_BIG}}" data-small="{{WEB_IMG_URL_SMALL}}">\r\n    <div class="T-search-area">\r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label>票务商家：</label>\r\n                <label>{{name}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>账期：</label>\r\n                <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}" style="width: 100px; text-align: center;">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}" style="width: 100px; text-align: center;">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>账务类别：</label>\r\n                <input type="text" class="form-control T-search-type" value="{{searchParam.accountInfo}}">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <button class="btn-sm search-btn T-btn-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索 \r\n                </button>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n            </div>\r\n        </form>\r\n        <div class="form-inline">\r\n            <div class="form-group">\r\n                <label>账面应付合计：</label>\r\n                <label>{{sumNeedPayMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>已付金额合计：</label>\r\n                <label>{{sumPayedMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>结算金额合计：</label>\r\n                <label class="T-stMoney">{{sumSettlementMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>未付金额合计：</label>\r\n                <label class="T-unpayMoney">{{sumUnPayedMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>未付金额合计(已对账)：</label>\r\n                <label>{{checkedUnPayedMoney}}</label>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">账务类别</th>\r\n                <th class="th-border">发生日期（账期）</th>\r\n                <th class="th-border">类型</th>\r\n                <th class="th-border">班次</th>\r\n                <th class="th-border">座位级别</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" style="min-width: 110px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list T-checkList">\r\n        {{each financialTicketList as rs index}}\r\n            <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{if !!rs.isConfirmAccount}}1{{else}}0{{/if}}">\r\n                <td>{{rs.tripNumber}}{{if rs.tripNumber && rs.lineProductName}}，{{/if}}{{rs.lineProductName}}{{if (rs.lineProductName  && rs.guideName) || (rs.tripNumber && !rs.lineProductName && rs.guideName)}}，{{/if}}{{rs.guideName}}</td>\r\n                <td>{{rs.accountTime}}</td>\r\n                <td>{{if rs.type == 1}}机票{{else if rs.type == 2}}汽车票{{else if rs.type == 3}}火车票{{else if rs.type == 4}}轮船票{{/if}}</td>\r\n                <td>{{rs.shift}}</td>\r\n                <td>{{rs.seatLevel}}</td>\r\n                <td>{{rs.price}}</td>\r\n                <td>{{rs.memberCount}}</td>\r\n                <td>{{rs.reduceMoney}}</td>\r\n                <td>{{rs.needPayMoney}}</td>\r\n                <td class="T-payedDetail" data-money="{{rs.payedMoney + rs.realGuidePayMoney}}"><a class="cursor T-action T-payDetails">社付{{rs.payedMoney}}{{if rs.isGuidePay != 1}}，导付{{rs.realGuidePayMoney}}{{/if}}</a></td>\r\n                <td>{{if !rs.billImage}}<span style="color:#bbb">查看</span>{{else}}<a class="cursor T-action T-view-receipts" data-billImage="{{rs.billImage}}">查看</a>{{/if}}</td>\r\n                <td><input type="text" class="col-sm-12" name="settlementMoney" value="{{rs.settlementMoney}}"{{if !!rs.isConfirmAccount}}disabled{{/if}}></td>\r\n                <td name="unPayedMoney">{{rs.unPayedMoney}}</td>\r\n                <td><input type="text" class="col-sm-12" name="checkRemark" value="{{rs.checkRemark}}" {{if !!rs.isConfirmAccount}}disabled{{/if}}></td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkUserName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" class="ace T-checkbox" {{if !!rs.isConfirmAccount}}checked="checked"{{/if}} /> \r\n                        <span class="lbl">对账</span>\r\n                    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view-details" style="white-space: nowrap;">查看</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <label class="pos-rel pull-right" style="line-height: 2.2em;">\r\n                <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> \r\n            </label>\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"></div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});