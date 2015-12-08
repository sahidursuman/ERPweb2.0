/*TMODJS:{"debug":true,"version":334,"md5":"2d1a6eb75e4169deedd4467b4c4b6d48"}*/
define(function(require) {
    return require("../../../template")("financial/Restaurant/view/restaurantClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, restaurantName = $data.restaurantName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, sumPayMoney = $data.sumPayMoney, sumPayType = $data.sumPayType, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, financialRestaurantList = $data.financialRestaurantList, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.restaurantId), 
            $out += '" data-name="', $line = 1, $out += $escape(restaurantName), $out += '"> <div class="col-sm-12 T-search-area" style="padding-bottom:0px;"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label style="float: left;margin: 0px 20px 0 0px" class=" control-label "> 餐厅：', 
            $line = 5, $out += $escape(restaurantName), $out += '</label> <label class="control-label marginLeft-30" style="float:left;">账期：</label> <div class="col-xs-1"> <div class="input-group"> <input class="col-xs-12 date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.startDate), $out += '" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <div class="col-xs-1"> <div class="input-group"> <input class="col-xs-12 date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 17, $out += $escape(searchParam.endDate), $out += '" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="control-label marginLeft-30" style="float:left;">账务类别：</label> <input class="col-xs-1" name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 25, $out += $escape(searchParam.accountInfo), $out += '" /> <button class="btn-height btn-sm btn-height T-search search-btn marginLeft-30"> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label class="control-label pull-left">账面应付合计：', 
            $line = 35, $out += $escape(sumNeedPayMoney), $out += '元 </label> <label class="control-label pull-left marginLeft-30">已付金额合计：', 
            $line = 36, $out += $escape(sumPayedMoney), $out += ' </label> <label class="control-label pull-left marginLeft-30">结算金额合计：', 
            $line = 37, $out += $escape(sumSettlementMoney), $out += '</label> <label class="control-label pull-left marginLeft-30">未付金额合计：<span class="T-unpayMoney">', 
            $line = 38, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="control-label pull-left marginLeft-30">本次付款金额：</label> <input class="col-xs-1 pull-left" name="sumPayMoney" type="text" value="', 
            $line = 40, $out += $escape(sumPayMoney), $out += '" maxlength="9" style="float:none;" /> <label class="control-label pull-left marginLeft-30">付款方式：</label> <select class="pull-left" style="text-align:center" name="sumPayType"> <option value="0" ', 
            $line = 43, 0 == sumPayType && ($out += 'selected="selected"', $line = 43), $out += '>现金</option> <option value="1" ', 
            $line = 44, 1 == sumPayType && ($out += 'selected="selected"', $line = 44), $out += '>银行转账</option> <option value="2" ', 
            $line = 45, 2 == sumPayType && ($out += 'selected="selected"', $line = 45), $out += '>网上支付</option> <option value="3" ', 
            $line = 46, 3 == sumPayType && ($out += 'selected="selected"', $line = 46), $out += '>支票</option> <option value="4" ', 
            $line = 47, 4 == sumPayType && ($out += 'selected="selected"', $line = 47), $out += '>其他</option> </select> <label class="control-label pull-left marginLeft-30">备注：</label> <input class="col-xs-1 pull-left" name="sumPayRemark" type="text" value="', 
            $line = 50, $out += $escape(sumPayRemark), $out += '" style="float:none;" /> <button class="btn-height btn-sm btn-height T-clear-auto search-btn" style="margin-left: 20px"> 自动下账 </button> <button class="btn-height btn-sm btn-height T-cancel-auto search-btn" style="margin-left: 20px"> 取消下账 </button> </div> </form> </div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr><th class="th-border">序号</th> <th class="th-border">账务类别</th> <th class="th-border">用餐日期(账期)</th> <th class="th-border">用餐类型</th> <th class="th-border">餐标<span style="font-size:12px;">(元/人)</span></th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border" width="50">单据</th> <th class="th-border"><span class="necessary">*</span>本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border" style="width:100px;">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 84, $each(financialRestaurantList, function(rs, index) {
                $out += ' <tr class="T-clearTr', $line = 85, $out += $escape(rs.id), $out += '" data-id="', 
                $line = 85, $out += $escape(rs.id), $out += '" style="border:none"> <td>', $line = 86, 
                $out += $escape(index + 1), $out += "</td> <td>", $line = 87, $out += $escape(rs.tripNumber), 
                $line = 87, $out += $escape("，"), $line = 87, $out += $escape(rs.lineProductName), 
                $line = 87, $out += $escape("，"), $line = 87, $out += $escape(rs.guideName), $out += "</td> <td>", 
                $line = 88, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", $line = 88) : ($line = 88, 
                $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), $line = 88), 
                $out += "</td> <td>", $line = 89, null == rs.type || "" == rs.type ? ($out += "-", 
                $line = 89) : ($line = 89, $out += $escape(rs.type), $line = 89), $out += "</td> <td>", 
                $line = 90, $out += $escape(rs.price), $out += "</td> <td>", $line = 91, $out += $escape(rs.memberCount), 
                $out += "</td> <td>", $line = 92, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 93, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail">', 
                $line = 94, $out += $escape("社付："), $line = 94, $out += $escape(rs.payedMoney), 
                $line = 94, $out += $escape("，"), $line = 94, $out += $escape("导付："), $line = 94, 
                $out += $escape(rs.realGuidePayMoney), $out += "</a></td> <td>", $line = 95, $out += $escape(rs.settlementMoney), 
                $out += "</td> <td>", $line = 96, $out += $escape(rs.unPayedMoney), $out += "</td> <td>", 
                $line = 97, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-restaurantImg" url="', 
                $line = 97, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 97) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 97), $out += '</td> <td><input name="payMoney" class="money" type="text" value="', 
                $line = 98, $out += $escape(rs.payMoney), $out += '" maxlength="9"></td> <td class="col-sm-1" ><input name="payRemark" type="text" value="', 
                $line = 99, $out += $escape(rs.payRemark), $out += '" maxlength="1000"></td> <td>', 
                $line = 100, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 100) : ($line = 100, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 100), 
                $out += "</td> <td>", $line = 101, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 101) : ($line = 101, $out += $escape(rs.checkUserName), $line = 101), $out += '</td> <td style="width:220px"> ', 
                $line = 103, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 103) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 103), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 108;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 114, $out += $escape(searchParam.totalCount), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear"> <i class="ace-icon fa fa-check-circle"></i>确认 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.restaurantId}}" data-name="{{restaurantName}}">\r\n    <div class="col-sm-12 T-search-area" style="padding-bottom:0px;">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group"> \r\n                <label style="float: left;margin: 0px 20px 0 0px" class=" control-label "> 餐厅：{{restaurantName}}</label>\r\n                <label class="control-label marginLeft-30" style="float:left;">账期：</label>\r\n                <div class="col-xs-1">\r\n                    <div class="input-group">\r\n                        <input class="col-xs-12 date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" />   \r\n                        <span class="input-group-addon">\r\n                            <i class="fa fa-calendar"></i>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n                <div class="col-xs-1">\r\n                    <div class="input-group">\r\n                        <input class="col-xs-12 date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" />   \r\n                        <span class="input-group-addon">\r\n                            <i class="fa fa-calendar"></i>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n\r\n                <label class="control-label marginLeft-30" style="float:left;">账务类别：</label>\r\n                <input class="col-xs-1" name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" />\r\n                \r\n                <button class="btn-height btn-sm btn-height T-search search-btn marginLeft-30">\r\n                    <i class="ace-icon fa fa-search"></i>搜索\r\n                </button>\r\n            </div>\r\n        </form>\r\n\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label class="control-label pull-left">账面应付合计：{{sumNeedPayMoney}}元 </label>\r\n                <label class="control-label pull-left marginLeft-30">已付金额合计：{{sumPayedMoney}} </label>\r\n                <label class="control-label pull-left marginLeft-30">结算金额合计：{{sumSettlementMoney}}</label>\r\n                <label class="control-label pull-left marginLeft-30">未付金额合计：<span class="T-unpayMoney">{{sumUnPayedMoney}}</span></label>\r\n                <label class="control-label pull-left marginLeft-30">本次付款金额：</label>\r\n                <input class="col-xs-1 pull-left" name="sumPayMoney" type="text" value="{{sumPayMoney}}" maxlength="9" style="float:none;" />\r\n                <label class="control-label pull-left marginLeft-30">付款方式：</label>\r\n                <select class="pull-left" style="text-align:center" name="sumPayType">\r\n                    <option value="0" {{if sumPayType == 0}}selected="selected"{{/if}}>现金</option>\r\n                    <option value="1" {{if sumPayType == 1}}selected="selected"{{/if}}>银行转账</option>\r\n                    <option value="2" {{if sumPayType == 2}}selected="selected"{{/if}}>网上支付</option>\r\n                    <option value="3" {{if sumPayType == 3}}selected="selected"{{/if}}>支票</option>\r\n                    <option value="4" {{if sumPayType == 4}}selected="selected"{{/if}}>其他</option>\r\n                </select>\r\n                <label class="control-label pull-left marginLeft-30">备注：</label>\r\n                <input class="col-xs-1 pull-left" name="sumPayRemark" type="text" value="{{sumPayRemark}}" style="float:none;" />\r\n\r\n                <button class="btn-height btn-sm btn-height T-clear-auto search-btn" style="margin-left: 20px">\r\n                    自动下账\r\n                </button>\r\n                <button class="btn-height btn-sm btn-height T-cancel-auto search-btn" style="margin-left: 20px">\r\n                    取消下账\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <table class="table table-striped table-bordered table-hover all margin-top">\r\n        <thead>\r\n            <tr><th class="th-border">序号</th>\r\n                <th class="th-border">账务类别</th>\r\n                <th class="th-border">用餐日期(账期)</th>\r\n                <th class="th-border">用餐类型</th>\r\n                <th class="th-border">餐标<span style="font-size:12px;">(元/人)</span></th>\r\n                <th class="th-border">人数</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border" width="50">单据</th>\r\n                <th class="th-border"><span class="necessary">*</span>本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border" style="width:100px;">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each financialRestaurantList as rs index}}\r\n            <tr class="T-clearTr{{rs.id}}" data-id="{{rs.id}}" style="border:none">\r\n                <td>{{index+1}}</td>\r\n                <td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n                <td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{if rs.type == null || rs.type == ""}}-{{else}}{{rs.type}}{{/if}}</td>\r\n                <td>{{rs.price}}</td>\r\n                <td>{{rs.memberCount}}</td>\r\n                <td>{{rs.reduceMoney}}</td>\r\n                <td>{{rs.needPayMoney}}</td>\r\n                <td><a class="T-option T-payedDetail">{{"社付："}}{{rs.payedMoney}}{{"，"}}{{"导付："}}{{rs.realGuidePayMoney}}</a></td>\r\n                <td>{{rs.settlementMoney}}</td>\r\n                <td>{{rs.unPayedMoney}}</td>\r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-restaurantImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                <td><input name="payMoney" class="money" type="text" value="{{rs.payMoney}}" maxlength="9"></td>\r\n                <td class="col-sm-1" ><input name="payRemark" type="text" value="{{rs.payRemark}}" maxlength="1000"></td>\r\n                <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n                <td style="width:220px">\r\n                    {{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                </td>\r\n            </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.totalCount}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-clear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});