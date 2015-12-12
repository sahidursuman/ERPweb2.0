/*TMODJS:{"debug":true,"version":7,"md5":"065a08e4f661d6d8e559108a84e4e967"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/search", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, receivableTypes = $data.receivableTypes, $escape = ($data.rs, 
            $data.$index, $utils.$escape), incomeOrPayTypes = $data.incomeOrPayTypes, searchParam = $data.searchParam, costTypes = $data.costTypes, businessTypes = $data.businessTypes, payTypeList = $data.payTypeList, total = ($data.index, 
            $data.total), $out = "";
            return $out += '<form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>对方单位：</label> <input type="text" class="form-control T-search-unit" style="width: 220px;" value=""> </div> <div class="form-group marginLeft-30"> <label>收支类别：</label> <select class="form-control T-search-category" style="width: 120px;"> <option value="">全部</option> ', 
            $line = 10, $each(receivableTypes, function(rs) {
                $out += ' <option value="', $line = 11, $out += $escape(rs.id), $out += '">', $line = 11, 
                $out += $escape(rs.name), $out += "</option> ", $line = 12;
            }), $out += ' </select> </div> <div class="form-group marginLeft-30"> <label>收支大类：</label> <select class="form-control T-search-type" style="width: 120px;"> <option value="">全部</option> ', 
            $line = 19, $each(incomeOrPayTypes, function(rs) {
                $out += ' <option value="', $line = 20, $out += $escape(rs.id), $out += '">', $line = 20, 
                $out += $escape(rs.name), $out += "</option> ", $line = 21;
            }), $out += ' </select> </div> <div class="form-group marginLeft-30"> <label>开始日期</label> <input type="text" class="form-control datepicker T-search-start-time" value="', 
            $line = 26, $out += $escape(searchParam.startTime), $out += '" style="width: 100px;text-align: center;"> </div> <div class="form-group marginLeft-30"> <label>结束日期</label> <input type="text" class="form-control datepicker T-search-end-time" value="', 
            $line = 30, $out += $escape(searchParam.endTime), $out += '" style="width: 100px;text-align: center;"> </div> <div class="form-group marginLeft-30"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group"> <label>费用类别：</label> <select class="form-control T-search-cost" style="width: 220px;"> <option value="">全部</option> ', 
            $line = 43, $each(costTypes, function(rs) {
                $out += ' <option value="', $line = 44, $out += $escape(rs.id), $out += '">', $line = 44, 
                $out += $escape(rs.name), $out += "</option> ", $line = 45;
            }), $out += ' </select> </div> <div class="form-group marginLeft-30"> <label>发生业务：</label> <select class="form-control T-search-business" style="width: 120px;"> <option value="">全部</option> ', 
            $line = 52, $each(businessTypes, function(rs) {
                $out += ' <option value="', $line = 53, $out += $escape(rs.id), $out += '">', $line = 53, 
                $out += $escape(rs.name), $out += "</option> ", $line = 54;
            }), $out += ' </select> </div> <div class="form-group marginLeft-30"> <label>支付方式：</label> <select class="form-control T-search-payment" style="width: 120px;"> <option value="">全部</option> ', 
            $line = 61, $each(payTypeList, function(rs, index) {
                $out += ' <option value="', $line = 62, $out += $escape(index), $out += '">', $line = 62, 
                $out += $escape(rs), $out += "</option> ", $line = 63;
            }), $out += ' </select> </div> <div class="form-group marginLeft-30"> <label>收款合计：</label> <label class="T-incomeMoney">', 
            $line = 68, $out += $escape(total.incomeMoney), $out += '</label> </div> <div class="form-group marginLeft-30"> <label>付款合计：</label> <label class="T-payMoney">', 
            $line = 72, $out += $escape(total.payMoney), $out += "</label> </div> </form>", 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<form class="form-inline" role="form" onsubmit="return false">\r\n    <div class="form-group">\r\n        <label>对方单位：</label>\r\n        <input type="text" class="form-control T-search-unit" style="width: 220px;" value="">\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>收支类别：</label>\r\n        <select class="form-control T-search-category" style="width: 120px;">\r\n            <option value="">全部</option>\r\n            {{each receivableTypes as rs}}\r\n            <option value="{{rs.id}}">{{rs.name}}</option>\r\n            {{/each}}\r\n        </select>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>收支大类：</label>\r\n        <select class="form-control T-search-type" style="width: 120px;">\r\n            <option value="">全部</option>\r\n            {{each incomeOrPayTypes as rs}}\r\n            <option value="{{rs.id}}">{{rs.name}}</option>\r\n            {{/each}}\r\n        </select>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>开始日期</label>\r\n        <input type="text" class="form-control datepicker T-search-start-time" value="{{searchParam.startTime}}" style="width: 100px;text-align: center;">\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>结束日期</label>\r\n        <input type="text" class="form-control datepicker T-search-end-time" value="{{searchParam.endTime}}" style="width: 100px;text-align: center;">\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <button class="btn-sm search-btn T-btn-search">\r\n            <i class="ace-icon fa fa-search"></i> 搜索 \r\n        </button>\r\n    </div>\r\n</form>\r\n<form class="form-inline" role="form" onsubmit="return false">\r\n    <div class="form-group">\r\n        <label>费用类别：</label>\r\n        <select class="form-control T-search-cost" style="width: 220px;">\r\n            <option value="">全部</option>\r\n            {{each costTypes as rs}}\r\n            <option value="{{rs.id}}">{{rs.name}}</option>\r\n            {{/each}}\r\n        </select>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>发生业务：</label>\r\n        <select class="form-control T-search-business" style="width: 120px;">\r\n            <option value="">全部</option>\r\n            {{each businessTypes as rs}}\r\n            <option value="{{rs.id}}">{{rs.name}}</option>\r\n            {{/each}}\r\n        </select>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>支付方式：</label>\r\n        <select class="form-control T-search-payment" style="width: 120px;">\r\n            <option value="">全部</option>\r\n            {{each payTypeList as rs index}}\r\n            <option value="{{index}}">{{rs}}</option>\r\n            {{/each}}\r\n        </select>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>收款合计：</label>\r\n        <label class="T-incomeMoney">{{total.incomeMoney}}</label>\r\n    </div>\r\n    <div class="form-group marginLeft-30">\r\n        <label>付款合计：</label>\r\n        <label class="T-payMoney">{{total.payMoney}}</label>\r\n    </div>\r\n</form>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});