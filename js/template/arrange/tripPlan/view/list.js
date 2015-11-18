/*TMODJS:{"debug":true,"version":844,"md5":"442fbe163a2c2f13a9600c7b859b9145"}*/
define(function(require) {
    return require("../../../template")("arrange/tripPlan/view/list", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, tripPlanList = $data.tripPlanList, recordSize = ($data.tripPlan, 
            $data.$index, $data.tripPlanDetails, $data.index, $data.recordSize), $out = "";
            return $out += '<div class="row"> <div class="col-xs-12 tripPlanMain globalAdd"> <div class="form-group"> <div class="T-search-area clearfix"> <div class="col-xs-2" style="width:220px;"> <input type="text" name="tripNumber" class="col-xs-12 T-choosePlan guideInputList" placeholder="团号" value="', 
            $line = 6, $out += $escape(searchParam.tripNumber), $out += '" /> <input type="hidden" name="tripId" value="', 
            $line = 7, $out += $escape(searchParam.tripId), $out += '" /> </div> <div class="col-xs-2 timeStart" style="margin:0 15px;"> <div class="col-xs-8"> <div class="input-group"> <input class="col-xs-12 date-picker triplanStartTime" name="startTime" placeholder="出团日期" value="', 
            $line = 13, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-1"> <input type="text" name="guideName" class="col-xs-12 T-chooseGuide Choose-spacing" placeholder="导游" value="', 
            $line = 21, $out += $escape(searchParam.guideName), $out += '" /> <input type="hidden" name="guideId" value="', 
            $line = 22, $out += $escape(searchParam.guideId), $out += '" /> </div> <div class="col-xs-1"> <input type="text" name="licenseNumber" class="col-xs-12 T-chooseBus Choose-spacing" placeholder="车牌号" value="', 
            $line = 25, $out += $escape(searchParam.busLicenseNumber), $out += '" /> <input type="hidden" name="busId" value="', 
            $line = 26, $out += $escape(searchParam.busId), $out += '" /> </div> <div class="col-xs-1"> <input type="text" name="creator" class="col-xs-12 T-chooseCreator Choose-spacing" placeholder="创建人" value="', 
            $line = 29, $out += $escape(searchParam.creatorName), $out += '" /> <input type="hidden" name="creatorId" value="', 
            $line = 30, $out += $escape(searchParam.creator), $out += '" /> </div> <div class="pull-left"> <div class="btn-group T-status"> <button data-value="', 
            $line = 35, $out += $escape(searchParam.status), $out += '" data-toggle="dropdown" class="btn-sm dropdown-toggle block-up Choose-spacing" aria-expanded="false"> <span> ', 
            $line = 37, "-1" == searchParam.status ? ($out += " 已取消 ", $line = 39) : "0" == searchParam.status ? ($out += " 待确认 ", 
            $line = 41) : "1" == searchParam.status ? ($out += " 已发团 ", $line = 43) : ($out += " 全部 ", 
            $line = 45), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu triplan-dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="-1" href="javascript:void(0)">已取消</a> </li> <li> <a data-value="0" href="javascript:void(0)">待确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已发团</a> </li>  </ul> </div> <button class=" btn-sm search-btn T-search" style="margin-left: -40px; width:75px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <button class="btn btn-sm btn-success T-addPlan R-right pull-left newSearchBtn" style="width:120px;" data-right="1140002"> <i class="ace-icon fa fa-plus"></i> 新增发团计划 </button> </div> </div> <table class="table table-striped table-bordered table-hover T-NotShowHighLight"> <thead> <tr class="bg-blur"> <th>团号</th> <th>出团日期</th> <th>完团日期</th> <th >线路产品</th> <th>人数</th> <th>团队人数</th> <th>导游</th> <th>车牌号</th> <th>剩余座位</th> <th>创建人</th> <th>创建时间</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-planList"> ', 
            $line = 98, $each(tripPlanList, function(tripPlan) {
                $out += ' <tr data-id="', $line = 99, $out += $escape(tripPlan.id), $out += '"> <td style="vertical-align:middle" ', 
                $line = 100, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 100, 
                $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 100), $out += ">", 
                $line = 100, $out += $escape(tripPlan.tripNumber), $out += "</td> ", $line = 101, 
                tripPlan.tripPlanDetails.length < 2 ? ($out += " <td>", $line = 102, null != tripPlan.startTime && ($line = 102, 
                $out += $escape($helpers.dateFormat(tripPlan.startTime, "yyyy-MM-dd")), $line = 102), 
                $out += "</td> <td>", $line = 103, null != tripPlan.endTime && ($line = 103, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
                $line = 103), $out += "</td> <td>", $line = 104, $out += $escape(tripPlan.lineProduct.name), 
                $out += "</td> <td>", $line = 105, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
                $out += "</td> ", $line = 106) : ($out += " ", $line = 107, $each(tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 108, 0 == index && ($out += " <td>", $line = 109, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 110, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 111, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 112, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> ", $line = 113), $out += " ", $line = 114;
                }), $out += " ", $line = 115), $out += ' <td style="vertical-align:middle" ', $line = 116, 
                tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 116, $out += $escape(tripPlan.tripPlanDetails.length), 
                $out += '"', $line = 116), $out += ">", $line = 116, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle" ', $line = 117, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 117, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 117), 
                $out += ">", $line = 117, null != tripPlan.guide && ($line = 117, $out += $escape(tripPlan.guide.realname), 
                $line = 117), $out += '</td> <td style="vertical-align:middle" ', $line = 118, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 118, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 118), 
                $out += ">", $line = 118, null != tripPlan.bus && ($line = 118, $out += $escape(tripPlan.bus.licenseNumber), 
                $line = 118), $out += '</td> <td style="vertical-align:middle" ', $line = 119, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 119, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 119), 
                $out += ">", $line = 119, $out += $escape(tripPlan.surplusSeat), $out += '</td> <td style="vertical-align:middle" ', 
                $line = 120, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 120, 
                $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 120), $out += ">", 
                $line = 120, null != tripPlan.user && ($line = 120, $out += $escape(tripPlan.user.realName), 
                $line = 120), $out += '</td> <td style="vertical-align:middle" ', $line = 121, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', 
                $line = 121, $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 121), 
                $out += ">", $line = 121, $out += $escape(tripPlan.createTime), $out += '</td> <td style="vertical-align:middle;width:80px" ', 
                $line = 122, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 122, 
                $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 122), $out += "> ", 
                $line = 123, -1 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已取消 ', 
                $line = 126) : 0 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-question yellow bigger-130" ></i> 待确认 ', 
                $line = 129) : 1 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已发团 ', 
                $line = 132) : 2 == tripPlan.status && ($out += ' <i class="ace-icon fa fa-clock-o red bigger-130"></i> 已过期 ', 
                $line = 135), $out += ' </td> <td style="vertical-align:middle;width:240px;" ', 
                $line = 137, tripPlan.tripPlanDetails.length > 1 && ($out += 'rowspan="', $line = 137, 
                $out += $escape(tripPlan.tripPlanDetails.length), $out += '"', $line = 137), $out += '> <a billStatus="', 
                $line = 138, $out += $escape(tripPlan.billStatus), $out += '" statusValue="', $line = 138, 
                $out += $escape(tripPlan.status), $out += '" title="确认发团" class="', $line = 138, 
                -1 != tripPlan.status && 2 != tripPlan.status && ($out += "T-option T-confirm", 
                $line = 138), $out += ' cursor R-right" data-right="1140006" ', $line = 138, (-1 == tripPlan.status || 2 == tripPlan.status) && ($out += ' style="color:#bbb;"', 
                $line = 138), $out += '> 确认 <label style="padding-left:10px;">|</label> </a> <a title="查看计划" class="T-option T-view cursor"> 查看 </a> <a billStatus="', 
                $line = 145, $out += $escape(tripPlan.billStatus), $out += '" title="编辑计划" class="', 
                $line = 145, -1 != tripPlan.status && ($out += "T-option T-update", $line = 145), 
                $out += ' cursor R-right" data-right="1140003" ', $line = 145, -1 == tripPlan.status && ($out += ' style="color:#bbb;"', 
                $line = 145), $out += '> <label class="padding-right20">|</label> 编辑 </a> <a title="导出计划" class="T-option T-export cursor R-right" data-right="1140008"> <label class="padding-right20">|</label> 导出 </a> <a billStatus="', 
                $line = 153, $out += $escape(tripPlan.billStatus), $out += '" title="取消计划" class="', 
                $line = 153, -1 != tripPlan.status && ($out += "T-option T-cancel", $line = 153), 
                $out += ' cursor R-right" data-right="1140004" ', $line = 153, -1 == tripPlan.status && ($out += ' style="color:#bbb;"', 
                $line = 153), $out += '> <label class="padding-right20">|</label> 取消 </a> </td> </tr> ', 
                $line = 160, tripPlan.tripPlanDetails.length > 1 && ($out += " ", $line = 161, $each(tripPlan.tripPlanDetails, function(tripPlanDetails, index) {
                    $out += " ", $line = 162, index > 0 && ($out += " <tr> <td>", $line = 164, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 165, $out += $escape($helpers.dateFormat(tripPlanDetails.endTime, "yyyy-MM-dd")), 
                    $out += "</td> <td>", $line = 166, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td> <td>", $line = 167, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td> </tr> ", $line = 170), $out += " ", $line = 171;
                }), $out += " ", $line = 172), $out += " ", $line = 173;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 179, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12 tripPlanMain globalAdd">\r\n	  <div class="form-group">\r\n		<div class="T-search-area clearfix">\r\n			<div class="col-xs-2" style="width:220px;">\r\n				<input type="text" name="tripNumber" class="col-xs-12 T-choosePlan guideInputList" placeholder="团号" value="{{searchParam.tripNumber}}" />\r\n				<input type="hidden" name="tripId" value="{{searchParam.tripId}}" />\r\n			</div>\r\n\r\n			<div class="col-xs-2 timeStart" style="margin:0 15px;">\r\n				<div class="col-xs-8">\r\n					<div class="input-group">\r\n						<input class="col-xs-12 date-picker triplanStartTime" name="startTime" placeholder="出团日期" value="{{searchParam.startTime}}" type="text"  />\r\n						<span class="input-group-addon">\r\n							<i class="fa fa-calendar"></i>\r\n						</span>\r\n					</div> \r\n				</div>\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="guideName" class="col-xs-12 T-chooseGuide Choose-spacing" placeholder="导游" value="{{searchParam.guideName}}" />\r\n				<input type="hidden" name="guideId" value="{{searchParam.guideId}}" />\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="licenseNumber" class="col-xs-12 T-chooseBus Choose-spacing" placeholder="车牌号" value="{{searchParam.busLicenseNumber}}" />\r\n				<input type="hidden" name="busId" value="{{searchParam.busId}}" />\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="creator" class="col-xs-12 T-chooseCreator Choose-spacing" placeholder="创建人" value="{{searchParam.creatorName}}" />\r\n				<input type="hidden" name="creatorId" value="{{searchParam.creator}}" />\r\n			</div>\r\n\r\n			<div class="pull-left">\r\n				<div class="btn-group T-status">\r\n					<button data-value="{{searchParam.status}}" data-toggle="dropdown" class="btn-sm  dropdown-toggle block-up Choose-spacing" aria-expanded="false">\r\n						<span>\r\n							{{if searchParam.status == "-1"}}\r\n								已取消\r\n							{{else if searchParam.status == "0"}}\r\n								待确认\r\n							{{else if searchParam.status == "1"}}\r\n								已发团\r\n							{{else}}\r\n								全部\r\n							{{/if}}\r\n						</span>\r\n						<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n					</button>\r\n					<ul class="dropdown-menu triplan-dropdown-menu">\r\n						<li>\r\n							<a data-value="" href="javascript:void(0)">全部</a>\r\n						</li>\r\n						<li>\r\n							<a data-value="-1" href="javascript:void(0)">已取消</a>\r\n						</li>\r\n						<li>\r\n							<a data-value="0" href="javascript:void(0)">待确认</a>\r\n						</li>\r\n						<li>\r\n							<a data-value="1" href="javascript:void(0)">已发团</a>\r\n						</li>\r\n						<!-- <li>\r\n							<a data-value="2" href="javascript:void(0)">已过期</a>\r\n						</li> -->\r\n					</ul>\r\n				</div>\r\n\r\n				<button class=" btn-sm search-btn T-search" style="margin-left: -40px; width:75px;">\r\n					<i class="ace-icon fa fa-search"></i>\r\n					搜索\r\n				</button>\r\n			</div>\r\n			<button class="btn btn-sm btn-success T-addPlan R-right pull-left newSearchBtn" style="width:120px;" data-right="1140002"> \r\n			<i class="ace-icon fa fa-plus"></i> \r\n			新增发团计划\r\n		   </button>\r\n		</div>\r\n		</div>\r\n		<table class="table table-striped table-bordered table-hover T-NotShowHighLight">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>团号</th>\r\n					<th>出团日期</th>\r\n					<th>完团日期</th>\r\n					<th >线路产品</th>\r\n					<th>人数</th>\r\n					<th>团队人数</th>\r\n					<th>导游</th>\r\n					<th>车牌号</th>\r\n					<th>剩余座位</th>\r\n					<th>创建人</th>\r\n					<th>创建时间</th>\r\n					<th>状态</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-planList">\r\n				{{each tripPlanList as tripPlan}}\r\n					<tr data-id="{{tripPlan.id}}">\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.tripNumber}}</td>\r\n						{{if tripPlan.tripPlanDetails.length  < 2}}\r\n							<td>{{if tripPlan.startTime != null}}{{tripPlan.startTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n							<td>{{if tripPlan.endTime != null}}{{tripPlan.endTime | dateFormat: \'yyyy-MM-dd\'}}{{/if}}</td>\r\n							<td>{{tripPlan.lineProduct.name}}</td>\r\n							<td>{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n						{{else}}\r\n							{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n								{{if index == 0}}\r\n								<td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n								<td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n								<td>{{tripPlanDetails.lineProductName}}</td>\r\n								<td>{{tripPlanDetails.sumMemberCount}}</td>\r\n								{{/if}}\r\n							{{/each}}\r\n						{{/if}}\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</td>\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.bus!=null}}{{tripPlan.bus.licenseNumber}}{{/if}}</td>\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.surplusSeat}}</td>\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{if tripPlan.user!=null}}{{tripPlan.user.realName}}{{/if}}</td>\r\n						<td style="vertical-align:middle" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>{{tripPlan.createTime}}</td>\r\n						<td style="vertical-align:middle;width:80px" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n						    {{if tripPlan.status == -1}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已取消\r\n							{{else if tripPlan.status == 0}}\r\n							<i class="ace-icon fa fa-question yellow bigger-130" ></i>\r\n								待确认\r\n							{{else if tripPlan.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已发团\r\n							{{else if tripPlan.status == 2}}\r\n							<i class="ace-icon fa fa-clock-o red bigger-130"></i>\r\n								已过期\r\n							{{/if}}\r\n						</td>\r\n						<td style="vertical-align:middle;width:240px;" {{if tripPlan.tripPlanDetails.length > 1}}rowspan="{{tripPlan.tripPlanDetails.length}}"{{/if}}>\r\n							<a billStatus="{{tripPlan.billStatus}}" statusValue="{{tripPlan.status}}" title="确认发团" class="{{if tripPlan.status != -1 && tripPlan.status != 2}}T-option T-confirm{{/if}} cursor R-right" data-right="1140006" {{if tripPlan.status == -1 || tripPlan.status == 2}} style="color:#bbb;"{{/if}}>\r\n								确认\r\n								<label style="padding-left:10px;">|</label>\r\n							</a>\r\n							<a title="查看计划" class="T-option T-view cursor">\r\n								查看\r\n							</a>\r\n						    <a billStatus="{{tripPlan.billStatus}}" title="编辑计划" class="{{if tripPlan.status != -1}}T-option T-update{{/if}} cursor R-right" data-right="1140003" {{if tripPlan.status == -1}} style="color:#bbb;"{{/if}}>\r\n								<label class="padding-right20">|</label>\r\n								编辑\r\n							</a>\r\n							<a title="导出计划" class="T-option T-export cursor R-right" data-right="1140008">\r\n								<label class="padding-right20">|</label>\r\n								导出\r\n							</a>\r\n							<a billStatus="{{tripPlan.billStatus}}" title="取消计划" class="{{if tripPlan.status != -1}}T-option T-cancel{{/if}} cursor R-right" data-right="1140004" {{if tripPlan.status == -1}} style="color:#bbb;"{{/if}}>\r\n								<label class="padding-right20">|</label>\r\n								取消\r\n							</a>\r\n						</td>\r\n					</tr>\r\n\r\n					{{if tripPlan.tripPlanDetails.length > 1}}\r\n					{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n						{{if index>0}}\r\n						<tr>\r\n							<td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>{{tripPlanDetails.lineProductName}}</td>\r\n							<td>{{tripPlanDetails.sumMemberCount}}</td>\r\n						</tr>\r\n\r\n						{{/if}}\r\n					{{/each}}\r\n					{{/if}}\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});