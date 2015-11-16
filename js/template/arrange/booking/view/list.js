/*TMODJS:{"debug":true,"version":197,"md5":"90d7084792766689bb4909e25b36169b"}*/
define(function(require) {
    return require("../../../template")("arrange/booking/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, searchParam = $data.searchParam, $each = $utils.$each, bookingOrderList = $data.bookingOrderList, recordSize = ($data.booking, 
            $data.$index, $data.recordSize), $out = "";
            return $out += '<div class="row"> <div class="col-xs-12 bookingListMain globalAdd"> <div class="form-group"> <div class="search-area"> <div class="col-xs-2"> <input type="text" name="orderNumber" class="col-xs-12 guideInputList T-orderNumberChoose" placeholder="代订单号" value="', 
            $line = 6, $out += $escape(searchParam.orderNumber), $out += '" /> <input type="hidden" name="orderNumberId" value="', 
            $line = 7, $out += $escape(searchParam.id), $out += '" /> </div> <div class="col-xs-1"> <input type="text" name="partnerAgency" class="col-xs-12 T-partnerAgencyChoose" placeholder="客户" value="', 
            $line = 10, null != searchParam.partnerAgency && ($line = 10, $out += $escape(searchParam.partnerAgency), 
            $line = 10), $out += '" /> <input type="hidden" name="partnerAgencyChooseId" value="', 
            $line = 11, $out += $escape(searchParam.partnerAgencyId), $out += '" /> </div> <div class="col-xs-1"> <input type="text" name="operateUser" class="col-xs-12 T-operateUserChoose" placeholder="操作人" value="', 
            $line = 14, null != searchParam.operateUser && ($line = 14, $out += $escape(searchParam.operateUser), 
            $line = 14), $out += '" /> <input type="hidden" name="operateUserId" value="', $line = 15, 
            $out += $escape(searchParam.operateUserId), $out += '" /> </div> <div class="col-xs-3"> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 datepicker" name="startTime" placeholder="开始操作时间" value="', 
            $line = 20, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 datepicker" name="endTime" placeholder="结束操作时间" value="', 
            $line = 28, $out += $escape(searchParam.endTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <button class=" btn-sm T-booking-search search-btn" style="margin-left: -25px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm btn-success T-Booking-add R-right" data-right="1170002" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增项目代订</button> </div> <div style="clear:both;height:0px;line-height:0px;"> </div> </div> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th rowspan="2">订单代号</th> <th rowspan="2">客户</th> <th colspan="4">代订项目</th> <th rowspan="2">应收</th> <th rowspan="2">已收</th> <th rowspan="2">操作人</th> <th rowspan="2">操作时间</th> <th rowspan="2">状态</th> <th rowspan="2">操作</th> </tr> <tr class="bg-blur"> <th>酒店</th> <th>票务</th> <th>景区</th> <th>旅游车</th> </tr> </thead> <tbody>', 
            $line = 67, $each(bookingOrderList, function(booking) {
                $out += ' <tr data-entity-id="', $line = 68, $out += $escape(booking.id), $out += '"> <td>', 
                $line = 69, $out += $escape(booking.orderNumber), $out += "</td> <td>", $line = 70, 
                null != booking.partnerAgency && ($line = 70, $out += $escape(booking.partnerAgency.travelAgencyName), 
                $line = 70), $out += "</td> <td> ", $line = 72, 0 == booking.hotelOrderStatus ? ($out += ' <i class ="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 74) : ($out += ' <i class ="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 76), $out += " </td> <td> ", $line = 79, 0 == booking.ticketOrderStatus ? ($out += ' <i class ="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 81) : ($out += ' <i class ="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 83), $out += " </td> <td> ", $line = 86, 0 == booking.scenicOrderStatus ? ($out += ' <i class ="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 88) : ($out += ' <i class ="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 90), $out += " </td> <td> ", $line = 93, 0 == booking.busCompanyOrderStatus ? ($out += ' <i class ="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 95) : ($out += ' <i class ="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 97), $out += " </td> <td>", $line = 99, $out += $escape(booking.sumNeedGetMoney), 
                $out += "</td> <td>", $line = 100, $out += $escape(booking.getedMoney), $out += "</td> <td>", 
                $line = 101, null != booking.operateUser && ($line = 101, $out += $escape(booking.operateUser.realName), 
                $line = 101), $out += "</td> <td>", $line = 102, $out += $escape(booking.operationTime), 
                $out += "</td> <td>", $line = 103, 1 == booking.isConfirmAccount ? ($out += "已对账", 
                $line = 103) : ($out += "未对账", $line = 103), $out += '</td> <td> <a data-entity-id="', 
                $line = 106, $out += $escape(booking.id), $out += '" title="查看计划" class=" cursor T-Booking-view"> 查看 </a> <a data-entity-id="', 
                $line = 109, $out += $escape(booking.id), $out += '" title="编辑计划" class=" cursor ', 
                $line = 109, 1 != booking.isConfirmAccount && ($out += "T-Booking-edit", $line = 109), 
                $out += ' R-right" data-right="1170003" ', $line = 109, 1 == booking.isConfirmAccount && ($out += ' style="color: #bbb" ', 
                $line = 109), $out += '> <label class="padding-right20">|</label> 编辑 </a> <a data-entity-id="', 
                $line = 113, $out += $escape(booking.id), $out += '" title="取消计划" class=" cursor ', 
                $line = 113, 1 != booking.isConfirmAccount && ($out += "T-Booking-cancel", $line = 113), 
                $out += ' R-right" data-right="1170004" ', $line = 113, 1 == booking.isConfirmAccount && ($out += ' style="color: #bbb" ', 
                $line = 113), $out += '> <label class="padding-right20">|</label> 取消 </a> </td> </tr>', 
                $line = 119;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <small>共计 ', 
            $line = 124, $out += $escape(recordSize), $out += ' 条记录</small> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12 bookingListMain globalAdd">\r\n	  <div class="form-group">\r\n		<div class="search-area">\r\n			<div class="col-xs-2">\r\n				<input type="text" name="orderNumber" class="col-xs-12 guideInputList T-orderNumberChoose" placeholder="代订单号" value="{{searchParam.orderNumber}}" />\r\n				<input type="hidden" name="orderNumberId" value="{{searchParam.id}}" />\r\n				</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="partnerAgency" class="col-xs-12 T-partnerAgencyChoose" placeholder="客户" value="{{if searchParam.partnerAgency != null}}{{searchParam.partnerAgency}}{{/if}}" />\r\n				<input type="hidden" name="partnerAgencyChooseId" value="{{searchParam.partnerAgencyId}}" />\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="operateUser" class="col-xs-12 T-operateUserChoose" placeholder="操作人" value="{{if searchParam.operateUser != null}}{{searchParam.operateUser}}{{/if}}" />\r\n				<input type="hidden" name="operateUserId" value="{{searchParam.operateUserId}}" />\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<div class="col-xs-6">\r\n					<div class="input-group">\r\n						<input class="col-xs-12 datepicker" name="startTime" placeholder="开始操作时间" value="{{searchParam.startTime}}" type="text" />\r\n						<span class="input-group-addon">\r\n							<i class="fa fa-calendar"></i>\r\n						</span>\r\n					</div>\r\n				</div>\r\n				<div class="col-xs-6">\r\n					<div class="input-group">\r\n						<input class="col-xs-12 datepicker" name="endTime" placeholder="结束操作时间" value="{{searchParam.endTime}}" type="text" />\r\n						<span class="input-group-addon">\r\n							<i class="fa fa-calendar"></i>\r\n						</span>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-2">\r\n				<button class=" btn-sm  T-booking-search search-btn" style="margin-left: -25px">\r\n					<i class="ace-icon fa fa-search"></i>\r\n					搜索\r\n				</button>\r\n				<button class="btn btn-sm btn-success T-Booking-add R-right" data-right="1170002" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增项目代订</button>\r\n			</div>\r\n			<div style="clear:both;height:0px;line-height:0px;">\r\n\r\n			</div>\r\n		</div>\r\n		</div>\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th rowspan="2">订单代号</th>\r\n					<th rowspan="2">客户</th>\r\n					<th colspan="4">代订项目</th>\r\n					<th rowspan="2">应收</th>\r\n					<th rowspan="2">已收</th>\r\n					<th rowspan="2">操作人</th>\r\n					<th rowspan="2">操作时间</th>\r\n					<th rowspan="2">状态</th>\r\n					<th rowspan="2">操作</th>\r\n				</tr>\r\n				<tr class="bg-blur">\r\n					<th>酒店</th>\r\n					<th>票务</th>\r\n					<th>景区</th>\r\n					<th>旅游车</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody>{{each bookingOrderList as booking}}\r\n				<tr data-entity-id="{{booking.id}}">\r\n					<td>{{booking.orderNumber}}</td>\r\n					<td>{{if booking.partnerAgency != null}}{{booking.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n					<td>\r\n					{{if booking.hotelOrderStatus == 0}}\r\n					<i class ="ace-icon fa fa-times red bigger-125"></i>\r\n					{{else}}\r\n					<i class ="ace-icon fa fa-check green bigger-130"></i>\r\n					{{/if}}\r\n					</td>\r\n					<td>\r\n					{{if booking.ticketOrderStatus == 0}}\r\n					<i class ="ace-icon fa fa-times red bigger-125"></i>\r\n					{{else}}\r\n					<i class ="ace-icon fa fa-check green bigger-130"></i>\r\n					{{/if}}\r\n					</td>\r\n					<td>\r\n					{{if booking.scenicOrderStatus == 0}}\r\n					<i class ="ace-icon fa fa-times red bigger-125"></i>\r\n					{{else}}\r\n					<i class ="ace-icon fa fa-check green bigger-130"></i>\r\n					{{/if}}\r\n					</td>\r\n					<td>\r\n					{{if booking.busCompanyOrderStatus == 0}}\r\n					<i class ="ace-icon fa fa-times red bigger-125"></i>\r\n					{{else}}\r\n					<i class ="ace-icon fa fa-check green bigger-130"></i>\r\n					{{/if}}\r\n					</td>\r\n					<td>{{booking.sumNeedGetMoney}}</td>\r\n					<td>{{booking.getedMoney}}</td>\r\n					<td>{{if booking.operateUser != null}}{{booking.operateUser.realName}}{{/if}}</td>\r\n					<td>{{booking.operationTime}}</td>\r\n					<td>{{if booking.isConfirmAccount == 1}}已对账{{else}}未对账{{/if}}</td>\r\n					<td>\r\n\r\n						<a data-entity-id="{{booking.id}}" title="查看计划" class=" cursor T-Booking-view">\r\n							查看\r\n						</a>\r\n					    <a data-entity-id="{{booking.id}}" title="编辑计划" class=" cursor {{if booking.isConfirmAccount != 1}}T-Booking-edit{{/if}} R-right" data-right="1170003" {{if booking.isConfirmAccount == 1}} style="color: #bbb" {{/if}}>\r\n							<label class="padding-right20">|</label>\r\n							编辑\r\n						</a>\r\n						<a data-entity-id="{{booking.id}}" title="取消计划" class=" cursor {{if booking.isConfirmAccount != 1}}T-Booking-cancel{{/if}} R-right" data-right="1170004" {{if booking.isConfirmAccount == 1}} style="color: #bbb" {{/if}}>\r\n							<label class="padding-right20">|</label>\r\n							取消\r\n						</a>\r\n\r\n					</td>\r\n				</tr>{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<small>共计 {{recordSize}} 条记录</small>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers T-pagenation">\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});