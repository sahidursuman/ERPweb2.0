/*TMODJS:{"debug":true,"version":295,"md5":"209237096b755d35d54d1fef6d3838fe"}*/
define(function(require) {
    return require("../../../template")("financial/insure/view/insureChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, insuranceName = $data.insuranceName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, $each = $utils.$each, financialInsuranceList = $data.financialInsuranceList, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.insuranceId), 
            $out += '" data-name="', $line = 1, $out += $escape(insuranceName), $out += '"> <div class="col-xs-12" style="padding-bottom: 0px"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label>保险公司：', 
            $line = 6, $out += $escape(insuranceName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 8, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <label class="marginLeft-30">团信息：</label> <input name="accountInfo" placeholder="团信息" type="text" value="', 
            $line = 13, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <button class=" btn-sm T-search search-btn marginLeft-30"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label class="control-label pull-left">账面应付合计：', 
            $line = 23, $out += $escape(sumNeedPayMoney), $out += '</label> <label class="control-label marginLeft-30">已付金额合计：', 
            $line = 24, $out += $escape(sumPayedMoney), $out += '</label> <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney">', 
            $line = 25, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney">', 
            $line = 26, $out += $escape(sumUnPayedMoney), $out += '</span></label> </div> </form> </div> <input type="hidden" value="', 
            $line = 30, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 31, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">团信息</th> <th class="th-border">消费日期</th> <th class="th-border">险种</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1270005"> ', 
            $line = 55, $each(financialInsuranceList, function(rs, index) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 56, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 56, $out += $escape(rs.isConfirmAccount), $out += '"> <td>', 
                $line = 57, $out += $escape(index + 1), $out += "</td> <td>", $line = 58, $out += $escape(rs.tripNumber), 
                $line = 58, $out += $escape("，"), $line = 58, $out += $escape(rs.lineProductName), 
                $line = 58, $out += $escape("，"), $line = 58, $out += $escape(rs.guideName), $out += "</td> <td>", 
                $line = 59, null == rs.accountTime || "" == rs.accountTime ? ($out += " - ", $line = 61) : ($out += " ", 
                $line = 62, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $out += " ", $line = 63), $out += " </td> <td>", $line = 65, null == rs.type || "" == rs.type ? ($out += "-", 
                $line = 65) : ($line = 65, $out += $escape(rs.type), $line = 65), $out += "</td> <td>", 
                $line = 66, $out += $escape(rs.price), $out += "</td> <td>", $line = 67, $out += $escape(rs.memberCount), 
                $out += "</td> <td>", $line = 68, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 69, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail" data-money="', 
                $line = 70, $out += $escape(rs.payedMoney), $out += '">', $line = 70, $out += $escape("社付："), 
                $line = 70, $out += $escape(rs.payedMoney), $out += "</a></td> <td>", $line = 71, 
                null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-insuranceImg" url="', 
                $line = 71, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 71) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 71), $out += '</td> <td><input type="text" maxlength="9" name="settlementMoney" value="', 
                $line = 72, $out += $escape(rs.settlementMoney), $out += '" class="money"></td> <td name="unPayedMoney">', 
                $line = 73, $out += $escape(rs.unPayedMoney), $out += '</td> <td><input type="text" maxlength="1000" name="checkRemark" style="text-align:center" value="', 
                $line = 74, $out += $escape(rs.checkRemark), $out += '" /></td> <td>', $line = 75, 
                null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 75) : ($line = 75, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 75), 
                $out += "</td> <td>", $line = 76, null == rs.checkUserRealName || "" == rs.checkUserRealName ? ($out += "-", 
                $line = 76) : ($line = 76, $out += $escape(rs.checkUserRealName), $line = 76), $out += '</td> <td><label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 78, 1 == rs.isConfirmAccount && ($out += 'checked="checked"', $line = 78), 
                $out += ' /> <span class="lbl"></span> </label> ', $line = 81, 1 == rs.isConfirmAccount && ($out += '<a class="T-option T-needPayDetail">查看</a>', 
                $line = 81), $out += " </td> </tr> ", $line = 84;
            }), $out += ' </tbody> </table> <div class="form-group text-right"> <label class="control-label pull-right" /> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span> 全选 </label> </div> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 96, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-check"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.insuranceId}}" data-name="{{insuranceName}}">\r\n    <div class="col-xs-12" style="padding-bottom: 0px">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area">\r\n                <div class="form-group">\r\n                    <label>保险公司：{{insuranceName}}</label>\r\n                    <label class="marginLeft-30">账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />   \r\n\r\n                    <label class="marginLeft-30">团信息：</label>\r\n                    <input name="accountInfo" placeholder="团信息" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n\r\n                    <button class=" btn-sm T-search search-btn marginLeft-30">\r\n                        <i class="ace-icon fa fa-search"></i> 搜索\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label class="control-label pull-left">账面应付合计：{{sumNeedPayMoney}}</label>\r\n                <label class="control-label marginLeft-30">已付金额合计：{{sumPayedMoney}}</label>\r\n                <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney">{{sumSettlementMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney">{{sumUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover all">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">序号</th>\r\n                <th class="th-border">团信息</th>\r\n                <th class="th-border">消费日期</th>\r\n                <th class="th-border">险种</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList" data-right="1270005">\r\n            {{each financialInsuranceList as rs index}}  \r\n            <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}">\r\n                <td>{{index+1}}</td>\r\n                <td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n                <td>{{if rs.accountTime == null || rs.accountTime == ""}}\r\n                        -\r\n                    {{else}}\r\n                        {{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}\r\n                    {{/if}}\r\n                </td>\r\n                <td>{{if rs.type == null || rs.type == ""}}-{{else}}{{rs.type}}{{/if}}</td>\r\n                <td>{{rs.price}}</td>\r\n                <td>{{rs.memberCount}}</td>\r\n                <td>{{rs.reduceMoney}}</td>\r\n                <td>{{rs.needPayMoney}}</td>\r\n                <td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney}}">{{"社付："}}{{rs.payedMoney}}</a></td> \r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-insuranceImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td><input type="text" maxlength="9" name="settlementMoney" value="{{rs.settlementMoney}}" class="money"></td>\r\n                <td name="unPayedMoney">{{rs.unPayedMoney}}</td>\r\n                <td><input type="text" maxlength="1000" name="checkRemark" style="text-align:center" value="{{rs.checkRemark}}" /></td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserRealName == null || rs.checkUserRealName == ""}}-{{else}}{{rs.checkUserRealName}}{{/if}}</td>\r\n                <td><label class="pos-rel">\r\n                        <input type="checkbox" class="ace T-checkbox" {{if rs.isConfirmAccount==1 }}checked="checked"{{/if}} />\r\n                        <span class="lbl"></span>\r\n                    </label>\r\n                    {{if rs.isConfirmAccount == 1}}<a class="T-option T-needPayDetail">查看</a>{{/if}}\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="form-group text-right">\r\n        <label class="control-label pull-right" />\r\n            <input type="checkbox" class="ace pull-right T-checkAll">\r\n            <span class="lbl"></span> 全选\r\n        </label>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-check">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});