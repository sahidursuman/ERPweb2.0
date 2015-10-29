/*TMODJS:{"debug":true,"version":101,"md5":"f973ca3bd3cafe57313e6ed101c34f5a"}*/
define(function(require) {
    return require("../../../template")("arrange/arrangeTourist/view/listMain", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $each = $utils.$each, lineProductList = $data.lineProductList, $escape = ($data.lineProduct, 
            $data.$index, $utils.$escape), $out = "";
            return $out += '<div class="row"> <div class="col-xs-12 arrangeTouristMain globalAdd"> <div class="search-area"> <form class="form-horizontal" role="form" onsubmit="return false"> <div class="form-group" style="max-width: 1100px;"> <label class="pull-left control-label no-padding-right" style="margin-left: 20px">线路产品：</label> <div class="col-sm-3 marginLeft-Right7"> <select name="lineProductId" class="col-xs-10"> <option></option> ', 
            $line = 10, $each(lineProductList, function(lineProduct) {
                $out += ' <option value="', $line = 11, $out += $escape(lineProduct.id), $out += '">', 
                $line = 11, $out += $escape(lineProduct.name), $out += "</option> ", $line = 12;
            }), $out += ' </select> </div> <label class="pull-left control-label no-padding-right">出游日期：</label> <div class="col-sm-2 marginLeft-Right7"> <input name="startTime" value="" type="text" class="date-picker col-xs-11"/> </div> <button class=" btn-sm btn-arrangeTourist-search search-btn" style="margin-left: 2px"> <i class="ace-icon fa fa-search"></i> 搜索 </button> </div> </form> </div> <div class="row"> <div class="col-xs-12 arrangeTouristList"> </div> </div> <div class="col-xs-12 arrangeTouristMergeList"> <div> <button class="btn btn-sm btn-success btn-start-touristGroup-merge R-right" data-right="1130004"> <i class="ace-icon fa fa-user-plus"></i> 开始并团 </button> </div> <div class="space-10"></div> <div class="list"> </div> </div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row">\r\n	<div class="col-xs-12 arrangeTouristMain globalAdd">\r\n		<div class="search-area">\r\n			<form class="form-horizontal" role="form" onsubmit="return false">\r\n				<div class="form-group" style="max-width: 1100px;">\r\n					<label class="pull-left control-label no-padding-right" style="margin-left: 20px">线路产品：</label>\r\n					<div class="col-sm-3 marginLeft-Right7">\r\n						<select name="lineProductId" class="col-xs-10">\r\n							<option></option>\r\n							{{each lineProductList as lineProduct}}\r\n								<option value="{{lineProduct.id}}">{{lineProduct.name}}</option>\r\n							{{/each}}\r\n						</select>\r\n					</div>\r\n\r\n				\r\n					<label class="pull-left control-label no-padding-right">出游日期：</label>\r\n					<div class="col-sm-2 marginLeft-Right7">\r\n						<input name="startTime" value="" type="text" class="date-picker col-xs-11"/>\r\n					</div>\r\n					\r\n					<button class=" btn-sm  btn-arrangeTourist-search search-btn" style="margin-left: 2px">\r\n						<i class="ace-icon fa fa-search"></i>\r\n						搜索\r\n					</button>\r\n				</div>\r\n			</form>\r\n		</div>\r\n		<div class="row">\r\n			<div class="col-xs-12 arrangeTouristList">\r\n\r\n\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 arrangeTouristMergeList">\r\n			<div>\r\n				<button class="btn btn-sm btn-success btn-start-touristGroup-merge R-right" data-right="1130004">\r\n					<i class="ace-icon fa fa-user-plus"></i>\r\n					开始并团\r\n				</button>\r\n			</div>\r\n			<div class="space-10"></div>\r\n			<div class="list">\r\n\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});