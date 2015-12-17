/*TMODJS:{"debug":true,"version":313,"md5":"9916741fc915aac2e3e341cfa5a780de"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/AccountsPayment", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, statistics = $data.statistics, type = $data.type, $each = $utils.$each, financialOtherDetailsList = $data.financialOtherDetailsList, recordSize = ($data.Checking, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row T-AccountsPayment globalAdd"> <div class="col-xs-12 "> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-horizontal row form-group T-search-area"> <label class="pull-left text-right ">项目名称:</label> <div class="col-sm-1"> <label class="T-name">', 
            $line = 7, $out += $escape(searchParam.name), $out += '</label> <input type="hidden" name="itemName" value="', 
            $line = 8, $out += $escape(searchParam.name), $out += '"> </div> <label class="pull-left text-right">账期:</label> <div class="col-sm-1 input-daterange"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker T-startTime" name="joinTime" value="', 
            $line = 13, $out += $escape(searchParam.startAccountTime), $out += '" type="text"> </div> </div> <label class="pull-left text-right ">至</label> <div class="col-sm-1 input-daterange"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker T-endTime" name="joinTime" value="', 
            $line = 20, $out += $escape(searchParam.endAccountTime), $out += '" type="text"> </div> </div> <label class="pull-left text-right">团信息:</label> <div class="col-sm-1"> <input type="text" class="col-xs-12 T-creatorUserChoose width110 ui-autocomplete-input" placeholder="团信息" name="creator" value="" autocomplete="off"> <input type="hidden" name="creatorId" value=""> </div> <div class="col-sm-1"> <button class=" btn-sm T-paymentSearch search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left">账面应付合计：', 
            $line = 35, $out += $escape(statistics.sumNeedPayMoney), $out += '</label> <label class=" control-label marginLeft-30">已付金额合计：', 
            $line = 36, $out += $escape(statistics.sumPayedMoney), $out += '</label> <label class=" control-label marginLeft-30">结算金额合计：', 
            $line = 37, $out += $escape(statistics.sumSettlementMoney), $out += '</label> <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney ">', 
            $line = 38, $out += $escape(statistics.sumUnPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">本次付款金额合计：<input name="sumPayMoney" type="text" class="T-btn-autofill" ', 
            $line = 39, type && ($out += "disabled ", $line = 39), $out += ' /></label> <label class=" control-label marginLeft-30">付款方式： <select name="sumPayType"> <option>现金</option> <option>银行转账</option> <option>网上支付</option> <option>支票</option> <option>其他</option> </select> </label> <label class=" control-label marginLeft-30">备注：<input type="text" name="sumPayRemark"></label> <label class="control-label marginLeft-30"> <button class="btn btn-xs btn-primary T-clear-auto ">自动下账</button> </label> </div> </form> </div> <input type="hidden" name="WEB_IMG_URL_BIG" /> <input type="hidden" name="WEB_IMG_URL_SMALL" /> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th class="th-border">团信息</th> <th class="th-border">消费日期(账期)</th> <th class="th-border">团队人数</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 81, $each(financialOtherDetailsList, function(Checking) {
                $out += ' <tr data-id="', $line = 82, $out += $escape(Checking.id), $out += '" data-entity-isConfirmAccount="', 
                $line = 82, $out += $escape(Checking.isConfirmAccount), $out += '" data-entity-checkRemark="', 
                $line = 82, $out += $escape(Checking.checkRemark), $out += '" data-entity-settlementMoney="', 
                $line = 82, $out += $escape(Checking.settlementMoney), $out += '"> <td>', $line = 83, 
                $out += $escape(Checking.info), $out += '</td> <td name="startTime">', $line = 84, 
                $out += $escape(Checking.accountTime), $out += "</td> <td>", $line = 85, $out += $escape(Checking.adultCount), 
                $line = 85, $out += $escape("大人"), $line = 85, $out += $escape(Checking.childCount), 
                $line = 85, $out += $escape("小孩"), $out += "</td> <td>", $line = 86, $out += $escape(Checking.price), 
                $out += "</td> <td>", $line = 87, $out += $escape(Checking.memberCount), $out += "</td> <td>", 
                $line = 88, $out += $escape(Checking.reduceMoney), $out += "</td> <td>", $line = 89, 
                $out += $escape(Checking.needPayMoney), $out += '</td> <td><a class="T-action T-lookPay">', 
                $line = 90, $out += $escape("社付："), $line = 90, $out += $escape(Checking.agencyPayedMoney), 
                $line = 90, $out += $escape(";导付："), $line = 90, $out += $escape(Checking.guidePayedMoney), 
                $out += "</a></td> <td>", $line = 91, null != Checking.billImage && "" != Checking.billImage ? ($out += '<a href="#" class="T-option T-viewInsuanceImg" url="', 
                $line = 91, $out += $escape(Checking.billImage), $out += '"><span>查看</span></a>', 
                $line = 91) : ($out += '<span style="color:#bbb">查看</span>', $line = 91), $out += "</td> <td> ", 
                $line = 93, $out += $escape(Checking.sumSettlementMoney), $out += " </td> <td> ", 
                $line = 96, $out += $escape(Checking.unPayedMoney), $out += ' </td> <td> <input type="text" name="payMoney" class="name"> </td> <td> <input type="text" value="', 
                $line = 102, $out += $escape(Checking.payRemark), $out += '" name="checkRemark"> </td> <td>', 
                $line = 104, $out += $escape(Checking.checkTime), $out += "</td> <td>", $line = 105, 
                $out += $escape(Checking.checkUser), $out += "</td> <td> ", $line = 107, 1 == Checking.isConfirmAccount ? ($out += "已对账", 
                $line = 107) : 0 == Checking.isConfirmAccount && ($out += "未对账", $line = 107), $out += ' <label class="padding-right20">|</label> <a class="T-action T-viewhandle">查看</a> </td> </tr> ', 
                $line = 112;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 118, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group text-center"> <button class="btn btn-xs btn-primary T-close-clear"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-savePayment"> <i class="ace-icon fa fa-check-circle"></i> 确认付款 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-AccountsPayment globalAdd">\r\n    <div class="col-xs-12 ">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-horizontal row form-group T-search-area">\r\n                <label class="pull-left text-right ">项目名称:</label>\r\n                <div class="col-sm-1">\r\n                    <label class="T-name">{{searchParam.name}}</label>\r\n                     <input type="hidden" name="itemName" value="{{searchParam.name}}">\r\n                </div>\r\n                <label class="pull-left text-right">账期:</label>\r\n                <div class="col-sm-1 input-daterange">\r\n                    <div class="input-group col-sm-12">\r\n                        <input class="col-sm-12 datepicker T-startTime" name="joinTime" value="{{searchParam.startAccountTime}}" type="text">\r\n                       \r\n                    </div>\r\n                </div>\r\n                <label class="pull-left text-right ">至</label>\r\n                <div class="col-sm-1 input-daterange">\r\n                    <div class="input-group col-sm-12">\r\n                        <input class="col-sm-12 datepicker  T-endTime" name="joinTime" value="{{searchParam.endAccountTime}}" type="text">\r\n                        </div>\r\n                </div>\r\n                <label class="pull-left text-right">团信息:</label>\r\n                <div class="col-sm-1">\r\n                    <input type="text" class="col-xs-12 T-creatorUserChoose width110 ui-autocomplete-input" placeholder="团信息" name="creator" value="" autocomplete="off">\r\n                    <input type="hidden" name="creatorId" value="">\r\n                </div>\r\n                <div class="col-sm-1">\r\n                    <button class=" btn-sm T-paymentSearch search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class=" control-label pull-left">账面应付合计：{{statistics.sumNeedPayMoney}}</label>\r\n                <label class=" control-label marginLeft-30">已付金额合计：{{statistics.sumPayedMoney}}</label>\r\n                <label class=" control-label marginLeft-30">结算金额合计：{{statistics.sumSettlementMoney}}</label>\r\n                <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney ">{{statistics.sumUnPayedMoney}}</span></label>\r\n                <label class=" control-label marginLeft-30">本次付款金额合计：<input name="sumPayMoney" type="text" class="T-btn-autofill" {{if type}}disabled {{/if}} /></label>\r\n                <label class=" control-label marginLeft-30">付款方式：\r\n                    <select name="sumPayType">\r\n                        <option>现金</option>\r\n                        <option>银行转账</option>\r\n                        <option>网上支付</option>\r\n                        <option>支票</option>\r\n                        <option>其他</option>\r\n                    </select>\r\n                </label>\r\n                <label class=" control-label marginLeft-30">备注：<input type="text" name="sumPayRemark"></label>\r\n                <label class="control-label marginLeft-30">\r\n                    <button class="btn btn-xs btn-primary T-clear-auto ">自动下账</button>\r\n                </label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" name="WEB_IMG_URL_SMALL" />\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover all">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">团信息</th>\r\n                <th class="th-border">消费日期(账期)</th>\r\n                <th class="th-border">团队人数</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialOtherDetailsList as Checking index}}\r\n            <tr data-id="{{Checking.id}}" data-entity-isConfirmAccount="{{Checking.isConfirmAccount}}" data-entity-checkRemark="{{Checking.checkRemark}}" data-entity-settlementMoney="{{Checking.settlementMoney}}">\r\n                <td>{{Checking.info}}</td>\r\n                <td name="startTime">{{Checking.accountTime}}</td>\r\n                <td>{{Checking.adultCount}}{{"大人"}}{{Checking.childCount}}{{"小孩"}}</td>\r\n                <td>{{Checking.price}}</td>\r\n                <td>{{Checking.memberCount}}</td>\r\n                <td>{{Checking.reduceMoney}}</td>\r\n                <td>{{Checking.needPayMoney}}</td>\r\n                <td><a class="T-action T-lookPay">{{"社付："}}{{Checking.agencyPayedMoney}}{{";导付："}}{{Checking.guidePayedMoney}}</a></td>\r\n                <td>{{if Checking.billImage != null && Checking.billImage !=""}}<a href="#" class="T-option T-viewInsuanceImg" url="{{Checking.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td>\r\n                    {{Checking.sumSettlementMoney}}\r\n                </td>\r\n                <td>\r\n                    {{Checking.unPayedMoney}}\r\n                </td>\r\n                <td>\r\n                    <input type="text" name="payMoney" class="name">\r\n                </td>\r\n                <td>\r\n                    <input type="text" value="{{Checking. payRemark}}" name="checkRemark">\r\n                </td>\r\n                <td>{{Checking.checkTime}}</td>\r\n                <td>{{Checking.checkUser }}</td>\r\n                <td>\r\n                    {{if Checking.isConfirmAccount == 1}}已对账{{else if Checking.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <label class="padding-right20">|</label>\r\n                    <a class="T-action T-viewhandle">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group text-center">\r\n            <button class="btn btn-xs btn-primary T-close-clear">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-savePayment">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});