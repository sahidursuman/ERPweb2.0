/*TMODJS:{"debug":true,"version":179,"md5":"10d59d8fa670f99ae336953a0c184e29"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/searchList", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, update = $data.update, $out = "";
            return $out += '<div class="col-sm-12 T-lineproduct-search-', $line = 1, $out += $escape(update), 
            $out += ' globalAdd" style="margin-top:10px;"> <div class="tabbable"> <ul id="myTab" class="nav nav-tabs"> <li class="active"> <a href="#chooseLineProductId" data-toggle="tab" aria-expanded="true"> <i class="blue ace-icon fa fa-flag bigger-120"></i> 选择路线 </a> </li> </ul> <div class="tab-content col-xs-12" style="padding:10px 0 0 0;position:relative;top: -2px"> <div class="tab-pane fade active in col-xs-12" id="chooseLineProductId"> <table class="table table-striped table-bordered table-hover search-travelLineList-table"> <thead> <tr> <td>线路名称</td> <td>天数</td> <td>类别</td> <td>针对客源</td> <td>选择</td> </tr> </thead> <tbody class="T-normal-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 <small class="T-total">0</small> 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> </div> </div> </div> <div class="space-10"></div> <button class="btn btn-block btn-primary T-searchtravelLine guideSubmit"> <i class="ace-icon fa fa-check"></i> 提交信息 </button> <div class="space-10"></div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 T-lineproduct-search-{{update}} globalAdd" style="margin-top:10px;">\r\n	<div class="tabbable">\r\n		<ul id="myTab" class="nav nav-tabs">\r\n			<li class="active">\r\n				<a href="#chooseLineProductId" data-toggle="tab" aria-expanded="true">\r\n					<i class="blue ace-icon fa fa-flag bigger-120"></i>\r\n					选择路线\r\n				</a>\r\n			</li>\r\n		</ul>\r\n		<div class="tab-content col-xs-12" style="padding:10px 0 0 0;position:relative;top: -2px">\r\n			<div class="tab-pane fade active in col-xs-12" id="chooseLineProductId">\r\n				\r\n				<table class="table table-striped table-bordered table-hover search-travelLineList-table">\r\n					<thead>\r\n					<tr>\r\n						<td>线路名称</td>\r\n						<td>天数</td>\r\n						<td>类别</td>\r\n						<td>针对客源</td>\r\n						<td>选择</td>\r\n					</tr>\r\n					</thead>\r\n					<tbody class="T-normal-list">\r\n					</tbody>\r\n				</table>\r\n				<div class="row pageMode">\r\n					<div class="col-xs-5">\r\n						<small>共计 <small class="T-total">0</small> 条记录</small>\r\n					</div>\r\n					<div class="col-xs-7">\r\n						<div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class="space-10"></div>\r\n	<button class="btn btn-block btn-primary T-searchtravelLine guideSubmit">\r\n		<i class="ace-icon fa fa-check"></i>\r\n		提交信息\r\n	</button>\r\n	<div class="space-10"></div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});