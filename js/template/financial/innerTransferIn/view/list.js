/*TMODJS:{"debug":true,"version":180,"md5":"cd263e8f1948793aa8f42ca012e4f59c"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferIn/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, innerTransferIncomeList = $data.innerTransferIncomeList, recordSize = ($data.innerTransfer, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row FinancialinnerTransfer" > <div class="form-horizontal search-area"> <div class="form-group T-search-area" > <label class="control-label pull-left" style="margin-left: 22px">部门：</label> <div class="col-xs-2"> <input type="text" name="businessGroupName" value="', 
            $line = 6, $out += $escape(searchParam.businessGroupName), $out += '" /> <input type="hidden" name="businessGroupId" value="', 
            $line = 7, $out += $escape(searchParam.businessGroupId), $out += '" /> </div> <label class="control-label pull-left marginLeft-30" >账期： <input type="text" class="date-picker" name="startDate" style="width:100px;text-align:center;" value="', 
            $line = 10, $out += $escape(searchParam.startAccountTime), $out += '" /> <span>至</span> <input type="text" class="date-picker" name="endDate" value="', 
            $line = 12, $out += $escape(searchParam.endAccountTime), $out += '" style="width:100px;text-align:center;"/> </label> <button class="marginLeft-30 btn-sm search-btn T-search" style="margin-top:2px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </div> <div class="row innerTransferList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>部门</th> <th>总人数</th> <th>内转转入</th> <th>结算金额</th> <th>已收金额</th> <th>未收金额</th> <th>对账进度</th> <th>收款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-innerTransferList"> ', 
            $line = 35, $each(innerTransferIncomeList, function(innerTransfer) {
                $out += ' <tr businessGroupId="', $line = 36, $out += $escape(innerTransfer.businessGroupId), 
                $out += '" businessGroupName="', $line = 36, $out += $escape(innerTransfer.businessGroupName), 
                $out += '" endDate="', $line = 36, $out += $escape(searchParam.endAccountTime), 
                $out += '" startDate="', $line = 36, $out += $escape(searchParam.startAccountTime), 
                $out += '"> <td>', $line = 37, $out += $escape(innerTransfer.businessGroupName), 
                $out += "</td> <td>", $line = 38, $out += $escape(innerTransfer.adultCount), $out += "大", 
                $line = 38, $out += $escape(innerTransfer.childCount), $out += "小</td> <td>", $line = 39, 
                $out += $escape(innerTransfer.transNeedPayMoney), $out += "</td> <td>", $line = 40, 
                $out += $escape(innerTransfer.settlementMoney), $out += "</td> <td>", $line = 41, 
                $out += $escape(innerTransfer.alreadyIncomeMoney), $out += '</td> <td><span style="color:#FF0000">', 
                $line = 42, $out += $escape(innerTransfer.unIncomeMoney), $out += "</span></td> <td > ", 
                $line = 44, innerTransfer.confirmedcount != innerTransfer.count ? ($out += ' <span style="color:#ff9900">', 
                $line = 45, $out += $escape(innerTransfer.confirmedcount), $out += "/", $line = 45, 
                $out += $escape(innerTransfer.count), $out += "</span> ", $line = 46) : ($out += ' <span style="color:#00CC00"> ', 
                $line = 47, $out += $escape(innerTransfer.confirmedcount), $out += "/", $line = 47, 
                $out += $escape(innerTransfer.count), $out += "</span> ", $line = 48), $out += " </td> <td > ", 
                $line = 52, innerTransfer.payedCount != innerTransfer.count ? ($out += ' <span style="color:#ff9900"> ', 
                $line = 53, $out += $escape(innerTransfer.payedCount), $out += "/", $line = 53, 
                $out += $escape(innerTransfer.count), $out += "</span> ", $line = 54) : ($out += ' <span style="color:#00CC00"> ', 
                $line = 55, $out += $escape(innerTransfer.payedCount), $out += "/", $line = 55, 
                $out += $escape(innerTransfer.count), $out += "</span> ", $line = 56), $out += ' </td> <td> <a class="cursor T-action T-check R-right" data-right="1370001"> 对账 </a> <label class="cursor R-right" data-right="1370001"><a class="R-right" data-right="1370002"> |</a></label> <a class="cursor T-action T-balance R-right" data-right="1370002"> 收款 </a> </td> </tr> ', 
                $line = 68;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 73, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row FinancialinnerTransfer" >\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group T-search-area" >      \r\n          <label class="control-label pull-left" style="margin-left: 22px">部门：</label>     \r\n                <div class="col-xs-2">\r\n                    <input type="text" name="businessGroupName" value="{{searchParam.businessGroupName}}" />\r\n                    <input type="hidden" name="businessGroupId" value="{{searchParam.businessGroupId}}" />\r\n                </div>\r\n             <label class="control-label pull-left marginLeft-30" >账期：\r\n                <input type="text" class="date-picker" name="startDate" style="width:100px;text-align:center;" value="{{searchParam.startAccountTime}}" />\r\n                <span>至</span>\r\n                <input type="text" class="date-picker" name="endDate" value="{{searchParam.endAccountTime}}" style="width:100px;text-align:center;"/>\r\n             </label>\r\n            <button class="marginLeft-30 btn-sm search-btn T-search" style="margin-top:2px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> \r\n        </div>\r\n    </div>\r\n    </div>\r\n    <div class="row innerTransferList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>部门</th>\r\n                    <th>总人数</th>\r\n                    <th>内转转入</th>\r\n                    <th>结算金额</th>\r\n                    <th>已收金额</th>\r\n                    <th>未收金额</th>\r\n                    <th>对账进度</th>\r\n                    <th>收款进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody class="T-innerTransferList">\r\n                {{each innerTransferIncomeList as innerTransfer}}\r\n                <tr businessGroupId="{{innerTransfer.businessGroupId}}" businessGroupName="{{innerTransfer.businessGroupName}}" endDate="{{searchParam.endAccountTime}}" startDate="{{searchParam.startAccountTime}}">\r\n                    <td>{{innerTransfer.businessGroupName}}</td>\r\n                    <td>{{innerTransfer.adultCount}}大{{innerTransfer.childCount}}小</td>\r\n                    <td>{{innerTransfer.transNeedPayMoney}}</td>\r\n                    <td>{{innerTransfer.settlementMoney}}</td>\r\n                    <td>{{innerTransfer.alreadyIncomeMoney}}</td>\r\n                    <td><span style="color:#FF0000">{{innerTransfer.unIncomeMoney}}</span></td>\r\n                     <td >\r\n                        {{if innerTransfer.confirmedcount != innerTransfer.count}}\r\n                        <span style="color:#ff9900">{{innerTransfer.confirmedcount}}/{{innerTransfer.count}}</span>\r\n                          {{else}}\r\n                          <span style="color:#00CC00"> {{innerTransfer.confirmedcount}}/{{innerTransfer.count}}</span>\r\n                        {{/if}}\r\n                    </td>\r\n                   \r\n                    <td >\r\n                        {{if innerTransfer.payedCount != innerTransfer.count}}\r\n                          <span style="color:#ff9900"> {{innerTransfer.payedCount}}/{{innerTransfer.count}}</span>\r\n                          {{else}}\r\n                          <span style="color:#00CC00"> {{innerTransfer.payedCount}}/{{innerTransfer.count}}</span>\r\n                        {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a class="cursor T-action T-check R-right" data-right="1370001">\r\n                                对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right="1370001"><a class="R-right" data-right="1370002"> |</a></label>\r\n                        <a class="cursor T-action T-balance R-right" data-right="1370002">\r\n                                收款\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 {{recordSize}} 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});