/*TMODJS:{"debug":true,"version":94,"md5":"e1facf32e416a15ad4cc966208b0e57c"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/guidePaying", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, guideName = $data.guideName, startDate = $data.startDate, endDate = $data.endDate, tripPlanNumber = $data.tripPlanNumber, lineProductId = $data.lineProductId, lineProductName = $data.lineProductName, accountStatus = $data.accountStatus, sumData = $data.sumData, borrow = $data.borrow, isOuter = $data.isOuter, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, id = $data.id, type = $data.type, $out = "";
            return $out += '<div class="row check globalAdd">  <div> <div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>导游：</label> <input type="text" class="T-guideName" value="', 
            $line = 8, $out += $escape(guideName), $out += '" /> </div> <div class="form-group input-daterange marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" style="width:100px;" value="', 
            $line = 12, $out += $escape(startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" style="width:100px;" value="', 
            $line = 14, $out += $escape(endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <label>团号：</label> <input type="text" class="form-control T-tripPlanNumber" style="width: 160px;" value="', 
            $line = 18, $out += $escape(tripPlanNumber), $out += '" maxlength="20"> </div> <div class="form-group marginLeft-30"> <label>线路产品：</label> <input type="text" class="form-control T-lineProductName" style="width: 200px;" data-id="', 
            $line = 22, $out += $escape(lineProductId), $out += '" value="', $line = 22, $out += $escape(lineProductName), 
            $out += '" maxlength="100"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <input name="accountStatus" value="', 
            $line = 30, $out += $escape(accountStatus), $out += '" type="hidden"> </div> <form class="form-horizontal T-auto-fill-area" role="form" onsubmit="return false"> <div class="form-group col-sm-12"> <label class=" control-label">预支款合计：<span class="F-float F-money">', 
            $line = 34, $out += $escape(sumData.sumGuideAllPreMoney), $out += '</span></label> <label class=" control-label marginLeft-30">账面应付合计：<span class="F-float F-money">', 
            $line = 35, $out += $escape(sumData.sumZhangmiantuibu), $out += '</span></label> <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">', 
            $line = 36, $out += $escape(sumData.sumSettlementMoney), $out += '</span></label> <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 37, $out += $escape(sumData.sumPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney-temp F-float F-money">', 
            $line = 38, $out += $escape(sumData.sumUnPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">', 
            $line = 39, $out += $escape(sumData.sumConfirmedUnPayedMoney), $out += '</span></label> </div> </form> <div class="form-inline globalAdd T-summary" style="padding-top: 10px;"> <div class="form-group mar-r-10"> <label class="control-label">', 
            $line = 45, borrow ? ($out += "本次预支款金额合计", $line = 45) : ($out += "本次付款金额合计", $line = 45), 
            $out += '：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="T-sumPayMoney money F-float F-money" ', 
            $line = 47, isOuter && ($out += "disabled ", $line = 47), $out += "> </label> </div> ", 
            $line = 51, isOuter || ($out += ' <div class="form-group mar-r-10"> <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 55), $out += ' <div class="form-group mar-r-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 60, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-r-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" class="money" style="width:300px;"> <input type="hidden" name="cash-id"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" style="width:300px;"> <input type="hidden" name="card-id"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" style="width:140px;"> </label> </div> </div> <div class="form-group"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" name="remark" class="T-remark" style="width:900px;"> </label> </div> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>团号</th> <th>线路</th> <th>完团日期（账期）</th> <th>预支款</th> <th>现收</th> <th>现付</th> <th>导服费</th> <th>管理费</th> <th>购物导佣</th> <th>自费导佣</th> <th>导游收入</th> <th>账面退补</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>', 
            $line = 118, borrow ? ($out += "本次预支款", $line = 118) : ($out += "本次付款", $line = 118), 
            $out += '</th> <th class="col-sm-1">备注</th> <th class="col-sm-1">对账时间</th> <th>对账人</th> <th style="min-width: 105px;">对账状态</th> </tr> </thead> <tbody class="T-checkList T-clearList" data-right="1200005"> </tbody> </table> </div> <div class="row pageMode" style="padding-top: 15px;"> <div class="col-xs-4"> <small class="T-sumItem">没有查询到相关记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary R-right T-saveClear" style="margin-left:20px" data-id=', 
            $line = 144, $out += $escape(id), $out += ' data-type="', $line = 144, $out += $escape(type), 
            $out += '" data-name="', $line = 144, $out += $escape(guideName), $out += '" data-right="1200003" ', 
            $line = 144, borrow && ($out += 'data-borrow="borrow"', $line = 144), $out += '> <i class="ace-icon fa fa-check-circle"></i> ', 
            $line = 145, borrow ? ($out += "确认预支", $line = 145) : ($out += "确认付款", $line = 145), 
            $out += " </button> </div> </form> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd">\r\n    <!-- <div class="clearfix border col-sm-12"> -->\r\n    <div>\r\n        <div class="T-search-area">\r\n            <form class="form-inline" role="form" onsubmit="return false">\r\n                <div class="form-group">\r\n                    <label>导游：</label>\r\n                    <input type="text" class="T-guideName" value="{{guideName}}" />\r\n                </div>\r\n                <div class="form-group input-daterange marginLeft-30">\r\n                    <label>账期：</label>\r\n                    <input type="text" class="form-control datepicker T-search-start-date" style="width:100px;" value="{{startDate}}">\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input type="text" class="form-control datepicker T-search-end-date" style="width:100px;" value="{{endDate}}">\r\n                </div>\r\n                <div class="form-group marginLeft-30">\r\n                    <label>团号：</label>\r\n                    <input type="text" class="form-control T-tripPlanNumber" style="width: 160px;" value="{{tripPlanNumber}}" maxlength="20">\r\n                </div>\r\n                <div class="form-group marginLeft-30">\r\n                    <label>线路产品：</label>\r\n                    <input type="text" class="form-control T-lineProductName" style="width: 200px;" data-id="{{lineProductId}}" value="{{lineProductName}}" maxlength="100">\r\n                </div>\r\n                <div class="form-group marginLeft-30">\r\n                    <button class="btn-sm search-btn T-btn-search">\r\n                        <i class="ace-icon fa fa-search"></i> 搜索\r\n                    </button>\r\n                </div>\r\n            </form>\r\n            <input name="accountStatus" value="{{accountStatus}}" type="hidden">\r\n        </div>\r\n        <form class="form-horizontal T-auto-fill-area" role="form" onsubmit="return false">\r\n            <div class="form-group col-sm-12">\r\n                <label class=" control-label">预支款合计：<span class="F-float F-money">{{sumData.sumGuideAllPreMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">账面应付合计：<span class="F-float F-money">{{sumData.sumZhangmiantuibu}}</span></label>\r\n                <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">{{sumData.sumSettlementMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">{{sumData.sumPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney-temp F-float F-money">{{sumData.sumUnPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">{{sumData.sumConfirmedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n\r\n        <div class="form-inline globalAdd T-summary" style="padding-top: 10px;">\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">{{if borrow}}本次预支款金额合计{{else}}本次付款金额合计{{/if}}：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="sumPayMoney" class="T-sumPayMoney money F-float F-money"  {{if isOuter}}disabled {{/if}}>\r\n                </label>\r\n            </div>\r\n\r\n            {{if !isOuter}} \r\n            <div class="form-group mar-r-10">\r\n                <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n            </div>\r\n            {{/if}}\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select class="form-control T-sumPayType" name="sumPayType">\r\n                    {{getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">现金账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="cash-number" class="money" style="width:300px;">\r\n                    <input type="hidden" name="cash-id">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" class="money" style="width:300px;">\r\n                    <input type="hidden" name="card-id">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date"  style="width:140px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="remark" class="T-remark" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover hct_align_middle w-1500">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>团号</th>\r\n                <th>线路</th>\r\n                <th>完团日期（账期）</th>\r\n                <th>预支款</th>\r\n                <th>现收</th>\r\n                <th>现付</th>\r\n                <th>导服费</th>\r\n                <th>管理费</th>\r\n                <th>购物导佣</th>\r\n                <th>自费导佣</th>\r\n                <th>导游收入</th>\r\n                <th>账面退补</th>\r\n                <th>结算金额</th>\r\n                <th>已付金额</th>\r\n                <th>未付金额</th>\r\n                <th>{{if borrow}}本次预支款{{else}}本次付款{{/if}}</th>\r\n                <th class="col-sm-1">备注</th>\r\n                <th class="col-sm-1">对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="min-width: 105px;">对账状态</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList T-clearList" data-right="1200005">            \r\n        </tbody>\r\n    </table>\r\n    </div>\r\n    <div class="row pageMode" style="padding-top: 15px;">\r\n        <div class="col-xs-4">\r\n            <small class="T-sumItem">没有查询到相关记录</small>\r\n        </div>\r\n        <div class="col-xs-8">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary R-right T-saveClear" style="margin-left:20px" data-id={{id}} data-type="{{type}}" data-name="{{guideName}}" data-right="1200003" {{if borrow}}data-borrow="borrow"{{/if}}>\r\n                <i class="ace-icon fa fa-check-circle"></i> {{if borrow}}确认预支{{else}}确认付款{{/if}}\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});