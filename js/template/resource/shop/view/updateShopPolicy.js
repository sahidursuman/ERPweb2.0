/*TMODJS:{"debug":true,"version":57,"md5":"d9ac308e5a37c5f91ca0096fc22dccb8"}*/
define(function(require) {
    return require("../../../template")("resource/shop/view/updateShopPolicy", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, policyData = $data.policyData, $escape = ($data.policy, 
            $data.i, $utils.$escape), $out = ($data.cost, $data.j, "");
            return $out += '<div class="col-sm-12 shopPolicyContainer globalAdd"> <form class="form-horizontal policyForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group guideInterval"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-shopping-cart"></i> 政策列表 </h5> <div class="widget-toolbar no-border"> <a href="javascript:void(0)" class="btn-shop-policy-add"> <i class="ace-icon fa fa-plus"></i> 新增 </a> </div> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover shopPolicyList"> <thead> <tr> <th>时间范围</th> <th>消费金额(元)</th> <th>导游返佣(%)</th> <th>旅行社返佣(%)</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 32, $each(policyData, function(policy, i) {
                $out += ' <tr class="timeArea" data-entity-id="', $line = 33, $out += $escape(policy.id), 
                $out += '"> <td data-index="', $line = 34, $out += $escape(i + 1), $out += '" class="clearfix div-', 
                $line = 34, $out += $escape(i + 1), $out += '" style="margin-bottom:3px"> <div> <input name="startTime" type="text" class="date-picker col-sm-5" value="', 
                $line = 36, $out += $escape($helpers.dateFormat(policy.startTime, "yyyy-MM-dd")), 
                $out += '"/> <label class="priceArea col-sm-2 center">&nbsp;至&nbsp;</label> <input name="endTime" type="text" class="date-picker col-sm-5" value="', 
                $line = 38, $out += $escape($helpers.dateFormat(policy.endTime, "yyyy-MM-dd")), 
                $out += '"/> </div> </td> <td> ', $line = 42, $each(policy.costMoneyList, function(cost, j) {
                    $out += ' <div data-index="', $line = 43, $out += $escape(j + 1), $out += '" class="clearfix div-', 
                    $line = 43, $out += $escape(j + 1), $out += ' shopPolicyPriceList" style="margin-bottom:3px"> <input name="costMoneyStart" maxlength="6" type="text" class="col-sm-4" value="', 
                    $line = 44, $out += $escape(cost.costMoneyStart), $out += '" data-entity-id="', 
                    $line = 44, $out += $escape(cost.id), $out += '" maxlength="7"/> <label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label> <input name="costMoneyEnd" maxlength="6" type="text" class="col-sm-4" value="', 
                    $line = 46, $out += $escape(cost.costMoneyEnd), $out += '" maxlength="7"/> <label class="priceArea col-sm-2"> <button data-entity-id="', 
                    $line = 48, $out += $escape(cost.id), $out += '" class="btn ', $line = 48, 0 == j ? ($out += "btn-success", 
                    $line = 48) : ($out += "btn-danger", $line = 48), $out += " btn-sm btn-white ", 
                    $line = 48, 0 == j ? ($out += "add", $line = 48) : ($out += "del", $line = 48), 
                    $out += '"> <i class="ace-icon fa ', $line = 49, 0 == j ? ($out += "fa-plus", $line = 49) : ($out += "fa-minus", 
                    $line = 49), $out += ' bigger-110 icon-only"></i> </button> </label> </div> ', $line = 53;
                }), $out += " </td> <td> ", $line = 56, $each(policy.costMoneyList, function(cost, j) {
                    $out += ' <div data-index="', $line = 57, $out += $escape(j + 1), $out += '" class="clearfix div-', 
                    $line = 57, $out += $escape(j + 1), $out += '" style="margin-bottom:3px"> <input name="guideRate" class="col-sm-12" type="text" value="', 
                    $line = 58, $out += $escape($helpers.toFixed(100 * cost.guideRate)), $out += '" maxlength="5"/> </div> ', 
                    $line = 60;
                }), $out += " </td> <td> ", $line = 63, $each(policy.costMoneyList, function(cost, j) {
                    $out += ' <div data-index="', $line = 64, $out += $escape(j + 1), $out += '" class="clearfix div-', 
                    $line = 64, $out += $escape(j + 1), $out += '" style="margin-bottom:3px"> <input name="travelAgencyRate" class="col-sm-12" type="text" value="', 
                    $line = 65, $out += $escape($helpers.toFixed(100 * cost.travelAgencyRate)), $out += '" maxlength="5"/> </div> ', 
                    $line = 67;
                }), $out += ' </td> <td style="width:70px"> <button data-entity-id="', $line = 70, 
                $out += $escape(policy.id), $out += '" class="btn btn-xs btn-danger btn-shop-policy-delete"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </button> </td> </tr> ', 
                $line = 76;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-shop-policy guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 shopPolicyContainer globalAdd">\r\n	<form class="form-horizontal policyForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group guideInterval">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-shopping-cart"></i>\r\n							政策列表\r\n						</h5>\r\n						<div class="widget-toolbar no-border">\r\n							<a href="javascript:void(0)" class="btn-shop-policy-add">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增 \r\n							</a>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover shopPolicyList"> \r\n								<thead>\r\n									<tr>\r\n										<th>时间范围</th>\r\n										<th>消费金额(元)</th>\r\n										<th>导游返佣(%)</th>\r\n										<th>旅行社返佣(%)</th>\r\n										<th>操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each policyData as policy i}}\r\n										<tr class="timeArea" data-entity-id="{{policy.id}}">\r\n										<td data-index="{{i+1}}" class="clearfix div-{{i+1}}" style="margin-bottom:3px">\r\n											<div>\r\n												<input name="startTime" type="text" class="date-picker col-sm-5" value="{{policy.startTime | dateFormat:\'yyyy-MM-dd\'}}"/>\r\n												<label class="priceArea col-sm-2 center">&nbsp;至&nbsp;</label>\r\n												<input name="endTime" type="text" class="date-picker col-sm-5" value="{{policy.endTime | dateFormat:\'yyyy-MM-dd\'}}"/>\r\n											</div>\r\n										</td>\r\n										<td> \r\n											{{each policy.costMoneyList as cost j}}\r\n											<div data-index="{{j+1}}" class="clearfix div-{{j+1}} shopPolicyPriceList" style="margin-bottom:3px">\r\n												<input name="costMoneyStart" maxlength="6" type="text" class="col-sm-4" value="{{cost.costMoneyStart}}" data-entity-id="{{cost.id}}" maxlength="7"/>\r\n												<label class="col-sm-2 control-label center">&nbsp;至&nbsp;</label>\r\n												<input name="costMoneyEnd" maxlength="6" type="text" class="col-sm-4" value="{{cost.costMoneyEnd}}" maxlength="7"/>\r\n												<label class="priceArea col-sm-2">\r\n													<button data-entity-id="{{cost.id}}" class="btn {{if j==0}}btn-success{{else}}btn-danger{{/if}} btn-sm btn-white {{if j == 0}}add{{else}}del{{/if}}">\r\n														<i class="ace-icon fa {{if j == 0}}fa-plus{{else}}fa-minus{{/if}} bigger-110 icon-only"></i>\r\n													</button>\r\n												</label>\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td>\r\n											{{each policy.costMoneyList as cost j}}\r\n											<div data-index="{{j+1}}" class="clearfix div-{{j+1}}" style="margin-bottom:3px">\r\n												<input name="guideRate" class="col-sm-12" type="text" value="{{cost.guideRate*100 | toFixed}}" maxlength="5"/>\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td>\r\n											{{each policy.costMoneyList as cost j}}\r\n											<div data-index="{{j+1}}" class="clearfix div-{{j+1}}" style="margin-bottom:3px">\r\n												<input name="travelAgencyRate" class="col-sm-12" type="text" value="{{cost.travelAgencyRate*100 | toFixed}}" maxlength="5"/>\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td style="width:70px">\r\n											<button data-entity-id="{{policy.id}}" class="btn btn-xs btn-danger btn-shop-policy-delete">\r\n												<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n											</button>\r\n											\r\n										</td>\r\n										</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-shop-policy guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});