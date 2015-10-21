/*TMODJS:{"debug":true,"version":93,"md5":"39bbf202c2889c7d7dd390059c60d36e"}*/
define(function(require) {
    return require("../../../template")("resource/restaurant/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, restaurantList = $data.restaurantList, recordSize = ($data.restaurant, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="search-area globalAdd"> <input name="restaurant_name" class="col-xs-2 input-default-height guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入餐厅名称关键词"/>&nbsp; <button class=" btn-sm btn-restaurant-search pull-left search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group btn-status" style="margin-left: 20px"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" style="background: #ffffff!important; border: 1px solid #83bbd6!important;" aria-expanded="false"> <span> ', 
            $line = 11, "" == searchParam.status ? ($out += " 全部 ", $line = 13) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 15) : ($out += " 已停用 ", $line = 17), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success btn-restaurant-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增餐厅 </button> </div> <div class="row restaurantList"> <div class="col-xs-12"> <table class="table table-bordered table-hover table-fixed"> <colgroup> <col style="width:25%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> <col style="width:20%;"></col> <col style="width:10%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th>餐厅名字</th> <th>联系电话</th> <th>联系人</th> <th>餐厅地址</th> <th>启用标志</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 65, $each(restaurantList, function(restaurant) {
                $out += ' <tr class="restaurant-', $line = 66, $out += $escape(restaurant.id), $out += '"> <td>', 
                $line = 67, $out += $escape(restaurant.name), $out += "</td> <td>", $line = 68, 
                $out += $escape(restaurant.mobileNumber), $out += "</td> <td>", $line = 69, $out += $escape(restaurant.managerName), 
                $out += "</td> <td> ", $line = 71, null != restaurant.province && ($out += " ", 
                $line = 72, $out += $escape(restaurant.province.name), $out += " ", $line = 73), 
                $out += " ", $line = 74, null != restaurant.city && ($out += " -", $line = 75, $out += $escape(restaurant.city.name), 
                $out += " ", $line = 76), $out += " ", $line = 77, null != restaurant.district && ($out += " -", 
                $line = 78, $out += $escape(restaurant.district.name), $out += " ", $line = 79), 
                $out += " </td> <td> ", $line = 83, 0 == restaurant.status ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 86) : ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 89), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 93, $out += $escape(restaurant.id), $out += '" class=" btn-restaurant-view cursor" > 查看 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 97, $out += $escape(restaurant.id), $out += '" class="btn-restaurant-edit cursor" >编辑 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 99, $out += $escape(restaurant.id), $out += '" class="btn-restaurant-delete"> 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 112, $out += $escape(restaurant.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-restaurant-view" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 119, $out += $escape(restaurant.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-restaurant-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 127, $out += $escape(restaurant.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-restaurant-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 138;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 143, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 152, 0 == totalPage ? ($out += " 0/0 ", $line = 154) : ($out += " ", $line = 155, 
            $out += $escape(pageNo + 1), $out += "/", $line = 155, $out += $escape(totalPage), 
            $out += " ", $line = 156), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n	<input name="restaurant_name" class="col-xs-2 input-default-height guideInputList" value="{{searchParam.name}}" placeholder="请输入餐厅名称关键词"/>&nbsp;\r\n	<button class=" btn-sm  btn-restaurant-search  pull-left search-btn">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group btn-status" style="margin-left: 20px">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up"\r\n				style="background: #ffffff!important; border: 1px solid #83bbd6!important;" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}\r\n\r\n\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n\r\n		<li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n\r\n	<button class="btn btn-sm btn-success btn-restaurant-add" style="margin-left: 20px">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增餐厅\r\n	</button>\r\n</div>\r\n<div class="row restaurantList">\r\n	<div class="col-xs-12">\r\n		<table class="table  table-bordered table-hover table-fixed">\r\n			<colgroup>\r\n            	<col style="width:25%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            	<col style="width:20%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            </colgroup>\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>餐厅名字</th>\r\n					<th>联系电话</th>\r\n					<th>联系人</th>\r\n					<th>餐厅地址</th>\r\n					<th>启用标志</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n\r\n			<tbody>\r\n				{{each restaurantList as restaurant}}\r\n					<tr class="restaurant-{{restaurant.id}}">\r\n						<td>{{restaurant.name}}</td>\r\n						<td>{{restaurant.mobileNumber}}</td>\r\n						<td>{{restaurant.managerName}}</td>\r\n						<td>\r\n							{{if restaurant.province != null}}\r\n								{{restaurant.province.name}}\r\n							{{/if}}\r\n							{{if restaurant.city != null}}\r\n								-{{restaurant.city.name}}\r\n							{{/if}}\r\n							{{if restaurant.district != null}}\r\n								-{{restaurant.district.name}}\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n\r\n							{{if restaurant.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已停用\r\n							{{else restaurant.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已启用\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a data-entity-id="{{restaurant.id}}" class=" btn-restaurant-view cursor" >\r\n									查看\r\n								</a><a href="" class="cursor"> |</a>\r\n\r\n								<a data-entity-id="{{restaurant.id}}" class="btn-restaurant-edit cursor" >编辑\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{restaurant.id}}" class="btn-restaurant-delete">\r\n									删除\r\n								</a>\r\n							</div>\r\n\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n										<li>\r\n											<a data-entity-id="{{restaurant.id}}" href="javascript:void(0)" class="tooltip-success btn-restaurant-view" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n											<a data-entity-id="{{restaurant.id}}" href="javascript:void(0)" class="tooltip-success btn-restaurant-edit" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n\r\n										<li>\r\n											<a data-entity-id="{{restaurant.id}}" href="javascript:void(0)" class="tooltip-error btn-restaurant-delete" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});