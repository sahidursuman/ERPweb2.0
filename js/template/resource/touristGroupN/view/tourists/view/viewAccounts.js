/*TMODJS:{"debug":true,"version":5,"md5":"92337e9f03c9163674e6122618a0d83b"}*/
define(function(require) {
    return require("../../../../../template")("resource/touristGroupN/view/tourists/view/viewAccounts", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, touristGroup = $data.touristGroup, $escape = $utils.$escape, partnerAgency = $data.partnerAgency, lineProduct = $data.lineProduct, $each = $utils.$each, $out = ($data.$index, 
            "");
            return $out += '<div class="touristGroupViewAccount" id="T-touristGroupViewAccount"> <div class="form-inline" style="text-align:center;margin: 15px 0px 25px 0px;"> <div class="form-group"> <h4 style="margin: auto;"> ', 
            $line = 5, null != touristGroup.companyLogo && "" != touristGroup.companyLogo && ($out += ' <img src="', 
            $line = 6, $out += $escape(touristGroup.companyLogo), $out += '" class="imgViewAccount" alt=" " style="width: 35px;height: 35px"> ', 
            $line = 7), $out += ' <span class="mar-l-5">', $line = 8, $out += $escape(touristGroup.travelName), 
            $out += '</span> </h4> </div> <div class="form-group pull-right mar-r-20 globalAdd"> <button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;"> <i class="ace-icon fa fa-print"></i>打印 </button> </div> </div> <form action=""> <div class="viewAccountsMain"> <p> <span>致</span> <span style="margin-left: 4px;">', 
            $line = 22, $out += $escape(partnerAgency.travelAgencyName), $out += '</span> <span class="mar-l-5"></span> (<span>', 
            $line = 23, $out += $escape(partnerAgency.partnerAgencyContact), $out += '</span> <span class="mar-l-3">', 
            $line = 24, $out += $escape(partnerAgency.partnerAgencyName), $out += '</span>) <span class="mar-l-5">您好！</span> </p> <p> <span>贵单位：</span> <span>(收客单号)</span> <span>', 
            $line = 29, $out += $escape(touristGroup.orderNumber), $out += '</span> <span class="mar-l-8">(行程)</span> <span>', 
            $line = 30, $out += $escape(lineProduct.name), $out += ',</span> <span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span> </p> <table class="table whereQ whereTwo" style="width: 100%;"> <tr> <td class="textaR-paR">人数</td> <td class="textaR-paL">', 
            $line = 36, $out += $escape(touristGroup.count), $out += '</td> <td class="textaR-paR">联系人</td> <td class="textaR-paL"><span>', 
            $line = 38, $out += $escape(touristGroup.contactName), $out += '</span><span class="mar-l-5">', 
            $line = 38, $out += $escape(touristGroup.contactPhone), $out += '</span></td> </tr> <tr> <td class="textaR-paR">出团日期</td> <td class="textaR-paL">', 
            $line = 42, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '</td> <td class="textaR-paR">完团日期</td> <td class="textaR-paL">', $line = 44, 
            $out += $escape($helpers.dateFormat(touristGroup.endTime, "yyyy-MM-dd")), $out += '</td> </tr> <tr> <td class="textaR-paR">团号</td> <td class="textaR-paL">', 
            $line = 48, $out += $escape(touristGroup.tripNumber), $out += '</td> <td class="textaR-paR">针对客源</td> <td class="textaR-paL">', 
            $line = 50, 0 == touristGroup.customerType && ($out += "散客", $line = 50), $line = 50, 
            1 == touristGroup.customerType && ($out += "团体", $line = 50), $out += '</td> </tr> <tr> <td class="textaR-paR">导游</td> <td class="textaR-paL">', 
            $line = 54, $out += $escape(touristGroup.guidName), $out += '</td> <td class="textaR-paR">全陪</td> <td class="textaR-paL"><span>', 
            $line = 56, $out += $escape(touristGroup.accompanyGuideName), $out += '</span><span class="mar-l-5">', 
            $line = 56, $out += $escape(touristGroup.accompanyGuideMobile), $out += '</span></td> </tr> </table> <table class="table table-bordered"> <thead> <tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2"> <th class="th-border" width="160">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody class="addCostTbody"> ', 
            $line = 71, $each(touristGroup.touristGroupFeeList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 72, $out += $escape(touristGroup.id), $out += '"> <td> ', 
                $line = 74, $out += $escape(touristGroup.name), $out += ' </td> <td> <span class="F-float F-count">', 
                $line = 77, $out += $escape(touristGroup.count), $out += '</span> </td> <td> <span class="F-float F-money">', 
                $line = 80, $out += $escape(touristGroup.price), $out += '</span> </td> <td> <span class="F-float F-money">', 
                $line = 84, $out += $escape(touristGroup.price * touristGroup.count), $out += '</span> </td> <td class="textaR-paL"> ', 
                $line = 87, $out += $escape(touristGroup.remark), $out += " </td> </tr> ", $line = 91;
            }), $out += ' </tbody> </table> <table class="table whereQ" style="width: 100%;margin-top: -20px;"> <tr> <td style="text-align: right;padding-right:60px;width: 160px">应收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 98, $out += $escape(touristGroup.needPayAllMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">已收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 104, $out += $escape(touristGroup.payedMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">现收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 110, $out += $escape(touristGroup.currentNeedPayMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">未收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 116, $out += $escape(touristGroup.UnIncomeMoney), $out += '</span> </td> </tr> <tr> <td colspan="2" class="text-a-l"><span style="margin-left: 10px;">请仔细阅读并盖章确认之后回传！谢谢！</span></td> </tr> </table> <p style="text-align: right;margin-top: 10px;"><span class="', 
            $line = 123, touristGroup.outOPUserName || touristGroup.outOPUserName ? $line = 123 : ($out += "hidden", 
            $line = 123), $out += '"><span>外联销售：</span> <span>', $line = 123, $out += $escape(touristGroup.outOPUserName), 
            $out += "</span> <span>", $line = 123, $out += $escape(touristGroup.outOPUserMobileNumberr), 
            $out += '</span></span></p> <p style="text-align: right;margin-top: -8px;" class="', 
            $line = 124, touristGroup.faxNumber ? $line = 124 : ($out += "hidden", $line = 124), 
            $out += '">传真：', $line = 124, $out += $escape(touristGroup.faxNumber), $out += '</p> <p style="text-align: right;margin-top: -8px;"><span>', 
            $line = 125, $out += $escape($helpers.dateFormat(touristGroup.nowTime, "yyyy-MM-dd hh:mm:ss")), 
            $out += '</span></p> </div> </form> <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="touristGroupViewAccount" id="T-touristGroupViewAccount">\r\n	<div class="form-inline" style="text-align:center;margin: 15px 0px 25px 0px;">\r\n		<div class="form-group">\r\n			<h4 style="margin: auto;">\r\n			{{if touristGroup.companyLogo !=null && touristGroup.companyLogo !=""}}\r\n			<img src="{{touristGroup.companyLogo}}" class="imgViewAccount" alt=" " style="width: 35px;height: 35px">\r\n			{{/if}}\r\n			<span class="mar-l-5">{{touristGroup.travelName}}</span>\r\n		</h4>\r\n		</div>\r\n		<div class="form-group pull-right mar-r-20 globalAdd">\r\n			<button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;">\r\n				<i class="ace-icon fa fa-print"></i>打印\r\n			</button>\r\n		</div>\r\n	</div>\r\n	\r\n	<form action="">\r\n		<div class="viewAccountsMain">\r\n			<p>\r\n				<span>致</span> \r\n				<span style="margin-left: 4px;">{{partnerAgency.travelAgencyName}}</span> \r\n				<span class="mar-l-5"></span> (<span>{{partnerAgency.partnerAgencyContact}}</span> \r\n				<span class="mar-l-3">{{partnerAgency.partnerAgencyName}}</span>) <span class="mar-l-5">您好！</span>\r\n			</p>\r\n			<p>\r\n				<span>贵单位：</span> \r\n				<span>(收客单号)</span>\r\n				<span>{{touristGroup.orderNumber}}</span> \r\n				<span class="mar-l-8">(行程)</span> <span>{{lineProduct.name}},</span> \r\n				<span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span>\r\n			</p>\r\n			<table class="table whereQ whereTwo" style="width: 100%;">\r\n				<tr>\r\n					<td class="textaR-paR">人数</td>\r\n					<td class="textaR-paL">{{touristGroup.count}}</td>\r\n					<td class="textaR-paR">联系人</td>\r\n					<td class="textaR-paL"><span>{{touristGroup.contactName}}</span><span class="mar-l-5">{{touristGroup.contactPhone}}</span></td>\r\n				</tr>\r\n				<tr>\r\n					<td class="textaR-paR">出团日期</td>\r\n					<td class="textaR-paL">{{touristGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td class="textaR-paR">完团日期</td>\r\n					<td class="textaR-paL">{{touristGroup.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="textaR-paR">团号</td>\r\n					<td class="textaR-paL">{{touristGroup.tripNumber}}</td>\r\n					<td class="textaR-paR">针对客源</td>\r\n					<td class="textaR-paL">{{if touristGroup.customerType == 0}}散客{{/if}}{{if touristGroup.customerType == 1}}团体{{/if}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="textaR-paR">导游</td>\r\n					<td class="textaR-paL">{{touristGroup.guidName}}</td>\r\n					<td class="textaR-paR">全陪</td>\r\n					<td class="textaR-paL"><span>{{touristGroup.accompanyGuideName}}</span><span class="mar-l-5">{{touristGroup.accompanyGuideMobile}}</span></td>\r\n				</tr>\r\n			</table>\r\n\r\n				<table class="table table-bordered"> \r\n					<thead>\r\n						<tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2">\r\n							<th class="th-border" width="160">费用项</th>\r\n							<th class="th-border">数量</th>\r\n							<th class="th-border">单价</th>\r\n							<th class="th-border">金额</th>\r\n							<th class="th-border">说明</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody class="addCostTbody">\r\n						{{each touristGroup.touristGroupFeeList as touristGroup}}\r\n							<tr data-entity-id="{{touristGroup.id}}">\r\n								<td>\r\n									{{touristGroup.name}}\r\n								</td>\r\n								<td>\r\n									<span class="F-float F-count">{{touristGroup.count}}</span>\r\n								</td>\r\n								<td>\r\n									<span class="F-float F-money">{{touristGroup.price}}</span>\r\n								</td>\r\n\r\n								<td>\r\n									<span class="F-float F-money">{{touristGroup.price*touristGroup.count}}</span>\r\n								</td>\r\n								<td class="textaR-paL">\r\n									{{touristGroup.remark}}\r\n								</td>\r\n\r\n							</tr>\r\n								{{/each}}\r\n					</tbody>\r\n			</table>\r\n			<table class="table whereQ" style="width: 100%;margin-top: -20px;">\r\n				<tr>\r\n					<td style="text-align: right;padding-right:60px;width: 160px">应收</td>\r\n					<td class="textaR-paL">\r\n						<span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span>\r\n					</td>\r\n				</tr>\r\n				<tr>\r\n					<td style="text-align: right;padding-right:60px;width: 160px">已收</td>\r\n					<td class="textaR-paL">\r\n						<span class="F-float F-money">{{touristGroup.payedMoney}}</span>\r\n					</td>\r\n				</tr>\r\n				<tr>\r\n					<td style="text-align: right;padding-right:60px;width: 160px">现收</td>\r\n					<td class="textaR-paL">\r\n						<span class="F-float F-money">{{touristGroup.currentNeedPayMoney}}</span>\r\n					</td>\r\n				</tr>\r\n				<tr>\r\n					<td style="text-align: right;padding-right:60px;width: 160px">未收</td>\r\n					<td class="textaR-paL">\r\n						<span class="F-float F-money">{{touristGroup.UnIncomeMoney}}</span>\r\n					</td>\r\n				</tr>\r\n				<tr>\r\n					<td colspan="2" class="text-a-l"><span style="margin-left: 10px;">请仔细阅读并盖章确认之后回传！谢谢！</span></td>\r\n				</tr>\r\n			</table>\r\n			<p style="text-align: right;margin-top: 10px;"><span class="{{if !!touristGroup.outOPUserName || !!touristGroup.outOPUserName}}{{else}}hidden{{/if}}"><span>外联销售：</span> <span>{{touristGroup.outOPUserName}}</span> <span>{{touristGroup.outOPUserMobileNumberr}}</span></span></p>\r\n			<p style="text-align: right;margin-top: -8px;" class="{{if !!touristGroup.faxNumber}}{{else}}hidden{{/if}}">传真：{{touristGroup.faxNumber}}</p>\r\n			<p style="text-align: right;margin-top: -8px;"><span>{{touristGroup.nowTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</span></p>\r\n		</div>\r\n	</form>\r\n	<div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> \r\n		<button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n	</div>\r\n	\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});