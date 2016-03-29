/*TMODJS:{"debug":true,"version":732,"md5":"4314f34865dadb780bb7b1150e794a00"}*/
define(function(require) {
    return require("../../../template")("financial/Restaurant/view/restaurantChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, restaurantName = $data.restaurantName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, $each = $utils.$each, financialRestaurantList = $data.financialRestaurantList, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.restaurantId), 
            $out += '" data-name="', $line = 1, $out += $escape(restaurantName), $out += '"> <div class="col-xs-12 T-search-area" style="padding-bottom:0px;"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label>餐厅：</label> <input type="text" name="restaurantName" class="mar-r-10" value="', 
            $line = 6, $out += $escape(restaurantName), $out += '" /> <label>账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 8, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker mar-r-10" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 10, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <label>账务类别：</label> <input name="accountInfo" class="mar-r-10" placeholder="账务类别" type="text" value="', 
            $line = 13, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <label>对账状态：</label> <div class="btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 17, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 19, 0 == searchParam.isConfirmAccount ? ($out += " 未对账 ", $line = 21) : 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 23) : ($out += " 全部 ", $line = 25), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <button class="btn-sm search-btn T-search mar-r-10"> <i class="ace-icon fa fa-search"></i>搜索 </button> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> </form> <input type="hidden" name="accountStatus" value="', 
            $line = 41, $out += $escape(searchParam.accountStatus), $out += '" /> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">', 
            $line = 44, $out += $escape(sumNeedPayMoney), $out += '</span></label> <label class="control-label marginLeft-30">已付金额合计：<span class="F-float F-money">', 
            $line = 45, $out += $escape(sumPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">', 
            $line = 46, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">', 
            $line = 47, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">', 
            $line = 48, $out += $escape(checkedUnPayedMoney), $out += '</span></label> </div> </form> <input name="accountStatus" value="', 
            $line = 51, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </div> <input type="hidden" value="', 
            $line = 53, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 54, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <table class="table table-striped table-bordered table-hover all hct_align_middle" style="margin-top: 30px"> <thead> <tr class="T-tr-fixed bg-blur"> <th>账务类别</th> <th>用餐日期(账期)</th> <th>用餐类型</th> <th>餐标<span style="font-size:12px;">(元/人)</span></th> <th>人数</th> <th>优惠</th> <th>账面应付</th> <th>已付金额</th> <th>单据</th> <th> <span class="necessary">*</span>结算金额</th> <th>未付金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th width="110">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1240005"> ', 
            $line = 76, $each(financialRestaurantList, function(rs) {
                $out += ' <tr class="T-checkTr ', $line = 77, rs.change && ($out += "success", $line = 77), 
                $out += '" data-id="', $line = 77, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 77, $out += $escape(rs.isConfirmAccount), $out += '" ', $line = 78, rs.change && ($out += 'data-change="true"', 
                $line = 78), $out += "> <td>", $line = 79, null != rs.tripNumber && "" != rs.tripNumber && ($line = 79, 
                $out += $escape(rs.tripNumber), $out += " ", $line = 80, (rs.lineProductName || rs.guideName) && ($out += "，", 
                $line = 80), $out += " ", $line = 81), $out += " ", $line = 82, null != rs.lineProductName && "" != rs.lineProductName && ($line = 82, 
                $out += $escape(rs.lineProductName), $out += " ", $line = 83, rs.guideName && ($out += "，", 
                $line = 83), $out += " ", $line = 84), $out += " ", $line = 85, null != rs.guideName && "" != rs.guideName && ($line = 85, 
                $out += $escape(rs.guideName), $line = 85), $out += " </td> <td>", $line = 87, null == rs.accountTime || "" == rs.accountTime ? ($out += " - ", 
                $line = 89) : ($out += " ", $line = 90, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $out += " ", $line = 91), $out += " </td> <td>", $line = 93, null == rs.type || "" == rs.type ? ($out += "-", 
                $line = 93) : ($line = 93, $out += $escape(rs.type), $line = 93), $out += '</td> <td><span class="F-float F-money">', 
                $line = 94, $out += $escape(rs.price), $out += '</span></td> <td><span class="F-float F-count">', 
                $line = 95, $out += $escape(rs.memberCount), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 96, $out += $escape(rs.reduceMoney), $out += '</span></td> <td><span class="F-float F-money">', 
                $line = 97, $out += $escape(rs.needPayMoney), $out += '</span></td> <td><a class="T-option T-payedDetail" data-money="', 
                $line = 98, $out += $escape(rs.payedMoney + rs.realGuidePayMoney), $out += '">', 
                $line = 98, $out += $escape("社付："), $out += '<span class="F-float F-money">', $line = 98, 
                $out += $escape(rs.payedMoney), $out += "</span>", $line = 98, rs.isGuidePay && 1 == rs.isGuidePay || ($line = 98, 
                $out += $escape("，"), $line = 98, $out += $escape("导付："), $out += '<span class="F-float F-money">', 
                $line = 98, $out += $escape(rs.realGuidePayMoney), $out += "</span>", $line = 98), 
                $out += "</a></td> <td>", $line = 99, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-restaurantImg" url="', 
                $line = 99, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 99) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 99), $out += '</td> <td><input type="text" maxlength="9" name="settlementMoney" value="', 
                $line = 100, $out += $escape(rs.settlementMoney), $out += '" class="money F-float F-money"></td> <td name="unPayedMoney" class="F-float F-money">', 
                $line = 101, $out += $escape(rs.unPayedMoney), $out += '</td> <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">', 
                $line = 102, $out += $escape(rs.checkRemark), $out += "</textarea></td> <td>", $line = 103, 
                null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 103) : ($line = 103, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 103), 
                $out += "</td> <td>", $line = 104, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 104) : ($line = 104, $out += $escape(rs.checkUserName), $line = 104), $out += '</td> <td style="padding-left:10px;"> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 107, (rs.change && 1 == rs.isChecked || !rs.change && 1 == rs.isConfirmAccount) && ($out += 'checked="checked"', 
                $line = 107), $out += ' /> <span class="lbl"></span>对账 </label> <a class="cursor"> |</a> <a class="cursor T-option T-needPayDetail">查看</a> </td> </tr> ', 
                $line = 114;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 120, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <label class="control-label pull-right" style="line-height:2.2em;margin-right:20px;"> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span>全选 </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveCheck marginLeft-30"> <i class="ace-icon fa fa-check-circle"></i>确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.restaurantId}}" data-name="{{restaurantName}}">\r\n    <div class="col-xs-12 T-search-area" style="padding-bottom:0px;">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group"> \r\n                <label>餐厅：</label>\r\n                <input type="text" name="restaurantName" class="mar-r-10" value="{{restaurantName}}" />\r\n                <label>账期：</label>\r\n                <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />   \r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input class="date-picker mar-r-10" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />   \r\n\r\n                <label>账务类别：</label>\r\n                <input name="accountInfo" class="mar-r-10" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n\r\n                <label>对账状态：</label>\r\n                <div class="btn-group T-check-status mar-r-10">\r\n                    <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                        <span>\r\n                            {{if searchParam.isConfirmAccount == 0}}\r\n                                未对账\r\n                            {{else if searchParam.isConfirmAccount == 1}}\r\n                                已对账\r\n                            {{else}}\r\n                                全部\r\n                            {{/if}}\r\n                        </span>\r\n                        <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                    </button>\r\n                    <ul class="dropdown-menu">\r\n                        <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                        <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                        <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n                    </ul>\r\n                </div>\r\n                <button class="btn-sm search-btn T-search mar-r-10">\r\n                    <i class="ace-icon fa fa-search"></i>搜索\r\n                </button>\r\n                <button class="btn-sm search-btn T-btn-export">导出报表</button>\r\n            </div>\r\n        </form>\r\n        <input type="hidden" name="accountStatus" value="{{searchParam.accountStatus}}" />\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">{{sumNeedPayMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">已付金额合计：<span class="F-float F-money">{{sumPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney F-float F-money">{{sumSettlementMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney F-float F-money">{{sumUnPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class="F-float F-money">{{checkedUnPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n        <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n    </div>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n	<table class="table table-striped table-bordered table-hover all hct_align_middle" style="margin-top: 30px"> \r\n		<thead>\r\n			<tr class="T-tr-fixed bg-blur">\r\n                <th>账务类别</th>\r\n                <th>用餐日期(账期)</th>\r\n                <th>用餐类型</th>\r\n                <th>餐标<span style="font-size:12px;">(元/人)</span></th>\r\n                <th>人数</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>已付金额</th>\r\n                <th>单据</th>\r\n                <th> <span class="necessary">*</span>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th width="110">对账</th>\r\n            </tr>\r\n		</thead>\r\n		<tbody class="T-checkList" data-right="1240005">\r\n		    {{each financialRestaurantList as rs index}}  \r\n		    <tr class="T-checkTr {{if rs.change}}success{{/if}}" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}" \r\n            {{if rs.change}}data-change="true"{{/if}}>\r\n			    <td>{{if rs.tripNumber !=null && rs.tripNumber != ""}}{{rs.tripNumber}}\r\n                        {{if rs.lineProductName || rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.lineProductName != null && rs.lineProductName != ""}}{{rs.lineProductName}}\r\n                        {{if rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.guideName != null && rs.guideName != ""}}{{rs.guideName}}{{/if}}\r\n                </td>\r\n			    <td>{{if rs.accountTime == null || rs.accountTime == ""}}\r\n                        -\r\n                    {{else}}\r\n                        {{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}\r\n                    {{/if}}\r\n                </td>\r\n			    <td>{{if rs.type == null || rs.type == ""}}-{{else}}{{rs.type}}{{/if}}</td>\r\n                <td><span class="F-float F-money">{{rs.price}}</span></td>\r\n			    <td><span class="F-float F-count">{{rs.memberCount}}</span></td>\r\n			    <td><span class="F-float F-money">{{rs.reduceMoney}}</span></td>\r\n			    <td><span class="F-float F-money">{{rs.needPayMoney}}</span></td>\r\n			    <td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.realGuidePayMoney}}">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span>{{if !rs.isGuidePay || rs.isGuidePay != 1}}{{"，"}}{{"导付："}}<span class="F-float F-money">{{rs.realGuidePayMoney}}</span>{{/if}}</a></td> \r\n			    <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-restaurantImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n			    <td><input type="text" maxlength="9" name="settlementMoney" value="{{rs.settlementMoney}}" class="money F-float F-money"></td>\r\n                <td name="unPayedMoney" class="F-float F-money">{{rs.unPayedMoney}}</td>\r\n                <td><textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">{{rs.checkRemark}}</textarea></td>\r\n				<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n				<td style="padding-left:10px;">\r\n                    <label class="pos-rel">\r\n				   	    <input type="checkbox" class="ace T-checkbox" {{if (rs.change && rs.isChecked == 1) || (!rs.change && rs.isConfirmAccount == 1)}}checked="checked"{{/if}} />\r\n				   		<span class="lbl"></span>对账\r\n			        </label>\r\n                    <a class="cursor"> |</a>\r\n                    <a class="cursor T-option T-needPayDetail">查看</a>\r\n			    </td>\r\n			</tr>\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <label class="control-label pull-right" style="line-height:2.2em;margin-right:20px;">\r\n              <input type="checkbox" class="ace pull-right T-checkAll">\r\n              <span class="lbl"></span>全选\r\n            </label>\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveCheck marginLeft-30">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});