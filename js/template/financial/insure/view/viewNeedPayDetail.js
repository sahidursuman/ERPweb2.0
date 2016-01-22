/*TMODJS:{"debug":true,"version":8,"md5":"1ef4b914903c3d74e0f1788957533a6f"}*/
define(function(require) {
    return require("../../../template")("financial/insure/view/viewNeedPayDetail", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, needPayDetailList = $data.needPayDetailList, $escape = ($data.rs, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12"> <form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false"> <div class="form-group"> <div class="col-xs-12 col-sm-12 widget-container-col"> <div class=" ui-sortable-handle"> <div class="widget-body"> <div class="widget-main"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">应付类别</th> <th class="th-border">发生业务</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">结算金额</th> <th class="th-border">备注</th> <th class="th-border">操作人</th> <th class="th-border">操作时间</th> </tr> </thead> <tbody> ', 
            $line = 25, $each(needPayDetailList, function(rs) {
                $out += ' <tr data-id="', $line = 26, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 27, null == rs.receivableType || "" == rs.receivableType ? ($out += "-", 
                $line = 27) : ($line = 27, $out += $escape(rs.receivableType), $line = 27), $out += "</td> <td>", 
                $line = 28, null == rs.businessType || "" == rs.businessType ? ($out += "-", $line = 28) : ($line = 28, 
                $out += $escape(rs.businessType), $line = 28), $out += '</td> <td class="F-float F-money">', 
                $line = 29, $out += $escape(rs.price), $out += '</td> <td class="F-float F-money">', 
                $line = 30, $out += $escape(rs.count), $out += '</td> <td class="F-float F-money">', 
                $line = 31, $out += $escape(rs.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 32, $out += $escape(rs.needPayMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 33, $out += $escape(rs.settlementMoney), $out += "</td> <td>", $line = 34, 
                $out += $escape(rs.remark), $out += "</td> <td>", $line = 35, null == rs.checkRealname || "" == rs.checkRealname ? ($out += "-", 
                $line = 35) : ($line = 35, $out += $escape(rs.checkRealname), $line = 35), $out += "</td> <td>", 
                $line = 36, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 36) : ($line = 36, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 36), 
                $out += "</td> </tr> ", $line = 38;
            }), $out += " </tbody> </table> </div> </div> </div> </div> </div> </form> </div>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12">\r\n	<form class="form-horizontal" role="form" style="margin-top:10px" onsubmit="return false">\r\n		<div class="form-group">\r\n			<div class="col-xs-12 col-sm-12 widget-container-col">\r\n				<div class=" ui-sortable-handle">\r\n					<div class="widget-body">\r\n						<div class="widget-main">\r\n							<table class="table table-striped table-bordered table-hover">\r\n								<thead>\r\n									<tr>\r\n										<th class="th-border">应付类别</th>\r\n										<th class="th-border">发生业务</th>\r\n										<th class="th-border">单价</th>\r\n										<th class="th-border">数量</th>\r\n										<th class="th-border">优惠</th>\r\n										<th class="th-border">账面应付</th>\r\n										<th class="th-border">结算金额</th>\r\n										<th class="th-border">备注</th>\r\n										<th class="th-border">操作人</th>\r\n										<th class="th-border">操作时间</th>\r\n									</tr>\r\n								</thead>\r\n\r\n								<tbody>\r\n									{{each needPayDetailList as rs}}\r\n									<tr data-id="{{rs.id}}">\r\n										<td>{{if rs.receivableType == null || rs.receivableType == ""}}-{{else}}{{rs.receivableType}}{{/if}}</td>\r\n										<td>{{if rs.businessType == null || rs.businessType == ""}}-{{else}}{{rs.businessType}}{{/if}}</td>\r\n										<td class="F-float F-money">{{rs.price}}</td>\r\n										<td class="F-float F-money">{{rs.count}}</td>\r\n										<td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n										<td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n										<td class="F-float F-money">{{rs.settlementMoney}}</td>\r\n										<td>{{rs.remark}}</td>\r\n										<td>{{if rs.checkRealname == null || rs.checkRealname == ""}}-{{else}}{{rs.checkRealname}}{{/if}}</td>\r\n										<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n									</tr>\r\n									{{/each}}\r\n								</tbody>\r\n							</table>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});