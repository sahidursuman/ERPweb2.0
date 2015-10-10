/*TMODJS:{"debug":true,"version":187,"md5":"c27bdba3469a408c40cffa2d7e5a943a"}*/
define(function(require) {
    return require("../../../template")("resource/selfpay/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, selfpay = $data.selfpay, $each = $utils.$each, $out = ($data.itemList, 
            $data.$index, $data.rebateList, $data.index, "");
            return $out += '<div class="col-xs-12 view-selfpay-form"> <form class="form-horizontal selfpayMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <input name="selfpayId" type="hidden" value="', 
            $line = 3, $out += $escape(selfpay.id), $out += '" /> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-info-circle"></i> 自费项目主体信息 </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">公司名称:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 16, $out += $escape(selfpay.name), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">联系人:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 22, $out += $escape(selfpay.managerName), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">联系电话:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 26, $out += $escape(selfpay.mobileNumber), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 32, $out += $escape(selfpay.telNumber), $out += '</label> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <label class="control-label">', 
            $line = 36, $out += $escape(selfpay.faxNumber), $out += '</label> </div> </div>  <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">人数返佣(元/人):</label> <div class="col-sm-4"> <label class="control-label">', 
            $line = 44, $out += $escape(selfpay.customerRebateMoney), $out += '</label> </div> </div>  <div class="form-group"> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">公司所在省市:</label> <div class="col-sm-8"> <label class="control-label"> ', 
            $line = 58, null != selfpay.province && ($out += " ", $line = 59, $out += $escape(selfpay.province.name), 
            $out += " ", $line = 60), $out += " ", $line = 61, null != selfpay.city && ($out += " -", 
            $line = 62, $out += $escape(selfpay.city.name), $out += " ", $line = 63), $out += " ", 
            $line = 64, null != selfpay.district && ($out += " -", $line = 65, $out += $escape(selfpay.district.name), 
            $out += " ", $line = 66), $out += ' </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <label class="control-label">', 
            $line = 73, $out += $escape(selfpay.street), $out += '</label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label> <div class="col-sm-2"> <label class="control-label"> ', 
            $line = 80, 1 == selfpay.status ? ($out += " 已启用 ", $line = 82) : 0 == selfpay.status && ($out += " 已停用 ", 
            $line = 84), $out += ' </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">公司简介:</label> <div class="col-sm-8"> <label class="control-label">', 
            $line = 91, $out += $escape(selfpay.remark), $out += '</label> </div> </div> </div> </div> </div> </form> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group priceList"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-price"></i> 项目价格列表 </h5>  </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover priceList"> <thead> <tr> <th>项目名称</th> <th>针对客源</th> <th>时间区间</th> <th>内部价格(元)</th> <th>市场价格(元)</th> <th>导游返佣(%)</th> <th>旅行社返佣(%)</th> <th>备注</th> </tr> </thead> <tbody>', 
            $line = 133, $each(selfpay.selfPayItemList, function(itemList) {
                $out += ' <tr data-entity-id="', $line = 134, $out += $escape(itemList.id), $out += '"> <td> ', 
                $line = 136, $out += $escape(itemList.name), $out += " </td> <td> ", $line = 139, 
                0 == itemList.customerType ? ($out += " 散客 ", $line = 141) : 1 == itemList.customerType && ($out += " 团体 ", 
                $line = 143), $out += " </td> <td>", $line = 145, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 146, 0 == index ? ($out += ' <div class="no-padding dateTimeArea" data-index="1"> <label class="control-label center">', 
                    $line = 148, $out += $escape($helpers.dateFormat(rebateList.startTime, "yyyy-MM-dd")), 
                    $out += '</label> <label class="control-label center">&nbsp;至&nbsp;</label> <label class="control-label center">', 
                    $line = 150, $out += $escape($helpers.dateFormat(rebateList.endTime, "yyyy-MM-dd")), 
                    $out += "</label> </div>", $line = 151) : ($out += ' <div class="no-padding dateTimeArea" data-index="2"> <label class="control-label center">', 
                    $line = 153, $out += $escape($helpers.dateFormat(rebateList.startTime, "yyyy-MM-dd")), 
                    $out += '</label> <label class="control-label center">&nbsp;至&nbsp;</label> <label class="control-label center">', 
                    $line = 155, $out += $escape($helpers.dateFormat(rebateList.endTime, "yyyy-MM-dd")), 
                    $out += "</label> </div>", $line = 156), $line = 156;
                }), $out += " </td> <td>", $line = 158, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 159, 0 == index ? ($out += ' <div class="no-padding"> <label class="control-label center">', 
                    $line = 161, $out += $escape(rebateList.price), $out += "</label> </div>", $line = 162) : ($out += ' <div class="no-padding" style="padding-top:2px!important;"> <label class="control-label center">', 
                    $line = 164, $out += $escape(rebateList.price), $out += "</label> </div>", $line = 165), 
                    $line = 165;
                }), $out += " </td> <td>", $line = 167, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 168, 0 == index ? ($out += ' <div class="no-padding"> <label class="control-label center">', 
                    $line = 170, $out += $escape(rebateList.marketPrice), $out += "</label> </div>", 
                    $line = 171) : ($out += ' <div class="no-padding" style="padding-top:2px!important;"> <label class="control-label center">', 
                    $line = 173, $out += $escape(rebateList.marketPrice), $out += "</label> </div>", 
                    $line = 174), $line = 174;
                }), $out += " </td> <td>", $line = 176, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 177, 0 == index ? ($out += ' <div class="no-padding"> <label class="control-label center">', 
                    $line = 179, $out += $escape($helpers.toFixed(100 * rebateList.guideRate)), $out += "</label> </div>", 
                    $line = 180) : ($out += ' <div class="no-padding" style="padding-top:2px!important;"> <label class="control-label center">', 
                    $line = 182, $out += $escape($helpers.toFixed(100 * rebateList.guideRate)), $out += "</label> </div>", 
                    $line = 183), $line = 183;
                }), $out += " </td> <td>", $line = 185, $each(itemList.SelfPayRebateList, function(rebateList, index) {
                    $out += " ", $line = 186, 0 == index ? ($out += ' <div class="no-padding"> <label class="control-label center">', 
                    $line = 188, $out += $escape($helpers.toFixed(100 * rebateList.travelAgencyRate)), 
                    $out += "</label> </div>", $line = 189) : ($out += ' <div class="no-padding" style="padding-top:2px!important;"> <label class="control-label center">', 
                    $line = 191, $out += $escape($helpers.toFixed(100 * rebateList.travelAgencyRate)), 
                    $out += "</label> </div>", $line = 192), $line = 192;
                }), $out += ' </td> <td> <label class="control-label center">', $line = 195, $out += $escape(itemList.remark), 
                $out += "</label> </td> </tr>", $line = 198;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div>  </form> </div> ", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 view-selfpay-form">\r\n	<form class="form-horizontal selfpayMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<input name="selfpayId" type="hidden" value="{{selfpay.id}}" />\r\n		<div class="widget-box ui-sortable-handle">\r\n			<div class="widget-header">\r\n				<h5 class="widget-title">\r\n					<i class="ace-icon fa fa-info-circle"></i>\r\n					自费项目主体信息\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">公司名称:</label>\r\n						<div class="col-sm-3">\r\n							<label class="control-label">{{selfpay.name}}</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n					    <label class="col-sm-2 control-label no-padding-right">联系人:</label>\r\n						<div class="col-sm-3">\r\n							<label class="control-label">{{selfpay.managerName}}</label>\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">联系电话:</label>\r\n						<div class="col-sm-3">\r\n							<label class="control-label">{{selfpay.mobileNumber}}</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n					    <label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n						<div class="col-sm-3">\r\n							<label class="control-label">{{selfpay.telNumber}}</label>\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">传真号码:</label>\r\n						<div class="col-sm-3">\r\n							<label class="control-label">{{selfpay.faxNumber}}</label>\r\n						</div>\r\n					</div>\r\n\r\n				    <!--添加人数返佣start-->                       \r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">人数返佣(元/人):</label>     \r\n						<div class="col-sm-4">           \r\n							<label class="control-label">{{selfpay.customerRebateMoney}}</label>   \r\n						</div>               \r\n					</div>\r\n                    <!--添加人数返佣end-->       \r\n\r\n\r\n\r\n\r\n					<div class="form-group">\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">公司所在省市:</label>\r\n						<div class="col-sm-8">\r\n							<label class="control-label">\r\n								{{if selfpay.province != null}}\r\n									{{selfpay.province.name}}\r\n								{{/if}}\r\n								{{if selfpay.city != null}}\r\n									-{{selfpay.city.name}}\r\n								{{/if}}\r\n								{{if selfpay.district != null}}\r\n									-{{selfpay.district.name}}\r\n								{{/if}}\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n						<div class="col-sm-6">\r\n							<label class="control-label">{{selfpay.street}}</label>\r\n						</div> \r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label>\r\n						<div class="col-sm-2">\r\n							<label class="control-label">\r\n								{{if selfpay.status == 1}}\r\n									已启用\r\n								{{else if selfpay.status == 0}}\r\n									已停用\r\n								{{/if}}	\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">公司简介:</label>\r\n						<div class="col-sm-8">\r\n							<label class="control-label">{{selfpay.remark}}</label>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>  \r\n	\r\n	\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group priceList">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-price"></i>\r\n							项目价格列表\r\n						</h5>\r\n\r\n						<!-- <div class="widget-toolbar no-border">\r\n							<a href="javascript:void(0)" class="btn-price-add">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增\r\n							</a>\r\n						</div> -->\r\n					</div>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover priceList"> \r\n								<thead>\r\n									<tr>\r\n										<th>项目名称</th>\r\n										<th>针对客源</th>\r\n										<th>时间区间</th>\r\n										<th>内部价格(元)</th>\r\n										<th>市场价格(元)</th>\r\n										<th>导游返佣(%)</th>\r\n										<th>旅行社返佣(%)</th>\r\n										<th>备注</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>{{each selfpay.selfPayItemList as itemList}}\r\n									<tr data-entity-id="{{itemList.id}}">\r\n										<td>\r\n											{{itemList.name}}\r\n										</td>\r\n										<td>\r\n											{{if itemList.customerType == 0}}\r\n											散客\r\n											{{else if itemList.customerType == 1}}\r\n											团体\r\n											{{/if}}\r\n										</td>\r\n										<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n											{{if index == 0}}\r\n											<div class="no-padding dateTimeArea" data-index="1">\r\n												<label class="control-label center">{{rebateList.startTime | dateFormat: \'yyyy-MM-dd\'}}</label>\r\n												<label class="control-label center">&nbsp;至&nbsp;</label>\r\n												<label class="control-label center">{{rebateList.endTime | dateFormat: \'yyyy-MM-dd\'}}</label>\r\n											</div>{{else}}\r\n											<div class="no-padding dateTimeArea" data-index="2">\r\n												<label class="control-label center">{{rebateList.startTime | dateFormat: \'yyyy-MM-dd\'}}</label>\r\n												<label class="control-label center">&nbsp;至&nbsp;</label>\r\n												<label class="control-label center">{{rebateList.endTime | dateFormat: \'yyyy-MM-dd\'}}</label>\r\n											</div>{{/if}}{{/each}}\r\n										</td>\r\n										<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n											{{if index == 0}}\r\n											<div class="no-padding">\r\n												<label class="control-label center">{{rebateList.price}}</label>\r\n											</div>{{else}}\r\n											<div class="no-padding" style="padding-top:2px!important;">\r\n												<label class="control-label center">{{rebateList.price}}</label>\r\n											</div>{{/if}}{{/each}}\r\n										</td>\r\n										<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n											{{if index == 0}}\r\n											<div class="no-padding">\r\n												<label class="control-label center">{{rebateList.marketPrice}}</label>\r\n											</div>{{else}}\r\n											<div class="no-padding" style="padding-top:2px!important;">\r\n												<label class="control-label center">{{rebateList.marketPrice}}</label>\r\n											</div>{{/if}}{{/each}}\r\n										</td>\r\n										<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n											{{if index == 0}}\r\n											<div class="no-padding">\r\n												<label class="control-label center">{{rebateList.guideRate*100 | toFixed}}</label>\r\n											</div>{{else}}\r\n											<div class="no-padding" style="padding-top:2px!important;">\r\n												<label class="control-label center">{{rebateList.guideRate*100 | toFixed}}</label>\r\n											</div>{{/if}}{{/each}}\r\n										</td>\r\n										<td>{{each itemList.SelfPayRebateList as rebateList index}}\r\n											{{if index == 0}}\r\n											<div class="no-padding">\r\n												<label class="control-label center">{{rebateList.travelAgencyRate*100 | toFixed}}</label>\r\n											</div>{{else}}\r\n											<div class="no-padding" style="padding-top:2px!important;">\r\n												<label class="control-label center">{{rebateList.travelAgencyRate*100 | toFixed}}</label>\r\n											</div>{{/if}}{{/each}}\r\n										</td>\r\n										<td>\r\n											<label class="control-label center">{{itemList.remark}}</label>\r\n										</td>\r\n										\r\n									</tr>{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<!-- \r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-selfpay">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div> -->\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});