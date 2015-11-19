/*TMODJS:{"debug":true,"version":97,"md5":"c89b7b5a7187940e02cd785ea034bb5e"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTransfer/view/updateTransferOut", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, touristGroupTransfer = $data.touristGroupTransfer, $each = $utils.$each, isParent = ($data.transferFee1, 
            $data.$index, $data.isParent), parentTouristGroup = $data.parentTouristGroup, $out = ($data.transferFeeList, 
            $data.toulist, $data.i, "");
            return $out += '<div class="updateTransfer clearfix globalAdd"> <div class="col-xs-12 clearfix"> <form class="form-horizontal clearfix " role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">修改小组信息</label> </h5> <div class="widget-body"> <div class="widget-body"> <div class="widget-main"> <input type="hidden" name="status" value="', 
            $line = 12, $out += $escape(touristGroupTransfer.touristGroup.status), $out += '"/> <input type="hidden" name="touristGroupTransferId" value="', 
            $line = 13, $out += $escape(touristGroupTransfer.id), $out += '"> <input type="hidden" name="touristGroupTransferId" value="', 
            $line = 14, $out += $escape(touristGroupTransfer.partnerAgency.id), $out += '"> <div class="form-group col-sm-12" style=" margin-top:20px; "> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>同行地接：</label> <div class="col-sm-2"> <input type="text" class="col-sm-12 ', 
            $line = 19, 0 != touristGroupTransfer.status && ($out += "T-choosePartnerAgency", 
            $line = 19), $out += ' " style="', $line = 19, 0 == touristGroupTransfer.status && ($out += "color:#bbb;", 
            $line = 19), $out += ' " placeholder="来源" name="" value="', $line = 19, $out += $escape(touristGroupTransfer.partnerAgency.travelAgencyName), 
            $out += '" /> <input type="hidden" name="transferPartnerAgencyId" value="', $line = 20, 
            $out += $escape(touristGroupTransfer.partnerAgency.id), $out += '" /> </div> </div> </div>  <div class="form-group col-sm-12 formOneList"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right pull-left">应付：</label> <div class="col-sm-2 trans-NeedPayAllMoney"> <input name="transNeedPayAllMoney" value="', 
            $line = 29, $out += $escape(touristGroupTransfer.touristGroup.transNeedPayAllMoney), 
            $out += '" type="text" readonly="readonly" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right pull-left"><span class="necessary">*</span>已付：</label> <div class="col-sm-2 trans-PayedMoney"> <input name="transPayedMoney" value="', 
            $line = 34, $out += $escape(touristGroupTransfer.touristGroup.transPayedMoney), 
            $out += '" type="text" class="col-xs-12"/> </div> <label> <input type="checkbox" class="ace" checked="', 
            $line = 39, 1 == touristGroupTransfer.operateCurrentNeedPayMoney && ($out += "checked", 
            $line = 39), $out += '" disabled="disabled" value="', $line = 39, $out += $escape(touristGroupTransfer.operateCurrentNeedPayMoney), 
            $out += '" name="isCurrent" /> <span class="lbl"> </span> </label> <label class="control-label no-padding-right">对方现收</label> </div> </div>  <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">转客时的备注:</label> <div class="col-sm-6"> <input name="transRemark" value="', 
            $line = 51, $out += $escape(touristGroupTransfer.touristGroup.transRemark), $out += '" type="text" class="date-picker col-xs-12"/> </div> </div> </div> <div class="form-group col-sm-12"> <div class="search-area">  <div class="col-sm-8"> <button class="btn btn-sm btn-success T-transfer-addCost pull-left"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> </div>  <table class="table table-striped table-bordered table-hover addTransferCostTable"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">转客单价</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-addTransferCost"> <tr> <td>转客价</td> <td>大人</td> <td><input type="text" name="adultCount" value="', 
            $line = 78, $out += $escape(touristGroupTransfer.touristGroup.adultCount), $out += '" readonly="readonly" class="col-sm-10 count"/></td> <td><span class="necessary pull-left col-sm-2">*</span><input type="text" name="transAdultPrice" value="', 
            $line = 79, $out += $escape(touristGroupTransfer.touristGroup.transAdultPrice), 
            $out += '" maxlength="11" class="col-sm-10 price"/></td> <td></td> </tr> <tr> <td>转客价</td> <td>小孩</td> <td><input type="text" name="childCount" value="', 
            $line = 86, $out += $escape(touristGroupTransfer.touristGroup.childCount), $out += '" readonly="readonly" class="col-sm-10 count"/></td> <td><span class="necessary pull-left col-sm-2">*</span><input type="text" name="transChildPrice" value="', 
            $line = 87, $out += $escape(touristGroupTransfer.touristGroup.transChildPrice), 
            $out += '" maxlength="11" class="col-sm-10 price"/></td> <td></td> </tr>  ', $line = 92, 
            $each(touristGroupTransfer.touristGroup.touristGroupTransferFeeSet, function(transferFee1) {
                $out += " ", $line = 93, null != transferFee1 && ($out += ' <tr class="touristGrTrfeSet" data-entity-id="', 
                $line = 94, $out += $escape(transferFee1.id), $out += '"> <td> <span name="type" value="0">其他费用</span> </td> <td><input type="text" name="discribe" value="', 
                $line = 98, $out += $escape(transferFee1.discribe), $out += '" class="col-sm-12"/></td> <td><input type="text" name="count" value="', 
                $line = 99, $out += $escape(transferFee1.count), $out += '" class="col-sm-12 count"/></td> <td><input type="text" name="otherPrice" value="', 
                $line = 100, $out += $escape(transferFee1.otherPrice), $out += '" class="col-sm-12 price"/></td> <td> <a class="cursor T-updateTransfer-delete"> 删除 </a> </td> </tr> ', 
                $line = 107), $out += " ", $line = 108;
            }), $out += ' </tbody> </table>  </div> </div> </div> </div> </form> </div> <div class="col-xs-12"> <form class="form-horizontal formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size">线路产品信息</label> </h5> <div class="widget-body clearfix"> <div class="widget-main"> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">线路产品：</label> <div class="col-sm-2"> <input name="lineProductName" value="', 
            $line = 133, $out += $escape(touristGroupTransfer.lineProduct.name), $out += '" type="text" readonly="readonly" class="date-picker col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">出游日期:：</label> <div class="col-sm-2"> <input name="createTime" value="', 
            $line = 137, $out += $escape($helpers.dateFormat(touristGroupTransfer.touristGroup.startTime, "yyyy-MM-dd")), 
            $out += '" disabled="disabled" type="text" class="date-picker col-xs-12"/> </div> </div> </div> <div class="form-group col-sm-12"> <div class="search-area"> <label class="col-sm-1 control-label no-padding-right">客户来源:</label> <div class="col-sm-2"> <input value="', 
            $line = 146, $out += $escape(touristGroupTransfer.touristGroup.partnerAgency.travelAgencyName), 
            $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">同行联系人:</label> <div class="col-sm-2"> <input name="contactMemberName" value="', 
            $line = 150, null != touristGroupTransfer.touristGroup.partnerAgencyContact && ($line = 150, 
            $out += $escape(touristGroupTransfer.touristGroup.partnerAgencyContact.contactRealname), 
            $out += "|", $line = 150, $out += $escape(touristGroupTransfer.touristGroup.partnerAgencyContact.contactMobileNumber), 
            $line = 150), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">获得方式:</label> <div class="col-sm-2"> <select name="getType" class="col-sm-12" disabled="disabled"> <option', 
            $line = 155, 1 == touristGroupTransfer.touristGroup.getType && ($out += ' selected="selected"', 
            $line = 155), $out += ' value="1">旅行社系统</option> <option', $line = 156, 2 == touristGroupTransfer.touristGroup.getType && ($out += ' selected="selected"', 
            $line = 156), $out += ' value="2">传真</option> <option', $line = 157, 3 == touristGroupTransfer.touristGroup.getType && ($out += ' selected="selected"', 
            $line = 157), $out += ' value="3">短信</option> <option', $line = 158, 4 == touristGroupTransfer.touristGroup.getType && ($out += ' selected="selected"', 
            $line = 158), $out += ' value="4">电话</option> <option', $line = 159, 5 == touristGroupTransfer.touristGroup.getType && ($out += ' selected="selected"', 
            $line = 159), $out += ' value="5">QQ</option> </select> </div> </div> </div> </div> </div> </div> </form> </div>  <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">4</span> <label class="middle title-size">收客信息</label> </h5> <div class="search-area col-sm-12"> ', 
            $line = 182, 1 == isParent ? ($out += ' <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label> <div class="col-sm-1"> <input name="needPayAllMoney" value="', 
            $line = 186, $out += $escape(parentTouristGroup.needPayAllMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-1"> <input name="payedMoney" value="', 
            $line = 191, $out += $escape(parentTouristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">现收：</label> <div class="col-sm-1"> <input name="currentNeedPayMoney" value="', 
            $line = 196, $out += $escape(parentTouristGroup.currentNeedPayMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> ', 
            $line = 199) : ($out += ' <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label> <div class="col-sm-1"> <input name="needPayAllMoney" value="', 
            $line = 202, $out += $escape(touristGroupTransfer.touristGroup.needPayAllMoney), 
            $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-1"> <input name="payedMoney" value="', 
            $line = 207, $out += $escape(touristGroupTransfer.touristGroup.payedMoney), $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> <label class="col-sm-1 control-label no-padding-right">现收：</label> <div class="col-sm-1"> <input name="currentNeedPayMoney" value="', 
            $line = 212, $out += $escape(touristGroupTransfer.touristGroup.currentNeedPayMoney), 
            $out += '" readonly="readonly" type="text" class="col-xs-12"/> </div> ', $line = 214), 
            $out += ' </div> <div class="search-area col-sm-12"> <label class="pull-left control-label no-padding-right">收客时的备注：</label> <div class="col-sm-5"> <input name="remark" value="', 
            $line = 222, $out += $escape(touristGroupTransfer.touristGroup.remark), $out += '" type="text" class="col-xs-12" readonly="readonly" /> </div> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">收客单价</th> </tr> </thead> <tbody> <tr> <td>结算价</td> <td>大人</td> <td>', 
            $line = 240, $out += $escape(touristGroupTransfer.touristGroup.adultCount), $out += "</td> <td>", 
            $line = 241, $out += $escape(touristGroupTransfer.touristGroup.adultPrice), $out += "</td> </tr> <tr> <td>结算价</td> <td>小孩</td> <td>", 
            $line = 247, $out += $escape(touristGroupTransfer.touristGroup.childCount), $out += "</td> <td>", 
            $line = 248, $out += $escape(touristGroupTransfer.touristGroup.childPrice), $out += "</td> </tr> ", 
            $line = 251, $each(touristGroupTransfer.touristGroup.touristGroupFeeList, function(transferFeeList) {
                $out += " <tr> <td>", $line = 253, 0 == transferFeeList.type ? ($out += "增加", $line = 253) : ($out += "减少", 
                $line = 253), $out += "</td> <td>", $line = 254, $out += $escape(transferFeeList.describeInfo), 
                $out += "</td> <td>", $line = 255, $out += $escape(transferFeeList.count), $out += "</td> <td>", 
                $line = 256, $out += $escape(transferFeeList.price), $out += "</td> </tr> ", $line = 258;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div>   <div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">5</span> <label class="middle title-size">游客小组信息</label> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">联系人</th> </tr> </thead> <tbody> ', 
            $line = 296, $each(touristGroupTransfer.touristGroup.touristGroupMemberList, function(toulist, i) {
                $out += " <tr> <td>", $line = 298, $out += $escape(i + 1), $out += "</td> <td>", 
                $line = 299, $out += $escape(toulist.name), $out += "</td> <td>", $line = 300, $out += $escape(toulist.mobileNumber), 
                $out += "</td> <td>身份证</td> <td>", $line = 302, $out += $escape(toulist.idCardNumber), 
                $out += "</td> <td>", $line = 303, 0 == toulist.isContactUser ? ($out += "否", $line = 303) : ($out += "是", 
                $line = 303), $out += "</td> </tr> ", $line = 305;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> </form> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-sm btn-danger T-cancelTransfer"> <i class="ace-icon fa fa-times"></i> 取消 </button> <button class="btn btn-sm btn-primary T-saveTransoutInfo" style="margin-left: 20px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="updateTransfer clearfix globalAdd">\r\n		<div  class="col-xs-12 clearfix">\r\n			<form class="form-horizontal clearfix " role="form" style="margin-top:10px" onsubmit="return false">\r\n				<div class=" ui-sortable-handle">\r\n							<h5 class="">\r\n								<span class="badge badge-primary">1</span>\r\n								<label class="middle title-size">修改小组信息</label>\r\n							</h5>\r\n						<div class="widget-body">\r\n							<div class="widget-body">\r\n								<div class="widget-main">				\r\n									<input type="hidden" name="status" value="{{touristGroupTransfer.touristGroup.status}}"/>\r\n								    <input type="hidden" name="touristGroupTransferId" value="{{touristGroupTransfer.id}}">\r\n								    <input type="hidden" name="touristGroupTransferId" value="{{touristGroupTransfer.partnerAgency.id}}">\r\n									<div class="form-group col-sm-12" style=" margin-top:20px; ">\r\n										 <div class="search-area">\r\n										   <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>同行地接：</label> \r\n											  <div class="col-sm-2">\r\n												<input type="text" class="col-sm-12 {{if touristGroupTransfer.status!=0}}T-choosePartnerAgency{{/if}} " style="{{if touristGroupTransfer.status==0}}color:#bbb;{{/if}} " placeholder="来源" name="" value="{{touristGroupTransfer.partnerAgency.travelAgencyName}}" />\r\n												<input type="hidden" name="transferPartnerAgencyId" value="{{touristGroupTransfer.partnerAgency.id}}" />\r\n										      </div> \r\n										 </div>   \r\n									 </div>\r\n									<!-- 付款金额start -->    \r\n									<div class="form-group col-sm-12 formOneList">\r\n										 <div class="search-area">                      \r\n											  <label class="col-sm-1 control-label no-padding-right pull-left">应付：</label>\r\n											  <div class="col-sm-2 trans-NeedPayAllMoney">\r\n												 <input name="transNeedPayAllMoney" value="{{touristGroupTransfer.touristGroup.transNeedPayAllMoney}}" type="text" readonly="readonly" class="col-xs-12"/>\r\n											  </div>\r\n											  \r\n											  <label class="col-sm-1 control-label no-padding-right pull-left"><span class="necessary">*</span>已付：</label>\r\n											  <div class="col-sm-2 trans-PayedMoney">\r\n												 <input name="transPayedMoney"  value="{{touristGroupTransfer.touristGroup.transPayedMoney}}" type="text"  class="col-xs-12"/>\r\n											  </div>\r\n\r\n\r\n											<label>\r\n												<input  type="checkbox" class="ace" checked="{{if touristGroupTransfer.operateCurrentNeedPayMoney==1}}checked{{/if}}" disabled="disabled" value="{{touristGroupTransfer.operateCurrentNeedPayMoney}}" name="isCurrent" />\r\n												<span class="lbl">\r\n												</span>\r\n											</label>\r\n											<label class="control-label no-padding-right">对方现收</label>\r\n										 </div>\r\n									</div>\r\n									<!-- 付款金额end -->\r\n									<div class="form-group col-sm-12">\r\n										<div class="search-area">\r\n											<label class="col-sm-1 control-label no-padding-right">转客时的备注:</label>\r\n											<div class="col-sm-6">\r\n												<input name="transRemark"  value="{{touristGroupTransfer.touristGroup.transRemark}}" type="text"  class="date-picker col-xs-12"/>\r\n											</div>\r\n										</div>\r\n									</div>\r\n									\r\n									<div class="form-group col-sm-12">\r\n										 <div class="search-area">       \r\n											<!-- 新增费用项目 -->\r\n											<div class="col-sm-8"> <button class="btn btn-sm btn-success T-transfer-addCost pull-left"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div>\r\n										 </div>\r\n									</div>\r\n										\r\n									<!-- 转客列表编辑start -->		\r\n									<table class="table table-striped table-bordered table-hover addTransferCostTable">\r\n										<thead>\r\n											<tr>   \r\n												<th class="th-border">类型</th>\r\n												<th class="th-border">说明</th>\r\n												<th class="th-border">数量</th>\r\n												<th class="th-border">转客单价</th>\r\n												<th class="th-border">操作</th>\r\n											</tr>\r\n										</thead>\r\n									  <tbody class="T-addTransferCost">       \r\n											<tr>\r\n												<td>转客价</td>\r\n												<td>大人</td>\r\n												<td><input type="text" name="adultCount"  value="{{touristGroupTransfer.touristGroup.adultCount}}" readonly="readonly" class="col-sm-10 count"/></td>\r\n												<td><span class="necessary pull-left col-sm-2">*</span><input type="text" name="transAdultPrice"  value="{{touristGroupTransfer.touristGroup.transAdultPrice}}" maxlength="11"  class="col-sm-10 price"/></td>\r\n												<td></td>	\r\n											</tr>\r\n											\r\n											<tr>\r\n												<td>转客价</td>      \r\n												<td>小孩</td>\r\n												<td><input type="text" name="childCount" value="{{touristGroupTransfer.touristGroup.childCount}}" readonly="readonly" class="col-sm-10 count"/></td>\r\n												<td><span class="necessary  pull-left col-sm-2">*</span><input type="text" name="transChildPrice" value="{{touristGroupTransfer.touristGroup.transChildPrice}}" maxlength="11" class="col-sm-10 price"/></td>	\r\n												<td></td>\r\n											</tr>\r\n											\r\n											  <!-- 其他费用 -->\r\n										      {{each touristGroupTransfer.touristGroup.touristGroupTransferFeeSet as transferFee1}}\r\n										      {{if transferFee1 != null}}\r\n											      <tr class="touristGrTrfeSet"  data-entity-id="{{transferFee1.id}}">\r\n														<td>\r\n															<span name="type" value="0">其他费用</span>\r\n														</td>\r\n														<td><input type="text" name="discribe" value="{{transferFee1.discribe}}"  class="col-sm-12"/></td>\r\n														<td><input type="text" name="count" value="{{transferFee1.count}}"  class="col-sm-12 count"/></td>	\r\n														<td><input type="text" name="otherPrice" value="{{transferFee1.otherPrice}}"  class="col-sm-12 price"/></td>\r\n														<td>\r\n															<a class="cursor  T-updateTransfer-delete">\r\n																删除\r\n															</a>\r\n														</td>\r\n												  </tr>\r\n												  {{/if}}  \r\n											  {{/each}}	\r\n										</tbody>\r\n									 </table>\r\n									 <!-- 转客列表编辑end -->						 \r\n								</div>\r\n							</div>\r\n						</div>\r\n				</div>\r\n			</form>	\r\n       </div>              \r\n	\r\n\r\n	 <div  class="col-xs-12">    \r\n		<form class="form-horizontal formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<div class=" ui-sortable-handle">\r\n					<h5 class="">\r\n						<span class="badge badge-primary">2</span>\r\n						<label class="middle title-size">线路产品信息</label>\r\n					</h5>\r\n					<div class="widget-body clearfix">\r\n					 <div class="widget-main">\r\n						<div class="form-group col-sm-12">\r\n							  <div class="search-area">\r\n								  <label class="col-sm-1 control-label no-padding-right">线路产品：</label>\r\n								  <div class="col-sm-2">\r\n									 <input name="lineProductName"  value="{{touristGroupTransfer.lineProduct.name}}" type="text" readonly="readonly" class="date-picker col-xs-12"/>\r\n								  </div>\r\n								  <label class="col-sm-1 control-label no-padding-right">出游日期:：</label>\r\n								  <div class="col-sm-2">\r\n									 <input name="createTime" value="{{touristGroupTransfer.touristGroup.startTime | dateFormat:\'yyyy-MM-dd\'}}" disabled="disabled" type="text" class="date-picker col-xs-12"/>\r\n								  </div>\r\n							   </div>\r\n						</div>    \r\n\r\n						<div class="form-group col-sm-12">\r\n						   <div class="search-area">\r\n						      <label class="col-sm-1 control-label no-padding-right">客户来源:</label>   \r\n							  <div class="col-sm-2">\r\n								 <input value="{{touristGroupTransfer.touristGroup.partnerAgency.travelAgencyName}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n							  </div>\r\n						   	  <label class="col-sm-1 control-label no-padding-right">同行联系人:</label>\r\n							  <div class="col-sm-2">\r\n							        <input name="contactMemberName" value="{{if touristGroupTransfer.touristGroup.partnerAgencyContact != null}}{{touristGroupTransfer.touristGroup.partnerAgencyContact.contactRealname}}|{{touristGroupTransfer.touristGroup.partnerAgencyContact.contactMobileNumber}}{{/if}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n							  </div>\r\n							<label class="col-sm-1 control-label no-padding-right">获得方式:</label>\r\n							<div class="col-sm-2">        \r\n								<select name="getType" class="col-sm-12" disabled="disabled">\r\n									<option{{if touristGroupTransfer.touristGroup.getType == 1}} selected="selected"{{/if}} value="1">旅行社系统</option>\r\n									<option{{if touristGroupTransfer.touristGroup.getType == 2}} selected="selected"{{/if}} value="2">传真</option>\r\n									<option{{if touristGroupTransfer.touristGroup.getType == 3}} selected="selected"{{/if}} value="3">短信</option>\r\n									<option{{if touristGroupTransfer.touristGroup.getType == 4}} selected="selected"{{/if}} value="4">电话</option>\r\n									<option{{if touristGroupTransfer.touristGroup.getType == 5}} selected="selected"{{/if}} value="5">QQ</option>\r\n								</select>     \r\n							</div>  \r\n						   </div>\r\n						</div>\r\n					 </div>\r\n				  </div>\r\n			</div>\r\n		</form>\r\n	</div> \r\n	\r\n	<!-- 收客信息start--> 	\r\n	<div  class="col-xs-12"> 		\r\n	   	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<div class="form-group">\r\n				<div class="col-xs-12 col-sm-12 widget-container-col" style="margin-top:-15px">\r\n					<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">4</span>\r\n							<label class="middle title-size">收客信息</label>\r\n						</h5>\r\n\r\n					<div class="search-area col-sm-12">\r\n						{{if isParent==1}}\r\n						    \r\n							    <label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label>\r\n								<div class="col-sm-1">\r\n									<input name="needPayAllMoney" value="{{parentTouristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n								</div>\r\n\r\n								<label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n								<div class="col-sm-1">\r\n									<input name="payedMoney" value="{{parentTouristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n				  				</div>\r\n\r\n								<label class="col-sm-1 control-label no-padding-right">现收：</label>\r\n								<div class="col-sm-1">\r\n									<input name="currentNeedPayMoney" value="{{parentTouristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n				  				</div>\r\n						  \r\n						   {{else}}\r\n							<label class="col-sm-1 control-label no-padding-right" style="width:84px;">应收：</label>\r\n						    <div class="col-sm-1">\r\n								<input name="needPayAllMoney" value="{{touristGroupTransfer.touristGroup.needPayAllMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n							</div>\r\n\r\n							<label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n							<div class="col-sm-1">\r\n								<input name="payedMoney" value="{{touristGroupTransfer.touristGroup.payedMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n			  				</div>\r\n\r\n							<label class="col-sm-1 control-label no-padding-right">现收：</label>\r\n							<div class="col-sm-1">\r\n								<input name="currentNeedPayMoney" value="{{touristGroupTransfer.touristGroup.currentNeedPayMoney}}" readonly="readonly" type="text" class="col-xs-12"/>\r\n			  				</div>\r\n						{{/if}}\r\n					</div>\r\n\r\n\r\n\r\n						<div class="search-area col-sm-12">\r\n							<label class="pull-left control-label no-padding-right">收客时的备注：</label>\r\n							<div class="col-sm-5">\r\n							   <input name="remark" value="{{touristGroupTransfer.touristGroup.remark}}" type="text" class="col-xs-12" readonly="readonly" />\r\n						    </div>\r\n						</div>\r\n						<div class="widget-body">\r\n							<div class="widget-main no-padding">\r\n								<table class="table table-striped table-bordered table-hover">\r\n									<thead>\r\n										<tr>\r\n											<th class="th-border">类型</th>\r\n											<th class="th-border">说明</th>\r\n											<th class="th-border">数量</th>\r\n											<th class="th-border">收客单价</th>\r\n										</tr>\r\n									</thead>\r\n								  <tbody>      \r\n										<tr>\r\n											<td>结算价</td>\r\n											<td>大人</td>\r\n											<td>{{touristGroupTransfer.touristGroup.adultCount}}</td>\r\n											<td>{{touristGroupTransfer.touristGroup.adultPrice}}</td>	\r\n										</tr>\r\n										\r\n										<tr>   \r\n											<td>结算价</td>\r\n											<td>小孩</td>\r\n											<td>{{touristGroupTransfer.touristGroup.childCount}}</td>\r\n											<td>{{touristGroupTransfer.touristGroup.childPrice}}</td>	\r\n										</tr>\r\n										\r\n										{{each touristGroupTransfer.touristGroup.touristGroupFeeList as transferFeeList}}\r\n										<tr>\r\n											<td>{{if transferFeeList.type==0}}增加{{else}}减少{{/if}}</td>\r\n											<td>{{transferFeeList.describeInfo}}</td>\r\n											<td>{{transferFeeList.count}}</td>\r\n											<td>{{transferFeeList.price}}</td>	  \r\n										</tr>\r\n										{{/each}}  \r\n										\r\n										\r\n									</tbody>\r\n								</table>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</form>\r\n	</div> \r\n<!-- 收客信息end -->       \r\n\r\n	<!-- 游客信息start -->\r\n	<div  class="col-xs-12">\r\n		<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n				<div class="form-group">\r\n					<div class="col-xs-12 col-sm-12 widget-container-col">\r\n						<div class=" ui-sortable-handle">\r\n								<h5 class="">\r\n									<span class="badge badge-primary">5</span>\r\n									<label class="middle title-size">游客小组信息</label>\r\n								</h5>\r\n							<div class="widget-body">\r\n								<div class="widget-main no-padding">\r\n										<table class="table table-striped table-bordered table-hover">\r\n											<thead>\r\n												<tr>\r\n													<th class="th-border">序号</th>\r\n													<th class="th-border">姓名</th>\r\n													<th class="th-border">联系电话</th>\r\n													<th class="th-border">证件类型</th>\r\n													<th class="th-border">证件号</th>\r\n													<th class="th-border">联系人</th>\r\n												</tr>\r\n											</thead>\r\n										  <tbody>    \r\n										      {{each touristGroupTransfer.touristGroup.touristGroupMemberList as toulist i}}\r\n												<tr>\r\n													<td>{{i+1}}</td>\r\n													<td>{{toulist.name}}</td>\r\n													<td>{{toulist.mobileNumber}}</td>\r\n													<td>身份证</td>	\r\n													<td>{{toulist.idCardNumber}}</td>\r\n													<td>{{if toulist.isContactUser==0}}否{{else}}是{{/if}}</td>	\r\n												</tr>\r\n												{{/each}}\r\n											</tbody>\r\n									</table>\r\n								</div>\r\n							</div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n		</form>\r\n	</div>\r\n	<form class="form-horizontal" role="form" onsubmit="return false">\r\n		<div class="form-group" style="text-align: center;">\r\n		    <button class="btn btn-sm btn-danger T-cancelTransfer">\r\n				<i class="ace-icon fa fa-times"></i> 取消\r\n			</button> \r\n			<button class="btn btn-sm btn-primary T-saveTransoutInfo" style="margin-left: 20px">\r\n			    <i class="ace-icon fa fa-check"></i> 保存 \r\n			</button>\r\n		</div> \r\n	</form>\r\n</div>					\r\n	'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});