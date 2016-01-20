/*TMODJS:{"debug":true,"version":300,"md5":"e439a02ce436198ac83bf82f9e2b12f4"}*/
define(function(require) {
    return require("../../../template")("financial/Self/view/SelfChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, selfPayName = $data.selfPayName, sumData = $data.sumData, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, $each = $utils.$each, list = $data.list, recordSize = ($data.rs, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row T-cking T-newData" data-id="', $line = 1, $out += $escape(searchParam.selfPayId), 
            $out += '" data-name="', $line = 1, $out += $escape(selfPayName), $out += '"> <div class="col-xs-12" style="padding-bottom: 0px"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area T-search-area"> <div class="form-group"> <label>自费商家：', 
            $line = 6, $out += $escape(selfPayName), $out += '</label> <input value="', $line = 7, 
            $out += $escape(selfPayName), $out += '" name="selfPayName" type="hidden"> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 9, $out += $escape($helpers.dateFormat(searchParam.startTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 11, $out += $escape($helpers.dateFormat(searchParam.endTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label class="marginLeft-30">团信息：</label> <input name="tripInfo" placeholder="团信息" type="text" value="', 
            $line = 14, $out += $escape(searchParam.tripInfo), $out += '" style="width:200px;" /> <button class="marginLeft-30 btn-sm search-btn T-search"> <i class="ace-icon fa fa-search"></i>搜索 </button> <button class="btn-sm search-btn T-btn-export marginLeft-30">导出报表</button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">', 
            $line = 25, $out += $escape(sumData.needPayMoney), $out += '</span></label> <label class="control-label" style="margin-left:30px;">已付金额合计：<span class="F-float F-money">', 
            $line = 26, $out += $escape(sumData.payedMoney), $out += '</span></label> <label class="control-label" style="margin-left:30px;">结算金额合计：<span class="T-stMoney F-float F-money">', 
            $line = 27, $out += $escape(sumData.settlementMoney), $out += '</span></label> <label class="control-label" style="margin-left:30px;">未付金额合计：<span class="T-unpayMoney F-float F-money">', 
            $line = 28, $out += $escape(sumData.unPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class=" F-float F-money">', 
            $line = 29, $out += $escape(sumData.unPayedMoneyConfirmed), $out += 'F-float F-money</label> </div> </form> </div> <input type="hidden" value="', 
            $line = 33, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 34, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr > <th class="th-border">团信息</th> <th class="th-border">消费日期(账期)</th> <th class="th-border">自费项目</th> <th class="th-border">底价</th> <th class="th-border">数量</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border"><span class="necessary">*</span>结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1260005"> ', 
            $line = 56, $each(list, function(rs) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 57, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 57, $out += $escape(rs.isConfirmAccount), $out += '"> <td>', 
                $line = 58, null != rs.tripNumber && "" != rs.tripNumber && ($line = 58, $out += $escape(rs.tripNumber), 
                $out += " ", $line = 59, (rs.lineProductName || rs.guideName) && ($out += "，", $line = 59), 
                $out += " ", $line = 60), $out += " ", $line = 61, null != rs.lineProductName && "" != rs.lineProductName && ($line = 61, 
                $out += $escape(rs.lineProductName), $out += " ", $line = 62, rs.guideName && ($out += "，", 
                $line = 62), $out += " ", $line = 63), $out += " ", $line = 64, null != rs.guideName && "" != rs.guideName && ($line = 64, 
                $out += $escape(rs.guideName), $line = 64), $out += " </td> <td>", $line = 66, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", 
                $line = 66) : ($line = 66, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $line = 66), $out += "</td> <td>", $line = 67, $out += $escape(rs.itemName), $out += '</td> <td class="F-float F-money">', 
                $line = 68, $out += $escape(rs.lowestPrice), $out += '</td> <td class="F-float F-count">', 
                $line = 69, $out += $escape(rs.realCount), $out += '</td> <td class="F-float F-money">', 
                $line = 70, $out += $escape(rs.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 71, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail" data-money="', 
                $line = 72, $out += $escape(rs.payedMoney + rs.guidePayMoney), $out += '">', $line = 72, 
                $out += $escape("社付："), $out += '<span class="F-float F-money">', $line = 72, $out += $escape(rs.payedMoney), 
                $out += "</span>", $line = 72, $out += $escape("，"), $line = 72, $out += $escape("导付："), 
                $out += '<span class="F-float F-money">', $line = 72, $out += $escape(rs.guidePayMoney), 
                $out += "</span></a></td> <td>", $line = 73, null != rs.billImage && "" != rs.billImage ? ($out += '<a class="T-option T-selfPayImg" url="', 
                $line = 73, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 73) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 73), $out += '</td> <td><input type="text" maxlength="9" name="settlementMoney" value="', 
                $line = 74, $out += $escape(rs.settlementMoney), $out += '" class="money F-float F-money" style="text-align:center" /></td> <td name="unPayedMoney" class="F-float F-money">', 
                $line = 75, $out += $escape(rs.unPayedMoney), $out += '</td> <td><input type="text" maxlength="1000" name="checkRemark" class="F-float F-money" value="', 
                $line = 76, $out += $escape(rs.checkRemark), $out += '" style="text-align:center" /></td> <td>', 
                $line = 77, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 77) : ($line = 77, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 77), 
                $out += "</td> <td>", $line = 78, null == rs.checkUser || "" == rs.checkUser ? ($out += "-", 
                $line = 78) : ($line = 78, $out += $escape(rs.checkUser), $line = 78), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 81, 1 == rs.isConfirmAccount && ($out += 'checked="checked"', $line = 81), 
                $out += ' /> <span class="lbl"></span> 对账 <a class="cursor"> |</a> </label> <a class="T-option T-needPayDetail cursor">查看</a> </td> </tr> ', 
                $line = 88;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 95, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-5"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> <div class="form-group text-right"> <label class="control-label pull-right"/> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span> 全选 </label> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-check" > <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i>确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-cking T-newData" data-id="{{searchParam.selfPayId}}" data-name="{{selfPayName}}">\r\n    <div class="col-xs-12" style="padding-bottom: 0px">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area T-search-area">\r\n                <div class="form-group"> \r\n                    <label>自费商家：{{selfPayName}}</label>\r\n                    <input value="{{selfPayName}}" name="selfPayName" type="hidden">\r\n	                <label class="marginLeft-30">账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />   \r\n\r\n                    <label class="marginLeft-30">团信息：</label>\r\n                    <input name="tripInfo" placeholder="团信息" type="text" value="{{searchParam.tripInfo}}" style="width:200px;" />\r\n\r\n                    <button class="marginLeft-30 btn-sm search-btn T-search">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                    <button class="btn-sm search-btn T-btn-export marginLeft-30">导出报表</button>						\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">{{sumData.needPayMoney}}</span></label>\r\n                <label class="control-label" style="margin-left:30px;">已付金额合计：<span class="F-float F-money">{{sumData.payedMoney}}</span></label>\r\n                <label class="control-label" style="margin-left:30px;">结算金额合计：<span class="T-stMoney F-float F-money">{{sumData.settlementMoney}}</span></label>\r\n                <label class="control-label" style="margin-left:30px;">未付金额合计：<span class="T-unpayMoney F-float F-money">{{sumData.unPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class=" F-float F-money">{{sumData.unPayedMoneyConfirmed}}F-float F-money</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n	<table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n		<thead>\r\n			<tr >\r\n                <th class="th-border">团信息</th>\r\n                <th class="th-border">消费日期(账期)</th>\r\n                <th class="th-border">自费项目</th>\r\n                <th class="th-border">底价</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border"><span class="necessary">*</span>结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>   \r\n		</thead>\r\n		<tbody class="T-checkList" data-right="1260005">\r\n		    {{each list as rs index}}\r\n		    <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}">\r\n				<td>{{if rs.tripNumber !=null && rs.tripNumber != ""}}{{rs.tripNumber}}\r\n                        {{if rs.lineProductName || rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.lineProductName != null && rs.lineProductName != ""}}{{rs.lineProductName}}\r\n                        {{if rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.guideName != null && rs.guideName != ""}}{{rs.guideName}}{{/if}}\r\n                </td>\r\n				<td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{rs.itemName}}</td>\r\n				<td class="F-float F-money">{{rs.lowestPrice}}</td>\r\n                <td class="F-float F-count">{{rs.realCount}}</td>				\r\n				<td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n				<td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n				<td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.guidePayMoney}}">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span>{{"，"}}{{"导付："}}<span class="F-float F-money">{{rs.guidePayMoney}}</span></a></td> \r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a class="T-option T-selfPayImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n				<td><input type="text" maxlength="9" name="settlementMoney" value="{{rs.settlementMoney}}" class="money F-float F-money" style="text-align:center" /></td>\r\n                <td name="unPayedMoney" class="F-float F-money">{{rs.unPayedMoney}}</td>\r\n                <td><input type="text" maxlength="1000" name="checkRemark" class="F-float F-money" value="{{rs.checkRemark}}" style="text-align:center" /></td>\r\n				<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUser == null || rs.checkUser == ""}}-{{else}}{{rs.checkUser}}{{/if}}</td>\r\n				<td>\r\n				    <label class="pos-rel">\r\n				   		<input type="checkbox" class="ace T-checkbox" {{if rs.isConfirmAccount == 1}}checked="checked"{{/if}} />\r\n				   		<span class="lbl"></span> 对账\r\n                        <a class="cursor"> |</a>\r\n				    </label>\r\n                    <a class="T-option T-needPayDetail cursor">查看</a>\r\n				</td>\r\n		    </tr>\r\n		    {{/each}}\r\n		</tbody>\r\n	</table>\r\n    \r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-5">\r\n          <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n          </div>\r\n        </div>\r\n            <div class="form-group text-right">\r\n        <label class="control-label pull-right"/>\r\n            <input type="checkbox" class="ace pull-right T-checkAll">\r\n            <span class="lbl"></span>  \r\n            全选\r\n        </label>\r\n    </div>\r\n    </div>\r\n\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-check" >\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});