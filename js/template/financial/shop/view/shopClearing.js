/*TMODJS:{"debug":true,"version":92,"md5":"af6dc71473485d61bdbba9e1188cf2e0"}*/
define(function(require) {
    return require("../../../template")("financial/shop/view/shopClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, yearList = $data.yearList, shopSettlementList = ($data.year, 
            $data.$index, $data.shopSettlementList), $out = ($data.shopSettlement, "");
            return $out += '<div class= "row Cleaning"> <div class="col-sm-12 border" > <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label class=" control-label pull-left" style="margin-left: 15px"> 购物店：', 
            $line = 5, $out += $escape(searchParam.shopName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select name="year" class="col-sm-1"> ', 
            $line = 9, $each(yearList, function(year) {
                $out += ' <option value="', $line = 10, $out += $escape(year), $out += '">', $line = 10, 
                $out += $escape(year), $out += "</option> ", $line = 11;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right">起始月：</label> <select class="col-sm-1" name="start_month"> <option value="1">1月</option> <option value="2">2月</option> <option value="3">3月</option> <option value="4">4月</option> <option value="5">5月</option> <option value="6">6月</option> <option value="7">7月</option> <option value="8">8月</option> <option value="9">9月</option> <option value="10">10月</option> <option value="11">11月</option> <option value="12">12月</option> </select> <label class="col-sm-1 control-label no-padding-right">结束月：</label> <select style="margin-left: 20px" class="col-sm-1" name="end_month"> <option value="1">1月</option> <option value="2">2月</option> <option value="3">3月</option> <option value="4">4月</option> <option value="5">5月</option> <option value="6">6月</option> <option value="7">7月</option> <option value="8">8月</option> <option value="9">9月</option> <option value="10">10月</option> <option value="11">11月</option> <option value="12">12月</option> </select> <button class="btn-height btn-sm search-btn btn-arrangeTourist-search btn-shopSettlement-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group " > <label class=" control-label" style="margin-left: 8px">总人数：', 
            $line = 54, $out += $escape(searchParam.sumPersonCount), $out += '</label> <label class=" control-label" style="margin-left: 8px">总购物金额：', 
            $line = 55, $out += $escape(searchParam.sumConsumeMoney), $out += '</label> <label class=" control-label" style="margin-left: 8px">总社佣：', 
            $line = 56, $out += $escape(searchParam.sumTravelAgencyRebateMoney), $out += '</label> <label class=" control-label" style="margin-left: 8px">总导佣：', 
            $line = 57, $out += $escape(searchParam.sumGuideRebateMoney), $out += '</label> <label class=" control-label" style="margin-left: 8px">总人数返佣：', 
            $line = 58, $out += $escape(searchParam.sumCustomerRebateMoney), $out += '</label> <label class=" control-label" style="margin-left: 8px">总停车返佣：', 
            $line = 59, $out += $escape(searchParam.sumParkingRebateMoney), $out += '</label> <label class=" control-label" style="margin-left: 8px">总账面返佣：', 
            $line = 60, $out += $escape(searchParam.sumRebateMoney), $out += '</label> <label class=" control-label" style="margin-left: 8px">总实际返佣：', 
            $line = 61, $out += $escape(searchParam.sumRealRebateMoney), $out += '</label> </div> </form> </div> <button class="btn btn-sm btn-success btn-shop-records pull-right" style="margin-top: 10px"> <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button> <table class="table table-striped table-bordered table-hover all col-sm-12"> <thead> <tr> <th>账期</th> <th>人数</th> <th>购物金额</th> <th>社佣</th> <th>导佣</th> <th>人数返佣</th> <th>停车返佣</th> <th>账面返佣</th> <th>实际返佣</th> <th>已结账</th> <th>未结账</th> <th> <span class="necessary">*</span>收款金额</th> <th>收款方式</th> <th>备注</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 90, $each(shopSettlementList, function(shopSettlement) {
                $out += ' <tr data-entity-id="', $line = 91, $out += $escape(shopSettlement.id), 
                $out += '"> <td>', $line = 92, $out += $escape(shopSettlement.year), $out += "年", 
                $line = 92, $out += $escape(shopSettlement.month), $out += "月</td> <td>", $line = 93, 
                $out += $escape(shopSettlement.personCount), $out += "</td> <td>", $line = 94, $out += $escape(shopSettlement.consumeMoney), 
                $out += "</td> <td>", $line = 95, $out += $escape(shopSettlement.travelAgencyRebateMoney), 
                $out += "</td> <td>", $line = 96, $out += $escape(shopSettlement.guideRebateMoney), 
                $out += "</td> <td>", $line = 97, $out += $escape(shopSettlement.customerRebateMoney), 
                $out += "</td> <td>", $line = 98, $out += $escape(shopSettlement.parkingRebateMoney), 
                $out += "</td> <td>", $line = 99, $out += $escape(shopSettlement.rebateMoney), $out += "</td> <td>", 
                $line = 100, $out += $escape(shopSettlement.realRebateMoney), $out += "</td> <td>", 
                $line = 101, $out += $escape(shopSettlement.alreadyCloseAccountMoney), $out += "</td> <td>", 
                $line = 102, $out += $escape(shopSettlement.unCloseAccountMoney), $out += '</td> <td class="col-sm-1"><input name="payMoney" maxlength="9" type="text" class="col-sm-12"></td> <td> <label class=" control-label no-padding-right" > <select name="payType"> <option>转账</option> <option>在线支付</option> <option>线下付款</option> </select> </label> </td> <td class="col-sm-1"><input name="remark" type="text" class="col-sm-12" maxlength="1000"></td> <td> ', 
                $line = 115, shopSettlement.allCount != shopSettlement.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 116, $out += $escape(shopSettlement.checkedCount), $line = 116, $out += $escape("/"), 
                $line = 116, $out += $escape(shopSettlement.allCount), $out += "</span> ", $line = 117), 
                $out += " ", $line = 118, shopSettlement.allCount == shopSettlement.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 119, $out += $escape(shopSettlement.checkedCount), $line = 119, $out += $escape("/"), 
                $line = 119, $out += $escape(shopSettlement.allCount), $out += "</span> ", $line = 120), 
                $out += ' </td> <td> <button data-entity-id="', $line = 123, $out += $escape(shopSettlement.id), 
                $out += '" class="btn btn-primary btn-sm btn-settlement-save" style="border:none"> 保存 </button> <button data-entity-year="', 
                $line = 126, $out += $escape(shopSettlement.year), $out += '" data-entity-month="', 
                $line = 126, $out += $escape(shopSettlement.month), $out += '" style="border:none" class="btn btn-primary btn-sm btn-transfter btn-shop-checkDetail"> 对账明细 </button> </td> </tr> ', 
                $line = 131;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row Cleaning">\r\n    <div class="col-sm-12  border" >\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n                <div class="form-group"> <label  class=" control-label pull-left" style="margin-left: 15px"> 购物店：{{searchParam.shopName}}</label>\r\n\r\n                    <label class="col-sm-1 control-label no-padding-right">账期：</label>\r\n                    <select name="year" class="col-sm-1">\r\n                        {{each yearList as year}}\r\n						<option value="{{year}}">{{year}}</option>\r\n						{{/each}} \r\n                    </select>\r\n                    <label class="col-sm-1 control-label no-padding-right">起始月：</label>\r\n                    <select class="col-sm-1" name="start_month">\r\n                        <option value="1">1月</option>\r\n                        <option value="2">2月</option>\r\n                        <option value="3">3月</option>\r\n                        <option value="4">4月</option>\r\n                        <option value="5">5月</option>\r\n                        <option value="6">6月</option>\r\n                        <option value="7">7月</option>\r\n                        <option value="8">8月</option>\r\n                        <option value="9">9月</option>\r\n                        <option value="10">10月</option>\r\n                        <option value="11">11月</option>\r\n                        <option value="12">12月</option>\r\n                    </select>\r\n                    <label class="col-sm-1 control-label no-padding-right">结束月：</label>\r\n                    <select style="margin-left: 20px" class="col-sm-1" name="end_month">\r\n                        <option value="1">1月</option>\r\n                        <option value="2">2月</option>\r\n                        <option value="3">3月</option>\r\n                        <option value="4">4月</option>\r\n                        <option value="5">5月</option>\r\n                        <option value="6">6月</option>\r\n                        <option value="7">7月</option>\r\n                        <option value="8">8月</option>\r\n                        <option value="9">9月</option>\r\n                        <option value="10">10月</option>\r\n                        <option value="11">11月</option>\r\n                        <option value="12">12月</option>\r\n                    </select>\r\n                    <button class="btn-height btn-sm search-btn btn-arrangeTourist-search btn-shopSettlement-search" >\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                        搜索\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group " >\r\n\r\n                <label class=" control-label" style="margin-left: 8px">总人数：{{searchParam.sumPersonCount}}</label>\r\n                <label class=" control-label" style="margin-left: 8px">总购物金额：{{searchParam.sumConsumeMoney}}</label>\r\n                <label class=" control-label" style="margin-left: 8px">总社佣：{{searchParam.sumTravelAgencyRebateMoney}}</label>\r\n                <label class=" control-label" style="margin-left: 8px">总导佣：{{searchParam.sumGuideRebateMoney}}</label>\r\n                <label class=" control-label" style="margin-left: 8px">总人数返佣：{{searchParam.sumCustomerRebateMoney}}</label>\r\n                <label class=" control-label" style="margin-left: 8px">总停车返佣：{{searchParam.sumParkingRebateMoney}}</label>\r\n                <label class=" control-label" style="margin-left: 8px">总账面返佣：{{searchParam.sumRebateMoney}}</label>\r\n                <label class=" control-label" style="margin-left: 8px">总实际返佣：{{searchParam.sumRealRebateMoney}}</label>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n    <button class="btn btn-sm btn-success btn-shop-records pull-right" style="margin-top: 10px">\r\n        <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button>\r\n    <table class="table table-striped table-bordered table-hover all col-sm-12">\r\n        <thead>\r\n        <tr>\r\n			<th>账期</th>\r\n			<th>人数</th>\r\n			<th>购物金额</th>\r\n			<th>社佣</th>\r\n			<th>导佣</th>\r\n			<th>人数返佣</th>\r\n			<th>停车返佣</th>\r\n			<th>账面返佣</th>\r\n			<th>实际返佣</th>\r\n			<th>已结账</th>\r\n			<th>未结账</th>\r\n			<th> <span class="necessary">*</span>收款金额</th>\r\n			<th>收款方式</th>\r\n			<th>备注</th>\r\n			<th>对账进度</th>\r\n			<th>操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each shopSettlementList as shopSettlement}}\r\n        <tr data-entity-id="{{shopSettlement.id}}">\r\n            <td>{{shopSettlement.year}}年{{shopSettlement.month}}月</td>\r\n            <td>{{shopSettlement.personCount}}</td>\r\n            <td>{{shopSettlement.consumeMoney}}</td>\r\n            <td>{{shopSettlement.travelAgencyRebateMoney}}</td>\r\n            <td>{{shopSettlement.guideRebateMoney}}</td>\r\n            <td>{{shopSettlement.customerRebateMoney}}</td> \r\n            <td>{{shopSettlement.parkingRebateMoney}}</td>\r\n            <td>{{shopSettlement.rebateMoney}}</td>\r\n            <td>{{shopSettlement.realRebateMoney}}</td>\r\n            <td>{{shopSettlement.alreadyCloseAccountMoney}}</td>\r\n            <td>{{shopSettlement.unCloseAccountMoney}}</td>\r\n            <td class="col-sm-1"><input name="payMoney" maxlength="9" type="text" class="col-sm-12"></td>\r\n            <td>\r\n                <label class=" control-label no-padding-right" >\r\n                    <select name="payType">\r\n                        <option>转账</option>\r\n                        <option>在线支付</option>\r\n                        <option>线下付款</option>\r\n                    </select>\r\n                </label>\r\n            </td>\r\n            <td class="col-sm-1"><input name="remark" type="text" class="col-sm-12" maxlength="1000"></td>\r\n            <td>\r\n	        	{{if shopSettlement.allCount != shopSettlement.checkedCount}}\r\n                  <span style="color:#ff9900"> {{shopSettlement.checkedCount}}{{"/"}}{{shopSettlement.allCount}}</span>\r\n                {{/if}}\r\n                {{if shopSettlement.allCount == shopSettlement.checkedCount}}\r\n                  <span style="color:green"> {{shopSettlement.checkedCount}}{{"/"}}{{shopSettlement.allCount}}</span>\r\n                {{/if}}\r\n            </td>\r\n            <td>\r\n                <button data-entity-id="{{shopSettlement.id}}" class="btn btn-primary btn-sm btn-settlement-save" style="border:none">\r\n                                                              保存\r\n                </button>\r\n                <button data-entity-year="{{shopSettlement.year}}" data-entity-month="{{shopSettlement.month}}" style="border:none" class="btn btn-primary btn-sm btn-transfter btn-shop-checkDetail">\r\n                   	 对账明细\r\n                </button>\r\n            </td>\r\n        </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});