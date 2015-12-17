/*TMODJS:{"debug":true,"version":191,"md5":"a1301822f5ee47bc95d9f49a787a7d2e"}*/
define(function(require) {
    return require("../../../../../template")("js/template/financial/innerTransferOut/view/innerTransferClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, operateTransUserList = $data.operateTransUserList, sumData = ($data.operater, 
            $data.$index, $data.sumData), showBtnFlag = $data.showBtnFlag, $out = "";
            return $out += '<div class="row innerTransferChecking globalAdd"> <div> <div class="T-search" > <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class="control-label pull-left" style="margin:8px 0px 0px 20px;">部门:</label> <span>', 
            $line = 7, $out += $escape(searchParam.toBusinessGroupName), $out += '</span> <input type="hidden" value="', 
            $line = 8, $out += $escape(searchParam.toBusinessGroupId), $out += '" name="toBusinessGroupId"> <input type="hidden" value="', 
            $line = 9, $out += $escape(searchParam.toBusinessGroupName), $out += '" name="toBusinessGroupName"> <label class="control-label" style="margin-left:30px;">账期： <input type="text" style="width:100px;" class="date-picker" name="startDate" value="', 
            $line = 11, $out += $escape(searchParam.startDate), $out += '"/> <span>&nbsp;至&nbsp;</span> <input type="text" style="width:100px;" class="date-picker" name="endDate" value="', 
            $line = 13, $out += $escape(searchParam.endDate), $out += '"/> </label> <label class="control-label" style="margin-left:30px;">线路名称： <input type="text" name="lineProductName" value="', 
            $line = 16, $out += $escape(searchParam.lineProductName), $out += '"/> <input type="hidden" name="lineProductId" value="', 
            $line = 17, $out += $escape(searchParam.lineProductId), $out += '" /> </label> <label class="control-label" style="margin-left:30px;">录入人： <select name="operater" style="margin-top:5px;"> <option value="">全部</option> ', 
            $line = 23, $each(operateTransUserList, function(operater) {
                $out += ' <option value="', $line = 24, $out += $escape(operater.id), $out += '" ', 
                $line = 24, searchParam.operateUserId == operater.id && ($out += 'selected="selected"', 
                $line = 24), $out += ">", $line = 24, $out += $escape(operater.realname), $out += "</option> ", 
                $line = 25;
            }), $out += ' </select> </label> <button class="marginLeft-30 btn-sm search-btn T-checking-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button>  </div> </form> </div> <form class="form-horizontal T-count" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left" style="margin-left: 20px">总人数：', 
            $line = 42, $out += $escape(sumData.sumTransCount), $out += '<label> <label class=" control-label " style="margin-left:30px;">内转转出金额合计：', 
            $line = 43, $out += $escape(sumData.sumTransNeedPayMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">已付金额合计：', 
            $line = 44, $out += $escape(sumData.sumPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">扣款金额合计：', 
            $line = 45, $out += $escape(sumData.sumPunishMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">结算接合计：', 
            $line = 46, $out += $escape(sumData.sumSettlementMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">未付金额合计(已对账)：<span class="sumUnPayedMoney">', 
            $line = 47, $out += $escape(sumData.sumUnPayedMoney), $out += '</span></label> </div> <div class="form-group"> <label class=" control-label " style="margin-left:20px;">本次付款金额：<input type="text" name="sumPayMoney" ', 
            $line = 51, 1 == showBtnFlag && ($out += 'readonly="true"', $line = 51), $out += '/></label> <label class=" control-label " style="margin-left:30px;">付款方式： <select name="sumPayType"> <option value="0">现金</option> <option value="1">银行转账</option> <option value="2">网上支付</option> <option value="3">支票</option> <option value="4">其他</option> </select> </label> <label class=" control-label " style="margin-left:30px;">备注：<input type="text" name="sumRemark"/></label> ', 
            $line = 62, showBtnFlag || ($out += ' <label class=" control-label " style="margin-left:30px;"> <button class="btn btn-xs btn-primary T-btn-autofill marginLeft-30"> <i class="ace-icon fa fa-check-circle"></i>自动下账 </button> </label> ', 
            $line = 68), $out += ' </div> </div> </form> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr> <th class="th-border">线路产品</th> <th class="th-border">出游日期</th> <th class="th-border">联系人</th> <th class="th-border">人数</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> <th class="th-border">内转转出</th> <th class="th-border">明细</th> <th class="th-border">已付金额</th> <th class="th-border">返款金额</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr class="th-border"> </thead> <tbody class="T-clearList" data-right="1370005"> </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计<span class="T-recordSize"></span>条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-createTripPlan T-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-payMoney"> <i class="ace-icon fa fa-check-circle"></i> 确认付款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row innerTransferChecking globalAdd">\r\n    <div>\r\n        <div class="T-search" >\r\n              <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="form-group "> \r\n                    <label  class="control-label pull-left" style="margin:8px 0px 0px 20px;">部门:</label>\r\n                    <span>{{searchParam.toBusinessGroupName}}</span>\r\n                    <input type="hidden" value="{{searchParam.toBusinessGroupId}}" name="toBusinessGroupId">\r\n                    <input type="hidden" value="{{searchParam.toBusinessGroupName}}" name="toBusinessGroupName"> \r\n                    <label class="control-label" style="margin-left:30px;">账期：\r\n                      <input type="text" style="width:100px;" class="date-picker" name="startDate" value="{{searchParam.startDate}}"/>\r\n                      <span>&nbsp;至&nbsp;</span>\r\n                      <input type="text" style="width:100px;" class="date-picker" name="endDate" value="{{searchParam.endDate}}"/>\r\n                    </label>\r\n                    <label class="control-label" style="margin-left:30px;">线路名称：\r\n                      <input type="text" name="lineProductName" value="{{searchParam.lineProductName}}"/>\r\n                      <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}" />\r\n                    </label>\r\n                    <label class="control-label" style="margin-left:30px;">录入人：\r\n                      \r\n                        <select name="operater" style="margin-top:5px;">\r\n                        <option value="">全部</option>\r\n                        {{each operateTransUserList as operater}}\r\n                            <option value="{{operater.id}}" {{if searchParam.operateUserId == operater.id}}selected="selected"{{/if}}>{{operater.realname}}</option>\r\n                        {{/each}} \r\n                        </select>\r\n                      \r\n                    </label>\r\n                    <button class="marginLeft-30 btn-sm search-btn T-checking-search" >\r\n                         <i class="ace-icon fa fa-search"></i>\r\n                             搜索\r\n                    </button>\r\n                    <!-- <button type="button" class="btn btn-sm marginLeft-30 btn-primary btn-success btn-transferExport">\r\n                        <span>导出报表</span>\r\n                        <i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n                    </button> -->\r\n                </div>\r\n              </form>\r\n          </div>\r\n          <form class="form-horizontal T-count" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class=" control-label pull-left" style="margin-left: 20px">总人数：{{sumData.sumTransCount}}<label>\r\n                <label class=" control-label " style="margin-left:30px;">内转转出金额合计：{{sumData.sumTransNeedPayMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">已付金额合计：{{sumData.sumPayedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">扣款金额合计：{{sumData.sumPunishMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">结算接合计：{{sumData.sumSettlementMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">未付金额合计(已对账)：<span class="sumUnPayedMoney">{{sumData.sumUnPayedMoney}}</span></label>\r\n            </div>\r\n            <div class="form-group">\r\n              <label class=" control-label " style="margin-left:20px;">本次付款金额：<input type="text" name="sumPayMoney" \r\n              {{if showBtnFlag == true}}readonly="true"{{/if}}/></label>\r\n              <label class=" control-label " style="margin-left:30px;">付款方式：\r\n                  <select name="sumPayType">\r\n                      <option value="0">现金</option>\r\n                      <option value="1">银行转账</option>\r\n                      <option value="2">网上支付</option>\r\n                      <option value="3">支票</option>\r\n                      <option value="4">其他</option>\r\n                  </select>\r\n              </label>\r\n              <label class=" control-label " style="margin-left:30px;">备注：<input type="text" name="sumRemark"/></label>\r\n              {{if !showBtnFlag}}\r\n                <label class=" control-label " style="margin-left:30px;">\r\n                    <button class="btn btn-xs btn-primary T-btn-autofill marginLeft-30">\r\n                      <i class="ace-icon fa fa-check-circle"></i>自动下账\r\n                    </button>\r\n                </label>\r\n              {{/if}}\r\n            </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n        <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n            <thead>\r\n            <tr>\r\n             <th class="th-border">线路产品</th>\r\n             <th class="th-border">出游日期</th>\r\n             <th class="th-border">联系人</th>\r\n             <th class="th-border">人数</th>\r\n             <th class="th-border">操作人</th>\r\n             <th class="th-border">操作时间</th>\r\n             <th class="th-border">内转转出</th>\r\n             <th class="th-border">明细</th>\r\n             <th class="th-border">已付金额</th>\r\n             <th class="th-border">返款金额</th>\r\n             <th class="th-border">结算金额</th>\r\n             <th class="th-border">未付金额</th>\r\n             <th class="th-border">本次付款金额</th>\r\n             <th class="th-border">备注</th>\r\n             <th class="th-border">对账时间</th>\r\n             <th class="th-border">对账人</th>\r\n             <th class="th-border">对账</th>  \r\n            </tr class="th-border">\r\n            </thead>   \r\n            <tbody class="T-clearList" data-right="1370005">\r\n            \r\n            </tbody>\r\n        </table>\r\n        <div class="clearfix"></div>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计<span class="T-recordSize"></span>条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary btn-createTripPlan T-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary T-payMoney">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                     确认付款\r\n                </button>\r\n            </div>\r\n        </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});