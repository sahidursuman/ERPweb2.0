/*TMODJS:{"debug":true,"version":154,"md5":"e70626630ff08fb8abf303fc3424bae1"}*/
define(function(require) {
    return require("../../../template")("arrange/booking/view/list", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), searchParam = $data.searchParam, $escape = $utils.$escape, $each = $utils.$each, bookingOrderList = $data.bookingOrderList, recordSize = ($data.booking, 
            $data.$index, $data.recordSize), totalPage = $data.totalPage, pageNo = $data.pageNo, $out = "";
            return $out += '<div class="row"> <div class="col-xs-12 bookingListMain globalAdd"> <div class="form-group"> <div class="search-area"> <div class="col-xs-2"> <input type="text" name="orderNumber" class="col-xs-12 guideInputList orderNumberChoose" placeholder="代订单号', 
            $line = 6, 0 == searchParam.echoPartnerAgency.length && ($out += "123123", $line = 6), 
            $out += '" value="', $line = 6, $out += $escape(searchParam.orderNumber), $out += '" /> </div> <div class="col-xs-1"> <input type="text" name="partnerAgency" class="col-xs-12 partnerAgencyChoose" placeholder="客户" value="', 
            $line = 9, null != searchParam.echoPartnerAgency && ($line = 9, $out += $escape(searchParam.echoPartnerAgency.travelAgencyName), 
            $line = 9), $out += '" /> <input type="hidden" name="partnerAgencyId" value="', 
            $line = 10, $out += $escape(searchParam.echoPartnerAgency.id), $out += '" /> </div> <div class="col-xs-1"> <input type="text" name="operateUser" class="col-xs-12 operateUserChoose" placeholder="操作人" value="', 
            $line = 13, null != searchParam.echoOperateUser && ($line = 13, $out += $escape(searchParam.echoOperateUser.realName), 
            $line = 13), $out += '" /> <input type="hidden" name="operateUserId" value="', $line = 14, 
            $out += $escape(searchParam.echoOperateUser.id), $out += '" /> </div> <div class="col-xs-3"> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 datepicker" name="startTime" placeholder="开始操作时间" value="', 
            $line = 19, $out += $escape(searchParam.startTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> <div class="col-xs-6"> <div class="input-group"> <input class="col-xs-12 datepicker" name="endTime" placeholder="结束操作时间" value="', 
            $line = 27, $out += $escape(searchParam.endTime), $out += '" type="text" /> <span class="input-group-addon"> <i class="fa fa-calendar"></i> </span> </div> </div> </div> <div class="col-xs-2"> <button class=" btn-sm btn-booking-search search-btn" style="margin-left: -25px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> <button class="btn btn-sm btn-success btn-Booking-add R-right" data-right="1170002" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增项目代订</button> </div> <div style="clear:both;height:0px;line-height:0px;"> </div> </div> </div> <table class="table table-striped table-bordered table-hover"> <thead> <tr class="bg-blur"> <th rowspan="2">订单代号</th> <th rowspan="2">客户</th> <th colspan="4">代订项目</th> <th rowspan="2">应收</th> <th rowspan="2">已收</th> <th rowspan="2">操作人</th> <th rowspan="2">操作时间</th> <th rowspan="2">状态</th> <th rowspan="2">操作</th> </tr> <tr class="bg-blur"> <th>酒店</th> <th>票务</th> <th>景区</th> <th>旅游车</th> </tr> </thead> <tbody>', 
            $line = 66, $each(bookingOrderList, function(booking) {
                $out += ' <tr data-entity-id="', $line = 67, $out += $escape(booking.id), $out += '"> <td>', 
                $line = 68, $out += $escape(booking.orderNumber), $out += "</td> <td>", $line = 69, 
                null != booking.partnerAgency && ($line = 69, $out += $escape(booking.partnerAgency.travelAgencyName), 
                $line = 69), $out += "</td> <td> ", $line = 71, 0 == booking.hotelOrderStatus ? ($out += ' <i class ="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 73) : ($out += ' <i class ="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 75), $out += " </td> <td> ", $line = 78, 0 == booking.ticketOrderStatus ? ($out += ' <i class ="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 80) : ($out += ' <i class ="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 82), $out += " </td> <td> ", $line = 85, 0 == booking.scenicOrderStatus ? ($out += ' <i class ="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 87) : ($out += ' <i class ="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 89), $out += " </td> <td> ", $line = 92, 0 == booking.busCompanyOrderStatus ? ($out += ' <i class ="ace-icon fa fa-times red bigger-125"></i> ', 
                $line = 94) : ($out += ' <i class ="ace-icon fa fa-check green bigger-130"></i> ', 
                $line = 96), $out += " </td> <td>", $line = 98, $out += $escape(booking.sumNeedGetMoney), 
                $out += "</td> <td>", $line = 99, $out += $escape(booking.getedMoney), $out += "</td> <td>", 
                $line = 100, null != booking.operateUser && ($line = 100, $out += $escape(booking.operateUser.realName), 
                $line = 100), $out += "</td> <td>", $line = 101, $out += $escape(booking.operationTime), 
                $out += "</td> <td>", $line = 102, 1 == booking.isConfirmAccount ? ($out += "已对账", 
                $line = 102) : ($out += "未对账", $line = 102), $out += '</td> <td> <a data-entity-id="', 
                $line = 105, $out += $escape(booking.id), $out += '" title="查看计划" class=" cursor btn-Booking-view"> 查看 </a> <a data-entity-id="', 
                $line = 108, $out += $escape(booking.id), $out += '" title="编辑计划" class=" cursor ', 
                $line = 108, 1 != booking.isConfirmAccount && ($out += "btn-Booking-edit", $line = 108), 
                $out += ' R-right" data-right="1170003" ', $line = 108, 1 == booking.isConfirmAccount && ($out += ' style="color: #bbb" ', 
                $line = 108), $out += '> <label class="padding-right20">|</label> 编辑 </a> <a data-entity-id="', 
                $line = 112, $out += $escape(booking.id), $out += '" title="取消计划" class=" cursor ', 
                $line = 112, 1 != booking.isConfirmAccount && ($out += "btn-Booking-cancel", $line = 112), 
                $out += ' R-right" data-right="1170004" ', $line = 112, 1 == booking.isConfirmAccount && ($out += ' style="color: #bbb" ', 
                $line = 112), $out += '> <label class="padding-right20">|</label> 取消 </a> </td> </tr>', 
                $line = 118;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-6"> <div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 ', 
            $line = 123, $out += $escape(recordSize), $out += ' 条记录</div> </div> <div class="col-xs-6"> <div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate"> <ul class="pagination"> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"> <a href="javascript:void(0)"> ', 
            $line = 132, 0 == totalPage ? ($out += " 0/0 ", $line = 134) : ($out += " ", $line = 135, 
            $out += $escape(pageNo + 1), $out += "/", $line = 135, $out += $escape(totalPage), 
            $out += " ", $line = 136), $out += ' </a> </li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next" href="javascript:void(0)">下一页</a></li> <li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li> </ul> </div> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12 bookingListMain globalAdd">\r\n	  <div class="form-group">\r\n		<div class="search-area">\r\n			<div class="col-xs-2">\r\n				<input type="text" name="orderNumber" class="col-xs-12 guideInputList orderNumberChoose" placeholder="代订单号{{if searchParam.echoPartnerAgency.length == 0}}123123{{/if}}" value="{{searchParam.orderNumber}}" />\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="partnerAgency" class="col-xs-12 partnerAgencyChoose" placeholder="客户" value="{{if searchParam.echoPartnerAgency != null}}{{searchParam.echoPartnerAgency.travelAgencyName}}{{/if}}" />\r\n				<input type="hidden" name="partnerAgencyId" value="{{searchParam.echoPartnerAgency.id}}" />\r\n			</div>\r\n			<div class="col-xs-1">\r\n				<input type="text" name="operateUser" class="col-xs-12 operateUserChoose" placeholder="操作人" value="{{if searchParam.echoOperateUser != null}}{{searchParam.echoOperateUser.realName}}{{/if}}" />\r\n				<input type="hidden" name="operateUserId" value="{{searchParam.echoOperateUser.id}}" />\r\n			</div>\r\n			<div class="col-xs-3">\r\n				<div class="col-xs-6">\r\n					<div class="input-group">\r\n						<input class="col-xs-12 datepicker" name="startTime" placeholder="开始操作时间" value="{{searchParam.startTime}}" type="text" />\r\n						<span class="input-group-addon">\r\n							<i class="fa fa-calendar"></i>\r\n						</span>\r\n					</div>\r\n				</div>\r\n				<div class="col-xs-6">\r\n					<div class="input-group">\r\n						<input class="col-xs-12 datepicker" name="endTime" placeholder="结束操作时间" value="{{searchParam.endTime}}" type="text" />\r\n						<span class="input-group-addon">\r\n							<i class="fa fa-calendar"></i>\r\n						</span>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-2">\r\n				<button class=" btn-sm  btn-booking-search search-btn" style="margin-left: -25px">\r\n					<i class="ace-icon fa fa-search"></i>\r\n					搜索\r\n				</button>\r\n				<button class="btn btn-sm btn-success btn-Booking-add R-right" data-right="1170002" style="margin-left: 20px"> <i class="ace-icon fa fa-plus"></i> 新增项目代订</button>\r\n			</div>\r\n			<div style="clear:both;height:0px;line-height:0px;">\r\n\r\n			</div>\r\n		</div>\r\n		</div>\r\n		<table class="table table-striped table-bordered table-hover">\r\n			<thead>\r\n				<tr class="bg-blur">\r\n					<th rowspan="2">订单代号</th>\r\n					<th rowspan="2">客户</th>\r\n					<th colspan="4">代订项目</th>\r\n					<th rowspan="2">应收</th>\r\n					<th rowspan="2">已收</th>\r\n					<th rowspan="2">操作人</th>\r\n					<th rowspan="2">操作时间</th>\r\n					<th rowspan="2">状态</th>\r\n					<th rowspan="2">操作</th>\r\n				</tr>\r\n				<tr class="bg-blur">\r\n					<th>酒店</th>\r\n					<th>票务</th>\r\n					<th>景区</th>\r\n					<th>旅游车</th>\r\n				</tr>\r\n			</thead>\r\n			<tbody>{{each bookingOrderList as booking}}\r\n				<tr data-entity-id="{{booking.id}}">\r\n					<td>{{booking.orderNumber}}</td>\r\n					<td>{{if booking.partnerAgency != null}}{{booking.partnerAgency.travelAgencyName}}{{/if}}</td>\r\n					<td>\r\n					{{if booking.hotelOrderStatus == 0}}\r\n					<i class ="ace-icon fa fa-times red bigger-125"></i>\r\n					{{else}}\r\n					<i class ="ace-icon fa fa-check green bigger-130"></i>\r\n					{{/if}}\r\n					</td>\r\n					<td>\r\n					{{if booking.ticketOrderStatus == 0}}\r\n					<i class ="ace-icon fa fa-times red bigger-125"></i>\r\n					{{else}}\r\n					<i class ="ace-icon fa fa-check green bigger-130"></i>\r\n					{{/if}}\r\n					</td>\r\n					<td>\r\n					{{if booking.scenicOrderStatus == 0}}\r\n					<i class ="ace-icon fa fa-times red bigger-125"></i>\r\n					{{else}}\r\n					<i class ="ace-icon fa fa-check green bigger-130"></i>\r\n					{{/if}}\r\n					</td>\r\n					<td>\r\n					{{if booking.busCompanyOrderStatus == 0}}\r\n					<i class ="ace-icon fa fa-times red bigger-125"></i>\r\n					{{else}}\r\n					<i class ="ace-icon fa fa-check green bigger-130"></i>\r\n					{{/if}}\r\n					</td>\r\n					<td>{{booking.sumNeedGetMoney}}</td>\r\n					<td>{{booking.getedMoney}}</td>\r\n					<td>{{if booking.operateUser != null}}{{booking.operateUser.realName}}{{/if}}</td>\r\n					<td>{{booking.operationTime}}</td>\r\n					<td>{{if booking.isConfirmAccount == 1}}已对账{{else}}未对账{{/if}}</td>\r\n					<td>\r\n\r\n						<a data-entity-id="{{booking.id}}" title="查看计划" class=" cursor btn-Booking-view">\r\n							查看\r\n						</a>\r\n					    <a data-entity-id="{{booking.id}}" title="编辑计划" class=" cursor {{if booking.isConfirmAccount != 1}}btn-Booking-edit{{/if}} R-right" data-right="1170003" {{if booking.isConfirmAccount == 1}} style="color: #bbb" {{/if}}>\r\n							<label class="padding-right20">|</label>\r\n							编辑\r\n						</a>\r\n						<a data-entity-id="{{booking.id}}" title="取消计划" class=" cursor {{if booking.isConfirmAccount != 1}}btn-Booking-cancel{{/if}} R-right" data-right="1170004" {{if booking.isConfirmAccount == 1}} style="color: #bbb" {{/if}}>\r\n							<label class="padding-right20">|</label>\r\n							取消\r\n						</a>\r\n\r\n					</td>\r\n				</tr>{{/each}}\r\n			</tbody>\r\n		</table>\r\n		<div class="row pageMode">\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_info" id="dynamic-table_info" role="status" aria-live="polite">共计 {{recordSize}} 条记录</div>\r\n			</div>\r\n			<div class="col-xs-6">\r\n				<div class="dataTables_paginate paging_simple_numbers" id="dynamic-table_paginate">\r\n					<ul class="pagination">\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="first" href="javascript:void(0)">首页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="previous"href="javascript:void(0)">上一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0">\r\n							<a href="javascript:void(0)">\r\n								{{if totalPage == 0}}\r\n									0/0\r\n								{{else}}\r\n									{{pageNo+1}}/{{totalPage}}\r\n								{{/if}}\r\n							</a>\r\n						</li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="next"  href="javascript:void(0)">下一页</a></li>\r\n						<li class="paginate_button" aria-controls="dynamic-table" tabindex="0"><a class="last" href="javascript:void(0)">尾页</a></li>\r\n					</ul>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});