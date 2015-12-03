/*TMODJS:{"debug":true,"version":275,"md5":"068ccd7e1fae9208b3eefe5c0642c4c0"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, financialOtherList = $data.financialOtherList, $escape = ($data.other, 
            $data.index, $utils.$escape), searchParam = $data.searchParam, $out = ($data.year, 
            $data.month, $data.$index, "");
            return $out += '<div class="row globalAdd T-other" > <div class="form-horizontal search-area"> <div class="form-group" > <label class="control-label pull-left marginLeft-30" >项目名称：</label> <select class="col-xs-1" name="busCompanyId" > ', 
            $line = 6, $each(financialOtherList, function(other) {
                $out += " <option>", $line = 7, $out += $escape(other.name), $out += "</option> ", 
                $line = 8;
            }), $out += ' </select> <label class="control-label pull-left marginLeft-30" >账期：</label> <select class="col-sm-1" name="year" > ', 
            $line = 12, $each(searchParam, function(year) {
                $out += ' <option value="', $line = 13, $out += $escape(year.startAccountTime), 
                $out += '" ', $line = 13, searchParam.year == year.startAccountTime && ($out += 'selected="selected"', 
                $line = 13), $out += ">", $line = 13, $out += $escape(year.startAccountTime), $out += "</option> ", 
                $line = 14;
            }), $out += ' </select> <select class="col-sm-1 marginLeft-30" name="month" > ', 
            $line = 17, $each(searchParam, function(month) {
                $out += ' <option value="', $line = 18, $out += $escape(month.endAccountTime), $out += '" ', 
                $line = 18, searchParam.month == month.endAccountTime && ($out += 'selected="selected"', 
                $line = 18), $out += ">", $line = 18, $out += $escape(month.endAccountTime), $out += "</option> ", 
                $line = 19;
            }), $out += ' </select> <button class="btn-sm T-search search-btn marginLeft-30" > <i class="ace-ico n fa fa-search"></i> 搜索 </button> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>项目名称</th> <th>账面应付</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 41, $each(financialOtherList, function(other) {
                $out += " <tr> <td>", $line = 43, $out += $escape(other.name), $out += "</td> <td>", 
                $line = 44, $out += $escape(other.sumNeedPayMoney), $out += "</td> <td>", $line = 45, 
                $out += $escape(other.sumSettlementMoney), $out += "</td> <td>", $line = 46, $out += $escape(other.sumPayedMoney), 
                $out += "</td> <td>", $line = 47, $out += $escape(other.sumUnPayedMoney), $out += '</td> <td><span style="color:red">', 
                $line = 48, $out += $escape(other.confirmedCount), $out += "/", $line = 48, $out += $escape(other.confirmedCount), 
                $out += "</span></td> <td>", $line = 49, $out += $escape(other.payedCount), $out += "/", 
                $line = 49, $out += $escape(other.payedCount), $out += '</td> <td> <a class=" btn-divide T-checking cursor R-right" data-right=""> 对账 </a> <label class="cursor R-right" data-right=""><a class="R-right" data-right=""> |</a></label> <a class="btn-guide-view R-right cursor btn-transfter T-payment " data-right=""> 付款 </a> </td> </tr> ', 
                $line = 61;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 2 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row  globalAdd T-other" >\r\n    <div class="form-horizontal search-area">    \r\n        <div class="form-group" >      \r\n          <label class="control-label pull-left marginLeft-30" >项目名称：</label>\r\n                <select  class="col-xs-1" name="busCompanyId" >\r\n                     {{each financialOtherList as other index}}\r\n                        <option>{{other.name}}</option>\r\n                    {{/each}}\r\n                </select>        \r\n           <label class="control-label pull-left marginLeft-30" >账期：</label>\r\n                <select class="col-sm-1" name="year" >\r\n                    {{each searchParam as year index}}\r\n                    <option value="{{year.startAccountTime}}" {{if searchParam.year == year.startAccountTime}}selected="selected"{{/if}}>{{year.startAccountTime}}</option>\r\n                    {{/each}}\r\n                </select> \r\n                <select class="col-sm-1 marginLeft-30" name="month" >\r\n                    {{each searchParam as month index}}\r\n                        <option value="{{month.endAccountTime}}" {{if searchParam.month == month.endAccountTime}}selected="selected"{{/if}}>{{month.endAccountTime}}</option>\r\n                    {{/each}}\r\n                </select>\r\n            <button class="btn-sm T-search search-btn marginLeft-30" >\r\n                <i class="ace-ico n fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </div>\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n                    <th>项目名称</th>\r\n                    <th>账面应付</th>\r\n                    <th>结算金额</th>\r\n                    <th>已付金额</th>\r\n                    <th>未付金额</th>\r\n                    <th>对账进度</th>\r\n                    <th>付款进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                 {{each financialOtherList as other}}\r\n                <tr>\r\n                    <td>{{other.name}}</td>\r\n                    <td>{{other.sumNeedPayMoney}}</td>\r\n                    <td>{{other.sumSettlementMoney }}</td>\r\n                    <td>{{other.sumPayedMoney }}</td>\r\n                    <td>{{other.sumUnPayedMoney }}</td>\r\n                    <td><span style="color:red">{{other.confirmedCount }}/{{other.confirmedCount}}</span></td>\r\n                    <td>{{other.payedCount }}/{{other.payedCount}}</td>\r\n                    <td>\r\n                    <a  class=" btn-divide T-checking cursor R-right" data-right="">\r\n                            对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right=""><a class="R-right" data-right=""> |</a></label>\r\n                        <a  class="btn-guide-view R-right cursor btn-transfter T-payment " data-right="">\r\n                        \r\n                            付款\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n               \r\n                </tbody>\r\n            </table>\r\n             <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <small>共计 2 条记录</small>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});