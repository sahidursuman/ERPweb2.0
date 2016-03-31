/*TMODJS:{"debug":true,"version":89,"md5":"96d2023bc48db4dc145a549e1d123e9c"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/TicketClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, name = $data.name, searchParam = $data.searchParam, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, source = $data.source, type = $data.type, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, $out = "";
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;"> <div class="form-group mar-r-10"> <label>票务商家：</label> <input name="ticketName" value="', 
            $line = 5, $out += $escape(name), $out += '" type="text" /> </div> <div class="form-group mar-r-10"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startDate), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endDate), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group mar-r-10"> <label>账务类别：</label> <input type="text" class="form-control T-search-type" value="', 
            $line = 15, $out += $escape(searchParam.accountInfo), $out += '"> </div> <label class="form-group">对账状态：</label> <div class="form-group btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 19, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 21, searchParam.isConfirmAccount && "" !== searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 25) : ($out += " 未对账 ", $line = 27) : ($out += " 全部 ", $line = 23), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <div class="form-group"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <div class="form-inline"> <div class="form-group"> <label>账面应付合计：</label> <label class="F-float F-money">', 
            $line = 46, $out += $escape(sumNeedPayMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label>已付金额合计：</label> <label class="F-float F-money">', 
            $line = 50, $out += $escape(sumPayedMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label>结算金额合计：</label> <label class="F-float F-money">', 
            $line = 54, $out += $escape(sumSettlementMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label>未付金额合计：</label> <label class="F-float F-money">', 
            $line = 58, $out += $escape(sumUnPayedMoney), $out += '</label> </div> <div class="form-group mar-r-20"> <label>未付金额合计(已对账)：</label> <label class="T-unpayMoney F-float F-money">', 
            $line = 62, $out += $escape(checkedUnPayedMoney), $out += '</label> </div> </div> <div class="form-inline globalAdd"> <div class="form-group mar-r-20"> <label class="control-label">本次付款金额合计：</label> <label class="control-label"> <input type="text" class="form-control money T-sumReciveMoney F-float F-money" name="sumPayMoney" ', 
            $line = 69, source && ($out += 'disabled="disabled" ', $line = 69), $out += ' style="width: 90px;"> </label> </div> ', 
            $line = 72, type || ($out += ' <div class="form-group mar-r-20"> <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 76), $out += ' <div class="form-group mar-r-20"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 80, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-r-20"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" class="money" style="width:300px;"> <input type="hidden" name="cash-id"> </label> </div> <div class="form-group mar-r-20"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" style="width:300px;"> <input type="hidden" name="card-id"> </label> </div> <div class="form-group mar-r-20"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number"> </label> </div> <div class="form-group "> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" style="width:140px;"> </label> </div> </div> <div class="form-group"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="form-control T-sumRemark" style="width:900px;"> </label> </div> <input name="accountStatus" value="', 
            $line = 116, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </div> <div class="row"> <table class="table table-striped table-bordered table-hover hct_align_middle"> <thead> <tr class="T-tr-fixed bg-blur"> <th>账务类别</th> <th>发生日期（账期）</th> <th>类型</th> <th>班次</th> <th>座位级别</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>账面应付</th> <th>已付金额</th> <th>单据</th> <th>结算金额</th> <th>未付金额</th> <th>本次付款金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="min-width: 105px;">对账</th> </tr> </thead> <tbody class="T-list T-checkList T-clearList"> </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 148, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> <div class="row"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px" data-type=', 
            $line = 160, $out += $escape(source ? 2 : 1), $out += '> <i class="ace-icon fa fa-check-circle"></i> 确定付款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;">\r\n        <div class="form-group mar-r-10">\r\n            <label>票务商家：</label>\r\n            <input name="ticketName" value="{{name}}" type="text" />\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}" style="width: 100px; text-align: center;">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}" style="width: 100px; text-align: center;">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>账务类别：</label>\r\n            <input type="text" class="form-control T-search-type" value="{{searchParam.accountInfo}}">\r\n        </div>\r\n        <label class="form-group">对账状态：</label>\r\n        <div class="form-group btn-group T-check-status mar-r-10">\r\n            <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                    {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount === ""}}\r\n                        全部\r\n                    {{else if searchParam.isConfirmAccount == 1}}\r\n                        已对账\r\n                    {{else}}\r\n                        未对账\r\n                    {{/if}}\r\n                </span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu">\r\n                <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline">\r\n        <div class="form-group">\r\n            <label>账面应付合计：</label>\r\n            <label class="F-float F-money">{{sumNeedPayMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label>已付金额合计：</label>\r\n            <label class="F-float F-money">{{sumPayedMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label>结算金额合计：</label>\r\n            <label class="F-float F-money">{{sumSettlementMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label>未付金额合计：</label>\r\n            <label class="F-float F-money">{{sumUnPayedMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label>未付金额合计(已对账)：</label>\r\n            <label class="T-unpayMoney F-float F-money">{{checkedUnPayedMoney}}</label>\r\n        </div>\r\n    </div>\r\n    <div class="form-inline globalAdd">\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">本次付款金额合计：</label>\r\n            <label class="control-label">\r\n                <input type="text" class="form-control money T-sumReciveMoney F-float F-money" name="sumPayMoney" {{if source}}disabled="disabled" {{/if}} style="width: 90px;">\r\n            </label>\r\n        </div>\r\n        {{if !type}}\r\n        <div class="form-group mar-r-20">\r\n            <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n        </div>\r\n        {{/if}}\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">付款方式：</label>\r\n            <select class="form-control T-sumPayType" name="sumPayType">\r\n                {{getPayTypeOptions}}\r\n            </select>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">现金账号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="cash-number" class="money" style="width:300px;">\r\n                <input type="hidden" name="cash-id">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">银行账号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="card-number" class="money" style="width:300px;">\r\n                <input type="hidden" name="card-id">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-20">\r\n            <label class="control-label">凭证编号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="credentials-number">\r\n            </label>\r\n        </div>\r\n        <div class="form-group ">\r\n            <label class="control-label">记账日期：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="tally-date" style="width:140px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class="form-group">\r\n        <label class="control-label">备注：</label>\r\n        <label class="control-label">\r\n            <input type="text" class="form-control T-sumRemark" style="width:900px;">\r\n        </label>\r\n    </div>\r\n    <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover hct_align_middle">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>账务类别</th>\r\n                <th>发生日期（账期）</th>\r\n                <th>类型</th>\r\n                <th>班次</th>\r\n                <th>座位级别</th>\r\n                <th>单价</th>\r\n                <th>数量</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>已付金额</th>\r\n                <th>单据</th>\r\n                <th>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th>本次付款金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="min-width: 105px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list T-checkList T-clearList">\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px" data-type={{source?2:1}}>\r\n                <i class="ace-icon fa fa-check-circle"></i> 确定付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});