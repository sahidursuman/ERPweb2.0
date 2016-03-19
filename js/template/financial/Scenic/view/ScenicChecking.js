/*TMODJS:{"debug":true,"version":84,"md5":"c054e3b4e656858332a3a93521d34a33"}*/
define(function(require) {
    return require("../../../template")("financial/Scenic/view/ScenicChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, scenicName = $data.scenicName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, $each = $utils.$each, financialScenicListData = $data.financialScenicListData, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.scenicId), 
            $out += '" data-name="', $line = 1, $out += $escape(scenicName), $out += '"> <div> <form class="form-inline T-search-area" role="form" onsubmit="return false"> <div class="form-group"> <label>景区：</label> <input type="text" name="scenicName" value="', 
            $line = 6, $out += $escape(scenicName), $out += '"> <input value="', $line = 7, 
            $out += $escape(searchParam.scenicId), $out += '" name="scenicId" type="hidden"> </div> <div class="form-group input-daterange marginLeft-30"> <label>账期：</label> <input type="text" name="startDate" class="form-control datepicker" name="startDate" style="width:100px;" value="', 
            $line = 11, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker" name="endDate" style="width:100px;" value="', 
            $line = 13, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <label for="">账务类别：</label> <input class="form-control" name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 17, $out += $escape(searchParam.accountInfo), $out += '" /> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> <input name="accountStatus" value="', 
            $line = 27, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <label class=" control-label pull-left">账面应付合计：<span class="F-float F-money">', 
            $line = 31, $out += $escape(sumNeedPayMoney), $out += '</span></label> <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 32, $out += $escape(sumPayedMoney), $out += '</span></label> <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">', 
            $line = 33, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">', 
            $line = 34, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">', 
            $line = 35, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </form> </div> <input type="hidden" value="', 
            $line = 38, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 39, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <table class="table table-striped table-bordered table-hover all hct_align_middle" style="margin-top: 10px"> <thead> <tr class="T-tr-fixed bg-blur"> <th>账务类别</th> <th>游玩日期(账期)</th> <th>收费项</th> <th>订单号</th> <th>单价</th> <th>数量</th> <th>优惠</th> <th>账面应付</th> <th>已付金额</th> <th>单据</th> <th><span class="necessary">*</span>结算金额</th> <th>未付金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="min-width: 110px;">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1220005"> ', 
            $line = 62, $each(financialScenicListData, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 63, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 63, $out += $escape(rs.isConfirmAccount), $out += '"> <td>', 
                $line = 64, $out += $escape(rs.tripNumber), $line = 64, $out += $escape("，"), $line = 64, 
                $out += $escape(rs.lineProductName), $line = 64, $out += $escape("，"), $line = 64, 
                $out += $escape(rs.guideName), $out += "</td> <td>", $line = 65, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", 
                $line = 65) : ($line = 65, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $line = 65), $out += "</td> <td>", $line = 66, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 67, $out += $escape(rs.orderNumber), $out += '</td> <td class="F-float F-money">', 
                $line = 68, $out += $escape(rs.price), $out += '</td> <td class="F-float F-float F-count">', 
                $line = 69, $out += $escape(rs.memberCount), $out += '</td> <td class="F-float F-money">', 
                $line = 70, null == rs.reduceMoney || "" == rs.reduceMoney ? ($out += "0", $line = 70) : ($line = 70, 
                $out += $escape(rs.reduceMoney), $line = 70), $out += '</td> <td class="F-float F-money">', 
                $line = 71, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail" data-money="', 
                $line = 72, $out += $escape(rs.payedMoney + 1 * rs.realGuidePayMoney), $out += '">', 
                $line = 72, $out += $escape("社付："), $line = 72, $out += $escape(rs.payedMoney), 
                $line = 72, rs.isGuidePay && 1 == rs.isGuidePay || ($out += "，", $line = 72, $out += $escape("导付："), 
                $line = 72, $out += $escape(rs.realGuidePayMoney), $line = 72), $out += "</a></td> <td>", 
                $line = 73, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-scenicImg" url="', 
                $line = 73, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 73) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 73), $out += '</td> <td ><input type="text" name="settlementMoney" class="col-sm-12 F-float F-money" value="', 
                $line = 74, $out += $escape(rs.settlementMoney), $out += '" class="money" ', $line = 74, 
                rs.isConfirmAccount && ($out += ' disabled="disabled"', $line = 74), $out += '></td> <td name="unPayedMoney">', 
                $line = 75, $out += $escape(rs.unPayedMoney), $out += '</td> <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000" ', 
                $line = 76, rs.isConfirmAccount && ($out += ' disabled="disabled" ', $line = 76), 
                $out += ">", $line = 76, $out += $escape(rs.checkRemark), $out += "</textarea></td> <td>", 
                $line = 77, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 77) : ($line = 77, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 77), 
                $out += "</td> <td>", $line = 78, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 78) : ($line = 78, $out += $escape(rs.checkUserName), $line = 78), $out += '</td> <td> <label class="pos-rel R-right" ', 
                $line = 80, rs.isConfirmAccount ? ($out += ' data-right="1250005"', $line = 80) : ($out += 'data-right="1250002"', 
                $line = 80), $out += '> <input type="checkbox" class="ace T-checkbox" ', $line = 81, 
                1 == rs.isConfirmAccount && ($out += 'checked="checked"', $line = 81), $out += ' /> <span class="lbl">对账</span> </label> <label class="cursor"> <a> |</a></label> <a class="T-option T-needPayDetail">查看</a> </td> </tr> ', 
                $line = 88;
            }), $out += ' </tbody> </table> <div class="form-group text-right"> <label class="control-label pull-right" style="margin-right:20px;"> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span>全选 </label> </div> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 100, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary R-right T-saveCheck" style="margin-left: 20px" data-right="1250002|1250005"> <i class="ace-icon fa fa-check-circle"></i>确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.scenicId}}" data-name="{{scenicName}}">\r\n    <div>\r\n        <form class="form-inline T-search-area" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label>景区：</label>\r\n                <input type="text" name="scenicName" value="{{scenicName}}">\r\n                <input value="{{searchParam.scenicId}}" name="scenicId" type="hidden">\r\n            </div>\r\n            <div class="form-group input-daterange marginLeft-30">\r\n                <label>账期：</label>\r\n                <input type="text"  name="startDate" class="form-control datepicker" name="startDate" style="width:100px;" value="{{searchParam.startDate}}">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker" name="endDate" style="width:100px;" value="{{searchParam.endDate}}">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label for="">账务类别：</label>\r\n                <input class="form-control" name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" />\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <button class="btn-sm search-btn  T-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索 \r\n                </button>\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n            </div>\r\n            <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n        </form>\r\n\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <label class=" control-label pull-left">账面应付合计：<span class="F-float F-money">{{sumNeedPayMoney}}</span></label>\r\n            <label class=" control-label marginLeft-30">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}}</span></label>\r\n            <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">{{sumSettlementMoney}}</span></label>\r\n            <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">{{sumUnPayedMoney}}</span></label>\r\n            <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">{{checkedUnPayedMoney}}</span></label>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <table class="table table-striped table-bordered table-hover all hct_align_middle" style="margin-top: 10px">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n                <th>账务类别</th>\r\n                <th>游玩日期(账期)</th>\r\n                <th>收费项</th>\r\n                <th>订单号</th>\r\n                <th>单价</th>\r\n                <th>数量</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>已付金额</th>\r\n                <th>单据</th>\r\n                <th><span class="necessary">*</span>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="min-width: 110px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList" data-right="1220005">\r\n            {{each financialScenicListData as rs index}}\r\n		    <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}">\r\n				<td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n				<td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n				<td>{{rs.name}}</td>\r\n                <td>{{rs.orderNumber}}</td>\r\n				<td class="F-float F-money">{{rs.price}}</td>\r\n				<td class="F-float F-float F-count">{{rs.memberCount}}</td>  \r\n				<td class="F-float F-money">{{if rs.reduceMoney==null || rs.reduceMoney == ""}}0{{else}}{{rs.reduceMoney}}{{/if}}</td>\r\n				<td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n				<td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.realGuidePayMoney*1}}">{{"社付："}}{{rs.payedMoney}}{{if !rs.isGuidePay || rs.isGuidePay != 1}}，{{"导付："}}{{rs.realGuidePayMoney}}{{/if}}</a></td> \r\n				<td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-scenicImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n				<td ><input type="text" name="settlementMoney" class="col-sm-12 F-float F-money" value="{{rs.settlementMoney}}" class="money" {{if rs.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n                <td name="unPayedMoney">{{rs.unPayedMoney}}</td>\r\n                <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000" {{if rs.isConfirmAccount}} disabled="disabled" {{/if}}>{{rs.checkRemark}}</textarea></td>\r\n				<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n				<td>\r\n				    <label class="pos-rel R-right" {{if rs.isConfirmAccount}} data-right="1250005"{{else}}data-right="1250002"{{/if}}>\r\n				   	    <input type="checkbox" class="ace T-checkbox" {{if rs.isConfirmAccount == 1}}checked="checked"{{/if}} />\r\n				   		  <span class="lbl">对账</span>\r\n				    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="T-option T-needPayDetail">查看</a>\r\n				</td>\r\n		    </tr>\r\n	        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="form-group text-right">\r\n        <label class="control-label pull-right" style="margin-right:20px;">\r\n          <input type="checkbox" class="ace pull-right T-checkAll">\r\n          <span class="lbl"></span>全选\r\n        </label>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary R-right T-saveCheck" style="margin-left: 20px" data-right="1250002|1250005">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});