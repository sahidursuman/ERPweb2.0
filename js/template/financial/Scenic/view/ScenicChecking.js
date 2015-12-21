/*TMODJS:{"debug":true,"version":37,"md5":"0c879a19429c10d34409fde98ae3ab6b"}*/
define(function(require) {
    return require("../../../template")("financial/Scenic/view/ScenicChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, scenicName = $data.scenicName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, $each = $utils.$each, financialScenicListData = $data.financialScenicListData, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.scenicId), 
            $out += '" data-name="', $line = 1, $out += $escape(scenicName), $out += '"> <div> <form class="form-inline T-search-area" role="form" onsubmit="return false"> <div class="form-group"> <label>景区：</label> <span>', 
            $line = 6, $out += $escape(scenicName), $out += '</span> </div> <div class="form-group input-daterange marginLeft-30"> <label>账期：</label> <input type="text" name="startDate" class="form-control datepicker" name="startDate" style="width:100px;" value="', 
            $line = 10, $out += $escape(searchParam.startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker" name="endDate" style="width:100px;" value="', 
            $line = 12, $out += $escape(searchParam.endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <label for="">账务类别：</label> <input class="form-control" name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 16, $out += $escape(searchParam.accountInfo), $out += '" /> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <label class=" control-label pull-left">账面应付合计：', 
            $line = 26, $out += $escape(sumNeedPayMoney), $out += '</label> <label class=" control-label marginLeft-30">已付金额合计：', 
            $line = 27, $out += $escape(sumPayedMoney), $out += '</label> <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney">', 
            $line = 28, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney">', 
            $line = 29, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="control-label pull-left marginLeft-30">未付金额合计(已对账)：<span>', 
            $line = 30, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </form> </div> <input type="hidden" value="', 
            $line = 33, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 34, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr> <th class="th-border">账务类别</th> <th class="th-border">游玩日期(账期)</th> <th class="th-border">收费项</th> <th class="th-border">订单号</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border"><span class="necessary">*</span>结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" style="min-width: 110px;">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1220005"> ', 
            $line = 57, $each(financialScenicListData, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 58, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 58, $out += $escape(rs.isConfirmAccount), $out += '"> <td>', 
                $line = 59, $out += $escape(rs.tripNumber), $line = 59, $out += $escape("，"), $line = 59, 
                $out += $escape(rs.lineProductName), $line = 59, $out += $escape("，"), $line = 59, 
                $out += $escape(rs.guideName), $out += "</td> <td>", $line = 60, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", 
                $line = 60) : ($line = 60, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $line = 60), $out += "</td> <td>", $line = 61, $out += $escape(rs.name), $out += "</td> <td>", 
                $line = 62, $out += $escape(rs.orderNumber), $out += "</td> <td>", $line = 63, $out += $escape(rs.price), 
                $out += "</td> <td>", $line = 64, $out += $escape(rs.memberCount), $out += "</td> <td>", 
                $line = 65, $out += $escape(rs.reduceMoney), $out += "</td> <td>", $line = 66, $out += $escape(rs.needPayMoney), 
                $out += '</td> <td><a class="T-option T-payedDetail" data-money="', $line = 67, 
                $out += $escape(rs.payedMoney + rs.realGuidePayMoney), $out += '">', $line = 67, 
                $out += $escape("社付："), $line = 67, $out += $escape(rs.payedMoney), $line = 67, 
                $out += $escape("，"), $line = 67, $out += $escape("导付："), $line = 67, $out += $escape(rs.realGuidePayMoney), 
                $out += "</a></td> <td>", $line = 68, null != rs.billImages && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-scenicImg" url="', 
                $line = 68, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 68) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 68), $out += '</td> <td><input type="text" name="settlementMoney" value="', 
                $line = 69, $out += $escape(rs.settlementMoney), $out += '" class="money" ', $line = 69, 
                rs.isConfirmAccount && ($out += ' disabled="disabled"', $line = 69), $out += '></td> <td name="unPayedMoney">', 
                $line = 70, $out += $escape(rs.unPayedMoney), $out += '</td> <td><input type="text" name="checkRemark" value="', 
                $line = 71, $out += $escape(rs.checkRemark), $out += '" ', $line = 71, rs.isConfirmAccount && ($out += ' disabled="disabled" ', 
                $line = 71), $out += "/></td> <td>", $line = 72, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", 
                $line = 72) : ($line = 72, $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), 
                $line = 72), $out += "</td> <td>", $line = 73, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 73) : ($line = 73, $out += $escape(rs.checkUserName), $line = 73), $out += '</td> <td> <label class="pos-rel R-right" ', 
                $line = 75, rs.isConfirmAccount ? ($out += ' data-right="1250005"', $line = 75) : ($out += 'data-right="1250002"', 
                $line = 75), $out += '> <input type="checkbox" class="ace T-checkbox" ', $line = 76, 
                1 == rs.isConfirmAccount && ($out += 'checked="checked"', $line = 76), $out += ' /> <span class="lbl">对账</span> </label> <label class="cursor"> <a> |</a></label> <a class="T-option T-needPayDetail">查看</a> </td> </tr> ', 
                $line = 83;
            }), $out += ' </tbody> </table> <div class="form-group text-right"> <label class="control-label pull-right" style="margin-right:20px;"> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span>全选 </label> </div> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 95, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-check"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary R-right T-saveCheck" style="margin-left: 20px" data-right="1250002|1250005"> <i class="ace-icon fa fa-check-circle"></i>确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.scenicId}}" data-name="{{scenicName}}">\r\n    <div>\r\n        <form class="form-inline T-search-area" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label>景区：</label>\r\n                <span>{{scenicName}}</span>\r\n            </div>\r\n            <div class="form-group input-daterange marginLeft-30">\r\n                <label>账期：</label>\r\n                <input type="text"  name="startDate" class="form-control datepicker" name="startDate" style="width:100px;" value="{{searchParam.startDate}}">\r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input type="text" class="form-control datepicker" name="endDate" style="width:100px;" value="{{searchParam.endDate}}">\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <label for="">账务类别：</label>\r\n                <input class="form-control" name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" />\r\n            </div>\r\n            <div class="form-group marginLeft-30">\r\n                <button class="btn-sm search-btn  T-search">\r\n                    <i class="ace-icon fa fa-search"></i> 搜索 \r\n                </button>\r\n            </div>\r\n        </form>\r\n\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <label class=" control-label pull-left">账面应付合计：{{sumNeedPayMoney}}</label>\r\n            <label class=" control-label marginLeft-30">已付金额合计：{{sumPayedMoney}}</label>\r\n            <label class=" control-label marginLeft-30">结算金额合计：<span class="T-stMoney">{{sumSettlementMoney}}</span></label>\r\n            <label class=" control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney">{{sumUnPayedMoney}}</span></label>\r\n            <label class="control-label pull-left marginLeft-30">未付金额合计(已对账)：<span>{{checkedUnPayedMoney}}</span></label>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">账务类别</th>\r\n                <th class="th-border">游玩日期(账期)</th>\r\n                <th class="th-border">收费项</th>\r\n                <th class="th-border">订单号</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border"><span class="necessary">*</span>结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" style="min-width: 110px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList" data-right="1220005">\r\n            {{each financialScenicListData as rs index}}\r\n		    <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}">\r\n				<td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n				<td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n				<td>{{rs.name}}</td>\r\n                <td>{{rs.orderNumber}}</td>\r\n				<td>{{rs.price}}</td>\r\n				<td>{{rs.memberCount}}</td>  \r\n				<td>{{rs.reduceMoney}}</td>\r\n				<td>{{rs.needPayMoney}}</td>\r\n				<td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.realGuidePayMoney}}">{{"社付："}}{{rs.payedMoney}}{{"，"}}{{"导付："}}{{rs.realGuidePayMoney}}</a></td> \r\n				<td>{{if rs.billImages != null && rs.billImage !=""}}<a href="#" class="T-option T-scenicImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n				<td><input type="text" name="settlementMoney" value="{{rs.settlementMoney}}" class="money" {{if rs.isConfirmAccount}} disabled="disabled"{{/if}}></td>\r\n                <td name="unPayedMoney">{{rs.unPayedMoney}}</td>\r\n                <td><input type="text" name="checkRemark" value="{{rs.checkRemark}}" {{if rs.isConfirmAccount}} disabled="disabled" {{/if}}/></td>\r\n				<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n				<td>\r\n				    <label class="pos-rel R-right" {{if rs.isConfirmAccount}} data-right="1250005"{{else}}data-right="1250002"{{/if}}>\r\n				   	    <input type="checkbox" class="ace T-checkbox" {{if rs.isConfirmAccount == 1}}checked="checked"{{/if}} />\r\n				   		  <span class="lbl">对账</span>\r\n				    </label>\r\n                    <label class="cursor"> <a> |</a></label>\r\n                    <a class="T-option T-needPayDetail">查看</a>\r\n				</td>\r\n		    </tr>\r\n	        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="form-group text-right">\r\n        <label class="control-label pull-right" style="margin-right:20px;">\r\n          <input type="checkbox" class="ace pull-right T-checkAll">\r\n          <span class="lbl"></span>全选\r\n        </label>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-check">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary R-right T-saveCheck" style="margin-left: 20px" data-right="1250002|1250005">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});