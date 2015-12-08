/*TMODJS:{"debug":true,"version":19,"md5":"264ab3041cde7f08f320fd0ce82b5a69"}*/
define(function(require) {
    return require("../../../template")("financial/finPay/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, startDate = $data.startDate, endDate = $data.endDate, $out = "";
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>业务类别：</label> <select name="T-business-type" class="T-business-type"> <option value="0">内转</option> <option value="1">外转</option> <option value="2">餐厅</option> <option value="3">酒店</option> <option value="4">车队</option> <option value="5">票务</option> <option value="6">景区</option> <option value="7">自费</option> <option value="8">保险</option> <option value="9">其它</option> </select> </div> <div class="form-group marginLeft-30"> <label>单位：</label> <input type="text" class="form-control T-org-name" style="width: 180px;" maxlength="100"> </div> <div class="form-group input-daterange marginLeft-30"> <label>账期：</label> <input type="text" class="form-control T-datepicker T-start" value="', 
            $line = 24, $out += $escape(startDate), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control T-datepicker T-end" value="', 
            $line = 26, $out += $escape(endDate), $out += '"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>对方单位</th> <th>应付金额</th> <th>已付金额</th> <th>未付金额</th> <th>操作</th> </tr> </thead> <tbody class="T-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-sumItem">没有查询到相关记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label>业务类别：</label>\r\n            <select name="T-business-type" class="T-business-type">\r\n                <option value="0">内转</option>\r\n                <option value="1">外转</option>\r\n                <option value="2">餐厅</option>\r\n                <option value="3">酒店</option>\r\n                <option value="4">车队</option>\r\n                <option value="5">票务</option>\r\n                <option value="6">景区</option>\r\n                <option value="7">自费</option>\r\n                <option value="8">保险</option>\r\n                <option value="9">其它</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>单位：</label>\r\n            <input type="text" class="form-control T-org-name" style="width: 180px;"  maxlength="100">\r\n        </div>\r\n        <div class="form-group input-daterange marginLeft-30">\r\n            <label>账期：</label>\r\n            <input type="text" class="form-control T-datepicker T-start" value="{{startDate}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control T-datepicker T-end" value="{{endDate}}">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>对方单位</th>\r\n                <th>应付金额</th>\r\n                <th>已付金额</th>\r\n                <th>未付金额</th>\r\n                <th>操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">        \r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small class="T-sumItem">没有查询到相关记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});