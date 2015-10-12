/*TMODJS:{"debug":true,"version":147,"md5":"41311008eccc43585c91f53fe3b710a1"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/viewTransform", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, partnerAgency = $data.partnerAgency, touristGroup = $data.touristGroup, $each = $utils.$each, lineProduct = ($data.transferFee, 
            $data.$index, $data.lineProduct), $out = ($data.transferFeeList, $data.result, $data.i, 
            "");
            return $out += ' <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 我社转出主体信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">同行地接：</label> <div class="col-sm-2"> <input value="', 
            $line = 16, $out += $escape(partnerAgency.travelAgencyName), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12"/> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">转客备注:</label> <div class="col-sm-2"> <input value="', 
            $line = 23, $out += $escape(touristGroup.transRemark), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12"/> </div> </div> <div class="form-group"> <label class="col-sm-1 control-label no-padding-right">应付：</label> <div class="col-sm-2"> <input name="transNeedPayAllMoney" value="', 
            $line = 30, $out += $escape(touristGroup.transNeedPayAllMoney), $out += '" type="text" readonly="readonly" readonly="readonly" class="date-picker col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">已付：</label> <div class="col-sm-2"> <input name="transPayedMoney" value="', 
            $line = 35, $out += $escape(touristGroup.transPayedMoney), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12"/> </div> </div> </div> </div> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 转客列表 </h5> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th>类型</th> <th>说明</th> <th>数量</th> <th>转客单价</th> </tr> </thead> <tbody> <tr> <td>转客价</td> <td>大人</td> <td>', 
            $line = 71, $out += $escape(touristGroup.adultCount), $out += "</td> <td>", $line = 72, 
            $out += $escape(touristGroup.transAdultPrice), $out += "</td> </tr> <tr> <td>转客价</td> <td>小孩</td> <td>", 
            $line = 79, $out += $escape(touristGroup.childCount), $out += "</td> <td>", $line = 80, 
            $out += $escape(touristGroup.transChildPrice), $out += "</td> </tr>  ", $line = 84, 
            $each(touristGroup.touristGroupTransferFeeSet, function(transferFee) {
                $out += " ", $line = 85, null != transferFee && ($out += " <tr> <td>其他费用</td> <td>", 
                $line = 88, $out += $escape(transferFee.discribe), $out += "</td> <td>", $line = 89, 
                $out += $escape(transferFee.count), $out += "</td> <td>", $line = 90, $out += $escape(transferFee.otherPrice), 
                $out += "</td> </tr> ", $line = 92), $out += " ", $line = 93;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 线路产品信息 </h5> </div> <div class="widget-body"> <div class="widget-main clearfix"> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">线路产品: </label> <div class="col-sm-2"> <input value="', 
            $line = 122, null != lineProduct.name && ($out += " ", $line = 122, $out += $escape(lineProduct.name), 
            $line = 122), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">出游日期:</label> <div class="col-sm-2"> <input value="', 
            $line = 127, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '" name="tourGroupTime" type="text" readonly="readonly" class="date-picker col-xs-12"/> </div> </div> </div> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">客户来源: </label> <div class="col-sm-2"> <input value="', 
            $line = 137, $out += $escape(touristGroup.partnerAgency.travelAgencyName), $out += '" type="text" readonly="readonly" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">同行联系人:</label> <div class="col-sm-2"> <input value="', 
            $line = 143, null != touristGroup.partnerAgencyContact && ($line = 143, $out += $escape(touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 143, $out += $escape(touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 143), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">获得方式:</label> <div class="col-sm-2"> <select name="getType" class="col-sm-12" disabled="disabled"> <option', 
            $line = 149, 1 == touristGroup.getType && ($out += ' selected="selected"', $line = 149), 
            $out += ' value="1">旅行社系统</option> <option', $line = 150, 2 == touristGroup.getType && ($out += ' selected="selected"', 
            $line = 150), $out += ' value="2">传真</option> <option', $line = 151, 3 == touristGroup.getType && ($out += ' selected="selected"', 
            $line = 151), $out += ' value="3">短信</option> <option', $line = 152, 4 == touristGroup.getType && ($out += ' selected="selected"', 
            $line = 152), $out += ' value="4">电话</option> <option', $line = 153, 5 == touristGroup.getType && ($out += ' selected="selected"', 
            $line = 153), $out += ' value="5">QQ</option> </select> </div> </div> </div> </div> </div> </div> </form> </div>  <div class="form-group col-sm-12" style="margin-top:20px; "> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">应收：</label> <div class="col-sm-2"> <input name="needPayAllMoney" value="', 
            $line = 171, $out += $escape(touristGroup.needPayAllMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-2"> <input name="payedMoney" value="', 
            $line = 176, $out += $escape(touristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">现收：</label> <div class="col-sm-2"> <input name="currentNeedPayMoney" value="', 
            $line = 181, $out += $escape(touristGroup.currentNeedPayMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">收客时的备注:</label> <div class="col-sm-2"> <input name="remark" value="', 
            $line = 188, $out += $escape(touristGroup.remark), $out += '" type="text" class="col-xs-12" readonly="readonly" /> </div> </div> </div> <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 收客信息 </h5> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th>类型</th> <th>说明</th> <th>数量</th> <th>收客单价</th> </tr> </thead> <tbody> <tr> <td>结算价</td> <td>大人</td> <td>', 
            $line = 222, $out += $escape(touristGroup.adultCount), $out += "</td> <td>", $line = 223, 
            $out += $escape(touristGroup.adultPrice), $out += "</td> </tr> <tr> <td>结算价</td> <td>小孩</td> <td>", 
            $line = 229, $out += $escape(touristGroup.childCount), $out += "</td> <td>", $line = 230, 
            $out += $escape(touristGroup.childPrice), $out += "</td> </tr> ", $line = 233, $each(touristGroup.touristGroupFeeList, function(transferFeeList) {
                $out += " <tr> <td>", $line = 235, 0 == transferFeeList.type ? ($out += "增加", $line = 235) : ($out += "减少", 
                $line = 235), $out += "</td> <td>", $line = 236, $out += $escape(transferFeeList.describeInfo), 
                $out += "</td> <td>", $line = 237, $out += $escape(transferFeeList.count), $out += "</td> <td>", 
                $line = 238, $out += $escape(transferFeeList.price), $out += "</td> </tr> ", $line = 240;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div>  <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-building"></i> 游客小组信息 </h5> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover hotelRoomStandardList"> <thead> <tr> <th>序号</th> <th>姓名</th> <th>联系电话</th> <th>证件类型</th> <th>证件号</th> <th>联系人</th> </tr> </thead> <tbody> ', 
            $line = 281, $each(touristGroup.touristGroupMemberList, function(result, i) {
                $out += " <tr> <td>", $line = 283, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 284, $out += $escape(result.name), $out += "</td> <td>", $line = 285, $out += $escape(result.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 287, $out += $escape(result.idCardNumber), 
                $out += "</td> <td>", $line = 288, 0 == result.isContactUser ? ($out += "否", $line = 288) : ($out += "是", 
                $line = 288), $out += "</td> </tr> ", $line = 290;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '\r\n<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px">\r\n		<div class="widget-box ui-sortable-handle">\r\n			<div class="widget-header">\r\n				<h5 class="widget-title">\r\n					<i class="ace-icon fa fa-building"></i>\r\n					 我社转出主体信息\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n					  <label class="col-sm-1 control-label no-padding-right">同行地接：</label>\r\n					  <div class="col-sm-2">\r\n						 <input value="{{partnerAgency.travelAgencyName}}" type="text" readonly="readonly" class="date-picker col-xs-12"/>\r\n					  </div>\r\n					</div>\r\n					\r\n					<div class="form-group">\r\n						  <label class="col-sm-1 control-label no-padding-right">转客备注:</label>\r\n						  <div class="col-sm-2">\r\n							 <input  value="{{touristGroup.transRemark}}" type="text" readonly="readonly" class="date-picker col-xs-12"/>\r\n						  </div> \r\n					</div> \r\n					 \r\n					<div class="form-group">\r\n						  <label class="col-sm-1 control-label no-padding-right">应付：</label>\r\n						  <div class="col-sm-2">\r\n							 <input name="transNeedPayAllMoney"  value="{{touristGroup.transNeedPayAllMoney}}" type="text" readonly="readonly" readonly="readonly" class="date-picker col-xs-12"/>\r\n						  </div>\r\n						  \r\n						  <label class="col-sm-1 control-label no-padding-right">已付：</label>\r\n						  <div class="col-sm-2">\r\n							 <input name="transPayedMoney"  value="{{touristGroup.transPayedMoney}}" type="text" readonly="readonly" class="date-picker col-xs-12"/>\r\n						  </div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n<div  class="col-xs-12">	\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-building"></i>\r\n							转客列表\r\n						</h5>\r\n					</div>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n								<thead>\r\n							      	<tr>\r\n										<th>类型</th>\r\n										<th>说明</th>\r\n										<th>数量</th>\r\n										<th>转客单价</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									<tr>\r\n										<td>转客价</td>\r\n										<td>大人</td>\r\n										<td>{{touristGroup.adultCount}}</td>\r\n										<td>{{touristGroup.transAdultPrice}}</td>\r\n								\r\n									</tr>\r\n									\r\n									<tr>\r\n										<td>转客价</td>\r\n										<td>小孩</td>\r\n										<td>{{touristGroup.childCount}}</td>\r\n										<td>{{touristGroup.transChildPrice}}</td>	\r\n									</tr>  \r\n									\r\n								  <!-- 其他费用 -->\r\n								  {{each touristGroup.touristGroupTransferFeeSet as transferFee}}\r\n								    {{if transferFee!=null}}\r\n								      <tr>   \r\n								            <td>其他费用</td>  \r\n								            <td>{{transferFee.discribe}}</td>\r\n								            <td>{{transferFee.count}}</td>  \r\n								            <td>{{transferFee.otherPrice}}</td>\r\n								      </tr>\r\n								      {{/if}}  \r\n								  {{/each}} 										  \r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n\r\n\r\n    \r\n\r\n<div class="col-xs-12">    \r\n	<form class="form-horizontal hotelMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="widget-box ui-sortable-handle">\r\n			<div class="widget-header">\r\n				<h5 class="widget-title">\r\n					<i class="ace-icon fa fa-building"></i>\r\n					线路产品信息\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main clearfix">\r\n					<div class="form-group col-sm-12">\r\n						 <div class="search-area">  \r\n							  <label class="col-sm-1 control-label no-padding-right">线路产品: </label>\r\n							  <div class="col-sm-2">\r\n								 <input value="{{if lineProduct.name!=null}} {{lineProduct.name}}{{/if}}" type="text" readonly="readonly" class="date-picker col-xs-12"/>\r\n							  </div>\r\n							  \r\n							  <label class="col-sm-1 control-label no-padding-right">出游日期:</label>\r\n							  <div class="col-sm-2">\r\n								 <input  value="{{touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}" name="tourGroupTime" type="text" readonly="readonly"  class="date-picker col-xs-12"/>\r\n							  </div>\r\n						 </div>  \r\n					</div>  \r\n\r\n\r\n					<div class="form-group col-sm-12">\r\n						 <div class="search-area">\r\n							  <label class="col-sm-1 control-label no-padding-right">客户来源: </label>\r\n							  <div class="col-sm-2">\r\n								 <input value="{{touristGroup.partnerAgency.travelAgencyName}}" type="text" readonly="readonly" class="col-xs-12"/>\r\n							  </div>\r\n							       \r\n							  <label class="col-sm-1 control-label no-padding-right">同行联系人:</label>\r\n							  \r\n							  <div class="col-sm-2">\r\n								 <input value="{{if touristGroup.partnerAgencyContact != null}}{{touristGroup.partnerAgencyContact.contactRealname}}|{{touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n							  </div>\r\n					\r\n							  <label class="col-sm-1 control-label no-padding-right">获得方式:</label>\r\n							  <div class="col-sm-2">\r\n								 <select name="getType" class="col-sm-12" disabled="disabled">\r\n									<option{{if touristGroup.getType == 1}} selected="selected"{{/if}} value="1">旅行社系统</option>\r\n									<option{{if touristGroup.getType == 2}} selected="selected"{{/if}} value="2">传真</option>\r\n									<option{{if touristGroup.getType == 3}} selected="selected"{{/if}} value="3">短信</option>\r\n									<option{{if touristGroup.getType == 4}} selected="selected"{{/if}} value="4">电话</option>\r\n									<option{{if touristGroup.getType == 5}} selected="selected"{{/if}} value="5">QQ</option>\r\n								</select>\r\n							  </div>\r\n						 </div>\r\n					</div>\r\n					\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>  \r\n\r\n\r\n<!-- 收客信息start --> \r\n<div class="form-group col-sm-12" style="margin-top:20px; ">      \r\n	   <div class="search-area">	  \r\n		  <label class="col-sm-1 control-label no-padding-right">应收：</label>\r\n		  <div class="col-sm-2">\r\n			 <input name="needPayAllMoney" value="{{touristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n		  </div>\r\n		  \r\n		 <label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n		  <div class="col-sm-2">\r\n			 <input name="payedMoney" value="{{touristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n		  </div>\r\n		  \r\n		   <label class="col-sm-1 control-label no-padding-right">现收：</label>\r\n		  <div class="col-sm-2">\r\n			 <input name="currentNeedPayMoney" value="{{touristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n		  </div>\r\n		  \r\n		  \r\n		    \r\n		  <label class="col-sm-1 control-label no-padding-right">收客时的备注:</label>\r\n		  <div class="col-sm-2">\r\n			 <input name="remark" value="{{touristGroup.remark}}" type="text" class="col-xs-12" readonly="readonly" />\r\n		  </div>\r\n					\r\n		  \r\n	   </div>\r\n</div>\r\n\r\n <div  class="col-xs-12"> \r\n   	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-building"></i>\r\n							收客信息\r\n						</h5>\r\n					</div>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n								<thead>\r\n										<tr>\r\n											<th>类型</th>\r\n											<th>说明</th>\r\n											<th>数量</th>\r\n											<th>收客单价</th>\r\n										</tr>\r\n									</thead>\r\n								  <tbody>      \r\n										<tr>\r\n											<td>结算价</td>\r\n											<td>大人</td>\r\n											<td>{{touristGroup.adultCount}}</td>\r\n											<td>{{touristGroup.adultPrice}}</td>	\r\n										</tr>\r\n										\r\n										<tr>   \r\n											<td>结算价</td>\r\n											<td>小孩</td>\r\n											<td>{{touristGroup.childCount}}</td>\r\n											<td>{{touristGroup.childPrice}}</td>	\r\n										</tr>\r\n										\r\n								      {{each touristGroup.touristGroupFeeList as transferFeeList}}\r\n										<tr>\r\n											<td>{{if transferFeeList.type==0}}增加{{else}}减少{{/if}}</td>\r\n											<td>{{transferFeeList.describeInfo}}</td>\r\n											<td>{{transferFeeList.count}}</td>\r\n											<td>{{transferFeeList.price}}</td>	  \r\n										</tr>\r\n									   {{/each}}  \r\n										\r\n									</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>   \r\n<!-- 收客信息end -->    \r\n\r\n\r\n\r\n<div  class="col-xs-12">\r\n<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-building"></i>\r\n							游客小组信息\r\n						</h5>\r\n					</div>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover hotelRoomStandardList"> \r\n									<thead>\r\n										<tr>\r\n											<th>序号</th>\r\n											<th>姓名</th>\r\n											<th>联系电话</th>\r\n											<th>证件类型</th>\r\n											<th>证件号</th>\r\n											<th>联系人</th>\r\n										</tr>\r\n									</thead>\r\n								  <tbody> \r\n								  {{each touristGroup.touristGroupMemberList as result i}}      \r\n										<tr>\r\n											<td>{{i+1}}</td>\r\n											<td>{{result.name}}</td>\r\n											<td>{{result.mobileNumber}}</td>\r\n											<td>身份证</td>	\r\n											<td>{{result.idCardNumber}}</td>\r\n											<td>{{if result.isContactUser == 0}}否{{else}}是{{/if}}</td>	\r\n										</tr>\r\n								   {{/each}}\r\n									</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>\r\n \r\n \r\n \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});