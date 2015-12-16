/*TMODJS:{"debug":true,"version":432,"md5":"8efeb783368608773e9fccc523687735"}*/
define(function(require) {
    return require("../../../template")("financial/Restaurant/view/restaurantClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, restaurantName = $data.restaurantName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, sumPayMoney = $data.sumPayMoney, sumPayType = $data.sumPayType, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, financialRestaurantList = $data.financialRestaurantList, isAutoPay = ($data.rs, 
            $data.index, $data.isAutoPay), $out = "";
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.restaurantId), 
            $out += '" data-name="', $line = 1, $out += $escape(restaurantName), $out += '"> <div class="col-sm-12 T-search-area"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label> 餐厅：', 
            $line = 5, $out += $escape(restaurantName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 7, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <label class="marginLeft-30">账务类别：</label> <input name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 12, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <button class="btn-height btn-sm btn-height T-search search-btn marginLeft-30"> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group globalAdd"> <div class="pull-left" style="margin:3px 30px 0px 0px;"> <label>账面应付合计：', 
            $line = 23, $out += $escape(sumNeedPayMoney), $out += '元 </label> <label class="marginLeft-30">已付金额合计：', 
            $line = 24, $out += $escape(sumPayedMoney), $out += ' </label> <label class="marginLeft-30">结算金额合计：', 
            $line = 25, $out += $escape(sumSettlementMoney), $out += '</label> <label class="marginLeft-30">未付金额合计：', 
            $line = 26, $out += $escape(sumUnPayedMoney), $out += '</label> <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney">', 
            $line = 27, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> <div class="pull-left" style="width:750px;margin-top:0px;"> <label>本次付款金额：</label> <input name="sumPayMoney" type="text" value="', 
            $line = 31, $out += $escape(sumPayMoney), $out += '" maxlength="9" /> <label class="marginLeft-30">付款方式：</label> <select name="sumPayType"> <option value="0" ', 
            $line = 34, 0 == sumPayType && ($out += 'selected="selected"', $line = 34), $out += '>现金</option> <option value="1" ', 
            $line = 35, 1 == sumPayType && ($out += 'selected="selected"', $line = 35), $out += '>银行转账</option> <option value="2" ', 
            $line = 36, 2 == sumPayType && ($out += 'selected="selected"', $line = 36), $out += '>网上支付</option> <option value="3" ', 
            $line = 37, 3 == sumPayType && ($out += 'selected="selected"', $line = 37), $out += '>支票</option> <option value="4" ', 
            $line = 38, 4 == sumPayType && ($out += 'selected="selected"', $line = 38), $out += '>其他</option> </select> <label class="marginLeft-30">备注：</label> <input name="sumPayRemark" type="text" value="', 
            $line = 41, $out += $escape(sumPayRemark), $out += '" /> <button class="btn btn-primary marginLeft-30 T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> <button class="btn btn-warning marginLeft-30 T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> </div> </div> </form> </div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr><th class="th-border">账务类别</th> <th class="th-border">用餐日期<br />(账期)</th> <th class="th-border">用餐类型</th> <th class="th-border">餐标<br /><span style="font-size:12px;">(元/人)</span></th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border" width="45">单据</th> <th class="th-border"><span class="necessary">*</span>本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" width="100">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 75, $each(financialRestaurantList, function(rs) {
                $out += ' <tr class="T-clearTr', $line = 76, $out += $escape(rs.id), $out += '" data-id="', 
                $line = 76, $out += $escape(rs.id), $out += '" style="border:none"> <td>', $line = 77, 
                $out += $escape(rs.tripNumber), $line = 77, $out += $escape("，"), $line = 77, $out += $escape(rs.lineProductName), 
                $line = 77, $out += $escape("，"), $line = 77, $out += $escape(rs.guideName), $out += "</td> <td>", 
                $line = 78, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", $line = 78) : ($line = 78, 
                $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), $line = 78), 
                $out += "</td> <td>", $line = 79, null == rs.type || "" == rs.type ? ($out += "-", 
                $line = 79) : ($line = 79, $out += $escape(rs.type), $line = 79), $out += "</td> <td>", 
                $line = 80, $out += $escape(rs.price), $out += "</td> <td>", $line = 81, $out += $escape(rs.memberCount), 
                $out += "</td> <td>", $line = 82, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 83, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail">', 
                $line = 84, $out += $escape("社付："), $line = 84, $out += $escape(rs.payedMoney), 
                $line = 84, rs.isGuidePay && 1 == rs.isGuidePay || ($line = 84, $out += $escape("，"), 
                $line = 84, $out += $escape("导付："), $line = 84, $out += $escape(rs.realGuidePayMoney), 
                $line = 84), $out += "</a></td> <td>", $line = 85, $out += $escape(rs.settlementMoney), 
                $out += "</td> <td>", $line = 86, $out += $escape(rs.unPayedMoney), $out += "</td> <td>", 
                $line = 87, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-restaurantImg" url="', 
                $line = 87, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 87) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 87), $out += '</td> <td><input name="payMoney" class="money" type="text" value="', 
                $line = 88, $out += $escape(rs.payMoney), $out += '" maxlength="9" data-le="', $line = 88, 
                $out += $escape(rs.unPayedMoney), $out += '" ', $line = 88, 2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", 
                $line = 88), $out += '></td> <td class="col-sm-1" ><input name="payRemark" type="text" value="', 
                $line = 89, $out += $escape(rs.payRemark), $out += '" maxlength="1000" ', $line = 89, 
                2 != isAutoPay && rs.unPayedMoney <= 0 && ($out += " disabled ", $line = 89), $out += "></td> <td>", 
                $line = 90, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 90) : ($line = 90, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 90), 
                $out += "</td> <td>", $line = 91, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 91) : ($line = 91, $out += $escape(rs.checkUserName), $line = 91), $out += "</td> <td> ", 
                $line = 93, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 93) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 93), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 98;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 104, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-clear"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear marginLeft-30"> <i class="ace-icon fa fa-check-circle"></i>确认付款 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.restaurantId}}" data-name="{{restaurantName}}">\r\n    <div class="col-sm-12 T-search-area">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group"> \r\n                <label> 餐厅：{{restaurantName}}</label>\r\n                <label class="marginLeft-30">账期：</label>\r\n                <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />   \r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />   \r\n\r\n                <label class="marginLeft-30">账务类别：</label>\r\n                <input name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n                \r\n                <button class="btn-height btn-sm btn-height T-search search-btn marginLeft-30">\r\n                    <i class="ace-icon fa fa-search"></i>搜索\r\n                </button>\r\n            </div>\r\n        </form>\r\n\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group globalAdd">\r\n                <div class="pull-left" style="margin:3px 30px 0px 0px;">\r\n                    <label>账面应付合计：{{sumNeedPayMoney}}元 </label>\r\n                    <label class="marginLeft-30">已付金额合计：{{sumPayedMoney}} </label>\r\n                    <label class="marginLeft-30">结算金额合计：{{sumSettlementMoney}}</label>\r\n                    <label class="marginLeft-30">未付金额合计：{{sumUnPayedMoney}}</label>\r\n                    <label class="marginLeft-30">未付金额合计(已对账)：<span class="T-unpayMoney">{{checkedUnPayedMoney}}</span></label>\r\n                </div>\r\n                <div class="pull-left" style="width:750px;margin-top:0px;">\r\n                    <label>本次付款金额：</label>\r\n                    <input name="sumPayMoney" type="text" value="{{sumPayMoney}}" maxlength="9" />\r\n                    <label class="marginLeft-30">付款方式：</label>\r\n                    <select name="sumPayType">\r\n                        <option value="0" {{if sumPayType == 0}}selected="selected"{{/if}}>现金</option>\r\n                        <option value="1" {{if sumPayType == 1}}selected="selected"{{/if}}>银行转账</option>\r\n                        <option value="2" {{if sumPayType == 2}}selected="selected"{{/if}}>网上支付</option>\r\n                        <option value="3" {{if sumPayType == 3}}selected="selected"{{/if}}>支票</option>\r\n                        <option value="4" {{if sumPayType == 4}}selected="selected"{{/if}}>其他</option>\r\n                    </select>\r\n                    <label class="marginLeft-30">备注：</label>\r\n                    <input name="sumPayRemark" type="text" value="{{sumPayRemark}}" />\r\n\r\n                    <button class="btn btn-primary marginLeft-30 T-clear-auto">\r\n                        <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                    </button>\r\n                    <button class="btn btn-warning marginLeft-30 T-cancel-auto">\r\n                        <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <table class="table table-striped table-bordered table-hover all margin-top">\r\n        <thead>\r\n            <tr><th class="th-border">账务类别</th>\r\n                <th class="th-border">用餐日期<br />(账期)</th>\r\n                <th class="th-border">用餐类型</th>\r\n                <th class="th-border">餐标<br /><span style="font-size:12px;">(元/人)</span></th>\r\n                <th class="th-border">人数</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border" width="45">单据</th>\r\n                <th class="th-border"><span class="necessary">*</span>本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" width="100">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialRestaurantList as rs index}}\r\n            <tr class="T-clearTr{{rs.id}}" data-id="{{rs.id}}" style="border:none">\r\n                <td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n                <td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{if rs.type == null || rs.type == ""}}-{{else}}{{rs.type}}{{/if}}</td>\r\n                <td>{{rs.price}}</td>\r\n                <td>{{rs.memberCount}}</td>\r\n                <td>{{rs.reduceMoney}}</td>\r\n                <td>{{rs.needPayMoney}}</td>\r\n                <td><a class="T-option T-payedDetail">{{"社付："}}{{rs.payedMoney}}{{if !rs.isGuidePay || rs.isGuidePay != 1}}{{"，"}}{{"导付："}}{{rs.realGuidePayMoney}}{{/if}}</a></td>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td>{{rs.unPayedMoney}}</td>\r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-restaurantImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td><input name="payMoney" class="money" type="text" value="{{rs.payMoney}}" maxlength="9" data-le="{{rs.unPayedMoney}}" {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}}></td>\r\n                <td class="col-sm-1" ><input name="payRemark" type="text" value="{{rs.payRemark}}" maxlength="1000"  {{if isAutoPay != 2 && rs.unPayedMoney <= 0}} disabled {{/if}}></td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                <td>\r\n                    {{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-clear">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear marginLeft-30">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认付款\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});