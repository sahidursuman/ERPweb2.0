/*TMODJS:{"debug":true,"version":20,"md5":"83649b9e1d5a4153a921192c4bfada13"}*/
define(function(require) {
    return require("../../../template")("financial/else/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, ticketList = $data.ticketList, $escape = ($data.ticket, 
            $data.$index, $utils.$escape), recordSize = $data.recordSize, totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row"> <div class="search-area "> <div class="form-group"> <label class="pull-left" style="margin-left: 15px">项目名称：</label> <div class="col-sm-2"> <select name="lineProductId" class="col-xs-12"> <option></option> </select> </div> <label class=" control-label pull-left" style="margin-left: 15px"> 日期： </label> <select class="col-sm-1"> <option>2015</option> <option>2014</option> </select> <select style="margin-left: 20px" class="col-sm-1"> <option>5月</option> <option>4月</option> </select> <button class=" btn-sm btn-arrangeTourist-search search-btn btn-height" style="margin-left: 60px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="space-20"></div> <div class="row ticketList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>购物店</th> <th class="col-sm-1">总人数</th> <th>购物总额</th> <th>总账面返佣</th> <th>总实际返佣</th> <th>总已结账</th> <th>总未结账</th> <th>对账进度</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 48, $each(ticketList, function(ticket) {
                $out += ' <tr class="ticket-', $line = 49, $out += $escape(ticket.id), $out += '"> <td>888</td> <td>', 
                $line = 51, $out += $escape(ticket.name), $out += "</td> <td>", $line = 52, $out += $escape(ticket.managerName), 
                $out += "</td> <td>", $line = 53, $out += $escape(ticket.mobileNumber), $out += "</td> <td>", 
                $line = 54, $out += $escape(ticket.companyPhoneNumber), $out += "</td> <td> ", $line = 56, 
                null != ticket.province && ($out += " ", $line = 57, $out += $escape(ticket.province.name), 
                $out += " ", $line = 58), $out += " ", $line = 59, null != ticket.city && ($out += " -", 
                $line = 60, $out += $escape(ticket.city.name), $out += " ", $line = 61), $out += " ", 
                $line = 62, null != ticket.district && ($out += " -", $line = 63, $out += $escape(ticket.district.name), 
                $out += " ", $line = 64), $out += " </td> <td> ", $line = 67, 0 == ticket.payType ? ($out += " 现付 ", 
                $line = 69) : ($out += " 账期 ", $line = 71), $out += " </td> <td> ", $line = 74, 
                0 == ticket.status ? ($out += " 已停用 ", $line = 76) : ($out += " 已启用 ", $line = 78), 
                $out += ' </td> <td> <a class="cursor btn-divide"> 对账 </a><a href="" class="cursor"> |</a> <a data-entity-id="92" class=" btn-transfter"> 结算 </a> </td> </tr> ', 
                $line = 89;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 94, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 103, 0 == totalPage ? ($out += " 0/0 ", $line = 105) : ($out += " ", $line = 106, 
            $out += $escape(pageNo + 1), $out += "/", $line = 106, $out += $escape(totalPage), 
            $out += " ", $line = 107), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n    <div class="search-area ">\r\n        <div class="form-group"> <label class="pull-left" style="margin-left: 15px">项目名称：</label>\r\n            <div class="col-sm-2">\r\n                <select name="lineProductId" class="col-xs-12">\r\n                    <option></option>\r\n                </select> </div>\r\n\r\n            <label class=" control-label pull-left" style="margin-left: 15px">\r\n                日期：\r\n            </label>\r\n\r\n            <select class="col-sm-1">\r\n                <option>2015</option>\r\n                <option>2014</option>\r\n            </select>\r\n            <select style="margin-left: 20px" class="col-sm-1">\r\n                <option>5月</option>\r\n                <option>4月</option>\r\n            </select>\r\n\r\n\r\n            <button class=" btn-sm  btn-arrangeTourist-search search-btn btn-height" style="margin-left: 60px">\r\n                <i class="ace-icon fa fa-search"></i>\r\n                搜索\r\n            </button>\r\n    </div>\r\n    <div class="space-20"></div>\r\n    <div class="row ticketList">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover">\r\n                <thead>\r\n                <tr class="bg-blur">\r\n\r\n                    <th>购物店</th>\r\n                    <th class="col-sm-1">总人数</th>\r\n                    <th>购物总额</th>\r\n                    <th>总账面返佣</th>\r\n                    <th>总实际返佣</th>\r\n                    <th>总已结账</th>\r\n                    <th>总未结账</th>\r\n                    <th>对账进度</th>\r\n                    <th>操作</th>\r\n                </tr>\r\n                </thead>\r\n\r\n                <tbody>\r\n                {{each ticketList as ticket}}\r\n                <tr class="ticket-{{ticket.id}}">\r\n                    <td>888</td>\r\n                    <td>{{ticket.name}}</td>\r\n                    <td>{{ticket.managerName}}</td>\r\n                    <td>{{ticket.mobileNumber}}</td>\r\n                    <td>{{ticket.companyPhoneNumber}}</td>\r\n                    <td>\r\n                        {{if ticket.province!=null}}\r\n                        {{ticket.province.name}}\r\n                        {{/if}}\r\n                        {{if ticket.city!=null}}\r\n                        -{{ticket.city.name}}\r\n                        {{/if}}\r\n                        {{if ticket.district!=null}}\r\n                        -{{ticket.district.name}}\r\n                        {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if ticket.payType==0}}\r\n                        现付\r\n                        {{else}}\r\n                        账期\r\n                        {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        {{if ticket.status == 0}}\r\n                        已停用\r\n                        {{else ticket.status == 1}}\r\n                        已启用\r\n                        {{/if}}\r\n                    </td>\r\n                    <td>\r\n                        <a class="cursor btn-divide">\r\n                            对账\r\n                        </a><a href="" class="cursor"> |</a>\r\n                        <a data-entity-id="92" class=" btn-transfter">\r\n                            结算\r\n                        </a>\r\n                    </td>\r\n                </tr>\r\n                {{/each}}\r\n                </tbody>\r\n            </table>\r\n            <div class="row pageMode">\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n                </div>\r\n                <div class="col-xs-6">\r\n                    <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n                        <ul class="pagination">\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n                                <a href="javascript:void(0)">\r\n                                    {{if totalPage == 0}}\r\n                                    0/0\r\n                                    {{else}}\r\n                                    {{pageNo+1}}/{{totalPage}}\r\n                                    {{/if}}\r\n                                </a>\r\n                            </li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n                            <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});