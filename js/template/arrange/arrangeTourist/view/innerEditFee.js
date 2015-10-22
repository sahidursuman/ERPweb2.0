/*TMODJS:{"debug":true,"version":192,"md5":"7a2e9f6004e2e8547215e4906cf52161"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/innerEditFee", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, touristGroup = $data.touristGroup, $each = $utils.$each, touristGroupFeeList = $data.touristGroupFeeList, innerTransferFeeList = ($data.transferList, 
            $data.$index, $data.innerTransferFeeList), $out = ($data.innerFee, $data.touristGroupFlist, 
            "");
            return $out += '<div class="col-xs-12 innerEditFeeMain"> <form class="form-horizontal innerEditFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">填写内转费用</label> </h5> <div class="widget-body" > <div class="form-group"> <input type="hidden" name="touristGroupId" value="', 
            $line = 10, $out += $escape(touristGroup.id), $out += '" /> <label class="col-sm-2 control-label no-padding-right">备注：</label> <div class="col-sm-8"> <input name="transRemark" value="', 
            $line = 13, $out += $escape(touristGroup.transRemark), $out += '" class="col-sm-12 no-padding-right" type="text" maxlength="500" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">应付:</label> <div class="col-sm-2"> <input value="', 
            $line = 19, 0 == touristGroup.transferFeeStatus ? ($line = 19, $out += $escape(touristGroup.needPayAllMoney), 
            $line = 19) : ($line = 19, $out += $escape(touristGroup.transNeedPayAllMoney), $line = 19), 
            $out += '" readonly="readonly" type="text" name="transNeedPayAllMoney" class="col-sm-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已付:</label> <div class="col-sm-2"> <input value="', 
            $line = 23, 0 == touristGroup.transferFeeStatus ? ($line = 23, $out += $escape(touristGroup.payedMoney), 
            $line = 23) : ($line = 23, $out += $escape(touristGroup.transPayedMoney), $line = 23), 
            $out += '" type="text" name="transPayedMoney" class="col-sm-12" maxlength="10" /> </div> <label class="col-sm-1 control-label no-padding-right">对方现收:</label> <div class="clo-sm-2"> <label style="margin: 2px 0 0 12px"> <input type="checkbox" disabled="true" ', 
            $line = 28, 1 == touristGroup.operateCurrentNeedPayMoney && ($out += 'checked="checked"', 
            $line = 28), $out += ' class="ace send-check" value="" name="operateCurrentNeedPayMoney"> <span class="lbl"> </span> </label> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <button class="btn btn-sm btn-success newEditFee" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="innerEditFeeTbody"> <tr> <td>内转价</td> <td>大人</td> <td> <input name="adultCount" value="', 
            $line = 61, null != touristGroup && ($line = 61, $out += $escape(touristGroup.adultCount), 
            $line = 61), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costCount" /> </td> <td> <input name="transAdultPrice" value="', 
            $line = 64, 0 == touristGroup.transferFeeStatus ? ($line = 64, $out += $escape(touristGroup.adultPrice), 
            $line = 64) : ($line = 64, $out += $escape(touristGroup.transAdultPrice), $line = 64), 
            $out += '" type="text" class="col-sm-12 no-padding-right costPrice" maxlength="10" /> </td> <td></td> </tr> <tr> <td> 内转价 </td> <td> 小孩 </td> <td> <input name="childCount" value="', 
            $line = 76, null != touristGroup && ($line = 76, $out += $escape(touristGroup.childCount), 
            $line = 76), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costCount" /> </td> <td> <input name="transChildPrice" value="', 
            $line = 79, 0 == touristGroup.transferFeeStatus ? ($line = 79, $out += $escape(touristGroup.childPrice), 
            $line = 79) : ($line = 79, $out += $escape(touristGroup.transChildPrice), $line = 79), 
            $out += '" type="text" class="col-sm-12 no-padding-right costPrice" maxlength="10" /> </td> <td></td> </tr> ', 
            $line = 84, 0 == touristGroup.transferFeeStatus ? ($out += "  ", $line = 86, $each(touristGroupFeeList, function(transferList) {
                $out += ' <tr data-entity-id=""> <td> <span name="type" value="0">其他费用</span> </td> <td> <input name="discribe" value="', 
                $line = 92, $out += $escape(transferList.describeInfo), $out += '" type="text" class="col-sm-12 no-padding-right" maxlength="500" /> </td> <td> <input name="count" value="', 
                $line = 95, $out += $escape(transferList.count), $out += '" type="text" class="col-sm-12 no-padding-right costCount" maxlength="10" /> </td> <td> <input name="otherPrice" value="', 
                $line = 98, $out += $escape(transferList.price), $out += '" type="text" class="col-sm-12 no-padding-right costPrice" maxlength="10" /> </td> <td><a class=" addCost-delete cursor">删除</a></td> </tr> ', 
                $line = 102;
            }), $out += "  ", $line = 104) : ($out += "  ", $line = 106, $each(innerTransferFeeList, function(innerFee) {
                $out += ' <tr data-entity-id="', $line = 107, $out += $escape(innerFee.id), $out += '"> <td> <span name="type" value="0">其他费用</span> </td> <td> <input name="discribe" value="', 
                $line = 112, $out += $escape(innerFee.discribe), $out += '" type="text" class="col-sm-12 no-padding-right" maxlength="500" /> </td> <td> <input name="count" value="', 
                $line = 115, $out += $escape(innerFee.count), $out += '" type="text" class="col-sm-12 no-padding-right costCount" maxlength="10" /> </td> <td> <input name="otherPrice" value="', 
                $line = 118, $out += $escape(innerFee.price), $out += '" type="text" class="col-sm-12 no-padding-right costPrice" maxlength="10" /> </td> <td><a class="addCost-delete cursor">删除</a></td> </tr> ', 
                $line = 122;
            }), $out += "  ", $line = 125), $out += ' </tbody> </table> </div> </div> </div> </div> </form>  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="title"> <span class="badge badge-primary">2</span> <label class="middle title-size">收客信息</label> </h5> <div class="widget-body" > <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">收客备注:</label> <div class="col-sm-8"> ', 
            $line = 145, $out += $escape(touristGroup.remark), $out += ' </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">应收:</label> <div class="col-sm-2"> ', 
            $line = 151, $out += $escape(touristGroup.needPayAllMoney), $out += ' </div> <label class="col-sm-1 control-label no-padding-right">已收:</label> <div class="col-sm-2"> ', 
            $line = 155, $out += $escape(touristGroup.payedMoney), $out += ' </div> <label class="col-sm-1 control-label no-padding-right">现收:</label> <div class="col-sm-2"> ', 
            $line = 159, $out += $escape(touristGroup.payedMoney), $out += ' </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">单价</th> </tr> </thead> <tbody> <tr> <td>结算价</td> <td>大人</td> <td>', 
            $line = 178, $out += $escape(touristGroup.adultCount), $out += "</td> <td>", $line = 179, 
            $out += $escape(touristGroup.adultPrice), $out += "</td> </tr> <tr> <td>结算价</td> <td>小孩</td> <td>", 
            $line = 184, $out += $escape(touristGroup.childCount), $out += "</td> <td>", $line = 185, 
            $out += $escape(touristGroup.childPrice), $out += "</td> </tr> ", $line = 187, $each(touristGroupFeeList, function(touristGroupFlist) {
                $out += ' <tr> <td> <span name="type" value="0">其他费用</span> </td> <td> ', $line = 193, 
                $out += $escape(touristGroupFlist.describeInfo), $out += " </td> <td> ", $line = 196, 
                $out += $escape(touristGroupFlist.count), $out += " </td> <td> ", $line = 199, $out += $escape(touristGroupFlist.price), 
                $out += " </td> </tr> ", $line = 202;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </form>  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="space-10"></div> <button class="btn btn-block btn-default btn-primary btn-updateFee"> <i class="ace-icon fa fa-check"></i> 保存信息 </button> <div class="space-20"></div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 innerEditFeeMain">\r\n	<form class="form-horizontal innerEditFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="middle title-size">填写内转费用</label>\r\n				</h5>\r\n			<div class="widget-body" >\r\n				<div class="form-group">\r\n					<input type="hidden" name="touristGroupId" value="{{touristGroup.id}}" />\r\n					<label class="col-sm-2 control-label no-padding-right">备注：</label>\r\n					<div class="col-sm-8">    \r\n						<input name="transRemark" value="{{touristGroup.transRemark}}" class="col-sm-12  no-padding-right" type="text" maxlength="500" />  \r\n					</div>\r\n				</div>   \r\n				<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">应付:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup.transferFeeStatus == 0}}{{touristGroup.needPayAllMoney}}{{else}}{{touristGroup.transNeedPayAllMoney}}{{/if}}" readonly="readonly" type="text" name="transNeedPayAllMoney" class="col-sm-12" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">已付:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup.transferFeeStatus == 0}}{{touristGroup.payedMoney}}{{else}}{{touristGroup.transPayedMoney}}{{/if}}" type="text" name="transPayedMoney" class="col-sm-12"  maxlength="10" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">对方现收:</label>\r\n						<div class="clo-sm-2">\r\n							<label style="margin: 2px 0 0 12px">\r\n								<input type="checkbox" disabled="true" {{if touristGroup.operateCurrentNeedPayMoney == 1}}checked="checked"{{/if}} class="ace send-check" value="" name="operateCurrentNeedPayMoney">\r\n								<span class="lbl">\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<button class="btn btn-sm btn-success newEditFee" style="float:left;">\r\n							<i class="ace-icon fa fa-plus"></i>\r\n							新增费用项\r\n						</button>\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th class="th-border">类型</th>\r\n									<th class="th-border">说明</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n									<th class="th-border">操作</th>\r\n								</tr>\r\n							</thead>\r\n							<tbody class="innerEditFeeTbody">\r\n								<tr>\r\n									<td>内转价</td>\r\n									<td>大人</td>\r\n									<td>\r\n										<input name="adultCount" value="{{if touristGroup != null}}{{touristGroup.adultCount}}{{/if}}" readonly="readonly" type="text" class="col-sm-12  no-padding-right costCount" />\r\n									</td>\r\n									<td>\r\n										<input name="transAdultPrice" value="{{if touristGroup.transferFeeStatus == 0}}{{touristGroup.adultPrice}}{{else}}{{touristGroup.transAdultPrice}}{{/if}}" type="text" class="col-sm-12  no-padding-right  costPrice"  maxlength="10" />\r\n									</td>\r\n									<td></td>\r\n								</tr>\r\n								<tr>\r\n									<td>\r\n										内转价\r\n									</td>\r\n									<td>\r\n										小孩\r\n									</td>\r\n									<td>\r\n										<input name="childCount" value="{{if touristGroup != null}}{{touristGroup.childCount}}{{/if}}" readonly="readonly" type="text" class="col-sm-12  no-padding-right costCount" />\r\n									</td>\r\n									<td>\r\n										<input name="transChildPrice" value="{{if touristGroup.transferFeeStatus == 0}}{{touristGroup.childPrice}}{{else}}{{touristGroup.transChildPrice}}{{/if}}" type="text" class="col-sm-12  no-padding-right costPrice"  maxlength="10" />\r\n									</td>\r\n									<td></td>\r\n								</tr>  \r\n\r\n								{{if touristGroup.transferFeeStatus == 0}}\r\n								<!--初始化游客小组费用start--> \r\n								{{each touristGroupFeeList as transferList}}         \r\n									<tr  data-entity-id="">    \r\n										<td>\r\n											<span name="type" value="0">其他费用</span>   \r\n										</td>   \r\n										<td>\r\n											<input name="discribe" value="{{transferList.describeInfo}}" type="text" class="col-sm-12  no-padding-right"  maxlength="500" />\r\n										</td>\r\n										<td>\r\n											<input name="count" value="{{transferList.count}}" type="text" class="col-sm-12  no-padding-right costCount"  maxlength="10" />\r\n										</td>\r\n										<td>\r\n											<input name="otherPrice" value="{{transferList.price}}" type="text" class="col-sm-12  no-padding-right costPrice"  maxlength="10" />\r\n										</td>\r\n										<td><a class="  addCost-delete cursor">删除</a></td>\r\n									</tr>\r\n								{{/each}} \r\n								<!--游客小组费end-->\r\n								{{else}}\r\n								<!--转客其他费用start-->\r\n								{{each innerTransferFeeList as innerFee}}\r\n								<tr data-entity-id="{{innerFee.id}}">\r\n									<td>\r\n										<span name="type" value="0">其他费用</span>\r\n									</td>\r\n									<td>\r\n										<input name="discribe" value="{{innerFee.discribe}}" type="text" class="col-sm-12  no-padding-right"  maxlength="500" />\r\n									</td>\r\n									<td>\r\n										<input name="count" value="{{innerFee.count}}" type="text" class="col-sm-12  no-padding-right costCount"  maxlength="10" />\r\n									</td>\r\n									<td>\r\n										<input name="otherPrice" value="{{innerFee.price}}" type="text" class="col-sm-12  no-padding-right costPrice"  maxlength="10" />\r\n									</td>\r\n									<td><a class="addCost-delete cursor">删除</a></td>\r\n								</tr>\r\n								{{/each}}\r\n								<!--转客其他费用end-->\r\n\r\n								{{/if}}\r\n							</tbody>\r\n						</table>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>   \r\n\r\n	<!--收客信息 start-->\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="title">\r\n					<span class="badge badge-primary">2</span>\r\n					<label class="middle title-size">收客信息</label>\r\n				</h5>\r\n			<div class="widget-body" >\r\n				<div class="form-group">\r\n					<label class="col-sm-2 control-label no-padding-right">收客备注:</label>  \r\n					<div class="col-sm-8">\r\n						{{touristGroup.remark}}\r\n					</div>\r\n				</div> \r\n				<div class="form-group">\r\n					<label class="col-sm-2 control-label no-padding-right">应收:</label>\r\n					<div class="col-sm-2">\r\n						{{touristGroup.needPayAllMoney}}\r\n					</div>\r\n					<label class="col-sm-1 control-label no-padding-right">已收:</label>\r\n					<div class="col-sm-2">\r\n						{{touristGroup.payedMoney}}\r\n					</div>\r\n					<label class="col-sm-1 control-label no-padding-right">现收:</label>\r\n					<div class="col-sm-2">\r\n						{{touristGroup.payedMoney}}\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">  \r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th class="th-border">类型</th>\r\n									<th class="th-border">说明</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n								</tr>\r\n							</thead>   \r\n							<tbody>\r\n								<tr>\r\n									<td>结算价</td>\r\n									<td>大人</td>\r\n									<td>{{touristGroup.adultCount}}</td>\r\n									<td>{{touristGroup.adultPrice}}</td>\r\n								</tr> \r\n								<tr>\r\n									<td>结算价</td>\r\n									<td>小孩</td>\r\n									<td>{{touristGroup.childCount}}</td>\r\n									<td>{{touristGroup.childPrice}}</td>   \r\n								</tr>\r\n								{{each touristGroupFeeList as touristGroupFlist}}\r\n										<tr>       \r\n											<td>    \r\n												<span name="type" value="0">其他费用</span>          \r\n											</td>   \r\n											<td>\r\n												{{touristGroupFlist.describeInfo}}\r\n											</td>\r\n											<td>\r\n												{{touristGroupFlist.count}}\r\n											</td>\r\n											<td>\r\n												{{touristGroupFlist.price}}  \r\n											</td>\r\n										</tr> \r\n								{{/each}}\r\n							</tbody>\r\n						</table>\r\n				    </div>\r\n			    </div>\r\n			</div>   \r\n		</div>  \r\n	</form>     \r\n	<!--收客信息 end-->  \r\n\r\n\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-default btn-primary btn-updateFee">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			保存信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});