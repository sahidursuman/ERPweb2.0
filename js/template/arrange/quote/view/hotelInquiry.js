/*TMODJS:{"debug":true,"version":63,"md5":"5b35c697320c95fa860fd6cb0f5e7805"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/hotelInquiry", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, lineProductInfo = $data.lineProductInfo, $out = "";
            return $out += '<div class="col-sm-12 T-hotelInquiryContainer globalAdd" style="margin-top:10px;" > <div class="tabbable"> <div class="form-horizontal clearfix"> <div class="col-sm-3 font-size-12 "> <span class="pull-left control-label align-right no-padding-right">产品名称：</span> <span class="control-label">', 
            $line = 6, $out += $escape(lineProductInfo.name), $out += '</span> </div> <div class="col-sm-3 font-size-12 "> <span class="pull-left control-label align-right no-padding-right">类别：</span> <span class="control-label">', 
            $line = 10, $out += $escape(lineProductInfo.type), $out += '</span> </div> <div class="col-sm-3 font-size-12 "> <span class="pull-left control-label align-right no-padding-right">应用范围：</span> <span class="control-label">', 
            $line = 14, $out += $escape(lineProductInfo.customerType), $out += '</span> </div> <div class="col-sm-3 font-size-12 "> <span class="pull-left control-label align-right no-padding-right">天数：</span> <span class="control-label">', 
            $line = 18, $out += $escape(lineProductInfo.days), $out += '</span> </div> <div class="col-sm-3 font-size-12 "> <span class="pull-left control-label align-right no-padding-right">出团日期：</span> <span class="control-label">', 
            $line = 22, $out += $escape(lineProductInfo.startTime), $out += '</span> </div> <div class="col-sm-3 font-size-12 "> <span class="pull-left control-label align-right no-padding-right">人数：</span> <span class="control-label">', 
            $line = 26, $out += $escape(lineProductInfo.adultCount), $out += "大", $line = 26, 
            $out += $escape(lineProductInfo.childCount), $out += '小</span> </div> </div> <div class="search-area clearfix" style="margin: 30px 0;border-top: 1px dotted #ccc;padding: 20px 0;border-bottom: 1px dotted #ccc;"> <div class="col-xs-12"> <label class="pull-left text-right control-label no-padding-right">要求:</label> <span class="R-right T-addSearchCondition cursor" title="添加要求"> <i class="ace-icon fa fa-plus bigger-110 icon-only"></i> </span> </div> <div class="T-searchArea"> <div class="col-xs-12 T-seachAreaDiv"> <label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>房型:</label> <div class="col-sm-1"> <input type="text" class="col-sm-12 width110 T-chooseRoomType" name="roomType" value="', 
            $line = 40, $out += $escape(), $out += '"/> </div> <label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>数量:</label> <div class="col-sm-1"> <input type="text" class="col-sm-12 width110" name="roomCount" value="', 
            $line = 44, $out += $escape(), $out += '"/> </div> <label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>询价截止时间:</label> <div class="col-sm-2"> <input type="text" class="col-sm-12 T-dateTimePicker width110" name="closingTime" value=""/> </div> </div> </div> <div class="col-xs-12"> <button class="btn btn-sm btn-success T-btn-hotelInquiry-search R-right" style="margin-top: 20px"> 搜索 </button> </div> </div> <div class="col-xs-12 T-hotelInquiryList" style="padding:10px 0 0 0;"> </div> <div class="space-10"></div> <div class="col-xs-12" style="padding:10px 0 0 0;"> <table class="table table-striped table-hover add-travelLineList-table all"> <thead> <tr> <th class="th-border">已选酒店</th> </tr> </thead> <tbody> <tr data-entity-id=""> <td> <table class="table table-striped table-hover"> <thead> <tr> <td>酒店</td> <td>联系人</td> <td>联系电话</td> <td>操作</td> </tr> </thead> <tbody class="T-selectedHotelTbody"> </tbody> </table> </td> </tr> </tbody> </table> </div> <div class="form-group col-sm-12" style="text-align: center;"> <button class="btn btn-sm btn-danger otherButton T-closeLayer"> <i class="ace-icon fa fa-times "></i> 取消 </button> <button class="btn btn-sm btn-primary otherButton T-saveHotelInquiry" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> <div class="space-10"></div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 T-hotelInquiryContainer globalAdd" style="margin-top:10px;" >\r\n	<div class="tabbable">\r\n		<div class="form-horizontal clearfix">\r\n			<div class="col-sm-3 font-size-12 ">\r\n	            <span class="pull-left control-label align-right no-padding-right">产品名称：</span>\r\n	            <span class="control-label">{{lineProductInfo.name}}</span>\r\n	        </div>\r\n			<div class="col-sm-3 font-size-12 ">\r\n	            <span class="pull-left control-label align-right no-padding-right">类别：</span>\r\n	            <span class="control-label">{{lineProductInfo.type}}</span>\r\n	        </div>\r\n			<div class="col-sm-3 font-size-12 ">\r\n	            <span class="pull-left control-label align-right no-padding-right">应用范围：</span>\r\n	            <span class="control-label">{{lineProductInfo.customerType}}</span>\r\n	        </div>\r\n			<div class="col-sm-3 font-size-12 ">\r\n	            <span class="pull-left control-label align-right no-padding-right">天数：</span>\r\n	            <span class="control-label">{{lineProductInfo.days}}</span>\r\n	        </div>\r\n			<div class="col-sm-3 font-size-12 ">\r\n	            <span class="pull-left control-label align-right no-padding-right">出团日期：</span>\r\n	            <span class="control-label">{{lineProductInfo.startTime}}</span>\r\n	        </div>\r\n			<div class="col-sm-3 font-size-12 ">\r\n	            <span class="pull-left control-label align-right no-padding-right">人数：</span>\r\n	            <span class="control-label">{{lineProductInfo.adultCount}}大{{lineProductInfo.childCount}}小</span>\r\n	        </div>\r\n		</div>\r\n		<div class="search-area clearfix" style="margin: 30px 0;border-top: 1px dotted #ccc;padding: 20px 0;border-bottom: 1px dotted #ccc;">\r\n			<div class="col-xs-12">\r\n				<label class="pull-left text-right control-label no-padding-right">要求:</label>\r\n	            <span class="R-right T-addSearchCondition cursor" title="添加要求">\r\n	                <i class="ace-icon fa fa-plus bigger-110 icon-only"></i>\r\n	            </span>\r\n			</div>\r\n			<div class="T-searchArea">\r\n				<div class="col-xs-12 T-seachAreaDiv">\r\n					<label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>房型:</label>\r\n					<div class="col-sm-1">\r\n						<input type="text" class="col-sm-12 width110 T-chooseRoomType" name="roomType" value="{{}}"/>\r\n					</div>\r\n					<label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>数量:</label>\r\n					<div class="col-sm-1">\r\n						<input type="text" class="col-sm-12 width110" name="roomCount" value="{{}}"/>\r\n					</div>\r\n					<label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>询价截止时间:</label>\r\n					<div class="col-sm-2">\r\n						<input type="text" class="col-sm-12 T-dateTimePicker width110" name="closingTime" value=""/>\r\n					</div>\r\n				</div>\r\n			</div>\r\n			<div class="col-xs-12">\r\n				<button class="btn btn-sm btn-success T-btn-hotelInquiry-search R-right" style="margin-top: 20px">  搜索 </button>\r\n			</div>\r\n		</div>\r\n		<div class="col-xs-12 T-hotelInquiryList" style="padding:10px 0 0 0;">\r\n			\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<div class="col-xs-12" style="padding:10px 0 0 0;">\r\n			<table class="table table-striped  table-hover add-travelLineList-table all">\r\n				<thead>\r\n					<tr>\r\n						<th class="th-border">已选酒店</th>\r\n					</tr>\r\n				</thead>\r\n				<tbody>\r\n					<tr data-entity-id="">\r\n						<td>\r\n							<table class="table table-striped  table-hover">\r\n								<thead>\r\n									<tr>\r\n										<td>酒店</td>\r\n										<td>联系人</td>\r\n										<td>联系电话</td>\r\n										<td>操作</td>\r\n									</tr>\r\n								</thead>\r\n								<tbody class="T-selectedHotelTbody">\r\n								</tbody>\r\n							</table>\r\n						</td>\r\n					</tr>\r\n				</tbody>\r\n			</table>\r\n		</div>\r\n		<div class="form-group col-sm-12" style="text-align: center;">\r\n			<button class="btn btn-sm btn-danger otherButton T-closeLayer">\r\n				<i class="ace-icon fa fa-times "></i>\r\n				取消\r\n			</button>\r\n			<button class="btn btn-sm btn-primary otherButton T-saveHotelInquiry" style="margin-left: 30px">\r\n				<i class="ace-icon fa fa-check"></i>\r\n				保存\r\n			</button>\r\n		</div>\r\n		<div class="space-10"></div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});