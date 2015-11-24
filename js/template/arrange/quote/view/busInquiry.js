/*TMODJS:{"debug":true,"version":92,"md5":"957af30882ce1d2d6d14fb49dfa7092b"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/busInquiry", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, lineProductInfo = $data.lineProductInfo, $out = "";
            return $out += '<div class="col-sm-12 T-busInquiryContainer globalAdd" style="margin-top:10px;" > <div class="tabbable T-busInquiry"> <div class="form-horizontal clearfix"> <div class="col-sm-3 font-size-12 "> <span class="pull-left control-label align-right no-padding-right">产品名称：</span> <span class="control-label">', 
            $line = 6, $out += $escape(lineProductInfo.name), $out += '</span> </div> <div class="col-sm-3 font-size-12 "> <span class="pull-left control-label align-right no-padding-right">类别：</span> <span class="control-label">', 
            $line = 10, $out += $escape(lineProductInfo.type), $out += '</span> </div> <div class="col-sm-3 font-size-12 "> <span class="pull-left control-label align-right no-padding-right">应用范围：</span> <span class="control-label">', 
            $line = 14, $out += $escape(lineProductInfo.customerType), $out += '</span> </div> <div class="col-sm-3 font-size-12 "> <span class="pull-left control-label align-right no-padding-right">天数：</span> <span class="control-label">', 
            $line = 18, $out += $escape(lineProductInfo.days), $out += '</span> </div> <div class="col-sm-3 font-size-12 margin-top10"> <span class="pull-left control-label align-right no-padding-right">出团日期：</span> <span class="control-label">', 
            $line = 22, $out += $escape(lineProductInfo.startTime), $out += '</span> </div> <div class="col-sm-3 font-size-12 margin-top10"> <span class="pull-left control-label align-right no-padding-right">人数：</span> <span class="control-label">', 
            $line = 26, $out += $escape(lineProductInfo.adultCount), $out += "大", $line = 26, 
            $out += $escape(lineProductInfo.childCount), $out += '小</span> </div> </div> <div class="search-area clearfix" style="margin: 18px 0;border-top: 1px dotted #ccc;padding: 20px 0;border-bottom: 1px dotted #ccc;"> <label class="pull-left text-right control-label no-padding-right">要求:</label> <label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>车座数:</label> <div class="col-sm-2 busQuoteWidth"> <input type="text" class="col-sm-12 width110 T-chooseSeatCount" name="seatCount" value=""/> </div> <label class="pull-left text-right control-label no-padding-right">车辆品牌:</label> <div class="col-sm-2 busQuoteWidth"> <input type="text" class="col-sm-12 width110 T-chooseBusBrand" name="busBrand" value=""/> </div> <label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>询价截止时间:</label> <div class="col-sm-2 busQuoteWidth"> <input type="text" class="col-sm-12 T-dateTimePicker busQuoteWidth" name="expiryTime" value=""/> </div> <button class="btn btn-sm btn-success T-btn-busInquiry-search R-right" style="margin-left: 20px"> 搜索 </button> </div> <div class="col-xs-12 T-busInquiryList" style="padding:10px 0 0 0;"> </div> <div class="space-10"></div> <div class="form-group col-sm-12" style="text-align: center;"> <button class="btn btn-sm btn-danger otherButton T-closeLayer"> <i class="ace-icon fa fa-times "></i> 取消 </button> <button class="btn btn-sm btn-primary otherButton T-saveBusInquiry" style="margin-left: 30px"> <i class="ace-icon fa fa-check"></i> 保存 </button> </div> <div class="space-10"></div> </div> </div>', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="col-sm-12 T-busInquiryContainer globalAdd" style="margin-top:10px;" >\r\n	<div class="tabbable T-busInquiry">\r\n		<div class="form-horizontal clearfix">\r\n			<div class="col-sm-3 font-size-12 ">\r\n	            <span class="pull-left control-label align-right no-padding-right">产品名称：</span>\r\n	            <span class="control-label">{{lineProductInfo.name}}</span>\r\n	        </div>\r\n			<div class="col-sm-3 font-size-12 ">\r\n	            <span class="pull-left control-label align-right no-padding-right">类别：</span>\r\n	            <span class="control-label">{{lineProductInfo.type}}</span>\r\n	        </div>\r\n			<div class="col-sm-3 font-size-12 ">\r\n	            <span class="pull-left control-label align-right no-padding-right">应用范围：</span>\r\n	            <span class="control-label">{{lineProductInfo.customerType}}</span>\r\n	        </div>\r\n			<div class="col-sm-3 font-size-12 ">\r\n	            <span class="pull-left control-label align-right no-padding-right">天数：</span>\r\n	            <span class="control-label">{{lineProductInfo.days}}</span>\r\n	        </div>\r\n			<div class="col-sm-3 font-size-12 margin-top10">\r\n	            <span class="pull-left control-label align-right no-padding-right">出团日期：</span>\r\n	            <span class="control-label">{{lineProductInfo.startTime}}</span>\r\n	        </div>\r\n			<div class="col-sm-3 font-size-12 margin-top10">\r\n	            <span class="pull-left control-label align-right no-padding-right">人数：</span>\r\n	            <span class="control-label">{{lineProductInfo.adultCount}}大{{lineProductInfo.childCount}}小</span>\r\n	        </div>\r\n		</div>\r\n		<div class="search-area clearfix" style="margin: 18px 0;border-top: 1px dotted #ccc;padding: 20px 0;border-bottom: 1px dotted #ccc;">\r\n			<label class="pull-left text-right control-label no-padding-right">要求:</label>\r\n			<label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>车座数:</label>\r\n			<div class="col-sm-2 busQuoteWidth">\r\n				<input type="text" class="col-sm-12 width110 T-chooseSeatCount" name="seatCount" value=""/>\r\n			</div>\r\n			<label class="pull-left text-right control-label no-padding-right">车辆品牌:</label>\r\n			<div class="col-sm-2 busQuoteWidth">\r\n				<input type="text" class="col-sm-12 width110 T-chooseBusBrand" name="busBrand" value=""/>\r\n			</div>\r\n			<label class="pull-left text-right control-label no-padding-right"><span class="necessary">*</span>询价截止时间:</label>\r\n			<div class="col-sm-2 busQuoteWidth">\r\n				<input type="text" class="col-sm-12 T-dateTimePicker busQuoteWidth" name="expiryTime" value=""/>\r\n			</div>\r\n			<button class="btn btn-sm btn-success T-btn-busInquiry-search R-right" style="margin-left: 20px">  搜索 </button>\r\n		</div>\r\n		<div class="col-xs-12 T-busInquiryList" style="padding:10px 0 0 0;">\r\n			\r\n		</div>\r\n		<div class="space-10"></div>\r\n		<div class="form-group col-sm-12" style="text-align: center;">\r\n			<button class="btn btn-sm btn-danger otherButton T-closeLayer">\r\n				<i class="ace-icon fa fa-times "></i>\r\n				取消\r\n			</button>\r\n			<button class="btn btn-sm btn-primary otherButton T-saveBusInquiry" style="margin-left: 30px">\r\n				<i class="ace-icon fa fa-check"></i>\r\n				保存\r\n			</button>\r\n		</div>\r\n		<div class="space-10"></div>\r\n	</div>\r\n</div>'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});