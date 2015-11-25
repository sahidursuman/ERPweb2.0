/*TMODJS:{"debug":true,"version":252,"md5":"c5d65cce40d9e6724c5ec434dc1f6d24"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/innerTransferInChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, yearList = $data.yearList, monthList = ($data.year, 
            $data.index, $data.monthList), allPerson = ($data.month, $data.allPerson), needIncomeMoney = $data.needIncomeMoney, incomeMoney = $data.incomeMoney, unIncomeMoney = $data.unIncomeMoney, realUnIncomeMoney = $data.realUnIncomeMoney, backMoney = $data.backMoney, financialInnerTransferInList = $data.financialInnerTransferInList, recordSize = ($data.checking, 
            $data.detail, $data.$index, $data.visitor, $data.recordSize), $out = "";
            return $out += '<div class="row innerTransferChecking globalAdd"> <div class="col-xs-12 border"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" > <div class="form-group T-search"> <label style="float: left;margin: 0px auto auto 15px" class="control-label pull-left"> 部门:', 
            $line = 6, $out += $escape(searchParam.fromBusinessGroupName), $out += '</label> <input type="hidden" name="fromBusinessGroupId"/> <input type="hidden" name="fromBusinessGroupName"/> <label class="control-label col-sm-1" style="float:left;">账期:</label> <select class="col-sm-1" name="year" style="margin-left:20px"> ', 
            $line = 11, $each(yearList, function(year) {
                $out += ' <option value="', $line = 12, $out += $escape(year.value), $out += '" ', 
                $line = 12, searchParam.year == year.value && ($out += 'selected="selected"', $line = 12), 
                $out += ">", $line = 12, $out += $escape(year.value), $out += "</option> ", $line = 13;
            }), $out += ' </select> <select class="col-sm-1" name="month" style="margin-left:5px"> <option value ="">全部</option> ', 
            $line = 17, $each(monthList, function(month) {
                $out += ' <option value="', $line = 18, $out += $escape(month.value), $out += '" ', 
                $line = 18, searchParam.month == month.value && ($out += 'selected="selected"', 
                $line = 18), $out += ">", $line = 18, $out += $escape(month.value), $out += "月</option> ", 
                $line = 19;
            }), $out += ' </select> <button class="btn-sm search-btn T-checking-search marginLeft-30"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button type="button" class="btn btn-sm marginLeft-30 btn-primary btn-success T-transferExport"> <span>导出报表</span> <i class="ace-icon fa fa-arrow-right icon-on-right"></i> </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left" style="margin-left: 15px">总人数:', 
            $line = 34, $out += $escape(allPerson), $out += '<label> <label class=" control-label " style="margin-left:30px;">总应收:', 
            $line = 35, $out += $escape(needIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总已收:', 
            $line = 36, $out += $escape(incomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总未收:', 
            $line = 37, $out += $escape(unIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未收:', 
            $line = 38, $out += $escape(realUnIncomeMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总返款:', 
            $line = 39, $out += $escape(backMoney), $out += "</label> </div> </form> </div> <div class=\"clearfix\"></div> <table class=\"table table-striped table-bordered table-hover all margin-top\"> <thead> <tr> <th class='th-border'>序号</th> <th class='th-border'>线路产品</th> <th class='th-border'>出游日期</th> <th class='th-border'>联系人</th> <th class='th-border'>人数</th> <th class='th-border'>接收人</th> <th class='th-border'>接收时间</th> <th class='th-border'>账面应收</th> <th class='th-border'>明细</th> <th class='th-border'>已收</th> <th class='th-border'>未收</th> <th class='th-border'>未收对账</th> <th class='th-border'>返款</th> <th class='th-border'>实际未收</th> <th class='th-border'>说明</th> <th class='th-border'>对账时间</th> <th class='th-border'>对账人</th> <th class='th-border'>对账</th> </tr> </thead> <tbody class=\"T-checkList\" data-right=\"1360005\"> ", 
            $line = 68, $each(financialInnerTransferInList, function(checking, index) {
                $out += ' <tr data-entity-id="', $line = 69, $out += $escape(checking.id), $out += '" data-entity-createTime="', 
                $line = 69, $out += $escape(checking.createTime), $out += '" data-entity-isComfirmAccount="', 
                $line = 69, $out += $escape(checking.isComfirmAccount), $out += '" data-entity-UnIncomeMoney="', 
                $line = 69, $out += $escape(checking.checkUnIncomeMoney), $out += '" data-entity-backMoney="', 
                $line = 69, $out += $escape(checking.backMoney), $out += '" data-entity-remark="', 
                $line = 69, $out += $escape(checking.checkRemark), $out += '"> <td>', $line = 70, 
                $out += $escape(index + 1), $out += "</td> <td>", $line = 71, $out += $escape(checking.lineProductName), 
                $out += '</td> <td name="startTime">', $line = 72, $out += $escape($helpers.dateFormat(checking.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 73, $out += $escape(checking.contactUserName), $out += "</td> <td>", 
                $line = 74, $out += $escape(checking.adultCount), $out += "大", $line = 74, $out += $escape(checking.childCount), 
                $out += '小<a href="#" class="T-seeGroup" style="margin-left:5px">展开</a></td> <td>', 
                $line = 75, $out += $escape(checking.receiveUserName), $out += "</td> <td>", $line = 76, 
                $out += $escape($helpers.dateFormat(checking.receiveTime, "yyyy-MM-dd")), $out += "</td> <td>", 
                $line = 77, $out += $escape(checking.needIncomeMoney), $out += "</td> <td> 大人:", 
                $line = 79, $out += $escape(checking.adultPrice), $out += "*", $line = 79, $out += $escape(checking.adultCount), 
                $out += "=", $line = 79, $out += $escape(checking.adultPrice * checking.adultCount), 
                $out += "<br> 小孩:", $line = 80, $out += $escape(checking.childPrice), $out += "*", 
                $line = 80, $out += $escape(checking.childCount), $out += "=", $line = 80, $out += $escape(checking.childPrice * checking.childCount), 
                $out += "<br> ", $line = 81, checking.otherTransferFeeList.length > 0 ? ($out += " ", 
                $line = 82, $each(checking.otherTransferFeeList, function(detail) {
                    $out += " ", $line = 83, $out += $escape(detail.discribe), $out += "：", $line = 83, 
                    $out += $escape(detail.count), $out += "*", $line = 83, $out += $escape(detail.price), 
                    $out += "=", $line = 83, $out += $escape(detail.count * detail.price), $out += "<br> ", 
                    $line = 84;
                }), $out += " ", $line = 85) : ($out += " - ", $line = 87), $out += " </td> <td>", 
                $line = 89, $out += $escape(checking.incomeMoney), $out += "</td> <td>", $line = 90, 
                $out += $escape(checking.unIncomeMoney), $out += '</td> <td><input type="text" maxlength="9" name="UnIncomeMoney" value="', 
                $line = 91, $out += $escape(checking.checkUnIncomeMoney), $out += '" style="text-align:center"></td> <td><input type="text" maxlength="9" name="backMoney" value="', 
                $line = 92, $out += $escape(checking.backMoney), $out += '" style="text-align:center"></td> <td><input type="text" maxlength="9" name="realUnIncomeMoney" value="', 
                $line = 93, $out += $escape(checking.checkUnIncomeMoney - checking.backMoney), $out += '" style="text-align:center" readonly="readonly"></td> <td><input type="text" maxlength="1000" name="checkRemark" value="', 
                $line = 94, $out += $escape(checking.checkRemark), $out += '" style="text-align:center"></td> <td>', 
                $line = 95, null == checking.checkTime || "" == checking.checkTime ? ($out += "-", 
                $line = 95) : ($line = 95, $out += $escape($helpers.dateFormat(checking.checkTime, "yyyy-MM-dd")), 
                $line = 95), $out += "</td> <td>", $line = 96, null == checking.checkUserRealName || "" == checking.checkUserRealName ? ($out += "-", 
                $line = 96) : ($line = 96, $out += $escape(checking.checkUserRealName), $line = 96), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" data-entity-checkStatus="', 
                $line = 99, $out += $escape(checking.isComfirmAccount), $out += '" class="ace innerTransferFinancial" ', 
                $line = 100, 1 == checking.isComfirmAccount && ($out += 'checked="checked"', $line = 100), 
                $out += '/> <span class="lbl"></span> </label> </td> </tr> <tr class="hide"> <td colspan="17"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">姓名</th> <th class="th-border">联系电话</th> <th class="th-border">证件类型</th> <th class="th-border">证件号</th> <th class="th-border">是否联系人</th> </tr> </thead> <tbody> ', 
                $line = 119, $each(checking.memberList, function(visitor, index) {
                    $out += " <tr> <td>", $line = 121, $out += $escape(index + 1), $out += "</td> <td>", 
                    $line = 122, $out += $escape(visitor.name), $out += "</td> <td>", $line = 123, $out += $escape(visitor.mobileNumber), 
                    $out += "</td> <td>", $line = 124, 0 == visitor.idCardType && ($out += "身份证", $line = 124), 
                    $line = 124, 1 == visitor.idCardType && ($out += "护照", $line = 124), $line = 124, 
                    2 == visitor.idCardType && ($out += "其他", $line = 124), $out += "</td> <td>", $line = 125, 
                    $out += $escape(visitor.idCardNumber), $out += "</td> <td>", $line = 126, 1 == visitor.isContactUser && ($out += "是", 
                    $line = 126), $out += "</td> </tr> ", $line = 128;
                }), $out += " </tbody> </table> </td> </tr> ", $line = 133;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 138, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <div class="form-group text-right"> <label class="control-label pull-right"/> <input type="checkbox" class="ace pull-right T-selectAll"> <span class="lbl"></span> 全选 </label> </div> <div class="clearfix"></div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-createTripPlan T-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-checking"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row innerTransferChecking globalAdd">\r\n    <div class="col-xs-12 border">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n                <div class="search-area editable editable-click" >\r\n                    <div class="form-group T-search"> \r\n                        <label style="float: left;margin: 0px auto auto 15px" class="control-label pull-left"> 部门:{{searchParam.fromBusinessGroupName}}</label>\r\n                        <input type="hidden" name="fromBusinessGroupId"/>\r\n                        <input type="hidden" name="fromBusinessGroupName"/>\r\n                        <label class="control-label col-sm-1" style="float:left;">账期:</label>\r\n                            <select class="col-sm-1" name="year" style="margin-left:20px">\r\n                                {{each yearList as year index}}\r\n                                    <option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n                                {{/each}}\r\n                            </select>\r\n                            <select class="col-sm-1" name="month" style="margin-left:5px">\r\n                                <option value ="">全部</option>\r\n                                {{each monthList as month index}}\r\n                                    <option value="{{month.value}}" {{if searchParam.month == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n                                {{/each}}\r\n                            </select>\r\n                        <button class="btn-sm search-btn T-checking-search marginLeft-30">\r\n                             <i class="ace-icon fa fa-search"></i>\r\n                                 搜索\r\n                        </button>    \r\n                        <button type="button" class="btn btn-sm marginLeft-30 btn-primary btn-success T-transferExport">\r\n                            <span>导出报表</span>\r\n                            <i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">总人数:{{allPerson}}<label>\r\n                <label class=" control-label " style="margin-left:30px;">总应收:{{needIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总已收:{{incomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总未收:{{unIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际未收:{{realUnIncomeMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总返款:{{backMoney}}</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n        <table class="table table-striped table-bordered table-hover all margin-top">\r\n            <thead>\r\n            <tr>\r\n                 <th class=\'th-border\'>序号</th>\r\n                 <th class=\'th-border\'>线路产品</th>\r\n                 <th class=\'th-border\'>出游日期</th>\r\n                 <th class=\'th-border\'>联系人</th>\r\n                 <th class=\'th-border\'>人数</th>\r\n                 <th class=\'th-border\'>接收人</th>\r\n                 <th class=\'th-border\'>接收时间</th>\r\n                 <th class=\'th-border\'>账面应收</th>\r\n                 <th class=\'th-border\'>明细</th>\r\n                 <th class=\'th-border\'>已收</th>\r\n                 <th class=\'th-border\'>未收</th>\r\n                 <th class=\'th-border\'>未收对账</th>\r\n                 <th class=\'th-border\'>返款</th>\r\n                 <th class=\'th-border\'>实际未收</th>\r\n                 <th class=\'th-border\'>说明</th>\r\n                 <th class=\'th-border\'>对账时间</th>\r\n                 <th class=\'th-border\'>对账人</th>\r\n                 <th class=\'th-border\'>对账</th>  \r\n            </tr>\r\n            </thead>   \r\n            <tbody class="T-checkList" data-right="1360005">\r\n            {{each financialInnerTransferInList as checking index}}\r\n            <tr data-entity-id="{{checking.id}}" data-entity-createTime="{{checking.createTime}}" data-entity-isComfirmAccount="{{checking.isComfirmAccount}}" data-entity-UnIncomeMoney="{{checking.checkUnIncomeMoney}}" data-entity-backMoney="{{checking.backMoney}}" data-entity-remark="{{checking.checkRemark}}">                \r\n                <td>{{index+1}}</td>\r\n                <td>{{checking.lineProductName}}</td>\r\n                <td name="startTime">{{checking.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{checking.contactUserName}}</td>\r\n                <td>{{checking.adultCount}}大{{checking.childCount}}小<a href="#" class="T-seeGroup" style="margin-left:5px">展开</a></td>\r\n                <td>{{checking.receiveUserName}}</td>\r\n                <td>{{checking.receiveTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                <td>{{checking.needIncomeMoney}}</td>\r\n                <td>\r\n                    大人:{{checking.adultPrice}}*{{checking.adultCount}}={{checking.adultPrice*checking.adultCount}}<br>\r\n                    小孩:{{checking.childPrice}}*{{checking.childCount}}={{checking.childPrice*checking.childCount}}<br>\r\n                    {{if checking.otherTransferFeeList.length>0}}\r\n                        {{each checking.otherTransferFeeList as detail}}\r\n                            {{detail.discribe}}：{{detail.count}}*{{detail.price}}={{detail.count*detail.price}}<br> \r\n                        {{/each}} \r\n                        {{else}}\r\n                        -\r\n                    {{/if}} \r\n                </td>\r\n                <td>{{checking.incomeMoney}}</td>\r\n                <td>{{checking.unIncomeMoney}}</td>\r\n                <td><input type="text" maxlength="9" name="UnIncomeMoney" value="{{checking.checkUnIncomeMoney}}" style="text-align:center"></td>\r\n                <td><input type="text" maxlength="9" name="backMoney" value="{{checking.backMoney}}" style="text-align:center"></td>\r\n                <td><input type="text" maxlength="9" name="realUnIncomeMoney" value="{{checking.checkUnIncomeMoney-checking.backMoney}}" style="text-align:center" readonly="readonly"></td>\r\n                <td><input type="text" maxlength="1000"  name="checkRemark" value="{{checking.checkRemark}}" style="text-align:center"></td>\r\n                <td>{{if checking.checkTime == null || checking.checkTime == ""}}-{{else}}{{checking.checkTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{if checking.checkUserRealName == null || checking.checkUserRealName == ""}}-{{else}}{{checking.checkUserRealName}}{{/if}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" data-entity-checkStatus="{{checking.isComfirmAccount}}" class="ace innerTransferFinancial" \r\n                        {{if checking.isComfirmAccount == 1}}checked="checked"{{/if}}/>\r\n                        <span class="lbl"></span>\r\n                    </label>\r\n                </td>\r\n            </tr>\r\n            <tr class="hide">\r\n                <td colspan="17">\r\n                    <table class="table table-striped table-bordered table-hover">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th class="th-border">序号</th>\r\n                                    <th class="th-border">姓名</th>\r\n                                    <th class="th-border">联系电话</th>\r\n                                    <th class="th-border">证件类型</th>\r\n                                    <th class="th-border">证件号</th>\r\n                                    <th class="th-border">是否联系人</th>\r\n                                </tr>\r\n                            </thead>  \r\n                            <tbody>\r\n                               {{each checking.memberList as visitor index}}\r\n                                <tr>\r\n                                    <td>{{index+1}}</td>\r\n                                    <td>{{visitor.name}}</td>\r\n                                    <td>{{visitor.mobileNumber}}</td>\r\n                                    <td>{{if visitor.idCardType == 0}}身份证{{/if}}{{if visitor.idCardType == 1}}护照{{/if}}{{if visitor.idCardType == 2}}其他{{/if}}</td>\r\n                                    <td>{{visitor.idCardNumber}}</td>\r\n                                    <td>{{if visitor.isContactUser == 1}}是{{/if}}</td>\r\n                                </tr>\r\n                              {{/each}} \r\n                            </tbody>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n         </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class="form-group text-right">\r\n            <label class="control-label pull-right"/>\r\n                <input type="checkbox" class="ace pull-right T-selectAll">\r\n                <span class="lbl"></span>  \r\n                全选\r\n            </label>\r\n        </div>\r\n        <div class="clearfix"></div>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group" style="text-align: center;">\r\n                <button class="btn btn-xs btn-primary btn-createTripPlan T-close">\r\n                    <i class="ace-icon fa fa-times-circle"></i>\r\n                    关闭\r\n                </button>\r\n                <button class="btn btn-xs btn-primary T-checking">\r\n                    <i class="ace-icon fa fa-check-circle"></i>\r\n                     确认对账\r\n                </button> \r\n            </div>\r\n        </form>\r\n\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});