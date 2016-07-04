/*TMODJS:{"debug":true,"version":150,"md5":"939e02bf89978151da0371660d612535"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/TicketChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, name = $data.name, searchParam = $data.searchParam, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, $each = $utils.$each, financialTicketList = $data.financialTicketList, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row check globalAdd"> <div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>票务商家：</label> <input name="ticketName" value="', 
            $line = 6, $out += $escape(name), $out += '" type="text" /> <input name="ticketId" value="', 
            $line = 7, $out += $escape(searchParam.ticketId), $out += '" type="hidden" /> </div> <div class="form-group mar-r-10"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 11, $out += $escape(searchParam.startDate), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 13, $out += $escape(searchParam.endDate), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group mar-r-10"> <label>账务类别：</label> <input type="text" class="form-control T-search-type" value="', 
            $line = 17, $out += $escape(searchParam.accountInfo), $out += '"> </div> <label class="form-group">对账状态：</label> <div class="form-group btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 21, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 23, searchParam.isConfirmAccount && "" !== searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 27) : ($out += " 未对账 ", $line = 29) : ($out += " 全部 ", $line = 25), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group"> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> </form> <input name="accountStatus" value="', 
            $line = 48, $out += $escape(searchParam.accountStatus), $out += '" type="hidden" /> <div class="form-inline"> <div class="form-group"> <label>账面应付合计：</label> <label>', 
            $line = 52, $out += $escape(sumNeedPayMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>已付金额合计：</label> <label class="F-float F-money">', 
            $line = 56, $out += $escape(sumPayedMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>结算金额合计：</label> <label class="T-stMoney F-float F-money">', 
            $line = 60, $out += $escape(sumSettlementMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未付金额合计：</label> <label class="T-unpayMoney F-float F-money">', 
            $line = 64, $out += $escape(sumUnPayedMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未付金额合计(已对账)：</label> <label class="F-float F-money">', 
            $line = 68, $out += $escape(checkedUnPayedMoney), $out += '</label> </div> </div> <input name="accountStatus" value="', 
            $line = 71, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover hct_align_middle"> <thead> <tr class="T-tr-fixed bg-blur"> <th>账务类别</th> <th>发生日期（账期）</th> <th>类型</th> <th>班次</th> <th>座位级别</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>账面应付</th> <th>预付款申请</th> <th>已付金额</th> <th>单据</th> <th>结算金额</th> <th>未付金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="min-width: 110px;">对账</th> </tr> </thead> <tbody class="T-list T-checkList" data-right="1210002|1210005"> ', 
            $line = 98, $each(financialTicketList, function(rs) {
                $out += ' <tr class="T-checkTr ', $line = 99, rs.change && ($out += "success", $line = 99), 
                $out += '" data-id="', $line = 99, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 99, rs.isConfirmAccount ? ($out += "1", $line = 99) : ($out += "0", $line = 99), 
                $out += '" ', $line = 99, rs.change && ($out += 'data-change="true"', $line = 99), 
                $out += "> <td>", $line = 100, $out += $escape(rs.tripNumber), $line = 100, rs.tripNumber && rs.lineProductName && ($out += "，", 
                $line = 100), $line = 100, $out += $escape(rs.lineProductName), $line = 100, (rs.lineProductName && rs.guideName || rs.tripNumber && !rs.lineProductName && rs.guideName) && ($out += "，", 
                $line = 100), $line = 100, $out += $escape(rs.guideName), $out += "</td> <td>", 
                $line = 101, $out += $escape(rs.accountTime), $out += "</td> <td>", $line = 102, 
                1 == rs.type ? ($out += "机票", $line = 102) : 2 == rs.type ? ($out += "汽车票", $line = 102) : 3 == rs.type ? ($out += "火车票", 
                $line = 102) : 4 == rs.type && ($out += "轮船票", $line = 102), $out += "</td> <td>", 
                $line = 103, $out += $escape(rs.shift), $out += "</td> <td>", $line = 104, $out += $escape(rs.seatLevel), 
                $out += '</td> <td class="F-float F-money">', $line = 105, $out += $escape(rs.price), 
                $out += '</td> <td class="F-float F-count">', $line = 106, $out += $escape(rs.memberCount), 
                $out += '</td> <td class="F-float F-money">', $line = 107, $out += $escape(rs.reduceMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 108, $out += $escape(rs.needPayMoney), 
                $out += '</td> <td><a class="', $line = 109, rs.payRecoredId ? ($out += "T-action T-payRequest", 
                $line = 109) : ($out += "black", $line = 109), $out += '" data-preid="', $line = 109, 
                $out += $escape(rs.payRecoredId), $out += '" ', $line = 109, rs.payRecoredId || ($out += 'title="没有预付款记录"', 
                $line = 109), $out += '><span class="F-float F-money">', $line = 109, $out += $escape(rs.prePayMoney), 
                $out += '</span></a></td> <td class="T-payedDetail align-left" data-money="', $line = 110, 
                $out += $escape(rs.payedMoney + rs.realGuidePayMoney), $out += '"> <a class="T-action T-payDetails"> <span class="in-block">社付<span class="F-float F-money">', 
                $line = 112, $out += $escape(rs.payedMoney), $out += "</span></span> ", $line = 113, 
                1 != rs.isGuidePay && ($out += '<span class="in-block">导付<span class="F-float F-money">', 
                $line = 113, $out += $escape(rs.realGuidePayMoney), $out += "</span></span>", $line = 113), 
                $out += " </a> </td> <td>", $line = 116, rs.billImage ? ($out += '<a class="cursor T-action T-view-receipts" url="', 
                $line = 116, $out += $escape(rs.billImage), $out += '">查看</a>', $line = 116) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 116), $out += '</td> <td><input type="text" class="col-sm-12 F-float F-money" name="settlementMoney" value="', 
                $line = 117, $out += $escape(rs.settlementMoney), $out += '"', $line = 117, rs.isConfirmAccount && ($out += "disabled", 
                $line = 117), $out += '></td> <td name="unPayedMoney" class="F-float F-money">', 
                $line = 118, $out += $escape(rs.unPayedMoney), $out += '</td> <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000" ', 
                $line = 119, rs.isConfirmAccount && ($out += "disabled", $line = 119), $out += ">", 
                $line = 119, $out += $escape(rs.checkRemark), $out += "</textarea></td> <td>", $line = 120, 
                $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 121, $out += $escape(rs.checkUserName), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 124, (rs.change && 1 == rs.isChecked || !rs.change && 1 == rs.isConfirmAccount) && ($out += 'checked="checked"', 
                $line = 124), $out += ' /> <span class="lbl">对账</span> </label> <label class="cursor"> <a> |</a></label> <a class="cursor T-action T-view-details" style="white-space: nowrap;">查看</a> </td> </tr> ', 
                $line = 131;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 136, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <label class="pos-rel pull-right" style="line-height: 2.2em;"> <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"></div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd">\r\n    <div class="T-search-area">\r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group mar-r-10">\r\n                <label>票务商家：</label>\r\n                <input name="ticketName" value="{{name}}" type="text" />\r\n                <input name="ticketId" value="{{searchParam.ticketId}}" type="hidden" />\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label>账期：</label>\r\n                <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}" style="width: 100px; text-align: center;">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}" style="width: 100px; text-align: center;">\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label>账务类别：</label>\r\n                <input type="text" class="form-control T-search-type" value="{{searchParam.accountInfo}}">\r\n            </div>\r\n            <label class="form-group">对账状态：</label>\r\n            <div class="form-group btn-group T-check-status mar-r-10">\r\n                <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                    <span>\r\n                        {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount === ""}}\r\n                            全部\r\n                        {{else if searchParam.isConfirmAccount == 1}}\r\n                            已对账\r\n                        {{else}}\r\n                            未对账\r\n                        {{/if}}\r\n                    </span>\r\n                    <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                </button>\r\n                <ul class="dropdown-menu">\r\n                    <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                    <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                    <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <button class="btn-sm search-btn T-btn-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索\r\n                </button>\r\n            </div>\r\n            <div class="form-group">\r\n                <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n            </div>\r\n        </form>\r\n        <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden" />\r\n        <div class="form-inline">\r\n            <div class="form-group">\r\n                <label>账面应付合计：</label>\r\n                <label>{{sumNeedPayMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>已付金额合计：</label>\r\n                <label class="F-float F-money">{{sumPayedMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>结算金额合计：</label>\r\n                <label class="T-stMoney F-float F-money">{{sumSettlementMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>未付金额合计：</label>\r\n                <label class="T-unpayMoney F-float F-money">{{sumUnPayedMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>未付金额合计(已对账)：</label>\r\n                <label class="F-float F-money">{{checkedUnPayedMoney}}</label>\r\n            </div>\r\n        </div>\r\n        <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover hct_align_middle">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>账务类别</th>\r\n                <th>发生日期（账期）</th>\r\n                <th>类型</th>\r\n                <th>班次</th>\r\n                <th>座位级别</th>\r\n                <th>单价</th>\r\n                <th>数量</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>预付款申请</th>\r\n                <th>已付金额</th>\r\n                <th>单据</th>\r\n                <th>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="min-width: 110px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list T-checkList" data-right="1210002|1210005">\r\n        {{each financialTicketList as rs index}}\r\n            <tr class="T-checkTr {{if rs.change}}success{{/if}}" data-id="{{rs.id}}" data-confirm="{{if !!rs.isConfirmAccount}}1{{else}}0{{/if}}" {{if rs.change}}data-change="true"{{/if}}>\r\n                <td>{{rs.tripNumber}}{{if rs.tripNumber && rs.lineProductName}}，{{/if}}{{rs.lineProductName}}{{if (rs.lineProductName  && rs.guideName) || (rs.tripNumber && !rs.lineProductName && rs.guideName)}}，{{/if}}{{rs.guideName}}</td>\r\n                <td>{{rs.accountTime}}</td>\r\n                <td>{{if rs.type == 1}}机票{{else if rs.type == 2}}汽车票{{else if rs.type == 3}}火车票{{else if rs.type == 4}}轮船票{{/if}}</td>\r\n                <td>{{rs.shift}}</td>\r\n                <td>{{rs.seatLevel}}</td>\r\n                <td class="F-float F-money">{{rs.price}}</td>\r\n                <td class="F-float F-count">{{rs.memberCount}}</td>\r\n                <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n                <td><a class="{{if rs.payRecoredId}}T-action T-payRequest{{else}}black{{/if}}" data-preid="{{rs.payRecoredId}}" {{if !rs.payRecoredId}}title="没有预付款记录"{{/if}}><span class="F-float F-money">{{rs.prePayMoney}}</span></a></td>\r\n                <td class="T-payedDetail align-left" data-money="{{rs.payedMoney + rs.realGuidePayMoney}}">\r\n                    <a class="T-action T-payDetails">\r\n                        <span class="in-block">社付<span class="F-float F-money">{{rs.payedMoney}}</span></span>\r\n                        {{if rs.isGuidePay != 1}}<span class="in-block">导付<span class="F-float F-money">{{rs.realGuidePayMoney}}</span></span>{{/if}}\r\n                    </a>\r\n                </td>\r\n                <td>{{if !rs.billImage}}<span style="color:#bbb">查看</span>{{else}}<a class="cursor T-action T-view-receipts" url="{{rs.billImage}}">查看</a>{{/if}}</td>\r\n                <td><input type="text" class="col-sm-12 F-float F-money"  name="settlementMoney" value="{{rs.settlementMoney}}"{{if !!rs.isConfirmAccount}}disabled{{/if}}></td>\r\n                <td name="unPayedMoney" class="F-float F-money">{{rs.unPayedMoney}}</td>\r\n                <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000" {{if !!rs.isConfirmAccount}}disabled{{/if}}>{{rs.checkRemark}}</textarea></td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkUserName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" class="ace T-checkbox" {{if (rs.change && rs.isChecked == 1) || (!rs.change && rs.isConfirmAccount == 1)}}checked="checked"{{/if}} /> \r\n                        <span class="lbl">对账</span>\r\n                    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view-details" style="white-space: nowrap;">查看</a>\r\n                </td>\r\n            </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <label class="pos-rel pull-right" style="line-height: 2.2em;">\r\n                <input type="checkbox" class="ace T-checkAll"> <span class="lbl">全选</span> \r\n            </label>\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"></div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});