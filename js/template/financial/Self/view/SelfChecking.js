/*TMODJS:{"debug":true,"version":363,"md5":"336f9c85d3fd9e078be66313c6e410a1"}*/
define(function(require) {
    return require("../../../template")("financial/Self/view/SelfChecking", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, selfPayName = $data.selfPayName, sumData = $data.sumData, $each = $utils.$each, list = $data.list, recordSize = ($data.rs, 
            $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row T-cking T-newData" data-id="', $line = 1, $out += $escape(searchParam.selfPayId), 
            $out += '" data-name="', $line = 1, $out += $escape(selfPayName), $out += '"> <div class="col-xs-12" style="padding-bottom: 0px"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area T-search-area"> <div class="form-group"> <label>自费商家：</label> <input type="text" name="selfPayName" class="T-selfPayName mar-r-10" value="', 
            $line = 7, $out += $escape(selfPayName), $out += '" > <input type="hidden" name="selfPayId" value="', 
            $line = 8, $out += $escape(searchParam.selfPayId), $out += '"> <label>账期：</label> <input class="date-picker T-time" name="startDate" placeholder="开始日期" type="text" value="', 
            $line = 10, $out += $escape($helpers.dateFormat(searchParam.startTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker T-time mar-r-10" name="endDate" placeholder="结束日期" type="text" value="', 
            $line = 12, $out += $escape($helpers.dateFormat(searchParam.endTime, "yyyy-MM-dd")), 
            $out += '" style="width:100px;" /> <label>团信息：</label> <input name="tripInfo" class="mar-r-10" placeholder="团信息" type="text" value="', 
            $line = 15, $out += $escape(searchParam.tripInfo), $out += '" style="width:200px;" /> <label>对账状态：</label> <div class="btn-group T-check-status mar-r-10"> <button data-value="', 
            $line = 19, $out += $escape(searchParam.isConfirmAccount), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 21, searchParam.isConfirmAccount && "" !== searchParam.isConfirmAccount ? 1 == searchParam.isConfirmAccount ? ($out += " 已对账 ", 
            $line = 25) : ($out += " 未对账 ", $line = 27) : ($out += " 全部 ", $line = 23), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已对账</a></li> <li><a data-value="0" href="javascript:void(0)">未对账</a></li> </ul> </div> <label>对账时间：</label> <input class="date-picker T-checkTime T-checkStartTime" placeholder="开始日期" type="text" value="', 
            $line = 38, $out += $escape(searchParam.startCheck), $out += '" style="width:100px;" /> <label>&nbsp;至&nbsp;</label> <input class="date-picker T-checkTime mar-r-10 T-checkEndTime" value="', 
            $line = 40, $out += $escape(searchParam.endCheck), $out += '" placeholder="结束日期" type="text" style="width:100px;" /> <button class="btn-sm search-btn T-search mar-r-10"> <i class="ace-icon fa fa-search"></i>搜索 </button> <button class="btn-sm search-btn T-btn-export">导出报表</button> </div> <input name="accountStatus" value="', 
            $line = 47, $out += $escape(searchParam.accountStatus), $out += '" type="hidden"> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group "> <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">', 
            $line = 52, $out += $escape(sumData.needPayMoney), $out += '</span></label> <label class="control-label" style="margin-left:30px;">已付金额合计：<span class="F-float F-money">', 
            $line = 53, $out += $escape(sumData.payedMoney), $out += '</span></label> <label class="control-label" style="margin-left:30px;">结算金额合计：<span class="T-stMoney F-float F-money">', 
            $line = 54, $out += $escape(sumData.settlementMoney), $out += '</span></label> <label class="control-label" style="margin-left:30px;">未付金额合计：<span class="T-unpayMoney F-float F-money">', 
            $line = 55, $out += $escape(sumData.unPayedMoney), $out += '</span></label> <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class=" F-float F-money">', 
            $line = 56, $out += $escape(sumData.unPayedMoneyConfirmed), $out += '</label> </div> </form> </div> <table class="table table-striped table-bordered table-hover all hct_align_middle" style="margin-top: 30px"> <thead> <tr class="T-tr-fixed bg-blur"> <th>团信息</th> <th>消费日期(账期)</th> <th>自费项目</th> <th>底价</th> <th>数量</th> <th>优惠</th> <th>账面应付</th> <th>预付款申请</th> <th>已付金额</th> <th>单据</th> <th><span class="necessary">*</span>结算金额</th> <th>未付金额</th> <th>备注</th> <th>对账时间</th> <th>对账人</th> <th style="width:115px">对账</th> </tr> </thead> <tbody class="T-checkList" data-right="1260002|1260005"> ', 
            $line = 82, $each(list, function(rs) {
                $out += ' <tr class="T-checkTr ', $line = 83, rs.change && ($out += "success", $line = 83), 
                $out += '" data-id="', $line = 83, $out += $escape(rs.id), $out += '" data-confirm="', 
                $line = 83, $out += $escape(rs.isConfirmAccount), $out += '" ', $line = 84, rs.change && ($out += 'data-change="true"', 
                $line = 84), $out += "> <td>", $line = 85, null != rs.tripNumber && "" != rs.tripNumber && ($line = 85, 
                $out += $escape(rs.tripNumber), $out += " ", $line = 86, (rs.lineProductName || rs.guideName) && ($out += "，", 
                $line = 86), $out += " ", $line = 87), $out += " ", $line = 88, null != rs.lineProductName && "" != rs.lineProductName && ($line = 88, 
                $out += $escape(rs.lineProductName), $out += " ", $line = 89, rs.guideName && ($out += "，", 
                $line = 89), $out += " ", $line = 90), $out += " ", $line = 91, null != rs.guideName && "" != rs.guideName && ($line = 91, 
                $out += $escape(rs.guideName), $line = 91), $out += " </td> <td>", $line = 93, null == rs.accountTime || "" == rs.accountTime ? ($out += "-", 
                $line = 93) : ($line = 93, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd")), 
                $line = 93), $out += "</td> <td>", $line = 94, $out += $escape(rs.itemName), $out += '</td> <td class="F-float F-money">', 
                $line = 95, $out += $escape(rs.lowestPrice), $out += '</td> <td class="F-float F-count">', 
                $line = 96, $out += $escape(rs.realCount), $out += '</td> <td class="F-float F-money">', 
                $line = 97, $out += $escape(rs.reduceMoney), $out += '</td> <td class="F-float F-money">', 
                $line = 98, $out += $escape(rs.needPayMoney), $out += '</td> <td><a class="', $line = 99, 
                rs.payRecoredId ? ($out += "T-option T-payRequest", $line = 99) : ($out += "black", 
                $line = 99), $out += '" data-preid="', $line = 99, $out += $escape(rs.payRecoredId), 
                $out += '" ', $line = 99, rs.payRecoredId || ($out += 'title="没有预付款记录"', $line = 99), 
                $out += '><span class="F-float F-money">', $line = 99, $out += $escape(rs.prePayMoney), 
                $out += '</span></a></td> <td class="align-left"> <a class="T-option T-payedDetail" data-money="', 
                $line = 101, $out += $escape(rs.payedMoney + rs.guidePayMoney), $out += '"> <span class="in-block">', 
                $line = 102, $out += $escape("社付："), $out += '<span class="F-float F-money">', $line = 102, 
                $out += $escape(rs.payedMoney), $out += '</span></span> <span class="in-block">', 
                $line = 103, $out += $escape("导付："), $out += '<span class="F-float F-money">', $line = 103, 
                $out += $escape(rs.guidePayMoney), $out += "</span></span> </a> </td> <td>", $line = 106, 
                null != rs.billImage && "" != rs.billImage ? ($out += '<a class="T-option T-selfPayImg" url="', 
                $line = 106, $out += $escape(rs.billImage), $out += '"><span>查看</span></a>', $line = 106) : ($out += '<span style="color:#bbb">查看</span>', 
                $line = 106), $out += "</td> <td>", $line = 107, rs.isConfirmAccount ? ($out += '<span class="F-float F-money">', 
                $line = 107, $out += $escape(rs.settlementMoney), $out += "</span> ", $line = 108) : ($out += ' <input type="text" maxlength="9" name="settlementMoney" value="', 
                $line = 109, $out += $escape(rs.settlementMoney), $out += '" class="money F-float F-money" style="text-align:center" /> ', 
                $line = 110), $out += ' </td> <td name="unPayedMoney" class="F-float F-money">', 
                $line = 112, $out += $escape(rs.unPayedMoney), $out += "</td> <td>", $line = 113, 
                rs.isConfirmAccount ? ($line = 113, $out += $escape(rs.isConfirmAccount), $out += " ", 
                $line = 114) : ($out += ' <textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">', 
                $line = 115, $out += $escape(rs.checkRemark), $out += "</textarea> ", $line = 116), 
                $out += " </td> <td>", $line = 118, null == rs.checkTime || "" == rs.checkTime ? ($out += "-", 
                $line = 118) : ($line = 118, $out += $escape($helpers.dateTimeFormat(rs.checkTime)), 
                $line = 118), $out += "</td> <td>", $line = 119, null == rs.checkUser || "" == rs.checkUser ? ($out += "-", 
                $line = 119) : ($line = 119, $out += $escape(rs.checkUser), $line = 119), $out += '</td> <td> <label class="pos-rel"> <input type="checkbox" class="ace T-checkbox" ', 
                $line = 122, (rs.change && 1 == rs.isChecked || !rs.change && 1 == rs.isConfirmAccount) && ($out += 'checked="checked"', 
                $line = 122), $out += ' /> <span class="lbl"></span> 对账 <a class="cursor"> |</a> </label> <a class="T-option T-needPayDetail cursor">查看</a> </td> </tr> ', 
                $line = 129;
            }), $out += ' </tbody> </table> <div class="clearfix"></div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 136, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-5"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> <div class="form-group text-right"> <label class="control-label pull-right"/> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span> 全选 </label> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-btn-close" > <i class="ace-icon fa fa-times-circle"></i>关闭 </button> <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left:20px"> <i class="ace-icon fa fa-check-circle"></i>确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-cking T-newData" data-id="{{searchParam.selfPayId}}" data-name="{{selfPayName}}">\r\n    <div class="col-xs-12" style="padding-bottom: 0px">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area T-search-area">\r\n                <div class="form-group"> \r\n                    <label>自费商家：</label>\r\n                    <input type="text" name="selfPayName" class="T-selfPayName mar-r-10" value="{{selfPayName}}" >\r\n                    <input type="hidden" name="selfPayId" value="{{searchParam.selfPayId}}">\r\n	                <label>账期：</label>\r\n                    <input class="date-picker T-time" name="startDate" placeholder="开始日期" type="text" value="{{searchParam.startTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />   \r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker T-time mar-r-10" name="endDate" placeholder="结束日期" type="text" value="{{searchParam.endTime | dateFormat:\'yyyy-MM-dd\'}}" style="width:100px;" />   \r\n\r\n                    <label>团信息：</label>\r\n                    <input name="tripInfo" class="mar-r-10" placeholder="团信息" type="text" value="{{searchParam.tripInfo}}" style="width:200px;" />\r\n                    \r\n                    <label>对账状态：</label>\r\n                    <div class="btn-group T-check-status mar-r-10">\r\n                        <button data-value="{{searchParam.isConfirmAccount}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" aria-expanded="false">\r\n                            <span>\r\n                                {{if !searchParam.isConfirmAccount || searchParam.isConfirmAccount === ""}}\r\n                                    全部\r\n                                {{else if searchParam.isConfirmAccount == 1}}\r\n                                    已对账\r\n                                {{else}}\r\n                                    未对账\r\n                                {{/if}}\r\n                            </span>\r\n                            <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                        </button>\r\n                        <ul class="dropdown-menu">\r\n                            <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                            <li><a data-value="1" href="javascript:void(0)">已对账</a></li>\r\n                            <li><a data-value="0" href="javascript:void(0)">未对账</a></li>\r\n                        </ul>\r\n                    </div>\r\n                    <label>对账时间：</label>\r\n                    <input class="date-picker T-checkTime T-checkStartTime" placeholder="开始日期" type="text" value="{{searchParam.startCheck}}" style="width:100px;" />\r\n                    <label>&nbsp;至&nbsp;</label>\r\n                    <input class="date-picker T-checkTime mar-r-10 T-checkEndTime" value="{{searchParam.endCheck}}" placeholder="结束日期" type="text" style="width:100px;" />\r\n\r\n                    <button class="btn-sm search-btn T-search mar-r-10">\r\n                        <i class="ace-icon fa fa-search"></i>搜索\r\n                    </button>\r\n                    <button class="btn-sm search-btn T-btn-export">导出报表</button>						\r\n                </div>\r\n                <input name="accountStatus" value="{{searchParam.accountStatus}}" type="hidden">\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group ">\r\n                <label class="control-label pull-left">账面应付合计：<span class="F-float F-money">{{sumData.needPayMoney}}</span></label>\r\n                <label class="control-label" style="margin-left:30px;">已付金额合计：<span class="F-float F-money">{{sumData.payedMoney}}</span></label>\r\n                <label class="control-label" style="margin-left:30px;">结算金额合计：<span class="T-stMoney F-float F-money">{{sumData.settlementMoney}}</span></label>\r\n                <label class="control-label" style="margin-left:30px;">未付金额合计：<span class="T-unpayMoney F-float F-money">{{sumData.unPayedMoney}}</span></label>\r\n                <label class="control-label marginLeft-30">未付金额合计(已对账)：<span class=" F-float F-money">{{sumData.unPayedMoneyConfirmed}}</label>\r\n            </div>\r\n        </form>\r\n    </div>\r\n	<table class="table table-striped table-bordered table-hover all hct_align_middle" style="margin-top: 30px">\r\n		<thead>\r\n			<tr class="T-tr-fixed bg-blur">\r\n                <th>团信息</th>\r\n                <th>消费日期(账期)</th>\r\n                <th>自费项目</th>\r\n                <th>底价</th>\r\n                <th>数量</th>\r\n                <th>优惠</th>\r\n                <th>账面应付</th>\r\n                <th>预付款申请</th>\r\n                <th>已付金额</th>\r\n                <th>单据</th>\r\n                <th><span class="necessary">*</span>结算金额</th>\r\n                <th>未付金额</th>\r\n                <th>备注</th>\r\n                <th>对账时间</th>\r\n                <th>对账人</th>\r\n                <th style="width:115px">对账</th>\r\n            </tr>   \r\n		</thead>\r\n		<tbody class="T-checkList" data-right="1260002|1260005">\r\n		    {{each list as rs index}}\r\n		    <tr class="T-checkTr {{if rs.change}}success{{/if}}" data-id="{{rs.id}}" data-confirm="{{rs.isConfirmAccount}}"\r\n            {{if rs.change}}data-change="true"{{/if}}>\r\n				<td>{{if rs.tripNumber !=null && rs.tripNumber != ""}}{{rs.tripNumber}}\r\n                        {{if rs.lineProductName || rs.guideName}}，{{/if}}\r\n                    {{/if}} \r\n                    {{if rs.lineProductName != null && rs.lineProductName != ""}}{{rs.lineProductName}}\r\n                        {{if rs.guideName}}，{{/if}}\r\n                    {{/if}}\r\n                    {{if rs.guideName != null && rs.guideName != ""}}{{rs.guideName}}{{/if}}\r\n                </td>\r\n				<td>{{if rs.accountTime == null || rs.accountTime == ""}}-{{else}}{{rs.accountTime | dateFormat:\'yyyy-MM-dd\'}}{{/if}}</td>\r\n                <td>{{rs.itemName}}</td>\r\n				<td class="F-float F-money">{{rs.lowestPrice}}</td>\r\n                <td class="F-float F-count">{{rs.realCount}}</td>				\r\n				<td class="F-float F-money">{{rs.reduceMoney}}</td>\r\n				<td class="F-float F-money">{{rs.needPayMoney}}</td>\r\n                <td><a class="{{if rs.payRecoredId}}T-option T-payRequest{{else}}black{{/if}}" data-preid="{{rs.payRecoredId}}" {{if !rs.payRecoredId}}title="没有预付款记录"{{/if}}><span class="F-float F-money">{{rs.prePayMoney}}</span></a></td>\r\n				<td class="align-left">\r\n                    <a class="T-option T-payedDetail" data-money="{{rs.payedMoney + rs.guidePayMoney}}">\r\n                        <span class="in-block">{{"社付："}}<span class="F-float F-money">{{rs.payedMoney}}</span></span>\r\n                        <span class="in-block">{{"导付："}}<span class="F-float F-money">{{rs.guidePayMoney}}</span></span>\r\n                    </a>\r\n                </td> \r\n                <td>{{if rs.billImage != null && rs.billImage !=""}}<a class="T-option T-selfPayImg" url="{{rs.billImage}}"><span>查看</span></a>{{else}}<span style="color:#bbb">查看</span>{{/if}}</td>\r\n				<td>{{if rs.isConfirmAccount}}<span class="F-float F-money">{{rs.settlementMoney}}</span>\r\n                    {{else}}\r\n                    <input type="text" maxlength="9" name="settlementMoney" value="{{rs.settlementMoney}}" class="money F-float F-money" style="text-align:center" />\r\n                    {{/if}}\r\n                </td>\r\n                <td name="unPayedMoney" class="F-float F-money">{{rs.unPayedMoney}}</td>\r\n                <td>{{if rs.isConfirmAccount}}{{rs.isConfirmAccount}}\r\n                    {{else}}\r\n                    <textarea class="col-sm-12 hct-textarea" name="checkRemark" maxlength="1000">{{rs.checkRemark}}</textarea>\r\n                    {{/if}}\r\n                </td>\r\n				<td>{{if rs.checkTime == null || rs.checkTime == ""}}-{{else}}{{rs.checkTime | dateTimeFormat}}{{/if}}</td>\r\n                <td>{{if rs.checkUser == null || rs.checkUser == ""}}-{{else}}{{rs.checkUser}}{{/if}}</td>\r\n				<td>\r\n				    <label class="pos-rel">\r\n				   		<input type="checkbox" class="ace T-checkbox" {{if (rs.change && rs.isChecked == 1) || (!rs.change && rs.isConfirmAccount == 1)}}checked="checked"{{/if}} />\r\n				   		<span class="lbl"></span> 对账\r\n                        <a class="cursor"> |</a>\r\n				    </label>\r\n                    <a class="T-option T-needPayDetail cursor">查看</a>\r\n				</td>\r\n		    </tr>\r\n		    {{/each}}\r\n		</tbody>\r\n	</table>\r\n    \r\n    <div class="clearfix"></div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small>共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-5">\r\n          <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n          </div>\r\n        </div>\r\n            <div class="form-group text-right">\r\n        <label class="control-label pull-right"/>\r\n            <input type="checkbox" class="ace pull-right T-checkAll">\r\n            <span class="lbl"></span>  \r\n            全选\r\n        </label>\r\n    </div>\r\n    </div>\r\n\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-btn-close" >\r\n                <i class="ace-icon fa fa-times-circle"></i>关闭\r\n            </button>\r\n            <button class="btn btn-xs btn-primary T-saveCheck" style="margin-left:20px">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});