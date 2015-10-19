/*TMODJS:{"debug":true,"version":104,"md5":"29b9491299acce77f8f8c340443363f1"}*/
define(function(require) {
    return require("../../../template")("resource/shop/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, shopList = $data.shopList, recordSize = ($data.shop, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="search-area globalAdd"> <input name="shop_name" class="col-xs-2 input-default-height guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入商家名称关键词"/>&nbsp; <button class=" btn-sm btn-shop-search pull-left search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group btn-status" style="margin-left: 20px "> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success btn-shop-add" style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增商家 </button> </div> <div class="row shopList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>商家名字</th> <th>商家所在省市</th> <th>联系人</th> <th>联系电话</th> <th>商家简介</th> <th>启用标志</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 56, $each(shopList, function(shop) {
                $out += ' <tr class="shop-', $line = 57, $out += $escape(shop.id), $out += '"> <td>', 
                $line = 58, $out += $escape(shop.name), $out += "</td> <td> ", $line = 60, null != shop.province && ($out += " ", 
                $line = 61, $out += $escape(shop.province.name), $out += " ", $line = 62), $out += " ", 
                $line = 63, null != shop.city && ($out += " -", $line = 64, $out += $escape(shop.city.name), 
                $out += " ", $line = 65), $out += " ", $line = 66, null != shop.district && ($out += " -", 
                $line = 67, $out += $escape(shop.district.name), $out += " ", $line = 68), $out += " </td> <td>", 
                $line = 70, $out += $escape(shop.managerName), $out += "</td> <td>", $line = 71, 
                $out += $escape(shop.mobileNumber), $out += "</td> <td>", $line = 72, $out += $escape(shop.remark), 
                $out += "</td> <td> ", $line = 74, 1 == shop.status && ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 启用 ', 
                $line = 77), $out += " ", $line = 78, 0 == shop.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 禁用 ', 
                $line = 81), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 85, $out += $escape(shop.id), $out += '" class="btn-shop-view cursor "> 查看 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 88, $out += $escape(shop.id), $out += '" class="btn-shop-edit cursor "> 编辑 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 91, $out += $escape(shop.id), $out += '" class="btn-shop-delete cursor "> 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 103, $out += $escape(shop.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-shop-view" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 110, $out += $escape(shop.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-shop-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 118, $out += $escape(shop.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-shop-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 129;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 134, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 143, 0 == totalPage ? ($out += " 0/0 ", $line = 145) : ($out += " ", $line = 146, 
            $out += $escape(pageNo + 1), $out += "/", $line = 146, $out += $escape(totalPage), 
            $out += " ", $line = 147), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n	<input name="shop_name" class="col-xs-2 input-default-height guideInputList" value="{{searchParam.name}}" placeholder="请输入商家名称关键词"/>&nbsp;\r\n	<button class=" btn-sm  btn-shop-search pull-left search-btn">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group btn-status" style="margin-left: 20px ">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n		    <li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n\r\n	<button class="btn btn-sm btn-success btn-shop-add" style="margin-left: 20px;">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增商家\r\n	</button>\r\n\r\n</div>\r\n<div class="row shopList">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>商家名字</th>\r\n					<th>商家所在省市</th>\r\n					<th>联系人</th>\r\n					<th>联系电话</th>\r\n					<th>商家简介</th>\r\n					<th>启用标志</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n\r\n			<tbody>\r\n				{{each shopList as shop}}\r\n					<tr class="shop-{{shop.id}}">\r\n						<td>{{shop.name}}</td>\r\n						<td>\r\n							{{if shop.province != null}}\r\n								{{shop.province.name}}\r\n							{{/if}}\r\n							{{if shop.city != null}}\r\n								-{{shop.city.name}}\r\n							{{/if}}\r\n							{{if shop.district != null}}\r\n								-{{shop.district.name}}\r\n							{{/if}}\r\n						</td>\r\n						<td>{{shop.managerName}}</td>\r\n						<td>{{shop.mobileNumber}}</td>\r\n						<td>{{shop.remark}}</td>\r\n						<td>\r\n							{{if shop.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								启用\r\n							{{/if}}\r\n							{{if shop.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								禁用\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a data-entity-id="{{shop.id}}" class="btn-shop-view cursor ">\r\n									查看\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{shop.id}}" class="btn-shop-edit cursor ">\r\n									编辑\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{shop.id}}" class="btn-shop-delete cursor ">\r\n									删除\r\n								</a>\r\n							</div>\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n										<li>\r\n											<a data-entity-id="{{shop.id}}" href="javascript:void(0)" class="tooltip-success btn-shop-view" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n											<a data-entity-id="{{shop.id}}" href="javascript:void(0)" class="tooltip-success btn-shop-edit" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n\r\n										<li>\r\n											<a data-entity-id="{{shop.id}}" href="javascript:void(0)" class="tooltip-error btn-shop-delete" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});