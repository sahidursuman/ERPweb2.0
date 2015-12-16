/*TMODJS:{"debug":true,"version":56,"md5":"386db9850ffcb169f36e509d5794283b"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/outEditFee", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, touristGroup = $data.touristGroup, $each = $utils.$each, touristGroupFeeList = ($data.transferList, 
            $data.$index, $data.transferOtherFee, $data.touristGroupFeeList), $out = ($data.touristGroupFlist, 
            "");
            return $out += '<div class="col-xs-12 editFeeMain globalAdd" id= "T-outEditFeeMain"> <form class="form-horizontal editFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">1</span> <label class="middle title-size">填写费用</label> </h5> <div class="widget-body" > <div class="form-group"> <input type="hidden" name="touristGroupId" value="', 
            $line = 10, $out += $escape(touristGroup.id), $out += '" /> <label class="col-sm-2 control-label no-padding-right">备注：</label> <div class="col-sm-8"> <input name="remark" value="', 
            $line = 13, null != touristGroup && ($line = 13, 1 == touristGroup.transferFeeStatus && ($line = 13, 
            $out += $escape(touristGroup.transRemark), $line = 13), $line = 13), $out += '" class="col-sm-12 no-padding-right" type="text" maxlength="500"> </div> </div> <input type="hidden" name="transferFeeStatus" value="', 
            $line = 16, $out += $escape(touristGroup.transferFeeStatus), $out += '"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">应付:</label> <div class="col-sm-2"> <input value="', 
            $line = 20, null != touristGroup && ($line = 20, $out += $escape(touristGroup.transNeedPayAllMoney), 
            $line = 20), $out += '" readonly="readonly" type="text" name="transNeedPayAllMoney" class="col-sm-12" /> </div> <label class="col-sm-1 control-label no-padding-right">已付:</label> <div class="col-sm-2"> <input value="', 
            $line = 24, 1 == touristGroup.transferFeeStatus && ($line = 24, $out += $escape(touristGroup.transPayedMoney), 
            $line = 24), $out += '" type="text" name="transPayedMoney" class="col-sm-12 price"/> </div> <div class="col-sm-2"> <label class="no-padding-right pull-left">付款方式：</label> ', 
            $line = 29, 0 == touristGroup.transferFeeStatus ? ($out += ' <select name="transPayType" class="pull-left"> <option selected="selected" value="0">现金</option> <option value="1">银行转账</option> <option value="2">网上支付</option> <option value="3">支票</option> <option value="4">其它</option> </select> ', 
            $line = 37) : ($out += ' <select name="transPayType" class="pull-left"> <option', 
            $line = 39, 0 == touristGroup.transPayType && ($out += ' selected="selected"', $line = 39), 
            $out += ' value="0">现金</option> <option', $line = 40, 1 == touristGroup.transPayType && ($out += ' selected="selected"', 
            $line = 40), $out += ' value="1">银行转账</option> <option', $line = 41, 2 == touristGroup.transPayType && ($out += ' selected="selected"', 
            $line = 41), $out += ' value="2">网上支付</option> <option', $line = 42, 3 == touristGroup.transPayType && ($out += ' selected="selected"', 
            $line = 42), $out += ' value="3">支票</option> <option', $line = 43, 4 == touristGroup.transPayType && ($out += ' selected="selected"', 
            $line = 43), $out += ' value="4">其它</option> </select> ', $line = 45), $out += ' </div> <label style="margin: 2px 5px 0"> <input type="checkbox" disabled="disabled" ', 
            $line = 51, 1 == touristGroup.operateCurrentNeedPayMoney && ($out += 'checked="checked"', 
            $line = 51), $out += ' class="ace send-check"> <span class="lbl"> </span> <input type="hidden" name="isCurrent" value="', 
            $line = 54, $out += $escape(touristGroup.operateCurrentNeedPayMoney), $out += '"> </label> <label class="col-sm-1 control-label no-padding-right" >对方现收</label> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <button class="btn btn-sm btn-success T-newEditFee" style="float:left;"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-innerOutEditFeeTbody"> <tr> <td>转客价</td> <td>大人</td> <td> <input name="adultCount" value="', 
            $line = 88, null != touristGroup && ($line = 88, $out += $escape(touristGroup.adultCount), 
            $line = 88), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right count" /> </td> <td> <input name="transAdultPrice" value="', 
            $line = 91, 1 == touristGroup.transferFeeStatus && ($line = 91, $out += $escape(touristGroup.transAdultPrice), 
            $line = 91), $out += '" type="text" class="col-sm-12 no-padding-right price" /> </td> <td></td> </tr> <tr> <td> 转客价 </td> <td> 小孩 </td> <td> <input name="childCount" value="', 
            $line = 103, null != touristGroup && ($line = 103, $out += $escape(touristGroup.childCount), 
            $line = 103), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right count" /> </td> <td> <input name="transChildPrice" value="', 
            $line = 106, 1 == touristGroup.transferFeeStatus && ($line = 106, $out += $escape(touristGroup.transChildPrice), 
            $line = 106), $out += '" type="text" class="col-sm-12 no-padding-right price" /> </td> <td></td> </tr>  ', 
            $line = 113, $each(touristGroup.touristGroupFeeList, function(transferList) {
                $out += ' <tr data-entity-id="', $line = 114, $out += $escape(transferList.id), 
                $out += '"> <td> <span name="type" value="0">其他费用</span> </td> <td> <input name="describe" value="', 
                $line = 119, $out += $escape(transferList.describeInfo), $out += '" type="text" class="col-sm-12 no-padding-right" /> </td> <td> <input name="count" value="', 
                $line = 122, $out += $escape(transferList.count), $out += '" type="text" class="col-sm-12 no-padding-right count" /> </td> <td> <input name="otherPrice" value="', 
                $line = 125, 1 == touristGroup.transferFeeStatus && ($line = 125, $out += $escape(transferList.price), 
                $line = 125), $out += '" type="text" class="col-sm-12 no-padding-right price" /> </td> <td><a class=" T-delete cursor">删除</a></td> </tr> ', 
                $line = 129;
            }), $out += "   ", $line = 134, $each(touristGroup.touristGroupTransferFeeSet, function(transferOtherFee) {
                $out += ' <tr data-entity-id="', $line = 135, $out += $escape(transferOtherFee.id), 
                $out += '"> <td> <span name="type" value="0">其他费用</span> </td> <td> <input name="describe" value="', 
                $line = 140, $out += $escape(transferOtherFee.discribe), $out += '" type="text" class="col-sm-12 no-padding-right" /> </td> <td> <input name="count" value="', 
                $line = 143, $out += $escape(transferOtherFee.count), $out += '" type="text" class="col-sm-12 no-padding-right count" /> </td> <td> <input name="otherPrice" value="', 
                $line = 146, $out += $escape(transferOtherFee.otherPrice), $out += '" type="text" class="col-sm-12 no-padding-right price" /> </td> <td><a class="T-delete cursor">删除</a></td> </tr> ', 
                $line = 150;
            }), $out += '  </tbody> </table> </div> </div> </div> </div> </form>  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 class="title"> <span class="badge badge-primary">2</span> <label class="middle title-size">收客信息</label> </h5> <div class="widget-body" > <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">收客备注：</label> <div class="col-sm-8"> <input readonly="readonly" value="', 
            $line = 176, null != touristGroup && ($line = 176, $out += $escape(touristGroup.transRemark), 
            $line = 176), $out += '" class="col-sm-12 no-padding-right" type="text"> </div> </div> <div class="form-group" style="margin-left:25%;"> <label class="col-sm-1 control-label no-padding-right">应收：</label> <div class="col-sm-2"> <span>', 
            $line = 183, $out += $escape(touristGroup.needPayAllMoney), $out += '</span> </div> <label class="col-sm-1 control-label no-padding-right">已收：</label> <div class="col-sm-2"> <span>', 
            $line = 188, $out += $escape(touristGroup.payedMoney), $out += '</span> </div> <label class="col-sm-1 control-label no-padding-right">现收：</label> <div class="col-sm-2"> <span>', 
            $line = 193, $out += $escape(touristGroup.currentNeedPayMoney), $out += '</span> </div> </div> <div class="form-group"> <div class="col-sm-2"></div> <div class="col-sm-8"> <table class="table table-striped table-bordered table-hover addCostList"> <thead> <tr> <th class="th-border">类型</th> <th class="th-border">说明</th> <th class="th-border">数量</th> <th class="th-border">单价</th> </tr> </thead> <tbody> <tr> <td>结算价</td> <td>大人</td> <td>', 
            $line = 214, $out += $escape(touristGroup.adultCount), $out += "</td> <td>", $line = 215, 
            $out += $escape(touristGroup.adultPrice), $out += "</td> </tr> <tr> <td>结算价</td> <td>小孩</td> <td>", 
            $line = 221, $out += $escape(touristGroup.childCount), $out += "</td> <td>", $line = 222, 
            $out += $escape(touristGroup.childPrice), $out += "</td> </tr> ", $line = 225, $each(touristGroupFeeList, function(touristGroupFlist) {
                $out += ' <tr> <td> <span name="type" value="0">其他费用</span> </td> <td> <input readonly="readonly" value="', 
                $line = 231, $out += $escape(touristGroupFlist.describeInfo), $out += '" type="text" class="col-sm-12 no-padding-right" /> </td> <td> <input value="', 
                $line = 234, $out += $escape(touristGroupFlist.count), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costCount" /> </td> <td> <input value="', 
                $line = 237, $out += $escape(touristGroupFlist.price), $out += '" readonly="readonly" type="text" class="col-sm-12 no-padding-right costPrice" /> </td> </tr> ', 
                $line = 240;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </form>  <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="space-10"></div> <button class="btn btn-block btn-default btn-primary T-updateFee guideSubmit"> <i class="ace-icon fa fa-check"></i> 保存信息 </button> <div class="space-20"></div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 editFeeMain globalAdd" id= "T-outEditFeeMain">\r\n	<form class="form-horizontal editFeeMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="">\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="middle title-size">填写费用</label>\r\n				</h5>\r\n			<div class="widget-body" >\r\n				<div class="form-group">\r\n					<input type="hidden" name="touristGroupId" value="{{touristGroup.id}}" />\r\n					<label class="col-sm-2 control-label no-padding-right">备注：</label>\r\n					<div class="col-sm-8">\r\n						<input name="remark" value="{{if touristGroup != null}}{{if touristGroup.transferFeeStatus==1}}{{touristGroup.transRemark}}{{/if}}{{/if}}" class="col-sm-12  no-padding-right" type="text" maxlength="500">  \r\n					</div>\r\n				</div>\r\n				<input type="hidden" name="transferFeeStatus" value="{{touristGroup.transferFeeStatus}}">\r\n				<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">应付:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup != null}}{{touristGroup.transNeedPayAllMoney}}{{/if}}" readonly="readonly" type="text" name="transNeedPayAllMoney" class="col-sm-12" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">已付:</label>\r\n						<div class="col-sm-2">\r\n							<input value="{{if touristGroup.transferFeeStatus==1}}{{touristGroup.transPayedMoney}}{{/if}}" type="text" name="transPayedMoney" class="col-sm-12 price"/>\r\n						</div>\r\n\r\n						<div class="col-sm-2">\r\n						    <label class="no-padding-right pull-left">付款方式：</label>\r\n						    {{if touristGroup.transferFeeStatus==0}}\r\n							<select name="transPayType" class="pull-left">\r\n								<option selected="selected" value="0">现金</option>\r\n								<option value="1">银行转账</option>\r\n								<option value="2">网上支付</option>\r\n								<option value="3">支票</option>\r\n								<option value="4">其它</option>\r\n							</select>\r\n							{{else}}\r\n                            <select name="transPayType" class="pull-left">\r\n								<option{{if touristGroup.transPayType == 0}} selected="selected"{{/if}} value="0">现金</option>\r\n								<option{{if touristGroup.transPayType == 1}} selected="selected"{{/if}} value="1">银行转账</option>\r\n								<option{{if touristGroup.transPayType == 2}} selected="selected"{{/if}} value="2">网上支付</option>\r\n								<option{{if touristGroup.transPayType == 3}} selected="selected"{{/if}} value="3">支票</option>\r\n								<option{{if touristGroup.transPayType == 4}} selected="selected"{{/if}} value="4">其它</option>\r\n							</select>\r\n							{{/if}}\r\n\r\n						</div>\r\n\r\n                        \r\n						<label style="margin: 2px 5px 0">\r\n								<input type="checkbox" disabled="disabled" {{if touristGroup.operateCurrentNeedPayMoney == 1}}checked="checked"{{/if}} class="ace send-check">\r\n								<span class="lbl">\r\n								</span>\r\n								<input type="hidden" name="isCurrent" value="{{touristGroup.operateCurrentNeedPayMoney}}">\r\n						</label>\r\n                        <label class="col-sm-1 control-label no-padding-right" >对方现收</label>\r\n						\r\n\r\n				</div>\r\n\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<button class="btn btn-sm btn-success T-newEditFee" style="float:left;">\r\n							<i class="ace-icon fa fa-plus"></i>\r\n							新增费用项\r\n						</button>\r\n					</div>\r\n				</div>\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th class="th-border">类型</th>\r\n									<th class="th-border">说明</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n									<th class="th-border">操作</th>\r\n								</tr>\r\n							</thead>\r\n							<tbody class="T-innerOutEditFeeTbody">\r\n								<tr>\r\n									<td>转客价</td>\r\n									<td>大人</td>\r\n									<td>\r\n										<input name="adultCount" value="{{if touristGroup != null}}{{touristGroup.adultCount}}{{/if}}" readonly="readonly" type="text" class="col-sm-12  no-padding-right count" />\r\n									</td>\r\n									<td>\r\n										<input name="transAdultPrice" value="{{if touristGroup.transferFeeStatus==1}}{{touristGroup.transAdultPrice}}{{/if}}" type="text" class="col-sm-12  no-padding-right  price" />\r\n									</td>\r\n									<td></td>\r\n								</tr>\r\n								<tr>\r\n									<td>\r\n										转客价\r\n									</td>\r\n									<td>\r\n										小孩\r\n									</td>\r\n									<td>\r\n										<input name="childCount" value="{{if touristGroup != null}}{{touristGroup.childCount}}{{/if}}" readonly="readonly" type="text" class="col-sm-12  no-padding-right count" />\r\n									</td>\r\n									<td>\r\n										<input name="transChildPrice" value="{{if touristGroup.transferFeeStatus==1}}{{touristGroup.transChildPrice}}{{/if}}" type="text" class="col-sm-12  no-padding-right price" />\r\n									</td>\r\n									<td></td>\r\n								</tr>  \r\n\r\n\r\n								<!--游客小组费用start--> \r\n								{{each touristGroup.touristGroupFeeList as transferList}}         \r\n									<tr  data-entity-id="{{transferList.id}}">    \r\n										<td>\r\n											<span name="type" value="0">其他费用</span>   \r\n										</td>   \r\n										<td>\r\n											<input name="describe" value="{{transferList.describeInfo}}" type="text" class="col-sm-12  no-padding-right" />\r\n										</td>\r\n										<td>\r\n											<input name="count" value="{{transferList.count}}" type="text" class="col-sm-12  no-padding-right count" />\r\n										</td>\r\n										<td>\r\n											<input name="otherPrice" value="{{if touristGroup.transferFeeStatus==1}}{{transferList.price}}{{/if}}" type="text" class="col-sm-12  no-padding-right price" />\r\n										</td>\r\n										<td><a class="  T-delete cursor">删除</a></td>\r\n									</tr>\r\n								{{/each}} \r\n								<!--游客小组费end-->    \r\n\r\n\r\n								<!--转客其他费用start-->\r\n								{{each touristGroup.touristGroupTransferFeeSet as transferOtherFee}}\r\n								<tr data-entity-id="{{transferOtherFee.id}}">\r\n									<td>\r\n										<span name="type" value="0">其他费用</span>\r\n									</td>\r\n									<td>\r\n										<input name="describe" value="{{transferOtherFee.discribe}}" type="text" class="col-sm-12  no-padding-right" />\r\n									</td>\r\n									<td>\r\n										<input name="count" value="{{transferOtherFee.count}}" type="text" class="col-sm-12  no-padding-right count" />\r\n									</td>\r\n									<td>\r\n										<input name="otherPrice" value="{{transferOtherFee.otherPrice}}" type="text" class="col-sm-12  no-padding-right price" />\r\n									</td>\r\n									<td><a class="T-delete cursor">删除</a></td>\r\n								</tr>\r\n								{{/each}}\r\n								<!--转客其他费用end-->\r\n							</tbody>\r\n						</table>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>  \r\n\r\n\r\n\r\n\r\n\r\n\r\n	<!--收客信息 start--> \r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 class="title">\r\n					<span class="badge badge-primary">2</span>\r\n					<label class="middle title-size">收客信息</label>\r\n				</h5>\r\n			<div class="widget-body" >\r\n				<div class="form-group">\r\n					<label class="col-sm-2 control-label no-padding-right">收客备注：</label>  \r\n					<div class="col-sm-8">\r\n						<input readonly="readonly" value="{{if touristGroup != null}}{{touristGroup.transRemark}}{{/if}}" class="col-sm-12  no-padding-right" type="text">  \r\n					</div>\r\n				</div> \r\n\r\n				<div class="form-group" style="margin-left:25%;">\r\n					    <label class="col-sm-1 control-label no-padding-right">应收：</label>\r\n						<div class="col-sm-2">\r\n							<span>{{touristGroup.needPayAllMoney}}</span>\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">已收：</label>\r\n						<div class="col-sm-2">\r\n							<span>{{touristGroup.payedMoney}}</span>\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">现收：</label>\r\n						<div class="col-sm-2">\r\n                              <span>{{touristGroup.currentNeedPayMoney}}</span>				 \r\n                        </div>\r\n				</div>\r\n\r\n\r\n				<div class="form-group">\r\n					<div class="col-sm-2"></div>\r\n					<div class="col-sm-8">\r\n						<table class="table table-striped table-bordered table-hover addCostList"> \r\n							<thead>\r\n								<tr>\r\n									<th class="th-border">类型</th>\r\n									<th class="th-border">说明</th>\r\n									<th class="th-border">数量</th>\r\n									<th class="th-border">单价</th>\r\n								</tr>\r\n							</thead>   \r\n							<tbody>	\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>大人</td>\r\n										<td>{{touristGroup.adultCount}}</td>\r\n										<td>{{touristGroup.adultPrice}}</td>\r\n									</tr> \r\n\r\n									<tr>\r\n										<td>结算价</td>\r\n										<td>小孩</td>\r\n										<td>{{touristGroup.childCount}}</td>\r\n										<td>{{touristGroup.childPrice}}</td>   \r\n									</tr> \r\n\r\n									{{each touristGroupFeeList as touristGroupFlist}}    	                                           \r\n											<tr>       \r\n												<td>    \r\n													<span name="type" value="0">其他费用</span>          \r\n												</td>   \r\n												<td>\r\n													<input readonly="readonly" value="{{touristGroupFlist.describeInfo}}" type="text" class="col-sm-12  no-padding-right" />\r\n												</td>\r\n												<td>\r\n													<input  value="{{touristGroupFlist.count}}" readonly="readonly"  type="text" class="col-sm-12  no-padding-right costCount" />\r\n												</td>\r\n												<td>\r\n													<input  value="{{touristGroupFlist.price}}" readonly="readonly" type="text" class="col-sm-12  no-padding-right costPrice" />   \r\n												</td>\r\n											</tr>\r\n									{{/each}}    \r\n							</tbody>\r\n						</table>\r\n				    </div>\r\n			    </div>\r\n			</div>   \r\n		</div>  \r\n	</form>     \r\n	<!--收客信息 end-->  \r\n\r\n\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-default btn-primary T-updateFee guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			保存信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});