/*TMODJS:{"debug":true,"version":19,"md5":"93cc7d1475fd794031a41a2321a5e690"}*/
define(function(require) {
    return require("../../../template")("arrange/quote/view/inquiryResult", function($data, $filename) {
        try {
            var $utils = this, $line = ($utils.$helpers, 0), $escape = $utils.$escape, a = $data.a, $out = "";
            return $out += '<div class="row col-xs-12"> <div class="tabbable"> <ul class="nav nav-tabs" id="inquiryTab"> <li class="active"> <a data-toggle="tab" href="#busInquiryResult-', 
            $line = 5, $out += $escape(a), $out += '" class="busInquiryResult stateQuoteStyle" aria-expanded="false" data-value="1"> 车 </a> </li> <li> <a data-toggle="tab" href="#hotelInquiryContent-', 
            $line = 10, $out += $escape(a), $out += '" class="hotelInquiryContent stateQuoteStyle" aria-expanded="true" data-value="2"> 房 </a> </li> </ul> <div class="tab-content" style="position:relative;top: -2px">  <div id="busInquiryResult-', 
            $line = 17, $out += $escape(a), $out += '" class="tab-pane fade active in clearfix"> </div>  <div id="hotelInquiryContent-', 
            $line = 20, $out += $escape(a), $out += '" class="tab-pane fade clearfix"> </div> </div> </div> </div> ', 
            new String($out);
        } catch (e) {
            throw {
                filename: $filename,
                name: "Render Error",
                message: e.message,
                line: $line,
                source: '<div class="row col-xs-12">\r\n	<div class="tabbable">\r\n		<ul class="nav nav-tabs" id="inquiryTab">\r\n			<li class="active">\r\n				<a data-toggle="tab" href="#busInquiryResult-{{a}}" class="busInquiryResult stateQuoteStyle" aria-expanded="false" data-value="1">\r\n					车\r\n				</a>\r\n			</li>\r\n			<li>\r\n				<a data-toggle="tab" href="#hotelInquiryContent-{{a}}" class="hotelInquiryContent stateQuoteStyle" aria-expanded="true" data-value="2">\r\n					房\r\n				</a>\r\n			</li>\r\n		</ul>\r\n		<div class="tab-content" style="position:relative;top: -2px">\r\n			<!--车 询价状态-->\r\n			<div id="busInquiryResult-{{a}}" class="tab-pane fade active in clearfix">\r\n			</div>\r\n			<!--房 询价状态-->\r\n			<div id="hotelInquiryContent-{{a}}" class="tab-pane fade clearfix">\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>\r\n\r\n\r\n\r\n'.split(/\n/)[$line - 1].replace(/^\s+/, "")
            };
        }
    });
});