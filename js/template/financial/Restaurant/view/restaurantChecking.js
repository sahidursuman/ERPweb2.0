/*TMODJS:{"debug":true,"version":623,"md5":"aa3b6954000bab2edb5c3e06d09f0ae4"}*/
define(function(require) {
    return require("../../../template")("financial/Restaurant/view/restaurantChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, restaurantName = $data.restaurantName, sumNeedPayMoney = $data.sumNeedPayMoney, sumPayedMoney = $data.sumPayedMoney, sumSettlementMoney = $data.sumSettlementMoney, sumUnPayedMoney = $data.sumUnPayedMoney, checkedUnPayedMoney = $data.checkedUnPayedMoney, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, $each = $utils.$each, financialRestaurantList = $data.financialRestaurantList, $out = ($data.rs, 
            $data.index, "");
            return $out += '<div class="row T-newData" data-id="', $line = 1, $out += $escape(searchParam.restaurantId), 
            $out += '" data-name="', $line = 1, $out += $escape(restaurantName), $out += '"> <div class="col-xs-12 T-search-area" style="padding-bottom:0px;"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label> 餐厅：', 
            $line = 5, $out += $escape(restaurantName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 7, $out += $escape(searchParam.startDate), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 9, $out += $escape(searchParam.endDate), $out += '" style="width:100px;" /> <label class="marginLeft-30">账务类别：</label> <input name="accountInfo" placeholder="账务类别" type="text" value="', 
            $line = 12, $out += $escape(searchParam.accountInfo), $out += '" style="width:200px;" /> <button class="marginLeft-30 btn-sm search-btn T-search marginLeft-30"> <i class="ace-icon fa fa-search"></i>搜索 </button>  </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label class="control-label pull-left">账面应付合计：', 
            $line = 26, $out += $escape(sumNeedPayMoney), $out += '</label> <label class="control-label marginLeft-30">已付金额合计：', 
            $line = 27, $out += $escape(sumPayedMoney), $out += '</label> <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney">', 
            $line = 28, $out += $escape(sumSettlementMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney">', 
            $line = 29, $out += $escape(sumUnPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计(已对账)：', 
            $line = 30, $out += $escape(checkedUnPayedMoney), $out += '</label> </div> </form> </div> <input type="hidden" value="', 
            $line = 34, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 35, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr> <th class="th-border">序号</th> <th class="th-border">账务类别</th> <th class="th-border">用餐日期(账期)</th> <th class="th-border">用餐类型</th> <th class="th-border">餐标<span style="font-size:12px;">(元/人)</span></th> <th class="th-border">人数</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border"> <span class="necessary">*</span>结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1240005"> ', 
            $line = 58, $each(financialRestaurantList, function(rs, index) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 59, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 59, $out += $escape(rs.isConfirmAccount), $out += '"> <td>', 
                $line = 60, $out += $escape(index + 1), $out += "</td> <td>", $line = 61, $out += $escape(rs.tripNumber), 
                $line = 61, $out += $escape("，"), $line = 61, $out += $escape(rs.lineProductName), 
                $line = 61, $out += $escape("，"), $line = 61, $out += $escape(rs.guideName), $out += "</td> <td>", 
                $line = 62, null == rs.accountTime || "" == rs.accountTime ? ($out += " - ", $line = 64) : ($out += " ", 
                $line = 65, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $out += " ", $line = 66), $out += " </td> <td>", $line = 68, null == rs.type || "" == rs.type ? ($out += "-", 
                $line = 68) : ($line = 68, $out += $escape(rs.type), $line = 68), $out += "</td> <td>", 
                $line = 69, $out += $escape(rs.price), $out += "</td> <td>", $line = 70, $out += $escape(rs.memberCount), 
                $out += "</td> <td>", $line = 71, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 72, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail" data-money="', 
                $line = 73, $out += $escape(rs.payedMoney + rs.realGuidePayMoney), $out += '">', 
                $line = 73, $out += $escape("社付："), $line = 73, $out += $escape(rs.payedMoney), 
                $line = 73, $out += $escape("，"), $line = 73, $out += $escape("导付："), $line = 73, 
                $out += $escape(rs.realGuidePayMoney), $out += "</a></td> <td>", $line = 74, null != rs.billImage && "" != rs.billImage ? ($out += '<a href="#" class="T-option T-restaurantImg" url="', 
                $line = 74, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 74) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 74), $out += '</td> <td><input type="text" maxlength="9" name="settlementMoney" value="', 
                $line = 75, $out += $escape(rs.settlementMoney), $out += '" class="money"></td> <td name="unPayedMoney">', 
                $line = 76, $out += $escape(rs.unPayedMoney), $out += '</td> <td><input type="text" maxlength="1000" name="checkRemark" style="text-align:center" value="', 
                $line = 77, $out += $escape(rs.checkRemark), $out += '" /></td> <td>', $line = 78, 
                null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 78) : ($line = 78, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 78), 
                $out += "</td> <td>", $line = 79, null == rs.checkUserName || "" == rs.checkUserName ? ($out += "-", 
                $line = 79) : ($line = 79, $out += $escape(rs.checkUserName), $line = 79), $out += '</td> <td><label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 81, 1 == rs.isConfirmAccount && ($out += 'checked="checked"', $line = 81), 
                $out += ' /> <span class="lbl"></span> </label> ', $line = 84, 1 == rs.isConfirmAccount && ($out += '<a class="T-option T-needPayDetail">查看</a>', 
                $line = 84), $out += " </td> </tr> ", $line = 87;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 93, $out += $escape(searchParam.recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <div class="form-group text-right"> <label class="control-label pull-right" style="margin-right:20px;"> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span> 全选 </label> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-check" style="margin-left:20px"> <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveCheck"> <i class="ace-icon fa fa-check-circle"></i>确认 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-newData" data-id="{{searchParam.restaurantId}}" data-name="{{restaurantName}}">\r\n    <div class="col-xs-12 T-search-area" style="padding-bottom:0px;">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group"> \r\n                <label> 餐厅：{{restaurantName}}</label>\r\n                <label class="marginLeft-30">账期：</label>\r\n                <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startDate}}" style="width:100px;" />   \r\n                <label>&nbsp;至&nbsp;</label>\r\n                <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endDate}}" style="width:100px;" />   \r\n\r\n                <label class="marginLeft-30">账务类别：</label>\r\n                <input name="accountInfo" placeholder="账务类别" type="text" value="{{searchParam.accountInfo}}" style="width:200px;" />\r\n\r\n                <button class="marginLeft-30 btn-sm search-btn T-search marginLeft-30">\r\n                    <i class="ace-icon fa fa-search"></i>搜索\r\n                </button>\r\n                    \r\n                <!-- <button type="button" class="btn btn-sm btn-primary btn-success T-restaurantExport" style="margin-left: 25px;padding:0px;">\r\n			        <span>导出报表</span>\r\n			        <i class="ace-icon fa fa-arrow-right icon-on-right"></i>\r\n		        </button> -->\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group">\r\n                <label class="control-label pull-left">账面应付合计：{{sumNeedPayMoney}}</label>\r\n                <label class="control-label marginLeft-30">已付金额合计：{{sumPayedMoney}}</label>\r\n                <label class="control-label marginLeft-30">结算金额合计：<span class="T-stMoney">{{sumSettlementMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpayMoney">{{sumUnPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计(已对账)：{{checkedUnPayedMoney}}</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n	<table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> \r\n		<thead>\r\n			<tr>\r\n                <th class="th-border">序号</th>\r\n                <th class="th-border">账务类别</th>\r\n                <th class="th-border">用餐日期(账期)</th>\r\n                <th class="th-border">用餐类型</th>\r\n                <th class="th-border">餐标<span style="font-size:12px;">(元/人)</span></th>\r\n                <th class="th-border">人数</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border"> <span class="necessary">*</span>结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>\r\n		</thead>\r\n		<tbody class="T-checkList" data-right="1240005">\r\n		    {{each financialRestaurantList as rs index}}  \r\n		    <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}">\r\n			    <td>{{index+1}}</td>\r\n			    <td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n			    <td>{{if rs.accountTime == null || rs.accountTime == ""}}\r\n                        -\r\n                    {{else}}\r\n                        {{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}\r\n                    {{/if}}\r\n                </td>\r\n			    <td>{{if rs.type == null || rs.type == ""}}-{{else}}{{rs.type}}{{/if}}</td>\r\n                <td>{{rs.price}}</td>\r\n			    <td>{{rs.memberCount}}</td>\r\n			    <td>{{rs.reduceMoney}}</td>\r\n			    <td>{{rs.needPayMoney}}</td>\r\n			    <td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.realGuidePayMoney}}">{{"社付："}}{{rs.payedMoney}}{{"，"}}{{"导付："}}{{rs.realGuidePayMoney}}</a></td> \r\n			    <td>{{if rs.billImage != null && rs.billImage !=""}}<a href="#" class="T-option T-restaurantImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n			    <td><input type="text" maxlength="9" name="settlementMoney" value="{{rs.settlementMoney}}" class="money"></td>\r\n                <td name="unPayedMoney">{{rs.unPayedMoney}}</td>\r\n                <td><input type="text" maxlength="1000" name="checkRemark" style="text-align:center" value="{{rs.checkRemark}}" /></td>\r\n				<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUserName == null || rs.checkUserName == ""}}-{{else}}{{rs.checkUserName}}{{/if}}</td>\r\n				<td><label class="pos-rel">\r\n				   	    <input type="checkbox" class="ace T-checkbox" {{if rs.isConfirmAccount == 1}}checked="checked"{{/if}} />\r\n				   		<span class="lbl"></span>\r\n			        </label>\r\n                    {{if rs.isConfirmAccount == 1}}<a class="T-option T-needPayDetail">查看</a>{{/if}}\r\n			    </td>\r\n			</tr>\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{searchParam.recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class="form-group text-right">\r\n        <label class="control-label pull-right" style="margin-right:20px;"> \r\n            <input type="checkbox" class="ace pull-right T-checkAll">\r\n            <span class="lbl"></span>  \r\n            全选\r\n        </label>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-check" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveCheck">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});