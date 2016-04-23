/*TMODJS:{"debug":true,"version":120,"md5":"c54c8c28db620e604cb6fd767b3c8d9f"}*/
define(function(require) {
    return require("/js/template/template")("financial/bankAccount/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, beginningBalance = $data.beginningBalance, incomeMoney = $data.incomeMoney, payMoney = $data.payMoney, balance = $data.balance, $each = $utils.$each, newBankAccountList = $data.newBankAccountList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="T-search-area search-area guideAdd"> <label class="control-label mar-r-20">期初余额合计: <span class=" F-float F-money">', 
            $line = 2, $out += $escape(beginningBalance), $out += '</span></label> <label class="control-label mar-r-20">收入合计：<span class=" F-float F-money">', 
            $line = 3, $out += $escape(incomeMoney), $out += '</span></label> <label class="control-label mar-r-20">支出合计：<span class=" F-float F-money">', 
            $line = 4, $out += $escape(payMoney), $out += '</span></label> <label class="control-label mar-r-20">结余合计：<span class=" F-float F-money">', 
            $line = 5, $out += $escape(balance), $out += '</span></label> <button class="btn-sm T-refresh search-btn"> <i class="ace-ico n fa fa-refresh"></i> 刷新 </button> </div> <div class="row guideList guideAdd"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight table-fixed"> <colgroup> <col style="width:8%;"></col> <col style="width:13%;"></col> <col style="width:15%;"></col> <col style="width:10%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:8%;"></col> <col style="width:6%;"></col> </colgroup> <thead> <tr class="bg-blur guideListSmall"> <th>类型</th> <th>资金账户</th> <th>银行账号</th> <th>开户银行</th> <th>开户户名</th> <th>期初日期</th> <th>期初余额</th> <th>收入</th> <th>支出</th> <th>结余</th> <th>明细</th> </tr> </thead> <tbody class="T-bankAcc-list"> ', 
            $line = 42, $each(newBankAccountList, function(rs) {
                $out += ' <tr data-bankid="', $line = 43, $out += $escape(rs.id), $out += '" data-type="', 
                $line = 43, $out += $escape(rs.type), $out += '"> <td>', $line = 44, 0 == rs.type ? ($out += "现金账户", 
                $line = 44) : ($out += "银行账户", $line = 44), $out += "</td> <td>", $line = 45, $out += $escape(rs.aliasName), 
                $out += "</td> <td>", $line = 46, 0 == rs.type ? ($out += "-", $line = 46) : ($line = 46, 
                $out += $escape(rs.bankAccountNumber), $line = 46), $out += "</td> <td>", $line = 47, 
                0 == rs.type ? ($out += "-", $line = 47) : ($line = 47, $out += $escape(rs.openingBank), 
                $line = 47), $out += "</td> <td>", $line = 48, 0 == rs.type ? ($out += "-", $line = 48) : ($line = 48, 
                $out += $escape(rs.accountName), $line = 48), $out += "</td> <td>", $line = 49, 
                $out += $escape($helpers.dateFormat(rs.beginningTime, "yyyy-MM-dd")), $out += '</td> <td class="F-float F-money">', 
                $line = 50, $out += $escape(rs.beginningBalance), $out += '</td> <td class="F-float F-money">', 
                $line = 51, $out += $escape(rs.incomeMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 52, $out += $escape(rs.payMoney), $out += "</td> <td>", $line = 53, $out += $escape(rs.balance), 
                $out += '</td> <td> <div class="btn-group"> <a class="T-action T-view cursor" data-desc="账户：', 
                $line = 56, $out += $escape(rs.aliasName), $out += ",余额：", $line = 56, $out += $escape(rs.balance), 
                $out += ",期初余额：", $line = 56, $out += $escape(rs.beginningBalance), $out += '" data-beginningBalance="', 
                $line = 56, $out += $escape(rs.beginningBalance), $out += '"> 查看 </a> </div> </td> </tr> ', 
                $line = 62;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-4"> <small class="recordSize"></small> </div> <div class="col-xs-8"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-search-area search-area guideAdd">\r\n    <label class="control-label mar-r-20">期初余额合计: <span class=" F-float F-money">{{beginningBalance}}</span></label>\r\n    <label class="control-label mar-r-20">收入合计：<span class=" F-float F-money">{{incomeMoney}}</span></label>\r\n    <label class="control-label mar-r-20">支出合计：<span class=" F-float F-money">{{payMoney}}</span></label>\r\n    <label class="control-label mar-r-20">结余合计：<span class=" F-float F-money">{{balance}}</span></label>\r\n	<button class="btn-sm  T-refresh search-btn">\r\n	    <i class="ace-ico n fa fa-refresh"></i> 刷新\r\n	</button>\r\n</div>\r\n<div class="row guideList guideAdd">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover T-showHighLight table-fixed">\r\n            <colgroup>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:13%;"></col>\r\n            	<col style="width:15%;"></col>\r\n            	<col style="width:10%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:8%;"></col>\r\n            	<col style="width:6%;"></col>\r\n            </colgroup>\r\n			<thead> \r\n				<tr class="bg-blur guideListSmall">\r\n					<th>类型</th>\r\n					<th>资金账户</th>\r\n					<th>银行账号</th>\r\n					<th>开户银行</th>\r\n					<th>开户户名</th>\r\n					<th>期初日期</th>\r\n					<th>期初余额</th>\r\n					<th>收入</th>\r\n					<th>支出</th>\r\n					<th>结余</th>\r\n					<th>明细</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-bankAcc-list">\r\n				{{each newBankAccountList as rs}}\r\n					<tr data-bankid="{{rs.id}}" data-type="{{rs.type}}">\r\n						<td>{{if rs.type == 0}}现金账户{{else rs.type == 1}}银行账户{{/if}}</td>\r\n						<td>{{rs.aliasName}}</td>\r\n						<td>{{if rs.type == 0}}-{{else}}{{rs.bankAccountNumber}}{{/if}}</td>\r\n						<td>{{if rs.type == 0}}-{{else}}{{rs.openingBank}}{{/if}}</td>\r\n						<td>{{if rs.type == 0}}-{{else}}{{rs.accountName}}{{/if}}</td>\r\n						<td>{{rs.beginningTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n						<td class="F-float F-money">{{rs.beginningBalance}}</td>\r\n						<td class="F-float F-money">{{rs.incomeMoney}}</td>\r\n						<td class="F-float F-money">{{rs.payMoney}}</td>\r\n						<td>{{rs.balance}}</td>\r\n						<td>\r\n							<div class="btn-group">\r\n								<a class="T-action T-view cursor" data-desc="账户：{{rs.aliasName}},余额：{{rs.balance}},期初余额：{{rs.beginningBalance}}" data-beginningBalance="{{rs.beginningBalance}}">\r\n									查看\r\n								</a>\r\n							</div>\r\n						</td>\r\n					</tr>\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-4">\r\n				<small class="recordSize"></small>\r\n			</div>\r\n			<div class="col-xs-8">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});