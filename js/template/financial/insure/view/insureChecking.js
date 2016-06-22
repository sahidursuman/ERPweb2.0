/*TMODJS:{"debug":true,"version":419,"md5":"7f251a07673aa3969010cb02e8bc3ccf"}*/
define(function(require) {
    return require("../../../template")("financial/insure/view/insureChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, insuranceName = $data.insuranceName, insuranceId = $data.insuranceId, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, $each = $utils.$each, financialInsuranceList = $data.financialInsuranceList, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.insuranceId), 
            $out += '" data-name="', $line = 1, $out += $escape(insuranceName), $out += '"> <div class="col-xs-12" style="padding-bottom: 0px"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label>保险公司：</label> <input type="text" class="T-insuranceName mar-r-10" value="', 
            $line = 7, $out += $escape(insuranceName), $out += '"> <input type="hidden" class="T-insuranceId" value="', 
            $line = 8, $out += $escape(insuranceId), $out += '"> <label>账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker mar-r-10" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 12, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <label>团信息：</label> <input name="accountInfo" class="mar-r-10" placeholder="团信息" type="text" value="', 
            $line = 14, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <label>对账状态：</label> <div class="btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 17, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 19, searchParam.isConfirmAccount && "" !== searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 23) : ($out += " 未对账 ", $line = 25) : ($out += " 全部 ", $line = 21), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <button class=" btn-sm T-search search-btn mar-r-10"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <input type="hidden" name="accountStatus" value="', 
            $line = 38, $out += $escape(searchParam.accountStatus), $out += '"> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">', 
            $line = 45, $out += $escape(sumNeedPayMoney), $out += '</span></label> <label class="control-label marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 46, $out += $escape(sumPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money" >', 
            $line = 47, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">', 
            $line = 48, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">', 
            $line = 49, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </form> </div> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all hct_align_middle"> <thead> <tr class="T-tr-fixed bg-blur"> <th>团信息</th> <th>消费日期(账期)</th> <th>险种</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>账面应付</th> <th>预付款申请</th> <th>已付金额</th> <th>单据</th> <th>结算金额</th> <th>未付金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="width:108px">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1270005"> ', 
            $line = 76, $each(financialInsuranceList, function(rs) {
                $out += ' <tr class="T-checkTr ', $line = 77, rs.change && ($out += "success", $line = 77), 
                $out += '" data-id="', $line = 77, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 77, $out += $escape(rs.isConfirmAccount), $out += '" ', $line = 77, rs.change && ($out += 'data-change="true"', 
                $line = 77), $out += "> <td>", $line = 78, null != rs.tripNumber && "" != rs.tripNumber && ($line = 78, 
                $out += $escape(rs.tripNumber), $out += " ", $line = 79, (rs.lineProductName || rs.guideName) && ($out += "，", 
                $line = 79), $out += " ", $line = 80), $out += " ", $line = 81, null != rs.lineProductName && "" != rs.lineProductName && ($line = 81, 
                $out += $escape(rs.lineProductName), $out += " ", $line = 82, rs.guideName && ($out += "，", 
                $line = 82), $out += " ", $line = 83), $out += " ", $line = 84, null != rs.guideName && "" != rs.guideName && ($line = 84, 
                $out += $escape(rs.guideName), $line = 84), $out += " </td> <td>", $line = 86, null == rs.accountTime || "" == rs.accountTime ? ($out += " - ", 
                $line = 86) : ($out += " ", $line = 86, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $line = 86, rs.endTime && ($out += " ~ ", $line = 86, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), 
                $line = 86), $line = 86), $out += " </td> <td>", $line = 88, null == rs.type || "" == rs.type ? ($out += "-", 
                $line = 88) : ($line = 88, $out += $escape(rs.type), $line = 88), $out += '</td> <td class="F-float F-money">', 
                $line = 89, $out += $escape(rs.price), $out += '</td> <td class="F-float F-count">', 
                $line = 90, $out += $escape(rs.memberCount), $out += '</td> <td class="F-float F-money">', 
                $line = 91, $out += $escape(rs.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 92, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="', $line = 93, 
                rs.payRecoredId ? ($out += "T-option T-payRequest", $line = 93) : ($out += "black", 
                $line = 93), $out += '" data-preid="', $line = 93, $out += $escape(rs.payRecoredId), 
                $out += '"><span class="F-float F-money">', $line = 93, $out += $escape(rs.prePayMoney), 
                $out += '</span></a></td> <td class="align-left"><a class="T-option T-payedDetail in-block" data-money="', 
                $line = 94, $out += $escape(rs.payedMoney), $out += '">', $line = 94, $out += $escape("社付："), 
                $out += '<span class="F-float F-money">', $line = 94, $out += $escape(rs.payedMoney), 
                $out += "</span></a></td> <td>", $line = 95, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-insuranceImg" url="', 
                $line = 95, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 95) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 95), $out += '</td> <td> <input type="text" class="col-sm-12 F-float F-money" maxlength="9" name="settlementMoney" value="', 
                $line = 97, $out += $escape(rs.settlementMoney), $out += '" class="money"> </td> <td class="F-float F-money" name="unPayedMoney">', 
                $line = 99, $out += $escape(rs.unPayedMoney), $out += '</td> <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">', 
                $line = 100, $out += $escape(rs.checkRemark), $out += "</textarea></td> <td>", $line = 101, 
                null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 101) : ($line = 101, 
                $out += $escape($helpers.dateTimeFormat(rs.checkTime)), $line = 101), $out += "</td> <td>", 
                $line = 102, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 102) : ($line = 102, $out += $escape(rs.checkUserName), $line = 102), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 105, (rs.change && 1 == rs.isChecked || !rs.change && rs.isConfirmAccount) && ($out += 'checked="checked" ', 
                $line = 105), $out += ' /> <span class="lbl"></span>对账 <a class="cursor "> |</a> </label> <a class="T-option T-needPayDetail cursor">查看</a> </td> </tr> ', 
                $line = 112;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 118, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-5"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> <div class="form-group text-right"> <label class="control-label pull-right" /> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span> 全选 </label> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.insuranceId}}" data-name="{{insuranceName}}">\r\n    <div class="col-xs-12" style="padding-bottom: 0px">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area">\r\n                <div class="form-group">\r\n                    <label>保险公司：</label>\r\n                    <input type="text" class="T-insuranceName mar-r-10" value="{{insuranceName}}">\r\n                    <input type="hidden" class="T-insuranceId" value="{{insuranceId}}">\r\n                    <label>账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker mar-r-10" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />\r\n                    <label>团信息：</label>\r\n                    <input name="accountInfo" class="mar-r-10" placeholder="团信息" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n                    <label>对账状态：</label>\r\n                    <div class="btn-group T-check-status mar-r-10">\r\n                        <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                            <span>\r\n                                {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount === ""}}\r\n                                    全部\r\n                                {{else if searchParam.isConfirmAccount == 1}}\r\n                                    已对账\r\n                                {{else}}\r\n                                    未对账\r\n                                {{/if}}\r\n                            </span>\r\n                            <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                        </button>\r\n                        <ul class="dropdown-menu">\r\n                            <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                            <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                            <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <button class=" btn-sm T-search search-btn mar-r-10">\r\n                        <i class="ace-icon fa fa-search"></i> 搜索\r\n                    </button>\r\n                    <input type="hidden" name="accountStatus" value="{{searchParam.accountStatus}}">\r\n                    <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">{{sumNeedPayMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money" >{{sumSettlementMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">{{sumUnPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">{{checkedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover all hct_align_middle">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>团信息</th>\r\n                <th>消费日期(账期)</th>\r\n                <th>险种</th>\r\n                <th>单价</th>\r\n                <th>数量</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>预付款申请</th>\r\n                <th>已付金额</th>\r\n                <th>单据</th>\r\n                <th>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="width:108px">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList" data-right="1270005">\r\n            {{each financialInsuranceList as rs index}}\r\n            <tr class="T-checkTr {{if rs.change}}success{{/if}}" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}" {{if rs.change}}data-change="true"{{/if}}>\r\n                <td>{{if rs.tripNumber !=null && rs.tripNumber != ""}}{{rs.tripNumber}}\r\n                        {{if rs.lineProductName || rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.lineProductName != null && rs.lineProductName != ""}}{{rs.lineProductName}}\r\n                        {{if rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.guideName != null && rs.guideName != ""}}{{rs.guideName}}{{/if}}\r\n                </td>\r\n                <td>{{if rs.accountTime == null || rs.accountTime == ""}} - {{else}} {{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}{{if rs.endTime}} ~ {{rs.endTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}{{/if}}\r\n                </td>\r\n                <td>{{if rs.type == null || rs.type == ""}}-{{else}}{{rs.type}}{{/if}}</td>\r\n                <td class="F-float F-money">{{rs.price}}</td>\r\n                <td class="F-float F-count">{{rs.memberCount}}</td>\r\n                <td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n                <td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n                <td><a class="{{if rs.payRecoredId}}T-option T-payRequest{{else}}black{{/if}}" data-preid="{{rs.payRecoredId}}"><span class="F-float F-money">{{rs.prePayMoney}}</span></a></td>\r\n                <td class="align-left"><a class="T-option T-payedDetail in-block" data-money="{{rs.payedMoney}}">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span></a></td>\r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-insuranceImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td>\r\n                    <input type="text" class="col-sm-12 F-float F-money" maxlength="9" name="settlementMoney" value="{{rs.settlementMoney}}" class="money">\r\n                </td>\r\n                <td class="F-float F-money" name="unPayedMoney">{{rs.unPayedMoney}}</td>\r\n                <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">{{rs.checkRemark}}</textarea></td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateTimeFormat}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" class="ace T-checkbox" {{if (rs.change && rs.isChecked == 1) || (!rs.change && rs.isConfirmAccount) }}checked="checked" {{/if}} />\r\n                        <span class="lbl"></span>对账\r\n                        <a class="cursor "> |</a>\r\n                    </label>\r\n                    <a class="T-option T-needPayDetail cursor">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-5">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n        <div class="form-group text-right">\r\n            <label class="control-label pull-right" />\r\n            <input type="checkbox" class="ace pull-right T-checkAll">\r\n            <span class="lbl"></span> 全选\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});