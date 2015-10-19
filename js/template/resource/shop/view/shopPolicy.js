/*TMODJS:{"debug":true,"version":113,"md5":"9a608f0d126549b60c36e166893a3b1e"}*/
define(function(require) {
    return require("../../../template")("resource/shop/view/shopPolicy", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, policyData = $data.policyData, $escape = ($data.policy, 
            $data.i, $utils.$escape), $out = ($data.cost, $data.j, "");
            return $out += '<div class="col-sm-12 shopPolicyContainer globalAdd"> <form class="form-horizontal policyForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group guideInterval"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class="widget-box ui-sortable-handle"> <div class="widget-header"> <h5 class="widget-title"> <i class="ace-icon fa fa-shopping-cart"></i> 政策列表 </h5> <div class="widget-toolbar no-border"> <a href="javascript:void(0)" class="btn-shop-policy-add"> <i class="ace-icon fa fa-plus"></i> 新增 </a> </div> </div> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover shopPolicyList"> <thead> <tr> <th style="width:240px;">时间范围</th> <th style="width:300px;">消费金额(元)</th> <th>导游返佣(%)</th> <th>旅行社返佣(%)</th> <th style="width:90px;">操作</th> </tr> </thead> <tbody> ', 
            $line = 31, $each(policyData, function(policy, i) {
                $out += ' <tr class="timeArea"> <td data-index="', $line = 33, $out += $escape(i + 1), 
                $out += '" class="clearfix div-', $line = 33, $out += $escape(i + 1), $out += '" style="margin-bottom:3px"> <div> <input name="startTime" type="text" class="datepicker" style="width:100px" value="', 
                $line = 35, $out += $escape(policy.startTime), $out += '"/> <label>至</label> <input name="endTime" type="text" class="datepicker" style="width:100px" value="', 
                $line = 37, $out += $escape(policy.endTime), $out += '"/> </div> </td> <td> ', $line = 41, 
                $each(policy.costMoneyList, function(cost, j) {
                    $out += ' <div data-index="', $line = 42, $out += $escape(j + 1), $out += '" class="clearfix div-', 
                    $line = 42, $out += $escape(j + 1), $out += '" style="margin-bottom:3px"> <input name="costMoneyStart" type="text" style="width:100px" value="', 
                    $line = 43, $out += $escape(cost.costMoneyStart), $out += '" maxlength="6" /> <label>至</label> <input name="costMoneyEnd" type="text" style="width:100px" value="', 
                    $line = 45, $out += $escape(cost.costMoneyEnd), $out += '" maxlength="6" /> <label class="priceArea" style="float:right"> <button data-entity-id="', 
                    $line = 47, $out += $escape(cost.id), $out += '" class="btn btn-success btn-sm btn-white ', 
                    $line = 47, 0 == j ? ($out += "add", $line = 47) : ($out += "del", $line = 47), 
                    $out += '"> <i class="ace-icon fa ', $line = 48, 0 == j ? ($out += "fa-plus", $line = 48) : ($out += "fa-minus", 
                    $line = 48), $out += ' bigger-110 icon-only"></i> </button> </label> </div> ', $line = 52;
                }), $out += " </td> <td> ", $line = 55, $each(policy.costMoneyList, function(cost, j) {
                    $out += ' <div data-index="', $line = 56, $out += $escape(j + 1), $out += '" class="clearfix div-', 
                    $line = 56, $out += $escape(j + 1), $out += '" style="margin-bottom:3px"> <input name="guideRate" type="text" value="', 
                    $line = 57, $out += $escape($helpers.toFixed(100 * cost.guideRate)), $out += '" maxlength="4" /> </div> ', 
                    $line = 59;
                }), $out += " </td> <td> ", $line = 62, $each(policy.costMoneyList, function(cost, j) {
                    $out += ' <div data-index="', $line = 63, $out += $escape(j + 1), $out += '" class="clearfix div-', 
                    $line = 63, $out += $escape(j + 1), $out += '" style="margin-bottom:3px"> <input name="travelAgencyRate" type="text" value="', 
                    $line = 64, $out += $escape($helpers.toFixed(100 * cost.travelAgencyRate)), $out += '" maxlength="4" /> </div> ', 
                    $line = 66;
                }), $out += ' </td> <td style="width:70px"> <button data-entity-id="" class="btn btn-xs btn-danger btn-shop-policy-delete"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </button> </td> </tr> ', 
                $line = 75;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-shop-policy"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 shopPolicyContainer globalAdd">\r\n	<form class="form-horizontal policyForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group guideInterval">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class="widget-box ui-sortable-handle">\r\n					<div class="widget-header">\r\n						<h5 class="widget-title">\r\n							<i class="ace-icon fa fa-shopping-cart"></i>\r\n							政策列表\r\n						</h5>\r\n						<div class="widget-toolbar no-border">\r\n							<a href="javascript:void(0)" class="btn-shop-policy-add">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增\r\n							</a>\r\n						</div>\r\n					</div>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover shopPolicyList"> \r\n								<thead>\r\n									<tr>\r\n										<th style="width:240px;">时间范围</th>\r\n										<th style="width:300px;">消费金额(元)</th>\r\n										<th>导游返佣(%)</th>\r\n										<th>旅行社返佣(%)</th>\r\n										<th style="width:90px;">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each policyData as policy i}}\r\n										<tr class="timeArea">\r\n										<td data-index="{{i+1}}" class="clearfix div-{{i+1}}" style="margin-bottom:3px">\r\n											<div>\r\n												<input name="startTime" type="text" class="datepicker" style="width:100px" value="{{policy.startTime}}"/>\r\n												<label>至</label>\r\n												<input name="endTime" type="text" class="datepicker" style="width:100px" value="{{policy.endTime}}"/>\r\n											</div>\r\n										</td>\r\n										<td>\r\n											{{each policy.costMoneyList as cost j}}\r\n											<div data-index="{{j+1}}" class="clearfix div-{{j+1}}" style="margin-bottom:3px">\r\n												<input name="costMoneyStart" type="text" style="width:100px" value="{{cost.costMoneyStart}}" maxlength="6" />\r\n												<label>至</label>\r\n												<input name="costMoneyEnd" type="text" style="width:100px" value="{{cost.costMoneyEnd}}" maxlength="6" />\r\n												<label class="priceArea" style="float:right">\r\n													<button data-entity-id="{{cost.id}}" class="btn btn-success btn-sm btn-white {{if j == 0}}add{{else}}del{{/if}}">\r\n														<i class="ace-icon fa {{if j == 0}}fa-plus{{else}}fa-minus{{/if}} bigger-110 icon-only"></i>\r\n													</button>\r\n												</label>\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td>\r\n											{{each policy.costMoneyList as cost j}}\r\n											<div data-index="{{j+1}}" class="clearfix div-{{j+1}}" style="margin-bottom:3px">\r\n												<input name="guideRate" type="text" value="{{cost.guideRate*100 | toFixed}}" maxlength="4" />\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td>\r\n											{{each policy.costMoneyList as cost j}}\r\n											<div data-index="{{j+1}}" class="clearfix div-{{j+1}}" style="margin-bottom:3px">\r\n												<input name="travelAgencyRate" type="text" value="{{cost.travelAgencyRate*100 | toFixed}}" maxlength="4" />\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td style="width:70px">\r\n											<button data-entity-id="" class="btn btn-xs btn-danger btn-shop-policy-delete">\r\n												<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n											</button>\r\n											\r\n										</td>\r\n										</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-shop-policy">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});