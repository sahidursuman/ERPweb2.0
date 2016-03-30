/*TMODJS:{"debug":true,"version":17,"md5":"1cc5f74a90ee57548bd738240e82ecba"}*/
define(function(require) {
    return require("/js/template/template")("resource/touristGroupN/view/tourists/update/updateOuterTurn", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, lineData = $data.lineData, $escape = $utils.$escape, transferPartnerAgency = $data.transferPartnerAgency, remark = $data.remark, needPayAllMoney = $data.needPayAllMoney, currentNeedPayMoney = $data.currentNeedPayMoney, isCurrent = $data.isCurrent, outTransferFeeDel = $data.outTransferFeeDel, outTransferFee = $data.outTransferFee, $each = $utils.$each, $string = ($data.rs, 
            $data.$index, $utils.$string), $out = "";
            return $out += '<div class="container-fluid mar-t-20"> <div class="row"> <div class="col-xs-12"> <div class="col-xs-1 text-right no-padding-right control-label">线路名称</div> <div class="col-xs-3 control-label">', 
            $line = 5, lineData && ($line = 5, $out += $escape(lineData.lineProductName), $line = 5), 
            $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">天数</div> <div class="col-xs-1 control-label">', 
            $line = 7, lineData && ($line = 7, $out += $escape(lineData.days), $line = 7), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">出团日期</div> <div class="col-xs-3 control-label">', 
            $line = 9, lineData && ($line = 9, $out += $escape(lineData.startTime), $line = 9), 
            $out += '</div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-1 text-right no-padding-right control-label">同行</div> <div class="col-xs-3"> <input type="text" class="col-xs-12" name="transferPartnerAgency" value="', 
            $line = 14, $out += $escape(transferPartnerAgency), $out += '"> </div> </div> <div class="col-xs-12 mar-t-20"> <div class="col-xs-1 text-right no-padding-right control-label">备注</div> <div class="col-xs-10"> <input type="text" class="col-xs-12" name="remark" value="', 
            $line = 20, $out += $escape(remark), $out += '"> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1 text-right no-padding-right control-label">应付</div> <div class="col-xs-3"> <input type="text" readonly class="pull-left" name="needPayAllMoney" value="', 
            $line = 26, $out += $escape(needPayAllMoney), $out += '"> </div> <div class="col-xs-1 text-right no-padding-right control-label">计划现收</div> <div class="col-xs-2 control-label">', 
            $line = 29, $out += $escape(currentNeedPayMoney), $out += '</div> <div class="col-xs-1 text-right no-padding-right control-label">对方现收</div> <div class="col-xs-1"> <input type="checkbox" name="isNowIncome" class="ace"', 
            $line = 32, 1 == isCurrent && ($out += " checked", $line = 32), $out += '> <label class="lbl"></label> </div> </div> <div class="col-xs-12 mar-t-10"> <div class="col-xs-1"></div> <div class="col-xs-3"> <button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button> </div> </div> <div class="col-xs-12 mar-t-20"> <table class="table table-striped table-new table-bordered table-hover"> <thead> <tr> <th>费用项</th> <th>数量</th> <th>单价</th> <th>金额</th> <th>说明</th> <th>操作</th> </tr> </thead> <tbody class="T-fee-list" data-del-json="', 
            $line = 55, $out += $escape(outTransferFeeDel), $out += '"> ', $line = 56, outTransferFee && outTransferFee.length > 0 && ($out += " ", 
            $line = 57, $each(outTransferFee, function(rs) {
                $out += ' <tr data-id="', $line = 58, $out += $escape(rs.id), $out += '"> <td> <select class="col-xs-12" name="type"> ', 
                $line = 61, $out += $string($helpers.getFeeItemType(rs.type, !0)), $out += ' </select> </td> <td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="', 
                $line = 64, $out += $escape(rs.count), $out += '"></td> <td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="', 
                $line = 65, $out += $escape(rs.price), $out += '"></td> <td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="', 
                $line = 66, $out += $escape(rs.price * rs.count), $out += '"></td> <td><input type="text" class="col-xs-12" name="remark" value="', 
                $line = 67, $out += $escape(rs.remark), $out += '"></td> <td><a class="cursor T-action T-delete">删除</a></td> </tr> ', 
                $line = 70;
            }), $out += " ", $line = 71), $out += ' </tbody> </table> </div> <div class="col-xs-12 mar-t-20 mar-b-10 text-center"> <button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="container-fluid mar-t-20">\r\n	<div class="row">\r\n		<div class="col-xs-12">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">线路名称</div>\r\n			<div class="col-xs-3 control-label">{{if !!lineData}}{{lineData.lineProductName}}{{/if}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">天数</div>\r\n			<div class="col-xs-1 control-label">{{if !!lineData}}{{lineData.days}}{{/if}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">出团日期</div>\r\n			<div class="col-xs-3 control-label">{{if !!lineData}}{{lineData.startTime}}{{/if}}</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">同行</div>\r\n			<div class="col-xs-3">\r\n				<input type="text" class="col-xs-12" name="transferPartnerAgency" value="{{transferPartnerAgency}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">备注</div>\r\n			<div class="col-xs-10">\r\n				<input type="text" class="col-xs-12" name="remark" value="{{remark}}">\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1 text-right no-padding-right control-label">应付</div>\r\n			<div class="col-xs-3">\r\n				<input type="text" readonly class="pull-left" name="needPayAllMoney" value="{{needPayAllMoney}}">\r\n			</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">计划现收</div>\r\n			<div class="col-xs-2 control-label">{{currentNeedPayMoney}}</div>\r\n			<div class="col-xs-1 text-right no-padding-right control-label">对方现收</div>\r\n			<div class="col-xs-1">\r\n				<input type="checkbox" name="isNowIncome" class="ace"{{if isCurrent == 1}} checked{{/if}}>\r\n				<label class="lbl"></label>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-10">\r\n			<div class="col-xs-1"></div>\r\n			<div class="col-xs-3">\r\n				<button class="btn btn-sm btn-success T-add-fee"> <i class="ace-icon fa fa-plus"></i> 新增费用项 </button>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20">\r\n			\r\n			<table class="table table-striped table-new table-bordered table-hover">\r\n				<thead>\r\n					<tr>\r\n						<th>费用项</th>\r\n						<th>数量</th>\r\n						<th>单价</th>\r\n						<th>金额</th>\r\n						<th>说明</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-fee-list" data-del-json="{{outTransferFeeDel}}">\r\n				{{if outTransferFee && outTransferFee.length > 0}}\r\n					{{each outTransferFee as rs}}\r\n					<tr data-id="{{rs.id}}">\r\n						<td>\r\n							<select class="col-xs-12" name="type">\r\n								{{#rs.type | getFeeItemType:true}}\r\n							</select>\r\n						</td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-count" name="count" value="{{rs.count}}"></td>\r\n						<td><input type="text" class="col-xs-12 T-option F-float F-money" name="price" value="{{rs.price}}"></td>\r\n						<td><input type="text" class="col-xs-12 F-float F-money" name="money" readonly value="{{rs.price*rs.count}}"></td>\r\n						<td><input type="text" class="col-xs-12" name="remark" value="{{rs.remark}}"></td>\r\n						<td><a class="cursor T-action T-delete">删除</a></td>\r\n					</tr>\r\n					{{/each}}\r\n				{{/if}}\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="col-xs-12 mar-t-20 mar-b-10 text-center">\r\n			<button class="btn btn-sm btn-primary otherButton T-btn-save" style="height: auto;"> <i class="ace-icon fa fa-check"></i> 保存 </button>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});