/*TMODJS:{"debug":true,"version":208,"md5":"9620fda2afeb604a35d925d870ac8258"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/replaceClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, name = $data.name, searchParam = $data.searchParam, totalList = $data.totalList, source = $data.source, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, $out = "";
            return $out += ' <div class="row T-search-area globalAdd"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>同行客户：</label> <input value="', 
            $line = 5, $out += $escape(name), $out += '" name="partnerAgencyName" type="text"> <input value="', 
            $line = 6, $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" type="hidden"> </div> <div class="form-group mar-r-10"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 10, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 12, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group mar-r-10"> <label>代订单号：</label> <input type="text" class="form-control T-search-order" value="', 
            $line = 16, $out += $escape(searchParam.orderNumber), $out += '" style="width: 190px;"> </div> <div class="form-group mar-r-10"> <label>项目：</label> <input type="text" class="form-control T-search-project" value="', 
            $line = 20, $out += $escape(searchParam.projects), $out += '"> </div> <div class="form-group mar-r-10"> <label>客户联系人：</label> <input type="text" class="form-control T-search-contact" value="', 
            $line = 24, $out += $escape(searchParam.contactRealname), $out += '" data-id="', 
            $line = 24, $out += $escape(searchParam.contactId), $out += '" style="width:100px;" placeholder="客户联系人" /> </div> <div class="form-group mar-r-10"> <label>录入人：</label> <input type="text" class="form-control T-search-creator" value="', 
            $line = 28, $out += $escape(searchParam.creatorName), $out += '" data-id="', $line = 28, 
            $out += $escape(searchParam.creatorId), $out += '" style="width:100px;" placeholder="录入人" /> </div> <label class="form-group">对账状态：</label> <div class="form-group btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 32, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 34, searchParam.isConfirmAccount && "" != searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 38) : ($out += " 未对账 ", $line = 40) : ($out += " 全部 ", $line = 36), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <div class="form-group"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <input name="accountStatus" value="', 
            $line = 56, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> <div class="form-inline"> <div class="form-group mar-r-20"> <label>代订金额合计：</label> <label class="F-float F-money T-sumBookingMoney">', 
            $line = 60, $out += $escape(totalList.sumBookingMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label>已收金额合计：</label> <label class="F-float F-money T-sumReceiveMoney">', 
            $line = 64, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label>结算金额合计：</label> <label class="F-float F-money T-stMoney">', 
            $line = 68, $out += $escape(totalList.sumSettlementMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label>未收金额合计：</label> <label class="F-float F-money T-sumUnReceiveMoney">', 
            $line = 72, $out += $escape(totalList.sumUnReceiveMoney), $out += '</label> </div> <div class="form-group"> <label>未收金额合计(已对账)：</label> <label class="T-unpayMoney F-float F-money">', 
            $line = 76, $out += $escape(totalList.checkedUnPayedMoney), $out += '</label> </div> </div> <div class="form-inline globalAdd"> <div class="form-group mar-r-10"> <label class="control-label">本次收款金额合计：</label> <label class="control-label"> <input type="text" class="form-control T-sumReciveMoney money F-float F-money" name="sumPayMoney" ', 
            $line = 84, source && ($out += 'disabled="disabled"', $line = 84), $out += "> </label> </div> ", 
            $line = 88, source || ($out += ' <div class="form-group mar-r-10"> <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 92), $out += ' <div class="form-group mar-r-10"> <label class="control-label">收款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 97, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-r-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" class="money" style="width:300px;"> <input type="hidden" name="cash-id"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" style="width:300px;"> <input type="hidden" name="card-id"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" style="width:140px;"> </label> </div> </div> <div class="form-group"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="T-sumRemark" style="width:900px;"> </label> </div> </div> <div class="row"> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>代订单号</th> <th>代订日期（账期）</th> <th>客户联系人</th> <th>项目</th> <th style="width: 150px;max-width: 150px;">项目名称</th> <th style="width: 200px;max-width: 200px;">明细</th> <th style="width: 90px;max-width:90px;">录入人</th> <th>代订金额</th> <th>已收金额</th> <th>结算金额</th> <th>未收金额</th> <th>本次收款金额</th> <th>备注</th> <th style="width: 90px;max-width:90px;">对账时间</th> <th>对账人</th> <th style="width: 120px;max-width: 120px;">对账</th> </tr> </thead> <tbody class="T-list T-clearList"> </tbody> </table> </div> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 166, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> <div class="row"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认收款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '    <div class="row T-search-area globalAdd">\r\n        <form class="form-inline" role="form" onsubmit="return false">\r\n            <div class="form-group mar-r-10">\r\n                <label>同行客户：</label>\r\n                <input value="{{name}}" name="partnerAgencyName" type="text">\r\n                <input value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" type="hidden">\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label>账期：</label>\r\n                <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}">\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label>代订单号：</label>\r\n                <input type="text" class="form-control T-search-order" value="{{searchParam.orderNumber}}" style="width: 190px;">\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label>项目：</label>\r\n                <input type="text" class="form-control T-search-project" value="{{searchParam.projects}}">\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n            <label>客户联系人：</label>\r\n            <input type="text" class="form-control T-search-contact" value="{{searchParam.contactRealname}}" data-id="{{searchParam.contactId}}" style="width:100px;" placeholder="客户联系人" />\r\n        </div>\r\n         <div class="form-group mar-r-10">\r\n            <label>录入人：</label>\r\n            <input type="text" class="form-control T-search-creator" value="{{searchParam.creatorName}}" data-id="{{searchParam.creatorId}}" style="width:100px;" placeholder="录入人" />\r\n        </div>\r\n            <label class="form-group">对账状态：</label>\r\n            <div class="form-group btn-group T-check-status mar-r-10">\r\n                <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                    <span>\r\n                        {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount == ""}}\r\n                            全部\r\n                        {{else if searchParam.isConfirmAccount == 1}}\r\n                            已对账\r\n                        {{else}}\r\n                            未对账\r\n                        {{/if}}\r\n                    </span>\r\n                    <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                </button>\r\n                <ul class="dropdown-menu">\r\n                    <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                    <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                    <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n                </ul>\r\n            </div>\r\n            <div class="form-group">\r\n                <button class="btn-sm search-btn T-btn-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索 \r\n                </button>\r\n            </div>\r\n        </form>\r\n        <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n         <div class="form-inline">\r\n            <div class="form-group mar-r-20">\r\n                <label>代订金额合计：</label>\r\n                <label class="F-float F-money T-sumBookingMoney">{{totalList.sumBookingMoney}}</label>\r\n            </div>\r\n            <div class="form-group mar-r-20">\r\n                <label>已收金额合计：</label>\r\n                <label class="F-float F-money T-sumReceiveMoney">{{totalList.sumReceiveMoney}}</label>\r\n            </div>\r\n            <div class="form-group mar-r-20">\r\n                <label>结算金额合计：</label>\r\n                <label class="F-float F-money T-stMoney">{{totalList.sumSettlementMoney}}</label>\r\n            </div>\r\n            <div class="form-group mar-r-20">\r\n                <label>未收金额合计：</label>\r\n                <label class="F-float F-money T-sumUnReceiveMoney">{{totalList.sumUnReceiveMoney}}</label>\r\n            </div>\r\n            <div class="form-group">\r\n                <label>未收金额合计(已对账)：</label>\r\n                <label class="T-unpayMoney F-float F-money">{{totalList.checkedUnPayedMoney}}</label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-inline globalAdd">\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">本次收款金额合计：</label>\r\n                <label class="control-label">\r\n                    <input type="text" class="form-control T-sumReciveMoney money F-float F-money" name="sumPayMoney"  {{if source}}disabled="disabled"{{/if}}>\r\n                </label>\r\n            </div>\r\n\r\n            {{if !source}} \r\n            <div class="form-group mar-r-10">\r\n                <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n            </div>\r\n            {{/if}}\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">收款方式：</label>\r\n                <select class="form-control T-sumPayType" name="sumPayType">\r\n                    {{getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">现金账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="cash-number" class="money" style="width:300px;">\r\n                    <input type="hidden" name="cash-id">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" class="money" style="width:300px;">\r\n                    <input type="hidden" name="card-id">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date"  style="width:140px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" class="T-sumRemark" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class="row">\r\n    <div class="overflow-x min-w-1050">\r\n        <table class="table table-striped table-bordered table-hover hct_align_middle w-1500">\r\n            <thead>\r\n                <tr class="T-tr-fixed bg-blur">\r\n                    <th>代订单号</th>\r\n                    <th>代订日期（账期）</th>\r\n                    <th>客户联系人</th>\r\n                    <th>项目</th>\r\n                    <th style="width: 150px;max-width: 150px;">项目名称</th>\r\n                    <th style="width: 200px;max-width: 200px;">明细</th>\r\n                    <th style="width: 90px;max-width:90px;">录入人</th>\r\n                    <th>代订金额</th>\r\n                    <th>已收金额</th>\r\n                    <th>结算金额</th>\r\n                    <th>未收金额</th>\r\n                    <th>本次收款金额</th>\r\n                    <th>备注</th>\r\n                    <th style="width: 90px;max-width:90px;">对账时间</th>\r\n                    <th>对账人</th>\r\n                    <th style="width: 120px;max-width: 120px;">对账</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-list T-clearList">\r\n            </tbody>\r\n        </table>\r\n        </div>\r\n    </div> \r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n        </div>\r\n    </div>\r\n    <div class="row">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary T-btn-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px">\r\n                    <i class="ace-icon fa fa-check-circle"></i> 确认收款\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});