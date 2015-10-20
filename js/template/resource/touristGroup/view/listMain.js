/*TMODJS:{"debug":true,"version":101,"md5":"daf3b503fa56e952343b57095327f2ed"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, statistics = $data.statistics, $each = $utils.$each, partnerAgencyList = $data.partnerAgencyList, searchParam = ($data.partnerAgency, 
            $data.$index, $data.searchParam), lineProductList = $data.lineProductList, userList = ($data.lineProduct, 
            $data.userList), $out = ($data.user, "");
            return $out += '<div class="search-area touristGroupSearchForm clearfix globalAdd"> <div class="form-horizontal col-sm-12 clearfix" style="margin-bottom:20px;margin-left:-12px" > <label class="control-label pull-left">人数合计：', 
            $line = 4, $out += $escape(statistics.adultCount), $out += "大", $line = 4, $out += $escape(statistics.childCount), 
            $out += '小</label> <label class="control-label col-sm-2">应收款合计：', $line = 5, $out += $escape(statistics.needPay), 
            $out += '元</label> <label class="control-label col-sm-2">已收款合计：', $line = 6, $out += $escape(statistics.payedMoney), 
            $out += '元</label> <label class="control-label col-sm-2">现收款合计：', $line = 7, $out += $escape(statistics.currentNeedPay), 
            $out += '元</label> <label class="control-label col-sm-2">未收款合计：', $line = 8, $out += $escape(statistics.unIncomeMoney), 
            $out += '元</label> </div> <div class="form-horizontal" style="margin-top:20px;"> <label class="pull-left text-right control-label no-padding-right">来源:</label> <div class="col-sm-1"> <!-- <select name="partnerAgencyId" class="col-sm-12"> <option value=\'\'>来源</option> ', 
            $line = 15, $each(partnerAgencyList, function(partnerAgency) {
                $out += ' <option value="', $line = 16, $out += $escape(partnerAgency.id), $out += '" ', 
                $line = 16, searchParam.partnerAgencyId == partnerAgency.id && ($out += 'selected="selected"', 
                $line = 16), $out += " >", $line = 16, $out += $escape(partnerAgency.travelAgencyName), 
                $out += "</option> ", $line = 17;
            }), $out += ' </select> --> <input type="text" class="col-sm-12 choosePartnerAgency" placeholder="来源" name="" /> <input type="hidden" name="fromPartnerAgencyId" value=""> </div> <label class="pull-left text-right control-label no-padding-right">线路:</label> <div class="col-sm-1"> <select name="lineProductId" class="col-sm-12"> <option value=\'\'>全部</option> ', 
            $line = 26, $each(lineProductList, function(lineProduct) {
                $out += ' <option value="', $line = 27, $out += $escape(lineProduct.partnerAgency), 
                $out += '" ', $line = 27, searchParam.lineProductId == lineProduct.partnerAgency && ($out += 'selected="selected"', 
                $line = 27), $out += " >", $line = 27, $out += $escape(lineProduct.name), $out += "</option> ", 
                $line = 28;
            }), $out += ' </select> </div> <label class="pull-left text-right control-label no-padding-right">出游时间:</label> <div class="col-sm-1"> <div class="input-group"> <input class="col-xs-12 date-picker" name="startTime" value="', 
            $line = 34, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right">录入人:</label> <div class="col-sm-1"> <select name="userId" class="col-sm-12"> <option value=\'\'>全部</option> ', 
            $line = 44, $each(userList, function(user) {
                $out += ' <option value="', $line = 45, $out += $escape(user.id), $out += '" ', 
                $line = 45, searchParam.userId == user.id && ($out += 'selected="selected"', $line = 45), 
                $out += " >", $line = 45, $out += $escape(user.realName), $out += "</option> ", 
                $line = 46;
            }), $out += ' </select> </div> <label class="pull-left text-right control-label no-padding-right">录入日期:</label> <div class="col-sm-1"> <div class="input-group col-sm-12"> <input class="col-sm-12 date-picker" name="createTimeStart" value="', 
            $line = 52, $out += $escape(searchParam.createStartTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right">--</label> <div class="col-sm-1"> <div class="input-group col-sm-12"> <input class="col-sm-12 date-picker" name="createTimeEnd" value="', 
            $line = 61, $out += $escape(searchParam.createEndTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right">针对客源:</label> <div class="col-sm-1 "> <select name="customerType" class="col-xs-12"> <option value="">全部</option> <option value="0" ', 
            $line = 72, 0 == searchParam.customerType && ($out += 'selected="selected"', $line = 72), 
            $out += '>散客</option> <option value="1" ', $line = 73, 1 == searchParam.customerType && ($out += 'selected="selected"', 
            $line = 73), $out += '>团体</option> </select> </div> <label class="pull-left text-right control-label no-padding-right">状态:</label> <div class="pull-left btn-group btn-status" style="margin-left: 20px"> <button data-value="', 
            $line = 79, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 81, null == searchParam.status || "" == searchParam.status ? ($out += " 全部 ", 
            $line = 83) : 0 == searchParam.status ? ($out += " 已发团 ", $line = 85) : 1 == searchParam.status ? ($out += " 未分团 ", 
            $line = 87) : 2 == searchParam.status ? ($out += " 已分团 ", $line = 89) : 3 == searchParam.status ? ($out += " 已转客 ", 
            $line = 91) : 4 == searchParam.status ? ($out += " 已取消 ", $line = 93) : 5 == searchParam.status ? ($out += " 已拆分 ", 
            $line = 95) : 6 == searchParam.status && ($out += " 已内转 ", $line = 97), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">已发团</a> </li> <li> <a data-value="1" href="javascript:void(0)">未分团</a> </li> <li> <a data-value="2" href="javascript:void(0)">已分团</a> </li> <li> <a data-value="3" href="javascript:void(0)">已转客</a> </li> <li> <a data-value="4" href="javascript:void(0)">已取消</a> </li> <li> <a data-value="5" href="javascript:void(0)">已拆分</a> </li> <li> <a data-value="6" href="javascript:void(0)">已内转</a> </li> </ul> </div> <div class="pull-left" style="margin-left: 20px"> <button class=" btn-sm btn-touristGroupList-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="col-sm-1 pull-left" style="margin-left: 5px"> <button class="btn btn-sm btn-success btn-touristGroup-add"> <i class="ace-icon fa fa-plus"></i> 新增小组 </button> </div> <div style="clear: both;height: 0px;line-height: 0px;"></div> </div> <div style="clear: both;margin-top:20px;border-top:1px dotted #ccc;padding-top:15px;"> <div style="clear: both;height: 0px;line-height: 0px;"></div> </div> </div> <div id="touristGroup-listMain" class="col-sm-12 clearfix"> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area touristGroupSearchForm clearfix globalAdd">\r\n\r\n	<div class="form-horizontal col-sm-12 clearfix" style="margin-bottom:20px;margin-left:-12px" >\r\n		<label class="control-label pull-left">人数合计：{{statistics.adultCount}}大{{statistics.childCount}}小</label>\r\n		<label class="control-label col-sm-2">应收款合计：{{statistics.needPay}}元</label>\r\n		<label class="control-label col-sm-2">已收款合计：{{statistics.payedMoney}}元</label>\r\n		<label class="control-label col-sm-2">现收款合计：{{statistics.currentNeedPay}}元</label>\r\n		<label class="control-label col-sm-2">未收款合计：{{statistics.unIncomeMoney}}元</label>\r\n	</div>\r\n	 <div class="form-horizontal" style="margin-top:20px;">\r\n		<label class="pull-left text-right control-label no-padding-right">来源:</label>\r\n		<div class="col-sm-1">\r\n			<!-- <select name="partnerAgencyId" class="col-sm-12">\r\n				<option value=\'\'>来源</option>\r\n				{{each partnerAgencyList as partnerAgency}}\r\n				<option value="{{partnerAgency.id}}" {{if searchParam.partnerAgencyId == partnerAgency.id}}selected="selected"{{/if}} >{{partnerAgency.travelAgencyName}}</option>\r\n				{{/each}}\r\n			</select> -->\r\n			<input type="text" class="col-sm-12 choosePartnerAgency" placeholder="来源" name="" />\r\n			<input type="hidden" name="fromPartnerAgencyId" value="">\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">线路:</label>\r\n		<div class="col-sm-1">\r\n			<select name="lineProductId" class="col-sm-12">\r\n				<option value=\'\'>全部</option>\r\n				{{each lineProductList as lineProduct}}\r\n				<option value="{{lineProduct.partnerAgency}}" {{if searchParam.lineProductId == lineProduct.partnerAgency}}selected="selected"{{/if}} >{{lineProduct.name}}</option>\r\n				{{/each}}\r\n			</select>   \r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">出游时间:</label>\r\n		<div class="col-sm-1">\r\n			<div class="input-group">\r\n				<input class="col-xs-12 date-picker" name="startTime" value="{{searchParam.startTime}}" type="text" />	\r\n				<span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n			</div>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">录入人:</label>\r\n		<div class="col-sm-1">\r\n			<select name="userId" class="col-sm-12">\r\n				<option value=\'\'>全部</option>\r\n				{{each userList as user}}\r\n				<option value="{{user.id}}" {{if searchParam.userId == user.id}}selected="selected"{{/if}} >{{user.realName}}</option>\r\n				{{/each}}\r\n			</select>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">录入日期:</label>\r\n		<div class="col-sm-1">\r\n			<div class="input-group col-sm-12">\r\n				<input class="col-sm-12 date-picker" name="createTimeStart" value="{{searchParam.createStartTime}}" type="text" />	\r\n				<span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n			</div>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">--</label>\r\n		<div class="col-sm-1">\r\n			<div class="input-group col-sm-12">\r\n				<input class="col-sm-12 date-picker" name="createTimeEnd" value="{{searchParam.createEndTime}}" type="text" />	\r\n				<span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n			</div>\r\n		</div>\r\n\r\n		<label class="pull-left text-right control-label no-padding-right">针对客源:</label>\r\n		<div class="col-sm-1 ">\r\n			<select name="customerType" class="col-xs-12">   \r\n				<option value="">全部</option>   \r\n				<option value="0" {{if searchParam.customerType == 0}}selected="selected"{{/if}}>散客</option>\r\n				<option value="1" {{if searchParam.customerType == 1}}selected="selected"{{/if}}>团体</option>     \r\n			</select> \r\n		</div>\r\n\r\n		<label class="pull-left text-right control-label no-padding-right">状态:</label>\r\n		<div class="pull-left btn-group btn-status" style="margin-left: 20px">\r\n			<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n				<span>\r\n				   {{if searchParam.status == null || searchParam.status == ""}}\r\n						全部\r\n					{{else if searchParam.status==0 }}\r\n						已发团\r\n					{{else if searchParam.status==1 }}\r\n						未分团\r\n					{{else if searchParam.status==2 }}\r\n						已分团\r\n					{{else if searchParam.status==3 }}\r\n						已转客\r\n					{{else if searchParam.status==4 }}\r\n						已取消\r\n					{{else if searchParam.status==5 }}\r\n						已拆分\r\n					{{else if searchParam.status==6 }}\r\n						已内转\r\n					{{/if}}\r\n				</span>\r\n				<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n			</button>\r\n			<ul class="dropdown-menu">\r\n				<li>\r\n					<a data-value="" href="javascript:void(0)">全部</a>\r\n				</li>\r\n				<li>\r\n					<a data-value="0" href="javascript:void(0)">已发团</a>\r\n				</li>\r\n				<li>\r\n					<a data-value="1" href="javascript:void(0)">未分团</a>\r\n				</li>\r\n				<li>\r\n					<a data-value="2" href="javascript:void(0)">已分团</a>\r\n				</li>\r\n				<li>\r\n					<a data-value="3" href="javascript:void(0)">已转客</a>\r\n				</li>\r\n				<li>\r\n					<a data-value="4" href="javascript:void(0)">已取消</a>\r\n				</li>\r\n				<li>\r\n					<a data-value="5" href="javascript:void(0)">已拆分</a>\r\n				</li>\r\n				<li>\r\n					<a data-value="6" href="javascript:void(0)">已内转</a>\r\n				</li>\r\n			</ul>\r\n		</div>\r\n		<div class="pull-left" style="margin-left: 20px">\r\n			 <button class=" btn-sm  btn-touristGroupList-search search-btn">\r\n				 <i class="ace-icon fa fa-search"></i>\r\n				 搜索\r\n			 </button>\r\n		 </div>\r\n		 <div class="col-sm-1 pull-left" style="margin-left: 5px">\r\n			 <button class="btn btn-sm btn-success btn-touristGroup-add">   \r\n				 <i class="ace-icon fa fa-plus"></i>\r\n				 新增小组  \r\n			 </button>\r\n		 </div>\r\n		<div style="clear: both;height: 0px;line-height: 0px;"></div>\r\n	</div>\r\n	<div style="clear: both;margin-top:20px;border-top:1px dotted #ccc;padding-top:15px;">\r\n	<div style="clear: both;height: 0px;line-height: 0px;"></div>\r\n</div>\r\n</div>\r\n\r\n<div  id="touristGroup-listMain" class="col-sm-12 clearfix">\r\n	\r\n\r\n</div>\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});