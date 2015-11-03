/*TMODJS:{"debug":true,"version":191,"md5":"1227e3aa29ef000589c84577eea7ca18"}*/
define(function(require) {
    return require("../../../template")("financial/replace/view/replaceChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, yearList = $data.yearList, monthList = ($data.year, 
            $data.index, $data.monthList), sumNeedIncomeMoney = ($data.month, $data.sumNeedIncomeMoney), sumRealIncomeMoney = $data.sumRealIncomeMoney, sumRealUnIncomeMoney = $data.sumRealUnIncomeMoney, sumUnIncomeMoney = $data.sumUnIncomeMoney, financialBookingOrderList = $data.financialBookingOrderList, recordSize = ($data.checking, 
            $data.busCompany, $data.$index, $data.hotel, $data.scenic, $data.scenicIndex, $data.ticket, 
            $data.recordSize), $out = "";
            return $out += '<div class="row bookingChecking globalAdd"> <div class="col-xs-12 border borderNormal"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label class=" control-label pull-left " style="margin:0px 10px 0 30px;"> 客户:&nbsp&nbsp', 
            $line = 5, $out += $escape(searchParam.travelAgencyName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期:</label> <select class="col-sm-1" name="year"> ', 
            $line = 8, $each(yearList, function(year) {
                $out += ' <option value="', $line = 9, $out += $escape(year.value), $out += '" ', 
                $line = 9, searchParam.year == year.value && ($out += ' selected="selected" ', $line = 9), 
                $out += ">", $line = 9, $out += $escape(year.value), $out += "</option> ", $line = 10;
            }), $out += ' </select> <select class="col-sm-1" name="month" style="margin-left:25px"> <option value="">全部</option> ', 
            $line = 14, $each(monthList, function(month) {
                $out += ' <option value="', $line = 15, $out += $escape(month.value), $out += '" ', 
                $line = 15, searchParam.month == month.value && ($out += ' selected="selected" ', 
                $line = 15), $out += ">", $line = 15, $out += $escape(month.value), $out += " 月</option> ", 
                $line = 16;
            }), $out += ' </select> <button class="btn-height btn-sm search-btn btn-bookingcheck-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> <button type="button" class="btn btn-sm btn-primary btn-success btn-replaceExport" style="margin-left: 25px"> <span>导出报表</span> <i class="ace-icon fa fa-arrow-right icon-on-right"></i> </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group col-sm-12"> <label class=" control-label pull-left" style="margin-left: 15px">总账面应收：', 
            $line = 31, $out += $escape(sumNeedIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际已收：', 
            $line = 32, $out += $escape(sumRealIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面未收：', 
            $line = 33, $out += $escape(sumRealUnIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未收：', 
            $line = 34, $out += $escape(sumUnIncomeMoney), $out += '</label> </div> </form> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">代订单号</th> <th class="th-border">项目</th> <th class="th-border">明细</th> <th class="th-border">应收</th> <th class="th-border">已收</th> <th class="th-border">未收</th> <th class="th-border">实际未收</th> <th class="th-border">说明</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1290005"> ', 
            $line = 57, $each(financialBookingOrderList, function(checking, index) {
                $out += ' <tr data-entity-id="', $line = 58, $out += $escape(checking.id), $out += '" data-entity-createTime = "', 
                $line = 58, $out += $escape($helpers.dateFormat(checking.createTime, "yyyy-MM-dd")), 
                $out += '" data-entity-isConfirmAccount="', $line = 58, $out += $escape(checking.isConfirmAccount), 
                $out += '" data-entity-realUnIncomeMoney="', $line = 58, $out += $escape(checking.realUnIncomeMoney), 
                $out += '" data-entity-remark="', $line = 58, $out += $escape(checking.remark), 
                $out += '"> <td>', $line = 59, $out += $escape(index + 1), $out += "</td> <td>", 
                $line = 60, $out += $escape(checking.orderNumber), $out += "</td> <td>", $line = 61, 
                $out += $escape(checking.item), $out += '</td> <td style="width:400px;text-align:left"> ', 
                $line = 63, 0 == checking.busCompanyList.length && 0 == checking.hotelList.length && 0 == checking.scenicList.length && 0 == checking.ticketList.length ? ($out += " ", 
                $line = 65) : ($out += " ", $line = 66, checking.busCompanyList.length > 0 && ($out += " ", 
                $line = 67, $each(checking.busCompanyList, function(busCompany) {
                    $out += " ", $line = 68, $out += $escape(busCompany.companyName), $out += ",", $line = 68, 
                    $out += $escape(busCompany.type), $out += ",", $line = 68, $out += $escape(busCompany.count), 
                    $out += "*", $line = 68, $out += $escape(busCompany.price), $out += "=", $line = 68, 
                    $out += $escape(busCompany.count * busCompany.price), $out += "; ", $line = 69;
                }), $out += " <br> ", $line = 71), $out += " ", $line = 72, checking.hotelList.length > 0 && ($out += " ", 
                $line = 73, $each(checking.hotelList, function(hotel) {
                    $out += " ", $line = 74, $out += $escape(hotel.hotelName), $out += ",", $line = 74, 
                    $out += $escape(hotel.hotelRoomType), $out += ",", $line = 74, $out += $escape(hotel.count), 
                    $out += "*", $line = 74, $out += $escape(hotel.price), $out += "=", $line = 74, 
                    $out += $escape(hotel.count * hotel.price), $out += "; ", $line = 75;
                }), $out += " <br> ", $line = 77), $out += " ", $line = 78, checking.scenicList.length > 0 && ($out += " ", 
                $line = 79, $each(checking.scenicList, function(scenic) {
                    $out += " ", $line = 80, $out += $escape(scenic.scenicName), $out += ",", $line = 80, 
                    $out += $escape(scenic.type.name), $out += ",", $line = 80, $out += $escape(scenic.count), 
                    $out += "*", $line = 80, $out += $escape(scenic.price), $out += "=", $line = 80, 
                    $out += $escape(scenic.count * scenic.price), $out += "; ", $line = 81;
                }), $out += " <br> ", $line = 83), $out += " ", $line = 84, checking.ticketList.length > 0 && ($out += " ", 
                $line = 85, $each(checking.ticketList, function(ticket) {
                    $out += " ", $line = 86, 1 == ticket.type ? ($out += " 飞机票 ", $line = 88) : 2 == ticket.type ? ($out += " 汽车票 ", 
                    $line = 90) : 3 == ticket.type ? ($out += " 火车票 ", $line = 92) : 4 == ticket.type && ($out += " 轮船票 ", 
                    $line = 94), $out += ", ", $line = 95, $out += $escape(ticket.shift), $out += ", ", 
                    $line = 96, $out += $escape(ticket.level), $out += ",", $line = 96, $out += $escape(ticket.count), 
                    $out += "*", $line = 96, $out += $escape(ticket.price), $out += "=", $line = 96, 
                    $out += $escape(ticket.count * ticket.price), $out += "; ", $line = 97;
                }), $out += " ", $line = 98), $out += " ", $line = 99), $out += " </td> <td>", $line = 101, 
                $out += $escape(checking.needIncomeMoney), $out += "</td> <td>", $line = 102, $out += $escape(checking.incomeMoney), 
                $out += "</td> <td>", $line = 103, $out += $escape(checking.unIncomeMoney), $out += '</td> <td><input type="text" maxlength="9" name="FinancialBookingRealUnPayedMoney" value="', 
                $line = 104, $out += $escape(checking.realUnIncomeMoney), $out += '" style="text-align:center"></td> <td><input type="text" maxlength="1000" name="FinancialbookingRemark" value="', 
                $line = 105, $out += $escape(checking.remark), $out += '" style="text-align:center"></td> <td>', 
                $line = 106, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 106) : ($line = 106, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd")), 
                $line = 106), $out += "</td> <td>", $line = 107, $out += $escape(checking.checkUser), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" data-entity-checkStatus="', 
                $line = 110, $out += $escape(checking.isConfirmAccount), $out += '" class="ace bookingFinancial" ', 
                $line = 111, 1 == checking.isConfirmAccount && ($out += 'checked="checked"', $line = 111), 
                $out += ' /> <span class="lbl"></span> </label> </td> </tr> ', $line = 116;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 122, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <div class="form-group col-sm-12 " > <label class="control-label pull-right" ><input class = "selectAll" type="checkbox"> 全选</label> </div> <div class="clearfix"></div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-bookingFinancial-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary btn-bookingFinancial-checking" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row bookingChecking globalAdd">\r\n    <div class="col-xs-12 border borderNormal">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n                <div class="form-group"> <label class=" control-label pull-left " style="margin:0px 10px 0 30px;"> 客户:&nbsp&nbsp{{searchParam.travelAgencyName}}</label>\r\n                    <label class="col-sm-1 control-label no-padding-right">账期:</label>\r\n                    <select class="col-sm-1" name="year">\r\n                        {{each yearList as year index}}\r\n                        <option value="{{year.value}}" {{if searchParam.year == year.value}} selected="selected" {{/if}}>{{year.value}}</option>\r\n                        {{/each}}\r\n                    </select>\r\n                    <select class="col-sm-1" name="month" style="margin-left:25px">\r\n                        <option value="">全部</option>\r\n                    	{{each monthList as month index}}\r\n                           <option value="{{month.value}}" {{if searchParam.month == month.value}} selected="selected" {{/if}}>{{month.value}} 月</option>\r\n                        {{/each}}\r\n                    </select>\r\n                    <button class="btn-height btn-sm search-btn btn-bookingcheck-search" >\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                       	 搜索\r\n                    </button>\r\n                    <button type="button" class="btn btn-sm btn-primary btn-success btn-replaceExport" style="margin-left: 25px">\r\n							<span>导出报表</span>\r\n							<i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n				    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group col-sm-12">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">总账面应收：{{sumNeedIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际已收：{{sumRealIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总账面未收：{{sumRealUnIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际未收：{{sumUnIncomeMoney}}</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n        <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n            <thead>\r\n            <tr>\r\n                 <th class="th-border">序号</th>\r\n                 <th class="th-border">代订单号</th>\r\n                 <th class="th-border">项目</th>\r\n                 <th class="th-border">明细</th>\r\n                 <th class="th-border">应收</th>\r\n                 <th class="th-border">已收</th>\r\n                 <th class="th-border">未收</th>\r\n                 <th class="th-border">实际未收</th>\r\n                 <th class="th-border">说明</th>\r\n                 <th class="th-border">对账时间</th>\r\n                 <th class="th-border">对账人</th>\r\n                 <th class="th-border">对账</th>\r\n            </tr>\r\n            </thead>    \r\n            <tbody class="T-checkList" data-right="1290005">\r\n            {{each financialBookingOrderList as checking index}}\r\n            <tr data-entity-id="{{checking.id}}" data-entity-createTime = "{{checking.createTime | dateFormat: \'yyyy-MM-dd\'}}" data-entity-isConfirmAccount="{{checking.isConfirmAccount}}" data-entity-realUnIncomeMoney="{{checking.realUnIncomeMoney}}" data-entity-remark="{{checking.remark}}">\r\n                <td>{{index+1}}</td>\r\n                <td>{{checking.orderNumber}}</td>\r\n                <td>{{checking.item}}</td>   \r\n                <td style="width:400px;text-align:left">\r\n                  {{if checking.busCompanyList.length == 0 && checking.hotelList.length == 0 && checking.scenicList.length == 0 && checking.ticketList.length == 0}}\r\n                       	\r\n                  {{else}}\r\n                   	{{if checking.busCompanyList.length > 0}}\r\n	                    {{each checking.busCompanyList as busCompany}}\r\n	                    	{{busCompany.companyName}},{{busCompany.type}},{{busCompany.count}}*{{busCompany.price}}={{busCompany.count*busCompany.price}};\r\n	                    {{/each}}\r\n	                    <br>\r\n                    {{/if}}\r\n                    {{if checking.hotelList.length > 0}}\r\n		                {{each checking.hotelList as hotel}}\r\n		                    {{hotel.hotelName}},{{hotel.hotelRoomType}},{{hotel.count}}*{{hotel.price}}={{hotel.count*hotel.price}};\r\n		                {{/each}}\r\n		                <br>\r\n	                {{/if}}\r\n		            {{if checking.scenicList.length > 0}}\r\n		                {{each checking.scenicList as scenic scenicIndex}}\r\n		                    {{scenic.scenicName}},{{scenic.type.name}},{{scenic.count}}*{{scenic.price}}={{scenic.count*scenic.price}};\r\n		                {{/each}}\r\n		                <br>\r\n	                {{/if}}  \r\n	                {{if checking.ticketList.length > 0}}\r\n		                {{each checking.ticketList as ticket}}\r\n		                    {{if ticket.type == 1}}\r\n		                       		飞机票\r\n	                        {{else if ticket.type ==2}}\r\n		                       	 	 汽车票\r\n                            {{else if ticket.type ==3}}  \r\n		                       		 火车票\r\n                            {{else if ticket.type ==4}}\r\n		                        	 轮船票\r\n		                    {{/if}},\r\n		                   {{ticket.shift}},\r\n		                    {{ticket.level}},{{ticket.count}}*{{ticket.price}}={{ticket.count*ticket.price}};\r\n		                {{/each}}\r\n	                {{/if}}\r\n	              {{/if}}\r\n                </td>\r\n                <td>{{checking.needIncomeMoney}}</td>\r\n                <td>{{checking.incomeMoney}}</td>\r\n                <td>{{checking.unIncomeMoney}}</td>\r\n                <td><input type="text" maxlength="9" name="FinancialBookingRealUnPayedMoney" value="{{checking.realUnIncomeMoney}}" style="text-align:center"></td>\r\n                <td><input type="text" maxlength="1000" name="FinancialbookingRemark" value="{{checking.remark}}" style="text-align:center"></td>\r\n                <td>{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{checking.checkUser}}</td>\r\n                <td>  \r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" data-entity-checkStatus="{{checking.isConfirmAccount}}" class="ace bookingFinancial" \r\n                        {{if checking.isConfirmAccount == 1}}checked="checked"{{/if}} />\r\n                        <span class="lbl"></span>\r\n                    </label>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n            </tbody>\r\n        </table>\r\n\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="form-group col-sm-12 " >\r\n            <label class="control-label pull-right"  ><input class = "selectAll" type="checkbox">  全选</label>\r\n        </div>\r\n        <div class="clearfix"></div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary btn-bookingFinancial-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    	关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary btn-bookingFinancial-checking" style="margin-left: 20px">\r\n                    <i class="ace-icon fa fa-check-circle"></i>  \r\n                    	确认\r\n                </button>\r\n            </div>\r\n        </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});