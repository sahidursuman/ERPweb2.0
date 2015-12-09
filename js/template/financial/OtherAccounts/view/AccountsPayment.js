/*TMODJS:{"debug":true,"version":181,"md5":"29ee441a5d67474850df37c2737116dd"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/AccountsPayment", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, statistics = $data.statistics, $each = $utils.$each, financialOtherDetailsList = $data.financialOtherDetailsList, recordSize = ($data.Checking, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row T-AccountsPayment globalAdd"> <div class="col-xs-12 "> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-horizontal col-sm-12 row form-group"> <label class="pull-left text-right ">项目名称:</label> <div class="col-sm-1"> <label>', 
            $line = 7, $out += $escape(searchParam.name), $out += '</label> </div> <label class="pull-left text-right">账期:</label> <div class="col-sm-1"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker T-time T-subsectionStartTime" name="joinTime" value="" type="text"> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right ">至</label> <div class="col-sm-1"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker T-time T-subsectionStartTime" name="joinTime" value="" type="text"> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right">团信息:</label> <div class="col-sm-1"> <input type="text" class="col-xs-12 T-creatorUserChoose width110 ui-autocomplete-input" placeholder="团信息" name="creator" value="" autocomplete="off"> <input type="hidden" name="creatorId" value=""> </div> <div class="col-sm-1"> <button class=" btn-sm T-btn-subsection-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class=" control-label pull-left">账面应付合计：', 
            $line = 36, $out += $escape(statistics.sumNeedPayMoney), $out += '</label> <label class=" control-label marginLeft-30">已付金额合计：', 
            $line = 37, $out += $escape(statistics.sumPayedMoney), $out += '</label> <label class=" control-label marginLeft-30">结算金额合计：', 
            $line = 38, $out += $escape(statistics.sumSettlementMoney), $out += '</label> <label class=" control-label marginLeft-30">未付金额合计：', 
            $line = 39, $out += $escape(statistics.sumUnPayedMoney), $out += '</label> <label class=" control-label marginLeft-30">本次付款金额：', 
            $line = 40, $out += $escape(statistics.sumSettlementMoney), $out += '</label> <label class=" control-label marginLeft-30">付款方式： <select> <option>现金</option> <option>银行转账</option> <option>网上支付</option> <option>支票</option> <option>其他</option> </select> </label> <label class="control-label marginLeft-30"> <button class=" btn-sm search-btn">自动下账</button> </label> </div> </form> </div> <input type="hidden" name="WEB_IMG_URL_BIG" /> <input type="hidden" name="WEB_IMG_URL_SMALL" /> <div class="clearfix"></div> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">团信息</th> <th class="th-border">消费日期</th> <th class="th-border">团队人数</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">本次付款金额</th> <th class="th-border">付款方式</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-PaymentListNum"> ', 
            $line = 83, $each(financialOtherDetailsList, function(Checking, index) {
                $out += ' <tr data-id="', $line = 84, $out += $escape(Checking.id), $out += '" data-entity-isConfirmAccount="', 
                $line = 84, $out += $escape(Checking.isConfirmAccount), $out += '" data-entity-checkRemark="', 
                $line = 84, $out += $escape(Checking.checkRemark), $out += '" data-entity-settlementMoney="', 
                $line = 84, $out += $escape(Checking.settlementMoney), $out += '"> <td>', $line = 85, 
                $out += $escape(index + 1), $out += "</td> <td>", $line = 86, $out += $escape(Checking.info), 
                $out += '</td> <td name="startTime">', $line = 87, $out += $escape(Checking.accountTime), 
                $out += "</td> <td>", $line = 88, $out += $escape(Checking.adultCount), $line = 88, 
                $out += $escape("大人"), $line = 88, $out += $escape(Checking.childCount), $line = 88, 
                $out += $escape("小孩"), $out += "</td> <td>", $line = 89, $out += $escape(Checking.price), 
                $out += "</td> <td>", $line = 90, $out += $escape(Checking.memberCount), $out += "</td> <td>", 
                $line = 91, $out += $escape(Checking.reduceMoney), $out += "</td> <td>", $line = 92, 
                $out += $escape(Checking.needPayMoney), $out += '</td> <td><a class="T-action T-lookPay">', 
                $line = 93, $out += $escape("社付："), $line = 93, $out += $escape(Checking.agencyPayedMoney), 
                $line = 93, $out += $escape(";导付："), $line = 93, $out += $escape(Checking.guidePayedMoney), 
                $out += '</a></td> <td><a href="#" class="T-action T-insuanceImg" url=""><span>查看</span></a></td> <td> ', 
                $line = 96, $out += $escape(Checking.sumSettlementMoney), $out += " </td> <td> ", 
                $line = 99, $out += $escape(Checking.unPayedMoney), $out += ' </td> <td> <input type="text" name="ClearMoney input-success"> </td> <td> <select name="paymentMethod"> <option>现金</option> <option>银行转账</option> <option>网上支付</option> <option>支票</option> <option>其他</option> </select> </td> <td> <input type="text" value="', 
                $line = 114, $out += $escape(Checking.payRemark), $out += '" name="checkRemark"> </td> <td>', 
                $line = 116, $out += $escape(Checking.checkTime), $out += "</td> <td>", $line = 117, 
                $out += $escape(Checking.checkUser), $out += "</td> <td> ", $line = 119, 1 == Checking.isConfirmAccount ? ($out += "已对账", 
                $line = 119) : 0 == Checking.isConfirmAccount && ($out += "未对账", $line = 119), $out += ' <label class="padding-right20">|</label> <a class="T-action T-viewhandle">查看</a> </td> </tr> ', 
                $line = 124;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 130, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group text-center"> <button class="btn btn-xs btn-primary T-closeTab"> <i class="ace-icon fa fa-times-circle"></i> 关闭 </button> <button class="btn btn-xs btn-primary T-save"> <i class="ace-icon fa fa-check-circle"></i> 确认 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-AccountsPayment globalAdd">\r\n    <div class="col-xs-12 ">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-horizontal col-sm-12 row form-group">\r\n                <label class="pull-left text-right ">项目名称:</label>\r\n                <div class="col-sm-1">\r\n                    <label>{{searchParam.name}}</label>\r\n                </div>\r\n                <label class="pull-left text-right">账期:</label>\r\n                <div class="col-sm-1">\r\n                    <div class="input-group col-sm-12">\r\n                        <input class="col-sm-12 datepicker T-time T-subsectionStartTime" name="joinTime" value="" type="text">\r\n                        <span class="input-group-addon"> \r\n                              <i class="fa fa-calendar"></i> \r\n                              </span>\r\n                    </div>\r\n                </div>\r\n                <label class="pull-left text-right ">至</label>\r\n                <div class="col-sm-1">\r\n                    <div class="input-group col-sm-12">\r\n                        <input class="col-sm-12 datepicker T-time T-subsectionStartTime" name="joinTime" value="" type="text">\r\n                        <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div>\r\n                </div>\r\n                <label class="pull-left text-right">团信息:</label>\r\n                <div class="col-sm-1">\r\n                    <input type="text" class="col-xs-12 T-creatorUserChoose width110 ui-autocomplete-input" placeholder="团信息" name="creator" value="" autocomplete="off">\r\n                    <input type="hidden" name="creatorId" value="">\r\n                </div>\r\n                <div class="col-sm-1">\r\n                    <button class=" btn-sm T-btn-subsection-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class=" control-label pull-left">账面应付合计：{{statistics.sumNeedPayMoney}}</label>\r\n                <label class=" control-label marginLeft-30">已付金额合计：{{statistics.sumPayedMoney}}</label>\r\n                <label class=" control-label marginLeft-30">结算金额合计：{{statistics.sumSettlementMoney}}</label>\r\n                <label class=" control-label marginLeft-30">未付金额合计：{{statistics.sumUnPayedMoney}}</label>\r\n                <label class=" control-label marginLeft-30">本次付款金额：{{statistics.sumSettlementMoney}}</label>\r\n                <label class=" control-label marginLeft-30">付款方式：\r\n                    <select>\r\n                        <option>现金</option>\r\n                        <option>银行转账</option>\r\n                        <option>网上支付</option>\r\n                        <option>支票</option>\r\n                        <option>其他</option>\r\n                    </select>\r\n                </label>\r\n                <label class="control-label marginLeft-30">\r\n                    <button class=" btn-sm search-btn">自动下账</button>\r\n                </label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" name="WEB_IMG_URL_SMALL" />\r\n    <div class="clearfix"></div>\r\n    <table class="table table-striped table-bordered table-hover all">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">序号</th>\r\n                <th class="th-border">团信息</th>\r\n                <th class="th-border">消费日期</th>\r\n                <th class="th-border">团队人数</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">本次付款金额</th>\r\n                <th class="th-border">付款方式</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-PaymentListNum">\r\n            {{each financialOtherDetailsList as Checking index}}\r\n            <tr data-id="{{Checking.id}}" data-entity-isConfirmAccount="{{Checking.isConfirmAccount}}" data-entity-checkRemark="{{Checking.checkRemark}}" data-entity-settlementMoney="{{Checking.settlementMoney}}">\r\n                <td>{{index+1}}</td>\r\n                <td>{{Checking.info}}</td>\r\n                <td name="startTime">{{Checking.accountTime}}</td>\r\n                <td>{{Checking.adultCount}}{{"大人"}}{{Checking.childCount}}{{"小孩"}}</td>\r\n                <td>{{Checking.price}}</td>\r\n                <td>{{Checking.memberCount}}</td>\r\n                <td>{{Checking.reduceMoney}}</td>\r\n                <td>{{Checking.needPayMoney}}</td>\r\n                <td><a class="T-action T-lookPay">{{"社付："}}{{Checking.agencyPayedMoney}}{{";导付："}}{{Checking.guidePayedMoney}}</a></td>\r\n                <td><a href="#" class="T-action T-insuanceImg" url=""><span>查看</span></a></td>\r\n                <td>\r\n                    {{Checking.sumSettlementMoney}}\r\n                </td>\r\n                <td>\r\n                    {{Checking.unPayedMoney}}\r\n                </td>\r\n                <td>\r\n                    <input type="text" name="ClearMoney input-success">\r\n                </td>\r\n                <td>\r\n                    <select name="paymentMethod">\r\n                        <option>现金</option>\r\n                        <option>银行转账</option>\r\n                        <option>网上支付</option>\r\n                        <option>支票</option>\r\n                        <option>其他</option>\r\n                    </select>\r\n                </td>\r\n                <td>\r\n                    <input type="text" value="{{Checking. payRemark}}" name="checkRemark">\r\n                </td>\r\n                <td>{{Checking.checkTime}}</td>\r\n                <td>{{Checking.checkUser }}</td>\r\n                <td>\r\n                    {{if Checking.isConfirmAccount == 1}}已对账{{else if Checking.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <label class="padding-right20">|</label>\r\n                    <a class="T-action T-viewhandle">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group text-center">\r\n            <button class="btn btn-xs btn-primary T-closeTab">\r\n                <i class="ace-icon fa fa-times-circle"></i> 关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-save">\r\n                <i class="ace-icon fa fa-check-circle"></i> 确认\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});