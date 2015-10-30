/*TMODJS:{"debug":true,"version":66,"md5":"71dc34ef81588988bfd0562a70017ad4"}*/
define(function(require) {
    return require("../../../template")("resource/partnerAgency/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, partnerAgencyList = $data.partnerAgencyList, recordSize = ($data.partnerAgency, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="search-area globalAdd"> <input name="partnerAgency_travelAgencyName" class="col-xs-2 input-default-height guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.travelAgencyName), $out += '" placeholder="请输入旅行社名称关键词"/>&nbsp; <button class="btn-sm btn-partnerAgency-search search-btn" style="margin-left: -8px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group btn-status" style="margin-left: 20px"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 10, "1" == searchParam.status ? ($out += " 已启用 ", $line = 12) : "0" == searchParam.status ? ($out += " 已停用 ", 
            $line = 14) : ($out += " 全部 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success btn-partnerAgency-add R-right" data-right="1150002" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增同行 </button> </div> <div class="row partnerAgencyList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>客户名称</th> <th>客户类型</th> <th>等级</th> <th>客户所在地区</th> <th>总社</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 53, $each(partnerAgencyList, function(partnerAgency) {
                $out += ' <tr class="partnerAgency-', $line = 54, $out += $escape(partnerAgency.id), 
                $out += '"> <td>', $line = 55, $out += $escape(partnerAgency.travelAgencyName), 
                $out += "</td> <td> ", $line = 57, 0 == partnerAgency.type ? ($out += " 地接社 ", $line = 59) : 1 == partnerAgency.type ? ($out += " 组团社 ", 
                $line = 61) : ($out += " 组团社 地接社 ", $line = 63), $out += " </td> <td> ", $line = 66, 
                1 == partnerAgency.level ? ($out += " 金牌 ", $line = 68) : 2 == partnerAgency.level ? ($out += " 银牌 ", 
                $line = 70) : 3 == partnerAgency.level && ($out += " 铜牌 ", $line = 72), $out += " </td> <td> ", 
                $line = 75, null != partnerAgency.province && ($out += " ", $line = 76, $out += $escape(partnerAgency.province.name), 
                $out += " ", $line = 77), $out += " ", $line = 78, null != partnerAgency.city && ($out += " -", 
                $line = 79, $out += $escape(partnerAgency.city.name), $out += " ", $line = 80), 
                $out += " ", $line = 81, null != partnerAgency.district && ($out += " -", $line = 82, 
                $out += $escape(partnerAgency.district.name), $out += " ", $line = 83), $out += " </td> <td>", 
                $line = 85, null != partnerAgency.partnerHeaderAgency && ($line = 85, $out += $escape(partnerAgency.partnerHeaderAgency.name), 
                $line = 85), $out += '</td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entiy-id="', 
                $line = 88, $out += $escape(partnerAgency.id), $out += '" class="cursor btn-partnerAgency-view"> 查看 </a> <a data-entiy-id="', 
                $line = 91, $out += $escape(partnerAgency.id), $out += '" class="cursor btn-partnerAgency-edit R-right" data-right="1150003"> <label class="padding-right20">|</label> 编辑 </a> <a data-entiy-id="', 
                $line = 95, $out += $escape(partnerAgency.id), $out += '" class="cursor btn-partnerAgency-delete R-right" data-right="1150004"> <label class="padding-right20">|</label> 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entiy-id="', 
                $line = 107, $out += $escape(partnerAgency.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-partnerAgency-view" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entiy-id="', 
                $line = 114, $out += $escape(partnerAgency.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-partnerAgency-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entiy-id="', 
                $line = 122, $out += $escape(partnerAgency.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-partnerAgency-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 133;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 138, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 147, 0 == totalPage ? ($out += " 0/0 ", $line = 149) : ($out += " ", $line = 150, 
            $out += $escape(pageNo + 1), $out += "/", $line = 150, $out += $escape(totalPage), 
            $out += " ", $line = 151), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n	<input name="partnerAgency_travelAgencyName" class="col-xs-2 input-default-height guideInputList" value="{{searchParam.travelAgencyName}}" placeholder="请输入旅行社名称关键词"/>&nbsp;\r\n	<button class="btn-sm btn-partnerAgency-search search-btn" style="margin-left: -8px">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group btn-status" style="margin-left: 20px">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == "1"}}\r\n					已启用\r\n				{{else if searchParam.status == "0"}}   \r\n					已停用   \r\n				{{else}}       \r\n					全部          \r\n				{{/if}}\r\n\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n			<li>                           \r\n				<a data-value="" href="javascript:void(0)">全部</a>                     \r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<button class="btn btn-sm btn-success btn-partnerAgency-add R-right" data-right="1150002" style="margin-left: 20px">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增同行\r\n	</button>\r\n</div>\r\n<div class="row partnerAgencyList">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">     \r\n					<th>客户名称</th>\r\n					<th>客户类型</th>\r\n					<th>等级</th>\r\n					<th>客户所在地区</th>\r\n					<th>总社</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>           \r\n		\r\n			<tbody>\r\n				{{each partnerAgencyList as partnerAgency}}\r\n					<tr class="partnerAgency-{{partnerAgency.id}}">\r\n						<td>{{partnerAgency.travelAgencyName}}</td>\r\n						<td>\r\n							{{if partnerAgency.type == 0}}\r\n							地接社\r\n							{{else if partnerAgency.type == 1}}\r\n							组团社\r\n							{{else}}\r\n							组团社 地接社\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							{{if partnerAgency.level == 1}}\r\n							金牌\r\n							{{else if partnerAgency.level == 2}}\r\n							银牌\r\n							{{else if partnerAgency.level == 3}}\r\n							铜牌\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							{{if partnerAgency.province != null}}\r\n								{{partnerAgency.province.name}}\r\n							{{/if}}\r\n							{{if partnerAgency.city != null}}\r\n								-{{partnerAgency.city.name}}\r\n							{{/if}}\r\n							{{if partnerAgency.district != null}}\r\n								-{{partnerAgency.district.name}}\r\n							{{/if}}\r\n						</td>\r\n						<td>{{if partnerAgency.partnerHeaderAgency!=null}}{{partnerAgency.partnerHeaderAgency.name}}{{/if}}</td>             \r\n						<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a data-entiy-id="{{partnerAgency.id}}" class="cursor btn-partnerAgency-view">\r\n									查看\r\n								</a>\r\n								<a data-entiy-id="{{partnerAgency.id}}" class="cursor btn-partnerAgency-edit R-right" data-right="1150003">\r\n									<label class="padding-right20">|</label>\r\n									编辑\r\n								</a>\r\n								<a data-entiy-id="{{partnerAgency.id}}" class="cursor btn-partnerAgency-delete R-right" data-right="1150004">\r\n									<label class="padding-right20">|</label>\r\n									删除\r\n								</a>\r\n							</div>\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n										<li>\r\n											<a data-entiy-id="{{partnerAgency.id}}" href="javascript:void(0)" class="tooltip-success btn-partnerAgency-view" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n											<a data-entiy-id="{{partnerAgency.id}}" href="javascript:void(0)" class="tooltip-success btn-partnerAgency-edit" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n			\r\n										<li>\r\n											<a data-entiy-id="{{partnerAgency.id}}" href="javascript:void(0)" class="tooltip-error btn-partnerAgency-delete" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}} \r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});