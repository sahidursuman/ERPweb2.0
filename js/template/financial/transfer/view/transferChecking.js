/*TMODJS:{"debug":true,"version":59,"md5":"bc1a62fff0f1dc2c197ceadc5cf26401"}*/
define(function(require) {
    return require("../../../template")("financial/transfer/view/transferChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, partnerAgencyName = $data.partnerAgencyName, sumPerson = $data.sumPerson, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumPunishMoney = $data.sumPunishMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, $each = $utils.$each, financialTransferList = $data.financialTransferList, $out = ($data.rs, 
            $data.$index, $data.tf, $data.of, $data.index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.partnerAgencyId), 
            $out += '" data-name="', $line = 1, $out += $escape(partnerAgencyName), $out += '"> <div class="col-xs-12" style="padding-bottom: 0px"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area T-search-area"> <div class="form-group"> <label class="control-label pull-left "> 同行地接：</label> <input type="text" class="mar-r-10" name="partnerAgencyName" value="', 
            $line = 7, $out += $escape(partnerAgencyName), $out += '" /> <input value="', $line = 8, 
            $out += $escape(searchParam.partnerAgencyId), $out += '" name="partnerAgencyId" type="hidden"> <label>账期：</label> <input class="date-picker mar-r-10" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker mar-r-10" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 12, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <label>线路名称：</label> <input name="lineProductName" class="mar-r-10" placeholder="线路名称" type="text" value="', 
            $line = 14, " " == searchParam.lineProductName ? ($out += "全部", $line = 14) : ($line = 14, 
            $out += $escape(searchParam.lineProductName), $line = 14), $out += '" style="width:200px;" /> <input name="lineProductId" type="hidden" /> </div> <div class="form-group"> <label>操作人：</label> <input name="operateName" class="mar-r-10" type="text" value="', 
            $line = 19, " " == searchParam.operateName ? ($out += "全部", $line = 19) : ($line = 19, 
            $out += $escape(searchParam.operateName), $line = 19), $out += '" style="width:100px;" /> <input name="operateId" type="hidden" value="', 
            $line = 20, $out += $escape(searchParam.operateId), $out += '" /> <label>收客单号：</label> <input name="orderNumber" class="mar-r-10" type="text" value="', 
            $line = 22, $out += $escape(searchParam.orderNumber), $out += '" style="width:100px;" /> <button class=" btn-sm search-btn T-search mar-r-10"> <i class="ace-icon fa fa-search"></i>搜索 </button> <button class="btn-sm search-btn T-btn-export ">导出报表</button> <input name="accountStatus" value="', 
            $line = 27, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class="mar-r-20">人数合计：<span class="F-float F-count">', 
            $line = 33, $out += $escape(sumPerson), $out += '</span></label> <label class="mar-r-20">外转金额合计：<span class="F-float F-money">', 
            $line = 34, $out += $escape(sumNeedPayMoney), $out += '</span></label> <label class="mar-r-20">已付金额合计：<span class="F-float F-money">', 
            $line = 35, $out += $escape(sumPayedMoney), $out += '</span></label> <label class="mar-r-20">返款金额合计：<span class="T-sumBackMoney F-float F-money">', 
            $line = 36, $out += $escape(sumPunishMoney), $out += '</span></label> <label class="mar-r-20">结算金额合计：<span class="T-sumSettlementMoney F-float F-money">', 
            $line = 37, $out += $escape(sumSettlementMoney), $out += '</span></label> <label >未付金额合计：<span class="T-sumUnReceivedMoney F-float F-money">', 
            $line = 38, $out += $escape(sumUnPayedMoney), $out += '</span></label> </div> </form> </div> <div class="overflow-x min-w-1050"> <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th>收客单号</th> <th>线路产品</th> <th width="110">出游日期</th> <th>客户</th> <th>人数</th> <th>操作人</th> <th width="110">操作时间</th> <th>外转金额</th> <th>明细</th> <th>已付金额</th> <th> <span class="necessary">*</span>返款金额</th> <th>结算金额</th> <th>未付金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th width="110">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1300005"> ', 
            $line = 66, $each(financialTransferList, function(rs) {
                $out += ' <tr class="T-checkTr ', $line = 67, rs.change && ($out += "success", $line = 67), 
                $out += '" data-id="', $line = 67, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 67, $out += $escape(rs.isConfirmAccount), $out += '" ', $line = 67, rs.change && ($out += 'change="true"', 
                $line = 67), $out += " ", $line = 67, rs.outFeeList.length > 0 && ($out += 'data-trans="true"', 
                $line = 67), $out += '> <td rowspan="', $line = 68, $out += $escape(rs.rowLen), 
                $out += '"><a class="T-option T-orderNumber" data-id="', $line = 68, $out += $escape(rs.arrangeId), 
                $out += '">', $line = 68, $out += $escape(rs.orderNumber), $out += '</a></td> <td rowspan="', 
                $line = 69, $out += $escape(rs.rowLen), $out += '">', $line = 69, $out += $escape(rs.lineProductName), 
                $out += '</td> <td rowspan="', $line = 70, $out += $escape(rs.rowLen), $out += '">', 
                $line = 70, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 71, $out += $escape(rs.rowLen), $out += '">', 
                $line = 71, null == rs.partnerAgencyName || "" == rs.partnerAgencyName ? ($out += "-", 
                $line = 71) : ($line = 71, $out += $escape(rs.partnerAgencyName), $line = 71), $out += '</td> <td rowspan="', 
                $line = 72, $out += $escape(rs.rowLen), $out += '"> <a href="#" class="T-option T-viewGroup" data-list="', 
                $line = 73, $out += $escape(rs.memberList), $out += '" title="查看小组"> <span class="F-float F-count">', 
                $line = 74, $out += $escape(rs.adultCount), $out += '</span> 大 <span class="F-float F-count">', 
                $line = 75, $out += $escape(rs.childCount), $out += '</span> 小 </a> </td> <td rowspan="', 
                $line = 78, $out += $escape(rs.rowLen), $out += '">', $line = 78, $out += $escape(rs.operateName), 
                $out += '</td> <td rowspan="', $line = 79, $out += $escape(rs.rowLen), $out += '">', 
                $line = 79, $out += $escape($helpers.dateFormat(rs.operateTime, "yyyy-MM-dd")), 
                $out += '</td> <td rowspan="', $line = 80, $out += $escape(rs.rowLen), $out += '"><span class="F-float F-money">', 
                $line = 80, $out += $escape(rs.needPayMoney), $out += "</span></td> <td>", $line = 81, 
                rs.outFeeList.length > 0 ? ($out += "  ", $line = 83, $each(rs.outFeeList, function(tf) {
                    $out += " ", $line = 83, $out += $escape(tf.describe), $out += '： <span class="F-float F-money">', 
                    $line = 84, $out += $escape(tf.price), $out += '</span> x <span class="F-float F-count">', 
                    $line = 85, $out += $escape(tf.count), $out += '</span> = <span class="F-float F-money">', 
                    $line = 86, $out += $escape(tf.price * tf.count), $out += "</span> <br> ", $line = 87;
                }), $out += " ", $line = 87, 0 == rs.otherFeeList.length && ($out += '<a data-id="', 
                $line = 87, $out += $escape(rs.id), $out += '" class="cursor T-addFee R-right" data-right="1300006">[费用调整]</a>', 
                $line = 87), $line = 87) : rs.otherFeeList.length > 0 ? ($out += "  ", $line = 89, 
                $each(rs.otherFeeList, function(of) {
                    $out += " ", $line = 89, $out += $escape(of.describe), $out += '： <span class="F-float F-money">', 
                    $line = 90, $out += $escape(of.price), $out += '</span>x <span class="F-float F-count">', 
                    $line = 91, $out += $escape(of.count), $out += '</span>= <span class="F-float F-money">', 
                    $line = 92, $out += $escape(of.price * of.count), $out += "</span> <br> ", $line = 93;
                }), $out += ' <a data-id="', $line = 93, $out += $escape(rs.id), $out += '" class="cursor T-addFee R-right" data-right="1300006">[费用调整]</a>', 
                $line = 93) : ($out += ' - <br><a data-id="', $line = 94, $out += $escape(rs.id), 
                $out += '" class="cursor T-addFee R-right" data-right="1300006">[费用调整]</a>', $line = 94), 
                $out += ' </td> <td rowspan="', $line = 96, $out += $escape(rs.rowLen), $out += '"><a class="T-option T-payedDetail" data-money="', 
                $line = 96, $out += $escape(rs.payedMoney), $out += '">', $line = 96, $out += $escape("社付："), 
                $out += '<span class="F-float F-money">', $line = 96, $out += $escape(rs.payedMoney), 
                $out += "</span></a></td> ", $line = 97, rs.outFeeList.length > 0 ? ($out += '  <td> <input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 100, $out += $escape(rs.outTransferBackMoney), $out += '" name="settlementMoney" ', 
                $line = 100, rs.isConfirmAccount && ($out += ' disabled="disabled" ', $line = 100), 
                $out += '> </td> <td class="T-settlementMoney F-float F-money">', $line = 102, $out += $escape(rs.outTransferSettlementMoney), 
                $out += "</td> ", $line = 103) : ($out += '  <td> <input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 106, $out += $escape(rs.punishMoney), $out += '" name="settlementMoney" ', 
                $line = 106, rs.isConfirmAccount && ($out += ' disabled="disabled" ', $line = 106), 
                $out += '> </td> <td class="T-settlementMoney F-float F-money">', $line = 108, $out += $escape(rs.settlementMoney), 
                $out += "</td> ", $line = 109), $out += ' <td rowspan="', $line = 110, $out += $escape(rs.rowLen), 
                $out += '"><span class="T-unReceivedMoney F-float F-money">', $line = 110, $out += $escape(rs.unPayedMoney), 
                $out += '</span></td> <td rowspan="', $line = 111, $out += $escape(rs.rowLen), $out += '"> <textarea class="col-sm-12 hct-textarea T-remark" name="checkRemark" maxlength="1000">', 
                $line = 112, $out += $escape(rs.checkRemark), $out += '</textarea> </td> <td rowspan="', 
                $line = 114, $out += $escape(rs.rowLen), $out += '">', $line = 114, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", 
                $line = 114) : ($line = 114, $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 114), $out += '</td> <td rowspan="', $line = 115, $out += $escape(rs.rowLen), 
                $out += '">', $line = 115, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 115) : ($line = 115, $out += $escape(rs.checkUserName), $line = 115), $out += '</td> <td rowspan="', 
                $line = 116, $out += $escape(rs.rowLen), $out += '"> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 118, (rs.change && 1 == rs.isChecked || !rs.change && 1 == rs.isConfirmAccount) && ($out += 'checked="checked" ', 
                $line = 118), $out += ' /> <span class="lbl">对账</span> </label> <label>|</label> <a class="T-option T-needPayDetail">查看</a> </td> </tr> ', 
                $line = 125, rs.outFeeList.length > 0 && rs.otherFeeList.length > 0 && ($out += "  <tr ", 
                $line = 127, rs.change && ($out += 'class="success"', $line = 127), $out += "> <td>", 
                $line = 128, $each(rs.otherFeeList, function(of) {
                    $out += " ", $line = 128, $out += $escape(of.describe), $out += '： <span class="F-float F-money">', 
                    $line = 129, $out += $escape(of.price), $out += '</span> x <span class="F-float F-count">', 
                    $line = 130, $out += $escape(of.count), $out += '</span> = <span class="F-float F-money">', 
                    $line = 131, $out += $escape(of.price * of.count), $out += "</span> <br> ", $line = 132;
                }), $out += '<a data-id="', $line = 132, $out += $escape(rs.id), $out += '" class="cursor T-addFee R-right" data-right="1300006">[费用调整]</a> </td> <td> <input type="text" class="col-sm-12 T-refund money F-float F-money" value="', 
                $line = 135, $out += $escape(rs.punishMoney), $out += '" name="settlementMoney" ', 
                $line = 135, rs.isConfirmAccount && ($out += ' disabled="disabled" ', $line = 135), 
                $out += '> </td> <td class="T-settlementMoney F-float F-money">', $line = 137, $out += $escape(rs.settlementMoney), 
                $out += "</td> </tr> ", $line = 139), $out += " ", $line = 139;
            }), $out += ' </tbody> </table> </div> <div class="clearfix"></div> <div class="row pageMode" style="padding-top: 15px;"> <div class="col-xs-6"> <small>共计 ', 
            $line = 146, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <div class="form-group text-right"> <label class="control-label pull-right" style="margin-right:20px;"> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span> 全选 </label> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i>确认对账 </button> </div> </form> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.partnerAgencyId}}" data-name="{{partnerAgencyName}}">\r\n    <div class="col-xs-12" style="padding-bottom: 0px">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area T-search-area">\r\n                <div class="form-group">\r\n                    <label class="control-label pull-left "> 同行地接：</label>\r\n                    <input type="text" class="mar-r-10" name="partnerAgencyName" value="{{partnerAgencyName}}" />\r\n                    <input value="{{searchParam.partnerAgencyId}}" name="partnerAgencyId" type="hidden">\r\n                    <label>账期：</label>\r\n                    <input class="date-picker mar-r-10" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker mar-r-10" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />\r\n                    <label>线路名称：</label>\r\n                    <input name="lineProductName" class="mar-r-10" placeholder="线路名称" type="text" value="{{if searchParam.lineProductName == " "}}全部{{else}}{{searchParam.lineProductName}}{{/if}}" style="width:200px;" />\r\n                    <input name="lineProductId" type="hidden" />\r\n                </div>\r\n                <div class="form-group">\r\n                    <label>操作人：</label>\r\n                    <input name="operateName" class="mar-r-10" type="text" value="{{if searchParam.operateName == " "}}全部{{else}}{{searchParam.operateName}}{{/if}}" style="width:100px;" />\r\n                    <input name="operateId" type="hidden" value="{{searchParam.operateId}}" />\r\n                    <label>收客单号：</label>\r\n                    <input name="orderNumber" class="mar-r-10" type="text" value="{{searchParam.orderNumber}}" style="width:100px;" />\r\n                    <button class=" btn-sm search-btn T-search mar-r-10">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                    <button class="btn-sm search-btn T-btn-export ">导出报表</button>\r\n                    <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class="mar-r-20">人数合计：<span class="F-float F-count">{{sumPerson}}</span></label>\r\n                <label class="mar-r-20">外转金额合计：<span class="F-float F-money">{{sumNeedPayMoney}}</span></label>\r\n                <label class="mar-r-20">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}}</span></label>\r\n                <label class="mar-r-20">返款金额合计：<span class="T-sumBackMoney F-float F-money">{{sumPunishMoney}}</span></label>\r\n                <label class="mar-r-20">结算金额合计：<span class="T-sumSettlementMoney F-float F-money">{{sumSettlementMoney}}</span></label>\r\n                <label >未付金额合计：<span class="T-sumUnReceivedMoney F-float F-money">{{sumUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <div class="overflow-x min-w-1050">\r\n        <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500">\r\n            <thead>\r\n                <tr class="T-tr-fixed bg-blur">\r\n                    <th>收客单号</th>\r\n                    <th>线路产品</th>\r\n                    <th width="110">出游日期</th>\r\n                    <th>客户</th>\r\n                    <th>人数</th>\r\n                    <th>操作人</th>\r\n                    <th width="110">操作时间</th>\r\n                    <th>外转金额</th>\r\n                    <th>明细</th>\r\n                    <th>已付金额</th>\r\n                    <th> <span class="necessary">*</span>返款金额</th>\r\n                    <th>结算金额</th>\r\n                    <th>未付金额</th>\r\n                    <th>备注</th>\r\n                    <th>对账时间</th>\r\n                    <th>对账人</th>\r\n                    <th width="110">对账</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-checkList" data-right="1300005">\r\n                {{each financialTransferList as rs}}\r\n                <tr class="T-checkTr {{if rs.change}}success{{/if}}" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}" {{if rs.change}}change="true"{{/if}} {{if rs.outFeeList.length> 0}}data-trans="true"{{/if}}>\r\n                    <td rowspan="{{rs.rowLen}}"><a class="T-option T-orderNumber" data-id="{{rs.arrangeId}}">{{rs.orderNumber}}</a></td>\r\n                    <td rowspan="{{rs.rowLen}}">{{rs.lineProductName}}</td>\r\n                    <td rowspan="{{rs.rowLen}}">{{rs.accountTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                    <td rowspan="{{rs.rowLen}}">{{if rs.partnerAgencyName == null || rs.partnerAgencyName == ""}}-{{else}}{{rs.partnerAgencyName}}{{/if}}</td>\r\n                    <td rowspan="{{rs.rowLen}}">\r\n                        <a href="#" class="T-option T-viewGroup" data-list="{{rs.memberList}}" title="查看小组">\r\n                            <span class="F-float F-count">{{rs.adultCount}}</span> 大\r\n                            <span class="F-float F-count">{{rs.childCount}}</span> 小\r\n                        </a>\r\n                    </td>\r\n                    <td rowspan="{{rs.rowLen}}">{{rs.operateName}}</td>\r\n                    <td rowspan="{{rs.rowLen}}">{{rs.operateTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n                    <td rowspan="{{rs.rowLen}}"><span class="F-float F-money">{{rs.needPayMoney}}</span></td>\r\n                    <td>{{if rs.outFeeList.length > 0}}\r\n                        <!-- 若有中转结算价 -->\r\n                        {{each rs.outFeeList as tf}} {{tf.describe}}：\r\n                        <span class="F-float F-money">{{tf.price}}</span> x\r\n                        <span class="F-float F-count">{{tf.count}}</span> =\r\n                        <span class="F-float F-money">{{tf.price * tf.count}}</span>\r\n                        <br> {{/each}} {{if rs.otherFeeList.length == 0}}<a data-id="{{rs.id}}" class="cursor T-addFee R-right" data-right="1300006">[费用调整]</a>{{/if}}{{else if rs.otherFeeList.length > 0}}\r\n                        <!-- 若无中转结算价 -->\r\n                        {{each rs.otherFeeList as of index}} {{of.describe}}：\r\n                        <span class="F-float F-money">{{of.price}}</span>x\r\n                        <span class="F-float F-count">{{of.count}}</span>=\r\n                        <span class="F-float F-money">{{of.price * of.count}}</span>\r\n                        <br> {{/each}} <a data-id="{{rs.id}}" class="cursor T-addFee R-right" data-right="1300006">[费用调整]</a>{{else}}\r\n                        <!-- 若无费用明细 -->- <br><a data-id="{{rs.id}}" class="cursor T-addFee R-right" data-right="1300006">[费用调整]</a>{{/if}}\r\n                    </td>\r\n                    <td rowspan="{{rs.rowLen}}"><a class="T-option T-payedDetail" data-money="{{rs.payedMoney}}">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span></a></td>\r\n                    {{if rs.outFeeList.length > 0}}\r\n                    <!-- 若有中转结算价 -->\r\n                    <td>\r\n                        <input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{rs.outTransferBackMoney}}" name="settlementMoney" {{if rs.isConfirmAccount}} disabled="disabled" {{/if}}>\r\n                    </td>\r\n                    <td class="T-settlementMoney F-float F-money">{{rs.outTransferSettlementMoney}}</td>\r\n                    {{else}}\r\n                    <!-- 若无费用明细 -->\r\n                    <td>\r\n                        <input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{rs.punishMoney}}" name="settlementMoney" {{if rs.isConfirmAccount}} disabled="disabled" {{/if}}>\r\n                    </td>\r\n                    <td class="T-settlementMoney F-float F-money">{{rs.settlementMoney}}</td>\r\n                    {{/if}}\r\n                    <td rowspan="{{rs.rowLen}}"><span class="T-unReceivedMoney F-float F-money">{{rs.unPayedMoney}}</span></td>\r\n                    <td rowspan="{{rs.rowLen}}">\r\n                        <textarea class="col-sm-12 hct-textarea T-remark" name="checkRemark" maxlength="1000">{{rs.checkRemark}}</textarea>\r\n                    </td>\r\n                    <td rowspan="{{rs.rowLen}}">{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat: \'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                    <td rowspan="{{rs.rowLen}}">{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                    <td rowspan="{{rs.rowLen}}">\r\n                        <label class="pos-rel">\r\n                            <input type="checkbox" class="ace T-checkbox" {{if (rs.change && rs.isChecked == 1) || (!rs.change && rs.isConfirmAccount == 1)}}checked="checked" {{/if}} />\r\n                            <span class="lbl">对账</span>\r\n                        </label>\r\n                        <label>|</label>\r\n                        <a class="T-option T-needPayDetail">查看</a>\r\n                    </td>\r\n                </tr>\r\n                {{if rs.outFeeList.length > 0 && rs.otherFeeList.length > 0}}\r\n                <!-- 若有中转结算价 -->\r\n                <tr {{if rs.change}}class="success"{{/if}}>\r\n                    <td>{{each rs.otherFeeList as of}} {{of.describe}}：\r\n                        <span class="F-float F-money">{{of.price}}</span> x\r\n                        <span class="F-float F-count">{{of.count}}</span> =\r\n                        <span class="F-float F-money">{{of.price * of.count}}</span>\r\n                        <br> {{/each}}<a data-id="{{rs.id}}" class="cursor T-addFee R-right" data-right="1300006">[费用调整]</a>\r\n                    </td>\r\n                    <td>\r\n                        <input type="text" class="col-sm-12 T-refund money F-float F-money" value="{{rs.punishMoney}}" name="settlementMoney" {{if rs.isConfirmAccount}} disabled="disabled" {{/if}}>\r\n                    </td>\r\n                    <td class="T-settlementMoney F-float F-money">{{rs.settlementMoney}}</td>\r\n                </tr>\r\n                {{/if}} {{/each}}\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode" style="padding-top: 15px;">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="form-group text-right">\r\n        <label class="control-label pull-right" style="margin-right:20px;">\r\n            <input type="checkbox" class="ace pull-right T-checkAll">\r\n            <span class="lbl"></span> 全选\r\n        </label>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});