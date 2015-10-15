/*TMODJS:{"debug":true,"version":81,"md5":"075921f56424ccdc2581391efb412232"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/editFee", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), touristGroup = $data.touristGroup, $escape = $utils.$escape, $each = $utils.$each, touristGroupFeeList = ($data.transferList, 
            $data.$index, $data.transferOtherFee, $data.touristGroupFeeList), $out = ($data.touristGroupFlist, 
            "");
            return $out += '<div class="col-xs-12 editFeeMain"> <form class="form-horizontal editFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">填写转客费用</label> </h5> <div class="widget-body" > <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">备注：</label> <div class="col-sm-8"> <input name="remark" value="', 
            $line = 12, null != touristGroup && ($line = 12, $out += $escape(touristGroup.remark), 
            $line = 12), $out += '" class="col-sm-12 no-padding-right" type="text" maxlength="500"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">应付:</label> <div class="col-sm-2"> <input value="', 
            $line = 19, null != touristGroup && ($line = 19, $out += $escape(touristGroup.transNeedPayAllMoney), 
            $line = 19), $out += '" readonly="readonly" type="text" name="needPayMoney" class="col-sm-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已付:</label> <div class="col-sm-2"> <input value="', 
            $line = 23, null != touristGroup && ($line = 23, $out += $escape(touristGroup.transPayedMoney), 
            $line = 23), $out += '" type="text" name="payedMoney" class="col-sm-12" /> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <button class="btn btn-sm btn-success newEditFee" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="editFeeTbody"> <tr> <td>转客价</td> <td>大人</td> <td> <input name="adultCount" value="', 
            $line = 54, null != touristGroup && ($line = 54, $out += $escape(touristGroup.adultCount), 
            $line = 54), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costCount" /> </td> <td> <input name="adultTransferMoney" value="', 
            $line = 57, null != touristGroup && ($line = 57, $out += $escape(touristGroup.transAdultPrice), 
            $line = 57), $out += '" type="text" class="col-sm-12 no-padding-right costPrice" /> </td> <td></td> </tr> <tr> <td> 转客价 </td> <td> 小孩 </td> <td> <input name="childCount" value="', 
            $line = 69, null != touristGroup && ($line = 69, $out += $escape(touristGroup.childCount), 
            $line = 69), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costCount" /> </td> <td> <input name="childTransferMoney" value="', 
            $line = 72, null != touristGroup && ($line = 72, $out += $escape(touristGroup.transChildPrice), 
            $line = 72), $out += '" type="text" class="col-sm-12 no-padding-right costPrice" /> </td> <td></td> </tr>  ', 
            $line = 79, $each(touristGroup.touristGroupFeeList, function(transferList) {
                $out += ' <tr data-entity-id="', $line = 80, $out += $escape(transferList.id), $out += '"> <td> <span name="type" value="0">其他费用</span> </td> <td> <input name="describe" value="', 
                $line = 85, $out += $escape(transferList.describeInfo), $out += '" type="text" class="col-sm-12 no-padding-right" /> </td> <td> <input name="count" value="', 
                $line = 88, $out += $escape(transferList.count), $out += '" type="text" class="col-sm-12 no-padding-right costCount" /> </td> <td> <input name="otherPrice" value="', 
                $line = 91, $out += $escape(transferList.price), $out += '" type="text" class="col-sm-12 no-padding-right costPrice" /> </td> <td><a class=" addCost-delete cursor">删除</a></td> </tr> ', 
                $line = 95;
            }), $out += "   ", $line = 100, $each(touristGroup.touristGroupTransferFeeSet, function(transferOtherFee) {
                $out += ' <tr data-entity-id="', $line = 101, $out += $escape(transferOtherFee.id), 
                $out += '"> <td> <span name="type" value="0">其他费用</span> </td> <td> <input name="describe" value="', 
                $line = 106, $out += $escape(transferOtherFee.discribe), $out += '" type="text" class="col-sm-12 no-padding-right" /> </td> <td> <input name="count" value="', 
                $line = 109, $out += $escape(transferOtherFee.count), $out += '" type="text" class="col-sm-12 no-padding-right costCount" /> </td> <td> <input name="otherPrice" value="', 
                $line = 112, $out += $escape(transferOtherFee.otherPrice), $out += '" type="text" class="col-sm-12 no-padding-right costPrice" /> </td> <td><a class="addCost-delete cursor">删除</a></td> </tr> ', 
                $line = 116;
            }), $out += '  </tbody> </table> </div> </div> </div> </div> </form>  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="title"> <span class="badge badge-primary">2</span> <label class="middle title-size">收客信息</label> </h5> <div class="widget-body" > <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">转客备注：</label> <div class="col-sm-8"> <input readonly="readonly" value="', 
            $line = 137, null != touristGroup && ($line = 137, $out += $escape(touristGroup.transRemark), 
            $line = 137), $out += '" class="col-sm-12 no-padding-right" type="text"> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">单价</th> </tr> </thead> <tbody> <tr> <td>结算价</td> <td>小孩</td> <td>', 
            $line = 158, $out += $escape(touristGroup.childCount), $out += "</td> <td>", $line = 159, 
            $out += $escape(touristGroup.childPrice), $out += "</td> </tr> <tr> <td>结算价</td> <td>大人</td> <td>", 
            $line = 166, $out += $escape(touristGroup.adultCount), $out += "</td> <td>", $line = 167, 
            $out += $escape(touristGroup.adultPrice), $out += "</td> </tr> ", $line = 169, $each(touristGroupFeeList, function(touristGroupFlist) {
                $out += ' <tr> <td> <span name="type" value="0">其他费用</span> </td> <td> <input readonly="readonly" value="', 
                $line = 175, $out += $escape(touristGroupFlist.describeInfo), $out += '" type="text" class="col-sm-12 no-padding-right" /> </td> <td> <input value="', 
                $line = 178, $out += $escape(touristGroupFlist.count), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costCount" /> </td> <td> <input value="', 
                $line = 181, $out += $escape(touristGroupFlist.price), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costPrice" /> </td> </tr> ', 
                $line = 184;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </form>  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="space-10"></div> <button class="btn btn-block btn-default btn-primary btn-updateFee"> <i class="ace-icon fa fa-check"></i> 保存信息 </button> <div class="space-20"></div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 editFeeMain">\r\n	<form class="form-horizontal editFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="middle title-size">填写转客费用</label>\r\n				</h5>\r\n			<div class="widget-body" >\r\n				<div class="form-group">\r\n					<label class="col-sm-2 control-label no-padding-right">备注：</label>\r\n					<div class="col-sm-8">    \r\n						<input name="remark" value="{{if touristGroup != null}}{{touristGroup.remark}}{{/if}}" class="col-sm-12  no-padding-right" type="text" maxlength="500">  \r\n					</div>\r\n				</div>   \r\n\r\n				<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">应付:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup != null}}{{touristGroup.transNeedPayAllMoney}}{{/if}}" readonly="readonly" type="text" name="needPayMoney" class="col-sm-12" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">已付:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup != null}}{{touristGroup.transPayedMoney}}{{/if}}" type="text" name="payedMoney" class="col-sm-12" />\r\n						</div>\r\n						\r\n					</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<button class="btn btn-sm btn-success newEditFee" style="float:left;">\r\n							<i class="ace-icon fa fa-plus"></i>\r\n							新增费用项\r\n						</button>\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th class="th-border">类型</th>\r\n									<th class="th-border">说明</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n									<th class="th-border">操作</th>\r\n								</tr>\r\n							</thead>\r\n							<tbody class="editFeeTbody">\r\n								<tr>\r\n									<td>转客价</td>\r\n									<td>大人</td>\r\n									<td>\r\n										<input name="adultCount" value="{{if touristGroup != null}}{{touristGroup.adultCount}}{{/if}}" readonly="readonly" type="text" class="col-sm-12  no-padding-right costCount" />\r\n									</td>\r\n									<td>\r\n										<input name="adultTransferMoney" value="{{if touristGroup != null}}{{touristGroup.transAdultPrice}}{{/if}}" type="text" class="col-sm-12  no-padding-right  costPrice" />\r\n									</td>\r\n									<td></td>\r\n								</tr>\r\n								<tr>\r\n									<td>\r\n										转客价\r\n									</td>\r\n									<td>\r\n										小孩\r\n									</td>\r\n									<td>\r\n										<input name="childCount" value="{{if touristGroup != null}}{{touristGroup.childCount}}{{/if}}" readonly="readonly" type="text" class="col-sm-12  no-padding-right costCount" />\r\n									</td>\r\n									<td>\r\n										<input name="childTransferMoney" value="{{if touristGroup != null}}{{touristGroup.transChildPrice}}{{/if}}" type="text" class="col-sm-12  no-padding-right costPrice" />\r\n									</td>\r\n									<td></td>\r\n								</tr>  \r\n\r\n\r\n								<!--游客小组费用start--> \r\n								{{each touristGroup.touristGroupFeeList as transferList}}         \r\n									<tr  data-entity-id="{{transferList.id}}">    \r\n										<td>\r\n											<span name="type" value="0">其他费用</span>   \r\n										</td>   \r\n										<td>\r\n											<input name="describe" value="{{transferList.describeInfo}}" type="text" class="col-sm-12  no-padding-right" />\r\n										</td>\r\n										<td>\r\n											<input name="count" value="{{transferList.count}}" type="text" class="col-sm-12  no-padding-right costCount" />\r\n										</td>\r\n										<td>\r\n											<input name="otherPrice" value="{{transferList.price}}" type="text" class="col-sm-12  no-padding-right costPrice" />\r\n										</td>\r\n										<td><a class="  addCost-delete cursor">删除</a></td>\r\n									</tr>\r\n								{{/each}} \r\n								<!--游客小组费end-->    \r\n\r\n\r\n								<!--转客其他费用start-->\r\n								{{each touristGroup.touristGroupTransferFeeSet as transferOtherFee}}\r\n								<tr data-entity-id="{{transferOtherFee.id}}">\r\n									<td>\r\n										<span name="type" value="0">其他费用</span>\r\n									</td>\r\n									<td>\r\n										<input name="describe" value="{{transferOtherFee.discribe}}" type="text" class="col-sm-12  no-padding-right" />\r\n									</td>\r\n									<td>\r\n										<input name="count" value="{{transferOtherFee.count}}" type="text" class="col-sm-12  no-padding-right costCount" />\r\n									</td>\r\n									<td>\r\n										<input name="otherPrice" value="{{transferOtherFee.otherPrice}}" type="text" class="col-sm-12  no-padding-right costPrice" />\r\n									</td>\r\n									<td><a class="addCost-delete cursor">删除</a></td>\r\n								</tr>\r\n								{{/each}}\r\n								<!--转客其他费用end-->\r\n							</tbody>\r\n						</table>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>   \r\n\r\n	<!--收客信息 start-->\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="title">\r\n					<span class="badge badge-primary">2</span>\r\n					<label class="middle title-size">收客信息</label>\r\n				</h5>\r\n			<div class="widget-body" >\r\n				<div class="form-group">\r\n					<label class="col-sm-2 control-label no-padding-right">转客备注：</label>  \r\n					<div class="col-sm-8">\r\n						<input readonly="readonly" value="{{if touristGroup != null}}{{touristGroup.transRemark}}{{/if}}" class="col-sm-12  no-padding-right" type="text">  \r\n					</div>\r\n				</div> \r\n\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">  \r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th class="th-border">类型</th>\r\n									<th class="th-border">说明</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n								</tr>\r\n							</thead>   \r\n							<tbody>\r\n\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>小孩</td>\r\n										<td>{{touristGroup.childCount}}</td>\r\n										<td>{{touristGroup.childPrice}}</td>   \r\n									</tr>\r\n\r\n									\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>大人</td>\r\n										<td>{{touristGroup.adultCount}}</td>\r\n										<td>{{touristGroup.adultPrice}}</td>\r\n									</tr>  \r\n									{{each touristGroupFeeList as touristGroupFlist}}    	                                           \r\n											<tr>       \r\n												<td>    \r\n													<span name="type" value="0">其他费用</span>          \r\n												</td>   \r\n												<td>\r\n													<input readonly="readonly" value="{{touristGroupFlist.describeInfo}}" type="text" class="col-sm-12  no-padding-right" />\r\n												</td>\r\n												<td>\r\n													<input  value="{{touristGroupFlist.count}}" readonly="readonly"  type="text" class="col-sm-12  no-padding-right costCount" />\r\n												</td>\r\n												<td>\r\n													<input  value="{{touristGroupFlist.price}}" readonly="readonly" type="text" class="col-sm-12  no-padding-right costPrice" />   \r\n												</td>\r\n											</tr> \r\n									{{/each}}    \r\n							</tbody>\r\n						</table>\r\n				    </div>\r\n			    </div>\r\n			</div>   \r\n		</div>  \r\n	</form>     \r\n	<!--收客信息 end-->  \r\n\r\n\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-default btn-primary btn-updateFee">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			保存信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});