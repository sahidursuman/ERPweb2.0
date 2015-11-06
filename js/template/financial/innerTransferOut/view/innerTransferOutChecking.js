/*TMODJS:{"debug":true,"version":58,"md5":"a66e27a8a9ebbc17969c7d1f77a9eef5"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/innerTransferOutChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, yearList = $data.yearList, monthList = ($data.year, 
            $data.index, $data.monthList), allPerson = ($data.month, $data.allPerson), needPayMoney = $data.needPayMoney, payedMoney = $data.payedMoney, unPayedMoney = $data.unPayedMoney, realUnPayedMoney = $data.realUnPayedMoney, financialInnerTransferOutList = $data.financialInnerTransferOutList, recordSize = ($data.checking, 
            $data.detail, $data.$index, $data.visitor, $data.recordSize), $out = "";
            return $out += '<div class="row innerTransferChecking globalAdd"> <div class="col-xs-12 border"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" > <div class="form-group"> <label style="float: left;margin: 0px auto auto 15px" class="control-label pull-left"> 部门:', 
            $line = 6, $out += $escape(searchParam.toBusinessGroupName), $out += '</label> <label class="control-label col-sm-1" style="float:left;">账期:</label> <select class="col-sm-1" name="year" style="margin-left:20px"> ', 
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
            }), $out += ' </select> <button class="marginLeft-30 btn-sm search-btn btn-checking-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> <button type="button" class="btn btn-sm marginLeft-30 btn-primary btn-success btn-transferExport"> <span>导出报表</span> <i class="ace-icon fa fa-arrow-right icon-on-right"></i> </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left" style="margin-left: 15px">总人数:', 
            $line = 34, $out += $escape(allPerson), $out += '<label> <label class=" control-label " style="margin-left:30px;">总应付:', 
            $line = 35, $out += $escape(needPayMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总已付:', 
            $line = 36, $out += $escape(payedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总未付:', 
            $line = 37, $out += $escape(unPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未付:', 
            $line = 38, $out += $escape(realUnPayedMoney), $out += '</label> </div> </form> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr> <th>序号</th> <th>线路产品</th> <th>出游日期</th> <th>联系人</th> <th>人数</th> <th>操作人</th> <th>操作时间</th> <th>应付</th> <th>明细</th> <th>已付</th> <th>未付</th> <th>实际未付</th> <th>说明</th> <th>对账时间</th> <th>对账人</th> <th>对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1370005"> ', 
            $line = 81, $each(financialInnerTransferOutList, function(checking, index) {
                $out += ' <tr data-entity-id="', $line = 82, $out += $escape(checking.id), $out += '" data-entity-createTime="', 
                $line = 82, $out += $escape(checking.createTime), $out += '" data-entity-isComfirmAccount="', 
                $line = 82, $out += $escape(checking.isComfirmAccount), $out += '" data-entity-realUnPayedMoney="', 
                $line = 82, $out += $escape(checking.realUnPayedMoney), $out += '" data-entity-remark="', 
                $line = 82, $out += $escape(checking.checkRemark), $out += '"> <td>', $line = 83, 
                $out += $escape(index + 1), $out += "</td> <td>", $line = 84, $out += $escape(checking.lineProductName), 
                $out += '</td> <td name="startTime">', $line = 85, $out += $escape($helpers.dateFormat(checking.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 86, $out += $escape(checking.contactUserName), $out += "</td> <td>", 
                $line = 87, $out += $escape(checking.adultCount), $out += "大", $line = 87, $out += $escape(checking.childCount), 
                $out += '小<a href="#" class="seeGroup" style="margin-left:5px">展开</a></td> <td>', 
                $line = 88, $out += $escape(checking.operationUserName), $out += "</td> <td>", $line = 89, 
                $out += $escape($helpers.dateFormat(checking.operationTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 90, $out += $escape(checking.needPayMoney), $out += "</td> <td> 大人:", $line = 92, 
                $out += $escape(checking.adultPrice), $out += "*", $line = 92, $out += $escape(checking.adultCount), 
                $out += "=", $line = 92, $out += $escape(checking.adultPrice * checking.adultCount), 
                $out += "<br> 小孩:", $line = 93, $out += $escape(checking.childPrice), $out += "*", 
                $line = 93, $out += $escape(checking.childCount), $out += "=", $line = 93, $out += $escape(checking.childPrice * checking.childCount), 
                $out += "<br> ", $line = 94, checking.otherTransferFeeList.length > 0 ? ($out += " ", 
                $line = 95, $each(checking.otherTransferFeeList, function(detail) {
                    $out += " ", $line = 96, $out += $escape(detail.discribe), $out += "：", $line = 96, 
                    $out += $escape(detail.count), $out += "*", $line = 96, $out += $escape(detail.price), 
                    $out += "=", $line = 96, $out += $escape(detail.count * detail.price), $out += "<br> ", 
                    $line = 97;
                }), $out += " ", $line = 98) : ($out += " - ", $line = 100), $out += " </td> <td>", 
                $line = 102, $out += $escape(checking.payedMoney), $out += "</td> <td>", $line = 103, 
                $out += $escape(checking.unPayedMoney), $out += '</td> <td><input type="text" maxlength="9" name="realUnPayedMoney" value="', 
                $line = 104, $out += $escape(checking.realUnPayedMoney), $out += '" style="text-align:center"></td> <td><input type="text" maxlength="1000" name="checkRemark" value="', 
                $line = 105, $out += $escape(checking.checkRemark), $out += '" style="text-align:center"></td> <td>', 
                $line = 106, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 106) : ($line = 106, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd")), 
                $line = 106), $out += "</td> <td>", $line = 107, null == checking.checkUserRealName || "" == checking.checkUserRealName ? ($out += "-", 
                $line = 107) : ($line = 107, $out += $escape(checking.checkUserRealName), $line = 107), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" data-entity-checkStatus="', 
                $line = 110, $out += $escape(checking.isComfirmAccount), $out += '" class="ace innerTransferFinancial" ', 
                $line = 111, 1 == checking.isComfirmAccount && ($out += 'checked="checked"', $line = 111), 
                $out += '/> <span class="lbl"></span> </label> </td> </tr> <tr class="hide"> <td colspan="17"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th>序号</th> <th>姓名</th> <th>联系电话</th> <th>证件类型</th> <th>证件号</th> <th>是否联系人</th> </tr> </thead> <tbody> ', 
                $line = 130, $each(checking.memberList, function(visitor, index) {
                    $out += " <tr> <td>", $line = 132, $out += $escape(index + 1), $out += "</td> <td>", 
                    $line = 133, $out += $escape(visitor.name), $out += "</td> <td>", $line = 134, $out += $escape(visitor.mobileNumber), 
                    $out += "</td> <td>", $line = 135, 0 == visitor.idCardType && ($out += "身份证", $line = 135), 
                    $line = 135, 1 == visitor.idCardType && ($out += "护照", $line = 135), $line = 135, 
                    2 == visitor.idCardType && ($out += "其他", $line = 135), $out += "</td> <td>", $line = 136, 
                    $out += $escape(visitor.idCardNumber), $out += "</td> <td>", $line = 137, 1 == visitor.isContactUser && ($out += "是", 
                    $line = 137), $out += "</td> </tr> ", $line = 139;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 144;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 149, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <div class="form-group pull-right col-sm-4" style="text-align: right;margin-top: 40px;padding-right: 40px"> <label class="pos-rel" style="margin-left:20px"> <span class="lbl"><input type="checkbox" class="innerTransferIn-selectAll"/>全选</span> </label> </div> <div style="clear: both"></div> <br> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-createTripPlan btn-transferFinancial-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary btn-transferFinancial-checking"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row innerTransferChecking globalAdd">\r\n    <div class="col-xs-12 border">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="search-area editable editable-click" >\r\n                    <div class="form-group"> \r\n                        <label style="float: left;margin: 0px auto auto 15px" class="control-label pull-left"> 部门:{{searchParam.toBusinessGroupName}}</label> \r\n                        \r\n                        <label class="control-label col-sm-1" style="float:left;">账期:</label>\r\n                            <select class="col-sm-1" name="year" style="margin-left:20px"> \r\n                                {{each yearList as year index}}\r\n                                    <option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n                                {{/each}}\r\n                            </select>\r\n                            <select class="col-sm-1" name="month" style="margin-left:5px">\r\n                                <option value ="">全部</option>\r\n                                {{each monthList as month index}}\r\n                                    <option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n                                {{/each}}\r\n                            </select>\r\n                        <button class="marginLeft-30 btn-sm search-btn btn-checking-search" >\r\n                             <i class="ace-icon fa fa-search"></i>\r\n                                 搜索\r\n                        </button>\r\n                        \r\n                        <button type="button" class="btn btn-sm marginLeft-30 btn-primary btn-success btn-transferExport">\r\n                            <span>导出报表</span>\r\n                            <i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">总人数:{{allPerson}}<label>\r\n                <label class=" control-label " style="margin-left:30px;">总应付:{{needPayMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总已付:{{payedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总未付:{{unPayedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际未付:{{realUnPayedMoney}}</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n        <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n            <thead>\r\n            <tr>\r\n             <th>序号</th>\r\n\r\n             <th>线路产品</th>\r\n\r\n             <th>出游日期</th>\r\n\r\n             <th>联系人</th>\r\n\r\n             <th>人数</th>\r\n\r\n             <th>操作人</th>\r\n\r\n             <th>操作时间</th>\r\n\r\n             <th>应付</th>\r\n             \r\n             <th>明细</th>\r\n\r\n             <th>已付</th>\r\n\r\n             <th>未付</th>\r\n\r\n             <th>实际未付</th>\r\n\r\n             <th>说明</th>\r\n\r\n             <th>对账时间</th>\r\n\r\n             <th>对账人</th>\r\n\r\n             <th>对账</th>  \r\n\r\n            </tr>\r\n            </thead>   \r\n            <tbody class="T-checkList" data-right="1370005">\r\n            {{each financialInnerTransferOutList as checking index}}\r\n            <tr data-entity-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" data-entity-isComfirmAccount="{{checking.isComfirmAccount}}" data-entity-realUnPayedMoney="{{checking.realUnPayedMoney}}"  data-entity-remark="{{checking.checkRemark}}">                \r\n                <td>{{index+1}}</td>\r\n                <td>{{checking.lineProductName}}</td>\r\n                <td name="startTime">{{checking.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{checking.contactUserName}}</td>\r\n                <td>{{checking.adultCount}}大{{checking.childCount}}小<a href="#" class="seeGroup" style="margin-left:5px">展开</a></td>\r\n                <td>{{checking.operationUserName}}</td>\r\n                <td>{{checking.operationTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{checking.needPayMoney}}</td>\r\n                <td>\r\n                    大人:{{checking.adultPrice}}*{{checking.adultCount}}={{checking.adultPrice*checking.adultCount}}<br>\r\n                    小孩:{{checking.childPrice}}*{{checking.childCount}}={{checking.childPrice*checking.childCount}}<br>\r\n                    {{if checking.otherTransferFeeList.length>0}}\r\n                        {{each checking.otherTransferFeeList as detail}}\r\n                            {{detail.discribe}}：{{detail.count}}*{{detail.price}}={{detail.count*detail.price}}<br> \r\n                        {{/each}} \r\n                        {{else}}\r\n                        -\r\n                    {{/if}} \r\n                </td>\r\n                <td>{{checking.payedMoney}}</td>\r\n                <td>{{checking.unPayedMoney}}</td>\r\n                <td><input type="text" maxlength="9" name="realUnPayedMoney" value="{{checking.realUnPayedMoney}}" style="text-align:center"></td>\r\n                <td><input type="text" maxlength="1000"  name="checkRemark" value="{{checking.checkRemark}}" style="text-align:center"></td>\r\n                <td>{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{if checking.checkUserRealName == null || checking.checkUserRealName == ""}}-{{else}}{{checking.checkUserRealName}}{{/if}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" data-entity-checkStatus="{{checking.isComfirmAccount}}" class="ace innerTransferFinancial" \r\n                        {{if checking.isComfirmAccount == 1}}checked="checked"{{/if}}/>\r\n                        <span class="lbl"></span>\r\n                    </label>\r\n                </td>\r\n            </tr>\r\n            <tr class="hide">\r\n                <td colspan="17">\r\n                    <table class="table table-striped table-bordered table-hover">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>序号</th>\r\n                                    <th>姓名</th>\r\n                                    <th>联系电话</th>\r\n                                    <th>证件类型</th>\r\n                                    <th>证件号</th>\r\n                                    <th>是否联系人</th>\r\n                                </tr>\r\n                            </thead>  \r\n                            <tbody>\r\n                               {{each checking.memberList as visitor index}}\r\n                                <tr>\r\n                                    <td>{{index+1}}</td>\r\n                                    <td>{{visitor.name}}</td>\r\n                                    <td>{{visitor.mobileNumber}}</td>\r\n                                    <td>{{if visitor.idCardType == 0}}身份证{{/if}}{{if visitor.idCardType == 1}}护照{{/if}}{{if visitor.idCardType == 2}}其他{{/if}}</td>\r\n                                    <td>{{visitor.idCardNumber}}</td>\r\n                                    <td>{{if visitor.isContactUser == 1}}是{{/if}}</td>\r\n                                </tr>\r\n                              {{/each}} \r\n                            </tbody>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n         </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="form-group pull-right col-sm-4" style="text-align: right;margin-top: 40px;padding-right: 40px">\r\n                <label class="pos-rel" style="margin-left:20px">\r\n                    <span class="lbl"><input type="checkbox" class="innerTransferIn-selectAll"/>全选</span>\r\n                </label>\r\n       </div>\r\n       <div style="clear: both"></div>\r\n       <br>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary btn-createTripPlan btn-transferFinancial-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary btn-transferFinancial-checking">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                     确认对账\r\n                </button>\r\n            </div>\r\n        </form>\r\n\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});