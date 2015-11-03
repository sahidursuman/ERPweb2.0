/*TMODJS:{"debug":true,"version":161,"md5":"dabd0af897ccc1dd4ad83b04a4eaad05"}*/
define(function(require) {
    return require("../../../template")("financial/hotel/view/hotelChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, hotelName = $data.hotelName, $each = $utils.$each, yearList = $data.yearList, searchParam = ($data.year, 
            $data.index, $data.searchParam), monthList = $data.monthList, sumNeedPayMoney = ($data.month, 
            $data.sumNeedPayMoney), sumRealPayedMoney = $data.sumRealPayedMoney, sumUnPayedMoney = $data.sumUnPayedMoney, sumRealUnPayedMoney = $data.sumRealUnPayedMoney, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, financialHotelList = $data.financialHotelList, recordSize = ($data.checking, 
            $data.recordSize), $out = "";
            return $out += '<div class="row hotelChecking globalAdd"> <div class="col-xs-12 border" style="padding-bottom: 0px"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" > <div class="form-group"> <label style="float: left;margin: 0px auto auto 15px" class="control-label pull-left"> 酒店:', 
            $line = 6, $out += $escape(hotelName), $out += '</label> <label class="control-label col-sm-1" style="float:left;">账期:</label> <select class="col-sm-1" name="year" style="margin-left:20px"> ', 
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
            }), $out += ' </select> <button class="btn-sm btn-checking-search search-btn btn-height" > <i class="ace-icon fa fa-search"></i> 搜索 </button> <button type="button" class="btn btn-sm btn-primary btn-success btn-hotelExport"> <span>导出报表</span> <i class="ace-icon fa fa-arrow-right icon-on-right"></i> </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left" style="margin-left: 15px">总账面应付：', 
            $line = 32, $out += $escape(sumNeedPayMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际已付：', 
            $line = 33, $out += $escape(sumRealPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面未付：', 
            $line = 34, $out += $escape(sumUnPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未付：', 
            $line = 35, $out += $escape(sumRealUnPayedMoney), $out += '</label> </div> </form> </div> <input type="hidden" value="', 
            $line = 39, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 40, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">账务类别</th> <th class="th-border">入住日期</th> <th class="th-border">房型</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">实际已付</th> <th class="th-border">账面未付</th> <th class="th-border">单据</th> <th class="th-border"> <span class="necessary">*</span>实际未付</th> <th class="th-border">说明</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1220005"> ', 
            $line = 64, $each(financialHotelList, function(checking, index) {
                $out += ' <tr data-entity-id="', $line = 65, $out += $escape(checking.id), $out += '" data-entity-isConfirmAccount="', 
                $line = 65, $out += $escape(checking.isConfirmAccount), $out += '" data-entity-realUnPayedMoney="', 
                $line = 65, $out += $escape(checking.realUnPayedMoney), $out += '" data-entity-remark="', 
                $line = 65, $out += $escape(checking.remark), $out += '"> <td>', $line = 66, $out += $escape(index + 1), 
                $out += "</td> <td> ", $line = 68, 0 == checking.arrangeType ? ($out += " ", $line = 69, 
                $out += $escape(checking.tripNumber), $line = 69, $out += $escape(","), $line = 69, 
                $out += $escape(checking.lineProductName), $line = 69, $out += $escape(","), $line = 69, 
                $out += $escape(checking.guideName), $out += " ", $line = 70) : ($out += " ", $line = 71, 
                $out += $escape(checking.tripNumber), $line = 71, $out += $escape(","), $line = 71, 
                $out += $escape(checking.arrangeRealname), $line = 71, $out += $escape(","), $line = 71, 
                $out += $escape(checking.arrangeMobileNumber), $out += " ", $line = 72), $out += ' </td> <td name="consumeStartTime">', 
                $line = 74, null == checking.consumeStartTime || "" == checking.consumeStartTime ? ($out += "-", 
                $line = 74) : ($line = 74, $out += $escape($helpers.dateFormat(checking.consumeStartTime, "yyyy-MM-dd")), 
                $line = 74), $out += "</td> <td>", $line = 75, $out += $escape(checking.hotelRoomType), 
                $out += "</td> <td>", $line = 76, $out += $escape(checking.price), $out += "</td> <td>", 
                $line = 77, $out += $escape(checking.realCount), $out += "</td> <td>", $line = 78, 
                $out += $escape(checking.reduceMoney), $out += "</td> <td>", $line = 79, $out += $escape(checking.needPayMoney), 
                $out += "</td> <td> ", $line = 81, $out += $escape("社付:"), $line = 81, $out += $escape(checking.travelAgencyPayedMoney), 
                $line = 81, $out += $escape(","), $out += " ", $line = 82, $out += $escape("导付:"), 
                $line = 82, $out += $escape(checking.guidePayedMoney), $out += " </td> <td>", $line = 84, 
                $out += $escape(checking.unPayedMoney), $out += "</td> <td>", $line = 85, null != checking.billImages && "" != checking.billImages ? ($out += '<a href="#" class="hotelImg" url="', 
                $line = 85, $out += $escape(checking.billImages), $out += '"><span>查看</span></a>', 
                $line = 85) : ($out += '<span style="color:#bbb">查看</span>', $line = 85), $out += '</td> <td><input type="text" name="FinancialHotelRealUnPayedMoney" value="', 
                $line = 86, $out += $escape(checking.realUnPayedMoney), $out += '" style="text-align:center"></td> <td><input type="text" name="FinancialHotelRemark" value="', 
                $line = 87, $out += $escape(checking.remark), $out += '" style="text-align:center"/></td> <td>', 
                $line = 88, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 88) : ($line = 88, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd")), 
                $line = 88), $out += "</td> <td>", $line = 89, $out += $escape(checking.checkUserRealName), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" data-entity-checkStatus="', 
                $line = 92, $out += $escape(checking.isConfirmAccount), $out += '" class="ace hotelFinancial" ', 
                $line = 92, 1 == checking.isConfirmAccount && ($out += 'checked="checked"', $line = 92), 
                $out += ' /> <span class="lbl"></span> </label> </td> </tr> ', $line = 97;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 102, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <div class="form-group pull-right col-sm-12 " > <label class="pos-rel pull-right"> <span class="lbl"><input type="checkbox" class="hotel-selectAll"/>全选</span> </label> </div> <div style="clear: both"></div> <br> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-hotelFinancial-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary btn-hotelFinancial-checking" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row hotelChecking globalAdd">\r\n    <div class="col-xs-12 border" style="padding-bottom: 0px">\r\n            <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="search-area editable editable-click" >\r\n                    <div class="form-group"> \r\n                        <label style="float: left;margin: 0px auto auto 15px" class="control-label pull-left"> 酒店:{{hotelName}}</label>\r\n                        <label class="control-label col-sm-1" style="float:left;">账期:</label>\r\n	                        <select class="col-sm-1" name="year" style="margin-left:20px">\r\n								{{each yearList as year index}}\r\n									<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n								{{/each}}\r\n							</select>\r\n							<select class="col-sm-1" name="month" style="margin-left:5px">\r\n							    <option value ="">全部</option>\r\n								{{each monthList as month index}}\r\n									<option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n								{{/each}}\r\n							</select>\r\n                        <button class="btn-sm btn-checking-search search-btn btn-height" >\r\n                             <i class="ace-icon fa fa-search"></i>\r\n                                                                            搜索\r\n                        </button>\r\n                        <button type="button" class="btn btn-sm btn-primary btn-success btn-hotelExport">\r\n							<span>导出报表</span>\r\n							<i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n						</button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n            <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="form-group ">\r\n                    <label class=" control-label pull-left" style="margin-left: 15px">总账面应付：{{sumNeedPayMoney}}</label>\r\n                    <label class=" control-label " style="margin-left:30px;">总实际已付：{{sumRealPayedMoney}}</label>\r\n                    <label class=" control-label " style="margin-left:30px;">总账面未付：{{sumUnPayedMoney}}</label>\r\n                    <label class=" control-label " style="margin-left:30px;">总实际未付：{{sumRealUnPayedMoney}}</label>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    	<input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <div class="clearfix"></div>\r\n        <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n            <thead>\r\n            <tr>\r\n              <th class="th-border">序号</th>\r\n              <th class="th-border">账务类别</th>\r\n              <th class="th-border">入住日期</th>\r\n              <th class="th-border">房型</th>\r\n              <th class="th-border">单价</th>\r\n              <th class="th-border">数量</th>\r\n              <th class="th-border">优惠</th>\r\n              <th class="th-border">账面应付</th>\r\n              <th class="th-border">实际已付</th>\r\n              <th class="th-border">账面未付</th>\r\n              <th class="th-border">单据</th>\r\n              <th class="th-border"> <span class="necessary">*</span>实际未付</th>\r\n              <th class="th-border">说明</th>\r\n              <th class="th-border">对账时间</th>\r\n              <th class="th-border">对账人</th>\r\n              <th class="th-border">对账</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody class="T-checkList" data-right="1220005">\r\n               {{each financialHotelList as checking index}}\r\n					    <tr data-entity-id="{{checking.id}}" data-entity-isConfirmAccount="{{checking.isConfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}" data-entity-remark="{{checking.remark}}">\r\n				         <td>{{index+1}}</td>\r\n							<td>\r\n								{{if checking.arrangeType == 0}}\r\n									{{checking.tripNumber}}{{","}}{{checking.lineProductName}}{{","}}{{checking.guideName}}\r\n							  	{{else}}\r\n									{{checking.tripNumber}}{{","}}{{checking.arrangeRealname}}{{","}}{{checking.arrangeMobileNumber}}\r\n							  	{{/if}}\r\n							</td>\r\n							<td name="consumeStartTime">{{if checking.consumeStartTime == null || checking.consumeStartTime == ""}}-{{else}}{{checking.consumeStartTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n							<td>{{checking.hotelRoomType}}</td>\r\n							<td>{{checking.price}}</td>\r\n							<td>{{checking.realCount}}</td>  \r\n							<td>{{checking.reduceMoney}}</td>\r\n							<td>{{checking.needPayMoney}}</td>\r\n							<td>\r\n								{{"社付:"}}{{checking.travelAgencyPayedMoney}}{{","}}\r\n							    {{"导付:"}}{{checking.guidePayedMoney}}\r\n							</td> \r\n							<td>{{checking.unPayedMoney}}</td>\r\n							<td>{{if checking.billImages != null && checking.billImages !=""}}<a href="#" class="hotelImg" url="{{checking.billImages}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n							<td><input type="text" name="FinancialHotelRealUnPayedMoney" value="{{checking.realUnPayedMoney}}" style="text-align:center"></td>\r\n              <td><input type="text" name="FinancialHotelRemark" value="{{checking.remark}}" style="text-align:center"/></td>\r\n							<td>{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n              <td>{{checking.checkUserRealName}}</td>\r\n							<td>\r\n							   <label class="pos-rel">\r\n							   		<input type="checkbox" data-entity-checkStatus="{{checking.isConfirmAccount}}" class="ace hotelFinancial" {{if checking.isConfirmAccount == 1}}checked="checked"{{/if}} />\r\n							   		<span class="lbl"></span>\r\n							   </label>\r\n							</td>\r\n					     </tr>\r\n			    {{/each}}\r\n            </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n          <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n          </div>\r\n          <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class="form-group pull-right col-sm-12 " >\r\n                <label class="pos-rel pull-right">\r\n				    <span class="lbl"><input type="checkbox" class="hotel-selectAll"/>全选</span>\r\n				</label>\r\n            </div>\r\n            <div style="clear: both"></div>\r\n            <br>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary btn-hotelFinancial-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                  			 关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary btn-hotelFinancial-checking" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                   			 确认\r\n                </button>\r\n            </div>\r\n        </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});