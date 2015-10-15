/*TMODJS:{"debug":true,"version":86,"md5":"e558da95d44af780f22668386160acb4"}*/
define(function(require) {
    return require("../../../template")("resource/scenic/view/update", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, scenic = $data.scenic, $each = $utils.$each, $out = ($data.item, 
            $data.$index, $data.price, $data.i, "");
            return $out += '<div class="col-xs-12 updateScenicContainer globalAdd"> <form class="form-horizontal scenicMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false"> <div class=" ui-sortable-handle"> <h5> <span class="badge badge-primary">1</span> <label class="title-size middle">景区主体信息</label> </h5> <div class="widget-body"> <div class="widget-main"> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>景区名称:</label> <div class="col-sm-3"> <input type="text" name="name" class="col-sm-12" value="', 
            $line = 13, $out += $escape(scenic.name), $out += '" maxlength="100"> <input type="text" name="id" hidden="hidden" value="', 
            $line = 14, $out += $escape(scenic.id), $out += '"> </div> <label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label> <div class="col-sm-2 checkbox" style="margin-left:-10px;margin-top: -6px"> <label> <input ', 
            $line = 19, 1 == scenic.status && ($out += 'checked="checked"', $line = 19), $out += ' type="checkbox" class="ace scenic-status" value="1"> <span class="lbl"> 启用 </span> </label> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">联系人:</label> <div class="col-sm-3"> <input type="text" name="managerName" class="col-sm-12" value="', 
            $line = 29, $out += $escape(scenic.managerName), $out += '" maxlength="32"> </div> <label class="col-sm-1 control-label no-padding-right">联系电话:</label> <div class="col-sm-3"> <input type="text" name="mobileNumber" class="col-sm-12" value="', 
            $line = 33, $out += $escape(scenic.mobileNumber), $out += '" maxlength="11"> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">座机号码:</label> <div class="col-sm-3"> <input type="text" name="telNumber" class="col-sm-12" value="', 
            $line = 39, $out += $escape(scenic.telNumber), $out += '" maxlength="20"/> </div> <label class="col-sm-1 control-label no-padding-right">传真号码:</label> <div class="col-sm-3"> <input type="text" name="faxNumber" class="col-sm-12" value="', 
            $line = 43, $out += $escape(scenic.faxNumber), $out += '" maxlength="20"/> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">景区所在省市:</label> <div class="col-sm-8"> <select name="provinceId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="cityId" style="margin-right:3px"> <option selected="selected" value="">未选择</option> </select> <select name="districtId" > <option selected="selected" value="">未选择</option> </select> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">季节政策:</label> <div class="col-sm-6"> <input type="text" name="seasonPolicy" class="col-sm-12 addressMinute" placeholder="季节政策" value="', 
            $line = 63, $out += $escape(scenic.seasonPolicy), $out += '"/> </div> </div> <div class="form-group guideInterval"> <label class="col-sm-2 control-label no-padding-right">景区简介:</label> <div class="col-sm-8"> <textarea class="form-control" name="remark" class="col-sm-12" >', 
            $line = 69, $out += $escape(scenic.remark), $out += '</textarea> </div> </div> </div> </div> </div> </form> <form class="form-horizontal scenicProjectForm" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <h5 > <span class="badge badge-primary">2</span> <label class="title-size middle">项目列表</label> <a href="javascript:void(0)" class="btn-scenic-standard-add"> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </a> </h5> <div class="widget-body"> <div class="widget-main no-padding"> <table class="table table-striped table-bordered table-hover scenicItemStandardList" style="border: 1px solid #ccc"> <thead> <tr> <th class="table-border" width="170"><span class="necessary">*</span>收费项目</th> <th class="table-border" width="270"><span class="necessary">*</span>时间范围</th> <th class="table-border" width="160"><span class="necessary">*</span>单价(元)</th> <th class="table-border">备注</th> <th class="table-border" width="80">操作</th> </tr> </thead> <tbody> ', 
            $line = 103, $each(scenic.scenicItemList, function(item) {
                $out += ' <tr data-entity-id="', $line = 104, $out += $escape(item.id), $out += '"> <td><input name="name" type="text" value="', 
                $line = 105, $out += $escape(item.name), $out += '" maxlength="100"/></td> <td class="time"> ', 
                $line = 107, $each(item.priceList, function(price, i) {
                    $out += ' <div data-index="', $line = 108, $out += $escape(i + 1), $out += '" data-entity-id="', 
                    $line = 108, $out += $escape(price.id), $out += '" class="clearfix ', $line = 108, 
                    i > 0 && ($out += "appendDiv", $line = 108), $out += " div-", $line = 108, $out += $escape(i + 1), 
                    $out += '" style="margin-top:2px"> <input name="startTime" type="text" class="datepicker" style="width:100px" value="', 
                    $line = 109, $out += $escape($helpers.dateFormat(price.startTime, "yyyy-MM-dd")), 
                    $out += '"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" class="datepicker" style="width:100px" value="', 
                    $line = 109, $out += $escape($helpers.dateFormat(price.endTime, "yyyy-MM-dd")), 
                    $out += '"/> ', $line = 110, 0 == i ? ($out += ' <label class="timeArea" style="float:right"> <button class="btn btn-success btn-sm btn-white add"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </button> </label> ', 
                    $line = 116) : ($out += ' <label class="timeArea" style="float:right"> <button class="btn btn-danger btn-sm btn-white delete"> <i class="ace-icon fa fa-minus bigger-110 icon-only"></i> </button> </label> ', 
                    $line = 122), $out += " </div> ", $line = 124;
                }), $out += " </td> <td> ", $line = 127, $each(item.priceList, function(price, i) {
                    $out += ' <div data-index="', $line = 128, $out += $escape(i + 1), $out += '" class="clearfix div-', 
                    $line = 128, $out += $escape(i + 1), $out += '" style="margin-top:2px"> <input name="contractPrice" type="text" value="', 
                    $line = 129, $out += $escape(price.contractPrice), $out += '" maxlength="7"/> </div> ', 
                    $line = 131;
                }), $out += ' </td> <td> <input name="remark" type="text" style="width: 450px" value="', 
                $line = 134, $out += $escape(item.remark), $out += '" maxlength="1000"/> </td> <td style="width:70px"> <a class="btn-scenic-standard-delete">删除</a> </td> </tr> ', 
                $line = 140;
            }), $out += ' </tbody> </table> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-scenic guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-20"></div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 updateScenicContainer globalAdd">\r\n	<form class="form-horizontal scenicMainForm formOneList" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class=" ui-sortable-handle">\r\n				<h5>\r\n					<span class="badge badge-primary">1</span>\r\n					<label class="title-size middle">景区主体信息</label>\r\n				</h5>\r\n			<div class="widget-body">\r\n				<div class="widget-main">\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right"><span class="necessary">*</span>景区名称:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="name" class="col-sm-12" value="{{scenic.name}}" maxlength="100">\r\n							<input type="text" name="id" hidden="hidden" value="{{scenic.id}}">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right"><span class="necessary">*</span>是否启用:</label>\r\n						<div class="col-sm-2 checkbox" style="margin-left:-10px;margin-top: -6px">\r\n							<label>\r\n								<input {{if scenic.status == 1}}checked="checked"{{/if}} type="checkbox" class="ace scenic-status" value="1">\r\n								<span class="lbl">\r\n									启用\r\n								</span>\r\n							</label>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n					<label class="col-sm-2 control-label no-padding-right">联系人:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="managerName" class="col-sm-12" value="{{scenic.managerName}}" maxlength="32">\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">联系电话:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="mobileNumber" class="col-sm-12" value="{{scenic.mobileNumber}}" maxlength="11">\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">座机号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="telNumber" class="col-sm-12" value="{{scenic.telNumber}}" maxlength="20"/>\r\n						</div>\r\n						<label class="col-sm-1 control-label no-padding-right">传真号码:</label>\r\n						<div class="col-sm-3">\r\n							<input type="text" name="faxNumber" class="col-sm-12" value="{{scenic.faxNumber}}" maxlength="20"/>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">景区所在省市:</label>\r\n						<div class="col-sm-8">\r\n							<select name="provinceId" style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="cityId"  style="margin-right:3px">\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n							<select name="districtId" >\r\n								<option selected="selected" value="">未选择</option>\r\n							</select>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">季节政策:</label>\r\n						<div class="col-sm-6">\r\n							<input type="text" name="seasonPolicy" class="col-sm-12 addressMinute" placeholder="季节政策" value="{{scenic.seasonPolicy}}"/>\r\n						</div>\r\n					</div>\r\n					<div class="form-group guideInterval">\r\n						<label class="col-sm-2 control-label no-padding-right">景区简介:</label>\r\n						<div class="col-sm-8">\r\n							<textarea class="form-control" name="remark" class="col-sm-12" >{{scenic.remark}}</textarea>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n	<form class="form-horizontal scenicProjectForm" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n						<h5 >\r\n							<span class="badge badge-primary">2</span>\r\n							<label class="title-size middle">项目列表</label>\r\n							<a href="javascript:void(0)" class="btn-scenic-standard-add">\r\n								<button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;">\r\n								<i class="ace-icon fa fa-plus"></i>\r\n								新增\r\n								</button>\r\n							</a>\r\n						</h5>\r\n					<div class="widget-body">\r\n						<div class="widget-main no-padding">\r\n							<table class="table table-striped table-bordered table-hover scenicItemStandardList" style="border: 1px solid #ccc">\r\n								<thead>\r\n									<tr>\r\n										<th class="table-border" width="170"><span class="necessary">*</span>收费项目</th>\r\n										<th class="table-border" width="270"><span class="necessary">*</span>时间范围</th>\r\n										<th class="table-border" width="160"><span class="necessary">*</span>单价(元)</th>\r\n										<th class="table-border">备注</th>\r\n										<th class="table-border" width="80">操作</th>\r\n									</tr>\r\n								</thead>\r\n								<tbody>\r\n									{{each scenic.scenicItemList as item}}\r\n									<tr data-entity-id="{{item.id}}">\r\n										<td><input name="name" type="text" value="{{item.name}}" maxlength="100"/></td>\r\n										<td class="time">\r\n											{{each item.priceList as price i}}\r\n											<div data-index="{{i+1}}" data-entity-id="{{price.id}}" class="clearfix {{if i > 0}}appendDiv{{/if}} div-{{i+1}}" style="margin-top:2px">\r\n												<input name="startTime" type="text" class="datepicker" style="width:100px" value="{{price.startTime | dateFormat:\'yyyy-MM-dd\'}}"/><label>&nbsp;至&nbsp;</label><input name="endTime" type="text" class="datepicker" style="width:100px" value="{{price.endTime | dateFormat:\'yyyy-MM-dd\'}}"/>\r\n												{{if i == 0}}\r\n												<label class="timeArea" style="float:right">\r\n													<button class="btn btn-success btn-sm btn-white add">\r\n														<i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n													</button>\r\n												</label>\r\n												{{else}}\r\n												<label class="timeArea" style="float:right">\r\n													<button class="btn btn-danger btn-sm btn-white delete">\r\n														<i class="ace-icon fa fa-minus bigger-110 icon-only"></i>\r\n													</button>\r\n												</label>\r\n												{{/if}}\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td>\r\n											{{each item.priceList as price i}}\r\n											<div data-index="{{i+1}}" class="clearfix div-{{i+1}}" style="margin-top:2px">\r\n												<input name="contractPrice" type="text" value="{{price.contractPrice}}" maxlength="7"/>\r\n											</div>\r\n											{{/each}}\r\n										</td>\r\n										<td>\r\n											<input name="remark" type="text" style="width: 450px" value="{{item.remark}}" maxlength="1000"/>\r\n										</td>\r\n										<td style="width:70px">\r\n											<a class="btn-scenic-standard-delete">删除</a>\r\n										</td>\r\n									</tr>	\r\n									{{/each}} \r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<button class="btn btn-block btn-primary btn-submit-scenic guideSubmit">\r\n			<i class="ace-icon fa fa-check"></i>\r\n			提交信息\r\n		</button>\r\n		<div class="space-20"></div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});