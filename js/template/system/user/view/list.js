/*TMODJS:{"debug":true,"version":121,"md5":"709dacdf4bd319ba5333493dd31a7926"}*/
define(function(require) {
    return require("../../../template")("system/user/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, userList = $data.userList, defaultPassword = ($data.user, 
            $data.$index, $data.defaultPassword), recordSize = $data.recordSize, totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="search-area globalAdd"> <input name="user_realname" class="col-xs-2 input-default-height guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.inputName), $out += '" placeholder="账号、姓名"/>&nbsp; <button class=" btn-sm search-btn btn-user-search" style="margin-left:-8px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group btn-status"style="margin-left: 15px"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm block-up dropdown-toggle" aria-expanded="false"> <span> ', 
            $line = 10, 1 == searchParam.status ? ($out += " 已启用 ", $line = 12) : ($out += " 已停用 ", 
            $line = 14), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success btn-user-add" style="margin-left:15px;"> <i class="ace-icon fa fa-plus"></i> 新增人员 </button> </div> <div class="row userList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>姓名</th> <th>账号</th> <th>初始密码</th> <th>联系电话</th> <th>业务部</th> <th>子部门</th> <th>审核角色</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 49, $each(userList, function(user) {
                $out += ' <tr class="user-', $line = 50, $out += $escape(user.id), $out += '"> <td>', 
                $line = 51, $out += $escape(user.realName), $out += "</td> <td>", $line = 52, $out += $escape(user.userName), 
                $out += "</td> <td>", $line = 53, $out += $escape(defaultPassword), $out += "</td> <td>", 
                $line = 54, $out += $escape(user.mobileNumber), $out += "</td> <td>", $line = 55, 
                null != user.group && ($line = 55, $out += $escape(user.group.businessGroup.name), 
                $line = 55), $out += "</td> <td>", $line = 56, null != user.group && ($line = 56, 
                $out += $escape(user.group.name), $line = 56), $out += "</td> <td>", $line = 57, 
                1 == user.roleType && ($out += "管理员", $line = 57), $line = 57, 2 == user.roleType && ($out += "财务", 
                $line = 57), $line = 57, 3 == user.roleType && ($out += "计调", $line = 57), $out += "</td> <td> ", 
                $line = 59, 0 == user.status ? ($out += " 已停用 ", $line = 61) : ($out += " 已启用 ", 
                $line = 63), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 67, $out += $escape(user.id), $out += '" class="cursor btn-user-auth" title="授权"> 授权 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 70, $out += $escape(user.id), $out += '" class="cursor btn-user-edit" title="修改"> 修改 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 73, $out += $escape(user.id), $out += '" class="cursor btn-user-view" title="查看"> 查看 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 84, $out += $escape(user.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-user-auth" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 91, $out += $escape(user.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-user-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 98, $out += $escape(user.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-user-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 109;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 114, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 123, 0 == totalPage ? ($out += " 0/0 ", $line = 125) : ($out += " ", $line = 126, 
            $out += $escape(pageNo + 1), $out += "/", $line = 126, $out += $escape(totalPage), 
            $out += " ", $line = 127), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n	<input name="user_realname" class="col-xs-2 input-default-height guideInputList" value="{{searchParam.inputName}}" placeholder="账号、姓名"/>&nbsp;\r\n	<button class=" btn-sm  search-btn btn-user-search" style="margin-left:-8px">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group btn-status"style="margin-left: 15px">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm block-up dropdown-toggle" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<button class="btn btn-sm btn-success btn-user-add" style="margin-left:15px;">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增人员\r\n	</button>\r\n</div>\r\n<div class="row userList">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>姓名</th>\r\n					<th>账号</th>\r\n					<th>初始密码</th>\r\n					<th>联系电话</th>\r\n					<th>业务部</th>\r\n					<th>子部门</th>\r\n					<th>审核角色</th>\r\n					<th>状态</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody>\r\n				{{each userList as user}}\r\n					<tr class="user-{{user.id}}">\r\n						<td>{{user.realName}}</td>\r\n						<td>{{user.userName}}</td>\r\n						<td>{{defaultPassword}}</td>\r\n						<td>{{user.mobileNumber}}</td>\r\n						<td>{{if user.group != null}}{{user.group.businessGroup.name}}{{/if}}</td>\r\n						<td>{{if user.group != null}}{{user.group.name}}{{/if}}</td>\r\n						<td>{{if user.roleType == 1}}管理员{{/if}}{{if user.roleType == 2}}财务{{/if}}{{if user.roleType == 3}}计调{{/if}}</td>\r\n						<td>\r\n							{{if user.status == 0}}\r\n								已停用\r\n							{{else user.status == 1}}\r\n								已启用\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a data-entity-id="{{user.id}}" class="cursor btn-user-auth" title="授权">\r\n									授权\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{user.id}}" class="cursor btn-user-edit" title="修改">\r\n									修改\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{user.id}}" class="cursor btn-user-view" title="查看">\r\n									查看\r\n								</a>\r\n							</div>\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n										<li>\r\n											<a data-entity-id="{{user.id}}" href="javascript:void(0)" class="tooltip-error btn-user-auth" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n											<a data-entity-id="{{user.id}}" href="javascript:void(0)" class="tooltip-success btn-user-edit" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n											<a data-entity-id="{{user.id}}" href="javascript:void(0)" class="tooltip-error btn-user-view" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});