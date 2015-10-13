/*TMODJS:{"debug":true,"version":188,"md5":"6df6999168e856887b2b2283dfce9a6f"}*/
define(function(require) {
    return require("../../../template")("resource/busCompany/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, busCompanyList = $data.busCompanyList, recordSize = ($data.busCompany, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="search-area globalAdd"> <input name="busCompany_companyName" class="col-xs-2 input-default-height guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.companyName), $out += '" placeholder="请输入车队名称关键词"/>&nbsp; <button class=" btn-sm btn-busCompany-search pull-left search-btn" > <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group btn-status" style="margin-left: 20px;"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up block-up" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right" ></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增车队 </button> </div> <div class="row busCompanyList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>车队名称</th> <th>车队类型</th> <th>车队地址</th> <th>联系电话</th> <th>车辆数</th> <th>司机数</th> <th>启用标志</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 54, $each(busCompanyList, function(busCompany) {
                $out += ' <tr class="busCompany-', $line = 55, $out += $escape(busCompany.id), $out += '"> <td>', 
                $line = 56, $out += $escape(busCompany.companyName), $out += "</td> <td> ", $line = 58, 
                0 == busCompany.type ? ($out += " 个人 ", $line = 60) : ($out += " 集团 ", $line = 62), 
                $out += " </td> <td> ", $line = 65, null != busCompany.province && ($out += " ", 
                $line = 66, $out += $escape(busCompany.province.name), $out += " ", $line = 67), 
                $out += " ", $line = 68, null != busCompany.city && ($out += " -", $line = 69, $out += $escape(busCompany.city.name), 
                $out += " ", $line = 70), $out += " ", $line = 71, null != busCompany.district && ($out += " -", 
                $line = 72, $out += $escape(busCompany.district.name), $out += " ", $line = 73), 
                $out += " </td> <td>", $line = 75, $out += $escape(busCompany.mobileNumber), $out += "</td> <td>", 
                $line = 76, $out += $escape(busCompany.busCount), $out += "辆</td> <td>", $line = 77, 
                $out += $escape(busCompany.driverCount), $out += "个</td> <td> ", $line = 79, 0 == busCompany.status ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 82) : ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 85), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 90, $out += $escape(busCompany.id), $out += '" class=" btn-busCompany-view cursor"> 查看 </a> <a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 93, $out += $escape(busCompany.id), $out += '" class=" btn-busCompany-edit cursor"> 编辑 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 96, $out += $escape(busCompany.id), $out += '" class=" btn-busCompany-delete cursor"> 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 109, $out += $escape(busCompany.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-busCompany-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 117, $out += $escape(busCompany.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-busCompany-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 124, $out += $escape(busCompany.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-busCompany-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 135;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 140, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 149, 0 == totalPage ? ($out += " 0/0 ", $line = 151) : ($out += " ", $line = 152, 
            $out += $escape(pageNo + 1), $out += "/", $line = 152, $out += $escape(totalPage), 
            $out += " ", $line = 153), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n	<input name="busCompany_companyName" class="col-xs-2 input-default-height guideInputList" value="{{searchParam.companyName}}" placeholder="请输入车队名称关键词"/>&nbsp;\r\n	<button class=" btn-sm  btn-busCompany-search pull-left search-btn" >\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group btn-status" style="margin-left: 20px;">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right" ></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n			<li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<button class="btn btn-sm btn-success btn-busCompany-add " style="margin-left: 20px;">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增车队\r\n	</button>\r\n</div>\r\n<div class="row busCompanyList">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>车队名称</th>\r\n					<th>车队类型</th>\r\n					<th>车队地址</th>\r\n					<th>联系电话</th>\r\n					<th>车辆数</th>\r\n					<th>司机数</th>\r\n					<th>启用标志</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n\r\n			<tbody>\r\n				{{each busCompanyList as busCompany}}\r\n					<tr class="busCompany-{{busCompany.id}}">\r\n						<td>{{busCompany.companyName}}</td>\r\n						<td>\r\n							{{if busCompany.type == 0}}\r\n							个人\r\n							{{else}}\r\n							集团\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							{{if busCompany.province != null}}\r\n								{{busCompany.province.name}}\r\n							{{/if}}\r\n							{{if busCompany.city != null}}\r\n								-{{busCompany.city.name}}\r\n							{{/if}}\r\n							{{if busCompany.district != null}}\r\n								-{{busCompany.district.name}}\r\n							{{/if}}\r\n						</td>\r\n						<td>{{busCompany.mobileNumber}}</td>\r\n						<td>{{busCompany.busCount}}辆</td>\r\n						<td>{{busCompany.driverCount}}个</td>\r\n						<td>\r\n							{{if busCompany.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已停用\r\n							{{else busCompany.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已启用\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n						\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a data-entity-id="{{busCompany.id}}" class=" btn-busCompany-view cursor">\r\n									查看\r\n								</a> <a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{busCompany.id}}" class=" btn-busCompany-edit cursor">\r\n									编辑\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{busCompany.id}}" class=" btn-busCompany-delete cursor">\r\n									删除\r\n								</a>\r\n							</div>\r\n\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n										<li>\r\n											<a data-entity-id="{{busCompany.id}}" href="javascript:void(0)" class="tooltip-error btn-busCompany-view" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n\r\n											<a data-entity-id="{{busCompany.id}}" href="javascript:void(0)" class="tooltip-success btn-busCompany-edit" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n											<a data-entity-id="{{busCompany.id}}" href="javascript:void(0)" class="tooltip-error btn-busCompany-delete" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});