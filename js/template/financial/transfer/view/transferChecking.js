/*TMODJS:{"debug":true,"version":143,"md5":"fcb29f7f6152f4d530cc185a1ee8d930"}*/
define(function(require) {
    return require("../../../template")("financial/transfer/view/transferChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, transferPartnerAgencyName = $data.transferPartnerAgencyName, $each = $utils.$each, yearList = $data.yearList, searchParam = ($data.year, 
            $data.index, $data.searchParam), monthList = $data.monthList, sumPersonCount = ($data.month, 
            $data.sumPersonCount), sumNeedPayMoney = $data.sumNeedPayMoney, sumRealPayedMoney = $data.sumRealPayedMoney, sumUnPayedMoney = $data.sumUnPayedMoney, sumRealUnPayedMoney = $data.sumRealUnPayedMoney, financialTransferList = $data.financialTransferList, roleType = ($data.checking, 
            $data.detail, $data.$index, $data.roleType), recordSize = ($data.visitor, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row transferChecking"> <div class="col-xs-12 border"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" > <div class="form-group"> <label style="float: left;margin: 0px auto auto 15px" class="control-label pull-left"> 同行地接:', 
            $line = 6, $out += $escape(transferPartnerAgencyName), $out += '</label> <label class="control-label col-sm-1" style="float:left;">账期:</label> <select class="col-sm-1" name="year" style="margin-left:20px"> ', 
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
            }), $out += ' </select> <button class="btn-height btn-sm search-btn btn-checking-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> <button type="button" class="btn btn-sm btn-primary btn-success btn-transferExport"> <span>导出报表</span> <i class="ace-icon fa fa-arrow-right icon-on-right"></i> </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left" style="margin-left: 15px">总人数:', 
            $line = 34, $out += $escape(sumPersonCount), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面应付:', 
            $line = 35, $out += $escape(sumNeedPayMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际已付:', 
            $line = 36, $out += $escape(sumRealPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面未付:', 
            $line = 37, $out += $escape(sumUnPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未付:', 
            $line = 38, $out += $escape(sumRealUnPayedMoney), $out += '</label> </div> </form> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr> <th>序号</th> <th>线路产品</th> <th>出游日期</th> <th>联系人</th> <th>人数</th> <th>操作人</th> <th>操作时间</th> <th>账面应付</th> <th>明细</th> <th>实际已付</th> <th>账面未付</th> <th> <span class="necessary">*</span>实际未付</th> <th>说明</th> <th>对账时间</th> <th>对账人</th> <th>对账</th> </tr> </thead> <tbody> ', 
            $line = 81, $each(financialTransferList, function(checking, index) {
                $out += ' <tr data-entity-id="', $line = 82, $out += $escape(checking.id), $out += '" data-entity-isConfirmAccount="', 
                $line = 82, $out += $escape(checking.isConfirmAccount), $out += '" data-entity-realUnPayedMoney="', 
                $line = 82, $out += $escape(checking.realUnPayedMoney), $out += '" data-entity-remark="', 
                $line = 82, $out += $escape(checking.remark), $out += '"> <td>', $line = 83, $out += $escape(index + 1), 
                $out += "</td> <td>", $line = 84, $out += $escape(checking.lineProductName), $out += '</td> <td name="startTime">', 
                $line = 85, $out += $escape($helpers.dateFormat(checking.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 86, $out += $escape(checking.contact), $out += "</td> <td>", 
                $line = 87, $out += $escape(checking.adultCount), $out += "大", $line = 87, $out += $escape(checking.childCount), 
                $out += '小<a href="#" class="seeGroup" style="margin-left:5px">展开</a></td> <td>', 
                $line = 88, $out += $escape(checking.operate), $out += "</td> <td>", $line = 89, 
                $out += $escape($helpers.dateFormat(checking.operateTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 90, $out += $escape(checking.needPayMoney), $out += "</td> <td> ", $line = 92, 
                $each(checking.detailList, function(detail) {
                    $out += " ", $line = 93, $out += $escape(detail.describe), $out += "：", $line = 93, 
                    $out += $escape(detail.count), $out += "*", $line = 93, $out += $escape(detail.unitPrice), 
                    $out += "=", $line = 93, $out += $escape(detail.count * detail.unitPrice), $out += "<br> ", 
                    $line = 94;
                }), $out += " </td> <td>", $line = 96, $out += $escape(checking.realPayedMoney), 
                $out += "</td> <td>", $line = 97, $out += $escape(checking.unPayedMoney), $out += '</td> <td><input type="text" name="FinancialTransferRealUnPayedMoney" value="', 
                $line = 98, $out += $escape(checking.transRealUnPayedMoney), $out += '" style="text-align:center" ', 
                $line = 98, 1 == checking.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 98), $out += '></td> <td><input type="text" name="FinancialTransferRemark" value="', 
                $line = 99, $out += $escape(checking.transRemark), $out += '" style="text-align:center" ', 
                $line = 99, 1 == checking.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 99), $out += "></td> <td>", $line = 100, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 100) : ($line = 100, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd")), 
                $line = 100), $out += "</td> <td>", $line = 101, $out += $escape(checking.checkUser), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" data-entity-checkStatus="', 
                $line = 104, $out += $escape(checking.isConfirmAccount), $out += '" class="ace transferFinancial" ', 
                $line = 105, 1 == checking.isConfirmAccount && ($out += 'checked="checked"', $line = 105), 
                $out += " ", $line = 105, 1 == checking.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 105), $out += ' /> <span class="lbl"></span> </label> </td> </tr> <tr class="hide"> <td colspan="17"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>序号</th> <th>姓名</th> <th>联系电话</th> <th>证件类型</th> <th>证件号</th> <th>是否联系人</th> </tr> </thead> <tbody> ', 
                $line = 124, $each(checking.touristGroupMemberList, function(visitor, index) {
                    $out += " <tr> <td>", $line = 126, $out += $escape(index + 1), $out += "</td> <td>", 
                    $line = 127, $out += $escape(visitor.name), $out += "</td> <td>", $line = 128, $out += $escape(visitor.mobileNumber), 
                    $out += "</td> <td>", $line = 129, 0 == visitor.idCardType && ($out += "身份证", $line = 129), 
                    $line = 129, 1 == visitor.idCardType && ($out += "护照", $line = 129), $line = 129, 
                    2 == visitor.idCardType && ($out += "其他", $line = 129), $out += "</td> <td>", $line = 130, 
                    $out += $escape(visitor.idCardNumber), $out += "</td> <td>", $line = 131, 1 == visitor.isContactUser && ($out += "是", 
                    $line = 131), $out += "</td> </tr> ", $line = 133;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 138;
            }), $out += ' </tbody> </table> <div class="row pageMode" style="margin-top: 40px"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计', 
            $line = 143, $out += $escape(recordSize), $out += '条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 152, 0 == totalPage ? ($out += " ", $line = 153, $out += $escape("0"), $out += "/", 
            $line = 153, $out += $escape("0"), $out += " ", $line = 154) : ($out += " ", $line = 155, 
            $out += $escape(pageNo + 1), $out += "/", $line = 155, $out += $escape(totalPage), 
            $out += " ", $line = 156), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> <div class="form-group pull-right col-sm-4" style="text-align: right;margin-top: 40px;padding-right: 40px"> <label class="pos-rel" style="margin-left:20px"> <span class="lbl"><input type="checkbox" class="transfer-selectAll"/>全选</span> </label> </div> <div style="clear: both"></div> <br> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-createTripPlan btn-transferFinancial-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary btn-transferFinancial-checking"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row transferChecking">\r\n    <div class="col-xs-12 border">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="search-area editable editable-click" >\r\n                    <div class="form-group"> \r\n                        <label style="float: left;margin: 0px auto auto 15px" class="control-label pull-left"> 同行地接:{{transferPartnerAgencyName}}</label>\r\n                        \r\n                        <label class="control-label col-sm-1" style="float:left;">账期:</label>\r\n	                        <select class="col-sm-1" name="year" style="margin-left:20px">\r\n								{{each yearList as year index}}\r\n									<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n								{{/each}}\r\n							</select>\r\n							<select class="col-sm-1" name="month" style="margin-left:5px">\r\n							    <option value ="">全部</option>\r\n								{{each monthList as month index}}\r\n									<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n								{{/each}}\r\n							</select>\r\n                        <button class="btn-height btn-sm search-btn btn-checking-search" >\r\n                             <i class="ace-icon fa fa-search"></i>\r\n                                                                                                 搜索\r\n                        </button>\r\n                        \r\n                        <button type="button" class="btn btn-sm btn-primary btn-success btn-transferExport">\r\n							<span>导出报表</span>\r\n							<i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n						</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">总人数:{{sumPersonCount}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总账面应付:{{sumNeedPayMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际已付:{{sumRealPayedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总账面未付:{{sumUnPayedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际未付:{{sumRealUnPayedMoney}}</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n        <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n            <thead>\r\n            <tr>\r\n             <th>序号</th>\r\n\r\n             <th>线路产品</th>\r\n\r\n             <th>出游日期</th>\r\n\r\n             <th>联系人</th>\r\n\r\n             <th>人数</th>\r\n\r\n             <th>操作人</th>\r\n\r\n             <th>操作时间</th>\r\n\r\n             <th>账面应付</th>\r\n             \r\n             <th>明细</th>\r\n\r\n             <th>实际已付</th>\r\n\r\n             <th>账面未付</th>\r\n\r\n             <th> <span class="necessary">*</span>实际未付</th>\r\n\r\n             <th>说明</th>\r\n\r\n             <th>对账时间</th>\r\n\r\n             <th>对账人</th>\r\n\r\n             <th>对账</th>  \r\n\r\n            </tr>\r\n            </thead>   \r\n            <tbody>\r\n            {{each financialTransferList as checking index}}\r\n            <tr data-entity-id="{{checking.id}}" data-entity-isConfirmAccount="{{checking.isConfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}" data-entity-remark="{{checking.remark}}">\r\n                <td>{{index+1}}</td>\r\n                <td>{{checking.lineProductName}}</td>\r\n                <td name="startTime">{{checking.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{checking.contact}}</td>\r\n                <td>{{checking.adultCount}}大{{checking.childCount}}小<a href="#" class="seeGroup" style="margin-left:5px">展开</a></td>\r\n                <td>{{checking.operate}}</td>\r\n                <td>{{checking.operateTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{checking.needPayMoney}}</td>\r\n                <td>\r\n	                {{each checking.detailList as detail}}\r\n	                	{{detail.describe}}：{{detail.count}}*{{detail.unitPrice}}={{detail.count*detail.unitPrice}}<br> \r\n	                {{/each}}  \r\n                </td>\r\n                <td>{{checking.realPayedMoney}}</td>\r\n                <td>{{checking.unPayedMoney}}</td>\r\n                <td><input type="text" name="FinancialTransferRealUnPayedMoney" value="{{checking.transRealUnPayedMoney}}" style="text-align:center" {{if checking.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}></td>\r\n	            <td><input type="text" name="FinancialTransferRemark" value="{{checking.transRemark}}" style="text-align:center" {{if checking.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}></td>\r\n				<td>{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n	            <td>{{checking.checkUser}}</td>\r\n				<td>\r\n					<label class="pos-rel">\r\n							<input type="checkbox" data-entity-checkStatus="{{checking.isConfirmAccount}}" class="ace transferFinancial" \r\n							{{if checking.isConfirmAccount == 1}}checked="checked"{{/if}} {{if checking.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}  />\r\n								<span class="lbl"></span>\r\n					</label>\r\n				</td>\r\n            </tr>\r\n            <tr class="hide">\r\n				<td colspan="17">\r\n					<table class="table table-striped table-bordered table-hover">\r\n							<thead>\r\n								<tr>\r\n									<th>序号</th>\r\n									<th>姓名</th>\r\n									<th>联系电话</th>\r\n									<th>证件类型</th>\r\n									<th>证件号</th>\r\n									<th>是否联系人</th>\r\n								</tr>\r\n							</thead>  \r\n							<tbody>\r\n							   {{each checking.touristGroupMemberList as visitor index}}\r\n								<tr>\r\n									<td>{{index+1}}</td>\r\n									<td>{{visitor.name}}</td>\r\n									<td>{{visitor.mobileNumber}}</td>\r\n									<td>{{if visitor.idCardType == 0}}身份证{{/if}}{{if visitor.idCardType == 1}}护照{{/if}}{{if visitor.idCardType == 2}}其他{{/if}}</td>\r\n									<td>{{visitor.idCardNumber}}</td>\r\n									<td>{{if visitor.isContactUser == 1}}是{{/if}}</td>\r\n								</tr>\r\n							  {{/each}}	\r\n							</tbody>\r\n					</table>\r\n				</td>\r\n			</tr>\r\n			{{/each}}\r\n         </tbody>\r\n        </table>\r\n        <div class="row pageMode" style="margin-top: 40px">\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计{{recordSize}}条记录</div>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                    <ul class="pagination">\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                            <a href="javascript:void(0)">\r\n                                 {{if totalPage == 0}}\r\n                                    {{"0"}}/{{"0"}}\r\n                                 {{else}}\r\n                                    {{pageNo+1}}/{{totalPage}}\r\n                                 {{/if}}\r\n                            </a>\r\n                        </li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="form-group pull-right col-sm-4" style="text-align: right;margin-top: 40px;padding-right: 40px">\r\n                <label class="pos-rel" style="margin-left:20px">\r\n				    <span class="lbl"><input type="checkbox" class="transfer-selectAll"/>全选</span>\r\n				</label>\r\n       </div>\r\n       <div style="clear: both"></div>\r\n       <br>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary btn-createTripPlan btn-transferFinancial-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                   	关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary btn-transferFinancial-checking">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                   	 确认对账\r\n                </button>\r\n            </div>\r\n        </form>\r\n\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});