/*TMODJS:{"debug":true,"version":375,"md5":"61bedda7e054f794e78ed23b1241f145"}*/
define(function(require) {
    return require("../../../template")("resource/lineProduct/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, lineProductList = $data.lineProductList, recordSize = ($data.lineProduct, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="search-area globalAdd"> <input name="lineProduct_name" class="col-xs-2 input-default-height guideInputList T-lineproduct-name" value="', 
            $line = 2, $out += $escape(searchParam.name), $out += '" placeholder="请输入线路产品名称关键词" />&nbsp; <label class="pull-left" style="margin-left: 40px;padding-left: 5px;">线路类型:</label> <input name="lineProductType" class="col-xs-1 input-default-height T-lineproduct-type" value="', 
            $line = 4, $out += $escape(searchParam.type), $out += '" placeholder="请选择线路类型" style="margin-left:5px;" /> <label class="pull-left" style="margin-left: 40px;">针对客源:</label> <div class="col-sm-1 "> <select name="customerType" id="" style="width: 70px;"> <option value="" ', 
            $line = 8, "" == searchParam.customerType && ($out += 'selected="selected" ', $line = 8), 
            $out += '>全部</option> <option value="0" ', $line = 9, "0" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 9), $out += '>散客</option> <option value="1" ', $line = 10, "1" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 10), $out += '>团体</option> </select> </div> <div class="btn-group btn-status T-status"> <button data-value="', 
            $line = 14, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 16, "" == searchParam.status ? ($out += " 全部 ", $line = 18) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 20) : ($out += " 已停用 ", $line = 22), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class=" btn-sm T-btn-search btn-lineProduct-search search-btn" style="margin-left: 33px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>线路产品名称</th> <th>车</th> <th>险</th> <th>餐</th> <th>房</th> <th>景</th> <th>票</th> <th>购</th> <th>娱</th> <th>它</th> <th>是否启用</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 62, $each(lineProductList, function(lineProduct) {
                $out += ' <tr class="lineProduct-', $line = 63, $out += $escape(lineProduct.id), 
                $out += '" data-id="', $line = 63, $out += $escape(lineProduct.id), $out += '"> <td style="width: 300px" class="h-touristGroupInfo"> <p class="h-lineName">', 
                $line = 65, $out += $escape(lineProduct.name), $out += '</p> <p > <span class="h-agencyName">', 
                $line = 66, $out += $escape(lineProduct.type), $out += '</span> <span class="h-memberName"> ', 
                $line = 68, 1 == lineProduct.customerType ? ($out += " 团体 ", $line = 70) : ($out += " 散客 ", 
                $line = 72), $out += ' </span> <span class="F-float F-count h-peopleCount">', $line = 74, 
                $out += $escape(lineProduct.days), $out += "</span></p> </td> <td> ", $line = 77, 
                1 == lineProduct.busCompanyStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 78) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 79), 
                $out += " </td> <td> ", $line = 82, 1 == lineProduct.insuranceStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 83) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 84), 
                $out += " </td> <td> ", $line = 87, 1 == lineProduct.restaurantStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 88) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 89), 
                $out += " </td> <td> ", $line = 92, 1 == lineProduct.hotelStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 93) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 94), 
                $out += " </td> <td> ", $line = 97, 1 == lineProduct.scenicStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 98) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 99), 
                $out += " </td> <td> ", $line = 102, 1 == lineProduct.ticketStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 103) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 104), 
                $out += " </td> <td> ", $line = 107, 1 == lineProduct.shopStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 108) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 109), 
                $out += " </td> <td> ", $line = 112, 1 == lineProduct.selfPayStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 113) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 114), 
                $out += " </td> <td> ", $line = 117, 1 == lineProduct.otherStatus ? ($out += ' <i class="ace-icon fa fa-check green"></i> ', 
                $line = 118) : ($out += ' <i class="ace-icon fa fa-times red"></i> ', $line = 119), 
                $out += ' </td> <td width="80"> ', $line = 122, 1 == lineProduct.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 123) : ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 124), $out += ' </td> <td width="280"> <a data-entiy-id="', $line = 127, 
                $out += $escape(lineProduct.id), $out += '" class="T-action R-right ', $line = 127, 
                1 == lineProduct.status && 1 == lineProduct.customerType && ($out += "T-quote", 
                $line = 127), $out += ' cursor" title="报价" data-right="1440001" ', $line = 127, 
                (1 != lineProduct.customerType || 1 != lineProduct.status) && ($out += 'style="color:#bbb;" ', 
                $line = 127), $out += '> 报价 <label class="pad-l-5">|</label> </a> <a data-entiy-id="', 
                $line = 131, $out += $escape(lineProduct.id), $out += '" class="T-action T-view cursor" title="查看"> 查看 </a> <a data-entiy-id="', 
                $line = 134, $out += $escape(lineProduct.id), $out += '" class="T-action T-edit cursor R-right" data-right="1110003" title="编辑"> <label class="padding-right20">|</label> 编辑 </a> <a data-entiy-id="', 
                $line = 138, $out += $escape(lineProduct.id), $out += '" class="T-action T-copy cursor R-right" data-right="1110005" title="复制"> <label class="padding-right20">|</label> 复制 </a> <a data-entiy-id="', 
                $line = 142, $out += $escape(lineProduct.id), $out += '" class="T-action T-export cursor R-right" data-right="1110006" title="导出"> <label class="padding-right20">|</label> 导出 </a> <a data-entiy-id="', 
                $line = 146, $out += $escape(lineProduct.id), $out += '" class="T-action T-delete cursor R-right" data-right="1110004" title="删除"> <label class="padding-right20">|</label> 删除 </a> </td> </tr> ', 
                $line = 152;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-4"> <small>共计 ', 
            $line = 157, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n    <input name="lineProduct_name" class="col-xs-2 input-default-height guideInputList T-lineproduct-name" value="{{searchParam.name}}" placeholder="请输入线路产品名称关键词" />&nbsp;\r\n    <label class="pull-left" style="margin-left: 40px;padding-left: 5px;">线路类型:</label>\r\n    <input name="lineProductType" class="col-xs-1 input-default-height T-lineproduct-type" value="{{searchParam.type}}" placeholder="请选择线路类型" style="margin-left:5px;" />\r\n    <label class="pull-left" style="margin-left: 40px;">针对客源:</label>\r\n    <div class="col-sm-1 ">\r\n        <select name="customerType" id="" style="width: 70px;">\r\n            <option value="" {{if searchParam.customerType=="" }}selected="selected" {{/if}}>全部</option>\r\n            <option value="0" {{if searchParam.customerType=="0" }}selected="selected" {{/if}}>散客</option>\r\n            <option value="1" {{if searchParam.customerType=="1" }}selected="selected" {{/if}}>团体</option>\r\n        </select>\r\n    </div>\r\n    <div class="btn-group btn-status T-status">\r\n        <button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n            <span>\r\n			   {{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用\r\n				{{/if}}\r\n			</span>\r\n            <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n        </button>\r\n        <ul class="dropdown-menu">\r\n            <li>\r\n                <a data-value="" href="javascript:void(0)">全部</a>\r\n            </li>\r\n            <li>\r\n                <a data-value="1" href="javascript:void(0)">已启用</a>\r\n            </li>\r\n            <li>\r\n                <a data-value="0" href="javascript:void(0)">已停用</a>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    <button class=" btn-sm T-btn-search btn-lineProduct-search search-btn" style="margin-left: 33px;">\r\n        <i class="ace-icon fa fa-search"></i> 搜索\r\n    </button>\r\n</div>\r\n<div class="row">\r\n    <div class="col-xs-12">\r\n        <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n            <thead>\r\n                <tr class="bg-blur">\r\n                    <th>线路产品名称</th>\r\n                    <th>车</th>\r\n                    <th>险</th>\r\n                    <th>餐</th>\r\n                    <th>房</th>\r\n                    <th>景</th>\r\n                    <th>票</th>\r\n                    <th>购</th>\r\n                    <th>娱</th>\r\n                    <th>它</th>\r\n                    <th>是否启用</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-list">\r\n                {{each lineProductList as lineProduct}}\r\n                <tr class="lineProduct-{{lineProduct.id}}" data-id="{{lineProduct.id}}">\r\n                    <td style="width: 300px" class="h-touristGroupInfo">\r\n                        <p class="h-lineName">{{lineProduct.name}}</p>\r\n                        <p > <span class="h-agencyName">{{lineProduct.type}}</span>\r\n                            <span class="h-memberName">\r\n								{{if lineProduct.customerType == 1}}\r\n									团体\r\n								{{else}}\r\n									散客\r\n								{{/if}}\r\n							</span>\r\n                            <span class="F-float F-count h-peopleCount">{{lineProduct.days}}</span></p>\r\n                    </td>\r\n                    <td>\r\n                        {{if lineProduct.busCompanyStatus == 1}}\r\n                        <i class="ace-icon fa fa-check green"></i> {{else}}\r\n                        <i class="ace-icon fa fa-times red"></i> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if lineProduct.insuranceStatus == 1}}\r\n                        <i class="ace-icon fa fa-check green"></i> {{else}}\r\n                        <i class="ace-icon fa fa-times red"></i> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if lineProduct.restaurantStatus == 1}}\r\n                        <i class="ace-icon fa fa-check green"></i> {{else}}\r\n                        <i class="ace-icon fa fa-times red"></i> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if lineProduct.hotelStatus == 1}}\r\n                        <i class="ace-icon fa fa-check green"></i> {{else}}\r\n                        <i class="ace-icon fa fa-times red"></i> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if lineProduct.scenicStatus == 1}}\r\n                        <i class="ace-icon fa fa-check green"></i> {{else}}\r\n                        <i class="ace-icon fa fa-times red"></i> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if lineProduct.ticketStatus == 1}}\r\n                        <i class="ace-icon fa fa-check green"></i> {{else}}\r\n                        <i class="ace-icon fa fa-times red"></i> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if lineProduct.shopStatus == 1}}\r\n                        <i class="ace-icon fa fa-check green"></i> {{else}}\r\n                        <i class="ace-icon fa fa-times red"></i> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if lineProduct.selfPayStatus == 1}}\r\n                        <i class="ace-icon fa fa-check green"></i> {{else}}\r\n                        <i class="ace-icon fa fa-times red"></i> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if lineProduct.otherStatus == 1}}\r\n                        <i class="ace-icon fa fa-check green"></i> {{else}}\r\n                        <i class="ace-icon fa fa-times red"></i> {{/if}}\r\n                    </td>\r\n                    <td width="80">\r\n                        {{if lineProduct.status == 1}}\r\n                        <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 {{else}}\r\n                        <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 {{/if}}\r\n                    </td>\r\n                    <td width="280">\r\n                        <a data-entiy-id="{{lineProduct.id}}" class="T-action R-right {{if lineProduct.status == 1 && lineProduct.customerType == 1}}T-quote{{/if}} cursor" title="报价" data-right="1440001" {{if lineProduct.customerType !=1 || lineProduct.status !=1 }}style="color:#bbb;" {{/if}}>\r\n								报价\r\n								<label class="pad-l-5">|</label>\r\n							</a>\r\n                        <a data-entiy-id="{{lineProduct.id}}" class="T-action T-view cursor" title="查看">\r\n								查看\r\n							</a>\r\n                        <a data-entiy-id="{{lineProduct.id}}" class="T-action T-edit cursor R-right" data-right="1110003" title="编辑">\r\n                            <label class="padding-right20">|</label>\r\n                            编辑\r\n                        </a>\r\n                        <a data-entiy-id="{{lineProduct.id}}" class="T-action T-copy cursor R-right" data-right="1110005" title="复制">\r\n                            <label class="padding-right20">|</label>\r\n                            复制\r\n                        </a>\r\n                        <a data-entiy-id="{{lineProduct.id}}" class="T-action T-export cursor R-right" data-right="1110006" title="导出">\r\n                            <label class="padding-right20">|</label>\r\n                            导出\r\n                        </a>\r\n                        <a data-entiy-id="{{lineProduct.id}}" class="T-action T-delete cursor R-right" data-right="1110004" title="删除">\r\n                            <label class="padding-right20">|</label>\r\n                            删除\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-4">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-8">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});