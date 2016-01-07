/*TMODJS:{"debug":true,"version":9,"md5":"dc9a9a656c4ee8ed388fd67e9bb96ecc"}*/
define(function(require) {
    return require("../../../template")("arrange/booking/view/financiaNoticeBook", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, userList = $data.userList, recordSize = ($data.user, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<input name="financial_name" class="col-xs-2 input-default-height guideInputList T-financial-name" value="', 
            $line = 1, $out += $escape(searchParam.realName), $out += '" placeholder="请输入财务关键词"> <button class=" btn-sm T-btn-search btn-financial-search search-btn" style="margin-left: 33px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <table class="table table-striped table-bordered table-hover" style="margin-top: 15px;"> <thead> <tr> <th class="th-border" colspan="3">财务通知</th> </tr> </thead> <tbody> ', 
            $line = 10, $each(userList, function(user) {
                $out += ' <tr data-value="', $line = 11, $out += $escape(user.id), $out += "\" data-realName='", 
                $line = 11, $out += $escape(user.realName), $out += '\'> <td data-entity-id="" style="text-align:left;">', 
                $line = 12, $out += $escape(user.realName), $out += '</td> <td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span> </label> </td> </tr> ', 
                $line = 16;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-3"> <small>共计 ', 
            $line = 22, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-9"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<input name="financial_name" class="col-xs-2 input-default-height guideInputList T-financial-name" value="{{searchParam.realName}}" placeholder="请输入财务关键词">\r\n	<button class=" btn-sm T-btn-search btn-financial-search search-btn" style="margin-left: 33px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button>\r\n		<table class="table table-striped table-bordered table-hover" style="margin-top: 15px;">\r\n					<thead>\r\n						<tr>\r\n							<th class="th-border" colspan="3">财务通知</th>\r\n						</tr>\r\n					</thead>\r\n					<tbody>\r\n					{{each userList as user}}\r\n					<tr data-value="{{user.id}}" data-realName=\'{{user.realName}}\'>\r\n						<td data-entity-id="" style="text-align:left;">{{user.realName}}</td>\r\n						<td><label class="pos-rel"><input type="checkbox" class="ace T-add"> <span class="lbl"></span> </label>\r\n						</td>\r\n					</tr>	\r\n					{{/each}}\r\n					</tbody>\r\n		</table>\r\n\r\n<div class="row pageMode">\r\n	<div class="col-xs-3">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-9">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});