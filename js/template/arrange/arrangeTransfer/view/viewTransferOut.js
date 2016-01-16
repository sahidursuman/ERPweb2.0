/*TMODJS:{"debug":true,"version":178,"md5":"05901df491fdf17ba03809a94034c632"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/viewTransferOut", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, partnerAgency = $data.partnerAgency, touristGroup = $data.touristGroup, $each = $utils.$each, subsection = ($data.transferFee, 
            $data.$index, $data.subsection), lineProduct = $data.lineProduct, isParent = $data.isParent, parentTouristGroup = $data.parentTouristGroup, cashFlag = $data.cashFlag, $out = ($data.transferFeeList, 
            $data.result, $data.i, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">我社转出主体信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px"> <tr> <td class="style-myself">同行地接：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 10, $out += $escape(partnerAgency.travelAgencyName), $out += '</td> <td class="style-myself">转客备注：</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 12, null != touristGroup.contactMember && ($line = 12, $out += $escape(touristGroup.contactMember.name), 
            $line = 12), $out += '</td> </tr> <tr> <td class="style-myself">应付：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">', 
            $line = 16, $out += $escape(touristGroup.transNeedPayAllMoney), $out += '</span></td> <td class="style-myself">已付：</td> <td style="text-align: left;padding: 0px 0px 0px 10px" readonly="readonly" class="date-picker" colspan="3"><span class="F-float F-money">', 
            $line = 18, $out += $escape(touristGroup.transPayedMoney), $out += "</span> </td> <td> ", 
            $line = 22, 1 == touristGroup.operateCurrentNeedPayMoney ? ($out += ' <label> <input type="checkbox" class="ace buyInsurance-status" checked="checked" value="', 
            $line = 24, $out += $escape(touristGroup.operateCurrentNeedPayMoney), $out += '" name="operateCurrentNeedPayMoney" disabled="disabled"> <span class="lbl"> </span> </label> ', 
            $line = 28) : ($out += ' <label style="padding-left:0px;"> <input type="checkbox" class="ace buyInsurance-status" checked="" value="', 
            $line = 31, $out += $escape(touristGroup.operateCurrentNeedPayMoney), $out += '" name="operateCurrentNeedPayMoney" disabled="disabled"> <span class="lbl"> </span> </label> ', 
            $line = 35), $out += ' <label class="control-label no-padding-right">对方现收</label> </td> </tr> </table> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">转客列表</label> </h5> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">备注</th> </tr> </thead> <tbody>  ', 
            $line = 69, $each(touristGroup.touristGroupTransferFeeSet, function(transferFee) {
                $out += " ", $line = 70, null != transferFee && ($out += " <tr> <td>", $line = 72, 
                $out += $escape(transferFee.name), $out += '</td> <td><span class="F-float F-count">', 
                $line = 73, $out += $escape(transferFee.count), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 74, $out += $escape(transferFee.price), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 75, $out += $escape(transferFee.count * transferFee.price), $out += "</span></td> <td>", 
                $line = 76, $out += $escape(transferFee.remark), $out += "</td> </tr> ", $line = 78), 
                $out += " ", $line = 79;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div> ", 
            $line = 89, 0 == subsection && ($out += ' <div class="col-xs-12"> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">线路产品信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">线路产品</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 100, null != lineProduct.name && ($out += " ", $line = 100, $out += $escape(lineProduct.name), 
            $line = 100), $out += '</td> <td class="style-myself CheckPlan">出游日期</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 102, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">来源</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 106, $out += $escape(touristGroup.partnerAgency.travelAgencyName), $out += '</td> <td class="style-myself CheckPlan">客户联系人</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 109, null != touristGroup.partnerAgencyContact && ($line = 109, $out += $escape(touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 109, $out += $escape(touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 109), $out += ' </td> <td class="style-myself CheckPlan">获得方式</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 113, 1 == touristGroup.getType ? ($out += "旅行社系统 ", $line = 114) : 2 == touristGroup.getType ? ($out += "传真 ", 
            $line = 115) : 3 == touristGroup.getType ? ($out += "短信 ", $line = 116) : 4 == touristGroup.getType ? ($out += "电话 ", 
            $line = 117) : 5 == touristGroup.getType && ($out += "QQ ", $line = 118), $out += ' </td> </tr> <tr> <td class="style-myself CheckPlan">收客备注</td> <td colspan="5">', 
            $line = 123, $out += $escape(touristGroup.remark), $out += '</td> </tr> </table> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">收客信息</label> </h5> <div class="search-area col-sm-12"> ', 
            $line = 141, 1 == isParent ? ($out += ' <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">应收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">', 
            $line = 146, $out += $escape(parentTouristGroup.needPayAllMoney), $out += '</span></td> <td class="style-myself CheckPlan">已收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">', 
            $line = 148, $out += $escape(parentTouristGroup.payedMoney), $out += '</span></td> <td class="style-myself CheckPlan">计划现收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 151, 1 == cashFlag ? ($out += ' <span class="F-float F-money">', $line = 152, 
            $out += $escape(parentTouristGroup.currentNeedPayMoney), $out += "</span> ", $line = 153) : ($out += "0 ", 
            $line = 154), $out += " </td> </tr> </table> ", $line = 158) : ($out += ' <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">应收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">', 
            $line = 162, $out += $escape(touristGroup.needPayAllMoney), $out += '</span></td> <td class="style-myself CheckPlan">已收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">', 
            $line = 164, $out += $escape(touristGroup.payedMoney), $out += '</span></td> <td class="style-myself CheckPlan">计划现收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 167, 1 == cashFlag ? ($out += ' <span class="F-float F-money">', $line = 168, 
            $out += $escape(touristGroup.currentNeedPayMoney), $out += "</span> ", $line = 169) : ($out += "0 ", 
            $line = 170), $out += " </td> </tr> </table> ", $line = 174), $out += ' </div> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">备注</th> </tr> </thead> <tbody> ', 
            $line = 190, $each(touristGroup.touristGroupFeeList, function(transferFeeList) {
                $out += " <tr> <td>", $line = 192, $out += $escape(transferFeeList.name), $out += '</td> <td><span class="F-float F-count">', 
                $line = 193, $out += $escape(transferFeeList.count), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 194, $out += $escape(transferFeeList.price), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 195, $out += $escape(transferFeeList.count * transferFeeList.price), $out += "</span></td> <td>", 
                $line = 196, $out += $escape(transferFeeList.remark), $out += "</td> </tr> ", $line = 198;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div> ", 
            $line = 209), $out += ' <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 234, $each(touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 236, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 237, $out += $escape(result.name), $out += "</td> <td>", $line = 238, $out += $escape(result.mobileNumber), 
                $out += "</td> <td> ", $line = 240, 0 == result.idCardType ? ($out += "身份证 ", $line = 241) : 1 == result.idCardType ? ($out += "护照 ", 
                $line = 242) : 2 == result.idCardType && ($out += "其他 ", $line = 243), $out += " </td> <td>", 
                $line = 245, $out += $escape(result.idCardNumber), $out += "</td> <td>", $line = 246, 
                0 == result.isContactUser ? ($out += "否", $line = 246) : ($out += "是", $line = 246), 
                $out += "</td> </tr> ", $line = 248;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					 <label class="middle title-size">我社转出主体信息</label>\r\n				</h5>\r\n			<table class="whereQ whereTwo" style="width: 100%;margin-bottom: 28px">\r\n				<tr>\r\n					<td class="style-myself">同行地接：</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{partnerAgency.travelAgencyName}}</td>\r\n					<td class="style-myself">转客备注：</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{if touristGroup.contactMember!=null }}{{touristGroup.contactMember.name}}{{/if}}</td>\r\n					</tr>\r\n				<tr>\r\n					<td class="style-myself">应付：</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">{{touristGroup.transNeedPayAllMoney}}</span></td>\r\n					<td class="style-myself">已付：</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px" readonly="readonly"  class="date-picker" colspan="3"><span class="F-float F-money">{{touristGroup.transPayedMoney}}</span>\r\n					</td>\r\n\r\n					<td>\r\n					    {{if touristGroup.operateCurrentNeedPayMoney==1}}\r\n						<label>\r\n							<input  type="checkbox" class="ace buyInsurance-status" checked="checked" value="{{touristGroup.operateCurrentNeedPayMoney}}" name="operateCurrentNeedPayMoney" disabled="disabled">\r\n								<span class="lbl">\r\n								</span>\r\n						</label>\r\n						{{else}}\r\n\r\n						<label style="padding-left:0px;">\r\n							<input  type="checkbox" class="ace buyInsurance-status" checked="" value="{{touristGroup.operateCurrentNeedPayMoney}}" name="operateCurrentNeedPayMoney" disabled="disabled">\r\n								<span class="lbl">\r\n								</span>\r\n						</label>\r\n						{{/if}}\r\n						<label class="control-label no-padding-right">对方现收</label>\r\n					</td>\r\n\r\n					\r\n				</tr>\r\n			</table>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<div  class="col-xs-12">	\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">转客列表</label>\r\n						</h5>\r\n					<div class="widget-body TransferTable">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n								<thead>\r\n							      	<tr>\r\n										<th class="th-border">费用项</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">单价</th>\r\n										<th class="th-border">金额</th>\r\n										<th class="th-border">备注</th>\r\n										\r\n									</tr>\r\n								</thead>\r\n								<tbody> \r\n								  <!-- 其他费用 -->\r\n								  {{each touristGroup.touristGroupTransferFeeSet as transferFee}}\r\n								    {{if transferFee!=null}}\r\n								      <tr>\r\n								            <td>{{transferFee.name}}</td>\r\n								            <td><span class="F-float F-count">{{transferFee.count}}</span></td>  \r\n								            <td><span class="F-float F-money">{{transferFee.price}}</span></td>\r\n								            <td><span class="F-float F-money">{{transferFee.count*transferFee.price}}</span></td>\r\n								            <td>{{transferFee.remark}}</td>\r\n								      </tr>\r\n								      {{/if}}  \r\n								  {{/each}} 										  \r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n{{if subsection==0}}\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					<label class="middle title-size">线路产品信息</label>\r\n				</h5>\r\n\r\n		    <table class="whereQ whereTwo" style="width: 100%">\r\n				<tr>\r\n					<td class="style-myself CheckPlan">线路产品</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{if lineProduct.name!=null}} {{lineProduct.name}}{{/if}}</td>\r\n					<td class="style-myself CheckPlan">出游日期</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="style-myself CheckPlan">来源</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{touristGroup.partnerAgency.travelAgencyName}}</td>\r\n					<td class="style-myself CheckPlan">客户联系人</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">\r\n					{{if touristGroup.partnerAgencyContact != null}}{{touristGroup.partnerAgencyContact.contactRealname}}|{{touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}\r\n					</td>\r\n					<td class="style-myself CheckPlan">获得方式</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">\r\n					   {{if touristGroup.getType==1 }}旅行社系统\r\n					      {{else if touristGroup.getType==2}}传真\r\n					      {{else if touristGroup.getType==3}}短信\r\n					      {{else if touristGroup.getType==4}}电话\r\n					      {{else if touristGroup.getType==5}}QQ\r\n					   {{/if}}\r\n					</td>\r\n				</tr>\r\n				<tr>\r\n				    <td  class="style-myself CheckPlan">收客备注</td>\r\n					<td colspan="5">{{touristGroup.remark}}</td>\r\n				</tr>\r\n			</table>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n\r\n\r\n <div  class="col-xs-12"> \r\n   	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px">\r\n				<div class=" ui-sortable-handle">\r\n					<h5 class="">\r\n						<label class="middle title-size">收客信息</label>\r\n					</h5>\r\n					<div class="search-area col-sm-12">\r\n						{{if isParent==1}}\r\n\r\n			  				<table class="whereQ whereTwo" style="width: 100%">\r\n							<tr>\r\n								<td class="style-myself CheckPlan">应收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">{{parentTouristGroup.needPayAllMoney}}</span></td>\r\n								<td class="style-myself CheckPlan">已收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">{{parentTouristGroup.payedMoney}}</span></td>\r\n								<td class="style-myself CheckPlan">计划现收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">\r\n								    {{if cashFlag==1}}\r\n								       	<span class="F-float F-money">{{parentTouristGroup.currentNeedPayMoney}}</span>\r\n									  {{else}}0 \r\n								    {{/if}}\r\n							    </td>\r\n						    </tr>\r\n					       </table>\r\n						    {{else}}\r\n						    <table class="whereQ whereTwo" style="width: 100%">\r\n							<tr>\r\n								<td class="style-myself CheckPlan">应收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">{{touristGroup.needPayAllMoney}}</span></td>\r\n								<td class="style-myself CheckPlan">已收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px"><span class="F-float F-money">{{touristGroup.payedMoney}}</span></td>\r\n								<td class="style-myself CheckPlan">计划现收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">\r\n								    {{if cashFlag==1}}\r\n								       	<span class="F-float F-money">{{touristGroup.currentNeedPayMoney}}</span>\r\n									  {{else}}0 \r\n								    {{/if}}\r\n							    </td>\r\n						    </tr>\r\n					       </table>\r\n						{{/if}}\r\n					</div>\r\n\r\n					<div class="widget-body TransferTable">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n								<thead>\r\n										<tr>\r\n											<th class="th-border">费用项</th>\r\n											<th class="th-border">数量</th>\r\n											<th class="th-border">单价</th>\r\n											<th class="th-border">金额</th>\r\n											<th class="th-border">备注</th>\r\n										</tr>\r\n									</thead>\r\n								  <tbody> \r\n								      {{each touristGroup.touristGroupFeeList as transferFeeList}}\r\n										<tr>\r\n											<td>{{transferFeeList.name}}</td>\r\n											<td><span class="F-float F-count">{{transferFeeList.count}}</span></td>\r\n											<td><span class="F-float F-money">{{transferFeeList.price}}</span></td>	\r\n											<td><span class="F-float F-money">{{transferFeeList.count*transferFeeList.price}}</span></td>\r\n											<td>{{transferFeeList.remark}}</td> \r\n										</tr>\r\n									   {{/each}}  \r\n										\r\n									</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>  \r\n{{/if}}\r\n\r\n\r\n<div  class="col-xs-12">\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">游客小组信息</label>\r\n						</h5>\r\n					<div class="widget-body TransferTable">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n									<thead>\r\n										<tr>\r\n											<th class="th-border">序号</th>\r\n											<th class="th-border">姓名</th>\r\n											<th class="th-border">联系电话</th>\r\n											<th class="th-border">证件类型</th>\r\n											<th class="th-border">证件号</th>\r\n											<th class="th-border">联系人</th>\r\n										</tr>\r\n									</thead>\r\n								  <tbody> \r\n								  {{each touristGroup.touristGroupMemberList as result i}}      \r\n										<tr>\r\n											<td>{{i+1}}</td>\r\n											<td>{{result.name}}</td>\r\n											<td>{{result.mobileNumber}}</td>\r\n											<td>\r\n											  {{if result.idCardType==0}}身份证\r\n											    {{else if result.idCardType==1}}护照\r\n											    {{else if result.idCardType==2}}其他\r\n											   {{/if}}\r\n										    </td>	\r\n											<td>{{result.idCardNumber}}</td>\r\n											<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>	\r\n										</tr>\r\n								   {{/each}}\r\n									</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n \r\n \r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});