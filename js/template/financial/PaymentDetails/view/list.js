/*TMODJS:{"debug":true,"version":127,"md5":"b85946fc4e6e722c5423942ce9b80c14"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $out = "";
            return $out += '<div class="row T-search-area guideAdd"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>记账日期：</label> <input type="text" class="form-control datepicker T-search-start-time" value="', 
            $line = 5, $out += $escape(searchParam.startTime), $out += '" style="width: 80px;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-time" value="', 
            $line = 7, $out += $escape(searchParam.endTime), $out += '" style="width: 80px;"> </div> <div class="form-group marginLeft-30"> <label class="label-inline-60">业务类别：</label> <select name="fin-type" id="fin-type"> <option value="">全部</option> <option value="0">收入</option> <option value="1">支出</option> <option value="2">转账</option> </select> </div> <div class="form-group marginLeft-30"> <label>对方单位：</label> <input type="text" class="form-control T-resourceName" name="resourceName" value="', 
            $line = 20, $out += $escape(searchParam.resourceName), $out += '" placeholder="对方单位" style="width: 100px;"> </div> <div class="form-group marginLeft-30"> <label>主营业务收支类别：</label> <select class="form-control T-search-category" style="width: 100px;"> <option value="">全部</option> </select> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group marginLeft-30"> <button class="btn btn-sm btn-success T-btn-add" style="height:24px;"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> </form> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>会计科目：</label> <select class="form-control T-search-category" style="width:88px"> <option value="">全部</option> </select> </div> <div class="form-group marginLeft-30"> <label>凭证编号：</label> <input type="text" class="form-control T-resourceName" name="resourceName" value="', 
            $line = 49, $out += $escape(searchParam.resourceName), $out += '" placeholder="凭证编号" style="width: 150px;"> </div> <div class="form-group marginLeft-30"> <label>支付方式：</label> <select class="form-control T-search-payment" style="width: 100px;"> <option value="">全部</option> <option value="">现金</option> <option value="">银行转账</option> <option value="">支票</option> <option value="">其他</option> </select> </div> <div class="form-group marginLeft-30"> <label>银行账号：</label> <input type="text" class="form-control T-resourceName" name="resourceName" value="', 
            $line = 63, $out += $escape(searchParam.resourceName), $out += '" style="width: 150px;"> </div> <div class="form-group marginLeft-30"> <label>收款合计：</label> <label class="T-incomeMoney">0</label> </div> <div class="form-group marginLeft-30"> <label>付款合计：</label> <label class="T-payMoney">0</label> </div> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur"> <th>记账日期</th> <th>业务类别</th> <th>对方单位</th> <th>主营业务收付类别</th> <th>会计科目</th> <th>凭证编号</th> <th>支付方式</th> <th>收款</th> <th>付款</th> <th>银行账号</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> </thead> <tbody class="T-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-sumItem">没有查询到相关记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area guideAdd">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label>记账日期：</label>\r\n            <input type="text" class="form-control datepicker T-search-start-time" value="{{searchParam.startTime}}" style="width: 80px;">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-end-time" value="{{searchParam.endTime}}" style="width: 80px;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label class="label-inline-60">业务类别：</label>\r\n            <select name="fin-type" id="fin-type">\r\n                <option value="">全部</option>\r\n                <option value="0">收入</option>\r\n                <option value="1">支出</option>\r\n                <option value="2">转账</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>对方单位：</label>\r\n            <input type="text" class="form-control T-resourceName" name="resourceName" value="{{searchParam.resourceName}}" placeholder="对方单位" style="width: 100px;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>主营业务收支类别：</label>\r\n            <select class="form-control T-search-category" style="width: 100px;">\r\n                <option value="">全部</option>\r\n            </select>\r\n        </div>\r\n        \r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <button class="btn btn-sm btn-success T-btn-add" style="height:24px;">\r\n                <i class="ace-icon fa fa-plus"></i> 新增\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group">\r\n            <label>会计科目：</label>\r\n            <select class="form-control T-search-category" style="width:88px">\r\n                <option value="">全部</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>凭证编号：</label>\r\n            <input type="text" class="form-control T-resourceName" name="resourceName" value="{{searchParam.resourceName}}" placeholder="凭证编号" style="width: 150px;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>支付方式：</label>\r\n            <select class="form-control T-search-payment" style="width: 100px;">\r\n                <option value="">全部</option>\r\n                <option value="">现金</option>\r\n                <option value="">银行转账</option>\r\n                <option value="">支票</option>\r\n                <option value="">其他</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>银行账号：</label>\r\n            <input type="text" class="form-control T-resourceName" name="resourceName" value="{{searchParam.resourceName}}" style="width: 150px;">\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>收款合计：</label>\r\n            <label class="T-incomeMoney">0</label>\r\n        </div>\r\n        <div class="form-group marginLeft-30">\r\n            <label>付款合计：</label>\r\n            <label class="T-payMoney">0</label>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur">\r\n                <th>记账日期</th>\r\n                <th>业务类别</th>\r\n                <th>对方单位</th>\r\n                <th>主营业务收付类别</th>\r\n                <th>会计科目</th>\r\n                <th>凭证编号</th>\r\n                <th>支付方式</th>\r\n                <th>收款</th>\r\n                <th>付款</th>\r\n                <th>银行账号</th>\r\n                <th>备注</th>\r\n                <th>操作人</th>\r\n                <th>操作时间</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        \r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small class="T-sumItem">没有查询到相关记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});