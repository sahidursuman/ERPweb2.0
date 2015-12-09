/*TMODJS:{"debug":true,"version":251,"md5":"6f7ae1c9d2fedb4aadf84b6d3c72010a"}*/
define(function(require) {
    return require("../../../template")("financial/Self/view/SelfChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, selfPayName = $data.selfPayName, sumData = $data.sumData, WEB_IMG_URL_BIG = $data.WEB_IMG_URL_BIG, WEB_IMG_URL_SMALL = $data.WEB_IMG_URL_SMALL, $each = $utils.$each, list = $data.list, recordSize = ($data.rs, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row T-cking T-newData" data-id="', $line = 1, $out += $escape(searchParam.selfPayId), 
            $out += '" data-name="', $line = 1, $out += $escape(selfPayName), $out += '"> <div class="col-xs-12" style="padding-bottom: 0px"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area T-search-area"> <div class="form-group"> <label>自费商家：', 
            $line = 6, $out += $escape(selfPayName), $out += '</label> <label class="marginLeft-30">账期：</label> <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 9, $out += $escape($helpers.dateFormat(searchParam.startTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 11, $out += $escape($helpers.dateFormat(searchParam.endTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label class="marginLeft-30">团信息：</label> <input name="tripInfo" placeholder="团信息" type="text" value="', 
            $line = 14, $out += $escape(searchParam.tripInfo), $out += '" style="width:200px;" /> <button class="marginLeft-30 btn-sm search-btn T-search"> <i class="ace-icon fa fa-search"></i>搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class="control-label pull-left">账面应付合计：', 
            $line = 24, $out += $escape(sumData.needPayMoney), $out += '</label> <label class="control-label" style="margin-left:30px;">已付金额合计：', 
            $line = 25, $out += $escape(sumData.payedMoney), $out += '</label> <label class="control-label" style="margin-left:30px;">结算金额合计：<span class="T-stMoney">', 
            $line = 26, $out += $escape(sumData.settlementMoney), $out += '</span></label> <label class="control-label" style="margin-left:30px;">未付金额合计：<span class="T-unpayMoney">', 
            $line = 27, $out += $escape(sumData.unPayedMoney), $out += '</span></label> </div> </form> </div> <input type="hidden" value="', 
            $line = 31, $out += $escape(WEB_IMG_URL_BIG), $out += '" name="WEB_IMG_URL_BIG" /> <input type="hidden" value="', 
            $line = 32, $out += $escape(WEB_IMG_URL_SMALL), $out += '" name="WEB_IMG_URL_SMALL" /> <table class="table table-striped table-bordered table-hover all" style="margin-top: 30px"> <thead> <tr > <th class="th-border">序号</th> <th class="th-border">团信息</th> <th class="th-border">消费日期</th> <th class="th-border">数量</th> <th class="th-border">单价</th> <th class="th-border">底价</th> <th class="th-border">优惠</th> <th class="th-border">账面应付</th> <th class="th-border">已付金额</th> <th class="th-border">单据</th> <th class="th-border"><span class="necessary">*</span>结算金额</th> <th class="th-border">未付金额</th> <th class="th-border">备注</th> <th class="th-border">对账时间</th> <th class="th-border">对账人</th> <th class="th-border">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1260005"> ', 
            $line = 55, $each(list, function(rs, index) {
                $out += ' <tr class="T-checkTr" data-id="', $line = 56, $out += $escape(rs.id), 
                $out += '" data-confirm="', $line = 56, $out += $escape(rs.isConfirmAccount), $out += '"> <td>', 
                $line = 57, $out += $escape(index + 1), $out += "</td> <td>", $line = 58, $out += $escape(rs.tripNumber), 
                $line = 58, $out += $escape("，"), $line = 58, $out += $escape(rs.lineProductName), 
                $line = 58, $out += $escape("，"), $line = 58, $out += $escape(rs.guideName), $out += "</td> <td>", 
                $line = 59, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", $line = 59) : ($line = 59, 
                $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), $line = 59), 
                $out += "</td> <td>", $line = 60, $out += $escape(rs.realCount), $out += "</td> <td>", 
                $line = 61, $out += $escape(rs.price), $out += "</td> <td>", $line = 62, $out += $escape(rs.lowestPrice), 
                $out += "</td> <td>", $line = 63, $out += $escape(rs.reduceMoney), $out += "</td> <td>", 
                $line = 64, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="T-option T-payedDetail" data-money="', 
                $line = 65, $out += $escape(rs.payedMoney + rs.guidePayMoney), $out += '">', $line = 65, 
                $out += $escape("社付："), $line = 65, $out += $escape(rs.payedMoney), $line = 65, 
                $out += $escape("，"), $line = 65, $out += $escape("导付："), $line = 65, $out += $escape(rs.guidePayMoney), 
                $out += "</a></td> <td>", $line = 66, null != rs.billImage && "" != rs.billImage ? ($out += '<a class="T-option T-selfPayImg" url="', 
                $line = 66, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 66) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 66), $out += '</td> <td><input type="text" maxlength="9" name="settlementMoney" value="', 
                $line = 67, $out += $escape(rs.settlementMoney), $out += '" class="money" style="text-align:center" /></td> <td name="unPayedMoney">', 
                $line = 68, $out += $escape(rs.unPayedMoney), $out += '</td> <td><input type="text" maxlength="1000" name="checkRemark" value="', 
                $line = 69, $out += $escape(rs.checkRemark), $out += '" style="text-align:center" /></td> <td>', 
                $line = 70, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", $line = 70) : ($line = 70, 
                $out += $escape($helpers.dateFormat(rs.checkTime, "yyyy-MM-dd hh:mm:ss")), $line = 70), 
                $out += "</td> <td>", $line = 71, null == rs.checkUser || "" == rs.checkUser ? ($out += "-", 
                $line = 71) : ($line = 71, $out += $escape(rs.checkUser), $line = 71), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 74, 1 == rs.isConfirmAccount && ($out += 'checked="checked"', $line = 74), 
                $out += ' /> <span class="lbl"></span> </label> ', $line = 77, 1 == rs.isConfirmAccount && ($out += '<a class="T-option T-needPayDetail">查看</a>', 
                $line = 77), $out += " </td> </tr> ", $line = 80;
            }), $out += ' </tbody> </table> <div class="form-group text-right"> <label class="control-label pull-right"/> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span> 全选 </label> </div> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 93, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-close-check" > <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i>确认 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-cking T-newData" data-id="{{searchParam.selfPayId}}" data-name="{{selfPayName}}">\r\n    <div class="col-xs-12" style="padding-bottom: 0px">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area T-search-area">\r\n                <div class="form-group"> \r\n                    <label>自费商家：{{selfPayName}}</label>\r\n\r\n	                <label class="marginLeft-30">账期：</label>\r\n                    <input class="date-picker" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />   \r\n\r\n                    <label class="marginLeft-30">团信息：</label>\r\n                    <input name="tripInfo" placeholder="团信息" type="text" value="{{searchParam.tripInfo}}" style="width:200px;" />\r\n\r\n                    <button class="marginLeft-30 btn-sm search-btn T-search">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>						\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class="control-label pull-left">账面应付合计：{{sumData.needPayMoney}}</label>\r\n                <label class="control-label" style="margin-left:30px;">已付金额合计：{{sumData.payedMoney}}</label>\r\n                <label class="control-label" style="margin-left:30px;">结算金额合计：<span class="T-stMoney">{{sumData.settlementMoney}}</span></label>\r\n                <label class="control-label" style="margin-left:30px;">未付金额合计：<span class="T-unpayMoney">{{sumData.unPayedMoney}}</span></label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n    <input type="hidden" value="{{WEB_IMG_URL_BIG}}" name="WEB_IMG_URL_BIG" />\r\n    <input type="hidden" value="{{WEB_IMG_URL_SMALL}}" name="WEB_IMG_URL_SMALL" />\r\n	<table class="table table-striped table-bordered table-hover all" style="margin-top: 30px">\r\n		<thead>\r\n			<tr >\r\n                <th class="th-border">序号</th>\r\n                <th class="th-border">团信息</th>\r\n                <th class="th-border">消费日期</th>\r\n                <th class="th-border">数量</th>\r\n                <th class="th-border">单价</th>\r\n                <th class="th-border">底价</th>\r\n                <th class="th-border">优惠</th>\r\n                <th class="th-border">账面应付</th>\r\n                <th class="th-border">已付金额</th>\r\n                <th class="th-border">单据</th>\r\n                <th class="th-border"><span class="necessary">*</span>结算金额</th>\r\n                <th class="th-border">未付金额</th>\r\n                <th class="th-border">备注</th>\r\n                <th class="th-border">对账时间</th>\r\n                <th class="th-border">对账人</th>\r\n                <th class="th-border">对账</th>\r\n            </tr>   \r\n		</thead>\r\n		<tbody class="T-checkList" data-right="1260005">\r\n		    {{each list as rs index}}\r\n		    <tr class="T-checkTr" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}">\r\n	            <td>{{index+1}}</td>\r\n				<td>{{rs.tripNumber}}{{"，"}}{{rs.lineProductName}}{{"，"}}{{rs.guideName}}</td>\r\n				<td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n				<td>{{rs.realCount}}</td>\r\n				<td>{{rs.price}}</td>\r\n				<td>{{rs.lowestPrice}}</td>\r\n				<td>{{rs.reduceMoney}}</td>\r\n				<td>{{rs.needPayMoney}}</td>\r\n				<td><a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.guidePayMoney}}">{{"社付："}}{{rs.payedMoney}}{{"，"}}{{"导付："}}{{rs.guidePayMoney}}</a></td> \r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a class="T-option T-selfPayImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n				<td><input type="text" maxlength="9" name="settlementMoney" value="{{rs.settlementMoney}}" class="money" style="text-align:center" /></td>\r\n                <td name="unPayedMoney">{{rs.unPayedMoney}}</td>\r\n                <td><input type="text" maxlength="1000" name="checkRemark" value="{{rs.checkRemark}}" style="text-align:center" /></td>\r\n				<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateFormat:\'yyyy-MM-dd hh:mm:ss\'}}{{/if}}</td>\r\n                <td>{{if rs.checkUser == null || rs.checkUser == ""}}-{{else}}{{rs.checkUser}}{{/if}}</td>\r\n				<td>\r\n				    <label class="pos-rel">\r\n				   		<input type="checkbox" class="ace T-checkbox" {{if rs.isConfirmAccount == 1}}checked="checked"{{/if}} />\r\n				   		<span class="lbl"></span>\r\n				    </label>\r\n                    {{if rs.isConfirmAccount == 1}}<a class="T-option T-needPayDetail">查看</a>{{/if}}\r\n				</td>\r\n		    </tr>\r\n		    {{/each}}\r\n		</tbody>\r\n	</table>\r\n    <div class="form-group text-right">\r\n        <label class="control-label pull-right"/>\r\n            <input type="checkbox" class="ace pull-right T-checkAll">\r\n            <span class="lbl"></span>  \r\n            全选\r\n        </label>\r\n    </div>\r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n          <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n          </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-close-check" >\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});