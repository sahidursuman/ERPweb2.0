/*TMODJS:{"debug":true,"version":27,"md5":"18e5d2c1d3ae8346b5c8e1e5fb083246"}*/
define(function(require) {
    return require("../../../template")("resource/restaurant/view/update", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, restaurant = $data.restaurant, $each = $utils.$each, $out = ($data.restaurantStandard, 
            $data.$index, $data.price, $data.i, "");
            return $out += '<div class="col-xs-12 updateRestaurantContainer"> <form class="form-horizontal restaurantMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <input name="id" type="hidden" value="', 
            $line = 4, $out += $escape(restaurant.id), $out += '"/> <div class=" ui-sortable-handle"> <div class=""> <h5 class="widget-title"> <span class="badge badge-primary">1</span> <label class="middle title-size">餐厅主体信息</label> </h5> </div> <div class="widget-body"> <div class="widget-main"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>餐厅名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" value="', 
            $line = 17, $out += $escape(restaurant.name), $out += '" maxlength="32"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" value="', 
            $line = 23, $out += $escape(restaurant.managerName), $out += '" class="col-sm-12" maxlength="11"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" value="', 
            $line = 27, $out += $escape(restaurant.mobileNumber), $out += '" class="col-sm-12" maxlength="11"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" value="', 
            $line = 33, $out += $escape(restaurant.telNumber), $out += '" maxlength="20" /> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" value="', 
            $line = 37, $out += $escape(restaurant.faxNumber), $out += '" maxlength="20" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">餐厅设施:</label> <div class="col-sm-3"> <input type="text" name="facility" value="', 
            $line = 43, $out += $escape(restaurant.facility), $out += '" class="col-sm-12" maxlength="500"> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">餐厅所在省市:</label> <div class="col-sm-8"> <select name="provinceId" class="col-sm-3" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" class="col-sm-3" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" class="col-sm-3"> <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12" value="', 
            $line = 63, $out += $escape(restaurant.street), $out += '" placeholder="请输入街道地址" maxlength="100" /> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px"> <label> <input ', 
            $line = 70, 1 == restaurant.status && ($out += 'checked="checked"', $line = 70), 
            $out += ' type="checkbox" class="ace restaurant-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">餐厅简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" maxlength=\'500\'>', 
            $line = 80, $out += $escape(restaurant.remark), $out += '</textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal form-horizontal restaurantMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> 餐标列表 <a href="javascript:void(0)" class="btn-restaurant-standard-add"> <button class="btn btn-sm btn-success btn-restaurant-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover restaurantStandardList"> <thead> <tr> <th class="table-border">用餐类型</th> <th class="table-border"><span class="necessary">*</span>餐标名称</th> <th class="table-border">菜单列表</th> <th class="table-border">时间范围</th> <th class="table-border"><span class="necessary">*</span>每位价格</th> <th class="table-border">备注</th> <th class="table-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 120, $each(restaurant.restaurantStandardList, function(restaurantStandard) {
                $out += ' <tr data-entity-id="', $line = 121, $out += $escape(restaurantStandard.id), 
                $out += '"> <td> <select name="type"> <option ', $line = 124, "早餐" == restaurantStandard.type && ($out += ' selected="selected" ', 
                $line = 124), $out += ' value="早餐">早餐</option> <option ', $line = 125, "午餐" == restaurantStandard.type && ($out += ' selected="selected" ', 
                $line = 125), $out += ' value="午餐">午餐</option> <option ', $line = 126, "晚餐" == restaurantStandard.type && ($out += ' selected="selected" ', 
                $line = 126), $out += ' value="晚餐">晚餐</option> </select> </td> <td> <input name="typeName" value="', 
                $line = 130, $out += $escape(restaurantStandard.typeName), $out += '" type="text"> </td> <td> <input name="menuList" value="', 
                $line = 133, $out += $escape(restaurantStandard.menuList), $out += '" type="text"> </td> <td class="time"> ', 
                $line = 136, $each(restaurantStandard.priceList, function(price, i) {
                    $out += ' <div data-index="', $line = 137, $out += $escape(i + 1), $out += '" data-entity-id="', 
                    $line = 137, $out += $escape(price.id), $out += '" class="clearfix ', $line = 137, 
                    i > 0 && ($out += "appendDiv", $line = 137), $out += " div-", $line = 137, $out += $escape(i + 1), 
                    $out += '" style="margin-top:2px"> <input name="startTime" type="text" class="date-picker" style="width:100px" value="', 
                    $line = 138, $out += $escape($helpers.dateFormat(price.startTime, "yyyy-MM-dd")), 
                    $out += '"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" class="date-picker" style="width:100px" value="', 
                    $line = 138, $out += $escape($helpers.dateFormat(price.endTime, "yyyy-MM-dd")), 
                    $out += '"/> ', $line = 139, 0 == i ? ($out += ' <label class="timeArea" style="float:right"> <button class="btn btn-success btn-sm btn-white add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> ', 
                    $line = 145) : ($out += ' <label class="timeArea" style="float:right"> <button class="btn btn-danger btn-sm btn-white delete"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> </label> ', 
                    $line = 151), $out += " </div> ", $line = 153;
                }), $out += " </td> <td> ", $line = 156, $each(restaurantStandard.priceList, function(price, i) {
                    $out += ' <div data-index="', $line = 157, $out += $escape(i + 1), $out += '" class="clearfix div-', 
                    $line = 157, $out += $escape(i + 1), $out += '" style="margin-top:2px"> <input name="contractPrice" type="text" value="', 
                    $line = 158, $out += $escape(price.contractPrice), $out += '"/><label>&nbsp;元</label> </div> ', 
                    $line = 160;
                }), $out += ' </td> <td> <input name="remark" value="', $line = 163, $out += $escape(restaurantStandard.remark), 
                $out += '" type="text"> </td> <td style="width:70px"> <a data-entiy-id="', $line = 166, 
                $out += $escape(restaurantStandard.id), $out += '" class="btn-restaurant-standard-delete">删除</a> </td> </tr> ', 
                $line = 169;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-restaurant"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 updateRestaurantContainer">\r\n	<form class="form-horizontal restaurantMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n	\r\n		<input name="id" type="hidden" value="{{restaurant.id}}"/>\r\n		<div class=" ui-sortable-handle">\r\n			<div class="">\r\n				<h5 class="widget-title">\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="middle title-size">餐厅主体信息</label>\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>餐厅名称:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="name" class="col-sm-12" value="{{restaurant.name}}" maxlength="32">\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="managerName" value="{{restaurant.managerName}}" class="col-sm-12" maxlength="11">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="mobileNumber" value="{{restaurant.mobileNumber}}" class="col-sm-12" maxlength="11">\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="telNumber" class="col-sm-12" value="{{restaurant.telNumber}}" maxlength="20" />\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">传真号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="faxNumber" class="col-sm-12" value="{{restaurant.faxNumber}}" maxlength="20" />\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">餐厅设施:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="facility" value="{{restaurant.facility}}" class="col-sm-12" maxlength="500">\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">餐厅所在省市:</label>\r\n						<div class="col-sm-8">\r\n							<select name="provinceId" class="col-sm-3" style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="cityId" class="col-sm-3"  style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="districtId" class="col-sm-3">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n						<div class="col-sm-6">\r\n							<input type="text" name="street" class="col-sm-12" value="{{restaurant.street}}" placeholder="请输入街道地址" maxlength="100" />\r\n						</div>\r\n					</div>  \r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">是否启用:</label>\r\n						<div class="col-sm-2 checkbox" style="margin-left:-10px">\r\n							<label>\r\n								<input {{if restaurant.status == 1}}checked="checked"{{/if}} type="checkbox" class="ace restaurant-status" value="1">\r\n								<span class="lbl">\r\n									启用\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>    \r\n					<div class="form-group">\r\n						<label class="col-sm-2 control-label no-padding-right">餐厅简介:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="remark" class="col-sm-12"  maxlength=\'500\'>{{restaurant.remark}}</textarea>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<form class="form-horizontal form-horizontal restaurantMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n\r\n						<h5 class="">\r\n							<span class="badge badge-primary">2</span>\r\n							餐标列表\r\n							<a href="javascript:void(0)" class="btn-restaurant-standard-add">\r\n								<button class="btn btn-sm btn-success btn-restaurant-add" style="margin-left: 20px">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增\r\n								</button>\r\n							</a>\r\n						</h5>\r\n\r\n\r\n\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover restaurantStandardList"> \r\n								<thead>\r\n									<tr>\r\n										<th class="table-border">用餐类型</th>\r\n										<th class="table-border"><span class="necessary">*</span>餐标名称</th>\r\n										<th class="table-border">菜单列表</th>\r\n										<th class="table-border">时间范围</th>\r\n										<th class="table-border"><span class="necessary">*</span>每位价格</th>\r\n										<th class="table-border">备注</th>\r\n										<th class="table-border">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each restaurant.restaurantStandardList as restaurantStandard}}\r\n										<tr data-entity-id="{{restaurantStandard.id}}">\r\n											<td>\r\n												<select name="type">\r\n													<option {{if restaurantStandard.type == \'早餐\'}} selected="selected" {{/if}} value="早餐">早餐</option>\r\n													<option {{if restaurantStandard.type == \'午餐\'}} selected="selected" {{/if}} value="午餐">午餐</option>\r\n													<option {{if restaurantStandard.type == \'晚餐\'}} selected="selected" {{/if}} value="晚餐">晚餐</option>\r\n												</select>\r\n											</td>  \r\n											<td>\r\n												<input name="typeName" value="{{restaurantStandard.typeName}}" type="text">\r\n											</td>\r\n											<td>\r\n												<input name="menuList" value="{{restaurantStandard.menuList}}" type="text">\r\n											</td>\r\n											<td class="time">\r\n												{{each restaurantStandard.priceList as price i}}\r\n												<div data-index="{{i+1}}" data-entity-id="{{price.id}}" class="clearfix {{if i > 0}}appendDiv{{/if}} div-{{i+1}}" style="margin-top:2px">\r\n													<input name="startTime" type="text" class="date-picker" style="width:100px" value="{{price.startTime | dateFormat:\'yyyy-MM-dd\'}}"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" class="date-picker" style="width:100px" value="{{price.endTime | dateFormat:\'yyyy-MM-dd\'}}"/>\r\n													{{if i == 0}}\r\n													<label class="timeArea" style="float:right">\r\n														<button class="btn btn-success btn-sm btn-white add">\r\n															<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n														</button>\r\n													</label>\r\n													{{else}}\r\n													<label class="timeArea" style="float:right">\r\n														<button class="btn btn-danger btn-sm btn-white delete">\r\n															<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n														</button>\r\n													</label>\r\n													{{/if}}\r\n												</div>\r\n												{{/each}}\r\n											</td>\r\n											<td>\r\n												{{each restaurantStandard.priceList as price i}}\r\n												<div data-index="{{i+1}}" class="clearfix div-{{i+1}}" style="margin-top:2px">\r\n													<input name="contractPrice" type="text" value="{{price.contractPrice}}"/><label>&nbsp;元</label>\r\n												</div>\r\n												{{/each}}\r\n											</td>\r\n											<td>\r\n												<input name="remark" value="{{restaurantStandard.remark}}" type="text">\r\n											</td>\r\n											<td style="width:70px">\r\n												<a data-entiy-id="{{restaurantStandard.id}}" class="btn-restaurant-standard-delete">删除</a>\r\n											</td>\r\n										</tr> \r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-restaurant">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});