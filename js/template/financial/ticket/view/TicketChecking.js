/*TMODJS:{"debug":true,"version":105,"md5":"c9fab808881f0b2eb2124af5e587acd8"}*/
define(function(require) {
    return require("../../../template")("financial/ticket/view/TicketChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, companyName = $data.companyName, $each = $utils.$each, yearList = $data.yearList, searchParam = ($data.year, 
            $data.index, $data.searchParam), monthList = $data.monthList, sumNeedPayMoney = ($data.month, 
            $data.sumNeedPayMoney), sumRealPayedMoney = $data.sumRealPayedMoney, sumUnPayedMoney = $data.sumUnPayedMoney, sumRealUnPayedMoney = $data.sumRealUnPayedMoney, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, financialTicketList = $data.financialTicketList, roleType = ($data.checking, 
            $data.roleType), recordSize = $data.recordSize, $out = "";
            return $out += '<div class="row ticketChecking globalAdd"> <div class="col-xs-12 border" style="padding-bottom: 0px"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" > <div class="form-group"> <label style="float: left;margin: 0px auto auto 15px" class="control-label pull-left"> 票务商家:', 
            $line = 6, $out += $escape(companyName), $out += '</label> <label class="control-label col-sm-1" style="float:left;">账期:</label> <select class="col-sm-1" name="year" style="margin-left:20px"> ', 
            $line = 10, $each(yearList, function(year) {
                $out += ' <option value="', $line = 11, $out += $escape(year.value), $out += '" ', 
                $line = 11, searchParam.year == year.value && ($out += 'selected="selected"', $line = 11), 
                $out += ">", $line = 11, $out += $escape(year.value), $out += "</option> ", $line = 12;
            }), $out += ' </select> <select class="col-sm-1" name="month" style="margin-left:5px"> <option value ="">全部</option> ', 
            $line = 16, $each(monthList, function(month) {
                $out += ' <option value="', $line = 17, $out += $escape(month.value), $out += '" ', 
                $line = 17, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 17), $out += ">", $line = 17, $out += $escape(month.value), $out += "月</option> ", 
                $line = 18;
            }), $out += ' </select> <button class="btn-height btn-sm search-btn btn-checking-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> <button type="button" class="btn btn-sm btn-primary btn-success btn-ticketExport" style="margin-left: 25px"> <span>导出报表</span> <i class="ace-icon fa fa-arrow-right icon-on-right"></i> </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left" style="margin-left: 15px">总账面应付：', 
            $line = 34, $out += $escape(sumNeedPayMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际已付：', 
            $line = 35, $out += $escape(sumRealPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面未付：', 
            $line = 36, $out += $escape(sumUnPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未付：', 
            $line = 37, $out += $escape(sumRealUnPayedMoney), $out += '</label> </div> </form> </div> <input type="hidden" value="', 
            $line = 41, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 42, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">账务类别</th> <th class="th-border">日期</th> <th class="th-border">类型</th> <th class="th-border">班次</th> <th class="th-border">座位级别</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">实际已付</th> <th class="th-border">账面未付</th> <th class="th-border">单据</th> <th class="th-border"> <span class="necessary">*</span>实际未付</th> <th class="th-border">说明</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody> ', 
            $line = 68, $each(financialTicketList, function(checking, index) {
                $out += ' <tr data-entity-id="', $line = 69, $out += $escape(checking.id), $out += '" data-entity-isConfirmAccount="', 
                $line = 69, $out += $escape(checking.isConfirmAccount), $out += '" data-entity-realUnPayedMoney="', 
                $line = 69, $out += $escape(checking.realUnPayedMoney), $out += '" data-entity-remark="', 
                $line = 69, $out += $escape(checking.remark), $out += '"> <td>', $line = 70, $out += $escape(index + 1), 
                $out += "</td> <td> ", $line = 72, 0 == checking.arrangeType ? ($out += " ", $line = 73, 
                $out += $escape(checking.tripNumber), $line = 73, $out += $escape(","), $line = 73, 
                $out += $escape(checking.lineProductName), $line = 73, $out += $escape(","), $line = 73, 
                $out += $escape(checking.guideName), $out += " ", $line = 74) : ($out += " ", $line = 75, 
                $out += $escape(checking.tripNumber), $line = 75, $out += $escape(","), $line = 75, 
                $out += $escape(checking.arrangeRealname), $line = 75, $out += $escape(","), $line = 75, 
                $out += $escape(checking.arrangeMobileNumber), $out += " ", $line = 76), $out += ' </td> <td name="consumeStartTime">', 
                $line = 78, null == checking.consumeStartTime || "" == checking.consumeStartTime ? ($out += "-", 
                $line = 78) : ($line = 78, $out += $escape($helpers.dateFormat(checking.consumeStartTime, "yyyy-MM-dd")), 
                $line = 78), $out += "</td> <td> ", $line = 80, 1 == checking.type ? ($out += " 飞机票 ", 
                $line = 82) : 2 == checking.type ? ($out += " 汽车票 ", $line = 84) : 3 == checking.type ? ($out += " 火车票 ", 
                $line = 86) : 4 == checking.type && ($out += " 轮船票 ", $line = 88), $out += " </td> <td>", 
                $line = 90, $out += $escape(checking.shift), $out += "</td> <td>", $line = 91, $out += $escape(checking.seatLevel), 
                $out += "</td> <td>", $line = 92, $out += $escape(checking.realCount), $out += "</td> <td>", 
                $line = 93, $out += $escape(checking.price), $out += "</td> <td>", $line = 94, $out += $escape(checking.reduceMoney), 
                $out += "</td> <td>", $line = 95, $out += $escape(checking.needPayMoney), $out += "</td> <td> ", 
                $line = 97, $out += $escape("社付:"), $line = 97, $out += $escape(checking.travelAgencyPayedMoney), 
                $line = 97, $out += $escape(","), $out += " ", $line = 98, $out += $escape("导付:"), 
                $line = 98, $out += $escape(checking.guidePayedMoney), $out += " </td> <td>", $line = 100, 
                $out += $escape(checking.unPayedMoney), $out += "</td> <td>", $line = 101, null != checking.billImages && "" != checking.billImages ? ($out += '<a href="#" class="ticketImg" url="', 
                $line = 101, $out += $escape(checking.billImages), $out += '"><span>查看</span></a>', 
                $line = 101) : ($out += '<span style="color:#bbb">查看</span>', $line = 101), $out += '</td> <td><input type="text" name="FinancialticketRealUnPayedMoney" value="', 
                $line = 102, $out += $escape(checking.realUnPayedMoney), $out += '" style="text-align:center" ', 
                $line = 102, 1 == checking.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 102), $out += '></td> <td><input type="text" name="FinancialticketRemark" value="', 
                $line = 103, $out += $escape(checking.remark), $out += '" style="text-align:center" ', 
                $line = 103, 1 == checking.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 103), $out += "></td> <td>", $line = 104, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 104) : ($line = 104, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd")), 
                $line = 104), $out += "</td> <td>", $line = 105, $out += $escape(checking.checkUserRealName), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" data-entity-checkStatus="', 
                $line = 108, $out += $escape(checking.isConfirmAccount), $out += '" class="ace ticketFinancial" ', 
                $line = 109, 1 == checking.isConfirmAccount && ($out += 'checked="checked"', $line = 109), 
                $out += " ", $line = 109, 1 == checking.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 109), $out += ' /> <span class="lbl"></span> </label> </td> </tr> ', $line = 114;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 119, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <div class="form-group pull-right col-sm-4" style="text-align: right;margin-top: 40px;padding-right: 10px"> <label class="pos-rel" style="margin-left:20px"> <span class="lbl"> <input type="checkbox" class="ticket-selectAll"/>全选</span> </label> </div> <div style="clear: both"></div> <br> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-ticketFinancial-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary btn-ticketFinancial-checking" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row ticketChecking globalAdd">\r\n    <div class="col-xs-12 border" style="padding-bottom: 0px">\r\n            <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="search-area editable editable-click" >\r\n                    <div class="form-group"> \r\n                        <label style="float: left;margin: 0px auto auto 15px" class="control-label pull-left"> 票务商家:{{companyName}}</label>\r\n\r\n                        <label class="control-label col-sm-1" style="float:left;">账期:</label>\r\n	                        <select class="col-sm-1" name="year" style="margin-left:20px">\r\n								{{each yearList as year index}}\r\n									<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n								{{/each}}\r\n							</select>\r\n							<select class="col-sm-1" name="month" style="margin-left:5px">\r\n							    <option value ="">全部</option>\r\n								{{each monthList as month index}}\r\n									<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n								{{/each}}\r\n							</select>\r\n                        <button class="btn-height btn-sm search-btn btn-checking-search" >\r\n                             <i class="ace-icon fa fa-search"></i>\r\n                                                                                                 搜索\r\n                        </button>\r\n                        \r\n                        <button type="button" class="btn btn-sm btn-primary btn-success btn-ticketExport" style="margin-left: 25px">\r\n							<span>导出报表</span>\r\n							<i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n						</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="form-group ">\r\n                    <label class=" control-label pull-left" style="margin-left: 15px">总账面应付：{{sumNeedPayMoney}}</label>\r\n                    <label class=" control-label " style="margin-left:30px;">总实际已付：{{sumRealPayedMoney}}</label>\r\n                    <label class=" control-label " style="margin-left:30px;">总账面未付：{{sumUnPayedMoney}}</label>\r\n                    <label class=" control-label " style="margin-left:30px;">总实际未付：{{sumRealUnPayedMoney}}</label>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    	<input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <div class="clearfix"></div>\r\n        <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n            <thead>\r\n            <tr>\r\n              <th class="th-border">序号</th>\r\n              <th class="th-border">账务类别</th>\r\n              <th class="th-border">日期</th>\r\n              <th class="th-border">类型</th>\r\n              <th class="th-border">班次</th>\r\n              <th class="th-border">座位级别</th>\r\n              <th class="th-border">数量</th>\r\n              <th class="th-border">单价</th>\r\n              <th class="th-border">优惠</th>\r\n              <th class="th-border">账面应付</th>\r\n              <th class="th-border">实际已付</th>\r\n              <th class="th-border">账面未付</th>\r\n              <th class="th-border">单据</th>\r\n              <th class="th-border"> <span class="necessary">*</span>实际未付</th>\r\n              <th class="th-border">说明</th>\r\n              <th class="th-border">对账时间</th>\r\n              <th class="th-border">对账人</th>\r\n              <th class="th-border">对账</th>\r\n            </tr>\r\n            </thead>   \r\n            <tbody>\r\n               {{each financialTicketList as checking index}}\r\n					    <tr data-entity-id="{{checking.id}}" data-entity-isConfirmAccount="{{checking.isConfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}" data-entity-remark="{{checking.remark}}">\r\n				         <td>{{index+1}}</td>\r\n							<td>\r\n								{{if checking.arrangeType == 0}}\r\n									{{checking.tripNumber}}{{","}}{{checking.lineProductName}}{{","}}{{checking.guideName}}\r\n							  	{{else}}\r\n									{{checking.tripNumber}}{{","}}{{checking.arrangeRealname}}{{","}}{{checking.arrangeMobileNumber}}\r\n							  	{{/if}}\r\n							</td>\r\n							<td name="consumeStartTime">{{if checking.consumeStartTime == null || checking.consumeStartTime == ""}}-{{else}}{{checking.consumeStartTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n							<td>\r\n								{{if checking.type == 1}}\r\n								  飞机票\r\n								  {{else if checking.type == 2}}\r\n								  汽车票\r\n								  {{else if checking.type == 3}}\r\n								  火车票\r\n								  {{else if checking.type == 4}}\r\n								  轮船票\r\n								{{/if}}\r\n							</td>\r\n							<td>{{checking.shift}}</td>\r\n							<td>{{checking.seatLevel}}</td>\r\n							<td>{{checking.realCount}}</td>\r\n							<td>{{checking.price}}</td>\r\n							<td>{{checking.reduceMoney}}</td>\r\n							<td>{{checking.needPayMoney}}</td>\r\n							<td>\r\n								{{"社付:"}}{{checking.travelAgencyPayedMoney}}{{","}}\r\n							    {{"导付:"}}{{checking.guidePayedMoney}}\r\n							</td> \r\n							<td>{{checking.unPayedMoney}}</td>\r\n							<td>{{if checking.billImages != null && checking.billImages !=""}}<a href="#" class="ticketImg" url="{{checking.billImages}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n							<td><input type="text" name="FinancialticketRealUnPayedMoney" value="{{checking.realUnPayedMoney}}" style="text-align:center" {{if checking.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}></td>\r\n	                        <td><input type="text" name="FinancialticketRemark" value="{{checking.remark}}" style="text-align:center" {{if checking.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}></td>\r\n							<td>{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n	                        <td>{{checking.checkUserRealName}}</td>\r\n							<td>\r\n							   <label class="pos-rel">\r\n							   		<input type="checkbox" data-entity-checkStatus="{{checking.isConfirmAccount}}" class="ace ticketFinancial" \r\n							   		{{if checking.isConfirmAccount == 1}}checked="checked"{{/if}} {{if checking.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}  />\r\n							   		<span class="lbl"></span>\r\n							   </label>\r\n							</td>\r\n					     </tr>\r\n			    {{/each}}\r\n            </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n          <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n          </div>\r\n          <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="form-group pull-right col-sm-4" style="text-align: right;margin-top: 40px;padding-right: 10px">\r\n               <label class="pos-rel" style="margin-left:20px">\r\n				    <span class="lbl">		\r\n					<input type="checkbox" class="ticket-selectAll"/>全选</span>\r\n				</label>\r\n            </div>\r\n        <div style="clear: both"></div>\r\n        <br>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary btn-ticketFinancial-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                  			 关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary btn-ticketFinancial-checking" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                   			 确认\r\n                </button>\r\n            </div>\r\n        </form>\r\n\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});