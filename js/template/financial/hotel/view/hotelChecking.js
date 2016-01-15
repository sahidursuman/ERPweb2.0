/*TMODJS:{"debug":true,"version":344,"md5":"a53d1351829f3f3214fcc74f97d75319"}*/
define(function(require) {
    return require("../../../template")("financial/hotel/view/hotelChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, hotelName = $data.hotelName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, $each = $utils.$each, financialHotelListData = $data.financialHotelListData, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.hotelId), 
            $out += '" data-name="', $line = 1, $out += $escape(hotelName), $out += '"> <div class="col-xs-12"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area" > <div class="form-group"> <label> 酒店：', 
            $line = 6, $out += $escape(hotelName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 8, $out += $escape(searchParam.startTime), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.endTime), $out += '" style="width:100px;" /> <label class="marginLeft-30">账务类别：</label> <input name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 13, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <button class="btn-sm T-search search-btn marginLeft-30" > <i class="ace-icon fa fa-search"></i>搜索 </button> <button class="btn-sm search-btn T-btn-export marginLeft-30">导出报表</button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">', 
            $line = 25, $out += $escape(sumNeedPayMoney), $out += '</span></label> <label class="control-label marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 26, $out += $escape(sumPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">', 
            $line = 27, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">', 
            $line = 28, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">', 
            $line = 29, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </form> </div> <input type="hidden" value="', 
            $line = 33, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 34, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr><th class="th-border">账务类别</th> <th class="th-border">入住日期(账期)</th> <th class="th-border">房型</th> <th class="th-border">单价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border"><span class="necessary">*</span>结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" width="110">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1220005"> ', 
            $line = 55, $each(financialHotelListData, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 56, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 56, $out += $escape(rs.isConfirmAccount), $out += '"> <td>', 
                $line = 57, $out += $escape(rs.tripNumber), $line = 57, $out += $escape("，"), $line = 57, 
                $out += $escape(rs.lineProductName), $line = 57, $out += $escape("，"), $line = 57, 
                $out += $escape(rs.guideName), $out += "</td> <td>", $line = 58, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", 
                $line = 58) : ($line = 58, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $line = 58), $out += "</td> <td>", $line = 59, null == rs.type || "" == rs.type ? ($out += "-", 
                $line = 59) : ($line = 59, $out += $escape(rs.type), $line = 59), $out += '</td> <td><span class="F-float F-money">', 
                $line = 60, $out += $escape(rs.price), $out += '</span></td> <td><span class="F-float F-count">', 
                $line = 61, $out += $escape(rs.memberCount), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 62, $out += $escape(rs.reduceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 63, $out += $escape(rs.needPayMoney), $out += '</span></td> <td><a class="T-option T-payedDetail" data-money="', 
                $line = 64, $out += $escape(rs.payedMoney + rs.realGuidePayMoney), $out += '">', 
                $line = 64, $out += $escape("社付："), $out += '<span class="F-float F-money">', $line = 64, 
                $out += $escape(rs.payedMoney), $out += "</span>", $line = 64, rs.isGuidePay && 1 == rs.isGuidePay || ($line = 64, 
                $out += $escape("，"), $line = 64, $out += $escape("导付："), $out += '<span class="F-float F-money">', 
                $line = 64, $out += $escape(rs.realGuidePayMoney), $out += "</span>", $line = 64), 
                $out += "</a></td> <td>", $line = 65, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-hotelImg" url="', 
                $line = 65, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 65) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 65), $out += '</td> <td><input type="text" name="settlementMoney" value="', 
                $line = 66, $out += $escape(rs.settlementMoney), $out += '" class="money F-float F-money"></td> <td name="unPayedMoney" class="F-float F-money">', 
                $line = 67, $out += $escape(rs.unPayedMoney), $out += '</td> <td><input type="text" name="checkRemark" value="', 
                $line = 68, $out += $escape(rs.checkRemark), $out += '" style="text-align:center"/></td> <td>', 
                $line = 69, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 69) : ($line = 69, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 69), 
                $out += "</td> <td>", $line = 70, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 70) : ($line = 70, $out += $escape(rs.checkUserName), $line = 70), $out += '</td> <td style="padding-left:10px;"> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 73, 1 == rs.isConfirmAccount && ($out += 'checked="checked"', $line = 73), 
                $out += ' /> <span class="lbl"></span>对账 </label> <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail">查看</a> </td> </tr> ', 
                $line = 80;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 86, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <label class="control-label pull-right" style="line-height:2.2em;margin-right:20px;"> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span>全选 </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-check"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left: 20px"> <i class="ace-icon fa fa-check-circle"></i>确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.hotelId}}" data-name="{{hotelName}}">\r\n    <div class="col-xs-12">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area" >\r\n                <div class="form-group"> \r\n                    <label> 酒店：{{hotelName}}</label>\r\n                    <label class="marginLeft-30">账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime}}" style="width:100px;" />   \r\n\r\n                    <label class="marginLeft-30">账务类别：</label>\r\n                    <input name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n\r\n                    <button class="btn-sm T-search search-btn marginLeft-30" >\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                    <button class="btn-sm search-btn T-btn-export marginLeft-30">导出报表</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">{{sumNeedPayMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">{{sumSettlementMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">{{sumUnPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">{{checkedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n        <thead>\r\n            <tr><th class="th-border">账务类别</th>\r\n                <th class="th-border">入住日期(账期)</th>\r\n                <th class="th-border">房型</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border"><span class="necessary">*</span>结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" width="110">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList" data-right="1220005">\r\n            {{each financialHotelListData as rs}}\r\n		    <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}">\r\n				<td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n				<td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n				<td>{{if rs.type == null || rs.type == ""}}-{{else}}{{rs.type}}{{/if}}</td>\r\n				<td><span class="F-float F-money">{{rs.price}}</span></td>\r\n				<td><span class="F-float F-count">{{rs.memberCount}}</span></td>  \r\n				<td><span class="F-float F-money">{{rs.reduceMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{rs.needPayMoney}}</span></td>\r\n				<td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.realGuidePayMoney}}">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span>{{if !rs.isGuidePay || rs.isGuidePay != 1}}{{"，"}}{{"导付："}}<span class="F-float F-money">{{rs.realGuidePayMoney}}</span>{{/if}}</a></td> \r\n				<td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-hotelImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n				<td><input type="text" name="settlementMoney" value="{{rs.settlementMoney}}" class="money F-float F-money"></td>\r\n                <td name="unPayedMoney" class="F-float F-money">{{rs.unPayedMoney}}</td>\r\n                <td><input type="text" name="checkRemark" value="{{rs.checkRemark}}" style="text-align:center"/></td>\r\n				<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n				<td style="padding-left:10px;">\r\n				    <label class="pos-rel">\r\n				   	    <input type="checkbox" class="ace T-checkbox" {{if rs.isConfirmAccount == 1}}checked="checked"{{/if}} />\r\n				   		  <span class="lbl"></span>对账\r\n				    </label>\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail">查看</a>\r\n				</td>\r\n		    </tr>\r\n	        {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <label class="control-label pull-right" style="line-height:2.2em;margin-right:20px;">\r\n              <input type="checkbox" class="ace pull-right T-checkAll">\r\n              <span class="lbl"></span>全选\r\n            </label>\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-check">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left: 20px">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});