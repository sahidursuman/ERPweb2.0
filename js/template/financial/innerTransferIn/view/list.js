/*TMODJS:{"debug":true,"version":204,"md5":"bfde9690dc45aaa5cc32cd3c80d0a6d6"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, innerTransferIncomeList = $data.innerTransferIncomeList, recordSize = ($data.innerTransfer, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row FinancialinnerTransfer" > <div class="form-horizontal search-area"> <div class="form-group T-search-area" > <label style="margin-left: 22px">部门：</label> <input type="text" name="businessGroupName" value="', 
            $line = 6, $out += $escape(searchParam.businessGroupName), $out += '" /> <input type="hidden" name="businessGroupId" value="', 
            $line = 7, $out += $escape(searchParam.businessGroupId), $out += '" /> <label class="marginLeft-30" >账期： <input style="width:100px;text-align:center" type="text" class="date-picker" name="startDate" style="width:100px;text-align:center;" value="', 
            $line = 10, $out += $escape(searchParam.startAccountTime), $out += '" /> <span>&nbsp;至&nbsp;</span> <input type="text" class="date-picker" style="width:100px;text-align:center" name="endDate" value="', 
            $line = 12, $out += $escape(searchParam.endAccountTime), $out += '" style="width:100px;text-align:center;"/> </label> <button class="marginLeft-30 btn-sm search-btn T-search" style="margin-top:2px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </div> <div class="form-inline T-sum-area"> <div class="form-group"> <label class="control-label">总人数合计：</label> <label class="control-label F-float F-count T-sumCount"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">内转转入合计：</label> <label class="control-label F-float F-money T-sumContractMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumStMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">已收金额合计：</label> <label class="control-label F-float F-money T-sumReceiveMoney"></label> </div> <div class="form-group marginLeft-30"> <label class="control-label">未收金额合计：</label> <label class="control-label F-float F-money T-sumUnReceivedMoney"></label> </div> </div> <div class="row innerTransferList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>部门</th> <th>总人数</th> <th>内转转入</th> <th>结算金额</th> <th>已收金额</th> <th>未收金额</th> <th>对账进度</th> <th>收款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-innerTransferList"> ', 
            $line = 57, $each(innerTransferIncomeList, function(innerTransfer) {
                $out += ' <tr businessGroupId="', $line = 58, $out += $escape(innerTransfer.businessGroupId), 
                $out += '" businessGroupName="', $line = 58, $out += $escape(innerTransfer.businessGroupName), 
                $out += '" endDate="', $line = 58, $out += $escape(searchParam.endAccountTime), 
                $out += '" startDate="', $line = 58, $out += $escape(searchParam.startAccountTime), 
                $out += '"> <td>', $line = 59, $out += $escape(innerTransfer.businessGroupName), 
                $out += "</td> <td>", $line = 60, $out += $escape(innerTransfer.adultCount), $out += "大", 
                $line = 60, $out += $escape(innerTransfer.childCount), $out += "小</td> <td>", $line = 61, 
                $out += $escape(innerTransfer.transNeedPayMoney), $out += "</td> <td>", $line = 62, 
                $out += $escape(innerTransfer.settlementMoney), $out += "</td> <td>", $line = 63, 
                $out += $escape(innerTransfer.alreadyIncomeMoney), $out += '</td> <td><span style="color:#FF0000">', 
                $line = 64, $out += $escape(innerTransfer.unIncomeMoney), $out += "</span></td> <td > ", 
                $line = 66, innerTransfer.confirmedcount != innerTransfer.count ? ($out += ' <span style="color:#ff9900">', 
                $line = 67, $out += $escape(innerTransfer.confirmedcount), $out += "/", $line = 67, 
                $out += $escape(innerTransfer.count), $out += "</span> ", $line = 68) : ($out += ' <span style="color:#00CC00"> ', 
                $line = 69, $out += $escape(innerTransfer.confirmedcount), $out += "/", $line = 69, 
                $out += $escape(innerTransfer.count), $out += "</span> ", $line = 70), $out += " </td> <td > ", 
                $line = 74, innerTransfer.payedCount != innerTransfer.count ? ($out += ' <span style="color:#ff9900"> ', 
                $line = 75, $out += $escape(innerTransfer.payedCount), $out += "/", $line = 75, 
                $out += $escape(innerTransfer.count), $out += "</span> ", $line = 76) : ($out += ' <span style="color:#00CC00"> ', 
                $line = 77, $out += $escape(innerTransfer.payedCount), $out += "/", $line = 77, 
                $out += $escape(innerTransfer.count), $out += "</span> ", $line = 78), $out += ' </td> <td> <a class="cursor T-action T-check R-right" data-right="1370001"> 对账 </a> <label class="cursor R-right" data-right="1370001"><a class="R-right" data-right="1370002"> |</a></label> <a class="cursor T-action T-balance R-right" data-right="1370002"> 收款 </a> </td> </tr> ', 
                $line = 90;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 95, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row FinancialinnerTransfer" >\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group T-search-area" >      \r\n              \r\n                <label style="margin-left: 22px">部门：</label>\r\n                    <input type="text" name="businessGroupName" value="{{searchParam.businessGroupName}}" />\r\n                    <input type="hidden" name="businessGroupId" value="{{searchParam.businessGroupId}}" />\r\n            \r\n             <label class="marginLeft-30" >账期：\r\n                <input style="width:100px;text-align:center" type="text" class="date-picker" name="startDate" style="width:100px;text-align:center;" value="{{searchParam.startAccountTime}}" />\r\n                <span>&nbsp;至&nbsp;</span>\r\n                <input type="text" class="date-picker" style="width:100px;text-align:center" name="endDate" value="{{searchParam.endAccountTime}}" style="width:100px;text-align:center;"/>\r\n             </label>\r\n            <button class="marginLeft-30 btn-sm search-btn T-search" style="margin-top:2px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> \r\n        </div>\r\n    </div>\r\n    </div>\r\n    <div class="form-inline T-sum-area">\r\n        <div class="form-group">\r\n            <label class="control-label">总人数合计：</label>\r\n            <label class="control-label F-float F-count T-sumCount"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">内转转入合计：</label>\r\n            <label class="control-label F-float F-money T-sumContractMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">结算金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumStMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">已收金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumReceiveMoney"></label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="control-label">未收金额合计：</label>\r\n            <label class="control-label F-float F-money T-sumUnReceivedMoney"></label>\r\n        </div>\r\n    </div>\r\n    <div class="row innerTransferList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>部门</th>\r\n                    <th>总人数</th>\r\n                    <th>内转转入</th>\r\n                    <th>结算金额</th>\r\n                    <th>已收金额</th>\r\n                    <th>未收金额</th>\r\n                    <th>对账进度</th>\r\n                    <th>收款进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody class="T-innerTransferList">\r\n                {{each innerTransferIncomeList as innerTransfer}}\r\n                <tr businessGroupId="{{innerTransfer.businessGroupId}}" businessGroupName="{{innerTransfer.businessGroupName}}" endDate="{{searchParam.endAccountTime}}" startDate="{{searchParam.startAccountTime}}">\r\n                    <td>{{innerTransfer.businessGroupName}}</td>\r\n                    <td>{{innerTransfer.adultCount}}大{{innerTransfer.childCount}}小</td>\r\n                    <td>{{innerTransfer.transNeedPayMoney}}</td>\r\n                    <td>{{innerTransfer.settlementMoney}}</td>\r\n                    <td>{{innerTransfer.alreadyIncomeMoney}}</td>\r\n                    <td><span style="color:#FF0000">{{innerTransfer.unIncomeMoney}}</span></td>\r\n                     <td >\r\n                        {{if innerTransfer.confirmedcount != innerTransfer.count}}\r\n                        <span style="color:#ff9900">{{innerTransfer.confirmedcount}}/{{innerTransfer.count}}</span>\r\n                          {{else}}\r\n                          <span style="color:#00CC00"> {{innerTransfer.confirmedcount}}/{{innerTransfer.count}}</span>\r\n                        {{/if}}\r\n                    </td>\r\n                   \r\n                    <td >\r\n                        {{if innerTransfer.payedCount != innerTransfer.count}}\r\n                          <span style="color:#ff9900"> {{innerTransfer.payedCount}}/{{innerTransfer.count}}</span>\r\n                          {{else}}\r\n                          <span style="color:#00CC00"> {{innerTransfer.payedCount}}/{{innerTransfer.count}}</span>\r\n                        {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a class="cursor T-action T-check R-right" data-right="1370001">\r\n                                对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right="1370001"><a class="R-right" data-right="1370002"> |</a></label>\r\n                        <a class="cursor T-action T-balance R-right" data-right="1370002">\r\n                                收款\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});