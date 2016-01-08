/*TMODJS:{"debug":true,"version":112,"md5":"e00ccac231c760f4caad8203dcf51493"}*/
define(function(require) {
    return require("../../../template")("resource/shop/view/updateShopPolicy", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, policyData = $data.policyData, $escape = ($data.policy, 
            $data.i, $utils.$escape), $out = ($data.cost, $data.j, "");
            return $out += '<div class="col-sm-12 shopPolicyContainer globalAdd"> <form class="form-horizontal T-policyForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group guideInterval"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <label class="middle title-size">商品列表</label> <button class="btn btn-sm btn-success T-item-add" style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover table-fixed"> <thead> <tr> <th class="th-border" style="width:240px;">时间范围</th> <th class="th-border" style="width:300px;">消费金额(元)</th> <th class="th-border">导游返佣(%)</th> <th class="th-border">旅行社返佣(%)</th> <th class="th-border" style="width:80px;">操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 26, $each(policyData, function(policy, i) {
                $out += ' <tr class="timeArea" data-entity-id="', $line = 27, $out += $escape(policy.id), 
                $out += '"> <td data-index="', $line = 28, $out += $escape(i + 1), $out += '" class="clearfix div-', 
                $line = 28, $out += $escape(i + 1), $out += '" style="margin-bottom:2px"> <div> <input name="startTime" type="text" class="T-date datepicker col-sm-5" value="', 
                $line = 30, $out += $escape($helpers.dateFormat(policy.startTime, "yyyy-MM-dd")), 
                $out += '"/> <label class="priceArea col-sm-2 center">&nbsp;至&nbsp;</label> <input name="endTime" type="text" class="T-date datepicker col-sm-5" value="', 
                $line = 32, $out += $escape($helpers.dateFormat(policy.endTime, "yyyy-MM-dd")), 
                $out += '"/> </div> </td> <td> ', $line = 36, $each(policy.costMoneyList, function(cost, j) {
                    $out += ' <div data-index="', $line = 37, $out += $escape(j + 1), $out += '" class="clearfix div-', 
                    $line = 37, $out += $escape(j + 1), $out += '" style="margin-bottom:2px"> <input name="costMoneyStart" type="text" style="width:100px" value="', 
                    $line = 38, $out += $escape(cost.costMoneyStart), $out += '" data-entity-id="', 
                    $line = 38, $out += $escape(cost.id), $out += '" maxlength="9" class="F-float F-money" /> <label>&nbsp;至&nbsp;</label> <input name="costMoneyEnd" type="text" value="', 
                    $line = 40, $out += $escape(cost.costMoneyEnd), $out += '" maxlength="9" style="width:100px" /> <label class="priceArea" style="margin-left:10px;"> <button data-entity-id="', 
                    $line = 42, $out += $escape(cost.id), $out += '" class="btn T-action ', $line = 42, 
                    0 == j ? ($out += "btn-success", $line = 42) : ($out += "btn-danger", $line = 42), 
                    $out += " btn-sm btn-white ", $line = 42, 0 == j ? ($out += "T-add add", $line = 42) : ($out += "T-del", 
                    $line = 42), $out += '"> <i class="ace-icon fa ', $line = 43, 0 == j ? ($out += "fa-plus", 
                    $line = 43) : ($out += "fa-minus", $line = 43), $out += ' bigger-110 icon-only"></i> </button> </label> </div> ', 
                    $line = 47;
                }), $out += " </td> <td> ", $line = 50, $each(policy.costMoneyList, function(cost, j) {
                    $out += ' <div data-index="', $line = 51, $out += $escape(j + 1), $out += '" class="clearfix div-', 
                    $line = 51, $out += $escape(j + 1), $out += '" style="margin-bottom:7px"> <input name="guideRate" class="form-control" type="text" value="', 
                    $line = 52, $out += $escape($helpers.toFixed(100 * cost.guideRate)), $out += '" maxlength="5"/> </div> ', 
                    $line = 54;
                }), $out += " </td> <td> ", $line = 57, $each(policy.costMoneyList, function(cost, j) {
                    $out += ' <div data-index="', $line = 58, $out += $escape(j + 1), $out += '" class="clearfix div-', 
                    $line = 58, $out += $escape(j + 1), $out += '" style="margin-bottom:7px"> <input name="travelAgencyRate" class="form-control" type="text" value="', 
                    $line = 59, $out += $escape($helpers.toFixed(100 * cost.travelAgencyRate)), $out += '" maxlength="5"/> </div> ', 
                    $line = 61;
                }), $out += ' </td> <td style="width:70px"> <a data-entity-id="', $line = 64, $out += $escape(policy.id), 
                $out += '" class="cursor T-action T-delete"> 删除 </a> </td> </tr> ', $line = 69;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-submit-shop-policy guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 shopPolicyContainer globalAdd">\r\n	<form class="form-horizontal T-policyForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group guideInterval">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<label class="middle title-size">商品列表</label>\r\n							<button class="btn btn-sm btn-success T-item-add" style="margin-left: 20px;">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增\r\n							</button>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover table-fixed">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border" style="width:240px;">时间范围</th>\r\n										<th class="th-border" style="width:300px;">消费金额(元)</th>\r\n										<th class="th-border">导游返佣(%)</th>\r\n										<th class="th-border">旅行社返佣(%)</th>\r\n										<th class="th-border"  style="width:80px;">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="T-list">\r\n									{{each policyData as policy i}}\r\n										<tr class="timeArea" data-entity-id="{{policy.id}}">\r\n										<td data-index="{{i+1}}" class="clearfix div-{{i+1}}" style="margin-bottom:2px">\r\n											<div>\r\n												<input name="startTime" type="text" class="T-date datepicker col-sm-5" value="{{policy.startTime | dateFormat:\'yyyy-MM-dd\'}}"/>\r\n												<label class="priceArea col-sm-2 center">&nbsp;至&nbsp;</label>\r\n												<input name="endTime" type="text" class="T-date datepicker col-sm-5" value="{{policy.endTime | dateFormat:\'yyyy-MM-dd\'}}"/>\r\n											</div>\r\n										</td>\r\n										<td>\r\n											{{each policy.costMoneyList as cost j}}\r\n											<div data-index="{{j+1}}" class="clearfix div-{{j+1}}" style="margin-bottom:2px">\r\n												<input name="costMoneyStart" type="text" style="width:100px" value="{{cost.costMoneyStart}}" data-entity-id="{{cost.id}}" maxlength="9" class="F-float F-money" />\r\n												<label>&nbsp;至&nbsp;</label>\r\n												<input name="costMoneyEnd" type="text" value="{{cost.costMoneyEnd}}" maxlength="9" style="width:100px" />\r\n												<label class="priceArea" style="margin-left:10px;">\r\n													<button data-entity-id="{{cost.id}}" class="btn T-action {{if j==0}}btn-success{{else}}btn-danger{{/if}} btn-sm btn-white {{if j == 0}}T-add add{{else}}T-del{{/if}}">\r\n														<i class="ace-icon fa {{if j == 0}}fa-plus{{else}}fa-minus{{/if}} bigger-110 icon-only"></i>\r\n													</button>\r\n												</label>\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td>\r\n											{{each policy.costMoneyList as cost j}}\r\n											<div data-index="{{j+1}}" class="clearfix div-{{j+1}}" style="margin-bottom:7px">\r\n												<input name="guideRate" class="form-control" type="text" value="{{cost.guideRate*100 | toFixed}}"  maxlength="5"/>\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td>\r\n											{{each policy.costMoneyList as cost j}}\r\n											<div data-index="{{j+1}}" class="clearfix div-{{j+1}}" style="margin-bottom:7px">\r\n												<input name="travelAgencyRate" class="form-control" type="text" value="{{cost.travelAgencyRate*100 | toFixed}}"  maxlength="5"/>\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td style="width:70px">\r\n											<a data-entity-id="{{policy.id}}" class="cursor T-action T-delete">\r\n												删除\r\n											</a>\r\n										</td>\r\n										</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary T-submit-shop-policy guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});