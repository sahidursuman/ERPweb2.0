/*TMODJS:{"debug":true,"version":114,"md5":"56eef034d78decbb85754ba51ddcebf6"}*/
define(function(require) {
    return require("../../../template")("resource/busCompany/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, busCompanyList = $data.busCompanyList, recordSize = ($data.busCompany, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="search-area globalAdd"> <input name="busCompany_companyName" class="col-xs-2 input-default-height T-busCompanyInputList guideInputListAging" value="', 
            $line = 2, $out += $escape(searchParam.companyName), $out += '" placeholder="请输入车队、车牌、联系人或电话关键词"/>&nbsp; <button class=" btn-sm pull-left T-busCompany-search search-btn" > <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group T-select-status" style="margin-left: 20px;"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up block-up" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right" ></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success T-busCompany-add R-right" data-right="1020002" style="margin-left: 20px;"> <i class="ace-icon fa fa-plus"></i> 新增车队 </button> </div> <div class="row busCompanyList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <colgroup> <col style="width:25%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:5%;"></col> <col style="width:5%;"></col> <col style="width:20%;"></col> <col style="width:8%;"></col> <col style="width:12%;"></col> </colgroup> <thead> <tr class="bg-blur"> <th>车队名称</th> <th>联系人</th> <th>联系电话</th> <th>车辆数</th> <th>司机数</th> <th>所在地区</th> <th>启用标志</th> <th>操作</th> </tr> </thead> <tbody class="T-busCompany-list"> ', 
            $line = 64, $each(busCompanyList, function(busCompany) {
                $out += ' <tr class="busCompany-', $line = 65, $out += $escape(busCompany.id), $out += '" data-id="', 
                $line = 65, $out += $escape(busCompany.id), $out += '"> <td>', $line = 66, $out += $escape(busCompany.companyName), 
                $out += "</td> <td>", $line = 67, $out += $escape(busCompany.managerName), $out += "</td> <td>", 
                $line = 68, $out += $escape(busCompany.mobileNumber), $out += '</td> <td><span class="F-float F-count">', 
                $line = 69, $out += $escape(busCompany.busCount), $out += "</span>辆</td> <td>", 
                $line = 70, $out += $escape(busCompany.driverCount), $out += "个</td> <td> ", $line = 72, 
                null != busCompany.province && ($out += " ", $line = 73, $out += $escape(busCompany.province.name), 
                $out += " ", $line = 74), $out += " ", $line = 75, null != busCompany.city && ($out += " -", 
                $line = 76, $out += $escape(busCompany.city.name), $out += " ", $line = 77), $out += " ", 
                $line = 78, null != busCompany.district && ($out += " -", $line = 79, $out += $escape(busCompany.district.name), 
                $out += " ", $line = 80), $out += " </td> <td> ", $line = 83, 0 == busCompany.status ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 86) : ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 89), $out += ' </td> <td> <div class="btn-group"> <a data-entity-id="', 
                $line = 93, $out += $escape(busCompany.id), $out += '" class="T-action T-view cursor"> 查看 </a> <a data-entity-id="', 
                $line = 96, $out += $escape(busCompany.id), $out += '" class="T-action T-edit cursor R-right" data-right="1020003"> <label class="padding-right20">|</label> 编辑 </a> <a data-entity-id="', 
                $line = 100, $out += $escape(busCompany.id), $out += '" class="T-action T-delete cursor R-right" data-right="1020004"> <label class="padding-right20">|</label> 删除 </a> </div> </td> </tr> ', 
                $line = 107;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite"><small>共计 ', 
            $line = 112, $out += $escape(recordSize), $out += ' 条记录</small></div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n	<input name="busCompany_companyName" class="col-xs-2 input-default-height T-busCompanyInputList guideInputListAging" value="{{searchParam.companyName}}" placeholder="请输入车队、车牌、联系人或电话关键词"/>&nbsp;\r\n	<button class=" btn-sm  pull-left T-busCompany-search search-btn" >\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group T-select-status" style="margin-left: 20px;">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right" ></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n			<li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li> \r\n		</ul>\r\n	</div>\r\n	<button class="btn btn-sm btn-success T-busCompany-add R-right" data-right="1020002" style="margin-left: 20px;">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增车队\r\n	</button>\r\n</div>\r\n<div class="row busCompanyList">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n			<colgroup>\r\n            	<col style="width:25%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:5%;"></col>\r\n            	<col style="width:5%;"></col>\r\n            	<col style="width:20%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:12%;"></col>\r\n            </colgroup>\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>车队名称</th>\r\n					<th>联系人</th>\r\n					<th>联系电话</th>\r\n					<th>车辆数</th>\r\n					<th>司机数</th>\r\n					<th>所在地区</th>\r\n					<th>启用标志</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n\r\n			<tbody class="T-busCompany-list">\r\n				{{each busCompanyList as busCompany}}\r\n					<tr class="busCompany-{{busCompany.id}}" data-id="{{busCompany.id}}">\r\n						<td>{{busCompany.companyName}}</td>\r\n						<td>{{busCompany.managerName}}</td>\r\n						<td>{{busCompany.mobileNumber}}</td>\r\n						<td><span class="F-float F-count">{{busCompany.busCount}}</span>辆</td>\r\n						<td>{{busCompany.driverCount}}个</td>\r\n						<td>\r\n							{{if busCompany.province != null}}\r\n								{{busCompany.province.name}}\r\n							{{/if}}\r\n							{{if busCompany.city != null}}\r\n								-{{busCompany.city.name}}\r\n							{{/if}}\r\n							{{if busCompany.district != null}}\r\n								-{{busCompany.district.name}}\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							{{if busCompany.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已停用\r\n							{{else busCompany.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已启用\r\n							{{/if}}\r\n						</td>\r\n						<td>\r\n							<div class="btn-group">\r\n								<a data-entity-id="{{busCompany.id}}" class="T-action T-view cursor">\r\n									查看\r\n								</a>\r\n								<a data-entity-id="{{busCompany.id}}" class="T-action T-edit cursor R-right" data-right="1020003">\r\n									<label class="padding-right20">|</label>\r\n									编辑\r\n								</a>\r\n								<a data-entity-id="{{busCompany.id}}" class="T-action T-delete cursor R-right" data-right="1020004">\r\n									<label class="padding-right20">|</label>\r\n									删除\r\n								</a>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite"><small>共计 {{recordSize}} 条记录</small></div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});