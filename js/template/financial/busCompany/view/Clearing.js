/*TMODJS:{"debug":true,"version":292,"md5":"b4ef8045fed9eaaa69b31c3a7e1537e8"}*/
define(function(require) {
    return require("../../../template")("financial/busCompany/view/Clearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, busCompanyName = $data.busCompanyName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, sumPayMoney = $data.sumPayMoney, sumPayType = $data.sumPayType, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, financialBusCompanyListData = $data.financialBusCompanyListData, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="col-sm-12 T-newData" data-id="', $line = 1, $out += $escape(searchParam.busCompanyId), 
            $out += '" data-name="', $line = 1, $out += $escape(busCompanyName), $out += '"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label>车队：', 
            $line = 5, $out += $escape(busCompanyName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 7, $out += $escape(searchParam.startTime), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.endTime), $out += '" style="width:100px;" /> <label class="marginLeft-30">账务类别：</label> <input name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 12, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <button class="btn-sm T-search search-btn btn-height" style="margin-left: 20px"> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group globalAdd"> <label class="control-label pull-left">账面应付合计：', 
            $line = 22, $out += $escape(sumNeedPayMoney), $out += '元 </label> <label class="control-label pull-left marginLeft-30">已付金额合计：', 
            $line = 23, $out += $escape(sumPayedMoney), $out += ' </label> <label class="control-label pull-left marginLeft-30">结算金额合计：', 
            $line = 24, $out += $escape(sumSettlementMoney), $out += '</label> <label class="control-label pull-left marginLeft-30">未付金额合计：<span class="T-unpayMoney">', 
            $line = 25, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="control-label pull-left marginLeft-30">本次付款金额：</label> <input class="col-xs-1 pull-left" name="sumPayMoney" type="text" value="', 
            $line = 27, $out += $escape(sumPayMoney), $out += '" maxlength="9" style="float:none;" /> <label class="control-label pull-left marginLeft-30">付款方式：</label> <select class="pull-left" style="text-align:center" name="sumPayType"> <option value="0" ', 
            $line = 30, 0 == sumPayType && ($out += 'selected="selected"', $line = 30), $out += '>现金</option> <option value="1" ', 
            $line = 31, 1 == sumPayType && ($out += 'selected="selected"', $line = 31), $out += '>银行转账</option> <option value="2" ', 
            $line = 32, 2 == sumPayType && ($out += 'selected="selected"', $line = 32), $out += '>网上支付</option> <option value="3" ', 
            $line = 33, 3 == sumPayType && ($out += 'selected="selected"', $line = 33), $out += '>支票</option> <option value="4" ', 
            $line = 34, 4 == sumPayType && ($out += 'selected="selected"', $line = 34), $out += '>其他</option> </select> <label class="control-label pull-left marginLeft-30">备注：</label> <input class="col-xs-1 pull-left" name="sumPayRemark" type="text" value="', 
            $line = 37, $out += $escape(sumPayRemark), $out += '" style="float:none;" /> <button class="btn btn-xs btn-primary marginLeft-30 T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> <button class="btn btn-xs btn-warning marginLeft-30 T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> </div> </form> </div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr><th class="th-border">序号</th> <th class="th-border">账务类别</th> <th class="th-border">用车时间(账期)</th> <th class="th-border">人数</th> <th class="th-border">司机</th> <th class="th-border">车型</th> <th class="th-border">车牌号</th> <th class="th-border">车费</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border" style="width: 80px"><span class="necessary">*</span>本次付款金额</th> <th class="th-border" style="width: 100px!important;">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" width="100">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 72, $each(financialBusCompanyListData, function(rs, index) {
                $out += ' <tr data-id="', $line = 73, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 74, $out += $escape(index + 1), $out += "</td> <td>", $line = 75, $out += $escape(rs.tripNumber), 
                $line = 75, $out += $escape("，"), $line = 75, $out += $escape(rs.lineProductName), 
                $line = 75, $out += $escape("，"), $line = 75, $out += $escape(rs.guideName), $out += "</td> <td>", 
                $line = 76, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", $line = 76) : ($line = 76, 
                $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), $line = 76), 
                $out += "</td> <td>", $line = 77, $out += $escape(rs.touristAdultCount), $out += " 大 ", 
                $line = 77, $out += $escape(rs.touristChildCount), $out += " 小</td> <td>", $line = 78, 
                null == rs.driverName || "" == rs.driverName ? ($out += "-", $line = 78) : ($line = 78, 
                $out += $escape(rs.driverName), $line = 78), $out += "</td> <td>", $line = 79, $out += $escape(rs.brand), 
                $out += " ", $line = 79, $out += $escape(rs.needSeatCount), $out += "座</td> <td>", 
                $line = 80, null == rs.licenseNumber || "" == rs.licenseNumber ? ($out += "-", $line = 80) : ($line = 80, 
                $out += $escape(rs.licenseNumber), $line = 80), $out += "</td> <td>", $line = 81, 
                $out += $escape(rs.fee), $out += "</td> <td>", $line = 82, $out += $escape(rs.reduceMoney), 
                $out += "</td> <td>", $line = 83, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail">', 
                $line = 84, $out += $escape("社付："), $line = 84, $out += $escape(rs.payedMoney), 
                $line = 84, $out += $escape("，"), $line = 84, $out += $escape("导付："), $line = 84, 
                $out += $escape(rs.realGuidePayMoney), $out += "</a></td> <td>", $line = 85, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-busCompanyImg" url="', 
                $line = 85, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 85) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 85), $out += "</td> <td>", $line = 86, $out += $escape(rs.settlementMoney), 
                $out += "</td> <td>", $line = 87, $out += $escape(rs.unPayedMoney), $out += '</td> <td><input name="payMoney" type="text" value="', 
                $line = 88, $out += $escape(rs.payMoney), $out += '" class="money" maxlength="9"></td> <td class="col-sm-1" ><input name="payRemark" type="text" value="', 
                $line = 89, $out += $escape(rs.payRemark), $out += '" maxlength="1000"></td> <td>', 
                $line = 90, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 90) : ($line = 90, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 90), 
                $out += "</td> <td>", $line = 91, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 91) : ($line = 91, $out += $escape(rs.checkUserName), $line = 91), $out += '</td> <td style="width:220px"> ', 
                $line = 93, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 93) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 93), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 98;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 104, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear"> <i class="ace-icon fa fa-check-circle"></i>确认 </button> </div> </form> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 T-newData" data-id="{{searchParam.busCompanyId}}" data-name="{{busCompanyName}}">\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="T-search-area">\r\n            <div class="form-group"> \r\n                <label>车队：{{busCompanyName}}</label>\r\n                <label class="marginLeft-30">账期：</label>\r\n                <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime}}" style="width:100px;" />   \r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime}}" style="width:100px;" />   \r\n\r\n                <label class="marginLeft-30">账务类别：</label>\r\n                <input name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n\r\n                <button class="btn-sm  T-search search-btn btn-height" style="margin-left: 20px">\r\n                  <i class="ace-icon fa fa-search"></i>搜索\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </form>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group globalAdd">\r\n            <label class="control-label pull-left">账面应付合计：{{sumNeedPayMoney}}元 </label>\r\n            <label class="control-label pull-left marginLeft-30">已付金额合计：{{sumPayedMoney}} </label>\r\n            <label class="control-label pull-left marginLeft-30">结算金额合计：{{sumSettlementMoney}}</label>\r\n            <label class="control-label pull-left marginLeft-30">未付金额合计：<span class="T-unpayMoney">{{sumUnPayedMoney}}</span></label>\r\n            <label class="control-label pull-left marginLeft-30">本次付款金额：</label>\r\n            <input class="col-xs-1 pull-left" name="sumPayMoney" type="text" value="{{sumPayMoney}}" maxlength="9" style="float:none;" />\r\n            <label class="control-label pull-left marginLeft-30">付款方式：</label>\r\n            <select class="pull-left" style="text-align:center" name="sumPayType">\r\n                <option value="0" {{if sumPayType == 0}}selected="selected"{{/if}}>现金</option>\r\n                <option value="1" {{if sumPayType == 1}}selected="selected"{{/if}}>银行转账</option>\r\n                <option value="2" {{if sumPayType == 2}}selected="selected"{{/if}}>网上支付</option>\r\n                <option value="3" {{if sumPayType == 3}}selected="selected"{{/if}}>支票</option>\r\n                <option value="4" {{if sumPayType == 4}}selected="selected"{{/if}}>其他</option>\r\n            </select>\r\n            <label class="control-label pull-left marginLeft-30">备注：</label>\r\n                <input class="col-xs-1 pull-left" name="sumPayRemark" type="text" value="{{sumPayRemark}}" style="float:none;" />\r\n\r\n            <button class="btn btn-xs btn-primary marginLeft-30 T-clear-auto">\r\n                <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n            </button>\r\n            <button class="btn btn-xs btn-warning marginLeft-30 T-cancel-auto">\r\n                <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<table class="table table-striped table-bordered table-hover all margin-top">\r\n    <thead>\r\n        <tr><th class="th-border">序号</th>\r\n            <th class="th-border">账务类别</th>\r\n            <th class="th-border">用车时间(账期)</th>\r\n            <th class="th-border">人数</th>\r\n            <th class="th-border">司机</th>\r\n            <th class="th-border">车型</th>\r\n            <th class="th-border">车牌号</th>\r\n            <th class="th-border">车费</th>\r\n            <th class="th-border">优惠</th>\r\n            <th class="th-border">账面应付</th>\r\n            <th class="th-border">已付金额</th>\r\n            <th class="th-border">单据</th>\r\n            <th class="th-border">结算金额</th>\r\n            <th class="th-border">未付金额</th>\r\n            <th class="th-border" style="width: 80px"><span class="necessary">*</span>本次付款金额</th>\r\n            <th class="th-border" style="width: 100px!important;">备注</th>\r\n            <th class="th-border">对账时间</th>\r\n            <th class="th-border">对账人</th>\r\n            <th class="th-border" width="100">对账</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody class="T-clearList">\r\n        {{each financialBusCompanyListData as rs index}}  \r\n        <tr data-id="{{rs.id}}">\r\n            <td>{{index+1}}</td>\r\n            <td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n            <td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n            <td>{{rs.touristAdultCount}} 大 {{rs.touristChildCount}} 小</td>\r\n            <td>{{if rs.driverName == null || rs.driverName == ""}}-{{else}}{{rs.driverName}}{{/if}}</td>\r\n            <td>{{rs.brand}} {{rs.needSeatCount}}座</td>\r\n            <td>{{if rs.licenseNumber == null || rs.licenseNumber == ""}}-{{else}}{{rs.licenseNumber}}{{/if}}</td>\r\n            <td>{{rs.fee}}</td>\r\n            <td>{{rs.reduceMoney}}</td>\r\n            <td>{{rs.needPayMoney}}</td>\r\n            <td><a class="T-option T-payedDetail">{{"社付："}}{{rs.payedMoney}}{{"，"}}{{"导付："}}{{rs.realGuidePayMoney}}</a></td>\r\n            <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-busCompanyImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n            <td>{{rs.settlementMoney}}</td>\r\n            <td>{{rs.unPayedMoney}}</td>\r\n            <td><input name="payMoney" type="text" value="{{rs.payMoney}}" class="money" maxlength="9"></td>\r\n            <td class="col-sm-1" ><input name="payRemark" type="text" value="{{rs.payRemark}}" maxlength="1000"></td>\r\n            <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n            <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n            <td style="width:220px">\r\n                {{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                <a class="cursor"> |</a>\r\n                <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n            </td>\r\n        </tr>\r\n        {{/each}} \r\n    </tbody>\r\n</table>\r\n\r\n<div class="row pageMode">\r\n    <div class="col-xs-6">\r\n        <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n    </div>\r\n    <div class="col-xs-6">\r\n        <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n        </div>\r\n    </div>\r\n</div>\r\n<form class="form-horizontal" role="form" onsubmit="return false">\r\n    <div class="form-group" style="text-align: center;">\r\n        <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px">\r\n            <i class="ace-icon fa fa-times-circle"></i>关闭\r\n        </button>\r\n        <button class="btn btn-xs btn-primary T-saveClear">\r\n            <i class="ace-icon fa fa-check-circle"></i>确认\r\n        </button>\r\n    </div>\r\n</form>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});