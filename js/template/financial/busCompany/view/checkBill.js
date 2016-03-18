/*TMODJS:{"debug":true,"version":650,"md5":"b4ec29e4c247ea39c7e82cf1309a0c46"}*/
define(function(require) {
    return require("../../../template")("financial/busCompany/view/checkBill", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, busCompanyName = $data.busCompanyName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, accountStatus = $data.accountStatus, $each = $utils.$each, financialBusCompanyListData = $data.financialBusCompanyListData, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.busCompanyId), 
            $out += '" data-name="', $line = 1, $out += $escape(busCompanyName), $out += '"> <div class="col-xs-12" style="padding-bottom: 0px"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label>车队：', 
            $line = 6, $out += $escape(busCompanyName), $out += '</label> <label class="mar-l-15">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 8, $out += $escape(searchParam.startTime), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.endTime), $out += '" style="width:100px;" /> <label class="mar-l-15">账务类别：</label> <input name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 13, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <label class="mar-l-15">车牌号：</label> <input name="licenseNumber" placeholder="车牌号" type="text" value="', 
            $line = 15, $out += $escape(searchParam.licenseNumber), $out += '" style="width:200px;" /> <button class=" btn-sm T-search search-btn mar-l-15"> <i class="ace-icon fa fa-search"></i>搜索 </button> <button class="btn-sm search-btn T-btn-export mar-l-15">导出报表</button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">', 
            $line = 26, $out += $escape(sumNeedPayMoney), $out += '</span></label> <label class="control-label marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 27, $out += $escape(sumPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">', 
            $line = 28, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">', 
            $line = 29, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">', 
            $line = 30, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </form> </div> <input type="hidden" value="', 
            $line = 34, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 35, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <input type="hidden" value="', 
            $line = 36, $out += $escape(accountStatus), $out += '" name="accountStatus" /> <div class="overflow-x min-w-1050" style="margin-top: 30px"> <table class="table overflow-table table-striped table-bordered table-hover all hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th >账务类别</th> <th width="170">用车时间(账期)</th> <th>人数</th> <th>司机</th> <th>车型</th> <th>车牌号</th> <th>车费</th> <th>优惠</th> <th>账面应付</th> <th>预付款申请</th> <th>已付金额</th> <th>单据</th> <th><span class="necessary">*</span>结算金额</th> <th>未付金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th width="100px">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="230005"> ', 
            $line = 62, $each(financialBusCompanyListData, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 63, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 63, $out += $escape(rs.isConfirmAccount), $out += '"> <td>', 
                $line = 64, null != rs.tripNumber && "" != rs.tripNumber && ($line = 64, $out += $escape(rs.tripNumber), 
                $out += " ", $line = 65, (rs.lineProductName || rs.guideName) && ($out += "，", $line = 65), 
                $out += " ", $line = 66), $out += " ", $line = 67, null != rs.lineProductName && "" != rs.lineProductName && ($line = 67, 
                $out += $escape(rs.lineProductName), $out += " ", $line = 68, rs.guideName && ($out += "，", 
                $line = 68), $out += " ", $line = 69), $out += " ", $line = 70, null != rs.guideName && "" != rs.guideName && ($line = 70, 
                $out += $escape(rs.guideName), $line = 70), $out += " </td> <td>", $line = 72, null == rs.startTime || "" == rs.startTime ? ($out += " - ", 
                $line = 74) : ($out += " ", $line = 75, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), 
                $out += " ~ ", $line = 75, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), 
                $out += " ", $line = 76), $out += " </td> <td>", $line = 78, 1 == rs.isMemberCount ? ($out += " - ", 
                $line = 79) : ($out += " ", $line = 80, null == rs.touristAdultCount || "" == rs.touristAdultCount ? ($out += "0", 
                $line = 80) : ($out += '<span class="F-float F-count">', $line = 80, $out += $escape(rs.touristAdultCount), 
                $out += "</span>", $line = 80), $out += " 大 ", $line = 81, null == rs.touristChildCount || "" == rs.touristChildCount ? ($out += "0", 
                $line = 81) : ($out += '<span class="F-float F-count">', $line = 81, $out += $escape(rs.touristChildCount), 
                $out += "</span>", $line = 81), $out += " 小 ", $line = 82), $out += " </td> <td>", 
                $line = 84, null == rs.driverName || "" == rs.driverName ? ($out += "-", $line = 84) : ($line = 84, 
                $out += $escape(rs.driverName), $line = 84), $out += "</td> <td>", $line = 85, null != rs.brand && "" != rs.brand || null != rs.seatCount && "" != rs.seatCount && 0 != rs.seatCount ? ($out += " ", 
                $line = 88, $out += $escape(rs.brand), $out += " ", $line = 88, null != rs.seatCount && "" != rs.seatCount && rs.seatCount > 0 && ($line = 88, 
                $out += $escape(rs.seatCount), $out += "座", $line = 88), $out += " ", $line = 89) : ($out += " - ", 
                $line = 87), $out += " </td> <td>", $line = 91, null == rs.licenseNumber || "" == rs.licenseNumber ? ($out += "-", 
                $line = 91) : ($line = 91, $out += $escape(rs.licenseNumber), $line = 91), $out += '</td> <td><span class="F-float F-money">', 
                $line = 92, $out += $escape(rs.fee), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 93, $out += $escape(rs.reduceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 94, $out += $escape(rs.needPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 95, $out += $escape(rs.prePayedMoney), $out += '</span></td> <td><a class="T-option T-payedDetail" data-money="', 
                $line = 96, $out += $escape(rs.payedMoney + rs.realGuidePayMoney), $out += '">', 
                $line = 96, $out += $escape("社付："), $out += '<span class="F-float F-money">', $line = 96, 
                $out += $escape(rs.payedMoney), $out += "</span>", $line = 96, rs.isGuidePay && 1 == rs.isGuidePay || ($line = 96, 
                $out += $escape("，"), $line = 96, $out += $escape("导付："), $out += '<span class="F-float F-money">', 
                $line = 96, $out += $escape(rs.realGuidePayMoney), $out += "</span>", $line = 96), 
                $out += "</a></td> <td>", $line = 97, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-busCompanyImg" url="', 
                $line = 97, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 97) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 97), $out += '</td> <td><input type="text" name="settlementMoney" value="', 
                $line = 98, $out += $escape(rs.settlementMoney), $out += '" class="money F-float F-money" /></td> <td name="unPayedMoney" class="F-float F-money">', 
                $line = 99, $out += $escape(rs.unPayedMoney), $out += '</td> <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">', 
                $line = 100, $out += $escape(rs.checkRemark), $out += "</textarea></td> <td>", $line = 101, 
                null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 101) : ($line = 101, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 101), 
                $out += "</td> <td>", $line = 102, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 102) : ($line = 102, $out += $escape(rs.checkUserName), $line = 102), $out += '</td> <td style="padding-left:10px;"> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 105, 1 == rs.isConfirmAccount && ($out += 'checked="checked"', $line = 105), 
                $out += ' /> <span class="lbl"></span>对账 </label> <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail">查看</a> </td> </tr> ', 
                $line = 112;
            }), $out += ' </tbody> </table> </div> <div class="row pageMode" style="padding-top: 15px;"> <div class="col-xs-6"> <small>共计 ', 
            $line = 118, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <label class="control-label pull-right" style="line-height:2.2em;margin-right:20px;"> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span>全选 </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveCheck"> <i class="ace-icon fa fa-check-circle"></i>确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.busCompanyId}}" data-name="{{busCompanyName}}">\r\n    <div class="col-xs-12" style="padding-bottom: 0px">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area">\r\n                <div class="form-group"> \r\n                    <label>车队：{{busCompanyName}}</label>\r\n                    <label class="mar-l-15">账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime}}" style="width:100px;" />   \r\n\r\n                    <label class="mar-l-15">账务类别：</label>\r\n                    <input name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n                    <label class="mar-l-15">车牌号：</label>\r\n                    <input name="licenseNumber" placeholder="车牌号" type="text" value="{{searchParam.licenseNumber}}" style="width:200px;" />\r\n\r\n                    <button class=" btn-sm T-search search-btn mar-l-15">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                    <button class="btn-sm search-btn T-btn-export mar-l-15">导出报表</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">{{sumNeedPayMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">{{sumSettlementMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">{{sumUnPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">{{checkedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n	<input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n    <input type="hidden" value="{{accountStatus}}" name="accountStatus" />\r\n<div class="overflow-x min-w-1050" style="margin-top: 30px">\r\n    <table class="table overflow-table table-striped table-bordered table-hover all hct_align_middle w-1500">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n            <th >账务类别</th>\r\n                <th width="170">用车时间(账期)</th>\r\n                <th>人数</th>\r\n                <th>司机</th>\r\n                <th>车型</th>\r\n                <th>车牌号</th>\r\n                <th>车费</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>预付款申请</th>\r\n                <th>已付金额</th>\r\n                <th>单据</th>\r\n                <th><span class="necessary">*</span>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th width="100px">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList" data-right="230005">\r\n            {{each financialBusCompanyListData as rs index}}\r\n		    <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}">\r\n				<td>{{if rs.tripNumber !=null && rs.tripNumber != ""}}{{rs.tripNumber}}\r\n                        {{if rs.lineProductName || rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.lineProductName != null && rs.lineProductName != ""}}{{rs.lineProductName}}\r\n                        {{if rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.guideName != null && rs.guideName != ""}}{{rs.guideName}}{{/if}}\r\n                </td>\r\n				<td>{{if rs.startTime == null || rs.startTime == ""}}\r\n                        -\r\n                    {{else}}\r\n                        {{rs.startTime | dateFormat: \'yyyy-MM-dd\'}} ~ {{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                    {{/if}}\r\n                </td>\r\n				<td>{{if rs.isMemberCount == 1}} - \r\n                    {{else}}\r\n                        {{if rs.touristAdultCount == null || rs.touristAdultCount == ""}}0{{else}}<span class="F-float F-count">{{rs.touristAdultCount}}</span>{{/if}} 大  \r\n                        {{if rs.touristChildCount == null || rs.touristChildCount == ""}}0{{else}}<span class="F-float F-count">{{rs.touristChildCount}}</span>{{/if}} 小\r\n                    {{/if}}\r\n                </td>\r\n				<td>{{if rs.driverName == null || rs.driverName == ""}}-{{else}}{{rs.driverName}}{{/if}}</td>\r\n				<td>{{if (rs.brand == null || rs.brand == "") && (rs.seatCount == null || rs.seatCount == "" || rs.seatCount == 0)}}\r\n                        -\r\n                    {{else}}\r\n                        {{rs.brand}} {{if rs.seatCount != null && rs.seatCount != "" && rs.seatCount > 0 }}{{rs.seatCount}}座{{/if}}\r\n                    {{/if}}\r\n                </td>\r\n				<td>{{if rs.licenseNumber == null || rs.licenseNumber == ""}}-{{else}}{{rs.licenseNumber}}{{/if}}</td>\r\n				<td><span class="F-float F-money">{{rs.fee}}</span></td>\r\n				<td><span class="F-float F-money">{{rs.reduceMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{rs.needPayMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.prePayedMoney}}</span></td>\r\n				<td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.realGuidePayMoney}}">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span>{{if !rs.isGuidePay || rs.isGuidePay != 1}}{{"，"}}{{"导付："}}<span class="F-float F-money">{{rs.realGuidePayMoney}}</span>{{/if}}</a></td>   \r\n				<td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-busCompanyImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n				<td><input type="text" name="settlementMoney" value="{{rs.settlementMoney}}" class="money F-float F-money" /></td>\r\n                <td name="unPayedMoney" class="F-float F-money">{{rs.unPayedMoney}}</td>\r\n                <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">{{rs.checkRemark}}</textarea></td>\r\n				<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td> \r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n				<td style="padding-left:10px;">\r\n				    <label class="pos-rel">\r\n				   		<input type="checkbox" class="ace T-checkbox" {{if rs.isConfirmAccount == 1}}checked="checked"{{/if}} />\r\n				   		<span class="lbl"></span>对账\r\n				    </label>\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail">查看</a>\r\n				</td>\r\n			</tr>\r\n		    {{/each}}\r\n        </tbody>  \r\n    </table>\r\n</div>\r\n    <div class="row pageMode" style="padding-top: 15px;">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <label class="control-label pull-right" style="line-height:2.2em;margin-right:20px;">\r\n                <input type="checkbox" class="ace pull-right T-checkAll">\r\n                <span class="lbl"></span>全选\r\n            </label>\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveCheck">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});