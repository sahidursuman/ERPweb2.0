/*TMODJS:{"debug":true,"version":127,"md5":"1c2574f60526c7284bdd0ac7bb064004"}*/
define(function(require) {
    return require("../../../template")("financial/Client/view/ClientClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, pname = $data.pname, year = $data.year, pid = $data.pid, startMonth = $data.startMonth, endMonth = $data.endMonth, totalPersonCount = $data.totalPersonCount, needPayMoneys = $data.needPayMoneys, realNeedPayMoneys = $data.realNeedPayMoneys, realPayedMoneys = $data.realPayedMoneys, unPayedMoneys = $data.unPayedMoneys, realUnPayedMoneys = $data.realUnPayedMoneys, backMoneys = $data.backMoneys, $each = $utils.$each, financialPartnerAgencySettlementList = $data.financialPartnerAgencySettlementList, $out = ($data.rs, 
            $data.$index, "");
            return $out += '<div class= "row Cleaning ClientClearMain"> <div class="col-sm-12 " style="border: 1px solid #ccc"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label style="float: left;margin: 5px auto auto 15px" class=" control-label "> 客户：', 
            $line = 6, $out += $escape(pname), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期：</label> <select class="col-sm-1" name="ClientClear_year"> <option value="2015" ', 
            $line = 10, 2015 == year && ($out += 'selected="selected"', $line = 10), $out += '>2015年</option> <option value="2014" ', 
            $line = 11, 2014 == year && ($out += 'selected="selected"', $line = 11), $out += '>2014年</option> </select> <input type="hidden" name="ClientClear_pid" value="', 
            $line = 14, $out += $escape(pid), $out += '" /> <label class="col-sm-1 control-label no-padding-right">起始月：</label> <select class="col-sm-1" name="ClientClear_startMonth"> <option value="1" ', 
            $line = 17, 1 == startMonth && ($out += 'selected="selected"', $line = 17), $out += '>1月</option> <option value="2" ', 
            $line = 18, 2 == startMonth && ($out += 'selected="selected"', $line = 18), $out += '>2月</option> <option value="3" ', 
            $line = 19, 3 == startMonth && ($out += 'selected="selected"', $line = 19), $out += '>3月</option> <option value="4" ', 
            $line = 20, 4 == startMonth && ($out += 'selected="selected"', $line = 20), $out += '>4月</option> <option value="5" ', 
            $line = 21, 5 == startMonth && ($out += 'selected="selected"', $line = 21), $out += '>5月</option> <option value="6" ', 
            $line = 22, 6 == startMonth && ($out += 'selected="selected"', $line = 22), $out += '>6月</option> <option value="7" ', 
            $line = 23, 7 == startMonth && ($out += 'selected="selected"', $line = 23), $out += '>7月</option> <option value="8" ', 
            $line = 24, 8 == startMonth && ($out += 'selected="selected"', $line = 24), $out += '>8月</option> <option value="9" ', 
            $line = 25, 9 == startMonth && ($out += 'selected="selected"', $line = 25), $out += '>9月</option> <option value="10" ', 
            $line = 26, 10 == startMonth && ($out += 'selected="selected"', $line = 26), $out += '>10月</option> <option value="11" ', 
            $line = 27, 11 == startMonth && ($out += 'selected="selected"', $line = 27), $out += '>11月</option> <option value="12" ', 
            $line = 28, 12 == startMonth && ($out += 'selected="selected"', $line = 28), $out += '>12月</option> </select> <label class="col-sm-1 control-label no-padding-right">结束月：</label> <select style="margin-left: 20px" class="col-sm-1" name="ClientClear_endMonth"> <option value="12" ', 
            $line = 32, 12 == endMonth && ($out += 'selected="selected"', $line = 32), $out += '>12月</option> <option value="11" ', 
            $line = 33, 11 == endMonth && ($out += 'selected="selected"', $line = 33), $out += '>11月</option> <option value="10" ', 
            $line = 34, 10 == endMonth && ($out += 'selected="selected"', $line = 34), $out += '>10月</option> <option value="9" ', 
            $line = 35, 9 == endMonth && ($out += 'selected="selected"', $line = 35), $out += '>9月</option> <option value="8" ', 
            $line = 36, 8 == endMonth && ($out += 'selected="selected"', $line = 36), $out += '>8月</option> <option value="4" ', 
            $line = 37, 4 == endMonth && ($out += 'selected="selected"', $line = 37), $out += '>4月</option> <option value="5" ', 
            $line = 38, 5 == endMonth && ($out += 'selected="selected"', $line = 38), $out += '>5月</option> <option value="6" ', 
            $line = 39, 6 == endMonth && ($out += 'selected="selected"', $line = 39), $out += '>6月</option> <option value="7" ', 
            $line = 40, 7 == endMonth && ($out += 'selected="selected"', $line = 40), $out += '>7月</option> <option value="3" ', 
            $line = 41, 3 == endMonth && ($out += 'selected="selected"', $line = 41), $out += '>3月</option> <option value="2" ', 
            $line = 42, 2 == endMonth && ($out += 'selected="selected"', $line = 42), $out += '>2月</option> <option value="1" ', 
            $line = 43, 1 == endMonth && ($out += 'selected="selected"', $line = 43), $out += '>1月</option> </select> <button name="searchButton" class=" btn-sm btn-arrangeTourist-search btn-height search-btn" style="margin-left: 60px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group col-sm-12" style="padding-bottom: 0"> <label class=" control-label pull-left " >总人数：', 
            $line = 55, $out += $escape(totalPersonCount), $out += ' </label> <label class=" control-label no-padding-right" style="margin-left: 20px">总账面应收:', 
            $line = 56, $out += $escape(needPayMoneys), $out += '</label> <label class=" control-label no-padding-right" style="margin-left: 20px">总实际应收:', 
            $line = 57, $out += $escape(realNeedPayMoneys), $out += '</label> <label class=" control-label no-padding-right" style="margin-left: 20px">总实际已收:', 
            $line = 58, $out += $escape(realPayedMoneys), $out += '</label> <label class=" control-label no-padding-right" style="margin-left: 20px">总账面未收:', 
            $line = 59, $out += $escape(unPayedMoneys), $out += '</label> <label class=" control-label no-padding-right" style="margin-left: 20px">总实际未收:', 
            $line = 60, $out += $escape(realUnPayedMoneys), $out += '</label> <label class=" control-label no-padding-right" style="margin-left: 20px">总返款:', 
            $line = 61, $out += $escape(backMoneys), $out += '</label> </div> </form> </div> <button name="ClientClear_recordButton" class="btn btn-sm btn-success btn-guide-add pull-left margin-top" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button> <div style="clear: both"></div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr> <th class="th-border"> 账期</th> <th class="th-border"> 账面应收</th> <th class="th-border"> 实际应收</th> <th class="th-border"> 实际已收</th> <th class="th-border"> 账面未收</th> <th class="th-border"> 未收对账</th> <th class="th-border"> 返款</th> <th class="th-border"> 实际未收</th> <th class="th-border"> 收款金额</th> <th class="th-border"> 收款方式</th> <th class="th-border"> 备注</th> <th class="th-border"> 对账进度</th> <th class="th-border"> 操作</th> </tr> </thead> <tbody> ', 
            $line = 87, $each(financialPartnerAgencySettlementList, function(rs) {
                $out += " <tr> <td>", $line = 89, $out += $escape(rs.year), $out += "年", $line = 89, 
                $out += $escape(rs.month), $out += "月</td> <td>", $line = 90, $out += $escape(rs.needPayMoney), 
                $out += "</td> <td>", $line = 91, $out += $escape(rs.realNeedPayMoney), $out += "</td> <td>", 
                $line = 92, $out += $escape(rs.realPayedMoney), $out += "</td> <td>", $line = 93, 
                $out += $escape(rs.unPayedMoney), $out += "</td> <td>", $line = 94, $out += $escape(rs.checkUnIncomeMoney), 
                $out += "</td> <td>", $line = 95, $out += $escape(rs.backMoney), $out += "</td> <td>", 
                $line = 96, $out += $escape(rs.realUnPayedMoney), $out += '</td> <td><input name="ClientClear_payMoney" value="" /></td> <td> <label class="col-sm-1 control-label no-padding-right" > <select name="ClientClear_payType"> <option value="备注" ', 
                $line = 101, "备注" == rs.payType && ($out += 'selected="selected"', $line = 101), 
                $out += '>请选择...</option> <option value="转账" ', $line = 102, "转账" == rs.payType && ($out += 'selected="selected"', 
                $line = 102), $out += '>转账</option> <option value="在线支付" ', $line = 103, "在线支付" == rs.payType && ($out += 'selected="selected"', 
                $line = 103), $out += '>在线支付</option> <option value="线下付款" ', $line = 104, "线下付款" == rs.payType && ($out += 'selected="selected"', 
                $line = 104), $out += '>线下付款</option> </select> </label> </td> <td><input name="ClientClear_remark" value="', 
                $line = 108, $out += $escape(rs.remark), $out += '" /></td> <td> ', $line = 110, 
                rs.isConfirmAccount != rs.isConfirmAccounts ? ($out += ' <span style="color:#ff9900">', 
                $line = 111, $out += $escape(rs.isConfirmAccount), $out += "/", $line = 111, $out += $escape(rs.isConfirmAccounts), 
                $out += "</span> ", $line = 112) : ($out += ' <span style="color:green">', $line = 113, 
                $out += $escape(rs.isConfirmAccount), $out += "/", $line = 113, $out += $escape(rs.isConfirmAccounts), 
                $out += "</span> ", $line = 114), $out += ' </td> <td> <a data-entity-id="', $line = 117, 
                $out += $escape(rs.id), $out += '" title="保存" data-entity-startTime="" name="ClientClear_saveButton" style="border:none" class="cursor btn-divide"> 保存 </a><a class="cursor"> |</a> <a data-entity-id="', 
                $line = 120, $out += $escape(rs.partnerAgencyId), $out += '" title="对账明细" data-entity-year="', 
                $line = 120, $out += $escape(rs.year), $out += '" data-entity-month="', $line = 120, 
                $out += $escape(rs.month), $out += '" name="ClientClear_findCheckButton" style="border:none" class="cursor btn-transfter"> 对账明细 </a> </td> </tr> ', 
                $line = 125;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row Cleaning ClientClearMain">\r\n\r\n    <div class="col-sm-12 " style="border: 1px solid #ccc">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n                <div class="form-group"> <label style="float: left;margin: 5px auto auto 15px" class=" control-label "> 客户：{{pname}}</label>\r\n\r\n                    <label class="col-sm-1 control-label no-padding-right">账期：</label>\r\n                    <select class="col-sm-1" name="ClientClear_year">\r\n                        <option value="2015" {{if year==2015}}selected="selected"{{/if}}>2015年</option>\r\n                        <option value="2014" {{if year==2014}}selected="selected"{{/if}}>2014年</option>\r\n                    </select>\r\n                     \r\n					<input type="hidden" name="ClientClear_pid" value="{{pid}}" />\r\n                    <label class="col-sm-1 control-label no-padding-right">起始月：</label>\r\n                    <select class="col-sm-1" name="ClientClear_startMonth">\r\n                        <option value="1" {{if startMonth==1}}selected="selected"{{/if}}>1月</option>\r\n                        <option value="2" {{if startMonth==2}}selected="selected"{{/if}}>2月</option>\r\n                        <option value="3" {{if startMonth==3}}selected="selected"{{/if}}>3月</option>\r\n                        <option value="4" {{if startMonth==4}}selected="selected"{{/if}}>4月</option>\r\n                        <option value="5" {{if startMonth==5}}selected="selected"{{/if}}>5月</option>\r\n                        <option value="6" {{if startMonth==6}}selected="selected"{{/if}}>6月</option>\r\n                        <option value="7" {{if startMonth==7}}selected="selected"{{/if}}>7月</option>\r\n                        <option value="8" {{if startMonth==8}}selected="selected"{{/if}}>8月</option>\r\n                        <option value="9" {{if startMonth==9}}selected="selected"{{/if}}>9月</option>\r\n                        <option value="10" {{if startMonth==10}}selected="selected"{{/if}}>10月</option>\r\n                        <option value="11" {{if startMonth==11}}selected="selected"{{/if}}>11月</option>\r\n                        <option value="12" {{if startMonth==12}}selected="selected"{{/if}}>12月</option>\r\n                    </select>\r\n                    <label class="col-sm-1 control-label no-padding-right">结束月：</label>\r\n                    <select style="margin-left: 20px" class="col-sm-1" name="ClientClear_endMonth">\r\n                        <option value="12" {{if endMonth==12}}selected="selected"{{/if}}>12月</option>\r\n                        <option value="11" {{if endMonth==11}}selected="selected"{{/if}}>11月</option>\r\n                        <option value="10" {{if endMonth==10}}selected="selected"{{/if}}>10月</option>\r\n                        <option value="9" {{if endMonth==9}}selected="selected"{{/if}}>9月</option>\r\n                        <option value="8" {{if endMonth==8}}selected="selected"{{/if}}>8月</option>\r\n                        <option value="4" {{if endMonth==4}}selected="selected"{{/if}}>4月</option>\r\n                        <option value="5" {{if endMonth==5}}selected="selected"{{/if}}>5月</option>\r\n                        <option value="6" {{if endMonth==6}}selected="selected"{{/if}}>6月</option>\r\n                        <option value="7" {{if endMonth==7}}selected="selected"{{/if}}>7月</option>\r\n                        <option value="3" {{if endMonth==3}}selected="selected"{{/if}}>3月</option>\r\n                        <option value="2" {{if endMonth==2}}selected="selected"{{/if}}>2月</option>\r\n                        <option value="1" {{if endMonth==1}}selected="selected"{{/if}}>1月</option>\r\n                    </select>\r\n                    <button name="searchButton" class=" btn-sm  btn-arrangeTourist-search btn-height search-btn" style="margin-left: 60px">\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                        	搜索\r\n                    </button>\r\n                </div>\r\n\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group col-sm-12" style="padding-bottom: 0">\r\n                <label class=" control-label pull-left " >总人数：{{totalPersonCount}}   </label>\r\n                <label class=" control-label no-padding-right" style="margin-left: 20px">总账面应收:{{needPayMoneys}}</label>\r\n                <label class=" control-label no-padding-right" style="margin-left: 20px">总实际应收:{{realNeedPayMoneys}}</label>\r\n                <label class=" control-label no-padding-right" style="margin-left: 20px">总实际已收:{{realPayedMoneys}}</label>\r\n                <label class=" control-label no-padding-right" style="margin-left: 20px">总账面未收:{{unPayedMoneys}}</label>\r\n                <label class=" control-label no-padding-right" style="margin-left: 20px">总实际未收:{{realUnPayedMoneys}}</label>\r\n                <label class=" control-label no-padding-right" style="margin-left: 20px">总返款:{{backMoneys}}</label>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n    <button name="ClientClear_recordButton" class="btn btn-sm btn-success btn-guide-add pull-left margin-top" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button>\r\n    <div style="clear: both"></div>\r\n    <table class="table table-striped table-bordered table-hover all margin-top">\r\n        <thead>\r\n        <tr>\r\n          <th class="th-border"> 账期</th>\r\n          <th class="th-border"> 账面应收</th>\r\n          <th class="th-border"> 实际应收</th>\r\n          <th class="th-border"> 实际已收</th>\r\n          <th class="th-border"> 账面未收</th>\r\n          <th class="th-border"> 未收对账</th>\r\n          <th class="th-border"> 返款</th>\r\n          <th class="th-border"> 实际未收</th>\r\n          <th class="th-border"> 收款金额</th>\r\n          <th class="th-border"> 收款方式</th>\r\n          <th class="th-border"> 备注</th>\r\n          <th class="th-border"> 对账进度</th>\r\n          <th class="th-border"> 操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each financialPartnerAgencySettlementList as rs}}\r\n        <tr>\r\n            <td>{{rs.year}}年{{rs.month}}月</td>\r\n            <td>{{rs.needPayMoney}}</td>\r\n            <td>{{rs.realNeedPayMoney}}</td>\r\n            <td>{{rs.realPayedMoney}}</td>\r\n            <td>{{rs.unPayedMoney}}</td>\r\n            <td>{{rs.checkUnIncomeMoney}}</td>\r\n            <td>{{rs.backMoney}}</td>\r\n            <td>{{rs.realUnPayedMoney}}</td> \r\n            <td><input name="ClientClear_payMoney" value="" /></td>\r\n            <td>\r\n                <label class="col-sm-1 control-label no-padding-right" >\r\n                    <select name="ClientClear_payType">\r\n                    	<option value="备注" {{if rs.payType=="备注"}}selected="selected"{{/if}}>请选择...</option>\r\n                        <option value="转账" {{if rs.payType=="转账"}}selected="selected"{{/if}}>转账</option>\r\n                        <option value="在线支付" {{if rs.payType=="在线支付"}}selected="selected"{{/if}}>在线支付</option>\r\n                        <option value="线下付款" {{if rs.payType=="线下付款"}}selected="selected"{{/if}}>线下付款</option>\r\n                    </select>\r\n                </label>\r\n            </td>\r\n            <td><input name="ClientClear_remark" value="{{rs.remark}}" /></td>\r\n            <td>\r\n				{{if rs.isConfirmAccount!=rs.isConfirmAccounts}}\r\n				<span style="color:#ff9900">{{rs.isConfirmAccount}}/{{rs.isConfirmAccounts}}</span>\r\n				{{else}}\r\n				<span style="color:green">{{rs.isConfirmAccount}}/{{rs.isConfirmAccounts}}</span>\r\n				{{/if}}\r\n			</td>\r\n            <td>\r\n                <a data-entity-id="{{rs.id}}" title="保存" data-entity-startTime="" name="ClientClear_saveButton" style="border:none" class="cursor btn-divide">\r\n                    	保存\r\n                </a><a class="cursor"> |</a>\r\n                <a data-entity-id="{{rs.partnerAgencyId}}" title="对账明细" data-entity-year="{{rs.year}}" data-entity-month="{{rs.month}}" name="ClientClear_findCheckButton" style="border:none" class="cursor btn-transfter">\r\n                    	对账明细\r\n                </a>\r\n            </td>\r\n        </tr>\r\n		{{/each}}\r\n\r\n\r\n\r\n        </tbody>\r\n    </table>\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});