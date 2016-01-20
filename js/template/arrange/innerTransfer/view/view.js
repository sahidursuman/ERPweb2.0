/*TMODJS:{"debug":true,"version":327,"md5":"8c6d384a1d50ba6864afe512801e53e2"}*/
define(function(require) {
    return require("../../../template")("arrange/innerTransfer/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, innerTransfer = $data.innerTransfer, subsection = $data.subsection, cashFlag = $data.cashFlag, $each = $utils.$each, isParent = ($data.rs, 
            $data.$index, $data.isParent), parentTouristGroup = $data.parentTouristGroup, $out = ($data.result, 
            $data.i, "");
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">内转信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">接收部门</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">', 
            $line = 10, $out += $escape(innerTransfer.toBusinessGroup.name), $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">内转备注</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">', 
            $line = 14, $out += $escape(innerTransfer.transRemark), $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">应付</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">', 
            $line = 19, $out += $escape(innerTransfer.transNeedPayMoney), $out += '</span></td> <td class="style-myself CheckPlan" style="text-align: left;padding: 0px 0px 0px 10px" colspan="2">已付 </td> <td><span class=" F-float F-money">', 
            $line = 21, $out += $escape(innerTransfer.transPayedMoney), $out += "</span></td> </tr> </table> </div> </form> </div> ", 
            $line = 28, 0 == subsection && ($out += ' <div class="col-xs-12"> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="widget-title"> <label class="middle title-size">线路产品信息</label> </h5> <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">线路产品</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 38, null != innerTransfer.lineProduct && ($out += " ", $line = 38, $out += $escape(innerTransfer.lineProduct.name), 
            $line = 38), $out += '</td> <td class="style-myself CheckPlan">出游日期</td> <td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">', 
            $line = 40, $out += $escape($helpers.dateFormat(innerTransfer.touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> <tr> <td class="style-myself CheckPlan">来源</td> <td style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 44, $out += $escape(innerTransfer.touristGroup.partnerAgency.travelAgencyName), 
            $out += '</td> <td class="style-myself CheckPlan">客户联系人</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 47, null != innerTransfer.touristGroup.partnerAgency && ($out += " ", $line = 48, 
            $out += $escape(innerTransfer.touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 48, $out += $escape(innerTransfer.touristGroup.partnerAgencyContact.contactMobileNumber), 
            $out += " ", $line = 49), $out += ' </td> <td class="style-myself CheckPlan">获得方式</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 53, 1 == innerTransfer.touristGroup.getType ? ($out += "旅行社系统 ", $line = 54) : 2 == innerTransfer.touristGroup.getType ? ($out += "传真 ", 
            $line = 55) : 3 == innerTransfer.touristGroup.getType ? ($out += "短信 ", $line = 56) : 4 == innerTransfer.touristGroup.getType ? ($out += "电话 ", 
            $line = 57) : 5 == innerTransfer.touristGroup.getType && ($out += "QQ ", $line = 58), 
            $out += ' </td> </tr> <tr> <td class="style-myself CheckPlan">收客备注</td> <td colspan="5" style="text-align: left;padding: 0px 0px 0px 10px">', 
            $line = 64, $out += $escape(innerTransfer.touristGroup.remark), $out += "</td> </tr> </table> </div> </form> </div> ", 
            $line = 71), $out += ' <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">内转列表</label> </h5> <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">应付：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">', 
            $line = 87, $out += $escape(innerTransfer.transNeedPayMoney), $out += '</span></td> <td class="style-myself CheckPlan">已付：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">', 
            $line = 89, $out += $escape(innerTransfer.transPayedMoney), $out += '</span></td> <td class="style-myself CheckPlan">计划现收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 92, 1 == cashFlag ? ($out += " ", $line = 93, innerTransfer.touristGroup && ($out += '<span class=" F-float F-money">', 
            $line = 93, $out += $escape(innerTransfer.touristGroup.currentNeedPayMoney), $out += "</span>", 
            $line = 93), $out += " ", $line = 94) : ($out += "0 ", $line = 95), $out += ' </td> </tr> </table> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody>  ', 
            $line = 115, $each(innerTransfer.innerTransferFeeSet, function(rs) {
                $out += " <tr> <td>", $line = 117, $out += $escape(rs.name), $out += '</td> <td><span class=" F-float F-count">', 
                $line = 118, $out += $escape(rs.count), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 119, $out += $escape(rs.price), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 120, $out += $escape(rs.count * rs.price), $out += "</span></td> <td>", 
                $line = 121, $out += $escape(rs.remark), $out += "</td> </tr> ", $line = 123;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div> ", 
            $line = 134, 0 == subsection && ($out += '  <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">收客信息</label> </h5> ', 
            $line = 145, 0 == isParent ? ($out += ' <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">应收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">', 
            $line = 149, $out += $escape(innerTransfer.touristGroup.needPayAllMoney), $out += '</span></td> <td class="style-myself CheckPlan">已收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">', 
            $line = 151, $out += $escape(innerTransfer.touristGroup.payedMoney), $out += '</span></td> <td class="style-myself CheckPlan">计划现收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 154, 1 == cashFlag ? ($out += " ", $line = 155, innerTransfer.touristGroup && ($out += '<span class=" F-float F-money">', 
            $line = 155, $out += $escape(innerTransfer.touristGroup.currentNeedPayMoney), $out += "</span>", 
            $line = 155), $out += " ", $line = 156) : ($out += "0 ", $line = 157), $out += " </td> </tr> </table> ", 
            $line = 161) : ($out += ' <table class="whereQ whereTwo" style="width: 100%"> <tr> <td class="style-myself CheckPlan">应收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">', 
            $line = 165, $out += $escape(parentTouristGroup.needPayAllMoney), $out += '</span></td> <td class="style-myself CheckPlan">已收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">', 
            $line = 167, $out += $escape(parentTouristGroup.payedMoney), $out += '</span></td> <td class="style-myself CheckPlan">计划现收：</td> <td style="text-align: left;padding: 0px 0px 0px 10px"> ', 
            $line = 170, 1 == cashFlag ? ($out += ' <span class=" F-float F-money">', $line = 171, 
            $out += $escape(parentTouristGroup.currentNeedPayMoney), $out += "</span> ", $line = 172) : ($out += '<span class=" F-float F-money">0</span> ', 
            $line = 173), $out += " </td> </tr> </table> ", $line = 177), $out += ' <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody> ', 
            $line = 191, $each(innerTransfer.touristGroup.touristGroupFeeList, function(rs) {
                $out += " <tr> <td>", $line = 193, $out += $escape(rs.name), $out += '</td> <td><span class=" F-float F-count">', 
                $line = 194, $out += $escape(rs.count), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 195, $out += $escape(rs.price), $out += '</span></td> <td><span class=" F-float F-money">', 
                $line = 196, $out += $escape(rs.price * rs.count), $out += "</span></td> <td>", 
                $line = 197, $out += $escape(rs.remark), $out += "</td> </tr> ", $line = 199;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div> ", 
            $line = 209), $out += '  <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body TransferTable"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 234, $each(innerTransfer.touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 236, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 237, $out += $escape(result.name), $out += "</td> <td>", $line = 238, $out += $escape(result.mobileNumber), 
                $out += "</td> <td> ", $line = 240, 0 == result.idCardType ? ($out += "身份证 ", $line = 241) : 1 == result.idCardType ? ($out += "护照 ", 
                $line = 242) : 2 == result.idCardType && ($out += "其他 ", $line = 243), $out += " </td> <td>", 
                $line = 245, $out += $escape(result.idCardNumber), $out += "</td> <td>", $line = 246, 
                0 == result.isContactUser ? ($out += "否", $line = 246) : ($out += "是", $line = 246), 
                $out += "</td> </tr> ", $line = 248;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					 <label class="middle title-size">内转信息</label>\r\n				</h5>\r\n			<table class="whereQ whereTwo" style="width: 100%">\r\n				<tr>\r\n					<td class="style-myself CheckPlan">接收部门</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">{{innerTransfer.toBusinessGroup.name}}</td>\r\n					</tr>\r\n				<tr>\r\n					<td class="style-myself CheckPlan">内转备注</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="4">{{innerTransfer.transRemark}}</td>\r\n\r\n				</tr>\r\n				<tr>\r\n					<td class="style-myself CheckPlan">应付</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">{{innerTransfer.transNeedPayMoney}}</span></td>\r\n					<td class="style-myself CheckPlan" style="text-align: left;padding: 0px 0px 0px 10px" colspan="2">已付 </td>\r\n					<td><span class=" F-float F-money">{{innerTransfer.transPayedMoney}}</span></td>\r\n				</tr>\r\n			</table>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n{{if subsection==0}}\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n			<h5 class="widget-title">\r\n				<label class="middle title-size">线路产品信息</label>\r\n			</h5>\r\n			<table class="whereQ whereTwo" style="width: 100%">\r\n				<tr>\r\n					<td class="style-myself CheckPlan">线路产品</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{if innerTransfer.lineProduct!=null}} {{innerTransfer.lineProduct.name}}{{/if}}</td>\r\n					<td class="style-myself CheckPlan">出游日期</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px" colspan="3">{{innerTransfer.touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}</td>\r\n				</tr>\r\n				<tr>\r\n					<td class="style-myself CheckPlan">来源</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">{{innerTransfer.touristGroup.partnerAgency.travelAgencyName}}</td>\r\n					<td class="style-myself CheckPlan">客户联系人</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">\r\n					{{if innerTransfer.touristGroup.partnerAgency != null}}\r\n					   {{innerTransfer.touristGroup.partnerAgencyContact.contactRealname}}|{{innerTransfer.touristGroup.partnerAgencyContact.contactMobileNumber}}\r\n					  {{/if}}\r\n					</td>\r\n					<td class="style-myself CheckPlan">获得方式</td>\r\n					<td style="text-align: left;padding: 0px 0px 0px 10px">\r\n					   {{if innerTransfer.touristGroup.getType==1 }}旅行社系统\r\n					      {{else if innerTransfer.touristGroup.getType==2}}传真\r\n					      {{else if innerTransfer.touristGroup.getType==3}}短信\r\n					      {{else if innerTransfer.touristGroup.getType==4}}电话\r\n					      {{else if innerTransfer.touristGroup.getType==5}}QQ\r\n					   {{/if}}\r\n					</td>\r\n				</tr>\r\n\r\n				<tr>\r\n				    <td  class="style-myself CheckPlan">收客备注</td>\r\n					<td colspan="5" style="text-align: left;padding: 0px 0px 0px 10px">{{innerTransfer.touristGroup.remark}}</td>\r\n				</tr>\r\n\r\n			</table>\r\n		</div>\r\n	</form>\r\n</div>\r\n{{/if}}\r\n\r\n\r\n\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">内转列表</label>\r\n						</h5>\r\n\r\n					    <table class="whereQ whereTwo" style="width: 100%">\r\n							<tr>\r\n								<td class="style-myself CheckPlan">应付：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">{{innerTransfer.transNeedPayMoney}}</span></td>\r\n								<td class="style-myself CheckPlan">已付：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">{{innerTransfer.transPayedMoney}}</span></td>\r\n								<td class="style-myself CheckPlan">计划现收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">\r\n								    {{if cashFlag==1}}\r\n								       	{{if !!innerTransfer.touristGroup}}<span class=" F-float F-money">{{innerTransfer.touristGroup.currentNeedPayMoney}}</span>{{/if}}\r\n									  {{else}}0 \r\n								    {{/if}}\r\n							    </td>\r\n						    </tr>\r\n						</table>\r\n\r\n						<div class="widget-body TransferTable">\r\n							<div class="widget-main no-padding">\r\n								<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n									<thead>\r\n										<tr>\r\n											<th class="th-border">费用项</th>\r\n											<th class="th-border">数量</th>\r\n											<th class="th-border">单价</th>\r\n											<th class="th-border">金额</th>\r\n											<th class="th-border">说明</th>\r\n											\r\n										</tr>\r\n									</thead>\r\n									<tbody>\r\n										<!-- 其他费用 -->\r\n										{{each innerTransfer.innerTransferFeeSet as rs}}\r\n										<tr>\r\n											<td>{{rs.name}}</td>\r\n											<td><span class=" F-float F-count">{{rs.count}}</span></td>\r\n											<td><span class=" F-float F-money">{{rs.price}}</span></td>\r\n											<td><span class=" F-float F-money">{{rs.count*rs.price}}</span></td>\r\n											<td>{{rs.remark}}</td>\r\n										</tr>\r\n										{{/each}}\r\n									</tbody>\r\n								</table>\r\n							</div>\r\n						</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n{{if subsection==0}}						\r\n<!-- 收客信息start -->\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n					<h5 class="">\r\n						<label class="middle title-size">收客信息</label>\r\n					</h5>\r\n\r\n					{{if isParent ==  0 }}\r\n					<table class="whereQ whereTwo" style="width: 100%">\r\n							<tr>\r\n								<td class="style-myself CheckPlan">应收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">{{innerTransfer.touristGroup.needPayAllMoney}}</span></td>\r\n								<td class="style-myself CheckPlan">已收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">{{innerTransfer.touristGroup.payedMoney}}</span></td>\r\n								<td class="style-myself CheckPlan">计划现收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">\r\n								    {{if cashFlag==1}}\r\n								       	{{if !!innerTransfer.touristGroup}}<span class=" F-float F-money">{{innerTransfer.touristGroup.currentNeedPayMoney}}</span>{{/if}}\r\n									  {{else}}0 \r\n								    {{/if}}\r\n							    </td>\r\n						    </tr>\r\n					</table>\r\n					{{else}}\r\n					<table class="whereQ whereTwo" style="width: 100%">\r\n							<tr>\r\n								<td class="style-myself CheckPlan">应收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">{{parentTouristGroup.needPayAllMoney}}</span></td>\r\n								<td class="style-myself CheckPlan">已收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px"><span class=" F-float F-money">{{parentTouristGroup.payedMoney}}</span></td>\r\n								<td class="style-myself CheckPlan">计划现收：</td>\r\n								<td style="text-align: left;padding: 0px 0px 0px 10px">\r\n								    {{if cashFlag==1}}\r\n								       <span class=" F-float F-money">{{parentTouristGroup.currentNeedPayMoney}}</span>\r\n									  {{else}}<span class=" F-float F-money">0</span> \r\n								    {{/if}}\r\n							    </td>\r\n						    </tr>\r\n					</table>\r\n					{{/if}}\r\n					<div class="widget-body TransferTable">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">费用项</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">单价</th>\r\n										<th class="th-border">金额</th>\r\n										<th class="th-border">说明</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each innerTransfer.touristGroup.touristGroupFeeList as rs}}\r\n									<tr>\r\n										<td>{{rs.name}}</td>\r\n										<td><span class=" F-float F-count">{{rs.count}}</span></td>\r\n										<td><span class=" F-float F-money">{{rs.price}}</span></td>\r\n										<td><span class=" F-float F-money">{{rs.price*rs.count}}</span></td>\r\n										<td>{{rs.remark}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n{{/if}}\r\n\r\n<!-- 收客信息end -->\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">游客小组信息</label>\r\n						</h5>\r\n					<div class="widget-body TransferTable">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">序号</th>\r\n										<th class="th-border">姓名</th>\r\n										<th class="th-border">联系电话</th>\r\n										<th class="th-border">证件类型</th>\r\n										<th class="th-border">证件号</th>\r\n										<th class="th-border">联系人</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each innerTransfer.touristGroup.touristGroupMemberList as result i}}\r\n									<tr>\r\n										<td>{{i+1}}</td>\r\n										<td>{{result.name}}</td>\r\n										<td>{{result.mobileNumber}}</td>\r\n										<td>\r\n										    {{if result.idCardType==0}}身份证\r\n										    {{else if result.idCardType==1}}护照\r\n										    {{else if result.idCardType==2}}其他\r\n										    {{/if}}\r\n										</td>\r\n										<td>{{result.idCardNumber}}</td>\r\n										<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});