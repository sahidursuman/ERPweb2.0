/*TMODJS:{"debug":true,"version":261,"md5":"e27e780e736451c29f816092397ecc8a"}*/
define(function(require) {
    return require("../../../template")("resource/scenic/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, scenicList = $data.scenicList, recordSize = ($data.scenic, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="T-search-area search-area globalAdd"> <input name="scenic_name" class="col-xs-2 input-default-height guideInputList T-scenic-name" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入景区名称关键词"/>&nbsp; <button class=" btn-sm T-scenic-search pull-left search-btn"> <i class="ace-icon fa fa-search" ></i> 搜索 </button> <div class="btn-group btn-status T-select-status" style="margin-left: 20px;"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success T-scenic-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增景区 </button> </div> <div class="row scenicList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:16%;"></col> <col style="width:14%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:30%;"></col> <col style="width:7%;"></col> <col style="width:13%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-1">景区名称</th> <th class="col-sm-2">景区所在省市</th> <th class="col-sm-1">联系人</th> <th class="col-sm-1">联系电话</th> <th class="col-sm-4">季节政策</th> <th class="col-sm-1">启用标志</th> <th class="col-sm-2">操作</th> </tr> </thead> <tbody class="T-scenic-list"> ', 
            $line = 65, $each(scenicList, function(scenic) {
                $out += ' <tr class="scenic-', $line = 66, $out += $escape(scenic.id), $out += '" data-id="', 
                $line = 66, $out += $escape(scenic.id), $out += '"> <td>', $line = 67, $out += $escape(scenic.name), 
                $out += "</td> <td> ", $line = 69, null != scenic.province && ($out += " ", $line = 70, 
                $out += $escape(scenic.province.name), $out += " ", $line = 71), $out += " ", $line = 72, 
                null != scenic.city && ($out += " -", $line = 73, $out += $escape(scenic.city.name), 
                $out += " ", $line = 74), $out += " ", $line = 75, null != scenic.district && ($out += " -", 
                $line = 76, $out += $escape(scenic.district.name), $out += " ", $line = 77), $out += " </td> <td>", 
                $line = 79, $out += $escape(scenic.managerName), $out += "</td> <td>", $line = 80, 
                $out += $escape(scenic.mobileNumber), $out += '</td> <td class="T-ctrl-tip">', $line = 81, 
                $out += $escape(scenic.seasonPolicy), $out += "</td> <td> ", $line = 83, 1 == scenic.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 86) : 0 == scenic.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 89), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a class="T-scenic-view T-action cursor" > 查看 </a><a href="" class="cursor"> |</a> <a class="T-scenic-edit T-action cursor" > 编辑 </a><a href="" class="cursor"> |</a> <a class="T-scenic-delete T-action cursor" > 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a href="javascript:void(0)" class="tooltip-error T-scenic-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a href="javascript:void(0)" class="tooltip-success T-scenic-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a href="javascript:void(0)" class="tooltip-error T-scenic-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 139;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计', 
            $line = 145, $out += $escape(recordSize), $out += '条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-search-area search-area globalAdd">\r\n	<input name="scenic_name" class="col-xs-2 input-default-height guideInputList T-scenic-name" value="{{searchParam.name}}" placeholder="请输入景区名称关键词"/>&nbsp;\r\n	<button class=" btn-sm  T-scenic-search pull-left search-btn">\r\n		<i class="ace-icon fa fa-search" ></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group btn-status T-select-status" style="margin-left: 20px;">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}				\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n		    <li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n\r\n	<button class="btn btn-sm btn-success T-scenic-add" style="margin-left: 20px">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增景区\r\n	</button>\r\n\r\n</div>\r\n<div class="row scenicList">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<colgroup>\r\n            	<col style="width:16%;"></col>\r\n            	<col style="width:14%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:30%;"></col>\r\n            	<col style="width:7%;"></col>\r\n            	<col style="width:13%;"></col>\r\n            </colgroup>\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-1">景区名称</th>\r\n					<th class="col-sm-2">景区所在省市</th>\r\n					<th class="col-sm-1">联系人</th>\r\n					<th class="col-sm-1">联系电话</th>\r\n					<th class="col-sm-4">季节政策</th>\r\n					<th class="col-sm-1">启用标志</th>\r\n					<th class="col-sm-2">操作</th>\r\n				</tr>\r\n			</thead>\r\n		\r\n			<tbody class="T-scenic-list">\r\n				{{each scenicList as scenic}}\r\n					<tr  class="scenic-{{scenic.id}}" data-id="{{scenic.id}}">\r\n					 	<td>{{scenic.name}}</td>\r\n						<td>\r\n							{{if scenic.province != null}}\r\n								{{scenic.province.name}}\r\n							{{/if}}\r\n							{{if scenic.city != null}}\r\n								-{{scenic.city.name}}\r\n							{{/if}}\r\n							{{if scenic.district != null}}\r\n								-{{scenic.district.name}}\r\n							{{/if}}	\r\n						</td> \r\n						<td>{{scenic.managerName}}</td> \r\n						<td>{{scenic.mobileNumber}}</td>\r\n						<td class="T-ctrl-tip">{{scenic.seasonPolicy}}</td>\r\n						<td>\r\n						   {{if scenic.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已启用\r\n							{{else if scenic.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已停用\r\n							{{/if}}\r\n						</td> \r\n					 	<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a class="T-scenic-view T-action cursor" >\r\n									查看\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a class="T-scenic-edit T-action cursor" >\r\n									编辑\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a class="T-scenic-delete T-action cursor" >\r\n									删除\r\n								</a>\r\n							</div>\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n			\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n										\r\n										<li>\r\n											<a href="javascript:void(0)" class="tooltip-error T-scenic-view" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										\r\n										<li>\r\n											<a href="javascript:void(0)" class="tooltip-success T-scenic-edit" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n			\r\n										<li>\r\n											<a href="javascript:void(0)" class="tooltip-error T-scenic-delete" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr> \r\n				{{/each}}\r\n			</tbody>\r\n		</table>	\r\n		\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计{{recordSize}}条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});