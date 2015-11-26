/*TMODJS:{"debug":true,"version":266,"md5":"6cc4c6b78df79f3120848ace75b3ff12"}*/
define(function(require) {
    return require("../../../template")("resource/lineProduct/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, lineProductList = $data.lineProductList, recordSize = ($data.lineProduct, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="search-area globalAdd"> <input name="lineProduct_name" class="col-xs-2 input-default-height guideInputList T-lineproduct-name" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入线路产品名称关键词"/>&nbsp; <button class=" btn-sm T-btn-search btn-lineProduct-search pull-left search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group btn-status T-status" style="margin-left: 20px"> <button data-value="', 
            $line = 8, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 10, "" == searchParam.status ? ($out += " 全部 ", $line = 12) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 14) : ($out += " 已停用 ", $line = 16), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>线路产品名称</th> <th>线路类别</th> <th>针对客源</th> <th>行程天数</th> <th>导游</th> <th>车队</th> <th>餐厅</th> <th>酒店</th> <th>购物</th> <th>景区</th> <th>票务</th> <th>保险</th> <th>自费</th> <th>是否启用</th>  <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 60, $each(lineProductList, function(lineProduct) {
                $out += ' <tr class="lineProduct-', $line = 61, $out += $escape(lineProduct.id), 
                $out += '" data-id="', $line = 61, $out += $escape(lineProduct.id), $out += '"> <td style="width: 300px">', 
                $line = 62, $out += $escape(lineProduct.name), $out += '</td> <td style="width: 240px">', 
                $line = 63, $out += $escape(lineProduct.type), $out += "</td> <td> ", $line = 65, 
                1 == lineProduct.customerType ? ($out += " 团体 ", $line = 67) : ($out += " 散客 ", 
                $line = 69), $out += " </td> <td>", $line = 71, $out += $escape(lineProduct.days), 
                $out += "</td> <td> ", $line = 73, 1 == lineProduct.guideStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 75) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 77), 
                $out += " </td> <td> ", $line = 80, 1 == lineProduct.busCompanyStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 82) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 84), 
                $out += " </td> <td> ", $line = 87, 1 == lineProduct.restaurantStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 89) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 91), 
                $out += " </td> <td> ", $line = 94, 1 == lineProduct.hotelStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 96) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 98), 
                $out += " </td> <td> ", $line = 101, 1 == lineProduct.shopStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 103) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 105), 
                $out += " </td> <td> ", $line = 108, 1 == lineProduct.scenicStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 110) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 112), 
                $out += " </td> <td> ", $line = 115, 1 == lineProduct.ticketStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 117) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 119), 
                $out += " </td> <td> ", $line = 122, 1 == lineProduct.insuranceStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 124) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 126), 
                $out += " </td> <td> ", $line = 129, 1 == lineProduct.selfPayStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 131) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 133), 
                $out += ' </td> <td width="80"> ', $line = 136, 1 == lineProduct.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 139) : ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 142), $out += ' </td> <td width="280"> <a data-entiy-id="', $line = 145, 
                $out += $escape(lineProduct.id), $out += '" class="T-action R-right ', $line = 145, 
                1 == lineProduct.customerType && ($line = 145, 1 == lineProduct.status && ($out += "T-quote", 
                $line = 145), $line = 145), $out += ' cursor" title="报价" data-right="1440001" ', 
                $line = 145, 1 != lineProduct.customerType && ($line = 145, 1 != lineProduct.status && ($out += 'style="color:#bbb;"', 
                $line = 145), $line = 145), $out += '> 报价 </a> <a data-entiy-id="', $line = 148, 
                $out += $escape(lineProduct.id), $out += '" class="T-action T-view cursor" title="查看"> <label class="padding-right20">|</label> 查看 </a> <a data-entiy-id="', 
                $line = 152, $out += $escape(lineProduct.id), $out += '" class="T-action T-edit cursor R-right" data-right="1110003" title="编辑"> <label class="padding-right20">|</label> 编辑 </a> <a data-entiy-id="', 
                $line = 156, $out += $escape(lineProduct.id), $out += '" class="T-action T-copy cursor R-right" data-right="1110005" title="复制"> <label class="padding-right20">|</label> 复制 </a> <a data-entiy-id="', 
                $line = 160, $out += $escape(lineProduct.id), $out += '" class="T-action T-export cursor R-right" data-right="1110006" title="导出"> <label class="padding-right20">|</label> 导出 </a> <a data-entiy-id="', 
                $line = 164, $out += $escape(lineProduct.id), $out += '" class="T-action T-delete cursor R-right" data-right="1110004" title="删除"> <label class="padding-right20">|</label> 删除 </a> </td> </tr> ', 
                $line = 170;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 175, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n	<input name="lineProduct_name" class="col-xs-2 input-default-height guideInputList T-lineproduct-name" value="{{searchParam.name}}" placeholder="请输入线路产品名称关键词"/>&nbsp;\r\n	<button class=" btn-sm  T-btn-search btn-lineProduct-search pull-left search-btn">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group btn-status T-status" style="margin-left: 20px">\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n			<span>\r\n			   {{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu">\r\n			<li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n</div>\r\n\r\n<div class="row">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover T-showHighLight">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>线路产品名称</th>\r\n					<th>线路类别</th>\r\n					<th>针对客源</th>\r\n					<th>行程天数</th>\r\n					<th>导游</th>\r\n					<th>车队</th>\r\n					<th>餐厅</th>\r\n					<th>酒店</th>\r\n					<th>购物</th>\r\n					<th>景区</th>\r\n					<th>票务</th>\r\n					<th>保险</th>\r\n					<th>自费</th>\r\n					<th>是否启用</th>\r\n					<!-- <th>报价</th> -->\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n\r\n			<tbody class="T-list">\r\n				{{each lineProductList as lineProduct}}\r\n					<tr class="lineProduct-{{lineProduct.id}}" data-id="{{lineProduct.id}}">\r\n						<td style="width: 300px">{{lineProduct.name}}</td>\r\n						<td style="width: 240px">{{lineProduct.type}}</td>\r\n						<td>\r\n						{{if lineProduct.customerType == 1}}\r\n							团体\r\n						{{else}}\r\n							散客\r\n						{{/if}}\r\n						</td>\r\n						<td>{{lineProduct.days}}</td>\r\n						<td>\r\n						{{if lineProduct.guideStatus == 1}}\r\n							<i class="ace-icon fa fa-check green"></i>\r\n						{{else}}\r\n							<i class="ace-icon fa fa-times red"></i>\r\n						{{/if}}\r\n						</td>\r\n						<td>\r\n						{{if lineProduct.busCompanyStatus == 1}}\r\n							<i class="ace-icon fa fa-check green"></i>\r\n						{{else}}\r\n							<i class="ace-icon fa fa-times red"></i>\r\n						{{/if}}\r\n						</td>\r\n						<td>\r\n						{{if lineProduct.restaurantStatus == 1}}\r\n							<i class="ace-icon fa fa-check green"></i>\r\n						{{else}}\r\n							<i class="ace-icon fa fa-times red"></i>\r\n						{{/if}}\r\n						</td>\r\n						<td>\r\n						{{if lineProduct.hotelStatus == 1}}\r\n							<i class="ace-icon fa fa-check green"></i>\r\n						{{else}}\r\n							<i class="ace-icon fa fa-times red"></i>\r\n						{{/if}}\r\n						</td>\r\n						<td>\r\n						{{if lineProduct.shopStatus == 1}}\r\n							<i class="ace-icon fa fa-check green"></i>\r\n						{{else}}\r\n							<i class="ace-icon fa fa-times red"></i>\r\n						{{/if}}\r\n						</td>\r\n						<td>\r\n						{{if lineProduct.scenicStatus == 1}}\r\n							<i class="ace-icon fa fa-check green"></i>\r\n						{{else}}\r\n							<i class="ace-icon fa fa-times red"></i>\r\n						{{/if}}\r\n						</td>\r\n						<td>\r\n						{{if lineProduct.ticketStatus == 1}}\r\n							<i class="ace-icon fa fa-check green"></i>\r\n						{{else}}\r\n							<i class="ace-icon fa fa-times red"></i>\r\n						{{/if}}\r\n						</td>\r\n						<td>\r\n						{{if lineProduct.insuranceStatus == 1}}\r\n							<i class="ace-icon fa fa-check green"></i>\r\n						{{else}}\r\n							<i class="ace-icon fa fa-times red"></i>\r\n						{{/if}}\r\n						</td>\r\n						<td>\r\n						{{if lineProduct.selfPayStatus == 1}}\r\n							<i class="ace-icon fa fa-check green"></i>\r\n						{{else}}\r\n							<i class="ace-icon fa fa-times red"></i>\r\n						{{/if}}\r\n						</td>\r\n						<td width="80">\r\n						{{if lineProduct.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n							已启用\r\n						{{else}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n							已停用\r\n						{{/if}}\r\n						</td>\r\n						<td width="280">\r\n							<a data-entiy-id="{{lineProduct.id}}" class="T-action R-right {{if lineProduct.customerType == 1}}{{if lineProduct.status == 1}}T-quote{{/if}}{{/if}} cursor" title="报价" data-right="1440001" {{if lineProduct.customerType != 1}}{{if lineProduct.status != 1}}style="color:#bbb;"{{/if}}{{/if}}>\r\n								报价\r\n							</a>\r\n							<a data-entiy-id="{{lineProduct.id}}" class="T-action T-view cursor" title="查看">\r\n								<label class="padding-right20">|</label>\r\n								查看\r\n							</a>\r\n							<a data-entiy-id="{{lineProduct.id}}" class="T-action T-edit cursor R-right" data-right="1110003" title="编辑">\r\n								<label class="padding-right20">|</label>\r\n								编辑\r\n							</a>\r\n							<a data-entiy-id="{{lineProduct.id}}" class="T-action T-copy cursor R-right" data-right="1110005" title="复制">\r\n								<label class="padding-right20">|</label>\r\n								复制\r\n							</a>\r\n							<a data-entiy-id="{{lineProduct.id}}" class="T-action T-export cursor R-right" data-right="1110006" title="导出">\r\n								<label class="padding-right20">|</label>\r\n								导出\r\n							</a>\r\n							<a data-entiy-id="{{lineProduct.id}}" class="T-action T-delete cursor R-right" data-right="1110004" title="删除">\r\n								<label class="padding-right20">|</label>\r\n								删除\r\n							</a>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-4">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-8">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});