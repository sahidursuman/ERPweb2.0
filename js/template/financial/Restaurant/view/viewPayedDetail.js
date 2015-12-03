/*TMODJS:{"debug":true,"version":2,"md5":"f94eea52d1eb5d6f125c827fdce327f7"}*/
define(function(require) {
    return require("../../../template")("financial/Restaurant/view/viewPayedDetail", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, memberList = $data.memberList, $escape = ($data.$index, 
            $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">付款类别</th> <th class="th-border">发生业务</th> <th class="th-border">付款方</th> <th class="th-border">金额</th> <th class="th-border">付款方式</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 23, $each(memberList, function(memberList) {
                $out += ' <tr data-id="', $line = 24, $out += $escape(memberList.id), $out += '"> <td>付款类别</td> <td>发生业务</td> <td>付款方</td> <td>金额</td> <td>付款方式</td> <td>备注</td> <td>操作人</td> <td>操作时间</td> </tr> ', 
                $line = 34;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">付款类别</th>\r\n										<th class="th-border">发生业务</th>\r\n										<th class="th-border">付款方</th>\r\n										<th class="th-border">金额</th>\r\n										<th class="th-border">付款方式</th>\r\n										<th class="th-border">备注</th>\r\n										<th class="th-border">操作人</th>\r\n										<th class="th-border">操作时间</th>\r\n									</tr>\r\n								</thead>\r\n\r\n								<tbody>\r\n									{{each memberList as memberList}}\r\n									<tr data-id="{{memberList.id}}">\r\n										<td>付款类别</td>\r\n										<td>发生业务</td>\r\n										<td>付款方</td>\r\n										<td>金额</td>\r\n										<td>付款方式</td>\r\n										<td>备注</td>\r\n										<td>操作人</td>\r\n										<td>操作时间</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});