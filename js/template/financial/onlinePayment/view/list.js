/*TMODJS:{"debug":true,"version":142,"md5":"76099c9bbd31c574db9cae963a1962a8"}*/
define(function(require) {
    return require("../../../template")("financial/onlinePayment/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, businessType = $data.businessType, $escape = $utils.$escape, resourceName = $data.resourceName, partnerAgencyId = $data.partnerAgencyId, startTime = $data.startTime, endTime = $data.endTime, status = $data.status, $each = $utils.$each, payOrderList = $data.payOrderList, $string = ($data.rs, 
            $data.$index, $utils.$string), recordSize = $data.recordSize, $out = "";
            return $out += ' <div class="row" > <form class="form-horizontal" role="form" onsubmit="return false"> <div class="T-search-area"> <label>业务类别 </label> <select name="businessType" class="mar-r-10"> <option value="" ', 
            $line = 6, businessType && "" != businessType || ($out += "selected", $line = 6), 
            $out += '>全部</option> <option value="guide" ', $line = 7, "guide" == businessType && ($out += "selected", 
            $line = 7), $out += '>导游</option> <option value="busCompany" ', $line = 8, "busCompany" == businessType && ($out += "selected", 
            $line = 8), $out += '>车队</option> <option value="hotel" ', $line = 9, "hotel" == businessType && ($out += "selected", 
            $line = 9), $out += '>酒店</option> </select> <label>对方单位 </label> <input type="text" class="T-choosePartner mar-r-10" name="resourceName" value="', 
            $line = 13, $out += $escape(resourceName), $out += '" placeholder="对方单位" type="text" style="width:100px;" /> <!-- <input type="hidden" name="partnerAgencyId" value="', 
            $line = 14, $out += $escape(partnerAgencyId), $out += '" /> --> <label >记账时间 </label> <input class="date-picker " name="startTime" value="', 
            $line = 17, $out += $escape(startTime), $out += '" placeholder="开始日期" type="text" style="width:100px;" /> <label>至</label> <input class="date-picker mar-r-10" name="endTime" value="', 
            $line = 19, $out += $escape(endTime), $out += '" placeholder="结束日期" type="text" style="width:100px;" /> <label >状态 </label> <div class="btn-group T-status mar-r-10"> <button data-value="', 
            $line = 23, $out += $escape(status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" style="background: #ffffff!important; border: 1px solid #83bbd6!important;" aria-expanded="false"> <span> ', 
            $line = 25, "" == status ? ($out += " 全部 ", $line = 27) : 0 == status ? ($out += " 待支付 ", 
            $line = 29) : 1 == status ? ($out += " 已完成 ", $line = 31) : ($out += " 已取消 ", $line = 33), 
            $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li><a data-value="" href="javascript:void(0)">全部</a></li> <li><a data-value="0" href="javascript:void(0)">待支付</a></li> <li><a data-value="1" href="javascript:void(0)">已完成</a></li> <li><a data-value="-1" href="javascript:void(0)">已取消</a></li> </ul> </div> <button class="btn-height btn-sm search-btn T-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form>  <div class="row mar-t-10"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>支付单号</th> <th>业务类别</th> <th>对方单位</th> <th>付款金额</th> <th>银行账号</th> <th>凭证编号</th> <th>备注</th> <th>记账日期</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> ', 
            $line = 71, $each(payOrderList, function(rs) {
                $out += ' <tr data-id="', $line = 72, $out += $escape(rs.id), $out += '"> <td>', 
                $line = 73, $out += $escape(rs.orderNumber), $out += "</td> <td>", $line = 74, $out += $string($helpers.getBusinessTypeText(rs.businessType)), 
                $out += "</td> <td>", $line = 75, $out += $escape(rs.resourceName), $out += '</td> <td><span class="income F-float F-money">', 
                $line = 76, $out += $escape(rs.payMoney), $out += "</span></td> <td>", $line = 77, 
                $out += $escape(rs.bankNumber), $out += "</td> <td>", $line = 78, "" == rs.voucher || null == rs.voucher ? ($out += "-", 
                $line = 78) : ($line = 78, $out += $escape(rs.voucher), $line = 78), $out += "</td> <td>", 
                $line = 79, $out += $escape(rs.payRemark), $out += "</td> <td>", $line = 80, $out += $escape($helpers.dateFormat(rs.accountTime, "yyyy-MM-dd hh:mm:ss")), 
                $out += "</td> <td>", $line = 81, 0 == rs.status ? ($out += "待支付 ", $line = 82) : 1 == rs.status ? ($out += "已完成 ", 
                $line = 83) : -1 == rs.status && ($out += "已取消 ", $line = 84), $out += ' </td> <td><a class="cursor T-option T-paymentdetail">明细</a> <a class="cursor ', 
                $line = 87, 0 == rs.status ? ($out += "T-option T-payment", $line = 87) : ($out += "gray", 
                $line = 87), $out += '"> <label class="padding-right20">|</label> <span>付款</span> </a> <a class="cursor ', 
                $line = 91, 0 == rs.status ? ($out += "T-option T-cancel-payment", $line = 91) : ($out += "gray", 
                $line = 91), $out += '"> <label class="padding-right20">|</label> <span>取消</span> </a> </td> </tr> ', 
                $line = 97;
            }), $out += ' </tbody> </table> </div> </div> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-recordSize">共计 ', 
            $line = 104, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: ' <div class="row" >\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="T-search-area">\r\n            <label>业务类别 </label>\r\n            <select name="businessType" class="mar-r-10">\r\n                <option value="" {{if !businessType || businessType == ""}}selected{{/if}}>全部</option>\r\n                <option value="guide" {{if businessType == "guide"}}selected{{/if}}>导游</option>\r\n                <option value="busCompany" {{if businessType == "busCompany"}}selected{{/if}}>车队</option>\r\n                <option value="hotel" {{if businessType == "hotel"}}selected{{/if}}>酒店</option>\r\n            </select>\r\n\r\n            <label>对方单位 </label>\r\n            <input type="text" class="T-choosePartner mar-r-10" name="resourceName" value="{{resourceName}}" placeholder="对方单位"  type="text" style="width:100px;" /> \r\n            <!-- <input type="hidden" name="partnerAgencyId" value="{{partnerAgencyId}}" />  -->\r\n\r\n            <label >记账时间 </label>\r\n			<input class="date-picker " name="startTime" value="{{startTime}}" placeholder="开始日期" type="text" style="width:100px;" />	\r\n            <label>至</label>\r\n            <input class="date-picker mar-r-10" name="endTime" value="{{endTime}}" placeholder="结束日期"  type="text" style="width:100px;" />	\r\n\r\n            <label >状态 </label>\r\n            <div class="btn-group T-status mar-r-10">\r\n                <button data-value="{{status}}" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" style="background: #ffffff!important; border: 1px solid #83bbd6!important;" aria-expanded="false">\r\n                    <span>\r\n                        {{if status == ""}}\r\n                            全部\r\n                        {{else if status == 0}}\r\n                            待支付\r\n                        {{else if status == 1}}\r\n                            已完成\r\n                        {{else}}\r\n                            已取消\r\n                        {{/if}}         \r\n                    </span>\r\n                    <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                </button>\r\n                <ul class="dropdown-menu">\r\n                    <li><a data-value="" href="javascript:void(0)">全部</a></li>\r\n                    <li><a data-value="0" href="javascript:void(0)">待支付</a></li>\r\n                    <li><a data-value="1" href="javascript:void(0)">已完成</a></li>\r\n                    <li><a data-value="-1" href="javascript:void(0)">已取消</a></li>\r\n                </ul>\r\n            </div>\r\n\r\n            <button class="btn-height btn-sm search-btn T-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <!-- <div class="form-group">\r\n        <label class="control-label">付款金额合计：<span class="F-float F-money"></span></label>\r\n    </div> --> \r\n    <div class="row mar-t-10">\r\n        <div class="col-xs-12">\r\n            <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n                <thead>\r\n	                <tr class="bg-blur T-tr-fixed">\r\n	                   <th>支付单号</th>\r\n	                   <th>业务类别</th>\r\n	                   <th>对方单位</th>\r\n                       <th>付款金额</th>\r\n	                   <th>银行账号</th>\r\n                       <th>凭证编号</th>\r\n	                   <th>备注</th>\r\n	                   <th>记账日期</th>\r\n                       <th>状态</th>\r\n                       <th>操作</th>\r\n	                </tr>\r\n                </thead>\r\n                <tbody class="T-list">\r\n                    {{each payOrderList as rs}}\r\n                    <tr data-id="{{rs.id}}">\r\n                        <td>{{rs.orderNumber}}</td>\r\n                        <td>{{#rs.businessType | getBusinessTypeText}}</td>\r\n                        <td>{{rs.resourceName}}</td>\r\n                        <td><span class="income F-float F-money">{{rs.payMoney}}</span></td>\r\n                        <td>{{rs.bankNumber}}</td>\r\n                        <td>{{if rs.voucher == "" || rs.voucher == null}}-{{else}}{{rs.voucher}}{{/if}}</td>\r\n                        <td>{{rs.payRemark}}</td>\r\n                        <td>{{rs.accountTime | dateFormat:"yyyy-MM-dd hh:mm:ss"}}</td>\r\n                        <td>{{if rs.status == 0}}待支付\r\n                            {{else if rs.status == 1}}已完成\r\n                            {{else if rs.status == -1}}已取消\r\n                            {{/if}}\r\n                        </td>\r\n                        <td><a class="cursor T-option T-paymentdetail">明细</a>\r\n                            <a class="cursor {{if rs.status == 0}}T-option T-payment{{else}}gray{{/if}}">\r\n                                <label class="padding-right20">|</label>\r\n                                <span>付款</span>\r\n                            </a>\r\n                            <a class="cursor {{if rs.status == 0}}T-option T-cancel-payment{{else}}gray{{/if}}">\r\n                                <label class="padding-right20">|</label>\r\n                                <span>取消</span>\r\n                            </a>\r\n                        </td>\r\n                    </tr>\r\n                    {{/each}}\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </div>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small class="T-recordSize">共计 {{recordSize}} 条记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});