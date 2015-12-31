/*TMODJS:{"debug":true,"version":536,"md5":"2fe06e8e77fde097f2d21f2264d23152"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, searchParam = $data.searchParam, $escape = $utils.$escape, statistics = $data.statistics, $out = "";
            return $out += '<div class="search-area T-touristGroupSearchForm clearfix globalAdd"> <div class="form-horizontal T-search-area" > <div class="col-sm-2 tourist-partnerAid"> <select class="T-choosePorB col-sm-3"> <option value=\'0\' ', 
            $line = 5, 0 == searchParam.type && ($out += 'selected="selected"', $line = 5), 
            $out += ">全部</option> <option value='1' ", $line = 6, 1 == searchParam.type && ($out += 'selected="selected"', 
            $line = 6), $out += ">组团社</option> <option value='2' ", $line = 7, 2 == searchParam.type && ($out += 'selected="selected"', 
            $line = 7), $out += '>业务部</option> </select> <input type="text" class="col-sm-8 T-choosePAB marginLeft-Right7" placeholder="全部来源" style="float: right;', 
            $line = 9, 0 != searchParam.type && ($out += "display: none", $line = 9), $out += '" readonly="readonly" /> <input type="text" class="col-sm-8 T-choosePartnerAgency marginLeft-Right7 T-PorB" placeholder="来源" name="fromPartnerAgencyName" style="float: right;', 
            $line = 10, (1 != searchParam.type || null == searchParam.type) && ($out += "display: none", 
            $line = 10), $out += '" value="', $line = 10, "" == searchParam.fromPartnerAgencyName ? ($out += "全部", 
            $line = 10) : ($line = 10, $out += $escape(searchParam.fromPartnerAgencyName), $line = 10), 
            $out += '" /> <input type="text" class="col-sm-8 T-chooseBussinessGroup marginLeft-Right7 T-PorB" placeholder="来源" name="fromBussinessGroupName" style="float: right;', 
            $line = 11, (2 != searchParam.type || null == searchParam.type) && ($out += "display: none;", 
            $line = 11), $out += '" value="', $line = 11, "" == searchParam.fromBussinessGroupName ? ($out += "全部", 
            $line = 11) : ($line = 11, $out += $escape(searchParam.fromBussinessGroupName), 
            $line = 11), $out += '" /> <input type="hidden" name="fromPartnerAgencyId" value="', 
            $line = 12, $out += $escape(searchParam.fromPartnerAgencyId), $out += '"> <input type="hidden" name="fromBussinessGroupId" value="', 
            $line = 13, $out += $escape(searchParam.fromBussinessGroupId), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right lineRoad-tourist">线路:</label> <div class="col-sm-1 marginLeft-Right7"> <input type="text" class="col-sm-12 T-chooseLineProduct tourist-LineProduct" placeholder="线路产品" name="lineProductName" value="', 
            $line = 17, $out += $escape(searchParam.lineProductName), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 18, $out += $escape(searchParam.lineProductId), $out += '"> </div> <label class="pull-left text-right control-label no-padding-right margin-left60">出游时间:</label> <div class="col-sm-1 marginLeft-Right7"> <div class="input-group"> <input class="col-xs-12 datepicker width110" name="startTime" value="', 
            $line = 23, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right margin-left60">录入人:</label> <div class="col-sm-1 marginLeft-Right7"> <input type="text" class="col-xs-12 T-creatorUserChoose tourist-userChoose" placeholder="录入人" name="creatorName" value="', 
            $line = 31, $out += $escape(searchParam.creatorName), $out += '"/> <input type="hidden" name="creatorId" value="', 
            $line = 32, $out += $escape(searchParam.creatorId), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">录入日期:</label> <div class="col-sm-1 marginLeft-Right7"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker width110" name="createTimeStart" value="', 
            $line = 37, searchParam.createTimeStart ? ($line = 37, $out += $escape($helpers.dateFormat(searchParam.createTimeStart, "yyyy-MM-dd")), 
            $line = 37) : $line = 37, $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right marginLeftTourist-30">--</label> <div class="col-sm-1"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker width110" name="createTimeEnd" value="', 
            $line = 46, searchParam.createTimeEnd ? ($line = 46, $out += $escape($helpers.dateFormat(searchParam.createTimeEnd, "yyyy-MM-dd")), 
            $line = 46) : $line = 46, $out += '"type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <div class="tourist-newline"> <label class="pull-left text-right control-label no-padding-right">针对客源:</label> <div class="col-sm-1 marginLeft-Right7 rangeTime"> <select name="customerType" class="col-xs-12"> <option value="" ', 
            $line = 56, "" == searchParam.customerType && ($out += 'selected="selected" ', $line = 56), 
            $out += '>全部</option> <option value="0" ', $line = 57, "0" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 57), $out += '>散客</option> <option value="1" ', $line = 58, "1" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 58), $out += '>团体</option> </select> </div> <label class="pull-left text-right control-label no-padding-right margin-left33">状态:</label> <div class="pull-left btn-group btn-status btn-touristStatus T-select-status"> <button data-value="', 
            $line = 63, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 65, null == searchParam.status || "" == searchParam.status ? ($out += " 全部 ", 
            $line = 67) : 0 == searchParam.status ? ($out += " 已发团 ", $line = 69) : 1 == searchParam.status ? ($out += " 未分团 ", 
            $line = 71) : 2 == searchParam.status ? ($out += " 已分团 ", $line = 73) : 3 == searchParam.status ? ($out += " 已转客 ", 
            $line = 75) : 5 == searchParam.status && ($out += " 已分段 ", $line = 77), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">已发团</a> </li> <li> <a data-value="1" href="javascript:void(0)">未分团</a> </li> <li> <a data-value="2" href="javascript:void(0)">已分团</a> </li> <li> <a data-value="3" href="javascript:void(0)">已外转</a> </li> <li> <a data-value="5" href="javascript:void(0)">已分段</a> </li> </ul> </div> <div class="pull-left Touristsearch-btn"> <button class=" btn-sm T-touristGroupList-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="col-sm-1 pull-left timeStartMore" style="margin-left: 5px"> <button class="btn btn-sm btn-success T-touristGroup-add R-right" data-right="1120002"> <i class="ace-icon fa fa-plus"></i> 新增小组 </button> </div> </div> <div style="clear: both;height: 0px;line-height: 0px;"></div> </div> <div style="clear: both;margin-top:20px;border-top:1px dotted #ccc;padding-top:15px;"> <div style="clear: both;height: 0px;line-height: 0px;"></div> </div> <div class="form-horizontal T-countData"> <label class="control-label pull-left" name="statistics-count">人数合计：<span class="allPerson">', 
            $line = 119, $out += $escape(statistics.adultCount), $out += "大", $line = 119, $out += $escape(statistics.childCount), 
            $out += '小</span></label> <label class="control-label col-sm-2" name="statistics-needPay">应收款合计：<span class="needIncome">', 
            $line = 120, $out += $escape($helpers.toFixed(statistics.needPay)), $out += '元</span></label> <label class="control-label col-sm-2" name="statistics-payed">已收款合计：<span class="payedMoney">', 
            $line = 121, $out += $escape($helpers.toFixed(statistics.payedMoney)), $out += '元</span></label> <label class="control-label col-sm-2" name="statistics-currentNeedPay">现收款合计：<span class="currentNeedPay">', 
            $line = 122, $out += $escape($helpers.toFixed(statistics.currentNeedPay)), $out += '元</span></label> <label class="control-label col-sm-2" name="statistics-unIncome">未收款合计：<span class="unIncome">', 
            $line = 123, $out += $escape($helpers.toFixed(statistics.unIncomeMoney)), $out += '元</span></label> </div> </div> <div id="touristGroup-listMain" class="col-sm-12 clearfix"> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area T-touristGroupSearchForm clearfix globalAdd">\r\n    <div class="form-horizontal T-search-area" >\r\n        <div class="col-sm-2 tourist-partnerAid">\r\n            <select class="T-choosePorB col-sm-3">\r\n                <option value=\'0\' {{if searchParam.type == 0}}selected="selected"{{/if}}>全部</option>\r\n                <option value=\'1\' {{if searchParam.type == 1}}selected="selected"{{/if}}>组团社</option>\r\n                <option value=\'2\' {{if searchParam.type == 2}}selected="selected"{{/if}}>业务部</option>\r\n            </select>\r\n            <input type="text" class="col-sm-8 T-choosePAB marginLeft-Right7" placeholder="全部来源" style="float: right;{{if searchParam.type != 0}}display: none{{/if}}" readonly="readonly" />\r\n            <input type="text" class="col-sm-8 T-choosePartnerAgency marginLeft-Right7 T-PorB" placeholder="来源" name="fromPartnerAgencyName" style="float: right;{{if searchParam.type != 1 || searchParam.type == null}}display: none{{/if}}" value="{{if searchParam.fromPartnerAgencyName==\'\'}}全部{{else}}{{searchParam.fromPartnerAgencyName}}{{/if}}" />\r\n            <input type="text" class="col-sm-8 T-chooseBussinessGroup marginLeft-Right7 T-PorB" placeholder="来源" name="fromBussinessGroupName" style="float: right;{{if searchParam.type != 2 || searchParam.type == null}}display: none;{{/if}}" value="{{if searchParam.fromBussinessGroupName == ""}}全部{{else}}{{searchParam.fromBussinessGroupName}}{{/if}}" />\r\n            <input type="hidden" name="fromPartnerAgencyId" value="{{searchParam.fromPartnerAgencyId}}">\r\n            <input type="hidden" name="fromBussinessGroupId" value="{{searchParam.fromBussinessGroupId}}" />\r\n        </div> \r\n        <label class="pull-left text-right control-label no-padding-right lineRoad-tourist">线路:</label>\r\n        <div class="col-sm-1 marginLeft-Right7">\r\n            <input type="text" class="col-sm-12 T-chooseLineProduct tourist-LineProduct" placeholder="线路产品" name="lineProductName" value="{{searchParam.lineProductName}}" />\r\n            <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}">\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right margin-left60">出游时间:</label>\r\n        <div class="col-sm-1 marginLeft-Right7">\r\n            <div class="input-group">\r\n                <input class="col-xs-12 datepicker width110" name="startTime" value="{{searchParam.startTime}}" type="text" />\r\n                <span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n            </div>\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right margin-left60">录入人:</label>\r\n        <div class="col-sm-1 marginLeft-Right7">\r\n            <input type="text" class="col-xs-12 T-creatorUserChoose tourist-userChoose" placeholder="录入人" name="creatorName" value="{{searchParam.creatorName}}"/>\r\n            <input type="hidden" name="creatorId" value="{{searchParam.creatorId}}" />\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right">录入日期:</label>\r\n        <div class="col-sm-1 marginLeft-Right7">\r\n            <div class="input-group col-sm-12">\r\n                <input class="col-sm-12 datepicker width110" name="createTimeStart" value="{{if !!searchParam.createTimeStart}}{{searchParam.createTimeStart  | dateFormat: \'yyyy-MM-dd\'}}{{else}}{{/if}}" type="text" />\r\n                <span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n            </div>\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right marginLeftTourist-30">--</label>\r\n        <div class="col-sm-1">\r\n            <div class="input-group col-sm-12">\r\n                <input class="col-sm-12 datepicker width110" name="createTimeEnd" value="{{if !!searchParam.createTimeEnd}}{{searchParam.createTimeEnd | dateFormat: \'yyyy-MM-dd\'}}{{else}}{{/if}}"type="text" />\r\n                <span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n            </div>\r\n        </div>\r\n        <div class="tourist-newline">\r\n        <label class="pull-left text-right control-label no-padding-right">针对客源:</label>\r\n        <div class="col-sm-1 marginLeft-Right7 rangeTime">\r\n            <select name="customerType" class="col-xs-12">\r\n                <option value="" {{if searchParam.customerType=="" }}selected="selected" {{/if}}>全部</option>\r\n                <option value="0" {{if searchParam.customerType=="0" }}selected="selected" {{/if}}>散客</option>\r\n                <option value="1" {{if searchParam.customerType=="1" }}selected="selected" {{/if}}>团体</option>\r\n            </select>\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right margin-left33">状态:</label>\r\n        <div class="pull-left btn-group btn-status btn-touristStatus T-select-status">\r\n            <button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n				   {{if searchParam.status == null || searchParam.status == ""}}\r\n						全部\r\n					{{else if searchParam.status==0 }}\r\n						已发团\r\n					{{else if searchParam.status==1 }}\r\n						未分团\r\n					{{else if searchParam.status==2 }}\r\n						已分团\r\n					{{else if searchParam.status==3 }}\r\n						已转客\r\n					{{else if searchParam.status==5 }}\r\n						已分段\r\n					{{/if}}\r\n				</span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu">\r\n                <li>\r\n                    <a data-value="" href="javascript:void(0)">全部</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="0" href="javascript:void(0)">已发团</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="1" href="javascript:void(0)">未分团</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="2" href="javascript:void(0)">已分团</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="3" href="javascript:void(0)">已外转</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="5" href="javascript:void(0)">已分段</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class="pull-left Touristsearch-btn">\r\n            <button class=" btn-sm  T-touristGroupList-search search-btn">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n        <div class="col-sm-1 pull-left timeStartMore" style="margin-left: 5px">\r\n            <button class="btn btn-sm btn-success T-touristGroup-add R-right" data-right="1120002">\r\n                <i class="ace-icon fa fa-plus"></i> 新增小组\r\n            </button>\r\n        </div>\r\n        </div>\r\n        <div style="clear: both;height: 0px;line-height: 0px;"></div>\r\n    </div>\r\n    <div style="clear: both;margin-top:20px;border-top:1px dotted #ccc;padding-top:15px;">\r\n        <div style="clear: both;height: 0px;line-height: 0px;"></div>\r\n    </div>\r\n    <div class="form-horizontal T-countData">\r\n        <label class="control-label pull-left" name="statistics-count">人数合计：<span class="allPerson">{{statistics.adultCount}}大{{statistics.childCount}}小</span></label>\r\n        <label class="control-label col-sm-2" name="statistics-needPay">应收款合计：<span class="needIncome">{{statistics.needPay | toFixed}}元</span></label>\r\n        <label class="control-label col-sm-2" name="statistics-payed">已收款合计：<span class="payedMoney">{{statistics.payedMoney | toFixed}}元</span></label>\r\n        <label class="control-label col-sm-2" name="statistics-currentNeedPay">现收款合计：<span class="currentNeedPay">{{statistics.currentNeedPay | toFixed}}元</span></label>\r\n        <label class="control-label col-sm-2" name="statistics-unIncome">未收款合计：<span class="unIncome">{{statistics.unIncomeMoney | toFixed}}元</span></label>\r\n    </div>\r\n</div>\r\n<div id="touristGroup-listMain" class="col-sm-12 clearfix">\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});