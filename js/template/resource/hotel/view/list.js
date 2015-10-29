/*TMODJS:{"debug":true,"version":62,"md5":"7c0e7abfa2c45f06a4eb6aa4fd1f9bdb"}*/
define(function(require) {
    return require("../../../template")("resource/hotel/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, hotelList = $data.hotelList, recordSize = ($data.hotel, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="T-search-area search-area globalAdd"> <input name="hotel_name" class="col-xs-2 input-default-height col-xs-2 guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入酒店名称关键词"/>&nbsp; <button class=" btn-sm T-btn-hotel-search pull-left search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group btn-status T-select-status" style="margin-left: 20px"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success T-btn-hotel-add R-right" data-right="1040002" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增酒店 </button> </div> <div class="row T-hotelList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover table-fixed"> <colgroup> <col style="width:25%;"></col> <col style="width:10%;"></col> <col style="width:15%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr style="background: #51b0c2;color: white"> <th>酒店名称</th> <th>星级</th> <th>联系人</th> <th>地区</th> <th>联系电话</th> <th>启用标志</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 63, $each(hotelList, function(hotel) {
                $out += ' <tr data-entity-id="', $line = 64, $out += $escape(hotel.id), $out += '"> <td>', 
                $line = 65, $out += $escape(hotel.name), $out += "</td> <td> ", $line = 67, 1 == hotel.level ? ($out += " 三星以下 ", 
                $line = 69) : 2 == hotel.level ? ($out += " 三星 ", $line = 71) : 3 == hotel.level ? ($out += " 准四星 ", 
                $line = 73) : 4 == hotel.level ? ($out += " 四星 ", $line = 75) : 5 == hotel.level ? ($out += " 准五星 ", 
                $line = 77) : 6 == hotel.level ? ($out += " 五星 ", $line = 79) : 7 == hotel.level && ($out += " 五星以上 ", 
                $line = 81), $out += " </td> <td>", $line = 83, $out += $escape(hotel.managerName), 
                $out += "</td> <td> ", $line = 85, null != hotel.province && ($out += " ", $line = 86, 
                $out += $escape(hotel.province.name), $out += " ", $line = 87), $out += " ", $line = 88, 
                null != hotel.city && ($out += " -", $line = 89, $out += $escape(hotel.city.name), 
                $out += " ", $line = 90), $out += " ", $line = 91, null != hotel.district && ($out += " -", 
                $line = 92, $out += $escape(hotel.district.name), $out += " ", $line = 93), $out += " </td> <td>", 
                $line = 96, $out += $escape(hotel.mobileNumber), $out += "</td> <td> ", $line = 98, 
                1 == hotel.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 101) : 0 == hotel.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 104), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a class="T-view cursor T-action" > 查看 </a> <a class="T-edit cursor T-action R-right" data-right="1040003" > <label class="padding-right20">|</label> 编辑 </a> <a class="T-delete cursor T-action R-right" data-right="1040004"> <label class="padding-right20">|</label> 删除 </a> </div> </td> </tr> ', 
                $line = 122;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 128, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-search-area search-area globalAdd">\r\n	<input name="hotel_name" class="col-xs-2 input-default-height col-xs-2 guideInputList" value="{{searchParam.name}}" placeholder="请输入酒店名称关键词"/>&nbsp;\r\n	<button class=" btn-sm T-btn-hotel-search pull-left search-btn">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group btn-status T-select-status" style="margin-left: 20px">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用 \r\n				{{/if}}	\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n			<li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n\r\n	<button class="btn btn-sm btn-success T-btn-hotel-add R-right" data-right="1040002" style="margin-left: 20px">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增酒店\r\n	</button>\r\n</div>\r\n<div class="row T-hotelList">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover table-fixed">\r\n			<colgroup>\r\n            	<col style="width:25%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            </colgroup>\r\n			<thead>\r\n				<tr style="background: #51b0c2;color: white">\r\n					<th>酒店名称</th>\r\n					<th>星级</th>\r\n					<th>联系人</th>\r\n					<th>地区</th>\r\n					<th>联系电话</th>\r\n					<th>启用标志</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n\r\n			<tbody>\r\n				{{each hotelList as hotel}}\r\n					<tr data-entity-id="{{hotel.id}}">\r\n					 	<td>{{hotel.name}}</td>\r\n						<td>\r\n						{{if hotel.level==1 }}\r\n							三星以下\r\n						{{else if hotel.level==2 }}\r\n							三星\r\n						{{else if hotel.level==3 }}\r\n							准四星\r\n						{{else if hotel.level==4 }}\r\n							四星\r\n						{{else if hotel.level==5 }}\r\n							准五星\r\n						{{else if hotel.level==6 }}\r\n							五星\r\n						{{else if hotel.level==7 }}\r\n							五星以上\r\n						{{/if}}\r\n						</td>\r\n						<td>{{hotel.managerName}}</td>\r\n						<td>\r\n							{{if hotel.province != null}}\r\n								{{hotel.province.name}}\r\n							{{/if}}\r\n							{{if hotel.city != null}}\r\n								-{{hotel.city.name}}\r\n							{{/if}}\r\n							{{if hotel.district != null}}\r\n								-{{hotel.district.name}}\r\n							{{/if}}\r\n\r\n						</td>\r\n						<td>{{hotel.mobileNumber}}</td>\r\n						<td>\r\n							{{if hotel.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已启用\r\n							{{else if hotel.status == 0}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已停用\r\n							{{/if}}\r\n						</td>\r\n					 	<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a class="T-view cursor T-action" >\r\n									查看\r\n								</a>\r\n								<a class="T-edit cursor T-action R-right" data-right="1040003" >\r\n									<label class="padding-right20">|</label>\r\n									编辑\r\n								</a>\r\n								<a class="T-delete cursor T-action R-right" data-right="1040004">\r\n									<label class="padding-right20">|</label>\r\n									删除\r\n								</a>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});