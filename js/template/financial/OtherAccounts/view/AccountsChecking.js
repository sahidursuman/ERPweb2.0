/*TMODJS:{"debug":true,"version":628,"md5":"9d34b167c2f10ac64fc67bc8424f395c"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/AccountsChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, statistics = $data.statistics, $each = $utils.$each, financialOtherDetailsList = $data.financialOtherDetailsList, recordSize = ($data.Checking, 
            $data.index, $data.recordSize), name = $data.name, $out = "";
            return $out += '<div class="row T-Accounts globalAdd"> <div class="col-xs-12 "> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area T-search-area"> <div class="form-group"> <label>项目名称：', 
            $line = 6, $out += $escape(searchParam.name), $out += '</label> <input type="hidden" name="itemName" value="', 
            $line = 7, $out += $escape(searchParam.name), $out += '"> <label class="marginLeft-30">账期：</label> <input class="datepicker T-time T-startTime" name="joinTime" placeholder="开始日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.startAccountTime), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="datepicker T-time T-endTime" name="joinTime" placeholder="结束日期" type="text" value="', 
            $line = 11, $out += $escape(searchParam.endAccountTime), $out += '" style="width:100px;" /> <label class="marginLeft-30">团信息：</label> <input name="creator" class="T-creatorUserChoose ui-autocomplete-input" placeholder="团信息" type="text" value="', 
            $line = 13, $out += $escape(searchParam.info), $out += '" autocomplete="off" style="width:200px;" /> <button class="marginLeft-30 btn-sm search-btn T-search"> <i class="ace-icon fa fa-search"></i>搜索 </button> <button class="btn-sm search-btn T-btn-export marginLeft-30">导出报表</button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left">账面应付合计：', 
            $line = 23, $out += $escape(statistics.sumNeedPayMoney), $out += '</label> <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 24, $out += $escape(statistics.sumPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">', 
            $line = 25, $out += $escape(statistics.sumSettlementMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">', 
            $line = 26, $out += $escape(statistics.sumUnPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">', 
            $line = 27, $out += $escape(statistics.confirmedMoney), $out += '</span></label> </div> </form> </div> <input type="hidden" name="WEB_IMG_URL_BIG" value="WEB_IMG_URL_BIG" /> <input type="hidden" name="WEB_IMG_URL_SMALL" value="WEB_IMG_URL_SMALL" /> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all hct_align_middle"> <thead> <tr class="T-tr-fixed bg-blur"> <th>团信息</th> <th>消费日期(账期)</th> <th>团队人数</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>账面应付</th> <th>已付金额</th> <th>单据</th> <th>结算金额</th> <th>未付金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="width:115px">对账</th> </tr> </thead> <tbody class="T-checkListNum T-checkList"> ', 
            $line = 55, $each(financialOtherDetailsList, function(Checking) {
                $out += ' <tr class="T-checkTr" data-id=\'', $line = 56, $out += $escape(Checking.id), 
                $out += "' data-entity-isConfirmAccount=\"", $line = 56, $out += $escape(Checking.isConfirmAccount), 
                $out += '" data-entity-settlementMoney="', $line = 56, $out += $escape(Checking.settlementMoney), 
                $out += '" data-confirm="', $line = 56, $out += $escape(Checking.isConfirmAccount), 
                $out += '"> <td>', $line = 57, $out += $escape(Checking.info), $out += '</td> <td name="startTime">', 
                $line = 58, $out += $escape(Checking.accountTime), $out += '</td> <td><span class="F-float F-count">', 
                $line = 59, $out += $escape(Checking.adultCount), $out += "</span>", $line = 59, 
                $out += $escape("大人"), $out += '<span class="F-float F-count">', $line = 59, $out += $escape(Checking.childCount), 
                $out += "</span>", $line = 59, $out += $escape("小孩"), $out += '</td> <td class="F-float F-money">', 
                $line = 60, $out += $escape(Checking.price), $out += '</td> <td class="F-float F-count">', 
                $line = 61, $out += $escape(Checking.memberCount), $out += '</td> <td class="F-float F-money">', 
                $line = 62, $out += $escape(Checking.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 63, $out += $escape(Checking.needPayMoney), $out += '</td> <td><a class="T-action T-lookDetail T-payedDetail" data-money="', 
                $line = 64, $out += $escape(Checking.agencyPayedMoney + Checking.guidePayedMoney), 
                $out += '">', $line = 64, $out += $escape("社付："), $out += '<span class="F-float F-money">', 
                $line = 64, $out += $escape(Checking.agencyPayedMoney), $out += "</span> ", $line = 65, 
                1 != Checking.isGuidePay && ($line = 65, $out += $escape(";导付："), $out += '<span class="F-float F-money">', 
                $line = 65, $out += $escape(Checking.guidePayedMoney), $out += "</span>", $line = 65), 
                $out += "</a></td> <td>", $line = 66, null != Checking.billImage && "" != Checking.billImage ? ($out += '<a href="#" class="T-action T-viewInsuanceImg" url="', 
                $line = 66, $out += $escape(Checking.billImage), $out += '"><span>查看</span></a>', 
                $line = 66) : ($out += '<span style="color:#bbb">查看</span>', $line = 66), $out += '</td> <td> <input type="text" class="col-sm-12 F-float F-money" maxlength="9" name="settlementMoney" value="', 
                $line = 68, $out += $escape(Checking.settlementMoney), $out += '" class="money" ', 
                $line = 68, Checking.isConfirmAccount && ($out += ' disabled="disabled" ', $line = 68), 
                $out += '> </td> <td name="unPayedMoney" class="F-float F-money">', $line = 70, 
                $out += $escape(Checking.unPayedMoney), $out += '</td> <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000" ', 
                $line = 71, Checking.isConfirmAccount && ($out += ' disabled="disabled" ', $line = 71), 
                $out += ">", $line = 71, $out += $escape(Checking.checkRemark), $out += "</textarea></td> <td>", 
                $line = 72, $out += $escape(Checking.checkTime), $out += "</td> <td>", $line = 73, 
                $out += $escape(Checking.checkUser), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" data-entity-checkStatus="', 
                $line = 76, $out += $escape(Checking.isConfirmAccount), $out += '" class="ace T-checkbox T-insuanceFinancial" ', 
                $line = 76, Checking.isConfirmAccount && ($out += 'checked="checked" ', $line = 76), 
                $out += '/> <span class="lbl"></span> 对账 <a class="cursor"> |</a> <a class="T-action T-viewhandle cursor">查看</a> </label> </td> </tr> ', 
                $line = 83;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode "> <div class="col-xs-6"> <small>共计 ', 
            $line = 89, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-5"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> <div class="form-group text-right"> <label class="control-label pull-right"> <input type="checkbox" class="ace pull-right T-selectAll"> <span class="lbl"></span> 全选 </label> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group text-center"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-confirm" data-id=', 
            $line = 107, $out += $escape(name), $out += '> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-Accounts globalAdd">\r\n    <div class="col-xs-12 ">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area T-search-area">\r\n                <div class="form-group">\r\n                    <label>项目名称：{{searchParam.name}}</label>\r\n                    <input type="hidden" name="itemName" value="{{searchParam.name}}">\r\n                    <label class="marginLeft-30">账期：</label>\r\n                    <input class="datepicker T-time T-startTime" name="joinTime" placeholder="开始日期" type="text" value="{{searchParam.startAccountTime}}" style="width:100px;" />\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="datepicker T-time T-endTime" name="joinTime" placeholder="结束日期" type="text" value="{{searchParam.endAccountTime}}" style="width:100px;" />\r\n                    <label class="marginLeft-30">团信息：</label>\r\n                    <input name="creator" class="T-creatorUserChoose  ui-autocomplete-input" placeholder="团信息" type="text" value="{{searchParam.info}}" autocomplete="off" style="width:200px;" />\r\n                    <button class="marginLeft-30 btn-sm search-btn T-search">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                    <button class="btn-sm search-btn T-btn-export marginLeft-30">导出报表</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class=" control-label pull-left">账面应付合计：{{statistics.sumNeedPayMoney}}</label>\r\n                <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">{{statistics.sumPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">{{statistics.sumSettlementMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">{{statistics.sumUnPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">{{statistics.confirmedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" name="WEB_IMG_URL_BIG" value="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" name="WEB_IMG_URL_SMALL" value="WEB_IMG_URL_SMALL" />\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover all hct_align_middle">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>团信息</th>\r\n                <th>消费日期(账期)</th>\r\n                <th>团队人数</th>\r\n                <th>单价</th>\r\n                <th>数量</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>已付金额</th>\r\n                <th>单据</th>\r\n                <th>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="width:115px">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkListNum T-checkList">\r\n            {{each financialOtherDetailsList as Checking index}}\r\n            <tr class="T-checkTr" data-id=\'{{Checking.id}}\' data-entity-isConfirmAccount="{{Checking.isConfirmAccount}}" data-entity-settlementMoney="{{Checking.settlementMoney}}" data-confirm="{{Checking.isConfirmAccount}}">\r\n                <td>{{Checking.info}}</td>\r\n                <td name="startTime">{{Checking.accountTime}}</td>\r\n                <td><span class="F-float F-count">{{Checking.adultCount}}</span>{{"大人"}}<span class="F-float F-count">{{Checking.childCount}}</span>{{"小孩"}}</td>\r\n                <td class="F-float F-money">{{Checking.price}}</td>\r\n                <td class="F-float F-count">{{Checking.memberCount}}</td>\r\n                <td class="F-float F-money">{{Checking.reduceMoney}}</td>\r\n                <td class="F-float F-money">{{Checking.needPayMoney}}</td>\r\n                <td><a class="T-action T-lookDetail T-payedDetail" data-money="{{Checking.agencyPayedMoney + Checking.guidePayedMoney}}">{{"社付："}}<span class="F-float F-money">{{Checking.agencyPayedMoney}}</span>\r\n                {{if Checking.isGuidePay != 1}}{{";导付："}}<span class="F-float F-money">{{Checking.guidePayedMoney}}</span>{{/if}}</a></td>\r\n                <td>{{if Checking.billImage != null && Checking.billImage !=""}}<a href="#" class="T-action T-viewInsuanceImg" url="{{Checking.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td>\r\n                    <input type="text" class="col-sm-12 F-float F-money" maxlength="9" name="settlementMoney" value="{{Checking.settlementMoney}}" class="money" {{if Checking.isConfirmAccount}} disabled="disabled" {{/if}}>\r\n                </td>\r\n                <td name="unPayedMoney" class="F-float F-money">{{Checking.unPayedMoney}}</td>\r\n                <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000" {{if Checking.isConfirmAccount}} disabled="disabled" {{/if}}>{{Checking.checkRemark}}</textarea></td>\r\n                <td>{{Checking.checkTime}}</td>\r\n                <td>{{Checking.checkUser }}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" data-entity-checkStatus="{{Checking.isConfirmAccount}}" class="ace T-checkbox T-insuanceFinancial" {{if Checking.isConfirmAccount}}checked="checked" {{/if}}/>\r\n                        <span class="lbl"></span> 对账\r\n                        <a class="cursor"> |</a>\r\n                        <a class="T-action T-viewhandle cursor">查看</a>\r\n                    </label>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode ">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-5">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n        <div class="form-group text-right">\r\n            <label class="control-label pull-right">\r\n                <input type="checkbox" class="ace pull-right T-selectAll">\r\n                <span class="lbl"></span> 全选\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group text-center">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-confirm" data-id={{name}}>\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});