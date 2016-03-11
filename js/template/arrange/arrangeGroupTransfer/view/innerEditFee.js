/*TMODJS:{"debug":true,"version":128,"md5":"e5fc5b52934ad33335db938d8b406c37"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeGroupTransfer/view/innerEditFee", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, touristGroup = $data.touristGroup, cashFlag = $data.cashFlag, $each = $utils.$each, touristGroupFeeList = $data.touristGroupFeeList, $string = ($data.transferList, 
            $data.$index, $utils.$string), innerTransferFeeList = $data.innerTransferFeeList, linProJson = ($data.innerFee, 
            $data.linProJson), subsection = $data.subsection, $out = ($data.touristGroupFlist, 
            "");
            return $out += '<div class="col-xs-12 globalAdd" id="T-innerEditFeeMain"> <form class="form-horizontal innerEditFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">填写费用</label> </h5> <div class="widget-body" > <div class="form-group"> <input type="hidden" name="touristGroupId" value="', 
            $line = 10, $out += $escape(touristGroup.id), $out += '" /> <label class="col-sm-2 control-label no-padding-right">备注：</label> <div class="col-sm-8"> <input name="transRemark" value="', 
            $line = 13, $out += $escape(touristGroup.transRemark), $out += '" class="col-sm-12 no-padding-right" type="text" maxlength="500" /> </div> </div> <input type="hidden" name="innerTransferFeeStatus" value="', 
            $line = 16, $out += $escape(touristGroup.innerTransferFeeStatus), $out += '"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">应付:</label> <div class="col-sm-2"> <input value="', 
            $line = 20, 0 == touristGroup.innerTransferFeeStatus ? ($line = 20, $out += $escape(touristGroup.needPayAllMoney), 
            $line = 20) : ($line = 20, $out += $escape(touristGroup.transNeedPayAllMoney), $line = 20), 
            $out += '" readonly="readonly" type="text" name="transNeedPayAllMoney" class="col-sm-12 F-float F-money" /> </div> <label class="col-sm-1 control-label no-padding-right">计划现收:</label> <div class="col-xs-1"> ', 
            $line = 25, 1 == cashFlag ? ($out += ' <span class="F-float F-money">', $line = 26, 
            $out += $escape(touristGroup.currentNeedPayMoney), $out += "</span> ", $line = 27) : ($out += " <span>0</span> ", 
            $line = 29), $out += ' </div> <label class="control-label no-padding-right">对方现收</label> <label style="margin: 2px 5px 0"> <input type="checkbox" disabled="disabled" ', 
            $line = 35, 1 == cashFlag && ($out += 'checked="checked"', $line = 35), $out += ' class="ace send-check F-float F-money"> <span class="lbl"> </span> <input type="hidden" name="cashFlag" value="', 
            $line = 38, $out += $escape(cashFlag), $out += '"> </label> <div class="col-sm-2"> <input value="', 
            $line = 41, 1 == touristGroup.innerTransferFeeStatus && ($line = 41, $out += $escape(touristGroup.transPayedMoney), 
            $line = 41), $out += '" type="hidden" name="transPayedMoney" class="col-sm-12 price F-float F-money" maxlength="10" readonly="readonly" /> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <button class="btn btn-sm btn-success T-newEditFee" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border" width="20%">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> <th class="th-border" width="80px">操作</th> </tr> </thead> <tbody class="T-innerOutEditFeeTbody"> ', 
            $line = 68, 0 == touristGroup.innerTransferFeeStatus ? ($out += "  ", $line = 70, 
            $each(touristGroupFeeList, function(transferList) {
                $out += " ", $line = 72, 0 == touristGroup.operateCalculteOut ? ($out += " ", $line = 73, 
                3 != transferList.type && ($out += ' <tr data-entity-id="', $line = 74, $out += $escape(transferList.id), 
                $out += '"> <td> <select name="type" class="col-sm-10 col-sm-offset-1"> ', $line = 77, 
                $out += $string($helpers.getFeeItemType(transferList.type, !1)), $out += ' </select> </td> <td> <input name="count" value="', 
                $line = 82, $out += $escape(transferList.count), $out += '" type="text" class="col-sm-12 no-padding-right count T-count T-calc F-float F-count" maxlength="10"/> </td> <td> <input name="price" value="', 
                $line = 85, $out += $escape(transferList.price), $out += '" type="text" class="col-sm-12 no-padding-right price T-price T-calc F-float F-money" maxlength="10" /> </td> <td> <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12 no-padding-right T-payMoney F-float F-money"/> </td> <td> <input name="remark" value="', 
                $line = 92, $out += $escape(transferList.remark), $out += '" type="text" class="col-sm-12 no-padding-right" maxlength="500" /> </td> <td><a class="T-delete cursor">删除</a></td> </tr> ', 
                $line = 96), $out += " ", $line = 97) : ($out += ' <tr data-entity-id="', $line = 98, 
                $out += $escape(transferList.id), $out += '"> <td> <select name="type" class="col-sm-10 col-sm-offset-1" ', 
                $line = 100, 3 == transferList.type && ($out += "disabled", $line = 100), $out += "> ", 
                $line = 101, $out += $string($helpers.getFeeItemType(transferList.type, !0)), $out += ' </select> </td> <td> <input name="count" value="', 
                $line = 106, $out += $escape(transferList.count), $out += '" type="text" class="col-sm-12 no-padding-right count T-count T-calc F-float F-count" maxlength="10" ', 
                $line = 106, 3 == transferList.type && ($out += "readonly", $line = 106), $out += '/> </td> <td> <input name="price" value="', 
                $line = 109, $out += $escape(transferList.price), $out += '" type="text" class="col-sm-12 no-padding-right price T-price T-calc F-float F-money" maxlength="10" ', 
                $line = 109, 3 == transferList.type && ($out += "readonly", $line = 109), $out += ' /> </td> <td> <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12 no-padding-right T-payMoney F-float F-money"/> </td> <td> <input name="remark" value="', 
                $line = 116, $out += $escape(transferList.remark), $out += '" type="text" class="col-sm-12 no-padding-right" maxlength="500" ', 
                $line = 116, 3 == transferList.type && ($out += "readonly", $line = 116), $out += " /> </td> <td> ", 
                $line = 118, 3 != transferList.type && ($out += '<a class="T-delete cursor">删除</a>', 
                $line = 118), $out += "</td> </tr> ", $line = 120), $out += " ", $line = 122;
            }), $out += "  ", $line = 124) : ($out += "  ", $line = 126, $each(innerTransferFeeList, function(innerFee) {
                $out += ' <tr data-entity-id="', $line = 127, $out += $escape(innerFee.id), $out += '"> <td> <select name="type" class="col-sm-10 col-sm-offset-1" ', 
                $line = 129, 3 == innerFee.type && ($out += "disabled", $line = 129), $out += "> ", 
                $line = 130, $out += $string($helpers.getFeeItemType(innerFee.type, !0)), $out += ' </select> </td> <td> <input name="count" value="', 
                $line = 135, $out += $escape(innerFee.count), $out += '" ', $line = 135, 3 == innerFee.type && ($out += "readonly", 
                $line = 135), $out += ' type="text" class="col-sm-12 no-padding-right count T-count T-calc F-float F-count" maxlength="10" /> </td> <td> <input name="price" value="', 
                $line = 138, $out += $escape(innerFee.price), $out += '" ', $line = 138, 3 == innerFee.type && ($out += "readonly", 
                $line = 138), $out += ' type="text" class="col-sm-12 no-padding-right price T-price T-calc F-float F-money" maxlength="10" /> </td> <td> <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12 no-padding-right T-payMoney F-float F-money"/> </td> <td> <input name="remark" value="', 
                $line = 144, $out += $escape(innerFee.remark), $out += '" ', $line = 144, 3 == innerFee.type && ($out += "readonly", 
                $line = 144), $out += ' type="text" class="col-sm-12 no-padding-right" maxlength="500" /> </td> <td>', 
                $line = 147, 3 != innerFee.type && ($out += '<a class="T-delete cursor">删除</a>', 
                $line = 147), $out += "</td> </tr> ", $line = 149;
            }), $out += "  ", $line = 151), $out += ' </tbody> </table> </div> </div> </div> </div> </form>  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="title"> <span class="badge badge-primary">2</span> <label class="middle title-size">收客信息</label> </h5> <div class="widget-body" > <div class="form-group clearfix"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover"> <colgroup> <col style="width:15%;"> <col style="width:25%"> <col style="width:15%"> <col style="width:15%"> <col style="width:15%"> <col style="width:25%"> </colgroup> <tr> <td>线路产品</td> <td class="T-name">', 
            $line = 183, $out += $escape(linProJson.name), $out += '</td> <td>出游日期</td> <td colspan="3" class="T-startTime">', 
            $line = 185, $out += $escape(linProJson.startTime), $out += '</td> </tr> <tr> <td>客户</td> <td class="T-customer">', 
            $line = 189, $out += $escape(linProJson.customer), $out += '</td> <td>客户联系人</td> <td class="T-contactName">', 
            $line = 191, $out += $escape(linProJson.contactName), $out += " | ", $line = 191, 
            $out += $escape(linProJson.mobileNumber), $out += '</td> <td>获得方式</td> <td class="T-getType">', 
            $line = 193, $out += $escape(linProJson.getType), $out += '</td> </tr> <tr> <td>备注</td> <td colspan="5"> ', 
            $line = 198, null != touristGroup && ($line = 198, $out += $escape(touristGroup.remark), 
            $line = 198), $out += ' </td> </tr> </table> </div> </div> <div class="form-group" style="margin-left:5%;"> <label class="col-sm-2 control-label no-padding-right">应收:</label> <div class="col-sm-2 F-float F-money"> ', 
            $line = 209, null == touristGroup.parentTouristGroup ? ($out += " ", $line = 210, 
            $out += $escape(touristGroup.needPayAllMoney), $out += " ", $line = 211) : ($out += " ", 
            $line = 212, $out += $escape(touristGroup.parentTouristGroup.needPayAllMoney), $out += " ", 
            $line = 213), $out += " </div> ", $line = 216, 0 == subsection && ($out += ' <label class="col-sm-1 control-label no-padding-right">已收:</label> <div class="col-sm-2 F-float F-money"> ', 
            $line = 219, null == touristGroup.parentTouristGroup ? ($out += " ", $line = 220, 
            $out += $escape(touristGroup.payedMoney), $out += " ", $line = 221) : ($out += " ", 
            $line = 222, $out += $escape(touristGroup.parentTouristGroup.payedMoney), $out += " ", 
            $line = 223), $out += " </div> ", $line = 225), $out += ' <label class="col-sm-2 control-label no-padding-right">计划现收:</label> <div class="col-sm-1 F-float F-money"> ', 
            $line = 230, 1 == cashFlag ? ($out += " <span>", $line = 231, $out += $escape(touristGroup.currentNeedPayMoney), 
            $out += "</span> ", $line = 232) : ($out += " <span>0</span> ", $line = 234), $out += ' </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border" width="20%">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody> ', 
            $line = 252, $each(touristGroupFeeList, function(touristGroupFlist) {
                $out += ' <tr> <td> <input readonly="readonly" value="', $line = 255, $out += $escape(touristGroupFlist.name), 
                $out += '" type="text" class="col-sm-12 no-padding-right" /> </td> <td class="F-float F-count"> ', 
                $line = 258, $out += $escape(touristGroupFlist.count), $out += ' </td> <td class="F-float F-money"> ', 
                $line = 261, $out += $escape(touristGroupFlist.price), $out += ' </td> <td class="F-float F-money"> ', 
                $line = 264, $out += $escape(touristGroupFlist.count * touristGroupFlist.price), 
                $out += " </td> <td> ", $line = 267, $out += $escape(touristGroupFlist.remark), 
                $out += " </td> </tr> ", $line = 270;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </form>  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="space-10"></div> <button class="btn btn-block btn-default btn-primary T-updateFee guideSubmit"> <i class="ace-icon fa fa-check"></i> 保存信息 </button> <div class="space-20"></div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 globalAdd" id="T-innerEditFeeMain">\r\n	<form class="form-horizontal innerEditFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="middle title-size">填写费用</label>\r\n				</h5>\r\n			<div class="widget-body" >\r\n				<div class="form-group">\r\n					<input type="hidden" name="touristGroupId" value="{{touristGroup.id}}" />\r\n					<label class="col-sm-2 control-label no-padding-right">备注：</label>\r\n					<div class="col-sm-8">    \r\n						<input name="transRemark" value="{{touristGroup.transRemark}}" class="col-sm-12  no-padding-right" type="text" maxlength="500" />  \r\n					</div>\r\n				</div> \r\n				<input type="hidden" name="innerTransferFeeStatus" value="{{touristGroup.innerTransferFeeStatus}}">  \r\n				<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">应付:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup.innerTransferFeeStatus == 0}}{{touristGroup.needPayAllMoney}}{{else}}{{touristGroup.transNeedPayAllMoney}}{{/if}}" readonly="readonly" type="text" name="transNeedPayAllMoney" class="col-sm-12 F-float F-money" />\r\n						</div>\r\n\r\n					 	<label class="col-sm-1 control-label no-padding-right">计划现收:</label>\r\n						<div class="col-xs-1">\r\n						{{if cashFlag== 1}}\r\n							<span class="F-float F-money">{{touristGroup.currentNeedPayMoney}}</span>\r\n							{{else}}\r\n							<span>0</span>\r\n						{{/if}}\r\n						</div>\r\n\r\n\r\n                        <label class="control-label no-padding-right">对方现收</label>\r\n						<label style="margin: 2px 5px 0">\r\n							<input type="checkbox" disabled="disabled" {{if cashFlag== 1}}checked="checked"{{/if}} class="ace send-check F-float F-money">\r\n							<span class="lbl">\r\n							</span>\r\n							<input type="hidden" name="cashFlag" value="{{cashFlag}}">\r\n						</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup.innerTransferFeeStatus == 1}}{{touristGroup.transPayedMoney}}{{/if}}" type="hidden" name="transPayedMoney" class="col-sm-12 price F-float F-money"  maxlength="10" readonly="readonly" />\r\n						</div>\r\n					</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<button class="btn btn-sm btn-success T-newEditFee" style="float:left;">\r\n							<i class="ace-icon fa fa-plus"></i>\r\n							新增费用项\r\n						</button>\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th class="th-border" width="20%">费用项</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n									<th class="th-border">金额</th>\r\n									<th class="th-border">说明</th>\r\n									<th class="th-border" width="80px">操作</th>\r\n								</tr>\r\n							</thead>\r\n							<tbody class="T-innerOutEditFeeTbody"> \r\n							    {{if touristGroup.innerTransferFeeStatus==0}}\r\n									<!--初始化游客小组费用start--> \r\n									{{each touristGroupFeeList as transferList}} \r\n\r\n									{{if touristGroup.operateCalculteOut==0}}\r\n											{{if transferList.type!=3}}    \r\n												<tr  data-entity-id="{{transferList.id}}">\r\n													<td>\r\n														 <select name="type" class="col-sm-10 col-sm-offset-1">\r\n						                                    {{#transferList.type | getFeeItemType: false}}\r\n						                                 </select>\r\n													</td>  \r\n													\r\n													<td>\r\n														<input name="count" value="{{transferList.count}}" type="text" class="col-sm-12  no-padding-right count T-count T-calc F-float F-count"  maxlength="10"/>\r\n													</td>\r\n													<td>\r\n														<input name="price" value="{{transferList.price}}" type="text" class="col-sm-12  no-padding-right price T-price T-calc F-float F-money"  maxlength="10" />\r\n													</td>\r\n\r\n													<td>\r\n														<input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12  no-padding-right T-payMoney F-float F-money"/>\r\n													</td>\r\n													<td>\r\n														<input name="remark" value="{{transferList.remark}}" type="text" class="col-sm-12  no-padding-right"  maxlength="500" />\r\n													</td>\r\n													<td><a class="T-delete cursor">删除</a></td>\r\n												</tr>\r\n											{{/if}}\r\n										{{else}}\r\n										<tr  data-entity-id="{{transferList.id}}">\r\n											<td>\r\n												 <select name="type" class="col-sm-10 col-sm-offset-1" {{if transferList.type==3}}disabled{{/if}}>\r\n				                                    {{#transferList.type | getFeeItemType: true}}\r\n				                                 </select>\r\n											</td> \r\n											\r\n											<td>\r\n												<input name="count" value="{{transferList.count}}" type="text" class="col-sm-12  no-padding-right count T-count T-calc F-float F-count"  maxlength="10" {{if transferList.type==3}}readonly{{/if}}/>\r\n											</td>\r\n											<td>\r\n												<input name="price" value="{{transferList.price}}" type="text" class="col-sm-12  no-padding-right price T-price T-calc F-float F-money"  maxlength="10" {{if transferList.type==3}}readonly{{/if}} />\r\n											</td>\r\n\r\n											<td>\r\n												<input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12  no-padding-right T-payMoney F-float F-money"/>\r\n											</td>\r\n											<td>\r\n												<input name="remark" value="{{transferList.remark}}" type="text" class="col-sm-12  no-padding-right"  maxlength="500"  {{if transferList.type==3}}readonly{{/if}} />\r\n											</td>\r\n											<td> {{if transferList.type!=3}}<a class="T-delete cursor">删除</a>{{/if}}</td>\r\n										</tr>\r\n									{{/if}}\r\n										\r\n									{{/each}}\r\n									<!--游客小组费end-->\r\n								   {{else}}\r\n									<!--转客其他费用start-->\r\n									{{each innerTransferFeeList as innerFee}}\r\n									<tr data-entity-id="{{innerFee.id}}">\r\n										<td>\r\n										    <select name="type" class="col-sm-10 col-sm-offset-1" {{if innerFee.type==3}}disabled{{/if}}>\r\n				                                {{#innerFee.type | getFeeItemType: true}}\r\n				                            </select>\r\n										</td>\r\n										\r\n										<td>\r\n											<input name="count" value="{{innerFee.count}}" {{if innerFee.type==3}}readonly{{/if}} type="text" class="col-sm-12  no-padding-right count T-count T-calc F-float F-count"  maxlength="10" />\r\n										</td>\r\n										<td>\r\n											<input name="price" value="{{innerFee.price}}" {{if innerFee.type==3}}readonly{{/if}} type="text" class="col-sm-12  no-padding-right price T-price T-calc F-float F-money"  maxlength="10" />\r\n										</td>\r\n										<td>\r\n											<input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12  no-padding-right T-payMoney F-float F-money"/>\r\n										</td>\r\n										<td>\r\n											<input name="remark" value="{{innerFee.remark}}" {{if innerFee.type==3}}readonly{{/if}} type="text" class="col-sm-12  no-padding-right"  maxlength="500" />\r\n										</td>\r\n\r\n										<td>{{if innerFee.type!=3}}<a class="T-delete cursor">删除</a>{{/if}}</td>\r\n									</tr>\r\n									{{/each}}\r\n									<!--转客其他费用end-->\r\n							    {{/if}}\r\n							</tbody>\r\n						</table>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n\r\n\r\n	<!--收客信息 start-->\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="title">\r\n					<span class="badge badge-primary">2</span>\r\n					<label class="middle title-size">收客信息</label>\r\n				</h5>\r\n			   <div class="widget-body" >\r\n			        <div class="form-group clearfix">\r\n					    <div class="col-sm-2"></div>\r\n						<div class="col-sm-8">\r\n							<table class="table table-striped table-bordered table-hover"> \r\n							    <colgroup>\r\n							        <col style="width:15%;">\r\n							        <col style="width:25%">\r\n							        <col style="width:15%">\r\n							        <col style="width:15%">\r\n							        <col style="width:15%">\r\n							        <col style="width:25%">\r\n							    </colgroup>\r\n								<tr>\r\n								   <td>线路产品</td>\r\n								   <td class="T-name">{{linProJson.name}}</td>\r\n								   <td>出游日期</td>\r\n								   <td colspan="3" class="T-startTime">{{linProJson.startTime}}</td>\r\n								</tr>\r\n								<tr>\r\n								   <td>客户</td>\r\n								   <td class="T-customer">{{linProJson.customer}}</td>\r\n								   <td>客户联系人</td>\r\n								   <td class="T-contactName">{{linProJson.contactName}} | {{linProJson.mobileNumber}}</td>\r\n								   <td>获得方式</td>\r\n								   <td class="T-getType">{{linProJson.getType}}</td>\r\n								</tr>\r\n								<tr>\r\n								    <td>备注</td>\r\n									<td colspan="5">\r\n										{{if touristGroup != null}}{{touristGroup.remark}}{{/if}}\r\n									</td>\r\n								</tr>\r\n					        </table>\r\n					    </div>\r\n					</div> \r\n					\r\n\r\n				<div class="form-group" style="margin-left:5%;">\r\n					<label class="col-sm-2 control-label no-padding-right">应收:</label>\r\n					<div class="col-sm-2 F-float F-money">\r\n						{{ if touristGroup.parentTouristGroup == null}}\r\n							{{touristGroup.needPayAllMoney}}\r\n						{{else}}\r\n							{{touristGroup.parentTouristGroup.needPayAllMoney}}\r\n						{{/if}}\r\n					</div>\r\n\r\n					{{if subsection==0}}\r\n					<label class="col-sm-1 control-label no-padding-right">已收:</label>\r\n					<div class="col-sm-2 F-float F-money">\r\n						{{ if touristGroup.parentTouristGroup == null}}\r\n							{{touristGroup.payedMoney}}\r\n						{{else}}\r\n							{{touristGroup.parentTouristGroup.payedMoney}}\r\n						{{/if}}\r\n					</div>\r\n					{{/if}}\r\n\r\n\r\n					<label class="col-sm-2 control-label no-padding-right">计划现收:</label>\r\n					<div class="col-sm-1 F-float F-money">\r\n						{{if cashFlag== 1}}\r\n							<span>{{touristGroup.currentNeedPayMoney}}</span>\r\n							{{else}}\r\n							<span>0</span>\r\n						{{/if}}\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">  \r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th class="th-border" width="20%">费用项</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n									<th class="th-border">金额</th>\r\n									<th class="th-border">说明</th>\r\n								\r\n								</tr>\r\n							</thead>   \r\n							<tbody>\r\n								{{each touristGroupFeeList as touristGroupFlist}}\r\n										<tr>         \r\n											<td>\r\n											    <input readonly="readonly" value="{{touristGroupFlist.name}}" type="text" class="col-sm-12  no-padding-right" />\r\n											</td>\r\n											<td class="F-float F-count">\r\n												{{touristGroupFlist.count}}\r\n											</td>\r\n											<td class="F-float F-money">\r\n												{{touristGroupFlist.price}}  \r\n											</td>\r\n											<td class="F-float F-money">\r\n												{{touristGroupFlist.count*touristGroupFlist.price}}\r\n											</td>\r\n											<td>\r\n												{{touristGroupFlist.remark}}\r\n											</td>\r\n										</tr> \r\n								{{/each}}\r\n							</tbody>\r\n						</table>\r\n				    </div>\r\n			    </div> \r\n			</div>   \r\n		</div>  \r\n	</form>     \r\n	<!--收客信息 end-->\r\n\r\n\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-default btn-primary T-updateFee guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			保存信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});