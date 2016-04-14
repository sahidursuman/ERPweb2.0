/*TMODJS:{"debug":true,"version":189,"md5":"7cbcc6a9cca80b97ce15c73fdef9a9cd"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/viewAccounts", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, imgUrl = $data.imgUrl, touristGroup = $data.touristGroup, partnerAgency = $data.partnerAgency, lineProduct = $data.lineProduct, $each = $utils.$each, $out = ($data.$index, 
            "");
            return $out += '<div class="touristGroupViewAccount" id="T-touristGroupViewAccount"> <div class="form-inline" style="text-align:center;margin: 15px 0px 25px 0px;"> <div class="form-group"> <h4 style="margin: auto;"> <img src="', 
            $line = 5, $out += $escape(imgUrl), $line = 5, $out += $escape(touristGroup.companyLogo), 
            $out += '" class="imgViewAccount" alt=" " style="width: 35px;height: 35px"><span class="mar-l-5">', 
            $line = 5, $out += $escape(touristGroup.travelName), $out += '</span> </h4> </div> <div class="form-group pull-right mar-r-20 globalAdd"> <button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;"> <i class="ace-icon fa fa-print"></i>打印 </button> </div> </div> <form action=""> <div class="viewAccountsMain"> <p> <span>致</span> <span style="margin-left: 4px;">', 
            $line = 19, $out += $escape(partnerAgency.travelAgencyName), $out += '</span> <span class="mar-l-5"></span> (<span>', 
            $line = 20, $out += $escape(partnerAgency.partnerAgencyContact), $out += '</span> <span class="mar-l-3">', 
            $line = 21, $out += $escape(partnerAgency.partnerAgencyName), $out += '</span>) <span class="mar-l-5">您好！</span> </p> <p> <span>贵单位：</span> <span>(收客单号)</span> <span>', 
            $line = 26, $out += $escape(touristGroup.orderNumber), $out += '</span> <span class="mar-l-8">(线路产品)</span> <span>', 
            $line = 27, $out += $escape(lineProduct.name), $out += ',</span> <span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span> </p> <table class="whereQ whereTwo" style="width: 100%;"> <tr> <td class="textaR-paR">人数</td> <td class="textaR-paL">', 
            $line = 33, $out += $escape(touristGroup.count), $out += '</td> <td class="textaR-paR">联系人</td> <td class="textaR-paL"><span>', 
            $line = 35, $out += $escape(touristGroup.contactName), $out += '</span><span class="mar-l-5">', 
            $line = 35, $out += $escape(touristGroup.contactPhone), $out += '</span></td> </tr> <tr> <td class="textaR-paR">出团日期</td> <td class="textaR-paL">', 
            $line = 39, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '</td> <td class="textaR-paR">完团日期</td> <td class="textaR-paL">', $line = 41, 
            $out += $escape($helpers.dateFormat(touristGroup.endTime, "yyyy-MM-dd")), $out += '</td> </tr> <tr> <td class="textaR-paR">团号</td> <td class="textaR-paL">', 
            $line = 45, $out += $escape(touristGroup.tripNumber), $out += '</td> <td class="textaR-paR">针对客源</td> <td class="textaR-paL">', 
            $line = 47, 0 == touristGroup.customerType && ($out += "散客", $line = 47), $line = 47, 
            1 == touristGroup.customerType && ($out += "团体", $line = 47), $out += '</td> </tr> <tr> <td class="textaR-paR">导游</td> <td class="textaR-paL">', 
            $line = 51, $out += $escape(touristGroup.guidName), $out += '</td> <td class="textaR-paR">全陪</td> <td class="textaR-paL"><span>', 
            $line = 53, $out += $escape(touristGroup.accompanyGuideName), $out += '</span><span class="mar-l-5">', 
            $line = 53, $out += $escape(touristGroup.accompanyGuideMobile), $out += '</span></td> </tr> </table> <table class="table table-bordered"> <thead> <tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2"> <th class="th-border" width="160">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody class="addCostTbody"> ', 
            $line = 68, $each(touristGroup.touristGroupFeeList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 69, $out += $escape(touristGroup.id), $out += '"> <td> ', 
                $line = 71, $out += $escape(touristGroup.name), $out += ' </td> <td> <span class="F-float F-count">', 
                $line = 74, $out += $escape(touristGroup.count), $out += '</span> </td> <td> <span class="F-float F-money">', 
                $line = 77, $out += $escape(touristGroup.price), $out += '</span> </td> <td> <span class="F-float F-money">', 
                $line = 81, $out += $escape(touristGroup.price * touristGroup.count), $out += '</span> </td> <td class="textaR-paL"> ', 
                $line = 84, $out += $escape(touristGroup.remark), $out += " </td> </tr> ", $line = 88;
            }), $out += ' </tbody> </table> <table class="whereQ" style="width: 100%;margin-top: -20px;"> <tr> <td style="text-align: right;padding-right:60px;width: 160px">应收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 95, $out += $escape(touristGroup.needPayAllMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">已收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 101, $out += $escape(touristGroup.payedMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">现收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 107, $out += $escape(touristGroup.currentNeedPayMoney), $out += '</span> </td> </tr> <tr> <td style="text-align: right;padding-right:60px;width: 160px">未收</td> <td class="textaR-paL"> <span class="F-float F-money">', 
            $line = 113, $out += $escape(touristGroup.UnIncomeMoney), $out += '</span> </td> </tr> <tr> <td colspan="2"><span style="margin-left: 10px;">请仔细阅读并盖章确认之后回传！谢谢！</span></td> </tr> </table> <p style="text-align: right;margin-top: 10px;"><span>外联销售：</span> <span>', 
            $line = 120, $out += $escape(touristGroup.outOPUserName), $out += "</span> <span>", 
            $line = 120, $out += $escape(touristGroup.outOPUserMobileNumberr), $out += '</span></p> <p style="text-align: right;margin-top: -8px;" class="', 
            $line = 121, touristGroup.faxNumber ? $line = 121 : ($out += "hidden", $line = 121), 
            $out += '">传真：', $line = 121, $out += $escape(touristGroup.faxNumber), $out += '</p> <p style="text-align: right;margin-top: -8px;"><span>', 
            $line = 122, $out += $escape($helpers.dateFormat(touristGroup.nowTime, "yyyy-MM-dd hh:mm:ss")), 
            $out += '</span></p> </div> </form> <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="touristGroupViewAccount" id="T-touristGroupViewAccount">\r\n	<div class="form-inline" style="text-align:center;margin: 15px 0px 25px 0px;">\r\n		<div class="form-group">\r\n			<h4 style="margin: auto;">\r\n			<img src="{{imgUrl}}{{touristGroup.companyLogo}}" class="imgViewAccount" alt=" " style="width: 35px;height: 35px"><span class="mar-l-5">{{touristGroup.travelName}}</span>\r\n		</h4>\r\n		</div>\r\n		<div class="form-group pull-right mar-r-20 globalAdd">\r\n			<button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;">\r\n				<i class="ace-icon fa fa-print"></i>打印\r\n			</button>\r\n		</div>\r\n	</div>\r\n	\r\n	<form action="">\r\n		<div class="viewAccountsMain">\r\n			<p>\r\n				<span>致</span> \r\n				<span style="margin-left: 4px;">{{partnerAgency.travelAgencyName}}</span> \r\n				<span class="mar-l-5"></span> (<span>{{partnerAgency.partnerAgencyContact}}</span> \r\n				<span class="mar-l-3">{{partnerAgency.partnerAgencyName}}</span>) <span class="mar-l-5">您好！</span>\r\n			</p>\r\n			<p>\r\n				<span>贵单位：</span> \r\n				<span>(收客单号)</span>\r\n				<span>{{touristGroup.orderNumber}}</span> \r\n				<span class="mar-l-8">(线路产品)</span> <span>{{lineProduct.name}},</span> \r\n				<span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span>\r\n			</p>\r\n			<table class="whereQ whereTwo" style="width: 100%;">\r\n				<tr>\r\n					<td class="textaR-paR">人数</td>\r\n					<td class="textaR-paL">{{touristGroup.count}}</td>\r\n					<td class="textaR-paR">联系人</td>\r\n					<td class="textaR-paL"><span>{{touristGroup.contactName}}</span><span class="mar-l-5">{{touristGroup.contactPhone}}</span></td>\r\n				</tr>\r\n				<tr>\r\n					<td class="textaR-paR">出团日期</td>\r\n					<td class="textaR-paL">{{touristGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n					<td class="textaR-paR">完团日期</td>\r\n					<td class="textaR-paL">{{touristGroup.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="textaR-paR">团号</td>\r\n					<td class="textaR-paL">{{touristGroup.tripNumber}}</td>\r\n					<td class="textaR-paR">针对客源</td>\r\n					<td class="textaR-paL">{{if touristGroup.customerType == 0}}散客{{/if}}{{if touristGroup.customerType == 1}}团体{{/if}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="textaR-paR">导游</td>\r\n					<td class="textaR-paL">{{touristGroup.guidName}}</td>\r\n					<td class="textaR-paR">全陪</td>\r\n					<td class="textaR-paL"><span>{{touristGroup.accompanyGuideName}}</span><span class="mar-l-5">{{touristGroup.accompanyGuideMobile}}</span></td>\r\n				</tr>\r\n			</table>\r\n\r\n				<table class="table table-bordered"> \r\n					<thead>\r\n						<tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2">\r\n							<th class="th-border" width="160">费用项</th>\r\n							<th class="th-border">数量</th>\r\n							<th class="th-border">单价</th>\r\n							<th class="th-border">金额</th>\r\n							<th class="th-border">说明</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody class="addCostTbody">\r\n						{{each touristGroup.touristGroupFeeList as touristGroup}}\r\n							<tr data-entity-id="{{touristGroup.id}}">\r\n								<td>\r\n									{{touristGroup.name}}\r\n								</td>\r\n								<td>\r\n									<span class="F-float F-count">{{touristGroup.count}}</span>\r\n								</td>\r\n								<td>\r\n									<span class="F-float F-money">{{touristGroup.price}}</span>\r\n								</td>\r\n\r\n								<td>\r\n									<span class="F-float F-money">{{touristGroup.price*touristGroup.count}}</span>\r\n								</td>\r\n								<td class="textaR-paL">\r\n									{{touristGroup.remark}}\r\n								</td>\r\n\r\n							</tr>\r\n								{{/each}}\r\n					</tbody>\r\n			</table>\r\n			<table class="whereQ" style="width: 100%;margin-top: -20px;">\r\n				<tr>\r\n					<td style="text-align: right;padding-right:60px;width: 160px">应收</td>\r\n					<td class="textaR-paL">\r\n						<span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span>\r\n					</td>\r\n				</tr>\r\n				<tr>\r\n					<td style="text-align: right;padding-right:60px;width: 160px">已收</td>\r\n					<td class="textaR-paL">\r\n						<span class="F-float F-money">{{touristGroup.payedMoney}}</span>\r\n					</td>\r\n				</tr>\r\n				<tr>\r\n					<td style="text-align: right;padding-right:60px;width: 160px">现收</td>\r\n					<td class="textaR-paL">\r\n						<span class="F-float F-money">{{touristGroup.currentNeedPayMoney}}</span>\r\n					</td>\r\n				</tr>\r\n				<tr>\r\n					<td style="text-align: right;padding-right:60px;width: 160px">未收</td>\r\n					<td class="textaR-paL">\r\n						<span class="F-float F-money">{{touristGroup.UnIncomeMoney}}</span>\r\n					</td>\r\n				</tr>\r\n				<tr>\r\n					<td colspan="2"><span style="margin-left: 10px;">请仔细阅读并盖章确认之后回传！谢谢！</span></td>\r\n				</tr>\r\n			</table>\r\n			<p style="text-align: right;margin-top: 10px;"><span>外联销售：</span> <span>{{touristGroup.outOPUserName}}</span> <span>{{touristGroup.outOPUserMobileNumberr}}</span></p>\r\n			<p style="text-align: right;margin-top: -8px;" class="{{if !!touristGroup.faxNumber}}{{else}}hidden{{/if}}">传真：{{touristGroup.faxNumber}}</p>\r\n			<p style="text-align: right;margin-top: -8px;"><span>{{touristGroup.nowTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</span></p>\r\n		</div>\r\n	</form>\r\n	<div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> \r\n		<button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n	</div>\r\n	\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});