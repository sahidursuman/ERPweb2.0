/*TMODJS:{"debug":true,"version":270,"md5":"1d55ad7fdd667e11e6da23a438b3486b"}*/
define(function(require) {
    return require("../../../template")("financial/innerTransferOut/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, toBusinessGroupName = $data.toBusinessGroupName, toBusinessGroupId = $data.toBusinessGroupId, startDate = $data.startDate, endDate = $data.endDate, searchParam = $data.searchParam, $each = $utils.$each, list = $data.list, recordSize = ($data.innerTransferOut, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row FinancialinnerTransferOut"> <div class="form-horizontal search-area"> <div class="T-search-area"> <label class="mar-l-10">部门 </label> <input type="text" class="mar-r-10" name="toBusinessGroupName" value="', 
            $line = 5, $out += $escape(toBusinessGroupName), $out += '" placeholder="所有部门"/> <input type="hidden" name="toBusinessGroupId" value="', 
            $line = 7, $out += $escape(toBusinessGroupId), $out += '" /> <label class="mar-r-10">账期 <input type="text" class="date-picker" style="width:100px;text-align:center" name="startDate" value="', 
            $line = 9, $out += $escape(startDate), $out += '" /> <span>&nbsp;至&nbsp;</span> <input type="text" class="date-picker" name="endDate" value="', 
            $line = 11, $out += $escape(endDate), $out += '" style="width:100px;text-align:center" /> </label> <div class="btn-group T-finance-status mar-r-10"> <button data-value="', 
            $line = 14, $out += $escape(searchParam.accountStatus), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up block-up" aria-expanded="false"> <span> ', 
            $line = 16, 0 == searchParam.accountStatus ? ($out += " 全部 ", $line = 18) : 1 == searchParam.accountStatus ? ($out += " 已结清 ", 
            $line = 20) : ($out += " 未结清 ", $line = 22), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="0" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已结清</a> </li> <li> <a data-value="2" href="javascript:void(0)">未结清</a> </li> </ul> </div> <button class=" btn-sm search-btn T-search" style="margin-top:2px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> </div> <div class="form-inline T-sum-area"> <div class="form-group mar-r-20"> <label class="control-label">总人数合计：</label> <label class="control-label T-sumCount"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">内转转出合计：</label> <label class="control-label F-float F-money T-sumInnerOutMoney"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">结算金额合计：</label> <label class="control-label F-float F-money T-sumStMoney"></label> </div> <div class="form-group mar-r-20"> <label class="control-label">已付金额合计：</label> <label class="control-label F-float F-money T-sumPaiedMoney"></label> </div> <div class="form-group"> <label class="control-label">未付金额合计：</label> <label class="control-label F-float F-money T-sumUnPaiedMoney"></label> </div> </div> <div class="row innerTransferOutList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>部门</th> <th>总人数</th> <th>内转应付</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-innerTransferOutList"> ', 
            $line = 81, $each(list, function(innerTransferOut) {
                $out += ' <tr accountStatus="', $line = 82, $out += $escape(searchParam.accountStatus), 
                $out += '" businessGroupId="', $line = 82, $out += $escape(innerTransferOut.businessGroupId), 
                $out += '" businessGroupName="', $line = 82, $out += $escape(innerTransferOut.businessGroupName), 
                $out += '" endDate="', $line = 82, $out += $escape(endDate), $out += '" startDate="', 
                $line = 82, $out += $escape(startDate), $out += '"> <td>', $line = 83, $out += $escape(innerTransferOut.businessGroupName), 
                $out += '</td> <td><span class="F-float F-count">', $line = 84, $out += $escape(innerTransferOut.sumTransAdultCount), 
                $out += '</span>大 <span class="F-float F-count">', $line = 85, $out += $escape(innerTransferOut.sumTransChildCount), 
                $out += '</span>小 </td> <td><span class="F-float F-money">', $line = 87, $out += $escape(innerTransferOut.sumTransNeedPayMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 88, $out += $escape(innerTransferOut.sumSettlementMoney), 
                $out += '</span></td> <td><span class="F-float F-money">', $line = 89, $out += $escape(innerTransferOut.sumPayedMoney), 
                $out += '</span></td> <td><span class="F-float F-money" style="color:#FF0000">', 
                $line = 90, $out += $escape(innerTransferOut.sumUnPayedMoney), $out += "</span></td> <td> ", 
                $line = 92, innerTransferOut.checkFCount != innerTransferOut.sumFCount ? ($out += ' <span style="color:#ff9900">', 
                $line = 93, $out += $escape(innerTransferOut.checkFCount), $out += "/", $line = 93, 
                $out += $escape(innerTransferOut.sumFCount), $out += "</span> ", $line = 93) : ($out += ' <span style="color:#00CC00"> ', 
                $line = 94, $out += $escape(innerTransferOut.checkFCount), $out += "/", $line = 94, 
                $out += $escape(innerTransferOut.sumFCount), $out += "</span> ", $line = 94), $out += " </td> <td> ", 
                $line = 97, innerTransferOut.payFCount != innerTransferOut.sumFCount ? ($out += ' <span style="color:#ff9900"> ', 
                $line = 98, $out += $escape(innerTransferOut.payFCount), $out += "/", $line = 98, 
                $out += $escape(innerTransferOut.sumFCount), $out += "</span> ", $line = 98) : ($out += ' <span style="color:#00CC00"> ', 
                $line = 99, $out += $escape(innerTransferOut.payFCount), $out += "/", $line = 99, 
                $out += $escape(innerTransferOut.sumFCount), $out += "</span> ", $line = 99), $out += ' </td> <td> <a class="cursor T-action T-check R-right" data-right="1370001|1370005"> 对账 </a> <label class="cursor R-right" data-right="1370001|1370005"><a class="R-right" data-right="1370002"> |</a></label> <a class="cursor T-action T-balance R-right" data-right="1370002"> 付款 </a> </td> </tr> ', 
                $line = 111;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 116, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row FinancialinnerTransferOut">\r\n    <div class="form-horizontal search-area">\r\n        <div class="T-search-area">\r\n            <label class="mar-l-10">部门 </label>\r\n            <input type="text" class="mar-r-10" name="toBusinessGroupName" value="{{toBusinessGroupName}}" \r\n            placeholder="所有部门"/>\r\n            <input type="hidden" name="toBusinessGroupId" value="{{toBusinessGroupId}}" />\r\n            <label class="mar-r-10">账期\r\n                <input type="text" class="date-picker" style="width:100px;text-align:center" name="startDate" value="{{startDate}}" />\r\n                <span>&nbsp;至&nbsp;</span>\r\n                <input type="text" class="date-picker" name="endDate" value="{{endDate}}" style="width:100px;text-align:center" />\r\n            </label>\r\n            <div class="btn-group T-finance-status mar-r-10">\r\n                <button data-value="{{searchParam.accountStatus}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up block-up" aria-expanded="false">\r\n                    <span>\r\n                        {{if searchParam.accountStatus == 0}}\r\n                            全部\r\n                        {{else if searchParam.accountStatus == 1}}\r\n                            已结清\r\n                        {{else}}\r\n                            未结清\r\n                        {{/if}}\r\n                    </span>\r\n                    <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                </button>\r\n                <ul class="dropdown-menu">\r\n                    <li>\r\n                        <a data-value="0" href="javascript:void(0)">全部</a>\r\n                    </li>\r\n                    <li>\r\n                        <a data-value="1" href="javascript:void(0)">已结清</a>\r\n                    </li>\r\n                    <li>\r\n                        <a data-value="2" href="javascript:void(0)">未结清</a>\r\n                    </li>\r\n                </ul>\r\n            </div>\r\n            <button class=" btn-sm search-btn T-search" style="margin-top:2px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class="form-inline T-sum-area">\r\n    <div class="form-group mar-r-20">\r\n        <label class="control-label">总人数合计：</label>\r\n        <label class="control-label T-sumCount"></label>\r\n    </div>\r\n    <div class="form-group mar-r-20">\r\n        <label class="control-label">内转转出合计：</label>\r\n        <label class="control-label F-float F-money T-sumInnerOutMoney"></label>\r\n    </div>\r\n    <div class="form-group mar-r-20">\r\n        <label class="control-label">结算金额合计：</label>\r\n        <label class="control-label F-float F-money T-sumStMoney"></label>\r\n    </div>\r\n    <div class="form-group mar-r-20">\r\n        <label class="control-label">已付金额合计：</label>\r\n        <label class="control-label F-float F-money T-sumPaiedMoney"></label>\r\n    </div>\r\n    <div class="form-group">\r\n        <label class="control-label">未付金额合计：</label>\r\n        <label class="control-label F-float F-money T-sumUnPaiedMoney"></label>\r\n    </div>\r\n</div>\r\n<div class="row innerTransferOutList">\r\n    <div class="col-xs-12">\r\n        <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n            <thead>\r\n                <tr class="bg-blur T-tr-fixed">\r\n                    <th>部门</th>\r\n                    <th>总人数</th>\r\n                    <th>内转应付</th>\r\n                    <th>结算金额</th>\r\n                    <th>已付金额</th>\r\n                    <th>未付金额</th>\r\n                    <th>对账进度</th>\r\n                    <th>付款进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-innerTransferOutList">\r\n                {{each list as innerTransferOut}}\r\n                <tr accountStatus="{{searchParam.accountStatus}}" businessGroupId="{{innerTransferOut.businessGroupId}}" businessGroupName="{{innerTransferOut.businessGroupName}}" endDate="{{endDate}}" startDate="{{startDate}}">\r\n                    <td>{{innerTransferOut.businessGroupName}}</td>\r\n                    <td><span class="F-float F-count">{{innerTransferOut.sumTransAdultCount}}</span>大\r\n                        <span class="F-float F-count">{{innerTransferOut.sumTransChildCount}}</span>小\r\n                    </td>\r\n                    <td><span class="F-float F-money">{{innerTransferOut.sumTransNeedPayMoney}}</span></td>\r\n                    <td><span class="F-float F-money">{{innerTransferOut.sumSettlementMoney}}</span></td>\r\n                    <td><span class="F-float F-money">{{innerTransferOut.sumPayedMoney}}</span></td>\r\n                    <td><span class="F-float F-money" style="color:#FF0000">{{innerTransferOut.sumUnPayedMoney}}</span></td>\r\n                    <td>\r\n                        {{if innerTransferOut.checkFCount != innerTransferOut.sumFCount}}\r\n                        <span style="color:#ff9900">{{innerTransferOut.checkFCount}}/{{innerTransferOut.sumFCount}}</span> {{else}}\r\n                        <span style="color:#00CC00"> {{innerTransferOut.checkFCount}}/{{innerTransferOut.sumFCount}}</span> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if innerTransferOut.payFCount != innerTransferOut.sumFCount}}\r\n                        <span style="color:#ff9900"> {{innerTransferOut.payFCount}}/{{innerTransferOut.sumFCount}}</span> {{else}}\r\n                        <span style="color:#00CC00"> {{innerTransferOut.payFCount}}/{{innerTransferOut.sumFCount}}</span> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a class="cursor T-action T-check R-right" data-right="1370001|1370005">\r\n                            对账\r\n                    </a>\r\n                        <label class="cursor R-right" data-right="1370001|1370005"><a class="R-right" data-right="1370002"> |</a></label>\r\n                        <a class="cursor T-action T-balance R-right" data-right="1370002">\r\n                            付款\r\n                    </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});