/*TMODJS:{"debug":true,"version":4,"md5":"cc037e78b2aca7619be80cc1593f89b5"}*/
define(function(require) {
    return require("../../../template")("financial/transfer/view/viewPayedDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, payedMoneyDetailList = $data.payedMoneyDetailList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">付款类别</th> <th class="th-border">发生业务</th> <th class="th-border">付款方</th> <th class="th-border">金额</th> <th class="th-border">付款方式</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 23, $each(payedMoneyDetailList, function(rs) {
                $out += ' <tr data-id="', $line = 24, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 25, null == rs.receivableType || "" == rs.receivableType ? ($out += "-", 
                $line = 25) : ($line = 25, $out += $escape(rs.receivableType), $line = 25), $out += "</td> <td>", 
                $line = 26, null == rs.businessType || "" == rs.businessType ? ($out += "-", $line = 26) : ($line = 26, 
                $out += $escape(rs.businessType), $line = 26), $out += "</td> <td>", $line = 27, 
                null == rs.payParty || "" == rs.payParty ? ($out += "-", $line = 27) : ($line = 27, 
                $out += $escape(rs.payParty), $line = 27), $out += "</td> <td>", $line = 28, $out += $escape(rs.payDifferenceMoney), 
                $out += "</td> <td>", $line = 29, $out += $escape($helpers.getPayTypeText(rs.payType)), 
                $out += "</td> <td>", $line = 30, $out += $escape(rs.remark), $out += "</td> <td>", 
                $line = 31, null == rs.checkRealname || "" == rs.checkRealname ? ($out += "-", $line = 31) : ($line = 31, 
                $out += $escape(rs.checkRealname), $line = 31), $out += "</td> <td>", $line = 32, 
                null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 32) : ($line = 32, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 32), 
                $out += "</td> </tr> ", $line = 34;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">付款类别</th>\r\n										<th class="th-border">发生业务</th>\r\n										<th class="th-border">付款方</th>\r\n										<th class="th-border">金额</th>\r\n										<th class="th-border">付款方式</th>\r\n										<th class="th-border">备注</th>\r\n										<th class="th-border">操作人</th>\r\n										<th class="th-border">操作时间</th>\r\n									</tr>\r\n								</thead>\r\n\r\n								<tbody>\r\n									{{each payedMoneyDetailList as rs}}\r\n									<tr data-id="{{rs.id}}">\r\n										<td>{{if rs.receivableType == null || rs.receivableType == ""}}-{{else}}{{rs.receivableType}}{{/if}}</td>\r\n										<td>{{if rs.businessType == null || rs.businessType == ""}}-{{else}}{{rs.businessType}}{{/if}}</td>\r\n										<td>{{if rs.payParty == null || rs.payParty == ""}}-{{else}}{{rs.payParty}}{{/if}}</td>\r\n										<td>{{rs.payDifferenceMoney}}</td>\r\n										<td>{{rs.payType | getPayTypeText}}</td>\r\n										<td>{{rs.remark}}</td>\r\n										<td>{{if rs.checkRealname == null || rs.checkRealname == ""}}-{{else}}{{rs.checkRealname}}{{/if}}</td>\r\n										<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});