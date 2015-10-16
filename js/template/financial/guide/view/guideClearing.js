/*TMODJS:{"debug":true,"version":60,"md5":"ec54a5d4f84d63744d6b1508f81b5748"}*/
define(function(require) {
    return require("../../../template")("financial/guide/view/guideClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, yearList = $data.yearList, guideSettlementList = ($data.year, 
            $data.$index, $data.guideSettlementList), $out = ($data.guideSettlement, "");
            return $out += '<div class= "row Cleaning globalAdd"> <div class="col-sm-12 border borderNormal" > <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label style="float: left;margin: 5px auto auto 15px" class=" control-label "> 导游：', 
            $line = 5, $out += $escape(searchParam.guideName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select name="year" class="col-sm-1"> ', 
            $line = 8, $each(yearList, function(year) {
                $out += ' <option value="', $line = 9, $out += $escape(year), $out += '">', $line = 9, 
                $out += $escape(year), $out += "</option> ", $line = 10;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right">起始月：</label> <select class="col-sm-1" name="start_month"> <option value="1">1月</option> <option value="2">2月</option> <option value="3">3月</option> <option value="4">4月</option> <option value="5">5月</option> <option value="6">6月</option> <option value="7">7月</option> <option value="8">8月</option> <option value="9">9月</option> <option value="10">10月</option> <option value="11">11月</option> <option value="12">12月</option> </select> <label class="col-sm-1 control-label no-padding-right">结束月：</label> <select style="margin-left: 20px" class="col-sm-1" name="end_month"> <option value="1">1月</option> <option value="2">2月</option> <option value="3">3月</option> <option value="4">4月</option> <option value="5">5月</option> <option value="6">6月</option> <option value="7">7月</option> <option value="8">8月</option> <option value="9">9月</option> <option value="10">10月</option> <option value="11">11月</option> <option value="12">12月</option> </select> <button class=" btn-sm btn-guideSettlement-search search-btn btn-height" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group col-sm-9" style="padding-bottom: 0"> <label class="col-sm-2" >总账面退补：', 
            $line = 52, $out += $escape(searchParam.sumBackGuideMoney), $out += '</label> <label class="col-sm-2 ">总实际退补：', 
            $line = 53, $out += $escape(searchParam.sumRealBackGuideMoney), $out += '</label> <label class="col-sm-2 ">总已结账：', 
            $line = 54, $out += $escape(searchParam.sumAlreadyColseAccountMoney), $out += '</label> <label class="col-sm-2 ">总未结账：', 
            $line = 55, $out += $escape(searchParam.sumUnCloseAccountMoney), $out += '</label> </div> </form> </div> <button class="btn btn-sm btn-success btn-guide-records" style="float: right;margin-top: 10px;padding-top:0px;"> <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th>账期</th> <th>预支款</th> <th>团队收入</th> <th>导游现付</th> <th>导服费</th> <th>导游返佣</th> <th>退补款</th> <th>实际退补</th> <th>已结账</th> <th>未结账</th> <th> <span class="necessary">*</span>结账金额</th> <th>结账方式</th> <th>备注</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 82, $each(guideSettlementList, function(guideSettlement) {
                $out += ' <tr data-entity-id="', $line = 83, $out += $escape(guideSettlement.id), 
                $out += '"> <td>', $line = 84, $out += $escape(guideSettlement.year), $out += "年", 
                $line = 84, $out += $escape(guideSettlement.month), $out += "月</td> <td>", $line = 85, 
                $out += $escape(guideSettlement.guidePreMoney), $out += "</td> <td>", $line = 86, 
                $out += $escape(guideSettlement.teamIncomeMoney), $out += "</td> <td>", $line = 87, 
                $out += $escape(guideSettlement.guideNowPayedMoney), $out += "</td> <td>", $line = 88, 
                $out += $escape(guideSettlement.guideFee), $out += "</td> <td>", $line = 89, $out += $escape(guideSettlement.guideShopRebateMoney), 
                $out += "</td> <td>", $line = 90, $out += $escape(guideSettlement.backGuideMoney), 
                $out += "</td> <td>", $line = 91, $out += $escape(guideSettlement.realBackGuideMoney), 
                $out += "</td> <td>", $line = 92, $out += $escape(guideSettlement.alreadyColseAccountMoney), 
                $out += "</td> <td>", $line = 93, $out += $escape(guideSettlement.unCloseAccountMoney), 
                $out += '</td> <td class="col-sm-1"><input name="payMoney" type="text" class="col-sm-12" maxlength="9"></td> <td> <label class=" control-label no-padding-right" > <select name="payType"> <option>转账</option> <option>在线支付</option> <option>线下付款</option> </select> </label> </td> <td class="col-sm-1"><input name="remark" type="text" class="col-sm-12" maxlength="1000"></td> <td> ', 
                $line = 106, guideSettlement.allCount != guideSettlement.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 107, $out += $escape(guideSettlement.checkedCount), $line = 107, $out += $escape("/"), 
                $line = 107, $out += $escape(guideSettlement.allCount), $out += "</span> ", $line = 108), 
                $out += " ", $line = 109, guideSettlement.allCount == guideSettlement.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 110, $out += $escape(guideSettlement.checkedCount), $line = 110, $out += $escape("/"), 
                $line = 110, $out += $escape(guideSettlement.allCount), $out += "</span> ", $line = 111), 
                $out += ' </td> <td> <button data-entity-id="', $line = 114, $out += $escape(guideSettlement.id), 
                $out += '" class="btn btn-primary btn-sm btn-settlement-save buttonHeight" style="border:none"> 保存 </button> <button data-entity-year="', 
                $line = 117, $out += $escape(guideSettlement.year), $out += '" data-entity-month="', 
                $line = 117, $out += $escape(guideSettlement.month), $out += '" style="border:none" class="btn btn-primary btn-sm btn-transfter btn-guide-checkDetail buttonHeight"> 对账明细 </button> </td> </tr> ', 
                $line = 122;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row Cleaning globalAdd">\r\n    <div class="col-sm-12 border borderNormal" >\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n                <div class="form-group"> <label style="float: left;margin: 5px auto auto 15px" class=" control-label "> 导游：{{searchParam.guideName}}</label>\r\n                    <label class="col-sm-1 control-label no-padding-right">账期：</label>\r\n                    <select name="year" class="col-sm-1">\r\n					    {{each yearList as year}}\r\n						<option value="{{year}}">{{year}}</option>\r\n						{{/each}} \r\n					</select>\r\n                    <label class="col-sm-1 control-label no-padding-right">起始月：</label>\r\n                    <select class="col-sm-1" name="start_month">\r\n                        <option value="1">1月</option>\r\n                        <option value="2">2月</option>\r\n                        <option value="3">3月</option>\r\n                        <option value="4">4月</option>\r\n                        <option value="5">5月</option>\r\n                        <option value="6">6月</option>\r\n                        <option value="7">7月</option>\r\n                        <option value="8">8月</option>\r\n                        <option value="9">9月</option>\r\n                        <option value="10">10月</option>\r\n                        <option value="11">11月</option>\r\n                        <option value="12">12月</option>\r\n                    </select>\r\n                    <label class="col-sm-1 control-label no-padding-right">结束月：</label>\r\n                    <select style="margin-left: 20px" class="col-sm-1" name="end_month">\r\n                        <option value="1">1月</option>\r\n                        <option value="2">2月</option>\r\n                        <option value="3">3月</option>\r\n                        <option value="4">4月</option>\r\n                        <option value="5">5月</option>\r\n                        <option value="6">6月</option>\r\n                        <option value="7">7月</option>\r\n                        <option value="8">8月</option>\r\n                        <option value="9">9月</option>\r\n                        <option value="10">10月</option>\r\n                        <option value="11">11月</option>\r\n                        <option value="12">12月</option>\r\n                    </select>\r\n                    <button class=" btn-sm btn-guideSettlement-search search-btn btn-height" >\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                        搜索\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group col-sm-9" style="padding-bottom: 0">\r\n                <label class="col-sm-2" >总账面退补：{{searchParam.sumBackGuideMoney}}</label>\r\n                <label class="col-sm-2 ">总实际退补：{{searchParam.sumRealBackGuideMoney}}</label>\r\n                <label class="col-sm-2 ">总已结账：{{searchParam.sumAlreadyColseAccountMoney}}</label>\r\n                <label class="col-sm-2 ">总未结账：{{searchParam.sumUnCloseAccountMoney}}</label>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n    <button class="btn btn-sm btn-success btn-guide-records" style="float: right;margin-top: 10px;padding-top:0px;"> <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button>\r\n    <table class="table table-striped table-bordered table-hover all">\r\n        <thead>\r\n        <tr>\r\n		<th>账期</th>\r\n		<th>预支款</th>\r\n		<th>团队收入</th>\r\n		<th>导游现付</th>\r\n		<th>导服费</th>\r\n		<th>导游返佣</th>\r\n		<th>退补款</th>\r\n		<th>实际退补</th>\r\n		<th>已结账</th>\r\n		<th>未结账</th>\r\n		<th> <span class="necessary">*</span>结账金额</th>\r\n		<th>结账方式</th>\r\n		<th>备注</th>\r\n		<th>对账进度</th>\r\n		<th>操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each guideSettlementList as guideSettlement}}\r\n        <tr data-entity-id="{{guideSettlement.id}}">\r\n        	<td>{{guideSettlement.year}}年{{guideSettlement.month}}月</td>\r\n            <td>{{guideSettlement.guidePreMoney}}</td>\r\n            <td>{{guideSettlement.teamIncomeMoney}}</td>\r\n            <td>{{guideSettlement.guideNowPayedMoney}}</td>\r\n            <td>{{guideSettlement.guideFee}}</td>\r\n            <td>{{guideSettlement.guideShopRebateMoney}}</td>\r\n            <td>{{guideSettlement.backGuideMoney}}</td>\r\n            <td>{{guideSettlement.realBackGuideMoney}}</td>\r\n            <td>{{guideSettlement.alreadyColseAccountMoney}}</td>\r\n            <td>{{guideSettlement.unCloseAccountMoney}}</td>\r\n            <td class="col-sm-1"><input name="payMoney" type="text" class="col-sm-12" maxlength="9"></td>\r\n            <td>\r\n                <label class=" control-label no-padding-right" >\r\n                    <select name="payType">\r\n                        <option>转账</option>\r\n                        <option>在线支付</option>\r\n                        <option>线下付款</option>\r\n                    </select>\r\n                </label>\r\n            </td>\r\n            <td class="col-sm-1"><input name="remark" type="text" class="col-sm-12" maxlength="1000"></td>\r\n            <td>\r\n           			{{if guideSettlement.allCount != guideSettlement.checkedCount}}\r\n                      <span style="color:#ff9900"> {{guideSettlement.checkedCount}}{{"/"}}{{guideSettlement.allCount}}</span>\r\n                    {{/if}}\r\n                    {{if guideSettlement.allCount == guideSettlement.checkedCount}}\r\n                      <span style="color:green"> {{guideSettlement.checkedCount}}{{"/"}}{{guideSettlement.allCount}}</span>\r\n                    {{/if}}\r\n            </td>\r\n            <td>\r\n                <button data-entity-id="{{guideSettlement.id}}" class="btn btn-primary btn-sm btn-settlement-save buttonHeight" style="border:none">\r\n                                                                保存\r\n                </button>\r\n                <button data-entity-year="{{guideSettlement.year}}" data-entity-month="{{guideSettlement.month}}" style="border:none" class="btn btn-primary btn-sm btn-transfter btn-guide-checkDetail buttonHeight">\r\n                   	 			对账明细\r\n                </button>\r\n            </td>\r\n        </tr>\r\n		{{/each}} \r\n        </tbody>\r\n    </table>\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});