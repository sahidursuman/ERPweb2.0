/*TMODJS:{"debug":true,"version":2,"md5":"8db15e2058bed74880d0b44cdd63eb7b"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferProfit/view/visitorGroupMainInfo", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, touristGroupDetail = $data.touristGroupDetail, $escape = $utils.$escape, $each = $utils.$each, $out = ($data.touristGroup, 
            $data.$index, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal touristGroupMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-info-circle"></i> 小组信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">线路产品:</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 15, null != touristGroupDetail.lineProduct && ($line = 15, $out += $escape(touristGroupDetail.lineProduct.name), 
            $line = 15), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">出游日期:</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 19, $out += $escape($helpers.dateFormat(touristGroupDetail.startTime, "yyyy-MM-dd")), 
            $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">是否购买保险:</label> <div class="col-sm-2 buyInsurance"> <label class="control-label"> ', 
            $line = 24, 0 == touristGroupDetail.buyInsurance ? ($out += " 否 ", $line = 26) : ($out += " 是 ", 
            $line = 28), $out += ' </label> </div> </div> <div class="form-group choosePartnerAgencyDiv"> <label class="col-sm-2 control-label no-padding-right">客户来源:</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 36, null != touristGroupDetail.partnerAgency && ($line = 36, $out += $escape(touristGroupDetail.partnerAgency.travelAgencyName), 
            $line = 36), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">同行联系人:</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 40, null != touristGroupDetail.partnerAgencyContact && ($line = 40, $out += $escape(touristGroupDetail.partnerAgencyContact.contactRealname), 
            $out += " -[", $line = 40, $out += $escape(touristGroupDetail.partnerAgencyContact.contactMobileNumber), 
            $out += "]", $line = 40), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">获得方式:</label> <div class="col-sm-2"> <label class="control-label"> ', 
            $line = 45, 1 == touristGroupDetail.getType ? ($out += " 旅行社系统 ", $line = 47) : 2 == touristGroupDetail.getType ? ($out += " 传真 ", 
            $line = 49) : 3 == touristGroupDetail.getType ? ($out += " 短信 ", $line = 51) : 4 == touristGroupDetail.getType ? ($out += " 电话 ", 
            $line = 53) : 5 == touristGroupDetail.getType && ($out += " QQ ", $line = 55), $out += ' </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">应收:</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 63, $out += $escape(touristGroupDetail.needPayAllMoney), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">已收:</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 67, $out += $escape(touristGroupDetail.payedMoney), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">现收:</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 71, $out += $escape(touristGroupDetail.currentNeedPayMoney), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">未收:</label> <div class="col-sm-2"> <label class="control-label">', 
            $line = 77, $out += $escape(touristGroupDetail.unIncomeMoney), $out += '</label> </div> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th>类型</th> <th>说明</th> <th>数量</th> <th>单价</th> </tr> </thead> <tbody class="addCostTbody"> <tr> <td> 结算价 </td> <td> 大人 </td> <td> <label class="control-label">', 
            $line = 102, $out += $escape(touristGroupDetail.adultCount), $out += '</label> </td> <td> <label class="control-label">', 
            $line = 105, $out += $escape(touristGroupDetail.adultPrice), $out += '</label> </td> </tr> <tr> <td> 结算价 </td> <td> 小孩 </td> <td> <label class="control-label">', 
            $line = 116, $out += $escape(touristGroupDetail.childCount), $out += '</label> </td> <td> <label class="control-label">', 
            $line = 119, $out += $escape(touristGroupDetail.childPrice), $out += "</label> </td> </tr>", 
            $line = 121, $each(touristGroupDetail.touristGroupFeeList, function(touristGroup) {
                $out += ' <tr data-entity-id="', $line = 122, $out += $escape(touristGroup.id), 
                $out += '"> <td> 其他费用  </td> <td> ', $line = 131, $out += $escape(touristGroup.describeInfo), 
                $out += " </td> <td> ", $line = 134, $out += $escape(touristGroup.count), $out += " </td> <td> ", 
                $line = 137, $out += $escape(touristGroup.price), $out += " </td> </tr>", $line = 139;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </form> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div  class="col-xs-12">\r\n<form class="form-horizontal touristGroupMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="widget-box ui-sortable-handle">\r\n			<div class="widget-header">\r\n				<h5 class="widget-title">\r\n					<i class="ace-icon fa fa-info-circle"></i>\r\n					小组信息\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">线路产品:</label>\r\n						<div class="col-sm-2">\r\n							<label class="control-label">{{if touristGroupDetail.lineProduct != null}}{{touristGroupDetail.lineProduct.name}}{{/if}}</label>\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">出游日期:</label>\r\n						<div class="col-sm-2">\r\n							<label class="control-label">{{touristGroupDetail.startTime | dateFormat: \'yyyy-MM-dd\'}}</label>\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">是否购买保险:</label>\r\n						<div class="col-sm-2 buyInsurance">\r\n							<label class="control-label">\r\n								{{if touristGroupDetail.buyInsurance == 0}}\r\n									否\r\n								{{else touristGroupDetail.buyInsurance == 1}}\r\n									是\r\n								{{/if}}\r\n							</label>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="form-group choosePartnerAgencyDiv">\r\n						<label class="col-sm-2 control-label no-padding-right">客户来源:</label>\r\n						<div class="col-sm-2">\r\n							<label class="control-label">{{if touristGroupDetail.partnerAgency != null}}{{touristGroupDetail.partnerAgency.travelAgencyName}}{{/if}}</label>\r\n						</div> \r\n						<label class="col-sm-1 control-label no-padding-right">同行联系人:</label>\r\n						<div class="col-sm-2">\r\n							<label class="control-label">{{if touristGroupDetail.partnerAgencyContact != null}}{{touristGroupDetail.partnerAgencyContact.contactRealname}} -[{{touristGroupDetail.partnerAgencyContact.contactMobileNumber}}]{{/if}}</label>\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">获得方式:</label>\r\n						<div class="col-sm-2">\r\n							<label class="control-label">\r\n								{{if touristGroupDetail.getType == 1}}\r\n									旅行社系统\r\n								{{else if touristGroupDetail.getType == 2}}\r\n									传真\r\n								{{else if touristGroupDetail.getType == 3}}\r\n									短信\r\n								{{else if touristGroupDetail.getType == 4}}\r\n									电话\r\n								{{else if touristGroupDetail.getType == 5}}\r\n									QQ\r\n								{{/if}}\r\n							</label>\r\n						</div>\r\n					</div>\r\n					\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">应收:</label>\r\n						<div class="col-sm-2">\r\n							<label class="control-label">{{touristGroupDetail.needPayAllMoney}}</label>\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">已收:</label>\r\n						<div class="col-sm-2">\r\n							<label class="control-label">{{touristGroupDetail.payedMoney}}</label>\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">现收:</label>\r\n						<div class="col-sm-2">\r\n							<label class="control-label">{{touristGroupDetail.currentNeedPayMoney}}</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">未收:</label>\r\n						<div class="col-sm-2">\r\n							<label class="control-label">{{touristGroupDetail.unIncomeMoney}}</label>\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th>类型</th>\r\n									<th>说明</th>\r\n									<th>数量</th>\r\n									<th>单价</th>\r\n								</tr>\r\n							</thead>\r\n							<tbody class="addCostTbody">\r\n								<tr>\r\n									<td>\r\n										结算价\r\n									</td>\r\n									<td>\r\n										大人\r\n									</td>\r\n									<td>\r\n										<label class="control-label">{{touristGroupDetail.adultCount}}</label>\r\n									</td>\r\n									<td>\r\n										<label class="control-label">{{touristGroupDetail.adultPrice}}</label>\r\n									</td>\r\n								</tr>\r\n								<tr>\r\n									<td>\r\n										结算价\r\n									</td>\r\n									<td>\r\n										小孩\r\n									</td>\r\n									<td>\r\n										<label class="control-label">{{touristGroupDetail.childCount}}</label>\r\n									</td>\r\n									<td>\r\n										<label class="control-label">{{touristGroupDetail.childPrice}}</label>\r\n									</td>\r\n								</tr>{{each touristGroupDetail.touristGroupFeeList as touristGroup}}\r\n								<tr data-entity-id="{{touristGroup.id}}">\r\n									<td>\r\n										其他费用\r\n										<!-- <select name="addOrReduceSelect" class="col-sm-12 addOrReduceSelect">\r\n											<option selected="selected" value="0">增加费用</option>\r\n											<option value="1">减少费用</option>\r\n										</select> -->\r\n									</td>\r\n									<td>\r\n										{{touristGroup.describeInfo}}\r\n									</td>\r\n									<td>\r\n										{{touristGroup.count}}\r\n									</td>\r\n									<td>\r\n										{{touristGroup.price}}\r\n									</td>\r\n								</tr>{{/each}}\r\n							</tbody>\r\n						</table>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});