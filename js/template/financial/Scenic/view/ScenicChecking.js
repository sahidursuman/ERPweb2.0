/*TMODJS:{"debug":true,"version":101,"md5":"79488c6bf1070af45d7629b492df481c"}*/
define(function(require) {
    return require("../../../template")("financial/Scenic/view/ScenicChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, scenicName = $data.scenicName, $each = $utils.$each, yearList = $data.yearList, searchParam = ($data.year, 
            $data.index, $data.searchParam), monthList = $data.monthList, sumNeedPayMoney = ($data.month, 
            $data.sumNeedPayMoney), sumRealPayedMoney = $data.sumRealPayedMoney, sumUnPayedMoney = $data.sumUnPayedMoney, sumRealUnPayedMoney = $data.sumRealUnPayedMoney, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, financialScenicList = $data.financialScenicList, roleType = ($data.rs, 
            $data.roleType), recordSize = $data.recordSize, totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row scenic ScenicChecking"> <div class="col-xs-12 border"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label style="float: left;margin: 0px auto auto 15px" class=" control-label ">景区:', 
            $line = 6, $out += $escape(scenicName), $out += '</label> <label class="control-label col-sm-1" style="float:left;">账期:</label> <select class="col-sm-1" name="year" style="margin-left:20px"> ', 
            $line = 9, $each(yearList, function(year) {
                $out += ' <option value="', $line = 10, $out += $escape(year.value), $out += '" ', 
                $line = 10, searchParam.year == year.value && ($out += 'selected="selected"', $line = 10), 
                $out += ">", $line = 10, $out += $escape(year.value), $out += "</option> ", $line = 11;
            }), $out += ' </select> <select class="col-sm-1" name="month" style="margin-left:5px"> <option value ="">全部</option> ', 
            $line = 15, $each(monthList, function(month) {
                $out += ' <option value="', $line = 16, $out += $escape(month.value), $out += '" ', 
                $line = 16, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 16), $out += ">", $line = 16, $out += $escape(month.value), $out += "月</option> ", 
                $line = 17;
            }), $out += ' </select> <button class="btn-height btn-sm search-btn btn-checking-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> <button type="button" class="btn btn-sm btn-primary btn-success btn-scenicExport"> <span>导出报表</span> <i class="ace-icon fa fa-arrow-right icon-on-right"></i> </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left" style="margin-left: 15px">总账面应付：', 
            $line = 32, $out += $escape(sumNeedPayMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际已付：', 
            $line = 33, $out += $escape(sumRealPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面未付：', 
            $line = 34, $out += $escape(sumUnPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未付：', 
            $line = 35, $out += $escape(sumRealUnPayedMoney), $out += '</label> </div> </form> </div> <input type="hidden" value="', 
            $line = 39, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 40, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all scenic-tabel" style="margin-top: 30px"> <thead> <tr> <th> 序号</th> <th> 账务类别</th> <th> 游玩日期</th> <th> 收费项</th> <th> 订单号</th> <th> 单价</th> <th> 数量</th> <th> 优惠</th> <th> 账面应付</th> <th> 实际已付</th> <th> 账面未付</th> <th> 单据</th> <th> <span class="necessary">*</span>实际未付</th> <th> 说明</th> <th > 对账时间</th> <th> 对账人</th> <th> 对账</th> </tr> </thead> <tbody> ', 
            $line = 66, $each(financialScenicList, function(rs, index) {
                $out += ' <tr data-entity-id="', $line = 67, $out += $escape(rs.id), $out += '" data-entity-isConfirmAccount="', 
                $line = 67, $out += $escape(rs.isConfirmAccount), $out += '" data-entity-realUnPayedMoney="', 
                $line = 67, $out += $escape(rs.realUnPayedMoney), $out += '" data-entity-remark="', 
                $line = 67, $out += $escape(rs.remark), $out += '"> <td>', $line = 68, $out += $escape(index + 1), 
                $out += "</td> <td>", $line = 69, $out += $escape(rs.tripNumber), $out += ",", $line = 69, 
                $out += $escape(rs.lineProductName), $out += '</td> <td name="startTime">', $line = 70, 
                $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 71, $out += $escape(rs.scenicItemName), $out += "</td> <td>", $line = 72, 
                $out += $escape(rs.scenicItemOrderNumber), $out += "</td> <td>", $line = 73, $out += $escape(rs.price), 
                $out += "</td> <td>", $line = 74, $out += $escape(rs.realCount), $out += "</td> <td>", 
                $line = 75, $out += $escape(rs.reduceMoney), $out += "</td> <td>", $line = 76, $out += $escape(rs.needPayMoney), 
                $out += "</td> <td>社付", $line = 77, $out += $escape(rs.travelAgencyPayedMoney), 
                $out += ",导付", $line = 77, $out += $escape(rs.guidePayedMoney), $out += "</td> <td>", 
                $line = 78, $out += $escape(rs.unPayedMoney), $out += '</td> <td style="color: #0092ef;"><a class="scenicLookBillsImg" url="', 
                $line = 79, $out += $escape(rs.billImages), $out += '" href="#">查看</a></td> <td><input type="text" maxlength="10" name="FinancialScenicRealUnPayedMoney" class="col-sm-12" value="', 
                $line = 80, $out += $escape(rs.realUnPayedMoney), $out += '" ', $line = 80, 1 == rs.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 80), $out += '></td> <td><input type="text" maxlength="1000" name="FinancialScenicRemark" class="col-sm-12" value="', 
                $line = 81, $out += $escape(rs.remark), $out += '"></td> <td>', $line = 82, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", 
                $line = 82) : ($line = 82, $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd")), 
                $line = 82), $out += "</td> <td>", $line = 83, $out += $escape(rs.checkUserRealName), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" data-entity-checkStatus="', 
                $line = 86, $out += $escape(rs.isConfirmAccount), $out += '" class="ace scenicFinancial" ', 
                $line = 87, 1 == rs.isConfirmAccount && ($out += 'checked="checked"', $line = 87), 
                $out += " ", $line = 87, 1 == rs.isConfirmAccount && 1 != roleType && ($out += ' disabled = "true" ', 
                $line = 87), $out += '/> <span class="lbl"></span> </label> </td> </tr> ', $line = 92;
            }), $out += ' </tbody> </table> <div class="row pageMode" style="margin-top: 40px"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计', 
            $line = 97, $out += $escape(recordSize), $out += '条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 106, 0 == totalPage ? ($out += " 0/0 ", $line = 108) : ($out += " ", $line = 109, 
            $out += $escape(pageNo + 1), $out += "/", $line = 109, $out += $escape(totalPage), 
            $out += " ", $line = 110), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> <div class="form-group col-sm-12 text-right " > <label class="pos-rel" style="margin-left:20px"> <span class="lbl"><input type="checkbox" class="scenicSelectAll"/>全选</span> </label> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-scenicFinancial-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary btn-scenicFinancial-checking"> <i class="ace-icon fa fa-check-circle "></i> 确认对账 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row scenic ScenicChecking">\r\n    <div class="col-xs-12 border">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n                <div class="form-group">\r\n                     <label style="float: left;margin: 0px auto auto 15px" class=" control-label ">景区:{{scenicName}}</label>\r\n                        <label class="control-label col-sm-1" style="float:left;">账期:</label>\r\n	                        <select class="col-sm-1" name="year" style="margin-left:20px">\r\n								{{each yearList as year index}}\r\n									<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n								{{/each}}\r\n							</select>\r\n							<select class="col-sm-1" name="month" style="margin-left:5px">\r\n							    <option value ="">全部</option>\r\n								{{each monthList as month index}}\r\n									<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n								{{/each}}\r\n							</select>\r\n                        <button class="btn-height btn-sm search-btn btn-checking-search" >\r\n                             <i class="ace-icon fa fa-search"></i>\r\n                                                                                                 搜索\r\n                        </button>  \r\n                        <button type="button" class="btn btn-sm btn-primary btn-success btn-scenicExport">\r\n							<span>导出报表</span>\r\n							<i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n						</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                    <label class=" control-label pull-left" style="margin-left: 15px">总账面应付：{{sumNeedPayMoney}}</label>\r\n                    <label class=" control-label " style="margin-left:30px;">总实际已付：{{sumRealPayedMoney}}</label>\r\n                    <label class=" control-label " style="margin-left:30px;">总账面未付：{{sumUnPayedMoney}}</label>\r\n                    <label class=" control-label " style="margin-left:30px;">总实际未付：{{sumRealUnPayedMoney}}</label>\r\n             </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <div class="clearfix"></div>\r\n        <table class="table table-striped table-bordered table-hover all scenic-tabel" style="margin-top: 30px">\r\n            <thead>\r\n            \r\n            <tr>\r\n              <th> 序号</th>\r\n              <th> 账务类别</th>\r\n              <th> 游玩日期</th>\r\n              <th> 收费项</th>\r\n              <th> 订单号</th>\r\n              <th> 单价</th>\r\n              <th> 数量</th>\r\n              <th> 优惠</th>\r\n              <th> 账面应付</th>\r\n              <th> 实际已付</th>\r\n              <th> 账面未付</th>   \r\n              <th> 单据</th>\r\n              <th>  <span class="necessary">*</span>实际未付</th>\r\n              <th> 说明</th>\r\n              <th > 对账时间</th>\r\n              <th> 对账人</th>\r\n			  <th> 对账</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            {{each financialScenicList as rs index}}\r\n	            <tr data-entity-id="{{rs.id}}" data-entity-isConfirmAccount="{{rs.isConfirmAccount}}" data-entity-realUnPayedMoney="{{rs.realUnPayedMoney}}" data-entity-remark="{{rs.remark}}">\r\n	                <td>{{index+1}}</td>\r\n	                <td>{{rs.tripNumber}},{{rs.lineProductName}}</td>\r\n	                <td name="startTime">{{rs.startTime | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n	                <td>{{rs.scenicItemName}}</td>\r\n	                <td>{{rs.scenicItemOrderNumber}}</td>\r\n	                <td>{{rs.price}}</td>\r\n	                <td>{{rs.realCount}}</td>\r\n	                <td>{{rs.reduceMoney}}</td>\r\n	                <td>{{rs.needPayMoney}}</td>\r\n	                <td>社付{{rs.travelAgencyPayedMoney}},导付{{rs.guidePayedMoney}}</td>\r\n					<td>{{rs.unPayedMoney}}</td>\r\n	                <td style="color: #0092ef;"><a class="scenicLookBillsImg" url="{{rs.billImages}}" href="#">查看</a></td>\r\n	                <td><input type="text" maxlength="10" name="FinancialScenicRealUnPayedMoney" class="col-sm-12" value="{{rs.realUnPayedMoney}}" {{if rs.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}></td>\r\n	                <td><input type="text" maxlength="1000" name="FinancialScenicRemark" class="col-sm-12" value="{{rs.remark}}"></td>\r\n					<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n					<td>{{rs.checkUserRealName}}</td>\r\n	                <td>\r\n	                    <label class="pos-rel">\r\n						   		<input type="checkbox" data-entity-checkStatus="{{rs.isConfirmAccount}}" class="ace scenicFinancial" \r\n						   		{{if rs.isConfirmAccount == 1}}checked="checked"{{/if}} {{if rs.isConfirmAccount == 1 && roleType != 1 }} disabled = "true" {{/if}}/>\r\n						   		<span class="lbl"></span>\r\n						</label>\r\n					</td>\r\n	            </tr>\r\n			{{/each}}\r\n            </tbody>\r\n        </table>\r\n        <div class="row pageMode" style="margin-top: 40px">\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计{{recordSize}}条记录</div>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                    <ul class="pagination">\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                            <a href="javascript:void(0)">\r\n                               {{if totalPage == 0}}\r\n                                    0/0\r\n                                    {{else}}\r\n                                    {{pageNo+1}}/{{totalPage}}\r\n                               {{/if}}\r\n                            </a>\r\n                        </li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n                        <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n\r\n    <div class="form-group col-sm-12 text-right " >\r\n        <label class="pos-rel" style="margin-left:20px">\r\n						 <span class="lbl"><input type="checkbox" class="scenicSelectAll"/>全选</span>\r\n		</label>\r\n    </div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary  btn-scenicFinancial-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary btn-scenicFinancial-checking">\r\n                    <i class="ace-icon fa fa-check-circle "></i>\r\n                    确认对账\r\n                </button>\r\n            </div>\r\n        </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});