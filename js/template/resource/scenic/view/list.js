/*TMODJS:{"debug":true,"version":58,"md5":"be7028d334b0f17e33e4a9d9fd5928d2"}*/
define(function(require) {
    return require("../../../template")("resource/scenic/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, scenicList = $data.scenicList, recordSize = ($data.scenic, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="search-area globalAdd"> <input name="scenic_name" class="col-xs-2 input-default-height guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入餐厅名称关键词"/>&nbsp; <button class=" btn-sm btn-scenic-search pull-left search-btn"> <i class="ace-icon fa fa-search" ></i> 搜索 </button> <div class="btn-group btn-status" style="margin-left: 20px;"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success btn-scenic-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增景区 </button> </div> <div class="row scenicList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th class="col-sm-1">景区名称</th> <th class="col-sm-2">景区所在省市</th> <th class="col-sm-1">联系人</th> <th class="col-sm-1">联系电话</th> <th class="col-sm-4">季节政策</th> <th class="col-sm-1">启用标志</th> <th class="col-sm-2">操作</th> </tr> </thead> <tbody> ', 
            $line = 55, $each(scenicList, function(scenic) {
                $out += ' <tr class="scenic-', $line = 56, $out += $escape(scenic.id), $out += '"> <td>', 
                $line = 57, $out += $escape(scenic.name), $out += "</td> <td> ", $line = 59, null != scenic.province && ($out += " ", 
                $line = 60, $out += $escape(scenic.province.name), $out += " ", $line = 61), $out += " ", 
                $line = 62, null != scenic.city && ($out += " -", $line = 63, $out += $escape(scenic.city.name), 
                $out += " ", $line = 64), $out += " ", $line = 65, null != scenic.district && ($out += " -", 
                $line = 66, $out += $escape(scenic.district.name), $out += " ", $line = 67), $out += " </td> <td>", 
                $line = 69, $out += $escape(scenic.managerName), $out += "</td> <td>", $line = 70, 
                $out += $escape(scenic.mobileNumber), $out += "</td> <td>", $line = 71, $out += $escape(scenic.seasonPolicy), 
                $out += "</td> <td> ", $line = 73, 1 == scenic.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 76) : 0 == scenic.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 79), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 83, $out += $escape(scenic.id), $out += '" class="btn-scenic-view cursor" > 查看 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 86, $out += $escape(scenic.id), $out += '" class=" btn-scenic-edit cursor" > 编辑 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 89, $out += $escape(scenic.id), $out += '" class=" btn-scenic-delete cursor" > 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 102, $out += $escape(scenic.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-scenic-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 110, $out += $escape(scenic.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-scenic-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 118, $out += $escape(scenic.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-scenic-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 129;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 135, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 144, 0 == totalPage ? ($out += " 0/0 ", $line = 146) : ($out += " ", $line = 147, 
            $out += $escape(pageNo + 1), $out += "/", $line = 147, $out += $escape(totalPage), 
            $out += " ", $line = 148), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n	<input name="scenic_name" class="col-xs-2 input-default-height guideInputList" value="{{searchParam.name}}" placeholder="请输入餐厅名称关键词"/>&nbsp;\r\n	<button class=" btn-sm  btn-scenic-search pull-left search-btn">\r\n		<i class="ace-icon fa fa-search" ></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group btn-status" style="margin-left: 20px;">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}						\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n		    <li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n\r\n	<button class="btn btn-sm btn-success btn-scenic-add" style="margin-left: 20px">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增景区\r\n	</button>\r\n</div>\r\n<div class="row scenicList">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-1">景区名称</th>\r\n					<th class="col-sm-2">景区所在省市</th>\r\n					<th class="col-sm-1">联系人</th>\r\n					<th class="col-sm-1">联系电话</th>\r\n					<th class="col-sm-4">季节政策</th>\r\n					<th class="col-sm-1">启用标志</th>\r\n					<th class="col-sm-2">操作</th>\r\n				</tr>\r\n			</thead>\r\n		\r\n			<tbody>\r\n				{{each scenicList as scenic}}\r\n					<tr class="scenic-{{scenic.id}}">\r\n					 	<td>{{scenic.name}}</td>\r\n						<td>		\r\n							{{if scenic.province != null}}\r\n								{{scenic.province.name}}\r\n							{{/if}}\r\n							{{if scenic.city != null}}\r\n								-{{scenic.city.name}}\r\n							{{/if}}\r\n							{{if scenic.district != null}}\r\n								-{{scenic.district.name}}\r\n							{{/if}}	\r\n						</td> \r\n						<td>{{scenic.managerName}}</td> \r\n						<td>{{scenic.mobileNumber}}</td>\r\n						<td>{{scenic.seasonPolicy}}</td>\r\n						<td>\r\n							{{if scenic.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已启用\r\n							{{else if scenic.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已停用\r\n							{{/if}}	\r\n						</td> \r\n					 	<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a data-entity-id="{{scenic.id}}" class="btn-scenic-view  cursor" >\r\n									查看\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{scenic.id}}" class=" btn-scenic-edit cursor" >\r\n									编辑\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{scenic.id}}" class=" btn-scenic-delete cursor" >\r\n									删除\r\n								</a>\r\n							</div>\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n			\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n										\r\n										<li>\r\n											<a data-entity-id="{{scenic.id}}" href="javascript:void(0)" class="tooltip-error btn-scenic-view" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										\r\n										<li>\r\n											<a data-entity-id="{{scenic.id}}" href="javascript:void(0)" class="tooltip-success btn-scenic-edit" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n			\r\n										<li>\r\n											<a data-entity-id="{{scenic.id}}" href="javascript:void(0)" class="tooltip-error btn-scenic-delete" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr> \r\n				{{/each}} \r\n			</tbody>\r\n		</table>\r\n		\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});