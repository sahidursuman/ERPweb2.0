/*TMODJS:{"debug":true,"version":66,"md5":"d86482c8d83eb14a3e5165bdfe4f4fc8"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/searchList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, update = $data.update, searchParam = $data.searchParam, $out = "";
            return $out += '<div class="col-sm-12 T-tripplan-lineproduct-search-', $line = 1, 
            $out += $escape(update), $out += ' globalAdd" style="margin-top:10px;"> <div class="search-area"> <input name="lineProduct_name" class="col-xs-2 input-default-height guideInputList" value="', 
            $line = 3, null != searchParam && ($line = 3, $out += $escape(searchParam.name), 
            $line = 3), $out += '" placeholder="请输入线路名称关键词"/>&nbsp;  <button class=" btn-sm search-btn T-lineProduct-search" style="border-top-width: 2px;border-bottom-width: 2px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="tabbable"> <ul id="myTab" class="nav nav-tabs"> <li class="active"> <a href="#chooseLineProductId" data-toggle="tab" aria-expanded="true"> <i class="blue ace-icon fa fa-flag bigger-120"></i> 选择路线 </a> </li> <li class=""> <a href="#chooseQuoteId" data-toggle="tab" aria-expanded="false"> <i class="blue ace-icon fa fa-credit-card bigger-120"></i> 选择报价 </a> </li> </ul> <div class="tab-content col-xs-12" style="padding:10px 0 0 0;position: relative;top:-2px"> <div class="tab-pane fade active in col-xs-12" id="chooseLineProductId"> <table class="table table-striped table-bordered table-hover search-travelLineList-table"> <thead> <tr> <td class="th-border">线路名称</td> <td class="th-border">天数</td> <td class="th-border">类别</td> <td class="th-border">应用范围</td> <td class="th-border" width="70">选择</td> </tr> </thead> <tbody class="T-normal-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 <small class="T-total"></small> 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> </div> <div class="tab-pane fade" id="chooseQuoteId"> <div class="col-xs-12" class="search-TravelLineListId"> <table class="table table-striped table-bordered table-hover search-travelLineList-table"> <thead> <tr> <td class="th-border">产品名称</td> <td class="th-border">天数</td> <td class="th-border">类别</td> <td class="th-border">应用范围</td> <td class="th-border">客户</td> <td class="th-border">报价时间</td> <td class="th-border" width="70">选择</td> </tr> </thead> <tbody class="T-quote-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 <small class="T-total"></small> 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-btn-submit guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-10"></div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 T-tripplan-lineproduct-search-{{update}} globalAdd" style="margin-top:10px;">\r\n	<div class="search-area">\r\n		<input name="lineProduct_name" class="col-xs-2 input-default-height guideInputList" value="{{if searchParam != null}}{{searchParam.name}}{{/if}}" placeholder="请输入线路名称关键词"/>&nbsp;\r\n		<!-- <button class="btn btn-sm btn-primary btn-lineProduct-search">\r\n			<i class="ace-icon fa fa-search"></i>\r\n			搜索\r\n		</button> -->\r\n		<button class=" btn-sm search-btn T-lineProduct-search" style="border-top-width: 2px;border-bottom-width: 2px;">\r\n			<i class="ace-icon fa fa-search"></i>\r\n			搜索\r\n		</button>\r\n	</div>\r\n\r\n	<div class="tabbable">\r\n		<ul id="myTab" class="nav nav-tabs">\r\n			<li class="active">\r\n				<a href="#chooseLineProductId" data-toggle="tab" aria-expanded="true">\r\n					<i class="blue ace-icon fa fa-flag bigger-120"></i>\r\n					选择路线\r\n				</a>\r\n			</li>\r\n\r\n			<li class="">\r\n				<a href="#chooseQuoteId" data-toggle="tab" aria-expanded="false">\r\n				<i class="blue ace-icon fa  fa-credit-card bigger-120"></i>\r\n					选择报价\r\n				</a>\r\n			</li>\r\n		</ul>\r\n\r\n		<div class="tab-content col-xs-12" style="padding:10px 0 0 0;position: relative;top:-2px">\r\n			<div class="tab-pane fade active in col-xs-12" id="chooseLineProductId">\r\n			\r\n				<table class="table table-striped table-bordered table-hover search-travelLineList-table">\r\n					<thead>\r\n						<tr>\r\n							<td  class="th-border">线路名称</td>\r\n							<td class="th-border">天数</td>\r\n							<td class="th-border">类别</td>\r\n							<td class="th-border">应用范围</td>\r\n							<td class="th-border" width="70">选择</td>\r\n						</tr>\r\n					</thead>\r\n					<tbody class="T-normal-list">\r\n					</tbody>\r\n				</table>\r\n				<div class="row pageMode">\r\n					<div class="col-xs-5">\r\n						<small>共计 <small class="T-total"></small> 条记录</small>\r\n					</div>\r\n					<div class="col-xs-7">\r\n						<div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n\r\n			<div class="tab-pane fade" id="chooseQuoteId">\r\n				<div class="col-xs-12" class="search-TravelLineListId">\r\n					<table class="table table-striped table-bordered table-hover search-travelLineList-table">\r\n						<thead>\r\n							<tr>\r\n								<td class="th-border">产品名称</td>\r\n								<td class="th-border">天数</td>\r\n								<td class="th-border">类别</td>\r\n								<td class="th-border">应用范围</td>\r\n								<td class="th-border">客户</td>\r\n								<td class="th-border">报价时间</td>\r\n								<td class="th-border" width="70">选择</td>\r\n							</tr>\r\n						</thead>\r\n						<tbody class="T-quote-list">\r\n						</tbody>\r\n					</table>\r\n					<div class="row pageMode">\r\n						<div class="col-xs-5">\r\n							<small>共计 <small class="T-total"></small> 条记录</small>\r\n						</div>\r\n						<div class="col-xs-7">\r\n							<div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class="space-10"></div>\r\n	<button class="btn btn-block btn-primary T-btn-submit guideSubmit">\r\n		<i class="ace-icon fa fa-check"></i>\r\n		提交信息\r\n	</button>\r\n	<div class="space-10"></div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});