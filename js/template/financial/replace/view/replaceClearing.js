/*TMODJS:{"debug":true,"version":77,"md5":"729b8f60570804818d3cf308ff82378f"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/replaceClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, name = $data.name, searchParam = $data.searchParam, totalList = $data.totalList, source = $data.source, type = $data.type, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, $out = "";
            return $out += ' <div class="row T-search-area border globalAdd" style="padding: 0 20px;"> <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;"> <div class="form-group"> <label>同行客户：</label> <label>', 
            $line = 5, $out += $escape(name), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <label>订单号：</label> <input type="text" class="form-control T-search-order" value="', 
            $line = 15, $out += $escape(searchParam.orderNumber || "全部"), $out += '" style="width: 190px;"> </div> <div class="form-group marginLeft-30"> <label>项目：</label> <input type="text" class="form-control T-search-project" value="', 
            $line = 19, 1 == searchParam.busCompanyOrderStatus && ($out += "车队, ", $line = 19), 
            $line = 19, 1 == searchParam.hotelOrderStatus && ($out += "酒店, ", $line = 19), $line = 19, 
            1 == searchParam.scenicOrderStatus && ($out += "景区, ", $line = 19), $line = 19, 
            1 == searchParam.ticketOrderStatus && ($out += "票务, ", $line = 19), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <div class="form-inline" style="padding-top: 10px;"> <div class="form-group"> <label>代订金额合计：</label> <label>', 
            $line = 30, $out += $escape(totalList.sumBookingMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>已收金额合计：</label> <label>', 
            $line = 34, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>结算金额合计：</label> <label>', 
            $line = 38, $out += $escape(totalList.sumSettlementMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未收金额合计：</label> <label>', 
            $line = 42, $out += $escape(totalList.sumUnReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未收金额合计(已对账)：</label> <label class="T-unpayMoney">', 
            $line = 46, $out += $escape(totalList.checkedUnPayedMoney), $out += '</label> </div> </div> <div class="form-inline globalAdd" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">本次收款金额合计：</label> <label class="control-label"> <input type="text" class="form-control T-sumReciveMoney money" name="sumPayMoney" ', 
            $line = 54, source && ($out += 'readonly="readonly"', $line = 54), $out += "> </label> </div> ", 
            $line = 58, type || ($out += ' <div class="form-group mar-l-10"> <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 62), $out += ' <div class="form-group mar-l-10"> <label class="control-label">收款方式：</label> <select class="form-control T-sumPayType" name="payType"> ', 
            $line = 67, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-l-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" style="width:230px;"> <input type="hidden" name="card-id"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" style="width:100px;"> </label> </div> </div> <div class="form-group"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="T-sumRemark" style="width:900px;"> </label> </div> </div> <div class="row" style="margin-top: 20px"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:11%;"> <col style="width:6%;"> <col style="width:10%;"> <col style="width:19%;"> <col style="width:5%;"> <col style="width:5%;"> <col style="width:8%;"> <col style="width:5%;"> <col style="width:6%;"> <col style="width:6%;"> <col style="width:5%;"> <col style="width:7%;"> <col style="width:7%; min-width: 105px;"> </colgroup> <thead> <tr> <th class="th-border">代订单号</th> <th class="th-border">代订日期（账期）</th> <th class="th-border">项目</th> <th class="th-border">明细</th> <th class="th-border">代订金额</th> <th class="th-border">已收金额</th> <th class="th-border">结算金额</th> <th class="th-border">未收金额</th> <th class="th-border">本次收款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-list T-clearList"> </tbody> </table> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 139, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> <div class="row"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-btn-save" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认收款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '    <div class="row T-search-area border globalAdd" style="padding: 0 20px;">\r\n        <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;">\r\n            <div class="form-group">\r\n                <label>同行客户：</label>\r\n                <label>{{name}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>账期：</label>\r\n                <input type="text" class="form-control datepicker T-search-start-date" value="{{searchParam.startDate}}">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker T-search-end-date" value="{{searchParam.endDate}}">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>订单号：</label>\r\n                <input type="text" class="form-control T-search-order" value="{{searchParam.orderNumber || \'全部\'}}" style="width: 190px;">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>项目：</label>\r\n                <input type="text" class="form-control T-search-project" value="{{if searchParam.busCompanyOrderStatus == 1}}车队, {{/if}}{{if searchParam.hotelOrderStatus == 1}}酒店, {{/if}}{{if searchParam.scenicOrderStatus == 1}}景区, {{/if}}{{if searchParam.ticketOrderStatus == 1}}票务, {{/if}}">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <button class="btn-sm search-btn T-btn-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索 \r\n                </button>\r\n            </div>\r\n        </form>\r\n         <div class="form-inline" style="padding-top: 10px;">\r\n            <div class="form-group">\r\n                <label>代订金额合计：</label>\r\n                <label>{{totalList.sumBookingMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>已收金额合计：</label>\r\n                <label>{{totalList.sumReceiveMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>结算金额合计：</label>\r\n                <label>{{totalList.sumSettlementMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>未收金额合计：</label>\r\n                <label>{{totalList.sumUnReceiveMoney}}</label>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label>未收金额合计(已对账)：</label>\r\n                <label class="T-unpayMoney">{{totalList.checkedUnPayedMoney}}</label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-inline globalAdd" style="padding-top: 10px;">\r\n            <div class="form-group">\r\n                <label class="control-label">本次收款金额合计：</label>\r\n                <label class="control-label">\r\n                    <input type="text" class="form-control T-sumReciveMoney money" name="sumPayMoney"  {{if source}}readonly="readonly"{{/if}}>\r\n                </label>\r\n            </div>\r\n\r\n            {{if !type}} \r\n            <div class="form-group mar-l-10">\r\n                <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n            </div>\r\n            {{/if}}\r\n\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">收款方式：</label>\r\n                <select class="form-control T-sumPayType" name="payType">\r\n                    {{getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" class="money" style="width:230px;">\r\n                    <input type="hidden" name="card-id">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date"  style="width:100px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" class="T-sumRemark" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class="row" style="margin-top: 20px">\r\n        <table class="table table-striped table-bordered table-hover table-fixed">\r\n            <colgroup> \r\n                <col style="width:11%;"> \r\n                <col style="width:6%;"> \r\n                <col style="width:10%;"> \r\n                <col style="width:19%;"> \r\n                <col style="width:5%;"> \r\n                <col style="width:5%;"> \r\n                <col style="width:8%;"> \r\n                <col style="width:5%;"> \r\n                <col style="width:6%;"> \r\n                <col style="width:6%;"> \r\n                <col style="width:5%;"> \r\n                <col style="width:7%;"> \r\n                <col style="width:7%; min-width: 105px;"> \r\n            </colgroup>\r\n            <thead>\r\n                <tr>\r\n                    <th class="th-border">代订单号</th>\r\n                    <th class="th-border">代订日期（账期）</th>\r\n                    <th class="th-border">项目</th>\r\n                    <th class="th-border">明细</th>\r\n                    <th class="th-border">代订金额</th>\r\n                    <th class="th-border">已收金额</th>\r\n                    <th class="th-border">结算金额</th>\r\n                    <th class="th-border">未收金额</th>\r\n                    <th class="th-border">本次收款金额</th>\r\n                    <th class="th-border">备注</th>\r\n                    <th class="th-border">对账时间</th>\r\n                    <th class="th-border">对账人</th>\r\n                    <th class="th-border">对账</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-list T-clearList">\r\n            </tbody>\r\n        </table>\r\n    </div> \r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n        </div>\r\n    </div>\r\n    <div class="row">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary T-btn-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary T-btn-save" style="margin-left:20px">\r\n                    <i class="ace-icon fa fa-check-circle"></i> 确认收款\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});