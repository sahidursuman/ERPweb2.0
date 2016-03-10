/*TMODJS:{"debug":true,"version":232,"md5":"b9807805fe41715271faa87aee333fc8"}*/
define(function(require) {
    return require("../../../template")("financial/PaymentDetails/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, receivableTypes = $data.receivableTypes, total = ($data.rs, 
            $data.$index, $data.total), $out = "";
            return $out += '<div class="row T-search-area guideAdd"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>记账日期</label> <input type="text" class="form-control datepicker T-search-time T-search-start-time" value="', 
            $line = 5, $out += $escape(searchParam.startTime), $out += '" style="width: 80px;"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control datepicker T-search-time T-search-end-time" value="', 
            $line = 7, $out += $escape(searchParam.endTime), $out += '" style="width: 80px;"> </div> <div class="form-group mar-r-10"> <label class="label-inline-60">业务类别</label> <select name="moneyType" class="T-moneyType"> <option value="">全部</option> <option value="0">收入</option> <option value="1">支出</option> </select> </div> <div class="form-group mar-r-10"> <label>对方单位</label> <input type="text" class="form-control T-resourceName" name="resourceName" value="', 
            $line = 19, $out += $escape(searchParam.resourceName), $out += '" placeholder="对方单位" style="width: 100px;"> </div> <div class="form-group mar-r-10"> <label>主营业务收支类别</label> <select class="form-control T-search-category" style="width: 100px;"> <option value="">全部</option> ', 
            $line = 25, $each(receivableTypes, function(rs) {
                $out += ' <option value="', $line = 26, $out += $escape(rs.id), $out += '">', $line = 26, 
                $out += $escape(rs.name), $out += "</option> ", $line = 27;
            }), $out += ' </select> </div> <div class="form-group mar-r-10"> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="form-group"> <button class="btn btn-sm btn-success T-btn-add"> <i class="ace-icon fa fa-plus"></i> 新增 </button> </div> </form> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>会计科目</label> <select class="form-control T-search-subject" style="width:88px"> <option value="">全部</option> </select> </div> <div class="form-group mar-r-10"> <label>凭证编号</label> <input type="text" class="form-control T-search-voucher" name="voucher" value="', 
            $line = 50, $out += $escape(searchParam.resourceName), $out += '" placeholder="凭证编号" style="width: 150px;"> </div> <div class="form-group mar-r-10"> <label>支付方式</label> <select class="form-control T-search-payment" style="width: 100px;"> <option value="">全部</option> <option value="0" ', 
            $line = 57, 0 == searchParam.payType && ($out += 'selected="selected"', $line = 57), 
            $out += '>现金</option> <option value="1" ', $line = 58, 1 == searchParam.payType && ($out += 'selected="selected"', 
            $line = 58), $out += '>银行转账</option> <option value="3" ', $line = 59, 3 == searchParam.payType && ($out += 'selected="selected"', 
            $line = 59), $out += '>支票</option> <option value="4" ', $line = 60, 4 == searchParam.payType && ($out += 'selected="selected"', 
            $line = 60), $out += '>其他</option> <option value="5" ', $line = 61, 5 == searchParam.payType && ($out += 'selected="selected"', 
            $line = 61), $out += '>网付</option> </select> </div> <div class="form-group mar-r-10 T-cash-area hidden"> <label class="control-label">现金账号</label> <label class="control-label"> <input type="text" name="cash-number" ', 
            $line = 67, 0 == searchParam.payType && ($out += 'value="', $line = 67, $out += $escape(searchParam.resourceName), 
            $out += '"', $line = 67), $out += ' class="money" style="width:300px;"> <input type="hidden" name="cash-id" ', 
            $line = 68, 0 == searchParam.payType && ($out += 'value="', $line = 68, $out += $escape(searchParam.bankId), 
            $out += '"', $line = 68), $out += '/> </label> </div> <div class="form-group mar-r-10 hidden"> <label>银行账号</label> <input type="text" class="form-control T-card-number" name="card-number" ', 
            $line = 73, 0 != searchParam.payType && ($out += 'value="', $line = 73, $out += $escape(searchParam.resourceName), 
            $out += '"', $line = 73), $out += ' style="width: 300px;"> <input type="hidden" name="card-id" class="T-bankId" ', 
            $line = 74, 0 != searchParam.payType && ($out += 'value="', $line = 74, $out += $escape(searchParam.bankId), 
            $out += '"', $line = 74), $out += '> <input type="hidden" name="beginningBalance" class="T-beginningBalance" value="', 
            $line = 75, $out += $escape(searchParam.beginningBalance), $out += '"> <input type="hidden" name="tally-date" class="datepicker" value="', 
            $line = 76, $out += $escape(searchParam.bankId), $out += '"> </div> <div class="form-group mar-r-10"> <label>收款合计：</label> <label class="T-incomeMoney F-float F-money">', 
            $line = 80, $out += $escape(total.incomeMoney), $out += '</label> </div> <div class="form-group mar-r-10"> <label>付款合计：</label> <label class="T-payMoney F-float F-money">', 
            $line = 84, $out += $escape(total.payMoney), $out += '</label> </div> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover T-showHighLight"> <thead> <tr class="bg-blur T-tr-fixed"> <th>记账日期</th> <th>业务类别</th> <th>对方单位</th> <th>主营业务收付类别</th> <th>会计科目</th> <th>凭证编号</th> <th>支付方式</th> <th>收款</th> <th>付款</th> <th>银行账号</th> <th>备注</th> <th>操作人</th> <th>操作时间</th> </tr> </thead> <tbody class="T-list"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-sumItem">没有查询到相关记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area guideAdd">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group mar-r-10">\r\n            <label>记账日期</label>\r\n            <input type="text" class="form-control datepicker T-search-time T-search-start-time" value="{{searchParam.startTime}}" style="width: 80px;">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control datepicker T-search-time T-search-end-time" value="{{searchParam.endTime}}" style="width: 80px;">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label class="label-inline-60">业务类别</label>\r\n            <select name="moneyType" class="T-moneyType">\r\n                <option value="">全部</option>\r\n                <option value="0">收入</option>\r\n                <option value="1">支出</option>\r\n            </select>\r\n        </div> \r\n        <div class="form-group mar-r-10">\r\n            <label>对方单位</label>\r\n            <input type="text" class="form-control T-resourceName" name="resourceName" value="{{searchParam.resourceName}}" placeholder="对方单位" style="width: 100px;">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>主营业务收支类别</label>\r\n            <select class="form-control T-search-category" style="width: 100px;">\r\n                <option value="">全部</option>\r\n                {{each receivableTypes as rs}}\r\n                <option value="{{rs.id}}">{{rs.name}}</option>\r\n                {{/each}}                                                   \r\n            </select>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索 \r\n            </button>\r\n        </div>\r\n        <div class="form-group">\r\n            <button class="btn btn-sm btn-success T-btn-add">\r\n                <i class="ace-icon fa fa-plus"></i> 新增\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group  mar-r-10">\r\n            <label>会计科目</label>\r\n            <select class="form-control T-search-subject" style="width:88px">\r\n                <option value="">全部</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>凭证编号</label>\r\n            <input type="text" class="form-control T-search-voucher" name="voucher" value="{{searchParam.resourceName}}" placeholder="凭证编号" style="width: 150px;">\r\n        </div>\r\n    \r\n        <div class="form-group mar-r-10">\r\n            <label>支付方式</label>\r\n            <select class="form-control T-search-payment" style="width: 100px;">\r\n                <option value="">全部</option>\r\n                <option value="0" {{if searchParam.payType == 0}}selected="selected"{{/if}}>现金</option>\r\n                <option value="1" {{if searchParam.payType == 1}}selected="selected"{{/if}}>银行转账</option>\r\n                <option value="3" {{if searchParam.payType == 3}}selected="selected"{{/if}}>支票</option>\r\n                <option value="4" {{if searchParam.payType == 4}}selected="selected"{{/if}}>其他</option>\r\n                <option value="5" {{if searchParam.payType == 5}}selected="selected"{{/if}}>网付</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group mar-r-10 T-cash-area hidden">\r\n            <label class="control-label">现金账号</label>\r\n            <label class="control-label">\r\n                <input type="text" name="cash-number" {{if searchParam.payType == 0}}value="{{searchParam.resourceName}}"{{/if}} class="money" style="width:300px;">\r\n                <input type="hidden" name="cash-id" {{if searchParam.payType == 0}}value="{{searchParam.bankId}}"{{/if}}/>\r\n            </label>\r\n        </div>\r\n        <div class="form-group mar-r-10 hidden">\r\n            <label>银行账号</label>\r\n            <input type="text" class="form-control T-card-number" name="card-number" {{if searchParam.payType != 0}}value="{{searchParam.resourceName}}"{{/if}} style="width: 300px;">\r\n            <input type="hidden" name="card-id" class="T-bankId" {{if searchParam.payType != 0}}value="{{searchParam.bankId}}"{{/if}}>\r\n            <input type="hidden" name="beginningBalance" class="T-beginningBalance" value="{{searchParam.beginningBalance}}">\r\n            <input type="hidden" name="tally-date" class="datepicker" value="{{searchParam.bankId}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>收款合计：</label>\r\n            <label class="T-incomeMoney F-float F-money">{{total.incomeMoney}}</label>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>付款合计：</label>\r\n            <label class="T-payMoney F-float F-money">{{total.payMoney}}</label>\r\n        </div>\r\n    </form>\r\n</div>\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover T-showHighLight">\r\n        <thead>\r\n            <tr class="bg-blur T-tr-fixed">\r\n                <th>记账日期</th>\r\n                <th>业务类别</th>\r\n                <th>对方单位</th>\r\n                <th>主营业务收付类别</th>\r\n                <th>会计科目</th>\r\n                <th>凭证编号</th>\r\n                <th>支付方式</th>\r\n                <th>收款</th>\r\n                <th>付款</th>\r\n                <th>银行账号</th>\r\n                <th>备注</th>\r\n                <th>操作人</th>\r\n                <th>操作时间</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list">\r\n        \r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small class="T-sumItem">没有查询到相关记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});