/*TMODJS:{"debug":true,"version":14,"md5":"2ed2dc6a09787470514336ce27e88c00"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/searchList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), searchParam = $data.searchParam, $escape = $utils.$escape, $each = $utils.$each, lineProductList = $data.lineProductList, recordSize = ($data.lineProduct, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="col-sm-12" style="margin-top:10px;"> <div class="tabbable tripPlanSearchLine"> <ul id="myTab" class="nav nav-tabs"> <li class="active"> <a href="#chooseLineProductId" data-toggle="tab" aria-expanded="true"> <i class="blue ace-icon fa fa-flag bigger-120"></i> 选择路线 </a> </li> </ul> <div class="tab-content col-xs-12" style="padding:10px 0 0 0;"> <div class="tab-pane fade active in col-xs-12" id="newTripPlanLineProduct"> <div class="search-area"> <input name="lineProduct_name" class="col-xs-2 input-default-height" value="', 
            $line = 15, null != searchParam && ($line = 15, $out += $escape(searchParam.name), 
            $line = 15), $out += '" placeholder="请输入线路名称关键词"/>&nbsp; <button class="btn btn-sm btn-primary btn-lineProduct-search" style="border-top-width: 2px;border-bottom-width: 2px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <table class="table table-striped table-bordered table-hover search-travelLineList-table"> <thead> <tr> <td class="th-border">线路名称</td> <td class="th-border">天数</td> <td class="th-border">类别</td> <td class="th-border">应用范围</td> <td class="th-border">状态</td> <td class="th-border">选择路线</td> </tr> </thead> <tbody>', 
            $line = 32, $each(lineProductList, function(lineProduct) {
                $out += ' <tr> <td> <label class="choice-TravelLine-click"> <input type="radio" class="ace" value="123" name="choice-TravelLine" index="0"> <span class="lbl"> </span> </label> </td> <td name="travelLine-select" data-travelLine-Id="', 
                $line = 42, $out += $escape(lineProduct.id), $out += '"> ', $line = 43, $out += $escape(lineProduct.name), 
                $out += " </td> <td> ", $line = 46, $out += $escape(lineProduct.days), $out += " </td> <td> ", 
                $line = 49, $out += $escape(lineProduct.type), $out += " </td> <td> ", $line = 52, 
                0 == lineProduct.customerType ? ($out += " 散客 ", $line = 54) : 1 == lineProduct.customerType && ($out += " 团体 ", 
                $line = 56), $out += " </td> <td> ", $line = 59, 0 == lineProduct.status ? ($out += " 未启用 ", 
                $line = 61) : 1 == lineProduct.status && ($out += " 已启用 ", $line = 63), $out += " </td> </tr>", 
                $line = 66;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 71, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 80, 0 == totalPage ? ($out += " 0/0 ", $line = 82) : ($out += " ", $line = 83, 
            $out += $escape(pageNo + 1), $out += "/", $line = 83, $out += $escape(totalPage), 
            $out += " ", $line = 84), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary btn-submit-searchtravelLine"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-10"></div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12" style="margin-top:10px;">\r\n	<div class="tabbable tripPlanSearchLine">\r\n		<ul id="myTab" class="nav nav-tabs">\r\n			<li class="active">\r\n				<a href="#chooseLineProductId" data-toggle="tab" aria-expanded="true">\r\n					<i class="blue ace-icon fa fa-flag bigger-120"></i>\r\n					选择路线\r\n				</a>\r\n			</li>\r\n		</ul>\r\n\r\n		<div class="tab-content col-xs-12" style="padding:10px 0 0 0;">\r\n			<div class="tab-pane fade active in col-xs-12" id="newTripPlanLineProduct">\r\n				<div class="search-area">\r\n					<input name="lineProduct_name" class="col-xs-2 input-default-height" value="{{if searchParam != null}}{{searchParam.name}}{{/if}}" placeholder="请输入线路名称关键词"/>&nbsp;\r\n					<button class="btn btn-sm btn-primary btn-lineProduct-search" style="border-top-width: 2px;border-bottom-width: 2px;">\r\n						<i class="ace-icon fa fa-search"></i>\r\n						 搜索 \r\n					</button>\r\n				</div>\r\n				<table class="table table-striped table-bordered table-hover search-travelLineList-table">\r\n					<thead>\r\n						<tr>\r\n							<td class="th-border">线路名称</td>\r\n							<td class="th-border">天数</td>\r\n							<td class="th-border">类别</td>\r\n							<td class="th-border">应用范围</td>\r\n							<td class="th-border">状态</td>\r\n							<td class="th-border">选择路线</td>\r\n						</tr>\r\n					</thead>\r\n					<tbody>{{each lineProductList as lineProduct}}\r\n						<tr>\r\n							<td>\r\n								<label class="choice-TravelLine-click">\r\n									<input type="radio" class="ace" value="123" name="choice-TravelLine" index="0">\r\n									<span class="lbl">\r\n\r\n									</span>\r\n								</label>\r\n							</td>\r\n							<td name="travelLine-select" data-travelLine-Id="{{lineProduct.id}}">\r\n								{{lineProduct.name}}\r\n							</td>\r\n							<td>\r\n								{{lineProduct.days}}\r\n							</td>\r\n							<td>\r\n								{{lineProduct.type}}\r\n							</td>\r\n							<td>\r\n								{{if lineProduct.customerType==0}}\r\n									散客\r\n								{{else if lineProduct.customerType==1}}\r\n									团体\r\n								{{/if}}\r\n							</td>\r\n							<td>\r\n								{{if lineProduct.status==0}}\r\n									未启用\r\n								{{else if lineProduct.status==1}}\r\n									已启用\r\n								{{/if}}\r\n							</td>\r\n\r\n						</tr>{{/each}}\r\n					</tbody>\r\n				</table>\r\n				<div class="row pageMode">\r\n					<div class="col-xs-6">\r\n						<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n					</div>\r\n					<div class="col-xs-6">\r\n						<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n							<ul class="pagination">\r\n								<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n								<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n								<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n									<a href="javascript:void(0)">\r\n										{{if totalPage == 0}}\r\n											0/0\r\n										{{else}}\r\n											{{pageNo+1}}/{{totalPage}}\r\n										{{/if}}\r\n									</a>\r\n								</li>\r\n								<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n								<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n							</ul>\r\n						</div>\r\n					</div>\r\n				</div>\r\n				<div class="space-10"></div>\r\n				<button class="btn btn-block btn-primary btn-submit-searchtravelLine">\r\n					<i class="ace-icon fa fa-check"></i>\r\n					提交信息\r\n				</button>\r\n				<div class="space-10"></div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});