/*TMODJS:{"debug":true,"version":189,"md5":"cae0c5485008bebca377cb2ac792d7f8"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, tripPlanList = $data.tripPlanList, recordSize = ($data.tripPlan, 
            $data.$index, $data.tripPlanDetails, $data.index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="search-area globalAdd"> <div class="form-horizontal search-tripPlanContainer"> <div class="col-xs-2"> <input type="text" name="tripNumber" class="col-xs-12 guideInputList" placeholder="团号" value="', 
            $line = 4, $out += $escape(searchParam.tripNumber), $out += '" /> </div> <div class="col-xs-2"> <input type="text" name="startTime" class="col-xs-12 date-picker guideInputList" placeholder="出团日期" value="', 
            $line = 7, $out += $escape(searchParam.startTime), $out += '" /> </div> <div class="col-xs-2"> <input type="text" name="realname" class="col-xs-12 guideInputList" placeholder="导游" value="', 
            $line = 10, $out += $escape(searchParam.realname), $out += '" /> </div> <div class="col-xs-2"> <input type="text" name="licenseNumber" class="col-xs-12 guideInputList" placeholder="车牌号" value="', 
            $line = 13, $out += $escape(searchParam.licenseNumber), $out += '" /> </div> <div class="col-xs-2"> <button class=" btn-sm btn-tripPlan-search search-btn"style="margin-left:-30px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group btn-status" style="margin-left: 20px;"> <button data-value="', 
            $line = 20, $out += $escape(searchParam.status), $out += '" name="status" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" style="background: #ffffff!important; border: 1px solid #83bbd6!important;" aria-expanded="false"> <span> ', 
            $line = 22, "" == searchParam.status ? ($out += " 全部 ", $line = 24) : 1 == searchParam.status ? ($out += " 已发团 ", 
            $line = 26) : 0 == searchParam.status ? ($out += " 待确认 ", $line = 28) : -1 == searchParam.status && ($out += " 已取消 ", 
            $line = 30), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">待确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已发团</a> </li> <li> <a data-value="-1" href="javascript:void(0)">已取消</a> </li> </ul> </div> </div> <div style="clear:both;height:0;line-height:0;"></div> </div> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover tripPlanViewList"> <thead> <tr class="bg-blur"> <th>团号</th> <th>出团日期</th> <th>完团日期</th> <th>线路产品</th> <th>人数</th> <th>团队人数</th> <th>导游</th> <th>车牌号</th> <th>险</th> <th>餐</th> <th>房</th> <th>景</th> <th>购</th> <th>娱</th> <th>票</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 78, $each(tripPlanList, function(tripPlan) {
                $out += ' <tr> <td style="vertical-align:middle" ', $line = 80, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 80, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 80), 
                $out += ">", $line = 80, $out += $escape(tripPlan.tripNumber), $out += "</td> ", 
                $line = 81, 0 == tripPlan.tripPlanDetails.length ? ($out += " <td>", $line = 82, 
                null != tripPlan.startTime && ($line = 82, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
                $line = 82), $out += "</td> <td>", $line = 83, null != tripPlan.endTime && ($line = 83, 
                $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), $line = 83), 
                $out += "</td> <td>", $line = 84, $out += $escape(tripPlan.lineProduct.name), $out += "</td> <td>", 
                $line = 85, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
                $out += "</td> ", $line = 86) : ($out += " ", $line = 87, $each(tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 88, 0 == index && ($out += " <td>", $line = 89, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 90, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 91, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 92, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> ", $line = 93), $out += " ", $line = 94;
                }), $out += " ", $line = 95), $out += ' <td style="vertical-align:middle" ', $line = 96, 
                tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 96, $out += $escape(tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 96), $out += ">", $line = 96, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 97, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 97, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 97), 
                $out += ">", $line = 97, null != tripPlan.guide && ($line = 97, $out += $escape(tripPlan.guide.realname), 
                $line = 97), $out += '</td> <td style="vertical-align:middle" ', $line = 98, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 98, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 98), 
                $out += ">", $line = 98, null != tripPlan.bus && ($out += " ", $line = 98, $out += $escape(tripPlan.bus.licenseNumber), 
                $out += " ", $line = 98), $out += '</td> <td style="vertical-align:middle" ', $line = 99, 
                tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 99, $out += $escape(tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 99), $out += ">", $line = 99, 0 == tripPlan.insuranceStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 101) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 103), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 105, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 105, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 105), 
                $out += ">", $line = 105, 0 == tripPlan.restaurantStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 107) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 109), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 111, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 111, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 111), 
                $out += ">", $line = 111, 0 == tripPlan.hotelStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 113) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 115), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 117, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 117, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 117), 
                $out += ">", $line = 117, 0 == tripPlan.scenicStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 119) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 121), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 123, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 123, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 123), 
                $out += ">", $line = 123, 0 == tripPlan.shopStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 125) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 127), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 129, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 129, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 129), 
                $out += ">", $line = 129, 0 == tripPlan.selfPayStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 131) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 133), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 135, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 135, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 135), 
                $out += ">", $line = 135, 0 == tripPlan.ticketStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 137) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 139), 
                $out += ' </td> <td style="vertical-align:middle;width:80px;" ', $line = 141, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 141, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 141), 
                $out += "> ", $line = 142, 0 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-question yellow bigger-130"></i> 待确认 ', 
                $line = 145) : 1 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已发团 ', 
                $line = 148) : -1 == tripPlan.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已取消 ', 
                $line = 151), $out += ' </td> <td style="vertical-align:middle;width:200px" ', $line = 153, 
                tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 153, $out += $escape(tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 153), $out += '> <a data-entiy-id="', $line = 154, $out += $escape(tripPlan.id), 
                $out += '" class="cursor btn-tripPlan-send" title="通知"> 通知 </a><a href="" class="cursor"> |</a> <a data-entiy-id="', 
                $line = 157, $out += $escape(tripPlan.id), $out += '" class="cursor btn-tripPlan-view" title="查看"> 查看 </a><a href="" class="cursor"> |</a> <a data-entiy-id="', 
                $line = 160, $out += $escape(tripPlan.id), $out += '" billStatus="', $line = 160, 
                $out += $escape(tripPlan.billStatus), $out += '" class="cursor btn-tripPlan-plan" title="安排"> 安排 </a><a href="" class="cursor"> |</a> <a data-entity-id="', 
                $line = 163, $out += $escape(tripPlan.id), $out += '" title="导出安排" class="cursor btn-tripPlan-export"> 导出 </a> </td> </tr> ', 
                $line = 168, tripPlan.tripPlanDetails.length > 1 && ($out += " ", $line = 169, $each(tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 170, index > 0 && ($out += " <tr> <td>", $line = 172, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 173, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 174, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 175, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> </tr> ", $line = 177), $out += " ", $line = 178;
                }), $out += " ", $line = 179), $out += " ", $line = 180;
            }), $out += ' </tbody> </table> </div> </div> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" role="status" aria-live="polite">共计 ', 
            $line = 187, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a class="first" href="javascript:void(0)">首页</a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a class="previous"href="javascript:void(0)">上一页</a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 200, 0 == totalPage ? ($out += " 0/0 ", $line = 202) : ($out += " ", $line = 203, 
            $out += $escape(pageNo + 1), $out += "/", $line = 203, $out += $escape(totalPage), 
            $out += " ", $line = 204), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a class="next" href="javascript:void(0)">下一页</a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a class="last" href="javascript:void(0)">尾页</a> </li> </ul> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n	<div class="form-horizontal search-tripPlanContainer">\r\n		<div class="col-xs-2">\r\n			<input type="text" name="tripNumber" class="col-xs-12 guideInputList" placeholder="团号" value="{{searchParam.tripNumber}}" />\r\n		</div>\r\n		<div class="col-xs-2">\r\n			<input type="text" name="startTime" class="col-xs-12 date-picker guideInputList" placeholder="出团日期" value="{{searchParam.startTime}}" />\r\n		</div>\r\n		<div class="col-xs-2">\r\n			<input type="text" name="realname" class="col-xs-12 guideInputList" placeholder="导游" value="{{searchParam.realname}}" />\r\n		</div>\r\n		<div class="col-xs-2">\r\n			<input type="text" name="licenseNumber" class="col-xs-12 guideInputList" placeholder="车牌号" value="{{searchParam.licenseNumber}}" />\r\n		</div>\r\n		<div class="col-xs-2">\r\n			<button class=" btn-sm  btn-tripPlan-search search-btn"style="margin-left:-30px;">\r\n				<i class="ace-icon fa fa-search"></i> 搜索\r\n			</button>\r\n			<div class="btn-group btn-status" style="margin-left: 20px;">\r\n				<button data-value="{{searchParam.status}}" name="status" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" style="background: #ffffff!important; border: 1px solid #83bbd6!important;" aria-expanded="false">\r\n					<span>\r\n						{{if searchParam.status == ""}}   \r\n							全部\r\n						{{else if searchParam.status == 1}}\r\n							已发团\r\n						{{else if searchParam.status == 0}}\r\n							待确认\r\n						{{else if searchParam.status == -1}}\r\n							已取消\r\n						{{/if}}				\r\n					</span>\r\n					<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n				</button>\r\n				<ul class="dropdown-menu">\r\n					<li>\r\n						<a data-value="" href="javascript:void(0)">全部</a>\r\n					</li>\r\n					<li>\r\n						<a data-value="0" href="javascript:void(0)">待确认</a>\r\n					</li>\r\n					<li>\r\n						<a data-value="1" href="javascript:void(0)">已发团</a>\r\n					</li>\r\n					<li>\r\n						<a data-value="-1" href="javascript:void(0)">已取消</a>\r\n					</li>\r\n				</ul>\r\n			</div>\r\n		</div>\r\n		<div style="clear:both;height:0;line-height:0;"></div>\r\n	</div>\r\n</div> \r\n<div class="row">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover tripPlanViewList">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>团号</th>\r\n					<th>出团日期</th>\r\n					<th>完团日期</th>\r\n					<th>线路产品</th>\r\n					<th>人数</th>\r\n					<th>团队人数</th>\r\n					<th>导游</th>\r\n					<th>车牌号</th>\r\n					<th>险</th>\r\n					<th>餐</th>\r\n					<th>房</th>\r\n					<th>景</th>\r\n					<th>购</th>\r\n					<th>娱</th>\r\n					<th>票</th>\r\n					<th>状态</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody>\r\n				{{each tripPlanList as tripPlan}}\r\n				<tr>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.tripNumber}}</td>\r\n					{{if tripPlan.tripPlanDetails.length == 0}}\r\n						<td>{{if tripPlan.startTime != null}}{{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n						<td>{{if tripPlan.endTime != null}}{{tripPlan.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n						<td>{{tripPlan.lineProduct.name}}</td>	\r\n						<td>{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n					{{else}}\r\n						{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n							{{if index == 0}}\r\n							<td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.lineProductName}}</td>\r\n							<td>{{tripPlanDetails.sumMemberCount}}</td>	\r\n							{{/if}}\r\n						{{/each}}\r\n					{{/if}}\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.bus != null}} {{tripPlan.bus.licenseNumber}} {{/if}}</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.insuranceStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.restaurantStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.hotelStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.scenicStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.shopStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.selfPayStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.ticketStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle;width:80px;" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n						{{if tripPlan.status == 0}}\r\n						<i class="ace-icon fa fa-question yellow bigger-130"></i>\r\n						待确认\r\n						{{else if tripPlan.status == 1}}\r\n						<i class="ace-icon fa fa-check green bigger-130"></i>\r\n						已发团\r\n						{{else if tripPlan.status == -1}}\r\n						<i class="ace-icon fa fa-times red bigger-125"></i>\r\n						已取消\r\n						{{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle;width:200px" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n						<a data-entiy-id="{{tripPlan.id}}" class="cursor btn-tripPlan-send" title="通知">\r\n							通知\r\n						</a><a href="" class="cursor"> |</a>\r\n						<a data-entiy-id="{{tripPlan.id}}" class="cursor btn-tripPlan-view" title="查看">\r\n							查看\r\n						</a><a href="" class="cursor"> |</a>\r\n						<a data-entiy-id="{{tripPlan.id}}" billStatus="{{tripPlan.billStatus}}" class="cursor btn-tripPlan-plan" title="安排">\r\n							安排\r\n						</a><a href="" class="cursor"> |</a>\r\n                        <a data-entity-id="{{tripPlan.id}}" title="导出安排" class="cursor btn-tripPlan-export">\r\n							导出\r\n						</a>\r\n					</td>\r\n				</tr>\r\n				{{if tripPlan.tripPlanDetails.length > 1}}\r\n					{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n						{{if index>0}}\r\n						<tr>\r\n							<td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.lineProductName}}</td>\r\n							<td>{{tripPlanDetails.sumMemberCount}}</td>	\r\n						</tr>\r\n						{{/if}}\r\n					{{/each}}\r\n				{{/if}}\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n	</div>\r\n</div>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_info" role="status" aria-live="polite">共计 {{recordSize}}  条记录</div>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers">\r\n			<ul class="pagination">\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n					<a class="first" href="javascript:void(0)">首页</a>\r\n				</li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n					<a class="previous"href="javascript:void(0)">上一页</a>\r\n				</li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n					<a href="javascript:void(0)">\r\n						{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n					</a>\r\n				</li>\r\n\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n					<a class="next"  href="javascript:void(0)">下一页</a>\r\n				</li>\r\n				<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n					<a class="last" href="javascript:void(0)">尾页</a>\r\n				</li>\r\n			</ul>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});