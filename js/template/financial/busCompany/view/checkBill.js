/*TMODJS:{"debug":true,"version":682,"md5":"7837a36894277b20bb1b08a58b65fe5d"}*/
define(function(require) {
    return require("../../../template")("financial/busCompany/view/checkBill", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, busCompanyName = $data.busCompanyName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumSignMoney = $data.sumSignMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, accountStatus = $data.accountStatus, $each = $utils.$each, financialBusCompanyListData = $data.financialBusCompanyListData, $string = ($data.rs, 
            $data.index, $utils.$string), $out = "";
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.busCompanyId), 
            $out += '" data-name="', $line = 1, $out += $escape(busCompanyName), $out += '"> <div class="col-xs-12" style="padding-bottom: 0px"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label>车队：</label> <input type="text" class="mar-r-10" name="busCompanyName" value="', 
            $line = 7, $out += $escape(busCompanyName), $out += '" /> <label>账期：</label> <input class="date-picker T-time" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.startTime), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker T-time mar-r-10" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 11, $out += $escape(searchParam.endTime), $out += '" style="width:100px;" /> <label>账务类别：</label> <input name="accountInfo" class="mar-r-10" placeholder="账务类别" type="text" value="', 
            $line = 14, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <label>车牌号：</label> <input name="licenseNumber" class="mar-r-10" placeholder="车牌号" type="text" value="', 
            $line = 16, $out += $escape(searchParam.licenseNumber), $out += '" style="width:200px;" /> <label>对账状态：</label> <div class="btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 20, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 22, searchParam.isConfirmAccount && "" != searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 26) : ($out += " 未对账 ", $line = 28) : ($out += " 全部 ", $line = 24), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <label>对账时间：</label> <input class="date-picker T-checkTime T-checkStartTime" placeholder="开始日期" type="text" value="', 
            $line = 39, $out += $escape(searchParam.startCheck), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker mar-r-10 T-checkTime T-checkEndTime" value="', 
            $line = 41, $out += $escape(searchParam.endCheck), $out += '" placeholder="结束日期" type="text" style="width:100px;" /> <button class=" btn-sm T-search search-btn mar-r-10"> <i class="ace-icon fa fa-search"></i>搜索 </button> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">', 
            $line = 52, $out += $escape(sumNeedPayMoney), $out += '</span></label> <label class="control-label marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 53, $out += $escape(sumPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">', 
            $line = 54, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="control-label marginLeft-30">签单金额合计：<span class="T-sumSignMoney F-float F-money">', 
            $line = 55, $out += $escape(sumSignMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">', 
            $line = 56, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">', 
            $line = 57, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </form> </div> <input type="hidden" value="', 
            $line = 61, $out += $escape(accountStatus), $out += '" name="accountStatus" /> <div class="overflow-x min-w-1050" style="margin-top: 30px"> <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500"> <thead> <tr class="T-tr-fixed bg-blur"> <th >账务类别</th> <th width="170">用车时间(账期)</th> <th>人数</th> <th>司机</th> <th>车型</th> <th>车牌号</th> <th>车费</th> <th>优惠</th> <th>账面应付</th> <th>预付款申请</th> <th>已付金额</th> <th width="45">单据</th> <th><span class="necessary">*</span>结算金额</th> <th>代收</th> <th>未付金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th width="110px">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="230005"> ', 
            $line = 88, $each(financialBusCompanyListData, function(rs) {
                $out += ' <tr class="T-checkTr ', $line = 89, rs.change && ($out += "success", $line = 89), 
                $out += '" data-id="', $line = 89, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 89, $out += $escape(rs.isConfirmAccount), $out += '" ', $line = 90, rs.change && ($out += 'data-change="true"', 
                $line = 90), $out += "> <td>", $line = 91, $out += $string(rs.title), $out += "</td> <td>", 
                $line = 92, null == rs.startTime || "" == rs.startTime ? ($out += " - ", $line = 94) : ($out += " ", 
                $line = 95, $out += $escape($helpers.dateFormat(rs.startTime, "yyyy-MM-dd")), $out += " ~ ", 
                $line = 95, $out += $escape($helpers.dateFormat(rs.endTime, "yyyy-MM-dd")), $out += " ", 
                $line = 96), $out += " </td> <td>", $line = 98, 1 == rs.isMemberCount ? ($out += " - ", 
                $line = 99) : ($out += " ", $line = 100, null == rs.touristAdultCount || "" == rs.touristAdultCount ? ($out += "0", 
                $line = 100) : ($out += '<span class="F-float F-count">', $line = 100, $out += $escape(rs.touristAdultCount), 
                $out += "</span>", $line = 100), $out += " 大 ", $line = 101, null == rs.touristChildCount || "" == rs.touristChildCount ? ($out += "0", 
                $line = 101) : ($out += '<span class="F-float F-count">', $line = 101, $out += $escape(rs.touristChildCount), 
                $out += "</span>", $line = 101), $out += " 小 ", $line = 102), $out += " </td> <td>", 
                $line = 104, null == rs.driverName || "" == rs.driverName ? ($out += "-", $line = 104) : ($line = 104, 
                $out += $escape(rs.driverName), $line = 104), $out += "</td> <td>", $line = 105, 
                null != rs.brand && "" != rs.brand || null != rs.seatCount && "" != rs.seatCount && 0 != rs.seatCount ? ($out += " ", 
                $line = 108, $out += $escape(rs.brand), $out += " ", $line = 108, null != rs.seatCount && "" != rs.seatCount && rs.seatCount > 0 && ($line = 108, 
                $out += $escape(rs.seatCount), $out += "座", $line = 108), $out += " ", $line = 109) : ($out += " - ", 
                $line = 107), $out += " </td> <td>", $line = 111, null == rs.licenseNumber || "" == rs.licenseNumber ? ($out += "-", 
                $line = 111) : ($line = 111, $out += $escape(rs.licenseNumber), $line = 111), $out += '</td> <td><span class="F-float F-money">', 
                $line = 112, $out += $escape(rs.fee), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 113, $out += $escape(rs.reduceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 114, $out += $escape(rs.needPayMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 115, $out += $escape(rs.prePayedMoney), $out += '</span></td> <td class="align-left"> <a class="T-option T-payedDetail" data-money="', 
                $line = 117, $out += $escape(rs.payedMoney + rs.realGuidePayMoney), $out += '"> <span class="in-block">', 
                $line = 118, $out += $escape("社付："), $out += '<span class="F-float F-money">', $line = 118, 
                $out += $escape(rs.payedMoney), $out += "</span></span> ", $line = 119, rs.isGuidePay && 1 == rs.isGuidePay || ($out += '<span class="in-block">', 
                $line = 119, $out += $escape("导付："), $out += '<span class="F-float F-money">', $line = 119, 
                $out += $escape(rs.realGuidePayMoney), $out += "</span></span>", $line = 119), $out += " </a> </td> <td>", 
                $line = 122, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-busCompanyImg" url="', 
                $line = 122, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 122) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 122), $out += '</td> <td><input type="text" name="settlementMoney" value="', 
                $line = 123, $out += $escape(rs.settlementMoney), $out += '" class="money F-float F-money" /></td> <td>', 
                $line = 124, 1 == rs.serviceType ? ($out += '<input type="text" name="collection" value="', 
                $line = 124, $out += $escape(rs.collection), $out += '" class="money F-float F-money" />', 
                $line = 124) : ($out += "-", $line = 124), $out += '</td> <td name="unPayedMoney" class="F-float F-money">', 
                $line = 125, $out += $escape(rs.unPayedMoney), $out += '</td> <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">', 
                $line = 126, $out += $escape(rs.checkRemark), $out += "</textarea></td> <td>", $line = 127, 
                null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 127) : ($line = 127, 
                $out += $escape($helpers.dateTimeFormat(rs.checkTime)), $line = 127), $out += "</td> <td>", 
                $line = 128, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 128) : ($line = 128, $out += $escape(rs.checkUserName), $line = 128), $out += '</td> <td style="padding-left:10px;"> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 131, (rs.change && 1 == rs.isChecked || !rs.change && 1 == rs.isConfirmAccount) && ($out += 'checked="checked"', 
                $line = 131), $out += ' /> <span class="lbl"></span>对账 </label> <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail">查看</a> </td> </tr> ', 
                $line = 138;
            }), $out += ' </tbody> </table> </div> <div class="row pageMode" style="padding-top: 15px;"> <div class="col-xs-6"> <small>共计 ', 
            $line = 144, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <label class="control-label pull-right" style="line-height:2.2em;margin-right:20px;"> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span>全选 </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveCheck"> <i class="ace-icon fa fa-check-circle"></i>确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.busCompanyId}}" data-name="{{busCompanyName}}">\r\n    <div class="col-xs-12" style="padding-bottom: 0px">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area">\r\n                <div class="form-group"> \r\n                    <label>车队：</label>\r\n                    <input type="text" class="mar-r-10" name="busCompanyName" value="{{busCompanyName}}" />\r\n                    <label>账期：</label>\r\n                    <input class="date-picker T-time" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker T-time mar-r-10" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime}}" style="width:100px;" />   \r\n\r\n                    <label>账务类别：</label>\r\n                    <input name="accountInfo" class="mar-r-10" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n                    <label>车牌号：</label>\r\n                    <input name="licenseNumber" class="mar-r-10" placeholder="车牌号" type="text" value="{{searchParam.licenseNumber}}" style="width:200px;" />\r\n                    \r\n                    <label>对账状态：</label>\r\n                    <div class="btn-group T-check-status mar-r-10">\r\n                        <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                            <span>\r\n                                {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount == ""}}\r\n                                    全部\r\n                                {{else if searchParam.isConfirmAccount == 1}}\r\n                                    已对账\r\n                                {{else}}\r\n                                    未对账\r\n                                {{/if}}\r\n                            </span>\r\n                            <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                        </button>\r\n                        <ul class="dropdown-menu">\r\n                            <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                            <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                            <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <label>对账时间：</label>\r\n                    <input class="date-picker T-checkTime T-checkStartTime" placeholder="开始日期" type="text" value="{{searchParam.startCheck}}" style="width:100px;" />\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker mar-r-10 T-checkTime T-checkEndTime" value="{{searchParam.endCheck}}" placeholder="结束日期" type="text" style="width:100px;" />\r\n                    \r\n                    <button class=" btn-sm T-search search-btn mar-r-10">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                    <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">{{sumNeedPayMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">{{sumSettlementMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">签单金额合计：<span class="T-sumSignMoney F-float F-money">{{sumSignMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">{{sumUnPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">{{checkedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" value="{{accountStatus}}" name="accountStatus" />\r\n<div class="overflow-x min-w-1050" style="margin-top: 30px">\r\n    <table class="table table-striped table-bordered table-hover all hct_align_middle w-1500">\r\n        <thead>\r\n            <tr class="T-tr-fixed bg-blur">\r\n            <th >账务类别</th>\r\n                <th width="170">用车时间(账期)</th>\r\n                <th>人数</th>\r\n                <th>司机</th>\r\n                <th>车型</th>\r\n                <th>车牌号</th>\r\n                <th>车费</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>预付款申请</th>\r\n                <th>已付金额</th>\r\n                <th width="45">单据</th>\r\n                <th><span class="necessary">*</span>结算金额</th>\r\n                <th>代收</th>\r\n                <th>未付金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th width="110px">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-checkList" data-right="230005">\r\n            {{each financialBusCompanyListData as rs index}}\r\n		    <tr class="T-checkTr {{if rs.change}}success{{/if}}" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}"\r\n            {{if rs.change}}data-change="true"{{/if}}>\r\n				<td>{{#rs.title}}</td>\r\n				<td>{{if rs.startTime == null || rs.startTime == ""}}\r\n                        -\r\n                    {{else}}\r\n                        {{rs.startTime | dateFormat: \'yyyy-MM-dd\'}} ~ {{rs.endTime | dateFormat: \'yyyy-MM-dd\'}}\r\n                    {{/if}}\r\n                </td>\r\n				<td>{{if rs.isMemberCount == 1}} - \r\n                    {{else}}\r\n                        {{if rs.touristAdultCount == null || rs.touristAdultCount == ""}}0{{else}}<span class="F-float F-count">{{rs.touristAdultCount}}</span>{{/if}} 大  \r\n                        {{if rs.touristChildCount == null || rs.touristChildCount == ""}}0{{else}}<span class="F-float F-count">{{rs.touristChildCount}}</span>{{/if}} 小\r\n                    {{/if}}\r\n                </td>\r\n				<td>{{if rs.driverName == null || rs.driverName == ""}}-{{else}}{{rs.driverName}}{{/if}}</td>\r\n				<td>{{if (rs.brand == null || rs.brand == "") && (rs.seatCount == null || rs.seatCount == "" || rs.seatCount == 0)}}\r\n                        -\r\n                    {{else}}\r\n                        {{rs.brand}} {{if rs.seatCount != null && rs.seatCount != "" && rs.seatCount > 0 }}{{rs.seatCount}}座{{/if}}\r\n                    {{/if}}\r\n                </td>\r\n				<td>{{if rs.licenseNumber == null || rs.licenseNumber == ""}}-{{else}}{{rs.licenseNumber}}{{/if}}</td>\r\n				<td><span class="F-float F-money">{{rs.fee}}</span></td>\r\n				<td><span class="F-float F-money">{{rs.reduceMoney}}</span></td>\r\n				<td><span class="F-float F-money">{{rs.needPayMoney}}</span></td>\r\n                <td><span class="F-float F-money">{{rs.prePayedMoney}}</span></td>\r\n				<td class="align-left">\r\n                    <a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.realGuidePayMoney}}">\r\n                        <span class="in-block">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span></span>\r\n                        {{if !rs.isGuidePay || rs.isGuidePay != 1}}<span class="in-block">{{"导付："}}<span class="F-float F-money">{{rs.realGuidePayMoney}}</span></span>{{/if}}\r\n                    </a>\r\n                </td>   \r\n				<td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-busCompanyImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n				<td><input type="text" name="settlementMoney" value="{{rs.settlementMoney}}" class="money F-float F-money" /></td>\r\n                <td>{{if rs.serviceType==1}}<input type="text" name="collection" value="{{rs.collection}}" class="money F-float F-money" />{{else}}-{{/if}}</td>\r\n                <td name="unPayedMoney" class="F-float F-money">{{rs.unPayedMoney}}</td>\r\n                <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">{{rs.checkRemark}}</textarea></td>\r\n				<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateTimeFormat}}{{/if}}</td> \r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n				<td style="padding-left:10px;">\r\n				    <label class="pos-rel">\r\n				   		<input type="checkbox" class="ace T-checkbox" {{if (rs.change && rs.isChecked == 1) || (!rs.change && rs.isConfirmAccount == 1)}}checked="checked"{{/if}} />\r\n				   		<span class="lbl"></span>对账\r\n				    </label>\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail">查看</a>\r\n				</td>\r\n			</tr>\r\n		    {{/each}}\r\n        </tbody>  \r\n    </table>\r\n</div>\r\n    <div class="row pageMode" style="padding-top: 15px;">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <label class="control-label pull-right" style="line-height:2.2em;margin-right:20px;">\r\n                <input type="checkbox" class="ace pull-right T-checkAll">\r\n                <span class="lbl"></span>全选\r\n            </label>\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveCheck">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});