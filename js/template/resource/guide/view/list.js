/*TMODJS:{"debug":true,"version":243,"md5":"45d69225deb48902a67625f532c5773f"}*/
define(function(require) {
    return require("../../../template")("resource/guide/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, guideList = $data.guideList, recordSize = ($data.guide, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="T-search-area search-area guideAdd"> <input name="guide_realname" class="col-xs-2 input-default-height T-guide-name guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.realname), $out += '" placeholder="请输入导游姓名或手机号"/>&nbsp; <button class=" btn-sm T-guide-search pull-left search-btn " style="border-radius: 0;background: #51b0c2;border:2px solid #51b0c2!important;color: white"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group T-select-status" style="margin-left: 20px;"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" style="background: #ffffff!important; border: 1px solid #83bbd6!important;" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success T-add-guide" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增导游 </button> </div> <div class="row guideList guideAdd"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:15%;"></col> <col style="width:5%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:30%;"></col> <col style="width:8%;"></col> <col style="width:12%;"></col> </colgroup> <thead> <tr class="bg-blur guideListSmall"> <th>导游姓名</th> <th>性别</th> <th>联系电话</th> <th>导游等级</th> <th>导游证编号</th> <th>简介</th> <th>启用标志</th> <th>操作</th> </tr> </thead> <tbody class="T-guide-list"> ', 
            $line = 64, $each(guideList, function(guide) {
                $out += ' <tr class="guide-', $line = 65, $out += $escape(guide.id), $out += '" data-id="', 
                $line = 65, $out += $escape(guide.id), $out += '" > <td>', $line = 66, $out += $escape(guide.realname), 
                $out += "</td> <td> ", $line = 68, 0 == guide.gender ? ($out += " 男 ", $line = 70) : ($out += " 女 ", 
                $line = 72), $out += " </td> <td>", $line = 74, $out += $escape(guide.mobileNumber), 
                $out += "</td> <td> ", $line = 76, 1 == guide.guideLevel ? ($out += " 初级导游资格 ", 
                $line = 78) : 2 == guide.guideLevel ? ($out += " 中级导游资格 ", $line = 80) : 3 == guide.guideLevel ? ($out += " 高级导游资格 ", 
                $line = 82) : 4 == guide.guideLevel && ($out += " 特级导游资格 ", $line = 84), $out += " </td> <td>", 
                $line = 86, $out += $escape(guide.guideCardNumber), $out += '</td> <td class="T-ctrl-tip" title="', 
                $line = 87, $out += $escape(guide.remark), $out += '"><span style="height: 35px">', 
                $line = 87, $out += $escape(guide.remark), $out += "</span></td> <td> ", $line = 89, 
                0 == guide.status ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 92) : ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 95), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a class="T-action T-view cursor" > 查看 </a><a href="" class="cursor"> |</a> <a class="T-action T-edit cursor" > 编辑 </a><a href="" class="cursor"> |</a> <a class="T-action T-delete cursor" > 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 118, $out += $escape(guide.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-guide-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 125, $out += $escape(guide.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-guide-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 132, $out += $escape(guide.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-guide-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 143;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 148, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-search-area search-area guideAdd">\r\n	<input name="guide_realname" class="col-xs-2 input-default-height T-guide-name guideInputList" value="{{searchParam.realname}}"  placeholder="请输入导游姓名或手机号"/>&nbsp;\r\n	<button class=" btn-sm  T-guide-search pull-left search-btn " style="border-radius: 0;background: #51b0c2;border:2px solid #51b0c2!important;color: white">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group T-select-status" style="margin-left: 20px;">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" style="background: #ffffff!important; border: 1px solid #83bbd6!important;" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}				\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n			<li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n\r\n	<button class="btn btn-sm btn-success T-add-guide" style="margin-left: 20px">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增导游\r\n	</button>\r\n</div>\r\n<div class="row guideList guideAdd">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover table-fixed">\r\n            <colgroup>\r\n            	<col style="width:15%;"></col>\r\n            	<col style="width:5%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:30%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:12%;"></col>\r\n            </colgroup>\r\n			<thead>\r\n				<tr class="bg-blur guideListSmall">\r\n					<th>导游姓名</th>\r\n					<th>性别</th>\r\n					<th>联系电话</th>\r\n					<th>导游等级</th>\r\n					<th>导游证编号</th>\r\n					<th>简介</th>\r\n					<th>启用标志</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-guide-list">\r\n				{{each guideList as guide}}\r\n					<tr class="guide-{{guide.id}}" data-id="{{guide.id}}" >\r\n						<td>{{guide.realname}}</td>\r\n						<td>\r\n							{{if guide.gender == 0}}\r\n							男\r\n							{{else}}\r\n							女\r\n							{{/if}}\r\n						</td>\r\n						<td>{{guide.mobileNumber}}</td>\r\n						<td>\r\n							{{if guide.guideLevel == 1}}\r\n								初级导游资格\r\n							{{else if guide.guideLevel == 2}}\r\n								中级导游资格\r\n							{{else if guide.guideLevel == 3}}\r\n								高级导游资格\r\n							{{else if guide.guideLevel == 4}}\r\n								特级导游资格\r\n							{{/if}}\r\n						</td>\r\n						<td>{{guide.guideCardNumber}}</td>\r\n						<td class="T-ctrl-tip" title="{{guide.remark}}"><span style="height: 35px">{{guide.remark}}</span></td>\r\n						<td>\r\n							{{if guide.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已停用\r\n							{{else guide.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已启用\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a class="T-action T-view cursor"     >\r\n									查看\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a class="T-action T-edit cursor"     >\r\n									编辑\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a class="T-action T-delete cursor"  >\r\n									删除\r\n								</a>\r\n							</div>\r\n\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n			\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n										<li>\r\n											<a data-entity-id="{{guide.id}}" href="javascript:void(0)" class="tooltip-error btn-guide-view" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n											<a data-entity-id="{{guide.id}}" href="javascript:void(0)" class="tooltip-success btn-guide-edit" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n											<a data-entity-id="{{guide.id}}" href="javascript:void(0)" class="tooltip-error btn-guide-delete" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}} \r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});