/*TMODJS:{"debug":true,"version":91,"md5":"b5ea16864b103e23998177fe12a37055"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/guideClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, yearList = $data.yearList, year = ($data.yearInfo, 
            $data.$index, $data.year), monthList = $data.monthList, guideSettlementList = ($data.monthInfo, 
            $data.guideSettlementList), $out = ($data.guideSettlement, "");
            return $out += '<div class= "row Cleaning globalAdd"> <div class="col-sm-12 border borderNormal" > <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label style="float: left;margin: 5px auto auto 15px" class=" control-label "> 导游：', 
            $line = 5, $out += $escape(searchParam.guideName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select name="year" class="T-search-year"> ', 
            $line = 8, $each(yearList, function(yearInfo) {
                $out += ' <option value="', $line = 9, $out += $escape(yearInfo), $out += '" ', 
                $line = 9, yearInfo == year && ($out += 'selected="selected"', $line = 9), $out += ">", 
                $line = 9, $out += $escape(yearInfo), $out += "</option> ", $line = 10;
            }), $out += ' </select> <label class=" control-label no-padding-right marginLeft-30">起始月：</label> <select name="start_month" class="T-search-start-month"> ', 
            $line = 14, $each(monthList, function(monthInfo) {
                $out += ' <option value="', $line = 15, $out += $escape(monthInfo), $out += '" ', 
                $line = 15, monthInfo == searchParam.start_month && ($out += 'selected="selected"', 
                $line = 15), $out += ">", $line = 15, $out += $escape(monthInfo), $out += "月</option> ", 
                $line = 16;
            }), $out += ' </select> <label class=" control-label no-padding-right marginLeft-30">结束月：</label> <select name="end_month" class="T-search-end-month"> ', 
            $line = 20, $each(monthList, function(monthInfo) {
                $out += ' <option value="', $line = 21, $out += $escape(monthInfo), $out += '" ', 
                $line = 21, monthInfo == searchParam.end_month && ($out += 'selected="selected"', 
                $line = 21), $out += ">", $line = 21, $out += $escape(monthInfo), $out += "月</option> ", 
                $line = 22;
            }), $out += ' </select> <button class=" btn-sm T-btn-search search-btn btn-height marginLeft-30" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group col-sm-9" style="padding-bottom: 0"> <label class="col-sm-2" style="margin-left: -7px">总账面退补：', 
            $line = 34, $out += $escape(searchParam.sumBackGuideMoney), $out += '</label> <label class="col-sm-2 ">总实际退补：', 
            $line = 35, $out += $escape(searchParam.sumRealBackGuideMoney), $out += '</label> <label class="col-sm-2 ">总已结账：', 
            $line = 36, $out += $escape(searchParam.sumAlreadyColseAccountMoney), $out += '</label> <label class="col-sm-2 ">总未结账：', 
            $line = 37, $out += $escape(searchParam.sumUnCloseAccountMoney), $out += '</label> </div> </form> </div> <button class="btn btn-sm btn-success T-guide-records pull-left margin-topTicket" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button> <div style="clear: both"></div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr> <th class="th-border">账期</th> <th class="th-border">预支款</th> <th class="th-border">团队收入</th> <th class="th-border">导游现付</th> <th class="th-border">导服费</th> <th class="th-border">导游返佣</th> <th class="th-border">退补款</th> <th class="th-border">实际退补</th> <th class="th-border">已结账</th> <th class="th-border">未结账</th> <th class="th-border"> <span class="necessary">*</span>结账金额</th> <th class="th-border">结账方式</th> <th class="th-border">备注</th> <th class="th-border">对账进度</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 64, $each(guideSettlementList, function(guideSettlement) {
                $out += ' <tr data-entity-id="', $line = 65, $out += $escape(guideSettlement.id), 
                $out += '"> <td>', $line = 66, $out += $escape(guideSettlement.year), $out += "年", 
                $line = 66, $out += $escape(guideSettlement.month), $out += "月</td> <td>", $line = 67, 
                $out += $escape(guideSettlement.guidePreMoney), $out += "</td> <td>", $line = 68, 
                $out += $escape(guideSettlement.teamIncomeMoney), $out += "</td> <td>", $line = 69, 
                $out += $escape(guideSettlement.guideNowPayedMoney), $out += "</td> <td>", $line = 70, 
                $out += $escape(guideSettlement.guideFee), $out += "</td> <td>", $line = 71, $out += $escape(guideSettlement.guideShopRebateMoney), 
                $out += "</td> <td>", $line = 72, $out += $escape(guideSettlement.backGuideMoney), 
                $out += "</td> <td>", $line = 73, $out += $escape(guideSettlement.realBackGuideMoney), 
                $out += "</td> <td>", $line = 74, $out += $escape(guideSettlement.alreadyColseAccountMoney), 
                $out += "</td> <td>", $line = 75, $out += $escape(guideSettlement.unCloseAccountMoney), 
                $out += '</td> <td class="col-sm-1"><input name="payMoney" type="text" class="col-sm-12" maxlength="9"></td> <td> <label class=" control-label no-padding-right" > <select name="payType"> <option>转账</option> <option>在线支付</option> <option>线下付款</option> </select> </label> </td> <td class="col-sm-1"><input name="remark" type="text" class="col-sm-12" maxlength="1000"></td> <td> ', 
                $line = 88, guideSettlement.allCount != guideSettlement.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 89, $out += $escape(guideSettlement.checkedCount), $line = 89, $out += $escape("/"), 
                $line = 89, $out += $escape(guideSettlement.allCount), $out += "</span> ", $line = 90), 
                $out += " ", $line = 91, guideSettlement.allCount == guideSettlement.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 92, $out += $escape(guideSettlement.checkedCount), $line = 92, $out += $escape("/"), 
                $line = 92, $out += $escape(guideSettlement.allCount), $out += "</span> ", $line = 93), 
                $out += ' </td> <td> <a data-entity-id="', $line = 96, $out += $escape(guideSettlement.id), 
                $out += '" class="cursor T-action T-save buttonHeight" style="border:none"> 保存 </a><a class="class"> |</a> <a data-entity-year="', 
                $line = 99, $out += $escape(guideSettlement.year), $out += '" data-entity-month="', 
                $line = 99, $out += $escape(guideSettlement.month), $out += '" style="border:none" class="cursor btn-transfter T-action T-checkDetail buttonHeight"> 对账明细 </a> </td> </tr> ', 
                $line = 104;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row Cleaning globalAdd">\r\n    <div class="col-sm-12 border borderNormal" >\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n                <div class="form-group"> <label style="float: left;margin: 5px auto auto 15px" class=" control-label "> 导游：{{searchParam.guideName}}</label>\r\n                    <label class="col-sm-1 control-label no-padding-right">账期：</label>\r\n                    <select name="year" class="T-search-year">\r\n					    {{each yearList as yearInfo}}\r\n                    <option value="{{yearInfo}}" {{if yearInfo == year}}selected="selected"{{/if}}>{{yearInfo}}</option>\r\n						{{/each}} \r\n					</select>\r\n                    <label class=" control-label no-padding-right marginLeft-30">起始月：</label>\r\n                    <select  name="start_month" class="T-search-start-month">\r\n                        {{each monthList as monthInfo}}\r\n                        <option value="{{monthInfo}}" {{if monthInfo == searchParam.start_month}}selected="selected"{{/if}}>{{monthInfo}}月</option>\r\n                        {{/each}}\r\n                    </select>\r\n                    <label class=" control-label no-padding-right marginLeft-30">结束月：</label>\r\n                    <select name="end_month" class="T-search-end-month">\r\n                        {{each monthList as monthInfo}}\r\n                        <option value="{{monthInfo}}" {{if monthInfo == searchParam.end_month}}selected="selected"{{/if}}>{{monthInfo}}月</option>\r\n                        {{/each}}\r\n                    </select>\r\n                    <button class=" btn-sm T-btn-search search-btn btn-height marginLeft-30" >\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                        搜索\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group col-sm-9" style="padding-bottom: 0">\r\n                <label class="col-sm-2" style="margin-left: -7px">总账面退补：{{searchParam.sumBackGuideMoney}}</label>\r\n                <label class="col-sm-2 ">总实际退补：{{searchParam.sumRealBackGuideMoney}}</label>\r\n                <label class="col-sm-2 ">总已结账：{{searchParam.sumAlreadyColseAccountMoney}}</label>\r\n                <label class="col-sm-2 ">总未结账：{{searchParam.sumUnCloseAccountMoney}}</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <button class="btn btn-sm btn-success T-guide-records pull-left margin-topTicket" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button>\r\n    <div style="clear: both"></div>\r\n    <table class="table table-striped table-bordered table-hover all margin-top">\r\n        <thead>\r\n        <tr>\r\n            <th class="th-border">账期</th>\r\n            <th class="th-border">预支款</th>\r\n            <th class="th-border">团队收入</th>\r\n            <th class="th-border">导游现付</th>\r\n            <th class="th-border">导服费</th>\r\n            <th class="th-border">导游返佣</th>\r\n            <th class="th-border">退补款</th>\r\n            <th class="th-border">实际退补</th>\r\n            <th class="th-border">已结账</th>\r\n            <th class="th-border">未结账</th>\r\n            <th class="th-border"> <span class="necessary">*</span>结账金额</th>\r\n            <th class="th-border">结账方式</th>\r\n            <th class="th-border">备注</th>\r\n            <th class="th-border">对账进度</th>\r\n            <th class="th-border">操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        {{each guideSettlementList as guideSettlement}}\r\n        <tr data-entity-id="{{guideSettlement.id}}">\r\n        	<td>{{guideSettlement.year}}年{{guideSettlement.month}}月</td>\r\n            <td>{{guideSettlement.guidePreMoney}}</td>\r\n            <td>{{guideSettlement.teamIncomeMoney}}</td>\r\n            <td>{{guideSettlement.guideNowPayedMoney}}</td>\r\n            <td>{{guideSettlement.guideFee}}</td>\r\n            <td>{{guideSettlement.guideShopRebateMoney}}</td>\r\n            <td>{{guideSettlement.backGuideMoney}}</td>\r\n            <td>{{guideSettlement.realBackGuideMoney}}</td>\r\n            <td>{{guideSettlement.alreadyColseAccountMoney}}</td>\r\n            <td>{{guideSettlement.unCloseAccountMoney}}</td>\r\n            <td class="col-sm-1"><input name="payMoney" type="text" class="col-sm-12" maxlength="9"></td>\r\n            <td>\r\n                <label class=" control-label no-padding-right" >\r\n                    <select name="payType">\r\n                        <option>转账</option>\r\n                        <option>在线支付</option>\r\n                        <option>线下付款</option>\r\n                    </select>\r\n                </label>\r\n            </td>\r\n            <td class="col-sm-1"><input name="remark" type="text" class="col-sm-12" maxlength="1000"></td>\r\n            <td>\r\n           			{{if guideSettlement.allCount != guideSettlement.checkedCount}}\r\n                      <span style="color:#ff9900"> {{guideSettlement.checkedCount}}{{"/"}}{{guideSettlement.allCount}}</span>\r\n                    {{/if}}\r\n                    {{if guideSettlement.allCount == guideSettlement.checkedCount}}\r\n                      <span style="color:green"> {{guideSettlement.checkedCount}}{{"/"}}{{guideSettlement.allCount}}</span>\r\n                    {{/if}}\r\n            </td>\r\n            <td>\r\n                <a data-entity-id="{{guideSettlement.id}}" class="cursor T-action T-save buttonHeight" style="border:none">\r\n                保存\r\n                </a><a class="class"> |</a>\r\n                <a data-entity-year="{{guideSettlement.year}}" data-entity-month="{{guideSettlement.month}}" style="border:none" class="cursor btn-transfter T-action T-checkDetail buttonHeight">\r\n                   	 			对账明细\r\n                </a>\r\n            </td>\r\n        </tr>\r\n		{{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});