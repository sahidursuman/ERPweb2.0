/*TMODJS:{"debug":true,"version":24,"md5":"f266121ab95af7a5bc5a66986b48112b"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/chooseTravelLine", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, tripPlanList = $data.tripPlanList, $escape = ($data.$index, 
            $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12 chooseMergeTripPlan"> <div class="col-xs-12"> <table class="table table-striped table-bordered table-hover all"> <thead> <tr> <th>选择</th> <th>团号</th> <th>线路名称</th> <th>出团日期</th> <th>人数</th> <th>导游</th> <th>车牌号</th> <th>操作</th> </tr> </thead> <tbody class="chooseTripPlanTbody">', 
            $line = 16, $each(tripPlanList, function(tripPlanList) {
                $out += ' <tr data-entity-id="', $line = 17, $out += $escape(tripPlanList.id), $out += '"> <td> <label class="pos-rel"> <input type="radio" class="ace ridioCheck" name="form-field-radio"> <span class="lbl"></span> </label> </td> <td>', 
                $line = 24, $out += $escape(tripPlanList.tripNumber), $out += "</td> <td>", $line = 25, 
                null != tripPlanList.lineProduct && ($line = 25, $out += $escape(tripPlanList.lineProduct.name), 
                $line = 25), $out += "</td> <td>", $line = 26, $out += $escape($helpers.dateFormat(tripPlanList.startTime, "yyyy-MM-dd")), 
                $out += "</td> <td>大人", $line = 27, $out += $escape(tripPlanList.touristAdultCount), 
                $out += "小孩", $line = 27, $out += $escape(tripPlanList.touristChildCount), $out += "</td> <td>", 
                $line = 28, null != tripPlanList.guide && ($line = 28, $out += $escape(tripPlanList.guide.realname), 
                $line = 28), $out += "</td> <td>", $line = 29, null != tripPlanList.bus && ($line = 29, 
                $out += $escape(tripPlanList.bus.licenseNumber), $line = 29), $out += '</td> <td> <button data-entity-id="', 
                $line = 31, $out += $escape(tripPlanList.id), $out += '" class="btn btn-xs btn-info groupView"> <i class="ace-icon fa fa-search-plus"></i> </button> </td> </tr>', 
                $line = 35;
            }), $out += ' </tbody> </table> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;margin:0px;"> <button class="btn btn-block btn-success btn-chooseMergeTripPlan guideSubmit"> <i class="ace-icon fa fa-check"></i> 选择计划 </button> </div> </form> <div style="padding:20px"></div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 chooseMergeTripPlan">\r\n	<div class="col-xs-12">\r\n			<table class="table table-striped table-bordered table-hover all">\r\n				<thead>\r\n					<tr>\r\n						<th>选择</th>\r\n						<th>团号</th>\r\n						<th>线路名称</th>\r\n						<th>出团日期</th>\r\n						<th>人数</th>\r\n						<th>导游</th>\r\n						<th>车牌号</th>\r\n						<th>操作</th>\r\n					</tr>\r\n				</thead>\r\n					<tbody class="chooseTripPlanTbody">{{each tripPlanList as tripPlanList}}\r\n						<tr data-entity-id="{{tripPlanList.id}}">\r\n							<td>\r\n								<label class="pos-rel">\r\n									<input type="radio" class="ace ridioCheck" name="form-field-radio">\r\n									<span class="lbl"></span>\r\n								</label>\r\n							</td>\r\n							<td>{{tripPlanList.tripNumber}}</td>\r\n							<td>{{if tripPlanList.lineProduct != null}}{{tripPlanList.lineProduct.name}}{{/if}}</td>\r\n							<td>{{tripPlanList.startTime | dateFormat: \'yyyy-MM-dd\'}}</td>\r\n							<td>大人{{tripPlanList.touristAdultCount}}小孩{{tripPlanList.touristChildCount}}</td>\r\n							<td>{{if tripPlanList.guide != null}}{{tripPlanList.guide.realname}}{{/if}}</td>\r\n							<td>{{if tripPlanList.bus != null}}{{tripPlanList.bus.licenseNumber}}{{/if}}</td>\r\n							<td>\r\n								<button data-entity-id="{{tripPlanList.id}}" class="btn btn-xs btn-info groupView">\r\n									<i class="ace-icon fa fa-search-plus"></i>\r\n								</button>\r\n							</td>\r\n						</tr>{{/each}}\r\n				\r\n				</tbody>\r\n			</table>\r\n			<form class="form-horizontal" role="form" onsubmit="return false">\r\n				<div class="form-group" style="text-align: center;margin:0px;">\r\n					<button class="btn btn-block btn-success btn-chooseMergeTripPlan guideSubmit">\r\n						<i class="ace-icon fa fa-check"></i>\r\n						选择计划\r\n					</button>\r\n				</div>\r\n			</form>\r\n			<div style="padding:20px"></div>\r\n		</div>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});