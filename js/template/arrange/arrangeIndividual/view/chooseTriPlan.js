/*TMODJS:{"debug":true,"version":20,"md5":"d7783066bc757590891862df4cce3de7"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeIndividual/view/chooseTriPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, searchKey = $data.searchKey, order = $data.order, $each = $utils.$each, tripPlanList = $data.tripPlanList, recordSize = ($data.$index, 
            $data.recordSize), $out = "";
            return $out += '<div class="col-xs-12 SpellGroupOrder_by" style="margin-top:5px"> <input name="searchKey" class="col-xs-3 input-default-height guideInputList T-lineproduct-name" value="', 
            $line = 2, $out += $escape(searchKey), $out += '" placeholder="请输入线路产品或团号"/>&nbsp;  <label>出游日期</label> <select name="order" id="order_by"> <option value="asc" ', 
            $line = 7, "asc" == order && ($out += "selected", $line = 7), $out += '>升序</option> <option value="desc" ', 
            $line = 8, "desc" == order && ($out += "selected", $line = 8), $out += '>降序</option> </select> <input type="hidden" name="sortType" value="startTime"> <button class=" btn-sm T-lineProduct-search search-btn mar-l-10"> <i class="ace-icon fa fa-search"></i> 搜索 </button>  </div> <div class="col-xs-12" style="margin-top:10px"> <table class="table table-striped table-bordered table-hover search-travelLineList-table T-chex-radio"> <thead> <tr> <td>团号</td> <td>线路产品</td> <td>出团日期</td> <td>完团日期</td> <td>导游</td> <td>团队人数</td> <td>剩余座数</td> <td>状态</td> <td>选择计划</td> </tr> </thead> <tbody class="T-chosenTrip-list">', 
            $line = 32, $each(tripPlanList, function(tripPlanList) {
                $out += ' <tr data-value="', $line = 33, $out += $escape(tripPlanList.id), $out += '" data-seatCount ="', 
                $line = 33, null != tripPlanList.bus && ($line = 33, $out += $escape(tripPlanList.bus.seatCount), 
                $line = 33), $out += '" data-adultCount="', $line = 33, $out += $escape(tripPlanList.touristAdultCount), 
                $out += '" data-childCount="', $line = 33, $out += $escape(tripPlanList.touristChildCount), 
                $out += '"> <td>', $line = 35, $out += $escape(tripPlanList.tripNumber), $out += "</td> <td>", 
                $line = 36, $out += $escape(tripPlanList.lineProductName), $out += "</td> <td>", 
                $line = 37, $out += $escape($helpers.dateFormat(tripPlanList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 38, $out += $escape($helpers.dateFormat(tripPlanList.endTime, "yyyy-MM-dd")), 
                $out += "</td> <td>", $line = 39, $out += $escape(tripPlanList.guideName), $out += '</td> <td class="F-float F-count">', 
                $line = 40, $out += $escape(tripPlanList.touristCount), $out += '</td> <td class="T-remainSeatCount">', 
                $line = 41, $out += $escape(tripPlanList.leaveCount), $out += "</td> <td> ", $line = 43, 
                0 == tripPlanList.status ? ($out += "未发团 ", $line = 44) : ($out += "已发团 ", $line = 45), 
                $out += ' </td> <td> <label class="pos-rel"> <input type="radio" class="ace ridioCheck" name="form-field-radio"> <span class="lbl"></span> </label> </td> </tr>', 
                $line = 53;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 <small class="T-total">', 
            $line = 58, $out += $escape(recordSize), $out += '</small> 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> <div class="space-10"></div> <form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> <div class="form-group col-sm-12" style="text-align: center;"> <button class="btn btn-sm btn-danger T-cancelChooseTipPlan otherButton"> <i class="ace-icon fa fa-times "></i> 取消 </button> <button class="btn btn-sm btn-primary T-savechooseTipPlan otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 确定 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 SpellGroupOrder_by" style="margin-top:5px">\r\n	<input name="searchKey" class="col-xs-3 input-default-height guideInputList T-lineproduct-name" value="{{searchKey}}" placeholder="请输入线路产品或团号"/>&nbsp;\r\n	\r\n	<!-- <div class="form-group mar-l-15">  -->\r\n		<label>出游日期</label> \r\n		<select name="order" id="order_by"> \r\n			<option value="asc" {{if order == \'asc\'}}selected{{/if}}>升序</option> \r\n			<option value="desc" {{if order == \'desc\'}}selected{{/if}}>降序</option> \r\n		</select> \r\n		<input type="hidden" name="sortType" value="startTime"> \r\n		<button class=" btn-sm  T-lineProduct-search search-btn mar-l-10">\r\n		<i class="ace-icon fa fa-search"></i>\r\n		搜索\r\n	</button>\r\n	<!-- </div> -->\r\n</div>\r\n<div class="col-xs-12" style="margin-top:10px">\r\n	<table class="table table-striped table-bordered table-hover search-travelLineList-table T-chex-radio">\r\n		<thead>\r\n		<tr>\r\n			<td>团号</td>\r\n			<td>线路产品</td>\r\n			<td>出团日期</td>\r\n			<td>完团日期</td>\r\n			<td>导游</td>\r\n			<td>团队人数</td>\r\n			<td>剩余座数</td>\r\n			<td>状态</td>\r\n			<td>选择计划</td>\r\n		</tr>\r\n		</thead>\r\n		<tbody class="T-chosenTrip-list">{{each tripPlanList as tripPlanList}}\r\n			<tr data-value="{{tripPlanList.id}}"  data-seatCount ="{{if tripPlanList.bus!=null}}{{tripPlanList.bus.seatCount}}{{/if}}"  data-adultCount="{{tripPlanList.touristAdultCount}}"   data-childCount="{{tripPlanList.touristChildCount}}">\r\n				\r\n				<td>{{tripPlanList.tripNumber}}</td>\r\n				<td>{{tripPlanList.lineProductName}}</td>\r\n				<td>{{tripPlanList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n				<td>{{tripPlanList.endTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n				<td>{{tripPlanList.guideName}}</td>\r\n				<td class="F-float F-count">{{tripPlanList.touristCount}}</td>\r\n				<td class="T-remainSeatCount">{{tripPlanList.leaveCount}}</td>\r\n				<td>\r\n					{{if tripPlanList.status==0}}未发团\r\n						{{else}}已发团\r\n					{{/if}}\r\n				</td>\r\n				<td>\r\n					<label class="pos-rel">\r\n						<input type="radio" class="ace ridioCheck" name="form-field-radio">\r\n						<span class="lbl"></span>\r\n					</label>\r\n				</td>\r\n			</tr>{{/each}}\r\n	    </tbody>\r\n	</table>\r\n	<div class="row pageMode">\r\n		<div class="col-xs-5">\r\n			<small>共计 <small class="T-total">{{recordSize}}</small> 条记录</small>\r\n		</div>\r\n		<div class="col-xs-7">\r\n			<div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class="space-10"></div>\r\n	<form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> \r\n		<div class="form-group col-sm-12" style="text-align: center;"> \r\n			<button class="btn btn-sm btn-danger T-cancelChooseTipPlan otherButton"> <i class="ace-icon fa fa-times "></i> 取消 </button> \r\n			<button class="btn btn-sm btn-primary T-savechooseTipPlan otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 确定 </button>\r\n		</div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});