/*TMODJS:{"debug":true,"version":113,"md5":"d2b4ae951b319633c572454647270d86"}*/
define(function(require) {
    return require("../../../template")("financial/Self/view/SelfClearing", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, selfPayName = $data.selfPayName, sumData = $data.sumData, sumPayMoney = $data.sumPayMoney, sumPayType = $data.sumPayType, sumPayRemark = $data.sumPayRemark, $each = $utils.$each, list = $data.list, recordSize = ($data.rs, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class= "row T-newData" data-id="', $line = 1, $out += $escape(searchParam.selfPayId), 
            $out += '" data-name="', $line = 1, $out += $escape(selfPayName), $out += '"> <div class="col-sm-12"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <div class="form-group"> <label>自费商家：', 
            $line = 6, $out += $escape(selfPayName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 9, $out += $escape($helpers.dateFormat(searchParam.startTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 11, $out += $escape($helpers.dateFormat(searchParam.endTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label class="marginLeft-30">团信息：</label> <input name="tripInfo" placeholder="团信息" type="text" value="', 
            $line = 14, $out += $escape(searchParam.tripInfo), $out += '" style="width:200px;" /> <button class="btn-height btn-sm search-btn T-search marginLeft-30" > <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group globalAdd"> <label class="control-label pull-left">账面应付合计：', 
            $line = 24, $out += $escape(sumData.needPayMoney), $out += '元 </label> <label class="control-label pull-left marginLeft-30">已付金额合计：', 
            $line = 25, $out += $escape(sumData.payedMoney), $out += ' </label> <label class="control-label pull-left marginLeft-30">结算金额合计：', 
            $line = 26, $out += $escape(sumData.settlementMoney), $out += '</label> <label class="control-label pull-left marginLeft-30">未付金额合计：<span class="T-unpayMoney">', 
            $line = 27, $out += $escape(sumData.unPayedMoney), $out += '</span></label> <label class="control-label pull-left marginLeft-30">本次付款金额：</label> <input class="col-xs-1 pull-left" name="sumPayMoney" type="text" value="', 
            $line = 29, $out += $escape(sumPayMoney), $out += '" maxlength="9" style="float:none;" /> <label class="control-label pull-left marginLeft-30">付款方式：</label> <select class="pull-left" style="text-align:center" name="sumPayType"> <option value="0" ', 
            $line = 32, 0 == sumPayType && ($out += 'selected="selected"', $line = 32), $out += '>现金</option> <option value="1" ', 
            $line = 33, 1 == sumPayType && ($out += 'selected="selected"', $line = 33), $out += '>银行转账</option> <option value="2" ', 
            $line = 34, 2 == sumPayType && ($out += 'selected="selected"', $line = 34), $out += '>网上支付</option> <option value="3" ', 
            $line = 35, 3 == sumPayType && ($out += 'selected="selected"', $line = 35), $out += '>支票</option> <option value="4" ', 
            $line = 36, 4 == sumPayType && ($out += 'selected="selected"', $line = 36), $out += '>其他</option> </select> <label class="control-label pull-left marginLeft-30">备注：</label> <input class="col-xs-1 pull-left" name="sumPayRemark" type="text" value="', 
            $line = 39, $out += $escape(sumPayRemark), $out += '" style="float:none;" /> <button class="btn btn-xs btn-primary marginLeft-30 T-clear-auto"> <i class="ace-icon fa fa-check-circle"></i> 自动下账 </button> <button class="btn btn-xs btn-warning marginLeft-30 T-cancel-auto"> <i class="ace-icon fa fa-times-circle"></i> 取消下账 </button> </div> </form> </div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">团信息</th> <th class="th-border">消费日期</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">底价</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border">结算金额</th> <th class="th-border">未付金额</th> <th class="th-border"> <span class="necessary">*</span>本次付款金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-clearList"> ', 
            $line = 74, $each(list, function(rs, index) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 75, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 75, $out += $escape(rs.isConfirmAccount), $out += '"> <td>', 
                $line = 76, $out += $escape(index + 1), $out += "</td> <td>", $line = 77, $out += $escape(rs.tripNumber), 
                $line = 77, $out += $escape("，"), $line = 77, $out += $escape(rs.lineProductName), 
                $line = 77, $out += $escape("，"), $line = 77, $out += $escape(rs.guideName), $out += "</td> <td>", 
                $line = 78, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", $line = 78) : ($line = 78, 
                $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), $line = 78), 
                $out += "</td> <td>", $line = 79, $out += $escape(rs.realCount), $out += "</td> <td>", 
                $line = 80, $out += $escape(rs.price), $out += "</td> <td>", $line = 81, $out += $escape(rs.lowestPrice), 
                $out += "</td> <td>", $line = 82, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 83, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail" data-money="', 
                $line = 84, $out += $escape(rs.payedMoney + rs.guidePayMoney), $out += '">', $line = 84, 
                $out += $escape("社付："), $line = 84, $out += $escape(rs.payedMoney), $line = 84, 
                $out += $escape("，"), $line = 84, $out += $escape("导付："), $line = 84, $out += $escape(rs.guidePayMoney), 
                $out += "</a></td> <td>", $line = 85, null != rs.billImage && "" != rs.billImage ? ($out += '<a class="T-option T-selfPayImg" url="', 
                $line = 85, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 85) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 85), $out += "</td> <td>", $line = 86, $out += $escape(rs.settlementMoney), 
                $out += "</td> <td>", $line = 87, $out += $escape(rs.unPayedMoney), $out += '</td> <td><input name="payMoney" class="money" type="text" value="', 
                $line = 88, $out += $escape(rs.payMoney), $out += '" maxlength="9"></td> <td><input type="text" maxlength="1000" name="checkRemark" value="', 
                $line = 89, $out += $escape(rs.payRemark), $out += '" style="text-align:center" /></td> <td>', 
                $line = 90, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 90) : ($line = 90, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 90), 
                $out += "</td> <td>", $line = 91, null == rs.checkUser || "" == rs.checkUser ? ($out += "-", 
                $line = 91) : ($line = 91, $out += $escape(rs.checkUser), $line = 91), $out += "</td> <td>", 
                $line = 92, 1 == rs.isConfirmAccount ? ($out += "已对账", $line = 92) : 0 == rs.isConfirmAccount && ($out += "未对账", 
                $line = 92), $out += ' <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail" style="border:none">查看</a> </td> </tr> ', 
                $line = 97;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 102, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-clear" > <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i>确认 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row T-newData" data-id="{{searchParam.selfPayId}}" data-name="{{selfPayName}}">\r\n    <div class="col-sm-12">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="T-search-area">\r\n                <div class="form-group"> \r\n                    <label>自费商家：{{selfPayName}}</label>\r\n\r\n                    <label class="marginLeft-30">账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />   \r\n\r\n                    <label class="marginLeft-30">团信息：</label>\r\n                    <input name="tripInfo" placeholder="团信息" type="text" value="{{searchParam.tripInfo}}" style="width:200px;" />\r\n\r\n                    <button class="btn-height btn-sm search-btn T-search marginLeft-30" >\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group globalAdd">\r\n                <label class="control-label pull-left">账面应付合计：{{sumData.needPayMoney}}元 </label>\r\n                <label class="control-label pull-left marginLeft-30">已付金额合计：{{sumData.payedMoney}} </label>\r\n                <label class="control-label pull-left marginLeft-30">结算金额合计：{{sumData.settlementMoney}}</label>\r\n                <label class="control-label pull-left marginLeft-30">未付金额合计：<span class="T-unpayMoney">{{sumData.unPayedMoney}}</span></label>\r\n                <label class="control-label pull-left marginLeft-30">本次付款金额：</label>\r\n                <input class="col-xs-1 pull-left" name="sumPayMoney" type="text" value="{{sumPayMoney}}" maxlength="9" style="float:none;" />\r\n                <label class="control-label pull-left marginLeft-30">付款方式：</label>\r\n                <select class="pull-left" style="text-align:center" name="sumPayType">\r\n                    <option value="0" {{if sumPayType == 0}}selected="selected"{{/if}}>现金</option>\r\n                    <option value="1" {{if sumPayType == 1}}selected="selected"{{/if}}>银行转账</option>\r\n                    <option value="2" {{if sumPayType == 2}}selected="selected"{{/if}}>网上支付</option>\r\n                    <option value="3" {{if sumPayType == 3}}selected="selected"{{/if}}>支票</option>\r\n                    <option value="4" {{if sumPayType == 4}}selected="selected"{{/if}}>其他</option>\r\n                </select>\r\n                <label class="control-label pull-left marginLeft-30">备注：</label>\r\n                <input class="col-xs-1 pull-left" name="sumPayRemark" type="text" value="{{sumPayRemark}}" style="float:none;" />\r\n\r\n                <button class="btn btn-xs btn-primary marginLeft-30 T-clear-auto">\r\n                    <i class="ace-icon fa fa-check-circle"></i> 自动下账\r\n                </button>\r\n                <button class="btn btn-xs btn-warning marginLeft-30 T-cancel-auto">\r\n                    <i class="ace-icon fa fa-times-circle"></i> 取消下账\r\n                </button>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n    <table class="table table-striped table-bordered table-hover all margin-top">\r\n        <thead>\r\n            <tr>\r\n                <th class="th-border">序号</th>\r\n                <th class="th-border">团信息</th>\r\n                <th class="th-border">消费日期</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">底价</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border">结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border"> <span class="necessary">*</span>本次付款金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-clearList">\r\n            {{each list as rs index}}\r\n            <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}">\r\n                    <td>{{index+1}}</td>\r\n                    <td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n                    <td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n                    <td>{{rs.realCount}}</td>\r\n                    <td>{{rs.price}}</td>\r\n                    <td>{{rs.lowestPrice}}</td>\r\n                    <td>{{rs.reduceMoney}}</td>\r\n                    <td>{{rs.needPayMoney}}</td>\r\n                    <td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.guidePayMoney}}">{{"社付："}}{{rs.payedMoney}}{{"，"}}{{"导付："}}{{rs.guidePayMoney}}</a></td> \r\n                    <td>{{if rs.billImage != null && rs.billImage !=""}}<a class="T-option T-selfPayImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n                    <td>{{rs.settlementMoney}}</td>\r\n                    <td>{{rs.unPayedMoney}}</td>\r\n                    <td><input name="payMoney" class="money" type="text" value="{{rs.payMoney}}" maxlength="9"></td>\r\n                    <td><input type="text" maxlength="1000" name="checkRemark" value="{{rs.payRemark}}" style="text-align:center" /></td>\r\n                    <td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                    <td>{{if rs.checkUser == null || rs.checkUser == ""}}-{{else}}{{rs.checkUser}}{{/if}}</td>\r\n                    <td>{{if rs.isConfirmAccount == 1}}已对账{{else if rs.isConfirmAccount == 0}}未对账{{/if}}\r\n                        <a class="cursor"> |</a>\r\n                        <a class="cursor T-option T-needPayDetail" style="border:none">查看</a>\r\n                    </td>\r\n                </tr>\r\n            {{/each}}\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n          <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-clear" >\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveClear" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});