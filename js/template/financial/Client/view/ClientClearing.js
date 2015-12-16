/*TMODJS:{"debug":true,"version":80,"md5":"a0da986ceaf26cff98769fcc8dd19202"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/ClientClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, partnerAgencyName = $data.partnerAgencyName, searchParam = $data.searchParam, totalList = $data.totalList, type = $data.type, customerAccountList = $data.customerAccountList, $each = $utils.$each, message = ($data.rs, 
            $data.index, $data.rsl, $data.j, $data.message), partnerAgencyId = $data.partnerAgencyId, $out = "";
            return $out += '<div class="row T-search-area border" style="padding: 0 20px;"> <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">客户：</label> <label class="control-label T-partnerAgencyName">', 
            $line = 5, $out += $escape(partnerAgencyName), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">账期：</label> <input type="text" class="form-control date-picker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startTime), $out += '"> <label class="control-label">&nbsp;至&nbsp;</label> <input type="text" class="form-control date-picker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endTime), $out += '"> </div> <div class="form-group marginLeft-30"> <label class="control-label">线路名称：</label> <input type="text" class="form-control T-search-line" value="', 
            $line = 15, $out += $escape(searchParam.lineProductName), $out += '"> </div> <div class="form-group marginLeft-30"> <label class="control-label">录入人：</label> <input type="text" class="form-control T-search-enter" value="', 
            $line = 19, $out += $escape(searchParam.creatorName), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <div class="form-inline" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">人数合计：</label> <label class="control-label">', 
            $line = 30, $out += $escape(totalList.sumCount), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">合同金额合计：</label> <label class="control-label">', 
            $line = 34, $out += $escape(totalList.sumContractMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">已收金额合计：</label> <label class="control-label">', 
            $line = 38, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">返款金额合计：</label> <label class="control-label">', 
            $line = 42, $out += $escape(totalList.sumBackMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">结算金额合计：</label> <label class="control-label">', 
            $line = 46, $out += $escape(totalList.sumSettlementMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未收金额合计：</label> <label class="control-label">', 
            $line = 50, $out += $escape(totalList.sumUnReceivedMoney), $out += '</label> </div> </div> <div class="form-inline" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">本次收款金额合计：</label> <label class="control-label"> <input type="text" name="sumPayMoney" class="T-sumReciveMoney money" ', 
            $line = 58, type && ($out += "disabled ", $line = 58), $out += '> </label> </div> <div class="form-group marginLeft-30"> <label class="control-label">收款方式：</label> <select class="form-control T-sumPayType" name="payType"> <option value="0">现金</option> <option value="1">银行转账</option> <option value="2">网上支付</option> <option value="3">支票</option> <option value="4">其它</option> </select> </div> <div class="form-group marginLeft-30"> <label class="control-label">备注：</label> <label class="control-label"> <input type="text" class="T-sumRemark"> </label> </div> ', 
            $line = 78, type || ($out += ' <div class="form-group marginLeft-30"> <button class="btn btn-xs btn-primary marginLeft-30 T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button> </div> ', 
            $line = 82), $out += ' </div> </div> <div class="row" style="margin-top: 30px"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">组团单号</th> <th class="th-border">线路产品</th> <th class="th-border">出游日期（账期）</th> <th class="th-border">联系人</th> <th class="th-border">人数</th> <th class="th-border">录入人</th> <th class="th-border">录入时间</th> <th class="th-border">合同金额</th> <th class="th-border">明细</th> <th class="th-border">已收金额</th> <th class="th-border">返款金额</th> <th class="th-border">结算金额</th> <th class="th-border">未收金额</th> <th class="th-border">本次收款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 110, null != customerAccountList ? ($out += " ", $line = 110, $each(customerAccountList, function(rs) {
                $out += ' <tr data-gid="', $line = 111, $out += $escape(rs.touristGroupId), $out += '" data-id="', 
                $line = 111, $out += $escape(rs.id), $out += '"> <td>', $line = 112, $out += $escape(rs.otaOrderNumber), 
                $out += "</td> <td>", $line = 113, $out += $escape(rs.lineProductName), $out += "</td> <td>", 
                $line = 114, $out += $escape(rs.startTime), $out += "</td> <td>", $line = 115, $out += $escape(rs.contactName), 
                $out += '</td> <td style="white-space: nowrap;">', $line = 116, $out += $escape(rs.adultCount), 
                $out += "大", $line = 116, $out += $escape(rs.childCount), $out += '小<a class="cursor T-action T-unfold">展开</a></td> <td>', 
                $line = 117, $out += $escape(rs.creatorName), $out += "</td> <td>", $line = 118, 
                $out += $escape(rs.createTime), $out += "</td> <td>", $line = 119, $out += $escape(rs.contractMoney), 
                $out += "</td> <td> ", $line = 121, $each(rs.detailList, function(rsl, j) {
                    $out += " ", $line = 122, $out += $escape(rsl.describeInfo), $out += "：", $line = 122, 
                    $out += $escape(rsl.price), $out += "x", $line = 122, $out += $escape(rsl.count), 
                    $out += "=", $line = 122, $out += $escape(rsl.price * rsl.count), $line = 122, j != rs.detailList.length - 1 && ($out += "，", 
                    $line = 122), $out += " ", $line = 123;
                }), $out += ' </td> <td><a class="cursor T-action T-receive">社收', $line = 125, $out += $escape(rs.travleReciveMoney), 
                $out += "，导游现收", $line = 125, $out += $escape(rs.guideReciveMoney), $out += "</a></td> <td>", 
                $line = 126, $out += $escape(rs.backMoney), $out += "</td> <td>", $line = 127, $out += $escape(rs.settlementMoney), 
                $out += "</td> <td>", $line = 128, $out += $escape(rs.unReceivedMoney), $out += '</td> <td> <input type="text" name="payMoney" data-le="', 
                $line = 130, $out += $escape(rs.unReceivedMoney), $out += '" ', $line = 130, !type && rs.unReceivedMoney <= 0 && ($out += " disabled ", 
                $line = 130), $out += ' class="col-sm-12 T-reciveMoney money"> </td> <td> <input type="text" class="col-sm-12 T-remark" ', 
                $line = 133, !type && rs.unReceivedMoney <= 0 && ($out += " disabled ", $line = 133), 
                $out += "> </td> <td>", $line = 135, $out += $escape(rs.checkTime), $out += "</td> <td>", 
                $line = 136, $out += $escape(rs.checkUserName), $out += '</td> <td> <label class="pos-rel"> ', 
                $line = 139, rs.isConfirmAccount ? ($out += "已对账", $line = 139) : ($out += "未对账", 
                $line = 139), $out += ' </label> <label class="cursor R-right"> <a> |</a></label> <a class="cursor T-action T-view">查看</a> </td> </tr> <tr style="display:none;"> <td colspan="20"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <td>序号</td> <td>姓名</td> <td>联系电话</td> <td>证件类型</td> <td>证件号</td> <td>联系人</td> </tr> </thead> <tbody class="T-group-list"> </tbody> </table> </td> </tr> ', 
                $line = 163;
            }), $out += " ", $line = 163) : ($out += ' <tr> <td colspan="20">', $line = 165, 
            $out += $escape(message), $out += "</td> </tr> ", $line = 167), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 172, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> <div class="row"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-btn-save" data-right="1280003" data-type="', 
            $line = 186, $out += $escape(type), $out += '" data-id=', $line = 186, $out += $escape(partnerAgencyId), 
            $out += ' style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认收款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area border" style="padding: 0 20px;">\r\n    <form class="form-inline" role="form" onsubmit="return false" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label class="control-label">客户：</label>\r\n            <label class="control-label T-partnerAgencyName">{{partnerAgencyName}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">账期：</label>\r\n            <input type="text" class="form-control date-picker T-search-start-date" value="{{searchParam.startTime}}">\r\n            <label class="control-label">&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control date-picker T-search-end-date" value="{{searchParam.endTime}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">线路名称：</label>\r\n            <input type="text" class="form-control T-search-line" value="{{searchParam.lineProductName}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">录入人：</label>\r\n            <input type="text" class="form-control T-search-enter" value="{{searchParam.creatorName}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label class="control-label">人数合计：</label>\r\n            <label class="control-label">{{totalList.sumCount}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">合同金额合计：</label>\r\n            <label class="control-label">{{totalList.sumContractMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">已收金额合计：</label>\r\n            <label class="control-label">{{totalList.sumReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">返款金额合计：</label>\r\n            <label class="control-label">{{totalList.sumBackMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label">{{totalList.sumSettlementMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">未收金额合计：</label>\r\n            <label class="control-label">{{totalList.sumUnReceivedMoney}}</label>\r\n        </div>\r\n    </div>\r\n\r\n    <div class="form-inline" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label class="control-label">本次收款金额合计：</label>\r\n            <label class="control-label">\r\n                <input type="text" name="sumPayMoney" class="T-sumReciveMoney money"  {{if type}}disabled {{/if}}>\r\n            </label>\r\n        </div>\r\n\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">收款方式：</label>\r\n            <select class="form-control T-sumPayType" name="payType">\r\n                <option value="0">现金</option>\r\n                <option value="1">银行转账</option>\r\n                <option value="2">网上支付</option>\r\n                <option value="3">支票</option>\r\n                <option value="4">其它</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">备注：</label>\r\n            <label class="control-label">\r\n                <input type="text" class="T-sumRemark">\r\n            </label>\r\n        </div>\r\n        {{if !type}} \r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn btn-xs btn-primary marginLeft-30 T-btn-autofill"><i class="ace-icon fa fa-check-circle"></i> 自动下账</button>\r\n        </div>\r\n        {{/if}}\r\n    </div>\r\n</div>\r\n<div class="row" style="margin-top: 30px">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">组团单号</th>\r\n                <th class="th-border">线路产品</th>\r\n                <th class="th-border">出游日期（账期）</th>\r\n                <th class="th-border">联系人</th>\r\n                <th class="th-border">人数</th>\r\n                <th class="th-border">录入人</th>\r\n                <th class="th-border">录入时间</th>\r\n                <th class="th-border">合同金额</th>\r\n                <th class="th-border">明细</th>\r\n                <th class="th-border">已收金额</th>\r\n                <th class="th-border">返款金额</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未收金额</th>\r\n                <th class="th-border">本次收款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n            {{if customerAccountList != null}} {{each customerAccountList as rs index}}\r\n            <tr data-gid="{{rs.touristGroupId}}" data-id="{{rs.id}}">\r\n                <td>{{rs.otaOrderNumber}}</td>\r\n                <td>{{rs.lineProductName}}</td>\r\n                <td>{{rs.startTime}}</td>\r\n                <td>{{rs.contactName}}</td>\r\n                <td style="white-space: nowrap;">{{rs.adultCount}}大{{rs.childCount}}小<a class="cursor T-action T-unfold">展开</a></td>\r\n                <td>{{rs.creatorName}}</td>\r\n                <td>{{rs.createTime}}</td>\r\n                <td>{{rs.contractMoney}}</td>\r\n                <td>\r\n                {{each rs.detailList as rsl j}}\r\n                    {{rsl.describeInfo}}：{{rsl.price}}x{{rsl.count}}={{rsl.price * rsl.count}}{{if j != rs.detailList.length - 1}}，{{/if}}\r\n                {{/each}}\r\n                </td>\r\n                <td><a class="cursor T-action T-receive">社收{{rs.travleReciveMoney}}，导游现收{{rs.guideReciveMoney}}</a></td>\r\n                <td>{{rs.backMoney}}</td>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td>{{rs.unReceivedMoney}}</td>\r\n                <td>\r\n                    <input type="text" name="payMoney" data-le="{{rs.unReceivedMoney}}" {{if !type && rs.unReceivedMoney <= 0}} disabled {{/if}} class="col-sm-12 T-reciveMoney money">\r\n                </td>\r\n                <td>\r\n                    <input type="text" class="col-sm-12 T-remark" {{if !type && rs.unReceivedMoney <= 0}} disabled {{/if}}>\r\n                </td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkUserName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        {{if rs.isConfirmAccount}}已对账{{else}}未对账{{/if}}\r\n                    </label>\r\n                    <label class="cursor R-right"> <a> |</a></label>\r\n                    <a class="cursor T-action T-view">查看</a>\r\n                </td>\r\n            </tr>\r\n            <tr style="display:none;">\r\n                <td colspan="20">\r\n                    <table class="table table-striped table-bordered table-hover">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>序号</td>\r\n                                <td>姓名</td>\r\n                                <td>联系电话</td>\r\n                                <td>证件类型</td>\r\n                                <td>证件号</td>\r\n                                <td>联系人</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody class="T-group-list">\r\n                        </tbody>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            {{/each}} {{else}}\r\n            <tr>\r\n                <td colspan="20">{{message}}</td>\r\n            </tr>\r\n            {{/if}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-btn-save" data-right="1280003" data-type="{{type}}" data-id={{partnerAgencyId}} style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认收款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});