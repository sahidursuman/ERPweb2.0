/*TMODJS:{"debug":true,"version":45,"md5":"fac75a95f2a422f89ac58b0981c460e0"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/chooseMerge", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, touristGroupMergeList = $data.touristGroupMergeList, $escape = ($data.touristGroupMerge, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="col-xs-12 chooseMerge" style="margin-top:10px"> <table class="table table-striped table-bordered table-hover"> <thead> <tr> <th class="th-border">线路产品</th> <th class="th-border">类别</th> <th class="th-border">天数</th> <th class="th-border">出游日期</th> <th class="th-border">并团选择</th> </tr> </thead> <tbody class="chooseMergeTbody"> ', 
            $line = 13, $each(touristGroupMergeList, function(touristGroupMerge) {
                $out += ' <tr data-entity-id="', $line = 14, $out += $escape(touristGroupMerge.lineProductId), 
                $out += '" data-entity-startTime="', $line = 14, $out += $escape(touristGroupMerge.startTime), 
                $out += '"> <td>', $line = 15, $out += $escape(touristGroupMerge.lineProductName), 
                $out += "</td> <td>", $line = 16, $out += $escape(touristGroupMerge.lineProductType), 
                $out += "</td> <td>", $line = 17, $out += $escape(touristGroupMerge.days), $out += "</td> <td>", 
                $line = 18, $out += $escape(touristGroupMerge.startTime), $out += '</td> <td> <label class="pos-rel"> <input type="radio" class="ace ridioCheck" name="form-field-radio"> <span class="lbl"></span> </label> </span> </td> </tr> ', 
                $line = 23;
            }), $out += ' </tbody> </table> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="text-align: center;"> <button class="btn btn-xs btn-primary btn-mergeAddPlan"> <i class="ace-icon fa fa-plus"></i> 生成计划 </button> <button class="btn btn-xs btn-primary btn-chooseMergePlan"> <i class="ace-icon fa fa-bars"></i> 选择计划 </button> </div> </form> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-xs-12 chooseMerge" style="margin-top:10px">\r\n	<table class="table table-striped table-bordered table-hover">\r\n		<thead>\r\n			<tr>\r\n				<th class="th-border">线路产品</th>\r\n				<th class="th-border">类别</th>\r\n				<th class="th-border">天数</th>\r\n				<th class="th-border">出游日期</th>\r\n				<th class="th-border">并团选择</th>\r\n			</tr>\r\n		</thead>\r\n		<tbody class="chooseMergeTbody">\r\n			{{each touristGroupMergeList as touristGroupMerge}}\r\n				<tr data-entity-id="{{touristGroupMerge.lineProductId}}" data-entity-startTime="{{touristGroupMerge.startTime}}">\r\n					<td>{{touristGroupMerge.lineProductName}}</td>\r\n					<td>{{touristGroupMerge.lineProductType}}</td>\r\n					<td>{{touristGroupMerge.days}}</td>\r\n					<td>{{touristGroupMerge.startTime}}</td>\r\n					<td>\r\n						<label class="pos-rel"> <input type="radio" class="ace ridioCheck" name="form-field-radio"> <span class="lbl"></span> </label> </span>\r\n					</td>\r\n				</tr>\r\n			{{/each}}\r\n		</tbody>\r\n	</table>\r\n	<form class="form-horizontal" role="form" onsubmit="return false">\r\n		<div class="form-group" style="text-align: center;">\r\n			<button class="btn btn-xs btn-primary btn-mergeAddPlan">\r\n				<i class="ace-icon fa fa-plus"></i>\r\n				生成计划 \r\n			</button>\r\n			<button class="btn btn-xs btn-primary btn-chooseMergePlan">\r\n				<i class="ace-icon fa fa-bars"></i>\r\n				选择计划\r\n			 </button>\r\n		</div>\r\n	</form>\r\n</div>\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});