/*TMODJS:{"debug":true,"version":259,"md5":"adee4c01a33c12166561f9af62066de3"}*/
define(function(require) {
    return require("../../../template")("financial/hotel/view/hotelClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, hotelName = $data.hotelName, sumRealCount = $data.sumRealCount, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, sumPayMoney = $data.sumPayMoney, isAutoPay = $data.isAutoPay, $string = $utils.$string, sumPayType = $data.sumPayType, bankNo = $data.bankNo, bankId = $data.bankId, voucher = $data.voucher, billTime = $data.billTime, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, financialHotelListData = $data.financialHotelListData, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class= "row T-newData" data-id="', $line = 1, $out += $escape(searchParam.hotelId), 
            $out += '" data-name="', $line = 1, $out += $escape(hotelName), $out += '"> <div class="col-sm-12 "> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label>酒店：</label> <input type="text" class="mar-r-10" name="hotelName" value="', 
            $line = 7, $out += $escape(hotelName), $out += '" /> <label>账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.startTime), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker mar-r-10" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 11, $out += $escape(searchParam.endTime), $out += '" style="width:100px;" /> <label>账务类别：</label> <input name="accountInfo" class="mar-r-10" placeholder="账务类别" type="text" value="', 
            $line = 14, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <label>对账状态：</label> <div class="btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 18, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 20, 0 == searchParam.isConfirmAccount ? ($out += " 未对账 ", $line = 22) : 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 24) : ($out += " 全部 ", $line = 26), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <button class=" btn-sm T-search search-btn btn-height"> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> <input name="accountStatus" value="', 
            $line = 40, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <div class="pull-left" style="margin:3px 30px 0px 0px;"> <label class="control-label mar-r-20">房间数合计：<span class="F-float F-count">', 
            $line = 47, $out += $escape(sumRealCount), $out += '</span></label> <label>账面应付合计：<span class="F-float F-money">', 
            $line = 48, $out += $escape(sumNeedPayMoney), $out += '</span></label> <label class="marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 49, $out += $escape(sumPayedMoney), $out += '</span> </label> <label class="marginLeft-30">结算金额合计：<span class="F-float F-money">', 
            $line = 50, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="marginLeft-30">未付金额合计：<span class="F-float F-money">', 
            $line = 51, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">', 
            $line = 52, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </div> </form> <div class="form-inline row globalAdd T-summary"> <div class="form-group mar-r-10"> <label class="control-label">本次付款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="money F-float F-money" value="', 
            $line = 61, $out += $escape(sumPayMoney), $out += '" ', $line = 61, 0 != isAutoPay && ($out += "disabled", 
            $line = 61), $out += '> </label> </div> <div class="form-group mar-r-10"> ', $line = 66, 
            0 == isAutoPay ? ($out += ' <button class="btn btn-primary T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> ', 
            $line = 70) : 1 == isAutoPay && ($out += ' <button class="btn btn-warning T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> ', 
            $line = 74), $out += ' </div> <div class="form-group mar-r-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 80, $out += $string($helpers.getPayTypeOptions(sumPayType)), $out += ' </select> </div> <div class="form-group mar-r-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" ', 
            $line = 87, 0 == sumPayType && ($out += 'value="', $line = 87, $out += $escape(bankNo), 
            $out += '"', $line = 87), $out += ' class="money" style="width:300px;"> <input type="hidden" name="cash-id" ', 
            $line = 88, 0 == sumPayType && ($out += 'value="', $line = 88, $out += $escape(bankId), 
            $out += '"', $line = 88), $out += '/> </label> </div> <div class="form-group mar-r-10 T-bankDiv"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" ', 
            $line = 94, 0 != sumPayType && ($out += 'value="', $line = 94, $out += $escape(bankNo), 
            $out += '"', $line = 94), $out += ' class="money" style="width:300px;"> <input type="hidden" name="card-id" ', 
            $line = 95, 0 != sumPayType && ($out += 'value="', $line = 95, $out += $escape(bankId), 
            $out += '"', $line = 95), $out += ' /> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number" value="', 
            $line = 101, $out += $escape(voucher), $out += '" /> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" value="', 
            $line = 107, $out += $escape(billTime), $out += '" style="width:140px;"> </label> </div> </div> <div class="form-group row"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" name="remark" value="', 
            $line = 115, $out += $escape(sumPayRemark), $out += '" class="T-remark" style="width:900px;"> </label> </div> </div> <table class="table table-striped table-bordered table-hover all margin-top hct_align_middle"> <thead> <tr class="T-tr-fixed bg-blur"><th>账务类别</th> <th>入住日期(账期)</th> <th>房型</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>账面应付</th> <th>已付金额</th> <th width="45">单据</th> <th>结算金额</th> <th>未付金额</th> <th><span class="necessary">*</span>本次付款金额</th> <th style="width: 100px">备注</th> <th>对账时间</th> <th>对账人</th> <th width="100">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 140, $each(financialHotelListData, function(rs) {
                $out += ' <tr data-id="', $line = 141, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 142, null != rs.tripNumber && "" != rs.tripNumber && ($line = 142, $out += $escape(rs.tripNumber), 
                $out += " ", $line = 143, (rs.lineProductName || rs.guideName) && ($out += "，", 
                $line = 143), $out += " ", $line = 144), $out += " ", $line = 145, null != rs.lineProductName && "" != rs.lineProductName && ($line = 145, 
                $out += $escape(rs.lineProductName), $out += " ", $line = 146, rs.guideName && ($out += "，", 
                $line = 146), $out += " ", $line = 147), $out += " ", $line = 148, null != rs.guideName && "" != rs.guideName && ($line = 148, 
                $out += $escape(rs.guideName), $line = 148), $out += " </td> <td>", $line = 150, 
                null == rs.accountTime || "" == rs.accountTime ? ($out += "-", $line = 150) : ($line = 150, 
                $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), $line = 150), 
                $out += "</td> <td>", $line = 151, null == rs.type || "" == rs.type ? ($out += "-", 
                $line = 151) : ($line = 151, $out += $escape(rs.type), $line = 151), $out += '</td> <td><span class="F-float F-money">', 
                $line = 152, $out += $escape(rs.price), $out += '</span></td> <td><span class="F-float F-count">', 
                $line = 153, $out += $escape(rs.memberCount), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 154, $out += $escape(rs.reduceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 155, $out += $escape(rs.needPayMoney), $out += '</span></td> <td><a class="T-option T-payedDetail">', 
                $line = 156, $out += $escape("社付："), $out += '<span class="F-float F-money">', $line = 156, 
                $out += $escape(rs.payedMoney), $out += "</span>", $line = 156, rs.isGuidePay && 1 == rs.isGuidePay || ($line = 156, 
                $out += $escape("，"), $line = 156, $out += $escape("导付："), $out += '<span class="F-float F-money">', 
                $line = 156, $out += $escape(rs.realGuidePayMoney), $out += "</span>", $line = 156), 
                $out += "</a></td> <td>", $line = 157, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-hotelImg" url="', 
                $line = 157, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 157) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 157), $out += '</td> <td><span class="F-float F-money">', $line = 158, $out += $escape(rs.settlementMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 159, $out += $escape(rs.unPayedMoney), 
                $out += '</span></td> <td><input name="payMoney" type="text" value="', $line = 160, 
                $out += $escape(rs.payMoney), $out += '" class="money F-float F-money" maxlength="9" /></td> <td><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000">', 
                $line = 161, $out += $escape(rs.payRemark), $out += "</textarea></td> <td>", $line = 162, 
                null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 162) : ($line = 162, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 162), 
                $out += "</td> <td>", $line = 163, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 163) : ($line = 163, $out += $escape(rs.checkUserName), $line = 163), $out += "</td> <td> ", 
                $line = 165, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 165) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 165), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 170;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 176, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close" style="margin-left:20px"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear"> <i class="ace-icon fa fa-check-circle"></i>确认付款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row T-newData" data-id="{{searchParam.hotelId}}" data-name="{{hotelName}}">\r\n    <div class="col-sm-12 ">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area">\r\n                <div class="form-group"> \r\n                    <label>酒店：</label>\r\n                    <input type="text" class="mar-r-10" name="hotelName" value="{{hotelName}}" />\r\n                    <label>账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker mar-r-10" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime}}" style="width:100px;" />   \r\n\r\n                    <label>账务类别：</label>\r\n                    <input name="accountInfo" class="mar-r-10" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n                    \r\n                    <label>对账状态：</label>\r\n                    <div class="btn-group T-check-status mar-r-10">\r\n                        <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                            <span>\r\n                                {{if searchParam.isConfirmAccount == 0}}\r\n                                    未对账\r\n                                {{else if searchParam.isConfirmAccount == 1}}\r\n                                    已对账\r\n                                {{else}}\r\n                                    全部\r\n                                {{/if}}\r\n                            </span>\r\n                            <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                        </button>\r\n                        <ul class="dropdown-menu">\r\n                            <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                            <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                            <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <button class=" btn-sm T-search search-btn btn-height">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                </div>\r\n                <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n            </div>\r\n        </form>\r\n\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <div class="pull-left" style="margin:3px 30px 0px 0px;">\r\n                    <label class="control-label mar-r-20">房间数合计：<span class="F-float F-count">{{sumRealCount}}</span></label>\r\n                    <label>账面应付合计：<span class="F-float F-money">{{sumNeedPayMoney}}</span></label>\r\n                    <label class="marginLeft-30">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}}</span> </label>\r\n                    <label class="marginLeft-30">结算金额合计：<span class="F-float F-money">{{sumSettlementMoney}}</span></label>\r\n                    <label class="marginLeft-30">未付金额合计：<span class="F-float F-money">{{sumUnPayedMoney}}</span></label>\r\n                    <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney F-float F-money">{{checkedUnPayedMoney}}</span></label>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <div class="form-inline row globalAdd T-summary">\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">本次付款金额合计：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="sumPayMoney" class="money F-float F-money"  value="{{sumPayMoney}}" {{if isAutoPay != 0}}disabled{{/if}}>\r\n                </label>\r\n            </div>\r\n\r\n            <div class="form-group mar-r-10">\r\n                {{if isAutoPay == 0}}\r\n                <button class="btn btn-primary T-clear-auto">\r\n                    <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                </button>\r\n                {{else if isAutoPay == 1}}\r\n                <button class="btn btn-warning T-cancel-auto">\r\n                    <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n                </button>\r\n                {{/if}}\r\n            </div>\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">付款方式：</label>\r\n                <select class="form-control T-sumPayType" name="sumPayType">\r\n                    {{#sumPayType | getPayTypeOptions}}\r\n                </select>\r\n            </div>\r\n\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">现金账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="cash-number" {{if sumPayType == 0}}value="{{bankNo}}"{{/if}} class="money" style="width:300px;">\r\n                    <input type="hidden" name="cash-id" {{if sumPayType == 0}}value="{{bankId}}"{{/if}}/>\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10 T-bankDiv">\r\n                <label class="control-label">银行账号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="card-number" {{if sumPayType != 0}}value="{{bankNo}}"{{/if}} class="money" style="width:300px;">\r\n                    <input type="hidden" name="card-id" {{if sumPayType != 0}}value="{{bankId}}"{{/if}} />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">凭证编号：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="credentials-number" value="{{voucher}}" />\r\n                </label>\r\n            </div>\r\n            <div class="form-group mar-r-10">\r\n                <label class="control-label">记账日期：</label>\r\n                <label class="control-label">\r\n                    <input type="text" name="tally-date" value="{{billTime}}"  style="width:140px;">\r\n                </label>\r\n            </div>\r\n        </div>\r\n\r\n        <div class="form-group row">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="remark" value="{{sumPayRemark}}" class="T-remark" style="width:900px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <table class="table table-striped table-bordered table-hover all margin-top hct_align_middle">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur"><th>账务类别</th>\r\n                <th>入住日期(账期)</th>\r\n                <th>房型</th>\r\n                <th>单价</th>\r\n                <th>数量</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>已付金额</th>\r\n                <th width="45">单据</th>\r\n                <th>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th><span class="necessary">*</span>本次付款金额</th>\r\n                <th style="width: 100px">备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th width="100">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialHotelListData as rs}}\r\n            <tr data-id="{{rs.id}}">\r\n                <td>{{if rs.tripNumber !=null && rs.tripNumber != ""}}{{rs.tripNumber}}\r\n                        {{if rs.lineProductName || rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.lineProductName != null && rs.lineProductName != ""}}{{rs.lineProductName}}\r\n                        {{if rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.guideName != null && rs.guideName != ""}}{{rs.guideName}}{{/if}}\r\n                </td>\r\n                <td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{if rs.type == null || rs.type == ""}}-{{else}}{{rs.type}}{{/if}}</td>\r\n                <td><span class="F-float F-money">{{rs.price}}</span></td>\r\n                <td><span class="F-float F-count">{{rs.memberCount}}</span></td>  \r\n                <td><span class="F-float F-money">{{rs.reduceMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.needPayMoney}}</span></td>\r\n                <td><a class="T-option T-payedDetail">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span>{{if !rs.isGuidePay || rs.isGuidePay != 1}}{{"，"}}{{"导付："}}<span class="F-float F-money">{{rs.realGuidePayMoney}}</span>{{/if}}</a></td> \r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-hotelImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>  \r\n                <td><span class="F-float F-money">{{rs.unPayedMoney}}</span></td>\r\n                <td><input name="payMoney" type="text" value="{{rs.payMoney}}" class="money F-float F-money" maxlength="9" /></td>\r\n                <td><textarea class="col-sm-12 hct-textarea" name="payRemark" maxlength="1000">{{rs.payRemark}}</textarea></td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                <td>\r\n                    {{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>  \r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});