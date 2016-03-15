/*TMODJS:{"debug":true,"version":96,"md5":"37953913f724858478ed61a4ce5d865f"}*/
define(function(require) {
    return require("../../../template")("system/accountSetting/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, travelAgency = $data.travelAgency, $each = $utils.$each, result = $data.result, searchParam = ($data.$index, 
            $data.searchParam), $out = "";
            return $out += '<div class="T-accountSetList"> <label class="col-xs-1" style="width: 180px;">账号名:', 
            $line = 2, $out += $escape(travelAgency.name), $out += '</label> <label class="pull-left col-xs-1" style="width: 160px;">手机号: <span class="phoneNumber">', 
            $line = 3, $out += $escape(travelAgency.contactNumber), $out += '</span> </label> <button class=" btn-sm T-btn-accountSet search-btn"> 绑定新号码 </button> <label class="pull-left col-xs-1" style="width: 160px;">账户余额：￥', 
            $line = 5, $out += $escape(travelAgency.balance), $out += '</label> <button class=" btn-sm T-btn-apply search-btn">申请借款 </button> </div> <div class="tabbable T-mainSetList" style="margin-top: 15px;"> <ul class="nav nav-tabs"> <li class="active"> <a data-toggle="tab" href="#basicSet-accountObj" class="T-basicSet-accountObj" aria-expanded="false" data-value="1"> <i class="fa fa-paper-plane fa-2"></i> 借款申请记录 </a> </li> <li> <a data-toggle="tab" href="#account-bankAccount" class="T-account-bankAccount" aria-expanded="true" data-value="2"> <i class="fa fa-hourglass"></i> 借款拨款记录 </a> </li> </ul> <div class="tab-content T-LoanApplication" style="top:-2px;">  <div class="tab-pane fade active in" id="basicSet-accountObj"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>借款单号</th> <th>借款人</th> <th>联系电话</th> <th>申请借款金额</th> <th>批准金额</th> <th>申请时间</th> <th>审核时间</th> <th>状态</th> </tr> </thead> <tbody class="T-accObjList"> ', 
            $line = 38, $each(result, function(result) {
                $out += " <tr> <td>", $line = 40, $out += $escape(result.applyNumber), $out += "</td> <td>", 
                $line = 41, $out += $escape(result.name), $out += "</td> <td>", $line = 42, $out += $escape(result.mobileNumber), 
                $out += "</td> <td>", $line = 43, $out += $escape(result.applyMoney), $out += "</td> <td>", 
                $line = 44, $out += $escape(result.approvedMoney), $out += "</td> <td>", $line = 45, 
                $out += $escape(result.createTime), $out += "</td> <td>", $line = 46, $out += $escape(result.examineDate), 
                $out += "</td> <td> ", $line = 48, 0 == result.applyStatus ? ($out += " 未审核 ", $line = 50) : 1 == result.applyStatus ? ($out += " 已通过 ", 
                $line = 52) : 2 == result.applyStatus && ($out += " 未通过 ", $line = 54), $out += " </td> </tr> ", 
                $line = 57;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 63, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>  <div id="account-bankAccount" class="account-bankAccount tab-pane fade" > <div class="T-bankAccount-content"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="T-accountSetList">\r\n	<label class="col-xs-1" style="width: 180px;">账号名:{{travelAgency.name}}</label>\r\n	<label class="pull-left col-xs-1" style="width: 160px;">手机号: <span class="phoneNumber">{{travelAgency.contactNumber}}</span>	</label>\r\n	<button class=" btn-sm T-btn-accountSet search-btn"> 绑定新号码 </button>\r\n	<label class="pull-left col-xs-1" style="width: 160px;">账户余额：￥{{travelAgency.balance}}</label>\r\n	<button class=" btn-sm T-btn-apply search-btn">申请借款 </button>\r\n</div>\r\n<div class="tabbable T-mainSetList" style="margin-top: 15px;">\r\n	<ul class="nav nav-tabs">\r\n		<li class="active">\r\n			<a data-toggle="tab" href="#basicSet-accountObj" class="T-basicSet-accountObj" aria-expanded="false" data-value="1">\r\n				<i class="fa fa-paper-plane fa-2"></i> 借款申请记录\r\n			</a>\r\n		</li>\r\n		<li>\r\n			<a data-toggle="tab" href="#account-bankAccount" class="T-account-bankAccount" aria-expanded="true" data-value="2">\r\n				<i class="fa fa-hourglass"></i> 借款拨款记录\r\n			</a>\r\n		</li>\r\n	</ul>\r\n	<div class="tab-content T-LoanApplication" style="top:-2px;">\r\n		<!--会计科目start-->\r\n		<div class="tab-pane fade active in" id="basicSet-accountObj">\r\n			<table class="table table-striped table-bordered table-hover">\r\n				<thead>\r\n					<tr class="bg-blur">\r\n						<th>借款单号</th>\r\n						<th>借款人</th>\r\n						<th>联系电话</th>\r\n						<th>申请借款金额</th>\r\n						<th>批准金额</th>\r\n						<th>申请时间</th>\r\n						<th>审核时间</th>\r\n						<th>状态</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody class="T-accObjList">\r\n				{{each result as result}}\r\n					<tr> \r\n						<td>{{result.applyNumber}}</td>\r\n						<td>{{result.name}}</td>\r\n						<td>{{result.mobileNumber}}</td>\r\n						<td>{{result.applyMoney}}</td>\r\n						<td>{{result.approvedMoney}}</td>\r\n						<td>{{result.createTime}}</td>\r\n						<td>{{result.examineDate}}</td>\r\n						<td>\r\n							{{ if result.applyStatus==0 }}\r\n								未审核\r\n							{{else if result.applyStatus==1 }}\r\n								已通过\r\n							{{else if result.applyStatus==2 }}\r\n								未通过\r\n						{{/if}}\r\n						</td>\r\n					</tr>\r\n					{{/each}}\r\n				</tbody>\r\n			</table>\r\n\r\n			<div class="row pageMode">\r\n				<div class="col-xs-6">\r\n					<small>共计 {{searchParam.totalCount}} 条记录</small>\r\n				</div>\r\n				<div class="col-xs-6">\r\n					<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n					</div>\r\n				</div>\r\n			</div>\r\n\r\n		</div>\r\n		<!--会计科目end-->\r\n		<div id="account-bankAccount" class="account-bankAccount tab-pane fade" >\r\n			<div class="T-bankAccount-content">\r\n				\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});