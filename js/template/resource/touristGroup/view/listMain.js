/*TMODJS:{"debug":true,"version":495,"md5":"1178352b526cdd5675c805429de44de6"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, partnerAgencyList = $data.partnerAgencyList, $escape = ($data.partnerAgency, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, lineProductList = $data.lineProductList, userList = ($data.lineProduct, 
            $data.userList), statistics = ($data.user, $data.statistics), $out = "";
            return $out += '<div class="search-area touristGroupSearchForm clearfix globalAdd"> <div class="form-horizontal" >  <div class="col-sm-2 tourist-partnerAid"> <!-- <select name="partnerAgencyId" class="col-sm-12"> <option value=\'\'>来源</option> ', 
            $line = 7, $each(partnerAgencyList, function(partnerAgency) {
                $out += ' <option value="', $line = 8, $out += $escape(partnerAgency.id), $out += '" ', 
                $line = 8, searchParam.partnerAgencyId == partnerAgency.id && ($out += 'selected="selected"', 
                $line = 8), $out += " >", $line = 8, $out += $escape(partnerAgency.travelAgencyName), 
                $out += "</option> ", $line = 9;
            }), $out += " </select> --> <select class=\"choosePorB col-sm-3\"> <option value='0' ", 
            $line = 12, 0 == searchParam.type && ($out += 'selected="selected"', $line = 12), 
            $out += ">全部</option> <option value='1' ", $line = 13, 1 == searchParam.type && ($out += 'selected="selected"', 
            $line = 13), $out += ">组团社</option> <option value='2' ", $line = 14, 2 == searchParam.type && ($out += 'selected="selected"', 
            $line = 14), $out += '>业务部</option> </select> <input type="text" class="col-sm-8 choosePAB marginLeft-Right7" placeholder="全部来源" style="float: right;', 
            $line = 16, 0 != searchParam.type && ($out += "display: none", $line = 16), $out += '" readonly="readonly" /> <input type="text" class="col-sm-8 choosePartnerAgency marginLeft-Right7 T-PorB" placeholder="来源" name="fromPartnerAgencyName" style="float: right;', 
            $line = 17, (1 != searchParam.type || null == searchParam.type) && ($out += "display: none", 
            $line = 17), $out += '" value="', $line = 17, "" == searchParam.fromPartnerAgencyName ? ($out += "全部", 
            $line = 17) : ($line = 17, $out += $escape(searchParam.fromPartnerAgencyName), $line = 17), 
            $out += '" /> <input type="text" class="col-sm-8 chooseBussinessGroup marginLeft-Right7 T-PorB" placeholder="来源" name="fromBussinessGroupName" style="float: right;', 
            $line = 18, (2 != searchParam.type || null == searchParam.type) && ($out += "display: none;", 
            $line = 18), $out += '" value="', $line = 18, "" == searchParam.fromBussinessGroupName ? ($out += "全部", 
            $line = 18) : ($line = 18, $out += $escape(searchParam.fromBussinessGroupName), 
            $line = 18), $out += '" /> <input type="hidden" name="fromPartnerAgencyId" value="', 
            $line = 19, $out += $escape(searchParam.fromPartnerAgencyId), $out += '"> <input type="hidden" name="fromBussinessGroupId" value="', 
            $line = 20, $out += $escape(searchParam.fromBussinessGroupId), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right lineRoad-tourist">线路:</label> <div class="col-sm-1 marginLeft-Right7">   <!--', 
            $line = 26, $each(lineProductList, function(lineProduct) {
                $out += '--> <!--<option value="', $line = 27, $out += $escape(lineProduct.partnerAgency), 
                $out += '" ', $line = 27, searchParam.lineProductId == lineProduct.partnerAgency && ($out += 'selected="selected" ', 
                $line = 27), $out += ">", $line = 27, $out += $escape(lineProduct.name), $out += "</option>--> <!--", 
                $line = 28;
            }), $out += '-->  <input type="text" class="col-sm-12 chooseLineProduct tourist-LineProduct" placeholder="线路产品" name="lineProductName" value="', 
            $line = 31, $out += $escape(searchParam.lineProductName), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 32, $out += $escape(searchParam.lineProductId), $out += '"> </div> <label class="pull-left text-right control-label no-padding-right margin-left60">出游时间:</label> <div class="col-sm-1 marginLeft-Right7"> <div class="input-group"> <input class="col-xs-12 datepicker width110" name="startTime" value="', 
            $line = 37, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right margin-left60">录入人:</label> <div class="col-sm-1 marginLeft-Right7">   <!--', 
            $line = 47, $each(userList, function(user) {
                $out += '--> <!--<option value="', $line = 48, $out += $escape(user.id), $out += '" ', 
                $line = 48, searchParam.userId == user.id && ($out += 'selected="selected" ', $line = 48), 
                $out += ">", $line = 48, $out += $escape(user.realName), $out += "</option>--> <!--", 
                $line = 49;
            }), $out += '-->  <input type="text" class="col-xs-12 creatorUserChoose tourist-userChoose" placeholder="录入人" name="creatorName" value="', 
            $line = 51, $out += $escape(searchParam.creatorName), $out += '"/> <input type="hidden" name="creatorId" value="', 
            $line = 52, $out += $escape(searchParam.creatorId), $out += '" /> </div> <label class="pull-left text-right control-label no-padding-right">录入日期:</label> <div class="col-sm-1 marginLeft-Right7"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker width110" name="createTimeStart" value="', 
            $line = 57, searchParam.createTimeStart ? ($line = 57, $out += $escape($helpers.dateFormat(searchParam.createTimeStart, "yyyy-MM-dd")), 
            $line = 57) : $line = 57, $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right marginLeftTourist-30">--</label> <div class="col-sm-1"> <div class="input-group col-sm-12"> <input class="col-sm-12 datepicker width110" name="createTimeEnd" value="', 
            $line = 66, searchParam.createTimeEnd ? ($line = 66, $out += $escape($helpers.dateFormat(searchParam.createTimeEnd, "yyyy-MM-dd")), 
            $line = 66) : $line = 66, $out += '"type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <div class="tourist-newline"> <label class="pull-left text-right control-label no-padding-right">针对客源:</label> <div class="col-sm-1 marginLeft-Right7 rangeTime"> <select name="customerType" class="col-xs-12"> <option value="" ', 
            $line = 76, "" == searchParam.customerType && ($out += 'selected="selected" ', $line = 76), 
            $out += '>全部</option> <option value="0" ', $line = 77, "0" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 77), $out += '>散客</option> <option value="1" ', $line = 78, "1" == searchParam.customerType && ($out += 'selected="selected" ', 
            $line = 78), $out += '>团体</option> </select> </div> <label class="pull-left text-right control-label no-padding-right margin-left33">状态:</label> <div class="pull-left btn-group btn-status btn-touristStatus"> <button data-value="', 
            $line = 83, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 85, null == searchParam.status || "" == searchParam.status ? ($out += " 全部 ", 
            $line = 87) : 0 == searchParam.status ? ($out += " 已发团 ", $line = 89) : 1 == searchParam.status ? ($out += " 未分团 ", 
            $line = 91) : 2 == searchParam.status ? ($out += " 已分团 ", $line = 93) : 3 == searchParam.status ? ($out += " 已转客 ", 
            $line = 95) : 5 == searchParam.status && ($out += " 已分段 ", $line = 97), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">已发团</a> </li> <li> <a data-value="1" href="javascript:void(0)">未分团</a> </li> <li> <a data-value="2" href="javascript:void(0)">已分团</a> </li> <li> <a data-value="3" href="javascript:void(0)">已转客</a> </li> <li> <a data-value="5" href="javascript:void(0)">已分段</a> </li> </ul> </div> <div class="pull-left Touristsearch-btn"> <button class=" btn-sm btn-touristGroupList-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="col-sm-1 pull-left timeStartMore" style="margin-left: 5px"> <button class="btn btn-sm btn-success btn-touristGroup-add R-right" data-right="1120002"> <i class="ace-icon fa fa-plus"></i> 新增小组 </button> </div> </div> <div style="clear: both;height: 0px;line-height: 0px;"></div> </div> <div style="clear: both;margin-top:20px;border-top:1px dotted #ccc;padding-top:15px;"> <div style="clear: both;height: 0px;line-height: 0px;"></div> </div> <div class="form-horizontal"> <label class="control-label pull-left" name="statistics-count">人数合计：', 
            $line = 139, $out += $escape(statistics.adultCount), $out += "大", $line = 139, $out += $escape(statistics.childCount), 
            $out += '小</label> <label class="control-label col-sm-2" name="statistics-needPay">应收款合计：', 
            $line = 140, $out += $escape($helpers.toFixed(statistics.needPay)), $out += '元</label> <label class="control-label col-sm-2" name="statistics-payed">已收款合计：', 
            $line = 141, $out += $escape($helpers.toFixed(statistics.payedMoney)), $out += '元</label> <label class="control-label col-sm-2" name="statistics-currentNeedPay">现收款合计：', 
            $line = 142, $out += $escape($helpers.toFixed(statistics.currentNeedPay)), $out += '元</label> <label class="control-label col-sm-2" name="statistics-unIncome">未收款合计：', 
            $line = 143, $out += $escape($helpers.toFixed(statistics.unIncomeMoney)), $out += '元</label> </div> </div> <div id="touristGroup-listMain" class="col-sm-12 clearfix"> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area touristGroupSearchForm clearfix globalAdd">\r\n    <div class="form-horizontal" >\r\n        <!-- <label class="pull-left text-right control-label no-padding-right">来源:</label> -->\r\n        <div class="col-sm-2 tourist-partnerAid">\r\n            <!-- <select name="partnerAgencyId" class="col-sm-12">\r\n				<option value=\'\'>来源</option>\r\n				{{each partnerAgencyList as partnerAgency}}\r\n				<option value="{{partnerAgency.id}}" {{if searchParam.partnerAgencyId == partnerAgency.id}}selected="selected"{{/if}} >{{partnerAgency.travelAgencyName}}</option>\r\n				{{/each}}\r\n			</select> -->\r\n            <select class="choosePorB col-sm-3">\r\n                <option value=\'0\' {{if searchParam.type == 0}}selected="selected"{{/if}}>全部</option>\r\n                <option value=\'1\' {{if searchParam.type == 1}}selected="selected"{{/if}}>组团社</option>\r\n                <option value=\'2\' {{if searchParam.type == 2}}selected="selected"{{/if}}>业务部</option>\r\n            </select>\r\n            <input type="text" class="col-sm-8 choosePAB marginLeft-Right7" placeholder="全部来源" style="float: right;{{if searchParam.type != 0}}display: none{{/if}}" readonly="readonly" />\r\n            <input type="text" class="col-sm-8 choosePartnerAgency marginLeft-Right7 T-PorB" placeholder="来源" name="fromPartnerAgencyName" style="float: right;{{if searchParam.type != 1 || searchParam.type == null}}display: none{{/if}}" value="{{if searchParam.fromPartnerAgencyName==\'\'}}全部{{else}}{{searchParam.fromPartnerAgencyName}}{{/if}}" />\r\n            <input type="text" class="col-sm-8 chooseBussinessGroup marginLeft-Right7 T-PorB" placeholder="来源" name="fromBussinessGroupName" style="float: right;{{if searchParam.type != 2 || searchParam.type == null}}display: none;{{/if}}" value="{{if searchParam.fromBussinessGroupName == ""}}全部{{else}}{{searchParam.fromBussinessGroupName}}{{/if}}" />\r\n            <input type="hidden" name="fromPartnerAgencyId" value="{{searchParam.fromPartnerAgencyId}}">\r\n            <input type="hidden" name="fromBussinessGroupId" value="{{searchParam.fromBussinessGroupId}}" />\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right lineRoad-tourist">线路:</label>\r\n        <div class="col-sm-1 marginLeft-Right7">\r\n            <!--<select name="lineProductId" class="col-sm-12">-->\r\n                <!--<option value=\'\'>全部</option>-->\r\n                <!--{{each lineProductList as lineProduct}}-->\r\n                <!--<option value="{{lineProduct.partnerAgency}}" {{if searchParam.lineProductId == lineProduct.partnerAgency}}selected="selected" {{/if}}>{{lineProduct.name}}</option>-->\r\n                <!--{{/each}}-->\r\n            <!--</select>-->\r\n\r\n            <input type="text" class="col-sm-12 chooseLineProduct tourist-LineProduct" placeholder="线路产品" name="lineProductName" value="{{searchParam.lineProductName}}" />\r\n            <input type="hidden" name="lineProductId" value="{{searchParam.lineProductId}}">\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right margin-left60">出游时间:</label>\r\n        <div class="col-sm-1 marginLeft-Right7">\r\n            <div class="input-group">\r\n                <input class="col-xs-12 datepicker width110" name="startTime" value="{{searchParam.startTime}}" type="text" />\r\n                <span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n            </div>\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right margin-left60">录入人:</label>\r\n        <div class="col-sm-1 marginLeft-Right7">\r\n            <!--<select name="userId" class="col-sm-12">-->\r\n                <!--<option value=\'\'>全部</option>-->\r\n                <!--{{each userList as user}}-->\r\n                <!--<option value="{{user.id}}" {{if searchParam.userId== user.id}}selected="selected" {{/if}}>{{user.realName}}</option>-->\r\n                <!--{{/each}}-->\r\n            <!--</select>-->\r\n            <input type="text" class="col-xs-12 creatorUserChoose tourist-userChoose" placeholder="录入人" name="creatorName" value="{{searchParam.creatorName}}"/>\r\n            <input type="hidden" name="creatorId" value="{{searchParam.creatorId}}" />\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right">录入日期:</label>\r\n        <div class="col-sm-1 marginLeft-Right7">\r\n            <div class="input-group col-sm-12">\r\n                <input class="col-sm-12 datepicker width110" name="createTimeStart" value="{{if !!searchParam.createTimeStart}}{{searchParam.createTimeStart  | dateFormat: \'yyyy-MM-dd\'}}{{else}}{{/if}}" type="text" />\r\n                <span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n            </div>\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right marginLeftTourist-30">--</label>\r\n        <div class="col-sm-1">\r\n            <div class="input-group col-sm-12">\r\n                <input class="col-sm-12 datepicker width110" name="createTimeEnd" value="{{if !!searchParam.createTimeEnd}}{{searchParam.createTimeEnd | dateFormat: \'yyyy-MM-dd\'}}{{else}}{{/if}}"type="text" />\r\n                <span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n            </div>\r\n        </div>\r\n        <div class="tourist-newline">\r\n        <label class="pull-left text-right control-label no-padding-right">针对客源:</label>\r\n        <div class="col-sm-1 marginLeft-Right7 rangeTime">\r\n            <select name="customerType" class="col-xs-12">\r\n                <option value="" {{if searchParam.customerType=="" }}selected="selected" {{/if}}>全部</option>\r\n                <option value="0" {{if searchParam.customerType=="0" }}selected="selected" {{/if}}>散客</option>\r\n                <option value="1" {{if searchParam.customerType=="1" }}selected="selected" {{/if}}>团体</option>\r\n            </select>\r\n        </div>\r\n        <label class="pull-left text-right control-label no-padding-right margin-left33">状态:</label>\r\n        <div class="pull-left btn-group btn-status btn-touristStatus">\r\n            <button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n                <span>\r\n				   {{if searchParam.status == null || searchParam.status == ""}}\r\n						全部\r\n					{{else if searchParam.status==0 }}\r\n						已发团\r\n					{{else if searchParam.status==1 }}\r\n						未分团\r\n					{{else if searchParam.status==2 }}\r\n						已分团\r\n					{{else if searchParam.status==3 }}\r\n						已转客\r\n					{{else if searchParam.status==5 }}\r\n						已分段\r\n					{{/if}}\r\n				</span>\r\n                <i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n            </button>\r\n            <ul class="dropdown-menu">\r\n                <li>\r\n                    <a data-value="" href="javascript:void(0)">全部</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="0" href="javascript:void(0)">已发团</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="1" href="javascript:void(0)">未分团</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="2" href="javascript:void(0)">已分团</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="3" href="javascript:void(0)">已转客</a>\r\n                </li>\r\n                <li>\r\n                    <a data-value="5" href="javascript:void(0)">已分段</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <div class="pull-left Touristsearch-btn">\r\n            <button class=" btn-sm  btn-touristGroupList-search search-btn">\r\n                <i class="ace-icon fa fa-search"></i> 搜索\r\n            </button>\r\n        </div>\r\n        <div class="col-sm-1 pull-left timeStartMore" style="margin-left: 5px">\r\n            <button class="btn btn-sm btn-success btn-touristGroup-add R-right" data-right="1120002">\r\n                <i class="ace-icon fa fa-plus"></i> 新增小组\r\n            </button>\r\n        </div>\r\n        </div>\r\n        <div style="clear: both;height: 0px;line-height: 0px;"></div>\r\n    </div>\r\n    <div style="clear: both;margin-top:20px;border-top:1px dotted #ccc;padding-top:15px;">\r\n        <div style="clear: both;height: 0px;line-height: 0px;"></div>\r\n    </div>\r\n    <div class="form-horizontal">\r\n        <label class="control-label pull-left" name="statistics-count">人数合计：{{statistics.adultCount}}大{{statistics.childCount}}小</label>\r\n        <label class="control-label col-sm-2" name="statistics-needPay">应收款合计：{{statistics.needPay | toFixed}}元</label>\r\n        <label class="control-label col-sm-2" name="statistics-payed">已收款合计：{{statistics.payedMoney | toFixed}}元</label>\r\n        <label class="control-label col-sm-2" name="statistics-currentNeedPay">现收款合计：{{statistics.currentNeedPay | toFixed}}元</label>\r\n        <label class="control-label col-sm-2" name="statistics-unIncome">未收款合计：{{statistics.unIncomeMoney | toFixed}}元</label>\r\n    </div>\r\n</div>\r\n<div id="touristGroup-listMain" class="col-sm-12 clearfix">\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});