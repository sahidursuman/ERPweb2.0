/*TMODJS:{"debug":true,"version":44,"md5":"9347fbce9994652f96a267bfbd5b1d71"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/guidePaying", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, guideName = $data.guideName, startDate = $data.startDate, endDate = $data.endDate, tripPlanNumber = $data.tripPlanNumber, lineProductName = $data.lineProductName, sumData = $data.sumData, isOuter = $data.isOuter, id = $data.id, type = $data.type, $out = "";
            return $out += '<div class="row check globalAdd">  <div> <div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>导游：</label> <span class="T-guideName">', 
            $line = 8, $out += $escape(guideName), $out += '</span> </div> <div class="form-group input-daterange marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" style="width:100px;" value="', 
            $line = 12, $out += $escape(startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" style="width:100px;" value="', 
            $line = 14, $out += $escape(endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <label>团号：</label> <input type="text" class="form-control T-tripPlanNumber" style="width: 160px;" value="', 
            $line = 18, $out += $escape(tripPlanNumber), $out += '" maxlength="20"> </div> <div class="form-group marginLeft-30"> <label>线路产品：</label> <input type="text" class="form-control T-lineProductName" style="width: 200px;" value="', 
            $line = 22, $out += $escape(lineProductName), $out += '" maxlength="100"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <form class="form-horizontal T-auto-fill-area" role="form" onsubmit="return false"> <div class="form-group col-sm-12"> <label class=" control-label">账面应付合计：', 
            $line = 33, $out += $escape(sumData.sumZhangmiantuibu), $out += '</label> <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney">', 
            $line = 34, $out += $escape(sumData.sumSettlementMoney), $out += '</span></label> <label class=" control-label marginLeft-30">已付金额合计：', 
            $line = 35, $out += $escape(sumData.sumPayedMoney), $out += '</label> <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney-temp">', 
            $line = 36, $out += $escape(sumData.sumUnPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney">', 
            $line = 37, $out += $escape(sumData.sumConfirmedUnPayedMoney), $out += '</span></label> </div> <div class="form-group col-sm-12"> <label class=" control-label">本次付款金额合计：<input type="text" name="sumPayMoney" class="T-sumPayMoney money" ', 
            $line = 40, isOuter && ($out += ' disabled="disabled"', $line = 40), $out += '></label> <label class=" control-label marginLeft-30">付款方式： <select name="sumPayType" class="T-sumPayType"> <option value="0">现金</option> <option value="1">银行转账</option> <option value="2">网上支付</option> <option value="3">支票</option> <option value="4">其它</option> </select> </label> <label class=" control-label marginLeft-30">备注：<input type="text" name="remark" class="T-remark"></label> ', 
            $line = 51, isOuter || ($out += ' <button class="btn btn-xs btn-primary T-btn-autofill marginLeft-30"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> ', 
            $line = 55), $out += ' </div> </form> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover" style="margin-top: 30px"> <thead> <tr> <th class="th-border">团号</th> <th class="th-border">线路</th> <th class="th-border">完团日期（账期）</th> <th class="th-border">预支款</th> <th class="th-border">现收</th> <th class="th-border">现付</th> <th class="th-border">导服费</th> <th class="th-border">管理费</th> <th class="th-border">购物导拥</th> <th class="th-border">自费导拥</th> <th class="th-border">导游收入</th> <th class="th-border">账面退补</th> <th class="th-border">结算金额</th> <th class="th-border">已付金额</th> <th class="th-border">未付金额</th> <th class="th-border">本次付款</th> <th class="th-border col-sm-1">备注</th> <th class="th-border col-sm-1">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账状态</th> </tr> </thead> <tbody class="T-checkList T-clearList" data-right="1200005"> </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-4"> <small class="T-sumItem">没有查询到相关记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary R-right T-btn-save" style="margin-left:20px" data-id=', 
            $line = 104, $out += $escape(id), $out += ' data-type="', $line = 104, $out += $escape(type), 
            $out += '" data-name="', $line = 104, $out += $escape(guideName), $out += '" data-right="1200003"> <i class="ace-icon fa fa-check-circle"></i> 确认付款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd">\r\n    <!-- <div class="clearfix border col-sm-12"> -->\r\n    <div>\r\n        <div class="T-search-area">\r\n            <form class="form-inline" role="form" onsubmit="return false">\r\n                <div class="form-group">\r\n                    <label>导游：</label>\r\n                    <span class="T-guideName">{{guideName}}</span>\r\n                </div>\r\n                <div class="form-group input-daterange marginLeft-30">\r\n                    <label>账期：</label>\r\n                    <input type="text" class="form-control datepicker T-search-start-date" style="width:100px;" value="{{startDate}}">\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input type="text" class="form-control datepicker T-search-end-date" style="width:100px;" value="{{endDate}}">\r\n                </div>\r\n                <div class="form-group marginLeft-30">\r\n                    <label>团号：</label>\r\n                    <input type="text" class="form-control T-tripPlanNumber" style="width: 160px;" value="{{tripPlanNumber}}" maxlength="20">\r\n                </div>\r\n                <div class="form-group marginLeft-30">\r\n                    <label>线路产品：</label>\r\n                    <input type="text" class="form-control T-lineProductName" style="width: 200px;" value="{{lineProductName}}" maxlength="100">\r\n                </div>\r\n                <div class="form-group marginLeft-30">\r\n                    <button class="btn-sm search-btn T-btn-search">\r\n                        <i class="ace-icon fa fa-search"></i> 搜索\r\n                    </button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <form class="form-horizontal T-auto-fill-area" role="form" onsubmit="return false">\r\n            <div class="form-group col-sm-12">\r\n                <label class=" control-label">账面应付合计：{{sumData.sumZhangmiantuibu}}</label>\r\n                <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney">{{sumData.sumSettlementMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">已付金额合计：{{sumData.sumPayedMoney}}</label>\r\n                <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney-temp">{{sumData.sumUnPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney">{{sumData.sumConfirmedUnPayedMoney}}</span></label>\r\n            </div>\r\n            <div class="form-group col-sm-12">\r\n                <label class=" control-label">本次付款金额合计：<input type="text" name="sumPayMoney" class="T-sumPayMoney money" {{if isOuter}} disabled="disabled"{{/if}}></label>\r\n                <label class=" control-label marginLeft-30">付款方式：\r\n                    <select name="sumPayType" class="T-sumPayType">\r\n                        <option value="0">现金</option>\r\n                        <option value="1">银行转账</option>\r\n                        <option value="2">网上支付</option>\r\n                        <option value="3">支票</option>\r\n                        <option value="4">其它</option>\r\n                    </select>\r\n                </label>\r\n                <label class=" control-label marginLeft-30">备注：<input type="text" name="remark" class="T-remark"></label>\r\n                {{if !isOuter}}\r\n                <button class="btn btn-xs btn-primary T-btn-autofill marginLeft-30">\r\n                    <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                </button>\r\n                {{/if}}                \r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover" style="margin-top: 30px">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">团号</th>\r\n                <th class="th-border">线路</th>\r\n                <th class="th-border">完团日期（账期）</th>\r\n                <th class="th-border">预支款</th>\r\n                <th class="th-border">现收</th>\r\n                <th class="th-border">现付</th>\r\n                <th class="th-border">导服费</th>\r\n                <th class="th-border">管理费</th>\r\n                <th class="th-border">购物导拥</th>\r\n                <th class="th-border">自费导拥</th>\r\n                <th class="th-border">导游收入</th>\r\n                <th class="th-border">账面退补</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">本次付款</th>\r\n                <th class="th-border col-sm-1">备注</th>\r\n                <th class="th-border col-sm-1">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账状态</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList T-clearList" data-right="1200005">            \r\n        </tbody>\r\n    </table>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-4">\r\n            <small class="T-sumItem">没有查询到相关记录</small>\r\n        </div>\r\n        <div class="col-xs-8">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary R-right T-btn-save" style="margin-left:20px" data-id={{id}} data-type="{{type}}" data-name="{{guideName}}" data-right="1200003">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});