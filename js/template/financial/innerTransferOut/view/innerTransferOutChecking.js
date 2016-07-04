/*TMODJS:{"debug":true,"version":399,"md5":"05f3721b0c1e45c57d51130063635db4"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, operateTransUserList = $data.operateTransUserList, sumData = ($data.operater, 
            $data.$index, $data.sumData), $out = "";
            return $out += '<div class="innerTransferChecking globalAdd"> <div> <div class="T-search" > <label class="control-label">部门：</label> <input type="text" class="mar-r-10" name="toBusinessGroupName" value="', 
            $line = 5, $out += $escape(searchParam.toBusinessGroupName), $out += '" /> <label class="control-label">账期： <input type="text" style="width:100px;" class="date-picker" name="startDate" value="', 
            $line = 7, $out += $escape(searchParam.startDate), $out += '"/> <span>至</span> <input type="text" style="width:100px;" class="date-picker mar-r-10" name="endDate" value="', 
            $line = 9, $out += $escape(searchParam.endDate), $out += '"/> </label> <label class="control-label mar-r-10">线路名称： <input type="text" name="lineProductName" value="', 
            $line = 13, $out += $escape(searchParam.lineProductName), $out += '"/> <input type="hidden" name="lineProductId" value="', 
            $line = 14, $out += $escape(searchParam.lineProductId), $out += '" /> </label> <label class="control-label mar-r-10">收客单号： <input type="text" name="orderNumber" value="', 
            $line = 17, $out += $escape(searchParam.orderNumber), $out += '" /> </label> <label class="control-label mar-r-10">录入人： <select name="operater" style="margin-top:5px;"> <option value="">&nbsp;全部&nbsp;</option> ', 
            $line = 22, $each(operateTransUserList, function(operater) {
                $out += ' <option value="', $line = 23, $out += $escape(operater.id), $out += '" ', 
                $line = 23, searchParam.operateUserId == operater.id && ($out += 'selected="selected"', 
                $line = 23), $out += ">", $line = 23, $out += $escape(operater.realname), $out += "</option> ", 
                $line = 24;
            }), $out += ' </select> </label> <label class="control-label mar-r-10">游客： <input type="text" name="contactInfo" value="', 
            $line = 28, $out += $escape(searchParam.contactInfo), $out += '" placeholder="联系人或联系电话" /> </label> <label>对账状态：</label> <div class="btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 32, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 34, 0 === searchParam.isConfirmAccount ? ($out += " 未对账 ", $line = 36) : 1 === searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 38) : ($out += " 全部 ", $line = 40), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <button class="mar-r-10 btn-sm search-btn T-checking-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn-sm search-btn T-btn-export">导出报表</button> <input name="accountStatus" value="', 
            $line = 55, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div> <label class=" control-label mar-r-20">总人数：<span class="F-float F-count">', 
            $line = 59, $out += $escape(sumData.sumAdultCount || 0), $out += "大", $line = 59, 
            $out += $escape(sumData.sumChildCount || 0), $out += '小</span></label> <label class=" control-label mar-r-20">内转转出金额合计：<span class="F-float F-money">', 
            $line = 60, $out += $escape(sumData.sumTransNeedPayMoney), $out += '</span></label> <label class=" control-label mar-r-20">已付金额合计：<span class="F-float F-money">', 
            $line = 61, $out += $escape(sumData.sumPayedMoney), $out += '</span></label> <label class=" control-label mar-r-20">扣款金额合计：<span class="T-sumBackMoney F-float F-money">', 
            $line = 62, $out += $escape(sumData.sumPunishMoney), $out += '</span></label> <label class=" control-label mar-r-20">结算金额合计：<span class="T-sumSettlementMoney F-float F-money">', 
            $line = 63, $out += $escape(sumData.sumSettlementMoney), $out += '</span></label> <label class=" control-label">未付金额合计：<span class="T-sumUnReceivedMoney F-float F-money">', 
            $line = 64, $out += $escape(sumData.sumUnPayedMoney), $out += '</span></label> </div> </form> </div> <div class="overflow-x min-w-1050 mar-t-10"> <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>收客单号</th> <th>线路产品</th> <th>出游日期</th> <th>联系人</th> <th>人数</th> <th>操作人</th> <th>操作时间</th> <th>内转转出</th> <th>明细</th> <th>已付金额</th> <th>扣款金额</th> <th>结算金额</th> <th>未付金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="width:105px">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1370001|1370005"> </tbody> </table> </div> <div class="row pageMode" style="padding-top: 15px;"> <div class="col-xs-4"> <small>共计<span class="T-recordSize"></span>条记录</small> </div> <div class="col-xs-8"> <label class="pos-rel pull-right" style="line-height:2.2em"> <input type="checkbox" class="ace T-selectAll"/> <span class="lbl">全选</span> </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-checking"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="innerTransferChecking globalAdd">\r\n      <div>\r\n          <div class="T-search" >\r\n              <label  class="control-label">部门：</label>\r\n              <input type="text" class="mar-r-10" name="toBusinessGroupName" value="{{searchParam.toBusinessGroupName}}" />\r\n              <label class="control-label">账期：\r\n                <input type="text" style="width:100px;" class="date-picker" name="startDate" value="{{searchParam.startDate}}"/>\r\n                <span>至</span>\r\n                <input type="text" style="width:100px;" class="date-picker mar-r-10" name="endDate" value="{{searchParam.endDate}}"/>\r\n              </label>\r\n          \r\n              <label class="control-label mar-r-10">线路名称：\r\n                <input type="text" name="lineProductName" value="{{searchParam.lineProductName}}"/>\r\n                <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}" />\r\n              </label>\r\n              <label class="control-label mar-r-10">收客单号：\r\n                  <input type="text" name="orderNumber" value="{{searchParam.orderNumber}}" />\r\n              </label>\r\n              <label class="control-label mar-r-10">录入人：\r\n                  <select name="operater" style="margin-top:5px;">\r\n                  <option value="">&nbsp;全部&nbsp;</option>\r\n                  {{each operateTransUserList as operater}}\r\n                      <option value="{{operater.id}}" {{if searchParam.operateUserId == operater.id}}selected="selected"{{/if}}>{{operater.realname}}</option>\r\n                  {{/each}} \r\n                  </select>\r\n              </label>\r\n              <label class="control-label mar-r-10">游客：\r\n                  <input type="text" name="contactInfo" value="{{searchParam.contactInfo}}" placeholder="联系人或联系电话" />\r\n              </label>\r\n              <label>对账状态：</label>\r\n              <div class="btn-group T-check-status mar-r-10">\r\n                  <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                      <span>\r\n                          {{if searchParam.isConfirmAccount === 0}}\r\n                              未对账\r\n                          {{else if searchParam.isConfirmAccount === 1}}\r\n                              已对账\r\n                          {{else}}\r\n                              全部\r\n                          {{/if}}\r\n                      </span>\r\n                      <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                  </button>\r\n                  <ul class="dropdown-menu">\r\n                      <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                      <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                      <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n                  </ul>\r\n              </div>\r\n              <button class="mar-r-10 btn-sm search-btn T-checking-search" >\r\n                   <i class="ace-icon fa fa-search"></i>\r\n                       搜索\r\n              </button>\r\n              <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n            <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n          </div>\r\n          <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div>\r\n                <label class=" control-label mar-r-20">总人数：<span class="F-float F-count">{{sumData.sumAdultCount || 0}}大{{sumData.sumChildCount || 0}}小</span></label>\r\n                <label class=" control-label mar-r-20">内转转出金额合计：<span class="F-float F-money">{{sumData.sumTransNeedPayMoney}}</span></label>\r\n                <label class=" control-label mar-r-20">已付金额合计：<span class="F-float F-money">{{sumData.sumPayedMoney}}</span></label>\r\n                <label class=" control-label mar-r-20">扣款金额合计：<span class="T-sumBackMoney F-float F-money">{{sumData.sumPunishMoney}}</span></label>\r\n                <label class=" control-label mar-r-20">结算金额合计：<span class="T-sumSettlementMoney F-float F-money">{{sumData.sumSettlementMoney}}</span></label>\r\n                <label class=" control-label">未付金额合计：<span class="T-sumUnReceivedMoney F-float F-money">{{sumData.sumUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n      </div>\r\n\r\n    <div class="overflow-x min-w-1050 mar-t-10">\r\n        <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500">\r\n            <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n             <th>收客单号</th>\r\n             <th>线路产品</th>\r\n             <th>出游日期</th>\r\n             <th>联系人</th>\r\n             <th>人数</th>\r\n             <th>操作人</th>\r\n             <th>操作时间</th>\r\n             <th>内转转出</th>\r\n             <th>明细</th>\r\n             <th>已付金额</th>\r\n             <th>扣款金额</th>\r\n             <th>结算金额</th>\r\n             <th>未付金额</th>\r\n             <th>备注</th>\r\n             <th>对账时间</th>\r\n             <th>对账人</th>\r\n             <th style="width:105px">对账</th>  \r\n            </tr>\r\n            </thead>   \r\n            <tbody class="T-checkList" data-right="1370001|1370005">\r\n            </tbody>\r\n        </table>\r\n      </div>\r\n        <div class="row pageMode" style="padding-top: 15px;">\r\n            <div class="col-xs-4">\r\n                <small>共计<span class="T-recordSize"></span>条记录</small>\r\n            </div>\r\n            <div class="col-xs-8">\r\n                <label class="pos-rel pull-right" style="line-height:2.2em">\r\n                    <input type="checkbox" class="ace T-selectAll"/> \r\n                    <span class="lbl">全选</span>\r\n                </label>\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right">\r\n                </div>\r\n                \r\n            </div>\r\n        </div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary T-btn-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary T-checking">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                     确认对账\r\n                </button>\r\n            </div>\r\n        </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});