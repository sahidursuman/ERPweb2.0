/*TMODJS:{"debug":true,"version":37,"md5":"6263038bf265afde0654f5fac420da84"}*/
define(function(require) {
    return require("../../../template")("financial/payRequest/view/listHeader", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), searchParam = $data.searchParam, $escape = $utils.$escape, $out = "";
            return $out += '<div class="row T-search-area"> <form class="form-inline" role="form" onsubmit="return false"> <div class="form-group mar-r-10"> <label>业务类别 </label> <select name="T-business-type" class="T-business-type"> <option value="" ', 
            $line = 6, searchParam.type || ($out += "selected", $line = 6), $out += '>全部</option> <option value="3" ', 
            $line = 7, 3 == searchParam.type && ($out += "selected", $line = 7), $out += '>餐厅</option> <option value="4" ', 
            $line = 8, 4 == searchParam.type && ($out += "selected", $line = 8), $out += '>酒店</option> <option value="2" ', 
            $line = 9, 2 == searchParam.type && ($out += "selected", $line = 9), $out += '>车队</option> <option value="5" ', 
            $line = 10, 5 == searchParam.type && ($out += "selected", $line = 10), $out += '>景区</option> <option value="12" ', 
            $line = 11, 12 == searchParam.type && ($out += "selected", $line = 11), $out += '>保险</option> <option value="8" ', 
            $line = 12, 8 == searchParam.type && ($out += "selected", $line = 12), $out += '>票务</option> <option value="7" ', 
            $line = 13, 7 == searchParam.type && ($out += "selected", $line = 13), $out += '>自费</option> <option value="10" ', 
            $line = 14, 10 == searchParam.type && ($out += "selected", $line = 14), $out += '>其它</option> </select> </div> <div class="form-group mar-r-10"> <label>账务类别 </label> <input type="text" class="form-control T-accountType" style="width: 180px;" maxlength="100" value="', 
            $line = 19, $out += $escape(searchParam.accountType), $out += '"> </div> <div class="form-group input-daterange mar-r-10"> <label>账期 </label> <input type="text" class="form-control date-picker T-startTime" style="width:100px;" value="', 
            $line = 23, $out += $escape(searchParam.startTime), $out += '"> <label>&nbsp;至&nbsp;</label> <input type="text" class="form-control date-picker T-endTime" style="width:100px;" value="', 
            $line = 25, $out += $escape(searchParam.endTime), $out += '"> </div> <div class="form-group mar-r-10"> <label>对方单位 </label> <input type="text" class="form-control T-unitName" style="width: 180px;" maxlength="100" value="', 
            $line = 29, $out += $escape(searchParam.unitName), $out += '"> </div> <div class="form-group mar-r-10"> <label>资源信息 </label> <input type="text" class="form-control T-resourceName" style="width: 180px;" maxlength="100" value="', 
            $line = 33, $out += $escape(searchParam.resourceName), $out += '"> </div> <div class="form-group T-finance-status btn-group mar-r-10"> <label>状态 </label> <button data-value="', 
            $line = 37, $out += $escape(searchParam.accountStatus), $out += '" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 39, 0 == searchParam.accountStatus ? ($out += " 全部 ", $line = 41) : 1 == searchParam.accountStatus ? ($out += " 已结清 ", 
            $line = 43) : ($out += " 未结清 ", $line = 45), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu" style="margin-left:28px;margin-top:-3px;"> <li><a data-value="0" href="javascript:void(0)">全部</a></li> <li><a data-value="1" href="javascript:void(0)">已结清</a></li> <li><a data-value="2" href="javascript:void(0)">未结清</a></li> </ul> </div> <div class="form-group "> <button class="btn-sm search-btn T-btn-search"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> <form class="form-horizontal" role="form" onsubmit="return false" style="margin-bottom: 10px;"> <label class="control-label">预付请款金额合计：<span class="F-float F-money T-needPay"></span></label> <label class="control-label marginLeft-30">已付金额合计：<span class="T-payed F-float F-money"></span></label> <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpay T-unpayMoney F-float F-money"></span></label> </form> </div> <div class="row"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur T-tr-fixed"> <th>业务类别</th> <th>账务类别</th> <th>账期</th> <th>人数</th> <th>对方单位</th> <th>资源信息</th> <th>预计请款金额</th> <th>已付金额</th> <th>未付金额</th> <th>实际批款金额</th> <th>备注</th> <th>审核时间</th> <th>审核人</th> <th width="115">操作</th> </tr> </thead> <tbody class="T-list T-checkList"> </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small class="T-sumItem">没有查询到相关记录</small> </div> <div class="col-xs-6"> <label class="control-label pull-right" style="line-height:2.2em;margin-right:20px;"> <input type="checkbox" class="ace pull-right T-checkAll"> <span class="lbl"></span>全选 </label> <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right"> </div> </div> </div> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary T-saveCheck"> <i class="ace-icon fa fa-check-circle"></i>确认对账 </button> </div> </form> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row T-search-area">\r\n    <form class="form-inline" role="form" onsubmit="return false">\r\n        <div class="form-group mar-r-10">\r\n            <label>业务类别 </label>\r\n            <select name="T-business-type" class="T-business-type">\r\n                <option value="" {{ if !searchParam.type}}selected{{/if}}>全部</option>\r\n                <option value="3" {{ if searchParam.type == 3}}selected{{/if}}>餐厅</option>\r\n                <option value="4" {{ if searchParam.type == 4}}selected{{/if}}>酒店</option>\r\n                <option value="2" {{ if searchParam.type == 2}}selected{{/if}}>车队</option>\r\n                <option value="5" {{ if searchParam.type == 5}}selected{{/if}}>景区</option>\r\n                <option value="12" {{ if searchParam.type == 12}}selected{{/if}}>保险</option>\r\n                <option value="8" {{ if searchParam.type == 8}}selected{{/if}}>票务</option>                \r\n                <option value="7" {{ if searchParam.type == 7}}selected{{/if}}>自费</option>                \r\n                <option value="10" {{ if searchParam.type == 10}}selected{{/if}}>其它</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>账务类别 </label>\r\n            <input type="text" class="form-control T-accountType" style="width: 180px;" maxlength="100" value="{{searchParam.accountType}}">\r\n        </div>\r\n        <div class="form-group input-daterange mar-r-10">\r\n            <label>账期 </label>\r\n            <input type="text" class="form-control date-picker T-startTime" style="width:100px;" value="{{searchParam.startTime}}">\r\n            <label>&nbsp;至&nbsp;</label>\r\n            <input type="text" class="form-control date-picker T-endTime" style="width:100px;" value="{{searchParam.endTime}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>对方单位 </label>\r\n            <input type="text" class="form-control T-unitName" style="width: 180px;" maxlength="100" value="{{searchParam.unitName}}">\r\n        </div>\r\n        <div class="form-group mar-r-10">\r\n            <label>资源信息 </label>\r\n            <input type="text" class="form-control T-resourceName" style="width: 180px;" maxlength="100" value="{{searchParam.resourceName}}">\r\n        </div>\r\n        <div class="form-group T-finance-status btn-group mar-r-10">\r\n            <label>状态 </label>\r\n            <button data-value="{{searchParam.accountStatus}}" data-toggle="dropdown" class="T-select-status btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n            <span>\r\n                {{if searchParam.accountStatus == 0}}\r\n                    全部\r\n                {{else if searchParam.accountStatus == 1}}\r\n                    已结清\r\n                {{else}}\r\n                    未结清\r\n                {{/if}}\r\n            </span>\r\n            <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu" style="margin-left:28px;margin-top:-3px;">\r\n                <li><a data-value="0" href="javascript:void(0)">全部</a></li>\r\n                <li><a data-value="1" href="javascript:void(0)">已结清</a></li>\r\n                <li><a data-value="2" href="javascript:void(0)">未结清</a></li>\r\n            </ul>\r\n        </div>\r\n        <div class="form-group ">\r\n            <button class="btn-sm search-btn T-btn-search">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n    </form>\r\n    <form class="form-horizontal" role="form" onsubmit="return false" style="margin-bottom: 10px;">\r\n        <label class="control-label">预付请款金额合计：<span class="F-float F-money T-needPay"></span></label>\r\n        <label class="control-label marginLeft-30">已付金额合计：<span class="T-payed F-float F-money"></span></label>\r\n        <label class="control-label marginLeft-30">未付金额合计：<span class="T-unpay T-unpayMoney F-float F-money"></span></label>\r\n    </form>\r\n</div>\r\n\r\n<div class="row">\r\n    <table class="table table-striped table-bordered table-hover">\r\n        <thead>\r\n            <tr class="bg-blur T-tr-fixed">\r\n                <th>业务类别</th>\r\n                <th>账务类别</th>\r\n                <th>账期</th>\r\n                <th>人数</th>\r\n                <th>对方单位</th>\r\n                <th>资源信息</th>\r\n                <th>预计请款金额</th>\r\n                <th>已付金额</th>\r\n                <th>未付金额</th>\r\n                <th>实际批款金额</th>\r\n                <th>备注</th>\r\n                <th>审核时间</th>\r\n                <th>审核人</th>\r\n                <th width="115">操作</th>\r\n            </tr>\r\n        </thead>\r\n        <tbody class="T-list T-checkList">\r\n            \r\n        </tbody>\r\n    </table>\r\n    <div class="row pageMode">\r\n        <div class="col-xs-6">\r\n            <small class="T-sumItem">没有查询到相关记录</small>\r\n        </div>\r\n        <div class="col-xs-6">\r\n            <label class="control-label pull-right" style="line-height:2.2em;margin-right:20px;">\r\n              <input type="checkbox" class="ace pull-right T-checkAll">\r\n              <span class="lbl"></span>全选\r\n            </label>\r\n            <div class="dataTables_paginate paging_simple_numbers T-pagenation pull-right">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <form class="form-horizontal" role="form" onsubmit="return false">\r\n        <div class="form-group" style="text-align: center;">\r\n            <button class="btn btn-xs btn-primary T-saveCheck">\r\n                <i class="ace-icon fa fa-check-circle"></i>确认对账\r\n            </button>\r\n        </div>\r\n    </form>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});