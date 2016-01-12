/*TMODJS:{"debug":true,"version":591,"md5":"433dc2e6c6503936d0f3d3101ba808f2"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/AccountsChecking", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, statistics = $data.statistics, $each = $utils.$each, financialOtherDetailsList = $data.financialOtherDetailsList, recordSize = ($data.Checking, 
            $data.index, $data.recordSize), name = $data.name, $out = "";
            return $out += '<div class="row T-Accounts globalAdd"> <div class="col-xs-12 "> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-horizontal row form-group T-search-area"> <label class="pull-left text-right ">项目名称:</label> <div class="col-sm-1"> <label class="name">', 
            $line = 7, $out += $escape(searchParam.name), $out += '</label> <input type="hidden" name="itemName" value="', 
            $line = 8, $out += $escape(searchParam.name), $out += '"> </div> <label class="pull-left text-right">账期:</label> <div class="col-sm-1 input-daterange"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker T-time T-startTime" name="joinTime" value="', 
            $line = 13, $out += $escape(searchParam.startAccountTime), $out += '" type="text"> </div> </div> <label class="pull-left text-right ">至</label> <div class="col-sm-1 input-daterange"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker T-time T-endTime" name="joinTime" value="', 
            $line = 19, $out += $escape(searchParam.endAccountTime), $out += '" type="text"> </div> </div> <label class="pull-left text-right">团信息:</label> <div class="col-sm-1"> <input type="text" class="col-xs-12 T-creatorUserChoose width110 ui-autocomplete-input" placeholder="团信息" name="creator" value="', 
            $line = 24, $out += $escape(searchParam.info), $out += '" autocomplete="off"> <input type="hidden" name="creatorId" value=""> </div> <div class="col-sm-1"> <button class=" btn-sm T-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left">账面应付合计：', 
            $line = 37, $out += $escape(statistics.sumNeedPayMoney), $out += '</label> <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 38, $out += $escape(statistics.sumPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">', 
            $line = 39, $out += $escape(statistics.sumSettlementMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">', 
            $line = 40, $out += $escape(statistics.sumUnPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">', 
            $line = 41, $out += $escape(statistics.confirmedMoney), $out += '</span></label> </div> </form> </div> <input type="hidden" name="WEB_IMG_URL_BIG" value="WEB_IMG_URL_BIG" /> <input type="hidden" name="WEB_IMG_URL_SMALL" value="WEB_IMG_URL_SMALL" /> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th class="th-border">团信息</th> <th class="th-border">消费日期(账期)</th> <th class="th-border">团队人数</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-checkListNum T-checkList"> ', 
            $line = 69, $each(financialOtherDetailsList, function(Checking) {
                $out += ' <tr class="T-checkTr" data-id=\'', $line = 70, $out += $escape(Checking.id), 
                $out += "' data-entity-isConfirmAccount=\"", $line = 70, $out += $escape(Checking.isConfirmAccount), 
                $out += '" data-entity-settlementMoney="', $line = 70, $out += $escape(Checking.settlementMoney), 
                $out += '" data-confirm="', $line = 70, $out += $escape(Checking.isConfirmAccount), 
                $out += '"> <td>', $line = 71, $out += $escape(Checking.info), $out += '</td> <td name="startTime">', 
                $line = 72, $out += $escape(Checking.accountTime), $out += '</td> <td><span class="F-float F-count">', 
                $line = 73, $out += $escape(Checking.adultCount), $out += "</span>", $line = 73, 
                $out += $escape("大人"), $out += '<span class="F-float F-count">', $line = 73, $out += $escape(Checking.childCount), 
                $out += "</span>", $line = 73, $out += $escape("小孩"), $out += '</td> <td class="F-float F-money">', 
                $line = 74, $out += $escape(Checking.price), $out += '</td> <td class="F-float F-count">', 
                $line = 75, $out += $escape(Checking.memberCount), $out += '</td> <td class="F-float F-money">', 
                $line = 76, $out += $escape(Checking.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 77, $out += $escape(Checking.needPayMoney), $out += '</td> <td><a class="T-action T-lookDetail T-payedDetail" data-money="', 
                $line = 78, $out += $escape(Checking.agencyPayedMoney + Checking.guidePayedMoney), 
                $out += '">', $line = 78, $out += $escape("社付："), $out += '<span class="F-float F-money">', 
                $line = 78, $out += $escape(Checking.agencyPayedMoney), $out += "</span>", $line = 78, 
                $out += $escape(";导付："), $out += '<span class="F-float F-money">', $line = 78, $out += $escape(Checking.guidePayedMoney), 
                $out += "</span></a></td> <td>", $line = 79, null != Checking.billImage && "" != Checking.billImage ? ($out += '<a href="#" class="T-action T-viewInsuanceImg" url="', 
                $line = 79, $out += $escape(Checking.billImage), $out += '"><span>查看</span></a>', 
                $line = 79) : ($out += '<span style="color:#bbb">查看</span>', $line = 79), $out += '</td> <td class="F-float F-money"> <input type="text" maxlength="9" name="settlementMoney" value="', 
                $line = 81, $out += $escape(Checking.settlementMoney), $out += '" class="money" ', 
                $line = 81, Checking.isConfirmAccount && ($out += ' disabled="disabled" ', $line = 81), 
                $out += '> </td> <td name="unPayedMoney" class="F-float F-money">', $line = 83, 
                $out += $escape(Checking.unPayedMoney), $out += '</td> <td> <input type="text" value="', 
                $line = 85, $out += $escape(Checking.checkRemark), $out += '" name="checkRemark" ', 
                $line = 85, Checking.isConfirmAccount && ($out += ' disabled="disabled" ', $line = 85), 
                $out += "> </td> <td>", $line = 87, $out += $escape(Checking.checkTime), $out += "</td> <td>", 
                $line = 88, $out += $escape(Checking.checkUser), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" data-entity-checkStatus="', 
                $line = 91, $out += $escape(Checking.isConfirmAccount), $out += '" class="ace T-checkbox T-insuanceFinancial" ', 
                $line = 91, Checking.isConfirmAccount && ($out += 'checked="checked" ', $line = 91), 
                $out += '/> <span class="lbl"></span> 对账 <a class="cursor"> |</a> <a class="T-action T-viewhandle cursor">查看</a> </label> </td> </tr> ', 
                $line = 98;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode "> <div class="col-xs-6"> <small>共计 ', 
            $line = 104, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-5"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> <div class="form-group text-right"> <label class="control-label pull-right" > <input type="checkbox" class="ace pull-right T-selectAll"> <span class="lbl"></span> 全选 </label> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group text-center"> <button class="btn btn-xs btn-primary T-closeTab"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-confirm" data-id=', 
            $line = 122, $out += $escape(name), $out += '> <i class="ace-icon fa fa-check-circle"></i> 确认对账 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-Accounts globalAdd">\r\n    <div class="col-xs-12 ">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-horizontal row form-group T-search-area">\r\n                <label class="pull-left text-right ">项目名称:</label>\r\n                <div class="col-sm-1">\r\n                    <label class="name">{{searchParam.name}}</label>\r\n                    <input type="hidden" name="itemName" value="{{searchParam.name}}">\r\n                </div>\r\n                <label class="pull-left text-right">账期:</label>\r\n                <div class="col-sm-1 input-daterange">\r\n                    <div class="input-group col-sm-12">\r\n                        <input class="col-sm-12 datepicker T-time T-startTime" name="joinTime" value="{{searchParam.startAccountTime}}" type="text">\r\n                    </div>\r\n                </div>\r\n                <label class="pull-left text-right ">至</label>\r\n                <div class="col-sm-1 input-daterange">\r\n                    <div class="input-group col-sm-12">\r\n                        <input class="col-sm-12 datepicker T-time T-endTime" name="joinTime" value="{{searchParam.endAccountTime}}" type="text">\r\n                    </div>\r\n                </div>\r\n                <label class="pull-left text-right">团信息:</label>\r\n                <div class="col-sm-1">\r\n                    <input type="text" class="col-xs-12 T-creatorUserChoose width110 ui-autocomplete-input" placeholder="团信息" name="creator" value="{{searchParam.info}}" autocomplete="off">\r\n                    <input type="hidden" name="creatorId" value="">\r\n                </div>\r\n                <div class="col-sm-1">\r\n                    <button class=" btn-sm T-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button>\r\n                </div>\r\n                <div class="form-group marginLeft-30">\r\n                    <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class=" control-label pull-left">账面应付合计：{{statistics.sumNeedPayMoney}}</label>\r\n                <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">{{statistics.sumPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">{{statistics.sumSettlementMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">{{statistics.sumUnPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">{{statistics.confirmedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" name="WEB_IMG_URL_BIG" value="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" name="WEB_IMG_URL_SMALL" value="WEB_IMG_URL_SMALL" />\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover all">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">团信息</th>\r\n                <th class="th-border">消费日期(账期)</th>\r\n                <th class="th-border">团队人数</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkListNum T-checkList">\r\n            {{each financialOtherDetailsList as Checking index}}\r\n            <tr class="T-checkTr" data-id=\'{{Checking.id}}\' data-entity-isConfirmAccount="{{Checking.isConfirmAccount}}" data-entity-settlementMoney="{{Checking.settlementMoney}}" data-confirm="{{Checking.isConfirmAccount}}">\r\n                <td>{{Checking.info}}</td>\r\n                <td name="startTime">{{Checking.accountTime}}</td>\r\n                <td><span class="F-float F-count">{{Checking.adultCount}}</span>{{"大人"}}<span class="F-float F-count">{{Checking.childCount}}</span>{{"小孩"}}</td>\r\n                <td class="F-float F-money">{{Checking.price}}</td>\r\n                <td class="F-float F-count">{{Checking.memberCount}}</td>\r\n                <td class="F-float F-money">{{Checking.reduceMoney}}</td>\r\n                <td class="F-float F-money">{{Checking.needPayMoney}}</td>\r\n                <td><a class="T-action T-lookDetail T-payedDetail" data-money="{{Checking.agencyPayedMoney + Checking.guidePayedMoney}}">{{"社付："}}<span class="F-float F-money">{{Checking.agencyPayedMoney}}</span>{{";导付："}}<span class="F-float F-money">{{Checking.guidePayedMoney}}</span></a></td>\r\n                <td>{{if Checking.billImage != null && Checking.billImage !=""}}<a href="#" class="T-action T-viewInsuanceImg" url="{{Checking.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td class="F-float F-money">\r\n                    <input type="text" maxlength="9" name="settlementMoney" value="{{Checking.settlementMoney}}" class="money" {{if Checking.isConfirmAccount}} disabled="disabled" {{/if}}>\r\n                </td>\r\n                <td name="unPayedMoney" class="F-float F-money">{{Checking.unPayedMoney}}</td>\r\n                <td>\r\n                    <input type="text" value="{{Checking.checkRemark}}" name="checkRemark" {{if Checking.isConfirmAccount}} disabled="disabled" {{/if}}>\r\n                </td>\r\n                <td>{{Checking.checkTime}}</td>\r\n                <td>{{Checking.checkUser }}</td>\r\n                <td>\r\n                    <label class="pos-rel">\r\n                        <input type="checkbox" data-entity-checkStatus="{{Checking.isConfirmAccount}}" class="ace T-checkbox T-insuanceFinancial" {{if Checking.isConfirmAccount}}checked="checked" {{/if}}/>\r\n                        <span class="lbl"></span> 对账\r\n                        <a class="cursor"> |</a>\r\n                        <a class="T-action T-viewhandle cursor">查看</a>\r\n                    </label>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode ">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-5">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n        <div class="form-group text-right">\r\n            <label class="control-label pull-right" >\r\n            <input type="checkbox" class="ace pull-right T-selectAll">\r\n            <span class="lbl"></span> 全选\r\n            </label>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group text-center">\r\n            <button class="btn btn-xs btn-primary T-closeTab">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-confirm" data-id={{name}}>\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});