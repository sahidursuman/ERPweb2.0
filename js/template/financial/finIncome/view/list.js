/*TMODJS:{"debug":true,"version":20,"md5":"dff5771faa651ce9517e865b7395622b"}*/
define(function(require) {
    return require("../../../template")("financial/finIncome/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, startDate = $data.startDate, endDate = $data.endDate, $out = "";
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>业务类别：</label> <select name="T-business-type" class="T-business-type"> <option value="0">客户</option> <option value="1">内转</option> <option value="2">购物</option> <option value="3">代订</option> </select> </div> <div class="form-group marginLeft-30"> <label>对方单位：</label> <input type="text" class="form-control T-org-name" style="width: 180px;" maxlength="100"> </div> <div class="form-group input-daterange marginLeft-30"> <label>账期：</label> <input type="text" class="form-control T-datepicker T-start" value="', 
            $line = 18, $out += $escape(startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control T-datepicker T-end" value="', 
            $line = 20, $out += $escape(endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>对方单位</th> <th>应收金额</th> <th>已收金额</th> <th>未收金额</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-sumItem">没有查询到相关记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label>业务类别：</label>\r\n            <select name="T-business-type" class="T-business-type">\r\n                <option value="0">客户</option>\r\n                <option value="1">内转</option>\r\n                <option value="2">购物</option>\r\n                <option value="3">代订</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>对方单位：</label>\r\n            <input type="text" class="form-control T-org-name" style="width: 180px;"  maxlength="100">\r\n        </div>\r\n        <div class="form-group input-daterange marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control T-datepicker T-start" value="{{startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control T-datepicker T-end" value="{{endDate}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>对方单位</th>\r\n                <th>应收金额</th>\r\n                <th>已收金额</th>\r\n                <th>未收金额</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">        \r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small class="T-sumItem">没有查询到相关记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});