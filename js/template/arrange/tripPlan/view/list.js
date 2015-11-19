/*TMODJS:{"debug":true,"version":894,"md5":"f9c46bb45d6cb49d568d296ef58c94e6"}*/
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
            $line = 45), $out += ' </span> <i class="ace-icon fa fa-angle-down icon-on-right"></i> </button> <ul class="dropdown-menu triplan-dropdown-menu"> <li> <a data-value="" href="javascript:void(0)">全部</a> </li> <li> <a data-value="-1" href="javascript:void(0)">已取消</a> </li> <li> <a data-value="0" href="javascript:void(0)">待确认</a> </li> <li> <a data-value="1" href="javascript:void(0)">已发团</a> </li>  </ul> </div> <button class=" btn-sm search-btn T-search" style="margin-left: -40px; width:75px;"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> <button class="btn btn-sm btn-success T-addPlan R-right pull-left newSearchBtn" style="width:120px;margin-left:30px;" data-right="1140002"> <i class="ace-icon fa fa-plus"></i> 新增发团计划 </button> </div> </div> <table class="table table-striped table-bordered table-hover T-NotShowHighLight"> <thead> <tr class="bg-blur"> <th>团号</th> <th>出团日期</th> <th>完团日期</th> <th >线路产品</th> <th>人数</th> <th>团队人数</th> <th>导游</th> <th>车牌号</th> <th>剩余座位</th> <th>创建人</th> <th>创建时间</th> <th>状态</th> <th>操作</th> </tr> </thead> <tbody class="T-planList"> ', 
            $line = 98, $each(tripPlanList, function(tripPlan) {
                $out += ' <tr data-id="', $line = 99, $out += $escape(tripPlan.id), $out += '"> <td style="vertical-align:middle" >', 
                $line = 100, $out += $escape(tripPlan.tripNumber), $out += '</td> <td style="padding-left:0;padding-right:0"><table class="table-special"> ', 
                $line = 102, $each(tripPlan.tripPlanDetails, function(tripPlanDetails) {
                    $out += " <tr><td>", $line = 103, $out += $escape($helpers.dateFormat(tripPlanDetails.startTime, "yyyy-MM-dd")), 
                    $out += "</td><tr> ", $line = 104;
                }), $out += ' </table> </td> <td style="padding-left:0;padding-right:0"><table class="table-special"> ', 
                $line = 108, $each(tripPlan.tripPlanDetails, function() {
                    $out += " <tr><td>", $line = 109, $out += $escape($helpers.dateFormat(tripPlan.endTime, "yyyy-MM-dd")), 
                    $out += "</td><tr> ", $line = 110;
                }), $out += ' </table> </td> <td style="padding-left:0;padding-right:0"><table class="table-special"> ', 
                $line = 114, $each(tripPlan.tripPlanDetails, function(tripPlanDetails) {
                    $out += " <tr><td>", $line = 115, $out += $escape(tripPlanDetails.lineProductName), 
                    $out += "</td><tr> ", $line = 116;
                }), $out += ' </table> </td> <td style="padding-left:0;padding-right:0"><table> ', 
                $line = 120, $each(tripPlan.tripPlanDetails, function(tripPlanDetails) {
                    $out += " <tr><td>", $line = 121, $out += $escape(tripPlanDetails.sumMemberCount), 
                    $out += "</td><tr> ", $line = 122;
                }), $out += ' </table> </td> <td style="vertical-align:middle">', $line = 125, $out += $escape(tripPlan.touristAdultCount + tripPlan.touristChildCount), 
                $out += '</td> <td style="vertical-align:middle">', $line = 126, null != tripPlan.guide && ($line = 126, 
                $out += $escape(tripPlan.guide.realname), $line = 126), $out += '</td> <td style="vertical-align:middle">', 
                $line = 127, null != tripPlan.bus && ($line = 127, $out += $escape(tripPlan.bus.licenseNumber), 
                $line = 127), $out += '</td> <td style="vertical-align:middle">', $line = 128, $out += $escape(tripPlan.surplusSeat), 
                $out += '</td> <td style="vertical-align:middle">', $line = 129, null != tripPlan.user && ($line = 129, 
                $out += $escape(tripPlan.user.realName), $line = 129), $out += '</td> <td style="vertical-align:middle">', 
                $line = 130, $out += $escape(tripPlan.createTime), $out += '</td> <td style="vertical-align:middle;width:80px"> ', 
                $line = 132, -1 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-times red bigger-125"></i> 已取消 ', 
                $line = 135) : 0 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-question yellow bigger-130" ></i> 待确认 ', 
                $line = 138) : 1 == tripPlan.status ? ($out += ' <i class="ace-icon fa fa-check green bigger-130"></i> 已发团 ', 
                $line = 141) : 2 == tripPlan.status && ($out += ' <i class="ace-icon fa fa-clock-o red bigger-130"></i> 已过期 ', 
                $line = 144), $out += ' </td> <td style="vertical-align:middle;width:240px;"> <a billStatus="', 
                $line = 147, $out += $escape(tripPlan.billStatus), $out += '" statusValue="', $line = 147, 
                $out += $escape(tripPlan.status), $out += '" title="确认发团" class="', $line = 147, 
                -1 != tripPlan.status && 2 != tripPlan.status && ($out += "T-option T-confirm", 
                $line = 147), $out += ' cursor R-right" data-right="1140006" ', $line = 147, (-1 == tripPlan.status || 2 == tripPlan.status) && ($out += ' style="color:#bbb;"', 
                $line = 147), $out += '> 确认 <label style="padding-left:10px;">|</label> </a> <a title="查看计划" class="T-option T-view cursor"> 查看 </a> <a billStatus="', 
                $line = 154, $out += $escape(tripPlan.billStatus), $out += '" title="编辑计划" class="', 
                $line = 154, -1 != tripPlan.status && ($out += "T-option T-update", $line = 154), 
                $out += ' cursor R-right" data-right="1140003" ', $line = 154, -1 == tripPlan.status && ($out += ' style="color:#bbb;"', 
                $line = 154), $out += '> <label class="padding-right20">|</label> 编辑 </a> <a title="导出计划" class="T-option T-export cursor R-right" data-right="1140005"> <label class="padding-right20">|</label> 导出 </a> <a billStatus="', 
                $line = 162, $out += $escape(tripPlan.billStatus), $out += '" title="取消计划" class="', 
                $line = 162, -1 != tripPlan.status && ($out += "T-option T-cancel", $line = 162), 
                $out += ' cursor R-right" data-right="1140004" ', $line = 162, -1 == tripPlan.status && ($out += ' style="color:#bbb;"', 
                $line = 162), $out += '> <label class="padding-right20">|</label> 取消 </a> </td> </tr> ', 
                $line = 169;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 175, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12 tripPlanMain globalAdd">\r\n	  <div class="form-group">\r\n		<div class="T-search-area clearfix">\r\n			<div class="col-xs-2" style="width:220px;">\r\n				<input type="text" name="tripNumber" class="col-xs-12 T-choosePlan guideInputList" placeholder="团号" value="{{searchParam.tripNumber}}" />\r\n				<input type="hidden" name="tripId" value="{{searchParam.tripId}}" />\r\n			</div>\r\n\r\n			<div class="col-xs-2 timeStart" style="margin:0 15px;">\r\n				<div class="col-xs-8">\r\n					<div class="input-group">\r\n						<input class="col-xs-12 date-picker triplanStartTime" name="startTime" placeholder="出团日期" value="{{searchParam.startTime}}" type="text"  />\r\n						<span class="input-group-addon">\r\n							<i class="fa fa-calendar"></i>\r\n						</span>\r\n					</div> \r\n				</div>\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="guideName" class="col-xs-12 T-chooseGuide Choose-spacing" placeholder="导游" value="{{searchParam.guideName}}" />\r\n				<input type="hidden" name="guideId" value="{{searchParam.guideId}}" />\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="licenseNumber" class="col-xs-12 T-chooseBus Choose-spacing" placeholder="车牌号" value="{{searchParam.busLicenseNumber}}" />\r\n				<input type="hidden" name="busId" value="{{searchParam.busId}}" />\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="creator" class="col-xs-12 T-chooseCreator Choose-spacing" placeholder="创建人" value="{{searchParam.creatorName}}" />\r\n				<input type="hidden" name="creatorId" value="{{searchParam.creator}}" />\r\n			</div>\r\n\r\n			<div class="pull-left">\r\n				<div class="btn-group T-status">\r\n					<button data-value="{{searchParam.status}}" data-toggle="dropdown" class="btn-sm  dropdown-toggle block-up Choose-spacing" aria-expanded="false">\r\n						<span>\r\n							{{if searchParam.status == "-1"}}\r\n								已取消\r\n							{{else if searchParam.status == "0"}}\r\n								待确认\r\n							{{else if searchParam.status == "1"}}\r\n								已发团\r\n							{{else}}\r\n								全部\r\n							{{/if}}\r\n						</span>\r\n						<i class="ace-icon fa fa-angle-down icon-on-right"></i>\r\n					</button>\r\n					<ul class="dropdown-menu triplan-dropdown-menu">\r\n						<li>\r\n							<a data-value="" href="javascript:void(0)">全部</a>\r\n						</li>\r\n						<li>\r\n							<a data-value="-1" href="javascript:void(0)">已取消</a>\r\n						</li>\r\n						<li>\r\n							<a data-value="0" href="javascript:void(0)">待确认</a>\r\n						</li>\r\n						<li>\r\n							<a data-value="1" href="javascript:void(0)">已发团</a>\r\n						</li>\r\n						<!-- <li>\r\n							<a data-value="2" href="javascript:void(0)">已过期</a>\r\n						</li> -->\r\n					</ul>\r\n				</div>\r\n\r\n				<button class=" btn-sm search-btn T-search" style="margin-left: -40px; width:75px;">\r\n					<i class="ace-icon fa fa-search"></i>\r\n					搜索\r\n				</button>\r\n			</div>\r\n			<button class="btn btn-sm btn-success T-addPlan R-right pull-left newSearchBtn" style="width:120px;margin-left:30px;" data-right="1140002"> \r\n			<i class="ace-icon fa fa-plus"></i> \r\n			新增发团计划\r\n		   </button>\r\n		</div>\r\n		</div>\r\n		<table class="table table-striped table-bordered table-hover T-NotShowHighLight">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th>团号</th>\r\n					<th>出团日期</th>\r\n					<th>完团日期</th>\r\n					<th >线路产品</th>\r\n					<th>人数</th>\r\n					<th>团队人数</th>\r\n					<th>导游</th>\r\n					<th>车牌号</th>\r\n					<th>剩余座位</th>\r\n					<th>创建人</th>\r\n					<th>创建时间</th>\r\n					<th>状态</th>\r\n					<th>操作</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody class="T-planList">\r\n				{{each tripPlanList as tripPlan}}\r\n					<tr data-id="{{tripPlan.id}}">\r\n						<td style="vertical-align:middle" >{{tripPlan.tripNumber}}</td>\r\n						<td style="padding-left:0;padding-right:0"><table class="table-special">\r\n								{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n									<tr><td>{{tripPlanDetails.startTime | dateFormat: \'yyyy-MM-dd\'}}</td><tr>\r\n								{{/each}}\r\n							</table>\r\n						</td>\r\n						<td style="padding-left:0;padding-right:0"><table class="table-special">\r\n								{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n									<tr><td>{{tripPlan.endTime | dateFormat: \'yyyy-MM-dd\'}}</td><tr>\r\n								{{/each}}\r\n							</table>\r\n						</td>\r\n						<td style="padding-left:0;padding-right:0"><table class="table-special">\r\n								{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n									<tr><td>{{tripPlanDetails.lineProductName}}</td><tr>\r\n								{{/each}}\r\n							</table>\r\n						</td>\r\n						<td style="padding-left:0;padding-right:0"><table>\r\n								{{each tripPlan.tripPlanDetails as tripPlanDetails index}}\r\n									<tr><td>{{tripPlanDetails.sumMemberCount}}</td><tr>\r\n								{{/each}}\r\n							</table>\r\n						</td>\r\n						<td style="vertical-align:middle">{{tripPlan.touristAdultCount+tripPlan.touristChildCount}}</td>\r\n						<td style="vertical-align:middle">{{if tripPlan.guide != null}}{{tripPlan.guide.realname}}{{/if}}</td>\r\n						<td style="vertical-align:middle">{{if tripPlan.bus!=null}}{{tripPlan.bus.licenseNumber}}{{/if}}</td>\r\n						<td style="vertical-align:middle">{{tripPlan.surplusSeat}}</td>\r\n						<td style="vertical-align:middle">{{if tripPlan.user!=null}}{{tripPlan.user.realName}}{{/if}}</td>\r\n						<td style="vertical-align:middle">{{tripPlan.createTime}}</td>\r\n						<td style="vertical-align:middle;width:80px">\r\n						    {{if tripPlan.status == -1}}\r\n							<i class="ace-icon fa fa-times red bigger-125"></i>\r\n								已取消\r\n							{{else if tripPlan.status == 0}}\r\n							<i class="ace-icon fa fa-question yellow bigger-130" ></i>\r\n								待确认\r\n							{{else if tripPlan.status == 1}}\r\n							<i class="ace-icon fa fa-check green bigger-130"></i>\r\n								已发团\r\n							{{else if tripPlan.status == 2}}\r\n							<i class="ace-icon fa fa-clock-o red bigger-130"></i>\r\n								已过期\r\n							{{/if}}\r\n						</td>\r\n						<td style="vertical-align:middle;width:240px;">\r\n							<a billStatus="{{tripPlan.billStatus}}" statusValue="{{tripPlan.status}}" title="确认发团" class="{{if tripPlan.status != -1 && tripPlan.status != 2}}T-option T-confirm{{/if}} cursor R-right" data-right="1140006" {{if tripPlan.status == -1 || tripPlan.status == 2}} style="color:#bbb;"{{/if}}>\r\n								确认\r\n								<label style="padding-left:10px;">|</label>\r\n							</a>\r\n							<a title="查看计划" class="T-option T-view cursor">\r\n								查看\r\n							</a>\r\n						    <a billStatus="{{tripPlan.billStatus}}" title="编辑计划" class="{{if tripPlan.status != -1}}T-option T-update{{/if}} cursor R-right" data-right="1140003" {{if tripPlan.status == -1}} style="color:#bbb;"{{/if}}>\r\n								<label class="padding-right20">|</label>\r\n								编辑\r\n							</a>\r\n							<a title="导出计划" class="T-option T-export cursor R-right" data-right="1140005">\r\n								<label class="padding-right20">|</label>\r\n								导出\r\n							</a>\r\n							<a billStatus="{{tripPlan.billStatus}}" title="取消计划" class="{{if tripPlan.status != -1}}T-option T-cancel{{/if}} cursor R-right" data-right="1140004" {{if tripPlan.status == -1}} style="color:#bbb;"{{/if}}>\r\n								<label class="padding-right20">|</label>\r\n								取消\r\n							</a>\r\n						</td>\r\n					</tr>\r\n\r\n				{{/each}}\r\n			</tbody>\r\n		</table>\r\n\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});