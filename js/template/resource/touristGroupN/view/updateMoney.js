/*TMODJS:{"debug":true,"version":15,"md5":"cda2f4197fdd87574fc5c2b57caac9fb"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroupN/view/updateMoney", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), type = $data.type, $out = "";
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12 mar-t-20"> <label class="control-label" style="width: 35px;">应收</label><input type="text" readonly> </div> ', 
            $line = 6, 1 === type && ($out += ' <div class="col-xs-12 mar-t-20"> <label class="control-label" style="width: 35px;"></label><button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> ', 
            $line = 10), $out += ' <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> ', 
            $line = 20, 1 === type && ($out += " <th>操作</th> ", $line = 22), $out += ' </tr> </thead> <tbody> <tr> <td><input type="text" class="col-xs-12"></td> <td><input type="text" class="col-xs-12"></td> <td><input type="text" class="col-xs-12"></td> <td><input type="text" class="col-xs-12" readonly></td> <td><input type="text" class="col-xs-12"></td> ', 
            $line = 32, 1 === type && ($out += ' <td><a class="cursor">删除</a></td> ', $line = 34), 
            $out += ' </tr> </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		<div class="col-xs-12 mar-t-20">\r\n			<label class="control-label" style="width: 35px;">应收</label><input type="text" readonly>\r\n		</div>\r\n		{{if type === 1}}\r\n		<div class="col-xs-12 mar-t-20">\r\n			<label class="control-label" style="width: 35px;"></label><button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>\r\n		</div>\r\n		{{/if}}\r\n		<div class="col-xs-12 mar-t-20">\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>费用项</th>\r\n						<th>数量</th>\r\n						<th>单价</th>\r\n						<th>金额</th>\r\n						<th>说明</th>\r\n						{{if type === 1}}\r\n						<th>操作</th>\r\n						{{/if}}\r\n					</tr>\r\n				</thead>\r\n				<tbody>\r\n					<tr>\r\n						<td><input type="text" class="col-xs-12"></td>\r\n						<td><input type="text" class="col-xs-12"></td>\r\n						<td><input type="text" class="col-xs-12"></td>\r\n						<td><input type="text" class="col-xs-12" readonly></td>\r\n						<td><input type="text" class="col-xs-12"></td>\r\n						{{if type === 1}}\r\n						<td><a class="cursor">删除</a></td>\r\n						{{/if}}\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-sm btn-primary otherButton" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});