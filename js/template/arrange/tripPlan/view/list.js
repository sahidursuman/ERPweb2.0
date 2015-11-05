/*TMODJS:{"debug":true,"version":809,"md5":"2ead5ba0c5926bda17cd36540d6f4e24"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, tripPlanList = $data.tripPlanList, recordSize = ($data.tripPlan, 
            $data.$index, $data.tripPlanDetails, $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row"> <div class="col-xs-12 tripPlanMain globalAdd"> <div class="form-group"> <div class="search-area clearfix"> <div class="col-xs-2" style="width:220px;"> <input type="text" name="tripNumber" class="col-xs-12 tripChoosePlan guideInputList" placeholder="团号" value="', 
            $line = 6, $out += $escape(searchParam.tripNumber), $out += '" /> <input type="hidden" name="tripChoosePlanId" value="', 
            $line = 7, $out += $escape(searchParam.tripId), $out += '" /> </div> <div class="col-xs-2 timeStart" style="margin:0 15px;"> <div class="col-xs-8"> <div class="input-group"> <input class="col-xs-12 date-picker triplanStartTime" name="startTime" placeholder="出团日期" value="', 
            $line = 13, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-1"> <input type="text" name="realname" class="col-xs-12 T-guideChoose Choose-spacing" placeholder="导游" value="', 
            $line = 21, $out += $escape(searchParam.guideName), $out += '" /> <input type="hidden" name="guideChooseId" value="', 
            $line = 22, $out += $escape(searchParam.guideId), $out += '" /> </div> <div class="col-xs-1"> <input type="text" name="licenseNumber" class="col-xs-12 T-busChoose Choose-spacing" placeholder="车牌号" value="', 
            $line = 25, $out += $escape(searchParam.busLicenseNumber), $out += '" /> <input type="hidden" name="busChooseId" value="', 
            $line = 26, $out += $escape(searchParam.busId), $out += '" /> </div> <div class="col-xs-1"> <input type="text" name="creator" class="col-xs-12 T-creatorChoose Choose-spacing" placeholder="创建人" value="', 
            $line = 29, $out += $escape(searchParam.creatorName), $out += '" /> <input type="hidden" name="creatorChooseId" value="', 
            $line = 30, $out += $escape(searchParam.creator), $out += '" /> </div> <div class="col-sm-2" style="width:250px;"> <div class="btn-group btn-status"> <button data-value="', 
            $line = 34, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class="btn-sm dropdown-toggle block-up Choose-spacing" aria-expanded="false"> <span> ', 
            $line = 36, "-1" == searchParam.status ? ($out += " 已取消 ", $line = 38) : "0" == searchParam.status ? ($out += " 待确认 ", 
            $line = 40) : "1" == searchParam.status ? ($out += " 已发团 ", $line = 42) : ($out += " 全部 ", 
            $line = 44), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="-1" href="javascript:void(0)">已取消</a> </li> <li> <a data-value="0" href="javascript:void(0)">待确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已发团</a> </li> </ul> </div> <button class=" btn-sm btn-tripPlan-search search-btn triplan-searchBtn" style="margin-left: -40px; width:75px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <button class="btn btn-sm btn-success btn-Plan-add R-right pull-left newSearchBtn" style="width:120px;" data-right="1140002"> <i class="ace-icon fa fa-plus"></i> 新增发团计划 </button> </div> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th>团号</th> <th>出团日期</th> <th>完团日期</th> <th >线路产品</th> <th>人数</th> <th>团队人数</th> <th>导游</th> <th>车牌号</th> <th>剩余座位</th> <th>创建人</th> <th>创建时间</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody> ', 
            $line = 94, $each(tripPlanList, function(tripPlan) {
                $out += ' <tr data-entity-id="', $line = 95, $out += $escape(tripPlan.id), $out += '"> <td style="vertical-align:middle" ', 
                $line = 96, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 96, 
                $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 96), $out += ">", 
                $line = 96, $out += $escape(tripPlan.tripNumber), $out += "</td> ", $line = 97, 
                tripPlan.tripPlanDetails.length < 2 ? ($out += " <td>", $line = 98, null != tripPlan.startTime && ($line = 98, 
                $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), $line = 98), 
                $out += "</td> <td>", $line = 99, null != tripPlan.endTime && ($line = 99, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
                $line = 99), $out += "</td> <td>", $line = 100, $out += $escape(tripPlan.lineProduct.name), 
                $out += "</td> <td>", $line = 101, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
                $out += "</td> ", $line = 102) : ($out += " ", $line = 103, $each(tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 104, 0 == index && ($out += " <td>", $line = 105, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 106, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 107, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 108, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> ", $line = 109), $out += " ", $line = 110;
                }), $out += " ", $line = 111), $out += ' <td style="vertical-align:middle" ', $line = 112, 
                tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 112, $out += $escape(tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 112), $out += ">", $line = 112, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 113, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 113, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 113), 
                $out += ">", $line = 113, null != tripPlan.guide && ($line = 113, $out += $escape(tripPlan.guide.realname), 
                $line = 113), $out += '</td> <td style="vertical-align:middle" ', $line = 114, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 114, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 114), 
                $out += ">", $line = 114, null != tripPlan.bus && ($line = 114, $out += $escape(tripPlan.bus.licenseNumber), 
                $line = 114), $out += '</td> <td style="vertical-align:middle" ', $line = 115, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 115, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 115), 
                $out += ">", $line = 115, $out += $escape(tripPlan.surplusSeat), $out += '</td> <td style="vertical-align:middle" ', 
                $line = 116, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 116, 
                $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 116), $out += ">", 
                $line = 116, null != tripPlan.user && ($line = 116, $out += $escape(tripPlan.user.realName), 
                $line = 116), $out += '</td> <td style="vertical-align:middle" ', $line = 117, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 117, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 117), 
                $out += ">", $line = 117, $out += $escape(tripPlan.createTime), $out += '</td> <td style="vertical-align:middle;width:80px" ', 
                $line = 118, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 118, 
                $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 118), $out += "> ", 
                $line = 119, -1 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已取消 ', 
                $line = 122) : 0 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-question yellow bigger-130" ></i> 待确认 ', 
                $line = 125) : 1 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已发团 ', 
                $line = 128) : 2 == tripPlan.status && ($out += ' <i class="ace-icon fa fa-clock-o red bigger-130"></i> 已过期 ', 
                $line = 131), $out += ' </td> <td style="vertical-align:middle;width:240px;" ', 
                $line = 133, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 133, 
                $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 133), $out += '> <a data-entity-id="', 
                $line = 134, $out += $escape(tripPlan.id), $out += '" billStatus="', $line = 134, 
                $out += $escape(tripPlan.billStatus), $out += '" statusValue="', $line = 134, $out += $escape(tripPlan.status), 
                $out += '" title="确认发团" class="', $line = 134, -1 != tripPlan.status && 2 != tripPlan.status && ($out += "btn-Plan-confirm", 
                $line = 134), $out += ' cursor R-right" data-right="1140006" ', $line = 134, (-1 == tripPlan.status || 2 == tripPlan.status) && ($out += ' style="color:#bbb;"', 
                $line = 134), $out += '> 确认 <label style="padding-left:10px;">|</label> </a> <a data-entity-id="', 
                $line = 138, $out += $escape(tripPlan.id), $out += '" title="查看计划" class="btn-Plan-view cursor"> 查看 </a> <a data-entity-id="', 
                $line = 141, $out += $escape(tripPlan.id), $out += '" billStatus="', $line = 141, 
                $out += $escape(tripPlan.billStatus), $out += '" title="编辑计划" class="', $line = 141, 
                -1 != tripPlan.status && ($out += "btn-Plan-edit", $line = 141), $out += ' cursor R-right" data-right="1140003" ', 
                $line = 141, -1 == tripPlan.status && ($out += ' style="color:#bbb;"', $line = 141), 
                $out += '> <label class="padding-right20">|</label> 编辑 </a> <a data-entity-id="', 
                $line = 145, $out += $escape(tripPlan.id), $out += '" title="导出计划" class="btn-Plan-export cursor R-right" data-right="1140008"> <label class="padding-right20">|</label> 导出 </a> <a data-entity-id="', 
                $line = 149, $out += $escape(tripPlan.id), $out += '" billStatus="', $line = 149, 
                $out += $escape(tripPlan.billStatus), $out += '" title="取消计划" class="', $line = 149, 
                -1 != tripPlan.status && ($out += "btn-Plan-cancel", $line = 149), $out += ' cursor R-right" data-right="1140004" ', 
                $line = 149, -1 == tripPlan.status && ($out += ' style="color:#bbb;"', $line = 149), 
                $out += '> <label class="padding-right20">|</label> 取消 </a> </td> </tr> ', $line = 156, 
                tripPlan.tripPlanDetails.length > 1 && ($out += " ", $line = 157, $each(tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 158, index > 0 && ($out += " <tr> <td>", $line = 160, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 161, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 162, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 163, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> </tr> ", $line = 166), $out += " ", $line = 167;
                }), $out += " ", $line = 168), $out += " ", $line = 169;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 175, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12 tripPlanMain globalAdd">\r\n	  <div class="form-group">\r\n		<div class="search-area clearfix">\r\n			<div class="col-xs-2" style="width:220px;">\r\n				<input type="text" name="tripNumber" class="col-xs-12 tripChoosePlan guideInputList" placeholder="团号" value="{{searchParam.tripNumber}}" />\r\n				<input type="hidden" name="tripChoosePlanId" value="{{searchParam.tripId}}" />\r\n			</div>\r\n\r\n			<div class="col-xs-2 timeStart" style="margin:0 15px;">\r\n				<div class="col-xs-8">\r\n					<div class="input-group">\r\n						<input class="col-xs-12 date-picker triplanStartTime" name="startTime" placeholder="出团日期" value="{{searchParam.startTime}}" type="text"  />\r\n						<span class="input-group-addon">\r\n							<i class="fa fa-calendar"></i>\r\n						</span>\r\n					</div> \r\n				</div>\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="realname" class="col-xs-12 T-guideChoose Choose-spacing" placeholder="导游" value="{{searchParam.guideName}}" />\r\n				<input type="hidden" name="guideChooseId" value="{{searchParam.guideId}}" />\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="licenseNumber" class="col-xs-12 T-busChoose Choose-spacing" placeholder="车牌号" value="{{searchParam.busLicenseNumber}}" />\r\n				<input type="hidden" name="busChooseId" value="{{searchParam.busId}}" />\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="creator" class="col-xs-12 T-creatorChoose Choose-spacing" placeholder="创建人" value="{{searchParam.creatorName}}" />\r\n				<input type="hidden" name="creatorChooseId" value="{{searchParam.creator}}" />\r\n			</div>\r\n			<div class="col-sm-2" style="width:250px;">\r\n				<div class="btn-group btn-status">\r\n					<button data-value="{{searchParam.status}}" data-toggle="dropdown" class="btn-sm  dropdown-toggle block-up Choose-spacing" aria-expanded="false">\r\n						<span>\r\n							{{if searchParam.status == "-1"}}\r\n								已取消\r\n							{{else if searchParam.status == "0"}}\r\n								待确认\r\n							{{else if searchParam.status == "1"}}\r\n								已发团\r\n							{{else}}\r\n								全部\r\n							{{/if}}\r\n						</span>\r\n						<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n					</button>\r\n					<ul class="dropdown-menu">\r\n						<li>\r\n							<a data-value="" href="javascript:void(0)">全部</a>\r\n						</li>\r\n						<li>\r\n							<a data-value="-1" href="javascript:void(0)">已取消</a>\r\n						</li>\r\n						<li>\r\n							<a data-value="0" href="javascript:void(0)">待确认</a>\r\n						</li>\r\n						<li>\r\n							<a data-value="1" href="javascript:void(0)">已发团</a>\r\n						</li>\r\n					</ul>\r\n				</div>\r\n\r\n				<button class=" btn-sm  btn-tripPlan-search search-btn triplan-searchBtn" style="margin-left: -40px; width:75px;">\r\n					<i class="ace-icon fa fa-search"></i>\r\n					搜索\r\n				</button>\r\n			</div>\r\n			<button class="btn btn-sm btn-success btn-Plan-add R-right pull-left newSearchBtn" style="width:120px;" data-right="1140002"> \r\n			<i class="ace-icon fa fa-plus"></i> \r\n			新增发团计划\r\n		   </button>\r\n		</div>\r\n		</div>\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>团号</th>\r\n					<th>出团日期</th>\r\n					<th>完团日期</th>\r\n					<th >线路产品</th>\r\n					<th>人数</th>\r\n					<th>团队人数</th>\r\n					<th>导游</th>\r\n					<th>车牌号</th>\r\n					<th>剩余座位</th>\r\n					<th>创建人</th>\r\n					<th>创建时间</th>\r\n					<th>状态</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody>\r\n				{{each tripPlanList as tripPlan}}\r\n					<tr data-entity-id="{{tripPlan.id}}">\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.tripNumber}}</td>\r\n						{{if tripPlan.tripPlanDetails.length  < 2}}\r\n							<td>{{if tripPlan.startTime != null}}{{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n							<td>{{if tripPlan.endTime != null}}{{tripPlan.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n							<td>{{tripPlan.lineProduct.name}}</td>\r\n							<td>{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n						{{else}}\r\n							{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n								{{if index == 0}}\r\n								<td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n								<td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n								<td>{{tripPlanDetails.lineProductName}}</td>\r\n								<td>{{tripPlanDetails.sumMemberCount}}</td>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{/if}}\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</td>\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.bus!=null}}{{tripPlan.bus.licenseNumber}}{{/if}}</td>\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.surplusSeat}}</td>\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.user!=null}}{{tripPlan.user.realName}}{{/if}}</td>\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.createTime}}</td>\r\n						<td style="vertical-align:middle;width:80px" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n						    {{if tripPlan.status == -1}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已取消\r\n							{{else if tripPlan.status == 0}}\r\n							<i class="ace-icon fa fa-question yellow bigger-130" ></i>\r\n								待确认\r\n							{{else if tripPlan.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已发团\r\n							{{else if tripPlan.status == 2}}\r\n							<i class="ace-icon fa fa-clock-o red bigger-130"></i>\r\n								已过期\r\n							{{/if}}\r\n						</td>\r\n						<td style="vertical-align:middle;width:240px;" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n							<a data-entity-id="{{tripPlan.id}}" billStatus="{{tripPlan.billStatus}}" statusValue="{{tripPlan.status}}" title="确认发团" class="{{if tripPlan.status != -1 && tripPlan.status != 2}}btn-Plan-confirm{{/if}} cursor R-right" data-right="1140006" {{if tripPlan.status == -1 || tripPlan.status == 2}} style="color:#bbb;"{{/if}}>\r\n								确认\r\n								<label style="padding-left:10px;">|</label>\r\n							</a>\r\n							<a data-entity-id="{{tripPlan.id}}" title="查看计划" class="btn-Plan-view cursor">\r\n								查看\r\n							</a>\r\n						    <a data-entity-id="{{tripPlan.id}}" billStatus="{{tripPlan.billStatus}}" title="编辑计划" class="{{if tripPlan.status != -1}}btn-Plan-edit{{/if}} cursor R-right" data-right="1140003" {{if tripPlan.status == -1}} style="color:#bbb;"{{/if}}>\r\n								<label class="padding-right20">|</label>\r\n								编辑\r\n							</a>\r\n							<a data-entity-id="{{tripPlan.id}}" title="导出计划" class="btn-Plan-export cursor R-right" data-right="1140008">\r\n								<label class="padding-right20">|</label>\r\n								导出\r\n							</a>\r\n							<a data-entity-id="{{tripPlan.id}}" billStatus="{{tripPlan.billStatus}}" title="取消计划" class="{{if tripPlan.status != -1}}btn-Plan-cancel{{/if}} cursor R-right" data-right="1140004" {{if tripPlan.status == -1}} style="color:#bbb;"{{/if}}>\r\n								<label class="padding-right20">|</label>\r\n								取消\r\n							</a>\r\n						</td>\r\n					</tr>\r\n\r\n					{{if tripPlan.tripPlanDetails.length > 1}}\r\n					{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n						{{if index>0}}\r\n						<tr>\r\n							<td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.lineProductName}}</td>\r\n							<td>{{tripPlanDetails.sumMemberCount}}</td>\r\n						</tr>\r\n\r\n						{{/if}}\r\n					{{/each}}\r\n					{{/if}}\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});