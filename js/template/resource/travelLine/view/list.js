/*TMODJS:{"debug":true,"version":91,"md5":"4a443af70d387743f648cd9966177c7d"}*/
define(function(require) {
    return require("../../../template")("resource/travelLine/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, travelLineList = $data.travelLineList, recordSize = ($data.travelLine, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="search-area"> <input name="travelLine_name" class="col-xs-2 input-default-height" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入线路名称关键词"/>&nbsp; <button class=" btn-sm btn-travelLine-search search-btn pull-left"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group btn-status" style="margin-left: 20px"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" style="margin-top: -1px" aria-expanded="false"> <span> ', 
            $line = 10, 1 == searchParam.status ? ($out += " 已启用 ", $line = 12) : ($out += " 已停用 ", 
            $line = 14), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success btn-travelLine-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增线路 </button> </div> <div class="row travelLineList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>线路名称</th> <th>行程天数</th> <th>创建时间</th> <th>新建线路产品</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 46, $each(travelLineList, function(travelLine) {
                $out += ' <tr class="travelLine-', $line = 47, $out += $escape(travelLine.id), $out += '"> <td style="display: none"><input name="id" type="hidden" value="', 
                $line = 48, $out += $escape(travelLine.travelAgencyId), $out += '"/> <td>', $line = 49, 
                $out += $escape(travelLine.name), $out += "</td> <td>", $line = 50, $out += $escape(travelLine.days), 
                $out += "天</td> <td>", $line = 51, $out += $escape(travelLine.createTime), $out += '</td> <td> <button data-entiy-id="', 
                $line = 53, $out += $escape(travelLine.id), $out += '" class="btn btn-xs btn-success btn-lineProduct-add"> 新建线路产品 </button> </td> <td> <a data-entiy-id="', 
                $line = 58, $out += $escape(travelLine.id), $out += '" class=" btn-line-pre-scan cursor" > 预览 </a><a href="" class="cursor"> |</a> <a data-entiy-id="', 
                $line = 61, $out += $escape(travelLine.id), $out += '" class=" btn-line-scan cursor" > 查看 </a><a href="" class="cursor"> |</a> <a data-entiy-id="', 
                $line = 64, $out += $escape(travelLine.id), $out += '" class="btn-line-edit cursor "> 编辑 </a><a href="" class="cursor"> |</a> <a data-entiy-id="', 
                $line = 67, $out += $escape(travelLine.id), $out += '" class=" btn-line-clipboard cursor "> 复制 </a><a href="" class="cursor"> |</a> <a data-entiy-id="', 
                $line = 70, $out += $escape(travelLine.id), $out += '" class=" btn-line-delete cursor "> 删除 </a> </td> </tr> ', 
                $line = 75;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 80, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 89, 0 == totalPage ? ($out += " 0/0 ", $line = 91) : ($out += " ", $line = 92, 
            $out += $escape(pageNo + 1), $out += "/", $line = 92, $out += $escape(totalPage), 
            $out += " ", $line = 93), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area">\r\n	<input name="travelLine_name" class="col-xs-2 input-default-height" value="{{searchParam.name}}" placeholder="请输入线路名称关键词"/>&nbsp;\r\n	<button class=" btn-sm  btn-travelLine-search search-btn pull-left">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group btn-status" style="margin-left: 20px">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" style="margin-top: -1px" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<button class="btn btn-sm btn-success btn-travelLine-add" style="margin-left: 20px">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增线路\r\n	</button>\r\n</div>\r\n<div class="row travelLineList">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>线路名称</th>\r\n					<th>行程天数</th>\r\n					<th>创建时间</th>\r\n					<th>新建线路产品</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n\r\n			<tbody>\r\n				{{each travelLineList as travelLine}}\r\n					<tr class="travelLine-{{travelLine.id}}">\r\n						<td style="display: none"><input name="id" type="hidden" value="{{travelLine.travelAgencyId}}"/>\r\n						<td>{{travelLine.name}}</td>\r\n						<td>{{travelLine.days}}天</td>\r\n						<td>{{travelLine.createTime}}</td>\r\n						<td>\r\n							<button data-entiy-id="{{travelLine.id}}" class="btn btn-xs btn-success btn-lineProduct-add">\r\n								新建线路产品\r\n							</button>\r\n						</td>\r\n						<td>\r\n							<a data-entiy-id="{{travelLine.id}}" class=" btn-line-pre-scan cursor" >\r\n								预览\r\n							</a><a href="" class="cursor"> |</a>\r\n							<a data-entiy-id="{{travelLine.id}}" class=" btn-line-scan cursor" >\r\n								查看\r\n							</a><a href="" class="cursor"> |</a>\r\n							<a data-entiy-id="{{travelLine.id}}" class="btn-line-edit cursor ">\r\n								编辑\r\n							</a><a href="" class="cursor"> |</a>\r\n							<a data-entiy-id="{{travelLine.id}}" class=" btn-line-clipboard cursor ">\r\n								复制\r\n							</a><a href="" class="cursor"> |</a>\r\n							<a data-entiy-id="{{travelLine.id}}" class=" btn-line-delete cursor ">\r\n								删除\r\n							</a>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});