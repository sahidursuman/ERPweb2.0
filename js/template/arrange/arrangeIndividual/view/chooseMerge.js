/*TMODJS:{"debug":true,"version":6,"md5":"a29c0b6f6b5d15aad1b7041f1a79ea6a"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeIndividual/view/chooseMerge", function($data, $filename) {
        try {
            var $utils = this, $helpers = $utils.$helpers, $line = 0, $each = $utils.$each, touristGroupMergeList = $data.touristGroupMergeList, $escape = ($data.touristGroupMerge, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12 chooseMerge" style="margin-top:10px"> <table class="table table-striped table-bordered table-hover T-chex-radio"> <thead> <tr> <th class="th-border">线路产品</th> <th class="th-border">类别</th> <th class="th-border">天数</th> <th class="th-border">出游日期</th> <th class="th-border">并团选择</th> </tr> </thead> <tbody class="chooseMergeTbody"> ', 
            $line = 13, $each(touristGroupMergeList, function(touristGroupMerge) {
                $out += ' <tr data-entity-id="', $line = 14, $out += $escape(touristGroupMerge.lineProductId), 
                $out += '" data-entity-startTime="', $line = 14, $out += $escape($helpers.dateFormat(touristGroupMerge.startTime, "yyyy-MM-dd")), 
                $out += '" data-linePro-name = "', $line = 14, $out += $escape(touristGroupMerge.lineProductName), 
                $out += '" data-days="', $line = 14, $out += $escape(touristGroupMerge.days), $out += '"> <td>', 
                $line = 15, $out += $escape(touristGroupMerge.lineProductName), $out += "</td> <td>", 
                $line = 16, $out += $escape(touristGroupMerge.lineProductType), $out += '</td> <td class="F-float F-count">', 
                $line = 17, $out += $escape(touristGroupMerge.days), $out += "</td> <td>", $line = 18, 
                $out += $escape($helpers.dateFormat(touristGroupMerge.startTime, "yyyy-MM-dd")), 
                $out += '</td> <td> <label class="pos-rel"> <input type="radio" class="ace ridioCheck" name="form-field-radio"> <span class="lbl"></span> </label> </span> </td> </tr> ', 
                $line = 23;
            }), $out += ' </tbody> </table> <div class="row pageMode"> <div class="col-xs-5"> <small>共计 <small class="T-total">', 
            $line = 29, $out += $escape(touristGroupMergeList.length), $out += '</small> 条记录</small> </div> <div class="col-xs-7"> <div class="dataTables_paginate paging_simple_numbers T-pagenation"></div> </div> </div> <div class="space-10"></div> <form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> <div class="form-group col-sm-12" style="text-align: center;"> <button class="btn btn-sm btn-danger T-cancelMergenTripPlan otherButton"> <i class="ace-icon fa fa-times "></i> 取消 </button> <button class="btn btn-sm btn-primary T-saveMergenTripPlan otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 确定 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 chooseMerge" style="margin-top:10px">\r\n	<table class="table table-striped table-bordered table-hover T-chex-radio">\r\n		<thead>\r\n			<tr>\r\n				<th class="th-border">线路产品</th>\r\n				<th class="th-border">类别</th>\r\n				<th class="th-border">天数</th>\r\n				<th class="th-border">出游日期</th>\r\n				<th class="th-border">并团选择</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody class="chooseMergeTbody">\r\n			{{each touristGroupMergeList as touristGroupMerge}} \r\n				<tr data-entity-id="{{touristGroupMerge.lineProductId}}" data-entity-startTime="{{touristGroupMerge.startTime | dateFormat: \'yyyy-MM-dd\'}}" data-linePro-name = "{{touristGroupMerge.lineProductName}}" data-days="{{touristGroupMerge.days}}">\r\n					<td>{{touristGroupMerge.lineProductName}}</td>\r\n					<td>{{touristGroupMerge.lineProductType}}</td>\r\n					<td class="F-float F-count">{{touristGroupMerge.days}}</td>\r\n					<td>{{touristGroupMerge.startTime  | dateFormat: \'yyyy-MM-dd\' }}</td>\r\n					<td>\r\n						<label class="pos-rel"> <input type="radio" class="ace ridioCheck" name="form-field-radio"> <span class="lbl"></span> </label> </span>\r\n					</td>\r\n				</tr>\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n\r\n	<div class="row pageMode">\r\n		<div class="col-xs-5">\r\n			<small>共计 <small class="T-total">{{touristGroupMergeList.length}}</small> 条记录</small>\r\n		</div>\r\n		<div class="col-xs-7">\r\n			<div class="dataTables_paginate paging_simple_numbers T-pagenation"></div>\r\n		</div>\r\n	</div>\r\n\r\n	<div class="space-10"></div>\r\n	<form class="form-horizontal" role="form" onsubmit="return false" style="margin-top:25px;"> \r\n		<div class="form-group col-sm-12" style="text-align: center;"> \r\n			<button class="btn btn-sm btn-danger T-cancelMergenTripPlan otherButton"> <i class="ace-icon fa fa-times "></i> 取消 </button> \r\n			<button class="btn btn-sm btn-primary T-saveMergenTripPlan otherButton" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 确定 </button>\r\n		</div>\r\n	</form>\r\n\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});