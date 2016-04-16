/*TMODJS:{"debug":true,"version":262,"md5":"7c219c588d0de2f7b423367a76ecd6c9"}*/
define(function(require) {
    return require("../../../template")("financial/Self/view/SelfClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, selfPayName = $data.selfPayName, sumData = $data.sumData, sumPayMoney = $data.sumPayMoney, showBtnFlag = $data.showBtnFlag, isAutoPay = $data.isAutoPay, $string = $utils.$string, sumPayType = $data.sumPayType, bankNo = $data.bankNo, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, list = $data.list, recordSize = ($data.rs, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.selfPayId), 
            $out += '" data-name="', $line = 1, $out += $escape(selfPayName), $out += '"> <div class="col-sm-12"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label>自费商家：</label> <input type="text" name="selfPayName" class="T-selfPayName mar-r-10" value="', 
            $line = 7, $out += $escape(selfPayName), $out += '" > <input type="hidden" name="selfPayId" value="', 
            $line = 8, $out += $escape(searchParam.selfPayId), $out += '"> <label>账期：</label> <input class="date-picker T-time" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 10, $out += $escape($helpers.dateFormat(searchParam.startTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker T-time mar-r-10" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 12, $out += $escape($helpers.dateFormat(searchParam.endTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label>团信息：</label> <input name="tripInfo" class="mar-r-10" placeholder="团信息" type="text" value="', 
            $line = 14, $out += $escape(searchParam.tripInfo), $out += '" style="width:200px;" /> <label>对账状态：</label> <div class="btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 17, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 19, searchParam.isConfirmAccount && "" !== searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 23) : ($out += " 未对账 ", $line = 25) : ($out += " 全部 ", $line = 21), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <label>对账时间：</label> <input class="date-picker T-checkTime T-checkStartTime" placeholder="开始日期" type="text" value="', 
            $line = 36, $out += $escape(searchParam.startCheck), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker T-checkTime mar-r-10 T-checkEndTime" value="', 
            $line = 38, $out += $escape(searchParam.endCheck), $out += '" placeholder="结束日期" type="text" style="width:100px;" /> <button class="btn-height btn-sm search-btn T-search"> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> <input name="accountStatus" value="', 
            $line = 44, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group globalAdd T-count"> <label class="mar-r-20">账面应付合计：', 
            $line = 49, $out += $escape(sumData.needPayMoney), $out += '元 </label> <label class="mar-r-20">已付金额合计：<span class="F-float F-money">', 
            $line = 50, $out += $escape(sumData.payedMoney), $out += ' </span></label> <label class="mar-r-20">结算金额合计：<span class="F-float F-money">', 
            $line = 51, $out += $escape(sumData.settlementMoney), $out += '</span></label> <label class="mar-r-20">未付金额合计：<span class="F-float F-money">', 
            $line = 52, $out += $escape(sumData.unPayedMoney), $out += '</span></label> <label >未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">', 
            $line = 53, $out += $escape(sumData.unPayedMoneyConfirmed), $out += '</span></label> </div> </form> <div class="form-inline row globalAdd T-summary"> <div class="form-group mar-r-20"> <label class="control-label">本次付款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="money F-float F-money" value="', 
            $line = 61, $out += $escape(sumPayMoney), $out += '" ', $line = 61, (1 == showBtnFlag || 0 != isAutoPay) && ($out += 'readonly="true"', 
            $line = 61), $out += " > </label> </div> ", $line = 65, showBtnFlag || ($out += ' <div class="form-group mar-r-20"> ', 
            $line = 67, 0 == isAutoPay ? ($out += ' <button class="btn btn-primary T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> ', 
            $line = 71) : 1 == isAutoPay && ($out += ' <button class="btn btn-warning T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> ', 
            $line = 75), $out += " </div> ", $line = 77), $out += ' <div class="form-group mar-r-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 82, $out += $string($helpers.getPayTypeOptions(sumPayType)), $out += ' </select> </div> <div class="form-group mar-r-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" ', 
            $line = 89, 0 == sumPayType && ($out += 'value="', $line = 89, $out += $escape(bankNo), 
            $out += '"', $line = 89), $out += ' class="money" style="width:300px;"> <input type="hidden" name="cash-id" ', 
            $line = 90, 0 == sumPayType && ($out += 'value="', $line = 90, $out += $escape(bankId), 
            $out += '"', $line = 90), $out += '/> </label> </div> <div class="form-group mar-r-10 T-bankDiv"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" ', 
            $line = 96, 0 != sumPayType && ($out += 'value="', $line = 96, $out += $escape(bankNo), 
            $out += '"', $line = 96), $out += ' class="money" style="width:300px;"> <input type="hidden" name="card-id" ', 
            $line = 97, 0 != sumPayType && ($out += 'value="', $line = 97, $out += $escape(bankId), 
            $out += '"', $line = 97), $out += ' /> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 103, $out += $escape(voucher), $out += '" /> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" value="', 
            $line = 109, $out += $escape(billTime), $out += '" style="width:140px;"> </label> </div> </div> <div class="form-group row"> <label class="control-label">备注：</label> <label class="control-label"> <input name="sumPayRemark" type="text" value="', 
            $line = 117, $out += $escape(sumPayRemark), $out += '" style="width:900px;"> </label> </div> </div> <input type="hidden" name="isAutoPay" value="', 
            $line = 121, $out += $escape(isAutoPay), $out += '" /> <table class="table table-striped table-bordered table-hover all margin-top hct_align_middle"> <thead> <tr class="T-tr-fixed bg-blur"> <th>团信息</th> <th>消费日期(账期)</th> <th>自费项目</th> <th>底价</th> <th>数量</th> <th>优惠</th> <th>账面应付</th> <th>已付金额</th> <th>单据</th> <th>结算金额</th> <th>未付金额</th> <th> <span class="necessary">*</span>本次付款金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th width="100">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 144, $each(list, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 145, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 145, $out += $escape(rs.isConfirmAccount), $out += '"> <td>', 
                $line = 146, null != rs.tripNumber && "" != rs.tripNumber && ($line = 146, $out += $escape(rs.tripNumber), 
                $out += " ", $line = 147, (rs.lineProductName || rs.guideName) && ($out += "，", 
                $line = 147), $out += " ", $line = 148), $out += " ", $line = 149, null != rs.lineProductName && "" != rs.lineProductName && ($line = 149, 
                $out += $escape(rs.lineProductName), $out += " ", $line = 150, rs.guideName && ($out += "，", 
                $line = 150), $out += " ", $line = 151), $out += " ", $line = 152, null != rs.guideName && "" != rs.guideName && ($line = 152, 
                $out += $escape(rs.guideName), $line = 152), $out += " </td> <td>", $line = 154, 
                null == rs.accountTime || "" == rs.accountTime ? ($out += "-", $line = 154) : ($line = 154, 
                $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), $line = 154), 
                $out += "</td> <td>", $line = 155, $out += $escape(rs.itemName), $out += '</td> <td class="F-float F-money">', 
                $line = 156, $out += $escape(rs.lowestPrice), $out += '</td> <td class="F-float F-count">', 
                $line = 157, $out += $escape(rs.realCount), $out += '</td> <td class="F-float F-money">', 
                $line = 158, $out += $escape(rs.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 159, $out += $escape(rs.needPayMoney), $out += '</td> <td class="align-left"> <a class="T-option T-payedDetail" data-money="', 
                $line = 161, $out += $escape(rs.payedMoney + rs.guidePayMoney), $out += '"> <span class="in-block">', 
                $line = 162, $out += $escape("社付："), $out += '<span class="F-float F-money">', $line = 162, 
                $out += $escape(rs.payedMoney), $out += '</span></span> <span class="in-block">', 
                $line = 163, $out += $escape("导付："), $out += '<span class="F-float F-money">', $line = 163, 
                $out += $escape(rs.guidePayMoney), $out += "</span></span> </a> </td> <td>", $line = 166, 
                null != rs.billImage && "" != rs.billImage ? ($out += '<a class="T-option T-selfPayImg" url="', 
                $line = 166, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 166) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 166), $out += '</td> <td class="F-float F-money">', $line = 167, $out += $escape(rs.settlementMoney), 
                $out += '</td> <td class="F-float F-money">', $line = 168, $out += $escape(rs.unPayedMoney), 
                $out += '</td> <td><input name="payMoney" class="money F-float F-money" type="text" value="', 
                $line = 169, $out += $escape(rs.payMoney), $out += '" maxlength="9"/></td> <td><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000">', 
                $line = 170, $out += $escape(rs.payRemark), $out += "</textarea></td> <td>", $line = 171, 
                null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 171) : ($line = 171, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 171), 
                $out += "</td> <td>", $line = 172, null == rs.checkUser || "" == rs.checkUser ? ($out += "-", 
                $line = 172) : ($line = 172, $out += $escape(rs.checkUser), $line = 172), $out += "</td> <td>", 
                $line = 173, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 173) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 173), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 178;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 183, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i>确认付款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.selfPayId}}" data-name="{{selfPayName}}">\r\n    <div class="col-sm-12">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area">\r\n                <div class="form-group">\r\n                    <label>自费商家：</label>\r\n                    <input type="text" name="selfPayName" class="T-selfPayName mar-r-10" value="{{selfPayName}}" >\r\n                    <input type="hidden" name="selfPayId" value="{{searchParam.selfPayId}}">\r\n                    <label>账期：</label>\r\n                    <input class="date-picker T-time" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker T-time mar-r-10" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />\r\n                    <label>团信息：</label>\r\n                    <input name="tripInfo" class="mar-r-10" placeholder="团信息" type="text" value="{{searchParam.tripInfo}}" style="width:200px;" />\r\n                    <label>对账状态：</label>\r\n                    <div class="btn-group T-check-status mar-r-10">\r\n                        <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                            <span>\r\n                                {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount === ""}}\r\n                                    全部\r\n                                {{else if searchParam.isConfirmAccount == 1}}\r\n                                    已对账\r\n                                {{else}}\r\n                                    未对账\r\n                                {{/if}}\r\n                            </span>\r\n                            <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                        </button>\r\n                        <ul class="dropdown-menu">\r\n                            <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                            <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                            <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <label>对账时间：</label>\r\n                    <input class="date-picker T-checkTime T-checkStartTime" placeholder="开始日期" type="text" value="{{searchParam.startCheck}}" style="width:100px;" />\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker T-checkTime mar-r-10 T-checkEndTime" value="{{searchParam.endCheck}}" placeholder="结束日期" type="text" style="width:100px;" />\r\n\r\n                    <button class="btn-height btn-sm search-btn T-search">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                </div>\r\n                <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group globalAdd T-count">\r\n                <label class="mar-r-20">账面应付合计：{{sumData.needPayMoney}}元 </label>\r\n                <label class="mar-r-20">已付金额合计：<span class="F-float F-money">{{sumData.payedMoney}} </span></label>\r\n                <label class="mar-r-20">结算金额合计：<span class="F-float F-money">{{sumData.settlementMoney}}</span></label>\r\n                <label class="mar-r-20">未付金额合计：<span class="F-float F-money">{{sumData.unPayedMoney}}</span></label>\r\n                <label >未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">{{sumData.unPayedMoneyConfirmed}}</span></label>\r\n            </div>\r\n        </form>\r\n\r\n        <div class="form-inline row globalAdd T-summary">\r\n            <div class="form-group mar-r-20">\r\n                <label class="control-label">本次付款金额合计：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="sumPayMoney" class="money F-float F-money"  value="{{sumPayMoney}}"  {{if showBtnFlag == true || isAutoPay != 0}}readonly="true"{{/if}} >\r\n                </label>\r\n            </div>\r\n                \r\n            {{if !showBtnFlag}}\r\n            <div class="form-group mar-r-20">\r\n                {{if isAutoPay == 0}}\r\n                <button class="btn btn-primary T-clear-auto">\r\n                    <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                </button>\r\n                {{else if isAutoPay == 1}}\r\n                <button class="btn btn-warning T-cancel-auto">\r\n                    <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n                </button>\r\n                {{/if}}\r\n            </div>\r\n            {{/if}}\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select class="form-control T-sumPayType" name="sumPayType">\r\n                    {{#sumPayType | getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">现金账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="cash-number" {{if sumPayType == 0}}value="{{bankNo}}"{{/if}} class="money" style="width:300px;">\r\n                    <input type="hidden" name="cash-id" {{if sumPayType == 0}}value="{{bankId}}"{{/if}}/>\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10 T-bankDiv">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" {{if sumPayType != 0}}value="{{bankNo}}"{{/if}} class="money" style="width:300px;">\r\n                    <input type="hidden" name="card-id" {{if sumPayType != 0}}value="{{bankId}}"{{/if}} />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number" value="{{voucher}}" />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" value="{{billTime}}" style="width:140px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group  row">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input name="sumPayRemark" type="text" value="{{sumPayRemark}}" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <input type="hidden" name="isAutoPay" value="{{isAutoPay}}" />\r\n    <table class="table table-striped table-bordered table-hover all margin-top hct_align_middle">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>团信息</th>\r\n                <th>消费日期(账期)</th>\r\n                <th>自费项目</th>\r\n                <th>底价</th>\r\n                <th>数量</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>已付金额</th>\r\n                <th>单据</th>\r\n                <th>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th> <span class="necessary">*</span>本次付款金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th width="100">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each list as rs index}}\r\n            <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}">\r\n                <td>{{if rs.tripNumber !=null && rs.tripNumber != ""}}{{rs.tripNumber}}\r\n                        {{if rs.lineProductName || rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.lineProductName != null && rs.lineProductName != ""}}{{rs.lineProductName}}\r\n                        {{if rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.guideName != null && rs.guideName != ""}}{{rs.guideName}}{{/if}}\r\n                </td>\r\n                <td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{rs.itemName}}</td>\r\n                <td class="F-float F-money">{{rs.lowestPrice}}</td>\r\n                <td class="F-float F-count">{{rs.realCount}}</td>\r\n                <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n                <td class="align-left">\r\n                    <a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.guidePayMoney}}">\r\n                        <span class="in-block">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span></span>\r\n                        <span class="in-block">{{"导付："}}<span class="F-float F-money">{{rs.guidePayMoney}}</span></span>\r\n                    </a>\r\n                </td>\r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a class="T-option T-selfPayImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td class="F-float F-money">{{rs.settlementMoney}}</td>\r\n                <td class="F-float F-money">{{rs.unPayedMoney}}</td>\r\n                <td><input name="payMoney" class="money F-float F-money" type="text" value="{{rs.payMoney}}" maxlength="9"/></td>\r\n                <td><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000">{{rs.payRemark}}</textarea></td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUser == null || rs.checkUser == ""}}-{{else}}{{rs.checkUser}}{{/if}}</td>\r\n                <td>{{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});