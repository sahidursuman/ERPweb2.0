/*TMODJS:{"debug":true,"version":282,"md5":"cfdcc7af65acacda1b0e826b4be1443d"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, operateTransUserList = $data.operateTransUserList, sumData = ($data.operater, 
            $data.$index, $data.sumData), showBtnFlag = $data.showBtnFlag, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, $out = "";
            return $out += '<div class="row innerTransferChecking globalAdd"> <div> <div class="T-search"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class="control-label pull-left" style="margin:8px 0px 0px 20px;">部门：</label> <span>', 
            $line = 7, $out += $escape(searchParam.toBusinessGroupName), $out += '</span> <input type="hidden" value="', 
            $line = 8, $out += $escape(searchParam.toBusinessGroupId), $out += '" name="toBusinessGroupId"> <input type="hidden" value="', 
            $line = 9, $out += $escape(searchParam.toBusinessGroupName), $out += '" name="toBusinessGroupName"> <label class="control-label" style="margin-left:30px;">账期： <input type="text" style="width:100px;" class="date-picker" name="startDate" value="', 
            $line = 11, $out += $escape(searchParam.startDate), $out += '" /> <span>&nbsp;至&nbsp;</span> <input type="text" style="width:100px;" class="date-picker" name="endDate" value="', 
            $line = 13, $out += $escape(searchParam.endDate), $out += '" /> </label> <label class="control-label" style="margin-left:30px;">线路名称： <input type="text" name="lineProductName" value="', 
            $line = 16, $out += $escape(searchParam.lineProductName), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 17, $out += $escape(searchParam.lineProductId), $out += '" /> </label> <label class="control-label" style="margin-left:30px;">收客单号： <input type="text" name="orderNumber" value="', 
            $line = 20, $out += $escape(searchParam.orderNumber), $out += '" /> </label> <label class="control-label" style="margin-left:30px;">录入人： <select name="operater" style="margin-top:5px;"> <option value="">全部</option> ', 
            $line = 25, $each(operateTransUserList, function(operater) {
                $out += ' <option value="', $line = 26, $out += $escape(operater.id), $out += '" ', 
                $line = 26, searchParam.operateUserId == operater.id && ($out += 'selected="selected" ', 
                $line = 26), $out += ">", $line = 26, $out += $escape(operater.realname), $out += "</option> ", 
                $line = 27;
            }), $out += ' </select> </label> <button class="marginLeft-30 btn-sm search-btn T-checking-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button>  </div> </form> </div> <form class="form-horizontal T-count" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left" style="margin-left: 20px">总人数：<span class="F-float F-count">', 
            $line = 42, $out += $escape(sumData.sumTransCount), $out += '</span></label> <label class=" control-label " style="margin-left:30px;">内转转出金额合计：<span class="F-float F-money">', 
            $line = 43, $out += $escape(sumData.sumTransNeedPayMoney), $out += '</span></label> <label class=" control-label " style="margin-left:30px;">已付金额合计：<span class="F-float F-money">', 
            $line = 44, $out += $escape(sumData.sumPayedMoney), $out += '</span></label> <label class=" control-label " style="margin-left:30px;">扣款金额合计：<span class="F-float F-money">', 
            $line = 45, $out += $escape(sumData.sumPunishMoney), $out += '</span></label> <label class=" control-label " style="margin-left:30px;">结算金额合计：<span class="F-float F-money">', 
            $line = 46, $out += $escape(sumData.sumSettlementMoney), $out += '</span></label> <label class=" control-label " style="margin-left:30px;">未付金额合计：<span class="F-float F-money">', 
            $line = 47, $out += $escape(sumData.sumUnPayedMoney), $out += '</span></label> <label class=" control-label " style="margin-left:30px;">未付金额合计(已对账)：<span class="sumUnPayedMoney F-float F-money">', 
            $line = 48, $out += $escape(sumData.sumConfirmedUnPayedMoney), $out += '</span></label> </div> </form> <div class="form-inline globalAdd T-summary" style="margin-left:5px"> <div class="form-group"> <label class="control-label">本次付款金额：', 
            $line = 53, showBtnFlag && ($out += "1111", $line = 53), $out += '</label> <label class="control-label"> <input type="text" class="F-float F-money" name="sumPayMoney" ', 
            $line = 55, 1 == showBtnFlag && ($out += 'readonly="true" ', $line = 55), $out += "/> </label> </div> ", 
            $line = 58, showBtnFlag || ($out += ' <div class="form-group mar-l-10"> <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 62), $out += ' <div class="form-group mar-l-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="payType"> ', 
            $line = 66, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-l-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" class="money" style="width:300px;"> <input type="hidden" name="cash-id"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" style="width:300px;"> <input type="hidden" name="card-id"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" style="width:140px;"> </label> </div> </div> <div class="form-group" style="margin-left:5px"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" name="sumRemark" style="width:900px;"> </label> </div> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500"> <thead> <tr> <th class="th-border">收客单号</th> <th class="th-border">线路产品</th> <th class="th-border">出游日期</th> <th class="th-border">联系人</th> <th class="th-border">人数</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> <th class="th-border">内转转出</th> <th class="th-border">明细</th> <th class="th-border">已付金额</th> <th class="th-border">返款金额</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" style="width:100px">对账</th> </tr> </thead> <tbody class="T-clearList" data-right="1370005"> </tbody> </table> </div> <div class="clearfix"></div> <div class="row pageMode" style="padding-top: 15px;"> <div class="col-xs-6"> <small>共计<span class="T-recordSize"></span>条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-createTripPlan T-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-payMoney"> <i class="ace-icon fa fa-check-circle"></i> 确认付款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row innerTransferChecking globalAdd">\r\n    <div>\r\n        <div class="T-search">\r\n            <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="form-group ">\r\n                    <label class="control-label pull-left" style="margin:8px 0px 0px 20px;">部门：</label>\r\n                    <span>{{searchParam.toBusinessGroupName}}</span>\r\n                    <input type="hidden" value="{{searchParam.toBusinessGroupId}}" name="toBusinessGroupId">\r\n                    <input type="hidden" value="{{searchParam.toBusinessGroupName}}" name="toBusinessGroupName">\r\n                    <label class="control-label" style="margin-left:30px;">账期：\r\n                        <input type="text" style="width:100px;" class="date-picker" name="startDate" value="{{searchParam.startDate}}" />\r\n                        <span>&nbsp;至&nbsp;</span>\r\n                        <input type="text" style="width:100px;" class="date-picker" name="endDate" value="{{searchParam.endDate}}" />\r\n                    </label>\r\n                    <label class="control-label" style="margin-left:30px;">线路名称：\r\n                        <input type="text" name="lineProductName" value="{{searchParam.lineProductName}}" />\r\n                        <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}" />\r\n                    </label>\r\n                    <label class="control-label" style="margin-left:30px;">收客单号：\r\n                        <input type="text" name="orderNumber" value="{{searchParam.orderNumber}}" />\r\n                    </label>\r\n                    <label class="control-label" style="margin-left:30px;">录入人：\r\n                        <select name="operater" style="margin-top:5px;">\r\n                            <option value="">全部</option>\r\n                            {{each operateTransUserList as operater}}\r\n                            <option value="{{operater.id}}" {{if searchParam.operateUserId==operater.id}}selected="selected" {{/if}}>{{operater.realname}}</option>\r\n                            {{/each}}\r\n                        </select>\r\n                    </label>\r\n                    <button class="marginLeft-30 btn-sm search-btn T-checking-search">\r\n                        <i class="ace-icon fa fa-search"></i> 搜索\r\n                    </button>\r\n                    <!-- <button type="button" class="btn btn-sm marginLeft-30 btn-primary btn-success btn-transferExport">\r\n                        <span>导出报表</span>\r\n                        <i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n                    </button> -->\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <form class="form-horizontal T-count" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class=" control-label pull-left" style="margin-left: 20px">总人数：<span class="F-float F-count">{{sumData.sumTransCount}}</span></label>\r\n                <label class=" control-label " style="margin-left:30px;">内转转出金额合计：<span class="F-float F-money">{{sumData.sumTransNeedPayMoney}}</span></label>\r\n                <label class=" control-label " style="margin-left:30px;">已付金额合计：<span class="F-float F-money">{{sumData.sumPayedMoney}}</span></label>\r\n                <label class=" control-label " style="margin-left:30px;">扣款金额合计：<span class="F-float F-money">{{sumData.sumPunishMoney}}</span></label>\r\n                <label class=" control-label " style="margin-left:30px;">结算金额合计：<span class="F-float F-money">{{sumData.sumSettlementMoney}}</span></label>\r\n                <label class=" control-label " style="margin-left:30px;">未付金额合计：<span class="F-float F-money">{{sumData.sumUnPayedMoney}}</span></label>\r\n                <label class=" control-label " style="margin-left:30px;">未付金额合计(已对账)：<span class="sumUnPayedMoney F-float F-money">{{sumData.sumConfirmedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n        <div class="form-inline globalAdd T-summary" style="margin-left:5px">\r\n            <div class="form-group">\r\n                <label class="control-label">本次付款金额：{{if showBtnFlag}}1111{{/if}}</label>\r\n                <label class="control-label">\r\n                    <input type="text" class="F-float F-money" name="sumPayMoney" {{if showBtnFlag==true}}readonly="true" {{/if}}/>\r\n                </label>\r\n            </div>\r\n            {{if !showBtnFlag}}\r\n            <div class="form-group mar-l-10">\r\n                <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n            </div>\r\n            {{/if}}\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select class="form-control T-sumPayType" name="payType">\r\n                    {{getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">现金账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="cash-number" class="money" style="width:300px;">\r\n                    <input type="hidden" name="cash-id">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" class="money" style="width:300px;">\r\n                    <input type="hidden" name="card-id">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date"  style="width:140px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class="form-group" style="margin-left:5px">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="sumRemark" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class="overflow-x min-w-1050">\r\n    <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">收客单号</th>\r\n                <th class="th-border">线路产品</th>\r\n                <th class="th-border">出游日期</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">人数</th>\r\n                <th class="th-border">操作人</th>\r\n                <th class="th-border">操作时间</th>\r\n                <th class="th-border">内转转出</th>\r\n                <th class="th-border">明细</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">返款金额</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" style="width:100px">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList" data-right="1370005">\r\n        </tbody>\r\n    </table>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode" style="padding-top: 15px;">\r\n        <div class="col-xs-6">\r\n            <small>共计<span class="T-recordSize"></span>条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary btn-createTripPlan T-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-payMoney">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});