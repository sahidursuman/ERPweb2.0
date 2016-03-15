/*TMODJS:{"debug":true,"version":415,"md5":"5c5ad004606d5bc50fa4231e8d3f1c81"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/innerTransferInClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, businessGroupName = $data.businessGroupName, searchParam = $data.searchParam, sumPayMoney = $data.sumPayMoney, isOut = $data.isOut, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, payType = $data.payType, bankNumber = $data.bankNumber, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, recordSize = $data.recordSize, $out = "";
            return $out += '<div class="row innerTransferChecking globalAdd"> <div> <div class="T-search"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label class="control-label pull-left" style="margin-left: 2px;">部门：</label> <span>', 
            $line = 7, $out += $escape(businessGroupName), $out += '</span> <input type="hidden" value="', 
            $line = 8, $out += $escape(searchParam.businessGroupId), $out += '" name="businessGroupId"> <input type="hidden" value="', 
            $line = 9, $out += $escape(searchParam.businessGroupName), $out += '" name="businessGroupName"> </div> <div class="form-group mar-r-10"> <label class="control-label">账期：</label> <input type="text" style="width:100px;" class="date-picker" name="startDate" value="', 
            $line = 13, $out += $escape(searchParam.startAccountTime), $out += '"/> <span>&nbsp;至&nbsp;</span> <input type="text" style="width:100px;" class="date-picker" name="endDate" value="', 
            $line = 15, $out += $escape(searchParam.endAccountTime), $out += '"/> </div> <div class="form-group mar-r-10"> <label class="control-label">线路名称：</label> <input type="text" name="lineProductName" value="', 
            $line = 19, $out += $escape(searchParam.lineProductName), $out += '"/> <input type="hidden" name="lineProductId" value="', 
            $line = 20, $out += $escape(searchParam.lineProductId), $out += '" /> </div> <div class="form-group mar-r-10"> <label class="control-label">接收人：</label> <input type="text" name="receiveUserName" value="', 
            $line = 24, $out += $escape(searchParam.receiveUserName), $out += '" /> <input type="hidden" name="receiveUserId" value="', 
            $line = 25, $out += $escape(searchParam.receiveUserId), $out += '"/> </div> <div class="form-group mar-r-10"> <label class="control-label">收客单号：</label> <input type="text" name="orderNumber" value="', 
            $line = 29, $out += $escape(searchParam.orderNumber), $out += '" /> </div> <div class="form-group"> <button class="btn-sm search-btn T-btn-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <input name="accountStatus" value="', 
            $line = 39, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> <form class="form-horizontal T-count" role="form" onsubmit="return false"> <div class="form-group"> <label class=" control-label pull-left mar-l-10 mar-r-20">人数合计：<span class="T-sumTransCount F-float F-count"></span></label> <label class=" control-label mar-r-20">合同金额合计：<span class="T-sumTransNeedPayMoney F-float F-money"></span></label> <label class=" control-label mar-r-20">已收金额合计：<span class="T-sumPayedMoney F-float F-money"></span></label> <label class=" control-label mar-r-20">返款金额合计：<span class="T-sumBackMoney F-float F-money"></span></label> <label class=" control-label mar-r-20">结算金额合计：<span class="T-sumSettlementMoney F-float F-money"></span></label> <label class=" control-label mar-r-20">未收金额合计：<span class="T-sumUnReceivedMoney F-float F-money"></span></label> <label class=" control-label mar-r-20">未收金额合计(已对账)：<span class="T-sumUnPayedMoney F-float F-money"></span></label> </div> </form> <div class="form-inline globalAdd T-summary"> <div class="form-group mar-r-10"> <label class="control-label">本次收款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="money F-float F-money" value="', 
            $line = 55, $out += $escape(sumPayMoney), $out += '" ', $line = 55, isOut && ($out += "disabled ", 
            $line = 55), $out += "> </label> </div> ", $line = 59, isOut || ($out += ' <div class="form-group mar-r-10"> <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 63), $out += ' <div class="form-group mar-r-10"> <label class="control-label">收款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 67, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-r-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" class="money" ', 
            $line = 74, 0 == payType && ($out += 'value="', $line = 74, $out += $escape(bankNumber), 
            $out += '"', $line = 74), $out += ' style="width:300px;"> <input type="hidden" name="cash-id" ', 
            $line = 75, 0 == payType && ($out += 'value="', $line = 75, $out += $escape(bankId), 
            $out += '"', $line = 75), $out += '/> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" ', 
            $line = 81, 0 != payType && ($out += 'value="', $line = 81, $out += $escape(bankNumber), 
            $out += '"', $line = 81), $out += ' style="width:300px;"> <input type="hidden" name="card-id" ', 
            $line = 82, 0 != payType && ($out += 'value="', $line = 82, $out += $escape(bankId), 
            $out += '"', $line = 82), $out += '> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 88, $out += $escape(voucher), $out += '"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" style="width:140px;" value="', 
            $line = 94, $out += $escape(billTime), $out += '"> </label> </div> </div> <div class="form-group"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" name="sumRemark" value="', 
            $line = 102, $out += $escape(sumPayRemark), $out += '" style="width:900px;"> </label> </div> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>收客单号</th> <th>线路产品</th> <th>出游日期</th> <th>联系人</th> <th>人数</th> <th>接收人</th> <th>接收时间</th> <th>内转转入</th> <th>明细</th> <th>已收金额</th> <th>返款金额</th> <th>结算金额</th> <th>未收金额</th> <th>本次收款金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="width:100px">对账</th> </tr> </thead> <tbody class="T-clearList" data-right="1360005"> </tbody> </table> </div> <div class="row pageMode" style="padding-top: 10px;"> <div class="col-xs-6"> <small>共计 <span class="T-recordSize">', 
            $line = 137, $out += $escape(recordSize), $out += '</span> 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <div class="clearfix"></div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear"> <i class="ace-icon fa fa-check-circle"></i> 确认收款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row innerTransferChecking globalAdd">\r\n    <div>\r\n         <div class="T-search">\r\n            <form class="form-inline" role="form" onsubmit="return false">\r\n                <div class="form-group mar-r-10">\r\n                    <label  class="control-label pull-left" style="margin-left: 2px;">部门：</label>\r\n                    <span>{{businessGroupName}}</span>\r\n                    <input type="hidden" value="{{searchParam.businessGroupId}}" name="businessGroupId">\r\n                    <input type="hidden" value="{{searchParam.businessGroupName}}" name="businessGroupName"> \r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">账期：</label>\r\n                      <input type="text" style="width:100px;" class="date-picker" name="startDate" value="{{searchParam.startAccountTime}}"/>\r\n                      <span>&nbsp;至&nbsp;</span>\r\n                      <input type="text" style="width:100px;" class="date-picker" name="endDate" value="{{searchParam.endAccountTime}}"/>\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">线路名称：</label>\r\n                      <input type="text" name="lineProductName" value="{{searchParam.lineProductName}}"/>\r\n                      <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}" />\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">接收人：</label>\r\n                    <input type="text" name="receiveUserName" value="{{searchParam.receiveUserName}}" />\r\n                    <input type="hidden" name="receiveUserId" value="{{searchParam.receiveUserId}}"/>\r\n                </div>\r\n                <div class="form-group mar-r-10">\r\n                    <label class="control-label">收客单号：</label>\r\n                    <input type="text" name="orderNumber" value="{{searchParam.orderNumber}}" />\r\n                </div>\r\n                <div class="form-group">\r\n                    <button class="btn-sm search-btn T-btn-search" >\r\n                         <i class="ace-icon fa fa-search"></i>\r\n                             搜索\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n        <form class="form-horizontal T-count" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label class=" control-label pull-left mar-l-10 mar-r-20">人数合计：<span class="T-sumTransCount F-float F-count"></span></label>\r\n                <label class=" control-label mar-r-20">合同金额合计：<span class="T-sumTransNeedPayMoney F-float F-money"></span></label>\r\n                <label class=" control-label mar-r-20">已收金额合计：<span class="T-sumPayedMoney F-float F-money"></span></label>\r\n                <label class=" control-label mar-r-20">返款金额合计：<span class="T-sumBackMoney F-float F-money"></span></label>\r\n                <label class=" control-label mar-r-20">结算金额合计：<span class="T-sumSettlementMoney F-float F-money"></span></label>\r\n                <label class=" control-label mar-r-20">未收金额合计：<span class="T-sumUnReceivedMoney F-float F-money"></span></label>\r\n                <label class=" control-label mar-r-20">未收金额合计(已对账)：<span class="T-sumUnPayedMoney F-float F-money"></span></label>\r\n            </div>\r\n        </form>\r\n        <div class="form-inline globalAdd T-summary">\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">本次收款金额合计：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="sumPayMoney" class="money F-float F-money" value="{{sumPayMoney}}" {{if isOut}}disabled {{/if}}>\r\n                </label>\r\n            </div>\r\n\r\n            {{if !isOut}} \r\n            <div class="form-group mar-r-10">\r\n                <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n            </div>\r\n            {{/if}}\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">收款方式：</label>\r\n                <select class="form-control T-sumPayType" name="sumPayType">\r\n                    {{getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">现金账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="cash-number" class="money" {{if payType == 0}}value="{{bankNumber}}"{{/if}} style="width:300px;">\r\n                    <input type="hidden" name="cash-id" {{if payType == 0}}value="{{bankId}}"{{/if}}/>\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" class="money" {{if payType != 0}}value="{{bankNumber}}"{{/if}} style="width:300px;">\r\n                    <input type="hidden" name="card-id" {{if payType != 0}}value="{{bankId}}"{{/if}}>\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number" value="{{voucher}}">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" style="width:140px;" value="{{billTime}}">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="sumRemark" value="{{sumPayRemark}}" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class="overflow-x min-w-1050">\r\n        <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500">\r\n            <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                 <th>收客单号</th>\r\n                 <th>线路产品</th>\r\n                 <th>出游日期</th>\r\n                 <th>联系人</th>\r\n                 <th>人数</th>\r\n                 <th>接收人</th>\r\n                 <th>接收时间</th>\r\n                 <th>内转转入</th>\r\n                 <th>明细</th>\r\n                 <th>已收金额</th>\r\n                 <th>返款金额</th>\r\n                 <th>结算金额</th>\r\n                 <th>未收金额</th>\r\n                 <th>本次收款金额</th>\r\n                 <th>备注</th>\r\n                 <th>对账时间</th>\r\n                 <th>对账人</th>\r\n                 <th style="width:100px">对账</th>  \r\n            </tr>\r\n            </thead>   \r\n            <tbody class="T-clearList" data-right="1360005">\r\n            \r\n            </tbody>\r\n        </table>\r\n        </div>\r\n        <div class="row pageMode" style="padding-top: 10px;">\r\n            <div class="col-xs-6">\r\n                <small>共计 <span class="T-recordSize">{{recordSize}}</span> 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="clearfix"></div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary T-btn-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary T-saveClear">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                     确认收款\r\n                </button>\r\n            </div>\r\n        </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});