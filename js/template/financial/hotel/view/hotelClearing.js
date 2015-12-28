/*TMODJS:{"debug":true,"version":176,"md5":"0869bf69f876d150b13bfcc4a3e64758"}*/
define(function(require) {
    return require("../../../template")("financial/hotel/view/hotelClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, hotelName = $data.hotelName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, sumPayMoney = $data.sumPayMoney, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, $each = $utils.$each, financialHotelListData = $data.financialHotelListData, isAutoPay = ($data.rs, 
            $data.$index, $data.isAutoPay), $out = "";
            return $out += '<div class= "row T-newData" data-id="', $line = 1, $out += $escape(searchParam.hotelId), 
            $out += '" data-name="', $line = 1, $out += $escape(hotelName), $out += '"> <div class="col-sm-12 "> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label>酒店：', 
            $line = 6, $out += $escape(hotelName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 8, $out += $escape(searchParam.startTime), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.endTime), $out += '" style="width:100px;" /> <label class="marginLeft-30">账务类别：</label> <input name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 13, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <button class=" btn-sm T-search search-btn btn-height" style="margin-left:20px;"> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="pull-left" style="margin:3px 30px 0px 0px;"> <label>账面应付合计：', 
            $line = 25, $out += $escape(sumNeedPayMoney), $out += '元 </label> <label class="marginLeft-30">已付金额合计：', 
            $line = 26, $out += $escape(sumPayedMoney), $out += ' </label> <label class="marginLeft-30">结算金额合计：', 
            $line = 27, $out += $escape(sumSettlementMoney), $out += '</label> <label class="marginLeft-30">未付金额合计：', 
            $line = 28, $out += $escape(sumUnPayedMoney), $out += '</label> <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney">', 
            $line = 29, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </div> </form> <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">本次付款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="money" value="', 
            $line = 38, $out += $escape(sumPayMoney), $out += '"> </label> </div> <div class="form-group mar-l-10"> <button class="btn btn-primary T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> <button class="btn btn-warning T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> </div> <div class="form-group mar-l-10"> <label class="control-label">收款方式：</label> <select class="form-control T-sumPayType" name="payType"> ', 
            $line = 54, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-l-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" style="width:230px;"> <input type="hidden" name="card-id"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" class="datepicker" style="width:100px;"> </label> </div> </div> <div class="form-group row"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" name="remark" class="T-remark" style="width:900px;"> </label> </div> </div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr><th class="th-border">账务类别</th> <th class="th-border">入住日期(账期)</th> <th class="th-border">房型</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border" width="45">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border"><span class="necessary">*</span>本次付款金额</th> <th class="th-border" style="width: 100px">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" width="100">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 107, $each(financialHotelListData, function(rs) {
                $out += ' <tr data-id="', $line = 108, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 109, $out += $escape(rs.tripNumber), $line = 109, $out += $escape("，"), 
                $line = 109, $out += $escape(rs.lineProductName), $line = 109, $out += $escape("，"), 
                $line = 109, $out += $escape(rs.guideName), $out += "</td> <td>", $line = 110, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", 
                $line = 110) : ($line = 110, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $line = 110), $out += "</td> <td>", $line = 111, null == rs.type || "" == rs.type ? ($out += "-", 
                $line = 111) : ($line = 111, $out += $escape(rs.type), $line = 111), $out += "</td> <td>", 
                $line = 112, $out += $escape(rs.price), $out += "</td> <td>", $line = 113, $out += $escape(rs.memberCount), 
                $out += "</td> <td>", $line = 114, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 115, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail">', 
                $line = 116, $out += $escape("社付："), $line = 116, $out += $escape(rs.payedMoney), 
                $line = 116, rs.isGuidePay && 1 == rs.isGuidePay || ($line = 116, $out += $escape("，"), 
                $line = 116, $out += $escape("导付："), $line = 116, $out += $escape(rs.realGuidePayMoney), 
                $line = 116), $out += "</a></td> <td>", $line = 117, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-hotelImg" url="', 
                $line = 117, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 117) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 117), $out += "</td> <td>", $line = 118, $out += $escape(rs.settlementMoney), 
                $out += "</td> <td>", $line = 119, $out += $escape(rs.unPayedMoney), $out += '</td> <td><input name="payMoney" type="text" value="', 
                $line = 120, $out += $escape(rs.payMoney), $out += '" class="money" maxlength="9" data-le="', 
                $line = 120, $out += $escape(rs.unPayedMoney), $out += '" ', $line = 120, 2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 120), $out += ' /></td> <td class="col-sm-1" ><input name="payRemark" type="text" value="', 
                $line = 121, $out += $escape(rs.payRemark), $out += '" maxlength="1000" ', $line = 121, 
                2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", $line = 121), $out += " /></td> <td>", 
                $line = 122, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 122) : ($line = 122, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 122), 
                $out += "</td> <td>", $line = 123, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 123) : ($line = 123, $out += $escape(rs.checkUserName), $line = 123), $out += "</td> <td> ", 
                $line = 125, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 125) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 125), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 130;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 136, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear"> <i class="ace-icon fa fa-check-circle"></i>确认付款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row T-newData" data-id="{{searchParam.hotelId}}" data-name="{{hotelName}}">\r\n    <div class="col-sm-12 ">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area">\r\n                <div class="form-group"> \r\n                    <label>酒店：{{hotelName}}</label>\r\n                    <label class="marginLeft-30">账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime}}" style="width:100px;" />   \r\n\r\n                    <label class="marginLeft-30">账务类别：</label>\r\n                    <input name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n                    \r\n                    <button class=" btn-sm T-search search-btn btn-height" style="margin-left:20px;">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <div class="pull-left" style="margin:3px 30px 0px 0px;">\r\n                    <label>账面应付合计：{{sumNeedPayMoney}}元 </label>\r\n                    <label class="marginLeft-30">已付金额合计：{{sumPayedMoney}} </label>\r\n                    <label class="marginLeft-30">结算金额合计：{{sumSettlementMoney}}</label>\r\n                    <label class="marginLeft-30">未付金额合计：{{sumUnPayedMoney}}</label>\r\n                    <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney">{{checkedUnPayedMoney}}</span></label>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;">\r\n            <div class="form-group">\r\n                <label class="control-label">本次付款金额合计：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="sumPayMoney" class="money"  value="{{sumPayMoney}}">\r\n                </label>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10">\r\n                <button class="btn btn-primary T-clear-auto">\r\n                        <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                    </button>\r\n                    <button class="btn btn-warning T-cancel-auto">\r\n                        <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n                    </button>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">收款方式：</label>\r\n                <select class="form-control T-sumPayType" name="payType">\r\n                    {{getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" class="money" style="width:230px;">\r\n                    <input type="hidden" name="card-id">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" class="datepicker" style="width:100px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group row">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="remark" class="T-remark" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover all margin-top">\r\n        <thead>\r\n            <tr><th class="th-border">账务类别</th>\r\n                <th class="th-border">入住日期(账期)</th>\r\n                <th class="th-border">房型</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border" width="45">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border"><span class="necessary">*</span>本次付款金额</th>\r\n                <th class="th-border" style="width: 100px">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" width="100">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialHotelListData as rs}}\r\n            <tr data-id="{{rs.id}}">\r\n                <td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n                <td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{if rs.type == null || rs.type == ""}}-{{else}}{{rs.type}}{{/if}}</td>\r\n                <td>{{rs.price}}</td>\r\n                <td>{{rs.memberCount}}</td>  \r\n                <td>{{rs.reduceMoney}}</td>\r\n                <td>{{rs.needPayMoney}}</td>\r\n                <td><a class="T-option T-payedDetail">{{"社付："}}{{rs.payedMoney}}{{if !rs.isGuidePay || rs.isGuidePay != 1}}{{"，"}}{{"导付："}}{{rs.realGuidePayMoney}}{{/if}}</a></td> \r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-hotelImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td>{{rs.settlementMoney}}</td>  \r\n                <td>{{rs.unPayedMoney}}</td>\r\n                <td><input name="payMoney" type="text" value="{{rs.payMoney}}" class="money" maxlength="9" data-le="{{rs.unPayedMoney}}" {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}} /></td>\r\n                <td class="col-sm-1" ><input name="payRemark" type="text" value="{{rs.payRemark}}" maxlength="1000" {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}} /></td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                <td>\r\n                    {{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>  \r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});