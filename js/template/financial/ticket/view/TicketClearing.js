/*TMODJS:{"debug":true,"version":24,"md5":"da5643425249d2147c16e751318efa69"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/TicketClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, name = $data.name, searchParam = $data.searchParam, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, source = $data.source, $out = "";
            return $out += '<div class="row T-search-area border globalAdd" style="padding: 0 20px;"> <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;"> <div class="form-group"> <label>票务商家：</label> <label>', 
            $line = 5, $out += $escape(name), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startDate), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endDate), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group marginLeft-30"> <label>账务类别：</label> <input type="text" class="form-control T-search-type" value="', 
            $line = 15, $out += $escape(searchParam.accountInfo), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <div class="form-inline"> <div class="form-group"> <label>账面应付合计：</label> <label>', 
            $line = 26, $out += $escape(sumNeedPayMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>已付金额合计：</label> <label>', 
            $line = 30, $out += $escape(sumPayedMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>结算金额合计：</label> <label>', 
            $line = 34, $out += $escape(sumSettlementMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未收金额合计：</label> <label>', 
            $line = 38, $out += $escape(sumUnPayedMoney), $out += '</label> </div> </div> <div class="form-inline" style="padding-top: 10px;"> <div class="form-group"> <label>本次收款金额合计：</label> <input type="text" class="form-control T-sumReciveMoney" name="sumPayMoney" ', 
            $line = 44, source && ($out += 'readonly="readonly"', $line = 44), $out += ' style="width:70px;"> </div> <div class="form-group marginLeft-30"> <label>收款方式：</label> <select class="form-control T-sumPayType" name="payType"> <option>现金</option> <option>银行转账</option> <option>网上支付</option> <option>支票</option> <option>其它</option> </select> </div> <div class="form-group marginLeft-30"> <label>备注：</label> <input type="text" class="form-control T-sumRemark"> </div> ', 
            $line = 60, source || ($out += ' <div class="form-group marginLeft-30"> <button class="btn btn-xs btn-primary marginLeft-30 T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 64), $out += ' </div> </div> <div class="row" style="margin-top: 30px"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">账务类别</th> <th class="th-border">发生日期（账期）</th> <th class="th-border">类型</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border"style="min-width: 90px;">对账</th> </tr> </thead> <tbody class="T-list T-checkList T-clearList"> </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 99, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> <div class="row"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-btn-save" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确定付款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area border globalAdd" style="padding: 0 20px;">\r\n    <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label>票务商家：</label>\r\n            <label>{{name}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}" style="width: 100px; text-align: center;">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}" style="width: 100px; text-align: center;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>账务类别：</label>\r\n            <input type="text" class="form-control T-search-type" value="{{searchParam.accountInfo}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline">\r\n        <div class="form-group">\r\n            <label>账面应付合计：</label>\r\n            <label>{{sumNeedPayMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>已付金额合计：</label>\r\n            <label>{{sumPayedMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>结算金额合计：</label>\r\n            <label>{{sumSettlementMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>未收金额合计：</label>\r\n            <label>{{sumUnPayedMoney}}</label>\r\n        </div>\r\n    </div>\r\n    <div class="form-inline" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label>本次收款金额合计：</label>\r\n            <input type="text" class="form-control T-sumReciveMoney" name="sumPayMoney" {{if source}}readonly="readonly"{{/if}} style="width:70px;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>收款方式：</label>\r\n            <select class="form-control T-sumPayType" name="payType">\r\n                <option>现金</option>\r\n                <option>银行转账</option>\r\n                <option>网上支付</option>\r\n                <option>支票</option>\r\n                <option>其它</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>备注：</label>\r\n            <input type="text" class="form-control T-sumRemark">\r\n        </div>\r\n        {{if !source}}\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn btn-xs btn-primary marginLeft-30 T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n        </div>\r\n        {{/if}}\r\n    </div>\r\n</div>\r\n<div class="row" style="margin-top: 30px">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">序号</th>\r\n                <th class="th-border">账务类别</th>\r\n                <th class="th-border">发生日期（账期）</th>\r\n                <th class="th-border">类型</th>\r\n                <th class="th-border">班次</th>\r\n                <th class="th-border">座位级别</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border"style="min-width: 90px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list T-checkList T-clearList">\r\n\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-btn-save" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确定付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});