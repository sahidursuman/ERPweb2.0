/*TMODJS:{"debug":true,"version":85,"md5":"d24ee2fa23b4052a68d9a41961a614ef"}*/
define(function(require) {
    return require("../../../template")("financial/finIncome/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, startDate = $data.startDate, endDate = $data.endDate, accountStatus = $data.accountStatus, $out = "";
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>业务类别 </label> <select name="T-business-type" class="T-business-type"> <option value="0">客户</option> <option value="1">内转</option> <option value="2">购物</option> <option value="3">代订</option> </select> </div> <div class="form-group mar-r-10"> <label>对方单位 </label> <input type="text" class="form-control T-org-name" style="width: 180px;" maxlength="100"> </div> <div class="form-group input-daterange mar-r-10"> <label>账期：</label> <input type="text" class="form-control T-datepicker T-start" value="', 
            $line = 18, $out += $escape(startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control T-datepicker T-end" value="', 
            $line = 20, $out += $escape(endDate), $out += '"> </div> <div class="form-group T-finance-status btn-group mar-r-10"> <button data-value="', 
            $line = 23, $out += $escape(accountStatus), $out += '" data-toggle="dropdown" class="btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 25, 0 == accountStatus ? ($out += " 全部 ", $line = 27) : 1 == accountStatus ? ($out += " 已结清 ", 
            $line = 29) : ($out += " 未结清 ", $line = 31), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="0" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已结清</a> </li> <li> <a data-value="2" href="javascript:void(0)">未结清</a> </li> </ul> </div> <div class="form-group"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="form-inline row T-sum-area"> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <colgroup> <col style="width: 30%;"> <col style="width: 15%;"> <col style="width: 15%;"> <col style="width: 15%;"> <col style="width: 25%;"> </colgroup> <thead> <tr class="bg-blur"> <th>对方单位</th> <th>应收金额</th> <th>已收金额</th> <th>未收金额</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-sumItem">没有查询到相关记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group mar-r-10">\r\n            <label>业务类别 </label>\r\n            <select name="T-business-type" class="T-business-type">\r\n                <option value="0">客户</option>\r\n                <option value="1">内转</option>\r\n                <option value="2">购物</option>\r\n                <option value="3">代订</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>对方单位 </label>\r\n            <input type="text" class="form-control T-org-name" style="width: 180px;" maxlength="100">\r\n        </div>\r\n        <div class="form-group input-daterange mar-r-10">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control T-datepicker T-start" value="{{startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control T-datepicker T-end" value="{{endDate}}">\r\n        </div>\r\n        <div class="form-group T-finance-status btn-group mar-r-10">\r\n            <button data-value="{{accountStatus}}" data-toggle="dropdown" class="btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n                    {{if accountStatus == 0}}\r\n                        全部\r\n                    {{else if accountStatus == 1}}\r\n                        已结清\r\n                    {{else}}\r\n                        未结清\r\n                    {{/if}}\r\n                </span>\r\n                    <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n                </button>    \r\n            <ul class="dropdown-menu">\r\n                <li>\r\n                    <a data-value="0" href="javascript:void(0)">全部</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="1" href="javascript:void(0)">已结清</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="2" href="javascript:void(0)">未结清</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="form-inline row T-sum-area">\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <colgroup>\r\n            <col style="width: 30%;">\r\n            <col style="width: 15%;">\r\n            <col style="width: 15%;">\r\n            <col style="width: 15%;">\r\n            <col style="width: 25%;">\r\n        </colgroup>\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>对方单位</th>\r\n                <th>应收金额</th>\r\n                <th>已收金额</th>\r\n                <th>未收金额</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small class="T-sumItem">没有查询到相关记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});