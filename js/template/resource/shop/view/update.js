/*TMODJS:{"debug":true,"version":151,"md5":"cee355c61d559ccf8aa3763d27974a86"}*/
define(function(require) {
    return require("../../../template")("resource/shop/view/update", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, shop = $data.shop, $each = $utils.$each, $out = ($data.shopPolicy, 
            $data.i, "");
            return $out += '<div class="col-xs-12 updateShopContainer globalAdd"> <form class="form-horizontal shopMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">1</span> <label class="title-size middle">商家主体信息</label> </h5> <input type="hidden" name="id" value="', 
            $line = 8, $out += $escape(shop.id), $out += '"> <div class="widget-body"> <div class="widget-main widget-mainFrist"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>商家名称:</label> <div class="col-sm-3"> <input type="text" name="name" value="', 
            $line = 14, $out += $escape(shop.name), $out += '" class="col-sm-12" maxlength="100"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary"></span>启用标志:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px;margin-top: -6px"> <label> <input ', 
            $line = 19, 1 == shop.status && ($out += 'checked="checked"', $line = 19), $out += ' type="checkbox" class="ace shop-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" value="', 
            $line = 29, $out += $escape(shop.managerName), $out += '" class="col-sm-12" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" value="', 
            $line = 33, $out += $escape(shop.mobileNumber), $out += '" class="col-sm-12" maxlength="11"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" value="', 
            $line = 39, $out += $escape(shop.telNumber), $out += '" maxlength="20"/> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" value="', 
            $line = 44, $out += $escape(shop.faxNumber), $out += '" maxlength="20"/> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">人数返佣(元/人):</label> <div class="col-sm-3"> <input type="text" name="customerRebateMoney" class="col-sm-12" value="', 
            $line = 50, $out += $escape(shop.customerRebateMoney), $out += '" maxlength="9"> </div> <label class="col-sm-1 control-label no-padding-right" style="padding-left: 0px!important;">停车返佣(元/辆):</label> <div class="col-sm-3"> <input type="text" name="parkingRebateMoney" class="col-sm-12" value="', 
            $line = 54, $out += $escape(shop.parkingRebateMoney), $out += '" maxlength="9"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">商家所在省市:</label> <div class="col-sm-8"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" value="', 
            $line = 74, $out += $escape(shop.street), $out += '" class="col-sm-12 addressMinute" placeholder="请输入街道地址" maxlength="100"/> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">商家简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength="500">', 
            $line = 80, $out += $escape(shop.remark), $out += '</textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal shopPolicyForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="title-size middle">政策列表</label> <a href="javascript:void(0)" class="btn-shop-standard-add"> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover shopStandardList"style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border"><span class="necessary">*</span>商品名称</th> <th class="table-border" width="100"><span class="necessary">*</span>针对客源</th> <th class="table-border" width="80">购物政策</th> <th class="table-border">备注</th> <th class="table-border" width="60">操作</th> </tr> </thead> <tbody> ', 
            $line = 114, $each(shop.shopPolicyList, function(shopPolicy, i) {
                $out += ' <tr data-entity-id="', $line = 115, $out += $escape(shopPolicy.id), $out += '"> <td> <input name="name" class="col-sm-12" value="', 
                $line = 117, $out += $escape(shopPolicy.name), $out += '" type="text" maxlength="100"/> </td> <td> <select name="customerType" class="col-sm-12"> <option value="0" ', 
                $line = 121, 0 == shopPolicy.customerType && ($out += ' selected="selected"', $line = 121), 
                $out += '>散客</option> <option value="1" ', $line = 122, 1 == shopPolicy.customerType && ($out += ' selected="selected"', 
                $line = 122), $out += '>团体</option> </select> </td> <td><button data-entity-id="" class="btn btn-xs btn-success btn-shop-rate-add"><i class="ace-icon fa fa-recorder bigger-240"></i>添加政策</button><input hidden-index="', 
                $line = 125, $out += $escape(i + 1), $out += '" type="hidden" name="policyInput" value="" /></td> <td><input name="remark" class="col-sm-12" value="', 
                $line = 126, $out += $escape(shopPolicy.remark), $out += '" type="text" maxlength="1000"/></td> <td style="width:70px"> <a data-entiy-id="', 
                $line = 128, $out += $escape(shopPolicy.id), $out += '" class="cursor btn-shop-standard-delete"> 删除 </a> </td> </tr> ', 
                $line = 133;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-shop guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 updateShopContainer globalAdd">\r\n	<form class="form-horizontal shopMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5 >\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="title-size middle">商家主体信息</label>\r\n				</h5>\r\n			<input type="hidden" name="id" value="{{shop.id}}">\r\n			<div class="widget-body">\r\n				<div class="widget-main widget-mainFrist">\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>商家名称:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="name" value="{{shop.name}}" class="col-sm-12" maxlength="100">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary"></span>启用标志:</label>\r\n						<div class="col-sm-2 checkbox" style="margin-left:-10px;margin-top: -6px">\r\n							<label>\r\n								<input {{if shop.status == 1}}checked="checked"{{/if}} type="checkbox" class="ace shop-status" value="1">\r\n								<span class="lbl">\r\n									启用\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label>\r\n						<div class="col-sm-3"> \r\n							<input type="text" name="managerName" value="{{shop.managerName}}" class="col-sm-12" maxlength="32">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="mobileNumber" value="{{shop.mobileNumber}}" class="col-sm-12" maxlength="11">\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="telNumber" class="col-sm-12" value="{{shop.telNumber}}" maxlength="20"/>\r\n						</div>\r\n\r\n						<label class="col-sm-1 control-label no-padding-right">传真号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="faxNumber" class="col-sm-12" value="{{shop.faxNumber}}" maxlength="20"/>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">人数返佣(元/人):</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="customerRebateMoney" class="col-sm-12" value="{{shop.customerRebateMoney}}" maxlength="9">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right" style="padding-left: 0px!important;">停车返佣(元/辆):</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="parkingRebateMoney" class="col-sm-12" value="{{shop.parkingRebateMoney}}" maxlength="9">\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">商家所在省市:</label>\r\n						<div class="col-sm-8">\r\n							<select name="provinceId" style="margin-right:3px">\r\n								 <option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="cityId"  style="margin-right:3px">\r\n								 <option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="districtId">\r\n								 <option selected="selected" value="">未选择</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n						<div class="col-sm-6">\r\n							<input type="text" name="street" value="{{shop.street}}" class="col-sm-12 addressMinute" placeholder="请输入街道地址" maxlength="100"/>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">商家简介:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="remark" class="col-sm-12"  maxlength="500">{{shop.remark}}</textarea>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<form class="form-horizontal shopPolicyForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">2</span>\r\n							<label class="title-size middle">政策列表</label>\r\n							<a href="javascript:void(0)" class="btn-shop-standard-add">\r\n								<button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;">\r\n									<i class="ace-icon fa fa-plus"></i>\r\n									新增\r\n								</button>\r\n							</a>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover shopStandardList"style="border: 1px solid #ccc">\r\n								<thead>\r\n									<tr>\r\n										<th  class="table-border"><span class="necessary">*</span>商品名称</th>\r\n										<th  class="table-border" width="100"><span class="necessary">*</span>针对客源</th>\r\n										<th  class="table-border" width="80">购物政策</th>\r\n										<th  class="table-border">备注</th>\r\n										<th  class="table-border" width="60">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>   \r\n									{{each shop.shopPolicyList as shopPolicy i}}\r\n										<tr data-entity-id="{{shopPolicy.id}}">\r\n											<td>\r\n												<input name="name" class="col-sm-12" value="{{shopPolicy.name}}" type="text" maxlength="100"/>\r\n											</td>\r\n											<td>\r\n												<select name="customerType" class="col-sm-12">\r\n													<option value="0" {{if shopPolicy.customerType == 0}} selected="selected"{{/if}}>散客</option>\r\n													<option value="1" {{if shopPolicy.customerType == 1}} selected="selected"{{/if}}>团体</option>\r\n												</select>\r\n											</td>\r\n											<td><button data-entity-id="" class="btn btn-xs btn-success btn-shop-rate-add"><i class="ace-icon fa fa-recorder bigger-240"></i>添加政策</button><input hidden-index="{{i+1}}" type="hidden" name="policyInput" value="" /></td>\r\n											<td><input name="remark" class="col-sm-12" value="{{shopPolicy.remark}}" type="text" maxlength="1000"/></td>\r\n											<td style="width:70px">\r\n												<a data-entiy-id="{{shopPolicy.id}}" class="cursor btn-shop-standard-delete">\r\n												删除\r\n												</a>\r\n											</td>\r\n										</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-shop guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});