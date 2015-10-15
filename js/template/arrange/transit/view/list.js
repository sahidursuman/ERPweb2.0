/*TMODJS:{"debug":true,"version":385,"md5":"a96a93665d98fd67dca05e79ba552526"}*/
define(function(require) {
    return require("../../../template")("arrange/transit/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, outRemarkArrangeList = $data.outRemarkArrangeList, recordSize = ($data.transit, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="search-area arrangeTransit"> <div class="form-horizontal"> <div class="col-xs-12"> <div class="col-xs-3" style="padding-left:0px;"> <label class="col-xs-4 text-right control-label no-padding-right">客户来源:</label> <div class="col-xs-8"> <input type="text" name="partnerAgency" placeholder="全部组团社" class="col-sm-12 choosePartnerAgency" value="', 
            $line = 7, $out += $escape(searchParam.partnerAgencyList.travelAgencyName), $out += '" /> <input type="hidden" name="partnerAgencyId" value="', 
            $line = 8, $out += $escape(searchParam.partnerAgencyList.id), $out += '" /> </div> </div> <div class="col-xs-3" style="padding-left:0px;"> <label class="col-xs-4 text-right control-label no-padding-right">线路:</label> <div class="col-xs-8"> <input type="text" name="lineProduct" placeholder="全部线路" class="col-sm-12 chooseLineProduct" value="', 
            $line = 14, $out += $escape(searchParam.lineProductList.name), $out += '" /> <input type="hidden" name="lineProductId" value="', 
            $line = 15, $out += $escape(searchParam.lineProductList.id), $out += '" /> </div> </div> <div class="col-xs-3"> <label class="col-xs-4 text-right control-label no-padding-right">出游时间:</label> <div class="col-xs-8"> <div class="input-group"> <input class="col-xs-12 date-picker" name="startTime" value="', 
            $line = 22, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-3" style="padding-left:0px;"> <label class="col-xs-4 text-right control-label no-padding-right">状态:</label> <div class="col-xs-8 btn-group btn-status" > <button data-value="', 
            $line = 33, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false"> <span> ', 
            $line = 35, "" == searchParam.status ? ($out += " 全部 ", $line = 37) : 1 == searchParam.status ? ($out += " 已安排 ", 
            $line = 39) : ($out += " 未安排 ", $line = 41), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="1" href="javascript:void(0)">已安排</a> </li> <li> <a data-value="0" href="javascript:void(0)">未安排</a> </li> </ul> </div> </div> </div> <div style="clear: both;margin-top:20px;padding-top:15px;"></div> <div class="col-xs-12"> <div class="col-xs-3" style="padding-left:0px;"> <label class="col-xs-4 text-right control-label no-padding-right">安排人:</label> <div class="col-xs-8"> <input type="text" name="arrangeUser" placeholder="全部安排人" value="', 
            $line = 65, $out += $escape(searchParam.arrangeUserList.name), $out += '" class="col-xs-12 chooseArrangeUser" /> <input type="hidden" name="arrangeUserId" value="', 
            $line = 66, $out += $escape(searchParam.arrangeUserList.id), $out += '" /> </div> </div> <div class="col-xs-3" style="padding-left:0;"> <label class="col-xs-4 text-right control-label no-padding-right">安排时间:</label> <div class="col-xs-8"> <div class="input-group"> <input class="col-xs-5 date-picker" name="arrangeStartTime" placeholder="开始时间" value="', 
            $line = 73, $out += $escape(searchParam.arrangeStartTime), $out += '" type="text" /> <lable class="col-xs-2" style="text-align:center;padding:0;padding-top:7px;">&nbsp;至&nbsp;</lable> <input class="col-xs-5 date-picker" name="arrangeEndTime" placeholder="结束时间" value="', 
            $line = 75, $out += $escape(searchParam.arrangeEndTime), $out += '" type="text" /> </div> </div> </div> <div class="col-xs-3"> <select class="col-xs-4" name="shuttleType"> <option value="0" ', 
            $line = 81, 0 == searchParam.shuttleType && ($out += 'selected="selected"', $line = 81), 
            $out += '>接团日期</option> <option value="1" ', $line = 82, 1 == searchParam.shuttleType && ($out += 'selected="selected"', 
            $line = 82), $out += '>送团日期</option> </select> <div class="col-xs-8"> <div class="input-group"> <input class="col-xs-12 date-picker" name="shuttleTime" value="', 
            $line = 86, null != searchParam.shuttleTime && ($line = 86, $out += $escape(searchParam.shuttleTime), 
            $line = 86), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-3"> <button class=" btn-sm btn-touristGroupList-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </div> <div style="clear: both;height: 0px;line-height: 0px;"></div> </div> </div> <div style="clear: both;margin-top:20px;border-top:1px dotted #ccc;padding-top:15px;"> <div class="row arrangeTransitList"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th rowspan="2">中转单号</th> <th rowspan="2">客户来源</th> <th rowspan="2">线路产品</th> <th rowspan="2">出游日期</th> <th rowspan="2">游客</th> <th rowspan="2">人数</th> <th colspan="5">接团</th> <th rowspan="2">小车</th> <th colspan="5">送团</th> <th rowspan="2">安排人</th> <th rowspan="2">安排时间</th> <th rowspan="2">状态</th> <th rowspan="2">操作</th> </tr> <tr class="bg-blur"> <th>票</th> <th>车</th> <th>宿</th> <th>餐</th> <th>其他</th> <th>票</th> <th>车</th> <th>宿</th> <th>餐</th> <th>其他</th> </tr> </thead> <tbody>', 
            $line = 138, $each(outRemarkArrangeList, function(transit) {
                $out += ' <tr data-entity-id="', $line = 139, null != transit.touristGroupOutRemark && ($line = 139, 
                $out += $escape(transit.touristGroupOutRemark.id), $line = 139), $out += '"> <td>', 
                $line = 140, $out += $escape(transit.orderNumber), $out += "</td> <td>", $line = 141, 
                $out += $escape(transit.partnerAgencyName), $out += "</td> <td>", $line = 142, $out += $escape(transit.lineProductName), 
                $out += "</td> <td>", $line = 143, null != transit.touristGroupOutRemark && ($line = 143, 
                $out += $escape($helpers.dateFormat(transit.touristGroupOutRemark.startTime, "yyyy-MM-dd")), 
                $line = 143), $out += "</td> <td>", $line = 144, $out += $escape(transit.touristGroupMemberName), 
                $out += "</td> <td> ", $line = 146, null != transit.touristGroupOutRemark && ($line = 146, 
                $out += $escape(transit.touristGroupOutRemark.adultCount), $line = 146), $out += "大 ", 
                $line = 147, null != transit.touristGroupOutRemark && ($line = 147, $out += $escape(transit.touristGroupOutRemark.childCount), 
                $line = 147), $out += "小 </td> <td>", $line = 149, 0 == transit.touristGroupOutRemark.isNeedArriveService ? ($out += "-", 
                $line = 149) : ($line = 149, 0 == transit.receiveTicketStatus ? ($out += '<i class ="ace-icon fa fa-times red bigger-125"></i>', 
                $line = 149) : 1 == transit.receiveTicketStatus && ($out += '<i class ="ace-icon fa fa-check green bigger-130"></i>', 
                $line = 149), $line = 149), $out += "</td> <td>", $line = 150, 0 == transit.touristGroupOutRemark.isNeedArriveService ? ($out += "-", 
                $line = 150) : ($line = 150, 0 == transit.receiveBusStatus ? ($out += '<i class ="ace-icon fa fa-times red bigger-125"></i>', 
                $line = 150) : 1 == transit.receiveBusStatus && ($out += '<i class ="ace-icon fa fa-check green bigger-130"></i>', 
                $line = 150), $line = 150), $out += "</td> <td>", $line = 151, 0 == transit.touristGroupOutRemark.isNeedArriveService ? ($out += "-", 
                $line = 151) : ($line = 151, 0 == transit.receiveHotelStatus ? ($out += '<i class ="ace-icon fa fa-times red bigger-125"></i>', 
                $line = 151) : 1 == transit.receiveHotelStatus && ($out += '<i class ="ace-icon fa fa-check green bigger-130"></i>', 
                $line = 151), $line = 151), $out += "</td> <td>", $line = 152, 0 == transit.touristGroupOutRemark.isNeedArriveService ? ($out += "-", 
                $line = 152) : ($line = 152, 0 == transit.receiveRestaurantStatus ? ($out += '<i class ="ace-icon fa fa-times red bigger-125"></i>', 
                $line = 152) : 1 == transit.receiveRestaurantStatus && ($out += '<i class ="ace-icon fa fa-check green bigger-130"></i>', 
                $line = 152), $line = 152), $out += "</td> <td>", $line = 153, 0 == transit.touristGroupOutRemark.isNeedArriveService ? ($out += "-", 
                $line = 153) : ($line = 153, 0 == transit.receiveOtherStatus ? ($out += '<i class ="ace-icon fa fa-times red bigger-125"></i>', 
                $line = 153) : 1 == transit.receiveOtherStatus && ($out += '<i class ="ace-icon fa fa-check green bigger-130"></i>', 
                $line = 153), $line = 153), $out += "</td> <td>", $line = 154, 0 == transit.touristGroupOutRemark.isNeedBus ? ($out += "-", 
                $line = 154) : ($line = 154, 0 == transit.carStatus ? ($out += '<i class ="ace-icon fa fa-times red bigger-125"></i>', 
                $line = 154) : 1 == transit.carStatus && ($out += '<i class ="ace-icon fa fa-check green bigger-130"></i>', 
                $line = 154), $line = 154), $out += "</td> <td>", $line = 155, 0 == transit.touristGroupOutRemark.isNeedLeaveService ? ($out += "-", 
                $line = 155) : ($line = 155, 0 == transit.sendTicketStatus ? ($out += '<i class ="ace-icon fa fa-times red bigger-125"></i>', 
                $line = 155) : 1 == transit.sendTicketStatus && ($out += '<i class ="ace-icon fa fa-check green bigger-130"></i>', 
                $line = 155), $line = 155), $out += "</td> <td>", $line = 156, 0 == transit.touristGroupOutRemark.isNeedLeaveService ? ($out += "-", 
                $line = 156) : ($line = 156, 0 == transit.sendBusStatus ? ($out += '<i class ="ace-icon fa fa-times red bigger-125"></i>', 
                $line = 156) : 1 == transit.sendBusStatus && ($out += '<i class ="ace-icon fa fa-check green bigger-130"></i>', 
                $line = 156), $line = 156), $out += "</td> <td>", $line = 157, 0 == transit.touristGroupOutRemark.isNeedLeaveService ? ($out += "-", 
                $line = 157) : ($line = 157, 0 == transit.sendHotelStatus ? ($out += '<i class ="ace-icon fa fa-times red bigger-125"></i>', 
                $line = 157) : 1 == transit.sendHotelStatus && ($out += '<i class ="ace-icon fa fa-check green bigger-130"></i>', 
                $line = 157), $line = 157), $out += "</td> <td>", $line = 158, 0 == transit.touristGroupOutRemark.isNeedLeaveService ? ($out += "-", 
                $line = 158) : ($line = 158, 0 == transit.sendRestaurantStatus ? ($out += '<i class ="ace-icon fa fa-times red bigger-125"></i>', 
                $line = 158) : 1 == transit.sendRestaurantStatus && ($out += '<i class ="ace-icon fa fa-check green bigger-130"></i>', 
                $line = 158), $line = 158), $out += "</td> <td>", $line = 159, 0 == transit.touristGroupOutRemark.isNeedLeaveService ? ($out += "-", 
                $line = 159) : ($line = 159, 0 == transit.sendOtherStatus ? ($out += '<i class ="ace-icon fa fa-times red bigger-125"></i>', 
                $line = 159) : 1 == transit.sendOtherStatus && ($out += '<i class ="ace-icon fa fa-check green bigger-130"></i>', 
                $line = 159), $line = 159), $out += "</td> <td>", $line = 161, null != transit.arrangeUser ? ($line = 161, 
                $out += $escape(transit.arrangeUser.realName), $line = 161) : ($out += "-", $line = 161), 
                $out += "</td> <td>", $line = 162, null != transit.arrangeTime ? ($line = 162, $out += $escape(transit.arrangeTime), 
                $line = 162) : ($out += "-", $line = 162), $out += "</td> <td>", $line = 163, 1 == transit.status ? ($out += ' <i class ="ace-icon fa fa-check"></i> 已安排 ', 
                $line = 166) : 0 == transit.status && ($out += ' <i class ="ace-icon fa fa-times"></i> 未安排 ', 
                $line = 169), $out += ' </td> <td> <div class="hidden-sm hidden-xs btn-group"> <a data-entity-id="', 
                $line = 173, null != transit.touristGroupOutRemark && ($line = 173, $out += $escape(transit.touristGroupOutRemark.id), 
                $line = 173), $out += '" class="cursor btn-transit-send" title="通知"> 通知 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 176, null != transit.touristGroupOutRemark && ($line = 176, $out += $escape(transit.touristGroupOutRemark.id), 
                $line = 176), $out += '" class="cursor btn-transit-edit" title="中转安排"> 编辑 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 179, null != transit.touristGroupOutRemark && ($line = 179, $out += $escape(transit.touristGroupOutRemark.id), 
                $line = 179), $out += '" class="cursor btn-transit-view" title="查看安排"> 查看 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 182, null != transit.touristGroupOutRemark && ($line = 182, $out += $escape(transit.touristGroupOutRemark.id), 
                $line = 182), $out += '" title="导出代订" class="cursor btn-transit-export"> 导出 </a> </div> </td> </tr>', 
                $line = 187;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 193, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 202, 0 == totalPage ? ($out += " 0/0 ", $line = 204) : ($out += " ", $line = 205, 
            $out += $escape(pageNo + 1), $out += "/", $line = 205, $out += $escape(totalPage), 
            $out += " ", $line = 206), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area arrangeTransit">\r\n	 <div class="form-horizontal">\r\n	 	<div class="col-xs-12">\r\n		 	<div class="col-xs-3" style="padding-left:0px;">\r\n				<label class="col-xs-4  text-right control-label no-padding-right">客户来源:</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="partnerAgency" placeholder="全部组团社" class="col-sm-12 choosePartnerAgency" value="{{searchParam.partnerAgencyList.travelAgencyName}}" />\r\n					<input type="hidden" name="partnerAgencyId" value="{{searchParam.partnerAgencyList.id}}" />\r\n				</div> \r\n			</div>\r\n			<div class="col-xs-3" style="padding-left:0px;">\r\n				<label class="col-xs-4 text-right control-label no-padding-right">线路:</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="lineProduct" placeholder="全部线路" class="col-sm-12 chooseLineProduct" value="{{searchParam.lineProductList.name}}" />\r\n					<input type="hidden" name="lineProductId" value="{{searchParam.lineProductList.id}}" />\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<label class="col-xs-4 text-right control-label no-padding-right">出游时间:</label>\r\n				<div class="col-xs-8">\r\n					<div class="input-group">\r\n						<input class="col-xs-12 date-picker" name="startTime" value="{{searchParam.startTime}}" type="text" />\r\n						<span class="input-group-addon">\r\n							<i class="fa fa-calendar"></i>\r\n						</span>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3" style="padding-left:0px;">\r\n				<label class="col-xs-4 text-right control-label no-padding-right">状态:</label>\r\n				\r\n				<div class="col-xs-8 btn-group btn-status" >\r\n					<button data-value="{{searchParam.status}}" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" aria-expanded="false">\r\n						<span>\r\n						   {{if searchParam.status == ""}}\r\n								全部\r\n							{{else if searchParam.status == 1}}\r\n								已安排\r\n							{{else}}\r\n								未安排\r\n							{{/if}}\r\n						</span>\r\n						<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n					</button>\r\n					<ul class="dropdown-menu">\r\n						<li>\r\n							<a data-value="" href="javascript:void(0)">全部</a>\r\n						</li>\r\n						<li>\r\n							<a data-value="1" href="javascript:void(0)">已安排</a>\r\n						</li>\r\n\r\n						<li>\r\n							<a data-value="0" href="javascript:void(0)">未安排</a>\r\n						</li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n		<div style="clear: both;margin-top:20px;padding-top:15px;"></div>\r\n		<div class="col-xs-12">\r\n			<div class="col-xs-3" style="padding-left:0px;">\r\n				<label class="col-xs-4 text-right control-label no-padding-right">安排人:</label>\r\n				<div class="col-xs-8">\r\n					<input type="text" name="arrangeUser" placeholder="全部安排人" value="{{searchParam.arrangeUserList.name}}" class="col-xs-12 chooseArrangeUser" />\r\n					<input type="hidden" name="arrangeUserId" value="{{searchParam.arrangeUserList.id}}" />\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3" style="padding-left:0;">\r\n				<label class="col-xs-4 text-right control-label no-padding-right">安排时间:</label>\r\n				<div class="col-xs-8">\r\n					<div class="input-group">\r\n						<input class="col-xs-5 date-picker" name="arrangeStartTime" placeholder="开始时间" value="{{searchParam.arrangeStartTime}}" type="text" />	\r\n						<lable class="col-xs-2" style="text-align:center;padding:0;padding-top:7px;">&nbsp;至&nbsp;</lable>\r\n						<input class="col-xs-5 date-picker" name="arrangeEndTime" placeholder="结束时间" value="{{searchParam.arrangeEndTime}}" type="text" />\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<select class="col-xs-4" name="shuttleType">\r\n					<option value="0" {{if searchParam.shuttleType == 0}}selected="selected"{{/if}}>接团日期</option>\r\n					<option value="1" {{if searchParam.shuttleType == 1}}selected="selected"{{/if}}>送团日期</option>\r\n				</select>\r\n				<div class="col-xs-8">\r\n					<div class="input-group">\r\n						<input class="col-xs-12 date-picker" name="shuttleTime" value="{{if searchParam.shuttleTime != null}}{{searchParam.shuttleTime}}{{/if}}" type="text" />\r\n						<span class="input-group-addon">\r\n							<i class="fa fa-calendar"></i>\r\n						</span>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<button class=" btn-sm  btn-touristGroupList-search search-btn">\r\n\r\n					<i class="ace-icon fa fa-search"></i>\r\n					搜索\r\n				</button>\r\n			</div>\r\n		</div>\r\n		<div style="clear: both;height: 0px;line-height: 0px;"></div>\r\n	</div>\r\n</div>\r\n<div style="clear: both;margin-top:20px;border-top:1px dotted #ccc;padding-top:15px;">\r\n<div class="row arrangeTransitList">	\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th rowspan="2">中转单号</th>\r\n					<th rowspan="2">客户来源</th>\r\n					<th rowspan="2">线路产品</th>\r\n					<th rowspan="2">出游日期</th>\r\n					<th rowspan="2">游客</th>\r\n					<th rowspan="2">人数</th>\r\n					<th colspan="5">接团</th>\r\n					<th rowspan="2">小车</th>\r\n					<th colspan="5">送团</th> \r\n					<th rowspan="2">安排人</th>\r\n					<th rowspan="2">安排时间</th>\r\n					<th rowspan="2">状态</th>\r\n					<th rowspan="2">操作</th>\r\n				</tr>\r\n				<tr class="bg-blur">\r\n					<th>票</th>\r\n					<th>车</th>\r\n					<th>宿</th>\r\n					<th>餐</th>\r\n					<th>其他</th>\r\n					<th>票</th>\r\n					<th>车</th>\r\n					<th>宿</th>\r\n					<th>餐</th>\r\n					<th>其他</th>\r\n				</tr>\r\n			</thead>\r\n		\r\n			<tbody>{{each outRemarkArrangeList as transit}}\r\n				<tr data-entity-id="{{if transit.touristGroupOutRemark != null}}{{transit.touristGroupOutRemark.id}}{{/if}}">\r\n					<td>{{transit.orderNumber}}</td>\r\n					<td>{{transit.partnerAgencyName}}</td>\r\n					<td>{{transit.lineProductName}}</td>\r\n					<td>{{if transit.touristGroupOutRemark != null}}{{transit.touristGroupOutRemark.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n					<td>{{transit.touristGroupMemberName}}</td>\r\n					<td>\r\n						{{if transit.touristGroupOutRemark != null}}{{transit.touristGroupOutRemark.adultCount}}{{/if}}大\r\n						{{if transit.touristGroupOutRemark != null}}{{transit.touristGroupOutRemark.childCount}}{{/if}}小\r\n					</td>\r\n					<td>{{if transit.touristGroupOutRemark.isNeedArriveService == 0}}-{{else}}{{if transit.receiveTicketStatus == 0}}<i class ="ace-icon fa fa-times red bigger-125"></i>{{else if transit.receiveTicketStatus == 1}}<i class ="ace-icon fa fa-check green bigger-130"></i>{{/if}}{{/if}}</td>\r\n					<td>{{if transit.touristGroupOutRemark.isNeedArriveService == 0}}-{{else}}{{if transit.receiveBusStatus == 0}}<i class ="ace-icon fa fa-times red bigger-125"></i>{{else if transit.receiveBusStatus == 1}}<i class ="ace-icon fa fa-check green bigger-130"></i>{{/if}}{{/if}}</td>\r\n					<td>{{if transit.touristGroupOutRemark.isNeedArriveService == 0}}-{{else}}{{if transit.receiveHotelStatus == 0}}<i class ="ace-icon fa fa-times red bigger-125"></i>{{else if transit.receiveHotelStatus == 1}}<i class ="ace-icon fa fa-check green bigger-130"></i>{{/if}}{{/if}}</td>\r\n					<td>{{if transit.touristGroupOutRemark.isNeedArriveService == 0}}-{{else}}{{if transit.receiveRestaurantStatus == 0}}<i class ="ace-icon fa fa-times red bigger-125"></i>{{else if transit.receiveRestaurantStatus == 1}}<i class ="ace-icon fa fa-check green bigger-130"></i>{{/if}}{{/if}}</td>\r\n					<td>{{if transit.touristGroupOutRemark.isNeedArriveService == 0}}-{{else}}{{if transit.receiveOtherStatus == 0}}<i class ="ace-icon fa fa-times red bigger-125"></i>{{else if transit.receiveOtherStatus == 1}}<i class ="ace-icon fa fa-check green bigger-130"></i>{{/if}}{{/if}}</td>\r\n					<td>{{if transit.touristGroupOutRemark.isNeedBus == 0}}-{{else}}{{if transit.carStatus == 0}}<i class ="ace-icon fa fa-times red bigger-125"></i>{{else if transit.carStatus == 1}}<i class ="ace-icon fa fa-check green bigger-130"></i>{{/if}}{{/if}}</td>\r\n					<td>{{if transit.touristGroupOutRemark.isNeedLeaveService == 0}}-{{else}}{{if transit.sendTicketStatus == 0}}<i class ="ace-icon fa fa-times red bigger-125"></i>{{else if transit.sendTicketStatus == 1}}<i class ="ace-icon fa fa-check green bigger-130"></i>{{/if}}{{/if}}</td>\r\n					<td>{{if transit.touristGroupOutRemark.isNeedLeaveService == 0}}-{{else}}{{if transit.sendBusStatus == 0}}<i class ="ace-icon fa fa-times red bigger-125"></i>{{else if transit.sendBusStatus == 1}}<i class ="ace-icon fa fa-check green bigger-130"></i>{{/if}}{{/if}}</td>\r\n					<td>{{if transit.touristGroupOutRemark.isNeedLeaveService == 0}}-{{else}}{{if transit.sendHotelStatus == 0}}<i class ="ace-icon fa fa-times red bigger-125"></i>{{else if transit.sendHotelStatus == 1}}<i class ="ace-icon fa fa-check green bigger-130"></i>{{/if}}{{/if}}</td>\r\n					<td>{{if transit.touristGroupOutRemark.isNeedLeaveService == 0}}-{{else}}{{if transit.sendRestaurantStatus == 0}}<i class ="ace-icon fa fa-times red bigger-125"></i>{{else if transit.sendRestaurantStatus == 1}}<i class ="ace-icon fa fa-check green bigger-130"></i>{{/if}}{{/if}}</td>\r\n					<td>{{if transit.touristGroupOutRemark.isNeedLeaveService == 0}}-{{else}}{{if transit.sendOtherStatus == 0}}<i class ="ace-icon fa fa-times red bigger-125"></i>{{else if transit.sendOtherStatus == 1}}<i class ="ace-icon fa fa-check green bigger-130"></i>{{/if}}{{/if}}</td>\r\n\r\n					<td>{{if transit.arrangeUser != null}}{{transit.arrangeUser.realName}}{{else}}-{{/if}}</td>\r\n					<td>{{if transit.arrangeTime != null}}{{transit.arrangeTime}}{{else}}-{{/if}}</td>\r\n					<td>{{if transit.status == 1}}\r\n						<i class ="ace-icon fa fa-check"></i>\r\n						已安排\r\n						{{else if transit.status == 0}}\r\n						<i class ="ace-icon fa fa-times"></i>\r\n						未安排\r\n						{{/if}}\r\n					</td>\r\n					<td>\r\n						<div class="hidden-sm hidden-xs btn-group">\r\n							<a data-entity-id="{{if transit.touristGroupOutRemark != null}}{{transit.touristGroupOutRemark.id}}{{/if}}" class="cursor btn-transit-send" title="通知">\r\n								通知\r\n							</a><a href="" class="cursor"> |</a>\r\n							<a data-entity-id="{{if transit.touristGroupOutRemark != null}}{{transit.touristGroupOutRemark.id}}{{/if}}" class="cursor btn-transit-edit" title="中转安排">\r\n								编辑\r\n							</a><a href="" class="cursor"> |</a>\r\n							<a data-entity-id="{{if transit.touristGroupOutRemark != null}}{{transit.touristGroupOutRemark.id}}{{/if}}" class="cursor btn-transit-view" title="查看安排">\r\n								查看\r\n							</a><a href="" class="cursor"> |</a>\r\n					    	<a data-entity-id="{{if transit.touristGroupOutRemark != null}}{{transit.touristGroupOutRemark.id}}{{/if}}" title="导出代订" class="cursor btn-transit-export">\r\n					    		导出\r\n					    	</a>\r\n						</div>\r\n					</td>\r\n				</tr>{{/each}}\r\n			</tbody>\r\n		</table>\r\n		\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});