/*TMODJS:{"debug":true,"version":77,"md5":"3608dd365a9619fc912094620215ef93"}*/
define(function(require) {
    return require("../../../template")("resource/selfpay/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, selfPayList = $data.selfPayList, recordSize = ($data.selfpay, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="search-area globalAdd"> <input name="selfpay_name" class="col-xs-2 input-default-height guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入自费项目名称关键词"/>&nbsp; <button class=" btn-sm btn-selfpay-search pull-left search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group btn-status" style="margin-left: 20px"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success btn-selfpay-add" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增自费项目 </button> </div> <div class="row selfpayList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:21%;"></col> <col style="width:12%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> <col style="width:12%;"></col> <col style="width:10%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-3">公司名称</th> <th class="col-sm-1">公司电话</th> <th class="col-sm-3">地区</th> <th class="col-sm-1">联系人</th> <th class="col-sm-1">联系电话</th> <th class="col-sm-1">启用标志</th> <th class="col-sm-2">操作</th> </tr> </thead> <tbody> ', 
            $line = 66, $each(selfPayList, function(selfpay) {
                $out += ' <tr class="selfpay-', $line = 67, $out += $escape(selfpay.id), $out += '"> <td>', 
                $line = 68, $out += $escape(selfpay.name), $out += "</td> <td>", $line = 69, $out += $escape(selfpay.telNumber), 
                $out += "</td> <td> ", $line = 71, null != selfpay.province && ($out += " ", $line = 72, 
                $out += $escape(selfpay.province.name), $out += " ", $line = 73), $out += " ", $line = 74, 
                null != selfpay.city && ($out += " -", $line = 75, $out += $escape(selfpay.city.name), 
                $out += " ", $line = 76), $out += " ", $line = 77, null != selfpay.district && ($out += " -", 
                $line = 78, $out += $escape(selfpay.district.name), $out += " ", $line = 79), $out += " </td> <td>", 
                $line = 82, $out += $escape(selfpay.managerName), $out += "</td> <td>", $line = 83, 
                $out += $escape(selfpay.mobileNumber), $out += "</td> <td> ", $line = 85, 1 == selfpay.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 88) : 0 == selfpay.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 91), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 95, $out += $escape(selfpay.id), $out += '" class=" btn-selfpay-view cursor"> 查看 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 98, $out += $escape(selfpay.id), $out += '" class=" btn-selfpay-edit cursor"> 编辑 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 101, $out += $escape(selfpay.id), $out += '" class="btn-selfpay-delete cursor "> 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 114, $out += $escape(selfpay.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-selfpay-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 121, $out += $escape(selfpay.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-selfpay-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 129, $out += $escape(selfpay.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-selfpay-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 140;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 146, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 155, 0 == totalPage ? ($out += " 0/0 ", $line = 157) : ($out += " ", $line = 158, 
            $out += $escape(pageNo + 1), $out += "/", $line = 158, $out += $escape(totalPage), 
            $out += " ", $line = 159), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n	<input name="selfpay_name" class="col-xs-2 input-default-height guideInputList" value="{{searchParam.name}}" placeholder="请输入自费项目名称关键词"/>&nbsp;\r\n	<button class=" btn-sm  btn-selfpay-search pull-left search-btn">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group btn-status" style="margin-left: 20px">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}			\r\n				\r\n\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n		    <li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n\r\n	<button class="btn btn-sm btn-success btn-selfpay-add" style="margin-left: 20px">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增自费项目\r\n	</button>\r\n</div>\r\n<div class="row selfpayList">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<colgroup>\r\n            	<col style="width:21%;"></col>\r\n            	<col style="width:12%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            	<col style="width:12%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            </colgroup>\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-3">公司名称</th>\r\n					<th class="col-sm-1">公司电话</th>\r\n					<th class="col-sm-3">地区</th>\r\n					<th class="col-sm-1">联系人</th>\r\n					<th class="col-sm-1">联系电话</th>\r\n					<th class="col-sm-1">启用标志</th>\r\n					<th class="col-sm-2">操作</th>\r\n				</tr>\r\n			</thead>\r\n		\r\n			<tbody>\r\n				{{each selfPayList as selfpay}}\r\n					<tr class="selfpay-{{selfpay.id}}">\r\n					 	<td>{{selfpay.name}}</td>\r\n						<td>{{selfpay.telNumber}}</td> \r\n						<td>\r\n							{{if selfpay.province != null}}\r\n								{{selfpay.province.name}}\r\n							{{/if}}\r\n							{{if selfpay.city != null}}\r\n								-{{selfpay.city.name}}\r\n							{{/if}}\r\n							{{if selfpay.district != null}}\r\n								-{{selfpay.district.name}}\r\n							{{/if}}		\r\n						\r\n						</td>\r\n						<td>{{selfpay.managerName}}</td>	\r\n						<td>{{selfpay.mobileNumber}}</td>\r\n						<td>\r\n							{{if selfpay.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已启用\r\n							{{else if selfpay.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已停用\r\n							{{/if}}\r\n						</td> \r\n					 	<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a data-entity-id="{{selfpay.id}}" class=" btn-selfpay-view cursor">\r\n									查看\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{selfpay.id}}" class=" btn-selfpay-edit cursor">\r\n									编辑\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{selfpay.id}}" class="btn-selfpay-delete cursor ">\r\n									删除\r\n								</a>\r\n							</div>\r\n\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n			\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n										<li>\r\n											<a data-entity-id="{{selfpay.id}}" href="javascript:void(0)" class="tooltip-error btn-selfpay-view" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n											<a data-entity-id="{{selfpay.id}}" href="javascript:void(0)" class="tooltip-success btn-selfpay-edit" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n			\r\n										<li>\r\n											<a data-entity-id="{{selfpay.id}}" href="javascript:void(0)" class="tooltip-error btn-selfpay-delete" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr> \r\n				{{/each}} \r\n			</tbody>\r\n		</table>\r\n		\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n						\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});