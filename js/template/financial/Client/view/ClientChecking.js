/*TMODJS:{"debug":true,"version":22,"md5":"dedc734959a58982569c719ac1fa1831"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/ClientChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, totalList = $data.totalList, customerAccountList = $data.customerAccountList, $each = $utils.$each, message = ($data.rs, 
            $data.index, $data.message), $out = "";
            return $out += '<div class="row T-search-area border" style="padding: 0 20px;"> <form class="form-inline editable-click" role="form" onsubmit="return false" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">客户：</label> <label class="control-label">百事通桐梓林店</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">账期：</label> <input type="text" class="form-control date-picker T-search-start-date" value="', 
            $line = 9, $out += $escape(searchParam.startTime), $out += '"> <label class="control-label">&nbsp;至&nbsp;</label> <input type="text" class="form-control date-picker T-search-end-date" value="', 
            $line = 11, $out += $escape(searchParam.endTime), $out += '"> </div> <div class="form-group marginLeft-30"> <label class="control-label">线路名称：</label> <input type="text" class="form-control T-search-line" value="', 
            $line = 15, $out += $escape(searchParam.lineProductName), $out += '"> </div> <div class="form-group marginLeft-30"> <label class="control-label">录入人：</label> <input type="text" class="form-control T-search-enter" value="', 
            $line = 19, $out += $escape(searchParam.creatorName), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <div class="form-inline" style="padding-top: 10px;"> <div class="form-group"> <label class="control-label">人数合计：</label> <label class="control-label">', 
            $line = 30, $out += $escape(totalList.sumCount), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">合同金额合计：</label> <label class="control-label">', 
            $line = 34, $out += $escape(totalList.sumContractMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">已收金额合计：</label> <label class="control-label">', 
            $line = 38, $out += $escape(totalList.sumReceiveMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">返款金额合计：</label> <label class="control-label">', 
            $line = 42, $out += $escape(totalList.sumBackMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">结算金额合计：</label> <label class="control-label">', 
            $line = 46, $out += $escape(totalList.sumSettlementMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未收金额合计：</label> <label class="control-label">', 
            $line = 50, $out += $escape(totalList.sumUnReceivedMoney), $out += '</label> </div> </div> </div> <div class="row" style="margin-top: 30px"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr> <th style="min-width: 45px;">序号</th> <th>组团单号</th> <th style="min-width: 125px;">线路产品</th> <th style="min-width: 125px;">出游日期（账期）</th> <th>联系人</th> <th style="min-width: 70px;">人数</th> <th style="min-width: 70px;">录入人</th> <th>录入时间</th> <th style="min-width: 70px;">合同金额</th> <th>明细</th> <th style="min-width: 70px;">已收金额</th> <th style="min-width: 70px;">返款金额</th> <th style="min-width: 70px;">结算金额</th> <th style="min-width: 70px;">未收金额</th> <th>备注</th> <th style="min-width: 85px;">对账时间</th> <th style="min-width: 60px;">对账人</th> <th style="min-width: 105px;">对账</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 79, null != customerAccountList ? ($out += " ", $line = 80, $each(customerAccountList, function(rs, index) {
                $out += ' <tr data-id="', $line = 81, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 82, $out += $escape(index + 1), $out += "</td> <td>", $line = 83, $out += $escape(rs.id), 
                $out += "</td> <td>", $line = 84, $out += $escape(rs.lineProductName), $out += "</td> <td>", 
                $line = 85, $out += $escape(rs.startTime), $out += "</td> <td>", $line = 86, $out += $escape(rs.contactName), 
                $out += "</td> <td>", $line = 87, $out += $escape(rs.adultCount), $out += "大", $line = 87, 
                $out += $escape(rs.adultCount), $out += '小<a class="cursor T-action T-unfold">展开</a></td> <td>', 
                $line = 88, $out += $escape(rs.creatorName), $out += "</td> <td>", $line = 89, $out += $escape(rs.creatorTime), 
                $out += "</td> <td>", $line = 90, $out += $escape(rs.contractMoney), $out += "</td> <td>", 
                $line = 91, $out += $escape(rs.detail), $out += '</td> <td><a class="cursor T-action T-receive">社收', 
                $line = 92, $out += $escape(rs.travleReciveMoney), $out += "，导游现收", $line = 92, 
                $out += $escape(rs.guideReciveMoney), $out += '</a></td> <td><input type="text" class="col-sm-12"></td> <td>', 
                $line = 94, $out += $escape(rs.settlementMoney), $out += "</td> <td>", $line = 95, 
                $out += $escape(rs.unReceivedMoney), $out += '</td> <td><input type="text" class="col-sm-12"></td> <td>', 
                $line = 97, $out += $escape(rs.checkTime), $out += "</td> <td>", $line = 98, $out += $escape(rs.checkUserName), 
                $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace" checked="checked" /> <span class="lbl">对账</span> </label> <label class="cursor R-right" data-right="1290002"> <a class="R-right" data-right="1290003"> |</a></label> <a class="cursor T-action T-view R-right" data-right="1290003">查看</a> </td> </tr> <tr class="hide T-group-list"> <td colspan="18"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr> <td>序号</td> <td>姓名</td> <td>联系电话</td> <td>证件类型</td> <td>证件号</td> <td>联系人</td> </tr> </thead> <tbody> <tr> <td>序号</td> <td>姓名</td> <td>联系电话</td> <td>证件类型</td> <td>证件号</td> <td>联系人</td> </tr> </tbody> </table> </td> </tr> ', 
                $line = 134;
            }), $out += " ", $line = 135) : ($out += ' <tr> <td colspan="18">', $line = 137, 
            $out += $escape(message), $out += "</td> </tr> ", $line = 139), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 144, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> <div class="row"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-btn-save" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area border" style="padding: 0 20px;">\r\n    <form class="form-inline editable-click" role="form" onsubmit="return false" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label class="control-label">客户：</label>\r\n            <label class="control-label">百事通桐梓林店</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">账期：</label>\r\n            <input type="text" class="form-control date-picker T-search-start-date" value="{{searchParam.startTime}}">\r\n            <label class="control-label">&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control date-picker T-search-end-date" value="{{searchParam.endTime}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">线路名称：</label>\r\n            <input type="text" class="form-control T-search-line" value="{{searchParam.lineProductName}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">录入人：</label>\r\n            <input type="text" class="form-control T-search-enter" value="{{searchParam.creatorName}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </form>\r\n    <div class="form-inline" style="padding-top: 10px;">\r\n        <div class="form-group">\r\n            <label class="control-label">人数合计：</label>\r\n            <label class="control-label">{{totalList.sumCount}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">合同金额合计：</label>\r\n            <label class="control-label">{{totalList.sumContractMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">已收金额合计：</label>\r\n            <label class="control-label">{{totalList.sumReceiveMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">返款金额合计：</label>\r\n            <label class="control-label">{{totalList.sumBackMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label">{{totalList.sumSettlementMoney}}</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">未收金额合计：</label>\r\n            <label class="control-label">{{totalList.sumUnReceivedMoney}}</label>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row" style="margin-top: 30px">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr>\r\n                <th style="min-width: 45px;">序号</th>\r\n                <th>组团单号</th>\r\n                <th style="min-width: 125px;">线路产品</th>\r\n                <th style="min-width: 125px;">出游日期（账期）</th>\r\n                <th>联系人</th>\r\n                <th style="min-width: 70px;">人数</th>\r\n                <th style="min-width: 70px;">录入人</th>\r\n                <th>录入时间</th>\r\n                <th style="min-width: 70px;">合同金额</th>\r\n                <th>明细</th>\r\n                <th style="min-width: 70px;">已收金额</th>\r\n                <th style="min-width: 70px;">返款金额</th>\r\n                <th style="min-width: 70px;">结算金额</th>\r\n                <th style="min-width: 70px;">未收金额</th>\r\n                <th>备注</th>\r\n                <th style="min-width: 85px;">对账时间</th>\r\n                <th style="min-width: 60px;">对账人</th>\r\n                <th style="min-width: 105px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n            {{if customerAccountList != null}}\r\n        	{{each customerAccountList as rs index}}\r\n            <tr data-id="{{rs.id}}">\r\n                <td>{{index + 1}}</td>\r\n                <td>{{rs.id}}</td>\r\n                <td>{{rs.lineProductName}}</td>\r\n                <td>{{rs.startTime}}</td>\r\n                <td>{{rs.contactName}}</td>\r\n                <td>{{rs.adultCount}}大{{rs.adultCount}}小<a class="cursor T-action T-unfold">展开</a></td>\r\n                <td>{{rs.creatorName}}</td>\r\n                <td>{{rs.creatorTime}}</td>\r\n                <td>{{rs.contractMoney}}</td>\r\n                <td>{{rs.detail}}</td>\r\n                <td><a class="cursor T-action T-receive">社收{{rs.travleReciveMoney}}，导游现收{{rs.guideReciveMoney}}</a></td>\r\n                <td><input type="text" class="col-sm-12"></td>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td>{{rs.unReceivedMoney}}</td>\r\n                <td><input type="text" class="col-sm-12"></td>\r\n                <td>{{rs.checkTime}}</td>\r\n                <td>{{rs.checkUserName}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" class="ace" checked="checked" /> \r\n                        <span class="lbl">对账</span>\r\n                    </label>\r\n                    <label class="cursor R-right" data-right="1290002"> <a class="R-right" data-right="1290003"> |</a></label>\r\n                    <a class="cursor T-action T-view R-right" data-right="1290003">查看</a>\r\n                </td>\r\n            </tr>\r\n            <tr class="hide T-group-list">\r\n                <td colspan="18">\r\n                    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                        <thead>\r\n                            <tr>\r\n                                <td>序号</td>\r\n                                <td>姓名</td>\r\n                                <td>联系电话</td>\r\n                                <td>证件类型</td>\r\n                                <td>证件号</td>\r\n                                <td>联系人</td>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr>\r\n                                <td>序号</td>\r\n                                <td>姓名</td>\r\n                                <td>联系电话</td>\r\n                                <td>证件类型</td>\r\n                                <td>证件号</td>\r\n                                <td>联系人</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n            {{else}}\r\n            <tr>\r\n                <td colspan="18">{{message}}</td>\r\n            </tr>\r\n            {{/if}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="row">\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-btn-save" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});