/*TMODJS:{"debug":true,"version":11,"md5":"dc3825e3b2755bd5cdbd8814501b0e63"}*/
define(function(require) {
    return require("../../../template")("financial/replaceProfit/view/viewCostDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, needPayDetailsList = $data.needPayDetailsList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">对方单位</th> <th class="th-border">应付类别</th> <th class="th-border">发生业务</th> <th class="th-border">金额</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 22, $each(needPayDetailsList, function(rs) {
                $out += ' <tr data-id="', $line = 23, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 24, null == rs.name || "" == rs.name ? ($out += "-", $line = 24) : ($line = 24, 
                $out += $escape(rs.name), $line = 24), $out += "</td> <td>", $line = 25, null == rs.receivableType || "" == rs.receivableType ? ($out += "-", 
                $line = 25) : ($line = 25, $out += $escape(rs.receivableType), $line = 25), $out += "</td> <td>", 
                $line = 26, null == rs.businessType || "" == rs.businessType ? ($out += "-", $line = 26) : ($line = 26, 
                $out += $escape(rs.businessType), $line = 26), $out += '</td> <td><span class="F-float F-money">', 
                $line = 27, $out += $escape(rs.payMoney), $out += "</span></td> <td>", $line = 28, 
                $out += $escape(rs.remark), $out += "</td> <td>", $line = 29, null == rs.checkRealname || "" == rs.checkRealname ? ($out += "-", 
                $line = 29) : ($line = 29, $out += $escape(rs.checkRealname), $line = 29), $out += "</td> <td>", 
                $line = 30, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 30) : ($line = 30, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 30), 
                $out += "</td> </tr> ", $line = 32;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">对方单位</th>\r\n										<th class="th-border">应付类别</th>\r\n										<th class="th-border">发生业务</th>\r\n										<th class="th-border">金额</th>\r\n										<th class="th-border">备注</th>\r\n										<th class="th-border">操作人</th>\r\n										<th class="th-border">操作时间</th>\r\n									</tr>\r\n								</thead>\r\n\r\n								<tbody>\r\n									{{each needPayDetailsList as rs}}\r\n									<tr data-id="{{rs.id}}">\r\n										<td>{{if rs.name == null || rs.name == ""}}-{{else}}{{rs.name}}{{/if}}</td>\r\n										<td>{{if rs.receivableType == null || rs.receivableType == ""}}-{{else}}{{rs.receivableType}}{{/if}}</td>\r\n										<td>{{if rs.businessType == null || rs.businessType == ""}}-{{else}}{{rs.businessType}}{{/if}}</td>\r\n										<td><span class="F-float F-money">{{rs.payMoney}}</span></td>\r\n										<td>{{rs.remark}}</td>\r\n										<td>{{if rs.checkRealname == null || rs.checkRealname == ""}}-{{else}}{{rs.checkRealname}}{{/if}}</td>\r\n										<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});