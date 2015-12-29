/*TMODJS:{"debug":true,"version":80,"md5":"3c88d5942d7132302eb8f701cf388a03"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/search", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, receivableTypes = $data.receivableTypes, payTypeList = ($data.rs, 
            $data.$index, $data.payTypeList), total = ($data.index, $data.total), $out = "";
            return $out += '<form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>记账日期：</label> <input type="text" class="form-control datepicker T-search-start-time" value="', 
            $line = 4, $out += $escape(searchParam.startTime), $out += '" style="width: 80px;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-end-time" value="', 
            $line = 6, $out += $escape(searchParam.endTime), $out += '" style="width: 80px;"> </div> <div class="form-group marginLeft-30"> <label class="label-inline-60">业务类别：</label> <select name="fin-type" id="fin-type"> <option value="">全部</option> <option value="0">收入</option> <option value="1">支出</option> <option value="2">转账</option> </select> </div> <div class="form-group marginLeft-30"> <label>对方单位：</label> <input type="text" class="form-control T-resourceName" name="resourceName" value="', 
            $line = 19, $out += $escape(searchParam.resourceName), $out += '" placeholder="对方单位" style="width: 100px;"> </div> <div class="form-group marginLeft-30"> <label>主营业务收支类别：</label> <select class="form-control T-search-category" style="width: 100px;"> <option value="">全部</option> ', 
            $line = 25, $each(receivableTypes, function(rs) {
                $out += ' <option value="', $line = 26, $out += $escape(rs.id), $out += '">', $line = 26, 
                $out += $escape(rs.name), $out += "</option> ", $line = 27;
            }), $out += ' </select> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group marginLeft-30"> <button class="btn btn-sm btn-success T-btn-add"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> </form> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>会计科目：</label> <select class="form-control T-search-category" style="width:88px"> <option value="">全部</option> </select> </div> <div class="form-group marginLeft-30"> <label>凭证编号：</label> <input type="text" class="form-control T-resourceName" name="resourceName" value="', 
            $line = 51, $out += $escape(searchParam.resourceName), $out += '" placeholder="凭证编号" style="width: 150px;"> </div> <div class="form-group marginLeft-30"> <label>支付方式：</label> <select class="form-control T-search-payment" style="width: 100px;"> <option value="">全部</option> ', 
            $line = 57, $each(payTypeList, function(rs, index) {
                $out += ' <option value="', $line = 58, $out += $escape(index), $out += '">', $line = 58, 
                $out += $escape(rs), $out += "</option> ", $line = 59;
            }), $out += ' </select> </div> <div class="form-group marginLeft-30"> <label>银行账号：</label> <input type="text" class="form-control T-resourceName" name="resourceName" value="', 
            $line = 64, $out += $escape(searchParam.resourceName), $out += '" style="width: 150px;"> </div> <div class="form-group marginLeft-30"> <label>收款合计：</label> <label class="T-incomeMoney">', 
            $line = 68, $out += $escape(total.incomeMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>付款合计：</label> <label class="T-payMoney">', 
            $line = 72, $out += $escape(total.payMoney), $out += "</label> </div> </form>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-inline" role="form" onsubmit="return false">\r\n    <div class="form-group">\r\n        <label>记账日期：</label>\r\n        <input type="text" class="form-control datepicker T-search-start-time" value="{{searchParam.startTime}}" style="width: 80px;">\r\n        <label>&nbsp;至&nbsp;</label>\r\n        <input type="text" class="form-control datepicker T-search-end-time" value="{{searchParam.endTime}}" style="width: 80px;">\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label class="label-inline-60">业务类别：</label>\r\n        <select name="fin-type" id="fin-type">\r\n            <option value="">全部</option>\r\n            <option value="0">收入</option>\r\n            <option value="1">支出</option>\r\n            <option value="2">转账</option>\r\n        </select>\r\n    </div> \r\n    <div class="form-group marginLeft-30">\r\n        <label>对方单位：</label>\r\n        <input type="text" class="form-control T-resourceName" name="resourceName" value="{{searchParam.resourceName}}" placeholder="对方单位" style="width: 100px;">\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>主营业务收支类别：</label>\r\n        <select class="form-control T-search-category" style="width: 100px;">\r\n            <option value="">全部</option>\r\n            {{each receivableTypes as rs}}\r\n            <option value="{{rs.id}}">{{rs.name}}</option>\r\n            {{/each}}                                                   \r\n        </select>\r\n    </div>\r\n    \r\n    <div class="form-group marginLeft-30">\r\n        <button class="btn-sm search-btn T-btn-search">\r\n            <i class="ace-icon fa fa-search"></i> 搜索 \r\n        </button>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <button class="btn btn-sm btn-success T-btn-add">\r\n            <i class="ace-icon fa fa-plus"></i> 新增\r\n        </button>\r\n    </div>\r\n</form>\r\n<form class="form-inline" role="form" onsubmit="return false">\r\n    <div class="form-group">\r\n        <label>会计科目：</label>\r\n        <select class="form-control T-search-category" style="width:88px">\r\n            <option value="">全部</option>\r\n        </select>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>凭证编号：</label>\r\n        <input type="text" class="form-control T-resourceName" name="resourceName" value="{{searchParam.resourceName}}" placeholder="凭证编号" style="width: 150px;">\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>支付方式：</label>\r\n        <select class="form-control T-search-payment" style="width: 100px;">\r\n            <option value="">全部</option>\r\n            {{each payTypeList as rs index}}\r\n            <option value="{{index}}">{{rs}}</option>\r\n            {{/each}}\r\n        </select>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>银行账号：</label>\r\n        <input type="text" class="form-control T-resourceName" name="resourceName" value="{{searchParam.resourceName}}" style="width: 150px;">\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>收款合计：</label>\r\n        <label class="T-incomeMoney">{{total.incomeMoney}}</label>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>付款合计：</label>\r\n        <label class="T-payMoney">{{total.payMoney}}</label>\r\n    </div>\r\n</form>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});