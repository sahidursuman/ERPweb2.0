/*TMODJS:{"debug":true,"version":64,"md5":"1ff99dd0230c25acf24b1e24d729b5b8"}*/
define(function(require) {
    return require("../../../template")("financial/Self/view/SelfClearing", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, selfPayName = $data.selfPayName, $each = $utils.$each, yearList = $data.yearList, searchParam = ($data.year, 
            $data.index, $data.searchParam), monthList = $data.monthList, fcSelfPaySettlementList = ($data.month, 
            $data.fcSelfPaySettlementList), $out = ($data.SettlementList, "");
            return $out += '<div class= "row selfPayFinancialBalancing globalAdd"> <div class="col-sm-12 " style="border: 1px solid #ccc"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="search-area editable editable-click" style="margin-top: 10px"> <div class="form-group"> <label style="float: left;margin: 0px 20px 0 15px" class=" control-label "> 自费商家:', 
            $line = 5, $out += $escape(selfPayName), $out += '</label> <label class="col-sm-1 control-label no-padding-right">账期:</label> <select class="col-sm-1" style="margin-left:20px" name="year"> ', 
            $line = 8, $each(yearList, function(year) {
                $out += ' <option value="', $line = 9, $out += $escape(year.value), $out += '" ', 
                $line = 9, searchParam.year == year.value && ($out += 'selected="selected"', $line = 9), 
                $out += ">", $line = 9, $out += $escape(year.value), $out += "</option> ", $line = 10;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right">起始月:</label> <select class="col-sm-1" style="margin-left:20px" name="startMonth"> ', 
            $line = 14, $each(monthList, function(month) {
                $out += ' <option value="', $line = 15, $out += $escape(month.value), $out += '" ', 
                $line = 15, searchParam.monthStart == month.value && ($out += 'selected="selected"', 
                $line = 15), $out += ">", $line = 15, $out += $escape(month.value), $out += "月</option> ", 
                $line = 16;
            }), $out += ' </select> <label class="col-sm-1 control-label no-padding-right">结束月:</label> <select style="margin-left: 20px" class="col-sm-1" name="endMonth"> ', 
            $line = 20, $each(monthList, function(month) {
                $out += ' <option value="', $line = 21, $out += $escape(month.value), $out += '" ', 
                $line = 21, searchParam.monthEnd == month.value && ($out += 'selected="selected"', 
                $line = 21), $out += ">", $line = 21, $out += $escape(month.value), $out += "月</option> ", 
                $line = 22;
            }), $out += ' </select> <button class="btn-height btn-sm search-btn btn-blance-search" > <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group " style="padding-bottom: 0"> <label class=" control-label pull-left" style="margin-left: 15px">总账面应付:', 
            $line = 33, $out += $escape(searchParam.sumNeedPayMoney), $out += ' </label> <label class=" control-label " style="margin-left:30px;">总实际应付:', 
            $line = 34, $out += $escape(searchParam.sumRealNeedPayMoney), $out += ' </label> <label class=" control-label " style="margin-left:30px;">总实际已付:', 
            $line = 35, $out += $escape(searchParam.sumRealPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总账面未付:', 
            $line = 36, $out += $escape(searchParam.sumUnPayedMoney), $out += '</label> <label class=" control-label " style="margin-left:30px;">总实际未付:', 
            $line = 37, $out += $escape(searchParam.sumRealUnPayedMoney), $out += '</label> </div> </form> </div> <button class="btn btn-sm btn-success btn-selfPayBlance-Records pull-left margin-topTicket" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button> <div style="clear: both"></div> <table class="table table-striped table-bordered table-hover all margin-top"> <thead> <tr> <th class="th-border">账期</th> <th class="th-border">账面应付</th> <th class="th-border">实际应付</th> <th class="th-border">实际已付</th> <th class="th-border">账面未付</th> <th class="th-border">实际未付</th> <th class="th-border">付款金额</th> <th class="th-border"> <span class="necessary">*</span>付款方式</th> <th class="th-border">备注</th> <th class="th-border">对账进度</th> <th class="th-border">操作</th> </tr> </thead> <tbody> ', 
            $line = 61, $each(fcSelfPaySettlementList, function(SettlementList) {
                $out += ' <tr data-entity-id="', $line = 62, $out += $escape(SettlementList.id), 
                $out += '" data-entity-year="', $line = 62, $out += $escape(SettlementList.year), 
                $out += '" data-entity-month="', $line = 62, $out += $escape(SettlementList.month), 
                $out += '"> <td >', $line = 63, $out += $escape(SettlementList.year), $line = 63, 
                $out += $escape("年"), $line = 63, $out += $escape(SettlementList.month), $line = 63, 
                $out += $escape("月"), $out += "</td> <td >", $line = 64, $out += $escape(SettlementList.needPayMoney), 
                $out += '</td> <td name="blancerealNeedPayMoney">', $line = 65, $out += $escape(SettlementList.realNeedPayMoney), 
                $out += '</td> <td name="blancerealrealPayedMoney">', $line = 66, $out += $escape(SettlementList.realPayedMoney), 
                $out += '</td> <td name="blanceunPayedMoney">', $line = 67, $out += $escape(SettlementList.unPayedMoney), 
                $out += '</td> <td name="blancerealrealUnPayedMoney">', $line = 68, $out += $escape(SettlementList.realUnPayedMoney), 
                $out += '</td> <td class="col-sm-1"><input name="blancerealPayedMoney" type="text" maxlength="10"></td> <td style="width:120px;"> <select style="text-align:center" name="blancePayType"> <option value="" selected="selected">请选择...</option> <option value="转账">转账</option> <option value="在线支付">在线支付</option> <option value="线下付款">线下付款</option> </select> </td> <td class="col-sm-1" ><input name="blancerealRemark" type="text" maxlength="1000"></td> <td> ', 
                $line = 80, SettlementList.allCount != SettlementList.checkedCount && ($out += ' <span style="color:#ff9900"> ', 
                $line = 81, $out += $escape(SettlementList.checkedCount), $line = 81, $out += $escape("/"), 
                $line = 81, $out += $escape(SettlementList.allCount), $out += "</span> ", $line = 82), 
                $out += " ", $line = 83, SettlementList.allCount == SettlementList.checkedCount && ($out += ' <span style="color:green"> ', 
                $line = 84, $out += $escape(SettlementList.checkedCount), $line = 84, $out += $escape("/"), 
                $line = 84, $out += $escape(SettlementList.allCount), $out += "</span> ", $line = 85), 
                $out += ' </td> <td style="width:220px"> <a data-entity-id="', $line = 88, $out += $escape(SettlementList.id), 
                $out += '" data-entity-year="', $line = 88, $out += $escape(SettlementList.year), 
                $out += '" data-entity-month="', $line = 88, $out += $escape(SettlementList.month), 
                $out += '" class="cursor btn-selfPayBlance-save buttonHeight"> 保存 </a><a class="cursor"> |</a> <a data-entity-year="', 
                $line = 91, $out += $escape(SettlementList.year), $out += '" data-entity-month="', 
                $line = 91, $out += $escape(SettlementList.month), $out += '" class="cursor btn-selfPayBlance-checkDetail buttonHeight" style="border:none"> 对账 </a> </td> </tr> ', 
                $line = 96;
            }), $out += " </tbody> </table> </div>", new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class= "row selfPayFinancialBalancing globalAdd">\r\n    <div class="col-sm-12 " style="border: 1px solid #ccc">\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="search-area  editable editable-click" style="margin-top: 10px">\r\n                <div class="form-group"> <label style="float: left;margin: 0px 20px 0 15px" class=" control-label "> 自费商家:{{selfPayName}}</label>\r\n                    <label class="col-sm-1 control-label no-padding-right">账期:</label>\r\n                    <select class="col-sm-1" style="margin-left:20px" name="year">\r\n                        {{each yearList as year index}}\r\n							<option value="{{year.value}}" {{if searchParam.year == year.value}}selected="selected"{{/if}}>{{year.value}}</option>\r\n					    {{/each}}\r\n                    </select>\r\n                    <label class="col-sm-1 control-label no-padding-right">起始月:</label>\r\n                    <select class="col-sm-1" style="margin-left:20px" name="startMonth">  \r\n                        {{each monthList as month index}}\r\n							<option value="{{month.value}}" {{if searchParam.monthStart == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n						{{/each}}    \r\n                    </select>       \r\n                    <label class="col-sm-1 control-label no-padding-right">结束月:</label>   \r\n                    <select style="margin-left: 20px" class="col-sm-1" name="endMonth">\r\n                        {{each monthList as month index}}\r\n							<option value="{{month.value}}" {{if searchParam.monthEnd == month.value}}selected="selected"{{/if}}>{{month.value}}月</option>\r\n						{{/each}}\r\n                    </select>\r\n                    <button class="btn-height btn-sm search-btn btn-blance-search" >\r\n                        <i class="ace-icon fa fa-search"></i>\r\n                        	搜索\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </form>\r\n        <form class="form-horizontal" role="form" onsubmit="return false">\r\n            <div class="form-group " style="padding-bottom: 0">\r\n                <label class=" control-label pull-left" style="margin-left: 15px">总账面应付:{{searchParam.sumNeedPayMoney}} </label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际应付:{{searchParam.sumRealNeedPayMoney}} </label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际已付:{{searchParam.sumRealPayedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总账面未付:{{searchParam.sumUnPayedMoney}}</label>\r\n                <label class=" control-label " style="margin-left:30px;">总实际未付:{{searchParam.sumRealUnPayedMoney}}</label>\r\n            </div>\r\n        </form>\r\n\r\n    </div>\r\n    <button class="btn btn-sm btn-success btn-selfPayBlance-Records pull-left margin-topTicket" > <i class="ace-icon fa fa-wrench icon-animated-wrench bigger-125"></i> 操作记录 </button>\r\n    <div style="clear: both"></div>\r\n    <table class="table table-striped table-bordered table-hover all margin-top">\r\n        <thead>\r\n        <tr>\r\n            <th class="th-border">账期</th>\r\n            <th class="th-border">账面应付</th>\r\n            <th class="th-border">实际应付</th>\r\n            <th class="th-border">实际已付</th>\r\n            <th class="th-border">账面未付</th>\r\n            <th class="th-border">实际未付</th>\r\n            <th class="th-border">付款金额</th>\r\n            <th class="th-border"> <span class="necessary">*</span>付款方式</th>\r\n            <th class="th-border">备注</th>\r\n            <th class="th-border">对账进度</th>\r\n            <th class="th-border">操作</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        {{each fcSelfPaySettlementList as SettlementList index}}\r\n        <tr data-entity-id="{{SettlementList.id}}" data-entity-year="{{SettlementList.year}}" data-entity-month="{{SettlementList.month}}">\r\n            <td >{{SettlementList.year}}{{"年"}}{{SettlementList.month}}{{"月"}}</td>\r\n            <td >{{SettlementList.needPayMoney}}</td>\r\n            <td  name="blancerealNeedPayMoney">{{SettlementList.realNeedPayMoney}}</td>\r\n            <td  name="blancerealrealPayedMoney">{{SettlementList.realPayedMoney}}</td>\r\n            <td  name="blanceunPayedMoney">{{SettlementList.unPayedMoney}}</td>\r\n            <td  name="blancerealrealUnPayedMoney">{{SettlementList.realUnPayedMoney}}</td>\r\n            <td class="col-sm-1"><input name="blancerealPayedMoney" type="text" maxlength="10"></td>\r\n            <td style="width:120px;">\r\n                    <select style="text-align:center" name="blancePayType">\r\n                        <option value="" selected="selected">请选择...</option>\r\n                        <option value="转账">转账</option>\r\n                        <option value="在线支付">在线支付</option>\r\n                        <option value="线下付款">线下付款</option>\r\n                    </select>\r\n            </td>\r\n            <td class="col-sm-1" ><input name="blancerealRemark" type="text"  maxlength="1000"></td>\r\n            <td>\r\n               {{if SettlementList.allCount != SettlementList.checkedCount}}\r\n	                <span style="color:#ff9900"> {{SettlementList.checkedCount}}{{"/"}}{{SettlementList.allCount}}</span>\r\n	           {{/if}}\r\n	           {{if SettlementList.allCount == SettlementList.checkedCount}}\r\n	                <span style="color:green"> {{SettlementList.checkedCount}}{{"/"}}{{SettlementList.allCount}}</span>\r\n	           {{/if}}\r\n            </td>\r\n            <td style="width:220px">\r\n               <a data-entity-id="{{SettlementList.id}}" data-entity-year="{{SettlementList.year}}" data-entity-month="{{SettlementList.month}}"  class="cursor btn-selfPayBlance-save buttonHeight">\r\n                    	保存\r\n               </a><a class="cursor"> |</a>\r\n               <a data-entity-year="{{SettlementList.year}}" data-entity-month="{{SettlementList.month}}" class="cursor btn-selfPayBlance-checkDetail buttonHeight" style="border:none">\r\n                    	对账\r\n               </a>\r\n            </td>\r\n        </tr>\r\n        {{/each}}\r\n        </tbody>\r\n    </table>\r\n\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});