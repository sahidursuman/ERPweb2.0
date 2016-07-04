/*TMODJS:{"debug":true,"version":54,"md5":"3fbd42f9f7b5e62e8b21c1cc5c63f300"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/viewTransferOutAcc", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, transfer = $data.transfer, $escape = $utils.$escape, partnerAgency = $data.partnerAgency, lineProduct = $data.lineProduct, $each = $utils.$each, $out = ($data.$index, 
            "");
            return $out += '<div class="touristGroupViewAccount" id="T-touristGroupViewAccount"> <div class="form-inline" style="text-align:center;margin: 15px 0px 25px 0px;"> <div class="form-group"> <h4 style="margin: auto;"> ', 
            $line = 5, null != transfer.companyLogo && "" != transfer.companyLogo && ($out += ' <img src="', 
            $line = 6, $out += $escape(transfer.companyLogo), $out += '"class="imgViewAccount" alt=" " style="width: 35px;height: 35px"> ', 
            $line = 7), $out += ' <span class="mar-l-5">', $line = 8, $out += $escape(transfer.travelName), 
            $out += '</span> </h4> </div> <div class="form-group pull-right mar-r-20 globalAdd"> <button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;line-height:6px"> <i class="ace-icon fa fa-print"></i>打印 </button> </div> </div> <form action=""> <div class="viewAccountsMain"> <p> <span>致</span> <span style="margin-left: 4px;">', 
            $line = 22, $out += $escape(partnerAgency.travelAgencyName), $out += '</span> <span class="mar-l-5">您好！</span> </p> <p> <span>我社：</span> <span>(收客单号)</span> <span>', 
            $line = 28, $out += $escape(transfer.orderNumber), $out += '</span> <span class="mar-l-8">(线路产品)</span> <span>', 
            $line = 29, $out += $escape(lineProduct.name), $out += ',</span> <span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span> </p> <table class="table whereQ whereTwo" style="width: 100%;"> <tr> <td class="textaR-paR">人数</td> <td class="textaR-paL">', 
            $line = 35, $out += $escape(transfer.count), $out += '</td> <td class="textaR-paR">联系人</td> <td class="textaR-paL"><span>', 
            $line = 37, $out += $escape(transfer.contactName), $out += '</span><span class="mar-l-5">', 
            $line = 37, $out += $escape(transfer.contactPhone), $out += '</span></td> </tr> <tr> <td class="textaR-paR">接站牌</td> <td class="textaR-paL">', 
            $line = 41, $out += $escape(transfer.welcomeBoard), $out += '</td> <td class="textaR-paR">送客地点</td> <td class="textaR-paL"><span>', 
            $line = 43, $out += $escape(transfer.sendPosition), $out += '</span></td> </tr> <tr> <td class="textaR-paR">备注</td> <td class="textaR-paL" colspan="3">', 
            $line = 47, $out += $escape(transfer.remark), $out += '</td> </tr> <tr> <td class="textaR-paR">出团日期</td> <td class="textaR-paL">', 
            $line = 51, $out += $escape($helpers.dateFormat(transfer.startTime, "yyyy-MM-dd")), 
            $out += '</td> <td class="textaR-paR">完团日期</td> <td class="textaR-paL">', $line = 53, 
            $out += $escape($helpers.dateFormat(transfer.endTime, "yyyy-MM-dd")), $out += '</td> </tr> <tr> <td class="textaR-paR">全陪</td> <td class="textaR-paL"><span>', 
            $line = 57, $out += $escape(transfer.accompanyGuideName), $out += '</span><span class="mar-l-5">', 
            $line = 57, $out += $escape(transfer.accompanyGuideMobile), $out += '</span></td> <td class="textaR-paR">针对客源</td> <td class="textaR-paL">', 
            $line = 59, 0 == transfer.customerType && ($out += "散客", $line = 59), $line = 59, 
            1 == transfer.customerType && ($out += "团体", $line = 59), $out += '</td> </tr> </table> <table class="table table-bordered"> <thead> <tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2"> <th class="th-border" width="160">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody class="addCostTbody"> ', 
            $line = 74, $each(transfer.feeList, function(transfer) {
                $out += ' <tr data-entity-id=""> <td> ', $line = 77, $out += $escape(transfer.name), 
                $out += ' </td> <td> <span class="F-float F-count">', $line = 80, $out += $escape(transfer.count), 
                $out += '</span> </td> <td> <span class="F-float F-money">', $line = 83, $out += $escape(transfer.price), 
                $out += '</span> </td> <td> <span class="F-float F-money">', $line = 87, $out += $escape(transfer.price * transfer.count), 
                $out += '</span> </td> <td class="textaR-paL"> ', $line = 90, $out += $escape(transfer.remark), 
                $out += " </td> </tr> ", $line = 94;
            }), $out += ' </tbody> </table> <table class="table whereQ" style="width: 100%;margin-top: -20px;"> <tr> <td style="text-align: right;padding-right:60px;width: 160px">应付</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 101, $out += $escape(transfer.needPayAllMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">已付</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 107, $out += $escape(transfer.payedMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">现收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 113, $out += $escape(transfer.currentNeedPayMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">未付</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 119, $out += $escape(transfer.UnIncomeMoney), $out += '</span> </td> </tr> <tr> <td colspan="2" class="text-a-l"><span style="margin-left: 10px;">请仔细阅读并盖章确认之后回传！谢谢！</span></td> </tr> </table> <p style="text-align: right;margin-top: 10px;"><spanclass="', 
            $line = 127, transfer.outOPUserName || transfer.outOPUserMobileNumberr ? $line = 127 : ($out += "hidden", 
            $line = 127), $out += '"></span><span>外转操作人：</span> <span>', $line = 127, $out += $escape(transfer.outOPUserName), 
            $out += "</span> <span>", $line = 127, $out += $escape(transfer.outOPUserMobileNumberr), 
            $out += '</span></p> <p style="text-align: right;margin-top: -8px;" class="', $line = 128, 
            transfer.faxNumber ? $line = 128 : ($out += "hidden", $line = 128), $out += '">传真：', 
            $line = 128, $out += $escape(transfer.faxNumber), $out += '</p> <p style="text-align: right;margin-top: -8px;"><span>', 
            $line = 129, $out += $escape($helpers.dateFormat(transfer.nowTime, "yyyy-MM-dd hh:mm:ss")), 
            $out += '</span></p> </div> </form> <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="touristGroupViewAccount" id="T-touristGroupViewAccount">\r\n    <div class="form-inline" style="text-align:center;margin: 15px 0px 25px 0px;">\r\n        <div class="form-group">\r\n            <h4 style="margin: auto;">\r\n            {{if transfer.companyLogo !=null && transfer.companyLogo !=""}} \r\n            <img src="{{transfer.companyLogo}}"class="imgViewAccount" alt=" " style="width: 35px;height: 35px">\r\n            {{/if}}\r\n            <span class="mar-l-5">{{transfer.travelName}}</span>\r\n        </h4>\r\n        </div>\r\n        <div class="form-group pull-right mar-r-20 globalAdd">\r\n            <button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;line-height:6px">\r\n                <i class="ace-icon fa fa-print"></i>打印\r\n            </button>\r\n        </div>\r\n    </div>\r\n    \r\n    <form action="">\r\n        <div class="viewAccountsMain">\r\n            <p>\r\n                <span>致</span> \r\n                <span style="margin-left: 4px;">{{partnerAgency.travelAgencyName}}</span> \r\n                <span class="mar-l-5">您好！</span>\r\n            </p>\r\n            <p>\r\n                <span>我社：</span> \r\n                <span>(收客单号)</span>\r\n                <span>{{transfer.orderNumber}}</span> \r\n                <span class="mar-l-8">(线路产品)</span> <span>{{lineProduct.name}},</span> \r\n                <span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span>\r\n            </p>\r\n            <table class="table whereQ whereTwo" style="width: 100%;">\r\n                <tr>\r\n                    <td class="textaR-paR">人数</td>\r\n                    <td class="textaR-paL">{{transfer.count}}</td>\r\n                    <td class="textaR-paR">联系人</td>\r\n                    <td class="textaR-paL"><span>{{transfer.contactName}}</span><span class="mar-l-5">{{transfer.contactPhone}}</span></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="textaR-paR">接站牌</td>\r\n                    <td class="textaR-paL">{{transfer.welcomeBoard}}</td>\r\n                    <td class="textaR-paR">送客地点</td>\r\n                    <td class="textaR-paL"><span>{{transfer.sendPosition}}</span></td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="textaR-paR">备注</td>\r\n                    <td class="textaR-paL" colspan="3">{{transfer.remark}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td class="textaR-paR">出团日期</td>\r\n                    <td class="textaR-paL">{{transfer.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                    <td class="textaR-paR">完团日期</td>\r\n                    <td class="textaR-paL">{{transfer.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                </tr>\r\n                <tr>\r\n                     <td class="textaR-paR">全陪</td>\r\n                    <td class="textaR-paL"><span>{{transfer.accompanyGuideName}}</span><span class="mar-l-5">{{transfer.accompanyGuideMobile}}</span></td>\r\n                    <td class="textaR-paR">针对客源</td>\r\n                    <td class="textaR-paL">{{if transfer.customerType == 0}}散客{{/if}}{{if transfer.customerType == 1}}团体{{/if}}</td>\r\n                </tr>\r\n            </table>\r\n\r\n                <table class="table table-bordered"> \r\n                    <thead>\r\n                        <tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2">\r\n                            <th class="th-border" width="160">费用项</th>\r\n                            <th class="th-border">数量</th>\r\n                            <th class="th-border">单价</th>\r\n                            <th class="th-border">金额</th>\r\n                            <th class="th-border">说明</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody class="addCostTbody">\r\n                        {{each transfer.feeList as transfer}}\r\n                            <tr data-entity-id="">\r\n                                <td>\r\n                                    {{transfer.name}}\r\n                                </td>\r\n                                <td>\r\n                                    <span class="F-float F-count">{{transfer.count}}</span>\r\n                                </td>\r\n                                <td>\r\n                                    <span class="F-float F-money">{{transfer.price}}</span>\r\n                                </td>\r\n\r\n                                <td>\r\n                                    <span class="F-float F-money">{{transfer.price*transfer.count}}</span>\r\n                                </td>\r\n                                <td class="textaR-paL">\r\n                                    {{transfer.remark}}\r\n                                </td>\r\n\r\n                            </tr>\r\n                        {{/each}}      \r\n                    </tbody>\r\n            </table>\r\n            <table class="table whereQ" style="width: 100%;margin-top: -20px;">\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">应付</td>\r\n                    <td class="textaR-paL">\r\n                        <span class="F-float F-money">{{transfer.needPayAllMoney}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">已付</td>\r\n                    <td class="textaR-paL">\r\n                        <span class="F-float F-money">{{transfer.payedMoney}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">现收</td>\r\n                    <td class="textaR-paL">\r\n                        <span class="F-float F-money">{{transfer.currentNeedPayMoney}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td style="text-align: right;padding-right:60px;width: 160px">未付</td>\r\n                    <td class="textaR-paL">\r\n                        <span class="F-float F-money">{{transfer.UnIncomeMoney}}</span>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n\r\n                    <td colspan="2" class="text-a-l"><span style="margin-left: 10px;">请仔细阅读并盖章确认之后回传！谢谢！</span></td>\r\n                </tr>\r\n            </table>\r\n            <p style="text-align: right;margin-top: 10px;"><spanclass="{{if !!transfer.outOPUserName || transfer.outOPUserMobileNumberr}}{{else}}hidden{{/if}}"></span><span>外转操作人：</span> <span>{{transfer.outOPUserName}}</span> <span>{{transfer.outOPUserMobileNumberr}}</span></p>\r\n            <p style="text-align: right;margin-top: -8px;" class="{{if !!transfer.faxNumber}}{{else}}hidden{{/if}}">传真：{{transfer.faxNumber}}</p>\r\n            <p style="text-align: right;margin-top: -8px;"><span>{{transfer.nowTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</span></p>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> \r\n        <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n    </div>\r\n    \r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});