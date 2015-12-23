/*TMODJS:{"debug":true,"version":127,"md5":"f618a423485ddf19101671900bd207b8"}*/
define(function(require) {
    return require("../../../template")("resource/restaurant/view/update", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, restaurant = $data.restaurant, $each = $utils.$each, $out = ($data.restaurantStandard, 
            $data.$index, "");
            return $out += '<div class="col-xs-12 globalAdd T-update-container"> <form class="form-horizontal restaurantMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <input name="id" type="hidden" value="', 
            $line = 4, $out += $escape(restaurant.id), $out += '"/> <div class=" ui-sortable-handle"> <div class=""> <h5 class="widget-title"> <span class="badge badge-primary">1</span> <label class="middle title-size navInformation">餐厅主体信息</label> </h5> </div> <div class="widget-body"> <div class="widget-main widget-mainFrist"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>餐厅名称：</label> <div class="col-sm-3"> <input type="text" name="name" maxlength="32" class="col-sm-12" value="', 
            $line = 17, $out += $escape(restaurant.name), $out += '"> </div> <label class="col-sm-1 control-label no-padding-right">是否启用:</label> <div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px"> <label> <input ', 
            $line = 22, 1 == restaurant.status && ($out += 'checked="checked"', $line = 22), 
            $out += ' type="checkbox" class="ace restaurant-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" value="', 
            $line = 32, $out += $escape(restaurant.managerName), $out += '" class="col-sm-12" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" value="', 
            $line = 36, $out += $escape(restaurant.mobileNumber), $out += '" class="col-sm-12" maxlength="11"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" value="', 
            $line = 42, $out += $escape(restaurant.telNumber), $out += '" maxlength="20"/> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" value="', 
            $line = 46, $out += $escape(restaurant.faxNumber), $out += '" maxlength="20"/> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">所在地区:</label> <div class="col-sm-8"> <select class="col-sm-2" name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select class="col-sm-2" name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select class="col-sm-2" name="districtId" > <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">详细地址:</label> <div class="col-sm-6"> <input type="text" name="street" class="col-sm-12 addressMinute" value="', 
            $line = 67, $out += $escape(restaurant.street), $out += '" placeholder="请输入街道地址" maxlength="100"/> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">餐厅设施:</label> <div class="col-sm-6"> <input type="text" name="facility" maxlength="500" value="', 
            $line = 74, $out += $escape(restaurant.facility), $out += '" class="col-sm-12 addressMinute"> </div> </div>    <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">餐厅简介:</label> <div class="col-sm-8"> <textarea class="form-control" maxlength="1000" name="remark" class="col-sm-12" >', 
            $line = 83, $out += $escape(restaurant.remark), $out += '</textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal form-horizontal restaurantMainForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 class=""> <span class="badge badge-primary">2</span> <label class="middle title-size navInformation">餐标列表</label> <a href="javascript:void(0)" class="btn-restaurant-standard-add"> <button class="btn btn-sm btn-success T-standard-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover restaurantStandardList" style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border">用餐类型</th> <th width="200" class="table-border"><span class="necessary">*</span>餐标<span style="font-size:12px;">(元/人)</span></th> <th width="200" class="table-border">菜单</th> <th class="table-border">备注</th> <th class="table-border" style="width: 60px">操作</th> </tr> </thead> <tbody> ', 
            $line = 118, $each(restaurant.restaurantStandardList, function(restaurantStandard) {
                $out += ' <tr data-id="', $line = 119, $out += $escape(restaurantStandard.id), $out += '"> <td> <select name="type"> <option ', 
                $line = 122, "早餐" == restaurantStandard.type && ($out += ' selected="selected" ', 
                $line = 122), $out += ' value="早餐">早餐</option> <option ', $line = 123, "午餐" == restaurantStandard.type && ($out += ' selected="selected" ', 
                $line = 123), $out += ' value="午餐">午餐</option> <option ', $line = 124, "晚餐" == restaurantStandard.type && ($out += ' selected="selected" ', 
                $line = 124), $out += ' value="晚餐">晚餐</option> </select> </td> <td> <input name="price" value="', 
                $line = 128, $out += $escape(restaurantStandard.price), $out += '" class="col-sm-12" type="text" maxlength="9"> </td> <td> <input name="menuList" value="', 
                $line = 132, $out += $escape(restaurantStandard.menuList), $out += '" maxlength="500" class="col-sm-12" type="text"> </td> <td> <input name="remark" value="', 
                $line = 135, $out += $escape(restaurantStandard.remark), $out += '" maxlength="1000" class="col-sm-12" type="text"> </td> <td style="width:90px"> <a class="T-standard-delete">删除</a> </td> </tr> ', 
                $line = 141;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-saveUpdate guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 globalAdd T-update-container">\r\n	<form class="form-horizontal restaurantMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n	\r\n		<input name="id" type="hidden" value="{{restaurant.id}}"/>\r\n		<div class=" ui-sortable-handle">\r\n			<div class="">\r\n				<h5 class="widget-title">\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="middle title-size navInformation">餐厅主体信息</label>\r\n				</h5>\r\n			</div>\r\n			<div class="widget-body">\r\n				<div class="widget-main widget-mainFrist">\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>餐厅名称：</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="name" maxlength="32" class="col-sm-12" value="{{restaurant.name}}">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">是否启用:</label>\r\n						<div class="col-sm-3 checkbox" style="margin-left:-10px;margin-top: -6px">\r\n							<label>\r\n								<input {{if restaurant.status == 1}}checked="checked"{{/if}} type="checkbox" class="ace restaurant-status" value="1">\r\n								<span class="lbl">\r\n									启用\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>联系人:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="managerName" value="{{restaurant.managerName}}" class="col-sm-12" maxlength="32">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>联系电话:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="mobileNumber" value="{{restaurant.mobileNumber}}" class="col-sm-12" maxlength="11">\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="telNumber" class="col-sm-12" value="{{restaurant.telNumber}}" maxlength="20"/>\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">传真号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="faxNumber" class="col-sm-12" value="{{restaurant.faxNumber}}"  maxlength="20"/>\r\n						</div>\r\n					</div>\r\n\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">所在地区:</label>\r\n						<div class="col-sm-8">\r\n							<select class="col-sm-2" name="provinceId" style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select class="col-sm-2" name="cityId"  style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select class="col-sm-2" name="districtId" >\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">详细地址:</label>\r\n						<div class="col-sm-6">\r\n							<input type="text" name="street" class="col-sm-12 addressMinute" value="{{restaurant.street}}" placeholder="请输入街道地址" maxlength="100"/>\r\n						</div>\r\n					</div>  \r\n					\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">餐厅设施:</label>\r\n						<div class="col-sm-6">\r\n							<input type="text" name="facility" maxlength="500" value="{{restaurant.facility}}" class="col-sm-12 addressMinute">\r\n						</div>\r\n					</div>\r\n					<!--<div class="form-group guideInterval">-->\r\n						<!-- -->\r\n					<!--</div>    -->\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">餐厅简介:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" maxlength="1000" name="remark" class="col-sm-12" >{{restaurant.remark}}</textarea>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<form class="form-horizontal form-horizontal restaurantMainForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 class="">\r\n							<span class="badge badge-primary">2</span>\r\n							<label class="middle title-size navInformation">餐标列表</label>\r\n\r\n							<a href="javascript:void(0)" class="btn-restaurant-standard-add">\r\n								<button class="btn btn-sm btn-success T-standard-add" style="margin-left: 20px">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增\r\n								</button>\r\n							</a>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover restaurantStandardList" style="border: 1px solid #ccc">\r\n								<thead>\r\n									<tr>\r\n										<th class="table-border">用餐类型</th>\r\n										<th width="200" class="table-border"><span class="necessary">*</span>餐标<span style="font-size:12px;">(元/人)</span></th>\r\n										<th width="200" class="table-border">菜单</th>\r\n										<th class="table-border">备注</th>\r\n										<th class="table-border" style="width: 60px">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each restaurant.restaurantStandardList as restaurantStandard}}\r\n										<tr data-id="{{restaurantStandard.id}}">\r\n											<td>\r\n												<select name="type">\r\n													<option {{if restaurantStandard.type == \'早餐\'}} selected="selected" {{/if}} value="早餐">早餐</option>\r\n													<option {{if restaurantStandard.type == \'午餐\'}} selected="selected" {{/if}} value="午餐">午餐</option>\r\n													<option {{if restaurantStandard.type == \'晚餐\'}} selected="selected" {{/if}} value="晚餐">晚餐</option>\r\n												</select>\r\n											</td>\r\n									 		<td>\r\n												<input name="price" value="{{restaurantStandard.price}}" class="col-sm-12" type="text" maxlength="9">\r\n\r\n											</td>\r\n											<td>\r\n												<input name="menuList" value="{{restaurantStandard.menuList}}" maxlength="500" class="col-sm-12" type="text">\r\n											</td>\r\n											<td>\r\n												<input name="remark" value="{{restaurantStandard.remark}}" maxlength="1000" class="col-sm-12" type="text">\r\n											</td>\r\n											<td style="width:90px">\r\n												<a class="T-standard-delete">删除</a>\r\n											</td>\r\n										</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary T-saveUpdate guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});