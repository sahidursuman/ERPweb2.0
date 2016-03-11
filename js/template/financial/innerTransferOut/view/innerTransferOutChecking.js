/*TMODJS:{"debug":true,"version":345,"md5":"50576e8bb3108b9355fb5b07b0cfb6fa"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, operateTransUserList = $data.operateTransUserList, sumData = ($data.operater, 
            $data.$index, $data.sumData), $out = "";
            return $out += '<div class="row innerTransferChecking globalAdd"> <div> <div class="T-search" > <form class="form-horizontal" role="form" onsubmit="return false"> <div > <label class="control-label pull-left mar-r-10">部门：</label> <span>', 
            $line = 7, $out += $escape(searchParam.toBusinessGroupName), $out += '</span> <input type="hidden" value="', 
            $line = 8, $out += $escape(searchParam.toBusinessGroupId), $out += '" name="toBusinessGroupId"> <input type="hidden" value="', 
            $line = 9, $out += $escape(searchParam.toBusinessGroupName), $out += '" name="toBusinessGroupName"> <label class="control-label mar-r-10">账期： <input type="text" style="width:100px;" class="date-picker" name="startDate" value="', 
            $line = 11, $out += $escape(searchParam.startDate), $out += '"/> <span>至</span> <input type="text" style="width:100px;" class="date-picker" name="endDate" value="', 
            $line = 13, $out += $escape(searchParam.endDate), $out += '"/> </label> </div> <div > <label class="control-label mar-r-10">线路名称： <input type="text" name="lineProductName" value="', 
            $line = 18, $out += $escape(searchParam.lineProductName), $out += '"/> <input type="hidden" name="lineProductId" value="', 
            $line = 19, $out += $escape(searchParam.lineProductId), $out += '" /> </label> <label class="control-label mar-r-10">收客单号： <input type="text" name="orderNumber" value="', 
            $line = 22, $out += $escape(searchParam.orderNumber), $out += '" /> </label> <label class="control-label mar-r-10">录入人： <select name="operater" style="margin-top:5px;"> <option value="">&nbsp;全部&nbsp;</option> ', 
            $line = 28, $each(operateTransUserList, function(operater) {
                $out += ' <option value=option"', $line = 29, $out += $escape(operater.id), $out += '" ', 
                $line = 29, searchParam.operateUserId == operater.id && ($out += 'selected="selected"', 
                $line = 29), $out += ">", $line = 29, $out += $escape(operater.realname), $out += "</option> ", 
                $line = 30;
            }), $out += ' </select> </label> <button class="mar-r-10 btn-sm search-btn T-checking-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn-sm search-btn T-btn-export mar-r-10">导出报表</button> </div> </form> <input name="accountStatus" value="', 
            $line = 40, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div> <label class=" control-label mar-r-20">总人数：<span class="F-float F-count">', 
            $line = 44, $out += $escape(sumData.sumTransCount), $out += '</span></label> <label class=" control-label mar-r-20">内转转出金额合计：<span class="F-float F-money">', 
            $line = 45, $out += $escape(sumData.sumTransNeedPayMoney), $out += '</span></label> <label class=" control-label mar-r-20">已付金额合计：<span class="F-float F-money">', 
            $line = 46, $out += $escape(sumData.sumPayedMoney), $out += '</span></label> <label class=" control-label mar-r-20">扣款金额合计：<span class="T-sumBackMoney F-float F-money">', 
            $line = 47, $out += $escape(sumData.sumPunishMoney), $out += '</span></label> <label class=" control-label mar-r-20">结算金额合计：<span class="T-sumSettlementMoney F-float F-money">', 
            $line = 48, $out += $escape(sumData.sumSettlementMoney), $out += '</span></label> <label class=" control-label">未付金额合计：<span class="T-sumUnReceivedMoney F-float F-money">', 
            $line = 49, $out += $escape(sumData.sumUnPayedMoney), $out += '</span></label> </div> </form> </div> <div class="overflow-x min-w-1050 mar-t-10"> <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>收客单号</th> <th>线路产品</th> <th>出游日期</th> <th>联系人</th> <th>人数</th> <th>操作人</th> <th>操作时间</th> <th>内转转出</th> <th>明细</th> <th>已付金额</th> <th>扣款金额</th> <th>结算金额</th> <th>未付金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="width:105px">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1370005"> </tbody> </table> </div> <div class="row pageMode" style="padding-top: 15px;"> <div class="col-xs-4"> <small>共计<span class="T-recordSize"></span>条记录</small> </div> <div class="col-xs-8"> <label class="pos-rel pull-right" style="line-height:2.2em"> <input type="checkbox" class="ace T-selectAll"/> <span class="lbl">全选</span> </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-createTripPlan T-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-checking"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row innerTransferChecking globalAdd">\r\n      <div>\r\n          <div class="T-search" >\r\n              <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div > \r\n                    <label  class="control-label pull-left mar-r-10">部门：</label>\r\n                    <span>{{searchParam.toBusinessGroupName}}</span>\r\n                    <input type="hidden" value="{{searchParam.toBusinessGroupId}}" name="toBusinessGroupId">\r\n                    <input type="hidden" value="{{searchParam.toBusinessGroupName}}" name="toBusinessGroupName"> \r\n                    <label class="control-label mar-r-10">账期：\r\n                      <input type="text" style="width:100px;" class="date-picker" name="startDate" value="{{searchParam.startDate}}"/>\r\n                      <span>至</span>\r\n                      <input type="text" style="width:100px;" class="date-picker" name="endDate" value="{{searchParam.endDate}}"/>\r\n                    </label>\r\n                </div>\r\n                <div > \r\n                    <label class="control-label mar-r-10">线路名称：\r\n                      <input type="text" name="lineProductName" value="{{searchParam.lineProductName}}"/>\r\n                      <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}" />\r\n                    </label>\r\n                    <label class="control-label mar-r-10">收客单号：\r\n                        <input type="text" name="orderNumber" value="{{searchParam.orderNumber}}" />\r\n                    </label>\r\n                    <label class="control-label mar-r-10">录入人：\r\n                      \r\n                        <select name="operater" style="margin-top:5px;">\r\n                        <option value="">&nbsp;全部&nbsp;</option>\r\n                        {{each operateTransUserList as operater}}\r\n                            <option value=option"{{operater.id}}" {{if searchParam.operateUserId == operater.id}}selected="selected"{{/if}}>{{operater.realname}}</option>\r\n                        {{/each}} \r\n                        </select>\r\n                    </label>\r\n                    <button class="mar-r-10 btn-sm search-btn T-checking-search" >\r\n                         <i class="ace-icon fa fa-search"></i>\r\n                             搜索\r\n                    </button>\r\n                    <button class="btn-sm search-btn T-btn-export mar-r-10">导出报表</button>\r\n                </div>\r\n              </form>\r\n            <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n          </div>\r\n          <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div>\r\n                <label class=" control-label mar-r-20">总人数：<span class="F-float F-count">{{sumData.sumTransCount}}</span></label>\r\n                <label class=" control-label mar-r-20">内转转出金额合计：<span class="F-float F-money">{{sumData.sumTransNeedPayMoney}}</span></label>\r\n                <label class=" control-label mar-r-20">已付金额合计：<span class="F-float F-money">{{sumData.sumPayedMoney}}</span></label>\r\n                <label class=" control-label mar-r-20">扣款金额合计：<span class="T-sumBackMoney F-float F-money">{{sumData.sumPunishMoney}}</span></label>\r\n                <label class=" control-label mar-r-20">结算金额合计：<span class="T-sumSettlementMoney F-float F-money">{{sumData.sumSettlementMoney}}</span></label>\r\n                <label class=" control-label">未付金额合计：<span class="T-sumUnReceivedMoney F-float F-money">{{sumData.sumUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n      </div>\r\n\r\n    <div class="overflow-x min-w-1050 mar-t-10">\r\n        <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500">\r\n            <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n             <th>收客单号</th>\r\n             <th>线路产品</th>\r\n             <th>出游日期</th>\r\n             <th>联系人</th>\r\n             <th>人数</th>\r\n             <th>操作人</th>\r\n             <th>操作时间</th>\r\n             <th>内转转出</th>\r\n             <th>明细</th>\r\n             <th>已付金额</th>\r\n             <th>扣款金额</th>\r\n             <th>结算金额</th>\r\n             <th>未付金额</th>\r\n             <th>备注</th>\r\n             <th>对账时间</th>\r\n             <th>对账人</th>\r\n             <th style="width:105px">对账</th>  \r\n            </tr>\r\n            </thead>   \r\n            <tbody class="T-checkList" data-right="1370005">\r\n            </tbody>\r\n        </table>\r\n      </div>\r\n        <div class="row pageMode" style="padding-top: 15px;">\r\n            <div class="col-xs-4">\r\n                <small>共计<span class="T-recordSize"></span>条记录</small>\r\n            </div>\r\n            <div class="col-xs-8">\r\n                <label class="pos-rel pull-right" style="line-height:2.2em">\r\n                    <input type="checkbox" class="ace T-selectAll"/> \r\n                    <span class="lbl">全选</span>\r\n                </label>\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right">\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary btn-createTripPlan T-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary T-checking">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                     确认对账\r\n                </button>\r\n            </div>\r\n        </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});