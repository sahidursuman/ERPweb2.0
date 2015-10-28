/*TMODJS:{"debug":true,"version":23,"md5":"dfb4ad5df41adda03766d0c4d3c808a5"}*/
define(function(require) {
    return require("../../../template")("resource/ticket/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, ticketList = $data.ticketList, recordSize = ($data.ticket, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="search-area T-ticketList"> <input name="ticket_name" class="col-xs-2 input-default-height T-ticket-name guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入票务公司名称关键词"/>&nbsp; <button class=" btn-sm T-ticket-search pull-left search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group T-select-ticket marginLeft-30"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success T-ticket-add marginLeft-30" > <i class="ace-icon fa fa-plus"></i> 新增票务 </button> </div> <div class="row ticketList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:20%;"></col> <col style="width:18%;"></col> <col style="width:12%;"></col> <col style="width:13%;"></col> <col style="width:16%;"></col> <col style="width:8%;"></col> <col style="width:13%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-3">票务公司名称</th> <th class="col-sm-2">联系人</th> <th class="col-sm-1">联系电话</th> <th class="col-sm-1">公司电话</th> <th class="col-sm-2">地区</th> <th class="col-sm-1">启用标志</th> <th class="col-sm-2">操作</th> </tr> </thead> <tbody class="T-ticket-list"> ', 
            $line = 62, $each(ticketList, function(ticket) {
                $out += ' <tr data-id="', $line = 63, $out += $escape(ticket.id), $out += '"> <td>', 
                $line = 64, $out += $escape(ticket.name), $out += "</td> <td>", $line = 65, $out += $escape(ticket.managerName), 
                $out += "</td> <td>", $line = 66, $out += $escape(ticket.mobileNumber), $out += "</td> <td>", 
                $line = 67, $out += $escape(ticket.telNumber), $out += '</td> <td class="T-ctrl-tip " title="', 
                $line = 68, $out += $escape(ticket.remark), $out += '"> <span style="height: 35px"> ', 
                $line = 70, null != ticket.province && ($out += " ", $line = 71, $out += $escape(ticket.province.name), 
                $out += " ", $line = 72), $out += " ", $line = 73, null != ticket.city && ($out += " -", 
                $line = 74, $out += $escape(ticket.city.name), $out += " ", $line = 75), $out += " ", 
                $line = 76, null != ticket.district && ($out += " -", $line = 77, $out += $escape(ticket.district.name), 
                $out += " ", $line = 78), $out += " </span> </td> <td> ", $line = 82, 0 == ticket.status ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 85) : ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 88), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 92, $out += $escape(ticket.id), $out += '" class="T-ticket-view cursor T-action"> 查看 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 95, $out += $escape(ticket.id), $out += '" class="T-ticket-edit cursor T-action"> 编辑 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 98, $out += $escape(ticket.id), $out += '" class="T-ticket-delete cursor T-action"> 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 110, $out += $escape(ticket.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-ticket-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 117, $out += $escape(ticket.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-ticket-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 124, $out += $escape(ticket.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-ticket-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr> ', 
                $line = 135;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 140, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area T-ticketList">\r\n	<input name="ticket_name" class="col-xs-2 input-default-height T-ticket-name guideInputList" value="{{searchParam.name}}" placeholder="请输入票务公司名称关键词"/>&nbsp;\r\n	<button class=" btn-sm  T-ticket-search pull-left search-btn">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group T-select-ticket marginLeft-30">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle   block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n		    <li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<button class="btn btn-sm btn-success T-ticket-add marginLeft-30" >\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增票务\r\n	</button>\r\n</div>\r\n<div class="row ticketList">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<colgroup>\r\n            	<col style="width:20%;"></col>\r\n            	<col style="width:18%;"></col>\r\n            	<col style="width:12%;"></col>\r\n            	<col style="width:13%;"></col>\r\n            	<col style="width:16%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:13%;"></col>\r\n            </colgroup>\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-3">票务公司名称</th>\r\n					<th class="col-sm-2">联系人</th>\r\n					<th class="col-sm-1">联系电话</th>\r\n					<th class="col-sm-1">公司电话</th>\r\n					<th class="col-sm-2">地区</th> \r\n					<th class="col-sm-1">启用标志</th>\r\n					<th class="col-sm-2">操作</th>\r\n				</tr>\r\n			</thead>\r\n		\r\n			<tbody class="T-ticket-list">\r\n				{{each ticketList as ticket}}\r\n					<tr data-id="{{ticket.id}}">\r\n						<td>{{ticket.name}}</td>\r\n						<td>{{ticket.managerName}}</td>\r\n						<td>{{ticket.mobileNumber}}</td>\r\n						<td>{{ticket.telNumber}}</td>\r\n						<td class="T-ctrl-tip " title="{{ticket.remark}}">\r\n							<span style="height: 35px">\r\n							{{if ticket.province!=null}}\r\n								{{ticket.province.name}}\r\n							{{/if}}\r\n							{{if ticket.city!=null}}\r\n								-{{ticket.city.name}}\r\n							{{/if}}\r\n							{{if ticket.district!=null}}\r\n								-{{ticket.district.name}}\r\n							{{/if}}\r\n							</span>\r\n						</td>\r\n						<td>\r\n							{{if ticket.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已停用\r\n							{{else ticket.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已启用\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a data-entity-id="{{ticket.id}}" class="T-ticket-view cursor T-action">\r\n									查看\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{ticket.id}}" class="T-ticket-edit cursor T-action">\r\n									编辑\r\n								</a><a href="" class="cursor"> |</a>\r\n								<a data-entity-id="{{ticket.id}}" class="T-ticket-delete cursor T-action">\r\n									删除\r\n								</a>\r\n							</div>\r\n							<div class="hidden-md hidden-lg">\r\n								<div class="inline pos-rel">\r\n									<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n										<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n									</button>\r\n			\r\n									<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n										<li>\r\n											<a data-entity-id="{{ticket.id}}" href="javascript:void(0)" class="tooltip-error btn-ticket-view" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n											<a data-entity-id="{{ticket.id}}" href="javascript:void(0)" class="tooltip-success btn-ticket-edit" data-rel="tooltip">\r\n												<span class="green">\r\n													<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n										<li>\r\n											<a data-entity-id="{{ticket.id}}" href="javascript:void(0)" class="tooltip-error btn-ticket-delete" data-rel="tooltip">\r\n												<span class="red">\r\n													<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n												</span>\r\n											</a>\r\n										</li>\r\n									</ul>\r\n								</div>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}} \r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});