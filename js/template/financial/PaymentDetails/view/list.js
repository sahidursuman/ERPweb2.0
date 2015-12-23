/*TMODJS:{"debug":true,"version":49,"md5":"07be344776da6928a1e52372af6dc63d"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $out = "";
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label class="label-inline-60">收/付款：</label> <select name="fin-type" id="fin-type"> <option value="">全部</option> <option value="0">收款</option> <option value="1">付款</option> </select> </div> <div class="form-group mar-l-10"> <label>收支类别：</label> <select class="form-control T-search-category" style="width: 100px;"> <option value="">全部</option> </select> </div> <div class="form-group mar-l-10"> <label>发生业务：</label> <select class="form-control T-search-business" style="width: 100px;"> <option value="">全部</option> </select> </div> <div class="form-group mar-l-10"> <label>支付方式：</label> <select class="form-control T-search-payment" style="width: 100px;"> <option value="">全部</option> </select> </div> <div class="form-group mar-l-10"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group hidden"> <label>退款冲账：</label> <select class="form-control T-search-cost" style="width: 220px;"> <option value="">全部</option> <option value="0">是</option> <option value="1">否</option> </select> </div> <div class="form-group"> <label>对方单位：</label> <input type="text" class="form-control T-search-unit" style="width: 229px;" value=""> </div> <div class="form-group mar-l-10"> <label>开始日期：</label> <input type="text" class="form-control datepicker T-search-start-time" value="', 
            $line = 53, $out += $escape(searchParam.startTime), $out += '" style="width: 100px;text-align: center;"> </div> <div class="form-group mar-l-10"> <label>结束日期：</label> <input type="text" class="form-control datepicker T-search-end-time" value="', 
            $line = 57, $out += $escape(searchParam.endTime), $out += '" style="width: 100px;text-align: center;"> </div> <div class="form-group mar-l-10"> <label>收款合计：</label> <label class="T-incomeMoney">0</label> </div> <div class="form-group mar-l-10"> <label>付款合计：</label> <label class="T-payMoney">0</label> </div> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>对方单位</th> <th>收付类别</th> <th>发生业务</th> <th>支付方式</th> <th>收款</th> <th>付款</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> </thead> <tbody class="T-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-sumItem">没有查询到相关记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label class="label-inline-60">收/付款：</label>\r\n            <select name="fin-type" id="fin-type">\r\n                <option value="">全部</option>\r\n                <option value="0">收款</option>\r\n                <option value="1">付款</option>\r\n            </select>\r\n        </div>\r\n        \r\n        <div class="form-group mar-l-10">\r\n            <label>收支类别：</label>\r\n            <select class="form-control T-search-category" style="width: 100px;">\r\n                <option value="">全部</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group mar-l-10">\r\n            <label>发生业务：</label>\r\n            <select class="form-control T-search-business" style="width: 100px;">\r\n                <option value="">全部</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group mar-l-10">\r\n            <label>支付方式：</label>\r\n            <select class="form-control T-search-payment" style="width: 100px;">\r\n                <option value="">全部</option>\r\n            </select>\r\n        </div>\r\n\r\n\r\n        <div class="form-group mar-l-10">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n    </form>\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group hidden">\r\n            <label>退款冲账：</label>\r\n            <select class="form-control T-search-cost" style="width: 220px;">\r\n                <option value="">全部</option>\r\n                <option value="0">是</option>\r\n                <option value="1">否</option>\r\n            </select>\r\n        </div>       \r\n        <div class="form-group">\r\n            <label>对方单位：</label>\r\n            <input type="text" class="form-control T-search-unit" style="width: 229px;" value="">\r\n        </div>\r\n        <div class="form-group mar-l-10">\r\n            <label>开始日期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-time" value="{{searchParam.startTime}}" style="width: 100px;text-align: center;">\r\n        </div>\r\n        <div class="form-group mar-l-10">\r\n            <label>结束日期：</label>\r\n            <input type="text" class="form-control datepicker T-search-end-time" value="{{searchParam.endTime}}" style="width: 100px;text-align: center;">\r\n        </div>\r\n        <div class="form-group mar-l-10">\r\n            <label>收款合计：</label>\r\n            <label class="T-incomeMoney">0</label>\r\n        </div>\r\n        <div class="form-group mar-l-10">\r\n            <label>付款合计：</label>\r\n            <label class="T-payMoney">0</label>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>对方单位</th>\r\n                <th>收付类别</th>\r\n                <th>发生业务</th>\r\n                <th>支付方式</th>\r\n                <th>收款</th>\r\n                <th>付款</th>\r\n                <th>备注</th>\r\n                <th>操作人</th>\r\n                <th>操作时间</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        \r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small class="T-sumItem">没有查询到相关记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});