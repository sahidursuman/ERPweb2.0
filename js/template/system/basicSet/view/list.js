/*TMODJS:{"debug":true,"version":129,"md5":"f7047805db59fe08e09c8889f5c2899b"}*/
define(function(require) {
    return require("../../../template")("system/basicSet/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, newSubjectAccountList = $data.newSubjectAccountList, $escape = ($data.rs, 
            $data.index, $utils.$escape), $out = "";
            return $out += '<div class="tabbable"> <ul class="nav nav-tabs"> <li class="active"> <a data-toggle="tab" href="#basicSet-accountObj" class="T-basicSet-accountObj" aria-expanded="false" data-value="1"> <i class="fa fa-paper-plane fa-2"></i> 会计科目设置 </a> </li> <li> <a data-toggle="tab" href="#basicSet-bankAccount" class="T-basicSet-bankAccount" aria-expanded="true" data-value="2"> <i class="fa fa-hourglass"></i> 银行账户设置 </a> </li> </ul> <div class="tab-content" style="top:-2px;">  <div class="tab-pane fade active in" id="basicSet-accountObj"> <div class="add-search globalAdd"> <button class="btn btn-sm btn-success T-add-AccObj" style="margin:10px 0 10px 0"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> <table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <thead> <tr class="bg-blur"> <th>科目编号</th> <th>科目名称</th> <th>启用标志</th> </tr> </thead> <tbody class="T-accObjList"> <tr> <td>1</td> <td>主营业务收入</td> <td>启用</td> </tr> <tr> <td>2</td> <td>主营业务支出</td> <td>启用</td> </tr> ', 
            $line = 43, $each(newSubjectAccountList, function(rs) {
                $out += ' <tr id="', $line = 44, $out += $escape(rs.id), $out += '" title = "', 
                $line = 44, $out += $escape(rs.subjectName), $out += '"> <td>', $line = 45, $out += $escape(rs.number), 
                $out += '</td> <td><span class="title">', $line = 46, $out += $escape(rs.subjectName), 
                $out += '</span><a href="javascript:void(0)" class="T-edit"><span> <i title="编辑" style="float:right;font-size:16px;" class="ace-icon fa fa-edit treeIcon"></i></span></a></td> <td> <span class="status"> ', 
                $line = 50, 1 == rs.status ? ($out += " 启用 ", $line = 52) : ($out += " 停用 ", $line = 54), 
                $out += " </span> </td> </tr> ", $line = 58;
            }), $out += ' </tbody> </table> </div>   <div id="basicSet-bankAccount" class="tab-pane fade" > <div class="T-bankAccount-content"> </div> </div>  </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="tabbable">\r\n	<ul class="nav nav-tabs">\r\n		<li class="active">\r\n			<a data-toggle="tab" href="#basicSet-accountObj" class="T-basicSet-accountObj" aria-expanded="false" data-value="1">\r\n				<i class="fa fa-paper-plane fa-2"></i> 会计科目设置\r\n			</a>\r\n		</li>\r\n		<li>\r\n			<a data-toggle="tab" href="#basicSet-bankAccount" class="T-basicSet-bankAccount" aria-expanded="true" data-value="2">\r\n				<i class="fa fa-hourglass"></i> 银行账户设置\r\n			</a>\r\n		</li>\r\n	</ul>\r\n	<div class="tab-content" style="top:-2px;">\r\n		<!--会计科目start-->\r\n		<div class="tab-pane fade active in" id="basicSet-accountObj">\r\n			<div class="add-search globalAdd">\r\n				<button class="btn btn-sm btn-success T-add-AccObj" style="margin:10px 0 10px 0">\r\n					<i class="ace-icon fa fa-plus"></i>\r\n					新增\r\n				</button>\r\n			</div>\r\n			<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n				<thead>\r\n					<tr class="bg-blur">\r\n						<th>科目编号</th>\r\n						<th>科目名称</th>\r\n						<th>启用标志</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-accObjList">\r\n					<tr> \r\n						<td>1</td>\r\n						<td>主营业务收入</td>\r\n						<td>启用</td>\r\n					</tr>\r\n					<tr>\r\n						<td>2</td>\r\n						<td>主营业务支出</td>\r\n						<td>启用</td>\r\n					</tr>\r\n					\r\n					{{each newSubjectAccountList as rs index}}\r\n						<tr id="{{rs.id}}" title = "{{rs.subjectName}}">\r\n							<td>{{rs.number}}</td>\r\n							<td><span class="title">{{rs.subjectName}}</span><a href="javascript:void(0)" class="T-edit"><span>\r\n							<i title="编辑" style="float:right;font-size:16px;" class="ace-icon fa fa-edit treeIcon"></i></span></a></td>\r\n							<td>\r\n							<span class="status">\r\n								{{if rs.status == 1}}\r\n									启用\r\n								{{else}}\r\n									停用\r\n								{{/if}}\r\n							</span>\r\n							</td>\r\n						</tr>\r\n					{{/each}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<!--会计科目end-->\r\n\r\n		<!--银行账户设置start-->\r\n		<div id="basicSet-bankAccount" class="tab-pane fade" >\r\n			<div class="T-bankAccount-content">\r\n				\r\n			</div>\r\n		</div>\r\n		<!--银行账户设置end-->\r\n\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});