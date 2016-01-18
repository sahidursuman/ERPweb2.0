/*TMODJS:{"debug":true,"version":425,"md5":"a7a262f0c981aacf3ab6f585da9ca4c6"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/outEditFee", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, touristGroup = $data.touristGroup, cashFlag = $data.cashFlag, $each = $utils.$each, $string = ($data.transferList, 
            $data.$index, $utils.$string), subsection = $data.subsection, touristGroupFeeList = ($data.transferOtherFee, 
            $data.touristGroupFeeList), $out = ($data.touristGroupFlist, "");
            return $out += '<div class="col-xs-12 editFeeMain globalAdd" id= "T-outEditFeeMain"> <form class="form-horizontal editFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">填写费用</label> </h5> <div class="widget-body" > <div class="form-group"> <input type="hidden" name="touristGroupId" value="', 
            $line = 10, $out += $escape(touristGroup.id), $out += '" /> <label class="col-sm-2 control-label no-padding-right">备注：</label> <div class="col-sm-8"> <input name="remark" value="', 
            $line = 13, null != touristGroup && ($line = 13, 1 == touristGroup.transferFeeStatus && ($line = 13, 
            $out += $escape(touristGroup.transRemark), $line = 13), $line = 13), $out += '" class="col-sm-12 no-padding-right" type="text" maxlength="500"> </div> </div> <input type="hidden" name="transferFeeStatus" value="', 
            $line = 16, $out += $escape(touristGroup.transferFeeStatus), $out += '"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">应付:</label> <div class="col-sm-2"> <input value="', 
            $line = 20, null != touristGroup && ($line = 20, $out += $escape(touristGroup.transNeedPayAllMoney), 
            $line = 20), $out += '" readonly="readonly" type="text" name="transNeedPayAllMoney" class="col-sm-12 F-float F-money" /> </div> <label class="col-sm-1 control-label no-padding-right">已付:</label> <div class="col-sm-2"> <input value="', 
            $line = 24, 1 == touristGroup.transferFeeStatus && ($line = 24, $out += $escape(touristGroup.transPayedMoney), 
            $line = 24), $out += '" type="text" name="transPayedMoney" class="col-sm-12 price F-float F-money" readonly="readonly" /> </div> <label class="col-sm-1 control-label no-padding-right">计划现收:</label> <div class="col-xs-1"> ', 
            $line = 29, 1 == cashFlag ? ($out += ' <span class="F-float F-money">', $line = 30, 
            $out += $escape(touristGroup.currentNeedPayMoney), $out += "</span> ", $line = 31) : ($out += ' <span class="F-float F-money">0</span> ', 
            $line = 33), $out += ' </div> <label style="margin: 2px 5px 0"> <input type="checkbox" disabled="disabled" ', 
            $line = 37, 1 == cashFlag && ($out += 'checked="checked"', $line = 37), $out += ' class="ace send-check"> <span class="lbl"> </span> <input type="hidden" name="isCurrent" value="', 
            $line = 40, $out += $escape(cashFlag), $out += '"> </label> <label class="col-sm-1 control-label no-padding-right" >对方现收</label> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <button class="btn btn-sm btn-success T-newEditFee" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border" width="20%">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> <th class="th-border" width="80px">操作</th> </tr> </thead> <tbody class="T-innerOutEditFeeTbody">  ', 
            $line = 72, $each(touristGroup.touristGroupFeeList, function(transferList) {
                $out += ' <tr data-entity-id="', $line = 73, $out += $escape(transferList.id), $out += '"> <td> <select name="type" class="col-sm-10 col-sm-offset-1"> ', 
                $line = 76, $out += $string($helpers.getFeeItemType(transferList.type, !1)), $out += ' </select> </td> <td> <input name="count" value="', 
                $line = 81, 0 == subsection && ($line = 81, $out += $escape(transferList.count), 
                $line = 81), $out += '" type="text" class="col-sm-12 no-padding-right count T-count T-calc F-float F-count" /> </td> <td> <input name="price" value="', 
                $line = 84, 0 == subsection && ($line = 84, $out += $escape(transferList.price), 
                $line = 84), $out += '" type="text" class="col-sm-12 no-padding-right price T-price T-calc F-float F-money" /> </td> <td> <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12 no-padding-right T-payMoney F-float F-money" /> </td> <td> <input name="remark" value="', 
                $line = 92, $out += $escape(transferList.remark), $out += '" type="text" class="col-sm-12 no-padding-right" /> </td> <td><a class="T-delete cursor">删除</a></td> </tr> ', 
                $line = 97;
            }), $out += "   ", $line = 102, $each(touristGroup.touristGroupTransferFeeSet, function(transferOtherFee) {
                $out += ' <tr data-entity-id="', $line = 103, $out += $escape(transferOtherFee.id), 
                $out += '"> <td> <select name="type" class="col-sm-10 col-sm-offset-1"> ', $line = 106, 
                $out += $string($helpers.getFeeItemType(transferOtherFee.type, !1)), $out += ' </select> </td> <td> <input name="count" value="', 
                $line = 111, $out += $escape(transferOtherFee.count), $out += '" type="text" class="col-sm-12 no-padding-right count T-count T-calc F-float F-count" /> </td> <td> <input name="price" value="', 
                $line = 114, $out += $escape(transferOtherFee.price), $out += '" type="text" class="col-sm-12 no-padding-right price T-price T-calc F-float F-money" /> </td> <td> <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12 no-padding-right T-payMoney F-float F-money" /> </td> <td> <input name="remark" value="', 
                $line = 121, $out += $escape(transferOtherFee.remark), $out += '" type="text" class="col-sm-12 no-padding-right" /> </td> <td><a class="T-delete cursor">删除</a></td> </tr> ', 
                $line = 125;
            }), $out += "  </tbody> </table> </div> </div> </div> </div> </form> ", $line = 136, 
            0 == subsection && ($out += '  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="title"> <span class="badge badge-primary">2</span> <label class="middle title-size">收客信息</label> </h5> <div class="widget-body" > <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">收客备注：</label> <div class="col-sm-8"> <input readonly="readonly" value="', 
            $line = 148, null != touristGroup && ($line = 148, $out += $escape(touristGroup.remark), 
            $line = 148), $out += '" class="col-sm-12 no-padding-right" type="text"> </div> </div> <div class="form-group" style="margin-left:25%;"> <label class="col-sm-1 control-label no-padding-right">应收：</label> <div class="col-sm-2"> <span>', 
            $line = 155, $out += $escape(touristGroup.needPayAllMoney), $out += "</span> </div> ", 
            $line = 159, 0 == subsection && ($out += ' <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-2"> <span>', 
            $line = 162, $out += $escape(touristGroup.payedMoney), $out += "</span> </div> ", 
            $line = 164), $out += ' <label class="col-sm-2 control-label no-padding-right">计划现收：</label> <div class="col-sm-1"> ', 
            $line = 168, 1 == cashFlag ? ($out += " <span>", $line = 169, $out += $escape(touristGroup.currentNeedPayMoney), 
            $out += "</span> ", $line = 170) : ($out += " <span>0</span> ", $line = 172), $out += ' </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody> ', 
            $line = 191, $each(touristGroupFeeList, function(touristGroupFlist) {
                $out += ' <tr> <td> <input readonly="readonly" value="', $line = 194, $out += $escape(touristGroupFlist.describeInfo), 
                $out += '" type="text" class="col-sm-12 no-padding-right" /> </td> <td> <input value="', 
                $line = 198, $out += $escape(touristGroupFlist.count), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costCount F-float F-count" /> </td> <td> <input value="', 
                $line = 201, $out += $escape(touristGroupFlist.price), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costPrice F-float F-money" /> </td> <td> <input value="', 
                $line = 204, $out += $escape(touristGroupFlist.price * touristGroupFlist.count), 
                $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costPrice F-float F-money" /> </td> <td> <input value="', 
                $line = 207, $out += $escape(touristGroupFlist.remark), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costPrice" /> </td> </tr> ', 
                $line = 210;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </form>  ", $line = 219), 
            $out += ' <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="space-10"></div> <button class="btn btn-block btn-default btn-primary T-updateFee guideSubmit"> <i class="ace-icon fa fa-check"></i> 保存信息 </button> <div class="space-20"></div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 editFeeMain globalAdd" id= "T-outEditFeeMain">\r\n	<form class="form-horizontal editFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="middle title-size">填写费用</label>\r\n				</h5>\r\n			<div class="widget-body" >\r\n				<div class="form-group">\r\n					<input type="hidden" name="touristGroupId" value="{{touristGroup.id}}" />\r\n					<label class="col-sm-2 control-label no-padding-right">备注：</label>\r\n					<div class="col-sm-8">\r\n						<input name="remark" value="{{if touristGroup != null}}{{if touristGroup.transferFeeStatus==1}}{{touristGroup.transRemark}}{{/if}}{{/if}}" class="col-sm-12  no-padding-right" type="text" maxlength="500">  \r\n					</div>\r\n				</div>\r\n				<input type="hidden" name="transferFeeStatus" value="{{touristGroup.transferFeeStatus}}">\r\n				<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">应付:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup != null}}{{touristGroup.transNeedPayAllMoney}}{{/if}}" readonly="readonly" type="text" name="transNeedPayAllMoney" class="col-sm-12 F-float F-money" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">已付:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup.transferFeeStatus==1}}{{touristGroup.transPayedMoney}}{{/if}}" type="text" name="transPayedMoney" class="col-sm-12 price F-float F-money" readonly="readonly" />\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">计划现收:</label>\r\n						<div class="col-xs-1">\r\n						{{if cashFlag== 1}}\r\n							<span class="F-float F-money">{{touristGroup.currentNeedPayMoney}}</span>\r\n							{{else}}\r\n							<span class="F-float F-money">0</span>\r\n						{{/if}}\r\n						</div>\r\n						                        \r\n						<label style="margin: 2px 5px 0">\r\n								<input type="checkbox" disabled="disabled" {{if cashFlag==1}}checked="checked"{{/if}} class="ace send-check">\r\n								<span class="lbl">\r\n								</span>\r\n								<input type="hidden" name="isCurrent" value="{{cashFlag}}">\r\n						</label>\r\n                        <label class="col-sm-1 control-label no-padding-right" >对方现收</label>\r\n						\r\n\r\n				</div>\r\n\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<button class="btn btn-sm btn-success T-newEditFee" style="float:left;">\r\n							<i class="ace-icon fa fa-plus"></i>\r\n							新增费用项\r\n						</button>\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th class="th-border" width="20%">费用项</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n									<th class="th-border">金额</th>   \r\n									<th class="th-border">说明</th>\r\n									<th class="th-border" width="80px">操作</th>\r\n								</tr>\r\n							</thead>\r\n							<tbody class="T-innerOutEditFeeTbody">\r\n								<!--游客小组费用start-->\r\n								{{each touristGroup.touristGroupFeeList as transferList}}     \r\n									<tr  data-entity-id="{{transferList.id}}"> \r\n										<td>\r\n											<select name="type" class="col-sm-10 col-sm-offset-1">\r\n				                                {{#transferList.type | getFeeItemType: false}}\r\n				                            </select>\r\n										</td>   \r\n										\r\n										<td>\r\n											<input name="count" value="{{if subsection==0}}{{transferList.count}}{{/if}}" type="text" class="col-sm-12  no-padding-right count T-count T-calc F-float F-count" />\r\n										</td>\r\n										<td>\r\n											<input name="price" value="{{if subsection==0}}{{transferList.price}}{{/if}}" type="text" class="col-sm-12  no-padding-right price  T-price T-calc F-float F-money" />\r\n										</td>\r\n								\r\n\r\n										<td>\r\n										<input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12  no-padding-right T-payMoney F-float F-money" />\r\n										</td>\r\n										<td>\r\n											<input name="remark" value="{{transferList.remark}}" type="text" class="col-sm-12  no-padding-right" />\r\n										</td>\r\n\r\n										<td><a class="T-delete cursor">删除</a></td>\r\n									</tr>\r\n								{{/each}}\r\n								<!--游客小组费end-->\r\n							\r\n\r\n								<!--转客其他费用start-->\r\n								{{each touristGroup.touristGroupTransferFeeSet as transferOtherFee}}\r\n								<tr data-entity-id="{{transferOtherFee.id}}">\r\n									<td>\r\n										<select name="type" class="col-sm-10 col-sm-offset-1">\r\n				                            {{#transferOtherFee.type | getFeeItemType: false}}\r\n				                        </select>\r\n									</td>\r\n									\r\n									<td>\r\n										<input name="count" value="{{transferOtherFee.count}}" type="text" class="col-sm-12  no-padding-right count T-count T-calc F-float F-count" />\r\n									</td>\r\n									<td>\r\n										<input name="price" value="{{transferOtherFee.price}}" type="text" class="col-sm-12  no-padding-right price T-price T-calc F-float F-money" />\r\n									</td>\r\n\r\n									<td>\r\n										<input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12  no-padding-right T-payMoney F-float F-money" />\r\n									</td>\r\n									<td>\r\n										<input name="remark" value="{{transferOtherFee.remark}}" type="text" class="col-sm-12  no-padding-right" />\r\n									</td>\r\n									<td><a class="T-delete cursor">删除</a></td>\r\n								</tr>\r\n								{{/each}}\r\n\r\n								<!--转客其他费用end-->\r\n							</tbody>\r\n						</table>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>  \r\n\r\n	{{if subsection==0}}\r\n		<!--收客信息 start--> \r\n		<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n			<div class=" ui-sortable-handle">\r\n					<h5 class="title">\r\n						<span class="badge badge-primary">2</span>\r\n						<label class="middle title-size">收客信息</label>\r\n					</h5>\r\n				<div class="widget-body" >\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">收客备注：</label>\r\n						<div class="col-sm-8">\r\n							<input readonly="readonly" value="{{if touristGroup != null}}{{touristGroup.remark}}{{/if}}" class="col-sm-12  no-padding-right" type="text">  \r\n						</div>\r\n					</div> \r\n\r\n					<div class="form-group" style="margin-left:25%;">\r\n						    <label class="col-sm-1 control-label no-padding-right">应收：</label>\r\n							<div class="col-sm-2">\r\n								<span>{{touristGroup.needPayAllMoney}}</span>\r\n							</div>\r\n\r\n							\r\n							{{if subsection==0}}\r\n							<label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n							<div class="col-sm-2">\r\n								<span>{{touristGroup.payedMoney}}</span>\r\n							</div>\r\n							{{/if}}\r\n\r\n							<label class="col-sm-2 control-label no-padding-right">计划现收：</label>\r\n							<div class="col-sm-1">\r\n	                            {{if cashFlag== 1}}\r\n									<span>{{touristGroup.currentNeedPayMoney}}</span>\r\n								{{else}}\r\n								    <span>0</span>\r\n							{{/if}}				 \r\n	                        </div>\r\n					</div>\r\n\r\n\r\n					<div class="form-group">\r\n						<div class="col-sm-2"></div>\r\n						<div class="col-sm-8">\r\n							<table class="table table-striped table-bordered table-hover addCostList"> \r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">费用项</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">单价</th>\r\n										<th class="th-border">金额</th>\r\n										<th class="th-border">说明</th>\r\n									</tr>\r\n								</thead>   \r\n								<tbody>\r\n								   {{each touristGroupFeeList as touristGroupFlist}}   	                                           \r\n												 <tr>       \r\n													<td>    \r\n														<input readonly="readonly" value="{{touristGroupFlist.describeInfo}}" type="text" class="col-sm-12  no-padding-right" />        \r\n													</td>   \r\n									\r\n													<td>\r\n														<input  value="{{touristGroupFlist.count}}" readonly="readonly"  type="text" class="col-sm-12  no-padding-right costCount F-float F-count" />\r\n													</td>\r\n													<td>\r\n														<input  value="{{touristGroupFlist.price}}" readonly="readonly" type="text" class="col-sm-12  no-padding-right costPrice F-float F-money" />   \r\n													</td>\r\n													<td>\r\n														<input  value="{{touristGroupFlist.price*touristGroupFlist.count}}" readonly="readonly" type="text" class="col-sm-12  no-padding-right costPrice F-float F-money" />\r\n													</td>\r\n													<td>\r\n														<input  value="{{touristGroupFlist.remark}}" readonly="readonly" type="text" class="col-sm-12  no-padding-right costPrice" />   \r\n													</td>\r\n												</tr>\r\n										{{/each}}    \r\n								</tbody>\r\n							</table>\r\n					    </div>\r\n				    </div>\r\n				</div>   \r\n			</div>  \r\n		</form>     \r\n		<!--收客信息 end-->\r\n	{{/if}}\r\n\r\n\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-default btn-primary T-updateFee guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			保存信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});