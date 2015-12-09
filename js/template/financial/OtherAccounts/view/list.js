/*TMODJS:{"debug":true,"version":433,"md5":"d12deedbfc464d8c53b897209befb010"}*/
define(function(require) {
    return require("../../../template")("financial/OtherAccounts/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, financialOtherList = $data.financialOtherList, startAccountTime = $data.startAccountTime, endAccountTime = $data.endAccountTime, $each = $utils.$each, recordSize = ($data.other, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row globalAdd T-other"> <div class="form-horizontal search-area"> <div class="form-group T-search-area"> <label class="control-label pull-left marginLeft-30">项目名称：</label> <input type="text" class="T-search-head col-sm-1 T-search-head-office" value="', 
            $line = 5, $out += $escape(financialOtherList.name || "全部"), $out += '" name="otherId"> <label class="pull-left text-right marginLeft-30">账期:</label> <div class="col-sm-1 input-daterange"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker T-time T-subsectionStartTime" name="startTime" value="', 
            $line = 9, $out += $escape(startAccountTime), $out += '" type="text"> </div> </div> <label class="pull-left text-right "> 至 </label> <div class="col-sm-1 input-daterange"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker T-time T-subsectionStartTime" name="endTime" value="', 
            $line = 15, $out += $escape(endAccountTime), $out += '" type="text"> </div> </div> <button class="btn-sm T-search search-btn marginLeft-30"> <i class="ace-ico n fa fa-search"></i> 搜索 </button> </div> </div> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>项目名称</th> <th>账面应付</th> <th>结算金额</th> <th>已付金额</th> <th>未付金额</th> <th>对账进度</th> <th>付款进度</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 38, $each(financialOtherList, function(other) {
                $out += ' <tr data-id="', $line = 39, $out += $escape(other.id), $out += '" data-name="', 
                $line = 39, $out += $escape(other.name), $out += '"> <td>', $line = 40, $out += $escape(other.name), 
                $out += "</td> <td>", $line = 41, $out += $escape(other.sumNeedPayMoney), $out += "</td> <td>", 
                $line = 42, $out += $escape(other.sumSettlementMoney), $out += "</td> <td>", $line = 43, 
                $out += $escape(other.sumPayedMoney), $out += "</td> <td>", $line = 44, $out += $escape(other.sumUnPayedMoney), 
                $out += "</td> <td> ", $line = 46, other.count == other.confirmedCount ? ($out += ' <span style="color:green">', 
                $line = 47, $out += $escape(other.confirmedCount), $line = 47, $out += $escape("/"), 
                $line = 47, $out += $escape(other.count), $out += "</span> ", $line = 47) : ($out += ' <span style="color:red">', 
                $line = 48, $out += $escape(other.confirmedCount), $line = 48, $out += $escape("/"), 
                $line = 48, $out += $escape(other.count), $out += "</span> ", $line = 48), $out += " </td> <td> ", 
                $line = 51, other.count == other.payedCount ? ($out += ' <span style="color:green">', 
                $line = 52, $out += $escape(other.payedCount), $line = 52, $out += $escape("/"), 
                $line = 52, $out += $escape(other.count), $out += "</span> ", $line = 52) : ($out += ' <span style="color:red">', 
                $line = 53, $out += $escape(other.payedCount), $line = 53, $out += $escape("/"), 
                $line = 53, $out += $escape(other.count), $out += "</span> ", $line = 53), $out += ' </td> <td> <a class=" btn-divide T-checking cursor T-option R-right" data-right=""> 对账 </a> <label class="cursor R-right" data-right=""><a class="R-right" data-right=""> |</a></label> <a class="btn-guide-view R-right cursor btn-transfter T-option T-payment " data-right=""> 付款 </a> </td> </tr> ', 
                $line = 65;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 70, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row  globalAdd T-other">\r\n    <div class="form-horizontal search-area">\r\n        <div class="form-group T-search-area">\r\n            <label class="control-label pull-left marginLeft-30">项目名称：</label>\r\n            <input type="text" class="T-search-head col-sm-1 T-search-head-office" value="{{financialOtherList.name || \'全部\'}}" name="otherId">\r\n            <label class="pull-left text-right   marginLeft-30">账期:</label>\r\n            <div class="col-sm-1 input-daterange">\r\n                <div class="input-group col-sm-12">\r\n                    <input class="col-sm-12 datepicker  T-time T-subsectionStartTime" name="startTime" value="{{startAccountTime}}" type="text">\r\n                </div>\r\n            </div>\r\n            <label class="pull-left text-right "> 至 </label>\r\n            <div class="col-sm-1 input-daterange">\r\n                <div class="input-group col-sm-12">\r\n                    <input class="col-sm-12 datepicker T-time T-subsectionStartTime" name="endTime" value="{{endAccountTime}}" type="text">\r\n                </div>\r\n            </div>\r\n            <button class="btn-sm T-search search-btn marginLeft-30">\r\n                <i class="ace-ico n fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </div>\r\n    <div class="col-xs-12">\r\n        <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n            <thead>\r\n                <tr class="bg-blur">\r\n                    <th>项目名称</th>\r\n                    <th>账面应付</th>\r\n                    <th>结算金额</th>\r\n                    <th>已付金额</th>\r\n                    <th>未付金额</th>\r\n                    <th>对账进度</th>\r\n                    <th>付款进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody class="T-list">\r\n                {{each financialOtherList as other}}\r\n                <tr data-id="{{other.id}}" data-name="{{other.name}}">\r\n                    <td>{{other.name}}</td>\r\n                    <td>{{other.sumNeedPayMoney}}</td>\r\n                    <td>{{other.sumSettlementMoney }}</td>\r\n                    <td>{{other.sumPayedMoney }}</td>\r\n                    <td>{{other.sumUnPayedMoney }}</td>\r\n                    <td>\r\n                        {{if other.count == other.confirmedCount }}\r\n                        <span style="color:green">{{other.confirmedCount}}{{"/"}}{{other.count}}</span> {{else}}\r\n                        <span style="color:red">{{other.confirmedCount}}{{"/"}}{{other.count}}</span> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if other.count == other.payedCount}}\r\n                        <span style="color:green">{{other.payedCount}}{{"/"}}{{other.count}}</span> {{else}}\r\n                        <span style="color:red">{{other.payedCount}}{{"/"}}{{other.count}}</span> {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a class=" btn-divide T-checking  cursor T-option R-right" data-right="">\r\n                            对账\r\n                        </a>\r\n                        <label class="cursor R-right" data-right=""><a class="R-right" data-right=""> |</a></label>\r\n                        <a class="btn-guide-view R-right cursor btn-transfter T-option  T-payment " data-right="">\r\n                            付款\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n            </tbody>\r\n        </table>\r\n        <div class="row pageMode">\r\n            <div class="col-xs-6">\r\n                <small>共计 {{recordSize}} 条记录</small>\r\n            </div>\r\n            <div class="col-xs-6">\r\n                <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});