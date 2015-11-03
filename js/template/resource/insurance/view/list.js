/*TMODJS:{"debug":true,"version":89,"md5":"6d1e0bfdfd3d6db0ac8ce3fe24216d4d"}*/
define(function(require) {
    return require("../../../template")("resource/insurance/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, insuranceList = $data.insuranceList, recordSize = ($data.insurance, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="search-area T-search-area globalAdd"> <input name="insurance_name" class="col-xs-2 input-default-height" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入保险名称关键词"/>&nbsp; <button class=" btn-sm T-btn-insurance-search pull-left search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group T-btn-status" style="margin-left: 20px"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success T-btn-insurance-add R-right" data-right="1080002" style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增保险公司 </button> </div> <div class="row T-insuranceList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:25%;"></col> <col style="width:10%;"></col> <col style="width:17%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:8%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th class="col-sm-3">公司名称</th> <th class="col-sm-1">公司电话</th> <th class="col-sm-3">地区</th> <th class="col-sm-1">联系人</th> <th class="col-sm-1">联系电话</th> <th class="col-sm-1">启用标志</th> <th class="col-sm-2">操作</th> </tr> </thead> <tbody> ', 
            $line = 63, $each(insuranceList, function(insurance) {
                $out += ' <tr data-entity-id="', $line = 64, $out += $escape(insurance.id), $out += '"> <td>', 
                $line = 65, $out += $escape(insurance.name), $out += "</td> <td>", $line = 66, $out += $escape(insurance.telNumber), 
                $out += "</td> <td> ", $line = 68, null != insurance.province && ($out += " ", $line = 69, 
                $out += $escape(insurance.province.name), $out += " ", $line = 70), $out += " ", 
                $line = 71, null != insurance.city && ($out += " -", $line = 72, $out += $escape(insurance.city.name), 
                $out += " ", $line = 73), $out += " ", $line = 74, null != insurance.district && ($out += " -", 
                $line = 75, $out += $escape(insurance.district.name), $out += " ", $line = 76), 
                $out += " </td> <td>", $line = 79, $out += $escape(insurance.managerName), $out += "</td> <td>", 
                $line = 80, $out += $escape(insurance.mobileNumber), $out += "</td> <td> ", $line = 82, 
                1 == insurance.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 85) : 0 == insurance.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 89), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entiy-id="', 
                $line = 93, $out += $escape(insurance.id), $out += '" class="T-view cursor T-action"> 查看 </a> <a data-entiy-id="', 
                $line = 96, $out += $escape(insurance.id), $out += '" class="T-edit cursor T-action R-right" data-right="1080003"> <label class="padding-right20">|</label> 编辑 </a> <a data-entiy-id="', 
                $line = 100, $out += $escape(insurance.id), $out += '" class="T-delete cursor T-action R-right" data-right="1080004"> <label class="padding-right20">|</label> 删除 </a> </div> </td> </tr> ', 
                $line = 107;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite"><small>共计 ', 
            $line = 113, $out += $escape(recordSize), $out += ' 条记录</small></div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area T-search-area globalAdd">\r\n	<input name="insurance_name" class="col-xs-2 input-default-height" value="{{searchParam.name}}" placeholder="请输入保险名称关键词"/>&nbsp;\r\n	<button class=" btn-sm  T-btn-insurance-search pull-left search-btn">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group T-btn-status" style="margin-left: 20px">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}				\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n		    <li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<button class="btn btn-sm btn-success T-btn-insurance-add R-right" data-right="1080002" style="margin-left: 20px;">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增保险公司\r\n	</button>\r\n</div>\r\n<div class="row T-insuranceList">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<colgroup>\r\n            	<col style="width:25%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:17%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            </colgroup>\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th class="col-sm-3">公司名称</th>\r\n					<th class="col-sm-1">公司电话</th>\r\n					<th class="col-sm-3">地区</th>\r\n					<th class="col-sm-1">联系人</th>\r\n					<th class="col-sm-1">联系电话</th>\r\n					<th class="col-sm-1">启用标志</th>\r\n					<th class="col-sm-2">操作</th>\r\n				</tr>\r\n			</thead>\r\n		\r\n			<tbody>\r\n				{{each insuranceList as insurance}}\r\n					<tr data-entity-id="{{insurance.id}}">\r\n					 	<td>{{insurance.name}}</td>\r\n						<td>{{insurance.telNumber}}</td> \r\n						<td>\r\n							{{if insurance.province != null}}\r\n								{{insurance.province.name}}\r\n							{{/if}}\r\n							{{if insurance.city != null}}\r\n								-{{insurance.city.name}}\r\n							{{/if}}\r\n							{{if insurance.district != null}}\r\n								-{{insurance.district.name}}\r\n							{{/if}}		\r\n						\r\n						</td>\r\n						<td>{{insurance.managerName}}</td>	\r\n						<td>{{insurance.mobileNumber}}</td>\r\n						<td>\r\n							{{if insurance.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已启用\r\n							{{else if insurance.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n\r\n								已停用\r\n							{{/if}}	\r\n						</td> \r\n					 	<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a data-entiy-id="{{insurance.id}}" class="T-view cursor T-action">\r\n									查看\r\n								</a>\r\n								<a data-entiy-id="{{insurance.id}}" class="T-edit cursor T-action R-right" data-right="1080003">\r\n									<label class="padding-right20">|</label>\r\n									编辑\r\n								</a>\r\n								<a data-entiy-id="{{insurance.id}}" class="T-delete cursor T-action R-right" data-right="1080004">\r\n									<label class="padding-right20">|</label>\r\n									删除\r\n								</a>\r\n							</div>\r\n						</td>\r\n					</tr> \r\n				{{/each}} \r\n			</tbody>\r\n		</table>\r\n		\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite"><small>共计 {{recordSize}} 条记录</small></div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});