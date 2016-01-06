/*TMODJS:{"debug":true,"version":262,"md5":"e8ba76d7f485b338f3fc62312f7bb479"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/innerTransferInClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, type = $data.type, btnShowStatus = $data.btnShowStatus, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, bankNumber = $data.bankNumber, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, innerTransferIncomeDetailsList = $data.innerTransferIncomeDetailsList, recordSize = ($data.checking, 
            $data.index, $data.detail, $data.$index, $data.visitor, $data.recordSize), $out = "";
            return $out += '<div class="row innerTransferChecking globalAdd"> <div> <div class="T-search"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label class="control-label pull-left" style="margin-left: 2px;">部门：</label> <span>', 
            $line = 7, $out += $escape(searchParam.businessGroupName), $out += '</span> <input type="hidden" value="', 
            $line = 8, $out += $escape(searchParam.businessGroupId), $out += '" name="businessGroupId"> <input type="hidden" value="', 
            $line = 9, $out += $escape(searchParam.businessGroupName), $out += '" name="businessGroupName"> <label class="control-label" style="margin-left:30px;">账期： <input type="text" style="width:100px;" class="date-picker" name="startDate" value="', 
            $line = 11, $out += $escape(searchParam.startAccountTime), $out += '"/> <span>&nbsp;至&nbsp;</span> <input type="text" style="width:100px;" class="date-picker" name="endDate" value="', 
            $line = 13, $out += $escape(searchParam.endAccountTime), $out += '"/> </label> <label class="control-label" style="margin-left:30px;">线路名称： <input type="text" name="lineProductName" value="', 
            $line = 16, $out += $escape(searchParam.lineProductName), $out += '"/> <input type="hidden" name="lineProductId" value="', 
            $line = 17, $out += $escape(searchParam.lineProductId), $out += '" /> </label> <label class="control-label" style="margin-left:30px;">接收人： <input type="text" name="receiveUserName" value="', 
            $line = 20, $out += $escape(searchParam.receiveUserName), $out += '" /> <input type="hidden" name="receiveUserId" value="', 
            $line = 21, $out += $escape(searchParam.receiveUserId), $out += '"/> </label> <button class="marginLeft-30 btn-sm search-btn T-checking-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button>  </div> </form> </div> <form class="form-horizontal T-count" role="form" onsubmit="return false"> <div class="form-group"> <label class=" control-label pull-left" style="margin-left: 15px">人数合计：<span class="sumTransCount"></span><label> <label class=" control-label " style="margin-left:30px;">合同金额合计：<span class="sumTransNeedPayMoney"></span></label> <label class=" control-label " style="margin-left:30px;">已收金额合计：<span class="sumPayedMoney"></span></label> <label class=" control-label " style="margin-left:30px;">返款金额合计：<span class="sumPunishMoney"></span></label> <label class=" control-label " style="margin-left:30px;">结算金额合计：<span class="sumSettlementMoney"></span></label> <label class=" control-label " style="margin-left:30px;">未收金额合计：<span class="unIncomeMoney"></span></label> <label class=" control-label " style="margin-left:30px;">未收金额合计(已对账)：<span class="sumUnPayedMoney"></span></label> </div> </form> <div class="form-inline globalAdd T-summary"> <div class="form-group"> <label class="control-label">本次收款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="money" ', 
            $line = 51, type && ($out += "disabled ", $line = 51), $out += "> </label> </div> ", 
            $line = 55, btnShowStatus || ($out += ' <div class="form-group mar-l-10"> <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 59), $out += ' <div class="form-group mar-l-10"> <label class="control-label">收款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 63, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-l-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" value="', 
            $line = 70, $out += $escape(bankNumber), $out += '" style="width:300px;"> <input type="hidden" name="card-id" value="', 
            $line = 71, $out += $escape(bankId), $out += '"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 77, $out += $escape(voucher), $out += '"> </label> </div> <div class="form-group mar-l-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" style="width:140px;" value="', 
            $line = 83, $out += $escape(billTime), $out += '"> </label> </div> </div> <div class="form-group"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" name="sumRemark" value="', 
            $line = 91, $out += $escape(sumPayRemark), $out += "\" style=\"width:900px;\"> </label> </div> </div> <div class=\"clearfix\"></div> <table class=\"table table-striped table-bordered table-hover all margin-top\"> <thead> <tr> <th class='th-border'>线路产品</th> <th class='th-border'>出游日期</th> <th class='th-border'>联系人</th> <th class='th-border'>人数</th> <th class='th-border'>接收人</th> <th class='th-border'>接收时间</th> <th class='th-border'>内转转入</th> <th class='th-border'>明细</th> <th class='th-border'>已收金额</th> <th class='th-border'>返款金额</th> <th class='th-border'>结算金额</th> <th class='th-border'>未收金额</th> <th class='th-border'>本次收款金额</th> <th class='th-border'>备注</th> <th class='th-border'>对账时间</th> <th class='th-border'>对账人</th> <th class='th-border'>对账</th> </tr> </thead> <tbody class=\"T-clearList\" data-right=\"1360005\"> ", 
            $line = 119, $each(innerTransferIncomeDetailsList, function(checking) {
                $out += " <tr data-id=", $line = 120, $out += $escape(checking.id), $out += ' data-entity-id="', 
                $line = 120, $out += $escape(checking.id), $out += '" data-entity-createTime="', 
                $line = 120, $out += $escape(checking.createTime), $out += '" data-entity-isComfirmAccount="', 
                $line = 120, $out += $escape(checking.isConfirmAccount), $out += '" data-entity-UnIncomeMoney="', 
                $line = 120, $out += $escape(checking.checkUnIncomeMoney), $out += '" data-entity-backMoney="', 
                $line = 120, $out += $escape(checking.backMoney), $out += '" data-entity-remark="', 
                $line = 120, $out += $escape(checking.checkRemark), $out += '"> <td>', $line = 121, 
                $out += $escape(checking.lineProductName), $out += '</td> <td name="startTime">', 
                $line = 122, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 123, $out += $escape(checking.contactUserName), $out += "</td> <td>", 
                $line = 124, $out += $escape(checking.adultCount), $out += "大", $line = 124, $out += $escape(checking.childCount), 
                $out += '小<a href="#" class="T-seeGroup" style="margin-left:5px">展开</a></td> <td>', 
                $line = 125, $out += $escape(checking.receiveUserName), $out += "</td> <td>", $line = 126, 
                null != checking.receiveTime ? ($line = 126, $out += $escape($helpers.dateFormat(checking.receiveTime, "yyyy-MM-dd")), 
                $line = 126) : ($out += "-", $line = 126), $out += "</td> <td>", $line = 127, $out += $escape(checking.transInMoney), 
                $out += "</td> <td> 大人:", $line = 129, $out += $escape(checking.transAdultPrice), 
                $out += "*", $line = 129, $out += $escape(checking.transAdultCount), $out += "=", 
                $line = 129, $out += $escape(checking.transAdultPrice * checking.transAdultCount), 
                $out += "<br> 小孩:", $line = 130, $out += $escape(checking.transChildPrice), $out += "*", 
                $line = 130, $out += $escape(checking.transChildCount), $out += "=", $line = 130, 
                $out += $escape(checking.transChildPrice * checking.transChildCount), $out += "<br> ", 
                $line = 131, checking.transferFeeList.length > 0 ? ($out += " ", $line = 132, $each(checking.transferFeeList, function(detail) {
                    $out += " ", $line = 133, $out += $escape(detail.discribe), $out += "：", $line = 133, 
                    $out += $escape(detail.count), $out += "*", $line = 133, $out += $escape(detail.price), 
                    $out += "=", $line = 133, $out += $escape(detail.count * detail.price), $out += "<br> ", 
                    $line = 134;
                }), $out += " ", $line = 135) : ($out += " - ", $line = 137), $out += ' </td> <td><a href="javascript:void(0)" class="T-viewDetail"><span>社收:', 
                $line = 139, $out += $escape(checking.transGetedMoney), $out += ",导游现收:", $line = 139, 
                $out += $escape(checking.currentNeedPayMoney), $out += "</span></a></td> <td>", 
                $line = 140, $out += $escape(checking.backMoney), $out += "</td> <td>", $line = 141, 
                $out += $escape(checking.settlementMoney), $out += "</td> <td>", $line = 142, $out += $escape(checking.unIncomeMoney), 
                $out += '</td> <td><input type="text" maxlength="9" class="money" value="', $line = 143, 
                $out += $escape(checking.payMoney), $out += '" data-le="', $line = 143, $out += $escape(checking.unIncomeMoney), 
                $out += '" name="payMoney" style="text-align:center" ', $line = 144, !btnShowStatus && checking.unIncomeMoney <= 0 && ($out += " disabled ", 
                $line = 144), $out += '></td> <td><input type="text" maxlength="9" name="payRemark" value="', 
                $line = 145, $out += $escape(checking.incomeRemark), $out += '" style="text-align:center" ', 
                $line = 146, !btnShowStatus && checking.unIncomeMoney <= 0 && ($out += " disabled ", 
                $line = 146), $out += "></td> <td>", $line = 147, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 147) : ($line = 147, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 147), $out += "</td> <td>", $line = 148, null == checking.checkUserName || "" == checking.checkUserName ? ($out += "-", 
                $line = 148) : ($line = 148, $out += $escape(checking.checkUserName), $line = 148), 
                $out += '</td> <td> <label class="pos-rel"> ', $line = 151, 1 == checking.isConfirmAccount ? ($out += " 已对账 ", 
                $line = 153) : ($out += " 未对账 ", $line = 155), $out += ' </label> <label> <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a> </label> </td> </tr> <tr class="hide"> <td colspan="17"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">是否联系人</th> </tr> </thead> <tbody> ', 
                $line = 176, $each(checking.tgMemberList, function(visitor, index) {
                    $out += " <tr> <td>", $line = 178, $out += $escape(index + 1), $out += "</td> <td>", 
                    $line = 179, $out += $escape(visitor.name), $out += "</td> <td>", $line = 180, $out += $escape(visitor.mobileNumber), 
                    $out += "</td> <td>", $line = 181, 0 == visitor.idCardType && ($out += "身份证", $line = 181), 
                    $line = 181, 1 == visitor.idCardType && ($out += "护照", $line = 181), $line = 181, 
                    2 == visitor.idCardType && ($out += "其他", $line = 181), $out += "</td> <td>", $line = 182, 
                    $out += $escape(visitor.idCardNumber), $out += "</td> <td>", $line = 183, 1 == visitor.isContactUser && ($out += "是", 
                    $line = 183), $out += "</td> </tr> ", $line = 185;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 190;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 195, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <div class="clearfix"></div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-createTripPlan T-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-incomeMoney"> <i class="ace-icon fa fa-check-circle"></i> 确认收款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row innerTransferChecking globalAdd">\r\n    <div>\r\n         <div class="T-search">\r\n            <form class="form-inline" role="form" onsubmit="return false">\r\n                    <div class="form-group">\r\n                    <label  class="control-label pull-left" style="margin-left: 2px;">部门：</label>\r\n                    <span>{{searchParam.businessGroupName}}</span>\r\n                    <input type="hidden" value="{{searchParam.businessGroupId}}" name="businessGroupId">\r\n                    <input type="hidden" value="{{searchParam.businessGroupName}}" name="businessGroupName"> \r\n                    <label class="control-label" style="margin-left:30px;">账期：\r\n                      <input type="text" style="width:100px;" class="date-picker" name="startDate" value="{{searchParam.startAccountTime}}"/>\r\n                      <span>&nbsp;至&nbsp;</span>\r\n                      <input type="text" style="width:100px;" class="date-picker" name="endDate" value="{{searchParam.endAccountTime}}"/>\r\n                    </label>\r\n                    <label class="control-label" style="margin-left:30px;">线路名称：\r\n                      <input type="text" name="lineProductName" value="{{searchParam.lineProductName}}"/>\r\n                      <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}" />\r\n                    </label>\r\n                    <label class="control-label" style="margin-left:30px;">接收人：\r\n                    <input type="text" name="receiveUserName" value="{{searchParam.receiveUserName}}" />\r\n                    <input type="hidden" name="receiveUserId" value="{{searchParam.receiveUserId}}"/>\r\n                    \r\n                      \r\n                    </label> \r\n                    <button class="marginLeft-30 btn-sm search-btn T-checking-search" >\r\n                         <i class="ace-icon fa fa-search"></i>\r\n                             搜索\r\n                    </button>   \r\n                        <!-- <button type="button" class="btn btn-sm marginLeft-30 btn-primary btn-success btn-transferExport">\r\n                            <span>导出报表</span>\r\n                            <i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n                        </button> -->\r\n                    </div>\r\n            </form>\r\n        </div>\r\n        <form class="form-horizontal T-count" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">人数合计：<span class="sumTransCount"></span><label>\r\n                <label class=" control-label " style="margin-left:30px;">合同金额合计：<span class="sumTransNeedPayMoney"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">已收金额合计：<span class="sumPayedMoney"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">返款金额合计：<span class="sumPunishMoney"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">结算金额合计：<span class="sumSettlementMoney"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">未收金额合计：<span class="unIncomeMoney"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">未收金额合计(已对账)：<span class="sumUnPayedMoney"></span></label>\r\n            </div>\r\n        </form>\r\n        <div class="form-inline globalAdd T-summary">\r\n            <div class="form-group">\r\n                <label class="control-label">本次收款金额合计：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="sumPayMoney" class="money" {{if type}}disabled {{/if}}>\r\n                </label>\r\n            </div>\r\n\r\n            {{if !btnShowStatus}} \r\n            <div class="form-group mar-l-10">\r\n                <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n            </div>\r\n            {{/if}}\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">收款方式：</label>\r\n                <select class="form-control T-sumPayType" name="sumPayType">\r\n                    {{getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" class="money" value="{{bankNumber}}" style="width:300px;">\r\n                    <input type="hidden" name="card-id" value="{{bankId}}">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number" value="{{voucher}}">\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-l-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" style="width:140px;" value="{{billTime}}">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="sumRemark" value="{{sumPayRemark}}" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n        <table class="table table-striped table-bordered table-hover all margin-top">\r\n            <thead>\r\n            <tr>\r\n                 <th class=\'th-border\'>线路产品</th>\r\n                 <th class=\'th-border\'>出游日期</th>\r\n                 <th class=\'th-border\'>联系人</th>\r\n                 <th class=\'th-border\'>人数</th>\r\n                 <th class=\'th-border\'>接收人</th>\r\n                 <th class=\'th-border\'>接收时间</th>\r\n                 <th class=\'th-border\'>内转转入</th>\r\n                 <th class=\'th-border\'>明细</th>\r\n                 <th class=\'th-border\'>已收金额</th>\r\n                 <th class=\'th-border\'>返款金额</th>\r\n                 <th class=\'th-border\'>结算金额</th>\r\n                 <th class=\'th-border\'>未收金额</th>\r\n                 <th class=\'th-border\'>本次收款金额</th>\r\n                 <th class=\'th-border\'>备注</th>\r\n                 <th class=\'th-border\'>对账时间</th>\r\n                 <th class=\'th-border\'>对账人</th>\r\n                 <th class=\'th-border\'>对账</th>  \r\n            </tr>\r\n            </thead>   \r\n            <tbody class="T-clearList" data-right="1360005">\r\n            {{each innerTransferIncomeDetailsList as checking index}}\r\n           <tr data-id={{checking.id}} data-entity-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" data-entity-isComfirmAccount="{{checking.isConfirmAccount}}" data-entity-UnIncomeMoney="{{checking.checkUnIncomeMoney}}" data-entity-backMoney="{{checking.backMoney}}" data-entity-remark="{{checking.checkRemark}}">\r\n                <td>{{checking.lineProductName}}</td>\r\n                <td name="startTime">{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{checking.contactUserName}}</td>\r\n                <td>{{checking.adultCount}}大{{checking.childCount}}小<a href="#" class="T-seeGroup" style="margin-left:5px">展开</a></td>\r\n                <td>{{checking.receiveUserName}}</td>\r\n                <td>{{if checking.receiveTime != null}}{{checking.receiveTime | dateFormat: \'yyyy-MM-dd\'}}{{else}}-{{/if}}</td>\r\n                <td>{{checking.transInMoney}}</td>\r\n                <td>\r\n                    大人:{{checking.transAdultPrice}}*{{checking.transAdultCount}}={{checking.transAdultPrice*checking.transAdultCount}}<br>\r\n                    小孩:{{checking.transChildPrice}}*{{checking.transChildCount}}={{checking.transChildPrice*checking.transChildCount}}<br>\r\n                    {{if checking.transferFeeList.length>0}}\r\n                        {{each checking.transferFeeList as detail}}\r\n                            {{detail.discribe}}：{{detail.count}}*{{detail.price}}={{detail.count*detail.price}}<br> \r\n                        {{/each}} \r\n                        {{else}}\r\n                        -\r\n                    {{/if}} \r\n                </td>\r\n                <td><a href="javascript:void(0)" class="T-viewDetail"><span>社收:{{checking.transGetedMoney}},导游现收:{{checking.currentNeedPayMoney}}</span></a></td>\r\n                <td>{{checking.backMoney}}</td>\r\n                <td>{{checking.settlementMoney}}</td>\r\n                <td>{{checking.unIncomeMoney}}</td>\r\n                <td><input type="text" maxlength="9"  class="money" value="{{checking.payMoney}}" data-le="{{checking.unIncomeMoney}}" name="payMoney" style="text-align:center" \r\n                {{if !btnShowStatus && checking.unIncomeMoney <= 0}} disabled {{/if}}></td>\r\n                <td><input type="text" maxlength="9" name="payRemark" value="{{checking.incomeRemark}}" style="text-align:center"\r\n                {{if !btnShowStatus && checking.unIncomeMoney <= 0}} disabled {{/if}}></td>\r\n                <td>{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if checking.checkUserName == null || checking.checkUserName == ""}}-{{else}}{{checking.checkUserName}}{{/if}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        {{if checking.isConfirmAccount == 1}}\r\n                          已对账\r\n                          {{else}}\r\n                          未对账\r\n                        {{/if}}\r\n                    </label>\r\n                    <label>\r\n                        <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a>\r\n                    </label>\r\n                </td>\r\n            </tr>\r\n            <tr class="hide">\r\n                <td colspan="17">\r\n                    <table class="table table-striped table-bordered table-hover">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border">序号</th>\r\n                                    <th class="th-border">姓名</th>\r\n                                    <th class="th-border">联系电话</th>\r\n                                    <th class="th-border">证件类型</th>\r\n                                    <th class="th-border">证件号</th>\r\n                                    <th class="th-border">是否联系人</th>\r\n                                </tr>\r\n                            </thead>  \r\n                            <tbody>\r\n                               {{each checking.tgMemberList as visitor index}}\r\n                                <tr>\r\n                                    <td>{{index+1}}</td>\r\n                                    <td>{{visitor.name}}</td>\r\n                                    <td>{{visitor.mobileNumber}}</td>\r\n                                    <td>{{if visitor.idCardType == 0}}身份证{{/if}}{{if visitor.idCardType == 1}}护照{{/if}}{{if visitor.idCardType == 2}}其他{{/if}}</td>\r\n                                    <td>{{visitor.idCardNumber}}</td>\r\n                                    <td>{{if visitor.isContactUser == 1}}是{{/if}}</td>\r\n                                </tr>\r\n                              {{/each}} \r\n                            </tbody>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n         </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="clearfix"></div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary btn-createTripPlan T-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary   T-incomeMoney">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                     确认收款\r\n                </button>\r\n            </div>\r\n        </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});