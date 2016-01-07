/*TMODJS:{"debug":true,"version":481,"md5":"02608f20cf1f82834908c37e414a2157"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/innerEditFee", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, touristGroup = $data.touristGroup, cashFlag = $data.cashFlag, $each = $utils.$each, touristGroupFeeList = $data.touristGroupFeeList, subsection = ($data.transferList, 
            $data.$index, $data.subsection), innerTransferFeeList = $data.innerTransferFeeList, $out = ($data.innerFee, 
            $data.touristGroupFlist, "");
            return $out += '<div class="col-xs-12 globalAdd" id="T-innerEditFeeMain"> <form class="form-horizontal innerEditFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">填写费用</label> </h5> <div class="widget-body" > <div class="form-group"> <input type="hidden" name="touristGroupId" value="', 
            $line = 10, $out += $escape(touristGroup.id), $out += '" /> <label class="col-sm-2 control-label no-padding-right">备注：</label> <div class="col-sm-8"> <input name="transRemark" value="', 
            $line = 13, $out += $escape(touristGroup.transRemark), $out += '" class="col-sm-12 no-padding-right" type="text" maxlength="500" /> </div> </div> <input type="hidden" name="transferFeeStatus" value="', 
            $line = 16, $out += $escape(touristGroup.transferFeeStatus), $out += '"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">应付:</label> <div class="col-sm-2"> <input value="', 
            $line = 20, 0 == touristGroup.transferFeeStatus ? ($line = 20, $out += $escape(touristGroup.needPayAllMoney), 
            $line = 20) : ($line = 20, $out += $escape(touristGroup.transNeedPayAllMoney), $line = 20), 
            $out += '" readonly="readonly" type="text" name="transNeedPayAllMoney" class="col-sm-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已付:</label> <div class="col-sm-2"> <input value="', 
            $line = 24, 1 == touristGroup.transferFeeStatus && ($line = 24, $out += $escape(touristGroup.transPayedMoney), 
            $line = 24), $out += '" type="text" name="transPayedMoney" class="col-sm-12 price" maxlength="10" readonly="readonly" /> </div> <label class="col-sm-1 control-label no-padding-right">计划现收:</label> <div class="col-xs-1"> ', 
            $line = 29, 1 == cashFlag ? ($out += " <span>", $line = 30, $out += $escape(touristGroup.currentNeedPayMoney), 
            $out += "</span> ", $line = 31) : ($out += " <span>0</span> ", $line = 33), $out += ' </div> <label class="control-label no-padding-right">对方现收</label> <label style="margin: 2px 5px 0"> <input type="checkbox" disabled="disabled" ', 
            $line = 39, 1 == cashFlag && ($out += 'checked="checked"', $line = 39), $out += ' class="ace send-check"> <span class="lbl"> </span> <input type="hidden" name="cashFlag" value="', 
            $line = 42, $out += $escape(cashFlag), $out += '"> </label> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <button class="btn btn-sm btn-success T-newEditFee" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> <th class="th-border" width="80px">操作</th> </tr> </thead> <tbody class="T-innerOutEditFeeTbody"> ', 
            $line = 69, 0 == touristGroup.transferFeeStatus ? ($out += "  ", $line = 71, $each(touristGroupFeeList, function(transferList) {
                $out += ' <tr data-entity-id="', $line = 72, $out += $escape(transferList.id), $out += '"> <td> <input name="describeInfo" value="', 
                $line = 74, $out += $escape(transferList.describeInfo), $out += '" type="text" class="col-sm-10 no-padding-right" /> </td> <td> <input name="count" value="', 
                $line = 78, 0 == subsection && ($line = 78, $out += $escape(transferList.count), 
                $line = 78), $out += '" type="text" class="col-sm-10 no-padding-right count T-count T-calc" maxlength="10" /> </td> <td> <input name="price" value="', 
                $line = 81, 0 == subsection && ($line = 81, $out += $escape(transferList.price), 
                $line = 81), $out += '" type="text" class="col-sm-10 no-padding-right price T-price T-calc" maxlength="10" /> </td> <td> <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-10 no-padding-right ', 
                $line = 85, 0 == subsection && ($out += "T-payMoney", $line = 85), $out += '"/> </td> <td> <input name="remark" value="', 
                $line = 88, $out += $escape(transferList.remark), $out += '" type="text" class="col-sm-10 no-padding-right" maxlength="500" /> </td> <td><a class="T-delete cursor">删除</a></td> </tr> ', 
                $line = 92;
            }), $out += "  ", $line = 94) : ($out += "  ", $line = 96, $each(innerTransferFeeList, function(innerFee) {
                $out += ' <tr data-entity-id="', $line = 97, $out += $escape(innerFee.id), $out += '"> <td> <input name="describeInfo" value="其他费用项" value="', 
                $line = 99, $out += $escape(innerFee.discribe), $out += '" type="text" class="col-sm-12 no-padding-right" /> </td> <td> <input name="count" value="', 
                $line = 103, $out += $escape(innerFee.count), $out += '" type="text" class="col-sm-12 no-padding-right count T-count T-calc" maxlength="10" /> </td> <td> <input name="price" value="', 
                $line = 106, $out += $escape(innerFee.price), $out += '" type="text" class="col-sm-12 no-padding-right price T-price T-calc" maxlength="10" /> </td> <td> <input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12 no-padding-right T-payMoney"/> </td> <td> <input name="remark" value="', 
                $line = 112, $out += $escape(innerFee.remark), $out += '" type="text" class="col-sm-12 no-padding-right" maxlength="500" /> </td> <td><a class="T-delete cursor">删除</a></td> </tr> ', 
                $line = 117;
            }), $out += "  ", $line = 120), $out += " </tbody> </table> </div> </div> </div> </div> </form> ", 
            $line = 129, 0 == subsection && ($out += '  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="title"> <span class="badge badge-primary">2</span> <label class="middle title-size">收客信息</label> </h5> <div class="widget-body" > <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">收客备注:</label> <div class="col-sm-8"> ', 
            $line = 141, $out += $escape(touristGroup.remark), $out += ' </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">应收:</label> <div class="col-sm-2"> ', 
            $line = 147, null == touristGroup.parentTouristGroup ? ($out += " ", $line = 148, 
            $out += $escape(touristGroup.needPayAllMoney), $out += " ", $line = 149) : ($out += " ", 
            $line = 150, $out += $escape(touristGroup.parentTouristGroup.needPayAllMoney), $out += " ", 
            $line = 151), $out += " </div> ", $line = 154, 0 == subsection && ($out += ' <label class="col-sm-1 control-label no-padding-right">已收:</label> <div class="col-sm-2"> ', 
            $line = 157, null == touristGroup.parentTouristGroup ? ($out += " ", $line = 158, 
            $out += $escape(touristGroup.payedMoney), $out += " ", $line = 159) : ($out += " ", 
            $line = 160, $out += $escape(touristGroup.parentTouristGroup.payedMoney), $out += " ", 
            $line = 161), $out += " </div> ", $line = 163), $out += ' <label class="col-sm-2 control-label no-padding-right">计划现收:</label> <div class="col-sm-1"> ', 
            $line = 168, 1 == cashFlag ? ($out += " <span>", $line = 169, $out += $escape(touristGroup.currentNeedPayMoney), 
            $out += "</span> ", $line = 170) : ($out += " <span>0</span> ", $line = 172), $out += ' </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border">费用项</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">金额</th> <th class="th-border">说明</th> </tr> </thead> <tbody> ', 
            $line = 190, $each(touristGroupFeeList, function(touristGroupFlist) {
                $out += " <tr> <td> ", $line = 193, $out += $escape(touristGroupFlist.describeInfo), 
                $out += " </td> <td> ", $line = 196, $out += $escape(touristGroupFlist.count), $out += " </td> <td> ", 
                $line = 199, $out += $escape(touristGroupFlist.price), $out += " </td> <td> ", $line = 202, 
                $out += $escape(touristGroupFlist.count * touristGroupFlist.price), $out += " </td> <td> ", 
                $line = 205, $out += $escape(touristGroupFlist.remark), $out += " </td> </tr> ", 
                $line = 208;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </form>  ", $line = 217), 
            $out += ' <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="space-10"></div> <button class="btn btn-block btn-default btn-primary T-updateFee guideSubmit"> <i class="ace-icon fa fa-check"></i> 保存信息 </button> <div class="space-20"></div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 globalAdd" id="T-innerEditFeeMain">\r\n	<form class="form-horizontal innerEditFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="middle title-size">填写费用</label>\r\n				</h5>\r\n			<div class="widget-body" >\r\n				<div class="form-group">\r\n					<input type="hidden" name="touristGroupId" value="{{touristGroup.id}}" />\r\n					<label class="col-sm-2 control-label no-padding-right">备注：</label>\r\n					<div class="col-sm-8">    \r\n						<input name="transRemark" value="{{touristGroup.transRemark}}" class="col-sm-12  no-padding-right" type="text" maxlength="500" />  \r\n					</div>\r\n				</div> \r\n				<input type="hidden" name="transferFeeStatus" value="{{touristGroup.transferFeeStatus}}">  \r\n				<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">应付:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup.transferFeeStatus == 0}}{{touristGroup.needPayAllMoney}}{{else}}{{touristGroup.transNeedPayAllMoney}}{{/if}}" readonly="readonly" type="text" name="transNeedPayAllMoney" class="col-sm-12" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">已付:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup.transferFeeStatus == 1}}{{touristGroup.transPayedMoney}}{{/if}}" type="text" name="transPayedMoney" class="col-sm-12 price"  maxlength="10" readonly="readonly" />\r\n						</div>\r\n\r\n					 	<label class="col-sm-1 control-label no-padding-right">计划现收:</label>\r\n						<div class="col-xs-1">\r\n						{{if cashFlag== 1}}\r\n							<span>{{touristGroup.currentNeedPayMoney}}</span>\r\n							{{else}}\r\n							<span>0</span>\r\n						{{/if}}\r\n						</div>\r\n\r\n\r\n                        <label class="control-label no-padding-right">对方现收</label>\r\n						<label style="margin: 2px 5px 0">\r\n							<input type="checkbox" disabled="disabled" {{if cashFlag== 1}}checked="checked"{{/if}} class="ace send-check">\r\n							<span class="lbl">\r\n							</span>\r\n							<input type="hidden" name="cashFlag" value="{{cashFlag}}">\r\n						</label>\r\n					</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<button class="btn btn-sm btn-success T-newEditFee" style="float:left;">\r\n							<i class="ace-icon fa fa-plus"></i>\r\n							新增费用项\r\n						</button>\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th class="th-border">费用项</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n									<th class="th-border">金额</th>   \r\n									<th class="th-border">说明</th>\r\n									<th class="th-border" width="80px">操作</th>\r\n								</tr>\r\n							</thead>\r\n							<tbody class="T-innerOutEditFeeTbody"> \r\n								{{if touristGroup.transferFeeStatus == 0}}\r\n									<!--初始化游客小组费用start--> \r\n									{{each touristGroupFeeList as transferList}}         \r\n										<tr  data-entity-id="{{transferList.id}}">\r\n											<td>\r\n												<input name="describeInfo" value="{{transferList.describeInfo}}" type="text" class="col-sm-10  no-padding-right" />\r\n											</td>  \r\n											\r\n											<td>\r\n												<input name="count" value="{{if subsection==0}}{{transferList.count}}{{/if}}" type="text" class="col-sm-10  no-padding-right count T-count T-calc"  maxlength="10" />\r\n											</td>\r\n											<td>\r\n												<input name="price" value="{{if subsection==0}}{{transferList.price}}{{/if}}" type="text" class="col-sm-10  no-padding-right price T-price T-calc"  maxlength="10" />\r\n											</td>\r\n\r\n											<td>\r\n												<input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-10  no-padding-right {{if subsection==0}}T-payMoney{{/if}}"/>\r\n											</td>\r\n											<td>\r\n												<input name="remark" value="{{transferList.remark}}" type="text" class="col-sm-10  no-padding-right"  maxlength="500" />\r\n											</td>\r\n											<td><a class="T-delete cursor">删除</a></td>\r\n										</tr>\r\n									{{/each}}\r\n									<!--游客小组费end-->\r\n									{{else}}\r\n									<!--转客其他费用start-->\r\n									{{each innerTransferFeeList as innerFee}}\r\n									<tr data-entity-id="{{innerFee.id}}">\r\n										<td>\r\n											<input name="describeInfo" value="其他费用项" value="{{innerFee.discribe}}"  type="text" class="col-sm-12  no-padding-right" />\r\n										</td>\r\n										\r\n										<td>\r\n											<input name="count" value="{{innerFee.count}}" type="text" class="col-sm-12  no-padding-right count T-count T-calc"  maxlength="10" />\r\n										</td>\r\n										<td>\r\n											<input name="price" value="{{innerFee.price}}" type="text" class="col-sm-12  no-padding-right price T-price T-calc"  maxlength="10" />\r\n										</td>\r\n										<td>\r\n											<input name="payMoney" value="" readonly="readonly" type="text" class="col-sm-12  no-padding-right T-payMoney"/>\r\n										</td>\r\n										<td>\r\n											<input name="remark" value="{{innerFee.remark}}" type="text" class="col-sm-12  no-padding-right"  maxlength="500" />\r\n										</td>\r\n\r\n										<td><a class="T-delete cursor">删除</a></td>\r\n									</tr>\r\n									{{/each}}\r\n									<!--转客其他费用end-->\r\n\r\n								{{/if}}\r\n							</tbody>\r\n						</table>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form> \r\n\r\n  {{if subsection==0}}\r\n	<!--收客信息 start-->\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="title">\r\n					<span class="badge badge-primary">2</span>\r\n					<label class="middle title-size">收客信息</label>\r\n				</h5>\r\n			<div class="widget-body" >\r\n				<div class="form-group">\r\n					<label class="col-sm-2 control-label no-padding-right">收客备注:</label>  \r\n					<div class="col-sm-8">\r\n						{{touristGroup.remark}}\r\n					</div>\r\n				</div> \r\n				<div class="form-group">\r\n					<label class="col-sm-2 control-label no-padding-right">应收:</label>\r\n					<div class="col-sm-2">\r\n						{{ if touristGroup.parentTouristGroup == null}}\r\n							{{touristGroup.needPayAllMoney}}\r\n						{{else}}\r\n							{{touristGroup.parentTouristGroup.needPayAllMoney}}\r\n						{{/if}}\r\n					</div>\r\n\r\n					{{if subsection==0}}\r\n					<label class="col-sm-1 control-label no-padding-right">已收:</label>\r\n					<div class="col-sm-2">\r\n						{{ if touristGroup.parentTouristGroup == null}}\r\n							{{touristGroup.payedMoney}}\r\n						{{else}}\r\n							{{touristGroup.parentTouristGroup.payedMoney}}\r\n						{{/if}}\r\n					</div>\r\n					{{/if}}\r\n\r\n\r\n					<label class="col-sm-2 control-label no-padding-right">计划现收:</label>\r\n					<div class="col-sm-1">\r\n						{{if cashFlag== 1}}\r\n							<span>{{touristGroup.currentNeedPayMoney}}</span>\r\n							{{else}}\r\n							<span>0</span>\r\n						{{/if}}\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">  \r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th class="th-border">费用项</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n									<th class="th-border">金额</th>\r\n									<th class="th-border">说明</th>\r\n								\r\n								</tr>\r\n							</thead>   \r\n							<tbody>\r\n								{{each touristGroupFeeList as touristGroupFlist}}\r\n										<tr>         \r\n											<td>\r\n												{{touristGroupFlist.describeInfo}}\r\n											</td>\r\n											<td>\r\n												{{touristGroupFlist.count}}\r\n											</td>\r\n											<td>\r\n												{{touristGroupFlist.price}}  \r\n											</td>\r\n											<td>\r\n												{{touristGroupFlist.count*touristGroupFlist.price}}\r\n											</td>\r\n											<td>\r\n												{{touristGroupFlist.remark}}  \r\n											</td>\r\n										</tr> \r\n								{{/each}}\r\n							</tbody>\r\n						</table>\r\n				    </div>\r\n			    </div>\r\n			</div>   \r\n		</div>  \r\n	</form>     \r\n	<!--收客信息 end--> \r\n	{{/if}}\r\n\r\n\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-default btn-primary T-updateFee guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			保存信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});