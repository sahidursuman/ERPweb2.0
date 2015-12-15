/*TMODJS:{"debug":true,"version":191,"md5":"d6ba6ba11963fc43b9773d4da2187fc9"}*/
define(function(require) {
    return require("../../../../../template")("js/template/financial/innerTransferIn/view/innerTransferInClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, btnShowStatus = $data.btnShowStatus, $each = $utils.$each, innerTransferIncomeDetailsList = $data.innerTransferIncomeDetailsList, recordSize = ($data.checking, 
            $data.index, $data.detail, $data.$index, $data.visitor, $data.recordSize), $out = "";
            return $out += '<div class="row innerTransferChecking globalAdd"> <div> <div class="T-search"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label class="control-label pull-left" style="margin-left: 0px;">部门:</label> <span>', 
            $line = 7, $out += $escape(searchParam.businessGroupName), $out += '</span> <input type="hidden" value="', 
            $line = 8, $out += $escape(searchParam.businessGroupId), $out += '" name="businessGroupId"> <input type="hidden" value="', 
            $line = 9, $out += $escape(searchParam.businessGroupName), $out += '" name="businessGroupName"> <label class="control-label" style="margin-left:30px;">账期: <input type="text" style="width:100px;" class="date-picker" name="startDate" value="', 
            $line = 11, $out += $escape(searchParam.startAccountTime), $out += '"/> <span>&nbsp;至&nbsp;</span> <input type="text" style="width:100px;" class="date-picker" name="endDate" value="', 
            $line = 13, $out += $escape(searchParam.endAccountTime), $out += '"/> </label> <label class="control-label" style="margin-left:30px;">线路名称: <input type="text" name="lineProductName" value="', 
            $line = 16, $out += $escape(searchParam.lineProductName), $out += '"/> <input type="hidden" name="lineProductId" value="', 
            $line = 17, $out += $escape(searchParam.lineProductId), $out += '" /> </label> <label class="control-label" style="margin-left:30px;">接收人: <input type="text" name="receiveUserName" value="', 
            $line = 20, $out += $escape(searchParam.receiveUserName), $out += '" /> <input type="hidden" name="receiveUserId" value="', 
            $line = 21, $out += $escape(searchParam.receiveUserId), $out += '"/> </label> <button class="marginLeft-30 btn-sm search-btn T-checking-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button>  </div> </form> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group T-count"> <label class=" control-label pull-left" style="margin-left: 15px">人数合计:<span class="sumTransCount"></span><label> <label class=" control-label " style="margin-left:30px;">合同金额合计:<span class="sumTransNeedPayMoney"></span></label> <label class=" control-label " style="margin-left:30px;">已收金额合计:<span class="sumPayedMoney"></span></label> <label class=" control-label " style="margin-left:30px;">返款金额合计:<span class="sumPunishMoney"></span></label> <label class=" control-label " style="margin-left:30px;">结算金额合计:<span class="sumSettlementMoney"></span></label> <label class=" control-label " style="margin-left:30px;">未收金额合计:<span class="sumUnPayedMoney"></span></label> <label class=" control-label " style="margin-left:30px;">本次收款金额:<input type="text" name="sumPayMoney"/></label> <label class=" control-label " style="margin-left:30px;">收款方式： <select name="sumPayType"> <option value="0">现金</option> <option value="1">银行转账</option> <option value="2">网上支付</option> <option value="3">支票</option> <option value="4">其他</option> </select> </label> <label class=" control-label " style="margin-left:30px;">备注:<input type="text" name="sumRemark"/></label> ', 
            $line = 55, btnShowStatus || ($out += ' <label class=" control-label " style="margin-left:30px;"> <button class="btn btn-xs btn-primary T-btn-autofill" style="margin-left:15px;"> <i class="ace-icon fa fa-check-circle"></i>自动下账 </button> </label> ', 
            $line = 63), $out += " </div> </form> </div> <div class=\"clearfix\"></div> <table class=\"table table-striped table-bordered table-hover all margin-top\"> <thead> <tr> <th class='th-border'>线路产品</th> <th class='th-border'>出游日期</th> <th class='th-border'>联系人</th> <th class='th-border'>人数</th> <th class='th-border'>接收人</th> <th class='th-border'>接收时间</th> <th class='th-border'>内转转入</th> <th class='th-border'>明细</th> <th class='th-border'>已收金额</th> <th class='th-border'>返款金额</th> <th class='th-border'>结算金额</th> <th class='th-border'>未收金额</th> <th class='th-border'>本次收款金额</th> <th class='th-border'>备注</th> <th class='th-border'>对账时间</th> <th class='th-border'>对账人</th> <th class='th-border'>对账</th> </tr> </thead> <tbody class=\"T-clearList\" data-right=\"1360005\"> ", 
            $line = 91, $each(innerTransferIncomeDetailsList, function(checking) {
                $out += " <tr data-id=", $line = 92, $out += $escape(checking.id), $out += ' data-entity-id="', 
                $line = 92, $out += $escape(checking.id), $out += '" data-entity-createTime="', 
                $line = 92, $out += $escape(checking.createTime), $out += '" data-entity-isComfirmAccount="', 
                $line = 92, $out += $escape(checking.isConfirmAccount), $out += '" data-entity-UnIncomeMoney="', 
                $line = 92, $out += $escape(checking.checkUnIncomeMoney), $out += '" data-entity-backMoney="', 
                $line = 92, $out += $escape(checking.backMoney), $out += '" data-entity-remark="', 
                $line = 92, $out += $escape(checking.checkRemark), $out += '"> <td>', $line = 93, 
                $out += $escape(checking.lineProductName), $out += '</td> <td name="startTime">', 
                $line = 94, $out += $escape($helpers.dateFormat(checking.accountTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 95, $out += $escape(checking.contactUserName), $out += "</td> <td>", 
                $line = 96, $out += $escape(checking.adultCount), $out += "大", $line = 96, $out += $escape(checking.childCount), 
                $out += '小<a href="#" class="T-seeGroup" style="margin-left:5px">展开</a></td> <td>', 
                $line = 97, $out += $escape(checking.receiveUserName), $out += "</td> <td>", $line = 98, 
                null != checking.receiveTime ? ($line = 98, $out += $escape($helpers.dateFormat(checking.receiveTime, "yyyy-MM-dd")), 
                $line = 98) : ($out += "-", $line = 98), $out += "</td> <td>", $line = 99, $out += $escape(checking.transInMoney), 
                $out += "</td> <td> 大人:", $line = 101, $out += $escape(checking.transAdultPrice), 
                $out += "*", $line = 101, $out += $escape(checking.transAdultCount), $out += "=", 
                $line = 101, $out += $escape(checking.transAdultPrice * checking.transAdultCount), 
                $out += "<br> 小孩:", $line = 102, $out += $escape(checking.transChildPrice), $out += "*", 
                $line = 102, $out += $escape(checking.transChildCount), $out += "=", $line = 102, 
                $out += $escape(checking.transChildPrice * checking.transChildCount), $out += "<br> ", 
                $line = 103, checking.transferFeeList.length > 0 ? ($out += " ", $line = 104, $each(checking.transferFeeList, function(detail) {
                    $out += " ", $line = 105, $out += $escape(detail.discribe), $out += "：", $line = 105, 
                    $out += $escape(detail.count), $out += "*", $line = 105, $out += $escape(detail.price), 
                    $out += "=", $line = 105, $out += $escape(detail.count * detail.price), $out += "<br> ", 
                    $line = 106;
                }), $out += " ", $line = 107) : ($out += " - ", $line = 109), $out += ' </td> <td><a href="javascript:void(0)" class="T-viewDetail"><span>社收:', 
                $line = 111, $out += $escape(checking.transGetedMoney), $out += ",导游现收:0</span></a></td> <td>", 
                $line = 112, $out += $escape(checking.backMoney), $out += "</td> <td>", $line = 113, 
                $out += $escape(checking.settlementMoney), $out += "</td> <td>", $line = 114, $out += $escape(checking.unIncomeMoney), 
                $out += '</td> <td><input type="text" maxlength="1000" name="payMoney" value="', 
                $line = 115, $out += $escape(checking.payMoney), $out += '" style="text-align:center"></td> <td><input type="text" maxlength="9" name="incomeRemark" value="', 
                $line = 116, $out += $escape(checking.incomeRemark), $out += '" style="text-align:center"></td> <td>', 
                $line = 117, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 117) : ($line = 117, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 117), $out += "</td> <td>", $line = 118, null == checking.checkUserRealName || "" == checking.checkUserRealName ? ($out += "-", 
                $line = 118) : ($line = 118, $out += $escape(checking.checkUserRealName), $line = 118), 
                $out += '</td> <td> <label class="pos-rel"> ', $line = 121, 1 == checking.isConfirmAccount ? ($out += " 已对账 ", 
                $line = 123) : ($out += " 未对账 ", $line = 125), $out += " </label> ", $line = 127, 
                1 == checking.isConfirmAccount && ($out += ' <label> <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a> </label> ', 
                $line = 131), $out += ' </td> </tr> <tr class="hide"> <td colspan="17"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">是否联系人</th> </tr> </thead> <tbody> ', 
                $line = 148, $each(checking.tgMemberList, function(visitor, index) {
                    $out += " <tr> <td>", $line = 150, $out += $escape(index + 1), $out += "</td> <td>", 
                    $line = 151, $out += $escape(visitor.name), $out += "</td> <td>", $line = 152, $out += $escape(visitor.mobileNumber), 
                    $out += "</td> <td>", $line = 153, 0 == visitor.idCardType && ($out += "身份证", $line = 153), 
                    $line = 153, 1 == visitor.idCardType && ($out += "护照", $line = 153), $line = 153, 
                    2 == visitor.idCardType && ($out += "其他", $line = 153), $out += "</td> <td>", $line = 154, 
                    $out += $escape(visitor.idCardNumber), $out += "</td> <td>", $line = 155, 1 == visitor.isContactUser && ($out += "是", 
                    $line = 155), $out += "</td> </tr> ", $line = 157;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 162;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 167, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <div class="clearfix"></div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-createTripPlan T-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-incomeMoney"> <i class="ace-icon fa fa-check-circle"></i> 确认收款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row innerTransferChecking globalAdd">\r\n    <div>\r\n         <div class="T-search">\r\n            <form class="form-inline" role="form" onsubmit="return false">\r\n                    <div class="form-group">\r\n                    <label  class="control-label pull-left" style="margin-left: 0px;">部门:</label>\r\n                    <span>{{searchParam.businessGroupName}}</span>\r\n                    <input type="hidden" value="{{searchParam.businessGroupId}}" name="businessGroupId">\r\n                    <input type="hidden" value="{{searchParam.businessGroupName}}" name="businessGroupName"> \r\n                    <label class="control-label" style="margin-left:30px;">账期:\r\n                      <input type="text" style="width:100px;" class="date-picker" name="startDate" value="{{searchParam.startAccountTime}}"/>\r\n                      <span>&nbsp;至&nbsp;</span>\r\n                      <input type="text" style="width:100px;" class="date-picker" name="endDate" value="{{searchParam.endAccountTime}}"/>\r\n                    </label>\r\n                    <label class="control-label" style="margin-left:30px;">线路名称:\r\n                      <input type="text" name="lineProductName" value="{{searchParam.lineProductName}}"/>\r\n                      <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}" />\r\n                    </label>\r\n                    <label class="control-label" style="margin-left:30px;">接收人:\r\n                    <input type="text" name="receiveUserName" value="{{searchParam.receiveUserName}}" />\r\n                    <input type="hidden" name="receiveUserId" value="{{searchParam.receiveUserId}}"/>\r\n                    \r\n                      \r\n                    </label> \r\n                    <button class="marginLeft-30 btn-sm search-btn T-checking-search" >\r\n                         <i class="ace-icon fa fa-search"></i>\r\n                             搜索\r\n                    </button>   \r\n                        <!-- <button type="button" class="btn btn-sm marginLeft-30 btn-primary btn-success btn-transferExport">\r\n                            <span>导出报表</span>\r\n                            <i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n                        </button> -->\r\n                    </div>\r\n            </form>\r\n        </div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group T-count">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">人数合计:<span class="sumTransCount"></span><label>\r\n                <label class=" control-label " style="margin-left:30px;">合同金额合计:<span class="sumTransNeedPayMoney"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">已收金额合计:<span class="sumPayedMoney"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">返款金额合计:<span class="sumPunishMoney"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">结算金额合计:<span class="sumSettlementMoney"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">未收金额合计:<span class="sumUnPayedMoney"></span></label>\r\n                <label class=" control-label " style="margin-left:30px;">本次收款金额:<input type="text" name="sumPayMoney"/></label>\r\n                <label class=" control-label " style="margin-left:30px;">收款方式：\r\n                    <select name="sumPayType">\r\n                        <option value="0">现金</option>\r\n                        <option value="1">银行转账</option>\r\n                        <option value="2">网上支付</option>\r\n                        <option value="3">支票</option>\r\n                        <option value="4">其他</option>\r\n                    </select>\r\n                </label>\r\n                <label class=" control-label " style="margin-left:30px;">备注:<input type="text" name="sumRemark"/></label>\r\n                {{if !btnShowStatus}} \r\n                <label class=" control-label " style="margin-left:30px;">\r\n                                   \r\n                    <button class="btn btn-xs btn-primary T-btn-autofill" style="margin-left:15px;">\r\n                    <i class="ace-icon fa fa-check-circle"></i>自动下账\r\n                    </button>\r\n                \r\n                </label>\r\n                {{/if}}\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n        <table class="table table-striped table-bordered table-hover all margin-top">\r\n            <thead>\r\n            <tr>\r\n                 <th class=\'th-border\'>线路产品</th>\r\n                 <th class=\'th-border\'>出游日期</th>\r\n                 <th class=\'th-border\'>联系人</th>\r\n                 <th class=\'th-border\'>人数</th>\r\n                 <th class=\'th-border\'>接收人</th>\r\n                 <th class=\'th-border\'>接收时间</th>\r\n                 <th class=\'th-border\'>内转转入</th>\r\n                 <th class=\'th-border\'>明细</th>\r\n                 <th class=\'th-border\'>已收金额</th>\r\n                 <th class=\'th-border\'>返款金额</th>\r\n                 <th class=\'th-border\'>结算金额</th>\r\n                 <th class=\'th-border\'>未收金额</th>\r\n                 <th class=\'th-border\'>本次收款金额</th>\r\n                 <th class=\'th-border\'>备注</th>\r\n                 <th class=\'th-border\'>对账时间</th>\r\n                 <th class=\'th-border\'>对账人</th>\r\n                 <th class=\'th-border\'>对账</th>  \r\n            </tr>\r\n            </thead>   \r\n            <tbody class="T-clearList" data-right="1360005">\r\n            {{each innerTransferIncomeDetailsList as checking index}}\r\n           <tr data-id={{checking.id}} data-entity-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" data-entity-isComfirmAccount="{{checking.isConfirmAccount}}" data-entity-UnIncomeMoney="{{checking.checkUnIncomeMoney}}" data-entity-backMoney="{{checking.backMoney}}" data-entity-remark="{{checking.checkRemark}}">\r\n                <td>{{checking.lineProductName}}</td>\r\n                <td name="startTime">{{checking.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{checking.contactUserName}}</td>\r\n                <td>{{checking.adultCount}}大{{checking.childCount}}小<a href="#" class="T-seeGroup" style="margin-left:5px">展开</a></td>\r\n                <td>{{checking.receiveUserName}}</td>\r\n                <td>{{if checking.receiveTime != null}}{{checking.receiveTime | dateFormat: \'yyyy-MM-dd\'}}{{else}}-{{/if}}</td>\r\n                <td>{{checking.transInMoney}}</td>\r\n                <td>\r\n                    大人:{{checking.transAdultPrice}}*{{checking.transAdultCount}}={{checking.transAdultPrice*checking.transAdultCount}}<br>\r\n                    小孩:{{checking.transChildPrice}}*{{checking.transChildCount}}={{checking.transChildPrice*checking.transChildCount}}<br>\r\n                    {{if checking.transferFeeList.length>0}}\r\n                        {{each checking.transferFeeList as detail}}\r\n                            {{detail.discribe}}：{{detail.count}}*{{detail.price}}={{detail.count*detail.price}}<br> \r\n                        {{/each}} \r\n                        {{else}}\r\n                        -\r\n                    {{/if}} \r\n                </td>\r\n                <td><a href="javascript:void(0)" class="T-viewDetail"><span>社收:{{checking.transGetedMoney}},导游现收:0</span></a></td>\r\n                <td>{{checking.backMoney}}</td>\r\n                <td>{{checking.settlementMoney}}</td>\r\n                <td>{{checking.unIncomeMoney}}</td>\r\n                <td><input type="text" maxlength="1000"  name="payMoney" value="{{checking.payMoney}}" style="text-align:center"></td>\r\n                <td><input type="text" maxlength="9" name="incomeRemark" value="{{checking.incomeRemark}}" style="text-align:center"></td>\r\n                <td>{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if checking.checkUserRealName == null || checking.checkUserRealName == ""}}-{{else}}{{checking.checkUserRealName}}{{/if}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        {{if checking.isConfirmAccount == 1}}\r\n                          已对账\r\n                          {{else}}\r\n                          未对账\r\n                        {{/if}}\r\n                    </label>\r\n                    {{if checking.isConfirmAccount == 1}}\r\n                        <label>\r\n                            <a href="#" class="T-check-Detail" style="margin-left:5px">查看</a>\r\n                        </label>\r\n                    {{/if}}\r\n                </td>\r\n            </tr>\r\n            <tr class="hide">\r\n                <td colspan="17">\r\n                    <table class="table table-striped table-bordered table-hover">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border">序号</th>\r\n                                    <th class="th-border">姓名</th>\r\n                                    <th class="th-border">联系电话</th>\r\n                                    <th class="th-border">证件类型</th>\r\n                                    <th class="th-border">证件号</th>\r\n                                    <th class="th-border">是否联系人</th>\r\n                                </tr>\r\n                            </thead>  \r\n                            <tbody>\r\n                               {{each checking.tgMemberList as visitor index}}\r\n                                <tr>\r\n                                    <td>{{index+1}}</td>\r\n                                    <td>{{visitor.name}}</td>\r\n                                    <td>{{visitor.mobileNumber}}</td>\r\n                                    <td>{{if visitor.idCardType == 0}}身份证{{/if}}{{if visitor.idCardType == 1}}护照{{/if}}{{if visitor.idCardType == 2}}其他{{/if}}</td>\r\n                                    <td>{{visitor.idCardNumber}}</td>\r\n                                    <td>{{if visitor.isContactUser == 1}}是{{/if}}</td>\r\n                                </tr>\r\n                              {{/each}} \r\n                            </tbody>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n         </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="clearfix"></div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary btn-createTripPlan T-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary   T-incomeMoney">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                     确认收款\r\n                </button>\r\n            </div>\r\n        </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});