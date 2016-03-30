/*TMODJS:{"debug":true,"version":272,"md5":"6d550b6f8253f0a1a0d7c6e278c77b25"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/shopClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, name = $data.name, id = $data.id, searchParam = $data.searchParam, totalList = $data.totalList, source = $data.source, $string = $utils.$string, getPayTypeOptions = $helpers.getPayTypeOptions, $each = $utils.$each, shopAccountList = $data.shopAccountList, $out = ($data.rs, 
            $data.index, $data.list, $data.i, "");
            return $out += '<div class="row check T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>购物店：</label> <input type="text" value="', 
            $line = 5, $out += $escape(name), $out += '" name="shopName" data-id="', $line = 5, 
            $out += $escape(id), $out += '"> </div> <div class="form-group mar-r-10"> <label>账期：</label> <input type="text" class="form-control datepicker T-search-start-date" name="startDate" value="', 
            $line = 9, $out += $escape(searchParam.startDate), $out += '" style="width: 100px; text-align: center;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-date" name="endDate" value="', 
            $line = 11, $out += $escape(searchParam.endDate), $out += '" style="width: 100px; text-align: center;"> </div> <div class="form-group mar-r-10"> <label>团信息：</label> <input type="text" class="form-control T-search-trip" value="', 
            $line = 15, $out += $escape(searchParam.tripMessage), $out += '"> </div> <label class="form-group">对账状态：</label> <div class="form-group btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 19, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 21, searchParam.isConfirmAccount && "" != searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 25) : ($out += " 未对账 ", $line = 27) : ($out += " 全部 ", $line = 23), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <div class="form-group"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <input name="accountStatus" type="hidden" value="', 
            $line = 42, $out += $escape(searchParam.accountStatus), $out += '"> </form> <div class="form-inline"> <div class="form-group"> <label>人数合计：</label> <label>', 
            $line = 47, $out += $escape(totalList.sumCount), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>打单金额合计：</label> <label class="F-float F-money">', 
            $line = 51, $out += $escape(totalList.sumConsumeMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>社佣合计：</label> <label class="F-float F-money">', 
            $line = 55, $out += $escape(totalList.sumTravelAgencyRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>导佣合计：</label> <label class="F-float F-money">', 
            $line = 59, $out += $escape(totalList.sumGuideRebateMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>返佣金额合计：</label> <label class="F-float F-money">', 
            $line = 63, $out += $escape(totalList.sumBackMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>已收金额合计：</label> <label class="F-float F-money">', 
            $line = 67, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> </div> <div class="form-inline"> <div class="form-group"> <label>结算金额合计：</label> <label class="F-float F-money">', 
            $line = 73, $out += $escape(totalList.sumSettlementMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未收金额合计：</label> <label class="F-float F-money">', 
            $line = 77, $out += $escape(totalList.sumUnReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>未收金额合计(已对账)：</label> <label class="T-unpayMoney F-float F-money">', 
            $line = 81, $out += $escape(totalList.checkedUnPayedMoney), $out += '</label> </div> </div> <div class="form-inline globalAdd"> <div class="form-group mar-r-10"> <label class="control-label">本次收款金额合计：</label> <label class="control-label"> <input type="text" class="form-control T-sumReciveMoney money F-float F-money" name="sumPayMoney"', 
            $line = 89, source && ($out += ' disabled="disabled"', $line = 89), $out += " > </label> </div> ", 
            $line = 93, source || ($out += ' <div class="form-group mar-r-10"> <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 97), $out += ' <div class="form-group mar-r-10"> <label class="control-label">付款方式：</label> <select class="form-control T-sumPayType" name="sumPayType"> ', 
            $line = 102, $out += $string(getPayTypeOptions()), $out += ' </select> </div> <div class="form-group mar-r-10"> <label class="control-label">现金账号：</label> <label class="control-label"> <input type="text" name="cash-number" class="money" style="width:300px;"> <input type="hidden" name="cash-id"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">银行账号：</label> <label class="control-label"> <input type="text" name="card-number" class="money" style="width:300px;"> <input type="hidden" name="card-id"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">凭证编号：</label> <label class="control-label"> <input type="text" name="credentials-number"> </label> </div> <div class="form-group mar-r-10"> <label class="control-label">记账日期：</label> <label class="control-label"> <input type="text" name="tally-date" style="width:140px;"> </label> </div> </div> <div class="form-group"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="form-control T-sumRemark" name="sumPayRemark" style="width:900px;"> </label> </div> </div> <div class="row"> <table class="table table-striped table-bordered table-hover hct_align_middle"> <thead> <tr class="T-tr-fixed bg-blur"> <th>团信息</th> <th>进店日期（账期）</th> <th>人数</th> <th>商品</th> <th>打单金额</th> <th>社佣</th> <th>导佣</th> <th>单据</th> <th>返佣金额</th> <th>已收金额</th> <th>结算金额</th> <th>未收金额</th> <th>本次收款金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="min-width: 105px;">对账</th> </tr> </thead> <tbody class="T-list T-checkList T-clearList"> ', 
            $line = 165, $each(shopAccountList, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 166, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 166, rs.isConfirmAccount ? ($out += "1", $line = 166) : ($out += "0", 
                $line = 166), $out += '"> <td>', $line = 167, $out += $escape(rs.tripMessage), $out += "</td> <td>", 
                $line = 168, $out += $escape(rs.accountTime), $out += "</td> <td><span>", $line = 169, 
                $out += $escape(rs.count), $out += "</span></td> <td>", $line = 170, rs.shopItem.length > 0 && ($line = 170, 
                $out += $escape(rs.shopItem[0].itemName), $line = 170, rs.shopItem.length > 1 && ($out += "...", 
                $line = 170), $out += '<a class="cursor T-action T-see-group">展开</a>', $line = 170), 
                $out += '</td> <td><span class="F-float F-money">', $line = 171, $out += $escape(rs.consumeMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 172, $out += $escape(rs.travelAgencyRebateMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 173, $out += $escape(rs.guideRebateMoney), 
                $out += '</span></td> <td style="white-space: nowrap;">', $line = 174, rs.billImage ? ($out += '<a class="cursor T-action T-view-receipts" data-billimage="', 
                $line = 174, $out += $escape(rs.billImage), $out += '">查看</a>', $line = 174) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 174), $out += '</td> <td><span class="F-float F-money">', $line = 175, $out += $escape(rs.backMoney), 
                $out += '</span></td> <td><a class="cursor T-action T-payDetails"> &nbsp;&nbsp;社收:<span class="F-float F-money">', 
                $line = 177, $out += $escape(rs.receiveMoney), $out += '</span>&nbsp;&nbsp;导游现收:<span class="F-float F-money">', 
                $line = 177, $out += $escape(rs.rebateCurrentIncomeMoney), $out += '</span></a></td> <td><span class="F-float F-money">', 
                $line = 178, $out += $escape(rs.settlementMoney), $out += '</span></td> <td name="unPayedMoney"><span class="F-float F-money">', 
                $line = 179, $out += $escape(rs.unReceiveMoney), $out += '</span></td> <td><input type="text" class="col-sm-12 T-reciveMoney F-float F-money" name="payMoney" value="', 
                $line = 180, $out += $escape(rs.payMoney), $out += '"></td> <td><textarea class="col-sm-12 hct-textarea T-payRemark" name="payRemark" maxlength="1000">', 
                $line = 181, $out += $escape(rs.payRemark), $out += "</textarea></td> <td>", $line = 182, 
                $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 183, $out += $escape(rs.checkName), 
                $out += '</td> <td> <label class="pos-rel"> <span class="lbl">', $line = 186, rs.isConfirmAccount ? ($out += "已", 
                $line = 186) : ($out += "未", $line = 186), $out += '对账</span> </label> <label class="cursor" data-right="1310004"> <a> |</a></label> <a class="cursor T-action T-view-details" data-right="1310004">查看</a> </td> </tr> ', 
                $line = 192, rs.shopItem.length > 0 && ($out += ' <tr class="hide T-hideTr"> <td colspan="19"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border" style="min-width: 45px;">序号</th> <th class="th-border" style="min-width: 70px;">商品</th> <th class="th-border" style="min-width: 120px;">消费金额</th> <th class="th-border" style="min-width: 45px;">社佣</th> <th class="th-border" style="min-width: 45px;">导佣</th> </tr> </thead> <tbody class="T-shopItemList"> ', 
                $line = 206, $each(rs.shopItem, function(list, i) {
                    $out += " <tr> <td>", $line = 208, $out += $escape(i + 1), $out += "</td> <td>", 
                    $line = 209, $out += $escape(list.itemName), $out += '</td> <td><span class="F-float F-money T-consumeMoney">', 
                    $line = 210, $out += $escape(list.consumeMoney), $out += '</span></td> <td><span class="F-float F-money T-travelAgencyRebateMoney">', 
                    $line = 211, $out += $escape(list.travelAgencyRebateMoney), $out += '</span></td> <td><span class="F-float F-money T-guideRebateMoney">', 
                    $line = 212, $out += $escape(list.guideRebateMoney), $out += "</span></td> </tr> ", 
                    $line = 214;
                }), $out += ' <tr class="T-sumMoney"> <td colspan="2" style="font-weight: bold;text-align:right;">佣金合计：</td> <td><span class="F-float F-money T-shopMoney" style="font-weight: bold;"></span></td> <td><span class="F-float F-money T-travelMoney" style="font-weight: bold;"></span></td> <td><span class="F-float F-money T-guideMoney" style="font-weight: bold;"></span></td> </tr> </tbody> </table> </td> </tr> ', 
                $line = 226), $out += " ", $line = 227;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-sumItem">共计 ', 
            $line = 232, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i> 确认收款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row check T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group mar-r-10">\r\n            <label>购物店：</label>\r\n            <input type="text" value="{{name}}" name="shopName" data-id="{{id}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-date" name="startDate" value="{{searchParam.startDate}}" style="width: 100px; text-align: center;">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-date" name="endDate" value="{{searchParam.endDate}}" style="width: 100px; text-align: center;">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>团信息：</label>\r\n            <input type="text" class="form-control T-search-trip" value="{{searchParam.tripMessage}}">\r\n        </div>\r\n        <label class="form-group">对账状态：</label>\r\n        <div class="form-group btn-group T-check-status mar-r-10">\r\n            <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                    {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount == ""}}\r\n                        全部\r\n                    {{else if searchParam.isConfirmAccount == 1}}\r\n                        已对账\r\n                    {{else}}\r\n                        未对账\r\n                    {{/if}}\r\n                </span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu">\r\n                <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n        <input name="accountStatus" type="hidden" value="{{searchParam.accountStatus}}">\r\n    </form>\r\n    <div class="form-inline">\r\n        <div class="form-group">\r\n            <label>人数合计：</label>\r\n            <label>{{totalList.sumCount}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>打单金额合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumConsumeMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>社佣合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumTravelAgencyRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>导佣合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumGuideRebateMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>返佣金额合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumBackMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>已收金额合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumReceiveMoney}}</label>\r\n        </div>\r\n    </div>\r\n    <div class="form-inline">\r\n        <div class="form-group">\r\n            <label>结算金额合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumSettlementMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>未收金额合计：</label>\r\n            <label class="F-float F-money">{{totalList.sumUnReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>未收金额合计(已对账)：</label>\r\n            <label class="T-unpayMoney F-float F-money">{{totalList.checkedUnPayedMoney}}</label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-inline globalAdd">\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">本次收款金额合计：</label>\r\n            <label class="control-label">\r\n                <input type="text" class="form-control T-sumReciveMoney money F-float F-money" name="sumPayMoney"{{if source}} disabled="disabled"{{/if}} >\r\n            </label>\r\n        </div>\r\n\r\n        {{if !source}}\r\n        <div class="form-group mar-r-10">\r\n            <button class="btn btn-xs btn-primary T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n        </div>\r\n        {{/if}}\r\n\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">付款方式：</label>\r\n            <select class="form-control T-sumPayType" name="sumPayType">\r\n                {{getPayTypeOptions}}\r\n            </select>\r\n        </div>\r\n\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">现金账号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="cash-number" class="money" style="width:300px;">\r\n                <input type="hidden" name="cash-id">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">银行账号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="card-number" class="money" style="width:300px;">\r\n                <input type="hidden" name="card-id">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">凭证编号：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="credentials-number">\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="control-label">记账日期：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="tally-date"  style="width:140px;">\r\n            </label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-group">\r\n        <label class="control-label">备注：</label>\r\n        <label class="control-label">\r\n            <input type="text" class="form-control T-sumRemark" name="sumPayRemark" style="width:900px;">\r\n        </label>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover hct_align_middle">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>团信息</th>\r\n                <th>进店日期（账期）</th>\r\n                <th>人数</th>\r\n                <th>商品</th>\r\n                <th>打单金额</th>\r\n                <th>社佣</th>\r\n                <th>导佣</th>\r\n                <th>单据</th>\r\n                <th>返佣金额</th>\r\n                <th>已收金额</th>\r\n                <th>结算金额</th>\r\n                <th>未收金额</th>\r\n                <th>本次收款金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="min-width: 105px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list T-checkList T-clearList">\r\n        {{each shopAccountList as rs index}}\r\n            <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{if !!rs.isConfirmAccount}}1{{else}}0{{/if}}">\r\n                <td>{{rs.tripMessage}}</td>\r\n                <td>{{rs.accountTime}}</td>\r\n                <td><span>{{rs.count}}</span></td>\r\n                <td>{{if rs.shopItem.length >0}}{{rs.shopItem[0].itemName}}{{if rs.shopItem.length >1}}...{{/if}}<a class="cursor T-action T-see-group">展开</a>{{/if}}</td>\r\n                <td><span class="F-float F-money">{{rs.consumeMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.travelAgencyRebateMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.guideRebateMoney}}</span></td>\r\n                <td style="white-space: nowrap;">{{if !rs.billImage}}<span style="color:#bbb">查看</span>{{else}}<a class="cursor T-action T-view-receipts" data-billimage="{{rs.billImage}}">查看</a>{{/if}}</td>\r\n                <td><span class="F-float F-money">{{rs.backMoney}}</span></td>\r\n                <td><a class="cursor T-action T-payDetails">\r\n                &nbsp;&nbsp;社收:<span class="F-float F-money">{{rs.receiveMoney}}</span>&nbsp;&nbsp;导游现收:<span class="F-float F-money">{{rs.rebateCurrentIncomeMoney}}</span></a></td>\r\n                <td><span class="F-float F-money">{{rs.settlementMoney}}</span></td>\r\n                <td name="unPayedMoney"><span class="F-float F-money">{{rs.unReceiveMoney}}</span></td>\r\n                <td><input type="text" class="col-sm-12 T-reciveMoney F-float F-money" name="payMoney" value="{{rs.payMoney}}"></td>\r\n                <td><textarea class="col-sm-12 hct-textarea T-payRemark" name="payRemark" maxlength="1000">{{rs.payRemark}}</textarea></td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <span class="lbl">{{if !!rs.isConfirmAccount}}已{{else}}未{{/if}}对账</span>\r\n                    </label>\r\n                    <label class="cursor" data-right="1310004"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view-details" data-right="1310004">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{if rs.shopItem.length > 0}}\r\n            <tr class="hide T-hideTr">\r\n                <td colspan="19">\r\n                    <table class="table table-striped table-bordered table-hover">\r\n                        <thead>\r\n                            <tr>\r\n                                <th class="th-border" style="min-width: 45px;">序号</th>\r\n                                <th class="th-border" style="min-width: 70px;">商品</th>\r\n                                <th class="th-border" style="min-width: 120px;">消费金额</th>\r\n                                <th class="th-border" style="min-width: 45px;">社佣</th>\r\n                                <th class="th-border" style="min-width: 45px;">导佣</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody class="T-shopItemList">\r\n                            {{each rs.shopItem as list i}}\r\n                            <tr>\r\n                                <td>{{i + 1}}</td>\r\n                                <td>{{list.itemName}}</td>\r\n                                <td><span class="F-float F-money T-consumeMoney">{{list.consumeMoney}}</span></td>\r\n                                <td><span class="F-float F-money T-travelAgencyRebateMoney">{{list.travelAgencyRebateMoney}}</span></td>\r\n                                <td><span class="F-float F-money T-guideRebateMoney">{{list.guideRebateMoney}}</span></td>\r\n                            </tr>\r\n                            {{/each}}\r\n                            <tr class="T-sumMoney">\r\n                                <td colspan="2" style="font-weight: bold;text-align:right;">佣金合计：</td>\r\n                                <td><span class="F-float F-money T-shopMoney" style="font-weight: bold;"></span></td>\r\n                                <td><span class="F-float F-money T-travelMoney" style="font-weight: bold;"></span></td>\r\n                                <td><span class="F-float F-money T-guideMoney" style="font-weight: bold;"></span></td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n\r\n            {{/if}}\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small class="T-sumItem">共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认收款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});