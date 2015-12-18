/*TMODJS:{"debug":true,"version":60,"md5":"7af6377c7c9baa58bd6cf57b2a81fcaa"}*/
define(function(require) {
    return require("../../../template")("resource/ticket/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, ticketList = $data.ticketList, recordSize = ($data.ticket, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="search-area T-ticketList globalAdd"> <input name="ticket_name" class="col-xs-2 input-default-height T-ticket-name guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入票务公司名称关键词"/>&nbsp; <button class=" btn-sm T-ticket-search pull-left search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group T-select-ticket marginLeft-30"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success T-ticket-add R-right" data-right="1070002" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增票务 </button> </div> <div class="row ticketList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <colgroup> <col style="width:20%;"></col> <col style="width:18%;"></col> <col style="width:12%;"></col> <col style="width:13%;"></col> <col style="width:16%;"></col> <col style="width:8%;"></col> <col style="width:13%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-3">票务公司</th> <th class="col-sm-2">联系人</th> <th class="col-sm-1">联系电话</th> <th class="col-sm-1">座机号码</th> <th class="col-sm-2">所在地区</th> <th class="col-sm-1">启用标志</th> <th class="col-sm-2">操作</th> </tr> </thead> <tbody class="T-ticket-list"> ', 
            $line = 61, $each(ticketList, function(ticket) {
                $out += ' <tr data-id="', $line = 62, $out += $escape(ticket.id), $out += '" class="ticket-', 
                $line = 62, $out += $escape(ticket.id), $out += '"> <td>', $line = 63, $out += $escape(ticket.name), 
                $out += "</td> <td>", $line = 64, $out += $escape(ticket.managerName), $out += "</td> <td>", 
                $line = 65, $out += $escape(ticket.mobileNumber), $out += "</td> <td>", $line = 66, 
                $out += $escape(ticket.telNumber), $out += '</td> <td class="T-ctrl-tip " title="', 
                $line = 67, $out += $escape(ticket.remark), $out += '"> <span style="height: 35px"> ', 
                $line = 69, null != ticket.province && ($out += " ", $line = 70, $out += $escape(ticket.province.name), 
                $out += " ", $line = 71), $out += " ", $line = 72, null != ticket.city && ($out += " -", 
                $line = 73, $out += $escape(ticket.city.name), $out += " ", $line = 74), $out += " ", 
                $line = 75, null != ticket.district && ($out += " -", $line = 76, $out += $escape(ticket.district.name), 
                $out += " ", $line = 77), $out += " </span> </td> <td> ", $line = 81, 0 == ticket.status ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 84) : ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 87), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a class="T-ticket-view cursor T-action"> 查看 </a> <a class="T-ticket-edit cursor T-action R-right" data-right="1070003"> <label class="padding-right20">|</label> 编辑 </a> <a class="T-ticket-delete cursor T-action R-right" data-right="1070004"> <label class="padding-right20">|</label> 删除 </a> </div> </div> </td> </tr> ', 
                $line = 106;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 111, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area T-ticketList globalAdd">\r\n	<input name="ticket_name" class="col-xs-2 input-default-height T-ticket-name guideInputList" value="{{searchParam.name}}" placeholder="请输入票务公司名称关键词"/>&nbsp;\r\n	<button class=" btn-sm  T-ticket-search pull-left search-btn">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group T-select-ticket marginLeft-30">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle   block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n		    <li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<button class="btn btn-sm btn-success T-ticket-add R-right" data-right="1070002" style="margin-left: 20px">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增票务\r\n	</button>\r\n</div>\r\n<div class="row ticketList">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n			<colgroup>\r\n            	<col style="width:20%;"></col>\r\n            	<col style="width:18%;"></col>\r\n            	<col style="width:12%;"></col>\r\n            	<col style="width:13%;"></col>\r\n            	<col style="width:16%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:13%;"></col>\r\n            </colgroup>\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-3">票务公司</th>\r\n					<th class="col-sm-2">联系人</th>\r\n					<th class="col-sm-1">联系电话</th>\r\n					<th class="col-sm-1">座机号码</th>\r\n					<th class="col-sm-2">所在地区</th> \r\n					<th class="col-sm-1">启用标志</th>\r\n					<th class="col-sm-2">操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-ticket-list">\r\n				{{each ticketList as ticket}}\r\n					<tr data-id="{{ticket.id}}" class="ticket-{{ticket.id}}">\r\n						<td>{{ticket.name}}</td>\r\n						<td>{{ticket.managerName}}</td>\r\n						<td>{{ticket.mobileNumber}}</td>\r\n						<td>{{ticket.telNumber}}</td>\r\n						<td class="T-ctrl-tip " title="{{ticket.remark}}">\r\n							<span style="height: 35px">\r\n							{{if ticket.province!=null}}\r\n								{{ticket.province.name}}\r\n							{{/if}}\r\n							{{if ticket.city!=null}}\r\n								-{{ticket.city.name}}\r\n							{{/if}}\r\n							{{if ticket.district!=null}}\r\n								-{{ticket.district.name}}\r\n							{{/if}}\r\n							</span>\r\n						</td>\r\n						<td>\r\n							{{if ticket.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已停用\r\n							{{else ticket.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已启用\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a class="T-ticket-view cursor T-action">\r\n									查看\r\n								</a>\r\n								<a class="T-ticket-edit cursor T-action R-right" data-right="1070003">\r\n									<label class="padding-right20">|</label>\r\n									编辑\r\n								</a>\r\n								<a class="T-ticket-delete cursor T-action R-right" data-right="1070004">\r\n									<label class="padding-right20">|</label>\r\n									删除\r\n								</a>\r\n							</div>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}} \r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});