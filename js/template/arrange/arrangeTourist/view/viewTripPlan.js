/*TMODJS:{"debug":true,"version":52,"md5":"fde9529c0c713843884954ab1579618b"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/viewTripPlan", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $escape = $utils.$escape, lineProduct = $data.lineProduct, tripPlanList = $data.tripPlanList, $each = $utils.$each, $out = ($data.$index, 
            "");
            return $out += '<div class="col-xs-12 chooseTripPlanMain"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group"> <label class="col-sm-2 control-label no-padding-right">线路产品：', 
            $line = 4, $out += $escape(lineProduct.name), $out += '</label> <label class="col-sm-2 control-label no-padding-right">天数：', 
            $line = 5, $out += $escape(lineProduct.days), $out += '</label> <label class="col-sm-2 control-label no-padding-right">应用范围：', 
            $line = 6, 0 == lineProduct.customerType ? ($out += "散客", $line = 6) : 1 == lineProduct.customerType && ($out += "团体", 
            $line = 6), $out += '</label> <label class="col-sm-2 control-label no-padding-right">出游日期：', 
            $line = 7, $out += $escape($helpers.dateFormat(tripPlanList[0].startTime, "yyyy-MM-dd")), 
            $out += '</label> </div> </form> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th class="th-border">选择</th> <th class="th-border">团号</th> <th class="th-border">出团日期</th> <th class="th-border">人数</th> <th class="th-border">导游</th> <th class="th-border">车牌号</th> <th class="th-border">状态</th> <th class="th-border">操作</th> </tr> </thead> <tbody class="chooseTripPlanTbody">', 
            $line = 24, $each(tripPlanList, function(tripPlanList) {
                $out += ' <tr data-entity-id="', $line = 25, $out += $escape(tripPlanList.id), $out += '"> <td> <label class="pos-rel"> <input type="radio" class="ace ridioCheck" name="form-field-radio"> <span class="lbl"></span> </label> </td> <td>', 
                $line = 32, $out += $escape(tripPlanList.tripNumber), $out += "</td> <td>", $line = 33, 
                $out += $escape(tripPlanList.startTime), $out += "</td> <td>大人", $line = 34, $out += $escape(tripPlanList.touristAdultCount), 
                $out += "小孩", $line = 34, $out += $escape(tripPlanList.touristChildCount), $out += "</td> <td>", 
                $line = 35, null != tripPlanList.guide && ($line = 35, $out += $escape(tripPlanList.guide.realname), 
                $line = 35), $out += "</td> <td>", $line = 36, null != tripPlanList.bus && ($line = 36, 
                $out += $escape(tripPlanList.bus.licenseNumber), $line = 36), $out += '</td> <td></td> <td> <a class="groupView cursor" data-entity-id="', 
                $line = 39, $out += $escape(tripPlanList.id), $out += '"> 查看 </a> </td> </tr>', 
                $line = 43;
            }), $out += ' </tbody> </table> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;margin:0px;"> <button class="btn btn-block btn-primary btn-chooseTripPlan"> <i class="ace-icon fa fa-check"></i> 选择计划 </button> </div> </form> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 chooseTripPlanMain">\r\n	<form class="form-horizontal" role="form" onsubmit="return false">\r\n		<div class="form-group">\r\n			<label class="col-sm-2 control-label no-padding-right">线路产品：{{lineProduct.name}}</label>\r\n			<label class="col-sm-2 control-label no-padding-right">天数：{{lineProduct.days}}</label>\r\n			<label class="col-sm-2 control-label no-padding-right">应用范围：{{if lineProduct.customerType==0}}散客{{else if lineProduct.customerType==1}}团体{{/if}}</label>\r\n			<label class="col-sm-2 control-label no-padding-right">出游日期：{{tripPlanList[0].startTime | dateFormat:\'yyyy-MM-dd\'}}</label>\r\n		</div>\r\n	</form>\r\n	<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover all">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">选择</th>\r\n						<th class="th-border">团号</th>\r\n						<th class="th-border">出团日期</th>\r\n						<th class="th-border">人数</th>\r\n						<th class="th-border">导游</th>\r\n						<th class="th-border">车牌号</th>\r\n						<th class="th-border">状态</th>\r\n						<th class="th-border">操作</th>\r\n					</tr>\r\n				</thead>\r\n					<tbody class="chooseTripPlanTbody">{{each tripPlanList as tripPlanList}}\r\n						<tr data-entity-id="{{tripPlanList.id}}">\r\n							<td>\r\n								<label class="pos-rel">\r\n									<input type="radio" class="ace ridioCheck" name="form-field-radio">\r\n									<span class="lbl"></span>\r\n								</label>\r\n							</td>\r\n							<td>{{tripPlanList.tripNumber}}</td>\r\n							<td>{{tripPlanList.startTime}}</td>\r\n							<td>大人{{tripPlanList.touristAdultCount}}小孩{{tripPlanList.touristChildCount}}</td>\r\n							<td>{{if tripPlanList.guide != null}}{{tripPlanList.guide.realname}}{{/if}}</td>\r\n							<td>{{if tripPlanList.bus != null}}{{tripPlanList.bus.licenseNumber}}{{/if}}</td>\r\n							<td></td>\r\n							<td>\r\n								<a class="groupView cursor"  data-entity-id="{{tripPlanList.id}}">\r\n									查看\r\n								</a>\r\n							</td>\r\n						</tr>{{/each}}\r\n				\r\n				</tbody>\r\n			</table>\r\n			<form class="form-horizontal" role="form" onsubmit="return false">\r\n				<div class="form-group" style="text-align: center;margin:0px;">\r\n					<button class="btn btn-block btn-primary btn-chooseTripPlan">\r\n						<i class="ace-icon fa fa-check"></i>\r\n						选择计划\r\n					</button>\r\n				</div>\r\n			</form>\r\n		</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});