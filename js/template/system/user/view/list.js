/*TMODJS:{"debug":true,"version":156,"md5":"3afbd72aaa852dd636c0831e85e2f694"}*/
define(function(require) {
    return require("../../../template")("system/user/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, userList = $data.userList, defaultPassword = ($data.user, 
            $data.$index, $data.defaultPassword), recordSize = $data.recordSize, $out = "";
            return $out += '<div class="search-area globalAdd T-search-area"> <input name="user_realname" class="col-xs-2 input-default-height guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.inputName), $out += '" placeholder="账号、姓名"/>&nbsp; <button class=" btn-sm search-btn T-search" style="margin-left:-8px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group T-status"style="margin-left: 15px"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm block-up dropdown-toggle" aria-expanded="false"> <span> ', 
            $line = 10, 1 == searchParam.status ? ($out += " 已启用 ", $line = 12) : ($out += " 已停用 ", 
            $line = 14), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success T-add R-right" data-right=\'1420001\' style="margin-left:15px;"> <i class="ace-icon fa fa-plus"></i> 新增人员 </button> </div> <div class="row userList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>姓名</th> <th>账号</th> <th>初始密码</th> <th>联系电话</th> <th>业务部</th> <th>子部门</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 48, $each(userList, function(user) {
                $out += ' <tr data-id="', $line = 49, $out += $escape(user.id), $out += '"> <td>', 
                $line = 50, $out += $escape(user.realName), $out += "</td> <td>", $line = 51, $out += $escape(user.userName), 
                $out += "</td> <td>", $line = 52, $out += $escape(defaultPassword), $out += "</td> <td>", 
                $line = 53, $out += $escape(user.mobileNumber), $out += "</td> <td>", $line = 54, 
                null != user.group && ($line = 54, $out += $escape(user.group.businessGroup.name), 
                $line = 54), $out += "</td> <td>", $line = 55, null != user.group && ($line = 55, 
                $out += $escape(user.group.name), $line = 55), $out += "</td> <td> ", $line = 57, 
                0 == user.status ? ($out += " 已停用 ", $line = 59) : ($out += " 已启用 ", $line = 61), 
                $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a class="cursor T-option T-view" title="查看"> 查看 </a> <a class="cursor T-option T-auth R-right" data-right=\'1420003\' title="授权"> <label class="padding-right20">|</label> 授权 </a> <a class="cursor T-option T-update R-right" data-right=\'1420002\' title="修改"> <label class="padding-right20">|</label> 修改 </a> </div> </td> </tr> ', 
                $line = 79;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 84, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd T-search-area">\r\n	<input name="user_realname" class="col-xs-2 input-default-height guideInputList" value="{{searchParam.inputName}}" placeholder="账号、姓名"/>&nbsp;\r\n	<button class=" btn-sm  search-btn T-search" style="margin-left:-8px">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group T-status"style="margin-left: 15px">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm block-up dropdown-toggle" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<button class="btn btn-sm btn-success T-add R-right" data-right=\'1420001\' style="margin-left:15px;">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增人员\r\n	</button>\r\n</div>\r\n<div class="row userList">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>姓名</th>\r\n					<th>账号</th>\r\n					<th>初始密码</th>\r\n					<th>联系电话</th>\r\n					<th>业务部</th>\r\n					<th>子部门</th>\r\n					<th>状态</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-list">\r\n				{{each userList as user}}\r\n					<tr data-id="{{user.id}}">\r\n						<td>{{user.realName}}</td>\r\n						<td>{{user.userName}}</td>\r\n						<td>{{defaultPassword}}</td>\r\n						<td>{{user.mobileNumber}}</td>\r\n						<td>{{if user.group != null}}{{user.group.businessGroup.name}}{{/if}}</td>\r\n						<td>{{if user.group != null}}{{user.group.name}}{{/if}}</td>\r\n						<td>\r\n							{{if user.status == 0}}\r\n								已停用\r\n							{{else user.status == 1}}\r\n								已启用\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n							<a class="cursor T-option T-view" title="查看">\r\n									查看\r\n								</a>\r\n								<a class="cursor T-option T-auth R-right" data-right=\'1420003\' title="授权">\r\n									<label class="padding-right20">|</label>\r\n									授权\r\n								</a>\r\n								<a class="cursor T-option T-update R-right" data-right=\'1420002\' title="修改">\r\n									<label class="padding-right20">|</label>\r\n									修改\r\n								</a>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});