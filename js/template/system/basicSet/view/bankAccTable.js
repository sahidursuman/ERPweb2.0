/*TMODJS:{"debug":true,"version":109,"md5":"5170813f4c47da611aadc54f49c25957"}*/
define(function(require) {
    return require("../../../template")("system/basicSet/view/bankAccTable", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, newBankAccountList = $data.newBankAccountList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="T-search-area search-area globalAdd"> <input name="bankAccountNumber" class="col-xs-2 input-default-height col-xs-2 guideInputList" value="', 
            $line = 2, $out += $escape(searchParam.accountName), $out += '" placeholder="请输入银行账户关键词"/>&nbsp; <button class=" btn-sm T-search pull-left search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group T-status" style="margin-left: 20px"> <label class="text-right control-label no-padding-right" style="margin-left:10px;">状态:</label> <button data-value="', 
            $line = 9, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 11, "" == searchParam.status ? ($out += " 全部 ", $line = 13) : 1 == searchParam.status ? ($out += " 已启用 ", 
            $line = 15) : ($out += " 已停用 ", $line = 17), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu T-sleect-ul" style="margin-left:40px;"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已启用</a> </li> <li> <a data-value="0" href="javascript:void(0)">已停用</a> </li> </ul> </div> <button class="btn btn-sm btn-success T-add R-right" data-right="1040002" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增资金账户 </button> </div> <div class="row T-hotelList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <colgroup> <col style="width:20%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:10%;"></col> <col style="width:20%;"></col> <col style="width:8%;"></col> <col style="width:15%;"></col> </colgroup> <thead> <tr style="background: #51b0c2;color: white"> <th>账户名称</th> <th>类别</th> <th>银行账号</th> <th>开户银行</th> <th>开户户名</th> <th>期初日期</th> <th>期初余额</th> <th>备注</th> <th>启用标志</th> <th>操作</th> </tr> </thead> <tbody class="T-bankAcc-list"> ', 
            $line = 68, $each(newBankAccountList, function(rs) {
                $out += ' <tr bankNumId="', $line = 69, $out += $escape(rs.id), $out += '"> <td>账户名称</td> <td>类别</td> <td>', 
                $line = 72, $out += $escape(rs.bankAccountNumber), $out += "</td> <td>", $line = 73, 
                $out += $escape(rs.openingBank), $out += "</td> <td>", $line = 74, $out += $escape(rs.accountName), 
                $out += "</td> <td>", $line = 75, $out += $escape($helpers.dateFormat(rs.beginningTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 76, $out += $escape(rs.beginningBalance), $out += "</td> <td>", 
                $line = 77, $out += $escape(rs.remark), $out += "</td> <td> ", $line = 79, 1 == rs.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已启用 ', 
                $line = 82) : ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已停用 ', 
                $line = 85), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a class="T-view cursor T-action" > 查看 </a> <a class="T-edit cursor T-action R-right" data-right="1040003" > <label class="padding-right20">|</label> 编辑 </a> <a class="T-delete cursor T-action R-right" data-right="1040004"> <label class="padding-right20">|</label> 删除 </a> </div> </td> </tr> ', 
                $line = 103;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <span class="recordSize"></span> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-search-area search-area globalAdd">\r\n	<input name="bankAccountNumber" class="col-xs-2 input-default-height col-xs-2 guideInputList" value="{{searchParam.accountName}}" placeholder="请输入银行账户关键词"/>&nbsp;\r\n	<button class=" btn-sm T-search pull-left search-btn">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<div class="btn-group T-status" style="margin-left: 20px">\r\n		<label class="text-right control-label no-padding-right" style="margin-left:10px;">状态:</label>\r\n		<button data-value="{{searchParam.status}}" data-toggle="dropdown" class="T-select-status btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n			<span>\r\n				{{if searchParam.status == ""}}\r\n					全部\r\n				{{else if searchParam.status == 1}}\r\n					已启用\r\n				{{else}}\r\n					已停用 \r\n				{{/if}}\r\n			</span>\r\n			<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n		</button>\r\n		<ul class="dropdown-menu T-sleect-ul" style="margin-left:40px;">\r\n			<li>\r\n				<a data-value="" href="javascript:void(0)">全部</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="1" href="javascript:void(0)">已启用</a>\r\n			</li>\r\n			<li>\r\n				<a data-value="0" href="javascript:void(0)">已停用</a>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n\r\n	<button class="btn btn-sm btn-success T-add R-right" data-right="1040002" style="margin-left: 20px">\r\n		<i class="ace-icon fa fa-plus"></i>\r\n		新增资金账户\r\n	</button>\r\n</div>\r\n<div class="row T-hotelList">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n			<colgroup>\r\n            	<col style="width:20%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:20%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            </colgroup>\r\n			<thead>\r\n				<tr style="background: #51b0c2;color: white">\r\n					<th>账户名称</th>\r\n					<th>类别</th>\r\n					<th>银行账号</th>\r\n					<th>开户银行</th>\r\n					<th>开户户名</th>\r\n					<th>期初日期</th>\r\n					<th>期初余额</th>\r\n					<th>备注</th>\r\n					<th>启用标志</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n\r\n			<tbody class="T-bankAcc-list">\r\n			    {{each newBankAccountList as rs}}\r\n					<tr bankNumId="{{rs.id}}">\r\n						<td>账户名称</td>\r\n						<td>类别</td>\r\n						<td>{{rs.bankAccountNumber}}</td>\r\n						<td>{{rs.openingBank}}</td>\r\n						<td>{{rs.accountName}}</td>\r\n						<td>{{rs.beginningTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n						<td>{{rs.beginningBalance}}</td>\r\n						<td>{{rs.remark}}</td>\r\n						<td>\r\n							{{if rs.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n							已启用\r\n							{{else}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已停用\r\n							{{/if}}\r\n						</td>\r\n					 	<td>\r\n							<div class="hidden-sm hidden-xs btn-group">\r\n								<a class="T-view cursor T-action" >\r\n									查看\r\n								</a>\r\n								<a class="T-edit cursor T-action R-right" data-right="1040003" >\r\n									<label class="padding-right20">|</label>\r\n									编辑\r\n								</a>\r\n								<a class="T-delete cursor T-action R-right" data-right="1040004">\r\n									<label class="padding-right20">|</label>\r\n									删除\r\n								</a>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<span class="recordSize"></span>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});