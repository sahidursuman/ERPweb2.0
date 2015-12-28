/*TMODJS:{"debug":true,"version":142,"md5":"1d6f4ecc3e448081515e8358c7d1f391"}*/
define(function(require) {
    return require("../../../template")("financial/transfer/view/transferClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, partnerAgencyName = $data.partnerAgencyName, sumPerson = $data.sumPerson, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumPunishMoney = $data.sumPunishMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, sumPayMoney = $data.sumPayMoney, type = $data.type, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, $each = $utils.$each, financialTransferList = $data.financialTransferList, isAutoPay = ($data.rs, 
            $data.index, $data.detail, $data.$index, $data.isAutoPay), $out = ($data.member, 
            "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.partnerAgencyId), 
            $out += '" data-name="', $line = 1, $out += $escape(partnerAgencyName), $out += '"> <div class="col-sm-12"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area"> <div class="form-group T-search-area"> <label> 同行地接：', 
            $line = 6, $out += $escape(partnerAgencyName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 8, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <label class="marginLeft-30">线路名称：</label> <input name="lineProductName" placeholder="线路名称" type="text" value="', 
            $line = 13, "" == searchParam.lineProductName ? ($out += "全部", $line = 13) : ($line = 13, 
            $out += $escape(searchParam.lineProductName), $line = 13), $out += '" style="width:200px;" /> <label class="marginLeft-30">操作人：</label> <input name="operateName" type="text" value="', 
            $line = 16, "" == searchParam.operateName ? ($out += "全部", $line = 16) : ($line = 16, 
            $out += $escape(searchParam.operateName), $line = 16), $out += '" style="width:100px;" /> <input name="operateId" type="hidden" value="', 
            $line = 17, $out += $escape(searchParam.operateId), $out += '" /> <button class="btn-height btn-sm search-btn T-search" > <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group T-count" style="padding-bottom: 0"> <label>人数合计：', 
            $line = 27, $out += $escape(sumPerson), $out += '</label> <label style="margin-left: 10px">外转金额合计：', 
            $line = 28, $out += $escape(sumNeedPayMoney), $out += '</label> <label style="margin-left: 10px">已付金额合计：', 
            $line = 29, $out += $escape(sumPayedMoney), $out += '</label> <label style="margin-left: 10px">返款金额合计：', 
            $line = 30, $out += $escape(sumPunishMoney), $out += '</label> <label style="margin-left: 10px">结算金额合计：', 
            $line = 31, $out += $escape(sumSettlementMoney), $out += '</label> <label style="margin-left: 10px">未付金额合计：', 
            $line = 32, $out += $escape(sumUnPayedMoney), $out += '</label> <label style="margin-left: 10px">未付金额合计(已对账)：<span class="T-unpayMoney">', 
            $line = 33, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </form> <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">本次付款金额：</label> <label class="control-label"> <input name="sumPayMoney" type="text" value="', 
            $line = 40, $out += $escape(sumPayMoney), $out += '" class="T-sumReciveMoney money" ', 
            $line = 40, type && ($out += "disabled ", $line = 40), $out += "> </label> </div> ", 
            $line = 44, type || ($out += ' <div class="form-group mar-l-10"> <button class="btn btn-xs btn-primary T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> <button class="btn btn-xs btn-warning T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> </div> ', 
            $line = 53), $out += ' <div class="form-group mar-l-10"> <label class="control-label">付款方式：</label> <select class="form-control" name="sumPayType"> ', 
            $line = 58, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-l-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" style="width:230px;"> <input type="hidden" name="card-id"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" class="datepicker" style="width:100px;"> </label> </div> </div> <div class="form-group row"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="T-sumRemark" style="width:900px;"> </label> </div> </div> <div style="clear: both"></div> <table class="table table-striped table-bordered table-hover all"> <thead> <tr><th class="th-border">序号</th> <th class="th-border">线路产品</th> <th class="th-border">出游日期</th> <th class="th-border">联系人</th> <th class="th-border">人数</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> <th class="th-border">外转金额</th> <th class="th-border">明细</th> <th class="th-border">已付金额</th> <th class="th-border">返款金额</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border"><span class="necessary">*</span>本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 114, $each(financialTransferList, function(rs, index) {
                $out += ' <tr data-id="', $line = 115, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 116, $out += $escape(index + 1), $out += "</td> <td>", $line = 117, $out += $escape(rs.lineProductName), 
                $out += "</td> <td>", $line = 118, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 119, null == rs.contactName || "" == rs.contactName ? ($out += "-", 
                $line = 119) : ($line = 119, $out += $escape(rs.contactName), $line = 119), $out += "</td> <td>", 
                $line = 120, $out += $escape(rs.adultCount), $out += " 大 ", $line = 120, $out += $escape(rs.childCount), 
                $out += ' 小<a href="#" class="T-option T-viewGroup" style="margin-left:5px">展开</a></td> <td>', 
                $line = 121, $out += $escape(rs.operateName), $out += "</td> <td>", $line = 122, 
                $out += $escape($helpers.dateFormat(rs.operateTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 123, $out += $escape(rs.needPayMoney), $out += "</td> <td> ", $line = 125, 
                $each(rs.detailList, function(detail) {
                    $out += " ", $line = 126, $out += $escape(detail.describe), $out += "：", $line = 126, 
                    $out += $escape(detail.count), $out += " * ", $line = 126, $out += $escape(detail.price), 
                    $out += " = ", $line = 126, $out += $escape(detail.count * detail.price), $out += "<br> ", 
                    $line = 127;
                }), $out += ' </td> <td><a class="T-option T-payedDetail" data-money="', $line = 129, 
                $out += $escape(rs.payedMoney), $out += '">', $line = 129, $out += $escape("社付："), 
                $line = 129, $out += $escape(rs.payedMoney), $out += "</a></td> <td>", $line = 130, 
                $out += $escape(rs.punishMoney), $out += "</td> <td>", $line = 131, $out += $escape(rs.settlementMoney), 
                $out += "</td> <td>", $line = 132, $out += $escape(rs.unPayedMoney), $out += '</td> <td><input name="payMoney" class="money" type="text" value="', 
                $line = 133, $out += $escape(rs.payMoney), $out += '" maxlength="9" data-le="', 
                $line = 134, $out += $escape(rs.unPayedMoney), $out += '" ', $line = 134, 2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 134), $out += '></td> <td class="col-sm-1" ><input name="payRemark" type="text" value="', 
                $line = 135, $out += $escape(rs.payRemark), $out += '" maxlength="1000" ', $line = 136, 
                2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", $line = 136), $out += "></td> <td>", 
                $line = 137, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 137) : ($line = 137, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 137), 
                $out += "</td> <td>", $line = 138, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 138) : ($line = 138, $out += $escape(rs.checkUserName), $line = 138), $out += "</td> <td> ", 
                $line = 140, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 140) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 140), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> <tr class="hide"> <td colspan="18"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">是否联系人</th> </tr> </thead> <tbody> ', 
                $line = 159, $each(rs.memberList, function(member, index) {
                    $out += " <tr><td>", $line = 160, $out += $escape(index + 1), $out += "</td> <td>", 
                    $line = 161, null == member.name || "" == member.name ? ($out += "-", $line = 161) : ($line = 161, 
                    $out += $escape(member.name), $line = 161), $out += "</td> <td>", $line = 162, $out += $escape(member.mobileNumber), 
                    $out += "</td> <td>", $line = 163, 0 == member.idCardType ? ($out += " 身份证 ", $line = 165) : 1 == member.idCardType ? ($out += " 护照 ", 
                    $line = 167) : 2 == member.idCardType ? ($out += " 其他 ", $line = 169) : ($out += " - ", 
                    $line = 171), $out += " </td> <td>", $line = 173, null == member.idCardNumber || "" == member.idCardNumber ? ($out += "-", 
                    $line = 173) : ($line = 173, $out += $escape(member.idCardNumber), $line = 173), 
                    $out += "</td> <td>", $line = 174, 1 == member.isContactUser && ($out += "是", $line = 174), 
                    $out += "</td> </tr> ", $line = 176;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 181;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 187, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear"> <i class="ace-icon fa fa-check-circle"></i>确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.partnerAgencyId}}" data-name="{{partnerAgencyName}}">\r\n    <div class="col-sm-12">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area">\r\n                <div class="form-group  T-search-area"> \r\n                    <label> 同行地接：{{partnerAgencyName}}</label>\r\n                    <label class="marginLeft-30">账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />   \r\n\r\n                    <label class="marginLeft-30">线路名称：</label>\r\n                    <input name="lineProductName" placeholder="线路名称" type="text" value="{{if searchParam.lineProductName == ""}}全部{{else}}{{searchParam.lineProductName}}{{/if}}" style="width:200px;" />\r\n\r\n                    <label class="marginLeft-30">操作人：</label>\r\n                    <input name="operateName" type="text" value="{{if searchParam.operateName == ""}}全部{{else}}{{searchParam.operateName}}{{/if}}" style="width:100px;" />\r\n                    <input name="operateId" type="hidden" value="{{searchParam.operateId}}" />\r\n\r\n                    <button class="btn-height btn-sm search-btn T-search" >\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group T-count" style="padding-bottom: 0">\r\n                <label>人数合计：{{sumPerson}}</label>\r\n                <label style="margin-left: 10px">外转金额合计：{{sumNeedPayMoney}}</label>\r\n                <label style="margin-left: 10px">已付金额合计：{{sumPayedMoney}}</label>\r\n                <label style="margin-left: 10px">返款金额合计：{{sumPunishMoney}}</label>\r\n                <label style="margin-left: 10px">结算金额合计：{{sumSettlementMoney}}</label>\r\n                <label style="margin-left: 10px">未付金额合计：{{sumUnPayedMoney}}</label>\r\n                <label style="margin-left: 10px">未付金额合计(已对账)：<span class="T-unpayMoney">{{checkedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n        <div class="form-inline row globalAdd T-summary" style="padding-top: 10px;">\r\n            <div class="form-group">\r\n                <label class="control-label">本次付款金额：</label>\r\n                <label class="control-label">\r\n                    <input name="sumPayMoney" type="text" value="{{sumPayMoney}}" class="T-sumReciveMoney money"  {{if type}}disabled {{/if}}>\r\n                </label>\r\n            </div>\r\n\r\n            {{if !type}} \r\n            <div class="form-group mar-l-10">\r\n                <button class="btn btn-xs btn-primary T-clear-auto">\r\n                    <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                </button>\r\n                <button class="btn btn-xs btn-warning T-cancel-auto">\r\n                    <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n                </button>\r\n            </div>\r\n            {{/if}}\r\n\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select  class="form-control" name="sumPayType">\r\n                    {{getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" class="money" style="width:230px;">\r\n                    <input type="hidden" name="card-id">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" class="datepicker" style="width:100px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group row">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" class="T-sumRemark" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div style="clear: both"></div>\r\n    <table class="table table-striped table-bordered table-hover all">\r\n        <thead>\r\n            <tr><th class="th-border">序号</th>\r\n                <th class="th-border">线路产品</th>\r\n                <th class="th-border">出游日期</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">人数</th>\r\n                <th class="th-border">操作人</th>\r\n                <th class="th-border">操作时间</th>\r\n                <th class="th-border">外转金额</th>\r\n                <th class="th-border">明细</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">返款金额</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border"><span class="necessary">*</span>本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialTransferList as rs index}}\r\n            <tr data-id="{{rs.id}}">\r\n                <td>{{index+1}}</td>\r\n                <td>{{rs.lineProductName}}</td>\r\n                <td>{{rs.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{if rs.contactName == null || rs.contactName == ""}}-{{else}}{{rs.contactName}}{{/if}}</td>\r\n                <td>{{rs.adultCount}} 大 {{rs.childCount}} 小<a href="#" class="T-option T-viewGroup" style="margin-left:5px">展开</a></td>\r\n                <td>{{rs.operateName}}</td>\r\n                <td>{{rs.operateTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{rs.needPayMoney}}</td>\r\n                <td>\r\n                  {{each rs.detailList as detail}}\r\n                    {{detail.describe}}：{{detail.count}} * {{detail.price}} = {{detail.count*detail.price}}<br> \r\n                  {{/each}}  \r\n                </td>\r\n                <td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney}}">{{"社付："}}{{rs.payedMoney}}</a></td> \r\n                <td>{{rs.punishMoney}}</td>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td>{{rs.unPayedMoney}}</td>\r\n                <td><input name="payMoney" class="money" type="text" value="{{rs.payMoney}}" maxlength="9"\r\n                 data-le="{{rs.unPayedMoney}}" {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}}></td>\r\n                <td class="col-sm-1" ><input name="payRemark" type="text" value="{{rs.payRemark}}" maxlength="1000"\r\n                {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}}></td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                <td>\r\n                    {{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>\r\n            <tr class="hide">\r\n                <td colspan="18">\r\n                    <table class="table table-striped table-bordered table-hover">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class="th-border">序号</th>\r\n                                <th class="th-border">姓名</th>\r\n                                <th class="th-border">联系电话</th>\r\n                                <th class="th-border">证件类型</th>\r\n                                <th class="th-border">证件号</th>\r\n                                <th class="th-border">是否联系人</th>\r\n                            </tr>\r\n                        </thead>  \r\n                        <tbody>\r\n                            {{each rs.memberList as member index}}\r\n                            <tr><td>{{index+1}}</td>\r\n                                <td>{{if member.name == null || member.name == ""}}-{{else}}{{member.name}}{{/if}}</td>\r\n                                <td>{{member.mobileNumber}}</td>\r\n                                <td>{{if member.idCardType == 0}}\r\n                                        身份证\r\n                                    {{else if member.idCardType == 1}}\r\n                                        护照\r\n                                    {{else if member.idCardType == 2}}\r\n                                        其他\r\n                                    {{else}}\r\n                                        -\r\n                                    {{/if}}\r\n                                </td>\r\n                                <td>{{if member.idCardNumber == null || member.idCardNumber == ""}}-{{else}}{{member.idCardNumber}}{{/if}}</td>\r\n                                <td>{{if member.isContactUser == 1}}是{{/if}}</td>\r\n                            </tr>\r\n                            {{/each}}\r\n                        </tbody>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            {{/each}} \r\n        </tbody>\r\n    </table>\r\n\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});