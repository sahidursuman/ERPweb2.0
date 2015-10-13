/*TMODJS:{"debug":true,"version":384,"md5":"728fd3eb8dac6334886903816d1b94b4"}*/
define(function(require) {
    return require("../../../template")("resource/touristGroup/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, partnerAgencyList = $data.partnerAgencyList, $escape = ($data.partnerAgency, 
            $data.$index, $utils.$escape), searchParam = $data.searchParam, lineProductList = $data.lineProductList, userList = ($data.lineProduct, 
            $data.userList), statistics = ($data.user, $data.statistics), touristGroupList = $data.touristGroupList, recordSize = ($data.touristGroup, 
            $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="search-area touristGroupSearchForm"> <div class="form-horizontal"> <label class="pull-left text-right control-label no-padding-right">来源:</label> <div class="col-sm-1"> <select name="partnerAgencyId" class="col-sm-12"> <option value=\'\'>来源</option> ', 
            $line = 7, $each(partnerAgencyList, function(partnerAgency) {
                $out += ' <option value="', $line = 8, $out += $escape(partnerAgency.id), $out += '" ', 
                $line = 8, searchParam.partnerAgencyId == partnerAgency.id && ($out += 'selected="selected"', 
                $line = 8), $out += " >", $line = 8, $out += $escape(partnerAgency.travelAgencyName), 
                $out += "</option> ", $line = 9;
            }), $out += ' </select> </div> <label class="pull-left text-right control-label no-padding-right">线路:</label> <div class="col-sm-1"> <select name="lineProductId" class="col-sm-12"> <option value=\'\'>全部</option> ', 
            $line = 16, $each(lineProductList, function(lineProduct) {
                $out += ' <option value="', $line = 17, $out += $escape(lineProduct.partnerAgency), 
                $out += '" ', $line = 17, searchParam.lineProductId == lineProduct.partnerAgency && ($out += 'selected="selected"', 
                $line = 17), $out += " >", $line = 17, $out += $escape(lineProduct.name), $out += "</option> ", 
                $line = 18;
            }), $out += ' </select> </div> <label class="pull-left text-right control-label no-padding-right">出游时间:</label> <div class="col-sm-1"> <div class="input-group"> <input class="col-xs-12 date-picker" name="startTime" value="', 
            $line = 24, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right">录入人:</label> <div class="col-sm-1"> <select name="userId" class="col-sm-12"> <option value=\'\'>全部</option> ', 
            $line = 34, $each(userList, function(user) {
                $out += ' <option value="', $line = 35, $out += $escape(user.id), $out += '" ', 
                $line = 35, searchParam.userId == user.id && ($out += 'selected="selected"', $line = 35), 
                $out += " >", $line = 35, $out += $escape(user.realName), $out += "</option> ", 
                $line = 36;
            }), $out += ' </select> </div> <label class="pull-left text-right control-label no-padding-right">录入日期:</label> <div class="col-sm-1"> <div class="input-group col-sm-12"> <input class="col-sm-12 date-picker" name="createTimeStart" value="', 
            $line = 42, $out += $escape(searchParam.createStartTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right">--</label> <div class="col-sm-1"> <div class="input-group col-sm-12"> <input class="col-sm-12 date-picker" name="createTimeEnd" value="', 
            $line = 51, $out += $escape(searchParam.createEndTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <label class="pull-left text-right control-label no-padding-right">针对客源:</label> <div class="col-sm-1 "> <select name="customerType" class="col-xs-12"> <option value="">全部</option> <option value="0" ', 
            $line = 62, 0 == searchParam.customerType && ($out += 'selected="selected"', $line = 62), 
            $out += '>散客</option> <option value="1" ', $line = 63, 1 == searchParam.customerType && ($out += 'selected="selected"', 
            $line = 63), $out += '>团体</option> </select> </div> <label class="pull-left text-right control-label no-padding-right">状态:</label> <div class="col-sm-1 "> <select name="status" class="col-xs-12"> <option selected="selected" value="">全部</option> <option value="0" ', 
            $line = 71, 0 == searchParam.status && ($out += 'selected="selected"', $line = 71), 
            $out += '>已发团</option> <option value="1" ', $line = 72, 1 == searchParam.status && ($out += 'selected="selected"', 
            $line = 72), $out += '>未分团</option> <option value="2" ', $line = 73, 2 == searchParam.status && ($out += 'selected="selected"', 
            $line = 73), $out += '>已分团</option> <option value="3" ', $line = 74, 3 == searchParam.status && ($out += 'selected="selected"', 
            $line = 74), $out += '>已转客</option> </select> </div> <div class="col-sm-1" style="width:100px;"> <button class=" btn-sm btn-touristGroupList-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <div class="col-sm-1 pull-left" style="width:25px;"> <button class="btn btn-sm btn-success btn-touristGroup-add"> <i class="ace-icon fa fa-plus"></i> 新增小组 </button> </div> <div style="clear: both;height: 0px;line-height: 0px;"></div> </div> <div style="clear: both;margin-top:20px;border-top:1px dotted #ccc;padding-top:15px;"> <div class="form-horizontal" > <label class="control-label pull-left">人数合计:', 
            $line = 96, $out += $escape(statistics.adultCount), $out += "大", $line = 96, $out += $escape(statistics.childCount), 
            $out += '小</label> <label class="control-label col-sm-2">应收款合计:', $line = 97, $out += $escape(statistics.needPay), 
            $out += '元</label> <label class="control-label col-sm-2">已收款合计:', $line = 98, $out += $escape(statistics.payedMoney), 
            $out += '元</label> <label class="control-label col-sm-2">现收款合计:', $line = 99, $out += $escape(statistics.currentNeedPay), 
            $out += '元</label> </div> <div style="clear: both;height: 0px;line-height: 0px;"></div> </div> </div> <div class="row touristGroupList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th >客户来源</th> <th >线路产品</th> <th>针对客源</th> <th >出游日期</th> <th>联系人</th> <th>人数</th> <th>应收</th> <th>已收</th> <th>现收</th> <th>未收</th> <th>买保险</th> <th>录入人</th> <th class="col-sm-1">录入时间</th> <th>状态</th>  <th style="width:150px;">操作</th> </tr> </thead> <tbody>', 
            $line = 129, $each(touristGroupList, function(touristGroup) {
                $out += ' <tr class="touristGroup-', $line = 130, $out += $escape(touristGroup.id), 
                $out += '"> <td> ', $line = 132, null != touristGroup.partnerAgency && ($out += " ", 
                $line = 133, $out += $escape(touristGroup.partnerAgency.travelAgencyName), $out += " ", 
                $line = 134), $out += " </td> <td> ", $line = 137, null != touristGroup.lineProduct && ($out += " ", 
                $line = 138, $out += $escape(touristGroup.lineProduct.name), $out += " ", $line = 139), 
                $out += " </td> <td> ", $line = 142, null != touristGroup.lineProduct && ($out += " ", 
                $line = 143, 0 == touristGroup.lineProduct.customerType ? ($out += " 散客 ", $line = 145) : ($out += " 团体 ", 
                $line = 147), $out += " ", $line = 148), $out += " </td> <td> ", $line = 151, $out += $escape($helpers.dateFormat(touristGroup.startTime, "yyyy-MM-dd")), 
                $out += " </td> <td> ", $line = 154, null != touristGroup.touristGroupMember && ($out += " ", 
                $line = 155, $out += $escape(touristGroup.touristGroupMember.name), $out += " ", 
                $line = 156), $out += " </td> <td> ", $line = 159, $out += $escape(touristGroup.adultCount), 
                $out += "大 ", $line = 160, $out += $escape(touristGroup.childCount), $out += "小 </td> <td> ", 
                $line = 163, $out += $escape(touristGroup.needPayAllMoney), $out += " </td> <td> ", 
                $line = 166, $out += $escape(touristGroup.payedMoney), $out += " </td> <td>", $line = 168, 
                $out += $escape(touristGroup.currentNeedPayMoney), $out += "</td> <td>", $line = 169, 
                $out += $escape(touristGroup.unIncomeMoney), $out += "</td> <td> ", $line = 171, 
                1 == touristGroup.buyInsurance ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 是 ', 
                $line = 174) : 0 == touristGroup.buyInsurance && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 否 ', 
                $line = 177), $out += " </td> <td> ", $line = 180, null != touristGroup.user && ($out += " ", 
                $line = 181, $out += $escape(touristGroup.user.realName), $out += " ", $line = 182), 
                $out += " </td> <td> ", $line = 185, $out += $escape(touristGroup.createTime), $out += " </td> <td> ", 
                $line = 188, 0 == touristGroup.status ? ($out += " 已发团 ", $line = 190) : 1 == touristGroup.status ? ($out += " 未分团 ", 
                $line = 192) : 2 == touristGroup.status ? ($out += " 已分团 ", $line = 194) : 3 == touristGroup.status && ($out += " 已转客 ", 
                $line = 196), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 200, $out += $escape(touristGroup.id), $out += '" class=" btn-touristGroup-view cursor"> 查看 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 203, $out += $escape(touristGroup.id), $out += '" class="btn-touristGroup-edit cursor"> 编辑 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 206, $out += $escape(touristGroup.id), $out += '" class="', $line = 206, 
                1 == touristGroup.status && ($out += "btn-touristGroup-delete", $line = 206), $out += ' cursor" ', 
                $line = 206, 1 != touristGroup.status && ($out += 'style="color:#bbb;"', $line = 206), 
                $out += '> 删除 </a> </div> <div class="hidden-md hidden-lg"> <div class="inline pos-rel"> <button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto"> <i class="ace-icon fa fa-cog icon-only bigger-110"></i> </button> <ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close"> <li> <a data-entity-id="', 
                $line = 219, $out += $escape(touristGroup.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-touristGroup-view" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-search-plus bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 227, $out += $escape(touristGroup.id), $out += '" href="javascript:void(0)" class="tooltip-success btn-touristGroup-edit" data-rel="tooltip"> <span class="green"> <i class="ace-icon fa fa-pencil-square-o bigger-120"></i> </span> </a> </li> <li> <a data-entity-id="', 
                $line = 235, $out += $escape(touristGroup.id), $out += '" href="javascript:void(0)" class="tooltip-error btn-touristGroup-delete" data-rel="tooltip"> <span class="red"> <i class="ace-icon fa fa-trash-o bigger-120"></i> </span> </a> </li> </ul> </div> </div> </td> </tr>', 
                $line = 245;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 251, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 260, 0 == totalPage ? ($out += " 0/0 ", $line = 262) : ($out += " ", $line = 263, 
            $out += $escape(pageNo + 1), $out += "/", $line = 263, $out += $escape(totalPage), 
            $out += " ", $line = 264), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area touristGroupSearchForm">\r\n	 <div class="form-horizontal">\r\n		<label class="pull-left text-right control-label no-padding-right">来源:</label>\r\n		<div class="col-sm-1">\r\n			<select name="partnerAgencyId" class="col-sm-12">\r\n				<option value=\'\'>来源</option>\r\n				{{each partnerAgencyList as partnerAgency}}\r\n				<option value="{{partnerAgency.id}}" {{if searchParam.partnerAgencyId == partnerAgency.id}}selected="selected"{{/if}} >{{partnerAgency.travelAgencyName}}</option>\r\n				{{/each}}\r\n			</select>   \r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">线路:</label>\r\n		<div class="col-sm-1">\r\n			<select name="lineProductId" class="col-sm-12">\r\n				<option value=\'\'>全部</option>\r\n				{{each lineProductList as lineProduct}}\r\n				<option value="{{lineProduct.partnerAgency}}" {{if searchParam.lineProductId == lineProduct.partnerAgency}}selected="selected"{{/if}} >{{lineProduct.name}}</option>\r\n				{{/each}}\r\n			</select>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">出游时间:</label>\r\n		<div class="col-sm-1">\r\n			<div class="input-group">\r\n				<input class="col-xs-12 date-picker" name="startTime" value="{{searchParam.startTime}}" type="text" />	\r\n				<span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n			</div>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">录入人:</label>\r\n		<div class="col-sm-1">\r\n			<select name="userId" class="col-sm-12">\r\n				<option value=\'\'>全部</option>\r\n				{{each userList as user}}\r\n				<option value="{{user.id}}" {{if searchParam.userId == user.id}}selected="selected"{{/if}} >{{user.realName}}</option>\r\n				{{/each}}\r\n			</select>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">录入日期:</label>\r\n		<div class="col-sm-1">\r\n			<div class="input-group col-sm-12">\r\n				<input class="col-sm-12 date-picker" name="createTimeStart" value="{{searchParam.createStartTime}}" type="text" />	\r\n				<span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n			</div>\r\n		</div>\r\n		<label class="pull-left text-right control-label no-padding-right">--</label>\r\n		<div class="col-sm-1">\r\n			<div class="input-group col-sm-12">\r\n				<input class="col-sm-12 date-picker" name="createTimeEnd" value="{{searchParam.createEndTime}}" type="text" />	\r\n				<span class="input-group-addon">\r\n					<i class="fa fa-calendar"></i>\r\n				</span>\r\n			</div>\r\n		</div>\r\n\r\n		<label class="pull-left text-right control-label no-padding-right">针对客源:</label>\r\n		<div class="col-sm-1 ">\r\n			<select name="customerType" class="col-xs-12">   \r\n				<option value="">全部</option>   \r\n				<option value="0" {{if searchParam.customerType == 0}}selected="selected"{{/if}}>散客</option>\r\n				<option value="1" {{if searchParam.customerType == 1}}selected="selected"{{/if}}>团体</option>     \r\n			</select> \r\n		</div>\r\n\r\n		<label class="pull-left text-right control-label no-padding-right">状态:</label>\r\n		<div class="col-sm-1 ">\r\n			<select name="status" class="col-xs-12"> \r\n				<option selected="selected" value="">全部</option> \r\n				<option value="0" {{if searchParam.status == 0}}selected="selected"{{/if}}>已发团</option>\r\n				<option value="1" {{if searchParam.status == 1}}selected="selected"{{/if}}>未分团</option>\r\n				<option value="2" {{if searchParam.status == 2}}selected="selected"{{/if}}>已分团</option>\r\n				<option value="3" {{if searchParam.status == 3}}selected="selected"{{/if}}>已转客</option>\r\n			</select> \r\n		</div>\r\n		 <div class="col-sm-1" style="width:100px;">\r\n			 <button class=" btn-sm  btn-touristGroupList-search search-btn">\r\n				 <i class="ace-icon fa fa-search"></i>\r\n				 搜索\r\n			 </button>\r\n		 </div>\r\n\r\n		 <div class="col-sm-1 pull-left" style="width:25px;">      \r\n			 <button class="btn btn-sm btn-success btn-touristGroup-add">   \r\n				 <i class="ace-icon fa fa-plus"></i>\r\n				 新增小组  \r\n			 </button>\r\n		 </div>\r\n\r\n		<div style="clear: both;height: 0px;line-height: 0px;"></div>\r\n	</div>\r\n	<div style="clear: both;margin-top:20px;border-top:1px dotted #ccc;padding-top:15px;">\r\n	<div class="form-horizontal" >\r\n\r\n		<label class="control-label pull-left">人数合计:{{statistics.adultCount}}大{{statistics.childCount}}小</label>\r\n		<label class="control-label col-sm-2">应收款合计:{{statistics.needPay}}元</label>\r\n		<label class="control-label col-sm-2">已收款合计:{{statistics.payedMoney}}元</label>\r\n		<label class="control-label col-sm-2">现收款合计:{{statistics.currentNeedPay}}元</label>\r\n	</div>\r\n	<div style="clear: both;height: 0px;line-height: 0px;"></div>\r\n</div>\r\n</div>\r\n\r\n<div class="row touristGroupList">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">  \r\n					<th >客户来源</th>\r\n					<th >线路产品</th>\r\n					<th>针对客源</th>               \r\n					<th >出游日期</th>\r\n					<th>联系人</th>\r\n					<th>人数</th>\r\n					<th>应收</th>\r\n					<th>已收</th>\r\n					<th>现收</th>\r\n					<th>未收</th>\r\n					<th>买保险</th>\r\n					<th>录入人</th>\r\n					<th class="col-sm-1">录入时间</th>\r\n					<th>状态</th>\r\n					<!-- <th>安排</th> -->\r\n					<th style="width:150px;">操作</th>\r\n				</tr>\r\n			</thead>\r\n		\r\n			<tbody>{{each touristGroupList as touristGroup}}\r\n				<tr class="touristGroup-{{touristGroup.id}}">\r\n					<td>\r\n						{{if touristGroup.partnerAgency != null}}\r\n							{{touristGroup.partnerAgency.travelAgencyName}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						{{if touristGroup.lineProduct != null}}\r\n							{{touristGroup.lineProduct.name}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n					    {{if touristGroup.lineProduct != null}}    \r\n							{{if touristGroup.lineProduct.customerType==0}}\r\n								  散客\r\n								{{else}}               \r\n								  团体  \r\n							{{/if}}  \r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						{{touristGroup.startTime | dateFormat: \'yyyy-MM-dd\'}}\r\n					</td>\r\n					<td>\r\n						{{if touristGroup.touristGroupMember != null}}\r\n							{{touristGroup.touristGroupMember.name}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n							{{touristGroup.adultCount}}大\r\n							{{touristGroup.childCount}}小\r\n					</td>\r\n					<td>\r\n						{{touristGroup.needPayAllMoney}}\r\n					</td>\r\n					<td>\r\n						{{touristGroup.payedMoney}}\r\n					</td>\r\n					<td>{{touristGroup.currentNeedPayMoney}}</td>\r\n					<td>{{touristGroup.unIncomeMoney}}</td>\r\n					<td>\r\n						{{if touristGroup.buyInsurance==1 }}\r\n						<i class="ace-icon fa fa-check green bigger-130"></i>\r\n							是\r\n						{{else if touristGroup.buyInsurance==0 }}\r\n						<i class="ace-icon fa fa-times red bigger-125"></i>\r\n							否\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						{{if touristGroup.user != null}}\r\n							{{touristGroup.user.realName}}\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						{{touristGroup.createTime}}\r\n					</td>\r\n					<td>\r\n						{{if touristGroup.status==0 }}\r\n							已发团\r\n						{{else if touristGroup.status==1 }}\r\n							未分团\r\n						{{else if touristGroup.status==2 }}\r\n							已分团\r\n						{{else if touristGroup.status==3 }}\r\n							已转客\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						<div class="hidden-sm hidden-xs btn-group">\r\n							<a data-entity-id="{{touristGroup.id}}" class=" btn-touristGroup-view cursor">\r\n								查看\r\n							</a><a href="" class="cursor"> |</a>\r\n							<a data-entity-id="{{touristGroup.id}}" class="btn-touristGroup-edit cursor">\r\n								编辑\r\n							</a><a href="" class="cursor"> |</a>\r\n							<a data-entity-id="{{touristGroup.id}}" class="{{if touristGroup.status == 1}}btn-touristGroup-delete{{/if}} cursor" {{if touristGroup.status != 1}}style="color:#bbb;"{{/if}}>\r\n								删除\r\n							</a>\r\n						</div>\r\n						<div class="hidden-md hidden-lg">\r\n							<div class="inline pos-rel">\r\n								<button class="btn btn-minier btn-primary dropdown-toggle" data-toggle="dropdown" data-position="auto">\r\n									<i class="ace-icon fa fa-cog icon-only bigger-110"></i>\r\n								</button>\r\n		\r\n								<ul class="dropdown-menu dropdown-only-icon dropdown-yellow dropdown-menu-right dropdown-caret dropdown-close">\r\n									\r\n									<li>\r\n										<a data-entity-id="{{touristGroup.id}}" href="javascript:void(0)" class="tooltip-error btn-touristGroup-view" data-rel="tooltip">\r\n											<span class="red">\r\n												<i class="ace-icon fa fa-search-plus bigger-120"></i>\r\n											</span>\r\n										</a>\r\n									</li>\r\n									\r\n									<li>\r\n										<a data-entity-id="{{touristGroup.id}}" href="javascript:void(0)" class="tooltip-success btn-touristGroup-edit" data-rel="tooltip">\r\n											<span class="green">\r\n												<i class="ace-icon fa fa-pencil-square-o bigger-120"></i>\r\n											</span>\r\n										</a>\r\n									</li>\r\n		\r\n									<li>\r\n										<a data-entity-id="{{touristGroup.id}}" href="javascript:void(0)" class="tooltip-error btn-touristGroup-delete" data-rel="tooltip">\r\n											<span class="red">\r\n												<i class="ace-icon fa fa-trash-o bigger-120"></i>\r\n											</span>\r\n										</a>\r\n									</li>\r\n								</ul>\r\n							</div>\r\n						</div>\r\n					</td>\r\n				</tr>{{/each}}\r\n			</tbody>\r\n		</table>\r\n		\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});