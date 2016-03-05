/*TMODJS:{"debug":true,"version":288,"md5":"7cb18f4d29107f79990eb82a76b8d244"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/guideChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, guideName = $data.guideName, startDate = $data.startDate, endDate = $data.endDate, tripPlanNumber = $data.tripPlanNumber, lineProductId = $data.lineProductId, lineProductName = $data.lineProductName, accountStatus = $data.accountStatus, sumData = $data.sumData, id = $data.id, type = $data.type, $out = "";
            return $out += '<div class="row check globalAdd">  <div> <div class="T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>导游：</label> <span class="T-guideName">', 
            $line = 8, $out += $escape(guideName), $out += '</span> </div> <div class="form-group input-daterange marginLeft-30"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" style="width:100px;" value="', 
            $line = 12, $out += $escape(startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" style="width:100px;" value="', 
            $line = 14, $out += $escape(endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <label>团号：</label> <input type="text" class="form-control T-tripPlanNumber" style="width: 160px;" value="', 
            $line = 18, $out += $escape(tripPlanNumber), $out += '" maxlength="20"> </div> <div class="form-group marginLeft-30"> <label>线路产品：</label> <input type="text" class="form-control T-lineProductName" style="width: 200px;" data-id="', 
            $line = 22, $out += $escape(lineProductId), $out += '" value="', $line = 22, $out += $escape(lineProductName), 
            $out += '" maxlength="100"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> </form> <input name="accountStatus" value="', 
            $line = 33, $out += $escape(accountStatus), $out += '" type="hidden"> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group col-sm-11"> <label class=" control-label pull-left">预支款合计：<span class="F-float F-money">', 
            $line = 37, $out += $escape(sumData.sumGuideAllPreMoney), $out += '</span></label> <label class=" control-label marginLeft-30">现收合计：<span class="F-float F-money">', 
            $line = 38, $out += $escape(sumData.sumGuideAllNowIncomeMoney), $out += '</span></label> <label class=" control-label marginLeft-30">现付合计：<span class="F-float F-money">', 
            $line = 39, $out += $escape(sumData.sumGuideAllNowPayMoney), $out += '</span></label> <label class=" control-label marginLeft-30">导服费合计：<span class="F-float F-money">', 
            $line = 40, $out += $escape(sumData.sumPrice), $out += '</span></label> <label class=" control-label marginLeft-30">管理费合计：<span class="F-float F-money">', 
            $line = 41, $out += $escape(sumData.sumManageFee), $out += '</span></label> <label class=" control-label marginLeft-30">购物导佣合计：<span class="F-float F-money">', 
            $line = 42, $out += $escape(sumData.sumShoppingRebateMoney), $out += '</span></label> <label class=" control-label marginLeft-30">自费导佣合计：<span class="F-float F-money">', 
            $line = 43, $out += $escape(sumData.sumSelfPayRebateMoney), $out += '</span></label> </div> <div class="form-group col-sm-11"> <label class=" control-label pull-left">导游收入合计：<span class="F-float F-money">', 
            $line = 46, $out += $escape(sumData.sumGuideIncomeMoney), $out += '</span></label> <label class=" control-label marginLeft-30">账面应付合计：<span class="F-float F-money">', 
            $line = 47, $out += $escape(sumData.sumZhangmiantuibu), $out += '</span></label> <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">', 
            $line = 48, $out += $escape(sumData.sumSettlementMoney), $out += '</span></label> <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 49, $out += $escape(sumData.sumPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">', 
            $line = 50, $out += $escape(sumData.sumUnPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">', 
            $line = 51, $out += $escape(sumData.sumConfirmedUnPayedMoney), $out += '</span></label> </div> </form> </div> <div class="overflow-x min-w-1050" style="margin-top: 30px"> <table class="table table-striped table-bordered table-hover hct_align_middle w-1500"> <thead> <tr> <th class="th-border">团号</th> <th class="th-border">线路</th> <th class="th-border">完团日期（账期）</th> <th class="th-border">预支款</th> <th class="th-border">现收</th> <th class="th-border">现付</th> <th class="th-border">导服费</th> <th class="th-border">管理费</th> <th class="th-border">购物导拥</th> <th class="th-border">自费导拥</th> <th class="th-border">导游收入</th> <th class="th-border">账面退补</th> <th class="th-border">结算金额</th> <th class="th-border">已付金额</th> <th class="th-border">未付金额</th> <th class="th-border col-sm-1">备注</th> <th class="th-border col-sm-1">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" style="min-width: 105px;">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1200005"> </tbody> </table> </div> <div class="clearfix"></div> <div class="row pageMode" style="padding-top: 15px;"> <div class="col-xs-4"> <small class="T-sumItem">没有查询到相关记录</small> </div> <div class="col-xs-8"> <label class="pos-rel pull-right" style="line-height: 2.2em;"> <input type="checkbox" class="ace T-checkAll"/> <span class="lbl">全选</span> </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary R-right T-saveClear" style="margin-left:20px" data-id=', 
            $line = 104, $out += $escape(id), $out += ' data-type="', $line = 104, $out += $escape(type), 
            $out += '" data-right="1200005|1200002"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check globalAdd">\r\n    <!-- <div class="clearfix border col-sm-12"> -->\r\n    <div>\r\n        <div class="T-search-area">\r\n            <form class="form-inline" role="form" onsubmit="return false">\r\n                <div class="form-group">\r\n                    <label>导游：</label>\r\n                    <span class="T-guideName">{{guideName}}</span>\r\n                </div>\r\n                <div class="form-group input-daterange marginLeft-30">\r\n                    <label>账期：</label>\r\n                    <input type="text" class="form-control datepicker T-search-start-date" style="width:100px;" value="{{startDate}}">\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input type="text" class="form-control datepicker T-search-end-date" style="width:100px;" value="{{endDate}}">\r\n                </div>\r\n                <div class="form-group marginLeft-30">\r\n                    <label>团号：</label>\r\n                    <input type="text" class="form-control T-tripPlanNumber" style="width: 160px;" value="{{tripPlanNumber}}" maxlength="20">\r\n                </div>\r\n                <div class="form-group marginLeft-30">\r\n                    <label>线路产品：</label>\r\n                    <input type="text" class="form-control T-lineProductName" style="width: 200px;" data-id="{{lineProductId}}" value="{{lineProductName}}" maxlength="100">\r\n                </div>\r\n                <div class="form-group marginLeft-30">\r\n                    <button class="btn-sm search-btn T-btn-search">\r\n                        <i class="ace-icon fa fa-search"></i> 搜索\r\n                    </button>\r\n                </div>\r\n                <div class="form-group marginLeft-30">\r\n                    <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n                </div>\r\n            </form>\r\n            <input name="accountStatus" value="{{accountStatus}}" type="hidden">\r\n        </div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group col-sm-11">\r\n                <label class=" control-label pull-left">预支款合计：<span class="F-float F-money">{{sumData.sumGuideAllPreMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">现收合计：<span class="F-float F-money">{{sumData.sumGuideAllNowIncomeMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">现付合计：<span class="F-float F-money">{{sumData.sumGuideAllNowPayMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">导服费合计：<span class="F-float F-money">{{sumData.sumPrice}}</span></label>\r\n                <label class=" control-label marginLeft-30">管理费合计：<span class="F-float F-money">{{sumData.sumManageFee}}</span></label>\r\n                <label class=" control-label marginLeft-30">购物导佣合计：<span class="F-float F-money">{{sumData.sumShoppingRebateMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">自费导佣合计：<span class="F-float F-money">{{sumData.sumSelfPayRebateMoney}}</span></label>\r\n            </div>\r\n            <div class="form-group col-sm-11">\r\n                <label class=" control-label pull-left">导游收入合计：<span class="F-float F-money">{{sumData.sumGuideIncomeMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">账面应付合计：<span class="F-float F-money">{{sumData.sumZhangmiantuibu}}</span></label>\r\n                <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">{{sumData.sumSettlementMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">{{sumData.sumPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">{{sumData.sumUnPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">{{sumData.sumConfirmedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="overflow-x min-w-1050" style="margin-top: 30px">\r\n    <table class="table table-striped table-bordered table-hover hct_align_middle w-1500">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">团号</th>\r\n                <th class="th-border">线路</th>\r\n                <th class="th-border">完团日期（账期）</th>\r\n                <th class="th-border">预支款</th>\r\n                <th class="th-border">现收</th>\r\n                <th class="th-border">现付</th>\r\n                <th class="th-border">导服费</th>\r\n                <th class="th-border">管理费</th>\r\n                <th class="th-border">购物导拥</th>\r\n                <th class="th-border">自费导拥</th>\r\n                <th class="th-border">导游收入</th>\r\n                <th class="th-border">账面退补</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border col-sm-1">备注</th>\r\n                <th class="th-border col-sm-1">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" style="min-width: 105px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList" data-right="1200005">            \r\n        </tbody>\r\n    </table>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode" style="padding-top: 15px;">\r\n        <div class="col-xs-4">\r\n            <small class="T-sumItem">没有查询到相关记录</small>\r\n        </div>\r\n        <div class="col-xs-8">\r\n            <label class="pos-rel pull-right" style="line-height: 2.2em;">\r\n                <input type="checkbox" class="ace T-checkAll"/> \r\n                <span class="lbl">全选</span>\r\n            </label>\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right">\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary R-right T-saveClear" style="margin-left:20px" data-id={{id}} data-type="{{type}}" data-right="1200005|1200002">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});