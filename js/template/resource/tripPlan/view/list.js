/*TMODJS:{"debug":true,"version":280,"md5":"c7c932dcab081170626643137b2cb064"}*/
define(function(require) {
    return require("../../../template")("resource/tripPlan/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, tripPlanList = $data.tripPlanList, recordSize = ($data.tripPlan, 
            $data.$index, $data.tripPlanDetails, $data.index, $data.recordSize), $out = "";
            return $out += '<div class="search-area globalAdd"> <div class="row form-horizontal search-tripPlanContainer"> <div class="col-xs-2"> <input type="text" name="tripNumber" class="col-xs-12 T-tripChoose" placeholder="团号" value="', 
            $line = 4, $out += $escape(searchParam.tripNumber), $out += '" /> <input type="hidden" name="tripChooseId" value="', 
            $line = 5, $out += $escape(searchParam.tripId), $out += '" /> </div> <div class="col-xs-1"> <input type="text" name="startTime" class="col-xs-12 date-picker" placeholder="出团日期" value="', 
            $line = 8, $out += $escape(searchParam.startTime), $out += '" /> </div> <div class="col-xs-1"> <input type="text" name="realname" class="col-xs-12 T-guideChoose" placeholder="导游" value="', 
            $line = 12, $out += $escape(searchParam.guideName), $out += '" /> <input type="hidden" name="guideChooseId" value="', 
            $line = 13, $out += $escape(searchParam.guideId), $out += '" /> </div> <div class="col-xs-1"> <input type="text" name="licenseNumber" class="col-xs-12 T-busChoose" placeholder="车牌号" value="', 
            $line = 16, $out += $escape(searchParam.busLicenseNumber), $out += '" /> <input type="hidden" name="busChooseId" value="', 
            $line = 17, $out += $escape(searchParam.busId), $out += '" /> </div> <div class="col-xs-2"> <button class=" btn-sm btn-tripPlan-search search-btn"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <div class="btn-group btn-status" style="margin-left: 20px;"> <button data-value="', 
            $line = 24, $out += $escape(searchParam.status), $out += '" name="status" data-toggle="dropdown" class=" btn-sm dropdown-toggle block-up" style="background: #ffffff!important; border: 1px solid #83bbd6!important;" aria-expanded="false"> <span> ', 
            $line = 26, "" == searchParam.status ? ($out += " 全部 ", $line = 28) : 1 == searchParam.status ? ($out += " 已发团 ", 
            $line = 30) : 0 == searchParam.status ? ($out += " 待确认 ", $line = 32) : -1 == searchParam.status && ($out += " 已取消 ", 
            $line = 34), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="0" href="javascript:void(0)">待确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已发团</a> </li> <li> <a data-value="-1" href="javascript:void(0)">已取消</a> </li> </ul> </div> </div> <div style="clear:both;height:0;line-height:0;"></div> </div> </div> <div class="row"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover tripPlanViewList"> <thead> <tr class="bg-blur"> <th>团号</th> <th>出团日期</th> <th>完团日期</th> <th>线路产品</th> <th>人数</th> <th>团队人数</th> <th>导游</th> <th>车牌号</th> <th>险</th> <th>餐</th> <th>房</th> <th>景</th> <th>购</th> <th>娱</th> <th>票</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 82, $each(tripPlanList, function(tripPlan) {
                $out += ' <tr> <td style="vertical-align:middle" ', $line = 84, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 84, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 84), 
                $out += ">", $line = 84, $out += $escape(tripPlan.tripNumber), $out += "</td> ", 
                $line = 85, 0 == tripPlan.tripPlanDetails.length ? ($out += " <td>", $line = 86, 
                null != tripPlan.startTime && ($line = 86, $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), 
                $line = 86), $out += "</td> <td>", $line = 87, null != tripPlan.endTime && ($line = 87, 
                $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), $line = 87), 
                $out += "</td> <td>", $line = 88, $out += $escape(tripPlan.lineProduct.name), $out += "</td> <td>", 
                $line = 89, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
                $out += "</td> ", $line = 90) : ($out += " ", $line = 91, $each(tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 92, 0 == index && ($out += " <td>", $line = 93, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 94, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 95, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 96, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> ", $line = 97), $out += " ", $line = 98;
                }), $out += " ", $line = 99), $out += ' <td style="vertical-align:middle" ', $line = 100, 
                tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 100, $out += $escape(tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 100), $out += ">", $line = 100, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 101, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 101, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 101), 
                $out += ">", $line = 101, null != tripPlan.guide && ($line = 101, $out += $escape(tripPlan.guide.realname), 
                $line = 101), $out += '</td> <td style="vertical-align:middle" ', $line = 102, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 102, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 102), 
                $out += ">", $line = 102, null != tripPlan.bus && ($out += " ", $line = 102, $out += $escape(tripPlan.bus.licenseNumber), 
                $out += " ", $line = 102), $out += '</td> <td style="vertical-align:middle" ', $line = 103, 
                tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 103, $out += $escape(tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 103), $out += ">", $line = 103, 0 == tripPlan.insuranceStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 105) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 107), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 109, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 109, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 109), 
                $out += ">", $line = 109, 0 == tripPlan.restaurantStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 111) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 113), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 115, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 115, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 115), 
                $out += ">", $line = 115, 0 == tripPlan.hotelStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 117) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 119), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 121, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 121, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 121), 
                $out += ">", $line = 121, 0 == tripPlan.scenicStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 123) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 125), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 127, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 127, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 127), 
                $out += ">", $line = 127, 0 == tripPlan.shopStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 129) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 131), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 133, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 133, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 133), 
                $out += ">", $line = 133, 0 == tripPlan.selfPayStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 135) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 137), 
                $out += ' </td> <td style="vertical-align:middle" ', $line = 139, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 139, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 139), 
                $out += ">", $line = 139, 0 == tripPlan.ticketStatus ? ($out += ' <i class="ace-icon fa fa-times red"></i> ', 
                $line = 141) : ($out += ' <i class="ace-icon fa fa-check green"></i> ', $line = 143), 
                $out += ' </td> <td style="vertical-align:middle;width:80px;" ', $line = 145, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 145, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 145), 
                $out += "> ", $line = 146, 0 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-question yellow bigger-130"></i> 待确认 ', 
                $line = 149) : 1 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已发团 ', 
                $line = 152) : -1 == tripPlan.status && ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已取消 ', 
                $line = 155), $out += ' </td> <td style="vertical-align:middle;width:200px" ', $line = 157, 
                tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 157, $out += $escape(tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 157), $out += '> <a data-entiy-id="', $line = 158, $out += $escape(tripPlan.id), 
                $out += '" class="cursor btn-tripPlan-send R-right" data-right="1140010" title="通知"> 通知 <label style="padding-left:10px;">|</label> </a> <a data-entiy-id="', 
                $line = 162, $out += $escape(tripPlan.id), $out += '" class="cursor btn-tripPlan-view" title="查看"> 查看 </a> <a data-entiy-id="', 
                $line = 165, $out += $escape(tripPlan.id), $out += '" billStatus="', $line = 165, 
                $out += $escape(tripPlan.billStatus), $out += '" class="cursor btn-tripPlan-plan R-right" data-right="1140007" title="安排"> <label class="padding-right20">|</label> 安排 </a> <a data-entity-id="', 
                $line = 169, $out += $escape(tripPlan.id), $out += '" title="导出安排" class="cursor btn-tripPlan-export R-right" data-right="1140008"> <label class="padding-right20">|</label> 导出 </a> </td> </tr> ', 
                $line = 175, tripPlan.tripPlanDetails.length > 1 && ($out += " ", $line = 176, $each(tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 177, index > 0 && ($out += " <tr> <td>", $line = 179, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 180, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 181, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 182, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> </tr> ", $line = 184), $out += " ", $line = 185;
                }), $out += " ", $line = 186), $out += " ", $line = 187;
            }), $out += ' </tbody> </table> </div> </div> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 194, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="search-area globalAdd">\r\n	<div class="row form-horizontal search-tripPlanContainer">\r\n		<div class="col-xs-2">\r\n			<input type="text" name="tripNumber" class="col-xs-12 T-tripChoose" placeholder="团号" value="{{searchParam.tripNumber}}" />\r\n			<input type="hidden" name="tripChooseId" value="{{searchParam.tripId}}" />\r\n		</div>\r\n		<div class="col-xs-1">\r\n			<input type="text" name="startTime" class="col-xs-12 date-picker" placeholder="出团日期" value="{{searchParam.startTime}}" />\r\n\r\n		</div>\r\n		<div class="col-xs-1">\r\n			<input type="text" name="realname" class="col-xs-12 T-guideChoose" placeholder="导游" value="{{searchParam.guideName}}" />\r\n			<input type="hidden" name="guideChooseId" value="{{searchParam.guideId}}" />\r\n		</div>\r\n		<div class="col-xs-1">\r\n			<input type="text" name="licenseNumber" class="col-xs-12 T-busChoose" placeholder="车牌号" value="{{searchParam.busLicenseNumber}}" />\r\n			<input type="hidden" name="busChooseId" value="{{searchParam.busId}}" />\r\n		</div>\r\n		<div class="col-xs-2">\r\n			<button class=" btn-sm  btn-tripPlan-search search-btn">\r\n				<i class="ace-icon fa fa-search"></i> 搜索\r\n			</button>\r\n			<div class="btn-group btn-status" style="margin-left: 20px;">\r\n				<button data-value="{{searchParam.status}}" name="status" data-toggle="dropdown" class=" btn-sm  dropdown-toggle block-up" style="background: #ffffff!important; border: 1px solid #83bbd6!important;" aria-expanded="false">\r\n					<span>\r\n						{{if searchParam.status == ""}}   \r\n							全部\r\n						{{else if searchParam.status == 1}}\r\n							已发团\r\n						{{else if searchParam.status == 0}}\r\n							待确认\r\n						{{else if searchParam.status == -1}}\r\n							已取消\r\n						{{/if}}				\r\n					</span>\r\n					<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n				</button>\r\n				<ul class="dropdown-menu">\r\n					<li>\r\n						<a data-value="" href="javascript:void(0)">全部</a>\r\n					</li>\r\n					<li>\r\n						<a data-value="0" href="javascript:void(0)">待确认</a>\r\n					</li>\r\n					<li>\r\n						<a data-value="1" href="javascript:void(0)">已发团</a>\r\n					</li>\r\n					<li>\r\n						<a data-value="-1" href="javascript:void(0)">已取消</a>\r\n					</li>\r\n				</ul>\r\n			</div>\r\n		</div>\r\n		<div style="clear:both;height:0;line-height:0;"></div>\r\n	</div>\r\n</div> \r\n<div class="row">\r\n	<div class="col-xs-12">\r\n		<table class="table table-striped table-bordered table-hover tripPlanViewList">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>团号</th>\r\n					<th>出团日期</th>\r\n					<th>完团日期</th>\r\n					<th>线路产品</th>\r\n					<th>人数</th>\r\n					<th>团队人数</th>\r\n					<th>导游</th>\r\n					<th>车牌号</th>\r\n					<th>险</th>\r\n					<th>餐</th>\r\n					<th>房</th>\r\n					<th>景</th>\r\n					<th>购</th>\r\n					<th>娱</th>\r\n					<th>票</th>\r\n					<th>状态</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody>\r\n				{{each tripPlanList as tripPlan}}\r\n				<tr>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.tripNumber}}</td>\r\n					{{if tripPlan.tripPlanDetails.length == 0}}\r\n						<td>{{if tripPlan.startTime != null}}{{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n						<td>{{if tripPlan.endTime != null}}{{tripPlan.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n						<td>{{tripPlan.lineProduct.name}}</td>	\r\n						<td>{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n					{{else}}\r\n						{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n							{{if index == 0}}\r\n							<td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.lineProductName}}</td>\r\n							<td>{{tripPlanDetails.sumMemberCount}}</td>	\r\n							{{/if}}\r\n						{{/each}}\r\n					{{/if}}\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.bus != null}} {{tripPlan.bus.licenseNumber}} {{/if}}</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.insuranceStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.restaurantStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.hotelStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.scenicStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.shopStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.selfPayStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.ticketStatus == 0}}\r\n					        <i class="ace-icon fa fa-times red"></i>\r\n					    {{else}}\r\n					        <i class="ace-icon fa fa-check green"></i>\r\n					    {{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle;width:80px;" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n						{{if tripPlan.status == 0}}\r\n						<i class="ace-icon fa fa-question yellow bigger-130"></i>\r\n						待确认\r\n						{{else if tripPlan.status == 1}}\r\n						<i class="ace-icon fa fa-check green bigger-130"></i>\r\n						已发团\r\n						{{else if tripPlan.status == -1}}\r\n						<i class="ace-icon fa fa-times red bigger-125"></i>\r\n						已取消\r\n						{{/if}}\r\n					</td>\r\n					<td style="vertical-align:middle;width:200px" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n						<a data-entiy-id="{{tripPlan.id}}" class="cursor btn-tripPlan-send R-right" data-right="1140010" title="通知">\r\n							通知\r\n							<label style="padding-left:10px;">|</label>\r\n						</a>\r\n						<a data-entiy-id="{{tripPlan.id}}" class="cursor btn-tripPlan-view" title="查看">\r\n							查看\r\n						</a>\r\n						<a data-entiy-id="{{tripPlan.id}}" billStatus="{{tripPlan.billStatus}}" class="cursor btn-tripPlan-plan R-right" data-right="1140007" title="安排">\r\n							<label class="padding-right20">|</label>\r\n							安排\r\n						</a>\r\n                        <a data-entity-id="{{tripPlan.id}}" title="导出安排" class="cursor btn-tripPlan-export R-right" data-right="1140008">\r\n							<label class="padding-right20">|</label>\r\n							导出\r\n						</a>\r\n					</td>\r\n				</tr>\r\n				{{if tripPlan.tripPlanDetails.length > 1}}\r\n					{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n						{{if index>0}}\r\n						<tr>\r\n							<td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.lineProductName}}</td>\r\n							<td>{{tripPlanDetails.sumMemberCount}}</td>	\r\n						</tr>\r\n						{{/if}}\r\n					{{/each}}\r\n				{{/if}}\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n	</div>\r\n</div>\r\n<div class="row pageMode">\r\n	<div class="col-xs-6">\r\n		<small>共计 {{recordSize}} 条记录</small>\r\n	</div>\r\n	<div class="col-xs-6">\r\n		<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});