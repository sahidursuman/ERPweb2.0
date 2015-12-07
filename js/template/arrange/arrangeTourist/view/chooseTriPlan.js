/*TMODJS:{"debug":true,"version":1,"md5":"04525ce06caefe6ead81b30663ecdc52"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/chooseTriPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, tripPlanList = $data.tripPlanList, $escape = ($data.$index, 
            $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12" style="margin-top:10px"> <table class="table table-striped table-bordered table-hover search-travelLineList-table"> <thead> <tr> <td>团号</td> <td>线路产品</td> <td>出团日期</td> <td>完团日期</td> <td>导游</td> <td>车牌号</td> <td>团队人数</td> <td>剩余座数</td> <td>状态</td> <td>选择计划</td> </tr> </thead> <tbody class="T-chosenTrip-list">', 
            $line = 17, $each(tripPlanList, function(tripPlanList) {
                $out += ' <tr data-value="', $line = 18, $out += $escape(tripPlanList.id), $out += '"> <td>', 
                $line = 20, $out += $escape(tripPlanList.tripNumber), $out += "</td> <td>", $line = 21, 
                null != tripPlanList.lineProduct && ($line = 21, $out += $escape(tripPlanList.lineProduct.name), 
                $line = 21), $out += "</td> <td>", $line = 22, $out += $escape($helpers.dateFormat(tripPlanList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td></td> <td>", $line = 24, null != tripPlanList.guide && ($line = 24, 
                $out += $escape(tripPlanList.guide.realname), $line = 24), $out += "</td> <td>", 
                $line = 25, null != tripPlanList.bus && ($line = 25, $out += $escape(tripPlanList.bus.licenseNumber), 
                $line = 25), $out += "</td> <td>大人", $line = 26, $out += $escape(tripPlanList.touristAdultCount), 
                $out += "小孩", $line = 26, $out += $escape(tripPlanList.touristChildCount), $out += '</td> <td></td> <td></td> <td> <label class="pos-rel"> <input type="radio" class="ace ridioCheck" name="form-field-radio"> <span class="lbl"></span> </label> </td> </tr>', 
                $line = 35;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 <small class="T-total">0</small> 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> <div class="space-10"></div> <form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> <div class="form-group col-sm-12" style="text-align: center;"> <button class="btn btn-sm btn-danger T-cancelChooseTipPlan otherButton"> <i class="ace-icon fa fa-times "></i> 取消 </button> <button class="btn btn-sm btn-primary T-savechooseTipPlan otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 确定 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12" style="margin-top:10px">\r\n	<table class="table table-striped table-bordered table-hover search-travelLineList-table">\r\n		<thead>\r\n		<tr>\r\n			<td>团号</td>\r\n			<td>线路产品</td>\r\n			<td>出团日期</td>\r\n			<td>完团日期</td>\r\n			<td>导游</td>\r\n			<td>车牌号</td>\r\n			<td>团队人数</td>\r\n			<td>剩余座数</td>\r\n			<td>状态</td>\r\n			<td>选择计划</td>\r\n		</tr>\r\n		</thead>\r\n		<tbody class="T-chosenTrip-list">{{each tripPlanList as tripPlanList}}\r\n			<tr data-value="{{tripPlanList.id}}">\r\n				\r\n				<td>{{tripPlanList.tripNumber}}</td>\r\n				<td>{{if tripPlanList.lineProduct != null}}{{tripPlanList.lineProduct.name}}{{/if}}</td>\r\n				<td>{{tripPlanList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n				<td></td>\r\n				<td>{{if tripPlanList.guide != null}}{{tripPlanList.guide.realname}}{{/if}}</td>\r\n                <td>{{if tripPlanList.bus != null}}{{tripPlanList.bus.licenseNumber}}{{/if}}</td>\r\n				<td>大人{{tripPlanList.touristAdultCount}}小孩{{tripPlanList.touristChildCount}}</td>\r\n				<td></td>\r\n				<td></td>\r\n				<td>\r\n					<label class="pos-rel">\r\n						<input type="radio" class="ace ridioCheck" name="form-field-radio">\r\n						<span class="lbl"></span>\r\n					</label>\r\n				</td>\r\n			</tr>{{/each}}\r\n	    </tbody>\r\n	</table>\r\n	<div class="row pageMode">\r\n		<div class="col-xs-5">\r\n			<small>共计 <small class="T-total">0</small> 条记录</small>\r\n		</div>\r\n		<div class="col-xs-7">\r\n			<div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class="space-10"></div>\r\n	<form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> \r\n		<div class="form-group col-sm-12" style="text-align: center;"> \r\n			<button class="btn btn-sm btn-danger T-cancelChooseTipPlan otherButton"> <i class="ace-icon fa fa-times "></i> 取消 </button> \r\n			<button class="btn btn-sm btn-primary T-savechooseTipPlan otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 确定 </button>\r\n		</div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});