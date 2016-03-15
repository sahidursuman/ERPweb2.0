/*TMODJS:{"debug":true,"version":96,"md5":"0f2f2f9d3f315ce69ec05ca07219934a"}*/
define(function(require) {
    return require("../../../template")("system/department/view/view", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, businessGroup = $data.businessGroup, $each = $utils.$each, groupList = $data.groupList, $out = ($data.group, 
            $data.$index, "");
            return $out += '<div class="search-area" style="margin:5px 22px 0px 22px;"> <input type="hidden" value="', 
            $line = 2, $out += $escape(businessGroup.id), $out += '" id="businessGroupId" /> <div style="float: left;font-size:15px;"> <table> <tr> <td>部门信息：</td> <td>', 
            $line = 7, $out += $escape(businessGroup.name), $out += "</td> </tr> <tr> <td>创建时间：</td> <td>", 
            $line = 11, $out += $escape($helpers.dateFormat(businessGroup.createTime, "yyyy-MM-dd")), 
            $out += '</td> </tr> </table> </div> <div style="clear: both;"></div> <div style="float: right;"> <button class="btn btn-sm btn-success btn-group-add "> <i class="ace-icon fa fa-plus"></i> 新增子部门 </button> </div> <div style="clear: both;"></div> </div> <div class="row groupList" style="margin:5px 10px 0px 10px;"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">子部门名称</th> <th class="th-border">创建时间</th> <th class="th-border">操作</th> </tr> </thead> <tbody id="groupContent"> ', 
            $line = 35, $each(groupList, function(group) {
                $out += ' <tr class="business-', $line = 36, $out += $escape(group.id), $out += '"> <td>', 
                $line = 37, $out += $escape(group.name), $out += "</td> <td>", $line = 38, $out += $escape($helpers.dateFormat(group.createTime, "yyyy-MM-dd")), 
                $out += '</td> <td> <div class="btn-group"> <button data-entity-id="', $line = 42, 
                $out += $escape(group.id), $out += '" class="btn btn-xs btn-info btn-group-edit"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </button> <button data-entity-id="', 
                $line = 45, $out += $escape(group.id), $out += '" class="btn btn-xs btn-info btn-group-del"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </button> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 57, $out += $escape(group.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-group-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 69;
            }), $out += " </tbody> </table> </div> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area" style="margin:5px 22px 0px 22px;">\r\n	<input type="hidden" value="{{businessGroup.id}}" id="businessGroupId" />\r\n	<div style="float: left;font-size:15px;">\r\n		<table>\r\n			<tr>\r\n				<td>部门信息：</td>\r\n				<td>{{businessGroup.name}}</td>\r\n			</tr>\r\n			<tr>\r\n				<td>创建时间：</td>\r\n				<td>{{businessGroup.createTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n			</tr>\r\n		</table>\r\n	</div>\r\n	<div style="clear: both;"></div>\r\n	<div style="float: right;">\r\n		<button class="btn btn-sm btn-success btn-group-add ">\r\n			<i class="ace-icon fa fa-plus"></i>\r\n			新增子部门\r\n		</button>\r\n	</div>\r\n	<div style="clear: both;"></div>\r\n</div>\r\n<div class="row groupList" style="margin:5px 10px 0px 10px;">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr>\r\n					<th class="th-border">子部门名称</th>\r\n					<th class="th-border">创建时间</th>\r\n					<th class="th-border">操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody id="groupContent">\r\n				{{each groupList as group}}\r\n					<tr class="business-{{group.id}}">\r\n						<td>{{group.name}}</td>\r\n						<td>{{group.createTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n						<td>\r\n							<div class="btn-group">\r\n								\r\n								<button data-entity-id="{{group.id}}" class="btn btn-xs btn-info btn-group-edit">\r\n									<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n								</button>\r\n								<button data-entity-id="{{group.id}}" class="btn btn-xs btn-info btn-group-del">\r\n									<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n								</button>\r\n							</div>\r\n			\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n										<li>\r\n											<a data-entity-id="{{group.id}}" href="javascript:void(0)" class="tooltip-success btn-group-edit" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}} \r\n			</tbody>\r\n		</table>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});