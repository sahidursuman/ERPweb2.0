/*TMODJS:{"debug":true,"version":139,"md5":"d7d6f874cf36cc9d8520d81eb5cebb56"}*/
define(function(require){return require('../../../../../template')('resource/touristGroupN/view/tourists/view/viewAccounts', function($data,$filename
/**/) {
try{'use strict';var $utils=this,$helpers=$utils.$helpers,$line=0,touristGroup=$data.touristGroup,$escape=$utils.$escape,partnerAgency=$data.partnerAgency,lineProduct=$data.lineProduct,showTravalList=$data.showTravalList,$each=$utils.$each,lineProductDay=$data.lineProductDay,rs=$data.rs,$index=$data.$index,$out='';$out+='<div class="touristGroupViewAccount" id="T-touristGroupViewAccount"> <div class="form-inline" style="text-align:center;margin: 15px 0px 25px 0px;"> <div class="form-group"> <h4 style="margin: auto;"> ';
$line=5;if(touristGroup.companyLogo !=null && touristGroup.companyLogo !=""){
$out+=' <img src="';
$line=6;$out+=$escape(touristGroup.companyLogo);
$out+='" class="imgViewAccount" alt=" " style="width: 35px;height: 35px"> ';
$line=7;}
$out+=' <span class="mar-l-5">';
$line=8;$out+=$escape(touristGroup.travelName);
$out+='</span> </h4> </div> <div class="form-group pull-right mar-r-20 globalAdd"> <button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;"> <i class="ace-icon fa fa-print"></i>打印 </button> </div> </div> <form action=""> <div class="viewAccountsMain view-InfoPrint"> <p> <span>致</span> <span style="margin-left: 4px;">';
$line=22;$out+=$escape(partnerAgency.travelAgencyName);
$out+='</span> <span class="mar-l-5"></span> (<span>';
$line=23;$out+=$escape(partnerAgency.partnerAgencyContact);
$out+='</span> <span class="mar-l-3">';
$line=24;$out+=$escape(partnerAgency.partnerAgencyName);
$out+='</span>) <span class="mar-l-5">您好！</span> </p> <p> <span>贵单位：</span> <span>(收客单号)</span> <span>';
$line=29;$out+=$escape(touristGroup.orderNumber);
$out+='</span> <span class="mar-l-8">(行程)</span> <span>';
$line=30;$out+=$escape(lineProduct.name);
$out+=',</span> <span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span> </p> <table class="table whereQ whereTwo" style="width: 100%;"> <tr class="view-TranAccountsPrint"> <td class="textaR-paR"><span>人数</span></td> <td class="textaR-paL"><span>';
$line=36;$out+=$escape(touristGroup.count);
$out+='</span></td> <td class="textaR-paR"><span>联系人</span></td> <td class="textaR-paL"><span>';
$line=38;$out+=$escape(touristGroup.contactName);
$out+='</span><span class="mar-l-5">';
$line=38;$out+=$escape(touristGroup.contactPhone);
$out+='</span></td> </tr> <tr class="view-TranAccountsPrint"> <td class="textaR-paR"><span>出团日期</span></td> <td class="textaR-paL"><span>';
$line=42;$out+=$escape($helpers. dateFormat(touristGroup.startTime ,  'yyyy-MM-dd'));
$out+='</span></td> <td class="textaR-paR"><span>完团日期</td> <td class="textaR-paL"><span>';
$line=44;$out+=$escape($helpers. dateFormat(touristGroup.endTime ,  'yyyy-MM-dd'));
$out+='</span></td> </tr> <tr class="view-TranAccountsPrint"> <td class="textaR-paR"><span>团号</span></td> <td class="textaR-paL"><span>';
$line=48;$out+=$escape(touristGroup.tripNumber);
$out+='</span></td> <td class="textaR-paR"><span>针对客源</span></td> <td class="textaR-paL"><span>';
$line=50;if(touristGroup.customerType == 0){
$out+='散客';
$line=50;}
$line=50;if(touristGroup.customerType == 1){
$out+='团体';
$line=50;}
$out+='</span></td> </tr> <tr class="view-TranAccountsPrint"> <td class="textaR-paR"><span>导游</span></td> <td class="textaR-paL"><span>';
$line=54;$out+=$escape(touristGroup.guidName);
$out+='</span></td> <td class="textaR-paR"><span>全陪</span></td> <td class="textaR-paL"><span>';
$line=56;$out+=$escape(touristGroup.accompanyGuideName);
$out+='</span><span class="mar-l-5">';
$line=56;$out+=$escape(touristGroup.accompanyGuideMobile);
$out+='</span></td> </tr> </table>  ';
$line=61;if(showTravalList){
$out+=' <table class="table table-bordered" style="margin-bottom:0px;"> <thead> <tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2"> <th class="th-border" width="160">日期</th> <th class="th-border">行程安排</th> <th class="th-border">早餐</th> <th class="th-border">午餐</th> <th class="th-border">晚餐</th> </tr> </thead> <tbody> ';
$line=73;$each(lineProductDay,function(rs,$index){
$out+=' <tr> <td> <span>';
$line=76;$out+=$escape(rs.whichDay);
$out+='</span> </td> <td> <span>';
$line=79;$out+=$escape(rs.title);
$out+='</span> </td> <td> ';
$line=83;if(rs.includeRest.b){
$out+=' <i class="ace-icon fa fa-check"></i> ';
$line=85;}else{
$out+=' <i class="fa fa-times"></i> ';
$line=87;}
$out+=' </td> <td> ';
$line=91;if(rs.includeRest.l){
$out+=' <i class="ace-icon fa fa-check"></i> ';
$line=93;}else{
$out+=' <i class="fa fa-times"></i> ';
$line=95;}
$out+=' </td> <td> ';
$line=99;if(rs.includeRest.d){
$out+=' <i class="ace-icon fa fa-check"></i> ';
$line=101;}else{
$out+=' <i class="fa fa-times"></i> ';
$line=103;}
$out+=' </td> </tr> ';
$line=106;});
$out+=' </tbody> </table> ';
$line=109;}
$out+=' <table class="table table-bordered"> <thead> <tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2"> <th class="th-border" width="160">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">单位</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody class="addCostTbody"> ';
$line=122;$each(touristGroup.touristGroupFeeList,function(touristGroup,$index){
$out+=' <tr class="view-TranAccountsPrint" data-entity-id="';
$line=123;$out+=$escape(touristGroup.id);
$out+='"> <td> <span>';
$line=125;$out+=$escape(touristGroup.name);
$out+='</span> </td> <td> <span class="F-float F-count">';
$line=128;$out+=$escape(touristGroup.count);
$out+='</span> </td> <td> <span class="F-float F-money">';
$line=131;$out+=$escape(touristGroup.price);
$out+='</span> </td> <td> <span>';
$line=134;$out+=$escape(touristGroup.days);
$out+='</span> </td> <td> <span class="F-float F-money">';
$line=137;$out+=$escape(touristGroup.price*touristGroup.count*(touristGroup.days || 1));
$out+='</span> </td> <td class="textaR-paL"> ';
$line=140;$out+=$escape(touristGroup.remark);
$out+=' </td> </tr> ';
$line=144;});
$out+=' </tbody> </table> <table class="table whereQ" style="width: 100%;margin-top: -20px;margin-bottom:0px;"> <tr class="view-TranAccountsPrint"> <td style="text-align: center;width: 160px"><span>合计</span></td> <td style="text-align: left;" colspan="5"> <span>应收:</span> <span class="F-float F-money mar-r-5">';
$line=152;$out+=$escape(touristGroup.needPayAllMoney);
$out+='</span> <span>已收:</span> <span class="F-float F-money mar-r-5">';
$line=154;$out+=$escape(touristGroup.payedMoney);
$out+='</span> <span>现收:</span> <span class="F-float F-money mar-r-5">';
$line=156;$out+=$escape(touristGroup.currentNeedPayMoney);
$out+='</span> <span>未收:</span> <span class="F-float F-money mar-r-5">';
$line=158;$out+=$escape(touristGroup.UnIncomeMoney);
$out+='</span> </td> </tr> <tr> <td style="text-align: center;width: 160px"><span>备注</span></td> <td style="text-align: left;" colspan="5"> <span> ';
$line=165;$out+=$escape(touristGroup.remark);
$out+=' </span> </td> </tr> </table> <table class="table table-bordered" > <tbody> <tr class="view-TranAccountsPrint"> <td colspan="3" style="text-align:left"> <p>请贵社盖章确认!</p> <p> <span>确认人:</span>______ </p> <p> <span>确认日期:</span> <span class="mar-l-20">年</span> <span class="mar-l-20">月</span> <span class="mar-l-20">日</span> </p> </td> <td colspan="3" style="text-align:left"> <p> <span class="';
$line=187;if(!!touristGroup.outOPUserName || !!touristGroup.outOPUserName){
$line=187;}else{
$out+='hidden';
$line=187;}
$out+='"> <span>外联销售：</span> <span>';
$line=189;$out+=$escape(touristGroup.outOPUserName);
$out+='</span> <span>';
$line=190;$out+=$escape(touristGroup.outOPUserMobileNumberr);
$out+='</span> </span> </p> <p style="margin-top: -8px;" class="';
$line=193;if(!!touristGroup.faxNumber){
$line=193;}else{
$out+='hidden';
$line=193;}
$out+='"> <span>传真：';
$line=194;$out+=$escape(touristGroup.faxNumber);
$out+='</span> </p> <p style="margin-top: -8px;"> <span>日期:</span> <span>';
$line=198;$out+=$escape($helpers. dateFormat(touristGroup.nowTime ,  'yyyy-MM-dd hh:mm:ss'));
$out+='</span> </p> </td> </tr> </tbody> </table> </div> </form> <div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> <button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button> </div> </div>';
return new String($out);}catch(e){throw {filename:$filename,name:'Render Error',message:e.message,line:$line,source:'<div class="touristGroupViewAccount" id="T-touristGroupViewAccount">\r\n	<div class="form-inline" style="text-align:center;margin: 15px 0px 25px 0px;">\r\n		<div class="form-group">\r\n			<h4 style="margin: auto;">\r\n			{{if touristGroup.companyLogo !=null && touristGroup.companyLogo !=""}}\r\n			<img src="{{touristGroup.companyLogo}}" class="imgViewAccount" alt=" " style="width: 35px;height: 35px">\r\n			{{/if}}\r\n			<span class="mar-l-5">{{touristGroup.travelName}}</span>\r\n		</h4>\r\n		</div>\r\n		<div class="form-group pull-right mar-r-20 globalAdd">\r\n			<button class="btn btn-sm btn-success T-printAccountBtn T-noprint" style="height: 24px;">\r\n				<i class="ace-icon fa fa-print"></i>打印\r\n			</button>\r\n		</div>\r\n	</div>\r\n	\r\n	<form action="">\r\n		<div class="viewAccountsMain view-InfoPrint">\r\n			<p>\r\n				<span>致</span> \r\n				<span style="margin-left: 4px;">{{partnerAgency.travelAgencyName}}</span> \r\n				<span class="mar-l-5"></span> (<span>{{partnerAgency.partnerAgencyContact}}</span> \r\n				<span class="mar-l-3">{{partnerAgency.partnerAgencyName}}</span>) <span class="mar-l-5">您好！</span>\r\n			</p>\r\n			<p>\r\n				<span>贵单位：</span> \r\n				<span>(收客单号)</span>\r\n				<span>{{touristGroup.orderNumber}}</span> \r\n				<span class="mar-l-8">(行程)</span> <span>{{lineProduct.name}},</span> \r\n				<span>现将该团费用结算列表如下,请审阅并盖章、签字回执我社！</span>\r\n			</p>\r\n			<table class="table whereQ whereTwo" style="width: 100%;">\r\n				<tr class="view-TranAccountsPrint">\r\n					<td class="textaR-paR"><span>人数</span></td>\r\n					<td class="textaR-paL"><span>{{touristGroup.count}}</span></td>\r\n					<td class="textaR-paR"><span>联系人</span></td>\r\n					<td class="textaR-paL"><span>{{touristGroup.contactName}}</span><span class="mar-l-5">{{touristGroup.contactPhone}}</span></td>\r\n				</tr>\r\n				<tr class="view-TranAccountsPrint">\r\n					<td class="textaR-paR"><span>出团日期</span></td>\r\n					<td class="textaR-paL"><span>{{touristGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}</span></td>\r\n					<td class="textaR-paR"><span>完团日期</td>\r\n					<td class="textaR-paL"><span>{{touristGroup.endTime | dateFormat: \'yyyy-MM-dd\'}}</span></td>\r\n				</tr>\r\n				<tr class="view-TranAccountsPrint">\r\n					<td class="textaR-paR"><span>团号</span></td>\r\n					<td class="textaR-paL"><span>{{touristGroup.tripNumber}}</span></td>\r\n					<td class="textaR-paR"><span>针对客源</span></td>\r\n					<td class="textaR-paL"><span>{{if touristGroup.customerType == 0}}散客{{/if}}{{if touristGroup.customerType == 1}}团体{{/if}}</span></td>\r\n				</tr>\r\n				<tr class="view-TranAccountsPrint">\r\n					<td class="textaR-paR"><span>导游</span></td>\r\n					<td class="textaR-paL"><span>{{touristGroup.guidName}}</span></td>\r\n					<td class="textaR-paR"><span>全陪</span></td>\r\n					<td class="textaR-paL"><span>{{touristGroup.accompanyGuideName}}</span><span class="mar-l-5">{{touristGroup.accompanyGuideMobile}}</span></td>\r\n				</tr>\r\n			</table>\r\n\r\n			<!-- 日程安排 -->\r\n			{{if showTravalList}}\r\n			<table class="table table-bordered" style="margin-bottom:0px;">\r\n				<thead>\r\n					<tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2">\r\n						<th class="th-border" width="160">日期</th>\r\n						<th class="th-border">行程安排</th>\r\n						<th class="th-border">早餐</th>\r\n						<th class="th-border">午餐</th>\r\n						<th class="th-border">晚餐</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody>\r\n					{{each lineProductDay as rs }}\r\n						<tr>\r\n							<td>\r\n								<span>{{rs.whichDay}}</span>\r\n							</td>\r\n							<td>\r\n								<span>{{rs.title}}</span>\r\n							</td>\r\n\r\n							<td>\r\n								{{if rs.includeRest.b}}\r\n									<i class="ace-icon fa fa-check"></i>\r\n								{{else}}\r\n									<i class="fa fa-times"></i>\r\n								{{/if}}\r\n							</td>\r\n								\r\n							<td>\r\n								{{if rs.includeRest.l}}\r\n									<i class="ace-icon fa fa-check"></i>\r\n								{{else}}\r\n									<i class="fa fa-times"></i>\r\n								{{/if}}\r\n							</td>\r\n\r\n							<td>\r\n								{{if rs.includeRest.d}}\r\n									<i class="ace-icon fa fa-check"></i>\r\n								{{else}}\r\n									<i class="fa fa-times"></i>\r\n								{{/if}}\r\n							</td>\r\n						</tr>\r\n					{{/each}}\r\n				</tbody>\r\n			</table>\r\n			{{/if}}\r\n			<table class="table table-bordered"> \r\n				<thead>\r\n					<tr class="view-TranAccountsPrint" style="border: 1px solid #E2E2E2">\r\n						<th class="th-border" width="160">费用项</th>\r\n						<th class="th-border">数量</th>\r\n						<th class="th-border">单价</th>\r\n						<th class="th-border">单位</th>\r\n						<th class="th-border">金额</th>\r\n						<th class="th-border">说明</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="addCostTbody">\r\n					{{each touristGroup.touristGroupFeeList as touristGroup}}\r\n						<tr class="view-TranAccountsPrint" data-entity-id="{{touristGroup.id}}">\r\n							<td>\r\n								<span>{{touristGroup.name}}</span>\r\n							</td>\r\n							<td>\r\n								<span class="F-float F-count">{{touristGroup.count}}</span>\r\n							</td>\r\n							<td>\r\n								<span class="F-float F-money">{{touristGroup.price}}</span>\r\n							</td>\r\n							<td>\r\n								<span>{{touristGroup.days}}</span>\r\n							</td>\r\n							<td>\r\n								<span class="F-float F-money">{{touristGroup.price*touristGroup.count*(touristGroup.days || 1)}}</span>\r\n							</td>\r\n							<td class="textaR-paL">\r\n								{{touristGroup.remark}}\r\n							</td>\r\n\r\n						</tr>\r\n							{{/each}}\r\n				</tbody>\r\n			</table>\r\n			<table class="table whereQ" style="width: 100%;margin-top: -20px;margin-bottom:0px;">\r\n				<tr class="view-TranAccountsPrint">\r\n					<td style="text-align: center;width: 160px"><span>合计</span></td>\r\n					<td style="text-align: left;" colspan="5">\r\n						<span>应收:</span>\r\n						<span class="F-float F-money mar-r-5">{{touristGroup.needPayAllMoney}}</span>\r\n						<span>已收:</span>\r\n						<span class="F-float F-money mar-r-5">{{touristGroup.payedMoney}}</span>\r\n						<span>现收:</span>\r\n						<span class="F-float F-money mar-r-5">{{touristGroup.currentNeedPayMoney}}</span>\r\n						<span>未收:</span>\r\n						<span class="F-float F-money mar-r-5">{{touristGroup.UnIncomeMoney}}</span>\r\n					</td>\r\n				</tr>\r\n				<tr>\r\n					<td style="text-align: center;width: 160px"><span>备注</span></td>\r\n					<td style="text-align: left;" colspan="5">\r\n						<span>\r\n							{{touristGroup.remark}}\r\n						</span>\r\n					</td>\r\n				</tr>\r\n			</table>\r\n			<table class="table table-bordered" >\r\n				<tbody>\r\n					<tr class="view-TranAccountsPrint">\r\n						<td colspan="3" style="text-align:left">\r\n							<p>请贵社盖章确认!</p>\r\n							<p>\r\n								<span>确认人:</span>______\r\n							</p>\r\n							<p>\r\n								<span>确认日期:</span>\r\n								<span class="mar-l-20">年</span>\r\n								<span class="mar-l-20">月</span>\r\n								<span class="mar-l-20">日</span>\r\n							</p>\r\n						</td>\r\n						<td colspan="3" style="text-align:left">\r\n							<p>\r\n								<span class="{{if !!touristGroup.outOPUserName || !!touristGroup.outOPUserName}}{{else}}hidden{{/if}}">\r\n									<span>外联销售：</span> \r\n									<span>{{touristGroup.outOPUserName}}</span> \r\n									<span>{{touristGroup.outOPUserMobileNumberr}}</span>\r\n								</span>\r\n							</p>\r\n							<p style="margin-top: -8px;" class="{{if !!touristGroup.faxNumber}}{{else}}hidden{{/if}}">\r\n								<span>传真：{{touristGroup.faxNumber}}</span>\r\n							</p>\r\n							<p style="margin-top: -8px;">\r\n								<span>日期:</span>\r\n								<span>{{touristGroup.nowTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}</span>\r\n							</p>\r\n\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n\r\n		</div>\r\n	</form>\r\n	<div class="form-inline col-xs-12 hidden" style="text-align: center;margin-top: 30px;"> \r\n		<button class="btn btn-sm btn-primary T-btn-cancel T-noprint" style="height:24px;width: 75px;font-size: 12px;line-height: 10px;"> <i class="ace-icon fa fa-times"></i> 关闭 </button>\r\n	</div>\r\n	\r\n</div>'.split(/\n/)[$line-1].replace(/^\s+/,'')};}
});});